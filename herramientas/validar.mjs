/* Comprueba que las fichas escritas y el temario no se hayan desincronizado.
   Ejecutar tras añadir o editar cualquier ficha:

       npm run check

   Sale con código 1 si encuentra algo, para poder encadenarlo antes de
   publicar. Lo que revisa, ficha a ficha:

     · el código existe en el temario
     · título, nivel y bloque coinciden exactamente con el temario
     · el nombre del archivo corresponde al código (f14-09.js ↔ "14.09")
     · está registrada en index.js (si no, existe pero no se puede abrir)
     · están las cuatro secciones obligatorias y los cuatro campos de cabecera
     · los códigos citados en «requiere» y «abre» existen en el temario
     · no hay tipos de bloque desconocidos
     · las coordenadas de los gráficos son pares de números finitos

   Lo último es lo que impide que un NaN suelto rompa una ficha en silencio:
   el gráfico se pinta igual, pero con la línea partida. */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(raiz, "src", "datos", "fichas");

const { BLOQUES } = await import(path.join(raiz, "src", "datos", "temario.js"));
const indice = fs.readFileSync(path.join(dir, "index.js"), "utf8");

/* El temario es la fuente canónica: la ficha se compara contra él, nunca al
   revés. Los códigos se derivan de la posición, igual que en temario.js. */
const temas = {};
for (const b of BLOQUES) {
  b.temas.forEach((t, i) => {
    temas[`${b.id}.${String(i + 1).padStart(2, "0")}`] = { ...t, bloque: b.nombre };
  });
}

const TIPOS = new Set([
  "parrafos", "rejilla", "pasos", "tabla", "acordeon",
  "preguntas", "destacado", "fuentes", "diario", "grafico", "test",
]);
const SECCIONES = ["Errores típicos", "Compruébate", "Para profundizar", "Puente con la contabilidad nacional"];
const CAMPOS = ["tiempo", "nucleo", "requiere", "abre"];

/* Cada entrada de «requiere»/«abre» empieza por el código; el resto es una
   etiqueta libre que no tiene por qué coincidir con el título del temario. */
const REF = /^(\d{1,2}\.\d{2})\b/;
const referencias = (txt) => (txt || "").split("·").map((x) => x.trim()).filter(Boolean)
  .map((x) => REF.exec(x)).filter(Boolean).map((m) => m[1]);

const archivos = fs.readdirSync(dir).filter((f) => /^f\d+-\d+\.js$/.test(f)).sort();
const prerreq = {};
let incidencias = 0;
let graficos = 0;
let testItems = 0;
const porBloque = {};

