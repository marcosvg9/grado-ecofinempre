/* Ficha 8.10 — Gestion de riesgos: VaR, cobertura y regulacion bancaria. */

export default {
  codigo: "8.10",
  titulo: "Gestión de riesgos: VaR, cobertura y regulación bancaria",
  nivel: 4,
  bloque: "Mercados financieros e inversión",
  tiempo: "6 h",
  nucleo:
    "El valor en riesgo dice cuánto se pierde en el peor día normal y calla sobre los días anormales, que son los que quiebran entidades. Toda la evolución de la gestión de riesgos desde 2008 consiste en dejar de confiar en una sola cifra y complementarla con medidas de cola, pruebas de tensión y capital.",
  requiere: "8.05 Riesgo y diversificación · 8.02 Duración · 8.01 Sistema financiero",
  abre: "10.03 Sistema fiscal · 3.08 Política monetaria",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de medir hay que clasificar, porque las cuatro grandes familias de riesgo exigen instrumentos distintos. El **riesgo de mercado** es la pérdida por variación de precios, tipos o divisas. El **riesgo de crédito** es la pérdida por incumplimiento de una contraparte. El **riesgo de liquidez** es la imposibilidad de atender pagos o de deshacer posiciones sin asumir pérdidas grandes. Y el **riesgo operacional** recoge fallos de procesos, personas, sistemas o acontecimientos externos. Las crisis suelen empezar en uno y propagarse a los demás.",
            "El **valor en riesgo** se impuso en los años noventa por una virtud práctica: resume la exposición de una cartera heterogénea en un solo número con unidades comprensibles. Su definición es precisa: la pérdida que no se superará con una probabilidad determinada en un horizonte determinado. Un VaR diario al 99 % de un millón de euros significa que en el 99 % de los días la pérdida será inferior a esa cifra. **No significa que la pérdida máxima sea un millón**, y confundir ambas cosas es el error más extendido y más caro.",
            "Se calcula por tres vías. La **paramétrica** supone una distribución, normalmente normal, y usa la volatilidad estimada; es rápida y falla precisamente donde importa, porque las rentabilidades reales tienen colas más gruesas que la normal. La **histórica** aplica las variaciones observadas en el pasado a la cartera actual, sin suponer distribución, y a cambio depende por completo de que el pasado contenga escenarios relevantes. Y la de **simulación de Montecarlo** genera escenarios a partir de un modelo, lo que da flexibilidad y traslada el problema a la elección del modelo.",
            "Las críticas al VaR son estructurales, no de calibración. **No dice nada sobre la magnitud de las pérdidas más allá del umbral**: dos carteras con idéntico VaR pueden perder tres millones o trescientos en el 1 % restante. Y matemáticamente **no es subaditivo**: puede ocurrir que el VaR de una cartera combinada supere a la suma de los VaR individuales, lo que contradice la idea de que diversificar reduce el riesgo. Por eso se ha ido imponiendo el **déficit esperado**, que promedia las pérdidas en la cola y sí cumple las propiedades de una medida coherente de riesgo. La reforma del marco de riesgo de mercado de Basilea lo adoptó como medida de referencia.",
            "La **regulación bancaria** traduce todo esto en requisitos. Basilea I fijó un capital mínimo sobre activos ponderados por riesgo. Basilea II añadió tres pilares —requisitos mínimos, revisión supervisora y disciplina de mercado— y permitió modelos internos. Y **Basilea III**, tras 2008, endureció la definición de capital, introdujo colchones de conservación y anticíclicos, añadió un ratio de apalancamiento sin ponderar para evitar el arbitraje de ponderaciones, y por primera vez estableció requisitos explícitos de liquidez a corto y de financiación estable a largo.",
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
            { nom: "VaR paramétrico", sub: "Supone normalidad. z al 99 % es 2,326.", cols: ["VaR = z_α × σ × V"] },
            { nom: "Escalado temporal", sub: "Válido solo si las rentabilidades son independientes.", cols: ["VaR_T = VaR_1día × √T"] },
            { nom: "Déficit esperado", sub: "Media de las pérdidas que superan el VaR.", cols: ["ES = E[L | L > VaR]"] },
            { nom: "Déficit esperado bajo normalidad", sub: "φ es la densidad normal.", cols: ["ES = σ × φ(z_α) / (1 − α) × V"] },
            { nom: "Pérdida esperada por crédito", sub: "La descomposición estándar del riesgo de crédito.", cols: ["PE = PD × LGD × EAD"] },
            { nom: "Ratio de capital", sub: "Requisito mínimo más colchones.", cols: ["CET1 = Capital ordinario / Activos ponderados por riesgo"] },
            { nom: "Contraste retrospectivo", sub: "Excepciones esperadas en n días al nivel α.", cols: ["Excepciones esperadas = n × (1 − α)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: VaR y déficit esperado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una cartera de **10 millones de euros** con volatilidad diaria estimada del **1,2 %**, suponiendo rentabilidades normales.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Medida", "Cálculo", "Resultado"],
          filas: [
            ["VaR diario al 95 %", "1,645 × 1,2 % × 10 M", "197.400 €"],
            ["VaR diario al 99 %", "2,326 × 1,2 % × 10 M", "279.100 €"],
            ["VaR a 10 días al 99 %", "279.100 × √10", "882.600 €"],
            { celdas: ["Déficit esperado diario al 99 %", "2,666 × 1,2 % × 10 M", "320.000 €"], clase: "total" },
            ["Diferencia frente al VaR", "320.000 − 279.100", "+15 %"],
          ],
          nota: "El déficit esperado supera al VaR en un **15 %** bajo el supuesto de normalidad. Con colas gruesas —que es lo que se observa en los datos reales— esa diferencia se amplía considerablemente, y ahí está el argumento para haber cambiado de medida en la regulación.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La interpretación correcta.** El VaR al 99 % de 279.100 € significa que se espera superar esa pérdida **dos o tres días al año**, ya que 250 sesiones por el 1 % dan 2,5 excepciones esperadas. No significa que ese sea el peor caso: significa que uno de cada cien días será peor, y no dice cuánto peor.",
            "**El contraste retrospectivo** es la comprobación obligatoria del modelo. Si en 250 días se observan diez excepciones en lugar de dos o tres, el modelo está subestimando el riesgo de forma significativa y hay que revisarlo. La regulación bancaria vincula el número de excepciones a un recargo en el capital exigido, precisamente para que las entidades no tengan incentivo a calibrar modelos benévolos.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Supuesto de normalidad frente a realidad", "Normal", "Observado en mercados"],
          filas: [
            ["Días con pérdida superior a 3 desviaciones", "1 cada 740", "Bastante más frecuente"],
            ["Días con pérdida superior a 5 desviaciones", "1 cada 3,5 millones", "Se observan cada pocas décadas"],
            ["Asimetría de la distribución", "Nula", "Negativa: caídas más bruscas"],
            { celdas: ["Correlaciones en tensión", "Estables", "Aumentan hacia uno"], clase: "total" },
          ],
          nota: "Bajo normalidad, un movimiento de cinco desviaciones típicas ocurriría una vez cada varios millones de sesiones, es decir, prácticamente nunca en la historia de los mercados. Se han observado varios. **El problema no es que el VaR esté mal calculado: es que la distribución supuesta no describe la realidad en la cola**, que es exactamente donde se necesita que la describa.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el VaR falló en 2008",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de la crisis, prácticamente todas las grandes entidades gestionaban su riesgo de mercado con VaR y publicaban cifras modestas. Los modelos estaban bien construidos, auditados y aprobados por los supervisores. Y aun así no anticiparon nada. Entender el porqué es más útil que concluir que el instrumento no sirve.",
            "**Primero, los datos de calibración procedían de un período tranquilo.** Los modelos se estimaban con ventanas de uno a tres años, y esos años habían sido de volatilidad excepcionalmente baja. Un VaR calibrado con datos de calma extrapola calma. La respuesta regulatoria posterior fue exigir un VaR calculado también sobre un período de tensión histórica, no solo sobre el reciente.",
            "**Segundo, las correlaciones se dispararon.** Los modelos suponían diversificación entre clases de activo basándose en correlaciones históricas moderadas, y en la crisis todo cayó a la vez. Es exactamente el fenómeno de la ficha 8.05: **la diversificación que el modelo daba por descontada dejó de existir en el escenario que importaba**.",
            "**Tercero, se ignoró el riesgo de liquidez.** El VaR supone que se puede deshacer la posición al precio de mercado. Cuando desaparecen los compradores, ese precio no existe. Productos que se valoraban con modelos, sin mercado activo, resultaron ser invendibles a cualquier precio próximo al contable.",
            "**Y cuarto, la medida se usó mal.** Una cifra que describe el comportamiento en el 99 % de los días normales se empleó para dimensionar el capital que debía resistir lo excepcional. Ese es un error de uso, no de cálculo. **El VaR responde a la pregunta equivocada** si lo que se quiere saber es cuánto se puede perder en una crisis.",
            "**Qué cambió después.** Adopción del déficit esperado en el marco de riesgo de mercado. Pruebas de tensión con escenarios diseñados por el supervisor, no calibrados con datos históricos. Requisitos explícitos de liquidez. Un ratio de apalancamiento no ponderado, para que ninguna entidad pudiera exhibir un capital regulatorio holgado sobre activos ponderados a la baja por sus propios modelos. Y una idea de fondo: **ningún número resume el riesgo de una entidad**, y la gestión de riesgos consiste en mirar varios a la vez sabiendo qué pregunta responde cada uno.",
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
            { t: "Interpretar el VaR como pérdida máxima", d: "Es el umbral que no se superará con cierta probabilidad, y no dice nada sobre lo que ocurre por encima. Dos carteras con el mismo VaR pueden tener pérdidas de cola radicalmente distintas. Para eso está el déficit esperado." },
            { t: "Calibrar con datos de períodos tranquilos", d: "Una ventana de baja volatilidad produce un VaR bajo justo antes de que deje de serlo. La regulación posterior a 2008 exige incorporar períodos de tensión histórica precisamente para contener este sesgo." },
            { t: "Suponer normalidad sin comprobarlo", d: "Las rentabilidades financieras tienen colas gruesas y asimetría negativa. Bajo normalidad, movimientos que se han observado varias veces deberían ocurrir una vez cada millones de sesiones. El modelo falla donde más importa." },
            { t: "Escalar el VaR por la raíz del tiempo sin condiciones", d: "La regla requiere rentabilidades independientes e idénticamente distribuidas. En períodos de tensión hay autocorrelación y agrupamiento de volatilidad, y el escalado subestima el riesgo a horizontes largos." },
            { t: "Confiar en correlaciones históricas para la cola", d: "Aumentan en las crisis. La diversificación que el modelo da por supuesta se evapora en el escenario para el que se estaba midiendo el riesgo. Las pruebas de tensión deben imponer correlaciones elevadas, no estimarlas." },
            { t: "Ignorar el riesgo de liquidez en la valoración", d: "El VaR supone que se puede vender al precio de mercado. Con activos sin mercado activo o en momentos de tensión, ese supuesto es falso y el modelo no lo detecta." },
            { t: "Gestionar el riesgo con una sola cifra", d: "Ninguna medida resume la exposición de una entidad. VaR, déficit esperado, pruebas de tensión, ratios de liquidez y análisis de concentración responden a preguntas distintas y ninguna sustituye a las demás." },
            { t: "Olvidar que el modelo tiene efectos sobre el comportamiento", d: "Si todas las entidades usan modelos parecidos, reaccionan a la vez ante las mismas señales, lo que amplifica los movimientos que pretendían medir. La medición del riesgo no es neutral respecto al riesgo que mide." },
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
            "La regulación prudencial deja huellas visibles en las cuentas financieras, y una de ellas explica un episodio importante de la crisis del euro.",
          ],
          lista: [
            "En el cálculo de activos ponderados por riesgo, la **deuda soberana del propio Estado en moneda nacional ha ponderado tradicionalmente cero**, es decir, no consume capital regulatorio.",
            "Ese tratamiento genera un incentivo directo a que los bancos acumulen deuda pública nacional, y las **cuentas financieras lo muestran con claridad**: la concentración de deuda soberana en el balance de las entidades de depósito (S.122) creció de forma pronunciada en los países periféricos durante la crisis del euro.",
            "El resultado es el llamado **nexo entre banca y soberano**: la solvencia de los bancos depende del Estado que los respalda y la del Estado depende de los bancos a los que tendría que rescatar. Cada uno amplifica los problemas del otro, y España en 2012 fue un caso de manual.",
            "Las cuentas financieras por sectores son precisamente la herramienta que permite medir esa interconexión, porque muestran las tenencias cruzadas entre sectores institucionales. Es análisis de **riesgo sistémico** hecho con datos de contabilidad nacional.",
            "Y hay una conexión conceptual con la ficha 8.05: lo relevante no es la fragilidad de cada entidad aislada, sino la **correlación entre exposiciones**. Un sistema de entidades individualmente prudentes pero idénticamente expuestas al mismo riesgo no está diversificado en absoluto.",
          ],
          cierre:
            "Es probablemente el mejor ejemplo de por qué la regulación microprudencial —entidad a entidad— no basta, y de por qué se añadió una dimensión macroprudencial que solo se puede analizar con datos agregados por sectores.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El VaR diario al 99 % de una cartera es de 500.000 €. ¿Qué significa exactamente?", a: "Que en el 99 % de los días la pérdida será inferior a esa cifra, es decir, que se espera superarla unas dos o tres veces al año. No dice nada sobre cuánto se pierde en esos días." },
            { q: "¿Por qué el déficit esperado es preferible al VaR?", a: "Porque promedia las pérdidas que superan el umbral, informando de la magnitud de la cola, y porque es subaditivo: el riesgo de una cartera combinada nunca supera a la suma de los individuales, algo que el VaR no garantiza." },
            { q: "Cartera de 5 M€, volatilidad diaria del 1,5 %. ¿VaR diario al 99 %?", a: "2,326 × 1,5 % × 5.000.000 = 174.450 €. A diez días, multiplicando por √10, unos 551.700 €, siempre que las rentabilidades sean independientes." },
            { q: "En 250 días se han observado 9 excepciones al VaR del 99 %. ¿Qué indica?", a: "Que el modelo subestima el riesgo: se esperaban 2 o 3. La regulación vincula el exceso de excepciones a un recargo de capital, para que no haya incentivo a calibrar modelos benévolos." },
            { q: "¿Por qué la ponderación cero de la deuda soberana genera riesgo sistémico?", a: "Porque incentiva a los bancos a concentrar deuda de su propio Estado sin consumo de capital, creando un nexo en el que la solvencia bancaria y la soberana se amplifican mutuamente. Las cuentas financieras por sectores permiten medir esa concentración." },
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
            { ref: "Hull, Risk Management and Financial Institutions", nota: "la referencia completa: VaR, déficit esperado, riesgo de crédito, regulación y pruebas de tensión, en un solo volumen." },
            { ref: "Comité de Supervisión Bancaria de Basilea, documentos del marco de Basilea III", nota: "los textos originales sobre capital, liquidez y la revisión del marco de riesgo de mercado." },
            { ref: "Banco de España, Informe de Estabilidad Financiera", nota: "aplicación al sistema español, con pruebas de tensión y análisis de interconexión." },
            { ref: "Taleb, El cisne negro", nota: "la crítica de fondo a la medición de riesgos basada en distribuciones con colas finas. Exagerado a ratos y sobre lo esencial tiene razón." },
          ],
        },
      ],
    },
  ],
};
