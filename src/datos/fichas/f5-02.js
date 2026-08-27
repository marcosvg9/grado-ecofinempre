/* Ficha 5.02 — La partida doble y el ciclo contable.
   Plantilla de referencia: copia este archivo para crear una nueva. */

const CUENTAS = {
  "572": { n: "Bancos, c/c a la vista", tipo: "A" },
  "213": { n: "Maquinaria", tipo: "A" },
  "281": { n: "Amortización acumulada del inmovilizado material", tipo: "AC" },
  "300": { n: "Mercaderías", tipo: "A" },
  "430": { n: "Clientes", tipo: "A" },
  "100": { n: "Capital social", tipo: "PN" },
  "170": { n: "Deudas a largo plazo con entidades de crédito", tipo: "P" },
  "400": { n: "Proveedores", tipo: "P" },
  "600": { n: "Compras de mercaderías", tipo: "G" },
  "610": { n: "Variación de existencias de mercaderías", tipo: "G" },
  "640": { n: "Sueldos y salarios", tipo: "G" },
  "681": { n: "Amortización del inmovilizado material", tipo: "G" },
  "700": { n: "Ventas de mercaderías", tipo: "I" },
};

const OPERACIONES = [
  { fecha: "02 ene", texto: "Los socios constituyen la sociedad y aportan 60.000 € en efectivo, que ingresan en la cuenta bancaria.", porque: "Entra dinero (aumenta un activo) y nace una obligación frente a los socios (aumenta el patrimonio neto).", lineas: [["572", 60000, 0], ["100", 0, 60000]] },
  { fecha: "10 ene", texto: "Compra de una máquina por 30.000 €, pagada por banco.", porque: "No es un gasto: se cambia un activo por otro. La máquina se consumirá a lo largo de varios años.", lineas: [["213", 30000, 0], ["572", 0, 30000]] },
  { fecha: "15 ene", texto: "El banco concede un préstamo de 20.000 € a cinco años, abonado en cuenta.", porque: "Aumenta el activo y aumenta la deuda en la misma cuantía. El patrimonio neto no se mueve.", lineas: [["572", 20000, 0], ["170", 0, 20000]] },
  { fecha: "03 feb", texto: "Compra de mercaderías por 12.000 €, con pago aplazado a 60 días.", porque: "El gasto se reconoce al comprar, no al pagar. Frente a él aparece una deuda comercial.", lineas: [["600", 12000, 0], ["400", 0, 12000]] },
  { fecha: "20 mar", texto: "Venta de mercaderías por 18.000 €, cobro aplazado.", porque: "El ingreso se reconoce al entregar la mercancía. El derecho de cobro es un activo.", lineas: [["430", 18000, 0], ["700", 0, 18000]] },
  { fecha: "30 jun", texto: "Pago de nóminas del personal por 5.000 €, mediante transferencia.", porque: "Aquí gasto y pago coinciden en el tiempo, pero son dos hechos distintos que casualmente se solapan.", lineas: [["640", 5000, 0], ["572", 0, 5000]] },
  { fecha: "31 dic", texto: "Ajuste de cierre: amortización de la maquinaria del ejercicio, 3.000 €.", porque: "Reparte el coste ya pagado de la máquina entre los años en que se usa. No sale ni un euro de la caja.", ajuste: true, lineas: [["681", 3000, 0], ["281", 0, 3000]] },
  { fecha: "31 dic", texto: "Ajuste de cierre: quedan 3.000 € de mercaderías en almacén sin vender.", porque: "Lo comprado y no vendido no es gasto del año: se activa y corrige a la baja el consumo del ejercicio.", ajuste: true, lineas: [["300", 3000, 0], ["610", 0, 3000]] },
];

