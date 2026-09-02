/* Ficha 5.14 — Cuentas a cobrar, a pagar y de personal. */

export default {
  codigo: "5.14",
  titulo: "Cuentas a cobrar, a pagar y de personal",
  nivel: 1,
  bloque: "Contabilidad financiera",
  tiempo: "3 h",
  nucleo:
    "El grueso del balance de una empresa mediana son clientes, proveedores y nóminas pendientes, y precisamente por rutinario es lo que más veces se contabiliza mal. El asiento de la nómina resume la ficha entera: entre lo que la empresa paga y lo que el trabajador cobra hay un 40 % que nunca pasa por las manos de ninguno de los dos.",
  requiere: "5.02 La partida doble · 5.11 Contabilidad del IVA",
  abre: "5.10 Cuentas anuales · 6.06 Análisis de liquidez · 7.08 Gestión del circulante",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **grupo 4** del Plan General de Contabilidad es el menos vistoso y el que más asientos concentra. Recoge las relaciones con terceros que no son financieras: **clientes y deudores** en el lado del activo, **proveedores y acreedores** en el pasivo, más las cuentas con **el personal** y con **las administraciones públicas**. En una empresa mediana no financiera, esas partidas son la mayor parte del balance, y su rotación determina la tesorería mucho más que cualquier decisión de inversión.",
            "La primera distinción que hay que interiorizar es entre **proveedores (subgrupo 40)** y **acreedores por prestación de servicios (subgrupo 41)**, y su criterio no es el importe ni el plazo sino **la relación con la actividad**. Es proveedor quien suministra bienes o servicios que forman parte del **objeto propio** de la empresa: la materia prima de un fabricante, la mercadería de un comerciante. Es acreedor quien suministra lo demás: la asesoría, el suministro eléctrico, el alquiler. **La misma factura de un mismo importe va a una cuenta o a otra según qué haga la empresa que la recibe.**",
            "La simetría se repite en el activo: **clientes (subgrupo 43)** son quienes deben por operaciones de la actividad propia y **deudores varios (subgrupo 44)** los demás. Y hay una regla de presentación que se incumple con frecuencia: **los saldos deudores y acreedores con un mismo tercero no se compensan** salvo que exista derecho legal de compensación. Netear un cliente que también es proveedor reduce artificialmente el activo y el pasivo a la vez, y oculta la magnitud real de las dos posiciones.",
            "Los **efectos comerciales** merecen atención porque esconden el error conceptual más caro del grupo. Cuando una empresa **descuenta** efectos en el banco recibe dinero antes del vencimiento, y la tentación es registrarlo como un cobro. **No lo es.** El descuento es una **financiación con recurso**: si el cliente no paga al vencimiento, el banco devuelve el efecto y la empresa responde. Por eso el PGC obliga a mantener el derecho en la cuenta **4311, efectos comerciales descontados**, y a reconocer una deuda en la **5208, deudas por efectos descontados**, hasta que el efecto venza y se cobre.",
            "**Contabilizar un descuento como cobro hace desaparecer del balance un riesgo que sigue vivo**, y simultáneamente infla la tesorería y reduce el endeudamiento aparente. Es el mismo principio que gobierna la baja de activos financieros: solo se da de baja un derecho cuando **se transfieren sustancialmente los riesgos y beneficios**, y en el descuento comercial no se transfieren, porque el riesgo de impago se queda en casa.",
            "El **deterioro de créditos comerciales** aplica a las cuentas a cobrar la lógica general del deterioro: cuando el cobro deja de ser razonablemente seguro, se reconoce la pérdida **antes** de que se materialice. Se dota mediante la cuenta **694** contra la **490**, y se revierte por la **794** si el riesgo desaparece. La discrecionalidad es evidente y por eso importa: **estimar a la baja el deterioro es la manera más sencilla y menos visible de inflar un resultado**, y es una de las áreas donde más se concentra el trabajo de auditoría.",
            "**Las cuentas de personal son las que mejor resumen la ficha.** Un recibo de salarios genera tres obligaciones distintas con tres acreedores distintos: con el **trabajador**, por el líquido a percibir; con **Hacienda**, por las retenciones de IRPF practicadas, cuenta **4751**; y con la **Seguridad Social**, por las cotizaciones, cuenta **476**, que incluyen tanto la parte descontada al trabajador como la que corresponde a la empresa. El gasto son las cuentas **640, sueldos y salarios**, y **642, seguridad social a cargo de la empresa**.",
            "**De ahí sale la distinción entre tres cifras que casi nadie separa bien: coste de empresa, salario bruto y líquido percibido.** El gasto contable es el coste total; el bruto es lo que figura en el contrato; el líquido es lo que llega a la cuenta del trabajador. Entre el primero y el tercero hay una diferencia grande que **no pasa por las manos de ninguno de los dos**: la empresa la ingresa directamente en Hacienda y en la Seguridad Social. Es la **cuña fiscal**, y su invisibilidad es la misma ilusión fiscal que la ficha 18.07 describe a propósito del IBI, funcionando aquí en sentido contrario: **lo que no se ve, no se percibe como propio**.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Cuenta", "Qué recoge", "Confusión frecuente"],
          filas: [
            { nom: "400 Proveedores", sub: "Bienes y servicios de la actividad propia.", cols: ["La materia prima, la mercadería", "Meter aquí la luz o la asesoría"] },
            { nom: "410 Acreedores", sub: "Todo lo demás.", cols: ["Suministros, alquiler, servicios profesionales", "Depende de qué hace la empresa, no del importe"] },
            { nom: "4311 Efectos descontados", sub: "El derecho sigue vivo.", cols: ["Efectos entregados al banco", "Tratar el descuento como un cobro"] },
            { nom: "5208 Deudas por descuento", sub: "La contrapartida del anterior.", cols: ["Lo anticipado por el banco", "Olvidar que es financiación con recurso"] },
            { nom: "4751 HP acreedora por retenciones", sub: "IRPF retenido al trabajador.", cols: ["Dinero del trabajador que se ingresa por él", "Confundirlo con un gasto de la empresa"] },
            { nom: "476 Organismos de la Seguridad Social", sub: "Las dos partes juntas.", cols: ["Cuota del trabajador más cuota patronal", "Creer que solo recoge la del trabajador"] },
          ],
          nota: "Las dos últimas filas explican por qué el asiento de nómina desconcierta la primera vez: **una sola operación genera un gasto y tres acreedores**, y solo uno de los tres es la persona que ha trabajado.",
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
            { nom: "Líquido a percibir", sub: "Lo que llega a la cuenta del trabajador.", cols: ["$L = B - \\mathrm{IRPF} - SS_{trab}$"] },
            { nom: "Coste de empresa", sub: "El gasto contable real.", cols: ["$C = B + SS_{emp}$"] },
            { nom: "Cuña fiscal", sub: "Lo que no pasa por manos de nadie.", cols: ["$W = C - L$"] },
            { nom: "Cuña en porcentaje del coste", sub: "La medida comparable entre países.", cols: ["$w = \\dfrac{C - L}{C}$"] },
            { nom: "Cuadre del asiento", sub: "Un gasto, tres acreedores.", cols: ["$B + SS_{emp} = \\mathrm{IRPF} + (SS_{trab} + SS_{emp}) + L$"] },
            { nom: "Efecto descontado", sub: "No se da de baja el derecho.", cols: ["$4311 \\ne$ cobro; nace la deuda $5208$"] },
          ],
          nota: "La quinta línea es la comprobación que conviene hacer siempre: **el debe del asiento de nómina es el coste de empresa y el haber se reparte en tres**, uno de ellos el trabajador. Si no cuadra, casi siempre es porque se ha olvidado la cuota patronal en el debe.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el asiento de la nómina y la cuña fiscal",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un trabajador tiene un **salario bruto mensual de 2.000 €**. Se le retienen **300 €** de IRPF y **130 €** de cotización a su cargo, y la empresa aporta **630 €** de cotización patronal. Seguimos el asiento completo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Cuenta", "Debe", "Haber"],
          filas: [
            ["(640) Sueldos y salarios", "2.000 €", ""],
            ["(642) Seguridad Social a cargo de la empresa", "630 €", ""],
            ["(4751) HP acreedora por retenciones", "", "300 €"],
            ["(476) Organismos de la Seguridad Social acreedores", "", "760 €"],
            ["(572) Bancos", "", "1.570 €"],
            { celdas: ["Totales", "2.630 €", "2.630 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Las tres cifras del mismo sueldo", "Importe", "Quién la ve"],
          filas: [
            ["Coste de empresa", "2.630 €", "La empresa, en su cuenta de resultados"],
            ["Salario bruto", "2.000 €", "El contrato y la nómina"],
            ["Líquido percibido", "1.570 €", "El trabajador, en su cuenta"],
            { celdas: ["Cuña fiscal", "2.630 − 1.570 = 1.060 €", "40,3 % del coste, y no la ve nadie"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**La cuenta 476 recoge 760 €, no 130 €**, y ese es el detalle que más se falla. Junta la cotización del trabajador, que la empresa le ha descontado y va a ingresar por él, con la cotización patronal, que es gasto propio. Son dos conceptos de naturaleza distinta con el mismo acreedor, y por eso comparten cuenta. **La empresa actúa aquí exactamente como en el IVA de la ficha 5.11: recauda por cuenta ajena una parte y soporta otra.**",
            "**Las tres cifras del segundo cuadro describen el mismo sueldo y ninguna es incorrecta**, pero se usan indistintamente en discusiones donde el número importa. Un debate sobre costes laborales que cite 2.000 € y otro sobre poder adquisitivo que cite 1.570 € están hablando de la misma persona con una diferencia de 1.060 €. **El 40,3 % del coste laboral no pasa por las manos de la empresa ni del trabajador**: va directamente de la nómina a Hacienda y a la Seguridad Social.",
            "**Y esa invisibilidad tiene consecuencias que exceden a la contabilidad.** La ficha 18.07 explicaba por qué el IBI genera más rechazo que impuestos mayores: porque se ve. Aquí opera el mecanismo inverso. **La cotización patronal es probablemente la mayor carga fiscal asociada a un trabajador y prácticamente nadie la percibe como propia**, porque nunca aparece en su nómina como algo que haya cobrado y perdido. Es el caso más limpio de ilusión fiscal del sistema español, y la razón de que la OCDE mida y compare la cuña fiscal en porcentaje del coste total y no del bruto.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el descuento de efectos que borró un riesgo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa tiene **100.000 €** en efectos comerciales a 90 días y necesita liquidez. Los **descuenta** en el banco, que le anticipa **97.000 €** reteniendo 3.000 € de intereses y comisiones. El contable registra un cobro: da de baja los clientes por 100.000 €, carga bancos por 97.000 € y lleva 3.000 € a gastos financieros. **El balance queda impecable y profundamente engañoso.**",
            "**El error es dar de baja un derecho cuyo riesgo no se ha transferido.** El descuento comercial es financiación **con recurso**: si al vencimiento el cliente no paga, el banco carga el efecto de vuelta y la empresa responde con su propio dinero. La empresa no ha vendido el crédito, lo ha pignorado. Y la norma es clara: un activo financiero solo se da de baja cuando **se transfieren sustancialmente los riesgos y beneficios**, cosa que aquí no ocurre.",
            "**El asiento correcto mantiene las dos posiciones abiertas**: el derecho pasa a la cuenta **4311, efectos comerciales descontados**, y nace una deuda en la **5208, deudas por efectos descontados**, por el nominal anticipado. Al vencimiento, si el cliente paga, se cancelan ambas. Si no paga, el efecto se devuelve y el derecho vuelve a clientes, ahora **de dudoso cobro**. La empresa lleva así en su balance lo que realmente tiene: **un cobro pendiente y una deuda con el banco**.",
            "**La diferencia entre ambos tratamientos es toda la información relevante.** Con el asiento erróneo, el balance muestra menos clientes, menos endeudamiento y una tesorería sana; un analista concluiría que la empresa cobra bien y no depende del banco. Con el correcto, se ve que **financia su circulante descontando papel y que conserva el riesgo de impago de sus clientes**. Las dos versiones tienen el mismo importe de tesorería y cuentan historias opuestas sobre la solidez de la empresa, que es exactamente lo que las normas de baja de activos financieros existen para impedir.",
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
            { t: "Registrar el descuento de efectos como un cobro", d: "Es financiación con recurso: si el cliente no paga, el banco devuelve el efecto. El derecho pasa a la cuenta 4311 y nace una deuda en la 5208. Contabilizarlo como cobro borra del balance un riesgo vivo y reduce el endeudamiento aparente." },
            { t: "Confundir proveedores con acreedores", d: "El criterio no es el importe ni el plazo sino la relación con la actividad: es proveedor quien suministra bienes o servicios del objeto propio de la empresa, y acreedor quien suministra lo demás. La misma factura va a una cuenta o a otra según qué haga quien la recibe." },
            { t: "Llevar solo la cuota del trabajador a la cuenta 476", d: "Recoge las dos: la descontada al trabajador y la patronal. En el ejemplo son 760 €, no 130 €. Es el fallo más común del asiento de nómina, y suele venir acompañado de olvidar la cuenta 642 en el debe." },
            { t: "Tratar las retenciones de IRPF como gasto de la empresa", d: "Son dinero del trabajador que la empresa ingresa por él en Hacienda, cuenta 4751. El gasto de la empresa es el salario bruto más la cotización patronal, no lo que retiene por cuenta ajena." },
            { t: "Compensar saldos deudores y acreedores del mismo tercero", d: "No procede salvo que exista derecho legal de compensación. Netear un cliente que también es proveedor reduce a la vez activo y pasivo, y oculta la magnitud real de ambas posiciones." },
            { t: "Estimar a la baja el deterioro de créditos comerciales", d: "Es la manera más sencilla y menos visible de inflar un resultado, porque la estimación es discrecional y su efecto pasa por la cuenta 694. Por eso es una de las áreas donde más se concentra el trabajo de auditoría." },
            { t: "Usar el salario bruto para comparar costes laborales", d: "El coste de empresa incluye la cotización patronal: 2.630 € frente a 2.000 € en el ejemplo. Comparar brutos entre países o entre empresas ignora justamente la parte que más varía según el sistema de cotización." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "D.1 mide el coste de empresa, no el bruto ni el líquido",
          texto:
            "La **remuneración de asalariados D.1** del SEC, que estudia la ficha 13.04, se descompone en **D.11, sueldos y salarios**, y **D.12, cotizaciones sociales a cargo de los empleadores**. Es decir: la contabilidad nacional mide exactamente **el coste de empresa —los 2.630 € del ejemplo—** y no el salario bruto ni el líquido. Y hay un detalle que sorprende la primera vez: **D.11 se registra en términos brutos, antes de retenciones y de cotizaciones del trabajador**, porque desde el punto de vista económico esas cantidades son renta del asalariado que después se transfiere a las administraciones, y el SEC las recoge más adelante como **D.51 impuestos sobre la renta** y **D.61 cotizaciones sociales**. La consecuencia práctica es que **la misma nómina aparece en tres sitios distintos de la secuencia de cuentas**: como coste en la cuenta de explotación, como renta del hogar en la de asignación de renta primaria y como transferencia al Estado en la de distribución secundaria. Quien compare una cifra de «salarios» de fuente estadística con una nómina real tiene que saber cuál de las tres está mirando.",
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
              q: "Salario bruto 2.000 €, retención 300 €, cotización del trabajador 130 € y patronal 630 €. ¿Cómo queda el asiento?",
              a: "Al debe, 640 por 2.000 € y 642 por 630 €. Al haber, 4751 por 300 €, 476 por 760 € —las dos cotizaciones juntas— y bancos por 1.570 €. Cuadra en 2.630 €, que es el coste de empresa.",
            },
            {
              q: "¿Cuánto vale la cuña fiscal en ese caso y por qué importa que sea invisible?",
              a: "1.060 €, el 40,3 % del coste de empresa. No pasa por las manos de la empresa ni del trabajador: va de la nómina directamente a Hacienda y a la Seguridad Social. La cotización patronal es probablemente la mayor carga asociada a un trabajador y casi nadie la percibe como propia, porque nunca aparece como algo que haya cobrado y perdido.",
            },
            {
              q: "Una empresa descuenta 100.000 € en efectos y recibe 97.000 €. ¿Puede dar de baja los clientes?",
              a: "No. El descuento es financiación con recurso: si el cliente no paga, el banco devuelve el efecto. El derecho pasa a la cuenta 4311 y nace una deuda en la 5208 por el nominal anticipado. Darlo de baja borraría del balance un riesgo vivo y reduciría el endeudamiento aparente.",
            },
            {
              q: "¿Qué distingue a un proveedor de un acreedor por prestación de servicios?",
              a: "La relación con la actividad, no el importe ni el plazo. Es proveedor quien suministra bienes o servicios que forman parte del objeto propio de la empresa; acreedor, quien suministra lo demás. La misma factura va a una cuenta o a otra según a qué se dedique quien la recibe.",
            },
            {
              q: "¿Qué magnitud del sueldo mide la remuneración de asalariados D.1 del SEC?",
              a: "El coste de empresa: D.11 sueldos y salarios más D.12 cotizaciones a cargo del empleador, los 2.630 € del ejemplo. Además D.11 se registra en bruto, antes de retenciones y cotizaciones del trabajador, que reaparecen después como D.51 y D.61 en la distribución secundaria.",
            },
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
              q: "En un asiento de nómina con 130 € de cotización del trabajador y 630 € de cotización patronal, ¿qué importe va a la cuenta 476?",
              opciones: [
                "130 €, que es lo retenido al trabajador y se ingresa por él",
                "630 €, la parte que constituye gasto de la empresa",
                "0 €: las cotizaciones se registran en la cuenta 4751 junto con las retenciones",
                "760 €: la cuenta recoge las dos cotizaciones, la del trabajador y la de la empresa",],
              correcta: 3,
              porque: [
                "Esa es solo una de las dos partes: falta la cuota patronal, que tiene el mismo acreedor.",
                "También falta la del trabajador, que la empresa ingresa por él en el mismo organismo.",
                "La 4751 es para las retenciones de IRPF, cuyo acreedor es Hacienda y no la Seguridad Social.",
                "Son dos conceptos de naturaleza distinta con el mismo acreedor, y por eso comparten cuenta.",],
            },
            {
              q: "Una empresa descuenta efectos por 100.000 € y recibe 97.000 €. ¿Cómo se registra?",
              opciones: [
                "Como cobro: baja de clientes por 100.000 € y 3.000 € a gastos financieros",
                "Manteniendo el derecho en la cuenta 4311 y reconociendo una deuda en la 5208",
                "Como venta del crédito, reconociendo una pérdida de 3.000 €",
                "Como anticipo de clientes, hasta que el efecto venza",],
              correcta: 1,
              porque: [
                "Daría de baja un derecho cuyo riesgo de impago sigue siendo de la empresa.",
                "Es financiación garantizada con el papel, no una realización del crédito.",
                "No hay venta: en el descuento con recurso no se transfieren sustancialmente los riesgos.",
                "El anticipo de clientes recoge cobros por operaciones aún no realizadas, que no es el caso.",],
            },
            {
              q: "Una asesoría factura a un fabricante de muebles. ¿En qué cuenta se registra la deuda?",
              opciones: [
                "En proveedores (400), por tratarse de un suministro recurrente",
                "Depende del importe: proveedores si supera el umbral de relevancia",
                "En deudores varios (440), al no ser una operación comercial",
                "En acreedores por prestación de servicios (410): no es del objeto propio de la actividad",],
              correcta: 3,
              porque: [
                "La recurrencia no es el criterio: lo decisivo es si el bien o servicio pertenece al objeto de la actividad.",
                "El importe es irrelevante para esta clasificación.",
                "Los deudores son cuentas de activo: aquí hay una obligación de pago, no un derecho de cobro.",
                "El fabricante de muebles compra madera a proveedores; la asesoría es acreedor.",],
            },
            {
              q: "¿Qué magnitud debe usarse para comparar costes laborales entre empresas o países?",
              opciones: [
                "El coste de empresa, que incluye la cotización patronal",
                "La media entre bruto y líquido, para neutralizar diferencias fiscales",
                "El salario bruto, que figura en el contrato y es homogéneo",
                "El líquido percibido, que mide el poder adquisitivo real",],
              correcta: 0,
              porque: [
                "En el ejemplo, 2.630 € frente a los 2.000 € del bruto, y es lo que mide el D.1 del SEC.",
                "Esa media no corresponde a ninguna magnitud económica identificable.",
                "El bruto ignora la cotización patronal, que es justamente la parte que más varía entre sistemas.",
                "El líquido mide otra cosa: lo que recibe el trabajador, no lo que le cuesta a quien lo emplea.",],
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
            { t: "PGC, grupos 4 y 64 y norma de registro y valoración 9.ª", d: "Las cuentas de acreedores y deudores, las de personal y la regla de baja de activos financieros que decide el tratamiento del descuento de efectos." },
            { t: "Consultas del ICAC sobre descuento comercial y factoring", d: "La frontera entre financiación con recurso y sin recurso, que es la que determina si el crédito se da de baja. El factoring sin recurso sí permite la baja, y compararlos aclara el criterio." },
            { t: "OCDE, Taxing Wages", d: "Mide y compara la cuña fiscal en porcentaje del coste laboral total para distintos tipos de hogar. Es la fuente que hace comparables internacionalmente las cifras del ejemplo numérico." },
            { t: "Omeñaca, Contabilidad general, capítulos de operaciones con clientes y personal", d: "El tratamiento práctico con casos resueltos, incluido el circuito completo de efectos: aceptación, descuento, vencimiento, impago y renegociación." },
          ],
        },
      ],
    },
  ],
};
