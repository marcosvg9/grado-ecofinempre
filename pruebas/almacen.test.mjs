/* Pruebas del progreso guardado e importado.

   El archivo lo elige la persona y puede venir de otro ordenador, de una
   versión anterior o directamente corrupto. Lo que se prueba aquí es que
   nada de lo que entre pueda dejar la aplicación en un estado imposible:
   se acepta lo reconocible, se descarta el resto y se dice cuánto. */

import { test, describe, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { validarProgreso, leerProgreso, guardarProgreso } from "../src/almacen.js";

const bueno = (extra = {}) =>
  JSON.stringify({
    estudiados: { "1.01": "2026-08-27", "4.05": "2026-08-20" },
    repaso: { "1.01#0": { paso: 2, prox: "2026-09-01", fallos: 1, vistas: 5, ultima: "2026-08-25" } },
    notas: {},
    ...extra,
  });

describe("archivos que hay que rechazar enteros", () => {
  const malos = [
    ["no es JSON", "{esto no cierra", /no es JSON válido/],
    ["es un número", "42", /no contiene un objeto/],
    ["es una cadena", '"hola"', /no contiene un objeto/],
    ["es null", "null", /no contiene un objeto/],
    ["es de otra aplicación", '{"marcadores":[1,2]}', /faltan «estudiados» y «repaso»/],
    ["está vacío de progreso", '{"estudiados":{},"repaso":{}}', /ningún progreso aprovechable/],
  ];
  for (const [nombre, bruto, patron] of malos) {
    test(nombre, () => {
      const r = validarProgreso(bruto);
      assert.equal(r.ok, false);
      assert.match(r.error, patron);
      assert.equal(r.estado, undefined, "no debe devolver estado a medias");
    });
  }

  test("un array no cuela como objeto de progreso", () => {
    assert.equal(validarProgreso("[]").ok, false);
  });
});

describe("un archivo correcto entra entero", () => {
  const r = validarProgreso(bueno());

  test("se acepta", () => {
    assert.equal(r.ok, true);
  });

  test("conserva lo estudiado", () => {
    assert.deepEqual(r.estado.estudiados, { "1.01": "2026-08-27", "4.05": "2026-08-20" });
  });

  test("conserva el repaso con todos sus campos", () => {
    assert.deepEqual(r.estado.repaso["1.01#0"], {
      paso: 2, prox: "2026-09-01", fallos: 1, vistas: 5, ultima: "2026-08-25",
    });
  });

  test("informa de cuánto ha entrado y cuánto se ha descartado", () => {
    assert.deepEqual(r.resumen, { estudiados: 2, repaso: 1, descartados: 0 });
  });

  test("el estado tiene siempre las tres claves", () => {
    assert.deepEqual(Object.keys(r.estado).sort(), ["estudiados", "notas", "repaso"]);
  });
});

describe("saneado de lo que viene mal", () => {
  test("descarta códigos que no son códigos", () => {
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "2026-08-27", "no-es-codigo": "2026-08-27", "999": "2026-08-27" },
      repaso: {},
    }));
    assert.deepEqual(Object.keys(r.estado.estudiados), ["1.01"]);
    assert.equal(r.resumen.descartados, 2);
  });

  test("descarta fechas que no son fechas", () => {
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "ayer", "1.02": 20260827, "1.03": "2026-08-27" },
      repaso: {},
    }));
    assert.deepEqual(Object.keys(r.estado.estudiados), ["1.03"]);
    assert.equal(r.resumen.descartados, 2);
  });

  test("acota «paso» para que no rompa la tabla de intervalos", () => {
    /* Un paso disparatado indexaría fuera de INTERVALOS y dejaría la
       próxima cita en «Invalid Date», que ya no se recupera nunca. */
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "2026-08-27" },
      repaso: { a: { paso: 9999, prox: "2026-09-01" } },
    }));
    assert.equal(r.estado.repaso.a.paso, 20);
  });

  test("un «paso» negativo o no entero vuelve a cero", () => {
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "2026-08-27" },
      repaso: { a: { paso: -3, prox: "2026-09-01" }, b: { paso: 1.5, prox: "2026-09-01" } },
    }));
    assert.equal(r.estado.repaso.a.paso, 0);
    assert.equal(r.estado.repaso.b.paso, 0);
  });

  test("una entrada de repaso sin «prox» válida se descarta entera", () => {
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "2026-08-27" },
      repaso: { buena: { prox: "2026-09-01" }, mala: { prox: "pronto" }, peor: 7 },
    }));
    assert.deepEqual(Object.keys(r.estado.repaso), ["buena"]);
    assert.equal(r.resumen.descartados, 2);
  });

  test("los campos que faltan toman valores por defecto sensatos", () => {
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "2026-08-27" },
      repaso: { a: { prox: "2026-09-01" } },
    }));
    assert.deepEqual(r.estado.repaso.a, {
      paso: 0, prox: "2026-09-01", fallos: 0, vistas: 0, ultima: "2026-09-01",
    });
  });

  test("no se cuelan campos desconocidos", () => {
    const r = validarProgreso(JSON.stringify({
      estudiados: { "1.01": "2026-08-27" },
      repaso: { a: { prox: "2026-09-01", ejecutar: "código", __proto__: {} } },
    }));
    assert.deepEqual(Object.keys(r.estado.repaso.a).sort(), ["fallos", "paso", "prox", "ultima", "vistas"]);
  });

  test("basta con «repaso» aunque no haya «estudiados»", () => {
    const r = validarProgreso(JSON.stringify({ repaso: { a: { prox: "2026-09-01" } } }));
    assert.equal(r.ok, true);
    assert.deepEqual(r.estado.estudiados, {});
  });
});

describe("sin almacenamiento disponible", () => {
  let original;
  beforeEach(() => { original = globalThis.localStorage; });
  afterEach(() => {
    if (original === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = original;
  });

  test("leer devuelve el estado base en vez de reventar", () => {
    /* Modo privado o almacenamiento deshabilitado: se sigue en memoria. */
    assert.doesNotThrow(() => leerProgreso());
    assert.deepEqual(leerProgreso(), { estudiados: {}, notas: {}, repaso: {} });
  });

  test("guardar avisa de que no ha podido en vez de reventar", () => {
    assert.equal(guardarProgreso({ estudiados: {} }), false);
  });

  test("con almacenamiento, lo guardado se recupera igual", () => {
    const memoria = new Map();
    globalThis.localStorage = {
      getItem: (k) => (memoria.has(k) ? memoria.get(k) : null),
      setItem: (k, v) => memoria.set(k, String(v)),
    };
    const estado = { estudiados: { "1.01": "2026-08-27" }, notas: {}, repaso: {} };
    assert.equal(guardarProgreso(estado), true);
    assert.deepEqual(leerProgreso(), estado);
  });

  test("un contenido corrupto en el almacenamiento no tumba el arranque", () => {
    globalThis.localStorage = { getItem: () => "{roto", setItem: () => {} };
    assert.deepEqual(leerProgreso(), { estudiados: {}, notas: {}, repaso: {} });
  });
});
