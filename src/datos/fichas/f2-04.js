/* Ficha 2.04 — Tecnologia, funcion de produccion y rendimientos a escala. */

export default {
  codigo: "2.04",
  titulo: "Tecnología, función de producción y rendimientos a escala",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "La función de producción describe la frontera de lo técnicamente posible, no lo que una empresa hace. De ella se deducen dos propiedades que se confunden constantemente: la productividad marginal decreciente, que es de corto plazo, y los rendimientos a escala, que son de largo plazo.",
  requiere: "2.01 Preferencias y optimización",
  abre: "2.05 Costes · 3.09 Crecimiento económico",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una **función de producción** asocia a cada combinación de factores la máxima cantidad de producto técnicamente obtenible. La palabra clave es *máxima*: la función describe la **frontera de eficiencia técnica**, no el comportamiento observado. Una empresa puede situarse por debajo por mala organización, y ese hueco es precisamente lo que miden los estudios de eficiencia productiva.",
            "Su estructura es formalmente idéntica a la del consumidor y conviene explotar el paralelismo. Las **isocuantas** son el análogo de las curvas de indiferencia, con la diferencia importante de que su nivel sí es cardinal: producir 200 unidades es exactamente el doble que producir 100, mientras que la utilidad no admitía esa lectura. La pendiente de una isocuanta es la **relación marginal de sustitución técnica**, cociente de productividades marginales, y juega el papel de la RMS.",
            "Aquí aparece la distinción que más confusión genera. La **productividad marginal decreciente** es una propiedad de **corto plazo**: si se aumenta un factor manteniendo fijos los demás, su aportación marginal acaba decreciendo. Los **rendimientos a escala** son de **largo plazo**: describen qué ocurre al multiplicar **todos** los factores por la misma constante. Son conceptos independientes, y una tecnología puede tener productividad marginal decreciente en cada factor y rendimientos crecientes a escala al mismo tiempo.",
            "Los rendimientos a escala se clasifican comparando el aumento del producto con el de los factores. **Constantes** si el producto se multiplica por la misma constante —la tecnología es replicable, y es el supuesto por defecto en muchos modelos porque siempre se puede duplicar una planta—. **Crecientes** si aumenta más que proporcionalmente, por indivisibilidades, especialización o efectos de red. **Decrecientes** si aumenta menos, típicamente porque algún factor no se está replicando de verdad, como la capacidad de dirección o un recurso natural.",
            "La familia **Cobb-Douglas** hace todo esto especialmente transparente: sus exponentes son directamente las elasticidades del producto respecto a cada factor, y su suma determina los rendimientos a escala. Es una tecnología homogénea, lo que simplifica el álgebra a costa de imponer una **elasticidad de sustitución igual a uno**. Cuando ese supuesto importa —y en el análisis del reparto entre trabajo y capital importa mucho— se recurre a la familia **CES**, que deja la elasticidad de sustitución como parámetro libre.",
            "La razón por la que esa elasticidad importa es directa: **determina cómo se reparte el valor añadido entre factores cuando cambian sus precios relativos**. Con elasticidad unitaria, las participaciones son constantes; con elasticidad mayor que uno, un factor que se abarata gana participación; con elasticidad menor, la pierde. Toda la discusión sobre la evolución de la participación salarial pasa por ese parámetro.",
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
            { nom: "Función de producción", sub: "Máximo producto técnicamente obtenible.", cols: ["Q = f(K, L)"] },
            { nom: "Productividad marginal", sub: "Decreciente a partir de cierto punto.", cols: ["$\\mathrm{PMg}_L = \\dfrac{\\partial Q}{\\partial L}$"] },
            { nom: "Relación marginal de sustitución técnica", sub: "Pendiente de la isocuanta.", cols: ["$\\mathrm{RMST} = \\dfrac{\\mathrm{PMg}_L}{\\mathrm{PMg}_K}$"] },
            { nom: "Rendimientos a escala", sub: "Comparar $f(\\lambda K, \\lambda L)$ con $\\lambda f(K, L)$.", cols: ["Constantes si $f(\\lambda K, \\lambda L) = \\lambda f(K, L)$"] },
            { nom: "Cobb-Douglas", sub: "Los exponentes son elasticidades del producto.", cols: ["$Q = A K^{\\alpha} L^{\\beta}$"] },
            { nom: "Grado de homogeneidad", sub: "Determina los rendimientos a escala.", cols: ["$\\alpha$ + $\\beta$ > 1 crecientes · = 1 constantes · < 1 decrecientes"] },
            { nom: "Elasticidad de sustitución", sub: "Igual a 1 en Cobb-Douglas, libre en CES.", cols: ["$\\sigma$ = d ln(K/L) / d ln(RMST)"] },
            { nom: "Teorema de Euler", sub: "Con rendimientos constantes, el producto se agota.", cols: ["$Q = K\\,\\mathrm{PMg}_K + L\\,\\mathrm{PMg}_L$"] },
          ],
          nota: "El **teorema de Euler** es el resultado que conecta la tecnología con la distribución: si hay rendimientos constantes a escala y cada factor se retribuye según su productividad marginal, la producción se reparte exactamente entre ambos sin sobrante ni déficit. Es el fundamento de la teoría neoclásica del reparto funcional de la renta.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una Cobb-Douglas concreta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea $Q = 10\\,K^{0{,}3} L^{0{,}5}$, con $K = 100$ y $L = 25$.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Trabajo", y: "Capital" },
          dominio: { x: [0, 130], y: [0, 320] },
          marcasX: [0, 25, 50, 75, 100, 125],
          marcasY: [0, 100, 200, 300],
          series: [
            {
              nombre: "Q = 199",
              color: "tinta2",
              grosor: 2,
              etiquetaEn: [120, 7.32],
              puntos: [[20, 145.04], [25, 100], [30, 73.79], [40, 45.69], [50, 31.5], [60, 23.24], [75, 16.02], [90, 11.83], [105, 9.15], [120, 7.32]],
            },
            {
              nombre: "Q = 347",
              color: "acento",
              grosor: 2,
              etiquetaEn: [120, 46.49],
              puntos: [[40, 290.09], [50, 200], [60, 147.59], [75, 101.75], [90, 75.09], [105, 58.07], [120, 46.49]],
            },
            {
              nombre: "Q = 479",
              color: "alerta",
              grosor: 2,
              etiquetaEn: [120, 136.85],
              puntos: [[75, 299.53], [90, 221.04], [105, 170.96], [120, 136.85]],
            },
            {
              nombre: "Escala",
              color: "tinta",
              trazo: "punteado",
              grosor: 1.4,
              etiquetaEn: [78, 312],
              puntos: [[0, 0], [80, 320]],
            },
          ],
          puntos: [
            { x: 25, y: 100, etiqueta: "×1", guias: false },
            { x: 50, y: 200, etiqueta: "×2 factores", guias: false },
            { x: 75, y: 300, etiqueta: "×3 factores", guias: false },
          ],
          nota: "Cada curva reúne las combinaciones de capital y trabajo que producen la misma cantidad, y su **pendiente es la relación marginal de sustitución técnica**: cuántas unidades de capital sustituyen a una de trabajo sin perder producto. Son convexas porque **cuanto más escaso se vuelve un factor, más caro resulta sustituirlo**. La recta punteada es la senda de escala, y sobre ella están los tres puntos de la tabla. Ahí se ve el resultado que importa: al **duplicar ambos factores** se pasa de 199 a 347, no a 398, y al triplicarlos se llega a 479 y no a 597. Las isocuantas se van **separando** al alejarse del origen, que es el aspecto visual de los **rendimientos decrecientes a escala** que impone $\\alpha$ + $\\beta$ = 0,8 < 1.",
        },
        {
          tipo: "tabla",
          cabecera: ["Magnitud", "Desarrollo", "Valor"],
          filas: [
            ["Producto", "$10 \\times 100^{0{,}3} \\times 25^{0{,}5}$", "199,05"],
            ["Productividad marginal del trabajo", "$5 K^{0{,}3} L^{-0{,}5}$", "3,98"],
            ["Productividad media del trabajo", "199,05 / 25", "7,96"],
            ["Productividad marginal del capital", "$3 K^{-0{,}7} L^{0{,}5}$", "0,597"],
            { celdas: ["RMST", "3,98 / 0,597", "6,67"], clase: "total" },
          ],
          nota: "La RMST de 6,67 significa que, en ese punto, **una unidad adicional de trabajo sustituye a 6,67 unidades de capital** manteniendo la producción. Y observa que la productividad marginal del trabajo (3,98) es inferior a la media (7,96): es consecuencia directa de que el exponente sea menor que uno, ya que PMg = $\\beta$ · PMe.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escala", "K", "L", "Producto", "Frente al original"],
          filas: [
            ["Original", "100", "25", "199,05", "—"],
            ["Duplicar ambos factores", "200", "50", "346,57", "×1,741"],
            ["Triplicar ambos factores", "300", "75", "479,14", "×2,408"],
            { celdas: ["Duplicar solo el trabajo", "100", "50", "281,50", "×1,414"], clase: "total" },
          ],
          nota: "Como $\\alpha + \\beta = 0{,}8 < 1$, hay **rendimientos decrecientes a escala**: duplicar todos los factores multiplica el producto por $2^{0{,}8} = 1{,}741$, un 74 % más y no un 100 %. Y la última fila muestra el otro concepto: duplicar solo el trabajo multiplica el producto por $2^{0{,}5} = 1{,}414$, porque el capital permanece fijo. **Son dos fenómenos distintos y ambos aparecen en la misma función.**",
        },
        {
          tipo: "parrafos",
          items: [
            "**Comprobación del teorema de Euler.** Con esta tecnología, $K\\,\\mathrm{PMg}_K + L\\,\\mathrm{PMg}_L = 100 \\times 0{,}597 + 25 \\times 3{,}98 = 59{,}7 + 99{,}5 = 159{,}2$, frente a un producto de 199,05. Falta un 20 %, exactamente $1 - (\\alpha + \\beta)$. Con rendimientos decrecientes, **retribuir a cada factor según su productividad marginal no agota la producción**: queda un excedente. Con rendimientos crecientes ocurriría lo contrario y la retribución marginal sería insostenible, lo que es una de las razones por las que la competencia perfecta y los rendimientos crecientes son incompatibles.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: de la función de producción a la contabilidad del crecimiento",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La aplicación macroeconómica más extendida de esta ficha es la **contabilidad del crecimiento**. Si se supone una función de producción agregada Cobb-Douglas con rendimientos constantes, el crecimiento del producto se descompone en la contribución del capital, la del trabajo y un residuo que se atribuye al progreso técnico: la **productividad total de los factores**.",
            "La descomposición es aritméticamente sencilla: la tasa de crecimiento del producto es la suma de las tasas de crecimiento de cada factor ponderadas por su participación en la renta, más el residuo. Y las participaciones se toman de las **cuentas nacionales**, no se estiman: bajo los supuestos del modelo, coinciden con los exponentes de la función de producción. Esa es la conexión operativa entre esta ficha y los datos.",
            "**El problema es qué contiene el residuo.** Se llama productividad total de los factores y se calcula como lo que no explican los factores medidos, lo que significa que absorbe el progreso técnico genuino, los errores de medición del capital y del trabajo, los cambios de calidad no capturados, las variaciones en la utilización de la capacidad y cualquier desviación de los supuestos del modelo. Se le ha llamado con acierto **la medida de nuestra ignorancia**.",
            "**Los supuestos son fuertes y conviene tenerlos presentes.** Que exista una función de producción agregada es en sí mismo problemático: agregar capitales heterogéneos en una sola magnitud plantea dificultades conocidas desde la controversia sobre la teoría del capital de los años sesenta. Que haya rendimientos constantes y competencia perfecta es necesario para identificar las participaciones con los exponentes. Y que el progreso técnico sea neutral es una restricción adicional.",
            "**Aun así se sigue usando**, y con razón: ofrece una descomposición replicable, comparable entre países y períodos, y con datos disponibles. Las alternativas —estimar directamente la función, usar fronteras de eficiencia, construir índices de servicios del capital— son más exigentes en datos y no eliminan los problemas conceptuales de fondo.",
            "**El refinamiento más relevante** consiste en sustituir el stock de capital por los **servicios del capital**, ponderando los distintos tipos de activo por su coste de uso en lugar de sumar valores. Un euro invertido en equipo informático presta servicios a un ritmo muy distinto que un euro en un edificio, y tratarlos igual sesga la medición. Es el enfoque de las bases de datos de productividad de tipo KLEMS, y su implantación ha modificado apreciablemente las estimaciones de crecimiento de la productividad en varios países.",
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
            { t: "Confundir productividad marginal decreciente con rendimientos decrecientes a escala", d: "La primera es de corto plazo y se refiere a aumentar un factor manteniendo los demás fijos. Los segundos son de largo plazo y se refieren a aumentar todos a la vez. Una tecnología puede tener lo primero y rendimientos crecientes a escala simultáneamente." },
            { t: "Leer la función de producción como descripción del comportamiento", d: "Describe la frontera de lo técnicamente posible, no lo que una empresa concreta obtiene. La diferencia entre ambas cosas es la ineficiencia técnica, y medirla es un objeto de estudio por derecho propio." },
            { t: "Usar Cobb-Douglas sin advertir que impone elasticidad de sustitución unitaria", d: "Ese supuesto implica participaciones factoriales constantes por construcción. Si lo que se quiere estudiar es precisamente cómo evoluciona la participación salarial, la Cobb-Douglas responde la pregunta antes de mirar los datos." },
            { t: "Interpretar la PTF como progreso técnico sin más", d: "Es un residuo que absorbe también errores de medición, cambios de calidad no capturados, variaciones de utilización de la capacidad y desviaciones de los supuestos del modelo. Llamarla progreso técnico es una interpretación, no una medición." },
            { t: "Agregar capitales heterogéneos sin cautela", d: "Sumar en una sola magnitud activos con vidas útiles y productividades muy distintas plantea problemas conocidos. El enfoque de servicios del capital, que pondera por coste de uso, es una respuesta parcial y no elimina la dificultad conceptual." },
            { t: "Suponer rendimientos constantes por comodidad", d: "Es un supuesto conveniente —permite el teorema de Euler y la identificación de participaciones con exponentes— y no es inocuo. Con rendimientos crecientes, la competencia perfecta es incompatible con la retribución marginal de los factores." },
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
            "La función de producción es el marco teórico que da sentido a las magnitudes que las cuentas nacionales miden por el lado de la oferta.",
          ],
          lista: [
            "La **cuenta de producción** del SEC 2010 registra producción y consumos intermedios, y su saldo es el **valor añadido bruto**. Es la contrapartida contable de la función de producción, con la diferencia de que mide lo realizado y no la frontera de lo posible.",
            "Las **participaciones factoriales** que la contabilidad del crecimiento usa como ponderaciones proceden de la descomposición del VAB entre remuneración de asalariados (D.1) y excedente bruto de explotación (B.2). Bajo los supuestos del modelo, coinciden con los exponentes de la función.",
            "El **stock de capital** se estima con el método del inventario permanente, acumulando series de formación bruta de capital fijo con funciones de supervivencia. Es la misma estimación que sostiene el consumo de capital fijo de la ficha 5.06.",
            "El paso del stock a los **servicios del capital** pondera los distintos activos por su coste de uso, reconociendo que un euro en equipo informático y un euro en construcción no prestan el mismo flujo de servicios productivos. Es el enfoque de las bases de datos de productividad multifactorial.",
            "Y la **renta mixta (B.3)** complica el cálculo de las participaciones: recoge conjuntamente la retribución del trabajo y del capital de los empresarios individuales, y hay que repartirla con algún criterio antes de calcular la participación salarial. La elección de ese criterio afecta apreciablemente al resultado.",
          ],
          cierre:
            "Ese último punto es una fuente conocida de discrepancias entre estimaciones de la participación salarial de un mismo país: no siempre proceden de datos distintos, sino de repartos distintos de la renta mixta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "$Q = 5 K^{0{,}4} L^{0{,}7}$. ¿Qué rendimientos a escala tiene?", a: "Crecientes: $\\alpha + \\beta = 1{,}1 > 1$. Duplicar ambos factores multiplica el producto por $2^{1{,}1} = 2{,}14$, es decir un 114 % más. Y aun así cada factor por separado tiene productividad marginal decreciente." },
            { q: "¿Puede una tecnología tener productividad marginal decreciente y rendimientos crecientes a escala?", a: "Sí, y es el caso de la pregunta anterior. Son conceptos independientes: uno se refiere a aumentar un factor con los demás fijos y el otro, a aumentar todos a la vez." },
            { q: "En $Q = A K^{\\alpha} L^{\\beta}$ con $\\alpha + \\beta = 1$, ¿qué dice el teorema de Euler?", a: "Que $K\\,\\mathrm{PMg}_K + L\\,\\mathrm{PMg}_L = Q$ exactamente: retribuir a cada factor según su productividad marginal agota la producción, sin sobrante ni déficit. Es el fundamento de la teoría neoclásica del reparto funcional." },
            { q: "¿Por qué la elasticidad de sustitución importa para la participación salarial?", a: "Porque determina cómo se reparte el valor añadido cuando cambian los precios relativos de los factores. Con elasticidad unitaria las participaciones son constantes por construcción, así que una Cobb-Douglas no puede explicar su evolución." },
            { q: "¿Qué problema plantea la renta mixta al calcular la participación salarial?", a: "Que retribuye conjuntamente el trabajo y el capital de los empresarios individuales sin separarlos. Hay que repartirla con algún criterio, y estimaciones que difieren solo en ese criterio dan participaciones salariales apreciablemente distintas." },
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
              q: "¿En qué se diferencian la productividad marginal decreciente y los rendimientos decrecientes a escala?",
              opciones: [
                "En nada: son dos nombres del mismo fenómeno",
                "La primera es de corto plazo y aumenta un factor con los demás fijos; los segundos son de largo plazo y aumentan todos a la vez",
                "La primera se refiere al trabajo y los segundos al capital",
                "La primera es un supuesto y los segundos un resultado empírico",
              ],
              correcta: 1,
              porque: [
                "Pueden darse por separado: una función puede tener rendimientos crecientes a escala y a la vez productividad marginal decreciente en cada factor.",
                "Son fenómenos distintos y ambos aparecen en la misma función. En $Q = 10 K^{0{,}3} L^{0{,}5}$ los exponentes suman 0,8 —decrecientes a escala— y cada factor por separado tiene productividad marginal decreciente.",
                "Ambos conceptos se aplican a cualquier factor. No hay ninguna asignación de uno al trabajo y otro al capital.",
                "Los dos son propiedades de la función de producción que se comprueban derivando, no una mezcla de supuesto y evidencia.",
              ],
            },
            {
              q: "Una empresa produce menos de lo que su función de producción indica para sus factores. ¿Qué mide esa diferencia?",
              opciones: [
                "Un error en la estimación de la función",
                "La ineficiencia técnica: la función describe la frontera de lo posible, no lo que se obtiene",
                "El efecto de los rendimientos decrecientes",
                "La depreciación del capital no contabilizada",
              ],
              correcta: 1,
              porque: [
                "La función puede estar bien estimada y aun así la empresa quedar por debajo. Confundir ambas cosas impide ver que la distancia a la frontera es en sí misma un objeto de estudio.",
                "Medir esa distancia es una rama entera de la economía aplicada, y la diferencia entre frontera y comportamiento es justamente lo que hace informativa la comparación.",
                "Los rendimientos decrecientes describen la forma de la frontera, no la distancia a ella. Se puede estar sobre la frontera con cualquier tipo de rendimientos.",
                "La depreciación afecta al stock de capital disponible, que es un dato de entrada, no la brecha entre lo posible y lo obtenido.",
              ],
            },
            {
              q: "Un estudio quiere analizar cómo ha evolucionado la participación salarial y usa una Cobb-Douglas. ¿Qué problema tiene?",
              opciones: [
                "Ninguno: es la especificación estándar para este tipo de análisis",
                "Que impone participaciones factoriales constantes por construcción, que es justo lo que se quiere estudiar",
                "Que no permite rendimientos crecientes a escala",
                "Que exige suponer competencia perfecta en el mercado de productos",
              ],
              correcta: 1,
              porque: [
                "Es estándar para muchas cosas, pero no para esta. La elección de forma funcional decide el resultado antes de mirar un solo dato.",
                "Su elasticidad de sustitución es unitaria, y de ahí se sigue que las participaciones no se mueven. Preguntarle a esa función si la participación salarial cae es preguntarle algo que su forma ya ha contestado que no.",
                "Sí los permite: basta con que los exponentes sumen más de uno. La restricción está en la sustitución, no en la escala.",
                "La competencia perfecta se necesita para identificar los exponentes con las participaciones observadas, pero el problema de fondo aquí es la sustitución unitaria.",
              ],
            },
            {
              q: "La contabilidad del crecimiento atribuye a la PTF el residuo no explicado por capital y trabajo. ¿Qué recoge esa magnitud?",
              opciones: [
                "El progreso técnico, ni más ni menos",
                "El progreso técnico y también errores de medición, cambios de calidad y variaciones de utilización de la capacidad",
                "Solo la mejora en la formación de los trabajadores",
                "La inversión en investigación y desarrollo del período",
              ],
              correcta: 1,
              porque: [
                "Llamarla «progreso técnico» a secas convierte un residuo en una explicación. Se la ha llamado «la medida de nuestra ignorancia» con bastante justicia.",
                "Todo lo que no se ha medido bien acaba dentro. Por eso una PTF que cae en una recesión no significa que se haya olvidado tecnología: significa que la capacidad está infrautilizada.",
                "El capital humano suele tratarse aparte, ajustando el factor trabajo por calidad. Si no se hace, va al residuo, pero no es lo único que va.",
                "El gasto en I+D es un insumo observable; la PTF es lo que queda sin explicar después de contar los insumos.",
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
            { ref: "Nicholson y Snyder, Teoría microeconómica", nota: "el capítulo de tecnología, con el desarrollo formal de rendimientos a escala y elasticidad de sustitución." },
            { ref: "Varian, Microeconomía intermedia", nota: "la exposición más intuitiva de isocuantas y RMST, útil antes de entrar en el álgebra." },
            { ref: "OCDE, Manual de medición de la productividad", nota: "la contabilidad del crecimiento aplicada, con la distinción entre stock y servicios del capital." },
            { ref: "Jorgenson, Gollop y Fraumeni, y las bases de datos KLEMS", nota: "el enfoque de servicios del capital y su efecto sobre las estimaciones de productividad." },
          ],
        },
      ],
    },
  ],
};
