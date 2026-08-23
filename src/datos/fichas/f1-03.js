/* Ficha 1.03 — Elasticidades y sus aplicaciones. */

export default {
  codigo: "1.03",
  titulo: "Elasticidades y sus aplicaciones",
  nivel: 1,
  bloque: "Fundamentos y método económico",
  tiempo: "3 h",
  nucleo:
    "La sensibilidad de la cantidad al precio decide quién paga realmente un impuesto. No lo decide la ley, que solo dice quién lo ingresa: lo decide cuál de las dos partes tiene menos alternativas, y esa parte soporta la mayor porción con independencia de lo que diga el boletín oficial.",
  requiere: "1.02 Oferta y demanda",
  abre: "1.04 Excedente y bienestar · 2.07 Monopolio · 10.03 Sistema fiscal español",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La curva de demanda dice que al subir el precio se compra menos. La **elasticidad** contesta a la pregunta siguiente, que es la que sirve para algo: **cuánto menos**. Se define como el cambio porcentual de la cantidad dividido por el cambio porcentual del precio, y el uso de porcentajes no es un capricho: hace la medida **independiente de las unidades**. Una pendiente cambia según se midan litros o hectolitros, euros o céntimos; una elasticidad, no. Por eso permite comparar la sensibilidad de mercados que no tienen nada que ver entre sí.",
            "Su valor divide el mundo en dos. Si el porcentaje de cantidad supera al de precio, la demanda es **elástica**; si es menor, **inelástica**; y el caso frontera, con elasticidad unitaria, tiene una propiedad que veremos enseguida. Los determinantes de que un bien caiga en un lado o en otro se reducen básicamente a uno: **cuántas alternativas tiene el comprador**. De ahí que importe la existencia de sustitutivos próximos, lo estrechamente que se defina el mercado —la demanda de «alimentos» es rígida y la de «una marca concreta de galletas» es elastiquísima—, el peso del gasto en el presupuesto, si el bien es necesario o prescindible, y sobre todo **el horizonte temporal**: casi todo es más inelástico a corto plazo que a largo, porque adaptarse lleva tiempo.",
            "La primera aplicación es la relación con el **ingreso total**. Al subir el precio, cada unidad se vende más cara pero se venden menos unidades; cuál de los dos efectos gana lo decide la elasticidad. Si la demanda es **inelástica**, subir el precio **aumenta** el ingreso; si es **elástica**, lo reduce. Y el ingreso alcanza su máximo exactamente donde la elasticidad vale uno. Esa es la razón por la que el monopolista de la ficha 2.07 **nunca opera en el tramo inelástico**: allí siempre le convendría subir el precio.",
            "Junto a la elasticidad-precio conviene manejar otras dos. La **elasticidad-renta** mide cómo responde la cantidad a la renta y clasifica los bienes: **normales** si es positiva, **inferiores** si es negativa, y dentro de los normales, **de lujo** si supera la unidad, es decir, si su consumo crece más deprisa que la renta. La **elasticidad cruzada** mide la respuesta al precio de otro bien e identifica relaciones: positiva indica **sustitutivos**, negativa indica **complementarios**. Esta última es, en la práctica, la herramienta con la que las autoridades de competencia delimitan qué bienes pertenecen al mismo mercado.",
            "La aplicación que da nombre al núcleo de la ficha es la **incidencia impositiva**. Cuando se grava una transacción se abre una **cuña** entre lo que paga el comprador y lo que recibe el vendedor, y el reparto de esa cuña **no depende en absoluto de a quién obliga la ley a ingresar el impuesto**. Depende de las elasticidades, y la regla es de una sencillez desconcertante: **soporta la mayor parte del impuesto el lado que menos puede escapar**, es decir, el más inelástico. Quien tiene alternativas se marcha; quien no las tiene, paga. Que la ley diga que el impuesto lo paga el vendedor es una afirmación sobre trámites administrativos, no sobre economía.",
            "Y de la misma cuña sale la última pieza: el impuesto reduce la cantidad intercambiada, y las transacciones que desaparecen eran mutuamente beneficiosas. Esa **pérdida de eficiencia** crece con las elasticidades —cuanto más fácil sea escapar, más gente escapa— y crece **con el cuadrado del tipo impositivo**, de modo que duplicar un impuesto cuadruplica aproximadamente su coste de eficiencia. De ahí una conclusión de política fiscal que la ficha 10.05 desarrollará: **es preferible gravar poco muchas cosas que mucho pocas**, y preferible gravar bases inelásticas si solo se busca recaudar. Que esas bases suelan ser también las de consumo más regresivo es exactamente el conflicto entre eficiencia y equidad que atraviesa toda la imposición.",
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
            { nom: "Elasticidad-precio de la demanda", sub: "Negativa salvo casos patológicos; suele citarse en valor absoluto.", cols: ["ε_d = (dQ/dP) · (P/Q)"] },
            { nom: "Clasificación", sub: "El umbral es la unidad, no el cero.", cols: ["|ε| > 1 elástica · |ε| < 1 inelástica"] },
            { nom: "Elasticidad arco", sub: "Para cambios grandes, evita que el resultado dependa del sentido.", cols: ["ε = (ΔQ / Q̄) / (ΔP / P̄)"] },
            { nom: "Ingreso total", sub: "El ingreso se maximiza donde la elasticidad vale uno.", cols: ["dIT/dP = Q · (1 + ε_d)"] },
            { nom: "Elasticidad-renta", sub: "Clasifica el bien.", cols: ["ε_R < 0 inferior · 0 a 1 normal · > 1 lujo"] },
            { nom: "Elasticidad cruzada", sub: "Delimita el mercado relevante.", cols: ["ε_xy > 0 sustitutivos · < 0 complementarios"] },
            { nom: "Elasticidad de la oferta", sub: "Crece con el horizonte temporal.", cols: ["ε_s = (dQ_s/dP) · (P/Q)"] },
            { nom: "Reparto de un impuesto", sub: "Paga más quien menos puede escapar.", cols: ["Carga del comprador = ε_s / (ε_s + |ε_d|)"] },
            { nom: "Pérdida de eficiencia", sub: "Crece con el cuadrado del tipo.", cols: ["PIM ≈ ½ · t · ΔQ"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: elasticidad, ingreso e impuesto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seguimos con el mercado de la ficha anterior: **Q_d = 100 − 2P** y **Q_s = −20 + 3P**, con equilibrio en P = 24 y Q = 52. Lo primero que conviene ver es que **la elasticidad no es una propiedad de la curva sino de cada punto de ella**: la misma recta de demanda es elastiquísima arriba y rígida abajo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Precio", "Cantidad", "Elasticidad", "Tipo", "Ingreso total"],
          filas: [
            ["10", "80", "−0,25", "Inelástica", "800"],
            ["20", "60", "−0,67", "Inelástica", "1.200"],
            { celdas: ["25", "50", "−1,00", "Unitaria", "1.250"], clase: "total" },
            ["30", "40", "−1,50", "Elástica", "1.200"],
            ["40", "20", "−4,00", "Elástica", "800"],
          ],
          nota: "El ingreso total sube mientras la demanda es inelástica, alcanza su **máximo de 1.250 justo donde la elasticidad vale uno** y cae después. Esta tabla contiene por sí sola dos resultados importantes: que una misma curva de demanda recta tiene todas las elasticidades posibles, y que **preguntar «¿es elástica la demanda de este bien?» está mal planteado si no se dice a qué precio**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora el impuesto.** Se establece un gravamen de **5 por unidad** y la ley obliga a ingresarlo al vendedor. La oferta pasa a ser Q_s = −20 + 3(P − 5) = −35 + 3P, y el nuevo equilibrio se sitúa en **P = 27 y Q = 46**: el comprador paga 27 y el vendedor se queda con 22.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 100], y: [0, 50] },
          marcasX: [0, 20, 46, 52, 80],
          marcasY: [0, 10, 22, 27, 40],
          areas: [
            { puntos: [[0, 27], [46, 27], [46, 22], [0, 22]], color: "acento", etiqueta: "Recaudación 230" },
            { puntos: [[46, 27], [46, 22], [52, 24]], color: "alerta" },
          ],
          series: [
            { nombre: "Demanda", color: "tinta", puntos: [[0, 50], [100, 0]] },
            { nombre: "Oferta", color: "acento", puntos: [[0, 6.7], [100, 40]] },
            { nombre: "Oferta con impuesto", color: "alerta", trazo: "discontinuo", puntos: [[0, 11.7], [85, 40]], etiquetaEn: [55, 30] },
          ],
          puntos: [
            { x: 52, y: 24, etiqueta: "Sin impuesto", guias: false },
            { x: 46, y: 27, etiqueta: "Paga el comprador", guias: false },
            { x: 46, y: 22, etiqueta: "Recibe el vendedor", guias: false },
          ],
          nota: "La **cuña** entre 27 y 22 es el impuesto de 5. El rectángulo verde es lo recaudado; el pequeño triángulo a su derecha son las **seis unidades que dejan de intercambiarse** pese a que comprador y vendedor habrían salido ganando con ellas. Ese triángulo, de valor 15, no lo recibe nadie: es puro coste de eficiencia.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Valor", "Comprobación"],
          filas: [
            ["Elasticidad de la demanda en el equilibrio", "−0,92", "−2 × (24 / 52)"],
            ["Elasticidad de la oferta en el equilibrio", "+1,38", "3 × (24 / 52)"],
            ["Subida del precio para el comprador", "3,00", "27 − 24"],
            ["Bajada del precio para el vendedor", "2,00", "24 − 22"],
            ["Parte soportada por el comprador", "60 %", "1,38 / (1,38 + 0,92)"],
            ["Recaudación", "230", "5 × 46"],
            { celdas: ["Pérdida de eficiencia", "15", "½ × 5 × (52 − 46)"], clase: "total" },
          ],
          nota: "La fila decisiva es la quinta. **El comprador soporta el 60 % de un impuesto que legalmente paga el vendedor**, y ese 60 % no sale de ninguna decisión política: sale de que su demanda es más rígida (0,92) que la oferta (1,38). Si las elasticidades fueran las contrarias, el reparto se invertiría sin cambiar una coma de la ley. Y obsérvese que **el resultado sería idéntico si el impuesto se le cobrara al comprador**: la cuña es la misma y el equilibrio también.",
        },
      ],
    },
    {
      titulo: "Caso práctico: los impuestos especiales",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todos los sistemas fiscales desarrollados gravan con tipos altísimos un puñado muy pequeño de productos: tabaco, alcohol, hidrocarburos. Esa concentración no es casual ni caprichosa, y explicarla usa toda la ficha.",
            "**La primera razón es recaudatoria y se lee directamente en la elasticidad.** Son bienes con pocos sustitutivos próximos, con componente adictivo en algunos casos y con demanda notablemente rígida a corto plazo. Un impuesto elevado sobre una base inelástica **recauda mucho y reduce poco la cantidad**, que es exactamente lo que busca una hacienda. La contrapartida, según la regla de incidencia, es que **lo soporta casi íntegramente el consumidor**, por mucho que lo ingrese el fabricante o el distribuidor.",
            "**La segunda razón es correctora**, y es la que da a estos impuestos su nombre técnico de pigouvianos: el consumo de estos bienes genera costes que recaen sobre terceros —sanitarios, ambientales, de siniestralidad— y que el precio de mercado no recoge. Gravarlos acerca el precio privado al coste social, según el mecanismo que desarrolla la ficha 2.10. **Las dos razones apuntan al mismo instrumento pero no son la misma**, y ahí está el nudo del asunto.",
            "**Porque la tensión entre ambas es real e insalvable.** Si el impuesto funciona bien como corrector, la gente consume menos y **la recaudación cae**; si recauda mucho de forma estable, es señal de que apenas está corrigiendo conducta. Una hacienda que se acostumbra a estos ingresos acaba dependiendo de que el comportamiento **no** cambie, lo que la sitúa en un conflicto de intereses incómodo con su propia política de salud pública o ambiental. Es un caso de manual de instrumento con dos objetivos.",
            "**El tercer efecto es distributivo y juega en contra.** Estos consumos representan una fracción mayor del presupuesto en los hogares de renta baja, de modo que el impuesto es **regresivo** medido sobre la renta. Hay una réplica seria —el daño evitado también se concentra en esos hogares, así que el efecto neto sobre el bienestar no está claro— pero la regresividad del pago, tomada aisladamente, no se discute.",
            "**Y el cuarto es el límite práctico: la elasticidad a largo plazo no es la de corto.** Un diferencial de tipos suficientemente grande abre márgenes de escape que la demanda a corto plazo no muestra: compras transfronterizas, contrabando, sustitución por productos gravados de otra forma. Ese es el motivo por el que existe armonización de mínimos en la Unión Europea y por el que **el tipo óptimo depende de las alternativas del comprador, no solo de la rigidez aparente de su consumo**. Es la misma lección de la última fila del ejemplo numérico, aplicada a un caso donde el escape es geográfico.",
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
            { t: "Confundir elasticidad con pendiente", d: "La pendiente depende de las unidades de medida y la elasticidad no, porque trabaja con porcentajes. Una misma recta de demanda tiene pendiente constante y elasticidad que varía de casi cero a infinito a lo largo de ella, como muestra la primera tabla." },
            { t: "Hablar de «la» elasticidad de un bien sin decir a qué precio", d: "La elasticidad es una propiedad del punto, no de la curva. Preguntar si la demanda de un bien es elástica sin especificar el nivel de precio está mal planteado: en el ejemplo, la misma demanda es −0,25 a un precio de 10 y −4 a un precio de 40." },
            { t: "Creer que quien ingresa el impuesto es quien lo paga", d: "La ley determina el trámite administrativo, no la incidencia económica. El reparto lo deciden las elasticidades: soporta más la parte más rígida. En el ejemplo el comprador carga con el 60 % de un impuesto que legalmente paga el vendedor, y el resultado no cambiaría invirtiendo la obligación legal." },
            { t: "Suponer que subir un impuesto siempre recauda más", d: "Recauda más mientras la caída de cantidad sea pequeña, y eso depende de la elasticidad, que crece con el horizonte y con la existencia de vías de escape. Si el tipo abre alternativas —comprar fuera, sustituir, informalidad—, la base se erosiona y la recaudación puede caer." },
            { t: "Olvidar que las elasticidades crecen con el tiempo", d: "Casi todo es inelástico a corto plazo porque adaptarse lleva tiempo: cambiar de coche, de caldera, de proveedor o de hábito. Evaluar una medida solo con la respuesta del primer año subestima sistemáticamente su efecto sobre las cantidades." },
            { t: "Interpretar una elasticidad-renta negativa como un error de cálculo", d: "Es la definición de bien inferior: al aumentar la renta se consume menos. Existen, y su identificación es útil para prever cómo cambia la estructura del consumo cuando crece una economía, algo que la ficha 2.02 desarrolla con la ley de Engel." },
            { t: "Definir el mercado sin usar la elasticidad cruzada", d: "Lo elástica que sea la demanda de un producto depende de dónde se ponga la frontera del mercado. La elasticidad cruzada es la herramienta que dice qué bienes compiten realmente entre sí, y es la que emplean las autoridades de competencia antes de medir cuota alguna." },
            { t: "Ignorar que la pérdida de eficiencia crece con el cuadrado del tipo", d: "Duplicar un impuesto multiplica aproximadamente por cuatro su coste de eficiencia. De ahí que sea preferible gravar poco muchas bases que mucho unas pocas, un resultado que la ficha 10.05 formaliza como imposición óptima." },
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
            "Las elasticidades no se registran en las cuentas nacionales —son parámetros de conducta, no transacciones— pero las cuentas contienen justamente los datos con los que se estiman.",
          ],
          lista: [
            "Los **impuestos sobre los productos** (D.21) del SEC 2010 recogen el IVA (D.211), los impuestos sobre importaciones (D.212) y los demás impuestos sobre los productos (D.214), donde viven los impuestos especiales del caso práctico. Su magnitud es la que permite calcular el paso de **precios básicos a precios de adquisición**.",
            "Esa distinción es la traducción contable exacta de la cuña de esta ficha: los **precios básicos** son lo que recibe el productor y los **precios de adquisición** lo que paga el comprador. Las cuentas nacionales miden ambos lados de la cuña por separado, aunque no digan nada sobre cómo se reparte la carga.",
            "La **contabilidad nacional no puede identificar la incidencia**, porque para saber quién soporta el impuesto haría falta observar qué habría pasado sin él. Es un problema contrafactual, y se aborda con las técnicas de la ficha 4.07, no con datos agregados.",
            "Las **elasticidades-renta** se estiman con la Encuesta de Presupuestos Familiares del INE, que registra cómo se reparte el gasto de los hogares por nivel de renta. De ahí sale la clasificación entre bienes normales, inferiores y de lujo, y también la **ponderación de la cesta del IPC** de la ficha 1.07.",
            "Y la **elasticidad de la oferta a largo plazo** se manifiesta en la formación bruta de capital fijo (P.51g): un sector cuya oferta responde con rapidez es uno donde la inversión reacciona a los precios, y eso sí se observa en las cuentas por ramas de actividad.",
          ],
          cierre:
            "El punto que más rendimiento da es el tercero: las cuentas dicen cuánto se recaudó y a qué precios se transó, nunca quién acabó soportando el impuesto. Esa pregunta exige un contrafactual y por tanto un modelo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El precio sube un 10 % y la cantidad cae un 4 %. ¿Qué le pasa al ingreso total?", a: "Sube. La elasticidad es −0,4, es decir, inelástica, así que el efecto precio domina al efecto cantidad. El ingreso solo cae al subir el precio cuando la demanda es elástica, y alcanza su máximo justo donde la elasticidad vale uno." },
            { q: "Un impuesto lo ingresa el vendedor. ¿Quién lo paga?", a: "Se reparte según las elasticidades, con independencia de la obligación legal. Soporta más la parte más rígida, porque es la que menos puede escapar. En el ejemplo el comprador carga con el 60 % porque su elasticidad es 0,92 frente a 1,38 de la oferta, y el resultado sería idéntico si la ley obligara a ingresarlo al comprador." },
            { q: "¿Por qué el monopolista de la ficha 2.07 nunca produce en el tramo inelástico de la demanda?", a: "Porque en ese tramo subir el precio aumenta el ingreso total y a la vez reduce la cantidad y por tanto el coste. Al mejorar las dos cosas a la vez, siempre le conviene subir más, así que su óptimo está necesariamente donde la elasticidad supera la unidad." },
            { q: "¿Por qué casi todo es más inelástico a corto plazo que a largo?", a: "Porque adaptarse exige tiempo: cambiar de proveedor, de equipo, de hábito o de ubicación. La respuesta del primer año recoge solo los ajustes inmediatos, y evaluar una medida con ella subestima sistemáticamente el efecto final sobre las cantidades." },
            { q: "¿Por qué es preferible gravar poco muchas bases que mucho unas pocas?", a: "Porque la pérdida de eficiencia crece aproximadamente con el cuadrado del tipo: duplicar un impuesto cuadruplica su coste de eficiencia. Repartir la misma recaudación entre más bases con tipos bajos reduce el coste total, que es el resultado que la ficha 10.05 formaliza como imposición óptima." },
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
            { ref: "Varian, Microeconomía intermedia", nota: "el capítulo de elasticidad y el de impuestos, con la derivación completa de la fórmula de incidencia." },
            { ref: "Krugman y Wells, Introducción a la Economía", nota: "el tratamiento intuitivo, con muchos ejemplos de elasticidades estimadas para bienes concretos." },
            { ref: "Stiglitz, La economía del sector público", nota: "incidencia impositiva y exceso de gravamen tratados en serio; el puente natural hacia las fichas 10.03 y 10.05." },
            { ref: "INE, Encuesta de Presupuestos Familiares", nota: "la fuente con la que se estiman elasticidades-renta en España y se pondera la cesta del IPC." },
          ],
        },
      ],
    },
  ],
};
