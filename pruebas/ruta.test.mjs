/* Pruebas de la ruta de estudio.

   Lo que hay que sostener es un invariante y no un valor: nadie aparece en
   el orden antes que sus prerrequisitos, salvo por las aristas que la propia
   función declara haber ablandado. Además de grafos de juguete se comprueba
   contra el grafo real del temario, que es donde vive el problema. */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { num, ordenTopologico, descendientes, caminoHasta, analizarRuta } from "../src/ruta.js";
import { PRERREQUISITOS } from "../src/datos/grafo.js";

/* Comprueba el invariante central. Devuelve las violaciones que no estén
   justificadas por una arista ablandada. */
function violaciones({ orden, blandas }, prerrequisitos) {
  const posicion = new Map(orden.map((c, i) => [c, i]));
  const cedidas = new Set(blandas.map(([a, b]) => `${a}->${b}`));
  const malas = [];
  for (const [nodo, prereqs] of Object.entries(prerrequisitos)) {
    for (const p of prereqs) {
      if (!posicion.has(p)) continue;
      if (posicion.get(p) < posicion.get(nodo)) continue;
      if (!cedidas.has(`${nodo}->${p}`)) malas.push(`${p} debería ir antes que ${nodo}`);
    }
  }
  return malas;
}

describe("num: ordenar códigos como números", () => {
  test("ordena por bloque y luego por tema", () => {
    assert.ok(num("2.01") < num("2.02"));
    assert.ok(num("9.10") < num("10.01"), "10.01 va después de 9.10, no antes");
    assert.equal(num("16.05"), 1605);
  });
});

describe("orden topológico", () => {
  test("respeta los prerrequisitos en una cadena simple", () => {
    const g = { "1.01": [], "1.02": ["1.01"], "1.03": ["1.02"] };
    const r = ordenTopologico(g);
    assert.deepEqual(r.orden, ["1.01", "1.02", "1.03"]);
    assert.deepEqual(r.blandas, []);
  });

  test("coloca todos los nodos exactamente una vez", () => {
    const g = { "1.01": [], "1.02": ["1.01"], "2.01": ["1.01"], "2.02": ["1.02", "2.01"] };
    const r = ordenTopologico(g);
    assert.equal(r.orden.length, 4);
    assert.equal(new Set(r.orden).size, 4);
    assert.deepEqual(violaciones(r, g), []);
  });

  test("con varios candidatos elige el de código menor", () => {
    /* Determinista a propósito: la ruta no debe cambiar entre recargas. */
    const g = { "3.01": [], "1.01": [], "2.01": [] };
    assert.deepEqual(ordenTopologico(g).orden, ["1.01", "2.01", "3.01"]);
  });

  test("rompe un ciclo cediendo la arista que mira hacia adelante", () => {
    /* 1.02 exige 1.03 y 1.03 exige 1.02. Se cede 1.02→1.03, que es la que
       apunta a un código posterior, de modo que se respeta el temario. */
    const g = { "1.01": [], "1.02": ["1.01", "1.03"], "1.03": ["1.02"] };
    const r = ordenTopologico(g);
    assert.equal(r.blandas.length, 1);
    assert.deepEqual(r.blandas[0], ["1.02", "1.03"]);
    assert.ok(r.orden.indexOf("1.02") < r.orden.indexOf("1.03"));
    assert.deepEqual(violaciones(r, g), []);
  });

  test("sale de un ciclo aunque ninguna arista mire hacia adelante", () => {
    /* Red de seguridad: hoy no ocurre, pero un «requiere» nuevo podría
       crearlo, y el bucle no debe quedarse colgado. */
    const g = { "1.02": ["1.03"], "1.03": ["1.02"] };
    const r = ordenTopologico(g);
    assert.equal(r.orden.length, 2);
    assert.ok(r.blandas.length >= 1);
  });

  test("el mapa efectivo ya no contiene las aristas cedidas", () => {
    const g = { "1.01": [], "1.02": ["1.01", "1.03"], "1.03": ["1.02"] };
    const { efectivo } = ordenTopologico(g);
    assert.deepEqual(efectivo["1.02"], ["1.01"]);
  });
});

