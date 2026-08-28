/* Ficha 4.10 — Desestacionalización y extracción de señal. */

export default {
  codigo: "4.10",
  titulo: "Desestacionalización y extracción de señal",
  nivel: 4,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "4 h",
  nucleo:
    "Casi ningún dato económico que se comenta es un dato bruto: es el resultado de descomponer una serie en tendencia, estacionalidad e irregular bajo supuestos que nadie discute porque nadie los ve. Saber qué hace ese filtro es saber qué se está mirando.",
  requiere: "4.09 Series temporales · 4.03 Probabilidad e inferencia",
  abre: "10.10 Cuentas trimestrales y revisiones · 10.02 Mercado de trabajo español · 3.02 Inflación y precios",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El empleo en España cae todos los años en enero y sube todos los veranos. La construcción se frena en invierno. El comercio dispara sus ventas en diciembre. Nada de eso informa sobre el estado de la economía: **es el calendario**. Si se quiere saber si la situación mejora o empeora hay que separar la parte del movimiento que se repite cada año de la que no, y ese es el objeto de la desestacionalización. La operación parece técnica y **tiene consecuencias inmediatas sobre lo que se puede afirmar**: casi todos los titulares económicos comentan una cifra que ha pasado por este filtro.",
            "**El punto de partida es una descomposición que hay que asumir, no descubrir.** Se supone que la serie observada es el resultado de combinar una **tendencia-ciclo**, un componente **estacional** que se repite con periodicidad fija y un **irregular** impredecible. La combinación puede ser **aditiva** —los componentes se suman, apropiado cuando la amplitud estacional no depende del nivel— o **multiplicativa** —se multiplican, apropiado cuando la oscilación crece proporcionalmente al nivel, que es lo habitual en economía—. Trabajar en logaritmos convierte una en otra, con el mismo argumento de escala multiplicativa de la ficha 4.02. **La descomposición no es un hecho observable: es un modelo**, y sus tres componentes no existen fuera de él.",
            "**El principio de estimación es sencillo y conviene entenderlo antes que los programas.** Una media móvil que abarque exactamente un año promedia todos los meses o trimestres, con lo que **la estacionalidad se cancela** y queda una aproximación de la tendencia. Dividiendo la serie original por esa tendencia se obtienen los factores estacionales de cada periodo, que se promedian entre años y se normalizan para que su suma sea el número de periodos. Dividir la serie por su factor da la **serie desestacionalizada**. Los programas reales son mucho más sofisticados, pero hacen esencialmente esto en varias iteraciones.",
            "**Los dos programas de referencia son X-13ARIMA-SEATS y TRAMO/SEATS**, y su diferencia de filosofía es relevante. El primero, de la oficina del censo estadounidense, es **empírico**: aplica una batería de medias móviles calibradas durante décadas. El segundo, desarrollado en el Banco de España, es **basado en modelo**: identifica un ARIMA para la serie y deriva de él los filtros óptimos, lo que tiene la ventaja de que los supuestos quedan explícitos y de que se pueden calcular errores estándar de los componentes. Ambos comparten una primera fase de **preajuste**: corregir valores atípicos, cambios de nivel y efectos de calendario antes de descomponer.",
            "**El ajuste de calendario merece mención aparte porque en España pesa mucho.** Un trimestre con más días laborables produce más, sin que nada haya mejorado. Los años bisiestos añaden un día. Y la **Semana Santa** cae unas veces en marzo y otras en abril, desplazando actividad entre trimestres de forma que ninguna pauta estacional fija puede capturar: para eso se estima un efecto propio mediante una regresión previa. En un país con el peso turístico del nuestro, ese efecto no es marginal, y es la razón de que se publiquen series **corregidas de efectos estacionales y de calendario**, dos correcciones distintas que suelen citarse como una.",
            "**El problema serio, y el que hay que conocer, es el de los extremos de la serie.** Una media móvil centrada necesita datos a ambos lados, y en el último periodo **no existen los de la derecha**. Los programas los sustituyen por predicciones del modelo ARIMA, lo que significa que **el dato desestacionalizado más reciente —justo el que se comenta— es el menos fiable de todos**. Y cuando llegan las observaciones siguientes, el filtro se recalcula y **el dato del pasado cambia**, aunque el dato bruto no se haya tocado. Buena parte de las revisiones que tanto irritan no vienen de nueva información sobre el periodo, sino de esto.",
            "**Dos consecuencias prácticas cierran la ficha.** La primera: la serie desestacionalizada **no es aditiva**. La suma de los componentes desestacionalizados no coincide con el agregado desestacionalizado, porque cada uno tiene su propio patrón estacional; por eso los institutos publican el agregado ajustado por separado en lugar de sumar. La segunda: el filtro **puede inducir ciclos que no estaban en los datos** —el efecto Slutsky-Yule— y suaviza los puntos de giro, con lo que un cambio de tendencia tarda en verse. De ahí que la recomendación prudente sea mirar a la vez la **tasa intertrimestral desestacionalizada**, sensible pero ruidosa, y la **interanual del dato bruto**, robusta al ajuste pero lenta, y desconfiar cuando ambas discrepan.",
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
            { nom: "Descomposición aditiva", sub: "Si la amplitud estacional no depende del nivel.", cols: ["$Y_t = T_t + S_t + I_t$"] },
            { nom: "Descomposición multiplicativa", sub: "Lo habitual en economía; log la convierte en aditiva.", cols: ["$Y_t = T_t \\cdot S_t \\cdot I_t$"] },
            { nom: "Media móvil centrada", sub: "Cubre un año exacto: cancela la estacionalidad.", cols: ["$\\mathrm{MA}_4 = \\dfrac{\\tfrac12 y_{t-2} + y_{t-1} + y_t + y_{t+1} + \\tfrac12 y_{t+2}}{4}$"] },
            { nom: "Razón a la media móvil", sub: "Aísla estacional e irregular.", cols: ["$r_t = \\dfrac{y_t}{\\mathrm{MA}_t}$"] },
            { nom: "Normalización de factores", sub: "Para no alterar el nivel de la serie.", cols: ["$\\sum_j S_j = 4$ (trimestral) · 12 (mensual)"] },
            { nom: "Serie desestacionalizada", sub: "Tendencia-ciclo más irregular.", cols: ["$y_t^{\\mathrm{des}} = \\dfrac{y_t}{S_j}$"] },
            { nom: "Efectos de calendario", sub: "Corrección distinta de la estacional.", cols: ["días laborables · bisiesto · Semana Santa"] },
            { nom: "Problema del extremo", sub: "El dato más reciente es el menos fiable.", cols: ["se usan predicciones ARIMA a la derecha"] },
            { nom: "No aditividad", sub: "Por eso el agregado se ajusta por separado.", cols: ["$\\sum$ componentes ajustados $\\neq$ agregado ajustado"] },
            { nom: "Efecto Slutsky-Yule", sub: "El filtro puede crear el ciclo que se observa.", cols: ["una media móvil induce ciclos espurios"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: doce trimestres y un titular equivocado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Construimos una serie trimestral con una tendencia que crece **dos unidades por trimestre** desde 102, y unos factores estacionales de **0,80 · 1,00 · 1,35 · 0,85** —un patrón de actividad turística, con un tercer trimestre fuerte y un primero flojo—. Los factores suman 4, como deben. La serie observada es el producto de ambos, sin componente irregular para que las cuentas se sigan sin ruido.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Trimestre", y: "Índice" },
          dominio: { x: [1, 12], y: [70, 178] },
          marcasX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          marcasY: [80, 100, 120, 140, 160],
          series: [
            {
              nombre: "Serie bruta",
              color: "tinta2",
              grosor: 2,
              etiquetaEn: [11, 164.7],
              puntos: [[1, 81.6], [2, 104], [3, 143.1], [4, 91.8], [5, 88], [6, 112], [7, 153.9], [8, 98.6], [9, 94.4], [10, 120], [11, 164.7], [12, 105.4]],
            },
            {
              nombre: "Desestacionalizada",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [12, 123.7],
              puntos: [[1, 102.1], [2, 104.3], [3, 105.9], [4, 107.7], [5, 110.1], [6, 112.3], [7, 113.9], [8, 115.7], [9, 118.1], [10, 120.3], [11, 121.9], [12, 123.7]],
            },
          ],
          nota: "La serie bruta sube y baja violentamente doce veces; la desestacionalizada es **una recta creciente**. Las dos contienen exactamente la misma información. Lo notable es que la línea recta no se ha impuesto: **se ha recuperado de los datos** sin saber cuál era la tendencia verdadera, aplicando una media móvil centrada de cuatro trimestres y estimando los factores a partir de las razones resultantes. La comparación con los valores verdaderos —102, 104, 106, …— muestra un error inferior a la décima en todos los puntos.",
        },
        {
          tipo: "tabla",
          cabecera: ["Trimestre del año", "Factor estimado", "Factor verdadero", "Error"],
          filas: [
            ["Primero", "0,7994", "0,80", "−0,0006"],
            ["Segundo", "0,9976", "1,00", "−0,0024"],
            ["Tercero", "1,3509", "1,35", "+0,0009"],
            { celdas: ["Cuarto", "0,8521", "0,85", "+0,0021"], clase: "total" },
          ],
          nota: "Los factores se obtienen promediando, para cada trimestre del año, las razones entre el dato observado y la media móvil centrada, y normalizando después para que sumen 4. La recuperación es casi exacta porque en este ejemplo **no hay componente irregular ni cambio en el patrón estacional**. Con datos reales ninguna de las dos cosas se cumple: el irregular introduce ruido en cada razón, y el patrón estacional **evoluciona lentamente** —los hábitos de consumo cambian, el turismo se desestacionaliza— lo que obliga a estimar factores móviles en lugar de fijos.",
        },
        {
          tipo: "tabla",
          cabecera: ["Comparación", "Variación", "Qué está midiendo"],
          filas: [
            ["Trimestre 5 sobre trimestre 4, dato bruto", "−4,14 %", "Calendario, casi por completo"],
            ["Trimestre 6 sobre trimestre 5, dato bruto", "+27,27 %", "Calendario, casi por completo"],
            ["Trimestre 6 sobre trimestre 5, desestacionalizado", "+1,99 %", "El crecimiento real de la economía"],
            { celdas: ["Trimestre 5 sobre trimestre 1, interanual bruto", "+7,84 %", "Correcto: compara trimestres homólogos"], clase: "total" },
          ],
          nota: "Aquí está el titular equivocado. Con el dato bruto, la economía se **hunde un 4 %** un trimestre y **se dispara un 27 %** al siguiente. No ha pasado nada: la tendencia crece un **2 % cada trimestre**, invariablemente, y eso es lo que recupera el dato desestacionalizado. La última fila muestra la alternativa robusta: comparar con el **mismo trimestre del año anterior** cancela la estacionalidad sin necesidad de ningún filtro, a cambio de mezclar cuatro trimestres de información y reaccionar tarde a los cambios. **Ninguna de las dos comparaciones es superior en abstracto**: la intertrimestral desestacionalizada es sensible y frágil, la interanual bruta es robusta y lenta, y lo sensato es mirar las dos.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el paro de agosto y la afiliación de enero",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En España hay dos rituales estadísticos mensuales que ilustran todo lo anterior mejor que cualquier ejercicio: el paro registrado y la afiliación a la Seguridad Social. Cada mes se comentan cifras brutas con una intensidad inversamente proporcional a su contenido informativo.",
            "**El patrón estacional del empleo español es de los más marcados de Europa**, y la razón es estructural: el peso del turismo, la hostelería, la construcción y la agricultura, más el calendario escolar, que concentra altas en junio y bajas en septiembre. Enero destruye empleo todos los años sin excepción tras la campaña navideña; julio lo crea. **Que ocurra no informa de nada; lo informativo es cuánto, comparado con lo que suele ocurrir en ese mes.**",
            "**De ahí nace el vicio del comentario mensual.** Un titular que anuncia que enero destruyó cien mil empleos describe el calendario, no la economía. La comparación pertinente es con **el enero medio de los últimos años** o, mejor, con el dato desestacionalizado, que puede perfectamente mostrar creación de empleo el mismo mes en que la cifra bruta cae. Que ambas lecturas coexistan y sean correctas es lo que permite que dos comentaristas con datos oficiales digan cosas opuestas sin faltar a la verdad, con el mismo mecanismo que la ficha 4.02 describía para los tres salarios del INE.",
            "**Hay además dos fuentes que miden cosas distintas, y conviene no mezclarlas.** El **paro registrado** cuenta inscripciones en las oficinas de empleo y depende de incentivos administrativos: quien no espera prestación ni oferta puede no inscribirse. La **EPA** es una encuesta con definición internacional de desempleo, comparable entre países y sujeta al error muestral de la ficha 4.03. La **afiliación** es un registro censal, sin error de muestreo, pero cuenta **relaciones laborales y no personas**: quien tiene dos contratos cuenta dos veces. Las tres son correctas y responden a preguntas diferentes; la ficha 10.02 desarrolla el asunto.",
            "**El efecto de calendario aparece aquí con toda su fuerza.** La Semana Santa desplaza actividad turística entre marzo y abril según el año, de modo que comparar marzos consecutivos puede ser comparar un mes con Semana Santa y otro sin ella. Es un caso donde **la corrección de calendario importa más que la estacional**, y donde publicar solo el dato bruto invita al error. Lo mismo vale para el número de días laborables de cada trimestre, que en un país con muchos festivos autonómicos varía de forma apreciable.",
            "**La conclusión operativa, que sirve para leer cualquier indicador coyuntural.** Preguntar siempre si el dato es bruto, desestacionalizado o además corregido de calendario. No comentar variaciones mensuales o trimestrales brutas. Mirar la interanual como contraste de la intertrimestral desestacionalizada, y desconfiar cuando discrepan mucho. Recordar que **el último dato desestacionalizado se revisará** al llegar los siguientes, aunque el bruto no cambie. Y, sobre todo, no confundir el filtro con los hechos: **la tendencia-ciclo no se observa, se estima**, y distintos programas con supuestos distintos dan resultados algo distintos sobre exactamente los mismos datos brutos.",
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
            { t: "Comentar la variación de un dato bruto entre periodos consecutivos", d: "Es comentar el calendario. En el ejemplo la economía crece un 2 % cada trimestre y el dato bruto pasa de caer un 4 % a subir un 27 %. En España, con su patrón estacional del empleo, el titular de enero o el de julio describen la estación del año y no el estado de la economía." },
            { t: "Creer que la serie desestacionalizada es el dato «verdadero»", d: "Es el resultado de un modelo con supuestos: forma de la descomposición, tratamiento de atípicos, longitud de los filtros, corrección de calendario. Distintos programas dan resultados algo distintos sobre los mismos datos brutos. Lo observable es la serie bruta; la tendencia-ciclo se estima." },
            { t: "Sumar componentes desestacionalizados para obtener el agregado", d: "No es aditivo: cada componente tiene su propio patrón estacional, y la suma de los ajustados no coincide con el agregado ajustado. Por eso los institutos ajustan el agregado por separado y lo publican como tal. Es el mismo tipo de problema que la falta de aditividad de los índices encadenados de la ficha 10.08." },
            { t: "Confiar en el último dato desestacionalizado como si fuera definitivo", d: "En el extremo de la serie no hay observaciones a la derecha y el filtro las sustituye por predicciones del modelo. El dato más reciente, que es el que se comenta, es el menos fiable, y se revisará al llegar los siguientes aunque el dato bruto no se toque. Buena parte de las revisiones vienen de aquí y no de nueva información." },
            { t: "Confundir corrección estacional con corrección de calendario", d: "Son dos ajustes distintos. El estacional elimina la pauta que se repite cada año; el de calendario corrige días laborables, bisiestos y la posición móvil de la Semana Santa, que ninguna pauta fija puede capturar. En España el segundo pesa mucho, y las series se publican con ambos aplicados." },
            { t: "Suponer que el patrón estacional es fijo", d: "Los hábitos cambian: el turismo se desestacionaliza, el comercio adelanta campañas, el calendario escolar se modifica. Los programas estiman factores móviles precisamente por eso. Aplicar factores calculados hace diez años introduce un error sistemático que se acumula en la misma dirección." },
            { t: "Interpretar como ciclo lo que ha creado el filtro", d: "Una media móvil aplicada a una serie sin ciclo puede generar oscilaciones aparentes: es el efecto Slutsky-Yule. Además el filtro suaviza los puntos de giro, de modo que un cambio de tendencia tarda en aparecer y después se revisa. Conviene contrastar siempre la señal con el dato bruto interanual." },
            { t: "Aplicar contrastes de series temporales a datos desestacionalizados sin más", d: "El filtro modifica las propiedades dinámicas de la serie e induce autocorrelación que no estaba en el dato bruto. Los contrastes de raíz unitaria y las estimaciones ARIMA de la ficha 4.09 heredan esa distorsión, y sus resultados no son directamente comparables con los obtenidos sobre datos sin ajustar." },
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
            "Prácticamente ningún dato coyuntural que se cita públicamente es un dato bruto, y esta ficha describe lo que ha ocurrido entre la medición y el titular.",
          ],
          lista: [
            "La **Contabilidad Nacional Trimestral** se publica en tres versiones: bruta, corregida de efectos estacionales y de calendario, y en volumen encadenado. La tasa intertrimestral que abre los informativos es siempre la **corregida**, y su cálculo incorpora todos los supuestos de esta ficha. La ficha 10.10 sigue el rastro de sus revisiones.",
            "El **INE utiliza TRAMO/SEATS**, desarrollado en el Banco de España, y Eurostat recomienda un marco común para que las series de los países miembros sean comparables. Que dos países usen filtros distintos sobre datos correctos basta para que sus tasas trimestrales no sean del todo comparables, y de ahí el esfuerzo de armonización.",
            "El **ajuste por Semana Santa** es un caso donde España necesita más corrección que la media europea: la fiesta se desplaza entre marzo y abril y arrastra actividad turística, hostelera y de transporte. Sin corregirlo, la comparación entre primeros trimestres de años consecutivos puede estar midiendo el calendario litúrgico.",
            "La **no aditividad** aparece dos veces y por motivos distintos: por la desestacionalización, porque cada componente tiene su patrón, y por el **encadenamiento de volúmenes** de la ficha 10.08, porque cada año se enlaza con ponderaciones propias. Un usuario que sume componentes obtendrá una discrepancia con el agregado publicado que no es un error de los datos.",
            "Y los **indicadores de alta frecuencia** que alimentan la estimación del trimestre en curso —afiliación, consumo eléctrico, matriculaciones, tráfico— se desestacionalizan también antes de entrar en el modelo. La cadena de filtros es más larga de lo que parece, y cada eslabón añade supuestos.",
          ],
          cierre:
            "El punto que conviene retener es que **entre el hecho económico y la cifra comentada hay un modelo estadístico**, y no un instrumento de medida. No es motivo para desconfiar de las estadísticas oficiales, que documentan sus métodos con detalle: es motivo para leerlas sabiendo qué se les ha hecho, y para no tratar una décima de la serie ajustada como si fuera una observación.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El dato bruto sube un 27 % en un trimestre. ¿Qué ha pasado en la economía?", a: "Nada especial: la tendencia crece un 2 % por trimestre, invariablemente. El 27 % es el paso de un trimestre con factor 0,80 a otro con factor 1,00 sobre una tendencia creciente. Comentar variaciones intertrimestrales de datos brutos es comentar el calendario, y en España, con su estacionalidad del empleo, es un vicio constante." },
            { q: "¿Cómo se recupera la tendencia sin saber cuál era?", a: "Con una media móvil centrada que abarque exactamente un año, porque al promediar los cuatro trimestres la estacionalidad se cancela. Dividiendo la serie por esa media se obtienen razones que, promediadas por trimestre y normalizadas para sumar 4, dan los factores estacionales. En el ejemplo se recuperan con un error inferior a tres milésimas." },
            { q: "¿Por qué el dato desestacionalizado más reciente es el menos fiable?", a: "Porque la media móvil centrada necesita observaciones a ambos lados y en el extremo no existen las de la derecha; el programa las sustituye por predicciones del modelo ARIMA. Al llegar los datos siguientes, el filtro se recalcula y el dato del pasado cambia aunque el bruto no se haya tocado. Muchas revisiones vienen de ahí." },
            { q: "¿Qué ventaja tiene comparar con el mismo trimestre del año anterior?", a: "Que cancela la estacionalidad sin aplicar ningún filtro, de modo que no depende de supuestos ni se revisa. El coste es que mezcla cuatro trimestres de información y reacciona tarde a los cambios de tendencia. Ninguna comparación es superior en abstracto: la intertrimestral ajustada es sensible y frágil, la interanual bruta es robusta y lenta." },
            { q: "¿Por qué no se puede sumar el empleo desestacionalizado de cada sector para obtener el total?", a: "Porque cada sector tiene su propio patrón estacional y su propio filtro, y la suma de series ajustadas no coincide con el ajuste de la suma. Por eso los institutos desestacionalizan el agregado por separado. La discrepancia que encuentra quien suma no es un error de los datos, sino una propiedad del procedimiento." },
            { q: "¿En qué se diferencian la corrección estacional y la de calendario?", a: "La estacional elimina la pauta que se repite en el mismo periodo cada año. La de calendario corrige el número de días laborables, los años bisiestos y la posición móvil de la Semana Santa, que se desplaza entre marzo y abril y por tanto ninguna pauta fija puede capturar. En España la segunda pesa bastante por el peso del turismo." },
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
              q: "El dato bruto del PIB pasa de caer un 4 % a subir un 27 % entre trimestres. ¿Qué informa eso?",
              opciones: [
                "Un cambio de metodología estadística",
                "Una recuperación muy intensa",
                "Sobre todo el calendario: el patrón estacional puede superar con creces la señal económica",
                "Un error de medición del instituto",
              ],
              correcta: 2,
              porque: [
                "Los cambios metodológicos producen saltos de nivel, no oscilaciones que se repiten cada año.",
                "En el ejemplo la economía crece un 2 % constante cada trimestre y el dato bruto oscila así. La supuesta recuperación no existe.",
                "Con turismo estacional muy marcado, comentar la variación de un dato bruto entre periodos consecutivos es comentar las vacaciones. Por eso se publican series ajustadas.",
                "No hay error: el dato bruto es correcto y lo que falla es su interpretación.",
              ],
            },
            {
              q: "¿Es la serie desestacionalizada el dato «verdadero»?",
              opciones: [
                "No: es el resultado de un modelo con supuestos sobre descomposición, atípicos, filtros y calendario",
                "Sí, siempre que la haga un instituto oficial",
                "No, porque siempre pierde información respecto al bruto",
                "Sí: el bruto está contaminado y el ajustado está limpio",
              ],
              correcta: 0,
              porque: [
                "Dos programas —o el mismo con otras opciones— dan series distintas a partir del mismo bruto. Por eso los institutos documentan sus especificaciones.",
                "La autoría no convierte una estimación en observación: los institutos son los primeros en publicar sus supuestos.",
                "Pierde el componente estacional a propósito, que no es información sobre la coyuntura. El problema es otro: que la separación depende del modelo.",
                "El bruto es el dato observado; el ajustado es una estimación. Llamarlo «limpio» oculta que se ha tomado media docena de decisiones para producirlo.",
              ],
            },
            {
              q: "¿Por qué el último dato desestacionalizado de una serie es el menos fiable?",
              opciones: [
                "Porque en el extremo no hay observaciones a la derecha y el filtro las sustituye por predicciones",
                "Porque el ajuste estacional necesita al menos cinco años de datos",
                "Porque la estacionalidad del último periodo aún no se conoce",
                "Porque los institutos lo publican con menos verificación",
              ],
              correcta: 0,
              porque: [
                "Los filtros son simétricos y necesitan datos a ambos lados. En el extremo se completan con previsiones del modelo, y por eso el dato más comentado es justo el que más se revisa después.",
                "La longitud de la serie afecta a la calidad general de la estimación, no específicamente al último punto.",
                "Los factores estacionales se estiman para todo el año, incluido el último trimestre. El problema es la asimetría del filtro, no la falta de factores.",
                "La verificación es la misma; lo que cambia es la información disponible para el filtro en ese punto.",
              ],
            },
            {
              q: "¿Se pueden sumar los componentes desestacionalizados para obtener el agregado ajustado?",
              opciones: [
                "No, salvo que la descomposición sea aditiva",
                "No: cada componente tiene su propio patrón estacional y la suma de los ajustados no coincide con el agregado ajustado",
                "Sí, si todos se ajustan con el mismo programa",
                "Sí: el ajuste es una transformación lineal",
              ],
              correcta: 1,
              porque: [
                "Ni siquiera con descomposición aditiva coinciden, porque los factores se estiman independientemente en cada serie.",
                "Por eso los institutos publican el agregado ajustado directamente, y advierten de la discrepancia con la suma de sus partes.",
                "Usar el mismo programa no basta: cada serie recibe su propio modelo, sus propios atípicos y sus propios filtros.",
                "El ajuste no es lineal: los factores estacionales se estiman por separado para cada serie y no se conservan al sumar.",
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
            { ref: "Dagum y Bianconcini, Seasonal Adjustment Methods and Real Time Trend-Cycle Estimation", nota: "el tratado completo, incluido el problema del extremo de la serie y la estimación de la tendencia en tiempo real." },
            { ref: "Gómez y Maravall, documentación de TRAMO/SEATS, Banco de España", nota: "el programa que usa el INE, explicado por sus autores; el enfoque basado en modelo se entiende mucho mejor aquí." },
            { ref: "US Census Bureau, X-13ARIMA-SEATS Reference Manual", nota: "la alternativa empírica y el estándar internacional; útil para ver qué decisiones toma un programa real y cuántas son." },
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment", nota: "por qué la armonización importa y qué se acuerda entre países para que las tasas trimestrales sean comparables." },
            { ref: "INE, metodología de la Contabilidad Nacional Trimestral", nota: "qué se publica en bruto, qué corregido y con qué criterios; conviene leerlo antes de comentar cualquier tasa española." },
          ],
        },
      ],
    },
  ],
};
