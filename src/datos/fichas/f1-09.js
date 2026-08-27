/* Ficha 1.09 — Historia del pensamiento economico. */

export default {
  codigo: "1.09",
  titulo: "Historia del pensamiento económico",
  nivel: 2,
  bloque: "Fundamentos y método económico",
  tiempo: "4 h",
  nucleo:
    "Clásicos, marginalistas, keynesianos y neoclásicos responden preguntas distintas, no la misma peor o mejor. Leerlos como una carrera hacia la verdad actual impide ver lo único que hace útil esta historia: que cada escuela nació de un problema concreto que su antecesora no sabía tratar.",
  requiere: "1.08 Modelos económicos",
  abre: "1.10 Normativa frente a positiva · 1.11 Escuelas heterodoxas · 3.04 Modelo keynesiano · 3.09 Crecimiento",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de que existiera la economía como disciplina hubo dos formas de pensar la riqueza que conviene conocer porque siguen reapareciendo. El **mercantilismo** identificaba la riqueza de una nación con la acumulación de metales preciosos y deducía que convenía exportar mucho e importar poco. La **fisiocracia** francesa, con Quesnay, situó el origen del excedente en la agricultura y produjo el primer intento serio de representar la economía como un **circuito** —el *Tableau économique*, antecesor directo del flujo circular de la ficha 1.06—. Ambas se equivocaban en el diagnóstico, pero plantearon la pregunta correcta: **de dónde sale el excedente**.",
            "La **economía clásica** arranca con Adam Smith en 1776 y su respuesta es otra: la riqueza no son los metales sino **la capacidad de producir**, y su motor es la **división del trabajo**, limitada por el tamaño del mercado. Smith aporta además la idea de que la coordinación puede emerger sin coordinador. Ricardo añade la **ventaja comparativa** de la ficha 1.01 y la teoría de la renta de la tierra; Malthus, la tensión entre población y recursos; Mill, la primera separación consciente entre las leyes de la producción y las de la distribución, que es el germen de la ficha 1.10. Todos comparten una **teoría del valor basada en el coste de producción**, y todos se ocupan de lo mismo: **crecimiento y distribución en el largo plazo**.",
            "Marx parte de ese mismo aparato clásico y lo lleva a otra conclusión. Su análisis del capitalismo como sistema histórico, con la teoría de la plusvalía y las crisis derivadas de la propia dinámica de acumulación, planteó preguntas —concentración, conflicto distributivo, ciclos— que **la economía posterior tardó en reincorporar**. Puede discreparse por completo de su marco y seguir reconociendo que su objeto de estudio, la evolución estructural del sistema, desapareció del análisis dominante durante décadas.",
            "En 1871 se produce el giro decisivo, la **revolución marginalista**, que llega a la vez y por separado de la mano de Jevons, Menger y Walras. El cambio es doble. En el **objeto**: se pasa de las clases sociales y el largo plazo a **la decisión individual y la asignación**. Y en el **método**: se pasa del coste de producción a la **utilidad marginal** como fundamento del valor, resolviendo de paso la paradoja del agua y los diamantes de la ficha 1.05. Marshall sintetiza ambas tradiciones con la tijera de oferta y demanda —el coste importa por el lado de la oferta, la utilidad por el de la demanda— y construye el aparato que estudian las fichas 1.02 y 2.01. Es la fundación de la **economía neoclásica**.",
            "Ese edificio se mostró insuficiente ante la Gran Depresión, y de ahí sale Keynes en 1936. Su aportación central es que **una economía puede quedarse atascada en un equilibrio con paro elevado**, sin que las fuerzas del mercado la saquen por sí solas, porque el nivel de actividad lo determina la **demanda agregada** y no la oferta. De ahí la política de demanda de la ficha 3.04 y el aparato IS-LM de la 3.05, formalizado por Hicks. La **síntesis neoclásica** de posguerra combinó ambos mundos: keynesiana a corto plazo, neoclásica a largo. Fue el consenso dominante durante treinta años.",
            "Ese consenso se rompió con la **estanflación** de los setenta, que la curva de Phillips convencional no sabía explicar. Friedman y el **monetarismo** devolvieron protagonismo al dinero y a las **expectativas**; Lucas y la **nueva macroeconomía clásica** llevaron el argumento hasta las expectativas racionales y la crítica a los modelos sin fundamentos microeconómicos. La respuesta llegó de la **nueva economía keynesiana**, que aceptó ese exigente estándar metodológico y mostró que **con rigideces reales de precios y salarios reaparecen los resultados keynesianos**. De esa síntesis sale la macroeconomía académica actual. Y en paralelo han crecido tres corrientes que hoy son centrales: la **institucional**, que estudia cómo las reglas determinan el desarrollo; la **conductual**, que sustituye el supuesto de racionalidad perfecta por conducta observada; y sobre todo el **giro empírico**, que ha desplazado el prestigio de la disciplina desde construir modelos hacia **identificar efectos causales creíbles**, con los métodos de la ficha 4.07.",
          ],
        },
      ],
    },
    {
      titulo: "Las escuelas frente a las mismas preguntas",
      contenido: [
        {
          tipo: "grafico",
          alto: 340,
          ejes: { x: "Año" },
          dominio: { x: [1750, 2040], y: [0, 10] },
          marcasX: [1776, 1848, 1871, 1936, 1976, 2008],
          marcasY: [],
          series: [
            { color: "n1", grosor: 6, puntos: [[1756, 8.7], [1776, 8.7]] },
            { color: "tinta", grosor: 6, puntos: [[1776, 7.4], [1875, 7.4]] },
            { color: "alerta", grosor: 6, puntos: [[1867, 6.1], [2040, 6.1]] },
            { color: "acento", grosor: 6, puntos: [[1871, 4.8], [2040, 4.8]] },
            { color: "n3", grosor: 6, puntos: [[1936, 3.5], [2040, 3.5]] },
            { color: "n4", grosor: 6, puntos: [[1956, 2.2], [2000, 2.2]] },
            { color: "tinta2", grosor: 6, puntos: [[1972, 0.9], [2040, 0.9]] },
          ],
          notas: [
            { x: 1758, y: 9.4, texto: "Mercantilismo y fisiocracia", ancla: "start" },
            { x: 1778, y: 8.1, texto: "Clásicos: Smith, Ricardo, Malthus, Mill", ancla: "start" },
            { x: 1869, y: 6.8, texto: "Marx y la tradición crítica", ancla: "start" },
            { x: 1873, y: 5.5, texto: "Marginalistas y neoclásicos", ancla: "start" },
            { x: 1938, y: 4.2, texto: "Keynes y la síntesis", ancla: "start" },
            { x: 1958, y: 2.9, texto: "Monetarismo", ancla: "start" },
            { x: 1974, y: 1.6, texto: "Nueva clásica y giro empírico", ancla: "start" },
          ],
          nota: "Las fechas marcadas en el eje no son caprichosas: **1776** es *La riqueza de las naciones*; **1848** los *Principios* de Mill y el *Manifiesto*; **1871** el arranque simultáneo del marginalismo; **1936** la *Teoría general*; **1976** el centro de la estanflación que rompió el consenso de posguerra; **2008** la crisis que reabrió el debate sobre finanzas y macroeconomía. Obsérvese que **las líneas se solapan**: las escuelas no se sustituyen unas a otras como capas geológicas, conviven y se influyen.",
        },
        {
          tipo: "rejilla",
          cabecera: ["Escuela", "¿De dónde viene el valor?", "¿Qué determina el nivel de actividad?"],
          filas: [
            { nom: "Clásicos", sub: "Smith, Ricardo, Mill", cols: ["Del coste de producción y el trabajo incorporado", "La acumulación de capital; la oferta crea su demanda"] },
            { nom: "Marx", sub: "Tradición crítica", cols: ["Del trabajo; el excedente se apropia como plusvalía", "La dinámica de acumulación, que genera crisis"] },
            { nom: "Marginalistas", sub: "Jevons, Menger, Walras, Marshall", cols: ["De la utilidad marginal de la última unidad", "Los mercados se vacían; el pleno empleo es el estado normal"] },
            { nom: "Keynesianos", sub: "Keynes, Hicks, Samuelson", cols: ["La cuestión del valor deja de ser central", "La demanda agregada, que puede ser insuficiente"] },
            { nom: "Monetaristas y nueva clásica", sub: "Friedman, Lucas", cols: ["Marco neoclásico con expectativas explícitas", "La oferta a largo plazo; el dinero solo afecta al nivel de precios"] },
            { nom: "Síntesis actual", sub: "Nueva keynesiana e institucional", cols: ["Fundamentos microeconómicos con rigideces", "Demanda a corto, instituciones y productividad a largo"] },
          ],
          nota: "Leída por columnas, la tabla muestra que **las escuelas no se contradicen tanto como se ignoran**: cambian de pregunta. La segunda columna deja de ser central justo cuando entra Keynes, no porque se resolviera, sino porque el problema urgente pasó a ser otro. Y la tercera columna es donde se libra el desacuerdo que sigue vivo.",
        },
      ],
    },
    {
      titulo: "Cómo cambia el consenso: 1929 y 2008",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La historia de esta disciplina tiene un patrón bastante claro: **los cambios de paradigma no vienen de un argumento mejor, sino de un acontecimiento que el marco vigente no sabe explicar**. Dos episodios lo ilustran, y compararlos enseña algo sobre cómo funciona el conocimiento económico.",
            "**La Gran Depresión y Keynes.** El marco dominante en 1929 sostenía que los mercados tendían al pleno empleo y que un desempleo masivo y persistente era, en rigor, imposible salvo por rigideces transitorias. Cuando el paro se instaló durante una década, la anomalía dejó de ser ignorable. La aportación de Keynes no fue solo teórica: fue **ofrecer un marco alternativo con implicaciones de política inmediatas** en un momento en que se necesitaban desesperadamente. El cambio se consolidó porque coincidieron el fracaso predictivo del marco anterior, la existencia de un sustituto y una demanda social de respuestas.",
            "**La estanflación y la contrarrevolución.** El propio consenso keynesiano cayó por el mismo procedimiento. La curva de Phillips convencional predecía que no podían coexistir inflación alta y paro alto, y los años setenta exhibieron ambas cosas a la vez. Friedman y Phelps **habían anticipado esa posibilidad antes de que ocurriera**, argumentando que la relación se desvanece cuando las expectativas se ajustan, y ese acierto previo —no la elegancia del argumento— es lo que les dio autoridad. La ficha 3.03 desarrolla el mecanismo.",
            "**La crisis de 2008 y un cambio más parcial.** El modelo macroeconómico dominante apenas incorporaba el sector financiero, en parte porque la estabilidad de las dos décadas anteriores había hecho parecer irrelevantes los fallos de intermediación. La crisis obligó a reintroducir bancos, apalancamiento y fricciones financieras, revalorizó a autores que habían insistido en la inestabilidad financiera y reabrió el debate sobre la política fiscal en el límite inferior de los tipos. **Pero no produjo una ruptura comparable a las anteriores**, y merece la pena preguntarse por qué: probablemente porque no apareció un marco alternativo completo, y porque el prestigio de la disciplina se estaba desplazando ya hacia la evidencia empírica más que hacia los grandes marcos teóricos.",
            "**Lo que estos tres episodios tienen en común.** En los tres, la anomalía empírica llegó antes que la teoría; en los tres, el marco anterior no fue refutado de golpe sino **desplazado** cuando apareció uno que explicaba lo mismo y además lo nuevo; y en los tres, lo que sobrevivió del marco anterior fue mucho más de lo que el relato posterior sugiere. Es exactamente el problema de Duhem-Quine de la ficha 1.08 operando a escala de disciplina.",
            "**Y la lección práctica para quien estudia.** Conviene desconfiar de dos actitudes simétricas: la que trata la teoría vigente como conocimiento definitivo, y la que concluye que si las escuelas se suceden entonces ninguna sabe nada. Ni lo uno ni lo otro. **Hay un núcleo acumulado que sobrevive a todos los cambios** —el razonamiento marginal, el coste de oportunidad, la respuesta a incentivos, las identidades contables— y hay una periferia en disputa que es justamente donde se investiga. Distinguir una cosa de la otra es la mejor razón para estudiar esta ficha.",
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
            { t: "Leer la historia del pensamiento como una carrera hacia la verdad actual", d: "Cada escuela respondió a las preguntas que su época hacía urgentes. Los clásicos se ocupaban del crecimiento y la distribución a largo plazo; los marginalistas, de la asignación; Keynes, del desempleo masivo. Juzgarlos por su capacidad de responder preguntas que no se hacían es un anacronismo." },
            { t: "Creer que las escuelas se suceden y se sustituyen", d: "Conviven y se influyen. El aparato neoclásico sigue plenamente vigente en microeconomía mientras la macroeconomía incorporaba elementos keynesianos, y la síntesis actual usa ambos. La cronología del gráfico muestra líneas que se solapan, no capas sucesivas." },
            { t: "Identificar cada escuela con una posición política", d: "La correspondencia es mucho más débil de lo que sugiere el debate público: hay economistas de mercado con marcos keynesianos y viceversa. Un marco analítico determina qué mecanismos se ven, no qué se considera deseable, y esa distinción es la de la ficha 1.10." },
            { t: "Atribuir a Adam Smith la defensa del mercado sin límites", d: "Smith dedicó buena parte de su obra a los casos en que el interés propio no conduce al bien común, desconfiaba de la connivencia entre comerciantes y defendía funciones públicas amplias. La expresión de la mano invisible aparece muy pocas veces y con menos peso del que se le atribuye." },
            { t: "Suponer que la teoría del valor trabajo es exclusiva de Marx", d: "Es la posición común de la economía clásica, incluidos Smith y Ricardo. Marx la hereda y la reelabora, pero no la inventa. Lo que cambia con el marginalismo es el fundamento entero del valor, y ese giro afecta a toda la tradición clásica, no solo a Marx." },
            { t: "Pensar que la crítica de Lucas invalidó la macroeconomía keynesiana", d: "Obligó a refundarla sobre decisiones individuales explícitas, y la nueva economía keynesiana lo hizo mostrando que con rigideces reaparecen los resultados anteriores. La crítica cambió el estándar metodológico, no el veredicto sustantivo." },
            { t: "Confundir el desacuerdo en la frontera con la ausencia de conocimiento", d: "Existe un núcleo acumulado que ningún cambio de paradigma ha revocado: coste de oportunidad, razonamiento marginal, respuesta a incentivos, identidades contables. El desacuerdo se concentra en la periferia, que es exactamente donde se investiga en cualquier ciencia." },
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
            "Las cuentas nacionales tienen su propia historia del pensamiento, y es inseparable de la de esta ficha: el PIB es un producto de las preguntas de los años treinta.",
          ],
          lista: [
            "El *Tableau économique* de **Quesnay**, de 1758, es el primer intento de representar la economía como un circuito de flujos entre sectores. Es el antepasado directo del esquema de la ficha 1.06 y, a través de él, de las tablas input-output.",
            "El PIB moderno nace en los años treinta con **Simon Kuznets**, por encargo del Congreso estadounidense ante la Depresión: hacía falta saber, literalmente, cuánto había caído la economía. **No es casualidad que el agregado apareciera cuando el problema era el nivel de actividad**: es el marco keynesiano el que hace necesaria una medida de la producción total.",
            "**Richard Stone**, en colaboración con Keynes durante la Segunda Guerra Mundial, dio al sistema su forma de partida doble y de cuentas encadenadas, y por ello recibió el Nobel. La estructura del SEC 2010 desciende directamente de ese trabajo, y la ficha 10.06 la desarrolla.",
            "El propio **Kuznets advirtió expresamente** de que el bienestar de una nación difícilmente puede inferirse de una medida de la renta. La limitación no fue descubierta después: **estaba señalada por su creador desde el principio**, y es la que reaparece en las fichas 2.10 y 3.01 al hablar de externalidades y de trabajo no remunerado.",
            "Y cada gran acontecimiento amplió el sistema en la dirección de la escuela dominante: la posguerra añadió el detalle del sector público, la globalización obligó a redefinir la frontera de la producción y la residencia, y tras 2008 se reforzaron las **cuentas financieras** y la medición de la deuda, porque la crisis mostró que faltaba precisamente lo que la teoría vigente no miraba.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: los agregados que hoy parecen naturales se inventaron para responder a una pregunta concreta en un momento concreto. Saber cuál era esa pregunta explica casi todas sus convenciones y también sus puntos ciegos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿En qué consistió la revolución marginalista?", a: "En un cambio doble. De objeto: de las clases sociales y el largo plazo a la decisión individual y la asignación de recursos. Y de método: el valor deja de fundarse en el coste de producción y pasa a fundarse en la utilidad de la última unidad, lo que resuelve de paso la paradoja del agua y los diamantes." },
            { q: "¿Qué problema empírico no podía explicar el marco anterior a Keynes?", a: "Un desempleo masivo y persistente durante una década. El marco vigente sostenía que los mercados tendían al pleno empleo y que el paro prolongado solo podía deberse a rigideces transitorias. Keynes propuso que la demanda agregada puede ser insuficiente y la economía quedar atascada en ese estado." },
            { q: "¿Qué acabó con el consenso keynesiano de posguerra?", a: "La estanflación de los setenta: inflación y paro altos a la vez, combinación que la curva de Phillips convencional excluía. Friedman y Phelps habían anticipado esa posibilidad argumentando que la relación se desvanece al ajustarse las expectativas, y ese acierto previo les dio autoridad." },
            { q: "¿Por qué la crisis de 2008 no produjo una ruptura comparable?", a: "Porque no apareció un marco alternativo completo que explicara lo anterior y además lo nuevo. Se incorporaron fricciones financieras y se revalorizaron autores previamente marginales, pero sin sustitución de paradigma; además, el prestigio de la disciplina se estaba desplazando ya hacia la identificación empírica." },
            { q: "¿Significa la sucesión de escuelas que la economía no acumula conocimiento?", a: "No. Hay un núcleo que ningún cambio ha revocado —coste de oportunidad, razonamiento marginal, respuesta a incentivos, identidades contables— y una periferia en disputa donde se investiga. Confundir el desacuerdo en la frontera con la ausencia de conocimiento es un error que ninguna ciencia resistiría." },
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
              q: "¿Cuál es la mejor forma de leer la sucesión de escuelas económicas?",
              opciones: [
                "Como una carrera hacia la verdad actual, donde cada una mejora a la anterior",
                "Como respuestas a preguntas distintas, cada una nacida de un problema que su antecesora no sabía tratar",
                "Como posiciones políticas enfrentadas que se disputan la influencia",
                "Como paradigmas incompatibles que se sustituyen limpiamente unos a otros",
              ],
              correcta: 1,
              porque: [
                "Los clásicos se ocupaban del crecimiento y la distribución a largo plazo; los marginalistas, de la asignación; Keynes, del desempleo masivo. Juzgarlos por su parecido con el manual de hoy hace invisible por qué apareció cada uno.",
                "Es lo único que hace útil esta historia: entender qué problema concreto obligó a cambiar de herramientas explica mejor la teoría actual que memorizar su resultado.",
                "La correspondencia con posiciones políticas es mucho más débil de lo que sugiere el debate público. Un marco analítico determina qué mecanismos se ven, no qué se considera deseable.",
                "No se sustituyen: conviven y se influyen. El aparato neoclásico sigue vigente en microeconomía mientras la macroeconomía incorporaba elementos keynesianos, y la síntesis actual usa ambos.",
              ],
            },
            {
              q: "¿A quién corresponde la teoría del valor trabajo?",
              opciones: [
                "A Marx, que la formuló para su crítica del capitalismo",
                "A la economía clásica en general, incluidos Smith y Ricardo; Marx la hereda y reelabora",
                "A los marginalistas, que la refinaron con el concepto de utilidad",
                "A los fisiócratas, que situaban el valor en la tierra",
              ],
              correcta: 1,
              porque: [
                "Marx la reelabora y le da un papel central en su análisis, pero no la inventa: la recibe de una tradición que llevaba un siglo trabajándola.",
                "Es la posición común de la economía clásica. Lo que cambia con el marginalismo es el fundamento entero del valor, y ese giro afecta a toda la tradición anterior por igual, no solo a Marx.",
                "El marginalismo hace lo contrario: sustituye el valor trabajo por el valor basado en la utilidad marginal. No lo refina, lo abandona.",
                "Los fisiócratas situaban el excedente en la agricultura, que es una tesis distinta y anterior.",
              ],
            },
            {
              q: "¿Qué efecto tuvo la crítica de Lucas sobre la macroeconomía keynesiana?",
              opciones: [
                "La invalidó: sus conclusiones dejaron de sostenerse",
                "La obligó a refundarse sobre decisiones individuales explícitas, y con rigideces reaparecieron sus resultados",
                "No tuvo efecto real, porque los modelos anteriores seguían prediciendo bien",
                "La sustituyó por completo por modelos de equilibrio general sin desempleo",
              ],
              correcta: 1,
              porque: [
                "La crítica cambió el estándar metodológico, no el veredicto sustantivo. Confundir ambas cosas hace pensar que un debate metodológico zanjó una cuestión empírica.",
                "La nueva economía keynesiana rehízo el trabajo sobre microfundamentos y mostró que, con precios o salarios rígidos, los resultados anteriores vuelven a aparecer.",
                "Sí tuvo efecto: los modelos cuyos parámetros cambian al cambiar la política no sirven para evaluar cambios de política, y eso obligó a rehacer el aparato entero.",
                "Los modelos de equilibrio general se convirtieron en el lenguaje común, pero se les incorporaron rigideces precisamente para poder hablar de desempleo.",
              ],
            },
            {
              q: "En economía hay desacuerdo público constante. ¿Qué se sigue de ello sobre el estado del conocimiento?",
              opciones: [
                "Que casi todo está en disputa y poco puede darse por sabido",
                "Que el desacuerdo se concentra en la frontera; hay un núcleo que ningún cambio de paradigma ha revocado",
                "Que las distintas escuelas son incomparables entre sí",
                "Que el consenso llegará cuando haya mejores datos",
              ],
              correcta: 1,
              porque: [
                "Lo que se discute en público es justamente lo discutible: por eso llega al debate. Lo asentado no es noticia y por eso no se ve.",
                "Coste de oportunidad, razonamiento marginal, respuesta a incentivos e identidades contables siguen en pie sea cual sea la escuela. El desacuerdo vive en la periferia, que es donde debe estar.",
                "Comparten buena parte del aparato y discuten sobre supuestos concretos, no sobre lenguajes inconmensurables.",
                "Mejores datos ayudan, pero parte del desacuerdo es sobre qué modelo aplica a cada situación, y eso no lo zanjan los datos por sí solos.",
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
            { ref: "Heilbroner, Vidas de los economistas ilustres", nota: "la introducción más legible a la historia del pensamiento; biografías y contexto en lugar de doctrinas abstractas." },
            { ref: "Smith, La riqueza de las naciones, libro I", nota: "los capítulos sobre división del trabajo y precio; sorprende lo poco dogmático que resulta comparado con su reputación." },
            { ref: "Keynes, Teoría general de la ocupación, el interés y el dinero", nota: "difícil y desigual, pero los capítulos 1 a 3 y el 12 explican por sí solos el giro de 1936." },
            { ref: "Screpanti y Zamagni, Panorama de historia del pensamiento económico", nota: "el manual sistemático para cuando se quiera el detalle doctrinal que Heilbroner deja fuera." },
          ],
        },
      ],
    },
  ],
};
