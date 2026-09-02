/* Ficha 5.11 — Contabilidad del IVA: soportado, repercutido y prorrata. */

export default {
  codigo: "5.11",
  titulo: "Contabilidad del IVA: soportado, repercutido y prorrata",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "3 h",
  nucleo:
    "El IVA no es ni gasto ni ingreso de la empresa: es dinero ajeno que se recauda y se ingresa, y por eso vive entero en el grupo 4 y nunca toca la cuenta de resultados. Salvo cuando no es deducible, y entonces deja de ser dinero ajeno para convertirse en coste: mayor valor del bien que se compró o gasto del ejercicio.",
  requiere: "5.02 La partida doble · 17.05 IVA I",
  abre: "5.14 Cuentas a cobrar y a pagar · 17.06 IVA II",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La contabilización del IVA es la traducción exacta de lo que la ficha 17.05 explica desde el lado jurídico: **el empresario es sujeto pasivo pero no contribuyente**. Recauda un impuesto que soporta el consumidor final y lo ingresa en Hacienda. El Plan General de Contabilidad recoge esa realidad de la manera más contundente posible: **sitúa todo el IVA en el grupo 4, el de acreedores y deudores, y no lo deja entrar ni en el grupo 6 de gastos ni en el 7 de ingresos**.",
            "Las cuentas son cuatro y conviene fijarlas. La **472, Hacienda Pública IVA soportado**, es un **derecho de crédito** frente a la Administración: lo que la empresa ha pagado en sus compras y podrá deducir. La **477, Hacienda Pública IVA repercutido**, es una **obligación**: lo que ha cobrado a sus clientes por cuenta de Hacienda. Al liquidar, ambas se cancelan entre sí y la diferencia se lleva a la **4750, Hacienda Pública acreedora por IVA**, si sale a ingresar, o a la **4700, Hacienda Pública deudora por IVA**, si sale a devolver o compensar.",
            "**Esa mecánica tiene una consecuencia contable que conviene enunciar sin rodeos: la cifra de negocios de una empresa nunca incluye el IVA.** Quien factura 100.000 € más 21.000 € de IVA ha vendido por 100.000 €. Los 21.000 € no aparecen en la cuenta de pérdidas y ganancias por ningún lado: nacen como saldo de la 477 y mueren al liquidar. Es el fundamento contable del caso práctico de la ficha 17.05, el del autónomo que se gastó un dinero que nunca fue suyo.",
            "**El IVA se rompe cuando deja de ser deducible**, y ahí es donde esta ficha tiene su contenido propio. Si el impuesto soportado no puede recuperarse —porque la empresa realiza operaciones exentas sin derecho a deducir, porque el gasto está excluido por ley, o porque solo es deducible en parte por prorrata—, **deja de ser un derecho de crédito y se convierte en coste**. Y la norma de registro y valoración 2.ª es explícita sobre dónde va: forma parte del **precio de adquisición del bien**, no del gasto del período, cuando lo que se compró es un elemento del inmovilizado o una existencia.",
            "La **prorrata** obliga a partir cada cuota soportada en dos. La parte deducible va a la 472 como siempre; la parte no deducible se incorpora al valor del bien o al gasto correspondiente. Durante el ejercicio se aplica el **porcentaje provisional** —el definitivo del año anterior— y en la última declaración se **regulariza** con el definitivo, mediante las cuentas **634, ajustes negativos en la imposición indirecta**, y **639, ajustes positivos**. Son cuentas de gasto e ingreso del grupo 6 y 7, y su existencia es coherente: **lo que se regulariza ya no es dinero ajeno, es coste que se corrige**.",
            "Los **bienes de inversión** tienen su propia regularización, y aquí el PGC toma una decisión que conviene entender. La deducción del año de compra es provisional durante cuatro ejercicios más —nueve en inmuebles—, y si la prorrata definitiva se aparta más de diez puntos hay que ajustar la fracción anual. **Ese ajuste posterior no modifica el valor del activo ya contabilizado**: se lleva a las cuentas 6342 y 6392, como gasto o ingreso del ejercicio en que se produce. La razón es práctica: reabrir el valor de un activo cada año por un ajuste fiscal haría ilegible la amortización.",
            "Conviene añadir la cara del **IVA repercutido que no se cobra**. Si un cliente no paga, la empresa ya ingresó el IVA de esa factura, porque el devengo siguió a la entrega y no al cobro. Recuperarlo exige **modificar la base imponible** por crédito incobrable, y esa modificación se contabiliza rectificando la 477 contra la cuenta de cliente. Es un procedimiento con plazos rígidos, y perderlos significa haber financiado con recursos propios el impuesto de una venta que nunca se cobró.",
            "Cierra el cuadro un régimen que altera todo lo anterior: el **recargo de equivalencia** del comercio minorista. Su proveedor le repercute IVA más un recargo, y con eso queda saldada su relación con el impuesto: **no liquida, no deduce y no usa la 472**. Todo lo soportado es mayor valor de la mercancía. Es el ejemplo más puro de lo que esta ficha sostiene: cuando desaparece el derecho a deducir, el IVA deja de ser una cuenta de balance y pasa a ser, sin más, parte del coste.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Situación", "Dónde va el IVA soportado", "Por qué"],
          filas: [
            { nom: "Deducible al 100 %", sub: "El caso general.", cols: ["Cuenta 472, activo", "Es un derecho de crédito frente a Hacienda"] },
            { nom: "No deducible por exención", sub: "Sanidad, educación, financieras.", cols: ["Mayor valor del bien o gasto", "No se recupera: es coste, no crédito"] },
            { nom: "Parcialmente deducible", sub: "Prorrata.", cols: ["472 la parte deducible; el resto, al valor", "Se parte la cuota en dos naturalezas"] },
            { nom: "Regularización de la prorrata", sub: "Al cierre, con el definitivo.", cols: ["Cuentas 634 y 639", "Corrige un coste ya reconocido"] },
            { nom: "Regularización de bien de inversión", sub: "Durante cuatro o nueve años más.", cols: ["Cuentas 6342 y 6392", "No se reabre el valor del activo"] },
            { nom: "Recargo de equivalencia", sub: "Comercio minorista.", cols: ["Todo al valor de la mercancía", "No hay derecho a deducir ni liquidación"] },
          ],
          nota: "La columna central se lee como una sola idea: **el IVA está en el balance mientras sea recuperable y salta a coste en cuanto deja de serlo**. Todo lo demás es dónde colocar ese coste y en qué momento.",
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
            { nom: "Liquidación del período", sub: "Se cancelan 472 y 477 entre sí.", cols: ["$L = \\mathrm{IVA}_{rep} - \\mathrm{IVA}_{sop,ded}$"] },
            { nom: "Signo del resultado", sub: "Decide qué cuenta se abre.", cols: ["$L > 0 \\Rightarrow 4750$; $L < 0 \\Rightarrow 4700$"] },
            { nom: "Reparto por prorrata", sub: "Dos naturalezas para una misma cuota.", cols: ["$472 = p\\,\\mathrm{IVA}_{sop}$; coste $= (1-p)\\,\\mathrm{IVA}_{sop}$"] },
            { nom: "Cifra de negocios", sub: "Nunca incluye el impuesto.", cols: ["$\\mathrm{INCN} = \\mathrm{Base}$, no $\\mathrm{Base}+\\mathrm{IVA}$"] },
            { nom: "Regularización de bienes de inversión", sub: "A resultados, no al activo.", cols: ["$R = \\dfrac{\\mathrm{IVA}_{sop}\\,(p_0 - p_t)}{5}$"] },
            { nom: "Valor de entrada del inmovilizado", sub: "El IVA no deducible se activa.", cols: ["$V = P + (1-p)\\,\\mathrm{IVA}_{sop}$"] },
          ],
          nota: "La cuarta línea es la que más consecuencias tiene fuera de la contabilidad: **cualquier ratio construido sobre la cifra de negocios cambia si se cuela el IVA dentro**, y con él los umbrales de auditoría, de tamaño de empresa y de acceso a regímenes fiscales.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: liquidación trimestral y el mismo caso con prorrata",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa compra por **60.000 €** más IVA y vende por **100.000 €** más IVA, al 21 %. Vemos primero la liquidación con derecho pleno a deducir y después el mismo trimestre con una **prorrata del 80 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Derecho pleno", "Con prorrata del 80 %"],
          filas: [
            ["IVA repercutido (cuenta 477)", "21.000 €", "21.000 €"],
            ["IVA soportado total", "12.600 €", "12.600 €"],
            ["Deducible (cuenta 472)", "12.600 €", "10.080 €"],
            ["No deducible: mayor valor o gasto", "0 €", "2.520 €"],
            { celdas: ["Liquidación (cuenta 4750)", "8.400 € a ingresar", "10.920 € a ingresar"], clase: "total" },
            { celdas: ["Cifra de negocios", "100.000 €", "100.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**En la columna izquierda no hay ni un euro de IVA en la cuenta de resultados.** Entraron 121.000 € y salieron 72.600 €, pero el resultado del trimestre se calcula con 100.000 € de ingresos y 60.000 € de compras. Los 8.400 € que se ingresan en Hacienda son la diferencia entre dos cuentas de balance que se cancelan: nunca fueron beneficio ni pérdida de nadie.",
            "**En la columna derecha aparecen 2.520 € que sí son coste.** No van a la 472 porque no se van a recuperar: se incorporan al valor de lo comprado —mayor precio de adquisición si es inmovilizado o existencias— o al gasto del ejercicio. La empresa ingresa además 10.920 € en lugar de 8.400 €, porque deduce menos. **La prorrata encarece la compra y aumenta la liquidación a la vez**, que es exactamente lo que la ficha 17.06 describía como la ruptura de la neutralidad del impuesto.",
            "**Sobre los bienes de inversión, un apunte de calendario.** Si esos 12.600 € correspondieran a maquinaria y la prorrata definitiva del año siguiente bajara del 80 % al 60 %, habría que regularizar. Con un IVA soportado de 21.000 € en el bien, el ajuste anual sería (21.000 × 0,80 − 21.000 × 0,60) / 5 = **840 € a devolver** en cada uno de los años del período. **Ese ajuste va a la cuenta 6342 y no al valor del activo**, que ya quedó fijado al darlo de alta: reabrirlo cada año haría ilegibles la amortización y las comparaciones entre ejercicios.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el escáner que vale 121.000 € en el balance",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Volvemos a la clínica dental de la ficha 17.06, ahora desde el libro diario. Compra un escáner por **100.000 € más 21.000 € de IVA**. Su actividad está exenta con exención limitada, así que **no puede deducir nada**. El asiento no lleva cuenta 472: el inmovilizado entra por **121.000 €** con abono a proveedores por el mismo importe.",
            "**A partir de ahí todo lo que se calcula sobre ese activo cambia.** La amortización anual se calcula sobre 121.000 y no sobre 100.000, así que el gasto es un 21 % mayor cada año durante toda la vida útil. El valor neto contable, la base de un eventual deterioro y el resultado de una futura venta se mueven todos sobre la cifra alta. **El IVA no deducible no es un pago que ocurrió una vez: es un coste que se arrastra durante diez años en la cuenta de resultados.**",
            "**La comparación con una empresa industrial hace visible el efecto.** Otra sociedad que comprara el mismo aparato para una actividad gravada lo tendría en balance por 100.000 €, con 21.000 € en la cuenta 472 que recuperaría en la siguiente liquidación. Mismo equipo, misma factura, **dos valores contables distintos y dos cuentas de resultados distintas durante una década**. Ninguna de las dos contabilidades está mal: reflejan una diferencia económica real que la exención produjo.",
            "**Y hay una consecuencia que suele pasar inadvertida.** Como el valor contable de la clínica es mayor, sus ratios de rentabilidad sobre activos son estructuralmente peores que los de una empresa gravada con los mismos equipos y los mismos ingresos. Comparar la rentabilidad de sectores exentos con la de sectores gravados **sin corregir este efecto compara cosas distintas**, y es el mismo problema que la ficha 17.06 señalaba en las estadísticas de inversión del SEC: la exención infla el valor de los activos de quien la disfruta.",
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
            { t: "Contabilizar el IVA repercutido como ingreso", d: "Va a la cuenta 477, un pasivo del grupo 4, y nunca al grupo 7. La cifra de negocios de quien factura 100.000 más 21.000 de IVA es 100.000. Es el error que arruina la tesorería de más autónomos, y el que la ficha 17.05 describe desde el lado jurídico." },
            { t: "Llevar a la 472 el IVA que no se puede deducir", d: "La 472 es un derecho de crédito frente a Hacienda: si no se va a recuperar, no hay crédito. El IVA no deducible es mayor valor del bien adquirido cuando se trata de inmovilizado o existencias, y gasto del ejercicio en los demás casos." },
            { t: "Confundir la 4700 con la 4750", d: "La 4750 es Hacienda Pública acreedora, cuando la liquidación sale a ingresar; la 4700 es deudora, cuando sale a devolver o compensar. Se abre una u otra según el signo, y ambas cancelan los saldos de 472 y 477." },
            { t: "Ajustar el valor del activo al regularizar un bien de inversión", d: "La regularización posterior va a las cuentas 6342 y 6392, como gasto o ingreso del ejercicio en que se produce. El valor del inmovilizado quedó fijado al darlo de alta: reabrirlo cada año haría ilegibles la amortización y las comparaciones." },
            { t: "Dar por perdido el IVA de una factura impagada sin más", d: "Puede recuperarse modificando la base imponible por crédito incobrable, rectificando la 477 contra la cuenta de cliente. Pero los plazos son rígidos, y perderlos supone haber financiado con recursos propios el impuesto de una venta que nunca se cobró." },
            { t: "Usar el porcentaje definitivo de prorrata desde enero", d: "Durante el ejercicio se aplica el provisional, que es el definitivo del año anterior, y en la última declaración se regulariza mediante las cuentas 634 y 639. Presupuestar con el provisional produce sorpresas en el cierre del cuarto trimestre." },
            { t: "Llevar cuenta 472 en recargo de equivalencia", d: "El minorista en ese régimen no deduce ni liquida: el IVA y el recargo soportados son mayor valor de la mercancía. Es el caso extremo de la regla general de la ficha: sin derecho a deducir, el impuesto es coste." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "El SEC hace lo mismo que el PGC, y por la misma razón",
          texto:
            "La contabilidad nacional resuelve el IVA con el criterio idéntico al del Plan General de Contabilidad, lo que no es casualidad: ambos preguntan si el impuesto es realmente un coste de quien lo paga. El **IVA deducible no se registra** en el consumo intermedio ni en la formación de capital del productor, porque lo recupera y no le cuesta nada; por eso el **valor añadido se mide a precios básicos**, sin él. El **IVA no deducible sí forma parte** del valor de los consumos intermedios y de la **P.51g formación bruta de capital fijo** de quien lo soporta, exactamente igual que el PGC lo incorpora al precio de adquisición del activo. **Los 121.000 € del escáner de la clínica son 121.000 € tanto en su balance como en la FBCF que recoge la ficha 13.08.** La coincidencia es útil de recordar porque es rara: en casi todo lo demás —devengo de intereses, arrendamientos, provisiones— los dos sistemas divergen y hay que traducir. Aquí no: la pregunta económica es la misma y la respuesta también.",
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
              q: "Una empresa compra por 60.000 € y vende por 100.000 €, al 21 %. ¿Qué liquidación resulta y cuál es su cifra de negocios?",
              a: "Repercute 21.000 y soporta 12.600, así que ingresa 8.400 € en la cuenta 4750. Su cifra de negocios es 100.000 €: el IVA no entra en la cuenta de resultados por ningún lado, porque nace y muere entre cuentas del grupo 4.",
            },
            {
              q: "Con una prorrata del 80 % sobre 12.600 € de IVA soportado, ¿qué cambia?",
              a: "Solo 10.080 € van a la cuenta 472; los 2.520 € restantes son mayor valor del bien adquirido o gasto del ejercicio. La liquidación sube a 10.920 € porque se deduce menos. La prorrata encarece la compra y aumenta lo que se ingresa a la vez.",
            },
            {
              q: "Una clínica exenta compra un escáner por 100.000 € más 21.000 € de IVA. ¿Por cuánto entra en balance y qué consecuencias tiene?",
              a: "Por 121.000 €, sin cuenta 472, porque no puede deducir. La amortización, el valor neto contable y el resultado de una futura venta se calculan sobre esa cifra, así que el IVA no deducible se arrastra durante toda la vida útil y empeora estructuralmente sus ratios de rentabilidad sobre activos.",
            },
            {
              q: "Un bien de inversión con 21.000 € de IVA se dedujo al 80 % y la prorrata definitiva del año siguiente baja al 60 %. ¿Cómo se contabiliza el ajuste?",
              a: "El ajuste anual es (21.000 × 0,80 − 21.000 × 0,60) / 5 = 840 € a devolver, y se lleva a la cuenta 6342 como gasto del ejercicio. No se modifica el valor del activo, que quedó fijado al darlo de alta.",
            },
            {
              q: "¿Por qué el SEC y el PGC tratan igual el IVA no deducible?",
              a: "Porque ambos preguntan si el impuesto es un coste real de quien lo paga. El deducible no se registra como coste porque se recupera; el no deducible se incorpora al valor de los consumos intermedios y de la formación bruta de capital fijo, igual que el PGC lo activa en el precio de adquisición.",
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
              q: "Una empresa factura 100.000 € más 21.000 € de IVA. ¿Cuál es su cifra de negocios?",
              opciones: [
                "100.000 €, salvo que aplique el régimen de criterio de caja",
                "100.000 €: el IVA nace en la cuenta 477 y nunca entra en resultados",
                "121.000 €, que es lo que efectivamente cobra del cliente",
                "121.000 € si el cliente ha pagado, y 100.000 € si no",],
              correcta: 1,
              porque: [
                "El criterio de caja cambia el momento del devengo, no que el IVA quede fuera de la cifra de negocios.",
                "Por eso el PGC lo sitúa entero en el grupo 4 y no lo deja entrar ni en el 6 ni en el 7.",
                "Lo cobrado incluye dinero ajeno: el IVA se recauda por cuenta de Hacienda, no se vende.",
                "El cobro afecta a la tesorería, no a la naturaleza de la cifra de negocios.",],
            },
            {
              q: "Una entidad con prorrata del 80 % soporta 12.600 € de IVA al comprar maquinaria. ¿Cómo se registra?",
              opciones: [
                "10.080 € en la 472 y 2.520 € como mayor valor de la maquinaria",
                "12.600 € en la cuenta 472, y se regulariza el exceso al cierre",
                "10.080 € en la 472 y 2.520 € como gasto financiero del ejercicio",
                "12.600 € como mayor valor de la maquinaria, sin usar la 472",],
              correcta: 0,
              porque: [
                "La cuota se parte en dos naturalezas distintas, y la no deducible sigue al bien que se compró.",
                "La 472 es un derecho de crédito: no puede recoger una cuota que no se va a recuperar.",
                "No es un gasto financiero ni un gasto del período: siendo inmovilizado, forma parte del precio de adquisición.",
                "Solo la parte no deducible se activa; la deducible sí es un crédito frente a Hacienda.",],
            },
            {
              q: "¿Dónde se lleva la regularización posterior de un bien de inversión por variación de la prorrata?",
              opciones: [
                "A mayor o menor valor del inmovilizado afectado",
                "A las cuentas 6342 o 6392, como gasto o ingreso del ejercicio",
                "A la cuenta 472, ajustando el crédito frente a Hacienda",
                "A reservas, por tratarse de la corrección de un ejercicio anterior",],
              correcta: 1,
              porque: [
                "El valor del activo quedó fijado al darlo de alta y no se modifica por ajustes fiscales posteriores.",
                "Reabrir el valor del activo cada año haría ilegibles la amortización y las comparaciones entre ejercicios.",
                "La 472 recoge el IVA soportado deducible del período, no las regularizaciones de años anteriores.",
                "No es un error de ejercicios anteriores sino un ajuste previsto que corresponde al ejercicio en curso.",],
            },
            {
              q: "Un comerciante minorista en recargo de equivalencia soporta IVA y recargo en sus compras. ¿Qué hace con ellos?",
              opciones: [
                "Los incorpora íntegramente al valor de la mercancía: no deduce ni liquida",
                "Deduce el IVA y activa solo el recargo como mayor valor",
                "Los deduce en su liquidación trimestral como cualquier empresario",
                "Los lleva a la 472 y solicita su devolución al cierre del ejercicio",],
              correcta: 0,
              porque: [
                "Es el caso extremo de la regla de la ficha: sin derecho a deducir, el impuesto es coste.",
                "Tampoco el IVA es deducible aquí: ambos conceptos siguen la misma suerte.",
                "En este régimen no presenta liquidación: su relación con el impuesto queda saldada al comprar.",
                "Sin derecho a deducir no hay crédito frente a Hacienda que registrar ni que solicitar.",],
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
            { t: "PGC, norma de registro y valoración 2.ª y subgrupo 47", d: "El precio de adquisición y el tratamiento del IVA no deducible, junto con las definiciones de las cuentas 472, 477, 4700 y 4750. Es el texto que sostiene toda la ficha y ocupa muy pocas páginas." },
            { t: "Resolución del ICAC sobre inmovilizado material", d: "Precisa qué costes se activan y cuáles no, incluido el tratamiento de los tributos no recuperables. Útil para los casos límite que la norma general no resuelve." },
            { t: "Ley 37/1992 del IVA, artículos 102 a 110", d: "Prorrata general y especial y regularización de bienes de inversión. Leer la norma fiscal junto a la contable muestra por qué el PGC eligió llevar el ajuste a resultados y no al activo." },
            { t: "Agencia Tributaria, Manual práctico del IVA, capítulo de deducciones", d: "El procedimiento de modificación de la base imponible por créditos incobrables, con sus plazos. Es la parte que hay que conocer antes de necesitarla, porque caduca." },
          ],
        },
      ],
    },
  ],
};
