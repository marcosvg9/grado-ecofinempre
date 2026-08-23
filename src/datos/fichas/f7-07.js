/* Ficha 7.07 — Politica de dividendos y retribucion al accionista. */

export default {
  codigo: "7.07",
  titulo: "Política de dividendos y retribución al accionista",
  nivel: 3,
  bloque: "Finanzas corporativas",
  tiempo: "4 h",
  nucleo:
    "En ausencia de fricciones, repartir dividendo o no hacerlo es indiferente: el accionista puede fabricarse el suyo vendiendo acciones. Lo que hace relevante la decisión son los impuestos, la señal que transmite y el papel disciplinario del reparto sobre unos gestores con exceso de caja.",
  requiere: "7.06 Estructura de capital · 7.04 Flujos de caja libres",
  abre: "7.09 Valoración de empresas · 8.04 Renta variable",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El punto de partida es de nuevo un resultado de irrelevancia, y de nuevo su utilidad está en lo que descarta. Sin impuestos ni costes de transacción, un accionista que quiera liquidez puede vender parte de sus acciones, y uno que reciba un dividendo no deseado puede reinvertirlo. **El dividendo casero replica cualquier política**, de modo que la decisión de la empresa no altera su valor. Lo que sí lo altera es la inversión que hace con el dinero, no el momento en que lo devuelve.",
            "Esto tiene una consecuencia que a menudo sorprende: el día que una acción cotiza sin derecho a dividendo, su precio cae aproximadamente en el importe repartido. **El dividendo no es un rendimiento adicional**, es una parte del valor que cambia de forma, de acción a efectivo. Interpretar la rentabilidad por dividendo como una ganancia añadida al precio es un error muy extendido.",
            "En el mundo real la primera fricción son los **impuestos**. En España el dividendo tributa como renta del ahorro en el ejercicio en que se cobra, mientras que la plusvalía por venta de acciones solo tributa cuando el accionista decide vender. Esa asimetría —tributación forzosa frente a tributación diferida y voluntaria— es el argumento fiscal a favor de la recompra de acciones frente al dividendo, y explica buena parte del desplazamiento hacia la recompra observado en las últimas décadas.",
            "La segunda fricción es la **información**. Los gestores conocen las perspectivas del negocio mejor que el mercado, y la política de dividendos es uno de los pocos mecanismos creíbles para comunicarlas, porque cuesta dinero mantenerla. De ahí el comportamiento documentado por Lintner: las empresas **alisan** el dividendo, lo suben solo cuando creen sostenible el nuevo nivel y son extremadamente reacias a recortarlo. Un recorte se interpreta como confesión de dificultades y el castigo bursátil suele ser muy superior al importe ahorrado.",
            "La tercera es el **efecto clientela**: distintos inversores prefieren perfiles distintos de retribución por su situación fiscal o por su necesidad de liquidez. Fondos de pensiones y jubilados valoran el dividendo estable; inversores con tipos marginales altos prefieren la recompra. Una empresa que cambia bruscamente su política provoca rotación de accionistas, con coste aunque el valor no cambie.",
            "Y la cuarta son los **costes de agencia**. Un directivo con mucha caja libre y pocos proyectos rentables tiende a gastarla mal: adquisiciones dudosas, diversificación innecesaria, crecimiento por el crecimiento. El compromiso de repartir obliga a acudir al mercado cada vez que se quiere invertir, y ese escrutinio periódico tiene valor disciplinario. Es el argumento de Jensen, y es el que mejor explica por qué el mercado premia los dividendos en empresas maduras y los penaliza en empresas jóvenes con oportunidades de inversión.",
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
            { nom: "Ratio de reparto (pay-out)", sub: "Qué proporción del beneficio se distribuye.", cols: ["p = Dividendos / Resultado neto"] },
            { nom: "Rentabilidad por dividendo", sub: "No es rendimiento añadido: el precio cae al repartir.", cols: ["y = Dividendo por acción / Precio"] },
            { nom: "Cobertura del dividendo por caja", sub: "El indicador que más informa sobre su sostenibilidad.", cols: ["c = Flujo de caja libre / Dividendos"] },
            { nom: "Crecimiento sostenible", sub: "Cuánto puede crecer sin ampliar capital ni endeudarse más.", cols: ["g = ROE × (1 − p)"] },
            { nom: "Precio tras el dividendo", sub: "La caída teórica en la fecha de descuento.", cols: ["P_ex ≈ P_cum − D"] },
            { nom: "Efecto de una recompra", sub: "El precio no cae: se reduce el número de acciones.", cols: ["N' = N − Importe / P"] },
          ],
          nota: "La fórmula del **crecimiento sostenible** es la bisagra entre esta ficha y la valoración: una empresa que reparte todo su beneficio no puede crecer sin financiación externa, y ese límite condiciona directamente la g que se puede usar en el valor terminal de la ficha 7.09.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dividendo frente a recompra",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa tiene **1.000.000 de acciones** cotizando a **20 €**, es decir 20 millones de valor, e incluye entre sus activos **2 millones de caja excedente** que quiere devolver. Un accionista posee **100 acciones**. Tipo de tributación del ahorro: **19 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Dividendo de 2 €/acción", "Cálculo", "Resultado"],
          filas: [
            ["Precio tras el reparto", "20 − 2", "18 €"],
            ["Valor de las acciones del inversor", "100 × 18", "1.800 €"],
            ["Dividendo bruto cobrado", "100 × 2", "200 €"],
            ["Retención fiscal", "200 × 19 %", "−38 €"],
            { celdas: ["Patrimonio total del inversor", "1.800 + 162", "1.962 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Recompra de 2 millones", "Cálculo", "Resultado"],
          filas: [
            ["Acciones recompradas", "2.000.000 / 20", "100.000"],
            ["Acciones en circulación", "1.000.000 − 100.000", "900.000"],
            ["Valor de la empresa tras la recompra", "20.000.000 − 2.000.000", "18.000.000 €"],
            ["Precio por acción", "18.000.000 / 900.000", "20 €"],
            ["Impuesto pagado por quien no vende", "—", "0 €"],
            { celdas: ["Patrimonio total del inversor", "100 × 20", "2.000 €"], clase: "total" },
          ],
          nota: "**38 € de diferencia**, exactamente el impuesto. Con el dividendo, el precio cae y el accionista tributa aunque no quisiera cobrar; con la recompra, el precio se mantiene porque hay menos acciones repartiéndose el mismo valor, y quien no vende no tributa hasta que decida hacerlo. La ventaja no es que la recompra «suba la acción»: es que **traslada al accionista la decisión de cuándo realizar y tributar**.",
        },
        {
          tipo: "parrafos",
          items: [
            "El caso de **Arlanza**, la empresa que venimos siguiendo desde la ficha 6.06, ilustra el otro lado del problema. Repartió **30.000 €** de dividendo sobre un resultado de 60.000 €: un pay-out del 50 %, aparentemente prudente. Pero su flujo de caja libre fue de **−23.000 €**, de modo que la cobertura por caja es negativa y el dividendo se pagó con deuda nueva. El ratio de reparto sobre beneficio parecía razonable y el indicador relevante decía lo contrario.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el dividendo como compromiso irreversible",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa lleva doce años subiendo el dividendo. El ejercicio ha sido malo, el flujo de caja libre no cubre el reparto y el consejo debate tres opciones: mantenerlo endeudándose, recortarlo o sustituirlo por una recompra menor.",
            "**Mantenerlo endeudándose** preserva la señal a corto plazo y traslada el problema al balance. Es defendible si la caída es transitoria y la posición financiera lo soporta, y es exactamente lo que hizo Arlanza a pequeña escala. Es insostenible si se repite: el dividendo pasa a financiarse con deuda de forma estructural y la empresa se descapitaliza mientras aparenta normalidad.",
            "**Recortarlo** es lo correcto si la caída es estructural, y es lo que casi nadie hace a tiempo. La evidencia sobre la reacción del mercado es contundente: los recortes se castigan con caídas muy superiores al importe ahorrado, porque el mercado los lee como información sobre el futuro y no como una decisión de tesorería. Ese castigo es precisamente lo que hace creíble la señal, y por tanto no es una anomalía a corregir sino el mecanismo funcionando.",
            "**Sustituirlo por una recompra** es la vía intermedia y explica buena parte del desplazamiento observado en los mercados desarrollados. Una recompra no genera expectativa de repetición: se anuncia un programa, se ejecuta y se acaba. Esa **flexibilidad** es su principal ventaja sobre el dividendo, más incluso que la fiscal. El coste es que la señal también es más débil, justamente porque no compromete a nada.",
            "**Las dos preguntas previas a cualquier reparto.** Primera: ¿hay proyectos con VAN positivo sin financiar? Si los hay, repartir destruye valor, y esa es la respuesta directa aunque incómoda. Segunda: ¿cubre el flujo de caja libre el reparto de forma recurrente? Si no lo cubre, el dividendo no es sostenible por mucho que el pay-out sobre beneficio parezca conservador. **El beneficio no paga dividendos; la caja sí.**",
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
            { t: "Tratar la rentabilidad por dividendo como rendimiento añadido", d: "El precio cae aproximadamente en el importe repartido el día que la acción cotiza sin derecho a él. El dividendo transforma valor de acción en efectivo, no lo crea. Sumar la rentabilidad por dividendo a la revalorización del precio ya descontado del dividendo lo cuenta dos veces." },
            { t: "Evaluar la sostenibilidad por el pay-out sobre beneficio", d: "El beneficio incorpora amortizaciones y estimaciones; el dividendo se paga con caja. Una empresa con pay-out del 50 % sobre beneficio puede estar financiando el reparto con deuda si su flujo de caja libre es negativo. El indicador es la cobertura por flujo libre." },
            { t: "Buscar rentabilidad por dividendo alta sin más", d: "Un dividendo elevado sobre un precio que ha caído produce una rentabilidad aparente atractiva que a menudo anticipa un recorte. La rentabilidad por dividendo alta es tan frecuentemente señal de problema como de oportunidad." },
            { t: "Interpretar toda recompra como creación de valor", d: "Recomprar acciones sobrevaloradas destruye valor para quien se queda, igual que comprar caro cualquier otro activo. Y recomprar para compensar la dilución de la retribución en acciones de los directivos no devuelve nada al accionista: solo mantiene el número de títulos." },
            { t: "Cambiar bruscamente de política sin explicarlo", d: "Provoca rotación de la base accionarial por el efecto clientela, con coste de transacción y volatilidad, aunque el valor fundamental no cambie. Los cambios de política se comunican y se justifican con antelación." },
            { t: "Repartir teniendo proyectos con VAN positivo sin financiar", d: "Es el único caso en que la decisión de dividendo destruye valor de forma inequívoca. La prioridad es invertir en lo que rinde por encima del coste de capital; el reparto es lo que se hace con el excedente, no antes." },
            { t: "Confundir la señal con el compromiso", d: "Subir el dividendo transmite confianza precisamente porque es difícil de deshacer. Un directivo que sube el dividendo sin base para sostenerlo compra un año de tranquilidad a cambio de un castigo mayor cuando tenga que recortarlo." },
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
            "El SEC 2010 tiene una regla sobre dividendos que resuelve exactamente el problema del caso práctico y que tiene consecuencias directas sobre el déficit público.",
          ],
          lista: [
            "Los **dividendos (D.42)** son renta de la propiedad: un empleo de la sociedad que los paga y un recurso del propietario. Se registran en el momento en que la acción cotiza sin derecho a ellos.",
            "La regla clave es la de los **superdividendos**. Un dividendo que excede de forma manifiesta la renta empresarial del período —porque se paga con reservas acumuladas o con el producto de la venta de activos— **no se registra como renta de la propiedad**, sino como **retirada de capital**, es decir, una operación financiera (F.5).",
            "La consecuencia práctica es sustancial: cuando una administración pública recibe un dividendo extraordinario de una empresa pública, ese ingreso **no reduce el déficit** si se clasifica como retirada de capital. La regla existe precisamente para impedir que se maquille el déficit vaciando las reservas de las sociedades públicas.",
            "La contrapartida conceptual es notable: el SEC aplica de forma sistemática la distinción que el caso práctico de esta ficha plantea, entre repartir renta generada en el período y repartir capital acumulado. La contabilidad de empresa no obliga a esa distinción, y por eso hace falta mirar el flujo de caja libre para detectarla.",
          ],
          cierre:
            "El paralelismo se puede formular así: lo que en cuentas nacionales es la regla del superdividendo, en análisis de empresa es el dividendo con cobertura de caja negativa. Ambas identifican el mismo hecho —se está repartiendo algo que no se ha generado— y solo una de las dos lo hace de forma automática.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Una acción cotiza a 30 € y reparte 1,50 € de dividendo. ¿A cuánto cotiza al día siguiente, sin otras noticias?", a: "A unos 28,50 €. El dividendo no añade valor: transforma en efectivo una parte del que ya estaba en la acción. Por eso la rentabilidad por dividendo no es un rendimiento adicional al del precio." },
            { q: "ROE 15 % y pay-out del 40 %. ¿Cuál es el crecimiento sostenible?", a: "g = 15 % × 0,60 = 9 %. Es lo que puede crecer reinvirtiendo su beneficio sin ampliar capital ni aumentar el apalancamiento. Crecer más exigiría financiación externa." },
            { q: "¿Por qué una recompra es fiscalmente más eficiente que un dividendo?", a: "Porque quien no vende no tributa: la plusvalía queda diferida hasta que el accionista decida realizarla. El dividendo obliga a tributar en el ejercicio, quiera o no el accionista recibir liquidez." },
            { q: "Arlanza reparte 30.000 € con un pay-out del 50 %. ¿Es sostenible?", a: "No, con la información disponible. Su flujo de caja libre fue de −23.000 €, así que el dividendo se financió con deuda nueva. El pay-out sobre beneficio parecía prudente y el indicador relevante —la cobertura por caja— decía lo contrario." },
            { q: "¿Qué es un superdividendo en el SEC 2010 y por qué importa?", a: "Un reparto que excede claramente la renta empresarial del período, pagado con reservas o con la venta de activos. Se clasifica como retirada de capital, no como renta de la propiedad, y por tanto no reduce el déficit de la administración que lo cobra." },
          ],
        },
      ],
    },
    {
      titulo: "Para profundizar",
      contenido: [
        {
          tipo: "fuentes",
          items: [
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "el capítulo de política de dividendos, con la irrelevancia, la señalización y la evidencia empírica." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "el tratamiento comparado de dividendo y recompra con la fiscalidad explícita." },
            { ref: "Damodaran, Applied Corporate Finance", nota: "el análisis de sostenibilidad del dividendo y la comparación con el flujo de caja libre para el accionista." },
            { ref: "Manual sobre el déficit y la deuda públicos de Eurostat", nota: "la regla de los superdividendos y su aplicación a las empresas públicas." },
          ],
        },
      ],
    },
  ],
};
