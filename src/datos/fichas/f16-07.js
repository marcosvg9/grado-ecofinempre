/* Ficha 16.07 — Reconciliación probabilística. */

export default {
  codigo: "16.07",
  titulo: "Reconciliación probabilística",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "5 h",
  nucleo:
    "Reconciliar puntos no basta si lo que se publica son intervalos. Y sumar los intervalos de las partes para obtener el del total da exactamente el doble de anchura de la correcta, salvo que las partes estén perfectamente correlacionadas.",
  requiere: "16.05 Estimación de la matriz de covarianzas · 16.04 Combinación óptima y MinT · 4.03 Probabilidad e inferencia",
  abre: "16.08 Evaluación de previsiones · 16.10 Herramientas y práctica · 8.10 Gestión de riesgos",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo lo anterior ha tratado con previsiones puntuales: un número por serie. Pero cualquier previsión seria se publica con una medida de incertidumbre, y ahí aparece un problema nuevo. **La coherencia de los puntos no implica la coherencia de las distribuciones.** Se puede tener un conjunto de previsiones puntuales que cuadra perfectamente y unos intervalos que son mutuamente imposibles.",
            "Conviene precisar qué significa coherencia para una distribución. Una previsión probabilística de una jerarquía es una distribución conjunta sobre todas las series; es **coherente** si asigna probabilidad cero a cualquier combinación que viole las restricciones. Dicho de otro modo, toda la masa de probabilidad debe estar sobre el subespacio coherente de la ficha 16.02. Reconciliar los puntos coloca la media dentro del subespacio; la reconciliación probabilística coloca **toda la distribución**.",
            "El error más frecuente y más caro es tratar los intervalos como si fueran cantidades que se suman. Si cuatro hojas tienen cada una un intervalo de cierta anchura, la tentación es sumar las cuatro anchuras para obtener la del total. Eso **solo es correcto si las cuatro se equivocan siempre a la vez y en el mismo sentido**, es decir, con correlación perfecta. Con errores independientes, la anchura correcta es la suma en cuadratura, notablemente menor, y el ejemplo numérico muestra que la diferencia es de un factor dos.",
            "Hay dos familias de métodos para hacerlo bien. La **paramétrica** supone que las previsiones base siguen una distribución conocida, normalmente normal multivariante, y aprovecha que la familia normal se conserva bajo transformaciones lineales: la proyección de una normal es otra normal, cuya media y covarianza se calculan directamente. Es elegante, rápida y depende de un supuesto que en series económicas rara vez se cumple del todo, sobre todo en las colas.",
            "La **no paramétrica** evita ese supuesto. Genera muchas trayectorias futuras simuladas de las series base —por remuestreo de residuos o por simulación del modelo—, **proyecta cada trayectoria sobre el subespacio coherente**, y usa el conjunto de trayectorias proyectadas como distribución reconciliada. Los intervalos se leen entonces como percentiles de esa muestra. Es más costosa, no supone forma funcional y tiene una ventaja adicional importante: **preserva la dependencia entre series y entre horizontes**, que es lo que hace falta para responder preguntas del tipo «¿cuál es la probabilidad de que el total baje dos trimestres seguidos?».",
            "Ese último punto merece subrayarse porque justifica el esfuerzo. Un conjunto de intervalos marginales, uno por serie y por horizonte, no permite responder ninguna pregunta conjunta. Y las preguntas que importan casi siempre son conjuntas: la probabilidad de recesión técnica, la de que una rama caiga mientras otra sube, la de que el déficit supere un umbral. Solo una distribución conjunta coherente las responde, y la reconciliación probabilística es la forma de construirla.",
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
            { nom: "Coherencia probabilística", sub: "La definición.", cols: ["Probabilidad cero fuera del subespacio coherente"] },
            { nom: "Lo que no basta", sub: "El error de partida.", cols: ["Reconciliar los puntos solo coloca la media"] },
            { nom: "Varianza de una suma", sub: "La aritmética que se olvida.", cols: ["$\\mathrm{Var}\\left(\\sum X\\right) = \\sum \\mathrm{Var} + 2\\sum \\text{covarianzas}$"] },
            { nom: "Suma de intervalos", sub: "Cuándo es correcta.", cols: ["Solo con correlación perfecta entre las partes"] },
            { nom: "Caso independiente", sub: "El otro extremo.", cols: ["La anchura crece con $\\sqrt n$, no con $n$"] },
            { nom: "Método paramétrico", sub: "Rápido y con supuesto.", cols: ["La proyección de una normal es normal"] },
            { nom: "Método no paramétrico", sub: "Costoso y general.", cols: ["Simular trayectorias y proyectar cada una"] },
            { nom: "Ventaja de simular", sub: "Lo que ningún intervalo marginal da.", cols: ["Preserva dependencia entre series y entre horizontes"] },
            { nom: "Preguntas conjuntas", sub: "Por qué compensa el esfuerzo.", cols: ["Probabilidad de recesión, de superar un umbral, etc."] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: el intervalo del total",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cuatro series hoja, cada una con la misma incertidumbre y un intervalo del 90 % de anchura $\\pm 1{,}645\\,\\sigma$, que es el que corresponde a una normal. La pregunta es cuál debe ser el intervalo del total, y la respuesta depende enteramente de **cómo se correlacionen los errores** de las cuatro.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Correlación entre los errores", y: "Semianchura del intervalo (en σ)" },
          dominio: { x: [0, 1], y: [0, 7.6] },
          marcasX: [0, 0.25, 0.5, 0.75, 1],
          marcasY: [0, 2, 4, 6],
          series: [
            {
              nombre: "Suma ingenua de los cuatro intervalos",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [0.04, 7.25],
              puntos: [[0, 6.58], [1, 6.58]],
            },
            {
              nombre: "Intervalo correcto del total",
              color: "acento",
              etiquetaEn: [0.04, 2.1],
              puntos: [[0, 3.29], [0.2, 4.162], [0.4, 4.879], [0.6, 5.506], [0.8, 6.066], [1, 6.58]],
            },
          ],
          nota: "Las dos líneas **solo se tocan en el extremo derecho**, cuando la correlación es perfecta. Con errores independientes, el intervalo correcto es $\\pm 3{,}29\\,\\sigma$ y la suma ingenua da $\\pm 6{,}58\\,\\sigma$: exactamente el doble. Sumar los intervalos equivale a afirmar que las cuatro hojas se equivocarán siempre a la vez y en el mismo sentido, que es la hipótesis más pesimista posible y casi nunca la cierta.",
        },
        {
          tipo: "tabla",
          cabecera: ["Correlación entre errores", "Varianza de la suma", "Desviación típica", "Intervalo al 90 %"],
          filas: [
            ["0 · independientes", "$4\\sigma^2$", "2,000 $\\sigma$", "$\\pm 3{,}290\\,\\sigma$"],
            ["0,3", "$7{,}6\\,\\sigma^2$", "2,757 $\\sigma$", "$\\pm 4{,}535\\,\\sigma$"],
            ["0,6", "$11{,}2\\,\\sigma^2$", "3,347 $\\sigma$", "$\\pm 5{,}505\\,\\sigma$"],
            { celdas: ["1 · perfecta", "$16\\sigma^2$", "4,000 $\\sigma$", "$\\pm 6{,}580\\,\\sigma$"], clase: "total" },
          ],
          nota: "La varianza de la suma es $4\\sigma^2$ **más doce veces la covarianza**: cuatro términos de varianza y doce pares. Por eso pasar de correlación 0 a 1 cuadruplica la varianza y solo duplica la anchura del intervalo. La consecuencia práctica es que **la correlación entre errores importa más para los intervalos que para los puntos**: en el punto reconciliado influye modestamente, en la anchura del intervalo puede multiplicarla por dos.",
        },
        {
          tipo: "parrafos",
          items: [
            "Esto explica por qué la matriz de covarianzas de la ficha 16.05 es todavía más crítica aquí. En la reconciliación puntual, diagonalizar la matriz produce un resultado algo peor pero razonable. En la probabilística, **diagonalizar equivale a afirmar que los errores son independientes**, y si no lo son, los intervalos del agregado saldrán sistemáticamente demasiado estrechos. Un intervalo demasiado estrecho es peor que uno demasiado ancho, porque transmite una confianza que no está justificada.",
            "Hay un caso especialmente traicionero: cuando las series hoja comparten un factor común no modelado. Si un choque de precios de la energía afecta a todas las ramas, sus errores de previsión estarán positivamente correlacionados aunque los modelos individuales sean correctos, y la incertidumbre del total será mucho mayor que la que sugiere la agregación bajo independencia. **Es exactamente la situación en la que un intervalo optimista hace más daño.**",
            "El método de simulación resuelve esto sin necesidad de estimar la correlación explícitamente, siempre que las trayectorias se generen conservando la dependencia. Si se remuestrean **vectores completos de residuos** —todas las series del mismo periodo a la vez— en lugar de residuos serie a serie, la correlación entre errores queda incorporada por construcción, sin haber estimado ninguna matriz. Es un argumento de peso a favor del enfoque no paramétrico en jerarquías donde estimar la matriz sería imposible.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: la probabilidad de recesión técnica",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un banco central quiere publicar la probabilidad de que la economía entre en recesión técnica —dos trimestres consecutivos de crecimiento negativo— y también previsiones por ramas. El ejercicio muestra por qué los intervalos marginales no bastan y qué hace falta en su lugar.",
            "Con previsiones puntuales por rama y un intervalo para cada una, la pregunta **no tiene respuesta**. Un intervalo dice qué puede pasar con una serie en un horizonte; la pregunta involucra dos horizontes consecutivos de una misma serie, que es una propiedad conjunta. Ni siquiera con el intervalo del PIB en cada trimestre se puede calcular: haría falta saber cómo se relacionan los errores de un trimestre y del siguiente.",
            "Con **trayectorias simuladas** la respuesta es inmediata y no requiere fórmula: se generan diez mil trayectorias del sistema completo, se proyecta cada una sobre el subespacio coherente, y se cuenta en qué proporción de ellas hay dos trimestres negativos consecutivos. Esa proporción **es** la probabilidad buscada. Y como las trayectorias son coherentes, la respuesta es compatible con las previsiones por ramas que se publican al lado.",
            "El mismo conjunto de trayectorias responde a otras preguntas sin trabajo adicional: la probabilidad de que el turismo caiga mientras la industria crece, la de que el total supere un umbral, la distribución del crecimiento acumulado en cuatro trimestres. **Todas son funciones de la distribución conjunta**, y una vez que se tiene, se contestan contando. Esa versatilidad es el argumento práctico decisivo a favor de trabajar con trayectorias en lugar de con intervalos.",
            "Conviene un aviso final sobre el coste y sobre qué se está suponiendo. Simular no es gratis en jerarquías grandes, y sobre todo, **la calidad de las trayectorias depende de que los residuos históricos representen la incertidumbre futura**. Si el periodo de estimación no contiene episodios como el que viene, las trayectorias no lo contendrán tampoco y la probabilidad calculada será demasiado optimista. Es la misma limitación que la ficha 8.10 señala del VaR: la simulación reproduce la variabilidad observada, no la posible.",
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
            { t: "Sumar los intervalos de las partes para obtener el del total", d: "Solo es correcto con correlación perfecta entre los errores. Con errores independientes, la anchura correcta es la mitad: $\\pm 3{,}29\\,\\sigma$ frente a $\\pm 6{,}58\\,\\sigma$ en el ejemplo de cuatro hojas. Sumar anchuras equivale a suponer el peor caso posible de dependencia, que casi nunca es el real." },
            { t: "Creer que reconciliar los puntos basta", d: "Reconciliar coloca la media dentro del subespacio coherente, pero la distribución puede seguir asignando probabilidad a combinaciones imposibles. Un conjunto de previsiones puntuales que cuadra perfectamente puede venir acompañado de intervalos mutuamente incompatibles." },
            { t: "Diagonalizar la matriz al construir intervalos", d: "En la reconciliación puntual diagonalizar da un resultado algo peor y razonable; en la probabilística equivale a afirmar independencia, y si los errores están correlacionados, los intervalos del agregado saldrán sistemáticamente demasiado estrechos. Un intervalo estrecho de más transmite una confianza injustificada." },
            { t: "Remuestrear residuos serie a serie", d: "Destruye la correlación entre series, que es justo lo que hace falta conservar. Hay que remuestrear vectores completos de residuos, todas las series del mismo periodo a la vez, y así la dependencia queda incorporada sin haber estimado ninguna matriz." },
            { t: "Publicar intervalos marginales y responder preguntas conjuntas", d: "Un intervalo por serie y horizonte no permite calcular la probabilidad de dos trimestres negativos seguidos, ni la de que una rama caiga mientras otra sube. Esas preguntas son funciones de la distribución conjunta, y sin ella no tienen respuesta por mucho que se manipulen los márgenes." },
            { t: "Suponer normalidad sin comprobarla", d: "El método paramétrico aprovecha que la proyección de una normal es normal, lo que es cómodo y rápido. Pero las series económicas rara vez son normales en las colas, que es precisamente la parte que determina los intervalos extremos y las probabilidades de sucesos raros." },
            { t: "Confiar en que la simulación capture lo que no ocurrió", d: "Las trayectorias reproducen la variabilidad observada en el periodo de estimación. Si ahí no hay episodios como el que viene, la probabilidad calculada será demasiado optimista. Es la misma limitación que afecta al VaR histórico, y no se resuelve simulando más trayectorias." },
            { t: "Olvidar la dependencia entre horizontes", d: "Además de la correlación entre series, importa la correlación entre periodos de una misma serie. Los intervalos marginales por horizonte la ignoran, y sin ella no se pueden calcular probabilidades sobre trayectorias, que son las que interesan en análisis de coyuntura." },
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
            "La estadística oficial publica agregados sin medida de incertidumbre, y esta ficha explica por qué construirla sería más difícil de lo que parece.",
          ],
          lista: [
            "Las cuentas nacionales **no publican intervalos**. Las cifras del SEC se presentan como estimaciones puntuales, y la ficha 10.10 señalaba que esa ausencia da una impresión de precisión que las revisiones desmienten. Construir intervalos exigiría exactamente el aparato de esta ficha, porque los agregados son sumas y su incertidumbre depende de la correlación entre los errores de sus componentes.",
            "Esa correlación es alta y conocida en cuentas nacionales, lo que agrava el problema. Las partidas que proceden de la misma encuesta o del mismo registro administrativo tienen errores correlacionados por construcción, como advertía la ficha 16.05. Un intervalo del PIB calculado suponiendo independencia entre sus componentes sería **sistemáticamente demasiado estrecho**, y publicarlo sería peor que no publicar nada.",
            "Algunos institutos publican **estimaciones de la revisión típica** en lugar de intervalos: cuánto suele moverse el primer dato hasta su versión definitiva. Es una medida de incertidumbre honesta y empírica que evita el problema de modelizar la distribución conjunta, aunque solo captura la incertidumbre por revisión y no la de medición.",
            "El **enfoque de simulación** encaja bien con la estructura del sistema porque no exige estimar la matriz completa. Remuestrear vectores de errores históricos de todas las partidas a la vez, proyectarlos sobre las identidades contables de la ficha 13.02 y leer percentiles daría intervalos coherentes con las restricciones sin suponer independencia. Que no se haga responde más a la tradición de presentación que a una imposibilidad técnica.",
            "Hay por último una implicación sobre las **reglas fiscales**. Umbrales como el 3 % de déficit o el 60 % de deuda de la ficha 3.11 se aplican a cifras puntuales, como si no tuvieran error. Una formulación probabilística —la probabilidad de superar el umbral— sería más informativa y exigiría precisamente una distribución conjunta coherente de las partidas implicadas.",
          ],
          cierre:
            "La consecuencia práctica: la incertidumbre de un agregado no se obtiene sumando la de sus partes. Ese error, cometido con signo optimista, produce intervalos que tranquilizan sin motivo.",
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
              q: "Cuatro hojas tienen cada una un intervalo del 90 % de $\\pm 1{,}645\\,\\sigma$. ¿Cuál es el del total si los errores son independientes?",
              a: "$\\pm 3{,}290\\,\\sigma$, la mitad de lo que da sumar los cuatro intervalos. La varianza de la suma de cuatro variables independientes es $4\\sigma^2$, así que su desviación típica es $2\\sigma$ y el intervalo, $\\pm 1{,}645 \\times 2\\sigma$. Sumar las anchuras daría $\\pm 6{,}580\\,\\sigma$, que solo sería correcto si las cuatro se equivocaran siempre a la vez y en el mismo sentido.",
            },
            {
              q: "¿Qué significa que una previsión probabilística de una jerarquía sea coherente?",
              a: "Que asigna probabilidad cero a cualquier combinación de valores que viole las restricciones de suma, es decir, que toda la masa de probabilidad está sobre el subespacio coherente. Reconciliar los puntos solo coloca la media dentro del subespacio; la reconciliación probabilística coloca la distribución entera.",
            },
            {
              q: "¿Por qué es más grave diagonalizar la matriz de covarianzas al construir intervalos que al reconciliar puntos?",
              a: "Porque diagonalizar equivale a afirmar que los errores son independientes, y de esa hipótesis depende directamente la anchura del intervalo del agregado. Si los errores están positivamente correlacionados y se supone independencia, los intervalos salen sistemáticamente demasiado estrechos, lo que transmite una confianza injustificada. En la reconciliación puntual el efecto es mucho más leve.",
            },
            {
              q: "¿Cómo se conserva la correlación entre series al simular trayectorias?",
              a: "Remuestreando vectores completos de residuos: todas las series del mismo periodo a la vez, en lugar de residuos serie a serie. Así la dependencia entre errores queda incorporada por construcción, sin haber estimado ninguna matriz de covarianzas. Es un argumento de peso a favor del enfoque no paramétrico en jerarquías grandes donde estimar la matriz sería imposible.",
            },
            {
              q: "¿Por qué unos intervalos marginales no permiten calcular la probabilidad de recesión técnica?",
              a: "Porque la pregunta involucra dos trimestres consecutivos de la misma serie, que es una propiedad conjunta. Un intervalo dice qué puede pasar con una serie en un horizonte, pero no cómo se relacionan los errores de un periodo y del siguiente. Con trayectorias simuladas la respuesta es inmediata: se cuenta en qué proporción de ellas hay dos trimestres negativos seguidos.",
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
              q: "Cuatro hojas tienen intervalos del 90 % de la misma anchura. ¿Cuál es el intervalo del total?",
              opciones: [
                "La media de los cuatro",
                "La suma de los cuatro, en cualquier caso",
                "La suma de los cuatro, si los errores están perfectamente correlacionados",
                "El mayor de los cuatro",
              ],
              correcta: 2,
              porque: [
                "La media no corresponde a ningún supuesto sobre la dependencia.",
                "Es el error más común y siempre exagera: la varianza de una suma incorpora las covarianzas, y con independencia estas son cero.",
                "Sumarlos supone implícitamente correlación perfecta: que las cuatro se equivoquen a la vez y en el mismo sentido. Con errores independientes la anchura correcta es la mitad.",
                "El mayor infravalora: hay cuatro fuentes de error, no una.",
              ],
            },
            {
              q: "Se reconcilian los puntos de una jerarquía. ¿Basta para tener previsiones probabilísticas coherentes?",
              opciones: [
                "Sí, si además los intervalos se recalculan con la varianza reconciliada",
                "Sí: si las medias cuadran, la distribución conjunta también",
                "No, salvo que las previsiones base sean normales",
                "No: reconciliar coloca la media dentro del subespacio, pero la distribución puede seguir asignando probabilidad a combinaciones imposibles",
              ],
              correcta: 3,
              porque: [
                "Recalcular las varianzas marginales tampoco garantiza que la conjunta no asigne masa a combinaciones que no pueden ocurrir.",
                "La media es un punto de la distribución: que ese punto esté bien colocado no dice nada del resto.",
                "La normalidad facilita el cálculo y no convierte una reconciliación puntual en probabilística.",
                "La coherencia probabilística exige probabilidad cero fuera del subespacio coherente, y eso es bastante más que colocar la media.",
              ],
            },
            {
              q: "¿Por qué es más grave diagonalizar la matriz de covarianzas al construir intervalos que al reconciliar puntos?",
              opciones: [
                "Porque diagonalizar cambia la media de la distribución",
                "Porque los intervalos se calculan sobre la serie ajustada y los puntos sobre la bruta",
                "Porque los intervalos exigen invertir la matriz y los puntos no",
                "Porque en la construcción de intervalos equivale a afirmar independencia entre los errores, y si no la hay las anchuras salen mal",
              ],
              correcta: 3,
              porque: [
                "La media no cambia por diagonalizar: lo que cambia es la dispersión estimada.",
                "Ambos se calculan sobre las mismas series.",
                "Ambos procedimientos operan con la misma matriz; la diferencia está en qué se pierde al simplificarla.",
                "En la reconciliación puntual diagonalizar da un resultado algo peor y razonable; aquí introduce un supuesto fuerte que determina directamente la anchura publicada.",
              ],
            },
            {
              q: "Se simulan trayectorias para obtener previsiones probabilísticas. ¿Cómo hay que remuestrear los residuos?",
              opciones: [
                "Serie a serie, para que cada una conserve su propia distribución",
                "Por vectores completos: todas las series de la misma fecha juntas, para conservar la correlación entre ellas",
                "Solo los residuos de las series hoja, y agregar después",
                "Aleatoriamente sobre el conjunto de todos los residuos de todas las series",
              ],
              correcta: 1,
              porque: [
                "Remuestrear serie a serie destruye la correlación entre series, que es justo lo que hace falta conservar.",
                "Y conviene además preservar la dependencia entre horizontes: los intervalos marginales por horizonte la ignoran y no permiten responder preguntas conjuntas.",
                "Limitarse a las hojas es bottom-up con otro nombre, y desaprovecha las previsiones de los niveles agregados.",
                "Mezclar residuos de series distintas rompe tanto la correlación como las distribuciones marginales.",
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
            { ref: "Panagiotelis, Gamakumara, Athanasopoulos y Hyndman, «Probabilistic Forecast Reconciliation»", nota: "el planteamiento formal de la coherencia para distribuciones y los métodos paramétrico y por simulación; la referencia del tema." },
            { ref: "Gamakumara y otros, «Probabilistic Forecasts in Hierarchical Time Series»", nota: "la comparación empírica entre enfoques y la evidencia sobre cuánto se estrechan indebidamente los intervalos al suponer independencia." },
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice", nota: "la exposición aplicada del remuestreo de vectores de residuos y de la lectura de percentiles sobre trayectorias proyectadas." },
            { ref: "Gneiting y Katzfuss, «Probabilistic Forecasting»", nota: "el marco general de evaluación de previsiones probabilísticas, necesario para juzgar si unos intervalos reconciliados son buenos." },
          ],
        },
      ],
    },
  ],
};
