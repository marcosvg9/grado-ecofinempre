/* Ficha 14.04 — Junta general y órgano de administración: quién decide qué. */

export default {
  codigo: "14.04",
  titulo: "Junta general y órgano de administración: quién decide qué",
  nivel: 2,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "En una sociedad de capital la propiedad no gobierna el día a día y la administración no puede tocar lo esencial. Esa frontera, que parece una regla de reparto de competencias, es en realidad la solución jurídica al problema de agencia, y todo el gobierno corporativo consiste en ajustarla.",
  requiere: "14.03 Capital social y responsabilidad limitada · 9.06 Dirección de personas",
  abre: "14.05 Responsabilidad de los administradores · 14.06 Cuentas anuales · 6.10 Consolidación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Una sociedad de capital tiene dos órganos necesarios y sus funciones no se solapan.** La **junta general** es la reunión de los socios y es el órgano **soberano**: decide lo esencial y lo estructural. El **órgano de administración** gestiona y representa: hace funcionar la empresa todos los días y la vincula frente a terceros. La junta no administra y los administradores no deciden lo esencial, y esa separación es deliberada.",
            "**Las competencias de la junta son una lista tasada y todas ellas comparten un rasgo: afectan a la posición del socio o a la estructura de la sociedad.** Aprobar las cuentas anuales y decidir la aplicación del resultado; nombrar y separar administradores; modificar los estatutos; aumentar o reducir capital; transformar, fusionar, escindir o trasladar el domicilio al extranjero; disolver; y aprobar la adquisición o enajenación de activos esenciales, entendiendo por tales, con una presunción legal, los que superen el 25 % del valor de los activos del último balance. Todo lo demás corresponde a los administradores.",
            "**La junta no es una reunión que pueda convocarse de cualquier manera, y las formalidades no son adorno: protegen al socio minoritario.** Debe convocarse con la antelación, el medio y el contenido que la ley exige, con **orden del día** que delimita lo que puede tratarse, y con un **derecho de información** que permite al socio pedir aclaraciones antes y durante la sesión. Hay una junta **ordinaria** que debe celebrarse dentro de los seis primeros meses del ejercicio para aprobar las cuentas, y **extraordinarias** para lo demás. Y existe la **junta universal**, que puede celebrarse sin convocatoria previa si está presente todo el capital y todos aceptan por unanimidad el orden del día: es la fórmula habitual en sociedades pequeñas.",
            "**Los acuerdos se adoptan por mayoría, pero la mayoría de qué es una cuestión con enjundia.** En la limitada se cuenta sobre **votos**, con un mínimo de un tercio del capital para los acuerdos ordinarios y mayorías reforzadas para los estructurales; en la anónima se cuenta sobre **capital presente o representado**, con quórums de constitución distintos según el asunto. Los estatutos pueden reforzar las mayorías, pero **no pueden exigir unanimidad**, porque eso convertiría a cualquier socio en titular de un derecho de veto y bloquearía la sociedad.",
            "**El órgano de administración puede estructurarse de cuatro maneras, y la elección tiene consecuencias prácticas grandes.** Administrador **único**; **varios solidarios**, cada uno de los cuales puede actuar por sí; **varios mancomunados**, que deben actuar conjuntamente; o **consejo de administración**, que decide colegiadamente y que es obligatorio a partir de cierto número de miembros. En la limitada los estatutos pueden prever varias formas alternativas y la junta elegir entre ellas sin modificar estatutos, flexibilidad que la anónima no tiene.",
            "**La distinción entre gestión y representación es la que más se confunde y la que más importa frente a terceros.** La **gestión** es interna: cómo se organiza la administración, qué límites le pone la junta, qué autorizaciones necesita. La **representación** es externa: el poder de vincular a la sociedad. Y el punto clave es que el poder de representación de los administradores **se extiende a todo lo comprendido en el objeto social**, de modo que cualquier limitación estatutaria de sus facultades, aunque esté inscrita, **es ineficaz frente al tercero de buena fe**. Un administrador que firma un contrato prohibiéndoselo los estatutos vincula igualmente a la sociedad; lo que ocurre es que responde frente a ella por haberlo hecho.",
            "**Esa asimetría no es un descuido sino la aplicación de la lógica de la ficha 14.01: el tráfico exige que el tercero no tenga que auditar el reglamento interno de su contraparte.** Y explica de paso el diseño entero del gobierno corporativo: como no se puede proteger a la sociedad limitando el poder externo del administrador, hay que protegerla por otras vías —deberes, responsabilidad, control de la junta, separación libre en cualquier momento—. Eso es exactamente lo que desarrolla la ficha siguiente.",
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
            { nom: "Los dos órganos necesarios", sub: "Funciones que no se solapan.", cols: ["junta decide · administración gestiona y representa"] },
            { nom: "Rasgo común de las competencias de la junta", sub: "Por eso son lista tasada.", cols: ["afectan al socio o a la estructura"] },
            { nom: "Activos esenciales", sub: "Presunción legal.", cols: ["> 25 % del activo del último balance"] },
            { nom: "Junta ordinaria", sub: "La del calendario.", cols: ["dentro de los 6 primeros meses del ejercicio"] },
            { nom: "Junta universal", sub: "La fórmula de las sociedades pequeñas.", cols: ["todo el capital presente y unanimidad sobre el orden del día"] },
            { nom: "Cómo se cuenta la mayoría", sub: "Difiere entre formas.", cols: ["limitada por votos · anónima por capital"] },
            { nom: "Límite a las mayorías reforzadas", sub: "Evita el bloqueo.", cols: ["los estatutos no pueden exigir unanimidad"] },
            { nom: "Formas del órgano", sub: "Con flexibilidad extra en la limitada.", cols: ["único · solidarios · mancomunados · consejo"] },
            { nom: "Gestión frente a representación", sub: "Interna frente a externa.", cols: ["organizarse · vincular a la sociedad"] },
            { nom: "La regla decisiva", sub: "Aunque esté inscrita.", cols: ["la limitación de facultades no vale frente al tercero"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: quién tiene que decidir cada cosa",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad limitada tiene un activo total de 4.000.000 € según el último balance aprobado, y su órgano de administración es un administrador único. Repasamos ocho decisiones y quién debe tomarlas.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Decisión", "Importe", "¿Quién decide?", "Por qué"],
          filas: [
            ["Contratar a un director comercial", "—", "Administrador", "Gestión ordinaria"],
            ["Comprar maquinaria", "300.000 €", "Administrador", "7,5 % del activo: no es esencial"],
            ["Vender la nave principal", "1.400.000 €", "Junta general", "35 % del activo: se presume esencial"],
            ["Aprobar las cuentas del ejercicio", "—", "Junta general", "Competencia indelegable de la junta"],
            ["Repartir dividendo", "—", "Junta general", "Aplicación del resultado"],
            ["Abrir una delegación en otra provincia", "—", "Administrador", "Gestión, salvo previsión estatutaria"],
            ["Trasladar el domicilio social al extranjero", "—", "Junta general", "Modificación estructural"],
            { celdas: ["Cesar al administrador único", "—", "Junta general", "En cualquier momento y aunque no conste en el orden del día"], clase: "total" },
          ],
          nota: "La tercera fila es la que separa las dos columnas: **el mismo tipo de operación cambia de órgano según su tamaño relativo**. Vender por 300.000 € es gestión; vender por 1.400.000 € es una decisión de los socios, porque supera el 25 % del activo y la ley presume que altera la estructura de la empresa. Y la última fila recoge una regla singular que conviene retener: **la separación del administrador puede acordarla la junta en cualquier momento, sin causa y aunque el asunto no figure en el orden del día**. Es la contrapartida de que su poder de representación sea prácticamente ilimitado hacia fuera.",
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Importe de la operación (miles de €)", y: "" },
          dominio: { x: [0, 1600], y: [0, 3.4] },
          marcasX: [0, 300, 1000, 1400],
          marcasY: [],
          areas: [
            { puntos: [[0, 1.6], [0, 2.4], [1000, 2.4], [1000, 1.6]], color: "acento" },
            { puntos: [[1000, 1.6], [1000, 2.4], [1560, 2.4], [1560, 1.6]], color: "n3" },
          ],
          notas: [
            { x: 20, y: 2.75, texto: "Activo total de la sociedad: 4.000.000 €", ancla: "start" },
            { x: 480, y: 1.95, texto: "Decide el administrador", ancla: "middle" },
            { x: 1270, y: 1.95, texto: "Decide la junta", ancla: "middle" },
            { x: 1010, y: 1.15, texto: "1.000 = 25 % del activo", ancla: "start" },
            { x: 300, y: 1.15, texto: "compra de maquinaria: 300", ancla: "middle" },
            { x: 1400, y: 0.75, texto: "venta de la nave: 1.400", ancla: "middle" },
            { x: 20, y: 0.25, texto: "La misma clase de operación cambia de órgano al cruzar el umbral del activo esencial.", ancla: "start" },
          ],
          nota: "El umbral del **25 % del activo del último balance** convierte una decisión de gestión en una decisión de los socios sin que cambie la naturaleza de la operación: comprar por 300.000 € es administrar, vender por 1.400.000 € es alterar la estructura de la empresa. Conviene retener que el umbral es **relativo al balance**, de modo que la misma operación puede estar a un lado u otro según el tamaño de la sociedad, y que se mide sobre el **último balance aprobado**, no sobre la situación actual.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El segundo ejemplo mide el alcance de esa asimetría entre gestión y representación**, que es lo que más sorprende de esta ficha. Los estatutos de la sociedad dicen que el administrador necesita autorización de la junta para operaciones superiores a 500.000 €. El administrador firma, sin autorización, la compra de un inmueble por 900.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Pregunta", "Respuesta", "Fundamento"],
          filas: [
            ["¿Queda vinculada la sociedad frente al vendedor?", "Sí, por los 900.000 €", "El poder de representación cubre todo el objeto social"],
            ["¿Importa que la limitación estuviera inscrita?", "No", "Las limitaciones de facultades son ineficaces frente a terceros"],
            ["¿Y si el vendedor conocía la limitación y el incumplimiento?", "Puede decaer la protección", "La buena fe es el presupuesto de toda la construcción"],
            ["¿Responde el administrador frente a la sociedad?", "Sí", "Ha infringido un deber interno y responde del daño"],
            { celdas: ["¿Puede la junta cesarlo?", "Sí, inmediatamente y sin causa", "Separación libre en cualquier momento"], clase: "total" },
          ],
          nota: "Las cinco respuestas se derivan de una sola idea: **el ordenamiento sacrifica la protección de la sociedad para proteger la seguridad del tráfico, y compensa a la sociedad por dentro**. No puede impedir que su administrador la vincule, pero puede exigirle responsabilidad y echarlo el mismo día. Quien viene de la contabilidad reconocerá el patrón: es la misma lógica del Registro de la ficha 14.01, según la cual lo que un tercero no puede razonablemente conocer no debe perjudicarle.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el problema de agencia con nombres jurídicos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 9.06 planteaba el problema de agencia en términos económicos: cuando quien decide no es quien soporta las consecuencias, sus intereses divergen y hace falta un diseño de incentivos. El derecho de sociedades es, casi en su totalidad, una respuesta a ese problema, y merece la pena traducir sus instituciones a ese lenguaje.",
            "**El principal es el socio y el agente es el administrador**, y la divergencia es previsible: el administrador puede preferir crecer aunque destruya valor, porque dirige una empresa mayor; puede preferir el riesgo, porque comparte la ganancia y no la pérdida; puede contratar con sociedades de su familia; o simplemente puede no esforzarse. Ninguna de esas conductas es delictiva por sí misma y todas reducen el valor de lo que el socio posee.",
            "**Los instrumentos jurídicos se dejan clasificar en cuatro familias, y cada una ataca un punto distinto.** El **reparto de competencias** de esta ficha sustrae al agente las decisiones donde el conflicto sería más agudo: no puede modificar los estatutos, ni emitir capital, ni vender lo esencial, ni decidir su propia retribución. Los **deberes de diligencia y lealtad** de la ficha 14.05 fijan un estándar de conducta exigible. La **responsabilidad** convierte el incumplimiento en un coste personal. Y la **transparencia** —cuentas, informe de gestión, auditoría de la ficha 14.06— permite que el principal observe lo que el agente hace.",
            "**Falta un quinto instrumento, y es el más contundente de todos: la separación libre.** La junta puede cesar al administrador en cualquier momento, sin alegar causa, sin indemnización legal y aunque el asunto no figurase en el orden del día. Es una regla imperativa que los estatutos no pueden suavizar, y su función es exactamente la que la teoría de la agencia predice: **cuando el control judicial de la conducta es caro y lento, el mejor mecanismo es la revocabilidad inmediata**.",
            "**Ahora bien, en la empresa española real el problema de agencia clásico es minoritario**, y conviene decirlo porque cambia el diagnóstico. La estructura dominante es la sociedad con capital concentrado, en la que los socios de control **son** los administradores. Ahí el conflicto no es entre propiedad y gestión sino **entre mayoría y minoría**: el riesgo no es que el gestor se relaje, sino que el socio mayoritario extraiga valor por vías que no pasan por el dividendo —salarios desproporcionados, operaciones con partes vinculadas, no repartir nunca beneficios—.",
            "**Y el derecho ha ido respondiendo a ese segundo problema con herramientas propias**, que conviene conocer porque son las que un socio minoritario español usará de verdad: el deber de abstención del socio en conflicto de interés, el régimen reforzado de las operaciones vinculadas, la impugnación de acuerdos abusivos —los adoptados por la mayoría en interés propio y sin necesidad razonable— y el derecho de separación cuando la sociedad deja de repartir dividendos de forma sostenida pese a tener beneficios. La última es especialmente elocuente: **el ordenamiento acabó reconociendo que negar el dividendo indefinidamente es una forma de expropiar al minoritario.**",
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
            { t: "Creer que los socios pueden dar instrucciones vinculantes sobre la gestión diaria", d: "La junta decide lo esencial y lo estructural, no cómo se administra. Puede impartir instrucciones o someter decisiones a autorización si los estatutos lo prevén, pero no sustituye al órgano de administración, y sus limitaciones no afectan al poder de representación frente a terceros." },
            { t: "Pensar que una limitación estatutaria de facultades protege a la sociedad frente a terceros", d: "No la protege, aunque esté inscrita. El poder de representación se extiende a todo lo comprendido en el objeto social, así que el administrador vincula a la sociedad aunque infrinja el límite. Lo que ocurre es que responde frente a ella y puede ser cesado inmediatamente." },
            { t: "Confundir gestión con representación", d: "La gestión es interna —cómo se organiza la administración y qué límites tiene— y la representación es externa —el poder de vincular a la sociedad—. Casi todos los errores de esta materia consisten en trasladar al plano externo una regla que solo opera en el interno." },
            { t: "Olvidar el umbral del activo esencial", d: "Una operación que supere el 25 % del valor de los activos del último balance se presume esencial y corresponde a la junta. El mismo tipo de decisión cambia de órgano según su tamaño relativo, y ese cambio no depende de lo que digan los estatutos." },
            { t: "Redactar estatutos que exijan unanimidad", d: "No es posible: convertiría a cualquier socio en titular de un derecho de veto y bloquearía la sociedad. Los estatutos pueden reforzar las mayorías, y a menudo conviene hacerlo para los acuerdos estructurales, pero hay un tope que la ley no deja rebasar." },
            { t: "Analizar la empresa española con el problema de agencia clásico", d: "El conflicto dominante no es entre propiedad dispersa y gestor profesional, porque el capital está concentrado y los socios de control administran. El conflicto real es entre mayoría y minoría, y las herramientas útiles son otras: abstención en conflicto de interés, operaciones vinculadas, impugnación de acuerdos abusivos y separación por falta de dividendos." },
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
            "El reparto de poder dentro de la sociedad tiene traducciones directas en la contabilidad y en la estadística, algunas poco evidentes.",
          ],
          lista: [
            "La **aprobación de las cuentas por la junta** es lo que las convierte en definitivas, y hasta entonces son un proyecto. La ficha 14.06 y la 5.10 describen ese documento; esta explica quién lo hace nacer y en qué plazo.",
            "La **aplicación del resultado**, competencia exclusiva de la junta, decide cuánto beneficio se convierte en dividendo. En las cuentas nacionales ese reparto es la operación **D.421** de la ficha 12.04, y determina cuánta renta de las sociedades acaba en los hogares y cuánta se queda dentro como ahorro empresarial.",
            "El **control** que esta ficha describe jurídicamente es el mismo concepto que la ficha **12.01** usa para sectorizar: lo que decide si una unidad pertenece a un grupo, o si una sociedad pública se clasifica en administraciones públicas, es quién tiene la capacidad efectiva de determinar la política general. La junta y el consejo son donde eso se ejerce.",
            "La ficha **6.10**, sobre consolidación, parte precisamente de ahí: el perímetro de un grupo se define por control, y el control se identifica con la mayoría de votos en la junta o la facultad de nombrar administradores.",
            "Y el **conflicto entre mayoría y minoría** explica un fenómeno visible en las cuentas: sociedades con beneficios sostenidos y dividendos nulos durante años. En la contabilidad nacional eso aparece como ahorro elevado del sector sociedades; en el derecho, como el problema que llevó a crear un derecho de separación por falta de reparto.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el derecho de sociedades no reparte competencias por afán ordenancista: las reparte donde el conflicto de intereses sería más grave**. Cada competencia que la ley reserva a la junta señala un punto en el que se temió que el administrador decidiera en su propio beneficio, y leer la lista al revés es un buen mapa de dónde está el riesgo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué tienen en común todas las competencias reservadas a la junta general?", a: "Que afectan a la posición del socio o a la estructura de la sociedad: cuentas y resultado, nombramiento y cese de administradores, estatutos, capital, modificaciones estructurales, disolución y activos esenciales. Todo lo demás corresponde a los administradores." },
            { q: "Una sociedad con 4.000.000 € de activo vende una nave por 1.400.000 €. ¿Quién decide?", a: "La junta general. Supera el 25 % del valor de los activos del último balance, umbral a partir del cual la ley presume que el activo es esencial. Vender por 300.000 €, en cambio, sería gestión ordinaria del administrador: el mismo tipo de operación cambia de órgano según su tamaño relativo." },
            { q: "Los estatutos exigen autorización de la junta por encima de 500.000 € y el administrador firma 900.000 € sin ella. ¿Vale el contrato?", a: "Sí. El poder de representación se extiende a todo lo comprendido en el objeto social y las limitaciones de facultades son ineficaces frente al tercero de buena fe, aunque estén inscritas. El administrador responde frente a la sociedad y puede ser cesado, pero el contrato vincula." },
            { q: "¿Por qué la junta puede cesar al administrador sin causa y sin que figure en el orden del día?", a: "Porque es la contrapartida de que su poder hacia fuera sea prácticamente ilimitado. Cuando el control judicial de la conducta es caro y lento, el mecanismo eficaz es la revocabilidad inmediata. Es una regla imperativa que los estatutos no pueden suavizar." },
            { q: "¿Pueden los estatutos exigir unanimidad para un acuerdo?", a: "No. Convertiría a cualquier socio en titular de un derecho de veto y bloquearía la sociedad. Los estatutos pueden reforzar las mayorías, y suele convenir hacerlo para los acuerdos estructurales, pero la unanimidad queda fuera del margen que la ley concede." },
            { q: "¿Cuál es el conflicto de agencia dominante en la empresa española y con qué herramientas se aborda?", a: "No el clásico entre propiedad dispersa y gestor profesional, sino el que enfrenta a mayoría y minoría, porque el capital está concentrado y quien controla administra. Las herramientas propias son el deber de abstención en conflicto de interés, el régimen de operaciones vinculadas, la impugnación de acuerdos abusivos y el derecho de separación por falta de dividendos." },
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
            { ref: "Ley de Sociedades de Capital, títulos V y VI", nota: "junta general y administración; los artículos sobre representación y sobre separación de administradores son los centrales de esta ficha." },
            { ref: "CNMV, Código de buen gobierno de las sociedades cotizadas", nota: "cómo se ajusta la frontera cuando el capital sí está disperso; útil aunque no se aplique a sociedades pequeñas." },
            { ref: "Paz-Ares, artículos sobre el interés social y el deber de lealtad", nota: "la discusión doctrinal española más influyente sobre para quién administra el administrador." },
            { ref: "Jensen y Meckling, Theory of the Firm (1976)", nota: "el planteamiento económico del problema de agencia que el derecho societario traduce en normas." },
            { ref: "Jurisprudencia sobre impugnación de acuerdos abusivos y derecho de separación por dividendos", nota: "la vía práctica del socio minoritario español; los casos son muy instructivos." },
          ],
        },
      ],
    },
  ],
};
