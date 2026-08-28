/* Ficha 4.03 — Probabilidad e inferencia: estimación e intervalos. */

export default {
  codigo: "4.03",
  titulo: "Probabilidad e inferencia: estimación e intervalos",
  nivel: 2,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "4 h",
  nucleo:
    "Un estimador no es un número: es una variable aleatoria con su propia distribución. En cuanto se toma en serio esa frase aparecen el error estándar, el intervalo de confianza y la razón de que cuadruplicar una muestra solo reduzca el error a la mitad.",
  requiere: "4.02 Estadística descriptiva y distribuciones",
  abre: "4.04 Contraste de hipótesis · 4.05 Regresión por MCO · 10.02 Mercado de trabajo español · 10.10 Cuentas trimestrales y revisiones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La inferencia estadística resuelve un problema que en economía es casi universal: **queremos afirmar algo sobre una población y solo disponemos de una muestra**. No sabemos cuántos parados hay en España, sabemos cuántos declararon serlo en las 65.000 viviendas de la EPA. No conocemos el efecto de un año más de estudios sobre el salario, tenemos unos miles de trabajadores observados. El puente entre esas dos cosas es la teoría de la probabilidad, y el paso conceptual que lo hace posible es más pequeño y más profundo de lo que parece.",
            "**El paso es este: dejar de ver el estimador como un número y verlo como una variable aleatoria.** La media de una muestra concreta es 30.000 €; si hubiéramos entrevistado a otras cien personas habría salido otra cifra. Esa media, considerada antes de extraer la muestra, es una función de datos aleatorios, y por tanto **tiene su propia distribución de probabilidad**: la **distribución en el muestreo**. Todo lo demás —error estándar, intervalos, contrastes, la econometría entera— son propiedades de esa distribución. Quien entiende esto no vuelve a confundir dos conceptos que se escriben casi igual: la **desviación típica** mide cuánto varían los individuos, y el **error estándar** mide cuánto variaría el estimador entre muestras. Son cosas distintas y solo la segunda dice algo sobre la precisión de la estimación.",
            "**A un estimador se le piden tres cosas, y no siempre son compatibles.** Que sea **insesgado**: que su valor esperado coincida con el parámetro, es decir, que no se equivoque sistemáticamente en una dirección. Que sea **consistente**: que converja al parámetro cuando la muestra crece, lo que es una propiedad asintótica y más débil. Y que sea **eficiente**: que entre los insesgados tenga la varianza más pequeña, porque un estimador que acierta en promedio pero varía muchísimo es inútil en la única muestra que uno tiene. Conviene saber que **la insesgadez a veces se sacrifica a propósito**: un estimador ligeramente sesgado con mucha menos varianza puede equivocarse menos en total, y ese es el argumento del error cuadrático medio y de buena parte del aprendizaje estadístico moderno.",
            "**El teorema central del límite es lo que hace practicable todo esto.** Dice que la media muestral de variables independientes tiende a distribuirse como una normal **sea cual sea la distribución de partida**, siempre que la varianza sea finita. Su importancia es difícil de exagerar: los salarios están fuertemente sesgados a la derecha, con la asimetría de 2,44 que vimos en la ficha 4.02, y sin embargo la media de una muestra de cien salarios es prácticamente normal. Por eso podemos usar la normal para construir intervalos sobre variables que no son normales en absoluto. Y aporta la fórmula que gobierna toda la estadística aplicada: el error estándar de la media es $\\sigma/\\sqrt n$.",
            "**De esa raíz salen consecuencias muy poco intuitivas y muy caras.** Como el error decrece con $\\sqrt n$ y no con $n$, **para reducir el margen a la mitad hay que cuadruplicar la muestra**, y para dividirlo por diez hace falta multiplicarla por cien. Ahí está el motivo de que las encuestas oficiales tengan el tamaño que tienen y de que ampliarlas sea tan poco rentable: pasar de 1.000 a 4.000 entrevistas cuesta cuatro veces más y solo gana un factor dos de precisión. También explica por qué los datos regionales de una encuesta nacional son mucho menos fiables que el agregado, aunque se publiquen con la misma apariencia de exactitud: la submuestra de una comunidad pequeña puede ser de unos pocos cientos de personas.",
            "**El intervalo de confianza es la traducción honesta de una estimación.** En lugar de dar un número, se da un rango con una regla de construcción cuya propiedad es que, **repitiendo el muestreo muchas veces, el 95 % de los intervalos así construidos contendría el parámetro**. Es fundamental resistirse a la lectura tentadora: **no** significa que haya un 95 % de probabilidad de que el parámetro esté en *este* intervalo. En el marco frecuentista el parámetro es un número fijo y el intervalo es lo aleatorio, así que esa frase no tiene sentido; quien quiera decirla necesita el marco bayesiano, donde el intervalo de credibilidad sí admite esa interpretación pero exige declarar una distribución a priori. La distinción parece pedante y no lo es: cambia lo que uno puede afirmar en un informe.",
            "**Dos precisiones prácticas para terminar.** La primera: cuando la varianza poblacional se desconoce y hay que estimarla —siempre, en la práctica— la distribución correcta no es la normal sino la **t de Student**, con colas más gruesas para reconocer esa incertidumbre adicional. Con 9 grados de libertad el valor crítico es 2,262 frente al 1,960 de la normal; con 99 ya es 1,984 y la diferencia deja de importar. La segunda, y más importante en economía aplicada: **el error muestral casi nunca es la mayor fuente de error**. Una encuesta real tiene no respuesta, marcos desactualizados, preguntas mal entendidas y respuestas falsas, y esos **errores no muestrales no aparecen en ninguna fórmula ni se reducen agrandando la muestra**. Un intervalo de confianza cuantifica solo la parte del error que sabemos calcular, que suele ser la pequeña.",
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
            { nom: "Estimador", sub: "Función de la muestra: es una variable aleatoria.", cols: ["$\\hat\\theta = g(X_1, \\ldots, X_n)$"] },
            { nom: "Insesgadez", sub: "No se equivoca sistemáticamente.", cols: ["$E[\\hat\\theta] = \\theta$"] },
            { nom: "Consistencia", sub: "Converge al parámetro al crecer la muestra.", cols: ["$\\hat\\theta \\to^{p} \\theta$ cuando $n \\to \\infty$"] },
            { nom: "Eficiencia", sub: "Mínima varianza entre los insesgados.", cols: ["$\\mathrm{Var}(\\hat\\theta)$ mínima"] },
            { nom: "Error cuadrático medio", sub: "Permite cambiar algo de sesgo por menos varianza.", cols: ["$\\mathrm{ECM} = \\mathrm{Var}(\\hat\\theta) + \\text{sesgo}^2$"] },
            { nom: "Error estándar de la media", sub: "La ley de la raíz: el origen de todo el coste.", cols: ["$\\mathrm{EE}(\\bar x) = \\dfrac{\\sigma}{\\sqrt n}$"] },
            { nom: "Teorema central del límite", sub: "Vale sea cual sea la distribución de partida.", cols: ["$\\bar x \\approx N(\\mu, \\sigma^2/n)$ para $n$ grande"] },
            { nom: "Error estándar de una proporción", sub: "Máximo en p = 0,5; el caso más desfavorable.", cols: ["$\\mathrm{EE}(\\hat p) = \\sqrt{\\dfrac{p(1-p)}{n}}$"] },
            { nom: "Intervalo de confianza (media)", sub: "$t$ si $\\sigma$ se estima; $z$ si $n$ es grande.", cols: ["$\\bar x \\pm t_{n-1}\\,\\dfrac{s}{\\sqrt n}$"] },
            { nom: "Tamaño muestral necesario", sub: "Crece con el cuadrado de la precisión exigida.", cols: ["$n = \\left(\\dfrac{z\\sigma}{\\text{margen}}\\right)^2$"] },
            { nom: "Lectura correcta del IC", sub: "La aleatoriedad está en el intervalo, no en $\\theta$.", cols: ["95 % de los intervalos contienen $\\theta$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuánta precisión compra una muestra",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, el teorema central del límite en acción.** Partimos de la distribución salarial de la ficha 4.02: una lognormal con media 30, mediana 22 y una asimetría marcada. Es todo lo contrario de una normal. Veamos qué le ocurre a la **media** de una muestra extraída de ella.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Miles de €", y: "Densidad" },
          dominio: { x: [0, 80], y: [0, 185] },
          marcasX: [0, 20, 40, 60, 80],
          marcasY: [],
          series: [
            {
              nombre: "Individuos",
              color: "tinta2",
              grosor: 2,
              etiquetaEn: [45, 7.45],
              puntos: [[2, 2.46], [4, 12.17], [6, 21.65], [8, 27.75], [10, 30.69], [12, 31.39], [14, 30.69], [16, 29.17], [18, 27.24], [20, 25.14], [22, 23.02], [25, 20], [28, 17.26], [32, 14.14], [36, 11.57], [40, 9.49], [45, 7.45], [50, 5.88], [55, 4.68], [60, 3.75], [70, 2.46], [80, 1.65]],
            },
            {
              nombre: "Media de 25",
              color: "alerta",
              grosor: 2,
              etiquetaEn: [38, 27],
              puntos: [[18, 2.92], [20, 8.23], [22, 19.2], [24, 37.1], [26, 59.39], [28, 78.77], [30, 86.54], [32, 78.77], [34, 59.39], [36, 37.1], [38, 19.2], [40, 8.23], [42, 2.92]],
            },
            {
              nombre: "Media de 100",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [35, 120],
              puntos: [[23, 1.72], [24, 5.85], [25, 16.46], [26, 38.4], [27, 74.2], [28, 118.78], [29, 157.53], [30, 173.08], [31, 157.53], [32, 118.78], [33, 74.2], [34, 38.4], [35, 16.46], [36, 5.85], [37, 1.72]],
            },
          ],
          nota: "Las tres curvas describen la misma población y dicen cosas muy distintas. La de **individuos** es asimétrica, tiene moda baja y una cola larguísima: preguntarle a una sola persona informa muy poco. La media de **25** ya es casi simétrica y está centrada en 30. La media de **100** es prácticamente normal y **mucho más estrecha**. Eso es el teorema central del límite: la forma de la población deja de importar, y lo único que gobierna la precisión es $\\sqrt n$. Obsérvese que pasar de 25 a 100 —cuadruplicar el trabajo de campo— **estrecha la curva exactamente a la mitad**, ni un ápice más.",
        },
        {
          tipo: "tabla",
          cabecera: ["Tamaño de muestra", "Error estándar", "Margen al 95 %", "Intervalo para la media"],
          filas: [
            ["25", "4,61", "$\\pm 9{,}04$", "[20,96 · 39,04]"],
            ["100", "2,31", "$\\pm 4{,}52$", "[25,48 · 34,52]"],
            ["400", "1,15", "$\\pm 2{,}26$", "[27,74 · 32,26]"],
            { celdas: ["1.600", "0,58", "$\\pm 1{,}13$", "[28,87 · 31,13]"], clase: "total" },
          ],
          nota: "Con la desviación típica muestral de 23,05 obtenida en la ficha 4.02. Cada fila **multiplica por cuatro** el tamaño de la muestra y **divide por dos** el margen: de 25 a 1.600 hay 64 veces más entrevistas y solo 8 veces más precisión. Esa es la aritmética que decide el presupuesto de cualquier encuesta, y la razón de que nadie intente estimar una media con un margen del 1 % salvo que el dato valga muchísimo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, el caso de una proporción, que es el de la tasa de paro.** Supongamos una muestra de activos en la que el 12 % declara estar en paro. El error estándar de una proporción es $\\sqrt{p(1-p)/n}$, y el margen depende brutalmente del tamaño:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Muestra de activos", "Error estándar", "Margen al 95 %", "Intervalo para la tasa de paro"],
          filas: [
            ["1.000", "0,0103", "$\\pm 2{,}01$ pp", "[9,99 % · 14,01 %]"],
            ["10.000", "0,0033", "$\\pm 0{,}64$ pp", "[11,36 % · 12,64 %]"],
            { celdas: ["65.000 — escala EPA", "0,0013", "$\\pm 0{,}25$ pp", "[11,75 % · 12,25 %]"], clase: "total" },
            ["160.000", "0,0008", "$\\pm 0{,}16$ pp", "[11,84 % · 12,16 %]"],
          ],
          nota: "La fila destacada es la relevante: incluso con una muestra del tamaño de la EPA, **el margen de la tasa de paro nacional es de unas dos décimas y media**. La consecuencia práctica es demoledora para el comentario habitual: **una variación trimestral de una décima no es distinguible de cero**. No significa que el dato esté mal, significa que la precisión del instrumento no llega ahí. Y esto es solo el error muestral: la no respuesta y los errores de clasificación se suman por encima y no aparecen en la fórmula.",
        },
      ],
    },
    {
      titulo: "Caso práctico: las décimas, las encuestas y la falsa precisión",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El uso público de las cifras estadísticas ofrece un catálogo de errores de inferencia tan constante que merece la pena recorrerlo, porque **el problema casi nunca está en el dato y casi siempre en la afirmación que se hace con él**.",
            "**El caso más frecuente es el comentario de décimas.** Cuando una tasa de paro pasa del 12,3 % al 12,2 %, la reacción estándar es interpretar el signo. Con un margen de $\\pm 0{,}25$ puntos, esa variación está muy dentro del ruido muestral, y afirmar que el paro ha bajado es una afirmación que los datos no sostienen. Lo correcto es decir que **no se aprecia un cambio significativo**, lo cual es información y no un rodeo. La tentación de comentar la décima viene de que el número se publica con un decimal, y **la precisión de la impresión no es la precisión de la medida**.",
            "**El problema se agrava al desagregar.** Una encuesta diseñada para dar un dato nacional preciso reparte su muestra entre territorios, sectores y tramos de edad, y cada submuestra tiene su propio margen, mucho mayor. La tasa de paro juvenil de una comunidad pequeña puede descansar en unos pocos cientos de observaciones, con márgenes de varios puntos. **Se publica con el mismo aspecto que el dato nacional y no tiene la misma calidad.** Por eso los institutos de estadística acompañan sus tablas de coeficientes de variación y advierten de qué celdas no deben usarse; esas advertencias son la parte que nadie lee.",
            "**Las encuestas electorales concentran todos los problemas a la vez.** Publican márgenes calculados con la fórmula del muestreo aleatorio simple cuando el diseño no lo es; ignoran que el error dominante no es el muestral sino **la no respuesta diferencial** —quien contesta no es una muestra aleatoria de quien vota— y la estimación de participación; y presentan estimaciones de escaños que aplican un reparto no lineal a proporciones inciertas, amplificando el error. Cuando una encuesta falla, la explicación casi nunca es que tocara el 5 % de las veces: es que **el error no muestral era mayor que el declarado**.",
            "**Un cuarto vicio, más sutil: el intervalo que no se enseña.** Buena parte de los indicadores económicos son estimaciones con incertidumbre y se difunden como cifras exactas. El producto potencial y la brecha de producción de la ficha 3.06 se estiman con métodos que dan resultados muy distintos entre sí; la NAIRU tiene intervalos tan anchos que a menudo incluyen el valor observado. Cuando esos números entran en reglas fiscales o en decisiones de tipos, **una magnitud con enorme incertidumbre se usa como si fuera un dato**, y el error se propaga a la política sin que nadie lo vea.",
            "**Qué se puede hacer, en concreto.** Publicar y citar el margen junto al dato. Comparar con el mismo trimestre del año anterior antes que con el anterior, porque la señal es mayor frente al mismo ruido. Preferir medias móviles y series suavizadas para juzgar tendencias, que es de lo que se ocupa la ficha 4.10. Y desconfiar del decimal: **un número redondeado honesto informa mejor que uno preciso que finge una exactitud que no tiene**.",
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
            { t: "Confundir desviación típica con error estándar", d: "La desviación típica describe cuánto varían los individuos y no baja al aumentar la muestra. El error estándar describe cuánto variaría el estimador entre muestras y decrece con la raíz de n. Solo el segundo mide la precisión de una estimación, y usar el primero como si lo fuera infla el margen de forma absurda." },
            { t: "Decir que hay un 95 % de probabilidad de que el parámetro esté en el intervalo", d: "En el marco frecuentista el parámetro es fijo y lo aleatorio es el intervalo: la afirmación correcta es que el 95 % de los intervalos así construidos lo contendría. La lectura tentadora solo es legítima en el marco bayesiano, y ahí exige declarar una distribución a priori y llamarlo intervalo de credibilidad." },
            { t: "Creer que se puede ganar precisión ampliando poco la muestra", d: "La ley de la raíz es implacable: reducir el margen a la mitad exige cuadruplicar el número de entrevistas. Pasar de 1.000 a 1.200 encuestas no cambia nada apreciable. Esto también explica por qué las submuestras territoriales de una encuesta nacional son mucho menos fiables que el agregado." },
            { t: "Comentar variaciones que caben dentro del margen", d: "Con un margen de dos décimas y media, un cambio trimestral de una décima no es distinguible de cero. Interpretar su signo es leer ruido. Lo correcto es afirmar que no se aprecia cambio significativo, que es una conclusión, no una evasiva." },
            { t: "Tratar el error muestral como si fuera todo el error", d: "La no respuesta, los marcos desactualizados, la mala comprensión de las preguntas y las respuestas falsas no aparecen en ninguna fórmula y no se reducen agrandando la muestra. En encuestas reales suelen dominar. Un intervalo de confianza cuantifica la parte del error que sabemos calcular, no la parte grande." },
            { t: "Usar la normal cuando la muestra es pequeña y $\\sigma$ se ha estimado", d: "Hay que usar la t de Student, cuyas colas más gruesas reconocen la incertidumbre sobre la varianza. Con 9 grados de libertad el valor crítico es 2,262 frente a 1,960, y el intervalo es un 15 % más ancho. A partir de unos 100 grados de libertad la diferencia deja de importar." },
            { t: "Aplicar el teorema central del límite sin comprobar sus condiciones", d: "Exige independencia y varianza finita. Con datos agrupados, correlacionados en el tiempo o en el espacio, la n efectiva es mucho menor que la nominal. Y con distribuciones de colas muy pesadas la convergencia es tan lenta que la aproximación normal falla en muestras que parecerían grandes." },
            { t: "Confundir insesgadez con acierto", d: "Un estimador insesgado acierta en promedio a lo largo de infinitas muestras, no en la muestra que uno tiene. Si su varianza es alta, cualquier estimación concreta puede estar muy lejos. Por eso el criterio relevante suele ser el error cuadrático medio, que admite cambiar algo de sesgo por bastante menos varianza." },
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
            "La contabilidad nacional se presenta sin intervalos de confianza, y esa ausencia es una decisión con consecuencias que conviene entender.",
          ],
          lista: [
            "El **PIB no se publica con margen de error** aunque sea una estimación construida con encuestas, registros administrativos e imputaciones. La razón es que su incertidumbre no es muestral en un sentido calculable: procede de la cobertura de las fuentes, de la estimación de la economía no observada y de los métodos de imputación. No es que el dato sea exacto, es que **no existe una fórmula para su error**.",
            "Lo que sí revela esa incertidumbre son las **revisiones**. La diferencia entre el primer dato de un trimestre y el definitivo, años después, es la medida empírica del error del avance, y no es pequeña. La ficha 10.10 la estudia con la lógica de los datos en tiempo real, que es el único intervalo de confianza honesto que tiene la contabilidad nacional.",
            "La **EPA sí publica errores de muestreo**, porque es una encuesta con diseño probabilístico, y el INE difunde coeficientes de variación por celda. La afiliación a la Seguridad Social, en cambio, es un registro censal sin error muestral, pero mide **relaciones laborales y no personas**. La ficha 10.02 explica por qué dos fuentes correctas pueden dar cifras distintas de empleo sin que ninguna se equivoque.",
            "El **IPC combina muestreo de establecimientos y de productos** con ponderaciones procedentes de la Encuesta de Presupuestos Familiares. Su incertidumbre es real y raramente se comunica, lo que importa cuando una décima de IPC decide la revalorización de pensiones o la actualización de contratos.",
            "Y las **estimaciones que entran en reglas fiscales** —producto potencial, brecha de producción, saldo estructural— tienen intervalos tan anchos que el propio marco europeo ha tenido que reconocerlo. Es el ejemplo más costoso del último error típico de esta ficha: **usar una estimación muy incierta como si fuera una medición**.",
          ],
          cierre:
            "La conclusión práctica es que la contabilidad nacional exige la actitud contraria a la que su presentación sugiere. Sus cifras vienen sin intervalo, y precisamente por eso hay que llevar el intervalo en la cabeza, sobre todo al comparar variaciones pequeñas o datos muy desagregados.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la media de 100 salarios es casi normal si los salarios no lo son en absoluto?", a: "Por el teorema central del límite: la media de variables independientes con varianza finita tiende a la normal sea cual sea la distribución de partida. Con la lognormal de la ficha 4.02, la asimetría individual es de 2,44 y la de la media de 100 es prácticamente nula. Es lo que permite usar la normal para hacer inferencia sobre poblaciones que no lo son." },
            { q: "Una encuesta de 1.000 personas da un margen de $\\pm 2$ puntos. ¿Cuántas hacen falta para bajarlo a $\\pm 1$?", a: "Cuatro mil, porque el error decrece con la raíz de n: para dividir el margen entre dos hay que multiplicar la muestra por cuatro. Bajarlo a $\\pm 0{,}2$ puntos exigiría 100.000 entrevistas. Esa aritmética es la que fija el tamaño y el coste de cualquier encuesta oficial." },
            { q: "La tasa de paro pasa del 12,3 % al 12,2 %. ¿Ha bajado el paro?", a: "No se puede afirmar. Con una muestra de escala EPA el margen es de unas $\\pm 0{,}25$ puntos, así que una décima está muy dentro del ruido muestral. La conclusión correcta es que no se aprecia un cambio significativo, y eso antes de contar los errores no muestrales, que no entran en la fórmula y suelen ser mayores." },
            { q: "¿Qué diferencia hay entre la desviación típica de 23,05 y el error estándar de 2,31?", a: "La primera dice que los salarios individuales se dispersan mucho, y no cambia por muchos datos que se recojan. El segundo dice cuánto variaría la media muestral entre muestras de 100 personas, y es la desviación típica dividida por la raíz de 100. Solo el error estándar mide la precisión de la estimación." },
            { q: "¿Por qué el dato de paro juvenil de una comunidad pequeña es menos fiable que el nacional, si es la misma encuesta?", a: "Porque el margen depende del tamaño de la submuestra, no del de la encuesta. Una celda que descansa en unos cientos de observaciones tiene un margen de varios puntos aunque el agregado nacional tenga décimas. Se publica con el mismo aspecto y no tiene la misma calidad, y por eso los institutos difunden coeficientes de variación por celda." },
            { q: "¿Puede un estimador sesgado ser preferible a uno insesgado?", a: "Sí, si su varianza es suficientemente menor. El criterio relevante es el error cuadrático medio, que suma varianza y sesgo al cuadrado: un poco de sesgo a cambio de mucha menos varianza reduce el error total esperado. Es el fundamento de los estimadores de encogimiento y de buena parte del aprendizaje estadístico." },
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
              q: "¿En qué se diferencian la desviación típica y el error estándar?",
              opciones: [
                "El error estándar se usa con muestras pequeñas y la desviación típica con grandes",
                "La desviación típica describe cuánto varían los individuos; el error estándar, cuánto variaría el estimador entre muestras",
                "La desviación típica se calcula sobre la población y el error estándar sobre la muestra",
                "En nada: son dos nombres para la misma medida de dispersión",
              ],
              correcta: 1,
              porque: [
                "El tamaño no decide cuál se usa: son magnitudes distintas y ambas existen para cualquier $n$.",
                "Por eso $\\mathrm{EE}(\\bar x) = \\sigma/\\sqrt n$ decrece con $n$ mientras $\\sigma$ se queda donde está: los salarios siguen siendo igual de dispares por muchas personas que se entrevisten.",
                "Ambas pueden calcularse sobre población o muestra; la diferencia es qué variabilidad describen.",
                "Se confunden constantemente y la consecuencia es grave: una no baja al ampliar la muestra y la otra sí.",
              ],
            },
            {
              q: "Un intervalo de confianza al 95 % va de 1,18 a 2,82. ¿Cómo se interpreta correctamente?",
              opciones: [
                "Hay un 95 % de probabilidad de que el parámetro esté entre 1,18 y 2,82",
                "El 95 % de las observaciones caen entre 1,18 y 2,82",
                "El 95 % de los intervalos construidos así contendrían el parámetro; este contiene o no lo contiene",
                "El parámetro vale 2,00 con un error del 5 %",
              ],
              correcta: 2,
              porque: [
                "Es la lectura natural y es incorrecta en el marco frecuentista: el parámetro es fijo y lo aleatorio es el intervalo, no al revés.",
                "Eso describiría un intervalo de predicción sobre individuos, que es mucho más ancho y responde a otra pregunta.",
                "La aleatoriedad está en el procedimiento. Una vez calculado este intervalo concreto, ya no hay probabilidad que repartir: acertó o no acertó.",
                "El «5 %» no es un error porcentual sobre la estimación puntual: es el nivel de confianza del procedimiento.",
              ],
            },
            {
              q: "Una encuesta de 1.000 personas da un margen de $\\pm 2$ puntos. ¿Cuántas hacen falta para bajarlo a $\\pm 1$?",
              opciones: [
                "4.000: el error decrece con la raíz de $n$",
                "2.000: el doble de muestra para la mitad de margen",
                "1.500, porque el rendimiento es decreciente",
                "10.000, porque hay que multiplicar por diez",
              ],
              correcta: 0,
              porque: [
                "Para dividir el margen entre dos hay que multiplicar la muestra por cuatro. Bajarlo a $\\pm 0{,}2$ exigiría 100.000 entrevistas, y esa aritmética es la que fija el coste de cualquier encuesta oficial.",
                "Duplicar la muestra solo reduce el margen en un factor $\\sqrt2 \\approx 1{,}41$, no a la mitad.",
                "Ampliar un 50 % apenas mueve el margen: es exactamente el tipo de ampliación que no compensa.",
                "Multiplicar por diez reduciría el margen por $\\sqrt{10} \\approx 3{,}16$, mucho más de lo pedido.",
              ],
            },
            {
              q: "Se estima $\\sigma$ a partir de una muestra de 10 observaciones. ¿Qué distribución hay que usar para el intervalo?",
              opciones: [
                "La normal, corrigiendo el error estándar por el tamaño",
                "La normal, por el teorema central del límite",
                "La t de Student, cuyas colas gruesas reconocen la incertidumbre sobre la varianza",
                "Cualquiera: con 10 observaciones la diferencia es despreciable",
              ],
              correcta: 2,
              porque: [
                "El error estándar ya incorpora el tamaño. Lo que falta es reconocer que $\\hat\\sigma$ es a su vez una estimación.",
                "El teorema central del límite habla de la distribución de la media, no resuelve que $\\sigma$ sea desconocida y estimada con pocos datos.",
                "Con 9 grados de libertad el valor crítico es 2,262 frente al 1,96 de la normal: usar la normal estrecha el intervalo un 15 % y produce falsa precisión.",
                "Es justo donde más se nota: con muestras pequeñas la diferencia entre 2,262 y 1,96 es sustancial.",
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
            { ref: "Newbold, Carlson y Thorne, Estadística para administración y economía", nota: "distribuciones en el muestreo e intervalos con el nivel exacto de esta ficha y ejemplos económicos." },
            { ref: "Wooldridge, Introducción a la econometría", nota: "el apéndice C es el mejor resumen breve de estimación e inferencia escrito para economistas." },
            { ref: "Efron y Hastie, Computer Age Statistical Inference", nota: "para ver de dónde viene el bootstrap y por qué permite obtener errores estándar cuando no hay fórmula." },
            { ref: "INE, errores de muestreo de la EPA", nota: "los coeficientes de variación reales por celda; instructivo comprobar cuánto crecen al desagregar por provincia y edad." },
            { ref: "Silver, La señal y el ruido", nota: "divulgativo y muy bueno sobre la diferencia entre precisión aparente y precisión real en predicciones y encuestas." },
          ],
        },
      ],
    },
  ],
};
