/* Ficha 9.08 — Marketing mix y politica de precios. */

export default {
  codigo: "9.08",
  titulo: "Marketing mix y política de precios",
  nivel: 2,
  bloque: "Dirección de empresas",
  tiempo: "4 h",
  nucleo:
    "El precio es la única variable del marketing que genera ingresos; las demás generan costes. Y es también la de efecto más inmediato sobre el beneficio, porque un punto de precio cae íntegro al margen mientras que un punto de volumen arrastra su coste variable.",
  requiere: "9.07 Segmentación · 6.04 Punto muerto · 2.03 Elasticidades",
  abre: "9.09 Operaciones · 2.07 Discriminación de precios",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **marketing mix** organiza las decisiones operativas en cuatro variables: producto, precio, distribución y comunicación. Su valor está en obligar a la coherencia: las cuatro deben apuntar al mismo posicionamiento de la ficha 9.07. Un producto de gama alta vendido con descuento agresivo en un canal masivo no es una combinación de decisiones, es una contradicción que el cliente percibe antes que la empresa.",
            "Entre las cuatro, el **precio** tiene un estatus distinto por tres razones. Es la **única que genera ingresos**; las otras tres son inversiones. Es la de **efecto más inmediato**, porque puede cambiarse mañana mientras que un producto tarda meses. Y es la de **mayor apalancamiento sobre el beneficio**, porque una variación de precio cae íntegra al margen y una variación de volumen arrastra el coste variable asociado.",
            "Existen tres enfoques para fijarlo y solo uno es defendible como criterio principal. El **basado en costes** añade un margen al coste unitario; es simple, transparente y tiene un defecto lógico: el coste unitario depende del volumen y el volumen depende del precio, así que el razonamiento es circular. El **basado en la competencia** toma el precio del mercado como referencia; es un dato relevante y no un criterio, porque no dice qué hacer si el producto es mejor o peor. El **basado en el valor** parte de lo que el cliente está dispuesto a pagar según el beneficio que obtiene, y es el único que conecta el precio con la razón por la que alguien compra.",
            "La relación entre precio y volumen la gobierna la **elasticidad**, y de ella se deduce el resultado clásico: el margen relativo óptimo es el inverso de la elasticidad en valor absoluto. Con demanda muy elástica el margen sostenible es pequeño; con demanda rígida, grande. Esa regla explica por qué sectores estructuralmente distintos operan con márgenes que no tiene sentido comparar entre sí.",
            "Y hay una familia de decisiones que multiplica el beneficio sin cambiar el producto: la **discriminación de precios**, que consiste en cobrar precios distintos a clientes con disposición a pagar distinta. Descuentos por volumen, tarifas por segmento, precios por horario, versiones con prestaciones distintas. Requiere que los segmentos sean separables y que no puedan revenderse entre sí, y es la aplicación práctica de todo lo visto en la ficha anterior sobre segmentación.",
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
            { nom: "Elasticidad precio de la demanda", sub: "Negativa en condiciones normales.", cols: ["ε = (%Δ cantidad) / (%Δ precio)"] },
            { nom: "Margen relativo óptimo", sub: "Regla de Lerner con coste marginal constante.", cols: ["(P − CMg) / P = 1 / |ε|"] },
            { nom: "Volumen necesario tras bajar el precio", sub: "Para mantener el margen total.", cols: ["Δq necesario = m₀ / m₁ − 1"] },
            { nom: "Margen unitario", sub: "El punto de partida de cualquier decisión de precio.", cols: ["m = P − Coste variable unitario"] },
            { nom: "Apalancamiento del precio", sub: "Un punto de precio vale más que uno de volumen.", cols: ["ΔBeneficio / Beneficio = ΔP × Q / (m × Q)"] },
            { nom: "Precio basado en valor", sub: "El techo lo marca la alternativa del cliente.", cols: ["P ≤ Precio de la alternativa + Valor diferencial percibido"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el apalancamiento del precio",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un producto se vende a **100 €** con un coste variable de **70 €**, es decir un margen unitario de 30 €. Se venden **10.000 unidades** y los costes fijos son de **200.000 €**, con lo que el beneficio es de 100.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario (+10 % en cada palanca)", "Margen total", "Beneficio", "Variación"],
          filas: [
            ["Situación de partida", "300.000 €", "100.000 €", "—"],
            ["Volumen +10 %", "330.000 €", "130.000 €", "+30 %"],
            ["Coste variable −10 %", "370.000 €", "170.000 €", "+70 %"],
            { celdas: ["Precio +10 %", "400.000 €", "200.000 €", "+100 %"], clase: "total" },
          ],
          nota: "Suponiendo que el volumen no se resiente. **Subir el precio un 10 % duplica el beneficio**, mientras que vender un 10 % más lo aumenta un 30 %, porque cada unidad adicional arrastra sus 70 € de coste variable. Ese es el apalancamiento del precio, y es la razón de que sea la variable con más impacto y la que se gestiona con menos rigor.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El reverso obliga a la prudencia.** ¿Cuánto volumen adicional haría falta para compensar una bajada de precio? Si el precio baja a 90 €, el margen unitario cae de 30 € a 20 €. Para mantener los 300.000 € de margen total harían falta 15.000 unidades: **un 50 % más de volumen para compensar un 10 % menos de precio**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Variación de precio", "Margen unitario", "Volumen necesario", "Variación de volumen"],
          filas: [
            ["−20 %", "10 €", "30.000 uds", "+200 %"],
            ["−10 %", "20 €", "15.000 uds", "+50 %"],
            ["−5 %", "25 €", "12.000 uds", "+20 %"],
            ["+5 %", "35 €", "8.571 uds", "−14 %"],
            { celdas: ["+10 %", "40 €", "7.500 uds", "−25 %"], clase: "total" },
          ],
          nota: "La asimetría es brutal y depende del margen de partida: **cuanto menor es el margen, más volumen exige cualquier rebaja**. Con un margen del 30 % sobre precio, una rebaja del 10 % necesita un 50 % más de unidades. Con un margen del 15 %, necesitaría el doble de volumen. Antes de aprobar un descuento conviene calcular este número, porque casi nunca se alcanza.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y la regla de la elasticidad.** Si la demanda de este producto tuviera una elasticidad de −3, el margen relativo óptimo sería 1/3 = 33 %, próximo al 30 % actual: el precio estaría bien fijado. Con una elasticidad de −1,5, el margen óptimo sería del 67 %, lo que indicaría que el producto está **infravalorado** y hay recorrido para subir. Estimar la elasticidad exige datos o experimentos, y la mayoría de las empresas prefiere no saberlo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el descuento que nadie autorizó",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En muchas empresas el precio de tarifa lo fija la dirección con cuidado y el precio real lo fija cada comercial en cada negociación. Entre ambos hay una **cascada de descuentos** que rara vez se mide de forma agregada: descuento comercial, rappel por volumen, promociones, portes gratuitos, plazos de pago extendidos, devoluciones aceptadas fuera de plazo, servicios no facturados.",
            "Cada concesión parece pequeña y justificada en su contexto. Sumadas, la diferencia entre el precio de tarifa y el **precio neto realmente cobrado** puede ser de quince o veinte puntos, y esa diferencia sale íntegra del margen. Con un margen unitario del 30 %, una erosión de quince puntos de precio se lleva la mitad del beneficio.",
            "**Lo que hace invisible el problema** es que ninguna de esas concesiones aparece junta en ningún informe. El descuento comercial está en la factura, el rappel se liquida a fin de año en otra cuenta, los portes son un gasto logístico, el plazo de pago es un coste financiero que soporta el circulante de la ficha 7.08. **Se gestionan por separado partidas que son todas lo mismo: precio.**",
            "**La herramienta que lo resuelve** es construir la cascada completa por cliente y por pedido, desde el precio de tarifa hasta el precio neto de bolsillo, incorporando el coste financiero del aplazamiento. Al hacerlo aparecen dos hallazgos casi siempre: que la dispersión de precios netos entre clientes es mucho mayor de lo que nadie suponía, y que **no guarda relación con el volumen ni con la rentabilidad del cliente**. Hay clientes pequeños con mejores condiciones que clientes grandes, sin más razón que la habilidad negociadora de quien las concedió en su día y la inercia posterior.",
            "**Corregirlo tiene más recorrido que cualquier iniciativa de crecimiento.** Recuperar tres puntos de precio neto en una empresa con margen del 30 % aumenta el beneficio un 10 %, sin vender más ni reducir costes. Y a diferencia de una subida de tarifa, se puede hacer de forma selectiva sobre las concesiones peor justificadas.",
            "**La conexión con la ficha 9.06 es directa.** Si el variable de la red comercial premia el volumen facturado, la cascada de descuentos crecerá inevitablemente, porque conceder no le cuesta nada a quien concede. El problema de precios es, en buena medida, un problema de diseño de incentivos.",
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
            { t: "Fijar el precio añadiendo un margen al coste", d: "El coste unitario depende del volumen y el volumen depende del precio: el razonamiento es circular. Además ignora por completo lo que el cliente está dispuesto a pagar, que es lo único que determina si comprará." },
            { t: "Bajar el precio sin calcular el volumen necesario", d: "Con un margen del 30 %, una rebaja del 10 % exige vender un 50 % más solo para mantener el beneficio. Ese número se puede calcular en un minuto y casi nunca se calcula antes de aprobar el descuento." },
            { t: "Gestionar por separado las partidas que son precio", d: "Descuento, rappel, portes, promociones y plazo de pago son todos concesiones de precio, y se llevan en cuentas distintas. Solo la cascada completa hasta el precio neto revela cuánto se está concediendo realmente." },
            { t: "Copiar el precio de la competencia", d: "Es un dato relevante y no un criterio: no dice qué hacer si el producto ofrece más o menos valor, ni si la estructura de costes es distinta. Seguir al competidor en una bajada convierte una decisión suya en una pérdida propia." },
            { t: "Incoherencia entre precio y resto del mix", d: "Un posicionamiento de gama alta con descuentos frecuentes en canal masivo destruye la credibilidad de la promesa. Las cuatro variables del mix deben apuntar al mismo posicionamiento, y el precio es la señal más visible de todas." },
            { t: "Renunciar a discriminar precios", d: "Cobrar lo mismo a clientes con disposición a pagar muy distinta deja dinero sobre la mesa en ambos extremos. Requiere segmentos separables y sin reventa, condiciones que se cumplen más a menudo de lo que se supone." },
            { t: "Retribuir al comercial por volumen y esperar disciplina de precios", d: "Conceder descuentos no le cuesta nada a quien los concede si su variable depende de la facturación. El problema de precios suele ser, en el fondo, un problema de incentivos mal diseñados." },
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
            "Las decisiones de precio de las empresas son la materia prima de los índices que miden la inflación, y su traducción estadística plantea problemas conocidos.",
          ],
          lista: [
            "Los **índices de precios** se construyen recogiendo precios efectivamente cobrados, no de tarifa. La cascada de descuentos de esta ficha es exactamente el problema práctico de la recogida: el precio relevante es el neto que paga el cliente, incluidas promociones.",
            "El **ajuste por calidad** es la dificultad central. Cuando un producto mejora sus prestaciones y sube de precio, hay que separar qué parte de la subida corresponde a inflación y qué parte a mayor calidad. Los **métodos hedónicos** estiman esa descomposición mediante regresión sobre las características del producto, y son imprescindibles en bienes tecnológicos.",
            "Los **deflactores implícitos** de las cuentas nacionales resultan de dividir el valor a precios corrientes entre el volumen, de modo que recogen tanto cambios de precio como cambios en la composición del gasto. Difieren por construcción de un índice de precios de tipo Laspeyres, y compararlos sin más produce confusión.",
            "La **discriminación de precios** complica la medición: cuando el mismo bien se vende a precios distintos según segmento, canal o momento, el precio que entra en el índice es una media cuya representatividad depende de la ponderación elegida.",
            "Y el **índice de precios industriales** mide precios de salida de fábrica, distintos de los de consumo, de modo que la transmisión de unos a otros —y su retardo— es un objeto de análisis por derecho propio.",
          ],
          cierre:
            "Si trabajas con deflactores, esta ficha describe lo que ocurre en el lado de la empresa antes de que el precio llegue a la estadística: por qué el precio de tarifa no sirve, por qué existe dispersión entre clientes y por qué la calidad cambia a la vez que el precio.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Precio 50 €, coste variable 30 €. ¿Cuánto volumen extra exige una rebaja del 10 %?", a: "El margen cae de 20 € a 15 €, así que hace falta un 33 % más de unidades solo para mantener el margen total. Cuanto menor sea el margen de partida, mayor será la exigencia." },
            { q: "¿Por qué subir el precio un 10 % aumenta más el beneficio que vender un 10 % más?", a: "Porque la subida de precio cae íntegra al margen, mientras que cada unidad adicional arrastra su coste variable. En el ejemplo, un 10 % de precio duplica el beneficio y un 10 % de volumen lo aumenta un 30 %." },
            { q: "La elasticidad de la demanda es −2. ¿Cuál sería el margen relativo óptimo?", a: "1 / 2 = 50 % sobre precio. Con demanda más rígida el margen óptimo sube; con demanda más elástica, baja. Es la regla que explica por qué comparar márgenes entre sectores distintos no tiene sentido." },
            { q: "¿Qué es la cascada de descuentos y por qué es invisible?", a: "La diferencia acumulada entre el precio de tarifa y el precio neto realmente cobrado: descuentos, rappeles, promociones, portes y coste del aplazamiento. Es invisible porque cada partida se registra en una cuenta distinta y nunca se agregan." },
            { q: "¿Por qué hacen falta métodos hedónicos en los índices de precios?", a: "Para separar qué parte de una subida de precio corresponde a inflación y qué parte a una mejora de calidad del producto. Sin ese ajuste, la inflación medida en bienes tecnológicos estaría sistemáticamente sobreestimada." },
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
            { ref: "Kotler y Keller, Dirección de marketing", nota: "el marco completo del mix y los enfoques de fijación de precios." },
            { ref: "Nagle y Müller, The Strategy and Tactics of Pricing", nota: "la referencia sobre precios basados en valor, cascada de descuentos y gestión de la dispersión de precios netos." },
            { ref: "Marn y Rosiello, trabajos sobre el apalancamiento del precio", nota: "el análisis cuantitativo que popularizó la comparación entre palancas de precio, volumen y coste." },
            { ref: "INE, metodología del IPC y del IPRI, y ajustes hedónicos", nota: "cómo se recogen los precios y cómo se separa el efecto calidad, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
