/* Lista, ficha a ficha, las cadenas que todavía usan notación falsa.
   No es parte de la comprobación: es andamio para la conversión. */
import fs from "fs";
import { partir } from "../src/formula.js";
const MARCA = /[αβγδεζηθλμνξπρστφχψωΓΔΘΛΞΠΣΦΨΩ]|[ᵢₜⱼₓᵥₙₖₛ₀₁₂₃₄₋⁻⁰¹²³⁴ⁿᵗᵉʰˢᵀ√Σ∏∂÷]|[̂̃̄̅]|[_^][a-zA-Z0-9(]|[≥≤≠≈±∀≽⟹⟺]/u;
const arg = process.argv[2];
const archivos = fs.readdirSync("src/datos/fichas")
  .filter((x) => new RegExp(`^f${arg}-\\d+\\.js$`).test(x)).sort();
for (const a of archivos) {
  const { default: f } = await import(`../src/datos/fichas/${a}`);
  const hits = [];
  const rec = (v, ruta) => {
    if (typeof v === "string") {
      // Lo que ya está en LaTeX no cuenta: se mira solo la prosa.
      const prosa = partir(v).filter((x) => !x.math).map((x) => x.texto).join(" ");
      if (MARCA.test(prosa)) hits.push([ruta, v]);
    }
    else if (Array.isArray(v)) v.forEach((x, i) => rec(x, `${ruta}[${i}]`));
    else if (v && typeof v === "object") for (const k of Object.keys(v)) rec(v[k], `${ruta}.${k}`);
  };
  rec(f, "");
  if (!hits.length) continue;
  console.log(`\n######## ${a}  (${f.codigo} ${f.titulo}) — ${hits.length}`);
  for (const [r, v] of hits) console.log(`${r}\n${v}`);
}
