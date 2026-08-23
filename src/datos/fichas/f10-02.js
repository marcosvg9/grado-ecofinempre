/* Ficha 10.02 — Mercado de trabajo español: EPA, afiliación y dualidad. */

export default {
  codigo: "10.02",
  titulo: "Mercado de trabajo español: EPA, afiliación y dualidad",
  nivel: 2,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "Tres fuentes miden el empleo español y dan cifras distintas sin que ninguna se equivoque, porque cuentan cosas distintas. Y sobre esa base hay una segmentación entre contratos que concentra todo el ajuste del ciclo en una minoría de trabajadores, lo que explica por qué el paro español sube tanto y tan deprisa.",
  requiere: "10.01 Estructura productiva española · 3.03 Desempleo e inflación · 4.03 Probabilidad e inferencia",
  abre: "10.04 Gasto público y pensiones · 10.09 Coste laboral unitario · 2.09 Mercados de factores",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de discutir nada sobre el mercado de trabajo español hay que resolver una confusión que envenena el debate público: **existen tres cifras oficiales de empleo y las tres son correctas**. La **EPA** es una encuesta trimestral a unas 65.000 viviendas que aplica la definición internacional de la Organización Internacional del Trabajo, cuenta **personas** y es comparable entre países. La **afiliación a la Seguridad Social** es un registro administrativo censal que cuenta **relaciones laborales**: quien tiene dos empleos aparece dos veces, y quien trabaja sin cotizar no aparece. El **paro registrado** cuenta **inscripciones** en las oficinas de empleo y depende de que la persona tenga algún incentivo para inscribirse.",
            "**Las diferencias entre ellas no son errores, son definiciones.** La EPA considera ocupado a quien trabajó al menos una hora en la semana de referencia, y parado a quien no tiene empleo, lo busca activamente y está disponible: alguien desanimado que ha dejado de buscar **no es parado sino inactivo**, aunque quiera trabajar. Por eso el paro registrado y el paro EPA pueden moverse en sentidos opuestos en un mismo mes, y por eso conviene mirar además los **indicadores de infrautilización** que suman a los parados quienes trabajan menos horas de las que querrían y quienes están disponibles pero no buscan. Y la EPA, al ser una encuesta, arrastra el error muestral de la ficha 4.03: **el margen de la tasa de paro nacional es de unas dos décimas y media**, lo que descarta comentar variaciones de una décima.",
            "**El rasgo estructural del mercado laboral español es la dualidad**, y conviene enunciarlo con precisión: no es que haya empleo temporal —lo hay en todas partes—, sino que existe **una brecha muy grande en el coste de despido y en la protección entre dos tipos de contrato** que se aplican a trabajadores que hacen tareas equivalentes. Esa brecha convierte el contrato temporal en el margen por el que las empresas ajustan cuando cambia la demanda, con dos consecuencias directas: **el ajuste del empleo es rapidísimo** y recae **por completo sobre una parte de la plantilla**, mientras el resto apenas nota el ciclo.",
            "**De ahí sale la anomalía macroeconómica más conocida del país.** Ante caídas de producción similares a las de otros países europeos, España destruye mucho más empleo y su tasa de paro sube mucho más: el coeficiente que relaciona ambas magnitudes —la ley de Okun de la ficha 3.03— es en España aproximadamente el doble que la media de la zona euro. No es un misterio ni un rasgo cultural: es lo que produce **una estructura productiva sensible al ciclo combinada con un margen de ajuste barato y concentrado**. La contrapartida es que en las recuperaciones el empleo también vuelve deprisa, aunque con la misma composición que lo hizo frágil.",
            "**Los efectos de la dualidad van más allá del ciclo y se acumulan en el tiempo.** Un trabajador que encadena contratos cortos recibe **menos formación** —ni la empresa ni él tienen incentivo a invertir en una relación que va a terminar—, acumula **menos antigüedad** y por tanto menor salario, tiene **más dificultad de acceso al crédito** y, cuando llega la jubilación, una carrera de cotización más corta e irregular, con el efecto sobre la pensión que estudia la ficha 10.04. Es un mecanismo por el que una institución laboral acaba generando desigualdad de renta a lo largo de toda la vida, y una de las razones de que la productividad española sea baja según el argumento de formación de la ficha 10.01.",
            "**La dualidad no es la única segmentación relevante.** Existe una **brecha generacional** muy marcada, con tasas de paro juvenil que duplican largamente la media; una **brecha territorial** persistente entre comunidades autónomas que ninguna década de convergencia ha cerrado; y una **parcialidad involuntaria** concentrada en mujeres, que es una forma de infrautilización que la tasa de paro no capta. La tasa de paro agregada, como cualquier media de la ficha 4.02, **oculta una distribución muy desigual** y no describe a nadie en particular.",
            "**Un apunte final sobre reformas, porque es donde el análisis suele volverse ideológico.** Reducir la dualidad puede hacerse por dos vías opuestas: **acercando la protección del temporal a la del indefinido** —encareciendo o restringiendo la temporalidad— o **acercando la del indefinido a la del temporal**, y también mediante un contrato único con indemnización creciente que elimine el escalón. Cuál funciona mejor es una pregunta empírica difícil, porque las reformas se aprueban en momentos concretos del ciclo y sus efectos se confunden con la coyuntura: es el problema de identificación de la ficha 4.07 aplicado a un caso donde todos tienen una opinión previa muy firme.",
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
            { nom: "Población activa", sub: "El desanimado que deja de buscar sale del denominador.", cols: ["Activos = Ocupados + Parados"] },
            { nom: "Tasa de paro", sub: "Sobre activos, no sobre población.", cols: ["u = Parados ÷ Activos"] },
            { nom: "Tasa de actividad", sub: "Sobre población de 16 a 64 años.", cols: ["Activos ÷ Población en edad de trabajar"] },
            { nom: "Tasa de empleo", sub: "Más informativa que el paro en comparaciones.", cols: ["Ocupados ÷ Población en edad de trabajar"] },
            { nom: "EPA", sub: "Personas, definición OIT, con error muestral.", cols: ["encuesta a ~65.000 viviendas"] },
            { nom: "Afiliación", sub: "Relaciones laborales, no personas.", cols: ["registro censal, sin error de muestreo"] },
            { nom: "Tasa de temporalidad", sub: "El margen sobre el que recae el ajuste.", cols: ["Temporales ÷ Asalariados"] },
            { nom: "Ley de Okun", sub: "En España, en torno al doble que en la zona euro.", cols: ["Δu = −β · (crecimiento del PIB − tendencia)"] },
            { nom: "Margen de la tasa de paro", sub: "Una décima trimestral no es distinguible de cero.", cols: ["± 0,25 pp aproximadamente (ficha 4.03)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: tres fuentes y un ciclo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, la reconciliación de fuentes.** Una economía estilizada con 31,5 millones de personas en edad de trabajar. La EPA cuenta **21,0 millones de ocupados** y **24,0 millones de activos**. La Seguridad Social registra **21,4 millones de afiliaciones**. Las cifras no coinciden y no tienen por qué.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Indicador", "Valor", "Qué cuenta exactamente"],
          filas: [
            ["Ocupados EPA", "21,0 M", "Personas que trabajaron al menos una hora"],
            ["Afiliaciones", "21,4 M", "Relaciones laborales: el pluriempleo cuenta dos veces"],
            ["Diferencia", "+1,9 %", "Pluriempleo, cobertura y momento de medición"],
            ["Parados EPA", "3,0 M", "Sin empleo, buscan activamente y disponibles"],
            ["Tasa de paro", "12,5 %", "Parados ÷ activos, no ÷ población"],
            ["Tasa de actividad", "76,2 %", "Activos ÷ población de 16 a 64"],
            { celdas: ["Tasa de empleo", "66,7 %", "Ocupados ÷ población de 16 a 64"], clase: "total" },
          ],
          nota: "La **tasa de empleo** suele ser mejor indicador que la de paro para comparar países, porque no depende de quién decide buscar trabajo: un país donde muchos desanimados abandonan la búsqueda mejora su tasa de paro sin que nadie haya encontrado empleo. Obsérvese también que las tres cifras de empleo son compatibles: **21,4 afiliaciones repartidas entre 21,0 personas** significa que hay pluriempleo, no que alguna fuente esté mal.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, la dualidad en un ciclo completo.** Veinte millones de ocupados, de los que **cinco son temporales y quince indefinidos**: una tasa de temporalidad del 25 %. Simulamos una recesión seguida de una recuperación, con el ajuste concentrado casi por completo en el contrato temporal.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Trimestre", y: "Índice" },
          dominio: { x: [1, 8], y: [65, 118] },
          marcasX: [1, 2, 3, 4, 5, 6, 7, 8],
          marcasY: [70, 80, 90, 100, 110],
          series: [
            {
              nombre: "Temporales",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [8, 112],
              puntos: [[1, 100], [2, 100], [3, 92], [4, 80], [5, 72], [6, 84], [7, 100], [8, 112]],
            },
            {
              nombre: "Indefinidos",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [8, 100],
              puntos: [[1, 100], [2, 100], [3, 100], [4, 100], [5, 98.7], [6, 98.7], [7, 99.3], [8, 100]],
            },
          ],
          nota: "Las dos líneas describen **el mismo mercado de trabajo en el mismo ciclo**. El empleo temporal cae un **28 %** y después se recupera hasta superar el nivel de partida; el indefinido apenas se mueve un punto. La recesión existe para una cuarta parte de la plantilla y prácticamente no existe para las otras tres cuartas partes. Esa es la definición operativa de dualidad, y explica a la vez la velocidad del ajuste español y por qué el coste de las crisis se reparte de forma tan desigual entre trabajadores que hacen tareas equivalentes.",
        },
        {
          tipo: "tabla",
          cabecera: ["Trimestre", "Empleo total", "Tasa de temporalidad", "Riesgo de perder el empleo"],
          filas: [
            ["1 — punto de partida", "20,00 M", "25,0 %", "—"],
            ["4 — recesión", "19,00 M", "21,1 %", "Temporal 20 % · Indefinido 0 %"],
            ["5 — fondo del ciclo", "18,41 M", "19,6 %", "Temporal 28 % · Indefinido 1,3 %"],
            { celdas: ["8 — recuperación", "20,60 M", "27,2 %", "El empleo vuelve con más temporalidad"], clase: "total" },
          ],
          nota: "Tres observaciones que se les escapan a la mayoría de los comentarios. La primera: **la tasa de temporalidad baja en la recesión**, del 25 % al 19,6 %, no porque el mercado mejore sino porque desaparecen los temporales; leer esa caída como un avance es un error grave. La segunda: el empleo total cae un **8 %** mientras la producción caería bastante menos, que es la amplificación de la ley de Okun. La tercera: la recuperación reconstruye el empleo **con más temporalidad que al principio**, dejando la economía más frágil ante el siguiente choque que ante el anterior.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el paro español sube más que el de sus vecinos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Que España tenga un paro estructuralmente superior al de sus vecinos, y que además suba mucho más en cada recesión, es el hecho estilizado más discutido de la economía española. Merece la pena separar las explicaciones que la aritmética sostiene de las que no.",
            "**El primer factor es la composición sectorial**, y viene de la ficha 10.01. Construcción, hostelería y comercio son sectores muy sensibles al ciclo y con mucha rotación, y pesan más en España que en Alemania o Francia. Una recesión de igual intensidad golpea con más fuerza donde la estructura productiva es más cíclica, **antes de considerar ninguna institución laboral**.",
            "**El segundo es la dualidad**, y actúa como amplificador. Con un margen de ajuste barato y disponible, la empresa que ve caer la demanda no negocia jornada ni salarios: **deja vencer contratos**. Es rápido, es legal y no cuesta indemnización. En países donde ese margen no existe con esa amplitud, el ajuste se reparte más entre horas y salarios, lo que preserva empleo a costa de renta. Ninguna de las dos respuestas es gratis: la española protege la renta de quien conserva el empleo y traslada todo el coste a quien lo pierde.",
            "**El tercero es la comparación con los esquemas de mantenimiento del empleo.** Alemania afrontó la crisis de 2008 con reducciones de jornada subvencionadas que conservaron la relación laboral, y su paro apenas se movió pese a una caída del PIB mayor que la española. España aplicó un instrumento parecido durante la pandemia de 2020, con un resultado muy distinto al de crisis anteriores: **la caída del empleo fue mucho menor de lo que la ley de Okun habría predicho**. Es una de las evidencias más limpias disponibles sobre el papel de las instituciones, precisamente porque el choque fue exógeno y simultáneo en muchos países, que es lo que la ficha 4.07 pediría a un diseño.",
            "**El cuarto es la histéresis**, y es el más preocupante a largo plazo. Un paro prolongado deteriora las capacidades y la empleabilidad, de modo que **una recesión eleva el paro estructural** y no solo el cíclico. Combinado con la dualidad, produce un mecanismo desagradable: los mismos trabajadores encadenan episodios de paro, acumulan menos experiencia y menos formación, y su empleabilidad se degrada al ritmo de los ciclos. Es el argumento de la ficha 3.03 sobre por qué la NAIRU no es una constante de la naturaleza.",
            "**Qué se puede concluir con honestidad.** Que la comparación con países de estructura productiva distinta es tramposa si no se ajusta por composición. Que la dualidad amplifica el ajuste y concentra su coste, lo cual está bien documentado. Que las reformas laborales son difíciles de evaluar porque coinciden con puntos del ciclo, y que la evidencia sobre cuál funciona mejor es más débil de lo que la contundencia del debate público sugiere. Y que **la tasa de paro agregada oculta la desigualdad de su reparto**, que es donde está casi todo el daño: no lo sufre un 12 % de la población de forma difusa, lo sufren personas concretas, casi siempre las mismas.",
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
            { t: "Comparar el paro registrado con el paro de la EPA", d: "Miden cosas distintas: uno cuenta inscripciones en oficinas de empleo, dependientes de incentivos administrativos, y el otro aplica la definición internacional de desempleo con una encuesta. Pueden moverse en sentidos opuestos el mismo mes sin que ninguno se equivoque, y sumarlos o restarlos no tiene sentido." },
            { t: "Interpretar las afiliaciones como personas empleadas", d: "Son relaciones laborales: quien tiene dos contratos cuenta dos veces, y quien trabaja sin cotizar no cuenta. En el ejemplo, 21,4 millones de afiliaciones corresponden a 21,0 millones de personas. Es un registro censal excelente y responde a otra pregunta que la EPA." },
            { t: "Comentar variaciones de una décima en la tasa de paro", d: "La EPA es una encuesta y su margen de error para la tasa nacional es de unas ±0,25 puntos, según la ficha 4.03. Una variación trimestral de una décima no es distinguible de cero, y al desagregar por provincia o edad el margen crece hasta varios puntos." },
            { t: "Leer una caída de la tasa de temporalidad en recesión como una mejora", d: "En el ejemplo baja del 25 % al 19,6 % precisamente porque se ha destruido empleo temporal. El indicador mejora mientras el mercado empeora. Hay que mirar los niveles de empleo temporal e indefinido por separado antes de interpretar el cociente." },
            { t: "Usar la tasa de paro para comparar países sin mirar la de empleo", d: "El paro se calcula sobre activos, así que un país donde los desanimados dejan de buscar mejora su tasa sin que nadie encuentre trabajo. La tasa de empleo, calculada sobre la población en edad de trabajar, no tiene ese problema y suele ser más informativa en comparaciones internacionales." },
            { t: "Confundir dualidad con existencia de contratos temporales", d: "El problema no es que haya temporalidad, que la hay en todas partes, sino que exista una brecha muy grande de protección y de coste de despido entre dos contratos aplicados a tareas equivalentes. Es la brecha, y no la figura contractual, la que concentra el ajuste y genera los efectos acumulativos." },
            { t: "Atribuir la anomalía del paro español a una sola causa", d: "Intervienen la composición sectorial, la dualidad, la ausencia histórica de esquemas de mantenimiento del empleo y la histéresis, y todas interactúan. Cualquier explicación monocausal —sea institucional o estructural— deja fuera una parte del fenómeno que las descomposiciones detectan sin dificultad." },
            { t: "Evaluar una reforma laboral por lo que pasó después", d: "Las reformas se aprueban en momentos concretos del ciclo, casi siempre en el peor, así que su efecto se confunde con la coyuntura. Sin un grupo de comparación creíble o una fuente de variación exógena, lo ocurrido después no identifica nada, por muy claro que parezca el gráfico." },
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
            "El empleo aparece en la contabilidad nacional con una definición propia, distinta de las tres anteriores, y esa cuarta cifra es la que se usa para casi todo el análisis macroeconómico.",
          ],
          lista: [
            "Las **cuentas nacionales estiman su propio empleo** en puestos de trabajo equivalentes a tiempo completo, conciliando EPA, afiliación y otras fuentes. Es la cifra que se emplea para calcular productividad y coste laboral unitario, y **no coincide con ninguna de las tres** que se comentan en los medios. Al comparar productividades hay que asegurarse de qué numerador y qué denominador se están usando.",
            "La **remuneración de asalariados** de la cuenta de explotación —ficha 10.06— incluye las cotizaciones sociales a cargo del empleador, de modo que no es el salario que percibe nadie. Su cociente con el empleo asalariado da la remuneración por asalariado que entra en el coste laboral unitario de la ficha 10.09.",
            "La **participación de las rentas del trabajo en el PIB** se lee directamente de la cuenta de explotación, pero está distorsionada por los autónomos: su renta figura como excedente de explotación aunque en buena parte remunere su trabajo. Las correcciones habituales imputan a los autónomos la remuneración media de los asalariados, y cambian el resultado varios puntos.",
            "Las **horas trabajadas** son la medida preferible frente a las personas porque neutralizan jornada parcial y temporalidad, y las cuentas nacionales las publican. En un país con parcialidad involuntaria significativa, la productividad por hora y la productividad por ocupado cuentan historias distintas.",
            "Y la **economía sumergida** afecta a las tres fuentes de forma desigual: no aparece en la afiliación, aparece parcialmente en la EPA porque los encuestados declaran trabajar, y las cuentas nacionales la estiman e incorporan al PIB según obliga el SEC 2010. De ahí que el empleo de contabilidad nacional supere al de afiliación de forma sistemática.",
          ],
          cierre:
            "La regla práctica que conviene fijar: **para el ciclo, la EPA y la afiliación; para la productividad y los costes, el empleo de contabilidad nacional; y nunca mezclar numeradores y denominadores de fuentes distintas**. Buena parte de las comparaciones internacionales sobre productividad española que circulan cometen exactamente ese error.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "La EPA dice 21,0 millones de ocupados y la Seguridad Social 21,4 de afiliaciones. ¿Cuál está mal?", a: "Ninguna. La EPA cuenta personas y la afiliación cuenta relaciones laborales, de modo que el pluriempleo hace que la segunda supere a la primera en torno a un 2 %. Además la afiliación no recoge el trabajo no declarado y la EPA sí lo capta parcialmente. Responden a preguntas distintas y ambas son correctas." },
            { q: "¿Por qué la tasa de temporalidad baja en las recesiones?", a: "Porque el ajuste recae sobre el empleo temporal, que desaparece. En el ejemplo cae del 25 % al 19,6 % mientras se destruyen 1,6 millones de empleos. El indicador mejora precisamente porque el mercado empeora, y leer esa caída como un avance es uno de los errores más frecuentes al comentar datos laborales." },
            { q: "¿Por qué la tasa de empleo es mejor que la de paro para comparar países?", a: "Porque la de paro se calcula sobre los activos, y quien se desanima y deja de buscar sale del denominador, mejorando la tasa sin que nadie haya encontrado trabajo. La tasa de empleo se calcula sobre toda la población en edad de trabajar y no es manipulable por ese margen." },
            { q: "¿Qué explica que el paro español suba más que el de sus vecinos ante caídas de PIB similares?", a: "La combinación de una estructura productiva más cíclica —construcción, hostelería, comercio— con un margen de ajuste barato y concentrado en el contrato temporal. Donde ese margen no existe con esa amplitud, el ajuste se reparte entre horas y salarios, preservando empleo a costa de renta. Ninguna de las dos respuestas es gratis." },
            { q: "Tras la recuperación hay más empleo que al principio y más temporalidad. ¿Por qué importa?", a: "Porque el margen sobre el que recaerá el próximo ajuste es mayor, de modo que la economía queda más frágil ante el siguiente choque que ante el anterior. A eso se suma la histéresis: quienes encadenan episodios de paro acumulan menos experiencia y formación, y su empleabilidad se degrada al ritmo de los ciclos." },
            { q: "¿Qué cifra de empleo hay que usar para calcular la productividad?", a: "La de contabilidad nacional, en puestos equivalentes a tiempo completo o mejor en horas trabajadas, porque es la que resulta coherente con el VAB del numerador. Mezclar el VAB de las cuentas con el empleo de la EPA produce cifras que no significan nada, y es un error muy común en comparaciones internacionales." },
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
            { ref: "INE, metodología de la Encuesta de Población Activa", nota: "las definiciones exactas de ocupado, parado e inactivo, y los errores de muestreo por celda; imprescindible antes de citar cualquier tasa." },
            { ref: "Myro y García Delgado, Lecciones de Economía Española", nota: "el capítulo de mercado de trabajo sitúa la dualidad en su contexto histórico e institucional." },
            { ref: "Bentolila, Dolado y Jimeno, trabajos sobre dualidad en España", nota: "la referencia académica sobre el contrato dual y sus efectos en el ciclo y en la formación; el argumento del contrato único sale de aquí." },
            { ref: "Banco de España, Informe Anual, capítulo de mercado de trabajo", nota: "análisis actualizado con microdatos de la MCVL y evaluación de las reformas recientes." },
            { ref: "Muestra Continua de Vidas Laborales, Seguridad Social", nota: "el panel administrativo que permite seguir trayectorias individuales; es lo que hace evaluable buena parte de lo que aquí se afirma." },
          ],
        },
      ],
    },
  ],
};
