/* Busqueda local sobre el corpus completo.

   No hay servidor ni biblioteca: el indice se genera en tiempo de compilacion
   con herramientas/indice-busqueda.mjs y se carga como un chunk aparte. Aqui
   viven solo las funciones puras, que son las mismas que usa el generador
   para trocear las fichas. */

import { legible } from "./formula.js";
import { lematizar } from "./lematizar.js";

/* Palabras demasiado frecuentes para discriminar. Sin ellas el indice baja
   casi a la mitad y los resultados no empeoran. */
const VACIAS = new Set(
  ("que los las del una con por para como este esta estos estas pero sus\n" +
   "cuando donde porque sobre entre desde hasta segun mas menos muy tan\n" +
   "todo toda todos todas otro otra otros otras cada mismo misma sino\n" +
   "ser son era eran hay han han sido tiene tienen hace hacen puede pueden\n" +
   "solo aunque tambien ademas decir dice ese esa esos esas cual cuales\n" +
   "haber sido siendo estar esta estan fue fueron seria serian debe deben\n" +
   "lo la el en de un uno y o a al se su le les nos ni si no es ya\n" +
   "porque entonces asi bien caso casos parte partes forma formas vez veces\n" +
   "aqui alli ahi ahora luego antes despues siempre nunca menos toda"
  ).split(/\s+/)
);

/* Quita tildes y baja a minusculas, para que «economia» encuentre «economía». */
export function normalizar(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9ñ. ]+/g, " ");
}

/* Devuelve los lemas, no las palabras: «bonos» y «bono» tienen que dar el
   mismo término o el índice los guarda por separado y una consulta falla
   según qué flexión use el texto. Se lematiza aquí, en el único sitio por
   el que pasan tanto el indexador como el buscador, para que no puedan
   desincronizarse. Como el lema es siempre prefijo de la palabra, el
   resaltado de los extractos sigue funcionando sin tocar nada. */
export function trocear(s) {
  return normalizar(s)
    .split(/[\s.]+/)
    .filter((t) => t.length >= 3 && t.length <= 24 && !VACIAS.has(t) && !/^\d+$/.test(t))
    .map(lematizar);
}

/* Recorre una ficha y devuelve sus textos. Es deliberadamente generico:
   si manana aparece un tipo de bloque nuevo, entra sin tocar nada. */
export function textosDeFicha(ficha) {
  const fragmentos = [];
  const destacado = [];

  const meter = (v, seccion, esDestacado) => {
    if (typeof v === "string") {
      // Las fórmulas se guardan como se leen, no como se escriben: si no,
      // el índice acaba lleno de «dfrac» y «mathrm» y los extractos de
      // resultados enseñan el LaTeX en crudo.
      v = legible(v);
      if (v.length < 3) return;
      if (esDestacado) destacado.push(v);
      else if (v.length >= 40) fragmentos.push({ seccion, texto: v });
      else fragmentos.push({ seccion, texto: v, corto: true });
    } else if (Array.isArray(v)) {
      v.forEach((x) => meter(x, seccion, esDestacado));
    } else if (v && typeof v === "object") {
      for (const k of Object.keys(v)) {
        if (k === "tipo" || k === "color" || k === "puntos" || k === "clase") continue;
        if (k === "modo" || k === "ancla" || k === "alto" || k === "dominio") continue;
        meter(v[k], seccion, esDestacado);
      }
    }
  };

  destacado.push(ficha.titulo, ficha.bloque);
  if (ficha.nucleo) destacado.push(ficha.nucleo);
  (ficha.secciones || []).forEach((sec) => {
    destacado.push(sec.titulo);
    meter(sec.contenido, sec.titulo, false);
  });

  return { fragmentos, destacado };
}

/* --- Consulta ------------------------------------------------------ */

const B36 = 36;
function leerPosting(cadena) {
  const out = [];
  for (let i = 0; i + 4 <= cadena.length; i += 4) {
    out.push([parseInt(cadena.slice(i, i + 2), B36), parseInt(cadena.slice(i + 2, i + 4), B36)]);
  }
  return out;
}

