/* Ficha 15.11 — Agregación directa frente a indirecta y coherencia de agregados. */

export default {
  codigo: "15.11",
  titulo: "Agregación directa frente a indirecta y coherencia de agregados",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "Ajustar el total o ajustar las partes y sumarlas dan resultados distintos, y a veces de signo contrario. Como el ajuste no es una operación lineal, no existe la opción de tener a la vez la mejor estimación del agregado y la coherencia con sus componentes.",
  requiere: "15.05 X-11 frente a SEATS · 15.09 Benchmarking y conciliación · 15.07 Diagnósticos de calidad",
  abre: "15.12 Nowcasting · 10.08 Índices encadenados · 13.02 Equilibrio por producto",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En contabilidad nacional casi nada se publica solo. El PIB va acompañado de sus componentes por el gasto y por ramas de actividad, y el usuario espera —con razón— que las partes sumen el total. El problema es que **el ajuste estacional no es una operación lineal**: la serie ajustada de una suma no es la suma de las series ajustadas. Cada componente tiene su propio patrón estacional, se le estiman sus propios factores, y al sumar los resultados no se obtiene lo mismo que ajustando el agregado directamente.",
            "Las dos opciones tienen nombre. El **ajuste directo** aplica el procedimiento a la serie del agregado, tratándola como una serie más. El **ajuste indirecto** ajusta cada componente por separado y suma los resultados. La diferencia entre ambos no es un error de nadie: es una consecuencia matemática del método, y aparece siempre, aunque su magnitud varíe.",
            "Cada opción tiene un argumento sólido a su favor y hay que entender los dos. A favor del **directo**: el agregado es la serie que interesa, tiene menos ruido que sus componentes —los irregulares se compensan parcialmente al sumar— y por tanto su estacionalidad se estima mejor. Un filtro aplicado a una serie con buena relación señal-ruido produce un resultado más fiable que la suma de doce filtros aplicados a series ruidosas. A favor del **indirecto**: garantiza que las partes sumen el total, permite tratar cada componente con los regresores de calendario y los atípicos que le corresponden, y produce un resultado explicable componente a componente.",
            "El argumento del tratamiento diferenciado es más fuerte de lo que parece. Las ramas no responden igual al calendario, como recordaba la ficha 15.03: la construcción depende mucho de los días hábiles y los servicios de no mercado, casi nada. Los atípicos son específicos: una huelga afecta a una rama, no al agregado en abstracto. Y sobre todo, **componentes con estacionalidad opuesta se cancelan parcialmente en el agregado**, de modo que el total puede tener una estacionalidad débil que oculta dos patrones fuertes y contrarios. El ejemplo numérico muestra hasta dónde llega ese efecto.",
            "Las directrices europeas no imponen una opción, y esa neutralidad es deliberada: reconocen que ninguna domina a la otra. Lo que sí exigen es **coherencia y documentación**: elegir un criterio, aplicarlo de forma consistente a todo el cuadro y publicarlo. Lo que no se admite es mezclar —ajustar unas partidas directamente y otras por agregación según convenga—, porque entonces las discrepancias dejan de tener explicación.",
            "En la práctica la mayoría de los institutos publica **coherencia por construcción**, es decir, hace que el cuadro cuadre, y para conseguirlo combina el ajuste indirecto con la conciliación de la ficha 15.09. La discrepancia entre lo que da el ajuste directo del agregado y la suma de los componentes ajustados se reparte según un criterio explícito. No desaparece: se coloca en algún sitio, y saber dónde forma parte de leer bien la estadística.",
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
            { nom: "El hecho de partida", sub: "De aquí viene todo lo demás.", cols: ["El ajuste no es lineal: $\\text{ajustar}(A{+}B) \\neq \\text{ajustar}(A) + \\text{ajustar}(B)$"] },
            { nom: "Ajuste directo", sub: "El agregado como una serie más.", cols: ["Se ajusta el total; las partes no suman"] },
            { nom: "Ajuste indirecto", sub: "Componente a componente.", cols: ["Se ajusta cada parte y se suman los resultados"] },
            { nom: "A favor del directo", sub: "Mejor relación señal-ruido.", cols: ["Los irregulares se compensan al agregar"] },
            { nom: "A favor del indirecto", sub: "Tres razones distintas.", cols: ["Coherencia · calendario por rama · atípicos específicos"] },
            { nom: "Cancelación de patrones", sub: "El caso que más separa ambos métodos.", cols: ["Componentes con estacionalidad opuesta se anulan en el total"] },
            { nom: "Exigencia europea", sub: "No impone opción.", cols: ["Elegir un criterio, aplicarlo a todo y documentarlo"] },
            { nom: "Lo inaceptable", sub: "Peor que cualquiera de las dos.", cols: ["Mezclar criterios según convenga en cada partida"] },
            { nom: "Práctica habitual", sub: "Cómo se resuelve de hecho.", cols: ["Indirecto más conciliación: la discrepancia se coloca"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: turismo e industria en el mismo total",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La serie del bloque se descompone en dos ramas que suman exactamente el total: **turismo**, que alcanza su máximo en el tercer trimestre, e **industria**, que lo alcanza su mínimo en el mismo trimestre porque cierra por vacaciones. Es un caso extremo a propósito, pero no irreal: es la estructura de muchas economías mediterráneas.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Factores estacionales", "T1", "T2", "T3", "T4"],
          filas: [
            ["Turismo", "0,6048", "0,9725", "1,6603", "0,7625"],
            ["Industria", "1,1410", "1,0882", "0,5078", "1,2630"],
            { celdas: ["Total", "0,9711", "1,0520", "0,8709", "1,1060"], clase: "total" },
          ],
          nota: "Los dos patrones son **casi opuestos**: en el tercer trimestre el turismo está un 66 % por encima de su tendencia y la industria un 49 % por debajo. Al sumarlos, el total queda solo un 13 % por debajo. **La estacionalidad del agregado es mucho más débil que la de sus partes**, y esa amortiguación es real pero engañosa: oculta que debajo hay dos economías moviéndose en direcciones contrarias.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Trimestre", y: "Índice ajustado" },
          dominio: { x: [1, 12], y: [96, 111] },
          marcasX: [1, 4, 8, 12],
          marcasY: [98, 101, 104, 107],
          series: [
            {
              nombre: "Ajuste directo",
              color: "acento",
              etiquetaEn: [1.3, 109.8],
              puntos: [[1, 99.06], [2, 99.62], [3, 100.47], [4, 100.82], [5, 101.33], [6, 101.81], [7, 102.42], [8, 103.35], [9, 104.00], [10, 104.75], [11, 104.95], [12, 106.15]],
            },
            {
              nombre: "Ajuste indirecto",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [5.6, 109.8],
              puntos: [[1, 98.30], [2, 99.59], [3, 101.22], [4, 100.76], [5, 101.16], [6, 101.87], [7, 101.84], [8, 103.60], [9, 104.37], [10, 104.88], [11, 102.75], [12, 106.68]],
            },
          ],
          nota: "Las dos series ajustan **exactamente los mismos datos brutos** y cuentan historias distintas. El ajuste directo produce una subida limpia y monótona; el indirecto oscila, y en el trimestre 11 llega a caer más de dos puntos por debajo. La diferencia máxima es de **2,19 puntos** y la media absoluta, de **0,49**. Ninguna de las dos líneas está mal: son dos respuestas legítimas a la misma pregunta.",
        },
        {
          tipo: "parrafos",
          items: [
            "El caso que obliga a tomar la decisión en serio aparece al calcular las tasas. Entre el segundo y el tercer trimestre de 2024, el **ajuste directo da +0,60 %** y el **indirecto da −0,03 %**. Signos contrarios. Un comentarista que usara la primera serie diría que la economía siguió creciendo; con la segunda, que se estancó. Y ambas cifras se habrían obtenido con el mismo método, sobre los mismos datos, cambiando solo el orden de las operaciones.",
            "La razón de la discrepancia es precisamente la cancelación de la tabla anterior. Al ajustar el total directamente, el filtro ve una estacionalidad suave —factores entre 0,87 y 1,11— y la retira. Al ajustar cada rama, retira una estacionalidad enorme en cada una —el turismo con 1,66 en el tercer trimestre— y las diferencias en el irregular de cada componente ya no se cancelan al sumar, porque se han dividido por factores muy distintos. **Cuanto más opuestos son los patrones de los componentes, más se separan ambos métodos.**",
            "Esto sugiere un criterio práctico que las directrices recogen: **cuando los componentes tienen patrones estacionales muy distintos, el ajuste indirecto es preferible**, porque el directo estaría estimando un patrón promedio que no describe bien a ninguna de las partes. Cuando los componentes tienen patrones parecidos, ambos métodos coinciden casi y conviene el directo, que aprovecha la mejor relación señal-ruido del agregado. El criterio no es doctrinal: depende de la estructura de la serie concreta.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: hacer cuadrar un cuadro entero",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Lo anterior planteaba la elección para un agregado y dos componentes. En contabilidad nacional el problema es mucho mayor: hay que ajustar un cuadro con decenas de series que deben cumplir varias identidades a la vez, y la elección no se toma serie a serie sino para el conjunto.",
            "La primera dificultad es que **las identidades son múltiples y cruzadas**. El PIB debe ser la suma de sus componentes por el gasto y, simultáneamente, la suma del valor añadido de las ramas más los impuestos netos sobre los productos. Cada partida participa en varias identidades. Ajustar cada una por separado rompe todas, y arreglar una puede romper otra: no es un problema de una dimensión sino de varias, y por eso se resuelve como una conciliación conjunta al modo de la ficha 15.09.",
            "La segunda es que **la restricción temporal sigue viva**. Las series ajustadas deben además cuadrar con los totales anuales. Así que el problema real combina coherencia contable entre partidas y coherencia temporal con las cuentas anuales, dos familias de restricciones que se imponen a la vez sobre el mismo conjunto de series. La solución es un problema de optimización con restricciones lineales, de tamaño considerable, y su formulación es más importante que el método de ajuste que se haya usado antes.",
            "La tercera dificultad es específica de las cuentas y no tiene solución limpia: **los volúmenes encadenados no son aditivos**. Como explica la ficha 10.08, con precios del año anterior encadenados la suma de los componentes en volumen no da el agregado en volumen ni siquiera antes de ajustar. Se acumulan entonces dos fuentes independientes de discrepancia —el encadenamiento y la no linealidad del ajuste— y separarlas exige calcular ambas por separado, lo que pocos institutos publican.",
            "La práctica que ha terminado imponiéndose es pragmática: **ajustar indirectamente y conciliar de forma explícita**, colocando la discrepancia en una partida designada o repartiéndola con un criterio publicado. Lo importante desde el punto de vista del usuario no es qué opción se elija, sino que esté documentada, porque **la discrepancia no desaparece nunca: solo se decide dónde vive**. Una serie que cuadra perfectamente en un cuadro contable ha absorbido en algún sitio lo que el ajuste no podía cuadrar.",
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
            { t: "Suponer que la suma de series ajustadas es la serie ajustada de la suma", d: "No lo es, porque el ajuste no es lineal. Cada componente tiene sus propios factores estacionales y al sumar los resultados no se obtiene lo mismo que ajustando el agregado. La diferencia no es un error: es una consecuencia matemática del método que aparece siempre." },
            { t: "Creer que una de las dos opciones es la correcta", d: "El directo aprovecha la mejor relación señal-ruido del agregado; el indirecto garantiza coherencia y permite tratar cada componente con su calendario y sus atípicos. Las directrices europeas no imponen ninguna precisamente porque ninguna domina. Lo que exigen es elegir un criterio, aplicarlo a todo el cuadro y documentarlo." },
            { t: "Mezclar criterios según la partida", d: "Es peor que cualquiera de las dos opciones. Ajustar unas partidas directamente y otras por agregación según convenga hace que las discrepancias del cuadro dejen de tener explicación, y con ellas la posibilidad de auditar el resultado." },
            { t: "Leer la estacionalidad suave de un agregado como estacionalidad débil", d: "Puede ocultar dos patrones fuertes y opuestos que se cancelan. En el ejemplo, el turismo está un 66 % por encima de su tendencia en el tercer trimestre y la industria un 49 % por debajo, y el total solo un 13 % por debajo. La amortiguación es real y a la vez engañosa sobre lo que ocurre debajo." },
            { t: "Ignorar que la elección puede cambiar el signo del crecimiento", d: "En el ejemplo, un trimestre da +0,60 % por ajuste directo y −0,03 % por indirecto: crecimiento frente a estancamiento, con los mismos datos y el mismo método, cambiando solo el orden de las operaciones. No es un caso patológico: ocurre cuando los componentes tienen patrones estacionales muy distintos." },
            { t: "Ajustar directamente un agregado con componentes muy heterogéneos", d: "El filtro estimará un patrón estacional promedio que no describe bien a ninguna de las partes, y además aplicará un único tratamiento de calendario a ramas con sensibilidades opuestas. Cuando los patrones difieren mucho, el indirecto es preferible por esa razón concreta." },
            { t: "Confundir no aditividad del encadenamiento con la del ajuste", d: "Los volúmenes encadenados ya no son aditivos antes de ajustar, y el ajuste añade su propia no linealidad. Son dos fuentes independientes de discrepancia entre el agregado y la suma de sus partes, y diagnosticar por qué un cuadro no cuadra exige calcularlas por separado." },
            { t: "Interpretar que un cuadro que cuadra no tiene discrepancia", d: "La discrepancia no desaparece con la conciliación: se coloca en algún sitio, sea una partida designada o un reparto con criterio publicado. Un cuadro perfectamente coherente ha absorbido en alguna parte lo que el ajuste no podía cuadrar, y saber dónde forma parte de leer bien la estadística." },
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
            "Este es el punto donde el ajuste estacional choca de frente con la exigencia central del sistema de cuentas, que es la coherencia interna.",
          ],
          lista: [
            "El SEC se construye sobre **identidades que no admiten residuo**. El equilibrio por producto de la ficha 13.02 —recursos igual a empleos— y la igualdad del PIB por los tres enfoques de la ficha 10.07 son restricciones contables, no aproximaciones. El ajuste estacional las rompe por construcción al ser no lineal, y esa tensión no tiene solución elegante: solo procedimientos de conciliación explícitos.",
            "La heterogeneidad que hace preferible el ajuste indirecto es la que describe la **clasificación de actividades** de la ficha 12.01. Turismo, construcción, industria y servicios de no mercado tienen estacionalidades y sensibilidades al calendario muy distintas, y en algunos casos opuestas. Un agregado nacional promedia realidades que se mueven en direcciones contrarias, y eso es un argumento sustantivo, no formal, a favor de ajustar por ramas.",
            "La restricción **temporal** y la **contable** se imponen a la vez. Las series ajustadas deben cuadrar con los totales anuales de la ficha 15.09 y mantener las identidades entre partidas en cada trimestre. Formalmente es un problema de optimización con dos familias de restricciones lineales sobre el mismo conjunto de series, y su planteamiento pesa más en el resultado final que la elección entre X-11 y SEATS.",
            "Los **volúmenes encadenados** de la ficha 10.08 añaden una no aditividad previa e independiente. La discrepancia total entre el agregado y la suma de las partes tiene, por tanto, dos orígenes que se superponen, y atribuir toda la diferencia al ajuste estacional es un diagnóstico erróneo frecuente. Distinguirlos requiere calcular la discrepancia del encadenamiento sobre los datos brutos.",
            "Hay por último una consecuencia sobre el **análisis por contribuciones**. Descomponer el crecimiento del PIB en las aportaciones de sus componentes exige que estos sumen el total; si la coherencia se ha impuesto colocando una discrepancia en alguna partida, esa partida arrastra un residuo que no tiene interpretación económica. Conviene saber cuál es antes de escribir una frase sobre su contribución.",
          ],
          cierre:
            "La consecuencia práctica: no se puede tener a la vez la mejor estimación del agregado y la coherencia con sus componentes. La elección es real, sus efectos llegan a cambiar el signo de un crecimiento trimestral, y lo único exigible es que esté documentada.",
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
              q: "¿Por qué la suma de las series ajustadas no coincide con la serie ajustada de la suma?",
              a: "Porque el ajuste estacional no es una operación lineal. Cada componente tiene su propio patrón estacional y se le estiman sus propios factores; al sumar los resultados, la operación no conmuta con el filtrado. La diferencia aparece siempre, aunque su magnitud dependa de cuánto se parezcan los patrones estacionales de los componentes.",
            },
            {
              q: "El turismo tiene un factor de 1,66 en el tercer trimestre y la industria de 0,51, pero el total tiene 0,87. ¿Qué está ocurriendo?",
              a: "Los dos patrones son casi opuestos y se cancelan parcialmente al agregar. El turismo está un 66 % por encima de su tendencia y la industria un 49 % por debajo, y el total queda solo un 13 % por debajo. La estacionalidad del agregado es mucho más débil que la de sus partes, lo que amortigua la cifra pero oculta que debajo hay dos economías moviéndose en direcciones contrarias.",
            },
            {
              q: "Un trimestre da +0,60 % por ajuste directo y −0,03 % por indirecto. ¿Cuál es correcto?",
              a: "Los dos, porque son dos respuestas legítimas a la misma pregunta con los mismos datos. La discrepancia surge de la cancelación de patrones: el ajuste directo ve una estacionalidad suave en el total y la retira, mientras que el indirecto retira estacionalidades enormes en cada rama y sus irregulares ya no se cancelan al sumar. Cuanto más opuestos son los patrones, más se separan ambos métodos.",
            },
            {
              q: "¿Cuándo es preferible el ajuste indirecto y cuándo el directo?",
              a: "El indirecto cuando los componentes tienen patrones estacionales muy distintos, porque el directo estaría estimando un promedio que no describe bien a ninguna parte, y además permite dar a cada rama su calendario y sus atípicos. El directo cuando los patrones se parecen, porque el agregado tiene mejor relación señal-ruido —los irregulares se compensan al sumar— y su estacionalidad se estima mejor.",
            },
            {
              q: "Un cuadro de cuentas trimestrales ajustado cuadra perfectamente. ¿Significa que no hubo discrepancia?",
              a: "No. La discrepancia no desaparece con la conciliación: se coloca en algún sitio, sea una partida designada o un reparto con criterio publicado. Además, en volúmenes encadenados hay una no aditividad previa e independiente del ajuste. Un cuadro coherente ha absorbido en alguna parte lo que el ajuste no podía cuadrar, y esa partida arrastra un residuo sin interpretación económica.",
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
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment, capítulo de agregación", nota: "los criterios para elegir entre directo e indirecto y la exigencia de coherencia y documentación; el marco de referencia." },
            { ref: "Eurostat, Handbook on Quarterly National Accounts", nota: "el tratamiento conjunto de la coherencia contable y la temporal, y las técnicas de conciliación de cuadros completos." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "la discusión práctica sobre dónde colocar la discrepancia y cómo documentarla para que el usuario pueda interpretarla." },
            { ref: "Ghysels y Osborn, The Econometric Analysis of Seasonal Time Series", nota: "el tratamiento formal de por qué el ajuste no conmuta con la agregación y qué condiciones harían falta para que lo hiciera." },
          ],
        },
      ],
    },
  ],
};