for (const archivo of archivos) {
  const { default: f } = await import(path.join(dir, archivo));
  const t = temas[f.codigo];
  const err = (s) => { console.log(`  ✗ ${archivo}: ${s}`); incidencias++; };

  if (!t) { err("código no existe en temario"); continue; }
  if (f.titulo !== t.t) err(`título ≠ temario\n     ficha:   ${f.titulo}\n     temario: ${t.t}`);
  if (f.nivel !== t.n) err(`nivel ${f.nivel} ≠ ${t.n}`);
  if (f.bloque !== t.bloque) err(`bloque "${f.bloque}" ≠ "${t.bloque}"`);
  if (archivo !== "f" + f.codigo.replace(".", "-") + ".js") err("nombre de archivo ≠ código");
  if (!indice.includes(`"${f.codigo}":`)) err("no registrada en index.js");

  const titulos = f.secciones.map((s) => s.titulo);
  for (const req of SECCIONES) if (!titulos.includes(req)) err(`falta sección «${req}»`);
  for (const k of CAMPOS) if (!f[k]) err(`falta campo ${k}`);

  for (const campo of ["requiere", "abre"]) {
    for (const cod of referencias(f[campo])) {
      if (!temas[cod]) err(`${campo} apunta a ${cod}, que no existe en el temario`);
      else if (cod === f.codigo) err(`${campo} se apunta a sí misma`);
    }
  }
  prerreq[f.codigo] = referencias(f.requiere).filter((c) => temas[c] && c !== f.codigo);

  for (const s of f.secciones) {
    for (const b of s.contenido) {
      if (!TIPOS.has(b.tipo)) err(`tipo desconocido: ${b.tipo}`);

      /* Un test mal formado no rompe el render, solo enseña mal: una
         «correcta» fuera de rango marcaría buena una opción inexistente
         y ninguna otra comprobación lo notaría. */
      if (b.tipo === "test") {
        (b.items || []).forEach((p, i) => {
          testItems++;
          const donde = `test #${i + 1}`;
          const n = (p.opciones || []).length;
          if (n < 3) err(`${donde}: ${n} opciones, hacen falta al menos 3`);
          if (!Number.isInteger(p.correcta) || p.correcta < 0 || p.correcta >= n)
            err(`${donde}: «correcta» = ${p.correcta} fuera de rango`);
          if (new Set(p.opciones).size !== n) err(`${donde}: opciones repetidas`);
          if ((p.porque || []).length !== n)
            err(`${donde}: ${(p.porque || []).length} explicaciones para ${n} opciones`);
          if (!p.q) err(`${donde}: sin enunciado`);
        });
        continue;
      }

      if (b.tipo !== "grafico") continue;
      graficos++;
      const chk = (pts, donde) => (pts || []).forEach((p) => {
        if (!Array.isArray(p) || p.length !== 2 || !p.every((v) => Number.isFinite(v)))
          err(`punto inválido en ${donde}: ${JSON.stringify(p)}`);
      });
      (b.series || []).forEach((s2) => chk(s2.puntos, `serie ${s2.nombre}`));
      (b.areas || []).forEach((ar, i) => chk(ar.puntos, `área ${i}`));
      (b.puntos || []).forEach((p) => {
        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) err("punto señalado inválido");
      });
    }
  }

  const bl = f.codigo.split(".")[0];
  porBloque[bl] = (porBloque[bl] || 0) + 1;
}

console.log(
  incidencias === 0
    ? `\nSin incidencias en las ${archivos.length} fichas. Gráficos: ${graficos}. Preguntas de test: ${testItems}`
    : `\n${incidencias} incidencias.`
);
console.log("Progreso:", archivos.length, "/", Object.keys(temas).length);

/* Los ciclos no son un error: el WACC necesita la beta y la beta necesita el
   WACC. Se informan porque la ruta de estudio tiene que romperlos, y conviene
   saber cuántos hay. */
{
  const n = (c) => { const [x, y] = c.split(".").map(Number); return x * 100 + y; };
  const nodos = Object.keys(prerreq);
  const pend = new Map(nodos.map((c) => [c, new Set(prerreq[c])]));
  const hechas = new Set();
  const blandas = [];
  let vueltas = 0;
  while (hechas.size < nodos.length && vueltas++ < nodos.length + 5) {
    const libres = nodos.filter((c) => !hechas.has(c) && [...pend.get(c)].every((p) => hechas.has(p)));
    if (libres.length) { libres.forEach((c) => hechas.add(c)); continue; }
    const resto = nodos.filter((c) => !hechas.has(c));
    let roto = false;
    for (const c of resto) for (const p of [...pend.get(c)])
      if (!hechas.has(p) && n(p) > n(c)) { pend.get(c).delete(p); blandas.push(`${c}→${p}`); roto = true; }
    if (!roto) break;
  }
  console.log(
    blandas.length
      ? `Ciclos: ${blandas.length} arista(s) que la ruta ablanda — ${blandas.join(" ")}`
      : "Ciclos: ninguno"
  );
}
console.log(Object.entries(porBloque).sort((a, b) => a[0] - b[0]).map(([k, v]) => `b${k}:${v}`).join("  "));

process.exit(incidencias === 0 ? 0 : 1);
