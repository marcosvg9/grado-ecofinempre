/* Ficha 16.04 — Combinación óptima y reconciliación MinT. */

export default {
  codigo: "16.04",
  titulo: "Combinación óptima y reconciliación MinT",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "5 h",
  nucleo:
    "Usar todas las previsiones a la vez y proyectarlas sobre el espacio coherente. El resultado no solo cuadra: bajo condiciones razonables tiene menor error esperado que cualquiera de las previsiones de partida, y esa es la parte que sorprende.",
  requiere: "16.03 Bottom-up y top-down · 16.02 Coherencia y la matriz de sumas · 4.05 Regresión por MCO",
  abre: "16.05 Estimación de la matriz de covarianzas · 16.07 Reconciliación probabilística · 16.09 Cuentas nacionales",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los métodos clásicos privilegiaban un nivel. La alternativa es no privilegiar ninguno: **tomar las previsiones de todas las series a la vez y encontrar el conjunto coherente más próximo**. Planteado sobre la geometría de la ficha 16.02, se trata de proyectar el punto de las previsiones base sobre el subespacio coherente, y la única decisión que queda es con qué métrica se mide la proximidad.",
            "La versión más simple usa la distancia euclídea ordinaria: la **proyección ortogonal**, que mueve el punto lo menos posible en línea recta. Es fácil de calcular y ya tiene una propiedad valiosa: usa todas las previsiones y cumple la condición de invariancia, así que preserva la insesgadez. Pero trata todas las series por igual, y eso es claramente mejorable: la previsión del total es más fiable que la de una hoja, y debería moverse menos.",
            "De ahí sale la idea de **ponderar**. Si se conoce la fiabilidad relativa de cada previsión, la proyección puede hacerse en una métrica que penalice más mover las cifras fiables y menos las inciertas. Formalmente, se sustituye la distancia euclídea por una distancia ponderada por la inversa de la matriz de covarianzas de los errores de previsión. El resultado es la reconciliación que minimiza la varianza total de los errores del conjunto reconciliado, y de ahí su nombre habitual, **MinT**, por *minimum trace*.",
            "El resultado central del método, y el que costó más de demostrar, es que **la reconciliación óptima usa la matriz de covarianzas de los errores de las previsiones base**, no la de las series ni la de los residuos de un nivel concreto. Esa matriz recoge dos cosas a la vez: cuánto se equivoca cada previsión y **cómo se equivocan juntas**. Si dos ramas fallan siempre en el mismo sentido, la reconciliación puede aprovecharlo; si una falla cuando la otra acierta, también.",
            "La consecuencia sorprendente es que reconciliar **no es solo un coste que se paga por cuadrar**. La proyección sobre el subespacio coherente elimina la componente del error que apunta fuera de ese subespacio, y esa componente es puro error: ninguna realización posible del sistema puede estar fuera del subespacio, porque los datos observados siempre cuadran. **Reconciliar recorta error garantizado**, y esa es la razón de que en las comparaciones empíricas la reconciliación óptima gane con regularidad a los métodos clásicos incluso en el nivel donde estos son exactos por construcción.",
            "El precio es que hay que conocer la matriz de covarianzas, y no se conoce. Estimarla es el problema difícil del método y ocupa la ficha 16.05 entera: en una jerarquía con muchas series, la matriz tiene más entradas que datos disponibles para estimarlas. Toda la práctica del método consiste en elegir una aproximación razonable, y las opciones habituales van desde suponerla diagonal hasta estimarla con contracción.",
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
            { nom: "La idea", sub: "No privilegiar ningún nivel.", cols: ["Proyectar todas las previsiones sobre el subespacio coherente"] },
            { nom: "Proyección ortogonal", sub: "La versión sin ponderar.", cols: ["Distancia euclídea: mueve el punto lo mínimo en línea recta"] },
            { nom: "Proyección ponderada", sub: "La versión con información.", cols: ["Métrica dada por la inversa de la covarianza de los errores"] },
            { nom: "MinT", sub: "Qué minimiza exactamente.", cols: ["La traza de la covarianza de los errores reconciliados"] },
            { nom: "La matriz clave", sub: "Cuál es y cuál no es.", cols: ["Covarianza de los ERRORES de previsión base"] },
            { nom: "Qué recoge", sub: "Dos cosas a la vez.", cols: ["Fiabilidad de cada previsión y correlación entre errores"] },
            { nom: "Por qué mejora", sub: "El argumento decisivo.", cols: ["Elimina la componente del error fuera del subespacio"] },
            { nom: "Invariancia", sub: "La condición que sí cumple.", cols: ["No toca un conjunto ya coherente: preserva insesgadez"] },
            { nom: "El problema práctico", sub: "Dónde se juega todo.", cols: ["La matriz de covarianzas hay que estimarla"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: las siete previsiones, usadas todas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre las mismas previsiones base, dos reconciliaciones. La primera es la **proyección ortogonal**, que trata todas las series por igual. La segunda pondera con una aproximación estructural sencilla: suponer que la varianza del error de cada serie es proporcional al número de hojas que agrega, de modo que el total pesa cuatro, cada rama dos y cada hoja uno.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Serie", "Base", "Bottom-up", "Proyección ortogonal", "Ponderada estructural"],
          filas: [
            ["Total", "132,0", "133,50", "132,643", "133,000"],
            ["Turismo", "57,5", "56,50", "56,738", "56,750"],
            ["Industria", "76,0", "77,00", "75,905", "76,250"],
            ["Hostelería", "32,0", "32,00", "32,119", "32,125"],
            ["Transporte", "24,5", "24,50", "24,619", "24,625"],
            ["Manufactura", "55,0", "55,00", "54,452", "54,625"],
            { celdas: ["Energía", "22,0", "22,00", "21,452", "21,625"], clase: "total" },
          ],
          nota: "Las tres columnas de la derecha son coherentes: en las tres, las hojas suman su rama y las ramas suman el total. Pero **ninguna coincide con otra**. Bottom-up deja el total en 133,50 porque ignora la previsión de 132; la proyección ortogonal lo deja en 132,64 y la ponderada en 133,00. La coherencia no determina el resultado: solo lo restringe a un plano de cuatro dimensiones.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Serie de la jerarquía", y: "Ajuste sobre la previsión base" },
          dominio: { x: [1, 7], y: [-1.25, 1.95] },
          marcasX: [1, 2, 3, 4, 5, 6, 7],
          marcasY: [-1, -0.5, 0, 0.5, 1, 1.5],
          series: [
            {
              nombre: "Bottom-up",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [3.35, 1.82],
              puntos: [[1, 1.5], [2, -1.0], [3, 1.0], [4, 0], [5, 0], [6, 0], [7, 0]],
            },
            {
              nombre: "Proyección ortogonal",
              color: "acento",
              etiquetaEn: [3.35, 1.52],
              puntos: [[1, 0.643], [2, -0.762], [3, -0.095], [4, 0.119], [5, 0.119], [6, -0.548], [7, -0.548]],
            },
            {
              nombre: "Ponderada estructural",
              color: "alerta",
              etiquetaEn: [3.35, 1.22],
              puntos: [[1, 1.0], [2, -0.75], [3, 0.25], [4, 0.125], [5, 0.125], [6, -0.375], [7, -0.375]],
            },
          ],
          nota: "La línea de bottom-up es la de los extremos: **mueve mucho arriba y nada abajo**. Las dos reconciliaciones reparten el ajuste por toda la jerarquía. Obsérvese una regularidad estructural: en ambas, **hostelería y transporte reciben el mismo ajuste**, y manufactura y energía también. La proyección distribuye por igual dentro de cada nodo, porque no tiene ninguna razón para preferir a una hermana sobre otra.",
        },
        {
          tipo: "parrafos",
          items: [
            "Comparar las dos reconciliaciones enseña qué hace la ponderación. La proyección ortogonal mueve el total **0,643** y la ponderada lo mueve **1,000**: al declarar que el total tiene mayor varianza de error —porque agrega cuatro hojas—, la ponderación acepta moverlo más y mover menos las hojas. Es exactamente el comportamiento deseado si esa hipótesis sobre las varianzas es correcta, y exactamente el equivocado si no lo es.",
            "Ahí está la tensión del método. **La ponderación es lo que lo hace óptimo y lo que lo hace frágil.** Con la matriz de covarianzas correcta, MinT domina a todo lo demás; con una matriz mal estimada, puede comportarse peor que la proyección ortogonal, que al menos no supone nada. Por eso la aproximación estructural del ejemplo —varianza proporcional al número de hojas agregadas— es tan usada: no requiere estimar nada, solo contar, y captura la intuición básica de que los agregados son menos variables.",
            "Conviene precisar la afirmación de que reconciliar reduce el error, porque se malinterpreta con facilidad. **No garantiza mejorar cada previsión individual**: en el ejemplo, la previsión de energía pasa de 22,0 a 21,45, y bien puede ser que 22,0 fuera más acertada. Lo que se reduce es el error **del conjunto**, medido como suma de varianzas. La ganancia procede de eliminar la parte del error que era incompatible con la estructura, y esa parte existe siempre que las previsiones base no cuadren.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué la ganancia es casi gratis",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El resultado más contraintuitivo del método merece un desarrollo propio, porque explicado deprisa suena a truco. La afirmación es que reconciliar reduce el error esperado, y la pregunta natural es de dónde sale esa mejora si no se ha añadido información nueva.",
            "La respuesta está en la geometría. Los valores que la realidad puede tomar **siempre son coherentes**: cuando llegue el dato, hostelería más transporte sumará turismo, porque así se define turismo. Es decir, **el punto verdadero está siempre dentro del subespacio coherente**, sin excepción. Las previsiones base, en cambio, caen fuera.",
            "Descompóngase entonces el error de las previsiones base en dos partes: la que va **dentro** del subespacio y la que va **perpendicular** a él. La componente perpendicular es error puro, con total seguridad: apunta hacia una región donde la verdad no puede estar. Proyectar elimina esa componente y deja intacta la otra. **Se está quitando algo que era error con certeza y no se está tocando lo demás.**",
            "Formalmente, esto es el teorema de Pitágoras: la distancia al punto verdadero al cuadrado es la suma de los cuadrados de ambas componentes, y al anular una, la distancia solo puede reducirse. La mejora no procede de información adicional sino de **usar una restricción que siempre se cumple** y que las previsiones base estaban violando. Es información que se tenía y no se estaba explotando.",
            "Ese argumento tiene dos límites que conviene enunciar. Primero, vale para la proyección con la métrica correcta; con una métrica equivocada, la proyección deja de ser ortogonal en el sentido relevante y la garantía se debilita, aunque en la práctica suele seguir mejorando. Segundo, la magnitud de la ganancia depende de **cuánta incoherencia haya**: si las previsiones base casi cuadran, la componente perpendicular es pequeña y hay poco que ganar. Paradójicamente, **cuanto peor cuadren las previsiones, más se gana reconciliándolas**, lo que también significa que una incoherencia grande es una señal de que algo va mal en los modelos base.",
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
            { t: "Creer que la coherencia determina el resultado", d: "Bottom-up, la proyección ortogonal y la ponderada dan tres conjuntos coherentes distintos: 133,50, 132,64 y 133,00 para el mismo total. La restricción confina el resultado a un subespacio de dimensión igual al número de hojas, y dentro de él caben infinitas soluciones. El método elige cuál." },
            { t: "Usar la matriz de covarianzas de las series", d: "La que interviene es la de los errores de previsión base, no la de los niveles ni la de las series. Son cosas distintas: dos series pueden estar muy correlacionadas y tener errores de previsión independientes, o al revés. Confundirlas produce una ponderación que no corresponde a ninguna fiabilidad real." },
            { t: "Esperar que mejore cada previsión individual", d: "No lo garantiza. En el ejemplo, energía pasa de 22,0 a 21,45 y puede que 22,0 fuera lo acertado. Lo que se reduce es el error del conjunto, medido como suma de varianzas. Evaluar el método serie a serie y concluir que falla es aplicar un criterio que el método nunca prometió cumplir." },
            { t: "Suponer que la ponderación siempre ayuda", d: "Con la matriz correcta, MinT domina; con una mal estimada, puede ser peor que la proyección ortogonal, que no supone nada. La ponderación es a la vez lo que hace óptimo al método y lo que lo hace frágil, y por eso las aproximaciones simples que no exigen estimar nada son tan usadas." },
            { t: "Aplicar MinT sin comprobar la magnitud de la incoherencia", d: "Si las previsiones base están muy lejos de cuadrar, reconciliar ganará mucho, pero esa incoherencia es también una señal de que los modelos base son inconsistentes entre sí. Conviene mirar por qué antes de tapar el problema con una proyección elegante." },
            { t: "Confundir la proyección ortogonal con bottom-up", d: "La ortogonal usa las siete previsiones y las mueve todas; bottom-up usa cuatro y deja las hojas intactas. Que ambas sean coherentes y fáciles de calcular no las hace equivalentes: en el ejemplo dejan el total en 132,64 y en 133,50 respectivamente." },
            { t: "Reconciliar previsiones sesgadas esperando que se arreglen", d: "La invariancia preserva la insesgadez si las previsiones base son insesgadas, pero no la crea. Si los modelos base tienen sesgo, la reconciliación producirá un conjunto coherente y sesgado. El aparato distribuye error, no lo corrige en su origen." },
            { t: "Olvidar que las hermanas reciben el mismo ajuste sin más información", d: "La proyección reparte por igual dentro de cada nodo porque no tiene motivo para preferir a una hermana sobre otra. Si se sabe que una de ellas está peor prevista, esa información debe entrar por la matriz de covarianzas: si no entra ahí, el método no puede usarla." },
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
            "Lo que este método formaliza es exactamente lo que la compilación de cuentas nacionales lleva décadas haciendo a mano, con la diferencia de que aquí el criterio de reparto es estadístico.",
          ],
          lista: [
            "El **cuadre de las cuentas** consiste en confrontar estimaciones obtenidas por vías distintas —oferta, demanda y rentas, según la ficha 10.07— y ajustarlas hasta que coincidan. Eso es una reconciliación en el sentido de esta ficha. La diferencia es que el compilador reparte la discrepancia según su juicio sobre qué fuente es más fiable, mientras que MinT lo hace según una matriz de covarianzas estimada. **Es el mismo juicio, escrito de forma reproducible.**",
            "El argumento geométrico tiene una lectura directa en el sistema: los datos observados **siempre cuadran**, porque las identidades son definiciones. La componente del error de estimación que viola una identidad contable es error con certeza. Eso justifica que el cuadre no sea un mal necesario impuesto por la presentación, sino una operación que mejora las estimaciones.",
            "La ponderación estructural del ejemplo —varianza proporcional al número de hojas agregadas— tiene un análogo reconocible: la práctica de **fijar los agregados más fiables y ajustar el detalle**. Cuando un compilador considera que el total de una rama está bien medido y sus desgloses no, está aplicando implícitamente una matriz de covarianzas con esa estructura.",
            "Hay sin embargo una diferencia de fondo con el caso de previsión. En cuentas nacionales, algunas restricciones son **vinculantes por norma**: el dato anual manda sobre el trimestral según la ficha 15.09, y ciertos agregados no se pueden tocar porque tienen consecuencias jurídicas. Eso equivale a una matriz de covarianzas con varianza cero en esas series, y convierte la reconciliación en un problema con restricciones duras además de las de coherencia.",
            "Por último, una consecuencia sobre las **discrepancias estadísticas** que algunos países publican. Mantener una partida de discrepancia explícita en lugar de repartirla es una decisión legítima y transparente: reconoce que las estimaciones no cuadran y deja al usuario decidir. Repartirla con un criterio estadístico es la alternativa, y también es legítima. Lo que no informa es repartirla sin decir cómo.",
          ],
          cierre:
            "La consecuencia práctica: reconciliar no es cosmética contable. Elimina una parte del error que se sabe con certeza que lo es, y la única pregunta abierta es con qué criterio se reparte lo demás.",
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
              q: "Bottom-up deja el total en 133,50, la proyección ortogonal en 132,64 y la ponderada en 133,00. ¿Por qué difieren si las tres son coherentes?",
              a: "Porque la coherencia solo confina el resultado a un subespacio de dimensión cuatro —una por hoja— y dentro de él caben infinitas soluciones. Lo que distingue a los métodos es qué previsiones usan y con qué métrica miden la proximidad. Bottom-up ignora la previsión del total; las otras dos la usan, con distinta ponderación.",
            },
            {
              q: "¿De dónde sale la reducción de error si no se ha añadido información?",
              a: "De una restricción que siempre se cumple y que las previsiones base estaban violando. El punto verdadero está siempre dentro del subespacio coherente, porque los datos observados cuadran por definición. La componente del error perpendicular al subespacio apunta a una región donde la verdad no puede estar: es error con certeza. Proyectar la elimina y deja intacta la otra componente.",
            },
            {
              q: "¿Qué matriz de covarianzas interviene en MinT, y cuál es el error común?",
              a: "La de los errores de previsión base. El error común es usar la de las series o la de los niveles, que son cosas distintas: dos series pueden estar muy correlacionadas y tener errores de previsión independientes, o al revés. La matriz correcta recoge dos cosas a la vez, cuánto se equivoca cada previsión y cómo se equivocan juntas.",
            },
            {
              q: "La proyección ortogonal mueve el total 0,643 y la ponderada 1,000. ¿Qué explica la diferencia?",
              a: "La ponderación estructural declara que el total tiene mayor varianza de error, porque agrega cuatro hojas, así que acepta moverlo más y mover menos las hojas. Es el comportamiento correcto si esa hipótesis sobre las varianzas es acertada, y el equivocado si no lo es. La ponderación es a la vez lo que hace óptimo al método y lo que lo hace frágil.",
            },
            {
              q: "Las previsiones base casi cuadran. ¿Cuánto se gana reconciliándolas?",
              a: "Poco: si la incoherencia es pequeña, la componente perpendicular del error también lo es y hay poco que eliminar. La relación es la inversa de lo que sugiere la intuición: cuanto peor cuadren las previsiones, más se gana reconciliándolas. Eso significa también que una incoherencia grande es una señal de que los modelos base son inconsistentes entre sí y conviene mirar por qué.",
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
            { ref: "Wickramasuriya, Athanasopoulos y Hyndman, «Optimal Forecast Reconciliation for Hierarchical and Grouped Time Series Through Trace Minimization»", nota: "el artículo que establece el resultado MinT y demuestra que la matriz relevante es la de los errores de previsión; la referencia central del bloque." },
            { ref: "Hyndman y otros, «Optimal Combination Forecasts for Hierarchical Time Series»", nota: "el planteamiento previo como problema de regresión, más sencillo de seguir y suficiente para entender la proyección ortogonal." },
            { ref: "Panagiotelis y otros, «Forecast Reconciliation: A Geometric View with New Insights on Bias Correction»", nota: "el argumento de la proyección y la descomposición del error en componentes dentro y fuera del subespacio, que es lo que hace transparente la ganancia." },
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice", nota: "la exposición aplicada con código, incluidas las aproximaciones prácticas a la matriz de covarianzas que trata la ficha siguiente." },
          ],
        },
      ],
    },
  ],
};
