/* Repetición espaciada sobre las preguntas de «Compruébate».

   La idea es simple: cada pregunta acertada se aplaza más que la anterior,
   y cada fallo devuelve al principio. Los intervalos crecen deprisa porque
   el objetivo no es machacar sino sostener: una pregunta que se sabe seis
   veces seguidas ya no necesita verse en medio año.

   Todo son funciones puras sobre el estado; ningún efecto ni almacenamiento. */

export const INTERVALOS = [1, 3, 7, 21, 60, 180];
export const MAX_NUEVAS = 10;
export const MAX_SESION = 40;

export function hoyISO(fecha = new Date()) {
  return fecha.toISOString().slice(0, 10);
}

export function sumarDias(iso, dias) {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
}

/* Calcula la siguiente cita de una pregunta. `entrada` es undefined la
   primera vez que se responde. */
export function programar(entrada, acierto, hoy) {
  /* Acertar a la primera vale un intervalo real (3 días), no el mismo que
     fallar. Fallar siempre devuelve al escalón de un día. */
  const previo = entrada ? entrada.paso : 0;
  const paso = acierto ? Math.min(previo + 1, INTERVALOS.length - 1) : 0;
  return {
    paso,
    prox: sumarDias(hoy, INTERVALOS[paso]),
    fallos: (entrada?.fallos || 0) + (acierto ? 0 : 1),
    vistas: (entrada?.vistas || 0) + 1,
    ultima: hoy,
  };
}

/* Las preguntas vencidas se cuentan solo con el estado guardado, sin
   necesidad de cargar el índice: así la insignia de la barra superior
   aparece al instante. */
export function contarVencidas(repaso, hoy) {
  let n = 0;
  for (const id in repaso) if (repaso[id].prox <= hoy) n += 1;
  return n;
}

/* Baraja determinista a partir de una semilla, para que recargar la página
   no reordene la sesión en curso. */
function barajar(lista, semilla) {
  const a = lista.slice();
  let s = 0;
  for (let i = 0; i < semilla.length; i++) s = (s * 31 + semilla.charCodeAt(i)) >>> 0;
  const rnd = () => ((s = (1103515245 * s + 12345) >>> 0) / 4294967296);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Arma la sesión del día: primero lo vencido, después preguntas nuevas de
   fichas ya estudiadas. Nunca se introduce material sin leer. */
export function construirSesion({ preguntas, repaso, estudiados, hoy, maxNuevas = MAX_NUEVAS, maxSesion = MAX_SESION }) {
  const vencidas = [];
  const nuevas = [];

  for (const p of preguntas) {
    const entrada = repaso[p.id];
    if (entrada) {
      if (entrada.prox <= hoy) vencidas.push(p);
    } else if (estudiados[p.codigo]) {
      nuevas.push(p);
    }
  }

  const nuevasHoy = barajar(nuevas, hoy + ":n").slice(0, maxNuevas);
  const sesion = barajar(vencidas, hoy).slice(0, maxSesion).concat(nuevasHoy);

  return {
    cola: barajar(sesion, hoy + ":s"),
    vencidasTotales: vencidas.length,
    enReserva: Math.max(0, nuevas.length - nuevasHoy.length),
    aplazadas: Math.max(0, vencidas.length - maxSesion),
  };
}

/* Resumen para la tarjeta del plan. */
export function resumen(preguntas, repaso, estudiados, hoy) {
  let vencidas = 0, nuevas = 0, enCurso = 0, dominadas = 0;
  for (const p of preguntas) {
    const e = repaso[p.id];
    if (!e) {
      if (estudiados[p.codigo]) nuevas += 1;
      continue;
    }
    enCurso += 1;
    if (e.prox <= hoy) vencidas += 1;
    if (e.paso >= INTERVALOS.length - 1) dominadas += 1;
  }
  return { vencidas, nuevas, enCurso, dominadas, total: preguntas.length };
}
