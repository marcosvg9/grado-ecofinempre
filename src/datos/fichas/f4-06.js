/* Ficha 4.06 — Diagnóstico: heterocedasticidad, autocorrelación, multicolinealidad. */

export default {
  codigo: "4.06",
  titulo: "Diagnóstico: heterocedasticidad, autocorrelación, multicolinealidad",
  nivel: 3,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "4 h",
  nucleo:
    "Los tres problemas clásicos del manual no atacan donde la intuición sugiere: los coeficientes siguen siendo insesgados y lo que se rompe son los errores estándar. Por eso el peligro no es equivocarse en la estimación, sino declarar una precisión que no se tiene.",
  requiere: "4.05 Regresión por MCO · 4.04 Contraste de hipótesis",
  abre: "4.07 Variables instrumentales · 4.08 Datos de panel · 4.09 Series temporales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Conviene empezar por la distinción que ordena toda la ficha, porque es la que casi nunca se hace bien. Los supuestos de Gauss-Markov se dividen en **los que garantizan que el estimador no se equivoca sistemáticamente** y **los que garantizan que sabemos cuánto se equivoca**. El supuesto crítico del primer grupo es que el error tenga media condicional cero; cuando falla —variables omitidas, error de medida, causalidad inversa— **los coeficientes están sesgados** y ninguna corrección de errores estándar arregla nada. Los tres problemas de esta ficha pertenecen al segundo grupo: $\\hat\\beta$ **sigue siendo insesgado y consistente**, y lo que se rompe es la fórmula de su varianza. La consecuencia es más sutil y por eso más peligrosa: el número está bien y el intervalo, mal.",
            "**La heterocedasticidad es que la varianza del error no sea constante.** En economía es la situación normal, no la excepción: el gasto de los hogares ricos varía mucho más que el de los pobres, los beneficios de las empresas grandes fluctúan más que los de las pequeñas, y cualquier variable agregada por unidades de tamaño desigual la produce mecánicamente. MCO sigue siendo insesgado pero deja de ser eficiente, y sobre todo **la fórmula estándar de los errores estándar es sencillamente incorrecta**: puede infravalorar o sobrevalorar la precisión, y en la práctica suele infravalorar, con lo que se declaran significativos coeficientes que no lo son. La solución moderna es directa: usar **errores estándar robustos de White**, que estiman la varianza sin suponer homocedasticidad. Son tan baratos que el consejo práctico es usarlos por defecto y olvidarse.",
            "**La autocorrelación es que los errores estén correlacionados entre sí**, y aparece en cuanto hay una dimensión temporal o espacial. Si un choque en un trimestre persiste en el siguiente —y casi todos los choques macroeconómicos persisten—, las observaciones no aportan información independiente. Aquí el daño es mayor que en el caso anterior porque es **sistemáticamente en una dirección: con autocorrelación positiva, la fórmula estándar infravalora los errores estándar**, a veces por un factor de tres o cuatro. Se está contando cada observación como si fuera nueva cuando en buena parte repite la anterior, de modo que **la muestra efectiva es mucho menor que la nominal**. El **Durbin-Watson** es el diagnóstico clásico —valores próximos a 2 indican ausencia, próximos a 0 autocorrelación positiva fuerte—, y las correcciones habituales son los errores estándar de **Newey-West**, robustos a la vez a heterocedasticidad y autocorrelación.",
            "**Hay una trampa importante con la autocorrelación**: a menudo no es un problema del error, sino el **síntoma de un modelo mal especificado**. Una variable relevante omitida que sea persistente, una forma funcional equivocada o una dinámica no modelada dejan un residuo correlacionado. Corregir los errores estándar en ese caso es tapar el aviso en lugar de atender la avería. La primera reacción ante un Durbin-Watson muy bajo debe ser preguntarse **qué falta en el modelo**, y solo después aplicar la corrección.",
            "**La multicolinealidad es distinta de las otras dos y suele malinterpretarse en ambos sentidos.** No es una violación de ningún supuesto: es simplemente que **dos o más explicativas comparten casi toda su variación**. Por Frisch-Waugh, el coeficiente de una variable se estima con la parte de ella que las demás no explican; si esa parte es minúscula, se está estimando con muy poca información y **el error estándar se dispara**. El síntoma característico es un modelo con $R^2$ alto y un **contraste F conjunto muy significativo**, pero con todos los coeficientes individualmente no significativos, y muy inestables ante pequeños cambios en la muestra o en la especificación.",
            "**Lo importante es que la multicolinealidad no sesga nada**: los coeficientes siguen siendo insesgados y el modelo predice perfectamente. Lo que no permite es **separar los efectos**, porque los datos no contienen la información necesaria para hacerlo. Por eso la mayoría de los remedios que se enseñan son malos: eliminar una variable relevante introduce sesgo de variable omitida, que es un problema peor. El diagnóstico se hace con el **factor de inflación de la varianza**, y la regla de dedo habitual —VIF mayor que 10— es una convención sin más fundamento que la costumbre. La respuesta honesta suele ser **reconocer que con estos datos no se puede responder a esa pregunta**, y buscar más variación: más muestra, otra población, un experimento.",
            "**El diagnóstico se hace mirando los residuos, y ese es el hábito que hay que adquirir.** Representarlos frente a los valores ajustados para detectar heterocedasticidad y no linealidad; frente al tiempo, para ver autocorrelación; en un gráfico cuantil-cuantil, para juzgar normalidad; y comprobar qué observaciones tienen mucha influencia. Existen contrastes formales —Breusch-Pagan y White para heterocedasticidad, Breusch-Godfrey para autocorrelación— y son útiles, pero **el gráfico de residuos detecta problemas que ningún contraste específico busca**, con el mismo argumento del cuarteto de Anscombe de la ficha 4.02.",
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
            { nom: "Homocedasticidad", sub: "El supuesto que rompe la heterocedasticidad.", cols: ["$\\mathrm{Var}(u \\mid X) = \\sigma^2$ constante"] },
            { nom: "Errores robustos de White", sub: "Válidos con cualquier forma de heterocedasticidad.", cols: ["$\\hat V = (X'X)^{-1}\\left(\\sum_i \\hat u_i^2 x_i x_i'\\right)(X'X)^{-1}$"] },
            { nom: "Ausencia de autocorrelación", sub: "Falla con cualquier dimensión temporal.", cols: ["$\\mathrm{Cov}(u_t, u_s) = 0$ para $t \\neq s$"] },
            { nom: "Durbin-Watson", sub: "$\\approx 2$ sin autocorrelación; $\\to 0$ positiva fuerte.", cols: ["$\\mathrm{DW} \\approx 2(1 - \\hat\\rho)$"] },
            { nom: "Coste de ignorar $\\rho$ > 0", sub: "Con $\\rho$ = 0,85 los errores se multiplican por 3,5.", cols: ["$\\text{factor} \\approx \\sqrt{\\dfrac{1+\\rho}{1-\\rho}}$"] },
            { nom: "Newey-West", sub: "Robusto a heterocedasticidad y autocorrelación.", cols: ["HAC con ventana de rezagos"] },
            { nom: "Factor de inflación de la varianza", sub: "$R^2_j$ de regresar $x_j$ sobre las demás.", cols: ["$\\mathrm{VIF}_j = \\dfrac{1}{1 - R^2_j}$"] },
            { nom: "Efecto sobre el error estándar", sub: "Multiplica la desviación típica del coeficiente.", cols: ["$\\mathrm{EE}(\\hat\\beta_j) \\propto \\sqrt{\\mathrm{VIF}_j}$"] },
            { nom: "Firma de la colinealidad", sub: "El modelo predice y no identifica.", cols: ["F conjunto significativo, t individuales no"] },
            { nom: "Regla de oro", sub: "El diagnóstico que no sesga nada.", cols: ["$\\hat\\beta$ insesgado; lo que se rompe es $\\mathrm{Var}(\\hat\\beta)$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: los tres problemas, con los mismos coeficientes",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, heterocedasticidad.** Doce hogares con su renta y su gasto anual, en miles de euros. Hay dos hogares por cada nivel de renta —10, 20, 30, 40, 50 y 60— y los gastos son **9 y 9 · 17 y 19 · 24 y 28 · 31 y 37 · 38 y 46 · 44 y 56**. La regresión da una propensión marginal a consumir de **0,8143** y una constante de **1,333**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Renta", y: "Gasto" },
          dominio: { x: [0, 70], y: [0, 62] },
          marcasX: [0, 10, 20, 30, 40, 50, 60],
          marcasY: [0, 20, 40, 60],
          series: [
            { nombre: "Ajuste MCO", color: "acento", grosor: 2.2, etiquetaEn: [70, 58.33], puntos: [[0, 1.33], [70, 58.33]] },
            { nombre: "", color: "alerta", trazo: "punteado", grosor: 1.3, puntos: [[10, 9], [10, 9.48]] },
            { nombre: "", color: "alerta", trazo: "punteado", grosor: 1.3, puntos: [[20, 17], [20, 19]] },
            { nombre: "", color: "alerta", trazo: "punteado", grosor: 1.3, puntos: [[30, 24], [30, 28]] },
            { nombre: "", color: "alerta", trazo: "punteado", grosor: 1.3, puntos: [[40, 31], [40, 37]] },
            { nombre: "", color: "alerta", trazo: "punteado", grosor: 1.3, puntos: [[50, 38], [50, 46]] },
            { nombre: "", color: "alerta", trazo: "punteado", grosor: 1.3, puntos: [[60, 44], [60, 56]] },
          ],
          puntos: [
            { x: 10, y: 9, guias: false }, { x: 20, y: 17, guias: false }, { x: 20, y: 19, guias: false },
            { x: 30, y: 24, guias: false }, { x: 30, y: 28, guias: false }, { x: 40, y: 31, guias: false },
            { x: 40, y: 37, guias: false }, { x: 50, y: 38, guias: false }, { x: 50, y: 46, guias: false },
            { x: 60, y: 44, guias: false }, { x: 60, y: 56, guias: false },
          ],
          nota: "La forma de **abanico** es la firma visual de la heterocedasticidad, y aquí es inequívoca: la distancia entre los dos hogares de cada nivel de renta pasa de prácticamente cero a los 10.000 € hasta doce mil euros a los 60.000. El motivo económico es transparente: **con renta baja el gasto está casi determinado por las necesidades, y con renta alta hay margen para decidir**. La recta, en cambio, está perfectamente bien situada: pasa por el centro de la nube en todos los tramos. Eso es exactamente lo que dice la teoría — **el coeficiente es correcto, la varianza no lo es**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Nivel de renta", "10", "20", "30", "40", "50", "60"],
          filas: [
            ["Residuo del primer hogar", "−0,48", "−0,62", "−1,76", "−2,90", "−4,05", "−6,19"],
            { celdas: ["Residuo del segundo hogar", "−0,48", "+1,38", "+2,24", "+3,10", "+3,95", "+5,81"], clase: "total" },
          ],
          nota: "Los residuos crecen **monótonamente** con la renta, que es lo que ningún contraste hace falta para ver. El efecto sobre la inferencia es el siguiente: el error estándar por la fórmula clásica es **0,0616**, que da un t de 13,21; el error robusto de White es **0,0725**, que da un t de 11,23. La fórmula estándar **infravalora la incertidumbre en un 17,7 %**. Aquí la conclusión no cambia porque el efecto es enorme, pero con un coeficiente marginal esa diferencia decide entre publicar un hallazgo y no tener nada, y **el coeficiente estimado es idéntico en ambos casos: 0,8143**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, autocorrelación.** Supongamos ahora una regresión con veinte observaciones trimestrales cuyos residuos, en orden temporal, describen ondas amplias: suben durante cinco trimestres, bajan durante otros cinco y repiten. El estadístico de Durbin-Watson vale **0,303**, muy lejos del 2 que indicaría independencia, y el coeficiente autorregresivo implícito es $\\rho \\approx 0{,}83$. Cada residuo predice el siguiente casi por completo.",
            "El coste es cuantificable: con $\\rho = 0{,}85$ el factor de corrección de los errores estándar es $\\sqrt{(1+\\rho)/(1-\\rho)} = 3{,}51$. Es decir, **los errores estándar clásicos serían tres veces y media menores que los correctos**, y un t aparente de 4 sería en realidad de 1,1. Un resultado espectacular se convierte en nada. Y antes de aplicar Newey-West conviene hacerse la pregunta previa: unos residuos con esa persistencia suelen indicar que **al modelo le falta una variable o una dinámica**, no que el error sea caprichoso.",
            "**Tercero, multicolinealidad.** Volvemos a los diez trabajadores de la ficha 4.05, donde la educación sola daba un coeficiente de 2,00 con un t de 5,66. Añadimos ahora la **experiencia laboral** —22, 18, 20, 16, 14, 12, 10, 8, 6 y 4 años—, que en esta muestra está casi perfectamente correlacionada con la educación en sentido inverso: **r = −0,986**, porque quien estudió más lleva menos tiempo trabajando.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "Solo educación", "Educación y experiencia"],
          filas: [
            ["Coeficiente de educación", "2,000", "3,275"],
            ["Error estándar", "0,354", "2,251"],
            ["t (p-valor)", "5,66 (0,0005)", "1,46 (0,189)"],
            ["Coeficiente de experiencia", "—", "0,675"],
            ["t (p-valor)", "—", "0,57 (0,584)"],
            ["$R^2$", "0,800", "0,809"],
            ["VIF", "1,00", "37,13"],
            { celdas: ["F conjunta (valor crítico)", "32,0 (5,32)", "14,8 (4,74)"], clase: "total" },
          ],
          nota: "Este cuadro es el retrato exacto de la colinealidad. El error estándar de la educación **se multiplica por más de seis**, el coeficiente se vuelve inestable —salta de 2,00 a 3,28— y **ninguna de las dos variables es significativa por separado**, con p-valores de 0,19 y 0,58. Y sin embargo el modelo entero sí lo es: la $F$ conjunta vale 14,8 frente a un valor crítico de 4,74, y el $R^2$ incluso sube. Esa combinación —**el conjunto significa y las partes no**— es el diagnóstico. Lo que ocurre es que, tras residualizar la educación respecto de la experiencia, apenas queda un 2,7 % de su variación con la que estimar. Los datos no permiten separar ambos efectos, y **eliminar una de las dos variables no lo arreglaría: introduciría sesgo de variable omitida**.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué tantos resultados macroeconómicos no aguantan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La macroeconomía aplicada es el terreno donde estos tres problemas se acumulan, y donde con más frecuencia se han declarado hallazgos que después se han desinflado. Vale la pena ver por qué, porque el patrón se repite.",
            "**El primer factor es que las series macroeconómicas son cortas y muy persistentes.** Un país con datos trimestrales desde 1980 aporta unas ciento ochenta observaciones, y están fuertemente autocorrelacionadas: el PIB de un trimestre predice casi por completo el siguiente. **El número efectivo de observaciones independientes es de unas pocas decenas**, no de ciento ochenta. Cualquier error estándar calculado sin corregir eso es demasiado pequeño, y el resultado, demasiado fácil de encontrar significativo.",
            "**El segundo es que las variables macroeconómicas están colinealizadas por construcción.** Producción, empleo, consumo, inversión y crédito se mueven casi al unísono a lo largo del ciclo. Intentar separar el efecto de cada una es pedir a los datos que distingan lo que en la historia observada nunca ocurrió por separado. Aquí la colinealidad no es un accidente de la muestra: **es una propiedad de la economía**, y no se resuelve con más años porque los años nuevos traen la misma correlación.",
            "**El tercero es la selección de especificación con muy pocos grados de libertad.** Con series cortas, la elección de rezagos, la ventana temporal, la inclusión de una variable de control o el tratamiento de un episodio atípico —una crisis, una pandemia— cambian los resultados radicalmente. Es el problema de multiplicidad de la ficha 4.04 en su versión más aguda, porque las combinaciones son muchas y las observaciones, pocas.",
            "**El episodio más conocido reúne los tres.** Un influyente resultado sobre la relación entre deuda pública y crecimiento, que sostenía la existencia de un umbral a partir del cual el crecimiento caía bruscamente, resultó apoyarse en un tratamiento discutible de los datos: una hoja de cálculo con países omitidos, una ponderación que daba a un país con pocos años de observación el mismo peso que a otro con décadas, y un umbral elegido sobre los mismos datos con los que se contrastaba. Al rehacerse el cálculo, el escalón desaparecía y quedaba una relación negativa suave, **compatible además con causalidad inversa**: el bajo crecimiento eleva la deuda tanto como la deuda podría frenar el crecimiento. El resultado había circulado ya por informes de política fiscal de media Europa.",
            "**Qué hacer, en la práctica.** Usar errores robustos a heterocedasticidad y autocorrelación por defecto, no como excepción. Contar los grados de libertad efectivos, no los nominales. Mostrar la sensibilidad del resultado a la ventana temporal, a los rezagos y a la exclusión de países o episodios, en lugar de presentar una única especificación afortunada. Preferir diseños con variación entre unidades comparables —panel, como en la ficha 4.08— a series agregadas largas. Y, sobre todo, **desconfiar de un resultado macroeconómico contundente obtenido con doscientas observaciones correlacionadas**, por muy bajo que sea el p-valor.",
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
            { t: "Creer que estos problemas sesgan los coeficientes", d: "No lo hacen: $\\hat\\beta$ sigue siendo insesgado y consistente en los tres casos. Lo que se rompe es la fórmula de la varianza, de modo que el error está en el intervalo y en el p-valor, no en la estimación. Confundirlo lleva a buscar la solución en el sitio equivocado y a ignorar los problemas que sí sesgan, que son los de la ficha 4.07." },
            { t: "Corregir la autocorrelación sin preguntarse qué la causa", d: "Unos residuos muy persistentes suelen indicar que falta una variable relevante, que la forma funcional es incorrecta o que la dinámica no está modelada. Aplicar Newey-West en ese caso tapa el aviso sin reparar la avería. La corrección es legítima cuando la persistencia es del error, no del modelo." },
            { t: "Eliminar una variable para resolver la colinealidad", d: "Si la variable es relevante, quitarla introduce sesgo de variable omitida, que es un problema mayor que un error estándar grande. La colinealidad no sesga: solo dice que estos datos no contienen información para separar los efectos. Reconocerlo es más honesto que sacrificar la especificación correcta." },
            { t: "Leer un F significativo con todos los t no significativos como un fallo del programa", d: "Es la firma clásica de la colinealidad: el conjunto de variables explica, pero los datos no permiten repartir el mérito. En el ejemplo, F vale 14,8 frente a un crítico de 4,74 mientras los dos coeficientes tienen p-valores de 0,19 y 0,58. Ambos resultados son correctos y compatibles." },
            { t: "Aplicar la regla del VIF mayor que 10 como si fuera un umbral con contenido", d: "Es una convención sin fundamento teórico. Lo relevante es si el error estándar resultante permite responder a la pregunta con la precisión que se necesita, y eso depende del tamaño del efecto que interese detectar, no de un número redondo importado de un manual." },
            { t: "Suponer homocedasticidad por defecto en datos económicos", d: "La varianza casi siempre crece con el nivel de la variable: gasto, beneficios, ventas, cualquier magnitud agregada por unidades de tamaño desigual. Los errores robustos cuestan una opción en el programa y no tienen desventaja apreciable en muestras razonables. El defecto sensato es usarlos siempre." },
            { t: "Contar las observaciones nominales en series temporales", d: "Con autocorrelación fuerte, doscientos trimestres pueden aportar la información de veinte observaciones independientes. Con $\\rho$ = 0,85 los errores estándar correctos son 3,5 veces los clásicos. Ignorarlo convierte en significativo casi cualquier resultado macroeconómico." },
            { t: "Confiar solo en los contrastes formales y no mirar los residuos", d: "Breusch-Pagan, White y Breusch-Godfrey buscan cada uno un problema concreto. El gráfico de residuos contra valores ajustados revela además no linealidades, observaciones influyentes y errores de datos que ningún contraste específico busca. Es el mismo argumento del cuarteto de Anscombe." },
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
            "Los datos de contabilidad nacional son el caso de libro de las tres patologías a la vez, y conocerlo cambia cómo se leen los trabajos que los usan.",
          ],
          lista: [
            "Las series de contabilidad nacional son **fuertemente autocorrelacionadas por construcción**: son agregados de decisiones persistentes, están suavizadas por el propio proceso de elaboración y muchas se obtienen interpolando información anual a frecuencia trimestral. La ficha 4.09 muestra a dónde lleva ignorarlo, y la 10.10 explica por qué el suavizado es inherente al método.",
            "Los **componentes del PIB se mueven al unísono** a lo largo del ciclo, de modo que cualquier regresión que intente separar el papel del consumo, la inversión y el crédito se enfrenta a colinealidad estructural. No es un defecto de la muestra: es lo que hace un ciclo económico, y por eso las estimaciones son tan inestables entre especificaciones.",
            "Los **datos por comunidades autónomas o por ramas de actividad** son marcadamente heterocedásticos: Madrid y Cataluña tienen agregados un orden de magnitud mayores que La Rioja, y sus varianzas también. Toda regresión con unidades de tamaño muy desigual necesita errores robustos, y a menudo también ponderación o una transformación logarítmica.",
            "El **encadenamiento de volúmenes de la ficha 10.08** introduce una dependencia adicional entre observaciones consecutivas, porque cada año se enlaza con el anterior mediante sus propias ponderaciones. La serie resultante no es una sucesión de mediciones independientes, y su falta de aditividad recuerda que es un constructo, no una observación directa.",
            "Y las **revisiones** significan que la serie con la que se estima hoy no es la que existía cuando los agentes tomaron sus decisiones. Una regresión con datos revisados atribuye a los agentes una información que no tenían, un sesgo que solo se evita usando bases de datos en tiempo real, como explica la ficha 10.10.",
          ],
          cierre:
            "Todo esto se resume en un consejo operativo: al usar contabilidad nacional, **los errores estándar clásicos son casi siempre demasiado pequeños**. Presentar un resultado macroeconómico sin corrección robusta y sin análisis de sensibilidad es declarar una precisión que los datos no tienen.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Con heterocedasticidad evidente, ¿está mal estimada la propensión a consumir de 0,8143?", a: "No. MCO sigue siendo insesgado y consistente, y la recta pasa por el centro de la nube en todos los tramos de renta. Lo que está mal es el error estándar: la fórmula clásica da 0,0616 y el robusto de White da 0,0725, una infravaloración del 17,7 % de la incertidumbre. El coeficiente es el mismo en ambos cálculos." },
            { q: "¿Por qué la heterocedasticidad es la norma en datos económicos?", a: "Porque la dispersión suele crecer con el nivel. Los hogares de renta alta tienen margen para decidir cuánto gastan y los de renta baja no, las empresas grandes tienen beneficios más volátiles, y cualquier agregado de unidades de tamaño desigual la produce mecánicamente. Por eso el defecto sensato es usar errores robustos siempre." },
            { q: "Un Durbin-Watson de 0,303. ¿Qué hay que hacer primero?", a: "Preguntarse qué le falta al modelo. Una autocorrelación tan fuerte suele ser síntoma de una variable relevante persistente omitida, de una forma funcional equivocada o de una dinámica no modelada. Solo si el modelo está bien especificado tiene sentido corregir con Newey-West; aplicarlo antes es tapar el aviso." },
            { q: "Con $\\rho$ = 0,85, ¿cuánto se equivocan los errores estándar clásicos?", a: "Los subestiman por un factor de aproximadamente 3,5, según $\\sqrt{(1+\\rho)/(1-\\rho)}$. Un t aparente de 4 sería en realidad de 1,1, es decir, no significativo. El motivo es que las observaciones no aportan información independiente: la muestra efectiva es mucho menor que la nominal." },
            { q: "F conjunta significativa y ningún coeficiente individual significativo. ¿Qué ocurre?", a: "Colinealidad. Las variables explican conjuntamente pero los datos no permiten repartir el efecto entre ellas. En el ejemplo, educación y experiencia tienen r = −0,986 y un VIF de 37: tras residualizar una respecto de la otra queda menos del 3 % de variación con la que estimar. Los coeficientes siguen siendo insesgados, solo que imprecisos." },
            { q: "¿Por qué eliminar la experiencia no es la solución a ese VIF de 37?", a: "Porque si la experiencia influye realmente en el salario, quitarla introduce sesgo de variable omitida, que es un problema peor que un error estándar grande: sesga en lugar de solo restar precisión. La respuesta honesta es que con esta muestra no se pueden separar ambos efectos, y que hace falta más variación, no una especificación más cómoda." },
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
              q: "Heterocedasticidad, autocorrelación y multicolinealidad. ¿Qué le hacen a los coeficientes estimados?",
              opciones: [
                "Los sesgan, y por eso hay que corregirlos",
                "Nada: $\\hat\\beta$ sigue siendo insesgado y consistente; lo que se rompe es la fórmula de la varianza",
                "Solo la multicolinealidad los sesga",
                "Los hacen inconsistentes, aunque insesgados en muestras pequeñas",
              ],
              correcta: 1,
              porque: [
                "Confundirlo lleva a buscar la solución en el sitio equivocado y a ignorar los problemas que sí sesgan, que son los de la ficha 4.07.",
                "El número está bien y el intervalo, mal. La consecuencia es más sutil y por eso más peligrosa: el coeficiente se puede creer, su significación no.",
                "La multicolinealidad es la que menos daño hace de las tres: solo agranda los errores estándar.",
                "Son consistentes también: con más datos convergen al valor verdadero.",
              ],
            },
            {
              q: "Un modelo tiene la F conjunta muy significativa y ningún coeficiente individualmente significativo. ¿Qué ocurre?",
              opciones: [
                "Es la firma de la colinealidad: el conjunto explica, pero los datos no permiten repartir el mérito",
                "La muestra es demasiado pequeña para cualquier inferencia",
                "El modelo está mal especificado y hay que cambiar de variables",
                "Hay un error en el programa estadístico",
              ],
              correcta: 0,
              porque: [
                "En el ejemplo la F vale 14,8 frente a un crítico de 4,74, y los p-valores individuales son 0,19 y 0,58. Tras residualizar una variable respecto de la otra apenas queda un 2,7 % de variación con la que estimar.",
                "El tamaño influye, pero con estas mismas variables una muestra mayor seguiría teniendo el mismo problema si la correlación persiste.",
                "Las variables pueden ser las correctas: el problema es que se mueven juntas en estos datos, no que sobren.",
                "No hay ningún error: ambos resultados son correctos y compatibles, y su combinación es informativa.",
              ],
            },
            {
              q: "Ante colinealidad entre dos variables relevantes, ¿conviene eliminar una?",
              opciones: [
                "Sí, si su VIF supera 10",
                "No: introduce sesgo de variable omitida, que es peor que un error estándar grande",
                "Solo si las dos miden aproximadamente lo mismo",
                "Sí: reduce los errores estándar y el modelo queda más limpio",
              ],
              correcta: 1,
              porque: [
                "El umbral de 10 es una convención sin fundamento teórico. Lo relevante es si el error estándar resultante permite responder a la pregunta.",
                "La colinealidad no sesga: solo dice que estos datos no permiten separar ambos efectos. Quitar una variable relevante sí sesga, y ese cambio empeora el diagnóstico.",
                "Si midieran lo mismo sería una decisión de medición, no de colinealidad. Aquí son variables distintas que se mueven juntas.",
                "Los errores estándar bajan, sí, pero alrededor de un coeficiente que ya no estima lo que decía estimar. Se gana precisión sobre un número equivocado.",
              ],
            },
            {
              q: "Los residuos de una regresión con datos trimestrales están fuertemente autocorrelados. ¿Cuál es la primera pregunta?",
              opciones: [
                "Qué la causa: suele indicar que falta una variable, una forma funcional o una dinámica",
                "Qué corrección aplicar: Newey-West o mínimos cuadrados generalizados",
                "Si conviene pasar a datos anuales para eliminarla",
                "Si la muestra es lo bastante larga para estimar $\\rho$",
              ],
              correcta: 0,
              porque: [
                "Unos residuos que predicen a los siguientes casi por completo indican que hay estructura sin modelar. Ajustar los errores estándar es el segundo paso, no el primero.",
                "Corregir el error estándar acepta el modelo como está. Si el problema es de especificación, se estarían calculando bien los errores de un modelo equivocado.",
                "Agregar temporalmente esconde el problema en vez de resolverlo, y además tira información.",
                "Estimar $\\rho$ es parte de la corrección, que es justamente lo que conviene no hacer antes de preguntarse por la causa.",
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
            { ref: "Wooldridge, Introducción a la econometría", nota: "los capítulos de heterocedasticidad y de series temporales; el tratamiento de por qué los coeficientes no se sesgan es especialmente claro." },
            { ref: "Angrist y Pischke, Mostly Harmless Econometrics", nota: "la sección sobre errores estándar y el problema de los grados de libertad efectivos, con ejemplos de por qué tantos resultados no se replican." },
            { ref: "White, «A Heteroskedasticity-Consistent Covariance Matrix Estimator», 1980", nota: "el artículo que cambió la práctica: por qué se puede corregir sin conocer la forma de la heterocedasticidad." },
            { ref: "Herndon, Ash y Pollin, «Does High Public Debt Consistently Stifle Economic Growth?», 2014", nota: "la reconstrucción del caso comentado; instructivo por lo que enseña sobre ponderaciones, exclusiones y umbrales elegidos a posteriori." },
            { ref: "Belsley, Kuh y Welsch, Regression Diagnostics", nota: "el tratado sobre observaciones influyentes y colinealidad; de donde vienen las reglas de dedo que todo el mundo cita sin haber leído." },
          ],
        },
      ],
    },
  ],
};
