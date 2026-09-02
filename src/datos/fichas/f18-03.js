/* Ficha 18.03 — Estructuras presupuestarias: orgánica, económica y por programas. */

export default {
  codigo: "18.03",
  titulo: "Estructuras presupuestarias: orgánica, económica y por programas",
  nivel: 2,
  bloque: "Presupuesto y financiación pública",
  tiempo: "4 h",
  nucleo:
    "El mismo euro se clasifica tres veces —quién lo gasta, en qué lo gasta y para qué—, y las tres son necesarias porque responden a preguntas distintas. La clasificación económica esconde además la clave de todo el análisis fiscal: los capítulos 8 y 9 no financian nada del gasto real, son la financiación del déficit, y por eso el presupuesto siempre cuadra.",
  requiere: "18.01 El presupuesto público · 18.02 El ciclo de los PGE",
  abre: "18.04 Reglas fiscales · 18.05 Presupuestos autonómicos y locales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una partida presupuestaria no se identifica con un número sino con **tres coordenadas simultáneas**, porque hay tres preguntas legítimas que hacerle a un euro público y ninguna de ellas puede responder a las otras. **Quién lo gasta** es la clasificación **orgánica**; **en qué lo gasta**, la **económica**; **para qué lo gasta**, la de **programas**. Un presupuesto que solo tuviera una de las tres sería inservible para dos de los tres usos.",
            "La **clasificación orgánica** sigue la estructura administrativa: sección —normalmente un ministerio—, servicio y, en su caso, organismo autónomo o entidad. Su virtud es que **coincide con la responsabilidad política**: hay un titular al que preguntar. Su límite es que las políticas no respetan los organigramas, y una misma finalidad puede estar repartida entre varios departamentos.",
            "La **clasificación económica** agrupa por naturaleza del gasto en **nueve capítulos**, y su lógica interna es lo que hay que retener. Los capítulos **1 a 4 son operaciones corrientes**: personal, gastos corrientes en bienes y servicios, gastos financieros y transferencias corrientes. Los capítulos **6 y 7 son operaciones de capital**: inversiones reales y transferencias de capital. El **5** recoge el fondo de contingencia. Y los capítulos **8 y 9 son operaciones financieras**: activos financieros y pasivos financieros.",
            "**Esa separación entre los capítulos 1 a 7 y los 8 y 9 es la más importante del presupuesto entero.** Los siete primeros son las **operaciones no financieras**, las que determinan si hay déficit. Los dos últimos no son gasto ni ingreso en sentido económico: **son la financiación**. Cuando el Estado emite deuda, eso figura como ingreso del capítulo 9; cuando amortiza, como gasto del mismo capítulo. Por eso el documento cuadra siempre y por eso **comparar el total de ingresos con el total de gastos no informa de nada**: la diferencia se ha rellenado con deuda antes de imprimirlo.",
            "En el lado del **ingreso** la lógica es simétrica. Capítulos **1 a 5**: impuestos directos, indirectos, tasas y otros ingresos, transferencias corrientes e ingresos patrimoniales. Capítulos **6 y 7**: enajenación de inversiones reales y transferencias de capital. Capítulos **8 y 9**: activos y pasivos financieros. **El saldo no financiero es la diferencia entre los capítulos 1 a 7 de cada lado**, y esa es la cifra que se compara con el objetivo de déficit.",
            "La **clasificación por programas** es la más joven y la que responde a la pregunta más difícil: **para qué**. Agrupa el gasto en áreas, políticas, grupos de programas y programas, con independencia de qué ministerio lo ejecute y de en qué se materialice. Es la que permite decir cuánto se dedica a sanidad, a defensa o a I+D sumando lo que aportan departamentos distintos, y la que en teoría debería enlazar con objetivos e indicadores para evaluar resultados.",
            "**En teoría, porque la práctica del presupuesto por programas es más pobre de lo que su nombre promete.** Los objetivos e indicadores existen en las memorias, pero rara vez condicionan la asignación del año siguiente: un programa que incumple sus indicadores no pierde dotación de forma automática. La distancia entre presupuestar por programas y **presupuestar por resultados** sigue siendo el gran pendiente, y es donde la evaluación de políticas públicas —el trabajo de organismos como la AIReF— intenta cerrar el círculo.",
            "Conviene añadir dos advertencias de lectura que evitan la mayoría de los errores. La primera: **la clasificación funcional del gasto en las estadísticas internacionales no es la española de programas** sino la **COFOG** del SEC, y ambas no se corresponden partida a partida, así que las comparaciones exigen homogeneizar. La segunda: **el gasto de un ministerio no es el gasto en su política**. El grueso del presupuesto de muchos departamentos son transferencias que ejecutan terceros, y buena parte del gasto social real lo realizan las comunidades autónomas con recursos del sistema de financiación de la ficha 18.06.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Clasificación", "Pregunta que responde", "Para qué sirve"],
          filas: [
            { nom: "Orgánica", sub: "Sección, servicio, organismo.", cols: ["¿Quién gasta?", "Exigir responsabilidad política"] },
            { nom: "Económica", sub: "Nueve capítulos por naturaleza.", cols: ["¿En qué se gasta?", "Calcular el saldo y analizar la composición"] },
            { nom: "Por programas", sub: "Área, política, programa.", cols: ["¿Para qué se gasta?", "Comparar finalidades entre departamentos"] },
            { nom: "Capítulos 1 a 4", sub: "Personal, bienes y servicios, financieros, transferencias.", cols: ["Operaciones corrientes", "El gasto que se repite cada año"] },
            { nom: "Capítulos 6 y 7", sub: "Inversiones y transferencias de capital.", cols: ["Operaciones de capital", "El gasto que crea activos"] },
            { nom: "Capítulos 8 y 9", sub: "Activos y pasivos financieros.", cols: ["Operaciones financieras", "No son gasto: son la financiación"] },
          ],
          nota: "La última fila es la que separa a quien sabe leer un presupuesto de quien no. **Sumar los nueve capítulos y comparar totales no dice nada**, porque el capítulo 9 de ingresos es precisamente la deuda que se emite para cerrar el hueco.",
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
            { nom: "Saldo no financiero", sub: "El que informa del déficit.", cols: ["$S = I_{1..7} - G_{1..7}$"] },
            { nom: "Ahorro bruto", sub: "Si es negativo, lo corriente no se autofinancia.", cols: ["$A = I_{1..5} - G_{1..4}$"] },
            { nom: "Saldo de capital", sub: "Normalmente negativo, y debe serlo.", cols: ["$K = I_{6,7} - G_{6,7}$"] },
            { nom: "Variación neta de pasivos", sub: "Financia el saldo no financiero.", cols: ["$\\Delta P = I_9 - G_9$"] },
            { nom: "Equilibrio del documento", sub: "Se cumple por construcción.", cols: ["$I_{1..9} = G_{1..9}$"] },
            { nom: "Identidad de la financiación", sub: "Lo que no se ingresa, se toma prestado.", cols: ["$S + \\Delta P + \\Delta A_f = 0$"] },
          ],
          nota: "La segunda línea merece un comentario: **un ahorro bruto negativo significa que los ingresos corrientes no cubren ni siquiera el gasto corriente**, es decir, que se está financiando con deuda el funcionamiento ordinario y no la inversión. Es el indicador de alarma clásico de cualquier hacienda pública.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el presupuesto que cuadra y tiene déficit",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un presupuesto presenta, en millones de euros: **ingresos no financieros de 186.000** y **gastos no financieros de 195.000**; en el capítulo 9, **21.000 de emisión de deuda** en ingresos y **12.000 de amortización** en gastos. Comprobamos qué dice cada suma.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Ingresos", "Gastos"],
          filas: [
            ["Capítulos 1 a 7 (no financieros)", "186.000", "195.000"],
            ["Capítulo 9 (pasivos financieros)", "21.000", "12.000"],
            { celdas: ["Total del documento", "207.000", "207.000"], clase: "total" },
            { celdas: ["Saldo no financiero", "186.000 − 195.000", "−9.000 de déficit"], clase: "total" },
            { celdas: ["Variación neta de pasivos", "21.000 − 12.000", "+9.000 de nueva deuda"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El documento cuadra al euro: 207.000 de ingreso y 207.000 de gasto.** Y sin embargo hay un déficit de 9.000 millones. No hay contradicción ni truco contable: el equilibrio se ha logrado incluyendo entre los ingresos los 21.000 millones de deuda emitida. **El presupuesto no puede no cuadrar**, porque la emisión se calcula precisamente como la cifra que lo hace cuadrar.",
            "Por eso el saldo relevante es el de los **capítulos 1 a 7**, y por eso los 9.000 millones de déficit aparecen, exactamente, como **variación neta de pasivos**: 21.000 emitidos menos 12.000 amortizados. Las dos cifras son la misma magnitud vista desde los dos lados de la identidad. **Cualquier análisis que compare el total de ingresos con el total de gastos está midiendo cero por construcción.**",
            "**Una advertencia sobre el capítulo 8**, que el ejemplo deja a cero para simplificar y que en la práctica enturbia mucho las lecturas. Recoge activos financieros: préstamos concedidos, aportaciones de capital a empresas públicas, adquisición de participaciones. **No computa como gasto no financiero**, así que un préstamo del Estado a una empresa pública no aumenta el déficit presupuestario aunque salga dinero de la caja. Ha sido durante años una vía habitual para sacar operaciones del saldo, y la razón de que Eurostat vigile con especial atención si esas operaciones son verdaderos préstamos recuperables o **transferencias encubiertas** que deberían computar en el capítulo 7.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: tres lecturas del mismo ministerio",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un ministerio presenta un presupuesto de 30.000 millones de euros. Un titular afirma que «es el ministerio que más crece»; otro, que «apenas gasta en su política»; un tercero, que «su plantilla no aumenta». **Los tres pueden ser exactos a la vez**, y comprobarlo es el mejor ejercicio para fijar esta ficha.",
            "**Por clasificación orgánica**, el ministerio efectivamente gestiona 30.000 millones y crece más que ningún otro. Pero **por clasificación económica**, 27.000 de esos millones pueden estar en el **capítulo 4, transferencias corrientes**: dinero que el ministerio no gasta sino que entrega a comunidades autónomas, a la Seguridad Social o a entidades. Su gasto de personal, capítulo 1, puede ser de apenas 300 millones y estar congelado. Las dos afirmaciones conviven sin contradecirse.",
            "**Y por clasificación de programas** la imagen cambia otra vez. Una parte de esos 30.000 millones puede estar en programas que no son la política que da nombre al departamento —gastos generales, deuda, clases pasivas— mientras que otros ministerios aportan a esa misma política desde sus propios presupuestos. **La suma por programas cruza los organigramas**, y es la única de las tres clasificaciones que responde a «cuánto dedica el Estado a esto», que suele ser la pregunta que de verdad interesa.",
            "**La conclusión operativa es una regla de lectura.** Ante cualquier cifra presupuestaria conviene preguntar siempre en qué clasificación está expresada, porque las tres son igual de verdaderas y responden a cosas distintas. Y conviene desconfiar especialmente de las comparaciones entre administraciones: **el Estado transfiere y las comunidades ejecutan**, de modo que el gasto sanitario aparece como capítulo 4 en un presupuesto y como capítulos 1 y 2 en otro. Sumar sin consolidar cuenta el mismo euro dos veces, que es el error que la ficha 18.05 desarrolla.",
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
            { t: "Comparar el total de ingresos con el total de gastos", d: "Da cero siempre, porque la emisión de deuda del capítulo 9 se calcula justamente para que cuadre. El saldo que informa del déficit es el de los capítulos 1 a 7 de cada lado." },
            { t: "Tratar los capítulos 8 y 9 como gasto o ingreso económico", d: "Son operaciones financieras: la financiación, no lo financiado. Emitir deuda no es un ingreso en sentido económico y amortizarla no es un gasto, aunque figuren como tales en el documento." },
            { t: "Confundir el presupuesto de un ministerio con el gasto en su política", d: "El grueso de muchos departamentos son transferencias del capítulo 4 que ejecutan terceros. Para saber cuánto se dedica a una finalidad hay que usar la clasificación por programas, que cruza los organigramas." },
            { t: "Ignorar el capítulo 8 al analizar operaciones singulares", d: "Los préstamos y aportaciones de capital no computan como gasto no financiero, así que pueden sacar operaciones del déficit presupuestario. Eurostat vigila si son préstamos recuperables o transferencias encubiertas que deberían ir al capítulo 7." },
            { t: "Dar por bueno un ahorro bruto negativo", d: "Significa que los ingresos corrientes no cubren el gasto corriente, es decir, que se financia con deuda el funcionamiento ordinario y no la inversión. Es el indicador de alarma clásico de cualquier hacienda." },
            { t: "Equiparar la clasificación española de programas con la COFOG", d: "No se corresponden partida a partida. La COFOG es la clasificación funcional del SEC y es la que se usa en las comparaciones internacionales; usar una donde toca la otra produce diferencias que no existen." },
            { t: "Creer que el presupuesto por programas condiciona la asignación", d: "Los objetivos e indicadores existen en las memorias, pero un programa que los incumple no pierde dotación automáticamente. Presupuestar por programas no es todavía presupuestar por resultados." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Los capítulos son primos de los códigos del SEC, pero no gemelos",
          texto:
            "La clasificación económica y la del SEC responden a la misma intuición y no coinciden, y saber dónde divergen ahorra muchos disgustos. El capítulo 1 se parece a la **D.1 remuneración de asalariados** de la ficha 13.04; el capítulo 2, al **P.2 consumo intermedio**; el capítulo 3, a los **D.41 intereses**; el capítulo 6, a la **P.51g formación bruta de capital fijo**. Pero las correspondencias fallan justo donde importa. Los **intereses** se registran en el SEC por **devengo** y en el presupuesto por vencimiento, lo que abre una brecha permanente en cualquier año con emisiones a descuento o cupones largos. Las **inversiones bajo fórmulas de colaboración público-privada** pueden estar fuera del capítulo 6 y dentro de la FBCF del SEC, si el análisis de riesgos concluye que el activo es público. Y las operaciones del **capítulo 8** se reclasifican como transferencia si el préstamo no es recuperable. Por eso la traducción entre uno y otro no es un cambio de nombres sino un **ajuste con criterio económico**, y por eso lo hace la IGAE partida a partida en lugar de mediante una tabla de equivalencias.",
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
              q: "Un presupuesto tiene 186.000 de ingresos no financieros, 195.000 de gastos no financieros, 21.000 de emisión y 12.000 de amortización. ¿Cuál es el déficit y cómo se financia?",
              a: "El déficit es de 9.000 millones, la diferencia entre los capítulos 1 a 7 de cada lado. Se financia con una variación neta de pasivos de 9.000 (21.000 emitidos menos 12.000 amortizados). El documento cuadra en 207.000 por ambos lados, porque la emisión se calcula para que cuadre.",
            },
            {
              q: "¿Por qué las tres clasificaciones son necesarias y no redundantes?",
              a: "Porque responden a preguntas distintas: la orgánica dice quién gasta y permite exigir responsabilidad; la económica dice en qué se gasta y permite calcular el saldo; la de programas dice para qué se gasta y permite comparar finalidades cruzando los organigramas. Ninguna puede responder a las preguntas de las otras.",
            },
            {
              q: "¿Qué significa que un presupuesto tenga ahorro bruto negativo?",
              a: "Que los ingresos corrientes de los capítulos 1 a 5 no cubren el gasto corriente de los capítulos 1 a 4, es decir, que se está financiando con deuda el funcionamiento ordinario y no la inversión. Es el indicador de alarma clásico de cualquier hacienda pública.",
            },
            {
              q: "¿Por qué Eurostat vigila las operaciones del capítulo 8?",
              a: "Porque los préstamos y aportaciones de capital no computan como gasto no financiero y pueden sacar operaciones del déficit presupuestario aunque salga dinero de la caja. Si el préstamo no es realmente recuperable, debe reclasificarse como transferencia del capítulo 7 y sí computar.",
            },
            {
              q: "¿Por qué el gasto en intereses del presupuesto no coincide con el del SEC?",
              a: "Porque el SEC los registra en devengo, imputándolos al periodo en que se generan, y el presupuesto por vencimiento del cupón. La brecha es estructural en cualquier año con emisiones a descuento o cupones largos, y forma parte del ajuste de contabilidad nacional.",
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
              q: "Un presupuesto suma 207.000 millones de ingreso y 207.000 de gasto. ¿Qué se deduce?",
              opciones: [
                "Que está equilibrado y no hay déficit",
                "Nada sobre el déficit: cuadra por construcción, porque la emisión de deuda figura como ingreso",
                "Que el ahorro bruto es exactamente cero",
                "Que los capítulos 8 y 9 están a cero en ambos lados",],
              correcta: 1,
              porque: [
                "El equilibrio del documento es contable, no económico: la emisión se calcula para que cuadre.",
                "El déficit hay que buscarlo en el saldo de los capítulos 1 a 7, que aquí es de −9.000 millones.",
                "El ahorro bruto compara ingresos corrientes con gasto corriente y nada tiene que ver con que los totales coincidan.",
                "Al contrario: si cuadra habiendo déficit es precisamente porque el capítulo 9 de ingresos no está a cero.",],
            },
            {
              q: "El Estado concede un préstamo de 2.000 millones a una empresa pública. ¿Cómo afecta al déficit presupuestario?",
              opciones: [
                "Lo reduce, porque genera un derecho de cobro futuro",
                "Lo aumenta en 2.000 millones, porque sale dinero de la caja",
                "No lo afecta, al ser capítulo 8, salvo que se reclasifique por no ser recuperable",
                "Lo aumenta solo en la parte de intereses no percibidos",],
              correcta: 2,
              porque: [
                "Un activo financiero no reduce el déficit: simplemente cambia la composición del balance.",
                "La salida de caja no determina el saldo no financiero: el capítulo 8 queda fuera de los capítulos 1 a 7.",
                "Por eso Eurostat comprueba si es un préstamo verdadero o una transferencia encubierta que debería ir al capítulo 7.",
                "Los intereses no percibidos no son el criterio: lo decisivo es si el principal es realmente recuperable.",],
            },
            {
              q: "Un ministerio gestiona 30.000 millones, de los que 27.000 son transferencias corrientes. ¿Qué puede afirmarse?",
              opciones: [
                "Que su presupuesto está mal clasificado, porque las transferencias son capítulo 7",
                "Que gestiona ese importe pero lo ejecutan terceros: hay que mirar la clasificación por programas",
                "Que su gestión es ineficiente por dedicar tan poco a actividad propia",
                "Que su política es la mayor del Estado en volumen de gasto",],
              correcta: 1,
              porque: [
                "Las transferencias corrientes son capítulo 4; el 7 son las de capital, y ambas son clasificaciones correctas.",
                "Es la única clasificación que cruza los organigramas y responde a cuánto se dedica realmente a una finalidad.",
                "Transferir no es ineficiente: es el modo normal de financiar competencias que ejecutan otras administraciones.",
                "El presupuesto de un ministerio no equivale al gasto en su política: puede haber otros departamentos aportando a ella.",],
            },
            {
              q: "¿Qué agrupa la clasificación económica en sus capítulos 1 a 4?",
              opciones: [
                "Los gastos de los ministerios, frente a los de los organismos autónomos",
                "Las operaciones no financieras en su conjunto",
                "Las operaciones corrientes: personal, bienes y servicios, gastos financieros y transferencias corrientes",
                "Los programas de gasto social, frente a los de gasto productivo",],
              correcta: 2,
              porque: [
                "Esa distinción pertenece a la clasificación orgánica, no a la económica.",
                "Las no financieras son los capítulos 1 a 7: incluyen también las operaciones de capital.",
                "Son el gasto que se repite cada año, frente a los capítulos 6 y 7, que crean activos.",
                "Esa agrupación pertenece a la clasificación por programas, que responde al para qué.",],
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
            { t: "Ley 47/2003, General Presupuestaria, artículos 39 a 43", d: "Las tres clasificaciones definidas en la propia ley, con el detalle de los niveles de cada una. Corto y suficiente para fijar el vocabulario." },
            { t: "Orden EHA/3565/2008 sobre estructura de los presupuestos de las entidades locales", d: "El listado de capítulos, artículos y conceptos con el que se codifica cada partida. Útil para ver la clasificación económica desplegada hasta el último nivel." },
            { t: "Eurostat, Manual on Government Deficit and Debt", d: "El criterio con el que se decide si un préstamo es recuperable, si una colaboración público-privada computa como inversión pública y cuándo una aportación de capital es una transferencia. Es el manual que dirime los casos difíciles del capítulo 8." },
            { t: "IGAE, Presupuestos Generales del Estado consolidados", d: "Publica el presupuesto en las tres clasificaciones simultáneamente. Practicar sobre él la lectura cruzada del caso práctico es la mejor manera de interiorizar esta ficha." },
          ],
        },
      ],
    },
  ],
};
