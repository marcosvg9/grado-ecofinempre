/* Ficha 15.03 — Efectos de calendario: laborables, Semana Santa y año bisiesto. */

export default {
  codigo: "15.03",
  titulo: "Efectos de calendario: laborables, Semana Santa y año bisiesto",
  nivel: 3,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "Un trimestre con dos días laborables más produce más sin que la economía haya mejorado. Corregirlo no es cosmética: en la serie del bloque el efecto llega a un punto porcentual, más que el crecimiento subyacente de todo un año.",
  requiere: "15.02 Pre-ajuste RegARIMA · 15.01 El flujo del ajuste estacional · 4.05 Regresión por MCO",
  abre: "15.04 Valores atípicos · 15.07 Diagnósticos de calidad · 15.11 Agregación directa e indirecta",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los efectos de calendario y la estacionalidad se confunden constantemente, y conviene separarlos desde el principio porque son cosas distintas y se corrigen en etapas distintas. La **estacionalidad** es el patrón que se repite igual todos los años: el tercer trimestre siempre es flojo porque siempre hay vacaciones. Los **efectos de calendario** dependen de cómo cayó el calendario ese año concreto: cuántos días laborables tuvo el periodo, si febrero tuvo 29 días, si la Semana Santa cayó en marzo o en abril. **Varían de un año a otro**, así que un filtro estacional no puede capturarlos: por definición busca lo que se repite.",
            "El más importante es el efecto de **días laborables**. Una fábrica produce en función de los días que abre, y un trimestre puede tener 61 o 64 días hábiles según cómo caigan los festivos y los fines de semana. Esa diferencia de tres días sobre sesenta es un 5 % de capacidad productiva, y se traslada casi íntegra a la producción de las ramas intensivas en trabajo. La corrección más simple es proporcional —multiplicar por la razón entre los días medios del trimestre y los días reales—, pero la práctica habitual es **estimar el efecto por regresión** dentro del modelo RegARIMA de la ficha 15.02, porque no todas las ramas responden con la misma intensidad.",
            "La versión refinada distingue **días de la semana**: un sábado no vale lo mismo que un martes en el comercio minorista, y en algunos servicios el domingo vale más. En lugar de un solo regresor de días hábiles se usan seis, uno por día de la semana con el domingo como referencia, y se contrasta si la especificación detallada mejora lo suficiente para justificar los cinco parámetros adicionales. En series cortas rara vez lo hace, y ahí vuelve a aparecer el problema de longitud de la ficha 15.02.",
            "El **año bisiesto** es un caso pequeño y molesto. Febrero de un año bisiesto tiene un 3,57 % más de días que el de un año normal, lo que sobre el trimestre completo supone un 1,11 % —91 días frente a 90—. Es poco, pero es sistemático y aparece cada cuatro años, así que un filtro estacional lo interpretaría como un componente cíclico espurio de periodo cuatro. Se corrige con un regresor propio, y en series mensuales el efecto sobre febrero es lo bastante grande para que ignorarlo se note.",
            "La **Semana Santa** es el efecto de calendario más difícil, porque es una fiesta móvil: puede caer entera en marzo, entera en abril, o partida entre ambos. En datos mensuales eso desplaza actividad de un mes a otro sin que nada haya cambiado; en datos trimestrales el problema aparece solo cuando cambia de trimestre, lo que ocurre con cierta frecuencia. El tratamiento habitual estima un regresor que reparte el efecto sobre una ventana de días anteriores al Domingo de Resurrección, y la **longitud de esa ventana es una decisión del analista**: no hay un valor correcto, y elegir seis o quince días cambia el resultado.",
            "Conviene entender por qué esta corrección se hace en el pre-ajuste y no después. Si los efectos de calendario no se retiran antes de la descomposición, el filtro estacional los ve como parte del componente irregular, o peor, los mezcla parcialmente con el estacional al promediar por trimestre. El resultado es una estimación de la estacionalidad contaminada y una serie ajustada que **sigue conteniendo calendario**. Por eso las series oficiales distinguen entre *ajustada de estacionalidad* y *ajustada de estacionalidad y efectos de calendario*, y no son la misma serie.",
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
            { nom: "Estacionalidad", sub: "Se repite igual todos los años.", cols: ["El patrón intraanual: vacaciones, campañas, cosechas"] },
            { nom: "Efecto de calendario", sub: "Cambia de un año a otro.", cols: ["Depende de cómo cayó el calendario ese año concreto"] },
            { nom: "Corrección proporcional", sub: "La versión simple.", cols: ["$X_{\\text{corr}} = X \\cdot \\dfrac{\\text{días medios del periodo}}{\\text{días reales}}$"] },
            { nom: "Regresor de días hábiles", sub: "La versión estándar.", cols: ["Un coeficiente estimado dentro del RegARIMA"] },
            { nom: "Especificación por día", sub: "Cuando el día de la semana importa.", cols: ["Seis regresores, con el domingo como categoría de referencia"] },
            { nom: "Año bisiesto", sub: "Efecto pequeño pero sistemático.", cols: ["+3,57 % en febrero · +1,11 % sobre el trimestre"] },
            { nom: "Semana Santa", sub: "Fiesta móvil: marzo, abril o partida.", cols: ["Regresor sobre una ventana de días previos a la Pascua"] },
            { nom: "Orden de las correcciones", sub: "Por qué se hace antes de descomponer.", cols: ["Calendario en el pre-ajuste · estacionalidad después"] },
            { nom: "Dos series distintas", sub: "Y no intercambiables.", cols: ["Ajustada de estacionalidad $\\neq$ ajustada también de calendario"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: doce trimestres y sus días hábiles",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre la serie trimestral del bloque, con los días laborables reales de cada trimestre. La media de cada trimestre a lo largo de los tres años es la referencia: **63,67** días en el primero, **61,33** en el segundo, **66** en el tercero y **62,33** en el cuarto. La corrección proporcional multiplica cada observación por la razón entre su media y sus días reales.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Trimestre", "Días hábiles", "Media del trimestre", "Factor", "Corrección"],
          filas: [
            ["2024 T3", "66", "66,00", "1,0000", "0,00 %"],
            ["2023 T1", "64", "63,67", "0,9948", "−0,52 %"],
            ["2024 T4", "63", "62,33", "0,9894", "−1,06 %"],
            ["2025 T1", "63", "63,67", "1,0106", "+1,06 %"],
            { celdas: ["2025 T2", "62", "61,33", "0,9892", "−1,08 %"], clase: "total" },
          ],
          nota: "Fíjese en los dos últimos: **2024 T4 y 2025 T1 tuvieron ambos 63 días hábiles**, y sin embargo uno recibe una corrección negativa y el otro positiva de la misma magnitud. No es un error: 63 días son *muchos* para un cuarto trimestre, cuya media es 62,33, y *pocos* para un primero, cuya media es 63,67. La corrección no mide días, mide **desviación respecto a lo normal en ese trimestre**.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Trimestre", y: "Corrección %" },
          dominio: { x: [1, 12], y: [-1.6, 1.7] },
          marcasX: [1, 4, 8, 12],
          marcasY: [-1, 0, 1],
          series: [
            {
              nombre: "Corrección por días hábiles",
              color: "acento",
              etiquetaEn: [1.3, 1.5],
              puntos: [[1, -0.52], [2, 0.55], [3, 0], [4, 0.54], [5, -0.52], [6, 0.55], [7, 0], [8, -1.06], [9, 1.06], [10, -1.08], [11, 0], [12, 0.54]],
            },
          ],
          nota: "El patrón **no se repite igual cada año**, y eso es justamente lo que distingue el calendario de la estacionalidad. Los cuatro primeros trimestres y los cuatro siguientes se parecen porque 2023 y 2024 tuvieron casi los mismos días hábiles, pero **2024 T4 y 2025 T1 rompen el patrón**: ahí el calendario cayó distinto. Un filtro estacional, que promedia por trimestre, no puede capturar algo que cambia de año en año.",
        },
        {
          tipo: "parrafos",
          items: [
            "La magnitud importa más de lo que parece. La corrección máxima es de **1,08 puntos porcentuales**, mientras que el crecimiento subyacente de la serie ronda el **0,5 % trimestral** según la ficha 15.01. Es decir: **el efecto de calendario de un trimestre puede ser el doble que el crecimiento real de ese trimestre**. Ignorarlo no produce un error de segundo orden, produce un error mayor que la señal que se quiere medir.",
            "Un caso concreto para verlo. Entre 2024 T4 y 2025 T1 la serie bruta cae de 114,3 a 101,0. Corregida de calendario, cae de **113,09 a 102,07**. La caída bruta es del 11,6 % y la corregida del 9,7 %: casi dos puntos de diferencia que no proceden de la economía sino de que el cuarto trimestre de 2024 tuvo un día hábil de más y el primero de 2025 uno de menos. Sobre esa serie corregida se aplicará después el ajuste estacional, que es el que convierte esa caída en el +0,5 % que realmente ocurrió.",
            "Sobre la Semana Santa, un aviso práctico. En datos trimestrales españoles el efecto solo aparece cuando la fiesta cruza de marzo a abril, lo que sucede con irregularidad. Cuando ocurre, desplaza actividad del segundo trimestre al primero o al revés, y en ramas como hostelería, transporte o comercio el desplazamiento es grande. **El error clásico es corregir la Semana Santa en el agregado sin comprobar si la rama la tiene**: aplicarla donde no existe introduce ruido, y omitirla donde sí existe deja un residuo que los diagnósticos de la ficha 15.07 detectan como estacionalidad residual.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: el trimestre que parecía una recesión",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Considérese un país cuyo primer trimestre registra una caída del PIB del 0,3 % respecto al anterior en la serie ajustada de estacionalidad **pero no de calendario**. Dos trimestres negativos consecutivos son la definición convencional de recesión técnica, así que el dato tiene consecuencias que van más allá de la estadística. La pregunta correcta es si esa caída es económica o de calendario.",
            "El trimestre en cuestión tuvo dos días hábiles menos de lo habitual, porque varios festivos cayeron en día laborable en lugar de en fin de semana. Con una elasticidad estimada cercana a la unidad para las ramas intensivas en trabajo y algo menor para el conjunto, el efecto sobre el PIB trimestral puede rondar las **tres o cuatro décimas**. Corregido de calendario, el mismo trimestre pasa de −0,3 % a un valor ligeramente positivo. **La recesión técnica desaparece sin que ningún dato haya cambiado.**",
            "Lo incómodo es que ambas cifras son correctas y ambas se publican. La serie ajustada solo de estacionalidad responde a la pregunta «¿cuánto se produjo realmente en ese trimestre, descontando el patrón anual?». La ajustada también de calendario responde a «¿cuánto se habría producido con un calendario normal?». Para valorar la capacidad productiva subyacente, la segunda es la relevante. Para saber cuánta renta se generó de verdad, la primera. **Quien elige la serie está eligiendo la pregunta**, y conviene que lo haga a conciencia y no por lo que tenga más a mano.",
            "Este es también el motivo por el que las comparaciones internacionales exigen cuidado. No todos los institutos corrigen el calendario con el mismo detalle, y los calendarios laborales difieren entre países: los festivos nacionales caen en fechas distintas y las Semanas Santas se viven de forma distinta. Comparar el crecimiento trimestral de dos países usando series con distinto tratamiento de calendario introduce diferencias de décimas que se atribuyen a la economía y son del almanaque. Las directrices europeas de la ficha 15.06 existen en buena medida por esto.",
            "La regla operativa: ante una variación trimestral pequeña —menos de medio punto—, **antes de interpretarla conviene mirar cuántos días hábiles tuvo el periodo**. Es una comprobación de treinta segundos que evita construir una narrativa sobre un artefacto del calendario, y es sorprendente la frecuencia con que se omite en el comentario de coyuntura.",
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
            { t: "Confundir calendario con estacionalidad", d: "La estacionalidad es el patrón que se repite igual cada año y la captura el filtro estacional. Los efectos de calendario dependen de cómo cayó el almanaque ese año concreto y varían, así que un filtro que promedia por trimestre no puede verlos. Son correcciones distintas, en etapas distintas, y una serie puede tener una y no la otra." },
            { t: "Comparar series ajustadas de estacionalidad con series ajustadas también de calendario", d: "Son dos series oficiales distintas y responden a preguntas distintas: cuánto se produjo realmente frente a cuánto se habría producido con un calendario normal. Mezclarlas en una comparación temporal o entre países produce diferencias de décimas que parecen económicas y son del almanaque." },
            { t: "Aplicar la corrección de Semana Santa a cualquier serie", d: "Solo tiene sentido donde la fiesta desplaza actividad de verdad: hostelería, transporte, comercio. Aplicarla a una rama que no la sufre introduce ruido y consume un grado de libertad. Omitirla donde sí existe deja un residuo que aparece como estacionalidad residual en los diagnósticos." },
            { t: "Fijar la ventana de Semana Santa sin justificarla", d: "El regresor reparte el efecto sobre una ventana de días previos al Domingo de Resurrección, y su longitud es una decisión del analista. Seis días o quince dan resultados distintos, y no existe un valor correcto universal: hay que contrastarlo por serie y documentar la elección." },
            { t: "Ignorar el año bisiesto por pequeño", d: "Es un 1,11 % sobre el trimestre y un 3,57 % sobre febrero en datos mensuales, y aparece con regularidad cada cuatro años. Esa regularidad es el problema: un filtro estacional puede interpretarlo como un ciclo espurio de periodo cuatro en lugar de como lo que es." },
            { t: "Usar un único regresor de calendario para un agregado heterogéneo", d: "La construcción y la industria dependen mucho de los días hábiles; los servicios públicos, casi nada. Corregir el PIB total con un solo coeficiente supone que todas las ramas responden igual, lo que es falso, y es uno de los argumentos serios a favor del ajuste por ramas y agregación posterior." },
            { t: "Corregir el calendario después de la descomposición", d: "Si los efectos de calendario no se retiran antes, el filtro estacional los mezcla parcialmente con el componente estacional al promediar por trimestre. La estimación de la estacionalidad queda contaminada y la serie ajustada sigue conteniendo calendario. El orden de las etapas no es arbitrario." },
            { t: "Suponer que la elasticidad a los días hábiles es uno", d: "La corrección proporcional supone que producir un día más aumenta la producción exactamente en la proporción correspondiente. En la práctica hay ajustes de intensidad —horas extra, turnos— que amortiguan el efecto, y por eso la práctica estándar estima el coeficiente por regresión en lugar de imponerlo." },
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
            "La corrección de calendario tiene una consecuencia contable que la distingue del ajuste estacional: rompe identidades que el sistema exige, y además lo hace de forma distinta en cada rama.",
          ],
          lista: [
            "El SEC valora la producción por **devengo**, es decir, cuando la actividad ocurre, según el criterio que fija la ficha 12.02. Eso significa que un trimestre con más días hábiles efectivamente **produjo más**, y su PIB bruto es legítimamente mayor. La corrección de calendario no arregla un error de medición: construye una magnitud contrafactual, la que se habría observado con un calendario normal. Son dos cosas conceptualmente distintas.",
            "De ahí que la serie corregida de calendario **no cuadre con los totales anuales** salvo por casualidad, mientras que la bruta sí. Un año tiene los días hábiles que tiene, y la corrección los normaliza. Por eso la conciliación con las cuentas anuales de la ficha 15.09 se plantea siempre sobre el dato bruto o el ajustado, y la serie corregida de calendario se trata como una transformación analítica adicional.",
            "La heterogeneidad entre ramas conecta con la clasificación de actividades de la ficha 12.01. La **construcción** y la **industria manufacturera** tienen elasticidades altas a los días hábiles; el **comercio minorista** responde al número de sábados; los **servicios de no mercado** —administración, educación pública— apenas se ven afectados, porque su producción se valora por suma de costes según explica la ficha 6.03. Un único coeficiente para el agregado promedia realidades opuestas.",
            "Los **impuestos sobre los productos (D.21)** de la ficha 13.05 siguen a la base imponible, así que heredan el efecto de calendario de las operaciones que gravan. Pero su recaudación se registra con criterios de devengo que no siempre coinciden con el momento de la transacción, lo que introduce un desfase adicional y hace que su corrección de calendario no sea la misma que la de la producción subyacente.",
            "Por último, la relación con la ficha 10.08: cuando se trabaja con **volúmenes encadenados**, la corrección de calendario se aplica a las series en volumen, no a las nominales, porque el objetivo es medir actividad y no valor. Aplicarla al nominal y deflactar después, o al revés, da resultados distintos, y el orden debe ser coherente en todo el sistema.",
          ],
          cierre:
            "La consecuencia práctica: la serie corregida de calendario es una construcción analítica, no una corrección de un error. El dato bruto no está equivocado; simplemente responde a otra pregunta.",
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
              q: "2024 T4 y 2025 T1 tuvieron ambos 63 días hábiles. ¿Por qué reciben correcciones de signo contrario?",
              a: "Porque la corrección mide la desviación respecto a lo normal en ese trimestre, no el número de días en absoluto. La media del cuarto trimestre es 62,33 días, así que 63 son muchos y la corrección es negativa (−1,06 %). La media del primero es 63,67, así que 63 son pocos y la corrección es positiva (+1,06 %). El mismo número de días significa cosas distintas según el trimestre.",
            },
            {
              q: "¿Por qué un filtro estacional no puede corregir los efectos de calendario?",
              a: "Porque el filtro estima la estacionalidad promediando cada trimestre a lo largo de los años, y por tanto solo captura lo que se repite igual. Los efectos de calendario cambian de un año a otro: en la serie del bloque, 2023 y 2024 tienen un patrón parecido y 2025 lo rompe. Lo que varía año a año no puede salir de un promedio por trimestre.",
            },
            {
              q: "¿Cuánto añade un año bisiesto a un primer trimestre, y por qué se corrige pese a ser poco?",
              a: "Un 1,11 %: el trimestre pasa de 90 a 91 días. En datos mensuales el efecto sobre febrero es del 3,57 %. Se corrige porque es sistemático y aparece cada cuatro años, y esa regularidad es precisamente el peligro: un filtro estacional podría interpretarlo como un componente cíclico espurio de periodo cuatro en lugar de como un artefacto del calendario.",
            },
            {
              q: "La serie bruta cae un 11,6 % entre 2024 T4 y 2025 T1, y la corregida de calendario un 9,7 %. ¿Cuál se publica como dato de crecimiento?",
              a: "Ninguna de las dos: ambas siguen conteniendo estacionalidad, y el primer trimestre es estructuralmente flojo. La corrección de calendario es solo la primera de las dos, y sobre la serie corregida se aplica después el ajuste estacional, que convierte esa caída en el crecimiento subyacente de en torno al 0,5 %. Las dos cifras del enunciado son etapas intermedias.",
            },
            {
              q: "¿Por qué la serie corregida de calendario no cuadra con los totales anuales?",
              a: "Porque un año tuvo los días hábiles que tuvo, y la corrección los normaliza a una referencia. La serie corregida es una magnitud contrafactual —lo que se habría producido con un calendario normal— y no tiene por qué sumar lo que efectivamente se produjo. Por eso la conciliación con las cuentas anuales se plantea sobre el dato bruto o el ajustado, y la corregida de calendario se trata como transformación analítica adicional.",
            },
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
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment, capítulo de efectos de calendario", nota: "las recomendaciones sobre qué regresores usar, cuándo contrastar la especificación detallada por día y cómo documentar la ventana de Semana Santa." },
            { ref: "Bell y Hillmer, «Modeling Time Series with Calendar Variation»", nota: "el planteamiento original del tratamiento de los efectos de calendario dentro de un modelo de regresión con errores ARIMA." },
            { ref: "INE, notas metodológicas sobre corrección de efectos de calendario", nota: "las decisiones concretas del caso español, incluidos los calendarios laborales por comunidad y el tratamiento de la Semana Santa." },
            { ref: "Manual de referencia de JDemetra+, sección de regresores de calendario", nota: "cómo se definen y se prueban los regresores en la herramienta, incluida la construcción de calendarios nacionales propios." },
          ],
        },
      ],
    },
  ],
};