describe("el grafo real del temario", () => {
  const r = ordenTopologico(PRERREQUISITOS);

  test("cubre las 168 fichas sin repetir ninguna", () => {
    const n = Object.keys(PRERREQUISITOS).length;
    assert.equal(r.orden.length, n);
    assert.equal(new Set(r.orden).size, n);
  });

  /* Regresión: un «requiere» puede citar un tema del temario que aún no
     tiene ficha —al escribir el bloque 17, «17.06 requiere 5.11»—. Como el
     grafo solo contiene fichas, ese prerrequisito no se marca nunca como
     hecho: la ficha espera indefinidamente, el recorrido lo toma por un
     ciclo y la manda al final del temario. Costó tres pruebas rojas
     descubrirlo, así que aquí queda cerrado en la fuente. */
  test("todo prerrequisito del grafo tiene ficha propia", () => {
    const conFicha = new Set(Object.keys(PRERREQUISITOS));
    const colgando = [];
    for (const [nodo, reqs] of Object.entries(PRERREQUISITOS)) {
      for (const p of reqs) if (!conFicha.has(p)) colgando.push(`${nodo} → ${p}`);
    }
    assert.deepEqual(colgando, [], "hay prerrequisitos que apuntan a temas sin ficha");
  });

  test("ninguna ficha va antes que sus prerrequisitos", () => {
    assert.deepEqual(violaciones(r, PRERREQUISITOS), []);
  });

  test("ablanda exactamente dos aristas, y son las conocidas", () => {
    /* Si aparece una tercera, alguien ha metido un «requiere» que cierra un
       ciclo nuevo y hay que mirarlo, no aceptarlo en silencio. */
    assert.equal(r.blandas.length, 2);
    assert.deepEqual(r.blandas.map((b) => b.join("→")).sort(), ["3.05→3.07", "7.05→8.06"]);
  });

  test("es determinista", () => {
    assert.deepEqual(ordenTopologico(PRERREQUISITOS).orden, r.orden);
  });

  /* Lo que sigue es la regresión del fallo que tenía la ruta: los ciclos
     solo se detectan al atascarse, así que en una única pasada las fichas
     implicadas y todo lo que cuelga de ellas caían al final. IS-LM acababa
     en la posición 107 de 168, después de Black-Scholes y de la
     reconciliación jerárquica, pese a necesitar solo 3.04.

     El invariante de arriba —nadie antes que sus prerrequisitos— se cumplía
     igual, y por eso no lo detectaba ninguna prueba: colocar una ficha
     demasiado tarde nunca lo viola. Hay que mirar la posición. */
  test("una ficha aparece en cuanto sus prerrequisitos están hechos", () => {
    const posicion = new Map(r.orden.map((c, i) => [c, i]));
    const tarde = [];
    for (const codigo of r.orden) {
      const reqs = r.efectivo[codigo];
      // primer momento en que la ficha ya podría estudiarse
      const listaEn = reqs.length ? Math.max(...reqs.map((p) => posicion.get(p))) + 1 : 0;
      // cuántas fichas se colocan entre ese momento y su posición real
      // teniendo un código menor: esas sí le ganan la vez legítimamente
      const colada = r.orden
        .slice(listaEn, posicion.get(codigo))
        .filter((otra) => num(otra) > num(codigo));
      if (colada.length > 8) tarde.push(`${codigo} espera tras ${colada.length} fichas posteriores`);
    }
    assert.deepEqual(tarde, [], "alguna ficha se coloca mucho después de estar disponible");
  });

  test("la macroeconomía no se estudia después de los bloques avanzados", () => {
    /* Comprobación concreta del caso que falló, en términos de temario y no
       de grafo: es la que se entiende sin haber leído el algoritmo. */
    const posicion = new Map(r.orden.map((c, i) => [c, i]));
    for (const macro of ["3.05", "3.06", "3.07", "3.08", "3.09", "3.10", "3.11"]) {
      for (const avanzado of ["8.09", "15.01", "16.04"]) {
        assert.ok(
          posicion.get(macro) < posicion.get(avanzado),
          `${macro} se estudia después de ${avanzado}`
        );
      }
    }
  });

  test("el orden de estudio se parece al del temario", () => {
    /* Si la ruta se aleja mucho de la numeración, o el grafo tiene un
       «requiere» equivocado o el temario está mal ordenado. Con el fallo
       eran 32,7 posiciones de media; sanas son menos de 4. */
    const posicion = new Map(r.orden.map((c, i) => [c, i]));
    const porTemario = [...posicion.keys()].sort((a, b) => num(a) - num(b));
    const media =
      porTemario.reduce((t, c, i) => t + Math.abs(posicion.get(c) - i), 0) / porTemario.length;
    assert.ok(media < 8, `desplazamiento medio de ${media.toFixed(1)} posiciones`);
  });

  test("las fichas del ciclo no quedan relegadas al final", () => {
    const posicion = new Map(r.orden.map((c, i) => [c, i]));
    for (const [n] of r.blandas) {
      assert.ok(
        posicion.get(n) < r.orden.length / 2,
        `${n} participa en un ciclo y cae en la posición ${posicion.get(n)} de ${r.orden.length}`
      );
    }
  });
});

