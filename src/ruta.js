/* Ruta de estudio: qué se puede estudiar ahora y en qué orden.

   El grafo de prerrequisitos (279 aristas) es casi un DAG, pero no del todo:
   tiene dos ciclos, uno de siete fichas que se cierra por «7.05 WACC exige
   8.06 CAPM», y otro de dos entre IS-LM y dinero. Son huevos y gallinas
   reales de la disciplina, no erratas: el WACC necesita la beta, y la beta
   se explica en el bloque de mercados.

   Un orden topológico ingenuo se atascaría y dejaría fuera esas 9 fichas y
   las 49 que cuelgan de ellas: el 41 % del temario. Así que cuando el
   recorrido se atasca, se ablanda la arista que contradice el orden del
   temario, es decir, la que exige un código posterior al de la propia ficha.
   El temario es la fuente canónica, y si un «requiere» lo contradice, es el
   «requiere» el que cede. Es determinista y siempre termina.

   Ojo: la disponibilidad se calcula sobre el grafo YA ablandado. Con el
   original, las fichas del ciclo se esperarían mutuamente para siempre. */

export const num = (codigo) => {
  const [a, b] = codigo.split(".").map(Number);
  return a * 100 + b;
};

/* Orden topológico completo. Devuelve también qué aristas hubo que ablandar
   y el mapa de prerrequisitos efectivo, que es el que usa todo lo demás. */
export function ordenTopologico(prerrequisitos) {
  const nodos = Object.keys(prerrequisitos).sort((a, b) => num(a) - num(b));
  const pendientes = new Map(nodos.map((n) => [n, new Set(prerrequisitos[n])]));
  const orden = [];
  const hechas = new Set();
  const blandas = [];

  while (orden.length < nodos.length) {
    const libres = nodos.filter(
      (n) => !hechas.has(n) && [...pendientes.get(n)].every((p) => hechas.has(p))
    );

    if (libres.length) {
      orden.push(libres[0]);
      hechas.add(libres[0]);
      continue;
    }

    /* Atasco: hay ciclo. Cede la arista que mira hacia adelante. */
    const restantes = nodos.filter((n) => !hechas.has(n));
    let roto = false;
    for (const n of restantes) {
      for (const p of [...pendientes.get(n)]) {
        if (!hechas.has(p) && num(p) > num(n)) {
          pendientes.get(n).delete(p);
          blandas.push([n, p]);
          roto = true;
        }
      }
    }
    /* Red de seguridad: un ciclo sin ninguna arista hacia adelante. No
       ocurre hoy, pero un «requiere» nuevo podría crearlo. */
    if (!roto) {
      const n = restantes[0];
      for (const p of pendientes.get(n)) if (!hechas.has(p)) blandas.push([n, p]);
      pendientes.set(n, new Set());
    }
  }

  const efectivo = {};
  for (const n of nodos) efectivo[n] = [...pendientes.get(n)];
  return { orden, blandas, efectivo };
}

/* Cuántas fichas se abren, directa o indirectamente, al estudiar cada una.
   Se recorre el orden topológico al revés acumulando conjuntos. */
export function descendientes(efectivo, orden) {
  const hijos = {};
  for (const n of orden) hijos[n] = [];
  for (const n of orden) for (const p of efectivo[n]) if (hijos[p]) hijos[p].push(n);

  const alcance = {};
  for (let i = orden.length - 1; i >= 0; i--) {
    const n = orden[i];
    const s = new Set();
    for (const h of hijos[n]) {
      s.add(h);
      for (const d of alcance[h] || []) s.add(d);
    }
    alcance[n] = s;
  }
  const cuenta = {};
  for (const n of orden) cuenta[n] = alcance[n].size;
  return { cuenta, hijos };
}

/* Los prerrequisitos de «destino» que aún no se han estudiado, en el orden
   en que hay que abordarlos. Es la ruta mínima hasta una ficha concreta. */
export function caminoHasta(efectivo, orden, estudiados, destino) {
  const necesarios = new Set();
  const pila = [destino];
  while (pila.length) {
    const n = pila.pop();
    for (const p of efectivo[n] || []) {
      if (estudiados[p] || necesarios.has(p)) continue;
      necesarios.add(p);
      pila.push(p);
    }
  }
  return orden.filter((c) => necesarios.has(c));
}

/* Dos maneras razonables de ordenar lo que ya se puede estudiar, porque no
   hay una sola respuesta correcta:

     progresion — por nivel y luego por el orden del temario. Es la más
                  suave: agota lo elemental antes de subir, y dentro de cada
                  nivel sigue tu programa. Salta de bloque 53 veces.
     desbloqueo — primero lo que más fichas abre. Avanza más rápido en
                  cobertura, a costa de saltar de bloque 115 veces y de
                  mezclar niveles. */
const CRITERIOS = {
  progresion: (nivel) => (a, b) =>
    nivel(a.codigo) - nivel(b.codigo) || num(a.codigo) - num(b.codigo),
  desbloqueo: (nivel) => (a, b) =>
    b.abre - a.abre || nivel(a.codigo) - nivel(b.codigo) || num(a.codigo) - num(b.codigo),
};

/* Vista completa del estado de la ruta para un progreso dado. */
export function analizarRuta(prerrequisitos, estudiados, nivelDe, modo = "progresion") {
  const { orden, blandas, efectivo } = ordenTopologico(prerrequisitos);
  const { cuenta } = descendientes(efectivo, orden);

  const disponibles = [];
  const bloqueadas = [];
  for (const c of orden) {
    if (estudiados[c]) continue;
    const faltan = efectivo[c].filter((p) => !estudiados[p]);
    if (faltan.length) bloqueadas.push({ codigo: c, faltan, abre: cuenta[c] });
    else disponibles.push({ codigo: c, abre: cuenta[c] });
  }

  const nivel = (c) => (nivelDe ? nivelDe(c) || 9 : 9);
  disponibles.sort((CRITERIOS[modo] || CRITERIOS.progresion)(nivel));
  bloqueadas.sort((a, b) => a.faltan.length - b.faltan.length || num(a.codigo) - num(b.codigo));

  return {
    orden,
    blandas,
    efectivo,
    abre: cuenta,
    disponibles,
    bloqueadas,
    estudiadas: orden.filter((c) => estudiados[c]).length,
    total: orden.length,
  };
}
