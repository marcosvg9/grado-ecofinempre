/* Persistencia del progreso en el navegador.
   Una sola clave con todo el estado, para evitar escrituras dispersas. */

const CLAVE = "grado-autodidacta:v1";

export function leerProgreso() {
  try {
    const bruto = localStorage.getItem(CLAVE);
    const base = { estudiados: {}, notas: {}, repaso: {} };
    return bruto ? { ...base, ...JSON.parse(bruto) } : base;
  } catch (e) {
    // Modo privado o almacenamiento deshabilitado: se sigue en memoria.
    return { estudiados: {}, notas: {}, repaso: {} };
  }
}

export function guardarProgreso(estado) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(estado));
    return true;
  } catch (e) {
    return false;
  }
}

/* Exportar e importar permiten llevarse el progreso a otro ordenador
   sin depender de ningún servidor. El progreso vive solo en este navegador:
   si se limpian los datos del sitio, se pierde. El archivo exportado es la
   única copia de seguridad que existe, así que tiene que poder volver. */
export function exportarProgreso(estado) {
  const blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `progreso-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/* El archivo lo elige la persona y podría estar corrupto, ser de otra
   aplicación o venir de una versión futura. Se valida entero antes de
   devolver nada, y se descarta en silencio lo que no encaje en lugar de
   dejar entrar basura al almacenamiento.

   Devuelve { ok, estado, resumen } o { ok: false, error }. */

const CODIGO = /^\d{1,2}\.\d{2}$/;
const FECHA = /^\d{4}-\d{2}-\d{2}$/;

const esObjeto = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

export function validarProgreso(bruto) {
  let datos;
  try {
    datos = JSON.parse(bruto);
  } catch (e) {
    return { ok: false, error: "El archivo no es JSON válido." };
  }
  if (!esObjeto(datos)) return { ok: false, error: "El archivo no contiene un objeto de progreso." };
  if (!esObjeto(datos.estudiados) && !esObjeto(datos.repaso)) {
    return { ok: false, error: "No parece un progreso de esta aplicación: faltan «estudiados» y «repaso»." };
  }

  const estudiados = {};
  let descartados = 0;
  for (const [codigo, fecha] of Object.entries(datos.estudiados || {})) {
    if (CODIGO.test(codigo) && typeof fecha === "string" && FECHA.test(fecha)) estudiados[codigo] = fecha;
    else descartados++;
  }

  /* De cada entrada de repaso solo se aceptan los campos conocidos y con el
     tipo correcto; «paso» se acota para que un valor absurdo no rompa el
     calendario al indexar la tabla de intervalos. */
  const repaso = {};
  for (const [id, e] of Object.entries(datos.repaso || {})) {
    if (!esObjeto(e) || typeof e.prox !== "string" || !FECHA.test(e.prox)) { descartados++; continue; }
    repaso[id] = {
      paso: Number.isInteger(e.paso) && e.paso >= 0 ? Math.min(e.paso, 20) : 0,
      prox: e.prox,
      fallos: Number.isInteger(e.fallos) && e.fallos >= 0 ? e.fallos : 0,
      vistas: Number.isInteger(e.vistas) && e.vistas >= 0 ? e.vistas : 0,
      ultima: typeof e.ultima === "string" && FECHA.test(e.ultima) ? e.ultima : e.prox,
    };
  }

  const notas = {};
  for (const [codigo, texto] of Object.entries(datos.notas || {})) {
    if (CODIGO.test(codigo) && typeof texto === "string") notas[codigo] = texto;
    else descartados++;
  }

  const nEst = Object.keys(estudiados).length;
  const nRep = Object.keys(repaso).length;
  if (!nEst && !nRep) return { ok: false, error: "El archivo no contiene ningún progreso aprovechable." };

  return { ok: true, estado: { estudiados, notas, repaso }, resumen: { estudiados: nEst, repaso: nRep, descartados } };
}

/* Lee un File del selector y lo valida. No toca el almacenamiento: quien
   llama decide si aplicarlo, porque importar sustituye lo que hubiera. */
export function leerArchivoProgreso(archivo) {
  return new Promise((resolve) => {
    if (!archivo) return resolve({ ok: false, error: "No se ha seleccionado ningún archivo." });
    const lector = new FileReader();
    lector.onload = () => resolve(validarProgreso(String(lector.result)));
    lector.onerror = () => resolve({ ok: false, error: "No se ha podido leer el archivo." });
    lector.readAsText(archivo);
  });
}
