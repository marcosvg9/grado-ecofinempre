/* Ficha 16.09 — Aplicación a cuentas nacionales y estadística oficial. */

export default {
  codigo: "16.09",
  titulo: "Aplicación a cuentas nacionales y estadística oficial",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "5 h",
  nucleo:
    "El sistema de cuentas es una jerarquía enorme con restricciones que se cortan unas a otras. Ahí la coherencia no es una mejora opcional sino un requisito, y la compilación lleva décadas resolviéndolo con criterios que este bloque permite escribir de forma reproducible.",
  requiere: "16.04 Combinación óptima y MinT · 16.02 Coherencia y la matriz de sumas · 13.02 Equilibrio por producto",
  abre: "16.10 Herramientas y práctica · 10.07 Los tres enfoques · 15.09 Benchmarking",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las jerarquías de los ejemplos anteriores eran árboles limpios con una restricción por nodo. El sistema de cuentas nacionales es otra cosa: **un conjunto de restricciones que se cruzan**, donde una misma partida participa a la vez en la identidad de su rama, en la de su producto y en la del agregado por el gasto. Formalmente sigue siendo una matriz de sumas de la ficha 16.02, solo que con muchas más filas y sin estructura de árbol.",
            "El caso más exigente es el **marco de origen y destino**. Una tabla con productos en las filas y ramas en las columnas debe cuadrar simultáneamente por ambas dimensiones: cada producto tiene que equilibrar recursos y empleos, según la identidad de la ficha 13.02, y cada rama tiene que cuadrar su producción con sus insumos y su valor añadido. Ninguna celda es libre: cada una participa en dos restricciones que se cortan en ella.",
            "A eso se suman las identidades del nivel superior. El PIB debe coincidir por los **tres enfoques** de la ficha 10.07 —producción, gasto y rentas—, lo que impone restricciones adicionales entre bloques de la contabilidad que se estiman con fuentes distintas. Y las cuentas de cada **sector institucional** de la ficha 12.01 deben cerrar por separado y sumar el total de la economía. Es una estructura de restricciones densa, no una jerarquía anidada.",
            "Hay además restricciones de naturaleza distinta que conviene separar. Algunas son **contables**: se derivan de las definiciones y deben cumplirse exactamente. Otras son **vinculantes por norma**: el dato anual manda sobre el trimestral según la ficha 15.09, y ciertos agregados no se pueden retocar porque tienen consecuencias jurídicas. En el lenguaje de este bloque, las segundas equivalen a declarar varianza cero, lo que convierte la reconciliación en un problema con restricciones duras además de las de coherencia.",
            "Lo que la compilación de cuentas hace desde siempre **es reconciliación**, aunque el vocabulario sea otro. Confrontar estimaciones obtenidas por vías distintas y ajustarlas hasta que cuadren es proyectar sobre el subespacio coherente. La diferencia está en el criterio: el compilador reparte según su juicio sobre qué fuente es más fiable, y ese juicio es sólido y experimentado, pero no está escrito, no se puede auditar y se pierde cuando la persona cambia de puesto.",
            "Ahí está la aportación concreta de este bloque a la estadística oficial, y conviene enunciarla con modestia. **No propone reconciliar donde no se reconcilia: propone escribir el criterio con el que ya se reconcilia.** Una matriz de ponderaciones explícita es discutible, revisable y reproducible; un juicio experto no lo es. Que además la teoría diga que el reparto óptimo reduce el error esperado es un argumento adicional, pero el argumento principal es de transparencia.",
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
            { nom: "Restricciones cruzadas", sub: "No es un árbol.", cols: ["Una partida participa en varias identidades a la vez"] },
            { nom: "Marco origen-destino", sub: "El caso más exigente.", cols: ["Cuadre simultáneo por filas (productos) y columnas (ramas)"] },
            { nom: "Los tres enfoques", sub: "Restricción entre bloques.", cols: ["Producción, gasto y rentas deben dar el mismo PIB"] },
            { nom: "Cuentas por sector", sub: "Restricciones adicionales.", cols: ["Cada sector cierra y todos suman la economía"] },
            { nom: "Restricción contable", sub: "Se deriva de la definición.", cols: ["Debe cumplirse exactamente, sin residuo"] },
            { nom: "Restricción vinculante", sub: "Impuesta por norma.", cols: ["Equivale a varianza cero: no se puede tocar"] },
            { nom: "Compilación", sub: "Lo que ya se hace.", cols: ["Confrontar fuentes y ajustar: es reconciliar"] },
            { nom: "Lo que aporta el bloque", sub: "Con modestia.", cols: ["Escribir el criterio, no cambiar la práctica"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: cuántas restricciones tiene una tabla",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Considérese una tabla cuadrada con **n productos y n ramas**, que debe cuadrar por filas y por columnas. Hay $n^2$ **celdas** y $2n$ **restricciones**, una por fila y una por columna, de las cuales una es redundante porque el total general se cuenta dos veces: quedan $2n - 1$ restricciones efectivas y $(n-1)^2$ grados de libertad.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Dimensión de la tabla (n × n)", y: "Cantidad" },
          dominio: { x: [10, 50], y: [0, 2800] },
          marcasX: [10, 20, 30, 40, 50],
          marcasY: [0, 900, 1800, 2700],
          series: [
            {
              nombre: "Celdas de la tabla",
              color: "acento",
              etiquetaEn: [11, 2620],
              puntos: [[10, 100], [20, 400], [30, 900], [40, 1600], [50, 2500]],
            },
            {
              nombre: "Restricciones efectivas",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [11, 2200],
              puntos: [[10, 19], [20, 39], [30, 59], [40, 79], [50, 99]],
            },
          ],
          nota: "Las celdas crecen con el **cuadrado** de la dimensión y las restricciones solo **linealmente**. En una tabla de 10 × 10, las 19 restricciones son el 19 % de las 100 celdas; en una de 50 × 50, las 99 restricciones son apenas el **4 %** de las 2.500. Cuanto mayor es el detalle, **menos ata la coherencia** y más margen queda para que las estimaciones difieran sin violar ninguna identidad.",
        },
        {
          tipo: "tabla",
          cabecera: ["Dimensión", "Celdas", "Restricciones", "Grados de libertad", "Restricciones sobre celdas"],
          filas: [
            ["10 × 10", "100", "19", "81", "19,0 %"],
            ["20 × 20", "400", "39", "361", "9,8 %"],
            ["50 × 50", "2.500", "99", "2.401", "4,0 %"],
            { celdas: ["100 × 100", "10.000", "199", "9.801", "2,0 %"], clase: "total" },
          ],
          nota: "Los grados de libertad son exactamente $(n-1)^2$, y la comprobación cuadra en las cuatro filas. La lectura es importante y algo incómoda: **cuadrar una tabla grande es una restricción débil**. Que un cuadro de origen y destino cierre no garantiza que sus celdas estén bien estimadas; solo que no se contradicen en las márgenes, que es una condición mucho más floja de lo que su apariencia de rigor sugiere.",
        },
        {
          tipo: "parrafos",
          items: [
            "Ese resultado matiza una intuición extendida. Se tiende a pensar que las identidades contables disciplinan fuertemente las estimaciones, y en agregados pequeños es cierto. En el detalle no lo es: con dos mil quinientas celdas y noventa y nueve restricciones, hay **enorme libertad** para que las cifras individuales estén equivocadas sin que ningún cuadre lo revele. La coherencia es necesaria y está muy lejos de ser suficiente.",
            "De ahí que en cuentas nacionales el trabajo duro no sea imponer las identidades sino **conseguir buenas estimaciones celda a celda**, y que el cuadre sea el último paso y no el criterio de calidad. Es la misma advertencia que la ficha 16.01 hacía sobre confundir coherencia con exactitud, aquí con números que la cuantifican.",
            "El caso de las restricciones **vinculantes** merece una nota aparte. Cuando un agregado no se puede tocar —porque manda el dato anual, o porque tiene consecuencias jurídicas—, la reconciliación deja de ser una proyección libre. Formalmente el problema sigue siendo resoluble: se trata de una proyección sobre el subespacio coherente restringida además a un hiperplano fijo. Prácticamente significa que **todo el ajuste recae sobre las series que sí se pueden mover**, que reciben un desplazamiento mayor del que les correspondería por su fiabilidad.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: escribir el criterio del compilador",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Imagínese un instituto que decide formalizar su proceso de cuadre. No pretende cambiar los resultados sino documentar cómo se obtienen, y el ejercicio revela bastante sobre lo que estaba ocurriendo implícitamente.",
            "**El primer descubrimiento suele ser que el criterio existe y es coherente.** Los compiladores experimentados no reparten al azar: saben que la encuesta industrial es más fiable que la estimación de existencias, que el dato de afiliación es firme y que ciertas partidas se calculan por diferencia y absorben todo el residuo. Escribir esas creencias como una diagonal de fiabilidades relativas suele ser directo, y el resultado se parece bastante a lo que se venía haciendo.",
            "**El segundo es que el criterio no es uniforme.** Distintas personas reparten de forma distinta, y la misma persona reparte de forma distinta según el periodo. Eso no es necesariamente malo —puede reflejar información sobre circunstancias concretas— pero significa que la serie histórica se ha construido con criterios cambiantes, y eso sí complica la interpretación de sus revisiones.",
            "**El tercero es incómodo**: al escribir el criterio, algunas decisiones dejan de parecer defendibles. Colocar sistemáticamente la discrepancia en la partida de variación de existencias, que es práctica común, equivale a declarar que esa partida tiene varianza infinita, es decir, que su estimación no vale nada. Puede ser cierto, y si lo es conviene decirlo; si no lo es, la práctica está deteriorando una estimación que era mejor de lo que ese trato sugiere.",
            "La conclusión razonable no es sustituir el juicio experto por un algoritmo. Es **usar el algoritmo para hacer explícito el juicio**, comprobar que la matriz resultante describe creencias que se sostienen al enunciarlas, y ganar la reproducibilidad que la estadística oficial necesita. La ficha 15.06 defendía lo mismo a propósito de las especificaciones de ajuste estacional: lo que se archiva y se audita no puede ser una intuición.",
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
            { t: "Tratar el sistema de cuentas como una jerarquía anidada", d: "No lo es: las restricciones se cruzan, y una misma partida participa a la vez en la identidad de su rama, en la de su producto y en la del agregado por el gasto. El aparato de la matriz de sumas sirve igual, pero la intuición del árbol y los métodos que la presuponen, como el top-down, dejan de tener sentido." },
            { t: "Creer que cuadrar una tabla garantiza calidad", d: "En una tabla de 50 × 50 hay 2.500 celdas y solo 99 restricciones efectivas: apenas un 4 %. Queda enorme libertad para que las cifras individuales estén equivocadas sin que ningún cuadre lo revele. La coherencia es necesaria y muy lejos de suficiente, y en el detalle es una restricción débil." },
            { t: "Olvidar la redundancia entre restricciones", d: "En una tabla que cuadra por filas y columnas, una de las 2n restricciones es redundante porque el total general se cuenta dos veces. Contarlas todas como independientes sobrestima cuánto atan y produce sistemas mal planteados al implementar la reconciliación." },
            { t: "Ignorar que hay restricciones de dos naturalezas", d: "Las contables se derivan de definiciones y deben cumplirse exactamente. Las vinculantes por norma —el dato anual manda, ciertos agregados no se tocan— equivalen a varianza cero y convierten el problema en una proyección con restricciones duras. Mezclarlas lleva a plantear mal el reparto." },
            { t: "Colocar siempre la discrepancia en la misma partida sin justificarlo", d: "Hacerlo equivale a declarar que esa partida tiene varianza infinita, es decir, que su estimación no vale nada. Puede ser cierto y entonces conviene decirlo; si no lo es, la práctica está deteriorando sistemáticamente una estimación mejor de lo que ese trato sugiere." },
            { t: "Pretender sustituir el juicio experto por un algoritmo", d: "El criterio del compilador suele ser sólido y estar bien informado sobre las fuentes. Lo que aporta este marco es escribirlo, no reemplazarlo: una matriz explícita es discutible, revisable y reproducible, mientras que una intuición no se puede auditar ni sobrevive al cambio de la persona." },
            { t: "Reconciliar magnitudes no aditivas", d: "Los volúmenes encadenados no son aditivos ni en los datos observados, y las tasas no son sumas. Imponerles restricciones de suma es imponer identidades que las magnitudes no cumplen. Hay que reconciliar sobre valores nominales o sobre volúmenes a precios de un año base, y derivar después." },
            { t: "Suponer que el criterio de reparto ha sido estable en el tiempo", d: "Distintas personas reparten de forma distinta y la misma persona varía según el periodo. La serie histórica se ha construido con criterios cambiantes, lo que complica la interpretación de sus revisiones y es un argumento adicional para documentar el procedimiento." },
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
            "Esta ficha es en sí misma un puente, así que aquí conviene precisar dónde encaja cada operación del sistema dentro del marco del bloque.",
          ],
          lista: [
            "El **equilibrio por producto** de la ficha 13.02 —recursos igual a empleos, producto a producto— es un conjunto de filas de la matriz de sumas. El **cuadre por ramas** son otras tantas columnas. Juntas forman el marco de origen y destino, que es el caso de restricciones cruzadas por excelencia y el más exigente de todo el sistema.",
            "La **discrepancia estadística** que algunos países publican es la decisión de no reconciliar: se reconoce que las estimaciones no cuadran y se deja la diferencia a la vista. Es transparente y legítimo. Repartirla con criterio explícito es la alternativa, también legítima. Lo que no informa es repartirla sin decir cómo, que es la práctica más extendida.",
            "El **benchmarking** de la ficha 15.09 es reconciliación con restricción vinculante sobre el nivel anual. La **desagregación temporal** de la ficha 15.10 es el caso en que el nivel de alta frecuencia no se observa en absoluto. Y la **agregación directa o indirecta** de la ficha 15.11 es la elección de qué nivel privilegiar al ajustar estacionalmente. Las tres son casos particulares del mismo problema con distintos supuestos sobre quién sabe más.",
            "Las **cuentas trimestrales** combinan todas esas capas a la vez: hay que desagregar temporalmente, ajustar estacionalmente, cuadrar con el anual y mantener las identidades contables entre partidas. Formalmente es un único problema de proyección con varias familias de restricciones; en la práctica se resuelve por etapas, y el orden de las etapas afecta al resultado sin que casi nunca se documente.",
            "Por último, el **programa de transmisión** europeo obliga a enviar cuadros completos y coherentes. Esa obligación es la que hace que la reconciliación no sea opcional en estadística oficial: no se puede transmitir un cuadro con residuos sin explicar. La coherencia deja de ser una mejora de la previsión para convertirse en un requisito de cumplimiento.",
          ],
          cierre:
            "La consecuencia práctica: en cuentas nacionales la pregunta nunca es si reconciliar, sino con qué criterio y en qué orden. Ambas cosas afectan al resultado y ambas suelen quedar sin documentar.",
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
              q: "Una tabla de origen y destino de 50 × 50 debe cuadrar por filas y columnas. ¿Cuántos grados de libertad tiene?",
              a: "2.401, que es $(50-1)^2$. Hay 2.500 celdas y $2n = 100$ restricciones, de las cuales una es redundante porque el total general se cuenta dos veces: quedan 99 efectivas. Contar las 100 como independientes sobrestima cuánto atan y produce sistemas mal planteados al implementar la reconciliación.",
            },
            {
              q: "¿Por qué se dice que cuadrar una tabla grande es una restricción débil?",
              a: "Porque las celdas crecen con el cuadrado de la dimensión y las restricciones solo linealmente. En una tabla de 10 × 10 las restricciones son el 19 % de las celdas; en una de 50 × 50, el 4 %; en una de 100 × 100, el 2 %. Queda enorme libertad para que las cifras individuales estén equivocadas sin que ningún cuadre lo revele.",
            },
            {
              q: "¿Qué distingue una restricción contable de una vinculante por norma?",
              a: "La contable se deriva de una definición y debe cumplirse exactamente: el PIB es la suma de sus componentes porque así se define. La vinculante por norma impone que cierto dato no se toque —el anual manda sobre el trimestral, algunos agregados tienen consecuencias jurídicas—, lo que equivale a declarar varianza cero y convierte el problema en una proyección con restricciones duras.",
            },
            {
              q: "Un compilador coloca sistemáticamente la discrepancia en la variación de existencias. ¿Qué está declarando?",
              a: "Que esa partida tiene varianza infinita, es decir, que su estimación no vale nada y puede absorber cualquier residuo sin coste. Puede ser cierto, y si lo es conviene enunciarlo explícitamente. Si no lo es, la práctica está deteriorando de forma sistemática una estimación mejor de lo que ese trato sugiere.",
            },
            {
              q: "¿Qué aporta este marco a la compilación de cuentas nacionales?",
              a: "No reconciliar donde no se reconciliaba, sino escribir el criterio con el que ya se reconcilia. El juicio del compilador sobre qué fuente es más fiable suele ser sólido, pero no está documentado, no se puede auditar y se pierde al cambiar la persona. Una matriz de ponderaciones explícita es discutible, revisable y reproducible; el argumento principal es de transparencia.",
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
              q: "¿Es el sistema de cuentas nacionales una jerarquía anidada?",
              opciones: [
                "Sí, con la salvedad del sector resto del mundo",
                "No: las restricciones se cruzan, y una partida participa a la vez en la identidad de su rama, en la de su producto y en la del agregado",
                "Sí: los sectores se agrupan en la economía total como las hojas en su rama",
                "No: las cuentas nacionales no admiten formulación matricial",
              ],
              correcta: 1,
              porque: [
                "El resto del mundo plantea sus propias particularidades y no es lo que rompe la estructura de árbol.",
                "El marco origen-destino exige cuadrar a la vez por filas y por columnas, y ninguna estructura de árbol recoge dos criterios cruzados.",
                "Los sectores sí se agregan; el problema es que hay otras identidades simultáneas que un árbol no puede representar.",
                "Sí la admiten: lo que hace falta es una matriz de sumas con restricciones cruzadas, no un árbol.",
              ],
            },
            {
              q: "Una tabla origen-destino de 50 × 50 cuadra por filas y columnas. ¿Garantiza eso la calidad de sus cifras?",
              opciones: [
                "No, pero el porcentaje de restricciones aumenta con el tamaño de la tabla",
                "Sí: cuadrar simultáneamente por dos criterios es una restricción muy exigente",
                "Sí, si además coinciden los tres enfoques de cálculo del PIB",
                "No: hay 2.500 celdas y solo unas 99 restricciones efectivas, apenas un 4 %",
              ],
              correcta: 3,
              porque: [
                "Ocurre lo contrario: las celdas crecen con el cuadrado y las restricciones solo linealmente, así que la proporción cae.",
                "Parece exigente y es débil en términos relativos: la proporción de restricciones sobre celdas es pequeña.",
                "La coincidencia de los tres enfoques es otra restricción, y se impone en la conciliación en lugar de emerger de ella.",
                "Queda enorme libertad para que las cifras individuales estén equivocadas mientras el conjunto cuadra perfectamente.",
              ],
            },
            {
              q: "Un compilador coloca sistemáticamente la discrepancia en la variación de existencias. ¿Qué está declarando?",
              opciones: [
                "Que esa partida tiene varianza infinita, es decir, que su estimación no vale nada",
                "Que la discrepancia procede de esa partida",
                "Que aplica el criterio recomendado por el reglamento europeo",
                "Que esa partida es la más volátil de las cuentas",
              ],
              correcta: 0,
              porque: [
                "Puede ser cierto —la variación de existencias es la partida peor medida— y entonces conviene decirlo explícitamente en lugar de que quede implícito en el procedimiento.",
                "No hay forma de saber de dónde procede: precisamente por eso es una discrepancia.",
                "El reglamento no designa una partida de cierre: la elección es del compilador.",
                "Su volatilidad es real y no es lo que justifica cargarle toda la discrepancia.",
              ],
            },
            {
              q: "¿Qué aporta el marco de reconciliación a la compilación de cuentas nacionales, que ya venía cuadrando sus tablas?",
              opciones: [
                "Escribir el criterio: hacer explícito y reproducible un reparto que hasta ahora estaba en la cabeza de quien compila",
                "Sustituir el juicio experto del compilador por un algoritmo objetivo",
                "Eliminar la necesidad de confrontar fuentes",
                "Reducir el tiempo de compilación",
              ],
              correcta: 0,
              porque: [
                "Un criterio escrito se puede discutir, auditar y reproducir; uno implícito no. Y además revela que el reparto ha podido cambiar con las personas y los periodos.",
                "El criterio del compilador suele ser sólido y estar bien informado sobre las fuentes: no se trata de reemplazarlo.",
                "Confrontar fuentes es la esencia de compilar y sigue haciendo falta: reconciliar es precisamente eso, con el criterio explicitado.",
                "El ahorro de tiempo, si lo hay, no es lo relevante.",
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
            { ref: "Eurostat, Handbook on Quarterly National Accounts", nota: "el tratamiento conjunto de la coherencia contable y la temporal, con las técnicas de conciliación de cuadros completos que se usan en producción." },
            { ref: "Eurostat, Manual of Supply, Use and Input-Output Tables", nota: "el marco de restricciones cruzadas por excelencia y los procedimientos de equilibrado que se aplican sobre él." },
            { ref: "Stone, Champernowne y Meade, «The Precision of National Income Estimates»", nota: "el trabajo de 1942 que ya planteaba el cuadre de las cuentas como un problema de estimación con fiabilidades relativas; sorprendentemente moderno." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "las recomendaciones prácticas sobre dónde colocar la discrepancia y por qué conviene documentarlo." },
          ],
        },
      ],
    },
  ],
};
