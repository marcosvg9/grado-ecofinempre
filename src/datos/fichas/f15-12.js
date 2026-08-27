/* Ficha 15.12 — Predicción, retropredicción y nowcasting. */

export default {
  codigo: "15.12",
  titulo: "Predicción, retropredicción y nowcasting",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "5 h",
  nucleo:
    "Estimar el trimestre en curso antes de que existan sus datos, y reconstruir el pasado que nunca se midió. Son la misma operación en direcciones opuestas, y las dos aparecen dentro del ajuste estacional aunque casi nadie las vea.",
  requiere: "15.10 Desagregación temporal · 15.02 Pre-ajuste RegARIMA · 4.09 Series temporales",
  abre: "10.10 Cuentas trimestrales · 3.08 Política monetaria · 15.08 Política de revisiones",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las tres operaciones del título son la misma con distinto horizonte. **Predecir** es estimar periodos futuros; **retropredecir** es estimar periodos anteriores al inicio de la serie observada; y **nowcasting** —estimar el presente— es el caso intermedio y más peculiar: el periodo ya está ocurriendo o ha terminado, pero **su dato oficial todavía no existe**. Las tres usan el mismo aparato, y las dos primeras ya han aparecido en este bloque sin llamarse por su nombre.",
            "La predicción está incrustada en el propio ajuste estacional. Como explicaba la ficha 15.02, los filtros simétricos necesitan observaciones a ambos lados de cada punto, y en el extremo de la serie no las hay; el pre-ajuste extiende la serie con predicciones del modelo para poder aplicar el filtro completo. Esto significa que **el dato ajustado del último trimestre publicado incorpora una previsión sobre trimestres que aún no han ocurrido**. Es un hecho incómodo en una estadística que se presenta como registro de lo sucedido, y la razón principal de que ese dato sea el que más se revisa.",
            "La **retropredicción** cumple una función menos conocida y bastante útil. Los mismos filtros que se quedan cortos al final se quedan cortos al principio, así que la serie se extiende también hacia atrás. Pero además tiene un uso propio en estadística oficial: **reconstruir historia que no se midió**. Cuando cambia una clasificación de actividades o una base, las series nuevas empiezan en una fecha y la comparación histórica se rompe; retropredecir con la relación estimada entre la serie nueva y la antigua permite enlazar, que es lo que la ficha 10.08 trataba al hablar de enlace de series.",
            "El **nowcasting** es el que más ha cambiado en los últimos años, y su problema definitorio es el **borde irregular**. Los indicadores no se publican todos a la vez: la afiliación llega a los pocos días de cerrar el mes, el índice de producción industrial tarda semanas, las encuestas de opinión salen antes que las cuantitativas. En un momento dado se dispone de una matriz de datos con distinta profundidad en cada columna, y hay que estimar el trimestre con lo que haya. Los métodos que se usan responden a ese problema: **ecuaciones puente** que relacionan la variable trimestral con indicadores agregados, **modelos de frecuencia mixta** que trabajan con datos de periodicidad distinta sin agregarlos, y **modelos de factores** que resumen decenas de indicadores en unos pocos componentes comunes.",
            "Lo esencial del nowcasting no es el método sino el hecho de que **la información llega gota a gota y la incertidumbre baja de forma no lineal**. La intuición dice que al cerrar el primer mes de un trimestre se elimina un tercio de la incertidumbre; el ejemplo numérico muestra que se elimina bastante menos, porque la incertidumbre se mide en desviaciones típicas y estas van con la raíz cuadrada de la varianza. Es una corrección importante para calibrar cuánto vale de verdad un dato adelantado.",
            "Conviene además distinguir dos cosas que se confunden: el nowcast **no es una previsión menos ambiciosa**, es una estimación de algo que ya ha pasado y que se conocerá con certeza en pocas semanas. Eso permite evaluarlo con rigor —comparando con la primera estimación oficial— y también explica por qué su utilidad tiene fecha de caducidad: en cuanto se publica el dato, el nowcast deja de tener valor. Su razón de ser es cubrir el retraso de la estadística oficial, no sustituirla.",
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
            { nom: "Predicción", sub: "Hacia adelante.", cols: ["Periodos futuros · dentro del ajuste, extiende la serie"] },
            { nom: "Retropredicción", sub: "Hacia atrás.", cols: ["Periodos previos al inicio · enlace de series y bases"] },
            { nom: "Nowcasting", sub: "El presente sin dato.", cols: ["El periodo ya ocurrió; su estadística aún no existe"] },
            { nom: "Borde irregular", sub: "El problema definitorio.", cols: ["Cada indicador tiene distinta profundidad disponible"] },
            { nom: "Ecuación puente", sub: "El método más simple.", cols: ["Regresión del trimestral sobre indicadores agregados"] },
            { nom: "Frecuencia mixta", sub: "Sin agregar previamente.", cols: ["Combina datos mensuales y trimestrales directamente"] },
            { nom: "Modelos de factores", sub: "Cuando hay decenas de indicadores.", cols: ["Resumen en pocos componentes comunes"] },
            { nom: "Cómo cae la incertidumbre", sub: "No linealmente.", cols: ["La desviación típica va con la raíz de la varianza"] },
            { nom: "Evaluación", sub: "Lo que lo hace verificable.", cols: ["Comparar con la primera estimación oficial publicada"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: cuánto vale cerrar un mes",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Considérese el caso más simple posible: un trimestre es la suma de tres meses cuyas desviaciones respecto a lo esperado son independientes y tienen la misma varianza. Al empezar el trimestre no se sabe nada de los tres, y la incertidumbre sobre el total es la que corresponde a tres meses. La pregunta es cuánto se reduce al ir conociendo cada mes.",
            "La respuesta contradice la intuición. Al cerrar el primer mes queda por conocer dos tercios de la varianza, pero la incertidumbre no se mide en varianzas sino en **desviaciones típicas**, que son su raíz cuadrada. Pasar de tres a dos unidades de varianza es pasar de 1,732 a 1,414 en desviación típica: una reducción del **18,4 %**, no del 33 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Meses conocidos", "Varianza restante", "Desviación típica", "% de la incertidumbre inicial", "Reducción acumulada"],
          filas: [
            ["0", "$3\\sigma^2$", "1,732 $\\sigma$", "100,0 %", "—"],
            ["1", "$2\\sigma^2$", "1,414 $\\sigma$", "81,6 %", "18,4 %"],
            ["2", "$1\\sigma^2$", "1,000 $\\sigma$", "57,7 %", "42,3 %"],
            { celdas: ["3", "0", "0", "0,0 %", "100 %"], clase: "total" },
          ],
          nota: "La reducción es **acelerada, no constante**: el primer mes aporta 18 puntos, el segundo 24 y el tercero los 58 restantes. Dicho de otro modo, **la mitad de la información del trimestre llega en su último tercio**. Es una razón de peso para no sobrevalorar los nowcasts publicados a principios de trimestre, y para revisarlos con cada dato nuevo en lugar de fijarlos.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Meses del trimestre ya conocidos", y: "% de la incertidumbre inicial" },
          dominio: { x: [0, 3], y: [0, 108] },
          marcasX: [0, 1, 2, 3],
          marcasY: [0, 25, 50, 75, 100],
          series: [
            {
              nombre: "Observación perfecta del mes",
              color: "acento",
              etiquetaEn: [0.12, 46],
              puntos: [[0, 100], [1, 81.6], [2, 57.7], [3, 0]],
            },
            {
              nombre: "Indicador con ρ = 0,8",
              color: "n2",
              etiquetaEn: [0.12, 31],
              puntos: [[0, 100], [1, 88.7], [2, 75.7], [3, 60]],
            },
            {
              nombre: "Indicador con ρ = 0,6",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [0.12, 16],
              puntos: [[0, 100], [1, 93.8], [2, 87.2], [3, 80]],
            },
          ],
          nota: "La línea superior es lo que se consigue **observando de verdad** cada mes: llega a cero cuando el trimestre cierra. Las otras dos son lo que se consigue con **indicadores correlacionados** con la variable, que es la situación real: con una correlación de 0,8, notablemente alta para un indicador de coyuntura, al terminar el trimestre **queda todavía el 60 % de la incertidumbre inicial**. Con 0,6, el 80 %.",
        },
        {
          tipo: "parrafos",
          items: [
            "Esa es la lección central del gráfico y conviene enunciarla sin rodeos: **un indicador, por bueno que sea, no sustituye al dato**. La reducción de varianza que aporta observar un indicador correlacionado es proporcional al cuadrado de su correlación, así que con $\\rho$ = 0,8 se elimina el 64 % de la varianza de cada mes y queda el 36 %. Acumulado sobre los tres meses, la desviación típica final es el 60 % de la inicial. El nowcast mejora mucho respecto a no saber nada, y sigue siendo una estimación con error apreciable cuando la estadística oficial va a publicarse.",
            "De ahí se sigue la forma correcta de usarlos. Un nowcast es útil para **acotar el rango** de lo que va a publicarse y para detectar giros antes que la estadística oficial, no para anunciar una cifra. Los bancos centrales y los servicios de estudios que los publican suelen acompañarlos de intervalos, y esa es la práctica sensata: el número puntual sin su incertidumbre da una falsa impresión de precisión que el propio método desmiente.",
            "Sobre la evaluación, el nowcasting tiene una ventaja metodológica sobre la predicción a largo plazo: **se puede validar deprisa y sin ambigüedad**, comparando con la primera estimación oficial pocas semanas después. Eso permite acumular historial y calibrar honestamente cuánto vale cada modelo, algo que con previsiones a dos años es prácticamente imposible. La comparación debe hacerse siempre contra la **primera** estimación publicada y no contra la serie revisada, por la misma razón que la ficha 15.08 daba: evaluar con datos que no existían es juzgar por información que no se tenía.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: la retropredicción que reconstruye una serie",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El uso más valioso de la retropredicción en estadística oficial no es extender la serie para que los filtros funcionen, sino **reconstruir historia que no existe**. El caso típico: un cambio de clasificación de actividades deja las series nuevas empezando en una fecha reciente, y la comparación con décadas anteriores se rompe justo cuando alguien quiere estudiar un ciclo largo.",
            "El procedimiento tiene la misma estructura que la desagregación temporal de la ficha 15.10, con los papeles cambiados. Existe un **tramo solapado** en el que ambas series conviven, y ahí se estima la relación entre la nueva y la antigua. Con esa relación se retropredice la nueva hacia atrás usando la antigua como indicador. El resultado es una serie larga y homogénea, y conviene ser explícito sobre su naturaleza: **el tramo reconstruido no se midió con la definición nueva, se ha inferido**.",
            "Los riesgos son los previsibles y conviene enumerarlos. Si el solape es **corto**, la relación se estima con pocos datos y la reconstrucción es frágil. Si la relación **no es estable** —muy probable, porque una clasificación se cambia precisamente cuando la vieja ha dejado de describir bien la economía—, extrapolarla décadas atrás propaga un supuesto muy fuerte. Y si el cambio afecta de forma desigual a las ramas, aplicar una relación agregada uniforme distorsiona la composición aunque el total parezca razonable.",
            "Hay una tentación adicional que conviene resistir: **usar la serie reconstruida para contrastar hipótesis sobre el periodo reconstruido**. Si la historia anterior al solape se ha generado con una relación estimada en el solape, cualquier regularidad que se encuentre en ese tramo puede ser un artefacto del procedimiento. La serie enlazada sirve para dar contexto y para leer tendencias largas, no como fuente de evidencia sobre el periodo que no se observó.",
            "El paralelismo con el nowcasting es exacto y por eso ambos temas están en la misma ficha. En un caso se infiere el presente que aún no se ha medido a partir de indicadores correlacionados; en el otro, el pasado que nunca se midió a partir de una serie correlacionada. **Las dos operaciones producen números que parecen observaciones y no lo son**, y las dos exigen la misma disciplina: documentar la relación empleada, publicar la incertidumbre y no confundir lo inferido con lo medido.",
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
            { t: "Suponer que cerrar un mes elimina un tercio de la incertidumbre", d: "Elimina un tercio de la varianza, no de la incertidumbre. Como esta se mide en desviaciones típicas, que son la raíz de la varianza, la reducción real es del 18,4 %. La información llega de forma acelerada: la mitad del trimestre se resuelve en su último tercio, y por eso los nowcasts de principios de trimestre valen bastante menos de lo que sugiere el calendario." },
            { t: "Tratar un indicador como si fuera el dato", d: "La reducción de varianza que aporta un indicador es proporcional al cuadrado de su correlación. Con $\\rho$ = 0,8, alta para coyuntura, al cerrar el trimestre queda todavía el 60 % de la incertidumbre inicial. Un indicador acota el rango de lo que se publicará; no lo determina." },
            { t: "Publicar un nowcast sin intervalo", d: "El número puntual da una impresión de precisión que el propio método desmiente. La práctica sensata, y la que siguen los bancos centrales que los publican, es acompañarlo de un intervalo, porque el uso legítimo es acotar el rango y detectar giros, no anunciar una cifra." },
            { t: "Evaluar el nowcast contra la serie revisada", d: "Debe compararse con la primera estimación oficial publicada, que es lo que el nowcast intentaba anticipar. Evaluarlo contra la serie revisada años después es juzgarlo por información que no existía cuando se hizo, el mismo error que la política de revisiones advierte al valorar decisiones pasadas." },
            { t: "Ignorar que el dato ajustado ya contiene predicciones", d: "El valor ajustado del último trimestre se calcula aplicando filtros sobre una serie extendida con previsiones del modelo. No es un artificio del analista: está dentro del procedimiento oficial, y es la principal razón de que ese dato se revise cuando llegan observaciones reales." },
            { t: "Usar la serie retropredicha como evidencia sobre el periodo reconstruido", d: "Si ese tramo se generó con una relación estimada en el solape, cualquier regularidad que se encuentre puede ser artefacto del procedimiento. La serie enlazada sirve para dar contexto y leer tendencias largas, no como fuente de evidencia sobre lo que no se observó." },
            { t: "Retropredecir con un solape corto o una relación inestable", d: "Con pocos datos de solape la relación se estima mal, y una clasificación suele cambiarse precisamente porque la antigua había dejado de describir bien la economía, lo que hace poco creíble extrapolar la relación décadas atrás. Ambas cosas hay que comprobarlas y documentarlas antes de publicar el enlace." },
            { t: "Confundir nowcasting con previsión", d: "El nowcast estima algo que ya ha ocurrido y se conocerá con certeza en semanas; una previsión estima algo que no ha ocurrido. Esa diferencia hace que el nowcast sea verificable deprisa y sin ambigüedad, y también que su utilidad caduque: en cuanto se publica el dato oficial, deja de tener valor." },
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
            "Las tres operaciones están dentro de la producción estadística oficial, no fuera de ella, aunque el resultado se presente como si todo fuera medición.",
          ],
          lista: [
            "La **primera estimación** de las cuentas trimestrales, que se publica a los treinta días del cierre, es en buena medida un ejercicio de nowcasting institucionalizado: se elabora con indicadores incompletos y se sustituye después por estimaciones con fuentes más completas. La ficha 10.10 recorría ese proceso de revisiones sucesivas, y esta explica de dónde procede la incertidumbre de ese primer dato.",
            "La **desagregación temporal** de la ficha 15.10 y el nowcasting comparten aparato. En ambos se estima una variable no observada a partir de indicadores correlacionados con ella; la diferencia es que la desagregación dispone además del total anual como restricción, y el nowcast no tiene ancla ninguna. Esa ausencia de restricción es lo que hace al nowcast más incierto y a la vez más rápido.",
            "Las **predicciones incorporadas al ajuste** afectan a magnitudes con consecuencias jurídicas. El dato de déficit que alimenta el procedimiento de déficit excesivo de la ficha 3.11 procede de series que en su extremo dependen de previsiones del modelo. No es un problema de rigor —el procedimiento es el recomendado— pero sí una razón más para que las revisiones se comuniquen con precisión.",
            "El **enlace de series** por retropredicción es la operación que sostiene cualquier análisis histórico con datos de contabilidad nacional. Las series largas de PIB que se usan para estudiar ciclos o convergencia, como las que emplea la ficha 11.10, combinan tramos medidos con definiciones distintas y enlazados con relaciones estimadas. Es legítimo y es lo único disponible, y conviene saberlo antes de leer un gráfico de dos siglos.",
            "Por último, una advertencia sobre el **uso externo**. Los nowcasts de instituciones privadas y de bancos centrales circulan a menudo como si fueran estimaciones oficiales anticipadas, y no lo son: no siguen la metodología del SEC ni están sujetos a sus requisitos de coherencia. Comparar un nowcast con el dato oficial posterior es útil; tratarlos como la misma magnitud publicada dos veces, no.",
          ],
          cierre:
            "La consecuencia práctica: en el extremo de cualquier serie oficial hay inferencia, no solo medición. La diferencia entre un nowcast externo y el dato oficial más reciente es de grado y de método, no de naturaleza.",
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
              q: "Un trimestre es la suma de tres meses independientes de igual varianza. Al cerrar el primero, ¿cuánto baja la incertidumbre?",
              a: "Un 18,4 %, no un 33 %. Queda por conocer dos tercios de la varianza, pero la incertidumbre se mide en desviaciones típicas, que son su raíz: se pasa de 1,732 $\\sigma$ a 1,414 $\\sigma$. Al cerrar el segundo mes la reducción acumulada es del 42,3 %, y el tercer mes aporta el 58 % restante. La información llega de forma acelerada.",
            },
            {
              q: "Un indicador tiene correlación 0,8 con la variable objetivo. ¿Cuánta incertidumbre queda al terminar el trimestre?",
              a: "El 60 % de la inicial. La reducción de varianza que aporta un indicador es proporcional al cuadrado de su correlación, así que con $\\rho$ = 0,8 se elimina el 64 % de la varianza de cada mes y queda el 36 %. Acumulado sobre los tres meses, la desviación típica final es el 60 % de la de partida. Un indicador acota el rango de lo que se publicará; no sustituye al dato.",
            },
            {
              q: "¿Por qué el dato ajustado del último trimestre incorpora una predicción?",
              a: "Porque los filtros simétricos necesitan observaciones a ambos lados de cada punto y en el extremo de la serie no existen. El pre-ajuste extiende la serie con previsiones del modelo para poder aplicar el filtro completo en lugar de uno asimétrico, que sería peor. La consecuencia es que ese dato depende de una previsión aún no confirmada, y por eso es el que más se revisa.",
            },
            {
              q: "¿Contra qué debe evaluarse un nowcast, y por qué?",
              a: "Contra la primera estimación oficial publicada, que es lo que intentaba anticipar. Compararlo con la serie revisada años después sería juzgarlo por información que no existía cuando se hizo. Esta posibilidad de validación rápida y sin ambigüedad es una ventaja metodológica del nowcasting sobre la previsión a largo plazo, que tarda años en poder evaluarse.",
            },
            {
              q: "¿Qué precaución exige una serie histórica reconstruida por retropredicción?",
              a: "No usarla como evidencia sobre el periodo reconstruido. Si ese tramo se generó aplicando hacia atrás una relación estimada en el periodo de solape, cualquier regularidad que se encuentre puede ser artefacto del procedimiento, sobre todo si el solape fue corto o la relación no era estable. Sirve para dar contexto y leer tendencias largas, no como fuente sobre lo que no se observó.",
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
            { ref: "Bańbura, Giannone y Reichlin, «Nowcasting»", nota: "la revisión de referencia del problema del borde irregular y de los modelos de factores aplicados a la estimación del presente." },
            { ref: "Giannone, Reichlin y Small, «Nowcasting: The Real-Time Informational Content of Macroeconomic Data»", nota: "cómo se cuantifica la aportación de cada publicación estadística a la reducción de la incertidumbre a lo largo del trimestre." },
            { ref: "Banco de España, documentos sobre seguimiento en tiempo real de la economía española", nota: "la aplicación práctica al caso español, con los indicadores empleados y la evaluación del historial de aciertos." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "el tratamiento del enlace de series y de la reconstrucción histórica por retropredicción, con las cautelas metodológicas." },
          ],
        },
      ],
    },
  ],
};
