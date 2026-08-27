/* Ficha 15.02 — Pre-ajuste: modelos RegARIMA y elección de la transformación. */

export default {
  codigo: "15.02",
  titulo: "Pre-ajuste: modelos RegARIMA y elección de la transformación",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "5 h",
  nucleo:
    "Antes de descomponer hay que limpiar y extender la serie. El modelo RegARIMA hace las tres cosas a la vez —corrige calendario, absorbe atípicos y predice—, y por eso condiciona todo lo que venga después: un pre-ajuste mal especificado no se arregla en la etapa siguiente.",
  requiere: "15.01 El flujo del ajuste estacional · 4.09 Series temporales · 4.05 Regresión por MCO",
  abre: "15.03 Efectos de calendario · 15.04 Valores atípicos · 15.05 X-11 frente a SEATS",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **pre-ajuste** es la primera etapa del flujo y la que más determina el resultado, precisamente porque no se ve en el gráfico final. Su instrumento es un modelo **RegARIMA**: una regresión cuyos residuos, en lugar de suponerse independientes como en la ficha 4.05, siguen un proceso ARIMA de los que estudia la ficha 4.09. La parte de regresión recoge lo que se puede explicar con variables observables —días laborables, Semana Santa, valores atípicos—; la parte ARIMA modela la dinámica que queda.",
            "Esa combinación resuelve tres problemas de una vez, y conviene verlos por separado. **Limpia**: los efectos de calendario y los atípicos se estiman y se retiran, de modo que la descomposición posterior no los confunda con estacionalidad. **Extiende**: el modelo estimado permite predecir hacia adelante y retropredecir hacia atrás, lo que da a los filtros de la etapa siguiente las observaciones que necesitan a ambos lados de cada punto. Y **describe**: en el enfoque SEATS de la ficha 15.05, la descomposición se deriva del propio modelo ARIMA estimado aquí, así que el pre-ajuste no es preparación sino la mitad del trabajo.",
            "La extensión merece detenerse. Los filtros de promedios móviles necesitan datos a ambos lados; en el extremo de la serie no existen, y sin previsiones habría que usar filtros asimétricos, mucho peores. Al extender la serie un año o dos con el modelo, se puede aplicar el filtro simétrico hasta el final. **El precio es que los últimos datos ajustados dependen de una predicción**, y por eso son los que más se revisan cuando llega información nueva. Esto explica, mejor que ninguna otra cosa, por qué el dato de coyuntura del último trimestre es el menos fiable de la serie.",
            "La primera decisión del pre-ajuste es la **transformación**: trabajar con la serie en niveles o en logaritmos. No es una preferencia estética. Si la amplitud de las oscilaciones estacionales **crece con el nivel** de la serie —lo habitual en variables económicas—, la descomposición apropiada es multiplicativa, y tomar logaritmos la convierte en aditiva, que es la que el modelo sabe tratar. Si la amplitud es constante, el nivel es lo correcto. La elección se toma comparando el ajuste de ambas versiones mediante un criterio de información, no a ojo, aunque mirar el gráfico casi siempre anticipa el resultado.",
            "La segunda es la **especificación ARIMA**. El caballo de batalla es el llamado **modelo aerolínea**, un (0,1,1)(0,1,1) con la periodicidad de la serie, que se ha ganado su posición por una razón empírica sencilla: ajusta razonablemente bien una proporción enorme de series económicas reales. Las herramientas modernas hacen identificación automática y prueban varias alternativas, pero el aerolínea sigue siendo la referencia por defecto y lo que se usa cuando la identificación automática no encuentra nada mejor.",
            "Conviene una advertencia sobre la **longitud de la serie**, porque es donde más se peca. Las diferencias que aplica el modelo consumen observaciones: una diferencia regular y otra estacional se llevan, en datos trimestrales, cinco observaciones. Con doce trimestres quedan siete para estimar dos parámetros, además del calendario y los atípicos. Las directrices europeas recomiendan **al menos cinco años** de datos, y por debajo de tres el ajuste no debería publicarse. La serie de ejemplo del bloque, con tres años, está exactamente en el límite de lo defendible, y se usa por claridad expositiva, no como modelo de buena práctica.",
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
            { nom: "Modelo RegARIMA", sub: "Regresión con residuos ARIMA.", cols: ["yt = Σ βi · xit + zt, donde zt sigue un ARIMA"] },
            { nom: "Regresores habituales", sub: "Lo observable que se retira.", cols: ["Días laborables · Semana Santa · bisiesto · atípicos"] },
            { nom: "Notación ARIMA estacional", sub: "Parte regular y parte estacional.", cols: ["(p,d,q)(P,D,Q)s con s = 4 trimestral, 12 mensual"] },
            { nom: "Modelo aerolínea", sub: "La especificación por defecto.", cols: ["(0,1,1)(0,1,1)s: dos parámetros, θ y Θ"] },
            { nom: "Coste de las diferencias", sub: "Por qué la serie corta no sirve.", cols: ["(1−B)(1−Bs) consume 1 + s observaciones"] },
            { nom: "Elección de transformación", sub: "Multiplicativa o aditiva.", cols: ["Logaritmo si la amplitud crece con el nivel"] },
            { nom: "Criterio de selección", sub: "Cómo se decide, no a ojo.", cols: ["Comparación por criterio de información entre ambas versiones"] },
            { nom: "Extensión con predicciones", sub: "Para poder usar filtros simétricos al final.", cols: ["Uno o dos años hacia adelante y hacia atrás"] },
            { nom: "Longitud mínima", sub: "Recomendación de las directrices europeas.", cols: ["Cinco años deseable · tres el mínimo publicable"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: qué consume el modelo y qué queda",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre la serie trimestral del bloque, con doce observaciones, veamos qué queda realmente para estimar. El modelo aerolínea aplica una diferencia regular y una estacional, y ese es el paso que consume información.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Trimestral (s = 4)", "Mensual (s = 12)", "Comentario"],
          filas: [
            ["Observaciones de partida", "12", "36", "Tres años en ambos casos"],
            ["Consume (1 − B)", "1", "1", "Diferencia regular"],
            ["Consume (1 − Bˢ)", "4", "12", "Diferencia estacional"],
            ["Quedan efectivas", "7", "23", "Para estimar todo lo demás"],
            { celdas: ["Parámetros por estimar", "2 + regresores", "2 + regresores", "θ, Θ, calendario y atípicos"], clase: "total" },
          ],
          nota: "Con tres años de datos trimestrales quedan **siete observaciones efectivas**. Añádase un regresor de días laborables y un atípico y se está estimando cuatro parámetros con siete datos. El ajuste será inestable y cambiará mucho con cada trimestre nuevo. **Con cinco años los números pasan a 20 − 5 = 15 efectivas**, y con siete a 23: por eso las directrices piden esa longitud, y no por prudencia genérica.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Años de datos disponibles", y: "Observaciones efectivas" },
          dominio: { x: [2, 10], y: [0, 36] },
          marcasX: [2, 4, 6, 8, 10],
          marcasY: [0, 10, 20, 30],
          series: [
            {
              nombre: "Trimestral: 4n − 5",
              color: "acento",
              etiquetaEn: [2.3, 33],
              puntos: [[2, 3], [3, 7], [4, 11], [5, 15], [6, 19], [7, 23], [8, 27], [9, 31], [10, 35]],
            },
            {
              nombre: "Mínimo recomendable",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [6.3, 12],
              puntos: [[5, 0], [5, 36]],
            },
          ],
          nota: "La recta empieza en un valor muy bajo y crece despacio: **el coste fijo de las diferencias no desaparece nunca**, simplemente pesa menos. Con dos años quedan tres observaciones efectivas, cifra con la que no se puede estimar nada. La línea vertical marca los cinco años que recomiendan las directrices europeas, donde ya hay quince.",
        },
        {
          tipo: "parrafos",
          items: [
            "La segunda decisión, la transformación, se resuelve mirando si la amplitud estacional crece con el nivel. En la serie del bloque, la diferencia entre el trimestre más alto y el más bajo pasa de **24,0 puntos en 2023** a 26,0 en 2025, mientras el nivel medio sube de 100,0 a 105,0. La amplitud crece aproximadamente en la misma proporción que el nivel —un 8,3 % frente a un 5,0 %—, lo que apunta a **descomposición multiplicativa** y por tanto a trabajar en logaritmos. Es también lo que sugieren los factores estacionales estimados en la ficha 15.01, que son porcentajes y no cantidades fijas.",
            "Una precisión que evita un error frecuente: **el logaritmo no se puede aplicar a series con ceros o valores negativos**, lo que descarta la descomposición multiplicativa para saldos, variaciones de existencias o capacidad de financiación. En esos casos hay que trabajar en niveles con descomposición aditiva aunque la amplitud parezca crecer, y ese es uno de los motivos por los que las cuentas de la ficha 12.09 son incómodas de ajustar: sus saldos cambian de signo.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué el último dato siempre se revisa",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La queja recurrente de quien sigue la coyuntura es que el dato del último trimestre se revisa más que ningún otro. La ficha 10.10 lo atribuía a la llegada de información nueva, y eso es cierto, pero solo explica una parte. **La otra procede del propio procedimiento de ajuste**, y se entiende exactamente aquí.",
            "Un filtro de promedios móviles simétrico necesita observaciones a los dos lados del punto que está suavizando. En mitad de la serie las tiene. En el último trimestre no existen, así que hay dos opciones: usar un filtro asimétrico, que emplea solo el pasado y produce estimaciones sesgadas, o **inventar el futuro con el modelo** y aplicar el filtro simétrico sobre esa extensión. El procedimiento estándar hace lo segundo, que es mejor, pero tiene una consecuencia inevitable: el dato ajustado del último trimestre depende de una predicción que aún no se ha confirmado.",
            "Cuando llega el trimestre siguiente ocurren tres cosas a la vez. La predicción se sustituye por el dato real, con lo que el valor ajustado anterior cambia. El modelo se reestima con una observación más, lo que altera θ y Θ y por tanto todas las predicciones. Y los factores estacionales se recalculan, lo que modifica el pasado ya publicado. **Ninguna de las tres tiene que ver con que el dato bruto se haya corregido.** La serie ajustada se revisa incluso cuando la bruta no se toca.",
            "La magnitud de este efecto no es despreciable y tiene un patrón conocido: las revisiones son mayores en los extremos de la serie, decrecen hacia el centro y se estabilizan al cabo de dos o tres años. También son mayores en los puntos de giro del ciclo, que es justamente cuando más interesa acertar: cuando la economía cambia de dirección, el modelo todavía está prediciendo la dirección anterior, y el dato del último trimestre tiende a suavizar el giro. **El procedimiento reacciona tarde a los cambios de tendencia por construcción**, y no hay forma de evitarlo sin empeorar todo lo demás.",
            "De ahí una regla operativa que conviene interiorizar: **el último dato de una serie ajustada no es una observación, es la punta de una estimación**. Quien analiza coyuntura serio mira la revisión histórica de esa serie para saber cuánto suele moverse el primer dato, y trata la última cifra con la incertidumbre correspondiente. Los diagnósticos de la ficha 15.07 incluyen precisamente medidas del tamaño típico de esas revisiones, y la ficha 15.08 discute las políticas para contenerlas.",
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
            { t: "Ajustar una serie demasiado corta", d: "Las diferencias del modelo consumen 1 + s observaciones, así que con tres años trimestrales quedan siete efectivas para estimar dos parámetros más el calendario y los atípicos. Las directrices europeas piden cinco años y consideran tres el mínimo publicable. Por debajo, el ajuste existe pero no significa nada estable." },
            { t: "Elegir la transformación a ojo", d: "La decisión entre niveles y logaritmos determina si la descomposición es aditiva o multiplicativa, y se toma comparando el ajuste de ambas versiones con un criterio de información. Mirar el gráfico ayuda a anticipar el resultado, pero no sustituye al contraste, sobre todo en series donde la amplitud crece poco." },
            { t: "Aplicar logaritmos a series con ceros o negativos", d: "No está definido. Saldos, variaciones de existencias y capacidad o necesidad de financiación cambian de signo, así que la descomposición multiplicativa queda descartada y hay que trabajar en niveles. Es uno de los motivos por los que las cuentas de acumulación son especialmente difíciles de ajustar." },
            { t: "Tratar el pre-ajuste como un trámite previo", d: "En el enfoque basado en modelos, la descomposición se deriva del ARIMA estimado aquí, así que un pre-ajuste mal especificado no se corrige después: se propaga. Y en el enfoque de promedios móviles, las predicciones que alimentan los filtros salen también de este modelo." },
            { t: "Olvidar que las predicciones entran en el dato publicado", d: "Los últimos valores ajustados se calculan con filtros aplicados sobre una serie extendida con previsiones. Cuando el dato real llega y no coincide con la predicción, el valor ajustado cambia aunque el dato bruto no se haya revisado. Es la principal fuente de revisión del último trimestre." },
            { t: "Confiar ciegamente en la identificación automática", d: "Las herramientas prueban varias especificaciones y eligen por criterio de información, lo que funciona bien en la mayoría de series. Pero en series cortas, muy irregulares o con cambios de comportamiento, la elección automática puede saltar de un modelo a otro entre publicaciones e introducir revisiones que nada tienen que ver con los datos." },
            { t: "Suponer que el modelo aerolínea es una ley", d: "Es un buen punto de partida empírico, no un resultado teórico: ajusta razonablemente muchas series económicas y por eso se usa por defecto. Hay series que piden otra especificación, y aceptar el aerolínea sin comprobar los residuos es tan perezoso como cambiarlo sin motivo." },
            { t: "Estimar el calendario y los atípicos por separado del ARIMA", d: "El modelo RegARIMA estima ambas partes conjuntamente, y debe hacerlo: si se retiran primero los efectos de calendario por regresión ordinaria y luego se modela el residuo, los errores estándar quedan mal calculados porque la regresión supuso independencia donde hay autocorrelación." },
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
            "El pre-ajuste toca cuestiones que en contabilidad nacional no son estadísticas sino de definición, y de ahí salen algunas de sus mayores dificultades prácticas.",
          ],
          lista: [
            "La elección de transformación choca con la naturaleza de muchos agregados del SEC. Los **saldos contables** —capacidad o necesidad de financiación (**B.9**) de la ficha 12.09, variación de existencias dentro de la formación de capital (**P.5**) de la ficha 13.08— cambian de signo, así que no admiten logaritmos ni descomposición multiplicativa. Se ajustan en niveles, con peores propiedades, y esa es una limitación de origen y no una mala práctica.",
            "El **modelo de cada serie se especifica una vez y se congela durante el año**, según recomiendan las directrices europeas. Reestimar la especificación en cada publicación introduciría saltos entre versiones que el usuario no puede distinguir de movimientos reales de la economía. Es la misma lógica que sostiene la política de revisiones de la ficha 15.08: la estabilidad del procedimiento vale más que la optimalidad de cada estimación aislada.",
            "Los **regresores de calendario** no son iguales para todas las ramas de actividad, y ahí el pre-ajuste se cruza con la clasificación de la ficha 12.01. La construcción y la industria dependen mucho de los días laborables; el comercio minorista depende del número de sábados; los servicios públicos, apenas. Ajustar el PIB total con un único regresor de calendario supone que todas las ramas responden igual, que es falso, y es un argumento a favor de la agregación indirecta de la ficha 15.11.",
            "Las **predicciones que extienden la serie** plantean un problema conceptual peculiar: el dato publicado de un trimestre depende de una previsión sobre trimestres que aún no han ocurrido. En una estadística que se presenta como registro de lo sucedido, eso es incómodo, y es la razón de que los manuales insistan en que las series ajustadas son estimaciones y no observaciones.",
            "Por último, la **coherencia entre el pre-ajuste y la revisión anual**: cuando llegan las cuentas anuales definitivas y se revisa el dato bruto, el modelo hay que reestimarlo entero, y la serie ajustada cambia por dos vías simultáneas. Separar cuánto de la revisión viene del dato y cuánto del procedimiento exige rehacer el ajuste con los datos antiguos, ejercicio que pocos institutos publican.",
          ],
          cierre:
            "La consecuencia práctica: buena parte de las dificultades del ajuste en contabilidad nacional no son de método sino de objeto. Los saldos que cambian de signo y los agregados heterogéneos son difíciles de ajustar porque son así, no porque el procedimiento sea deficiente.",
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
              q: "¿Cuántas observaciones efectivas quedan al aplicar un modelo aerolínea a una serie trimestral de cinco años?",
              a: "Quince. Cinco años trimestrales son veinte observaciones, y las diferencias (1 − B)(1 − B⁴) consumen 1 + 4 = 5. Con tres años quedarían solo siete, y con dos, tres. Ese coste fijo es la razón de que las directrices europeas pidan cinco años de datos y consideren tres el mínimo publicable.",
            },
            {
              q: "¿Por qué se extiende la serie con predicciones antes de aplicar los filtros?",
              a: "Porque los filtros simétricos de promedios móviles necesitan observaciones a ambos lados de cada punto, y en el extremo de la serie no existen. Sin la extensión habría que usar filtros asimétricos, que solo miran al pasado y producen estimaciones peores. El precio es que el dato ajustado más reciente depende de una predicción, y por eso es el que más se revisa.",
            },
            {
              q: "¿Cómo se decide entre trabajar en niveles o en logaritmos?",
              a: "Comparando el ajuste de ambas versiones con un criterio de información. Conceptualmente, si la amplitud de las oscilaciones estacionales crece con el nivel de la serie, la descomposición apropiada es multiplicativa y el logaritmo la convierte en aditiva; si la amplitud es constante, se trabaja en niveles. La restricción práctica es que el logaritmo no admite ceros ni valores negativos.",
            },
            {
              q: "Una serie de capacidad o necesidad de financiación pasa de positiva a negativa. ¿Qué implica para el ajuste?",
              a: "Que no se puede usar descomposición multiplicativa, porque el logaritmo no está definido para valores negativos ni cero. Hay que ajustarla en niveles con descomposición aditiva, aunque la amplitud parezca crecer con el nivel. Es una limitación de origen que afecta a todos los saldos contables del sistema, y explica por qué las cuentas de acumulación son especialmente incómodas de ajustar.",
            },
            {
              q: "El dato bruto de un trimestre no se ha revisado, pero el ajustado ha cambiado. ¿Es posible?",
              a: "Sí, y es lo habitual. Al añadirse un trimestre nuevo, la predicción que sostenía el extremo se sustituye por el dato real, el modelo se reestima y cambian θ y Θ, y los factores estacionales se recalculan afectando también al pasado. Las tres cosas modifican la serie ajustada sin que ningún dato bruto se haya tocado.",
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
            { ref: "Gómez y Maravall, Programs TRAMO and SEATS: Instructions for the User", nota: "la referencia sobre el pre-ajuste con modelos RegARIMA escrita por los autores del método; densa pero definitiva en lo que respecta a la especificación." },
            { ref: "Box y Jenkins, Time Series Analysis: Forecasting and Control", nota: "el origen del modelo aerolínea y del enfoque de identificación, estimación y diagnóstico que sigue estructurando el procedimiento." },
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment, capítulo de pre-ajuste", nota: "las recomendaciones concretas sobre longitud mínima de serie, congelación de la especificación y elección de regresores." },
            { ref: "Manual de referencia de JDemetra+, sección de especificaciones", nota: "cómo se traducen todas estas decisiones a las opciones concretas de la herramienta que trata la ficha 15.06." },
          ],
        },
      ],
    },
  ],
};
