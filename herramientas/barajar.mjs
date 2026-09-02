/* Reordena las opciones de las preguntas tipo test para que la respuesta
   correcta no caiga siempre en la misma posición:

       node herramientas/barajar.mjs              # todas las fichas
       node herramientas/barajar.mjs f17- f18-    # solo esos prefijos
       node herramientas/barajar.mjs --seco       # sin escribir nada

   Por qué existe: escribiendo preguntas a mano la correcta tiende a caer en
   la segunda opción. Ha pasado en todos los bloques —una vez, 297 de 300—, y
   es invisible al leer la ficha pero convierte el test en un regalo. El
   validador lo detecta después; esto lo arregla antes.

   Trabaja sobre el TEXTO fuente y solo mueve de sitio los elementos de los
   dos arrays, sin reescribirlos: así se conservan escapes, acentos y las
   fórmulas exactamente como estaban. `porque` viaja con `opciones` en el
   mismo orden, que es la condición de la que depende todo lo demás. */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(raiz, "src", "datos", "fichas");

const seco = process.argv.includes("--seco");
const SOLO = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const tocaBarajar = (f) => SOLO.length === 0 || SOLO.some((p) => f.startsWith(p));

/* Generador determinista sembrado con el texto de la ficha: la misma ficha da
   siempre la misma baraja, así que volver a pasar el script no vuelve a mover
   nada y el resultado es reproducible. */
function semilla(txt) {
  let h = 2166136261;
  for (let i = 0; i < txt.length; i++) { h ^= txt.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rng(s) {
  let a = s;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Localiza un array literal a partir de la posición de su «[» y devuelve sus
   elementos como trozos de texto, respetando cadenas, escapes y anidamiento. */
function trocearArray(txt, inicio) {
  let i = inicio + 1, prof = 0, comilla = null, ini = i;
  const partes = [];
  for (; i < txt.length; i++) {
    const c = txt[i];
    if (comilla) {
      if (c === "\\") { i++; continue; }
      if (c === comilla) comilla = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { comilla = c; continue; }
    if (c === "[" || c === "{" || c === "(") { prof++; continue; }
    if (c === "}" || c === ")") { prof--; continue; }
    if (c === "]") {
      if (prof === 0) {
        partes.push(txt.slice(ini, i));
        /* Coma final: deja un último elemento en blanco que no es una opción.
           Hay que apartarlo, porque barajarlo metería un hueco en el array. */
        const colgante = partes.length > 1 && partes[partes.length - 1].trim() === "";
        if (colgante) partes.pop();
        return { partes, fin: i, colgante };
      }
      prof--; continue;
    }
    if (c === "," && prof === 0) { partes.push(txt.slice(ini, i)); ini = i + 1; }
  }
  throw new Error("array sin cerrar");
}

const archivos = fs.readdirSync(DIR).filter((f) => /^f\d+-\d+\.js$/.test(f) && tocaBarajar(f)).sort();
let total = 0, movidas = 0;
const reparto = { a: 0, b: 0, c: 0, d: 0 };
const fallos = [];

for (const archivo of archivos) {
  const ruta = path.join(DIR, archivo);
  let txt = fs.readFileSync(ruta, "utf8");
  const dado = rng(semilla(archivo));
  let cambiado = false;

  /* Se recorre de atrás hacia adelante para que los índices de las
     coincidencias que quedan por tratar no se desplacen al reescribir. */
  const anclas = [...txt.matchAll(/opciones:\s*\[/g)].map((m) => m.index + m[0].length - 1).reverse();

  for (const posOpc of anclas) {
    const opc = trocearArray(txt, posOpc);
    const cola = txt.slice(opc.fin, opc.fin + 400);
    const mCorr = /correcta:\s*(\d+)/.exec(cola);
    const posPor = txt.indexOf("porque: [", opc.fin);
    if (!mCorr || posPor === -1) { fallos.push(`${archivo}: pregunta sin correcta o sin porque`); continue; }
    /* Posición absoluta del número, para no depender de índices que las
       propias reescrituras van a desplazar. */
    const posCorr = opc.fin + mCorr.index;
    const por = trocearArray(txt, posPor + "porque: ".length);
    if (por.partes.length !== opc.partes.length) { fallos.push(`${archivo}: ${opc.partes.length} opciones y ${por.partes.length} explicaciones`); continue; }

    const correcta = Number(mCorr[1]);
    const textoCorrecto = opc.partes[correcta];
    const porqueCorrecto = por.partes[correcta];

    const orden = opc.partes.map((_, i) => i);
    for (let i = orden.length - 1; i > 0; i--) {
      const j = Math.floor(dado() * (i + 1));
      [orden[i], orden[j]] = [orden[j], orden[i]];
    }
    const nuevaCorrecta = orden.indexOf(correcta);
    if (nuevaCorrecta < 0 || nuevaCorrecta >= opc.partes.length) {
      fallos.push(`${archivo}: índice de la correcta fuera de rango tras barajar`);
      continue;
    }
    total++;
    reparto["abcd"[nuevaCorrecta]] = (reparto["abcd"[nuevaCorrecta]] || 0) + 1;
    if (orden.some((v, i) => v !== i)) { movidas++; cambiado = true; }

    /* Invariante: la opción correcta y su explicación siguen emparejadas. */
    const nuevasOpc = orden.map((i) => opc.partes[i]);
    const nuevasPor = orden.map((i) => por.partes[i]);
    if (nuevasOpc[nuevaCorrecta] !== textoCorrecto || nuevasPor[nuevaCorrecta] !== porqueCorrecto) {
      fallos.push(`${archivo}: se ha roto el emparejamiento opción/explicación`);
      continue;
    }

    /* Las tres reescrituras van de la última posición a la primera: así
       ninguna desplaza los índices que las siguientes todavía necesitan.
       Hacerlo al revés fue el fallo que tuvo la primera versión. */
    txt = txt.slice(0, posPor + "porque: [".length) + nuevasPor.join(",") + (por.colgante ? "," : "") + txt.slice(por.fin);
    txt = txt.slice(0, posCorr) + `correcta: ${nuevaCorrecta}` + txt.slice(posCorr + mCorr[0].length);
    txt = txt.slice(0, posOpc + 1) + nuevasOpc.join(",") + (opc.colgante ? "," : "") + txt.slice(opc.fin);
  }

  if (cambiado && !seco) fs.writeFileSync(ruta, txt, "utf8");
}

console.log(`Preguntas: ${total}. Reordenadas: ${movidas}${seco ? " (simulado)" : ""}`);
console.log(`Reparto de la correcta:  a ${reparto.a}   b ${reparto.b}   c ${reparto.c}   d ${reparto.d}`);
if (fallos.length) {
  console.error("\n✗ incidencias:");
  fallos.forEach((f) => console.error("  " + f));
  process.exit(1);
}
console.log("✓ cada explicación sigue con su opción");
