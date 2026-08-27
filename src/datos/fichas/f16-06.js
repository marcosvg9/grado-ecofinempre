/* Ficha 16.06 — Jerarquías temporales: mensual, trimestral y anual. */

export default {
  codigo: "16.06",
  titulo: "Jerarquías temporales: mensual, trimestral y anual",
  nivel: 4,
  bloque: "Series temporales jerárquicas",
  tiempo: "5 h",
  nucleo:
    "Una sola serie agregada a distintas frecuencias forma una jerarquía sin necesidad de que existan componentes. Reconciliarla mejora las previsiones a todos los horizontes a la vez, y lo hace porque cada frecuencia ve una dinámica distinta de la misma economía.",
  requiere: "16.04 Combinación óptima y MinT · 15.09 Benchmarking y conciliación · 4.09 Series temporales",
  abre: "16.07 Reconciliación probabilística · 16.09 Cuentas nacionales · 15.10 Desagregación temporal",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hasta aquí la jerarquía venía de una desagregación **transversal**: ramas, territorios, productos. Existe otra que no requiere ningún componente y que casi nadie reconoce como jerarquía: la que forma **una misma serie agregada a distintas frecuencias**. Los doce meses del año suman el año; también suman los cuatro trimestres, los dos semestres y los seis bimestres. Todas esas series describen la misma variable y todas están ligadas por restricciones de suma.",
            "La estructura es la misma de la ficha 16.02 y la matriz de sumas se construye igual, con una diferencia: los niveles no vienen dados por una clasificación sino por los **divisores del periodo estacional**. Para datos mensuales los niveles posibles son agregaciones de 1, 2, 3, 4, 6 y 12 meses, que son los divisores de doce. Para datos trimestrales, de 1, 2 y 4. Las agregaciones son **no solapadas**: los meses se agrupan en bloques consecutivos que no comparten observaciones.",
            "Lo interesante no es la construcción sino por qué mejora las previsiones, y la razón es sustantiva. **Cada frecuencia de agregación destaca una dinámica distinta de la misma economía.** La serie mensual está dominada por el ruido de alta frecuencia y por la estacionalidad; la anual la ha promediado toda y muestra la tendencia con nitidez. Un modelo ajustado sobre datos mensuales aprende bien lo primero y mal lo segundo; uno ajustado sobre datos anuales, al revés. Reconciliar las previsiones de ambos **combina lo que cada uno sabe hacer**.",
            "De ahí sale una propiedad que distingue a estas jerarquías de las transversales: son especialmente eficaces contra la **mala especificación del modelo**. Si el modelo mensual no captura bien la tendencia, la restricción con el nivel anual lo corrige; si el modelo anual ignora la dinámica de corto plazo, la restricción con el mensual la aporta. No hace falta que ninguno de los dos sea correcto: basta con que sus errores sean distintos, y lo son por construcción, porque miran la serie con lupas de aumento diferente.",
            "Hay además una ventaja práctica que se nota enseguida. Las previsiones a distintos horizontes suelen producirse con modelos distintos y **acaban siendo incoherentes entre sí**: la previsión mensual acumulada de doce meses no coincide con la previsión anual. Publicarlas juntas obliga a explicar la diferencia, y normalmente se resuelve con un ajuste manual sin criterio. La reconciliación temporal lo resuelve con uno explícito y, de paso, mejora ambas.",
            "Conviene señalar la relación con el bloque anterior, porque el parecido es evidente y la diferencia también. El **benchmarking** de la ficha 15.09 y la **desagregación temporal** de la ficha 15.10 imponen coherencia entre frecuencias, igual que esto, pero con una asimetría: el dato anual manda y el trimestral se somete. La reconciliación temporal es simétrica —ningún nivel tiene autoridad a priori— y quien decide el reparto es la matriz de covarianzas. Son el mismo problema con distinto supuesto sobre quién sabe más.",
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
            { nom: "Jerarquía temporal", sub: "Sin necesidad de componentes.", cols: ["La misma serie agregada a distintas frecuencias"] },
            { nom: "Niveles disponibles", sub: "No se eligen: vienen dados.", cols: ["Los divisores del periodo estacional"] },
            { nom: "Caso mensual", sub: "Seis niveles.", cols: ["k = 1, 2, 3, 4, 6, 12 → 12+6+4+3+2+1 = 28 series"] },
            { nom: "Caso trimestral", sub: "Tres niveles.", cols: ["k = 1, 2, 4 → 4+2+1 = 7 series"] },
            { nom: "Agregación no solapada", sub: "Bloques consecutivos.", cols: ["Los periodos agrupados no comparten observaciones"] },
            { nom: "Por qué mejora", sub: "El argumento sustantivo.", cols: ["Cada frecuencia destaca una dinámica distinta"] },
            { nom: "Contra la mala especificación", sub: "La ventaja característica.", cols: ["Basta con que los errores de cada nivel sean distintos"] },
            { nom: "Frente al benchmarking", sub: "La diferencia de supuesto.", cols: ["Simétrica: ningún nivel manda a priori"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: veintiocho series a partir de una",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Con datos mensuales, los niveles de agregación posibles son los divisores de doce. Cada nivel produce un número de periodos por año igual a **12 dividido entre la agregación**, y la jerarquía completa reúne todos ellos. El recuento sorprende: de una sola serie mensual salen **veintiocho series** ligadas por restricciones.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Agregación", "Nombre", "Periodos por año", "Series acumuladas"],
          filas: [
            ["1 mes", "Mensual", "12", "12"],
            ["2 meses", "Bimestral", "6", "18"],
            ["3 meses", "Trimestral", "4", "22"],
            ["4 meses", "Cuatrimestral", "3", "25"],
            ["6 meses", "Semestral", "2", "27"],
            { celdas: ["12 meses", "Anual", "1", "28"], clase: "total" },
          ],
          nota: "Los grados de libertad siguen siendo **doce**, los del nivel mensual: fijados los doce meses, todo lo demás queda determinado. Así que hay **veintiocho series y dieciséis restricciones**, una proporción de información redundante mucho mayor que en la jerarquía transversal del bloque, que tenía siete series y tres restricciones. Cuanta más redundancia, más puede ganar la reconciliación.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Meses agregados", y: "Número de series" },
          dominio: { x: [1, 12], y: [0, 31] },
          marcasX: [1, 2, 3, 4, 6, 12],
          marcasY: [0, 10, 20, 30],
          series: [
            {
              nombre: "Series acumuladas en la jerarquía",
              color: "acento",
              etiquetaEn: [4.4, 15.5],
              puntos: [[1, 12], [2, 18], [3, 22], [4, 25], [6, 27], [12, 28]],
            },
            {
              nombre: "Periodos en cada nivel",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [4.4, 8],
              puntos: [[1, 12], [2, 6], [3, 4], [4, 3], [6, 2], [12, 1]],
            },
          ],
          nota: "Las dos curvas parten del mismo punto —doce— y se separan de inmediato. La descendente es **12 dividido entre la agregación**, una hipérbola que cae deprisa: agregar de uno a dos meses ya elimina la mitad de los periodos. La ascendente se aplana pronto, porque **los niveles altos aportan muy pocas series**: pasar de semestral a anual solo añade una. La información nueva de cada nivel decrece rápidamente, aunque su punto de vista sobre la serie sea distinto.",
        },
        {
          tipo: "parrafos",
          items: [
            "Con datos trimestrales la jerarquía es más modesta: los divisores de cuatro son 1, 2 y 4, así que hay cuatro series trimestrales, dos semestrales y una anual, **siete en total** con cuatro grados de libertad. Es exactamente la misma aritmética que la jerarquía transversal del bloque, y por casualidad el mismo tamaño, lo que permite usar el mismo instrumental sin cambios.",
            "El punto que conviene retener no es el recuento sino **qué modelo se estima en cada nivel**. La práctica habitual no es ajustar un solo modelo y agregarlo, sino ajustar un modelo por nivel: uno sobre los datos mensuales, otro sobre los trimestrales, otro sobre los anuales. Cada uno se especifica libremente y con la estacionalidad que corresponda —la serie anual no tiene estacionalidad, la mensual sí—, y después se reconcilian sus previsiones.",
            "Ahí está la fuente de la ganancia y también la razón de que el método sea robusto. Los modelos de niveles distintos **no comparten errores de especificación**: uno mensual con una estructura estacional mal capturada y uno anual sin estacionalidad ninguna se equivocan de formas independientes. La reconciliación combina previsiones cuyos errores no están correlacionados, que es exactamente la situación en que combinar más ayuda, por el mismo argumento de la ficha 8.05 sobre diversificación.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: el cuadro de previsiones que no cuadraba",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un servicio de estudios publica cada mes una previsión de crecimiento para el trimestre en curso y, por separado, una previsión anual actualizada. Son productos distintos, elaborados con modelos distintos por equipos distintos, y con una incomodidad recurrente: **al sumar los trimestres previstos no sale el año previsto**. La diferencia suele ser de una o dos décimas y se resuelve retocando a mano hasta que cuadra.",
            "Ese retoque manual es, sin saberlo, una reconciliación con criterio implícito. Normalmente se ajusta el trimestre más lejano —el que menos compromete— o se reparte la diferencia por igual, que es el equivalente al reparto ingenuo que la ficha 15.09 desaconsejaba. Lo que se decide con ese gesto es **cuál de las dos previsiones se considera más fiable**, y se decide sin haberlo pensado.",
            "Plantearlo como jerarquía temporal convierte esa decisión en explícita. Si el modelo trimestral tiene mejor historial a corto plazo y el anual lo tiene a largo, la matriz de covarianzas recogerá ambas cosas y la reconciliación moverá más lo menos fiable. Y como el argumento de la ficha 16.04 muestra, **el resultado no solo cuadra: espera equivocarse menos que cualquiera de las dos previsiones originales**.",
            "Hay un beneficio adicional que en un servicio de estudios pesa mucho: **la coherencia entre horizontes deja de ser un trabajo manual recurrente**. La previsión del trimestre en curso, la del año y la del año siguiente pasan a formar un conjunto que se actualiza a la vez y cuadra por construcción. El tiempo que se ahorra en cuadrar a mano suele ser mayor que el que cuesta montar el procedimiento.",
            "Conviene sin embargo no vender esto como magia. La reconciliación temporal **no arregla un modelo que va mal**: si la previsión anual está sistemáticamente sesgada, el conjunto reconciliado heredará parte de ese sesgo repartido por los trimestres. Lo que hace es aprovechar mejor la información que ya hay, y en particular impedir que se tire la que aportaba el otro horizonte. Es una mejora de eficiencia, no de calidad de los modelos.",
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
            { t: "No reconocer que hay una jerarquía", d: "Una serie única agregada a distintas frecuencias ya es una jerarquía, sin necesidad de componentes. Quien produce previsiones mensuales, trimestrales y anuales de la misma variable tiene una estructura con restricciones aunque no la haya declarado, y sus previsiones casi con seguridad no cuadran." },
            { t: "Elegir niveles que no dividan el periodo estacional", d: "Los niveles disponibles son los divisores: con datos mensuales, 1, 2, 3, 4, 6 y 12. Agregar de cinco en cinco meses no produce bloques que encajen en el año y rompe la estructura de suma. No es una convención: es aritmética." },
            { t: "Usar agregaciones solapadas", d: "Las medias móviles solapadas no forman una jerarquía de sumas: los bloques comparten observaciones y las restricciones dejan de ser las que la matriz declara. La agregación tiene que agrupar periodos consecutivos sin repetir ninguno." },
            { t: "Ajustar un solo modelo y agregarlo", d: "Eso es bottom-up temporal y desperdicia la mitad de la idea. La ganancia procede de ajustar un modelo por nivel, con la especificación que corresponda a cada frecuencia, y reconciliar después previsiones cuyos errores de especificación son distintos." },
            { t: "Cuadrar a mano el desfase entre horizontes", d: "Ajustar el trimestre más lejano o repartir la diferencia por igual son decisiones implícitas sobre qué previsión es más fiable, tomadas sin pensarlas. Es el equivalente al reparto ingenuo que el benchmarking desaconseja, y produce escalones justo en el enlace de años." },
            { t: "Esperar que corrija un modelo sesgado", d: "La reconciliación aprovecha mejor la información disponible; no mejora la calidad de los modelos base. Si la previsión anual está sistemáticamente sesgada, el conjunto reconciliado heredará parte de ese sesgo repartido entre los trimestres. Es una ganancia de eficiencia, no de especificación." },
            { t: "Aplicar estacionalidad donde no la hay", d: "La serie anual no tiene estacionalidad por construcción y la semestral casi tampoco. Especificar modelos estacionales en esos niveles añade parámetros que no describen nada y consume grados de libertad. Cada nivel se modeliza según su propia frecuencia." },
            { t: "Confundirla con benchmarking", d: "Ambos imponen coherencia entre frecuencias, pero el benchmarking da autoridad total al dato de baja frecuencia y la reconciliación temporal es simétrica: ningún nivel manda a priori y el reparto lo decide la matriz de covarianzas. Son el mismo problema con distinto supuesto sobre quién sabe más." },
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
            "La contabilidad nacional lleva décadas resolviendo el problema de la coherencia entre frecuencias, siempre con la misma asimetría, y este bloque muestra que había otra opción.",
          ],
          lista: [
            "El **principio de prelación** del sistema es explícito: las cuentas anuales son la referencia y las trimestrales deben sumarlas, según recoge la ficha 15.09. En el lenguaje de esta ficha, eso equivale a declarar varianza cero para el nivel anual y trasladar todo el ajuste a los trimestres. Es una elección defendible —las anuales se elaboran con fuentes exhaustivas— y es una elección, no una necesidad lógica.",
            "La **desagregación temporal** de la ficha 15.10 es el caso extremo de esa asimetría: el nivel trimestral no se observa en absoluto y se construye enteramente desde el anual con ayuda de indicadores. Ahí la prelación no es una convención sino un hecho, porque no hay dato trimestral que pueda competir con el anual.",
            "El caso en que la simetría sí tendría sentido es el de las **estimaciones de coyuntura frente a las anuales provisionales**. Durante el periodo en que ambas conviven y ninguna es definitiva, tratar la anual como infalible descarta la información de los indicadores trimestrales, que en algunos casos son más rápidos y no necesariamente peores. Una reconciliación simétrica sería aquí conceptualmente más adecuada que el benchmarking vinculante.",
            "La **jerarquía temporal completa** —bimestral, cuatrimestral, semestral— casi no se usa en estadística oficial, que trabaja con mensual, trimestral y anual. Es una oportunidad desaprovechada: los niveles intermedios aportan puntos de vista adicionales sobre la misma serie sin coste de recogida, ya que se obtienen agregando datos que ya existen.",
            "Hay por último una implicación sobre las **revisiones**. Si las previsiones o estimaciones de distintas frecuencias se reconcilian de forma simétrica, una revisión del dato anual ya no obliga a reescribir mecánicamente toda la serie trimestral: el ajuste se reparte según fiabilidades. Eso cambiaría el perfil de revisiones que describe la ficha 15.08, probablemente a mejor para el usuario.",
          ],
          cierre:
            "La consecuencia práctica: la coherencia entre frecuencias siempre se impone de algún modo. Lo que decide el resultado es qué nivel se declara infalible, y en estadística oficial esa declaración es una convención heredada, no un teorema.",
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
              q: "¿Cuántas series forman la jerarquía temporal completa de una serie mensual?",
              a: "Veintiocho. Los niveles son los divisores de doce —1, 2, 3, 4, 6 y 12 meses—, que dan 12, 6, 4, 3, 2 y 1 periodos por año respectivamente. Los grados de libertad siguen siendo doce, los del nivel mensual, así que hay dieciséis restricciones. Con datos trimestrales los divisores son 1, 2 y 4, lo que da siete series y cuatro grados de libertad.",
            },
            {
              q: "¿Por qué mejora las previsiones reconciliar una jerarquía temporal si solo hay una serie?",
              a: "Porque cada frecuencia destaca una dinámica distinta de la misma economía y se modeliza por separado. El modelo mensual aprende bien el corto plazo y la estacionalidad, y peor la tendencia; el anual, al revés. Sus errores de especificación son distintos por construcción, así que combinar sus previsiones aporta información genuina, igual que diversificar entre activos poco correlacionados.",
            },
            {
              q: "¿Por qué no se puede agregar de cinco en cinco meses?",
              a: "Porque cinco no divide a doce y los bloques no encajarían en el año: el sexto bloque cruzaría el cambio de ejercicio y las restricciones de suma dejarían de ser las que la matriz declara. Los niveles disponibles son exactamente los divisores del periodo estacional. Tampoco valen las agregaciones solapadas, como las medias móviles, porque los bloques comparten observaciones.",
            },
            {
              q: "¿En qué se diferencia esto del benchmarking de las cuentas trimestrales?",
              a: "En la simetría. El benchmarking da autoridad total al dato anual y traslada todo el ajuste a los trimestres, lo que equivale a declarar varianza cero para el nivel anual. La reconciliación temporal no privilegia ningún nivel a priori: el reparto lo decide la matriz de covarianzas según la fiabilidad relativa. Son el mismo problema con distinto supuesto sobre quién sabe más.",
            },
            {
              q: "Un equipo cuadra a mano el desfase entre su previsión trimestral y la anual. ¿Qué está decidiendo sin darse cuenta?",
              a: "Cuál de las dos previsiones considera más fiable. Ajustar el trimestre más lejano, o repartir la diferencia por igual, son criterios implícitos sobre dónde colocar el error, tomados sin evaluarlos. Plantearlo como jerarquía temporal hace explícita esa decisión y, además, produce un conjunto que espera equivocarse menos que cualquiera de las dos previsiones originales.",
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
            { ref: "Athanasopoulos, Hyndman, Kourentzes y Petropoulos, «Forecasting with Temporal Hierarchies»", nota: "el artículo que introduce la idea y demuestra empíricamente la mejora simultánea en todos los horizontes; la referencia obligada." },
            { ref: "Kourentzes, Petropoulos y Trapero, «Improving Forecasting by Estimating Time Series Structural Components Across Multiple Frequencies»", nota: "el antecedente que mostró que combinar modelos ajustados a distintas frecuencias mejora la robustez frente a la mala especificación." },
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice", nota: "la exposición aplicada con la construcción de la matriz de sumas temporal y el código correspondiente." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "el planteamiento asimétrico de la estadística oficial, útil para contrastar con el simétrico de esta ficha y entender por qué se optó por él." },
          ],
        },
      ],
    },
  ],
};