describe("descendientes: cuántas fichas abre cada una", () => {
  const g = { "1.01": [], "1.02": ["1.01"], "1.03": ["1.02"], "1.04": ["1.01"] };
  const { orden, efectivo } = ordenTopologico(g);
  const { cuenta } = descendientes(efectivo, orden);

  test("cuenta también los descendientes indirectos", () => {
    assert.equal(cuenta["1.01"], 3, "abre 1.02, 1.03 y 1.04");
    assert.equal(cuenta["1.02"], 1, "solo 1.03");
  });

  test("una hoja no abre nada", () => {
    assert.equal(cuenta["1.03"], 0);
    assert.equal(cuenta["1.04"], 0);
  });

  test("no cuenta dos veces por dos caminos", () => {
    const rombo = { "1.01": [], "1.02": ["1.01"], "1.03": ["1.01"], "1.04": ["1.02", "1.03"] };
    const { orden: o2, efectivo: e2 } = ordenTopologico(rombo);
    const { cuenta: c2 } = descendientes(e2, o2);
    assert.equal(c2["1.01"], 3, "1.04 se alcanza por dos vías y cuenta una vez");
  });
});

describe("camino hasta una ficha", () => {
  const g = { "1.01": [], "1.02": ["1.01"], "1.03": ["1.02"], "1.04": [] };
  const { orden, efectivo } = ordenTopologico(g);

  test("devuelve lo que falta, en el orden en que hay que hacerlo", () => {
    assert.deepEqual(caminoHasta(efectivo, orden, {}, "1.03"), ["1.01", "1.02"]);
  });

  test("no repite lo ya estudiado", () => {
    assert.deepEqual(caminoHasta(efectivo, orden, { "1.01": "x" }, "1.03"), ["1.02"]);
  });

  test("una ficha sin prerrequisitos pendientes da camino vacío", () => {
    assert.deepEqual(caminoHasta(efectivo, orden, {}, "1.04"), []);
    assert.deepEqual(caminoHasta(efectivo, orden, { "1.01": "x", "1.02": "x" }, "1.03"), []);
  });

  test("no incluye la propia ficha de destino", () => {
    assert.ok(!caminoHasta(efectivo, orden, {}, "1.03").includes("1.03"));
  });
});

describe("analizarRuta", () => {
  const g = { "1.01": [], "1.02": ["1.01"], "1.03": ["1.02"], "2.01": [] };
  const nivel = (c) => ({ "1.01": 1, "1.02": 2, "1.03": 3, "2.01": 4 })[c];

  test("separa disponibles de bloqueadas", () => {
    const r = analizarRuta(g, {}, nivel);
    assert.deepEqual(r.disponibles.map((d) => d.codigo), ["1.01", "2.01"]);
    assert.deepEqual(r.bloqueadas.map((b) => b.codigo), ["1.02", "1.03"]);
  });

  test("estudiar una ficha desbloquea la siguiente", () => {
    const r = analizarRuta(g, { "1.01": "x" }, nivel);
    assert.ok(r.disponibles.some((d) => d.codigo === "1.02"));
    assert.ok(!r.disponibles.some((d) => d.codigo === "1.01"), "lo hecho no vuelve a aparecer");
    assert.equal(r.estudiadas, 1);
    assert.equal(r.total, 4);
  });

  test("«progresion» ordena por nivel y luego por temario", () => {
    const r = analizarRuta(g, {}, nivel, "progresion");
    assert.deepEqual(r.disponibles.map((d) => d.codigo), ["1.01", "2.01"]);
  });

  test("«desbloqueo» pone delante lo que más abre", () => {
    /* 2.01 es de nivel más alto pero no abre nada; 1.01 abre dos. */
    const r = analizarRuta(g, {}, nivel, "desbloqueo");
    assert.equal(r.disponibles[0].codigo, "1.01");
    assert.equal(r.disponibles[0].abre, 2);
  });

  test("un modo desconocido cae en progresion en vez de romper", () => {
    const r = analizarRuta(g, {}, nivel, "inventado");
    assert.deepEqual(r.disponibles.map((d) => d.codigo), ["1.01", "2.01"]);
  });

  test("las bloqueadas dicen qué les falta", () => {
    const r = analizarRuta(g, {}, nivel);
    assert.deepEqual(r.bloqueadas.find((b) => b.codigo === "1.02").faltan, ["1.01"]);
  });

  test("sobre el temario real, todo lo disponible tiene sus prerrequisitos hechos", () => {
    const estudiados = Object.fromEntries(["1.01", "1.02", "1.03"].map((c) => [c, "x"]));
    const r = analizarRuta(PRERREQUISITOS, estudiados, () => 1);
    for (const d of r.disponibles) {
      for (const p of r.efectivo[d.codigo]) {
        assert.ok(estudiados[p], `${d.codigo} figura disponible pero le falta ${p}`);
      }
    }
    assert.equal(r.estudiadas + r.disponibles.length + r.bloqueadas.length, r.total);
  });
});
