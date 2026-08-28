/* Ficha 4.02 — Estadística descriptiva y distribuciones. */

export default {
  codigo: "4.02",
  titulo: "Estadística descriptiva y distribuciones",
  nivel: 1,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "3 h",
  nucleo:
    "Un solo número casi nunca describe un conjunto de datos, y en economía el número que se elige suele decidir la conclusión. Antes de estimar nada hay que saber dónde está el centro, cuánto se dispersa y —sobre todo— qué forma tiene la distribución, porque de la forma depende qué técnicas son legítimas después.",
  requiere: "Ninguno: es la puerta de entrada al bloque",
  abre: "4.03 Probabilidad e inferencia · 4.04 Contraste de hipótesis · 4.05 Regresión por MCO · 10.02 Mercado de trabajo español",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La estadística descriptiva tiene mala fama de asignatura de trámite, y es un error caro. **Casi todos los desastres econométricos empiezan por no haber mirado los datos**: una variable con una cola larguísima a la que se aplica una técnica que supone normalidad, un atípico que arrastra un coeficiente él solo, dos submuestras con comportamientos opuestos que se promedian en un número intermedio que no describe a nadie. Describir bien no es el paso previo al análisis serio: es lo que determina qué análisis es defendible.",
            "**Las medidas de posición responden a dónde está el centro, y no coinciden.** La **media** es el reparto igualitario del total y tiene la propiedad de minimizar la suma de errores al cuadrado; por eso está detrás de la regresión. Su defecto es que **cada dato entra con su magnitud completa**, de modo que un valor extremo puede desplazarla arbitrariamente. La **mediana** parte la muestra en dos mitades y minimiza la suma de errores absolutos: solo le importa el orden, no el tamaño, y por eso es **robusta**. La **moda** es el valor más frecuente, y suele ser la más relevante para una persona concreta que se pregunta qué es lo normal. En una distribución simétrica las tres coinciden; en una asimétrica se separan, y **la separación es el dato**, no un problema.",
            "**Las medidas de dispersión responden a cuánto se alejan los datos del centro.** La **varianza** promedia las desviaciones al cuadrado y la **desviación típica** devuelve el resultado a las unidades originales. Elevar al cuadrado no es un capricho: hace la medida derivable y aditiva bajo independencia, propiedades sin las cuales no existiría la mitad de la estadística. El precio es que **penaliza desproporcionadamente los valores lejanos**, lo que la vuelve tan poco robusta como la media. Las alternativas resistentes son el **rango intercuartílico** —la anchura del 50 % central— y la **desviación absoluta mediana**. Y para comparar dispersiones entre variables de escalas distintas está el **coeficiente de variación**, que es la desviación típica dividida por la media.",
            "**La forma es la parte que suele saltarse, y es la que más condiciona lo que viene después.** La **asimetría** mide si la distribución tiene una cola más larga hacia un lado. La regla práctica es que con asimetría positiva **media > mediana > moda**, y ese orden aparece en casi todas las variables económicas de tamaño: renta, salarios, patrimonio, facturación de empresas, tamaño de ciudades. La **curtosis** mide el peso de las colas, es decir, la frecuencia de valores extremos; su relevancia se aprecia sobre todo en rendimientos financieros, donde las colas son mucho más gruesas de lo que supondría una normal y por eso los modelos que la asumen infravaloran el riesgo de forma sistemática.",
            "**Por qué las variables económicas de tamaño son asimétricas.** No es una casualidad empírica. Cuando una magnitud crece por efectos **multiplicativos** —el salario sube un porcentaje, la empresa crece un tanto por ciento, el patrimonio rinde una tasa— el logaritmo de esa magnitud se comporta de forma aproximadamente aditiva, y su distribución tiende a la normal. La variable original es entonces **lognormal**: acotada por abajo en cero, con una moda baja, una cola derecha larga y **media siempre mayor que mediana**. De ahí que tomar logaritmos sea el reflejo automático en economía aplicada: no es un truco para embellecer el gráfico, es que **la escala natural del fenómeno es multiplicativa**. En las colas más extremas —las mayores fortunas, las mayores ciudades— el ajuste suele ser aún más pesado, del tipo **Pareto**, con la regla del 80-20 como caso célebre.",
            "**Las distribuciones que hay que reconocer de vista son pocas.** La **Bernoulli** y la **binomial** para éxitos y fracasos: parado sí o no, empresa que exporta o no. La **Poisson** para recuentos de sucesos raros en un intervalo: siniestros, quiebras, llegadas. La **normal** para magnitudes generadas por muchas causas pequeñas y **aditivas**, y sobre todo para las medias muestrales, por el teorema central del límite que verá la ficha 4.03. La **lognormal** para tamaños. Y la **t de Student** para inferencia con muestras pequeñas, que es la normal con colas más gruesas para reconocer que la varianza se ha estimado y no se conoce.",
            "**Y una advertencia que conviene interiorizar pronto: los estadísticos resumen, y resumir es perder.** El cuarteto de Anscombe son cuatro conjuntos de datos con idéntica media, idéntica varianza, idéntica correlación e idéntica recta de regresión, y aspectos completamente distintos al dibujarlos: uno lineal, uno curvo, uno con un atípico que crea la relación y uno donde un solo punto la sostiene entera. La lección es que **ningún resumen sustituye a mirar la distribución**, y que el histograma y el diagrama de dispersión son herramientas de análisis, no ilustraciones para el informe. El mismo aviso vale para la **paradoja de Simpson** de la ficha 1.08, donde agregar submuestras invierte el signo de la relación.",
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
            { nom: "Media aritmética", sub: "Minimiza la suma de errores al cuadrado.", cols: ["$\\bar x = \\dfrac{1}{n}\\sum_i x_i$"] },
            { nom: "Mediana", sub: "Minimiza la suma de errores absolutos. Robusta.", cols: ["valor que deja el 50 % a cada lado"] },
            { nom: "Varianza muestral", sub: "n − 1 en el denominador para que sea insesgada.", cols: ["$s^2 = \\dfrac{\\sum_i (x_i - \\bar x)^2}{n - 1}$"] },
            { nom: "Desviación típica", sub: "En las unidades de la variable.", cols: ["$s = \\sqrt{s^2}$"] },
            { nom: "Coeficiente de variación", sub: "Compara dispersiones entre escalas distintas.", cols: ["$\\mathrm{CV} = \\dfrac{s}{\\bar x}$"] },
            { nom: "Rango intercuartílico", sub: "Anchura del 50 % central. Robusto.", cols: ["$\\mathrm{IQR} = Q_3 - Q_1$"] },
            { nom: "Regla del atípico", sub: "Criterio convencional, no una prueba.", cols: ["fuera de $[\\,Q_1 - 1{,}5\\,\\mathrm{IQR},\\ Q_3 + 1{,}5\\,\\mathrm{IQR}\\,]$"] },
            { nom: "Asimetría", sub: "Positiva: cola derecha larga, media > mediana.", cols: ["$g_1 = \\dfrac{m_3}{s^3}$"] },
            { nom: "Curtosis en exceso", sub: "Positiva: colas más gruesas que la normal.", cols: ["$g_2 = \\dfrac{m_4}{s^4} - 3$"] },
            { nom: "Tipificación", sub: "Desviaciones típicas por encima de la media.", cols: ["$z = \\dfrac{x - \\mu}{\\sigma}$"] },
            { nom: "Regla empírica (normal)", sub: "Solo vale si la distribución es normal.", cols: ["$\\pm 1\\sigma$: 68,3 % · $\\pm 2\\sigma$: 95,4 % · $\\pm 3\\sigma$: 99,7 %"] },
            { nom: "Lognormal", sub: "Si log X es normal. Media siempre mayor que mediana.", cols: ["mediana $= e^{\\mu}$ · media $= e^{\\mu + \\sigma^2/2}$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: diez salarios y por qué el promedio engaña",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una consultora tiene diez empleados. Sus salarios anuales, en miles de euros y ordenados, son: **18, 18, 19, 20, 21, 23, 25, 28, 34 y 94**. La suma es 300, así que **el salario medio es 30.000 €**. Es un dato cierto, y es la peor descripción posible de lo que cobra la gente de esa empresa.",
          ],
        },
        {
          tipo: "grafico",
          alto: 320,
          ejes: { x: "Empleados", y: "Miles de €" },
          dominio: { x: [0, 10], y: [0, 100] },
          marcasX: [],
          marcasY: [0, 20, 40, 60, 80, 100],
          areas: [
            { puntos: [[0.15, 0], [0.15, 18], [0.85, 18], [0.85, 0]], color: "n1" },
            { puntos: [[1.15, 0], [1.15, 18], [1.85, 18], [1.85, 0]], color: "n1" },
            { puntos: [[2.15, 0], [2.15, 19], [2.85, 19], [2.85, 0]], color: "n1" },
            { puntos: [[3.15, 0], [3.15, 20], [3.85, 20], [3.85, 0]], color: "n1" },
            { puntos: [[4.15, 0], [4.15, 21], [4.85, 21], [4.85, 0]], color: "n1" },
            { puntos: [[5.15, 0], [5.15, 23], [5.85, 23], [5.85, 0]], color: "n1" },
            { puntos: [[6.15, 0], [6.15, 25], [6.85, 25], [6.85, 0]], color: "n1" },
            { puntos: [[7.15, 0], [7.15, 28], [7.85, 28], [7.85, 0]], color: "n1" },
            { puntos: [[8.15, 0], [8.15, 34], [8.85, 34], [8.85, 0]], color: "n1" },
            { puntos: [[9.15, 0], [9.15, 94], [9.85, 94], [9.85, 0]], color: "alerta" },
          ],
          series: [
            { nombre: "Media = 30", color: "alerta", trazo: "discontinuo", etiquetaEn: [10, 30], puntos: [[0, 30], [10, 30]] },
            { nombre: "Mediana = 22", color: "acento", trazo: "punteado", etiquetaEn: [10, 22], puntos: [[0, 22], [10, 22]] },
          ],
          nota: "La imagen contiene todo el argumento. **Ocho de los diez empleados cobran por debajo de la media**, y ninguno cobra algo parecido a 30.000: los que más se acercan a esa cifra están ya en la parte alta de la plantilla. La media no describe a nadie porque **la barra de la derecha la sostiene ella sola**. La mediana, 22.000, sí parte la plantilla por la mitad, y no se movería aunque el salario del director fuera de 200.000 en lugar de 94.000. Esa insensibilidad es exactamente lo que se busca cuando una distribución tiene cola.",
        },
        {
          tipo: "tabla",
          cabecera: ["Estadístico", "Con los diez datos", "Sin el salario de 94", "Comentario"],
          filas: [
            ["Media", "30,00", "22,89", "Se desploma 7,1 al quitar un solo dato"],
            ["Mediana", "22,00", "21,00", "Apenas se mueve: es robusta"],
            ["Moda", "18", "18", "El valor más repetido, y el más bajo"],
            ["Desviación típica", "23,05", "5,04", "Se divide por más de cuatro"],
            ["Coeficiente de variación", "0,77", "0,22", "La dispersión relativa era artificial"],
            ["Rango intercuartílico", "9", "8", "Estable: describe el núcleo de la plantilla"],
            { celdas: ["Asimetría", "2,44", "$\\approx 0{,}5$", "Fuertemente positiva: cola derecha"], clase: "total" },
          ],
          nota: "La comparación entre las dos columnas es una prueba de robustez casera y muy informativa. **Media, desviación típica y coeficiente de variación se descomponen al retirar un dato de diez; mediana, moda y rango intercuartílico casi no se enteran.** El criterio convencional confirma que 94 es atípico: el límite superior es $Q_3 + 1{,}5\\,\\mathrm{IQR} = 28 + 13{,}5 = 41{,}5$. Ojo con la conclusión fácil: que un dato sea atípico **no autoriza a borrarlo**. Ese salario existe y forma parte del coste laboral de la empresa. Lo que indica es que la media no es el estadístico adecuado para responder a la pregunta de cuánto se cobra ahí.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Esto no es un artefacto de tener diez datos.** Las distribuciones salariales reales tienen la misma forma, y el motivo es el señalado en el desarrollo: los salarios crecen de forma multiplicativa. Si se ajusta una **lognormal** que reproduzca la mediana y la media de nuestra muestra —22 y 30— resultan los parámetros $\\mu$ = 3,091 y $\\sigma$ = 0,788, y la distribución completa queda así:",
          ],
        },
        {
          tipo: "grafico",
          alto: 320,
          ejes: { x: "Miles de €", y: "Frecuencia" },
          dominio: { x: [0, 100], y: [0, 35] },
          marcasX: [0, 20, 40, 60, 80, 100],
          marcasY: [],
          areas: [
            {
              color: "alerta",
              puntos: [[30, 0], [30, 15.62], [32, 14.14], [36, 11.57], [40, 9.49], [45, 7.45], [50, 5.88], [60, 3.75], [70, 2.46], [80, 1.65], [90, 1.14], [100, 0.8], [100, 0]],
            },
          ],
          series: [
            {
              nombre: "Densidad",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [100, 0.8],
              puntos: [[2, 2.46], [4, 12.17], [6, 21.65], [8, 27.75], [10, 30.69], [12, 31.39], [14, 30.69], [16, 29.17], [18, 27.24], [20, 25.14], [22, 23.02], [25, 20], [28, 17.26], [32, 14.14], [36, 11.57], [40, 9.49], [45, 7.45], [50, 5.88], [60, 3.75], [70, 2.46], [80, 1.65], [90, 1.14], [100, 0.8]],
            },
          ],
          puntos: [
            { x: 11.83, y: 31.4, etiqueta: "Moda 11,8", guias: false },
            { x: 22, y: 23.02, etiqueta: "Mediana 22", guias: false },
            { x: 30, y: 15.62, etiqueta: "Media 30", guias: false },
          ],
          nota: "Las tres medidas de centro caen en sitios distintos y en el orden característico de la asimetría positiva: **moda < mediana < media**. La zona sombreada es la proporción que cobra **más que la media**, y son solo el **34,7 %**: en una distribución con cola, estar por encima del promedio no es estar en la mitad de arriba. Obsérvese también que la moda —lo que cobra más gente— está en **11.800 €**, menos de la mitad de la media. Cuando un titular dice «el salario medio es X», está describiendo un punto donde hay bastante poca gente.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué salario publica el INE y por qué hay tres",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Esto no es un ejercicio de clase: la estadística oficial española publica **tres cifras de salario simultáneamente** y las tres son correctas. Entender por qué difieren es la mejor vacuna contra el uso torticero de los promedios, que en este terreno es constante y viene de todos los lados.",
            "**Las tres cifras son la media, la mediana y la moda de la Encuesta Anual de Estructura Salarial.** La media es el total de la masa salarial repartido entre los asalariados. La mediana es el salario que deja a la mitad por debajo. El salario más frecuente es el modal. En España la separación entre las tres es grande y **estable en el tiempo**: el medio supera claramente al mediano, y el modal queda bastante por debajo del mediano. La distancia es exactamente la de nuestra lognormal, y por el mismo motivo.",
            "**De ahí que la misma realidad admita titulares opuestos sin que nadie mienta.** Quien quiera transmitir que los salarios son razonables cita la media. Quien quiera transmitir lo contrario cita la moda. Ambos publican datos oficiales y ambos son técnicamente exactos. La pregunta correcta no es cuál es el dato verdadero, sino **a qué pregunta responde cada uno**: si lo que interesa es la masa salarial total —para calcular cotizaciones o coste laboral— la media es la medida pertinente; si interesa saber cómo vive un asalariado típico, la media es sencillamente la respuesta equivocada.",
            "**Hay un segundo problema, más sutil, en quién entra en el cálculo.** Las medias salariales suelen expresarse por trabajador equivalente a tiempo completo, lo que corrige la jornada pero **oculta el efecto de la parcialidad y la temporalidad** sobre la renta que efectivamente llega al hogar. Y hay algo peor: una economía puede mejorar su salario medio **expulsando del empleo a los trabajadores peor pagados**. Es un efecto de **composición**, se documentó en varios países durante la crisis de 2008 —el salario medio subía mientras la masa salarial caía— y la ficha 10.02 lo trata con datos españoles.",
            "**La solución práctica no es elegir un estadístico mejor, sino publicar la distribución.** Por eso el INE y Eurostat difunden **deciles y percentiles**, y por eso los indicadores de desigualdad —ratio entre el decil 9 y el decil 1, índice de Gini, cociente S80/S20— son cocientes entre partes de la distribución y no medidas de centro. Cada uno es un resumen distinto de la misma curva, y **ninguno es neutral**: el Gini es más sensible a lo que ocurre en el centro, y el S80/S20 a lo que ocurre en los extremos. Elegir un indicador ya es una decisión sobre qué parte de la desigualdad importa.",
            "**Y conviene cerrar con lo que la descriptiva no puede hacer.** Describir una distribución no explica por qué tiene esa forma, ni cuánto de ella se debe a educación, sector, jornada, antigüedad o discriminación. Para eso hace falta la regresión de la ficha 4.05 y, si se quiere hablar de causas, el instrumental de la 4.07. Lo que sí decide esta ficha es **qué preguntas tiene sentido hacerle a los datos**, y esa decisión se toma antes de escribir ningún modelo.",
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
            { t: "Usar la media en distribuciones con cola larga", d: "En renta, salarios, patrimonio o facturación la media está arrastrada por la cola derecha y no describe al individuo típico. En el ejemplo, ocho de cada diez cobran menos que la media, y en la lognormal ajustada el porcentaje es del 65 %. Si la pregunta es cómo vive alguien normal, la mediana es la respuesta." },
            { t: "Eliminar los atípicos porque el criterio los señala", d: "La regla de $Q_3 + 1{,}5\\,\\mathrm{IQR}$ es una convención para detectar, no una licencia para borrar. Un dato extremo puede ser un error de registro, y entonces se corrige, o puede ser una observación real e importante, y entonces excluirla es peor que el problema que causa. Lo que hay que hacer es averiguar de dónde sale." },
            { t: "Comparar desviaciones típicas de variables con escalas distintas", d: "Una desviación de 5.000 € significa cosas opuestas si la media es 20.000 o si es 500.000. Para comparar dispersiones hay que usar el coeficiente de variación, que es adimensional. Y ni siquiera él sirve si la media está próxima a cero o si la variable toma valores negativos." },
            { t: "Aplicar la regla del 68-95-99,7 a cualquier variable", d: "Esos porcentajes son propiedades de la distribución normal, no de la desviación típica. En una distribución asimétrica o de colas gruesas, el intervalo de más menos dos sigmas no contiene el 95 % de nada. Comprobar la forma antes de usar la regla es el paso que casi nadie da." },
            { t: "No tomar logaritmos cuando el fenómeno es multiplicativo", d: "Si una magnitud crece en porcentajes, su escala natural es logarítmica. Trabajar en niveles produce heterocedasticidad, sensibilidad extrema a la cola y coeficientes difíciles de interpretar. En logaritmos, además, los coeficientes de una regresión se leen directamente como elasticidades." },
            { t: "Confundir asimetría con presencia de atípicos", d: "Son cosas distintas aunque suelan aparecer juntas. La asimetría es una propiedad de la forma de toda la distribución; un atípico es una observación concreta. Una distribución puede ser muy asimétrica sin que ningún punto individual destaque, y una simétrica puede tener un valor extremo." },
            { t: "Resumir sin dibujar", d: "El cuarteto de Anscombe son cuatro conjuntos con la misma media, varianza, correlación y recta de regresión, y cuatro formas completamente distintas. Ningún estadístico sustituye al histograma y al diagrama de dispersión, y son diez segundos de trabajo frente a horas de conclusiones equivocadas." },
            { t: "Promediar submuestras heterogéneas", d: "Agregar grupos con comportamientos distintos puede producir un número que no describe a ninguno, y en casos extremos invierte el signo de la relación: es la paradoja de Simpson de la ficha 1.08. Antes de agregar hay que preguntarse si los grupos son comparables, y esa es una pregunta sustantiva, no estadística." },
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
            "La contabilidad nacional está construida con agregados y medias, y por eso es el mejor ejemplo posible de las virtudes y los límites de esta ficha.",
          ],
          lista: [
            "El **PIB per cápita es una media**, y de las más expuestas al problema del ejemplo: divide el producto total entre toda la población, incluida la que no participa en su generación ni en su reparto. Sube igual cuando aumenta la renta de arriba que cuando aumenta la de abajo, y por eso no dice nada sobre distribución. Es un excelente indicador de tamaño y uno pésimo de bienestar típico.",
            "Por esa razón el SEC 2010 se ha extendido con las **cuentas distributivas de los hogares**, que reparten la renta y el consumo agregados entre grupos de la distribución para poder decir cómo se reparte el crecimiento y no solo cuánto se crece. Es la respuesta institucional al hecho de que un agregado no tiene forma.",
            "La **renta disponible mediana** que publica la Encuesta de Condiciones de Vida es la base de la definición oficial de **riesgo de pobreza**: el 60 % de esa mediana. Que el umbral se defina sobre la mediana y no sobre la media es deliberado, y responde exactamente al argumento que hemos hecho con números.",
            "Los **índices de precios de la ficha 3.02** son medias ponderadas de variaciones, y sufren el mismo problema desde otro ángulo: el IPC describe una cesta media que no es la de ningún hogar concreto. De ahí que el INE publique **IPC por grupos** y que se hable de inflación diferencial por nivel de renta cuando la energía y los alimentos suben más que el resto.",
            "Y la **Contabilidad Nacional Trimestral** ilustra el efecto de la forma sobre la fiabilidad: las series se publican con estimaciones provisionales que después se revisan, y **la magnitud de esas revisiones no se distribuye simétricamente**. La ficha 10.10 se ocupa de los datos en tiempo real y de por qué eso importa al tomar decisiones.",
          ],
          cierre:
            "El resumen es que la contabilidad nacional mide **totales y medias con enorme precisión y ninguna forma**. Todo lo relativo a distribución vive fuera de ella, en encuestas con muestras, errores muestrales y sus propios problemas. Confundir ambos mundos está en el origen de buena parte de los malentendidos entre los datos macroeconómicos y la percepción de la gente.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "En la plantilla del ejemplo, ¿por qué la media es 30 si ocho de diez cobran menos de esa cifra?", a: "Porque la media reparte el total entre todos y el salario de 94.000 aporta casi un tercio de la masa salarial él solo. Sin ese dato la media cae a 22,89, muy cerca de la mediana. Es la firma de una distribución asimétrica: la media se desplaza hacia la cola, y la cola tiene muy pocos individuos." },
            { q: "¿Qué le pasa a la mediana si el director pasa a cobrar 200.000 en lugar de 94.000?", a: "Nada: sigue siendo 22.000, porque la mediana solo depende del orden de los datos y ese cambio no altera qué valor ocupa la posición central. La media, en cambio, pasaría de 30 a 40,6. Esa es la definición operativa de robustez, y el motivo de que se prefiera la mediana cuando hay cola." },
            { q: "El límite de atípico es 41,5 y el salario de 94 lo supera. ¿Se elimina el dato?", a: "No. El criterio detecta, no autoriza a borrar. Ese salario es real y forma parte del coste laboral de la empresa; retirarlo falsearía cualquier cálculo de masa salarial. Lo que indica el criterio es que la media no es el estadístico adecuado para describir esta distribución, no que el dato sobre." },
            { q: "¿Por qué las variables económicas de tamaño suelen ser lognormales?", a: "Porque crecen de forma multiplicativa: los salarios suben en porcentajes, las empresas crecen a tasas, el patrimonio rinde un tipo. El logaritmo convierte esos efectos multiplicativos en aditivos, y la suma de muchos efectos pequeños tiende a la normal. La variable original queda entonces acotada en cero, con moda baja y cola derecha larga." },
            { q: "¿Puede subir el salario medio de un país mientras empeora la situación de los asalariados?", a: "Sí, por efecto composición. Si se destruye empleo concentrado en los tramos bajos, la media de los que quedan sube aunque nadie haya recibido un aumento y la masa salarial total caiga. Ocurrió en varios países tras 2008, y es un recordatorio de que el cambio en una media agregada no equivale al cambio experimentado por los individuos." },
            { q: "¿Qué añade dibujar los datos si ya se tienen media, varianza y correlación?", a: "La forma, que esos tres números no contienen. El cuarteto de Anscombe muestra cuatro conjuntos idénticos en esos estadísticos y radicalmente distintos al representarlos: uno lineal, uno curvo, uno dominado por un atípico y uno donde un solo punto genera toda la relación. Con los resúmenes solos, los cuatro parecerían el mismo problema." },
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
              q: "En una distribución salarial ocho de cada diez trabajadores cobran menos que la media. ¿Qué indica eso?",
              opciones: [
                "Que hay atípicos que habría que eliminar",
                "Que la muestra no es representativa",
                "Que la distribución tiene cola derecha larga y la media no describe al individuo típico",
                "Que la media está mal calculada",
              ],
              correcta: 2,
              porque: [
                "Los salarios altos son datos reales que forman parte del coste laboral. Borrarlos es peor que el problema que causan.",
                "Una muestra perfectamente representativa de una distribución asimétrica da exactamente este resultado.",
                "En renta, salarios, patrimonio o facturación la media va arrastrada por la cola. La mediana responde mucho mejor a «cuánto cobra la gente».",
                "La media puede estar perfectamente calculada y aun así no representar a nadie. Es un problema de elección de estadístico, no de aritmética.",
              ],
            },
            {
              q: "Un dato supera $Q_3 + 1{,}5\\,\\mathrm{IQR}$. ¿Qué hay que hacer con él?",
              opciones: [
                "Averiguar de dónde sale: puede ser un error de registro o una observación real e importante",
                "Eliminarlo: el criterio lo identifica como atípico",
                "Nada: la regla solo se aplica a distribuciones normales",
                "Sustituirlo por la mediana",
              ],
              correcta: 0,
              porque: [
                "Si es un error de registro se corrige; si es un salario real, excluirlo distorsiona el coste laboral que se quería medir. La respuesta depende del origen, no del criterio.",
                "La regla es una convención para **detectar**, no una licencia para borrar. Eliminar lo que molesta produce análisis que confirman lo que ya se creía.",
                "La regla se usa en cualquier distribución precisamente porque se basa en cuartiles y no en la normalidad.",
                "Imputar la mediana inventa un dato y reduce artificialmente la dispersión, que es justo lo que se quería describir.",
              ],
            },
            {
              q: "Se quiere comparar la dispersión de dos variables con medias de 20.000 € y 500.000 €. ¿Qué se usa?",
              opciones: [
                "La varianza, que penaliza más las desviaciones grandes",
                "El rango intercuartílico",
                "El coeficiente de variación, que es adimensional",
                "La desviación típica de cada una",
              ],
              correcta: 2,
              porque: [
                "La varianza empeora la comparación: está en euros al cuadrado y amplifica la diferencia de escala.",
                "El IQR sigue midiéndose en euros, así que arrastra el mismo problema de escala.",
                "$\\mathrm{CV} = s/\\bar x$ elimina las unidades y permite la comparación. Es la respuesta a «disperso respecto a qué».",
                "Una desviación de 5.000 € significa cosas opuestas según la media: es un 25 % en un caso y un 1 % en el otro.",
              ],
            },
            {
              q: "Un análisis aplica la regla del 68-95-99,7 a una distribución de patrimonios. ¿Qué falla?",
              opciones: [
                "Que esos porcentajes son propiedades de la normal, y en una distribución asimétrica no se cumplen",
                "Que la desviación típica no está definida para patrimonios",
                "Que habría que usar tres desviaciones en vez de dos",
                "Nada: son propiedades de la desviación típica",
              ],
              correcta: 0,
              porque: [
                "Con cola larga o colas gruesas, el intervalo de dos desviaciones puede contener muy poco o casi todo. Aplicar la regla a ciegas convierte una propiedad de la normal en una creencia sobre los datos.",
                "Está perfectamente definida; lo que no vale es la interpretación probabilística.",
                "Cambiar el número de desviaciones no arregla nada: el problema es que la forma no es normal.",
                "La desviación típica se define para cualquier distribución con varianza finita; los porcentajes concretos no.",
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
            { ref: "Newbold, Carlson y Thorne, Estadística para administración y economía", nota: "los capítulos de descriptiva y de distribuciones, con ejemplos económicos y sin exigir cálculo avanzado." },
            { ref: "Peña, Fundamentos de Estadística", nota: "en castellano y muy sólido en la parte de forma, robustez y transformaciones; el tratamiento de los atípicos es especialmente bueno." },
            { ref: "Tufte, The Visual Display of Quantitative Information", nota: "por qué el gráfico es análisis y no decoración; obligado antes de dibujar el primer histograma de la carrera." },
            { ref: "Anscombe, «Graphs in Statistical Analysis», 1973", nota: "cuatro páginas, cuatro conjuntos de datos y el mejor argumento jamás escrito a favor de mirar antes de calcular." },
            { ref: "INE, Encuesta Anual de Estructura Salarial", nota: "las tres cifras de salario y la distribución por deciles, para ver el caso práctico con datos reales." },
          ],
        },
      ],
    },
  ],
};
