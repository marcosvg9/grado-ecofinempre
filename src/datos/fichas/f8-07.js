/* Ficha 8.07 — Eficiencia de mercados y finanzas conductuales. */

export default {
  codigo: "8.07",
  titulo: "Eficiencia de mercados y finanzas conductuales",
  nivel: 3,
  bloque: "Mercados financieros e inversión",
  tiempo: "5 h",
  nucleo:
    "Los precios incorporan la información disponible con bastante rapidez, pero no perfectamente, y los inversores se desvían de la racionalidad de formas sistemáticas y predecibles. Ambas cosas son ciertas a la vez, y de su combinación sale la conclusión práctica: el mercado es difícil de batir aunque no sea eficiente.",
  requiere: "8.06 CAPM y beta · 8.04 Renta variable",
  abre: "8.10 Gestión de riesgos · 9.10 Innovación y modelos de negocio",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La hipótesis de eficiencia sostiene que los precios reflejan la información disponible, de modo que no se puede obtener rentabilidad extraordinaria de forma sistemática usando esa información. Fama la formuló en tres grados. La forma **débil** afirma que los precios ya incorporan toda la información contenida en los precios pasados, lo que invalida el análisis técnico. La **semifuerte** añade toda la información pública, lo que invalida el análisis fundamental basado en datos publicados. Y la **fuerte** incluye la información privada, lo que implicaría que ni siquiera los iniciados obtienen ventaja; esta última se rechaza sin dificultad, y de hecho el uso de información privilegiada es delito precisamente porque funciona.",
            "Hay un problema metodológico que conviene entender antes de mirar la evidencia. Para afirmar que un mercado es ineficiente hace falta comparar la rentabilidad observada con la que correspondería al riesgo asumido, y eso exige un modelo de valoración de activos. Si se encuentra una anomalía, no se sabe si el mercado es ineficiente o si el modelo de riesgo está mal. Es la **hipótesis conjunta**, y hace que la eficiencia sea estrictamente inconstrastable.",
            "Con esa cautela, la evidencia dibuja un cuadro matizado. Los **estudios de acontecimientos** muestran que los precios reaccionan a la información nueva en minutos, lo que respalda la forma semifuerte. Pero se han documentado **regularidades persistentes**: el momento, por el cual los valores que han subido tienden a seguir subiendo a corto plazo; el efecto valor y el efecto tamaño; y la deriva posterior al anuncio de resultados, por la cual el precio sigue ajustándose durante semanas después de la publicación. Ninguna de ellas debería existir en un mercado eficiente.",
            "Las **finanzas conductuales** aportan explicaciones desde la psicología. La teoría prospectiva de Kahneman y Tversky documenta que las pérdidas duelen más de lo que gustan las ganancias equivalentes, lo que genera el **efecto disposición**: los inversores venden lo que sube y retienen lo que baja, exactamente al revés de lo racional desde el punto de vista fiscal. El **exceso de confianza** produce sobrenegociación y carteras insuficientemente diversificadas. El **anclaje** hace que el precio de compra condicione decisiones posteriores pese a ser irrelevante. Y el **comportamiento de rebaño** amplifica movimientos hasta separar los precios de cualquier fundamento.",
            "La pregunta obvia es por qué esas desviaciones no las corrigen los inversores racionales. La respuesta son los **límites al arbitraje**: corregir un precio equivocado exige capital, exige aguantar mientras el error se agranda y exige responder ante clientes que retiran fondos justo cuando la posición va en contra. Un gestor puede tener razón y quebrar antes de que el mercado se lo reconozca. Por eso las ineficiencias pueden persistir durante años sin que exista beneficio seguro que las elimine.",
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
            { nom: "Forma débil", sub: "Invalida el análisis técnico.", cols: ["Los precios incorporan la serie histórica de precios"] },
            { nom: "Forma semifuerte", sub: "Invalida el análisis fundamental con datos públicos.", cols: ["Los precios incorporan toda la información pública"] },
            { nom: "Forma fuerte", sub: "Rechazada empíricamente.", cols: ["Los precios incorporan también la información privada"] },
            { nom: "Hipótesis conjunta", sub: "Por qué la eficiencia no es contrastable de forma aislada.", cols: ["Anomalía = ineficiencia o error del modelo de riesgo"] },
            { nom: "Aritmética de la gestión activa", sub: "Resultado de Sharpe: es una identidad, no una teoría.", cols: ["$\\bar R_{\\text{activo}}^{\\text{bruto}} = \\bar R_{\\text{mercado}} \\Rightarrow \\bar R_{\\text{activo}}^{\\text{neto}} < \\bar R_{\\text{mercado}}$"] },
            { nom: "Efecto de los costes a largo plazo", sub: "Lo que decide el resultado de un ahorrador.", cols: ["$\\mathrm{VF} = C(1 + r - c)^n$"] },
          ],
          nota: "La **aritmética de la gestión activa** es el argumento más sólido de todos y no depende de que el mercado sea eficiente: como el conjunto de los inversores activos posee el mercado, su rentabilidad bruta media es la del mercado, y tras descontar comisiones su rentabilidad neta media es necesariamente inferior. Es una identidad contable.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: lo que cuestan las comisiones",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un ahorrador invierte **100.000 €** durante **30 años** en un mercado que rinde un **7 %** anual bruto. Compara un fondo indexado con un coste total del **0,15 %** frente a un fondo de gestión activa con un **1,5 %**. Supongamos que el gestor activo consigue exactamente la rentabilidad del mercado antes de comisiones, es decir, que hace un buen trabajo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Fondo indexado", "Fondo activo"],
          filas: [
            ["Rentabilidad bruta", "7,00 %", "7,00 %"],
            ["Coste anual", "0,15 %", "1,50 %"],
            ["Rentabilidad neta", "6,85 %", "5,50 %"],
            ["Capital a 10 años", "193.700 €", "170.800 €"],
            ["Capital a 20 años", "375.200 €", "291.800 €"],
            { celdas: ["Capital a 30 años", "729.900 €", "498.400 €"], clase: "total" },
            ["Diferencia acumulada", "—", "−231.500 €"],
          ],
          nota: "**231.500 € de diferencia**, un 32 % menos de capital final, por 1,35 puntos anuales de comisión. Y sin suponer que el gestor lo haga mal: el ejemplo le concede que iguale al mercado antes de costes. La diferencia procede íntegramente de que el coste se compone igual que la rentabilidad, durante treinta años.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El argumento aritmético de Sharpe** completa el cuadro y es más fuerte que cualquier evidencia empírica. El conjunto de los inversores posee el mercado entero. Si se separa a los indexados, que por construcción obtienen la rentabilidad del mercado menos un coste mínimo, el resto —los activos— posee en conjunto también el mercado y obtiene por tanto su rentabilidad bruta media. Como sus costes son mayores, **la rentabilidad neta media de la gestión activa es necesariamente inferior a la del mercado**. No es una afirmación sobre habilidad: es una identidad. Puede haber gestores excelentes, pero solo a costa de que otros gestores activos lo hagan peor.",
            "Eso no implica que la gestión activa carezca de función. Alguien tiene que analizar empresas para que los precios incorporen información, y ahí está la **paradoja de Grossman y Stiglitz**: si los precios fueran perfectamente informativos, nadie tendría incentivo a recopilar información, y entonces los precios dejarían de serlo. El equilibrio exige un grado de ineficiencia suficiente para remunerar el análisis.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cómo sostener las dos ideas a la vez",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La posición defendible no es «el mercado es eficiente» ni «el mercado está lleno de errores», sino algo más incómodo: **el mercado no es eficiente y aun así es muy difícil de batir de forma sistemática**. Las dos afirmaciones conviven porque explotar una ineficiencia exige identificarla, tener capital para actuar, aguantar el tiempo necesario y que el beneficio supere a los costes de intentarlo.",
            "**Las anomalías tienden a encogerse una vez publicadas.** Varios de los efectos documentados en la literatura académica han reducido su magnitud o desaparecido después de hacerse conocidos, lo que es coherente con un mercado que aprende. Otros persisten, y sobre esos hay dos lecturas: que compensan un riesgo que no medimos bien, o que responden a sesgos de comportamiento demasiado arraigados para corregirse.",
            "**El sesgo de supervivencia contamina toda la evidencia informal.** Los fondos que lo hacen mal se cierran o se fusionan, y las series históricas de rentabilidad de la industria solo recogen a los que sobrevivieron. Lo mismo ocurre con los gestores célebres: en una población de miles, algunos acumularán rachas extraordinarias por puro azar, y serán exactamente esos de los que se escriban libros.",
            "**Las implicaciones prácticas** que se derivan de todo esto son bastante consensuadas incluso entre quienes discrepan sobre la eficiencia. Minimizar costes, porque es la única variable bajo control del inversor y su efecto está garantizado. Diversificar ampliamente, por lo visto en la ficha 8.05. Reducir la rotación, porque cada operación tiene coste y fiscalidad. Y sobre todo, **protegerse de uno mismo**: automatizar aportaciones, fijar una política de asignación de activos por escrito y no revisarla en momentos de tensión. Los sesgos conductuales no se eliminan conociéndolos; se contienen con procedimientos.",
            "**Y una observación sobre la brecha entre rentabilidad del fondo y del partícipe.** Los estudios que comparan la rentabilidad publicada de los fondos con la que efectivamente obtienen sus partícipes encuentran de forma consistente que la segunda es inferior, porque el dinero entra después de las subidas y sale después de las caídas. Esa diferencia no la causa el mercado ni el gestor: la causa el comportamiento, y es probablemente el coste más alto que paga un ahorrador medio.",
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
            { t: "Entender la eficiencia como que el precio es correcto", d: "Significa que refleja la información disponible, no que acierte. Un precio puede incorporar toda la información pública y resultar equivocado a posteriori porque el futuro fue distinto de lo esperado. Eficiencia no es infalibilidad." },
            { t: "Confundir habilidad con suerte", d: "En una población de miles de gestores, algunos acumularán rachas largas por azar. Distinguir habilidad exige series muy largas y control por exposición a factores. Buena parte de lo que se atribuyó a talento resultó ser exposición sistemática a tamaño, valor o momento." },
            { t: "Ignorar el sesgo de supervivencia", d: "Los fondos que lo hacen mal desaparecen y las series históricas solo recogen a los supervivientes. Cualquier estadística sobre rentabilidad de la industria construida sin corregirlo está sesgada al alza de forma sustancial." },
            { t: "Creer que conocer los sesgos protege de ellos", d: "La evidencia dice que no: los sesgos operan por debajo de la deliberación consciente. Lo que funciona son los procedimientos —automatizar aportaciones, escribir la política de inversión de antemano, limitar la frecuencia de revisión—, no la fuerza de voluntad informada." },
            { t: "Extrapolar anomalías descubiertas en los datos", d: "Con suficientes contrastes sobre la misma serie aparecen patrones significativos por azar. Una anomalía sin explicación económica de por qué debería persistir es un hallazgo estadístico, no una estrategia, y muchas se han encogido tras publicarse." },
            { t: "Deducir que el análisis no sirve para nada", d: "La paradoja de Grossman y Stiglitz señala lo contrario: si nadie analizara, los precios dejarían de ser informativos. El equilibrio requiere ineficiencia suficiente para remunerar el análisis. Que sea difícil batir al mercado no significa que el análisis sea inútil." },
            { t: "Fijarse solo en la rentabilidad y no en los costes", d: "La rentabilidad futura es incierta y el coste es seguro. Es la única variable que el inversor controla por completo, y su efecto compuesto a treinta años supera al de casi cualquier decisión de selección de valores." },
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
            "Las burbujas de precios de activos plantean un problema de medición que el SEC 2010 resuelve con una regla clara y a menudo malinterpretada.",
          ],
          lista: [
            "Una subida de precios de activos ya existentes —bolsa o vivienda— **no es producción ni renta**. Se registra íntegramente como revalorización, fuera de las operaciones, en la cuenta de revalorización.",
            "La consecuencia es que durante una burbuja la **riqueza** de los hogares puede dispararse sin que la **renta disponible** ni el **ahorro** se muevan de forma equivalente. Y en la corrección ocurre lo contrario: la riqueza se desploma sin que aparezca desahorro alguno.",
            "Lo que sí computa como producción es la actividad asociada: la construcción de vivienda nueva es formación de capital, y los servicios de intermediación —comisiones inmobiliarias, financieras y notariales— son producción del período. Por eso una burbuja **sí** infla el PIB, pero por la vía de la actividad que genera, no por la revalorización en sí.",
            "Esa distinción es la que explica el patrón español entre 2000 y 2012: el peso de la construcción en el PIB, no el precio de los inmuebles, es lo que entró en las cuentas de producción y lo que se desplomó después.",
          ],
          cierre:
            "Para quien analiza mercados, la regla ofrece una disciplina útil: separar lo que es creación de valor de lo que es cambio de precio de valor ya existente. Es la misma distinción que la ficha 8.04 aplicaba a una acción, elevada a escala de economía.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué implica que se cumpla la forma débil de eficiencia?", a: "Que los precios pasados no contienen información explotable, lo que invalida el análisis técnico. No dice nada sobre si el análisis fundamental funciona: eso lo aborda la forma semifuerte." },
            { q: "¿Por qué la eficiencia no es contrastable de forma aislada?", a: "Por la hipótesis conjunta: medir rentabilidad extraordinaria exige un modelo de riesgo, así que una anomalía puede indicar ineficiencia o un modelo mal especificado, y no hay forma de separar ambas explicaciones." },
            { q: "¿Por qué la gestión activa media rinde menos que el mercado?", a: "Por aritmética, no por falta de habilidad. Los inversores activos poseen en conjunto el mercado, así que su rentabilidad bruta media es la del mercado; al descontar comisiones mayores, su rentabilidad neta media es necesariamente inferior." },
            { q: "1,35 puntos anuales de comisión durante 30 años sobre 100.000 €. ¿Cuánto cuestan?", a: "Unos 231.500 €, un 32 % del capital final, suponiendo que el gestor iguale al mercado antes de costes. El coste se compone igual que la rentabilidad." },
            { q: "La bolsa sube un 30 % en un año. ¿Aumenta el PIB por ello?", a: "No directamente: la revalorización de activos existentes no es producción ni renta, se registra en la cuenta de revalorización. Sí computa la actividad asociada —comisiones, intermediación— como producción del período." },
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
            { ref: "Shiller, Exuberancia irracional", nota: "el contrapunto conductual, con la evidencia sobre exceso de volatilidad y formación de burbujas." },
            { ref: "Malkiel, Un paseo aleatorio por Wall Street", nota: "la defensa clásica y accesible de la eficiencia y de la inversión indexada." },
            { ref: "Kahneman, Pensar rápido, pensar despacio", nota: "el fundamento psicológico de los sesgos, más allá del ámbito financiero." },
            { ref: "Ang, Asset Management", nota: "la síntesis moderna: qué anomalías han sobrevivido, cuáles se han encogido y cómo interpretarlas." },
          ],
        },
      ],
    },
  ],
};
