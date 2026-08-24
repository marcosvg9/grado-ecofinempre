/* Ficha 13.02 — Operaciones de bienes y servicios: el equilibrio por producto. */

export default {
  codigo: "13.02",
  titulo: "Operaciones de bienes y servicios: el equilibrio por producto",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "Todo lo que se produce dentro o se trae de fuera tiene que acabar en algún sitio: usado para producir otra cosa, consumido, invertido o vendido al exterior. Esa identidad no es una aproximación agregada: se cumple producto a producto, y es la que obliga al sistema a cuadrar.",
  requiere: "13.01 La gramática del sistema · 12.02 La cuenta de producción",
  abre: "13.03 El consumo intermedio · 13.05 Impuestos sobre los productos · 13.08 La formación de capital",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Las operaciones de productos son siete, y se entienden mejor separándolas en dos grupos: de dónde sale la mercancía y a dónde va.** Del lado de la oferta solo hay dos orígenes posibles: la **producción (P.1)**, lo que hacen las unidades residentes, y las **importaciones (P.7)**, lo que viene de fuera. No hay un tercero. Todo lo que está disponible en una economía durante un año o salió de una fábrica, una oficina o un campo residentes, o cruzó la frontera.",
            "**Del lado de los empleos hay cuatro destinos, y tampoco hay un quinto.** El **consumo intermedio (P.2)** es lo que se usa para producir otra cosa y desaparece en el proceso. El **gasto en consumo final (P.3)** es lo que se consume y se acaba. La **formación bruta de capital (P.5)** es lo que se guarda para usarlo en años sucesivos: máquinas, edificios, existencias. Y las **exportaciones (P.6)** son lo que se va fuera. La identidad es inmediata: **P.1 + P.7 = P.2 + P.3 + P.5 + P.6**, con el añadido de los impuestos netos sobre los productos cuando se valora a precios distintos, que es el matiz del que hablaremos enseguida.",
            "**Quedan dos códigos que no son destinos sino formas de mirar.** El **consumo final efectivo (P.4)** es el mismo consumo que el P.3 pero atribuido a quien realmente lo disfruta en lugar de a quien lo paga: la ficha 12.08 lo explicó con la sanidad pública. No es una quinta salida, y sumar P.3 y P.4 sería contar dos veces. Y el **P.5** se abre a su vez en tres —capital fijo, existencias y objetos valiosos— que la ficha 13.08 detalla.",
            "**Lo que convierte esta identidad en una herramienta y no en una obviedad es que se cumple producto a producto.** Las **tablas de origen y destino** desglosan la economía en unas decenas de productos y unas decenas de ramas, y exigen que para cada producto, por separado, la oferta iguale a los empleos. El acero producido más el acero importado tiene que igualar al acero usado por la construcción, la automoción y las demás ramas, más el exportado, más la variación de existencias de acero. Es un sistema de cientos de ecuaciones simultáneas, y **es el mecanismo real por el que se equilibran las cuentas nacionales**: no se ajusta el PIB con un factor global, se cuadra cada producto.",
            "**Y aquí aparece la complicación que hace falta entender: el mismo producto tiene tres precios distintos según quién lo mire.** El **precio básico** es lo que efectivamente recibe el productor, sin impuestos sobre el producto y con las subvenciones incluidas. El **precio de productor** añade los impuestos sobre el producto, salvo el IVA deducible. Y el **precio de adquisición** es lo que paga el comprador: incluye todos los impuestos no deducibles y también los **márgenes de comercio y de transporte** que se han añadido por el camino. Entre lo que ingresa un fabricante y lo que paga un consumidor puede haber una diferencia enorme, y toda ella son impuestos y márgenes de otros productores.",
            "**La consecuencia práctica es que la identidad hay que escribirla con cuidado.** La producción se valora a **precios básicos** y los empleos a **precios de adquisición**, así que para igualarlos hay que sumar del lado de la oferta los **impuestos menos subvenciones sobre los productos (D.21 − D.31)** y los márgenes de distribución. Los márgenes, además, son un caso curioso: se suman a cada producto pero **no aumentan la oferta total**, porque son producción de la rama comercial que ya está contada en su propio P.1. Quien no vigile la valoración obtendrá diferencias de miles de millones y creerá que ha encontrado un error.",
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
            { nom: "Los dos orígenes posibles", sub: "No hay un tercero.", cols: ["P.1 producción · P.7 importaciones"] },
            { nom: "Los cuatro destinos posibles", sub: "No hay un quinto.", cols: ["P.2 · P.3 · P.5 · P.6"] },
            { nom: "La identidad", sub: "Se cumple producto a producto.", cols: ["P.1 + P.7 = P.2 + P.3 + P.5 + P.6"] },
            { nom: "Ajuste de valoración", sub: "Oferta a básicos, empleos a adquisición.", cols: ["+ (D.21 − D.31) + márgenes"] },
            { nom: "Consumo final efectivo", sub: "Otra vista del P.3, no un destino más.", cols: ["P.4 — nunca sumar P.3 + P.4"] },
            { nom: "Precio básico", sub: "Lo que recibe el productor.", cols: ["sin impuestos sobre el producto, con subvenciones"] },
            { nom: "Precio de adquisición", sub: "Lo que paga el comprador.", cols: ["+ impuestos no deducibles + márgenes"] },
            { nom: "Los márgenes", sub: "Producción de la rama comercial.", cols: ["se reparten por producto, no suman al total"] },
            { nom: "Valor añadido", sub: "El residuo de la identidad.", cols: ["B.1g = P.1 − P.2"] },
            { nom: "PIB a precios de mercado", sub: "El puente entre las dos valoraciones.", cols: ["PIB = Σ B.1g pb + D.21 − D.31"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la identidad de la economía de ejemplo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la economía que recorren los bloques 10 y 12, cuyo PIB es 1.000 y cuya producción total es 1.900. Ahora la escribimos como identidad de oferta y empleos, con las cifras que ya aparecieron en las fichas 10.07, 12.08 y 12.09.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "", y: "Importe" },
          dominio: { x: [0, 5.4], y: [0, 2600] },
          marcasX: [],
          marcasY: [0, 500, 1000, 1500, 2000, 2265],
          areas: [
            { puntos: [[0.25, 0], [0.25, 1900], [1.05, 1900], [1.05, 0]], color: "acento" },
            { puntos: [[0.25, 1900], [0.25, 2265], [1.05, 2265], [1.05, 1900]], color: "n2" },
            { puntos: [[1.95, 0], [1.95, 900], [2.75, 900], [2.75, 0]], color: "n1" },
            { puntos: [[1.95, 900], [1.95, 1735], [2.75, 1735], [2.75, 900]], color: "n3" },
            { puntos: [[1.95, 1735], [1.95, 1915], [2.75, 1915], [2.75, 1735]], color: "n4" },
            { puntos: [[1.95, 1915], [1.95, 2265], [2.75, 2265], [2.75, 1915]], color: "n2" },
          ],
          notas: [
            { x: 0.65, y: 950, texto: "P.1  1.900", ancla: "middle" },
            { x: 0.65, y: 2080, texto: "P.7  365", ancla: "middle" },
            { x: 2.35, y: 450, texto: "P.2  900", ancla: "middle" },
            { x: 2.35, y: 1315, texto: "P.3  835", ancla: "middle" },
            { x: 2.35, y: 1825, texto: "P.5  180", ancla: "middle" },
            { x: 2.35, y: 2090, texto: "P.6  350", ancla: "middle" },
            { x: 0.65, y: -110, texto: "OFERTA", ancla: "middle" },
            { x: 2.35, y: -110, texto: "EMPLEOS", ancla: "middle" },
            { x: 3.3, y: 2265, texto: "ambas columnas: 2.265", ancla: "start" },
            { x: 3.3, y: 1000, texto: "PIB = P.1 − P.2 = 1.000", ancla: "start" },
          ],
          nota: "Las dos columnas miden **exactamente 2.265**, y esa igualdad no es un ajuste: es la restricción que el sistema impone. Obsérvese que **el PIB no es ninguna de las dos columnas** sino la diferencia entre la producción y el consumo intermedio, los 1.000 que separan la banda inferior derecha de la banda de producción. Todo lo que hay por encima del P.2 en la columna de empleos —consumo, inversión y exportaciones— es demanda final, y suma 1.365; restándole las importaciones de 365 se vuelve a los 1.000 del PIB por el lado del gasto.",
        },
        {
          tipo: "tabla",
          cabecera: ["Oferta", "Importe", "Empleos", "Importe"],
          filas: [
            ["Producción a precios básicos (P.1)", "1.900", "Consumo intermedio (P.2)", "900"],
            ["Importaciones (P.7)", "365", "Gasto en consumo final (P.3)", "835"],
            ["Impuestos netos sobre productos (D.21 − D.31)", "0", "Formación bruta de capital (P.5)", "180"],
            ["", "", "Exportaciones (P.6)", "350"],
            { celdas: ["Total oferta", "2.265", "Total empleos", "2.265"], clase: "total" },
          ],
          nota: "El **835 de consumo final** se descompone en los 560 de los hogares y los 215 de las administraciones que daba la ficha 12.08, más 60 de las instituciones sin fines de lucro que aquella tabla omitía; por eso la ficha 10.07 hablaba de «620 de consumo de los hogares», que es el agregado habitual de hogares e ISFLSH. Y los **impuestos netos sobre productos son cero** en esta economía de ejemplo: es una simplificación deliberada, la que permite que el valor añadido a precios básicos y el PIB a precios de mercado coincidan en 1.000. La ficha 13.05 levanta esa simplificación.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Comprobación cruzada, que es donde se ve que el sistema encaja.** El PIB por el lado del gasto es consumo más inversión más exportaciones menos importaciones: **620 + 215 + 180 + 350 − 365 = 1.000**. El PIB por el lado de la oferta es producción menos consumos intermedios: **1.900 − 900 = 1.000**. Y el PIB por el lado de las rentas, de la ficha 12.03, es remuneración más excedente más impuestos netos: **500 + 450 + 62 − 12 = 1.000**. Tres caminos, tres cuentas distintas del sistema, el mismo número.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: un litro de gasolina de la refinería al surtidor",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La identidad agregada se entiende, pero la valoración solo se fija siguiendo un producto concreto. Tomamos un litro de gasolina y lo llevamos desde el precio que cobra la refinería hasta el que paga el conductor, con órdenes de magnitud realistas para España.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Importe", "Quién se lo queda"],
          filas: [
            ["Precio básico de la refinería", "P.1 a precios básicos", "0,60 €", "El refinador: es su producción"],
            ["+ Márgenes de transporte y comercio", "Producción de otras ramas", "0,17 €", "Transportista y estación de servicio"],
            ["+ Impuesto sobre hidrocarburos", "D.214", "0,50 €", "Las administraciones públicas"],
            ["= Base del IVA", "Precio de productor", "1,27 €", "—"],
            ["+ IVA al 21 %", "D.211", "0,2667 €", "Las administraciones públicas"],
            { celdas: ["= Precio de adquisición", "Lo que paga el conductor", "1,5367 €", "—"], clase: "total" },
          ],
          nota: "Tres cosas que esta tabla enseña de golpe. **La primera**: el productor recibe 0,60 y el consumidor paga 1,54, así que quien mire el gasto de los hogares en carburante y crea estar midiendo la actividad de las refinerías se equivoca por un factor de dos y medio. **La segunda**: los impuestos suman 0,7667 de 1,5367, es decir, **el 49,9 % del precio final**. **Y la tercera, la que más sorprende**: el IVA se calcula sobre una base que ya incluye el impuesto especial, de modo que se paga impuesto sobre el impuesto. Los 0,105 € de IVA que recaen sobre los 0,50 del impuesto especial son perfectamente legales y perfectamente invisibles en el ticket.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El caso ilustra también por qué los márgenes se tratan como se tratan.** Los 0,17 € de transporte y comercio no son producción de la refinería ni un impuesto: son **producción de las ramas de transporte y comercio**, y ya están contados en el P.1 de esas ramas. Por eso, al construir la tabla de origen y destino, los márgenes se **reasignan** desde el producto «servicios comerciales» al producto «gasolina» —para que el precio de adquisición cuadre— pero **no se suman al total de la oferta**, que ya los tenía. Es el ajuste que más confunde a quien se enfrenta por primera vez a estas tablas.",
            "**Y hay una lectura de política económica que conviene extraer.** Cuando en 2022 el Gobierno introdujo una bonificación al carburante, esa medida no fue un impuesto negativo cualquiera: fue una **subvención a un producto (D.31)**, que reduce el precio de adquisición sin tocar el precio básico que recibe el productor. En las cuentas se registró como menor recaudación de impuestos netos sobre productos, lo que **redujo el PIB a precios de mercado sin alterar el valor añadido a precios básicos de ninguna rama**. Es exactamente el tipo de efecto que la gramática de la ficha 13.01 permite anticipar sin necesidad de consultar a nadie.",
            "**Un último detalle sobre el IVA que hace falta para la ficha 13.03.** El IVA que paga una empresa por sus insumos es **deducible**, así que no forma parte de su consumo intermedio: lo recupera. El que paga un consumidor final no lo es. Por eso el IVA se llama en el SEC «IVA que grava los productos» y se registra únicamente por la parte **no deducible**, que en la práctica es la que soportan los hogares, las administraciones y las empresas exentas. Confundir el IVA repercutido total con el IVA que entra en las cuentas nacionales es un error frecuente y de tamaño considerable.",
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
            { t: "Sumar el gasto en consumo final y el consumo final efectivo", d: "El P.4 no es un destino más sino el mismo consumo atribuido a quien lo disfruta en vez de a quien lo paga. Sus totales agregados coinciden y solo cambia el reparto entre sectores, de modo que sumarlos duplica el consumo de la economía." },
            { t: "Comparar producción con PIB", d: "La producción de esta economía es 1.900 y su PIB 1.000: la diferencia son los 900 de consumos intermedios, cuyo valor ya está incorporado en el producto final. Sumar las facturaciones de los sectores sobrestima enormemente el tamaño de una economía, y es el error que sostiene muchos titulares sobre el «peso» de una industria." },
            { t: "Ignorar la valoración al construir la identidad", d: "La oferta se valora a precios básicos y los empleos a precios de adquisición, así que hay que sumar los impuestos netos sobre productos y reasignar los márgenes. Sin ese ajuste aparecen diferencias de miles de millones que parecen errores y no lo son." },
            { t: "Creer que los márgenes comerciales aumentan la oferta total", d: "Son producción de las ramas de comercio y transporte, y ya están contados en su propio P.1. Al construir las tablas se reasignan al producto vendido para que cuadre el precio de adquisición, pero no se añaden al total. Es el ajuste que más desconcierta la primera vez." },
            { t: "Tomar el gasto de los hogares en un producto como medida de la actividad del sector que lo fabrica", d: "En el litro de gasolina, el productor recibe 0,60 y el consumidor paga 1,54: entre medias hay impuestos y márgenes de otras ramas. El desfase puede ser de un factor de dos o tres, y es sistemático en todo lo muy gravado." },
            { t: "Usar el IVA repercutido total en lugar del no deducible", d: "El IVA que soportan las empresas por sus insumos se recupera y no entra en las cuentas nacionales. Solo se registra el que efectivamente queda: el de hogares, administraciones y actividades exentas. La diferencia entre ambas cifras es enorme." },
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
            "Esta identidad es la columna vertebral de varias fichas del plan, y conviene ver dónde reaparece.",
          ],
          lista: [
            "La ficha **10.07** calculaba el PIB por tres caminos; esta ficha explica por qué los tres tienen que dar lo mismo: no es una comprobación empírica sino una restricción impuesta producto a producto.",
            "La ficha **10.01**, sobre estructura productiva y especialización, se apoya en este mismo desglose por producto y rama: la especialización de una economía es una afirmación sobre las columnas de esta identidad.",
            "La ficha **12.02** valoraba la producción a precios básicos; aquí se ve por qué esa elección obliga después a un ajuste para llegar al PIB a precios de mercado.",
            "La ficha **13.05** abre los impuestos sobre los productos que aquí aparecen como un bloque, y levanta la simplificación de que valgan cero en la economía de ejemplo.",
            "Y las fichas **13.03** y **13.08** desarrollan los dos empleos más difíciles de delimitar: el consumo intermedio y la formación de capital, cuya frontera decide el valor añadido.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el equilibrio entre oferta y empleos no es una comprobación que se hace al final, sino el mecanismo por el que se construyen las cuentas**. Cuando el INE publica un PIB, lo que hay detrás es un sistema de cientos de ecuaciones cuadradas producto a producto, y esa es la razón por la que revisar un dato obliga a revisar tantos otros a la vez.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuáles son los dos únicos orígenes y los cuatro únicos destinos de un producto?", a: "Orígenes: la producción de unidades residentes (P.1) y las importaciones (P.7). Destinos: consumo intermedio (P.2), gasto en consumo final (P.3), formación bruta de capital (P.5) y exportaciones (P.6). No hay más, y por eso la identidad P.1 + P.7 = P.2 + P.3 + P.5 + P.6 tiene que cumplirse." },
            { q: "¿Por qué no se pueden sumar P.3 y P.4?", a: "Porque son el mismo consumo visto de dos maneras: el P.3 lo atribuye a quien paga y el P.4 a quien disfruta. Sus totales agregados coinciden y solo cambia el reparto entre sectores, así que sumarlos duplicaría el consumo de la economía." },
            { q: "En la economía de ejemplo la oferta suma 2.265 y el PIB es 1.000. ¿Por qué no coinciden?", a: "Porque la oferta incluye los 900 de consumos intermedios, cuyo valor ya está dentro del producto final, y los 365 importados, que no ha producido nadie residente. El PIB es la diferencia entre producción y consumo intermedio: 1.900 − 900 = 1.000." },
            { q: "¿Qué separa el precio básico del precio de adquisición?", a: "Los impuestos sobre el producto no deducibles y los márgenes de comercio y transporte. En un litro de gasolina el productor recibe 0,60 € y el conductor paga 1,54 €: 0,17 € son márgenes de otras ramas y 0,77 € son impuestos." },
            { q: "¿Por qué el IVA de la gasolina se calcula sobre una base que ya incluye el impuesto especial?", a: "Porque el impuesto sobre hidrocarburos forma parte del precio de productor, que es la base del IVA. Se paga impuesto sobre el impuesto: unos 0,105 € de los 0,2667 € de IVA recaen sobre los 0,50 € del especial. En total los impuestos son el 49,9 % del precio final." },
            { q: "Los márgenes comerciales de un producto, ¿aumentan la oferta total de la economía?", a: "No. Son producción de las ramas de comercio y transporte y ya están contados en el P.1 de esas ramas. En las tablas de origen y destino se reasignan al producto vendido para que cuadre su precio de adquisición, pero no se añaden al total de la oferta." },
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
            { ref: "SEC 2010, capítulo 3 — operaciones de productos", nota: "las definiciones de P.1 a P.7 y las tres valoraciones, con la frontera de producción incluida." },
            { ref: "Eurostat, Manual of Supply, Use and Input-Output Tables", nota: "cómo se construye en la práctica el equilibrio producto a producto y cómo se tratan los márgenes." },
            { ref: "INE, Tablas de origen y destino de la economía española", nota: "la identidad de esta ficha con datos reales; el mejor sitio para ver la reasignación de márgenes en funcionamiento." },
            { ref: "Lequiller y Blades, Understanding National Accounts, capítulo 4", nota: "la explicación más clara de por qué la valoración obliga a los ajustes que obliga." },
            { ref: "Agencia Tributaria, estructura de precios de los carburantes", nota: "los tipos vigentes del impuesto sobre hidrocarburos, para actualizar el caso práctico." },
          ],
        },
      ],
    },
  ],
};
