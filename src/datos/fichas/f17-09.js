/* Ficha 17.09 — Imposición autonómica y local. */

export default {
  codigo: "17.09",
  titulo: "Imposición autonómica y local",
  nivel: 2,
  bloque: "Fiscalidad española",
  tiempo: "4 h",
  nucleo:
    "Tres administraciones gravan a la vez sobre la misma riqueza, y lo que ordena el sistema no es un reparto de materias sino una prohibición: nadie puede gravar un hecho imponible que otro ya grava. De ahí que las comunidades tengan mucho poder sobre tributos que no crearon y casi ninguno para crear los suyos.",
  requiere: "17.01 El tributo · 17.03 IRPF II",
  abre: "18.05 Presupuestos autonómicos y locales · 18.06 Financiación autonómica · 18.07 Haciendas locales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En un Estado con tres niveles de administración, la pregunta no es quién puede cobrar impuestos —los tres pueden— sino **cómo se evita que los tres graven lo mismo**. La Constitución concede potestad tributaria originaria al Estado y **derivada** a comunidades y entidades locales, y la LOFCA la ordena con una técnica que conviene entender bien porque explica todo lo demás: en lugar de repartir materias, **prohíbe solapamientos**. Las comunidades no pueden gravar hechos imponibles ya gravados por el Estado, ni los que gravan los entes locales sin establecer una compensación.",
            "El efecto de esa prohibición es que **el espacio para inventar tributos propios es estrechísimo**. Los grandes hechos imponibles —obtener renta, consumir, poseer patrimonio, transmitirlo— están ocupados. A las comunidades les queda gravar aguas embalsadas, grandes superficies comerciales, emisiones, depósitos bancarios o instalaciones que inciden en el medio ambiente, y **buena parte de esas figuras han acabado ante el Tribunal Constitucional**, muchas veces anuladas por solaparse con un tributo estatal o local bajo una envoltura extrafiscal. Su peso recaudatorio conjunto es marginal.",
            "La financiación autonómica real no viene, por tanto, de tributos propios, sino de los **tributos cedidos**, y aquí hay que separar dos cosas que se confunden constantemente. **Ceder la recaudación** es entregar el dinero. **Ceder competencias normativas** es entregar el poder de decidir tipos, reducciones y deducciones. No van siempre juntas: en el IVA y en los Impuestos Especiales se cede un porcentaje de la recaudación **sin ninguna capacidad normativa**, porque son impuestos armonizados por la Unión Europea que no admiten tipos distintos dentro de un mismo país.",
            "Donde sí hay capacidad normativa amplia es en el **IRPF** —la mitad autonómica de la escala más sus deducciones propias, según la ficha 17.03—, en el **Impuesto sobre el Patrimonio**, en **Sucesiones y Donaciones**, en **Transmisiones Patrimoniales y Actos Jurídicos Documentados** y en los **tributos sobre el juego**. Esos son los impuestos donde la residencia cambia de verdad la factura, y donde la competencia fiscal entre territorios se ha vuelto un asunto político permanente. Al margen del sistema común quedan los **regímenes forales** de País Vasco y Navarra, que recaudan casi todos los impuestos y pagan al Estado un cupo o una aportación por lo no asumido.",
            "En el nivel local el diseño es distinto y más rígido. Los ayuntamientos **no crean impuestos**: la ley estatal de haciendas locales define un catálogo cerrado y ellos deciden, dentro de horquillas, el tipo y las bonificaciones. Tres son **obligatorios** —**IBI**, **Impuesto sobre Actividades Económicas** e **Impuesto sobre Vehículos de Tracción Mecánica**— y dos **potestativos**: el **ICIO** sobre construcciones y obras y el **impuesto sobre el incremento de valor de los terrenos**, la llamada plusvalía municipal.",
            "El **IBI** es la pieza central de la hacienda local y también la más incomprendida, porque su base —el **valor catastral**— la fija la Dirección General del Catastro, que es Administración **estatal**. El ayuntamiento solo elige el tipo. De ahí la escena que se repite cada vez que hay una revisión catastral: **la cuota sube con fuerza sin que el ayuntamiento haya tocado nada**, y la responsabilidad política se discute mientras la responsabilidad técnica está repartida entre dos administraciones distintas.",
            "Junto a los impuestos, las entidades locales disponen de **tasas**, **contribuciones especiales** y **precios públicos**, y distinguirlos importa porque el régimen jurídico cambia. La **tasa** es un tributo: se exige por un servicio de **solicitud o recepción obligatoria** o que **solo presta el sector público**, exige norma con rango legal y su importe **no puede superar el coste** del servicio. El **precio público** no es un tributo: procede cuando el servicio es voluntario y el sector privado también lo presta, se fija con más libertad y **debe cubrir al menos el coste**. Llamar precio público a lo que es una tasa es una de las causas más frecuentes de anulación de ordenanzas municipales.",
            "**La plusvalía municipal merece un párrafo propio** porque es el ejemplo español más claro de un principio constitucional aplicado a un impuesto concreto. Durante décadas calculó la base con un método **objetivo** —valor catastral del suelo por un coeficiente según los años transcurridos— que **presumía sin admitir prueba en contrario que el suelo siempre se revaloriza**. Tras el estallido de la burbuja inmobiliaria eso produjo cuotas sobre transmisiones con pérdida real, y el Tribunal Constitucional acabó declarando inconstitucional primero ese supuesto y después el método de cálculo mismo, por gravar una capacidad económica inexistente. La reforma posterior permite elegir entre el método objetivo y **la plusvalía realmente obtenida**.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Nivel", "Qué puede hacer", "Límite"],
          filas: [
            { nom: "Estado", sub: "Potestad originaria.", cols: ["Crear cualquier tributo por ley", "La Constitución y el Derecho de la Unión"] },
            { nom: "Comunidades: propios", sub: "Margen mínimo en la práctica.", cols: ["Crear tributos sobre hechos libres", "No solapar con el Estado ni con lo local"] },
            { nom: "Comunidades: cedidos", sub: "Aquí está el poder real.", cols: ["Tipos y beneficios en Patrimonio, Sucesiones, ITP-AJD e IRPF", "En IVA e IIEE solo reciben recaudación"] },
            { nom: "Entidades locales", sub: "Catálogo cerrado por ley estatal.", cols: ["Fijar tipos y bonificaciones dentro de horquillas", "No pueden crear impuestos nuevos"] },
            { nom: "Territorios forales", sub: "Concierto y convenio.", cols: ["Recaudar y regular casi todo el sistema", "Pagar cupo o aportación por lo no asumido"] },
          ],
          nota: "La tercera fila es la que hay que retener: **el poder tributario autonómico no está donde crea tributos, sino donde modula los ajenos**. Por eso la discusión sobre competencia fiscal entre comunidades gira siempre sobre los mismos cuatro impuestos.",
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
            { nom: "Cuota del IBI", sub: "El ayuntamiento solo elige el tipo.", cols: ["$C = t \\cdot V_{catastral}$"] },
            { nom: "Tipo que deja la cuota igual", sub: "Tras una revisión al alza del valor.", cols: ["$t' = t \\cdot \\dfrac{V_0}{V_1}$"] },
            { nom: "Plusvalía por el método objetivo", sub: "Presumía la existencia de incremento.", cols: ["$B = V_{suelo} \\cdot c(n)$"] },
            { nom: "Plusvalía real", sub: "La alternativa que introdujo la reforma.", cols: ["$B = V_{transmisión} - V_{adquisición}$"] },
            { nom: "Límite de la tasa", sub: "Es un tributo y no puede lucrar.", cols: ["$\\text{Tasa} \\leq \\text{coste del servicio}$"] },
            { nom: "Límite del precio público", sub: "La regla se invierte.", cols: ["$\\text{Precio} \\geq \\text{coste del servicio}$"] },
          ],
          nota: "Las dos últimas líneas son la prueba más rápida para distinguirlos: **la tasa tiene un techo y el precio público un suelo**. Si una ordenanza fija un importe superior al coste y lo llama tasa, está mal, y si cobra por debajo del coste algo que llama precio público, también.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la subida del IBI que nadie aprobó",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una vivienda tiene un **valor catastral de 120.000 €** y el ayuntamiento aplica un tipo del **0,66 %**. Tras una **revisión catastral** el valor pasa a **200.000 €**. El pleno municipal no debate ni aprueba nada: la ordenanza fiscal sigue diciendo 0,66 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Cuota antes de la revisión", "120.000 × 0,66 %", "792 €"],
            ["Cuota después de la revisión", "200.000 × 0,66 %", "1.320 €"],
            { celdas: ["Variación de la cuota", "1.320 / 792", "+66,7 %"], clase: "total" },
            ["Tipo que dejaría la cuota igual", "792 / 200.000", "0,396 %"],
            { celdas: ["Decisión del pleno", "Mantener el 0,66 %", "Subida efectiva del 66,7 %"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El ayuntamiento puede afirmar con toda literalidad que no ha subido los impuestos**, y el vecino puede afirmar con toda literalidad que le han subido el recibo dos tercios. Los dos dicen la verdad, porque **la cuota depende de dos factores y cada uno pertenece a una Administración distinta**: el valor catastral lo fija el Catastro, que es estatal, y el tipo lo fija el pleno municipal. Mantener el tipo cuando la base se revaloriza no es una decisión neutra: **es la decisión de subir**.",
            "El cálculo que hace visible esa decisión es el del **tipo neutral**: el 0,396 % que habría dejado la recaudación intacta. Cualquier tipo por encima de esa cifra es una subida y cualquiera por debajo, una rebaja, con independencia de lo que diga la ordenanza anterior. **Es el mismo mecanismo de la ficha 17.08 con los tipos específicos, funcionando en la dirección contraria**: allí la inflación rebajaba sin que nadie votara; aquí la revisión de la base sube sin que nadie vote.",
            "**Y la plusvalía municipal ilustra el fallo hermano.** Alguien compró un piso por 200.000 € en 2007 y lo vendió por 150.000 € en 2021: perdió 50.000 €. Con el método objetivo, si el valor catastral del suelo era de 60.000 € y el coeficiente por catorce años daba un 42 %, la base era **25.200 €** y la cuota al 30 %, **7.560 €**. Un impuesto de 7.560 € sobre un incremento de valor que **no existió**. El Tribunal Constitucional acabó anulando ese método por gravar una capacidad económica inexistente, que es exactamente el principio del artículo 31 que abre la ficha 17.01.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: dos hermanos, la misma herencia, dos facturas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos personas heredan patrimonios equivalentes de sus respectivos padres el mismo año. La cuota que resulta de aplicar la normativa estatal es, en ambos casos, de unos **60.000 €**. Una de ellas paga cerca de esa cifra; la otra, cuya comunidad aplica una **bonificación del 99 %** en las adquisiciones entre padres e hijos, paga **unos 600 €**. Ni la ley estatal ni el patrimonio heredado explican la diferencia: la explica **dónde residía el causante**.",
            "**Esto no es una anomalía del sistema: es el sistema funcionando como fue diseñado.** Sucesiones y Donaciones es un tributo cedido con amplias competencias normativas, así que las comunidades pueden fijar reducciones, tarifas y bonificaciones propias. La consecuencia buscada era la **autonomía**: que cada territorio decida su nivel de imposición y responda de ello ante sus votantes. La consecuencia no buscada es una **competencia fiscal a la baja**, en la que rebajar es visible y barato —el impuesto recae sobre pocos contribuyentes y cada año— y no rebajar se paga en las urnas.",
            "**El sistema contiene un freno que conviene conocer.** Los puntos de conexión no permiten elegir el territorio a última hora: en Sucesiones se atiende a la residencia habitual del **causante durante los cinco años anteriores**, y en Donaciones de inmuebles al lugar donde radica el bien. Sin esa regla, la planificación consistiría en trasladar el empadronamiento del enfermo terminal, y con ella el traslado tiene que ser real y anticipado. Es una regla antielusión de la misma familia que la cuarentena de los paraísos fiscales de la ficha 17.07.",
            "**La discusión de fondo excede al impuesto y conviene plantearla con precisión.** Quien defiende la armonización sostiene que un tributo cuya carga depende del código postal vulnera la igualdad y arrastra a una carrera a la baja que vacía una figura redistributiva. Quien defiende la autonomía responde que la capacidad de decidir ingresos es la contrapartida de la responsabilidad sobre el gasto, y que sin ella la autonomía financiera es nominal: **una comunidad que solo puede gastar lo que otro recauda no rinde cuentas de nada**. Las dos posiciones son coherentes y la elección entre ellas es política, no técnica. Lo que la ficha exige es no confundirlas con un error de diseño.",
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
            { t: "Creer que las comunidades pueden crear los impuestos que quieran", d: "No pueden gravar hechos imponibles ya gravados por el Estado, ni los locales sin compensación. Ese límite deja un margen mínimo, y muchas figuras propias han sido anuladas por el Tribunal Constitucional precisamente por solaparse bajo una envoltura extrafiscal." },
            { t: "Confundir cesión de recaudación con cesión de competencias normativas", d: "Son cosas distintas y no van siempre juntas. En IVA e Impuestos Especiales las comunidades reciben un porcentaje de la recaudación pero no pueden tocar ni tipos ni beneficios, porque son tributos armonizados por la Unión Europea." },
            { t: "Llamar tasa a un precio público, o al revés", d: "La tasa es un tributo, exige rango legal, procede cuando el servicio es obligatorio o solo lo presta el sector público, y no puede superar su coste. El precio público no es tributo, procede cuando el servicio es voluntario y concurrente, y debe cubrir al menos el coste. La confusión anula ordenanzas." },
            { t: "Culpar al ayuntamiento de una subida por revisión catastral", d: "El valor catastral lo fija el Catastro, que es Administración estatal; el ayuntamiento solo elige el tipo. Pero mantener el tipo cuando la base sube tampoco es neutro: en el ejemplo equivale a una subida efectiva del 66,7 %, y el tipo neutral habría sido el 0,396 %." },
            { t: "Suponer que la plusvalía municipal se paga siempre que se vende", d: "Grava el incremento de valor del terreno, y tras la doctrina constitucional no puede exigirse cuando no lo ha habido. La reforma permite además optar entre el método objetivo y la plusvalía realmente obtenida, eligiendo la menor." },
            { t: "Planificar una herencia trasladando la residencia a última hora", d: "El punto de conexión en Sucesiones es la residencia habitual del causante durante los cinco años anteriores, no la del momento del fallecimiento. El traslado tiene que ser real y anticipado para tener efecto." },
            { t: "Tratar el régimen foral como una excepción menor", d: "País Vasco y Navarra recaudan y regulan prácticamente todo el sistema y pagan al Estado un cupo o aportación por las competencias no asumidas. Es un modelo distinto, no un matiz del común, y cualquier comparación de presión fiscal entre territorios tiene que tenerlo en cuenta." },
            { t: "Interpretar las diferencias entre comunidades como un fallo del sistema", d: "Son su resultado previsto: la cesión de competencias normativas existe para que cada territorio decida y responda ante sus votantes. Que eso derive en competencia a la baja es un efecto real y discutible, pero es una discusión política sobre el diseño, no un defecto de aplicación." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Por qué los déficits de las administraciones no se suman sin más",
          texto:
            "El SEC divide las administraciones públicas en cuatro subsectores —**S.1311 Administración central, S.1312 comunidades autónomas, S.1313 corporaciones locales y S.1314 Seguridad Social**—, y la ficha 10.06 explica su lógica. Aquí interesa una consecuencia práctica que se malinterpreta continuamente. **Los saldos de los subsectores no son independientes**, porque entre ellos circulan transferencias enormes: las entregas a cuenta del sistema de financiación, las liquidaciones de años anteriores, la participación en los tributos del Estado, los mecanismos extraordinarios de liquidez. Cuando el Estado adelanta a una comunidad más de lo que después le corresponde, el déficit aparece en un subsector y no en el otro **sin que haya cambiado ninguna política de gasto**. Por eso el dato que tiene sentido comparar en el tiempo es el **déficit consolidado del conjunto**, donde esas operaciones internas se eliminan, y por eso atribuir el desvío de un año a «las comunidades» o «al Estado» mirando solo su saldo aislado suele ser un error de lectura, no un hallazgo.",
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
              q: "Un valor catastral pasa de 120.000 a 200.000 € y el ayuntamiento mantiene el tipo del 0,66 %. ¿Qué ocurre con la cuota?",
              a: "Pasa de 792 a 1.320 €, un 66,7 % más. El tipo que habría dejado la cuota igual es el 0,396 %, así que mantener el 0,66 % no es una decisión neutra: es la decisión de subir, aunque la ordenanza no se haya tocado.",
            },
            {
              q: "¿Por qué las comunidades apenas tienen tributos propios relevantes?",
              a: "Porque la LOFCA les prohíbe gravar hechos imponibles ya gravados por el Estado, y los grandes —renta, consumo, patrimonio, transmisiones— están ocupados. Su poder tributario real no está en crear tributos sino en modular los cedidos: IRPF autonómico, Patrimonio, Sucesiones, ITP-AJD y juego.",
            },
            {
              q: "¿Qué distingue una tasa de un precio público?",
              a: "La tasa es un tributo: procede cuando el servicio es de solicitud obligatoria o solo lo presta el sector público, exige rango legal y su importe no puede superar el coste. El precio público no es tributo, procede cuando el servicio es voluntario y concurrente, y debe cubrir al menos el coste. La tasa tiene techo; el precio público, suelo.",
            },
            {
              q: "Alguien compra por 200.000 € y vende por 150.000 €. Con el método objetivo, valor catastral del suelo 60.000 € y coeficiente del 42 %, ¿qué plusvalía municipal resultaba?",
              a: "Una base de 25.200 € y una cuota de 7.560 € al 30 %, pese a una pérdida real de 50.000 €. El Tribunal Constitucional anuló ese método por gravar una capacidad económica inexistente, y la reforma permite optar por la plusvalía realmente obtenida.",
            },
            {
              q: "¿Por qué no se pueden sumar sin más los déficits de Estado, comunidades y corporaciones locales?",
              a: "Porque entre los subsectores circulan transferencias muy grandes —entregas a cuenta, liquidaciones, mecanismos de liquidez— que desplazan el saldo de uno a otro sin que cambie ninguna política de gasto. El dato comparable es el déficit consolidado del conjunto, donde esas operaciones internas se eliminan.",
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
              q: "Tras una revisión catastral la cuota del IBI sube un 66,7 % sin que el pleno apruebe nada. ¿Cómo debe interpretarse?",
              opciones: [
                "El Estado ha subido el impuesto, porque el valor catastral lo fija el Catastro",
                "Mantener el tipo cuando la base sube es la decisión de subir: el tipo neutral era el 0,396 %",
                "El ayuntamiento ha subido el impuesto, porque la cuota la aprueba el pleno",
                "No hay subida real, porque el tipo de gravamen no se ha modificado",],
              correcta: 1,
              porque: [
                "El Catastro fija la base, pero no decide la cuota: sin el tipo municipal no hay recibo.",
                "La cuota depende de dos factores que pertenecen a Administraciones distintas, y no actuar sobre uno de ellos es una decisión con efectos.",
                "El pleno aprueba el tipo, no la cuota, y en este caso no lo ha tocado.",
                "La subida es del todo real: el vecino paga 1.320 € donde pagaba 792 €.",],
            },
            {
              q: "¿Qué pueden hacer las comunidades autónomas con el IVA que se les cede?",
              opciones: [
                "Establecer deducciones autonómicas como en el IRPF",
                "Recibir un porcentaje de la recaudación, sin ninguna competencia normativa",
                "Fijar tipos propios dentro de las horquillas que marque la ley estatal",
                "Crear exenciones para sectores de interés regional",],
              correcta: 1,
              porque: [
                "Las deducciones autonómicas existen en el IRPF precisamente porque allí sí hay competencias normativas cedidas.",
                "Es el ejemplo que separa ceder recaudación de ceder poder normativo, dos cosas que no van siempre juntas.",
                "No hay horquillas: el IVA está armonizado por la Unión Europea y no admite tipos distintos dentro de un país.",
                "Las exenciones del IVA están fijadas por la directiva europea y ningún nivel subestatal puede añadirlas.",],
            },
            {
              q: "Un ayuntamiento quiere cobrar por el uso de una piscina municipal, servicio voluntario que también prestan gimnasios privados. ¿Qué figura procede?",
              opciones: [
                "Una tasa, porque la presta una Administración pública",
                "Un impuesto local, si así lo recoge la ordenanza fiscal",
                "Una contribución especial, por tratarse de una instalación municipal",
                "Un precio público, que debe cubrir al menos el coste del servicio",],
              correcta: 3,
              porque: [
                "La tasa exige que el servicio sea de recepción obligatoria o que solo lo preste el sector público, y aquí no ocurre ninguna de las dos cosas.",
                "Los ayuntamientos no pueden crear impuestos: su catálogo está cerrado por ley estatal.",
                "La contribución especial financia obras que benefician a propietarios concretos, no el uso ordinario de una instalación.",
                "Servicio voluntario y concurrente con el sector privado, y por eso la regla del coste se invierte respecto de la tasa.",],
            },
            {
              q: "Dos herencias equivalentes pagan 60.000 € y 600 € según la comunidad del causante. ¿Qué explica la diferencia?",
              opciones: [
                "Que el impuesto es progresivo y una de las bases cae en un tramo inferior",
                "Que una de las comunidades tiene régimen foral y la otra no",
                "Que Sucesiones es un tributo cedido con amplias competencias normativas, y una comunidad aplica una bonificación del 99 %",
                "Que una de las herencias incluye bienes exentos por la normativa estatal",],
              correcta: 2,
              porque: [
                "La progresividad actuaría igual en ambos casos: la cuota estatal de partida es la misma, unos 60.000 €.",
                "El régimen foral explicaría otras diferencias, pero aquí la causa es una bonificación autonómica dentro del régimen común.",
                "Es el sistema funcionando como fue diseñado: la autonomía de ingreso produce diferencias territoriales, con competencia a la baja como efecto no buscado.",
                "El enunciado parte de patrimonios equivalentes y de una misma cuota según la normativa estatal.",],
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
            { t: "LO 8/1980 de Financiación de las Comunidades Autónomas (LOFCA)", d: "El artículo 6 contiene la prohibición de doble imposición que ordena todo el sistema, y el 19 delimita las competencias normativas sobre tributos cedidos. Son dos artículos cortos que explican por qué hay tan pocos tributos propios." },
            { t: "RDLeg 2/2004, texto refundido de la Ley de Haciendas Locales", d: "El catálogo cerrado de impuestos locales, las horquillas de tipos y el régimen de tasas y contribuciones especiales. El IBI en los artículos 60 a 77 y la plusvalía municipal en los 104 a 110, ya reformados." },
            { t: "STC 59/2017 y STC 182/2021 sobre la plusvalía municipal", d: "La primera anula el impuesto cuando no hay incremento de valor; la segunda, el método objetivo de cálculo. Leídas juntas son la mejor explicación práctica del principio de capacidad económica del artículo 31 de la Constitución." },
            { t: "Ministerio de Hacienda, Libro Electrónico de Tributación Autonómica", d: "Recoge año a año todas las medidas normativas de cada comunidad sobre los tributos cedidos. Es la fuente para comprobar de primera mano cuánto difiere realmente la carga entre territorios." },
          ],
        },
      ],
    },
  ],
};
