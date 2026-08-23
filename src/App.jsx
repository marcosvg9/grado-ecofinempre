import React, { useState, useEffect, useCallback } from "react";
import Plan from "./componentes/Plan.jsx";
import Ficha from "./componentes/Ficha.jsx";
import { FICHAS, cargarFicha } from "./datos/fichas/index.js";
import { TEMAS } from "./datos/temario.js";
import { leerProgreso, guardarProgreso, exportarProgreso } from "./almacen.js";

/* Enrutado por hash, sin dependencias: #/ para el plan, #/ficha/5.02 para una ficha. */
function rutaActual() {
  const h = window.location.hash.replace(/^#\/?/, "");
  if (h.startsWith("ficha/")) return { vista: "ficha", codigo: h.slice(6) };
  return { vista: "plan" };
}

export default function App() {
  const [ruta, setRuta] = useState(rutaActual);
  const [estado, setEstado] = useState(() => leerProgreso());
  const [ficha, setFicha] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setRuta(rutaActual());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    guardarProgreso(estado);
  }, [estado]);

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

  const irAFicha = (codigo) => { window.location.hash = `#/ficha/${codigo}`; };
  const volver = () => { window.location.hash = "#/"; };

  const siguiente = ficha
    ? TEMAS[TEMAS.findIndex((t) => t.codigo === ficha.codigo) + 1] || null
    : null;

  return (
    <>
      <nav className="navSuperior">
        <div className="interior">
          <span className="marca">Grado autodidacta</span>
          <button className="navEnlace" data-activo={ruta.vista === "plan"} onClick={volver}>
            Plan
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
          reiniciar={() => setEstado({ estudiados: {}, notas: {} })}
          exportar={() => exportarProgreso(estado)}
        />
      )}

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
