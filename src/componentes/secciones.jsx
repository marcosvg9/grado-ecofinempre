import React, { useState, useMemo } from "react";
import { CODIGOS_CON_FICHA } from "../datos/fichas/index.js";
import { TEMAS } from "../datos/temario.js";

/* Titulo de cada ficha, para el tooltip de las referencias cruzadas. */
const TITULOS = Object.fromEntries(TEMAS.map((t) => [t.codigo, `${t.codigo} · ${t.t}`]));

/* ------------------------------------------------------------------
   Renderizadores de los bloques de contenido de una ficha.
   Cada ficha es un objeto de datos; aqui vive todo el JSX.
   Anadir una ficha nueva = escribir datos, no componentes.
------------------------------------------------------------------- */

const EUR = (v) =>
  new Intl.NumberFormat("es-ES", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(v) + " €";

/* Codigos tipo 13.05 que aparecen en el texto y tienen ficha escrita se
   convierten en enlaces. El \b final impide que «12.000 €» o «1.900» piquen:
   tras los dos digitos no puede venir otro. */
const RE_REF = /(\b\d{1,2}\.\d{2}\b)/g;

function conEnlaces(texto, base) {
  if (!texto.includes(".")) return texto;
  const partes = texto.split(RE_REF);
  if (partes.length === 1) return texto;
  return partes.map((p, i) =>
    CODIGOS_CON_FICHA.has(p) ? (
      <a className="refFicha" href={`#/ficha/${p}`} key={`${base}r${i}`} title={TITULOS[p] || ""}>
        {p}
      </a>
    ) : (
      <React.Fragment key={`${base}r${i}`}>{p}</React.Fragment>
    )
  );
}

/* Formato en linea minimo: **negrita**, *cursiva* y referencias a fichas. */
export function enLinea(texto) {
  if (typeof texto !== "string") return texto;
  const partes = texto.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return partes.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) return <b key={i}>{conEnlaces(p.slice(2, -2), i)}</b>;
    if (p.startsWith("*") && p.endsWith("*") && p.length > 2) return <i key={i}>{conEnlaces(p.slice(1, -1), i)}</i>;
    return <React.Fragment key={i}>{conEnlaces(p, i)}</React.Fragment>;
  });
}

/* --- Parrafos --- */
function Parrafos({ items }) {
  return items.map((t, i) => (
    <p className="parrafo" key={i}>
      {enLinea(t)}
    </p>
  ));
}

/* --- Rejilla de definiciones (brujula de cuentas, formulario, etc.) --- */
function Rejilla({ cabecera, filas, modo = "tres", nota }) {
  return (
    <>
      <div className="rejilla">
        {cabecera && (
          <div className={`rejillaFila${modo === "dos" ? " dos" : ""}`}>
            {cabecera.map((c, i) => (
              <div className="rejillaCab" key={i} style={i > 0 ? { textAlign: "right" } : undefined}>
                {c}
              </div>
            ))}
          </div>
        )}
        {filas.map((f, i) => (
          <div className={`rejillaFila${modo === "dos" ? " dos" : ""}`} key={i}>
            <div className="rejillaNom">
              {f.nom}
              {f.sub && <span className="rejillaSub">{enLinea(f.sub)}</span>}
            </div>
            {f.cols.map((c, j) => (
              <div
                key={j}
                className={modo === "dos" ? "dato" : j === 0 ? "aumenta" : "disminuye"}
                style={
                  modo === "dos"
                    ? { fontSize: 15, display: "flex", alignItems: "center" }
                    : { textAlign: "right" }
                }
              >
                {c}
              </div>
            ))}
          </div>
        ))}
      </div>
      {nota && <p className="notaTabla">{enLinea(nota)}</p>}
    </>
  );
}