/* Un termino de la consulta se expande a todas las entradas del indice que
   empiezan igual, para que «impuest» encuentre «impuestos» e «impuesto». */
function expandir(indice, claves, termino) {
  if (indice[termino]) return [termino];
  const out = [];
  for (const k of claves) {
    if (k.startsWith(termino)) {
      out.push(k);
      if (out.length >= 60) break;
    }
  }
  return out;
}

export function consultar({ indice, claves, docs, consulta, limite = 20 }) {
  const terminos = trocear(consulta);
  if (!terminos.length) return { terminos: [], resultados: [] };

  /* Se puntua cada documento y se cuenta cuantos terminos de la consulta ha
     encontrado. Ordenar primero por cobertura da el efecto de un AND cuando
     algun documento los tiene todos, y degrada con suavidad cuando ninguno
     los tiene: mejor cuatro resultados imperfectos que la pagina vacia. */
  const punt = new Map();
  const cobertura = new Map();

  for (const t of terminos) {
    const parcial = new Map();
    for (const clave of expandir(indice, claves, t)) {
      const exacto = clave === t ? 1 : 0.75; // el prefijo puntua algo menos
      for (const [doc, peso] of leerPosting(indice[clave])) {
        const v = peso * exacto;
        if (!parcial.has(doc) || parcial.get(doc) < v) parcial.set(doc, v);
      }
    }
    for (const [doc, v] of parcial) {
      punt.set(doc, (punt.get(doc) || 0) + v);
      cobertura.set(doc, (cobertura.get(doc) || 0) + 1);
    }
  }
  if (!punt.size) return { terminos, resultados: [] };

  const maxCob = Math.max(...cobertura.values());
  const resultados = [...punt]
    .filter(([doc]) => cobertura.get(doc) === maxCob)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .slice(0, limite)
    .map(([doc, p]) => ({ ...docs[doc], punt: p, cobertura: maxCob }));

  return { terminos, resultados, cobertura: maxCob, total: terminos.length };
}

/* Elige el fragmento que mejor representa el resultado y marca en negrita
   los terminos encontrados, para que enLinea lo pinte sin codigo extra. */
export function extracto(ficha, terminos, largo = 230) {
  const { fragmentos } = textosDeFicha(ficha);
  let mejor = null;
  let mejorPunt = -1;
  for (const f of fragmentos) {
    if (f.corto) continue;
    const n = normalizar(f.texto);
    let punt = 0;
    for (const t of terminos) {
      const i = n.indexOf(t);
      if (i >= 0) punt += 1 + (i < 120 ? 0.3 : 0);
    }
    if (punt > mejorPunt) {
      mejorPunt = punt;
      mejor = f;
    }
  }
  if (!mejor) return null;

  let texto = mejor.texto.replace(/\*\*/g, "");
  const n = normalizar(texto);
  let centro = 0;
  for (const t of terminos) {
    const i = n.indexOf(t);
    if (i >= 0) { centro = i; break; }
  }
  let ini = Math.max(0, centro - 70);
  if (ini > 0) {
    const esp = texto.indexOf(" ", ini);
    ini = esp > 0 && esp - ini < 20 ? esp + 1 : ini;
  }
  texto = texto.slice(ini, ini + largo);
  if (ini > 0) texto = "… " + texto;
  if (ini + largo < mejor.texto.length) texto = texto.replace(/\s+\S*$/, "") + " …";

  // Marcamos los terminos con ** para que enLinea los pinte en negrita.
  const alt = terminos.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const marcado = texto.replace(
    new RegExp("[\\wÀ-ÿñÑ]*(?:" + alt + ")[\\wÀ-ÿñÑ]*", "gi"),
    (m) => "**" + m + "**"
  );
  return { seccion: mejor.seccion, texto: marcado };
}
