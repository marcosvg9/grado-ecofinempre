/* Ficha 10.05 — Bienes públicos, imposición óptima y eficiencia. */

export default {
  codigo: "10.05",
  titulo: "Bienes públicos, imposición óptima y eficiencia",
  nivel: 3,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "Todo impuesto distorsiona, y su coste de eficiencia crece con el cuadrado del tipo: duplicarlo lo cuadruplica. De ahí sale la única regla robusta del diseño fiscal —bases anchas y tipos bajos— y la razón de que la teoría de la imposición óptima choque de frente con lo que la equidad exige.",
  requiere: "1.04 Eficiencia y excedente · 10.03 Sistema fiscal español · 2.10 Fallos de mercado",
  abre: "10.04 Gasto público y pensiones · 1.10 Economía normativa · 10.06 SEC 2010",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta de esta ficha es doble: **qué debe hacer el sector público** y **cómo debe financiarlo**. La primera se responde con la teoría de los fallos de mercado de la ficha 2.10, y la segunda con la teoría de la imposición óptima. Conviene tratarlas juntas porque el criterio que las une es el mismo: **comparar el beneficio de una intervención con su coste total**, incluido el coste de recaudar el dinero, que casi nunca se cuenta.",
            "**Un bien público puro tiene dos propiedades y ambas hacen falta.** Es **no rival** —que yo lo consuma no reduce lo que queda para ti— y **no excluible** —no se puede impedir su uso a quien no pague—. La defensa nacional, la estabilidad jurídica o la investigación básica cumplen ambas. La no rivalidad implica que **el coste marginal de un usuario adicional es cero**, y por tanto cobrar por él es ineficiente; la no exclusión implica que **nadie tiene incentivo a pagar voluntariamente**, y de ahí el problema del polizón. Juntas explican por qué el mercado los provee por debajo de lo deseable y por qué se financian con impuestos generales.",
            "**La condición de provisión óptima es de Samuelson y difiere de la de un bien privado.** Para un bien privado se iguala la disposición marginal a pagar de cada individuo con el coste marginal. Para uno público hay que **sumar las disposiciones a pagar de todos** e igualar esa suma al coste marginal, porque una unidad más beneficia a todos a la vez. La dificultad práctica es que esa suma no se observa: **nadie tiene incentivo a revelar cuánto valora un bien por el que va a pagar según lo que declare**, y ese problema de revelación de preferencias es el obstáculo real de cualquier procedimiento de decisión colectiva.",
            "**La segunda mitad de la ficha empieza con un hecho incómodo: todo impuesto distorsiona**, salvo los que gravan algo perfectamente inelástico o que corrigen una externalidad. La razón está en la ficha 1.03: el impuesto abre una cuña entre lo que paga el comprador y lo que recibe el vendedor, y algunas transacciones que habrían beneficiado a ambos dejan de producirse. Esa pérdida —el **exceso de gravamen**— **no la recauda nadie**: es riqueza que simplemente no se genera. Y su magnitud depende de las elasticidades: cuanto más fácil sea escapar del impuesto cambiando de comportamiento, mayor la pérdida.",
            "**La propiedad decisiva es que el exceso de gravamen crece con el cuadrado del tipo.** Duplicar un tipo cuadruplica la pérdida de eficiencia. De ahí se sigue la única recomendación verdaderamente robusta de toda la teoría fiscal: **es mejor recaudar lo mismo con muchos impuestos de tipo bajo sobre bases anchas que con pocos de tipo alto sobre bases estrechas**. Y de ahí también el argumento contra los beneficios fiscales que estrechan bases y obligan a subir tipos sobre el resto, que es exactamente el diagnóstico de la ficha 10.03 sobre el sistema español.",
            "**La regla de Ramsey lleva el argumento hasta el final y ahí se topa con la equidad.** Si se quiere minimizar la distorsión total para una recaudación dada, hay que gravar más los bienes de **demanda más inelástica**, porque son aquellos en los que la conducta cambia menos. La regla es que los tipos deben ser inversamente proporcionales a las elasticidades. El problema es que los bienes de demanda inelástica son típicamente **los de primera necesidad**, de modo que el diseño más eficiente es también el más regresivo. **La eficiencia y la equidad apuntan aquí en direcciones opuestas**, y ninguna teoría resuelve ese conflicto: solo lo hace explícito, que es lo que la ficha 1.10 defendía como la contribución propia del análisis económico.",
            "**Hay una familia de impuestos que escapa a todo lo anterior y merece conocerse.** Los **impuestos pigouvianos**, que gravan una actividad con costes externos, **no generan exceso de gravamen: lo eliminan**. Al obligar a quien contamina a internalizar el daño, corrigen una distorsión preexistente y mejoran la eficiencia al mismo tiempo que recaudan. Es el famoso **doble dividendo**, y explica por qué la fiscalidad ambiental ocupa un lugar tan destacado en las recomendaciones de organismos que rara vez coinciden en otras cosas. Su límite es que la base es a menudo estrecha y **se erosiona con el propio éxito del impuesto**: si nadie contamina, no se recauda.",
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
            { nom: "Bien público puro", sub: "Hacen falta las dos propiedades.", cols: ["no rival y no excluible"] },
            { nom: "Condición de Samuelson", sub: "Se suman las disposiciones a pagar.", cols: ["Σᵢ RMSᵢ = CMg"] },
            { nom: "Problema del polizón", sub: "Por eso no se financian voluntariamente.", cols: ["nadie revela su valoración real"] },
            { nom: "Exceso de gravamen", sub: "Riqueza que no se genera; no la recauda nadie.", cols: ["EG ≈ ½ · t² · (η·ε ÷ (η+ε)) · pq"] },
            { nom: "Propiedad cuadrática", sub: "La regla más robusta del diseño fiscal.", cols: ["duplicar t ⟹ cuadruplicar EG"] },
            { nom: "Coste marginal de los fondos", sub: "Un euro público cuesta más de un euro.", cols: ["CMF = 1 + dEG/dR > 1"] },
            { nom: "Regla de Ramsey", sub: "Eficiente y regresiva a la vez.", cols: ["tᵢ ∝ 1 ÷ εᵢ"] },
            { nom: "Impuesto pigouviano", sub: "Corrige en lugar de distorsionar.", cols: ["t = daño marginal externo"] },
            { nom: "Recomendación robusta", sub: "Lo único en lo que casi todos coinciden.", cols: ["bases anchas, tipos bajos"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: por qué el tipo alto sale caro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un mercado con un valor de transacciones de **1.000** y elasticidades unitarias de oferta y demanda. Aplicamos tipos crecientes y medimos dos cosas: lo que se recauda y lo que se pierde por transacciones que dejan de producirse.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Tipo", y: "Exceso" },
          dominio: { x: [0, 0.5], y: [0, 70] },
          marcasX: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
          marcasY: [0, 20, 40, 60],
          areas: [
            {
              color: "alerta",
              puntos: [[0, 0], [0.05, 0.63], [0.1, 2.5], [0.15, 5.63], [0.2, 10], [0.25, 15.63], [0.3, 22.5], [0.35, 30.62], [0.4, 40], [0.45, 50.63], [0.5, 62.5], [0.5, 0]],
            },
          ],
          series: [
            {
              nombre: "Exceso de gravamen",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [0.5, 62.5],
              puntos: [[0, 0], [0.05, 0.63], [0.1, 2.5], [0.15, 5.63], [0.2, 10], [0.25, 15.63], [0.3, 22.5], [0.35, 30.62], [0.4, 40], [0.45, 50.63], [0.5, 62.5]],
            },
          ],
          puntos: [
            { x: 0.1, y: 2.5, etiqueta: "10 % → 2,5", guias: false },
            { x: 0.2, y: 10, etiqueta: "20 % → 10", guias: false },
            { x: 0.4, y: 40, etiqueta: "40 % → 40", guias: false },
          ],
          nota: "La curva es **una parábola, no una recta**, y ahí está todo el contenido de la ficha. Al pasar del 10 % al 20 % la recaudación se duplica y la pérdida de eficiencia **se multiplica por cuatro**. Al llegar al 40 % la pérdida es dieciséis veces la del 10 %. La consecuencia de diseño es inmediata: si hay que recaudar una cantidad dada, **repartirla entre varias bases con tipos bajos cuesta mucho menos que concentrarla en una con un tipo alto**, porque la penalización es cuadrática en cada base por separado. Es el argumento técnico contra un sistema que estrecha sus bases con exenciones y compensa subiendo tipos.",
        },
        {
          tipo: "tabla",
          cabecera: ["Tipo", "Recaudación", "Exceso de gravamen", "Coste por euro recaudado"],
          filas: [
            ["5 %", "50", "0,63", "1,25 céntimos"],
            ["10 %", "100", "2,50", "2,50 céntimos"],
            ["20 %", "200", "10,00", "5,00 céntimos"],
            ["30 %", "300", "22,50", "7,50 céntimos"],
            { celdas: ["40 %", "400", "40,00", "10,00 céntimos"], clase: "total" },
          ],
          nota: "La última columna es la que hay que llevarse: **el coste social de recaudar un euro no es un euro**. Al 10 % es 1,025 €; al 40 %, 1,10 €. Ese es el **coste marginal de los fondos públicos**, y tiene una consecuencia directa sobre el gasto: un proyecto público financiado con impuestos debe rendir socialmente **más que su presupuesto**, no simplemente algo positivo. Es exactamente el argumento que la ficha 1.01 anticipaba sobre el coste de oportunidad de los fondos públicos, ahora con números.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora Ramsey, con el conflicto que genera.** Dos bienes que hay que gravar para recaudar una cantidad dada. El primero tiene una elasticidad de demanda de **0,2** —un bien de primera necesidad, del que se consume casi lo mismo suba lo que suba— y el segundo de **2,0** —un bien fácilmente sustituible—. La regla de Ramsey dice que los tipos deben ser inversamente proporcionales a esas elasticidades.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Bien", "Elasticidad", "Tipo relativo óptimo", "Interpretación"],
          filas: [
            ["Primera necesidad", "0,2", "5,0", "Se grava diez veces más"],
            ["Bien sustituible", "2,0", "0,5", "Se grava diez veces menos"],
            { celdas: ["Razón entre tipos", "—", "10 a 1", "El diseño eficiente es el más regresivo"], clase: "total" },
          ],
          nota: "El resultado es técnicamente impecable y políticamente inaceptable, y esa tensión es el contenido real del debate fiscal. **Gravar más lo inelástico minimiza la distorsión precisamente porque la gente no puede evitarlo**, y lo inelástico suele ser lo básico. La teoría no dice que haya que hacerlo: dice **cuánto cuesta en eficiencia no hacerlo**, que es una información distinta y valiosa. Quien decide gravar menos los alimentos por razones distributivas está eligiendo pagar ese coste, y lo sensato es saber cuánto es. Además, la ficha 10.03 muestra que hay instrumentos mejores para el mismo fin: **una transferencia directa protege al hogar vulnerable sin distorsionar el precio relativo de nada**.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué debería gravar más España y qué menos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los organismos que analizan el sistema fiscal español —Banco de España, AIReF, OCDE, Comisión Europea— coinciden en un diagnóstico con una unanimidad poco frecuente, y la teoría de esta ficha explica por qué. Conviene recorrerlo entendiendo el argumento en lugar de aceptarlo por autoridad.",
            "**La primera recomendación es desplazar carga desde el trabajo hacia el consumo y la propiedad.** El razonamiento es de elasticidades: la oferta de trabajo en el margen —horas, participación, formalidad— responde a la cuña fiscal, mientras que **el suelo no puede escapar a ninguna parte** y el consumo tiene una base más ancha y difícil de eludir. Como España se apoya relativamente más en cotizaciones que sus vecinos, tiene margen para el intercambio. La objeción distributiva es seria y tiene respuesta: el desplazamiento se puede compensar con transferencias, que es lo que la ficha 10.03 ya señalaba como el instrumento correcto.",
            "**La segunda es ampliar bases antes que subir tipos**, y sale directamente de la propiedad cuadrática. Cada exención obliga a recaudar lo mismo con un tipo más alto sobre una base más estrecha, y el coste de eficiencia crece con el cuadrado. El caso más cuantificado es el de los **tipos reducidos de IVA**, que en España abarcan una proporción del consumo mayor que en la media europea. Suprimirlos y devolver la recaudación mediante transferencias a los hogares de renta baja **recaudaría más, distorsionaría menos y redistribuiría mejor**, y aun así es políticamente casi imposible, lo que dice algo sobre la relación entre análisis y decisión.",
            "**La tercera es la fiscalidad ambiental**, donde España recauda por debajo de la media europea. El argumento es el del doble dividendo: estos impuestos **corrigen una distorsión en lugar de crearla**, así que su coste de eficiencia es negativo antes incluso de contar lo recaudado. Sus dos límites son reales: la base se erosiona si el impuesto funciona, y **el impacto distributivo es regresivo** —la energía y el transporte pesan más en los presupuestos modestos— lo que exige compensaciones diseñadas de antemano si no se quiere que la medida fracase políticamente.",
            "**La cuarta es la imposición sobre la propiedad inmobiliaria**, que es la recomendación con mejor fundamento teórico y peor acogida. Un impuesto sobre el valor del suelo es prácticamente **el único impuesto sin exceso de gravamen**, porque la oferta de suelo es perfectamente inelástica: el propietario no puede producir menos suelo en respuesta. En España el impuesto existe pero descansa sobre valores catastrales frecuentemente desactualizados, lo que introduce arbitrariedad entre contribuyentes sin ganar eficiencia. Actualizarlos es técnicamente sencillo y políticamente costoso, la combinación habitual.",
            "**Lo que este análisis no decide.** El nivel de gasto público deseable es una elección social sobre qué debe hacerse colectivamente, y la teoría de la imposición óptima no la contesta: **toma la recaudación necesaria como dada y solo dice cómo obtenerla al mínimo coste**. Tampoco decide la ponderación entre eficiencia y equidad, que es una cuestión de valores en el sentido de la ficha 1.10. Lo que sí aporta, y no es poco, es el **precio de cada opción**: cuánta eficiencia cuesta cada decisión distributiva, y qué instrumentos alcanzan un mismo objetivo con menos daño. Con eso, la discusión política deja de ser sobre hechos y pasa a ser sobre lo que debe ser, que es donde corresponde tenerla.",
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
            { t: "Creer que el coste de un impuesto es lo que recauda", d: "A lo recaudado hay que sumar el exceso de gravamen, que es riqueza que no se genera y que no recibe nadie. Al 40 % de tipo, cada euro recaudado cuesta a la sociedad 1,10 €. Ese coste marginal de los fondos es el que obliga a exigir a un proyecto público una rentabilidad social superior a su presupuesto." },
            { t: "Pensar que el exceso de gravamen crece proporcionalmente al tipo", d: "Crece con el cuadrado: duplicar el tipo lo cuadruplica. De ahí la única regla robusta del diseño fiscal, bases anchas y tipos bajos, y el argumento técnico contra un sistema que se llena de exenciones y compensa subiendo tipos sobre lo que queda." },
            { t: "Aplicar la regla de Ramsey sin considerar la equidad", d: "Gravar más lo inelástico minimiza la distorsión precisamente porque la gente no puede evitarlo, y lo inelástico suele ser lo básico. El diseño más eficiente es el más regresivo. La teoría no dice que haya que aplicarlo: dice cuánto cuesta no hacerlo, que es una información distinta." },
            { t: "Llamar bien público a cualquier cosa que provee el Estado", d: "Un bien público puro es no rival y no excluible. La sanidad y la educación son rivales y excluibles: se financian públicamente por razones de equidad, externalidades y fallos de los mercados de seguros, no porque sean bienes públicos. Confundirlo debilita el argumento a favor de proveerlas." },
            { t: "Olvidar que los impuestos pigouvianos son distintos", d: "No generan exceso de gravamen: lo eliminan, porque corrigen una externalidad preexistente. Recaudan y mejoran la eficiencia a la vez. Meterlos en el mismo saco que el resto e invocar contra ellos el argumento de la distorsión es aplicar la teoría al revés." },
            { t: "Descartar la fiscalidad ambiental por regresiva sin más", d: "Es cierto que la energía y el transporte pesan más en los presupuestos modestos, pero el problema tiene solución conocida: devolver la recaudación mediante transferencias. Renunciar al impuesto pierde el dividendo de eficiencia; compensar su efecto distributivo es un ejercicio de diseño perfectamente factible." },
            { t: "Suponer que la teoría fiscal decide el tamaño del sector público", d: "La imposición óptima toma la recaudación necesaria como dada y solo dice cómo obtenerla al mínimo coste. Cuánto debe gastar el Estado es una elección social sobre qué se hace colectivamente, y ninguna fórmula la contesta. Confundir ambas cosas convierte un argumento técnico en una posición ideológica encubierta." },
            { t: "Ignorar el problema de revelación de preferencias", d: "La condición de Samuelson exige sumar las disposiciones a pagar de todos, y nadie tiene incentivo a declararlas si va a pagar según lo que diga. Es el obstáculo real de cualquier procedimiento de decisión colectiva, y explica por qué el análisis coste-beneficio de bienes públicos depende tanto de supuestos discutibles." },
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
            "El sistema de cuentas registra impuestos y gasto público con criterios propios, y algunos de ellos afectan directamente a lo que puede afirmarse con sus cifras.",
          ],
          lista: [
            "El **exceso de gravamen no aparece en ninguna cuenta**, y no puede aparecer: es producción que no se realiza, y la contabilidad nacional registra transacciones efectivamente ocurridas. Es el caso más puro del aviso de la ficha 1.01 —las cuentas miden lo que se hizo, no lo que se dejó de hacer— y explica por qué el coste real de un sistema fiscal siempre supera a lo que muestran los datos.",
            "El **consumo público** se valora en las cuentas **por sus costes de producción**, principalmente salarios, porque no tiene precio de mercado. Eso significa que un aumento salarial en el sector público eleva mecánicamente el PIB medido sin que se produzca más, y que **la productividad del sector público es, por construcción, casi constante**. Es una convención necesaria y muy consecuente.",
            "La **formación bruta de capital de las administraciones** se registra como inversión, pero el SEC no capitaliza el gasto en educación pese a que económicamente construye capital humano. Es una frontera convencional que hace parecer consumo lo que en buena parte es inversión, con el efecto sobre la percepción del gasto educativo que cabe imaginar.",
            "Los **impuestos pigouvianos** se registran como cualquier otro impuesto sobre productos, sin distinción alguna de su función correctora. Nada en las cuentas permite separar lo recaudado que corrige una externalidad de lo recaudado que distorsiona, aunque su efecto económico sea de signo opuesto.",
            "Y las **cuentas de las administraciones públicas** de la ficha 10.06 permiten seguir todo esto por función —sanidad, educación, protección social— mediante la clasificación COFOG, que es la fuente correcta para comparar el gasto español por finalidades con el de otros países en lugar de discutir sobre totales.",
          ],
          cierre:
            "Lo que conviene retener es que **las cuentas nacionales miden el tamaño del sector público, no su eficiencia**. Ni el exceso de gravamen ni el valor social del gasto aparecen en ellas. Cualquier juicio sobre si un sistema fiscal está bien diseñado exige el análisis de esta ficha, no la lectura de un cociente sobre PIB.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Al pasar del 10 % al 20 % la recaudación se duplica. ¿Y la pérdida de eficiencia?", a: "Se multiplica por cuatro, de 2,50 a 10,00, porque el exceso de gravamen crece con el cuadrado del tipo. Esa propiedad cuadrática es el fundamento de la recomendación de bases anchas y tipos bajos: recaudar lo mismo repartido entre varias bases cuesta mucho menos que concentrarlo en una." },
            { q: "¿Cuánto cuesta socialmente recaudar un euro?", a: "Más de un euro. Al 10 % de tipo cuesta 1,025 € y al 40 %, 1,10 €, sumando el exceso de gravamen a lo recaudado. La consecuencia práctica es que un proyecto público debe rendir socialmente más que su presupuesto, no simplemente algo positivo, que es el argumento anticipado en la ficha 1.01." },
            { q: "¿Por qué la regla de Ramsey resulta políticamente inaceptable?", a: "Porque manda gravar más los bienes de demanda inelástica, que son típicamente los de primera necesidad: con elasticidades de 0,2 y 2,0, el tipo óptimo del primero es diez veces el del segundo. El diseño más eficiente es el más regresivo. La teoría no obliga a aplicarlo; informa de cuánta eficiencia cuesta no hacerlo." },
            { q: "¿Son la sanidad y la educación bienes públicos?", a: "No en sentido técnico: son rivales —una plaza ocupada no está disponible— y excluibles. Se financian públicamente por equidad, por externalidades y por fallos de los mercados de seguros, que son razones sólidas y distintas. Llamarlas bienes públicos confunde el argumento y lo debilita frente a quien conoce la definición." },
            { q: "¿Por qué un impuesto sobre el valor del suelo casi no distorsiona?", a: "Porque la oferta de suelo es perfectamente inelástica: el propietario no puede producir menos suelo en respuesta al impuesto, así que no hay transacciones que dejen de realizarse. Es prácticamente el único impuesto sin exceso de gravamen, y por eso figura en casi todas las recomendaciones técnicas y en casi ningún programa electoral." },
            { q: "¿Qué decide y qué no decide la teoría de la imposición óptima?", a: "Decide cómo recaudar una cantidad dada al mínimo coste de eficiencia. No decide cuánto debe recaudarse, que es una elección social sobre qué se hace colectivamente, ni cómo ponderar eficiencia frente a equidad, que es una cuestión de valores. Lo que aporta es el precio de cada opción distributiva, que es información y no una prescripción." },
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
            { ref: "Stiglitz y Rosengard, La economía del sector público", nota: "bienes públicos, exceso de gravamen e imposición óptima con el nivel exacto de esta ficha." },
            { ref: "Mirrlees Review, Tax by Design", nota: "el análisis más completo sobre diseño fiscal; el capítulo del impuesto sobre el suelo y el de IVA son los más útiles aquí." },
            { ref: "Samuelson, «The Pure Theory of Public Expenditure», 1954", nota: "tres páginas que definieron el concepto de bien público y su condición de provisión óptima." },
            { ref: "Ramsey, «A Contribution to the Theory of Taxation», 1927", nota: "el origen de la regla inversa de las elasticidades; conviene leerlo sabiendo lo que la regla deja fuera." },
            { ref: "OCDE, Tax Policy Reform and Economic Growth", nota: "la jerarquía empírica de qué impuestos dañan más el crecimiento; la base de las recomendaciones que se comentan en el caso práctico." },
          ],
        },
      ],
    },
  ],
};
