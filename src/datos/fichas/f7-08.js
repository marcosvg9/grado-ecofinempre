/* Ficha 7.08 — Gestion del circulante y necesidades operativas de fondos.
   Cierra el caso Distribuciones Arlanza con la identidad NOF - FM. */

export default {
  codigo: "7.08",
  titulo: "Gestión del circulante y necesidades operativas de fondos",
  nivel: 2,
  bloque: "Finanzas corporativas",
  tiempo: "4 h",
  nucleo:
    "Las necesidades operativas de fondos son una inversión permanente disfrazada de activo corriente. Si superan al fondo de maniobra, la diferencia hay que financiarla con crédito negociado, y esa brecha crece de forma mecánica con las ventas.",
  requiere: "6.06 Análisis patrimonial · 7.04 Flujos de caja libres",
  abre: "7.09 Valoración de empresas · 9.09 Operaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La distinción entre **necesidades operativas de fondos** y **fondo de maniobra** es la aportación conceptual más útil de las finanzas operativas, y se pierde constantemente porque ambos se calculan con las mismas partidas del balance. Las NOF son lo que el negocio **necesita**: la inversión neta que exige el ciclo de explotación. El fondo de maniobra es lo que la estructura financiera **proporciona**: los recursos permanentes que sobran tras financiar el activo no corriente.",
            "La diferencia entre ambos no es un residuo contable, es la **necesidad de recursos negociados a corto plazo**: pólizas de crédito, descuento comercial, factoring. Si las NOF superan al fondo de maniobra, la empresa depende de que su banco le renueve esa financiación cada año. Si el fondo de maniobra supera a las NOF, la empresa tiene excedente de tesorería.",
            "El rasgo que hace peligrosas a las NOF es que **son permanentes aunque figuren en el activo corriente**. Cada existencia concreta se vende y cada factura concreta se cobra, pero el nivel agregado no baja nunca mientras el negocio funcione: al vender una unidad se repone otra, al cobrar una factura se emite otra. Contablemente son circulante; financieramente son inversión estructural, y por eso financiarlas con crédito renovable a corto es una fragilidad, no una optimización.",
            "Las NOF dependen de dos factores: el **volumen** de actividad y el **ciclo de caja** de la ficha 6.06. Para un ciclo dado, crecen proporcionalmente a las ventas. Esa proporcionalidad es la aritmética que hace que crecer consuma dinero, y la razón de que empresas rentables en expansión rápida tengan problemas de tesorería sin haber cometido ningún error de gestión.",
            "Las **palancas** son tres y no todas cuestan lo mismo. Reducir días de almacén suele ser la de mayor recorrido y depende de la previsión de demanda y de la logística. Acortar el cobro pasa por descuentos por pronto pago —que tienen un coste implícito a menudo altísimo—, por factoring o simplemente por gestión disciplinada. Alargar el pago a proveedores es la más tentadora y la que más deteriora relaciones, además de estar limitada por la normativa de morosidad.",
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
            { nom: "Necesidades operativas de fondos", sub: "Lo que el ciclo de explotación exige.", cols: ["NOF = Existencias + Clientes − Proveedores"] },
            { nom: "Fondo de maniobra", sub: "Lo que la estructura financiera proporciona.", cols: ["FM = (PN + PNC) − ANC = AC − PC"] },
            { nom: "Recursos negociados necesarios", sub: "La brecha entre necesidad y recurso disponible.", cols: ["RN = NOF − FM"] },
            { nom: "NOF sobre ventas", sub: "El parámetro para proyectar.", cols: ["n = NOF / Ventas"] },
            { nom: "Necesidad adicional por crecimiento", sub: "Lo que consume cada euro de venta nueva.", cols: ["$\\Delta\\mathrm{NOF} \\approx n \\times \\Delta\\text{Ventas}$"] },
            { nom: "Coste implícito del pronto pago", sub: "Suele ser muy superior al del crédito bancario.", cols: ["$i = \\left(\\dfrac{d}{1-d}\\right)^{365/\\text{días adelantados}} - 1$"] },
          ],
          nota: "La identidad **RN = NOF − FM** debe cuadrar exactamente con la posición financiera neta a corto plazo del balance: deuda a corto menos tesorería. Es una buena comprobación de que el análisis está bien construido.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: Arlanza, la identidad que cuadra",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Recuperamos por última vez el balance de la ficha 6.06. Existencias 180.000 €, clientes 240.000 €, proveedores 220.000 €, deudas a corto 92.000 €, efectivo 30.000 €, fondo de maniobra 138.000 €. Y los mismos datos del año anterior.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Año N", "Año N−1"],
          filas: [
            ["Existencias", "180.000 €", "140.000 €"],
            ["Clientes", "240.000 €", "190.000 €"],
            ["Proveedores", "−220.000 €", "−190.000 €"],
            { celdas: ["Necesidades operativas de fondos", "200.000 €", "140.000 €"], clase: "total" },
            ["Fondo de maniobra", "138.000 €", "120.000 €"],
            { celdas: ["Recursos negociados necesarios", "62.000 €", "20.000 €"], clase: "total" },
            ["Comprobación: deuda a corto − efectivo", "92.000 − 30.000 = 62.000 €", "80.000 − 60.000 = 20.000 €"],
          ],
          nota: "La identidad **cuadra al céntimo** en ambos ejercicios. Y muestra lo que ninguno de los ratios de la ficha 6.06 dejaba ver con esta claridad: la dependencia de crédito bancario a corto se ha **triplicado** en un año, de 20.000 € a 62.000 €, mientras el ratio de circulante permanecía inmóvil en 1,44.",
        },
        {
          tipo: "tabla",
          cabecera: ["Proyección", "Año N", "Año N+1 (ventas +20 %)"],
          filas: [
            ["Ventas", "1.200.000 €", "1.440.000 €"],
            ["NOF sobre ventas", "16,7 %", "16,7 %"],
            ["NOF", "200.000 €", "240.000 €"],
            ["Necesidad adicional de financiación", "—", "40.000 €"],
            ["Fondo de maniobra si no cambia la estructura", "138.000 €", "138.000 €"],
            { celdas: ["Recursos negociados necesarios", "62.000 €", "102.000 €"], clase: "total" },
          ],
          nota: "Repetir el crecimiento del 20 % con el mismo ciclo llevaría la dependencia de crédito a corto a **102.000 €**, con una tesorería que ya está en 30.000 €. En ese punto la continuidad del negocio depende de la renovación de una póliza, no de la rentabilidad. Y el ratio NOF sobre ventas ya se había deteriorado del 14,0 % al 16,7 % entre N−1 y N, así que suponerlo estable es incluso optimista.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El efecto de actuar sobre el ciclo.** Si Arlanza redujera sus días de almacén de 84 a 60 —una mejora exigente pero alcanzable en distribución—, sus existencias pasarían a 780.000 × 60/365 = **128.200 €**, liberando **51.800 €**. Eso solo cubriría casi por completo la necesidad adicional del crecimiento proyectado, sin pedir un euro más al banco y sin tocar precios ni márgenes. La gestión del circulante no es una tarea administrativa menor: en un negocio de distribución es una de las principales fuentes de financiación disponibles.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cuánto cuesta de verdad el pronto pago",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un proveedor ofrece un descuento del **2 % por pagar a 10 días en lugar de a 60**. La oferta suena modesta y muchas empresas la rechazan por preferir conservar la liquidez. La aritmética dice otra cosa.",
            "Renunciar al descuento significa pagar un 2 % más por disponer del dinero cincuenta días adicionales. El coste efectivo anual es (0,02 / 0,98) elevado a 365/50, menos uno: aproximadamente un **15,7 % anual**. Comparado con una póliza de crédito al 5 %, rechazar el descuento es la financiación más cara del balance, y no figura en ninguna cuenta de gastos financieros porque se manifiesta como mayor coste de compra.",
            "**El mismo cálculo en sentido inverso.** Cuando es la propia empresa la que ofrece descuento por pronto pago a sus clientes para acelerar el cobro, está pagando ese mismo tipo implícito. Un 2 % a 50 días de adelanto cuesta un 15,7 % anual, muy por encima de cualquier alternativa bancaria. El descuento por pronto pago es una herramienta cara que solo se justifica cuando no hay acceso al crédito o cuando el riesgo de impago es alto y adelantar el cobro también reduce ese riesgo.",
            "**El repertorio ordenado por coste**, de menor a mayor: financiación bancaria a largo plazo para la parte estructural de las NOF; póliza de crédito para la punta estacional; confirming, que suele mejorar condiciones para ambas partes; factoring sin recurso, que además transfiere el riesgo de impago y por eso cuesta más; y en último lugar el descuento por pronto pago, tanto ofrecerlo como renunciar a él.",
            "**Y la restricción legal.** La normativa española de lucha contra la morosidad fija plazos máximos de pago en operaciones comerciales, y las cuentas anuales deben informar del período medio de pago a proveedores. Alargar el pago no es una palanca ilimitada: tiene tope normativo, deteriora la relación comercial y, en empresas cotizadas, es información pública que el mercado interpreta.",
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
            { t: "Confundir NOF con fondo de maniobra", d: "Las NOF son lo que el negocio necesita; el fondo de maniobra, lo que la estructura financiera proporciona. Se calculan con partidas parecidas y significan cosas opuestas. La diferencia entre ambos es la dependencia de crédito negociado, que es el dato que de verdad informa." },
            { t: "Tratar las NOF como activo corriente sin más", d: "Contablemente lo son; financieramente son inversión permanente. El nivel agregado no baja mientras el negocio funcione, aunque cada partida concreta rote. Por eso financiarlas con crédito renovable a corto es una fragilidad estructural." },
            { t: "Financiar necesidades permanentes con póliza renovable", d: "Funciona hasta que el banco no renueva, que suele coincidir con el momento en que el negocio va peor. La parte estructural de las NOF debe financiarse con recursos permanentes; la póliza es para la punta estacional." },
            { t: "Rechazar descuentos por pronto pago sin calcular su coste", d: "Un 2 % a 50 días equivale a un 15,7 % anual. Es casi siempre la financiación más cara disponible y no aparece como gasto financiero, sino diluida en el precio de compra, lo que la hace invisible en la cuenta de resultados." },
            { t: "Proyectar el crecimiento sin proyectar las NOF", d: "Es el error más caro de los planes de negocio. Un plan que multiplica las ventas sin aumentar el circulante en la misma proporción está omitiendo la principal salida de caja del proyecto y produce un VAN sistemáticamente inflado." },
            { t: "Alargar el pago a proveedores como palanca principal", d: "Tiene tope legal, deteriora las condiciones comerciales que se negocian el año siguiente y en cotizadas es información pública. Además, si el proveedor es más débil financieramente, su coste de financiación acaba trasladándose al precio." },
            { t: "Olvidar que las NOF se recuperan al liquidar", d: "En la valoración de un proyecto, la inversión en circulante vuelve como flujo positivo del último año. Omitirlo infravalora el proyecto, del mismo modo que omitir la inversión inicial en circulante lo sobrevalora." },
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
            "El circulante empresarial tiene una manifestación agregada relevante y un actor público que la condiciona.",
          ],
          lista: [
            "El **crédito comercial y anticipos (AF.81)** es la contrapartida agregada de los saldos de clientes y proveedores. En las cuentas financieras aparece simultáneamente como activo de unos sectores y pasivo de otros, y su volumen revela cuánto se financian las empresas entre sí.",
            "Ese crédito es una **cadena**: el alargamiento de plazos de un eslabón se propaga aguas abajo. En una crisis de liquidez, el aumento generalizado de los días de pago actúa como un multiplicador de la tensión financiera, y de ahí que la normativa europea de morosidad se justifique en términos macroeconómicos y no solo de equidad contractual.",
            "El **sector público es un actor de peso en esa cadena**. El período medio de pago a proveedores de las administraciones se publica y se vigila precisamente porque su deterioro traslada tensión de liquidez al sector privado. Los planes de pago a proveedores desplegados en España tras 2012 fueron, en el lenguaje de esta ficha, una inyección masiva de fondo de maniobra a empresas cuyas NOF estaban financiadas por impago público.",
            "La **variación de existencias (P.52)** recoge el componente de almacén de las NOF, y su comportamiento cíclico —acumulación al final de las expansiones, liberación en las recesiones— es visible en la contribución al crecimiento trimestral del PIB.",
          ],
          cierre:
            "La lectura conjunta es útil: lo que para una empresa es una decisión de gestión de tesorería, agregado es un canal de transmisión de tensiones financieras entre sectores, y por eso el plazo de pago está regulado.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Existencias 90.000 €, clientes 150.000 €, proveedores 110.000 €, fondo de maniobra 80.000 €. ¿Cuánta financiación negociada necesita?", a: "NOF = 130.000 €. Recursos negociados = 130.000 − 80.000 = 50.000 €. Debe cuadrar con la deuda a corto menos la tesorería del balance." },
            { q: "¿Por qué se dice que las NOF son inversión permanente si figuran en el activo corriente?", a: "Porque el nivel agregado no baja mientras el negocio funcione: al vender una unidad se repone otra y al cobrar una factura se emite otra. Cada partida rota, el conjunto no. Financieramente es una inversión estructural." },
            { q: "Las ventas crecerán un 30 % y las NOF son el 15 % de las ventas. ¿Cuánta caja adicional hace falta?", a: "El 15 % del incremento de ventas. Sobre unas ventas de un millón, el crecimiento de 300.000 € exige 45.000 € adicionales de financiación permanente. Crecer consume dinero de forma mecánica." },
            { q: "Un proveedor ofrece un 2 % de descuento por pagar a 10 días en vez de a 60. ¿Interesa?", a: "Sí, salvo que no haya liquidez ni acceso al crédito. Renunciar al descuento equivale a financiarse al 15,7 % anual, muy por encima de cualquier póliza. Y el coste no aparece como gasto financiero, sino diluido en el precio de compra." },
            { q: "¿Qué relación tiene el período medio de pago de las administraciones con esta ficha?", a: "Directa: cuando el sector público alarga sus plazos, está financiándose con las NOF de sus proveedores, que deben cubrir esa brecha con crédito bancario. Los planes de pago a proveedores fueron, en estos términos, una inyección de fondo de maniobra al sector privado." },
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
              q: "¿Qué distingue a las necesidades operativas de fondos del fondo de maniobra?",
              opciones: [
                "Nada: son dos nombres de la misma magnitud, calculada de distinta forma",
                "Las NOF son a corto plazo y el fondo de maniobra a largo",
                "Las NOF son lo que el negocio necesita; el fondo de maniobra, lo que la estructura financiera proporciona",
                "Las NOF se calculan a coste y el fondo de maniobra a precio de venta",
              ],
              correcta: 2,
              porque: [
                "Se calculan con partidas parecidas, y de ahí viene la confusión, pero significan cosas opuestas.",
                "Ambas se construyen sobre partidas corrientes. Lo que las separa es que una mide necesidad y la otra cobertura.",
                "Si las NOF superan al fondo de maniobra, la diferencia hay que financiarla con recursos negociados: ese hueco es el problema de tesorería que hay que ver venir.",
                "La valoración de las partidas es la misma en ambos casos; la diferencia es conceptual, no de criterio de medida.",
              ],
            },
            {
              q: "Contablemente las NOF son activo corriente. ¿Cómo deben tratarse desde el punto de vista financiero?",
              opciones: [
                "Como activo a corto plazo: cada partida rota en pocos meses",
                "Como un gasto del ejercicio, ya que se renuevan continuamente",
                "Como inversión permanente: el nivel agregado no baja mientras el negocio funcione, aunque cada partida concreta rote",
                "Como pasivo, porque su financiación exige recursos ajenos",
              ],
              correcta: 2,
              porque: [
                "Cada factura de cliente se cobra, sí, pero la sustituye otra: lo que rota son las partidas individuales, no el saldo.",
                "No son gasto: son dinero inmovilizado que sigue perteneciendo a la empresa y que vuelve al liquidar el negocio.",
                "Por eso financiarlas con recursos a corto es un desajuste estructural: se está cubriendo una inversión permanente con dinero que puede desaparecer.",
                "Son una inversión, no una fuente. Que haya que financiarlas no las convierte en pasivo.",
              ],
            },
            {
              q: "Un proveedor ofrece un 2 % de descuento por pagar a 10 días en lugar de a 60. ¿Conviene aceptarlo?",
              opciones: [
                "Sí casi siempre: equivale a un coste anual en torno al 15,7 %, más caro que casi cualquier financiación disponible",
                "No: renunciar a 50 días de financiación gratuita por un 2 % no compensa",
                "Es indiferente: un 2 % es una cifra marginal",
                "Solo si la empresa tiene exceso de tesorería sin remunerar",
              ],
              correcta: 0,
              porque: [
                "Un 2 % durante 50 días, capitalizado al año, da alrededor del 15,7 %. Rechazar el descuento es contratar crédito a ese tipo sin darse cuenta.",
                "La financiación no es gratuita: el precio con aplazamiento lleva el coste dentro, solo que no figura como gasto financiero.",
                "El 2 % es marginal como porcentaje sobre la compra y enorme como tipo anual: lo que engaña es no anualizarlo.",
                "Conviene aunque haya que pedir prestado para pagar antes, porque el crédito bancario será casi con seguridad más barato que ese 15,7 %.",
              ],
            },
            {
              q: "Un plan de negocio proyecta duplicar las ventas en tres años. ¿Qué es lo que más se olvida?",
              opciones: [
                "Proyectar las NOF, que crecen con las ventas y absorben caja en la misma proporción",
                "Ajustar los precios por inflación",
                "Incorporar el efecto fiscal del mayor beneficio",
                "Revisar la amortización del inmovilizado existente",
              ],
              correcta: 0,
              porque: [
                "Es el error más caro de los planes de negocio: crecer vendiendo a crédito y con más almacén consume dinero, y el plan enseña beneficios mientras la tesorería se agota.",
                "La inflación suele contemplarse; lo que se omite es una salida de caja mucho mayor.",
                "El impuesto se calcula casi siempre; lo que no aparece es el circulante que hay que financiar antes de cobrar nada.",
                "La amortización no mueve caja, así que su revisión no cambia la necesidad de financiación del crecimiento.",
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
            { ref: "Faus, Finanzas operativas", nota: "la referencia en español sobre NOF frente a fondo de maniobra. Es el libro que popularizó la distinción en las escuelas de negocio españolas." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "el capítulo de gestión del capital circulante, con el cálculo del coste implícito del crédito comercial." },
            { ref: "Ley 3/2004 de lucha contra la morosidad y normativa posterior", nota: "plazos máximos de pago en operaciones comerciales y obligaciones de información en cuentas anuales." },
            { ref: "Banco de España, Central de Balances", nota: "períodos medios de cobro y pago por sector y tamaño, para situar los propios ratios en contexto." },
          ],
        },
      ],
    },
  ],
};
