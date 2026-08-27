/* Ficha 7.04 — Estimacion de flujos de caja libres.
   Retoma el caso Distribuciones Arlanza de 6.06-6.08. */

export default {
  codigo: "7.04",
  titulo: "Estimación de flujos de caja libres",
  nivel: 2,
  bloque: "Finanzas corporativas",
  tiempo: "5 h",
  nucleo:
    "Los flujos relevantes son incrementales, después de impuestos y antes de intereses. Cuatro reglas que parecen obvias y que se incumplen sistemáticamente, porque cada una de ellas contradice algún hábito arraigado de la contabilidad o del sentido común.",
  requiere: "7.03 VAN y TIR · 6.08 Estado de flujos de efectivo",
  abre: "7.05 Coste de capital · 7.09 Valoración de empresas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El VAN es una fórmula sencilla aplicada a unos flujos que casi nunca lo son. En la práctica, el 90 % del error de una valoración o de un análisis de inversión está en el numerador, no en la tasa de descuento. Y sin embargo la discusión suele concentrarse en el denominador, que es más fácil de discutir porque cabe en un solo número.",
            "La regla fundamental es la de los **flujos incrementales**: solo cuenta lo que cambia por hacer el proyecto respecto de no hacerlo. De ahí se deducen las tres consecuencias que más cuesta aplicar. Los **costes hundidos** quedan fuera: el estudio de mercado ya pagado se pagó igual, se acometa o no el proyecto, y por tanto es irrelevante para la decisión, por mucho que duela. Los **costes de oportunidad** entran, aunque no impliquen desembolso: usar una nave vacía que se podría alquilar tiene el coste del alquiler no percibido. Y la **canibalización** entra con signo negativo: si el producto nuevo se come ventas del antiguo, esa pérdida es un flujo del proyecto.",
            "La segunda regla es que los flujos van **después de impuestos**. Los impuestos son una salida de caja real y su cuantía depende de la fiscalidad concreta, no de la contable. Ahí aparece el **escudo fiscal de la amortización**: no es caja, pero reduce la base imponible y por tanto ahorra impuestos. Un activo amortizable genera un ahorro fiscal igual a la amortización multiplicada por el tipo impositivo, y ese ahorro sí es dinero.",
            "La tercera regla, la que más se incumple: **los flujos van antes de intereses**. El coste de la financiación está en la tasa de descuento; restarlo también del flujo lo cuenta dos veces. De ahí que el flujo de caja libre parta del BAII y no del resultado neto. Cuando se quiere valorar específicamente lo que llega al accionista se usa otro flujo distinto, el flujo de caja para el accionista, y entonces sí se restan intereses y se suma la variación de deuda, pero con una tasa de descuento también distinta.",
            "La cuarta regla es que **el circulante cuenta**. Un proyecto que crece exige financiar existencias y saldos de clientes, y ese dinero está inmovilizado hasta el final. Es la partida que más se olvida en las hojas de cálculo, y es exactamente el fenómeno que las fichas 6.06 y 6.08 mostraban en Arlanza. Al terminar el proyecto, el circulante se recupera y entra como flujo positivo del último año.",
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
            { nom: "Flujo de caja libre (FCF)", sub: "Antes de intereses: el flujo del proyecto o de la empresa.", cols: ["$\\mathrm{FCF} = \\mathrm{BAII}(1-t) + \\text{Amortización} - \\Delta\\mathrm{NOF} - \\mathrm{CAPEX}$"] },
            { nom: "Escudo fiscal de la amortización", sub: "Por eso la amortización se suma después de impuestos.", cols: ["Escudo = Amortización × t"] },
            { nom: "Flujo para el accionista (FCFE)", sub: "Se descuenta al coste de los fondos propios, no al WACC.", cols: ["$\\mathrm{FCFE} = \\mathrm{FCF} - \\text{Intereses}(1-t) + \\Delta\\text{Deuda}$"] },
            { nom: "Necesidades operativas de fondos", sub: "Se recuperan al liquidar el proyecto.", cols: ["NOF = Existencias + Clientes − Proveedores"] },
            { nom: "Valor residual por perpetuidad", sub: "Gordon aplicado al último flujo proyectado.", cols: ["$\\mathrm{VR} = \\dfrac{\\mathrm{FCF}_{n+1}}{k - g}$"] },
            { nom: "Flujo de liquidación de un activo", sub: "El impuesto se calcula sobre la plusvalía contable.", cols: ["FC = Precio de venta − t × (Precio − Valor contable)"] },
          ],
          nota: "El **valor residual** suele representar entre la mitad y dos tercios del valor total en una valoración a cinco años. Es decir: la mayor parte del resultado descansa en una fórmula con dos parámetros estimados, no en los flujos que se han proyectado con detalle.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el flujo libre de Arlanza",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la empresa de las fichas 6.06 a 6.08, cuyo estado de flujos ya reconstruimos. Datos del año N: BAII 76.000 €, amortización 52.000 €, aumento de las NOF 60.000 €, inversión en inmovilizado 72.000 €, tipo impositivo 25 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["BAII", "—", "76.000 €"],
            ["Impuesto sobre el BAII", "76.000 × 25 %", "−19.000 €"],
            { celdas: ["NOPAT (resultado operativo neto)", "—", "57.000 €"], clase: "total" },
            ["Amortización", "no es salida de caja", "+52.000 €"],
            ["Aumento de las NOF", "existencias y clientes", "−60.000 €"],
            ["Inversión en inmovilizado", "—", "−72.000 €"],
            { celdas: ["Flujo de caja libre", "—", "−23.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "En la ficha 6.08 obtuvimos un flujo de caja libre de −32.000 €, partiendo del flujo de explotación de 40.000 € menos los 72.000 € de inversión. Ahora sale −23.000 €. **La diferencia de 9.000 € no es un error**: es la distinta manera de tratar la financiación, y conciliarla es un ejercicio que aclara más que cualquier explicación.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Conciliación", "Cálculo", "Importe"],
          filas: [
            ["Flujo de explotación del estado de flujos", "ficha 6.08", "40.000 €"],
            ["Intereses pagados, que no restan en el FCF", "se reincorporan", "+12.000 €"],
            ["Impuesto adicional sin escudo fiscal de la deuda", "19.000 − 16.000", "−3.000 €"],
            { celdas: ["Flujo de explotación sin apalancar", "—", "49.000 €"], clase: "total" },
            ["Inversión en inmovilizado", "—", "−72.000 €"],
            { celdas: ["Flujo de caja libre", "—", "−23.000 €"], clase: "total" },
          ],
          nota: "Los 9.000 € de diferencia son los **12.000 € de intereses** menos los **3.000 € de escudo fiscal** que esos intereses generaban. Dicho de otro modo: la deuda le ahorra a Arlanza 3.000 € de impuestos al año, y ese ahorro es real. En el enfoque del FCF ese beneficio no se cuenta en el numerador porque se recoge en la tasa de descuento, a través del coste de la deuda después de impuestos del WACC.",
        },
        {
          tipo: "parrafos",
          items: [
            "El diagnóstico de Arlanza queda ahora completo: genera **57.000 € de NOPAT** y **49.000 € de caja operativa sin apalancar**, pero consume 60.000 € en circulante y 72.000 € en inversión, de modo que su flujo libre es negativo. Si los 72.000 € fueran inversión de expansión con VAN positivo, el flujo negativo sería una buena noticia; si fueran de mantenimiento, la empresa estaría consumiendo capital.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la hoja de cálculo que siempre sale bien",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un equipo presenta el análisis de una nueva línea de producto: inversión de 2 millones, VAN de 380.000 € al coste de capital de la empresa, TIR del 19 %. El proyecto se aprueba. Cuatro años después, la línea no ha alcanzado ni la mitad de las ventas previstas. Repasar la hoja de cálculo original revela seis decisiones, ninguna de ellas deshonesta.",
            "**Uno:** se incluyó como coste el estudio de mercado de 80.000 € ya pagado. Es un coste hundido y no debía figurar; su inclusión, curiosamente, jugaba en contra del proyecto, lo que dio a la estimación una falsa apariencia de conservadurismo.",
            "**Dos:** la nave donde se instalaría la línea figuraba a coste cero por ser propiedad de la empresa. Estaba alquilada a un tercero por 45.000 € anuales, que se perderían. Ese coste de oportunidad no aparecía.",
            "**Tres:** no se descontó canibalización. El producto nuevo se dirigía al mismo cliente que la gama existente, y una parte de sus ventas iban a sustituir a otras, no a añadirse.",
            "**Cuatro:** las necesidades operativas de fondos se estimaron como un porcentaje fijo de ventas del primer año, sin crecer con ellas. Un proyecto que multiplica por tres sus ventas en cinco años multiplica también su circulante.",
            "**Cinco:** el valor residual se calculó con la fórmula de Gordon y una tasa de crecimiento perpetuo del 3,5 %, superior al crecimiento nominal esperado de la economía. Representaba el 61 % del valor total del proyecto.",
            "**Seis:** los flujos se proyectaron en euros corrientes con inflación del 2 % y se descontaron a una tasa real. Mezclar ambos criterios infla el VAN de forma sistemática.",
            "**La lección no es que hubiera mala fe.** Es que la estimación de flujos admite decenas de decisiones defendibles individualmente cuyo sesgo acumulado apunta casi siempre en la misma dirección: la de quien quiere que el proyecto salga. La defensa razonable es doble: **análisis de sensibilidad** sobre los tres o cuatro parámetros que más mueven el resultado, y **escenarios explícitos** —pesimista, central, optimista— en lugar de un único número con dos decimales que aparenta una precisión inexistente.",
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
            { t: "Incluir costes hundidos", d: "Lo ya gastado es irrecuperable y no cambia por acometer o no el proyecto. Incluirlo puede llevar tanto a rechazar proyectos buenos como a persistir en malos, esto último por la falacia del coste irrecuperable: «hemos invertido demasiado para parar ahora»." },
            { t: "Olvidar los costes de oportunidad", d: "Usar un activo propio no es gratis: tiene el coste de lo que ese activo rendiría en su mejor uso alternativo. Naves, terrenos, marcas y tiempo de directivos son los casos habituales, y su omisión favorece sistemáticamente al proyecto." },
            { t: "Restar los intereses del flujo", d: "El coste de la financiación está en la tasa de descuento. Restarlo también del numerador lo cuenta dos veces. Si se quiere trabajar con el flujo para el accionista, entonces sí se restan, pero hay que descontar al coste de los fondos propios y no al WACC." },
            { t: "Ignorar la inversión en circulante", d: "Un proyecto que crece inmoviliza dinero en existencias y en saldos de clientes. Es la partida más olvidada de las hojas de cálculo y una de las mayores en negocios comerciales. Y no olvidar que se recupera en el último año." },
            { t: "Apoyar la valoración en el valor residual", d: "Cuando el valor residual supone dos tercios del total, la valoración no descansa en los flujos proyectados sino en dos parámetros de una fórmula. Conviene comprobar siempre qué múltiplo implícito supone ese valor residual y si resulta creíble." },
            { t: "Usar tasas de crecimiento perpetuo insostenibles", d: "Una g superior al crecimiento nominal de la economía implica que el negocio acabaría siendo mayor que el PIB. En la práctica, g debería situarse en el entorno de la inflación de largo plazo más un pequeño diferencial, y nunca por encima del crecimiento nominal esperado." },
            { t: "Mezclar euros corrientes con tasas reales", d: "O todo nominal, o todo real. Cruzarlos infla el VAN de forma sistemática en proyectos largos, y el error es difícil de detectar porque cada componente parece razonable por separado." },
            { t: "Presentar un único escenario", d: "Un VAN con dos decimales sugiere una precisión que la estimación no tiene. Sin análisis de sensibilidad ni escenarios, la cifra transmite una falsa confianza y oculta cuáles son los supuestos de los que realmente depende la decisión." },
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
            "Los componentes del flujo de caja libre tienen todos su análogo agregado, y uno de los problemas de estimación es literalmente el mismo.",
          ],
          lista: [
            "El **CAPEX** corresponde a la formación bruta de capital fijo (P.51g), y la **variación de NOF** a la variación de existencias (P.52) junto con el crédito comercial (AF.81).",
            "El **NOPAT** guarda relación con el excedente neto de explotación una vez descontados los impuestos sobre la renta, aunque las definiciones no son directamente equiparables.",
            "El problema de separar **inversión de mantenimiento e inversión de expansión** —que en el caso práctico de la ficha 6.08 quedó como pregunta abierta— es exactamente el problema de estimar el consumo de capital fijo. En cuentas nacionales se resuelve estadísticamente con el método del inventario permanente; en una empresa concreta, muchas veces no se resuelve en absoluto y se estima que la inversión de mantenimiento equivale a la amortización, lo cual es una aproximación tosca.",
            "La **capacidad o necesidad de financiación (B.9)** es el análogo sectorial del flujo de caja libre: lo que queda tras invertir, positivo o negativo.",
          ],
          cierre:
            "La diferencia de finalidad se mantiene: el flujo de caja libre se estima **hacia adelante** para decidir, y las cuentas nacionales miden **hacia atrás** para describir. Pero los conceptos y las dificultades de medición son los mismos, y la práctica habitual en valoración —igualar inversión de mantenimiento y amortización— es mucho menos rigurosa que lo que hace un instituto de estadística con la misma pregunta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "BAII 200.000 €, amortización 60.000 €, CAPEX 90.000 €, aumento de NOF 25.000 €, tipo 25 %. ¿FCF?", a: "NOPAT = 150.000 €. FCF = 150.000 + 60.000 − 25.000 − 90.000 = 95.000 €." },
            { q: "La empresa gastó 40.000 € en un estudio de viabilidad. ¿Entra en el análisis?", a: "No. Es un coste hundido: ya se pagó y no cambia por acometer o no el proyecto. Solo cuentan los flujos incrementales, los que difieren entre hacer y no hacer." },
            { q: "El proyecto ocupará una nave propia actualmente alquilada por 30.000 € al año. ¿Cómo se trata?", a: "Como coste de oportunidad: 30.000 € anuales de flujo negativo del proyecto. Que no haya desembolso no significa que sea gratis; se deja de percibir el alquiler." },
            { q: "¿Por qué se suma la amortización después de haber restado el impuesto?", a: "Porque la amortización no es salida de caja pero sí reduce la base imponible. Se resta para calcular el impuesto —generando el escudo fiscal— y después se devuelve, ya que nunca salió dinero." },
            { q: "¿Por qué el FCF de Arlanza (−23.000 €) difiere del calculado en la ficha 6.08 (−32.000 €)?", a: "Porque el estado de flujos parte del resultado ya apalancado, con intereses pagados y su escudo fiscal incorporado. El FCF los excluye: 12.000 € de intereses menos 3.000 € de ahorro fiscal explican los 9.000 € de diferencia." },
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
              q: "Una empresa ha gastado 200.000 € en un estudio de viabilidad. ¿Deben incluirse en los flujos del proyecto?",
              opciones: [
                "Sí: son un desembolso real atribuible al proyecto",
                "No: son coste hundido, irrecuperable y ajeno a la decisión de acometer o no el proyecto",
                "Sí, repartidos a lo largo de la vida del proyecto",
                "No, salvo que el estudio pueda venderse a un tercero",
              ],
              correcta: 1,
              porque: [
                "Son reales y ya están gastados: no cambian por decidir en un sentido o en otro, y los flujos relevantes son los incrementales.",
                "Incluirlo lleva tanto a rechazar proyectos buenos —porque el estudio los hace parecer caros— como a persistir en malos para «no perder lo invertido».",
                "Repartirlo no lo convierte en incremental: sigue siendo dinero que ya salió pase lo que pase.",
                "Ese es justamente el matiz correcto: si el estudio tiene valor de venta, ese valor es un coste de oportunidad de usarlo, no el importe gastado.",
              ],
            },
            {
              q: "El proyecto usará una nave que la empresa ya tiene vacía y en propiedad. ¿Qué coste se imputa?",
              opciones: [
                "Ninguno: la nave ya es de la empresa y no supone desembolso",
                "El coste de oportunidad: lo que la nave rendiría en su mejor uso alternativo, por ejemplo alquilada",
                "Su valor contable neto, repartido entre los años del proyecto",
                "Su precio de adquisición actualizado por inflación",
              ],
              correcta: 1,
              porque: [
                "Usar un activo propio no es gratis: el proyecto consume una capacidad que podría destinarse a otra cosa.",
                "Y no solo con naves: terrenos, marcas y tiempo de directivos son los casos habituales, y todos se olvidan por la misma razón, que no generan factura.",
                "El valor contable es un dato histórico que no dice nada sobre lo que la nave puede rendir hoy.",
                "El precio de compra actualizado tampoco mide el rendimiento alternativo, que es lo único relevante.",
              ],
            },
            {
              q: "¿Por qué no deben restarse los intereses de los flujos de caja del proyecto?",
              opciones: [
                "Porque los intereses no son un gasto deducible del proyecto",
                "Porque el coste de la financiación ya está en la tasa de descuento, y restarlo también del numerador lo cuenta dos veces",
                "Porque los intereses corresponden a la empresa y no al proyecto",
                "Porque su importe es imposible de estimar antes de contratar la financiación",
              ],
              correcta: 1,
              porque: [
                "Son deducibles fiscalmente, y ese efecto se recoge por otra vía: en la tasa, mediante el WACC después de impuestos.",
                "Descontar es precisamente la operación que penaliza el flujo por el coste del dinero. Hacerlo dos veces hunde el VAN de forma artificial.",
                "El proyecto se financia como el resto de la empresa; el motivo de excluirlos no es de atribución sino de doble cómputo.",
                "Suelen ser perfectamente estimables. El problema no es medirlos sino dónde colocarlos.",
              ],
            },
            {
              q: "En una valoración, el valor residual supone dos tercios del total. ¿Qué conviene hacer?",
              opciones: [
                "Nada: es habitual en negocios en crecimiento y confirma su potencial",
                "Comprobar los supuestos: la valoración no descansa en los flujos proyectados sino en dos parámetros de una fórmula",
                "Eliminar el valor residual y quedarse solo con el período explícito",
                "Alargar el período explícito hasta que el residual baje del 10 %",
              ],
              correcta: 1,
              porque: [
                "Es habitual, y precisamente por eso conviene mirarlo: lo frecuente no es lo mismo que lo fundado.",
                "Todo el peso recae sobre la g de crecimiento perpetuo y la tasa de descuento. Con una g superior al crecimiento nominal de la economía, el negocio acabaría siendo mayor que el PIB.",
                "Eliminarlo infravalora el negocio: un proyecto no deja de generar flujos al terminar el horizonte de proyección.",
                "Alargar el período explícito solo traslada el problema: los años lejanos se proyectan con supuestos aún más frágiles.",
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
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "el capítulo de estimación de flujos, con el tratamiento sistemático de incrementales, hundidos y oportunidad." },
            { ref: "Damodaran, Valuation", nota: "la referencia sobre flujos de caja libres, valor residual y los sesgos habituales en su estimación. Su web incluye hojas de cálculo y datos sectoriales." },
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "el análisis de sensibilidad y de escenarios, y el tratamiento de la inflación en los flujos." },
          ],
        },
      ],
    },
  ],
};
