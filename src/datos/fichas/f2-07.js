/* Ficha 2.07 — Monopolio, discriminacion de precios y regulacion. */

export default {
  codigo: "2.07",
  titulo: "Monopolio, discriminación de precios y regulación",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "El poder de mercado convierte excedente del consumidor en beneficio, y una parte se evapora por el camino. Esa parte evaporada —no la transferencia— es lo que justifica intervenir, y es también lo que hace que la discriminación de precios sea un caso mucho menos claro de lo que parece.",
  requiere: "2.06 Competencia perfecta · 2.05 Costes",
  abre: "2.08 Oligopolio · 2.10 Fallos de mercado · 9.02 Estructura competitiva",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un monopolio no se define por ser una empresa grande, sino por afrontar **la demanda del mercado entera**. Esa es toda la diferencia con la ficha anterior y de ella se deriva absolutamente todo lo demás. Su origen puede ser una barrera legal —una patente, una concesión—, el control de un recurso, o una estructura de costes con una **escala mínima eficiente tan grande respecto al mercado que solo cabe una empresa**, que es el caso del monopolio natural. Lo que estos casos tienen en común no es el tamaño: es que **la entrada no es libre**, y por eso el mecanismo que en la ficha 2.06 llevaba el beneficio a cero aquí no funciona.",
            "La consecuencia inmediata es que **el ingreso marginal deja de coincidir con el precio**. Para vender una unidad más, el monopolista tiene que bajar el precio, y no solo el de esa unidad sino **el de todas las que ya vendía**. El ingreso marginal es por tanto el precio menos esa pérdida sobre las unidades anteriores, de modo que **IMg < P** siempre. Con demanda lineal el resultado es especialmente cómodo de recordar: la curva de ingreso marginal tiene **el doble de pendiente** que la de demanda y comparte con ella la ordenada en el origen.",
            "El monopolista sigue maximizando beneficio donde el ingreso marginal iguala al coste marginal, exactamente igual que la empresa competitiva. Lo que cambia es que ahora ese punto ya no está sobre la curva de demanda: se produce la cantidad donde IMg = CMg, pero **se cobra el precio que la demanda admite para esa cantidad**, que es más alto. La distancia entre ambos se resume en el **índice de Lerner**, (P − CMg)/P, que en el óptimo resulta ser exactamente **el inverso de la elasticidad de la demanda**. De ahí sale una lección práctica: el poder de mercado no depende de la cuota, sino de **cuántas alternativas tiene el comprador**, que es lo que mide la elasticidad. Un monopolista que afronta demanda muy elástica apenas puede subir el precio.",
            "El coste social tiene dos partes que **conviene no confundir jamás**. La primera es una **transferencia**: sobre las unidades que se siguen vendiendo, el consumidor paga más y el productor cobra más. Es un reparto distinto del excedente, y desde el punto de vista de la eficiencia agregada no se ha perdido nada, aunque desde el de la equidad sea muy relevante. La segunda es la **pérdida irrecuperable de eficiencia**: las unidades que dejan de producirse pese a que el comprador las valoraba por encima de lo que costaba fabricarlas. Ese excedente **no se lo queda nadie, desaparece**. Y es la única de las dos partes que constituye un argumento de eficiencia para intervenir.",
            "La **discriminación de precios** consiste en cobrar precios distintos por el mismo bien sin que la diferencia responda a costes. Requiere poder de mercado, capacidad de separar compradores y que no puedan revenderse entre sí. Se clasifica en tres grados: **primer grado** o perfecto, cobrando a cada comprador su disposición máxima a pagar; **segundo grado**, ofreciendo un menú —tarifas por volumen, versiones, dos partes— para que cada cual se autoseleccione; y **tercer grado**, precios distintos por grupos identificables, cobrando más al grupo de demanda menos elástica. Aquí aparece el resultado más contraintuitivo de la ficha: **la discriminación perfecta elimina por completo la pérdida de eficiencia** —se produce la cantidad competitiva— pero deja al consumidor sin nada de excedente. Eficiencia y equidad apuntan en direcciones opuestas, y por eso el juicio sobre la discriminación no puede resolverse solo con el criterio de eficiencia.",
            "El **monopolio natural** es el caso donde la regulación se plantea en serio, porque partir la empresa en varias sería un derroche: una sola produce más barato que cualquier reparto. Las tres opciones básicas se ordenan solas. Fijar el **precio igual al coste marginal** es lo eficiente, pero con costes fijos grandes y coste marginal bajo genera pérdidas que alguien tiene que subvencionar. Fijar el **precio igual al coste medio** hace la empresa viable sin subvención y es lo que suele hacerse, a cambio de renunciar a una parte de la eficiencia. Y regular la **tasa de rendimiento** sobre el capital invertido evita ambos problemas pero introduce uno nuevo: si la retribución se calcula sobre el capital, aparece un incentivo a invertir de más. No existe una solución limpia; existe un menú de imperfecciones entre las que hay que elegir.",
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
            { nom: "Ingreso marginal", sub: "El segundo término es la pérdida sobre las unidades previas.", cols: ["$\\mathrm{IMg} = P + q\\,\\dfrac{dP}{dq} < P$"] },
            { nom: "Ingreso marginal con demanda lineal", sub: "El doble de pendiente, misma ordenada en el origen.", cols: ["Si $P = a - bq$, entonces $\\mathrm{IMg} = a - 2bq$"] },
            { nom: "Condición de óptimo", sub: "La misma que en competencia; lo que cambia es el IMg.", cols: ["$\\mathrm{IMg}(q) = \\mathrm{CMg}(q)$"] },
            { nom: "Índice de Lerner", sub: "Mide el poder de mercado en el óptimo.", cols: ["$L = \\dfrac{P - \\mathrm{CMg}}{P} = \\dfrac{1}{|\\varepsilon|}$"] },
            { nom: "Regla del precio", sub: "El margen sobre coste sale de la elasticidad.", cols: ["$P = \\mathrm{CMg}\\,\\dfrac{|\\varepsilon|}{|\\varepsilon| - 1}$"] },
            { nom: "Corolario", sub: "Con demanda inelástica siempre conviene subir el precio.", cols: ["El monopolista nunca opera donde $|\\varepsilon| < 1$"] },
            { nom: "Pérdida irrecuperable", sub: "Las unidades que no se producen, con demanda y coste lineales.", cols: ["$\\mathrm{PIM} = \\tfrac12 (P - \\mathrm{CMg})(q_{\\text{comp}} - q_{\\text{mon}})$"] },
            { nom: "Discriminación de tercer grado", sub: "Un Lerner por mercado; más caro donde menos elástica.", cols: ["$\\mathrm{IMg}_A = \\mathrm{IMg}_B = \\mathrm{CMg}$"] },
            { nom: "Monopolio natural", sub: "Una sola empresa produce más barato que cualquier reparto.", cols: ["$\\mathrm{CT}(q_1 + q_2) < \\mathrm{CT}(q_1) + \\mathrm{CT}(q_2)$"] },
            { nom: "Regulación al coste medio", sub: "Viable sin subvención, no plenamente eficiente.", cols: ["$P = \\mathrm{CMe} \\Rightarrow$ beneficio económico nulo"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo mercado, monopolizado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Tomemos un mercado con demanda **P = 100 − Q** y coste marginal constante **CMg = 20**. En competencia perfecta, por lo que vimos en la ficha 2.06, el precio sería 20 y se venderían **80 unidades**. Con un solo oferente, el ingreso marginal es **IMg = 100 − 2Q**, e igualándolo a 20 se obtiene **Q = 40** y, llevando esa cantidad a la demanda, **P = 60**.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 100], y: [0, 100] },
          marcasX: [0, 20, 40, 60, 80, 100],
          marcasY: [0, 20, 40, 60, 80, 100],
          areas: [
            { puntos: [[0, 60], [40, 60], [40, 20], [0, 20]], color: "acento", etiqueta: "Transferencia" },
            { puntos: [[40, 60], [40, 20], [80, 20]], color: "alerta", etiqueta: "Se evapora" },
          ],
          series: [
            { nombre: "Demanda", puntos: [[0, 100], [100, 0]], color: "tinta" },
            { nombre: "Ingreso marginal", puntos: [[0, 100], [50, 0]], color: "tinta2", trazo: "discontinuo" },
            { nombre: "Coste marginal", puntos: [[0, 20], [100, 20]], color: "acento" },
          ],
          puntos: [
            { x: 40, y: 60, etiqueta: "Monopolio" },
            { x: 80, y: 20, etiqueta: "Competencia" },
          ],
          nota: "El monopolista busca el cruce del **ingreso marginal con el coste marginal** —que ocurre en 40— y luego sube a la curva de demanda para cobrar 60. El rectángulo verde son los 1.600 que pasan del comprador al vendedor; el triángulo son los 800 que **no recibe nadie**. La distancia entre los dos puntos señalados es todo el efecto del poder de mercado.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Competencia", "Monopolio", "Diferencia"],
          filas: [
            ["Cantidad", "80", "40", "−40"],
            ["Precio", "20", "60", "+40"],
            ["Excedente del consumidor", "3.200", "800", "−2.400"],
            ["Beneficio del productor", "0", "1.600", "+1.600"],
            { celdas: ["Excedente total", "3.200", "2.400", "−800"], clase: "total" },
          ],
          nota: "Las dos últimas líneas contienen toda la ficha. El consumidor pierde **2.400**, pero de esos **1.600 no se pierden: cambian de manos** y acaban en el beneficio del monopolista. Los **800 restantes no aparecen en ningún sitio**: son las cuarenta unidades que el comprador valoraba por encima de 20 y que han dejado de producirse. Solo esa segunda parte es un argumento de eficiencia. El índice de Lerner es (60 − 20)/60 = **0,667**, que es exactamente el inverso de la elasticidad de la demanda en ese punto, 1,5.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Discriminación de tercer grado.** Supongamos ahora que el monopolista puede separar dos grupos que no pueden revenderse entre sí: uno con demanda $P = 100 - Q_A$ y otro más sensible al precio, $P = 60 - 0{,}5\\,Q_B$. Igualando el ingreso marginal al coste en cada uno por separado, el resultado es 40 unidades en cada mercado, a **60** en el primero y a **40** en el segundo. Si se le obligara a un precio único, cobraría **46,67**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Precio único", "Discriminando", "Diferencia"],
          filas: [
            ["Precio en el mercado A", "46,67", "60,00", "+13,33"],
            ["Precio en el mercado B", "46,67", "40,00", "−6,67"],
            ["Cantidad total vendida", "80,0", "80,0", "0,0"],
            ["Beneficio", "2.133", "2.400", "+267"],
            ["Excedente del consumidor", "1.600", "1.200", "−400"],
            { celdas: ["Excedente total", "3.733", "3.600", "−133"], clase: "total" },
          ],
          nota: "Obsérvese la tercera fila: **la cantidad total no cambia**. Con demandas lineales es un resultado general, y tiene una consecuencia importante: si el total producido es el mismo pero el bienestar cae en 133, lo que ha empeorado es **el reparto de esas unidades entre compradores**. Se venden menos unidades a quien más las valora y más a quien menos. Y nótese que el grupo B **paga menos** que con precio único: la discriminación no perjudica a todo el mundo, y por eso la valoración no es automática. Cuando la discriminación permite atender a un grupo que con precio único no sería atendido en absoluto, el bienestar puede incluso aumentar.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el monopolio natural.** Cambiemos la estructura de costes a **CT(Q) = 900 + 20Q**: coste marginal de 20 y un coste fijo grande, de modo que el coste medio decrece en todo el recorrido y una sola empresa siempre produce más barato que dos. Las tres opciones del regulador dan esto:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Régimen", "Precio", "Cantidad", "Beneficio", "Valoración"],
          filas: [
            ["Monopolio sin regular", "60,00", "40,0", "+700", "Máxima pérdida de eficiencia"],
            ["Precio = coste marginal", "20,00", "80,0", "−900", "Eficiente, pero exige subvencionar el déficit"],
            { celdas: ["Precio = coste medio", "33,54", "66,5", "0", "Viable sin subvención; segundo óptimo"], clase: "total" },
          ],
          nota: "La segunda fila es el ideal de eficiencia y **pierde exactamente el coste fijo**, 900, porque el precio solo cubre el coste marginal. Alguien tiene que poner ese dinero, y hacerlo exige impuestos que distorsionan en otra parte. La tercera es la solución de compromiso que se aplica en la práctica: la empresa cubre todos sus costes incluida la retribución normal del capital —beneficio económico nulo, en el sentido de la ficha 2.05— y se renuncia a una parte de la eficiencia. **No hay una cuarta opción sin coste.**",
        },
      ],
    },
    {
      titulo: "Caso práctico: la patente como monopolio deliberado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay un monopolio que los Estados no solo toleran sino que conceden a propósito, con expediente y plazo: la patente. Analizarlo obliga a usar todo lo anterior y a admitir que el resultado no es cómodo.",
            "**El coste estático es exactamente el de la tabla.** Un medicamento protegido tiene un coste marginal de fabricación que suele ser una fracción minúscula de su precio, así que el índice de Lerner se acerca a uno. Durante la vigencia de la patente hay una transferencia grande del comprador —a menudo un sistema público de salud— al titular, y hay pacientes que no acceden al tratamiento pese a que fabricar su dosis costaría mucho menos de lo que ellos o su sistema sanitario estarían dispuestos a pagar. Esa segunda parte es pérdida irrecuperable pura, y en este caso concreto se mide en salud.",
            "**El argumento a favor es dinámico, y es serio.** El conocimiento, una vez producido, es **no rival y difícilmente excluible**: copiarlo cuesta casi nada. Sin protección, quien investiga asume todo el coste y captura una fracción del valor, con lo que se investiga menos de lo socialmente deseable. Es el problema de apropiación de la ficha 9.10, y la patente lo resuelve **creando artificialmente la exclusión que la naturaleza del bien no proporciona**. El monopolio no es aquí un fallo del mercado: es el instrumento elegido para corregir otro.",
            "**El intercambio, por tanto, se plantea en dos horizontes distintos.** Se acepta una ineficiencia estática cierta, hoy, a cambio de una ganancia dinámica incierta, mañana. Y la variable que gradúa ese intercambio es el **plazo**: una patente más larga refuerza el incentivo a investigar y prolonga la pérdida de eficiencia. No existe un plazo obviamente correcto, y por eso es una decisión política informada por economía, no una deducción económica.",
            "**Lo que ocurre al vencer la patente cierra el círculo de la ficha 2.06.** Entran los genéricos, el producto pasa a ser homogéneo, la entrada se vuelve libre y el precio cae hacia el coste marginal. Es la transición del monopolio a la competencia perfecta observada en directo, y la caída de precio que se produce **es la medida empírica del poder de mercado que existía antes**.",
            "**Y conviene señalar los usos torcidos**, porque son la parte del sistema que se discute con más razón. Prolongar artificialmente la protección con modificaciones menores del producto, o pagar al fabricante de genéricos para que retrase su entrada, no refuerza el incentivo a investigar: solo alarga el monopolio. Son prácticas perseguidas por las autoridades de competencia precisamente porque **capturan el beneficio del sistema sin aportar la contrapartida que lo justificaba**.",
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
            { t: "Creer que el monopolista fija el precio que quiere", d: "Fija un punto de la curva de demanda, no el precio a su antojo. Puede elegir precio o cantidad, pero no ambos: la demanda le impone la relación entre los dos. Un monopolista que sube el precio vende menos, igual que cualquiera." },
            { t: "Sumar la transferencia a la pérdida de eficiencia", d: "En el ejemplo, el consumidor pierde 2.400 pero el coste de eficiencia es 800. Los otros 1.600 son beneficio del monopolista y no han desaparecido. Confundir ambos conceptos infla el daño estimado del poder de mercado por un factor de tres." },
            { t: "Medir el poder de mercado por la cuota", d: "Lo que lo determina es la elasticidad de la demanda que afronta la empresa, es decir, qué alternativas tiene el comprador. Una empresa con el 100 % de un mercado fácilmente sustituible tiene menos poder que una con el 40 % de uno sin sustitutos." },
            { t: "Suponer que el monopolista opera en la zona inelástica", d: "Nunca lo hace. Si la demanda es inelástica, subir el precio aumenta el ingreso total y reduce el coste, así que siempre conviene subirlo más. El óptimo está necesariamente donde la elasticidad supera la unidad." },
            { t: "Dar por hecho que la discriminación de precios reduce el bienestar", d: "La perfecta lo aumenta hasta el máximo posible, aunque deje al consumidor sin excedente. La de tercer grado con demandas lineales suele reducirlo, pero si permite atender a un grupo que de otro modo quedaría fuera del mercado, puede aumentarlo. Es una cuestión empírica, no una deducción." },
            { t: "Confundir precio alto con poder de mercado", d: "Un precio alto puede reflejar costes altos, escasez transitoria de capacidad —la fase 3 de la ficha 2.06— o calidad. El poder de mercado es el margen sobre el coste marginal sostenido en el tiempo, y para diagnosticarlo hay que mirar los costes y las barreras de entrada, no el precio." },
            { t: "Pensar que un monopolio natural debe partirse en varias empresas", d: "Por definición, una sola produce más barato que cualquier reparto, así que trocearlo eleva el coste total de abastecer el mercado. El problema del monopolio natural es de regulación de precios, no de estructura, y por eso lo que suele separarse es la red —donde el monopolio es natural— del servicio que circula por ella, donde no lo es." },
            { t: "Creer que regular al coste medio deja a la empresa sin ganar nada", d: "El coste medio incluye el coste de oportunidad del capital, así que la empresa obtiene la retribución normal de sus fondos. Es el mismo beneficio económico nulo de la ficha 2.05, y es plenamente compatible con un beneficio contable sustancial." },
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
            "El poder de mercado es de las cosas que peor se ven en las cuentas nacionales, y conviene saber exactamente por qué antes de intentar leerlo en ellas.",
          ],
          lista: [
            "El **excedente bruto de explotación** (B.2g) no distingue entre la retribución normal del capital y la renta de monopolio. Ambas van al mismo agregado, así que **ninguna cuenta nacional permite separarlas directamente**. Los intentos de estimar el margen agregado de una economía se hacen con microdatos de empresas y supuestos sobre la función de costes, no con las cuentas.",
            "La producción se valora a **precios básicos**, que excluyen los impuestos sobre los productos. Un precio de monopolio, en cambio, entra íntegro en el valor de la producción: para la contabilidad nacional, **el sobreprecio del monopolista es valor añadido y el impuesto no lo es**. La distinción es puramente convencional y tiene consecuencias al comparar sectores regulados con otros que no lo están.",
            "El INE identifica en el IPC los **precios administrados o regulados**, aquellos cuya formación no responde libremente al mercado. Es la huella estadística directa de la regulación de esta ficha, y separarlos es habitual al analizar la inflación subyacente.",
            "Para los **servicios de monopolio natural** —redes de transporte, distribución de agua y energía— la medición del volumen es especialmente delicada, porque el precio regulado no refleja el coste marginal y por tanto no sirve como ponderación de la utilidad marginal en la forma que suponen los índices de la ficha 10.08.",
            "Y la **pérdida irrecuperable de eficiencia no aparece en ninguna parte**. El PIB mide lo que se produce, no lo que se habría producido en otra estructura de mercado. Es una limitación conceptual del agregado, no un defecto del método: las cuentas registran transacciones, y las unidades que no se producen no son transacciones.",
          ],
          cierre:
            "El punto que más rendimiento da es el último: buscar el coste del monopolio en el PIB es buscarlo donde por construcción no puede estar. Se estima con datos de empresas y modelos de costes, y siempre con un margen de incertidumbre amplio.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el ingreso marginal del monopolista está por debajo del precio?", a: "Porque para vender una unidad más tiene que bajar el precio de todas las que ya vendía, no solo el de la nueva. El ingreso marginal es el precio menos esa pérdida sobre las unidades anteriores. En competencia esa pérdida no existe porque la empresa puede vender más sin mover el precio." },
            { q: "Con P = 100 − Q y CMg = 20, ¿cuánto vale la pérdida irrecuperable de eficiencia?", a: "800. El monopolio produce 40 unidades y la competencia produciría 80; las 40 que faltan valían para el comprador entre 20 y 60. El área del triángulo es ½ · (60 − 20) · (80 − 40) = 800. No debe confundirse con los 2.400 que pierde el consumidor: 1.600 de esos son transferencia al monopolista." },
            { q: "Una empresa tiene el 90 % de su mercado. ¿Tiene mucho poder de mercado?", a: "No se puede saber con ese dato. Lo que determina el poder de mercado es la elasticidad de la demanda que afronta, es decir, si el comprador tiene alternativas fuera de ese mercado y si la entrada es libre. El índice de Lerner es el inverso de esa elasticidad, no una función de la cuota." },
            { q: "¿En qué sentido la discriminación perfecta es eficiente?", a: "Produce la misma cantidad que la competencia perfecta, porque el monopolista vende a todo el que valore el bien por encima del coste marginal. La pérdida irrecuperable desaparece. Lo que ocurre es que todo el excedente va al vendedor, así que es eficiente y a la vez extremadamente desigual: eficiencia y equidad son criterios distintos." },
            { q: "¿Por qué no se regula siempre un monopolio natural fijando el precio igual al coste marginal?", a: "Porque con costes fijos grandes el coste medio está por encima del marginal, así que ese precio genera pérdidas iguales al coste fijo y la empresa necesita una subvención permanente, financiada con impuestos que distorsionan en otro sitio. Fijar el precio al coste medio la hace viable a cambio de renunciar a parte de la eficiencia." },
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
              q: "¿Puede un monopolista fijar el precio que quiera?",
              opciones: [
                "Sí: por eso es monopolista",
                "No: elige un punto de la curva de demanda, y esta le impone la relación entre precio y cantidad",
                "Sí, mientras cubra sus costes",
                "No, porque la regulación se lo impide en la mayoría de sectores",
              ],
              correcta: 1,
              porque: [
                "Ser el único vendedor no elimina a los compradores. Un precio muy alto deja la cantidad en casi nada, y el beneficio con ella.",
                "Puede elegir precio o cantidad, pero no ambos. Toda su libertad consiste en escoger sobre qué punto de la demanda se sitúa.",
                "Cubrir costes es una condición de supervivencia, no el límite de lo que puede cobrar: la demanda le limita mucho antes que los costes.",
                "La regulación existe en algunos sectores, pero la restricción de fondo es la demanda y opera esté o no regulado.",
              ],
            },
            {
              q: "Un monopolio reduce el excedente del consumidor en 2.400 y obtiene un beneficio de 1.600. ¿Cuánto cuesta en eficiencia?",
              opciones: [
                "2.400: todo lo que pierde el consumidor",
                "800: lo que desaparece y no aparece como beneficio de nadie",
                "4.000, sumando pérdida del consumidor y beneficio del monopolista",
                "1.600, que es lo que se transfiere",
              ],
              correcta: 1,
              porque: [
                "De esos 2.400, la mayor parte cambia de manos en vez de destruirse. Contarlos todos infla el coste del monopolio.",
                "La pérdida irrecuperable es la parte del excedente que no llega a nadie: intercambios que habrían beneficiado a ambas partes y ya no ocurren. Es lo único que justifica intervenir por razones de eficiencia.",
                "Sumarlos cuenta doble: el beneficio del monopolista es parte de lo que pierde el consumidor, no algo adicional.",
                "La transferencia es precisamente lo que no se pierde. Puede ser objetable por reparto, pero no por eficiencia.",
              ],
            },
            {
              q: "¿Por qué un monopolista nunca produce en el tramo inelástico de la demanda?",
              opciones: [
                "Porque ahí el beneficio sería negativo",
                "Porque subir el precio aumentaría el ingreso y reduciría el coste a la vez",
                "Porque en ese tramo la demanda es demasiado sensible al precio",
                "Porque la regulación se lo prohíbe",
              ],
              correcta: 1,
              porque: [
                "El beneficio podría ser positivo en ese tramo; lo que ocurre es que sería mayor moviéndose fuera de él.",
                "Con $|\\varepsilon| < 1$, subir el precio sube el ingreso total y a la vez baja la cantidad, y con ella el coste. Ninguna empresa deja pasar una mejora doble, así que el óptimo cae siempre en el tramo elástico.",
                "En el tramo inelástico la demanda es poco sensible, no mucho. La confusión invierte la definición.",
                "Es un resultado del modelo, no una norma. Sale de maximizar beneficio sin ninguna restricción legal.",
              ],
            },
            {
              q: "¿Debe trocearse un monopolio natural en varias empresas?",
              opciones: [
                "Sí: más empresas siempre significa más competencia",
                "No: por definición una sola produce más barato, así que trocearlo eleva el coste de abastecer el mercado",
                "Sí, si el sector es estratégico",
                "No, porque las economías de escala desaparecerían y subiría el precio",
              ],
              correcta: 1,
              porque: [
                "Cuando hay economías de escala en todo el rango relevante, duplicar infraestructuras multiplica el coste sin añadir eficiencia.",
                "El problema del monopolio natural no se resuelve con estructura sino con regulación del precio o con subastas por el mercado. Partirlo empeora lo que se quería mejorar.",
                "El carácter estratégico puede justificar propiedad pública o regulación, pero no cambia la aritmética de los costes.",
                "El razonamiento apunta en la dirección correcta pero confunde la conclusión: las economías de escala no desaparecen, simplemente dejan de aprovecharse.",
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
            { ref: "Varian, Microeconomía intermedia", nota: "los capítulos de monopolio y comportamiento del monopolista, con la construcción del ingreso marginal y los tres grados de discriminación." },
            { ref: "Tirole, La teoría de la organización industrial", nota: "el tratamiento serio de la discriminación de segundo grado y la autoselección, que aquí solo se enuncia." },
            { ref: "Laffont y Tirole, A Theory of Incentives in Procurement and Regulation", nota: "por qué regular no es fijar un precio sino diseñar un contrato bajo información asimétrica; enlaza con la ficha 2.10." },
            { ref: "CNMC, informes y resoluciones de competencia", nota: "casos reales españoles donde se discute qué es poder de mercado y cómo se acredita, útil para aterrizar el índice de Lerner." },
          ],
        },
      ],
    },
  ],
};
