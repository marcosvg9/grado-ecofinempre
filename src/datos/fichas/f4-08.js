/* Ficha 4.08 — Datos de panel: efectos fijos y aleatorios. */

export default {
  codigo: "4.08",
  titulo: "Datos de panel: efectos fijos y aleatorios",
  nivel: 4,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "4 h",
  nucleo:
    "Observar la misma unidad varias veces permite comparar a cada una consigo misma, y eso elimina de golpe toda la heterogeneidad no observada que sea constante en el tiempo. Es la solución más barata al problema de la ficha 4.07, y también la que más fácilmente se lleva por delante la variación que interesaba.",
  requiere: "4.07 Variables instrumentales · 4.05 Regresión por MCO",
  abre: "4.09 Series temporales · 10.01 Estructura productiva española · 10.09 Coste laboral unitario",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **panel** es un conjunto de datos donde se observa a las mismas unidades —personas, empresas, provincias, países— en varios momentos del tiempo. Frente a un corte transversal, que fotografía a muchos individuos una sola vez, y frente a una serie temporal, que sigue a uno solo durante mucho tiempo, el panel combina ambas dimensiones. Y esa combinación no es una comodidad: **permite una estrategia de identificación que ninguna de las dos por separado tiene**.",
            "**La idea es que cada unidad actúa como su propio grupo de control.** Si el problema es que las empresas difieren en calidad de gestión, o las personas en capacidad, o los países en calidad institucional, y nada de eso se observa, la solución del panel consiste en **comparar cada unidad consigo misma a lo largo del tiempo**. Todo lo que sea específico de la unidad y constante —la capacidad, la cultura de la empresa, la geografía, las instituciones heredadas— desaparece al hacer esa comparación, **aunque no se haya medido, aunque ni siquiera se sepa qué es**. Eso es lo que se llama estimador **intragrupo** o de **efectos fijos**.",
            "**Operativamente hay dos formas equivalentes de hacerlo y conviene conocer ambas.** Una es restar a cada variable la media de su unidad, con lo que solo queda la variación en el tiempo: si algo es constante para esa unidad, su desviación es cero y desaparece. La otra es incluir una variable ficticia por unidad, es decir, permitir una constante distinta para cada una. Que ambas den el mismo resultado es de nuevo el teorema de Frisch-Waugh de la ficha 4.05: **controlar por la identidad de la unidad es residualizar respecto de su media**.",
            "**El coste de esta estrategia es tan importante como su virtud, y es donde falla la mayoría de los trabajos.** Al eliminar toda la variación entre unidades se tira también la información que interesaba en muchos casos: **no puede estimarse el efecto de nada que no varíe en el tiempo** —el género de una persona, el sistema legal de un país, la ubicación de una fábrica—, porque esas variables también desaparecen al restar medias. Y hay un problema más sutil: si a la variable explicativa le queda **poca variación temporal**, lo que queda es sobre todo error de medida, con lo que **el sesgo de atenuación se agrava** justo por haber eliminado el sesgo de heterogeneidad. Se cambia un problema por otro y no siempre por uno menor.",
            "**Los efectos aleatorios son la alternativa, y la elección entre ambos es un asunto de supuestos, no de ajuste.** Los efectos aleatorios tratan la heterogeneidad de cada unidad como una perturbación extraída de una distribución, y aprovechan tanto la variación temporal como la variación entre unidades; por eso son **más eficientes**. Pero exigen algo muy fuerte: que ese componente individual **no esté correlacionado con las variables explicativas**. Es decir, exigen justamente que no haya el problema que los efectos fijos resuelven. En la mayoría de las aplicaciones económicas ese supuesto es insostenible —quien tiene más capacidad estudia más, la empresa mejor gestionada invierte más— y por eso la práctica habitual es **usar efectos fijos salvo argumento en contra**.",
            "**El contraste de Hausman** formaliza la elección comparando ambos estimadores: si difieren más de lo que explicaría el azar, la ausencia de correlación se rechaza y hay que quedarse con efectos fijos. Conviene saber leerlo con prudencia: **no rechazar no demuestra que los efectos aleatorios sean válidos**, sobre todo con muestras pequeñas donde el contraste tiene poca potencia, que es exactamente el problema de la ficha 4.04.",
            "**Dos ampliaciones que en la práctica son casi obligatorias.** La primera son los **efectos fijos temporales**: además de una constante por unidad, una por periodo, para absorber los choques comunes a todos —una crisis, una reforma nacional, un cambio de precios internacionales—. Sin ellos, cualquier tendencia común se atribuye a la variable explicativa. La segunda es el **agrupamiento de los errores estándar por unidad**: las observaciones de una misma unidad están correlacionadas entre sí, y tratarlas como independientes infravalora los errores estándar de forma masiva, con el mismo argumento de muestra efectiva de la ficha 4.06. Es de los errores más caros y más frecuentes en la literatura aplicada.",
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
            { nom: "Modelo de panel", sub: "$\\alpha_i$ recoge todo lo constante de la unidad.", cols: ["$y_{it} = \\alpha_i + \\beta x_{it} + u_{it}$"] },
            { nom: "Estimador agrupado", sub: "Ignora $\\alpha_i$: sesgado si $\\alpha_i$ se relaciona con $x$.", cols: ["MCO sobre todas las observaciones"] },
            { nom: "Transformación intragrupo", sub: "$\\alpha_i$ desaparece por ser constante.", cols: ["$(y_{it} - \\bar y_i) = \\beta(x_{it} - \\bar x_i) + (u_{it} - \\bar u_i)$"] },
            { nom: "Equivalencia con ficticias", sub: "Frisch-Waugh otra vez.", cols: ["intragrupo ≡ una constante por unidad"] },
            { nom: "Estimador entre grupos", sub: "Usa solo las medias: todo el sesgo, ningún remedio.", cols: ["regresión de $\\bar y_i$ sobre $\\bar x_i$"] },
            { nom: "Efectos aleatorios", sub: "Más eficiente, pero exige el supuesto fuerte.", cols: ["requiere $\\mathrm{Cov}(\\alpha_i, x_{it}) = 0$"] },
            { nom: "Contraste de Hausman", sub: "No rechazar no valida: puede faltar potencia.", cols: ["$H = (\\hat\\beta_{\\mathrm{EF}} - \\hat\\beta_{\\mathrm{EA}})' V^{-1} (\\hat\\beta_{\\mathrm{EF}} - \\hat\\beta_{\\mathrm{EA}})$"] },
            { nom: "Efectos fijos dobles", sub: "Absorben también los choques comunes.", cols: ["$y_{it} = \\alpha_i + \\lambda_t + \\beta x_{it} + u_{it}$"] },
            { nom: "Límite del método", sub: "Lo constante desaparece con el sesgo.", cols: ["no identifica variables invariantes en el tiempo"] },
            { nom: "Errores agrupados", sub: "Omitirlo infravalora la incertidumbre masivamente.", cols: ["agrupar por unidad i"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: tres empresas y dos conclusiones opuestas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Tres empresas observadas durante tres años. La variable explicativa es el **gasto en formación por empleado** y la dependiente, la **productividad**, ambas en unidades convenientes. Los datos son estos:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Empresa", "Año 1", "Año 2", "Año 3", "Media de formación", "Media de productividad"],
          filas: [
            ["A — formación / productividad", "1 / 10", "2 / 12", "3 / 14", "2", "12"],
            ["B — formación / productividad", "4 / 6", "5 / 8", "6 / 10", "5", "8"],
            { celdas: ["C — formación / productividad", "7 / 2", "8 / 4", "9 / 6", "8", "4"], clase: "total" },
          ],
          nota: "Léase despacio antes de calcular nada. **Dentro de cada empresa**, la productividad sube dos unidades por cada unidad más de formación, sin excepción y en las tres. **Entre empresas**, en cambio, la que más forma es la que menos produce. Las dos afirmaciones son simultáneamente ciertas y describen los mismos nueve datos.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Formación", y: "Productividad" },
          dominio: { x: [0, 10], y: [0, 16] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [0, 4, 8, 12, 16],
          series: [
            {
              nombre: "Agrupada",
              color: "alerta",
              grosor: 2.4,
              trazo: "discontinuo",
              etiquetaEn: [10, 3],
              puntos: [[0, 13], [10, 3]],
            },
            { nombre: "A", color: "acento", grosor: 2.2, etiquetaEn: [3.5, 15], puntos: [[0.5, 9], [3.5, 15]] },
            { nombre: "B", color: "acento", grosor: 2.2, etiquetaEn: [6.5, 11], puntos: [[3.5, 5], [6.5, 11]] },
            { nombre: "C", color: "acento", grosor: 2.2, etiquetaEn: [9.5, 7], puntos: [[6.5, 1], [9.5, 7]] },
          ],
          puntos: [
            { x: 1, y: 10, guias: false }, { x: 2, y: 12, guias: false }, { x: 3, y: 14, guias: false },
            { x: 4, y: 6, guias: false }, { x: 5, y: 8, guias: false }, { x: 6, y: 10, guias: false },
            { x: 7, y: 2, guias: false }, { x: 8, y: 4, guias: false }, { x: 9, y: 6, guias: false },
          ],
          nota: "Las tres rectas cortas son las tres empresas, **todas con pendiente +2**. La recta larga discontinua es la que estima el modelo agrupado, con pendiente **−1**: al ignorar de qué empresa viene cada punto, la nube parece descender. Es la **paradoja de Simpson** de la ficha 1.08 en su versión de panel, y aquí tiene una explicación económica evidente: las empresas con menor productividad de partida son precisamente las que más invierten en formar a su gente. Esa característica —el nivel inicial— es constante para cada empresa y **desaparece en cuanto se compara a cada una consigo misma**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Estimador", "Qué variación usa", "Pendiente", "Lectura"],
          filas: [
            ["Agrupado (MCO)", "Toda, mezclada", "−1,00", "«Formar reduce la productividad»"],
            ["Entre grupos", "Solo las medias de empresa", "−1,33", "Todo el sesgo, sin ningún remedio"],
            { celdas: ["Intragrupo (efectos fijos)", "Solo la temporal, dentro de cada empresa", "+2,00", "«Formar aumenta la productividad»"], clase: "total" },
            ["Efectos fijos estimados", "$\\alpha_A = 8$ · $\\alpha_B = -2$ · $\\alpha_C = -12$", "—", "La heterogeneidad que causaba el sesgo"],
          ],
          nota: "Los tres números salen de los mismos nueve datos y **ninguno está mal calculado**. La diferencia está en qué comparación hace cada uno. El agrupado y el de entre grupos comparan empresas distintas, y por tanto arrastran todo lo que las distingue. El intragrupo compara cada empresa consigo misma, y por eso recupera el **+2** que está literalmente en los datos. Los efectos fijos estimados —8, −2 y −12— son la medida de esa heterogeneidad no observada: nadie ha tenido que saber qué la causa, basta con que sea **constante en el tiempo** para que la transformación la elimine.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Dos advertencias para no sacar la conclusión equivocada.** La primera: el resultado depende por completo de que lo que contamina sea **constante**. Si una empresa mejora su gestión al mismo tiempo que aumenta la formación, los efectos fijos no eliminan nada, porque esa variación también está en la dimensión temporal. La segunda: con solo tres periodos y una variable explicativa que se mueve poco, la transformación deja muy poca variación con la que estimar. En datos reales eso se traduce en **errores estándar grandes y un sesgo de atenuación agravado** si la variable se mide con error. **Efectos fijos no es un botón que arregle la endogeneidad**: es una estrategia con un supuesto explícito —heterogeneidad constante— y un coste explícito en precisión.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: qué añade el panel en la evaluación de políticas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La estructura de panel es hoy la base de la mayor parte de la evaluación seria de políticas públicas, y merece la pena ver cómo se articula con lo aprendido en la ficha 4.07, porque **diferencias en diferencias es literalmente un panel con efectos fijos dobles**.",
            "**El diseño básico.** Se observa a un conjunto de unidades —municipios, empresas, comunidades autónomas— antes y después de una política que solo afecta a algunas. Incluyendo una constante por unidad se absorbe todo lo que las distingue de forma permanente; incluyendo una por periodo se absorben los choques comunes a todas. Lo que queda como coeficiente de interés es la **diferencia en la evolución** del grupo tratado respecto del no tratado. El supuesto de tendencias paralelas es exactamente el que sustituye a la restricción de exclusión del instrumental.",
            "**El caso español mejor documentado es el de los microdatos administrativos laborales.** La combinación de la Muestra Continua de Vidas Laborales con registros fiscales permite seguir a las mismas personas durante décadas, lo que abre la puerta a preguntas que ninguna encuesta responde: qué le ocurre a la trayectoria de alguien que pierde el empleo en una recesión, cómo evoluciona el salario tras pasar de temporal a indefinido, qué efecto tiene una bonificación de cotizaciones sobre la contratación de un colectivo. En todos esos casos, **la persona actúa como su propio control**.",
            "**El ejemplo más ilustrativo de qué añade seguir a la misma unidad es el estudio del efecto de la maternidad sobre los ingresos.** Un corte transversal comparando madres y no madres no separa el efecto de tener hijos de las diferencias previas entre quienes los tienen y quienes no. Un panel permite comparar a cada persona con su propia trayectoria antes del nacimiento, y lo que aparece es una caída de ingresos que se concentra casi por entero en las madres, persiste durante años y no tiene análogo en los padres. Es una conclusión que **no depende de qué variables se controlen**, y por eso ha resistido mejor que las estimaciones basadas en brechas ajustadas de la ficha 4.05.",
            "**Los límites hay que decirlos con la misma claridad.** El panel elimina la heterogeneidad constante, no la que cambia: si una comunidad aprueba una política justo cuando su economía empezaba a mejorar, ningún efecto fijo lo arregla. Cuando las unidades adoptan la política en momentos distintos —lo habitual en España, con competencias autonómicas— la estimación estándar puede estar **sesgada por comparaciones implícitas entre tratados tempranos y tardíos**, un problema descubierto hace pocos años que ha obligado a revisar mucha literatura publicada. Y el efecto estimado sigue siendo **local a las unidades tratadas y al periodo observado**.",
            "**Lo que hay que exigir a un trabajo de panel, en concreto.** Que incluya efectos fijos de unidad y de tiempo y lo diga. Que **agrupe los errores estándar por unidad**, porque no hacerlo puede multiplicar los t por tres. Que muestre la evolución previa de tratados y no tratados para respaldar las tendencias paralelas. Que explicite qué variación identifica el efecto tras absorber los efectos fijos, porque a veces queda muy poca. Y que, si el tratamiento es escalonado, use los estimadores robustos a heterogeneidad de efectos y no la especificación clásica.",
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
            { t: "Estimar un modelo agrupado con datos de panel", d: "Ignorar la estructura mezcla la comparación entre unidades con la comparación dentro de cada una, y puede invertir el signo del efecto: en el ejemplo, de +2 a −1. Si hay heterogeneidad no observada correlacionada con la variable explicativa —la situación normal—, el estimador agrupado está sesgado y el panel existía precisamente para evitarlo." },
            { t: "Creer que los efectos fijos eliminan toda la endogeneidad", d: "Solo eliminan lo que es constante en el tiempo dentro de cada unidad. Si la gestión de la empresa mejora a la vez que aumenta la formación, o si una región reforma justo cuando su economía repunta, el sesgo permanece intacto. El supuesto es explícito y hay que defenderlo, no darlo por hecho." },
            { t: "Intentar estimar el efecto de una variable que no varía en el tiempo", d: "El género de una persona, el sistema legal de un país o la ubicación de una fábrica desaparecen en la transformación intragrupo igual que el efecto fijo, y su coeficiente no es identificable. Si esa es la pregunta, los efectos fijos no son la herramienta, por mucho que el panel esté disponible." },
            { t: "No agrupar los errores estándar por unidad", d: "Las observaciones de una misma unidad están correlacionadas, así que tratarlas como independientes cuenta información repetida como nueva. La infravaloración de los errores estándar puede ser de un factor tres o más, y es uno de los errores más frecuentes y más caros de la literatura aplicada." },
            { t: "Elegir efectos aleatorios porque salen más significativos", d: "Son más eficientes precisamente porque usan también la variación entre unidades, que es la contaminada. Su supuesto —que la heterogeneidad individual no se correlaciona con las explicativas— es justamente el que suele fallar en economía. La elección es de supuestos, no de resultados." },
            { t: "Leer un Hausman que no rechaza como prueba de validez", d: "No rechazar puede significar que el supuesto se cumple o que el contraste no tiene potencia para detectar la diferencia, algo habitual con pocas unidades. Es el mismo problema de la ficha 4.04: la ausencia de rechazo no es evidencia a favor de la nula sin un cálculo de potencia." },
            { t: "Olvidar los efectos fijos temporales", d: "Sin una constante por periodo, cualquier tendencia común a todas las unidades —una crisis, una reforma estatal, un cambio de precios internacionales— se atribuye a la variable explicativa si esta también tiene tendencia. Es una fuente de correlación espuria evitable con una línea de código." },
            { t: "Aplicar la especificación clásica con tratamientos escalonados", d: "Cuando las unidades se tratan en momentos distintos y los efectos son heterogéneos, el estimador convencional hace comparaciones implícitas entre unidades tratadas antes y después, y puede dar incluso el signo contrario. Hay estimadores robustos a este problema, y su descubrimiento reciente ha obligado a revisar bastante literatura." },
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
            "La contabilidad nacional produce paneles casi sin quererlo, y buena parte de la investigación sobre economía española explota esa estructura.",
          ],
          lista: [
            "La **contabilidad regional** es un panel de diecisiete comunidades por muchos años, y las **cuentas por ramas de actividad** otro de sectores por años. Es el material con el que se estudian convergencia regional, especialización productiva —la ficha 10.01— y diferencias de productividad, y su uso correcto exige efectos fijos de región o rama y de año, más errores agrupados.",
            "Las **cuentas de los sectores institucionales del SEC 2010**, en la ficha 10.06, siguen a hogares, empresas, administraciones y resto del mundo a lo largo del tiempo: un panel de cuatro unidades con muchos periodos, donde la estructura es útil pero el número de unidades es demasiado pequeño para agrupar errores de forma fiable.",
            "El **coste laboral unitario de la ficha 10.09** se analiza casi siempre en panel de países o de sectores, precisamente porque los niveles no son comparables entre unidades —dependen de convenciones contables y de estructura productiva— pero **las variaciones sí lo son**. Es un caso donde los efectos fijos no son una corrección técnica sino la única forma sensata de comparar.",
            "Las **comparaciones internacionales de crecimiento** con paneles de países han sido el terreno más abonado a resultados frágiles: pocas unidades, mucha heterogeneidad no constante, tratamiento endógeno y errores no agrupados. Buena parte de la literatura sobre determinantes del crecimiento de los años noventa no ha sobrevivido a un tratamiento riguroso de panel.",
            "Y las **revisiones de la ficha 10.10** afectan a los paneles de forma peculiar: una revisión metodológica cambia el nivel de toda la serie de una unidad, algo que los efectos fijos absorben sin problema, pero una revisión que altere la evolución sí contamina la estimación. Saber cuál de las dos ha ocurrido es parte del trabajo previo.",
          ],
          cierre:
            "El resumen práctico es que la contabilidad nacional española ofrece **buenos paneles con pocas unidades**. Eso permite eliminar la heterogeneidad estructural, que es mucho, pero deja errores estándar poco fiables y contrastes de baja potencia. La evidencia más sólida sobre España sigue viniendo de los microdatos administrativos, donde las unidades se cuentan por millones.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Los mismos nueve datos dan −1 y +2. ¿Cuál es el efecto de la formación?", a: "El +2, si la pregunta es qué le ocurre a una empresa cuando aumenta su formación. El −1 sale de comparar empresas distintas, y esas empresas difieren en un nivel de productividad de partida que además determina cuánta formación hacen. El intragrupo compara cada empresa consigo misma y recupera la relación que está literalmente en los datos." },
            { q: "¿Qué son exactamente los efectos fijos de 8, −2 y −12?", a: "La heterogeneidad no observada de cada empresa: su nivel de productividad al margen de la formación. Lo notable es que no ha hecho falta saber qué la causa —gestión, sector, capital instalado— ni medirla. Basta con que sea constante en el tiempo para que la transformación intragrupo la elimine junto con el sesgo que provocaba." },
            { q: "¿Por qué no puede estimarse con efectos fijos el efecto del sistema legal de un país?", a: "Porque no varía en el tiempo dentro de cada país, y la transformación intragrupo lo elimina exactamente igual que elimina el efecto fijo. Su coeficiente no es identificable. Si esa es la pregunta hay que usar otra estrategia, aunque el panel esté disponible y sea tentador aplicarlo." },
            { q: "¿Cuándo son preferibles los efectos aleatorios?", a: "Cuando es creíble que la heterogeneidad individual no está correlacionada con las variables explicativas, porque entonces son más eficientes al aprovechar también la variación entre unidades. En economía ese supuesto suele fallar —quien tiene más capacidad estudia más, la empresa mejor gestionada invierte más— y por eso la práctica es usar efectos fijos salvo argumento en contra." },
            { q: "¿Qué pasa si no se agrupan los errores estándar por unidad?", a: "Se cuentan como información nueva observaciones que en buena medida repiten la anterior, porque los datos de una misma unidad están correlacionados. Los errores estándar quedan infravalorados, a veces por un factor tres, y aparecen como significativos coeficientes que no lo son. Es el argumento de muestra efectiva de la ficha 4.06." },
            { q: "¿Por qué el estudio del efecto de la maternidad sobre los ingresos es más convincente en panel?", a: "Porque compara a cada persona con su propia trayectoria antes del nacimiento, en lugar de comparar madres con no madres, que difieren en muchas cosas anteriores. La conclusión no depende entonces de qué variables se controlen, que es justo la debilidad de las brechas ajustadas de la ficha 4.05." },
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
              q: "¿Qué elimina exactamente un estimador de efectos fijos?",
              opciones: [
                "Toda la endogeneidad del modelo",
                "Solo la heterogeneidad no observada que sea constante en el tiempo dentro de cada unidad",
                "El sesgo de selección de la muestra",
                "La correlación entre observaciones de la misma unidad",
              ],
              correcta: 1,
              porque: [
                "Es la sobrevaloración más frecuente del método. Si la gestión de una empresa mejora a la vez que aumenta su formación, los efectos fijos no lo tocan.",
                "Compara cada unidad consigo misma, así que todo lo que no varía —cultura de empresa, capacidad individual, geografía— desaparece. Lo que varía a la vez que la explicativa sigue contaminando.",
                "La selección de qué unidades están en el panel es un problema distinto y los efectos fijos no lo resuelven.",
                "Esa correlación exige agrupar los errores estándar por unidad, que es una corrección aparte y también necesaria.",
              ],
            },
            {
              q: "Se quiere estimar con efectos fijos el efecto del sistema legal de un país sobre su crecimiento. ¿Qué ocurre?",
              opciones: [
                "Se obtiene una estimación más limpia que sin efectos fijos",
                "No se puede: una variable que no varía en el tiempo desaparece con la transformación intragrupo",
                "Hay que usar efectos aleatorios y contrastar con Hausman",
                "El coeficiente sale, pero con un error estándar muy grande",
              ],
              correcta: 1,
              porque: [
                "No hay estimación posible: la variable se anula igual que el efecto individual que se quería eliminar.",
                "La transformación resta a cada observación la media de su unidad, y una variable constante dentro de la unidad se convierte en cero. Es el precio de eliminar la heterogeneidad fija.",
                "Efectos aleatorios sí permitiría estimarla, pero al coste de suponer que la heterogeneidad individual no se correlaciona con las explicativas, que es justo lo dudoso.",
                "No sale con error grande: no sale en absoluto.",
              ],
            },
            {
              q: "Un contraste de Hausman no rechaza. ¿Se pueden usar efectos aleatorios?",
              opciones: [
                "Sí: el contraste acredita que su supuesto se cumple",
                "Con cautela: no rechazar puede significar que el supuesto se cumple o que el contraste no tiene potencia",
                "No: Hausman solo sirve para elegir entre modelos anidados",
                "Sí, y además son más eficientes, así que siempre son preferibles",
              ],
              correcta: 1,
              porque: [
                "Ningún contraste acredita una hipótesis nula: como mucho no la rechaza, que es una afirmación mucho más débil.",
                "Con pocas unidades la falta de potencia es habitual, y entonces el no rechazo no informa. Conviene sostener la elección con el argumento sustantivo, no solo con el contraste.",
                "Hausman sí compara estos dos estimadores; el problema es cómo se interpreta su resultado.",
                "Son más eficientes precisamente porque usan también la variación entre unidades, que es la contaminada. La eficiencia sin insesgadez no vale de nada.",
              ],
            },
            {
              q: "Un panel de empresas cubre 2007-2012 sin efectos fijos temporales. ¿Qué se arriesga?",
              opciones: [
                "Nada, si los efectos fijos individuales están incluidos",
                "Que la crisis, común a todas las unidades, se atribuya a la variable explicativa",
                "Perder eficiencia por sobreparametrizar",
                "Que los errores estándar queden infravalorados",
              ],
              correcta: 1,
              porque: [
                "Los efectos individuales controlan lo que distingue a cada empresa, no lo que les pasa a todas a la vez.",
                "Sin una constante por periodo, cualquier tendencia común —una recesión, una reforma estatal, un cambio de precios internacionales— acaba dentro del coeficiente de interés.",
                "Añadir constantes temporales cuesta pocos grados de libertad y evita un sesgo grande: el intercambio es claramente favorable.",
                "La infravaloración de errores estándar viene de no agrupar por unidad, que es otro problema.",
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
            { ref: "Wooldridge, Econometric Analysis of Cross Section and Panel Data", nota: "el tratado de referencia; denso, pero la parte de efectos fijos frente a aleatorios no tiene sustituto." },
            { ref: "Angrist y Pischke, Mostly Harmless Econometrics", nota: "el capítulo 5 presenta panel y diferencias en diferencias como la misma idea, que es la forma más útil de entenderlo." },
            { ref: "Kleven, Landais y Søgaard, «Children and Gender Inequality», 2019", nota: "el estudio de trayectorias en torno al nacimiento; ejemplo modélico de qué añade seguir a la misma unidad." },
            { ref: "Goodman-Bacon, «Difference-in-Differences with Variation in Treatment Timing», 2021", nota: "por qué la especificación clásica falla con tratamientos escalonados; ha obligado a revisar mucha literatura reciente." },
            { ref: "Muestra Continua de Vidas Laborales, Seguridad Social", nota: "el panel administrativo español; conviene ver su estructura para entender qué preguntas permite responder y cuáles no." },
          ],
        },
      ],
    },
  ],
};
