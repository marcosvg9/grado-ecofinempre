import React, { useState, useEffect, useMemo, useRef } from "react";
import { enLinea } from "./secciones.jsx";
import { consultar, extracto } from "../buscar.js";
import { cargarFicha } from "../datos/fichas/index.js";
import { NIVELES, BLOQUES, TEMAS } from "../datos/temario.js";

const EJEMPLOS = [
  "cotizaciones imputadas",
  "punto muerto",
  "curva de Phillips",
  "derechos de emisión",
  "índices encadenados",
  "coste de oportunidad",
];

export default function Buscador({ indiceBusqueda, irAFicha, inicial = "" }) {
  const [texto, setTexto] = useState(inicial);
  const [extractos, setExtractos] = useState({});
  const [foco, setFoco] = useState(0);
  const campo = useRef(null);

  useEffect(() => {
    if (campo.current) campo.current.focus();
  }, []);

  const { terminos, resultados, cobertura, total } = useMemo(() => {
    if (!indiceBusqueda || texto.trim().length < 2) return { terminos: [], resultados: [] };
    return consultar({
      indice: indiceBusqueda.INDICE,
      claves: indiceBusqueda.CLAVES,
      docs: indiceBusqueda.DOCS,
      consulta: texto,
      limite: 20,
    });
  }, [indiceBusqueda, texto]);

  useEffect(() => setFoco(0), [texto]);

  /* Los extractos salen de la ficha real, no del indice: se cargan solo los
     de los primeros resultados y se aprovecha que cada ficha ya es un chunk. */
  useEffect(() => {
    let vivo = true;
    const pendientes = resultados.slice(0, 8);
    if (!pendientes.length) return;
    Promise.all(
      pendientes.map(async (r) => {
        const f = await cargarFicha(r.codigo);
        return [r.codigo, f ? extracto(f, terminos) : null];
      })
    ).then((pares) => {
      if (vivo) setExtractos(Object.fromEntries(pares));
    });
    return () => { vivo = false; };
  }, [resultados, terminos]);

  const abrir = (codigo) => irAFicha(codigo);

  const teclas = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setFoco((f) => Math.min(f + 1, resultados.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setFoco((f) => Math.max(f - 1, 0)); }
    else if (e.key === "Enter" && resultados[foco]) { e.preventDefault(); abrir(resultados[foco].codigo); }
    else if (e.key === "Escape") { setTexto(""); }
  };

  const parcial = terminos.length > 1 && cobertura < total;

  return (
    <section className="buscador">
      <input
        ref={campo}
        className="buscadorCampo"
        type="search"
        value={texto}
        placeholder={`Buscar en las ${TEMAS.length} fichas…`}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={teclas}
        autoComplete="off"
        spellCheck="false"
      />

      {!indiceBusqueda && texto.trim().length >= 2 && (
        <p className="buscadorAviso">Cargando el índice…</p>
      )}

      {texto.trim().length < 2 ? (
        <div className="buscadorVacio">
          <p className="buscadorAviso">
            Busca por concepto, no por código. Se recorren los ocho apartados de cada ficha,
            incluidos los ejemplos numéricos, los errores típicos y las preguntas.
          </p>
          <p className="buscadorEjemplos">
            {EJEMPLOS.map((e) => (
              <button className="chipEjemplo" key={e} onClick={() => setTexto(e)}>{e}</button>
            ))}
          </p>
        </div>
      ) : (
        <>
          <p className="buscadorAviso">
            {resultados.length === 0
              ? "Sin resultados."
              : `${resultados.length} ficha${resultados.length === 1 ? "" : "s"}`}
            {parcial && ` · ninguna contiene los ${total} términos; se muestran las que reúnen ${cobertura}`}
          </p>

          <ol className="buscadorLista">
            {resultados.map((r, i) => {
              const ex = extractos[r.codigo];
              return (
                <li key={r.codigo}>
                  <button
                    className="buscadorItem"
                    data-foco={i === foco}
                    onClick={() => abrir(r.codigo)}
                    onMouseEnter={() => setFoco(i)}
                  >
                    <span className="buscadorCod">{r.codigo}</span>
                    <span className="buscadorCuerpo">
                      <span className="buscadorTitulo">{r.titulo}</span>
                      <span className="buscadorMeta">
                        {r.bloque} · {NIVELES[r.nivel]?.nombre || `Nivel ${r.nivel}`}
                        {ex && <> · {ex.seccion}</>}
                      </span>
                      {ex && <span className="buscadorExtracto">{enLinea(ex.texto)}</span>}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </>
      )}
      <p className="buscadorPie">
        <kbd>↑</kbd><kbd>↓</kbd> para moverse · <kbd>Enter</kbd> para abrir · <kbd>Esc</kbd> para limpiar
        {BLOQUES.length ? ` · ${BLOQUES.length} bloques indexados` : ""}
      </p>
    </section>
  );
}
