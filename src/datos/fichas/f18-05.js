/* Ficha 18.05 — Presupuestos autonómicos y locales. */

export default {
  codigo: "18.05",
  titulo: "Presupuestos autonómicos y locales",
  nivel: 2,
  bloque: "Presupuesto y financiación pública",
  tiempo: "4 h",
  nucleo:
    "Las comunidades gestionan sanidad, educación y servicios sociales —el grueso del gasto que la gente identifica con el Estado del bienestar— con una autonomía de ingreso mucho menor que su autonomía de gasto. Esa asimetría no es un detalle organizativo: determina que ante cualquier ajuste el margen esté casi todo en el lado del gasto y casi nada en el del ingreso.",
  requiere: "18.03 Estructuras presupuestarias · 17.09 Imposición autonómica y local",
  abre: "18.06 Financiación autonómica · 18.07 Haciendas locales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "España es uno de los países más descentralizados de su entorno **por el lado del gasto**: las comunidades autónomas ejecutan en torno a un tercio del gasto público total y prácticamente todo el gasto en **sanidad, educación y servicios sociales**. Cuando alguien habla del Estado del bienestar en su experiencia cotidiana —el hospital, el colegio, la dependencia— está hablando casi siempre de gasto autonómico, aunque la conversación política se dirija al Gobierno central.",
            "**Por el lado del ingreso la descentralización es mucho menor**, y esa asimetría es el hecho estructural del que cuelga todo lo demás. Las comunidades disponen de tributos cedidos con competencias normativas —la ficha 17.09 los detalla— pero la parte principal de sus recursos llega por **entregas a cuenta del sistema de financiación**, calculadas por el Estado sobre previsiones y **liquidadas dos años después**. Es decir: gestionan un gasto muy rígido con un ingreso que ni fijan ni conocen con certeza en el momento de presupuestar.",
            "**La rigidez del gasto merece subrayarse porque explica el comportamiento de estos presupuestos.** Sanidad y educación son intensivas en personal: el capítulo 1 es enorme y no se ajusta a corto plazo sin decisiones muy visibles. A eso se suman conciertos, farmacia y prestaciones cuya demanda no depende de la voluntad del gestor sino de la demografía y de la epidemiología. **El resultado es que la parte comprimible del presupuesto autonómico es pequeña**, y cuando llega un ajuste se concentra en inversión y en gasto corriente no sanitario, que son las partidas donde recortar produce menos ruido inmediato y más deterioro acumulado.",
            "El **ciclo presupuestario autonómico** reproduce el estatal —proyecto del Consejo de Gobierno, aprobación por la asamblea, ejecución, control por la intervención y por el órgano de control externo autonómico— con dos particularidades importantes. La primera es que su techo de gasto y su objetivo de déficit **no los fija cada comunidad**, sino que se determinan en el marco general de estabilidad, con reparto por subsectores. La segunda es que la **prórroga** es aquí aún más frecuente que en el Estado, con los mismos efectos de traslado de poder hacia el ejecutivo que describe la ficha 18.01.",
            "En el nivel **local** el diseño es distinto y bastante más estricto. La ley exige aprobar el presupuesto antes del 31 de diciembre, impone **equilibrio o superávit inicial** y no admite presentar un presupuesto con déficit inicial, algo que ni el Estado ni las comunidades tienen prohibido. A cambio, los ayuntamientos tienen menos margen tributario, con un catálogo cerrado de impuestos y horquillas de tipos, y una dependencia relevante de la **participación en los tributos del Estado**.",
            "Dos figuras locales sin equivalente estatal conviene conocerlas. El **remanente de tesorería para gastos generales** es el resultado acumulado de ejercicios anteriores ajustado por saldos de dudoso cobro y por gastos con financiación afectada; si es **negativo**, la ley obliga a reaccionar en el ejercicio siguiente reduciendo gastos, concertando operaciones de crédito o aprobando un presupuesto con superávit. Y el **destino del superávit** está tasado: primero atender obligaciones pendientes de aplicar a presupuesto, después amortizar deuda, y solo si se cumplen ciertas condiciones destinarlo a **inversiones financieramente sostenibles**.",
            "**Ese régimen del superávit produjo la paradoja local más discutida de la última década.** Ayuntamientos saneados, sin deuda y con superávit acumulado se encontraron con que **no podían gastarlo**, porque la regla de gasto limitaba el crecimiento de su gasto computable con independencia de que tuvieran el dinero en caja y ninguna deuda que amortizar. La discusión que abrió es legítima y no tiene respuesta obvia: una regla uniforme es simple y verificable, pero trata igual a quien se endeudó y a quien ahorró; una regla que distinga por situación financiera es más justa y mucho más difícil de aplicar sin discrecionalidad.",
            "Conviene cerrar con una advertencia de lectura que se incumple constantemente. **Los presupuestos de las tres administraciones no se pueden sumar sin consolidar.** El Estado transfiere a las comunidades y estas ejecutan; si se suman ambos presupuestos, el mismo euro se cuenta dos veces: como capítulo 4 en uno y como capítulos 1 y 2 en el otro. La cifra que tiene sentido económico es la del **conjunto consolidado de las Administraciones Públicas**, donde las transferencias internas se eliminan, y es la que usa la contabilidad nacional.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Rasgo", "Comunidades autónomas", "Entidades locales"],
          filas: [
            { nom: "Peso del gasto", sub: "Qué ejecutan.", cols: ["Sanidad, educación y servicios sociales", "Servicios urbanos de proximidad"] },
            { nom: "Autonomía de ingreso", sub: "Cuánto deciden de lo que ingresan.", cols: ["Media: tributos cedidos con normativa", "Baja: catálogo cerrado con horquillas"] },
            { nom: "Equilibrio inicial", sub: "Qué se puede presentar.", cols: ["Puede presentarse con déficit dentro del objetivo", "Prohibido el déficit inicial"] },
            { nom: "Rigidez del gasto", sub: "Cuánto es comprimible.", cols: ["Muy alta: capítulo 1 y prestaciones", "Alta, pero con más margen relativo"] },
            { nom: "Figura de control propia", sub: "Sin equivalente estatal.", cols: ["Objetivos fijados en el marco general", "Remanente de tesorería y destino tasado del superávit"] },
          ],
          nota: "La tercera fila explica por qué las cuentas locales han sido, en conjunto, las más saneadas del sistema: **la prohibición de presentar déficit inicial es una restricción mucho más dura que cualquier objetivo negociado**, y opera antes de que el presupuesto se apruebe.",
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
            { nom: "Asimetría vertical", sub: "Cuánto del gasto propio se financia con ingreso propio.", cols: ["$\\alpha = \\dfrac{I_{propios}}{G_{propio}}$"] },
            { nom: "Gasto comprimible", sub: "Lo que queda tras lo comprometido.", cols: ["$G_c = G - G_{rígido}$"] },
            { nom: "Esfuerzo por el lado del gasto", sub: "Sobre una base pequeña.", cols: ["$\\theta_G = \\dfrac{\\Delta}{G_c}$"] },
            { nom: "Esfuerzo por el lado del ingreso", sub: "Sobre una base aún menor.", cols: ["$\\theta_I = \\dfrac{\\Delta}{I_{modulables}}$"] },
            { nom: "Equilibrio local exigido", sub: "En la aprobación, no solo en la liquidación.", cols: ["$I_{1..7} \\geq G_{1..7}$"] },
            { nom: "Remanente de tesorería", sub: "Si es negativo, obliga a reaccionar.", cols: ["$RT = \\mathrm{Activo}_c - \\mathrm{Pasivo}_c - \\mathrm{Dudoso} - \\mathrm{Afectado}$"] },
          ],
          nota: "Las líneas tercera y cuarta son la asimetría convertida en aritmética: **el mismo ajuste exige un porcentaje muy distinto según por dónde se haga**, y como la base del ingreso modulable es la más pequeña, el ajuste tiende a hacerse por el gasto aunque no sea la mejor opción.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: por qué el ajuste siempre cae del lado del gasto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una comunidad tiene un presupuesto de gasto de **20.000 millones**, de los cuales **14.000 son sanidad, educación y servicios sociales**, difícilmente comprimibles a corto plazo. Sus **ingresos tributarios modulables** —aquellos cuyos tipos o beneficios puede alterar— ascienden a **2.000 millones**. Necesita un ajuste de **1.000 millones**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Vía de ajuste", "Base sobre la que actúa", "Esfuerzo exigido"],
          filas: [
            ["Recortar gasto no comprometido", "6.000 millones", "16,7 % de recorte"],
            ["Recortar el gasto total por igual", "20.000 millones", "5,0 % lineal, con sanidad y educación dentro"],
            ["Subir los tributos modulables", "2.000 millones", "50 % de aumento"],
            { celdas: ["Consecuencia", "La base del ingreso es la más pequeña", "El ajuste se desplaza al gasto"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Ninguna de las tres vías es indolora y la aritmética empuja hacia una.** Subir un 50 % los tributos modulables es políticamente inviable y económicamente discutible; recortar linealmente un 5 % significa tocar sanidad y educación; recortar solo lo demás exige un tijeretazo del 16,7 % concentrado en inversión y en gasto corriente no sanitario. **La opción que menos ruido produce a corto plazo es la tercera, y es también la que más deterioro acumula**, porque la inversión aplazada no desaparece: se convierte en reposición futura más cara.",
            "**Lo que el ejemplo muestra no es una mala decisión sino un problema de diseño.** Una administración con gasto muy rígido y capacidad de ingreso pequeña tiene, ante cualquier shock, un menú de opciones muy estrecho. Y como los ingresos llegan por entregas a cuenta calculadas sobre previsiones estatales y se liquidan dos años después, **el shock puede además llegar con retraso y por sorpresa**: una liquidación negativa obliga a ajustar en un ejercicio decisiones que se tomaron dos años antes.",
            "**De aquí sale el argumento central del debate sobre corresponsabilidad fiscal.** Quien defiende ampliar la autonomía tributaria autonómica no lo hace principalmente para que suban los impuestos, sino para que **la base del ingreso modulable sea lo bastante grande como para que ajustar por ahí sea una opción real**, y para que quien decide el gasto responda también ante sus votantes por cómo lo financia. Con una base de 2.000 sobre un gasto de 20.000, la responsabilidad sobre el ingreso es más nominal que efectiva.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el ayuntamiento que no podía gastar su superávit",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un ayuntamiento cierra el ejercicio con **superávit**, **remanente de tesorería positivo** y **sin deuda viva**. Su alcalde quiere destinar ese dinero a rehabilitar colegios y renovar alumbrado. La intervención le informa de que **no puede**: la **regla de gasto** limita el crecimiento de su gasto computable, y gastar el remanente lo dispararía muy por encima de la tasa de referencia.",
            "**La respuesta técnica es correcta y el resultado es difícil de defender.** La regla de gasto opera sobre el gasto computable con independencia de cómo se financie, así que un ayuntamiento sin deuda y con dinero en caja queda sujeto al mismo límite que otro endeudado hasta el límite. El régimen de **destino del superávit** completa el cerco: primero obligaciones pendientes de aplicar a presupuesto, después amortización de deuda —que aquí no existe— y solo entonces, y bajo condiciones, **inversiones financieramente sostenibles**, una categoría acotada y con requisitos.",
            "**La tensión de fondo es una que recorre todo el diseño de reglas fiscales.** Una regla **uniforme** es simple, verificable y muy difícil de eludir, pero trata igual al prudente y al imprudente. Una regla **contingente a la situación financiera** —más margen para quien no tiene deuda— es más justa en el caso concreto y abre una puerta a la discrecionalidad, a la negociación caso por caso y a la erosión gradual que arruinó el marco europeo anterior. **No hay una solución que domine a la otra**, y por eso este punto se ha reformado varias veces sin quedar cerrado.",
            "**Merece señalarse el efecto agregado**, que suele perderse en la anécdota. Las entidades locales han sido en conjunto el subsector con mejores saldos del sistema, con superávits sostenidos durante años. Parte de ese resultado es mérito de una restricción dura y bien diseñada —la prohibición de déficit inicial—, y parte es **inversión local que no se hizo**. Al evaluar un marco de reglas fiscales conviene mirar las dos cosas a la vez: **el saldo que consiguió y el gasto que impidió**, porque un superávit obtenido a base de no reponer infraestructuras es un ahorro contable con una factura diferida.",
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
            { t: "Sumar los presupuestos de las tres administraciones", d: "Cuenta el mismo euro dos veces: lo que el Estado transfiere aparece como capítulo 4 en su presupuesto y como capítulos 1 y 2 en el de quien lo ejecuta. La magnitud con sentido económico es el conjunto consolidado de Administraciones Públicas." },
            { t: "Atribuir al Gobierno central la gestión de la sanidad y la educación", d: "Las ejecutan las comunidades, que son quienes contratan al personal y gestionan los centros. El Estado transfiere recursos y fija el marco, pero la decisión presupuestaria concreta es autonómica." },
            { t: "Creer que las comunidades fijan su propio objetivo de déficit", d: "Se determina en el marco general de estabilidad, con reparto por subsectores. Su autonomía presupuestaria opera dentro de un techo que no deciden ellas." },
            { t: "Suponer que un ayuntamiento con superávit puede gastarlo libremente", d: "La regla de gasto opera con independencia de cómo se financie el gasto, y el destino del superávit está tasado: obligaciones pendientes, amortización de deuda y, bajo condiciones, inversiones financieramente sostenibles." },
            { t: "Ignorar el desfase de las entregas a cuenta", d: "Se calculan sobre previsiones y se liquidan dos años después. Una liquidación negativa obliga a ajustar hoy por decisiones tomadas hace dos ejercicios, y es una fuente de inestabilidad que no depende de la gestión autonómica." },
            { t: "Leer un recorte de inversión como un ahorro", d: "La inversión aplazada no desaparece: se convierte en reposición futura más cara. Es la partida donde el ajuste produce menos ruido inmediato y más deterioro acumulado, precisamente por eso." },
            { t: "Confundir remanente de tesorería con superávit del ejercicio", d: "El remanente es el resultado acumulado ajustado por saldos de dudoso cobro y gastos con financiación afectada; el superávit es el saldo de un ejercicio. Un remanente negativo obliga por ley a reaccionar en el ejercicio siguiente." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Consolidar no es sumar, y el SEC lo hace por construcción",
          texto:
            "En contabilidad nacional las administraciones son cuatro subsectores —**S.1311 central, S.1312 comunidades, S.1313 corporaciones locales y S.1314 Seguridad Social**— y el agregado **S.13** no es su suma aritmética: es su **consolidación**, que elimina las operaciones internas entre ellos. Las transferencias del sistema de financiación son gasto del Estado e ingreso de la comunidad, así que al consolidar **desaparecen las dos**, y solo queda el gasto final frente a terceros. Esto tiene dos consecuencias prácticas que conviene tener siempre presentes. La primera: el déficit del conjunto **no se reparte** entre subsectores de forma unívoca, porque adelantar o retrasar una entrega a cuenta lo desplaza de uno a otro sin cambiar el total, como señala la ficha 17.09. La segunda: **el peso relativo del gasto de cada administración depende de si se mide antes o después de consolidar**. Sin consolidar, el Estado parece gastar mucho más de lo que ejecuta, porque buena parte de su presupuesto es dinero en tránsito hacia quien de verdad presta el servicio.",
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
              q: "Gasto de 20.000 millones, de ellos 14.000 rígidos, e ingresos modulables de 2.000. ¿Qué esfuerzo exige un ajuste de 1.000 millones por cada vía?",
              a: "Recortando solo el gasto no comprometido, un 16,7 % sobre una base de 6.000. Recortando linealmente el total, un 5 %, con sanidad y educación dentro. Subiendo los tributos modulables, un 50 % sobre una base de 2.000. La base del ingreso es la más pequeña, y por eso el ajuste se desplaza al gasto.",
            },
            {
              q: "¿Por qué las entidades locales han presentado en conjunto mejores saldos que el resto de subsectores?",
              a: "Porque la ley les prohíbe presentar un presupuesto con déficit inicial, una restricción que opera antes de la aprobación y es más dura que cualquier objetivo negociado. Parte del resultado, sin embargo, es inversión que no se hizo, y conviene evaluar el marco por el saldo que logró y por el gasto que impidió.",
            },
            {
              q: "Un ayuntamiento sin deuda tiene superávit y remanente positivo. ¿Puede destinarlo a inversión?",
              a: "No libremente. La regla de gasto limita el crecimiento del gasto computable con independencia de cómo se financie, y el destino del superávit está tasado: primero obligaciones pendientes de aplicar a presupuesto, después amortizar deuda y, bajo condiciones, inversiones financieramente sostenibles.",
            },
            {
              q: "¿Por qué no pueden sumarse los presupuestos del Estado y de las comunidades?",
              a: "Porque el mismo euro se contaría dos veces: como transferencia del capítulo 4 en el presupuesto estatal y como gasto de personal y bienes en el autonómico que lo ejecuta. La magnitud con sentido económico es el conjunto consolidado, donde las operaciones internas se eliminan.",
            },
            {
              q: "¿Qué problema añade el desfase de las entregas a cuenta?",
              a: "Que los recursos se calculan sobre previsiones y se liquidan dos años después, así que una liquidación negativa obliga a ajustar en el ejercicio corriente por decisiones tomadas dos años antes. Es una fuente de inestabilidad ajena a la gestión de quien presupuesta.",
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
              q: "¿En qué consiste la asimetría entre autonomía de gasto y de ingreso de las comunidades?",
              opciones: [
                "Deciden sus ingresos libremente y su gasto viene fijado por el Estado",
                "Gastan e ingresan por igual, pero con distinto calendario",
                "Ejecutan el grueso del gasto social con una capacidad de decisión sobre el ingreso mucho menor",
                "Ejecutan poco gasto pero recaudan muchos tributos propios",],
              correcta: 2,
              porque: [
                "Invierte los dos términos: la autonomía amplia es la de gasto, no la de ingreso.",
                "El calendario es un problema añadido —las entregas a cuenta—, pero no describe la asimetría.",
                "Por eso, ante un ajuste, el margen está casi todo en el gasto y casi nada en el ingreso.",
                "Es al revés: ejecutan alrededor de un tercio del gasto público y sus tributos propios son marginales.",],
            },
            {
              q: "Un ayuntamiento sin deuda y con superávit quiere invertir su remanente. ¿Qué se lo impide?",
              opciones: [
                "La regla de gasto, que limita el gasto computable con independencia de cómo se financie",
                "La prohibición de presentar presupuestos con déficit inicial",
                "Nada: el remanente positivo es de libre disposición",
                "La necesidad de autorización previa del Ministerio de Hacienda para toda inversión",],
              correcta: 0,
              porque: [
                "Y el destino del superávit está además tasado, con la amortización de deuda antes que la inversión.",
                "Esa prohibición afecta a la aprobación del presupuesto, no al uso del remanente ya generado.",
                "Es justamente lo contrario: su destino está tasado por ley y sujeto a la regla de gasto.",
                "No existe tal autorización general: el límite es la regla de gasto y el régimen del superávit.",],
            },
            {
              q: "¿Por qué el ajuste autonómico tiende a concentrarse en inversión y gasto corriente no sanitario?",
              opciones: [
                "Porque el resto del gasto es rígido a corto plazo y ahí el recorte produce menos ruido inmediato",
                "Porque la ley prohíbe recortar sanidad y educación",
                "Porque son las únicas partidas de las que la comunidad es competente",
                "Porque son las partidas mejor evaluadas y por tanto más fáciles de priorizar",],
              correcta: 0,
              porque: [
                "Y es también donde más deterioro acumula, porque la inversión aplazada vuelve como reposición más cara.",
                "No hay prohibición legal: hay rigidez de hecho, sobre todo en el capítulo 1 y en las prestaciones.",
                "La comunidad es competente sobre todo su presupuesto, incluidos sanidad y educación.",
                "La evaluación no es lo que guía el recorte; si acaso, la inversión suele estar peor evaluada.",],
            },
            {
              q: "¿Qué obliga a hacer un remanente de tesorería negativo?",
              opciones: [
                "Suspender la ejecución del presupuesto hasta su corrección",
                "Nada, mientras el presupuesto del ejercicio se haya liquidado en equilibrio",
                "Reaccionar en el ejercicio siguiente reduciendo gastos, concertando crédito o presupuestando con superávit",
                "Devolver al Estado la parte no ejecutada de las transferencias recibidas",],
              correcta: 2,
              porque: [
                "La ejecución no se suspende: lo que se exige es corregir en el ejercicio siguiente.",
                "El remanente es acumulado y ajustado por dudoso cobro y financiación afectada: puede ser negativo con una liquidación equilibrada.",
                "La ley tasa las tres vías, y la elección entre ellas es la única decisión que queda al gobierno local.",
                "No hay devolución automática de transferencias por este motivo.",],
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
            { t: "RDLeg 2/2004, texto refundido de la Ley de Haciendas Locales, título VI", d: "El régimen presupuestario local: equilibrio inicial, liquidación, remanente de tesorería y su corrección. Es la parte que no tiene equivalente en el Estado ni en las comunidades." },
            { t: "LO 2/2012 de Estabilidad Presupuestaria, artículos 11, 12 y 32", d: "Objetivo por subsectores, regla de gasto y destino del superávit. Los tres artículos que producen la paradoja del caso práctico." },
            { t: "Ministerio de Hacienda, liquidación de los presupuestos de comunidades y entidades locales", d: "Datos homogéneos de ingreso y gasto por administración y por capítulo. La fuente para comprobar con cifras reales la asimetría del ejemplo numérico." },
            { t: "AIReF, informes sobre las líneas fundamentales de los presupuestos autonómicos", d: "Analizan cada comunidad por separado, con especial atención a la rigidez del gasto sanitario y al efecto de las liquidaciones del sistema de financiación." },
          ],
        },
      ],
    },
  ],
};
