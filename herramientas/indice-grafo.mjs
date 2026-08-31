/* Genera src/datos/grafo.js con el grafo de prerrequisitos, extraído del
   campo «requiere» de cada ficha. Ejecutar tras añadir o editar fichas:

       node herramientas/indice-grafo.mjs

   Por qué hace falta un índice: las fichas se cargan en diferido, una por
   una, así que la aplicación no puede leer los 140 «requiere» en tiempo de
   ejecución sin descargarlas todas. El grafo pesa unos pocos kB y se importa
   de forma normal.

   Solo se usa «requiere», no «abre». Son dos afirmaciones sobre la misma
   relación y no son simétricas (279 aristas frente a 370): tomar las dos
   crearía contradicciones. «requiere» es la que manda, y los dependientes se
   obtienen invirtiéndola.

   Las etiquetas que acompañan al código («3.10 Trilema») se descartan: son
   apodos que no siempre coinciden con el título del temario. La ruta muestra
   siempre el título canónico. */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(raiz, "src", "datos", "fichas");

const { BLOQUES } = await import(path.join(raiz, "src", "datos", "temario.js"));

const existe = new Set();
for (const b of BLOQUES) {
  b.temas.forEach((_, i) => existe.add(`${b.id}.${String(i + 1).padStart(2, "0")}`));
}

/* Cada entrada de «requiere» empieza por el código y sigue con una etiqueta
   libre; las entradas se separan con «·». Hay fichas raíz cuyo texto no
   lleva código («Ninguno: es el punto de partida»), y ahí no hay arista. */
const RE = /^(\d{1,2}\.\d{2})\b/;

const archivos = fs.readdirSync(dir).filter((f) => /^f\d+-\d+\.js$/.test(f)).sort();

/* Los códigos que tienen ficha escrita. Un «requiere» puede apuntar a un
   tema del temario que todavía no la tiene, y esa arista hay que descartarla:
   el grafo solo contiene fichas, así que un prerrequisito sin ficha nunca
   llegaría a marcarse como hecho y dejaría a su dependiente esperando para
   siempre. La ruta lo trataría como un ciclo y lo mandaría al final del
   temario, que es un fallo silencioso y difícil de ver. Cuando la ficha que
   falta se escriba, la arista vuelve sola. */
const conFicha = new Set(
  archivos.map((f) => f.replace(/^f(\d+)-(\d+)\.js$/, (_, b, t) => `${Number(b)}.${t}`))
);

const prerrequisitos = {};
let aristas = 0;
const descartadas = [];

for (const archivo of archivos) {
  const { default: f } = await import(path.join(dir, archivo));
  const codigos = [];
  for (const trozo of (f.requiere || "").split("·").map((s) => s.trim()).filter(Boolean)) {
    const m = RE.exec(trozo);
    if (!m) continue;
    const cod = m[1];
    if (!existe.has(cod)) { descartadas.push(`${f.codigo} → ${cod} (no existe en el temario)`); continue; }
    if (!conFicha.has(cod)) { descartadas.push(`${f.codigo} → ${cod} (aún sin ficha)`); continue; }
    if (cod === f.codigo) { descartadas.push(`${f.codigo} → sí misma`); continue; }
    if (!codigos.includes(cod)) codigos.push(cod);
  }
  prerrequisitos[f.codigo] = codigos;
  aristas += codigos.length;
}

const num = (c) => { const [a, b] = c.split(".").map(Number); return a * 100 + b; };
const orden = Object.keys(prerrequisitos).sort((a, b) => num(a) - num(b));

const cuerpo = orden
  .map((c) => `  "${c}": [${prerrequisitos[c].map((p) => `"${p}"`).join(", ")}],`)
  .join("\n");

const salida = `/* GENERADO por herramientas/indice-grafo.mjs — no editar a mano.
   Prerrequisitos de cada ficha, tomados del campo «requiere».
   ${archivos.length} fichas · ${aristas} aristas. */

export const PRERREQUISITOS = {
${cuerpo}
};
`;

fs.writeFileSync(path.join(raiz, "src", "datos", "grafo.js"), salida);
console.log(`grafo.js: ${archivos.length} fichas · ${aristas} aristas · ${(salida.length / 1024).toFixed(1)} kB`);
if (descartadas.length) {
  console.log("descartadas:");
  descartadas.forEach((d) => console.log("  " + d));
}
