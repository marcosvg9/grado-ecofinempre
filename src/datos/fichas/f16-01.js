/* Ficha 16.01 — Estructuras jerárquicas y agrupadas. */

export default {
  codigo: "16.01",
  titulo: "Estructuras jerárquicas y agrupadas",
  nivel: 3,
  bloque: "Series temporales jerárquicas",
  tiempo: "4 h",
  nucleo:
    "Casi toda serie económica es la suma de otras: por territorio, por producto o por rama. Prever cada una por separado produce cifras que no cuadran entre sí, y el problema no es cosmético: cada nivel de agregación contiene información que los demás no tienen.",
  requiere: "15.11 Agregación directa e indirecta · 4.09 Series temporales · 10.07 Los tres enfoques",
  abre: "16.02 Coherencia y la matriz de sumas · 16.03 Bottom-up y top-down · 16.06 Jerarquías temporales",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 15.11 planteó un problema para el ajuste estacional: ajustar el total o ajustar las partes y sumarlas dan resultados distintos. Este bloque generaliza ese problema a las **previsiones**, donde aparece con más fuerza y donde además tiene una solución mejor. Si un servicio de estudios prevé el PIB, y por otro lado prevé el consumo, la inversión y el sector exterior, las cuatro cifras no cuadrarán. Publicarlas juntas es publicar una contradicción.",
            "Conviene fijar el vocabulario. Una **jerarquía** es una estructura de agregación **estrictamente anidada**: cada serie del nivel inferior pertenece a una y solo una del nivel superior. Los municipios se agregan en provincias, las provincias en comunidades, las comunidades en el país. Un producto pertenece a una familia y una familia a una categoría. La estructura es un árbol, y esa es la propiedad que la hace manejable.",
            "Una **estructura agrupada** aparece cuando hay **varios criterios de agregación cruzados** que no se anidan. Las ventas se pueden desagregar por región y por línea de producto, y ninguna de las dos clasificaciones está contenida en la otra: la línea A se vende en todas las regiones y la región norte vende todas las líneas. No hay un árbol único sino una retícula, y el número de agregados posibles crece deprisa. La maquinaria del bloque sirve igual, pero la intuición del árbol deja de valer y hay que apoyarse en el álgebra de la ficha 16.02.",
            "El punto de fondo, y el que justifica todo lo demás, es que **cada nivel de agregación aporta información distinta**. Las series de nivel bajo tienen mucho ruido específico: un municipio o un producto concreto están sujetos a movimientos idiosincrásicos que se cancelan al agregar. Las series agregadas son relativamente más suaves y su comportamiento es más predecible. Al mismo tiempo, las series desagregadas contienen detalle que el agregado no muestra: un cambio de composición interna puede dejar el total quieto.",
            "De ahí se sigue una consecuencia que orienta el bloque entero. La previsión del agregado no es simplemente una previsión más: **es a menudo la más fiable en términos relativos**, porque el promediado ha reducido el ruido. Y las previsiones de las hojas contienen detalle que el agregado ignora. Cualquier método que descarte una de las dos fuentes está tirando información, y eso es exactamente lo que hacen los métodos clásicos de la ficha 16.03.",
            "Merece la pena señalar que la estructura no siempre es obvia ni única. Un mismo conjunto de series puede organizarse por territorio o por actividad, y la elección afecta al resultado. Además, la estructura **declarada** puede no coincidir con la real: si dos ramas nominalmente independientes comparten un choque común —el precio de la energía, una campaña comercial—, sus errores de previsión estarán correlacionados aunque el árbol diga que son hermanas separadas. Esa correlación es precisamente lo que la reconciliación óptima intenta explotar, y el motivo de que la ficha 16.05 dedique tanto espacio a estimarla.",
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
            { nom: "Jerarquía", sub: "Estructura estrictamente anidada.", cols: ["Cada serie inferior pertenece a una sola superior: un árbol"] },
            { nom: "Estructura agrupada", sub: "Criterios cruzados.", cols: ["Región × producto: retícula, no árbol"] },
            { nom: "Series hoja", sub: "El nivel más desagregado.", cols: ["Todo lo demás se obtiene sumándolas"] },
            { nom: "Previsiones base", sub: "El punto de partida.", cols: ["Cada serie prevista por separado: no cuadran entre sí"] },
            { nom: "Incoherencia", sub: "El problema a resolver.", cols: ["La suma de las previsiones $\\neq$ previsión de la suma"] },
            { nom: "Ruido y agregación", sub: "Por qué el total se prevé mejor.", cols: ["El coeficiente de variación cae con $1/\\sqrt k$"] },
            { nom: "Detalle y agregación", sub: "Por qué las hojas también importan.", cols: ["Un cambio de composición deja el total quieto"] },
            { nom: "Estructura declarada", sub: "Puede no ser la real.", cols: ["Choques comunes correlacionan ramas nominalmente separadas"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: cuánto ruido pierde un agregado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Supóngase que las series hoja tienen todas la misma media y la misma variabilidad, y que sus movimientos idiosincrásicos son independientes. Al agregar **k** de ellas, la media se multiplica por $k$ pero la desviación típica solo por $\\sqrt k$, porque las desviaciones se cancelan parcialmente entre sí. El resultado es que el **coeficiente de variación** —la variabilidad relativa al nivel— cae con $1/\\sqrt k$.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Series hoja agregadas", y: "Ruido relativo %" },
          dominio: { x: [1, 64], y: [0, 112] },
          marcasX: [1, 16, 32, 48, 64],
          marcasY: [0, 25, 50, 75, 100],
          series: [
            {
              nombre: "Ruido relativo del agregado",
              color: "acento",
              etiquetaEn: [13, 88],
              puntos: [[1, 100], [2, 70.7], [3, 57.7], [4, 50], [6, 40.8], [8, 35.4], [12, 28.9], [16, 25], [24, 20.4], [32, 17.7], [48, 14.4], [64, 12.5]],
            },
          ],
          puntos: [
            { x: 1, y: 100, etiqueta: "hoja", guias: false },
            { x: 2, y: 70.7, etiqueta: "rama", guias: false },
            { x: 4, y: 50, etiqueta: "total", guias: false },
          ],
          nota: "Los tres puntos marcados son los niveles de la jerarquía que usará el bloque: cuatro hojas, dos ramas de dos hojas cada una, y un total. **El total tiene la mitad de ruido relativo que una hoja**, sin que nadie haya mejorado ningún modelo: la reducción procede solo de agregar. La caída es muy rápida al principio y luego se aplana, lo que explica que agregar los primeros niveles compense mucho y los últimos, poco.",
        },
        {
          tipo: "tabla",
          cabecera: ["Nivel", "Hojas que agrega", "Media", "Desviación típica", "Ruido relativo"],
          filas: [
            ["Hoja", "1", "m", "$\\sigma$", "100 %"],
            ["Rama", "2", "2m", "1,414 $\\sigma$", "70,7 %"],
            { celdas: ["Total", "4", "4m", "2,000 $\\sigma$", "50,0 %"], clase: "total" },
          ],
          nota: "La aritmética es la de siempre: la varianza de una suma de variables independientes es la suma de las varianzas, así que la desviación típica va con la raíz. Es el mismo mecanismo que sostiene la diversificación de carteras en la ficha 8.05 y la reducción de incertidumbre del nowcasting en la ficha 15.12. **Agregar es diversificar**, y por eso los agregados se comportan mejor.",
        },
        {
          tipo: "parrafos",
          items: [
            "La lectura práctica es doble y las dos mitades importan. Por un lado, **la previsión del agregado merece respeto**: no es una cifra derivada de las demás sino la que se apoya en la serie con mejor relación señal-ruido. Descartarla, como hace el método bottom-up, es tirar la información más limpia de la que se dispone.",
            "Por otro, **el agregado es ciego a la composición**. Si el turismo sube justo lo que baja la industria, el total no se mueve y una previsión del total no puede avisar de nada. Todo lo que ocurre dentro —y la ficha 15.11 mostró que puede ser muchísimo, con factores estacionales de 1,66 frente a 0,51 en el mismo trimestre— es invisible arriba. Descartar las previsiones de las hojas, como hace top-down, tira la única información sobre la estructura interna.",
            "Ese es el argumento entero del bloque en dos párrafos: hay información arriba y hay información abajo, los métodos clásicos eligen una y descartan la otra, y existe una forma de usar las dos. La ficha 16.02 construye el aparato que lo permite, que resulta ser sorprendentemente simple: una matriz de ceros y unos.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: la jerarquía que no era un árbol",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una cadena con tiendas en cuatro regiones y tres líneas de producto quiere previsiones de ventas. Parece un problema de jerarquía sencillo hasta que hay que dibujar el árbol, y entonces aparece la dificultad: **¿el primer nivel es la región o la línea?** Ambas clasificaciones son legítimas, ninguna contiene a la otra, y el resultado depende de cuál se elija.",
            "Si se organiza por región, los agregados intermedios son las ventas de cada región, y las hojas son región × línea. Si se organiza por línea, los intermedios son las ventas de cada línea y las hojas son las mismas doce combinaciones. **Las hojas coinciden, los agregados intermedios no**, y una previsión bottom-up daría el mismo resultado en ambos casos mientras que una top-down daría resultados completamente distintos.",
            "La solución conceptual es dejar de pensar en árboles. Una **estructura agrupada** admite simultáneamente los cuatro agregados regionales, los tres agregados por línea y el total: ocho agregados sobre doce hojas, sin que nadie tenga que elegir un orden. Formalmente no hay ninguna dificultad —la matriz de la ficha 16.02 recoge cualquier estructura de sumas, anidada o no—, y solo se pierde la intuición visual del árbol.",
            "El caso ilustra además por qué la estructura **declarada** puede diferir de la real. Si una campaña nacional impulsa una línea concreta en todas las regiones, los errores de previsión de esas cuatro hojas estarán correlacionados aunque pertenezcan a regiones distintas. Un método que suponga independencia entre hermanas desaprovechará esa información; uno que estime la correlación entre errores la explotará. Ese es el salto de la reconciliación ingenua a la óptima, y la razón de que la ficha 16.05 sea la más delicada del bloque.",
            "Una advertencia final sobre el tamaño. Con doce hojas y ocho agregados hay veinte series que prever. En un caso real —quinientos productos por cincuenta puntos de venta— el número de series se cuenta por decenas de miles, y eso condiciona qué métodos son viables: cualquier procedimiento que exija estimar e invertir una matriz de covarianzas de ese tamaño deja de ser practicable sin supuestos simplificadores. La escalabilidad no es un detalle de implementación en este tema: **decide qué método se puede usar**.",
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
            { t: "Publicar previsiones de distintos niveles sin comprobar que cuadran", d: "Prever el PIB por un lado y sus componentes por otro produce cifras que no suman. Publicarlas juntas es publicar una contradicción, y el usuario que intente calcular contribuciones al crecimiento encontrará un residuo que nadie ha explicado." },
            { t: "Suponer que la previsión del agregado es la menos fiable", d: "Suele ser al contrario. La agregación cancela ruido idiosincrásico, así que el coeficiente de variación cae con la raíz del número de series agregadas: con cuatro hojas, el total tiene la mitad de ruido relativo. Es la información más limpia disponible, y descartarla tiene un coste." },
            { t: "Creer que el agregado contiene todo lo relevante", d: "Es ciego a la composición. Si una rama sube lo que otra baja, el total no se mueve y no puede avisar de un cambio estructural que está ocurriendo debajo. Las series desagregadas contienen información que ninguna agregación conserva." },
            { t: "Forzar un árbol donde hay criterios cruzados", d: "Cuando región y línea de producto son clasificaciones independientes, elegir cuál va primero es arbitrario y cambia los agregados intermedios y, con ellos, el resultado de métodos como top-down. La estructura agrupada admite ambos conjuntos de agregados a la vez sin tener que decidir." },
            { t: "Suponer que las series hermanas son independientes", d: "Un choque común —el precio de la energía, una campaña nacional— correlaciona los errores de previsión de ramas que el árbol declara separadas. Ignorar esa correlación desaprovecha información que la reconciliación óptima puede explotar." },
            { t: "Ignorar el tamaño del problema al elegir método", d: "Con quinientos productos por cincuenta tiendas hay decenas de miles de series. Cualquier procedimiento que exija estimar e invertir una matriz de covarianzas de esa dimensión deja de ser practicable. En este tema la escalabilidad decide qué método se puede usar, no es un detalle posterior." },
            { t: "Confundir coherencia con exactitud", d: "Un conjunto de previsiones puede cuadrar perfectamente y estar equivocado en bloque: bottom-up siempre es coherente y puede ser malo. La coherencia es un requisito de presentación, no una medida de calidad, aunque el bloque mostrará que imponerla bien además mejora la exactitud." },
            { t: "Elegir el nivel de desagregación por conveniencia de los datos", d: "Bajar de nivel multiplica el número de series y el ruido de cada una, sin que necesariamente aporte detalle útil. Desagregar hasta donde llegan los datos, en lugar de hasta donde hay señal, produce jerarquías enormes cuyas hojas son casi ruido puro." },
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
            "El sistema de cuentas es probablemente la mayor estructura jerárquica que existe en estadística económica, y además con criterios cruzados.",
          ],
          lista: [
            "El SEC organiza la información según **varias clasificaciones simultáneas que no se anidan entre sí**: por sector institucional según la ficha 12.01, por rama de actividad, por producto y por operación. El valor añadido se puede desagregar por rama o por sector, y ninguna de las dos clasificaciones contiene a la otra. Es exactamente una estructura agrupada, no un árbol.",
            "Las restricciones son además **cruzadas y simultáneas**. El PIB debe coincidir por los tres enfoques de la ficha 10.07, el equilibrio por producto de la ficha 13.02 debe cumplirse para cada producto, y las cuentas de cada sector deben cerrar. No es una jerarquía con una restricción por nodo, sino un sistema de restricciones que se cortan unas a otras, y ese es el caso general que trata la ficha 16.09.",
            "El **marco input-output** lleva esta estructura al extremo: la tabla de origen y destino impone coherencia simultánea por filas y por columnas, es decir, por producto y por rama a la vez. Reconciliar previsiones dentro de ese marco es el problema jerárquico en su versión más exigente, y es lo que hacen los modelos de proyección sectorial.",
            "El argumento del ruido tiene una lectura directa en cuentas nacionales: las estimaciones de **agregados amplios son más fiables que las de sus componentes**, no porque se midan mejor sino porque los errores de medición y de estimación se compensan al sumar. Es la razón de que el PIB total se revise proporcionalmente menos que sus partidas, y de que las cifras muy desagregadas de la ficha 10.10 haya que leerlas con más cautela.",
            "Por último, el sistema ya practica una forma de reconciliación aunque no la llame así. El **proceso de compilación** de las cuentas consiste, en buena parte, en confrontar estimaciones obtenidas por vías distintas y ajustarlas hasta que cuadren, colocando la discrepancia donde el criterio del compilador decida. Lo que aporta este bloque es hacer explícito ese ajuste y elegir el reparto con un criterio estadístico en lugar de con uno convencional.",
          ],
          cierre:
            "La consecuencia práctica: cuando alguien publica previsiones de PIB y de sus componentes, o las ha reconciliado o no cuadran. Preguntar cómo se impuso la coherencia es preguntar qué información se decidió tirar.",
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
              q: "¿Qué distingue una jerarquía de una estructura agrupada?",
              a: "La jerarquía es estrictamente anidada: cada serie inferior pertenece a una y solo una superior, de modo que la estructura es un árbol. La estructura agrupada tiene varios criterios de agregación cruzados que no se contienen entre sí —región y línea de producto, por ejemplo—, así que no hay un árbol único sino una retícula. El aparato algebraico sirve igual; lo que se pierde es la intuición visual.",
            },
            {
              q: "Al agregar cuatro series hoja independientes, ¿cuánto cae el ruido relativo?",
              a: "A la mitad. La media se multiplica por cuatro pero la desviación típica solo por $\\sqrt 4 = 2$, así que el coeficiente de variación pasa a ser la mitad. En general cae con $1/\\sqrt k$. Es el mismo mecanismo que la diversificación de carteras: agregar es diversificar, y por eso los agregados se comportan mejor que sus partes.",
            },
            {
              q: "Si la previsión del agregado es la más fiable, ¿por qué no usar solo esa?",
              a: "Porque el agregado es ciego a la composición. Si una rama sube justo lo que otra baja, el total no se mueve y no puede avisar de un cambio estructural que está ocurriendo debajo. Hay información arriba —menos ruido— e información abajo —el detalle—, y el problema del bloque es cómo usar ambas en lugar de elegir una.",
            },
            {
              q: "Dos ramas hermanas de la jerarquía sufren un choque común. ¿Qué implica?",
              a: "Que sus errores de previsión estarán correlacionados aunque el árbol las declare separadas, es decir, que la estructura declarada no describe bien la dependencia real. Un método que suponga independencia entre hermanas desaprovecha esa información; uno que estime la correlación entre errores puede explotarla, y ahí está la diferencia entre reconciliación ingenua y óptima.",
            },
            {
              q: "¿Por qué el sistema de cuentas nacionales no es una jerarquía en sentido estricto?",
              a: "Porque organiza la información según varias clasificaciones simultáneas que no se anidan: sector institucional, rama de actividad, producto y operación. El valor añadido se desagrega por rama o por sector y ninguna contiene a la otra. Además las restricciones se cruzan: los tres enfoques del PIB, el equilibrio por producto y el cierre de las cuentas de cada sector se imponen a la vez.",
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
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice, capítulo de series jerárquicas", nota: "la exposición más clara y accesible del problema y de todos los métodos del bloque; disponible en abierto y con código reproducible." },
            { ref: "Hyndman y otros, «Optimal Combination Forecasts for Hierarchical Time Series»", nota: "el artículo que reformuló el problema como una regresión y abrió la vía a la reconciliación por proyección." },
            { ref: "Athanasopoulos, Gamakumara y otros, «Hierarchical Forecasting»", nota: "revisión del estado de la cuestión, con el tratamiento de estructuras agrupadas y de los problemas de escala." },
            { ref: "Eurostat, Handbook on Quarterly National Accounts", nota: "cómo se imponen en la práctica las restricciones cruzadas del sistema de cuentas, que es el caso jerárquico más exigente." },
          ],
        },
      ],
    },
  ],
};
