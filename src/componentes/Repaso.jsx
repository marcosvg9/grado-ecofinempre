import React, { useState, useMemo, useEffect, useCallback } from "react";
import { enLinea } from "./secciones.jsx";
import { construirSesion, hoyISO, INTERVALOS } from "../repaso.js";

/* La pregunta se muestra sin decir de qué ficha viene: reconocer una
   respuesta junto al texto que la explica no es recordarla. La procedencia
   aparece al revelar. */
export default function Repaso({ preguntas, repaso, estudiados, calificar, volver, irAFicha }) {
  const hoy = hoyISO();
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hechas, setHechas] = useState({ bien: 0, mal: 0 });

  const sesion = useMemo(
    () => construirSesion({ preguntas, repaso, estudiados, hoy }),
    // La cola se fija al montar: responder no debe reordenar lo que queda.
    [preguntas, estudiados, hoy] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const actual = sesion.cola[i];

  const responder = useCallback(
    (acierto) => {
      if (!actual) return;
      calificar(actual.id, acierto);
      setHechas((h) => ({ bien: h.bien + (acierto ? 1 : 0), mal: h.mal + (acierto ? 0 : 1) }));
      setVisible(false);
      setI((n) => n + 1);
    },
    [actual, calificar]
  );

  useEffect(() => {
    const onTecla = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (!actual) return;
      if (!visible && (e.code === "Space" || e.code === "Enter")) {
        e.preventDefault();
        setVisible(true);
      } else if (visible && (e.key === "1" || e.key === "2")) {
        e.preventDefault();
        responder(e.key === "2");
      }
    };
    window.addEventListener("keydown", onTecla);
    return () => window.removeEventListener("keydown", onTecla);
  }, [actual, visible, responder]);

  /* --- Nada que repasar --- */
  if (!sesion.cola.length) {
    const sinEstudiar = !Object.keys(estudiados).length;
    const proxima = Object.values(repaso)
      .map((e) => e.prox)
      .filter((p) => p > hoy)
      .sort()[0];
    return (
      <div className="envoltorio estrecho">
        <p className="eyebrow">Repaso</p>
        <h1 className="titular">Nada pendiente hoy</h1>
        <p className="lede">
          {sinEstudiar
            ? "Marca alguna ficha como estudiada y sus preguntas entrarán automáticamente en el repaso."
            : proxima
            ? `La siguiente pregunta vence el ${proxima}. Si quieres adelantar trabajo, estudia una ficha nueva y sus preguntas se sumarán a la cola.`
            : "No queda nada vencido. Estudia una ficha nueva y sus preguntas se sumarán a la cola."}
        </p>
        <button className="boton" onClick={volver}>Volver al plan</button>
      </div>
    );
  }

  /* --- Sesión terminada --- */
  if (!actual) {
    const total = hechas.bien + hechas.mal;
    return (
      <div className="envoltorio estrecho">
        <p className="eyebrow">Repaso</p>
        <h1 className="titular">Hecho por hoy</h1>
        <p className="lede">
          {total} {total === 1 ? "pregunta" : "preguntas"} · {hechas.bien} acertadas ·{" "}
          {hechas.mal} para volver a ver mañana.
          {sesion.aplazadas > 0 && ` Quedan ${sesion.aplazadas} vencidas para la próxima sesión.`}
        </p>
        <button className="boton" onClick={volver}>Volver al plan</button>
      </div>
    );
  }

  const paso = repaso[actual.id]?.paso;

  return (
    <div className="envoltorio estrecho">
      <div className="repasoCab">
        <p className="eyebrow" style={{ margin: 0 }}>Repaso</p>
        <span className="repasoCuenta">
          {i + 1} <span>de {sesion.cola.length}</span>
        </span>
        <button className="botonMini" onClick={volver}>Dejarlo aquí</button>
      </div>

      <div className="repasoBarra">
        <i style={{ width: `${(i / sesion.cola.length) * 100}%` }} />
      </div>

      <div className="tarjeta">
        <p className="tarjetaEtiq">
          {paso === undefined
            ? "Pregunta nueva"
            : `${repaso[actual.id].vistas === 1 ? "Vista una vez" : `Vista ${repaso[actual.id].vistas} veces`} · intervalo de ${INTERVALOS[paso]} ${INTERVALOS[paso] === 1 ? "día" : "días"}`}
        </p>
        <p className="tarjetaQ">{enLinea(actual.q)}</p>

        {!visible ? (
          <button className="boton" onClick={() => setVisible(true)}>
            Ver respuesta <kbd>espacio</kbd>
          </button>
        ) : (
          <>
            <p className="tarjetaA">{enLinea(actual.a)}</p>
            <p className="tarjetaOrigen">
              Ficha{" "}
              <button className="enlaceFicha" onClick={() => irAFicha(actual.codigo)}>
                {actual.codigo} · {actual.titulo}
              </button>
            </p>
            <div className="repasoBotones">
              <button className="boton" data-secundario="true" onClick={() => responder(false)}>
                No la sabía <kbd>1</kbd>
              </button>
              <button className="boton" onClick={() => responder(true)}>
                La sabía <kbd>2</kbd>
              </button>
            </div>
          </>
        )}
      </div>

      <p className="repasoPie">
        Aciertos hoy: {hechas.bien} · fallos: {hechas.mal}
        {sesion.enReserva > 0 && ` · ${sesion.enReserva} nuevas esperando turno`}
      </p>
    </div>
  );
}
