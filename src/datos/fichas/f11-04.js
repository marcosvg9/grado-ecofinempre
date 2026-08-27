/* Ficha 11.04 — La Gran Depresión: causas, transmisión y respuestas. */

export default {
  codigo: "11.04",
  titulo: "La Gran Depresión: causas, transmisión y respuestas",
  nivel: 2,
  bloque: "Historia económica",
  tiempo: "5 h",
  nucleo:
    "No fue un accidente bursátil sino un colapso monetario y bancario que un banco central pasivo dejó ocurrir y que el compromiso con el oro impidió combatir. De ella salieron la macroeconomía moderna, la contabilidad nacional y la idea de que un gobierno responde del ciclo.",
  requiere: "11.03 Guerras e hiperinflaciones · 3.04 Modelo keynesiano · 3.08 Política monetaria",
  abre: "11.05 Bretton Woods · 11.08 Crisis financieras · 3.06 Oferta y demanda agregadas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La Gran Depresión es el acontecimiento fundacional de la macroeconomía tal como se estudia hoy, y conviene empezar despejando la imagen popular: **no fue causada por el crac de octubre de 1929**. Las caídas bursátiles son frecuentes y casi nunca producen depresiones. Lo que convirtió una recesión seria en una catástrofe de una década fue lo que ocurrió **después**: una contracción monetaria brutal, una cadena de pánicos bancarios y un marco internacional que impedía responder a ambas cosas.",
            "**Las magnitudes hay que tenerlas presentes porque son difíciles de imaginar.** En Estados Unidos, entre 1929 y 1933, la producción real cayó alrededor de un **26 %**, los precios cayeron cerca de un **25 %** —de modo que el producto nominal se desplomó en torno a un 45 %—, la tasa de paro alcanzó aproximadamente el **25 %**, y unos **nueve mil bancos** quebraron. No se trata de una recesión profunda: es un orden de magnitud distinto de cualquier cosa vivida antes o después.",
            "**La explicación monetaria es la que mejor ha resistido.** Friedman y Schwartz mostraron que la oferta monetaria estadounidense cayó alrededor de un tercio entre 1929 y 1933, y que esa contracción no fue inevitable sino **el resultado de la pasividad de la Reserva Federal**. El mecanismo es el que la ficha 3.08 formaliza: los depositantes asustados retiran efectivo, con lo que sube la proporción de dinero fuera de los bancos; los bancos supervivientes acumulan reservas por precaución, con lo que sube el coeficiente de reservas; y **el multiplicador monetario se hunde**. Sin una expansión compensatoria de la base, la masa monetaria se contrae aunque nadie lo decida.",
            "**La deflación es lo que convierte la contracción en espiral, y su mecanismo merece atención.** Irving Fisher lo llamó **deflación por deuda**: las deudas están fijadas en términos nominales, así que cuando los precios caen un 25 % el valor real de lo que se debe aumenta en la misma proporción. Los deudores intentan vender activos para pagar, esas ventas forzadas hunden más los precios, y la carga real de la deuda vuelve a subir. **Cuanto más se esfuerzan todos por pagar, más deben en términos reales.** Es la trampa que explica por qué la caída no se detenía sola y por qué los bajos tipos de interés nominales no ayudaban: el tipo real era altísimo.",
            "**El patrón oro es la pieza que internacionaliza el desastre.** Un país comprometido con la convertibilidad no puede expandir su oferta monetaria sin perder reservas, y si sube el paro tampoco puede devaluar. La política monetaria estaba, literalmente, atada — Eichengreen habla de **esposas doradas**. De ahí sale la evidencia más contundente de todo el episodio: **los países que abandonaron el oro antes se recuperaron antes**, y en el mismo orden. Gran Bretaña salió en 1931, Estados Unidos en 1933, Francia y el bloque del oro aguantaron hasta 1936 y fueron los últimos en recuperarse. La correlación entre fecha de salida y fecha de recuperación es una de las regularidades más limpias de la historia económica.",
            "**Y una advertencia sobre lo que no fue.** Ni el crac bursátil ni el arancel Smoot-Hawley de 1930 explican la magnitud del episodio. El arancel agravó la contracción del comercio mundial y desencadenó represalias, pero el comercio exterior era una fracción pequeña de la economía estadounidense de entonces. Del mismo modo, es un error atribuir la recuperación exclusivamente al gasto público del New Deal: **el estímulo fiscal fue modesto** en relación con la brecha de producción, y hubo incluso una recaída en 1937-38 cuando se retiró prematuramente el apoyo monetario y fiscal. Lo que más pesó en la recuperación fue **abandonar el oro y devaluar**, es decir, recuperar la capacidad de expandir la cantidad de dinero.",
            "**Lo que salió de aquí es tan importante como lo que ocurrió.** De la Depresión nacen la *Teoría general* de Keynes y con ella la macroeconomía como disciplina; la idea de que el gobierno responde del nivel de empleo; el **seguro de depósitos** y la separación entre banca comercial y de inversión; el diseño de Bretton Woods de la ficha siguiente; y —esto interesa especialmente al plan— **la contabilidad nacional**, porque en 1929 nadie sabía cuánto había caído la producción por la sencilla razón de que no existía ninguna cifra de producción nacional.",
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
            { nom: "Multiplicador monetario", sub: "c = efectivo/depósitos · r = reservas/depósitos.", cols: ["$m = \\dfrac{1+c}{c+r}$"] },
            { nom: "Oferta monetaria", sub: "La base no cayó; el multiplicador sí.", cols: ["$M = m \\times$ Base monetaria"] },
            { nom: "Pánico bancario", sub: "Sube c y sube r a la vez: m se hunde.", cols: ["↑$c$ y ↑$r \\Rightarrow$ ↓↓$m$"] },
            { nom: "Tipo de interés real", sub: "Con deflación, el real es altísimo aunque el nominal sea cero.", cols: ["r = i − $\\pi$, con $\\pi$ < 0"] },
            { nom: "Deflación por deuda", sub: "Pagar todos a la vez aumenta lo que se debe.", cols: ["↓$P \\Rightarrow$ ↑ deuda real $\\Rightarrow$ ventas forzadas $\\Rightarrow$ ↓$P$"] },
            { nom: "Esposas doradas", sub: "El compromiso con el oro impide responder.", cols: ["tipo fijo $+$ capital libre $\\Rightarrow$ sin política monetaria"] },
            { nom: "Regularidad de la recuperación", sub: "La evidencia más limpia del episodio.", cols: ["salir antes del oro $\\Rightarrow$ recuperarse antes"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cómo se evapora un tercio del dinero sin que nadie lo decida",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la economía monetaria de la ficha 3.08, donde el público mantenía en efectivo el **20 %** de sus depósitos y los bancos guardaban un **10 %** de reservas, lo que daba un multiplicador de **4**. Ahora ocurre un pánico: los depositantes retiran efectivo y los bancos supervivientes acumulan reservas por miedo a la siguiente retirada.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "Antes del pánico", "Durante el pánico"],
          filas: [
            ["Efectivo sobre depósitos (c)", "0,20", "0,40"],
            ["Reservas sobre depósitos (r)", "0,10", "0,20"],
            ["Multiplicador monetario", "4,00", "2,33"],
            ["Base monetaria", "100", "100"],
            { celdas: ["Oferta monetaria resultante", "400", "233"], clase: "total" },
            ["Variación de la oferta monetaria", "—", "−42 %"],
            ["Base necesaria para sostener M = 400", "100", "171 (+71 %)"],
          ],
          nota: "Este cuadro es el corazón de la explicación monetaria. **La base monetaria no cae**: el banco central no ha retirado ni una unidad. Lo que se hunde es el multiplicador, porque el público y los bancos cambian de conducta a la vez y en la misma dirección. El resultado es una contracción del **42 %** de la oferta monetaria **sin que ninguna autoridad haya decidido nada**. Y la última fila contiene la acusación: para mantener la cantidad de dinero constante, la Reserva Federal habría tenido que **expandir la base un 71 %**. No lo hizo, y por eso Friedman y Schwartz califican el episodio de fallo de política y no de accidente natural.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Año", y: "Índice 1929" },
          dominio: { x: [1929, 1940], y: [55, 115] },
          marcasX: [1929, 1931, 1933, 1935, 1937, 1939],
          marcasY: [60, 70, 80, 90, 100, 110],
          series: [
            {
              nombre: "Producción real",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [1940, 103],
              puntos: [[1929, 100], [1930, 91], [1931, 85], [1932, 76], [1933, 74], [1934, 81], [1935, 88], [1936, 100], [1937, 105], [1938, 100], [1939, 107], [1940, 108]],
            },
            {
              nombre: "Precios",
              color: "alerta",
              grosor: 2.2,
              etiquetaEn: [1940, 82],
              puntos: [[1929, 100], [1930, 97], [1931, 89], [1932, 80], [1933, 75], [1934, 78], [1935, 80], [1936, 81], [1937, 84], [1938, 82], [1939, 81], [1940, 82]],
            },
            {
              nombre: "Dinero",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2.2,
              etiquetaEn: [1940, 113],
              puntos: [[1929, 100], [1930, 96], [1931, 89], [1932, 78], [1933, 67], [1934, 74], [1935, 84], [1936, 93], [1937, 96], [1938, 96], [1939, 104], [1940, 110]],
            },
          ],
          puntos: [
            { x: 1933, y: 67, etiqueta: "fondo", guias: false },
            { x: 1937, y: 105, etiqueta: "recaída", guias: false },
          ],
          nota: "Las tres series son estilizadas y su **forma conjunta** es lo que cuenta la historia. El dinero cae antes y más hondo que la producción, lo que es difícil de conciliar con la idea de que la contracción monetaria fuera un mero reflejo de la caída de la actividad. Los precios caen un cuarto, y esa deflación es la que multiplica la carga real de todas las deudas contraídas antes de 1929. El fondo llega en **1933**, coincidiendo con el abandono del oro y la reforma bancaria, y a partir de ahí la recuperación es rápida — hasta la **recaída de 1937**, provocada por retirar el apoyo demasiado pronto. Esa recaída es probablemente el argumento histórico más citado contra los ajustes prematuros.",
        },
        {
          tipo: "tabla",
          cabecera: ["País", "Sale del patrón oro", "Inicio de la recuperación"],
          filas: [
            ["Reino Unido", "1931", "1932"],
            ["Estados Unidos", "1933", "1933"],
            ["Bélgica", "1935", "1935"],
            { celdas: ["Francia y el bloque del oro", "1936", "1936-37"], clase: "total" },
          ],
          nota: "Esta tabla es una de las evidencias más limpias que produce la historia económica, porque **el orden de salida y el orden de recuperación coinciden**. No prueba causalidad por sí sola —la fecha de salida no es aleatoria— pero el patrón es tan nítido y la alternativa tan difícil de articular que hay un consenso amplio sobre su lectura: el compromiso con la convertibilidad era lo que impedía usar la política monetaria, y quien se libró de él antes pudo reflacionar antes. Es la ficha 3.10 en versión histórica: **no se puede tener tipo fijo, capitales libres y política monetaria propia**, y en 1931 varios países descubrieron cuál de las tres querían conservar.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué se aprendió y qué se aplicó en 2008",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La crisis financiera de 2008 fue la primera ocasión de comprobar si las lecciones de la Depresión se habían aprendido de verdad, y el contraste entre ambos episodios es la mejor forma de entender qué se sabe hoy y qué sigue sin saberse.",
            "**Lo que se hizo distinto, y funcionó.** Los bancos centrales expandieron su balance de forma masiva en lugar de permanecer pasivos, con lo que **el multiplicador se hundió igual que en 1930 pero la base compensó la caída**: es literalmente la última fila de la tabla de arriba, ejecutada. El presidente de la Reserva Federal en 2008 era un estudioso de la Depresión, y en una ocasión célebre había dicho a Friedman que la habían provocado y que no volverían a hacerlo. Hubo además garantía de depósitos, provisión de liquidez ilimitada a la banca, líneas de intercambio de divisas entre bancos centrales y estímulo fiscal coordinado en 2009. El resultado: la caída del producto fue de un orden de magnitud menor y duró trimestres en lugar de años.",
            "**Lo que se repitió, y no funcionó.** El giro hacia la austeridad en 2010-2011, especialmente en Europa, reprodujo el error de 1937: retirar el apoyo antes de que la recuperación estuviera asentada. La zona euro entró en una **segunda recesión** que Estados Unidos no tuvo, y la diferencia entre ambas trayectorias es uno de los experimentos naturales más citados de la macroeconomía reciente. La ficha 10.10 explica además por qué se cometió: las estimaciones de brecha de producción en tiempo real sugerían menos holgura de la que después resultó haber.",
            "**Y lo que la zona euro reprodujo casi literalmente fue el problema del patrón oro.** Los países del sur no podían devaluar ni tenían política monetaria propia, así que el ajuste tuvo que hacerse por dentro, bajando costes y salarios: la devaluación interna de la ficha 10.09. Es exactamente la posición del Reino Unido en 1925 o de Francia en 1935, y produjo lo mismo — desempleo alto y prolongado. La diferencia crucial es que el euro **no tiene puerta de salida ordenada**, mientras que del patrón oro se podía salir, y de hecho salir fue lo que salvó a quienes lo hicieron.",
            "**El paralelo tiene límites que conviene marcar.** En 1930 no existían seguro de depósitos, estabilizadores automáticos ni prestamista de última instancia con doctrina establecida; hoy sí, y eso amortigua los pánicos antes de que empiecen. Por otro lado, el sistema financiero de 2008 era mucho más interconectado y opaco, con riesgos fuera de balance que ningún supervisor veía. **No se trata de que 2008 fuera una repetición atenuada**, sino de que ciertos mecanismos —contracción del crédito, deflación por deuda, ajuste sin tipo de cambio— reaparecen porque son estructurales.",
            "**La conclusión que se lleva un economista de este contraste.** Las lecciones de la Depresión sobre política **monetaria** se aprendieron y se aplicaron con éxito. Las lecciones sobre política **fiscal** y sobre los costes de un ajuste sin tipo de cambio se olvidaron parcialmente y se volvieron a pagar. Y hay una tercera que sigue sin resolverse: cómo se reparte el coste de una crisis financiera entre acreedores, deudores y contribuyentes, que es una pregunta distributiva de la ficha 1.10 y no una cuestión técnica.",
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
            { t: "Creer que el crac de 1929 causó la Depresión", d: "Las caídas bursátiles son frecuentes y casi nunca producen depresiones. Lo que convirtió una recesión seria en una catástrofe de una década fue lo que vino después: contracción monetaria de un tercio, cadena de pánicos bancarios con unas nueve mil quiebras y un patrón oro que impedía responder a ambas cosas." },
            { t: "Suponer que el banco central tuvo que provocar la contracción monetaria", d: "No retiró base: fue el multiplicador el que se hundió al subir a la vez el efectivo que quería el público y las reservas que retenían los bancos. La acusación es de omisión, no de acción: habría hecho falta expandir la base un 71 % para mantener la cantidad de dinero, y no se hizo." },
            { t: "Pensar que con tipos nominales bajos la política monetaria era expansiva", d: "Con precios cayendo un 25 %, el tipo de interés real era altísimo aunque el nominal fuera casi cero. Y la deflación multiplicaba el valor real de todas las deudas contraídas antes. Juzgar el tono monetario por el tipo nominal es el error que la deflación por deuda de Fisher deja al descubierto." },
            { t: "Atribuir la recuperación al gasto público del New Deal", d: "El estímulo fiscal fue modesto frente a la brecha de producción. Lo que más pesó fue abandonar el oro y devaluar, es decir, recuperar la capacidad de expandir la cantidad de dinero. El New Deal aportó reformas duraderas —seguro de depósitos, regulación bancaria— más que un impulso de demanda decisivo." },
            { t: "Explicar la Depresión por el arancel Smoot-Hawley", d: "Agravó la contracción del comercio mundial y provocó represalias, pero el comercio exterior era una fracción pequeña de la economía estadounidense de entonces. Es un factor agravante que no da cuenta ni de lejos de la magnitud del episodio." },
            { t: "Olvidar la recaída de 1937", d: "Cuando la recuperación estaba en marcha, la retirada prematura del apoyo monetario y fiscal provocó una segunda caída. Es el argumento histórico más citado contra los ajustes anticipados, y su eco se repitió en Europa en 2010-2011 con una segunda recesión que Estados Unidos no tuvo." },
            { t: "Leer la correlación entre salir del oro y recuperarse como prueba concluyente", d: "El patrón es nítido y el orden de salida coincide con el de recuperación, pero la fecha de salida no es aleatoria: los países que salieron antes podían diferir en otras cosas. El consenso es amplio porque la alternativa es difícil de articular, no porque la identificación causal sea perfecta." },
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
            "Este es el puente más literal del bloque: la contabilidad nacional que se estudia en el bloque 10 nació de esta crisis.",
          ],
          lista: [
            "**En 1929 no existía ninguna cifra de producción nacional.** Los responsables políticos de la mayor contracción de la historia moderna tenían que guiarse por índices de producción industrial, cargas ferroviarias y precios agrícolas. El Congreso estadounidense encargó a **Simon Kuznets** una estimación de la renta nacional, presentada en **1934**: es el acta de nacimiento de la contabilidad nacional moderna, y la ficha 10.07 recoge la advertencia que Kuznets incluyó entonces sobre no confundir su indicador con el bienestar.",
            "La Segunda Guerra Mundial aceleró el proceso —planificar una economía de guerra exigía saber cuánto se podía producir— y de ahí salen las primeras cuentas nacionales completas y, más tarde, la armonización internacional que desemboca en el SNA y en el **SEC 2010** de la ficha 10.06. La secuencia de cuentas que hoy parece un edificio abstracto es, históricamente, **la respuesta institucional a haber gobernado a ciegas en 1930**.",
            "El **seguro de depósitos** creado entonces tiene una consecuencia contable que se aprecia en las cuentas financieras: convierte un pasivo bancario en un pasivo contingente del Estado. No computa como deuda pública salvo que se ejecute, exactamente el problema de las garantías que señalaba la ficha 10.06.",
            "Las **estadísticas de paro** también son hijas de este periodo. La cifra del 25 % que se cita habitualmente se reconstruyó después, y su definición exacta —qué se hacía con los empleados en programas públicos de emergencia— cambia el resultado en varios puntos. Es la advertencia de la ficha 10.02 sobre definiciones, aplicada a la serie más citada del siglo.",
            "Y la **deflación por deuda** ilustra un límite permanente del sistema de cuentas: la deuda se registra a valor nominal, de modo que la transferencia real de riqueza de deudores a acreedores que produce una caída de precios **no aparece en ningún saldo**. Es el mismo punto ciego que la ficha 11.03 señalaba para la erosión inflacionaria, con el signo cambiado.",
          ],
          cierre:
            "La conclusión ordena el bloque entero: **medimos la economía como la medimos porque una vez no supimos qué estaba pasando y salió muy caro**. Cada convención del SEC que parece burocrática responde a una pregunta que alguien no pudo contestar en un momento en que era urgente.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Si la base monetaria no cayó, ¿cómo se contrajo un tercio la cantidad de dinero?", a: "Por el hundimiento del multiplicador. Los depositantes asustados elevaron la proporción de efectivo del 20 % al 40 % y los bancos supervivientes subieron sus reservas del 10 % al 20 %, con lo que el multiplicador pasó de 4,00 a 2,33 y la oferta monetaria cayó un 42 % sin que ninguna autoridad decidiera nada. Sostenerla habría exigido expandir la base un 71 %." },
            { q: "¿Por qué unos tipos nominales casi nulos no bastaban para estimular?", a: "Porque con los precios cayendo un 25 % el tipo real era altísimo. Además la deflación multiplicaba el valor real de todas las deudas contraídas antes: los deudores vendían activos para pagar, esas ventas forzadas hundían más los precios y la carga real volvía a subir. Es la deflación por deuda de Fisher, y explica que la caída no se detuviera sola." },
            { q: "¿Qué relación hay entre abandonar el patrón oro y recuperarse?", a: "El orden coincide: Reino Unido sale en 1931 y se recupera en 1932; Estados Unidos en 1933 y 1933; Francia y el bloque del oro aguantan hasta 1936 y son los últimos. Mantener la convertibilidad impedía expandir la oferta monetaria, así que quien se libró antes de esa atadura pudo reflacionar antes. Es el trilema de la ficha 3.10 en versión histórica." },
            { q: "¿Fue el New Deal lo que sacó a Estados Unidos de la Depresión?", a: "Solo en parte. El estímulo fiscal fue modesto en relación con la brecha de producción, y lo que más pesó fue abandonar el oro y devaluar, es decir, recuperar la capacidad de expandir el dinero. La aportación duradera del New Deal fueron las reformas institucionales: seguro de depósitos y regulación bancaria." },
            { q: "¿Qué fue la recaída de 1937 y por qué se cita tanto?", a: "Una segunda caída provocada por retirar prematuramente el apoyo monetario y fiscal cuando la recuperación aún no estaba asentada. Se cita porque es el argumento histórico más claro contra los ajustes anticipados, y porque su eco se repitió en Europa en 2010-2011, con una segunda recesión que Estados Unidos no llegó a tener." },
            { q: "¿Qué tiene que ver la Gran Depresión con el bloque 10 de este plan?", a: "Que lo creó. En 1929 no existía ninguna cifra de producción nacional, y el Congreso estadounidense encargó a Kuznets una estimación que se presentó en 1934. De ahí, pasando por la planificación de la economía de guerra y la armonización internacional posterior, sale el sistema de cuentas que hoy regula el SEC 2010." },
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
            { ref: "Friedman y Schwartz, A Monetary History of the United States, capítulo 7", nota: "«La gran contracción»: la explicación monetaria en su formulación original, con los datos que la sostienen." },
            { ref: "Kindleberger, La crisis económica 1929-1939", nota: "la lectura internacional: el papel de la ausencia de un prestamista de última instancia mundial." },
            { ref: "Eichengreen, Golden Fetters", nota: "la evidencia sobre salida del oro y recuperación; el argumento central de esta ficha." },
            { ref: "Fisher, «The Debt-Deflation Theory of Great Depressions», 1933", nota: "diez páginas escritas en pleno desastre que explican por qué la caída se realimentaba." },
            { ref: "Bernanke, Essays on the Great Depression", nota: "el canal del crédito y por qué las quiebras bancarias destruyen información y no solo dinero; escrito por quien luego tuvo que aplicarlo." },
          ],
        },
      ],
    },
  ],
};
