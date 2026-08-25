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
  "preguntas", "destacado", "fuentes", "diario", "grafico",
]);
const SECCIONES = ["Errores típicos", "Compruébate", "Para profundizar", "Puente con la contabilidad nacional"];
const CAMPOS = ["tiempo", "nucleo", "requiere", "abre"];

const archivos = fs.readdirSync(dir).filter((f) => /^f\d+-\d+\.js$/.test(f)).sort();
let incidencias = 0;
let graficos = 0;
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

  for (const s of f.secciones) {
    for (const b of s.contenido) {
      if (!TIPOS.has(b.tipo)) err(`tipo desconocido: ${b.tipo}`);
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
    ? `\nSin incidencias en las ${archivos.length} fichas. Gráficos: ${graficos}`
    : `\n${incidencias} incidencias.`
);
console.log("Progreso:", archivos.length, "/", Object.keys(temas).length);
console.log(Object.entries(porBloque).sort((a, b) => a[0] - b[0]).map(([k, v]) => `b${k}:${v}`).join("  "));

process.exit(incidencias === 0 ? 0 : 1);
