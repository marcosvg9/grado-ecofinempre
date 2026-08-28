/* Ficha 14.09 — Insolvencia: preconcurso, concurso y segunda oportunidad. */

export default {
  codigo: "14.09",
  titulo: "Insolvencia: preconcurso, concurso y segunda oportunidad",
  nivel: 4,
  bloque: "Derecho de la empresa",
  tiempo: "5 h",
  nucleo:
    "El concurso español liquida más de lo que salva, y el orden de cobro explica por qué: cuando llega, los acreedores ordinarios recuperan cifras simbólicas. Toda la reforma de los últimos años consiste en intentar que el problema se aborde antes, cuando todavía hay algo que repartir.",
  requiere: "14.05 Responsabilidad de los administradores · 14.07 Contratos y garantías",
  abre: "13.10 Balances y revalorizaciones · 8.01 Sistema financiero",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El derecho concursal resuelve un problema de coordinación, no de justicia individual.** Cuando un deudor no puede pagar a todos, la ejecución individual produce un resultado malo para el conjunto: el acreedor más rápido embarga la maquinaria, la empresa deja de funcionar, y lo que era un negocio viable en dificultades se convierte en chatarra. El concurso **suspende esa carrera** y sustituye la ejecución individual por un procedimiento colectivo que ordena el cobro y decide si la empresa continúa o se liquida.",
            "**El presupuesto objetivo es la insolvencia, y la ley distingue tres grados que activan cosas distintas.** La **insolvencia actual** es no poder cumplir regularmente las obligaciones exigibles, y obliga al deudor a solicitar el concurso en el plazo de dos meses desde que la conoció o debió conocerla. La **insolvencia inminente** es prever que no se podrá cumplir en los tres meses siguientes, y permite solicitarlo voluntariamente. Y la **probabilidad de insolvencia** —la categoría que introdujo la reforma que traspuso la directiva europea— es prever que no se podrá cumplir en dos años, y **da acceso a las herramientas preconcursales** sin necesidad de estar todavía en concurso.",
            "**Esa tercera categoría es la clave del sistema actual, porque desplaza el momento de la intervención.** El diagnóstico compartido en Europa era que los concursos llegaban demasiado tarde: cuando se abrían, el valor ya se había destruido y solo quedaba liquidar. La respuesta fue crear un espacio previo donde reestructurar mientras la empresa vale algo, y dotarlo de dos instrumentos.",
            "**El primero es la comunicación de apertura de negociaciones, el llamado preconcurso.** El deudor comunica al juzgado que está negociando y obtiene una **protección temporal**: se suspenden las ejecuciones sobre bienes necesarios para la actividad, se paraliza el deber de solicitar el concurso y se gana tiempo para cerrar un acuerdo. Es un paraguas de duración limitada, prorrogable, y su función es evitar que la negociación se rompa porque un acreedor se adelante.",
            "**El segundo son los planes de reestructuración**, que sustituyeron a los antiguos acuerdos de refinanciación y que son el instrumento más potente del sistema. Un plan puede modificar el pasivo —quitas, esperas, conversión de deuda en capital— y también la estructura de la empresa. Se vota por **clases de acreedores** agrupadas por intereses homogéneos, y una vez alcanzadas las mayorías, la **homologación judicial** lo hace vinculante **incluso para los acreedores que votaron en contra**, e incluso, bajo condiciones estrictas, para clases enteras disidentes y para los socios. Esa posibilidad de arrastre es lo que impide que una minoría bloquee una reestructuración viable para extraer un rescate.",
            "**Si nada de eso funciona, se abre el concurso, y entonces todo gira en torno a la clasificación de los créditos.** Fuera de la masa pasiva quedan los **créditos contra la masa** —los gastos del propio procedimiento y las obligaciones nacidas tras la declaración—, que se pagan a su vencimiento y antes que nadie. Dentro, hay **privilegio especial** para los créditos con garantía real, que cobran del bien afecto; **privilegio general** para determinados créditos laborales, tributarios y otros, hasta ciertos límites; **ordinarios**, que es la categoría común y la que se lleva lo que sobra; y **subordinados**, que cobran los últimos y suelen no cobrar: intereses, sanciones y, muy señaladamente, **los créditos de personas especialmente relacionadas con el deudor**, entre ellas los socios significativos.",
            "**El concurso termina en convenio o en liquidación, y hay una fase adicional que decide responsabilidades: la calificación.** El concurso puede declararse **fortuito** o **culpable**. Es culpable cuando la insolvencia se generó o agravó por dolo o culpa grave del deudor o de sus administradores, con presunciones legales que conviene conocer porque son las que se aplican: **incumplir el deber de llevar contabilidad**, cometer irregularidades relevantes en ella, **no depositar las cuentas anuales**, o alzarse con los bienes. La calificación culpable puede acarrear inhabilitación, pérdida de derechos y **condena a cubrir total o parcialmente el déficit concursal** con el patrimonio personal.",
            "**Y para las personas físicas existe la exoneración del pasivo insatisfecho, la llamada segunda oportunidad.** Permite al deudor de buena fe quedar liberado de las deudas que no pudo pagar, con exclusiones —singularmente parte del crédito público y las deudas por alimentos— y por dos vías: con liquidación de su patrimonio o sujetándose a un **plan de pagos** que le permite conservar bienes, incluida en su caso la vivienda. Su fundamento económico es explícito: **un deudor honesto condenado a arrastrar deudas impagables de por vida no vuelve a producir ni a consumir formalmente**, y el sistema pierde más manteniéndolo fuera que perdonándole.",
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
            { nom: "Qué problema resuelve", sub: "No es justicia individual.", cols: ["coordinación: evitar la carrera de ejecuciones"] },
            { nom: "Insolvencia actual", sub: "Activa un deber.", cols: ["no poder cumplir · solicitar en 2 meses"] },
            { nom: "Insolvencia inminente", sub: "Permite anticiparse.", cols: ["no se podrá cumplir en 3 meses"] },
            { nom: "Probabilidad de insolvencia", sub: "La categoría que cambió el sistema.", cols: ["dos años · abre las herramientas preconcursales"] },
            { nom: "Preconcurso", sub: "Un paraguas para negociar.", cols: ["suspende ejecuciones y el deber de solicitar"] },
            { nom: "Plan de reestructuración", sub: "El instrumento más potente.", cols: ["vota por clases · homologación · arrastre de disidentes"] },
            { nom: "Orden de cobro", sub: "Todo el concurso gira en torno a esto.", cols: ["contra la masa → especial → general → ordinario → subordinado"] },
            { nom: "Quién queda subordinado", sub: "El dato que sorprende.", cols: ["intereses, sanciones y socios significativos"] },
            { nom: "Presunciones de concurso culpable", sub: "Enlazan con la ficha 14.06.", cols: ["no llevar contabilidad · no depositar cuentas"] },
            { nom: "Segunda oportunidad", sub: "Con liquidación o con plan de pagos.", cols: ["exoneración al deudor persona física de buena fe"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: quién cobra qué en una liquidación",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad entra en concurso y se liquida. La **masa activa realizada asciende a 400.000 €** y el pasivo total a **un millón**. Entre los créditos hay uno hipotecario de 300.000 € sobre un inmueble que finalmente se vende por 250.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Clase de crédito", "Importe", "Cobra", "Queda para el siguiente"],
          filas: [
            ["Masa activa realizada", "—", "—", "400.000 €"],
            ["Créditos contra la masa", "60.000 €", "60.000 €", "340.000 €"],
            ["Privilegio especial (hipoteca de 300.000 €)", "300.000 €", "250.000 €, el valor del bien", "90.000 €"],
            ["Privilegio general", "80.000 €", "80.000 €", "10.000 €"],
            ["Ordinarios (500.000 € + 50.000 € del hipotecario no cubierto)", "550.000 €", "10.000 €", "0 €"],
            { celdas: ["Subordinados", "60.000 €", "0 €", "0 €"], clase: "total" },
          ],
          nota: "Los **acreedores ordinarios recuperan 10.000 € sobre 550.000 €: un 1,82 %**. Y son la categoría más numerosa, la de los proveedores. Obsérvense dos detalles del mecanismo. El primero: el crédito hipotecario **solo tiene privilegio hasta el valor del bien**, así que los 50.000 € que la venta no cubrió **bajan a ordinario** y compiten con los demás. El segundo: los subordinados no cobran nada, y ahí es donde caen los créditos de los socios que fueron prestando dinero a la sociedad para sostenerla. **Quien financió a la empresa como socio y como prestamista pierde por partida doble.**",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "", y: "Miles de €" },
          dominio: { x: [0, 5.4], y: [0, 620] },
          marcasX: [],
          marcasY: [0, 100, 200, 300, 400, 550],
          areas: [
            { puntos: [[0.2, 0], [0.2, 60], [1.0, 60], [1.0, 0]], color: "n1" },
            { puntos: [[1.25, 0], [1.25, 250], [2.05, 250], [2.05, 0]], color: "n1" },
            { puntos: [[1.25, 250], [1.25, 300], [2.05, 300], [2.05, 250]], color: "alerta" },
            { puntos: [[2.3, 0], [2.3, 80], [3.1, 80], [3.1, 0]], color: "n1" },
            { puntos: [[3.35, 0], [3.35, 10], [4.15, 10], [4.15, 0]], color: "n1" },
            { puntos: [[3.35, 10], [3.35, 550], [4.15, 550], [4.15, 10]], color: "alerta" },
            { puntos: [[4.4, 0], [4.4, 60], [5.2, 60], [5.2, 0]], color: "alerta" },
          ],
          notas: [
            { x: 0.6, y: 82, texto: "60 / 60", ancla: "middle" },
            { x: 1.65, y: 322, texto: "250 / 300", ancla: "middle" },
            { x: 2.7, y: 102, texto: "80 / 80", ancla: "middle" },
            { x: 3.75, y: 572, texto: "10 / 550", ancla: "middle" },
            { x: 4.8, y: 82, texto: "0 / 60", ancla: "middle" },
            { x: 0.6, y: -42, texto: "Contra la masa", ancla: "middle" },
            { x: 1.65, y: -42, texto: "Priv. especial", ancla: "middle" },
            { x: 2.7, y: -42, texto: "Priv. general", ancla: "middle" },
            { x: 3.75, y: -42, texto: "Ordinarios", ancla: "middle" },
            { x: 4.8, y: -42, texto: "Subordinados", ancla: "middle" },
          ],
          nota: "Cada barra muestra **lo cobrado en el tono claro y lo impagado en el oscuro**. El gráfico hace visible de golpe lo que la tabla dice con números: las tres primeras categorías cobran casi todo lo suyo y **los ordinarios, que son con diferencia los más numerosos, casi nada**. Este perfil no es una anomalía del ejemplo sino el patrón habitual de una liquidación española, y explica dos comportamientos perfectamente racionales: que todo acreedor con poder de negociación exija garantía real, y que quien no la tiene prefiera una quita del cuarenta por ciento en un plan de reestructuración antes que su 1,82 % en la liquidación.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué toda la reforma consiste en llegar antes",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El dato incómodo del sistema concursal español, sostenido durante años, es que la inmensa mayoría de los concursos termina en liquidación y no en convenio. Entender por qué es entender el diseño de las reformas recientes, en España y en toda la Unión Europea.",
            "**La explicación no está en la ley concursal sino en el momento en que se activa.** Cuando una empresa llega al concurso, su valor ya ha sido destruido por el propio proceso de deterioro: ha perdido proveedores que dejaron de servir a crédito, clientes que buscaron alternativa segura, trabajadores clave que se marcharon y financiación bancaria. Lo que llega al juzgado no es una empresa en dificultades sino **el residuo de una empresa**, y sobre un residuo no se negocia un convenio: se liquida.",
            "**El círculo vicioso lo cierran los incentivos del propio deudor.** Solicitar el concurso es percibido como el final, arrastra estigma, y los administradores temen la calificación culpable. La reacción natural es **retrasarlo** mientras haya alguna esperanza, financiándose con lo más caro que hay: dejar de pagar a proveedores, a Hacienda y a la Seguridad Social. Cada mes de retraso destruye más valor y hace más probable que el desenlace sea liquidación, lo que a su vez refuerza el estigma.",
            "**La directiva europea de reestructuración y su transposición española atacan ese círculo por tres puntos a la vez.** Primero, creando la **probabilidad de insolvencia** como presupuesto suficiente, de modo que se puede actuar dos años antes sin estar en insolvencia. Segundo, dando **protección durante la negociación** para que ningún acreedor pueda romperla adelantándose. Y tercero, permitiendo el **arrastre de disidentes** en los planes homologados, que resuelve el problema del acreedor que bloquea para extraer un rescate.",
            "**Ese tercer punto merece detenerse porque es de teoría de juegos pura.** Si un plan requiere unanimidad, cualquier acreedor pequeño puede negarse y exigir cobrar íntegro a cambio de su voto, sabiendo que su bloqueo hunde a todos. La homologación con arrastre elimina ese poder de veto siempre que el plan respete determinadas garantías —singularmente, que el disidente no reciba menos de lo que obtendría en la liquidación, que en el ejemplo anterior sería el 1,82 %—. La regla es a la vez dura y justa: **nadie puede bloquear una reestructuración viable si sale mejor parado con ella que sin ella**.",
            "**Queda un problema que ninguna reforma ha resuelto del todo: el tamaño.** La inmensa mayoría de las empresas españolas son microempresas para las que un concurso ordinario es desproporcionado —cuesta más de lo que hay que repartir—. De ahí el procedimiento especial simplificado que se creó para ellas. Y de ahí también la conclusión honesta que conviene retener: **para una empresa muy pequeña, el sistema concursal sigue siendo caro en relación con el valor en juego**, y por eso muchas simplemente cesan la actividad sin pasar por ningún procedimiento, dejando a los acreedores sin nada y al empresario sin exoneración.",
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
            { t: "Confundir el deber de solicitar el concurso con la responsabilidad por deudas", d: "Son obligaciones distintas con plazos distintos. La causa de disolución por pérdidas obliga a convocar junta en dos meses y activa el artículo 367 de la ficha 14.05; la insolvencia actual obliga a solicitar el concurso en dos meses. Se pueden incumplir las dos a la vez y responder por ambas vías." },
            { t: "Creer que una garantía real cubre siempre todo el crédito", d: "El privilegio especial alcanza solo hasta el valor del bien afecto. En el ejemplo, de un crédito hipotecario de 300.000 € sobre un inmueble vendido por 250.000 €, los 50.000 € restantes bajan a ordinario y compiten con los demás, recuperando el 1,82 %." },
            { t: "Prestar dinero a la propia sociedad sin saber que quedará subordinado", d: "Los créditos de personas especialmente relacionadas con el deudor, incluidos los socios significativos, son subordinados y cobran los últimos, que en la práctica es nunca. Quien financió la empresa como socio y como prestamista pierde por partida doble." },
            { t: "Retrasar el concurso confiando en que mejore la situación", d: "Cada mes de retraso destruye valor: se pierden proveedores, clientes, trabajadores clave y financiación. Lo que llega tarde al juzgado no es una empresa en dificultades sino su residuo, y sobre un residuo no se negocia un convenio: se liquida. Además agrava el riesgo de calificación culpable." },
            { t: "Ignorar que no depositar las cuentas es presunción de concurso culpable", d: "Lo es, igual que no llevar contabilidad o cometer irregularidades relevantes en ella. La calificación culpable puede acarrear inhabilitación y condena a cubrir el déficit concursal con el patrimonio personal, de modo que el incumplimiento de la ficha 14.06 se paga aquí." },
            { t: "Pensar que un acreedor puede bloquear siempre un plan de reestructuración", d: "La homologación judicial permite arrastrar a acreedores e incluso a clases enteras disidentes, siempre que el plan respete garantías como que el disidente no reciba menos de lo que obtendría en la liquidación. La regla elimina el poder de veto de quien bloqueaba para extraer un rescate." },
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
            "La insolvencia es uno de los pocos sitios donde el derecho hace desaparecer riqueza sin que medie ninguna operación económica, y el SEC tiene una cuenta específica para eso.",
          ],
          lista: [
            "Una **quita o una deuda que se declara incobrable** no es una operación entre dos unidades: nadie compra ni vende nada. En el SEC es una **otra variación del volumen de activos (K.5)** de la ficha 13.10, y por eso reduce el patrimonio del acreedor sin pasar por su renta ni por el PIB.",
            "La **conversión de deuda en capital** de un plan de reestructuración sí es una operación financiera: sustituye un instrumento **AF.4** por uno **AF.5** en el balance del acreedor, con un efecto inmediato sobre el apalancamiento de la sociedad que la ficha 13.10 permite leer.",
            "El **orden de prelación** explica una asimetría visible en las cuentas financieras y en el sistema financiero de la ficha 8.01: crédito garantizado y no garantizado tienen tasas de recuperación radicalmente distintas, y por eso su precio difiere. La garantía real de la ficha 14.07 no crea valor, redistribuye prelación.",
            "La **calificación culpable con condena a cubrir el déficit** traslada un pasivo del sector sociedades al de hogares, igual que la responsabilidad del artículo 367 de la ficha 14.05: la deuda no desaparece, cambia de sector.",
            "Y la **segunda oportunidad** tiene una justificación que este plan reconoce: un deudor con deudas impagables de por vida deja de producir y de consumir formalmente. Exonerarlo devuelve una unidad a la economía observada, y ese argumento es el mismo que la ficha 11.08 encuentra tras cada resolución de crisis de deuda.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el concurso español liquida porque llega tarde, no porque esté mal diseñado**, y que toda la reforma reciente consiste en adelantar el momento de la intervención. Cuando el problema se aborda con dos años de margen todavía hay una empresa; cuando se aborda con dos meses, ya solo hay un reparto, y el reparto lo pierden casi siempre los mismos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué problema resuelve el derecho concursal?", a: "Uno de coordinación. La ejecución individual produce un mal resultado colectivo: el acreedor más rápido embarga la maquinaria y convierte en chatarra un negocio viable en dificultades. El concurso suspende esa carrera y sustituye la ejecución individual por un procedimiento colectivo que ordena el cobro." },
            { q: "¿Qué aporta la categoría de «probabilidad de insolvencia»?", a: "Permite acceder a las herramientas preconcursales hasta dos años antes de no poder cumplir, sin estar todavía en insolvencia. Desplaza el momento de la intervención, que era el problema real: cuando el concurso llegaba, el valor ya se había destruido y solo quedaba liquidar." },
            { q: "Masa activa 400.000 €, pasivo un millón. ¿Cuánto recuperan los acreedores ordinarios?", a: "10.000 € sobre 550.000 €: un 1,82 %. Antes cobran los créditos contra la masa (60.000 €), el privilegio especial hasta el valor del bien afecto (250.000 €) y el privilegio general (80.000 €). Los subordinados no cobran nada." },
            { q: "Un crédito hipotecario de 300.000 € sobre un bien que se vende por 250.000 €. ¿Qué pasa con la diferencia?", a: "Los 50.000 € no cubiertos bajan a crédito ordinario y compiten con los demás, recuperando el mismo 1,82 %. El privilegio especial alcanza solo hasta el valor del bien afecto, no hasta el importe nominal del crédito." },
            { q: "¿Qué permite la homologación judicial de un plan de reestructuración y por qué importa?", a: "Hacerlo vinculante incluso para acreedores y clases enteras que votaron en contra, siempre que respete garantías como que el disidente no reciba menos de lo que obtendría en la liquidación. Elimina el poder de veto del acreedor pequeño que bloqueaba para extraer un rescate a costa de todos." },
            { q: "¿Cómo registra el SEC una deuda que se declara incobrable?", a: "Como una otra variación del volumen de activos (K.5), no como una operación: nadie compra ni vende nada. Reduce el patrimonio del acreedor sin pasar por su renta ni por el PIB. La conversión de deuda en capital, en cambio, sí es una operación financiera: sustituye un AF.4 por un AF.5." },
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
              q: "Un socio presta dinero a su propia sociedad, que después entra en concurso. ¿Dónde cobra?",
              opciones: [
                "El último: los créditos de socios significativos quedan subordinados",
                "Antes que los ordinarios, si el préstamo se documentó en escritura pública",
                "Como acreedor con privilegio general, por haber sostenido la empresa",
                "Como acreedor ordinario, igual que cualquier prestamista",
              ],
              correcta: 0,
              porque: [
                "Y cobrar el último, con los porcentajes habituales de recuperación en el concurso español, significa casi siempre no cobrar. Conviene saberlo antes de firmar, no después.",
                "La forma del documento no altera la clasificación del crédito.",
                "No hay privilegio por haber ayudado: la relación con el deudor opera en sentido contrario.",
                "El ordenamiento no lo trata como a un tercero: es una persona especialmente relacionada con el deudor.",
              ],
            },
            {
              q: "Una empresa en dificultades retrasa la solicitud de concurso esperando que mejore el negocio. ¿Qué efecto tiene la espera?",
              opciones: [
                "Destruye valor cada mes: se pierden proveedores, clientes, trabajadores clave y financiación",
                "Mejora las opciones de convenio, al reducirse el pasivo con los pagos realizados",
                "Ninguno relevante: el concurso ordena la situación igual de bien más tarde",
                "Es neutral, siempre que se mantenga al corriente con Hacienda y la Seguridad Social",
              ],
              correcta: 0,
              porque: [
                "Lo que llega tarde al juzgado no es una empresa en dificultades, sino un cascarón. Es la razón de fondo de que el concurso español liquide más de lo que salva.",
                "Pagar a unos mientras no se puede pagar a todos agrava el problema y puede llegar a ser causa de calificación culpable.",
                "Llega a un negocio distinto y peor: el concurso no restaura lo que ya se ha ido.",
                "El retraso destruye valor con independencia de a quién se le pague.",
              ],
            },
            {
              q: "¿Qué relación hay entre no depositar las cuentas anuales y la calificación del concurso?",
              opciones: [
                "Solo agrava la sanción administrativa del Registro Mercantil",
                "Es una presunción de concurso culpable, con posible inhabilitación y condena a cubrir el déficit",
                "Impide solicitar el concurso hasta regularizar la situación registral",
                "Ninguna: son obligaciones de ámbitos distintos",
              ],
              correcta: 1,
              porque: [
                "La sanción registral existe y es lo de menos en este escenario.",
                "Lo es igual que no llevar contabilidad o cometer irregularidades relevantes en ella. La consecuencia puede alcanzar al patrimonio personal del administrador.",
                "No impide solicitarlo: el concurso se tramita igual, con la calificación en contra.",
                "Están conectadas de forma directa, y esa conexión es una de las razones económicas de peso para depositar.",
              ],
            },
            {
              q: "¿Puede un acreedor disconforme bloquear un plan de reestructuración?",
              opciones: [
                "Sí, si su crédito supera el 10 % del pasivo",
                "No: los planes se aprueban por mayoría simple del pasivo total",
                "Sí: nadie puede ser obligado a aceptar una quita",
                "No: la homologación judicial permite arrastrar a acreedores e incluso a clases enteras disidentes, con garantías",
              ],
              correcta: 3,
              porque: [
                "El peso del crédito influye en la votación por clases, no otorga un veto.",
                "No se vota por mayoría simple del total: se vota por clases, y ahí está la clave del mecanismo.",
                "Ese era el problema que el sistema anterior no resolvía: un acreedor pequeño podía hundir un acuerdo que convenía a todos.",
                "Entre las garantías está que el disidente no reciba menos de lo que obtendría en una liquidación. Sin arrastre, la reestructuración sería inviable en la práctica.",
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
            { ref: "Texto Refundido de la Ley Concursal (RDL 1/2020), consolidado", nota: "la norma completa; los libros sobre planes de reestructuración y sobre calificación son los centrales de esta ficha." },
            { ref: "Ley 16/2022, de reforma del texto refundido", nota: "traspone la directiva europea: probabilidad de insolvencia, planes, microempresas y segunda oportunidad." },
            { ref: "Directiva (UE) 2019/1023 sobre reestructuración e insolvencia", nota: "el diagnóstico europeo del que salió todo lo anterior; la exposición de motivos es muy clara." },
            { ref: "Colegio de Registradores e INE, estadística concursal", nota: "los datos reales sobre proporción de liquidaciones y tasas de recuperación en España." },
            { ref: "Banco de España, artículos analíticos sobre insolvencia empresarial", nota: "la lectura económica del sistema concursal y su efecto sobre la reasignación de recursos." },
          ],
        },
      ],
    },
  ],
};
