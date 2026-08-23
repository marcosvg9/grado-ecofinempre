/* PLANTILLA de ficha. Copia este archivo, renombralo (por ejemplo f7-03.js),
   rellena los campos y registralo en index.js.

   Secciones recomendadas, en este orden:
   Desarrollo · Formalizacion · Ejemplo numerico · Caso practico ·
   Errores tipicos · Puente con la contabilidad nacional · Compruebate ·
   Para profundizar

   No todas las fichas necesitan las ocho. El puente solo tiene sentido
   cuando existe una correspondencia real; forzarlo es peor que omitirlo. */

export default {
  codigo: "0.00",
  titulo: "",
  nivel: 1, // 1 fundamentos, 2 nucleo, 3 avanzado, 4 especializacion
  bloque: "",
  tiempo: "3 h",
  nucleo: "La idea central en dos o tres lineas. Si no cabe, el tema esta mal delimitado.",
  requiere: "",
  abre: "",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        { tipo: "parrafos", items: ["", ""] },
        {
          tipo: "rejilla",
          cabecera: ["Concepto", "Columna A", "Columna B"],
          filas: [{ nom: "", sub: "", cols: ["", ""] }],
          nota: "",
        },
      ],
    },
    {
      titulo: "Formalizacion",
      contenido: [
        {
          tipo: "rejilla",
          modo: "dos",
          filas: [{ nom: "Nombre de la formula", sub: "Que garantiza y que no", cols: ["expresion"] }],
        },
      ],
    },
    {
      titulo: "Ejemplo numerico",
      contenido: [
        { tipo: "parrafos", items: [""] },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe"],
          filas: [["", ""], { celdas: ["Total", ""], clase: "total" }],
          nota: "",
        },
      ],
    },
    {
      titulo: "Caso practico",
      contenido: [{ tipo: "parrafos", items: [""] }],
    },
    {
      titulo: "Errores tipicos",
      contenido: [{ tipo: "acordeon", items: [{ t: "", d: "" }] }],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [{ tipo: "destacado", parrafos: [""], lista: [""], cierre: "" }],
    },
    {
      titulo: "Compruebate",
      contenido: [{ tipo: "preguntas", items: [{ q: "", a: "" }] }],
    },
    {
      titulo: "Para profundizar",
      contenido: [{ tipo: "fuentes", items: [{ ref: "", nota: "" }] }],
    },
  ],
};
