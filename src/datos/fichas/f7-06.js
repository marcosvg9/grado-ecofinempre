/* Ficha 7.06 — Estructura de capital: Modigliani-Miller e impuestos. */

export default {
  codigo: "7.06",
  titulo: "Estructura de capital: Modigliani-Miller e impuestos",
  nivel: 3,
  bloque: "Finanzas corporativas",
  tiempo: "5 h",
  nucleo:
    "En un mundo sin fricciones, cómo se financie una empresa no altera su valor. Toda la teoría real de la estructura de capital consiste en identificar qué fricción domina en cada caso: impuestos, costes de insolvencia, asimetría informativa o conflictos de agencia.",
  requiere: "7.05 Coste de capital · 6.07 Efecto apalancamiento",
  abre: "7.07 Política de dividendos · 7.09 Valoración de empresas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El resultado de Modigliani y Miller de 1958 es célebre por lo que parece decir y valioso por lo que realmente hace. Bajo un conjunto de supuestos exigentes —sin impuestos, sin costes de insolvencia, sin asimetría informativa y con acceso al crédito en las mismas condiciones para empresas e inversores— **el valor de una empresa no depende de cómo se financie**. El argumento es de arbitraje: si dos empresas idénticas salvo por su deuda valieran distinto, un inversor podría replicar el apalancamiento por su cuenta y obtener beneficio sin riesgo.",
            "Leído literalmente, el resultado parece inútil: ninguno de esos supuestos se cumple. Su valor está en invertir la pregunta. Si en el mundo real la estructura de capital sí importa, tiene que ser **por alguno de los supuestos que se incumplen**, y eso convierte una discusión difusa en una lista concreta de mecanismos que se pueden analizar por separado.",
            "La segunda proposición completa el cuadro y es la que conecta con la ficha anterior: endeudarse **no abarata el capital**, sino que traslada riesgo. A medida que crece la deuda, los accionistas soportan un resultado más volátil y exigen más rentabilidad, exactamente en la proporción que compensa el mayor peso de la deuda barata. El coste medio ponderado permanece constante. Esa es la versión rigurosa del efecto apalancamiento de la ficha 6.07.",
            "La primera fricción que rompe la irrelevancia son los **impuestos**. Los intereses son deducibles y los dividendos no, de modo que endeudarse traslada valor del Estado a la empresa. El valor de la empresa apalancada supera al de la no apalancada en el valor actual del escudo fiscal, que en el caso simple es el tipo impositivo multiplicado por la deuda. Llevado al extremo, el modelo recomendaría financiarse íntegramente con deuda, lo que evidentemente no ocurre.",
            "La corrección viene de los **costes de insolvencia financiera**. No son solo los costes directos de un concurso —abogados, administradores, tiempo— sino sobre todo los indirectos, que aparecen mucho antes: proveedores que endurecen condiciones, clientes que dudan del servicio posventa, empleados clave que se van, proyectos rentables que no se acometen porque el beneficio iría a los acreedores. De ahí la **teoría del equilibrio**: existe un nivel óptimo de deuda donde el valor marginal del escudo fiscal iguala al coste marginal esperado de la insolvencia.",
            "Hay dos teorías más que explican comportamientos que el equilibrio no captura. La **jerarquía financiera** parte de la asimetría informativa: como el mercado interpreta una ampliación de capital como señal de que los gestores consideran cara su acción, las empresas prefieren autofinanciarse, luego endeudarse y solo en último término emitir acciones. Y los **costes de agencia** funcionan en ambas direcciones: la deuda disciplina a directivos con exceso de caja libre, pero también genera problemas de sobreinversión y de subinversión cuando la empresa está muy apalancada.",
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
            { nom: "MM I sin impuestos", sub: "El valor no depende de la financiación.", cols: ["$V_L = V_U$"] },
            { nom: "MM II sin impuestos", sub: "El coste de los fondos propios crece linealmente con la deuda.", cols: ["$K_e = K_u + (K_u - K_d)\\,D/E$"] },
            { nom: "MM I con impuestos", sub: "El escudo fiscal añade valor.", cols: ["$V_L = V_U + t D$"] },
            { nom: "MM II con impuestos", sub: "La pendiente se suaviza por el factor fiscal.", cols: ["$K_e = K_u + (K_u - K_d)(1-t)\\,D/E$"] },
            { nom: "Valor de la empresa sin deuda", sub: "Flujo operativo neto descontado al coste del activo.", cols: ["$V_U = \\dfrac{\\mathrm{BAII}(1-t)}{K_u}$"] },
            { nom: "Teoría del equilibrio", sub: "El óptimo iguala beneficio marginal y coste marginal.", cols: ["$V_L = V_U + \\mathrm{VA}(\\text{escudo fiscal}) - \\mathrm{VA}(\\text{costes de insolvencia})$"] },
          ],
          nota: "**Ku** es el coste de capital de la empresa sin deuda, es decir, el coste del riesgo puramente operativo. Es el mismo concepto que la beta desapalancada de la ficha 7.05.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo negocio con tres estructuras",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa genera un BAII estable de **100.000 €** a perpetuidad. El coste de capital del negocio sin deuda es del **10 %**, el tipo de la deuda del **5 %** y el impuesto de sociedades del **25 %**. Su valor sin apalancar es 100.000 × 0,75 / 0,10 = **750.000 €**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Deuda", "0 €", "300.000 €", "500.000 €"],
          filas: [
            ["Escudo fiscal (t × D)", "0 €", "75.000 €", "125.000 €"],
            ["Valor de la empresa", "750.000 €", "825.000 €", "875.000 €"],
            ["Valor de los fondos propios", "750.000 €", "525.000 €", "375.000 €"],
            ["Ratio D/E", "0,00", "0,571", "1,333"],
            ["Coste de los fondos propios (Ke)", "10,00 %", "12,14 %", "15,00 %"],
            { celdas: ["WACC", "10,00 %", "9,09 %", "8,57 %"], clase: "total" },
          ],
          nota: "Comprobación del caso intermedio: $75.000 / 0{,}0909 = 825.000$ €, que coincide con $V_U + tD$. El WACC baja y el valor sube, pero fíjate en que **el coste de los fondos propios sube más de dos puntos**: el accionista no está ganando gratis, está aceptando más riesgo a cambio.",
        },
        {
          tipo: "parrafos",
          items: [
            "Si el modelo terminase aquí, la recomendación sería endeudarse hasta el límite: con 700.000 € de deuda el valor sería de 925.000 € y con un millón, de un millón. **Ninguna empresa real hace eso**, y la razón es que la tabla ignora los costes de insolvencia.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Deuda (miles)", y: "Valor (miles)" },
          dominio: { x: [0, 750], y: [740, 950] },
          marcasX: [0, 200, 400, 600],
          marcasY: [750, 800, 850, 900, 950],
          series: [
            {
              nombre: "Solo escudo fiscal",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [750, 937.5],
              puntos: [[0, 750], [750, 937.5]],
            },
            {
              nombre: "Valor real",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [700, 785],
              puntos: [[0, 750], [200, 797], [400, 832], [500, 840], [600, 825], [700, 785]],
            },
          ],
          puntos: [
            { x: 500, y: 840, etiqueta: "óptimo", guias: true },
          ],
          nota: "La recta discontinua es **Modigliani-Miller con impuestos y nada más**: cada euro de deuda añade 25 céntimos de escudo fiscal, sin límite, y su recomendación lógica sería endeudarse hasta el infinito. La curva es lo que ocurre cuando se cuentan también los **costes esperados de insolvencia**, que al principio son insignificantes y después crecen mucho más deprisa que el escudo. El máximo está en **500.000 € de deuda**, y a partir de ahí cada euro adicional destruye más valor del que crea. Obsérvese que la curva es **muy plana alrededor del óptimo** —entre 400.000 y 600.000 el valor apenas varía—, lo que explica que en la práctica las empresas convivan con estructuras de capital bastante distintas sin penalización apreciable, y que este modelo prediga mucho mejor un rango que un número.",
        },
        {
          tipo: "tabla",
          cabecera: ["Deuda", "Escudo fiscal", "Coste esperado de insolvencia", "Valor neto"],
          filas: [
            ["0 €", "0 €", "0 €", "750.000 €"],
            ["200.000 €", "50.000 €", "−3.000 €", "797.000 €"],
            ["400.000 €", "100.000 €", "−18.000 €", "832.000 €"],
            { celdas: ["500.000 €", "125.000 €", "−35.000 €", "840.000 €"], clase: "total" },
            ["600.000 €", "150.000 €", "−75.000 €", "825.000 €"],
            ["700.000 €", "175.000 €", "−140.000 €", "785.000 €"],
          ],
          nota: "El escudo fiscal crece de forma **lineal** con la deuda y el coste esperado de insolvencia crece de forma **más que proporcional**, porque aumentan a la vez la probabilidad de quiebra y su coste. El óptimo está donde ambas fuerzas se igualan en el margen: en torno a los 500.000 €. Las cifras de la tercera columna son ilustrativas: estimarlas en un caso real es la parte difícil y el motivo de que en la práctica se trabaje con rangos y con comparables sectoriales.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué nadie se endeuda al máximo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La brecha entre el óptimo teórico y el comportamiento observado es amplia y persistente: la mayoría de las empresas rentables están **menos endeudadas** de lo que el modelo del equilibrio recomendaría. Las explicaciones se acumulan y ninguna es completa por sí sola.",
            "**El escudo fiscal está limitado por ley.** En España, el artículo 16 de la Ley del Impuesto sobre Sociedades restringe la deducibilidad de los gastos financieros netos al 30 % del beneficio operativo, con un mínimo deducible de un millón de euros. Es una transposición de las normas europeas contra la erosión de bases imponibles, y significa que a partir de cierto nivel de deuda **el escudo fiscal simplemente deja de existir**. El tramo horizontal que el modelo simple no contempla.",
            "**La flexibilidad financiera tiene valor.** Una empresa con capacidad de endeudamiento sin usar puede aprovechar oportunidades inesperadas o resistir una crisis sin recurrir al mercado en el peor momento. Ese valor de opción no aparece en las fórmulas, y sin embargo es la razón que más citan los directores financieros cuando se les pregunta.",
            "**La jerarquía explica el patrón mejor que el óptimo.** Las empresas muy rentables generan caja suficiente para financiarse solas y acaban poco endeudadas, no porque hayan calculado un óptimo sino porque nunca necesitaron acudir al mercado. La correlación negativa entre rentabilidad y endeudamiento, robusta en los datos, es difícil de explicar con la teoría del equilibrio y trivial con la de la jerarquía.",
            "**Y el sector determina más que la empresa.** La estructura de capital viable depende de la estabilidad de los flujos y de la naturaleza de los activos. Una inmobiliaria patrimonialista soporta un apalancamiento que arruinaría a una empresa de software, porque sus flujos son predecibles y sus activos son colaterales líquidos. **Conecta con la ficha 6.04:** apalancamiento operativo y financiero se multiplican, y quien tiene mucho del primero debe moderar el segundo.",
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
            { t: "Concluir que Modigliani-Miller dice que la financiación no importa", d: "Dice que no importa bajo unos supuestos que no se cumplen. Su utilidad es señalar dónde buscar: si la estructura de capital afecta al valor, es por impuestos, insolvencia, información o agencia. Es un mapa de mecanismos, no una recomendación." },
            { t: "Creer que la deuda abarata el capital sin contrapartida", d: "La deuda es más barata que los fondos propios, pero endeudarse eleva el riesgo del accionista y, con él, el coste de los fondos propios. Sin impuestos, ambos efectos se compensan exactamente y el WACC no se mueve. La rebaja procede del escudo fiscal, no del menor tipo de la deuda." },
            { t: "Aplicar el escudo fiscal sin límite", d: "Solo vale si hay beneficio suficiente contra el que deducir, y en España existe además el tope del 30 % del beneficio operativo. Una empresa en pérdidas no obtiene ningún escudo fiscal por endeudarse." },
            { t: "Ignorar los costes indirectos de insolvencia", d: "Los costes directos de un concurso son pequeños en proporción al valor. Los indirectos —pérdida de clientes, endurecimiento de proveedores, fuga de talento, proyectos no acometidos— aparecen mucho antes del concurso, en cuanto el mercado percibe fragilidad, y suelen ser un orden de magnitud mayores." },
            { t: "Buscar una estructura óptima precisa", d: "El valor es bastante plano en torno al óptimo: moverse un 10 % arriba o abajo cambia poco. Lo que destruye valor son los extremos. Perseguir un ratio exacto es una precisión falsa; mantenerse dentro de un rango razonable es lo que importa." },
            { t: "Extrapolar el ratio de deuda de otro sector", d: "La capacidad de endeudamiento depende de la volatilidad de los flujos y de la naturaleza de los activos. Comparar el apalancamiento de una utility con el de una biotecnológica no dice nada sobre si alguna de las dos está mal financiada." },
            { t: "Olvidar la interacción con el apalancamiento operativo", d: "Los dos apalancamientos se multiplican. Una empresa con costes fijos elevados y deuda elevada amplifica dos veces la misma caída de ventas, y es la combinación donde se concentran las quiebras en las recesiones." },
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
            "El sesgo fiscal a favor de la deuda tiene consecuencias macroeconómicas que se leen directamente en las cuentas de los sectores institucionales.",
          ],
          lista: [
            "El SEC 2010 trata de forma **asimétrica** la remuneración de ambas fuentes: los intereses son operaciones de distribución (D.41) deducibles en la base imponible, mientras que los dividendos (D.42) se pagan con renta ya gravada. Esa asimetría es el escudo fiscal visto a escala agregada.",
            "El **endeudamiento de las sociedades no financieras** sobre PIB es el indicador macro del apalancamiento del que trata esta ficha. En España pasó de niveles moderados a máximos históricos hasta 2008 y protagonizó después un desapalancamiento prolongado que condicionó la recuperación.",
            "La **teoría de la jerarquía** tiene su reflejo en la relación entre ahorro bruto de las sociedades y su formación de capital: cuando el ahorro cubre la inversión, el sector presenta capacidad de financiación y no necesita acudir al crédito.",
            "El **sesgo fiscal** a favor de la deuda ha motivado propuestas normativas en la Unión Europea para introducir una deducción por financiación con fondos propios, precisamente para corregir la distorsión que el modelo de esta ficha describe.",
          ],
          cierre:
            "La lectura macro aporta algo que el análisis de empresa no ve: un apalancamiento que es óptimo para cada empresa por separado puede ser excesivo para el conjunto, porque nadie internaliza el efecto sobre la fragilidad del sistema financiero. Es una externalidad que la teoría del equilibrio, planteada empresa a empresa, no recoge.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Sin impuestos ni costes de insolvencia, ¿qué le pasa al WACC al aumentar la deuda?", a: "Nada: permanece constante. El menor peso del coste barato se compensa exactamente con el mayor coste de los fondos propios, porque el accionista soporta más riesgo. Es la segunda proposición de Modigliani-Miller." },
            { q: "$V_U = 800.000$ €, deuda 400.000 €, tipo impositivo 25 %. ¿Valor apalancado?", a: "800.000 + 0,25 × 400.000 = 900.000 €. El escudo fiscal aporta 100.000 €, que es valor trasladado del Estado a la empresa, no valor creado por el negocio." },
            { q: "¿Por qué las empresas más rentables suelen estar menos endeudadas?", a: "Por la jerarquía financiera: generan caja suficiente para autofinanciarse y no necesitan acudir al crédito. El patrón es difícil de explicar con la teoría del equilibrio, que predeciría lo contrario, ya que son las que más pueden aprovechar el escudo fiscal." },
            { q: "Una empresa en pérdidas se endeuda más. ¿Obtiene escudo fiscal?", a: "No. Sin beneficio no hay base imponible contra la que deducir los intereses. Puede generar créditos fiscales por bases negativas, pero solo valdrán si vuelve a tener beneficios, y eso ya es incierto." },
            { q: "¿Qué pasa cuando se combinan apalancamiento operativo y financiero elevados?", a: "Los efectos se multiplican: una caída de ventas del 10 % puede reducir el beneficio del accionista en un 80 % o más. Es la combinación que concentra las quiebras en las recesiones, y por eso los sectores con costes fijos altos deben moderar la deuda." },
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
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "los capítulos de estructura de capital. La exposición clásica de MM, del equilibrio y de la jerarquía." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "más ordenado en el desarrollo formal y en los costes de agencia de la deuda." },
            { ref: "Ley 27/2014 del Impuesto sobre Sociedades, artículo 16", nota: "el límite a la deducibilidad de gastos financieros netos en España." },
            { ref: "Banco de España, Informe Anual", nota: "series de endeudamiento de sociedades no financieras y análisis del proceso de desapalancamiento." },
          ],
        },
      ],
    },
  ],
};
