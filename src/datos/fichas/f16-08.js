/* Ficha 16.08 — Evaluación de previsiones jerárquicas. */

export default {
  codigo: "16.08",
  titulo: "Evaluación de previsiones jerárquicas",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "4 h",
  nucleo:
    "Comparar métodos exige medir bien, y en una jerarquía las escalas difieren en órdenes de magnitud. Un error medio sin escalar no mide la calidad del conjunto: mide sobre todo el nivel más agregado, que acapara un tercio del total siendo una serie de siete.",
  requiere: "16.04 Combinación óptima y MinT · 16.03 Bottom-up y top-down · 4.04 Contraste de hipótesis",
  abre: "16.10 Herramientas y práctica · 16.05 Estimación de la matriz · 15.08 Política de revisiones",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo lo anterior afirma que unos métodos son mejores que otros, y esa afirmación exige poder medirlo. La evaluación de previsiones jerárquicas tiene dos dificultades propias que no aparecen cuando se evalúa una serie aislada, y ambas producen conclusiones equivocadas con facilidad.",
            "La primera es la **diferencia de escala**. En la jerarquía del bloque, el total vale 132 y energía vale 22: un factor seis. Si todas las series se equivocan en el mismo porcentaje, sus errores absolutos son proporcionales al nivel, así que promediar errores absolutos sin escalar da un número dominado por las series grandes. El ejemplo numérico lo cuantifica: **el total acapara un tercio del error medio siendo una de siete series**. Comparar métodos con esa medida es comparar cómo lo hacen en el nivel agregado, disfrazado de evaluación global.",
            "La segunda es más sutil y produce comparaciones directamente tramposas. **Cada método clásico es exacto por construcción en un nivel**: bottom-up reproduce sin error las previsiones base de las hojas y top-down las del total. Si la evaluación se hace únicamente en las hojas, bottom-up gana automáticamente sin que eso diga nada; si se hace en el total, gana top-down. La comparación honesta exige **evaluar en todos los niveles a la vez**, y la forma de agregar esa evaluación es precisamente el problema de escala anterior.",
            "La salida habitual son las **medidas escaladas**, que dividen el error por una referencia de la propia serie. La más usada compara el error con el que habría cometido una previsión ingenua sobre los datos históricos de esa misma serie, lo que produce un número adimensional comparable entre series de cualquier tamaño. Su virtud es que se puede promediar sin que las series grandes dominen; su límite es que depende de qué previsión ingenua se elija como referencia.",
            "Conviene además **evaluar por niveles y presentarlo por separado**, no solo agregado. Un método puede mejorar mucho en las hojas y empeorar ligeramente en el total, y esa información se pierde en cualquier resumen escalar. La presentación estándar es una tabla con una fila por nivel de agregación y una columna por método, más una fila de resumen; sin la primera parte, el resumen no se puede interpretar.",
            "Por último, una cuestión que se olvida sistemáticamente: **la evaluación debe ser fuera de muestra y con origen móvil**. Reconciliar sobre los mismos datos con los que se estimó la matriz de covarianzas y evaluar ahí produce resultados optimistas. El procedimiento correcto es reproducir la situación real —estimar con la información disponible hasta cada fecha, prever, reconciliar, comparar con lo que ocurrió— y repetirlo desplazando el origen. Es costoso y es lo único que da una medida creíble.",
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
            { nom: "Problema de escala", sub: "El primero y el más común.", cols: ["Los errores absolutos son proporcionales al nivel"] },
            { nom: "Consecuencia", sub: "Qué mide realmente un error medio.", cols: ["Sobre todo el nivel más agregado"] },
            { nom: "Exactitud por construcción", sub: "La trampa de comparar en un nivel.", cols: ["Bottom-up acierta en las hojas · top-down en el total"] },
            { nom: "Medidas escaladas", sub: "La salida habitual.", cols: ["Error dividido por el de una previsión ingenua de la serie"] },
            { nom: "Ventaja", sub: "Por qué funcionan.", cols: ["Adimensionales: se pueden promediar entre series"] },
            { nom: "Límite", sub: "De qué dependen.", cols: ["De qué previsión ingenua se tome como referencia"] },
            { nom: "Presentación", sub: "Cómo se informa.", cols: ["Una fila por nivel más un resumen, nunca solo el resumen"] },
            { nom: "Origen móvil", sub: "La única evaluación creíble.", cols: ["Estimar con lo disponible en cada fecha y repetir"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: quién manda en el error medio",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Supóngase el caso más neutral posible: **todas las series se equivocan exactamente un 1 %**. Ningún método es mejor en ningún nivel, el error relativo es idéntico en las siete. La pregunta es qué cuota del error absoluto medio aporta cada una, y la respuesta muestra que la medida no es neutral aunque el escenario lo sea.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Serie de la jerarquía", y: "Cuota del error medio %" },
          dominio: { x: [1, 7], y: [0, 39] },
          marcasX: [1, 2, 3, 4, 5, 6, 7],
          marcasY: [0, 10, 20, 30],
          series: [
            {
              nombre: "Cuota en el error absoluto medio",
              color: "alerta",
              etiquetaEn: [3.3, 35.5],
              puntos: [[1, 33.1], [2, 14.4], [3, 19], [4, 8], [5, 6.1], [6, 13.8], [7, 5.5]],
            },
            {
              nombre: "Cuota equitativa (1 de 7)",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [3.3, 27],
              puntos: [[1, 14.29], [7, 14.29]],
            },
          ],
          nota: "Con **todas las series fallando lo mismo en términos relativos**, el total aporta el 33,1 % del error medio y energía el 5,5 %. La cuota equitativa sería del 14,29 %: el total pesa **2,32 veces lo que le corresponde** y energía, 0,39 veces. Un método que mejorase mucho en energía y empeorase un poco en el total saldría perdiendo en esta medida, aunque hubiera mejorado en seis de las siete series.",
        },
        {
          tipo: "tabla",
          cabecera: ["Serie", "Nivel", "Error absoluto al 1 %", "Cuota del error medio", "Frente a lo equitativo"],
          filas: [
            ["Total", "132,0", "1,320", "33,1 %", "×2,32"],
            ["Industria", "76,0", "0,760", "19,0 %", "×1,33"],
            ["Turismo", "57,5", "0,575", "14,4 %", "×1,01"],
            ["Manufactura", "55,0", "0,550", "13,8 %", "×0,96"],
            ["Hostelería", "32,0", "0,320", "8,0 %", "×0,56"],
            ["Transporte", "24,5", "0,245", "6,1 %", "×0,43"],
            { celdas: ["Energía", "22,0", "0,220", "5,5 %", "×0,39"], clase: "total" },
          ],
          nota: "Las **cuatro hojas juntas aportan el 33,5 %**, prácticamente lo mismo que el total por sí solo. Es decir: en un error medio sin escalar, la mitad más desagregada de la jerarquía pesa tanto como su única serie superior. Y la jerarquía del ejemplo es pequeña y equilibrada; en una real con centenares de hojas de tamaños muy dispares, el desequilibrio es mucho mayor.",
        },
        {
          tipo: "parrafos",
          items: [
            "La corrección es dividir cada error por una referencia propia de la serie, de modo que el resultado sea adimensional. La opción habitual toma como referencia el error medio que habría cometido una previsión ingenua —el último valor observado, o el del mismo periodo del año anterior si hay estacionalidad— sobre el histórico de esa serie. Un valor por debajo de uno indica que el método bate a la previsión ingenua.",
            "Esa medida se puede promediar entre series sin que las grandes dominen, y además tiene una lectura inmediata. Pero conviene ser consciente de su dependencia: **la referencia ingenua define la escala**, y una serie muy predecible tendrá un denominador pequeño que hará parecer mediocre a un método bueno. Por eso los resultados se presentan siempre por nivel además de agregados, y por eso conviene comparar métodos entre sí y no contra un umbral absoluto.",
            "Un aviso adicional sobre significación. Las diferencias entre métodos de reconciliación suelen ser modestas —del orden de unos pocos puntos porcentuales de error—, y con un número limitado de orígenes de previsión pueden no ser distinguibles del ruido. Concluir que un método es superior a partir de una diferencia pequeña sobre veinte evaluaciones es exactamente el error que la ficha 4.04 advierte. Los contrastes de igualdad de exactitud predictiva existen precisamente para esto y deberían acompañar a cualquier comparación.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: cómo se monta una comparación honesta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un equipo quiere decidir si adoptar la reconciliación óptima frente al bottom-up que viene usando. El diseño de la comparación decide el resultado más que los métodos, así que conviene recorrerlo con cuidado.",
            "**Primero, fijar el conjunto de orígenes.** Se elige un tramo de la historia como periodo de evaluación y se recorre desplazando el origen: en cada fecha se estima con la información disponible hasta ese momento, se prevé a los horizontes de interés, se reconcilia y se guarda el error contra lo que efectivamente ocurrió. Cualquier atajo aquí —estimar con toda la muestra, reconciliar con una matriz calculada sobre datos futuros— produce resultados optimistas que no se reproducirán en producción.",
            "**Segundo, evaluar en todos los niveles.** Se calculan errores escalados serie a serie y se agregan por nivel de la jerarquía: hojas, ramas, total. Esto es lo que impide que bottom-up gane por definición en las hojas o top-down en el total. Si un método mejora en unos niveles y empeora en otros, esa es información valiosa que ningún resumen escalar conserva.",
            "**Tercero, incluir referencias que hagan de suelo.** Además de los métodos que se comparan, conviene evaluar las previsiones base sin reconciliar —aunque sean incoherentes— y la proyección ortogonal, que no supone nada. Las primeras dicen cuánto aporta reconciliar; la segunda, cuánto aporta ponderar. Sin esas dos referencias, una mejora observada no se puede atribuir a nada en concreto.",
            "**Cuarto, contrastar.** Si la diferencia entre dos métodos es de un dos por ciento sobre treinta orígenes, hay que preguntarse si es distinguible del ruido antes de reorganizar un proceso de producción. Y si lo es pero es pequeña, conviene ponerla frente al coste: mantener una reconciliación óptima con matriz estimada exige vigilancia continua, mientras que un bottom-up funciona solo. **La decisión correcta no siempre es adoptar el método que gana la comparación**, y decirlo así de claro evita bastante trabajo inútil.",
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
            { t: "Promediar errores absolutos sin escalar", d: "Los errores absolutos son proporcionales al nivel, así que el promedio queda dominado por las series grandes. Con todas las series fallando lo mismo en términos relativos, el total aporta el 33,1 % del error medio siendo una de siete. Esa medida compara cómo lo hacen los métodos en el nivel agregado, disfrazado de evaluación global." },
            { t: "Evaluar en un solo nivel", d: "Bottom-up reproduce sin error las previsiones base de las hojas y top-down las del total: cada uno es exacto por construcción en un nivel. Medir solo ahí garantiza que gane el método que lo respeta, sin que eso diga nada sobre su calidad. Hay que evaluar en todos los niveles y presentarlos por separado." },
            { t: "Estimar y evaluar sobre los mismos datos", d: "Reconciliar con una matriz de covarianzas calculada sobre el periodo en el que después se mide produce resultados optimistas que no se reproducen en producción. La evaluación tiene que ser fuera de muestra y con origen móvil, reproduciendo la información realmente disponible en cada fecha." },
            { t: "Prescindir de referencias", d: "Sin evaluar también las previsiones base sin reconciliar y la proyección ortogonal, una mejora observada no se puede atribuir. Las primeras dicen cuánto aporta reconciliar y la segunda cuánto aporta ponderar; sin ellas solo se sabe que un método salió mejor que otro." },
            { t: "Concluir superioridad de una diferencia pequeña", d: "Las diferencias entre métodos de reconciliación suelen ser de unos pocos puntos porcentuales, y con pocos orígenes de evaluación pueden no ser distinguibles del ruido. Los contrastes de igualdad de exactitud predictiva existen para esto y deberían acompañar a cualquier comparación." },
            { t: "Olvidar que la referencia define la escala", d: "Las medidas escaladas dividen por el error de una previsión ingenua sobre el histórico de la propia serie. Una serie muy predecible tiene un denominador pequeño y hará parecer mediocre a un método bueno. Por eso se comparan métodos entre sí y no contra umbrales absolutos." },
            { t: "Ignorar el coste al decidir", d: "Una mejora pequeña pero real puede no compensar: mantener una reconciliación óptima con matriz estimada exige vigilancia continua, mientras que un bottom-up funciona solo. La decisión correcta no siempre es adoptar el método que gana la comparación." },
            { t: "Evaluar solo previsiones puntuales cuando se publican intervalos", d: "Si el producto son intervalos o probabilidades, evaluarlos con medidas de error puntual no dice si están bien calibrados. Hacen falta medidas propias de previsión probabilística, y un método puede acertar el punto y equivocarse sistemáticamente en la anchura." },
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
            "La estadística oficial evalúa poco y publica menos sobre su propia exactitud, y las dificultades de esta ficha son parte de la razón.",
          ],
          lista: [
            "El equivalente de la evaluación fuera de muestra en cuentas nacionales es el **análisis de revisiones** de la ficha 15.08: comparar la primera estimación publicada con la definitiva. Es una evaluación honesta y con origen móvil por naturaleza, ya que cada trimestre aporta un caso nuevo, y es la información más útil que un instituto puede publicar sobre la fiabilidad de sus datos preliminares.",
            "El **problema de escala** aparece igual. Una revisión media calculada sobre el conjunto de partidas del PIB estará dominada por el consumo final de los hogares (**P.3**), que es la partida mayor, mientras que las revisiones proporcionalmente enormes de la variación de existencias apenas pesarán. Cualquier resumen agregado de la calidad de las cuentas hereda ese sesgo.",
            "La **exactitud por construcción** también tiene su análogo. Cuando la coherencia se impone colocando la discrepancia en una partida designada, según describía la ficha 15.11, esa partida absorbe todo el desajuste y las demás cuadran perfectamente. Evaluar la calidad del cuadro sin mirar la partida de discrepancia es exactamente el error de medir donde el método es exacto por definición.",
            "Hay una dificultad adicional propia del sistema: **no siempre existe un valor definitivo** contra el que medir. Las revisiones de referencia pueden modificar series de décadas atrás, de modo que el dato con el que se evalúa hoy puede cambiar mañana. Eso convierte la evaluación en provisional y explica en parte la reticencia a publicar medidas de exactitud.",
            "Por último, una implicación práctica para el usuario. Ante dos fuentes que ofrecen previsiones o estimaciones del mismo agregado, la pregunta útil no es cuál acierta más en el total, sino **cuál acierta más en el nivel de desagregación que se va a usar**. Un servicio que clave el PIB y falle sistemáticamente en las ramas es inútil para quien trabaja con ramas, y esa distinción rara vez aparece en las comparaciones publicadas.",
          ],
          cierre:
            "La consecuencia práctica: cualquier afirmación sobre qué método o qué fuente es mejor debe especificar en qué nivel y con qué medida. Sin esas dos precisiones, la afirmación no es comprobable.",
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
              q: "Todas las series de la jerarquía se equivocan un 1 %. ¿Qué cuota del error absoluto medio aporta el total?",
              a: "El 33,1 %, siendo una de siete series. La cuota equitativa sería del 14,29 %, así que pesa 2,32 veces lo que le corresponde. Las cuatro hojas juntas aportan el 33,5 %, prácticamente lo mismo que el total por sí solo. Como los errores absolutos son proporcionales al nivel, promediarlos sin escalar mide sobre todo el nivel más agregado.",
            },
            {
              q: "¿Por qué es tramposo comparar bottom-up y top-down midiendo solo en las hojas?",
              a: "Porque bottom-up reproduce sin error las previsiones base de las hojas: es exacto ahí por construcción. Top-down lo es en el total. Medir en un solo nivel garantiza que gane el método que lo respeta, sin decir nada sobre su calidad global. La comparación honesta exige evaluar en todos los niveles y presentar los resultados por separado.",
            },
            {
              q: "¿Qué corrige una medida escalada y de qué depende?",
              a: "Corrige el problema de escala dividiendo el error de cada serie por una referencia propia —habitualmente el error de una previsión ingenua sobre su histórico—, lo que produce un número adimensional promediable entre series de cualquier tamaño. Depende de qué previsión ingenua se elija: una serie muy predecible tiene un denominador pequeño y hará parecer mediocre a un método bueno.",
            },
            {
              q: "¿Qué referencias hay que incluir en una comparación de métodos de reconciliación?",
              a: "Las previsiones base sin reconciliar, aunque sean incoherentes, y la proyección ortogonal. Las primeras dicen cuánto aporta reconciliar; la segunda, cuánto aporta ponderar. Sin ambas, una mejora observada no se puede atribuir a nada concreto: solo se sabe que un método salió mejor que otro, sin entender por qué.",
            },
            {
              q: "Un método mejora un 2 % sobre treinta orígenes de evaluación. ¿Basta para adoptarlo?",
              a: "No sin dos comprobaciones. Primera, si la diferencia es distinguible del ruido: los contrastes de igualdad de exactitud predictiva existen para eso. Segunda, si compensa el coste: mantener una reconciliación óptima con matriz estimada exige vigilancia continua, mientras que un bottom-up funciona solo. La decisión correcta no siempre es adoptar el método que gana la comparación.",
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
              q: "Se compara la matriz de covarianzas estimada sobre el mismo periodo en el que después se mide el error. ¿Qué ocurre?",
              opciones: [
                "Nada: usar todos los datos disponibles es lo correcto",
                "El método pierde la propiedad de invariancia",
                "La matriz queda mal condicionada y no se puede invertir",
                "El resultado sale optimista y no se reproduce fuera de muestra",
              ],
              correcta: 3,
              porque: [
                "Usar todos los datos para estimar y evaluar a la vez es precisamente lo que invalida la evaluación.",
                "La invariancia es una propiedad del método, independiente de cómo se evalúe.",
                "El condicionamiento es otro problema, y puede darse con o sin este error de evaluación.",
                "La evaluación honesta usa origen móvil: estimar con lo disponible en cada fecha y repetir, como si se estuviera prediciendo de verdad.",
              ],
            },
            {
              q: "Un método de reconciliación mejora un 2 % sobre treinta orígenes de evaluación. ¿Basta para adoptarlo?",
              opciones: [
                "Sí: una mejora consistente es una mejora",
                "No: por debajo del 5 % ninguna mejora es adoptable",
                "Conviene ser cauto: con pocos orígenes una diferencia de esa magnitud puede no ser distinguible del azar, y además hay que pesar el coste",
                "Sí, si además mejora en todos los niveles de la jerarquía",
              ],
              correcta: 2,
              porque: [
                "Las diferencias entre métodos de reconciliación suelen ser de unos pocos puntos porcentuales, y treinta orígenes son pocos para distinguirlas del ruido.",
                "No hay ningún umbral fijo: depende de la variabilidad de la mejora y de lo que cueste mantenerla.",
                "Mantener una reconciliación óptima con matriz estimada exige vigilancia continua; la ortogonal no requiere nada. Esa asimetría pesa en la decisión.",
                "Mejorar en todos los niveles refuerza el caso y no resuelve la cuestión del tamaño muestral ni la del coste.",
              ],
            },
            {
              q: "¿De qué depende la escala de una medida de error escalada?",
              opciones: [
                "Del número de series de la jerarquía",
                "Del error de una previsión ingenua sobre el histórico de la propia serie",
                "Del nivel medio de la serie evaluada",
                "Del horizonte de previsión utilizado",
              ],
              correcta: 1,
              porque: [
                "El número de series afecta a cómo se promedia, no a la escala de cada medida.",
                "Una serie muy predecible tiene un denominador pequeño, así que su medida escalada sale grande aunque el error absoluto sea diminuto. Conviene saberlo al leer la tabla.",
                "Dividir por el nivel corregiría la escala y no tendría en cuenta lo predecible que es la serie.",
                "El horizonte cambia el error y también el de la referencia ingenua.",
              ],
            },
            {
              q: "Se publican intervalos de previsión y se evalúan con el error absoluto medio de los puntos. ¿Es suficiente?",
              opciones: [
                "Sí, siempre que se acompañe de la cobertura observada del intervalo",
                "No: si el producto son intervalos o probabilidades, hacen falta medidas probabilísticas que juzguen la calibración",
                "Sí: si el punto central acierta, el intervalo está bien situado",
                "No, pero el error puntual es el mejor sustituto disponible",
              ],
              correcta: 1,
              porque: [
                "La cobertura observada ya es una medida probabilística: incluirla es reconocer que el error puntual no basta.",
                "Evaluar intervalos con medidas de error puntual no dice si están bien calibrados, que es justamente lo que hay que comprobar de un intervalo.",
                "Un punto bien situado es compatible con un intervalo absurdamente ancho o absurdamente estrecho.",
                "Existen medidas probabilísticas específicas y bien establecidas: no hace falta ningún sustituto.",
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
            { ref: "Hyndman y Koehler, «Another Look at Measures of Forecast Accuracy»", nota: "el análisis de las medidas de error y la propuesta de las escaladas; imprescindible antes de comparar series de tamaños distintos." },
            { ref: "Diebold y Mariano, «Comparing Predictive Accuracy»", nota: "el contraste de igualdad de exactitud predictiva, que es lo que permite saber si una diferencia observada es distinguible del ruido." },
            { ref: "Athanasopoulos, Ahmed y Hyndman, «Hierarchical Forecasts for Australian Domestic Tourism»", nota: "un diseño de evaluación jerárquica completo, con origen móvil y resultados presentados por nivel; buen modelo a imitar." },
            { ref: "Tashman, «Out-of-Sample Tests of Forecasting Accuracy»", nota: "la revisión de los errores habituales al diseñar evaluaciones fuera de muestra, incluidos los atajos que producen resultados optimistas." },
          ],
        },
      ],
    },
  ],
};
