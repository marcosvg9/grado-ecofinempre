/* Ficha 15.01 — El flujo del ajuste estacional: de la serie bruta a la publicada. */

export default {
  codigo: "15.01",
  titulo: "El flujo del ajuste estacional: de la serie bruta a la publicada",
  nivel: 3,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "Una serie ajustada no sale de pulsar un botón. Atraviesa pre-ajuste, descomposición, diagnóstico y conciliación, y en cada etapa alguien ha tomado una decisión que el dato final no muestra. Saber cuáles son esas decisiones es la diferencia entre leer un dato y creérselo.",
  requiere: "4.10 Desestacionalización · 4.09 Series temporales · 10.10 Cuentas trimestrales",
  abre: "15.02 Pre-ajuste RegARIMA · 15.05 X-11 frente a SEATS · 15.06 JDemetra+",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 4.10 explicó **qué** hace un filtro de desestacionalización: separar una serie en tendencia-ciclo, estacionalidad e irregular. Esta ficha, y el bloque que abre, tratan de **cómo se hace realmente** en un instituto de estadística, que es un procedimiento largo, reglado y lleno de decisiones. La distancia entre ambas cosas es grande: quien solo conoce la descomposición teórica suele suponer que el ajuste es una operación mecánica y única, cuando en la práctica dos analistas competentes pueden producir series distintas a partir del mismo dato bruto.",
            "El flujo tiene cuatro etapas y conviene fijarlas desde el principio. La primera es el **pre-ajuste**: se estima un modelo de regresión con errores ARIMA que limpia la serie de efectos de calendario y de valores atípicos, y de paso la extiende hacia atrás y hacia adelante con predicciones. Esa extensión no es un adorno; los filtros de la etapa siguiente necesitan observaciones a ambos lados de cada punto, y sin previsiones los extremos de la serie quedarían sin ajustar. Es la ficha 15.02.",
            "La segunda es la **descomposición** propiamente dicha, donde se separan los componentes. Aquí conviven dos familias que el bloque compara en la ficha 15.05: los métodos de **promedios móviles** de la tradición X-11, con décadas de práctica acumulada y filtros elegidos empíricamente; y los métodos **basados en modelos** de la tradición SEATS, que derivan la descomposición del modelo ARIMA ya estimado en el pre-ajuste. Producen resultados parecidos casi siempre y distintos justo cuando la serie es difícil, que es cuando importa.",
            "La tercera es el **diagnóstico**. Un ajuste puede ser malo sin parecerlo, porque el resultado siempre sale suave y creíble en el gráfico: los filtros suavizan por construcción. Por eso existen contrastes de **estacionalidad residual** —¿queda estacionalidad en lo que debería estar limpio?—, medidas de estabilidad y análisis de revisiones. La ficha 15.07 los recorre. Y la cuarta es la **conciliación**: la serie ajustada normalmente no cuadra con los totales anuales ni con la suma de sus componentes, y hay que decidir qué se sacrifica. Son las fichas 15.09 y 15.11.",
            "Sobre todo ello se superpone una decisión que no es técnica sino de política estadística: **cuánto se permite que cambie el pasado**. Cada trimestre nuevo modifica los factores estacionales estimados y, con ellos, los datos ya publicados. Un instituto puede reestimarlo todo cada vez, congelar los factores durante un año o adoptar esquemas intermedios. Cada opción cambia el perfil de revisiones que verá el usuario, y ninguna es neutral: es el tema de la ficha 15.08, y conecta directamente con lo que la ficha 10.10 explicaba sobre datos en tiempo real.",
            "Merece la pena decir por qué esto tiene consecuencias prácticas y no solo metodológicas. **La política económica se decide sobre series ajustadas.** El titular de una décima de PIB, la lectura de si una economía ha entrado en recesión, la reacción de un banco central: todo se apoya en una serie que es el resultado de este procedimiento, con sus supuestos y su incertidumbre, y que se publica sin intervalo de confianza. La cifra ajustada tiene apariencia de dato observado y es en realidad una **estimación**.",
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
            { nom: "Descomposición multiplicativa", sub: "La habitual cuando la amplitud crece con el nivel.", cols: ["Xt = TCt · St · It"] },
            { nom: "Descomposición aditiva", sub: "Cuando la amplitud es constante.", cols: ["Xt = TCt + St + It"] },
            { nom: "Etapa 1 · pre-ajuste", sub: "Limpia y extiende la serie.", cols: ["RegARIMA: calendario, atípicos y predicciones"] },
            { nom: "Etapa 2 · descomposición", sub: "Separa los componentes.", cols: ["X-11 (promedios móviles) o SEATS (basado en modelo)"] },
            { nom: "Etapa 3 · diagnóstico", sub: "Comprueba que el resultado vale.", cols: ["Estacionalidad residual, estabilidad, revisiones"] },
            { nom: "Etapa 4 · conciliación", sub: "Cuadra con totales y agregados.", cols: ["Benchmarking anual y coherencia entre componentes"] },
            { nom: "Serie ajustada", sub: "Lo que se publica.", cols: ["Ajustada $= \\dfrac{\\text{bruta}}{\\text{factor estacional}}$ (caso multiplicativo)"] },
            { nom: "Normalización de factores", sub: "Condición que deben cumplir.", cols: ["Los factores de un año promedian 1 (o suman 0 si es aditiva)"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: doce trimestres, de principio a fin",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un índice de producción industrial con doce trimestres, de 2023 a 2025. **Esta serie recorre todo el bloque**: las fichas siguientes volverán sobre ella para corregirle el calendario, detectarle atípicos, descomponerla por dos métodos distintos y conciliarla con sus totales anuales. Aquí se hace la versión más simple posible del procedimiento, la razón a media móvil, que es el esqueleto de lo que hace X-11.",
            "El primer paso es estimar la **tendencia** con una media móvil centrada de cuatro términos. Para datos trimestrales hace falta la versión 2×4 —medio peso a los extremos— porque cuatro es par y una media simple quedaría descentrada entre dos trimestres. El segundo paso es dividir la serie bruta por esa tendencia: el cociente recoge estacionalidad e irregular. El tercero es **promediar esos cocientes por trimestre**, lo que cancela el componente irregular y deja el estacional. El cuarto es normalizarlos para que promedien 1.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Trimestre", "Factor estacional", "Interpretación"],
          filas: [
            ["T1", "0,9711", "−2,9 % respecto a la tendencia"],
            ["T2", "1,0520", "+5,2 %"],
            ["T3", "0,8709", "−12,9 %: el trimestre de las vacaciones"],
            { celdas: ["T4", "1,1060", "+10,6 %: campaña de fin de año"], clase: "total" },
          ],
          nota: "Los cuatro factores **promedian exactamente 1**, que es la condición de normalización: el ajuste redistribuye dentro del año, no añade ni quita nivel. Nótese la magnitud de lo que se está corrigiendo: entre el trimestre más flojo y el más fuerte hay **24 puntos porcentuales** de pura estacionalidad, más de veinte veces el crecimiento subyacente anual.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Trimestre", y: "Índice" },
          dominio: { x: [1, 12], y: [84, 126] },
          marcasX: [1, 4, 8, 12],
          marcasY: [90, 100, 110, 120],
          series: [
            {
              nombre: "Serie bruta",
              color: "alerta",
              etiquetaEn: [1.3, 122],
              puntos: [[1, 96.2], [2, 104.8], [3, 87.5], [4, 111.5], [5, 98.4], [6, 107.1], [7, 89.2], [8, 114.3], [9, 101.0], [10, 110.2], [11, 91.4], [12, 117.4]],
            },
            {
              nombre: "Serie ajustada",
              color: "acento",
              etiquetaEn: [5.4, 122],
              puntos: [[1, 99.06], [2, 99.62], [3, 100.47], [4, 100.82], [5, 101.33], [6, 101.81], [7, 102.42], [8, 103.35], [9, 104.0], [10, 104.75], [11, 104.95], [12, 106.15]],
            },
            {
              nombre: "Tendencia estimada",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [8.9, 122],
              puntos: [[3, 100.28], [4, 100.84], [5, 101.34], [6, 101.90], [7, 102.58], [8, 103.29], [9, 103.95], [10, 104.61]],
            },
          ],
          nota: "La serie bruta sube y baja **más de veinticinco puntos cada año** sin que ocurra nada económico: es el mismo patrón repitiéndose. La ajustada revela lo que había debajo, una subida sostenida y modesta. La tendencia estimada **no llega a los extremos** porque la media móvil centrada necesita dos trimestres a cada lado, y ese es exactamente el problema que el pre-ajuste resuelve extendiendo la serie con predicciones.",
        },
        {
          tipo: "tabla",
          cabecera: ["", "T2 sobre T1", "T3 sobre T2", "T4 sobre T3", "T1 siguiente sobre T4"],
          filas: [
            ["Tasa con serie bruta", "+8,9 %", "−16,5 %", "+27,4 %", "−11,7 %"],
            { celdas: ["Tasa con serie ajustada", "+0,6 %", "+0,9 %", "+0,3 %", "+0,5 %"], clase: "total" },
          ],
          nota: "Las dos filas describen **la misma economía**. La primera es ininteligible: nadie puede decir si la economía va bien o mal viendo saltos de 27 puntos alternando con caídas de 16. La segunda dice algo: crece en torno a medio punto por trimestre, de forma estable. **Toda la información útil estaba tapada por el calendario del año.**",
        },
        {
          tipo: "parrafos",
          items: [
            "Queda un cabo suelto que el bloque tardará ocho fichas en atar. Los totales anuales de la serie bruta son **400,0**, **409,0** y **420,0**. Los de la serie ajustada son **399,97**, **408,90** y **419,85**. No coinciden. La diferencia es pequeña —una décima como mucho— y perfectamente esperable, porque los factores estacionales se estiman con datos de todos los años y no se ajustan a cada uno, pero **es inaceptable en contabilidad nacional**: si la serie trimestral ajustada no suma el dato anual publicado, hay dos cifras oficiales incompatibles del mismo periodo.",
            "Resolverlo se llama **benchmarking**, y no consiste en repartir la diferencia a partes iguales, porque eso introduciría escalones artificiales en los saltos de año. La ficha 15.09 lo plantea como lo que es: un problema de optimización que busca cuadrar el total alterando lo menos posible el perfil de la serie. El hecho de que un procedimiento tan cuidadoso deje un residuo que hay que repartir a mano dice bastante sobre la naturaleza del oficio.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué dos institutos publican cifras distintas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un mismo país puede tener dos estimaciones oficiales del mismo trimestre que no coinciden, y no por error de nadie. Ocurre porque el ajuste estacional acumula decisiones y basta con que dos de ellas difieran para que el resultado se separe unas décimas. Recorrer cuáles son esas decisiones es la mejor forma de entender el procedimiento.",
            "La primera es el **método de descomposición**. Un instituto que use X-13 con filtros de promedios móviles y otro que use TRAMO-SEATS obtendrán series parecidas pero no idénticas, y las diferencias se concentran en los extremos de la serie, que es precisamente el dato de coyuntura que interesa. La segunda es el **tratamiento de los atípicos**: si un analista clasifica un episodio como escalón permanente y otro como impulso transitorio, la serie ajustada recordará el episodio para siempre en un caso y lo olvidará en el otro. La ficha 15.04 muestra que esa clasificación es a menudo una decisión de juicio y no un resultado del contraste.",
            "La tercera es la **corrección de calendario**. Cuántos regresores se incluyen —un solo indicador de días laborables o seis coeficientes de día de la semana—, si se corrige la Semana Santa y con qué ventana, si se trata el año bisiesto por separado. Estas opciones mueven décimas, y en un trimestre con Semana Santa cambiando de mes pueden mover más. Es la ficha 15.03.",
            "La cuarta, y la que más separa a los institutos, es la **agregación directa frente a la indirecta**. Ajustar el PIB total, o ajustar cada rama por separado y sumarlas. Los dos resultados difieren siempre, porque el ajuste no es una operación lineal, y hay argumentos sólidos en ambas direcciones: la directa da la mejor estimación del agregado, la indirecta garantiza que las partes sumen el total. Nadie puede tener las dos cosas. La ficha 15.11 desarrolla ese dilema.",
            "La conclusión práctica no es descreída sino operativa. Ante una discrepancia entre dos cifras ajustadas, la pregunta útil no es cuál está bien, sino **en qué punto del flujo se han separado**. Casi siempre se localiza, y casi siempre resulta que ambas son defendibles bajo su propio conjunto de decisiones. Eso también significa que comparar la serie ajustada de un país con la de otro exige comprobar que se han ajustado igual, y por eso Eurostat publica directrices comunes y recomienda una herramienta común, que es la que trata la ficha 15.06.",
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
            { t: "Tratar la serie ajustada como un dato observado", d: "Es una estimación producida por un procedimiento con supuestos, y se publica sin intervalo de confianza, lo que le da una apariencia de precisión que no tiene. Los valores de los últimos trimestres son además los más inciertos, porque dependen de predicciones y se revisarán cuando lleguen datos nuevos." },
            { t: "Creer que el ajuste es una operación única y mecánica", d: "Dos analistas competentes pueden producir series distintas del mismo dato bruto, según el método de descomposición, el tratamiento de atípicos, los regresores de calendario y la decisión de agregación. Ninguna es incorrecta: son decisiones distintas dentro de un margen defendible." },
            { t: "Comparar tasas de series bruta y ajustada", d: "Una tasa intertrimestral de la serie bruta y otra de la ajustada miden cosas distintas y sus magnitudes no son comparables: en el ejemplo, +27,4 % frente a +0,3 % para el mismo trimestre. Mezclarlas en una misma frase, o comparar la interanual bruta con la intertrimestral ajustada, es un error frecuente en prensa." },
            { t: "Suponer que el ajuste elimina el calendario", d: "Son dos correcciones distintas. La estacionalidad es el patrón que se repite cada año; los efectos de calendario dependen de cuántos días laborables tuvo el periodo concreto y de dónde cayó la Semana Santa, y varían de un año a otro. Una serie puede estar ajustada de estacionalidad y seguir contaminada por el calendario si no se corrigió en el pre-ajuste." },
            { t: "Olvidar que los factores estacionales cambian", d: "No son constantes: se reestiman con cada dato nuevo, y con ellos cambia el pasado ya publicado. Quien guarde una serie ajustada descargada hace un año y la compare con la actual encontrará diferencias que no proceden de revisiones de los datos brutos, sino del propio procedimiento de ajuste." },
            { t: "Pedirle al ajuste que separe el ciclo de la tendencia", d: "La descomposición estándar produce un componente conjunto de tendencia-ciclo, no dos separados. Separar tendencia de ciclo exige supuestos adicionales y bastante más discutibles, y ninguno de los métodos habituales de ajuste estacional lo hace por sí solo." },
            { t: "Ajustar series que no tienen estacionalidad", d: "Aplicar el procedimiento a una serie sin patrón estacional identificable no la deja igual: introduce ruido y puede crear estacionalidad espuria donde no la había. Por eso el flujo empieza siempre por un contraste de presencia de estacionalidad, y si no la hay, la serie se publica sin ajustar." },
            { t: "Suponer que la suma de series ajustadas es la serie ajustada de la suma", d: "No lo es, porque el ajuste no es lineal. Ajustar cada componente y sumarlos da un resultado distinto de ajustar el agregado directamente, y la diferencia no es un error sino una consecuencia del método. Elegir entre ambas opciones es una decisión explícita que todo instituto tiene que tomar." },
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
            "El ajuste estacional no es un añadido opcional a las cuentas trimestrales: forma parte de su producción, y el sistema le impone condiciones que no son estadísticas sino contables.",
          ],
          lista: [
            "Las **cuentas trimestrales** son las mismas cuentas del SEC de la ficha 12.02, con la misma secuencia de operaciones, pero con periodicidad trimestral. El reglamento europeo exige publicarlas ajustadas de estacionalidad y de efectos de calendario, y esa exigencia convierte el procedimiento de este bloque en parte del proceso estadístico oficial, sujeto a auditoría metodológica.",
            "La condición más exigente es la **coherencia con las cuentas anuales**. Las anuales son el dato de referencia, elaborado con fuentes más completas; las trimestrales deben sumar ese total. Como el ajuste estacional no lo respeta por sí solo —en el ejemplo la serie ajustada suma 399,97 frente a los 400,0 de la bruta—, hace falta la etapa de benchmarking de la ficha 15.09. El orden importa: manda el dato anual.",
            "El segundo requisito es la **coherencia contable interna**. En cuentas nacionales las identidades tienen que cumplirse también en los datos ajustados: el PIB por el gasto debe seguir siendo la suma de sus componentes, y la ficha 13.02 recuerda que el equilibrio por producto no admite un residuo. Pero el ajuste estacional aplicado por separado a cada componente rompe la identidad, y esa tensión es la que obliga a decidir entre agregación directa e indirecta en la ficha 15.11.",
            "Buena parte de las series trimestrales **no se observan directamente**: se construyen distribuyendo un total anual conocido con la ayuda de indicadores de coyuntura que sí se miden con frecuencia trimestral. Esa operación es la desagregación temporal de la ficha 15.10, y es la columna vertebral de la contabilidad trimestral en la mayoría de los países. El dato trimestral es, en ese sentido, tanto una estimación como el ajuste que se le aplica después.",
            "Conviene ligar todo esto con la ficha 10.08: cuando se trabaja con volúmenes encadenados, la **no aditividad** de los índices encadenados se suma a la no linealidad del ajuste estacional. Son dos fuentes independientes de discrepancia entre el agregado y la suma de sus partes, y conviene no confundirlas al diagnosticar por qué un cuadro no cuadra.",
          ],
          cierre:
            "La consecuencia práctica: en contabilidad nacional el ajuste estacional nunca es el último paso. Siempre viene después una conciliación, porque el sistema exige identidades que el procedimiento estadístico no respeta por sí mismo.",
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
              q: "¿Por qué para datos trimestrales se usa una media móvil 2×4 y no una simple de cuatro términos?",
              a: "Porque cuatro es par y una media simple de cuatro trimestres queda centrada entre dos periodos, no sobre uno. La versión 2×4 da medio peso a los dos extremos y peso completo a los tres centrales, con lo que el resultado queda centrado sobre un trimestre concreto. Es el mismo motivo por el que con datos mensuales se usa una 2×12.",
            },
            {
              q: "Los factores estacionales estimados son 0,9711 · 1,0520 · 0,8709 · 1,1060. ¿Qué condición cumplen y por qué importa?",
              a: "Promedian exactamente 1, que es la condición de normalización en una descomposición multiplicativa. Importa porque garantiza que el ajuste solo redistribuye actividad dentro del año sin añadir ni quitar nivel: el total anual de la serie ajustada queda muy próximo al de la bruta. Si los factores no estuvieran normalizados, el ajuste desplazaría el nivel de la serie.",
            },
            {
              q: "La serie bruta crece un 27,4 % en un trimestre y la ajustada un 0,3 %. ¿Cuál es correcta?",
              a: "Las dos, porque miden cosas distintas. La bruta describe lo que efectivamente ocurrió, incluida la campaña de fin de año que ocurre todos los años. La ajustada describe cuánto de ese movimiento excede a lo que era esperable por el calendario, y es la única que permite comparar trimestres consecutivos. Para la interanual la bruta sí es informativa, porque compara el mismo trimestre de dos años.",
            },
            {
              q: "¿Por qué la tendencia estimada por media móvil no cubre los primeros ni los últimos trimestres?",
              a: "Porque una media móvil centrada de cuatro términos necesita dos observaciones a cada lado, así que pierde dos puntos al principio y dos al final. Como el dato interesante es justamente el último, el pre-ajuste resuelve el problema estimando un modelo ARIMA y extendiendo la serie con predicciones, de modo que los filtros dispongan de observaciones a ambos lados incluso en el extremo.",
            },
            {
              q: "La serie ajustada suma 399,97 en el año y la bruta 400,0. ¿Es un error de cálculo?",
              a: "No: es el comportamiento normal del procedimiento. Los factores estacionales se estiman con información de todos los años y no se adaptan exactamente a cada uno, así que la suma anual de la serie ajustada no coincide con la de la bruta. En contabilidad nacional esa diferencia es inaceptable porque produciría dos cifras oficiales del mismo año, y se corrige con benchmarking, que reparte el desfase alterando lo menos posible el perfil de la serie.",
            },
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
              q: "Se publica que el PIB creció un 0,3 % en el trimestre, dato ajustado de estacionalidad. ¿Qué tipo de cifra es?",
              opciones: [
                "Un dato provisional que se convertirá en observado con la próxima publicación",
                "Un dato observado, medido directamente por el instituto de estadística",
                "Una previsión revisable hasta el cierre del ejercicio",
                "Una estimación producida por un procedimiento con supuestos, publicada sin intervalo de confianza",
              ],
              correcta: 3,
              porque: [
                "Nunca pasa a ser observada: seguirá siendo el resultado de aplicar un procedimiento, y de hecho cambiará al reestimarse los factores.",
                "Lo observado es la serie bruta; la ajustada resulta de descomponerla con un método concreto.",
                "No es una previsión: se refiere a un trimestre ya transcurrido.",
                "Publicarla sin intervalo le da una apariencia de precisión que el procedimiento no respalda, y esa apariencia es la fuente de la mayoría de las malas lecturas.",
              ],
            },
            {
              q: "¿Elimina el ajuste estacional los efectos de calendario?",
              opciones: [
                "No: los efectos de calendario se corrigen únicamente en las series mensuales",
                "Sí, salvo la Semana Santa, que se corrige aparte por ser móvil",
                "Sí: la Semana Santa y los días laborables forman parte de la estacionalidad",
                "No: son dos correcciones distintas, y la de calendario depende de cuántos días laborables tenga cada periodo concreto",
              ],
              correcta: 3,
              porque: [
                "Se corrigen en trimestrales y mensuales por igual.",
                "La Semana Santa es el caso más visible de efecto de calendario, y no el único: los días laborables y el año bisiesto también lo son.",
                "La estacionalidad es el patrón que se repite cada año; el calendario varía de un año a otro sin patrón fijo.",
                "Un trimestre con dos días laborables más produce más, y eso no es estacionalidad: es aritmética del calendario de ese año.",
              ],
            },
            {
              q: "Los componentes de una serie se ajustan por separado y se suman. ¿Da eso la serie ajustada del agregado?",
              opciones: [
                "No, pero solo si los componentes tienen estacionalidades de signo contrario",
                "Sí: el ajuste conserva la aditividad",
                "Sí, salvo diferencias de redondeo",
                "No: el ajuste no es lineal, y ajustar cada componente y sumarlos da un resultado distinto de ajustar el agregado",
              ],
              correcta: 3,
              porque: [
                "La discrepancia aparece con cualquier combinación de patrones estacionales.",
                "Cada serie tiene su propio patrón estacional, su propio modelo y sus propios atípicos: no hay razón para que el procedimiento conmute con la suma.",
                "La diferencia excede con mucho el redondeo y obliga a los institutos a decidir explícitamente qué enfoque publican.",
                "Es una decisión que hay que tomar y documentar: ajustar directamente el agregado, o ajustar las partes y conciliar después.",
              ],
            },
            {
              q: "¿Puede el ajuste estacional separar la tendencia del ciclo?",
              opciones: [
                "Sí, aplicando después un filtro de medias móviles más largo",
                "Sí: son los dos componentes que quedan tras extraer la estacionalidad",
                "No: la descomposición estándar produce un componente conjunto de tendencia-ciclo",
                "No, salvo en series con más de treinta años de historia",
              ],
              correcta: 2,
              porque: [
                "Alargar el filtro suaviza más la serie, y no resuelve qué parte de esa suavidad es tendencia y qué parte es ciclo.",
                "Lo que queda tras extraer estacionalidad e irregular es un solo componente, no dos.",
                "Separar tendencia de ciclo exige supuestos adicionales sobre qué se considera potencial, que el ajuste estacional no hace ni pretende hacer.",
                "La longitud de la serie ayuda a estimar mejor, y no convierte un componente conjunto en dos separables sin supuestos.",
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
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment", nota: "el documento que fija las prácticas comunes del sistema estadístico europeo: qué se recomienda en cada etapa y qué se considera inaceptable; el punto de partida obligado." },
            { ref: "INE, notas metodológicas de la Contabilidad Nacional Trimestral", nota: "cómo se aplica todo esto al caso español, con las opciones concretas elegidas y su justificación." },
            { ref: "Ladiray y Quenneville, Seasonal Adjustment with the X-11 Method", nota: "el tratamiento detallado de los promedios móviles y de por qué se eligieron los filtros que se eligieron; más legible de lo que sugiere el tema." },
            { ref: "Banco de España, documentos ocasionales sobre análisis de coyuntura", nota: "el uso práctico de las series ajustadas para el seguimiento en tiempo real y las cautelas al interpretar el último dato." },
          ],
        },
      ],
    },
  ],
};
