import React, { useState, useMemo, useRef } from "react";
import { BLOQUES, TEMAS, NIVELES } from "../datos/temario.js";
import { FICHAS } from "../datos/fichas/index.js";
import { resumen, hoyISO } from "../repaso.js";

function FilaTema({ tema, estudiado, abrir, mostrarBloque }) {
  const tieneFicha = !!FICHAS[tema.codigo];
  return (
    <button className="filaTema" data-activo={estudiado ? "true" : undefined} onClick={() => abrir(tema)}>
      <span className="barraNivel" style={{ background: NIVELES[tema.n].color }} />
      <span className="marca" data-activo={estudiado ? "true" : undefined}>✓</span>
      <span className="codigo">{tema.codigo}</span>
      <span className="tituloTema">
        {tema.t}
        {tieneFicha && <span className="insignia">Ficha</span>}
        {mostrarBloque && (
          <span style={{ display: "block", fontSize: 12, color: "var(--tinta2)", marginTop: 2 }}>
            {tema.bloqueNombre}
          </span>
        )}
      </span>
    </button>
  );
}

function TarjetaRepaso({ preguntas, repaso, estudiados, irARepaso }) {
  const r = useMemo(() => resumen(preguntas, repaso, estudiados, hoyISO()), [preguntas, repaso, estudiados]);
  const hayAlgo = r.vencidas > 0 || r.nuevas > 0;

  return (
    <div className="tarjetaRepaso" data-activa={hayAlgo ? "true" : undefined}>
      <div className="repasoCifra">
        <strong>{r.vencidas + Math.min(r.nuevas, 10)}</strong>
        <span>preguntas hoy</span>
      </div>
      <p className="repasoDetalle">
        {r.vencidas > 0 && <>{r.vencidas} de repaso</>}
        {r.vencidas > 0 && r.nuevas > 0 && " · "}
        {r.nuevas > 0 && <>{r.nuevas} sin estrenar</>}
        {!hayAlgo && "Nada vencido. Marca fichas como estudiadas para alimentar la cola."}
        {r.enCurso > 0 && (
          <span className="repasoDetalle2">
            {r.enCurso} de {r.total} preguntas en circulación · {r.dominadas} asentadas
          </span>
        )}
      </p>
      <button className="boton" data-secundario={hayAlgo ? undefined : "true"} onClick={irARepaso} disabled={!hayAlgo}>
        {hayAlgo ? "Empezar repaso" : "Sin repaso pendiente"}
      </button>
    </div>
  );
}

