/* Ficha 18.04 — Estabilidad presupuestaria y reglas fiscales. */

export default {
  codigo: "18.04",
  titulo: "Estabilidad presupuestaria y reglas fiscales",
  nivel: 3,
  bloque: "Presupuesto y financiación pública",
  tiempo: "5 h",
  nucleo:
    "Las reglas fiscales existen porque el déficit tiene un sesgo político al alza: los beneficios del gasto son concentrados y presentes y su coste es difuso y futuro. Su diseño es un compromiso entre atar esa tendencia y no impedir que la política fiscal reaccione cuando la economía cae, y por eso la regla que mejor funciona no vigila el déficit sino el gasto.",
  requiere: "18.01 El presupuesto público · 18.03 Estructuras presupuestarias · 3.11 Deuda pública y sostenibilidad",
  abre: "18.06 Financiación autonómica · 18.08 Control y fiscalización",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de discutir qué regla fiscal conviene hay que entender **por qué hace falta alguna**. La respuesta es el **sesgo deficitario**: en una democracia, los beneficios de gastar más o recaudar menos son **concentrados, visibles e inmediatos**, mientras que el coste —intereses futuros, menos margen ante la próxima crisis— es **difuso, invisible y lo soportan gobiernos y votantes posteriores**. Ningún actor individual se comporta irracionalmente y el resultado agregado es una tendencia sostenida al déficit. Una regla fiscal es un compromiso previo contra la tentación futura.",
            "El **problema del diseño** es que la disciplina y la estabilización tiran en direcciones opuestas justo cuando más importa. Una regla que exija equilibrio todos los años obliga a recortar en recesión, cuando los ingresos caen y el gasto social sube por sí solos: es **procíclica** y amplifica la crisis en lugar de amortiguarla. Una regla laxa no ata nada. **Toda la ingeniería de las reglas fiscales consiste en atar el largo plazo sin impedir la reacción de corto**, y ninguna versión lo ha resuelto del todo.",
            "El marco español nace de la reforma del **artículo 135 de la Constitución** en 2011 y de la **Ley Orgánica 2/2012**, que traduce el marco europeo. Establece tres reglas simultáneas: un **objetivo de déficit estructural**, una **regla de gasto** y un **límite de deuda** del 60 % del PIB con sendas de reducción. Se aplican a todas las administraciones, con objetivos diferenciados por subsector, y se acompañan de **medidas preventivas, correctivas y coercitivas** que van desde la advertencia hasta la retención de transferencias.",
            "**El déficit estructural** es el saldo depurado del ciclo y de las medidas puntuales: lo que quedaría si la economía estuviera en su nivel potencial. Conceptualmente es el indicador correcto, porque distingue el déficit que desaparece solo cuando la economía se recupera del que persiste. Su problema es **operativo**: exige estimar el PIB potencial y la brecha de producción, que son magnitudes **no observables**, se revisan mucho y precisamente en las recesiones se revisan a la baja, con lo que parte del déficit que parecía cíclico se reclasifica después como estructural. **Una regla basada en una variable que se conoce con retraso y con error es difícil de hacer cumplir.**",
            "De ahí que el peso se haya ido desplazando hacia la **regla de gasto**, que es la pieza más robusta del sistema y la que conviene entender bien. Limita el crecimiento del **gasto computable** a una tasa de referencia ligada al **crecimiento potencial de medio plazo**. El gasto computable excluye intereses, prestaciones por desempleo y la parte financiada con fondos finalistas, precisamente para no penalizar lo que se mueve con el ciclo. Y tiene una cláusula esencial: **si se aprueban medidas permanentes de aumento de ingresos, el techo sube en esa misma cuantía**; si se aprueban rebajas permanentes, baja.",
            "**Esa simetría es lo que hace inteligente a la regla de gasto.** No prohíbe gastar más: prohíbe gastar más **sin financiarlo de forma estable**. Y como se expresa sobre una variable **observable y controlable** por el Gobierno —lo que gasta— en lugar de sobre una variable que depende del ciclo —lo que recauda—, es contable, verificable y no obliga a recortar cuando los ingresos caen por una recesión. Es, además, **anticíclica de forma automática**: en una expansión con ingresos extraordinarios, el gasto no puede seguirlos, así que el superávit se acumula.",
            "El **marco europeo** se reformó en 2024 con esa misma lógica. Sustituye el entramado anterior por **planes fiscales y estructurales a medio plazo** de cuatro o cinco años, cuyo indicador operativo único es la **senda de gasto primario neto**, negociada con la Comisión a partir de un análisis de sostenibilidad de la deuda de cada país. Los valores de referencia del 3 % de déficit y el 60 % de deuda siguen en el Tratado, pero el instrumento de vigilancia diaria ya no es el saldo sino el gasto. **Es el reconocimiento explícito de que la regla que funciona es la que se puede medir sin discutir.**",
            "Queda una pieza sin la cual el sistema no se sostiene: **alguien independiente que vigile**. Las previsiones macroeconómicas que sustentan un presupuesto las hace el Gobierno, y hay evidencia internacional consistente de que tienden a ser optimistas, porque un cuadro macro alegre relaja todas las restricciones a la vez. Por eso el marco europeo exige **instituciones fiscales independientes** —en España la **AIReF**— que avalen o cuestionen esas previsiones **antes** de que el presupuesto se vote. Es la diferencia entre auditar lo ya ocurrido y verificar la premisa, y es la función que la ficha 18.08 desarrolla.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Regla", "Sobre qué opera", "Fortaleza y debilidad"],
          filas: [
            { nom: "Objetivo de déficit estructural", sub: "Saldo depurado de ciclo y medidas puntuales.", cols: ["El indicador conceptualmente correcto", "Depende del PIB potencial, no observable y muy revisado"] },
            { nom: "Regla de gasto", sub: "Crecimiento del gasto computable.", cols: ["Observable, controlable y anticíclica", "No limita las rebajas de ingresos por sí sola"] },
            { nom: "Límite de deuda", sub: "60 % del PIB con senda de reducción.", cols: ["Ancla el largo plazo", "El denominador se mueve por precios y crecimiento"] },
            { nom: "Senda de gasto neto primario", sub: "El indicador europeo desde 2024.", cols: ["Un solo instrumento, plurianual y verificable", "Requiere un análisis de sostenibilidad discutible"] },
            { nom: "Institución fiscal independiente", sub: "AIReF y homólogas europeas.", cols: ["Verifica la premisa antes de votar", "Su fuerza es reputacional, no coercitiva"] },
          ],
          nota: "La segunda y la cuarta fila son la misma idea en dos escalas: **vigilar lo que el Gobierno controla y no lo que depende del ciclo**. El desplazamiento del saldo hacia el gasto es el aprendizaje de treinta años de reglas fiscales europeas.",
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
            { nom: "Descomposición del saldo", sub: "Cíclico más estructural.", cols: ["$S = S_e + \\varepsilon \\cdot \\mathrm{brecha}$"] },
            { nom: "Techo de la regla de gasto", sub: "Crece con el potencial, no con los ingresos.", cols: ["$G_{t+1} \\leq G_t\\,(1 + g^{*})$"] },
            { nom: "Ajuste por medidas de ingreso", sub: "Solo si son permanentes.", cols: ["$G_{t+1} \\leq G_t\\,(1 + g^{*}) + \\Delta I_{perm}$"] },
            { nom: "Dinámica de la deuda", sub: "La ecuación que gobierna el largo plazo.", cols: ["$\\Delta d = (r - g)\\,d - s_p$"] },
            { nom: "Superávit primario que estabiliza", sub: "Lo que hay que lograr para que $d$ no crezca.", cols: ["$s_p^{*} = (r - g)\\,d$"] },
            { nom: "Condición favorable", sub: "Con crecimiento por encima del tipo, la deuda se diluye.", cols: ["$r < g \\Rightarrow s_p^{*} < 0$"] },
          ],
          nota: "Las tres últimas líneas son la aritmética de la sostenibilidad y explican por qué el debate cambió tanto tras 2014: **cuando el tipo de interés es inferior al crecimiento nominal, la deuda se reduce sola aunque haya déficit primario**. Cuando esa relación se invierte, la misma deuda exige superávit para no crecer.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cómo opera la regla de gasto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una administración tiene un **gasto computable de 100.000 millones** y la tasa de referencia de crecimiento del gasto para el año siguiente es del **2,6 %**. Quiere además aprobar un nuevo programa de 1.000 millones anuales. Vemos qué le permite y qué le exige la regla.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Cálculo", "Techo de gasto"],
          filas: [
            ["Sin medidas de ingreso", "100.000 × 1,026", "102.600 millones"],
            ["Margen disponible", "102.600 − 100.000", "2.600 millones"],
            ["Con subida permanente de ingresos de 1.000", "102.600 + 1.000", "103.600 millones"],
            ["Con rebaja permanente de ingresos de 1.000", "102.600 − 1.000", "101.600 millones"],
            { celdas: ["Si el ingreso extra es un ingreso puntual", "No modifica el techo", "102.600 millones"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El programa de 1.000 millones cabe en el margen de 2.600 sin necesidad de nada más**, siempre que el resto del gasto crezca menos de un 1,6 %. La regla no impide crear programas nuevos: obliga a **elegir**, que es exactamente lo que un presupuesto debería hacer y lo que el sesgo deficitario tiende a evitar.",
            "**La fila decisiva es la última.** Si la administración obtiene 1.000 millones extra por un ingreso **puntual** —una privatización, una liquidación favorable, un pico de recaudación por inflación— **el techo no se mueve**. Y eso es lo que convierte a la regla en un mecanismo anticíclico automático: en los años buenos, los ingresos extraordinarios no pueden gastarse y se traducen en menor déficit. El error que la regla previene es precisamente el que se cometió en la burbuja: consolidar gasto permanente sobre ingresos transitorios que después desaparecieron.",
            "**Y la simetría de las filas tercera y cuarta es el rasgo que más se ignora.** Una rebaja fiscal permanente **reduce el techo de gasto**, así que la regla no permite bajar impuestos y mantener el gasto: obliga a que la rebaja se pague. Se suele presentar la regla de gasto como una restricción sobre quienes quieren gastar, y es igual de restrictiva para quienes quieren rebajar impuestos. **Ata las dos mitades del sesgo deficitario, no solo una.**",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la cláusula de escape y para qué sirve",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En 2020 la Unión Europea activó por primera vez la **cláusula general de salvaguardia** y España suspendió las reglas fiscales. Las administraciones pudieron desplegar ERTE, refuerzo sanitario y avales sin límite de gasto. Para muchos observadores aquello demostró que las reglas «no servían»; **la lectura correcta es la contraria: funcionaron exactamente como estaban diseñadas**.",
            "**Una regla fiscal sin cláusula de escape es una regla que se incumple.** Ante un shock que ningún gobierno pudo prever ni evitar, exigir el ajuste habría sido procíclico hasta el absurdo y políticamente inviable, así que la regla se habría roto de facto y con ella su credibilidad para el futuro. Prever la excepción **dentro** de la norma —con supuestos tasados, activación reglada y duración limitada— es lo que permite que la regla siga siendo creíble cuando se reactiva. La alternativa no es una regla más dura: es ninguna regla.",
            "**El problema real de las cláusulas de escape es la salida, no la entrada.** Activarlas es fácil y consensuado; desactivarlas exige decidir que la emergencia terminó, con una economía todavía frágil y un gasto ya instalado en las bases presupuestarias. Buena parte del gasto de emergencia tiende a consolidarse, y ahí es donde la distinción del ejemplo numérico entre medidas **permanentes** y **puntuales** deja de ser técnica y se vuelve decisiva: al reactivarse la regla, el gasto que se hizo permanente ya ocupa el techo.",
            "**La lección de diseño institucional que conviene retener** es que una regla fiscal no se juzga por si se cumple siempre, sino por **si su incumplimiento es visible, tasado y temporal**. Las reglas europeas anteriores fallaron no tanto por su nivel de exigencia como por acumular excepciones discrecionales, procedimientos que nunca llegaban a sancionar y objetivos que se renegociaban cada año. La reforma de 2024 responde a ese diagnóstico: menos indicadores, plazos más largos y un único instrumento observable, a cambio de una negociación inicial país por país.",
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
            { t: "Creer que las reglas fiscales prohíben el déficit", d: "Limitan su componente estructural y el ritmo del gasto, no la existencia de déficit. El saldo cíclico se acepta precisamente para que los estabilizadores automáticos funcionen: una regla que exigiera equilibrio todos los años sería procíclica." },
            { t: "Tratar el déficit estructural como un dato observable", d: "Depende del PIB potencial y de la brecha de producción, que se estiman y se revisan mucho, y a la baja justo en las recesiones. Por eso las reglas se han desplazado hacia el gasto, que sí se observa y se controla." },
            { t: "Pensar que la regla de gasto solo ata a quien quiere gastar", d: "Es simétrica: una rebaja permanente de ingresos reduce el techo en la misma cuantía. No permite bajar impuestos manteniendo el gasto, igual que no permite subir el gasto sin financiarlo de forma estable." },
            { t: "Aumentar el techo de gasto con ingresos extraordinarios", d: "Solo lo modifican las medidas permanentes. Una privatización o un pico transitorio de recaudación no elevan el techo, y ese es el mecanismo que impide consolidar gasto estable sobre ingresos que van a desaparecer." },
            { t: "Interpretar la activación de la cláusula de escape como un fracaso de la regla", d: "Es parte del diseño. Una regla sin excepción tasada se rompe de hecho ante un shock y pierde credibilidad. El problema difícil no es activarla sino desactivarla, cuando el gasto de emergencia ya está en las bases." },
            { t: "Olvidar que la deuda depende de la diferencia entre tipo y crecimiento", d: "Con el tipo de interés por debajo del crecimiento nominal, la ratio de deuda se reduce incluso con déficit primario; cuando esa relación se invierte, la misma deuda exige superávit para no crecer. El esfuerzo necesario no lo fija solo la política fiscal." },
            { t: "Suponer que basta con auditar la ejecución", d: "Si las previsiones macroeconómicas que sustentan el presupuesto son optimistas, el incumplimiento está incorporado antes de empezar. De ahí que el marco europeo exija una institución independiente que avale las previsiones antes de la votación." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Las reglas se miden en SEC, y por eso el perímetro importa tanto",
          texto:
            "Todos los objetivos de estabilidad se expresan en términos de **contabilidad nacional**, no presupuestarios: el déficit es la **capacidad o necesidad de financiación B.9** del sector **S.13 Administraciones Públicas**, y la deuda es la **deuda PDE**, un subconjunto de los pasivos valorado a nominal. La consecuencia práctica es que **la frontera del sector decide el cumplimiento**. Si una empresa pública se clasifica dentro de S.13 —porque no cubre con ventas al menos la mitad de sus costes de producción, el criterio de productor no de mercado de la ficha 10.06—, su déficit y su deuda pasan a computar. Esa prueba se revisa periódicamente, y su resultado ha desplazado miles de millones dentro y fuera del perímetro sin que ninguna de esas entidades cambiara de actividad. De ahí que la sectorización sea una decisión técnica de Eurostat y del INE, y no del Gobierno: **si quien está sujeto a la regla pudiera decidir a quién alcanza, la regla no existiría**.",
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
              q: "Gasto computable de 100.000 millones y tasa de referencia del 2,6 %. ¿Cuál es el techo, y qué pasa si se aprueba una subida permanente de ingresos de 1.000 millones?",
              a: "El techo es 102.600 millones, con un margen de 2.600. Con una subida permanente de ingresos de 1.000 millones el techo sube a 103.600. Si el ingreso extra fuera puntual, el techo no se movería: la regla solo admite ajuste por medidas permanentes.",
            },
            {
              q: "¿Por qué la regla de gasto es más robusta que el objetivo de déficit estructural?",
              a: "Porque opera sobre una variable observable y controlable por el Gobierno, mientras que el déficit estructural depende del PIB potencial y de la brecha de producción, que no se observan, se estiman con error y se revisan a la baja justo en las recesiones.",
            },
            {
              q: "¿Por qué es un acierto de diseño que las reglas tengan cláusula de escape?",
              a: "Porque ante un shock imprevisible una regla sin excepción se rompe de hecho y pierde credibilidad para el futuro. Preverla dentro de la norma, con supuestos tasados y duración limitada, permite que la regla siga siendo creíble al reactivarse. La dificultad está en desactivarla, no en activarla.",
            },
            {
              q: "¿Qué condición hace que la ratio de deuda se reduzca sin superávit primario?",
              a: "Que el tipo de interés implícito sea inferior al crecimiento nominal de la economía. Entonces el superávit primario necesario para estabilizar la deuda es negativo, es decir, la ratio baja incluso con déficit primario. Si la relación se invierte, la misma deuda exige superávit.",
            },
            {
              q: "¿Por qué la clasificación de una empresa pública dentro del sector Administraciones Públicas puede afectar al cumplimiento de las reglas?",
              a: "Porque los objetivos se miden en contabilidad nacional sobre el sector S.13. Si la empresa no cubre con ventas al menos la mitad de sus costes de producción, se clasifica dentro y su déficit y su deuda computan. Por eso la sectorización la deciden Eurostat y el INE, y no el Gobierno sujeto a la regla.",
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
              q: "Una administración obtiene 1.000 millones extra por una privatización. ¿Cómo afecta a su techo de gasto?",
              opciones: [
                "Lo eleva en la parte proporcional al crecimiento potencial",
                "Lo eleva en 1.000 millones, porque son ingresos disponibles",
                "Lo reduce, al tratarse de una operación de capítulo 8",
                "No lo modifica: solo lo ajustan las medidas permanentes de ingreso",],
              correcta: 3,
              porque: [
                "No hay proporción alguna: la regla distingue entre permanente y puntual, no entre importes.",
                "Gastar ingresos transitorios como si fueran estables es justo el error que la regla previene.",
                "La clasificación económica de la operación no es lo que determina el ajuste del techo.",
                "Es el mecanismo que impide consolidar gasto permanente sobre ingresos que van a desaparecer.",],
            },
            {
              q: "¿Por qué el déficit estructural es difícil de usar como regla operativa?",
              opciones: [
                "Porque solo puede calcularse al cerrar el ejercicio",
                "Porque depende del PIB potencial y de la brecha de producción, que no se observan y se revisan mucho",
                "Porque no distingue entre gasto corriente y de capital",
                "Porque el marco europeo lo eliminó en la reforma de 2024",],
              correcta: 1,
              porque: [
                "Se estima ex ante y se revisa después: el problema no es el calendario sino la incertidumbre de la estimación.",
                "Y se revisan a la baja precisamente en las recesiones, reclasificando como estructural lo que parecía cíclico.",
                "Esa distinción es otra discusión, la de la regla de oro, y no es el problema del saldo estructural.",
                "Los valores de referencia siguen en el Tratado; lo que cambió es el indicador operativo de vigilancia.",],
            },
            {
              q: "Un gobierno quiere bajar impuestos de forma permanente en 1.000 millones. ¿Qué le exige la regla de gasto?",
              opciones: [
                "Nada: la regla limita el gasto, no los ingresos",
                "Reducir su techo de gasto en esos mismos 1.000 millones",
                "Someterlo a autorización previa de la Comisión Europea",
                "Compensarlo con deuda, que no computa en el gasto computable",],
              correcta: 1,
              porque: [
                "La regla es simétrica: una rebaja permanente de ingresos reduce el techo en la misma cuantía.",
                "Por eso la regla ata las dos mitades del sesgo deficitario y no solo a quien quiere gastar más.",
                "No hay autorización previa de medidas tributarias nacionales: lo que hay es una senda de gasto acordada.",
                "La deuda no es una vía de escape: la regla opera sobre el gasto con independencia de cómo se financie.",],
            },
            {
              q: "¿Qué indica que el tipo de interés implícito de la deuda sea inferior al crecimiento nominal?",
              opciones: [
                "Que la deuda deja de computar a efectos del límite del 60 %",
                "Que los intereses dejan de figurar en el capítulo 3 del presupuesto",
                "Que el país no puede tener déficit estructural",
                "Que la ratio de deuda se reduce aunque haya déficit primario",],
              correcta: 3,
              porque: [
                "El límite del Tratado no depende de esa relación: sigue computando igual.",
                "Los intereses se siguen presupuestando y pagando con independencia de la dinámica de la ratio.",
                "Son cosas distintas: la relación entre tipo y crecimiento afecta a la dinámica, no a la existencia de déficit estructural.",
                "El superávit primario necesario para estabilizarla es negativo: la deuda se diluye con el crecimiento.",],
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
            { t: "Constitución Española, artículo 135, y LO 2/2012 de Estabilidad Presupuestaria", d: "El anclaje constitucional y su desarrollo: objetivos, regla de gasto en el artículo 12, límite de deuda y medidas preventivas, correctivas y coercitivas." },
            { t: "Reglamento (UE) 2024/1263 y el nuevo marco de gobernanza económica", d: "Los planes fiscales y estructurales a medio plazo y la senda de gasto primario neto como indicador único. Conviene leerlo junto al marco anterior para ver qué problema venía a resolver cada cambio." },
            { t: "AIReF, informes sobre líneas fundamentales de presupuestos y avales de previsiones", d: "El ejercicio práctico de la función que describe la ficha: verificar la premisa macroeconómica antes de que el presupuesto se vote, no auditar lo ya ejecutado." },
            { t: "Blanchard, «Public Debt and Low Interest Rates»", d: "La discusión sobre la dinámica de la deuda cuando el tipo de interés es inferior al crecimiento, que reabrió el debate sobre cuánto ajuste es realmente necesario. Es el fundamento analítico de la última línea de la formalización." },
          ],
        },
      ],
    },
  ],
};
