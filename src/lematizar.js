/* Lematizador de castellano para el buscador.

   El problema medido: de los 14.908 términos del índice, 2.249 son plurales
   cuyo singular también estaba indexado por separado. «bono» y «bonos» eran
   dos palabras distintas, y una consulta de varias palabras fallaba si el
   texto usaba la otra flexión.

   Esto NO es Snowball. Snowball trae una tabla de más de cien sufijos
   verbales, y reproducirla a medias daría errores silenciosos: conflaciones
   raras, difíciles de notar y peores que no lematizar. Aquí se cubre a
   propósito solo lo que este corpus necesita.

   La idea que ordena todo lo demás: el lema NO tiene que ser una palabra
   real, solo una clave consistente. «clase» y «clases» pueden ir los dos a
   «clas» —que no existe— con tal de que vayan al mismo sitio. Eso evita
   tener que decidir si la «e» de «clases» pertenece a la palabra o al
   plural, que es una pregunta de diccionario y no de morfología.

   Dos invariantes de los que depende el resto del buscador:

     · el lema es siempre PREFIJO de la palabra: solo se recortan sufijos y
       nunca se sustituye nada. De eso vive el resaltado de los extractos,
       que marca con `[\w]*(?:lema)[\w]*` sobre el texto original.
     · es idempotente: lematizar(lematizar(x)) === lematizar(x).

   Se aplica en el mismo sitio para indexar y para consultar, de modo que
   los dos lados no puedan desincronizarse. */

const MINIMO = 4;   // por debajo de esto no se toca nada: «pais», «base», «tipo»
const MINIMO_GENERO = 6; // umbral aparte para la -a/-o final; ver abajo

/* Invariables en número, o cuyo singular no existe. Sin la lista, «crisis»
   perdería la ese y se juntaría con «crisi», y «análisis» con «analisi». */
const INVARIABLES = new Set([
  "crisis", "analisis", "sintesis", "hipotesis", "tesis", "dosis", "praxis",
  "lunes", "martes", "miercoles", "jueves", "viernes", "caos", "gas",
  "interes", "pais", "mes", "res", "tos", "bus", "plus", "campus",
  "estatus", "virus", "atlas", "cosmos", "brexit",
]);

/* Sufijos derivativos, del más largo al más corto. Solo tres familias, y
   cada una está aquí porque une palabras que el temario usa de verdad como
   sinónimos: proteccionismo/proteccionista/proteccion, rápidamente/rápido.

   Se han dejado fuera a propósito «-ción», «-miento», «-ante» y «-able». En
   economía nombran cosas distintas de su raíz —una «emisión» no es
   «emitir», y «renta» no es «rentable»—, y unirlas mete ruido en vez de
   quitarlo. */
const DERIVATIVOS = ["isimamente", "amente", "mente", "isimo", "isima", "ismo", "ista"];

/* Singular de un plural castellano, sin sustituir letras: se recorta y ya.
   No se convierte «luces» en «luz» porque eso rompería el invariante de
   prefijo del que depende el resaltado, y ese par es rarísimo aquí. */
function singular(p) {
  if (p.length <= MINIMO || INVARIABLES.has(p) || !p.endsWith("s")) return p;

  if (p.endsWith("es")) {
    const sinEs = p.slice(0, -2);
    // «aranceles» → «arancel»: la -es va tras consonante y sobra entera.
    if (sinEs.length >= MINIMO && !"aeiou".includes(sinEs.at(-1))) return sinEs;
    // «clases» → «clase»: aquí solo sobra la -s; la -e caerá luego.
    return p.slice(0, -1);
  }

  const sinS = p.slice(0, -1);
  return sinS.length >= MINIMO ? sinS : p;
}

/* Un paso de reducción. Se aplica en bucle hasta que deja de cambiar. */
function paso(palabra) {
  let p = singular(palabra);

  for (const sufijo of DERIVATIVOS) {
    if (!p.endsWith(sufijo)) continue;
    const raiz = p.slice(0, -sufijo.length);
    if (raiz.length >= MINIMO) { p = raiz; break; }
  }

  /* La -e final es lo que junta «clase» con «clases»: el plural deja
     «clas», y quitando la -e el singular llega al mismo sitio. */
  if (p.length > MINIMO && p.endsWith("e")) return p.slice(0, -1);

  /* La -a/-o final junta masculino y femenino —«economica» con
     «economico»—, pero solo a partir de cierta longitud. Medido sobre el
     vocabulario real: sin ese tope se juntaban «libra», «libre» y «libro»
     en una sola clave, y «óptimo» con «optimista», que en un temario de
     economía son cosas distintas. Las palabras cortas son justo donde el
     género no es género sino otra palabra. */
  if (p.length > MINIMO_GENERO && (p.endsWith("a") || p.endsWith("o"))) return p.slice(0, -1);

  return p;
}

/* Reduce una palabra ya normalizada (minúsculas y sin tildes) a su clave.

   Itera hasta el punto fijo, y no por elegancia: un solo paso no era
   idempotente. «empresa» daba «empres», que vuelve a parecer un plural en
   -es y se recortaría otra vez si se le pasara de nuevo. Quedarse en el
   punto fijo hace verdadero el invariante y evita que dos rutas distintas
   hasta la misma palabra acaben en claves distintas. */
export function lematizar(palabra) {
  if (typeof palabra !== "string" || palabra.length <= MINIMO) return palabra;
  if (palabra.includes(".")) return palabra; // códigos de ficha y del SEC

  let p = palabra;
  for (let vuelta = 0; vuelta < 6; vuelta++) {
    const siguiente = paso(p);
    if (siguiente === p || siguiente.length <= MINIMO) return siguiente.length > 2 ? siguiente : p;
    p = siguiente;
  }
  return p;
}
