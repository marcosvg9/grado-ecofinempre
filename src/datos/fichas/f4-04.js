/* Ficha 4.04 — Contraste de hipótesis y errores de tipo I y II. */

export default {
  codigo: "4.04",
  titulo: "Contraste de hipótesis y errores de tipo I y II",
  nivel: 2,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "4 h",
  nucleo:
    "Un p-valor responde a «qué probable sería ver estos datos si la hipótesis nula fuera cierta», y casi todo el mundo lo lee como si respondiera a «qué probable es que la hipótesis nula sea cierta». Son cosas distintas, y de esa confusión sale buena parte de la literatura empírica que después no se replica.",
  requiere: "4.03 Probabilidad e inferencia · 4.02 Estadística descriptiva",
  abre: "4.05 Regresión por MCO · 4.06 Diagnóstico · 4.07 Variables instrumentales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un contraste de hipótesis es un procedimiento de decisión bajo incertidumbre, y su estructura es deliberadamente asimétrica. Se formula una **hipótesis nula** —normalmente que el efecto es cero, que dos grupos son iguales, que un coeficiente no importa— y se pregunta **qué probabilidad habría de observar unos datos al menos tan extremos como los obtenidos si esa hipótesis fuera cierta**. Si esa probabilidad es muy baja, se rechaza la nula. Nunca se «acepta»: no rechazar significa que los datos son compatibles con ella, no que sea verdadera, del mismo modo que no encontrar huellas no demuestra que nadie estuviera allí.",
            "**Esa asimetría no es un capricho, es el diseño.** El marco protege ante todo contra afirmar un efecto que no existe —el **error de tipo I**, cuya probabilidad es el nivel de significación α que fijamos nosotros— y solo secundariamente contra no detectar uno que sí existe, el **error de tipo II**, de probabilidad β. Su complemento, **1 − β, es la potencia**: la capacidad del contraste para encontrar un efecto real cuando lo hay. La elección de α = 0,05 es una convención sin fundamento teórico, heredada de Fisher, y **debería depender del coste relativo de cada error**. En un ensayo clínico un falso positivo es gravísimo; en un cribado de seguridad, un falso negativo lo es más.",
            "**Los dos errores están en conflicto y solo hay una forma de mejorar ambos.** Bajar α —exigir más evidencia para rechazar— reduce los falsos positivos y aumenta los falsos negativos, porque hace el listón más alto para todos. Lo único que reduce ambos a la vez es **más información**: más muestra, menos varianza en los datos, un diseño más eficiente. Por eso el cálculo de potencia debería hacerse **antes** de recoger los datos: sirve para saber qué tamaño de efecto se podría detectar, y por tanto si el estudio merece la pena. Un estudio con potencia del 30 % dejará pasar el efecto dos veces de cada tres aunque exista, y su resultado no informativo se atribuirá erróneamente a que el efecto no existe.",
            "**Ahora el punto central de la ficha: qué es y qué no es un p-valor.** Es la probabilidad de los datos —o de datos más extremos— **suponiendo cierta la nula**. No es la probabilidad de que la nula sea cierta, que es una cantidad distinta y que además el marco frecuentista no calcula. Invertir una probabilidad condicional exige el teorema de Bayes y por tanto una probabilidad a priori, que aquí no se ha declarado. La consecuencia práctica es contundente: **cuando se contrastan hipótesis poco plausibles a priori, la mayoría de los resultados significativos son falsos positivos**, aunque cada contraste esté bien hecho. Un p de 0,04 es evidencia mucho más débil de lo que su aura sugiere.",
            "**El segundo malentendido es confundir significación con importancia.** Un p-valor mide si se puede descartar el cero, y depende tanto del tamaño del efecto como del tamaño de la muestra. Con datos administrativos de millones de observaciones **cualquier diferencia se vuelve significativa**, incluida una completamente irrelevante para cualquier decisión. La pregunta económica no es si un efecto es distinto de cero, sino **si es lo bastante grande para importar**, y eso se responde mirando la magnitud del coeficiente y su intervalo de confianza, no la estrella junto al número.",
            "**El tercer problema, y hoy el más grave, es de multiplicidad.** Si se contrastan veinte hipótesis independientes con α = 0,05 y todas las nulas son ciertas, la probabilidad de obtener al menos un resultado significativo es del 64 %. Un falso positivo no es una anomalía: es lo esperable. Y en la práctica investigadora la multiplicidad rara vez es explícita: aparece como **grados de libertad del analista** —probar especificaciones, submuestras, definiciones de variable, criterios de exclusión— hasta dar con la combinación que cruza el umbral. Es el «**jardín de senderos que se bifurcan**», y produce resultados irreproducibles sin que nadie haya hecho trampa consciente.",
            "**Las correcciones y los remedios existen, con sus costes.** **Bonferroni** divide α por el número de contrastes y es simple y muy conservador; controlar la **tasa de falsos descubrimientos** es menos estricto y suele ser más razonable cuando se exploran muchas hipótesis. Pero los remedios de fondo son institucionales: **preregistro** del plan de análisis antes de ver los datos, publicación de resultados nulos para atajar el sesgo de publicación, replicación, y presentar **intervalos de confianza y tamaños de efecto** en lugar de asteriscos. La discusión que llevó a proponer bajar el umbral a 0,005 o a abandonar la palabra «significativo» viene de aquí, y conviene conocerla antes de leer literatura empírica.",
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
            { nom: "Hipótesis nula", sub: "Lo que se intenta rechazar, no lo que se cree.", cols: ["H₀: β = 0"] },
            { nom: "Error de tipo I", sub: "Afirmar un efecto que no existe. Lo fijamos nosotros.", cols: ["α = P(rechazar H₀ | H₀ cierta)"] },
            { nom: "Error de tipo II", sub: "No detectar un efecto que sí existe.", cols: ["β = P(no rechazar H₀ | H₁ cierta)"] },
            { nom: "Potencia", sub: "Lo que se calcula antes de recoger datos.", cols: ["Potencia = 1 − β"] },
            { nom: "Estadístico t", sub: "Distancia al valor nulo en errores estándar.", cols: ["t = (β̂ − β₀) ÷ EE(β̂)"] },
            { nom: "p-valor", sub: "Probabilidad de los datos dada H₀, no al revés.", cols: ["p = P(|T| ≥ |t| | H₀)"] },
            { nom: "Regla de decisión", sub: "Equivalente a que el IC excluya el valor nulo.", cols: ["rechazar si p < α"] },
            { nom: "Multiplicidad", sub: "Con 20 contrastes, un falso positivo es lo normal.", cols: ["P(≥1 falso positivo) = 1 − (1 − α)^k"] },
            { nom: "Bonferroni", sub: "Simple y conservador; sacrifica potencia.", cols: ["α* = α ÷ k"] },
            { nom: "Efecto mínimo detectable", sub: "Lo que el diseño puede ver, decidido de antemano.", cols: ["EMD ≈ 2,8 · EE(β̂) para potencia del 80 %"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un coeficiente, dos errores y veinte contrastes",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Anticipamos el resultado de la ficha 4.05 para tener algo concreto que contrastar. En una muestra de diez trabajadores, la regresión del salario sobre los años de educación da un coeficiente de **2,00** —dos mil euros por año de estudio— con un **error estándar de 0,3536**. La hipótesis nula interesante es que la educación no influye: **H₀: β = 0**.",
            "El estadístico es t = 2,00 ÷ 0,3536 = **5,657**. Con 8 grados de libertad, el valor crítico al 5 % es 2,306 y al 1 % es 3,355, así que se rechaza holgadamente; el p-valor bilateral es **0,00048**. La lectura correcta de ese número es: *si la educación no tuviera ningún efecto, sería extraordinariamente improbable observar una relación tan fuerte en una muestra de diez personas*. La lectura incorrecta —y habitual— sería decir que hay un 99,95 % de probabilidad de que la educación importe. Eso **no se ha calculado ni se puede calcular** dentro de este marco.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Coeficiente estimado", y: "Densidad" },
          dominio: { x: [-1.3, 2.5], y: [0, 1250] },
          marcasX: [-1, 0, 1, 2],
          marcasY: [],
          areas: [
            {
              color: "alerta",
              puntos: [[0.69, 0], [0.69, 168.09], [0.74, 126.29], [0.79, 93.01], [0.84, 67.14], [0.89, 47.51], [0.94, 32.95], [0.99, 22.4], [1.04, 14.93], [1.09, 9.75], [1.14, 6.24], [1.19, 3.92], [1.24, 2.41], [1.29, 1.45], [1.34, 0.86], [1.39, 0.5], [1.39, 0]],
            },
            {
              color: "n3",
              puntos: [[-0.4, 0], [-0.4, 0.45], [-0.3, 1.31], [-0.2, 3.56], [-0.1, 8.93], [0, 20.69], [0.1, 44.22], [0.2, 87.28], [0.3, 159], [0.4, 267.41], [0.5, 415.16], [0.6, 595.01], [0.69, 776], [0.69, 0]],
            },
          ],
          series: [
            {
              nombre: "Si β = 0",
              color: "tinta2",
              grosor: 2,
              etiquetaEn: [-0.55, 340],
              puntos: [[-1.3, 1.31], [-1.2, 3.56], [-1.1, 8.93], [-1, 20.69], [-0.9, 44.22], [-0.8, 87.28], [-0.7, 159], [-0.6, 267.41], [-0.5, 415.16], [-0.4, 595.01], [-0.3, 787.21], [-0.2, 961.46], [-0.1, 1084], [0, 1128.23], [0.1, 1084], [0.2, 961.46], [0.3, 787.21], [0.4, 595.01], [0.5, 415.16], [0.6, 267.41], [0.7, 159], [0.8, 87.28], [0.9, 44.22], [1, 20.69], [1.1, 8.93], [1.2, 3.56], [1.3, 1.31]],
            },
            {
              nombre: "Si β = 1",
              color: "acento",
              grosor: 2,
              etiquetaEn: [1.75, 130],
              puntos: [[-0.4, 0.45], [-0.3, 1.31], [-0.2, 3.56], [-0.1, 8.93], [0, 20.69], [0.1, 44.22], [0.2, 87.28], [0.3, 159], [0.4, 267.41], [0.5, 415.16], [0.6, 595.01], [0.7, 787.21], [0.8, 961.46], [0.9, 1084], [1, 1128.23], [1.1, 1084], [1.2, 961.46], [1.3, 787.21], [1.4, 595.01], [1.5, 415.16], [1.6, 267.41], [1.7, 159], [1.8, 87.28], [1.9, 44.22], [2, 20.69], [2.1, 8.93], [2.2, 3.56], [2.3, 1.31], [2.4, 0.45]],
            },
            {
              nombre: "Umbral 0,69",
              color: "tinta",
              trazo: "discontinuo",
              grosor: 1.4,
              etiquetaEn: [0.69, 1180],
              puntos: [[0.69, 0], [0.69, 1180]],
            },
          ],
          nota: "Las dos campanas son la **misma distribución del estimador** bajo dos supuestos sobre la verdad. La línea vertical es el umbral de rechazo al 5 %, en 0,69. La zona **naranja** es el error de tipo I: la parte de la curva de β = 0 que cae más allá del umbral, y **somos nosotros quienes fijamos su tamaño** al elegir α. La zona **azulada** es el error de tipo II: la parte de la curva de β = 1 que se queda por debajo del umbral y por tanto no se detecta, y es una consecuencia del diseño que rara vez se calcula. La imagen deja ver el conflicto: **desplazar el umbral a la derecha encoge la naranja y agranda la azulada**. Lo único que reduce las dos a la vez es estrechar las campanas, es decir, más datos.",
        },
        {
          tipo: "tabla",
          cabecera: ["Efecto real", "t esperado", "Potencia", "Error de tipo II", "Lectura"],
          filas: [
            ["0,50", "1,41", "29,3 %", "70,7 %", "Se pasaría por alto dos de cada tres veces"],
            ["1,00", "2,83", "80,7 %", "19,3 %", "Convención habitual de diseño"],
            ["1,50", "4,24", "98,9 %", "1,1 %", "Prácticamente seguro de detectarse"],
            { celdas: ["2,00", "5,66", "≈ 100 %", "≈ 0 %", "El efecto estimado en la muestra"], clase: "total" },
          ],
          nota: "Con el error estándar de 0,3536 y α = 0,05. La primera fila es la que hay que interiorizar: **este diseño no sirve para detectar efectos moderados**. Si el verdadero retorno de un año de estudios fuera de 500 € y no de 2.000, la muestra de diez personas lo dejaría escapar el 71 % de las veces, y el resultado no significativo se contaría como prueba de que la educación no importa. Ese es el error de tipo II, y no aparece en ninguna salida de ningún programa: **hay que calcularlo a propósito, y antes de recoger los datos**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Contrastes realizados", "P(al menos un falso positivo)"],
          filas: [
            ["1", "5,0 %"],
            ["5", "22,6 %"],
            ["10", "40,1 %"],
            { celdas: ["20", "64,2 %"], clase: "total" },
            ["50", "92,3 %"],
          ],
          nota: "Suponiendo que **todas** las hipótesis nulas son ciertas, es decir, que no existe ni un solo efecto real. Con veinte contrastes, encontrar algo significativo es lo normal, no lo excepcional. Y veinte no es una cifra alta: se alcanza sin darse cuenta al probar cuatro definiciones de la variable dependiente, dos submuestras y tres conjuntos de controles. **Bonferroni** exigiría aquí p < 0,0025 en lugar de p < 0,05, un listón mucho más duro que cuesta potencia. La solución de fondo no es aritmética sino de procedimiento: **decidir la especificación antes de mirar los datos**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el reverso: con muestras enormes, la significación deja de informar.** Manteniendo la misma dispersión de los datos, el efecto mínimo detectable cae con la raíz de n. Con 100 observaciones es de **219 €**; con 1.000, de **69 €**; con 10.000, de **22 €**; con 100.000, de **7 €**. Con registros administrativos de millones de trabajadores, un efecto de siete euros al año sería estadísticamente significativo con tres asteriscos y **económicamente irrelevante para cualquier decisión**. Por eso, cuando la muestra es grande, la pregunta útil ya no es si el coeficiente es distinto de cero, sino si su intervalo de confianza excluye las magnitudes que importarían.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la crisis de replicación y qué la ha causado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Desde hace más de una década, intentos sistemáticos de repetir estudios publicados en psicología, medicina y economía experimental han fracasado en una proporción muy alta. No se trata de fraude salvo en casos aislados: es un problema **estructural** que nace exactamente de los conceptos de esta ficha, y entenderlo cambia la forma de leer cualquier resultado empírico.",
            "**El primer ingrediente es el sesgo de publicación.** Las revistas publican hallazgos, no ausencias de hallazgo. Si veinte equipos investigan un efecto inexistente, uno obtendrá p < 0,05 por azar, y será el único que se publique. La literatura acumulada no es entonces una muestra de la evidencia, sino **una selección de sus extremos**. El síntoma visible es la acumulación anómala de p-valores justo por debajo de 0,05 que se observa al examinar revistas enteras.",
            "**El segundo es la baja potencia.** Muchos estudios trabajan con muestras pequeñas para efectos moderados, es decir, con potencias del 20 % o el 30 %. Aquí hay una consecuencia contraintuitiva que merece detenerse: en un estudio con poca potencia, **los efectos que consiguen ser significativos están necesariamente sobreestimados**, porque solo cruzan el umbral las estimaciones que el azar ha empujado hacia arriba. La literatura queda así poblada de efectos reales pero inflados, que al replicarse con muestras mayores se encogen o desaparecen.",
            "**El tercero son los grados de libertad del analista.** Entre los datos brutos y el resultado publicado hay centenares de decisiones: qué observaciones excluir, cómo definir la variable, qué controles incluir, dónde cortar los tramos, qué hacer con los valores extremos. Tomadas **después** de ver los resultados, cada una es una oportunidad de acercarse al umbral. No hace falta mala fe: basta con parar de probar cuando el resultado sale bonito, que es lo que todo el mundo hace de forma natural.",
            "**En economía el problema tiene una forma propia y algunos anticuerpos.** Las bases de datos son compartidas y muchos equipos contrastan las mismas hipótesis sobre los mismos datos, lo que genera multiplicidad invisible entre artículos. Pero la disciplina ha desarrollado defensas: exigencia de **datos y código replicables**, **preregistro** obligatorio de experimentos de campo y ensayos aleatorios, publicación de tablas con muchas especificaciones alternativas para mostrar la robustez, y una preferencia creciente por presentar **tamaños de efecto con intervalos** en lugar de asteriscos.",
            "**Cómo leer un resultado empírico a la luz de todo esto.** Preguntar cuál era la potencia del diseño. Mirar el intervalo de confianza antes que el p-valor, porque su anchura dice mucho más. Desconfiar de un p justo por debajo de 0,05 en una muestra pequeña, sobre todo si el efecto es grande y la hipótesis era poco plausible de antemano. Comprobar si el análisis estaba preregistrado. Y darle mucho más peso a una replicación independiente que a un resultado brillante y solitario. **Nada de esto exige desconfiar de la estadística: exige usarla como está definida** en lugar de como se cita.",
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
            { t: "Leer el p-valor como la probabilidad de que H₀ sea cierta", d: "Es la probabilidad de los datos suponiendo H₀ cierta, que es la condicional inversa. Invertirla exige el teorema de Bayes y una probabilidad a priori que no se ha declarado. La consecuencia práctica es que, si la hipótesis era poco plausible de antemano, un resultado significativo es muy probablemente un falso positivo." },
            { t: "Decir que se ha aceptado la hipótesis nula", d: "No rechazar significa que los datos son compatibles con la nula, no que sea cierta. Puede ocurrir porque el efecto no existe o porque el estudio no tenía potencia para verlo. Sin un cálculo de potencia, un resultado no significativo no distingue entre ambas cosas y no autoriza a concluir nada." },
            { t: "Confundir significación estadística con relevancia económica", d: "Con muestras grandes cualquier diferencia se vuelve significativa: con 100.000 observaciones el efecto mínimo detectable en el ejemplo baja a siete euros al año. La pregunta económica es si la magnitud importa para alguna decisión, y se responde mirando el coeficiente y su intervalo, no la estrella." },
            { t: "No calcular la potencia antes de recoger los datos", d: "La potencia decide qué tamaño de efecto puede detectar un estudio, y por tanto si tiene sentido hacerlo. Con la muestra del ejemplo, un efecto de 500 € pasaría desapercibido el 71 % de las veces. Calcularla después de ver los resultados —potencia observada— no aporta información nueva y es un error frecuente." },
            { t: "Ignorar la multiplicidad de contrastes", d: "Con veinte contrastes y todas las nulas ciertas, la probabilidad de al menos un falso positivo es del 64 %. Y veinte se alcanza sin querer combinando definiciones de variable, submuestras y conjuntos de controles. Si no se corrige ni se preregistra, el resultado significativo es lo esperable por puro azar." },
            { t: "Tratar 0,05 como una frontera con contenido", d: "Es una convención de Fisher sin fundamento teórico, y no hay nada cualitativamente distinto entre 0,049 y 0,051. El umbral debería depender del coste relativo de los dos errores, que no es el mismo en un ensayo clínico que en un cribado de seguridad. Reportar el p exacto y el intervalo informa mucho más que la dicotomía." },
            { t: "Elegir la especificación después de ver los resultados", d: "Es el jardín de senderos que se bifurcan, y produce hallazgos irreproducibles sin que nadie mienta: basta con dejar de probar cuando el resultado sale bien. El remedio es procedimental —preregistro, plan de análisis previo, publicación de todas las especificaciones— y no aritmético." },
            { t: "Creer que un efecto significativo en un estudio con poca potencia está bien estimado", d: "Ocurre lo contrario: si la potencia es baja, solo cruzan el umbral las estimaciones que el azar ha empujado al alza, así que los efectos publicados están sistemáticamente inflados. Es la razón principal de que las replicaciones con muestras mayores encuentren efectos mucho menores." },
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
            "La contabilidad nacional no contrasta hipótesis: mide. Pero los contrastes aparecen en cuanto sus cifras se usan para decidir algo, y ahí la lógica de esta ficha vuelve con toda su fuerza.",
          ],
          lista: [
            "La pregunta de si una economía **está en recesión** es un contraste disfrazado. La regla de los dos trimestres consecutivos de caída del PIB es un criterio mecánico aplicado a datos con revisiones que pueden cambiar el signo. Los comités de datación —el CEPR en Europa, el NBER en Estados Unidos— existen precisamente porque la decisión exige juicio sobre varios indicadores, no una regla automática sobre una cifra provisional. La ficha 10.10 desarrolla el problema.",
            "Los **objetivos fiscales** se evalúan comparando un saldo estructural estimado con un umbral, cuando esa estimación tiene una incertidumbre enorme por depender del producto potencial. Es el ejemplo perfecto de tratar como medición lo que es una estimación con intervalo: se aplica una regla de decisión nítida a un número que no lo es.",
            "Las **evaluaciones de política pública** —una reforma laboral, una bonificación de cotizaciones, una subida del salario mínimo— son contrastes de hipótesis con todos los problemas de esta ficha: multiplicidad de especificaciones, potencia limitada por el número de unidades tratadas, y un incentivo político evidente a publicar el resultado conveniente. Es donde el preregistro más falta hace y menos se practica.",
            "El **IPC subyacente** y las medias truncadas que publican los bancos centrales son intentos de separar señal de ruido antes de decidir. Sirven exactamente para no reaccionar a variaciones que caben dentro de la variabilidad normal de la serie, y son el equivalente práctico de no comentar diferencias no significativas.",
            "Y las **estimaciones de la NAIRU o del producto potencial** tienen intervalos tan anchos que a menudo no permiten rechazar que la brecha de producción sea cero. Cuando aun así se usan para justificar una decisión de tipos o de gasto, se está afirmando un efecto que los datos no permiten distinguir de la nada.",
          ],
          cierre:
            "El hilo común es el mismo error con distinto traje: **aplicar una regla de decisión nítida a una magnitud que no es nítida**. La contabilidad nacional entrega estimaciones; convertirlas en umbrales automáticos sin considerar su incertidumbre reproduce, en política económica, exactamente el problema que ha causado la crisis de replicación en la investigación.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El p-valor del coeficiente es 0,00048. ¿Qué significa exactamente?", a: "Que si la educación no tuviera ningún efecto sobre el salario, la probabilidad de observar una relación al menos tan fuerte como la de estos diez trabajadores sería de 48 entre 100.000. No significa que haya un 99,95 % de probabilidad de que el efecto exista: esa es la condicional inversa, y calcularla exigiría una probabilidad a priori que el marco frecuentista no proporciona." },
            { q: "Un estudio no encuentra efecto significativo. ¿Puede concluirse que la política no funciona?", a: "No, sin conocer la potencia. Con el diseño del ejemplo, un efecto real de 500 € pasaría desapercibido el 71 % de las veces. Un resultado no significativo es compatible con que el efecto no exista y con que el estudio fuera incapaz de detectarlo, y solo el cálculo de potencia distingue ambos casos." },
            { q: "¿Por qué bajar α de 0,05 a 0,01 no es gratis?", a: "Porque sube el listón para rechazar y por tanto aumenta el error de tipo II: se detectan menos efectos reales. Los dos errores están en conflicto, y desplazar el umbral solo redistribuye el riesgo entre ellos. Lo único que reduce ambos a la vez es estrechar la distribución del estimador, es decir, más datos o un diseño más eficiente." },
            { q: "Un investigador prueba veinte especificaciones y publica la significativa. ¿Qué probabilidad había de encontrar una por azar?", a: "El 64,2 %, si todas las hipótesis nulas fueran ciertas. Encontrar un resultado significativo es lo esperable, no lo excepcional. Bonferroni exigiría p < 0,0025, pero la solución de fondo es procedimental: fijar la especificación antes de ver los datos y publicar todas las que se probaron." },
            { q: "¿Por qué los efectos publicados en estudios con poca potencia suelen ser demasiado grandes?", a: "Porque con poca potencia solo superan el umbral las estimaciones que el azar ha empujado hacia arriba. La condición de haber sido publicado selecciona los valores extremos, de modo que la magnitud estimada está sesgada al alza aunque el efecto sea real. Al replicar con muestras mayores, el efecto se encoge." },
            { q: "Con un millón de observaciones, un efecto de 7 € anuales resulta significativo. ¿Qué se hace con eso?", a: "Se ignora, económicamente hablando. La significación solo dice que puede descartarse el cero, y con muestras enormes eso ocurre con cualquier diferencia. La pregunta relevante es si la magnitud cambia alguna decisión, y para responderla hay que mirar el coeficiente y su intervalo de confianza frente a un umbral de relevancia fijado de antemano." },
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
            { ref: "Wooldridge, Introducción a la econometría", nota: "el tratamiento estándar del contraste en el contexto de regresión, que es donde se usará el resto de la carrera." },
            { ref: "Ziliak y McCloskey, The Cult of Statistical Significance", nota: "la crítica más contundente a confundir significación con importancia, escrita por economistas y con ejemplos de la disciplina." },
            { ref: "Ioannidis, «Why Most Published Research Findings Are False», 2005", nota: "el artículo que abrió la crisis de replicación; el argumento es sencillo y se sigue con lo aprendido en esta ficha." },
            { ref: "Gelman y Loken, «The Garden of Forking Paths», 2013", nota: "por qué se obtienen falsos positivos sin hacer trampa consciente; imprescindible antes de analizar datos propios." },
            { ref: "American Statistical Association, declaración sobre los p-valores, 2016", nota: "seis principios en dos páginas, la referencia institucional sobre qué se puede y qué no se puede afirmar con un p." },
          ],
        },
      ],
    },
  ],
};
