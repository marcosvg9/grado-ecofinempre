/* Ficha 18.02 — Los Presupuestos Generales del Estado: el ciclo. */

export default {
  codigo: "18.02",
  titulo: "Los Presupuestos Generales del Estado: el ciclo",
  nivel: 2,
  bloque: "Presupuesto y financiación pública",
  tiempo: "4 h",
  nucleo:
    "Elaboración, aprobación, ejecución y control: cuatro fases con cuatro titulares distintos, y ahí está el equilibrio de poderes. El detalle que decide quién manda de verdad es que las Cortes aprueban pero no pueden aumentar el gasto sin el visto bueno del Gobierno, así que la iniciativa presupuestaria es del Ejecutivo de principio a fin.",
  requiere: "18.01 El presupuesto público",
  abre: "18.03 Estructuras presupuestarias · 18.08 Control y fiscalización",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El artículo 134 de la Constitución reparte el ciclo en cuatro fases con **cuatro titulares distintos**, y ese reparto es toda la arquitectura del control. **Corresponde al Gobierno la elaboración** de los Presupuestos Generales del Estado **y a las Cortes su examen, enmienda y aprobación**. La ejecución vuelve al Gobierno, y el control se reparte entre un órgano interno del propio Ejecutivo y otro externo dependiente del Parlamento. Nadie controla su propia fase.",
            "La **elaboración** arranca mucho antes de lo que sugiere el calendario público. El Ministerio de Hacienda dicta una **orden de elaboración** con las reglas técnicas, y sobre ella los departamentos presentan sus peticiones, que se negocian en las **comisiones de análisis de programas**. Por encima de todo eso opera un límite previo y decisivo: el **techo de gasto no financiero**, aprobado junto con los objetivos de estabilidad, que fija cuánto puede repartirse antes de discutir cómo. **Quien fija el techo ha tomado la decisión más importante del presupuesto**, y lo hace meses antes de que el documento llegue al Parlamento.",
            "El proyecto debe presentarse ante el Congreso **al menos tres meses antes de que expire el del año anterior**, es decir, antes del 1 de octubre. La **aprobación** sigue el trámite de una ley ordinaria con particularidades importantes: **enmienda a la totalidad** con devolución —que si prospera obliga al Gobierno a retirar el proyecto—, enmiendas parciales, dictamen de comisión y votación en Pleno, después el Senado, que puede vetar o enmendar, y vuelta al Congreso.",
            "**La particularidad que decide el reparto real de poder está en el apartado sexto del artículo 134**: toda enmienda que suponga **aumento de los créditos o disminución de los ingresos** requiere la **conformidad del Gobierno** para su tramitación. El Parlamento aprueba, pero no puede gastar más ni recaudar menos por su cuenta. Puede rechazar el presupuesto entero y puede reasignar dentro de lo autorizado, pero no ampliarlo. Es la diferencia entre un poder de veto y un poder de iniciativa, y explica por qué el debate presupuestario se juega en las negociaciones previas y no en el hemiciclo.",
            "Hay otro límite que se olvida: la ley de presupuestos **no puede crear tributos**, aunque sí modificarlos cuando una ley sustantiva lo prevea. La razón es evitar que una ley de tramitación acelerada y contenido inabarcable se convierta en el vehículo para cualquier reforma. La jurisprudencia constitucional ha ido delimitando además un **contenido eventual** admisible —materias con relación directa con el gasto o la política económica— frente a las llamadas «leyes de acompañamiento», que nacieron precisamente para meter por otra puerta lo que en el presupuesto no cabía.",
            "La **ejecución** del gasto recorre cuatro fases encadenadas que hay que saber de memoria porque son el vocabulario de todos los informes. **A, autorización**: se reserva el crédito para una finalidad, sin destinatario aún. **D, disposición o compromiso**: se acuerda el gasto con un tercero concreto, tras la adjudicación. **O, obligación reconocida**: nace la deuda exigible, porque la prestación se ha realizado y acreditado. **P, pago**: sale el dinero. La secuencia A-D-O-P puede acumularse en un solo acto para gastos menores, pero conceptualmente son cuatro momentos distintos.",
            "**La fase que importa para las cifras públicas es la O**, no la P. Las **obligaciones reconocidas** son la magnitud que mide la ejecución presupuestaria y la que se compara con el crédito autorizado. Lo que queda entre la O y la P son **obligaciones pendientes de pago**, que no cambian el gasto ejecutado pero sí la tesorería y el **período medio de pago a proveedores**, que hoy es un indicador vigilado. Confundir gasto con pago es el error que produce lecturas equivocadas del cierre de un ejercicio.",
            "Durante el año el presupuesto se adapta mediante **modificaciones de crédito**, y su tipología responde a qué se altera. Los **créditos extraordinarios** y **suplementos** aumentan el gasto total y exigen la norma de mayor rango. Las **transferencias** mueven crédito entre partidas sin alterar el total. Las **ampliaciones** operan sobre créditos declarados ampliables por la propia ley. Las **generaciones** incorporan crédito por ingresos no previstos, y las **incorporaciones** rescatan remanentes del año anterior en supuestos tasados. **El volumen y el tipo de modificaciones dicen más sobre cómo se gobierna un presupuesto que el documento inicial.**",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Fase", "Quién la protagoniza", "Qué decide"],
          filas: [
            { nom: "Techo de gasto", sub: "Antes del proyecto.", cols: ["Gobierno, con los objetivos de estabilidad", "Cuánto hay que repartir"] },
            { nom: "Elaboración", sub: "Orden de elaboración y comisiones.", cols: ["Ministerio de Hacienda y departamentos", "Cómo se reparte ese techo"] },
            { nom: "Aprobación", sub: "Antes del 1 de octubre en el Congreso.", cols: ["Cortes Generales", "Aceptar, enmendar o devolver, sin poder ampliar"] },
            { nom: "Ejecución", sub: "Secuencia A-D-O-P.", cols: ["Gobierno y órganos gestores", "Cuándo y con quién se gasta lo autorizado"] },
            { nom: "Control interno", sub: "Previo y concomitante.", cols: ["IGAE, dentro del Ejecutivo", "Si cada acto se ajusta a la norma"] },
            { nom: "Control externo", sub: "Posterior y sobre la cuenta rendida.", cols: ["Tribunal de Cuentas, ante las Cortes", "Si el ejercicio cerrado fue legal y eficiente"] },
          ],
          nota: "Léase la primera fila con atención: **la decisión de mayor calado se toma antes de que el ciclo formal empiece**. Cuando el proyecto llega al Congreso, el margen ya está acotado por un techo que el Parlamento vota aparte y antes.",
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
            { nom: "Crédito disponible", sub: "Lo que aún puede autorizarse.", cols: ["$C_d = C_{def} - A$"] },
            { nom: "Crédito definitivo", sub: "El inicial más las modificaciones.", cols: ["$C_{def} = C_0 + \\Delta_{mod}$"] },
            { nom: "Grado de ejecución", sub: "Se mide sobre obligaciones, no sobre pagos.", cols: ["$e = \\dfrac{O}{C_{def}}$"] },
            { nom: "Obligaciones pendientes de pago", sub: "Afectan a la caja, no al gasto.", cols: ["$\\mathrm{OPP} = O - P$"] },
            { nom: "Secuencia de la ejecución", sub: "Cada fase acota a la siguiente.", cols: ["$P \\leq O \\leq D \\leq A \\leq C_{def}$"] },
            { nom: "Límite a las enmiendas", sub: "El Parlamento reasigna, no amplía.", cols: ["$\\sum \\Delta C_i \\leq 0$ sin conformidad del Gobierno"] },
          ],
          nota: "La quinta línea es la cadena entera en una desigualdad: **nunca se paga más de lo reconocido, ni se reconoce más de lo comprometido, ni se compromete más de lo autorizado, ni se autoriza más de lo acreditado**. Cualquier informe de ejecución se lee comprobando esa secuencia.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: leer una ejecución por sus cuatro fases",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un programa de inversión tiene un **crédito definitivo de 5.000.000 €**. A 31 de diciembre presenta **4.800.000 € autorizados**, **4.500.000 € comprometidos**, **4.200.000 € de obligaciones reconocidas** y **3.900.000 € pagados**. Cada cifra responde a una pregunta distinta.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Fase", "Importe", "Qué significa"],
          filas: [
            ["Crédito definitivo", "5.000.000 €", "El límite jurídico del gasto"],
            ["A — Autorizado", "4.800.000 €", "Crédito reservado; quedan 200.000 € disponibles"],
            ["D — Comprometido", "4.500.000 €", "Acordado con terceros tras adjudicación"],
            ["O — Obligaciones reconocidas", "4.200.000 €", "Gasto ejecutado: la prestación se realizó y se acreditó"],
            ["P — Pagos realizados", "3.900.000 €", "Salida efectiva de tesorería"],
            { celdas: ["Grado de ejecución", "4.200.000 / 5.000.000", "84,0 %"], clase: "total" },
            { celdas: ["Obligaciones pendientes de pago", "4.200.000 − 3.900.000", "300.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El grado de ejecución es el 84,0 %, y se calcula sobre las obligaciones reconocidas, no sobre los pagos.** Si se usaran los pagos saldría un 78 %, y esa cifra no mediría el gasto del ejercicio sino la velocidad de la tesorería. Es la confusión más habitual al comentar un cierre presupuestario, y produce titulares sobre «infraejecución» que en realidad describen retrasos en el pago de facturas ya reconocidas.",
            "**Los 300.000 € de obligaciones pendientes de pago no son gasto del año que viene**: son gasto de este año que se pagará el siguiente. Ya han consumido crédito, ya figuran en la liquidación y ya cuentan para el déficit en contabilidad nacional, porque el SEC imputa en devengo. Lo que arrastran al ejercicio siguiente es una **necesidad de caja**, y su acumulación es lo que mide el período medio de pago a proveedores.",
            "**Y quedan 800.000 € que no llegaron a reconocerse.** De ellos, 200.000 € ni siquiera se autorizaron y 300.000 € se autorizaron pero no se comprometieron, lo que suele indicar licitaciones que no se cerraron a tiempo. Otros 300.000 € se comprometieron pero la obra no llegó a certificarse dentro del ejercicio. **Toda esa cadena se pierde al cierre por la especialidad temporal de la ficha 18.01**, salvo que proceda una incorporación de remanentes, y por eso los capítulos de inversión son sistemáticamente los de menor ejecución de cualquier presupuesto.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la enmienda que no pudo tramitarse",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un grupo parlamentario registra una enmienda para **aumentar en 200 millones de euros** la dotación de un programa de dependencia, financiándola con **deuda adicional**. La Mesa del Congreso la remite al Gobierno, que **deniega su conformidad**, y la enmienda no llega a debatirse. El grupo denuncia un veto antidemocrático; el Gobierno invoca el artículo 134.6 de la Constitución. **Los dos tienen razón en lo que afirman, y la discusión de fondo es otra.**",
            "**La regla es clara y no es una anomalía española**: la mayoría de los sistemas parlamentarios reservan al Ejecutivo la iniciativa de gasto, porque quien responde de la ejecución y del equilibrio financiero debe poder impedir compromisos que no ha asumido. Sin esa regla, cada grupo tendría incentivo a añadir gasto sin asumir el coste político de financiarlo, y el presupuesto se convertiría en una suma de aspiraciones. **El Parlamento conserva el arma decisiva: puede rechazar el presupuesto entero.** Lo que no puede es reescribirlo al alza.",
            "**Lo interesante es lo que sí habría sido tramitable.** Una enmienda que aumentara esos 200 millones **minorando otra partida en el mismo importe** no incrementa los créditos totales, así que no requiere conformidad del Gobierno. Es decir: **el Parlamento puede reasignar libremente dentro del techo, pero no elevarlo**. Esa distinción, que parece técnica, es la que convierte el debate presupuestario en una discusión sobre prioridades y no sobre volumen, y explica por qué las negociaciones que importan ocurren antes de que el proyecto se registre.",
            "**Y hay un matiz que suele decidir estos casos.** La conformidad se exige cuando la enmienda supone aumento de créditos o disminución de ingresos **del presupuesto en tramitación**. La jurisprudencia constitucional ha precisado que el Gobierno debe **motivar** su negativa y que esta debe guardar relación efectiva con el presupuesto en curso: no es una facultad libre de rechazar lo que no le gusta. Ahí es donde se juegan los conflictos reales entre Mesa, grupos y Ejecutivo, y no en la existencia misma de la regla.",
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
            { t: "Medir la ejecución con los pagos en lugar de con las obligaciones reconocidas", d: "El gasto ejecutado es la fase O. Usar la P mezcla ejecución con velocidad de tesorería y produce lecturas de infraejecución que en realidad describen facturas reconocidas y aún no pagadas." },
            { t: "Creer que las obligaciones pendientes de pago son gasto del año siguiente", d: "Son gasto de este año que se pagará el siguiente: ya consumieron crédito y ya computan en el déficit del SEC, que imputa en devengo. Lo que arrastran es una necesidad de caja, y su acumulación mide el período medio de pago a proveedores." },
            { t: "Pensar que las Cortes pueden aumentar el gasto libremente", d: "Toda enmienda que aumente créditos o disminuya ingresos requiere conformidad del Gobierno. El Parlamento puede reasignar dentro del techo y puede rechazar el presupuesto entero, pero no ampliarlo por su cuenta." },
            { t: "Situar la decisión clave en el debate parlamentario", d: "El techo de gasto no financiero se aprueba antes y aparte, y determina cuánto hay que repartir. Cuando el proyecto llega al Congreso, lo que se discute es la distribución, no el volumen." },
            { t: "Suponer que la ley de presupuestos puede crear tributos", d: "No puede crearlos; solo modificarlos cuando una ley sustantiva lo prevea. El límite existe para que una ley de tramitación acelerada no se convierta en vehículo de cualquier reforma, y de ahí nacieron las leyes de acompañamiento." },
            { t: "Tratar todas las modificaciones de crédito como equivalentes", d: "Unas alteran el gasto total —créditos extraordinarios y suplementos— y otras solo lo redistribuyen —transferencias—. Exigen rangos y órganos distintos, y confundirlas impide valorar si un presupuesto se está gobernando o reescribiendo." },
            { t: "Confundir autorización con compromiso", d: "La A reserva crédito para una finalidad sin destinatario; la D lo acuerda con un tercero concreto tras la adjudicación. Un programa con mucha A y poca D suele indicar licitaciones que no se cerraron, no ahorro." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "La fase O es la que se parece al devengo, y aun así no coincide",
          texto:
            "De las cuatro fases de la ejecución, la que más se aproxima al criterio del SEC es la **O de obligación reconocida**, porque ambas registran cuando la prestación se ha realizado y no cuando el dinero sale. Por eso la contabilidad nacional trabaja sobre obligaciones y no sobre pagos, y por eso retrasar el pago de facturas **no reduce el déficit** en términos SEC, aunque mejore la caja del Tesoro. Pero la coincidencia no es total, y la diferencia tiene un nombre: **el gasto realizado y no reconocido**. Una prestación recibida cuyo expediente no se tramita a tiempo no genera obligación presupuestaria, pero **sí genera gasto para el SEC**, porque el hecho económico ocurrió. Es el mecanismo de las llamadas **facturas en el cajón**, y es la razón de que el ajuste de contabilidad nacional de la ficha 18.01 incluya siempre una partida por este concepto. La lección práctica es incómoda y conviene tenerla clara: **un presupuesto puede liquidarse sin desviación y arrojar aun así déficit en el dato que se comunica a Bruselas**.",
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
              q: "Crédito definitivo 5.000.000 €, autorizado 4.800.000 €, comprometido 4.500.000 €, obligaciones 4.200.000 € y pagos 3.900.000 €. ¿Cuál es el grado de ejecución?",
              a: "El 84,0 %, calculado sobre las obligaciones reconocidas (4.200.000 / 5.000.000). Con los pagos saldría un 78 %, que no mide ejecución sino velocidad de tesorería. Quedan además 300.000 € de obligaciones pendientes de pago.",
            },
            {
              q: "¿Por qué retrasar el pago de facturas no reduce el déficit en términos del SEC?",
              a: "Porque la contabilidad nacional imputa en devengo, cuando la prestación se ha realizado, igual que la fase O de obligación reconocida. Retrasar el pago solo desplaza la fase P: mejora la caja del Tesoro y empeora el período medio de pago, pero el gasto ya está computado.",
            },
            {
              q: "Un grupo parlamentario quiere aumentar en 200 millones un programa financiándolo con deuda. ¿Puede?",
              a: "No sin la conformidad del Gobierno, que el artículo 134.6 exige para toda enmienda que aumente créditos o disminuya ingresos. Sí podría hacerlo si minorara otra partida en el mismo importe, porque entonces no se incrementan los créditos totales: el Parlamento reasigna dentro del techo, pero no lo eleva.",
            },
            {
              q: "¿Qué distingue la fase de autorización de la de compromiso?",
              a: "La autorización reserva crédito para una finalidad, sin destinatario todavía; el compromiso o disposición acuerda el gasto con un tercero concreto, tras la adjudicación. Un programa con mucha autorización y poco compromiso suele indicar licitaciones que no se cerraron a tiempo, no ahorro.",
            },
            {
              q: "¿Cuándo se toma realmente la decisión de mayor calado del presupuesto?",
              a: "Antes de que empiece el ciclo formal, al aprobarse el techo de gasto no financiero junto con los objetivos de estabilidad. Ese techo fija cuánto hay que repartir; el debate parlamentario posterior versa sobre la distribución, no sobre el volumen.",
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
              q: "¿Con qué magnitud se mide el gasto ejecutado de un ejercicio?",
              opciones: [
                "Con los compromisos adquiridos con terceros tras la adjudicación",
                "Con las obligaciones reconocidas, la fase O de la secuencia A-D-O-P",
                "Con los pagos realizados, porque son la salida efectiva de dinero",
                "Con el crédito autorizado, que es el límite aprobado por las Cortes",],
              correcta: 1,
              porque: [
                "El compromiso es un paso previo: aún no ha nacido la deuda exigible.",
                "Registra el gasto cuando la prestación se ha realizado y acreditado, que es lo que se compara con el crédito.",
                "Los pagos miden velocidad de tesorería: usarlos produce lecturas falsas de infraejecución.",
                "El crédito es el techo disponible, no lo efectivamente gastado.",],
            },
            {
              q: "Una enmienda aumenta 200 millones un programa y minora otro en la misma cuantía. ¿Requiere conformidad del Gobierno?",
              opciones: [
                "No, porque no incrementa los créditos totales del presupuesto",
                "Sí, porque toda enmienda al estado de gastos la requiere",
                "No, porque las enmiendas parciales nunca la requieren",
                "Sí, salvo que el Senado la haya aprobado previamente",],
              correcta: 0,
              porque: [
                "El Parlamento puede reasignar libremente dentro del techo; lo que no puede es elevarlo.",
                "Solo la requieren las que aumentan créditos o disminuyen ingresos, no cualquier enmienda al gasto.",
                "Sí la requieren cuando aumentan el gasto total: el criterio es el efecto, no el carácter parcial.",
                "El trámite en el Senado es posterior y no altera la exigencia del artículo 134.6.",],
            },
            {
              q: "¿Qué son las «facturas en el cajón» desde el punto de vista de la contabilidad nacional?",
              opciones: [
                "Compromisos adquiridos que no llegaron a ejecutarse dentro del ejercicio",
                "Obligaciones reconocidas que quedan pendientes de pago al cierre",
                "Gasto realizado y no reconocido en presupuesto, que el SEC sí computa como gasto",
                "Pagos aplazados que reducen el déficit del ejercicio",],
              correcta: 2,
              porque: [
                "Un compromiso no ejecutado no genera gasto en ninguno de los dos criterios.",
                "Esas son las obligaciones pendientes de pago, que sí están reconocidas y ya computaron.",
                "El hecho económico ocurrió, así que genera gasto para el SEC aunque el expediente no se tramitara: de ahí una partida fija del ajuste.",
                "Aplazar pagos mejora la caja pero no reduce el déficit medido en devengo.",],
            },
            {
              q: "¿Cuándo debe presentarse el proyecto de Presupuestos ante el Congreso?",
              opciones: [
                "Al menos tres meses antes de que expire el presupuesto vigente",
                "Dentro de los treinta días siguientes a la aprobación del techo de gasto",
                "En el primer periodo de sesiones de cada año natural",
                "Antes del 31 de diciembre del ejercicio anterior",],
              correcta: 0,
              porque: [
                "Es decir, antes del 1 de octubre, para que las Cortes dispongan de tiempo de tramitación.",
                "El techo de gasto se aprueba antes, pero la Constitución no vincula ambos plazos de ese modo.",
                "El periodo de sesiones no es el criterio: la Constitución fija un plazo referido a la expiración del presupuesto vigente.",
                "Esa es la fecha en que expira el anterior, no el plazo de presentación del proyecto.",],
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
            { t: "Constitución Española, artículo 134", d: "Los seis apartados que ordenan el ciclo, incluido el límite a las enmiendas que aumenten gasto y la prórroga automática. Conviene leerlo entero: cabe en una página y decide el reparto de poder presupuestario." },
            { t: "Ley 47/2003, General Presupuestaria, títulos II y III", d: "Elaboración, estructura y ejecución. Las fases del gasto y las modificaciones de crédito están aquí, con el detalle de qué órgano es competente para cada una." },
            { t: "Orden anual de elaboración de los PGE", d: "El documento técnico que fija cómo se construye el presupuesto cada año. Es árido y muy revelador: muestra qué se pide a los departamentos y con qué criterios se les recorta." },
            { t: "IGAE, Central de Información y ejecución mensual del Estado", d: "Publica la ejecución por fases y por programas. Es donde practicar la lectura de esta ficha con datos reales, comprobando la secuencia entre crédito, autorizado, comprometido, reconocido y pagado." },
          ],
        },
      ],
    },
  ],
};
