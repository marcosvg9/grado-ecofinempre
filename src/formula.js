/* LaTeX → MathML.
   ------------------------------------------------------------------
   Las fórmulas venían escritas con caracteres Unicode: subíndices como
   ᵢ o ₜ, sombreros combinantes como β̂, y divisiones en línea con ÷.
   Ese apaño falla por donde tiene que fallar: Unicode no tiene subíndice
   para la mayoría de letras (no existe ₚ ni ₘ ni ninguna mayúscula), así
   que la misma idea acaba escrita de dos maneras — Iₜ pero p_t — y los
   diacríticos combinantes se descuadran al apilarse sobre un subíndice.

   MathML lo resuelve sin coste: lo implementan todos los navegadores
   actuales de forma nativa, dibuja fracciones y radicales de verdad y
   usa la fuente matemática del sistema. No hace falta ninguna librería.

   Aquí solo se cubre el subconjunto de LaTeX que el temario usa. Lo que
   caiga fuera lanza un error con la posición exacta, y el validador lo
   caza antes de que llegue a una ficha. Preferimos romper ruidosamente
   a emitir MathML silenciosamente mal formado. */

const SIMBOLO = {
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", varepsilon: "ε",
  zeta: "ζ", eta: "η", theta: "θ", vartheta: "ϑ", iota: "ι", kappa: "κ",
  lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", pi: "π", rho: "ρ", sigma: "σ",
  tau: "τ", upsilon: "υ", phi: "φ", varphi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  Gamma: "Γ", Delta: "Δ", Theta: "Θ", Lambda: "Λ", Xi: "Ξ", Pi: "Π",
  Sigma: "Σ", Upsilon: "Υ", Phi: "Φ", Psi: "Ψ", Omega: "Ω", ell: "ℓ",
};

const OPERADOR = {
  cdot: "·", times: "×", div: "÷", pm: "±", mp: "∓", ast: "∗",
  leq: "≤", le: "≤", geq: "≥", ge: "≥", neq: "≠", ne: "≠",
  approx: "≈", equiv: "≡", propto: "∝", sim: "∼", simeq: "≃",
  in: "∈", notin: "∉", subset: "⊂", subseteq: "⊆", cup: "∪", cap: "∩",
  to: "→", rightarrow: "→", longrightarrow: "⟶", leftarrow: "←",
  Rightarrow: "⟹", Leftarrow: "⟸", Leftrightarrow: "⟺", leftrightarrow: "↔",
  uparrow: "↑", downarrow: "↓", infty: "∞", partial: "∂", nabla: "∇",
  forall: "∀", exists: "∃", ldots: "…", cdots: "⋯", circ: "∘",
  succeq: "≽", preceq: "≼", succ: "≻", prec: "≺", perp: "⊥", prime: "′",
  mid: "∣", parallel: "∥", cong: "≅",
};

/* Operadores grandes: llevan los límites debajo y encima, no al lado. */
const GRANDE = { sum: "∑", prod: "∏", int: "∫", oint: "∮" };

/* Funciones que van en redonda y no en cursiva, por convención. */
const FUNCION = new Set([
  "log", "ln", "exp", "max", "min", "lim", "sup", "inf", "det", "arg",
  "sen", "sin", "cos", "tan", "Var", "Cov", "Corr", "Pr", "E",
]);

/* El acento va con el carácter modificador, no con el signo de teclado:
   el circunflejo ASCII se compone como carácter propio —mide casi lo
   mismo que la beta que corona y sube la fórmula cinco píxeles— mientras
   que U+02C6 está dibujado para ir encima de una letra. */
const ACENTO = { hat: "ˆ", widehat: "ˆ", bar: "‾", overline: "‾", tilde: "˜", vec: "→", dot: "˙" };

/* Lo que va debajo, no encima: la barra de una variable «suelo». */
const BAJO = { underline: "‾", underbar: "‾" };

const ESPACIO = { ",": "0.17em", ";": "0.28em", ":": "0.22em", quad: "1em", qquad: "2em", "!": "-0.17em" };

const ESCAPA = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ESCAPA[c]);

/* --- Analizador léxico ---------------------------------------------
   Un número se toma entero, con sus separadores de millar y decimales,
   para que «279.100» no se parta en tres átomos. */
