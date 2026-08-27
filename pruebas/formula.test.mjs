/* Pruebas del conversor LaTeX → MathML.

   Casi todas nacen de un fallo real cometido al convertir el temario. Los
   dos primeros bloques son los importantes: cubren errores que no rompían
   nada visiblemente, sino que producían MathML mal formado que el navegador
   dibujaba como otra cosa sin avisar. Esos son los que hay que blindar. */

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { aMathML, revisar, partir, tieneFormula, legible } from "../src/formula.js";

/* Cuenta hijos directos de un elemento en la cadena de MathML. Basta con
   contar etiquetas de apertura al nivel cero, sin analizar el XML. */
function hijosDe(mathml, etiqueta) {
  const i = mathml.indexOf(`<${etiqueta}`);
  if (i === -1) return null;
  let hondo = 0, n = 0;
  const re = /<(\/?)([a-z]+)[^>]*?(\/?)>/g;
  re.lastIndex = mathml.indexOf(">", i) + 1;
  let m;
  while ((m = re.exec(mathml))) {
    const [, cierre, , vacio] = m;
    if (cierre) { if (hondo === 0) break; hondo--; continue; }
    if (hondo === 0) n++;
    if (!vacio) hondo++;
  }
  return n;
}

describe("estructura del MathML", () => {
  test("un grupo con varios átomos va envuelto en mrow", () => {
    /* Sin el mrow, munderover recibía cinco hijos donde admite tres y el
       navegador colocaba los límites en sitios que no eran, sin error. */
    const r = aMathML("\\sum_{i=1}^{n} x_i");
    assert.equal(hijosDe(r, "munderover"), 3);
  });

  test("mfrac recibe exactamente dos hijos", () => {
    assert.equal(hijosDe(aMathML("\\dfrac{\\partial F}{\\partial \\alpha}"), "mfrac"), 2);
    assert.equal(hijosDe(aMathML("\\frac{a+b}{c+d+e}"), "mfrac"), 2);
  });

  test("msub recibe exactamente dos hijos aunque el índice tenga varios símbolos", () => {
    assert.equal(hijosDe(aMathML("y_{it}"), "msub"), 2);
    assert.equal(hijosDe(aMathML("b_{-1}"), "msub"), 2);
  });

  test("mroot recibe exactamente dos hijos", () => {
    assert.equal(hijosDe(aMathML("\\sqrt[3]{x+1}"), "mroot"), 2);
  });
});

describe("alcance de los argumentos", () => {
  test("un argumento sin llaves es un solo átomo, no arrastra los índices", () => {
    /* x^2_i es x con superíndice 2 y subíndice i, no x elevado a (2 con
       subíndice i). Si el argumento pelado leyera también los guiones,
       saldría un msub anidado dentro del msup. */
    const r = aMathML("x^2_i");
    assert.match(r, /<msubsup>/, "sub y sup sobre la misma base dan msubsup");
    assert.equal(hijosDe(r, "msubsup"), 3);
  });

  test("un acento no se traga el subíndice que va detrás", () => {
    /* \\hat\\beta_1 lleva el sombrero sobre la beta y el 1 fuera; si el
       acento leyera el argumento con guiones, coronaría todo el β₁. */
    const r = aMathML("\\hat\\beta_1");
    assert.match(r, /^<math><mrow><msub><mover/, "el msub envuelve al mover, no al revés");
  });

  test("sub y sup juntos dan msubsup y no dos escalones", () => {
    assert.match(aMathML("x_i^2"), /<msubsup>/);
    assert.doesNotMatch(aMathML("x_i^2"), /<msup><msub>/);
  });
});

