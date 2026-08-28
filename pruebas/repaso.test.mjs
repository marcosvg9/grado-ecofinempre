/* Pruebas de la repetición espaciada.

   Lo que hay que proteger aquí es el calendario: que acertar aplace más que
   la vez anterior, que fallar devuelva al principio, y que la sesión nunca
   introduzca material de fichas sin estudiar. */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  INTERVALOS, MAX_NUEVAS, MAX_SESION,
  hoyISO, sumarDias, programar, contarVencidas, construirSesion, resumen,
} from "../src/repaso.js";
import PREGUNTAS from "../src/datos/preguntas.js";

describe("aritmética de fechas", () => {
  test("hoyISO da el día en formato ISO corto", () => {
    assert.equal(hoyISO(new Date("2026-08-27T15:30:00Z")), "2026-08-27");
  });

  test("sumarDias cruza el fin de mes", () => {
    assert.equal(sumarDias("2026-01-31", 1), "2026-02-01");
    assert.equal(sumarDias("2026-08-27", 5), "2026-09-01");
  });

  test("sumarDias cruza el fin de año", () => {
    assert.equal(sumarDias("2026-12-31", 1), "2027-01-01");
  });

  test("sumarDias respeta los años bisiestos", () => {
    assert.equal(sumarDias("2028-02-28", 1), "2028-02-29", "2028 es bisiesto");
    assert.equal(sumarDias("2026-02-28", 1), "2026-03-01", "2026 no lo es");
  });

  test("sumarDias admite retroceder", () => {
    assert.equal(sumarDias("2026-03-01", -1), "2026-02-28");
  });

  test("no se descuadra por zona horaria", () => {
    /* Se trabaja en UTC a propósito: con hora local, sumar un día cerca del
       cambio de horario podía devolver el mismo día. */
    assert.equal(sumarDias("2026-03-29", 1), "2026-03-30");
    assert.equal(sumarDias("2026-10-25", 1), "2026-10-26");
  });
});

describe("programar la siguiente cita", () => {
  const HOY = "2026-08-27";

  test("acertar a la primera vale un intervalo real, no el de fallar", () => {
    const r = programar(undefined, true, HOY);
    assert.equal(r.paso, 1);
    assert.equal(r.prox, sumarDias(HOY, INTERVALOS[1]));
    assert.notEqual(r.prox, sumarDias(HOY, INTERVALOS[0]));
  });

  test("fallar devuelve siempre al escalón de un día", () => {
    const avanzada = { paso: 4, fallos: 0, vistas: 9 };
    const r = programar(avanzada, false, HOY);
    assert.equal(r.paso, 0);
    assert.equal(r.prox, sumarDias(HOY, INTERVALOS[0]));
  });

  test("cada acierto sube un escalón", () => {
    let e;
    const pasos = [];
    for (let i = 0; i < 4; i++) { e = programar(e, true, HOY); pasos.push(e.paso); }
    assert.deepEqual(pasos, [1, 2, 3, 4]);
  });

  test("el escalón no se pasa del último intervalo", () => {
    let e = { paso: INTERVALOS.length - 1, fallos: 0, vistas: 20 };
    e = programar(e, true, HOY);
    assert.equal(e.paso, INTERVALOS.length - 1);
    assert.equal(e.prox, sumarDias(HOY, INTERVALOS.at(-1)));
  });

  test("los contadores acumulan", () => {
    let e = programar(undefined, true, HOY);
    e = programar(e, false, HOY);
    e = programar(e, true, HOY);
    assert.equal(e.vistas, 3);
    assert.equal(e.fallos, 1);
    assert.equal(e.ultima, HOY);
  });

  test("los intervalos crecen de forma estricta", () => {
    for (let i = 1; i < INTERVALOS.length; i++) {
      assert.ok(INTERVALOS[i] > INTERVALOS[i - 1], `${INTERVALOS[i]} > ${INTERVALOS[i - 1]}`);
    }
  });
});

describe("contar vencidas", () => {
  const repaso = {
    a: { prox: "2026-08-26" },
    b: { prox: "2026-08-27" },
    c: { prox: "2026-08-28" },
  };

  test("vence lo anterior a hoy y también lo de hoy", () => {
    assert.equal(contarVencidas(repaso, "2026-08-27"), 2);
  });

  test("sin nada vencido devuelve cero", () => {
    assert.equal(contarVencidas(repaso, "2026-08-01"), 0);
  });

  test("un repaso vacío devuelve cero", () => {
    assert.equal(contarVencidas({}, "2026-08-27"), 0);
  });
});

