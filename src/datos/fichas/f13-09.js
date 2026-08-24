/* Ficha 13.09 — Activos no producidos (NP): terrenos, espectro y derechos de emisión. */

export default {
  codigo: "13.09",
  titulo: "Activos no producidos (NP): terrenos, espectro y derechos de emisión",
  nivel: 4,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "Hay activos que valen mucho dinero y que nadie ha fabricado: la tierra, el subsuelo, las ondas del espectro, una licencia. El sistema los reconoce como riqueza pero no como producción, y de esa distinción se derivan consecuencias que llegaron a decidir si un país tenía déficit o superávit.",
  requiere: "13.08 La formación de capital · 12.09 Cuentas de acumulación",
  abre: "13.10 Balances y revalorizaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Un activo no producido es algo que proporciona beneficios económicos a su propietario y que no ha salido de ningún proceso de producción.** La definición parece técnica y sin embargo separa dos mundos: lo producido entra en el PIB cuando se crea, lo no producido no entra nunca, por mucho que valga y por mucho que se compre y se venda. Comprar un terreno de un millón de euros no añade un euro al producto de nadie.",
            "**El SEC los agrupa en tres familias.** Los **recursos naturales (AN.21)** son las tierras y terrenos, las reservas minerales y energéticas, los recursos biológicos no cultivados, los recursos hídricos y **otros recursos naturales**, categoría en la que vive el **espectro radioeléctrico**. Los **contratos, arrendamientos y licencias (AN.22)** son derechos transferibles que tienen valor de mercado: una concesión, un arrendamiento cuyo precio está por debajo del de mercado, un derecho de traspaso, el derecho de un club sobre un jugador. Y las **compras menos ventas de fondo de comercio y activos por comercialización (AN.23)** recogen el sobreprecio que se paga al adquirir una empresa por encima del valor de sus activos identificables: reputación, cartera de clientes, marca.",
            "**En la cuenta de capital todas ellas aparecen bajo un único código: NP, adquisiciones menos cesiones de activos no producidos.** El código es neto por construcción, y esa característica tiene una consecuencia contable enorme que conviene fijar de inmediato. Cuando dos residentes se compran y se venden un terreno, uno registra +NP y el otro −NP por el mismo importe, así que **la operación se anula al agregar la economía nacional**. Todo el mercado inmobiliario español puede moverse frenéticamente sin que el NP agregado del país cambie un euro. Solo sobrevive lo que se compra o se vende **al resto del mundo**.",
            "**Hay una excepción de tamaño considerable, y es la que produce el efecto más contraintuitivo del capítulo: los costes de transmisión de la propiedad.** La notaría, el registro, la comisión de la agencia, los honorarios del tasador y los impuestos de transmisión asociados a la compra de un terreno **sí son producción**: alguien ha prestado esos servicios. El SEC los trata como una categoría propia de activo fijo, **AN.116, costes de transmisión de la propiedad de activos no producidos**, y por tanto como **formación bruta de capital fijo**. La consecuencia es notable: **la compraventa de terrenos entre residentes no genera PIB, pero los gastos de gestionarla sí**, y en un país con un mercado inmobiliario muy activo esa partida no es pequeña.",
            "**La otra pieza que hay que separar es la renta que produce un activo no producido, que no es lo mismo que el activo.** Si el propietario de un terreno lo arrienda a un agricultor, cobra una **renta de la tierra (D.45)**, que es una renta de la propiedad de la ficha 12.04 y vive en la cuenta de asignación de renta primaria. Si en cambio lo vende, hay una operación **NP** en la cuenta de capital. Vender el activo y arrendarlo son cosas económicamente distintas y el sistema las coloca en cuentas distintas; el problema práctico es que muchas operaciones reales están a medio camino, y ahí es donde las reglas se vuelven finas.",
            "**El caso que mejor lo ilustra, y que además tuvo consecuencias históricas, es el de las licencias de telefonía móvil.** Cuando un Estado subasta el uso del espectro radioeléctrico durante veinte años, ¿está vendiendo un activo no producido —y entonces es NP, que mejora de golpe su capacidad de financiación— o está arrendándolo —y entonces es una renta que debe repartirse a lo largo de los veinte años—? La respuesta que se dio en el año 2000 y sus consecuencias son el caso práctico de esta ficha.",
            "**Conviene cerrar con el contraste que enlaza con la ficha 13.05.** Los derechos de emisión de gases parecen exactamente el mismo tipo de operación —un Estado vende un permiso— y sin embargo se clasifican como **impuestos (D.29)** y no como NP. La diferencia está en qué adquiere el comprador: en la licencia de espectro adquiere el **uso exclusivo de un recurso natural escaso**, que es un activo; en el derecho de emisión adquiere el **permiso para hacer algo que de otro modo estaría prohibido**, que es la definición de un tributo. Dos operaciones casi idénticas en su forma y opuestas en su fondo.",
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
            { nom: "Definición", sub: "La frontera con el PIB.", cols: ["da beneficios y no salió de una producción"] },
            { nom: "Recursos naturales", sub: "Aquí vive el espectro radioeléctrico.", cols: ["AN.21 — tierras, minerales, agua, otros"] },
            { nom: "Contratos y licencias", sub: "Derechos transferibles con valor.", cols: ["AN.22 — concesiones, traspasos, arrendamientos"] },
            { nom: "Fondo de comercio", sub: "El sobreprecio de comprar una empresa.", cols: ["AN.23"] },
            { nom: "El código de la cuenta de capital", sub: "Neto por construcción.", cols: ["NP = adquisiciones − cesiones"] },
            { nom: "Consecuencia de ser neto", sub: "El mercado interior no mueve el agregado.", cols: ["se anula entre residentes"] },
            { nom: "La excepción productiva", sub: "Gestionar la venta sí es producción.", cols: ["costes de transmisión → AN.116, P.51g"] },
            { nom: "Vender frente a arrendar", sub: "Cuentas distintas.", cols: ["NP en capital · D.45 en renta primaria"] },
            { nom: "El contraste con el D.29", sub: "Depende de qué adquiere el comprador.", cols: ["uso de un recurso → NP · permiso → impuesto"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una empresa compra un solar y construye",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad desembolsa 824.000 € para instalarse: compra un solar, paga los gastos de la operación y levanta una nave. En su contabilidad todo es «inmovilizado». En las cuentas nacionales son tres cosas distintas.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe", "Código", "¿Es producción del año?"],
          filas: [
            ["Precio del solar", "300.000 €", "NP.1", "No: nadie ha producido el terreno"],
            ["Notaría, registro, agencia e impuesto de transmisión", "24.000 €", "P.51g (AN.116)", "Sí: son servicios prestados este año"],
            ["Construcción de la nave", "500.000 €", "P.51g (AN.112)", "Sí: es producción de la rama de construcción"],
            ["Desembolso total", "824.000 €", "—", "—"],
            ["Efecto sobre su formación de capital", "524.000 €", "P.5", "Suma al PIB por el lado de la demanda"],
            { celdas: ["Efecto sobre su capacidad de financiación", "−824.000 €", "B.9", "Todo el desembolso, sea o no producción"], clase: "total" },
          ],
          nota: "Las dos últimas filas dicen lo esencial. **Al PIB contribuyen 524.000 €**, no los 824.000: el solar no lo ha producido nadie este año. Pero **la capacidad de financiación de la empresa cae los 824.000 completos**, porque el dinero ha salido igual. Es la diferencia entre lo que la economía produce y lo que una unidad concreta necesita financiar, y explica por qué inversión y necesidad de financiación no coinciden. Obsérvese además que **los 24.000 € de gestionar la compra sí son PIB**: el terreno no se produce, pero los servicios de transmitirlo sí, y son formación de capital fijo en una categoría creada exactamente para ellos.",
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "", y: "Miles de euros" },
          dominio: { x: [0, 4.4], y: [0, 900] },
          marcasX: [],
          marcasY: [0, 200, 400, 600, 824],
          areas: [
            { puntos: [[0.4, 0], [0.4, 500], [1.4, 500], [1.4, 0]], color: "acento" },
            { puntos: [[0.4, 500], [0.4, 524], [1.4, 524], [1.4, 500]], color: "n2" },
            { puntos: [[0.4, 524], [0.4, 824], [1.4, 824], [1.4, 524]], color: "n4" },
            { puntos: [[2.1, 0], [2.1, 500], [3.1, 500], [3.1, 0]], color: "acento" },
            { puntos: [[2.1, 500], [2.1, 524], [3.1, 524], [3.1, 500]], color: "n2" },
          ],
          notas: [
            { x: 0.9, y: 245, texto: "500", ancla: "middle" },
            { x: 0.9, y: 665, texto: "300", ancla: "middle" },
            { x: 0.9, y: -55, texto: "Lo que desembolsa", ancla: "middle" },
            { x: 2.6, y: 245, texto: "500", ancla: "middle" },
            { x: 2.6, y: -55, texto: "Lo que aporta al PIB", ancla: "middle" },
            { x: 3.3, y: 665, texto: "Solar · NP: no lo produjo nadie", ancla: "start" },
            { x: 3.3, y: 512, texto: "Gestión de la compra · AN.116: 24", ancla: "start" },
            { x: 3.3, y: 245, texto: "Nave construida · AN.112", ancla: "start" },
          ],
          nota: "Las dos barras separan **lo que sale de la caja de una empresa** de **lo que la economía ha producido**. Los 300 del solar existen, valen y cambian de manos, pero no los ha fabricado nadie este año ni ningún otro: por eso la barra derecha no los tiene. Y la franja delgada de 24 es el detalle que suele pasar inadvertido: **gestionar la compra de algo no producido sí es producción**, y el SEC le reserva una categoría de activo propia para que no se pierda.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la otra mitad de la operación, que es donde aparece la propiedad más útil del NP.** Quien vendió el solar es otra sociedad residente, y registra una **cesión de activo no producido de −300.000 €**. Sumando las dos unidades:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Unidad", "NP", "P.51g", "Efecto sobre su B.9"],
          filas: [
            ["Comprador", "+300.000 €", "+524.000 €", "−824.000 €"],
            ["Vendedor", "−300.000 €", "0", "+300.000 €"],
            { celdas: ["Economía nacional", "0", "+524.000 €", "−524.000 €"], clase: "total" },
          ],
          nota: "**El NP agregado es cero.** Lo que un residente adquiere, otro residente lo cede, y el país no ha ganado ni perdido terreno. Solo queda en pie la formación de capital fijo, que es producción real. Esta propiedad tiene una lectura importante para el análisis: **por muy activo que sea el mercado inmobiliario de un país, la compraventa del suelo no aporta nada a su PIB ni a su capacidad de financiación agregada**. Lo que sí aportan son los servicios asociados —la construcción, la intermediación, la gestión— y solo eso. El NP nacional únicamente se mueve cuando el suelo, las licencias o las concesiones cambian de manos **con el resto del mundo**.",
        },
      ],
    },
    {
      titulo: "Caso práctico: las licencias de tercera generación y el déficit del año 2000",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En el año 2000, varios Estados europeos subastaron las licencias para explotar la telefonía móvil de tercera generación. Las cifras fueron extraordinarias: el Reino Unido recaudó del orden de 22.500 millones de libras y Alemania alrededor de 50.000 millones de euros, en torno a dos puntos y medio de su PIB. Y entonces surgió la pregunta contable, que resultó ser una pregunta política.",
            "**Las dos respuestas posibles daban resultados opuestos.** Si el Estado estaba **vendiendo un activo no producido** —el uso exclusivo de una porción del espectro radioeléctrico— la operación era **NP**, se registraba íntegra en el momento de la concesión y mejoraba la capacidad de financiación de aquel ejercicio de golpe. Si estaba **arrendando** ese recurso durante veinte años, lo que cobraba era una **renta**, y había que repartirla a lo largo de los veinte años, con un efecto anual veinte veces menor.",
            "**Eurostat resolvió a favor de la primera interpretación**, con el argumento de que la licencia transfería al operador el control efectivo del recurso durante todo el período y era, a efectos económicos, una venta. El efecto fue inmediato y espectacular: **Alemania cerró el año 2000 con superávit en las administraciones públicas** en lugar del déficit que le correspondía por su actividad ordinaria, y volvió al déficit al ejercicio siguiente, cuando la operación no se repitió.",
            "**Lo interesante del caso no es la anécdota sino lo que reveló.** Una operación puntual, irrepetible y sin relación alguna con la política fiscal del año podía alterar el indicador con el que se vigilaba precisamente esa política fiscal. La capacidad de financiación es un buen indicador de la posición de un Estado, pero **incluye la venta de patrimonio**, y vender patrimonio no es lo mismo que reducir el desequilibrio entre ingresos y gastos corrientes.",
            "**La respuesta institucional llegó por dos vías, y ambas siguen vigentes.** Por un lado, las reglas de clasificación se endurecieron: hoy el tratamiento depende de si el Estado retiene el control del recurso y de cómo se estructuran los pagos, y una concesión con pagos escalonados y control retenido se reparte a lo largo del período en lugar de reconocerse de golpe. Por otro, la vigilancia fiscal dejó de mirar solo el saldo observado y empezó a usar el **saldo ajustado de operaciones puntuales** —y, más tarde, el saldo estructural—, precisamente para que las ventas de activos y otras medidas de una sola vez no distorsionen la lectura.",
            "**La lección excede el episodio y es la que conviene retener de todo el bloque.** Las reglas de clasificación no son neutrales: determinan cifras que a su vez determinan decisiones. Por eso se escriben en un reglamento europeo, se interpretan por un organismo estadístico independiente y se revisan cuando aparecen operaciones nuevas. Y por eso vale la pena entenderlas: quien conoce la regla puede anticipar cómo se registrará una operación antes de que nadie lo anuncie, y sabe qué parte de un saldo publicado es actividad ordinaria y qué parte es una venta que no se repetirá.",
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
            { t: "Creer que la compraventa de suelo genera PIB", d: "El terreno no lo ha producido nadie, así que su valor no entra en el producto de ningún año. Lo que sí genera PIB son los servicios asociados: notaría, registro, intermediación, tasación, que el sistema recoge como costes de transmisión y trata como formación de capital fijo en la categoría AN.116." },
            { t: "Olvidar que el NP se anula entre residentes", d: "Es un código neto: lo que uno adquiere otro lo cede. Por muy activo que sea el mercado inmobiliario de un país, el NP agregado no se mueve. Solo cambia cuando el suelo, las licencias o las concesiones se compran o se venden al resto del mundo." },
            { t: "Confundir vender un activo no producido con arrendarlo", d: "Vender es una operación NP en la cuenta de capital; arrendar produce una renta de la propiedad (D.45) en la cuenta de asignación de renta primaria. Son cuentas distintas y saldos distintos, y muchas operaciones reales están a medio camino, que es donde las reglas se vuelven finas." },
            { t: "Tratar los derechos de emisión como la venta de un activo", d: "Se parecen mucho a una licencia de espectro y sin embargo son impuestos (D.29). La diferencia está en qué adquiere el comprador: en el espectro, el uso exclusivo de un recurso natural escaso, que es un activo; en la emisión, el permiso para hacer algo prohibido de otro modo, que es un tributo." },
            { t: "Leer una capacidad de financiación sin comprobar si incluye ventas de patrimonio", d: "El caso de las licencias de 2000 llevó a un país del déficit al superávit en un ejercicio con una operación irrepetible y ajena a su política fiscal. Vender patrimonio mejora el saldo pero no reduce el desequilibrio entre ingresos y gastos corrientes, y por eso la vigilancia fiscal usa saldos ajustados de operaciones puntuales." },
            { t: "Igualar formación de capital y necesidad de financiación", d: "En el ejemplo la empresa aporta 524.000 € al PIB y necesita financiar 824.000 €: el solar sale de su caja aunque no sea producción de nadie. La diferencia entre lo que la economía produce y lo que una unidad necesita financiar es exactamente el NP." },
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
            "Los activos no producidos son la frontera exterior del PIB: riqueza que el sistema reconoce y producción que no reconoce.",
          ],
          lista: [
            "La ficha **13.08** cubre el lado contrario: los activos que sí se producen y que por tanto sí entran en el PIB cuando se crean.",
            "La ficha **12.09** situaba el NP en la cuenta de capital como la última resta antes de la capacidad de financiación; aquí se ve qué contiene y por qué se anula al agregar.",
            "La ficha **12.04** recoge la renta que estos activos generan cuando se arriendan en lugar de venderse: las rentas de la tierra y de los recursos del subsuelo, que son D.45.",
            "La ficha **13.05** ofrece el contraste decisivo: los derechos de emisión, que parecen la venta de una licencia y son un impuesto, porque lo que se adquiere es un permiso y no un recurso.",
            "Y la ficha **13.10** los incorpora al balance: los activos no producidos figuran en el patrimonio junto a los producidos y a los financieros, y se revalorizan como cualquier otro, a menudo más que ninguno.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el sistema distingue con cuidado entre ser rico y producir**. La tierra, el subsuelo y el espectro valen mucho y no aparecen en el PIB de ningún año; los servicios de comprarlos, venderlos y gestionarlos sí. Confundir ambas cosas lleva a sobreestimar la actividad de las economías con mucho patrimonio y poco flujo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué define a un activo no producido?", a: "Que proporciona beneficios económicos a su propietario y no ha salido de ningún proceso de producción. Son las tierras y recursos naturales incluido el espectro, los contratos, arrendamientos y licencias transferibles, y el fondo de comercio. Su valor nunca entra en el PIB, por mucho que se compren y se vendan." },
            { q: "Una empresa paga 300.000 € por un solar y 24.000 € en gastos de la operación. ¿Qué entra en el PIB?", a: "Solo los 24.000 €. El terreno no lo ha producido nadie, así que es una adquisición de activo no producido (NP). Los gastos de notaría, registro e intermediación sí son servicios prestados este año, y el sistema los trata como formación bruta de capital fijo en la categoría AN.116, creada exactamente para ellos." },
            { q: "¿Por qué el NP agregado de un país apenas se mueve pese a un mercado inmobiliario activo?", a: "Porque es un código neto: lo que un residente adquiere, otro residente lo cede, y la operación se anula al agregar. El NP nacional solo cambia cuando el suelo, las licencias o las concesiones se compran o venden al resto del mundo." },
            { q: "¿Qué diferencia hay entre vender un terreno y arrendarlo, en términos de cuentas?", a: "Vender es una operación NP que vive en la cuenta de capital y afecta a la capacidad de financiación. Arrendar produce una renta de la tierra (D.45), que es una renta de la propiedad y vive en la cuenta de asignación de renta primaria, afectando a la renta nacional." },
            { q: "¿Por qué una licencia de espectro es un activo y un derecho de emisión un impuesto?", a: "Por lo que adquiere el comprador. En el espectro adquiere el uso exclusivo de un recurso natural escaso, que es un activo no producido. En el derecho de emisión adquiere el permiso para hacer algo que de otro modo estaría prohibido, que es la definición económica de un tributo. La forma es casi idéntica y el fondo, opuesto." },
            { q: "¿Qué enseñó el episodio de las licencias de telefonía del año 2000?", a: "Que una operación puntual e irrepetible puede alterar el indicador con el que se vigila la política fiscal: Alemania pasó de déficit a superávit en un ejercicio y volvió al déficit al siguiente. La capacidad de financiación incluye la venta de patrimonio, que no es lo mismo que reducir el desequilibrio corriente. De ahí que hoy se usen saldos ajustados de operaciones puntuales y que las reglas de clasificación se endurecieran." },
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
            { ref: "SEC 2010, capítulo 6 — adquisiciones menos cesiones de activos no producidos (NP)", nota: "el tratamiento en la cuenta de capital y la definición de cada familia." },
            { ref: "SEC 2010, capítulo 7 y anexo 7.1 — activos AN.2", nota: "el catálogo completo, incluido el espectro radioeléctrico y los costes de transmisión (AN.116)." },
            { ref: "Eurostat, Manual on Government Deficit and Debt — licencias, concesiones y asociaciones público-privadas", nota: "las reglas actuales, endurecidas tras el episodio de las licencias de telefonía." },
            { ref: "Eurostat, decisión de julio de 2000 sobre las licencias de telefonía móvil", nota: "el documento que resolvió el caso y su razonamiento; la mejor lectura para ver cómo se decide una clasificación." },
            { ref: "INE, cuentas de capital por sectores institucionales", nota: "el NP español con datos reales, donde se comprueba lo pequeño que es el agregado frente al volumen del mercado." },
          ],
        },
      ],
    },
  ],
};
