/* Ficha 1.01 — Escasez, coste de oportunidad y frontera de posibilidades. */

export default {
  codigo: "1.01",
  titulo: "Escasez, coste de oportunidad y frontera de posibilidades",
  nivel: 1,
  bloque: "Fundamentos y método económico",
  tiempo: "3 h",
  nucleo:
    "Toda decisión económica es una renuncia. El coste relevante nunca es el dinero gastado, sino la alternativa perdida, y esa diferencia —invisible en cualquier factura— es la que separa el razonamiento económico del contable.",
  requiere: "Ninguno: es el punto de partida del plan",
  abre: "1.02 Oferta y demanda · 1.05 Pensamiento marginal · 2.05 Costes · 2.11 Ventaja comparativa",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La economía empieza con una constatación banal y unas consecuencias que no lo son: **los recursos son limitados y los deseos no**. De ahí que toda sociedad, y toda persona, tenga que elegir; y elegir significa renunciar. Esa es la definición operativa de **escasez**, y conviene retener que no es sinónimo de pobreza. Una persona rica afronta escasez de tiempo, y una economía muy avanzada sigue teniendo que decidir si dedica un ingeniero a una cosa o a otra. **Mientras haya que elegir hay escasez**, por mucha abundancia que haya.",
            "El concepto que traduce esa idea en algo utilizable es el **coste de oportunidad**: el valor de la mejor alternativa a la que se renuncia. Tiene dos componentes que suelen tratarse de forma muy desigual. Los **costes explícitos** son desembolsos, aparecen en una factura y todo el mundo los cuenta. Los **costes implícitos** no se pagan a nadie —el tiempo propio, el local en propiedad, el capital que podría estar invertido en otra cosa— y por eso desaparecen de la contabilidad, pese a ser tan reales como los otros. De esa asimetría nace la distinción entre **beneficio contable** y **beneficio económico**, que reaparecerá en las fichas 2.05 y 2.06: el segundo descuenta también lo implícito, y por eso siempre es menor.",
            "El reverso de la moneda es el **coste hundido**: aquel ya incurrido y que no puede recuperarse haga uno lo que haga. Precisamente por eso **es irrelevante para cualquier decisión futura**, aunque psicológicamente pese muchísimo. La pregunta correcta ante un proyecto que va mal nunca es cuánto se ha invertido ya, sino qué conviene hacer **de aquí en adelante**. Las dos ideas se combinan en una regla que ordena casi todo el análisis económico de decisiones: **solo cuentan los costes y beneficios que cambian con la decisión**.",
            "La **frontera de posibilidades de producción** es la representación gráfica de todo lo anterior, y merece la pena leerla despacio porque dice cuatro cosas a la vez. Los puntos **sobre** la frontera son eficientes: no se puede producir más de un bien sin producir menos del otro. Los puntos **interiores** son alcanzables pero ineficientes, y señalan recursos ociosos o mal asignados. Los **exteriores** son inalcanzables con la tecnología y los recursos actuales, y eso es la escasez dibujada. Y la **pendiente** de la frontera en cada punto es exactamente el coste de oportunidad de un bien en términos del otro.",
            "Esa frontera es **cóncava**, y la razón no es estética. Los recursos no son igualmente aptos para todos los usos: al pasar de producir un bien a otro se reasignan primero los factores más adecuados y luego los peor adaptados, de modo que **cada unidad adicional cuesta más que la anterior en términos de lo que se sacrifica**. Es el principio del **coste de oportunidad creciente**, y explica por qué la especialización total rara vez es óptima. Solo si los recursos fueran perfectamente sustituibles la frontera sería una recta y el coste de oportunidad, constante.",
            "Y de aquí sale el resultado que más rendimiento da de toda la ficha. Si el coste de oportunidad de producir algo difiere entre dos personas, empresas o países, **a los dos les conviene especializarse en aquello que les cuesta relativamente menos e intercambiar**, aunque uno de ellos sea mejor en todo en términos absolutos. Es la **ventaja comparativa**, y su fuerza está en que no depende de la productividad absoluta sino de la relativa: incluso el más torpe en todo tiene ventaja comparativa en algo, porque los costes de oportunidad no pueden ser mayores en todas las actividades a la vez. Ahí está el fundamento del comercio, de la división del trabajo y de que exista algo parecido a una economía.",
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
            { nom: "Coste de oportunidad", sub: "Lo mejor a lo que se renuncia, no lo que se paga.", cols: ["CO = valor de la mejor alternativa perdida"] },
            { nom: "Coste económico", sub: "Los implícitos son tan reales como los explícitos.", cols: ["Coste económico = explícitos + implícitos"] },
            { nom: "Beneficio económico", sub: "Siempre menor o igual que el contable.", cols: ["B económico = Ingresos − explícitos − implícitos"] },
            { nom: "Coste hundido", sub: "No cambia con la decisión, luego se ignora.", cols: ["Irrecuperable ⟹ irrelevante"] },
            { nom: "Regla de decisión", sub: "El criterio que resume la ficha entera.", cols: ["Solo cuentan los flujos que cambian con la decisión"] },
            { nom: "Pendiente de la frontera", sub: "Es el coste de oportunidad, punto a punto.", cols: ["|dY/dX| = coste de oportunidad de X en Y"] },
            { nom: "Coste de oportunidad creciente", sub: "De ahí la concavidad de la frontera.", cols: ["d²Y/dX² < 0"] },
            { nom: "Ventaja comparativa", sub: "Compara costes relativos, no productividades.", cols: ["CO_A(X) < CO_B(X) ⟹ A se especializa en X"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una economía con dos bienes",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía puede dedicar sus recursos a producir **alimentos** o **maquinaria**. Con todos los recursos en maquinaria obtiene 100 unidades y nada de alimento; según va trasladando recursos, las combinaciones alcanzables describen la curva **M = 100 − A²/100**.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Alimentos", y: "Maquinaria" },
          dominio: { x: [0, 120], y: [0, 120] },
          marcasX: [0, 20, 40, 60, 80, 100],
          marcasY: [0, 20, 40, 60, 80, 100],
          series: [
            {
              nombre: "Frontera",
              color: "tinta",
              etiquetaEn: [88, 45],
              puntos: [[0, 100], [10, 99], [20, 96], [30, 91], [40, 84], [50, 75], [60, 64], [70, 51], [80, 36], [90, 19], [100, 0]],
            },
          ],
          puntos: [
            { x: 40, y: 84, etiqueta: "B  eficiente", guias: false },
            { x: 80, y: 36, etiqueta: "C  eficiente", guias: false },
            { x: 40, y: 40, etiqueta: "D  ineficiente", guias: false },
            { x: 90, y: 80, etiqueta: "E  inalcanzable", guias: false },
          ],
          nota: "La curva contiene las cuatro lecturas. **B y C son eficientes**: para llegar de uno a otro hay que renunciar a maquinaria. **D es alcanzable pero desperdicia recursos**: desde ahí se puede producir más de todo, y por eso el paro o la mala asignación no son un problema de reparto sino de tamaño de la tarta. **E es inalcanzable hoy**, y solo el crecimiento —más recursos o mejor tecnología— desplaza la frontera hasta él. La **concavidad** significa que los últimos alimentos cuestan mucha más maquinaria que los primeros.",
        },
        {
          tipo: "tabla",
          cabecera: ["Alimentos", "Maquinaria", "Alimentos ganados", "Maquinaria sacrificada", "Coste por unidad"],
          filas: [
            ["0", "100", "—", "—", "—"],
            ["20", "96", "20", "4", "0,2"],
            ["40", "84", "20", "12", "0,6"],
            ["60", "64", "20", "20", "1,0"],
            ["80", "36", "20", "28", "1,4"],
            { celdas: ["100", "0", "20", "36", "1,8"], clase: "total" },
          ],
          nota: "La última columna es el coste de oportunidad y **se multiplica por nueve** de la primera fila a la última. Los primeros alimentos salen casi gratis porque se emplean los recursos más aptos para el campo; los últimos exigen sacrificar mucha maquinaria porque ya se está reconvirtiendo a gente y equipos que servían mucho mejor para otra cosa. Esta columna es la pendiente de la curva del gráfico, leída tramo a tramo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la ventaja comparativa, que es donde la idea rinde de verdad.** Dos países disponen de 100 horas de trabajo cada uno. España produce **6 unidades de vino o 4 de tela por hora**; Portugal, **2 de vino o 2 de tela**. España es más productiva en ambos bienes: tiene ventaja **absoluta** en todo. La intuición dice que no tiene nada que ganar comerciando. La intuición se equivoca.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "España", "Portugal"],
          filas: [
            ["Vino por hora", "6", "2"],
            ["Tela por hora", "4", "2"],
            ["Coste de 1 tela, en vino", "1,50", "1,00"],
            { celdas: ["Coste de 1 vino, en tela", "0,67", "1,00"], clase: "total" },
          ],
          nota: "Las dos últimas filas son las que deciden, y no las dos primeras. Producir tela le cuesta a Portugal **1 vino** y a España **1,5**: Portugal es el productor barato de tela pese a ser peor en términos absolutos. Y producir vino le cuesta a España **0,67 telas** frente a **1** en Portugal. **Cada uno es relativamente barato en algo**, y eso es cierto siempre, porque los costes de oportunidad son inversos entre sí y no pueden ser los dos mayores a la vez.",
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Vino total", "Tela total"],
          filas: [
            ["Cada país reparte sus horas al 50 %", "400", "300"],
            { celdas: ["Portugal solo tela; España cubre el resto", "450", "300"], clase: "total" },
          ],
          nota: "Con la especialización, Portugal dedica sus 100 horas a tela y produce **200**; España cubre las 100 telas que faltan con 25 horas y dedica las otras 75 a vino, obteniendo **450**. Se produce **la misma tela y 50 unidades más de vino**, sin que nadie trabaje una hora más ni aparezca ninguna tecnología nueva. Ese excedente sale exclusivamente de haber asignado cada tarea a quien la hace con menor coste de oportunidad, y es el argumento entero a favor de la división del trabajo.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el coste de oportunidad en las decisiones públicas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay un lugar donde ignorar el coste de oportunidad tiene consecuencias grandes y donde se ignora sistemáticamente: la discusión sobre el gasto público. Merece la pena ver por qué ocurre y qué disciplina impone pensarlo bien.",
            "**El punto de partida es que ningún proyecto público es gratis, ni siquiera cuando lo paga «el Estado».** Los recursos empleados en construir un hospital son recursos que no construyen un colegio, ni se quedan en manos de quien pagó los impuestos. El debate público suele plantearse como si la alternativa a hacer algo fuera no hacer nada, cuando la alternativa real es **hacer otra cosa con los mismos recursos**. Formulada así, la pregunta cambia por completo: no es si el hospital aporta valor —casi siempre lo aporta— sino si aporta más que la mejor alternativa descartada.",
            "**El coste de oportunidad de los fondos públicos es además mayor que el importe gastado.** Recaudar un euro exige un impuesto, y un impuesto distorsiona decisiones: introduce la cuña entre lo que paga el comprador y lo que recibe el vendedor que veremos con números en la ficha 1.03. Esa pérdida de eficiencia se suma al euro recaudado, de modo que **el coste social de financiar un proyecto supera a su presupuesto**. Es un argumento a favor de exigir a la inversión pública una rentabilidad social claramente superior a cero, no simplemente positiva.",
            "**Y hay un tercer coste que no aparece en ningún presupuesto: el del tiempo de la gente.** Una tramitación que obliga a un millón de personas a dedicar una hora consume un millón de horas que tenían usos alternativos. No hay factura, no hay partida contable y por tanto no hay debate, pero el recurso se ha consumido igual. Es el ejemplo más puro de coste implícito a escala social.",
            "**El coste hundido reaparece aquí con especial virulencia.** Ante una infraestructura a medio construir que ha resultado mucho menos útil de lo previsto, el argumento que siempre se oye es que ya se han invertido tantos millones que no se puede parar. Económicamente es exactamente al revés: **lo invertido no se recupera decidas lo que decidas**, y la única pregunta legítima es si terminarla aporta más de lo que cuesta terminarla. Que la respuesta sea a veces sí no cambia que la pregunta correcta es esa.",
            "**Lo que esto no resuelve, y conviene decirlo.** Comparar alternativas exige valorar cosas que no tienen precio de mercado —años de vida, tiempo, paisaje— y eso obliga a supuestos discutibles. El análisis coste-beneficio no elimina el juicio de valor: lo **hace explícito**, que es precisamente su utilidad. La frontera entre lo que la economía puede decidir y lo que no es el objeto de la ficha 1.10.",
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
            { t: "Confundir coste de oportunidad con dinero gastado", d: "El coste de oportunidad es el valor de la alternativa perdida, que puede ser mayor o menor que el desembolso, e incluso existir sin desembolso alguno. Usar un local propio no cuesta nada en la contabilidad y cuesta el alquiler que se dejó de cobrar en el análisis económico." },
            { t: "Tener en cuenta los costes hundidos", d: "Son irrecuperables por definición, así que no cambian con ninguna decisión futura. Incluirlos lleva a persistir en proyectos malos —«ya llevamos mucho invertido»— y es uno de los sesgos mejor documentados en la toma de decisiones." },
            { t: "Creer que la escasez desaparece con la riqueza", d: "Escasez significa que hay que elegir, no que se pase necesidad. Cuanto más rico se es, más caro es el tiempo y más punzante el coste de oportunidad de emplearlo en una cosa u otra. La escasez cambia de objeto, no desaparece." },
            { t: "Leer un punto interior de la frontera como un problema de reparto", d: "Un punto interior significa que se está produciendo menos de lo posible con los recursos disponibles: hay paro, capacidad ociosa o mala asignación. Es un problema de tamaño, no de reparto, y moverse hacia la frontera mejora a todos a la vez." },
            { t: "Suponer que la frontera es una recta", d: "Solo lo sería si los recursos fueran igual de aptos para cualquier uso. Como no lo son, el coste de oportunidad crece según se especializa la economía, y la frontera es cóncava. De ahí que la especialización total rara vez sea óptima dentro de un país." },
            { t: "Confundir ventaja absoluta con ventaja comparativa", d: "La absoluta compara productividades; la comparativa, costes de oportunidad. Un país puede ser mejor en todo y aun así ganar especializándose, porque no puede ser relativamente mejor en todo: los costes de oportunidad son inversos entre sí." },
            { t: "Pensar que el comercio beneficia solo al más productivo", d: "En el ejemplo, la especialización genera 50 unidades más de vino con la misma tela. Ese excedente existe con independencia de cómo se reparta, y el reparto depende del precio al que se intercambie, que es una cuestión distinta de si hay ganancia." },
            { t: "Decir que algo público es gratis porque no se paga en el punto de uso", d: "Los recursos empleados tienen usos alternativos, y financiar el gasto exige impuestos que distorsionan. El coste social de un proyecto público supera a su presupuesto; que el usuario no pague no significa que nadie lo haga." },
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
            "Casi todos los conceptos de esta ficha son invisibles para las cuentas nacionales, y entender por qué es la mejor introducción posible al bloque 10.",
          ],
          lista: [
            "El **coste de oportunidad no se registra en ninguna parte**. Las cuentas nacionales anotan transacciones efectivamente realizadas, y la alternativa no elegida no es una transacción. Por eso ningún agregado macroeconómico puede decir si los recursos de un país están bien o mal asignados: solo dice cuánto se produjo.",
            "La **frontera de posibilidades tiene un análogo empírico aproximado** en el concepto de **producto potencial** de la ficha 3.06: el nivel de producción sostenible con los recursos y la tecnología disponibles. Su diferencia con el producto observado es la **brecha de producción**, que es la traducción macroeconómica de estar en un punto interior de la frontera. Conviene saber que el producto potencial **no se observa: se estima**, con métodos que dan resultados sensiblemente distintos.",
            "Los **costes implícitos aparecen en un caso concreto y muy grande**: los **alquileres imputados** de la vivienda en propiedad. El SEC 2010 obliga a valorar el servicio que un propietario se presta a sí mismo como si se lo alquilara, precisamente porque el recurso tiene un uso alternativo con precio de mercado. Es la excepción que confirma la regla, y en España pesa varios puntos del PIB.",
            "El **trabajo doméstico y los cuidados no remunerados** quedan fuera del PIB pese a consumir una cantidad enorme de tiempo con usos alternativos evidentes. Se miden en **cuentas satélite** basadas en encuestas de empleo del tiempo, no en el agregado principal. Es una decisión de frontera, no un olvido, y la ficha 3.01 explica sus razones.",
            "Y la **ventaja comparativa** se manifiesta en la especialización productiva que describen las cuentas por ramas de actividad: qué produce un país y qué importa. La ficha 10.01 se ocupa del caso español, y la 3.10 del marco teórico del comercio.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: las cuentas nacionales miden lo que se hizo, nunca lo que se dejó de hacer. Toda la economía de esta ficha vive en el segundo terreno, y por eso ningún dato agregado la contesta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Alguien deja un empleo de 30.000 al año para montar un negocio que factura 80.000 y tiene 60.000 de gastos. ¿Gana dinero?", a: "Contablemente sí: 20.000 de beneficio. Económicamente no: hay que descontar el coste implícito de los 30.000 que dejó de ganar, con lo que el beneficio económico es de −10.000. El negocio destruye valor respecto a su mejor alternativa, aunque cualquier cuenta de resultados lo presente como rentable." },
            { q: "¿Por qué la frontera de posibilidades es cóncava y no una recta?", a: "Porque los recursos no son igual de aptos para todos los usos. Al especializarse en un bien hay que ir empleando factores cada vez peor adaptados, de modo que cada unidad adicional exige sacrificar más del otro bien. En el ejemplo, el coste de oportunidad pasa de 0,2 a 1,8 al recorrer la frontera." },
            { q: "Un país es más productivo que otro en absolutamente todos los bienes. ¿Le conviene comerciar?", a: "Sí. Lo que decide la especialización son los costes de oportunidad, no las productividades, y no pueden ser mayores en todo a la vez: son relativos entre sí. En el ejemplo, España es mejor en vino y en tela y aun así gana especializándose en vino, porque producir tela le cuesta 1,5 vinos frente a 1 en Portugal." },
            { q: "Un proyecto lleva 40 millones invertidos y terminarlo cuesta 10 más, pero solo generará un valor de 8. ¿Se termina?", a: "No. Los 40 ya gastados son coste hundido y no se recuperan se decida lo que se decida, así que no entran en el análisis. La comparación pertinente es entre los 10 que faltan y los 8 que se obtendrán, y esa comparación dice que parar es mejor, por doloroso que resulte." },
            { q: "¿Por qué el coste social de un proyecto público supera a su presupuesto?", a: "Porque los recursos empleados tienen usos alternativos y porque recaudar los fondos exige impuestos que distorsionan decisiones y generan una pérdida de eficiencia adicional. A eso se suman costes implícitos que no aparecen en ninguna partida, como el tiempo que la tramitación impone a los ciudadanos." },
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
            { ref: "Krugman y Wells, Introducción a la Economía", nota: "los primeros capítulos: escasez, coste de oportunidad y frontera, con el nivel de detalle exacto de esta ficha." },
            { ref: "Mankiw, Principios de Economía", nota: "los diez principios y el tratamiento de la ventaja comparativa; útil para fijar la intuición antes de formalizar." },
            { ref: "Robbins, Ensayo sobre la naturaleza y significación de la ciencia económica", nota: "de dónde viene la definición de la economía como ciencia de la elección bajo escasez; corto y todavía discutido." },
            { ref: "Bastiat, Lo que se ve y lo que no se ve", nota: "el argumento del coste de oportunidad aplicado a la política económica, escrito en 1850 y sin una línea sobrante." },
          ],
        },
      ],
    },
  ],
};
