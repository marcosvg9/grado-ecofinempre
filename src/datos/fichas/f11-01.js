/* Ficha 11.01 — De la economía orgánica a la revolución industrial. */

export default {
  codigo: "11.01",
  titulo: "De la economía orgánica a la revolución industrial",
  nivel: 2,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Durante milenios la renta por habitante apenas se movió: los avances técnicos se traducían en más gente, no en más nivel de vida. Lo que hay que explicar no es que la humanidad fuera pobre, sino por qué dejó de serlo en un rincón de Europa a finales del siglo XVIII.",
  requiere: "1.01 Escasez y coste de oportunidad · 3.09 Crecimiento y productividad",
  abre: "11.02 La primera globalización · 11.10 Divergencia y convergencia · 3.09 Solow",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La historia económica de la humanidad, vista con la suficiente distancia, tiene la forma de un palo de hockey: una línea plana durante milenios y un despegue vertical en los dos últimos siglos. Esa imagen es la que hay que explicar, y conviene enunciar bien el enigma: **no es por qué la gente era pobre —eso es lo normal— sino por qué en algún momento dejó de serlo**. Un campesino inglés de 1700 vivía con un nivel material no muy distinto del de uno romano de la época de Augusto; su tataranieto, en cambio, vivió un mundo irreconocible.",
            "**El régimen anterior tiene un nombre y una lógica: la economía orgánica.** Todo dependía de la energía que la tierra podía capturar cada año —alimento para personas y animales, leña para calor, viento y agua para mover molinos— y por tanto **la producción estaba acotada por la superficie disponible**. En ese mundo, un avance técnico no elevaba el nivel de vida de forma duradera: permitía alimentar a más gente, la población crecía, la tierra por habitante disminuía y el nivel de vida volvía a donde estaba. Es la **trampa maltusiana**, y es la explicación de por qué la línea es plana.",
            "**La consecuencia más incómoda de esa lógica conviene decirla entera.** En un régimen maltusiano, lo que sube el nivel de vida a medio plazo no es la abundancia sino **la mortalidad**: las epidemias, las guerras y las malas cosechas reducían la población y elevaban el salario real de los supervivientes. La Peste Negra mató a una fracción enorme de la población europea y fue seguida de un siglo de salarios reales altos. Que la mejor política de rentas de una economía orgánica fuera una catástrofe demográfica da la medida de lo distinto que era aquel mundo del nuestro.",
            "**La ruptura ocurre cuando la energía deja de venir de la superficie.** El carbón —y después el petróleo— es energía acumulada durante millones de años, y su explotación libera a la producción del límite anual de la tierra. Ese es el cambio material de fondo, y explica por qué la revolución industrial es antes que nada **una revolución energética**. La máquina de vapor no fue solo un invento: fue el dispositivo que convirtió calor en trabajo mecánico a una escala que ninguna fuente orgánica podía igualar.",
            "**Ahora la pregunta difícil: por qué en Gran Bretaña y por qué entonces.** Las explicaciones compiten y ninguna basta sola. La de **precios relativos** —la más discutida hoy— señala que Gran Bretaña era el único sitio donde el trabajo era caro y la energía barata, de modo que sustituir personas por máquinas alimentadas con carbón salía a cuenta allí y en ningún otro lugar; la misma máquina habría sido ruinosa en Francia o en China. La **institucional** apunta a la seguridad de los derechos de propiedad y a un Parlamento que limitaba la arbitrariedad del monarca tras 1688. La **cultural** invoca la Ilustración y una comunidad de artesanos y científicos con hábito de experimentar. Y la **colonial** subraya el acceso a mercados y materias primas del imperio.",
            "**Ninguna de esas explicaciones sobrevive sola a la crítica**, y eso también hay que decirlo. Los precios relativos explican por qué convenía mecanizar pero no de dónde salió la capacidad de hacerlo. Las instituciones eran parecidas en los Países Bajos, que no despegaron. La Ilustración fue europea, no británica. Y el imperio español recibió mucha más plata americana sin industrializarse por ello. Lo honesto es decir que la ruptura fue **causalmente sobredeterminada**: un conjunto de condiciones que en otros sitios se daban por separado coincidieron allí a la vez.",
            "**Y una advertencia sobre la palabra revolución.** El proceso fue lento: durante las primeras décadas el crecimiento fue modesto y los salarios reales apenas mejoraron —el llamado **paréntesis de Engels**—, mientras las jornadas se alargaban y las ciudades industriales eran lugares insalubres donde la esperanza de vida cayó. La mejora generalizada del nivel de vida llega a partir de mediados del siglo XIX. Que el resultado final fuera extraordinario no significa que la transición fuera benigna para quienes la vivieron, y confundir ambas cosas es la forma más común de escribir mala historia económica.",
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
            { nom: "Régimen maltusiano", sub: "La técnica se traduce en población, no en renta.", cols: ["↑ producción $\\Rightarrow$ ↑ población $\\Rightarrow$ renta per cápita constante"] },
            { nom: "Restricción orgánica", sub: "La energía disponible depende de la superficie.", cols: ["producción $\\leq f(\\text{tierra} \\times \\text{flujo solar anual})$"] },
            { nom: "Salario real maltusiano", sub: "Por eso las epidemias lo subían.", cols: ["$w \\propto \\dfrac{\\text{tierra}}{\\text{población}}$"] },
            { nom: "Crecimiento compuesto", sub: "La aritmética que separa los dos mundos.", cols: ["años para duplicar $\\approx \\dfrac{\\ln 2}{\\ln(1+g)}$"] },
            { nom: "Ruptura energética", sub: "El carbón desliga producción de superficie.", cols: ["energía de stock, no de flujo"] },
            { nom: "Hipótesis de precios relativos", sub: "Mecanizar solo compensa si el trabajo es caro.", cols: ["sustituir trabajo por capital si $w/r$ es alto"] },
            { nom: "Paréntesis de Engels", sub: "El despegue y la mejora no coinciden en el tiempo.", cols: ["↑ producto sin ↑ salario real, ~1780-1840"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: por qué la línea parece plana",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La mejor forma de entender la ruptura no es mirar niveles sino **tasas**, porque el crecimiento compuesto engaña brutalmente a la intuición. Estas son las magnitudes de orden de cada régimen, con el dato que las hace comprensibles: cuántos años tarda la renta por habitante en duplicarse.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Régimen", "Crecimiento anual", "Años para duplicar la renta", "Qué significa"],
          filas: [
            ["Economía orgánica", "0,05 %", "1.387", "Nadie percibe cambio en toda su vida"],
            ["Gran Bretaña, 1500-1820", "0,15 %", "462", "Veinte generaciones para notar el doble"],
            ["Gran Bretaña, 1820-1870", "1,20 %", "58", "Se duplica dentro de una vida"],
            ["Economía avanzada del siglo XX", "2,00 %", "35", "Cada generación vive el doble que la anterior"],
            { celdas: ["Milagro asiático de posguerra", "6,00 %", "12", "Tres duplicaciones en una carrera laboral"], clase: "total" },
          ],
          nota: "La diferencia entre 0,15 % y 1,2 % parece pequeña escrita así, y es **la diferencia entre un mundo donde nada cambia nunca y otro donde todo cambia dos veces por generación**. Ahí está el motivo de que los contemporáneos tardaran décadas en darse cuenta de lo que estaba pasando: en un régimen de 0,05 %, la renta crece un 1,6 % **en tres siglos**, algo indistinguible del ruido de las cosechas. Y explica también por qué la historia económica anterior a 1800 se ocupa de niveles y de crisis, y la posterior, de tasas de crecimiento.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Año", y: "Índice" },
          dominio: { x: [1000, 2020], y: [0, 3100] },
          marcasX: [1000, 1300, 1600, 1900, 2020],
          marcasY: [0, 1000, 2000, 3000],
          series: [
            {
              nombre: "Renta por habitante",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [1700, 1400],
              puntos: [[1000, 92], [1300, 100], [1400, 118], [1500, 100], [1600, 106], [1700, 114], [1750, 122], [1800, 140], [1820, 150], [1850, 200], [1870, 265], [1900, 420], [1950, 700], [1980, 1300], [2000, 2100], [2020, 3000]],
            },
          ],
          puntos: [
            { x: 1400, y: 118, etiqueta: "peste negra", guias: false },
            { x: 1820, y: 150, etiqueta: "1820", guias: false },
          ],
          nota: "La curva es estilizada pero su **forma** es la que documentan las reconstrucciones históricas, y contiene dos lecciones. La primera es el palo de hockey: ochocientos años indistinguibles de una línea recta y después un despegue que no se detiene. La segunda está en el pequeño abultamiento de 1400: **la Peste Negra elevó el nivel de vida de los supervivientes**, porque menos gente sobre la misma tierra significa más tierra por persona. Esa es la firma inconfundible de un régimen maltusiano, y su desaparición a partir del siglo XIX es la prueba de que el mundo había cambiado de reglas.",
        },
        {
          tipo: "tabla",
          cabecera: ["Periodo", "Crecimiento anual", "Multiplicador acumulado"],
          filas: [
            ["1500 → 1820, 320 años", "0,13 %", "×1,5"],
            { celdas: ["1820 → 2020, 200 años", "1,51 %", "×20"], clase: "total" },
          ],
          nota: "Doscientos años recientes producen **más de trece veces** el avance de los trescientos veinte anteriores, y lo hacen en menos tiempo. Conviene además fijarse en que el crecimiento moderno, un 1,5 % anual de media, **no es espectacular año a año**: nadie percibe un 1,5 %. Toda su fuerza está en la persistencia, en que se repita sin interrupción durante doscientos años. Eso convierte cualquier factor que reduzca el crecimiento medio unas décimas durante mucho tiempo en algo enormemente más importante que una recesión profunda y breve, un argumento que reaparecerá en la ficha 11.10.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la hipótesis de los salarios altos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "De todas las explicaciones de por qué la industrialización arrancó en Gran Bretaña, la que mejor se deja contrastar con datos es la de los precios relativos, y merece recorrerla porque es un buen ejemplo de cómo se argumenta en historia económica.",
            "**El punto de partida es una observación empírica.** A mediados del siglo XVIII, los salarios reales en Londres y en otras ciudades inglesas estaban entre los más altos de Europa, muy por encima de los de París, Milán o Pekín. Y al mismo tiempo el carbón en las zonas mineras inglesas era **extraordinariamente barato** en comparación con cualquier otro sitio, porque estaba cerca de la superficie, cerca de los ríos navegables y cerca de las ciudades. Gran Bretaña era, en términos de precios relativos, un lugar anómalo: **trabajo caro y energía barata**.",
            "**De ahí sale una predicción comprobable.** Una máquina que sustituye trabajo humano por energía solo es rentable donde el trabajo es caro respecto a la energía. Las primeras máquinas de vapor eran ineficientísimas, consumían cantidades enormes de carbón y solo compensaban si el carbón era casi gratis y el operario al que sustituían, caro. La predicción es que **esas máquinas eran rentables en Inglaterra y ruinosas en el continente y en Asia**, y los cálculos de rentabilidad reconstruidos para la época apuntan en esa dirección.",
            "**La hipótesis explica además algo que otras no explican: por qué la difusión fue tan lenta.** Si la industrialización dependiera solo de conocer la técnica, se habría extendido en años, porque las máquinas eran visibles y los ingenieros viajaban. Si depende de los precios relativos, solo se adopta donde compensa, y **compensa progresivamente según las máquinas mejoran** y reducen su consumo de combustible. Eso encaja con el hecho observado de que la mecanización se difundió al continente conforme la eficiencia técnica mejoraba, no de golpe.",
            "**Y ahora las objeciones, que son serias.** La primera es que los salarios altos podrían ser **consecuencia** y no causa: una economía ya productiva paga más, con lo que la correlación no identifica nada, que es la endogeneidad de la ficha 4.07 aplicada al siglo XVIII. La segunda es que los precios relativos explican el incentivo pero no la **capacidad**: hacía falta un tejido de artesanos capaces de construir esas máquinas, y eso remite a la explicación cultural e institucional. La tercera es que la hipótesis funciona bien para la hilatura de algodón y peor para otros sectores.",
            "**Qué se lleva uno de esta discusión, más allá del caso concreto.** Que en historia económica las hipótesis compiten sobre los mismos hechos y se juzgan por **cuántas cosas explican a la vez y qué predicciones comprobables generan**, no por su elegancia. Y que la respuesta razonable a «por qué Gran Bretaña» probablemente no sea una causa sino la coincidencia de varias condiciones que en otros lugares se daban por separado. Es una conclusión menos satisfactoria que un factor único, y es la que sostienen los datos.",
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
            { t: "Creer que antes de 1800 no hubo progreso técnico", d: "Lo hubo, y mucho: molinos, arado pesado, rotación de cultivos, imprenta, navegación oceánica. Lo que no hubo fue crecimiento sostenido de la renta por habitante, porque en un régimen maltusiano la mejora técnica se traduce en más población y no en más nivel de vida. El fenómeno a explicar es el desacoplamiento, no la invención." },
            { t: "Leer la revolución industrial como un salto brusco", d: "Durante sus primeras décadas el crecimiento fue modesto y los salarios reales apenas mejoraron, mientras se alargaban las jornadas y caía la esperanza de vida en las ciudades industriales. La mejora generalizada llega hacia mediados del siglo XIX. El resultado final fue extraordinario y la transición no fue benigna: son dos afirmaciones compatibles." },
            { t: "Explicarlo todo con una sola causa", d: "Precios relativos, instituciones, cultura científica y comercio colonial explican partes y ninguna basta sola: los Países Bajos tenían instituciones parecidas y no despegaron, la Ilustración fue europea, y el imperio español recibió mucha plata sin industrializarse. La honestidad histórica aquí consiste en aceptar la sobredeterminación." },
            { t: "Confundir correlación con causa en los salarios altos", d: "Que Gran Bretaña tuviera salarios altos y se industrializara no demuestra que lo primero causara lo segundo: una economía ya más productiva paga más. Es endogeneidad pura, y por eso la hipótesis se defiende con predicciones adicionales —rentabilidad de las máquinas, patrón de difusión— y no con la correlación." },
            { t: "Tratar el crecimiento moderno como algo espectacular año a año", d: "Un 1,5 % anual es imperceptible en un año y multiplica la renta por veinte en dos siglos. Toda su fuerza está en la persistencia. Eso implica que un factor que reste unas décimas al crecimiento durante décadas importa muchísimo más que una recesión profunda y corta, por poca atención pública que reciba." },
            { t: "Aplicar categorías modernas al mundo orgánico", d: "En una economía donde el nivel de vida depende de la tierra por habitante, una epidemia mejora el salario real de los supervivientes y una buena cosecha lo empeora en pocas generaciones. Juzgar aquel mundo con la intuición del nuestro lleva a conclusiones absurdas, y entender ese extrañamiento es la mitad del trabajo." },
            { t: "Suponer que industrializarse era la opción evidente", d: "Solo lo era donde compensaba. La misma máquina de vapor era rentable en Newcastle y ruinosa en Milán con la técnica de 1750, porque consumía carbón a un ritmo que solo un carbón casi gratuito toleraba. Las técnicas no se adoptan por ser mejores en abstracto, sino por ser rentables a los precios locales." },
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
            "Todo lo dicho descansa en cifras de PIB de siglos en los que no existía ninguna estadística, y conviene saber de dónde salen antes de apoyarse en ellas.",
          ],
          lista: [
            "Las series históricas de renta por habitante son **reconstrucciones**, no mediciones. El **proyecto Maddison** las estima combinando censos fiscales, registros de cosechas, salarios de jornaleros, precios de mercado y padrones eclesiásticos, y su margen de error es enorme y raramente se comunica. Es el caso extremo del aviso de la ficha 4.03.",
            "El método habitual es **el enfoque del gasto invertido**: si se conocen los salarios nominales y los precios de una cesta de subsistencia, se deduce el salario real, y de ahí se infiere el nivel de vida. Esa cesta es una convención, y cambiarla mueve los resultados lo suficiente como para alterar comparaciones entre países.",
            "Las comparaciones internacionales de niveles exigen además **paridad de poder adquisitivo**, y aplicarla a economías preindustriales con cestas de consumo radicalmente distintas es un ejercicio de fe razonada. Comparar la renta de la China Ming con la de la Inglaterra Tudor tiene el problema, en versión extrema, que la ficha 10.07 señalaba para las comparaciones actuales.",
            "La propia **frontera de producción** del SEC 2010 es inaplicable a estas economías: la mayor parte de la producción era autoconsumo doméstico y trabajo no remunerado, precisamente lo que las cuentas nacionales dejan fuera. Las estimaciones históricas tienen que **imputar** todo eso, o subestiman groseramente el producto.",
            "Y hay un sesgo de fondo que conviene tener presente: las fuentes que sobreviven son **fiscales y comerciales**, es decir, las de la parte de la economía que estaba monetizada y vigilada. La agricultura de subsistencia deja poco rastro documental, con lo que las reconstrucciones ven mejor lo urbano y lo mercantil que lo rural.",
          ],
          cierre:
            "La conclusión práctica no es desconfiar de estas series, que son un logro intelectual notable, sino **usarlas para lo que aguantan**: órdenes de magnitud y formas de curva, nunca décimas ni comparaciones finas entre países. El palo de hockey es robusto; el nivel exacto de 1650 no lo es.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la línea de la renta por habitante es plana durante milenios si hubo progreso técnico?", a: "Porque en un régimen maltusiano el avance técnico permite alimentar a más gente, la población crece, la tierra por habitante disminuye y el nivel de vida vuelve a su punto de partida. La mejora se traduce en cantidad de personas, no en calidad de vida. Lo que hay que explicar no es la pobreza, sino el desacoplamiento posterior entre técnica y población." },
            { q: "¿Por qué la Peste Negra elevó los salarios reales?", a: "Porque menos gente sobre la misma tierra significa más tierra por persona, y en una economía orgánica el salario real depende de esa proporción. Es la firma inconfundible de un régimen maltusiano, y su desaparición a partir del siglo XIX prueba que las reglas habían cambiado. Que una catástrofe demográfica fuera la mejor política de rentas mide lo ajeno que era aquel mundo." },
            { q: "¿Qué diferencia hay entre crecer al 0,15 % y al 1,2 % anual?", a: "Al 0,15 % la renta tarda 462 años en duplicarse, y nadie percibe cambio alguno en toda su vida. Al 1,2 % tarda 58 años, y cada persona ve duplicarse el nivel de vida dentro de su propia biografía. Escritas juntas, las dos cifras parecen próximas; son la diferencia entre un mundo donde nada cambia y otro donde todo cambia." },
            { q: "¿Por qué se dice que la revolución industrial fue antes que nada una revolución energética?", a: "Porque el carbón es energía de stock acumulada durante millones de años, mientras que la economía orgánica dependía del flujo solar anual capturado por una superficie limitada. Explotar ese stock desligó la producción del límite de la tierra, que era la restricción que mantenía el sistema atrapado." },
            { q: "¿Cuál es el núcleo de la hipótesis de los salarios altos y qué la debilita?", a: "Que mecanizar solo compensa donde el trabajo es caro respecto a la energía, y Gran Bretaña era el único sitio con salarios altos y carbón baratísimo; de ahí que las primeras máquinas, ineficientes y voraces, fueran rentables allí y ruinosas fuera. La debilita que los salarios altos pueden ser consecuencia de una productividad previa, y que explican el incentivo pero no la capacidad técnica de construir las máquinas." },
            { q: "¿Qué fiabilidad tienen las cifras de PIB de 1700?", a: "Son reconstrucciones a partir de salarios, precios, cosechas y censos fiscales, con márgenes de error grandes que rara vez se comunican, y con un sesgo hacia la economía monetizada porque es la que deja rastro documental. Sirven para órdenes de magnitud y formas de curva, no para décimas ni comparaciones finas entre países." },
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
              q: "Antes de 1800 la renta por habitante apenas se movió. ¿Significa que no hubo progreso técnico?",
              opciones: [
                "Sí, salvo en China, que sí innovaba",
                "No, pero los avances fueron demasiado pequeños para medirse",
                "No: hubo molinos, arado pesado, rotación de cultivos, imprenta y navegación oceánica; lo que no hubo fue crecimiento sostenido de la renta por habitante",
                "Sí: sin innovación no puede haber crecimiento",
              ],
              correcta: 2,
              porque: [
                "China innovó y quedó atrapada en el mismo patrón: población creciente y renta por habitante estancada.",
                "No eran pequeños: transformaron la agricultura y el transporte. Lo que ocurría es que el excedente se absorbía en más bocas.",
                "Los avances se traducían en más gente, no en más nivel de vida. Lo que hay que explicar no es la aparición de la técnica sino por qué dejó de convertirse solo en población.",
                "La relación no es automática: se puede innovar mucho y no elevar el nivel de vida.",
              ],
            },
            {
              q: "¿Cómo fueron las primeras décadas de la revolución industrial para los trabajadores?",
              opciones: [
                "De mejora en el campo y empeoramiento en las ciudades industriales",
                "De estancamiento salarial pero con jornadas más cortas",
                "De mejora rápida y generalizada del nivel de vida",
                "El crecimiento fue modesto, los salarios reales apenas mejoraron, se alargaron las jornadas y cayó la esperanza de vida en las ciudades",
              ],
              correcta: 3,
              porque: [
                "El campo tampoco mejoró: la presión demográfica y los cercamientos empujaban hacia la ciudad.",
                "Las jornadas se alargaron, no se acortaron.",
                "La mejora generalizada llegó, y con varias décadas de retraso respecto al inicio del proceso.",
                "Leerla como un salto brusco de prosperidad falsea lo que vivió la generación que la atravesó: el despegue fue lento y su primer tramo fue duro.",
              ],
            },
            {
              q: "Gran Bretaña tenía salarios altos y fue la primera en industrializarse. ¿Prueba que los salarios altos causaron la industrialización?",
              opciones: [
                "Sí, y es la explicación aceptada por consenso",
                "Sí: encarecer el trabajo incentiva sustituirlo por máquinas",
                "No: los salarios británicos no eran realmente altos en términos reales",
                "No: una economía ya más productiva paga más, así que la causalidad puede ir en sentido contrario",
              ],
              correcta: 3,
              porque: [
                "No hay tal consenso: es una de las hipótesis en discusión, precisamente por este problema.",
                "El mecanismo es plausible y no basta para establecer la dirección de la causa.",
                "Eran altos en comparación europea; el problema no es el dato sino qué se deduce de él.",
                "Es un problema de endogeneidad de manual, del tipo que estudia el bloque 4: la variable explicativa puede ser consecuencia de lo que pretende explicar.",
              ],
            },
            {
              q: "La máquina de vapor era rentable en Newcastle y ruinosa en Milán con la técnica de 1750. ¿Por qué?",
              opciones: [
                "Porque el mercado italiano era demasiado pequeño para amortizarla",
                "Porque consumía carbón a un ritmo enorme, y su precio relativo difería radicalmente entre ambos lugares",
                "Porque las patentes británicas impedían su uso en el continente",
                "Porque en Italia no había mano de obra cualificada para operarla",
              ],
              correcta: 1,
              porque: [
                "El tamaño del mercado influye en otras decisiones, no en si una máquina concreta ahorra o quema dinero.",
                "Industrializarse no era la opción evidente: solo lo era donde los precios relativos la hacían rentable. La misma técnica da resultados opuestos en sitios distintos.",
                "Las patentes retrasaron algunas difusiones y no explican una diferencia de rentabilidad tan grande.",
                "La cualificación se adquiere; el obstáculo era anterior y puramente económico.",
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
            { ref: "Allen, La revolución industrial británica en perspectiva global", nota: "la exposición completa de la hipótesis de los salarios altos, con los cálculos de rentabilidad de las máquinas." },
            { ref: "Clark, Adiós a la sopa boba", nota: "el mejor tratamiento del régimen maltusiano y de por qué las epidemias mejoraban el nivel de vida; polémico en su tesis final." },
            { ref: "Wrigley, Energía y la Revolución Industrial inglesa", nota: "la lectura energética: de la economía orgánica a la mineral, que es el marco de esta ficha." },
            { ref: "Mokyr, La palanca de la riqueza", nota: "la defensa de la explicación cultural e ilustrada, útil como contrapeso a Allen." },
            { ref: "Proyecto Maddison, base de datos histórica", nota: "las series que hay detrás del palo de hockey; conviene mirar su documentación metodológica antes que los números." },
          ],
        },
      ],
    },
  ],
};
