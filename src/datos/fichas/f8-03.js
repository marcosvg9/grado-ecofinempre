/* Ficha 8.03 — Estructura temporal de tipos y curva de rendimientos. */

export default {
  codigo: "8.03",
  titulo: "Estructura temporal de tipos y curva de rendimientos",
  nivel: 3,
  bloque: "Mercados financieros e inversión",
  tiempo: "4 h",
  nucleo:
    "La curva de tipos contiene, mezcladas, tres cosas: las expectativas del mercado sobre los tipos futuros, la prima que exigen los inversores por comprometer su dinero a largo y las preferencias institucionales por determinados plazos. Separarlas es difícil y es donde está todo el contenido.",
  requiere: "8.02 Renta fija · 3.08 Política monetaria",
  abre: "8.10 Gestión de riesgos · 3.10 Economía abierta",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La **curva de rendimientos** representa el tipo de interés exigido a un mismo emisor para distintos plazos. Su forma habitual es creciente, y esa pendiente positiva es tan común que se ha convertido en la referencia contra la que se juzga cualquier otra forma. Cuando la curva se aplana o se invierte, el mercado está diciendo algo, y averiguar qué exige entender qué componentes la forman.",
            "Antes de interpretarla hay que construirla bien, y ahí aparece una distinción técnica importante. La TIR de un bono con cupones es un promedio confuso de los tipos aplicables a cada uno de sus flujos. Lo que se necesita son **tipos cupón cero** o tipos al contado: el tipo puro aplicable a un único pago en cada fecha. Se obtienen por **bootstrapping**, resolviendo secuencialmente desde el plazo más corto: con el tipo a un año conocido se despeja el implícito a dos años del bono a dos años, y así sucesivamente.",
            "De la curva al contado se derivan los **tipos forward implícitos**: el tipo que el mercado está descontando hoy para un período futuro. Si el tipo a un año es el 3 % y el tipo a dos años el 3,5 %, el mercado está implícitamente cotizando un 4 % para el segundo año. No es una predicción en sentido estricto, es la tasa que hace indiferente invertir a dos años o encadenar dos operaciones a un año, y por tanto la que elimina el arbitraje.",
            "Sobre por qué la curva tiene la forma que tiene compiten tres explicaciones que hoy se consideran complementarias. La de **expectativas puras** sostiene que los tipos largos son la media de los cortos esperados: una curva creciente anticipa subidas. La de **prima de plazo** añade que los inversores exigen compensación por inmovilizar su dinero, lo que sesga la curva al alza y explica que sea creciente incluso cuando no se esperan subidas. Y la de **hábitat preferido** observa que ciertos inversores están confinados a determinados plazos por su propia estructura de compromisos —una aseguradora necesita plazos largos, un fondo monetario cortos—, de modo que la oferta y la demanda por tramos también influyen en la forma.",
            "La consecuencia práctica de la segunda teoría es importante: **una curva plana no significa que el mercado no espere cambios en los tipos**, sino que espera bajadas suficientes para compensar la prima de plazo. Y una curva invertida indica expectativas de bajadas pronunciadas, que históricamente se asocian a recesión, porque los bancos centrales bajan tipos cuando la actividad se deteriora.",
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
            { nom: "Tipo al contado (cupón cero)", sub: "El aplicable a un único pago en el plazo n.", cols: ["$P = \\dfrac{N}{(1+s_n)^n}$"] },
            { nom: "Forward implícito de un período", sub: "Condición de no arbitraje entre plazos.", cols: ["$(1+s_2)^2 = (1+s_1)(1+f_{1,2})$"] },
            { nom: "Forward general", sub: "Entre los plazos m y n.", cols: ["$f_{m,n} = \\left[\\dfrac{(1+s_n)^n}{(1+s_m)^m}\\right]^{1/(n-m)} - 1$"] },
            { nom: "Teoría de expectativas puras", sub: "Sin prima: el largo es media de los cortos esperados.", cols: ["$(1+s_n)^n = \\prod_t (1 + E[r_t])$"] },
            { nom: "Con prima de plazo", sub: "La prima explica la pendiente positiva habitual.", cols: ["$s_n = \\text{media de cortos esperados} + \\text{prima}_n$"] },
            { nom: "Pendiente de la curva", sub: "El indicador que se sigue como señal de ciclo.", cols: ["Pendiente $= s_{10\\text{ años}} - s_{2\\text{ años}}$"] },
          ],
          nota: "El **bootstrapping** consiste en aplicar la primera fórmula de forma recursiva: conocido $s_1$, se despeja $s_2$ del precio de un bono a dos años con cupón, y así sucesivamente. Sin ese paso, comparar TIR de bonos con cupones distintos mezcla plazos.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: de la curva al contado a los forwards",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Supongamos una curva al contado con tipos del **3,0 %** a un año, **3,5 %** a dos y **3,8 %** a tres. Es una curva creciente y bastante plana. La pregunta es qué está descontando el mercado para cada año por separado.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Plazo", "Tipo al contado", "Forward implícito", "Interpretación"],
          filas: [
            ["Año 1", "3,00 %", "3,00 %", "El tipo actual a un año"],
            ["Año 2", "3,50 %", "4,00 %", "$1{,}035^2 / 1{,}03 - 1$"],
            ["Año 3", "3,80 %", "4,40 %", "$1{,}038^3 / 1{,}035^2 - 1$"],
          ],
          nota: "Los tipos al contado suben de forma **suave** —del 3,0 % al 3,8 %— pero los forwards implícitos suben con mucha más pendiente: del 3,0 % al 4,4 %. Esa amplificación es característica y se olvida a menudo: **una curva al contado ligeramente creciente puede estar descontando subidas de tipos considerables**, porque el tipo largo es un promedio que suaviza el perfil.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Comprobación de no arbitraje.** Invertir 1.000 € a dos años al 3,5 % da $1.000 \\times 1{,}035^2 = 1.071{,}22$ €. Invertir a un año al 3 % y renovar al forward del 4 % da $1.000 \\times 1{,}03 \\times 1{,}04 = 1.071{,}20$ €. La diferencia es redondeo: por construcción, ambas estrategias rinden lo mismo. Si no fuera así, existiría una operación con beneficio seguro y el mercado la eliminaría.",
            "**Y la interpretación que no hay que dar.** El 4 % del segundo año no es la previsión del mercado sobre el tipo a un año dentro de un año. Es esa previsión **más la prima de plazo**. Si la prima a dos años fuera de 30 puntos básicos, la expectativa pura sería del 3,7 % y no del 4,0 %. Como la prima no es observable directamente, todo intento de extraer expectativas puras de la curva depende de un modelo para estimarla.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Plazo (años)", y: "Tipo (%)" },
          dominio: { x: [0, 10], y: [1.5, 5.2] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [2, 3, 4, 5],
          series: [
            {
              nombre: "Creciente",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [10, 4.7],
              puntos: [[1, 3], [2, 3.5], [3, 3.8], [4, 4.05], [5, 4.25], [6, 4.4], [7, 4.5], [8, 4.58], [9, 4.65], [10, 4.7]],
            },
            {
              nombre: "Invertida",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [10, 2.6],
              puntos: [[1, 4.6], [2, 4.3], [3, 4], [4, 3.7], [5, 3.4], [6, 3.15], [7, 2.95], [8, 2.8], [9, 2.68], [10, 2.6]],
            },
            {
              nombre: "Con joroba",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [10, 3.4],
              puntos: [[1, 3.2], [2, 3.7], [3, 4.05], [4, 4.2], [5, 4.15], [6, 4], [7, 3.85], [8, 3.7], [9, 3.55], [10, 3.4]],
            },
          ],
          puntos: [
            { x: 1, y: 3, guias: false },
            { x: 2, y: 3.5, guias: false },
            { x: 3, y: 3.8, guias: false },
          ],
          nota: "Los tres puntos marcados son la curva del ejemplo —**3,0 · 3,5 · 3,8 %**— prolongada como curva creciente. Lo que hay que leer en cada forma es una combinación de **expectativas y prima de plazo**, nunca una sola de las dos. La creciente es compatible con expectativas de subidas y también con expectativas planas más una prima elevada. La **invertida** es la que más atención recibe porque ha precedido a la mayoría de las recesiones: el mercado exige menos a largo que a corto porque **espera bajadas de tipos**, y se espera bajadas cuando se espera debilidad. Y la de joroba describe un endurecimiento monetario percibido como **transitorio**: subidas ahora, recorte después. Ninguna de las tres es una predicción: son precios que descuentan a la vez lo esperado y lo que se cobra por asumir el riesgo de plazo.",
        },
        {
          tipo: "tabla",
          cabecera: ["Forma de la curva", "Qué suele indicar", "Contexto típico"],
          filas: [
            ["Creciente y pronunciada", "Expectativa de subidas y prima de plazo elevada", "Salida de recesión, política monetaria expansiva"],
            ["Creciente y plana", "Prima de plazo con expectativas estables", "Fase madura del ciclo"],
            ["Plana", "Expectativa de bajadas que compensa la prima", "Final de un ciclo de subidas"],
            { celdas: ["Invertida", "Expectativa de bajadas pronunciadas", "Anticipación de recesión"], clase: "total" },
            ["Con joroba", "Expectativa de subidas y posterior bajada", "Endurecimiento monetario percibido como transitorio"],
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la curva invertida como señal de recesión",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La inversión de la curva —tipos cortos por encima de los largos— tiene uno de los historiales predictivos más citados de la macroeconomía financiera: ha precedido a la mayoría de las recesiones estadounidenses de las últimas décadas, con antelaciones de entre seis meses y dos años. Es un indicador que aparece en cualquier discusión sobre el ciclo, y conviene entender qué mide realmente antes de usarlo.",
            "**El mecanismo es razonable.** Si el mercado espera que el banco central baje tipos, es porque anticipa un deterioro de la actividad. Esa expectativa se refleja de inmediato en los tipos largos, que son promedios de los cortos futuros esperados. Cuando la caída esperada es lo bastante fuerte para superar la prima de plazo, la curva se invierte. **La curva no causa la recesión: refleja que el mercado ya la está descontando.**",
            "Hay además un canal causal secundario. Los bancos se financian a corto y prestan a largo, de modo que una curva invertida comprime su margen de intermediación —el de la ficha 8.01— y reduce su incentivo a conceder crédito. Ese endurecimiento contribuye a la desaceleración que la curva anticipaba.",
            "**Las cautelas son serias.** La muestra de recesiones es pequeña: unas ocho o nueve observaciones en Estados Unidos desde los años sesenta, lo que hace muy difícil distinguir señal de coincidencia. Ha habido falsos positivos. El plazo entre inversión y recesión es tan variable que la señal es poco accionable para decisiones de inversión. Y sobre todo, **la relación pudo cambiar** con los programas de compra de activos de los bancos centrales, que comprimieron artificialmente las primas de plazo: una curva plana por compras masivas del banco central no significa lo mismo que una curva plana por expectativas.",
            "El episodio de **2022 y 2023** en Estados Unidos ilustra la incomodidad. La curva se invirtió con claridad y de forma prolongada, y muchos análisis anticiparon una recesión que en aquel momento no llegó con la intensidad esperada. Interpretaciones posibles hay varias —desfase más largo de lo habitual, prima de plazo distorsionada, cambio estructural en la relación— y ninguna se puede confirmar con una sola observación. **La lección metodológica** es que un indicador con nueve observaciones históricas no soporta el peso que a veces se le pone encima, por muy sólida que sea la intuición que lo respalda.",
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
            { t: "Construir la curva con TIR de bonos con cupón", d: "La TIR de un bono con cupones es un promedio confuso de los tipos de todos sus flujos. Para comparar plazos hacen falta tipos cupón cero, obtenidos por bootstrapping. Mezclar bonos con cupones distintos produce una curva que no representa la estructura temporal real." },
            { t: "Leer los forwards como predicciones del mercado", d: "Un forward implícito es la expectativa más la prima de plazo. Como la prima no es observable, extraer expectativas puras requiere un modelo que la estime. Los forwards son tipos de no arbitraje, no pronósticos." },
            { t: "Interpretar una curva plana como ausencia de expectativas", d: "Si existe prima de plazo positiva, una curva plana implica que el mercado espera **bajadas** de tipos suficientes para compensarla. La ausencia de pendiente no equivale a ausencia de movimiento esperado." },
            { t: "Usar la inversión de la curva como regla mecánica", d: "La muestra histórica es de menos de diez recesiones, ha habido falsos positivos y el desfase es muy variable. Es un indicador informativo, no una regla de decisión, y su fiabilidad pudo alterarse con los programas de compra de activos." },
            { t: "Comparar curvas de emisores con distinto riesgo", d: "La curva de deuda soberana y la de bonos corporativos incorporan un diferencial de crédito que también varía con el plazo. Superponerlas sin separar ese componente mezcla riesgo de tipos con riesgo de crédito." },
            { t: "Olvidar que la curva se desplaza y también cambia de forma", d: "Los movimientos se descomponen en nivel, pendiente y curvatura, y una cartera puede estar cubierta frente al primero y expuesta a los otros dos. La duración solo protege de desplazamientos paralelos, que son los menos frecuentes." },
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
            "La curva de tipos condiciona magnitudes que aparecen directamente en las cuentas de las administraciones públicas.",
          ],
          lista: [
            "El **coste de financiación del Estado** depende del tramo de la curva en que emita. Una curva creciente pronunciada abarata el corto plazo y encarece el largo, y la decisión de dónde emitir es un compromiso entre coste inmediato y exposición a refinanciación.",
            "La **vida media de la deuda** determina la velocidad con que un cambio de la curva se traslada al gasto por intereses (D.41). Con vida media larga, una subida de tipos tarda años en reflejarse en el déficit, aunque el valor de mercado de la deuda reaccione al instante. Son dos relojes distintos, como se señalaba en la ficha 8.02.",
            "La **tasa de descuento** de la tabla suplementaria de derechos de pensión que exige el SEC 2010 se ancla en rendimientos de deuda a largo plazo. Un desplazamiento de la curva larga cambia el valor actual de los compromisos de pensiones en varios puntos de PIB sin que haya variado ninguna prestación.",
            "Las **proyecciones de sostenibilidad de la deuda** dependen críticamente del diferencial entre el tipo de interés implícito y el crecimiento nominal. Cuando el crecimiento supera al tipo, la deuda sobre PIB se reduce sola aunque haya déficit primario; cuando ocurre lo contrario, el ajuste requerido crece rápido.",
          ],
          cierre:
            "Ese último diferencial es el parámetro que decide cualquier análisis de sostenibilidad fiscal, y depende directamente del tramo largo de la curva. Es probablemente el punto donde el contenido de esta ficha resulta más aplicable fuera del ámbito de la inversión.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El tipo a un año es 2 % y a dos años 3 %. ¿Cuál es el forward implícito del segundo año?", a: "$1{,}03^2 / 1{,}02 - 1 = 4{,}01\\ \\%$. El tipo al contado sube un punto y el forward sube dos: el largo es un promedio que suaviza el perfil de los tipos esperados." },
            { q: "¿Por qué la curva suele tener pendiente positiva incluso sin esperarse subidas?", a: "Por la prima de plazo: los inversores exigen compensación por inmovilizar su dinero durante más tiempo y asumir el riesgo de que los tipos se muevan. Esa prima sesga la curva al alza con independencia de las expectativas." },
            { q: "¿Qué implica una curva perfectamente plana?", a: "Que el mercado espera bajadas de tipos suficientes para compensar la prima de plazo. Ausencia de pendiente no es ausencia de expectativas de movimiento." },
            { q: "¿Predice la curva invertida una recesión?", a: "La ha precedido en la mayoría de los casos históricos, pero la muestra es de menos de diez observaciones, ha habido falsos positivos y el desfase varía entre seis meses y dos años. Es informativa, no una regla mecánica." },
            { q: "¿Por qué importa la vida media de la deuda pública cuando suben los tipos?", a: "Porque determina la velocidad con que la subida llega al gasto por intereses. Con vida media larga, el valor de mercado de la deuda cae de inmediato pero el presupuesto solo lo nota a medida que los títulos vencen y se refinancian." },
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
            { ref: "Fabozzi, Bond Markets, Analysis and Strategies", nota: "bootstrapping, tipos forward y las teorías de la estructura temporal con el detalle técnico completo." },
            { ref: "Mishkin, Moneda, banca y mercados financieros", nota: "la exposición más accesible de las tres teorías y de la evidencia sobre la curva como indicador adelantado." },
            { ref: "Banco de España y BCE, boletines económicos", nota: "análisis de la curva del euro, primas de plazo estimadas y su relación con la política monetaria." },
            { ref: "Tesoro Público, estrategia de emisión", nota: "cómo se decide el reparto por plazos y qué papel juega la vida media de la deuda." },
          ],
        },
      ],
    },
  ],
};
