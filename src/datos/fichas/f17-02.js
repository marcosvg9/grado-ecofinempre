/* Ficha 17.02 — IRPF I: sujeción, rentas y base imponible. */

export default {
  codigo: "17.02",
  titulo: "IRPF I: sujeción, rentas y base imponible",
  nivel: 2,
  bloque: "Fiscalidad española",
  tiempo: "5 h",
  nucleo:
    "El IRPF no grava «la renta» sino cinco clases de renta con reglas propias, que después se reparten entre dos bases —general y del ahorro— que no se comunican entre sí. Casi todo lo que sorprende de este impuesto se explica por ese reparto.",
  requiere: "17.01 El tributo · 10.03 Sistema fiscal español",
  abre: "17.03 IRPF II · 17.07 No residentes · 5.14 Cuentas de personal",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El IRPF es **directo, personal, subjetivo, progresivo y periódico**. Directo porque grava una manifestación inmediata de capacidad económica; personal porque su hecho imponible se define en relación con una persona concreta; subjetivo porque las circunstancias familiares modulan la carga; progresivo porque el tipo medio crece con la renta; y periódico porque grava una situación que se prolonga, con devengo anual el 31 de diciembre salvo fallecimiento.",
            "**La residencia decide el alcance del gravamen**, y es la primera pregunta de toda la fiscalidad de las personas físicas. Se es residente fiscal en España si se permanece **más de 183 días** en territorio español durante el año natural, o si radica en España el **núcleo principal o la base de las actividades o intereses económicos**. Existe además una presunción: si el cónyuge no separado y los hijos menores dependientes residen habitualmente en España, se presume la residencia del contribuyente salvo prueba en contrario. El residente tributa por su **renta mundial**; el no residente, solo por la obtenida en España, y con las reglas de la ficha 17.07.",
            "El hecho imponible es la **obtención de renta**, y la ley la descompone en cinco categorías que no se calculan igual. Los **rendimientos del trabajo** incluyen sueldos, pensiones y retribuciones en especie, y admiten unos gastos deducibles tasados y una reducción por obtención de rendimientos del trabajo. Los **rendimientos del capital inmobiliario** proceden del arrendamiento de inmuebles. Los **rendimientos del capital mobiliario** agrupan dividendos, intereses, seguros y cesión de capitales a terceros. Los **rendimientos de actividades económicas** exigen ordenación por cuenta propia de medios de producción, y se determinan en estimación directa —normal o simplificada— o en estimación objetiva por módulos. Y las **ganancias y pérdidas patrimoniales** surgen de la variación del valor del patrimonio puesta de manifiesto por una alteración en su composición.",
            "A esas cinco se añaden las **imputaciones de renta**, que son renta sin flujo de caja: la más común es la **imputación de rentas inmobiliarias** por los inmuebles urbanos no arrendados distintos de la vivienda habitual, que tributan por un porcentaje de su valor catastral. Es la contrapartida fiscal de los alquileres imputados que la contabilidad nacional registra en la ficha 12.02, aunque con reglas y finalidad distintas.",
            "**Aquí llega la pieza central del impuesto: la renta se reparte en dos bases que no se comunican.** La **base imponible del ahorro** recoge los rendimientos del capital mobiliario derivados de la participación en fondos propios y de la cesión de capitales a terceros, las operaciones de capitalización y seguros, y las **ganancias y pérdidas patrimoniales que derivan de la transmisión** de elementos patrimoniales. La **base imponible general** recoge todo lo demás: trabajo, capital inmobiliario, actividades económicas, imputaciones de renta y las ganancias o pérdidas que **no** proceden de transmisión —un premio, por ejemplo—.",
            "La separación no es una comodidad de cálculo: **cada base tributa a una tarifa distinta**, la general a la escala progresiva y la del ahorro a una escala propia mucho más plana. Y las pérdidas de una base **no pueden compensar rentas de la otra**, salvo unos porcentajes limitados que la ley admite entre los componentes de la base general. Quien pierde dinero vendiendo acciones no puede restarlo de su sueldo, y esa asimetría explica buena parte de la planificación fiscal de los contribuyentes con patrimonio.",
            "Las **reducciones de la base imponible general** son pocas y tasadas: básicamente las aportaciones a sistemas de previsión social —planes de pensiones, con límites que se han reducido notablemente en los últimos ejercicios— y las pensiones compensatorias satisfechas por decisión judicial. Su efecto, como advertía la ficha 17.01, depende del tipo marginal de quien las aplica: **valen más cuanto más se gana**, que es lo que las hace controvertidas.",
            "Por último, la **tributación conjunta**. La unidad familiar puede optar por declarar junta, con una reducción específica de la base, pero acumulando todas las rentas en una sola escala progresiva. Solo compensa cuando un miembro aporta la mayor parte de la renta y el otro apenas tiene ingresos propios; con dos perceptores similares, la acumulación empuja hacia tramos altos y sale peor. Es una opción que hay que **calcular cada año**, no una preferencia estable.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Componente de renta", "¿A qué base va?", "Nota"],
          filas: [
            { nom: "Rendimientos del trabajo", sub: "Sueldos, pensiones, retribución en especie.", cols: ["General", "Gastos deducibles tasados y reducción propia"] },
            { nom: "Capital inmobiliario", sub: "Arrendamiento de inmuebles.", cols: ["General", "Reducción por arrendamiento de vivienda"] },
            { nom: "Capital mobiliario", sub: "Dividendos, intereses, seguros.", cols: ["Ahorro", "Salvo supuestos concretos que van a la general"] },
            { nom: "Actividades económicas", sub: "Ordenación por cuenta propia de medios.", cols: ["General", "Estimación directa u objetiva"] },
            { nom: "Ganancias por transmisión", sub: "Venta de acciones, de un inmueble, de un fondo.", cols: ["Ahorro", "Con reglas propias de compensación"] },
            { nom: "Ganancias sin transmisión", sub: "Premios, subvenciones patrimoniales.", cols: ["General", "Es la excepción que más se olvida"] },
            { nom: "Imputación de rentas inmobiliarias", sub: "Inmuebles urbanos no arrendados.", cols: ["General", "Renta sin flujo de caja"] },
          ],
          nota: "La fila que conviene retener es la sexta: **no todas las ganancias patrimoniales van a la base del ahorro**, solo las que derivan de una transmisión. Un premio de lotería no exento o una subvención para adquirir un bien tributan en la base general, a la escala progresiva.",
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
            { nom: "Rendimiento neto del trabajo", sub: "Los gastos deducibles están tasados por ley.", cols: ["RNT = íntegros − cotizaciones − otros gastos − reducción"] },
            { nom: "Rendimiento neto del capital inmobiliario", sub: "Con reducción si el destino es vivienda.", cols: ["RNCI = íntegros − gastos necesarios − amortización"] },
            { nom: "Ganancia patrimonial", sub: "Ambos valores incluyen gastos y tributos inherentes.", cols: ["GP = valor de transmisión − valor de adquisición"] },
            { nom: "Base imponible general", sub: "Todo lo que no es capital mobiliario ni transmisión.", cols: ["BIG = trabajo + inmobiliario + actividades + imputaciones $\\pm$ ganancias sin transmisión"] },
            { nom: "Base imponible del ahorro", sub: "Tarifa propia, mucho más plana.", cols: ["BIA = capital mobiliario $\\pm$ ganancias por transmisión"] },
            { nom: "Base liquidable general", sub: "Las reducciones solo operan sobre la general.", cols: ["BLG = BIG − previsión social − pensiones compensatorias"] },
          ],
          nota: "La cuarta y la quinta línea son las que hay que saber de memoria: **si una renta está en la base equivocada, todo lo que venga después está mal**, porque la tarifa aplicable es distinta y las reglas de compensación también.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos bases que no se hablan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un contribuyente obtiene en el ejercicio un **sueldo neto de 34.000 €**, **1.200 € de dividendos** y **pierde 9.000 € al vender unas acciones**. Intuitivamente esperaría que la pérdida le rebajase la factura sobre el sueldo. Veamos qué ocurre en realidad.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Componente", "Importe", "Base a la que va"],
          filas: [
            ["Rendimiento neto del trabajo", "34.000 €", "General"],
            ["Dividendos", "1.200 €", "Ahorro"],
            ["Pérdida por venta de acciones", "−9.000 €", "Ahorro"],
            ["Base imponible general", "34.000 €", "Escala progresiva"],
            { celdas: ["Base imponible del ahorro", "0 €", "Queda a cero; sobran 7.800 € de pérdida"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**La pérdida no toca el sueldo.** Los 9.000 € compensan primero los 1.200 € de dividendos —dentro de los límites que la ley admite entre los componentes del ahorro— y el resto, **7.800 €**, no puede restarse de la base general. Queda pendiente para compensar rentas del ahorro de los **cuatro ejercicios siguientes**, y si en ese plazo no las hay, se pierde.",
            "El contribuyente tributará por sus 34.000 € de base general como si la operación bursátil no hubiera existido. Es la consecuencia práctica de la estanqueidad entre bases, y es la razón de que muchos contribuyentes **realicen plusvalías latentes en el mismo ejercicio** en que han materializado pérdidas: no para ganar dinero, sino para que la pérdida encuentre con qué compensarse antes de caducar.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cuándo compensa la tributación conjunta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos matrimonios con la misma renta familiar total, 48.000 €, se plantean la misma pregunta. En el **primero**, uno de los cónyuges aporta 46.000 € y el otro 2.000 €. En el **segundo**, cada uno aporta 24.000 €.",
            "En el primer caso la **conjunta suele compensar**: la reducción específica por tributación conjunta se aplica y, sobre todo, el cónyuge sin apenas renta no aprovecharía por separado ni su mínimo personal ni los primeros tramos de la tarifa, que quedarían desperdiciados. Declarar juntos los recupera.",
            "En el segundo caso la **conjunta casi siempre sale peor**. Por separado, cada cónyuge recorre desde abajo la escala progresiva y ambos aprovechan los tramos bajos y su mínimo personal íntegro. Al acumular, la renta conjunta escala tramos altos y la reducción por conjunta no compensa lo que se pierde por haber renunciado a una segunda tarifa completa.",
            "**La regla que se deduce** no es «la conjunta es buena para las familias» sino algo más preciso: la conjunta traslada renta de una tarifa desaprovechada a otra saturada, y solo gana cuando hay una tarifa desaprovechada. Con dos perceptores parecidos no la hay. Y como el reparto de rentas dentro de una pareja cambia con el tiempo, **la opción se calcula cada campaña**: el programa de ayuda ofrece las dos cifras precisamente porque no hay respuesta estable.",
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
            { t: "Creer que todas las ganancias patrimoniales van a la base del ahorro", d: "Solo las que derivan de una transmisión. Un premio o una subvención que altera el patrimonio sin que medie transmisión va a la base general, a la escala progresiva, y la diferencia de tipo puede ser de más de veinte puntos." },
            { t: "Compensar pérdidas del ahorro con rentas del trabajo", d: "Las dos bases no se comunican. Una pérdida bursátil no rebaja el impuesto del sueldo: espera hasta cuatro ejercicios a que aparezcan rentas del ahorro con las que compensarse, y si no aparecen se pierde." },
            { t: "Confundir residencia fiscal con nacionalidad o con empadronamiento", d: "La residencia se determina por permanencia superior a 183 días o por radicar en España el núcleo de intereses económicos. Un español que vive fuera todo el año no es residente fiscal, y un extranjero que vive aquí sí lo es." },
            { t: "Suponer que la tributación conjunta beneficia siempre a las familias", d: "Compensa cuando un miembro concentra casi toda la renta y el otro desaprovecharía su tarifa y su mínimo. Con dos perceptores similares la acumulación empuja a tramos altos y sale peor. Hay que calcular las dos opciones cada año." },
            { t: "Olvidar la imputación de rentas inmobiliarias", d: "Un inmueble urbano vacío distinto de la vivienda habitual genera renta a efectos del IRPF aunque no produzca un euro. Es renta sin caja, y sorprende a quien hereda un piso y no lo alquila." },
            { t: "Deducir del rendimiento del trabajo gastos no tasados", d: "A diferencia de las actividades económicas, en el trabajo los gastos deducibles están cerrados por ley: cotizaciones, cuotas sindicales y colegiales obligatorias, defensa jurídica y poco más. No cabe deducir el coche o la ropa." },
            { t: "Tratar las aportaciones a planes de pensiones como una deducción", d: "Reducen la base general, no la cuota, así que su valor depende del tipo marginal. Y el límite se ha ido reduciendo mucho en los últimos ejercicios: conviene comprobar el vigente en lugar de arrastrar la cifra que se recuerda." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "El mismo dinero, dos sistemas de reparto",
          texto:
            "El IRPF es **D.51** en el SEC, un impuesto corriente sobre la renta que reduce la renta disponible de los hogares en la cuenta de distribución secundaria de la ficha 12.06. Pero la **renta** sobre la que el impuesto se calcula no es la del SEC: la contabilidad nacional imputa alquileres a todos los propietarios que ocupan su vivienda —ficha 12.03— mientras que el IRPF **exceptúa** la vivienda habitual e imputa solo las demás. Y las cotizaciones sociales que el SEC hace pasar por la renta primaria del hogar antes de restarlas —ficha 13.04— son en el IRPF un simple gasto deducible del rendimiento del trabajo. **Ninguno de los dos sistemas está mal: miden cosas distintas con el mismo nombre**, y quien compare la «renta» de una estadística con la «base imponible» de la otra obtendrá una diferencia que no significa nada.",
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
              q: "¿Qué determina si España grava tu renta mundial o solo la obtenida aquí?",
              a: "La residencia fiscal: permanencia superior a 183 días en el año natural o radicar en España el núcleo principal de las actividades o intereses económicos, con una presunción basada en la residencia del cónyuge e hijos menores. El residente tributa por renta mundial; el no residente, solo por la de fuente española.",
            },
            {
              q: "Un contribuyente pierde 9.000 € vendiendo acciones y cobra 34.000 € de sueldo. ¿Cuánto rebaja la pérdida su impuesto sobre el sueldo?",
              a: "Nada. La pérdida está en la base del ahorro y el sueldo en la general, y las dos bases no se comunican. La pérdida compensa primero otras rentas del ahorro y el remanente queda pendiente hasta cuatro ejercicios; si no aparecen rentas del ahorro, caduca.",
            },
            {
              q: "¿Van a la base del ahorro todas las ganancias patrimoniales?",
              a: "No: solo las que derivan de una transmisión. Las que se producen sin transmisión —un premio, una subvención que altera el patrimonio— van a la base general y tributan a la escala progresiva, que puede superar en más de veinte puntos a la tarifa del ahorro.",
            },
            {
              q: "¿Cuándo compensa la tributación conjunta?",
              a: "Cuando un miembro de la unidad familiar concentra casi toda la renta y el otro desaprovecharía su mínimo personal y los primeros tramos de la tarifa. Con dos perceptores de renta similar, acumular empuja a tramos altos y suele salir peor que declarar por separado.",
            },
            {
              q: "¿Por qué las aportaciones a un plan de pensiones no valen lo mismo para todos?",
              a: "Porque reducen la base imponible general, no la cuota, así que el ahorro es la aportación multiplicada por el tipo marginal del contribuyente. Es el mecanismo de la ficha 17.01: los beneficios colocados en la base son regresivos y los colocados en la cuota no lo son.",
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
              q: "Un contribuyente pierde 9.000 € al vender acciones y tiene 34.000 € de rendimientos del trabajo. ¿Qué efecto tiene la pérdida?",
              opciones: [
                "Compensa rentas del ahorro y el remanente queda pendiente hasta cuatro ejercicios; no toca el sueldo",
                "Reduce la base general en 9.000 €, rebajando el impuesto sobre el sueldo",
                "Reduce la base general con el límite del 25 % de su importe",
                "Se pierde íntegramente en el ejercicio en que se produce",],
              correcta: 0,
              porque: [
                "Por eso muchos contribuyentes realizan plusvalías latentes en el mismo ejercicio en que materializan pérdidas: para que la pérdida encuentre con qué compensarse antes de caducar.",
                "Las dos bases del impuesto no se comunican: es la característica que ordena todo el cálculo.",
                "Ese tipo de límite porcentual opera entre componentes de la base general, no entre las dos bases.",
                "No se pierde de inmediato: hay un plazo de cuatro ejercicios para encontrar rentas del ahorro con las que compensarla.",],
            },
            {
              q: "Un contribuyente gana un premio de 5.000 € que no está exento. ¿A qué base va?",
              opciones: [
                "A la base del ahorro solo si supera los 6.000 €",
                "No tributa: los premios están sujetos a su propio gravamen especial",
                "A la base general: es una ganancia patrimonial que no deriva de transmisión",
                "A la base del ahorro, como cualquier ganancia patrimonial",],
              correcta: 2,
              porque: [
                "No hay ningún umbral que cambie la base a la que se integra una renta.",
                "Algunos premios tienen gravamen especial, y el enunciado dice que este no está exento y sigue las reglas generales.",
                "Y la diferencia de tipo es grande: la escala general puede superar en más de veinte puntos a la tarifa del ahorro.",
                "Solo van al ahorro las ganancias que derivan de la transmisión de un elemento patrimonial, y aquí no se ha transmitido nada.",],
            },
            {
              q: "Un español lleva todo el año trabajando en Alemania, donde reside. ¿Tributa en España por su renta mundial?",
              opciones: [
                "Sí, si conserva la vivienda en España",
                "Depende de si está empadronado en un municipio español",
                "No: no es residente fiscal, así que solo tributaría por rentas de fuente española",
                "Sí: la nacionalidad española determina la sujeción por renta mundial",],
              correcta: 2,
              porque: [
                "Tener vivienda es un indicio y no el criterio; podría serlo si arrastrase el núcleo de intereses económicos.",
                "El empadronamiento es un registro administrativo local sin efecto sobre la residencia fiscal.",
                "Como no residente tributaría por el IRNR, y solo por lo obtenido en España, con las reglas de la ficha 17.07.",
                "La nacionalidad no determina la residencia fiscal: lo hacen la permanencia y el núcleo de intereses económicos.",],
            },
            {
              q: "Un matrimonio en el que cada cónyuge gana 24.000 € se plantea declarar conjuntamente. ¿Qué cabe esperar?",
              opciones: [
                "Que salga peor: acumular ambas rentas en una sola escala progresiva empuja a tramos altos",
                "Que no puedan optar: la conjunta exige que un cónyuge no obtenga rentas",
                "Que salga mejor por la reducción específica de la tributación conjunta",
                "Que sea indiferente: la escala se aplica igual en ambos casos",],
              correcta: 0,
              porque: [
                "Por separado, cada uno recorre la escala desde abajo y aprovecha íntegros los tramos bajos y su mínimo personal. La conjunta renuncia a una de esas dos tarifas.",
                "Sí pueden optar; la conjunta no exige que un cónyuge carezca de rentas, solo suele compensar en ese caso.",
                "La reducción existe y rara vez compensa lo que se pierde al saturar una única tarifa progresiva.",
                "No es indiferente en absoluto: con progresividad, repartir la renta entre dos tarifas siempre paga menos que acumularla en una.",],
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
            { t: "Ley 35/2006 del IRPF, títulos I a V", d: "Sujeción y residencia en los artículos 8 a 10; las cinco categorías de renta en los títulos III y IV; la integración y compensación en los artículos 45 a 49, que son el núcleo de la separación entre bases." },
            { t: "Agencia Tributaria, Manual práctico de Renta", d: "Se publica cada campaña con la normativa vigente y cientos de ejemplos resueltos. Es la mejor forma de comprobar si la teoría de esta ficha se traduce en una liquidación correcta." },
            { t: "Informe de la Comisión de expertos para la reforma del sistema tributario", d: "Contiene la discusión técnica sobre la dualidad del impuesto —por qué el ahorro tributa a una tarifa distinta— y sobre los efectos distributivos de las reducciones en base." },
            { t: "Fundación de Estudios de Economía Aplicada, estudios sobre IRPF", d: "Análisis empíricos de la progresividad efectiva y de la respuesta de los contribuyentes a los tipos marginales, que conectan este bloque con la economía de los impuestos de la ficha 10.03." },
          ],
        },
      ],
    },
  ],
};
