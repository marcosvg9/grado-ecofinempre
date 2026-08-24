/* Ficha 13.06 — Impuestos corrientes sobre la renta y el patrimonio (D.5). */

export default {
  codigo: "13.06",
  titulo: "Impuestos corrientes sobre la renta y el patrimonio (D.5)",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "Un mismo contribuyente paga a lo largo del año impuestos que el sistema reparte entre cinco cuentas distintas, y solo algunos de ellos reducen su renta disponible. Saber cuáles importa, porque de esa frontera dependen la presión fiscal medida, el ahorro y el déficit público.",
  requiere: "13.05 Impuestos sobre la producción · 12.06 Distribución secundaria",
  abre: "13.07 Cotizaciones y prestaciones sociales · 13.10 Balances y revalorizaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El D.5 recoge los impuestos que gravan la renta y el patrimonio de forma periódica.** Las dos palabras que hacen el trabajo son **renta** —a diferencia del D.2, aquí sí importa cuánto se ha ganado— y **periódica**, que es la que separa esta cuenta de la cuenta de capital. Un impuesto que se paga cada año por tener algo es corriente; uno que se paga una sola vez cuando ese algo cambia de manos es de capital, y va a otro sitio.",
            "**Tiene dos componentes.** Los **impuestos sobre la renta (D.51)** gravan lo que se gana: el impuesto sobre la renta de las personas físicas, el impuesto sobre sociedades, el gravamen sobre las ganancias de capital y los impuestos sobre premios de juegos de azar. Y los **otros impuestos corrientes (D.59)** gravan periódicamente lo que se tiene o lo que se usa sin que sea un factor de producción: el impuesto sobre el patrimonio, el impuesto sobre vehículos de los hogares, y en general los gravámenes recurrentes sobre bienes de las familias.",
            "**El detalle que casi nadie coloca bien es el IBI de la vivienda propia**, y merece detenerse porque es contraintuitivo. Podría parecer un D.59, un impuesto sobre el patrimonio del hogar. Pero en el SEC un propietario que ocupa su vivienda **es un productor**: produce el servicio de alojamiento que se le imputa como alquiler, y que forma parte del PIB. El IBI grava por tanto un inmueble utilizado en la producción, y es **D.29**, un otro impuesto sobre la producción de la ficha anterior. El mismo recibo pagado por una empresa por su local lleva exactamente el mismo código, y por la misma razón.",
            "**La frontera de arriba es con los impuestos de capital (D.91)**, y es la que más deforma los análisis cuando se cruza mal. El impuesto sobre sucesiones y donaciones y cualquier gravamen extraordinario sobre el patrimonio son **transferencias de capital**: entran en la cuenta de la ficha 12.09 y **no reducen la renta disponible ni el ahorro** de quien los paga, solo su patrimonio neto. Recibir una herencia y pagar por ella no altera la renta de un hogar en ninguna dirección, por grande que sea el importe.",
            "**La frontera de abajo es con los impuestos sobre productos**, y también se cruza con frecuencia. El impuesto de matriculación al comprar un coche o el impuesto sobre transmisiones patrimoniales al comprar un piso usado **no son D.5**: son **D.214**, impuestos sobre los productos, y están dentro del precio de adquisición del bien. No reducen la renta disponible del comprador; se la gasta comprando algo más caro, que no es lo mismo.",
            "**Hay además una frontera con lo que no es impuesto en absoluto.** Un pago obligatorio a las administraciones a cambio de un servicio identificable y proporcional al uso no es un impuesto sino la **compra de un servicio (P.3)**. Es lo que separa una tasa de un tributo, y es de las distinciones que más discusión generan: cuando la contraprestación es difusa o el importe no guarda relación con el coste del servicio, la operación vuelve a ser impuesto. Y las **multas y sanciones**, que son obligatorias y sin contrapartida pero no gravan ni renta, ni patrimonio, ni producción, quedan fuera de todo esto: son transferencias corrientes diversas **(D.75)**, como vio la ficha 12.07.",
            "**Cierra la ficha una advertencia sobre el momento del registro, porque en este impuesto el desfase es grande.** Las cuentas nacionales registran en **devengo**: imputan a cada ejercicio los impuestos que corresponden a la renta de ese ejercicio, no los que se ingresan en él. Con un impuesto que se retiene mensualmente y se liquida al año siguiente, la diferencia entre caja y devengo puede ser de miles de millones, y es una de las razones por las que el déficit público publicado no coincide con el saldo de tesorería del Estado.",
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
            { nom: "Qué caracteriza al D.5", sub: "Las dos palabras de la definición.", cols: ["grava la renta o el patrimonio · de forma periódica"] },
            { nom: "Impuestos sobre la renta", sub: "Gravan lo que se gana.", cols: ["D.51 — IRPF, sociedades, ganancias de capital"] },
            { nom: "Otros impuestos corrientes", sub: "Gravan periódicamente lo que se tiene.", cols: ["D.59 — patrimonio, vehículos de hogares"] },
            { nom: "Frontera con la cuenta de capital", sub: "Una sola vez, al cambiar de manos.", cols: ["sucesiones y donaciones → D.91"] },
            { nom: "Consecuencia de esa frontera", sub: "Por eso una herencia no altera la renta.", cols: ["D.5 reduce B.6 · D.91 no"] },
            { nom: "Frontera con los productos", sub: "Van dentro del precio del bien.", cols: ["matriculación, ITP → D.214"] },
            { nom: "El caso del IBI de la vivienda", sub: "El propietario es un productor.", cols: ["D.29, no D.59"] },
            { nom: "Frontera con lo que no es impuesto", sub: "Contraprestación identificable.", cols: ["tasa por servicio → P.3 · multa → D.75"] },
            { nom: "Momento del registro", sub: "Por eso caja y déficit no coinciden.", cols: ["devengo, no cobro"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un contribuyente y cinco cuentas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un hogar paga a lo largo de un año los siguientes tributos. Todos salen de la misma cuenta corriente y todos figuran en su presupuesto doméstico como «impuestos». El sistema los reparte entre cinco sitios distintos.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Lo que paga", "Importe", "Código", "Cuenta", "¿Reduce su renta disponible?"],
          filas: [
            ["IRPF del ejercicio", "4.500 €", "D.51", "Distribución secundaria", "Sí"],
            ["Impuesto sobre el patrimonio", "300 €", "D.59", "Distribución secundaria", "Sí"],
            ["Impuesto sobre vehículos de tracción mecánica", "120 €", "D.59", "Distribución secundaria", "Sí"],
            ["IBI de su vivienda habitual", "450 €", "D.29", "Explotación (es productor)", "No: reduce su excedente"],
            ["Matriculación del coche nuevo", "900 €", "D.214", "Ya dentro del precio pagado", "No: es gasto, no impuesto directo"],
            ["IVA de todas sus compras del año", "3.100 €", "D.211", "Ya dentro del precio pagado", "No: es gasto, no impuesto directo"],
            ["Impuesto de sucesiones por la herencia recibida", "12.000 €", "D.91", "Cuenta de capital", "No: reduce su patrimonio neto"],
            { celdas: ["Multa de tráfico", "200 €", "D.75", "Distribución secundaria", "Sí, pero no es un impuesto"], clase: "total" },
          ],
          nota: "De los **21.570 € que este hogar entrega a las administraciones**, solo **5.120 € reducen su renta disponible** por la vía del D.5 y el D.75. Los 12.000 € de sucesiones son los que más sorprenden: **no aparecen en ninguna medida de presión fiscal sobre la renta ni reducen el ahorro del hogar**, porque son una transferencia de capital que se lleva parte del patrimonio recibido. Y los 4.000 € de IVA y matriculación tampoco reducen su renta: se los gasta comprando cosas más caras, que contablemente no es lo mismo aunque en la cartera lo parezca.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "", y: "Euros" },
          dominio: { x: [0, 4.6], y: [0, 14500] },
          marcasX: [],
          marcasY: [0, 4000, 8000, 12000],
          areas: [
            { puntos: [[0.2, 0], [0.2, 5120], [1.0, 5120], [1.0, 0]], color: "alerta" },
            { puntos: [[1.3, 0], [1.3, 4000], [2.1, 4000], [2.1, 0]], color: "n1" },
            { puntos: [[2.4, 0], [2.4, 450], [3.2, 450], [3.2, 0]], color: "n3" },
            { puntos: [[3.5, 0], [3.5, 12000], [4.3, 12000], [4.3, 0]], color: "n4" },
          ],
          notas: [
            { x: 0.6, y: 5750, texto: "5.120", ancla: "middle" },
            { x: 1.7, y: 4630, texto: "4.000", ancla: "middle" },
            { x: 2.8, y: 1080, texto: "450", ancla: "middle" },
            { x: 3.9, y: 12630, texto: "12.000", ancla: "middle" },
            { x: 0.6, y: -900, texto: "Reduce su renta", ancla: "middle" },
            { x: 0.6, y: -1750, texto: "disponible  D.5 y D.75", ancla: "middle" },
            { x: 1.7, y: -900, texto: "Va dentro del precio", ancla: "middle" },
            { x: 1.7, y: -1750, texto: "de lo comprado  D.21", ancla: "middle" },
            { x: 2.8, y: -900, texto: "Reduce su", ancla: "middle" },
            { x: 2.8, y: -1750, texto: "excedente  D.29", ancla: "middle" },
            { x: 3.9, y: -900, texto: "Reduce su", ancla: "middle" },
            { x: 3.9, y: -1750, texto: "patrimonio neto  D.91", ancla: "middle" },
          ],
          nota: "Los mismos 21.570 € que este hogar entrega a las administraciones, ordenados por lo único que importa contablemente: **qué saldo tocan**. La barra más alta con diferencia es la que **no reduce ni su renta ni su ahorro** —el impuesto de sucesiones, que se lleva parte de un patrimonio recién recibido— y la que casi todo el mundo situaría primera es la más pequeña. Si se preguntase a este hogar cuánto paga de impuestos diría 21.570 €; si se le preguntase al sistema cuánto le reducen la renta disponible, diría 5.120 €. Ninguna de las dos respuestas es falsa, y por eso hay que decir siempre cuál se está usando.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la comprobación que hace visible el efecto redistributivo.** La ficha 12.06 definía la redistribución como la distancia entre la renta primaria y la disponible. Con las cifras de este hogar, suponiendo una renta primaria de 39.000 € y unas prestaciones recibidas de 0:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Importe"],
          filas: [
            ["Saldo de rentas primarias", "B.5g", "39.000 €"],
            ["− Cotizaciones sociales", "D.61", "10.905 €"],
            ["− Impuestos sobre la renta y el patrimonio", "D.5", "4.920 €"],
            ["− Multas y otras transferencias corrientes", "D.75", "200 €"],
            { celdas: ["= Renta disponible bruta", "B.6", "22.975 €"], clase: "total" },
          ],
          nota: "El hogar conserva el **58,9 % de su renta primaria**. Obsérvese que las **cotizaciones pesan más del doble que los impuestos sobre la renta** —10.905 frente a 4.920— y que sin embargo casi nunca se citan al hablar de presión fiscal. Ese reparto es una característica estructural del sistema español, y la ficha siguiente lo abre entero: buena parte de esos 10.905 € el trabajador ni siquiera los ve.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el déficit publicado no es el saldo de caja del Estado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cada mes el Ministerio de Hacienda publica cuánto ha ingresado y cuánto ha pagado el Estado, y cada trimestre la IGAE publica el déficit en términos de contabilidad nacional. Los dos números no coinciden nunca, y el D.51 es una de las razones principales.",
            "**El mecanismo es el siguiente.** El impuesto sobre la renta se recauda a lo largo del año mediante **retenciones y pagos a cuenta**, y se **liquida** en la declaración del año siguiente, donde una parte se devuelve y otra se complementa. En términos de caja, el Estado ingresa retenciones en un ejercicio y hace devoluciones en el siguiente. En términos de **devengo**, todo el impuesto que corresponde a la renta de un año se imputa a ese año, con independencia de cuándo entre o salga el dinero.",
            "**La consecuencia es que un mismo hecho económico aparece en años distintos según el criterio.** Si en un ejercicio suben mucho las rentas, las retenciones de ese año se quedan cortas y la liquidación del siguiente traerá una recaudación extraordinaria. El saldo de caja mostrará un año malo y otro bueno; el déficit en contabilidad nacional imputará ambos importes al año en que se generó la renta, y mostrará una evolución más suave y más informativa.",
            "**Lo mismo ocurre, con signo contrario, en el gasto.** Una obra ejecutada en diciembre y pagada en marzo es gasto del año en que se ejecutó, no del año en que se pagó. Y aquí está la razón profunda de la regla: **si el déficit se midiera en caja, retrasar pagos lo mejoraría**. Con el criterio de devengo, aplazar una factura no cambia el déficit ni un euro; solo aumenta la deuda comercial. Es la misma defensa que la ficha anterior encontraba en el registro de los derechos de emisión.",
            "**Hay un tercer ajuste, específico de España y de tamaño considerable: el sistema de financiación autonómica.** Las comunidades reciben entregas a cuenta durante el año y la liquidación definitiva dos años después. La ficha 12.07 lo explicaba desde el lado de las transferencias; aquí importa porque los impuestos cedidos siguen el mismo desfase, y por eso los ingresos registrados en las cuentas de una comunidad pueden diferir apreciablemente de los que han entrado en su tesorería.",
            "**La lección general es la que conviene retener para todo el bloque.** Las cuentas nacionales no describen movimientos de dinero: describen **hechos económicos**, y los sitúan en el momento en que ocurren. Es una decisión deliberada, tomada para que las cifras no se puedan manipular con el calendario, y explica buena parte de las discrepancias entre lo que dice un ministerio de hacienda y lo que dice un instituto de estadística sobre el mismo ejercicio.",
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
            { t: "Creer que el impuesto de sucesiones reduce la renta disponible", d: "No la toca. Es un impuesto de capital (D.91), transferencia que vive en la cuenta de capital y que solo reduce el patrimonio neto. Ni la renta disponible ni el ahorro del hogar cambian, por grande que sea el importe, y por eso no aparece en ninguna medida de presión fiscal sobre la renta." },
            { t: "Meter el IVA y la matriculación entre los impuestos que paga el hogar", d: "Son impuestos sobre los productos y están dentro del precio de adquisición de lo que compra. No reducen su renta disponible: se la gasta comprando bienes más caros. Contablemente no es lo mismo, aunque en la cartera lo parezca, y confundirlo distorsiona cualquier cálculo de renta disponible." },
            { t: "Clasificar el IBI de la vivienda propia como impuesto sobre el patrimonio", d: "Es D.29. En el SEC el propietario que ocupa su vivienda es un productor —produce el servicio de alojamiento que se imputa como alquiler— y el IBI grava un inmueble utilizado en la producción. El mismo recibo de una empresa por su local lleva idéntico código." },
            { t: "Confundir una tasa con un impuesto", d: "Si hay un servicio identificable y proporcional al uso, es la compra de un servicio (P.3) y no un tributo. Cuando la contraprestación es difusa o el importe no guarda relación con el coste, vuelve a ser impuesto. Es una de las fronteras que más discusión generan y afecta a la presión fiscal medida." },
            { t: "Contar las multas como recaudación tributaria", d: "Son transferencias corrientes diversas (D.75). Comparten con los impuestos ser obligatorias y sin contrapartida, pero no gravan renta, patrimonio ni producción: sancionan una conducta. Incluirlas en la presión fiscal deforma la comparación entre países." },
            { t: "Comparar el déficit en contabilidad nacional con el saldo de caja", d: "El primero registra en devengo y el segundo en cobros y pagos. Con un impuesto que se retiene mensualmente y se liquida al año siguiente la diferencia es de miles de millones. Y es deliberado: si el déficit se midiera en caja, retrasar pagos lo mejoraría." },
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
            "El D.5 es la mitad de la maquinaria redistributiva del sistema; la otra mitad es el D.6 de la ficha siguiente.",
          ],
          lista: [
            "La ficha **12.06** medía la redistribución como la distancia entre renta primaria y disponible; esta ficha dice exactamente qué tributos abren esa distancia y cuáles, pese a las apariencias, no la abren.",
            "La ficha **13.05** cubre la otra familia de impuestos: los que gravan producir con independencia del beneficio. Juntas cierran el mapa fiscal del SEC, salvo los de capital.",
            "La ficha **12.09** recibe lo que aquí se excluye: los impuestos de capital (D.91), que reducen el patrimonio neto sin tocar la renta ni el ahorro.",
            "La ficha **10.03**, sobre el sistema fiscal español, aporta lo que la contabilidad nacional deliberadamente no responde: quién soporta realmente cada impuesto, que no es quien lo ingresa.",
            "Y la ficha **10.06** introducía el criterio de devengo como convención técnica; el caso práctico muestra que es sobre todo una defensa frente a la manipulación del calendario.",
          ],
          cierre:
            "La idea que conviene llevarse es que **la etiqueta «impuesto» no dice en qué cuenta vive un tributo**. Hay que preguntar tres cosas: si grava renta o producción, si es periódico o de una sola vez, y si va dentro del precio de un bien. Con esas tres respuestas cualquier figura tributaria queda situada, y con ella su efecto sobre la renta disponible, el ahorro y el déficit.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué dos condiciones definen al D.5?", a: "Que grave la renta o el patrimonio —a diferencia del D.2, aquí sí importa cuánto se ha ganado— y que sea periódico. Un impuesto que se paga cada año por tener algo es corriente; uno que se paga una sola vez cuando ese algo cambia de manos es de capital y va a otra cuenta." },
            { q: "Un hogar hereda y paga 12.000 € de impuesto de sucesiones. ¿Cuánto baja su renta disponible?", a: "Nada. Es un impuesto de capital (D.91) que vive en la cuenta de capital y solo reduce el patrimonio neto. Ni la renta disponible ni el ahorro cambian, y por eso el importe no aparece en ninguna medida de presión fiscal sobre la renta." },
            { q: "¿Por qué el IBI de la vivienda habitual no es un impuesto sobre el patrimonio del hogar?", a: "Porque en el SEC el propietario que ocupa su vivienda es un productor: produce el servicio de alojamiento que se le imputa como alquiler y que forma parte del PIB. El IBI grava por tanto un inmueble utilizado en la producción, y es D.29, igual que el recibo del local de una empresa." },
            { q: "El impuesto de matriculación del coche, ¿reduce la renta disponible del comprador?", a: "No. Es un impuesto sobre los productos (D.214) que va dentro del precio de adquisición del vehículo. El hogar se gasta su renta comprando algo más caro, lo que contablemente no es lo mismo que pagar un impuesto directo, aunque en la cartera lo parezca." },
            { q: "¿Por qué el déficit público en contabilidad nacional no coincide con el saldo de caja del Estado?", a: "Porque se registra en devengo: cada impuesto se imputa al ejercicio de la renta que grava y cada gasto al ejercicio en que se ejecuta, no a aquel en que entra o sale el dinero. Con retenciones que se liquidan al año siguiente la diferencia es de miles de millones. Es deliberado: en caja, retrasar pagos mejoraría el déficit." },
            { q: "En el ejemplo, las cotizaciones del hogar duplican a sus impuestos sobre la renta. ¿Por qué importa?", a: "Porque las cotizaciones pesan 10.905 € frente a 4.920 € de D.5 y sin embargo casi nunca se citan al hablar de presión fiscal. Ese reparto es estructural en España, y buena parte de esas cotizaciones el trabajador ni siquiera las ve, porque las paga el empleador y el sistema se las atribuye a él." },
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
            { ref: "SEC 2010, capítulo 4 — impuestos corrientes sobre la renta y el patrimonio (D.5)", nota: "el desglose entre D.51 y D.59 y la frontera con los impuestos de capital." },
            { ref: "SEC 2010, capítulo 6 — impuestos sobre el capital (D.91)", nota: "el otro lado de la frontera; conviene leer los dos capítulos seguidos para fijarla." },
            { ref: "Eurostat, Manual on Government Deficit and Debt — registro de impuestos", nota: "las reglas de devengo y los métodos admitidos para pasar de caja a devengo." },
            { ref: "IGAE, cuentas de las administraciones públicas y conciliación con el déficit de caja", nota: "los ajustes concretos que separan ambas cifras en el caso español." },
            { ref: "Stiglitz, La economía del sector público", nota: "el marco teórico sobre incidencia y eficiencia que la contabilidad nacional no proporciona." },
          ],
        },
      ],
    },
  ],
};
