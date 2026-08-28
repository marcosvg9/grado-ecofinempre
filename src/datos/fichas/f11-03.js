/* Ficha 11.03 — Guerras, hiperinflaciones y el final del patrón oro. */

export default {
  codigo: "11.03",
  titulo: "Guerras, hiperinflaciones y el final del patrón oro",
  nivel: 3,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Cuando un Estado necesita gastar más de lo que puede recaudar y nadie le presta, acaba emitiendo dinero. Es un impuesto que no se vota y que se recauda solo, y tiene la particularidad de que destruir su propia base imponible es cuestión de meses.",
  requiere: "11.02 La primera globalización · 3.02 Inflación y precios · 3.11 Deuda pública y sostenibilidad",
  abre: "11.04 La Gran Depresión · 3.08 Política monetaria · 11.06 Estanflación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La Primera Guerra Mundial rompió el orden de la ficha anterior en cuestión de semanas. Todos los beligerantes **suspendieron la convertibilidad** en 1914, porque mantener el compromiso con el oro era incompatible con financiar una guerra industrial. Y de ahí sale el problema que ocupa esta ficha: **cómo se paga una guerra**, y qué ocurre cuando ninguna de las formas ortodoxas de pagarla basta.",
            "**Un Estado tiene exactamente tres formas de financiar un gasto**, y conviene enunciarlas juntas porque la elección entre ellas es siempre política. Puede **recaudar impuestos**, lo que es visible y encuentra resistencia. Puede **endeudarse**, lo que traslada el coste al futuro y exige que alguien esté dispuesto a prestar. O puede **emitir dinero**, que es la vía que no requiere ni aprobación parlamentaria ni acreedores voluntarios. La tercera se usa cuando las dos primeras se agotan, y por eso la hiperinflación es casi siempre un síntoma de un **Estado fiscalmente roto**, no un error técnico de un banco central.",
            "**La emisión funciona como un impuesto y merece la pena verlo así.** Quien tiene saldos en efectivo ve cómo su poder de compra se transfiere a quien emite: es el **señoreaje**, y su versión inflacionaria se llama **impuesto inflacionario**. Su base imponible son los saldos monetarios reales que el público mantiene, y su tipo es la tasa de inflación. Ahí está la trampa: **al subir el tipo, la base se hunde**, porque la gente deja de tener dinero y corre a gastarlo o a cambiarlo por moneda extranjera. Hay una tasa que maximiza la recaudación y, más allá, emitir más recauda menos.",
            "**La velocidad de circulación es la variable que convierte una inflación alta en una hiperinflación.** En condiciones normales la velocidad es estable y la teoría cuantitativa de la ficha 11.02 funciona razonablemente. En una inflación acelerada, mantener dinero se vuelve ruinoso, todo el mundo se deshace de él en cuanto lo recibe y **la velocidad se dispara**, lo que multiplica el efecto de cada nueva emisión sobre los precios. El proceso se realimenta: más precios exigen más emisión para pagar lo mismo, y más emisión eleva más los precios.",
            "**El caso alemán de 1923 es el arquetipo y conviene tener sus magnitudes en la cabeza.** El origen fue fiscal y político: una economía destrozada, reparaciones de guerra que el país no podía pagar, la ocupación del Ruhr y una resistencia pasiva financiada con emisión. En el punto álgido, los precios se multiplicaban por más de doscientos noventa cada mes. El episodio terminó de forma brusca en noviembre de 1923 con una **reforma monetaria** que introdujo una moneda nueva con respaldo creíble y, sobre todo, con el compromiso simultáneo de **cerrar el agujero fiscal**. Esa es la lección general: las hiperinflaciones no se acaban despacio, se acaban de golpe **cuando cambia el régimen fiscal**, no cuando el banco central promete moderarse.",
            "**El intento de restaurar el patrón oro en los años veinte fue el otro gran error del periodo.** Varios países volvieron a la convertibilidad con paridades mal elegidas: el Reino Unido lo hizo en 1925 a la paridad de antes de la guerra, lo que sobrevaloraba la libra y obligaba a una deflación interna con el consiguiente desempleo y conflictividad, hasta la huelga general de 1926. Keynes lo denunció por escrito en su momento. Lo que se restauró, además, ya no era el sistema anterior: **faltaban la credibilidad política y la cooperación entre bancos centrales** que lo habían sostenido, y sobraban deudas de guerra y reparaciones enredando a todos con todos.",
            "**El resultado fue un sistema rígido sobre una economía frágil**, y esa combinación es la que convirtió una recesión en la Gran Depresión de la ficha siguiente. Conviene retener la conclusión de fondo, porque es transferible: **un régimen monetario no se sostiene solo por su diseño técnico, sino por la voluntad política de asumir su coste**. Restaurar la forma sin las condiciones que la hacían viable fue lo que hizo del patrón oro de entreguerras una trampa en lugar de un ancla.",
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
            { nom: "Restricción presupuestaria del Estado", sub: "Las tres vías, y la tercera es la última.", cols: ["$G - T = \\Delta\\text{Deuda} + \\Delta\\text{Base monetaria}$"] },
            { nom: "Señoreaje", sub: "Recursos reales obtenidos al emitir.", cols: ["$S = \\dfrac{\\Delta M}{P}$"] },
            { nom: "Impuesto inflacionario", sub: "Base = saldos reales; tipo = inflación.", cols: ["$\\mathrm{II} = \\pi \\cdot \\dfrac{M}{P}$"] },
            { nom: "La trampa", sub: "Subir el tipo destruye la base imponible.", cols: ["↑$\\pi \\Rightarrow$ ↓$(M/P) \\Rightarrow$ recaudación puede caer"] },
            { nom: "Definición de Cagan", sub: "El umbral convencional de hiperinflación.", cols: ["$\\pi$ > 50 % mensual"] },
            { nom: "Tiempo de duplicación", sub: "La traducción legible de cualquier tasa.", cols: ["$t = \\dfrac{\\ln 2}{\\ln(1+\\pi)}$"] },
            { nom: "Papel de la velocidad", sub: "Lo que convierte inflación alta en hiper.", cols: ["M·V = P·Y, con V creciendo con $\\pi$"] },
            { nom: "Fin de una hiperinflación", sub: "No es gradual: es un cambio de régimen.", cols: ["reforma monetaria + cierre del déficit"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: qué significa el 29.500 % mensual",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las cifras de hiperinflación son tan grandes que dejan de significar nada. La única forma de recuperar la intuición es traducirlas a **cada cuánto se duplican los precios**, que es una magnitud que la cabeza sí maneja.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Tasa", "Los precios se duplican cada", "Qué se ve en la calle"],
          filas: [
            ["Objetivo de un banco central", "2 % anual", "35 años", "Nadie repasa precios por inflación"],
            ["Inflación alta", "20 % anual", "3,8 años", "Se renegocian contratos y salarios cada año"],
            ["Umbral de Cagan", "50 % mensual", "1,7 meses", "Los precios se marcan a diario"],
            { celdas: ["Alemania, otoño de 1923", "29.500 % mensual", "3,7 días", "Se cobra dos veces al día y se gasta al salir"], clase: "total" },
          ],
          nota: "La última fila equivale a una inflación **diaria del 20,9 %**. Un salario cobrado por la mañana perdía la mitad de su valor antes del fin de semana, y de ahí las escenas documentadas de trabajadores a los que se pagaba dos veces al día y que salían corriendo a comprar cualquier cosa. Obsérvese lo que ocurre con el dinero como institución: **deja de servir para las tres cosas que hace** —medir valor, guardarlo y liquidar deudas—, y la economía retrocede al trueque y a la moneda extranjera. Ese es el daño real, mucho mayor que la pérdida de poder adquisitivo de un mes concreto.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora el mecanismo fiscal, que es lo que de verdad hay que entender.** Supongamos un Estado cuyos ciudadanos mantienen saldos en efectivo equivalentes al **10 % del PIB** y que necesita cubrir un déficit emitiendo. El impuesto inflacionario recauda la inflación multiplicada por esos saldos, pero **los saldos que la gente quiere mantener caen cuando la inflación sube**, porque tener dinero pasa a ser caro. El resultado de multiplicar un tipo creciente por una base que se hunde es el siguiente.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Inflación %", y: "% del PIB" },
          dominio: { x: [0, 400], y: [0, 10.5] },
          marcasX: [0, 100, 200, 300, 400],
          marcasY: [0, 2, 4, 6, 8, 10],
          series: [
            {
              nombre: "Saldos reales",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [400, 0.69],
              puntos: [[0, 10], [20, 8.75], [40, 7.66], [60, 6.7], [80, 5.87], [100, 5.13], [120, 4.49], [150, 3.68], [180, 3.01], [220, 2.31], [260, 1.77], [300, 1.35], [350, 0.97], [400, 0.69]],
            },
            {
              nombre: "Lo recaudado",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [400, 2.78],
              puntos: [[0, 0], [20, 1.75], [40, 3.06], [60, 4.02], [80, 4.69], [100, 5.13], [120, 5.39], [150, 5.52], [180, 5.42], [220, 5.08], [260, 4.59], [300, 4.06], [350, 3.39], [400, 2.78]],
            },
          ],
          puntos: [
            { x: 150, y: 5.52, etiqueta: "máximo", guias: true },
          ],
          nota: "Las dos curvas son la trampa dibujada. La discontinua son los **saldos reales que el público quiere mantener**: valen el 10 % del PIB con precios estables y se desploman al 3,7 % con una inflación del 150 %, porque guardar dinero se vuelve ruinoso. La continua es **lo que el Estado recauda**, que es el producto de la inflación por esos saldos: sube, alcanza un máximo del **5,5 % del PIB** y **cae**. Pasado ese punto, emitir más deprisa recauda menos, y ahí es donde el proceso se vuelve explosivo: el Estado necesita los mismos recursos reales, ve caer lo que obtiene y responde acelerando. Lo que desde fuera parece una locura monetaria es, por dentro, una aritmética fiscal atrapada. Y explica por qué estos episodios terminan de golpe: **sin cerrar el déficit no hay promesa monetaria creíble**, y con él cerrado la reforma funciona en días.",
        },
        {
          tipo: "tabla",
          cabecera: ["Vía de financiación", "Requiere", "Coste político", "Límite"],
          filas: [
            ["Impuestos", "Aprobación parlamentaria", "Alto e inmediato", "Resistencia del contribuyente"],
            ["Deuda", "Acreedores dispuestos", "Diferido", "Que alguien quiera prestar"],
            { celdas: ["Emisión", "Nada", "Invisible al principio", "Destruye su propia base"], clase: "total" },
          ],
          nota: "La tabla explica por qué la emisión es siempre **la tercera opción y nunca la primera**: es la única que no exige convencer a nadie. Un Estado con capacidad recaudatoria y acceso al crédito no llega ahí. Por eso las hiperinflaciones se concentran en posguerras, revoluciones, colapsos institucionales y rupturas de Estados, y no en países con administraciones tributarias funcionando. La conclusión operativa es la que interesa para el resto del bloque: **una hiperinflación es un síntoma fiscal**, y tratarla como un problema de política monetaria es confundir la fiebre con la infección.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la vuelta de la libra al oro en 1925",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El otro gran error monetario del periodo no fue emitir de más sino exactamente lo contrario, y merece estudiarse porque muestra que el daño de un régimen monetario mal calibrado puede ser tan grande como el de una hiperinflación, solo que más lento y peor entendido.",
            "**La decisión.** En 1925 el Reino Unido restauró la convertibilidad de la libra en oro a la **paridad anterior a la guerra**, la de 1914. La decisión tenía una lógica de honor y de reputación: volver a la paridad de siempre significaba que quien había prestado en libras cobraría en libras del mismo valor, y que Londres seguiría siendo el centro financiero del mundo. Era una decisión sobre la credibilidad del país tanto como sobre su economía.",
            "**El problema es que los precios británicos habían subido más que los de sus competidores durante la guerra.** Volver a la paridad antigua con precios más altos significaba que la libra quedaba **sobrevalorada**, es decir, que los productos británicos eran caros en el exterior. Como el tipo de cambio ya no podía moverse, el ajuste tenía que hacerse por dentro: **bajar precios y salarios nominales** hasta recuperar la competitividad perdida. Es la devaluación interna de la ficha 10.09, ochenta años antes del euro y con el mismo mecanismo.",
            "**Keynes lo escribió antes de que ocurriera**, en un panfleto sobre las consecuencias económicas de aquella decisión, y su argumento era exactamente el que hoy repetiríamos: los salarios nominales no bajan sin conflicto, así que lo que bajaría sería el empleo. La industria del carbón, expuesta a la competencia exterior, fue la primera en intentar recortar salarios, y de ahí salió la huelga de los mineros y después la **huelga general de 1926**. El país pasó los años veinte con desempleo alto mientras el resto del mundo crecía.",
            "**Y el desenlace confirma el diagnóstico.** El Reino Unido abandonó el patrón oro en 1931, y los países que lo dejaron antes se recuperaron antes de la Depresión: existe una correlación bastante clara entre la fecha de salida del oro y la fecha de inicio de la recuperación, que es una de las evidencias más citadas de la ficha siguiente. El ancla que se había restaurado por prestigio acabó siendo, como escribió Eichengreen, unas **esposas doradas**.",
            "**Lo que este caso enseña, y es lo que lo hace valioso.** Que la elección de una paridad no es un detalle técnico sino una decisión distributiva enorme: favorece a los acreedores y a los tenedores de deuda pública, y perjudica a los deudores y a los trabajadores de sectores expuestos. Que un compromiso monetario adoptado por razones de reputación puede costar una década de desempleo. Y que **la reversibilidad importa**: un régimen del que se puede salir cuando el coste se vuelve insoportable es más robusto que uno que exige credibilidad absoluta, porque este último solo puede romperse de forma catastrófica.",
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
            { t: "Tratar la hiperinflación como un error técnico del banco central", d: "Es un síntoma fiscal: un Estado que no puede recaudar ni endeudarse acaba emitiendo, porque es la única vía que no exige convencer a nadie. Por eso estos episodios se concentran en posguerras, revoluciones y colapsos institucionales, y por eso no terminan con promesas monetarias sino con reformas que cierran el déficit." },
            { t: "Creer que emitir más siempre recauda más", d: "El impuesto inflacionario tiene por base los saldos reales que el público mantiene, y esa base se hunde cuando la inflación sube porque tener dinero pasa a ser ruinoso. Pasado cierto punto, emitir más deprisa recauda menos, y ahí es donde el proceso se vuelve explosivo." },
            { t: "Ignorar el papel de la velocidad de circulación", d: "En condiciones normales es estable y la teoría cuantitativa funciona. En una inflación acelerada, todo el mundo se deshace del dinero en cuanto lo recibe y la velocidad se dispara, multiplicando el efecto de cada emisión. Es lo que separa una inflación alta de una hiperinflación." },
            { t: "Pensar que las hiperinflaciones se corrigen gradualmente", d: "Terminan de golpe, cuando cambia el régimen fiscal y se introduce una moneda con respaldo creíble. Una desaceleración lenta no es un final: sin cerrar el agujero presupuestario, cualquier promesa de moderación monetaria carece de credibilidad porque el Estado seguirá necesitando los recursos." },
            { t: "Medir el daño solo por la pérdida de poder adquisitivo", d: "Lo grave es que el dinero deja de cumplir sus tres funciones: medir valor, conservarlo y liquidar deudas. La economía retrocede al trueque y a la moneda extranjera, los contratos a plazo desaparecen y el crédito se evapora. Eso destruye mucho más valor que la caída de los salarios reales de un mes." },
            { t: "Ver la elección de una paridad como una decisión técnica", d: "Es una decisión distributiva de primer orden: favorece a acreedores y tenedores de deuda pública y perjudica a deudores y a trabajadores de sectores expuestos. La libra de 1925 costó al Reino Unido una década de desempleo y una huelga general por una cuestión de reputación financiera." },
            { t: "Suponer que un compromiso más rígido es siempre más creíble", d: "Un régimen del que se puede salir cuando el coste se vuelve insoportable es más robusto que uno que exige credibilidad absoluta, porque el segundo solo puede romperse de forma catastrófica. El patrón oro de entreguerras tenía la forma del anterior y ninguna de las condiciones políticas que lo habían sostenido." },
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
            "Una hiperinflación es también un desastre estadístico, y entender por qué aclara para qué sirven varias convenciones que damos por supuestas.",
          ],
          lista: [
            "Con precios que se duplican cada pocos días, **la distinción entre valor nominal y volumen deja de poder establecerse**: no existe un nivel de precios del trimestre porque no hay un precio, hay una trayectoria. Todo el aparato de deflactación de la ficha 10.08 supone que se puede hablar de «los precios de un periodo», y esa suposición se rompe.",
            "El **señoreaje** aparece en la contabilidad nacional como un ingreso del banco central que acaba transferido a las administraciones públicas, y por tanto en la cuenta de renta de la ficha 10.06. Es la única figura fiscal que no requiere norma tributaria alguna y que, sin embargo, se registra como cualquier otro ingreso.",
            "La **erosión de la deuda por inflación** es un flujo real muy grande que las cuentas no registran como tal: la deuda se contabiliza a valor nominal, así que la pérdida de los acreedores y la ganancia del Estado no aparecen en ningún saldo de la secuencia. Es lo que la ficha 3.11 llamaba represión financiera, y es invisible en el déficit publicado.",
            "El uso de **moneda extranjera** dentro del país descoloca las estadísticas monetarias y de balanza de pagos, porque una parte creciente de las transacciones deja de pasar por el sistema financiero nacional. Los agregados monetarios pierden significado justo cuando más se necesitan.",
            "Y las **series históricas de PIB real** de países que atravesaron hiperinflaciones son especialmente frágiles, porque el deflactor con el que se construyen es precisamente la magnitud que se vuelve inestimable. Es un caso extremo del aviso de la ficha 4.03 sobre tratar estimaciones como mediciones.",
          ],
          cierre:
            "La lección general es que **la estadística económica presupone estabilidad monetaria**. No es que mida mal durante una hiperinflación: es que sus conceptos —nivel de precios, volumen, valor real— dejan de estar definidos. Eso da la medida de lo que un régimen monetario funcional aporta más allá de lo que se le suele atribuir.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué se dice que una hiperinflación es un problema fiscal y no monetario?", a: "Porque un Estado emite dinero cuando no puede recaudar ni endeudarse: es la única vía que no exige aprobación parlamentaria ni acreedores voluntarios. Por eso estos episodios se concentran en posguerras y colapsos institucionales, y por eso terminan cuando se cierra el déficit y se introduce una moneda con respaldo, no cuando el banco central promete moderarse." },
            { q: "Los precios subían un 29.500 % mensual. ¿Qué significa eso en la vida diaria?", a: "Una inflación diaria del 20,9 %, es decir, los precios se duplicaban cada 3,7 días. Un salario cobrado por la mañana perdía la mitad de su valor antes del fin de semana, y de ahí que se pagara dos veces al día. Lo grave no es la pérdida de poder adquisitivo sino que el dinero deja de servir para medir valor, guardarlo y liquidar deudas." },
            { q: "¿Por qué emitir más deprisa puede recaudar menos?", a: "Porque el impuesto inflacionario tiene por tipo la inflación y por base los saldos reales que el público quiere mantener, y esa base se desmorona cuando tener dinero se vuelve ruinoso. Pasado el máximo de la curva, más emisión da menos recursos reales, y el Estado responde emitiendo aún más deprisa. Ahí es donde el proceso se vuelve explosivo." },
            { q: "¿Qué papel juega la velocidad de circulación?", a: "Es lo que separa una inflación alta de una hiperinflación. En condiciones normales es estable; cuando la inflación se acelera, todo el mundo se deshace del dinero en cuanto lo recibe y la velocidad se dispara, multiplicando el efecto de cada nueva emisión sobre los precios y realimentando el proceso." },
            { q: "¿Por qué la vuelta de la libra al oro en 1925 salió tan cara?", a: "Porque los precios británicos habían subido más que los de sus competidores durante la guerra, así que restaurar la paridad de 1914 dejaba la libra sobrevalorada. Con el tipo de cambio fijo, el ajuste tenía que hacerse bajando precios y salarios nominales, y como los salarios no bajan sin conflicto, lo que bajó fue el empleo: desempleo alto durante toda la década y la huelga general de 1926." },
            { q: "¿Por qué un compromiso monetario más rígido no es necesariamente más creíble?", a: "Porque un régimen del que se puede salir cuando el coste se vuelve insoportable admite un ajuste ordenado, mientras que uno que exige credibilidad absoluta solo puede romperse de forma catastrófica. El patrón oro de entreguerras tenía la forma del anterior pero ninguna de las condiciones políticas que lo habían sostenido, y eso lo convirtió en una trampa en lugar de un ancla." },
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
              q: "¿Qué es en el fondo una hiperinflación?",
              opciones: [
                "El resultado de una espiral de precios y salarios sin control",
                "Un error técnico de un banco central mal dirigido",
                "Un síntoma fiscal: un Estado que no puede recaudar ni endeudarse acaba emitiendo, porque es la única vía que no exige convencer a nadie",
                "Una consecuencia inevitable de los tipos de cambio flotantes",
              ],
              correcta: 2,
              porque: [
                "La espiral precios-salarios es un mecanismo de propagación, no el origen del gasto que se está monetizando.",
                "Ningún banco central llega a multiplicar los precios por miles por descuido: la emisión responde a una necesidad de gasto que no encuentra otra vía.",
                "Por eso estos episodios acompañan a guerras, revoluciones y rupturas del Estado, y no a errores de política monetaria en tiempos normales.",
                "Ha habido hiperinflaciones con tipos fijos y con flotantes: el régimen cambiario no es la causa.",
              ],
            },
            {
              q: "Un Estado emite cada vez más dinero para financiarse. ¿Recauda cada vez más?",
              opciones: [
                "No: la base del impuesto son los saldos reales que el público mantiene, y esa base se hunde cuando la inflación sube",
                "Sí, aunque a costa de más inflación",
                "Sí: cada billete nuevo es poder de compra que el Estado se apropia",
                "No, porque la emisión está limitada por los estatutos del banco central",
              ],
              correcta: 0,
              porque: [
                "Tener dinero pasa a ser carísimo y todo el mundo se deshace de él en cuanto lo recibe. Hay un punto a partir del cual emitir más recauda menos.",
                "La inflación no es solo el coste: es lo que destruye la base sobre la que se recauda.",
                "Lo es mientras alguien conserve dinero; el problema es que deja de conservarlo.",
                "En estos episodios los estatutos se cambian o se ignoran: la restricción operativa es económica, no legal.",
              ],
            },
            {
              q: "¿Cómo terminan las hiperinflaciones?",
              opciones: [
                "Con un control de precios que rompa las expectativas",
                "Gradualmente, a medida que la política monetaria se endurece",
                "De golpe, cuando cambia el régimen fiscal y se introduce una moneda con respaldo creíble",
                "Cuando la moneda extranjera sustituye por completo a la nacional",
              ],
              correcta: 2,
              porque: [
                "Los controles de precios sin ajuste fiscal producen desabastecimiento y mercado negro, y la inflación reaparece al levantarlos.",
                "El endurecimiento monetario sin ajuste fiscal es insostenible: el gasto sigue ahí y hay que financiarlo.",
                "Una desaceleración lenta no es un final: sin cerrar el agujero fiscal, la inflación vuelve. Lo que cambia el rumbo es el régimen, no la intensidad.",
                "La dolarización de hecho es una consecuencia del episodio, no el mecanismo que lo cierra.",
              ],
            },
            {
              q: "Al restaurar la convertibilidad, elegir la paridad de la moneda, ¿es una decisión técnica?",
              opciones: [
                "No: es una decisión distributiva de primer orden entre acreedores y deudores",
                "Sí, salvo que existan desequilibrios comerciales severos",
                "No, pero sus efectos se reparten de forma homogénea entre la población",
                "Sí: se trata de calcular el tipo que equilibra la balanza de pagos",
              ],
              correcta: 0,
              porque: [
                "Una paridad alta favorece a acreedores y tenedores de deuda pública, y perjudica a deudores y a trabajadores de los sectores expuestos a la competencia exterior.",
                "La severidad del desequilibrio cambia la magnitud del problema, no su naturaleza distributiva.",
                "El reparto es cualquier cosa menos homogéneo, y ahí está el conflicto político que rodea siempre a estas decisiones.",
                "Existe ese cálculo y no es lo que decide: la paridad elegida reparte ganancias y pérdidas entre grupos concretos.",
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
            { ref: "Eichengreen, Golden Fetters", nota: "la obra de referencia sobre el patrón oro de entreguerras y por qué restaurarlo amplificó la Depresión." },
            { ref: "Sargent, «The Ends of Four Big Inflations», 1982", nota: "el artículo que estableció que las hiperinflaciones terminan de golpe y por cambio de régimen fiscal; corto y decisivo." },
            { ref: "Keynes, Las consecuencias económicas de Mr. Churchill, 1925", nota: "la crítica escrita antes de que ocurriera lo que predijo; un modelo de argumentación económica aplicada." },
            { ref: "Cagan, «The Monetary Dynamics of Hyperinflation», 1956", nota: "de aquí sale el umbral del 50 % mensual y el análisis de la demanda de saldos reales bajo inflación acelerada." },
            { ref: "Feldman, The Great Disorder", nota: "la historia política y social de la hiperinflación alemana; imprescindible para no reducirla a una curva." },
          ],
        },
      ],
    },
  ],
};
