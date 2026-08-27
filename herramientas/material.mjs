/* Vuelca en compacto lo que hace falta para escribir el test de una ficha:
   el núcleo, las identidades de la formalización y los errores típicos, que
   son de donde salen los distractores. Andamio, no parte de la comprobación.
   Uso:  node herramientas/material.mjs 1.01 1.02 …   |   node … bloque 1   */
import fs from "fs";

const args = process.argv.slice(2);
let codigos = args;
if (args[0] === "bloque") {
  const b = args[1];
  codigos = fs.readdirSync("src/datos/fichas")
    .filter((f) => new RegExp(`^f${b}-\\d+\\.js$`).test(f))
    .sort((x, y) => Number(x.match(/-(\d+)/)[1]) - Number(y.match(/-(\d+)/)[1]))
    .map((f) => f.replace(/^f|\.js$/g, "").replace("-", "."));
}

const corto = (s, n) => (s || "").replace(/\s+/g, " ").slice(0, n);

for (const c of codigos) {
  const { default: f } = await import(`../src/datos/fichas/f${c.replace(".", "-")}.js`);
  const yaTiene = f.secciones.some((s) => (s.contenido || []).some((b) => b.tipo === "test"));
  console.log(`\n${"═".repeat(78)}\n${f.codigo} · ${f.titulo}${yaTiene ? "   [YA TIENE TEST]" : ""}`);
  console.log(`NÚCLEO: ${corto(f.nucleo, 400)}`);

  const form = f.secciones.find((s) => s.titulo === "Formalización");
  if (form) {
    const filas = (form.contenido || []).flatMap((b) => b.filas || []);
    if (filas.length) {
      console.log("FORMALIZACIÓN:");
      for (const fi of filas) console.log(`  · ${fi.nom} = ${corto((fi.cols || []).join(" | "), 90)}`);
    }
  }

  const err = f.secciones.find((s) => s.titulo === "Errores típicos");
  const items = err ? (err.contenido || []).flatMap((b) => b.items || []) : [];
  if (items.length) {
    console.log("ERRORES TÍPICOS (materia prima de los distractores):");
    for (const e of items) console.log(`  ${e.t}\n      ${corto(e.d, 230)}`);
  }

  const comp = f.secciones.find((s) => s.titulo === "Compruébate");
  const qs = comp ? (comp.contenido || []).flatMap((b) => b.items || []) : [];
  if (qs.length) {
    console.log("YA PREGUNTADO EN «COMPRUÉBATE» (no repetir):");
    for (const q of qs) console.log(`  · ${corto(q.q, 110)}`);
  }
}
