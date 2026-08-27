/* Ficha 16.03 — Bottom-up, top-down y middle-out. */

export default {
  codigo: "16.03",
  titulo: "Bottom-up, top-down y middle-out",
  nivel: 3,
  bloque: "Series temporales jerárquicas",
  tiempo: "4 h",
  nucleo:
    "Los tres métodos clásicos producen previsiones coherentes y comparten un defecto: cada uno tira a la basura buena parte de la información disponible. Verlos como casos particulares de una misma familia deja claro exactamente cuánta.",
  requiere: "16.02 Coherencia y la matriz de sumas · 16.01 Estructuras jerárquicas · 4.05 Regresión por MCO",
  abre: "16.04 Combinación óptima y MinT · 16.08 Evaluación de previsiones · 16.10 Herramientas y práctica",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de que existiera la formulación matricial de la ficha 16.02, la práctica se repartía entre tres recetas. Las tres siguen usándose, las tres producen previsiones coherentes y conviene entenderlas bien, porque además de ser el punto de comparación obligado, cada una es defendible en circunstancias concretas.",
            "El **bottom-up** prevé únicamente las series hoja y obtiene todo lo demás sumando. Su virtud es que respeta el detalle: nada de lo que ocurra en una hoja se pierde por el camino, y los cambios de composición se propagan hacia arriba de forma natural. Su defecto es que **descarta por completo las previsiones de los niveles agregados**, que son precisamente las que se apoyan en las series con mejor relación señal-ruido según la ficha 16.01. Además, en jerarquías profundas las hojas pueden ser tan ruidosas que prever cada una por separado sea poco fiable, y sumar muchas previsiones malas no produce una buena.",
            "El **top-down** hace lo contrario: prevé solo el agregado y lo reparte hacia abajo con proporciones. Su virtud es que se apoya en la serie más fiable y que exige un solo modelo, lo que en jerarquías con miles de hojas no es un detalle menor. Sus defectos son dos y ambos serios. El primero es que **descarta toda la información de los niveles inferiores**: si una rama va a comportarse de forma distinta a las demás, el reparto no lo sabe. El segundo es más técnico y menos conocido: **el top-down introduce sesgo** incluso partiendo de previsiones insesgadas, porque el reparto proporcional no cumple la condición de invariancia de la ficha 16.02.",
            "La elección de las proporciones es el punto delicado del top-down, y hay varias opciones que dan resultados distintos. Se pueden usar las **proporciones históricas medias** de cada hoja sobre el total, la **proporción de las medias**, o proporciones **previstas** obtenidas de modelos individuales. Las dos primeras suponen implícitamente que la composición es estable, lo que falla precisamente cuando hay un cambio estructural. La tercera funciona mejor y, curiosamente, al usar modelos de las hojas deja de ser un top-down puro.",
            "El **middle-out** es el compromiso evidente: elegir un nivel intermedio, prever ahí, agregar hacia arriba y repartir hacia abajo. Tiene sentido cuando existe un nivel en el que la información es claramente mejor —a menudo el nivel al que se toman las decisiones de negocio, o aquel en el que las series tienen la señal más limpia—, y hereda las virtudes y los defectos de sus dos mitades: respeta el nivel elegido y descarta la información de todos los demás.",
            "El diagnóstico común es el que da título a la ficha. Los tres métodos **eligen un nivel privilegiado y descartan el resto**, cuando la información está repartida por toda la jerarquía. En el ejemplo del bloque, bottom-up ignora tres previsiones de siete y top-down ignora seis de siete. Que exista una forma de usar las siete es lo que hace interesante la ficha 16.04, y también lo que explica que estos métodos, pese a su sencillez, hayan quedado como referencia y no como recomendación.",
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
            { nom: "Bottom-up", sub: "Solo se prevén las hojas.", cols: ["Los agregados se obtienen sumando hacia arriba"] },
            { nom: "Top-down", sub: "Solo se prevé el total.", cols: ["Se reparte hacia abajo con proporciones"] },
            { nom: "Middle-out", sub: "Un nivel intermedio.", cols: ["Se agrega hacia arriba y se reparte hacia abajo"] },
            { nom: "Proporciones históricas", sub: "La opción más común.", cols: ["Media de la participación de cada hoja en el total"] },
            { nom: "Proporciones previstas", sub: "La que funciona mejor.", cols: ["Estimadas con modelos de las hojas: deja de ser top-down puro"] },
            { nom: "Virtud del bottom-up", sub: "Qué conserva.", cols: ["Todo el detalle y los cambios de composición"] },
            { nom: "Virtud del top-down", sub: "Qué aprovecha.", cols: ["La serie con mejor relación señal-ruido · un solo modelo"] },
            { nom: "Sesgo del top-down", sub: "El defecto menos conocido.", cols: ["Incumple la invariancia: sesga aun partiendo de insesgadas"] },
            { nom: "El defecto común", sub: "Lo que comparten los tres.", cols: ["Privilegian un nivel y descartan la información del resto"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: qué mueve y qué respeta cada método",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Partiendo de las mismas siete previsiones base de la ficha 16.02, se aplican los dos métodos clásicos. El top-down reparte el total con las proporciones históricas **0,240 / 0,185 / 0,415 / 0,160**, que suman uno. Lo interesante no son las cifras finales sino **cuánto se aparta cada una de la previsión que se había hecho para esa serie**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Serie", "Base", "Bottom-up", "Desviación", "Top-down", "Desviación"],
          filas: [
            ["Total", "132,0", "133,50", "+1,14 %", "132,00", "0 %"],
            ["Turismo", "57,5", "56,50", "−1,74 %", "56,10", "−2,43 %"],
            ["Industria", "76,0", "77,00", "+1,32 %", "75,90", "−0,13 %"],
            ["Hostelería", "32,0", "32,00", "0 %", "31,68", "−1,00 %"],
            ["Transporte", "24,5", "24,50", "0 %", "24,42", "−0,33 %"],
            ["Manufactura", "55,0", "55,00", "0 %", "54,78", "−0,40 %"],
            { celdas: ["Energía", "22,0", "22,00", "0 %", "21,12", "−4,00 %"], clase: "total" },
          ],
          nota: "Las columnas de desviación son el retrato de cada método. **Bottom-up respeta las cuatro hojas exactamente y mueve los tres agregados.** **Top-down respeta el total exactamente y mueve las otras seis series**, y a energía la desplaza un 4 %: su previsión decía 22,0 y el reparto proporcional la deja en 21,12, sin que nadie haya mirado el modelo de esa hoja.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Serie de la jerarquía", y: "Desviación sobre la previsión base %" },
          dominio: { x: [1, 7], y: [-4.8, 2.7] },
          marcasX: [1, 2, 3, 4, 5, 6, 7],
          marcasY: [-4, -2, 0, 2],
          series: [
            {
              nombre: "Bottom-up",
              color: "acento",
              etiquetaEn: [4.3, 2.25],
              puntos: [[1, 1.14], [2, -1.74], [3, 1.32], [4, 0], [5, 0], [6, 0], [7, 0]],
            },
            {
              nombre: "Top-down",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [4.3, 1.35],
              puntos: [[1, 0], [2, -2.43], [3, -0.13], [4, -1], [5, -0.33], [6, -0.4], [7, -4]],
            },
          ],
          nota: "El eje horizontal recorre la jerarquía de arriba abajo: total, las dos ramas y las cuatro hojas. La línea de bottom-up **se pega al cero en la mitad derecha** —no toca ninguna hoja— y se despega en la izquierda. La de top-down hace justo lo contrario: parte de cero en el total y se aleja en todo lo demás. **Cada método es exacto donde mira y arbitrario donde no.**",
        },
        {
          tipo: "parrafos",
          items: [
            "El recuento de información descartada es explícito. Bottom-up **ignora tres previsiones de siete**: las del total y las dos ramas, que son justamente las series menos ruidosas. Top-down **ignora seis de siete**: las cuatro hojas y las dos ramas, es decir, todo el detalle. Ninguno de los dos usa más de la mitad de lo que se ha calculado.",
            "El caso de energía merece atención porque ilustra el riesgo del top-down. Su previsión base era 22,0 y su participación histórica en el total es del 16 %, que aplicada a un total de 132 da 21,12. Si el modelo de energía anticipaba algo específico —un cambio de precios, una parada programada—, el reparto proporcional lo borra sin dejar rastro. **El top-down supone que la composición futura será la composición pasada**, y esa hipótesis falla precisamente cuando hay algo que prever.",
            "Sobre el sesgo del top-down conviene ser preciso, porque suele enunciarse mal. No es que reparta mal por descuido: es que el procedimiento no cumple la condición de invariancia de la ficha 16.02. Si se le entregan unas previsiones base **ya coherentes**, el top-down las modificará igualmente, porque impondrá sus proporciones históricas en lugar de las que traían. Un método que altera lo que ya estaba bien no puede preservar la insesgadez, y de ahí procede el sesgo, no de un error de implementación.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: cuándo cada método sigue siendo la opción sensata",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Que exista un método mejor no convierte a los clásicos en errores. Hay situaciones en que siguen siendo la elección correcta, y reconocerlas evita el purismo metodológico que ignora las restricciones reales.",
            "**Bottom-up tiene sentido cuando las hojas son informativas y pocas.** Si se prevén las ventas de cinco líneas de producto con series largas y limpias, prever cada una y sumar es razonable, transparente y fácil de explicar a quien tiene que decidir sobre cada línea. La pérdida frente a un método óptimo será pequeña, porque con pocas hojas y buena señal la previsión del agregado no añade mucho.",
            "**Top-down tiene sentido cuando las hojas son casi ruido.** En una jerarquía con miles de referencias en cientos de puntos de venta, la mayoría de las series hoja tienen tan poca señal que modelarlas individualmente no aporta nada: sus previsiones serían poco más que su media histórica. Repartir un agregado bien previsto con proporciones estables da un resultado defendible con una fracción del esfuerzo, y ese argumento de coste computacional no es despreciable cuando hay que producir previsiones cada noche.",
            "**Middle-out tiene sentido cuando existe un nivel privilegiado por razones sustantivas.** A menudo hay un nivel en el que la información es genuinamente mejor: aquel en el que se recogen los datos, en el que se planifica, o en el que las series tienen la relación señal-ruido más favorable. Elegirlo como nivel de modelización y propagar desde ahí aprovecha esa ventaja, aunque siga descartando el resto.",
            "El criterio general que se desprende de todo esto es que **los métodos clásicos son razonables cuando la información está muy concentrada en un nivel**, porque entonces descartar los demás cuesta poco. Cuando está repartida —que es lo habitual en economía, donde el agregado es limpio y las ramas tienen dinámicas propias—, el coste de descartar es real y medible, y ahí es donde la reconciliación de la ficha 16.04 gana de forma consistente. La pregunta útil no es qué método es mejor en abstracto sino **dónde está la información en esta jerarquía concreta**.",
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
            { t: "Suponer que bottom-up es siempre lo más prudente", d: "Descarta las previsiones de los niveles agregados, que son las que se apoyan en las series con mejor relación señal-ruido. En jerarquías profundas, las hojas pueden ser tan ruidosas que sumar muchas previsiones mediocres produzca un agregado peor que el que se habría previsto directamente." },
            { t: "Usar top-down con proporciones históricas sin comprobar la estabilidad", d: "El reparto proporcional supone que la composición futura será la pasada. Esa hipótesis falla precisamente cuando hay un cambio estructural, que es cuando más importa acertar. Si el modelo de una hoja anticipaba algo específico, el reparto lo borra sin dejar rastro." },
            { t: "Enunciar mal el sesgo del top-down", d: "No procede de un error de implementación sino de que el método incumple la condición de invariancia: modificaría incluso unas previsiones base ya coherentes, imponiendo sus proporciones históricas en lugar de las que traían. Un método que altera lo que ya estaba bien no puede preservar la insesgadez." },
            { t: "Creer que coherente equivale a bueno", d: "Los tres métodos clásicos producen previsiones perfectamente coherentes, y ninguno usa más de la mitad de la información disponible. La coherencia es un requisito de presentación; la exactitud se mide aparte y no se sigue de ella." },
            { t: "Elegir el nivel del middle-out por comodidad", d: "El argumento para privilegiar un nivel debe ser sustantivo —ahí se recogen los datos, ahí se planifica, ahí la señal es más limpia—, no que sea el nivel al que resulta cómodo trabajar. Si no hay una razón real, se está descartando información sin contrapartida." },
            { t: "Comparar métodos solo en el nivel donde uno de ellos es exacto", d: "Bottom-up acierta por construcción en las hojas y top-down en el total. Evaluar en un solo nivel garantiza que gane el método que lo respeta. La comparación honesta exige medir en todos los niveles a la vez, que es el problema de la ficha 16.08." },
            { t: "Usar proporciones que no suman uno", d: "Parece obvio y ocurre: proporciones estimadas por separado para cada hoja rara vez suman exactamente uno, y si no se normalizan, el reparto no reproduce el total y la coherencia se rompe justo en la restricción que el método pretendía respetar." },
            { t: "Descartar los clásicos por principio", d: "Con miles de hojas casi sin señal, top-down da un resultado defendible con una fracción del coste computacional, y ese argumento pesa cuando hay que producir previsiones cada noche. La pregunta útil es dónde está la información en la jerarquía concreta, no qué método es mejor en abstracto." },
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
            "Los tres métodos clásicos tienen equivalentes exactos en la práctica de la contabilidad nacional, aunque allí se llamen de otra manera.",
          ],
          lista: [
            "La **agregación indirecta** de la ficha 15.11 es exactamente un bottom-up: ajustar cada componente y sumar. La **agregación directa** no es un top-down —no reparte nada— pero comparte con él la propiedad de privilegiar el agregado y dejar que las partes se descuadren. El debate de aquella ficha es, visto desde aquí, el mismo debate de esta con las previsiones sustituidas por series ajustadas.",
            "La **desagregación temporal** de la ficha 15.10 es un top-down en toda regla: se toma el total anual y se reparte entre trimestres. La diferencia es que el reparto no usa proporciones históricas fijas sino un indicador que se mueve, lo que corresponde a la variante de **proporciones previstas** y es justamente la que mejor funciona. Que la práctica estadística hubiera convergido en esa variante antes de que la literatura de previsión jerárquica la justificara es un detalle interesante.",
            "El **benchmarking** de la ficha 15.09 ocupa una posición peculiar en esta clasificación. No es ninguno de los tres: parte de previsiones o estimaciones en ambos niveles y las concilia, aunque dando autoridad total al dato anual. Es, en el lenguaje de este bloque, una reconciliación con restricción vinculante sobre un nivel, y por tanto está más cerca de la ficha 16.04 que de esta.",
            "El **proceso de compilación** de las cuentas suele proceder por niveles, y ahí aparece el middle-out de forma natural: se trabaja con el detalle de rama disponible, se agrega hacia arriba para obtener el total y se distribuye hacia abajo para los desgloses que no se observan. La elección del nivel de trabajo responde a dónde están las fuentes, que es exactamente el criterio sustantivo correcto.",
            "Una consecuencia práctica para leer previsiones publicadas. Cuando un servicio de estudios presenta un cuadro macroeconómico con PIB y componentes que cuadran, **ha usado alguno de estos métodos**, y saber cuál informa sobre qué se está diciendo. Si es bottom-up, la cifra de PIB es una consecuencia y no una previsión propia; si es top-down, los componentes son un reparto y no previsiones independientes. Rara vez se especifica.",
          ],
          cierre:
            "La consecuencia práctica: ante un cuadro de previsiones coherente, preguntar qué se previó de verdad y qué se derivó. La respuesta cambia por completo cómo debe leerse cada cifra.",
        },
      ],
    },

    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            {
              q: "En la jerarquía del ejemplo, ¿cuántas previsiones base descarta cada método clásico?",
              a: "Bottom-up descarta tres de siete: las del total y las dos ramas, que son las series menos ruidosas. Top-down descarta seis de siete: las cuatro hojas y las dos ramas, es decir, todo el detalle. Ninguno usa más de la mitad de lo que se ha calculado, y ese es el defecto que comparten.",
            },
            {
              q: "El top-down deja energía en 21,12 cuando su previsión base era 22,0. ¿Qué se ha perdido?",
              a: "Todo lo que el modelo de energía supiera sobre esa serie en concreto. El reparto aplica su participación histórica del 16 % al total previsto, así que supone que la composición futura será la pasada. Si el modelo anticipaba un cambio de precios o una parada programada, el reparto lo borra sin dejar rastro. La hipótesis falla justo cuando hay algo que prever.",
            },
            {
              q: "¿De dónde procede el sesgo del top-down?",
              a: "De que incumple la condición de invariancia: modificaría incluso unas previsiones base ya coherentes, imponiendo sus proporciones históricas en lugar de respetar las que traían. Un método que altera lo que ya estaba bien no puede preservar la insesgadez. No es un error de implementación sino una propiedad estructural del procedimiento.",
            },
            {
              q: "¿Por qué no basta comparar métodos midiendo el error en el nivel agregado?",
              a: "Porque top-down acierta ahí por construcción —respeta exactamente la previsión del total— y bottom-up acierta por construcción en las hojas. Evaluar en un solo nivel garantiza que gane el método que lo respeta, sin decir nada sobre su calidad global. La comparación honesta exige medir en todos los niveles a la vez.",
            },
            {
              q: "¿En qué situación sigue siendo razonable un top-down?",
              a: "Cuando las hojas son casi ruido puro. En jerarquías con miles de referencias por punto de venta, modelar cada serie individualmente no aporta nada porque su previsión sería poco más que su media histórica; repartir un agregado bien previsto con proporciones estables da un resultado defendible con una fracción del coste. El criterio general es dónde está concentrada la información.",
            },
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
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice, capítulo de series jerárquicas", nota: "la exposición de los tres métodos con sus variantes de proporciones y ejemplos reproducibles." },
            { ref: "Gross y Sohl, «Disaggregation Methods to Expedite Product Line Forecasting»", nota: "el estudio comparativo clásico de las distintas formas de calcular las proporciones en un top-down y de sus consecuencias." },
            { ref: "Athanasopoulos, Ahmed y Hyndman, «Hierarchical Forecasts for Australian Domestic Tourism»", nota: "la comparación empírica de los métodos clásicos frente a la combinación óptima sobre una jerarquía real, con la sorpresa de que ninguno de los clásicos gana." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "el equivalente contable del top-down, con la variante de proporciones previstas que la práctica estadística adoptó por su cuenta." },
          ],
        },
      ],
    },
  ],
};
