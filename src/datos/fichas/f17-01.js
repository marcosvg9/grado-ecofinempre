/* Ficha 17.01 — El tributo: elementos, clases y aplicación. */

export default {
  codigo: "17.01",
  titulo: "El tributo: elementos, clases y aplicación",
  nivel: 1,
  bloque: "Fiscalidad española",
  tiempo: "4 h",
  nucleo:
    "Todo tributo se desmonta con las mismas seis piezas: hecho imponible, devengo, sujeto pasivo, base, tipo y cuota. Quien las identifica puede leer una ley fiscal que no ha estudiado nunca, porque lo que cambia entre impuestos es el contenido de cada pieza, no la estructura.",
  requiere: "10.03 Sistema fiscal español · 1.03 Elasticidades e incidencia",
  abre: "17.02 IRPF · 17.04 Sociedades · 17.05 IVA · 18.01 El presupuesto público",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **tributo** es una prestación pecuniaria exigida por una Administración pública porque alguien ha realizado el supuesto de hecho al que la ley vincula el deber de contribuir. Tres rasgos lo definen: es **coactivo** —no se pacta—, es **legal** —solo se establece por ley— y su fin primordial es **obtener ingresos para el gasto público**, aunque pueda perseguir además otros objetivos. Esa última cautela no es retórica: hay tributos cuya recaudación es secundaria frente a la conducta que pretenden desincentivar, y la ficha 17.08 vive entera de esa idea.",
            "La Ley General Tributaria distingue **tres clases de tributo**, y la diferencia entre ellas es qué recibe a cambio quien paga. En el **impuesto** no recibe nada individualizable: se exige por poner de manifiesto capacidad económica —obtener renta, poseer patrimonio, consumir—. En la **tasa** sí hay una contrapartida directa: el uso privativo del dominio público o un servicio que la Administración presta y que el interesado no puede obtener libremente en el sector privado. En la **contribución especial**, el pagador obtiene un beneficio o un aumento de valor en sus bienes derivado de una obra pública. Quien vive junto a una calle recién urbanizada paga contribución especial; quien aparca en zona regulada paga tasa; quien gana un sueldo paga impuesto.",
            "Los **elementos del tributo** son la caja de herramientas del tema. El **hecho imponible** es el presupuesto fijado por la ley cuya realización origina la obligación. El **devengo** es el momento en que se entiende realizado, y no coincide necesariamente con el pago. El **sujeto pasivo** es quien queda obligado ante la Administración, que puede ser el **contribuyente** —quien realiza el hecho imponible— o el **sustituto**, que ocupa su lugar por mandato legal. La **base imponible** cuantifica el hecho imponible; restándole las reducciones que la ley admita se llega a la **base liquidable**. Aplicando el **tipo de gravamen** se obtiene la **cuota íntegra**, de la que las deducciones dan la **cuota líquida**, y descontando retenciones y pagos a cuenta, la **cuota diferencial**, que es lo que se ingresa o se devuelve.",
            "**La distinción entre no sujeción y exención es la que más se equivoca y la que más consecuencias tiene.** En la **no sujeción**, el hecho ni siquiera encaja en la definición del hecho imponible: está fuera del impuesto, y las normas de no sujeción son meramente didácticas, aclaran una frontera. En la **exención**, el hecho **sí** se realiza y **sí** queda sujeto, pero la ley dispensa del pago. La consecuencia práctica es grande: quien realiza una operación exenta suele conservar obligaciones formales —declarar, facturar, informar— y, en el IVA, la exención puede impedirle deducir el impuesto soportado, lo que convierte un beneficio aparente en un coste. La ficha 17.06 desarrolla ese mecanismo.",
            "Las **clasificaciones** de los impuestos no son un adorno académico: cada una anticipa un comportamiento distinto. **Directo** frente a **indirecto** separa lo que grava una manifestación inmediata de capacidad —renta, patrimonio— de lo que grava una mediata, como el consumo. **Personal** frente a **real** distingue si el hecho imponible se define en relación con una persona concreta o con un bien, con independencia de quién lo posea. **Subjetivo** frente a **objetivo** dice si las circunstancias personales del sujeto modulan la carga. **Periódico** frente a **instantáneo** separa los que gravan una situación que se prolonga en el tiempo, con devengos sucesivos, de los que gravan un acto aislado. Y **progresivo** frente a **proporcional** describe si el tipo medio crece con la base o se mantiene.",
            "La **base imponible** puede determinarse por tres métodos. La **estimación directa** utiliza los datos reales del contribuyente y es el régimen general. La **estimación objetiva** sustituye los datos reales por signos, índices o módulos previamente fijados —metros de local, personal empleado, potencia contratada—: simplifica y, por construcción, se desvía de la capacidad real de cada uno. La **estimación indirecta** es un método subsidiario que la Administración aplica cuando no puede conocer los datos por incumplimiento del obligado, resistencia a la inspección o desaparición de la contabilidad; no es una opción del contribuyente sino una consecuencia.",
            "La **aplicación de los tributos** se articula en procedimientos con lógicas distintas. La **gestión** comprende la recepción de declaraciones, las liquidaciones y las comprobaciones limitadas. La **inspección** investiga hechos no declarados y comprueba los declarados con facultades más amplias. La **recaudación** cobra, en período voluntario y después en vía de apremio con recargo. Y la **revisión** ofrece las vías para discutir un acto tributario: recurso de reposición ante el mismo órgano, reclamación económico-administrativa ante los tribunales de ese orden y, agotada la vía administrativa, recurso contencioso-administrativo.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Clase de tributo", "¿Qué recibe quien paga?", "Ejemplo"],
          filas: [
            { nom: "Impuesto", sub: "Grava capacidad económica sin contrapartida individualizable.", cols: ["Nada identificable para él", "IRPF, IVA, IBI"] },
            { nom: "Tasa", sub: "Servicio o uso del dominio público no disponible libremente en el mercado.", cols: ["Un servicio o un uso concreto", "Expedición del DNI, zona azul, recogida de basuras"] },
            { nom: "Contribución especial", sub: "Beneficio o aumento de valor por una obra o servicio público.", cols: ["Un aumento de valor en sus bienes", "Urbanización de una calle"] },
            { nom: "Precio público", sub: "No es tributo: hay alternativa privada y solicitud voluntaria.", cols: ["Un servicio que podría contratar en otro sitio", "Entrada a una piscina municipal"] },
            { nom: "Sanción", sub: "No es tributo: no grava capacidad, castiga una conducta.", cols: ["Nada: es un castigo", "Multa de tráfico"] },
          ],
          nota: "Las dos últimas filas están aquí porque son las confusiones habituales. El **precio público** se distingue de la tasa por la voluntariedad y por la existencia de alternativa privada; la **sanción** no es tributo en absoluto, y la contabilidad nacional lo refleja clasificándola como transferencia corriente diversa y no como impuesto, según se vio en la ficha 12.07.",
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
            { nom: "Base liquidable", sub: "Las reducciones actúan sobre la base, no sobre la cuota.", cols: ["BL = BI − reducciones"] },
            { nom: "Cuota íntegra", sub: "Tipo fijo o escala progresiva por tramos.", cols: ["CI = BL × tipo de gravamen"] },
            { nom: "Cuota líquida", sub: "Las deducciones actúan sobre la cuota, no sobre la base.", cols: ["CL = CI − deducciones"] },
            { nom: "Cuota diferencial", sub: "Lo que se ingresa o se devuelve al declarar.", cols: ["CD = CL − retenciones − pagos a cuenta"] },
            { nom: "Tipo medio efectivo", sub: "La carga real soportada.", cols: ["$t_m = \\dfrac{\\mathrm{CL}}{\\mathrm{BI}}$"] },
            { nom: "Tipo marginal", sub: "Gobierna los incentivos: es el que se aplica al último euro.", cols: ["$t_g = \\dfrac{\\Delta \\mathrm{CI}}{\\Delta \\mathrm{BL}}$"] },
          ],
          nota: "El orden importa y es la fuente del error más frecuente del tema: **una reducción vale más cuanto mayor sea el tipo marginal de quien la disfruta, y una deducción vale lo mismo para todos**. Por eso reducir la base es regresivo y deducir de la cuota no lo es.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: de la base imponible a lo que se ingresa",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un contribuyente con una **base imponible de 40.000 €** tiene derecho a una reducción de 3.000 € y a una deducción de 600 €, y le han retenido 5.200 € a lo largo del año. La escala, simplificada, grava al **20 %** hasta 20.000 € y al **35 %** el exceso.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Cálculo", "Importe"],
          filas: [
            ["Base imponible", "Punto de partida", "40.000 €"],
            ["− Reducciones", "Actúan sobre la base", "−3.000 €"],
            ["Base liquidable", "40.000 − 3.000", "37.000 €"],
            ["Cuota íntegra", "20.000 × 20 % + 17.000 × 35 %", "9.950 €"],
            ["− Deducciones", "Actúan sobre la cuota", "−600 €"],
            ["Cuota líquida", "9.950 − 600", "9.350 €"],
            ["− Retenciones", "Ya ingresadas durante el año", "−5.200 €"],
            { celdas: ["Cuota diferencial", "9.350 − 5.200", "4.150 € a ingresar"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Dos lecturas que conviene extraer.** El **tipo medio efectivo** es 9.350 / 40.000 = **23,4 %**, y el **tipo marginal** es el 35 %: cada euro adicional que gane tributará a esa tasa, no al 23,4 %. Confundirlos lleva a conclusiones opuestas sobre los incentivos, como ya advertía la ficha 10.03.",
            "Y el efecto de la reducción: los 3.000 € reducidos han evitado tributar al **35 %**, así que valen 1.050 € de ahorro. Los 600 € de deducción valen exactamente 600 €. Si el mismo beneficio se hubiera concedido a alguien cuyo tipo marginal fuese el 20 %, la reducción le habría ahorrado solo 600 € y la deducción, otra vez, 600 €. **La misma norma reparte beneficio de forma muy distinta según dónde actúe.**",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la exención que encarece",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una clínica dental factura 300.000 € al año. Sus servicios sanitarios están **exentos de IVA**, lo que suena a ventaja: no repercute impuesto a sus pacientes y su precio final es más bajo que si tuviera que añadir un 21 %.",
            "La contrapartida aparece en el otro lado. Al no realizar operaciones sujetas y no exentas, **no puede deducir el IVA que soporta** en sus compras: el sillón dental, el material fungible, el alquiler del local, los suministros. Si soporta 18.000 € de IVA al año, esos 18.000 € **no son un crédito frente a Hacienda sino un coste más**, que se incorpora al precio de adquisición de lo que compra —exactamente el mecanismo que la ficha 5.05 señalaba para las existencias—.",
            "El resultado es que la exención no elimina el impuesto: lo traslada de un tramo visible a uno invisible. El paciente no ve IVA en su factura y lo está pagando dentro del precio, incorporado al coste de la clínica. Y como el IVA soportado no deducible **sí es coste**, aparece en la cuenta de resultados y reduce el beneficio, mientras que el IVA repercutido y el deducible no pasan nunca por ella.",
            "**La moraleja general del caso** es que en el IVA una exención sin derecho a deducir es un beneficio para el consumidor final solo cuando el margen de la cadena posterior es pequeño, y puede ser un perjuicio para el operador exento frente a un competidor que sí pueda deducir. Es la razón de que muchos operadores exentos pidan tributar y no lo contrario.",
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
            { t: "Confundir no sujeción con exención", d: "En la no sujeción el hecho está fuera del impuesto; en la exención está dentro y la ley dispensa del pago. La diferencia decide si hay obligaciones formales, si el hecho computa a otros efectos y —en el IVA— si se conserva el derecho a deducir. Es la distinción más rentable de todo el tema." },
            { t: "Creer que el sujeto pasivo es quien soporta el impuesto", d: "La ley determina quién declara e ingresa; las elasticidades determinan quién acaba pagando. Son dos preguntas distintas, y solo la primera la contesta el boletín oficial. Es la incidencia de las fichas 1.03 y 10.03 aplicada al vocabulario jurídico." },
            { t: "Confundir tasa con precio público", d: "La tasa exige que el servicio no sea de solicitud voluntaria o que no lo preste el sector privado. Si hay alternativa real y la solicitud es libre, es precio público y no es un tributo, con consecuencias sobre cómo se aprueba y cómo se recurre." },
            { t: "Confundir base imponible con base liquidable", d: "Entre una y otra están las reducciones. Aplicar el tipo sobre la base imponible cuando había reducciones sobrestima la cuota, y es el fallo aritmético más común al liquidar." },
            { t: "Tratar reducciones y deducciones como equivalentes", d: "Una reducción baja la base y su valor depende del tipo marginal de quien la aplica; una deducción baja la cuota y vale igual para todos. Un mismo beneficio de 3.000 € vale 1.050 € o 600 € según dónde se coloque." },
            { t: "Elegir la estimación indirecta como si fuera un régimen", d: "No lo es: es la reacción de la Administración cuando no puede determinar la base por incumplimiento del obligado. No se opta por ella, se cae en ella, y suele venir acompañada de sanción." },
            { t: "Llamar impuesto a una multa", d: "Comparten ser obligatorias y no dar contraprestación, y les falta lo esencial: la sanción no grava capacidad económica, castiga una conducta. La contabilidad nacional lo recoge clasificándolas en D.75 y no entre los impuestos, como se vio en la ficha 12.07." },
            { t: "Suponer que todo tributo persigue recaudar", d: "El fin primordial es recaudatorio, y hay tributos cuyo éxito consiste precisamente en recaudar poco porque han modificado la conducta: los pigouvianos de la ficha 10.05 y los impuestos especiales de la 17.08." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Un mismo tributo, tres códigos del SEC",
          texto:
            "La clasificación jurídica y la estadística no coinciden, y quien maneje las dos tiene que traducir. Los impuestos **sobre la producción y las importaciones** son **D.2**, y dentro de ellos el IVA y los impuestos especiales son **D.21** y el IBI de un local o el IAE son **D.29**. Los impuestos **corrientes sobre la renta y el patrimonio** —IRPF, Sociedades— son **D.5**. El impuesto de **sucesiones y donaciones** no es ninguno de los dos: es **D.91**, transferencia de capital, y por eso no reduce la renta disponible sino el patrimonio neto. Y las **multas** son **D.75**. El criterio que ordena esa traducción es el de las fichas 13.05 y 13.06: lo que decide no es el nombre del tributo sino qué grava y con qué periodicidad.",
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
              q: "¿Qué diferencia hay entre una operación no sujeta y una exenta, y por qué importa?",
              a: "En la no sujeta el hecho no encaja en el hecho imponible: está fuera del impuesto. En la exenta sí se realiza el hecho imponible y la ley dispensa del pago. Importa porque el operador exento suele conservar obligaciones formales y, en el IVA, pierde el derecho a deducir el impuesto soportado, que se le convierte en coste.",
            },
            {
              q: "Base imponible 40.000 €, reducción de 3.000 € y deducción de 600 €, con escala del 20 % hasta 20.000 y 35 % después. ¿Cuál es la cuota líquida?",
              a: "9.350 €. Base liquidable 37.000; cuota íntegra 20.000 × 20 % + 17.000 × 35 % = 4.000 + 5.950 = 9.950; menos 600 de deducción, 9.350. El tipo medio efectivo es del 23,4 % y el marginal del 35 %.",
            },
            {
              q: "¿Por qué una reducción de 3.000 € no vale lo mismo para dos contribuyentes distintos?",
              a: "Porque actúa sobre la base y su valor es 3.000 × tipo marginal. A quien esté en el 35 % le ahorra 1.050 €; a quien esté en el 20 %, 600 €. Una deducción de 600 € en cuota, en cambio, vale 600 € para los dos. Colocar un beneficio fiscal en la base o en la cuota es una decisión distributiva.",
            },
            {
              q: "Un ayuntamiento cobra por la entrada a su piscina municipal. ¿Es una tasa?",
              a: "No: es un precio público. La solicitud es voluntaria y existen piscinas privadas que prestan el mismo servicio, así que faltan las dos notas que caracterizan a la tasa. La consecuencia es procedimental: no se aprueba por ordenanza fiscal ni se impugna por la vía tributaria.",
            },
            {
              q: "¿En qué se diferencia la estimación objetiva de la indirecta?",
              a: "La objetiva es un régimen al que se accede voluntariamente cuando la ley lo permite, y sustituye los datos reales por módulos. La indirecta es subsidiaria y la aplica la Administración cuando no puede conocer los datos por incumplimiento, resistencia o desaparición de la contabilidad. Una se elige; en la otra se cae.",
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
              q: "Una operación está exenta de IVA. ¿Qué implica para quien la realiza?",
              opciones: [
                "Que realiza el hecho imponible, queda dispensado del pago y suele perder el derecho a deducir el IVA soportado",
                "Que puede optar entre repercutir el impuesto o no hacerlo",
                "Que tributa a tipo cero, conservando el derecho a deducir",
                "Que queda fuera del impuesto y sin obligación formal alguna",],
              correcta: 0,
              porque: [
                "Y por eso la exención puede ser un perjuicio: el impuesto soportado deja de ser un crédito frente a Hacienda y pasa a ser coste, incorporándose al precio.",
                "La exención no es opcional: viene impuesta por la ley cuando concurre el supuesto.",
                "El tipo cero conserva el derecho a deducir y es una figura distinta de la exención, aunque el consumidor no note la diferencia.",
                "Quedar fuera del impuesto es la no sujeción, que es otra cosa: en la exención el hecho sí se realiza.",],
            },
            {
              q: "Un ayuntamiento urbaniza una calle y el valor de los inmuebles colindantes sube. ¿Qué tributo puede exigir a sus propietarios?",
              opciones: [
                "Una tasa, por la prestación de un servicio público",
                "Ninguno: la revalorización no es un hecho imponible",
                "Un impuesto, porque se ha manifestado capacidad económica",
                "Una contribución especial, por el aumento de valor derivado de una obra pública",],
              correcta: 3,
              porque: [
                "La tasa exige un servicio o un uso del dominio público solicitado o recibido por el interesado, no una obra que revaloriza su patrimonio.",
                "Sí lo es, y con figura propia: es el tercer género de tributo junto al impuesto y la tasa.",
                "El impuesto se caracteriza precisamente por no tener contrapartida individualizable, y aquí la hay.",
                "Es el supuesto exacto de la contribución especial: beneficio o aumento de valor de los bienes como consecuencia de obras públicas o del establecimiento o ampliación de servicios.",],
            },
            {
              q: "¿Qué tipo gobierna los incentivos de un contribuyente que se plantea trabajar unas horas más?",
              opciones: [
                "El tipo marginal, que es el que se aplicará al euro adicional",
                "El tipo de retención que le aplica su pagador",
                "El tipo nominal máximo de la escala",
                "El tipo medio efectivo, que mide su carga real",],
              correcta: 0,
              porque: [
                "La decisión de ganar un euro más se toma comparando ese euro con lo que se lleva el impuesto de ese euro, no de todos los anteriores.",
                "La retención es un pago a cuenta que se regulariza al declarar: no es el gravamen efectivo del euro adicional.",
                "El nominal máximo es el del último tramo de la tarifa y casi nadie lo soporta sobre el conjunto de su renta.",
                "El tipo medio dice cuánto se soporta en conjunto y no describe el efecto de la decisión que se está tomando.",],
            },
            {
              q: "La Administración no puede determinar la base imponible porque el obligado ha destruido su contabilidad. ¿Qué método se aplica?",
              opciones: [
                "Se anula la liquidación por imposibilidad de determinar la base",
                "Estimación indirecta, que es subsidiaria y no la elige el contribuyente",
                "Estimación directa, reconstruyendo los datos con la información de terceros",
                "Estimación objetiva, sustituyendo los datos reales por módulos",],
              correcta: 1,
              porque: [
                "La imposibilidad de conocer los datos no exime de tributar: para eso existe el método subsidiario.",
                "Se aplica cuando el incumplimiento, la resistencia a la inspección o la desaparición de los registros impiden conocer la base, y suele acompañarse de sanción.",
                "La directa necesita datos reales y ciertos, que es justamente lo que falta.",
                "La objetiva es un régimen voluntario previsto por la ley para determinados contribuyentes, no una respuesta al incumplimiento.",],
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
            { t: "Ley 58/2003, General Tributaria", d: "Títulos I y II. Los artículos 2 (concepto y clases), 20 a 22 (hecho imponible, exenciones), 49 a 57 (elementos de cuantificación) y 50 a 53 (métodos de determinación de la base) contienen casi todo el vocabulario del tema." },
            { t: "Constitución española, artículos 31 y 133", d: "El deber de contribuir según capacidad económica mediante un sistema justo, progresivo y no confiscatorio, y la reserva de ley en materia tributaria. Es el marco al que se remiten todas las discusiones de fondo." },
            { t: "Pérez Royo, Derecho financiero y tributario. Parte general", d: "El manual de referencia para la teoría del tributo. Especialmente útil el tratamiento de la relación jurídico-tributaria y de la distinción entre sujeción y exención." },
            { t: "Agencia Tributaria, Manuales prácticos", d: "Publicados cada campaña y gratuitos. Traducen la ley a procedimiento y a casos concretos, que es donde se ve si los conceptos de esta ficha se han entendido." },
          ],
        },
      ],
    },
  ],
};
