/* Ficha 7.09 — Valoracion de empresas: descuento de flujos y multiplos.
   Culmina el caso Distribuciones Arlanza: 6.06 a 6.08, 7.04, 7.05, 7.08. */

export default {
  codigo: "7.09",
  titulo: "Valoración de empresas: descuento de flujos y múltiplos",
  nivel: 3,
  bloque: "Finanzas corporativas",
  tiempo: "6 h",
  nucleo:
    "El descuento de flujos es el método conceptualmente correcto y el más frágil en la práctica, porque el valor terminal suele concentrar dos tercios del resultado. Los múltiplos son rápidos y comparables, y trasladan el problema a la elección de la muestra. Se usan juntos porque cada uno controla los errores del otro.",
  requiere: "7.04 Flujos de caja libres · 7.05 Coste de capital · 7.02 Rentas",
  abre: "7.10 Fusiones y adquisiciones · 8.04 Análisis fundamental",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Valorar una empresa es aplicar a un negocio entero la lógica de la ficha 7.03: estimar los flujos que generará y descontarlos a una tasa que refleje su riesgo. La diferencia con un proyecto es que una empresa no tiene fecha de fin, lo que obliga a partir la valoración en dos: un **período de proyección explícita**, normalmente de cinco a diez años, y un **valor terminal** que recoge todo lo posterior mediante una perpetuidad.",
            "Conviene ser claro sobre la implicación: en una valoración a cinco años con crecimiento moderado, el valor terminal representa habitualmente entre el 60 % y el 75 % del total. Es decir, **la mayor parte del resultado no procede de los flujos proyectados con detalle, sino de una fórmula con dos parámetros estimados**. Esta es la debilidad estructural del método y la razón de que nunca deba presentarse un descuento de flujos sin un análisis de sensibilidad.",
            "Hay dos maneras de llegar al valor de los fondos propios y no deben mezclarse. La vía del **flujo de caja libre descontado al WACC** da el valor de la empresa —el valor conjunto del negocio— y de ahí se resta la deuda financiera neta. La vía del **flujo para el accionista descontado al coste de los fondos propios** da directamente el valor de los fondos propios. Bien aplicadas coinciden; la primera es la habitual porque separa la decisión operativa de la financiera.",
            "Los **múltiplos** invierten el planteamiento: en lugar de estimar flujos, se observa a cuánto cotizan empresas parecidas y se aplica esa relación. Su ventaja es que incorporan la opinión del mercado y son rápidos; su debilidad es que trasladan todo el problema a la elección de comparables, y que arrastran cualquier error de valoración colectivo del sector. La regla técnica que más se incumple es la de **coherencia entre numerador y denominador**: los múltiplos de valor de empresa se aplican a magnitudes antes de intereses (EBITDA, EBIT, ventas) y los de precio, a magnitudes después (beneficio neto, fondos propios).",
            "El **valor patrimonial** —activo menos pasivo según libros— rara vez es relevante salvo en liquidaciones o en negocios cuyo valor está literalmente en sus activos, como una inmobiliaria patrimonialista. Para una empresa en funcionamiento, el balance recoge coste histórico y omite la marca, la cartera de clientes y el equipo, que suelen ser lo que se compra.",
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
            { nom: "Valor de la empresa por descuento de flujos", sub: "Proyección explícita más valor terminal.", cols: ["$\\mathrm{EV} = \\sum_t \\dfrac{\\mathrm{FCF}_t}{(1+\\mathrm{WACC})^t} + \\dfrac{\\mathrm{VT}}{(1+\\mathrm{WACC})^n}$"] },
            { nom: "Valor terminal por perpetuidad", sub: "Gordon aplicado al primer flujo posterior a la proyección.", cols: ["$\\mathrm{VT} = \\dfrac{\\mathrm{FCF}_{n+1}}{\\mathrm{WACC} - g}$"] },
            { nom: "Valor de los fondos propios", sub: "Del valor de la empresa al del accionista.", cols: ["Equity = EV − Deuda financiera neta"] },
            { nom: "Deuda financiera neta", sub: "Solo deuda con coste, menos tesorería.", cols: ["DFN = Deuda con coste − Efectivo"] },
            { nom: "Múltiplo de valor de empresa", sub: "Se aplica a magnitudes antes de intereses.", cols: ["EV / EBITDA · EV / EBIT · EV / Ventas"] },
            { nom: "Múltiplo de precio", sub: "Se aplica a magnitudes después de intereses.", cols: ["PER = Precio / Beneficio · P/VC = Precio / Valor contable"] },
            { nom: "Múltiplo implícito del valor terminal", sub: "La comprobación de coherencia del descuento de flujos.", cols: ["$\\dfrac{\\mathrm{VT}}{\\mathrm{EBITDA}_n}$"] },
          ],
          nota: "La última línea es la mejor defensa contra un valor terminal disparatado: se calcula qué múltiplo de EBITDA implica el valor terminal obtenido y se compara con lo que pagan las transacciones del sector. Si el modelo implica un múltiplo de 15 en un sector que se compra a 7, hay algo que revisar.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuánto vale Arlanza",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Es el momento de valorar la empresa que venimos siguiendo desde la ficha 6.06. Datos consolidados: BAII 76.000 €, NOPAT 57.000 €, amortización 52.000 €, NOF sobre ventas 16,7 %, deuda con coste 272.000 €, tesorería 30.000 €, WACC 7,08 % (ficha 7.05).",
            "**Normalización previa.** La inversión de 72.000 € del año N fue superior a la amortización; suponemos que en régimen estacionario la inversión de mantenimiento iguala a la amortización, de modo que ambas se cancelan en el flujo. Suponemos también crecimiento del **3 %** anual, en línea con el crecimiento nominal de largo plazo de la economía, y margen estable.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Flujo de caja libre normalizado", "Cálculo", "Importe"],
          filas: [
            ["NOPAT del año siguiente", "57.000 × 1,03", "58.710 €"],
            ["Amortización", "no es salida de caja", "+53.560 €"],
            ["Inversión de mantenimiento", "igual a la amortización", "−53.560 €"],
            ["Aumento de NOF", "16,7 % × 36.000 € de ventas nuevas", "−6.010 €"],
            { celdas: ["FCF normalizado", "—", "52.700 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Valoración", "Cálculo", "Importe"],
          filas: [
            ["Valor de la empresa (perpetuidad creciente)", "52.700 / (0,0708 − 0,03)", "1.291.700 €"],
            ["Deuda financiera neta", "272.000 − 30.000", "−242.000 €"],
            { celdas: ["Valor de los fondos propios", "—", "1.049.700 €"], clase: "total" },
            ["Patrimonio neto contable", "referencia", "408.000 €"],
            ["Múltiplo sobre valor contable", "1.049.700 / 408.000", "2,6x"],
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la comprobación por múltiplos**, que es donde el ejercicio se vuelve interesante. El EBITDA de Arlanza es 76.000 + 52.000 = **128.000 €**. El valor de empresa obtenido implica un múltiplo EV/EBITDA de **10,1x** y un PER de 1.049.700 / 48.000 = **21,9x**. En distribución mayorista, las transacciones se cierran habitualmente entre 6x y 9x EBITDA. **El modelo está por encima del rango del sector**, y eso obliga a revisar los supuestos en lugar de defender el número.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Valor de empresa según WACC y g", "g = 2 %", "g = 2,5 %", "g = 3 %"],
          filas: [
            ["WACC 6,5 %", "1.171.100 €", "1.317.500 €", "1.505.700 €"],
            ["WACC 7,08 %", "1.037.400 €", "1.150.200 €", "1.291.700 €"],
            ["WACC 8,0 %", "878.300 €", "957.300 €", "1.054.000 €"],
            { celdas: ["Múltiplo EV/EBITDA implícito", "6,9x – 9,2x", "7,5x – 10,3x", "8,2x – 11,8x"], clase: "total" },
          ],
          nota: "El valor oscila entre **878.000 € y 1.506.000 €** moviendo dos parámetros dentro de rangos perfectamente defendibles: **una diferencia del 71 %**. Con WACC del 8 % y g del 2 % el múltiplo implícito baja a 6,9x, dentro del rango sectorial. Esa combinación es probablemente la más creíble, y sugiere un valor en el entorno de **880.000 € de valor de empresa** y **640.000 € de fondos propios**.",
        },
        {
          tipo: "parrafos",
          items: [
            "La conclusión metodológica importa más que la cifra. Presentar «Arlanza vale 1.049.700 €» sería una falsa precisión de seis cifras significativas construida sobre dos estimaciones. Lo defendible es un **rango de 640.000 € a 1.050.000 €** para los fondos propios, señalando que la parte alta exige supuestos que el sector no valida. Y recordar el diagnóstico de las fichas anteriores: es una empresa que crea poco valor sobre su coste de capital y que consume caja, lo que justifica situarse en la parte baja del rango.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: qué hacer cuando los métodos discrepan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La discrepancia entre descuento de flujos y múltiplos no es un fallo del análisis: es información. Lo que hay que hacer es averiguar de dónde viene, y hay cuatro explicaciones posibles.",
            "**Uno: los supuestos del modelo son demasiado optimistas.** Es la explicación más frecuente y la que hay que descartar primero. Un crecimiento perpetuo elevado, un margen que se mantiene indefinidamente o una inversión de mantenimiento infravalorada inflan el valor terminal. El múltiplo implícito lo delata inmediatamente.",
            "**Dos: los comparables no son comparables.** Empresas del mismo epígrafe de actividad pueden tener márgenes, crecimiento y riesgo muy distintos. Un múltiplo solo es aplicable si las empresas de la muestra comparten los factores que determinan el valor, no solo el sector.",
            "**Tres: el mercado tiene razón y el modelo captura algo que los comparables no.** Puede ocurrir: una empresa con una posición competitiva singular, un contrato de largo plazo o un activo no reflejado en el EBITDA. Es la explicación menos frecuente y la que más hay que justificar.",
            "**Cuatro: el sector entero está mal valorado.** Los múltiplos arrastran los errores colectivos del mercado. En una burbuja sectorial, todos los comparables cotizan caros y el múltiplo valida precios insostenibles. Fue exactamente lo que ocurrió con las tecnológicas en 2000 y con la promoción inmobiliaria española antes de 2008.",
            "**La práctica razonable.** Calcular el descuento de flujos con escenarios, obtener el rango de valor, comprobar qué múltiplos implica cada extremo y contrastar con transacciones reales del sector. Si el rango encaja, se tiene una valoración defendible. Si no encaja, se ha aprendido algo sobre los supuestos y hay que rehacerlos. **El objetivo no es un número, sino entender de qué depende el número.**",
            "Y una cautela final: en una negociación real, la valoración es solo el punto de partida. El precio lo determinan además el número de interesados, la urgencia de las partes, la estructura del pago y las garantías. Un descuento de flujos impecable no gana una subasta.",
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
            { t: "Usar tasas de crecimiento perpetuo insostenibles", d: "Una g superior al crecimiento nominal de largo plazo de la economía implica que la empresa acabaría siendo mayor que el PIB. En la práctica, g debería situarse en el entorno de la inflación esperada más un pequeño diferencial. Cada décima adicional mueve el valor terminal de forma desproporcionada." },
            { t: "Mezclar magnitudes de valor de empresa y de precio", d: "EV/beneficio neto o PER sobre EBITDA no significan nada. El numerador de valor de empresa incluye a los acreedores, así que el denominador debe ser una magnitud antes de intereses. El precio de la acción corresponde solo al accionista, así que va con magnitudes después." },
            { t: "Olvidar restar la deuda neta", d: "El descuento del flujo de caja libre al WACC da el valor del **negocio**, no el de los fondos propios. Confundirlos sobrevalora la participación en el importe íntegro de la deuda neta, que en empresas apalancadas es un error enorme." },
            { t: "No comprobar el múltiplo implícito del valor terminal", d: "Es la verificación más barata y la que más errores detecta. Si el valor terminal implica un múltiplo muy por encima de lo que se paga en el sector, el modelo está diciendo que el negocio será mucho mejor en el futuro, y eso hay que justificarlo explícitamente." },
            { t: "Elegir comparables por epígrafe de actividad", d: "Lo relevante es que compartan los determinantes del valor: crecimiento, margen, intensidad de capital y riesgo. Dos empresas del mismo sector con márgenes del 4 % y del 18 % no admiten el mismo múltiplo." },
            { t: "Suponer inversión de mantenimiento igual a la amortización sin comprobarlo", d: "Es la aproximación habitual y a menudo es tosca. En sectores con activos antiguos o con inflación acumulada, la inversión necesaria para mantener la capacidad supera a la amortización contable, calculada sobre coste histórico." },
            { t: "Presentar un único número con decimales", d: "Un valor obtenido de un WACC estimado y una g supuesta es un rango, no una cifra. Presentarlo con precisión de euros transmite una confianza que el método no soporta y dificulta la discusión sobre los supuestos, que es donde está el contenido." },
            { t: "Valorar por el patrimonio neto contable", d: "El balance recoge coste histórico y omite marca, cartera de clientes y equipo humano, que suelen ser lo que se compra. Solo es relevante en liquidación o en negocios cuyo valor reside literalmente en los activos." },
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
            "Las cuentas financieras del SEC 2010 se enfrentan al mismo problema de esta ficha, y a una escala que obliga a resolverlo con métodos explícitos.",
          ],
          lista: [
            "Las **participaciones en el capital no cotizadas (AF.512)** deben valorarse a precios de mercado como el resto de activos financieros. Pero no hay mercado que dé precio: hay que estimarlo para el conjunto de las sociedades no cotizadas de un país.",
            "El SEC propone varios métodos, y el más utilizado es **capitalizar magnitudes de las sociedades no cotizadas con los múltiplos observados en las cotizadas comparables** del mismo sector y tamaño. Es exactamente la técnica de múltiplos de esta ficha, aplicada a escala de sector institucional.",
            "Como alternativa se admite el **valor de los fondos propios contables**, con ajustes. Es la opción menos satisfactoria conceptualmente y a veces la única viable, y su uso hace que la comparación internacional de la riqueza financiera de los hogares dependa del método elegido en cada país.",
            "La sensibilidad del resultado es del mismo orden que la del ejemplo de Arlanza: la riqueza financiera de los hogares de un país puede variar de forma apreciable según el criterio de valoración de las participaciones no cotizadas, y por eso la armonización metodológica en este punto ha recibido tanta atención.",
          ],
          cierre:
            "El paralelismo es exacto en el problema y en la solución: cuando no hay precio observable, se recurre a comparables cotizadas; cuando ni eso es viable, al valor contable, sabiendo que es una aproximación pobre. Lo que en una valoración de empresa es una decisión del analista, en cuentas nacionales es una decisión metodológica documentada que afecta a agregados publicados.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "FCF normalizado 80.000 €, WACC 9 %, g 2 %. ¿Valor de la empresa?", a: "80.000 / (0,09 − 0,02) = 1.142.857 €. Si además hubiera 300.000 € de deuda neta, el valor de los fondos propios sería de 842.857 €." },
            { q: "¿Por qué el valor terminal suele ser dos tercios del total?", a: "Porque recoge todos los flujos posteriores al período de proyección, que son infinitos. Es la debilidad estructural del método: la mayor parte del resultado no procede de los flujos estimados con detalle sino de una fórmula con dos parámetros supuestos." },
            { q: "¿Puede aplicarse un múltiplo EV/EBITDA al beneficio neto?", a: "No. El valor de empresa corresponde a acreedores y accionistas conjuntamente, así que va con magnitudes antes de intereses. El beneficio neto es posterior a intereses y corresponde solo al accionista: le corresponde el PER." },
            { q: "El descuento de flujos da 10x EBITDA y el sector se compra a 7x. ¿Qué haces?", a: "Revisar los supuestos antes que defender el número. Lo más probable es que la g o el margen proyectado sean optimistas. Si tras revisarlos el modelo sigue por encima, hay que justificar explícitamente qué tiene esta empresa que los comparables no tienen." },
            { q: "¿Cómo valora el SEC 2010 las participaciones en sociedades no cotizadas?", a: "Estimando su valor de mercado, habitualmente capitalizando magnitudes con múltiplos de cotizadas comparables del mismo sector, o en su defecto con el valor de los fondos propios contables ajustado. Es la técnica de múltiplos aplicada a escala sectorial." },
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
            { ref: "Damodaran, Valuation", nota: "la referencia. Su web ofrece múltiplos sectoriales, primas de riesgo por país y hojas de cálculo, todo actualizado anualmente y de acceso libre." },
            { ref: "Fernández, Pablo — Valoración de empresas", nota: "enfoque español, muy crítico con los errores habituales. Su recopilación de errores frecuentes en valoraciones reales es especialmente útil." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "la exposición ordenada de las dos vías —flujo libre al WACC y flujo al accionista al Ke— y su equivalencia." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 7", nota: "valoración de balances financieros y métodos admitidos para participaciones no cotizadas." },
          ],
        },
      ],
    },
  ],
};
