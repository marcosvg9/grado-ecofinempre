/* Ficha 5.07 — Instrumentos financieros: activos y pasivos. */

const CUENTAS = {
  "572": { n: "Bancos, c/c a la vista", tipo: "A" },
  "251": { n: "Valores representativos de deuda a largo plazo", tipo: "A" },
  "100": { n: "Capital social", tipo: "PN" },
  "761": { n: "Ingresos de valores representativos de deuda", tipo: "I" },
};

const OPERACIONES = [
  { fecha: "Año 0", texto: "Constitución: los socios aportan 12.000 € en efectivo.", porque: "Punto de partida para que el balance quede completo.", lineas: [["572", 12000, 0], ["100", 0, 12000]] },
  { fecha: "Año 0", texto: "Compra de obligaciones de nominal 10.000 € por 9.500 €, más 100 € de comisión. Cupón anual del 4 % y reembolso al nominal dentro de tres años.", porque: "Los costes de transacción se incorporan al valor inicial porque el activo se va a llevar a coste amortizado. Si fuera a valor razonable con cambios en resultados, irían directos a gasto.", lineas: [["251", 9600, 0], ["572", 0, 9600]] },
  { fecha: "Año 1", texto: "Devengo del interés efectivo (526 €) y cobro del cupón (400 €).", porque: "El ingreso financiero no es el cupón: es el rendimiento real del 5,48 %. La diferencia de 126 € engorda el valor del activo.", lineas: [["572", 400, 0], ["251", 126, 0], ["761", 0, 526]] },
  { fecha: "Año 2", texto: "Devengo del interés efectivo (533 €) y cobro del cupón (400 €).", porque: "El interés crece cada año porque se calcula sobre un valor contable que va aumentando.", lineas: [["572", 400, 0], ["251", 133, 0], ["761", 0, 533]] },
  { fecha: "Año 3", texto: "Devengo del interés efectivo (541 €) y cobro del cupón (400 €).", porque: "Tras este asiento el valor contable del activo es exactamente el nominal de reembolso.", lineas: [["572", 400, 0], ["251", 141, 0], ["761", 0, 541]] },
  { fecha: "Año 3", texto: "Reembolso de las obligaciones por su nominal, 10.000 €.", porque: "La cuenta 251 queda a cero sin generar ningún resultado en el momento del reembolso: toda la ganancia se ha ido reconociendo año a año.", lineas: [["572", 10000, 0], ["251", 0, 10000]] },
];

