import React, { useState, useMemo } from "react";
import { PRERREQUISITOS } from "../datos/grafo.js";
import { analizarRuta, caminoHasta } from "../ruta.js";
import { TEMAS, NIVELES } from "../datos/temario.js";

const TITULO = {};
const NIVEL = {};
const BLOQUE = {};
TEMAS.forEach((t) => { TITULO[t.codigo] = t.t; NIVEL[t.codigo] = t.n; BLOQUE[t.codigo] = t.bloqueNombre; });

const CRITERIOS = [
  ["progresion", "Progresión", "Por nivel y orden del temario: agota lo elemental antes de subir."],
  ["desbloqueo", "Desbloqueo", "Primero lo que más fichas abre, aunque salte de bloque."],
];

/* Una ficha de la lista: código, título, y qué abre o qué le falta. */
function Fila({ codigo, abre, faltan, estudiada, irAFicha, alternar, onRuta }) {
  return (
    <li className="rutaFila">
      <button
        className="rutaCasilla"
        data-hecha={estudiada}
        title={estudiada ? "Marcar como no estudiada" : "Marcar como estudiada"}
        onClick={() => alternar(codigo)}
      >
        {estudiada ? "✓" : ""}
      </button>
      <button className="rutaItem" onClick={() => irAFicha(codigo)}>
        <span className="rutaCod">{codigo}</span>
        <span className="rutaCuerpo">
          <span className="rutaTitulo">{TITULO[codigo]}</span>
          <span className="rutaMeta">
            {BLOQUE[codigo]} · {NIVELES[NIVEL[codigo]]?.nombre || `Nivel ${NIVEL[codigo]}`}
            {abre > 0 && <> · abre {abre} ficha{abre === 1 ? "" : "s"}</>}
          </span>
        </span>
      </button>
      {faltan && (
        <button className="rutaPista" onClick={() => onRuta(codigo)} title="Ver qué falta para llegar">
          faltan {faltan}
        </button>
      )}
    </li>
  );
}

export default function Ruta({ estudiados, irAFicha, alternar }) {
  const [modo, setModo] = useState("progresion");
  const [verBloqueadas, setVerBloqueadas] = useState(false);
  const [destino, setDestino] = useState(null);

  const r = useMemo(
    () => analizarRuta(PRERREQUISITOS, estudiados, (c) => NIVEL[c], modo),
    [estudiados, modo]
  );

  const camino = useMemo(
    () => (destino ? caminoHasta(r.efectivo, r.orden, estudiados, destino) : null),
    [destino, r, estudiados]
  );

  const pct = Math.round((r.estudiadas / r.total) * 100);

  return (
    <div className="envoltorio estrecho">
      <p className="eyebrow">{r.estudiadas} de {r.total} · Orden por prerrequisitos</p>
      <h1 className="titular">Ruta de estudio</h1>
      <p className="lede">
        Cada ficha declara de qué otras depende. Con eso se ordenan las {TEMAS.length}: aquí están las que
        ya puedes abordar porque tienes hechos sus prerrequisitos, y las que todavía no.
      </p>

      <div className="rutaBarra" role="img" aria-label={`${pct}% estudiado`}>
        <i style={{ width: `${pct}%` }} />
      </div>
      <p className="rutaResumen">
        <b>{r.estudiadas}</b> de {r.total} estudiadas · <b>{r.disponibles.length}</b> disponibles
        ahora · {r.bloqueadas.length} bloqueadas
      </p>

      {destino && camino && (
        <div className="rutaCamino">
          <p className="rutaCaminoTitulo">
            Para llegar a <b>{destino} {TITULO[destino]}</b> faltan {camino.length} fichas, en este orden:
            <button className="rutaCerrar" onClick={() => setDestino(null)}>cerrar</button>
          </p>
          <ol className="rutaCaminoLista">
            {camino.map((c) => (
              <li key={c}>
                <button onClick={() => irAFicha(c)}>
                  <span className="rutaCod">{c}</span> {TITULO[c]}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="rutaCriterios">
        {CRITERIOS.map(([id, nombre, ayuda]) => (
          <button
            className="chip"
            key={id}
            data-activo={modo === id}
            title={ayuda}
            onClick={() => setModo(id)}
          >
            {nombre}
          </button>
        ))}
      </div>

      {r.disponibles.length === 0 ? (
        <p className="rutaAviso">
          {r.estudiadas === r.total
            ? `Están las ${r.total}. No queda ruta que trazar.`
            : "Nada disponible: desmarca alguna ficha para volver a abrir camino."}
        </p>
      ) : (
        <>
          <h2 className="rutaSeccion">Puedes estudiarlas ya</h2>
          <ol className="rutaLista">
            {r.disponibles.map((d) => (
              <Fila
                key={d.codigo}
                codigo={d.codigo}
                abre={d.abre}
                estudiada={false}
                irAFicha={irAFicha}
                alternar={alternar}
              />
            ))}
          </ol>
        </>
      )}

      {r.bloqueadas.length > 0 && (
        <>
          <h2 className="rutaSeccion">
            Bloqueadas
            <button className="rutaVer" onClick={() => setVerBloqueadas((v) => !v)}>
              {verBloqueadas ? "ocultar" : `ver las ${r.bloqueadas.length}`}
            </button>
          </h2>
          {verBloqueadas && (
            <ol className="rutaLista">
              {r.bloqueadas.map((b) => (
                <Fila
                  key={b.codigo}
                  codigo={b.codigo}
                  abre={b.abre}
                  faltan={b.faltan.length}
                  estudiada={false}
                  irAFicha={irAFicha}
                  alternar={alternar}
                  onRuta={setDestino}
                />
              ))}
            </ol>
          )}
        </>
      )}

      {r.blandas.length > 0 && (
        <p className="rutaPie">
          El grafo tiene {r.blandas.length} dependencias circulares, inevitables en la materia:{" "}
          {r.blandas.map(([a, b], i) => (
            <React.Fragment key={a + b}>
              {i > 0 && ", "}
              <b>{a}</b> dice necesitar <b>{b}</b>, que a su vez depende de ella
            </React.Fragment>
          ))}
          . La ruta rompe el empate a favor del temario, así que esas aristas no cuentan para
          decidir qué está disponible.
        </p>
      )}
    </div>
  );
}
