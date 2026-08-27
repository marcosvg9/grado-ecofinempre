/* Ficha 11.10 — Divergencia y convergencia: por qué unos países son ricos. */

export default {
  codigo: "11.10",
  titulo: "Divergencia y convergencia: por qué unos países son ricos",
  nivel: 4,
  bloque: "Historia económica",
  tiempo: "5 h",
  nucleo:
    "Es la pregunta más importante de la disciplina y la que peor sabemos contestar. Geografía, cultura e instituciones compiten como explicación, todas tienen evidencia a favor y ninguna resuelve el problema de que las causas candidatas son también consecuencias.",
  requiere: "11.01 De la economía orgánica a la industrial · 11.07 La segunda globalización · 4.07 Variables instrumentales",
  abre: "3.09 Crecimiento y productividad · 1.11 Escuelas heterodoxas · 1.10 Economía normativa · 10.01 Estructura productiva española",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cierra el bloque la pregunta que lo motiva entero: **por qué unos países son ricos y otros no**. Lucas escribió que, una vez que uno empieza a pensar en ello, es difícil pensar en otra cosa, y la razón es de magnitud: las diferencias de nivel de vida entre países son mucho mayores que cualquier ganancia que pueda obtenerse mejorando la política económica dentro de uno. Nada de lo que estudian los otros bloques tiene un impacto comparable.",
            "**La primera cosa que hay que entender es la potencia del crecimiento compuesto, porque reencuadra el problema.** Dos países idénticos hoy, uno creciendo al 2 % y otro al 6 % anual, tardan cincuenta años en separarse por un factor de **casi siete a uno**. Eso significa que la pregunta relevante **no es por qué un país es pobre hoy** —hace tres siglos todos lo eran— sino **por qué unos empezaron a crecer antes o más deprisa y por qué otros no consiguen engancharse**. La divergencia moderna es el resultado acumulado de diferencias de tasa sostenidas durante generaciones.",
            "**La teoría del crecimiento predice convergencia, y la realidad la desmiente a medias.** El modelo de Solow de la ficha 3.09 implica que los países pobres deberían crecer más deprisa, porque el capital rinde más donde es escaso y porque adoptar tecnología existente es más barato que inventarla. Esa **convergencia absoluta no se observa** en el conjunto del mundo: en las últimas décadas hay países que se han acercado espectacularmente y otros que se han quedado igual o peor. Lo que sí se observa es **convergencia condicional**: los países convergen hacia su propio estado estacionario, y lo que difiere entre ellos es **dónde está ese estado**. La pregunta se traslada entonces a qué determina el estado estacionario de cada uno.",
            "**La primera respuesta candidata es la geografía.** Clima, enfermedades endémicas, acceso al mar, calidad de los suelos y dotación de recursos afectan de forma directa a la productividad. La malaria reduce la esperanza de vida y la inversión en capital humano; estar sin salida al mar encarece todo el comercio; el trópico es agrícolamente más difícil de lo que parece. La correlación entre latitud y renta es fuerte y real. Su debilidad como explicación es que **la geografía no cambia y la posición relativa de los países sí**: Corea del Sur era pobre hace sesenta años con la misma geografía que hoy.",
            "**La segunda es la cultura.** Valores, confianza social, actitud ante el trabajo y el ahorro, cohesión y normas de reciprocidad influyen sin duda en el funcionamiento de una economía, y hay evidencia de que la confianza generalizada correlaciona con el desarrollo. El problema es doble: **la cultura es difícil de medir sin circularidad** —se acaba definiendo por sus resultados— y **cambia con la prosperidad tanto como la causa**. Las explicaciones culturales han envejecido especialmente mal: los mismos rasgos que se citaban para explicar el atraso de un país se han citado después para explicar su éxito.",
            "**La tercera, hoy dominante, son las instituciones.** La idea es que lo decisivo son las reglas del juego: derechos de propiedad seguros, cumplimiento de contratos, límites al poder arbitrario y acceso amplio a las oportunidades económicas. Acemoglu y Robinson distinguen entre instituciones **inclusivas**, que reparten el poder y permiten que mucha gente invierta e innove, y **extractivas**, diseñadas para que una minoría capture la renta. Su argumento es que las segundas pueden generar crecimiento durante un tiempo pero no sostenerlo, porque bloquean la destrucción creativa que amenaza a quien manda.",
            "**Y aquí aparece el problema metodológico que hace tan difícil zanjar la discusión.** Las instituciones no son exógenas: los países ricos pueden permitirse mejores instituciones, así que la correlación no identifica nada. Es endogeneidad de manual, la de la ficha 4.07. Las estrategias empleadas para resolverlo —usar la mortalidad de los colonos europeos como instrumento del tipo de colonización, o comparar zonas fronterizas con historias coloniales distintas— son ingeniosas y **han sido intensamente discutidas**, tanto por la calidad de los datos históricos como por la restricción de exclusión. Conviene por tanto tratar el consenso institucionalista como **la mejor hipótesis disponible y no como un resultado establecido**.",
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
            { nom: "Potencia del compuesto", sub: "Pequeñas diferencias de tasa, enormes de nivel.", cols: ["$\\text{ratio} = \\left(\\dfrac{1+g_1}{1+g_2}\\right)^t$"] },
            { nom: "Regla del 70", sub: "Aproximación mental suficiente.", cols: ["años para duplicar $\\approx \\dfrac{70}{g\\,(\\%)}$"] },
            { nom: "Convergencia absoluta", sub: "No se observa en el conjunto del mundo.", cols: ["todos los países hacia el mismo nivel"] },
            { nom: "Convergencia condicional", sub: "Sí se observa: cada uno hacia el suyo.", cols: ["cada país hacia su propio estado estacionario"] },
            { nom: "Hipótesis geográfica", sub: "Fuerte correlación, mal explica los cambios.", cols: ["clima · enfermedad · acceso al mar"] },
            { nom: "Hipótesis cultural", sub: "Difícil de medir sin circularidad.", cols: ["confianza · normas · actitudes"] },
            { nom: "Hipótesis institucional", sub: "La dominante hoy, con reservas.", cols: ["inclusivas frente a extractivas"] },
            { nom: "Problema de identificación", sub: "Por qué la discusión sigue abierta.", cols: ["instituciones ⟷ renta: causalidad en ambos sentidos"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: lo que hacen unos pocos puntos de crecimiento",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de discutir causas conviene fijar la magnitud del fenómeno que hay que explicar. Cuatro países parten del mismo nivel de renta por habitante y solo difieren en su tasa de crecimiento sostenida. Esto es lo que ocurre en cincuenta años, es decir, en una vida laboral.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Años", y: "Índice" },
          dominio: { x: [0, 50], y: [0, 1950] },
          marcasX: [0, 10, 20, 30, 40, 50],
          marcasY: [0, 500, 1000, 1500],
          series: [
            {
              nombre: "6 % anual",
              color: "alerta",
              grosor: 2.6,
              etiquetaEn: [50, 1842],
              puntos: [[0, 100], [10, 179], [20, 321], [30, 574], [40, 1029], [50, 1842]],
            },
            {
              nombre: "3 %",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [50, 438],
              puntos: [[0, 100], [10, 134], [20, 181], [30, 243], [40, 326], [50, 438]],
            },
            {
              nombre: "2 %",
              color: "tinta2",
              grosor: 2.2,
              etiquetaEn: [50, 269],
              puntos: [[0, 100], [10, 122], [20, 149], [30, 181], [40, 221], [50, 269]],
            },
            {
              nombre: "1 %",
              color: "tinta",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [50, 164],
              puntos: [[0, 100], [10, 110], [20, 122], [30, 135], [40, 149], [50, 164]],
            },
          ],
          nota: "Los cuatro países empiezan **exactamente iguales**. Al cabo de cincuenta años, el que creció al 6 % es **once veces más rico** que el que creció al 1 %, y casi **siete veces** más que el que creció al 2 %. Ninguno ha hecho nada visible en un año concreto: la diferencia entre el 2 % y el 3 % es imperceptible en cualquier momento y produce una brecha del 63 % en medio siglo. Ahí está la razón de que esta sea la pregunta más importante de la economía y también la más difícil de investigar: **la variable que hay que explicar solo se manifiesta en escalas de tiempo en las que casi nada permanece constante**, y por tanto en las que casi ningún experimento es posible.",
        },
        {
          tipo: "tabla",
          cabecera: ["Crecimiento anual", "Duplica la renta cada", "Multiplicador en 50 años", "Frente al 1 %"],
          filas: [
            ["1 %", "70 años", "×1,6", "—"],
            ["2 %", "35 años", "×2,7", "×1,6"],
            ["3 %", "23 años", "×4,4", "×2,7"],
            { celdas: ["6 %", "12 años", "×18,4", "×11,2"], clase: "total" },
          ],
          nota: "La **regla del 70** —dividir setenta entre la tasa para saber cuántos años tarda en duplicarse— es una aproximación excelente y merece memorizarse: al 4 % da 17,5 años frente a los 17,7 exactos. Y la última columna es la que reencuadra el debate de política económica: **cualquier medida que altere la tasa de crecimiento de forma permanente importa muchísimo más que cualquier medida que altere el nivel una sola vez**, por grande que sea el efecto de nivel. Una reforma que suba la renta un 5 % de golpe queda superada en cinco años por una que añada un punto de crecimiento anual. Esa asimetría está mal reflejada en la discusión pública, que se ocupa casi siempre de efectos de nivel.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y una advertencia sobre el otro extremo.** El crecimiento del 6 % sostenido durante cincuenta años es **rarísimo**: unos pocos países del este asiático lo han conseguido, y hacerlo desde muy atrás es más fácil que hacerlo desde delante, por el mecanismo de convergencia de la ficha 11.05. Ningún país líder ha crecido nunca a ese ritmo durante tanto tiempo, porque el líder tiene que inventar lo que los demás copian. **Convergencia y frontera son dos problemas distintos**, y confundirlos lleva a exportar recetas de países que estaban alcanzando a otros que ya están arriba, donde no funcionan del mismo modo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué esta pregunta se resiste",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cerramos el bloque con una reflexión metodológica, porque la dificultad de esta pregunta enseña más sobre los límites de la economía empírica que cualquier respuesta concreta que se pueda dar.",
            "**El primer obstáculo es que no hay muestra.** Hay unos doscientos países, muchos de ellos no independientes durante buena parte del periodo relevante, y las observaciones no son independientes entre sí: comparten historia colonial, se copian políticas y se afectan mutuamente. Con doscientas observaciones correlacionadas y decenas de variables candidatas, la multiplicidad de la ficha 4.04 es abrumadora. No sorprende que las regresiones de crecimiento entre países de los años noventa hayan resistido tan mal el paso del tiempo: se probaron centenares de variables y siempre alguna salía significativa.",
            "**El segundo es que todo es endógeno con todo.** Las instituciones afectan a la renta y la renta permite mejores instituciones. La educación eleva la productividad y los países productivos invierten en educación. La confianza social facilita el comercio y el comercio genera confianza. Ninguna de las variables candidatas es exógena, y las estrategias de identificación de la ficha 4.07 —instrumentos históricos, fronteras artificiales, experimentos naturales coloniales— son las mejores disponibles y **descansan en restricciones de exclusión que no se pueden contrastar**.",
            "**El tercero es que el efecto que interesa opera en escalas de siglos.** Se puede evaluar con rigor el efecto de un programa de transferencias sobre la escolarización en cinco años. No se puede evaluar del mismo modo el efecto de un marco institucional sobre el crecimiento durante doscientos años, porque en ese plazo cambian todas las demás variables. **La econometría causal moderna es potentísima en preguntas pequeñas y sigue siendo débil en la pregunta grande**, y esa es una tensión real de la disciplina que conviene conocer.",
            "**El cuarto es la selección de casos.** Los éxitos son visibles y se estudian; los fracasos con las mismas políticas se olvidan. Varios países aplicaron políticas industriales parecidas a las de Corea del Sur sin resultados comparables, y esos casos rara vez aparecen en la discusión. Sin contarlos, cualquier lección extraída de los ganadores está sesgada, con el mismo mecanismo del sesgo de publicación de la ficha 4.04.",
            "**Qué se puede afirmar razonablemente, pese a todo.** Que las instituciones importan, aunque no sepamos con precisión cuáles ni cuánto. Que la apertura al comercio y a la tecnología ayuda, como muestran las fichas 11.05 y 11.09. Que la estabilidad macroeconómica es una condición necesaria y no suficiente. Que el capital humano importa, aunque su efecto medido sea menor de lo que la intuición sugiere. Y que **no existe una receta transferible**: los casos de éxito difieren mucho entre sí y varios violaron el consenso de política de su época. La modestia es aquí una conclusión empírica, no una pose retórica, y es probablemente el mejor cierre para un plan de estudios entero.",
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
            { t: "Preguntar por qué unos países son pobres", d: "Hace tres siglos lo eran todos. La pregunta correcta es por qué algunos empezaron a crecer y otros no consiguen engancharse, porque la divergencia moderna es el resultado acumulado de diferencias de tasa sostenidas durante generaciones, no un estado de partida." },
            { t: "Esperar convergencia automática de los países pobres", d: "La convergencia absoluta no se observa en el conjunto del mundo: unos países se han acercado espectacularmente y otros siguen igual o peor. Lo que se observa es convergencia condicional, cada uno hacia su propio estado estacionario, con lo que la pregunta se traslada a qué determina ese estado." },
            { t: "Explicarlo todo con la geografía", d: "La correlación entre latitud y renta es fuerte y real, pero la geografía no cambia y la posición relativa de los países sí. Corea del Sur era pobre hace sesenta años con la geografía que tiene hoy. Sirve para explicar condiciones de partida, no trayectorias." },
            { t: "Recurrir a explicaciones culturales sin control de circularidad", d: "La cultura se acaba definiendo por sus resultados y cambia con la prosperidad tanto como la causa. Estas explicaciones han envejecido especialmente mal: los mismos rasgos que se invocaban para explicar el atraso de un país se han usado después para explicar su éxito." },
            { t: "Tomar el consenso institucionalista como resultado establecido", d: "Las instituciones no son exógenas: los países ricos pueden permitirse mejores instituciones. Las estrategias de identificación empleadas son ingeniosas y han sido intensamente discutidas, tanto por la calidad de los datos históricos como por la restricción de exclusión. Es la mejor hipótesis disponible, no un hecho probado." },
            { t: "Exportar recetas de países que estaban convergiendo a países que ya están en la frontera", d: "Crecer alcanzando a otro es más fácil que crecer inventando, porque se adopta en lugar de descubrir. Ningún país líder ha crecido nunca al 6 % durante cincuenta años. Convergencia y frontera son problemas distintos y admiten políticas distintas." },
            { t: "Fijarse en efectos de nivel e ignorar los de tasa", d: "Una reforma que eleve la renta un 5 % de una vez queda superada en cinco años por una que añada un punto al crecimiento anual permanente. La discusión pública se ocupa casi siempre de efectos de nivel, y la asimetría entre ambos es de varios órdenes de magnitud." },
            { t: "Aprender solo de los casos de éxito", d: "Varios países aplicaron políticas parecidas a las de los casos célebres sin resultados comparables, y esos fracasos rara vez se estudian. Sin contarlos, cualquier lección extraída de los ganadores está sesgada, con el mismo mecanismo del sesgo de publicación de la ficha 4.04." },
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
            "Toda esta discusión descansa en comparar niveles de renta entre países, que es exactamente lo que la contabilidad nacional hace peor.",
          ],
          lista: [
            "Comparar el PIB per cápita de dos países exige **paridad de poder adquisitivo**, porque los tipos de cambio de mercado no reflejan lo que cuesta vivir en cada sitio. Las estimaciones proceden del Programa de Comparación Internacional, y sus revisiones han movido en ocasiones la renta relativa de países enteros en porcentajes de dos cifras sin que nada real cambiara. Es el aviso de la ficha 10.07 llevado a su extremo.",
            "La **economía no observada** pesa mucho más en países de renta baja, donde buena parte de la actividad es autoconsumo o informal. Las cuentas nacionales la estiman con métodos indirectos y muy discutidos, de modo que la brecha medida entre países ricos y pobres es en parte una brecha de **cobertura estadística**.",
            "La **capacidad estadística** correlaciona con la renta, lo que introduce un sesgo incómodo: los países peor medidos son los que más se discuten en esta literatura. Varios episodios de revisión han cambiado el PIB de un país africano en porcentajes enormes de un año para otro al actualizar la metodología, sin que hubiera ocurrido nada económicamente.",
            "El **PIB per cápita es una media**, con todo lo que la ficha 4.02 advertía: no dice nada sobre distribución, y dos países con la misma media pueden tener realidades muy distintas. De ahí que la literatura de desarrollo use además indicadores de salud, educación y pobreza, que miden cosas que el agregado no capta.",
            "Y las **series históricas largas** que sostienen el gráfico de esta ficha son reconstrucciones con márgenes de error grandes, según la ficha 11.01. Sirven para formas de curva y órdenes de magnitud, y afirmaciones finas sobre cuándo exactamente un país adelantó a otro exceden lo que los datos aguantan.",
          ],
          cierre:
            "Con esto se cierra el bloque y, en cierto modo, el plan entero: **la pregunta más importante de la economía se investiga con los datos menos fiables de que dispone**. No es un motivo para renunciar a hacerla, sino para exigir a cualquier respuesta —incluida la propia— la modestia que sus fuentes imponen.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Dos países iguales hoy crecen al 2 % y al 6 %. ¿Cómo están en cincuenta años?", a: "El segundo es casi siete veces más rico que el primero, y once veces más que uno que hubiera crecido al 1 %. Ninguno ha hecho nada visible en un año concreto: la diferencia entre el 2 % y el 3 % es imperceptible en cualquier momento y produce una brecha del 63 % en medio siglo. Ahí está la magnitud del fenómeno que hay que explicar." },
            { q: "¿Por qué no se observa convergencia absoluta entre países?", a: "Porque los países convergen hacia su propio estado estacionario, no hacia uno común. El modelo de Solow predice que los pobres crezcan más deprisa porque el capital rinde más donde es escaso, y eso ocurre solo condicionado a los determinantes de cada economía. La pregunta se traslada entonces a qué fija el estado estacionario de cada país." },
            { q: "¿Cuál es la debilidad principal de la explicación geográfica?", a: "Que la geografía no cambia y la posición relativa de los países sí. La correlación entre latitud y renta es fuerte y real, y explica condiciones de partida, pero no trayectorias: Corea del Sur era pobre hace sesenta años con la misma geografía que tiene hoy." },
            { q: "¿Por qué es tan difícil demostrar que las instituciones causan el desarrollo?", a: "Porque son endógenas: afectan a la renta y la renta permite mejores instituciones, de modo que la correlación no identifica nada. Las estrategias de identificación empleadas —mortalidad de los colonos como instrumento, comparaciones fronterizas— son ingeniosas y descansan en restricciones de exclusión que no se pueden contrastar, y han sido intensamente discutidas." },
            { q: "¿Por qué importan más los efectos de tasa que los de nivel?", a: "Porque una reforma que eleve la renta un 5 % de una sola vez queda superada en cinco años por otra que añada un punto permanente al crecimiento anual. La asimetría es de varios órdenes de magnitud, y la discusión pública se ocupa casi siempre de los efectos de nivel, que son los visibles." },
            { q: "¿Por qué las lecciones de los casos de éxito hay que tomarlas con cautela?", a: "Por selección: los éxitos se estudian y los fracasos con políticas parecidas se olvidan. Varios países aplicaron estrategias similares sin resultados comparables. Es el mismo mecanismo del sesgo de publicación de la ficha 4.04, y sin contar los fracasos cualquier receta extraída de los ganadores está sesgada." },
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
            { ref: "Acemoglu y Robinson, Por qué fracasan los países", nota: "la exposición divulgativa de la hipótesis institucional; conviene leerla junto a sus críticas." },
            { ref: "Diamond, Armas, gérmenes y acero", nota: "la defensa más ambiciosa de la explicación geográfica en escala milenaria; el contrapunto natural al anterior." },
            { ref: "Rodrik, Una economía, muchas recetas", nota: "por qué no existe una fórmula transferible y varios casos de éxito violaron el consenso de su época." },
            { ref: "Banerjee y Duflo, Repensar la pobreza", nota: "el giro hacia preguntas pequeñas y evaluables; ilustra bien la tensión entre rigor causal y relevancia de la pregunta." },
            { ref: "Acemoglu, Johnson y Robinson, «The Colonial Origins of Comparative Development», 2001", nota: "el artículo del instrumento de la mortalidad de los colonos; leer también el intercambio posterior sobre la calidad de esos datos." },
          ],
        },
      ],
    },
  ],
};
