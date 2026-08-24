/* Ficha 13.08 — La formación de capital (P.5): activos fijos, existencias y objetos valiosos. */

export default {
  codigo: "13.08",
  titulo: "La formación de capital (P.5): activos fijos, existencias y objetos valiosos",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "Invertir en cuentas nacionales no es lo que se entiende por invertir en el lenguaje corriente: comprar acciones no lo es y comprar un cuadro sí. El criterio no es la intención de quien gasta, sino si lo adquirido es un activo producido que se queda en la economía.",
  requiere: "13.03 El consumo intermedio · 12.09 Cuentas de acumulación",
  abre: "13.09 Activos no producidos · 13.10 Balances y revalorizaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**La formación bruta de capital (P.5) recoge lo que la economía produce en un período y no consume en él.** Tiene tres componentes que se comportan de forma muy distinta: la **formación bruta de capital fijo (P.51g)**, la **variación de existencias (P.52)** y las **adquisiciones menos cesiones de objetos valiosos (P.53)**. Los tres son inversión en el sentido del SEC, y ninguno de los tres tiene nada que ver con comprar activos financieros, que es lo que la palabra «inversión» significa en el lenguaje corriente y que en el sistema es una operación **F**, no una **P**.",
            "**La formación bruta de capital fijo es la parte grande y la que se clasifica por tipo de activo.** El SEC 2010 distingue **viviendas (AN.111)**, **otros edificios y estructuras (AN.112)** —naves, oficinas, carreteras, puertos—, **maquinaria y bienes de equipo (AN.113)**, **sistemas de armamento (AN.114)**, **recursos biológicos cultivados (AN.115)** —viñedos, olivares, ganado reproductor— y **productos de la propiedad intelectual (AN.117)**, que agrupan investigación y desarrollo, prospección minera, software y bases de datos, y originales de obras literarias o artísticas. Hay además una categoría especial, los **costes de transmisión de la propiedad de activos no producidos (AN.116)**, que la ficha siguiente explica.",
            "**Dos de esas categorías son novedad del SEC 2010 y las dos elevaron el PIB.** La capitalización de la **I+D** es la que la ficha 13.01 usó como ejemplo; los **sistemas de armamento** son la otra, y su lógica es exactamente igual de sólida: una fragata o un carro de combate prestan servicio durante décadas, así que no se consumen en el acto de defender. El resultado es que buena parte del gasto militar en equipos pasó a ser **inversión pública**.",
            "**La variación de existencias es la partida más pequeña y la más problemática del sistema.** Recoge la diferencia entre lo que entra y lo que sale de los almacenes: materias primas, productos en curso, productos terminados y mercancías para reventa. Es pequeña en nivel y **enorme en volatilidad**, porque en una recesión las empresas dejan de reponer y la partida se hunde, arrastrando al PIB. Y tiene una dificultad técnica seria: hay que registrar solo el **volumen** que entra y sale, excluyendo las **ganancias por tenencia** que se producen porque el precio de lo almacenado ha cambiado mientras estaba en el almacén. Si el petróleo sube un cincuenta por ciento con los depósitos llenos, el propietario se ha enriquecido, pero **eso no es producción de nadie** y tiene que ir a la cuenta de revalorización de la ficha 13.10, no al PIB.",
            "**Los objetos valiosos son la categoría más curiosa y la que mejor ilumina el criterio del sistema.** Son bienes que se adquieren como **depósito de valor**: metales y piedras preciosas no destinados a producir, antigüedades, obras de arte, joyas. No se consumen, no prestan servicios productivos y **no se deprecian**, así que no generan consumo de capital fijo. Y sin embargo son formación de capital, porque son bienes producidos que la economía retiene. Un cuadro comprado para el vestíbulo de una empresa es inversión; las acciones compradas con el mismo dinero no lo son.",
            "**El criterio general que unifica los tres componentes conviene enunciarlo con claridad, porque es el que resuelve todos los casos dudosos.** Es formación de capital la adquisición de un **activo producido** que **permanece en la economía** para prestar servicio, almacenar valor o venderse más adelante. De ahí las tres exclusiones que más se equivocan: comprar **acciones o bonos** no es inversión sino una operación financiera, porque no hay activo producido; comprar un **terreno** tampoco lo es, porque el terreno no lo ha producido nadie y va al NP de la ficha siguiente; y comprar un **bien duradero de consumo** —un coche particular, una lavadora— tampoco lo es, porque el hogar lo consume, con la única y famosa excepción de la **vivienda**.",
            "**Esa excepción merece cerrar la ficha porque es la que más consecuencias tiene.** Una vivienda comprada por un hogar es **formación bruta de capital fijo**, no consumo, porque en el SEC el propietario produce con ella un servicio de alojamiento que se le imputa como alquiler. La consecuencia, que la ficha 12.09 ya subrayaba, es que **comprar una casa no reduce el ahorro del hogar**: reduce su capacidad de financiación. Se ahorra lo mismo y se necesita financiación externa para la diferencia.",
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
            { nom: "Los tres componentes", sub: "Se comportan de forma muy distinta.", cols: ["P.5 = P.51g + P.52 + P.53"] },
            { nom: "Criterio general", sub: "Resuelve todos los casos dudosos.", cols: ["activo producido que permanece en la economía"] },
            { nom: "Los tipos de activo fijo", sub: "La clasificación del SEC 2010.", cols: ["AN.111 a AN.117"] },
            { nom: "Novedades del SEC 2010", sub: "Ambas elevaron el PIB.", cols: ["I+D y software (AN.117) · armamento (AN.114)"] },
            { nom: "Variación de existencias", sub: "Pequeña en nivel, enorme en volatilidad.", cols: ["P.52 — solo volumen, sin ganancias por tenencia"] },
            { nom: "Objetos valiosos", sub: "Ni se consumen ni se deprecian.", cols: ["P.53 — arte, joyas, metales preciosos"] },
            { nom: "Lo que NO es formación de capital", sub: "No hay activo producido.", cols: ["acciones y bonos → F · terrenos → NP"] },
            { nom: "Los duraderos de consumo", sub: "El hogar los consume.", cols: ["coche, lavadora → P.3"] },
            { nom: "La excepción de la vivienda", sub: "Produce alquiler imputado.", cols: ["P.51g, no P.3"] },
            { nom: "Su consecuencia", sub: "No reduce el ahorro.", cols: ["afecta a B.9, no a B.8"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: abrir los 180 de formación de capital",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 12.09 daba una formación bruta de capital de 180, repartida entre 40 de los hogares, 60 de las sociedades y 80 de las administraciones. Ahora la abrimos también por tipo de activo, que es el corte que permite ver qué está construyendo realmente una economía.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Tipo de activo", "Código", "Hogares", "Sociedades", "AA. PP.", "Total"],
          filas: [
            ["Viviendas", "AN.111", "38", "14", "3", "55"],
            ["Otros edificios y estructuras", "AN.112", "1", "7", "40", "48"],
            ["Maquinaria y bienes de equipo", "AN.113", "1", "25", "14", "40"],
            ["Sistemas de armamento", "AN.114", "—", "—", "3", "3"],
            ["Recursos biológicos cultivados", "AN.115", "—", "2", "—", "2"],
            ["Productos de propiedad intelectual", "AN.117", "—", "8", "19", "27"],
            ["Formación bruta de capital fijo", "P.51g", "40", "56", "79", "175"],
            ["Variación de existencias", "P.52", "—", "3", "1", "4"],
            ["Objetos valiosos", "P.53", "—", "1", "—", "1"],
            { celdas: ["Formación bruta de capital", "P.5", "40", "60", "80", "180"], clase: "total" },
          ],
          nota: "Las tres columnas suman exactamente los 40, 60 y 80 de la ficha 12.09, y el total los 180 que entraban en la identidad de oferta y empleos de la ficha 13.02. La lectura por filas dice más que la de columnas: **la inversión de los hogares es esencialmente vivienda** —38 de sus 40—, la de las sociedades se reparte entre equipo y construcción, y la de las administraciones es sobre todo **infraestructura y propiedad intelectual**. Adviértase que esta economía de ejemplo tiene una inversión pública muy alta —79 de 175— que no es representativa de España; se ha mantenido así para no alterar los totales que arrastran los bloques 10 y 12.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "", y: "Importe" },
          dominio: { x: [0, 6], y: [0, 62] },
          marcasX: [],
          marcasY: [0, 10, 20, 30, 40, 50],
          areas: [
            { puntos: [[0.15, 0], [0.15, 38], [0.85, 38], [0.85, 0]], color: "acento" },
            { puntos: [[0.15, 38], [0.15, 52], [0.85, 52], [0.85, 38]], color: "n1" },
            { puntos: [[0.15, 52], [0.15, 55], [0.85, 55], [0.85, 52]], color: "n3" },
            { puntos: [[1.15, 0], [1.15, 1], [1.85, 1], [1.85, 0]], color: "acento" },
            { puntos: [[1.15, 1], [1.15, 8], [1.85, 8], [1.85, 1]], color: "n1" },
            { puntos: [[1.15, 8], [1.15, 48], [1.85, 48], [1.85, 8]], color: "n3" },
            { puntos: [[2.15, 0], [2.15, 1], [2.85, 1], [2.85, 0]], color: "acento" },
            { puntos: [[2.15, 1], [2.15, 26], [2.85, 26], [2.85, 1]], color: "n1" },
            { puntos: [[2.15, 26], [2.15, 40], [2.85, 40], [2.85, 26]], color: "n3" },
            { puntos: [[3.15, 0], [3.15, 3], [3.85, 3], [3.85, 0]], color: "n3" },
            { puntos: [[4.15, 0], [4.15, 2], [4.85, 2], [4.85, 0]], color: "n1" },
            { puntos: [[5.15, 0], [5.15, 8], [5.85, 8], [5.85, 0]], color: "n1" },
            { puntos: [[5.15, 8], [5.15, 27], [5.85, 27], [5.85, 8]], color: "n3" },
          ],
          notas: [
            { x: 0.5, y: 58, texto: "55", ancla: "middle" },
            { x: 1.5, y: 51, texto: "48", ancla: "middle" },
            { x: 2.5, y: 43, texto: "40", ancla: "middle" },
            { x: 3.5, y: 6, texto: "3", ancla: "middle" },
            { x: 4.5, y: 5, texto: "2", ancla: "middle" },
            { x: 5.5, y: 30, texto: "27", ancla: "middle" },
            { x: 0.5, y: -5, texto: "Viviendas", ancla: "middle" },
            { x: 1.5, y: -5, texto: "Estructuras", ancla: "middle" },
            { x: 2.5, y: -5, texto: "Equipo", ancla: "middle" },
            { x: 3.5, y: -5, texto: "Armamento", ancla: "middle" },
            { x: 4.5, y: -5, texto: "Biológicos", ancla: "middle" },
            { x: 5.5, y: -5, texto: "Propiedad int.", ancla: "middle" },
          ],
          nota: "Cada barra está partida por sector: **hogares abajo, sociedades en medio, administraciones arriba**. El patrón es muy nítido y muy general: los hogares solo aparecen en vivienda, las administraciones dominan las estructuras y comparten la propiedad intelectual, y las sociedades concentran su inversión en equipo. Nótese que **los sistemas de armamento y los recursos biológicos son minúsculos** pero existen como categorías propias, y que hasta el SEC 2010 los primeros ni siquiera eran inversión: eran consumo intermedio de las administraciones públicas.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué las existencias mueven el PIB más de lo que parece",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La variación de existencias es 4 sobre una formación de capital de 180 y sobre un PIB de 1.000: cuatro milésimas del producto. Y sin embargo es, año tras año, una de las partidas que más contribuyen a explicar las aceleraciones y desaceleraciones del crecimiento. La aparente paradoja tiene una explicación aritmética sencilla y una consecuencia práctica importante.",
            "**La clave está en que lo que entra en el PIB no es el nivel de existencias sino su variación**, y lo que entra en el crecimiento es la **variación de la variación**. Si un año las empresas acumulan 4 y al siguiente desacumulan 6, la contribución al crecimiento del PIB es de −10 sobre 1.000, un punto porcentual entero. Una partida diminuta en nivel puede mover el crecimiento un punto simplemente porque cambia de signo, cosa que hace con frecuencia.",
            "**El mecanismo económico detrás es el ciclo de inventarios, y es real.** Cuando la demanda cae, las empresas tardan en darse cuenta y siguen produciendo: las existencias se acumulan involuntariamente. Cuando lo advierten, recortan la producción **por debajo** de las ventas para deshacer el exceso, y en ese momento la producción cae más que la demanda. Al terminar el ajuste, la producción vuelve a subir para reponer. El resultado es que el ciclo de existencias **amplifica** las oscilaciones de la demanda final, y explica por qué la industria es más cíclica que los servicios.",
            "**A esa volatilidad económica se suma una dificultad estadística de primer orden.** Las existencias hay que medirlas en **volumen**, excluyendo las ganancias por tenencia. Una empresa que compró existencias a 100 y las tiene valoradas a 130 al cerrar el ejercicio no ha producido 30: se ha enriquecido 30 porque el precio subió, y eso pertenece a la cuenta de revalorización. Separar ambas cosas exige conocer los precios de entrada y de salida a lo largo del año, y las contabilidades empresariales rara vez lo permiten con precisión.",
            "**La consecuencia práctica es que la variación de existencias es la partida más revisada del sistema.** En las primeras estimaciones suele actuar como cierre residual del equilibrio entre oferta y empleos de la ficha 13.02: cuando las dos columnas no cuadran, buena parte de la discrepancia acaba ahí. Al llegar información definitiva, la partida se corrige, y con ella la contribución al crecimiento de aquel trimestre. Quien construya un relato económico sobre una contribución trimestral de existencias está construyéndolo sobre el dato menos firme del cuadro.",
            "**La lección general vale para todo el bloque.** No todas las partidas de las cuentas nacionales tienen la misma calidad. El consumo de los hogares y la remuneración de asalariados se apoyan en fuentes censales y son robustos; la variación de existencias y algunos servicios se estiman con márgenes mucho mayores. Un analista competente sabe cuáles son cuáles, y desconfía de las conclusiones que dependen enteramente de una partida débil.",
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
            { t: "Llamar inversión a la compra de acciones o bonos", d: "En el SEC no lo es: no hay ningún activo producido de por medio. Es una operación financiera (F) que cambia la composición de la cartera del comprador y crea un pasivo en otro sitio. La inversión del sistema es la adquisición de activos producidos que permanecen en la economía." },
            { t: "Tratar la compra de un terreno como formación de capital", d: "El terreno no lo ha producido nadie, así que va al NP de la ficha 13.09 como adquisición de un activo no producido. Solo los costes de transmisión asociados —notaría, registro, impuestos— son formación de capital fijo, en la categoría AN.116." },
            { t: "Registrar como existencias las ganancias por tenencia", d: "Hay que medir solo el volumen que entra y sale de los almacenes. Una empresa que compró a 100 y valora a 130 al cierre no ha producido 30: se ha enriquecido porque subió el precio, y eso pertenece a la cuenta de revalorización. Separar ambas cosas es una de las dificultades técnicas serias del sistema." },
            { t: "Considerar la vivienda un bien de consumo duradero", d: "Es formación bruta de capital fijo, porque el propietario produce con ella un servicio de alojamiento que se le imputa como alquiler. Por eso comprar una casa no reduce el ahorro del hogar sino su capacidad de financiación: se ahorra lo mismo y se necesita financiación externa para la diferencia." },
            { t: "Suponer que un objeto valioso se deprecia", d: "No lo hace: los objetos valiosos se adquieren como depósito de valor, no prestan servicios productivos y no generan consumo de capital fijo. Un cuadro comprado por una empresa es formación de capital y permanece en su balance sin amortizarse, a diferencia de la maquinaria." },
            { t: "Construir un relato económico sobre la contribución trimestral de las existencias", d: "Es la partida más revisada del sistema y a menudo actúa como cierre residual del equilibrio entre oferta y empleos en las primeras estimaciones. Una partida de cuatro milésimas del PIB puede mover el crecimiento un punto al cambiar de signo, y esa cifra es también la menos firme del cuadro." },
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
            "La formación de capital es la bisagra entre los flujos de este año y el patrimonio de los siguientes.",
          ],
          lista: [
            "La ficha **13.02** la coloca como uno de los cuatro destinos de la identidad de oferta y empleos, y la **13.03** traza la frontera que decide qué gasto acaba aquí y qué gasto acaba en consumo intermedio.",
            "La ficha **12.09** la restaba de la variación del patrimonio neto para obtener la capacidad de financiación; aquí se ve de qué está hecha esa resta y por sectores.",
            "La ficha **13.09** cubre lo que esta deja fuera por definición: los activos que nadie ha producido y que por tanto no son formación de capital aunque se compren y se vendan.",
            "La ficha **13.10** recoge el otro lado del ciclo del activo: lo que aquí se adquiere se deprecia allí como consumo de capital fijo y se revaloriza como K.7, y de esas tres cosas juntas sale el patrimonio.",
            "Y la ficha **10.10**, sobre cuentas trimestrales y revisiones, encuentra en la variación de existencias su ejemplo más claro: la partida que más se revisa y la que más contribuye a explicar las aceleraciones del crecimiento.",
          ],
          cierre:
            "La idea que conviene llevarse es que **la palabra inversión significa en el SEC algo bastante distinto de lo que significa en la conversación corriente**. No es colocar dinero esperando rendimiento, sino adquirir un activo producido que se queda en la economía. Por eso comprar acciones no cuenta, comprar un terreno tampoco, y comprar un cuadro sí.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuál es el criterio que define la formación de capital?", a: "La adquisición de un activo producido que permanece en la economía para prestar servicio, almacenar valor o venderse más adelante. De ahí las tres exclusiones habituales: las acciones no lo son porque no hay activo producido, los terrenos porque no los ha producido nadie, y los duraderos de consumo porque el hogar los consume." },
            { q: "¿Por qué la vivienda es la excepción entre los bienes duraderos?", a: "Porque en el SEC el propietario produce con ella un servicio de alojamiento que se le imputa como alquiler y que forma parte del PIB. Al ser un activo que produce, su compra es formación bruta de capital fijo. La consecuencia es que comprar una casa no reduce el ahorro del hogar, solo su capacidad de financiación." },
            { q: "¿Por qué un cuadro es inversión y unas acciones no?", a: "Porque el cuadro es un bien producido que la economía retiene como depósito de valor, y por tanto es formación de capital en la categoría de objetos valiosos (P.53). Las acciones no son un bien producido: son un activo financiero, y su compra es una operación F que cambia la composición de la cartera." },
            { q: "La variación de existencias es el 0,4 % del PIB. ¿Por qué mueve tanto el crecimiento?", a: "Porque lo que entra en el crecimiento no es su nivel sino su cambio de un año a otro. Si un año se acumulan 4 y al siguiente se desacumulan 6, la contribución es de −10 sobre 1.000: un punto entero. Una partida diminuta puede mover el crecimiento un punto solo con cambiar de signo, cosa que hace con frecuencia." },
            { q: "¿Qué son las ganancias por tenencia y por qué hay que excluirlas de las existencias?", a: "Son el enriquecimiento que se produce porque el precio de lo almacenado cambió mientras estaba en el almacén. No son producción de nadie, así que pertenecen a la cuenta de revalorización y no al PIB. Las existencias hay que medirlas en volumen, y separar ambas cosas exige conocer los precios de entrada y salida a lo largo del año." },
            { q: "¿Qué dos categorías de activo fijo incorporó el SEC 2010 y qué efecto tuvieron?", a: "Los productos de propiedad intelectual, sobre todo la I+D y el software, y los sistemas de armamento. Ambas elevaron el nivel del PIB, porque lo que antes se restaba como consumo intermedio pasó a contarse como inversión. La lógica es la misma en los dos casos: prestan servicio durante años, así que no se consumen en el período." },
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
            { ref: "SEC 2010, capítulo 3 — formación bruta de capital (P.5)", nota: "las definiciones de los tres componentes y la frontera con el consumo intermedio." },
            { ref: "SEC 2010, capítulo 7 y anexo 7.1 — clasificación de activos no financieros", nota: "el catálogo completo de AN.11 con sus subcategorías, imprescindible para leer los cuadros del INE." },
            { ref: "INE, Contabilidad Nacional Anual — formación bruta de capital fijo por tipo de activo", nota: "el mismo corte de esta ficha con datos reales de España, incluida la serie de I+D capitalizada." },
            { ref: "Eurostat, tratamiento de la variación de existencias y de las ganancias por tenencia", nota: "los métodos admitidos para separar volumen y precio, que es donde está la dificultad." },
            { ref: "Lequiller y Blades, Understanding National Accounts, capítulo 5", nota: "una discusión accesible de por qué la frontera del activo se ha ido ampliando con el tiempo." },
          ],
        },
      ],
    },
  ],
};
