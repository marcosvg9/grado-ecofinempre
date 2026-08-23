/* Ficha 3.09 — Crecimiento economico: Solow, capital humano y productividad. */

export default {
  codigo: "3.09",
  titulo: "Crecimiento económico: Solow, capital humano y productividad",
  nivel: 3,
  bloque: "Macroeconomía",
  tiempo: "5 h",
  nucleo:
    "El nivel de vida a largo plazo lo decide la productividad total de los factores, no la acumulación. Acumular capital eleva el nivel y no la tasa de crecimiento, y esa distinción entre nivel y tasa es la que separa una política que mejora el país una vez de otra que lo mejora indefinidamente.",
  requiere: "3.06 Oferta y demanda agregadas · 2.04 Tecnología y producción",
  abre: "10.01 Estructura productiva española · 10.09 Coste laboral unitario · 9.10 Innovación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo lo anterior de este bloque trataba del corto plazo: fluctuaciones alrededor de una capacidad productiva dada. Esta ficha se ocupa de **qué determina esa capacidad y por qué crece**, y conviene empezar por la magnitud del asunto. Diferencias aparentemente menores en la tasa de crecimiento producen divergencias enormes en pocas décadas, porque el crecimiento es **acumulativo**: un país que crece al 3 % duplica su nivel de vida en veinticuatro años y otro que crece al 1 %, en setenta. Nada de lo que estudia la macroeconomía de corto plazo tiene consecuencias comparables sobre el bienestar.",
            "El **modelo de Solow** es el punto de partida obligado y su estructura es sencilla. La producción depende del **capital**, del **trabajo** y de un factor de eficiencia que representa la tecnología. El capital se acumula con la parte de la producción que se ahorra y se deprecia a una tasa constante. Y la pieza decisiva es que el capital tiene **productividad marginal decreciente**, en el sentido de la ficha 1.05: cada máquina adicional aporta menos que la anterior cuando el número de trabajadores no cambia.",
            "De ese rendimiento decreciente sale el resultado central. Al acumular capital, la inversión —proporcional a una producción que crece cada vez más despacio— acaba igualando a lo que hace falta para reponer la depreciación y dotar a los nuevos trabajadores. En ese punto, el **estado estacionario**, el capital por trabajador deja de crecer. **Una economía que solo acumula capital termina por dejar de crecer en términos per cápita**, y ese es el mensaje contraintuitivo del modelo: el ahorro y la inversión no son un motor perpetuo.",
            "De ahí las dos implicaciones que hay que retener. La primera: **una tasa de ahorro más alta eleva el nivel de renta de largo plazo pero no su tasa de crecimiento**. Duplicar el ahorro deja al país permanentemente más rico y creciendo exactamente igual que antes. Es un **efecto nivel**, no un efecto tasa, y confundirlos es el error más caro de esta materia. La segunda: **la única fuente de crecimiento sostenido del producto por trabajador es el progreso tecnológico**, que en el modelo llega desde fuera. Solow explica por qué el crecimiento a largo plazo no puede venir de acumular, y **no explica de dónde viene lo que sí lo produce**: por eso su factor de eficiencia se conoce como el residuo, es decir, lo que no sabemos medir directamente.",
            "El modelo predice además **convergencia condicional**: los países más pobres crecen más deprisa **si comparten los mismos parámetros** —ahorro, demografía, tecnología, instituciones—, porque parten con menos capital y su rendimiento marginal es mayor. La evidencia respalda la versión condicional y **no la absoluta**: los países pobres no convergen automáticamente con los ricos, sino cada uno hacia su propio estado estacionario. Por qué esos estados estacionarios difieren tanto es justamente la pregunta que Solow deja abierta.",
            "Las respuestas posteriores van en dos direcciones. El **capital humano** amplía el concepto de capital para incluir la educación y la experiencia de la ficha 2.09, lo que explica una parte de las diferencias y aplaza —sin eliminar— el problema de los rendimientos decrecientes. Y la **teoría del crecimiento endógeno** trata el progreso técnico como resultado de decisiones de inversión en investigación, lo que devuelve el crecimiento al interior del modelo y conecta con la apropiación de la innovación de la ficha 9.10. Pero la línea que más ha rendido empíricamente es la **institucional**: derechos de propiedad, cumplimiento de contratos, calidad regulatoria y estabilidad determinan si acumular capital y generar ideas resulta rentable. **Las instituciones no aparecen en la función de producción y son probablemente lo que más explica el residuo.**",
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
            { nom: "Función de producción", sub: "Rendimientos constantes a escala, decrecientes en cada factor.", cols: ["Y = A · K^α · L^(1−α)"] },
            { nom: "En términos por trabajador", sub: "Toda la dinámica cabe en una variable.", cols: ["y = A · k^α"] },
            { nom: "Acumulación de capital", sub: "Ahorro menos reposición.", cols: ["Δk = s·y − (δ + n + g)·k"] },
            { nom: "Estado estacionario", sub: "El capital por trabajador deja de crecer.", cols: ["s·y = (δ + n + g)·k"] },
            { nom: "Capital de equilibrio", sub: "Crece con el ahorro y cae con depreciación y demografía.", cols: ["k* = [s / (δ + n + g)]^(1/(1−α))"] },
            { nom: "Efecto nivel frente a efecto tasa", sub: "La distinción central de la ficha.", cols: ["↑s ⟹ ↑nivel de y*, no ↑ tasa de crecimiento"] },
            { nom: "Crecimiento sostenido", sub: "Solo el progreso técnico lo mantiene.", cols: ["g_y = g_A a largo plazo"] },
            { nom: "Regla de oro", sub: "Maximiza el consumo, no la producción.", cols: ["s = α"] },
            { nom: "Contabilidad del crecimiento", sub: "La PTF es un residuo: lo no explicado.", cols: ["g_Y = g_A + α·g_K + (1−α)·g_L"] },
            { nom: "Convergencia condicional", sub: "Cada país hacia su propio estado estacionario.", cols: ["Menor k ⟹ mayor crecimiento, igual s, n, δ, A"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el estado estacionario y el residuo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea una economía con **α = 1/3**, tasa de ahorro **s = 0,25**, depreciación **δ = 5 %**, crecimiento de la población **n = 1 %** y progreso técnico **g = 2 %**. El capital por trabajador de equilibrio es k* = (0,25 / 0,08)^1,5 = **5,52**, y la producción por trabajador, y* = k*^(1/3) = **1,77**.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Capital por trabajador", y: "Producción por trabajador" },
          dominio: { x: [0, 12], y: [0, 2.5] },
          marcasX: [0, 2, 4, 5.52, 8, 10, 12],
          marcasY: [0, 0.5, 1, 1.5, 2],
          series: [
            {
              nombre: "Producción",
              color: "tinta",
              etiquetaEn: [10.5, 2.19],
              puntos: [[0, 0], [1, 1], [2, 1.26], [3, 1.442], [4, 1.587], [5, 1.71], [6, 1.817], [7, 1.913], [8, 2], [9, 2.08], [10, 2.154], [11, 2.224], [12, 2.289]],
            },
            {
              nombre: "Inversión = s·y",
              color: "acento",
              etiquetaEn: [10.5, 0.49],
              puntos: [[0, 0], [1, 0.25], [2, 0.315], [3, 0.361], [4, 0.397], [5, 0.427], [6, 0.454], [7, 0.478], [8, 0.5], [9, 0.52], [10, 0.539], [11, 0.556], [12, 0.572]],
            },
            {
              nombre: "Reposición = (δ+n+g)·k",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [10.2, 0.87],
              puntos: [[0, 0], [12, 0.96]],
            },
          ],
          puntos: [{ x: 5.52, y: 0.442, etiqueta: "k* = 5,52" }],
          nota: "El diagrama entero de Solow. La curva de **inversión** es cóncava porque la producción tiene rendimientos decrecientes; la recta de **reposición** es lineal. A la izquierda del cruce la inversión supera a la reposición y el capital crece; a la derecha ocurre lo contrario. **En k* = 5,52 ambas se igualan y el capital deja de crecer**, no porque alguien lo decida sino porque la curva y la recta se cortan. Y la clave está en la forma: **una curva cóncava y una recta se cortan siempre**, así que el estancamiento del capital por trabajador es inevitable por pura geometría.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Capital k*", "Producción y*", "Efecto sobre el crecimiento a largo plazo"],
          filas: [
            ["Tasa de ahorro del 25 %", "5,52", "1,77", "g = 2 %, el del progreso técnico"],
            { celdas: ["Tasa de ahorro del 50 %", "15,63", "2,50", "g = 2 %, exactamente el mismo"], clase: "total" },
          ],
          nota: "**Duplicar el ahorro eleva la renta por trabajador un 41 % y no cambia la tasa de crecimiento ni una décima.** Ese es el resultado que hay que retener de toda la ficha. Es un efecto nivel: el país se vuelve permanentemente más rico y sigue creciendo al 2 %, que es lo que crece la tecnología. Durante la transición de un estado estacionario al otro sí se crece más deprisa, y esa transición puede durar décadas, lo que explica que la distinción se confunda tan a menudo en la práctica.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y la contabilidad del crecimiento, que es la herramienta aplicada.** Supongamos que en un periodo la producción creció un **3 %**, el capital un **4 %** y el empleo un **1 %**, con α = 1/3. La aportación del capital es un tercio del 4 %, es decir 1,33 puntos; la del trabajo, dos tercios del 1 %, es decir 0,67 puntos. Lo que queda, **1,0 punto, es la productividad total de los factores**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Fuente del crecimiento", "Cálculo", "Puntos", "Peso"],
          filas: [
            ["Acumulación de capital", "(1/3) × 4 %", "1,33", "44 %"],
            ["Aumento del empleo", "(2/3) × 1 %", "0,67", "22 %"],
            { celdas: ["Productividad total de los factores", "Residuo", "1,00", "33 %"], clase: "total" },
          ],
          nota: "Conviene ser honesto sobre qué es esa última fila: **es lo que sobra tras descontar lo que sabemos medir**. Dentro caben el progreso tecnológico genuino, las mejoras de organización, la calidad de las instituciones, la reasignación de recursos hacia empresas más productivas y también **todos los errores de medición** de los otros dos factores. Llamarlo productividad total de los factores le da un aire de magnitud observada que no tiene; llamarlo **residuo de Solow**, como se hace a veces, es más exacto y más prudente.",
        },
      ],
    },
    {
      titulo: "Caso práctico: crecer sin productividad",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía puede crecer con fuerza durante años y estar haciéndolo de una forma que el modelo de esta ficha identifica como insostenible. Distinguir un crecimiento del otro es probablemente el uso más valioso de la contabilidad del crecimiento, y explica por qué dos expansiones con cifras parecidas de PIB pueden dejar situaciones completamente distintas.",
            "**El patrón es reconocible.** Un largo periodo de expansión impulsado por acumulación de capital —sobre todo en construcción— y por incorporación masiva de trabajadores, con una productividad total de los factores plana o incluso negativa. El PIB crece deprisa, el empleo también, y sin embargo **el residuo no aporta nada**. Según el modelo, ese crecimiento tiene fecha de caducidad: los rendimientos decrecientes del capital garantizan que la aportación de cada unidad adicional sea menor, y la incorporación de trabajadores no puede prolongarse indefinidamente.",
            "**Hay además un matiz de composición que agrava el diagnóstico.** Si el capital se acumula en sectores de productividad relativamente baja, la productividad media del conjunto puede caer **aunque no empeore ninguna empresa**: basta con que crezca el peso de las actividades menos productivas. Es un efecto de composición puro, y su reverso es igual de importante: parte de la mejora que se observa después puede deberse simplemente a que esos sectores se contraen. **Ni la caída ni la recuperación posteriores significan lo que parecen si no se descompone entre efecto intrasectorial y efecto composición.**",
            "**La reasignación es, de hecho, una fuente de productividad por sí misma.** En cualquier economía conviven empresas muy productivas y muy poco productivas dentro del mismo sector, y una parte importante del crecimiento del residuo procede de que los recursos se desplacen de las segundas a las primeras. Lo que impide ese desplazamiento —barreras de entrada y salida, financiación que sostiene empresas inviables, regulación que penaliza crecer de tamaño— **reduce la productividad agregada sin que ninguna empresa individual haga nada mal**. Es un mecanismo que la función de producción agregada no muestra.",
            "**Y de ahí una conclusión de política que ordena bastante el debate.** Si el problema es acumulación insuficiente, la respuesta es ahorro e inversión; si el problema es el residuo, la respuesta está en otro sitio: investigación, capital humano, competencia, calidad institucional, tamaño empresarial, y sobre todo en **quitar los obstáculos a que los recursos se muevan hacia donde rinden más**. Confundir ambos diagnósticos lleva a políticas que elevan el nivel una vez y no cambian la trayectoria, que es exactamente la diferencia entre efecto nivel y efecto tasa del ejemplo numérico.",
            "**La cautela final es sobre el propio instrumento.** La contabilidad del crecimiento **no explica nada por sí misma**: descompone una identidad y llama residuo a lo que no encaja. Atribuir ese residuo a la tecnología es una interpretación, no un hallazgo, y depende además de supuestos discutibles sobre la elasticidad del capital y sobre cómo medir la calidad del trabajo y del propio capital. Es un buen ejemplo de la advertencia de la ficha 1.08: **la aritmética organiza la información y la explicación hay que traerla de fuera**.",
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
            { t: "Confundir efecto nivel con efecto tasa", d: "Duplicar la tasa de ahorro eleva la renta por trabajador un 41 % en el ejemplo y deja el crecimiento de largo plazo exactamente igual. Es el error más caro de esta materia, y se produce porque la transición entre estados estacionarios dura décadas y parece un cambio de tendencia." },
            { t: "Creer que acumular capital genera crecimiento indefinido", d: "El capital tiene rendimientos decrecientes, así que la curva de inversión y la recta de reposición acaban cortándose. En ese punto el capital por trabajador deja de crecer. Solo el progreso técnico sostiene el crecimiento del producto por trabajador a largo plazo." },
            { t: "Tratar la productividad total de los factores como una magnitud observada", d: "Es un residuo: lo que queda tras descontar las aportaciones medidas del capital y el trabajo. Dentro caben la tecnología, la organización, las instituciones, la reasignación de recursos y también todos los errores de medición de los otros factores." },
            { t: "Esperar convergencia automática de los países pobres", d: "El modelo predice convergencia condicional: cada país hacia su propio estado estacionario, que depende de su ahorro, demografía, tecnología e instituciones. La evidencia respalda esa versión y no la absoluta, y por qué difieren tanto esos estados es la pregunta que Solow deja abierta." },
            { t: "Confundir la regla de oro con maximizar la producción", d: "La regla de oro maximiza el consumo por trabajador en el estado estacionario, no la producción. Ahorrar más de lo que indica eleva el producto y reduce el consumo disponible, lo que carece de sentido: acumular capital no es un fin en sí mismo." },
            { t: "Interpretar una caída de la productividad media como empeoramiento de las empresas", d: "Puede deberse solo a la composición: si crece el peso de sectores menos productivos, la media cae sin que ninguna empresa haya empeorado. Descomponer entre efecto intrasectorial y de composición es imprescindible antes de sacar conclusiones." },
            { t: "Olvidar la reasignación como fuente de productividad", d: "Buena parte del crecimiento del residuo procede de que los recursos se desplacen de empresas poco productivas a otras más productivas dentro del mismo sector. Los obstáculos a ese desplazamiento reducen la productividad agregada sin que ninguna empresa individual haga nada mal." },
            { t: "Usar la contabilidad del crecimiento como si explicara", d: "Descompone una identidad y llama residuo a lo no explicado. Atribuirlo a la tecnología es una interpretación que depende de supuestos sobre la elasticidad del capital y sobre la medición de la calidad de los factores, no un resultado que se deduzca del cálculo." },
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
            "Casi todos los ingredientes del modelo se miden con dificultad, y conocer esas dificultades es lo que separa citar una cifra de productividad de entenderla.",
          ],
          lista: [
            "El **stock de capital** no se observa: se estima por el **método del inventario permanente**, acumulando inversiones pasadas y descontando depreciación con hipótesis sobre vidas útiles. Es una construcción, no una medición, y su nivel condiciona directamente el residuo calculado.",
            "El **insumo de trabajo** debería medirse en horas efectivas y ajustado por cualificación, no en número de ocupados. Usar personas en lugar de horas mezcla cambios de jornada con cambios de empleo, y no ajustar por capital humano traslada al residuo lo que en realidad es mejora educativa.",
            "La **elasticidad α** suele aproximarse por la participación de las rentas del capital en el valor añadido, lo que supone competencia perfecta y remuneración de los factores según su productividad marginal. Los problemas de la ficha 2.09 con la renta mixta afectan directamente a ese cálculo.",
            "La **PTF** que publican los organismos estadísticos y de investigación es por tanto **un residuo de residuos**, sensible a los tres supuestos anteriores. Las revisiones metodológicas —como capitalizar la investigación y el desarrollo, que el SEC 2010 trata como inversión y no como gasto corriente— cambian el reparto entre capital y residuo.",
            "Y la **productividad por hora** frente a la **productividad por ocupado** dan lecturas distintas cuando cambia la jornada media o el peso del empleo a tiempo parcial. Para comparaciones internacionales, la magnitud pertinente es casi siempre la primera, y es la que enlaza con el coste laboral unitario de la ficha 10.09.",
          ],
          cierre:
            "El punto que más rendimiento da es el cuarto: la PTF es la magnitud macroeconómica más citada y menos observada. Cualquier afirmación tajante sobre ella arrastra tres capas de supuestos que conviene conocer antes de discutir.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el capital por trabajador deja de crecer en el modelo de Solow?", a: "Porque la inversión es proporcional a una producción con rendimientos decrecientes —una curva cóncava— mientras que la reposición es proporcional al capital —una recta—. Una curva cóncava y una recta acaban cortándose siempre, y en ese punto la acumulación neta es cero." },
            { q: "Un país duplica su tasa de ahorro. ¿Crece más deprisa a largo plazo?", a: "No. Su renta por trabajador sube un 41 % en el ejemplo, pero la tasa de crecimiento de largo plazo sigue siendo la del progreso técnico, el 2 %. Es un efecto nivel: durante la transición sí se crece más, y esa transición puede durar décadas, lo que induce a confundirlo con un efecto tasa." },
            { q: "El PIB crece un 3 %, el capital un 4 % y el empleo un 1 %, con α = 1/3. ¿Cuánto aporta la PTF?", a: "Un punto porcentual, un tercio del crecimiento. El capital aporta (1/3)×4 = 1,33 puntos y el trabajo (2/3)×1 = 0,67. El resto es residuo, y conviene recordar que ahí dentro caben también los errores de medición de los otros dos factores." },
            { q: "¿Predice el modelo que los países pobres alcanzarán a los ricos?", a: "Solo condicionalmente: si comparten ahorro, demografía, tecnología e instituciones, el más pobre crece más deprisa por tener mayor rendimiento marginal del capital. Sin esos parámetros comunes, cada país converge hacia su propio estado estacionario, y la evidencia respalda esta versión." },
            { q: "¿Por qué puede caer la productividad media sin que empeore ninguna empresa?", a: "Por composición: si crece el peso de sectores o empresas menos productivos, la media agregada baja aunque cada unidad mantenga su nivel. Por eso hay que descomponer entre efecto intrasectorial y efecto composición antes de interpretar cualquier variación de la productividad agregada." },
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
            { ref: "Jones, Introducción al crecimiento económico", nota: "el manual más claro sobre Solow y crecimiento endógeno, con la aritmética del ejemplo desarrollada." },
            { ref: "Solow, «A Contribution to the Theory of Economic Growth»", nota: "el artículo de 1956; veinte páginas que fundaron toda la literatura posterior." },
            { ref: "Acemoglu y Robinson, Por qué fracasan los países", nota: "la línea institucional en versión divulgativa: por qué los estados estacionarios difieren tanto entre países." },
            { ref: "Banco de España e INE, análisis de productividad y contabilidad del crecimiento", nota: "las estimaciones para España y su metodología; imprescindibles antes de discutir el caso práctico." },
          ],
        },
      ],
    },
  ],
};
