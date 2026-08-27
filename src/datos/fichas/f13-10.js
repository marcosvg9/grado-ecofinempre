/* Ficha 13.10 — Balances, revalorizaciones y consumo de capital fijo. */

export default {
  codigo: "13.10",
  titulo: "Balances, revalorizaciones y consumo de capital fijo",
  nivel: 4,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "El patrimonio de un hogar puede crecer el doble de lo que ahorra, y lo que aparece de más no lo ha producido nadie ni figura en la renta de nadie. Los balances y las cuentas de otras variaciones son la parte del sistema que explica ese hueco, y la que hace falta para entender una burbuja.",
  requiere: "13.09 Activos no producidos · 13.08 La formación de capital",
  abre: "11.08 Crisis financieras: el patrón que se repite · 8.05 Riesgo, rentabilidad y diversificación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Hasta aquí el bloque ha recorrido flujos: lo que ocurre durante un año. Los balances son la fotografía del final del día.** Un balance registra, para cada unidad o sector, los **activos no financieros (AN)**, los **activos financieros (AF)** y los **pasivos** en un momento dado, y su saldo es el **patrimonio neto (B.90)**. Hay uno de apertura y otro de cierre, y el sistema exige que se pueda explicar íntegramente el paso de uno a otro.",
            "**Ese paso tiene tres vías, y solo la primera tiene que ver con la actividad económica.** La **variación del patrimonio neto debida al ahorro y a las transferencias de capital (B.10.1)** es la que viene de las cuentas de la ficha 12.09: lo que la unidad ha ganado y no ha consumido. Las **otras variaciones del volumen de activos (B.10.2)** recogen apariciones y desapariciones que no son operaciones: el descubrimiento de un yacimiento, la destrucción por una catástrofe, una expropiación sin compensación, un cambio de clasificación. Y la **variación por revalorización (B.10.3)** recoge el efecto de que los precios de lo que ya se tenía hayan cambiado. La identidad es exacta: **patrimonio de cierre = patrimonio de apertura + B.10.1 + B.10.2 + B.10.3**.",
            "**La revalorización, código K.7, es la más importante de las tres para entender la economía real y la más ignorada en la conversación pública.** Son las **ganancias y pérdidas por tenencia**: si un piso comprado por 200.000 € vale 210.000 € al final del año, su propietario es 10.000 € más rico y **nadie ha producido nada**. No hay contrapartida en la renta de nadie, no aparece en el PIB y no se puede consumir sin vender el activo. El sistema lo registra en una cuenta separada precisamente para que esa distinción no se pierda.",
            "**Conviene además distinguir dentro de la revalorización, porque no toda ganancia nominal es una ganancia real.** Si todos los precios de la economía suben un 3 % y un activo sube exactamente un 3 %, su propietario no se ha enriquecido en términos reales: mantiene el mismo poder de compra. El sistema separa por eso la **ganancia neutral** —la que se limita a seguir al nivel general de precios— de la **ganancia real**, que es la que refleja un cambio del precio relativo del activo. En períodos de inflación alta, ignorar esa descomposición hace parecer enriquecimiento lo que solo es actualización nominal, y la ficha 11.03 mostró lo lejos que eso puede llegar.",
            "**En el lado de los activos no financieros el flujo que más pesa es el consumo de capital fijo (K.1), y merece atención porque casi nadie lo entiende como lo define el sistema.** No es la amortización contable ni la fiscal, que responden a criterios jurídicos y a incentivos tributarios. Es una estimación económica del **desgaste real** del stock de capital: se calcula a **precio de reposición corriente**, no a coste histórico, y se aplica a todo el capital fijo, incluidas las infraestructuras públicas y ahora también la I+D capitalizada. Es la magnitud que separa cualquier agregado bruto de su versión neta, y en una economía madura vale del orden de una quinta parte del PIB.",
            "**Del lado financiero, el sistema cierra con la cuenta financiera, que registra las operaciones F**: quién ha adquirido qué activos financieros y quién ha contraído qué pasivos. Su saldo es la **capacidad o necesidad de financiación medida por el lado financiero (B.9F)**, y **debe coincidir con el B.9 que salía de la cuenta de capital**, calculado por el lado no financiero. En la práctica nunca coinciden exactamente, y la diferencia se publica como **discrepancia estadística**: es una de las mejores medidas de la calidad de un sistema de cuentas, porque mide el desajuste entre dos estimaciones independientes de la misma magnitud.",
            "**Y ahí está la razón última por la que esta ficha cierra el bloque.** Los balances son lo que permite ver una **burbuja** mientras ocurre. Durante un auge inmobiliario, el patrimonio de los hogares crece mucho más deprisa que su ahorro, porque la mayor parte del aumento es K.7 y no B.10.1. Los flujos —renta, consumo, PIB— pueden parecer sanos mientras el balance se está inflando por una vía que no produce nada. Quien mire solo las cuentas de flujos no verá venir nada; quien mire los balances verá exactamente qué proporción del enriquecimiento aparente descansa en precios que pueden bajar.",
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
            { nom: "Qué es un balance", sub: "La fotografía, no la película.", cols: ["AN + AF − pasivos = B.90"] },
            { nom: "La identidad que lo une todo", sub: "El sistema exige explicar el paso entero.", cols: ["B.90 cierre = B.90 apertura + B.10.1 + B.10.2 + B.10.3"] },
            { nom: "Por ahorro y transferencias", sub: "La única vía que es actividad económica.", cols: ["B.10.1 — viene de la cuenta de capital"] },
            { nom: "Otras variaciones del volumen", sub: "Aparecen o desaparecen activos.", cols: ["B.10.2 — hallazgos, catástrofes, reclasificaciones"] },
            { nom: "Por revalorización", sub: "Cambian los precios de lo que ya se tenía.", cols: ["B.10.3 — ganancias y pérdidas por tenencia (K.7)"] },
            { nom: "Dentro de la revalorización", sub: "No toda ganancia nominal es real.", cols: ["neutral sigue al nivel general · real cambia el precio relativo"] },
            { nom: "Consumo de capital fijo", sub: "Ni amortización contable ni fiscal.", cols: ["K.1 — desgaste real a precio de reposición"] },
            { nom: "Su papel", sub: "Del orden de un quinto del PIB.", cols: ["separa toda magnitud bruta de la neta"] },
            { nom: "Los ocho activos financieros", sub: "De oro monetario a otras cuentas.", cols: ["AF.1 a AF.8"] },
            { nom: "La doble estimación del saldo", sub: "Su diferencia mide la calidad del sistema.", cols: ["B.9 no financiero $\\approx$ B.9F financiero"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el hogar que compró la vivienda, un año después",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 12.09 seguía a un hogar que ahorraba 10.000 € y compraba una vivienda de 200.000 €, financiándose por 190.000 €. Lo retomamos justo después de la compra y lo seguimos un año, con dos supuestos: el precio de la vivienda sube un 5 % y el hogar vuelve a ahorrar 10.000 €, que dedica a amortizar 7.000 € de hipoteca y a aumentar 3.000 € sus depósitos. La vivienda se deprecia al 1 % anual sobre la parte construida, que son 160.000 € de los 200.000; los otros 40.000 son el terreno, que no se deprecia.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Apertura", "Variación", "Cierre"],
          filas: [
            ["Vivienda y terreno", "AN.111 + AN.211", "200.000 €", "−1.600 + 10.000", "208.400 €"],
            ["Depósitos", "AF.2", "5.000 €", "+3.000", "8.000 €"],
            ["Préstamo hipotecario", "AF.4 (pasivo)", "−190.000 €", "+7.000", "−183.000 €"],
            { celdas: ["Patrimonio neto", "B.90", "15.000 €", "+18.400", "33.400 €"], clase: "total" },
          ],
          nota: "El patrimonio del hogar ha pasado de 15.000 € a 33.400 €: **se ha más que duplicado en un año**. Y la pregunta relevante no es cuánto ha subido, sino de dónde viene la subida.",
        },
        {
          tipo: "tabla",
          cabecera: ["Vía de variación", "Código", "Importe", "¿Lo ha producido alguien?"],
          filas: [
            ["Ahorro bruto del hogar", "B.8g", "10.000 €", "Sí: es renta que no ha consumido"],
            ["− Consumo de capital fijo de la vivienda", "K.1", "−1.600 €", "Es desgaste: reduce el ahorro neto"],
            ["= Variación por ahorro y transferencias", "B.10.1", "8.400 €", "Sí"],
            ["Revalorización de la vivienda (5 %)", "B.10.3 (K.7)", "10.000 €", "No: nadie ha producido nada"],
            { celdas: ["= Variación total del patrimonio neto", "—", "18.400 €", "—"], clase: "total" },
          ],
          nota: "Este es el resultado que da sentido a toda la ficha. De los 18.400 € que ha ganado el hogar, **solo 8.400 € proceden de su esfuerzo de ahorro; los otros 10.000 € han aparecido porque subió un precio**. La revalorización es **mayor que el ahorro neto**, y no está en el PIB, ni en la renta disponible del hogar, ni en la renta de nadie. Obsérvese además el papel del K.1: el hogar ahorró 10.000 € brutos pero solo 8.400 € netos, porque 1.600 € se fueron en compensar el desgaste del inmueble. Es la diferencia entre bruto y neto de la ficha 13.01, aplicada a un caso concreto.",
        },
        {
          tipo: "grafico",
          alto: 370,
          ejes: { x: "", y: "Euros" },
          dominio: { x: [0, 5.2], y: [0, 38000] },
          marcasX: [],
          marcasY: [0, 10000, 20000, 30000],
          areas: [
            { puntos: [[0.4, 0], [0.4, 15000], [1.5, 15000], [1.5, 0]], color: "n1" },
            { puntos: [[2.1, 0], [2.1, 15000], [3.2, 15000], [3.2, 0]], color: "n1" },
            { puntos: [[2.1, 15000], [2.1, 23400], [3.2, 23400], [3.2, 15000]], color: "acento" },
            { puntos: [[2.1, 23400], [2.1, 33400], [3.2, 33400], [3.2, 23400]], color: "alerta" },
          ],
          notas: [
            { x: 0.95, y: 7000, texto: "15.000", ancla: "middle" },
            { x: 2.65, y: 7000, texto: "15.000", ancla: "middle" },
            { x: 2.65, y: 18800, texto: "8.400", ancla: "middle" },
            { x: 2.65, y: 28000, texto: "10.000", ancla: "middle" },
            { x: 0.95, y: -2100, texto: "Patrimonio inicial", ancla: "middle" },
            { x: 2.65, y: -2100, texto: "Patrimonio final", ancla: "middle" },
            { x: 3.4, y: 28000, texto: "Revalorización · K.7", ancla: "start" },
            { x: 3.4, y: 18800, texto: "Ahorro neto · B.10.1", ancla: "start" },
            { x: 3.4, y: 7000, texto: "Patrimonio de partida", ancla: "start" },
          ],
          nota: "La franja superior es la que no ha producido nadie, y es **la mayor de las dos que han crecido**. Un hogar en esta situación se siente objetivamente más rico y puede comportarse en consecuencia —consumir más, endeudarse más— aunque su renta no haya cambiado. Es el **efecto riqueza**, y es el canal por el que un ciclo de precios de activos se traslada a la economía real. También es la razón de que sea reversible: si el precio vuelve a su nivel, el K.7 del año siguiente es de −10.000 € y el patrimonio se deshace igual de rápido, sin que la renta ni el ahorro del hogar hayan cambiado en ningún momento.",
        },
      ],
    },
    {
      titulo: "Caso práctico: lo que los balances enseñan sobre una burbuja",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El ejemplo anterior es un hogar. Multiplíquese por millones y se obtiene el perfil de un auge inmobiliario, con el patrón que las cuentas de patrimonio hacen visible y las de flujos no.",
            "**Durante un auge de precios de activos, las cuentas de flujos pueden verse perfectamente sanas.** El PIB crece, la renta disponible crece, el consumo crece y la tasa de ahorro puede incluso mantenerse. Nada en la cuenta de utilización de la renta advierte de un problema. Mientras tanto, en los balances está ocurriendo algo muy distinto: **el patrimonio neto de los hogares crece a un ritmo que sus flujos no explican**, porque la mayor parte del aumento es K.7 y no B.10.1.",
            "**El indicador que revela el desajuste es la proporción entre ambas vías.** Cuando la revalorización aporta más al patrimonio que el ahorro neto —como en el ejemplo, 10.000 frente a 8.400— el enriquecimiento descansa sobre precios y no sobre producción. Y los precios pueden bajar; el ahorro acumulado, no. Un sistema de cuentas completo permite calcular esa proporción año a año, y su deterioro es una señal que ninguna magnitud de flujo proporciona.",
            "**Hay un segundo elemento que solo el balance muestra: la estructura del pasivo.** El patrimonio neto es la diferencia entre activos y deudas, así que dos hogares con el mismo patrimonio neto pueden estar en situaciones opuestas. Uno con 208.400 € de activos y 183.000 € de deuda y otro con 33.400 € de activos y ninguna deuda tienen el mismo B.90, y una caída del 15 % en el precio de la vivienda arruina al primero y no toca al segundo. **El apalancamiento no aparece en el patrimonio neto**: hay que mirar el balance bruto, activo por activo y pasivo por pasivo.",
            "**Y el tercero es la asimetría del efecto riqueza.** Cuando los precios suben, el efecto sobre el consumo es gradual y moderado; cuando bajan y además hay deuda, el ajuste es brusco, porque los hogares muy apalancados recortan el gasto para reconstruir su patrimonio. Ese proceso —el desapalancamiento— explica por qué las recesiones que siguen a una crisis de balance son más largas y más profundas que las recesiones ordinarias, y por qué la política monetaria pierde tracción durante ellas.",
            "**La conclusión metodológica cierra el bloque entero.** Las cuentas de flujos y las de patrimonio no son dos versiones de lo mismo: responden a preguntas distintas y la mayoría de las crisis financieras solo son legibles en las segundas. Que España publique cuentas financieras trimestrales por sectores desde hace décadas, y que hoy existan además balances no financieros, es lo que permite mirar hacia atrás y ver con precisión cómo se formó y cómo se deshizo el ciclo. La ficha 11.08 cuenta esa historia; esta explica con qué instrumentos se lee.",
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
            { t: "Interpretar el aumento del patrimonio como ahorro", d: "En el ejemplo el patrimonio sube 18.400 € y solo 8.400 € vienen del ahorro; los otros 10.000 € han aparecido porque subió un precio. La revalorización no está en el PIB ni en la renta de nadie, no la ha producido nadie y es reversible: si el precio vuelve atrás, el patrimonio se deshace igual de rápido." },
            { t: "Confundir el consumo de capital fijo con la amortización contable o fiscal", d: "El K.1 es una estimación económica del desgaste real, calculada a precio de reposición corriente y aplicada a todo el capital fijo, incluidas las infraestructuras públicas y la I+D capitalizada. La amortización contable responde a criterios jurídicos y la fiscal a incentivos tributarios, y ninguna de las dos coincide con el desgaste." },
            { t: "Tomar toda ganancia nominal por enriquecimiento", d: "Si todos los precios suben un 3 % y un activo sube un 3 %, su propietario mantiene el mismo poder de compra. El sistema separa la ganancia neutral, que solo sigue al nivel general, de la real, que refleja un cambio de precio relativo. En inflación alta, olvidar esa descomposición convierte la actualización nominal en riqueza aparente." },
            { t: "Juzgar la solidez de un sector por su patrimonio neto", d: "Dos unidades con el mismo B.90 pueden estar en situaciones opuestas según su apalancamiento: 208.400 € de activos con 183.000 € de deuda no es lo mismo que 33.400 € de activos sin deuda, aunque el neto coincida. Una caída del precio arruina a la primera y no toca a la segunda. Hay que mirar el balance bruto." },
            { t: "Buscar en las cuentas de flujos una crisis de balance", d: "Durante un auge de precios de activos el PIB, la renta y el consumo pueden crecer con normalidad mientras el patrimonio se infla por una vía que no produce nada. La señal está en la proporción entre revalorización y ahorro neto, y solo aparece si se miran las cuentas de patrimonio." },
            { t: "Ignorar la discrepancia estadística entre B.9 y B.9F", d: "Son dos estimaciones independientes de la misma magnitud, una por el lado no financiero y otra por el financiero, y su diferencia es una de las mejores medidas de la calidad de un sistema de cuentas. Darla por cero, o no comprobarla, desperdicia la información más honesta que publica un instituto de estadística." },
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
            "Esta ficha cierra el bloque y conecta el aparato contable con la parte del plan que estudia las crisis.",
          ],
          lista: [
            "Las fichas **13.08** y **13.09** proporcionan los activos que aquí se acumulan, se deprecian y se revalorizan; sin ellas el balance no tendría contenido.",
            "La ficha **12.09** aporta el B.10.1: la única de las tres vías de variación del patrimonio que procede de la actividad económica.",
            "La ficha **11.08**, sobre el patrón que repiten las crisis, es la lectura económica de lo que aquí se describe contablemente: auge del crédito, garantía que se revaloriza sola y apalancamiento son tres magnitudes de patrimonio, no de flujo.",
            "La ficha **8.05**, sobre riesgo y diversificación, aporta el marco para valorar lo que el balance revela: un patrimonio concentrado en un solo activo y financiado con deuda es una posición muy distinta de otra con el mismo neto.",
            "Y la ficha **12.04** aporta el lado financiero que aquí solo se esboza: las cuentas financieras del Banco de España son la fuente que permite construir el B.9F y comparar las dos estimaciones.",
          ],
          cierre:
            "La idea que conviene llevarse, y que resume el bloque entero, es que **el sistema separa con obstinación tres cosas que en la cartera de cualquiera parecen la misma: producir, acumular y revalorizarse**. Sostener esa separación cuesta capítulos enteros de reglamento y decisiones difíciles sobre casos límite, y es exactamente lo que hace que las cuentas nacionales sirvan para entender una economía en lugar de solo para describirla.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuáles son las tres vías por las que cambia el patrimonio neto?", a: "El ahorro y las transferencias de capital (B.10.1), que es la única que procede de la actividad económica; las otras variaciones del volumen de activos (B.10.2), como hallazgos, catástrofes o reclasificaciones; y la revalorización (B.10.3), el efecto de que cambien los precios de lo que ya se tenía. La identidad es exacta y el sistema exige explicar el paso entero." },
            { q: "El patrimonio del hogar sube 18.400 € en un año. ¿Cuánto ha ahorrado realmente?", a: "8.400 €, que es su ahorro bruto de 10.000 € menos 1.600 € de consumo de capital fijo por el desgaste de la vivienda. Los otros 10.000 € son revalorización: han aparecido porque subió un precio, no están en el PIB ni en la renta de nadie y son reversibles." },
            { q: "¿En qué se diferencia el consumo de capital fijo de la amortización contable?", a: "El K.1 es una estimación económica del desgaste real, calculada a precio de reposición corriente y aplicada a todo el capital fijo, incluidas las infraestructuras públicas y la I+D capitalizada. La amortización contable sigue criterios jurídicos y la fiscal responde a incentivos tributarios; ninguna mide el desgaste." },
            { q: "¿Qué distingue una ganancia por tenencia neutral de una real?", a: "La neutral se limita a seguir al nivel general de precios, de modo que el propietario mantiene el mismo poder de compra y no se ha enriquecido en términos reales. La real refleja un cambio del precio relativo del activo. En períodos de inflación alta, no separarlas convierte la actualización nominal en riqueza aparente." },
            { q: "¿Por qué dos unidades con el mismo patrimonio neto pueden estar en situaciones opuestas?", a: "Porque el neto no dice nada del apalancamiento. Un hogar con 208.400 € de activos y 183.000 € de deuda y otro con 33.400 € de activos y ninguna deuda tienen el mismo B.90, y una caída del 15 % en el precio de la vivienda arruina al primero y no toca al segundo. Hay que mirar el balance bruto." },
            { q: "¿Por qué las cuentas de flujos no advierten de una burbuja y los balances sí?", a: "Porque durante un auge de precios de activos el PIB, la renta y el consumo pueden crecer con normalidad mientras el patrimonio se infla por revalorización, que no produce nada. La señal es la proporción entre K.7 y ahorro neto: cuando la revalorización aporta más que el ahorro, el enriquecimiento descansa sobre precios que pueden bajar." },
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
            { ref: "SEC 2010, capítulo 6 — otras variaciones de los activos (K.1 a K.7)", nota: "las tres vías de variación del patrimonio y la separación entre ganancia neutral y real." },
            { ref: "SEC 2010, capítulo 7 — balances y clasificación de activos", nota: "la estructura del balance y el catálogo de AF.1 a AF.8." },
            { ref: "SEC 2010, capítulo 13 — cuentas por sectores y su integración", nota: "cómo encajan flujos, otras variaciones y balances en un sistema único." },
            { ref: "Banco de España, Cuentas Financieras de la Economía Española", nota: "la fuente del lado financiero, con series largas por sector; imprescindible para comparar B.9 y B.9F." },
            { ref: "INE, cuentas de patrimonio de los sectores institucionales", nota: "los balances no financieros españoles, donde se puede reproducir el ejercicio de esta ficha con datos reales." },
          ],
        },
      ],
    },
  ],
};
