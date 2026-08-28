/* Ficha 4.07 — Variables instrumentales y endogeneidad. */

export default {
  codigo: "4.07",
  titulo: "Variables instrumentales y endogeneidad",
  nivel: 4,
  bloque: "Métodos cuantitativos y econometría",
  tiempo: "5 h",
  nucleo:
    "Cuando la variable explicativa está contaminada por lo que no observamos, ningún control la limpia. Un instrumento resuelve el problema aprovechando una fuente de variación ajena al problema, pero a cambio de dos supuestos que los datos no pueden verificar y de un resultado que solo vale para quienes responden al instrumento.",
  requiere: "4.05 Regresión por MCO · 4.06 Diagnóstico",
  abre: "4.08 Datos de panel · 1.10 Economía normativa · 10.04 Gasto público y pensiones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 4.05 terminó en un callejón: el coeficiente de la educación cambiaba al añadir controles, y quedaba pendiente la **capacidad individual**, que influye en el salario, está correlacionada con los años de estudio y **no se observa**. Ese es el problema de la **endogeneidad**: la variable explicativa está correlacionada con el término de error, con lo que MCO no estima el efecto causal sino una mezcla de ese efecto y de todo lo que se cuela por la correlación. Y aquí no hay corrección de errores estándar que valga: **el coeficiente está sesgado**, y lo estará por muchos datos que se acumulen.",
            "**Tres mecanismos distintos producen el mismo síntoma.** El primero son las **variables omitidas** no observables, como la capacidad. El segundo es el **error de medida** en la variable explicativa, que produce un sesgo hacia cero fácil de olvidar: si los años de estudio se declaran con imprecisión, el coeficiente estimado se atenúa sistemáticamente. El tercero es la **causalidad inversa o simultaneidad**, presente en casi toda la macroeconomía: los tipos de interés afectan a la producción y el banco central los fija mirando la producción, así que la regresión captura las dos cosas a la vez y no separa ninguna. Los tres rompen el mismo supuesto y exigen el mismo tipo de solución.",
            "**La idea de las variables instrumentales es elegante y vale la pena enunciarla despacio.** Si la variación total de la educación está contaminada, busquemos **una parte de esa variación que sí sea limpia**: una fuente que mueva los años de estudio por razones ajenas a la capacidad, a la familia y a la ambición. Esa fuente es el **instrumento**. Con ella se estima el efecto usando solo la variación que induce, y se descarta el resto. La estimación se lee entonces como una **razón**: cuánto cambia el salario cuando el instrumento se mueve, dividido por cuánto cambia la educación cuando el instrumento se mueve. Si el instrumento mueve poco la educación, el denominador es pequeño, y ahí está el peligro de toda la técnica.",
            "**Los dos supuestos son de naturaleza muy distinta y conviene no confundirlos.** La **relevancia** —que el instrumento afecte de verdad a la variable explicativa— **es contrastable**: se mira la primera etapa y su estadístico F. La **exclusión** —que el instrumento no afecte al resultado por ninguna otra vía que no pase por la variable explicativa— **no es contrastable en absoluto**: es un argumento sobre cómo funciona el mundo, y hay que defenderlo con conocimiento institucional, no con estadística. Cuando alguien dice que un instrumento «pasa los contrastes», está hablando solo de la mitad fácil.",
            "**El problema de los instrumentos débiles merece una advertencia seria.** Como la estimación divide por la primera etapa, un instrumento débil hace pequeño el denominador y **amplifica cualquier violación, por leve que sea, de la restricción de exclusión**. La aritmética es implacable: un sesgo directo minúsculo del instrumento sobre el resultado se multiplica por el inverso de la primera etapa. Además, con instrumentos débiles el estimador tiene una distribución muy sesgada en muestras finitas —se acerca al propio MCO, es decir, al sesgo que se quería evitar— y los intervalos de confianza convencionales dejan de tener la cobertura anunciada. La regla de dedo habitual es exigir un **F de primera etapa superior a 10**, aunque el trabajo reciente sugiere que ese umbral es demasiado laxo.",
            "**Y hay una consecuencia conceptual que cambia lo que se puede afirmar: el estimador no recupera un efecto medio para todo el mundo.** Bajo supuestos razonables, lo que se estima es el **efecto medio local**, el LATE: el efecto sobre **quienes cambian de comportamiento por causa del instrumento**. Si el instrumento es una reforma que alargó la escolaridad obligatoria, el efecto estimado es el de los estudiantes que habrían abandonado antes y no pudieron; no dice nada sobre el retorno de un doctorado. Esto explica por qué dos estudios impecables con instrumentos distintos dan números distintos **sin que ninguno esté equivocado**: estiman efectos sobre poblaciones diferentes.",
            "**El instrumental es solo una de las estrategias de identificación**, y conviene situarla. Los **experimentos aleatorios** son el patrón oro porque la aleatorización garantiza la exclusión por diseño. Las **diferencias en diferencias** comparan la evolución de un grupo tratado con la de otro no tratado. La **regresión discontinua** aprovecha umbrales administrativos —una nota de corte, un límite de plantilla, un umbral de renta— para comparar unidades casi idénticas a ambos lados. Todas comparten la misma filosofía: **buscar una fuente de variación cuyo origen se conozca**, en lugar de confiar en que los controles basten. Ese giro es lo que se conoce como revolución de la credibilidad, y ha reorganizado la economía aplicada de los últimos treinta años.",
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
            { nom: "Endogeneidad", sub: "El supuesto que sesga: nada lo corrige salvo el diseño.", cols: ["$\\mathrm{Cov}(x, u) \\neq 0 \\Rightarrow \\hat\\beta_{\\mathrm{MCO}}$ sesgado"] },
            { nom: "Sesgo de MCO", sub: "Su signo se deduce del mecanismo.", cols: ["$\\operatorname{plim}\\hat\\beta = \\beta + \\dfrac{\\mathrm{Cov}(x,u)}{\\mathrm{Var}(x)}$"] },
            { nom: "Relevancia", sub: "Contrastable: se mira la primera etapa.", cols: ["$\\mathrm{Cov}(z, x) \\neq 0$"] },
            { nom: "Exclusión", sub: "NO contrastable: es un argumento, no un test.", cols: ["$\\mathrm{Cov}(z, u) = 0$"] },
            { nom: "Estimador de variables instrumentales", sub: "Ratio de covarianzas.", cols: ["$\\hat\\beta_{\\mathrm{VI}} = \\dfrac{\\mathrm{Cov}(z,y)}{\\mathrm{Cov}(z,x)}$"] },
            { nom: "Estimador de Wald", sub: "Instrumento binario: dos diferencias de medias.", cols: ["$\\hat\\beta = \\dfrac{\\Delta y}{\\Delta x}$ entre grupos del instrumento"] },
            { nom: "Mínimos cuadrados en dos etapas", sub: "Se regresa sobre la parte predicha por z.", cols: ["1.ª: $x$ sobre $z$ · 2.ª: $y$ sobre $\\hat x$"] },
            { nom: "Amplificación del sesgo", sub: "Por eso un instrumento débil es peligroso.", cols: ["$\\text{sesgo} \\approx \\dfrac{\\delta}{\\text{primera etapa}}$"] },
            { nom: "Instrumento débil", sub: "Regla de dedo; hoy se considera laxa.", cols: ["F de primera etapa < 10"] },
            { nom: "Efecto medio local", sub: "Solo sobre quienes responden al instrumento.", cols: ["LATE = efecto sobre los «cumplidores»"] },
            { nom: "Error estándar", sub: "Siempre mayor que el de MCO.", cols: ["$\\mathrm{EE}(\\hat\\beta_{\\mathrm{VI}}) = \\dfrac{\\mathrm{EE}(\\text{forma reducida})}{\\text{primera etapa}}$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un instrumento fuerte y otro débil",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Volvemos al retorno de la educación. MCO daba **2,00**, y sospechamos que está sesgado al alza porque la capacidad no observada eleva a la vez los años de estudio y el salario. Buscamos un instrumento: una **reforma que amplió la escolaridad obligatoria** y que afectó a las cohortes nacidas a partir de cierto año. Nacer un año antes o después es ajeno a la capacidad individual, lo que hace defendible la exclusión.",
            "Comparamos las dos cohortes. Las nacidas **antes** de la reforma tienen 12,00 años de estudio de media y un salario medio de 28,00. Las nacidas **después**, 12,30 años y 28,78. Las dos diferencias son la **primera etapa**, 0,30 años, y la **forma reducida**, 0,78 miles de euros. El estimador es su cociente: $0{,}78 / 0{,}30 = 2{,}60$.",
            "El resultado es **mayor** que el de MCO, lo que sorprende a quien esperaba que corregir un sesgo al alza bajara el número. Es exactamente lo que encuentra buena parte de la literatura real, y hay dos explicaciones compatibles: el **error de medida** en los años declarados atenúa el coeficiente de MCO hacia cero, y el LATE se refiere a **quienes habrían abandonado la escuela y no pudieron**, un grupo con retornos plausiblemente altos. Ninguna de las dos es una excusa: son afirmaciones sobre qué se está estimando.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Magnitud", "Cálculo", "Valor"],
          filas: [
            ["Primera etapa ($\\Delta$ educación)", "12,30 − 12,00", "0,30 años"],
            ["Forma reducida ($\\Delta$ salario)", "28,78 − 28,00", "0,78 mil €"],
            ["Estimador de Wald", "$0{,}78/0{,}30$", "2,60"],
            ["Error estándar", "$0{,}09/0{,}30$", "0,300"],
            ["Intervalo al 95 %", "$2{,}60 \\pm 1{,}96 \\times 0{,}30$", "[2,01 · 3,19]"],
            { celdas: ["F de primera etapa", "$t^2 = 5^2$", "25 — instrumento fuerte"], clase: "total" },
            ["MCO, para comparar", "ficha 4.05", "2,00 (EE 0,354)"],
          ],
          nota: "Obsérvese que el error estándar del estimador instrumental, **0,300**, es casi el mismo que el de MCO pese a apoyarse en muchísima menos variación; con una primera etapa más floja sería mucho mayor. Esa es la regla general: **el instrumental siempre es menos preciso que MCO**, y se acepta la pérdida a cambio de estimar algo interpretable. La comparación honesta no es entre un número sesgado y preciso y otro insesgado y ruidoso, sino entre responder mal a la pregunta correcta o bien a otra pregunta.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la parte que hay que interiorizar: qué pasa si el instrumento no es perfecto.** Supongamos que la reforma, además de alargar la escolaridad, tuvo **un pequeño efecto directo** sobre los salarios de 0,05 —por ejemplo porque coincidió con una mejora de la formación profesional—. La exclusión se viola levemente. El gráfico muestra qué estima el instrumental en función de la fuerza de la primera etapa, siendo el verdadero efecto 2,60.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Primera etapa", y: "Estimación" },
          dominio: { x: [0, 0.5], y: [2.4, 5.3] },
          marcasX: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
          marcasY: [2.5, 3, 3.5, 4, 4.5, 5],
          series: [
            {
              nombre: "Estimación",
              color: "alerta",
              grosor: 2.2,
              etiquetaEn: [0.5, 2.7],
              puntos: [[0.02, 5.1], [0.03, 4.267], [0.04, 3.85], [0.05, 3.6], [0.06, 3.433], [0.08, 3.225], [0.1, 3.1], [0.12, 3.017], [0.15, 2.933], [0.2, 2.85], [0.25, 2.8], [0.3, 2.767], [0.4, 2.725], [0.5, 2.7]],
            },
            {
              nombre: "Verdad = 2,60",
              color: "acento",
              trazo: "discontinuo",
              grosor: 1.6,
              etiquetaEn: [0.5, 2.6],
              puntos: [[0, 2.6], [0.5, 2.6]],
            },
          ],
          puntos: [
            { x: 0.3, y: 2.767, etiqueta: "fuerte  +6 %", guias: false },
            { x: 0.05, y: 3.6, etiqueta: "débil  +38 %", guias: false },
          ],
          nota: "La violación de la exclusión es **la misma en todo el gráfico**: un efecto directo de 0,05. Lo que cambia es cuánto la amplifica el denominador. Con una primera etapa de 0,30 el sesgo es del 6 %, tolerable. Con una primera etapa de 0,05 —un instrumento débil pero no absurdo— el mismo defecto produce un sesgo del **38 %**, y la estimación se dispara a 3,60. Cuando la primera etapa tiende a cero la curva explota. Ahí está la razón de que un instrumento débil no sea solo impreciso, sino **peligroso**: convierte un defecto pequeño y difícil de descartar en un error enorme, y lo hace con un intervalo de confianza de aspecto tranquilizador.",
        },
      ],
    },
    {
      titulo: "Caso práctico: cómo se identifica el efecto de una política real",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Tomemos una pregunta con la que se discute todos los años: **¿cuánto empleo destruye una subida del salario mínimo?** Sirve para ver por qué las estrategias de identificación no son un refinamiento técnico, sino la diferencia entre saber algo y no saber nada.",
            "**La comparación ingenua no vale para nada.** Regresar el empleo sobre el salario mínimo entre países o entre años produce un número sin interpretación posible: los países con salario mínimo alto difieren en todo lo demás, y las subidas suelen decidirse **cuando la economía va bien**, con lo que la causalidad inversa empuja el coeficiente hacia el lado positivo. El sesgo no tiene ni un signo previsible, y ningún conjunto de controles lo resuelve, porque lo que contamina no se observa.",
            "**La estrategia que cambió el debate fue una comparación con frontera.** Cuando un territorio sube su salario mínimo y el vecino no, los establecimientos a un lado y otro de la frontera comparten mercado laboral, clientela y ciclo económico, y se diferencian en la política. Comparar la **evolución** del empleo en unos y otros —diferencias en diferencias— aísla el efecto bajo un supuesto explícito y discutible: que **sin la reforma ambos lados habrían evolucionado en paralelo**. Ese supuesto no se contrasta, se argumenta y se somete a pruebas indirectas, como comprobar que los dos lados venían moviéndose igual antes.",
            "**Otras estrategias aportan variación distinta.** Los **umbrales administrativos** permiten regresión discontinua: si una norma se aplica a empresas de más de cincuenta empleados, las de cuarenta y nueve y las de cincuenta y una son casi idénticas salvo en el tratamiento. Los **cambios legislativos con calendario escalonado** entre regiones generan un panel con variación en el tiempo y entre unidades, que es la lógica de la ficha 4.08. Y la **exposición diferencial** —el porcentaje de trabajadores de cada sector que cobraba cerca del mínimo antes de la subida— convierte una política uniforme en un tratamiento de intensidad variable.",
            "**Todas tienen un punto débil, y reconocerlo es parte del oficio.** La frontera exige que no haya desplazamientos de actividad entre lados, que es justo lo que podría causar la política. La discontinuidad da un efecto **local al umbral**, que puede no ser el relevante, y se rompe si las empresas manipulan su tamaño para quedarse debajo. El calendario escalonado exige que el momento de adoptar la política sea ajeno a la evolución esperada del empleo, algo poco creíble si las regiones legislan mirando su propio mercado laboral. **La pregunta correcta ante cualquier estudio no es qué técnica usa, sino de dónde sale la variación y por qué es creíble que sea ajena al problema.**",
            "**Por eso los resultados discrepan sin que nadie mienta.** Distintos diseños estiman efectos sobre poblaciones distintas —restauración frente a industria, empresas pequeñas frente a grandes, subidas moderadas frente a grandes— y en contextos con distinto poder de mercado del empleador, que es lo que la ficha 2.09 identificaba como determinante de que una subida destruya empleo o no. Que el rango de estimaciones sea amplio no significa que la economía no sepa nada: significa que **el efecto depende del contexto**, y esa es también una conclusión empírica.",
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
            { t: "Creer que añadir controles resuelve la endogeneidad", d: "Solo funciona si la variable contaminante se observa y se incluye. La capacidad individual, la calidad de la gestión o las expectativas no se observan, y ninguna lista de controles los sustituye. Cuando la fuente del problema es inobservable, la solución tiene que venir del diseño: un instrumento, un experimento, una discontinuidad." },
            { t: "Presentar la exclusión como si fuera contrastable", d: "La relevancia se contrasta mirando la primera etapa; la exclusión no se puede contrastar con los datos, porque exigiría observar el error. Es un argumento sustantivo sobre cómo funciona el mundo. Decir que un instrumento pasa los contrastes es hablar solo de la mitad fácil del problema." },
            { t: "Usar un instrumento débil porque el estimador «sale»", d: "El estimador siempre sale: es un cociente. Con una primera etapa pequeña, cualquier violación mínima de la exclusión se amplifica —en el ejemplo, de un 6 % a un 38 % de sesgo con el mismo defecto— y la distribución del estimador se acerca a la de MCO en muestras finitas. Hay que mirar el F de primera etapa antes que el resultado." },
            { t: "Interpretar el estimador como un efecto medio para toda la población", d: "Bajo supuestos razonables se estima el efecto sobre quienes cambian de comportamiento por causa del instrumento. Una reforma de escolaridad obligatoria informa sobre quienes habrían abandonado, no sobre el retorno de un posgrado. Dos estudios con instrumentos distintos pueden dar números distintos sin que ninguno se equivoque." },
            { t: "Olvidar el sesgo de atenuación por error de medida", d: "El error de medida en la variable explicativa sesga el coeficiente hacia cero de forma sistemática, y es una de las razones por las que las estimaciones instrumentales suelen superar a las de MCO. Interpretar esa diferencia como una anomalía, en lugar de como una predicción de la teoría, es un error frecuente." },
            { t: "Comparar la precisión de MCO y del instrumental como si fuera el criterio", d: "El instrumental siempre es menos preciso, porque usa solo una parte de la variación. La comparación relevante no es entre errores estándar sino entre lo que estima cada uno: un número preciso que mezcla causa y correlación no es preferible a otro más ruidoso pero interpretable." },
            { t: "Aceptar un supuesto de tendencias paralelas sin someterlo a prueba", d: "En diferencias en diferencias el supuesto es que sin tratamiento ambos grupos habrían evolucionado igual, y no se contrasta directamente. Lo mínimo exigible es mostrar que venían moviéndose en paralelo antes de la intervención, y comprobar que el resultado no depende del periodo elegido." },
            { t: "Pedir a la econometría que decida lo que decide el diseño", d: "Ninguna técnica extrae causalidad de datos que no la contienen. La pregunta útil ante cualquier estudio es de dónde sale la variación que identifica el efecto y por qué es creíble que sea ajena al problema. Si no hay respuesta a eso, no hay estimación causal por sofisticado que sea el modelo." },
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
            "Las cuentas nacionales son datos observacionales agregados, es decir, el terreno donde la endogeneidad es más grave y donde menos herramientas hay para atacarla.",
          ],
          lista: [
            "Los **multiplicadores fiscales** son el ejemplo canónico. El gasto público se decide mirando la coyuntura, así que regresar producción sobre gasto mezcla el efecto de la política con la reacción de la política al ciclo. La literatura seria recurre a variación exógena: gasto militar por motivos geopolíticos, cambios impositivos justificados por razones ajenas a la coyuntura, o proyecciones oficiales para separar la parte anticipada. Sin eso, el número no significa nada.",
            "Las **estimaciones del efecto de la política monetaria** afrontan el mismo problema al cuadrado, porque el banco central fija los tipos precisamente respondiendo a lo que quiere explicarse. De ahí que se usen sorpresas de política —la parte del anuncio que los mercados no anticipaban— como instrumento, midiendo el movimiento de los activos en una ventana de minutos alrededor de la decisión.",
            "El **coste laboral unitario de la ficha 10.09** se emplea a menudo para explicar la evolución de las exportaciones, cuando ambas variables se determinan conjuntamente en el mismo equilibrio. Cualquier lectura causal de esa correlación necesita una fuente de variación externa, y rara vez se presenta.",
            "Las **revisiones de la contabilidad nacional** interactúan con todo lo anterior: si el dato que veía el gobierno al decidir no es el que hoy figura en la serie, la regresión atribuye a los agentes una información que no tenían. Es el problema de los datos en tiempo real de la ficha 10.10, y su efecto sobre las estimaciones de reglas de política es grande.",
            "Y las **evaluaciones de políticas españolas** —bonificaciones a la contratación, reformas laborales, incentivos fiscales— tienen a su favor algo que la macroeconomía agregada no tiene: **microdatos administrativos con umbrales, calendarios y grupos de comparación**. Ahí las estrategias de esta ficha sí son aplicables, y explican por qué la evidencia microeconómica española sobre políticas de empleo es bastante más sólida que la macroeconómica.",
          ],
          cierre:
            "La conclusión práctica es incómoda y conviene asumirla: **con series agregadas de contabilidad nacional casi nunca se puede identificar un efecto causal de forma creíble**. Sirven para describir, para contabilizar y para restringir modelos. Para estimar el efecto de una política, la evidencia buena casi siempre viene de microdatos con una fuente de variación identificable.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué añadir la capacidad individual como control no es una opción?", a: "Porque no se observa. Los controles solo eliminan el sesgo de las variables que se miden e incluyen; una variable inobservable correlacionada con la explicativa y con el resultado sesga el coeficiente hagan lo que hagan los demás regresores. Cuando la contaminación es inobservable, la solución tiene que venir del diseño, no de la especificación." },
            { q: "Con una primera etapa de 0,30 y una forma reducida de 0,78, ¿cuál es la estimación y qué mide?", a: "El cociente, 2,60. Mide el efecto de un año adicional de estudios sobre quienes cambiaron su escolaridad por causa de la reforma, no sobre toda la población. Es el efecto medio local, y por eso un instrumento distinto sobre otra población puede dar legítimamente otro número." },
            { q: "Un pequeño efecto directo del instrumento sobre el salario: ¿importa más con un instrumento fuerte o débil?", a: "Con uno débil, y por mucho. La violación se divide por la primera etapa: con 0,30 el sesgo es del 6 % y con 0,05, del 38 %, siendo el defecto exactamente el mismo. Por eso un instrumento débil no es solo impreciso: convierte una imperfección difícil de descartar en un error grande, con un intervalo de confianza de aspecto normal." },
            { q: "¿Cuál de los dos supuestos se puede contrastar y cuál no?", a: "La relevancia sí: se mira la regresión de la variable explicativa sobre el instrumento y su estadístico F, y aquí vale 25. La exclusión no, porque exigiría observar el término de error. Es un argumento sustantivo que se defiende con conocimiento institucional y se somete a pruebas indirectas, nunca un contraste estadístico." },
            { q: "El estimador instrumental da 2,60 y MCO daba 2,00. ¿No debería ser al revés si el sesgo era al alza?", a: "Es lo que encuentra buena parte de la literatura real, y hay dos explicaciones compatibles. El error de medida en los años de estudio declarados atenúa el coeficiente de MCO hacia cero, y el efecto medio local se refiere a quienes habrían abandonado la escuela, un grupo con retornos plausiblemente altos. Ambas son afirmaciones sobre qué se está estimando, no excusas." },
            { q: "¿Qué habría que preguntar ante un estudio que afirma medir el efecto del salario mínimo?", a: "De dónde sale la variación que identifica el efecto y por qué es creíble que sea ajena a la evolución del empleo. Si viene de comparar países o años sin más, no vale: las subidas se deciden cuando la economía va bien. Si viene de una frontera, un umbral o un calendario escalonado, hay que examinar el supuesto concreto que cada diseño necesita." },
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
              q: "¿Resuelve la endogeneidad añadir más variables de control?",
              opciones: [
                "Solo si la variable contaminante se observa; la capacidad individual o la calidad de la gestión no se observan",
                "No: los controles nunca reducen el sesgo",
                "Sí, si se añaden suficientes",
                "Sí, siempre que los controles sean anteriores a la variable de interés",
              ],
              correcta: 0,
              porque: [
                "Y por eso existen las variables instrumentales: aprovechan una fuente de variación exógena en vez de intentar medir lo inmedible.",
                "Sí lo reducen cuando la variable de confusión es observable: la crítica no es contra los controles sino contra confiar solo en ellos.",
                "La cantidad no sustituye a lo que falta. Añadir cien controles observables no toca la parte no observada del error.",
                "La anterioridad evita el problema del control posterior, pero no basta si la variable relevante no se observa.",
              ],
            },
            {
              q: "¿Cómo se comprueba que un instrumento cumple la restricción de exclusión?",
              opciones: [
                "Con un contraste de sobreidentificación de Sargan",
                "Con el estadístico F de la primera etapa",
                "Comparando el estimador de variables instrumentales con el de MCO",
                "No se comprueba con los datos: es un argumento sustantivo que hay que defender",
              ],
              correcta: 3,
              porque: [
                "Sargan solo funciona con más instrumentos que variables endógenas, y aun así contrasta coherencia entre ellos suponiendo que al menos uno es válido.",
                "La F de la primera etapa contrasta la **relevancia**, que es la otra condición. Confundirlas es dar por probado lo que no se ha probado.",
                "La diferencia entre ambos estimadores puede deberse a muchas cosas: no acredita la exclusión.",
                "Exigiría observar el error, que es precisamente lo que no se observa. Presentarla como contrastable es el error más frecuente de esta literatura.",
              ],
            },
            {
              q: "Un instrumento tiene una primera etapa muy pequeña pero el estimador «sale». ¿Se puede usar?",
              opciones: [
                "Sí, ampliando la muestra hasta que la primera etapa sea significativa",
                "No: el estimador es un cociente y siempre sale; con primera etapa pequeña, cualquier violación mínima de la exclusión se amplifica",
                "Sí, si el coeficiente tiene el signo esperado",
                "Sí: que salga significa que hay información suficiente",
              ],
              correcta: 1,
              porque: [
                "Más muestra hace significativa una primera etapa débil sin hacerla fuerte: el problema es la magnitud, no la precisión.",
                "Con denominador cercano a cero, un sesgo minúsculo en el numerador se convierte en un sesgo enorme en el resultado. Los instrumentos débiles pueden estar más sesgados que el propio MCO.",
                "El signo esperado es lo que uno quiere ver, y por eso es el peor criterio para aceptar una estimación frágil.",
                "Salir un número no es evidencia de nada: la división se puede hacer siempre, por pequeño que sea el denominador.",
              ],
            },
            {
              q: "Una reforma que alargó la escolaridad obligatoria se usa como instrumento. ¿Qué efecto se estima?",
              opciones: [
                "El efecto sobre quienes ya estudiaban de más",
                "El efecto sobre quienes cambiaron de comportamiento por causa de la reforma",
                "El efecto medio de la educación en toda la población",
                "El efecto medio sobre los tratados por la reforma",
              ],
              correcta: 1,
              porque: [
                "Justamente sobre esos no informa: su comportamiento no cambió con la reforma.",
                "Es el efecto local sobre los «cumplidores». Una reforma de escolaridad obligatoria informa sobre quien habría dejado los estudios antes y no lo hizo, no sobre quien pensaba ir a la universidad.",
                "El instrumento solo mueve a una parte de la población, y solo sobre esa parte informa. Extenderlo al conjunto es una extrapolación no justificada.",
                "«Los tratados» incluye a quienes habrían estudiado igual sin la reforma, sobre los que el instrumento no aporta variación.",
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
            { ref: "Angrist y Pischke, Mostly Harmless Econometrics", nota: "el manual que define este enfoque; el capítulo de variables instrumentales y el tratamiento del efecto medio local son la referencia." },
            { ref: "Cunningham, Causal Inference: The Mixtape", nota: "más reciente y muy didáctico, con código y diagramas causales; excelente para ver las cuatro estrategias juntas." },
            { ref: "Card y Krueger, Myth and Measurement", nota: "el trabajo que reorientó el debate sobre el salario mínimo usando comparaciones de frontera; conviene leerlo junto a sus críticas." },
            { ref: "Angrist y Krueger, «Does Compulsory School Attendance Affect Schooling and Earnings?», 1991", nota: "el instrumento clásico del trimestre de nacimiento, y también el caso a partir del cual se estudió el problema de los instrumentos débiles." },
            { ref: "Comité del Nobel de Economía 2021, resumen científico", nota: "veinte páginas que cuentan la revolución de la credibilidad y por qué cambió lo que la economía empírica puede afirmar." },
          ],
        },
      ],
    },
  ],
};
