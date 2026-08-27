/* Ficha 16.05 — Estimación de la matriz de covarianzas. */

export default {
  codigo: "16.05",
  titulo: "Estimación de la matriz de covarianzas",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "5 h",
  nucleo:
    "La reconciliación óptima necesita una matriz que casi nunca se puede estimar: con diez años de datos mensuales solo caben quince series. Toda la práctica del método consiste en elegir bien qué aproximación usar en su lugar.",
  requiere: "16.04 Combinación óptima y MinT · 4.06 Diagnóstico de la regresión · 4.03 Probabilidad e inferencia",
  abre: "16.07 Reconciliación probabilística · 16.08 Evaluación de previsiones · 16.10 Herramientas y práctica",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha anterior terminaba con una promesa incumplida: MinT es óptimo si se conoce la matriz de covarianzas de los errores de previsión, y esa matriz no se conoce. Esta ficha trata de qué se hace en su lugar, y conviene decir desde el principio que **no hay una respuesta buena, solo un catálogo de aproximaciones con distintos compromisos**. Es el punto donde el método pasa de ser un resultado teórico a ser un oficio.",
            "El problema es de recuento. Una matriz de covarianzas para **n** series tiene **n(n+1)/2** entradas distintas, un número que crece con el cuadrado. Con siete series son 28 parámetros, perfectamente estimables. Con cincuenta, 1.275. Con doscientas, 20.100. Y las observaciones disponibles para estimarlos son los residuos históricos, es decir, unas pocas decenas o centenas. **La matriz muestral no solo es imprecisa: por encima de cierto tamaño es singular**, y su inversa —que es lo que el método necesita— no existe.",
            "La primera aproximación, y la más conservadora, es **ignorar la matriz**: usar la identidad, que equivale a la proyección ortogonal de la ficha 16.04. No supone nada sobre fiabilidades ni correlaciones, y por eso nunca se equivoca mucho aunque tampoco aproveche información. Es el punto de partida razonable y el que conviene tener siempre como referencia para comprobar si las alternativas mejoran.",
            "La segunda es suponer la matriz **diagonal**, es decir, admitir que las previsiones tienen fiabilidades distintas pero errores independientes. Eso reduce el número de parámetros de n(n+1)/2 a n, que sí es estimable. Hay dos formas habituales de rellenar esa diagonal: con las **varianzas de los residuos** de cada modelo, que es información real y disponible; o con una **regla estructural** —varianza proporcional al número de hojas que agrega la serie—, que no exige estimar nada, solo contar, y captura la intuición de que los agregados varían relativamente menos.",
            "La tercera, y la que suele funcionar mejor cuando hay datos suficientes, es la **contracción**: estimar la matriz muestral completa y mezclarla con una versión diagonal, con un peso que depende de cuánta información haya. Cuando los datos abundan, domina la muestral; cuando escasean, domina la diagonal, que es estable aunque sea incorrecta. El resultado siempre es invertible y suele batir a ambos extremos, y es la razón de que la contracción se haya convertido en la opción por defecto de las implementaciones.",
            "Lo que conviene retener es que **esta elección importa tanto como la elección del método**. Un MinT con una matriz mal estimada puede rendir peor que una proyección ortogonal que no supone nada, y esa es una situación frecuente en jerarquías grandes. La comparación honesta no es «MinT contra bottom-up» sino «MinT con esta aproximación de la matriz contra bottom-up», y sin especificar la aproximación la comparación no significa mucho.",
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
            { nom: "El problema de recuento", sub: "Por qué no se puede estimar.", cols: ["n(n+1)/2 parámetros frente a unas decenas de residuos"] },
            { nom: "Singularidad", sub: "El límite duro.", cols: ["Con T ≤ n la matriz muestral no es invertible"] },
            { nom: "Identidad", sub: "No suponer nada.", cols: ["Equivale a la proyección ortogonal"] },
            { nom: "Diagonal por varianzas", sub: "Información real disponible.", cols: ["Varianza de los residuos de cada modelo"] },
            { nom: "Diagonal estructural", sub: "No exige estimar: solo contar.", cols: ["Varianza proporcional a las hojas que agrega la serie"] },
            { nom: "Contracción", sub: "La opción por defecto.", cols: ["Mezcla de la muestral con una diagonal estable"] },
            { nom: "Qué se pierde al diagonalizar", sub: "La información más valiosa.", cols: ["La correlación entre errores de series hermanas"] },
            { nom: "Regla práctica", sub: "Qué comparar siempre.", cols: ["Cualquier aproximación frente a la proyección ortogonal"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: cuántas series caben en diez años de datos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El recuento es directo y su resultado es más restrictivo de lo que casi nadie espera. Una matriz de covarianzas de **n** series tiene n(n+1)/2 entradas distintas —la diagonal más el triángulo superior, ya que es simétrica—. Diez años de datos mensuales dan **120 observaciones**. Igualando ambas cantidades se obtiene el tamaño máximo de jerarquía para el que hay tantas observaciones como parámetros.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Series de la jerarquía", y: "Cantidad" },
          dominio: { x: [0, 50], y: [0, 1420] },
          marcasX: [0, 15, 30, 50],
          marcasY: [0, 400, 800, 1200],
          series: [
            {
              nombre: "Parámetros por estimar",
              color: "alerta",
              etiquetaEn: [1.5, 1320],
              puntos: [[0, 0], [5, 15], [10, 55], [15, 120], [20, 210], [25, 325], [30, 465], [35, 630], [40, 820], [45, 1035], [50, 1275]],
            },
            {
              nombre: "Observaciones con 10 años mensuales",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [1.5, 1150],
              puntos: [[0, 120], [50, 120]],
            },
          ],
          puntos: [{ x: 15, y: 120, guias: true }],
          notas: [{ x: 13, y: 430, texto: "n = 15", ancla: "end" }],
          nota: "El cruce cae exactamente en **quince series**: 15 · 16 / 2 = 120, el mismo número que observaciones hay. A partir de ahí hay más parámetros que datos, y la matriz muestral deja de ser invertible. Con cincuenta series los parámetros son 1.275 y las observaciones siguen siendo 120: **más de diez parámetros por dato**. La curva es cuadrática y la recta es plana, así que el problema no se arregla esperando a tener más historia.",
        },
        {
          tipo: "tabla",
          cabecera: ["Series", "Parámetros de la matriz", "Con 120 observaciones", "Situación"],
          filas: [
            ["7", "28", "0,2 por dato", "Estimable sin dificultad"],
            ["15", "120", "1,0 por dato", "El límite exacto"],
            ["50", "1.275", "10,6 por dato", "Matriz singular"],
            { celdas: ["200", "20.100", "167,5 por dato", "Sin sentido"], clase: "total" },
          ],
          nota: "La jerarquía de siete series del bloque está cómodamente dentro de lo estimable, y por eso el ejemplo funciona. Pero **una jerarquía real de cuentas nacionales o de un catálogo comercial tiene centenares o miles de series**, y ahí la matriz completa no es una opción difícil: es una imposibilidad aritmética. De ahí que todo el trabajo práctico consista en elegir qué aproximación usar.",
        },
        {
          tipo: "parrafos",
          items: [
            "Merece la pena ver qué se pierde exactamente al diagonalizar, porque no es poco. La diagonal recoge **cuánto se equivoca cada previsión**; lo que se tira son las covarianzas, es decir, **cómo se equivocan juntas**. Y esa era precisamente la información más valiosa: si dos ramas fallan siempre en el mismo sentido porque comparten un choque común, la reconciliación podría aprovecharlo, y con una matriz diagonal no puede.",
            "La ficha 16.01 ya señalaba este punto al hablar de estructuras declaradas frente a reales. Un árbol dice que dos ramas son independientes; la matriz de covarianzas de los errores puede decir que no lo son. **Diagonalizar equivale a creerse el árbol**, lo que es coherente pero renuncia a la única vía que había para descubrir que el árbol miente.",
            "La contracción es un compromiso deliberado ante esa tensión. Estima la matriz completa —con toda su imprecisión— y la mezcla con una diagonal estable, dando más peso a la primera cuanto más datos haya. El resultado conserva parte de la información de correlación sin heredar la inestabilidad de una matriz muestral casi singular. No es óptimo en ningún sentido teórico limpio, y funciona bien en la práctica, que es un tipo de argumento perfectamente respetable en este terreno.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: elegir aproximación sin poder validar del todo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un equipo que tiene que reconciliar una jerarquía de doscientas series se enfrenta a una decisión sin respuesta teórica. Recorrer cómo se resuelve en la práctica ilustra bien el estado del arte, que es más artesanal de lo que sugieren los artículos.",
            "**El punto de partida obligado es la proyección ortogonal.** No supone nada, siempre funciona y da una referencia. Cualquier aproximación más sofisticada tiene que demostrar que mejora sobre ella en una evaluación fuera de muestra; si no lo hace, la complejidad añadida no se justifica. Empezar por el método más simple y exigir prueba a los demás es la disciplina que evita la mayor parte de los errores en este tema.",
            "**El segundo paso natural es la diagonal estructural**, porque no cuesta nada: se obtiene contando cuántas hojas agrega cada serie. Suele mejorar sobre la ortogonal cuando la jerarquía tiene niveles muy distintos en escala, que es lo habitual. Y tiene una ventaja de robustez: al no depender de estimaciones, no puede degradarse porque los residuos de un periodo concreto fueran atípicos.",
            "**El tercero es la diagonal por varianzas de residuos**, que sí usa información real de cada modelo. Funciona mejor cuando la calidad de los modelos difiere mucho entre series —algunas están bien especificadas y otras no—, y peor cuando los residuos históricos no representan bien el error futuro, por ejemplo tras un cambio estructural reciente.",
            "**La contracción se reserva para cuando hay historia suficiente** y motivos para pensar que las correlaciones entre errores son sustantivas: choques comunes conocidos, ramas que comparten insumos o clientela. Es también la que más puede ganar y la que más puede perder, así que conviene validarla con especial cuidado. La conclusión general del oficio es que **la ganancia de sofisticar la matriz es real pero modesta, y la pérdida por sofisticarla mal puede ser grande**, lo que aconseja prudencia y evaluación sistemática en lugar de adoptar por defecto la opción más avanzada.",
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
            { t: "Intentar estimar la matriz completa en una jerarquía grande", d: "Con n series hacen falta n(n+1)/2 parámetros y con T observaciones la matriz muestral es singular en cuanto T ≤ n. Con diez años mensuales el límite exacto son quince series. Por encima, la inversa que el método necesita sencillamente no existe, y el programa fallará o devolverá basura numérica." },
            { t: "Usar MinT sin decir con qué aproximación de la matriz", d: "El rendimiento del método depende tanto de la aproximación como de la idea. Un MinT con matriz mal estimada puede ser peor que una proyección ortogonal que no supone nada. Comparar «MinT contra bottom-up» sin especificar la aproximación no significa gran cosa." },
            { t: "Suponer que más sofisticación es mejor", d: "La ganancia de refinar la matriz es real pero modesta, y la pérdida por refinarla mal puede ser grande. La disciplina correcta es empezar por la proyección ortogonal y exigir a cada alternativa que demuestre mejora fuera de muestra antes de adoptarla." },
            { t: "Olvidar qué se pierde al diagonalizar", d: "La diagonal recoge cuánto se equivoca cada previsión; las covarianzas recogen cómo se equivocan juntas, que es la información más valiosa. Diagonalizar equivale a creerse el árbol declarado y renuncia a la única vía disponible para descubrir que no describe la dependencia real." },
            { t: "Usar la covarianza de las series en lugar de la de los errores", d: "Es el error de la ficha anterior repetido aquí con consecuencias prácticas: las series de una jerarquía están enormemente correlacionadas por construcción, porque unas son sumas de otras. Esa correlación no dice nada sobre la fiabilidad relativa de las previsiones." },
            { t: "Estimar sobre residuos que no representan el error futuro", d: "Las varianzas de residuos históricos suponen que el modelo seguirá equivocándose como se equivocaba. Tras un cambio estructural reciente esa hipótesis falla, y la ponderación resultante penalizará o premiará series por razones que ya no son válidas." },
            { t: "No comprobar que la matriz resultante es definida positiva", d: "Una matriz de covarianzas estimada puede salir no invertible o casi singular, y entonces la reconciliación produce números que parecen resultados y son ruido numérico amplificado. La comprobación es rutinaria y hay que hacerla antes de mirar las cifras." },
            { t: "Reconciliar y no evaluar", d: "Como toda reconciliación produce cifras coherentes y de aspecto razonable, es fácil adoptar una aproximación y no volver a mirarla. La única forma de saber si la elección fue buena es la evaluación fuera de muestra por niveles, que es el problema de la ficha siguiente." },
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
            "La matriz de covarianzas de los errores es, en cuentas nacionales, el juicio del compilador sobre qué fuente es más fiable, y ese juicio existe aunque nunca se escriba.",
          ],
          lista: [
            "Cuando un compilador decide que el dato de una fuente manda sobre el de otra al cuadrar las cuentas, está declarando implícitamente una **jerarquía de fiabilidades**, es decir, una diagonal de la matriz. La diferencia con este bloque es que allí el juicio es cualitativo y no se documenta, mientras que aquí es un objeto explícito que se puede discutir y revisar.",
            "Las **restricciones vinculantes** del sistema equivalen a varianza cero. Que el dato anual mande sobre el trimestral según la ficha 15.09, o que ciertos agregados no puedan tocarse por sus consecuencias jurídicas, se traduce en entradas nulas de la matriz. En ese caso la reconciliación deja de ser una proyección libre y pasa a tener restricciones duras además de las de coherencia.",
            "Las **correlaciones entre errores** son sustantivas en cuentas nacionales y no anecdóticas. Las partidas que comparten fuente —todas las que salen de la misma encuesta o del mismo registro administrativo— tienen errores correlacionados por construcción. Diagonalizar la matriz supone independencia justo donde se sabe que no la hay, y esa es una limitación real de las aproximaciones simples en este contexto.",
            "El **tamaño** del problema es el que hace inviable la matriz completa. Un cuadro de cuentas trimestrales con desglose por ramas y por partidas de gasto tiene centenares de series, y la historia disponible son unas pocas decenas de trimestres comparables, porque los cambios de base y de clasificación de la ficha 10.08 rompen la homogeneidad hacia atrás. Es el caso extremo del recuento del ejemplo.",
            "Hay por último una consecuencia sobre la **transparencia**. Publicar la matriz de ponderaciones empleada al cuadrar las cuentas equivaldría a publicar el juicio de fiabilidad sobre cada fuente, algo que ningún instituto hace y que sería informativo. En su lugar se publica la metodología general, que describe el procedimiento pero no los pesos concretos.",
          ],
          cierre:
            "La consecuencia práctica: el juicio sobre qué fuente es más fiable siempre existe. La cuestión es si está escrito en una matriz que se puede revisar o en la cabeza de quien compila.",
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
              q: "¿Cuántas series admite una matriz de covarianzas completa estimada con diez años de datos mensuales?",
              a: "Quince exactamente. Una matriz de n series tiene n(n+1)/2 entradas distintas, y diez años mensuales dan 120 observaciones: 15 · 16 / 2 = 120. A partir de ahí hay más parámetros que datos y la matriz muestral deja de ser invertible. Como los parámetros crecen con el cuadrado y las observaciones linealmente, el problema no se resuelve esperando a tener más historia.",
            },
            {
              q: "¿Qué se pierde al suponer la matriz diagonal?",
              a: "Las covarianzas, es decir, la información sobre cómo se equivocan juntas las previsiones. La diagonal solo recoge cuánto se equivoca cada una. Si dos ramas fallan siempre en el mismo sentido por compartir un choque común, la reconciliación podría aprovecharlo y con una matriz diagonal no puede. Diagonalizar equivale a creerse el árbol declarado.",
            },
            {
              q: "¿En qué se diferencian la diagonal estructural y la de varianzas de residuos?",
              a: "La estructural asigna a cada serie una varianza proporcional al número de hojas que agrega: no exige estimar nada, solo contar, y por eso es robusta. La de varianzas usa los residuos de cada modelo, que es información real, y funciona mejor cuando la calidad de los modelos difiere mucho entre series; pero falla si los residuos históricos no representan bien el error futuro, por ejemplo tras un cambio estructural.",
            },
            {
              q: "¿Por qué la contracción se ha convertido en la opción por defecto?",
              a: "Porque mezcla la matriz muestral —informativa pero inestable— con una diagonal estable, dando más peso a la primera cuanto más datos haya. Conserva parte de la información de correlación sin heredar la casi singularidad de la muestral, y el resultado siempre es invertible. No es óptima en ningún sentido teórico limpio, pero funciona bien en la práctica.",
            },
            {
              q: "¿Qué comparación hay que hacer siempre antes de adoptar una aproximación?",
              a: "Contra la proyección ortogonal, que no supone nada. Cualquier aproximación más sofisticada tiene que demostrar mejora fuera de muestra sobre ella; si no lo hace, la complejidad añadida no se justifica. La ganancia de refinar la matriz es real pero modesta, y la pérdida por refinarla mal puede ser grande.",
            },
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
              q: "Una jerarquía se estima con diez años de datos mensuales. ¿Cuántas series admite como máximo una matriz de covarianzas completa?",
              opciones: [
                "Diez, una por cada año de historia disponible",
                "Quince, porque 15 · 16 / 2 = 120 y hay 120 observaciones",
                "Ciento veinte, una por cada observación de la muestra",
                "No hay límite: basta con esperar a acumular más historia",
              ],
              correcta: 1,
              porque: [
                "Los años de historia no acotan nada por sí solos: lo que cuenta son las observaciones totales, 120 en diez años mensuales, frente a los parámetros que hay que estimar.",
                "Una matriz de n series tiene n(n+1)/2 entradas distintas. Con n = 15 salen 120, exactamente las observaciones disponibles; a partir de ahí hay más parámetros que datos y la matriz muestral deja de ser invertible.",
                "Confunde el número de observaciones con el número de series. Con 120 series harían falta 7.260 parámetros y solo habría 120 datos.",
                "Los parámetros crecen con el cuadrado del número de series y las observaciones solo linealmente con el tiempo, así que esperar no cierra la brecha: la agranda si la jerarquía crece a la vez.",
              ],
            },
            {
              q: "¿Qué información se renuncia a usar al suponer que la matriz es diagonal?",
              opciones: [
                "Ninguna relevante: diagonalizar solo acelera el cálculo",
                "Las varianzas de cada serie, que quedan sustituidas por una común",
                "Las covarianzas, es decir, cómo se equivocan juntas las previsiones",
                "La coherencia de la jerarquía, que deja de estar garantizada",
              ],
              correcta: 2,
              porque: [
                "Diagonalizar no es una simplificación gratuita: elimina información real y equivale a dar por buena la estructura de dependencia que el árbol declara.",
                "Las varianzas son justamente lo único que la diagonal sí conserva. Lo que desaparece está fuera de la diagonal.",
                "La diagonal recoge cuánto se equivoca cada previsión por separado; las covarianzas recogen si dos ramas fallan siempre en el mismo sentido por compartir un choque común. Esa es la información que la reconciliación podría aprovechar y con una matriz diagonal no puede.",
                "La coherencia la garantiza la matriz de agregación, no la de covarianzas: cualquier reconciliación proyecta sobre el subespacio coherente, sea cual sea la matriz de ponderación.",
              ],
            },
            {
              q: "Al construir la matriz, ¿sobre qué hay que calcular las covarianzas?",
              opciones: [
                "Sobre las series de la jerarquía, que es lo que se está prediciendo",
                "Sobre los errores de previsión de cada serie",
                "Sobre las series ya reconciliadas, para incorporar la coherencia",
              ],
              correcta: 1,
              porque: [
                "Es el error más frecuente. Las series de una jerarquía están correlacionadísimas por construcción, porque unas son literalmente sumas de otras; esa correlación es aritmética, no informativa, y no dice nada sobre la fiabilidad relativa de cada previsión.",
                "El método pondera según cuánto y cómo se equivoca cada previsión, así que la materia prima son los errores, no los niveles. Es lo único que distingue una rama bien modelada de otra que no lo está.",
                "Usar las series reconciliadas mete la conclusión en la premisa: la coherencia ya la impone la proyección, y calcular sobre ellas solo reproduce la estructura que se acaba de imponer.",
              ],
            },
            {
              q: "¿Cuál es la disciplina razonable al elegir aproximación de la matriz?",
              opciones: [
                "Empezar por la matriz completa y simplificarla solo si el cálculo falla",
                "Escoger la aproximación más sofisticada que los datos permitan estimar",
                "Partir de la proyección ortogonal y exigir a cada alternativa mejora fuera de muestra",
                "Quedarse con la que produzca las cifras más coherentes entre niveles",
              ],
              correcta: 2,
              porque: [
                "La matriz completa casi nunca es estimable, y esperar a que «el cálculo falle» es peligroso: una matriz casi singular no falla, devuelve números de aspecto razonable que son ruido amplificado.",
                "La ganancia de refinar la matriz es real pero modesta, mientras que la pérdida por refinarla mal puede ser grande. La sofisticación no es gratis.",
                "La proyección ortogonal no supone nada y por eso es el punto de partida honesto. Cualquier refinamiento añade hipótesis, así que le corresponde a él demostrar que compensa, y la única prueba válida es la evaluación fuera de muestra por niveles.",
                "Toda reconciliación produce cifras coherentes por construcción: la coherencia es el requisito que todas cumplen, no un criterio que distinga entre ellas.",
              ],
            },
          ],
          nota: "Las opciones falsas no son relleno: cada una recoge un error documentado en «Errores típicos». Si una te ha resultado plausible, ese es el apartado al que volver.",
        },
      ],
    },

    {
      titulo: "Para profundizar",
      contenido: [
        {
          tipo: "fuentes",
          items: [
            { ref: "Wickramasuriya, Athanasopoulos y Hyndman, «Optimal Forecast Reconciliation Through Trace Minimization»", nota: "la discusión de las aproximaciones a la matriz de covarianzas, con la comparación empírica entre ellas; la sección más práctica del artículo." },
            { ref: "Schäfer y Strimmer, «A Shrinkage Approach to Large-Scale Covariance Matrix Estimation»", nota: "el estimador por contracción que emplean las implementaciones habituales, con la derivación del peso óptimo de la mezcla." },
            { ref: "Ledoit y Wolf, «A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices»", nota: "el planteamiento original del problema de estimar covarianzas cuando hay más parámetros que datos, en el contexto de carteras financieras." },
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice", nota: "las opciones concretas disponibles en las implementaciones y cómo compararlas sobre una jerarquía propia." },
          ],
        },
      ],
    },
  ],
};
