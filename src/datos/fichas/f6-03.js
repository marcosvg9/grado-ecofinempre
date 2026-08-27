/* Ficha 6.03 — Costes ABC y asignación de indirectos. */

export default {
  codigo: "6.03",
  titulo: "Costes ABC y asignación de indirectos",
  nivel: 3,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "5 h",
  nucleo:
    "Cuando los costes indirectos dominan y no guardan relación con el volumen, repartirlos por horas de mano de obra produce subvenciones cruzadas sistemáticas: los productos de gran serie financian a los de serie corta sin que nadie lo sepa. El ABC reparte por lo que realmente causa el coste.",
  requiere: "6.02 Sistemas de costes",
  abre: "6.05 Control por desviaciones · 9.09 Operaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los sistemas tradicionales de coste nacieron cuando la mano de obra directa era la partida dominante y los indirectos eran un complemento menor. En ese mundo, repartir los indirectos en proporción a las horas de mano de obra era una aproximación razonable. Hoy la estructura de costes se ha invertido en la mayoría de los sectores: la mano de obra directa puede ser el diez por ciento del coste y los indirectos el sesenta. Repartir el sesenta usando el diez como regla amplifica cualquier imprecisión por seis.",
            "El problema no es solo de proporción, es de **causalidad**. Muchos costes indirectos no los causa el volumen sino la **complejidad**: preparar una máquina cuesta lo mismo para un lote de diez unidades que para uno de diez mil; tramitar un pedido cuesta lo mismo sea grande o pequeño; homologar una referencia cuesta lo mismo se venda mucho o poco. Un reparto proporcional al volumen carga esos costes sobre los productos de gran serie, que son precisamente los que menos los provocan.",
            "El resultado es una **subvención cruzada** predecible en su dirección: los productos de alto volumen y baja complejidad aparecen más caros de lo que son, y los de bajo volumen y alta complejidad, más baratos. Como las decisiones de precio y de catálogo se toman con esas cifras, la empresa tiende a defender productos que destruyen valor y a abandonar o encarecer los que lo crean.",
            "El **coste basado en actividades** interpone un escalón. En lugar de ir de los costes indirectos a los productos, va de los costes a las **actividades** —preparar máquinas, gestionar pedidos, controlar calidad, mantener referencias— y de las actividades a los productos según el consumo real de cada uno. El vínculo entre actividad y producto lo establece el **inductor de coste**, la variable que mejor explica por qué esa actividad consume recursos: número de preparaciones, número de pedidos, número de inspecciones.",
            "Conviene decir también qué **no** es el ABC. No es más exacto por ser más complejo: si los inductores están mal elegidos, un sistema con quince actividades es tan arbitrario como uno con una sola base, y bastante más caro de mantener. Y no cambia el coste total de la empresa ni un céntimo: solo cambia cómo se reparte. Su valor está en las decisiones que permite tomar, no en la cifra agregada.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Nivel de actividad", "Qué causa el coste", "Inductor típico"],
          filas: [
            { nom: "Unitario", sub: "Varía con cada unidad producida", cols: ["El volumen", "Horas máquina, unidades"] },
            { nom: "De lote", sub: "Se incurre una vez por lote, sea del tamaño que sea", cols: ["El número de lotes", "Preparaciones, pedidos, envíos"] },
            { nom: "De producto", sub: "Sostiene la existencia de una referencia", cols: ["La variedad de catálogo", "Referencias vivas, homologaciones"] },
            { nom: "De estructura", sub: "Sostiene la capacidad general de la empresa", cols: ["No tiene inductor razonable", "No se reparte: va al período"] },
          ],
          nota: "La jerarquía es la aportación más útil del método, incluso para quien no llegue a implantarlo. Reconocer que hay costes **de lote** y **de producto** —que no dependen del volumen— basta para desconfiar de cualquier reparto proporcional a las unidades.",
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
            { nom: "Tasa tradicional única", sub: "Un solo reparto para todos los indirectos.", cols: ["t = Indirectos totales / Base única (p. ej. horas MOD)"] },
            { nom: "Tasa de una actividad", sub: "Segunda etapa del ABC.", cols: ["$t_i = \\dfrac{\\text{Coste de la actividad } i}{\\text{Volumen del inductor } i}$"] },
            { nom: "Coste indirecto de un producto", sub: "Suma sobre todas las actividades que consume.", cols: ["$\\mathrm{CI}_p = \\sum_i t_i \\times \\text{consumo del inductor } i \\text{ por } p$"] },
            { nom: "Coste unitario ABC", sub: "Directos más indirectos por actividades.", cols: ["$c_p = \\dfrac{\\mathrm{MP} + \\mathrm{MOD} + \\mathrm{CI}_p}{\\text{Unidades de } p}$"] },
            { nom: "Subvención cruzada", sub: "La cifra que revela el diagnóstico.", cols: ["$S_p = \\text{Coste tradicional}_p - \\text{Coste ABC}_p$"] },
          ],
          nota: "La suma de las subvenciones cruzadas de todos los productos es siempre **cero**. El ABC no descubre coste oculto: descubre coste mal atribuido.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos productos, dos verdades",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa fabrica dos productos. **A** es de gran serie y proceso estable; **B** es de serie corta, muy personalizado y con pedidos frecuentes. Los costes indirectos totales ascienden a **220.000 €**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Dato", "Producto A", "Producto B", "Total"],
          filas: [
            ["Unidades producidas", "10.000", "1.000", "11.000"],
            ["Horas de mano de obra directa", "5.000", "500", "5.500"],
            ["Preparaciones de máquina", "20", "80", "100"],
            ["Pedidos gestionados", "10", "90", "100"],
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Reparto tradicional por horas de MOD", "Producto A", "Producto B"],
          filas: [
            ["Tasa única: 220.000 / 5.500 = 40 €/hora", "—", "—"],
            ["Indirectos asignados", "5.000 × 40 = 200.000 €", "500 × 40 = 20.000 €"],
            { celdas: ["Indirecto unitario", "20,00 €", "20,00 €"], clase: "total" },
          ],
          nota: "Con una sola base los dos productos resultan idénticos en coste indirecto unitario. Eso ya debería levantar sospechas: A y B no se parecen en nada.",
        },
        {
          tipo: "tabla",
          cabecera: ["Reparto por actividades", "Coste", "Inductor", "A", "B"],
          filas: [
            ["Preparación de máquinas", "100.000 €", "1.000 €/prep.", "20.000 €", "80.000 €"],
            ["Gestión de pedidos", "60.000 €", "600 €/pedido", "6.000 €", "54.000 €"],
            ["Energía y mantenimiento", "60.000 €", "10,91 €/hora", "54.545 €", "5.455 €"],
            { celdas: ["Indirectos asignados", "220.000 €", "—", "80.545 €", "139.455 €"], clase: "total" },
            { celdas: ["Indirecto unitario", "—", "—", "8,05 €", "139,45 €"], clase: "total" },
          ],
          nota: "El producto B pasa de **20 € a 139 € de coste indirecto unitario**, casi siete veces más. El producto A baja de 20 € a 8 €. La subvención cruzada era de 119.455 € en un sentido y de 119.455 € en el otro: suma cero, como debe ser.",
        },
        {
          tipo: "parrafos",
          items: [
            "Si el precio de venta de B fuera de 100 €, el sistema tradicional lo presentaba como un producto rentable y el ABC revela que cada unidad vendida destruye valor solo en costes indirectos, antes de contar materiales y mano de obra. Y no porque B sea un mal producto, sino porque su modelo de servicio —lotes pequeños y pedidos frecuentes— tiene un coste que nadie estaba facturando.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: qué hacer con la información",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El error más común tras un estudio ABC es concluir «hay que eliminar el producto B». Casi nunca es la respuesta correcta, y por dos razones.",
            "La primera es que **los costes indirectos no desaparecen al eliminar el producto**. Si se deja de fabricar B, las ochenta preparaciones dejan de hacerse, pero el operario que las hacía sigue en plantilla y la nave sigue alquilada. En el corto plazo buena parte de esos 139.455 € se redistribuiría sobre A, encareciéndolo. Solo desaparecen si la capacidad liberada se elimina de verdad o se ocupa con otra cosa.",
            "La segunda es que el ABC señala **dónde actuar sobre la causa**, no solo qué producto sacrificar. Ochenta preparaciones para mil unidades significa lotes de doce unidades y media: agrupar pedidos, ampliar el tamaño de lote o reducir el tiempo de preparación ataca el coste en su origen. Noventa pedidos para mil unidades sugiere una política comercial que anima al cliente a pedir poco y a menudo, quizá porque no se le cobra por ello.",
            "**El repertorio de decisiones que abre el ABC**, por orden de preferencia: rediseñar el proceso para consumir menos inductor; trasladar al precio el coste real del servicio, con recargos por lote pequeño o pedido urgente; renegociar las condiciones de servicio con los clientes que generan la complejidad; y solo al final, si nada de lo anterior funciona, revisar el catálogo.",
            "Conviene añadir una advertencia sobre el coste del propio sistema. Mantener un ABC exige medir inductores de forma continua, y eso consume tiempo de personas. Un sistema con cinco o seis actividades bien elegidas suele capturar la mayor parte del efecto; uno con treinta rara vez compensa su coste de mantenimiento.",
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
            { t: "Creer que el ABC reduce el coste total", d: "No cambia el coste agregado de la empresa ni un céntimo: solo cambia su atribución. Lo que reduce el coste son las decisiones que se toman después, cuando se ve dónde se genera. El ABC es un instrumento de diagnóstico, no de ahorro." },
            { t: "Elegir inductores por disponibilidad del dato", d: "El inductor debe explicar por qué la actividad consume recursos, no ser simplemente la variable que ya se mide. Usar «unidades producidas» como inductor de la preparación de máquinas reproduce exactamente el problema que el ABC pretende resolver." },
            { t: "Repartir los costes de estructura", d: "La dirección general, el departamento jurídico o la sede no tienen inductor razonable respecto de los productos. Forzar un reparto reintroduce arbitrariedad justo donde el método quería eliminarla. Lo correcto es dejarlos como coste del período." },
            { t: "Eliminar productos aplicando directamente el coste ABC", d: "Los costes indirectos no se evaporan al retirar un producto: se redistribuyen sobre los que quedan, salvo que la capacidad se elimine o se reutilice. Una decisión de catálogo exige analizar qué costes son realmente evitables." },
            { t: "Multiplicar actividades hasta lo inmanejable", d: "La precisión marginal decrece rápido y el coste de mantenimiento crece linealmente. Un sistema con demasiadas actividades acaba desactualizándose y volviendo a repartos automáticos, con lo que se pierde todo lo ganado." },
            { t: "Usar el coste ABC para valorar existencias en cuentas anuales", d: "El PGC exige coste de producción con criterios de reparto razonables y consistentes. El ABC puede ser compatible, pero no todos sus repartos lo son: los costes de estructura y buena parte de los de producto no forman parte del coste de producción a efectos contables." },
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
            "Parece que el ABC no tiene nada que ver con las cuentas nacionales: es una herramienta interna, sin normalizar y sin destinatario externo. Y sin embargo el problema que resuelve —repartir costes comunes entre productos cuando no hay una relación causal evidente— es exactamente el que la contabilidad nacional se encuentra una y otra vez, resuelto con la misma lógica y con una respuesta distinta.",
          ],
          lista: [
            "**La producción de no mercado se valora por suma de costes**, que es el reparto por absorción total llevado al límite: la ficha 12.02 muestra que el valor de la sanidad o la educación públicas se obtiene sumando remuneración, consumos intermedios, otros impuestos netos y consumo de capital fijo. No hay precio que revele el valor, así que se usa el coste, con la consecuencia que aquella ficha subrayaba: el excedente neto de un productor de no mercado es cero por construcción.",
            "**El SIFMI es un problema de inductor en estado puro.** La ficha 12.05 explica que el servicio que presta un banco no se factura y hay que estimarlo por márgenes, y después **repartirlo entre los usuarios**. El inductor elegido es el saldo de préstamos y depósitos de cada sector, y de ahí sale que los hogares consuman una parte como consumo intermedio y otra como gasto final. Es la misma decisión que elegir «número de preparaciones» frente a «unidades producidas», con la diferencia de que aquí la elige un reglamento.",
            "**Dividir una empresa en ramas de actividad es el mismo reparto.** Una sociedad que fabrica y además transporta y vende debe repartirse entre varias ramas para construir el valor añadido sectorial, y sus costes comunes —la sede, la dirección, los sistemas— no pertenecen a ninguna. El SEC lo resuelve por convención, igual que la empresa del ejemplo tuvo que decidir qué hacer con la dirección general.",
            "**Y la decisión de no repartir la estructura tiene su gemelo exacto.** Donde el ABC deja los costes de estructura como coste del período, el sistema estadístico deja sin asignar lo que no admite un criterio defendible: hay partidas que se publican como no distribuidas antes que atribuirlas con una base arbitraria. Las dos disciplinas llegan a la misma conclusión: **un reparto sin causalidad no es información, es ruido con apariencia de precisión.**",
            "La diferencia está en el destinatario, y explica por qué las respuestas divergen. El ABC busca **decisiones**, así que puede permitirse elegir el inductor que mejor explique el consumo de recursos en cada empresa. La contabilidad nacional busca **comparabilidad** entre países y entre años, así que necesita una regla única aunque sea peor para cada caso concreto. Un reparto normalizado y mediocre vence a uno excelente e irrepetible.",
          ],
          cierre:
            "La idea que conviene llevarse es que **la asignación de costes indirectos no es un problema de contabilidad de gestión: es un problema de medición**. Aparece siempre que hay recursos compartidos y hace falta atribuir valor a las partes, y por eso reaparece idéntico en la valoración de los servicios públicos, en la estimación del SIFMI y en la sectorización de las empresas multiproducto. Quien haya entendido por qué falla una base única en una fábrica entenderá por qué el SEC dedica capítulos enteros a decidir inductores.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿En qué dirección va siempre la subvención cruzada de un sistema de base única?", a: "Los productos de alto volumen y baja complejidad subvencionan a los de bajo volumen y alta complejidad. Los primeros aportan mucha base de reparto y consumen pocas actividades de lote y de producto; los segundos, al revés." },
            { q: "La suma de subvenciones cruzadas de todos los productos, ¿cuánto vale?", a: "Cero. El coste indirecto total es el mismo en ambos sistemas; lo único que cambia es su distribución. Si la suma no da cero, hay un error de cálculo." },
            { q: "¿Qué inductor usarías para la actividad «control de calidad por inspección de lote»?", a: "El número de lotes o de inspecciones, no las unidades producidas. Es un coste de nivel de lote: inspeccionar un lote de diez unidades cuesta prácticamente lo mismo que inspeccionar uno de mil." },
            { q: "Tras el estudio, B resulta ruinoso. ¿Se elimina?", a: "No automáticamente. Primero hay que ver qué costes son realmente evitables si desaparece, y explorar rediseñar el proceso, agrupar lotes o repercutir el coste del servicio en el precio. Eliminar redistribuye los indirectos sobre A y puede empeorar el conjunto." },
            { q: "¿Por qué los costes de estructura no se reparten en un ABC bien planteado?", a: "Porque no existe una relación causal entre ellos y los productos. Repartirlos exigiría una base arbitraria, que es justo lo que el método intenta evitar. Se tratan como coste del período." },
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
              q: "Una empresa implanta un sistema ABC. ¿Qué efecto tiene sobre el coste total?",
              opciones: [
                "Lo reduce, porque elimina repartos ineficientes",
                "Ninguno: no cambia el coste agregado ni un céntimo, solo cambia su atribución entre productos",
                "Lo aumenta, por el coste de mantener el sistema",
                "Lo reduce solo si los indirectos superan el 50 % del total",
              ],
              correcta: 1,
              porque: [
                "Un reparto no gasta recursos: distribuye una cifra que ya está gastada. Cambiar el criterio no devuelve dinero.",
                "Lo que reduce el coste son las decisiones que se toman después, cuando por fin se ve dónde se consume de verdad. El sistema informa; ahorrar es una decisión posterior.",
                "El mantenimiento tiene coste, pero esa no es la confusión que interesa: el error corriente es esperar que el ABC baje el coste de los productos por sí solo.",
                "El peso de los indirectos determina cuánto distorsiona el reparto tradicional, no si el total cambia.",
              ],
            },
            {
              q: "¿Cuál es el criterio correcto para elegir un inductor de coste?",
              opciones: [
                "Que el dato ya se esté midiendo, para no añadir trabajo administrativo",
                "Que explique por qué la actividad consume recursos",
                "Que sea proporcional a las unidades producidas, para mantener la comparabilidad",
                "Que reparta el coste de forma uniforme entre los productos",
              ],
              correcta: 1,
              porque: [
                "Elegir por disponibilidad del dato es cómodo y devuelve el sistema al punto de partida: se acaba repartiendo por volumen con otro nombre.",
                "Si la actividad es «preparación de máquinas», el inductor es el número de preparaciones, no las unidades: una serie corta consume una preparación entera igual que una larga.",
                "Usar unidades producidas para una actividad que no depende del volumen reproduce exactamente la subvención cruzada que el ABC pretende corregir.",
                "La uniformidad no es un objetivo: si un producto consume más actividad, debe cargar más.",
              ],
            },
            {
              q: "El ABC atribuye a un producto un coste superior a su precio de venta. ¿Basta para retirarlo del catálogo?",
              opciones: [
                "Sí: vender por debajo de coste destruye valor de forma demostrada",
                "No: los indirectos no se evaporan al retirarlo, se redistribuyen sobre los que quedan salvo que la capacidad se elimine o se reutilice",
                "Sí, siempre que el sistema ABC esté correctamente implantado",
                "No, porque el ABC no sirve para decisiones sobre la cartera de productos",
              ],
              correcta: 1,
              porque: [
                "El coste ABC es una atribución, no un desembolso evitable. Lo que se ahorra al retirar el producto es solo lo que deja de gastarse de verdad.",
                "Una decisión de eliminación exige preguntarse qué costes desaparecen realmente. Si la nave, los supervisores y el sistema siguen ahí, el problema se traslada a los productos restantes.",
                "La calidad de la implantación no cambia la naturaleza del dato: sigue siendo un reparto de costes en su mayoría comprometidos.",
                "Sí sirve, y muy bien, para señalar dónde mirar. Lo que no puede es sustituir el análisis de costes evitables.",
              ],
            },
            {
              q: "¿Por qué no conviene repartir los costes de estructura —dirección general, jurídico, sede— entre los productos?",
              opciones: [
                "Porque el PGC lo prohíbe expresamente",
                "Porque no tienen inductor razonable respecto de los productos, y forzar el reparto reintroduce la arbitrariedad que el ABC venía a eliminar",
                "Porque son costes variables y no pertenecen al sistema de costes",
                "Porque su importe es siempre pequeño y no altera el resultado",
              ],
              correcta: 1,
              porque: [
                "El PGC regula las cuentas anuales, no el diseño del sistema interno de gestión.",
                "Dejarlos sin repartir y presentarlos como lo que son —coste de existir de la empresa— es más informativo que inventar una clave de reparto.",
                "Son costes fijos de estructura, no variables. El problema no es su comportamiento sino la ausencia de relación causal con cada producto.",
                "Suelen ser importes considerables, y repartidos arbitrariamente pueden dar la vuelta a la rentabilidad aparente de una línea.",
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
            { ref: "Kaplan y Cooper, Coste y efecto", nota: "el texto que popularizó el método, con la jerarquía de actividades y numerosos casos reales de subvención cruzada." },
            { ref: "Horngren, Contabilidad de costos", nota: "el capítulo de ABC con la comparación sistemática frente al reparto de base única." },
            { ref: "Kaplan y Anderson, Time-Driven Activity-Based Costing", nota: "la versión simplificada del método, pensada para reducir el coste de mantenimiento que hundió muchas implantaciones iniciales." },
          ],
        },
      ],
    },
  ],
};
