/* Ficha 3.08 — Politica monetaria: BCE, tipos y mecanismo de transmision. */

export default {
  codigo: "3.08",
  titulo: "Política monetaria: BCE, tipos y mecanismo de transmisión",
  nivel: 3,
  bloque: "Macroeconomía",
  tiempo: "5 h",
  nucleo:
    "Del tipo de intervención al precio del pan hay una cadena larga y con retardos inciertos. Esa incertidumbre no es un detalle operativo: obliga a decidir hoy en función de dónde estará la economía dentro de año y medio, con datos provisionales de lo que pasó hace tres meses.",
  requiere: "3.07 Dinero y bancos · 3.05 Modelo IS-LM · 3.03 Curva de Phillips",
  abre: "3.10 Economía abierta · 8.03 Curva de tipos · 10.04 Gasto público",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El Banco Central Europeo tiene un **objetivo principal explícito**: la estabilidad de precios, definida como una inflación del **2 % a medio plazo** medida por el IPC armonizado de la ficha 3.02. Solo sin perjuicio de ese objetivo puede apoyar las políticas económicas generales de la Unión. Dos rasgos del diseño importan. El objetivo es **simétrico**: desviarse por debajo es tan indeseable como por encima, porque la deflación tiene los problemas que veía la ficha 3.05. Y es **a medio plazo**, lo que reconoce que los choques transitorios no deben perseguirse.",
            "Su instrumento convencional son **tres tipos de interés oficiales**. La **facilidad de depósito** remunera el dinero que los bancos dejan en el banco central de un día para otro y es, en la práctica, el suelo del mercado. Las **operaciones principales de financiación** son las subastas semanales de liquidez. Y la **facilidad marginal de crédito** es el préstamo a un día, que actúa como techo. Los tres definen un corredor dentro del cual se mueve el tipo interbancario, y **es ese tipo a muy corto plazo lo único que el banco central fija de verdad**: todo lo demás lo determina el mercado.",
            "Ahí empieza el **mecanismo de transmisión**, que discurre por cinco canales simultáneos. El de **tipos de interés**: el tipo a corto se traslada a los tipos a plazos mayores según la curva de la ficha 8.03, y con ellos cambia el coste de financiar consumo e inversión. El de **crédito**: los bancos ajustan no solo el precio sino la **disponibilidad** del crédito y sus condiciones de concesión. El de **precios de los activos**: tipos menores elevan el valor presente de bonos, acciones e inmuebles, con efectos de riqueza y sobre el valor de las garantías. El de **tipo de cambio**, que la ficha 3.10 desarrolla. Y el de **expectativas**, que hoy se considera probablemente el más importante de todos.",
            "Ese mecanismo tiene dos propiedades incómodas. La primera son los **retardos largos y variables**: el efecto pleno sobre la inflación tarda entre un año y dos, con una dispersión considerable. La consecuencia operativa es que **la política monetaria debe fijarse mirando la previsión, no el dato**: actuar sobre la inflación de hoy es actuar demasiado tarde. La segunda es la **transmisión desigual**: el mismo tipo oficial llega de forma distinta a cada país y a cada tipo de deudor según su estructura financiera, algo especialmente relevante en una unión monetaria con sistemas bancarios y mercados hipotecarios muy diferentes. La proporción de hipotecas a tipo variable, por ejemplo, cambia por completo la velocidad con la que una subida llega a los hogares.",
            "Para ordenar la decisión se usan **reglas de referencia**, y la más conocida es la de **Taylor**: el tipo debería situarse en torno al tipo real de equilibrio más la inflación, corregido al alza cuando la inflación excede su objetivo y cuando la producción supera su potencial. No es un mandato ni la sigue ningún banco central de forma mecánica; su utilidad es servir de **punto de referencia** que obliga a explicar las desviaciones. Y arrastra dos problemas serios: depende del **tipo real de equilibrio** y de la **brecha de producción**, dos magnitudes que no se observan y se estiman con incertidumbre, según la ficha 3.01.",
            "Por último, el **límite inferior efectivo** de los tipos cambió la caja de herramientas. Cuando el tipo oficial se acerca a cero deja de poder bajar de forma significativa, y la política convencional pierde tracción, como mostraba la ficha 3.05. De ahí los instrumentos no convencionales: la **orientación sobre la evolución futura de los tipos**, que actúa sobre expectativas; las **compras de activos**, que operan sobre los tipos a largo y las primas; y las **operaciones de financiación a plazo condicionadas** al crédito concedido. Todos comparten una lógica: **si el instrumento de precio a corto plazo está agotado, actuar sobre plazos, cantidades o expectativas**. Su eficacia relativa sigue siendo objeto de discusión empírica seria.",
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
            { nom: "Objetivo del BCE", sub: "Simétrico y a medio plazo.", cols: ["Inflación del IPCA en el 2 %"] },
            { nom: "Los tres tipos oficiales", sub: "Definen el corredor del interbancario.", cols: ["Depósito < Operaciones principales < Crédito marginal"] },
            { nom: "Tipo real", sub: "Lo relevante para consumir e invertir.", cols: ["r ≈ i − π^e (versión exacta en la ficha 3.02)"] },
            { nom: "Tipo natural o de equilibrio", sub: "No se observa; se estima con gran incertidumbre.", cols: ["r*: compatible con Y = Y* y π estable"] },
            { nom: "Orientación de la política", sub: "El signo depende del tipo real, no del nominal.", cols: ["r < r* expansiva · r > r* restrictiva"] },
            { nom: "Regla de Taylor", sub: "Referencia para explicar desviaciones, no mandato.", cols: ["i = r* + π + a(π − π*) + b·brecha"] },
            { nom: "Canales de transmisión", sub: "Actúan a la vez y con intensidades distintas.", cols: ["Tipos · crédito · activos · tipo de cambio · expectativas"] },
            { nom: "Retardo de transmisión", sub: "Obliga a decidir sobre previsiones.", cols: ["Efecto pleno sobre π: 12 a 24 meses"] },
            { nom: "Límite inferior efectivo", sub: "Donde la política convencional se agota.", cols: ["i ≈ 0 ⟹ instrumentos no convencionales"] },
            { nom: "Independencia y credibilidad", sub: "Reducen el coste de desinflar de la ficha 3.03.", cols: ["Expectativas ancladas ⟹ menor tasa de sacrificio"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la regla y el suelo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Apliquemos una regla de Taylor con **tipo real de equilibrio del 0,5 %**, objetivo de inflación del **2 %** y coeficientes de 0,5 tanto para la desviación de inflación como para la brecha de producción. La fórmula queda **i = 0,5 + π + 0,5·(π − 2) + 0,5·brecha**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Inflación", "Brecha", "Tipo que prescribe la regla", "Lectura"],
          filas: [
            ["Economía recalentada", "4,0 %", "+1,0 %", "6,00 %", "Restringir con fuerza"],
            ["En objetivo y sin brecha", "2,0 %", "0,0 %", "2,50 %", "Tipo neutral"],
            { celdas: ["Recesión con inflación baja", "1,0 %", "−2,0 %", "0,00 %", "La regla pide cero: el suelo"], clase: "total" },
            ["Recesión profunda", "0,5 %", "−4,0 %", "−1,25 %", "La regla pide lo imposible"],
          ],
          nota: "Las dos primeras filas son la operativa normal. La tercera está justo en el suelo. **La cuarta es el problema**: la regla prescribe un tipo negativo del 1,25 % que la política convencional no puede entregar. Ese hueco entre lo que haría falta y lo que se puede hacer con el instrumento habitual es precisamente el espacio que ocupan las compras de activos y la orientación sobre tipos futuros. Y adviértase de qué depende todo el cálculo: del **0,5 % de tipo de equilibrio** y de una brecha de producción estimada. **Los dos parámetros peor conocidos del sistema son los que fijan el punto de partida.**",
        },
        {
          tipo: "grafico",
          ejes: { x: "Periodo", y: "Tipo de interés %" },
          dominio: { x: [1, 16], y: [-3, 7] },
          marcasX: [1, 4, 8, 12, 16],
          marcasY: [-3, 0, 2, 4, 6],
          series: [
            {
              nombre: "Tipo que pide la regla",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [6.5, -2.9],
              puntos: [[1, 3.5], [2, 3], [3, 2], [4, 0.5], [5, -1.5], [6, -2.5], [7, -2], [8, -1], [9, 0], [10, 0.5], [11, 1], [12, 3], [13, 5.5], [14, 6], [15, 4.5], [16, 3.5]],
            },
            {
              nombre: "Tipo oficial efectivo",
              color: "acento",
              etiquetaEn: [8.5, 0.45],
              puntos: [[1, 3.5], [2, 3], [3, 2], [4, 0.5], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0.5], [13, 2.5], [14, 4], [15, 4], [16, 3.5]],
            },
            { nombre: "", color: "tinta2", trazo: "punteado", puntos: [[1, 0], [16, 0]] },
          ],
          nota: "Las dos líneas coinciden mientras la regla pide tipos positivos y **se separan entre los periodos 5 y 11**, cuando pide negativos y el tipo oficial se queda pegado al suelo. Esa área de separación es la medida gráfica de cuánta política monetaria expansiva **no pudo entregarse** con el instrumento convencional, y es la razón económica de los programas de compras de activos. Obsérvese también que a partir del periodo 12 la regla se vuelve muy restrictiva y el tipo oficial la sigue con retraso: **los bancos centrales suavizan los movimientos** en lugar de seguir la regla al pie de la letra, para no añadir volatilidad a los mercados financieros.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el detalle que decide el signo real de la política.** Un tipo nominal del 4 % puede ser expansivo o restrictivo según la inflación esperada: con expectativas del 6 %, el tipo real es negativo y la política estimula; con expectativas del 1 %, el tipo real es del 3 % y frena. Por eso **anunciar el nivel del tipo oficial no dice por sí solo si la política es dura o blanda**: hay que compararlo con la inflación esperada y con el tipo de equilibrio. Es el mismo error de la ficha 3.02 aplicado aquí: confundir nominal con real.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: una política monetaria para veinte economías",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El BCE fija un solo tipo de interés para un conjunto de economías con ciclos, estructuras financieras y niveles de deuda distintos. Ese diseño tiene consecuencias que ninguna otra área monetaria comparable afronta con la misma intensidad, y es el mejor ejemplo de por qué la transmisión importa tanto como la decisión.",
            "**El problema básico es que el tipo adecuado para el conjunto puede ser inadecuado para cada parte.** Si un país crece por encima de su potencial y otro está en recesión, el tipo único será demasiado bajo para el primero y demasiado alto para el segundo. Y el efecto es perverso porque **es procíclico**: el país recalentado, con inflación mayor, tiene un tipo real más bajo, lo que estimula aún más su demanda; el país deprimido, con inflación menor, soporta un tipo real más alto. El mismo tipo nominal **diverge en términos reales justo en la dirección equivocada**.",
            "**A eso se añade la transmisión desigual por estructura financiera.** En una economía donde predominan las hipotecas a tipo variable, una subida llega a los hogares en meses; donde predomina el tipo fijo a largo plazo, tarda años y solo afecta a quienes contratan de nuevo. En una economía muy bancarizada, el canal del crédito domina; donde las empresas se financian en mercados, pesa más el canal de precios de activos. **El mismo movimiento del BCE produce efectos de magnitud y calendario muy distintos según dónde caiga**, y esa heterogeneidad no es un fallo corregible: es una característica estructural de la unión.",
            "**La crisis de deuda soberana añadió un problema aún más serio: la fragmentación financiera.** Cuando las primas de riesgo de algunos Estados se dispararon, el tipo que efectivamente pagaban empresas y hogares en esos países se desacopló del tipo oficial. **La política monetaria dejó de transmitirse**, que es un problema distinto de que sea inadecuada: el instrumento no llegaba. De ahí que el BCE haya desarrollado herramientas cuyo objetivo declarado no es la orientación de la política sino **preservar su transmisión**, una categoría de instrumento que no existía antes y que sigue siendo jurídicamente discutida.",
            "**El sustituto natural del ajuste monetario nacional sería el fiscal**, y aquí aparece la asimetría central del diseño: la política monetaria está centralizada y la fiscal es nacional, con reglas comunes que limitan su uso. Un país sin política monetaria propia y con margen fiscal restringido tiene pocos instrumentos para absorber un choque asimétrico, y le quedan la **devaluación interna** —ajuste de precios y salarios, lento y costoso en empleo, como muestra la ficha 3.03— y la movilidad de factores, que en Europa es limitada por idioma y por vivienda.",
            "**La lección que traslada.** Una unión monetaria funciona mejor cuanto más sincronizados estén los ciclos, más móviles sean los factores y más capacidad de amortiguación fiscal exista, que son precisamente los criterios de las áreas monetarias óptimas de la ficha 3.10. La zona euro cumple algunos y no otros, y buena parte del debate sobre su arquitectura consiste en discutir **qué mecanismos sustituyen a los que faltan**. No es un problema de gestión del BCE: es un rasgo del diseño con el que la política monetaria tiene que convivir.",
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
            { t: "Juzgar la orientación de la política por el tipo nominal", d: "Lo relevante es el tipo real comparado con el de equilibrio. Un 4 % nominal con expectativas de inflación del 6 % es expansivo; con expectativas del 1 % es claramente restrictivo. Sin la inflación esperada, el nivel del tipo oficial no informa del signo de la política." },
            { t: "Esperar que una subida de tipos frene la inflación de inmediato", d: "El efecto pleno tarda entre uno y dos años, con dispersión considerable. Por eso la decisión se toma sobre previsiones y no sobre el último dato publicado: actuar sobre la inflación de hoy es actuar sobre algo que ya no puede cambiarse." },
            { t: "Creer que el banco central controla la cantidad de dinero", d: "Controla el tipo a muy corto plazo y suministra las reservas necesarias para sostenerlo. El dinero lo crea el crédito bancario, según la ficha 3.07, y la relación entre base y agregados no es estable. Por eso los objetivos se formulan en tipos." },
            { t: "Tomar la regla de Taylor por un mandato", d: "Es una referencia que obliga a explicar las desviaciones, no una fórmula que se aplique. Depende además del tipo real de equilibrio y de la brecha de producción, dos magnitudes estimadas con incertidumbre grande y revisadas a posteriori." },
            { t: "Suponer que el objetivo de inflación es un techo", d: "El objetivo del BCE es simétrico: quedarse por debajo del 2 % de forma persistente es tan indeseable como superarlo, porque la deflación eleva el tipo real y el peso de las deudas, con los efectos contractivos de la ficha 3.05." },
            { t: "Confundir una política inadecuada con una transmisión rota", d: "Son problemas distintos y exigen instrumentos distintos. Si el tipo es inapropiado, se cambia el tipo; si el tipo oficial no llega a hogares y empresas por fragmentación financiera, hace falta una herramienta que restablezca la transmisión, no un cambio de orientación." },
            { t: "Ignorar que el mismo tipo tiene efectos distintos en cada país", d: "La estructura financiera decide la velocidad y la intensidad: predominio de tipo variable o fijo, peso del crédito bancario, nivel de endeudamiento. En una unión monetaria eso hace que una decisión común produzca resultados heterogéneos por diseño." },
            { t: "Atribuir toda la inflación a la política monetaria", d: "Un choque de oferta como el de la ficha 3.06 eleva los precios sin que haya habido exceso de demanda. La política monetaria puede evitar que se instale a través de las expectativas, pero no puede impedir el encarecimiento inicial de un insumo importado." },
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
            "La política monetaria opera sobre variables financieras y su efecto acaba viéndose en las cuentas reales, con un desfase que conviene tener presente al leerlas.",
          ],
          lista: [
            "El **banco central** es una unidad institucional del sector de instituciones financieras (S.121) y sus operaciones aparecen en las cuentas financieras. Sus beneficios, incluido el **señoreaje**, se transfieren al Estado y figuran como transferencias corrientes en las cuentas de las administraciones públicas.",
            "Los **tipos de interés efectivos** que pagan hogares y empresas se publican en las estadísticas de tipos de las nuevas operaciones de crédito del Banco de España. Compararlos con el tipo oficial es la forma directa de medir la transmisión, y su diferencia entre países es la fragmentación del caso práctico.",
            "El efecto de la política sobre la actividad se observa con retardo en la **formación bruta de capital fijo** (P.51g) y en el **consumo de bienes duraderos**, que son los componentes más sensibles al coste de financiación. La construcción residencial suele ser el más reactivo de todos.",
            "Los **intereses pagados por las administraciones públicas** (D.41) son un componente del déficit que responde a los tipos con desfase, según el vencimiento medio de la deuda emitida. Un país con deuda a plazos largos absorbe una subida de tipos mucho más despacio que otro con vencimientos cortos.",
            "Y el **producto potencial** y el **tipo natural de interés** son los dos parámetros no observables que sostienen la regla de Taylor. Ambos se estiman, ambos se revisan sustancialmente a posteriori y ambos se usan para decisiones en tiempo real, con el problema que documenta la ficha 10.10.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: la distancia entre el tipo oficial y el que realmente paga una empresa es donde vive la política monetaria efectiva, y solo se ve en las estadísticas de tipos, no en los titulares sobre decisiones del banco central.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El tipo oficial es del 4 %. ¿Es una política restrictiva?", a: "Depende de la inflación esperada y del tipo de equilibrio. Con expectativas del 6 %, el tipo real es negativo y la política es expansiva; con expectativas del 1 %, el real es del 3 % y resulta claramente restrictiva. El nivel nominal por sí solo no informa del signo." },
            { q: "Con r* = 0,5 %, objetivo del 2 %, inflación del 1 % y brecha del −2 %, ¿qué prescribe la regla de Taylor?", a: "Un tipo del 0 %: 0,5 + 1 + 0,5(1 − 2) + 0,5(−2). Está justo en el suelo. Si la recesión fuera más profunda, la regla pediría tipos negativos que la política convencional no puede entregar, y ese hueco es lo que ocupan los instrumentos no convencionales." },
            { q: "¿Por qué el banco central decide mirando previsiones y no el último dato de inflación?", a: "Porque el efecto pleno de una decisión tarda entre uno y dos años en llegar a los precios. Actuar sobre la inflación actual sería actuar sobre algo que ya está determinado; lo que puede influirse es la inflación dentro de año y medio." },
            { q: "¿Por qué un tipo único puede ser procíclico en una unión monetaria?", a: "Porque el país con más inflación tiene un tipo real más bajo, lo que estimula aún más su demanda, y el país en recesión con inflación menor soporta un tipo real más alto. El mismo tipo nominal diverge en términos reales en la dirección equivocada." },
            { q: "¿Qué diferencia hay entre una política inadecuada y una transmisión rota?", a: "En el primer caso el tipo elegido no es el correcto y se corrige cambiándolo. En el segundo, el tipo oficial no llega a hogares y empresas —por fragmentación financiera o por restricción crediticia— y hace falta un instrumento cuyo objetivo sea restablecer el canal, no reorientar la política." },
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
            { ref: "Banco de España, publicaciones divulgativas sobre política monetaria", nota: "cómo funcionan los instrumentos del Eurosistema explicados sin jerga; el punto de partida natural." },
            { ref: "Banco Central Europeo, revisión de la estrategia de política monetaria", nota: "la formulación del objetivo simétrico del 2 % y su justificación; documento oficial y legible." },
            { ref: "Mishkin, Moneda, banca y mercados financieros", nota: "el tratamiento sistemático de los canales de transmisión y de las reglas de política." },
            { ref: "Taylor, «Discretion versus Policy Rules in Practice»", nota: "el artículo de 1993 que propuso la regla; ocho páginas y sorprendentemente modesto sobre su alcance." },
          ],
        },
      ],
    },
  ],
};
