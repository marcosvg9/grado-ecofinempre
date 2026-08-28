/* Ficha 4.01 — Álgebra lineal y optimización aplicadas a la economía. */

export default {
  codigo: "4.01",
  titulo: "Álgebra lineal y optimización aplicadas a la economía",
  nivel: 2,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "4 h",
  nucleo:
    "Casi todo modelo económico dice lo mismo: alguien maximiza algo sujeto a una restricción. La condición de primer orden traduce esa frase a una ecuación, y el multiplicador de Lagrange —el número que suele descartarse como intermedio de cálculo— es en realidad el precio de la restricción.",
  requiere: "1.05 Pensamiento marginal · 2.01 Preferencias y restricción presupuestaria",
  abre: "4.05 Regresión por MCO · 2.02 Elección del consumidor · 2.05 Costes · 10.07 Producción, VAB y PIB",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El aparato matemático de la economía es mucho más pequeño de lo que parece desde fuera. Casi todo se reduce a **dos herramientas**: resolver sistemas lineales, que es álgebra matricial, y **optimizar una función sujeta a restricciones**, que es cálculo diferencial con un añadido. Si se entienden bien esas dos, el resto de la carrera es aplicarlas a contextos distintos. Y conviene verlas juntas desde el principio, porque el vínculo entre ambas —la comparación de estáticas de un modelo se hace resolviendo un sistema lineal— es lo que da a la teoría económica su capacidad de predecir en qué dirección se mueven las cosas.",
            "**Empecemos por la optimización sin restricciones**, que es el caso fácil. Si una función *f* de una variable tiene un máximo interior, su derivada se anula ahí: es la **condición de primer orden**, y económicamente dice que en el óptimo el beneficio marginal de moverse un poco es cero. Con varias variables, lo que se anula es el **gradiente**, el vector de todas las derivadas parciales. La primera derivada localiza los candidatos; la **segunda** decide si son máximos o mínimos, y es donde aparece la **concavidad**. Una función cóncava tiene la propiedad decisiva de que **cualquier punto crítico es un máximo global**, no solo local. Por eso la economía supone concavidad tan a menudo: no es realismo, es lo que permite hablar de *el* óptimo en singular.",
            "**El caso interesante es el restringido**, porque en economía las restricciones son el objeto de estudio: hay una renta, una tecnología, un tiempo disponible. El método de **Lagrange** consiste en construir la función auxiliar *L = f(x) + $\\lambda$·[restricción]* y anular sus derivadas parciales, incluida la de $\\lambda$, que devuelve la propia restricción. Lo que sale de ahí tiene siempre la misma forma: **el cociente de las derivadas parciales del objetivo iguala al cociente de los coeficientes de la restricción**. En el consumidor eso es que la relación marginal de sustitución iguala al cociente de precios; en la empresa, que la relación técnica de sustitución iguala al cociente de precios de los factores; en el reparto intertemporal, que la tasa marginal de sustitución temporal iguala a uno más el tipo de interés. **Es el mismo teorema tres veces**, y verlo así ahorra medio manual.",
            "**Y ahora lo que suele enseñarse mal.** El multiplicador $\\lambda$ no es un residuo del método: es **la derivada del valor óptimo respecto a la restricción**. Dicho de otro modo, mide **cuánto mejoraría el objetivo si la restricción se relajara en una unidad**. Por eso se le llama **precio sombra**: es lo máximo que el agente pagaría por una unidad más del recurso escaso. En el consumidor es la utilidad marginal de la renta; en un problema de producción con capacidad limitada, el valor de una hora más de máquina; en un sistema de cupos de emisión, el precio al que se intercambiarían los derechos. Que un número que aparece como incógnita auxiliar resulte tener una interpretación económica tan directa es una de las cosas más elegantes de la disciplina.",
            "La generalización de esa idea es el **teorema de la envolvente**, que dice algo que ahorra un trabajo enorme: para saber cómo cambia el valor óptimo cuando cambia un parámetro, **basta derivar respecto a ese parámetro tratando las variables de decisión como constantes**. No hace falta recalcular el óptimo. La razón es que, por la condición de primer orden, el efecto de reajustar las decisiones es de segundo orden y se anula. De ahí salen resultados centrales como el lema de Shephard o la identidad de Roy, y también la intuición de que **quien ya estaba optimizando pierde poco por un cambio pequeño**.",
            "**Cuando las restricciones son desigualdades**, el método se extiende con las condiciones de **Karush-Kuhn-Tucker**, cuya única novedad conceptual es la **holgura complementaria**: o la restricción está activa y su multiplicador es positivo, o está inactiva y su multiplicador es cero. Traducido: **un recurso que sobra tiene precio sombra nulo**. Esa condición aparece por todas partes en economía aplicada —en soluciones de esquina donde se consume cero de un bien, en la restricción de crédito que solo ata a algunos hogares, en la cota inferior de los tipos de interés de la ficha 3.08— y suele ser la parte que más quebraderos da en los ejercicios.",
            "**El álgebra lineal entra por dos puertas.** La primera es la **estática comparativa**: un modelo de equilibrio es un sistema de ecuaciones, y preguntar cómo se mueve el equilibrio ante un cambio de un parámetro es resolver un sistema lineal, normalmente por la regla de Cramer o invirtiendo la matriz. El **determinante** en el denominador no es un tecnicismo: si se anula, el sistema no tiene solución única y el modelo está mal planteado. La segunda puerta es la de los **sistemas de producción interdependientes**: cuando la producción de cada sector requiere insumos de los demás, el equilibrio se obtiene invirtiendo una matriz, y esa inversa —la **inversa de Leontief**— contiene los multiplicadores sectoriales que se usan hoy en las tablas input-output. Es la aplicación empírica más directa del álgebra matricial a la economía, y la trataremos con números.",
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
            { nom: "Condición de primer orden", sub: "En el óptimo interior no hay ganancia marginal.", cols: ["$\\nabla f(x^*) = 0$"] },
            { nom: "Condición de segundo orden", sub: "Hessiana definida negativa $\\Rightarrow$ máximo local.", cols: ["H(x*) ≺ 0"] },
            { nom: "Concavidad", sub: "Convierte un máximo local en global.", cols: ["$f$ cóncava $\\Rightarrow$ punto crítico $=$ máximo global"] },
            { nom: "Lagrangiano", sub: "El objetivo más el precio de la restricción.", cols: ["$L = f(x) + \\lambda[b - g(x)]$"] },
            { nom: "Condición de tangencia", sub: "El mismo resultado en todo modelo de elección.", cols: ["$\\dfrac{\\partial f/\\partial x_1}{\\partial f/\\partial x_2} = \\dfrac{\\partial g/\\partial x_1}{\\partial g/\\partial x_2}$"] },
            { nom: "Precio sombra", sub: "El multiplicador es lo que vale relajar la restricción.", cols: ["$\\lambda = \\dfrac{\\partial f(x^*)}{\\partial b}$"] },
            { nom: "Teorema de la envolvente", sub: "Derivar sin recalcular el óptimo.", cols: ["$\\dfrac{dV}{d\\alpha} = \\dfrac{\\partial L}{\\partial \\alpha}$ evaluado en $x^*$"] },
            { nom: "Holgura complementaria", sub: "Recurso que sobra, precio sombra cero.", cols: ["$\\lambda \\geq 0$, $g(x) \\leq b$, $\\lambda[b - g(x)] = 0$"] },
            { nom: "Estática comparativa", sub: "Cómo se mueve el equilibrio de un sistema.", cols: ["$A\\,dx = -\\dfrac{\\partial F}{\\partial \\alpha}\\,d\\alpha \\Rightarrow \\dfrac{dx}{d\\alpha} = -A^{-1}\\dfrac{\\partial F}{\\partial \\alpha}$"] },
            { nom: "Regla de Cramer", sub: "Si el determinante se anula, no hay solución única.", cols: ["$x_i = \\dfrac{\\det(A_i)}{\\det(A)}$"] },
            { nom: "Modelo de Leontief", sub: "Producción total que sostiene una demanda final.", cols: ["$x = (I - A)^{-1} d$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el óptimo del consumidor, con λ incluido",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un consumidor con utilidad $U(x,y) = \\sqrt{xy}$ dispone de **120 €**. Los precios son $p_x = 4$ y $p_y = 2$. Hay que maximizar $U$ sujeto a $4x + 2y = 120$.",
            "El lagrangiano es $L = \\sqrt{xy} + \\lambda(120 - 4x - 2y)$. Las derivadas parciales igualadas a cero dan que la relación marginal de sustitución, $y/x$, debe igualar al cociente de precios, $4/2 = 2$. Es decir, $y = 2x$. Sustituyendo en la restricción: $4x + 2(2x) = 120$, luego $8x = 120$ y de ahí $x^* = 15$, $y^* = 30$. La utilidad alcanzada es $\\sqrt{450} = 21{,}21$.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Bien X", y: "Bien Y" },
          dominio: { x: [0, 40], y: [0, 70] },
          marcasX: [0, 10, 20, 30, 40],
          marcasY: [0, 20, 40, 60],
          series: [
            {
              nombre: "Presupuesto",
              color: "alerta",
              grosor: 2,
              etiquetaEn: [30, 0],
              puntos: [[0, 60], [30, 0]],
            },
            {
              nombre: "U = 24,5",
              color: "tinta2",
              trazo: "punteado",
              etiquetaEn: [40, 15],
              puntos: [[11, 54.55], [13, 46.15], [15, 40], [18, 33.33], [22, 27.27], [26, 23.08], [30, 20], [35, 17.14], [40, 15]],
            },
            {
              nombre: "U = 21,2",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [40, 11.25],
              puntos: [[8, 56.25], [10, 45], [12, 37.5], [15, 30], [18, 25], [21, 21.43], [25, 18], [30, 15], [35, 12.86], [40, 11.25]],
            },
            {
              nombre: "U = 20",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [25, 16],
              puntos: [[7, 57.14], [10, 40], [13, 30.77], [16, 25], [20, 20], [25, 16], [30, 13.33], [35, 11.43], [40, 10]],
            },
          ],
          puntos: [
            { x: 15, y: 30, etiqueta: "A  óptimo", guias: true },
            { x: 10, y: 40, etiqueta: "B", guias: false },
            { x: 20, y: 20, etiqueta: "C", guias: false },
          ],
          nota: "**B y C están sobre la recta presupuestaria y agotan la renta igual que A**, pero los tres no valen lo mismo: en B y en C la utilidad es exactamente 20, y en A es 21,21. Lo que distingue a A no es gastar más, sino **gastar en la proporción correcta**, y esa proporción es precisamente la que iguala la pendiente de la curva de indiferencia con la de la restricción. La curva punteada superior, U = 24,5, muestra qué significa que la restricción ate: **es preferible y es inalcanzable**, y la distancia entre ella y A es lo que el consumidor pagaría por tener más renta.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora $\\lambda$, que es la parte que de verdad importa.** De las condiciones de primer orden sale $\\lambda = \\dfrac{1}{2\\sqrt{p_x p_y}} = \\dfrac{1}{2\\sqrt 8} = 0{,}1768$. La afirmación que hay que comprobar es que ese número mide la utilidad de un euro más de renta. Con 121 € en lugar de 120, el nuevo óptimo da una utilidad de **21,3900**, frente a **21,2132**. La diferencia es **0,1768**: exactamente $\\lambda$. No es una coincidencia ni una aproximación afortunada, sino lo que afirma el teorema de la envolvente.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Punto", "x", "y", "Gasto", "Utilidad"],
          filas: [
            ["B", "10", "40", "120 €", "20,00"],
            ["C", "20", "20", "120 €", "20,00"],
            { celdas: ["A — óptimo", "15", "30", "120 €", "21,21"], clase: "total" },
            ["A con renta de 121 €", "15,125", "30,25", "121 €", "21,39"],
          ],
          nota: "La última fila es la comprobación de $\\lambda$: **un euro más de renta añade 0,1768 de utilidad**, que es el valor del multiplicador. Obsérvese también que el euro adicional se reparte manteniendo la proporción y = 2x, porque la condición de tangencia no depende de la renta: es la propiedad que hace que la Cobb-Douglas gaste **una fracción fija del presupuesto en cada bien** —aquí la mitad y la mitad— independientemente de lo rica que sea la persona.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segunda aplicación: estática comparativa por Cramer.** Retomamos el mercado del bloque 1, con demanda Qd = 100 − 2P y oferta Qs = −20 + 3P. Escrito como sistema, Q + 2P = 100 y Q − 3P = −20. El determinante de la matriz de coeficientes es (1)(−3) − (2)(1) = **−5**, distinto de cero, luego hay solución única: **P = 24** y **Q = 52**, los valores conocidos.",
            "Lo útil es lo siguiente. Si el término independiente de la demanda pasa de 100 a 130 —un desplazamiento de la curva—, la regla de Cramer da directamente **dP/da = 1/5 = 0,2** y **dQ/da = 3/5 = 0,6**. Comprobación: el nuevo equilibrio es P = 30 y Q = 70, es decir, **+6 y +18** ante un desplazamiento de 30. **El modelo predice la dirección y la magnitud sin resolverlo otra vez**, y esos coeficientes se leen como reparto del choque entre precio y cantidad según las pendientes relativas, que es el mismo argumento de la incidencia impositiva de la ficha 1.03.",
            "**Tercera aplicación: interdependencia sectorial.** Una economía tiene dos sectores. Producir un euro del sector 1 requiere 0,20 € del propio sector 1 y 0,40 € del sector 2; producir un euro del sector 2 requiere 0,30 € del sector 1 y 0,10 € del sector 2. Si la demanda final es de **120** para el sector 1 y **60** para el sector 2, ¿cuánto debe producir cada uno?",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Sector 1", "Sector 2"],
          filas: [
            ["Demanda final", "120", "60"],
            ["Consumido por el sector 1", "42", "84"],
            ["Consumido por el sector 2", "48", "16"],
            { celdas: ["Producción total necesaria", "210", "160"], clase: "total" },
            ["Efecto de +10 de demanda final del sector 1", "+15", "+6,67"],
          ],
          nota: "La producción no es 120 y 60, sino **210 y 160**, porque cada sector consume del otro y de sí mismo. La solución es $x = (I - A)^{-1} d$, y la inversa de Leontief resulta ser [[1,50 · 0,50], [0,67 · 1,33]]. El elemento (1,1) dice que **entregar una unidad más de demanda final del sector 1 exige producir 1,50 en ese sector**: uno para el cliente y medio para alimentar la cadena de insumos. Esa es la última fila: diez unidades más de demanda final arrastran quince de producción propia y casi siete del otro sector. **Los multiplicadores input-output que publican los institutos de estadística son exactamente los elementos de esta matriz.**",
        },
      ],
    },
    {
      titulo: "Caso práctico: el precio sombra como instrumento de política",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay una política real que consiste, literalmente, en poner precio a un multiplicador de Lagrange: los **mercados de derechos de emisión**. Vale la pena seguir el argumento porque muestra que la interpretación de $\\lambda$ no es una curiosidad matemática, sino el diseño de un instrumento que mueve miles de millones.",
            "**El planteamiento es un problema de optimización con restricción.** Un regulador quiere que un conjunto de plantas industriales reduzca sus emisiones hasta un tope agregado, al mínimo coste posible. Cada planta tiene su propia función de coste de reducción, y son muy distintas: modernizar una instalación antigua puede costar diez veces menos por tonelada que exprimir una ya eficiente. El problema es minimizar el coste total sujeto a que la suma de reducciones alcance el objetivo.",
            "**La condición de primer orden da el resultado entero.** En el óptimo, **el coste marginal de reducir debe ser el mismo en todas las plantas**, y ese valor común es $\\lambda$: el coste de reducir una tonelada más en el conjunto del sistema. Si dos plantas tuvieran costes marginales distintos, se podría reducir un poco más donde es barato y un poco menos donde es caro, cumplir el mismo tope y gastar menos. Que la solución eficiente iguale costes marginales es exactamente el mismo teorema que iguala relaciones marginales de sustitución en el consumidor.",
            "**Y aquí está el salto de ingeniería institucional.** El regulador no conoce las funciones de coste de las plantas, así que no puede calcular $\\lambda$ ni imponer la asignación óptima. Lo que puede hacer es **repartir derechos por el total del tope y permitir que se compren y vendan**. Quien puede reducir barato lo hace y vende derechos; quien no, compra. El precio de equilibrio del derecho **es $\\lambda$**, descubierto por el mercado en lugar de calculado por la administración. El sistema europeo de comercio de emisiones funciona con esa lógica, y su precio es, de forma bastante literal, un multiplicador de Lagrange cotizado en un mercado.",
            "**La holgura complementaria explica el fracaso inicial del sistema.** Durante sus primeros años el precio del derecho se desplomó hasta casi cero, y muchos lo leyeron como un fallo de diseño. Económicamente decía otra cosa: **la restricción no estaba activa**. Se habían repartido más derechos de los necesarios, la crisis había reducido la actividad, y un recurso que sobra tiene precio sombra nulo. El precio no estaba roto: estaba informando correctamente de que el tope no ataba. La reforma posterior consistió en retirar derechos, es decir, en apretar la restricción hasta que volviera a ser vinculante.",
            "**Lo que el marco no decide.** Cuánto debe valer el tope es una cuestión de daño climático y de descuento intergeneracional —la ficha 1.10 se ocupa de esto—, no de optimización. Y el reparto inicial de los derechos no afecta a la eficiencia, pero sí decide **quién se queda la renta**, que es un asunto distributivo de primer orden. El álgebra dice cómo alcanzar un objetivo al mínimo coste; no dice cuál debe ser el objetivo ni quién debe pagarlo.",
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
            { t: "Tratar $\\lambda$ como un artefacto del método", d: "Es el precio sombra de la restricción: la mejora del objetivo por unidad de relajación. En el ejemplo, $\\lambda = 0{,}1768$ y un euro más de renta añade exactamente 0,1768 de utilidad. Ignorarlo es tirar la mitad de la información que da el problema." },
            { t: "Quedarse en la condición de primer orden", d: "El gradiente se anula igual en máximos, mínimos y puntos de silla. Sin comprobar la segunda derivada —o sin invocar concavidad— no se sabe qué se ha encontrado. En los modelos económicos suele suponerse concavidad de antemano, y conviene saber que es un supuesto, no un teorema." },
            { t: "Aplicar Lagrange cuando la solución es de esquina", d: "El método supone óptimo interior. Si la solución óptima consume cero de un bien, la condición de tangencia no se cumple y hay que usar Kuhn-Tucker. Es el error más frecuente en los ejercicios con utilidades lineales o con bienes que no se demandan a ningún precio." },
            { t: "Olvidar la holgura complementaria", d: "Una restricción inactiva tiene multiplicador cero, y un multiplicador positivo implica restricción activa. No comprobarlo lleva a imponer igualdades donde solo hay desigualdades y a resolver un problema que no es el planteado." },
            { t: "Recalcular el óptimo para hacer estática comparativa", d: "El teorema de la envolvente permite derivar el valor óptimo respecto a un parámetro tratando las decisiones como constantes, porque su reajuste es de segundo orden. Es la diferencia entre media línea y una página de cálculos." },
            { t: "No mirar el determinante", d: "Si se anula, el sistema no tiene solución única: en un modelo de mercado significa, por ejemplo, que oferta y demanda son paralelas. El determinante en el denominador de Cramer es información económica sobre si el modelo está bien planteado, no un requisito burocrático." },
            { t: "Confundir la matriz de coeficientes técnicos con la inversa de Leontief", d: "La primera recoge los insumos directos; la segunda, los directos más todas las rondas indirectas. Por eso sus elementos diagonales son mayores que uno. Usar la primera donde toca la segunda infravalora sistemáticamente el arrastre de cualquier impulso de demanda." },
            { t: "Creer que los multiplicadores input-output miden efectos causales de una política", d: "Suponen precios fijos, tecnología fija, capacidad ociosa y ninguna restricción de oferta. Sirven para describir la estructura de interdependencia de una economía en un año dado; leerlos como una predicción del efecto de un plan de inversión es forzarlos mucho más allá de lo que aguantan." },
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
            "El álgebra de esta ficha no es solo un lenguaje para la teoría: una parte del sistema estadístico oficial consiste, literalmente, en construir y manipular las matrices que aquí aparecen.",
          ],
          lista: [
            "El **marco input-output** del SEC 2010 es el modelo de Leontief con datos reales. El INE publica para España las **tablas de origen y destino** y la **tabla simétrica**, de las que se obtiene la matriz de coeficientes técnicos A y su inversa $(I - A)^{-1}$. Con ella se calculan los **multiplicadores de producción, empleo y valor añadido** que se citan en cualquier informe sectorial. La ficha 10.07 entra en el detalle español.",
            "La **identidad fundamental de recursos y empleos** —producción más importaciones igual a consumos intermedios más demanda final— es el sistema lineal que las tablas resuelven. Que cuadre no es un resultado empírico: es una restricción contable que el proceso de elaboración impone, y de ahí los **ajustes de discrepancia estadística** que aparecen en las publicaciones.",
            "El **encadenamiento de volúmenes** con índices en cadena de la ficha 3.02 es un problema de agregación con ponderaciones variables, y su conocida **falta de aditividad** —la suma de los componentes en volumen encadenado no da el total— es consecuencia directa del álgebra, no un error de los datos.",
            "Las **cuentas satélite y los análisis de huella** aplican la misma inversa de Leontief a vectores de emisiones, agua o empleo para repartir un impacto total entre los sectores que lo originan por la vía de la demanda final. Es la técnica que hay detrás de las estimaciones de emisiones importadas.",
            "Y el **precio sombra** tiene su reflejo estadístico en los **precios de mercado frente a los precios básicos**: el SEC obliga a valorar la producción sin impuestos netos sobre productos precisamente porque el precio que paga el comprador y el que remunera al productor no son el mismo número, que es la cuña de la ficha 1.03 vista desde la contabilidad.",
          ],
          cierre:
            "La idea que conviene llevarse es que la contabilidad nacional no es una lista de cifras, sino un **sistema de ecuaciones simultáneas** con restricciones de cuadre. Quien entiende la inversa de Leontief entiende de dónde salen la mitad de los números que se citan en los debates sobre política industrial.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué mide exactamente el multiplicador de Lagrange y cómo se comprueba?", a: "Mide la variación del valor óptimo del objetivo ante una relajación unitaria de la restricción: el precio sombra. Se comprueba resolviendo el problema con la restricción aumentada en una unidad y viendo la diferencia. En el ejemplo, $\\lambda = 0{,}1768$ y la utilidad pasa de 21,2132 con 120 € a 21,3900 con 121 €, una diferencia de 0,1768." },
            { q: "¿Por qué B = (10, 40) y C = (20, 20) dan la misma utilidad y menor que A = (15, 30)?", a: "Porque los tres agotan la renta, pero solo A cumple la condición de tangencia y = 2x. B y C están sobre la misma curva de indiferencia, xy = 400, luego U = 20; A está sobre xy = 450, luego U = 21,21. La recta presupuestaria corta la curva de U = 20 en dos puntos y es tangente a la de U = 21,21 en uno solo: esa es la definición gráfica del óptimo." },
            { q: "En un problema de capacidad, una máquina tiene horas sin usar. ¿Cuánto vale su precio sombra?", a: "Cero, por holgura complementaria. Si la restricción no está activa, relajarla no mejora el objetivo, así que su multiplicador se anula. Es el mismo argumento que explica que el precio del derecho de emisión se hundiera cuando se repartieron más derechos de los que la actividad requería: no había restricción que valorar." },
            { q: "La demanda de un mercado se desplaza y quiere saberse cuánto sube el precio. ¿Hace falta resolver de nuevo el equilibrio?", a: "No. Basta aplicar Cramer al sistema y obtener dP/da, que en el ejemplo vale 0,2. Un desplazamiento de 30 unidades sube el precio en 6 y la cantidad en 18, y se sabe antes de calcular el nuevo equilibrio. Ese coeficiente depende solo de las pendientes relativas de oferta y demanda." },
            { q: "¿Por qué la producción necesaria del sector 1 es 210 si su demanda final es solo 120?", a: "Porque parte de su producción se consume como insumo: 42 por sí mismo y 48 por el sector 2. La demanda final arrastra rondas sucesivas de consumos intermedios, y la inversa de Leontief las suma todas. Su elemento (1,1) es 1,50, es decir, cada unidad de demanda final del sector 1 exige producir una y media." },
            { q: "¿Qué gana el teorema de la envolvente frente a derivar directamente?", a: "Evita tener que recalcular el óptimo. Como en el punto óptimo las condiciones de primer orden se cumplen, el efecto de reajustar las variables de decisión es de segundo orden y se anula, de modo que basta derivar el lagrangiano respecto al parámetro manteniendo las decisiones fijas. De ahí salen el lema de Shephard y la identidad de Roy." },
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
              q: "¿Qué mide el multiplicador de Lagrange en un problema de maximización con restricción?",
              opciones: [
                "Un artefacto del método sin contenido económico",
                "La pendiente de la restricción en el óptimo",
                "La distancia entre el óptimo restringido y el libre",
                "El precio sombra: cuánto mejora el objetivo si se relaja la restricción una unidad",
              ],
              correcta: 3,
              porque: [
                "Es la lectura que hace perder lo más útil del método. En el ejemplo, $\\lambda = 0{,}1768$ y un euro más de renta añade exactamente 0,1768 de utilidad: se puede comprobar recalculando.",
                "La pendiente de la restricción es el cociente de precios, que aparece en la condición de tangencia pero no es $\\lambda$.",
                "Esa distancia mide el coste de estar restringido en total; $\\lambda$ es una magnitud marginal, no total.",
                "Y de ahí que tenga aplicaciones muy concretas: los mercados de derechos de emisión ponen literalmente precio a un multiplicador de Lagrange descubierto por el mercado.",
              ],
            },
            {
              q: "El gradiente de una función se anula en un punto. ¿Qué se ha encontrado?",
              opciones: [
                "Un punto crítico, que puede ser máximo, mínimo o punto de silla",
                "Un mínimo, si la función es convexa",
                "El óptimo, siempre que la restricción sea lineal",
                "Un máximo",
              ],
              correcta: 0,
              porque: [
                "Sin comprobar la segunda derivada —o sin poder invocar concavidad— no se sabe qué se ha encontrado. Es el paso que más se omite.",
                "Con función convexa sí sería un mínimo, pero el enunciado no dice nada sobre la forma de la función.",
                "La linealidad de la restricción no informa sobre la curvatura del objetivo, que es lo que decide el tipo de punto.",
                "La condición de primer orden es necesaria pero no suficiente: se cumple igual en las tres situaciones.",
              ],
            },
            {
              q: "En un problema de consumidor la solución óptima consume cero de un bien. ¿Sirve Lagrange?",
              opciones: [
                "Sí: basta con imponer la restricción de no negatividad al final",
                "No, porque el problema no tiene solución",
                "No: el método supone óptimo interior y hay que usar Kuhn-Tucker",
                "Sí, si se reformula con logaritmos",
              ],
              correcta: 2,
              porque: [
                "Imponerla después no arregla nada: la condición de tangencia que Lagrange resuelve simplemente no se cumple en la esquina.",
                "El problema tiene solución perfectamente: lo que no sirve es la herramienta elegida.",
                "Con solución de esquina la igualdad de la relación marginal de sustitución y el cociente de precios deja de valer, y hay que trabajar con desigualdades y holgura complementaria.",
                "Los logaritmos garantizan solución interior con Cobb-Douglas, pero eso es cambiar el problema, no resolverlo.",
              ],
            },
            {
              q: "Un estudio usa multiplicadores input-output para estimar el efecto de una inversión pública. ¿Qué hay que advertir?",
              opciones: [
                "Nada: es la metodología estándar para impacto económico",
                "Que hay que sumar los efectos directos e indirectos por separado",
                "Que solo valen para el sector primario",
                "Que suponen precios fijos, tecnología fija, capacidad ociosa y ninguna restricción de oferta",
              ],
              correcta: 3,
              porque: [
                "Es estándar y por eso mismo se aplica sin advertencias. Describir estructura no es lo mismo que predecir el efecto de una política.",
                "La inversa de Leontief ya incluye los efectos indirectos: sumarlos aparte los contaría dos veces.",
                "Se usan en todos los sectores; el problema de interpretación es el mismo en cualquiera.",
                "Con esos supuestos, el multiplicador dice cómo está interconectada la economía, no cuánta actividad nueva generaría la inversión: parte de ella desplazaría a otra existente.",
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
            { ref: "Simon y Blume, Matemáticas para economistas", nota: "el manual de referencia: optimización con restricciones, envolvente y Kuhn-Tucker con el nivel de rigor justo para economía." },
            { ref: "Chiang y Wainwright, Métodos fundamentales de economía matemática", nota: "más pausado y con mejor motivación económica de cada herramienta; buen primer contacto si el álgebra pesa." },
            { ref: "Varian, Microeconomía intermedia", nota: "los apéndices matemáticos muestran cada resultado de esta ficha aplicado a un problema económico concreto, que es la mejor forma de fijarlo." },
            { ref: "Miller y Blair, Input-Output Analysis", nota: "el tratado sobre Leontief: de dónde salen los multiplicadores, qué suponen y hasta dónde aguantan." },
            { ref: "INE, Marco input-output de España", nota: "las tablas reales, para ver la matriz A de una economía de verdad y comprobar el tamaño de los coeficientes." },
          ],
        },
      ],
    },
  ],
};