export default {
  codigo: "5.02",
  titulo: "La partida doble y el ciclo contable",
  nivel: 1,
  bloque: "Contabilidad financiera",
  tiempo: "4 h",
  nucleo:
    "Todo hecho económico tiene un origen y un destino, así que se anota dos veces por el mismo importe. De ahí sale un sistema que no puede descuadrar y que, al cerrarse, produce por construcción el balance y la cuenta de resultados.",
  requiere: "5.01 Patrimonio y ecuación fundamental",
  abre: "5.03 PGC · 5.05 Existencias · 5.06 Inmovilizado · 6.06 Análisis de estados",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La partida doble no es una convención burocrática: es la consecuencia lógica de una identidad. Si el activo de una empresa es siempre igual a la suma de lo que debe y lo que es suyo, entonces cualquier anotación que altere un lado de la igualdad tiene que alterar el otro para que siga siendo cierta. Registrar dos veces cada hecho no es duplicar trabajo, es **mantener un invariante**.",
            "El vocabulario despista más que el concepto. **Cargar** una cuenta significa anotar en su lado izquierdo, el debe; **abonar**, en el derecho, el haber. Son posiciones en una tabla, no juicios de valor. Lo único que hay que memorizar es qué familias de cuentas aumentan por cada lado, y esa regla se deduce de la ecuación patrimonial en lugar de aprenderse de memoria: lo que está a la izquierda de la igualdad (el activo) crece por la izquierda, y lo que está a la derecha (pasivo y neto) crece por la derecha.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Familia de cuenta", "Aumenta por", "Disminuye por"],
          filas: [
            { nom: "Activo", sub: "Lo que la empresa tiene o le deben", cols: ["Debe", "Haber"] },
            { nom: "Pasivo", sub: "Lo que la empresa debe a terceros", cols: ["Haber", "Debe"] },
            { nom: "Patrimonio neto", sub: "Lo que es de los socios", cols: ["Haber", "Debe"] },
            { nom: "Gasto", sub: "Consumo de recursos del período", cols: ["Debe", "Haber"] },
            { nom: "Ingreso", sub: "Generación de recursos del período", cols: ["Haber", "Debe"] },
          ],
          nota: "Las cinco familias caben en una tarjeta. Si dudas del lado de una cuenta, pregúntate a qué lado de la ecuación pertenece.",
        },
        {
          tipo: "parrafos",
          items: [
            "El **ciclo contable** es el recorrido anual que convierte una lista desordenada de hechos en cinco documentos formales. Los pasos importan porque cada uno filtra un tipo distinto de error, y porque los ajustes de cierre son donde la contabilidad deja de ser mecánica y empieza a exigir criterio.",
          ],
        },
        {
          tipo: "pasos",
          items: [
            ["Apertura", "Se abre el ejercicio con los saldos de cierre del anterior."],
            ["Libro diario", "Cada hecho económico se anota como asiento, en orden cronológico."],
            ["Libro mayor", "Los asientos se trasladan a cada cuenta, para ver su saldo."],
            ["Balance de comprobación", "Se verifica que sumas y saldos cuadran. Detecta errores de anotación, no de criterio."],
            ["Ajustes de cierre", "Amortizaciones, existencias, periodificaciones, deterioros e impuesto."],
            ["Regularización", "Gastos e ingresos se cancelan contra la cuenta de resultado del ejercicio."],
            ["Cierre y cuentas anuales", "Se cierran las cuentas y se formulan balance, PyG, ECPN, EFE y memoria."],
          ],
        },
      ],
    },
    {
      titulo: "Formalización",
      contenido: [
        { tipo: "parrafos", items: ["Cinco expresiones sostienen todo el sistema."] },
        {
          tipo: "rejilla",
          modo: "dos",
          filas: [
            { nom: "Ecuación patrimonial", sub: "El invariante. Se cumple en todo momento, no solo al cierre.", cols: ["Activo = Pasivo + Patrimonio neto"] },
            { nom: "Invariante de la partida doble", sub: "Se cumple asiento a asiento y, por tanto, también en el acumulado.", cols: ["$\\sum \\text{Debe} = \\sum \\text{Haber}$"] },
            { nom: "Resultado del ejercicio", sub: "Grupo 7 menos grupo 6. Aún no está en el balance hasta la regularización.", cols: ["Resultado = Ingresos − Gastos"] },
            { nom: "Variación del neto", sub: "El resultado explica el neto solo si no ha habido movimientos con los socios.", cols: ["$\\Delta\\mathrm{PN} = \\text{Resultado} + \\text{Aportaciones} - \\text{Distribuciones}$"] },
            { nom: "Saldo de una cuenta", sub: "Positivo se llama deudor; negativo, acreedor.", cols: ["Saldo $= \\sum \\text{cargos} - \\sum \\text{abonos}$"] },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "Combinando la primera y la tercera se obtiene la razón de que el sistema funcione: si el activo menos el pasivo es el neto, y el neto crece exactamente en el resultado, entonces el balance y la cuenta de pérdidas y ganancias no son dos documentos independientes sino **dos proyecciones del mismo registro**.",
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico, paso a paso",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Talleres Duero, S.L. desde su constitución hasta el cierre del primer ejercicio. Ocho operaciones, incluidos los dos ajustes de diciembre. Registra una a una y observa que la balanza nunca se inclina y que la ecuación patrimonial se sostiene sola.",
          ],
        },
        {
          tipo: "diario",
          cuentas: CUENTAS,
          operaciones: OPERACIONES,
          cierre:
            "Fíjate en el desenlace: la empresa gana **1.000 €** mientras su banco crece en **45.000 €**. Ni una sola de las dos cifras es errónea, y ninguna de las dos cuenta la historia completa. Ese desajuste es la razón de que exista un estado de flujos de efectivo separado de la cuenta de resultados.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la empresa rentable que se queda sin caja",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una distribuidora crece un 40 % al año. Cobra a sus clientes a 90 días y paga a sus proveedores a 30. Cada euro adicional de ventas obliga a financiar dos meses de desfase. Su cuenta de resultados es magnífica y su tesorería se vacía mes a mes hasta que un proveedor deja de servir.",
            "Contablemente no hay nada anómalo: el ingreso se devengó al vender y el activo «Clientes» crece igual que crecerían las existencias o la maquinaria. El error no está en el registro, está en leer el beneficio como si fuera dinero disponible.",
            "**Qué mirar en un caso así:** el período medio de cobro frente al de pago, la evolución del fondo de maniobra y el flujo de efectivo de explotación. Si el beneficio sube durante varios ejercicios y el flujo operativo no lo acompaña, la diferencia se está acumulando en algún activo circulante que quizá nunca se convierta en caja.",
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
            { t: "Leer «debe» como algo malo y «haber» como algo bueno", d: "Son nombres de posición, herencia del latín «debet» y «habet» en las cuentas personales del siglo XV. No valoran nada. La caja aumenta por el debe y una deuda aumenta por el haber; ninguna de las dos cosas es intrínsecamente positiva o negativa." },
            { t: "Creer que si el asiento cuadra, está bien", d: "El cuadre solo prueba consistencia aritmética. Registrar la compra de una máquina como gasto de suministros cuadra perfectamente y deforma por completo el resultado y el balance. El balance de comprobación no detecta errores de criterio ni de cuenta." },
            { t: "Confundir cobro con ingreso y pago con gasto", d: "Es el error de fondo más caro. El principio de devengo imputa ingresos y gastos cuando ocurre la corriente real de bienes y servicios, no cuando se mueve el dinero. Una empresa puede tener beneficio y quedarse sin caja el mismo mes." },
            { t: "Tratar la compra de un activo como gasto del período", d: "Comprar una máquina no empobrece a la empresa: cambia la composición de su activo. Lo que sí es gasto es la amortización, que reparte ese coste entre los ejercicios en que la máquina genera ingresos." },
            { t: "Pensar que la amortización es una salida de dinero", d: "No hay pago asociado. Es un reparto contable de un desembolso ya realizado. Por eso el estado de flujos de efectivo la suma de vuelta al partir del resultado." },
            { t: "Equivocar el signo de la variación de existencias", d: "Las existencias finales se abonan a la cuenta 610, lo que reduce el gasto del ejercicio. Las iniciales se cargan, aumentándolo. Invertir el signo desplaza el resultado en el doble del importe." },
            { t: "Buscar el resultado en el balance antes del cierre", d: "Durante el ejercicio el resultado no existe como cuenta: está repartido entre los grupos 6 y 7. Solo aparece en el patrimonio neto tras la regularización." },
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
            "El SEC 2010 no es un sistema distinto: es la partida doble aplicada a sectores institucionales en lugar de a empresas. Las correspondencias son casi literales.",
          ],
          lista: [
            "**Debe y haber** pasan a llamarse **empleos y recursos**.",
            "Donde la empresa tiene un asiento con dos anotaciones, las cuentas nacionales tienen **cuatro**: cada transacción se registra dos veces en cada uno de los dos sectores implicados.",
            "El **saldo** de una cuenta no se archiva: es la primera partida de la cuenta siguiente. El valor añadido bruto abre la cuenta de explotación, el excedente abre la de renta, y así hasta la capacidad o necesidad de financiación.",
            "El equivalente al cuadre del balance de comprobación es que la suma de los saldos de financiación de todos los sectores compense exactamente al del resto del mundo.",
          ],
          cierre:
            "Las diferencias reales aparecen más tarde: valoración a precios de mercado, tratamiento del consumo de capital fijo y frontera de la producción. Ninguna afecta a la mecánica de registro.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Una empresa cobra hoy 5.000 € de una venta que hizo el trimestre pasado. ¿Cuánto varía su resultado?", a: "Cero. El ingreso ya se reconoció al vender. Hoy solo se sustituye un activo (Clientes) por otro (Bancos). Es el caso más limpio de devengo frente a caja." },
            { q: "¿Puede aumentar el activo sin que varíe el patrimonio neto?", a: "Sí, siempre que aumente el pasivo en la misma cuantía. Pedir un préstamo es el ejemplo canónico: activo y deuda crecen a la vez y la riqueza propia no se mueve." },
            { q: "$\\sum \\text{Debe} = \\sum \\text{Haber}$ se cumple siempre. ¿Qué garantiza exactamente?", a: "Solo que cada anotación tiene su contrapartida por el mismo importe. No garantiza que la cuenta elegida sea la correcta, ni que el importe sea el correcto, ni que el hecho corresponda a este ejercicio." },
            { q: "Si la amortización no supone pago, ¿por qué reduce el beneficio?", a: "Porque el beneficio mide el consumo de recursos del período, no los movimientos de tesorería. La máquina se está gastando aunque se pagara hace años." },
            { q: "En el ejemplo, el resultado es 1.000 € y la caja ha crecido 45.000 €. ¿Cómo se concilia?", a: "La caja recoge los 60.000 € de aportación y los 20.000 € de préstamo, que no son ingresos, y no recoge los 18.000 € pendientes de cobro ni los 12.000 € pendientes de pago. Resultado y tesorería miden cosas distintas." },
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
            { ref: "Muñoz Merchante, Fundamentos de contabilidad", nota: "el desarrollo más didáctico del ciclo completo, con ejercicios resueltos. Por aquí si empiezas de cero." },
            { ref: "RD 1514/2007, Plan General de Contabilidad", nota: "la fuente primaria. Lee la primera parte, el marco conceptual: son quince páginas y explican el porqué de todo lo demás." },
            { ref: "Omeñaca, Contabilidad general", nota: "el recetario de asientos. Útil como consulta cuando dudes de una operación concreta." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 1", nota: "para el puente con la sección 06." },
          ],
        },
      ],
    },
  ],
};
