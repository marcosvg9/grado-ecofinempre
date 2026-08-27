/* Ficha 15.10 — Desagregación temporal: Chow-Lin, Fernández y Litterman. */

export default {
  codigo: "15.10",
  titulo: "Desagregación temporal: Chow-Lin, Fernández y Litterman",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "5 h",
  nucleo:
    "Construir una serie trimestral que nadie ha medido, a partir de un total anual que sí se conoce y de indicadores que se mueven con ella. Es la columna vertebral de la contabilidad trimestral, y su resultado es tan bueno como la relación entre el indicador y lo que pretende representar.",
  requiere: "15.09 Benchmarking y conciliación · 4.05 Regresión por MCO · 4.06 Diagnóstico de la regresión",
  abre: "15.11 Agregación directa e indirecta · 15.12 Nowcasting · 10.10 Cuentas trimestrales",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Buena parte de las series trimestrales que se publican **no se observan**. No existe una encuesta trimestral que mida el valor añadido de todas las ramas, ni el consumo final de los hogares, ni la formación de capital. Lo que existe es un dato **anual** elaborado con fuentes completas, y un puñado de **indicadores de coyuntura** que sí se miden cada trimestre: afiliación, índices de producción industrial, ventas, matriculaciones, consumo de electricidad. La desagregación temporal es el procedimiento que combina ambas cosas para producir la serie trimestral.",
            "El planteamiento es una extensión natural del benchmarking de la ficha 15.09. Allí había una serie trimestral que se retocaba para cuadrar con un total anual; aquí **no hay serie trimestral de partida**, y hay que construirla. El indicador aporta el perfil y el dato anual aporta el nivel, exactamente el mismo reparto de papeles, y la restricción es idéntica: los cuatro trimestres deben sumar el año.",
            "**Chow y Lin** resolvieron el problema en 1971 con un planteamiento de regresión. Se estima primero la relación entre la variable objetivo y el indicador **a nivel anual**, que es donde ambas se observan. Con los coeficientes estimados se construye una estimación trimestral preliminar aplicando la regresión al indicador trimestral. Esa preliminar no cuadrará con los totales anuales, y los residuos anuales se distribuyen entre trimestres siguiendo la estructura de covarianzas supuesta para el término de error. El resultado es el mejor estimador lineal insesgado bajo esos supuestos.",
            "La familia se distingue por lo que se supone sobre ese error. **Chow-Lin** supone un proceso autorregresivo estacionario y estima su parámetro. **Fernández** supone un paseo aleatorio, que corresponde al caso límite en que el parámetro vale uno, y resulta apropiado cuando las series son claramente no estacionarias, que es lo habitual en magnitudes económicas en niveles. **Litterman** supone un paseo aleatorio sobre las primeras diferencias, lo que produce trayectorias todavía más suaves. La elección importa menos de lo que parece: **las tres dan resultados muy parecidos cuando el indicador es bueno**, y ninguna salva un indicador malo.",
            "Ahí está el punto que conviene subrayar por encima del aparato técnico. La calidad del resultado **depende casi enteramente de la relación entre el indicador y la variable objetivo**, no del método de distribución. Un indicador que se mueva con la variable produce una serie trimestral informativa con cualquiera de los tres métodos; un indicador mediocre produce una serie que cumple la restricción anual y cuyo perfil intraanual es en buena medida invención del procedimiento.",
            "Un rasgo que sorprende la primera vez: la serie que sale de la desagregación temporal es una **serie bruta**, con toda su estacionalidad, porque el indicador la tenía. Hay que ajustarla después con el procedimiento de las fichas anteriores. Es decir, la cadena completa de la contabilidad trimestral es: desagregar el anual con indicadores, obtener una serie bruta trimestral, y ajustarla estacionalmente. La desagregación no sustituye al ajuste; lo precede.",
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
            { nom: "El problema", sub: "La serie trimestral no existe.", cols: ["Se conoce el total anual y un indicador trimestral"] },
            { nom: "Reparto de papeles", sub: "Igual que en benchmarking.", cols: ["Indicador: el perfil · dato anual: el nivel"] },
            { nom: "Paso 1", sub: "Donde ambas se observan.", cols: ["Regresión de la variable sobre el indicador, a nivel anual"] },
            { nom: "Paso 2", sub: "Aplicar lo estimado.", cols: ["Estimación trimestral preliminar con los coeficientes anuales"] },
            { nom: "Paso 3", sub: "Cerrar la restricción.", cols: ["Distribuir los residuos anuales entre trimestres"] },
            { nom: "Chow-Lin", sub: "Error autorregresivo estacionario.", cols: ["Se estima el parámetro de autocorrelación"] },
            { nom: "Fernández", sub: "Caso límite no estacionario.", cols: ["Error de paseo aleatorio: apropiado en niveles"] },
            { nom: "Litterman", sub: "Trayectorias aún más suaves.", cols: ["Paseo aleatorio sobre las primeras diferencias"] },
            { nom: "Lo que decide el resultado", sub: "No es el método.", cols: ["La relación entre indicador y variable objetivo"] },
            { nom: "Qué produce", sub: "Y qué falta después.", cols: ["Una serie BRUTA: hay que ajustarla estacionalmente"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: un PIB trimestral que nadie midió",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Supóngase que se conoce el **PIB anual** de tres años —**1.020**, **1.048** y **1.085**— y que el único dato trimestral disponible es el índice de producción industrial del bloque, cuyos totales anuales son 400, 409 y 420. El objetivo es construir el PIB trimestral, que no se ha observado nunca.",
            "**Primer paso: la regresión anual.** Con tres observaciones anuales se estima la relación entre PIB e indicador, que resulta ser **PIB = −282,12 + 3,2542 · indicador**. Los residuos de esa regresión son +0,457, −0,831 y +0,374: pequeños, lo que indica que el indicador explica bien el nivel anual del PIB.",
            "**Segundo paso: la estimación preliminar.** Se aplica esa relación al indicador trimestral, repartiendo la constante entre los cuatro trimestres. El resultado suma **1.019,54**, **1.048,83** y **1.084,63**, que no coincide con los totales conocidos. **Tercer paso:** esos residuos —+0,457, −0,831 y +0,374— se distribuyen entre trimestres con el mismo criterio de suavidad de la ficha anterior.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "PIB anual conocido", "Suma de la preliminar", "Residuo a distribuir", "Suma final"],
          filas: [
            ["2023", "1.020", "1.019,54", "+0,457", "1.020,00"],
            ["2024", "1.048", "1.048,83", "−0,831", "1.048,00"],
            { celdas: ["2025", "1.085", "1.084,63", "+0,374", "1.085,00"], clase: "total" },
          ],
          nota: "La restricción se cumple **exactamente**, no aproximadamente: es la comprobación que no puede saltarse ningún procedimiento de desagregación. Nótese que el residuo de 2024 tiene signo contrario a los otros dos; con tres observaciones anuales y dos parámetros estimados, los residuos suman cero por construcción y su patrón dice poco.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Trimestre", y: "PIB" },
          dominio: { x: [1, 12], y: [200, 330] },
          marcasX: [1, 4, 8, 12],
          marcasY: [220, 250, 280, 310],
          series: [
            {
              nombre: "PIB trimestral estimado",
              color: "acento",
              etiquetaEn: [1.3, 322],
              puntos: [[1, 242.73], [2, 270.68], [3, 214.30], [4, 292.29], [5, 249.51], [6, 277.75], [7, 219.50], [8, 301.24], [9, 258.11], [10, 288.15], [11, 227.05], [12, 311.69]],
            },
            {
              nombre: "Reparto lineal del total anual",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [1.3, 309],
              puntos: [[1, 255], [2, 255], [3, 255], [4, 255], [5, 262], [6, 262], [7, 262], [8, 262], [9, 271.25], [10, 271.25], [11, 271.25], [12, 271.25]],
            },
          ],
          nota: "La línea discontinua es lo único que se sabría **sin indicador**: repartir cada total anual entre cuatro, una escalera plana que no dice nada del año. La línea continua es lo que aporta la desagregación temporal: un perfil intraanual completo, con su tercer trimestre hundido y su cuarto disparado. **Todo ese perfil procede del indicador**, no del dato anual, y por eso la calidad del indicador es la calidad del resultado.",
        },
        {
          tipo: "parrafos",
          items: [
            "Conviene mirar las tasas de la serie resultante: **+11,5 %, −20,8 %, +36,4 %** y así sucesivamente. Son enormes, y no hay error: la serie construida es una **serie bruta**, con toda la estacionalidad que tenía el indicador. Para publicar un crecimiento trimestral interpretable hay que ajustarla estacionalmente con el procedimiento de las fichas 15.02 a 15.05. La cadena completa de la contabilidad trimestral tiene, por tanto, dos fases de estimación encadenadas, y la incertidumbre de ambas se acumula.",
            "Una advertencia sobre el tamaño muestral que este ejemplo hace evidente. La regresión anual se ha estimado con **tres observaciones y dos parámetros**: queda un grado de libertad. Eso es insuficiente para cualquier propósito serio, y los residuos que se obtienen son mecánicamente pequeños porque la recta pasa casi por los tres puntos. En la práctica se usan veinte o treinta años de datos anuales, y la relación estimada tiene entonces sentido estadístico. El ejemplo es ilustrativo, no ejemplar, igual que la longitud de la serie en la ficha 15.02.",
            "Sobre la elección entre Chow-Lin, Fernández y Litterman: en este ejemplo se ha distribuido el residuo con el criterio de suavidad de Denton, que corresponde en la práctica al planteamiento de **Fernández** —error de paseo aleatorio—. Usar Chow-Lin con un parámetro autorregresivo estimado daría una distribución algo distinta del residuo, y Litterman una todavía más suave. Con residuos del orden de ocho décimas sobre un PIB de mil, las tres opciones son indistinguibles a efectos prácticos. **La discusión sobre el método solo importa cuando los residuos son grandes, que es justo cuando el indicador es malo y el problema es otro.**",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: elegir indicadores para una rama sin datos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El trabajo real de la desagregación temporal no está en el álgebra sino en la elección del indicador, y conviene verlo con un caso concreto: hay que producir la serie trimestral del valor añadido de una rama de servicios para la que solo existe un dato anual.",
            "El **primer criterio** es la relación económica, no la correlación. Un indicador debe estar ligado a la variable por un mecanismo, no por coincidencia estadística: la afiliación a la Seguridad Social de la rama, sus ventas declaradas, su consumo de insumos característicos. Una correlación alta sin mecanismo es peligrosa, porque se romperá exactamente cuando cambien las condiciones, que es cuando más falta hace que aguante.",
            "El **segundo** es la disponibilidad y la puntualidad. De poco sirve un indicador excelente que se publica con seis meses de retraso, porque la contabilidad trimestral tiene un calendario que cumplir. Esa tensión entre calidad y rapidez es la misma que la ficha 10.10 describía a propósito de las primeras estimaciones, y explica por qué se usan indicadores imperfectos pero rápidos, y por qué la serie se revisa cuando llegan los buenos.",
            "El **tercero** es la estabilidad de la relación en el tiempo. Un indicador que mantenía una relación estrecha con la variable durante quince años y se despega en los últimos tres es un problema serio: la regresión estimada sobre toda la historia dará un perfil equivocado en el tramo reciente, que es el que se publica. Comprobar la estabilidad de los coeficientes —contraste de cambio estructural, estimación recursiva— debería ser rutina antes de aceptar un indicador.",
            "Y una comprobación final que resume todo lo anterior: **comparar el perfil obtenido con el que sugieren otras fuentes**. Si la serie desagregada dice que la rama se hundió en un trimestre y ninguna otra estadística de coyuntura lo refleja, el problema está en el indicador o en la relación estimada, no en la economía. La desagregación temporal es especialmente traicionera porque **produce siempre un resultado plausible**: cumple la restricción anual y tiene un perfil creíble, aunque el perfil sea enteramente artefacto del indicador elegido.",
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
            { t: "Discutir el método antes que el indicador", d: "Chow-Lin, Fernández y Litterman dan resultados muy parecidos cuando el indicador es bueno, y ninguno salva un indicador malo. La calidad del resultado depende casi enteramente de la relación entre el indicador y la variable objetivo. Dedicar el esfuerzo a elegir entre variantes y no a validar el indicador es invertir el orden de importancia." },
            { t: "Elegir el indicador por correlación", d: "Una correlación alta sin mecanismo económico que la sostenga se romperá cuando cambien las condiciones, que es precisamente cuando hace falta que aguante. El criterio primero debe ser la relación económica; la correlación sirve para confirmarla, no para descubrirla." },
            { t: "Olvidar que el resultado es una serie bruta", d: "La serie desagregada hereda toda la estacionalidad del indicador: tasas trimestrales de +36 % y −21 % en el ejemplo. Publicar eso como crecimiento sería absurdo. Hay que ajustarla estacionalmente después, y la cadena completa acumula la incertidumbre de las dos fases." },
            { t: "Estimar la relación con pocos años", d: "Con tres observaciones anuales y dos parámetros queda un grado de libertad, y los residuos salen mecánicamente pequeños porque la recta pasa casi por los puntos. Eso da una falsa sensación de buen ajuste. En la práctica hacen falta veinte o treinta años para que la relación estimada signifique algo." },
            { t: "No comprobar la estabilidad de la relación", d: "Un indicador que se despega de la variable en los últimos años produce un perfil equivocado precisamente en el tramo que se publica, mientras la regresión sobre toda la historia sigue pareciendo buena. Contrastar cambio estructural y estimar de forma recursiva debería ser rutina antes de aceptar un indicador." },
            { t: "Aceptar el resultado porque parece plausible", d: "La desagregación temporal siempre produce un resultado plausible: cumple la restricción anual y tiene un perfil creíble, aunque el perfil sea artefacto del indicador. La verificación útil es contrastar el perfil obtenido con otras fuentes de coyuntura independientes." },
            { t: "Usar Chow-Lin en niveles con series no estacionarias", d: "Chow-Lin supone un error autorregresivo estacionario, y las magnitudes económicas en niveles rara vez lo son. Cuando el parámetro estimado se acerca a uno, el planteamiento apropiado es el de Fernández, que asume directamente un paseo aleatorio. Forzar el supuesto estacionario donde no se cumple produce estimaciones inestables." },
            { t: "Tratar la serie desagregada como una observación", d: "Es una estimación construida a partir de un total y un indicador, con dos fuentes de error: la relación estimada y la distribución del residuo. Se publica sin intervalo de confianza, igual que la serie ajustada, y merece la misma cautela: el perfil intraanual no se ha medido, se ha inferido." },
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
            "Esta ficha explica de dónde salen realmente las cuentas trimestrales, y la respuesta es menos observacional de lo que su presentación sugiere.",
          ],
          lista: [
            "En la mayoría de los países, buena parte de las **cuentas trimestrales** se produce por desagregación temporal de las anuales con indicadores de coyuntura, no por medición trimestral directa. El manual de cuentas trimestrales lo plantea como el método de referencia cuando no existe una fuente trimestral propia, que es la situación habitual en muchas ramas y en varias partidas del gasto.",
            "La calidad varía mucho entre partidas y eso rara vez se comunica. El **consumo final de los hogares (P.3)** de la ficha 12.08 cuenta con indicadores razonables —ventas al por menor, matriculaciones, pernoctaciones—. La **formación bruta de capital fijo (P.5)** de la ficha 13.08 es más difícil, y sus indicadores son más indirectos. La **variación de existencias**, que además cambia de signo, suele obtenerse por diferencia y arrastra buena parte del error del resto del cuadro.",
            "Cuando cada partida se desagrega con su propio indicador, las **identidades contables** de la ficha 13.02 no se cumplen automáticamente. El equilibrio por producto y la igualdad del PIB por los tres enfoques tienen que imponerse después, en una conciliación que es simultáneamente temporal y contable, tal como planteaba la ficha 15.09. La discrepancia se coloca donde el criterio del compilador decida, y ese reparto no siempre se documenta.",
            "El **enlace con las revisiones** es directo. Cuando llegan las cuentas anuales definitivas, cambia el total sobre el que se desagregó, y por tanto cambia toda la serie trimestral de ese año, aunque los indicadores no se hayan revisado. Es la misma revisión contable que introducía el benchmarking, y explica que las series trimestrales se revisen sistemáticamente cuando se publica el dato anual, sin que ningún indicador se haya corregido.",
            "Hay por último una consecuencia sobre la interpretación que conviene tener presente. Cuando se analiza el perfil trimestral de una rama y se concluye algo sobre su comportamiento intraanual, se está en realidad leyendo el **perfil del indicador**, reescalado. La afirmación económica se apoya en la afiliación o en el índice de producción, no en una medición del valor añadido trimestral, que no existe.",
          ],
          cierre:
            "La consecuencia práctica: el dato trimestral es una estimación en dos fases, desagregación y ajuste, y ninguna de las dos se observa. Conviene saber qué indicador sostiene la partida antes de construir una interpretación sobre su perfil.",
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
              q: "¿En qué se diferencia la desagregación temporal del benchmarking?",
              a: "En el punto de partida. En benchmarking existe una serie trimestral que se retoca para cuadrar con un total anual. En desagregación temporal no hay serie trimestral: hay que construirla a partir del total anual y de un indicador. El reparto de papeles es el mismo —el indicador aporta el perfil y el dato anual el nivel— y la restricción también, por lo que el instrumental de distribución del residuo es común a ambos problemas.",
            },
            {
              q: "Se estima PIB = −282,12 + 3,2542 · indicador y la preliminar suma 1.019,54 frente a un anual de 1.020. ¿Qué se hace con la diferencia?",
              a: "Se distribuye entre los cuatro trimestres del año con un criterio de suavidad, de modo que la corrección no dé escalones en el enlace de ejercicios. Es el mismo problema que resolvía Denton en la ficha anterior. Tras distribuirla, la suma de los cuatro trimestres debe coincidir exactamente con 1.020, y esa comprobación aritmética es obligatoria.",
            },
            {
              q: "La serie trimestral resultante tiene tasas de +36 % y −21 %. ¿Hay un error?",
              a: "No: es una serie bruta. Ha heredado toda la estacionalidad del indicador, que era un índice de producción industrial con su tercer trimestre hundido y su cuarto disparado. Para publicar un crecimiento trimestral interpretable hay que ajustarla estacionalmente después. La cadena completa de la contabilidad trimestral tiene dos fases de estimación encadenadas, y la desagregación precede al ajuste.",
            },
            {
              q: "¿Qué diferencia a Chow-Lin de Fernández, y cuándo importa?",
              a: "El supuesto sobre el término de error: Chow-Lin lo trata como autorregresivo estacionario y estima su parámetro; Fernández asume directamente un paseo aleatorio, que es el caso límite y resulta apropiado con magnitudes en niveles, rara vez estacionarias. Importa poco cuando el indicador es bueno, porque los residuos son pequeños y las tres variantes son indistinguibles. Importa cuando los residuos son grandes, que es justo cuando el problema real es el indicador.",
            },
            {
              q: "¿Por qué es traicionera la desagregación temporal?",
              a: "Porque siempre produce un resultado plausible: cumple la restricción anual y tiene un perfil creíble, aunque ese perfil sea enteramente artefacto del indicador elegido. Nada en el procedimiento avisa de que el indicador no representa bien la variable. La verificación útil es contrastar el perfil obtenido con otras fuentes de coyuntura independientes y comprobar que la relación estimada es estable en el tiempo.",
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
            { ref: "Chow y Lin, «Best Linear Unbiased Interpolation, Distribution and Extrapolation of Time Series by Related Series»", nota: "el planteamiento original de 1971, que sigue siendo el marco de referencia de toda la familia de métodos." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "el capítulo de desagregación temporal con las recomendaciones prácticas sobre elección y validación de indicadores; la referencia operativa." },
            { ref: "Fernández, «A Methodological Note on the Estimation of Time Series»", nota: "la variante con error de paseo aleatorio, apropiada para las magnitudes económicas en niveles que dominan en cuentas nacionales." },
            { ref: "INE, metodología de la Contabilidad Nacional Trimestral", nota: "qué indicadores concretos sostienen cada partida en el caso español, que es la información que permite juzgar la fiabilidad de un perfil trimestral." },
          ],
        },
      ],
    },
  ],
};
