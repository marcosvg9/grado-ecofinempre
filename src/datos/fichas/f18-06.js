/* Ficha 18.06 — Sistema de financiación de las Comunidades Autónomas. */

export default {
  codigo: "18.06",
  titulo: "Sistema de financiación de las Comunidades Autónomas",
  nivel: 3,
  bloque: "Presupuesto y financiación pública",
  tiempo: "5 h",
  nucleo:
    "Tributos cedidos, un fondo de nivelación y varios fondos añadidos que ya nadie sabe justificar por separado. Su complejidad no es un defecto técnico: es el rastro de que cada reforma tuvo que comprar el acuerdo de todas las partes, y de ahí sale el problema que define al sistema, que la nivelación acabe alterando el orden de recursos entre territorios.",
  requiere: "18.05 Presupuestos autonómicos y locales · 17.09 Imposición autonómica y local",
  abre: "18.08 Control y fiscalización",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo sistema de financiación territorial tiene que conciliar tres objetivos que **no son simultáneamente satisfacibles**: **autonomía**, para que cada gobierno decida y responda; **suficiencia**, para que todos puedan prestar los servicios que tienen encomendados; y **equidad**, para que un ciudadano reciba prestaciones comparables viva donde viva. Cuanta más nivelación se busque, menos margen queda para que la capacidad fiscal propia se traduzca en recursos, y por tanto menos autonomía real. **El sistema español es un punto concreto de ese triángulo, elegido en negociaciones sucesivas.**",
            "La estructura vigente, de la Ley 22/2009, se construye en capas. La primera es la **capacidad tributaria**: los tributos cedidos totalmente —Patrimonio, Sucesiones y Donaciones, Transmisiones Patrimoniales y Actos Jurídicos Documentados, juego— y los cedidos parcialmente: el **50 % del IRPF**, el **50 % del IVA** y el **58 % de los Impuestos Especiales** de fabricación. Como explica la ficha 17.09, solo en el primer grupo y en el IRPF hay competencias normativas; en el resto se cede recaudación sin poder de decisión.",
            "Sobre esa capacidad opera el **Fondo de Garantía de Servicios Públicos Fundamentales**, que es el mecanismo de nivelación propiamente dicho y el que mejor justificación técnica tiene. Cada comunidad aporta el **75 % de su capacidad tributaria** a una bolsa común, a la que el Estado añade recursos, y el total se reparte según la **población ajustada**. El resultado es que **tres cuartas partes de los recursos se distribuyen por necesidad y una cuarta parte queda ligada a la capacidad fiscal de cada territorio**, lo que preserva un incentivo a recaudar.",
            "La **población ajustada** es la variable clave y merece explicarse porque suele malinterpretarse. No es la población empadronada sino una **población corregida por los factores que hacen más caro prestar los servicios**: la estructura de edad, ponderada según el gasto sanitario por tramo, que es muy superior en mayores; la población en edad escolar; la superficie; la dispersión de los núcleos; y la insularidad. **No es un truco para favorecer a nadie: es el reconocimiento de que atender a mil personas mayores dispersas cuesta más que atender a mil jóvenes concentrados.** Que sus ponderaciones concretas sean discutibles es otra cosa, y es el núcleo de casi todas las propuestas de reforma.",
            "A partir de ahí el sistema añade capas cuya justificación técnica se debilita. El **Fondo de Suficiencia Global** cierra el sistema para cada comunidad y arrastra el llamado **statu quo**: la garantía, incorporada en cada reforma, de que **ninguna comunidad pierda recursos respecto de la situación anterior**. Y los **Fondos de Convergencia** —competitividad y cooperación— se crearon en 2009 con recursos adicionales del Estado para cerrar el acuerdo. Cada uno responde a una razón atendible; **sumados, producen un resultado que ya no obedece a ningún criterio único**.",
            "**El efecto agregado es el problema de la ordinalidad**, y conviene enunciarlo con precisión. Tras aplicar todas las capas, **una comunidad con mayor capacidad fiscal por habitante ajustado puede acabar con menos recursos por habitante ajustado que otra con menor capacidad**. Es decir, la nivelación no solo aproxima: **reordena**. El Fondo de Garantía por sí solo no produce ese efecto —preserva el orden por construcción, al dejar sin nivelar un 25 %—; lo producen los fondos añadidos y el statu quo heredado.",
            "**Que eso sea o no un defecto depende de qué se considere justo, y ahí hay dos posiciones legítimas.** Quien defiende el **principio de ordinalidad** sostiene que la solidaridad puede acercar pero no invertir: si un territorio hace un esfuerzo fiscal mayor y acaba con menos recursos, el incentivo a recaudar se destruye y la corresponsabilidad se vuelve retórica. Quien lo relativiza responde que el objetivo del sistema es garantizar servicios equivalentes a los ciudadanos, no ordenar territorios, y que la capacidad fiscal refleja en parte ventajas de localización que no son mérito de nadie. **Es una discusión sobre qué se está nivelando: personas o territorios.**",
            "Dos elementos más completan el cuadro. Los **regímenes forales** de País Vasco y Navarra quedan fuera del sistema común: recaudan casi todos los impuestos y pagan al Estado un **cupo o aportación** por las competencias no asumidas, cuyo cálculo es objeto de discusión permanente. Y el **sistema de entregas a cuenta y liquidación** hace que los recursos de un año se anticipen sobre previsiones y se liquiden **dos años después**, con el efecto desestabilizador que describe la ficha 18.05. El modelo, previsto para revisarse cada cinco años, **lleva sin reformarse desde 2009**, y esa caducidad no resuelta es hoy su rasgo más comentado.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Pieza", "Qué reparte", "Con qué criterio"],
          filas: [
            { nom: "Tributos cedidos", sub: "Total o parcialmente.", cols: ["Capacidad fiscal propia", "Dónde se genera el hecho imponible"] },
            { nom: "Fondo de Garantía", sub: "El 75 % de la capacidad, más aportación estatal.", cols: ["La nivelación propiamente dicha", "Población ajustada por necesidad"] },
            { nom: "Población ajustada", sub: "La variable que define la necesidad.", cols: ["No reparte: pondera", "Edad, superficie, dispersión, insularidad"] },
            { nom: "Fondo de Suficiencia", sub: "Cierra el sistema comunidad a comunidad.", cols: ["El resto hasta el statu quo", "Que nadie pierda respecto del modelo anterior"] },
            { nom: "Fondos de Convergencia", sub: "Competitividad y cooperación.", cols: ["Recursos adicionales del Estado", "Los que hicieron falta para cerrar el acuerdo"] },
            { nom: "Regímenes forales", sub: "Fuera del sistema común.", cols: ["Casi toda la recaudación", "Cupo o aportación por lo no asumido"] },
          ],
          nota: "Las tres primeras filas tienen una justificación técnica clara y defendible; las dos siguientes son **el precio del acuerdo político** que hizo posible cada reforma. Distinguir unas de otras es lo que permite discutir el sistema sin confundir su lógica con su historia.",
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
            { nom: "Aportación al Fondo de Garantía", sub: "Tres cuartas partes de la capacidad.", cols: ["$A_i = 0{,}75\\,C_i$"] },
            { nom: "Reparto del Fondo", sub: "Por necesidad, no por capacidad.", cols: ["$R_i = \\dfrac{p_i}{\\sum_j p_j}\\left(\\sum_j A_j + E\\right)$"] },
            { nom: "Recursos tras la nivelación", sub: "Queda sin nivelar la cuarta parte.", cols: ["$F_i = C_i - A_i + R_i$"] },
            { nom: "Recursos finales", sub: "Tras suficiencia y convergencia.", cols: ["$F_i^{*} = F_i + S_i + V_i$"] },
            { nom: "Ordinalidad", sub: "La condición que el sistema no garantiza.", cols: ["$C_i > C_j \\Rightarrow F_i^{*} > F_j^{*}$"] },
            { nom: "Grado de nivelación", sub: "Cuánto se reduce la dispersión.", cols: ["$\\nu = 1 - \\dfrac{\\sigma(F^{*})}{\\sigma(C)}$"] },
          ],
          nota: "La quinta línea es una **implicación que el sistema español no cumple**, y ese incumplimiento es el problema de la ordinalidad. Nótese que la tercera línea sí la respeta: es al añadir las capas de la cuarta cuando el orden puede invertirse.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuándo la nivelación invierte el orden",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos comunidades con la **misma población ajustada** tienen capacidades fiscales por habitante ajustado de **1.200** y **800** unidades. Aplicamos primero el Fondo de Garantía y después las capas adicionales.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Comunidad A", "Comunidad B"],
          filas: [
            ["Capacidad fiscal", "1.200", "800"],
            ["Aporta al Fondo (75 %)", "−900", "−600"],
            ["Recibe del Fondo (por población ajustada)", "+750", "+750"],
            { celdas: ["Recursos tras el Fondo de Garantía", "1.050", "950"], clase: "total" },
            ["Fondos de suficiencia y convergencia", "−100", "+150"],
            { celdas: ["Recursos finales", "950", "1.100"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El Fondo de Garantía hace exactamente lo que debe.** Reduce la diferencia de 400 unidades a 100, acercando a las dos comunidades sin igualarlas, y **conserva el orden**: A sigue por encima de B. Ese resultado no es casual sino estructural: al dejar sin nivelar el 25 % de la capacidad, la comunidad con más capacidad conserva necesariamente una ventaja. **Mientras el sistema fuera solo esto, el problema de la ordinalidad no existiría.**",
            "**Lo que invierte el orden son las capas siguientes.** Los fondos de suficiencia y convergencia, que responden al statu quo heredado y a los acuerdos que cerraron la reforma de 2009, quitan 100 a A y dan 150 a B. El resultado final es que **la comunidad con un 50 % más de capacidad fiscal acaba con un 14 % menos de recursos**. Quien recaude más obtiene menos, y ese es el resultado que ninguna de las dos posiciones del debate defiende como objetivo: unos lo consideran un defecto que corregir y otros un efecto colateral tolerable de garantizar servicios, pero nadie lo diseñó a propósito.",
            "**Conviene resistir la tentación de leer esto como un fraude.** Cada capa se introdujo con una justificación atendible en su momento: garantizar que nadie perdiera respecto del modelo anterior evitó vetos que habrían impedido cualquier reforma. El problema es **acumulativo**: al superponer cláusulas de statu quo reforma tras reforma, el resultado conserva la memoria de decisiones tomadas hace décadas y **deja de responder a ningún criterio explicable hoy**. Por eso casi todas las propuestas de reforma coinciden en simplificar el número de fondos, aunque discrepen en todo lo demás.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué un sistema que caducó en 2014 sigue vigente",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La Ley 22/2009 previó su propia **revisión quinquenal**. La primera debía producirse en 2014 y no se ha producido. Un sistema pensado para actualizarse lleva más de una década funcionando con parámetros de una economía anterior a la crisis, con una demografía distinta y con unas necesidades de gasto sanitario que han cambiado de forma sustancial. **La pregunta interesante no es por qué caducó, sino por qué nadie la reforma.**",
            "**La respuesta está en la regla de decisión.** Una reforma se negocia en el Consejo de Política Fiscal y Financiera y, aunque formalmente no exige unanimidad, políticamente ningún gobierno aprueba un modelo con varias comunidades en contra. Y como el volumen total de recursos está acotado, **la negociación es de suma cero**: lo que gana una, lo pierde otra. La única salida practicada históricamente ha sido **añadir dinero nuevo del Estado** para que nadie pierda en términos absolutos, y esa vía requiere margen fiscal que no siempre existe.",
            "**A eso se suma que no hay acuerdo sobre el criterio, ni siquiera en abstracto.** Las comunidades con población dispersa y envejecida defienden reforzar los factores de coste de la población ajustada; las densamente pobladas y con más capacidad fiscal defienden la ordinalidad; las que dependen más de las transferencias defienden mantener el statu quo. **Cada posición es coherente con un principio distinto del triángulo del primer párrafo**, y como los tres principios están reconocidos en el sistema, todas pueden invocar un fundamento legítimo.",
            "**La lección de economía política que conviene extraer excede a este caso.** Un mecanismo de reparto con cláusula de statu quo es fácil de aprobar y muy difícil de reformar, porque **convierte cada revisión en una negociación donde alguien tiene que perder y todos tienen capacidad de bloqueo**. Los sistemas que se revisan con normalidad suelen tener reglas de actualización automáticas —parámetros que se recalculan solos con datos objetivos— en lugar de renegociaciones periódicas. El coste de no haberlas incorporado se paga en forma de un modelo que sobrevive mucho más allá de la realidad que pretendía describir.",
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
            { t: "Confundir población empadronada con población ajustada", d: "La ajustada pondera por los factores que encarecen prestar los servicios: estructura de edad según el gasto sanitario por tramo, población escolar, superficie, dispersión e insularidad. Comparar recursos por habitante sin ajustar no mide equidad sino demografía." },
            { t: "Atribuir el problema de la ordinalidad al Fondo de Garantía", d: "El Fondo preserva el orden por construcción, porque deja sin nivelar el 25 % de la capacidad. Lo que puede invertirlo son los fondos de suficiencia y convergencia y las cláusulas de statu quo acumuladas." },
            { t: "Creer que ceder recaudación equivale a ceder poder de decisión", d: "En IVA e Impuestos Especiales se cede un porcentaje de la recaudación sin ninguna competencia normativa, porque están armonizados en la Unión Europea. Solo en los cedidos totalmente y en el IRPF hay capacidad para fijar tipos y beneficios." },
            { t: "Comparar comunidades de régimen común con las forales sin matizar", d: "País Vasco y Navarra están fuera del sistema: recaudan casi todos los impuestos y pagan un cupo o aportación por lo no asumido. Cualquier comparación de recursos por habitante que las mezcle sin explicar el modelo induce a error." },
            { t: "Tratar las cláusulas de statu quo como una anomalía", d: "Fueron el precio de cerrar cada reforma: sin ellas habría habido vetos y no habría habido acuerdo. El problema no es su existencia puntual sino su acumulación, que hace que el resultado conserve decisiones de hace décadas." },
            { t: "Olvidar el desfase de dos años entre entregas a cuenta y liquidación", d: "Los recursos se anticipan sobre previsiones y se liquidan dos ejercicios después. Una liquidación negativa obliga a ajustar hoy por una previsión errónea de hace dos años, y esa inestabilidad no depende de la gestión autonómica." },
            { t: "Suponer que existe un reparto técnicamente correcto", d: "El sistema persigue autonomía, suficiencia y equidad, y los tres objetivos son incompatibles entre sí más allá de cierto punto. Cualquier reparto es una elección entre principios legítimos, no la solución de un problema con respuesta única." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Las entregas a cuenta desplazan el déficit entre subsectores sin cambiar el del conjunto",
          texto:
            "En el SEC, las entregas a cuenta y sus liquidaciones son **transferencias entre subsectores de S.13**, y por eso el conjunto consolidado no las ve: son gasto del Estado e ingreso de la comunidad y se eliminan al consolidar. Pero **sí determinan en qué subsector aparece el déficit**, y con dos matices que conviene conocer. El primero: la contabilidad nacional imputa los recursos del sistema **al ejercicio al que corresponden**, no a aquel en que se pagan, de modo que una liquidación negativa de hace dos años se registra en su año y no en el del cobro. El segundo: cuando el Estado adelanta liquidez mediante mecanismos extraordinarios, esa operación es **financiera** —capítulo 8 y adquisición de activos— y **no reduce el déficit de quien la recibe**, aunque resuelva su tesorería. De ahí la advertencia práctica de la ficha 18.05: atribuir un desvío a «las comunidades» o «al Estado» mirando su saldo aislado suele describir un calendario de transferencias antes que una decisión de gasto.",
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
              q: "Dos comunidades con igual población ajustada tienen capacidades de 1.200 y 800. ¿Qué recursos les deja el Fondo de Garantía?",
              a: "1.050 y 950. Cada una aporta el 75 % de su capacidad (900 y 600), la bolsa de 1.500 se reparte por población ajustada (750 cada una) y se suma al 25 % no aportado. La diferencia se reduce de 400 a 100 y el orden se conserva, porque el 25 % sin nivelar preserva la ventaja de quien más capacidad tiene.",
            },
            {
              q: "¿Qué es el problema de la ordinalidad y qué lo provoca?",
              a: "Que una comunidad con mayor capacidad fiscal por habitante ajustado acabe con menos recursos por habitante ajustado que otra con menor capacidad. No lo provoca el Fondo de Garantía, que preserva el orden, sino los fondos de suficiencia y convergencia y las cláusulas de statu quo acumuladas en cada reforma.",
            },
            {
              q: "¿Qué es la población ajustada y por qué no es la empadronada?",
              a: "Es la población corregida por los factores que encarecen prestar los servicios: estructura de edad ponderada por el gasto sanitario de cada tramo, población escolar, superficie, dispersión e insularidad. Reconoce que atender a mil personas mayores dispersas cuesta más que a mil jóvenes concentrados.",
            },
            {
              q: "¿Por qué un sistema que debía revisarse en 2014 sigue vigente?",
              a: "Porque el volumen de recursos está acotado y la negociación es de suma cero, así que reformarlo exige que alguien pierda, y ninguna comunidad lo acepta. La única vía practicada ha sido añadir dinero nuevo del Estado, que requiere margen fiscal. Además no hay acuerdo sobre el criterio: cada posición invoca un principio distinto y todos están reconocidos en el sistema.",
            },
            {
              q: "¿Reduce el déficit de una comunidad recibir liquidez de un mecanismo extraordinario del Estado?",
              a: "No. Es una operación financiera, capítulo 8, que resuelve la tesorería pero no altera el saldo no financiero. Y en contabilidad nacional los recursos del sistema se imputan al ejercicio al que corresponden, no a aquel en que se cobran.",
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
              q: "¿Qué porcentaje de su capacidad tributaria aporta cada comunidad al Fondo de Garantía?",
              opciones: [
                "El 50 %, en simetría con la cesión del IRPF y del IVA",
                "Un porcentaje variable negociado cada año en el Consejo de Política Fiscal y Financiera",
                "El 75 %, quedando el resto ligado a su propia capacidad fiscal",
                "El 100 %, que después se reparte íntegramente por población ajustada",],
              correcta: 2,
              porque: [
                "La cesión del 50 % se refiere a la recaudación de esos impuestos, no a la aportación al Fondo.",
                "El porcentaje está fijado en la ley, no se negocia anualmente.",
                "Ese 25 % sin nivelar es lo que hace que el Fondo preserve el orden entre territorios.",
                "Nivelar el 100 % eliminaría todo incentivo a recaudar y toda relación entre capacidad y recursos.",],
            },
            {
              q: "Tras el Fondo de Garantía, A tiene 1.050 y B 950; tras los demás fondos, A tiene 950 y B 1.100. ¿Qué ilustra?",
              opciones: [
                "Que la comunidad B tiene mayor población ajustada que A",
                "El problema de la ordinalidad, provocado por los fondos añadidos y el statu quo",
                "Un error de cálculo, porque la nivelación no puede invertir el orden",
                "El funcionamiento normal del Fondo de Garantía, que iguala recursos",],
              correcta: 1,
              porque: [
                "El enunciado parte de igual población ajustada en ambas: la diferencia viene de los fondos.",
                "Son las capas posteriores, que responden a acuerdos históricos, las que reordenan.",
                "No hay error: el sistema no garantiza la ordinalidad, y por eso el resultado es posible.",
                "El Fondo de Garantía acerca sin igualar y conserva el orden: 1.050 frente a 950.",],
            },
            {
              q: "¿Qué recoge la población ajustada que no recoge la empadronada?",
              opciones: [
                "La población activa, que es la que sostiene la recaudación",
                "El coste diferencial de prestar los servicios: edad, superficie, dispersión e insularidad",
                "La población corregida por los movimientos migratorios del último año",
                "La población equivalente a tiempo completo de los usuarios de los servicios",],
              correcta: 1,
              porque: [
                "El criterio es la necesidad de gasto, no la capacidad de generar ingresos.",
                "Atender a mil mayores dispersos cuesta más que a mil jóvenes concentrados, y el reparto lo reconoce.",
                "Los movimientos migratorios se reflejan ya en el padrón: el ajuste va por coste, no por actualización.",
                "No hay tal equivalencia a tiempo completo: los factores son demográficos y territoriales.",],
            },
            {
              q: "¿Por qué las cláusulas de statu quo dificultan reformar el sistema?",
              opciones: [
                "Porque impiden que el Estado aporte recursos adicionales al modelo",
                "Porque están recogidas en la Constitución y requieren reforma constitucional",
                "Porque exigen unanimidad formal en el Consejo de Política Fiscal y Financiera",
                "Porque garantizan que nadie pierda, y con recursos acotados eso convierte cada revisión en suma cero",],
              correcta: 3,
              porque: [
                "El Estado sí puede aportar recursos nuevos, y de hecho ha sido la vía practicada para cerrar acuerdos.",
                "Están en la ley del sistema, no en la Constitución.",
                "La unanimidad no se exige formalmente; el bloqueo es político, no jurídico.",
                "Y como también arrastran decisiones de reformas anteriores, el resultado deja de responder a un criterio explicable.",],
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
            { t: "Ley 22/2009 de financiación de las Comunidades Autónomas", d: "La estructura completa: tributos cedidos, Fondo de Garantía, Fondo de Suficiencia y Fondos de Convergencia. Sus artículos sobre la población ajustada son los que concentran hoy la discusión de reforma." },
            { t: "Comité de expertos para la revisión del sistema de financiación autonómica, informe de 2017", d: "El diagnóstico técnico más completo disponible, con propuestas concretas sobre población ajustada, ordinalidad y simplificación de fondos. Sigue siendo el punto de partida de cualquier debate serio." },
            { t: "AIReF, informes y observatorio de financiación autonómica", d: "Datos homogéneos de recursos por habitante ajustado y descomposición del efecto de cada fondo. Es donde comprobar con cifras reales el ejemplo numérico de esta ficha." },
            { t: "Ministerio de Hacienda, liquidación anual del sistema de financiación", d: "Publica comunidad a comunidad la capacidad tributaria, las transferencias de cada fondo y el resultado final. La fuente primaria para ver cuánto aporta y recibe cada territorio en cada capa." },
          ],
        },
      ],
    },
  ],
};
