/* Ficha 4.09 — Series temporales: estacionariedad, ARIMA y cointegración. */

export default {
  codigo: "4.09",
  titulo: "Series temporales: estacionariedad, ARIMA y cointegración",
  nivel: 4,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "5 h",
  nucleo:
    "Regresar dos series con raíz unitaria produce relaciones espurias con $R^2$ excelentes y estadísticos $t$ enormes, aunque las series sean absolutamente independientes. Comprobar la estacionariedad no es un trámite previo: es lo que separa un resultado de una ilusión.",
  requiere: "4.06 Diagnóstico · 4.05 Regresión por MCO",
  abre: "4.10 Desestacionalización · 3.02 Inflación y precios · 10.10 Cuentas trimestrales y revisiones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una serie es **estacionaria** cuando sus propiedades estadísticas no dependen del momento en que se mire: media constante, varianza constante y una autocorrelación que solo depende de la distancia entre observaciones, no de la fecha. La definición suena técnica y tiene una consecuencia inmediata y muy práctica: **en una serie estacionaria los choques se disipan** y la serie vuelve a su media. En una no estacionaria, no. Toda la econometría de series temporales gira alrededor de esa diferencia.",
            "**Hay dos formas de no ser estacionario y no son intercambiables.** Una serie puede tener una **tendencia determinista** —fluctúa alrededor de una recta— y entonces basta con incluir la tendencia en la regresión o restarla. O puede tener una **raíz unitaria**, un **paseo aleatorio**: cada choque se incorpora permanentemente al nivel, la serie no tiene ninguna media a la que volver y su varianza crece sin límite con el tiempo. En ese caso quitar una tendencia no arregla nada; **hay que diferenciar**, es decir, trabajar con las variaciones en lugar de con los niveles. Distinguir ambos casos importa económicamente: si el PIB tiene raíz unitaria, una recesión deja una cicatriz permanente en el nivel; si fluctúa alrededor de una tendencia, se recupera del todo. La respuesta empírica sigue siendo objeto de discusión, y no es un detalle menor para la política económica.",
            "**El problema de la regresión espuria es la razón de ser de esta ficha.** Cuando se regresan dos series con raíz unitaria independientes entre sí, MCO tiende a encontrar una relación fuerte, con $R^2$ alto y estadísticos $t$ muy grandes. No es un accidente ni mala suerte: **las distribuciones asintóticas habituales no son válidas** en presencia de raíces unitarias, de modo que los valores críticos de siempre no significan lo que se cree. Las dos series vagan cada una por su cuenta y, en cualquier tramo concreto, es probable que hayan vagado en direcciones parecidas. Con series macroeconómicas —casi todas con tendencia y muy persistentes— este es el error más fácil de cometer y el más difícil de detectar a ojo, porque **el resultado tiene un aspecto magnífico**.",
            "**El diagnóstico es el contraste de raíz unitaria**, cuyo representante clásico es el **Dickey-Fuller aumentado**. Su lógica es regresar la variación de la serie sobre su nivel rezagado: si el coeficiente es negativo y significativo, la serie tiende a volver, y no hay raíz unitaria. Lo esencial es que **sus valores críticos no son los de la t habitual**: con constante, el 5 % está en −2,86 y no en −1,96, y usar el valor equivocado lleva a rechazar la raíz unitaria demasiado a menudo. Conviene además saber que estos contrastes tienen **poca potencia**: con muestras cortas y series muy persistentes, no rechazar la raíz unitaria dice poco, exactamente el problema de la ficha 4.04.",
            "**La familia ARIMA es el lenguaje para describir la dinámica de una serie.** La parte **autorregresiva** hace depender el valor actual de los anteriores, con lo que un choque se desvanece de forma gradual: con un coeficiente de 0,9, la mitad del efecto sigue presente casi siete periodos después. La parte de **medias móviles** hace depender el valor actual de los choques recientes. Y la **I** es el número de veces que hay que diferenciar para lograr estacionariedad. La identificación se apoya en las funciones de autocorrelación y en criterios de información, y su virtud principal es que **estos modelos predicen muy bien a corto plazo sin pretender explicar nada**: son descripciones estadísticas de la inercia, no teorías económicas, y por eso siguen siendo la referencia contra la que se compara cualquier modelo estructural.",
            "**La cointegración es el resultado que rescata el análisis en niveles**, y es una de las ideas más bonitas de la econometría. Dos series pueden tener cada una raíz unitaria y, sin embargo, existir una combinación lineal de ambas que sí sea estacionaria. Económicamente significa que **están atadas por una relación de equilibrio a largo plazo**: pueden separarse temporalmente, pero no indefinidamente. Consumo y renta, precios de un mismo bien en dos mercados, tipos a corto y a largo, salarios y productividad son candidatos naturales. Si dos series están cointegradas, la regresión en niveles **no es espuria**, y además el **teorema de representación de Granger** garantiza que existe un modelo de corrección del error.",
            "**El modelo de corrección del error es la forma correcta de estimar y de leer estas relaciones.** Separa explícitamente el **corto plazo** —cómo responde la variación de una serie a la variación de la otra— del **largo plazo** —con qué velocidad se corrige la desviación respecto del equilibrio—. El coeficiente del término de corrección mide esa velocidad de ajuste y debe ser negativo: si es −0,25, cada periodo se corrige la cuarta parte del desequilibrio pendiente. Es un marco especialmente útil en economía porque **distingue lo que la teoría suele afirmar sobre el largo plazo de lo que los datos muestran a corto**, y permite que ambos convivan sin contradicción.",
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
            { nom: "Estacionariedad débil", sub: "Media y varianza constantes; la clave del análisis.", cols: ["$E[y_t] = \\mu$ · $\\mathrm{Var}(y_t) = \\sigma^2$ · $\\mathrm{Cov}(y_t, y_{t-k}) = \\gamma_k$"] },
            { nom: "Proceso AR(1)", sub: "Estacionario si $|\\varphi| < 1$.", cols: ["$y_t = c + \\varphi y_{t-1} + \\varepsilon_t$"] },
            { nom: "Persistencia de un choque", sub: "Con $\\varphi$ = 0,9 la mitad sigue ahí siete periodos después.", cols: ["$\\text{vida media} = \\dfrac{\\ln(0{,}5)}{\\ln(\\varphi)}$"] },
            { nom: "Paseo aleatorio", sub: "El choque es permanente; la varianza crece con t.", cols: ["$y_t = y_{t-1} + \\varepsilon_t$ ($\\varphi = 1$)"] },
            { nom: "Orden de integración", sub: "Cuántas diferencias hacen falta.", cols: ["$y_t \\sim I(d)$"] },
            { nom: "Dickey-Fuller aumentado", sub: "Los valores críticos NO son los de la t.", cols: ["$\\Delta y_t = \\alpha + \\gamma y_{t-1} + \\sum_i \\delta_i \\Delta y_{t-i} + \\varepsilon_t$ · $H_0: \\gamma = 0$"] },
            { nom: "Valores críticos con constante", sub: "Frente a −1,96 de la normal.", cols: ["1 %: −3,43 · 5 %: −2,86 · 10 %: −2,57"] },
            { nom: "Cointegración", sub: "Las series están atadas a largo plazo.", cols: ["$y, x \\sim I(1)$ y $(y - \\beta x) \\sim I(0)$"] },
            { nom: "Corrección del error", sub: "$\\lambda < 0$ mide la velocidad de ajuste.", cols: ["$\\Delta y_t = \\alpha + \\lambda(y_{t-1} - \\beta x_{t-1}) + \\gamma \\Delta x_t + \\varepsilon_t$"] },
            { nom: "Causalidad de Granger", sub: "Precedencia predictiva, no causalidad.", cols: ["x precede a y si sus rezagos ayudan a predecir y"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos series independientes que parecen la misma",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Generamos dos paseos aleatorios **completamente independientes**: dos series en las que cada valor es el anterior más un choque, extraído de forma que **ninguna sabe nada de la otra**. No hay ninguna relación entre ellas, por construcción. Después regresamos una sobre la otra por MCO y miramos el resultado.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Periodo", y: "Nivel" },
          dominio: { x: [0, 60], y: [85, 150] },
          marcasX: [0, 10, 20, 30, 40, 50, 60],
          marcasY: [90, 100, 110, 120, 130, 140, 150],
          series: [
            {
              nombre: "Serie A",
              color: "acento",
              grosor: 2,
              etiquetaEn: [59, 132.98],
              puntos: [[0, 100], [2, 96.04], [4, 99.49], [6, 93.78], [8, 91.79], [10, 100.08], [12, 92.61], [14, 96.21], [16, 92.69], [18, 93.53], [20, 98.5], [22, 106.75], [24, 103.85], [26, 107.64], [28, 108.54], [30, 106.47], [32, 110.55], [34, 109.84], [36, 107.71], [38, 109.91], [40, 104.17], [42, 122.2], [44, 122.99], [46, 120.08], [48, 125.68], [50, 130.04], [52, 138.35], [54, 140.15], [56, 144.42], [58, 133.56], [59, 132.98]],
            },
            {
              nombre: "Serie B",
              color: "alerta",
              grosor: 2,
              etiquetaEn: [59, 145.48],
              puntos: [[0, 100], [2, 99.87], [4, 94.24], [6, 92.99], [8, 89.28], [10, 95.66], [12, 93.59], [14, 98.17], [16, 91.24], [18, 97.33], [20, 93.14], [22, 101.89], [24, 105.61], [26, 106.63], [28, 102.5], [30, 106.84], [32, 112.35], [34, 116.99], [36, 119.72], [38, 123.35], [40, 126.39], [42, 130.51], [44, 130.75], [46, 129.41], [48, 135.68], [50, 134.89], [52, 137.85], [54, 134.77], [56, 142.48], [58, 140.92], [59, 145.48]],
            },
          ],
          nota: "Cualquiera diría que estas dos series están relacionadas: caen juntas al principio, tocan fondo hacia el mismo periodo y suben juntas durante toda la segunda mitad. **No lo están.** Han sido generadas de forma independiente, cada choque de una es ajeno a la otra, y no existe ningún mecanismo que las conecte. Lo que se ve no es una relación: es que **dos paseos aleatorios deambulan, y en cualquier tramo concreto es probable que hayan deambulado en direcciones parecidas**. El ojo, entrenado para ver patrones, hace el resto.",
        },
        {
          tipo: "tabla",
          cabecera: ["Resultado de regresar B sobre A", "Valor", "Interpretación ingenua"],
          filas: [
            ["Pendiente estimada", "1,084", "«Casi uno por uno»"],
            ["$R^2$", "0,864", "«Explica el 86 % de la variación»"],
            ["Estadístico t", "19,21", "«Significativo al 0,0001 %»"],
            { celdas: ["Relación verdadera", "ninguna", "Las series son independientes por construcción"], clase: "total" },
          ],
          nota: "Un $t$ de **19** y un $R^2$ de **0,86** entre dos series sin ninguna relación. Y no es un caso escogido con mala fe: repitiendo el experimento **doscientas veces** con series de cien periodos, el coeficiente resulta significativo al 5 % en el **79,5 %** de las ocasiones, cuando debería ocurrir en el 5 %. La tasa de falsos positivos es dieciséis veces la nominal. Ese es el motivo de que la comprobación de estacionariedad no sea un trámite: **sin ella, casi cualquier par de series macroeconómicas produce un resultado espectacular**, y como casi todas tienen tendencia y persistencia, el riesgo es la norma.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La comprobación que había que hacer antes.** El contraste de Dickey-Fuller aumentado sobre cada serie no rechazaría la raíz unitaria, porque efectivamente la tienen. Al no rechazar, la regresión en niveles queda descartada salvo que ambas estén cointegradas, cosa que se contrasta examinando si el **residuo** de la regresión es estacionario. Aquí no lo es: el residuo también es un paseo aleatorio, que es precisamente la firma de la relación espuria.",
            "**La solución cuando no hay cointegración es trabajar en diferencias.** Al regresar la variación de B sobre la variación de A, ambas series son ya estacionarias y el coeficiente vuelve a comportarse como debe: la tasa de falsos positivos regresa al 5 % nominal. El coste es que **se pierde toda la información sobre el largo plazo**, que es justamente lo que la teoría económica suele decir. De ahí el interés del modelo de corrección del error: cuando **sí** hay cointegración, permite quedarse con las dos cosas —la relación de equilibrio en niveles y la dinámica en diferencias— en lugar de sacrificar una.",
            "**Y una nota sobre persistencia, que ayuda a leer cualquier serie macroeconómica.** En un proceso autorregresivo, la vida media de un choque es ln(0,5) dividido por el logaritmo del coeficiente. Con $\\varphi$ = 0,5, la mitad del efecto desaparece en **un solo periodo**. Con $\\varphi$ = 0,9, hacen falta **6,6 periodos**. Con $\\varphi$ = 0,99, **69 periodos**, y a efectos prácticos la serie es indistinguible de un paseo aleatorio en cualquier muestra realista. Ahí está el motivo de que los contrastes de raíz unitaria tengan tan poca potencia: **la diferencia entre 0,99 y 1,00 es enorme conceptualmente y casi invisible en doscientos datos**.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: predecir el PIB y por qué es tan difícil",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La previsión macroeconómica es donde todo lo anterior se pone a prueba en público, con resultados que conviene conocer antes de dar peso a cualquier pronóstico.",
            "**El primer hecho incómodo es que los modelos sencillos son difíciles de batir.** Un ARIMA bien identificado, o incluso una regla ingenua del tipo «el próximo trimestre se parecerá a los anteriores», compite razonablemente con modelos estructurales grandes en horizontes de uno o dos trimestres. La razón es la persistencia: **la mayor parte de lo que ocurrirá el trimestre que viene ya está en marcha**, y capturar esa inercia es casi todo lo que se puede hacer. Lo que ningún modelo predice son los puntos de giro, que es justo cuando la previsión importaría.",
            "**El segundo es que el horizonte útil es corto.** Más allá de unos pocos trimestres, los intervalos de predicción se ensanchan tanto que el pronóstico deja de restringir nada. Si la serie tiene raíz unitaria, la varianza de la predicción **crece sin límite con el horizonte**: es una propiedad matemática del proceso, no una deficiencia del modelo. Las previsiones a cinco años que aparecen en los cuadros macroeconómicos oficiales no son predicciones en sentido estadístico, sino **escenarios de referencia** para hacer cuentas coherentes.",
            "**El tercero es que la información llega tarde y cambia.** El dato del PIB de un trimestre se publica con semanas de retraso y después se revisa, a veces sustancialmente. Por eso se recurre a modelos que combinan indicadores de frecuencia alta —afiliación, consumo eléctrico, ventas, tráfico, indicadores de confianza— para estimar el trimestre en curso: es el **nowcasting**, que no predice el futuro sino que estima el presente que aún no se ha medido. La ficha 10.10 desarrolla el problema de los datos en tiempo real, que también contamina la evaluación de las previsiones pasadas: **acertar respecto al primer dato o respecto al definitivo son cosas distintas**.",
            "**El cuarto es la inestabilidad de las relaciones.** Un modelo estimado con datos de un régimen —tipo de cambio fijo, política monetaria distinta, otra estructura productiva— falla cuando el régimen cambia. Es la crítica de Lucas en versión práctica, y explica que los modelos ajusten bien dentro de la muestra y peor fuera de ella. La defensa habitual consiste en evaluar con **predicción fuera de muestra** en lugar de con el ajuste histórico, y en combinar predicciones de varios modelos, que sistemáticamente supera a elegir el mejor.",
            "**La lectura práctica de un pronóstico, en concreto.** Mirar el intervalo antes que el número central, y desconfiar si no lo publican. Comprobar el desempeño histórico del predictor, no su reputación. Recordar que las previsiones oficiales tienen incentivos —un gobierno que presupuesta con una previsión optimista recauda sobre el papel más de lo que recaudará—, y que los organismos independientes existen para contrapesarlo. Y aceptar lo que la econometría de series temporales dice sin ambages: **con series persistentes y muestras cortas, la incertidumbre a medio plazo es irreducible**, y presentarla como un número exacto es el error de la ficha 4.03 en su versión más costosa.",
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
            { t: "Regresar niveles de series con tendencia sin comprobar estacionariedad", d: "Es la fuente de resultados espurios más común en macroeconomía. En el ejemplo, dos paseos aleatorios independientes dan $R^2$ de 0,86 y $t$ de 19, y la simulación produce falsos positivos el 79,5 % de las veces en lugar del 5 %. La comprobación previa no es un trámite: es lo que distingue un resultado de una ilusión." },
            { t: "Usar los valores críticos de la t en un contraste de raíz unitaria", d: "Bajo la hipótesis nula de raíz unitaria la distribución del estadístico no es la t: el valor crítico al 5 % con constante es −2,86 y no −1,96. Emplear el equivocado lleva a rechazar la raíz unitaria con demasiada facilidad y a volver a la regresión en niveles justo cuando no se debe." },
            { t: "Interpretar que no rechazar la raíz unitaria demuestra que existe", d: "Estos contrastes tienen poca potencia con muestras cortas y series muy persistentes. Un proceso con coeficiente 0,99 es estacionario en teoría e indistinguible de un paseo aleatorio en doscientos datos. La ausencia de rechazo es compatible con ambas cosas, y decidirlo exige argumentos económicos además de estadísticos." },
            { t: "Diferenciar siempre por precaución", d: "Si las series están cointegradas, diferenciar elimina la relación de largo plazo, que suele ser lo que la teoría afirma. La respuesta correcta en ese caso es un modelo de corrección del error, que conserva a la vez el equilibrio en niveles y la dinámica en diferencias en lugar de sacrificar uno de los dos." },
            { t: "Confundir cointegración con correlación alta", d: "Cointegrar significa que existe una combinación lineal estacionaria: las series pueden separarse temporalmente pero no indefinidamente. Dos series pueden estar muy correlacionadas en una muestra y no cointegrar, que es exactamente el caso espurio. La comprobación se hace sobre el residuo, no sobre el $R^2$." },
            { t: "Leer la causalidad de Granger como causalidad", d: "Solo mide precedencia predictiva: si los rezagos de una variable ayudan a predecir otra una vez descontados sus propios rezagos. Una variable que anticipa a otra puede estar simplemente reaccionando antes a un tercer factor común, o reflejando expectativas. El nombre es desafortunado y engaña a mucha gente." },
            { t: "Evaluar un modelo por su ajuste dentro de la muestra", d: "Añadir rezagos y variables siempre mejora el ajuste histórico y suele empeorar la predicción, porque se está ajustando ruido. La evaluación honesta es fuera de muestra, reproduciendo la información disponible en cada momento, y combinar varios modelos suele batir a elegir el mejor por ajuste." },
            { t: "Dar un número de previsión sin intervalo", d: "Con raíz unitaria, la varianza de la predicción crece sin límite con el horizonte: es una propiedad del proceso, no un defecto del modelo. Las previsiones a varios años son escenarios coherentes, no predicciones estadísticas, y presentarlas como cifras exactas alimenta decisiones tomadas sobre una precisión inexistente." },
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
            "Las series de contabilidad nacional reúnen todas las condiciones para que los errores de esta ficha se cometan: son cortas, tienen tendencia, son muy persistentes y se publican en niveles.",
          ],
          lista: [
            "El **PIB en volumen tiene tendencia y alta persistencia**, y su naturaleza —raíz unitaria o tendencia determinista— sigue sin resolverse empíricamente. La cuestión no es académica: si hay raíz unitaria, una recesión deja una **cicatriz permanente** en el nivel de producción, y las políticas de estabilización tienen efectos duraderos. Si no, la economía vuelve a su senda por sí sola. La ficha 3.06 discute las implicaciones.",
            "Los **índices de precios se analizan casi siempre en diferencias logarítmicas** —es decir, en tasas de inflación— precisamente porque el nivel del índice tiene raíz unitaria por construcción. Y la propia inflación resulta bastante persistente, lo que complica distinguir un cambio de régimen de una racha, un problema real para los bancos centrales.",
            "Las relaciones que la teoría afirma **a largo plazo** son candidatas naturales a cointegración: consumo y renta disponible, salarios y productividad —la ficha 10.09—, dinero y precios, tipos a corto y a largo. Estimarlas en niveles solo es legítimo si la cointegración se contrasta, y la forma correcta de presentarlas es un modelo de corrección del error con su velocidad de ajuste.",
            "Las **series trimestrales publicadas están suavizadas** por el propio método de elaboración, que interpola y concilia con la información anual. Eso **aumenta artificialmente la autocorrelación** y agrava todos los problemas de esta ficha: la persistencia observada no es toda económica, parte es estadística.",
            "Y el **ajuste estacional de la ficha 4.10** modifica las propiedades dinámicas de la serie. Trabajar con datos desestacionalizados no es inocuo: el filtro introduce correlación entre observaciones que no estaba en el dato bruto, y los contrastes aplicados después heredan esa distorsión.",
          ],
          cierre:
            "El consejo operativo es simple y se salta constantemente: **antes de regresar dos series de contabilidad nacional, contrastar su orden de integración y, si ambas son integradas, contrastar la cointegración**. Sin ese paso, un $R^2$ alto entre agregados macroeconómicos no es evidencia de nada, y es lo más fácil del mundo de obtener.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "$R^2$ de 0,86 y $t$ de 19 entre dos series. ¿Qué hay que comprobar antes de celebrarlo?", a: "Si las series son estacionarias. En el ejemplo esos números salen de dos paseos aleatorios generados de forma independiente, sin ninguna relación entre ellos. Repitiendo el experimento, el coeficiente resulta significativo el 79,5 % de las veces en lugar del 5 %. Con series macroeconómicas, un resultado espectacular en niveles es sospechoso por defecto." },
            { q: "¿Por qué el Dickey-Fuller no usa los valores críticos de la t?", a: "Porque bajo la hipótesis nula la serie tiene raíz unitaria, y entonces la distribución asintótica del estadístico no es la normal ni la t. El valor crítico al 5 % con constante es −2,86 frente al −1,96 habitual. Usar el valor equivocado rechaza la raíz unitaria demasiado a menudo, justo el error que el contraste debía evitar." },
            { q: "Dos series tienen raíz unitaria. ¿Está prohibido regresarlas en niveles?", a: "Solo si no están cointegradas. Si existe una combinación lineal de ambas que sea estacionaria, la relación en niveles es real y refleja un equilibrio de largo plazo del que pueden apartarse temporalmente pero no indefinidamente. Se contrasta comprobando si el residuo de la regresión es estacionario." },
            { q: "¿Qué mide el coeficiente del término de corrección del error y qué signo debe tener?", a: "La velocidad a la que se corrige la desviación respecto del equilibrio de largo plazo, y debe ser negativo para que el sistema sea estable. Un valor de −0,25 significa que cada periodo se cierra la cuarta parte del desequilibrio pendiente. Es la forma de conservar a la vez el largo plazo en niveles y la dinámica de corto en diferencias." },
            { q: "¿Por qué es tan difícil distinguir un coeficiente de 0,99 de un paseo aleatorio?", a: "Porque con 0,99 la vida media de un choque es de 69 periodos, más larga que muchas muestras macroeconómicas disponibles. La serie vuelve a su media, pero tan despacio que en doscientos datos no se aprecia. Por eso los contrastes de raíz unitaria tienen poca potencia y su resultado rara vez zanja la cuestión." },
            { q: "¿Por qué las previsiones de PIB a cinco años no son predicciones estadísticas?", a: "Porque con raíz unitaria la varianza de la predicción crece sin límite con el horizonte, así que el intervalo se ensancha hasta no restringir nada. Son escenarios de referencia coherentes para hacer cuentas, no pronósticos. Presentarlas como cifras exactas y usarlas en presupuestos es la versión más costosa del error de la ficha 4.03." },
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
              q: "Dos paseos aleatorios independientes dan $R^2 = 0{,}86$ y $t = 19$. ¿Qué ha pasado?",
              opciones: [
                "Las series están relacionadas aunque parezcan aleatorias",
                "Es una regresión espuria: con raíces unitarias las distribuciones asintóticas habituales no valen",
                "La muestra es demasiado corta",
                "Falta incluir una tendencia determinista",
              ],
              correcta: 1,
              porque: [
                "No hay ninguna relación: las series se han generado de forma independiente. El resultado es un artefacto de la no estacionariedad.",
                "Repitiendo el experimento doscientas veces, el coeficiente sale significativo al 5 % en el 79,5 % de las ocasiones. La tasa de falsos positivos es dieciséis veces la nominal.",
                "Alargar la muestra empeora el problema en vez de arreglarlo: la relación espuria se refuerza.",
                "Añadir una tendencia ayuda con tendencias deterministas, no con raíces unitarias, que son un fenómeno distinto.",
              ],
            },
            {
              q: "En un contraste de raíz unitaria el estadístico vale $-2{,}20$. ¿Se rechaza al 5 %?",
              opciones: [
                "Sí: supera en valor absoluto el crítico de 1,96",
                "No: bajo la nula de raíz unitaria el crítico con constante es $-2{,}86$, no $-1{,}96$",
                "Sí, si la muestra tiene más de 100 observaciones",
                "No se puede decidir sin conocer el p-valor exacto",
              ],
              correcta: 1,
              porque: [
                "Usar los valores críticos de la t es el error clásico: bajo la nula de raíz unitaria el estadístico no sigue una t.",
                "La distribución es la de Dickey-Fuller, con colas desplazadas. Aplicar 1,96 rechaza mucho más de lo debido y hace parecer estacionarias series que no lo son.",
                "El tamaño de muestra afecta poco a estos valores críticos, que están tabulados precisamente para esta distribución.",
                "El p-valor de un programa estadístico ya viene calculado con la distribución correcta; el error está en comparar contra la tabla equivocada.",
              ],
            },
            {
              q: "Dos series tienen raíz unitaria y están cointegradas. ¿Conviene diferenciarlas antes de regresar?",
              opciones: [
                "Sí: diferenciar siempre es la precaución correcta",
                "No: eliminaría la relación de largo plazo, que suele ser lo que la teoría afirma",
                "Sí, pero solo una de las dos",
                "Da igual: cointegradas o no, el resultado es el mismo",
              ],
              correcta: 1,
              porque: [
                "Diferenciar por precaución es lo que se hace cuando no se comprueba la cointegración, y tira justo la información que interesa.",
                "La respuesta correcta es un modelo de corrección del error, que recoge a la vez la dinámica de corto plazo y el equilibrio de largo. Diferenciar deja solo la primera.",
                "Diferenciar una sola descuadra el orden de integración de la ecuación y produce un modelo mal especificado.",
                "El resultado es muy distinto: sin cointegración la regresión en niveles es espuria, y con ella es informativa.",
              ],
            },
            {
              q: "Un test encuentra que los tipos de interés causan a lo Granger al consumo. ¿Qué se ha demostrado?",
              opciones: [
                "Que los tipos causan el consumo",
                "Precedencia predictiva: sus rezagos ayudan a predecir el consumo una vez descontados los propios",
                "Que existe una relación de largo plazo entre ambos",
                "Que el consumo no causa a los tipos",
              ],
              correcta: 1,
              porque: [
                "El nombre engaña. Una variable que anticipa a otra puede simplemente reaccionar antes a una tercera que las mueve a ambas.",
                "Es una afirmación sobre capacidad de predicción, no sobre mecanismo. Útil para pronosticar y no concluyente para política.",
                "La relación de largo plazo es cointegración, que es un concepto distinto y se contrasta de otra manera.",
                "La causalidad de Granger puede darse en ambas direcciones a la vez; encontrarla en una no descarta la otra.",
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
            { ref: "Enders, Applied Econometric Time Series", nota: "el manual más práctico del área: raíces unitarias, ARIMA y cointegración con ejemplos que se pueden reproducir." },
            { ref: "Granger y Newbold, «Spurious Regressions in Econometrics», 1974", nota: "el artículo que descubrió el problema; corto, y con la simulación que este ejemplo reproduce." },
            { ref: "Engle y Granger, «Co-Integration and Error Correction», 1987", nota: "el resultado que rescata el análisis en niveles y el teorema de representación; una de las grandes ideas de la econometría." },
            { ref: "Nelson y Plosser, «Trends and Random Walks in Macroeconomic Time Series», 1982", nota: "el trabajo que abrió el debate sobre si el PIB tiene raíz unitaria, con todas sus consecuencias para la política de estabilización." },
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice", nota: "gratuito y excelente sobre evaluación fuera de muestra y combinación de predicciones; el mejor complemento práctico." },
          ],
        },
      ],
    },
  ],
};
