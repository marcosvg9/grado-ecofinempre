/* Ficha 17.05 — IVA I: hecho imponible, devengo y base imponible. */

export default {
  codigo: "17.05",
  titulo: "IVA I: hecho imponible, devengo y base imponible",
  nivel: 2,
  bloque: "Fiscalidad española",
  tiempo: "4 h",
  nucleo:
    "El IVA lo ingresa el empresario y lo soporta el consumidor, y esa disociación entre quien paga y quien tributa explica casi todo lo demás: por qué el impuesto repercutido nunca fue ingreso de la empresa, por qué se debe aunque el cliente no haya pagado, y por qué grava incluso a otros impuestos.",
  requiere: "17.01 El tributo · 10.05 Imposición óptima",
  abre: "17.06 IVA II · 5.11 Contabilidad del IVA",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El IVA es un impuesto **indirecto, real, objetivo e instantáneo** que grava el consumo, pero lo grava por un camino indirecto: en lugar de perseguir al consumidor, **hace de cada empresario de la cadena un recaudador**. Cada uno repercute el impuesto sobre sus ventas, deduce el que soportó en sus compras e ingresa la diferencia. El resultado es que la suma de lo ingresado por toda la cadena equivale a aplicar el tipo al precio final, y que **la carga acaba entera sobre quien no puede deducir**: el consumidor final.",
            "En esa arquitectura hay una distinción entre **contribuyente y sujeto pasivo** que la ficha 17.01 presentó en abstracto y que aquí se ve en estado puro. El sujeto pasivo —quien declara, quien responde ante la Administración, quien puede ser sancionado— es el empresario. El contribuyente que soporta económicamente el tributo es el consumidor. **Casi todos los errores prácticos del IVA nacen de confundir esos dos papeles**, y el más caro de todos es creer que el impuesto repercutido y cobrado es dinero de la empresa.",
            "El **hecho imponible** tiene tres modalidades. Las **operaciones interiores**, es decir, entregas de bienes y prestaciones de servicios realizadas por empresarios o profesionales en el desarrollo de su actividad; las **adquisiciones intracomunitarias**, que gravan en destino las compras a otro Estado miembro; y las **importaciones**, que a diferencia de las dos anteriores se exigen a cualquiera, sea empresario o no. Que las compras a terceros países y a otros Estados miembros tributen por vías distintas no es un capricho: es la consecuencia de que dentro de la Unión no haya aduanas.",
            "Antes de preguntarse si una operación está exenta hay que preguntarse si está **sujeta**, y son cosas distintas con consecuencias distintas. La **no sujeción** significa que el hecho ni siquiera entra en el ámbito del impuesto: la transmisión de una unidad económica autónoma, las entregas de muestras sin valor comercial, los servicios prestados por un trabajador por cuenta ajena. La **exención** significa que sí entra pero la ley la libera del gravamen. La diferencia parece formal y no lo es en absoluto, porque la exención arrastra consecuencias en el derecho a deducir que la ficha 17.06 desarrolla.",
            "La **localización** decide qué Estado grava y es la parte del impuesto que más ha cambiado en la última década. En las entregas de bienes la regla suele seguir al bien: donde se pone a disposición, o donde arranca el transporte. En los **servicios** hay dos regímenes según el destinatario: si es empresario, se localiza en su sede —de ahí la **inversión del sujeto pasivo**, por la que el propio destinatario se autorrepercute el impuesto—; si es consumidor final, la regla general es la sede del prestador, con excepciones cada vez más numerosas —servicios electrónicos, telecomunicaciones, inmuebles— que empujan hacia el **gravamen en destino**. La razón de fondo es evitar que un proveedor se instale en el Estado de tipo más bajo para vender a toda la Unión.",
            "El **devengo** es el momento en que nace la obligación, y **no es el momento del cobro**. En las entregas de bienes, la puesta a disposición del adquirente; en las prestaciones de servicios, cuando se prestan; en las operaciones de tracto sucesivo, cuando resulte exigible cada parte del precio. Y hay una regla que sorprende a quien la descubre tarde: **los pagos anticipados devengan el impuesto en el momento del cobro**, por la parte anticipada. De la separación entre devengo y cobro nace el problema práctico más citado del impuesto, que es tener que ingresar el IVA de facturas que aún no se han cobrado; el **régimen especial del criterio de caja** existe precisamente para eso, aunque su adopción ha sido escasa porque obliga también a retrasar la deducción del soportado.",
            "La **base imponible** es el importe total de la contraprestación, y su definición es más ancha de lo que se supone. Incluye **comisiones, portes, seguros, envases y embalajes** y, sobre todo, **los tributos que recaigan sobre las mismas operaciones**, con la sola excepción del propio IVA. Eso significa que **el IVA se calcula también sobre los Impuestos Especiales**: en un litro de carburante o en una botella de licor, el IVA grava un precio que ya lleva impuesto dentro. No es un error de diseño ni una anomalía española, sino la regla general de la directiva europea.",
            "Quedan fuera de la base los **descuentos y bonificaciones** concedidos previa o simultáneamente, los **intereses por aplazamiento** posteriores a la entrega y los **suplidos**, que son cantidades pagadas en nombre y por cuenta del cliente con factura a su nombre —una tasa, un arancel— y que por tanto no son contraprestación del proveedor sino un simple anticipo de tesorería. Por último, la base puede **modificarse** después: por devoluciones, descuentos posteriores, resolución de la operación y, muy señaladamente, por **créditos incobrables o afectados por un concurso**, mediante un procedimiento tasado, con plazos rígidos y requisitos formales estrictos que conviene conocer antes de necesitarlos.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Cuestión", "Regla", "Por qué importa"],
          filas: [
            { nom: "¿Está sujeta?", sub: "Antes que la exención, siempre.", cols: ["Empresario, en el ejercicio de su actividad", "La no sujeción y la exención tienen efectos distintos"] },
            { nom: "¿Dónde tributa?", sub: "Localización del hecho imponible.", cols: ["Bienes: donde se ponen a disposición. Servicios: según el destinatario", "Decide qué Estado cobra y quién declara"] },
            { nom: "¿Cuándo se debe?", sub: "Devengo, no cobro.", cols: ["Puesta a disposición o prestación; los anticipos, al cobrarse", "Se ingresa aunque el cliente no haya pagado"] },
            { nom: "¿Sobre cuánto?", sub: "Contraprestación total.", cols: ["Incluye portes, envases y otros tributos; excluye descuentos y suplidos", "El IVA grava también a los Impuestos Especiales"] },
            { nom: "¿Puede rectificarse?", sub: "Modificación de la base.", cols: ["Devoluciones, impagados y concurso, con plazos tasados", "Perder el plazo equivale a perder el derecho"] },
          ],
          nota: "Las cinco preguntas se hacen **en este orden** y ninguna se puede saltar. Discutir el tipo aplicable antes de haber resuelto la localización es el atajo que más liquidaciones erróneas produce.",
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
            { nom: "Base imponible", sub: "Contraprestación total menos lo que no forma parte de ella.", cols: ["$\\mathrm{BI} = P + \\text{accesorios} + \\text{otros tributos} - \\text{descuentos}$"] },
            { nom: "Cuota repercutida", sub: "El tipo se aplica sobre esa base.", cols: ["$\\mathrm{IVA} = t \\cdot \\mathrm{BI}$"] },
            { nom: "Liquidación del periodo", sub: "Lo que se ingresa no es lo repercutido.", cols: ["$\\mathrm{Ingreso} = \\mathrm{IVA}_{rep} - \\mathrm{IVA}_{sop}$"] },
            { nom: "Neutralidad en la cadena", sub: "Cada eslabón ingresa el impuesto de su valor añadido.", cols: ["$\\sum_i t\\,(V_i - C_i) = t \\cdot P_{final}$"] },
            { nom: "Base a partir de un precio con IVA", sub: "El error de multiplicar por $1-t$ y volver atrás.", cols: ["$\\mathrm{BI} = \\dfrac{P_{con\\ IVA}}{1+t}$"] },
            { nom: "Efecto de un Impuesto Especial", sub: "El IVA se calcula sobre el precio que ya lo incluye.", cols: ["$\\mathrm{IVA} = t\\,(P + \\mathrm{IE})$"] },
          ],
          nota: "La cuarta línea es la que da nombre al impuesto y merece comprobarse una vez con lápiz: **la suma de lo que ingresa cada eslabón por su valor añadido es exactamente el tipo aplicado al precio final**. De ahí que el IVA sea neutral respecto del número de eslabones, a diferencia de un impuesto en cascada.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: qué entra y qué no en la base imponible",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa factura una partida de bebidas alcohólicas. **Precio del producto 10.000 €**, **envases y embalajes 300 €**, **transporte a cargo del vendedor 500 €**, **descuento por pronto pago 200 €**, **Impuesto Especial repercutido 1.200 €** y una **tasa de 150 €** pagada en nombre del cliente, con factura a nombre de este. Tipo del 21 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "¿Forma parte de la base?", "Importe"],
          filas: [
            ["Precio del producto", "Sí, es la contraprestación principal", "10.000 €"],
            ["Envases y embalajes", "Sí, prestación accesoria", "300 €"],
            ["Transporte a cargo del vendedor", "Sí, gasto accesorio repercutido", "500 €"],
            ["Descuento por pronto pago", "No, minora la base", "−200 €"],
            ["Impuesto Especial", "Sí, tributo sobre la misma operación", "1.200 €"],
            ["Tasa pagada por cuenta del cliente", "No, es un suplido", "0 €"],
            { celdas: ["Base imponible", "10.000 + 300 + 500 − 200 + 1.200", "11.800 €"], clase: "total" },
            ["Cuota de IVA", "11.800 × 21 %", "2.478 €"],
            { celdas: ["Total de la factura", "11.800 + 2.478 + 150 de suplido", "14.428 €"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Dos lecturas del resultado.** La primera: de esos 2.478 € de IVA, **252 € son IVA sobre el Impuesto Especial** (1.200 × 21 %). Es un impuesto calculado sobre otro impuesto, y no por descuido del legislador: la directiva europea ordena expresamente incluir en la base todos los tributos que recaigan sobre la misma operación salvo el propio IVA. Quien quiera medir la carga fiscal total de un producto gravado —carburantes, tabaco, alcohol— tiene que sumar el efecto compuesto, no los dos tipos por separado.",
            "La segunda: **el suplido de 150 € viaja en la factura pero no en la base**, y esa es exactamente la prueba de que se ha entendido el concepto. Un suplido no es contraprestación del proveedor sino un pago hecho en nombre del cliente, con factura a nombre de este, que se le anticipa y se le reclama sin margen. Si esa misma tasa se hubiera pagado en nombre propio y repercutido después, ya no sería un suplido: sería un gasto de la actividad, entraría en la base y llevaría IVA. **El mismo desembolso tributa o no según a nombre de quién esté el papel.**",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el autónomo que se gastó el IVA",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un profesional factura durante el trimestre 40.000 € más 8.400 € de IVA y soporta 6.000 € más 1.260 € de IVA en sus compras. Cobra íntegro lo facturado. Ve entrar 48.400 € en la cuenta, considera que ha tenido un trimestre excelente y **planifica su tesorería contando con ese saldo**. En abril debe ingresar 8.400 − 1.260 = **7.140 €** y descubre que no los tiene.",
            "No ha ocurrido nada extraordinario ni ha cometido ningún fraude: ha cometido el error conceptual central del impuesto. **Los 8.400 € nunca fueron suyos.** El PGC lo expresa sin ambigüedad situando el IVA repercutido en el grupo 4 —la cuenta 477, un pasivo frente a la Hacienda Pública— y no en el grupo 7 de ingresos. Su cifra de negocios del trimestre fue 40.000 €; los 8.400 € fueron dinero ajeno que recaudó como sujeto pasivo y que custodiaba hasta la liquidación.",
            "**El problema empeora cuando además hay impagados.** Si de esos 40.000 € hubiera cobrado solo la mitad, seguiría debiendo los 8.400 € completos, porque el devengo se produjo con la prestación del servicio y no con el cobro. Tendría que financiar con recursos propios el impuesto de una venta que no ha cobrado. Para eso existen dos salidas, y ninguna es automática: la **modificación de la base imponible** por crédito incobrable, que exige requisitos formales y **plazos rígidos que caducan**, y el **régimen especial del criterio de caja**, que hay que solicitar y que retrasa también la deducción del soportado.",
            "**La regla de conducta que se deriva es simple y muy poco seguida**: separar el IVA repercutido de la tesorería operativa en el mismo momento en que se cobra la factura, y llevar un control de los plazos de impago desde el vencimiento, no desde el momento en que se pierde la esperanza de cobrar. Quien trata el IVA cobrado como ingreso disponible está financiando su actividad con dinero de la Hacienda Pública, y ese préstamo tiene recargos, intereses y sanciones asociados.",
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
            { t: "Tratar el IVA repercutido como ingreso de la empresa", d: "No lo es en ningún sentido: ni contable —va a la cuenta 477, un pasivo, y no al grupo 7— ni económico. La cifra de negocios es la base, no el total facturado. Es el error que arruina la tesorería de más autónomos y el que está detrás del caso práctico." },
            { t: "Creer que el IVA se debe cuando se cobra", d: "Se devenga con la entrega o la prestación, salvo que se haya solicitado el régimen de criterio de caja. Una factura emitida y no cobrada genera obligación de ingresar. La vía para corregirlo es la modificación de la base por crédito incobrable, con plazos que caducan." },
            { t: "Confundir no sujeción con exención", d: "La no sujeción deja la operación fuera del impuesto; la exención la mete dentro y luego la libera. La distinción parece formal pero decide el derecho a deducir, que es donde el IVA se juega su neutralidad, tal como desarrolla la ficha 17.06." },
            { t: "Excluir de la base los gastos accesorios", d: "Portes, envases, seguros y comisiones forman parte de la contraprestación aunque se detallen en líneas separadas de la factura. Facturarlos aparte no los saca de la base: solo los hace más visibles." },
            { t: "No incluir los Impuestos Especiales en la base", d: "Todos los tributos que recaigan sobre la misma operación forman parte de la base, con la única excepción del propio IVA. En el ejemplo, eso son 252 € de IVA calculados sobre otro impuesto." },
            { t: "Llamar suplido a cualquier gasto que se repercute al cliente", d: "Solo lo es lo pagado en nombre y por cuenta del cliente, con factura a nombre de este y sin margen. Si la factura está a nombre del proveedor, es un gasto de su actividad: entra en la base y lleva IVA." },
            { t: "Calcular la base restando el porcentaje al precio con IVA", d: "De un precio de 121 € al 21 % la base es 121 / 1,21 = 100 €, no 121 × 0,79 = 95,59 €. El error es pequeño en una factura y sistemático en una hoja de cálculo con miles de líneas." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "D.211 y la diferencia entre precios básicos y precios de mercado",
          texto:
            "El IVA es **D.211** en el SEC, la partida más importante de los impuestos sobre los productos, y su tratamiento explica una distinción que en la ficha 13.05 puede parecer puramente terminológica. El **valor añadido bruto se mide a precios básicos**, es decir, sin los impuestos sobre productos, porque el productor no se queda con ellos; el **PIB se mide a precios de mercado**, que sí los incluyen. De ahí la identidad que hay que tener presente al leer cualquier cuadro macroeconómico: **PIB a precios de mercado = VAB a precios básicos + impuestos netos sobre los productos**. Y de ahí también una consecuencia práctica poco intuitiva: **una subida del tipo de IVA eleva el PIB nominal sin que se haya producido ni un bien más**, mientras que el deflactor recoge el cambio de precios. Comparar PIB nominal entre países o entre años sin atender a los cambios de imposición indirecta es comparar magnitudes que no son homogéneas.",
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
              q: "Precio 10.000 €, envases 300 €, transporte 500 €, descuento 200 €, Impuesto Especial 1.200 € y una tasa de 150 € pagada por cuenta del cliente. ¿Cuál es la base imponible y la cuota al 21 %?",
              a: "Base 11.800 € y cuota 2.478 €. Los accesorios y el Impuesto Especial entran, el descuento resta y el suplido queda fuera. La factura total es 14.428 €, porque el suplido se reclama al cliente sin IVA.",
            },
            {
              q: "¿Por qué el IVA se calcula también sobre el Impuesto Especial?",
              a: "Porque la base imponible incluye todos los tributos que recaigan sobre la misma operación, con la sola excepción del propio IVA. En el ejemplo son 252 € de IVA sobre otro impuesto, y por eso la carga fiscal de un producto gravado no se obtiene sumando los dos tipos por separado.",
            },
            {
              q: "Un autónomo factura 40.000 € más 8.400 € de IVA, lo cobra todo y se lo gasta. ¿Qué ha hecho mal?",
              a: "Ha tratado como ingreso lo que era un pasivo. Su cifra de negocios fue 40.000 €; los 8.400 € eran dinero ajeno recaudado en nombre de la Hacienda Pública, que contablemente vive en la cuenta 477. Al liquidar deberá ingresar la diferencia con el soportado, la tenga o no.",
            },
            {
              q: "¿Qué distingue a un suplido de un gasto que se repercute al cliente?",
              a: "El nombre que figura en la factura del tercero. Si está a nombre del cliente y se paga por su cuenta sin margen, es un suplido y no forma parte de la base. Si está a nombre del proveedor, es un gasto de su actividad, entra en la base y lleva IVA aunque se repercuta al mismo importe.",
            },
            {
              q: "¿Por qué una subida del tipo de IVA eleva el PIB nominal?",
              a: "Porque el PIB se mide a precios de mercado, que incluyen los impuestos sobre productos, mientras que el valor añadido se mide a precios básicos, que no los incluyen. Sube el agregado sin que se haya producido ninguna unidad adicional, y por eso las comparaciones de PIB nominal exigen atender a los cambios de imposición indirecta.",
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
              q: "Un empresario emite una factura en marzo y la cobra en septiembre. ¿Cuándo se devenga el IVA?",
              opciones: [
                "En el momento de emitir la factura, sea cual sea la fecha de la operación",
                "A elección del sujeto pasivo, si lo hace constar en la factura",
                "En marzo, con la entrega o la prestación, salvo régimen de criterio de caja",
                "En septiembre, cuando entra el dinero",],
              correcta: 2,
              porque: [
                "La factura documenta la operación pero no la desplaza en el tiempo; el devengo lo fija el hecho, no el papel.",
                "El devengo es una regla legal imperativa, no una opción que el sujeto pasivo pueda ejercer factura a factura.",
                "El devengo sigue a la operación, no al pago, y de ahí que haya que ingresar el IVA de facturas todavía no cobradas.",
                "El cobro solo marca el devengo en el régimen especial de criterio de caja, que hay que solicitar y que retrasa también la deducción del soportado.",],
            },
            {
              q: "Una factura incluye 500 € de transporte a cargo del vendedor y 150 € de una tasa pagada en nombre del cliente. ¿Qué entra en la base imponible?",
              opciones: [
                "Ninguno de los dos, porque no son la contraprestación principal",
                "La tasa, por ser un tributo sobre la operación; el transporte se factura aparte",
                "Los dos, porque ambos se repercuten al cliente en la misma factura",
                "El transporte, que es un gasto accesorio; la tasa es un suplido y queda fuera",],
              correcta: 3,
              porque: [
                "Los gastos accesorios forman parte de la contraprestación aunque se detallen en líneas separadas.",
                "La tasa sería un tributo sobre la operación solo si el proveedor la soportara en nombre propio; aquí la anticipa por cuenta ajena.",
                "Aparecer en la misma factura no es el criterio: lo decisivo es a nombre de quién está el pago al tercero.",
                "El suplido se paga en nombre del cliente y con factura a su nombre, así que no es contraprestación del proveedor.",],
            },
            {
              q: "¿Qué diferencia hay entre una operación no sujeta y una exenta?",
              opciones: [
                "La no sujeta permite deducir el IVA soportado y la exenta nunca lo permite",
                "La exenta no se declara y la no sujeta sí",
                "Ninguna en la práctica: en ambos casos no se repercute IVA",
                "La no sujeta queda fuera del ámbito del impuesto; la exenta entra y la ley la libera del gravamen",],
              correcta: 3,
              porque: [
                "Hay exenciones plenas que sí conservan el derecho a deducir, como las exportaciones: el enunciado generaliza mal.",
                "La obligación de declarar no es el criterio que separa ambas figuras ni funciona en ese sentido.",
                "Coinciden en que no se repercute, pero divergen en las consecuencias, que es lo que de verdad importa.",
                "Y esa diferencia decide después el derecho a deducir, que es donde el impuesto se juega su neutralidad.",],
            },
            {
              q: "Un producto tiene un precio de 10.000 € y soporta 1.200 € de Impuesto Especial. Al 21 %, ¿sobre qué se calcula el IVA?",
              opciones: [
                "Sobre 11.200 €, porque los tributos sobre la operación forman parte de la base",
                "Sobre 11.200 €, pero a un tipo reducido por tratarse de un consumo ya gravado",
                "Sobre 10.000 €, porque un impuesto no puede gravar a otro impuesto",
                "Sobre 10.000 €, aplicando después el Impuesto Especial al resultado",],
              correcta: 0,
              porque: [
                "Son 2.352 € de cuota, de los cuales 252 € se calculan sobre el Impuesto Especial.",
                "El tipo no se altera por que el producto soporte otro impuesto; no existe esa regla.",
                "Sí puede, y de hecho la directiva europea lo ordena: solo el propio IVA queda excluido de su base.",
                "El orden importa y es el contrario: el Impuesto Especial se integra en la base sobre la que después se aplica el IVA.",],
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
            { t: "Ley 37/1992 del IVA, títulos I a V", d: "Hecho imponible y no sujeción en los artículos 4 a 7, localización en los 68 a 70, devengo en el 75 y base imponible en los 78 a 80, incluida la modificación por créditos incobrables. Es la parte de la ley que más conviene leer directamente." },
            { t: "Directiva 2006/112/CE del Consejo", d: "El IVA español es la transposición de esta directiva, y muchas dudas se resuelven antes en el texto europeo que en el nacional. Enlaza con la ficha 17.10 sobre armonización." },
            { t: "Agencia Tributaria, Manual práctico del IVA", d: "Contiene los tipos vigentes, los supuestos de inversión del sujeto pasivo y el procedimiento detallado para modificar la base imponible, con sus plazos, que son la parte que más caduca." },
            { t: "OCDE, Consumption Tax Trends", d: "Compara tipos, bases y eficiencia recaudatoria del IVA entre países. Introduce el concepto de brecha del IVA, que mide cuánto se deja de recaudar respecto de lo teórico y que enlaza con la economía sumergida." },
          ],
        },
      ],
    },
  ],
};