export default {
  codigo: "5.07",
  titulo: "Instrumentos financieros: activos y pasivos",
  nivel: 3,
  bloque: "Contabilidad financiera",
  tiempo: "6 h",
  nucleo:
    "La clasificación inicial lo decide todo: determina si el instrumento se valora por coste amortizado o por valor razonable, y si sus variaciones de valor pasan por la cuenta de resultados, por el patrimonio neto o por ninguno de los dos. Es la norma más larga del PGC y la que más cambió en 2021.",
  requiere: "5.04 Criterios de valoración · 7.01 Valor temporal del dinero",
  abre: "8.02 Renta fija · 8.08 Derivados · 7.05 Coste de capital",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un instrumento financiero es un contrato que da lugar a un activo financiero en una empresa y, simultáneamente, a un pasivo financiero o a un instrumento de patrimonio en otra. La definición es simétrica a propósito: lo que para el prestamista es un crédito, para el prestatario es una deuda, y el PGC quiere que ambos lo midan de forma coherente.",
            "La reforma del **RD 1/2021** reescribió la norma de registro y valoración 9.ª para acercarla a la NIIF 9. El cambio de fondo fue sustituir una clasificación basada en la **intención** de la empresa por otra basada en dos pruebas objetivas: el **modelo de negocio** con el que se gestiona el activo y las **características de sus flujos contractuales**. Si los flujos son únicamente cobros de principal e intereses y el activo se mantiene para percibirlos, va a coste amortizado. Si además se contempla venderlo, valor razonable con cambios en patrimonio neto. Y si no cumple ninguna de las dos cosas, valor razonable con cambios en resultados, que actúa como categoría residual.",
            "El **coste amortizado** es el concepto técnico central y merece atención. No es el precio pagado: es el valor inicial ajustado por la amortización de la diferencia entre ese precio y el importe de reembolso, calculada mediante el **tipo de interés efectivo**. La consecuencia práctica es que el ingreso financiero de cada período no coincide con el cupón cobrado, sino que refleja el rendimiento real de la inversión. Una obligación comprada bajo par rinde más que su cupón, y el sistema lo reparte en el tiempo en lugar de reconocerlo de golpe al vencimiento.",
            "En el **pasivo** la estructura es mucho más simple: casi todo va a coste amortizado, y solo los pasivos mantenidos para negociar o designados expresamente se llevan a valor razonable con cambios en resultados. Un préstamo con comisión de apertura, por ejemplo, no se registra por el nominal recibido sino neto de esa comisión, que se va imputando como mayor gasto financiero a lo largo de la vida del préstamo. Es el mismo mecanismo del tipo de interés efectivo, visto desde el otro lado.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Cartera de activos financieros", "Cuándo aplica", "Dónde van los cambios de valor"],
          filas: [
            { nom: "Coste amortizado", sub: "Modelo de negocio: mantener para percibir flujos contractuales", cols: ["Flujos que son solo principal e intereses", "No hay: se devenga interés efectivo"] },
            { nom: "Valor razonable con cambios en PN", sub: "Modelo mixto: percibir flujos y también vender", cols: ["Flujos que son solo principal e intereses", "Patrimonio neto (reciclan a resultados al vender)"] },
            { nom: "Valor razonable con cambios en PyG", sub: "Categoría residual, incluye lo mantenido para negociar", cols: ["Todo lo demás", "Cuenta de pérdidas y ganancias"] },
            { nom: "Coste", sub: "Grupo, multigrupo y asociadas; y patrimonio sin valor razonable fiable", cols: ["Instrumentos de patrimonio", "No hay: solo deterioro"] },
          ],
          nota: "Existe además una **opción irrevocable** para los instrumentos de patrimonio no mantenidos para negociar: designarlos a valor razonable con cambios en patrimonio neto. En ese caso los cambios **no reciclan** nunca a la cuenta de resultados; al dar de baja el activo pasan directamente a reservas.",
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
            { nom: "Tipo de interés efectivo", sub: "La TIR del instrumento, incluidos costes de transacción.", cols: ["Valor inicial $= \\sum_t \\dfrac{\\text{Flujos}_t}{(1+\\mathrm{TIE})^t}$"] },
            { nom: "Coste amortizado", sub: "El valor por el que figura en el balance en cada fecha.", cols: ["$\\mathrm{CA}_t = \\mathrm{CA}_{t-1}(1 + \\mathrm{TIE}) - \\text{Flujo cobrado}_t$"] },
            { nom: "Ingreso financiero del período", sub: "Se devenga sobre el saldo vivo, no sobre el nominal.", cols: ["$\\text{Ingreso}_t = \\mathrm{CA}_{t-1} \\cdot \\mathrm{TIE}$"] },
            { nom: "Valoración inicial", sub: "Los costes de transacción solo se capitalizan fuera de la cartera de valor razonable con cambios en PyG.", cols: ["$\\mathrm{VI} =$ Valor razonable de la contraprestación $\\pm$ costes de transacción"] },
            { nom: "Deterioro a coste amortizado", sub: "Comparación con el valor actual de los flujos que se espera cobrar.", cols: ["Deterioro = CA − VA(flujos esperados; TIE original)"] },
          ],
          nota: "En el descuento del deterioro se usa el **tipo de interés efectivo original**, no el de mercado en la fecha del test. Es una decisión deliberada: se quiere aislar el deterioro crediticio de los movimientos generales de tipos.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una obligación comprada bajo par",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Se compran obligaciones de nominal 10.000 € por 9.500 €, con 100 € de comisión. Pagan un cupón del 4 % anual sobre el nominal —400 € al año— y se reembolsan al nominal a los tres años. Valor inicial: **9.600 €**. Resolviendo la ecuación del tipo de interés efectivo se obtiene un **5,48 %**, muy por encima del 4 % del cupón, porque el descuento de compra también es rendimiento.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Valor inicial", "Interés al 5,48 %", "Cupón cobrado", "Valor final"],
          filas: [
            ["1", "9.600 €", "526 €", "400 €", "9.726 €"],
            ["2", "9.726 €", "533 €", "400 €", "9.859 €"],
            ["3", "9.859 €", "541 €", "400 €", "10.000 €"],
            { celdas: ["Total", "—", "1.600 €", "1.200 €", "—"], clase: "total" },
          ],
          nota: "Comprobación: se pagaron 9.600 € y se recibieron 1.200 € de cupones más 10.000 € de reembolso, es decir 11.200 €. La ganancia total es de **1.600 €**, exactamente la suma de los intereses devengados. El sistema no crea ni destruye rendimiento: solo decide en qué ejercicio se reconoce.",
        },
        {
          tipo: "parrafos",
          items: [
            "Compara este reparto con la alternativa ingenua de registrar 400 € de ingreso al año y 400 € de beneficio de golpe al vencimiento. Los importes totales coinciden, pero el perfil temporal es distinto y, sobre todo, la segunda versión no informa del rendimiento real de la inversión en ningún momento. Si el mismo activo estuviera en la cartera de **valor razonable con cambios en resultados**, el resultado anual oscilaría con el precio de mercado del bono y podría ser negativo en un año de subida de tipos aunque el emisor pagara puntualmente.",
          ],
        },
      ],
    },
    {
      titulo: "El ciclo completo en asientos",
      contenido: [
        {
          tipo: "diario",
          cuentas: CUENTAS,
          operaciones: OPERACIONES,
          cierre:
            "Observa el asiento del año 1: tiene **tres líneas**, no dos. Entran 400 € en el banco, el activo crece 126 € y el ingreso reconocido es de 526 €. El reembolso final no genera resultado alguno, porque toda la ganancia se anticipó ejercicio a ejercicio. Eso es exactamente lo que persigue el coste amortizado.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el préstamo con comisión de apertura",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa firma un préstamo de 500.000 € a cinco años con un tipo nominal del 3 % y una comisión de apertura del 1 %, es decir 5.000 € que el banco retiene en el momento de la disposición. La empresa recibe 495.000 € y devolverá 500.000 € más los intereses del 3 % sobre el nominal.",
            "El registro intuitivo —deuda de 500.000 € y gasto inmediato de 5.000 €— es incorrecto. El pasivo se reconoce por **495.000 €** y el tipo de interés efectivo resulta algo superior al 3 %, de forma que la comisión se va imputando como mayor gasto financiero a lo largo de los cinco años. La deuda contable crece progresivamente hasta alcanzar los 500.000 € en el vencimiento.",
            "**Por qué importa:** el coste real de la financiación no es el tipo nominal que aparece en el contrato. Comisiones de apertura, de estudio, de no disponibilidad y gastos de formalización elevan el coste efectivo, a veces de forma considerable en préstamos cortos. El tipo de interés efectivo es la traducción contable de la TAE, y es la cifra con la que hay que comparar ofertas de financiación.",
            "**Conexión con el bloque 7:** este mismo cálculo reaparece en 7.05 al estimar el coste de la deuda para el WACC. Usar el tipo nominal en lugar del efectivo infravalora el coste de capital y, en consecuencia, sobrevalora cualquier proyecto de inversión.",
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
            { t: "Registrar el ingreso financiero por el cupón cobrado", d: "El cupón es un flujo de caja, no el ingreso devengado. En un activo a coste amortizado el ingreso es el valor contable por el tipo de interés efectivo. Coinciden solo si el instrumento se compró exactamente a la par y sin costes de transacción, que es el caso menos frecuente." },
            { t: "Llevar los costes de transacción a gasto siempre", d: "Depende de la cartera. En los activos y pasivos a coste amortizado y en los de valor razonable con cambios en patrimonio neto, se incorporan al valor inicial. Solo en la cartera de valor razonable con cambios en resultados van directos a la cuenta de pérdidas y ganancias." },
            { t: "Clasificar por intención en lugar de por modelo de negocio", d: "Es el criterio anterior a la reforma de 2021, y sigue apareciendo en manuales. Hoy la clasificación depende de cómo se gestiona objetivamente el conjunto de activos y de si los flujos contractuales son solo principal e intereses. La intención declarada del gestor ya no basta." },
            { t: "Reciclar a resultados lo que no recicla", d: "Los cambios de valor de los instrumentos de patrimonio designados irrevocablemente a valor razonable con cambios en patrimonio neto **nunca** pasan por la cuenta de resultados: al vender, van directamente a reservas. Los de los instrumentos de deuda en esa misma cartera, en cambio, sí reciclan." },
            { t: "Descontar el deterioro al tipo de mercado actual", d: "Se usa el tipo de interés efectivo original. Emplear el tipo vigente mezclaría el deterioro por riesgo de crédito con el efecto de los movimientos generales de tipos de interés, que es justo lo que se quiere evitar." },
            { t: "Dar por hecho que el PGC copia la NIIF 9", d: "Se acercó mucho, pero no del todo. La diferencia más relevante es el deterioro: el PGC mantiene un enfoque basado en la existencia de evidencia objetiva de pérdida, mientras que la NIIF 9 aplica un modelo de **pérdida esperada** que obliga a dotar desde el reconocimiento inicial. En grupos que consolidan bajo NIIF esto genera dos cifras distintas para lo mismo." },
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
            "El SEC 2010 dedica a los instrumentos financieros toda su cuenta financiera, con una clasificación propia que conviene no confundir con las carteras del PGC.",
          ],
          lista: [
            "La clasificación del SEC es por **instrumento** (AF.1 efectivo y depósitos, AF.3 valores representativos de deuda, AF.4 préstamos, AF.5 participaciones en el capital, AF.6 seguros y pensiones, AF.7 derivados, AF.8 otras cuentas), no por modelo de negocio del tenedor.",
            "Todos los activos financieros se valoran **a precios de mercado corrientes**. No existe el coste amortizado como criterio de balance: los valores representativos de deuda figuran por su cotización, no por su valor amortizado.",
            "Los **préstamos** son la excepción notable: se registran por su valor nominal pendiente, tanto en el activo del acreedor como en el pasivo del deudor, precisamente porque no hay mercado que dé precio.",
            "La diferencia entre el interés devengado y el flujo de caja también existe aquí: los **intereses (D.41)** se registran por devengo, y su contrapartida no cobrada incrementa el instrumento correspondiente. Es el mismo mecanismo del asiento de tres líneas del ejemplo.",
            "El principio de **simetría** es mucho más estricto que en el PGC: el activo de un sector tiene que ser exactamente el pasivo de otro, y las discrepancias entre ambas mediciones son un indicador de calidad de las cuentas financieras.",
          ],
          cierre:
            "Si trabajas con cuentas financieras trimestrales, la intuición útil es que el PGC te da la visión del tenedor —qué piensa hacer con el instrumento— y el SEC te da la visión del instrumento en sí, idéntica para todos los que lo poseen.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un bono se compra por 9.600 € y se reembolsará por 10.000 €. ¿Cuándo se reconoce esa diferencia de 400 €?", a: "Repartida a lo largo de la vida del instrumento, mediante el tipo de interés efectivo, no de golpe en el vencimiento. Cada año el valor contable del activo crece un poco y ese incremento forma parte del ingreso financiero." },
            { q: "¿Qué dos pruebas determinan la cartera de un activo financiero tras la reforma de 2021?", a: "El modelo de negocio con el que se gestiona y si sus flujos contractuales son únicamente cobros de principal e intereses. Ambas deben cumplirse para ir a coste amortizado." },
            { q: "Una empresa recibe 495.000 € de un préstamo de 500.000 € nominales. ¿Por cuánto reconoce el pasivo?", a: "Por 495.000 €. La comisión retenida no es gasto inmediato: eleva el tipo de interés efectivo y se imputa como mayor gasto financiero durante la vida del préstamo, mientras la deuda contable crece hasta el nominal." },
            { q: "¿En qué se diferencia el deterioro del PGC del de la NIIF 9?", a: "El PGC exige evidencia objetiva de que la pérdida se ha producido; la NIIF 9 aplica un modelo de pérdida esperada que obliga a dotar desde el reconocimiento inicial. Un grupo que consolida bajo NIIF puede tener dos cifras distintas para la misma cartera." },
            { q: "¿Por qué los préstamos se valoran a nominal en contabilidad nacional y los bonos a precio de mercado?", a: "Porque los bonos cotizan y hay un precio observable, mientras que los préstamos no tienen mercado que les dé precio. Es la misma lógica de fiabilidad de la medición que ordena las carteras del PGC, aplicada a otro nivel." },
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
            { ref: "PGC, norma de registro y valoración 9.ª, en su redacción tras el RD 1/2021", nota: "asegúrate de leer la versión consolidada: las anteriores clasifican por intención y están derogadas." },
            { ref: "Resolución del ICAC de 10 de febrero de 2021", nota: "desarrolla el reconocimiento de ingresos y aclara varios puntos de la reforma." },
            { ref: "Wanden-Berghe, Contabilidad financiera", nota: "el capítulo de instrumentos financieros con cuadros de coste amortizado resueltos." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 5 y 7", nota: "operaciones financieras y balances financieros, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
