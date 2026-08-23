/* Ficha 6.06 — Analisis patrimonial y de liquidez.
   Usa el caso Distribuciones Arlanza, compartido con 6.07 y 6.08. */

export default {
  codigo: "6.06",
  titulo: "Análisis patrimonial y de liquidez",
  nivel: 2,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "4 h",
  nucleo:
    "Un fondo de maniobra positivo y creciente puede convivir con una posición de liquidez que empeora. El diagnóstico no está en el nivel de los ratios sino en su composición y en su evolución, y sobre todo en cuántos días tarda el dinero en dar la vuelta completa.",
  requiere: "5.01 Patrimonio y ecuación fundamental · 5.10 Cuentas anuales",
  abre: "6.07 Rentabilidad · 6.08 Flujos de efectivo · 7.08 Gestión del circulante",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El análisis patrimonial responde a dos preguntas distintas que conviene no mezclar. La primera es de **solvencia a corto plazo**: ¿podrá la empresa atender los pagos de los próximos meses? La segunda es de **estructura financiera**: ¿está el activo financiado de forma coherente con su permanencia en la empresa? La primera se responde con ratios de liquidez y con el ciclo de caja; la segunda, con el fondo de maniobra y los ratios de endeudamiento.",
            "El **fondo de maniobra** es la parte del activo corriente financiada con recursos permanentes. Su lectura habitual —positivo bueno, negativo malo— es demasiado gruesa. Lo que mide es si la empresa ha respetado el principio de equilibrio financiero: financiar lo duradero con recursos duraderos. Pero **su signo adecuado depende del ciclo del negocio**. Un supermercado cobra al contado y paga a sus proveedores a sesenta días: opera con fondo de maniobra negativo de forma estructural y perfectamente sana. Una constructora con obras de dos años lo necesita muy positivo.",
            "Los **ratios de liquidez** miden lo mismo desde otro ángulo y añaden un matiz esencial: la **composición** del activo corriente. El ratio de circulante trata igual a la tesorería y a un almacén de rotación lenta, cuando su capacidad de atender un pago no tiene nada que ver. La prueba ácida elimina las existencias precisamente por eso, y el ratio de tesorería se queda solo con el efectivo. Leer los tres juntos dice más que cualquiera de ellos por separado.",
            "Pero el instrumento más informativo de todo el análisis de liquidez no es un ratio de balance, sino el **ciclo de caja**: los días que transcurren desde que la empresa paga a su proveedor hasta que cobra de su cliente. Se obtiene sumando los días de almacén y los de cobro y restando los de pago. Es un dato dinámico, mide un flujo real y, sobre todo, **traduce el problema a la unidad en que se vive**: días de financiación que hay que cubrir con algo.",
            "Una advertencia de método antes de calcular nada. Todos estos ratios son cocientes entre una magnitud de balance —un stock a 31 de diciembre— y a veces una de resultados —un flujo anual—. El balance de cierre puede no ser representativo del año, sobre todo en negocios estacionales. Y ningún ratio significa nada aislado: se interpreta contra la **serie temporal de la propia empresa** y contra el **sector**, nunca contra un valor de referencia universal.",
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
            { nom: "Fondo de maniobra", sub: "Dos expresiones equivalentes que se deducen de A = P + PN.", cols: ["FM = AC − PC = (PN + PNC) − ANC"] },
            { nom: "Ratio de circulante", sub: "Trata igual el efectivo y el almacén: úsalo con cuidado.", cols: ["RC = AC / PC"] },
            { nom: "Prueba ácida", sub: "Elimina la partida menos líquida del activo corriente.", cols: ["PA = (AC − Existencias) / PC"] },
            { nom: "Ratio de tesorería", sub: "El más exigente.", cols: ["RT = Efectivo / PC"] },
            { nom: "Endeudamiento", sub: "Qué proporción del activo financian terceros.", cols: ["e = Pasivo total / Activo total"] },
            { nom: "Cobertura de intereses", sub: "Cuántas veces cubre el negocio su carga financiera.", cols: ["CI = BAII / Gastos financieros"] },
            { nom: "Días de almacén", sub: "Se calcula sobre el coste de ventas, no sobre las ventas.", cols: ["PMA = Existencias / Coste de ventas × 365"] },
            { nom: "Días de cobro y de pago", sub: "El segundo, sobre compras.", cols: ["PMC = Clientes / Ventas × 365 · PMP = Proveedores / Compras × 365"] },
            { nom: "Ciclo de caja", sub: "El indicador central.", cols: ["CC = PMA + PMC − PMP"] },
          ],
          nota: "Cuando se dispone de dos balances, conviene usar **saldos medios** en los períodos medios: el saldo de cierre puede ser atípico, sobre todo en negocios estacionales.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: Distribuciones Arlanza",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Este caso acompañará también a las fichas 6.07 y 6.08, de modo que las tres perspectivas se aplicarán sobre la misma empresa. Balance de los dos últimos ejercicios, en euros:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Balance", "Año N", "Año N−1"],
          filas: [
            ["Inmovilizado material e intangible neto", "450.000", "430.000"],
            ["Existencias", "180.000", "140.000"],
            ["Clientes", "240.000", "190.000"],
            ["Efectivo", "30.000", "60.000"],
            { celdas: ["Total activo", "900.000", "820.000"], clase: "total" },
            ["Patrimonio neto", "408.000", "390.000"],
            ["Deudas a largo plazo", "180.000", "160.000"],
            ["Proveedores", "220.000", "190.000"],
            ["Deudas a corto plazo", "92.000", "80.000"],
            { celdas: ["Total patrimonio neto y pasivo", "900.000", "820.000"], clase: "total" },
          ],
          nota: "Cuenta de resultados del año N: ventas 1.200.000 €, coste de ventas 780.000 €, resultado de explotación 76.000 €, gastos financieros 12.000 €, resultado del ejercicio 48.000 €. En N−1 las ventas fueron 1.000.000 € y el resultado, 60.000 €.",
        },
        {
          tipo: "tabla",
          cabecera: ["Indicador", "Año N", "Año N−1", "Lectura"],
          filas: [
            ["Fondo de maniobra", "138.000 €", "120.000 €", "Crece un 15 %"],
            ["Ratio de circulante", "1,44", "1,44", "Idéntico"],
            ["Prueba ácida", "0,87", "0,93", "Empeora"],
            ["Ratio de tesorería", "0,10", "0,22", "Se desploma"],
            ["Endeudamiento", "54,7 %", "52,4 %", "Sube algo"],
            ["Cobertura de intereses", "6,3", "7,7", "Se deteriora"],
          ],
          nota: "Aquí está el aviso de la ficha: el **fondo de maniobra crece y la liquidez empeora**. El ratio de circulante ni siquiera se mueve, porque activo y pasivo corriente han crecido en proporción parecida. Lo que ha cambiado es la **composición**: el activo corriente que crece es almacén y saldo de clientes, y el que desaparece es la caja.",
        },
        {
          tipo: "tabla",
          cabecera: ["Ciclo de caja", "Cálculo", "Días"],
          filas: [
            ["Días de almacén", "180.000 / 780.000 × 365", "84"],
            ["Días de cobro a clientes", "240.000 / 1.200.000 × 365", "73"],
            ["Días de pago a proveedores", "220.000 / 780.000 × 365", "−103"],
            { celdas: ["Ciclo de caja", "84 + 73 − 103", "54 días"], clase: "total" },
          ],
          nota: "La empresa financia **54 días** de actividad. A un coste de ventas diario de unos 2.137 €, eso equivale a unos 115.000 € de necesidad operativa permanente. Cada punto de crecimiento en ventas exige financiar más días, y ahí está la explicación de que la caja haya bajado de 60.000 € a 30.000 € en un año de crecimiento del 20 %.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el crecimiento como consumidor de caja",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Arlanza ha crecido un 20 % en ventas y ha ganado dinero. Y sin embargo su tesorería se ha reducido a la mitad y su cobertura de intereses ha empeorado. No hay contradicción: **crecer con ciclo de caja positivo consume dinero de forma mecánica**.",
            "El razonamiento es aritmético. Con 54 días de ciclo, cada euro adicional de coste de ventas exige inmovilizar 54/365 = 0,148 € de forma permanente. Al pasar el coste de ventas de 650.000 € a 780.000 €, la necesidad operativa creció unos 19.000 €. Pero además los días empeoraron: el saldo de clientes creció un 26 % con ventas al 20 %, y el almacén un 29 %. Ese deterioro de días, sobre una base mayor, es lo que ha absorbido la caja.",
            "**Las palancas disponibles, por orden de eficacia habitual:** reducir días de almacén, que suele ser la partida con más margen; acortar el cobro a clientes mediante descuentos por pronto pago, factoring o simplemente gestión más disciplinada; alargar el pago a proveedores hasta donde la relación comercial lo permita. Y, si nada de eso basta, financiar la necesidad con crédito a largo plazo en lugar de con la caja, que es lo que Arlanza ha hecho a medias.",
            "**El error a evitar:** financiar necesidades operativas permanentes con póliza de crédito a corto renovable. Funciona hasta que el banco no renueva, que suele ser justo cuando el negocio va peor. Una necesidad operativa que no desaparece es estructural y debe financiarse con recursos permanentes, aunque el instrumento a corto sea más barato.",
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
            { t: "Buscar un valor «correcto» para el ratio de circulante", d: "El famoso 1,5 o 2 no tiene fundamento. El nivel adecuado depende del ciclo del negocio: un supermercado sano puede tener 0,6 y una constructora sana, 2,5. Los ratios se interpretan contra la propia serie histórica y contra el sector, nunca contra un número universal." },
            { t: "Leer el fondo de maniobra sin mirar su composición", d: "Un fondo de maniobra creciente puede deberse a que el almacén se está llenando de producto invendible y el saldo de clientes de facturas incobrables. El signo positivo dice que la estructura de financiación es coherente, no que la empresa tenga liquidez." },
            { t: "Calcular los días de almacén sobre las ventas", d: "El almacén está valorado a coste y las ventas incluyen margen: el cociente mezcla dos unidades distintas y subestima los días. La base correcta es el coste de ventas. El mismo error se comete al calcular los días de proveedores sobre las ventas en lugar de sobre las compras." },
            { t: "Interpretar un ciclo de caja negativo como problema", d: "Significa que la empresa cobra antes de pagar: sus proveedores financian su actividad. Es una posición excelente y característica de la distribución minorista y de las plataformas. El riesgo asociado es distinto —depende de mantener el volumen— pero no es un problema de liquidez." },
            { t: "Usar saldos de cierre en negocios estacionales", d: "Una juguetería a 31 de diciembre tiene el almacén vacío y el saldo de clientes disparado; a 30 de junio, lo contrario. Cualquier ratio calculado sobre una sola fecha describe ese momento, no el año. Con datos mensuales o con saldos medios el retrato cambia por completo." },
            { t: "Analizar un solo ejercicio", d: "Todos los indicadores de esta ficha son casi inútiles en corte transversal y muy informativos en serie. Arlanza con los datos de un solo año parece una empresa normal; con dos años se ve que la caja se está agotando." },
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
            "El análisis de liquidez tiene equivalentes agregados en las cuentas financieras por sectores institucionales.",
          ],
          lista: [
            "La **capacidad o necesidad de financiación (B.9)** de las sociedades no financieras es el análogo sectorial de la posición de un balance: si el sector ahorra e invierte por encima de su ahorro, necesita financiación externa, exactamente como Arlanza.",
            "El **crédito comercial (AF.81)** es la contrapartida agregada de los saldos de clientes y proveedores. Su evolución revela si las empresas se están financiando unas a otras y cómo se propagan las tensiones de pago por la cadena productiva.",
            "El endeudamiento se analiza con ratios como **deuda sobre PIB** o **deuda sobre excedente bruto de explotación**, que replican la lógica del endeudamiento sobre activo y de la cobertura de intereses.",
            "La **variación de existencias** que en Arlanza consume caja aparece agregada en P.52, y su comportamiento cíclico es el mismo: se acumula al final de las expansiones y se libera en las recesiones.",
          ],
          cierre:
            "La diferencia práctica es la disponibilidad de datos: en cuentas nacionales hay serie trimestral homogénea y consolidada por sectores, mientras que en el análisis de una empresa concreta se trabaja con dos fotografías anuales y muchas conjeturas sobre lo ocurrido en medio.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Activo corriente 450.000 €, pasivo corriente 312.000 €, existencias 180.000 €. ¿Ratio de circulante y prueba ácida?", a: "Circulante 1,44 y prueba ácida 0,87. La empresa no podría atender sus deudas a corto sin vender almacén, algo que el ratio de circulante por sí solo no revelaba." },
            { q: "¿Por qué un supermercado tiene fondo de maniobra negativo sin estar en dificultades?", a: "Porque cobra al contado y paga a sus proveedores a plazo: su ciclo de caja es negativo y sus proveedores financian la actividad. El desequilibrio formal del balance no refleja un problema real de liquidez." },
            { q: "Almacén 60 días, cobro 45, pago 90. ¿Ciclo de caja?", a: "15 días. La empresa financia dos semanas de actividad. Si el pago fuera a 120 días, el ciclo sería de −15 días y serían los proveedores quienes la financiarían." },
            { q: "Las ventas crecen un 20 % y el ciclo de caja se mantiene. ¿Qué pasa con la necesidad de financiación?", a: "Crece aproximadamente un 20 % también. La necesidad operativa es proporcional al volumen para un ciclo dado, y por eso crecer consume caja aunque la empresa sea rentable y gestione igual de bien que antes." },
            { q: "¿Por qué los días de almacén se calculan sobre el coste de ventas y no sobre las ventas?", a: "Porque el almacén está valorado a coste. Dividir por las ventas mezclaría una magnitud a coste con otra que incluye margen, y subestimaría sistemáticamente los días." },
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
            { ref: "Archel Domench et al., Estados contables: elaboración, análisis e interpretación", nota: "el desarrollo completo del análisis patrimonial con la batería de ratios y su interpretación." },
            { ref: "Amat, Análisis de estados financieros", nota: "más directo y con más casos españoles; buena guía de valores de referencia por sector." },
            { ref: "Faus, Finanzas operativas", nota: "el mejor tratamiento en español de las necesidades operativas de fondos y su relación con el crecimiento." },
            { ref: "Central de Balances del Banco de España", nota: "ratios sectoriales españoles con los que comparar. Imprescindible para no interpretar en el vacío." },
          ],
        },
      ],
    },
  ],
};