const RE = /\\[a-zA-Z]+|\\[,;:!]|\\\\|\\[{}$%&_#]|[0-9]+(?:[.,][0-9]+)*|[a-zA-Z]|[_^{}]|\s+|[^\s]/y;

function trocear(src) {
  const piezas = [];
  RE.lastIndex = 0;
  let i = 0;
  while (i < src.length) {
    RE.lastIndex = i;
    const m = RE.exec(src);
    if (!m) throw new ErrorFormula(`carácter que no se puede leer`, src, i);
    if (!/^\s+$/.test(m[0])) piezas.push({ t: m[0], i });
    i = RE.lastIndex;
  }
  return piezas;
}

export class ErrorFormula extends Error {
  constructor(mensaje, src, pos) {
    super(`${mensaje}\n    ${src}\n    ${" ".repeat(Math.max(0, pos))}^`);
    this.name = "ErrorFormula";
    this.pos = pos;
  }
}

/* --- Analizador sintáctico ------------------------------------------
   Descenso recursivo. Cada función devuelve una cadena de MathML ya
   montada; no se construye árbol intermedio porque no hace falta. */
function analizarPiezas(piezas, src) {
  let p = 0;
  const fin = () => p >= piezas.length;
  const mira = () => (fin() ? null : piezas[p].t);
  const donde = () => (fin() ? src.length : piezas[p].i);

  function exige(tok, para) {
    if (mira() !== tok) throw new ErrorFormula(`falta «${tok}» ${para}`, src, donde());
    p++;
  }

  /* Un argumento es un grupo entre llaves o, si no las hay, un solo
     átomo: en LaTeX x^2 y x^{2} son lo mismo.

     Dos cuidados que no son opcionales. Uno: el grupo se envuelve
     siempre en <mrow>, porque mfrac, msub y munderover exigen un número
     exacto de hijos y un {i=1} suelto mete tres donde cabe uno — el
     navegador no avisa, simplemente dibuja otra cosa. Dos: sin llaves se
     toma un átomo pelado y no un átomo con guiones, o x^2_i acabaría
     leyéndose como x^(2_i) y \hat\beta_1 pondría el sombrero sobre
     todo el β₁ en vez de sobre la beta. */
  function argumento(para) {
    if (fin()) throw new ErrorFormula(`falta el argumento ${para}`, src, src.length);
    if (mira() !== "{") return atomo();
    const pos = donde();
    p++;
    const dentro = lista("}");
    exige("}", `para cerrar el grupo ${para}`);
    if (!dentro) throw new ErrorFormula(`grupo vacío ${para}`, src, pos);
    return `<mrow>${dentro}</mrow>`;
  }

  /* El texto se lee crudo hasta la llave de cierre: dentro de \text{}
     los símbolos son símbolos y no mandan nada.

     Se recorta de la fuente original en vez de recomponerlo pieza a
     pieza, porque el troceo descarta los espacios y hay que conservarlos
     tal cual: «\text{rechazar }» necesita su espacio final para no pegarse
     al símbolo que viene detrás. */
  function argumentoTexto(para) {
    const abre = fin() ? src.length : piezas[p].i;
    exige("{", `para abrir ${para}`);
    const desde = abre + 1;
    let hondo = 0;
    while (!fin()) {
      const t = mira();
      if (t === "}" && hondo === 0) break;
      if (t === "{") hondo++;
      if (t === "}") hondo--;
      p++;
    }
    const hasta = fin() ? src.length : piezas[p].i;
    exige("}", `para cerrar ${para}`);
    return src.slice(desde, hasta);
  }

  function comando(nombre, pos) {
    if (nombre in SIMBOLO) return `<mi>${esc(SIMBOLO[nombre])}</mi>`;
    if (nombre in OPERADOR) return `<mo>${esc(OPERADOR[nombre])}</mo>`;
    if (nombre in ESPACIO) return `<mspace width="${ESPACIO[nombre]}"/>`;
    // «ln x» lleva un espacio fino entre el nombre y su argumento; sin él
    // MathML pega dos <mi> y se lee «lnx».
    if (FUNCION.has(nombre)) return `<mi>${esc(nombre)}</mi><mspace width="0.11em"/>`;

    if (nombre in GRANDE) {
      const simbolo = `<mo movablelimits="false">${esc(GRANDE[nombre])}</mo>`;
      // Los límites de un operador grande van debajo y encima; es la
      // diferencia visible con el Σ suelto que había antes.
      let bajo = null, alto = null;
      while (mira() === "_" || mira() === "^") {
        const cual = mira(); p++;
        const v = argumento(`de ${cual === "_" ? "el límite inferior" : "el límite superior"}`);
        if (cual === "_") bajo = v; else alto = v;
      }
      if (bajo && alto) return `<munderover>${simbolo}${bajo}${alto}</munderover>`;
      if (bajo) return `<munder>${simbolo}${bajo}</munder>`;
      if (alto) return `<mover>${simbolo}${alto}</mover>`;
      return simbolo;
    }

    if (nombre in BAJO)
      return `<munder accent="true">${argumento(`de \\${nombre}`)}<mo stretchy="true">${esc(BAJO[nombre])}</mo></munder>`;

    if (nombre in ACENTO) {
      const base = argumento(`de \\${nombre}`);
      const marca = ACENTO[nombre];
      const estirable = marca === "‾" || marca === "→";
      return `<mover accent="true">${base}<mo stretchy="${estirable}">${esc(marca)}</mo></mover>`;
    }

    switch (nombre) {
      case "frac":
      case "dfrac":
      case "tfrac": {
        const num = argumento("del numerador");
        const den = argumento("del denominador");
        const q = `<mfrac>${num}${den}</mfrac>`;
        // \dfrac fuerza el cuerpo grande aunque la fórmula vaya en línea
        // —sin esto una fracción incrustada se encoge y deja de leerse— y
        // \tfrac hace lo contrario, para un ½ metido dentro de otra.
        if (nombre === "dfrac") return `<mstyle displaystyle="true">${q}</mstyle>`;
        if (nombre === "tfrac") return `<mstyle displaystyle="false">${q}</mstyle>`;
        return q;
      }
      case "sqrt": {
        if (mira() === "[") {
          p++;
          const indice = lista("]");
          exige("]", "para cerrar el índice de la raíz");
          if (!indice) throw new ErrorFormula("índice de raíz vacío", src, donde());
          return `<mroot>${argumento("del radicando")}<mrow>${indice}</mrow></mroot>`;
        }
        return `<msqrt>${argumento("del radicando")}</msqrt>`;
      }
      case "text":
      case "textrm":
        return `<mtext>${esc(argumentoTexto("\\text"))}</mtext>`;
      case "mathrm":
      case "operatorname":
        return `<mi>${esc(argumentoTexto(`\\${nombre}`))}</mi>`;
      case "left": {
        const abre = mira();
        if (abre === null) throw new ErrorFormula("\\left sin delimitador", src, src.length);
        p++;
        const dentro = lista("\\right");
        exige("\\right", "para cerrar \\left");
        const cierra = mira();
        if (cierra === null) throw new ErrorFormula("\\right sin delimitador", src, src.length);
        p++;
        const d = (x) => (x === "." ? "" : `<mo stretchy="true">${esc(x.replace(/^\\/, ""))}</mo>`);
        return `<mrow>${d(abre)}${dentro}${d(cierra)}</mrow>`;
      }
      case "\\":
        return "<mspace linebreak='newline'/>";
      default:
        throw new ErrorFormula(`comando desconocido \\${nombre}`, src, pos);
    }
  }

  function atomo() {
    const pos = donde();
    const t = mira();
    if (t === null) throw new ErrorFormula("fórmula incompleta", src, src.length);
    p++;

    if (t[0] === "\\") {
      if (/^\\[a-zA-Z]+$/.test(t)) return comando(t.slice(1), pos);
      if (t === "\\\\") return "<mspace linebreak='newline'/>";
      if (t.length === 2 && t[1] in ESPACIO) return `<mspace width="${ESPACIO[t[1]]}"/>`;
      return `<mo>${esc(t.slice(1))}</mo>`;      // \{ \} \% \$ escapados
    }
    if (t === "{") {
      const dentro = lista("}");
      exige("}", "para cerrar el grupo");
      return `<mrow>${dentro}</mrow>`;
    }
    if (t === "}") throw new ErrorFormula("«}» sin «{» que la abra", src, pos);
    if (/^[0-9]/.test(t)) return `<mn>${esc(t)}</mn>`;
    if (/^[a-zA-Z]$/.test(t)) return `<mi>${esc(t)}</mi>`;
    if (t === "(" || t === ")" || t === "[" || t === "]" || t === "|")
      return `<mo stretchy="false">${esc(t)}</mo>`;
    if (t === "'") return "<mo>′</mo>";
    return `<mo>${esc(t)}</mo>`;
  }

  /* Sub y superíndice se leen juntos: x_i^2 tiene que dar msubsup y no
     dos escalones, o el 2 acaba colgando del subíndice. */
  function atomoConGuiones() {
    if (mira() === "_" || mira() === "^") throw new ErrorFormula(`«${mira()}» sin nada delante`, src, donde());
    const base = atomo();
    let sub = null, sup = null;
    while (mira() === "_" || mira() === "^") {
      const cual = mira();
      const pos = donde();
      p++;
      const v = argumento(cual === "_" ? "del subíndice" : "del superíndice");
      if (cual === "_") {
        if (sub) throw new ErrorFormula("dos subíndices sobre la misma base", src, pos);
        sub = v;
      } else {
        if (sup) throw new ErrorFormula("dos superíndices sobre la misma base", src, pos);
        sup = v;
      }
    }
    if (sub && sup) return `<msubsup>${base}${sub}${sup}</msubsup>`;
    if (sub) return `<msub>${base}${sub}</msub>`;
    if (sup) return `<msup>${base}${sup}</msup>`;
    return base;
  }

  function lista(hasta) {
    let out = "";
    while (!fin() && mira() !== hasta) out += atomoConGuiones();
    return out;
  }

  const cuerpo = lista(null);
  if (!fin()) throw new ErrorFormula(`sobra «${mira()}»`, src, donde());
  return cuerpo;
}

/* Convierte una fórmula LaTeX en MathML. `bloque` la centra en su
   propia línea; si no, va incrustada en el párrafo. */
export function aMathML(latex, bloque = false) {
  const cuerpo = analizarPiezas(trocear(latex), latex);
  const display = bloque ? ' display="block"' : "";
  return `<math${display}><mrow>${cuerpo}</mrow></math>`;
}

/* Devuelve el error si la fórmula no compila, o null si compila.
   Lo usa el validador para no dejar pasar ninguna rota. */
export function revisar(latex) {
  try {
    aMathML(latex);
    return null;
  } catch (e) {
    return e.message;
  }
}

/* Parte un texto en trozos de prosa y fórmulas delimitadas por $…$.

   El temario habla de dólares, así que el delimitador no puede ser un
   dólar a secas: hay trece en las fichas y uno de ellos lleva dos en la
   misma frase («de 500 $ se ensambla con 8 $»), que se leería como una
   fórmula entera. Se sigue la convención de GitHub, que resuelve esto
   sin obligar a escapar nada: el «$» solo abre si le sigue algo que no
   es un espacio, y solo cierra si le precede algo que no es un espacio.
   «500 $ se…» no abre nunca. Un «$» suelto que no encuentra pareja se
   queda como carácter, no rompe el texto.

   Devuelve [{ math:false, texto }, { math:true, latex }]. */
export function partir(texto) {
  const trozos = [];
  let buffer = "";
  let i = 0;
  const suelta = (n) => { buffer += texto.slice(i, i + n); i += n; };

  while (i < texto.length) {
    if (texto[i] === "\\" && texto[i + 1] === "$") { buffer += "$"; i += 2; continue; }

    // $$…$$ es fórmula centrada en su propia línea; se mira primero
    // porque si no el «$$» de apertura se leería como fórmula vacía.
    if (texto[i] === "$" && texto[i + 1] === "$") {
      const fin = texto.indexOf("$$", i + 2);
      if (fin !== -1 && fin > i + 2) {
        if (buffer) { trozos.push({ math: false, texto: buffer }); buffer = ""; }
        trozos.push({ math: true, bloque: true, latex: texto.slice(i + 2, fin) });
        i = fin + 2;
        continue;
      }
    }

    if (texto[i] !== "$" || /\s|^$/.test(texto[i + 1] || "")) { suelta(1); continue; }

    // Cierre válido: un «$» no escapado, precedido de algo que no es espacio.
    let cierre = -1;
    for (let j = i + 1; j < texto.length; j++) {
      if (texto[j] !== "$" || texto[j - 1] === "\\") continue;
      if (!/\s/.test(texto[j - 1])) { cierre = j; }
      break;
    }
    if (cierre === -1) { suelta(1); continue; }

    if (buffer) { trozos.push({ math: false, texto: buffer }); buffer = ""; }
    trozos.push({ math: true, bloque: false, latex: texto.slice(i + 1, cierre) });
    i = cierre + 1;
  }
  if (buffer) trozos.push({ math: false, texto: buffer });
  return trozos;
}

/* Versión legible de un texto con fórmulas: se sustituye cada $…$ por lo
   que un lector ve, no por su fuente. Hace falta para el buscador — que si
   no indexa «dfrac» y «mathrm» como si fueran vocabulario, y los enseña en
   los extractos de resultados. Se pasa por el propio conversor y se le
   quitan las etiquetas, de modo que lo legible aquí y lo compuesto en la
   página salen de la misma gramática. */
export function legible(texto) {
  if (typeof texto !== "string" || !texto.includes("$")) return texto;
  return partir(texto)
    .map((t) => {
      if (!t.math) return t.texto;
      try {
        return " " + aMathML(t.latex).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() + " ";
      } catch (e) {
        return " ";      // una rota no debe tumbar el índice; ya la caza el validador
      }
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

export const tieneFormula = (t) => typeof t === "string" && t.includes("$") && partir(t).some((x) => x.math);