describe("construir la sesión del día", () => {
  const HOY = "2026-08-27";
  const preguntas = Array.from({ length: 60 }, (_, i) => ({
    id: `p${i}`,
    codigo: i < 40 ? "1.01" : "9.99",
  }));

  test("nunca introduce preguntas de fichas sin estudiar", () => {
    const { cola } = construirSesion({ preguntas, repaso: {}, estudiados: { "1.01": "2026-01-01" }, hoy: HOY });
    assert.ok(cola.length > 0);
    assert.ok(cola.every((p) => p.codigo === "1.01"), "no debe colarse 9.99, que no está estudiada");
  });

  test("respeta el tope de preguntas nuevas", () => {
    const { cola } = construirSesion({ preguntas, repaso: {}, estudiados: { "1.01": "x" }, hoy: HOY });
    assert.equal(cola.length, MAX_NUEVAS);
  });

  test("lo vencido va antes que lo nuevo y se cuenta aparte", () => {
    const repaso = {};
    for (let i = 0; i < 5; i++) repaso[`p${i}`] = { prox: "2026-08-01", paso: 1 };
    const r = construirSesion({ preguntas, repaso, estudiados: { "1.01": "x" }, hoy: HOY });
    assert.equal(r.vencidasTotales, 5);
    assert.equal(r.cola.length, 5 + MAX_NUEVAS);
  });

  test("aplaza lo que no cabe en la sesión", () => {
    const repaso = {};
    for (let i = 0; i < 60; i++) repaso[`p${i}`] = { prox: "2026-08-01", paso: 1 };
    const r = construirSesion({ preguntas, repaso, estudiados: {}, hoy: HOY });
    assert.equal(r.vencidasTotales, 60);
    assert.equal(r.cola.length, MAX_SESION);
    assert.equal(r.aplazadas, 60 - MAX_SESION);
  });

  test("guarda en reserva las nuevas que no caben", () => {
    const r = construirSesion({ preguntas, repaso: {}, estudiados: { "1.01": "x" }, hoy: HOY });
    assert.equal(r.enReserva, 40 - MAX_NUEVAS);
  });

  test("el orden es estable: recargar no reordena la sesión en curso", () => {
    const args = { preguntas, repaso: {}, estudiados: { "1.01": "x" }, hoy: HOY };
    const a = construirSesion(args).cola.map((p) => p.id);
    const b = construirSesion(args).cola.map((p) => p.id);
    assert.deepEqual(a, b);
  });

  test("otro día baraja distinto", () => {
    const base = { preguntas, repaso: {}, estudiados: { "1.01": "x" } };
    const a = construirSesion({ ...base, hoy: "2026-08-27" }).cola.map((p) => p.id);
    const b = construirSesion({ ...base, hoy: "2026-08-28" }).cola.map((p) => p.id);
    assert.notDeepEqual(a, b);
  });

  test("sin nada que hacer la cola queda vacía", () => {
    const r = construirSesion({ preguntas, repaso: {}, estudiados: {}, hoy: HOY });
    assert.equal(r.cola.length, 0);
  });
});

describe("resumen para la tarjeta del plan", () => {
  const HOY = "2026-08-27";
  const preguntas = [
    { id: "a", codigo: "1.01" },
    { id: "b", codigo: "1.01" },
    { id: "c", codigo: "1.01" },
    { id: "d", codigo: "9.99" },
  ];

  test("clasifica cada pregunta en una sola categoría", () => {
    const r = resumen(
      preguntas,
      { a: { prox: "2026-08-01", paso: 2 }, b: { prox: "2026-12-01", paso: INTERVALOS.length - 1 } },
      { "1.01": "x" },
      HOY
    );
    assert.equal(r.vencidas, 1, "solo «a» ha vencido");
    assert.equal(r.enCurso, 2, "«a» y «b» tienen historial");
    assert.equal(r.dominadas, 1, "«b» está en el último escalón");
    assert.equal(r.nuevas, 1, "«c» es nueva y su ficha está estudiada; «d» no cuenta");
    assert.equal(r.total, 4);
  });

  test("sin progreso, todo lo estudiado es nuevo", () => {
    const r = resumen(preguntas, {}, { "1.01": "x" }, HOY);
    assert.equal(r.nuevas, 3);
    assert.equal(r.enCurso, 0);
    assert.equal(r.vencidas, 0);
  });
});

