/* Ficha 15.07 — Diagnósticos de calidad y estacionalidad residual. */

export default {
  codigo: "15.07",
  titulo: "Diagnósticos de calidad y estacionalidad residual",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "Un ajuste malo no lo parece: los filtros suavizan por construcción y el resultado siempre sale creíble en el gráfico. Los contrastes existen precisamente por eso, y el primero que hay que mirar es si queda estacionalidad en lo que debería estar limpio.",
  requiere: "15.05 X-11 frente a SEATS · 15.06 JDemetra+ · 4.06 Diagnóstico de la regresión",
  abre: "15.08 Política de revisiones · 15.11 Agregación directa e indirecta · 15.12 Nowcasting",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El problema de fondo de esta etapa es que **no existe el dato verdadero contra el que comparar**. La estacionalidad no se observa: es un componente inventado por el procedimiento, así que no se puede medir el error de estimación como se haría con una predicción. Los diagnósticos no comprueban que el resultado sea correcto —eso es imposible—, sino que **no presenta síntomas de estar mal**. Es un criterio más débil y es el único disponible.",
            "El diagnóstico más importante es la **estacionalidad residual**: si la serie ajustada todavía muestra un patrón intraanual, el filtro no ha hecho su trabajo. La forma más directa de detectarlo es el **espectro**. Una serie con estacionalidad trimestral tiene concentrada mucha varianza en la frecuencia correspondiente al periodo de cuatro trimestres y en su armónico de periodo dos; si esos picos siguen ahí después de ajustar, queda estacionalidad. Un espectro plano en las frecuencias estacionales es la firma de un ajuste que funciona.",
            "Conviene aplicar el contraste a **dos series distintas**, y la diferencia importa. Sobre la **serie ajustada** detecta si el filtro dejó estacionalidad sin retirar. Sobre el **componente irregular** detecta algo más sutil: si el irregular tiene estructura estacional, es que la estacionalidad no es estable y el filtro está persiguiendo un patrón cambiante. Lo primero se arregla ajustando mejor; lo segundo puede requerir acortar la ventana de estimación de los factores o revisar si hubo un cambio estructural.",
            "La tradición X-11 aporta un conjunto de once medidas resumidas, las llamadas **M**, que evalúan aspectos distintos: cuánto pesa el irregular frente a la tendencia, si los factores estacionales son estables, si hay movimientos abruptos de mes a mes. Se combinan en un estadístico global, la **Q**, con el convenio de que valores por debajo de uno son aceptables y por encima señalan problemas. Es una herramienta útil y muy usada, con la limitación de que sus umbrales son convencionales y calibrados sobre series mensuales.",
            "El segundo bloque de diagnósticos mide **estabilidad**, y la idea es elegante: si el ajuste es bueno, no debería depender mucho de qué tramo de datos se use. Los **sliding spans** rehacen el ajuste sobre varios subperiodos solapados y comparan los resultados; si el factor estacional de un mismo trimestre cambia mucho según el tramo, el ajuste es frágil. El **historial de revisiones** hace lo análogo en el tiempo: recalcula el ajuste como si solo se dispusiera de los datos hasta cada fecha pasada y mide cuánto cambiaron después los valores publicados. Es el tema de la ficha 15.08.",
            "Un aviso de método que conviene repetir. Los contrastes de estacionalidad, como cualquier contraste, dependen del tamaño muestral: en series cortas tienen poca potencia y **no rechazar no es lo mismo que no haber estacionalidad residual**. Y al ejecutarse decenas de contrastes sobre cientos de series, algunos rechazarán por azar. Los diagnósticos son un sistema de alarmas para dirigir la atención humana, no un veredicto automático, y ese es exactamente el uso que les da un instituto: revisar a mano las series que encienden alguna luz.",
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
            { nom: "El problema de fondo", sub: "Por qué no hay validación directa.", cols: ["La estacionalidad no se observa: no hay dato verdadero"] },
            { nom: "Frecuencias estacionales", sub: "Dónde mirar en el espectro.", cols: ["Trimestral: periodo 4 y su armónico de periodo 2"] },
            { nom: "Estacionalidad residual", sub: "El síntoma principal.", cols: ["Pico en frecuencia estacional en la serie ya ajustada"] },
            { nom: "Sobre el irregular", sub: "Detecta algo distinto.", cols: ["Estructura estacional en el irregular: patrón inestable"] },
            { nom: "Estadísticos M y Q", sub: "El resumen de la tradición X-11.", cols: ["Once medidas combinadas · convenio Q < 1 aceptable"] },
            { nom: "Sliding spans", sub: "Estabilidad frente al tramo usado.", cols: ["Rehacer el ajuste en subperiodos solapados y comparar"] },
            { nom: "Historial de revisiones", sub: "Estabilidad en el tiempo.", cols: ["Recalcular con la información de cada fecha pasada"] },
            { nom: "Qué prueban", sub: "El límite lógico.", cols: ["Ausencia de síntomas, no corrección del resultado"] },
            { nom: "Uso correcto", sub: "Cómo los emplea un instituto.", cols: ["Alarmas que dirigen la revisión manual, no veredictos"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: el espectro antes y después",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre la serie del bloque, calculando el periodograma de la serie bruta y de la ajustada tras eliminar de ambas su tendencia lineal. Con doce observaciones trimestrales hay seis frecuencias, y las relevantes son la de **periodo 4** —la estacionalidad anual— y la de **periodo 2**, su armónico. La escala es logarítmica porque los valores abarcan cinco órdenes de magnitud.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Frecuencia", y: "log₁₀ del periodograma" },
          dominio: { x: [0.05, 0.55], y: [-2.1, 3.3] },
          marcasX: [0.1, 0.25, 0.4, 0.5],
          marcasY: [-2, -1, 0, 1, 2, 3],
          series: [
            {
              nombre: "Serie bruta",
              color: "alerta",
              etiquetaEn: [0.088, 2.7],
              puntos: [[0.0833, 0.46], [0.1667, 0.03], [0.25, 2.04], [0.3333, -0.74], [0.4167, -0.47], [0.5, 2.89]],
            },
            {
              nombre: "Serie ajustada",
              color: "acento",
              etiquetaEn: [0.088, -0.55],
              puntos: [[0.0833, -1.1], [0.1667, -1.46], [0.25, -1.7], [0.3333, -1.54], [0.4167, -1.3], [0.5, -1.64]],
            },
          ],
          nota: "La serie bruta tiene **dos picos enormes** exactamente en las frecuencias estacionales: 0,25 (periodo 4) y 0,5 (periodo 2). En el resto del espectro se queda por debajo de 0,5 en escala logarítmica. La serie ajustada es **plana**: oscila entre −1,7 y −1,1 sin ningún pico, y en particular su valor en la frecuencia estacional es el más bajo de los seis. Así se ve un ajuste que funciona.",
        },
        {
          tipo: "tabla",
          cabecera: ["Frecuencia", "Periodo", "Periodograma bruta", "Periodograma ajustada", "Reducción"],
          filas: [
            ["0,0833", "12", "2,89", "0,079", "97,3 %"],
            ["0,1667", "6", "1,08", "0,035", "96,8 %"],
            ["0,25", "4 · estacional", "110,23", "0,020", "99,98 %"],
            ["0,3333", "3", "0,18", "0,029", "83,9 %"],
            { celdas: ["0,5", "2 · armónico estacional", "774,10", "0,023", "99,997 %"], clase: "total" },
          ],
          nota: "Nótese que **el pico dominante no es el de periodo 4 sino el de periodo 2**, con 774 frente a 110. Es el armónico: el patrón de la serie alterna con fuerza entre trimestres bajos y altos —T3 hunde, T4 dispara—, y esa alternancia produce un componente de periodo dos muy potente. Un diagnóstico que solo mirase la frecuencia anual se perdería lo más grande.",
        },
        {
          tipo: "parrafos",
          items: [
            "El contraste es tan claro aquí porque el ejemplo es limpio: los factores estacionales son estables y el ajuste se hizo con el mismo método que generó los datos. En series reales la reducción rara vez llega al 99,99 %, y lo que se busca es simplemente que **no quede un pico distinguible** frente al resto del espectro.",
            "Una advertencia sobre la lectura del periodograma con series cortas. Con doce observaciones solo hay seis frecuencias, tan separadas que el gráfico es más un diagrama de barras que un espectro. Para que el análisis espectral tenga resolución hacen falta bastantes más observaciones, y por eso los institutos lo aplican sobre series de décadas. Aquí sirve para ilustrar el principio, no como ejemplo de buena práctica: es la misma limitación de longitud que señalaba la ficha 15.02.",
            "Merece la pena insistir en por qué esta comprobación es imprescindible y no un adorno. **Los filtros suavizan por construcción**, así que una serie mal ajustada tiene exactamente el mismo aspecto tranquilizador que una bien ajustada: sube y baja suavemente, sin saltos. El ojo no puede distinguirlas. Un pico residual de estacionalidad de dos o tres puntos porcentuales es invisible en el gráfico de la serie y perfectamente visible en el espectro, y ese es todo el argumento a favor de mirarlo.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: la serie que aprueba todos los contrastes y está mal",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un analista ajusta una serie, ejecuta la batería completa de diagnósticos y todos salen en verde: sin estacionalidad residual, Q por debajo de uno, sliding spans estables, revisiones pequeñas. Y sin embargo el ajuste es incorrecto. Entender cómo es posible enseña más sobre los diagnósticos que la lista de contrastes.",
            "El caso más frecuente es el **atípico mal clasificado**. Si un escalón real se trató como impulso, la serie ajustada muestra un descenso gradual que no ocurrió así, pero **nada en los diagnósticos lo detecta**: no queda estacionalidad residual, los factores son estables y las revisiones son pequeñas, porque el error no está en la estacionalidad sino en el nivel. Los contrastes vigilan el componente estacional; un error en el tratamiento del nivel les pasa por delante sin encender ninguna luz.",
            "El segundo caso es el **sobreajuste**. Bajando el umbral de detección de atípicos se capturan más episodios, la serie queda más limpia y los diagnósticos mejoran: el irregular es más pequeño, la Q baja, todo parece mejor. Lo que ha ocurrido es que se han retirado como anomalías movimientos económicos reales. **Los diagnósticos premian la suavidad**, y por eso no protegen contra el exceso de suavizado: hay que vigilarlo mirando cuántos regresores de atípico se han incluido y si cada uno tiene una justificación en el mundo real.",
            "El tercero es el **cambio estructural del patrón estacional**. Si la estacionalidad de una rama ha cambiado de verdad —el comercio con la expansión del canal digital, el turismo con la desestacionalización de destinos—, un filtro largo promedia el patrón viejo con el nuevo y produce factores que no describen bien ninguno de los dos. Los contrastes sobre la serie ajustada pueden no rechazar, porque el residuo se reparte; el síntoma aparece más bien en el **irregular**, que muestra estructura estacional. Por eso conviene aplicar los contrastes a las dos series y no solo a la publicada.",
            "La conclusión práctica es que los diagnósticos son necesarios y no suficientes. Detectan bien los fallos del componente estacional y **son ciegos a los errores de especificación del nivel**, que son justamente los que la ficha 15.04 identificaba como más dañinos y peor identificados. El único remedio conocido es el que ningún programa automatiza: mirar la serie, conocer el fenómeno y preguntarse si lo que dice el ajuste es compatible con lo que se sabe que ocurrió.",
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
            { t: "Juzgar el ajuste por el aspecto del gráfico", d: "Los filtros suavizan por construcción, así que cualquier ajuste, bueno o malo, produce una serie de aspecto creíble. Un pico residual de estacionalidad es invisible a simple vista y perfectamente visible en el espectro. La suavidad no es evidencia de calidad: es una consecuencia inevitable del método." },
            { t: "Aplicar los contrastes solo a la serie ajustada", d: "Sobre la ajustada se detecta si quedó estacionalidad sin retirar. Sobre el irregular se detecta algo distinto y más sutil: que la estacionalidad no es estable y el filtro persigue un patrón cambiante. Son diagnósticos de problemas diferentes y hay que hacer los dos." },
            { t: "Interpretar no rechazar como ausencia de estacionalidad residual", d: "Los contrastes dependen del tamaño muestral y en series cortas tienen poca potencia. No rechazar significa que no hay evidencia suficiente, no que el ajuste esté limpio. Con doce observaciones, prácticamente ningún contraste de este tipo tiene capacidad de detectar nada." },
            { t: "Tratar los umbrales de las M y la Q como leyes", d: "El convenio de que Q por debajo de uno es aceptable procede de una calibración empírica hecha sobre series mensuales. Es una guía útil, no un criterio absoluto, y en series trimestrales o de comportamiento inusual conviene mirar las medidas individuales en lugar de quedarse con el resumen." },
            { t: "Perseguir buenos diagnósticos bajando el umbral de atípicos", d: "Capturar más atípicos deja la serie más limpia, reduce el irregular y mejora todos los indicadores. Lo que ha ocurrido es que se han retirado como anomalías movimientos económicos reales. Los diagnósticos premian la suavidad, así que no protegen del sobreajuste: hay que vigilarlo aparte." },
            { t: "Confiar en que los diagnósticos detecten un atípico mal clasificado", d: "No lo hacen. Si un escalón se trató como impulso, el error está en el nivel y no en la estacionalidad, así que ningún contraste del catálogo lo señala. Es el error más dañino según la ficha 15.04 y precisamente el que los diagnósticos no ven." },
            { t: "Olvidar el problema de las comparaciones múltiples", d: "Al ejecutar decenas de contrastes sobre cientos de series, algunos rechazarán por azar. Tratar cada rechazo como un problema real genera trabajo inútil; ignorarlos todos anula el sistema. Se usan como alarmas para dirigir la revisión humana, priorizando por gravedad y no por número." },
            { t: "Mirar solo la frecuencia estacional principal", d: "En datos trimestrales el armónico de periodo dos puede ser mayor que el de periodo cuatro: en la serie del ejemplo, 774 frente a 110. Un diagnóstico que solo vigile la frecuencia anual se pierde el componente dominante, y lo mismo ocurre en series mensuales con los armónicos superiores." },
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
            "En estadística oficial los diagnósticos no son solo control de calidad interno: forman parte de lo que se documenta y se transmite, y su lectura tiene consecuencias sobre qué se publica.",
          ],
          lista: [
            "Las directrices europeas de la ficha 15.06 exigen que los institutos **documenten los diagnósticos** de las series que transmiten, y establecen umbrales orientativos para considerar un ajuste aceptable. No es una recomendación de buenas prácticas: es parte del marco de calidad del sistema estadístico europeo, junto con la obligación de publicar la metodología empleada.",
            "El diagnóstico se complica con las **identidades contables**. Cuando se ajustan por separado las partidas del PIB por el gasto de la ficha 13.02, cada una tiene sus propios diagnósticos, pero además hay que comprobar que la suma sigue cuadrando. Una partida puede pasar todos sus contrastes y romper la coherencia del cuadro, y ese es un fallo que ningún diagnóstico individual detecta. La ficha 15.11 trata cómo se resuelve.",
            "Los **saldos** son especialmente difíciles de diagnosticar. Una serie de capacidad o necesidad de financiación (**B.9**) de la ficha 12.09 cruza el cero, y los contrastes espectrales y los estadísticos de resumen se comportan mal con series que cambian de signo, porque están pensados para magnitudes con nivel definido. Los umbrales convencionales no son aplicables ahí, y la valoración pasa a ser en buena medida cualitativa.",
            "La **estacionalidad cambiante** tiene una lectura económica que conviene no perder. Cuando el irregular de una rama muestra estructura estacional persistente, el diagnóstico técnico dice que el filtro no sigue el patrón; la lectura sustantiva es que **el comportamiento estacional de esa actividad está cambiando**, lo que es información económica en sí misma. Los cambios en los hábitos de compra o en la estacionalidad turística aparecen primero como fallos de diagnóstico.",
            "Por último, la relación con las **revisiones anuales**. Un buen historial de revisiones en el ajuste no garantiza estabilidad del dato publicado, porque a las revisiones del procedimiento se suman las de los datos brutos cuando llegan las cuentas anuales. Separar ambas fuentes, como recordaba la ficha 10.10, exige rehacer el ajuste con los datos antiguos, y es el único modo de saber si la inestabilidad viene del método o de la fuente.",
          ],
          cierre:
            "La consecuencia práctica: los diagnósticos vigilan bien el componente estacional y son ciegos a los errores de nivel. Lo que ningún programa automatiza —conocer el fenómeno y comprobar si el resultado es compatible con lo que se sabe— sigue siendo la última defensa.",
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
              q: "¿Por qué no se puede validar un ajuste estacional comparándolo con el valor verdadero?",
              a: "Porque la estacionalidad no se observa: es un componente construido por el procedimiento, no una magnitud medible. No existe un dato verdadero contra el que calcular un error. Por eso los diagnósticos no comprueban que el resultado sea correcto, sino que no presenta síntomas de estar mal, que es un criterio más débil y el único disponible.",
            },
            {
              q: "En la serie del ejemplo, el periodograma de la bruta vale 110 en la frecuencia de periodo 4 y 774 en la de periodo 2. ¿Qué significa?",
              a: "Que el componente dominante es el armónico y no la frecuencia anual. El patrón alterna con fuerza entre trimestres bajos y altos —el tercero hunde la serie y el cuarto la dispara—, y esa alternancia produce un componente de periodo dos más potente que el anual. Un diagnóstico que solo vigilara la frecuencia de periodo cuatro se perdería lo más grande.",
            },
            {
              q: "¿Qué diferencia hay entre detectar estacionalidad residual en la serie ajustada y detectarla en el irregular?",
              a: "En la ajustada indica que el filtro no retiró toda la estacionalidad y se corrige ajustando mejor. En el irregular indica que la estacionalidad no es estable y el filtro persigue un patrón cambiante, lo que puede requerir acortar la ventana de estimación de los factores o revisar si hubo un cambio estructural. Son problemas distintos y por eso hay que aplicar los contrastes a las dos series.",
            },
            {
              q: "Un analista baja el umbral de detección de atípicos y todos los diagnósticos mejoran. ¿Es una buena señal?",
              a: "No necesariamente. Capturar más atípicos deja la serie más limpia, reduce el irregular y mejora todos los indicadores, pero puede significar que se han retirado como anomalías movimientos económicos reales. Los diagnósticos premian la suavidad, así que no protegen del sobreajuste: hay que vigilar aparte cuántos regresores de atípico se han incluido y si cada uno tiene justificación en el mundo real.",
            },
            {
              q: "Un escalón real se ha tratado como impulso. ¿Qué diagnóstico lo detectará?",
              a: "Ninguno del catálogo habitual. El error está en el nivel de la serie, no en su componente estacional, así que no habrá estacionalidad residual, los factores serán estables y las revisiones, pequeñas. Los contrastes vigilan la estacionalidad y son ciegos a los errores de especificación del nivel, que son precisamente los más dañinos y los peor identificados.",
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
              q: "Un contraste de estacionalidad residual no rechaza. ¿Puede concluirse que no queda estacionalidad?",
              opciones: [
                "Sí, si además el estadístico Q está por debajo de uno",
                "No, salvo que se haya aplicado también sobre el componente irregular",
                "Sí: no rechazar equivale a aceptar la hipótesis nula",
                "No: los contrastes dependen del tamaño muestral y en series cortas tienen poca potencia",
              ],
              correcta: 3,
              porque: [
                "La Q resume otros aspectos y arrastra la misma limitación de potencia.",
                "Aplicarlo también al irregular detecta un problema distinto, y no resuelve la falta de potencia.",
                "No rechazar nunca equivale a aceptar: significa que no hay evidencia suficiente, que es otra cosa.",
                "En una serie de pocos años el contraste puede no detectar una estacionalidad residual perfectamente real.",
              ],
            },
            {
              q: "Un analista baja el umbral de detección de atípicos y todos los diagnósticos mejoran. ¿Qué ha ocurrido?",
              opciones: [
                "Ha retirado como atípicos partes del comportamiento legítimo de la serie, dejando un irregular artificialmente pequeño",
                "Ha mejorado la especificación del modelo",
                "Nada relevante: los diagnósticos no dependen del umbral",
                "Ha encontrado atípicos reales que antes pasaban desapercibidos",
              ],
              correcta: 0,
              porque: [
                "Todos los indicadores mejoran porque se ha vaciado de contenido justo lo que miden. Es el caso en que los diagnósticos engañan de la forma más limpia.",
                "El modelo no ha mejorado: se le ha quitado a la serie lo que le costaba explicar.",
                "Dependen mucho: capturar más atípicos reduce el irregular y con él casi todos los estadísticos.",
                "Un umbral laxo detecta atípicos donde solo hay ruido: no todo lo que supera el corte es un episodio real.",
              ],
            },
            {
              q: "En una serie trimestral, ¿basta con mirar la frecuencia estacional de periodo cuatro?",
              opciones: [
                "No, pero el armónico solo importa en series mensuales",
                "Sí, si la serie ha sido corregida de calendario",
                "No: el armónico de periodo dos puede ser mayor, como en el ejemplo, 774 frente a 110",
                "Sí: es la frecuencia estacional propiamente dicha en datos trimestrales",
              ],
              correcta: 2,
              porque: [
                "En trimestrales el armónico es justamente el caso más relevante, porque solo hay dos frecuencias estacionales.",
                "La corrección de calendario no traslada potencia de una frecuencia a otra.",
                "Un diagnóstico que solo mire la frecuencia principal puede dar por limpia una serie con estacionalidad evidente en la otra.",
                "Es la principal y no la única: el patrón estacional trimestral genera potencia también en su armónico.",
              ],
            },
            {
              q: "¿Qué prueban los diagnósticos de un ajuste estacional?",
              opciones: [
                "Que la descomposición obtenida es la correcta",
                "Que el modelo elegido es el que genera los datos",
                "Que los componentes estimados coinciden con los verdaderos",
                "Ausencia de síntomas, no corrección del resultado: son alarmas que dirigen la revisión manual",
              ],
              correcta: 3,
              porque: [
                "No existe una descomposición correcta observable: la estacionalidad no se mide, se estima.",
                "Ningún contraste identifica el proceso generador: solo detecta incoherencias con lo esperado.",
                "No hay componentes verdaderos con los que comparar; ese es el problema de fondo de toda la validación.",
                "Pasar todos los contrastes no garantiza un buen ajuste, y suspenderlos indica dónde hay que mirar. Tratarlos como veredictos es pedirles lo que no pueden dar.",
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
            { ref: "Manual de referencia de JDemetra+, sección de diagnósticos", nota: "el catálogo completo de contrastes que implementa la herramienta, con los umbrales usados en el resumen de calidad por colores." },
            { ref: "Findley y otros, «New Capabilities and Methods of the X-12-ARIMA Program»", nota: "la exposición de los sliding spans y del análisis de historiales de revisión como diagnósticos de estabilidad." },
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment, capítulo de calidad", nota: "qué debe documentarse y transmitirse sobre la calidad del ajuste, y los umbrales orientativos del marco europeo." },
            { ref: "Ladiray y Quenneville, Seasonal Adjustment with the X-11 Method", nota: "la definición y la interpretación de los estadísticos M y de la Q, con la explicación de cómo se calibraron sus umbrales." },
          ],
        },
      ],
    },
  ],
};
