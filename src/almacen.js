/* Persistencia del progreso en el navegador.
   Una sola clave con todo el estado, para evitar escrituras dispersas. */

const CLAVE = "grado-autodidacta:v1";

export function leerProgreso() {
  try {
    const bruto = localStorage.getItem(CLAVE);
    return bruto ? JSON.parse(bruto) : { estudiados: {}, notas: {} };
  } catch (e) {
    // Modo privado o almacenamiento deshabilitado: se sigue en memoria.
    return { estudiados: {}, notas: {} };
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
   sin depender de ningún servidor. */
export function exportarProgreso(estado) {
  const blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `progreso-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
