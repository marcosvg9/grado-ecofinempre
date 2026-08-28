/* Ficha 3.11 — Deuda pública y sostenibilidad fiscal. */

export default {
  codigo: "3.11",
  titulo: "Deuda pública y sostenibilidad fiscal",
  nivel: 3,
  bloque: "Macroeconomía",
  tiempo: "5 h",
  nucleo:
    "La sostenibilidad no es un nivel de deuda sino una trayectoria. Ningún umbral —ni el 60 %, ni el 90 %— separa lo sostenible de lo que no lo es: quien decide la pendiente es la diferencia entre el tipo de interés que paga la deuda y el crecimiento nominal de la economía.",
  requiere: "3.01 PIB y agregados · 3.02 Inflación y deflactor · 3.09 Crecimiento y productividad",
  abre: "10.03 Sistema fiscal español · 11.08 Crisis financieras · 12.09 Cuentas de acumulación",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta «¿es sostenible esta deuda?» está mal planteada si se responde mirando un número. Un país con una deuda del **105 % del PIB** que baja un punto al año está en mejor situación que otro con el **60 %** que sube tres, y el segundo llegará al nivel del primero en poco más de una década. **La sostenibilidad es una propiedad de la trayectoria, no del nivel.** El umbral del 60 % del Tratado de Maastricht es una convención de gobernanza, no un resultado analítico, y la literatura que intentó fijar un umbral universal a partir del cual la deuda daña el crecimiento no ha resistido bien la revisión de sus datos.",
            "Lo que gobierna la trayectoria es una identidad contable simple. La deuda de un año es la del anterior más los intereses devengados menos el **saldo primario**, que es el saldo público excluyendo esos intereses. Dividiendo todo por el PIB para trabajar en ratios, aparece el término que lo explica casi todo: la deuda heredada crece al tipo de interés y el PIB, que es el denominador, crece a su propia tasa. Si el interés supera al crecimiento, el ratio sube **aunque las cuentas del año estén equilibradas antes de intereses**. Si el crecimiento supera al interés, el ratio baja incluso con un déficit primario moderado.",
            "Ese término, **(r − g)**, se conoce como **efecto bola de nieve**. Es la razón de que dos países con la misma deuda y la misma disciplina presupuestaria acaben en sitios opuestos, y de que la consolidación fiscal sea mucho más barata en expansión que en recesión: en recesión *g* cae, la bola de nieve empuja al alza y hace falta un esfuerzo primario mayor para el mismo resultado. Conviene precisar qué es cada letra. **r no es el tipo de mercado de hoy**, sino el **tipo implícito medio** de la deuda viva, que se mueve despacio porque la cartera se renueva por tramos; y **g es el crecimiento nominal**, no el real, porque el denominador del ratio es el PIB a precios corrientes. Emparejar un tipo nominal con un crecimiento real es el error de signo más frecuente de todo el tema.",
            "De ahí sale el concepto operativo: el **saldo primario que estabiliza**. Es el superávit —o déficit— antes de intereses que deja el ratio exactamente donde estaba. Cuando *r > g* es un superávit, y tanto mayor cuanto mayor sea la deuda heredada, porque la bola de nieve actúa sobre todo el saldo vivo. Cuando *r < g* es negativo: la economía puede permitirse un déficit primario permanente sin que el ratio crezca. Esa asimetría explica buena parte del debate de la última década, cuando los tipos reales negativos hicieron que la vieja aritmética pareciera suspendida, y también por qué el debate se cerró de golpe cuando los tipos subieron.",
            "La tentación es leer *r < g* como dinero gratis. No lo es, por tres razones. La primera es que *r* y *g* **no son independientes de la propia deuda**: si el mercado percibe riesgo, exige prima, y *r* sube precisamente cuando más falta hace que baje. La segunda es que la relación puede invertirse con rapidez, mientras que la deuda acumulada permanece; una posición cómoda con *r − g* de −1 punto se vuelve exigente si pasa a +3, como muestra el ejemplo numérico. La tercera es que el análisis anterior supone que el Estado se puede refinanciar, y esa es justamente la hipótesis que falla en una crisis: el problema inmediato rara vez es de solvencia a treinta años, sino de **liquidez** —vencimientos concentrados que hay que renovar cuando nadie quiere comprar—, y por eso la vida media de la deuda importa tanto como su volumen. La ficha 11.08 recorre ese patrón repetido.",
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
            { nom: "Dinámica de la deuda", sub: "La identidad de la que sale todo lo demás.", cols: ["$\\Delta b = \\dfrac{r - g}{1 + g}\\,b_{-1} - sp$"] },
            { nom: "b", sub: "Deuda bruta sobre PIB, en tanto por ciento.", cols: ["Deuda de Maastricht: bruta, consolidada y a valor nominal"] },
            { nom: "r", sub: "No es el tipo de mercado de hoy.", cols: ["Tipo implícito medio: $\\dfrac{\\text{intereses del año}}{\\text{deuda viva del anterior}}$"] },
            { nom: "g", sub: "Nominal, porque el denominador va a precios corrientes.", cols: ["$g \\approx$ crecimiento real $+$ deflactor del PIB (ficha 3.02)"] },
            { nom: "sp", sub: "Saldo primario: el saldo público sin intereses.", cols: ["sp = ingresos − gastos excluidos los intereses"] },
            { nom: "Efecto bola de nieve", sub: "El término que decide la pendiente.", cols: ["$\\dfrac{r - g}{1 + g}\\,b_{-1}$"] },
            { nom: "Saldo primario que estabiliza", sub: "El que deja $\\Delta b = 0$.", cols: ["$sp^* = b_{-1}\\,\\dfrac{r - g}{1 + g}$"] },
            { nom: "Signo de sp*", sub: "La asimetría clave del tema.", cols: ["r > g → superávit · r = g → cero · r < g → cabe déficit"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: la misma deuda, dos destinos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Partimos siempre del mismo sitio: una deuda del **105 % del PIB**. Lo único que cambia entre escenarios es el par (*r*, *g*) y el saldo primario. Se verá que el punto de partida no informa de nada por sí solo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Tipo implícito r", "Crecimiento nominal g", "r − g", "Saldo primario", "Deuda el año siguiente"],
          filas: [
            ["Favorable", "3,0 %", "4,0 %", "−1,0 pp", "0,0 %", "103,99 %"],
            ["Neutral", "4,0 %", "4,0 %", "0,0 pp", "0,0 %", "105,00 %"],
            ["Adverso", "5,0 %", "2,0 %", "+3,0 pp", "0,0 %", "108,09 %"],
            { celdas: ["Adverso con ajuste", "5,0 %", "2,0 %", "+3,0 pp", "+3,09 %", "105,00 %"], clase: "total" },
          ],
          nota: "Las cuatro filas tienen **las mismas cuentas del año**: ninguna gasta más de lo que ingresa antes de intereses, salvo la última, que ahorra. Y sin embargo la deuda se mueve cuatro puntos entre la primera y la tercera. **Toda la diferencia es (r − g)**. La última fila calcula el superávit primario que estabiliza en el escenario adverso: sp* = 105 · 0,03 / 1,02 = **3,09 % del PIB**, un esfuerzo considerable solo para quedarse donde se estaba.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Años", y: "Deuda / PIB %" },
          dominio: { x: [0, 10], y: [90, 145] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [90, 100, 110, 120, 130, 140],
          series: [
            {
              nombre: "Adverso, sin superávit",
              color: "alerta",
              etiquetaEn: [1, 135],
              puntos: [[0, 105], [1, 108.09], [2, 111.27], [3, 114.54], [4, 117.91], [5, 121.38], [6, 124.95], [7, 128.62], [8, 132.4], [9, 136.3], [10, 140.31]],
            },
            {
              nombre: "Adverso con superávit del 3,09 %",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [3.2, 108.5],
              puntos: [[0, 105], [1, 105], [2, 105], [3, 104.99], [4, 104.99], [5, 104.99], [6, 104.99], [7, 104.99], [8, 104.98], [9, 104.98], [10, 104.98]],
            },
            {
              nombre: "Favorable, sin superávit",
              color: "acento",
              etiquetaEn: [1, 96],
              puntos: [[0, 105], [1, 103.99], [2, 102.99], [3, 102], [4, 101.02], [5, 100.05], [6, 99.09], [7, 98.13], [8, 97.19], [9, 96.26], [10, 95.33]],
            },
          ],
          nota: "Diez años bastan para que el mismo 105 % de partida acabe en **95,3 %** o en **140,3 %**, sin que ningún gobierno haya gastado un euro de más antes de intereses. La línea discontinua es el escenario adverso sostenido con el superávit que lo estabiliza: **el esfuerzo del 3,09 % anual solo compra quedarse quieto**.",
        },
        {
          tipo: "parrafos",
          items: [
            "Queda un detalle que descoloca a casi todo el mundo la primera vez. En el escenario adverso el Estado incurre en un **déficit del 5,15 % del PIB** —no tiene saldo primario, pero paga intereses—, y sin embargo el ratio de deuda solo sube **3,09 puntos**. Los números en euros lo aclaran: con un PIB de 100 y una deuda de 105, los intereses del 5 % son 5,25 €, así que la deuda pasa a 110,25 €; pero el PIB crece un 2 % y pasa a 102, de modo que el ratio es 110,25 / 102 = 108,09 %. **El crecimiento del denominador absorbe 2,06 puntos del déficit.** Es el mismo mecanismo por el que la inflación erosiona la deuda: sube el denominador sin que el numerador ya emitido se mueva.",
            "Ese efecto denominador explica también por qué la inflación inesperada beneficia al deudor público y perjudica al tenedor de bonos, y por qué la deuda indiciada a la inflación o emitida en moneda extranjera es cualitativamente distinta: en ambos casos el numerador se mueve con los precios y el alivio desaparece. Cuando esa erosión deja de ser un accidente y se organiza —tipos de interés mantenidos por debajo de la inflación, con la demanda de deuda asegurada por vía regulatoria—, recibe el nombre de **represión financiera**: una transferencia silenciosa del ahorrador al Estado que no figura como impuesto en ninguna cuenta. La ficha 11.03 muestra hasta dónde puede llevarse esa lógica.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué el 105 % puede ser sostenible y el 60 % no",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Póngase enfrente dos economías. La primera debe el **105 % del PIB**, paga un tipo implícito del 3 %, crece al 4 % nominal y tiene el saldo primario equilibrado: su deuda baja un punto al año y en una década está por debajo del 96 %. La segunda debe el **60 %**, paga el 6 % porque el mercado le exige prima, crece al 1 % y arrastra un déficit primario del 1 %: su bola de nieve es 60 · 0,05 / 1,01 = **2,97 puntos al año**, más el déficit, casi cuatro puntos anuales. En quince años supera a la primera. **El nivel de partida no ordenaba correctamente a las dos.**",
            "Lo interesante es que la segunda economía no puede resolverlo solo con austeridad. Su superávit primario estabilizador es del 2,97 % del PIB, y para llegar ahí desde un déficit del 1 % hace falta un ajuste de cuatro puntos, que a corto plazo **reduce el propio crecimiento nominal** y por tanto empeora la aritmética que pretendía arreglar. Ese es el argumento serio contra los ajustes bruscos en recesión: no es que la consolidación sea inútil, sino que su denominador se mueve en contra, y si el multiplicador del gasto es alto —cuestión empírica, ficha 3.04— el ratio puede subir durante los primeros años del ajuste.",
            "De ahí que el análisis moderno de sostenibilidad no produzca un veredicto sino un **abanico de trayectorias**: se simulan miles de sendas con distintos supuestos de tipo, crecimiento y saldo primario, y se mira qué proporción de ellas lleva a un ratio explosivo. Es el enfoque que emplean los organismos independientes de supervisión fiscal, la AIReF en España entre ellos. La respuesta útil nunca es «sostenible / insostenible», sino **con qué probabilidad y bajo qué supuestos**, y qué margen queda si el escenario se tuerce.",
            "Una última pieza que la aritmética no captura: **la estructura de vencimientos**. Dos países con idéntico ratio y idéntico (r − g) afrontan riesgos muy distintos si uno tiene una vida media de la deuda de ocho años y el otro de dos. El segundo debe volver al mercado cuatro veces más a menudo, y cada visita es una oportunidad para que un cambio de humor se convierta en un problema de financiación. Alargar plazos cuando los tipos son bajos es, en ese sentido, comprar un seguro.",
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
            { t: "Juzgar la sostenibilidad por el nivel de deuda", d: "El nivel no ordena. Una deuda del 105 % que baja es mejor posición que una del 60 % que sube tres puntos al año. Lo que hay que mirar es la pendiente, y la pendiente la fija (r − g) junto con el saldo primario. Ningún umbral —ni el 60 % de Maastricht ni el 90 % de la literatura— marca una frontera analítica." },
            { t: "Usar el tipo de mercado en lugar del tipo implícito", d: "Que el bono a diez años cotice al 4 % no significa que la deuda pague el 4 %. El coste relevante es el tipo implícito medio de toda la deuda viva, que se renueva por tramos y se mueve con años de retraso. Una subida de tipos tarda en trasladarse, y ese retraso es precisamente el margen de maniobra que tiene el Tesoro." },
            { t: "Mezclar magnitudes reales y nominales", d: "El error de signo más frecuente. Si r es nominal, g tiene que ser nominal. Si se trabaja en reales, hay que deflactar el tipo de interés. Emparejar un tipo nominal del 3 % con un crecimiento real del 2 % da un (r − g) positivo donde en realidad puede ser negativo, e invierte la conclusión." },
            { t: "Creer que el déficit del año equivale a la subida de la deuda", d: "No coinciden por dos motivos distintos. Uno es el efecto denominador: con un déficit del 5,15 % el ratio puede subir solo 3,09 puntos si el PIB crece. El otro es el ajuste déficit-deuda, que recoge operaciones financieras que alteran la deuda sin pasar por el déficit. Los dos actúan a la vez." },
            { t: "Confundir el saldo total con el saldo primario", d: "El saldo total incluye los intereses; el primario no. La distinción no es cosmética: el saldo primario mide lo que el gobierno controla en el ejercicio, mientras que los intereses son la herencia de decisiones pasadas y de condiciones de mercado que no decide. Toda la aritmética de sostenibilidad se escribe sobre el primario." },
            { t: "Tratar r < g como dinero gratis y permanente", d: "Ni es gratis ni es permanente. La relación puede invertirse en pocos trimestres mientras la deuda acumulada se queda, y además r no es independiente de la deuda: pasado cierto punto el mercado exige prima y r sube justo cuando conviene que baje. La ventana de r < g es una oportunidad para alargar plazos, no un permiso para ignorar el saldo primario." },
            { t: "Comparar deuda bruta con deuda neta sin decirlo", d: "La deuda de Maastricht es bruta: no descuenta los activos financieros que posee el Estado. Un país con fondos de reserva importantes parece más endeudado de lo que está en términos netos. Ambas medidas son legítimas, pero mezclarlas en una comparación internacional produce rankings que no significan nada." },
            { t: "Olvidar los pasivos que no aparecen en el ratio", d: "Las pensiones futuras, las garantías concedidas y los compromisos de las colaboraciones público-privadas no forman parte de la deuda de Maastricht, y sin embargo condicionan la posición fiscal. El ratio publicado es una foto de los pasivos reconocidos, no del conjunto de compromisos del Estado." },
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
            "Este es uno de los pocos temas macroeconómicos cuyas dos magnitudes centrales —déficit y deuda— son directamente saldos del sistema de cuentas, y donde la definición estadística no coincide con la contable ni por casualidad.",
          ],
          lista: [
            "El **déficit público** es, con el signo cambiado, la **capacidad o necesidad de financiación (B.9)** del sector administraciones públicas (**S.13**), el saldo con el que se cierra la cuenta de capital que estudia la ficha 12.09. No es una magnitud de caja: se registra en **devengo**, de modo que un interés cuenta cuando se devenga y no cuando se paga.",
            "La **deuda de Maastricht** no es el pasivo total de S.13 en las cuentas financieras. Es un subconjunto definido por el protocolo de déficit excesivo: **bruta**, **consolidada** dentro del sector, **a valor nominal**, y limitada a tres instrumentos de los que cataloga la ficha 13.10 — efectivo y depósitos (**AF.2**), valores representativos de deuda (**AF.3**) y préstamos (**AF.4**). Quedan fuera las participaciones, los derivados y otras cuentas pendientes.",
            "Que se valore a **nominal** y no a mercado es una decisión deliberada y tiene consecuencias: cuando los tipos suben y los bonos emitidos pierden valor de mercado, la deuda de Maastricht no baja un euro, mientras que en las cuentas financieras del SEC —que valoran a precios de mercado— el mismo pasivo sí se reduce. Dos cifras correctas y distintas para el mismo objeto.",
            "La diferencia entre el déficit de un año y la variación de la deuda es el **ajuste déficit-deuda**, y no es un residuo despreciable. Recoge las adquisiciones netas de activos financieros —si el Estado se endeuda para prestar o para capitalizar una entidad, la deuda sube sin que haya déficit—, las diferencias entre devengo y caja, y los efectos de valoración y de tipo de cambio. Un déficit del 3,5 % con una deuda que sube 4,7 puntos deja un ajuste de **1,2 puntos** que hay que poder explicar.",
            "El **tipo implícito** se obtiene de las propias cuentas: son los intereses devengados por S.13, que figuran como **rentas de la propiedad (D.41)** en la cuenta de asignación de la renta primaria de la ficha 12.04, divididos por el saldo de deuda del período anterior. Nada de esto exige salir del sistema de cuentas.",
          ],
          cierre:
            "La consecuencia práctica: antes de comparar la deuda de dos países o de dos años, hay que asegurarse de que se compara la misma definición. Bruta o neta, nominal o de mercado, consolidada o sin consolidar. Las cuatro parejas producen cifras distintas y todas se publican.",
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
              q: "La deuda es del 105 % del PIB, el tipo implícito del 5 %, el crecimiento nominal del 2 % y el saldo primario está equilibrado. ¿Dónde queda la deuda el año siguiente?",
              a: "En el 108,09 %. La bola de nieve es 105 · (0,05 − 0,02) / 1,02 = 3,09 puntos, y sin saldo primario nada la compensa. Comprobación en euros: con un PIB de 100 la deuda pasa de 105 a 110,25, el PIB a 102, y 110,25 / 102 = 108,09 %.",
            },
            {
              q: "En ese mismo escenario, ¿qué saldo primario haría falta para dejar la deuda donde estaba?",
              a: "Un superávit primario del 3,09 % del PIB, que es exactamente la bola de nieve: sp* = b · (r − g) / (1 + g) = 105 · 0,03 / 1,02. Conviene notar la magnitud del esfuerzo: tres puntos de PIB todos los años solo para que el ratio no suba.",
            },
            {
              q: "Ahora el tipo implícito es del 3 % y el crecimiento nominal del 4 %. ¿Hace falta superávit primario para estabilizar?",
              a: "No. sp* = 105 · (−0,01) / 1,04 = −1,01 %, es decir, un déficit primario del 1,01 % del PIB todavía deja el ratio constante. Es la asimetría central del tema: con r < g la aritmética trabaja a favor. Pero conviene no acomodarse, porque el signo de r − g puede invertirse mucho más deprisa de lo que se amortiza la deuda.",
            },
            {
              q: "Un Estado cierra el año con un déficit del 5,15 % del PIB y su ratio de deuda sube solo 3,09 puntos. ¿Hay un error?",
              a: "No: es el efecto denominador. El déficit se mide contra el PIB del propio año, mientras que el ratio compara la deuda acumulada con un PIB que ha crecido. Con un crecimiento nominal del 2 %, ese crecimiento absorbe 2,06 puntos del déficit. Es la misma razón por la que la inflación erosiona el peso de la deuda ya emitida.",
            },
            {
              q: "Otro Estado declara un déficit del 3,5 % y su deuda sube 4,7 puntos. ¿Qué explica la diferencia?",
              a: "El ajuste déficit-deuda, de 1,2 puntos. Las causas habituales son adquisiciones netas de activos financieros —endeudarse para prestar o para recapitalizar una entidad aumenta la deuda sin generar déficit—, las diferencias entre el registro en devengo del déficit y los flujos de caja, y los efectos de valoración o de tipo de cambio. No es un residuo estadístico: es una magnitud que debe poder desglosarse.",
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
              q: "Un país tiene una deuda del 105 % del PIB que baja y otro del 60 % que sube tres puntos al año. ¿Cuál está en mejor posición?",
              opciones: [
                "Ambos igual: 60 % es el umbral y ambos lo rebasarán",
                "El del 105 %, porque lo que ordena es la trayectoria y no el nivel",
                "No se puede comparar sin conocer el saldo primario",
                "El del 60 %, porque el nivel es lo que cuenta",
              ],
              correcta: 1,
              porque: [
                "El del 60 % lo rebasará y el del 105 % no vuelve a él pronto, pero eso no cambia que uno mejora y el otro empeora.",
                "La sostenibilidad es una propiedad de la senda: hacia dónde va la ratio y con qué esfuerzo puede estabilizarse. Un nivel alto que decrece es una posición mejor que uno bajo que se dispara.",
                "El saldo primario ayuda a explicar por qué se mueve cada una, pero el sentido de las dos trayectorias ya está en el enunciado.",
                "Ningún umbral separa lo sostenible de lo que no lo es. El 60 % es una referencia de tratado, no un resultado analítico.",
              ],
            },
            {
              q: "El bono a diez años de un país cotiza al 4 %. ¿Qué tipo hay que usar en la ecuación de la deuda?",
              opciones: [
                "El tipo real, restando la inflación al 4 %",
                "El tipo implícito medio de toda la deuda viva, que suele ser bastante distinto",
                "El tipo de las nuevas emisiones ponderado por su volumen",
                "El 4 %, que es el coste de financiarse hoy",
              ],
              correcta: 1,
              porque: [
                "Trabajar en reales o en nominales es una elección legítima, pero hay que hacerlo de forma consistente con el crecimiento, y sigue sin resolver qué tipo tomar.",
                "Se calcula como intereses del año divididos entre la deuda del anterior, y es lo que efectivamente drena recursos. Con deuda de vencimiento largo, tarda años en reflejar los tipos de mercado.",
                "Las nuevas emisiones son una fracción del total; ponderarlas entre sí sigue dejando fuera todo el saldo antiguo.",
                "El 4 % es lo que cuesta el dinero nuevo. La deuda viva se emitió a lo largo de años y paga lo que pactó entonces.",
              ],
            },
            {
              q: "En la ecuación $\\Delta b = \\dfrac{r-g}{1+g}b_{-1} - sp$, ¿qué exige la coherencia entre $r$ y $g$?",
              opciones: [
                "Nada: son magnitudes independientes",
                "Que ambas sean nominales o ambas reales; emparejarlas mal es el error de signo más frecuente",
                "Que $g$ incluya el deflactor y $r$ no",
                "Que $r$ sea nominal y $g$ real, porque la deuda se emite en nominal",
              ],
              correcta: 1,
              porque: [
                "Su diferencia es justo lo que determina si la deuda se dispara o se apaga, así que medirlas en unidades distintas invalida el resultado.",
                "Un tipo nominal del 3 % con un crecimiento real del 2 % da la impresión de que $r > g$ cuando en nominales puede ocurrir lo contrario. El signo se invierte y con él el diagnóstico.",
                "Es la misma mezcla descrita al revés: la coherencia exige tratar ambas igual.",
                "Mezclar unidades es exactamente el error que hay que evitar, aunque la deuda se emita en términos nominales.",
              ],
            },
            {
              q: "Con $r > g$, ¿qué hace falta para que la ratio de deuda no crezca?",
              opciones: [
                "Un superávit primario de al menos $b_{-1}\\,\\dfrac{r-g}{1+g}$",
                "Que el déficit total sea cero",
                "Reducir el gasto público en la misma cuantía que los intereses",
                "Que el banco central compre deuda",
              ],
              correcta: 0,
              porque: [
                "Es el saldo primario que estabiliza: el que deja $\\Delta b = 0$. Con $r > g$ la deuda tiende a crecer sola, y hace falta un superávit antes de intereses para compensarlo.",
                "Un déficit total nulo ya incluye los intereses, así que es una condición distinta y en general más exigente que la necesaria.",
                "Recortar en la cuantía de los intereses es una regla arbitraria que no se corresponde con la condición de estabilización.",
                "Las compras del banco central abaratan la financiación y bajan $r$, pero no sustituyen a la condición aritmética.",
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
            { ref: "Blanchard, Macroeconomía, capítulo de política fiscal y deuda", nota: "la derivación de la dinámica de la deuda paso a paso, con la discusión de r frente a g; el tratamiento de referencia para este tema." },
            { ref: "Blanchard, «Public Debt and Low Interest Rates», discurso presidencial de la American Economic Association, 2019", nota: "el argumento de que con r < g los costes fiscales y de bienestar de la deuda son menores de lo que se suponía, expuesto por quien más ha hecho por precisarlo; conviene leerlo junto a las críticas que recibió." },
            { ref: "AIReF, informes sobre la sostenibilidad de las finanzas públicas", nota: "el enfoque probabilístico aplicado a España: abanicos de trayectorias en lugar de veredictos, con los supuestos explícitos." },
            { ref: "Eurostat, Manual on Government Deficit and Debt", nota: "la fuente normativa sobre qué entra en la deuda de Maastricht y cómo se calcula el ajuste déficit-deuda; árido pero definitivo cuando hay dudas de definición." },
          ],
        },
      ],
    },
  ],
};
