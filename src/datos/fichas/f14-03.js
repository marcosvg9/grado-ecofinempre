/* Ficha 14.03 — Capital social, aportaciones y el alcance de la responsabilidad limitada. */

export default {
  codigo: "14.03",
  titulo: "Capital social, aportaciones y el alcance de la responsabilidad limitada",
  nivel: 2,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "El capital social no es dinero que la sociedad tenga: es una cifra de retención que dice cuánto patrimonio no puede repartirse. Y la responsabilidad limitada que protege al socio no es absoluta: se levanta con más frecuencia de la que sugiere la palabra «limitada».",
  requiere: "14.02 Formas jurídicas · 5.01 Patrimonio y ecuación fundamental",
  abre: "14.05 Responsabilidad de los administradores · 14.09 Insolvencia · 5.10 Cuentas anuales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El malentendido más extendido del derecho de sociedades es creer que el capital social es dinero.** No lo es. El capital es una **cifra abstracta que figura en los estatutos y en el pasivo del balance**, y que sirve para una función muy concreta: marcar el volumen de patrimonio que la sociedad **no puede repartir entre los socios**. Una sociedad con 3.000 € de capital puede tener cero euros en caja y dos millones de activos, o al revés. El capital dice cuánto se comprometieron a aportar los socios, no cuánto hay.",
            "**Esa función se entiende mejor desde la ecuación de la ficha 5.01.** El patrimonio neto es activo menos pasivo exigible, y el capital es la parte de ese neto que está **retenida**: la sociedad solo puede distribuir dividendos si, después de hacerlo, el patrimonio neto sigue siendo superior al capital social. El capital es por tanto **una cifra de garantía a favor de los acreedores**, no una reserva de tesorería. De ahí la expresión clásica: es una **cifra de retención**, no un fondo.",
            "**Las aportaciones son lo que los socios entregan a cambio de participaciones o acciones, y solo pueden ser bienes o derechos patrimoniales susceptibles de valoración económica.** Esto excluye expresamente el **trabajo o los servicios**: no se puede ser socio de una sociedad de capital aportando el propio esfuerzo. Es una regla que sorprende a mucho emprendedor y que tiene sentido desde la lógica anterior: el trabajo futuro no es un patrimonio que los acreedores puedan agredir, así que no puede formar parte de la cifra de garantía. Lo que sí cabe es retribuir ese trabajo por otras vías —sueldo, prestaciones accesorias, participaciones adquiridas con un préstamo— pero no como aportación.",
            "**Las aportaciones no dinerarias plantean el problema evidente de la valoración**, y las dos formas societarias lo resuelven de manera opuesta. La **anónima** exige **informe de experto independiente** designado por el registrador. La **limitada** no lo exige, y a cambio impone algo más duro: **los socios fundadores, quien aporta y quienes adquieran participaciones responden solidariamente frente a la sociedad y frente a los acreedores de la realidad y del valor de lo aportado**. Es decir, la anónima previene con un experto y la limitada corrige con responsabilidad personal. Quien aporta una maquinaria sobrevalorada a una limitada responde de la diferencia con su patrimonio.",
            "**La responsabilidad limitada es el rasgo que justifica toda la construcción, y conviene enunciarla con precisión.** El socio **no responde de las deudas sociales**: su pérdida máxima es lo aportado. No significa que la sociedad no responda —responde con todo su patrimonio— sino que los acreedores no pueden ir más allá de él. Es una asignación deliberada de riesgo: se traslada al acreedor el riesgo de insolvencia a cambio de que exista quien emprenda, y por eso el ordenamiento compensa con las cautelas que este bloque va enumerando.",
            "**Y aquí llega el matiz que la palabra «limitada» oculta: el velo se levanta más a menudo de lo que se cree.** La doctrina del **levantamiento del velo** permite a los tribunales prescindir de la personalidad jurídica cuando se ha usado de forma abusiva o fraudulenta: confusión de patrimonios entre el socio y la sociedad, infracapitalización manifiesta, sociedades pantalla constituidas para eludir una obligación, sucesión de empresas para dejar atrás las deudas. No es una excepción teórica: es jurisprudencia constante, y su presupuesto suele ser bastante prosaico —el socio que paga sus gastos personales con la cuenta de la sociedad y no distingue un patrimonio del otro—.",
            "**A esa vía se suman otras que erosionan la protección en la práctica y que conviene conocer.** La **responsabilidad de los administradores** de la ficha 14.05, que alcanza al socio cuando además administra. Las **garantías personales**: ningún banco presta a una limitada pequeña sin avales de los socios, de modo que la limitación desaparece justo donde más importaría. Y determinadas **deudas públicas y laborales**, en las que la ley prevé supuestos de derivación de responsabilidad. La conclusión práctica es sobria: **la responsabilidad limitada protege bien frente al acreedor comercial que no pudo negociar, y bastante mal frente al banco, la Hacienda y las consecuencias de administrar mal.**",
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
            { nom: "Qué es el capital social", sub: "No es dinero ni un fondo.", cols: ["cifra de retención en el pasivo"] },
            { nom: "Su función", sub: "A favor de los acreedores.", cols: ["marca lo que no puede repartirse"] },
            { nom: "La regla del reparto", sub: "De ahí sale todo lo demás.", cols: ["solo hay dividendo si PN > capital tras repartir"] },
            { nom: "Qué puede aportarse", sub: "Susceptible de valoración económica.", cols: ["bienes y derechos · nunca trabajo ni servicios"] },
            { nom: "Aportación no dineraria en anónima", sub: "Prevención.", cols: ["informe de experto independiente"] },
            { nom: "Aportación no dineraria en limitada", sub: "Corrección.", cols: ["responsabilidad solidaria por realidad y valor"] },
            { nom: "Responsabilidad limitada", sub: "El socio arriesga lo aportado.", cols: ["la sociedad responde con todo; el socio no"] },
            { nom: "Levantamiento del velo", sub: "Jurisprudencia constante, no excepción rara.", cols: ["confusión de patrimonios · infracapitalización · fraude"] },
            { nom: "Las tres grietas prácticas", sub: "Donde la limitación desaparece.", cols: ["avales personales · deudas públicas · administrar mal"] },
            { nom: "Frente a quién protege bien", sub: "El resumen honesto.", cols: ["acreedor comercial sí · banco y Hacienda mucho menos"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: capital de un euro y reserva legal",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos socios constituyen una sociedad limitada con **1.000 € de capital**, acogiéndose al régimen que permite bajar de los 3.000 € clásicos. El primer ejercicio da 10.000 € de beneficio. Veamos qué pueden repartirse.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe", "Regla que se aplica"],
          filas: [
            ["Capital social", "1.000 €", "Cifra de retención: nunca repartible"],
            ["Beneficio del ejercicio", "10.000 €", "—"],
            ["Dotación mínima a reserva legal", "2.000 €", "20 % del beneficio mientras el capital sea inferior a 3.000 €"],
            ["Capital + reservas tras la dotación", "3.000 €", "Alcanzado el umbral, cesa la obligación reforzada"],
            { celdas: ["Máximo repartible como dividendo", "8.000 €", "Beneficio menos la dotación obligatoria"], clase: "total" },
          ],
          nota: "En un solo ejercicio la sociedad alcanza los 3.000 € entre capital y reservas, y a partir de ahí vuelve al régimen ordinario de la reserva legal, que exige el 10 % del beneficio hasta que la reserva alcance el 20 % del capital. La lectura importante es esta: **la Ley 18/2022 no eliminó el colchón de 3.000 €, lo desplazó en el tiempo**. Antes había que ponerlo el primer día; ahora se construye con los primeros beneficios. Y si la sociedad se liquida antes de haberlo construido y el patrimonio no alcanza, **los socios responden solidariamente de la diferencia hasta esos 3.000 €**.",
        },
        {
          tipo: "grafico",
          alto: 350,
          ejes: { x: "", y: "Miles de €" },
          dominio: { x: [0, 4.4], y: [0, 115] },
          marcasX: [],
          marcasY: [0, 25, 50, 75, 90],
          areas: [
            { puntos: [[0.25, 0], [0.25, 90], [1.15, 90], [1.15, 0]], color: "acento" },
            { puntos: [[1.45, 0], [1.45, 70], [2.35, 70], [2.35, 0]], color: "alerta" },
            { puntos: [[2.65, 0], [2.65, 25], [3.55, 25], [3.55, 0]], color: "n4" },
            { puntos: [[3.85, 0], [3.85, 15], [4.75, 15], [4.75, 0]], color: "n4" },
          ],
          notas: [
            { x: 0.7, y: 96, texto: "90", ancla: "middle" },
            { x: 1.9, y: 76, texto: "70", ancla: "middle" },
            { x: 3.1, y: 31, texto: "25", ancla: "middle" },
            { x: 4.2, y: 21, texto: "15", ancla: "middle" },
            { x: 0.7, y: -13, texto: "Proveedores", ancla: "middle" },
            { x: 1.9, y: -13, texto: "Banco avalado", ancla: "middle" },
            { x: 3.1, y: -13, texto: "Deuda pública", ancla: "middle" },
            { x: 4.2, y: -13, texto: "Laboral", ancla: "middle" },
            { x: 0.25, y: 108, texto: "Solo la primera barra queda fuera del alcance del socio.", ancla: "start" },
          ],
          nota: "De 200.000 € de deuda, **la responsabilidad limitada protege con claridad los 90.000 € de la primera barra y poco más**. Y la barra protegida es justamente la del acreedor que **no pudo negociar**: el proveedor que sirvió a treinta días. El banco, que sí tenía poder de negociación, se sacó la protección mediante un contrato de aval; las deudas públicas y laborales tienen vías propias de derivación. La palabra «limitada» describe bastante peor la realidad de lo que sugiere.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El segundo ejemplo mide el alcance real de la responsabilidad limitada**, que es donde la palabra engaña. Una limitada con 3.000 € de capital acumula deudas por 200.000 € y no puede pagarlas. El socio único aportó los 3.000 € y avaló personalmente la póliza bancaria.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Acreedor", "Importe", "¿Puede ir contra el patrimonio del socio?", "Por qué"],
          filas: [
            ["Proveedores comerciales", "90.000 €", "No", "Responsabilidad limitada en estado puro"],
            ["Banco, con aval personal del socio", "70.000 €", "Sí, íntegramente", "El aval es un contrato aparte que la sociedad no cubre"],
            ["Hacienda y Seguridad Social", "25.000 €", "Posiblemente", "Existen supuestos legales de derivación de responsabilidad"],
            ["Trabajadores, salarios e indemnizaciones", "15.000 €", "Posiblemente", "Vías propias del orden social frente a administradores"],
            { celdas: ["Deudas nacidas tras la causa de disolución", "Parte de las anteriores", "Sí, si el socio administra y no convocó junta", "Responsabilidad por deudas de la ficha 14.05"], clase: "total" },
          ],
          nota: "De los 200.000 €, **la responsabilidad limitada protege con claridad frente a 90.000**, es decir, menos de la mitad. Y protege precisamente frente al acreedor **que no pudo negociar**: el proveedor que sirvió a crédito sin pedir garantías. Frente al banco, que sí pudo negociar y exigió aval, la limitación **no vale nada**. Es una asimetría que conviene interiorizar antes de tomar decisiones basadas en la palabra «limitada»: quien tiene poder de negociación se saca la protección del socio mediante contrato, y quien no lo tiene se queda con ella.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la infracapitalización y por qué el velo se levanta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Que el capital mínimo pueda ser un euro plantea una pregunta legítima: ¿qué impide constituir una sociedad sin patrimonio, contraer deudas y dejarla caer? La respuesta no está en el capital mínimo —nunca estuvo, porque 3.000 € tampoco garantizaban nada frente a deudas de cientos de miles— sino en el conjunto de reglas que este bloque va desplegando.",
            "**La primera es el levantamiento del velo, y su presupuesto más frecuente es la confusión de patrimonios.** Un socio que paga con la tarjeta de la sociedad la compra del supermercado, que usa la cuenta social como cuenta corriente propia y que no distingue qué activos son de quién está destruyendo, con sus propios actos, la separación patrimonial que invocará cuando lleguen los acreedores. Los tribunales atienden a la realidad: si el socio no trató a la sociedad como una persona distinta, no puede pedir que los demás lo hagan.",
            "**La segunda es la infracapitalización, y es más sutil.** No consiste en tener poco capital, sino en dotar a la sociedad de recursos **manifiestamente insuficientes para la actividad que va a desarrollar**, trasladando así el riesgo entero a los acreedores. Una sociedad con 3.000 € que va a operar una flota de camiones no está infracapitalizada por la cifra sino por la desproporción entre el riesgo asumido y los medios puestos. La cuestión no es cuánto capital hay, sino si el socio ha puesto algo de piel en el juego.",
            "**La tercera vía, y en la práctica la más eficaz, no es el velo sino el deber de disolver de la ficha 14.05.** Cuando las pérdidas dejan el patrimonio neto por debajo de la mitad del capital, el administrador tiene dos meses para convocar junta, y si no lo hace responde **solidariamente de las deudas nacidas después**. Esa regla hace un trabajo que el capital mínimo nunca hizo: obliga a **parar a tiempo**, y castiga seguir contratando con quien no va a poder pagar. Es una norma de flujo, no de fondo, y por eso funciona mejor.",
            "**Y la cuarta es el propio mercado, que corrige lo que la norma no llega a corregir.** Ningún proveedor concede crédito relevante a una sociedad sin trayectoria; ningún banco presta sin aval. Que la responsabilidad limitada sea contractualmente renunciable por la vía de la garantía personal significa que **los acreedores fuertes se protegen solos**, y que el debate sobre el capital mínimo afecta en realidad a los acreedores débiles: el pequeño proveedor, el trabajador, la Hacienda pública.",
            "**La conclusión, que es también la del legislador europeo, resulta poco intuitiva pero está bien fundada.** El capital mínimo es un instrumento **malo** para proteger acreedores, porque una cifra fija ni se ajusta al riesgo de cada negocio ni impide que se consuma el primer año. Protegen mejor la transparencia contable —el depósito de cuentas de la ficha 14.06—, los deberes de los administradores y un derecho concursal que se active pronto. Por eso las reformas de los últimos años han bajado la cifra de entrada y reforzado, a la vez, todo lo demás.",
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
            { t: "Creer que el capital social es dinero disponible", d: "Es una cifra abstracta del pasivo que marca cuánto patrimonio no puede repartirse. Una sociedad con 3.000 € de capital puede tener cero en caja y dos millones de activos, o al revés. Es una cifra de retención a favor de los acreedores, no un fondo de tesorería." },
            { t: "Intentar aportar trabajo como capital", d: "Solo pueden aportarse bienes y derechos susceptibles de valoración económica, y el trabajo futuro no lo es: no hay nada que los acreedores puedan agredir. El esfuerzo se retribuye por otras vías —sueldo, prestaciones accesorias, participaciones adquiridas— pero nunca como aportación." },
            { t: "Suponer que la limitada es más laxa con las aportaciones no dinerarias", d: "Es más laxa al entrar y más dura después. La anónima previene con informe de experto independiente; la limitada no lo exige, pero hace responder solidariamente a fundadores y aportantes de la realidad y del valor de lo aportado, frente a la sociedad y frente a los acreedores." },
            { t: "Confiar en que «limitada» significa que el socio nunca responde", d: "De los 200.000 € del ejemplo, la limitación protege con claridad frente a 90.000. El aval bancario la anula, las deudas públicas y laborales tienen vías propias, y administrar mal genera responsabilidad. Protege frente a quien no pudo negociar, y no frente a quien sí pudo." },
            { t: "Pensar que el levantamiento del velo es una rareza doctrinal", d: "Es jurisprudencia constante y su presupuesto habitual es prosaico: el socio que paga gastos personales con la cuenta social y no distingue un patrimonio del otro. Quien no trata a su sociedad como una persona distinta no puede exigir después que los tribunales lo hagan." },
            { t: "Creer que el capital mínimo protegía a los acreedores", d: "Nunca lo hizo bien: una cifra fija ni se ajusta al riesgo del negocio ni impide que se consuma el primer año. Protegen mucho mejor el depósito de cuentas, los deberes de los administradores y un concurso que se active pronto. De ahí que se rebajara la cifra y se reforzara todo lo demás." },
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
            "El capital social es simultáneamente una institución jurídica, una partida contable y un instrumento financiero, y las tres lecturas conviven en el plan.",
          ],
          lista: [
            "Para la contabilidad de la ficha **5.01**, el capital es una partida del patrimonio neto, y la regla del reparto que esta ficha enuncia es exactamente la que limita la distribución de dividendos: solo hay dividendo si tras repartirlo el neto sigue superando al capital.",
            "Para el SEC, ese mismo capital es un instrumento financiero: **participaciones en el capital (AF.5)** en la clasificación de la ficha 13.10. Es pasivo del emisor y activo del socio, y se valora a precios de mercado, no por la cifra estatutaria.",
            "Esa diferencia de valoración tiene una consecuencia que la ficha **13.10** ya anticipaba: el valor de mercado de las participaciones se mueve sin que nadie ahorre ni produzca, generando **revalorizaciones (K.7)** que cambian el patrimonio de los sectores sin pasar por el PIB.",
            "El **dividendo** que aquí aparece como límite jurídico es, en las cuentas nacionales, la operación **D.421** de la ficha 12.04: una renta de la propiedad que traslada renta de las sociedades a los hogares y que la ficha 14.02 usaba para comparar formas jurídicas.",
            "Y la **infracapitalización** conecta con la ficha **13.10** desde otro ángulo: dos unidades con el mismo patrimonio neto pueden estar en situaciones opuestas según su apalancamiento, y el balance bruto es el único sitio donde eso se ve. Lo que el derecho llama infracapitalización, el balance lo llama estructura de financiación.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el capital social protege menos de lo que su nombre promete y hace un trabajo distinto del que se le atribuye**. No es un fondo de garantía: es un límite al reparto. Lo que de verdad protege a los acreedores es que la sociedad publique sus cuentas, que sus administradores respondan y que el concurso llegue a tiempo, y eso ocupa las tres fichas siguientes.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué es exactamente el capital social?", a: "Una cifra abstracta que figura en los estatutos y en el pasivo del balance y que marca el volumen de patrimonio que no puede repartirse entre los socios. No es dinero ni un fondo: una sociedad con 3.000 € de capital puede tener cero en caja. Es una cifra de retención a favor de los acreedores." },
            { q: "¿Por qué no se puede aportar trabajo a una sociedad de capital?", a: "Porque solo pueden aportarse bienes y derechos susceptibles de valoración económica, y el trabajo futuro no es un patrimonio que los acreedores puedan agredir. Como el capital es una cifra de garantía, no puede estar formado por promesas de esfuerzo. El trabajo se retribuye por otras vías." },
            { q: "¿Cómo resuelven anónima y limitada el problema de valorar una aportación no dineraria?", a: "De forma opuesta. La anónima previene: exige informe de experto independiente designado por el registrador. La limitada corrige: no exige experto, pero hace responder solidariamente a fundadores, aportante y adquirentes de la realidad y del valor de lo aportado, frente a la sociedad y frente a los acreedores." },
            { q: "Una limitada debe 200.000 €. ¿De cuánto protege realmente la responsabilidad limitada al socio?", a: "En el ejemplo, con claridad de 90.000 € de deuda comercial. Los 70.000 € del banco están avalados personalmente, las deudas con Hacienda y Seguridad Social tienen vías de derivación y las laborales vías propias. Protege frente al acreedor que no pudo negociar y no frente al que sí pudo." },
            { q: "¿Qué es la infracapitalización y por qué justifica levantar el velo?", a: "Dotar a la sociedad de recursos manifiestamente insuficientes para la actividad que va a desarrollar, trasladando el riesgo entero a los acreedores. No es tener poco capital sino una desproporción entre el riesgo asumido y los medios puestos: el socio no ha puesto piel en el juego." },
            { q: "¿Por qué bajar el capital mínimo a un euro no dejó desprotegidos a los acreedores?", a: "Porque el capital mínimo nunca los protegió bien: una cifra fija ni se ajusta al riesgo ni impide que se consuma el primer año. Y porque el colchón se trasladó en el tiempo mediante la reserva del 20 %, mientras se reforzaban la transparencia contable, los deberes de los administradores y un concurso que se active pronto." },
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
              q: "Una sociedad con 50.000 € de capital tiene un patrimonio neto de 55.000 € y obtiene 8.000 € de beneficio. ¿Cuánto puede repartir?",
              opciones: [
                "Nada, mientras el patrimonio neto no duplique el capital",
                "Como máximo 5.000 €: tras el reparto el patrimonio neto no puede quedar por debajo de la cifra de capital",
                "Los 55.000 € del patrimonio neto, descontada la reserva legal",
                "Los 8.000 € del beneficio del ejercicio",
              ],
              correcta: 1,
              porque: [
                "No existe ninguna exigencia de duplicar el capital.",
                "Esa es la función del capital social: marca cuánto patrimonio queda retenido y no puede salir hacia los socios.",
                "El patrimonio neto no es dinero repartible: es lo que queda tras restar el pasivo, y la cifra de capital lo retiene.",
                "Repartir los 8.000 dejaría el neto en 47.000, por debajo de los 50.000 de capital: es justo lo que la regla impide.",
              ],
            },
            {
              q: "Un socio paga sus gastos personales con la cuenta de la sociedad durante años. ¿Qué riesgo corre?",
              opciones: [
                "La nulidad de la sociedad desde su constitución",
                "Ninguno frente a terceros: es un problema fiscal suyo",
                "Que se levante el velo por confusión de patrimonios y responda personalmente de las deudas sociales",
                "Una sanción administrativa por llevar contabilidad desordenada",
              ],
              correcta: 2,
              porque: [
                "La sociedad sigue siendo válida; lo que se pierde es la separación entre su patrimonio y el del socio.",
                "Hay un problema fiscal y también uno mercantil, y este último puede costarle su patrimonio.",
                "El levantamiento del velo no es una rareza doctrinal: es jurisprudencia constante, y su presupuesto habitual es exactamente este. Quien no distingue dos patrimonios difícilmente puede pedir al juez que los distinga.",
                "La sanción existe y es lo de menos comparado con perder la limitación de responsabilidad.",
              ],
            },
            {
              q: "¿Hasta dónde responde la sociedad de sus propias deudas?",
              opciones: [
                "Hasta el importe de su capital social",
                "Hasta el importe de su patrimonio neto",
                "Hasta el capital desembolsado, no el suscrito",
                "Con todo su patrimonio: la limitación afecta al socio, no a la sociedad",
              ],
              correcta: 3,
              porque: [
                "El capital es una cifra del pasivo, no un tope de responsabilidad frente a los acreedores.",
                "El patrimonio neto tampoco limita nada: los acreedores pueden ir contra todos los activos.",
                "El desembolso pendiente es una deuda del socio con la sociedad, no un límite a la responsabilidad de esta.",
                "Es la confusión más extendida sobre el nombre «limitada»: lo que está limitado es lo que arriesga el socio, es decir, lo que aportó.",
              ],
            },
            {
              q: "Una sociedad acumula pérdidas que dejan el patrimonio neto muy por debajo de la mitad del capital, y su administrador no convoca junta ni promueve la disolución. ¿Qué consecuencia tiene?",
              opciones: [
                "Los socios pierden su derecho de voto hasta restablecer el equilibrio",
                "La sociedad se disuelve automáticamente por ministerio de la ley",
                "El administrador puede acabar respondiendo personalmente de las deudas sociales posteriores",
                "Ninguna hasta que un acreedor solicite el concurso",
              ],
              correcta: 2,
              porque: [
                "El derecho de voto no se suspende por esa causa.",
                "La disolución no opera sola: exige acuerdo de junta o resolución judicial, y es precisamente lo que el administrador debía promover.",
                "Es una de las grietas prácticas de la responsabilidad limitada: administrar mal la abre por sí solo, sin necesidad de aval ni de fraude.",
                "La inacción tiene consecuencias antes y con independencia de que alguien pida el concurso.",
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
            { ref: "Ley de Sociedades de Capital, títulos II y III", nota: "constitución, aportaciones, valoración y régimen del capital; los artículos sobre responsabilidad por aportaciones no dinerarias merecen lectura detenida." },
            { ref: "Ley 18/2022, régimen de la limitada con capital inferior a 3.000 €", nota: "la reserva del 20 % y la responsabilidad solidaria en liquidación." },
            { ref: "Jurisprudencia del Tribunal Supremo sobre levantamiento del velo", nota: "las sentencias son mucho más ilustrativas que cualquier resumen doctrinal: los hechos siempre son reconocibles." },
            { ref: "Comisión Europea, informes sobre el capital mínimo en el derecho societario", nota: "el debate que llevó a rebajar la cifra en casi toda Europa y los argumentos de una y otra parte." },
            { ref: "Broseta y Martínez Sanz, Manual de Derecho Mercantil, tomo I", nota: "capital, aportaciones y responsabilidad, con la doctrina española asentada." },
          ],
        },
      ],
    },
  ],
};
