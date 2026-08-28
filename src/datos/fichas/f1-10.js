/* Ficha 1.10 — Economia normativa frente a positiva. */

export default {
  codigo: "1.10",
  titulo: "Economía normativa frente a positiva",
  nivel: 2,
  bloque: "Fundamentos y método económico",
  tiempo: "4 h",
  nucleo:
    "Dónde acaba la descripción y empieza el juicio de valor. La frontera se cruza más a menudo de lo que se admite, y casi nunca de forma declarada: los juicios que más pesan viajan escondidos dentro de parámetros que parecen técnicos.",
  requiere: "1.04 Excedente y bienestar · 1.08 Modelos económicos",
  abre: "10.04 Estado de bienestar · 10.05 Imposición óptima · 2.10 Fallos de mercado",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La distinción es antigua y sigue siendo la más útil que tiene la disciplina. La **economía positiva** describe y predice: afirma **cómo son las cosas** y sus enunciados pueden ser verdaderos o falsos, contrastables con datos. La **economía normativa** valora y recomienda: afirma **cómo deberían ser** y sus enunciados dependen de un criterio previo sobre qué es deseable. La formulación original es de Hume: **de un conjunto de proposiciones sobre lo que es no se sigue ninguna proposición sobre lo que debe ser** sin introducir al menos una premisa valorativa. Ese salto es legítimo y a menudo necesario; lo que no es legítimo es darlo sin decirlo.",
            "El error frecuente consiste en creer que la economía positiva es la científica y la normativa una intrusión. Ninguna de las dos cosas. **La economía normativa es una disciplina rigurosa**: la economía del bienestar, la teoría de la elección social y la hacienda pública tienen resultados formales, teoremas y demostraciones. Lo que hace es explicitar los criterios de valor y **derivar sus consecuencias con precisión**, que es exactamente lo contrario de opinar. Un análisis normativo bien hecho no dice qué hay que hacer: dice qué hay que creer sobre lo deseable para que una determinada opción sea la correcta.",
            "El problema práctico es que **los juicios de valor rara vez viajan declarados**. Se cuelan en decisiones que tienen apariencia técnica y que casi nadie discute. Elegir la **eficiencia** como criterio ya lo es, porque no ordena repartos, como mostró la ficha 1.04. **Sumar excedentes** de personas distintas equivale a dar el mismo peso a cada euro con independencia de quién lo reciba. Elegir una **tasa de descuento** decide cuánto pesan las generaciones futuras. Y decidir **qué se mide y qué no** determina qué aparece en el debate: lo que no se mide no se discute. Cuatro decisiones que parecen metodológicas y son las cuatro profundamente valorativas.",
            "Conviene además ordenar de dónde vienen realmente los desacuerdos entre economistas, porque el debate público los presenta siempre como ideológicos y con frecuencia no lo son. Hay cuatro fuentes distintas. **Positivas de teoría**: qué mecanismo domina en una situación. **Positivas de magnitud**: cuánto vale un parámetro, que es la más común y la más resoluble, porque es empírica. **Normativas de criterio**: cuánto pesa la eficiencia frente a la equidad. Y **normativas de ámbito**: qué asuntos deben decidirse por mercado y cuáles no. Separar las cuatro convierte una discusión estéril en varias discusiones tratables, **y solo dos de ellas se resuelven con datos**.",
            "Sobre qué puede aportar un economista a una decisión pública, la respuesta honesta es acotada y aun así valiosa. Puede decir **qué efectos tendrá una medida**, con su incertidumbre. Puede **cuantificar los intercambios**: cuánto de una cosa hay que ceder para obtener cuánto de otra. Puede identificar **quién gana y quién pierde**, que es lo que la ficha 1.04 llamaba las tres cajas. Y puede señalar cuándo una propuesta es **internamente incoherente**, como el caso de los saldos sectoriales de la ficha 1.06. Lo que no puede es decidir cuánto vale un año de vida, cuánto pesa la desigualdad o qué se le debe a quien todavía no ha nacido.",
            "De ahí la exigencia práctica que cierra el bloque: **hacer explícito el juicio de valor en lugar de esconderlo**. Cuando el criterio se declara, el desacuerdo se vuelve productivo, porque se localiza: ya no se discute todo a la vez, sino un parámetro concreto sobre el que cada cual puede decir qué cree y por qué. Cuando no se declara, el debate se convierte en dos personas defendiendo conclusiones incompatibles derivadas de premisas que ninguna de las dos ha enunciado. **La transparencia sobre los valores no debilita el análisis económico: es lo único que lo hace utilizable por alguien que no comparta los valores de quien lo firma.**",
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
            { nom: "Enunciado positivo", sub: "Contrastable: puede ser falso.", cols: ["«Un tope de precios reduce la cantidad intercambiada»"] },
            { nom: "Enunciado normativo", sub: "Exige un criterio previo de valor.", cols: ["«No debe fijarse un tope de precios»"] },
            { nom: "Ley de Hume", sub: "El salto es legítimo si se declara.", cols: ["Del ser no se sigue el deber sin premisa valorativa"] },
            { nom: "Función de bienestar social", sub: "Hace explícitas las ponderaciones.", cols: ["$W = \\sum_i w_i U_i$"] },
            { nom: "Utilitarista", sub: "Todos los euros pesan igual: es un juicio, no un dato.", cols: ["$w_i = 1$ para todos"] },
            { nom: "Rawlsiana", sub: "Solo cuenta la situación del peor situado.", cols: ["$W = \\min(U_i)$"] },
            { nom: "Coste marginal de los fondos públicos", sub: "Cuánto cuesta socialmente recaudar un euro.", cols: ["$\\mathrm{CMFP} = \\dfrac{\\text{Recaudación} + \\mathrm{PIM}}{\\text{Recaudación}}$"] },
            { nom: "Cubo agujereado de Okun", sub: "Parte de lo transferido se pierde por el camino.", cols: ["Fuga $= 1 - \\dfrac{\\text{recibido}}{\\text{detraído}}$"] },
            { nom: "Peso umbral", sub: "Convierte el juicio en un número discutible.", cols: ["w* = coste social / cantidad entregada"] },
          ],
        },
      ],
    },
    {
      titulo: "El coste de redistribuir, con cifras",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomemos el impuesto de las fichas 1.03 y 1.04: recaudaba **230** y costaba **15** de eficiencia. Lo primero que se deduce es el **coste marginal de los fondos públicos**: para poner 230 en las arcas, la sociedad ha sacrificado 245, de modo que **cada euro recaudado cuesta 1,065 €**. Supongamos ahora que esos 230 se transfieren a otro grupo y que la gestión se lleva un 5 %, con lo que llegan **218,5**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe"],
          filas: [
            ["Detraído del grupo que paga", "230,0"],
            ["Pérdida de eficiencia del impuesto", "15,0"],
            ["Coste social total", "245,0"],
            ["Coste de gestión (5 %)", "11,5"],
            ["Recibido por el grupo beneficiario", "218,5"],
            { celdas: ["Fuga del cubo", "10,8 %"], clase: "total" },
          ],
          nota: "Este es el **cubo agujereado de Okun**: se sacan 245 de un sitio y llegan 218,5 a otro. La pregunta de la ficha es si merece la pena, y **la aritmética no puede contestarla**, porque para eso hay que decidir cuánto vale un euro en manos de cada grupo. Lo que sí puede hacer la aritmética es convertir esa decisión en un número concreto.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Peso relativo de un euro para el receptor", y: "Ganancia social neta" },
          dominio: { x: [0.5, 2.5], y: [-150, 320] },
          marcasX: [0.5, 1, 1.12, 1.5, 2, 2.5],
          marcasY: [-150, 0, 100, 200, 300],
          series: [
            { nombre: "Ganancia neta", color: "acento", puntos: [[0.5, -135.8], [1, -26.5], [1.5, 82.8], [2, 192], [2.5, 301.3] ], etiquetaEn: [2.1, 240] },
            { nombre: "", color: "tinta", trazo: "punteado", puntos: [[0.5, 0], [2.5, 0]] },
          ],
          puntos: [{ x: 1.1213, y: 0, etiqueta: "Umbral 1,12" }],
          nota: "La recta cruza el cero en **1,12**. Ese número traduce todo el debate a una sola pregunta contestable: **¿vale un euro en manos del hogar receptor más de 1,12 euros en manos del que paga?** Quien responda que sí debe apoyar la transferencia; quien responda que no, oponerse. Nótese lo que ha ocurrido: no se ha eliminado el juicio de valor —sigue estando ahí, intacto— pero ha quedado **aislado, cuantificado y expuesto**, de modo que el desacuerdo ya no es sobre toda la política sino sobre un número que cada cual puede defender.",
        },
        {
          tipo: "tabla",
          cabecera: ["Tipo de afirmación", "Ejemplo", "¿Cómo se resuelve?"],
          filas: [
            ["Positiva de teoría", "«El tope de precios genera escasez»", "Con un modelo y contraste empírico"],
            ["Positiva de magnitud", "«La fuga del cubo es del 10,8 %»", "Midiendo: es la más resoluble"],
            ["Normativa de criterio", "«Un euro del pobre vale más de 1,12 del rico»", "No se resuelve con datos: se declara y se debate"],
            { celdas: ["Normativa de ámbito", "«La sanidad no debe asignarse por precio»", "Tampoco: es una decisión sobre qué es un mercado"], clase: "total" },
          ],
          nota: "Las dos primeras filas admiten evidencia y las dos últimas no. **La mayoría de las discusiones económicas públicas mezclan las cuatro en la misma frase**, y por eso no avanzan: se aportan datos contra un desacuerdo normativo, o se invocan valores contra un desacuerdo de magnitud. Clasificar cada afirmación antes de discutirla es probablemente la destreza más práctica de todo este bloque.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la tasa de descuento del cambio climático",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Si hubiera que elegir un solo ejemplo de juicio de valor disfrazado de parámetro técnico, sería este. Los grandes informes económicos sobre el clima han llegado a recomendaciones muy distintas partiendo de una ciencia física prácticamente idéntica, y la mayor parte de la diferencia se explica por **un número**.",
            "**El problema es que los costes son hoy y los beneficios, dentro de un siglo.** Reducir emisiones exige invertir ahora; el daño evitado se materializa a lo largo de décadas. Para compararlos hay que traer los importes futuros al presente, y eso obliga a elegir una tasa de descuento, exactamente igual que en la valoración de proyectos de la ficha 7.03.",
            "**El efecto de esa elección es brutal.** Un daño de 100 dentro de cien años vale hoy **5,2 con una tasa del 3 %** y **24,9 con una del 1,4 %**: casi cinco veces más. No hay ningún desacuerdo sobre la física ni sobre el daño; hay un desacuerdo sobre el descuento, y produce por sí solo una diferencia de un orden de magnitud en cuánto conviene invertir hoy. **Toda la discrepancia entre recomendaciones de política puede caber en ese parámetro.**",
            "**Y la tasa de descuento no es un dato observable, es en parte una posición ética.** Se descompone en dos piezas. Una es empírica y discutible con datos: cuánto más rico será el futuro, porque si lo es mucho un euro le importará menos. La otra es la **tasa de preferencia temporal pura**, es decir, cuánto menos vale el bienestar de alguien **por el mero hecho de vivir después**. Quienes defienden tasas bajas argumentan que esa preferencia debe ser prácticamente cero, porque la fecha de nacimiento no es un criterio moral aceptable. Quienes defienden tasas más altas argumentan que la política debe usar la preferencia temporal que la gente **revela realmente** en sus decisiones de ahorro. Ambas posiciones son defendibles y **ninguna se resuelve con más datos**.",
            "**El ejemplo enseña además la trampa que da nombre a la ficha.** La discusión aparece en los informes como una nota metodológica sobre parámetros, no como un debate ético. Un lector no advertido concluirá que dos equipos de economistas discrepan sobre el clima, cuando discrepan sobre cuánto vale el bienestar de una persona que nacerá en 2120. **Presentar eso como técnico no es un engaño deliberado: es la consecuencia natural de que el juicio viaje dentro de un parámetro.**",
            "**Lo que se debe exigir, y es la conclusión de la ficha entera.** No que los informes eviten elegir una tasa —es imposible no elegirla, incluso no descontar es elegir cero— sino que **declaren cuál usan, expliquen por qué y muestren cómo cambia el resultado con otras**. Un análisis de sensibilidad sobre el parámetro valorativo convierte un veredicto discutible en una herramienta que puede usar alguien que no comparta las premisas de quien la escribió. Es exactamente lo que hacía el umbral de 1,12 del ejemplo anterior.",
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
            { t: "Creer que la economía normativa no es rigurosa", d: "La economía del bienestar y la elección social tienen teoremas y demostraciones. Lo que hacen es explicitar criterios de valor y derivar sus consecuencias con precisión, que es lo contrario de opinar. Un buen análisis normativo dice qué hay que creer para que una opción sea la correcta." },
            { t: "Presentar como técnica una decisión valorativa", d: "La tasa de descuento, las ponderaciones del bienestar, el criterio de eficiencia o la elección de qué medir son juicios de valor con apariencia metodológica. Que viajen dentro de un parámetro no los convierte en datos, solo los hace más difíciles de discutir." },
            { t: "Deducir un «debe» de un conjunto de «es»", d: "Ningún conjunto de hechos implica por sí solo una recomendación sin al menos una premisa sobre lo deseable. Decir que un tope de precios reduce la cantidad es positivo; decir que por tanto no debe aplicarse añade un criterio que hay que declarar." },
            { t: "Atribuir todo desacuerdo entre economistas a la ideología", d: "Hay cuatro fuentes distintas: qué mecanismo domina, cuánto vale un parámetro, qué criterio de valor se adopta y qué ámbitos deben regirse por el mercado. Las dos primeras se resuelven con evidencia, y son las más frecuentes." },
            { t: "Tratar la eficiencia como un criterio neutral", d: "Elegir la eficiencia como vara de medir ya es un juicio, porque no ordena repartos y admite resultados extremadamente desiguales. Es un criterio útil precisamente por ser mínimo, pero no es la ausencia de criterio." },
            { t: "Sumar excedentes sin advertir la ponderación implícita", d: "Agregar euros de personas distintas equivale a asignarles el mismo peso, lo que es una posición ética concreta —la utilitarista— presentada como aritmética. Es defendible y muy usada, pero debe declararse, porque otras ponderaciones cambian la conclusión." },
            { t: "Pensar que no descontar es evitar la elección", d: "No descontar equivale a elegir una tasa de cero, que es una posición tan valorativa como cualquier otra y con consecuencias muy fuertes. No existe la opción de no elegir; existe la de elegir sin decirlo." },
            { t: "Exigir al economista que decida lo que no le corresponde", d: "Puede cuantificar efectos, intercambios y ganadores y perdedores, y señalar incoherencias. No puede establecer cuánto vale un año de vida ni cuánto pesa la desigualdad. Pedirle lo segundo produce recomendaciones con premisas ocultas, que es justo lo que esta ficha trata de evitar." },
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
            "La contabilidad nacional parece el territorio más neutral posible, y precisamente por eso conviene ver cuántas decisiones valorativas contiene.",
          ],
          lista: [
            "La **frontera de la producción** es una convención con consecuencias. El trabajo doméstico no remunerado queda fuera y los alquileres imputados dentro; ambas decisiones son defendibles y ninguna es neutral. Como recordaba la ficha 1.09, **Kuznets advirtió desde el principio** de que el bienestar de una nación no se infiere de una medida de renta.",
            "La producción **no de mercado** se valora por suma de costes y por convención no incluye excedente neto de explotación. Eso implica que una ganancia de eficiencia en un servicio público se registra como **menor producción**, con la paradoja que señalaba la ficha 2.05. Es una convención asumida y reconocida como limitación.",
            "**Lo que se mide determina lo que se discute.** El PIB se publica cada trimestre y ocupa titulares; la distribución de la renta, la riqueza o el tiempo de trabajo no remunerado se publican con menos frecuencia y menos visibilidad. Esa asimetría de calendario y foco no es ideológica en su origen, pero tiene efectos sobre el debate público.",
            "De ahí las **cuentas satélite** —medioambientales, de salud, de trabajo no remunerado— y las propuestas de indicadores complementarios, como las del informe Stiglitz-Sen-Fitoussi. No sustituyen al PIB: **añaden dimensiones que la decisión original de qué medir dejó fuera**.",
            "Y las **revisiones metodológicas** cambian el nivel de los agregados —incorporar la investigación como inversión, o estimar actividades ilegales— con efectos directos sobre ratios que se usan como norma, como la deuda o el déficit sobre el PIB. Una decisión estadística puede alterar el cumplimiento de una regla fiscal sin que nada haya cambiado en la economía real.",
          ],
          cierre:
            "El punto que más rendimiento da es el tercero: la elección de qué se mide, con qué frecuencia y con cuánta visibilidad es una de las decisiones más normativas del sistema estadístico, y casi nunca se discute como tal.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "«Un tope de precios reduce la cantidad intercambiada» y «no debe fijarse un tope». ¿Qué las distingue?", a: "La primera es positiva: describe un efecto y puede contrastarse con datos, resultando verdadera o falsa. La segunda es normativa: añade un criterio sobre qué es deseable, que no se deduce de la primera. Pasar de una a otra exige al menos una premisa de valor, y lo exigible es declararla." },
            { q: "Se detraen 245 de un grupo y llegan 218,5 a otro. ¿Merece la pena?", a: "No se puede contestar sin un juicio de valor. Lo que sí puede hacerse es cuantificarlo: la transferencia se justifica si un euro en manos del receptor vale más de 1,12 euros en manos de quien paga. El juicio sigue siendo necesario, pero queda aislado en un solo número discutible." },
            { q: "¿Por qué la tasa de descuento es en parte una decisión ética?", a: "Porque incluye la preferencia temporal pura: cuánto menos vale el bienestar de alguien por el mero hecho de nacer después. Esa componente no se observa en ningún dato y decide buena parte del resultado: un daño de 100 dentro de un siglo vale hoy 5,2 al 3 % y 24,9 al 1,4 %." },
            { q: "¿Es neutral elegir la eficiencia como criterio?", a: "No. La eficiencia solo descarta desperdicios y es compatible con repartos extremadamente desiguales, como mostraba la ficha 1.04. Adoptarla como vara de medir es un juicio de valor, defendible por ser mínimo y poco exigente, pero juicio al fin y al cabo." },
            { q: "Dos economistas discrepan sobre una política. ¿Cómo saber si el desacuerdo es resoluble?", a: "Clasificando la afirmación. Si discrepan sobre qué mecanismo domina o sobre cuánto vale un parámetro, el desacuerdo es positivo y admite evidencia. Si discrepan sobre cuánto pesa la equidad o sobre qué debe asignarse por mercado, es normativo y no se resuelve con datos, solo se explicita." },
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
              q: "Un informe de coste-beneficio usa una tasa de descuento del 4 %. ¿Qué tipo de decisión es esa?",
              opciones: [
                "En parte valorativa, porque fija cuánto pesa el bienestar de las generaciones futuras",
                "Técnica: se toma del tipo de interés observado en los mercados",
                "Irrelevante, porque afecta por igual a costes y beneficios",
                "Puramente convencional, ya que todos los organismos usan la misma",
              ],
              correcta: 0,
              porque: [
                "Cuanto mayor sea la tasa, menos valen hoy los efectos lejanos. En un proyecto climático esa cifra decide casi el resultado, y es un juicio de valor viajando dentro de un parámetro.",
                "Los mercados dan un dato de partida, pero elegir cuál y cómo trasladarlo a un horizonte de cincuenta años ya no es un cálculo: es una postura sobre el futuro con apariencia metodológica.",
                "No afecta por igual: los costes suelen ser inmediatos y los beneficios lejanos, o al revés. Descontar cambia el equilibrio entre ambos justo porque no ocurren a la vez.",
                "No hay una tasa única y los organismos difieren, precisamente porque no es una constante física sino una elección que cada uno justifica.",
              ],
            },
            {
              q: "«Un tope de precios reduce la cantidad intercambiada» y «no debe fijarse un tope». ¿Qué separa ambas afirmaciones?",
              opciones: [
                "Que la segunda exige conocer también el efecto sobre la recaudación",
                "Que la primera es verificable y la segunda es una opinión sin fundamento",
                "Nada: la segunda se deduce de la primera",
                "La segunda añade una premisa sobre lo deseable que la primera no contiene",
              ],
              correcta: 3,
              porque: [
                "Más datos positivos no cierran el hueco: por muchos efectos que se midan, seguirá haciendo falta un criterio para ordenarlos.",
                "La economía normativa tiene teoremas y demostraciones: explicita criterios de valor y deriva sus consecuencias con precisión, que es lo contrario de opinar.",
                "Ningún conjunto de hechos implica por sí solo una recomendación. Hace falta al menos una premisa sobre qué es preferible, y el salto se da sin decirlo.",
                "Reducir la cantidad es un hecho; que eso baste para descartar la medida requiere decidir cuánto pesa esa reducción frente a lo que el tope pretende conseguir. Esa premisa hay que ponerla sobre la mesa.",
              ],
            },
            {
              q: "Dos economistas discrepan sobre una política. ¿Cómo saber si el desacuerdo puede resolverse con evidencia?",
              opciones: [
                "Depende de si ambos usan el mismo modelo teórico",
                "Viendo de cuál de las cuatro fuentes viene: mecanismo y parámetro sí se resuelven; criterio de valor y ámbito, no",
                "No puede: todo desacuerdo entre economistas es en el fondo ideológico",
                "Se resuelve siempre con datos suficientes y de calidad",
              ],
              correcta: 1,
              porque: [
                "Usar el mismo modelo no garantiza acuerdo: pueden diferir en los parámetros. Y usar modelos distintos no lo impide: pueden coincidir en la predicción relevante.",
                "Distinguir la fuente es lo primero que conviene hacer, porque determina si tiene sentido buscar datos o si lo que hace falta es explicitar el criterio y discutirlo como tal.",
                "Es la atribución fácil y casi siempre falsa. Las dos fuentes más frecuentes —qué mecanismo domina y cuánto vale un parámetro— son empíricas y se zanjan con evidencia.",
                "Los datos no deciden cuánto pesa la desigualdad ni cuánto vale un año de vida. Esas preguntas no tienen respuesta empírica por muchos datos que haya.",
              ],
            },
            {
              q: "¿Qué puede y qué no puede hacer un economista en un debate normativo?",
              opciones: [
                "No debe intervenir, porque su análisis es solo positivo",
                "Puede recomendar siempre que use el criterio de eficiencia, que es neutral",
                "Puede y debe recomendar la política óptima, que es su función técnica",
                "Puede cuantificar efectos, intercambios, ganadores y perdedores; no establecer cuánto pesa la desigualdad",
              ],
              correcta: 3,
              porque: [
                "Puede intervenir y aportar mucho. Retirarse deja el terreno a quien no cuantifica nada.",
                "Elegir la eficiencia como vara ya es un juicio: no ordena repartos y admite resultados extremadamente desiguales. Es útil por ser mínimo, pero no es la ausencia de criterio.",
                "Pedirle que decida lo que no le corresponde produce recomendaciones con premisas ocultas, que es lo peor de los dos mundos: ni transparentes ni neutrales.",
                "Y también señalar incoherencias, que es una aportación fuerte: detectar que un plan es aritméticamente imposible no exige ningún juicio de valor.",
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
            { ref: "Rodrik, Las leyes de la economía", nota: "el capítulo sobre qué puede y qué no puede decir un economista; el cierre natural de este bloque." },
            { ref: "Sen, Sobre ética y economía", nota: "por qué la separación estricta entre economía y ética empobrece a las dos; corto y directamente sobre el tema de la ficha." },
            { ref: "Hausman y McPherson, Economic Analysis, Moral Philosophy and Public Policy", nota: "el tratamiento sistemático de los juicios de valor incorporados al análisis económico." },
            { ref: "Stiglitz, Sen y Fitoussi, informe sobre la medición del desempeño económico", nota: "qué deja fuera el PIB y qué se ha propuesto para completarlo; enlaza con las fichas 3.01 y 10.07." },
          ],
        },
      ],
    },
  ],
};
