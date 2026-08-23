/* Ficha 2.08 — Oligopolio y teoria de juegos. */

export default {
  codigo: "2.08",
  titulo: "Oligopolio y teoría de juegos",
  nivel: 3,
  bloque: "Microeconomía",
  tiempo: "5 h",
  nucleo:
    "Cuando tu óptimo depende de lo que haga el otro, el equilibrio deja de ser un punto de tangencia y pasa a ser una predicción sobre conducta mutua. Cournot y Bertrand parten de los mismos datos y predicen resultados opuestos: lo que decide cuál se aplica es qué variable elige realmente la empresa.",
  requiere: "2.07 Monopolio · 2.06 Competencia perfecta",
  abre: "9.02 Estructura competitiva · 9.04 Estrategias corporativas · 2.10 Fallos de mercado",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El oligopolio es el terreno intermedio entre las dos fichas anteriores, y su rasgo definitorio no es que haya pocas empresas sino la **interdependencia estratégica**: el beneficio de cada una depende de lo que hagan las demás, y todas lo saben. En competencia perfecta la empresa solo mira el precio de mercado; en monopolio solo mira su demanda. Aquí, **cada empresa tiene que formarse una conjetura sobre la conducta ajena antes de decidir la propia**, y esa circularidad es la que exige un instrumental distinto.",
            "Ese instrumental es la teoría de juegos, y su concepto central es el **equilibrio de Nash**: una combinación de estrategias en la que ninguna empresa gana desviándose **dado lo que hacen las demás**. Conviene subrayar las dos partes de la definición. Es un concepto de **estabilidad**, no de optimalidad: un equilibrio de Nash puede ser pésimo para todos los participantes, y el dilema del prisionero existe precisamente para recordarlo. Y es **condicional**: nadie mejora desviándose unilateralmente, lo que no impide que todos mejoraran moviéndose a la vez.",
            "El primer modelo clásico es el de **Cournot**, donde la variable de decisión es la **cantidad** y las empresas deciden a la vez. Cada una elige su producción tomando como dada la de la rival, lo que genera una **función de reacción**: cuanto más produce la otra, menos conviene producir. El equilibrio es el cruce de las funciones de reacción. Su propiedad más útil es la comparación estática: al aumentar el número de empresas, la cantidad total crece y el precio baja de forma **continua y monótona desde el monopolio hasta la competencia perfecta**. El oligopolio deja de ser una categoría aparte y se convierte en un tramo del recorrido.",
            "El segundo es el de **Bertrand**, idéntico en todo salvo en que la variable de decisión es el **precio**. Y el resultado es demoledor: con producto homogéneo, costes iguales y capacidad ilimitada, quien cobre un céntimo menos se lleva todo el mercado, de modo que la competencia empuja el precio hasta el coste marginal y **bastan dos empresas para replicar el resultado competitivo**. Que dos modelos con los mismos datos predigan 46,67 y 20 no es un defecto de la teoría: es su aportación. Nos dice que **la pregunta empírica relevante es qué compromete realmente la empresa**. Si lo que se fija con antelación y resulta costoso de cambiar es la capacidad instalada, el mundo se parece a Cournot; si lo que se compromete es la tarifa y se puede servir cualquier demanda, se parece a Bertrand.",
            "La paradoja de Bertrand se disuelve además por tres vías que son, ellas mismas, la descripción de casi cualquier sector real. La **diferenciación de producto** hace que bajar un céntimo no capture todo el mercado, y devuelve margen. Las **restricciones de capacidad** impiden atender a toda la demanda aunque se sea el más barato, y el resultado converge hacia Cournot. Y los **costes de cambio** del comprador rompen la sustituibilidad instantánea. La conclusión práctica es que **el margen de una empresa mide, más que ninguna otra cosa, la fricción que la separa del modelo de Bertrand**.",
            "Queda la **colusión**, que es donde el análisis se vuelve más útil. Las empresas obtienen conjuntamente el máximo si se reparten la producción de monopolio, pero ese reparto **no es un equilibrio de Nash**: a cada una le conviene individualmente producir más de lo pactado. La estructura es exactamente la del dilema del prisionero, y explica por qué los acuerdos se firman y se incumplen. La salida es la **repetición**: si el juego se repite indefinidamente y las empresas valoran lo suficiente el futuro, la amenaza creíble de castigar la desviación puede sostener el acuerdo. De ahí sale el resultado que gobierna la política de competencia: **la colusión es más fácil cuanto más se repite la interacción, más transparente es el mercado y más pacientes son las empresas**, y por eso las autoridades atacan precisamente la transparencia entre competidores y la estabilidad de las expectativas.",
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
            { nom: "Equilibrio de Nash", sub: "Estabilidad frente a desviaciones unilaterales, no optimalidad.", cols: ["s*_i óptima frente a s*_{−i}, para todo i"] },
            { nom: "Función de reacción de Cournot", sub: "Con demanda P = a − bQ y coste marginal c.", cols: ["q_i = (a − c − b·q_j) / (2b)"] },
            { nom: "Cournot simétrico con n empresas", sub: "Cantidad total; n = 1 da el monopolio.", cols: ["Q = n(a − c) / [b(n + 1)]"] },
            { nom: "Precio de Cournot", sub: "Tiende a c cuando n crece.", cols: ["P = (a + n·c) / (n + 1)"] },
            { nom: "Margen y concentración", sub: "El puente entre el índice de Lerner y el HHI.", cols: ["L medio = HHI / |ε|"] },
            { nom: "Bertrand con producto homogéneo", sub: "Dos empresas bastan para el resultado competitivo.", cols: ["P = CMg, beneficio nulo"] },
            { nom: "Stackelberg", sub: "Quien mueve primero se compromete y gana.", cols: ["q_líder = (a − c) / (2b)"] },
            { nom: "Ganancia de la colusión", sub: "Repartirse la producción de monopolio.", cols: ["q_i = Q_monopolio / n"] },
            { nom: "Sostenibilidad de la colusión", sub: "Con estrategia de castigo permanente.", cols: ["B_col /(1−δ) ≥ B_desv + δ·B_castigo /(1−δ)"] },
            { nom: "Factor de descuento", sub: "Mide paciencia y también probabilidad de seguir jugando.", cols: ["δ = (1 − p) / (1 + r)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo mercado con dos, tres y muchas empresas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seguimos con el mercado de la ficha anterior: demanda **P = 100 − Q** y coste marginal constante de **20**. Sabemos ya dos puntos de referencia: el monopolio produce 40 y cobra 60; la competencia perfecta produce 80 y cobra 20. Veamos qué hay en medio.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Cantidad de A", y: "Cantidad de B" },
          dominio: { x: [0, 45], y: [0, 45] },
          marcasX: [0, 10, 20, 30, 40],
          marcasY: [0, 10, 20, 30, 40],
          series: [
            {
              nombre: "Reacción de A",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [40, 0],
              puntos: [[0, 40], [40, 0]],
            },
            {
              nombre: "Reacción de B",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [0, 40],
              puntos: [[40, 0], [0, 40]],
            },
          ],
          puntos: [
            { x: 26.67, y: 26.67, etiqueta: "Cournot", guias: true },
            { x: 20, y: 20, etiqueta: "cártel", guias: false },
            { x: 40, y: 20, etiqueta: "Stackelberg", guias: false },
          ],
          nota: "Cada recta responde a una pregunta: **dada la producción del rival, ¿cuánto me conviene producir a mí?** La de A parte de 40 —lo que produciría si B no existiera, es decir, el monopolio— y desciende hasta cero cuando B produce 40. Se cruzan en **26,67 cada una**, y ese punto es el equilibrio de Nash: **ninguna quiere moverse dado lo que hace la otra**. El punto del cártel, 20 y 20, está más abajo a la izquierda y **da más beneficio a ambas**, y sin embargo no es un equilibrio: desde ahí, cada una tiene incentivo a desplazarse hacia su propia recta de reacción, que es exactamente lo que dice la matriz de pagos. Y el punto de Stackelberg muestra la ventaja de mover primero: **A se sitúa en 40 sabiendo que B responderá con 20**, y le compensa aunque su recta de reacción diría otra cosa.",
        },
        {
          tipo: "tabla",
          cabecera: ["Estructura", "Cantidad total", "Precio", "Beneficio por empresa", "Índice de Lerner"],
          filas: [
            ["Monopolio (n = 1)", "40,0", "60,00", "1.600", "0,667"],
            ["Cournot con 2 empresas", "53,3", "46,67", "711", "0,571"],
            ["Cournot con 3 empresas", "60,0", "40,00", "400", "0,500"],
            ["Cournot con 5 empresas", "66,7", "33,33", "178", "0,400"],
            ["Cournot con 10 empresas", "72,7", "27,27", "53", "0,267"],
            { celdas: ["Bertrand (2 empresas) o competencia", "80,0", "20,00", "0", "0,000"], clase: "total" },
          ],
          nota: "Las cinco primeras filas son un **recorrido continuo**: el poder de mercado se disuelve gradualmente al entrar empresas, y con diez el margen ya se ha reducido a menos de la mitad del de monopolio. La última fila es la que descoloca: **con solo dos empresas, si compiten en precio en vez de en cantidad, el resultado es el competitivo**. Mismos datos, misma demanda, mismos costes; lo único que cambia es la variable de decisión. Compruébese además que el Lerner de la fila de Cournot con 2 empresas, 0,571, coincide con HHI dividido por la elasticidad: 0,5 / 0,875.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El movimiento secuencial cambia el reparto.** Si una de las dos empresas decide primero y la otra observa antes de responder —el caso de Stackelberg—, la líder produce **40** y la seguidora **20**. El total sube a 60 y el precio baja a 40, con beneficios de **800** para la primera y **400** para la segunda. La líder gana más que en Cournot, la seguidora menos, y **el total del sector cae de 1.422 a 1.200**. Comprometerse antes es una ventaja individual que empeora el resultado conjunto.",
            "**Ahora el cártel.** Si las dos empresas se reparten la producción de monopolio, 20 unidades cada una, el precio es 60 y cada una gana **800**, bastante más que los 711 de Cournot. El problema es que el acuerdo no se sostiene solo. Restringiendo cada empresa a dos estrategias —cumplir el reparto o producir la cantidad de Cournot— la matriz de pagos es esta:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "B cumple (20)", "B produce Cournot (26,7)"],
          filas: [
            ["A cumple (20)", "800 · 800", "667 · 889"],
            { celdas: ["A produce Cournot (26,7)", "889 · 667", "711 · 711"], clase: "total" },
          ],
          nota: "El único equilibrio de Nash es la casilla destacada, con **711 para cada una**, aunque ambas preferirían los 800 de la casilla superior izquierda. Es un dilema del prisionero exacto. Y la tentación real es todavía mayor que la que muestra la matriz: la **mejor** respuesta frente a una rival que cumple no es producir la cantidad de Cournot sino **30 unidades**, lo que hundiría el precio a 50 y daría al desviador **900** frente a los 600 de quien cumplió.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y aquí entra la repetición.** Supongamos que las empresas interactúan indefinidamente y que cada una anuncia que, si detecta una desviación, producirá la cantidad de Cournot para siempre. Cumplir el acuerdo rinde 800 cada período; desviarse rinde 900 una vez y 711 para siempre después. Comparando ambos flujos, la colusión se sostiene si el factor de descuento **δ ≥ 0,53**.",
            "**Ese número dice más de lo que parece.** El factor de descuento no mide solo el tipo de interés: incorpora también **la probabilidad de que la relación continúe**. Un sector donde las empresas esperan seguir coincidiendo durante décadas tiene un δ alto y colude con facilidad; uno con entrada y salida frecuente, o donde una empresa prevé vender el negocio, tiene un δ bajo y el acuerdo se rompe solo. Y como la condición exige **detectar** la desviación, todo lo que haga el mercado más opaco —descuentos secretos, contratos personalizados, pedidos grandes e infrecuentes— dificulta la colusión. De ahí que las autoridades de competencia vigilen los intercambios de información entre competidores incluso cuando no hay ningún acuerdo de precios: **la transparencia entre rivales es el insumo que la colusión necesita**.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué funciona el programa de clemencia",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La política de competencia moderna incorpora un instrumento que es, literalmente, un dilema del prisionero construido a propósito: el **programa de clemencia**. La primera empresa de un cártel que lo denuncia y aporta pruebas queda exenta de multa; las siguientes obtienen reducciones decrecientes; las que callan pagan íntegro. Merece la pena ver por qué esto es tan eficaz.",
            "**Lo que hace es cambiar los pagos del juego, no apelar a la conciencia.** Antes de la clemencia, el cártel se sostenía si δ era suficientemente alto: el flujo de beneficios futuros compensaba la tentación de desviarse. La clemencia introduce una **segunda desviación posible**, distinta de producir de más: delatar. Y la construye de modo que sea rentable en cuanto una empresa sospeche que otra podría hacerlo primero.",
            "**Ahí está la clave, y es puro razonamiento estratégico.** No hace falta que ninguna empresa quiera delatar. Basta con que cada una **tema que otra lo haga**, porque el premio es solo para la primera. La estructura convierte una situación de confianza mutua en una carrera, y como todos los miembros del cártel razonan igual, la mera existencia del programa desestabiliza el acuerdo **aunque nadie lo use**. Es un cambio en el equilibrio, no en la moral de los participantes.",
            "**Refuerza además el otro flanco.** Un cártel necesita detectar y castigar desviaciones, y para eso necesita comunicación e intercambio de información. Pero cada contacto entre competidores genera rastro documental, y ese rastro es exactamente la prueba que el delator entregará. **Los mecanismos que hacen sostenible el cártel son los que lo hacen condenable**, y esa tensión no tiene solución para sus miembros.",
            "**Qué mirar para juzgar si un sector es propenso a la colusión**, con la lista que sale de la condición de sostenibilidad de esta ficha: pocas empresas y estables, producto homogéneo, transacciones frecuentes y pequeñas —que hacen la desviación poco rentable y la detección rápida—, precios observables, demanda estable y barreras de entrada. Cuando se cumplen varias a la vez, el δ efectivo es alto y el acuerdo se sostiene sin necesidad siquiera de reunirse.",
            "**Y el matiz que evita el diagnóstico automático.** Precios paralelos no son prueba de cártel: en un mercado de producto homogéneo con costes comunes, que todos suban el precio a la vez cuando sube un insumo es exactamente lo que predice la competencia. La distinción entre **paralelismo consciente** —legal— y **acuerdo colusorio** —ilegal— es una de las fronteras más difíciles del derecho de la competencia, y se resuelve buscando evidencia de comunicación, no de coincidencia.",
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
            { t: "Creer que el equilibrio de Nash es el mejor resultado posible", d: "Es un concepto de estabilidad, no de eficiencia. En el dilema del prisionero el equilibrio es peor para ambos jugadores que la casilla de cooperación. Que nadie gane desviándose unilateralmente no implica que no existan resultados mejores para todos." },
            { t: "Pensar que Cournot y Bertrand se contradicen", d: "Modelizan compromisos distintos. Cournot describe mercados donde lo que se fija con antelación es la capacidad; Bertrand, donde se fija el precio y se puede servir cualquier demanda. La pregunta correcta ante un sector real es cuál de las dos variables es costosa de cambiar." },
            { t: "Deducir el poder de mercado del número de empresas", d: "Dos empresas compitiendo en precio con producto homogéneo dan el resultado competitivo, y diez con capacidad restringida pueden sostener márgenes altos. El número importa dentro de un modelo concreto, no por sí solo." },
            { t: "Confundir concentración con falta de competencia", d: "El HHI es un indicio útil, pero la relación con el margen pasa por la elasticidad de la demanda y por las barreras de entrada. Un sector concentrado con entrada libre se comporta de forma competitiva, como mostraba la fase 3 de la ficha 2.06." },
            { t: "Suponer que un cártel se sostiene porque el acuerdo conviene a todos", d: "Conviene colectivamente y no conviene individualmente: esa es la definición del problema. Lo que lo sostiene no es el interés común sino la amenaza creíble de castigo futuro, y por eso depende del factor de descuento y de la capacidad de detectar desviaciones." },
            { t: "Interpretar el factor de descuento como un simple tipo de interés", d: "Incorpora también la probabilidad de que la interacción continúe. Una empresa que prevé salir del sector, vender el negocio o afrontar la entrada de un competidor disruptivo tiene un δ bajo aunque los tipos sean cero, y ninguna promesa de castigo futuro la disuade." },
            { t: "Tomar los precios paralelos como prueba de acuerdo", d: "Con producto homogéneo y costes comunes, el movimiento simultáneo de precios es lo que predice la competencia, no lo contrario. Acreditar colusión exige evidencia de comunicación o de conductas que solo tengan sentido bajo acuerdo, no de coincidencia en el resultado." },
            { t: "Creer que mover primero siempre es una ventaja", d: "Lo es en Stackelberg porque la cantidad es un compromiso irreversible que altera la respuesta del rival. En un juego de precios, anunciar primero puede ser una desventaja, porque permite al otro situarse justo por debajo. La ventaja del primer movimiento depende de si el compromiso es creíble y de qué variable se compromete." },
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
            "La estructura competitiva no es un objeto de las cuentas nacionales, pero deja rastros en la estadística estructural que las acompaña y en un debate agregado de primer orden.",
          ],
          lista: [
            "Los índices de concentración como el **HHI** no salen de las cuentas nacionales sino de registros de empresas: el **DIRCE** del INE proporciona la distribución de empresas por rama y tamaño, y la estadística estructural de empresas permite aproximar cuotas. Las cuentas nacionales agregan por rama de actividad y **pierden por construcción la distribución entre empresas**, que es justamente lo que mide la concentración.",
            "El **margen agregado** —la distancia entre precio y coste marginal en el conjunto de la economía— se estima combinando microdatos de empresas con supuestos sobre la función de costes. No es un dato observado: es el resultado de un modelo, y las estimaciones disponibles difieren bastante según los supuestos que se adopten.",
            "Ese margen conecta con un debate agregado importante: la **evolución de la participación de las rentas del trabajo** en el valor añadido, que se obtiene directamente de la cuenta de generación de renta comparando la remuneración de asalariados (D.1) con el valor añadido bruto. Una de las hipótesis que se manejan para explicar su descenso en varias economías avanzadas es el aumento del poder de mercado; hay otras —cambio tecnológico, globalización, composición sectorial— y el debate no está cerrado. La ficha 2.09 vuelve sobre ello.",
            "La **renta mixta** (B.3) de los autónomos complica esa lectura, porque mezcla retribución del trabajo y del capital en una sola partida sin criterio observable para separarlas. En economías con mucho trabajo por cuenta propia, como la española, la participación medida del trabajo depende del supuesto que se use para imputarla.",
            "Y el **deflactor de cada rama** frente a su coste laboral unitario de la ficha 10.09 es la aproximación habitual para ver si los precios de un sector se mueven por costes o por márgenes, con la advertencia de que ambas cosas pueden ocurrir a la vez.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: preguntar a las cuentas nacionales por la concentración de un sector no tiene respuesta, porque agregan precisamente la dimensión —la distribución entre empresas— en la que vive el fenómeno.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el equilibrio de Nash de un duopolio de Cournot es peor para las empresas que el acuerdo colusorio?", a: "Porque cada una, al decidir su cantidad, solo tiene en cuenta el efecto de esa producción adicional sobre su propio ingreso e ignora la caída de precio que impone a la rival. Esa externalidad entre competidores hace que la producción conjunta supere la de monopolio y el beneficio total sea menor. Es un dilema del prisionero." },
            { q: "Mismo mercado, mismos costes, dos empresas. ¿Por qué Cournot predice un precio de 46,67 y Bertrand de 20?", a: "Porque suponen compromisos distintos. En Cournot cada empresa fija una cantidad y el precio se ajusta; desviarse solo capta una parte del mercado. En Bertrand fija un precio y puede servir toda la demanda, de modo que rebajar un céntimo se lleva el mercado entero y la competencia arrastra el precio hasta el coste marginal. La variable comprometida lo decide todo." },
            { q: "En el ejemplo, un cártel se sostiene si δ ≥ 0,53. ¿Qué significa exactamente ese número?", a: "Que las empresas deben valorar el futuro al menos con ese peso relativo para que el flujo de beneficios colusorios compense la ganancia inmediata de desviarse. Incorpora el tipo de interés y la probabilidad de que la interacción continúe, así que un sector con salidas frecuentes o vidas cortas no sostiene la colusión aunque los tipos sean nulos." },
            { q: "¿Por qué un programa de clemencia desestabiliza un cártel aunque ninguna empresa lo utilice?", a: "Porque el premio es solo para el primero que denuncia. Basta con que cada miembro tema que otro se adelante para que delatar se vuelva atractivo, y como todos razonan igual, la confianza mutua que sostenía el acuerdo desaparece. Es un cambio en la estructura de pagos, no en las preferencias de nadie." },
            { q: "Los precios de cuatro gasolineras de una ciudad se mueven casi a la vez. ¿Es prueba de cártel?", a: "No por sí solo. Con producto homogéneo, costes comunes y precios observables, el movimiento simultáneo es lo que predice también la competencia. Acreditar colusión requiere evidencia de comunicación entre competidores o de conductas que solo tengan sentido bajo un acuerdo, y esa frontera entre paralelismo consciente y acuerdo es de las más difíciles del derecho de la competencia." },
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
            { ref: "Gibbons, Un primer curso de teoría de juegos", nota: "la introducción más legible al equilibrio de Nash y a los juegos repetidos, con Cournot y Bertrand resueltos paso a paso." },
            { ref: "Tirole, La teoría de la organización industrial", nota: "el tratamiento canónico del oligopolio: capacidad, diferenciación y la reconciliación entre Cournot y Bertrand." },
            { ref: "Varian, Microeconomía intermedia", nota: "los capítulos de oligopolio y teoría de juegos, para fijar la intuición antes de entrar en Gibbons." },
            { ref: "CNMC, resoluciones sancionadoras de cárteles y programa de clemencia", nota: "casos españoles documentados; permite contrastar la lista de factores que favorecen la colusión con sectores reales." },
          ],
        },
      ],
    },
  ],
};
