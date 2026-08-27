/* Ficha 10.09 — Coste laboral unitario, productividad y competitividad. */

export default {
  codigo: "10.09",
  titulo: "Coste laboral unitario, productividad y competitividad",
  nivel: 4,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "El coste laboral unitario es un cociente entre lo que se paga por trabajador y lo que produce cada trabajador, así que puede mejorar por dos vías opuestas: porque la economía se vuelve más productiva o porque se despide a los menos productivos. Confundir ambas ha sostenido más de un relato de éxito.",
  requiere: "10.07 Producción, VAB y PIB · 10.02 Mercado de trabajo español · 3.10 Economía abierta",
  abre: "10.10 Cuentas trimestrales · 10.01 Estructura productiva española · 3.06 Oferta y demanda agregadas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **coste laboral unitario** responde a una pregunta muy concreta: cuánto cuesta el trabajo incorporado en cada unidad producida. Se calcula dividiendo la **remuneración por asalariado** entre la **productividad por ocupado**, y su interés está en que combina las dos magnitudes que determinan si una economía puede vender fuera. Un país puede pagar salarios altos y ser competitivo si su productividad los acompaña; **lo que erosiona la competitividad-coste no son los salarios altos, sino los salarios que crecen por encima de la productividad**.",
            "**En una unión monetaria ese indicador se vuelve central**, y ahí está la razón de que se hable tanto de él en Europa desde 2010. Sin tipo de cambio propio, un país que acumula durante años un crecimiento del coste laboral unitario superior al de sus socios **no puede corregirlo devaluando**: la única vía es la **devaluación interna**, es decir, contener o reducir salarios nominales, o elevar la productividad, que es lento. Es el trilema de la ficha 3.10 en su versión práctica, y explica por qué el ajuste de la periferia europea tomó la forma que tomó.",
            "**Hay que insistir en la asimetría del mecanismo, porque es lo que hace el problema tan doloroso.** Con moneda propia, una depreciación corrige de golpe un desalineamiento de costes: los precios internos en moneda extranjera bajan sin que nadie renegocie ningún contrato. Sin ella, el ajuste requiere que **millones de contratos salariales individuales se muevan a la baja**, algo que la rigidez nominal a la baja de la ficha 3.06 dificulta enormemente. Y como los salarios nominales resisten, el ajuste tiende a producirse por **la vía del empleo**: se destruyen puestos en lugar de bajar sueldos.",
            "**Ahí aparece el problema de interpretación que da título a la ficha.** Si una recesión destruye empleo concentrado en los sectores y trabajadores de menor productividad —construcción, servicios de bajo valor añadido, temporales—, la **productividad media de los que quedan sube automáticamente**. El coste laboral unitario mejora sin que nadie haya innovado, invertido ni mejorado un proceso. Es un **efecto composición** idéntico al de la ficha 4.02 con los salarios: el indicador mejora porque cambia quién está en la muestra. España experimentó exactamente esto entre 2008 y 2013, y buena parte de la mejora de competitividad-coste celebrada entonces era de esta naturaleza.",
            "**Cómo distinguir una mejora genuina de una de composición.** La forma correcta es descomponer la variación de la productividad agregada en lo que ocurre **dentro de cada sector** y lo que ocurre **entre sectores** por reasignación de empleo, con la misma fórmula de la ficha 10.01. Si la mejora está concentrada en el segundo término y coincide con destrucción de empleo, es composición. Otra comprobación útil es mirar si la mejora **sobrevive a la recuperación**: cuando el empleo vuelve a los sectores de baja productividad, una mejora de composición se deshace, y una mejora genuina no.",
            "**El coste laboral unitario tampoco agota la competitividad**, y conviene decirlo con claridad. Un país puede exportar bien con costes altos si vende productos diferenciados, de calidad reconocida o con tecnología difícil de imitar: es la **competitividad no-precio**, y es lo que explica que Alemania mantenga cuotas exportadoras con costes muy superiores a los de sus competidores. La competencia por costes es la única disponible cuando se venden bienes indiferenciados, y por eso la **especialización productiva de la ficha 10.01 determina cuánto importa este indicador** para cada país.",
            "**Dos advertencias sobre la medición.** La primera: los **niveles del coste laboral unitario no son comparables entre países** —dependen de convenciones contables, de la estructura sectorial y del tratamiento de los autónomos— pero **sus variaciones sí lo son**, razón por la que siempre se presenta en índices con año base común. La segunda: la **renta mixta de los autónomos** distorsiona el indicador, porque su remuneración figura como excedente de explotación y no como coste laboral; en un país con muchos autónomos, eso subestima el verdadero coste del trabajo, y las correcciones habituales cambian el resultado varios puntos.",
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
            { nom: "Coste laboral unitario", sub: "Lo que cuesta el trabajo por unidad producida.", cols: ["$\\mathrm{CLU} = \\dfrac{\\text{Remuneración}/\\text{asalariados}}{\\text{VAB}/\\text{ocupados}}$"] },
            { nom: "Forma equivalente", sub: "Coste laboral total sobre producción.", cols: ["$\\mathrm{CLU} = \\dfrac{\\text{Remuneración total}}{\\text{VAB en volumen}}$"] },
            { nom: "Variación", sub: "Lo que erosiona no son los salarios altos.", cols: ["$\\Delta \\mathrm{CLU} \\approx \\Delta \\text{salarios} - \\Delta \\text{productividad}$"] },
            { nom: "Competitividad-coste relativa", sub: "Solo importa frente a los socios comerciales.", cols: ["CLU relativo $= \\dfrac{\\text{CLU propio}}{\\text{CLU de los socios}}$"] },
            { nom: "Tipo de cambio real", sub: "En unión monetaria, el nominal no ayuda.", cols: ["$\\mathrm{TCR} = \\mathrm{TCN} \\times \\dfrac{\\text{precios propios}}{\\text{ajenos}}$"] },
            { nom: "Devaluación interna", sub: "Lo que queda cuando no hay tipo de cambio.", cols: ["bajar salarios nominales o subir productividad"] },
            { nom: "Efecto composición", sub: "El indicador mejora sin que mejore nada.", cols: ["destruir empleo de baja productividad ↑ la media"] },
            { nom: "Descomposición", sub: "Distingue mejora genuina de reasignación.", cols: ["$\\Delta\\pi = \\sum_i w_i \\Delta\\pi_i$ (dentro) $+ \\sum_i \\pi_i \\Delta w_i$ (entre)"] },
            { nom: "Competitividad no-precio", sub: "Por qué se puede exportar con costes altos.", cols: ["calidad, diferenciación, tecnología"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: divergencia y ajuste sin moneda propia",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos países de una misma unión monetaria a lo largo de diez años. En el **país A** los salarios acumulan un **+12 %** y la productividad un **+3 %**. En el **país B**, un **+6 %** y un **+4 %**. Ninguno de los dos tiene tipo de cambio propio frente al otro.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Años", y: "Índice CLU" },
          dominio: { x: [0, 10], y: [98, 111] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [100, 102, 104, 106, 108, 110],
          areas: [
            {
              color: "alerta",
              puntos: [[0, 100], [1, 100.84], [2, 101.69], [3, 102.54], [4, 103.41], [5, 104.28], [6, 105.15], [7, 106.04], [8, 106.93], [9, 107.83], [10, 108.74], [10, 101.92], [9, 101.73], [8, 101.54], [7, 101.34], [6, 101.15], [5, 100.96], [4, 100.76], [3, 100.57], [2, 100.38], [1, 100.19], [0, 100]],
            },
          ],
          series: [
            {
              nombre: "País A",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [10, 108.74],
              puntos: [[0, 100], [1, 100.84], [2, 101.69], [3, 102.54], [4, 103.41], [5, 104.28], [6, 105.15], [7, 106.04], [8, 106.93], [9, 107.83], [10, 108.74]],
            },
            {
              nombre: "País B",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [10, 101.92],
              puntos: [[0, 100], [1, 100.19], [2, 100.38], [3, 100.57], [4, 100.76], [5, 100.96], [6, 101.15], [7, 101.34], [8, 101.54], [9, 101.73], [10, 101.92]],
            },
          ],
          nota: "La zona sombreada es **la pérdida acumulada de competitividad-coste**, y su forma explica por qué estos desajustes son tan peligrosos: se abre **despacio y sin señales de alarma**. Ningún año concreto parece problemático —A crece menos de un punto por encima de B cada año—, y sin embargo al cabo de una década la brecha es del **6,7 %**. Con moneda propia, una depreciación del 6,3 % la cerraría en un día. Sin ella, hay que recorrer el camino de vuelta salario a salario, y la sombra de arriba muestra cuánto camino es.",
        },
        {
          tipo: "tabla",
          cabecera: ["", "País A", "País B"],
          filas: [
            ["Salarios en diez años", "+12,00 %", "+6,00 %"],
            ["Productividad en diez años", "+3,00 %", "+4,00 %"],
            ["Coste laboral unitario", "+8,74 %", "+1,92 %"],
            { celdas: ["Pérdida relativa de A frente a B", "6,69 %", "—"], clase: "total" },
            ["Bajada de salarios necesaria para recuperarlo", "6,27 %", "—"],
            ["Subida de productividad alternativa", "6,69 %", "—"],
          ],
          nota: "Obsérvese que **el país A no ha hecho nada escandaloso**: sus salarios crecieron un 1,1 % anual, un ritmo que en cualquier año concreto pasa desapercibido. Lo que ocurre es que su productividad creció menos, y la brecha se acumula. Y las dos últimas filas son la parte incómoda: recuperar la posición exige **bajar los salarios nominales un 6,3 %** —algo que la rigidez a la baja convierte en un proceso muy largo y que en la práctica acaba recayendo sobre el empleo— o **elevar la productividad un 6,7 %**, que es preferible y mucho más lento. Con tipo de cambio propio bastaría una depreciación del 6,3 % ejecutada en una tarde. Ese es el coste de renunciar al tipo de cambio, expresado en un número.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la trampa: cómo mejorar el indicador sin mejorar nada.** Una economía con cien trabajadores repartidos entre dos sectores. Cuarenta están en actividades de **productividad 150** y sesenta en actividades de **productividad 60**. La producción total es de 9.600 y la productividad media, **96**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Empleo", "Producción", "Productividad media"],
          filas: [
            ["Antes de la crisis", "100", "9.600", "96,0"],
            { celdas: ["Después de destruir 20 empleos de baja productividad", "80", "8.400", "105,0"], clase: "total" },
            ["Variación", "−20 %", "−12,5 %", "+9,4 %"],
          ],
          nota: "La productividad medida **sube un 9,4 %** mientras la producción **cae un 12,5 %** y una quinta parte de la gente se queda sin empleo. Nadie ha innovado, nadie ha invertido, ningún proceso ha mejorado: **ha cambiado quién está en la media**. El coste laboral unitario mejora en la misma proporción y puede presentarse como un avance de competitividad. Es el mismo mecanismo que hacía subir el salario medio destruyendo empleo mal pagado en la ficha 4.02, y la prueba para distinguirlo es doble: **descomponer entre efecto dentro y efecto entre sectores**, y comprobar si la mejora sobrevive cuando el empleo vuelve. Una mejora de composición se deshace en la recuperación; una genuina, no.",
          },
      ],
    },
    {
      titulo: "Caso práctico: el ajuste español posterior a 2008",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El ajuste de la economía española tras la crisis financiera es el caso de manual europeo de devaluación interna, y permite ver los conceptos de esta ficha operando sobre una economía real. Conviene recorrerlo separando lo que ocurrió de las interpretaciones que se hicieron.",
            "**El punto de partida fue una divergencia acumulada durante la expansión.** Entre la entrada en el euro y 2008, los costes laborales unitarios españoles crecieron sensiblemente por encima de los de los socios comerciales, alimentados por una expansión de la construcción de baja productividad y por una inflación persistentemente superior a la de la zona euro. El déficit exterior alcanzó niveles muy elevados, financiado con entradas de capital que el euro hacía baratas y abundantes. **La divergencia era visible en los datos y no se corrigió**, en parte porque el marco europeo de entonces vigilaba el déficit público y no los desequilibrios exteriores.",
            "**El ajuste llegó cuando la financiación se cortó**, y adoptó las tres formas que la teoría anticipa. Hubo **moderación salarial**, con reformas de la negociación colectiva que descentralizaron los convenios y facilitaron el descuelgue. Hubo **caída del empleo** de una magnitud que ningún país comparable experimentó, concentrada en construcción y en contratos temporales, con la amplificación que la ficha 10.02 explica. Y hubo **mejora del saldo exterior**, que pasó de un déficit muy grande a superávit en pocos años.",
            "**Y aquí llega la pregunta interpretativa que sigue abierta.** ¿Cuánto de la mejora de competitividad fue genuina y cuánto composición? Las descomposiciones disponibles atribuyen una **parte sustancial** al efecto composición: la destrucción de empleo en construcción y servicios de baja productividad elevó la media sin que la eficiencia mejorara. Pero no toda: hubo también un aumento real de la base exportadora, con más empresas exportando de forma regular, lo que es una mejora estructural que sobrevivió a la recuperación. **La prueba decisiva la dio el tiempo**: cuando el empleo volvió, la productividad media retrocedió, pero el saldo exterior no volvió al déficit anterior.",
            "**El coste del ajuste fue enorme y su reparto muy desigual.** Con salarios nominales rígidos a la baja, el ajuste se produjo por la vía del empleo, lo que significa que **lo soportaron íntegramente quienes lo perdieron** mientras quienes conservaron su puesto vieron caer sus salarios reales mucho menos. Es la traducción concreta de lo que la ficha 3.06 describe como consecuencia de la rigidez nominal a la baja, y el argumento de fondo a favor de los esquemas de reducción de jornada que se aplicaron en 2020 con un resultado muy distinto.",
            "**Qué quedó aprendido, en términos de política.** Que en una unión monetaria los desequilibrios de competitividad hay que vigilarlos **durante la expansión**, cuando se acumulan sin dolor, y no cuando estallan: de ahí el procedimiento europeo de desequilibrios macroeconómicos creado después. Que la devaluación interna funciona pero **su coste social depende por completo de si el ajuste recae en salarios, en horas o en empleo**. Y que la mejora del indicador no es un objetivo en sí mismo: **lo que importa es la producción y el empleo que sostiene**, y un coste laboral unitario que mejora porque hay menos gente trabajando no es una buena noticia por mucho que el gráfico apunte en la dirección deseada.",
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
            { t: "Creer que los salarios altos destruyen competitividad", d: "Lo que la erosiona es que los salarios crezcan por encima de la productividad. Un país con salarios altos y productividad alta puede tener un coste laboral unitario bajo. Confundir nivel salarial con coste unitario lleva a recomendar bajar sueldos cuando el problema puede estar íntegramente en el denominador." },
            { t: "Interpretar una mejora del indicador como una mejora real", d: "Puede deberse a que se ha destruido empleo de baja productividad, lo que sube la media sin que nada mejore: en el ejemplo, +9,4 % de productividad medida con una caída de producción del 12,5 %. Hay que descomponer entre efecto dentro de sectores y efecto de reasignación antes de celebrar nada." },
            { t: "Comparar niveles de coste laboral unitario entre países", d: "Dependen de convenciones contables, de la estructura sectorial y del tratamiento de la renta mixta de los autónomos. Solo las variaciones son comparables, y por eso el indicador se presenta siempre en índices con año base común. Comparar niveles produce diferencias que no significan nada." },
            { t: "Olvidar a los autónomos en el numerador", d: "Su renta figura como excedente de explotación y no como remuneración de asalariados, así que el coste laboral unitario subestima el coste real del trabajo. En un país con muchos autónomos, la corrección habitual —imputarles el salario medio de los asalariados— cambia el resultado varios puntos." },
            { t: "Reducir la competitividad a los costes", d: "Un país puede exportar bien con costes altos si vende productos diferenciados, de calidad reconocida o tecnológicamente difíciles de imitar. La competencia por costes es la única disponible cuando se venden bienes indiferenciados, así que cuánto importa este indicador depende de la especialización productiva de cada país." },
            { t: "Suponer que la devaluación interna equivale a una devaluación nominal", d: "El resultado buscado es el mismo, el proceso no. Una depreciación corrige el desalineamiento de golpe y sin renegociar nada; la devaluación interna exige mover a la baja millones de contratos salariales, y como los salarios nominales resisten, el ajuste tiende a recaer sobre el empleo." },
            { t: "Vigilar el indicador solo cuando el desequilibrio estalla", d: "La divergencia se acumula despacio y sin señales de alarma: en el ejemplo, poco más de un punto anual durante diez años produce una brecha del 6,7 %. Ningún año concreto parece problemático. Por eso los mecanismos de vigilancia tienen que actuar durante la expansión, que es cuando el desequilibrio se forma." },
            { t: "Tomar la mejora del indicador como objetivo de política", d: "Lo que importa es la producción y el empleo que sostiene una economía, no el valor de un cociente. Un coste laboral unitario que mejora porque hay menos gente trabajando apunta en la dirección deseada del gráfico y en la contraria del bienestar." },
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
            "Todos los ingredientes de este indicador salen de las cuentas nacionales, y su construcción exacta condiciona lo que se puede afirmar con él.",
          ],
          lista: [
            "El numerador es la **remuneración de asalariados** de la cuenta de explotación de la ficha 10.06, que **incluye las cotizaciones a cargo del empleador**. No es el salario que percibe nadie, sino el coste completo del trabajo, coherentemente con el análisis de incidencia de la ficha 10.03.",
            "El denominador es el **VAB en volumen** dividido por el empleo de las cuentas nacionales, que no coincide con el de la EPA ni con la afiliación. Mezclar el VAB de las cuentas con el empleo de la EPA produce cifras sin significado, y es un error habitual en comparaciones internacionales, como advertía la ficha 10.02.",
            "El **VAB en volumen** procede de la ficha 10.08, con toda su convención de encadenamiento: las variaciones tienen contenido y los niveles están en unidades convencionales. De ahí que el indicador se publique siempre como índice y no como una cantidad en euros por unidad.",
            "La **renta mixta de los autónomos** es el punto débil de la medición: remunera trabajo y capital a la vez y figura íntegramente en el excedente de explotación. Las correcciones que la reparten alteran tanto el numerador como la participación salarial en el PIB, y su magnitud en España no es despreciable.",
            "Y el **tipo de cambio efectivo real** de la ficha 3.10 puede calcularse deflactando por costes laborales unitarios en lugar de por precios de consumo. Ambas versiones se publican y cuentan historias distintas: la de costes mide competitividad de la producción y la de precios, poder adquisitivo relativo.",
          ],
          cierre:
            "La regla que evita casi todos los errores es la coherencia de fuentes: **numerador y denominador deben salir del mismo sistema de cuentas y de la misma definición de empleo**. Y toda comparación internacional debe hacerse en variaciones desde un año base común, nunca en niveles.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El país A sube salarios un 12 % y productividad un 3 %. ¿Cuánto pierde frente a B?", a: "Su coste laboral unitario crece un 8,74 % frente al 1,92 % de B, lo que supone una pérdida relativa del 6,69 %. Y llama la atención que A no ha hecho nada llamativo: sus salarios crecieron un 1,1 % anual, un ritmo que en ningún año concreto habría dado señales de alarma." },
            { q: "¿Cómo se corrige esa brecha sin tipo de cambio propio?", a: "Bajando salarios nominales un 6,27 % o elevando la productividad un 6,69 %. Lo primero choca con la rigidez nominal a la baja y en la práctica acaba recayendo sobre el empleo; lo segundo es preferible y mucho más lento. Con moneda propia bastaría una depreciación del 6,27 % ejecutada de una vez." },
            { q: "La productividad sube un 9,4 % y la producción cae un 12,5 %. ¿Ha mejorado la economía?", a: "No. Han desaparecido veinte empleos de baja productividad, y eso eleva la media de los que quedan sin que nadie haya innovado ni invertido. Es un efecto composición idéntico al del salario medio en la ficha 4.02, y se detecta descomponiendo la variación entre lo que ocurre dentro de cada sector y lo que ocurre por reasignación." },
            { q: "¿Cómo se comprueba si una mejora de competitividad fue genuina?", a: "Con dos pruebas. La descomposición entre efecto dentro de sectores y efecto entre sectores dice cuánto viene de reasignación de empleo. Y el tiempo: una mejora de composición se deshace cuando el empleo vuelve a los sectores de baja productividad, mientras que una genuina persiste." },
            { q: "¿Por qué no se pueden comparar niveles de coste laboral unitario entre países?", a: "Porque dependen de convenciones contables, de la composición sectorial y de cómo se trate la renta mixta de los autónomos, que remunera trabajo y capital a la vez pero figura como excedente. Las variaciones sí son comparables, y por eso el indicador se publica siempre en índices con año base común." },
            { q: "¿Puede un país exportar bien con costes laborales unitarios altos?", a: "Sí, si compite en calidad, diferenciación o tecnología difícil de imitar, que es la competitividad no-precio. La competencia por costes es la única disponible cuando se venden bienes indiferenciados, de modo que cuánto pesa este indicador depende de la especialización productiva descrita en la ficha 10.01." },
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
            { ref: "Eurostat, metodología de costes laborales unitarios", nota: "la definición armonizada y las advertencias sobre comparabilidad de niveles frente a variaciones." },
            { ref: "Banco de España, Informe Anual, capítulo de competitividad", nota: "descomposiciones del ajuste español entre efecto dentro y efecto composición, con datos actualizados." },
            { ref: "Myro y García Delgado, Lecciones de Economía Española", nota: "el capítulo de sector exterior sitúa el ajuste posterior a 2008 en su contexto y discute la competitividad no-precio." },
            { ref: "Comisión Europea, Alert Mechanism Report", nota: "el procedimiento de desequilibrios macroeconómicos creado tras la crisis; muestra qué indicadores se vigilan y con qué umbrales." },
            { ref: "Krugman, «Competitiveness: A Dangerous Obsession», 1994", nota: "por qué aplicar a los países la lógica competitiva de las empresas induce a error; conviene leerlo antes de usar la palabra competitividad." },
          ],
        },
      ],
    },
  ],
};
