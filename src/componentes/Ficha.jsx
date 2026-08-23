import React from "react";
import BloqueContenido, { enLinea } from "./secciones.jsx";
import { NIVELES } from "../datos/temario.js";

export default function Ficha({ ficha, estudiado, alternar, volver, siguiente, irA }) {
  const nivel = NIVELES[ficha.nivel];

  return (
    <div className="envoltorio estrecho">
      <div className="metaFicha">
        <span>Ficha {ficha.codigo}</span>
        <span>·</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <i className="punto" style={{ background: nivel.color }} />
          Nivel {ficha.nivel} · {nivel.nombre}
        </span>
        <span>·</span>
        <span>{ficha.bloque}</span>
        {ficha.tiempo && (
          <>
            <span>·</span>
            <span>≈ {ficha.tiempo}</span>
          </>
        )}
      </div>

      <h1 className="titular">{ficha.titulo}</h1>
      <p className="nucleo">{enLinea(ficha.nucleo)}</p>
      {(ficha.requiere || ficha.abre) && (
        <p className="requisitos">
          {ficha.requiere && <>Requiere: {ficha.requiere}. </>}
          {ficha.abre && <>Abre paso a: {ficha.abre}.</>}
        </p>
      )}

      {ficha.secciones.map((sec, i) => (
        <section className="seccion" key={i}>
          <div className="seccionCab">
            <span className="seccionNum">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="seccionTit">{sec.titulo}</h2>
          </div>
          {sec.contenido.map((bl, j) => (
            <BloqueContenido bloque={bl} key={j} />
          ))}
        </section>
      ))}

      <div className="pieFicha">
        <button className="boton" data-secundario={estudiado ? "true" : undefined} onClick={() => alternar(ficha.codigo)}>
          {estudiado ? "Marcar como pendiente" : "Marcar como estudiada"}
        </button>
        <button className="botonMini" style={{ marginLeft: 0 }} onClick={volver}>
          Volver al plan
        </button>
        {siguiente && (
          <button className="botonMini" onClick={() => irA(siguiente.codigo)}>
            Siguiente: {siguiente.codigo} {siguiente.t} →
          </button>
        )}
      </div>
    </div>
  );
}