describe("composición", () => {
  test("un identificador de una letra va en mi y un número en mn", () => {
    assert.match(aMathML("x"), /<mi>x<\/mi>/);
    assert.match(aMathML("42"), /<mn>42<\/mn>/);
  });

  test("un número conserva sus separadores en un solo átomo", () => {
    assert.match(aMathML("279.100"), /<mn>279\.100<\/mn>/);
    assert.match(aMathML("21{,}21"), /<mn>21<\/mn>/);
  });

  test("\\dfrac fuerza cuerpo grande y \\tfrac lo contrario", () => {
    assert.match(aMathML("\\dfrac{1}{2}"), /<mstyle displaystyle="true">/);
    assert.match(aMathML("\\tfrac{1}{2}"), /<mstyle displaystyle="false">/);
    assert.doesNotMatch(aMathML("\\frac{1}{2}"), /<mstyle/);
  });

  test("el acento es el carácter modificador, no el circunflejo de teclado", () => {
    /* El ^ del teclado se compone como carácter propio: mide casi lo mismo
       que la letra que corona y sube la fórmula varios píxeles. */
    assert.match(aMathML("\\hat x"), /ˆ/);
    assert.doesNotMatch(aMathML("\\hat x"), /\^/);
  });

  test("una función lleva espacio fino antes de su argumento", () => {
    /* Sin él, MathML pega los dos <mi> y se lee «lnx». */
    assert.match(aMathML("\\ln y"), /<mi>ln<\/mi><mspace/);
  });

  test("\\text conserva los espacios de los extremos", () => {
    const r = aMathML("P(\\text{rechazar } H_0 \\mid H_0 \\text{ cierta})");
    assert.match(r, /<mtext>rechazar <\/mtext>/);
    assert.match(r, /<mtext> cierta<\/mtext>/);
  });

  test("los delimitadores de \\left…\\right se marcan estirables", () => {
    assert.match(aMathML("\\left(\\dfrac{a}{b}\\right)"), /<mo stretchy="true">\(<\/mo>/);
  });

  test("se escapan los caracteres que romperían el marcado", () => {
    assert.match(aMathML("a < b"), /&lt;/);
    assert.doesNotMatch(aMathML("a < b"), /<mo><\/mo>/);
  });

  test("display block solo cuando se pide", () => {
    assert.match(aMathML("x", true), /<math display="block">/);
    assert.doesNotMatch(aMathML("x", false), /display=/);
  });
});

describe("errores que deben detenerse", () => {
  const rotas = [
    ["\\tfracc{1}{2}", /comando desconocido/],
    ["{a", /falta «}»/],
    ["_x", /sin nada delante/],
    ["x^2^3", /dos superíndices/],
    ["x_1_2", /dos subíndices/],
    ["\\frac{a}{}", /grupo vacío/],
    ["a}", /sin «\{»/],
    ["\\frac{a}", /falta el argumento/],
  ];
  for (const [src, patron] of rotas) {
    test(`«${src}» no compila`, () => {
      const e = revisar(src);
      assert.ok(e, "debería dar error");
      assert.match(e, patron);
      assert.throws(() => aMathML(src));
    });
  }

  test("el error señala la posición del problema", () => {
    const e = revisar("x + \\nocomando y");
    assert.match(e, /\^/, "lleva el cursor que marca dónde falla");
  });

  test("una fórmula válida no da error", () => {
    assert.equal(revisar("\\mathrm{EE}(\\hat\\beta_1) = \\sqrt{\\dfrac{\\hat\\sigma^2}{S_{xx}}}"), null);
  });
});

describe("partir: dónde empieza y acaba una fórmula", () => {
  test("un dólar de moneda no abre fórmula", () => {
    /* El temario habla de dólares y hay trece en las fichas. La regla es la
       de GitHub: el «$» solo abre si le sigue algo que no es espacio. */
    const t = partir("Un aparato de 500 $ se ensambla con 8 $ de valor añadido.");
    assert.equal(t.length, 1);
    assert.equal(t[0].math, false);
  });

  test("un dólar suelto sin pareja se queda como carácter", () => {
    const t = partir("oro a 35 $/onza");
    assert.ok(t.every((x) => !x.math));
    assert.equal(t.map((x) => x.texto).join(""), "oro a 35 $/onza");
  });

  test("un dólar escapado nunca abre fórmula", () => {
    const t = partir("Cuesta 50\\$ al mes.");
    assert.equal(t.length, 1);
    assert.equal(t[0].texto, "Cuesta 50$ al mes.");
  });

  test("no cierra si el «$» final va precedido de espacio", () => {
    /* Este es el fallo que dejé en 8.03: «= $ **1.071,22 €**» no cerraba y
       el dólar habría acabado impreso en la página. */
    const t = partir("da $1.000 \\times 2 = $ mil");
    assert.ok(t.every((x) => !x.math));
  });

  test("separa prosa y fórmulas en orden", () => {
    const t = partir("El error es $\\sqrt n$ aquí.");
    assert.deepEqual(t.map((x) => x.math), [false, true, false]);
    assert.equal(t[1].latex, "\\sqrt n");
    assert.equal(t[2].texto, " aquí.");
  });

  test("$$…$$ marca fórmula de bloque", () => {
    const t = partir("antes $$x = 1$$ después");
    assert.equal(t[1].math, true);
    assert.equal(t[1].bloque, true);
    assert.equal(t[1].latex, "x = 1");
  });

  test("tieneFormula distingue fórmula de dólar", () => {
    assert.equal(tieneFormula("$x$"), true);
    assert.equal(tieneFormula("500 $"), false);
    assert.equal(tieneFormula("sin nada"), false);
    assert.equal(tieneFormula(42), false);
  });
});

describe("legible: lo que ve el buscador", () => {
  test("no deja mandos de LaTeX como si fueran palabras", () => {
    /* Al indexar la fuente, «dfrac» aparecía en 344 entradas y «mathrm» en
       288, y los extractos de resultados enseñaban el LaTeX en crudo. */
    const r = legible("La $\\mathrm{VL} = \\dfrac{\\text{patrimonio}}{\\text{participaciones}}$ sube.");
    for (const mando of ["dfrac", "mathrm", "text", "frac"]) {
      assert.ok(!r.includes(mando), `no debe quedar «${mando}» en «${r}»`);
    }
  });

  test("conserva las palabras de dentro de la fórmula", () => {
    const r = legible("La $\\dfrac{\\text{patrimonio del fondo}}{\\text{participaciones}}$.");
    assert.match(r, /patrimonio del fondo/);
    assert.match(r, /participaciones/);
  });

  test("un texto sin fórmulas vuelve intacto", () => {
    const s = "Nada que convertir aquí.";
    assert.equal(legible(s), s);
  });

  test("una fórmula rota no tumba el índice", () => {
    assert.doesNotThrow(() => legible("roto $\\nocomando$ fin"));
  });
});
