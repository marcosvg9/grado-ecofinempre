/* Pruebas del buscador.

   Se comprueba contra el índice real, no contra uno de juguete: el valor del
   buscador está en si encuentra lo que hay en el temario, y eso no se puede
   simular. Las consultas elegidas son las que fallaron alguna vez. */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { normalizar, trocear, textosDeFicha, consultar, extracto } from "../src/buscar.js";
import { INDICE, CLAVES, DOCS } from "../src/datos/busqueda.js";
import { CODIGOS_CON_FICHA } from "../src/datos/fichas/index.js";

const pide = (consulta, limite = 5) =>
  consultar({ indice: INDICE, claves: CLAVES, docs: DOCS, consulta, limite });

const codigos = (consulta, limite = 5) => pide(consulta, limite).resultados.map((r) => r.codigo);

describe("normalizar", () => {
  test("quita tildes para que «economia» encuentre «economía»", () => {
    assert.equal(normalizar("Economía"), "economia");
    assert.equal(normalizar("ÍNDICE"), "indice");
  });

  test("la eñe también se despoja: «año» y «ano» son el mismo término", () => {
    /* La ñ se descompone en n + tilde y la tilde se va con las demás, así
       que la ñ que figura en la clase de caracteres permitidos no llega a
       usarse nunca. Para buscar da igual, y conviene que la prueba lo deje
       escrito: si alguien «arregla» la ñ, cambian los términos del índice y
       hay que regenerarlo. */
    assert.equal(normalizar("año"), "ano");
  });

  test("convierte la puntuación en separador", () => {
    assert.equal(normalizar("oferta, demanda; equilibrio").trim(), "oferta  demanda  equilibrio".trim());
  });

  test("conserva el punto de los códigos de ficha", () => {
    assert.match(normalizar("ficha 4.05"), /4\.05/);
  });
});

describe("trocear", () => {
  test("descarta palabras vacías y devuelve lemas, no palabras", () => {
    /* «coste» sale como «cost» a propósito: el lema no es una palabra sino
       una clave, y lo importante es que «coste» y «costes» den la misma. */
    assert.deepEqual(trocear("el coste de la oportunidad"), ["cost", "oportunidad"]);
    assert.deepEqual(trocear("los costes de las oportunidades"), ["cost", "oportunidad"]);
  });

  test("descarta lo demasiado corto y los números sueltos", () => {
    assert.deepEqual(trocear("el 2010 es un año"), ["ano"]);
  });

  test("descarta palabras absurdamente largas", () => {
    assert.deepEqual(trocear("a".repeat(30)), []);
  });

  test("una consulta solo de palabras vacías queda vacía", () => {
    assert.deepEqual(trocear("de la que los"), []);
  });
});

describe("textos indexables de una ficha", () => {
  test("las fórmulas entran como se leen, no como se escriben", async () => {
    /* Al indexar la fuente LaTeX, «dfrac» aparecía en 344 entradas y
       «mathrm» en 288, y los extractos enseñaban el marcado en crudo. */
    const { default: f } = await import("../src/datos/fichas/f8-11.js");
    const texto = textosDeFicha(f).fragmentos.map((x) => x.texto).join(" ");
    for (const mando of ["dfrac", "mathrm", "\\text", "sqrt"]) {
      assert.ok(!texto.includes(mando), `«${mando}» no debe llegar al índice`);
    }
  });

  test("conserva las palabras que van dentro de la fórmula", async () => {
    const { default: f } = await import("../src/datos/fichas/f8-11.js");
    const texto = textosDeFicha(f).fragmentos.map((x) => x.texto).join(" ");
    assert.match(texto, /participaciones/);
  });

  test("ningún mando de LaTeX es un término del índice", () => {
    for (const mando of ["dfrac", "tfrac", "mathrm", "text", "cdot", "varepsilon", "sqrt", "hat"]) {
      assert.equal(INDICE[mando], undefined, `«${mando}» está indexado como si fuera vocabulario`);
    }
  });
});

