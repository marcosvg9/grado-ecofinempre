/* Ficha 10.10 — Cuentas trimestrales, revisiones y datos en tiempo real. */

export default {
  codigo: "10.10",
  titulo: "Cuentas trimestrales, revisiones y datos en tiempo real",
  nivel: 4,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "El primer dato de un trimestre y el definitivo pueden contar historias opuestas del mismo periodo. Y como las decisiones se toman con el primero, evaluar una política con la serie revisada es juzgar a alguien por información que no tenía.",
  requiere: "10.07 Producción, VAB y PIB · 4.10 Desestacionalización · 4.03 Probabilidad e inferencia",
  abre: "3.08 Política monetaria · 3.11 Deuda pública y sostenibilidad · 1.10 Economía normativa",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las **cuentas nacionales trimestrales** existen porque la política económica no puede esperar dos años a saber qué está pasando. Su función es dar una estimación coherente y oportuna de los agregados, y para lograrlo **sacrifican precisión a cambio de rapidez**: se elaboran con una fracción de la información que estará disponible al final, se apoyan en indicadores parciales de frecuencia alta y se concilian después con la contabilidad anual. Ese compromiso es deliberado y está documentado, pero rara vez se tiene presente al comentar los datos.",
            "**El primer concepto que hay que fijar es el de vintage**, o versión de un dato. La cifra de crecimiento de un trimestre no es un número: es **una sucesión de números** que se publican a lo largo de los años. Está el avance, con unas semanas de retraso; la estimación completa, con más información; las revisiones que llegan al incorporarse la contabilidad anual; y las que produce cada revisión metodológica general. Cada una es la mejor estimación disponible **en su momento**, y el conjunto de todas ellas es la única medida honesta de la incertidumbre de las cuentas, que como vimos en la ficha 4.03 no se publica en forma de intervalo.",
            "**Las revisiones tienen causas identificables y no todas son del mismo tipo.** Llega **información nueva**: encuestas que se cierran, declaraciones fiscales que se presentan, cuentas anuales que se depositan. Se aplica la **conciliación con la contabilidad anual**, que obliga a repartir las diferencias entre los trimestres del año. Se recalculan los **filtros de desestacionalización** de la ficha 4.10, que al llegar nuevas observaciones modifican el pasado aunque el dato bruto no cambie. Y hay **cambios metodológicos** que alteran toda la serie histórica sin que la economía haya variado, como explicaba la ficha 10.07.",
            "**Es importante saber que las revisiones no son ruido blanco.** Suelen presentar patrones sistemáticos: por ejemplo, tienden a revisarse al alza en las expansiones y a la baja en las recesiones, porque las fuentes tardías capturan mejor la actividad de las empresas nuevas y de las que cierran. Eso significa que **el error del primer dato es mayor justo en los puntos de giro**, que es exactamente cuando el dato más importa para decidir. Es una propiedad incómoda del sistema y perfectamente conocida por quienes lo elaboran.",
            "**De ahí nace el problema de los datos en tiempo real**, que es la aportación conceptual de esta ficha. Si se quiere evaluar una decisión de política —una subida de tipos, un plan de estímulo, una regla fiscal— hay que juzgarla con **la información que existía cuando se tomó**, no con la serie revisada de hoy. Para eso existen las **bases de datos en tiempo real**, que conservan cada vintage tal como se publicó. Estimar una regla de política con datos revisados atribuye al decisor una información que no tenía, y produce el veredicto de que se equivocó cuando quizá acertó con lo que sabía.",
            "**El caso donde esto más daño ha hecho es el de las magnitudes no observables.** La **brecha de producción** y el **saldo estructural** dependen del producto potencial, que se estima y se revisa. Sucede además algo peor: **el potencial se revisa en la misma dirección que el producto observado**, porque los métodos de estimación son en buena parte estadísticos y siguen a la serie. El resultado es que una economía que en tiempo real parecía estar por debajo de su potencial puede resultar, años después, haber estado por encima. Y sobre esas estimaciones se han construido reglas fiscales con consecuencias legales.",
            "**Un último apunte sobre el nowcasting**, que es la respuesta técnica al retraso. Consiste en estimar el trimestre **en curso** —no el futuro— combinando indicadores de frecuencia alta que sí están disponibles: afiliación, consumo eléctrico, matriculaciones, transporte, indicadores de confianza, y crecientemente datos de pagos con tarjeta. No es predicción en sentido estricto sino **medición anticipada**, y ha mejorado mucho, pero hereda un problema: los indicadores que la alimentan se desestacionalizan antes de entrar en el modelo, y por tanto arrastran la incertidumbre del extremo de la serie que describía la ficha 4.10.",
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
            { nom: "Vintage", sub: "Un dato no es un número sino una sucesión.", cols: ["$y_t^{(v)} =$ estimación de $t$ publicada en $v$"] },
            { nom: "Revisión", sub: "La diferencia entre dos versiones del mismo dato.", cols: ["$r_t = y_t^{(v_2)} - y_t^{(v_1)}$"] },
            { nom: "Revisión media", sub: "Si difiere de cero, hay sesgo sistemático.", cols: ["$\\bar r = \\dfrac{1}{n}\\sum_t r_t$"] },
            { nom: "Revisión absoluta media", sub: "La medida de magnitud, no de dirección.", cols: ["$\\mathrm{RAM} = \\dfrac{1}{n}\\sum_t |r_t|$"] },
            { nom: "Conciliación con lo anual", sub: "Reparte la diferencia entre trimestres.", cols: ["$\\sum$ trimestres $=$ dato anual"] },
            { nom: "Datos en tiempo real", sub: "Juzgar con lo que se sabía entonces.", cols: ["usar $y_t^{(v)}$ con $v =$ momento de la decisión"] },
            { nom: "Brecha de producción", sub: "Se revisa, y en la misma dirección que el PIB.", cols: ["$\\dfrac{Y - Y^*}{Y^*}$, con $Y^*$ estimado"] },
            { nom: "Nowcasting", sub: "Medir el presente, no predecir el futuro.", cols: ["estimar t con indicadores de frecuencia alta"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cinco versiones del mismo trimestre",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un trimestre cualquiera, seguido a lo largo de los años que tarda su cifra en estabilizarse. Ninguna de estas publicaciones es un error: cada una es **la mejor estimación disponible en su fecha**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 340,
          ejes: { x: "Versión", y: "% trimestral" },
          dominio: { x: [0, 5], y: [0, 0.85] },
          marcasX: [],
          marcasY: [0, 0.2, 0.4, 0.6, 0.8],
          areas: [
            { puntos: [[0.15, 0], [0.15, 0.7], [0.85, 0.7], [0.85, 0]], color: "n2" },
            { puntos: [[1.15, 0], [1.15, 0.5], [1.85, 0.5], [1.85, 0]], color: "n2" },
            { puntos: [[2.15, 0], [2.15, 0.4], [2.85, 0.4], [2.85, 0]], color: "n2" },
            { puntos: [[3.15, 0], [3.15, 0.6], [3.85, 0.6], [3.85, 0]], color: "n2" },
            { puntos: [[4.15, 0], [4.15, 0.3], [4.85, 0.3], [4.85, 0]], color: "alerta" },
          ],
          notas: [
            { x: 0.5, y: 0.76, texto: "0,7", ancla: "middle" },
            { x: 1.5, y: 0.56, texto: "0,5", ancla: "middle" },
            { x: 2.5, y: 0.46, texto: "0,4", ancla: "middle" },
            { x: 3.5, y: 0.66, texto: "0,6", ancla: "middle" },
            { x: 4.5, y: 0.36, texto: "0,3", ancla: "middle" },
            { x: 0.5, y: -0.06, texto: "Avance", ancla: "middle" },
            { x: 1.5, y: -0.06, texto: "1ª estim.", ancla: "middle" },
            { x: 2.5, y: -0.06, texto: "Rev. anual", ancla: "middle" },
            { x: 3.5, y: -0.06, texto: "2ª rev.", ancla: "middle" },
            { x: 4.5, y: -0.06, texto: "Definitivo", ancla: "middle" },
          ],
          nota: "Las cinco barras describen **el mismo trimestre**, publicado en cinco fechas distintas. El crecimiento va del **0,7 %** del avance al **0,3 %** del dato definitivo, pasando por un 0,4 % y volviendo a subir a 0,6 % antes de caer de nuevo. Ni siquiera la revisión es monótona: **la serie no converge de forma ordenada hacia la verdad**. Y conviene traducir la magnitud: en tasa anualizada, ese trimestre pasó de un **2,83 %** a un **1,21 %**, la diferencia entre una economía en clara expansión y otra que apenas se mueve.",
        },
        {
          tipo: "tabla",
          cabecera: ["Versión", "Crecimiento trimestral", "Anualizado", "Revisión respecto a la anterior"],
          filas: [
            ["Avance, a 30 días", "0,7 %", "2,83 %", "—"],
            ["Primera estimación, a 60 días", "0,5 %", "2,02 %", "−0,2 pp"],
            ["Tras la contabilidad anual", "0,4 %", "1,61 %", "−0,1 pp"],
            ["Segunda revisión anual", "0,6 %", "2,42 %", "+0,2 pp"],
            { celdas: ["Dato definitivo", "0,3 %", "1,21 %", "−0,3 pp"], clase: "total" },
          ],
          nota: "Las estadísticas del proceso son elocuentes: la **revisión media** es de −0,1 puntos y la **revisión absoluta media**, de 0,2 puntos, sobre una cifra cuya magnitud típica es de medio punto. Es decir, **el error de revisión es del orden de la mitad de lo que se está midiendo**. La revisión total del avance al definitivo es de −0,4 puntos, más que el propio dato final. Con esta aritmética a la vista, comentar la diferencia entre un 0,4 % y un 0,5 % el día de la publicación es una actividad sin contenido informativo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora el caso grave, que es cuando el dato entra en una regla.** Supongamos que en el momento de la decisión el PIB estimado era **100,7** y el producto potencial se estimaba en **102,0**. La brecha de producción resultaba de **−1,27 %**: una economía por debajo de su capacidad, que pide estímulo. Años después, el PIB se ha revisado a **100,3** y el potencial —recalculado con la serie revisada— a **99,6**. La brecha es ahora de **+0,70 %**: una economía recalentada, que pedía lo contrario.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "En tiempo real", "Con datos revisados"],
          filas: [
            ["PIB estimado", "100,7", "100,3"],
            ["Producto potencial estimado", "102,0", "99,6"],
            ["Brecha de producción", "−1,27 %", "+0,70 %"],
            { celdas: ["Tipo según la regla de Taylor", "2,36 %", "3,35 %"], clase: "total" },
          ],
          nota: "**La brecha no solo cambia de tamaño: cambia de signo**, y con ella el diagnóstico entero. Aplicando la regla de Taylor de la ficha 3.08, el tipo recomendado difiere en **casi un punto porcentual** según qué versión de los datos se use. Obsérvese además el detalle decisivo: **el potencial se ha revisado a la baja más que el PIB**, porque los métodos de estimación son en buena parte estadísticos y siguen a la serie observada. Eso hace que las brechas en tiempo real estén sistemáticamente sesgadas hacia el lado del estímulo. Sobre estimaciones con esta incertidumbre se han construido reglas fiscales europeas con consecuencias legales, que es la versión más costosa del aviso de la ficha 4.03 sobre usar una estimación como si fuera una medición.",
        },
      ],
    },
    {
      titulo: "Caso práctico: cómo se lee la coyuntura sin engañarse",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo lo anterior tiene una traducción práctica en cómo seguir la economía sin caer en las trampas del calendario estadístico. Es la ficha que cierra el plan y conviene que deje un método, no solo un diagnóstico.",
            "**Primero, jerarquizar las fuentes por fiabilidad y no por titular.** Los registros administrativos —afiliación, recaudación tributaria, comercio exterior de aduanas— son censales, se publican pronto y **apenas se revisan**. Las encuestas tienen error muestral y las estimaciones de contabilidad nacional tienen error de estimación y revisiones. Cuando un registro y una estimación discrepan en la dirección de la coyuntura, el registro suele acertar antes.",
            "**Segundo, mirar varias frecuencias a la vez.** La tasa intertrimestral desestacionalizada es sensible y frágil; la interanual del dato bruto es robusta y lenta. Cuando ambas cuentan la misma historia, la señal es fiable. Cuando discrepan, lo prudente es concluir que **no hay señal clara** y esperar, en lugar de elegir la que confirma la opinión previa. Es la recomendación operativa de la ficha 4.10.",
            "**Tercero, no comentar décimas.** Ni en el PIB, donde la revisión absoluta media es de dos décimas; ni en la tasa de paro, donde el margen muestral es de dos décimas y media; ni en el IPC, cuyos componentes volátiles pueden mover el titular sin que la tendencia haya cambiado. La disciplina de redondear a la baja la propia confianza es lo que separa el análisis del comentario.",
            "**Cuarto, distinguir siempre nivel de variación.** Los niveles de las series encadenadas están en unidades convencionales, según la ficha 10.08; las revisiones metodológicas cambian niveles sin cambiar tasas; y las comparaciones internacionales de nivel exigen paridad de poder adquisitivo y prudencia. **Casi todo el contenido económico está en las variaciones.**",
            "**Y quinto, guardar la fecha del dato.** Al construir cualquier análisis con series históricas conviene anotar de qué vintage proceden, porque la serie de hoy no es la que se publicó entonces. Si el análisis pretende juzgar decisiones pasadas, **hay que usar la información que existía en ese momento**, no la actual. Esta es la regla que menos se cumple y la que más veredictos injustos ha producido sobre política económica.",
            "**El cierre del plan es, apropiadamente, un ejercicio de humildad sobre los datos.** Nada de lo aprendido en los nueve bloques anteriores funciona mejor que la información con la que se alimenta, y esa información es una estimación con incertidumbre, elaborada bajo convenciones explícitas y revisable. Saberlo no invalida el análisis económico: **es lo que lo hace honesto**, y es la diferencia entre alguien que usa datos y alguien que los cita.",
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
            { t: "Tratar el primer dato de un trimestre como definitivo", d: "El avance se publica con una fracción de la información final. En el ejemplo, un crecimiento anunciado del 0,7 % acabó siendo del 0,3 %, y la revisión absoluta media es del orden de la mitad de la magnitud que se mide. El primer dato es una estimación oportuna, no una medición." },
            { t: "Evaluar decisiones pasadas con la serie revisada", d: "Atribuye al decisor información que no tenía. Un banco central que veía una brecha de −1,27 % actuaba de forma coherente aunque la brecha revisada resulte ser +0,70 %. Para juzgar reglas de política hay que usar bases de datos en tiempo real, que conservan cada versión tal como se publicó." },
            { t: "Suponer que las revisiones son ruido aleatorio", d: "Tienen patrones sistemáticos: al alza en expansiones y a la baja en recesiones, porque las fuentes tardías capturan mejor la actividad de las empresas que nacen y mueren. El error del primer dato es por tanto mayor justo en los puntos de giro, que es cuando más importa acertar." },
            { t: "Usar la brecha de producción como si fuera un dato", d: "Depende del producto potencial, que no se observa y se estima con métodos que se revisan y que además siguen a la serie observada. En el ejemplo cambia de signo entre versiones, y con ella el tipo recomendado en casi un punto. Sobre magnitudes así se han construido reglas fiscales con consecuencias legales." },
            { t: "Comentar variaciones que caben dentro del error de revisión", d: "Con una revisión absoluta media de dos décimas, la diferencia entre un 0,4 % y un 0,5 % no es información. Lo mismo vale para las décimas de la tasa de paro por error muestral y para el IPC por componentes volátiles. La disciplina de no comentar lo que no se distingue es lo que separa el análisis del comentario." },
            { t: "Confundir nowcasting con predicción", d: "El nowcasting estima el trimestre en curso, que ya ha ocurrido pero aún no se ha medido, combinando indicadores de frecuencia alta. No dice nada sobre el futuro, y hereda la incertidumbre del extremo de la serie de los indicadores que lo alimentan, desestacionalizados antes de entrar en el modelo." },
            { t: "Ignorar que un cambio metodológico no es un cambio económico", d: "Los benchmarks recalculan toda la serie con nuevas fuentes y criterios, y pueden mover el nivel del PIB sin que nada haya ocurrido. Como el PIB es el denominador de las ratios de deuda y déficit, esas revisiones alteran cifras con efectos legales sin que ningún agente haya actuado." },
            { t: "Fiarse de la estimación cuando el registro dice otra cosa", d: "Afiliación, recaudación y aduanas son censales, se publican pronto y apenas se revisan; las cuentas nacionales son estimaciones conciliadas. Cuando ambos discrepan sobre la dirección de la coyuntura, el registro suele adelantarse, y conviene tenerlo presente antes de defender un dato solo porque sea el oficial." },
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
            "Esta ficha cierra el bloque y el plan, y su puente es hacia atrás: todo lo estudiado depende de datos con las propiedades que aquí se describen.",
          ],
          lista: [
            "El INE publica un **calendario de disponibilidad** y una **política de revisiones** que fija cuándo y por qué se modifican las series. Consultarlos antes de construir un análisis evita sorpresas, y es la información que permite saber qué vintage se está usando.",
            "Las **cuentas trimestrales** replican la secuencia de la ficha 10.06 con menos información: algunos eslabones se estiman directamente y otros se derivan por diferencia, y precisamente esos últimos son los que más se revisan. Saber cuál es cuál explica el patrón de las revisiones.",
            "La **desestacionalización** de la ficha 4.10 genera revisiones por sí sola: al llegar nuevas observaciones se recalculan los filtros y cambia el pasado, aunque el dato bruto no se haya tocado. Una parte apreciable de las revisiones que se atribuyen a información nueva es en realidad de este origen.",
            "El **encadenamiento** de la ficha 10.08 exige conciliar los trimestres con el dato anual, y ese proceso reparte diferencias entre los cuatro trimestres del año, generando revisiones que no responden a información nueva sobre ningún trimestre en particular.",
            "Y las **reglas fiscales europeas** aplican umbrales sobre saldos estructurales estimados a partir de un producto potencial que se revisa. Es el punto donde la incertidumbre estadística se convierte en obligación jurídica, y donde el aviso de la ficha 4.04 sobre aplicar reglas nítidas a magnitudes que no lo son cuesta más caro.",
          ],
          cierre:
            "Con esto se cierra el plan, y conviene que cierre así. La economía dispone de teoría sólida y de métodos exigentes, y ambos se aplican sobre **estimaciones con incertidumbre, convenciones explícitas y revisiones**. Trabajar sabiéndolo no debilita las conclusiones: las hace defendibles, que era el propósito del bloque 4 y de todo lo demás.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El avance decía 0,7 % y el definitivo dice 0,3 %. ¿Se equivocó el instituto de estadística?", a: "No: cada versión era la mejor estimación posible con la información disponible en su fecha. El avance se elabora a treinta días con una fracción de las fuentes finales. La revisión absoluta media del proceso es de dos décimas sobre una magnitud típica de medio punto, es decir, el error es del orden de la mitad de lo que se mide." },
            { q: "¿Por qué no se puede evaluar una decisión de política con la serie de hoy?", a: "Porque atribuye al decisor información que no tenía. Quien veía una brecha de −1,27 % actuaba de forma coherente aunque hoy la brecha revisada sea de +0,70 %. Para juzgar reglas de política existen bases de datos en tiempo real que conservan cada versión tal como se publicó." },
            { q: "¿Por qué la brecha de producción cambia de signo entre versiones?", a: "Porque se revisan sus dos componentes, y el potencial se revisa a la baja más que el PIB observado: los métodos de estimación son en buena parte estadísticos y siguen a la serie. Eso sesga sistemáticamente las brechas en tiempo real hacia el lado del estímulo, y el tipo recomendado por la regla de Taylor difiere en casi un punto." },
            { q: "¿Son las revisiones ruido aleatorio?", a: "No. Tienden a ser al alza en expansiones y a la baja en recesiones, porque las fuentes tardías capturan mejor la actividad de las empresas que nacen y de las que cierran. La consecuencia incómoda es que el error del primer dato es mayor justo en los puntos de giro, que es cuando el dato más importa." },
            { q: "¿Qué parte de las revisiones no viene de información nueva?", a: "Una parte apreciable. El recálculo de los filtros de desestacionalización modifica el pasado al llegar nuevas observaciones aunque el dato bruto no cambie, y la conciliación con la contabilidad anual reparte diferencias entre los cuatro trimestres. Además, los cambios metodológicos alteran toda la serie sin que la economía haya variado." },
            { q: "Un registro administrativo y una estimación de contabilidad nacional discrepan. ¿Cuál seguir?", a: "El registro suele adelantarse: afiliación, recaudación y aduanas son censales, se publican pronto y apenas se revisan, mientras que las cuentas son estimaciones conciliadas sujetas a revisión. Cuando ambos coinciden, la señal es fiable; cuando discrepan, lo prudente es concluir que aún no hay señal clara." },
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
            { ref: "Eurostat, Handbook on Quarterly National Accounts", nota: "cómo se elaboran, qué se estima directamente y qué se deriva, y por qué las revisiones tienen el patrón que tienen." },
            { ref: "INE, política de revisiones y calendario de disponibilidad", nota: "los documentos que dicen cuándo y por qué cambia cada serie española; imprescindibles antes de construir un análisis con ellas." },
            { ref: "Orphanides, «Monetary Policy Rules Based on Real-Time Data», 2001", nota: "el artículo que demostró que juzgar la política monetaria con datos revisados produce veredictos equivocados; el origen del enfoque." },
            { ref: "Croushore, «Frontiers of Real-Time Data Analysis», 2011", nota: "panorámica de qué cambia al usar vintages en lugar de series finales; útil para ver el alcance del problema." },
            { ref: "AIReF, informes sobre estimación del producto potencial", nota: "el caso español de la magnitud no observable que entra en reglas con consecuencias legales, con la incertidumbre explicitada." },
          ],
        },
      ],
    },
  ],
};
