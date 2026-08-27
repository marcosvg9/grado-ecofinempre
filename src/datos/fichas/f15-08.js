/* Ficha 15.08 — Política de revisiones y esquemas de refresco. */

export default {
  codigo: "15.08",
  titulo: "Política de revisiones y esquemas de refresco",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "Cada dato nuevo cambia el pasado ya publicado, y no porque nadie se haya equivocado. Cuánto se deja cambiar es una decisión de política estadística que arbitra entre dos cosas incompatibles: la mejor estimación posible en cada momento y una serie que no se mueva bajo los pies del usuario.",
  requiere: "15.07 Diagnósticos de calidad · 15.04 Valores atípicos · 10.10 Cuentas trimestrales",
  abre: "15.09 Benchmarking y conciliación · 15.12 Nowcasting · 15.11 Agregación directa e indirecta",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una serie ajustada se revisa por dos motivos que conviene separar desde el principio. El primero es que **se revise el dato bruto**, algo que la ficha 10.10 trataba: llegan fuentes más completas, se corrigen errores, las cuentas anuales sustituyen a las estimaciones trimestrales. El segundo es que **cambie el procedimiento de ajuste sin que el dato bruto se toque**, y es el que ocupa esta ficha. El usuario no puede distinguirlos, y eso es parte del problema.",
            "Las fuentes de revisión propias del ajuste son cuatro y actúan a la vez. Las **predicciones que extienden la serie** se sustituyen por datos reales, y como los últimos valores ajustados dependían de ellas, cambian. El **modelo se reestima** con una observación más, así que sus parámetros y por tanto sus filtros varían. Los **factores estacionales se recalculan** con la nueva información, lo que altera el pasado entero, no solo el extremo. Y la **detección automática puede reclasificar un atípico**, con el efecto permanente que describía la ficha 15.04.",
            "Frente a eso hay una escalera de políticas, de más adaptativa a más estable. El **ajuste concurrente** reestima todo en cada publicación: modelo, atípicos, factores. Produce la mejor estimación disponible en cada momento y el peor perfil de revisiones. En el extremo opuesto, los **factores proyectados** consisten en estimar los factores una vez al año, proyectarlos para los doce meses o cuatro trimestres siguientes y aplicarlos fijos: la serie no se revisa en absoluto durante el año, a costa de usar factores que se sabe que ya no son los mejores.",
            "En medio está lo que hace la mayoría de los institutos europeos, el **ajuste corriente parcial**: se congela la especificación —modelo, atípicos, regresores de calendario— durante todo el año, y solo se reestiman los parámetros y los factores con cada dato nuevo. Una vez al año se hace una **reidentificación completa**: se revisa el modelo, se revisan los atípicos, se rehace la serie entera y se publica una revisión anunciada. Es un compromiso que reconoce explícitamente que la estabilidad tiene valor propio.",
            "El argumento a favor de la estabilidad no es la comodidad. Una serie que se mueve cada trimestre por razones metodológicas **destruye la posibilidad de evaluar decisiones pasadas**: si el dato sobre el que se decidió una política ya no existe, no se puede juzgar si la decisión era razonable con la información disponible. Es exactamente el problema de los datos en tiempo real de la ficha 10.10. Además, cada revisión consume credibilidad: el usuario que ve cambiar una cifra sin explicación no distingue entre un procedimiento funcionando bien y un error corregido a escondidas.",
            "De ahí que la exigencia central no sea revisar poco sino **revisar de forma anunciada**. Las directrices europeas piden que cada instituto publique su política de revisiones —cuándo se reidentifica, qué se congela, qué tramo se recalcula— y la respete. Un calendario de revisiones conocido convierte un movimiento inesperado en un acontecimiento previsto, y esa es toda la diferencia para quien construye encima de la serie.",
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
            { nom: "Revisión por dato", sub: "Origen externo al ajuste.", cols: ["Fuentes nuevas, correcciones, cuentas anuales"] },
            { nom: "Revisión por procedimiento", sub: "El dato bruto no cambia.", cols: ["Predicciones, reestimación, factores, atípicos"] },
            { nom: "Ajuste concurrente", sub: "Máxima precisión puntual.", cols: ["Reestima todo en cada publicación"] },
            { nom: "Ajuste corriente parcial", sub: "El compromiso habitual.", cols: ["Especificación congelada · parámetros y factores reestimados"] },
            { nom: "Factores proyectados", sub: "Máxima estabilidad.", cols: ["Factores fijos durante todo el año, estimados una vez"] },
            { nom: "Reidentificación anual", sub: "El punto de revisión anunciado.", cols: ["Se revisa modelo, atípicos y calendario una vez al año"] },
            { nom: "Ventana de revisión", sub: "Cuánto pasado se recalcula.", cols: ["Los últimos n años · el resto se congela"] },
            { nom: "Historial de revisiones", sub: "Cómo se mide el coste de la política.", cols: ["Recalcular con la información de cada fecha pasada"] },
            { nom: "Exigencia europea", sub: "No revisar poco: revisar anunciado.", cols: ["Publicar la política y respetar el calendario"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: qué se revisó y cuánto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre la serie del bloque, simulando el proceso real: se rehace el ajuste como si solo se dispusiera de los datos hasta cada trimestre, y se compara la **primera estimación** de cada dato con el valor que tiene en la serie completa. Ningún dato bruto cambia en toda la simulación: **todas las diferencias proceden del procedimiento**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Trimestre", "Primera estimación", "Valor final", "Revisión en nivel", "Tasa inicial", "Tasa final"],
          filas: [
            ["T9", "103,99", "104,00", "+0,018", "0,62 %", "0,63 %"],
            ["T10", "104,83", "104,75", "−0,079", "0,80 %", "0,72 %"],
            ["T11", "104,91", "104,95", "+0,031", "0,07 %", "0,18 %"],
            { celdas: ["T12", "106,15", "106,15", "0,000", "1,15 %", "1,15 %"], clase: "total" },
          ],
          nota: "La revisión media absoluta del **nivel** es de **0,032**, sobre una serie que vale unos 105: tres centésimas de punto porcentual. Parece despreciable. Pero mírense las dos últimas columnas: en T11 la tasa pasa de **0,07 % a 0,18 %**, una revisión de **0,11 puntos sobre una tasa final de 0,18**. Más de la mitad del dato publicado.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Trimestre", y: "Tasa intertrimestral %" },
          dominio: { x: [9, 12], y: [0, 1.45] },
          marcasX: [9, 10, 11, 12],
          marcasY: [0, 0.5, 1],
          series: [
            {
              nombre: "Primera estimación",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [9.1, 1.33],
              puntos: [[9, 0.62], [10, 0.80], [11, 0.07], [12, 1.15]],
            },
            {
              nombre: "Valor final",
              color: "acento",
              etiquetaEn: [9.1, 1.08],
              puntos: [[9, 0.63], [10, 0.72], [11, 0.18], [12, 1.15]],
            },
          ],
          nota: "Las dos líneas cuentan historias parecidas salvo en **T11**, donde la primera estimación sugería un frenazo casi total —siete centésimas— y el dato final lo sitúa en dieciocho. Quien comentara ese trimestre en su momento habría hablado de estancamiento; con la serie actual, de desaceleración moderada. **Ambas cifras fueron oficiales y ningún dato bruto se corrigió.**",
        },
        {
          tipo: "parrafos",
          items: [
            "La lección aritmética es general y merece enunciarse: **las tasas amplifican las revisiones del nivel**. Una tasa es el cociente de dos números casi iguales, así que un error pequeño en cualquiera de los dos se convierte en un error grande en el cociente. Con niveles en torno a 105 y crecimientos de medio punto, una revisión de nivel de 0,08 —menos de una milésima parte— produce una revisión de tasa de 0,08 puntos, que es un sexto del crecimiento típico.",
            "De ahí una advertencia sobre cómo se comunican las revisiones. Un instituto que informe de que «la revisión media del nivel es del 0,03 %» está siendo exacto y engañoso a la vez, porque el usuario no lee niveles sino tasas. La medida honesta del coste de una política de revisiones es la **revisión de la tasa**, y es la que las directrices europeas piden documentar.",
            "En la simulación, la revisión máxima de tasa es de **0,11 puntos** y la media de las cuatro observadas ronda los cinco centésimas. Son magnitudes pequeñas porque el ejemplo es benigno: serie corta, sin atípicos, con factores estacionales estables y ajustada por un método simple. En series reales, con reidentificación de modelo y reclasificación de atípicos, las revisiones de tasa de una o dos décimas son habituales, y en puntos de giro del ciclo pueden ser mayores, que es precisamente cuando más importan.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: elegir política sin poder ganar en todo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un instituto que tiene que fijar su política de revisiones se enfrenta a un compromiso que no admite solución óptima, solo una elección informada. Recorrer las tres opciones con sus consecuencias es la mejor forma de ver por qué casi todos acaban en el mismo sitio.",
            "**Concurrente.** Reestimar todo cada trimestre da, por construcción, la mejor estimación posible con la información disponible. Es lo que haría un investigador. El coste es que la serie se mueve continuamente: cambian el modelo, los atípicos, los factores y con ellos todo el pasado. Para un usuario que construye modelos encima —un banco central, un servicio de estudios— eso significa reestimar sus propios modelos cada trimestre sobre una base distinta, y no poder reproducir lo que hizo el trimestre anterior.",
            "**Factores proyectados.** Estimar los factores una vez al año y aplicarlos fijos elimina las revisiones durante doce meses. La serie es perfectamente estable y perfectamente reproducible. El coste aparece cuando la economía hace algo inesperado: los factores proyectados no lo saben, y la serie ajustada arrastra durante meses un patrón estacional que ya no describe la realidad. Es la política más frágil ante cambios estructurales, y precisamente los episodios que más interesa medir bien son los que rompen el patrón.",
            "**Corriente parcial.** Congelar la especificación durante el año y reestimar solo parámetros y factores captura la mayor parte de la ganancia del concurrente eliminando su peor fuente de inestabilidad, que es la reidentificación del modelo y la reclasificación de atípicos. Las revisiones siguen existiendo pero son menores y, sobre todo, **no cambian de naturaleza**: el usuario sabe que la serie se moverá un poco cada trimestre y mucho una vez al año, en una fecha conocida.",
            "Hay un elemento que suele decidir la elección y no es estadístico: la **posibilidad de explicar el resultado**. Ante una revisión, un instituto tiene que poder decir qué la causó. Con política corriente parcial la respuesta es sencilla —han entrado datos nuevos y los factores se han reestimado—. Con política concurrente la respuesta puede ser que el programa identificó otro modelo, lo que es cierto, correcto y muy difícil de comunicar sin que suene a arbitrariedad. En estadística pública, **una decisión defendible vale más que una óptima**, y esa es en buena medida la razón de que la mayoría de los institutos europeos hayan convergido en el compromiso intermedio.",
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
            { t: "Atribuir toda revisión a una corrección de datos", d: "Buena parte procede del procedimiento de ajuste sin que ningún dato bruto se haya tocado: las predicciones se sustituyen por datos reales, el modelo se reestima y los factores se recalculan afectando también al pasado. El usuario no puede distinguir ambas fuentes, y por eso conviene que el instituto las separe al informar." },
            { t: "Medir el coste de las revisiones en niveles", d: "Es exacto y engañoso, porque el usuario lee tasas y las tasas amplifican. En el ejemplo, una revisión de nivel de 0,08 sobre 105 —menos de una milésima— produce una revisión de tasa de 0,08 puntos, un sexto del crecimiento típico. La medida honesta es la revisión de la tasa." },
            { t: "Elegir la política concurrente por ser la más precisa", d: "Da la mejor estimación en cada momento y el peor perfil de revisiones. Para quien construye modelos encima de la serie eso significa una base distinta cada trimestre y la imposibilidad de reproducir el análisis anterior. La precisión puntual no es el único criterio, ni el más importante para una estadística pública." },
            { t: "Suponer que los factores proyectados son la opción segura", d: "Eliminan las revisiones durante el año a costa de aplicar factores que pueden haber dejado de describir la realidad. Es la política más frágil ante cambios estructurales, y los episodios que rompen el patrón estacional son precisamente los que más interesa medir bien." },
            { t: "Revisar sin calendario anunciado", d: "La exigencia europea no es revisar poco sino revisar de forma previsible. Un movimiento anunciado es un acontecimiento previsto; el mismo movimiento sin avisar consume credibilidad, porque el usuario no distingue un procedimiento funcionando bien de un error corregido en silencio." },
            { t: "Comparar series descargadas en fechas distintas", d: "Una serie ajustada guardada hace un año y la actual difieren aunque ningún dato bruto se haya corregido, porque los factores se han reestimado. Cualquier análisis que mezcle vintages distintos está comparando metodología además de economía, y conviene fechar siempre la descarga." },
            { t: "Evaluar decisiones pasadas con la serie revisada", d: "Juzgar una política con datos que no existían cuando se tomó la decisión es juzgar a alguien por información que no tenía. La evaluación honesta exige la serie tal como estaba publicada en su momento, y por eso algunos institutos mantienen bases de datos de vintages." },
            { t: "Confundir estabilidad con calidad", d: "Una serie que no se revisa no es por ello más fiable: los factores proyectados no se revisan y pueden estar equivocados durante un año entero. La estabilidad es un valor para el usuario, no una medida de exactitud, y confundirlos lleva a preferir procedimientos que ocultan su propio error." },
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
            "En contabilidad nacional la política de revisiones del ajuste tiene que encajar dentro de una política de revisiones más amplia, y el orden de prelación no lo decide el estadístico del ajuste.",
          ],
          lista: [
            "El calendario de revisiones de las cuentas está fijado por el sistema: las estimaciones trimestrales se sustituyen por las **cuentas anuales** cuando estas se publican, y estas a su vez se revisan en las llamadas revisiones de referencia. La política de refresco del ajuste debe **sincronizarse con ese calendario**, porque no tiene sentido reidentificar el modelo en un trimestre en el que además va a cambiar toda la serie bruta.",
            "Cuando llega la revisión de las cuentas anuales, cambian a la vez el dato bruto y el ajuste, y separar ambas contribuciones exige **rehacer el ajuste con los datos antiguos**. Pocos institutos publican esa descomposición, y sin ella el usuario no puede saber si una revisión de dos décimas viene de información nueva o de la reestimación de los factores. Es la misma carencia que señalaba la ficha 10.10.",
            "El **benchmarking** de la ficha 15.09 introduce una fuente adicional. Al conciliar la serie trimestral con el nuevo total anual, se modifican trimestres ya publicados aunque su dato bruto y su ajuste no hayan cambiado: cambia el ancla. Esa revisión es de naturaleza contable, no estadística, y conviene contabilizarla aparte al documentar el origen de los movimientos.",
            "La **coherencia entre partidas** obliga a revisar en bloque. No se puede reidentificar el modelo del consumo final (**P.3**) sin revisar a la vez el del PIB, porque la identidad de la ficha 13.02 dejaría de cumplirse. Por eso la reidentificación anual se hace sobre el cuadro completo y en una sola fecha, y no serie a serie cuando cada una lo necesitaría.",
            "Existe además una razón institucional dura: los datos de contabilidad nacional alimentan **procedimientos con consecuencias jurídicas**, desde el cálculo del déficit para el procedimiento de déficit excesivo de la ficha 3.11 hasta la contribución al presupuesto europeo. Una serie que cambie fuera de calendario altera magnitudes con efectos legales, lo que convierte la previsibilidad de las revisiones en un requisito y no en una cortesía.",
          ],
          cierre:
            "La consecuencia práctica: la política de revisiones del ajuste no se decide en solitario. Se subordina al calendario de las cuentas, se aplica al cuadro completo a la vez y debe publicarse por adelantado.",
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
              q: "Enumera las fuentes de revisión de una serie ajustada cuando el dato bruto no cambia.",
              a: "Cuatro. Las predicciones que extendían la serie se sustituyen por datos reales, y los últimos valores ajustados dependían de ellas. El modelo se reestima con una observación más y cambian sus parámetros y sus filtros. Los factores estacionales se recalculan, lo que altera todo el pasado y no solo el extremo. Y la detección automática puede reclasificar un atípico, con efecto permanente sobre el nivel.",
            },
            {
              q: "La revisión media del nivel es de 0,032 sobre una serie que vale 105. ¿Por qué no es una buena medida del coste?",
              a: "Porque el usuario lee tasas, y las tasas amplifican las revisiones del nivel: son el cociente de dos números casi iguales, así que un error pequeño en cualquiera se convierte en un error grande en el cociente. En el ejemplo, T11 pasa de una tasa de 0,07 % a una de 0,18 %: la revisión de 0,11 puntos es más de la mitad del dato final, pese a que el nivel apenas se movió tres centésimas.",
            },
            {
              q: "¿Qué distingue el ajuste corriente parcial del concurrente?",
              a: "El corriente parcial congela la especificación —modelo, atípicos, regresores de calendario— durante todo el año y solo reestima parámetros y factores con cada dato nuevo; una vez al año hace una reidentificación completa anunciada. El concurrente reestima todo en cada publicación. El primero elimina la peor fuente de inestabilidad, que es la reidentificación del modelo, a cambio de mantener durante meses una especificación que se sabe subóptima.",
            },
            {
              q: "¿Por qué los factores proyectados no son la opción segura pese a no producir revisiones?",
              a: "Porque estabilidad no es exactitud. Los factores se estiman una vez al año y se aplican fijos, así que si el patrón estacional cambia, la serie arrastra durante meses factores que ya no describen la realidad y no lo señala. Es la política más frágil ante cambios estructurales, y los episodios que rompen el patrón son precisamente los que más interesa medir bien.",
            },
            {
              q: "¿Por qué la reidentificación anual se hace sobre el cuadro completo de cuentas y no serie a serie?",
              a: "Porque las partidas deben cumplir las identidades contables entre sí. Reidentificar el modelo del consumo final sin revisar a la vez el del PIB rompería la identidad del enfoque del gasto. A eso se suma que el calendario debe sincronizarse con el de las cuentas anuales, ya que no tiene sentido reidentificar en un trimestre en el que además va a cambiar toda la serie bruta.",
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
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment, capítulo de política de revisiones", nota: "las opciones de refresco y la exigencia de publicar y respetar un calendario; el marco de referencia europeo." },
            { ref: "OCDE, Data and Metadata Reporting and Presentation Handbook", nota: "las prácticas recomendadas sobre comunicación de revisiones y sobre el mantenimiento de bases de datos de vintages." },
            { ref: "Croushore, «Frontiers of Real-Time Data Analysis»", nota: "por qué evaluar políticas con series revisadas distorsiona el juicio, y cómo se construyen y usan las bases de datos en tiempo real." },
            { ref: "INE, política de revisiones de la Contabilidad Nacional Trimestral", nota: "el calendario concreto del caso español, qué se congela y qué tramo se recalcula en cada publicación." },
          ],
        },
      ],
    },
  ],
};
