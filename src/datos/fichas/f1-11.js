/* Ficha 1.11 — Escuelas heterodoxas y enfoques alternativos. */

export default {
  codigo: "1.11",
  titulo: "Escuelas heterodoxas y enfoques alternativos",
  nivel: 3,
  bloque: "Fundamentos y método económico",
  tiempo: "4 h",
  nucleo:
    "Austriacos, schumpeterianos, poskeynesianos e institucionalistas no son notas al pie de la corriente principal. Cada uno se organiza alrededor de un fenómeno que el modelo de equilibrio trata mal por construcción, y por eso se leen mejor como preguntas distintas que como respuestas rivales.",
  requiere: "1.09 Historia del pensamiento económico · 1.08 Modelos económicos · 1.10 Economía normativa frente a positiva",
  abre: "11.08 Crisis financieras · 9.10 Innovación y emprendimiento · 2.10 Fallos de mercado",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 1.09 recorrió la línea principal del pensamiento económico, de los clásicos a la síntesis neoclásica y su revisión empírica. Esta recorre las tradiciones que quedaron fuera de esa línea, y conviene decir desde el principio cómo leerlas. **No como versiones peores de lo mismo, ni como una alternativa unificada**: no existe «la heterodoxia», sino varias escuelas que discrepan entre sí tanto como con la corriente principal. Lo que las hace útiles es que cada una se construye alrededor de un fenómeno concreto que el aparato del equilibrio maneja con dificultad, y en ese terreno tienen ventaja.",
            "La **escuela austriaca** parte de un problema que el modelo de equilibrio da por resuelto: cómo se coordinan millones de decisiones cuando el conocimiento relevante está **disperso, es tácito y nadie lo posee entero**. La respuesta de Hayek es que el sistema de precios funciona como un mecanismo de transmisión de información: quien sube su oferta ante un precio alto no necesita saber por qué ha subido. De ahí sale su argumento contra la planificación central, que no es que planificar sea inmoral o que los planificadores sean torpes, sino que **el conocimiento que harían falta para planificar no existe reunido en ninguna parte**. La misma tradición aporta una teoría del ciclo: los tipos de interés artificialmente bajos distorsionan la estructura temporal del capital e inducen inversiones que solo parecen rentables mientras dura el estímulo. Su debilidad es simétrica a su fuerza: su rechazo del método empírico formal la deja sin manera de contrastar sus propias afirmaciones.",
            "**Schumpeter** es difícil de clasificar y por eso se cita mucho y se estudia poco. Su tesis es que el capitalismo no tiende al equilibrio sino que **se aleja de él por dentro**: el crecimiento no viene de acumular más factores sino de innovaciones que destruyen posiciones establecidas. La **destrucción creativa** no es un efecto colateral del progreso, es su mecanismo. Eso invierte la valoración del beneficio extraordinario y del poder de mercado, que en el análisis estático de la ficha 2.07 son una ineficiencia y aquí son **el premio temporal que financia la innovación**. También invierte el papel de las recesiones, que pasan de fallo a proceso de depuración. Es una lectura incómoda para las dos orillas, y la que mejor explica por qué las industrias más dinámicas rara vez se parecen a la competencia perfecta.",
            "La tradición **poskeynesiana** sostiene que la síntesis domesticó a Keynes al reducir su aportación a la rigidez de precios. Su núcleo es la **incertidumbre en sentido fuerte**: no riesgo con probabilidades conocidas, sino situaciones donde no cabe asignar probabilidades porque el futuro no está determinado. Con esa premisa, las expectativas no pueden ser racionales en el sentido técnico, las convenciones sociales pasan a ser determinantes, y el dinero deja de ser un velo para convertirse en refugio. Su aportación más citada es la **hipótesis de inestabilidad financiera** de Minsky, que el ejemplo numérico desarrolla: los periodos de calma inducen endeudamiento, el endeudamiento genera fragilidad, y **la estabilidad es desestabilizadora**. La ficha 11.08 muestra ese patrón repetido en la historia.",
            "La tradición **marxista**, leída como marco analítico y no como programa político, aporta dos cosas que el instrumental estándar no produce. La primera es tratar la **distribución como resultado de un conflicto** y no de la productividad marginal de cada factor: el reparto entre salarios y beneficios depende de la posición negociadora relativa, lo que conecta con la distribución funcional de la ficha 12.03. La segunda es la idea de que las crisis no son accidentes exógenos sino **tendencias del propio proceso de acumulación**. Su teoría del valor-trabajo tiene problemas serios y conocidos como teoría de los precios relativos, pero su marco sobre el conflicto distributivo y la concentración ha resultado más duradero que su aparato de valor.",
            "El **institucionalismo** —de Veblen a North y Ostrom— desplaza la pregunta: no cómo asignan los mercados, sino **de dónde salen las reglas** dentro de las cuales asignan. Los derechos de propiedad, los contratos exigibles y la confianza no son el fondo del cuadro sino su determinante principal, y explican divergencias de renta entre países que la acumulación de factores no explica, como recorre la ficha 11.10. Ostrom añadió el hallazgo más contraintuitivo de la tradición: los **recursos comunes** no siempre acaban en la tragedia que predice el análisis convencional, porque comunidades reales han diseñado instituciones de gobierno duraderas que no son ni mercado ni Estado. Es la crítica empírica más sólida a la dicotomía que estructura la ficha 2.10.",
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
            { nom: "Austriaca", sub: "Qué explica bien: la coordinación sin planificador.", cols: ["Conocimiento disperso · el precio como información · ciclo por distorsión del capital"] },
            { nom: "Schumpeteriana", sub: "Qué explica bien: el crecimiento como ruptura.", cols: ["Destrucción creativa · el beneficio extraordinario financia la innovación"] },
            { nom: "Poskeynesiana", sub: "Qué explica bien: la fragilidad endógena.", cols: ["Incertidumbre fuerte · dinero endógeno · Minsky"] },
            { nom: "Marxista", sub: "Qué explica bien: el conflicto distributivo.", cols: ["Reparto como poder relativo · crisis como tendencia interna"] },
            { nom: "Institucionalista", sub: "Qué explica bien: las reglas previas al mercado.", cols: ["Derechos de propiedad · costes de transacción · comunes (Ostrom)"] },
            { nom: "Postura cubierta", sub: "Minsky: el flujo cubre intereses y principal.", cols: ["Flujo de caja > intereses + amortización"] },
            { nom: "Postura especulativa", sub: "Cubre intereses, no principal.", cols: ["Debe refinanciar el principal al vencimiento"] },
            { nom: "Postura Ponzi", sub: "No cubre ni los intereses.", cols: ["Se endeuda para pagarlos: la deuda crece sola"] },
            { nom: "Tesis de Minsky", sub: "El resultado que da nombre a la hipótesis.", cols: ["La calma prolongada desplaza al sistema de cubierta a Ponzi"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: las tres posturas financieras de Minsky",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La hipótesis de inestabilidad financiera admite una formulación aritmética muy simple, y esa es su fuerza. Tres empresas con **el mismo flujo de caja anual de 100** y el mismo tipo de interés del **6 %**, que se diferencian únicamente en cuánta deuda arrastran. Nadie ha cambiado de tecnología ni de mercado: solo de balance.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Postura", "Deuda", "Intereses del año", "Queda para amortizar", "Situación"],
          filas: [
            ["Cubierta", "800", "48", "52", "Reduce deuda cada año"],
            ["Especulativa", "1.667", "100", "0", "Paga intereses, refinancia el principal"],
            { celdas: ["Ponzi", "2.000", "120", "−20", "Se endeuda para pagar intereses"], clase: "total" },
          ],
          nota: "El umbral que separa la segunda de la tercera es exacto: con un flujo de 100 y un tipo del 6 %, la deuda que absorbe justo todo el flujo en intereses es $100/0{,}06 = 1.666{,}7$. Por debajo se amortiza; por encima, la deuda crece sola. Lo decisivo es que **ninguna de las tres empresas ha hecho nada distinto**: la postura la determina el balance, y el balance lo va cambiando el propio ciclo.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Años", y: "Deuda" },
          dominio: { x: [0, 10], y: [0, 2400] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [0, 600, 1200, 1800, 2400],
          series: [
            {
              nombre: "Ponzi",
              color: "alerta",
              etiquetaEn: [0.5, 2290],
              puntos: [[0, 2000], [1, 2020], [2, 2041.2], [3, 2063.7], [4, 2087.5], [5, 2112.7], [6, 2139.5], [7, 2167.9], [8, 2197.9], [9, 2229.8], [10, 2263.6]],
            },
            {
              nombre: "Especulativa",
              color: "n2",
              trazo: "discontinuo",
              etiquetaEn: [0.5, 1800],
              puntos: [[0, 1667], [10, 1667]],
            },
            {
              nombre: "Cubierta",
              color: "acento",
              etiquetaEn: [3.5, 920],
              puntos: [[0, 800], [1, 748], [2, 692.9], [3, 634.5], [4, 572.5], [5, 506.9], [6, 437.3], [7, 363.5], [8, 285.3], [9, 202.5], [10, 114.6]],
            },
          ],
          nota: "Las tres líneas salen del mismo flujo de caja y divergen sin que ocurra nada externo. La empresa cubierta **liquida su deuda en once años**; la especulativa queda clavada, dependiendo de poder refinanciar cada vencimiento; la Ponzi crece despacio pero sin freno. **La fragilidad no está en el flujo sino en el balance**, y por eso una subida de tipos o un cierre del crédito golpea a las tres de forma completamente distinta.",
        },
        {
          tipo: "parrafos",
          items: [
            "Lo que convierte esto en una teoría del ciclo es el paso siguiente. Durante una expansión prolongada, las deudas se pagan, los impagos escasean y tanto prestamistas como prestatarios revisan a la baja el margen de seguridad que consideran prudente. Lo hacen **de forma individualmente razonable**: la experiencia reciente avala que el riesgo es menor de lo que se temía. El resultado agregado es que el sistema se desplaza de la primera fila de la tabla hacia la tercera. De ahí la formulación que resume la hipótesis: **la estabilidad es desestabilizadora**.",
            "Nótese lo que hace falta suponer, que es muy poco: ni irracionalidad, ni información asimétrica, ni fallos de mercado. Basta con que la percepción del riesgo dependa de la experiencia reciente. Ese es el motivo de que la hipótesis resultara tan incómoda: **no necesita un culpable ni un choque exógeno**, y por tanto no admite la solución de evitar el error. La ficha 11.08 muestra la regularidad del patrón, y la 8.10 el instrumental regulatorio construido después de 2008 para intentar contenerlo.",
            "La crítica razonable es que la hipótesis explica el mecanismo pero **no permite fechar nada**: dice que la fragilidad se acumula, no cuándo se rompe. Como herramienta de supervisión —vigilar el apalancamiento y la composición de las posturas en lugar de solo los tipos y la inflación— ha demostrado ser útil, y buena parte de la política macroprudencial actual es minskyana sin decirlo. Como instrumento de previsión, sigue sin serlo.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué conviene leerlas aunque no se compartan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El valor práctico de estas tradiciones no está en adoptarlas en bloque sino en detectar **cuándo el instrumental estándar está trabajando fuera de su terreno**. Cada escuela funciona como un aviso sobre un supuesto concreto, y el aviso vale aunque la teoría completa no convenza.",
            "Ante un episodio de expansión del crédito, el marco de equilibrio invita a preguntarse si los precios reflejan los fundamentos. El aviso **minskyano** cambia la pregunta: no si los precios son correctos, sino **cómo está compuesto el pasivo** de quienes los sostienen. Una misma valoración de activos es sólida si la financian empresas en postura cubierta y frágil si la financian en postura Ponzi. Esa pregunta no la genera el modelo estándar, y sin embargo se puede responder con los datos que publican las cuentas financieras.",
            "Ante una industria con beneficios extraordinarios persistentes, el análisis de la ficha 2.07 sugiere poder de mercado y por tanto pérdida de eficiencia. El aviso **schumpeteriano** obliga a distinguir dos casos que se parecen mucho en los datos: la renta que protege una posición mediante barreras artificiales, y la que retribuye una innovación y será erosionada por la siguiente. El instrumental estático no los distingue porque **mide un momento**, y la diferencia entre ambos solo aparece en la trayectoria.",
            "Ante una propuesta de diseño institucional —una regulación, un mecanismo de asignación—, el aviso **austriaco** pregunta qué conocimiento necesita el diseñador para que funcione y si ese conocimiento existe en algún sitio. Muchos mecanismos elegantes fracasan no por incentivos mal calculados sino porque exigen información que nadie posee. Y el aviso **institucionalista** pregunta por la tercera vía que la dicotomía mercado-Estado oculta: los hallazgos de Ostrom sobre gestión comunal de recursos son la respuesta empírica a una teoría que había concluido, sin mirar, que solo cabían dos soluciones.",
            "Hay un límite honesto que conviene marcar. Estas tradiciones son fuertes en **diagnóstico y débiles en cuantificación**: rara vez producen predicciones que puedan contrastarse y refutarse, que es lo que la ficha 1.08 identifica como el criterio de un modelo útil. Esa debilidad no es casual, ya que varias rechazan explícitamente la formalización, pero tampoco es inocua: sin contraste, es difícil saber cuándo una de ellas se equivoca. La postura defendible no es elegir bando, sino **usar cada marco donde su supuesto característico deja de ser inofensivo**.",
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
            { t: "Tratar «la heterodoxia» como un bloque unificado", d: "No lo es y sus miembros discrepan entre sí más que con la corriente principal. La escuela austriaca y la marxista sostienen posiciones opuestas casi en todo, y ninguna aceptaría el marco de la otra. Agruparlas por lo que rechazan y no por lo que afirman impide ver que cada una responde a una pregunta distinta." },
            { t: "Confundir la escuela austriaca con una posición política", d: "Su núcleo analítico es una tesis epistemológica sobre el conocimiento disperso y el papel informativo de los precios. De ahí se derivan conclusiones de política, pero el argumento se sostiene o cae por razones que no son ideológicas. Reducirlo a una preferencia por el mercado impide discutir lo que realmente afirma." },
            { t: "Citar la destrucción creativa sin su contrapartida", d: "La expresión suele emplearse como celebración del cambio, y en Schumpeter la destrucción es literal: empresas que desaparecen, capital que se vuelve obsoleto, oficios que dejan de existir. La tesis es que ese coste es el mecanismo del crecimiento, no un daño evitable. Usarla solo por su mitad amable la vacía." },
            { t: "Creer que Minsky requiere irracionalidad", d: "No la requiere. Basta con que la percepción del riesgo dependa de la experiencia reciente, algo individualmente razonable. La fragilidad emerge del comportamiento agregado de agentes que se comportan con sensatez. Precisamente por eso la hipótesis es incómoda: no hay a quien acusar de error." },
            { t: "Tratar la teoría del valor-trabajo como el conjunto del análisis marxista", d: "Como teoría de los precios relativos tiene problemas serios y conocidos. Pero el marco sobre el conflicto distributivo, la concentración del capital y las crisis como tendencia interna es separable de ella y ha resultado más duradero. Descartar todo el edificio por su fundamento de valor es tan perezoso como aceptarlo entero por él." },
            { t: "Suponer que los comunes acaban siempre en tragedia", d: "El resultado clásico supone ausencia de comunicación y de reglas locales. Ostrom documentó sistemas comunales duraderos de gestión de agua, pastos y pesquerías, e identificó las condiciones que los sostienen. La tragedia es un caso posible, no un teorema: el hallazgo es que existe una tercera vía entre privatizar y estatalizar." },
            { t: "Pedirles el mismo tipo de resultado que a un modelo formal", d: "Son fuertes en diagnóstico y débiles en predicción cuantificable, y varias rechazan la formalización de forma explícita. Exigirles una estimación puntual es pedirles lo que no ofrecen; pero también hay que reconocer el coste de esa negativa, que es la dificultad para saber cuándo se equivocan." },
            { t: "Presentarlas como sustitutas y no como complementos", d: "Ninguna reemplaza al aparato estándar para las tareas que este hace bien: medir elasticidades, evaluar una política con datos, resolver un problema de asignación. Su utilidad aparece cuando el supuesto característico del modelo —equilibrio, riesgo probabilizable, instituciones dadas— deja de ser inofensivo para la pregunta que se hace." },
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
            "El SEC no es una fotografía neutral de la economía: es una teoría con forma de reglas. Cada escuela objeta a una convención concreta, y esas objeciones se localizan con precisión en el sistema.",
          ],
          lista: [
            "La **frontera de la producción** decide qué existe económicamente. El trabajo doméstico no remunerado queda fuera, mientras que el mismo servicio comprado en el mercado entra: la economía «crece» al mercantilizar una actividad que ya se hacía. Es la objeción más antigua de la economía feminista, y es una crítica a una convención explícita del sistema, no un error de medición.",
            "La objeción **schumpeteriana** tiene una localización exacta. La obsolescencia por innovación —capital que pierde valor porque ha aparecido algo mejor— es el corazón de la destrucción creativa, y el sistema la reparte entre el **consumo de capital fijo (K.1)** cuando es previsible y las **otras variaciones del volumen de activos (B.10.2)** cuando no lo es, según la ficha 13.10. Es decir: **el mecanismo central del crecimiento aparece en las cuentas como una minoración patrimonial**, nunca como el proceso productivo que Schumpeter describía.",
            "La objeción **poskeynesiana** encuentra en cambio su mejor aliado en el sistema. Las posturas de Minsky son magnitudes de balance, y las **cuentas financieras** con la posición deudora por sector de la ficha 12.09 permiten seguirlas: comparar la carga de intereses con el excedente de explotación (**B.2**) de un sector es exactamente la operación de la tabla anterior. La supervisión macroprudencial usa esos datos, aunque el marco conceptual del SEC no fue diseñado para eso.",
            "La objeción **austriaca** es la que peor encaja. Su tesis sobre la estructura temporal del capital exige distinguir etapas de producción con distinta distancia al consumo, y el sistema agrega el capital en un stock valorado a precios de mercado. Los balances de la ficha 13.10 clasifican por **tipo de activo**, no por posición en el tiempo, así que la magnitud que la teoría austriaca considera decisiva sencillamente no se publica.",
            "Y una objeción compartida por casi todas: el sistema registra el **consumo de capital fijo de los activos producidos** pero no el agotamiento del capital natural con el mismo criterio, salvo en el tratamiento limitado de los activos no producidos de la ficha 13.09. Una economía puede aumentar su PIB liquidando recursos sin que la contabilidad principal lo registre como desacumulación. De ahí las cuentas satélite ambientales, que existen precisamente porque el marco central no lo recoge.",
          ],
          cierre:
            "La consecuencia práctica: cuando un dato de contabilidad nacional parece contradecir la intuición, conviene preguntarse qué convención lo está produciendo. Casi siempre hay una regla explícita detrás, y casi siempre alguna de estas tradiciones lleva décadas discutiéndola.",
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
              q: "Una empresa tiene un flujo de caja de 100 y paga un 6 % de interés. ¿A partir de qué nivel de deuda entra en postura Ponzi?",
              a: "A partir de 1.666,7, que es $100/0{,}06$. En ese punto los intereses absorben exactamente todo el flujo de caja y no queda nada para amortizar: es la frontera de la postura especulativa. Por encima, los intereses superan al flujo y la empresa debe endeudarse para pagarlos, de modo que la deuda crece sin que ocurra nada externo.",
            },
            {
              q: "¿Por qué dice Minsky que la estabilidad es desestabilizadora?",
              a: "Porque durante una expansión prolongada las deudas se pagan y los impagos escasean, de modo que prestamistas y prestatarios reducen el margen de seguridad que consideran prudente. Cada decisión es individualmente razonable a la vista de la experiencia reciente, pero el efecto agregado desplaza al sistema de posturas cubiertas a posturas Ponzi. La fragilidad la genera la propia calma, sin necesidad de irracionalidad ni de choque externo.",
            },
            {
              q: "El análisis estático trata el beneficio extraordinario como un síntoma de poder de mercado. ¿Qué objeta Schumpeter?",
              a: "Que en una industria innovadora ese beneficio es el premio temporal que retribuye la innovación y financia la siguiente, y que será erosionado por quien venga detrás. La dificultad práctica es que renta protegida por barreras artificiales y renta de innovación se parecen mucho en un corte transversal: solo se distinguen mirando la trayectoria, y el instrumental estático mide un momento.",
            },
            {
              q: "¿Cuál es el argumento de Hayek contra la planificación central?",
              a: "Que el conocimiento necesario para planificar está disperso entre millones de personas, es en buena parte tácito y no existe reunido en ningún sitio. No es un argumento sobre la moralidad de planificar ni sobre la competencia de los planificadores, sino sobre la disponibilidad de la información. Su contrapartida positiva es que el sistema de precios transmite esa información sin que nadie tenga que conocerla entera.",
            },
            {
              q: "¿Dónde aparece en las cuentas nacionales la destrucción creativa de Schumpeter?",
              a: "Como minoración del patrimonio, no como proceso productivo. La obsolescencia previsible entra en el consumo de capital fijo (K.1) y la imprevisible en las otras variaciones del volumen de activos (B.10.2). Es un buen ejemplo de que el sistema no es neutral: el mecanismo que una tradición considera el motor del crecimiento aparece contabilizado como una pérdida de valor.",
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
              q: "¿Es «la heterodoxia» un bloque con una posición común?",
              opciones: [
                "Sí: comparten el rechazo al equilibrio y a la formalización",
                "No: sus miembros discrepan entre sí más que con la corriente principal",
                "Sí, en lo esencial, aunque difieran en los detalles",
                "Solo desde los años setenta, cuando se articularon como alternativa",
              ],
              correcta: 1,
              porque: [
                "Agruparlas por lo que rechazan oculta que proponen cosas incompatibles. El rechazo compartido no construye una posición compartida.",
                "La escuela austriaca y la marxista sostienen tesis opuestas casi en todo, y ninguna aceptaría el marco de la otra. Cada una se organiza alrededor de un fenómeno distinto que el modelo de equilibrio trata mal.",
                "La discrepancia no está en los detalles sino en el núcleo: qué determina el valor, qué papel tiene el Estado, qué causa las crisis.",
                "Nunca se articularon como bloque; la etiqueta la puso el contraste con la corriente principal, no un programa común.",
              ],
            },
            {
              q: "Una empresa se endeuda para pagar los intereses de su deuda. ¿En qué postura de Minsky está?",
              opciones: [
                "Cubierta: sigue atendiendo sus compromisos",
                "Ponzi: la deuda crece sola sin que ocurra nada externo",
                "Especulativa: puede pagar intereses pero refinancia el principal",
                "Depende de si el acreedor acepta la refinanciación",
              ],
              correcta: 1,
              porque: [
                "Cubierta significa que el flujo de caja da para intereses y amortización a la vez. Aquí no da ni para los intereses.",
                "Es la definición: al no cubrir siquiera los intereses, el saldo se agranda por su propia dinámica. No hace falta ninguna sacudida exterior para que la situación empeore.",
                "Esa es la postura intermedia: el flujo cubre los intereses pero no el principal, que hay que refinanciar al vencimiento. Aquí ni eso.",
                "La disposición del acreedor determina cuánto dura la situación, no en qué postura está la empresa, que se define por la relación entre su flujo y sus compromisos.",
              ],
            },
            {
              q: "¿Necesita la hipótesis de inestabilidad financiera de Minsky que los agentes sean irracionales?",
              opciones: [
                "Sí: el exceso de confianza es su motor",
                "No: basta con que la percepción del riesgo dependa de la experiencia reciente",
                "Sí, pero solo por parte de los prestamistas",
                "No, porque supone agentes con expectativas racionales completas",
              ],
              correcta: 1,
              porque: [
                "El exceso de confianza sería una explicación psicológica, y la tesis es más incómoda que eso porque no la necesita.",
                "Ajustar el riesgo percibido a lo que se ha vivido es individualmente sensato. La fragilidad emerge del comportamiento agregado de agentes que se comportan con sensatez, y por eso es difícil de prevenir con supervisión individual.",
                "Prestamistas y prestatarios hacen lo mismo, y ninguno de los dos necesita equivocarse para que el sistema se desplace.",
                "Tampoco supone expectativas racionales completas: supone algo intermedio y bastante realista, que es aprender de lo reciente.",
              ],
            },
            {
              q: "¿Terminan siempre en tragedia los recursos de propiedad común?",
              opciones: [
                "Sí: sin propiedad privada, el incentivo a sobreexplotar es inevitable",
                "No: Ostrom documentó sistemas comunales duraderos e identificó qué condiciones los sostienen",
                "Solo si el recurso es renovable",
                "Sí, salvo que intervenga el Estado regulando el acceso",
              ],
              correcta: 1,
              porque: [
                "El resultado clásico supone ausencia de comunicación y de reglas locales. Con ese supuesto la conclusión se sigue; sin él, no.",
                "Aguas de riego, pastos y pesquerías gestionadas comunalmente durante siglos. La tragedia es un caso particular, no el destino de todo bien común, y las condiciones que lo evitan son observables.",
                "La renovabilidad afecta a la dinámica del recurso, no a si la comunidad puede darse reglas eficaces para gestionarlo.",
                "Privatizar o estatalizar son dos salidas, pero la aportación de Ostrom es precisamente que existe una tercera y que funciona bajo condiciones identificables.",
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
            { ref: "Hayek, «El uso del conocimiento en la sociedad»", nota: "quince páginas de 1945 con el argumento completo sobre el conocimiento disperso y el precio como señal; probablemente el artículo más influyente de la tradición austriaca." },
            { ref: "Schumpeter, Capitalismo, socialismo y democracia", nota: "la formulación de la destrucción creativa y la tesis de que la competencia relevante no es la de precios sino la de la innovación que suprime al competidor." },
            { ref: "Minsky, Stabilizing an Unstable Economy", nota: "la hipótesis de inestabilidad financiera y la clasificación de posturas; leído antes de 2008 parecía marginal y después dejó de parecerlo." },
            { ref: "Ostrom, El gobierno de los bienes comunes", nota: "la evidencia de campo sobre instituciones comunales duraderas y los principios de diseño que las sostienen; la refutación empírica de que solo caben mercado o Estado." },
          ],
        },
      ],
    },
  ],
};
