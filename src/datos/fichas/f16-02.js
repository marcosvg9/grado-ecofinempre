/* Ficha 16.02 — Coherencia y la matriz de sumas. */

export default {
  codigo: "16.02",
  titulo: "Coherencia y la matriz de sumas",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "5 h",
  nucleo:
    "Toda la teoría cabe en una matriz de ceros y unos que dice qué suma qué. Con ella la coherencia deja de ser una restricción incómoda y pasa a ser un subespacio, y reconciliar deja de ser un apaño para convertirse en una proyección.",
  requiere: "16.01 Estructuras jerárquicas · 4.01 Álgebra lineal y optimización · 4.05 Regresión por MCO",
  abre: "16.03 Bottom-up y top-down · 16.04 Combinación óptima y MinT · 16.09 Cuentas nacionales",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El paso conceptual que ordena todo el bloque es sencillo y conviene darlo despacio. Una vez fijadas las **series hoja**, todas las demás quedan determinadas: son sumas de ellas. Así que el conjunto entero de series no tiene tantos grados de libertad como series hay, sino tantos como hojas. En la jerarquía del bloque —cuatro hojas, dos ramas y un total— hay **siete series pero solo cuatro dimensiones libres**, y las tres restantes son restricciones.",
            "Ese hecho se recoge en una única matriz, la **matriz de sumas**. Tiene una fila por cada serie de la jerarquía y una columna por cada hoja, y su entrada vale uno si esa hoja contribuye a esa serie y cero si no. La fila del total es todo unos; la fila de una hoja tiene un único uno. No hay nada más: la matriz **es** la estructura de agregación, escrita de forma que se pueda operar con ella.",
            "Con esa matriz, un conjunto de previsiones es **coherente** si y solo si se puede escribir como la matriz multiplicada por un vector de valores de las hojas. Dicho en términos geométricos, las previsiones coherentes forman un **subespacio** del espacio de todas las previsiones posibles: el espacio generado por las columnas de la matriz. En el ejemplo, un subespacio de dimensión cuatro dentro de un espacio de dimensión siete.",
            "Esa reformulación cambia el problema. Las previsiones base —cada serie prevista por su cuenta— son un punto cualquiera del espacio de siete dimensiones, y casi con seguridad **no cae dentro del subespacio coherente**. Reconciliar es llevarlo dentro. Y una vez planteado así, la pregunta deja de ser «cómo hago que cuadren» y pasa a ser **«en qué dirección y con qué métrica lo muevo»**, que es una pregunta con respuesta estadística y no meramente contable.",
            "Todo método de reconciliación se puede escribir de la misma forma: se aplica una matriz que extrae unos valores de hoja a partir de todas las previsiones, y después se reconstruye la jerarquía con la matriz de sumas. Los métodos se distinguen únicamente por esa matriz intermedia. **Bottom-up, top-down y la reconciliación óptima son el mismo procedimiento con distinta elección**, y verlo así permite compararlos sin discutir sobre intuiciones.",
            "Hay una condición que conviene entender porque separa los métodos razonables de los que no lo son. Si las previsiones base fueran insesgadas y se quiere que las reconciliadas también lo sean, la matriz intermedia debe **devolver los valores originales cuando se le da un conjunto ya coherente**. Es una condición natural —no tocar lo que ya cuadra— y bottom-up y la reconciliación óptima la cumplen, mientras que top-down no, lo que explica el sesgo que la ficha 16.03 le atribuye.",
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
            { nom: "Matriz de sumas", sub: "La estructura, escrita como matriz.", cols: ["Una fila por serie, una columna por hoja · ceros y unos"] },
            { nom: "Fila del total", sub: "El caso extremo superior.", cols: ["Todo unos: el total suma todas las hojas"] },
            { nom: "Fila de una hoja", sub: "El caso extremo inferior.", cols: ["Un único uno: la hoja se suma a sí misma"] },
            { nom: "Coherencia", sub: "La definición operativa.", cols: ["$y$ es coherente si y solo si $y = Sb$ para algún $b$"] },
            { nom: "Subespacio coherente", sub: "La reformulación geométrica.", cols: ["El espacio generado por las columnas de S"] },
            { nom: "Dimensiones", sub: "Cuántos grados de libertad hay.", cols: ["n series · m hojas · n − m restricciones"] },
            { nom: "Forma general", sub: "Todos los métodos son este.", cols: ["$\\tilde y = S P \\hat y$, y solo cambia $P$"] },
            { nom: "Condición de invariancia", sub: "No tocar lo que ya cuadra.", cols: ["$PS = I$: preserva la insesgadez"] },
            { nom: "Reconciliar", sub: "Qué es realmente.", cols: ["Proyectar el punto base sobre el subespacio coherente"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: siete series, cuatro dimensiones",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La jerarquía del bloque tiene un **total**, dos ramas —**turismo** e **industria**— y cuatro hojas: hostelería y transporte dentro de turismo, manufactura y energía dentro de industria. La matriz de sumas tiene siete filas y cuatro columnas, y se lee directamente: cada fila dice qué hojas contribuyen a esa serie.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Serie", "Hostelería", "Transporte", "Manufactura", "Energía"],
          filas: [
            ["Total", "1", "1", "1", "1"],
            ["Turismo", "1", "1", "0", "0"],
            ["Industria", "0", "0", "1", "1"],
            ["Hostelería", "1", "0", "0", "0"],
            ["Transporte", "0", "1", "0", "0"],
            ["Manufactura", "0", "0", "1", "0"],
            { celdas: ["Energía", "0", "0", "0", "1"], clase: "total" },
          ],
          nota: "Las cuatro últimas filas forman una **matriz identidad**: cada hoja es ella misma. Esa es la estructura general de la matriz de sumas, que siempre se puede escribir como los agregados arriba y la identidad abajo. Nótese que la matriz **no contiene ningún dato**: solo la estructura. Es la misma para cualquier periodo y para cualquier variable con esa desagregación.",
        },
        {
          tipo: "parrafos",
          items: [
            "Ahora las previsiones base, obtenidas prediciendo cada serie por separado: **total 132,0**, **turismo 57,5**, **industria 76,0**, **hostelería 32,0**, **transporte 24,5**, **manufactura 55,0** y **energía 22,0**. Ninguna de las tres restricciones se cumple:",
            "Hostelería más transporte suman **56,5**, frente a los 57,5 previstos para turismo: sobra **1,0** en la rama. Manufactura más energía suman **77,0**, frente a los 76,0 de industria: falta **1,0**. Y turismo más industria suman **133,5**, frente a los 132,0 del total: sobran **1,5**. Las siete cifras son individualmente razonables y conjuntamente imposibles.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Niveles de la jerarquía", y: "Número de series" },
          dominio: { x: [1, 5], y: [0, 68] },
          marcasX: [1, 2, 3, 4, 5],
          marcasY: [0, 15, 30, 45, 60],
          series: [
            {
              nombre: "Series de la jerarquía",
              color: "acento",
              etiquetaEn: [1.15, 60],
              puntos: [[1, 3], [2, 7], [3, 15], [4, 31], [5, 63]],
            },
            {
              nombre: "Dimensiones libres (hojas)",
              color: "n2",
              trazo: "discontinuo",
              etiquetaEn: [1.15, 50],
              puntos: [[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]],
            },
          ],
          nota: "En un árbol binario, cada nivel duplica las hojas y el hueco entre ambas líneas son las **restricciones**, que siempre resultan ser una menos que el número de hojas. Con dos niveles hay 7 series y 4 dimensiones libres: **tres restricciones**, las tres del ejemplo. Con cinco niveles, 63 series y solo 32 grados de libertad. La proporción de información redundante crece con la profundidad, y con ella lo que se puede ganar reconciliando bien.",
        },
        {
          tipo: "parrafos",
          items: [
            "Vale la pena hacer explícito lo que significa que haya un subespacio. El vector de siete previsiones base es un punto en un espacio de siete dimensiones. Las previsiones coherentes forman dentro de él un **plano de cuatro dimensiones**, y el punto base está fuera. La distancia entre el punto y el plano es la incoherencia; la dirección en la que se lo acerque es la decisión del método.",
            "Esa geometría deja ver de inmediato dos cosas. La primera es que **hay infinitas formas de hacer coherentes unas previsiones**, tantas como direcciones de aproximación al plano, y por tanto la coherencia por sí sola no determina el resultado. La segunda es que existe una elección canónica —la **proyección perpendicular**, la que mueve el punto lo menos posible— y otras que ponderan las direcciones según lo fiable que sea cada previsión. La ficha 16.04 desarrolla ambas.",
            "Un último apunte sobre generalidad. Nada de lo anterior ha usado que la estructura sea un árbol: solo que cada serie sea una suma de hojas. Por eso la **matriz de sumas recoge igual de bien una estructura agrupada** con criterios cruzados, donde no hay árbol posible. Basta con añadir una fila por cada agregado que se quiera imponer, y toda la maquinaria funciona sin cambios. Esa generalidad es la que permitirá aplicarla al sistema de cuentas en la ficha 16.09, donde las restricciones se cortan unas a otras.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué esta formulación resuelve la discusión",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de esta formulación, la discusión sobre previsiones jerárquicas era esencialmente doctrinal. Un bando defendía prever desde abajo porque el detalle es donde ocurre la economía; otro defendía prever el agregado porque es la serie limpia. Los argumentos eran razonables y no había forma de arbitrarlos, porque cada método era un procedimiento distinto y no había un marco común en el que compararlos.",
            "Escribir todos los métodos como **una matriz aplicada a las previsiones base seguida de la reconstrucción** cambió la naturaleza del debate. Bottom-up resultó ser el caso en que la matriz ignora todas las filas salvo las de las hojas. Top-down, el caso en que ignora todas salvo la del total y reparte con proporciones fijas. Y una vez que ambos son casos particulares de una misma familia, la pregunta pasa a ser **qué elección de matriz minimiza el error esperado**, que es una pregunta estadística con respuesta.",
            "El resultado de plantearla así fue además sorprendente para el debate previo: **la mejor elección no es ninguno de los dos extremos**, sino una que usa las previsiones de todos los niveles a la vez. No es un compromiso salomónico entre las dos posiciones, sino la solución de un problema de minimización que resulta dar peso a toda la información disponible. Las dos posturas doctrinales tenían razón en lo que afirmaban y se equivocaban en lo que negaban.",
            "Hay una lección de método más general aquí, del tipo que trata la ficha 1.08. Reformular un problema en un lenguaje que permita plantear la pregunta correcta suele valer más que argumentar mejor dentro del lenguaje viejo. La matriz de sumas no aporta ninguna idea económica: aporta el marco en el que la idea económica se puede evaluar.",
            "Conviene sin embargo no exagerar. La formulación garantiza coherencia y permite optimizar, pero **no arregla previsiones base malas**. Si los modelos de partida están mal especificados, la reconciliación distribuirá el error de forma más elegante y seguirá siendo error. Es el mismo aviso que la ficha 15.10 hacía sobre la desagregación temporal: el aparato de distribución no sustituye a la calidad de la información de entrada.",
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
            { t: "Creer que la matriz de sumas contiene datos", d: "No contiene ninguno: solo ceros y unos que describen la estructura de agregación. Es la misma matriz para cualquier periodo, cualquier variable y cualquier horizonte de previsión con esa desagregación. Separar estructura de datos es precisamente lo que hace manejable el problema." },
            { t: "Suponer que la coherencia determina el resultado", d: "Hay infinitas formas de hacer coherentes unas previsiones, tantas como direcciones de aproximación al subespacio. Cualquier método produce cifras que cuadran; lo que los distingue es qué información usan y cuánto mueven cada cifra. La coherencia es un requisito, no un criterio de selección." },
            { t: "Pensar que la formulación exige un árbol", d: "Solo exige que cada serie sea una suma de hojas. Una estructura agrupada con criterios cruzados se recoge añadiendo una fila por cada agregado que se quiera imponer, y toda la maquinaria funciona igual. Esa generalidad es lo que permite aplicarla a sistemas con restricciones que se cortan entre sí." },
            { t: "Olvidar la condición de invariancia", d: "Un método razonable debe devolver los valores originales cuando se le entrega un conjunto de previsiones ya coherente. Es natural —no tocar lo que ya cuadra— y es lo que preserva la insesgadez. Top-down no lo cumple, y de ahí viene el sesgo que se le atribuye." },
            { t: "Contar dimensiones mal", d: "En una jerarquía con n series y m hojas hay m grados de libertad y n − m restricciones, no n. En el árbol binario de dos niveles del ejemplo son 7 series, 4 hojas y 3 restricciones. Confundir el número de series con el número de cantidades independientes lleva a sobrestimar cuánta información hay." },
            { t: "Esperar que la reconciliación arregle modelos malos", d: "Garantiza coherencia y puede reducir el error, pero si las previsiones base están mal especificadas, distribuirá el error de forma más elegante y seguirá siendo error. El aparato de distribución no sustituye a la calidad de la información de entrada." },
            { t: "Reconciliar sobre variables que no suman", d: "Toda la construcción supone que los agregados son sumas de las hojas. No funciona directamente con tasas, ratios, índices o medias, que no son aditivos. Hay que trabajar sobre los niveles y derivar después las magnitudes derivadas, o reformular la estructura." },
            { t: "Aplicarla a jerarquías con agregados que se solapan mal definidos", d: "Si una hoja contribuye dos veces al mismo agregado, o si la definición de un nivel no cubre exactamente a sus hijos, la matriz de sumas no describe la realidad y la reconciliación impondrá una restricción falsa. Comprobar que la estructura declarada cuadra sobre datos históricos es un paso previo obligado." },
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
            "El sistema de cuentas es, formalmente, una matriz de sumas de gran tamaño, y muchas de sus operaciones habituales son casos particulares de lo anterior.",
          ],
          lista: [
            "La restricción de que el PIB coincida por los **tres enfoques** de la ficha 10.07 es exactamente una fila de una matriz de sumas: obliga a que ciertas combinaciones de partidas den el mismo resultado. Lo mismo ocurre con el equilibrio por producto de la ficha 13.02 y con el cierre de las cuentas de cada sector institucional de la ficha 12.01.",
            "La diferencia con el caso escolar es que en el SEC las restricciones **se cortan unas a otras**: una misma partida participa en la identidad del gasto, en la de su rama y en la de su producto. Formalmente eso solo significa que la matriz tiene más filas y que su estructura no es de árbol, y la maquinaria sigue siendo la misma. Es el caso general que trata la ficha 16.09.",
            "Hay una advertencia importante sobre **magnitudes no aditivas**. Toda la construcción supone sumas, y los volúmenes encadenados de la ficha 10.08 no son aditivos: la suma de los componentes en volumen no da el agregado. Aplicar reconciliación a volúmenes encadenados impone una restricción que las magnitudes no cumplen ni siquiera en los datos observados. Lo correcto es reconciliar sobre valores nominales o sobre volúmenes a precios de un año base, y derivar después.",
            "Lo mismo vale para las **tasas de variación**, que son lo que se publica y comenta. Una tasa del agregado no es la suma de las tasas de sus componentes sino su media ponderada, así que la reconciliación se plantea sobre niveles y las tasas se calculan a partir del resultado. Intentarlo al revés produce restricciones que no corresponden a ninguna identidad real.",
            "Por último, el **proceso de compilación** de las cuentas ya es una reconciliación, aunque históricamente no se haya formulado así. Confrontar estimaciones obtenidas por vías distintas y ajustarlas hasta que cuadren es exactamente proyectar sobre el subespacio coherente; lo que cambia con este marco es que la dirección de la proyección se elige con un criterio estadístico explícito en lugar de con una convención de compilación.",
          ],
          cierre:
            "La consecuencia práctica: antes de reconciliar hay que comprobar que las magnitudes suman de verdad. Con volúmenes encadenados o con tasas, la matriz de sumas describe una estructura que los datos no cumplen.",
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
              q: "En una jerarquía con un total, dos ramas y cuatro hojas, ¿cuántos grados de libertad hay?",
              a: "Cuatro, uno por hoja. Hay siete series, pero una vez fijadas las cuatro hojas las otras tres quedan determinadas por suma. Las tres restantes son restricciones: turismo igual a sus dos hojas, industria igual a las suyas, y total igual a la suma de las dos ramas. Confundir el número de series con el de cantidades independientes lleva a sobrestimar la información disponible.",
            },
            {
              q: "¿Qué significa geométricamente que un conjunto de previsiones sea coherente?",
              a: "Que el vector de previsiones pertenece al subespacio generado por las columnas de la matriz de sumas, de dimensión igual al número de hojas. Las previsiones base, obtenidas por separado, son un punto del espacio completo que casi con seguridad cae fuera de ese subespacio. Reconciliar es llevarlo dentro, y el método define en qué dirección.",
            },
            {
              q: "Las previsiones base son 132 para el total, 57,5 y 76 para las ramas, y 32, 24,5, 55 y 22 para las hojas. ¿Dónde falla la coherencia?",
              a: "En las tres restricciones. Hostelería más transporte dan 56,5 frente a 57,5 de turismo: sobra 1,0. Manufactura más energía dan 77,0 frente a 76,0 de industria: falta 1,0. Y turismo más industria dan 133,5 frente a 132,0 del total: sobran 1,5. Las siete cifras son individualmente razonables y conjuntamente imposibles.",
            },
            {
              q: "¿Qué exige la condición de invariancia y por qué importa?",
              a: "Que el método devuelva los valores originales cuando se le entrega un conjunto ya coherente, es decir, que no toque lo que ya cuadra. Importa porque es lo que preserva la insesgadez: si las previsiones base fueran insesgadas, las reconciliadas también lo serían. Bottom-up y la reconciliación óptima la cumplen; top-down no, y de ahí procede el sesgo que se le atribuye.",
            },
            {
              q: "¿Por qué no se puede reconciliar directamente sobre volúmenes encadenados o sobre tasas?",
              a: "Porque la construcción entera supone que los agregados son sumas de las hojas, y ninguna de esas dos magnitudes lo es. Los volúmenes encadenados no son aditivos ni siquiera en los datos observados, y la tasa de un agregado es una media ponderada de las de sus componentes, no su suma. Hay que reconciliar sobre niveles aditivos y derivar después las magnitudes que se publican.",
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
              q: "¿Qué contiene la matriz de sumas?",
              opciones: [
                "Los datos históricos de cada serie de la jerarquía",
                "Solo ceros y unos que describen qué suma qué",
                "Las ponderaciones de cada hoja en su agregado",
                "Las covarianzas entre los errores de previsión",
              ],
              correcta: 1,
              porque: [
                "No contiene ningún dato: es la misma matriz para cualquier periodo, cualquier variable y cualquier método.",
                "Describe la estructura de agregación y nada más, y por eso puede escribirse antes de tener un solo dato.",
                "Las ponderaciones aparecen en algunos métodos de reconciliación, no en la matriz que define la estructura.",
                "Las covarianzas son la materia prima de la reconciliación óptima, y viven en otra matriz distinta.",
              ],
            },
            {
              q: "¿Puede aplicarse la formulación matricial a una estructura agrupada, con región y producto cruzados?",
              opciones: [
                "Sí, pero perdiendo la garantía de coherencia en los cruces",
                "Solo si se elige previamente cuál de los dos criterios va primero",
                "No: exige un árbol en el que cada serie tenga un único padre",
                "Sí: solo exige que cada serie sea una suma de hojas, y basta añadir una fila por cada agregado que interese",
              ],
              correcta: 3,
              porque: [
                "La coherencia se mantiene en todos los agregados declarados, cruces incluidos.",
                "Elegir un orden es justo lo que la formulación evita: en una retícula esa elección sería arbitraria.",
                "El árbol es un caso particular, no un requisito: lo que hace falta es poder escribir cada serie como suma de hojas.",
                "Los totales por región y los totales por producto son ambos sumas de las mismas celdas, así que caben en la misma matriz.",
              ],
            },
            {
              q: "¿Qué exige la condición de invariancia a un método de reconciliación?",
              opciones: [
                "Que el resultado no dependa del orden en que se recorra la jerarquía",
                "Que la suma de los ajustes aplicados sea cero",
                "Que funcione igual con cualquier número de niveles",
                "Que devuelva los valores originales cuando se le entrega un conjunto de previsiones ya coherente",
              ],
              correcta: 3,
              porque: [
                "La independencia del orden es deseable y no es lo que define esta condición.",
                "La suma de los ajustes no tiene por qué anularse.",
                "La escalabilidad es una propiedad práctica, no la condición de invariancia.",
                "Es natural —no tocar lo que ya está bien— y además tiene consecuencia estadística: preserva la insesgadez, y el top-down la incumple.",
              ],
            },
            {
              q: "¿Puede reconciliarse directamente una jerarquía de tasas de variación?",
              opciones: [
                "No: toda la construcción supone que los agregados son sumas de las hojas, y las tasas, ratios e índices no son aditivos",
                "Sí, ponderando cada tasa por el peso de su serie",
                "Sí: las tasas se agregan igual que los niveles",
                "No, salvo que todas las series tengan la misma base",
              ],
              correcta: 0,
              porque: [
                "Es la misma razón por la que no se puede reconciliar directamente sobre volúmenes encadenados. Hay que trabajar sobre magnitudes aditivas y derivar después las tasas.",
                "Ponderar es la forma correcta de agregar tasas y no las convierte en aditivas para esta construcción, que exige sumas puras.",
                "Las tasas no suman: la tasa del total no es la suma de las tasas de sus partes.",
                "La base común no convierte una tasa en una magnitud aditiva.",
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
            { ref: "Hyndman y otros, «Optimal Combination Forecasts for Hierarchical Time Series»", nota: "el artículo que introdujo la formulación matricial y con ella la posibilidad de tratar la reconciliación como un problema de estimación." },
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice, capítulo de series jerárquicas", nota: "la construcción de la matriz de sumas paso a paso, con ejemplos de estructuras jerárquicas y agrupadas." },
            { ref: "Panagiotelis y otros, «Forecast Reconciliation: A Geometric View»", nota: "la interpretación geométrica del problema como proyección sobre un subespacio, que es la que hace transparente por qué existen infinitas soluciones coherentes." },
            { ref: "Wickramasuriya, Athanasopoulos y Hyndman, «Optimal Forecast Reconciliation for Hierarchical and Grouped Time Series»", nota: "el desarrollo completo de la condición de invariancia y de sus consecuencias sobre la insesgadez." },
          ],
        },
      ],
    },
  ],
};
