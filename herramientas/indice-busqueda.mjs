/* Genera src/datos/busqueda.js a partir de todas las fichas escritas.

   El indice es invertido: termino -> lista de (documento, peso). Cada posting
   ocupa cuatro caracteres en base 36: dos para el documento y dos para el
   peso, asi que el fichero es compacto sin comprimir nada a mano.

   No se poda ningun termino, ni siquiera los muy frecuentes: si se podan,
   una consulta como «elasticidad precio demanda» pierde dos de sus tres
   palabras y deja de encontrar nada.

   Uso:  node herramientas/indice-busqueda.mjs                                */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { trocear, textosDeFicha } from "../src/buscar.js";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dirFichas = path.join(raiz, "src/datos/fichas");
const salida = path.join(raiz, "src/datos/busqueda.js");

const PESO_DESTACADO = 8; // titulo, nucleo y titulos de seccion valen por ocho
const TOPE = 1295;        // el peso cabe en dos digitos base 36

const archivos = fs
  .readdirSync(dirFichas)
  .filter((f) => /^f\d+-\d+\.js$/.test(f))
  .sort((a, b) => {
    const n = (s) => s.match(/f(\d+)-(\d+)/).slice(1, 3).map(Number);
    const [ab, af] = n(a), [bb, bf] = n(b);
    return ab - bb || af - bf;
  });

const docs = [];
const bolsas = [];

for (const archivo of archivos) {
  const mod = await import(pathToFileURL(path.join(dirFichas, archivo)).href);
  const ficha = mod.default;
  const { fragmentos, destacado } = textosDeFicha(ficha);

  const pesos = new Map();
  const sumar = (texto, factor) => {
    for (const t of trocear(texto)) pesos.set(t, (pesos.get(t) || 0) + factor);
  };
  destacado.forEach((t) => sumar(t, PESO_DESTACADO));
  fragmentos.forEach((f) => sumar(f.texto, 1));

  docs.push([ficha.codigo, ficha.titulo, ficha.nivel, ficha.bloque]);
  bolsas.push(pesos);
}

const indice = new Map();
bolsas.forEach((pesos, doc) => {
  const d = doc.toString(36).padStart(2, "0");
  for (const [termino, peso] of pesos) {
    const p = Math.min(TOPE, Math.round(peso)).toString(36).padStart(2, "0");
    if (!indice.has(termino)) indice.set(termino, "");
    indice.set(termino, indice.get(termino) + d + p);
  }
});

const claves = [...indice.keys()].sort();
const cuerpo =
  `/* GENERADO por herramientas/indice-busqueda.mjs — no editar a mano. */\n\n` +
  `export const DOCS = ${JSON.stringify(docs.map(([c, t, n, b]) => ({ codigo: c, titulo: t, nivel: n, bloque: b })))};\n\n` +
  `export const INDICE = ${JSON.stringify(Object.fromEntries(claves.map((k) => [k, indice.get(k)])))};\n\n` +
  `export const CLAVES = Object.keys(INDICE);\n`;

fs.writeFileSync(salida, cuerpo, "utf8");

const postings = claves.reduce((a, k) => a + indice.get(k).length / 4, 0);
console.log(
  `${claves.length} términos · ${postings} apariciones · ${docs.length} fichas · ` +
  `${Math.round(cuerpo.length / 1024)} KB`
);
