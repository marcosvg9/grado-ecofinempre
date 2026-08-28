/* Ficha 6.01 — Coste completo frente a coste variable. */

export default {
  codigo: "6.01",
  titulo: "Coste completo frente a coste variable",
  nivel: 2,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "4 h",
  nucleo:
    "Los dos métodos parten de los mismos costes y llegan a resultados distintos, y la diferencia es siempre la misma cifra: los costes fijos de producción incorporados a las existencias que no se han vendido. Si el almacén no varía, ambos coinciden exactamente.",
  requiere: "5.05 Existencias y coste de ventas",
  abre: "6.04 Punto muerto · 6.02 Sistemas de costes",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta de fondo es engañosamente sencilla: cuando una fábrica produce una unidad, ¿cuánto cuesta? Los materiales y la mano de obra directa no ofrecen duda. El problema son los costes fijos de producción —el alquiler de la nave, la amortización de la maquinaria, el sueldo del jefe de planta—, que existen produzca lo que produzca.",
            "El **coste completo** o de absorción reparte esos costes fijos entre las unidades producidas y los incorpora al valor de las existencias. Una unidad que se queda en el almacén se lleva consigo su parte de alquiler, que se convertirá en gasto el día que se venda. El **coste variable** o *direct costing* sostiene lo contrario: los costes fijos son del período, no del producto, y deben imputarse íntegramente al ejercicio en que se incurren.",
            "La consecuencia práctica es limpia. Cuando la producción supera a las ventas, el coste completo **retiene** en el balance una parte de los costes fijos y muestra un resultado mayor. Cuando las ventas superan a la producción, ocurre lo contrario: salen del almacén costes fijos de años anteriores y el resultado es menor. Solo cuando las existencias no varían los dos métodos dan la misma cifra.",
            "Aquí hay una restricción normativa que conviene tener clara desde el principio: **para las cuentas anuales el PGC obliga al coste completo**. El coste de producción de las existencias incluye los costes indirectos que corresponden al período de fabricación, con el matiz de que solo se imputa la parte correspondiente al nivel normal de utilización de la capacidad; la subactividad es gasto del ejercicio, no mayor valor del almacén. El coste variable es una herramienta **exclusivamente interna**, útil para decidir, no para informar a terceros.",
            "El coste variable trae consigo un concepto que vale por sí solo: el **margen de contribución**, la diferencia entre el precio de venta y el coste variable unitario. Es lo que cada unidad vendida aporta a cubrir los costes fijos y, una vez cubiertos, a generar beneficio. Casi todas las decisiones de corto plazo —aceptar un pedido especial, eliminar una línea, subcontratar— se resuelven mirando el margen de contribución, no el coste completo.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Aspecto", "Coste completo", "Coste variable"],
          filas: [
            { nom: "Costes fijos de producción", sub: "El punto en el que difieren", cols: ["Se activan en existencias", "Gasto del período"] },
            { nom: "Valor de las existencias", sub: "Consecuencia directa de lo anterior", cols: ["Mayor", "Menor"] },
            { nom: "Saldo intermedio", sub: "Cómo se estructura la cuenta", cols: ["Margen bruto", "Margen de contribución"] },
            { nom: "Uso admitido", sub: "Restricción normativa", cols: ["Cuentas anuales y gestión", "Solo gestión interna"] },
            { nom: "Utilidad para decidir", sub: "Corto plazo", cols: ["Engañosa: mezcla fijo y variable", "Directa: aísla lo evitable"] },
          ],
        },
      ],
    },
    {
      titulo: "Formalización",
      contenido: [
        {
          tipo: "rejilla",
          modo: "dos",
          filas: [
            { nom: "Coste unitario completo", sub: "El reparto depende del volumen producido, no del vendido.", cols: ["cc = cv + CF producción / Unidades producidas"] },
            { nom: "Margen de contribución unitario", sub: "El concepto clave del coste variable.", cols: ["mc = p − cv"] },
            { nom: "Resultado por coste completo", sub: "Solo lo vendido lleva coste fijo incorporado.", cols: ["R = Ventas − (Q vendida × cc) − Gastos de estructura"] },
            { nom: "Resultado por coste variable", sub: "Todos los fijos se restan del período.", cols: ["R = Q vendida × mc − CF producción − Gastos de estructura"] },
            { nom: "Diferencia entre ambos", sub: "La identidad que hay que poder escribir de memoria.", cols: ["$\\Delta$ = (Q producida − Q vendida) × CF unitario"] },
            { nom: "Coste de subactividad", sub: "No se activa: va directo a resultados.", cols: ["Subactividad = CF × (1 − Actividad real / Actividad normal)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo año, dos resultados",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una fábrica produce **10.000 unidades** y vende **8.000** a 25 € cada una. No había existencias iniciales. El coste variable unitario es de 12 €, los costes fijos de producción ascienden a 60.000 € y los gastos fijos de estructura a 25.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Coste completo", "Cálculo", "Importe"],
          filas: [
            ["Coste unitario", "12 + 60.000/10.000", "18 €"],
            ["Ventas", "8.000 × 25", "200.000 €"],
            ["Coste de las ventas", "8.000 × 18", "−144.000 €"],
            { celdas: ["Margen bruto", "—", "56.000 €"], clase: "total" },
            ["Gastos de estructura", "—", "−25.000 €"],
            { celdas: ["Resultado", "—", "31.000 €"], clase: "total" },
            ["Existencias finales en balance", "2.000 × 18", "36.000 €"],
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Coste variable", "Cálculo", "Importe"],
          filas: [
            ["Ventas", "8.000 × 25", "200.000 €"],
            ["Coste variable de las ventas", "8.000 × 12", "−96.000 €"],
            { celdas: ["Margen de contribución", "8.000 × 13", "104.000 €"], clase: "total" },
            ["Costes fijos de producción", "íntegros al período", "−60.000 €"],
            ["Gastos de estructura", "—", "−25.000 €"],
            { celdas: ["Resultado", "—", "19.000 €"], clase: "total" },
            ["Existencias finales en balance", "2.000 × 12", "24.000 €"],
          ],
          nota: "Diferencia de resultado: **12.000 €**. Diferencia de existencias: **12.000 €**. Y ambas coinciden con 2.000 unidades no vendidas × 6 € de coste fijo unitario. No es casualidad: es la identidad de la sección anterior. El coste completo no ha creado beneficio, lo ha **trasladado** al ejercicio siguiente dejándolo aparcado en el almacén.",
        },
        {
          tipo: "parrafos",
          items: [
            "Comprueba el caso simétrico mentalmente: si el año que viene se producen 8.000 unidades y se venden 10.000, el coste completo arrastrará al resultado los 12.000 € que hoy retiene y mostrará un beneficio menor que el coste variable. A lo largo de la vida entera de la empresa, ambos métodos suman exactamente lo mismo. Solo difieren en el reparto entre ejercicios.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: producir para el almacén",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El director de una planta cobra un bonus ligado al resultado de explotación. La demanda ha caído y las ventas del año serán de 8.000 unidades hagan lo que hagan. Puede producir 8.000 y ajustar turnos, o producir 12.000 y llenar el almacén.",
            "Con coste completo, producir 12.000 baja el coste unitario a 12 + 60.000/12.000 = 17 €, y el coste de las ventas a 8.000 × 17 = 136.000 €. El resultado sube de 31.000 € a **39.000 €** sin haber vendido ni una unidad más. Los 8.000 € adicionales son costes fijos aparcados en un almacén que quizá no se venda nunca, y que además consume caja en materiales y mano de obra.",
            "Con coste variable el incentivo desaparece: el resultado es 19.000 € produzca lo que produzca, porque los costes fijos van íntegros al período. Por eso muchas empresas llevan una contabilidad interna por coste variable aunque estén obligadas a formular las cuentas anuales por coste completo.",
            "**Qué mirar al analizar:** si las existencias de productos terminados crecen a un ritmo muy superior al de las ventas durante varios ejercicios, hay que preguntarse si el margen declarado es real o es coste fijo diferido. Es una de las señales de alerta que se cruzan con el estado de flujos de efectivo: el beneficio sube y el flujo de explotación no lo acompaña, porque la caja se ha ido al almacén.",
          ],
        },
      ],
    },
    {
      titulo: "Errores típicos",
      contenido: [
        {
          tipo: "acordeon",
          items: [
            { t: "Usar el coste completo unitario para decidir sobre un pedido especial", d: "Si sobra capacidad, el coste relevante de una unidad adicional es solo el variable: los fijos ya están comprometidos. Rechazar un pedido a 15 € porque «cuesta 18 €» destruye 3 € de contribución por unidad. El coste completo mezcla lo evitable con lo inevitable y por eso engaña en el corto plazo." },
            { t: "Confundir margen bruto con margen de contribución", d: "El margen bruto descuenta el coste completo de lo vendido, que incluye fijos. El margen de contribución descuenta solo el coste variable. Son cifras distintas y solo la segunda sirve para calcular el punto muerto o el apalancamiento operativo." },
            { t: "Activar los costes de subactividad", d: "Cuando la fábrica trabaja muy por debajo de su capacidad normal, la parte de los costes fijos correspondiente a la capacidad ociosa **no** puede incorporarse a las existencias: es gasto del ejercicio. Activarla infla el almacén y difiere una pérdida real." },
            { t: "Creer que un método da un resultado «más verdadero»", d: "Ninguno de los dos miente. Responden a preguntas distintas: el coste completo, cuánto vale lo que hay en el almacén; el coste variable, cuánto aporta cada venta. El error es usar la respuesta de uno para la pregunta del otro." },
            { t: "Presentar cuentas anuales por coste variable", d: "No está permitido. El PGC exige que el coste de producción de las existencias incorpore los costes indirectos del período de fabricación. El coste variable es una herramienta de gestión interna y no puede sustituir al criterio normativo." },
            { t: "Olvidar que la diferencia se invierte", d: "El coste completo no genera beneficio, lo desplaza en el tiempo. Un año de resultado inflado por acumulación de existencias se paga con un año de resultado deprimido cuando ese almacén se venda." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          parrafos: [
            "El SEC 2010 resuelve esta misma disyuntiva, y se sitúa del lado del coste completo.",
          ],
          lista: [
            "La producción se registra **cuando se produce**, no cuando se vende. Lo fabricado y no vendido entra en la producción del período como variación de existencias (P.52).",
            "Las existencias de productos terminados y trabajos en curso se valoran a **coste de producción**, que incluye los costes indirectos: es, conceptualmente, coste completo.",
            "Por eso una economía cuyas empresas acumulan almacén registra ese esfuerzo productivo en el PIB del período, aunque ninguna de esas unidades haya encontrado comprador todavía.",
            "El matiz importante es la **valoración a precios del momento en que se produce el movimiento**, para excluir las ganancias de posesión. El almacén se valora por lo que costó fabricarlo, no por lo que valdría venderlo.",
          ],
          cierre:
            "Consecuencia interpretativa: una contribución positiva de la variación de existencias al crecimiento trimestral no siempre es buena noticia. Puede reflejar producción anticipada a una demanda que no llegó, exactamente el mismo fenómeno del caso práctico visto a escala agregada.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Se producen 5.000 unidades y se venden 5.000. ¿Qué método da mayor resultado?", a: "Ninguno: coinciden exactamente. La diferencia entre ambos es (producidas − vendidas) × coste fijo unitario, y aquí ese factor es cero." },
            { q: "Coste variable 12 €, fijos de producción 60.000 €, producción 10.000 uds. Llega un pedido puntual de 500 uds a 15 €. ¿Se acepta?", a: "Sí, si hay capacidad ociosa y no canibaliza ventas a precio normal. Cada unidad aporta 3 € de contribución, es decir 1.500 € que van directos al resultado. El coste completo de 18 € es irrelevante porque los fijos no cambian." },
            { q: "Las existencias caen de 3.000 a 1.000 unidades. ¿Qué método muestra mayor resultado este año?", a: "El coste variable. Con coste completo salen del almacén costes fijos de ejercicios anteriores incorporados a esas 2.000 unidades, lo que aumenta el coste de las ventas y deprime el resultado." },
            { q: "¿Por qué el PGC no admite el coste variable para las cuentas anuales?", a: "Porque exige que el coste de producción de las existencias incluya los costes indirectos correspondientes al período de fabricación. Valorar el almacén solo a coste variable lo infravaloraría respecto del criterio normativo." },
            { q: "Una fábrica trabaja al 60 % de su capacidad normal. ¿Qué pasa con el 40 % de costes fijos restante?", a: "Es coste de subactividad y va directo a la cuenta de resultados. No puede incorporarse al valor de las existencias, porque no corresponde a un consumo productivo sino a capacidad ociosa." },
          ],
        },
      ],
    },
    {
      titulo: "Test",
      contenido: [
        {
          tipo: "test",
          items: [
            {
              q: "Sobra capacidad en la fábrica. Llega un pedido especial a 15 € la unidad, y el coste completo unitario es de 18 €. ¿Conviene aceptarlo?",
              opciones: [
                "No: se vendería por debajo de coste y cada unidad daría 3 € de pérdida",
                "Sí, si el coste variable unitario es menor de 15 €: los fijos ya están comprometidos y cada unidad aporta contribución",
                "No, salvo que se pueda subir el precio hasta los 18 €",
                "Sí, porque un pedido especial nunca afecta al resultado",
              ],
              correcta: 1,
              porque: [
                "Ese es exactamente el error: el coste completo mezcla el consumo real de la unidad adicional con un reparto de fijos que se producirían igualmente.",
                "Si el variable es, por ejemplo, 12 €, cada unidad deja 3 € de margen de contribución que antes no existían. Rechazarla destruye ese margen sin ahorrar ningún fijo.",
                "El precio de 18 € no es la referencia: la referencia es el coste que cambia si se acepta, y ese es el variable.",
                "Sí afecta: lo mejora en la contribución total. Lo que no cambia son los costes fijos, y por eso la decisión se toma sobre el variable.",
              ],
            },
            {
              q: "¿Qué diferencia hay entre margen bruto y margen de contribución?",
              opciones: [
                "El bruto es por producto y el de contribución es de toda la empresa",
                "El bruto se calcula antes de impuestos y el de contribución después",
                "El bruto descuenta el coste completo de lo vendido (fijos incluidos); el de contribución descuenta solo el coste variable",
                "Ninguna: son dos nombres del mismo concepto",
              ],
              correcta: 2,
              porque: [
                "Los dos pueden calcularse por producto o en conjunto. El criterio que los separa es qué costes incorporan.",
                "Ambos son magnitudes antes de impuestos; la diferencia está en qué costes descuentan, no en el momento del cálculo.",
                "De ahí que solo el margen de contribución sirva para el punto muerto o el apalancamiento operativo: son las magnitudes que exigen separar lo que varía de lo que no.",
                "Coinciden solo si no hay costes fijos de producción, que es un caso irreal.",
              ],
            },
            {
              q: "La fábrica trabaja muy por debajo de su capacidad normal. ¿Qué se hace con los costes fijos correspondientes a la capacidad ociosa?",
              opciones: [
                "Se difieren hasta el ejercicio en que se recupere la actividad normal",
                "Se incorporan a las existencias, como el resto de los fijos de producción",
                "Se reparten entre las unidades vendidas, no entre las producidas",
                "Se llevan a gasto del ejercicio: son coste de subactividad y no pueden activarse",
              ],
              correcta: 3,
              porque: [
                "Diferir la subactividad es justamente lo que se prohíbe: el período que sufre la ociosidad es el que soporta el coste.",
                "Activarlos infla el almacén con un coste que no añade valor a las unidades: la ineficiencia de no producir no vale más existencias.",
                "El reparto entre vendidas o producidas es otra cuestión; la subactividad no entra en ningún reparto porque no se activa.",
                "El PGC lo dice expresamente. La fórmula es CF × (1 − Actividad real / Actividad normal), y esa porción va directa a resultados.",
              ],
            },
            {
              q: "Un ejercicio en que la producción supera a la venta arroja más beneficio por coste completo que por coste variable. ¿Qué ocurre después?",
              opciones: [
                "Se corrige sola al cierre mediante un ajuste por periodificación",
                "Nada: el coste completo genera beneficio adicional de forma permanente",
                "Se invierte: el año en que se vacíe ese almacén, el coste completo dará un resultado deprimido en la misma cuantía",
                "La diferencia se consolida como reserva",
              ],
              correcta: 2,
              porque: [
                "No existe tal ajuste. La reversión ocurre por la vía natural de vender lo almacenado.",
                "El coste completo no crea beneficio, lo desplaza en el tiempo activando fijos en existencias no vendidas.",
                "Por eso la diferencia entre ambos métodos es siempre (Q producida − Q vendida) × CF unitario, con el signo que corresponda: acumular almacén adelanta resultado y vaciarlo lo devuelve.",
                "No hay ninguna reserva: la diferencia vive en la valoración de las existencias y se deshace cuando se venden.",
              ],
            },
          ],
          nota: "Ninguna opción falsa es relleno: cada una recoge un error documentado en «Errores típicos». Si alguna te ha parecido plausible, ese es el apartado al que volver.",
        },
      ],
    },

    {
      titulo: "Para profundizar",
      contenido: [
        {
          tipo: "fuentes",
          items: [
            { ref: "Horngren, Contabilidad de costos", nota: "el capítulo comparativo entre absorción y variable, con la conciliación de resultados trabajada en detalle." },
            { ref: "PGC, norma de registro y valoración 10.ª y su desarrollo por resolución del ICAC sobre coste de producción", nota: "el criterio obligatorio para las cuentas anuales, incluida la subactividad." },
            { ref: "Blanco Ibarra, Contabilidad de costes y analítica de gestión", nota: "enfoque español, con la terminología que encontrarás en manuales y oposiciones." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 3", nota: "valoración de la producción y de la variación de existencias, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
