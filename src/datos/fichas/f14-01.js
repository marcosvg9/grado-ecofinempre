/* Ficha 14.01 — El empresario, las fuentes del derecho mercantil y el Registro Mercantil. */

export default {
  codigo: "14.01",
  titulo: "El empresario, las fuentes del derecho mercantil y el Registro Mercantil",
  nivel: 2,
  bloque: "Derecho de la empresa",
  tiempo: "3 h",
  nucleo:
    "El derecho mercantil no es una rama del derecho civil con nombre distinto: nació de los usos de los comerciantes medievales y conserva de aquel origen su rasgo definitorio, que la costumbre pese más que en cualquier otro sector del ordenamiento. Y el Registro Mercantil es lo que convierte un acuerdo privado en algo oponible a quien no lo firmó.",
  requiere: "9.02 Análisis del entorno · 5.01 Patrimonio y ecuación fundamental",
  abre: "14.02 Formas jurídicas · 14.06 Cuentas anuales · 14.07 Contratos mercantiles",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Antes de nada conviene una advertencia que vale para todo el bloque: el derecho positivo cambia, y este plan no puede ir detrás de cada reforma.** Los conceptos, la estructura y la lógica de los institutos jurídicos son estables y son lo que estas diez fichas enseñan. Las **cifras concretas** —capitales mínimos, umbrales de auditoría, plazos, tipos impositivos, cuantías de sanciones— **cambian con frecuencia y hay que comprobarlas siempre en el texto vigente del BOE** antes de usarlas para nada real. Cuando aparezca una cifra aquí, tómese como orden de magnitud y como soporte del razonamiento, nunca como dato de trabajo.",
            "**El derecho mercantil es derecho privado especial**, y esa doble condición explica casi todo. Es **privado** porque regula relaciones entre particulares en pie de igualdad, no entre el ciudadano y el poder público. Y es **especial** porque se aplica solo a un ámbito —el tráfico de empresa— y desplaza en él al derecho común. Cuando el mercantil no regula algo, se acude al civil como derecho supletorio; el civil no desplaza nunca al mercantil.",
            "**Su origen explica su rasgo más peculiar.** Nació en las ciudades comerciales de la baja Edad Media como derecho de una clase profesional, elaborado por los propios mercaderes a partir de sus prácticas y aplicado por sus propios tribunales consulares. De ahí que el **Código de Comercio de 1885** todavía diga, en su artículo 2, que los actos de comercio se rigen por el propio Código, **en su defecto por los usos del comercio**, y solo en último término por el derecho común. Es de los pocos sectores del ordenamiento español donde la **costumbre precede a la ley civil** en el orden de prelación, y no es una reliquia: sigue resolviendo litigios reales sobre plazos de entrega, calidades y prácticas de un sector.",
            "**El sujeto central del sistema es el empresario, y su definición es funcional, no formal.** Es empresario quien ejerce **en nombre propio**, de forma **habitual** y con **ánimo de lucro**, una actividad de producción o intercambio de bienes o servicios organizando medios materiales y humanos. Ninguno de esos elementos es prescindible: quien vende su coche no es empresario porque falta la habitualidad, un empleado no lo es porque no actúa en nombre propio, y una asociación sin ánimo de lucro no lo es por el tercer requisito, aunque tenga trabajadores y facture.",
            "**Ese estatuto no es un honor sino un paquete de obligaciones y de ventajas.** El empresario debe **llevar contabilidad ordenada** —libro diario y libro de inventarios y cuentas anuales—, **conservarla seis años**, y en el caso de las sociedades **inscribirse y depositar sus cuentas**. A cambio obtiene un régimen adaptado a la rapidez del tráfico: presunción de solidaridad en las obligaciones, prescripción más corta, régimen probatorio propio de los libros y acceso a instituciones que el derecho civil no ofrece.",
            "**El Registro Mercantil es la pieza institucional que hace funcionar todo lo demás, y su función se entiende con una sola palabra: publicidad.** El tráfico exige que quien contrata con una sociedad pueda saber, sin preguntar y sin fiarse, quién la representa y hasta dónde llega su poder. El Registro convierte determinados hechos en **oponibles a terceros** una vez inscritos y publicados, y protege a quien confió en lo publicado aunque la realidad fuese otra. Es un registro **de personas**, organizado por sujeto y no por bienes, a diferencia del Registro de la Propiedad.",
            "**Sus dos principios operativos son el de legitimación y el de fe pública, y conviene distinguirlos.** Por el de **legitimación**, lo inscrito se presume exacto y válido mientras no se declare lo contrario. Por el de **fe pública**, el tercero de buena fe que contrató confiando en lo inscrito queda protegido aunque el asiento fuese inexacto. La consecuencia práctica es asimétrica y muy útil de recordar: **lo no inscrito no perjudica al tercero de buena fe, pero lo inscrito le beneficia**. Revocar el poder de un apoderado y no inscribirlo deja a la sociedad vinculada por lo que ese apoderado haga con quien ignoraba la revocación.",
            "**Una última precisión que el bloque necesitará más adelante.** Para las sociedades de capital la inscripción es **constitutiva**: la sociedad no existe como tal hasta que se inscribe, y antes de eso hay una sociedad en formación con un régimen de responsabilidad distinto. Para el empresario individual, en cambio, la inscripción es **potestativa**, y de hecho la mayoría de los autónomos españoles no está inscrita. Esa diferencia tendrá consecuencias en la ficha siguiente.",
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
            { nom: "Qué es el derecho mercantil", sub: "Las dos palabras que lo definen.", cols: ["derecho privado especial del tráfico de empresa"] },
            { nom: "Prelación de fuentes", sub: "El uso antes que el derecho común.", cols: ["ley mercantil → usos del comercio → derecho civil"] },
            { nom: "Definición de empresario", sub: "Funcional: los cuatro a la vez.", cols: ["nombre propio · habitual · ánimo de lucro · organización"] },
            { nom: "Obligaciones básicas", sub: "El precio del estatuto.", cols: ["contabilidad ordenada · conservación · inscripción"] },
            { nom: "Función del Registro", sub: "Que el tercero no tenga que fiarse.", cols: ["publicidad material y formal"] },
            { nom: "Cómo se organiza", sub: "A diferencia del de la Propiedad.", cols: ["por sujetos, no por bienes"] },
            { nom: "Principio de legitimación", sub: "Lo inscrito se presume cierto.", cols: ["mientras no se declare lo contrario"] },
            { nom: "Principio de fe pública", sub: "Protege a quien confió.", cols: ["aunque el asiento fuese inexacto"] },
            { nom: "La regla asimétrica", sub: "La que resuelve la mayoría de los casos.", cols: ["lo no inscrito no perjudica · lo inscrito beneficia"] },
            { nom: "Efecto de la inscripción", sub: "No es igual para todos.", cols: ["constitutiva en sociedades · potestativa en autónomos"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: qué se publica y qué no",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El Registro no publica todo lo que ocurre en una sociedad, sino una lista tasada de actos. Saber qué está dentro y qué está fuera evita dos errores contrarios: creer que el Registro garantiza cosas que no garantiza, y no inscribir algo que debía inscribirse.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Hecho", "¿Se inscribe?", "Consecuencia de no hacerlo"],
          filas: [
            ["Constitución de la sociedad", "Sí, constitutiva", "No hay sociedad de capital: los socios responden personalmente"],
            ["Nombramiento y cese de administradores", "Sí", "El cesado sigue apareciendo como representante frente a terceros"],
            ["Poderes generales y su revocación", "Sí", "El apoderado revocado sigue vinculando a la sociedad frente al tercero de buena fe"],
            ["Cambio de domicilio social u objeto", "Sí", "No es oponible al tercero que confió en el domicilio publicado"],
            ["Aumento o reducción de capital", "Sí", "La operación no despliega efectos frente a terceros"],
            ["Depósito de las cuentas anuales", "Sí, anual", "Cierre registral: no se inscribe casi nada más, y multa"],
            ["Disolución, liquidación y extinción", "Sí", "La sociedad sigue viva a efectos registrales"],
            ["Transmisión de participaciones de una sociedad limitada", "No", "Consta en el libro registro de socios, que es privado"],
            ["Un contrato de suministro con un cliente", "No", "Ninguna: es un contrato ordinario entre partes"],
            { celdas: ["Un pacto parasocial entre los socios", "No, por regla general", "Vincula a quienes lo firmaron, pero no a la sociedad ni a terceros"], clase: "total" },
          ],
          nota: "Las dos últimas filas son las que más sorprenden. **Quién es socio de una sociedad limitada no consta en el Registro Mercantil**: consta en un libro privado que lleva la propia sociedad, de modo que la información sobre propiedad es mucho más opaca que la información sobre administración. Y un **pacto parasocial** —el acuerdo entre socios sobre cómo votarán, cómo se repartirán cargos o cómo saldrán de la sociedad— es válido y obligatorio entre ellos, pero **no es oponible a la sociedad**: un acuerdo social adoptado contra lo pactado es válido, y el socio incumplidor responde por daños frente a los otros, no frente al mundo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El caso del apoderado revocado merece detenerse, porque es el ejemplo de manual de la asimetría.** Una sociedad otorga un poder general a una persona, lo inscribe, y años después lo revoca en documento notarial **sin inscribir la revocación**. El antiguo apoderado firma un contrato de compra de mercancía por 80.000 € con un proveedor que consulta el Registro y ve el poder vigente.",
          ],
        },
        {
          tipo: "grafico",
          alto: 350,
          ejes: { x: "", y: "" },
          dominio: { x: [0, 10], y: [0, 4.6] },
          marcasX: [],
          marcasY: [],
          areas: [
            { puntos: [[0.2, 3.3], [0.2, 4.0], [3.1, 4.0], [3.1, 3.3]], color: "acento" },
            { puntos: [[3.5, 3.3], [3.5, 4.0], [6.4, 4.0], [6.4, 3.3]], color: "n2" },
            { puntos: [[6.8, 3.3], [6.8, 4.0], [9.7, 4.0], [9.7, 3.3]], color: "n1" },
            { puntos: [[0.2, 1.5], [0.2, 2.4], [4.7, 2.4], [4.7, 1.5]], color: "n3" },
            { puntos: [[5.2, 1.5], [5.2, 2.4], [9.7, 2.4], [9.7, 1.5]], color: "n3" },
          ],
          notas: [
            { x: 0.2, y: 4.32, texto: "ORDEN DE FUENTES DEL DERECHO MERCANTIL", ancla: "start" },
            { x: 1.65, y: 3.58, texto: "1. Ley mercantil", ancla: "middle" },
            { x: 4.95, y: 3.58, texto: "2. Usos del comercio", ancla: "middle" },
            { x: 8.25, y: 3.58, texto: "3. Derecho civil", ancla: "middle" },
            { x: 0.2, y: 2.95, texto: "El único sector donde la costumbre precede al derecho común.", ancla: "start" },
            { x: 2.45, y: 2.03, texto: "Lo NO inscrito", ancla: "middle" },
            { x: 2.45, y: 1.68, texto: "no perjudica al tercero de buena fe", ancla: "middle" },
            { x: 7.45, y: 2.03, texto: "Lo inscrito", ancla: "middle" },
            { x: 7.45, y: 1.68, texto: "le beneficia aunque no lo consultara", ancla: "middle" },
            { x: 0.2, y: 1.05, texto: "LA REGLA ASIMÉTRICA DEL REGISTRO", ancla: "start" },
            { x: 0.2, y: 0.45, texto: "De ahí que revocar un poder sin inscribirlo deje a la sociedad vinculada, y que", ancla: "start" },
            { x: 0.2, y: 0.1, texto: "quien conocía la revocación no pueda ampararse en la publicidad registral.", ancla: "start" },
          ],
          nota: "Las dos mitades del gráfico son las dos ideas de la ficha. **Arriba**, el orden de fuentes: que los usos del comercio precedan al derecho civil es una herencia directa del origen gremial del mercantil, y no una reliquia —sigue resolviendo litigios sobre plazos, calidades y prácticas de un sector—. **Abajo**, la asimetría registral, que resuelve por sí sola la mayoría de los casos prácticos: el Registro no garantiza la verdad, **protege la confianza**, y por eso solo ampara a quien ignoraba la realidad.",
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "¿Queda vinculada la sociedad?", "Por qué"],
          filas: [
            ["Revocación no inscrita, proveedor de buena fe", "Sí, por los 80.000 €", "Lo no inscrito no perjudica al tercero de buena fe"],
            ["Revocación inscrita y publicada", "No", "Lo inscrito es oponible aunque el tercero no lo consultara"],
            ["Revocación no inscrita, pero el proveedor la conocía", "No", "Falta la buena fe: la protección solo alcanza a quien ignoraba"],
            { celdas: ["El apoderado nunca tuvo poder inscrito", "Depende de la apariencia creada", "Sin inscripción no hay protección registral, pero puede haber apoderamiento aparente"], clase: "total" },
          ],
          nota: "Las cuatro filas se resuelven con la misma regla y ninguna requiere memorizar nada: **el Registro protege la confianza, no la verdad**. Quien no inscribe soporta el coste de que otros confíen en lo publicado; quien conoce la realidad no puede ampararse en la publicidad. Y la última fila enseña que el Registro no agota la protección del tercero: la apariencia creada por la propia empresa —una persona que siempre firmó los pedidos, con tarjeta, correo y despacho— puede vincularla aunque nunca hubiese poder inscrito.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué un registro público abarata el crédito",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Es tentador ver el Registro Mercantil como burocracia: papeleo, aranceles y plazos que retrasan operaciones. Merece la pena hacer el razonamiento contrario, porque explica por qué todos los países desarrollados tienen uno y por qué su calidad se correlaciona con el coste de financiarse.",
            "**Imagínese un tráfico sin registro.** Un proveedor al que le piden 80.000 € de mercancía a crédito tendría que verificar por su cuenta que la sociedad existe, que quien firma la representa, que el poder sigue vigente, que el objeto social cubre la operación y que el patrimonio no está ya comprometido. Esa verificación cuesta dinero y tiempo, y hay que repetirla en cada operación y con cada contraparte. El resultado previsible es que **el crédito comercial se encarece o simplemente no se concede**, y solo sobreviven las relaciones entre quienes ya se conocen.",
            "**El Registro convierte ese coste privado y repetido en un coste público y único.** La verificación la hace el registrador una vez, bajo su responsabilidad, y el resultado queda disponible para todos. En términos de la ficha 9.02, elimina una fricción informativa que operaba como barrera de entrada: sin registro, la reputación personal sustituye a la información, y quien no la tiene queda fuera del mercado por muy solvente que sea.",
            "**La contrapartida es el coste de mantener el sistema, y no es despreciable.** Aranceles notariales y registrales, tiempo de tramitación y la obligación anual de depositar cuentas. Cuando ese coste se vuelve alto en relación con el tamaño de la empresa, aparece un efecto perverso: las más pequeñas se quedan en formas jurídicas sin registro o directamente en la informalidad. Buena parte de las reformas mercantiles de las últimas décadas —sociedad limitada de constitución telemática, capital mínimo reducido, plazos abreviados— ha ido dirigida exactamente a bajar ese umbral.",
            "**Y hay una consecuencia estadística que este plan puede apreciar mejor que un manual de derecho.** Como el depósito de cuentas es obligatorio y público, existe en España una base de datos con las cuentas de cientos de miles de sociedades. De ahí salen la Central de Balances del Banco de España y buena parte de las estimaciones del sector sociedades no financieras en la contabilidad nacional. **Una obligación registral pensada para proteger a los acreedores acaba siendo la fuente primaria del PIB de un sector entero.**",
            "**La moraleja excede el Registro.** Las instituciones jurídicas que parecen puro trámite suelen estar resolviendo un problema económico concreto, casi siempre de información asimétrica. Preguntarse qué fricción elimina una norma antes de juzgarla como burocracia es un buen hábito, y el resto del bloque lo aplicará a la responsabilidad limitada, a la auditoría y al concurso.",
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
            { t: "Creer que el derecho mercantil es una especialidad del civil", d: "Es derecho privado especial: se aplica al tráfico de empresa y desplaza en él al común. El civil actúa como supletorio cuando el mercantil no regula algo, nunca al revés. Y en el orden de fuentes mercantil los usos del comercio van por delante del derecho civil, cosa insólita en el resto del ordenamiento." },
            { t: "Llamar empresario a quien cumple solo alguno de los requisitos", d: "Hacen falta los cuatro a la vez: nombre propio, habitualidad, ánimo de lucro y organización de medios. Quien vende su coche no lo es por falta de habitualidad, un empleado no lo es porque no actúa en nombre propio, y una asociación sin ánimo de lucro no lo es aunque tenga plantilla y facture." },
            { t: "Suponer que el Registro Mercantil dice quién es dueño de una sociedad limitada", d: "No lo dice. Las transmisiones de participaciones constan en el libro registro de socios, que lleva la propia sociedad y es privado. La información sobre administración es pública; la información sobre propiedad, mucho más opaca." },
            { t: "Revocar un poder sin inscribir la revocación", d: "Lo no inscrito no perjudica al tercero de buena fe, así que el antiguo apoderado sigue vinculando a la sociedad frente a quien confió en el Registro. Es el error caro por excelencia, y la regla que lo explica también dice que quien conocía la revocación no queda protegido: la fe pública ampara la confianza, no la mala fe." },
            { t: "Pensar que un pacto parasocial obliga a la sociedad", d: "Vincula a los socios que lo firmaron y genera responsabilidad por daños entre ellos, pero no es oponible a la sociedad ni a terceros: un acuerdo social adoptado contra lo pactado es válido. Por eso los pactos importantes acaban trasladándose a los estatutos, que sí se inscriben." },
            { t: "Tratar la inscripción como un trámite uniforme", d: "Para las sociedades de capital es constitutiva: no hay sociedad hasta que se inscribe, y antes existe una sociedad en formación con otro régimen de responsabilidad. Para el empresario individual es potestativa, y de hecho la mayoría de los autónomos españoles no está inscrita." },
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
            "Este bloque parece el más alejado del resto del plan y resulta ser el que lo sostiene por debajo: casi todos los datos que las fichas anteriores han usado nacen de obligaciones jurídicas.",
          ],
          lista: [
            "El **depósito obligatorio de cuentas** es la razón de que exista información contable de cientos de miles de sociedades españolas. De ahí salen la Central de Balances y buena parte de la estimación del sector sociedades no financieras que usaban las fichas 12.02 y 12.03. La ficha 14.06 lo desarrolla.",
            "La **obligación de llevar contabilidad ordenada** del Código de Comercio es el origen remoto del Plan General Contable del bloque 5: sin un deber legal de registrar, no habría normalización, y sin normalización no habría agregación posible.",
            "El **Registro Mercantil como registro de sujetos** es la fuente para saber qué unidades existen, y por tanto para construir los directorios de empresas de los que parten las encuestas del INE. El marco poblacional de casi toda la estadística económica es, en último término, registral.",
            "Y la distinción entre **inscripción constitutiva y potestativa** anticipa un punto que la ficha 14.02 desarrollará con detalle: la forma jurídica de una unidad y su sector institucional en el SEC son dos clasificaciones distintas que no coinciden, aunque a menudo se confundan.",
            "La lección de método vale para todo el bloque: donde el economista ve un dato, suele haber detrás **una obligación jurídica que hizo que ese dato existiera**. Cambiar la obligación cambia el dato, y por eso las reformas mercantiles tienen efectos estadísticos que nadie buscaba.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el Registro no garantiza la verdad sino que protege la confianza**, y que esa función aparentemente modesta es la que permite contratar con desconocidos. Todo el bloque desarrolla variaciones del mismo problema: cómo hacer que un tercero pueda fiarse de algo que no ha visto.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué significa que el derecho mercantil sea «privado especial»?", a: "Privado, porque regula relaciones entre particulares en pie de igualdad y no entre el ciudadano y el poder público. Especial, porque se aplica solo al tráfico de empresa y desplaza en él al derecho común, que actúa como supletorio. Además, en su orden de fuentes los usos del comercio van por delante del derecho civil." },
            { q: "¿Qué cuatro requisitos definen a un empresario?", a: "Actuar en nombre propio, de forma habitual, con ánimo de lucro y organizando medios materiales y humanos para producir o intercambiar bienes o servicios. Los cuatro a la vez: si falta uno, no hay empresario, y de ahí que ni el empleado ni la asociación sin ánimo de lucro lo sean." },
            { q: "Una sociedad revoca un poder ante notario pero no lo inscribe. ¿Queda vinculada por lo que firme el antiguo apoderado?", a: "Sí, frente al tercero de buena fe, porque lo no inscrito no le perjudica. Si el tercero conocía la revocación, no: la fe pública protege la confianza, no la mala fe. Y si la revocación se hubiera inscrito, sería oponible aunque el tercero no consultara el Registro." },
            { q: "¿Consta en el Registro Mercantil quién es socio de una sociedad limitada?", a: "No. Las transmisiones de participaciones constan en el libro registro de socios, que lleva la propia sociedad y es privado. El Registro publica quién administra, no quién posee, de modo que la información sobre propiedad es bastante más opaca que la de administración." },
            { q: "¿Obliga un pacto parasocial a la sociedad?", a: "No. Vincula a los socios firmantes y genera responsabilidad por daños entre ellos, pero no es oponible a la sociedad ni a terceros: un acuerdo social adoptado contra lo pactado sigue siendo válido. Por eso lo que se quiere hacer valer frente a todos acaba en los estatutos, que sí se inscriben." },
            { q: "¿Qué problema económico resuelve el Registro Mercantil?", a: "Una asimetría de información. Sin él, cada contraparte tendría que verificar por su cuenta y en cada operación quién representa a una sociedad y hasta dónde llega su poder. El Registro convierte ese coste privado y repetido en uno público y único, y por esa vía abarata el crédito comercial y permite contratar con desconocidos." },
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
            { ref: "Código de Comercio de 1885, título preliminar y libro I", nota: "las fuentes, el concepto de empresario y las obligaciones contables; conviene leer el artículo 2 despacio." },
            { ref: "Reglamento del Registro Mercantil (RD 1784/1996)", nota: "qué actos son inscribibles y con qué efectos; la lista tasada del ejemplo numérico sale de aquí." },
            { ref: "Broseta y Martínez Sanz, Manual de Derecho Mercantil", nota: "el manual de referencia en España; los capítulos iniciales cubren esta ficha con detalle." },
            { ref: "Colegio de Registradores, Estadística Mercantil", nota: "datos de constituciones, disoluciones y depósitos; útil para ver el tamaño real del sistema." },
            { ref: "BOE, texto consolidado de cada norma", nota: "imprescindible: las cifras y plazos de todo este bloque cambian, y el consolidado del BOE es la única versión fiable." },
          ],
        },
      ],
    },
  ],
};