describe("consultas sobre el temario real", () => {
  test("una palabra clave lleva a su ficha", () => {
    assert.equal(codigos("valor liquidativo")[0], "8.11");
    assert.equal(codigos("duracion modificada")[0], "8.02");
  });

  test("varias palabras acotan en vez de dispersar", () => {
    const r = pide("error estandar de la media");
    assert.ok(r.resultados.length > 0);
    assert.ok(r.resultados[0].codigo.startsWith("4."), "debe caer en métodos cuantitativos");
  });

  test("encuentra por el contenido de una fórmula", () => {
    /* «patrimonio del fondo» solo aparece dentro de un \\dfrac. Si el índice
       guardara la fuente LaTeX, esta consulta no encontraría nada. */
    assert.ok(codigos("patrimonio del fondo").includes("8.11"));
  });

  test("una consulta sin resultados no revienta", () => {
    const r = pide("xilofonoinexistente");
    assert.deepEqual(r.resultados, []);
    assert.equal(r.terminos.length, 1, "sí devuelve el término buscado");
  });

  test("una consulta vacía no revienta", () => {
    assert.doesNotThrow(() => pide(""));
    assert.doesNotThrow(() => pide("   "));
    assert.doesNotThrow(() => pide("de la que"));
  });

  test("respeta el límite pedido", () => {
    assert.ok(pide("mercado", 3).resultados.length <= 3);
  });

  test("las tildes no cambian el resultado", () => {
    assert.deepEqual(codigos("elasticidad demanda"), codigos("elásticidad demánda"));
  });

  test("singular y plural dan el mismo resultado", () => {
    /* Es el fallo que motivó la lematización: 2.249 plurales del índice
       tenían su singular indexado por separado, así que una consulta de
       varias palabras fallaba según qué flexión usara el texto. */
    assert.deepEqual(codigos("bono"), codigos("bonos"));
    assert.deepEqual(codigos("arancel proteccionismo"), codigos("aranceles proteccionista"));
    assert.deepEqual(codigos("politica economica"), codigos("politicas economicas"));
    assert.deepEqual(codigos("coste de oportunidad"), codigos("costes de oportunidad"));
  });

  test("buscar el título de una ficha la encuentra la primera", () => {
    for (const c of ["8.11", "4.05", "15.09", "16.05", "2.07"]) {
      const doc = DOCS.find((d) => d.codigo === c);
      assert.equal(codigos(doc.titulo)[0], c, `«${doc.titulo}» debería llevar a ${c}`);
    }
  });

  test("las mayúsculas no cambian el resultado", () => {
    assert.deepEqual(codigos("oferta monetaria"), codigos("OFERTA MONETARIA"));
  });

  test("todo resultado trae código y título", () => {
    for (const r of pide("inflacion").resultados) {
      assert.match(r.codigo, /^\d{1,2}\.\d{2}$/);
      assert.ok(r.titulo && r.titulo.length > 3);
    }
  });
});

describe("extractos", () => {
  test("devuelve un fragmento con el término resaltado", async () => {
    const { default: f } = await import("../src/datos/fichas/f8-11.js");
    const e = extracto(f, trocear("patrimonio del fondo"));
    assert.ok(e && typeof e.texto === "string");
    assert.match(e.texto, /\*\*/, "marca los términos encontrados");
    assert.ok(e.texto.length <= 400);
  });

  test("no enseña LaTeX en crudo", async () => {
    const { default: f } = await import("../src/datos/fichas/f4-05.js");
    const e = extracto(f, trocear("pendiente estimada covarianza"));
    if (e) {
      assert.ok(!e.texto.includes("\\dfrac"), "el extracto no debe enseñar el marcado");
      assert.ok(!e.texto.includes("$"), "ni los delimitadores");
    }
  });

  test("con términos que no aparecen no revienta", async () => {
    const { default: f } = await import("../src/datos/fichas/f1-01.js");
    assert.doesNotThrow(() => extracto(f, trocear("xilofonoinexistente")));
  });
});

describe("salud del índice", () => {
  /* Contra el registro de fichas y no contra un número escrito a mano: el
     temario crece, y una cifra fija solo prueba que nadie la ha actualizado.
     Lo que importa es que no falte ninguna ficha en el índice. */
  test("cubre todas las fichas registradas", () => {
    assert.equal(DOCS.length, CODIGOS_CON_FICHA.size);
    const enIndice = new Set(DOCS.map((d) => d.codigo));
    const ausentes = [...CODIGOS_CON_FICHA].filter((c) => !enIndice.has(c));
    assert.deepEqual(ausentes, [], "hay fichas sin indexar: falta «npm run indices»");
  });

  test("cada posting apunta a un documento que existe", () => {
    let revisados = 0;
    for (const termino of Object.keys(INDICE).slice(0, 400)) {
      const bruto = INDICE[termino];
      for (let i = 0; i < bruto.length; i += 4) {
        const doc = parseInt(bruto.slice(i, i + 2), 36);
        assert.ok(DOCS[doc], `«${termino}» apunta al documento ${doc}, que no existe`);
        revisados++;
      }
    }
    assert.ok(revisados > 500, "la comprobación debe haber mirado algo");
  });
});
