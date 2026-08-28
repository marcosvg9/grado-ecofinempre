/* Ficha 10.11 — Distribución de la renta y desigualdad. */

export default {
  codigo: "10.11",
  titulo: "Distribución de la renta y desigualdad",
  nivel: 3,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "Medir la desigualdad obliga a decidir antes tres cosas: qué renta se mide, entre quiénes se reparte y en qué momento del proceso se mira. La misma economía produce cifras muy distintas según dónde se ponga cada corte, y casi todas las discusiones públicas son en realidad desacuerdos sobre esos cortes.",
  requiere: "4.02 Estadística descriptiva · 10.03 Sistema fiscal español · 10.04 Gasto público y Estado de bienestar",
  abre: "10.05 Imposición óptima · 12.06 Distribución secundaria · 11.10 Divergencia y convergencia",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La desigualdad no es una magnitud que se observe: es el resultado de un procedimiento de medida, y el procedimiento incorpora decisiones que cambian el resultado más que cualquier reforma. La primera es **qué renta**. La **renta de mercado** —salarios, rentas de la propiedad y beneficios— refleja lo que reparte la economía antes de que el Estado intervenga. La **renta bruta** le suma las prestaciones monetarias. La **renta disponible** resta además impuestos directos y cotizaciones, y es la que se puede gastar. Y la **renta disponible ajustada** añade el valor de los servicios públicos recibidos en especie, sanidad y educación sobre todo. Cada escalón reduce la desigualdad medida, y comparar dos países usando escalones distintos no informa de nada.",
            "La segunda decisión es **entre quiénes**. La renta se percibe por individuos pero se comparte en el hogar, así que medir por persona ignora que quien convive reparte, y medir por hogar ignora que un hogar de cuatro necesita más que uno de uno. La solución convencional son las **escalas de equivalencia**: se divide la renta del hogar entre un número que crece con el tamaño pero menos que proporcionalmente, reconociendo economías de escala domésticas —una vivienda o una factura de calefacción no se duplican al duplicarse los ocupantes—. La escala usada cambia el resultado de forma apreciable, y es una convención, no un hallazgo.",
            "La tercera es **en qué momento**. La desigualdad anual mezcla a quien está temporalmente abajo —un estudiante, alguien entre dos empleos— con quien lo está de forma permanente. La desigualdad de **renta permanente** o de trayectoria vital es menor que la anual, porque promedia esas oscilaciones. Y la desigualdad de **riqueza** es siempre mucho mayor que la de renta, porque la riqueza acumula décadas de diferencias de renta y de herencia. Confundir las tres es el error más frecuente del debate público.",
            "Con esas decisiones tomadas, la representación estándar es la **curva de Lorenz**: en el eje horizontal la población ordenada de menor a mayor renta, en el vertical la proporción acumulada de renta que recibe. La diagonal es la igualdad perfecta —el 20 % más pobre recibe el 20 % de la renta—; cuanto más se hunde la curva bajo la diagonal, mayor la desigualdad. El **índice de Gini** resume esa distancia en un número entre 0 y 1: es el doble del área entre la diagonal y la curva.",
            "El Gini tiene una virtud y un defecto, y ambos son la misma cosa. La virtud es que **resume toda la distribución en un escalar comparable**. El defecto es que dos distribuciones muy distintas pueden dar el mismo Gini, porque es más sensible a lo que ocurre en el centro que en los extremos. Por eso rara vez se usa solo: se acompaña de **ratios entre percentiles** como el S80/S20 —lo que recibe el quintil más rico dividido entre lo del más pobre—, que capturan mejor las colas, y de la **participación del percentil superior**, que es lo que ha centrado la investigación reciente porque el Gini es especialmente ciego a lo que ocurre en la cúspide.",
            "El interés económico del asunto no es solo distributivo. La desigualdad interactúa con el crecimiento por varios canales, y no todos apuntan en la misma dirección: cierta desigualdad retribuye el esfuerzo y la asunción de riesgo, mientras que una desigualdad alta y persistente reduce la **movilidad intergeneracional**, desaprovecha talento por falta de acceso a la educación, y puede erosionar la confianza institucional. La regularidad empírica más robusta es la relación negativa entre desigualdad y movilidad: donde la distancia entre escalones es mayor, es también más difícil subirlos.",
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
            { nom: "Renta de mercado", sub: "Antes de la intervención pública.", cols: ["Salarios + rentas de la propiedad + beneficios"] },
            { nom: "Renta disponible", sub: "La que se puede gastar.", cols: ["De mercado + prestaciones − impuestos directos − cotizaciones"] },
            { nom: "Renta disponible ajustada", sub: "Incluye lo que se recibe sin pagarlo.", cols: ["Disponible + transferencias sociales en especie (D.63)"] },
            { nom: "Escala de equivalencia", sub: "Reconoce economías de escala en el hogar.", cols: ["Renta equivalente $= \\dfrac{\\text{renta del hogar}}{\\text{tamaño equivalente}}$"] },
            { nom: "Curva de Lorenz", sub: "La representación completa.", cols: ["% acumulado de renta frente a % acumulado de población"] },
            { nom: "Índice de Gini", sub: "Resumen escalar de la curva.", cols: ["Doble del área entre la diagonal y la curva · entre 0 y 1"] },
            { nom: "Cálculo por trapecios", sub: "Con datos agrupados en tramos.", cols: ["$G = 1 - \\sum_i (X_i - X_{i-1})(Y_i + Y_{i-1})$"] },
            { nom: "Ratio S80/S20", sub: "Sensible a las colas, que es donde el Gini falla.", cols: ["$\\dfrac{\\text{Renta del quintil superior}}{\\text{renta del quintil inferior}}$"] },
            { nom: "Capacidad redistributiva", sub: "Lo que hace el Estado, medido.", cols: ["Gini de mercado − Gini disponible"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: la misma economía antes y después del Estado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía cuya renta se reparte por quintiles como indica la tabla. La fila de mercado es lo que produce el reparto primario; la de renta disponible, lo que queda tras impuestos directos, cotizaciones y prestaciones monetarias. Son las **mismas personas y la misma economía**, medida en dos momentos del proceso.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "Q1 (20 % más pobre)", "Q2", "Q3", "Q4", "Q5 (20 % más rico)", "Gini"],
          filas: [
            ["Renta de mercado", "3 %", "8 %", "14 %", "23 %", "52 %", "0,452"],
            ["Renta disponible", "6 %", "11 %", "16 %", "23 %", "44 %", "0,352"],
            { celdas: ["Variación", "+3 pp", "+3 pp", "+2 pp", "0 pp", "−8 pp", "−0,100"], clase: "total" },
          ],
          nota: "La redistribución quita ocho puntos al quintil superior y los reparte entre los tres inferiores; **el cuarto quintil no se mueve**, y esa neutralidad de las clases medias es un rasgo habitual de los sistemas fiscales reales. El Gini cae de 0,452 a 0,352: **diez puntos, un 22 % de reducción**. El ratio S80/S20 pasa de **17,3 a 7,3**, es decir, se divide por más de dos: el indicador de colas registra un efecto mucho mayor que el Gini, porque la acción pública se concentra precisamente en los extremos.",
        },
        {
          tipo: "grafico",
          ejes: { x: "% acumulado de población", y: "% acumulado de renta" },
          dominio: { x: [0, 100], y: [0, 100] },
          marcasX: [0, 20, 40, 60, 80, 100],
          marcasY: [0, 20, 40, 60, 80, 100],
          series: [
            { nombre: "Igualdad perfecta", color: "tinta2", trazo: "discontinuo", etiquetaEn: [8, 74], puntos: [[0, 0], [100, 100]] },
            { nombre: "Renta disponible", color: "acento", etiquetaEn: [55, 16], puntos: [[0, 0], [20, 6], [40, 17], [60, 33], [80, 56], [100, 100]] },
            { nombre: "Renta de mercado", color: "alerta", etiquetaEn: [55, 5], puntos: [[0, 0], [20, 3], [40, 11], [60, 25], [80, 48], [100, 100]] },
          ],
          nota: "El **Gini es el doble del área entre la diagonal y cada curva**. La curva de renta disponible está siempre por encima de la de mercado y por tanto encierra menos área: eso es la redistribución, vista geométricamente. Nótese que ambas curvas **se tocan en los dos extremos por construcción** —el 0 % de la población tiene el 0 % de la renta y el 100 % tiene el 100 %—, así que toda la información está en cómo se hunden en medio.",
        },
        {
          tipo: "parrafos",
          items: [
            "El cálculo por trapecios es directo con datos agrupados. Para la renta de mercado, los porcentajes acumulados de renta son 3, 11, 25, 48 y 100, y cada tramo de población vale 0,20. La suma $\\sum_i (X_i - X_{i-1})(Y_i + Y_{i-1})$ da $0{,}2 \\times (0{,}03 + 0{,}14 + 0{,}36 + 0{,}73 + 1{,}48) = 0{,}548$, y el Gini es $1 - 0{,}548 = 0{,}452$. Con la renta disponible, la suma es $0{,}2 \\times 3{,}24 = 0{,}648$ y el Gini **0,352**.",
            "Una advertencia sobre el uso de datos agrupados: **los quintiles subestiman la desigualdad real**, porque suponen que dentro de cada tramo el reparto es uniforme. El Gini calculado sobre microdatos individuales siempre sale algo mayor que el calculado sobre cinco tramos, y la diferencia crece cuanto más gruesa sea la agrupación. Comparar un Gini de quintiles con otro de microdatos produce una brecha que no existe en la realidad.",
            "Y una limitación mayor: esta medición **no ve la parte alta de la distribución**. Los datos proceden de encuestas de hogares, donde las rentas muy altas están infrarrepresentadas porque quienes las perciben responden menos y declaran peor, y donde las rentas del capital se captan mal. Por eso la investigación reciente combina encuestas con **datos fiscales**, que sí registran la cúspide. Cuando se hace, la participación del 1 % superior sube apreciablemente respecto a lo que sugieren las encuestas, y con ella el Gini.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué España sale mal en un indicador y no en otro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "España presenta una combinación característica que ilustra bien la importancia de los cortes. Su desigualdad de **renta de mercado** es alta para el entorno europeo, y su **capacidad redistributiva** es más bien moderada, de modo que la desigualdad de renta disponible queda por encima de la media de la Unión. Pero el diagnóstico cambia según el indicador que se mire, y esa discrepancia es informativa, no un defecto de los datos.",
            "La razón principal es que la desigualdad española se origina sobre todo en el **mercado de trabajo**, no en la cúspide de la distribución. El paro elevado y su concentración en determinados hogares —la dualidad que estudia la ficha 10.02— hacen que una parte de la población tenga renta de mercado próxima a cero, lo que hunde la cola inferior. Los indicadores sensibles a esa cola, como el S80/S20 o la tasa de riesgo de pobreza, salen especialmente malos. En cambio, la participación del 1 % superior es comparable o inferior a la de otros países desarrollados: la desigualdad no está tanto arriba como abajo.",
            "El segundo factor es la **composición del gasto social**. El sistema español destina una fracción muy alta de su gasto a **pensiones**, que redistribuyen entre edades más que entre niveles de renta, y comparativamente poca a prestaciones dirigidas a hogares de renta baja en edad de trabajar. El resultado es una redistribución muy eficaz entre generaciones y menos eficaz dentro de la generación activa, que es donde se concentran los hogares con renta de mercado nula. La ficha 10.04 desarrolla esa estructura.",
            "Un tercer elemento suele quedar fuera de las cifras y cambia la conclusión: las **transferencias sociales en especie**. Sanidad y educación públicas equivalen a una renta que el hogar no percibe pero disfruta, y su reparto es mucho más igualitario que el de la renta monetaria. Al pasar de renta disponible a **renta disponible ajustada**, la desigualdad medida cae de forma apreciable en España, más que en países con servicios menos universales. Es el mismo concepto que la contabilidad nacional registra como D.63 en la ficha 12.08, y omitirlo sesga cualquier comparación internacional.",
            "La lección de método es que **no existe «la» desigualdad de un país**. Existe la desigualdad de renta de mercado, la de renta disponible, la de renta ajustada, la de riqueza y la de oportunidades, y un país puede ocupar posiciones muy distintas en cada una. Quien afirma que la desigualdad ha subido o bajado sin especificar cuál está, casi siempre sin saberlo, eligiendo el indicador que respalda su tesis. La ficha 1.10 explica por qué esa frontera entre describir y juzgar se cruza tan a menudo.",
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
            { t: "Comparar Ginis de definiciones distintas", d: "Un Gini de renta de mercado y otro de renta disponible difieren en diez puntos en la misma economía. Comparar países, años o estudios sin comprobar qué renta se mide, con qué escala de equivalencia y con qué unidad —individuo u hogar— produce diferencias que son puramente metodológicas. Es el error más común y el más fácil de evitar." },
            { t: "Confundir desigualdad de renta con desigualdad de riqueza", d: "La riqueza acumula décadas de diferencias de renta más las herencias, así que su Gini es siempre mucho mayor: donde la renta da 0,35, la riqueza puede dar 0,70. Citar una cifra de riqueza en una discusión sobre renta, o al revés, cambia por completo la magnitud aparente del problema." },
            { t: "Tratar el Gini como si lo dijera todo", d: "Resume la distribución en un escalar y por eso pierde información: dos distribuciones distintas pueden dar el mismo Gini. Es poco sensible a los extremos, justo donde suele estar lo relevante. Debe acompañarse de ratios entre percentiles y de la participación del percentil superior." },
            { t: "Olvidar las transferencias en especie", d: "Sanidad y educación públicas son renta real que el hogar no cobra pero disfruta, y su reparto es más igualitario que el monetario. Ignorarlas exagera la desigualdad y penaliza en las comparaciones a los países con servicios universales. La renta disponible ajustada existe precisamente para corregirlo." },
            { t: "Interpretar la desigualdad anual como permanente", d: "La foto de un año mezcla situaciones transitorias —un estudiante, alguien entre dos empleos— con posiciones estables. La desigualdad de renta permanente es menor que la anual. El dato que realmente importa para juzgar una sociedad no es la distancia entre escalones sino la probabilidad de cambiar de escalón, y esa es otra medición." },
            { t: "Fiarse solo de las encuestas de hogares", d: "Infrarrepresentan las rentas altas, porque quienes las perciben responden menos y declaran peor, y captan mal las rentas del capital. Por eso la parte alta de la distribución solo se ve bien combinando encuesta con registros fiscales, y cuando se hace, la participación del percentil superior sube respecto a lo que decía la encuesta." },
            { t: "Deducir la desigualdad individual de datos agrupados sin advertirlo", d: "Calcular el Gini sobre quintiles supone reparto uniforme dentro de cada tramo y por tanto lo subestima. El sesgo crece cuanto más gruesa sea la agrupación. No es un error si se advierte, pero sí lo es comparar un Gini de quintiles con otro calculado sobre microdatos." },
            { t: "Suponer que toda reducción de la desigualdad mejora el bienestar", d: "El Gini baja tanto si suben las rentas bajas como si caen las altas, y las dos cosas no son equivalentes. Una recesión que golpee sobre todo a las rentas del capital reduce la desigualdad medida empeorando la situación de casi todos. El índice describe una forma de la distribución, no un juicio sobre ella." },
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
            "Las cuentas nacionales describen exactamente el proceso que la desigualdad mide, pero con una limitación de origen: dan los totales de cada etapa, no su reparto entre personas.",
          ],
          lista: [
            "Los tres escalones de renta no son una invención de los estudios de desigualdad: son **las etapas de la secuencia de cuentas** del SEC. La renta de mercado se corresponde con el saldo de rentas primarias (**B.5**) que cierra la cuenta de la ficha 12.04; la renta disponible es el **B.6** que resulta tras la distribución secundaria de la ficha 12.06, donde entran los impuestos corrientes (**D.5**) y las prestaciones y cotizaciones (**D.6**); y la renta disponible ajustada es el **B.7**, que añade las transferencias sociales en especie (**D.63**) de la ficha 12.08.",
            "La limitación es estructural: el sistema publica esos saldos **agregados por sector institucional**, no por hogar. Sabe cuánta renta disponible tienen todos los hogares (S.14) en conjunto, y no cómo se reparte entre ellos. La distribución hay que traerla de fuera, de encuestas como la de condiciones de vida o de registros fiscales.",
            "De ahí el trabajo de **cuentas nacionales distributivas**, que reparte los agregados del SEC entre grupos de renta imponiendo que la suma cuadre con el total contable. Su virtud es precisamente esa restricción: las encuestas por sí solas no suman el total de renta que registran las cuentas —falta sobre todo renta del capital y beneficios no distribuidos—, y esa diferencia se concentra arriba. Al obligar a cuadrar, aflora parte de la desigualdad que la encuesta no veía.",
            "Un componente que casi ningún indicador recoge y que las cuentas sí registran: los **alquileres imputados** de la vivienda en propiedad, que el SEC contabiliza como producción y como renta del hogar propietario según la ficha 13.02. En un país con alta tasa de propiedad como España, incluirlos o no cambia el reparto medido, y beneficia a los hogares mayores, que son los propietarios.",
            "Conviene además no confundir dos cosas que suenan igual. La **distribución funcional** de la renta —el reparto entre remuneración de asalariados (**D.1**) y excedente de explotación (**B.2**) que estudia la ficha 12.03— es una división entre *factores*, no entre *personas*. Un país puede tener una participación salarial alta y mucha desigualdad personal, porque los salarios también se reparten de forma desigual entre sí.",
          ],
          cierre:
            "La consecuencia práctica: las cuentas nacionales dan el marco conceptual y los totales; la distribución exige otra fuente. Cualquier cifra de desigualdad es un cruce de ambas, y su fiabilidad depende del eslabón más débil, que casi siempre es la medición de la cúspide.",
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
              q: "Los quintiles reciben el 3, 8, 14, 23 y 52 % de la renta. Calcula el Gini por trapecios.",
              a: "0,452. Los porcentajes acumulados son 0,03 / 0,11 / 0,25 / 0,48 / 1,00 y cada tramo de población vale 0,20. La suma $\\sum_i (X_i - X_{i-1})(Y_i + Y_{i-1}) = 0{,}2 \\times (0{,}03 + 0{,}14 + 0{,}36 + 0{,}73 + 1{,}48) = 0{,}548$, y el Gini es $1 - 0{,}548 = 0{,}452$.",
            },
            {
              q: "Tras impuestos y prestaciones, los quintiles reciben 6, 11, 16, 23 y 44 %. ¿Cuánto redistribuye el sistema?",
              a: "Diez puntos de Gini: baja de 0,452 a 0,352, una reducción del 22 %. El S80/S20 pasa de 17,3 a 7,3, más de la mitad. Que el indicador de colas registre un efecto proporcionalmente mayor que el Gini indica que la acción pública se concentra en los extremos de la distribución, no en el centro: de hecho el cuarto quintil no se mueve.",
            },
            {
              q: "Dos países tienen el mismo Gini. ¿Puede afirmarse que su desigualdad es equivalente?",
              a: "No. El Gini resume la distribución en un escalar y distribuciones distintas pueden compartirlo; además es poco sensible a los extremos. Uno puede tener una cola inferior muy hundida por desempleo y el otro una cúspide muy concentrada. Hay que mirar además ratios entre percentiles y la participación del percentil superior, y comprobar que ambos midan la misma definición de renta.",
            },
            {
              q: "¿Por qué el Gini calculado sobre quintiles subestima la desigualdad?",
              a: "Porque supone reparto uniforme dentro de cada tramo y, por tanto, ignora la desigualdad interna de cada quintil. El cálculo sobre microdatos individuales siempre da un valor algo mayor, y la diferencia crece cuanto más gruesa sea la agrupación. No es un error si se advierte; lo es comparar un Gini de quintiles con otro de microdatos.",
            },
            {
              q: "¿Por qué las cuentas nacionales no bastan para medir la desigualdad?",
              a: "Porque publican saldos agregados por sector institucional: dan la renta disponible de todos los hogares (S.14) en conjunto, no su reparto entre ellos. Definen bien las etapas —B.5 de mercado, B.6 disponible, B.7 ajustada— pero la distribución hay que traerla de encuestas o de registros fiscales. Las cuentas distributivas intentan repartir los agregados del SEC imponiendo que la suma cuadre con el total contable.",
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
              q: "Un estudio da un Gini de 0,49 para España y otro de 0,33. ¿Se contradicen?",
              opciones: [
                "Sí, salvo que se refieran a años distintos",
                "No: el Gini admite un margen de error de esa magnitud",
                "Sí: uno de los dos está mal calculado",
                "No necesariamente: un Gini de renta de mercado y otro de renta disponible difieren en unos diez puntos en la misma economía",
              ],
              correcta: 3,
              porque: [
                "El año importa poco al lado de la definición de renta empleada.",
                "El Gini no tiene un margen de error de dieciséis puntos: la discrepancia es conceptual, no estadística.",
                "Ambos pueden estar bien: miden cosas distintas.",
                "La diferencia son impuestos y transferencias. Comparar países, años o estudios sin comprobar qué renta se está midiendo es la fuente de confusión más común del tema.",
              ],
            },
            {
              q: "¿Por qué el Gini de la riqueza es mucho mayor que el de la renta?",
              opciones: [
                "Porque acumula décadas de diferencias de renta más las herencias",
                "Porque la riqueza incluye la vivienda habitual, que distorsiona el reparto",
                "Porque la riqueza se mide con encuestas menos fiables",
                "Porque el Gini no es aplicable a magnitudes de stock",
              ],
              correcta: 0,
              porque: [
                "Donde la renta da 0,35, la riqueza puede dar 0,70. Un flujo anual y un saldo acumulado durante generaciones no pueden repartirse igual.",
                "La vivienda es en realidad el activo que más iguala el reparto de la riqueza en España.",
                "La medición es más difícil, y esa no es la razón de la brecha.",
                "Se aplica perfectamente a stocks; lo que cambia es el nivel del resultado.",
              ],
            },
            {
              q: "Al medir la desigualdad se ignoran la sanidad y la educación públicas. ¿Qué efecto tiene?",
              opciones: [
                "Ninguno: no son renta monetaria del hogar",
                "Exagera la desigualdad: son renta real que el hogar no cobra pero disfruta, y su reparto es más igualitario que el monetario",
                "La subestima, porque los hogares de renta alta usan más la sanidad privada",
                "Depende del método de imputación empleado",
              ],
              correcta: 1,
              porque: [
                "No son monetarias y sí son renta: el hogar recibe un servicio que de otro modo tendría que pagar.",
                "Al repartirse de forma más igualitaria que el dinero, incluirlas comprime la distribución. Dejarlas fuera hace parecer más desigual de lo que es a la economía.",
                "El uso de la privada por parte de las rentas altas no invierte el signo del efecto.",
                "El método afecta a la magnitud del ajuste, no a su dirección.",
              ],
            },
            {
              q: "El Gini de un país baja durante una recesión. ¿Ha mejorado el bienestar?",
              opciones: [
                "Sí, aunque el efecto sea transitorio",
                "No se sigue: el Gini baja tanto si suben las rentas bajas como si caen las altas",
                "No: el Gini no es comparable entre fases del ciclo",
                "Sí: una distribución más igualitaria es siempre preferible",
              ],
              correcta: 1,
              porque: [
                "La duración no cambia que la mejora del índice pueda proceder de un empobrecimiento generalizado.",
                "Una recesión que golpee sobre todo a las rentas del capital reduce la desigualdad y empobrece al país. Las dos cosas no son equivalentes y el índice no las distingue.",
                "Sí es comparable; lo que hace falta es mirar también qué ha pasado con los niveles.",
                "El indicador mide dispersión, no nivel: puede mejorar mientras todo el mundo empeora.",
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
            { ref: "Atkinson, Desigualdad: ¿qué podemos hacer?", nota: "el tratamiento más ordenado de las decisiones de medida y de las opciones de política, por quien construyó buena parte del instrumental." },
            { ref: "INE, Encuesta de Condiciones de Vida", nota: "la fuente española de renta por hogar, con Gini, S80/S20 y tasa de riesgo de pobreza, y la metodología de escalas de equivalencia que emplea." },
            { ref: "Banco de España, Encuesta Financiera de las Familias", nota: "la contrapartida patrimonial: distribución de riqueza y deuda por hogar, que es donde la desigualdad se ve mucho mayor que en renta." },
            { ref: "World Inequality Database y sus cuentas nacionales distributivas", nota: "la combinación de encuestas, registros fiscales y agregados del sistema de cuentas para reconstruir la parte alta de la distribución; conviene leer también las críticas metodológicas que ha recibido." },
          ],
        },
      ],
    },
  ],
};
