/* Genera src/datos/preguntas.js a partir de las preguntas de todas las
   fichas. Ejecutar tras añadir o editar preguntas:

       node herramientas/indice-preguntas.mjs

   El índice se carga aparte del temario, solo al entrar en el repaso.

   Recoge las dos clases de pregunta que hay en el temario:

     · «Compruébate» (bloques `preguntas`), que son de respuesta abierta y
       viajan como q/a.
     · «Test» (bloques `test`), que además llevan opciones y la explicación
       de cada una. En el repaso se muestran las opciones y al revelar se
       marca la correcta con su porqué.

   Los identificadores son lo único delicado de este archivo. El progreso
   guardado de quien estudia está indexado por ellos, así que renumerar
   equivale a que cada tarjeta pase a apuntar a otra pregunta y se pierda el
   historial. Por eso los test usan un contador propio con prefijo «t»
   —«4.05#t2»— y no se mezclan con la numeración de los Compruébate, que
   queda exactamente como estaba. */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(raiz, "src", "datos", "fichas");

const archivos = fs.readdirSync(dir).filter((f) => /^f\d+-\d+\.js$/.test(f)).sort();
const salida = [];
let nAbiertas = 0;
let nTest = 0;

for (const archivo of archivos) {
  const { default: ficha } = await import(path.join(dir, archivo));
  const comun = {
    codigo: ficha.codigo,
    bloque: Number(ficha.codigo.split(".")[0]),
    nivel: ficha.nivel,
    titulo: ficha.titulo,
  };
  let n = 0;   // contador de los Compruébate: NO tocar su numeración
  let t = 0;   // contador propio de los test

  for (const seccion of ficha.secciones) {
    for (const bloque of seccion.contenido) {
      if (bloque.tipo === "preguntas") {
        for (const item of bloque.items) {
          salida.push({ id: `${ficha.codigo}#${n}`, ...comun, q: item.q, a: item.a });
          n += 1;
          nAbiertas += 1;
        }
        continue;
      }

      if (bloque.tipo !== "test") continue;
      for (const item of bloque.items) {
        /* `a` se rellena igualmente para que cualquier código que solo
           conozca q/a siga funcionando: es la opción correcta seguida de su
           explicación. Las opciones van aparte porque una pregunta de test
           sin ellas suele ser incontestable. */
        const correcta = item.opciones[item.correcta];
        const porque = item.porque[item.correcta];
        salida.push({
          id: `${ficha.codigo}#t${t}`,
          ...comun,
          q: item.q,
          a: `**${correcta}.** ${porque}`,
          opciones: item.opciones,
          correcta: item.correcta,
        });
        t += 1;
        nTest += 1;
      }
    }
  }
}

/* Comprobaciones antes de escribir: un identificador repetido haría que dos
   preguntas compartieran historial de repaso, y es invisible después. */
const vistos = new Set();
const repetidos = [];
for (const p of salida) {
  if (vistos.has(p.id)) repetidos.push(p.id);
  vistos.add(p.id);
}
if (repetidos.length) {
  console.error(`  ✗ identificadores repetidos: ${repetidos.slice(0, 5).join(", ")}`);
  process.exit(1);
}

const cabecera = `/* GENERADO POR herramientas/indice-preguntas.mjs — no editar a mano.
   ${salida.length} preguntas de ${archivos.length} fichas: ${nAbiertas} abiertas y ${nTest} de test.
   Para regenerar: node herramientas/indice-preguntas.mjs */\n\n`;

const destino = path.join(raiz, "src", "datos", "preguntas.js");
fs.writeFileSync(destino, cabecera + "export default " + JSON.stringify(salida, null, 1) + ";\n", "utf8");

const kb = (fs.statSync(destino).size / 1024).toFixed(0);
console.log(`${salida.length} preguntas (${nAbiertas} abiertas · ${nTest} de test) · ${archivos.length} fichas · ${kb} KB`);
