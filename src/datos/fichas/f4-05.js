/* Ficha 4.05 — Regresión lineal simple y múltiple por MCO. */

export default {
  codigo: "4.05",
  titulo: "Regresión lineal simple y múltiple por MCO",
  nivel: 2,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "5 h",
  nucleo:
    "Controlar por una variable no es «tenerla en cuenta» de forma vaga: es quedarse con la parte de la variable explicativa que no tiene nada que ver con el control y regresar sobre ella. Verlo como una proyección geométrica aclara de golpe el sesgo de variable omitida, la colinealidad y qué significa realmente un coeficiente.",
  requiere: "4.03 Probabilidad e inferencia · 4.04 Contraste de hipótesis · 4.01 Álgebra y optimización",
  abre: "4.06 Diagnóstico · 4.07 Variables instrumentales · 4.08 Datos de panel · 10.09 Coste laboral unitario",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La regresión por mínimos cuadrados ordinarios es la herramienta central de la economía empírica, y su idea es la del problema de optimización de la ficha 4.01: **elegir los coeficientes que minimizan la suma de los residuos al cuadrado**. Las condiciones de primer orden de ese problema son las **ecuaciones normales**, y de ellas sale todo lo demás. Elevar al cuadrado en lugar de tomar valores absolutos no es neutral: hace el problema derivable y con solución cerrada, pero también **penaliza mucho los errores grandes**, que es la razón de que un solo dato atípico pueda torcer una recta entera.",
            "**Conviene tener clara la interpretación desde el principio.** El coeficiente de una variable mide el cambio esperado en la variable dependiente ante un cambio unitario en esa variable **manteniendo constantes las demás incluidas en el modelo**. Esa coletilla es toda la sustancia: fuera del modelo no se mantiene nada constante, y por eso el mismo coeficiente cambia de valor —y a veces de signo— según qué otras variables se incluyan. Un coeficiente no es una propiedad del mundo, es **una propiedad de una especificación**.",
            "**La intuición geométrica es la que de verdad aclara las cosas.** Pensemos en cada variable como un vector con tantas coordenadas como observaciones. MCO **proyecta ortogonalmente el vector de la variable dependiente sobre el espacio generado por las explicativas**: los valores ajustados son la sombra, y el residuo es lo que sobra, perpendicular por construcción a todas las explicativas. De ahí, sin cálculos, salen tres hechos: que los residuos suman cero cuando hay constante, que están incorrelados con las variables incluidas, y que el $R^2$ es el coseno al cuadrado del ángulo entre lo observado y su proyección. **Un $R^2$ alto significa un ángulo pequeño**, nada más.",
            "**El teorema de Frisch-Waugh-Lovell es la traducción exacta de qué significa controlar**, y merece aprenderse de memoria. El coeficiente de una variable en una regresión múltiple se obtiene en tres pasos: se regresa esa variable sobre las demás y se guarda el residuo —la parte de ella que las demás no explican—, se hace lo mismo con la dependiente, y se regresa un residuo sobre el otro. Es decir, **controlar es quedarse con la variación que el control no puede explicar**. Esto vuelve evidentes dos cosas: por qué si dos variables están muy correlacionadas apenas queda variación residual con la que estimar —la colinealidad de la ficha 4.06—, y por qué añadir un control cambia el coeficiente.",
            "**De ahí se deduce el sesgo de variable omitida**, que es el problema práctico más importante de todos. Si se deja fuera una variable que **influye en la dependiente** y además **está correlacionada con la incluida**, su efecto se cuela en el coeficiente estimado. La fórmula del sesgo tiene una forma memorable: es el efecto de la omitida multiplicado por la pendiente de regresar la omitida sobre la incluida. Las dos condiciones son necesarias: **una variable irrelevante no sesga aunque esté correlacionada, y una relevante no sesga si es ortogonal**. Y el signo del sesgo es predecible con solo saber los signos de esos dos términos, lo que permite razonar sobre la dirección del error incluso sin datos.",
            "**Los supuestos de Gauss-Markov dicen cuándo MCO es el mejor estimador lineal insesgado**, y conviene saber cuál es cuál porque se rompen de formas muy distintas. Linealidad en los parámetros, muestreo aleatorio, variación en las explicativas sin colinealidad perfecta, **media condicional del error igual a cero** y homocedasticidad. El cuarto es el crucial: es el que falla cuando hay variables omitidas, error de medida o causalidad inversa, y **su ruptura sesga los coeficientes**. Los demás, cuando fallan, suelen afectar solo a la precisión y a los errores estándar, que es justo la distinción sobre la que se construye la ficha 4.06.",
            "**Dos advertencias finales sobre el uso.** La primera es el $R^2$: mide ajuste, no verdad ni causalidad, y **subir siempre que se añade una variable, sea cual sea**, por lo que el $R^2$ ajustado penaliza esa inflación. Un $R^2$ bajo no invalida un coeficiente bien identificado, y uno alto no salva a un modelo mal especificado. La segunda es que la linealidad se refiere a **los parámetros**, no a las variables: se pueden incluir logaritmos, cuadrados e interacciones sin salir de MCO, y de hecho la especificación en logaritmos —donde los coeficientes se leen directamente como **elasticidades**— es la más habitual en economía por las razones de escala multiplicativa vistas en la ficha 4.02.",
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
            { nom: "Criterio de MCO", sub: "Un problema de optimización como el de la ficha 4.01.", cols: ["$\\min \\sum_i (y_i - \\beta_0 - \\beta_1 x_i)^2$"] },
            { nom: "Pendiente estimada", sub: "Covarianza dividida por varianza de x.", cols: ["$\\hat\\beta_1 = \\dfrac{S_{xy}}{S_{xx}}$"] },
            { nom: "Constante", sub: "La recta pasa siempre por el punto de medias.", cols: ["$\\hat\\beta_0 = \\bar y - \\hat\\beta_1 \\bar x$"] },
            { nom: "Descomposición de la varianza", sub: "Total = explicada + residual.", cols: ["$\\mathrm{SCT} = \\mathrm{SCE} + \\mathrm{SCR}$"] },
            { nom: "Bondad de ajuste", sub: "Coseno al cuadrado del ángulo de proyección.", cols: ["$R^2 = \\dfrac{\\mathrm{SCE}}{\\mathrm{SCT}}$"] },
            { nom: "Varianza del error", sub: "n − k − 1 grados de libertad.", cols: ["$\\hat\\sigma^2 = \\dfrac{\\mathrm{SCR}}{n - k - 1}$"] },
            { nom: "Error estándar de la pendiente", sub: "Baja con la varianza de x y con n.", cols: ["$\\mathrm{EE}(\\hat\\beta_1) = \\sqrt{\\dfrac{\\hat\\sigma^2}{S_{xx}}}$"] },
            { nom: "Frisch-Waugh-Lovell", sub: "Controlar = regresar sobre lo no explicado.", cols: ["$\\hat\\beta_1$ = regresión de $\\tilde y$ sobre $\\tilde x$ residualizados"] },
            { nom: "Sesgo de variable omitida", sub: "Necesita relevancia y correlación a la vez.", cols: ["sesgo $= \\beta_{\\text{omitida}} \\cdot \\delta$, con $\\delta$ de regresar la omitida sobre $x$"] },
            { nom: "Forma matricial", sub: "La proyección ortogonal, en una línea.", cols: ["$\\hat\\beta = (X'X)^{-1} X'y$"] },
            { nom: "Especificación log-log", sub: "El coeficiente se lee como elasticidad.", cols: ["$\\ln y = \\beta_0 + \\beta_1 \\ln x \\Rightarrow \\beta_1 = \\text{elasticidad}$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: educación y salario, y lo que cambia al controlar",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Diez trabajadores, con sus años de educación y su salario anual en miles de euros. Los años son **8, 10, 10, 12, 12, 14, 14, 16, 16 y 18**, con media 13; los salarios, **18, 23, 27, 32, 24, 28, 35, 39, 37 y 37**, con media 30. Los datos están construidos para que las cuentas salgan exactas y puedan comprobarse a mano.",
            "Las sumas de productos cruzados son $S_{xx} = 90$ y $S_{xy} = 180$, de modo que la pendiente es $180/90 = 2{,}00$ y la constante $30 - 2 \\cdot 13 = 4{,}00$. Cada año adicional de estudios se asocia con **2.000 € más de salario**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Años de estudio", y: "Miles de €" },
          dominio: { x: [6, 20], y: [14, 44] },
          marcasX: [6, 8, 10, 12, 14, 16, 18, 20],
          marcasY: [15, 20, 25, 30, 35, 40],
          series: [
            {
              nombre: "Ajuste MCO",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [20, 44],
              puntos: [[6, 16], [20, 44]],
            },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[8, 18], [8, 20]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[10, 23], [10, 24]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[10, 24], [10, 27]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[12, 28], [12, 32]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[12, 24], [12, 28]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[14, 28], [14, 32]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[14, 32], [14, 35]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[16, 36], [16, 39]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[16, 36], [16, 37]] },
            { nombre: "", color: "tinta2", trazo: "punteado", grosor: 1.2, puntos: [[18, 37], [18, 40]] },
          ],
          puntos: [
            { x: 8, y: 18, guias: false }, { x: 10, y: 23, guias: false }, { x: 10, y: 27, guias: false },
            { x: 12, y: 32, guias: false }, { x: 12, y: 24, guias: false }, { x: 14, y: 28, guias: false },
            { x: 14, y: 35, guias: false }, { x: 16, y: 39, guias: false }, { x: 16, y: 37, guias: false },
            { x: 18, y: 37, guias: false },
          ],
          nota: "Los segmentos punteados son los **residuos**: la distancia vertical entre cada trabajador y la recta. MCO elige precisamente la recta que **minimiza la suma de sus cuadrados**, y de ahí que un punto muy alejado pese mucho más que dos puntos algo alejados. Obsérvese que la recta pasa por el punto de medias (13, 30), como ocurre siempre que el modelo tiene constante, y que los residuos se reparten arriba y abajo sumando cero. La dispersión que queda es la que impide leer la relación como un destino individual: **con doce años de estudio hay quien gana 24 y quien gana 32**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Magnitud", "Valor", "Cómo se obtiene"],
          filas: [
            ["Pendiente $\\hat\\beta_1$", "2,00", "$S_{xy}/S_{xx} = 180/90$"],
            ["Constante $\\hat\\beta_0$", "4,00", "$\\bar y - \\hat\\beta_1 \\bar x = 30 - 26$"],
            ["Suma de cuadrados total", "450", "$\\sum_i (y_i - \\bar y)^2$"],
            ["Suma explicada / residual", "360 / 90", "$\\mathrm{SCE} + \\mathrm{SCR} = \\mathrm{SCT}$"],
            ["$R^2$", "0,80", "$360/450$"],
            ["Error estándar de la regresión", "3,354", "$\\sqrt{90/8}$"],
            ["Error estándar de $\\hat\\beta_1$", "0,3536", "$\\sqrt{11{,}25/90}$"],
            { celdas: ["$t$ y p-valor", "5,657 · 0,00048", "$\\hat\\beta_1/\\mathrm{EE}$, con 8 grados de libertad"], clase: "total" },
            ["Intervalo al 95 %", "[1,18 · 2,82]", "$2{,}00 \\pm 2{,}306 \\times 0{,}3536$"],
          ],
          nota: "Merece la pena leer el **intervalo** antes que el p-valor: los datos son compatibles con retornos de entre 1.180 y 2.820 € por año de estudio. Es un rango ancho, y lo es porque diez observaciones son pocas. El $R^2$ de **0,80** dice que la educación explica cuatro quintas partes de la variación salarial de esta muestra, algo altísimo para datos reales, donde valores de 0,2 a 0,4 son lo normal en ecuaciones de salarios. Y nótese que la constante, 4,00, sería el salario previsto para alguien con cero años de estudio: está **fuera del rango de los datos** y no debe interpretarse.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora lo importante: qué pasa al controlar.** Añadimos el **tamaño de la empresa** en cientos de empleados: **3, 6, 8, 11, 5, 3, 8, 13, 7 y 12**, con media 7,6. Es una variable que influye en el salario —existe una prima documentada por trabajar en empresas grandes— y que además está correlacionada con la educación, porque los trabajadores más formados tienden a emplearse en empresas mayores. La correlación entre ambas es de **0,577**. Se cumplen, por tanto, las dos condiciones del sesgo de variable omitida.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "Solo educación", "Educación y tamaño"],
          filas: [
            ["Coeficiente de educación", "2,000", "1,502"],
            ["Error estándar", "0,354", "0,328"],
            ["t", "5,66", "4,58"],
            ["Coeficiente de tamaño", "—", "0,773"],
            ["Error estándar", "—", "0,293"],
            ["t", "—", "2,64"],
            ["$R^2$", "0,800", "0,900"],
            { celdas: ["$R^2$ ajustado", "0,775", "0,871"], clase: "total" },
          ],
          nota: "El retorno de la educación **cae de 2,00 a 1,50** al incluir el tamaño de la empresa. Esos 500 € no eran retorno de la educación: eran el efecto de trabajar en empresas mayores, que la educación estaba recogiendo por estar correlacionada con ellas. La descomposición cuadra exactamente: el sesgo es el coeficiente del tamaño, **0,773**, multiplicado por la pendiente de regresar tamaño sobre educación, **0,644**, lo que da **0,498**. Y el teorema de Frisch-Waugh lo confirma por otra vía: residualizando la educación respecto del tamaño y regresando el salario residualizado sobre ella se obtiene **1,5018**, el mismo número hasta el cuarto decimal.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La conclusión que hay que llevarse no es que 1,50 sea el número correcto.** Es que **no existe «el» coeficiente de la educación**: hay uno por especificación, y la elección de qué controlar es una decisión sustantiva sobre qué se quiere estimar. Si aún faltara la capacidad individual —relacionada con la educación y con el salario, y no observable— el 1,50 seguiría estando sesgado al alza. Añadir controles reduce el sesgo solo si son las variables correctas, y **ningún control arregla lo que no se observa**. Ese callejón es exactamente el punto de partida de la ficha 4.07.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la brecha salarial y qué significa «ajustada»",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Pocas discusiones públicas ilustran mejor que un coeficiente es una propiedad de una especificación. Sobre la diferencia salarial entre hombres y mujeres circulan cifras muy distintas, todas calculadas correctamente, y **la discrepancia no viene de los datos sino de qué se controla**.",
            "**La brecha bruta** es la diferencia entre el salario medio de unos y otras, sin ajustar por nada. Es la que describe la diferencia de renta que efectivamente llega a cada hogar, y en ese sentido es la magnitud relevante para hablar de desigualdad de resultados. No pretende aislar ningún mecanismo y no debe leerse como una medida de trato desigual a igual trabajo.",
            "**La brecha ajustada** se obtiene incluyendo controles: ocupación, sector, jornada, antigüedad, tipo de contrato, tamaño de empresa, estudios. Siempre es menor que la bruta, y suele reducirse a menos de la mitad. La tentación es leer esa reducción como que la brecha «real» es pequeña y el resto se explica por decisiones libres. **Frisch-Waugh dice por qué esa lectura es tramposa**: al controlar por ocupación se estima la diferencia salarial *dentro de cada ocupación*, y con ello se descarta deliberadamente todo lo que ocurre **a través** de la ocupación. Si mujeres y hombres acceden a ocupaciones distintas por segregación, discriminación en la promoción o efectos de la maternidad sobre la carrera, ese mecanismo **queda dentro del control y por tanto fuera del coeficiente**.",
            "**Aquí está el concepto general, que vale mucho más allá de este ejemplo: el control post-tratamiento.** Cuando una variable de control está ella misma influida por la variable de interés, controlarla no elimina un sesgo: **bloquea parte del efecto que se quería medir**. La regla práctica es que un control debe ser algo determinado *antes* que la variable explicativa, no una consecuencia suya. La ocupación de una persona no es anterior a su género; el sector de la empresa donde acaba trabajando, tampoco.",
            "**De ahí que las dos cifras no compitan: responden a preguntas distintas.** La bruta responde a cuánto menos ingresan las mujeres. La ajustada responde a cuánto menos cobra una mujer que otro trabajador con la misma ocupación, jornada y antigüedad. Ambas son útiles y **presentar solo una de ellas es lo que induce a error**. La literatura más reciente ha ido más allá y ha desplazado la pregunta: siguiendo trayectorias individuales antes y después del nacimiento de un hijo se observa una caída persistente de ingresos concentrada en las madres, un diseño que no depende de qué se controle porque **compara a cada persona consigo misma**, que es la lógica de la ficha 4.08.",
            "**La moraleja metodológica es transferible a cualquier regresión.** Antes de añadir un control hay que preguntarse si es anterior a la variable de interés o consecuencia suya, y qué mecanismo se está cerrando al incluirlo. Y al leer un coeficiente ajeno, la primera pregunta no es cuánto vale ni si es significativo, sino **qué hay en la lista de controles**, porque ahí está buena parte de lo que el número significa.",
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
            { t: "Interpretar un coeficiente como efecto causal sin más", d: "MCO estima una asociación condicional. Para leerla como causa hace falta que el error tenga media condicional cero, lo que falla si hay variables omitidas, error de medida o causalidad inversa. La regresión es una herramienta descriptiva potentísima; la identificación causal es un argumento aparte que hay que construir." },
            { t: "Creer que existe un coeficiente verdadero independiente de la especificación", d: "Cada conjunto de controles define una pregunta distinta, y el coeficiente cambia con él: en el ejemplo, de 2,00 a 1,50 al añadir el tamaño de la empresa. Lo primero que hay que mirar en una tabla ajena es la lista de controles, porque ahí está buena parte del significado del número." },
            { t: "Añadir controles indiscriminadamente para «limpiar» la estimación", d: "Un control posterior a la variable de interés no elimina sesgo: bloquea parte del efecto que se quería medir. Es lo que ocurre al controlar por ocupación en una brecha salarial. La regla es que el control debe ser anterior a la variable explicativa, no una consecuencia suya." },
            { t: "Usar el $R^2$ como criterio de calidad del modelo", d: "Mide ajuste, no verdad ni causalidad, y sube siempre que se añade cualquier variable, incluso ruido. Un $R^2$ bajo no invalida un coeficiente bien identificado y uno alto no salva un modelo mal especificado. El $R^2$ ajustado corrige la inflación mecánica, pero sigue sin decir nada sobre causalidad." },
            { t: "Extrapolar fuera del rango de los datos", d: "La constante de 4,00 sería el salario de alguien con cero años de estudio, un caso que no aparece en la muestra. La relación estimada solo está respaldada donde hay observaciones; fuera de ahí la linealidad es una suposición sin evidencia, y suele ser falsa." },
            { t: "Confundir linealidad en los parámetros con linealidad en las variables", d: "MCO admite logaritmos, cuadrados e interacciones sin dejar de ser lineal, porque el requisito recae sobre los coeficientes. La especificación en logaritmos, además, permite leer los coeficientes directamente como elasticidades, que es lo natural en variables de escala multiplicativa." },
            { t: "Olvidar que MCO penaliza el cuadrado del error", d: "Un solo dato atípico puede desplazar una recta entera, porque su contribución crece con el cuadrado de la distancia. Conviene mirar siempre el diagrama de dispersión y los residuos antes de dar por buena una estimación, con el mismo argumento del cuarteto de Anscombe de la ficha 4.02." },
            { t: "Predecir el destino de un individuo con un coeficiente medio", d: "El coeficiente describe una media condicional, y la dispersión alrededor de ella suele ser enorme: en el ejemplo, con doce años de estudio hay quien gana 24 y quien gana 32. Un intervalo de predicción individual es mucho más ancho que el intervalo de confianza del coeficiente, y confundirlos es habitual." },
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
            "La contabilidad nacional no estima coeficientes: construye identidades. Pero casi todo lo que se afirma *con* sus datos sale de una regresión, y varios de sus propios métodos son regresiones disfrazadas.",
          ],
          lista: [
            "Las **funciones de comportamiento macroeconómicas** —consumo sobre renta disponible, inversión sobre tipo de interés, importaciones sobre demanda interna— se estiman por MCO con datos de contabilidad nacional. La propensión marginal a consumir de la ficha 3.04 es literalmente el coeficiente de una regresión, con todos los problemas de esta ficha, incluida la causalidad inversa entre renta y consumo.",
            "La **ecuación de salarios** que sustenta la curva de Phillips de la ficha 3.03 y el coste laboral unitario de la 10.09 es una regresión con expectativas y productividad como controles. Qué se incluye ahí decide si el resultado apoya o refuta la existencia de efectos de segunda ronda, y por eso las estimaciones de distintos organismos discrepan sobre los mismos datos.",
            "Los **índices de precios hedónicos** que el SEC 2010 exige para bienes de calidad cambiante —ordenadores, vivienda, automóviles— son regresiones del precio sobre las características del producto. El deflactor de esos bienes **depende de una especificación**, con lo que un ingrediente del PIB real es el resultado de una decisión econométrica.",
            "Las **estimaciones de producto potencial** mediante funciones de producción son regresiones de la producción sobre factores, con el residuo interpretado como productividad total —la contabilidad del crecimiento de la ficha 3.09—. Ese residuo es, literalmente, lo que el modelo no explica, y llamarlo progreso técnico es una interpretación, no una medición.",
            "Y la **desestacionalización y el ajuste por calendario** de la ficha 4.10 incorporan regresiones con variables de días laborables, Semana Santa y año bisiesto antes de descomponer la serie. El dato desestacionalizado que se publica es, en parte, el resultado de un modelo estimado.",
          ],
          cierre:
            "El punto que conviene retener es que la frontera entre «dato» y «estimación» es más porosa de lo que sugiere la publicación oficial. Varias cifras que se citan como observaciones son **coeficientes de una regresión con su especificación detrás**, y por tanto heredan la advertencia central de esta ficha: cambia la especificación y cambia el número.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué significa exactamente «controlar por el tamaño de la empresa»?", a: "Por Frisch-Waugh: quedarse con la parte de la educación que el tamaño de la empresa no explica, y regresar sobre ella la parte del salario que el tamaño tampoco explica. En el ejemplo, hacerlo por esa vía devuelve 1,5018, idéntico al coeficiente de la regresión múltiple. No es tener en cuenta la variable de forma vaga: es descartar toda la variación común." },
            { q: "El coeficiente de educación cae de 2,00 a 1,50 al añadir el tamaño de empresa. ¿Cuál es el bueno?", a: "Ninguno en abstracto: responden a preguntas distintas. El 2,00 mide la asociación total entre educación y salario, incluida la que opera colocando a la gente en empresas mayores; el 1,50 mide la asociación dentro de empresas de igual tamaño. Cuál interesa depende de qué se quiera saber, y si aún faltan variables relevantes ambos siguen sesgados." },
            { q: "¿Cómo se comprueba que el sesgo de variable omitida vale 0,498?", a: "Multiplicando el coeficiente de la variable omitida por la pendiente de regresarla sobre la incluida: 0,773 × 0,644 = 0,498, que es exactamente la diferencia entre 2,00 y 1,502. La fórmula también permite predecir el signo del sesgo sin datos, con solo razonar sobre los signos de esos dos términos." },
            { q: "¿Por qué controlar por ocupación reduce tanto una brecha salarial y por qué eso no zanja la discusión?", a: "Porque el coeficiente pasa a medir la diferencia dentro de cada ocupación, descartando todo lo que ocurre a través de la elección o asignación de ocupación. Si la segregación ocupacional es parte del fenómeno estudiado, controlarla lo bloquea en vez de corregir un sesgo. Es un control posterior a la variable de interés, y por eso cambia la pregunta." },
            { q: "El $R^2$ es 0,80. ¿Es un buen modelo?", a: "Dice que la recta explica el 80 % de la variación salarial de la muestra, algo excepcional en datos reales, donde las ecuaciones de salarios suelen quedarse entre 0,2 y 0,4. Pero el $R^2$ no informa sobre causalidad ni sobre especificación: sube al añadir cualquier variable, y un modelo con variables omitidas puede tener un $R^2$ excelente y coeficientes sesgados." },
            { q: "¿Por qué la constante de 4,00 no debe interpretarse como el salario de alguien sin estudios?", a: "Porque cero años de educación está fuera del rango de los datos, que van de 8 a 18. La recta describe la relación donde hay observaciones; extrapolar hasta cero supone que la linealidad se mantiene en una zona sin ninguna evidencia. La constante suele ser un artefacto del ajuste, no una magnitud interpretable." },
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
              q: "El coeficiente de la educación pasa de 2,00 a 1,50 al añadir el tamaño de la empresa. ¿Cuál es el verdadero?",
              opciones: [
                "El 2,00, que es la relación sin contaminar por otras variables",
                "Ninguno: cada conjunto de controles define una pregunta distinta",
                "El 1,50, porque incluye más información",
                "La media de ambos, ponderada por el $R^2$",
              ],
              correcta: 1,
              porque: [
                "El 2,00 no está sin contaminar: recoge también el efecto del tamaño de empresa, que va correlacionado con la educación.",
                "El 2,00 responde a «cuánto más gana en promedio quien estudió más»; el 1,50, a «cuánto más gana a igualdad de tamaño de empresa». Buscar «el coeficiente verdadero» sin decir la pregunta no tiene sentido.",
                "Más controles no es automáticamente mejor: un control posterior a la variable de interés bloquea parte del efecto que se quería medir.",
                "Promediar dos respuestas a preguntas distintas no produce la respuesta a ninguna.",
              ],
            },
            {
              q: "Se quiere medir el efecto de la educación sobre el salario y se añade la ocupación como control. ¿Qué ocurre?",
              opciones: [
                "Mejora la estimación: elimina una fuente de variación ajena",
                "Bloquea parte del efecto: la ocupación es posterior a la educación y uno de sus canales",
                "No cambia nada, porque ocupación y educación están correlacionadas",
                "Introduce colinealidad y agranda los errores estándar",
              ],
              correcta: 1,
              porque: [
                "Añadir controles no siempre limpia. Depende de si la variable es anterior o posterior a la de interés en la cadena causal.",
                "Estudiar más lleva a mejores ocupaciones, y esas ocupaciones pagan más. Controlar por ocupación mide solo el efecto **dentro** de cada ocupación y descarta el canal principal.",
                "Sí cambia, y bastante: el coeficiente cae porque se ha cerrado una de las vías por las que actúa.",
                "La colinealidad aparecerá también, pero el problema de fondo es conceptual y no de precisión.",
              ],
            },
            {
              q: "La constante de una regresión salario-educación vale 4,00. ¿Cómo se interpreta?",
              opciones: [
                "Como el salario de quien no tiene estudios",
                "No se interpreta: cero años de estudio queda fuera del rango de los datos",
                "Como el efecto de las variables omitidas",
                "Como el salario mínimo del sector",
              ],
              correcta: 1,
              porque: [
                "Sería su lectura literal, pero la muestra no contiene a nadie con cero años de estudio y la relación estimada solo está respaldada donde hay datos.",
                "Extrapolar fuera del rango es suponer que la recta sigue siendo válida donde nadie la ha comprobado. La constante suele ser un artefacto geométrico, no una magnitud con significado.",
                "Las variables omitidas afectan a la pendiente, no a la interpretación de la constante.",
                "El salario mínimo es una magnitud institucional sin relación con el punto de corte de una recta ajustada.",
              ],
            },
            {
              q: "Un modelo tiene $R^2 = 0{,}80$. ¿Qué se puede concluir?",
              opciones: [
                "Que es un buen modelo y sus coeficientes son fiables",
                "Que explica el 80 % de la variación de la muestra, sin decir nada sobre causalidad ni especificación",
                "Que el 80 % de los coeficientes son significativos",
                "Que la relación es causal en un 80 %",
              ],
              correcta: 1,
              porque: [
                "El $R^2$ sube al añadir cualquier variable, incluso ruido. Un modelo con variables omitidas puede tener un $R^2$ excelente y coeficientes sesgados.",
                "Y en ecuaciones de salarios con datos reales lo normal es entre 0,2 y 0,4: un 0,80 es señal de muestra pequeña más que de buen modelo.",
                "El $R^2$ no cuenta coeficientes: mide varianza explicada del conjunto.",
                "La causalidad no admite porcentajes de ese tipo: o la identificación es válida o no lo es.",
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
            { ref: "Wooldridge, Introducción a la econometría", nota: "el tratamiento de referencia de MCO simple y múltiple, con el sesgo de variable omitida explicado como aquí." },
            { ref: "Angrist y Pischke, Mostly Harmless Econometrics", nota: "el capítulo 3 desarrolla la regresión como proyección y Frisch-Waugh con una claridad difícil de superar." },
            { ref: "Stock y Watson, Introducción a la econometría", nota: "más aplicado y con buenos ejemplos de política pública; útil para ver especificaciones reales comentadas." },
            { ref: "Cunningham, Causal Inference: The Mixtape", nota: "por qué controlar de más puede ser tan malo como controlar de menos; el tratamiento de los controles post-tratamiento es excelente." },
            { ref: "Mincer, Schooling, Experience and Earnings, 1974", nota: "el origen de la ecuación de salarios que este ejemplo simplifica, y todavía la especificación más usada en economía laboral." },
          ],
        },
      ],
    },
  ],
};
