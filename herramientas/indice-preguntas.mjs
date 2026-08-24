/* Genera src/datos/preguntas.js a partir de las secciones «Compruébate»
   de todas las fichas. Ejecutar tras añadir o editar preguntas:

       node herramientas/indice-preguntas.mjs

   El índice se carga aparte del temario, solo al entrar en el repaso. */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(raiz, "src", "datos", "fichas");

const archivos = fs.readdirSync(dir).filter((f) => /^f\d+-\d+\.js$/.test(f)).sort();
const salida = [];

for (const archivo of archivos) {
  const { default: ficha } = await import(path.join(dir, archivo));
  let n = 0;
  for (const seccion of ficha.secciones) {
    for (const bloque of seccion.contenido) {
      if (bloque.tipo !== "preguntas") continue;
      for (const item of bloque.items) {
        salida.push({
          id: `${ficha.codigo}#${n}`,
          codigo: ficha.codigo,
          bloque: Number(ficha.codigo.split(".")[0]),
          nivel: ficha.nivel,
          titulo: ficha.titulo,
          q: item.q,
          a: item.a,
        });
        n += 1;
      }
    }
  }
}

const cabecera = `/* GENERADO POR herramientas/indice-preguntas.mjs — no editar a mano.
   ${salida.length} preguntas extraídas de ${archivos.length} fichas.
   Para regenerar: node herramientas/indice-preguntas.mjs */\n\n`;

const destino = path.join(raiz, "src", "datos", "preguntas.js");
fs.writeFileSync(destino, cabecera + "export default " + JSON.stringify(salida, null, 1) + ";\n", "utf8");

const kb = (fs.statSync(destino).size / 1024).toFixed(0);
console.log(`${salida.length} preguntas · ${archivos.length} fichas · ${kb} KB`);