export default function Plan({ estudiados, alternar, irAFicha, reiniciar, exportar, importar, preguntas, repaso, irARepaso }) {
  const campoArchivo = useRef(null);
  const [vista, setVista] = useState("bloques");
  const [busqueda, setBusqueda] = useState("");
  const [filtroNivel, setFiltroNivel] = useState(0);
  const [seleccionado, setSeleccionado] = useState(null);

  const total = TEMAS.length;
  const hechos = Object.keys(estudiados).length;

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return TEMAS.filter((tm) => {
      if (filtroNivel && tm.n !== filtroNivel) return false;
      if (!q) return true;
      return (
        tm.t.toLowerCase().includes(q) ||
        tm.k.toLowerCase().includes(q) ||
        tm.b.toLowerCase().includes(q) ||
        tm.bloqueNombre.toLowerCase().includes(q) ||
        tm.codigo.includes(q)
      );
    });
  }, [busqueda, filtroNivel]);

  const visibles = useMemo(() => new Set(filtrados.map((t) => t.codigo)), [filtrados]);
  const conteoNivel = useMemo(() => {
    const m = { 1: 0, 2: 0, 3: 0, 4: 0 };
    TEMAS.forEach((tm) => (m[tm.n] += 1));
    return m;
  }, []);

  const abrir = (tema) => {
    if (FICHAS[tema.codigo]) irAFicha(tema.codigo);
    else setSeleccionado(tema);
  };

  return (
    <div className="envoltorio">
      <p className="eyebrow">{total} temas · {BLOQUES.length} bloques · Cuatro niveles</p>
      <h1 className="titular">
        Economía, Finanzas,
        <br />
        Contabilidad y Empresa
      </h1>
      <p className="lede">
        El temario completo de un grado, desmontado en fichas. Cada celda de la rejilla es un tema;
        cada fila, un bloque. El color indica el nivel: cuanto más oscuro, más tarde conviene
        abordarlo.
      </p>

      <div className="matriz" role="group" aria-label={`Mapa de los ${TEMAS.length} temas`}>
        {BLOQUES.map((bl) => (
          <div className="matrizFila" key={bl.id}>
            <span className="matrizNum">{bl.id}</span>
            {TEMAS.filter((tm) => tm.bloque === bl.id).map((tm) => {
              const on = !!estudiados[tm.codigo];
              const dentro = visibles.has(tm.codigo);
              return (
                <button
                  key={tm.codigo}
                  className="celda"
                  style={{ background: NIVELES[tm.n].color, opacity: dentro ? (on ? 1 : 0.26) : 0.07 }}
                  title={`${tm.codigo} · ${tm.t}`}
                  aria-label={`${tm.codigo}. ${tm.t}. ${on ? "Estudiado" : "Pendiente"}`}
                  onClick={() => abrir(tm)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {preguntas && <TarjetaRepaso preguntas={preguntas} repaso={repaso} estudiados={estudiados} irARepaso={irARepaso} />}

      <div className="barraProgreso">
        <span className="cuenta">
          {hechos}
          <span> / {total} estudiados</span>
        </span>
        <span className="nota">El progreso se guarda en este navegador</span>
        <button className="botonMini" onClick={exportar}>
          Exportar progreso
        </button>
        <button className="botonMini" style={{ marginLeft: 0 }} onClick={() => campoArchivo.current?.click()}>
          Importar progreso
        </button>
        {/* El selector va oculto: el boton de arriba es quien lo abre. Se limpia
            el valor para que elegir dos veces el mismo archivo vuelva a disparar. */}
        <input
          ref={campoArchivo}
          type="file"
          accept="application/json,.json"
          style={{ display: "none" }}
          onChange={(e) => {
            const archivo = e.target.files?.[0];
            e.target.value = "";
            if (archivo) importar(archivo);
          }}
        />
        {hechos > 0 && (
          <button className="botonMini" style={{ marginLeft: 0 }} onClick={reiniciar}>
            Empezar de cero
          </button>
        )}
      </div>

      <div className="controles">
        <button className="pestana" data-activo={vista === "bloques"} onClick={() => setVista("bloques")}>
          Por bloques
        </button>
        <button className="pestana" data-activo={vista === "itinerario"} onClick={() => setVista("itinerario")}>
          Itinerario
        </button>
        <input
          className="buscador"
          placeholder="Buscar tema, idea o fuente…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="chips">
        <button className="chip" data-activo={filtroNivel === 0} onClick={() => setFiltroNivel(0)}>
          Todos los niveles
        </button>
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            className="chip"
            data-activo={filtroNivel === n}
            onClick={() => setFiltroNivel(filtroNivel === n ? 0 : n)}
          >
            <span className="punto" style={{ background: NIVELES[n].color }} />
            {NIVELES[n].nombre} · {conteoNivel[n]}
          </button>
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className="vacio">Ningún tema coincide. Prueba con otra palabra o quita el filtro de nivel.</p>
      )}

      {vista === "bloques" &&
        BLOQUES.map((bl) => {
          const lista = filtrados.filter((tm) => tm.bloque === bl.id);
          if (!lista.length) return null;
          const hechosBl = lista.filter((tm) => estudiados[tm.codigo]).length;
          return (
            <section className="seccion" key={bl.id}>
              <div className="seccionCab">
                <span className="seccionNum">{String(bl.id).padStart(2, "0")}</span>
                <h2 className="seccionTit">{bl.nombre}</h2>
                <span className="seccionCont">
                  {hechosBl}/{lista.length}
                </span>
              </div>
              <p className="seccionDesc">{bl.resumen}</p>
              {lista.map((tm) => (
                <FilaTema key={tm.codigo} tema={tm} estudiado={!!estudiados[tm.codigo]} abrir={abrir} />
              ))}
            </section>
          );
        })}

      {vista === "itinerario" &&
        [1, 2, 3, 4].map((n) => {
          const lista = filtrados.filter((tm) => tm.n === n);
          if (!lista.length) return null;
          const hechosN = lista.filter((tm) => estudiados[tm.codigo]).length;
          return (
            <section className="seccion" key={n}>
              <div className="seccionCab">
                <span className="seccionNum" style={{ color: NIVELES[n].color }}>
                  ■
                </span>
                <h2 className="seccionTit">
                  Nivel {n} · {NIVELES[n].nombre}
                </h2>
                <span className="seccionCont">
                  {hechosN}/{lista.length}
                </span>
              </div>
              <p className="seccionDesc">{NIVELES[n].desc}</p>
              {lista.map((tm) => (
                <FilaTema key={tm.codigo} tema={tm} estudiado={!!estudiados[tm.codigo]} abrir={abrir} mostrarBloque />
              ))}
            </section>
          );
        })}

      {seleccionado && (
        <div className="fondoPanel" onClick={() => setSeleccionado(null)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={() => setSeleccionado(null)} aria-label="Cerrar">
              ×
            </button>
            <span className="mono" style={{ fontSize: 12, letterSpacing: ".1em", color: "var(--tinta2)" }}>
              {seleccionado.codigo} · {NIVELES[seleccionado.n].nombre.toUpperCase()}
            </span>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, lineHeight: 1.2, margin: "8px 0 16px" }}>
              {seleccionado.t}
            </h3>
            <p className="fuenteTexto">{seleccionado.bloqueNombre}</p>

            <p className="etiqueta">La idea que hay que retener</p>
            <p className="idea">{seleccionado.k}</p>

            <p className="etiqueta">Por dónde empezar</p>
            <p className="fuenteTexto">{seleccionado.b}</p>

            <p className="etiqueta">Ficha completa</p>
            <p className="fuenteTexto">Todavía no está escrita. De momento, usa la idea y la fuente de arriba.</p>

            <button
              className="boton"
              style={{ width: "100%", marginTop: 26 }}
              data-secundario={estudiados[seleccionado.codigo] ? "true" : undefined}
              onClick={() => alternar(seleccionado.codigo)}
            >
              {estudiados[seleccionado.codigo] ? "Marcar como pendiente" : "Marcar como estudiado"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
