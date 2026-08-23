/* Ficha 6.08 — Analisis del estado de flujos de efectivo.
   Cierra el caso Distribuciones Arlanza iniciado en 6.06. */

export default {
  codigo: "6.08",
  titulo: "Análisis del estado de flujos de efectivo",
  nivel: 3,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "4 h",
  nucleo:
    "El beneficio depende de estimaciones; la caja se mueve o no se mueve. La combinación de signos de los tres flujos —explotación, inversión y financiación— identifica en qué fase de su vida está una empresa, y la divergencia sostenida entre beneficio y flujo operativo es la señal de alerta más fiable del análisis contable.",
  requiere: "5.10 Cuentas anuales · 6.06 Análisis patrimonial",
  abre: "6.09 Calidad del resultado · 7.04 Flujos de caja libres",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El estado de flujos de efectivo tiene una virtud que ningún otro documento contable posee: **su magnitud es verificable**. El saldo de tesorería a 31 de diciembre es un hecho comprobable contra un extracto bancario. El resultado, en cambio, depende de vidas útiles estimadas, de deterioros valorados con hipótesis propias y de provisiones calculadas sobre probabilidades. Eso no hace al beneficio menos útil —mide algo que la caja no mide— pero sí lo hace más manipulable.",
            "El modelo español calcula el flujo de explotación por el **método indirecto**: parte del resultado antes de impuestos y deshace todo lo que no fue caja. Esa construcción, que a primera vista parece un rodeo, es precisamente lo que la hace informativa, porque **muestra el camino** desde el devengo hasta la tesorería en dos bloques bien diferenciados.",
            "El primer bloque son los **ajustes por partidas sin movimiento de efectivo**: amortizaciones, deterioros, variación de provisiones, resultados por enajenación. Se suman de vuelta porque redujeron el beneficio sin salir de la caja. El segundo bloque son los **cambios en el capital corriente**: existencias, clientes y proveedores. Aquí es donde vive el fenómeno que arruina empresas rentables, porque un beneficio ya reconocido puede estar íntegramente inmovilizado en almacén y en facturas pendientes de cobro.",
            "La lectura más rápida y más potente del documento no es cuantitativa sino cualitativa: **la combinación de signos** de los tres flujos. Una empresa madura y sana genera caja en explotación, invierte menos de lo que genera y devuelve el sobrante a acreedores y accionistas: positivo, negativo, negativo. Una empresa en crecimiento genera caja pero invierte más y se financia: positivo, negativo, positivo. Una empresa en dificultades no genera caja, desinvierte para sobrevivir y aun así se endeuda: negativo, positivo, positivo. Cada patrón cuenta una historia distinta y ninguno requiere calcular un solo ratio.",
            "Sobre esta base se construye el **flujo de caja libre**, que es el flujo de explotación menos las inversiones necesarias para mantener la capacidad. Es la cifra que de verdad importa: lo que queda disponible para acreedores y accionistas después de sostener el negocio. Y es también el punto exacto donde el análisis de estados financieros conecta con la valoración de empresas del bloque 7.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Explotación / Inversión / Financiación", "Interpretación", "Qué comprobar"],
          filas: [
            { nom: "+ − −", sub: "Madura y saneada", cols: ["Genera, invierte con moderación y devuelve", "Que la inversión baste para mantener capacidad"] },
            { nom: "+ − +", sub: "En crecimiento", cols: ["Genera pero invierte más y se financia", "Que el flujo de explotación crezca con el negocio"] },
            { nom: "+ + −", sub: "En reestructuración o desinversión", cols: ["Vende activos y reduce deuda", "Si vende lo accesorio o lo esencial"] },
            { nom: "− − +", sub: "Arranque o expansión agresiva", cols: ["Quema caja y se financia", "Cuánta pista de aterrizaje queda"] },
            { nom: "− + +", sub: "En dificultades", cols: ["No genera, vende y se endeuda", "Situación de alerta seria"] },
          ],
          nota: "El signo del flujo de explotación es el dato dominante. Una empresa que no genera caja con su actividad depende de terceros para existir, y esa dependencia tiene fecha de caducidad.",
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
            { nom: "Flujo de explotación (indirecto)", sub: "Del devengo a la caja en dos bloques.", cols: ["FEE = RAI + Ajustes sin caja − Δ NOF + Otros flujos"] },
            { nom: "Necesidades operativas de fondos", sub: "El bloque que absorbe caja al crecer.", cols: ["NOF = Existencias + Clientes − Proveedores"] },
            { nom: "Flujo de caja libre", sub: "Lo disponible tras sostener el negocio.", cols: ["FCF = FEE − Inversión en mantenimiento"] },
            { nom: "Calidad del beneficio", sub: "Debería estar cómodamente por encima de 1.", cols: ["Q = Flujo de explotación / Resultado neto"] },
            { nom: "Cobertura de la inversión", sub: "Si la actividad financia su propia renovación.", cols: ["CI = Flujo de explotación / Pagos por inversión"] },
            { nom: "Capacidad de devolución", sub: "Años de flujo necesarios para cancelar la deuda.", cols: ["Años = Deuda financiera neta / Flujo de explotación"] },
            { nom: "Cuadre obligatorio", sub: "La comprobación que valida todo el estado.", cols: ["Δ Tesorería = FEE + FE inversión + FE financiación"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: Arlanza, tercera perspectiva",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Con los dos balances de la ficha 6.06 y la cuenta de resultados del año N se puede reconstruir el estado de flujos completo. Recordatorio de los datos: resultado 48.000 €, amortización 52.000 €, gastos financieros 12.000 €, impuesto 16.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Flujos de explotación", "Cálculo", "Importe"],
          filas: [
            ["Resultado del ejercicio", "—", "48.000 €"],
            ["Amortización del inmovilizado", "sin salida de caja", "+52.000 €"],
            ["Gastos financieros", "se reclasifican abajo", "+12.000 €"],
            ["Gasto por impuesto", "se reclasifica abajo", "+16.000 €"],
            { celdas: ["Resultado ajustado", "—", "128.000 €"], clase: "total" },
            ["Aumento de existencias", "180.000 − 140.000", "−40.000 €"],
            ["Aumento de clientes", "240.000 − 190.000", "−50.000 €"],
            ["Aumento de proveedores", "220.000 − 190.000", "+30.000 €"],
            { celdas: ["Variación de las NOF", "—", "−60.000 €"], clase: "total" },
            ["Intereses pagados", "—", "−12.000 €"],
            ["Impuesto pagado", "—", "−16.000 €"],
            { celdas: ["Flujo de explotación", "128.000 − 60.000 − 28.000", "40.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Inversión y financiación", "Cálculo", "Importe"],
          filas: [
            ["Pagos por adquisición de inmovilizado", "450.000 − 430.000 + 52.000", "−72.000 €"],
            { celdas: ["Flujo de inversión", "—", "−72.000 €"], clase: "total" },
            ["Aumento de deudas a largo plazo", "180.000 − 160.000", "+20.000 €"],
            ["Aumento de deudas a corto plazo", "92.000 − 80.000", "+12.000 €"],
            ["Dividendos pagados", "resultado N−1 no llevado a reservas", "−30.000 €"],
            { celdas: ["Flujo de financiación", "—", "+2.000 €"], clase: "total" },
            { celdas: ["Variación de tesorería", "40.000 − 72.000 + 2.000", "−30.000 €"], clase: "total" },
          ],
          nota: "El cuadre confirma la reconstrucción: el efectivo pasó de 60.000 € a 30.000 €, es decir **−30.000 €**. Si no cuadrara, habría un error en alguna variación de balance o una partida omitida.",
        },
        {
          tipo: "tabla",
          cabecera: ["Indicador", "Valor", "Lectura"],
          filas: [
            ["Calidad del beneficio (FEE / Resultado)", "0,83", "Por debajo de 1: el beneficio no llega a caja"],
            ["Flujo de explotación frente a amortización", "40.000 vs 52.000", "No cubre ni la reposición del inmovilizado"],
            ["Cobertura de la inversión", "0,56", "Casi la mitad de la inversión se financia fuera"],
            ["Flujo de caja libre", "40.000 − 72.000", "−32.000 €"],
            ["Deuda financiera neta / FEE", "242.000 / 40.000", "6,1 años"],
          ],
          nota: "Y aquí está el retrato que ni el balance ni la cuenta de resultados mostraban. Arlanza declara 48.000 € de beneficio, reparte 30.000 € de dividendo y su actividad genera 40.000 € de caja, insuficientes incluso para reponer los 52.000 € que amortiza. **Está repartiendo dividendos con dinero prestado.**",
        },
      ],
    },
    {
      titulo: "Caso práctico: la conversación que el estado de flujos obliga a tener",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Con los tres análisis sobre la mesa, el diagnóstico de Arlanza es coherente y no especialmente dramático, pero sí exige decisiones. Ha crecido un 20 % en ventas, su margen se ha deteriorado dos puntos, su ciclo de caja consume 54 días y ha financiado un año de inversión y dividendos vaciando la caja y aumentando la deuda.",
            "Ninguno de esos hechos es letal por separado. El problema es la **combinación con persistencia**: si el año siguiente repite el mismo patrón, la caja ya no está para absorberlo y la deuda financiera neta pasaría de seis a más de ocho años de flujo. En ese punto la decisión deja de ser de la empresa y pasa a ser del banco.",
            "**Las tres preguntas que el estado de flujos obliga a formular.** Primera: ¿es el deterioro del margen coyuntural o estructural? Si la empresa ha comprado cuota bajando precios, el crecimiento del 20 % es caro y quizá no repetible. Segunda: ¿los 72.000 € de inversión eran de mantenimiento o de expansión? Si eran de expansión, hay derecho a esperar que el flujo futuro mejore; si eran de mantenimiento, la empresa no genera lo suficiente para sostenerse. Tercera: ¿tiene sentido repartir 30.000 € de dividendo con flujo de caja libre negativo?",
            "**El vínculo con el bloque 7:** el flujo de caja libre negativo no es en sí una mala noticia —toda empresa en expansión lo tiene— siempre que las inversiones que lo provocan tengan valor actual neto positivo. Esa es exactamente la pregunta de la ficha 7.03, y el estado de flujos es el documento que obliga a plantearla en lugar de dejarla implícita.",
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
            { t: "Confundir flujo de explotación con beneficio más amortización", d: "Ese cálculo, muy extendido bajo el nombre de cash flow, ignora por completo la variación del capital corriente. En Arlanza daría 100.000 € frente a los 40.000 € reales. El error crece justo en las empresas que más crecen, que son donde más importa." },
            { t: "Interpretar un flujo de inversión negativo como algo malo", d: "Significa que la empresa está invirtiendo, que es lo normal en un negocio vivo. La señal preocupante es la contraria: un flujo de inversión positivo sostenido indica que se está vendiendo activo, y conviene averiguar si es lo accesorio o lo esencial." },
            { t: "Ignorar el signo conjunto de los tres flujos", d: "El patrón de signos identifica la fase del negocio de un vistazo y sin cálculos. Analizar solo el flujo de explotación deja fuera la información sobre qué está haciendo la empresa con el dinero que genera o que le falta." },
            { t: "Comparar el flujo de explotación de un solo año", d: "Los movimientos de capital corriente son muy volátiles: un cobro grande que se adelanta o se retrasa unos días cruza el cierre y desplaza la cifra. La serie de tres o cuatro años es informativa; un año aislado, poco." },
            { t: "Olvidar que la mayoría de las empresas españolas no lo publican", d: "El estado de flujos solo es obligatorio en el modelo normal. Para el resto hay que reconstruirlo a partir de dos balances y la cuenta de resultados, exactamente como en el ejemplo de esta ficha. Es trabajoso pero factible, y es lo que separa un análisis serio de una lectura superficial." },
            { t: "Tomar el EBITDA por el flujo de caja", d: "El EBITDA excluye amortizaciones, intereses e impuestos, pero también ignora la inversión necesaria para mantener la capacidad y la variación del circulante. En negocios intensivos en capital o en circulante, la diferencia entre EBITDA y flujo de caja libre puede ser de un orden de magnitud." },
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
            "La secuencia de cuentas del SEC 2010 recorre el mismo camino que el estado de flujos, y con la misma estructura tripartita.",
          ],
          lista: [
            "El **ahorro bruto (B.8g)** de un sector es el análogo del flujo de explotación: lo que queda de la renta disponible tras el consumo, disponible para invertir.",
            "La **cuenta de capital** juega el papel del flujo de inversión: el ahorro menos la formación bruta de capital da la **capacidad o necesidad de financiación (B.9)**.",
            "La **cuenta financiera** es el análogo del flujo de financiación: muestra con qué instrumentos se cubre esa necesidad —préstamos, valores, participaciones— o dónde se coloca el excedente.",
            "El **cuadre entre B.9 no financiera y B.9 financiera** es exactamente la misma comprobación que la variación de tesorería del estado de flujos: dos caminos independientes que deben llegar a la misma cifra. La discrepancia estadística entre ambas es un indicador de calidad de las cuentas.",
            "Y el patrón de signos también se lee igual a escala sectorial: las sociedades no financieras españolas pasaron de necesidad de financiación estructural antes de 2008 a capacidad de financiación sostenida después, lo que en el lenguaje de esta ficha equivale al tránsito de «+ − +» a «+ − −».",
          ],
          cierre:
            "Si vienes de las cuentas trimestrales, esta ficha te resultará familiar en su arquitectura. La diferencia es que en cuentas nacionales el cuadre entre ambos caminos es un problema de calidad estadística, mientras que en una empresa es una identidad contable exacta que debe cerrarse al céntimo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Resultado 48.000 €, amortización 52.000 €, aumento de NOF 60.000 €. ¿Cuánto es el flujo de explotación, ignorando intereses e impuestos?", a: "40.000 €. La regla popular «beneficio más amortización» daría 100.000 €, más del doble. La variación del capital corriente es la partida que ese atajo ignora y la que más pesa en empresas que crecen." },
            { q: "Una empresa presenta flujos +, +, −. ¿Qué está pasando?", a: "Genera caja con su actividad, vende activos y reduce deuda. Es un patrón de reestructuración o desinversión. La pregunta clave es si está vendiendo activos accesorios o los que sostienen el negocio." },
            { q: "El flujo de explotación es de 40.000 € y la amortización de 52.000 €. ¿Qué implica?", a: "Que la actividad no genera lo suficiente ni para reponer el inmovilizado que consume. Sostenida en el tiempo, esa situación descapitaliza la empresa aunque declare beneficios." },
            { q: "¿Por qué el estado de flujos es más difícil de manipular que la cuenta de resultados?", a: "Porque su magnitud es verificable contra los extractos bancarios y no depende de estimaciones. El beneficio incorpora vidas útiles, deterioros y provisiones, todos ellos sujetos a juicio." },
            { q: "¿Cuál es el análogo del flujo de explotación en el SEC 2010?", a: "El ahorro bruto (B.8g). Y la capacidad o necesidad de financiación (B.9) equivale al flujo de caja libre: lo que queda tras invertir, positivo o negativo." },
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
            { ref: "Archel Domench et al., Estados contables", nota: "la elaboración del estado de flujos por el método indirecto, paso a paso y con el modelo oficial." },
            { ref: "Penman, Financial Statement Analysis and Security Valuation", nota: "el análisis del flujo de caja libre y su papel en la valoración. Es donde el bloque 6 desemboca en el 7." },
            { ref: "Faus, Finanzas operativas", nota: "las necesidades operativas de fondos y por qué el crecimiento consume caja, desarrollado con casos españoles." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 8 y 9", nota: "la secuencia de cuentas de capital y financiera, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
