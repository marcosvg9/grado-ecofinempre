/* Ficha 7.10 — Fusiones, adquisiciones y creacion de valor. */

export default {
  codigo: "7.10",
  titulo: "Fusiones, adquisiciones y creación de valor",
  nivel: 4,
  bloque: "Finanzas corporativas",
  tiempo: "5 h",
  nucleo:
    "Una adquisición crea valor para el comprador solo si las sinergias superan a la prima pagada. Como la prima se paga el primer día y las sinergias llegan más tarde y de forma incierta, la evidencia muestra que el vendedor se queda con la mayor parte del valor creado.",
  requiere: "7.09 Valoración de empresas · 6.10 Consolidación · 5.06 Fondo de comercio",
  abre: "9.04 Estrategias corporativas · 8.07 Eficiencia de mercados",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La aritmética de una adquisición es simple y despiadada. El comprador paga el valor autónomo de la empresa objetivo más una **prima de control**, habitualmente entre el 20 % y el 40 %. A cambio espera obtener **sinergias**: ahorros o ingresos adicionales que no existirían si ambas empresas siguieran separadas. El valor creado para el comprador es la diferencia entre unas y otra. Si la prima iguala a las sinergias, el comprador ha trabajado gratis; si la supera, ha transferido valor a los accionistas del vendedor.",
            "Las **sinergias** se clasifican por su fiabilidad, y esa jerarquía importa más que su magnitud. Las de **coste** —eliminar duplicidades, cerrar sedes, unificar compras— son las más creíbles porque dependen de decisiones internas y se materializan pronto. Las de **ingreso** —venta cruzada, acceso a nuevos canales— son mucho menos fiables porque dependen del comportamiento de clientes que nadie controla. Las **fiscales** y **financieras** son reales pero limitadas y a menudo replicables sin comprar nada.",
            "La forma de pago no es un detalle administrativo: **decide quién soporta el riesgo de que la valoración esté equivocada**. En un pago **en efectivo**, el precio queda fijado y el comprador asume íntegramente el riesgo y se queda con toda la sinergia por encima de la prima. En un pago **en acciones**, los accionistas del vendedor pasan a ser accionistas de la empresa combinada y comparten tanto las sinergias como los errores. Por eso una oferta en acciones se lee como señal de que el comprador considera cara su propia acción, y el mercado suele castigarla más.",
            "La **evidencia empírica** es de las más consistentes de las finanzas corporativas y conviene conocerla antes de modelar nada. Los accionistas de la empresa adquirida ganan de forma sistemática, en la cuantía de la prima. Los del comprador obtienen en promedio un rendimiento nulo o ligeramente negativo en torno al anuncio. Y entre la mitad y dos tercios de las operaciones no alcanzan los objetivos que las justificaron. **La creación de valor agregada existe, pero se la queda casi entera el vendedor.**",
            "Las razones de ese patrón son conocidas. Hay **competencia** por los activos buenos, y en una subasta gana quien más optimista es respecto a las sinergias, que suele ser quien más se equivoca: es la maldición del ganador. Hay **sesgos de los directivos**, que sobreestiman su capacidad de gestionar el activo adquirido. Y hay **incentivos desalineados**, porque la retribución y el prestigio crecen con el tamaño de la empresa aunque no lo haga su valor.",
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
            { nom: "Sinergia total", sub: "Lo que la combinación crea sobre la suma de las partes.", cols: ["S = V(A+B) − V(A) − V(B)"] },
            { nom: "Prima pagada", sub: "El exceso sobre el valor autónomo del objetivo.", cols: ["Prima = Precio − V(B)"] },
            { nom: "Valor creado para el comprador", sub: "La única cifra que decide si la operación tiene sentido.", cols: ["$\\mathrm{VAN}_A = S - \\text{Prima}$"] },
            { nom: "Precio máximo racional", sub: "Por encima, se destruye valor.", cols: ["$P_{\\max} = V(B) + S$"] },
            { nom: "Precio efectivo en pago con acciones", sub: "Crece con las sinergias: hay que resolverlo simultáneamente.", cols: ["$P_{\\text{efectivo}} = \\dfrac{n_{\\text{nuevas}}\\,V(A{+}B)}{n_A + n_{\\text{nuevas}}}$"] },
            { nom: "Fondo de comercio generado", sub: "El rastro contable de la ficha 6.10.", cols: ["FC = Precio − % × PN de B a valor razonable"] },
          ],
          nota: "El **precio efectivo en pago con acciones** es la trampa técnica de esta ficha. Si se emiten acciones por un valor nominal de 240 millones y la operación crea sinergias, esas acciones valen más una vez anunciada la fusión, y el vendedor recibe más de lo que la cifra anunciada sugiere.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: efectivo frente a acciones",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La empresa **A** vale 500 millones de euros y tiene 50 millones de acciones a 10 €. La empresa **B** vale 200 millones. Las sinergias estimadas de la combinación ascienden a **60 millones**, de modo que la empresa combinada valdría 760 millones.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Pago en efectivo", "Cálculo", "Resultado"],
          filas: [
            ["Precio ofrecido", "prima del 20 % sobre 200", "240 M€"],
            ["Prima pagada", "240 − 200", "40 M€"],
            ["Sinergias", "—", "60 M€"],
            { celdas: ["Valor creado para los accionistas de A", "60 − 40", "20 M€"], clase: "total" },
            ["Precio máximo racional", "200 + 60", "260 M€"],
          ],
          nota: "Por encima de 260 M€ la operación destruye valor para A, por muy estratégica que parezca. Ese techo es la única cifra que hay que tener presente en una negociación, y es la que se olvida en cuanto aparece un competidor pujando.",
        },
        {
          tipo: "tabla",
          cabecera: ["Pago en acciones por «240 M€»", "Cálculo", "Resultado"],
          filas: [
            ["Acciones nuevas emitidas", "240 / 10", "24 M acciones"],
            ["Acciones totales tras la fusión", "50 + 24", "74 M acciones"],
            ["Valor de la empresa combinada", "500 + 200 + 60", "760 M€"],
            ["Precio por acción tras la fusión", "760 / 74", "10,27 €"],
            ["Valor recibido por los accionistas de B", "24 × 10,27", "246,5 M€"],
            { celdas: ["Valor creado para los accionistas de A", "50 × 10,27 − 500", "13,5 M€"], clase: "total" },
          ],
          nota: "Aunque la oferta se anunció como «240 millones», los accionistas de B reciben en realidad **246,5 millones**, porque las acciones que reciben ya incorporan una parte de las sinergias. El comprador se queda con **13,5 M€ en lugar de 20 M€**: ha cedido un tercio de su ganancia por la forma de pago. Con efectivo el precio queda fijado; con acciones, el vendedor participa del éxito.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y una advertencia sobre el beneficio por acción.** Supongamos que A tiene un PER de 20 y B, de 12. Tras adquirir B pagando en acciones, el beneficio por acción de A **aumenta** de forma mecánica, porque incorpora beneficio comprado a un múltiplo inferior al propio. Ese efecto no dice absolutamente nada sobre creación de valor: ocurriría igual con sinergias nulas. Presentar una operación como buena porque «mejora el BPA» es uno de los argumentos más extendidos y más vacíos del análisis de fusiones.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué fracasan tantas operaciones",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Con una evidencia empírica tan clara, cabría esperar que las adquisiciones fueran raras. Son constantes. Entender por qué exige mirar los mecanismos que empujan a hacerlas y los que impiden que salgan bien.",
            "**El proceso competitivo selecciona al más optimista.** En una subasta con cinco pujadores, gana quien más alto valora las sinergias. Si las cinco estimaciones se distribuyen alrededor del valor real, el ganador es sistemáticamente el que más se ha pasado. La maldición del ganador no es un error individual sino una propiedad estructural del mecanismo, y se agrava cuanto más incierto es el activo y más pujadores hay.",
            "**Las sinergias se estiman antes de tener acceso completo.** La diligencia debida se hace con información limitada y bajo presión de calendario. Las sinergias de coste se cuantifican con cierta base; las de ingreso se estiman con un porcentaje de venta cruzada que rara vez se alcanza. Y los **costes de integración** —sistemas, indemnizaciones, consultores, distracción de la dirección— se subestiman con la misma regularidad con que se sobreestiman los beneficios.",
            "**La integración es donde se pierde el valor.** Dos organizaciones con culturas, sistemas y procesos distintos tardan años en funcionar como una, y durante ese período la atención de la dirección se desvía del negocio. La rotación de personal clave del adquirido, que suele ser precisamente el activo que se compraba en operaciones de servicios o tecnología, es el fallo más citado en los análisis retrospectivos.",
            "**Los incentivos no ayudan.** La retribución de los directivos crece con el tamaño de la empresa; el prestigio profesional, también. Los bancos de inversión cobran por operación cerrada, no por valor creado. Y el sesgo de confirmación hace el resto: una vez que la dirección se ha comprometido públicamente con una operación, cada dato nuevo se interpreta a su favor.",
            "**Qué distingue a las que funcionan.** Adquisiciones pequeñas y frecuentes en el negocio conocido, con sinergias de coste identificadas y cuantificadas antes de firmar, con precio disciplinado y con capacidad de retirarse. Las grandes operaciones transformadoras —diversificación hacia sectores nuevos, fusiones entre iguales— son las que concentran los fracasos. **Y el rastro contable queda:** el fondo de comercio acumulado y sus deterioros, que la ficha 6.10 enseñaba a leer, son la mejor evidencia disponible sobre si la estrategia de compras de un grupo ha creado o destruido valor a lo largo de los años.",
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
            { t: "Justificar una operación por la mejora del beneficio por acción", d: "Comprar una empresa con un PER inferior al propio mejora el BPA de forma aritmética, con sinergias nulas o incluso negativas. Es un efecto contable sin contenido económico y, sin embargo, sigue siendo uno de los argumentos más usados en presentaciones a inversores." },
            { t: "Descontar los flujos del objetivo al WACC del comprador", d: "La tasa debe reflejar el riesgo del negocio adquirido, no el del comprador. Es el error de la ficha 7.05 aplicado a una adquisición, y sobrevalora sistemáticamente los objetivos más arriesgados que el negocio de origen." },
            { t: "Incluir sinergias en el valor autónomo del objetivo", d: "El valor autónomo es lo que la empresa vale por sí sola. Las sinergias son lo que justifica la prima. Meterlas en el valor base y después añadir prima encima paga dos veces por lo mismo." },
            { t: "Confiar en las sinergias de ingreso", d: "Dependen del comportamiento de clientes que ninguna de las dos empresas controla y se materializan tarde o no se materializan. Las operaciones que funcionan se sostienen sobre sinergias de coste identificadas y cuantificadas; las de ingreso deberían tratarse como opcionalidad, no como base del precio." },
            { t: "Olvidar los costes de integración", d: "Sistemas informáticos, indemnizaciones, consultores, rebranding y sobre todo la distracción de la dirección durante dos o tres años. Se subestiman con la misma regularidad con que se sobreestiman las sinergias, y ambos sesgos empujan en la misma dirección." },
            { t: "Diversificar para reducir riesgo", d: "El accionista puede diversificar por su cuenta comprando acciones de ambos negocios, y mucho más barato que pagando una prima de control. La diversificación conglomeral rara vez crea valor y suele cotizar con descuento." },
            { t: "No fijar un precio máximo antes de negociar", d: "El techo racional es el valor autónomo más las sinergias. Sin ese límite escrito de antemano, la dinámica competitiva y el compromiso público con la operación llevan a superarlo casi siempre." },
            { t: "Anunciar el pago en acciones como si el precio fuera fijo", d: "El valor de las acciones entregadas incorpora parte de las sinergias, así que el precio efectivo es superior al anunciado. Hay que resolver el precio y el valor combinado simultáneamente, no de forma secuencial." },
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
            "El SEC 2010 tiene una posición muy clara sobre las fusiones que contrasta con la atención que reciben en la prensa económica.",
          ],
          lista: [
            "Una adquisición es una **operación financiera**: compra de participaciones en el capital (F.51) a cambio de efectivo o de otras acciones. **No es formación de capital y no genera producción ni PIB.** Cambia de manos la propiedad de unos activos que ya existían.",
            "El SEC sí reconoce el **fondo de comercio y los activos de comercialización adquiridos (AN.223)** como activo no producido, pero solo cuando se materializa en una transacción efectiva. El fondo de comercio generado internamente no existe, igual que en el PGC.",
            "Cuando la operación es **transfronteriza**, la unidad adquirida sigue siendo residente de su economía y no se traslada de sector ni de país: solo cambia la nacionalidad de quien la controla. El efecto aparece en la posición de inversión internacional, no en el PIB.",
            "Lo que sí puede afectar a las cuentas nacionales es la **reorganización posterior**: si la fusión traslada funciones, propiedad intelectual o beneficios entre países, cambian los flujos de producción, de rentas primarias y de servicios, a veces de forma abrupta. Los casos de relocalización de activos intangibles por grandes multinacionales han producido saltos de dos dígitos en el PIB de algunas economías pequeñas.",
          ],
          cierre:
            "La distinción útil es esta: una fusión es a la economía lo que una venta de casa es al parque de viviendas. Cambia el propietario, no el stock. Y sin embargo, cuando la operación mueve activos intangibles entre jurisdicciones, puede alterar profundamente lo que las cuentas nacionales de un país registran como su propia producción.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "B vale 300 M€, las sinergias son 80 M€ y el comprador ofrece 360 M€. ¿Crea valor?", a: "Sí, pero poco. La prima es de 60 M€ frente a 80 M€ de sinergias: el comprador se queda con 20 M€ y el vendedor con 60 M€. El precio máximo racional es 380 M€." },
            { q: "¿Por qué un pago en acciones reduce la ganancia del comprador respecto al mismo importe en efectivo?", a: "Porque las acciones entregadas ya incorporan parte de las sinergias, de modo que el vendedor recibe más valor del anunciado. En efectivo el precio queda fijado y toda la sinergia por encima de la prima se la queda el comprador." },
            { q: "Una operación mejora el beneficio por acción del comprador. ¿Es buena señal?", a: "No dice nada. Comprar una empresa con un PER inferior al propio mejora el BPA de forma aritmética aunque las sinergias sean nulas. Es un efecto contable sin contenido económico." },
            { q: "¿Por qué el ganador de una subasta suele ser quien peor ha estimado?", a: "Por la maldición del ganador: si las estimaciones de los pujadores se distribuyen alrededor del valor real, gana el más optimista, que es sistemáticamente el que más se ha pasado. Es una propiedad del mecanismo, no un error individual." },
            { q: "¿Aporta una fusión al PIB del año en que se produce?", a: "No. Es una operación financiera de compraventa de participaciones: cambia de manos la propiedad de activos existentes. Solo la reorganización posterior, si traslada funciones o intangibles entre países, altera los flujos que las cuentas nacionales registran." },
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
              q: "Una adquisición mejora el beneficio por acción del comprador. ¿Prueba que crea valor?",
              opciones: [
                "Sí: el BPA es la medida directa de lo que gana el accionista",
                "No, salvo que el pago se realice en efectivo",
                "Sí, siempre que la mejora se mantenga más de un ejercicio",
                "No: comprar una empresa con un PER inferior al propio mejora el BPA por aritmética, incluso con sinergias nulas o negativas",
              ],
              correcta: 3,
              porque: [
                "El BPA es un cociente, y se puede mover cambiando el denominador sin que el negocio mejore en nada.",
                "La forma de pago cambia la magnitud del efecto, no su naturaleza.",
                "El efecto aritmético es permanente mientras dure la diferencia de PER: su persistencia no lo convierte en creación de valor.",
                "Es un efecto contable sin contenido económico: se emiten pocas acciones caras a cambio de muchos beneficios baratos, y el cociente sube solo.",
              ],
            },
            {
              q: "¿A qué tasa deben descontarse los flujos de la empresa que se quiere adquirir?",
              opciones: [
                "A la media de los WACC de ambas empresas, ponderada por tamaño",
                "A una tasa que refleje el riesgo del negocio adquirido",
                "Al WACC del comprador, que es quien realiza la inversión",
                "Al WACC del comprador tras la operación, ya incorporada la nueva deuda",
              ],
              correcta: 1,
              porque: [
                "Promediar dos tasas no produce la que corresponde al riesgo del objetivo; solo lo diluye.",
                "La tasa depende del riesgo de los flujos que se descuentan, y esos flujos los genera el negocio comprado, no el que compra.",
                "Es el error de la ficha 7.05 aplicado a una adquisición: si el comprador es más estable, su WACC es menor y sobrevalora sistemáticamente el objetivo.",
                "La estructura financiera posterior afecta al WACC del grupo, pero el riesgo operativo del negocio adquirido sigue siendo el suyo.",
              ],
            },
            {
              q: "¿Dónde deben incorporarse las sinergias esperadas de una operación?",
              opciones: [
                "En el valor terminal, que es donde se materializan",
                "En la tasa de descuento, rebajándola para recoger la mejora esperada",
                "Fuera de él: el valor autónomo es lo que la empresa vale sola, y las sinergias son lo que justifica la prima",
                "En el valor autónomo del objetivo, para reflejar su potencial real",
              ],
              correcta: 2,
              porque: [
                "Algunas se materializan tarde, pero eso no autoriza a esconderlas en un parámetro: deben estimarse y valorarse por separado.",
                "Rebajar la tasa mezcla riesgo con rentabilidad esperada y hace opaco cuánto se está pagando por las sinergias.",
                "Y de ahí sale el techo racional del precio: valor autónomo más sinergias. Sin ese límite escrito antes de negociar, la dinámica competitiva empuja por encima.",
                "Meterlas en el valor base y añadir después la prima encima paga dos veces por lo mismo.",
              ],
            },
            {
              q: "Una operación se justifica por la diversificación: los dos negocios no están correlacionados. ¿Reduce eso el riesgo para el accionista?",
              opciones: [
                "Sí, y además reduce el coste de capital del grupo",
                "Sí: la combinación estabiliza los resultados del grupo",
                "No, porque la diversificación exige que los negocios estén correlacionados negativamente",
                "No de forma que le compense: el accionista puede diversificar comprando acciones de ambas, y mucho más barato que pagando una prima de control",
              ],
              correcta: 3,
              porque: [
                "El efecto sobre el coste de capital, si existe, es pequeño y no cubre una prima de control que suele rondar el 30 %.",
                "Estabiliza los resultados contables del grupo, cierto. Pero el accionista no necesitaba pagar por eso.",
                "Basta con que no estén perfectamente correlacionados. El problema no es técnico: es que el servicio prestado no vale lo que cuesta.",
                "La diversificación conglomeral es una de las justificaciones más habituales y peor fundadas: hace el trabajo que el inversor ya puede hacer solo, cobrándole una prima por ello.",
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
            { ref: "Damodaran, Investment Valuation", nota: "los capítulos de valoración de sinergias y control, con la descomposición del precio máximo racional." },
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "el capítulo de fusiones, con la evidencia empírica sobre rendimientos de compradores y vendedores." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "el tratamiento del pago en efectivo frente a acciones y de la falacia del crecimiento del beneficio por acción." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 5 y 15", nota: "operaciones financieras y activos no producidos, incluido el fondo de comercio adquirido." },
          ],
        },
      ],
    },
  ],
};