/* --- Pasos numerados --- */
function Pasos({ items }) {
  return (
    <div className="pasos">
      {items.map(([t, d], i) => (
        <div className="paso" key={i}>
          <span className="pasoNum">{i + 1}</span>
          <div>
            <div className="pasoTit">{t}</div>
            <div className="pasoDesc">{enLinea(d)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* --- Tabla generica --- */
function Tabla({ cabecera, filas, nota }) {
  return (
    <>
      <table className="tabla">
        {cabecera && (
          <thead>
            <tr>
              {cabecera.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {filas.map((f, i) => {
            const celdas = Array.isArray(f) ? f : f.celdas;
            const clase = Array.isArray(f) ? "" : f.clase || "";
            return (
              <tr key={i} className={clase}>
                {celdas.map((c, j) => (
                  <td key={j} className={j > 0 ? "dato" : ""}>
                    {enLinea(String(c))}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {nota && <p className="notaTabla">{enLinea(nota)}</p>}
    </>
  );
}

/* --- Acordeon (errores tipicos) --- */
function Acordeon({ items }) {
  const [abierta, setAbierta] = useState(null);
  return items.map((e, i) => (
    <div className="error" key={i}>
      <button className="errorBtn" onClick={() => setAbierta(abierta === i ? null : i)}>
        <span className="errorIco">{abierta === i ? "−" : "+"}</span>
        <span className="errorT">{enLinea(e.t)}</span>
      </button>
      {abierta === i && <p className="errorD">{enLinea(e.d)}</p>}
    </div>
  ));
}

/* --- Autoevaluacion --- */
function Preguntas({ items }) {
  const [vistas, setVistas] = useState({});
  return items.map((p, i) => (
    <div className="pregunta" key={i}>
      <p className="preguntaT">{enLinea(p.q)}</p>
      {vistas[i] ? (
        <p className="respuesta">{enLinea(p.a)}</p>
      ) : (
        <button className="preguntaBtn" onClick={() => setVistas((v) => ({ ...v, [i]: true }))}>
          Ver respuesta
        </button>
      )}
    </div>
  ));
}

/* --- Bloque destacado (puente con contabilidad nacional, avisos) --- */
function Destacado({ parrafos = [], lista = [], cierre }) {
  return (
    <div className="destacado">
      {parrafos.map((t, i) => (
        <p className="parrafo" key={i} style={{ marginBottom: 12 }}>
          {enLinea(t)}
        </p>
      ))}
      {lista.length > 0 && (
        <ul className="lista">
          {lista.map((t, i) => (
            <li key={i}>{enLinea(t)}</li>
          ))}
        </ul>
      )}
      {cierre && (
        <p className="parrafo" style={{ marginTop: 12, marginBottom: 0, fontSize: 14.5, color: "var(--tinta2)" }}>
          {enLinea(cierre)}
        </p>
      )}
    </div>
  );
}

/* --- Fuentes --- */
function Fuentes({ items }) {
  return items.map((f, i) => (
    <p className="fuente" key={i}>
      <b>{f.ref}</b>
      {f.nota ? ` — ${f.nota}` : ""}
    </p>
  ));
}


/* --- Grafico ------------------------------------------------------
   Diagrama cartesiano dirigido por datos: la ficha describe ejes,
   dominio, curvas y anotaciones, y aqui se traduce a SVG. Sin
   dependencias y sin scripts: escala con el ancho disponible.

   Colores admitidos: acento, tinta, tinta2, alerta, n1..n4, linea.
   Trazos: continuo (por defecto), discontinuo, punteado.
------------------------------------------------------------------- */
const COLOR = (c) => `var(--${c && /^[a-z0-9]+$/.test(c) ? c : "acento"})`;
const TRAZO = { discontinuo: "7 5", punteado: "2 4" };

function Grafico({
  ejes = {},
  dominio,
  marcasX,
  marcasY,
  areas = [],
  series = [],
  puntos = [],
  notas = [],
  alto = 380,
  nota,
}) {
  const W = 640;
  const H = alto;
  const ml = 54, mr = 84, mt = 20, mb = 46;

  /* Dominio: el declarado o el que se deduce de todo lo dibujado. */
  const todos = [
    ...series.flatMap((s) => s.puntos),
    ...areas.flatMap((a) => a.puntos),
    ...puntos.map((p) => [p.x, p.y]),
  ];
  const rango = (i, dado) => {
    if (dado) return dado;
    const vs = todos.map((p) => p[i]);
    return [Math.min(0, ...vs), Math.max(...vs)];
  };
  const [x0, x1] = rango(0, dominio && dominio.x);
  const [y0, y1] = rango(1, dominio && dominio.y);

  const sx = (x) => ml + ((x - x0) / (x1 - x0 || 1)) * (W - ml - mr);
  const sy = (y) => H - mb - ((y - y0) / (y1 - y0 || 1)) * (H - mt - mb);
  const camino = (ps) => ps.map((p) => `${sx(p[0])},${sy(p[1])}`).join(" ");

  const tx = marcasX || [x0, x1];
  const ty = marcasY || [y0, y1];

  const etiquetaAria = [ejes.y, "frente a", ejes.x, series.map((s) => s.nombre).join(", ")]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <figure className="grafico">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={etiquetaAria} preserveAspectRatio="xMidYMid meet">
          {/* Una punta de flecha por color usado: el marcador no hereda
              el trazo de forma fiable en todos los navegadores. */}
          <defs>
            {[...new Set(series.filter((s) => s.flecha).map((s) => s.color || "acento"))].map((c) => (
              <marker key={c} id={`f-${c}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={COLOR(c)} />
              </marker>
            ))}
          </defs>
          {/* Areas sombreadas, debajo de todo */}
          {areas.map((a, i) => (
            <g key={i}>
              <polygon points={camino(a.puntos)} fill={COLOR(a.color || "alerta")} opacity=".15" />
              {a.etiqueta && (
                <text
                  className="gEtiqArea"
                  x={a.puntos.reduce((s, p) => s + sx(p[0]), 0) / a.puntos.length}
                  y={a.puntos.reduce((s, p) => s + sy(p[1]), 0) / a.puntos.length}
                  textAnchor="middle"
                >
                  {a.etiqueta}
                </text>
              )}
            </g>
          ))}

          {/* Marcas de los ejes */}
          {tx.map((v, i) => (
            <g key={"x" + i}>
              <line className="gMarca" x1={sx(v)} y1={sy(y0)} x2={sx(v)} y2={sy(y0) + 5} />
              <text className="gNum" x={sx(v)} y={sy(y0) + 18} textAnchor="middle">{v}</text>
            </g>
          ))}
          {ty.map((v, i) => (
            <g key={"y" + i}>
              <line className="gMarca" x1={sx(x0) - 5} y1={sy(v)} x2={sx(x0)} y2={sy(v)} />
              <text className="gNum" x={sx(x0) - 9} y={sy(v) + 4} textAnchor="end">{v}</text>
            </g>
          ))}

          {/* Guias punteadas hasta los ejes */}
          {puntos.filter((p) => p.guias !== false).map((p, i) => (
            <g key={"g" + i}>
              <line className="gGuia" x1={sx(x0)} y1={sy(p.y)} x2={sx(p.x)} y2={sy(p.y)} />
              <line className="gGuia" x1={sx(p.x)} y1={sy(y0)} x2={sx(p.x)} y2={sy(p.y)} />
            </g>
          ))}

          {/* Ejes */}
          <line className="gEje" x1={sx(x0)} y1={sy(y0)} x2={W - mr + 14} y2={sy(y0)} />
          <line className="gEje" x1={sx(x0)} y1={sy(y0)} x2={sx(x0)} y2={mt - 6} />
          {ejes.x && <text className="gEje2" x={W - 2} y={sy(y0) + 15} textAnchor="end">{ejes.x}</text>}
          {ejes.y && <text className="gEje2" x={2} y={mt - 12}>{ejes.y}</text>}

          {/* Curvas */}
          {series.map((s, i) => {
            const ps = s.puntos;
            const fin = ps[ps.length - 1];
            /* La etiqueta va al final de la curva, salvo que la ficha
               indique otra posicion en coordenadas de datos. Si el
               final cae sobre el eje horizontal se separa de el. */
            const et = s.etiquetaEn || fin;
            const dentro = sx(et[0]) > W - mr - 4;
            const pegadaAlEje = Math.abs(sy(et[1]) - sy(y0)) < 12;
            const ex = dentro ? sx(et[0]) - 6 : sx(et[0]) + 7;
            const ey = sy(et[1]) + (pegadaAlEje ? -11 : 4);
            return (
              <g key={i}>
                <polyline
                  points={camino(ps)}
                  fill="none"
                  stroke={COLOR(s.color)}
                  strokeWidth={s.grosor || 2}
                  strokeDasharray={TRAZO[s.trazo]}
                  strokeLinejoin="round"
                  markerEnd={s.flecha ? `url(#f-${s.color || "acento"})` : undefined}
                />
                {s.nombre && (
                  <text className="gSerie" x={ex} y={ey} textAnchor={dentro ? "end" : "start"} fill={COLOR(s.color)}>
                    {s.nombre}
                  </text>
                )}
              </g>
            );
          })}

          {/* Puntos senalados */}
          {puntos.map((p, i) => (
            <g key={"p" + i}>
              <circle cx={sx(p.x)} cy={sy(p.y)} r="4.5" fill="var(--papel2)" stroke="var(--tinta)" strokeWidth="2" />
              {p.etiqueta && (
                <text className="gPunto" x={sx(p.x) + 9} y={sy(p.y) - 8}>{p.etiqueta}</text>
              )}
            </g>
          ))}

          {/* Anotaciones libres, en coordenadas de datos */}
          {notas.map((n, i) => (
            <text
              key={"n" + i}
              className="gNota"
              x={sx(n.x)}
              y={sy(n.y)}
              textAnchor={n.ancla || "middle"}
            >
              {n.texto}
            </text>
          ))}
        </svg>
      </figure>
      {nota && <p className="notaTabla">{enLinea(nota)}</p>}
    </>
  );
}

/* --- Simulador de libro diario ------------------------------------
   Recibe el catalogo de cuentas y la lista de operaciones. Calcula
   saldos, comprueba el cuadre y deriva balance y resultado.
------------------------------------------------------------------- */
function Diario({ cuentas, operaciones, cierre }) {
  const [paso, setPaso] = useState(0);

  const { saldos, sumaDebe, sumaHaber } = useMemo(() => {
    const s = {};
    let d = 0;
    let h = 0;
    operaciones.slice(0, paso).forEach((op) =>
      op.lineas.forEach(([c, deb, hab]) => {
        s[c] = (s[c] || 0) + deb - hab;
        d += deb;
        h += hab;
      })
    );
    return { saldos: s, sumaDebe: d, sumaHaber: h };
  }, [paso, operaciones]);

  const suma = (tipos) =>
    Object.entries(saldos)
      .filter(([c]) => tipos.includes(cuentas[c].tipo))
      .reduce((a, [, v]) => a + v, 0);

  const activo = suma(["A", "AC"]);
  const pasivo = -suma(["P"]);
  const capital = -suma(["PN"]);
  const gastos = suma(["G"]);
  const ingresos = -suma(["I"]);
  const resultado = ingresos - gastos;
  const cuadra = Math.abs(activo - (pasivo + capital + resultado)) < 0.001;
  const completo = paso === operaciones.length;

  return (
    <>
      <div className="sim">
        <div className="simCab">
          <span className="simTit">Libro diario</span>
          <span className="simProgreso">
            {paso} / {operaciones.length} operaciones
          </span>
        </div>

        {paso === 0 && (
          <div className="operacion">
            <p className="opTexto" style={{ color: "var(--tinta2)", margin: 0 }}>
              Aún no hay nada registrado. Empieza por la primera operación.
            </p>
          </div>
        )}

        {operaciones.slice(0, paso).map((op, i) => (
          <div className="operacion" key={i}>
            <span className="opFecha">
              Asiento {i + 1} · {op.fecha}
              {op.ajuste && <span className="badge">Ajuste de cierre</span>}
            </span>
            <p className="opTexto">{enLinea(op.texto)}</p>
            {op.porque && <p className="opPorque">{enLinea(op.porque)}</p>}
            <table className="tabla" style={{ marginTop: 12 }}>
              <thead>
                <tr>
                  <th>Cuenta</th>
                  <th>Debe</th>
                  <th>Haber</th>
                </tr>
              </thead>
              <tbody>
                {op.lineas.map(([c, d, h]) => (
                  <tr key={c}>
                    <td>
                      <span className="numCuenta">{c}</span>
                      {cuentas[c].n}
                    </td>
                    <td className="dato">{d ? EUR(d) : ""}</td>
                    <td className="dato">{h ? EUR(h) : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="balanza">
          <div className="balanzaLado">
            <div className="balanzaEtiq">Suma del debe</div>
            <div className="balanzaVal">{EUR(sumaDebe)}</div>
          </div>
          <div className="balanzaIgual">=</div>
          <div className="balanzaLado">
            <div className="balanzaEtiq">Suma del haber</div>
            <div className="balanzaVal">{EUR(sumaHaber)}</div>
          </div>
        </div>

        <div className="botonera">
          <button className="boton" onClick={() => setPaso((p) => Math.min(p + 1, operaciones.length))} disabled={completo}>
            {completo ? "Ejercicio cerrado" : `Registrar asiento ${paso + 1}`}
          </button>
          <button className="boton" data-secundario="true" onClick={() => setPaso(0)} disabled={paso === 0}>
            Reiniciar
          </button>
          <button className="boton" data-secundario="true" onClick={() => setPaso(operaciones.length)} disabled={completo}>
            Registrar todo
          </button>
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 17, margin: "28px 0 10px" }}>Libro mayor</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th>Cuenta</th>
            <th>Saldo deudor</th>
            <th>Saldo acreedor</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cuentas).map((c) => {
            const s = saldos[c] || 0;
            return (
              <tr key={c} className={s === 0 ? "apagada" : ""}>
                <td>
                  <span className="numCuenta">{c}</span>
                  {cuentas[c].n}
                </td>
                <td className="dato">{s > 0 ? EUR(s) : ""}</td>
                <td className="dato">{s < 0 ? EUR(-s) : ""}</td>
              </tr>
            );
          })}
          <tr className="total">
            <td>Total</td>
            <td className="dato">{EUR(Object.values(saldos).filter((v) => v > 0).reduce((a, b) => a + b, 0))}</td>
            <td className="dato">{EUR(-Object.values(saldos).filter((v) => v < 0).reduce((a, b) => a + b, 0))}</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 17, margin: "28px 0 10px" }}>
        Lo que sale del registro
      </h3>
      <table className="tabla">
        <tbody>
          <tr><td>Activo total</td><td className="dato">{EUR(activo)}</td></tr>
          <tr><td>Pasivo</td><td className="dato">{EUR(pasivo)}</td></tr>
          <tr><td>Capital aportado</td><td className="dato">{EUR(capital)}</td></tr>
          <tr><td>Ingresos del ejercicio</td><td className="dato">{EUR(ingresos)}</td></tr>
          <tr><td>Gastos del ejercicio</td><td className="dato">{EUR(gastos)}</td></tr>
          <tr className="total"><td>Resultado del ejercicio</td><td className="dato">{EUR(resultado)}</td></tr>
        </tbody>
      </table>
      <p className="parrafo" style={{ marginTop: 12, fontSize: 14, color: cuadra ? "var(--acento)" : "var(--alerta)" }}>
        {cuadra
          ? `Comprobación: ${EUR(activo)} de activo = ${EUR(pasivo)} de pasivo + ${EUR(capital)} de capital + ${EUR(resultado)} de resultado.`
          : "La ecuación no cuadra: revisa el registro."}
      </p>
      {completo && cierre && <p className="parrafo" style={{ marginTop: 14 }}>{enLinea(cierre)}</p>}
    </>
  );
}

/* --- Despachador --------------------------------------------------- */
const REGISTRO = {
  parrafos: Parrafos,
  rejilla: Rejilla,
  pasos: Pasos,
  tabla: Tabla,
  acordeon: Acordeon,
  preguntas: Preguntas,
  destacado: Destacado,
  fuentes: Fuentes,
  grafico: Grafico,
  diario: Diario,
};

export default function BloqueContenido({ bloque }) {
  const Comp = REGISTRO[bloque.tipo];
  if (!Comp) return <p className="vacio">Tipo de bloque desconocido: {bloque.tipo}</p>;
  const { tipo, ...props } = bloque;
  return <Comp {...props} />;
}