/* El índice generado por herramientas/indice-preguntas.mjs. Lo que se
   comprueba aquí no es el contenido de las preguntas sino la forma del
   índice, y sobre todo sus identificadores: el progreso de quien estudia
   está guardado bajo esas claves, así que renumerarlas no rompe nada
   visible y hace que cada tarjeta pase a apuntar a otra pregunta. */
describe("índice de preguntas", () => {
  const abiertas = PREGUNTAS.filter((p) => !p.opciones);
  const deTest = PREGUNTAS.filter((p) => p.opciones);

  test("contiene las dos clases de pregunta", () => {
    assert.ok(abiertas.length > 800, `solo ${abiertas.length} abiertas`);
    assert.ok(deTest.length > 600, `solo ${deTest.length} de test`);
  });

  test("ningún identificador se repite", () => {
    const vistos = new Set();
    const repes = PREGUNTAS.filter((p) => (vistos.has(p.id) ? true : (vistos.add(p.id), false)));
    assert.deepEqual(repes.map((p) => p.id), [], "dos preguntas compartirían historial de repaso");
  });

  test("los Compruébate conservan la numeración simple «codigo#n»", () => {
    /* Si esta prueba falla, el progreso guardado de todo el mundo apunta a
       preguntas distintas de las que respondió. */
    for (const p of abiertas) {
      assert.match(p.id, /^\d{1,2}\.\d{2}#\d+$/, `id inesperado: ${p.id}`);
    }
  });

  test("los test usan un espacio de nombres propio, con «t»", () => {
    for (const p of deTest) {
      assert.match(p.id, /^\d{1,2}\.\d{2}#t\d+$/, `id inesperado: ${p.id}`);
    }
  });

  test("la numeración de cada ficha empieza en cero y no salta", () => {
    const porFicha = new Map();
    for (const p of PREGUNTAS) {
      const clase = p.opciones ? "t" : "a";
      const clave = p.codigo + clase;
      porFicha.set(clave, (porFicha.get(clave) || 0) + 1);
    }
    for (const [clave, cuantas] of porFicha) {
      const codigo = clave.slice(0, -1);
      const pref = clave.endsWith("t") ? "#t" : "#";
      for (let i = 0; i < cuantas; i++) {
        assert.ok(
          PREGUNTAS.some((p) => p.id === `${codigo}${pref}${i}`),
          `falta ${codigo}${pref}${i}`
        );
      }
    }
  });

  test("toda pregunta trae lo que la tarjeta necesita para pintarse", () => {
    for (const p of PREGUNTAS) {
      assert.ok(p.q && p.q.length > 5, `${p.id} sin enunciado`);
      assert.ok(p.a && p.a.length > 5, `${p.id} sin respuesta`);
      assert.match(p.codigo, /^\d{1,2}\.\d{2}$/);
      assert.ok(p.titulo && p.nivel >= 1 && p.bloque >= 1, `${p.id} sin procedencia`);
    }
  });

  test("las de test traen opciones y una correcta dentro de rango", () => {
    for (const p of deTest) {
      assert.ok(Array.isArray(p.opciones) && p.opciones.length >= 3, `${p.id}: pocas opciones`);
      assert.ok(Number.isInteger(p.correcta) && p.correcta >= 0 && p.correcta < p.opciones.length,
        `${p.id}: «correcta» fuera de rango`);
      assert.ok(p.a.includes(p.opciones[p.correcta]),
        `${p.id}: la respuesta no recoge la opción correcta`);
    }
  });

  test("la correcta no cae siempre en la misma posición", () => {
    /* El mismo defecto que vigila el validador, comprobado aquí sobre lo que
       de verdad se sirve al repaso. */
    const cuenta = [0, 0, 0, 0];
    for (const p of deTest) cuenta[p.correcta] += 1;
    const tope = Math.max(...cuenta) / deTest.length;
    assert.ok(tope < 0.4, `la correcta cae en la «${"abcd"[cuenta.indexOf(Math.max(...cuenta))]}» el ${Math.round(tope * 100)} % de las veces`);
  });
});
