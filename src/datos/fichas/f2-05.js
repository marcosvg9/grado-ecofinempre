/* Ficha 2.05 — Costes: fijos, variables, marginales y de largo plazo. */

export default {
  codigo: "2.05",
  titulo: "Costes: fijos, variables, marginales y de largo plazo",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "En el largo plazo no hay costes fijos, y esa distinción manda en toda decisión de continuar o cerrar. La relación entre coste marginal y coste medio no es una convención gráfica: es una propiedad aritmética de cualquier promedio.",
  requiere: "2.04 Tecnología y producción · 6.01 Coste completo y variable",
  abre: "2.06 Competencia perfecta · 2.07 Monopolio · 6.04 Punto muerto",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La función de costes se deriva de la tecnología: es el gasto mínimo necesario para producir cada cantidad, dados los precios de los factores. Como el consumidor minimiza gasto para alcanzar una utilidad, la empresa minimiza coste para alcanzar un nivel de producción, y la condición es la análoga: **la productividad marginal por euro gastado debe igualarse entre factores**.",
            "La distinción entre **corto y largo plazo** no es temporal sino de flexibilidad: en el corto plazo algún factor está fijo, y en el largo todos son variables. De ahí se sigue el resultado más importante de la ficha: **en el largo plazo no existen costes fijos**. Todo puede ajustarse, incluida la escala de la planta, y por eso las decisiones de continuidad se toman con criterios distintos según el horizonte.",
            "En el corto plazo, el coste total se descompone en fijo y variable, y de ahí salen tres curvas medias y una marginal. La relación entre **coste marginal y coste medio** es una propiedad de cualquier promedio y conviene verla así: si el siguiente elemento está por debajo de la media, la media baja; si está por encima, la media sube. En consecuencia, **el coste marginal corta al coste medio exactamente en su mínimo**, y lo mismo ocurre con el coste variable medio. No es un dibujo convencional, es aritmética.",
            "Esa relación gobierna las decisiones de producción. En competencia, la empresa produce donde el precio iguala al coste marginal, y la comparación del precio con los costes medios decide si conviene seguir. **Si el precio cubre el coste variable medio pero no el total, conviene producir a corto plazo y no reponer a largo**: la pérdida es menor produciendo que cerrando, porque al menos se contribuye a cubrir unos costes fijos que se pagan igual. Si ni siquiera cubre el coste variable medio, cerrar es mejor de inmediato.",
            "En el **largo plazo**, la curva de coste medio es la **envolvente** de las curvas de corto plazo correspondientes a cada tamaño de planta: para cada nivel de producción, el mínimo coste alcanzable eligiendo la escala adecuada. Su forma refleja los rendimientos a escala de la ficha anterior: **economías de escala** donde el coste medio decrece, **deseconomías** donde crece, y una **escala mínima eficiente** en el punto donde deja de bajar. Ese punto tiene consecuencias sobre la estructura de mercado: si la escala mínima eficiente es grande en relación con el tamaño del mercado, caben pocas empresas.",
            "Y hay dos conceptos de coste que no aparecen en ninguna contabilidad y deciden buena parte de las decisiones reales. El **coste de oportunidad** es el valor de la mejor alternativa renunciada, e incluye la retribución normal del capital propio; por eso el beneficio económico es menor que el contable. Y el **coste hundido** es el ya incurrido e irrecuperable, que precisamente por serlo **es irrelevante para cualquier decisión futura**, por mucho que pese psicológicamente.",
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
            { nom: "Coste total a corto plazo", sub: "El fijo no depende de la cantidad.", cols: ["CT(q) = CF + CV(q)"] },
            { nom: "Coste marginal", sub: "Derivada del coste total: solo depende del variable.", cols: ["CMg = dCT/dq = dCV/dq"] },
            { nom: "Costes medios", sub: "Tres curvas que conviene no mezclar.", cols: ["CMe = CT/q · CVMe = CV/q · CFMe = CF/q"] },
            { nom: "Relación marginal-medio", sub: "Propiedad de cualquier promedio.", cols: ["dCMe/dq = (CMg − CMe) / q"] },
            { nom: "Mínimo del coste medio", sub: "Se deduce de la línea anterior.", cols: ["CMe mínimo ⟺ CMg = CMe"] },
            { nom: "Condición de cierre a corto plazo", sub: "Los costes fijos ya están comprometidos.", cols: ["Producir si P ≥ mín CVMe"] },
            { nom: "Condición de salida a largo plazo", sub: "Todo es ajustable.", cols: ["Permanecer si P ≥ mín CMe"] },
            { nom: "Minimización del coste", sub: "El análogo de la tangencia del consumidor.", cols: ["PMg_L / w = PMg_K / r"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una función de costes cuadrática",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea **CT(q) = 100 + 2q + 0,05q²**. Los costes fijos son 100 y el coste variable, 2q + 0,05q². De ahí se derivan directamente el coste marginal y los medios.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Cantidad", y: "Euros" },
          dominio: { x: [0, 100], y: [0, 15] },
          marcasX: [0, 20, 40, 60, 80, 100],
          marcasY: [0, 3, 6, 9, 12, 15],
          series: [
            {
              nombre: "CMg",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [100, 12],
              puntos: [[8, 2.8], [20, 4], [30, 5], [40, 6], [44.72, 6.47], [50, 7], [60, 8], [70, 9], [80, 10], [90, 11], [100, 12]],
            },
            {
              nombre: "CMe",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [100, 8],
              puntos: [[8, 14.9], [10, 12.5], [15, 9.42], [20, 8], [25, 7.25], [30, 6.83], [35, 6.61], [40, 6.5], [44.72, 6.47], [50, 6.5], [60, 6.67], [70, 6.93], [80, 7.25], [90, 7.61], [100, 8]],
            },
            {
              nombre: "CVMe",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [100, 7],
              puntos: [[8, 2.4], [20, 3], [30, 3.5], [40, 4], [44.72, 4.24], [50, 4.5], [60, 5], [70, 5.5], [80, 6], [90, 6.5], [100, 7]],
            },
          ],
          puntos: [
            { x: 44.72, y: 6.47, etiqueta: "mínimo del CMe", guias: true },
          ],
          nota: "Las tres curvas contienen todas las reglas de decisión de la ficha. La de **coste marginal corta a las dos medias exactamente en su mínimo**, y no por casualidad: mientras el marginal está por debajo del medio tira de él hacia abajo, y cuando lo supera lo empuja hacia arriba, así que el cruce solo puede ocurrir donde el medio deja de bajar. Ese punto, **q = 44,72 con un coste de 6,47**, es el que determina el precio de equilibrio a largo plazo en competencia. La distancia vertical entre CMe y CVMe es el **coste fijo medio**, que se estrecha continuamente al repartirse los 100 de coste fijo entre más unidades. Y las dos condiciones que se confunden siempre están a distinta altura: **se cierra si el precio cae por debajo del CVMe** y **se sale del sector si cae por debajo del CMe**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Cantidad", "Coste total", "Coste medio", "Coste variable medio", "Coste marginal"],
          filas: [
            ["10", "125,0", "12,50", "2,50", "3,00"],
            ["20", "160,0", "8,00", "3,00", "4,00"],
            ["30", "205,0", "6,83", "3,50", "5,00"],
            { celdas: ["44,72", "289,4", "6,47", "4,24", "6,47"], clase: "total" },
            ["60", "400,0", "6,67", "5,00", "8,00"],
            ["80", "580,0", "7,25", "7,00", "10,00"],
          ],
          nota: "En **q = 44,72** el coste medio alcanza su mínimo de 6,47 y **el coste marginal vale exactamente lo mismo**. No es coincidencia: se obtiene resolviendo dCMe/dq = 0, es decir −100/q² + 0,05 = 0, de donde q = √2.000 = 44,72. Para cantidades menores el marginal está por debajo del medio y este desciende; para mayores, por encima y asciende.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Las decisiones que se derivan.** Con esta función, el coste variable medio es 2 + 0,05q, creciente en todo el recorrido, de modo que su ínfimo es **2** cuando la cantidad tiende a cero. La empresa debería producir a corto plazo mientras el precio supere ese valor, y permanecer en el mercado a largo plazo solo si supera **6,47**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Precio de mercado", "Cantidad óptima", "Beneficio", "Decisión"],
          filas: [
            ["12,00", "100,0", "400,0", "Producir y permanecer"],
            ["6,47", "44,7", "0,0", "Beneficio económico nulo"],
            ["5,00", "30,0", "−55,0", "Producir a corto, salir a largo"],
            ["3,00", "10,0", "−95,0", "Producir a corto, salir a largo"],
            { celdas: ["1,50", "0", "−100,0", "Cerrar de inmediato"], clase: "total" },
          ],
          nota: "Con un precio de **5**, la empresa pierde 55 produciendo y perdería **100** cerrando, porque los costes fijos se pagan igual. Producir es la decisión correcta a corto plazo aunque haya pérdidas. Con un precio de **1,50** ni siquiera cubre el coste variable, así que cada unidad producida añade pérdida y lo mejor es parar. **La distinción entre ambos casos es exactamente la que separa el corto del largo plazo.**",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el beneficio económico nulo.** Al precio de 6,47 el beneficio es cero, y eso no significa que la empresa no gane nada: significa que gana **exactamente la retribución normal de su capital**, porque el coste de oportunidad del capital propio ya está incluido en la función de costes. Es el mismo concepto del diferencial ROIC menos WACC de la ficha 7.05, visto desde la microeconomía.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué las empresas siguen produciendo con pérdidas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Es una de las observaciones que más desconciertan a quien mira una industria desde fuera: sectores enteros que llevan años declarando pérdidas y en los que nadie cierra. La explicación combina dos ideas de esta ficha y una tercera.",
            "**La primera es la condición de cierre a corto plazo.** Mientras el precio cubra el coste variable medio, producir reduce la pérdida respecto a parar, porque los costes fijos se pagan igual. Una planta con instalaciones ya construidas y personal en plantilla puede racionalmente operar años con pérdidas contables si su margen de contribución es positivo.",
            "**La segunda son los costes hundidos**, que actúan como barrera de salida. Si los activos son muy específicos y no tienen valor fuera de ese uso, cerrar no recupera nada. Lo ya invertido es irrelevante para la decisión —eso es lo que significa hundido—, pero su carácter irrecuperable implica que el valor de liquidación es bajo y por tanto continuar suele dominar.",
            "**La tercera es la asimetría entre entrada y salida.** Entrar exige invertir; salir no devuelve la inversión. Esa asimetría hace que la capacidad permanezca en el sector mucho después de que haya dejado de ser rentable, y es la razón de que sectores con exceso estructural de capacidad tarden décadas en ajustarse. Es exactamente lo que la ficha 9.02 describía en el transporte aéreo.",
            "**El error simétrico**, y muy común, es el contrario: cerrar una línea porque el coste completo unitario supera al precio. Si el coste completo incluye una imputación de costes fijos que **no desaparecen al cerrar la línea**, la decisión es incorrecta: esos costes se redistribuirán sobre las líneas restantes y el resultado global empeorará. Es el mismo razonamiento de la ficha 6.03 sobre eliminar productos tras un estudio ABC.",
            "**La regla que ordena todo esto** se enuncia en una línea: para cualquier decisión, solo cuentan los **costes evitables** por tomarla. El coste completo unitario no sirve para decidir; sirve para valorar existencias. Y confundir ambas funciones es el origen de la mayoría de las decisiones de cierre equivocadas.",
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
            { t: "Usar el coste completo unitario para decidir", d: "Incluye costes fijos que no cambian con la decisión. Para decidir solo cuentan los costes evitables. El coste completo sirve para valorar existencias según el PGC, que es una función distinta." },
            { t: "Considerar los costes hundidos", d: "Son irrecuperables por definición, así que no cambian con ninguna decisión futura y deben quedar fuera del análisis. Incluirlos lleva tanto a persistir en proyectos malos como a rechazar oportunidades buenas." },
            { t: "Confundir beneficio contable y económico", d: "El económico descuenta el coste de oportunidad del capital propio y del trabajo del empresario. Un beneficio económico nulo significa que se obtiene exactamente la retribución normal del capital, no que no se gane nada." },
            { t: "Aplicar la condición de cierre equivocada", d: "A corto plazo se produce si el precio cubre el coste variable medio; a largo, se permanece si cubre el coste medio total. Usar el criterio de largo plazo en el corto lleva a cerrar plantas que reducían pérdidas operando." },
            { t: "Tratar el coste marginal como el coste medio del último lote", d: "El coste marginal es la derivada del coste total, no un promedio. En la función del ejemplo, con q = 60 el coste marginal es 8 y el coste medio 6,67: son magnitudes distintas y ambas correctas." },
            { t: "Confundir economías de escala con productividad marginal decreciente", d: "Las economías de escala son de largo plazo y se refieren a la caída del coste medio al aumentar la escala de planta. La productividad marginal decreciente es de corto plazo. Se relacionan con los rendimientos a escala de la ficha 2.04 y no son lo mismo." },
            { t: "Suponer que el corto plazo es un período concreto", d: "No se define por meses ni años sino por qué factores están fijos. En un taller el largo plazo puede ser un semestre; en una central eléctrica, una década. Depende de la reversibilidad de los compromisos." },
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
            "La estructura de costes de esta ficha se traduce en la cuenta de producción con una clasificación distinta que conviene tener presente.",
          ],
          lista: [
            "El SEC 2010 clasifica los costes **por naturaleza**, no por comportamiento: consumos intermedios (P.2), remuneración de asalariados (D.1), consumo de capital fijo (P.51c) y otros impuestos netos sobre la producción (D.29 menos D.39). **La distinción entre fijo y variable no existe en contabilidad nacional**, porque depende del horizonte de decisión de cada empresa y no es observable desde fuera.",
            "El **valor añadido bruto** es producción menos consumos intermedios, y de él salen la remuneración del trabajo y el excedente bruto de explotación. Ese excedente es el análogo agregado del beneficio antes de intereses e impuestos, e incluye la retribución normal del capital: no es beneficio económico en el sentido de esta ficha.",
            "Para la **producción no de mercado** —administraciones públicas e instituciones sin fines de lucro— no hay precio que la valore, así que se valora por la **suma de sus costes**: consumos intermedios, remuneración de asalariados, consumo de capital fijo e impuestos netos. Por convención **no se incluye excedente neto de explotación**, lo que equivale a suponer que ese capital no obtiene rendimiento.",
            "Esa convención tiene una consecuencia que conviene conocer: **cualquier ganancia de eficiencia en la producción pública se registra como menor producción**, no como mayor valor. Es una limitación reconocida del método y objeto de trabajo metodológico continuado, que busca medir la producción no de mercado por indicadores de resultado en lugar de por costes.",
            "Y las **economías de escala** de esta ficha reaparecen a escala agregada en la relación entre tamaño empresarial y productividad de la ficha 9.05.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: preguntarle a una cuenta de producción qué parte de los costes es fija no tiene respuesta, porque esa clasificación pertenece al análisis de decisiones y no a la medición.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "CT(q) = 200 + 4q + 0,1q². ¿Dónde está el mínimo del coste medio?", a: "Se resuelve −200/q² + 0,1 = 0, de donde q = √2.000 = 44,7. En ese punto el coste medio vale 4 + 2·0,1·44,7 ≈ 12,94, y coincide con el coste marginal." },
            { q: "¿Por qué el coste marginal corta al coste medio en su mínimo?", a: "Por una propiedad de cualquier promedio: si el siguiente valor está por debajo de la media, la media baja; si está por encima, sube. El punto de corte es aquel en que deja de bajar y empieza a subir." },
            { q: "El precio cubre el coste variable medio pero no el total. ¿Qué conviene hacer?", a: "Producir a corto plazo y no reponer a largo. Produciendo se contribuye a cubrir unos costes fijos que se pagan igual, así que la pérdida es menor que cerrando." },
            { q: "¿Qué significa un beneficio económico nulo?", a: "Que la empresa obtiene exactamente la retribución normal de su capital, porque el coste de oportunidad de los fondos propios está incluido en la función de costes. Es el equivalente microeconómico de ROIC igual a WACC." },
            { q: "¿Por qué en las cuentas nacionales no se distingue entre coste fijo y variable?", a: "Porque esa clasificación depende del horizonte de decisión de cada empresa y no es observable desde fuera. El SEC clasifica los costes por naturaleza: consumos intermedios, remuneración, consumo de capital fijo e impuestos netos sobre la producción." },
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
            { ref: "Nicholson y Snyder, Teoría microeconómica", nota: "la derivación de la función de costes a partir de la tecnología y la dualidad entre ambas." },
            { ref: "Varian, Microeconomía intermedia", nota: "los capítulos de costes, con las condiciones de cierre y la envolvente de largo plazo bien explicadas." },
            { ref: "Horngren, Contabilidad de costos", nota: "el puente hacia la ficha 6.01: cómo se traducen estos conceptos a un sistema de costes real y dónde divergen." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 3", nota: "la cuenta de producción y la valoración de la producción no de mercado por suma de costes." },
          ],
        },
      ],
    },
  ],
};
