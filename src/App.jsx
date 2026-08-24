import React, { useState, useEffect, useCallback } from "react";
import Plan from "./componentes/Plan.jsx";
import Ficha from "./componentes/Ficha.jsx";
import Repaso from "./componentes/Repaso.jsx";
import Buscador from "./componentes/Buscador.jsx";
import { FICHAS, cargarFicha } from "./datos/fichas/index.js";
import { TEMAS } from "./datos/temario.js";
import { leerProgreso, guardarProgreso, exportarProgreso } from "./almacen.js";
import { programar, hoyISO, contarVencidas } from "./repaso.js";

/* Enrutado por hash, sin dependencias: #/ para el plan, #/ficha/5.02 para una
   ficha, #/repaso para el repaso espaciado y #/buscar para la búsqueda. */
function rutaActual() {
  const h = window.location.hash.replace(/^#\/?/, "");
  if (h.startsWith("ficha/")) return { vista: "ficha", codigo: h.slice(6) };
  if (h === "repaso") return { vista: "repaso" };
  if (h.startsWith("buscar")) return { vista: "buscar", q: decodeURIComponent(h.slice(7)) };
  return { vista: "plan" };
}

export default function App() {
  const [ruta, setRuta] = useState(rutaActual);
  const [estado, setEstado] = useState(() => leerProgreso());
  const [ficha, setFicha] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [preguntas, setPreguntas] = useState(null);
  const [indiceBusqueda, setIndiceBusqueda] = useState(null);

  /* El índice de preguntas pesa bastante y no hace falta para leer fichas:
     se trae en un chunk aparte cuando el navegador ya ha pintado. */
  useEffect(() => {
    let vivo = true;
    import("./datos/preguntas.js").then((m) => vivo && setPreguntas(m.default));
    return () => { vivo = false; };
  }, []);

  useEffect(() => {
    const onHash = () => {
      setRuta(rutaActual());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  /* El índice de búsqueda pesa más que el de preguntas y no hace falta para
     nada más: se trae la primera vez que se entra en la búsqueda. */
  useEffect(() => {
    if (ruta.vista !== "buscar" || indiceBusqueda) return;
    let vivo = true;
    import("./datos/busqueda.js").then((m) => vivo && setIndiceBusqueda(m));
    return () => { vivo = false; };
  }, [ruta.vista, indiceBusqueda]);

  useEffect(() => {
    guardarProgreso(estado);
  }, [estado]);

  /* Barra inclinada para buscar desde cualquier sitio, salvo si se está
     escribiendo en un campo. */
  useEffect(() => {
    const onTecla = (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      e.preventDefault();
      window.location.hash = "#/buscar";
    };
    window.addEventListener("keydown", onTecla);
    return () => window.removeEventListener("keydown", onTecla);
  }, []);

  useEffect(() => {
    if (ruta.vista === "ficha" && FICHAS[ruta.codigo]) {
      setCargando(true);
      cargarFicha(ruta.codigo).then((f) => {
        setFicha(f);
        setCargando(false);
      });
    } else {
      setFicha(null);
    }
  }, [ruta]);

  const alternar = useCallback((codigo) => {
    setEstado((prev) => {
      const estudiados = { ...prev.estudiados };
      if (estudiados[codigo]) delete estudiados[codigo];
      else estudiados[codigo] = new Date().toISOString().slice(0, 10);
      return { ...prev, estudiados };
    });
  }, []);

  const calificar = useCallback((id, acierto) => {
    const hoy = hoyISO();
    setEstado((prev) => ({
      ...prev,
      repaso: { ...prev.repaso, [id]: programar(prev.repaso[id], acierto, hoy) },
    }));
  }, []);

  const irAFicha = (codigo) => { window.location.hash = `#/ficha/${codigo}`; };
  const irARepaso = () => { window.location.hash = "#/repaso"; };
  const irABuscar = () => { window.location.hash = "#/buscar"; };
  const volver = () => { window.location.hash = "#/"; };

  const siguiente = ficha
    ? TEMAS[TEMAS.findIndex((t) => t.codigo === ficha.codigo) + 1] || null
    : null;

  const vencidas = contarVencidas(estado.repaso, hoyISO());

  return (
    <>
      <nav className="navSuperior">
        <div className="interior">
          <span className="marca">Grado autodidacta</span>
          <button className="navEnlace" data-activo={ruta.vista === "plan"} onClick={volver}>
            Plan
          </button>
          <button className="navEnlace" data-activo={ruta.vista === "repaso"} onClick={irARepaso}>
            Repaso
            {vencidas > 0 && <i className="insigniaNav">{vencidas}</i>}
          </button>
          <button className="navEnlace" data-activo={ruta.vista === "buscar"} onClick={irABuscar}>
            Buscar
            <kbd className="navTecla">/</kbd>
          </button>
          <span className="navDerecha">
            <span className="navEnlace" style={{ cursor: "default" }}>
              {Object.keys(estado.estudiados).length} / {TEMAS.length}
            </span>
          </span>
        </div>
      </nav>

      {ruta.vista === "plan" && (
        <Plan
          estudiados={estado.estudiados}
          alternar={alternar}
          irAFicha={irAFicha}
          reiniciar={() => setEstado({ estudiados: {}, notas: {}, repaso: {} })}
          exportar={() => exportarProgreso(estado)}
          preguntas={preguntas}
          repaso={estado.repaso}
          irARepaso={irARepaso}
        />
      )}

      {ruta.vista === "buscar" && (
        <main className="interior contenido">
          <Buscador indiceBusqueda={indiceBusqueda} irAFicha={irAFicha} inicial={ruta.q || ""} />
        </main>
      )}

      {ruta.vista === "repaso" &&
        (preguntas ? (
          <Repaso
            preguntas={preguntas}
            repaso={estado.repaso}
            estudiados={estado.estudiados}
            calificar={calificar}
            volver={volver}
            irAFicha={irAFicha}
          />
        ) : (
          <div className="envoltorio estrecho">
            <p className="vacio">Cargando preguntas…</p>
          </div>
        ))}

      {ruta.vista === "ficha" &&
        (ficha ? (
          <Ficha
            ficha={ficha}
            estudiado={!!estado.estudiados[ficha.codigo]}
            alternar={alternar}
            volver={volver}
            siguiente={siguiente}
            irA={irAFicha}
          />
        ) : (
          <div className="envoltorio estrecho">
            <p className="vacio">
              No hay ficha escrita para «{ruta.codigo}».{" "}
              <button className="navEnlace" onClick={volver}>Volver al plan</button>
            </p>
          </div>
        ))}
    </>
  );
}
