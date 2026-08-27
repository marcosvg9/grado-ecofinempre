/* Pruebas del lematizador.

   Dos bloques importan por encima del resto. Los invariantes, porque el
   buscador depende de ellos: si el lema deja de ser prefijo de la palabra,
   los extractos dejan de resaltar y nadie se entera. Y las conflaciones
   prohibidas, porque son las que se midieron sobre el vocabulario real y
   obligaron a poner un umbral de longitud para la -a/-o final. */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { lematizar } from "../src/lematizar.js";

/* Vocabulario de muestra, tomado del temario. Sirve para comprobar los
   invariantes sobre palabras de verdad y no sobre casos inventados. */
const VOCABULARIO = [
  "bono", "bonos", "arancel", "aranceles", "clase", "clases", "base", "bases",
  "coste", "costes", "costa", "costo", "costos", "precio", "precios",
  "mercado", "mercados", "empresa", "empresas", "deuda", "deudas",
  "economico", "economica", "economicos", "economicas", "economicamente",
  "proteccionismo", "proteccionista", "libra", "libre", "libro", "libros",
  "optimo", "optimista", "plan", "planes", "plana", "plano",
  "crisis", "analisis", "pais", "tipo", "tipos", "interes",
  "obligacion", "obligaciones", "prestacion", "prestaciones", "cupon", "cupones",
];

describe("invariantes de los que depende el buscador", () => {
  test("el lema es siempre prefijo de la palabra", () => {
    /* De esto vive el resaltado de los extractos, que marca con
       `[\\w]*(?:lema)[\\w]*` sobre el texto original sin lematizar. */
    for (const w of VOCABULARIO) {
      assert.ok(w.startsWith(lematizar(w)), `«${lematizar(w)}» no es prefijo de «${w}»`);
    }
  });

  test("es idempotente", () => {
    for (const w of VOCABULARIO) {
      assert.equal(lematizar(lematizar(w)), lematizar(w), `«${w}» no es estable`);
    }
  });

  test("nunca alarga la palabra", () => {
    for (const w of VOCABULARIO) assert.ok(lematizar(w).length <= w.length);
  });

  test("nunca deja el lema vacío ni demasiado corto", () => {
    for (const w of VOCABULARIO) assert.ok(lematizar(w).length >= 3, `«${w}» quedó en «${lematizar(w)}»`);
  });

  test("no revienta con entradas raras", () => {
    for (const x of ["", "a", "de", null, undefined, 42, "aaaa"]) {
      assert.doesNotThrow(() => lematizar(x));
    }
    assert.equal(lematizar(""), "");
    assert.equal(lematizar(null), null);
  });
});

describe("plurales que deben unificarse", () => {
  const pares = [
    ["bono", "bonos"],
    ["arancel", "aranceles"],
    ["clase", "clases"],
    ["base", "bases"],
    ["cupon", "cupones"],
    ["obligacion", "obligaciones"],
    ["prestacion", "prestaciones"],
    ["mercado", "mercados"],
    ["empresa", "empresas"],
    ["tipo", "tipos"],
    ["plan", "planes"],
    ["sueldo", "sueldos"],
  ];
  for (const [uno, otro] of pares) {
    test(`«${uno}» y «${otro}» dan la misma clave`, () => {
      assert.equal(lematizar(uno), lematizar(otro));
    });
  }
});

describe("género y derivación que deben unificarse", () => {
  test("masculino y femenino de un adjetivo largo", () => {
    assert.equal(lematizar("economico"), lematizar("economica"));
    assert.equal(lematizar("economicos"), lematizar("economicas"));
    assert.equal(lematizar("macroeconomico"), lematizar("macroeconomica"));
  });

  test("el adverbio va con su adjetivo", () => {
    assert.equal(lematizar("economicamente"), lematizar("economico"));
    assert.equal(lematizar("directamente"), lematizar("directo"));
  });

  test("«-ismo» y «-ista» van con su raíz", () => {
    /* La consulta «arancel proteccionismo» no encontraba 2.12 porque en la
       ficha estaba escrito «proteccionista». */
    assert.equal(lematizar("proteccionismo"), lematizar("proteccionista"));
    assert.equal(lematizar("proteccionismo"), "proteccion");
  });

  test("los superlativos encadenados se deshacen enteros", () => {
    assert.equal(lematizar("rapidisimamente"), lematizar("rapidisimo"));
  });
});

describe("conflaciones que NO deben ocurrir", () => {
  /* Todas estas se produjeron de verdad en una versión anterior, al recortar
     la vocal final sin mirar la longitud, y se vieron al listar los grupos
     más grandes del vocabulario real. */
  const prohibidas = [
    ["libra", "libro", "la moneda no es el volumen"],
    ["libra", "libre", "la moneda no es el comercio sin trabas"],
    ["libre", "libro", "distintos"],
    ["optimo", "optimista", "óptimo no es optimista"],
    ["costa", "coste", "la costa no es el coste"],
    ["plana", "plano", "distintos"],
    ["renta", "rentable", "una renta no es ser rentable"],
    ["emision", "emitir", "no se toca «-ción»"],
  ];
  for (const [uno, otro, porque] of prohibidas) {
    test(`«${uno}» y «${otro}» siguen separados — ${porque}`, () => {
      assert.notEqual(lematizar(uno), lematizar(otro));
    });
  }
});

describe("palabras invariables en número", () => {
  for (const w of ["crisis", "analisis", "sintesis", "hipotesis", "pais", "interes", "mes"]) {
    test(`«${w}» no pierde la ese`, () => {
      assert.equal(lematizar(w), w);
    });
  }
});

describe("lo que no se toca", () => {
  test("las palabras cortas quedan como están", () => {
    for (const w of ["tipo", "base", "caso", "dato", "año"]) assert.equal(lematizar(w), w);
  });

  test("los códigos de ficha y del SEC quedan intactos", () => {
    for (const c of ["4.05", "16.05", "b.1g", "d.121"]) assert.equal(lematizar(c), c);
  });
});
