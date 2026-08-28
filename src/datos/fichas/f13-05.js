/* Ficha 13.05 — Impuestos sobre la producción y las importaciones (D.2) y subvenciones (D.3). */

export default {
  codigo: "13.05",
  titulo: "Impuestos sobre la producción y las importaciones (D.2) y subvenciones (D.3)",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "Estos impuestos no gravan a nadie por ser rico ni por ganar dinero: gravan la actividad de producir y de vender, y por eso se pagan aunque haya pérdidas. Separarlos entre los que caen sobre cada unidad vendida y los que caen sobre la actividad en su conjunto decide en qué cuenta viven y a qué saldo afectan.",
  requiere: "13.02 Operaciones de bienes y servicios · 12.03 La cuenta de explotación",
  abre: "13.06 Impuestos corrientes sobre la renta · 13.09 Activos no producidos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El D.2 recoge los pagos obligatorios sin contrapartida que las administraciones exigen por producir o por importar**, con independencia de los beneficios obtenidos. Esa última cláusula es la que los separa de los impuestos de la ficha siguiente: una empresa en pérdidas paga igualmente el IVA que repercute, el impuesto sobre hidrocarburos y el IBI de su local, pero no paga impuesto de sociedades.",
            "**La división principal es entre impuestos sobre los productos (D.21) y otros impuestos sobre la producción (D.29), y el criterio es limpio: ¿el importe depende de lo que se vende?** Si el impuesto es proporcional a la cantidad o al valor de cada unidad producida, vendida o importada, es un impuesto **sobre el producto**. Si grava el hecho de tener una actividad —los locales, la plantilla, la licencia— con independencia de las ventas, es un **otro impuesto sobre la producción**.",
            "**Los impuestos sobre los productos son tres.** El **IVA (D.211)**, que en España supone del orden de dos tercios de la categoría y que se registra **solo por la parte no deducible**, es decir, la que soportan hogares, administraciones y actividades exentas; el IVA que las empresas recuperan por sus insumos no entra en las cuentas nacionales. Los **impuestos sobre las importaciones (D.212)**, esencialmente los derechos de aduana, que en la Unión Europea son recurso propio comunitario y viajan a Bruselas. Y los **otros impuestos sobre los productos (D.214)**, que es donde vive casi todo lo demás: los impuestos especiales sobre hidrocarburos, alcohol, tabaco y electricidad, el impuesto de matriculación, el impuesto sobre las primas de seguros y los impuestos sobre transacciones patrimoniales y actos jurídicos documentados.",
            "**Los otros impuestos sobre la producción (D.29) son más pequeños y más variados**: el impuesto sobre bienes inmuebles de los locales, el impuesto de actividades económicas, las tasas por licencias de apertura, los cánones de vertido, los impuestos sobre vehículos de las empresas y, en general, cualquier gravamen sobre la propiedad o el uso de los factores empleados en producir. Su rasgo común es que **no se pueden repercutir unidad a unidad**, porque no hay unidades: son un coste fijo de estar en el mercado.",
            "**La contrapartida son las subvenciones, que el sistema construye simétricamente.** Las **subvenciones a los productos (D.31)** son transferencias por unidad producida o importada: reducen el precio que paga el comprador sin reducir el que recibe el productor. Las **otras subvenciones a la producción (D.39)** premian la actividad con independencia de las ventas: los pagos directos de la política agraria común, las bonificaciones a la contratación, las ayudas al transporte en territorios insulares. En las cuentas, ambas se registran **con signo negativo** respecto a sus impuestos gemelos, y de ahí que casi siempre se citen los agregados netos D.21 − D.31 y D.29 − D.39.",
            "**La consecuencia contable de esta división es la que hay que retener, porque es la que suele confundirse.** Los impuestos **sobre los productos** ya han salido del sistema al valorar la producción a precios básicos —la ficha 13.02 los mostró en el litro de gasolina—, así que **no aparecen en la cuenta de explotación de nadie**: aparecen como recurso de las administraciones en la cuenta de asignación de renta primaria, y son exactamente el puente entre el valor añadido a precios básicos y el PIB a precios de mercado. Los **otros impuestos sobre la producción**, en cambio, **sí restan en la cuenta de explotación** de la unidad que los paga, reduciendo su excedente. Es la razón de que el IVA no aparezca en la cuenta de explotación y el IBI del local sí, aunque ambos los pague la misma empresa el mismo mes.",
            "**Cierra la ficha un caso reciente que muestra la potencia clasificatoria del sistema: los derechos de emisión de gases de efecto invernadero.** Parece natural tratarlos como la venta de un activo —el Estado vende un permiso— pero Eurostat resolvió que son **impuestos sobre la producción (D.29)**, porque lo que la empresa adquiere no es un bien ni un servicio identificable sino el derecho a hacer algo que de otro modo estaría prohibido. Y hay un segundo matiz: se registran **cuando se produce la emisión**, no cuando se compra el permiso, de modo que el importe cobrado por anticipado se anota entretanto como un pasivo financiero de las administraciones. Un desfase de tesorería no puede mejorar el déficit de un año a costa del siguiente.",
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
            { nom: "Qué caracteriza al D.2", sub: "Se pagan aunque haya pérdidas.", cols: ["gravan producir o importar, no ganar"] },
            { nom: "Criterio de la división", sub: "La pregunta que lo decide todo.", cols: ["¿depende el importe de lo que se vende?"] },
            { nom: "Impuestos sobre los productos", sub: "Proporcionales a cada unidad.", cols: ["D.21 = D.211 + D.212 + D.214"] },
            { nom: "El IVA en cuentas nacionales", sub: "Lo que la empresa recupera no cuenta.", cols: ["D.211 solo por la parte no deducible"] },
            { nom: "Otros impuestos sobre la producción", sub: "Coste fijo de estar en el mercado.", cols: ["D.29 — IBI de locales, IAE, licencias, cánones"] },
            { nom: "Las subvenciones gemelas", sub: "Mismo criterio, signo contrario.", cols: ["D.31 a los productos · D.39 a la producción"] },
            { nom: "Dónde vive cada uno", sub: "La consecuencia que más se confunde.", cols: ["D.21 fuera de la explotación · D.29 dentro"] },
            { nom: "El puente de valoración", sub: "Por eso el D.21 no está en ninguna cuenta de explotación.", cols: ["PIB pm $= \\sum$ B.1g pb $+$ D.21 $-$ D.31"] },
            { nom: "Derechos de emisión", sub: "No es la venta de un activo.", cols: ["D.29, devengado al emitir, no al cobrar"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: los dos impuestos abiertos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 12.03 daba, para la economía de ejemplo, unos otros impuestos sobre la producción de 62 y unas otras subvenciones de 12. Los abrimos, y añadimos lo que ocurriría si esa economía tuviese impuestos sobre los productos, que hasta ahora se han supuesto nulos para que el valor añadido y el PIB coincidieran.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Componente", "Código", "Importe", "Ejemplo concreto"],
          filas: [
            ["Impuesto sobre bienes inmuebles", "D.29", "30", "El recibo del local y el de la vivienda que produce alquiler imputado"],
            ["Impuesto de actividades económicas", "D.29", "8", "El gravamen por el mero hecho de ejercer"],
            ["Tasas, licencias y cánones", "D.29", "9", "Licencia de apertura, canon de vertido, ocupación de vía pública"],
            ["Impuestos medioambientales y derechos de emisión", "D.29", "10", "Devengados en el momento de emitir, no de comprar el permiso"],
            ["Otros gravámenes sobre factores", "D.29", "5", "Impuestos sobre vehículos de empresa y sobre nóminas"],
            ["Total otros impuestos sobre la producción", "D.29", "62", "Restan del excedente en la cuenta de explotación"],
            ["Pagos directos de la política agraria común", "D.39", "5", "No dependen de lo que se venda, sino de la actividad"],
            ["Bonificaciones a la contratación", "D.39", "4", "Reducción de cuotas ligada al empleo, no al producto"],
            ["Ayudas al transporte y otras", "D.39", "3", "Compensaciones por servicio público y territoriales"],
            { celdas: ["Total otras subvenciones a la producción", "D.39", "12", "Suman al excedente"], clase: "total" },
          ],
          nota: "El neto **62 − 12 = 50** es lo que la ficha 12.03 restaba entre el valor añadido de 1.000 y el excedente de 450, junto con los 500 de remuneración. Obsérvese el primer renglón: el **IBI de la vivienda ocupada por su propietario también es D.29**, y no un impuesto sobre el patrimonio del hogar, porque en el SEC ese hogar es un productor —produce el servicio de alojamiento que se imputa como alquiler— y el IBI grava un inmueble utilizado en la producción. Es de los detalles que más sorprenden y la ficha siguiente lo retoma.",
        },
        {
          tipo: "grafico",
          alto: 370,
          ejes: { x: "", y: "Céntimos de euro" },
          dominio: { x: [0, 4.6], y: [0, 1.75] },
          marcasX: [],
          marcasY: [0, 0.5, 1.0, 1.5],
          areas: [
            { puntos: [[0.4, 0], [0.4, 0.6], [1.3, 0.6], [1.3, 0]], color: "acento" },
            { puntos: [[1.7, 0], [1.7, 0.6], [2.6, 0.6], [2.6, 0]], color: "acento" },
            { puntos: [[1.7, 0.6], [1.7, 0.77], [2.6, 0.77], [2.6, 0.6]], color: "n2" },
            { puntos: [[3.0, 0], [3.0, 0.6], [3.9, 0.6], [3.9, 0]], color: "acento" },
            { puntos: [[3.0, 0.6], [3.0, 0.77], [3.9, 0.77], [3.9, 0.6]], color: "n2" },
            { puntos: [[3.0, 0.77], [3.0, 1.27], [3.9, 1.27], [3.9, 0.77]], color: "alerta" },
            { puntos: [[3.0, 1.27], [3.0, 1.5367], [3.9, 1.5367], [3.9, 1.27]], color: "n4" },
          ],
          notas: [
            { x: 0.85, y: 0.3, texto: "0,60", ancla: "middle" },
            { x: 2.15, y: 0.3, texto: "0,60", ancla: "middle" },
            { x: 2.15, y: 0.65, texto: "0,17", ancla: "middle" },
            { x: 3.45, y: 0.3, texto: "0,60", ancla: "middle" },
            { x: 3.45, y: 0.65, texto: "0,17", ancla: "middle" },
            { x: 3.45, y: 0.99, texto: "0,50", ancla: "middle" },
            { x: 3.45, y: 1.39, texto: "0,27", ancla: "middle" },
            { x: 0.85, y: -0.13, texto: "Precio básico", ancla: "middle" },
            { x: 2.15, y: -0.13, texto: "Precio productor", ancla: "middle" },
            { x: 3.45, y: -0.13, texto: "Precio adquisición", ancla: "middle" },
            { x: 4.05, y: 1.42, texto: "IVA · D.211", ancla: "start" },
            { x: 4.05, y: 1.02, texto: "Especial · D.214", ancla: "start" },
            { x: 4.05, y: 0.68, texto: "Márgenes", ancla: "start" },
            { x: 4.05, y: 0.3, texto: "Refinería", ancla: "start" },
          ],
          nota: "El litro de gasolina de la ficha 13.02, ahora con los códigos puestos. Las dos franjas superiores son **impuestos sobre los productos** y suman 0,77 de un precio final de 1,54: el **49,9 %**. Y son las dos franjas que **no aparecen en la cuenta de explotación de nadie**: la refinería tiene un valor añadido construido sobre 0,60, la distribución sobre 0,17, y los 0,77 restantes van directamente a la cuenta de asignación de renta primaria de las administraciones públicas. Es la diferencia entre el valor añadido a precios básicos y el PIB a precios de mercado, vista en un solo producto.",
        },
      ],
    },
    {
      titulo: "Caso práctico: los derechos de emisión y la tentación del cobro anticipado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cuando la Unión Europea puso en marcha su mercado de derechos de emisión, la pregunta contable no era menor: ¿qué es lo que un Estado vende cuando subasta un permiso para emitir una tonelada de dióxido de carbono? De la respuesta dependía en qué cuenta entraban miles de millones y en qué año.",
            "**La primera respuesta intuitiva es que se trata de la venta de un activo**, concretamente de una licencia, y por tanto de una operación con activos no producidos (NP) como las que estudia la ficha 13.09. Si fuera así, el ingreso mejoraría directamente la capacidad de financiación del Estado en el año de la subasta, sin pasar por los ingresos públicos corrientes.",
            "**Eurostat resolvió que no.** El criterio decisivo es que la empresa **no adquiere ningún bien ni servicio identificable**: adquiere el derecho a hacer algo que sin el permiso estaría prohibido, que es exactamente la definición económica de un impuesto. Y como el gravamen es un coste de producir con independencia de que la empresa gane o pierda dinero, encaja en los **otros impuestos sobre la producción (D.29)**.",
            "**El segundo problema era el momento del registro, y ahí está la parte interesante.** Un Estado puede subastar hoy permisos que cubren emisiones de los próximos años. Si el ingreso se registrase al cobrarlo, cualquier gobierno podría adelantar subastas para maquillar el déficit de un ejercicio a costa de los siguientes. La regla lo impide: el impuesto se devenga **cuando la emisión se produce**, y lo cobrado por adelantado se anota mientras tanto como un **pasivo financiero** de las administraciones —un anticipo que se debe— sin efecto alguno sobre el déficit.",
            "**El resultado es doblemente instructivo.** Por un lado muestra que la clasificación no se decide por la etiqueta jurídica de la operación —se llama «venta de derechos»— sino por su naturaleza económica. Y por otro, que el criterio de **devengo** que la ficha 10.06 presentaba como una convención técnica es en realidad una defensa: impide que el calendario de caja determine las cifras que se usan para vigilar la disciplina fiscal.",
            "**La misma lógica se aplica a otros casos que reaparecen en el debate público.** Un pago único de una empresa por una concesión, la privatización de un servicio con canon anticipado o la venta de una licencia comercial plantean siempre la misma pregunta: ¿hay un activo identificable que cambia de manos, o hay un derecho a operar que se cobra? La ficha 13.09 muestra un caso en que la respuesta fue la contraria y las consecuencias fueron espectaculares.",
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
            { t: "Buscar el IVA en la cuenta de explotación", d: "No está: es un impuesto sobre los productos y ya quedó fuera al valorar la producción a precios básicos. Aparece como recurso de las administraciones en la cuenta de asignación de renta primaria, y es el puente entre el valor añadido a precios básicos y el PIB a precios de mercado. El IBI del local, en cambio, sí resta del excedente." },
            { t: "Registrar todo el IVA repercutido", d: "Solo entra en las cuentas la parte no deducible, la que soportan hogares, administraciones y actividades exentas. El que las empresas recuperan por sus insumos no es un ingreso público neto ni un coste para nadie. La diferencia entre ambas cifras es de decenas de miles de millones." },
            { t: "Clasificar por el nombre del impuesto en vez de por su base", d: "Lo que decide es si el importe depende de lo que se vende. El impuesto sobre vehículos es D.214 cuando grava la matriculación de cada unidad y D.29 cuando grava anualmente la flota de una empresa. El mismo objeto, dos códigos, según qué se esté gravando." },
            { t: "Suponer que el IBI de la vivienda propia es un impuesto sobre el patrimonio del hogar", d: "Es D.29, porque en el SEC el propietario que ocupa su vivienda es un productor: produce el servicio de alojamiento que se le imputa como alquiler, y el IBI grava un inmueble utilizado en esa producción. Los impuestos sobre el patrimonio del hogar son otra cosa y viven en la ficha 13.06." },
            { t: "Tratar los derechos de emisión como la venta de un activo", d: "La empresa no adquiere ningún bien ni servicio identificable, sino el derecho a hacer algo prohibido de otro modo, que es la definición de un impuesto. Son D.29, y además se devengan cuando se produce la emisión, no cuando se cobra el permiso, para que adelantar subastas no maquille el déficit." },
            { t: "Olvidar el signo de las subvenciones", d: "Se registran con signo contrario a sus impuestos gemelos y por eso las magnitudes que se citan son casi siempre netas. Comparar los impuestos brutos de un país con los netos de otro produce diferencias de varios puntos del PIB en economías con una agricultura subvencionada." },
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
            "Esta familia de impuestos es la bisagra entre dos formas de valorar la economía, y por eso aparece por todas partes.",
          ],
          lista: [
            "La ficha **13.02** los necesitaba para cerrar la identidad de oferta y empleos: la producción se valora a precios básicos y los empleos a precios de adquisición, y el D.21 − D.31 es exactamente la diferencia.",
            "La ficha **12.03** los usaba desde el otro lado: el D.29 − D.39 resta en la cuenta de explotación y es una de las dos partidas que separan el valor añadido del excedente.",
            "La ficha **10.03**, sobre el sistema fiscal español, discute la incidencia de estos impuestos: quién los ingresa no es quién los soporta, y el litro de gasolina lo enseña sin necesidad de teoría.",
            "La ficha **13.06** recoge la frontera por el otro extremo: los impuestos que gravan la renta y el patrimonio, que sí dependen de que haya beneficio y que viven en la cuenta de distribución secundaria.",
            "Y la ficha **13.09** desarrolla la pregunta que el caso de los derechos de emisión deja abierta: cuándo el cobro de una licencia es un impuesto y cuándo es realmente la venta de un activo.",
          ],
          cierre:
            "La idea que conviene llevarse es que **la división entre D.21 y D.29 no es una taxonomía sino una decisión sobre en qué cuenta entra el dinero**. Los primeros nunca tocan el excedente de nadie y son el puente entre dos valoraciones; los segundos son un coste de producción como cualquier otro. Preguntarse si el importe depende de lo que se vende resuelve el noventa por ciento de los casos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué separa el D.2 de los impuestos sobre la renta?", a: "Que el D.2 grava la actividad de producir o importar con independencia de los beneficios obtenidos. Una empresa en pérdidas sigue pagando el IVA que repercute, los impuestos especiales y el IBI de su local, pero no paga impuesto de sociedades." },
            { q: "¿Cuál es el criterio que separa D.21 de D.29?", a: "Si el importe depende de lo que se vende. Si es proporcional a la cantidad o al valor de cada unidad producida, vendida o importada, es un impuesto sobre el producto; si grava el hecho de tener actividad con independencia de las ventas, es un otro impuesto sobre la producción." },
            { q: "¿Por qué el IVA no aparece en ninguna cuenta de explotación?", a: "Porque los impuestos sobre los productos ya han salido al valorar la producción a precios básicos. Aparecen como recurso de las administraciones en la cuenta de asignación de renta primaria, y constituyen el puente entre el valor añadido a precios básicos y el PIB a precios de mercado." },
            { q: "El IBI de la vivienda ocupada por su propietario, ¿qué código lleva?", a: "D.29, otros impuestos sobre la producción. En el SEC ese hogar es un productor: produce el servicio de alojamiento que se le imputa como alquiler, y el IBI grava un inmueble utilizado en esa producción. No es un impuesto sobre el patrimonio del hogar." },
            { q: "¿Por qué los derechos de emisión son un impuesto y no la venta de un activo?", a: "Porque la empresa no adquiere ningún bien ni servicio identificable, sino el derecho a hacer algo que sin el permiso estaría prohibido, que es la definición económica de un impuesto. Y como se paga con independencia de que haya beneficio, encaja en el D.29." },
            { q: "Un Estado subasta hoy permisos que cubren emisiones de los próximos años. ¿Cuándo se registra el ingreso?", a: "Cuando se produce la emisión, no cuando se cobra. Lo cobrado por adelantado se anota entretanto como un pasivo financiero de las administraciones, sin efecto sobre el déficit. La regla impide que adelantar subastas maquille el saldo de un ejercicio a costa de los siguientes." },
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
              q: "El impuesto sobre vehículos, ¿es D.214 o D.29?",
              opciones: [
                "Siempre D.214, por recaer sobre un producto identificable",
                "Depende de su base: D.214 cuando grava la matriculación de cada unidad vendida y D.29 cuando grava la tenencia del parque de una empresa",
                "Siempre D.29, por ser un impuesto local",
                "Depende del sector que lo pague",
              ],
              correcta: 1,
              porque: [
                "El vehículo es identificable en ambos casos; lo que cambia es si el tributo acompaña a la venta o a la posesión.",
                "Lo que decide es si el importe depende de lo que se vende. Clasificar por el nombre del impuesto en lugar de por su base es el error típico de este bloque.",
                "La administración que lo recauda no interviene en la clasificación.",
                "El sector pagador no determina la naturaleza del impuesto.",
              ],
            },
            {
              q: "Una empresa paga el IAE. ¿Reduce eso su excedente de explotación?",
              opciones: [
                "No: como todos los impuestos, se descuenta en la cuenta de distribución secundaria",
                "No: ya quedó fuera al valorar la producción a precios básicos",
                "Sí: los otros impuestos sobre la producción (D.29) se descuentan dentro de la cuenta de explotación",
                "Solo en la parte proporcional a su cifra de negocio",
              ],
              correcta: 2,
              porque: [
                "Los impuestos corrientes sobre la renta sí van allí; el IAE no es uno de ellos.",
                "Eso vale para los impuestos sobre productos. El IAE no depende de lo que se venda.",
                "Es la diferencia práctica entre las dos familias: el D.21 sale antes, al valorar la producción, y el D.29 se resta aquí, junto a la remuneración de asalariados.",
                "El IAE no es proporcional a las ventas, y esa es justamente la razón por la que es D.29 y no D.21.",
              ],
            },
            {
              q: "¿Qué distingue una subvención a los productos (D.31) de una a la producción (D.39)?",
              opciones: [
                "La primera es reintegrable y la segunda no",
                "El mismo criterio que separa D.21 de D.29: si el importe depende de la cantidad producida o vendida",
                "La primera se cobra por anticipado y la segunda a posteriori",
                "La primera la concede el Estado y la segunda la Unión Europea",
              ],
              correcta: 1,
              porque: [
                "La reintegrabilidad es una condición del contrato, no un criterio de clasificación.",
                "Son las gemelas de los dos tipos de impuesto y siguen la misma lógica: una acompaña a cada unidad y la otra a la actividad de producir.",
                "El momento del cobro es indiferente: se registran en devengo.",
                "El organismo que las concede no interviene en la clasificación.",
              ],
            },
            {
              q: "Las cifras de impuestos sobre la producción que se publican suelen ser netas. ¿Por qué importa saberlo?",
              opciones: [
                "Porque las cifras netas se expresan en volumen y las brutas en valor corriente",
                "Porque solo las netas incluyen los impuestos autonómicos",
                "Porque las subvenciones se registran con signo contrario, y comparar impuestos brutos de un país con netos de otro da una diferencia inventada",
                "Porque los importes netos excluyen el IVA",
              ],
              correcta: 2,
              porque: [
                "Ambas se expresan en valor corriente.",
                "El nivel de administración que recauda no distingue lo bruto de lo neto.",
                "En países con mucha subvención a la producción la diferencia entre bruto y neto es considerable, y la comparación cruzada produce una brecha que no existe.",
                "El IVA está en los impuestos sobre productos, brutos o netos.",
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
            { ref: "SEC 2010, capítulo 4 — impuestos sobre la producción y las importaciones (D.2) y subvenciones (D.3)", nota: "el desglose completo y el criterio de la base imponible." },
            { ref: "Eurostat, Manual on Government Deficit and Debt (MGDD)", nota: "las decisiones sobre casos límite, incluidos los derechos de emisión y las licencias; la referencia práctica de todo el capítulo." },
            { ref: "Eurostat y Comisión Europea, Taxation Trends in the European Union", nota: "la clasificación de cada figura tributaria española por código del SEC, muy útil para practicar." },
            { ref: "Agencia Tributaria, informes anuales de recaudación", nota: "los importes reales por figura, para reconstruir el desglose de esta ficha con datos de España." },
            { ref: "Albi, Sistema fiscal español", nota: "la discusión de incidencia que la contabilidad nacional no resuelve: quién ingresa no es quién soporta." },
          ],
        },
      ],
    },
  ],
};
