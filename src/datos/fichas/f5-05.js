/* Ficha 5.05 — Existencias y coste de ventas. */

const CUENTAS = {
  "572": { n: "Bancos, c/c a la vista", tipo: "A" },
  "300": { n: "Mercaderías", tipo: "A" },
  "430": { n: "Clientes", tipo: "A" },
  "393": { n: "Deterioro de valor de las mercaderías", tipo: "AC" },
  "100": { n: "Capital social", tipo: "PN" },
  "400": { n: "Proveedores", tipo: "P" },
  "600": { n: "Compras de mercaderías", tipo: "G" },
  "610": { n: "Variación de existencias de mercaderías", tipo: "G" },
  "693": { n: "Pérdidas por deterioro de existencias", tipo: "G" },
  "700": { n: "Ventas de mercaderías", tipo: "I" },
};

const OPERACIONES = [
  { fecha: "02 ene", texto: "Constitución de la sociedad: los socios aportan 5.000 € que se ingresan en el banco.", porque: "Punto de partida, para que el balance tenga estructura completa.", lineas: [["572", 5000, 0], ["100", 0, 5000]] },
  { fecha: "10 feb", texto: "Compra de 100 unidades a 20 €/ud = 2.000 €, a crédito.", porque: "El grupo 6 registra la compra. Las existencias del grupo 3 no se tocan durante el ejercicio.", lineas: [["600", 2000, 0], ["400", 0, 2000]] },
  { fecha: "15 may", texto: "Compra de 150 unidades a 24 €/ud = 3.600 €, a crédito.", porque: "El precio ha subido. Este es el hecho que hará divergir FIFO y precio medio.", lineas: [["600", 3600, 0], ["400", 0, 3600]] },
  { fecha: "20 sep", texto: "Compra de 50 unidades a 30 €/ud = 1.500 €, a crédito.", porque: "Tercer escalón de precio. Total comprado en el año: 300 unidades por 7.100 €.", lineas: [["600", 1500, 0], ["400", 0, 1500]] },
  { fecha: "15 nov", texto: "Venta de 220 unidades a 35 €/ud = 7.700 €, cobro aplazado.", porque: "El ingreso se registra por el precio de venta. El coste de lo vendido aún no aparece: saldrá de la regularización.", lineas: [["430", 7700, 0], ["700", 0, 7700]] },
  { fecha: "31 dic", texto: "Regularización: quedan 80 unidades en almacén, valoradas por FIFO en 2.220 €.", porque: "Se activa lo no vendido. El abono a la cuenta 610 reduce el gasto del ejercicio en ese mismo importe.", ajuste: true, lineas: [["300", 2220, 0], ["610", 0, 2220]] },
  { fecha: "31 dic", texto: "Deterioro: el valor neto realizable de las 80 unidades ha caído a 22 €/ud, es decir 1.760 €.", porque: "El valor contable (2.220 €) supera al valor neto realizable (1.760 €). La diferencia se reconoce como pérdida.", ajuste: true, lineas: [["693", 460, 0], ["393", 0, 460]] },
];

export default {
  codigo: "5.05",
  titulo: "Existencias y coste de ventas",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "4 h",
  nucleo:
    "Durante el ejercicio la empresa registra compras, no existencias. El coste de lo vendido no se anota nunca de forma directa: aparece al cierre, por diferencia, cuando se cuenta lo que queda en almacén. De ahí que el método de valoración elegido cambie el resultado sin cambiar ni un solo hecho.",
  requiere: "5.02 Partida doble · 5.04 Criterios de valoración",
  abre: "6.01 Coste completo y variable · 6.06 Análisis de liquidez",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las existencias entran en el patrimonio por su **precio de adquisición** —si se compran— o por su **coste de producción** —si se fabrican—. El precio de adquisición no es el importe de la factura: incluye todos los gastos adicionales hasta que la mercancía está en el almacén en condiciones de venta (transporte, aranceles, seguro del transporte) y descuenta los descuentos y rebajas obtenidos. Un detalle que cambió con el PGC de 2007: los **descuentos por pronto pago también minoran el precio de adquisición**, cuando antes se llevaban a ingreso financiero.",
            "El IVA soportado deducible queda fuera, porque no es un coste para la empresa sino un crédito frente a Hacienda. En cambio, el IVA no deducible sí forma parte del coste, lo que explica por qué la misma compra vale distinto para dos empresas con distinto régimen.",
            "El sistema español es **especulativo**: durante el ejercicio se registran las compras en el grupo 6 y la cuenta de existencias del grupo 3 permanece congelada con el saldo del cierre anterior. Solo al final se hace recuento físico, se valora lo que queda y se ajusta. El coste de lo vendido no se registra operación a operación, sino que se **deduce**. Esto tiene una consecuencia incómoda: hasta el 31 de diciembre la empresa no sabe cuánto ha ganado realmente vendiendo.",
            "Como las unidades son intercambiables pero se compraron a precios distintos, hay que decidir de cuáles se supone que salieron las vendidas. El PGC admite **FIFO** —primera entrada, primera salida— y **precio medio ponderado**, con preferencia por el segundo cuando los bienes no son identificables individualmente. El **LIFO no está permitido**, ni en el PGC ni en las NIIF, precisamente porque en épocas de precios crecientes deja en el balance existencias valoradas a precios antiguos y muy alejados de la realidad.",
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
            { nom: "Consumo del ejercicio", sub: "El coste de ventas, obtenido por diferencia.", cols: ["Consumo = Ei + Compras − Ef"] },
            { nom: "Variación de existencias", sub: "Cuenta 610. Positiva es gasto, negativa reduce el gasto.", cols: ["$\\Delta$ = Ei − Ef"] },
            { nom: "Precio medio ponderado", sub: "Puede calcularse al cierre o recalcularse tras cada entrada.", cols: ["PMP = (valor Ei + valor compras) / (uds Ei + uds compradas)"] },
            { nom: "Valor neto realizable", sub: "El criterio de comparación al cierre.", cols: ["VNR = precio de venta estimado − costes de terminación y venta"] },
            { nom: "Deterioro", sub: "Solo si el VNR queda por debajo del coste. Es reversible.", cols: ["Deterioro = máx(0; coste − VNR)"] },
            { nom: "Rotación de existencias", sub: "Enlace con el bloque 6: cuántas veces se renueva el almacén.", cols: ["r = Consumo / Existencias medias"] },
          ],
          nota: "La primera identidad es la que hay que poder escribir de memoria. Todas las demás se apoyan en ella.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo año con dos métodos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa arranca sin existencias iniciales. Compra tres veces a precios crecientes y vende 220 unidades. Al cierre le quedan 80. Los hechos son idénticos en ambos escenarios; lo único que cambia es qué unidades se supone que salieron.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Movimiento", "Unidades", "Precio", "Importe"],
          filas: [
            ["Compra 10 feb", "100", "20 €", "2.000 €"],
            ["Compra 15 may", "150", "24 €", "3.600 €"],
            ["Compra 20 sep", "50", "30 €", "1.500 €"],
            { celdas: ["Total comprado", "300", "—", "7.100 €"], clase: "total" },
            ["Ventas del ejercicio", "220", "35 €", "7.700 €"],
            ["Existencias finales", "80", "—", "según método"],
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "FIFO", "Precio medio ponderado"],
          filas: [
            ["Coste unitario aplicado a las finales", "50 uds × 30 € + 30 uds × 24 €", "7.100 / 300 = 23,67 €/ud"],
            ["Existencias finales", "2.220 €", "1.893 €"],
            ["Consumo = 7.100 − Ef", "4.880 €", "5.207 €"],
            ["Ventas", "7.700 €", "7.700 €"],
            { celdas: ["Margen bruto", "2.820 €", "2.493 €"], clase: "total" },
          ],
          nota: "**327 € de diferencia en el resultado** con los mismos hechos económicos. En un contexto de precios al alza, FIFO deja en el almacén las unidades más caras, y por tanto reconoce un consumo menor y un beneficio mayor. Ese beneficio adicional es en parte una **ganancia de posesión**, no una ganancia operativa.",
        },
      ],
    },
    {
      titulo: "El ciclo completo en asientos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El mismo ejercicio, ahora registrado. Fíjate en que ninguna de las tres compras toca la cuenta 300, y en que el coste de ventas no aparece en ningún asiento: emerge del juego entre las cuentas 600 y 610. Aplicamos FIFO y, al cierre, el precio de venta estimado cae, lo que obliga a dotar deterioro.",
          ],
        },
        {
          tipo: "diario",
          cuentas: CUENTAS,
          operaciones: OPERACIONES,
          cierre:
            "Resultado final: **2.360 €**. Se llega a él sumando los 7.700 € de ventas, restando los 7.100 € de compras, sumando los 2.220 € de existencias finales y restando los 460 € de deterioro. Ninguna cuenta se llama «coste de ventas», y sin embargo está ahí: 7.100 − 2.220 = 4.880 €.",
        },
      ],
    },
    {
      titulo: "Caso práctico: inflación y elección de método",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un mayorista con rotación lenta atraviesa un período de inflación del 8 % anual. Con precio medio ponderado, su margen declarado se mantiene estable. Con FIFO, su margen aparente crece año tras año aunque no haya subido ni un céntimo el precio de venta en términos reales.",
            "Lo que ocurre es que FIFO imputa al coste de ventas unidades compradas hace meses, a precios antiguos, mientras factura a precios de hoy. La diferencia es una **ganancia de posesión por tener existencias durante un período de precios crecientes**, no un mayor margen comercial. El problema es que esa ganancia paga impuestos como si fuera beneficio operativo, y además hay que reponer el almacén a los precios nuevos.",
            "**Qué mirar:** si el margen bruto de una empresa mejora en un período inflacionista sin cambios en su política de precios ni en su mezcla de producto, comprueba primero qué método de valoración usa y cuál es su rotación. Cuanto más lenta la rotación, mayor el efecto. Con rotación alta —un supermercado, por ejemplo— FIFO y precio medio dan prácticamente lo mismo, porque no da tiempo a que los precios diverjan.",
            "Este es exactamente el motivo por el que la contabilidad nacional excluye las ganancias de posesión del cálculo del excedente de explotación. Una economía no produce más porque suban los precios de lo que tiene almacenado.",
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
            { t: "Invertir el signo de la variación de existencias", d: "Las existencias finales se **abonan** a la cuenta 610, lo que reduce el gasto; las iniciales se **cargan**, aumentándolo. Equivocar el sentido desplaza el resultado en el doble del importe. Regla de comprobación: si al final del ejercicio hay más almacén que al principio, el saldo de la 610 debe reducir el gasto." },
            { t: "Creer que la cuenta 600 recoge el coste de ventas", d: "Recoge las compras del período, que solo coinciden con el consumo si las existencias no varían. El coste de ventas es Ei + Compras − Ef, y no tiene cuenta propia en el sistema especulativo español." },
            { t: "Incluir el IVA soportado deducible en el precio de adquisición", d: "No es coste, es un crédito frente a Hacienda. Solo el IVA no deducible —por prorrata o por naturaleza del bien— se incorpora al valor de las existencias." },
            { t: "Llevar los descuentos por pronto pago a ingreso financiero", d: "Es el criterio del plan anterior a 2007. Hoy minoran el precio de adquisición, igual que los descuentos comerciales. Los manuales antiguos siguen circulando con el criterio derogado." },
            { t: "Usar LIFO porque «es más prudente»", d: "No está permitido ni en el PGC ni en las NIIF. En épocas de precios crecientes reduce el beneficio, sí, pero al precio de dejar en el balance existencias valoradas a costes de hace años, lo que destruye la utilidad del activo corriente para cualquier análisis de liquidez." },
            { t: "Dotar deterioro comparando con el precio de compra de reposición", d: "El criterio de comparación es el **valor neto realizable**, que mira al precio de venta, no al de compra. Que el proveedor haya bajado sus precios no implica por sí solo que la empresa vaya a vender más barato." },
            { t: "Olvidar que el deterioro de existencias revierte", d: "Si el valor neto realizable se recupera en ejercicios posteriores, el deterioro se revierte con abono a la cuenta 793, hasta el límite del coste original. No es un ajuste definitivo." },
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
            "La variación de existencias es una de las partidas donde la traducción entre contabilidad de empresa y contabilidad nacional exige más cuidado.",
          ],
          lista: [
            "En el SEC 2010 la **variación de existencias (P.52)** es un componente de la formación bruta de capital, es decir, un elemento de la demanda, no un ajuste del coste de ventas.",
            "El signo se invierte respecto de la lógica de la cuenta 610: un aumento de existencias **suma** al PIB por el lado de la demanda, porque representa producción del período que no se ha vendido.",
            "Las entradas y salidas se valoran a los **precios vigentes en el momento en que se producen**, lo que obliga a excluir las ganancias de posesión. Ese ajuste es una de las correcciones habituales al pasar de datos contables de empresa a datos de cuentas nacionales.",
            "Por eso el excedente bruto de explotación de un sector no mejora porque sus existencias se hayan revalorizado: esa plusvalía va a la cuenta de revalorización, fuera de la producción.",
          ],
          cierre:
            "Si vienes de las cuentas trimestrales, la intuición útil es esta: la cuenta 610 mide un stock que cambia, y P.52 mide un flujo depurado de efectos precio. No son la misma magnitud aunque partan del mismo recuento.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Existencias iniciales 4.000 €, compras 21.000 €, existencias finales 6.500 €. ¿Cuál es el consumo?", a: "18.500 €. Consumo = 4.000 + 21.000 − 6.500. Y el saldo de la cuenta 610 será de 2.500 € acreedor, reduciendo el gasto, porque el almacén ha crecido." },
            { q: "Con precios crecientes, ¿qué método deja mayor beneficio, FIFO o precio medio?", a: "FIFO, porque imputa al consumo las unidades más antiguas y baratas y deja en el balance las más caras. Parte de ese mayor beneficio es una ganancia de posesión, no margen comercial." },
            { q: "Las existencias costaron 12 €/ud, se pueden vender a 15 € pero venderlas cuesta 4 € por unidad. ¿Hay deterioro?", a: "Sí. El valor neto realizable es 15 − 4 = 11 €/ud, por debajo del coste de 12 €. Hay que dotar 1 € por unidad. La comparación se hace contra el VNR, no contra el precio de venta bruto." },
            { q: "¿Por qué el LIFO está prohibido?", a: "Porque deja en el balance existencias valoradas a costes históricos muy alejados de los actuales, lo que inutiliza la información del activo corriente. Su ventaja —imputar al consumo los precios más recientes— no compensa esa distorsión patrimonial." },
            { q: "Una empresa de gran rotación cambia de precio medio a FIFO. ¿Esperas un efecto grande en el resultado?", a: "No. Cuanto más rápida es la rotación, menos tiempo hay para que los precios de compra diverjan, y los dos métodos convergen. El efecto es grande justo en el caso contrario: rotación lenta y precios cambiantes." },
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
              q: "¿Qué recoge la cuenta 600, «Compras de mercaderías»?",
              opciones: [
                "El margen bruto de la actividad comercial",
                "El coste de lo vendido en el ejercicio",
                "El valor de las existencias al cierre",
                "Las compras del período, que solo coinciden con el consumo si las existencias no varían",
              ],
              correcta: 3,
              porque: [
                "El margen sale de comparar ventas con coste de ventas, y no es lo que registra ninguna cuenta de compras.",
                "El coste de ventas es $E_i + \\text{Compras} - E_f$ y no tiene cuenta propia: aparece al cierre por diferencia, no se anota nunca directamente.",
                "Las existencias finales están en el grupo 3 del balance, no en la cuenta 600.",
                "Si la empresa compra 100 y no vende nada, la 600 marca 100 y el consumo es cero. La diferencia la recoge la variación de existencias.",
              ],
            },
            {
              q: "Al cierre, las existencias finales superan a las iniciales. ¿Cómo afecta al gasto del ejercicio?",
              opciones: [
                "Depende de si se usa precio medio ponderado o FIFO",
                "Lo aumenta: hay más existencias que valorar",
                "No lo afecta: las existencias están en el balance",
                "Lo reduce: las finales se abonan a la 610 y minoran el consumo",
              ],
              correcta: 3,
              porque: [
                "El método de valoración cambia el importe, no el sentido del ajuste.",
                "Más existencias al cierre significa que parte de lo comprado no se ha consumido, así que el gasto tiene que ser menor, no mayor.",
                "Sí lo afecta: la variación de existencias es una cuenta de gasto del grupo 6 que ajusta el consumo.",
                "Equivocar este signo desplaza resultado de un ejercicio a otro, y es de los errores que pasan más desapercibidos porque el asiento cuadra igual.",
              ],
            },
            {
              q: "El proveedor baja sus precios y ahora la misma mercancía se compraría más barata. ¿Hay que dotar deterioro?",
              opciones: [
                "Sí, por el principio de prudencia",
                "Sí: el valor de reposición es menor que el coste registrado",
                "No, porque el deterioro de existencias no está previsto en el PGC",
                "No necesariamente: el criterio es el valor neto realizable, que mira al precio de venta",
              ],
              correcta: 3,
              porque: [
                "La prudencia no autoriza a dotar deterioros sin que exista pérdida: eso sería crear reservas ocultas.",
                "El valor de reposición mira al mercado de compra, y el PGC no lo usa como criterio para existencias comerciales.",
                "Sí está previsto, y además revierte si el valor neto realizable se recupera, hasta el límite del coste original.",
                "Si la empresa sigue pudiendo venderlas por encima del coste, no hay pérdida que reconocer. Que el proveedor haya bajado precios no implica que el cliente vaya a pagar menos.",
              ],
            },
            {
              q: "Una empresa quiere usar LIFO porque en inflación reduce el beneficio. ¿Puede?",
              opciones: [
                "Sí, pero debe conciliar el resultado con el método FIFO",
                "Sí, solo para existencias no perecederas",
                "Sí, si lo declara en la memoria",
                "No: LIFO no está permitido ni en el PGC ni en las NIIF",
              ],
              correcta: 3,
              porque: [
                "La conciliación es un requisito de otras normativas que sí lo admitieron en su día; aquí simplemente no se puede usar.",
                "La naturaleza del bien no cambia la prohibición.",
                "La declaración en memoria no habilita un criterio prohibido.",
                "Reduce el beneficio en épocas de precios crecientes, sí, pero al precio de dejar en balance existencias valoradas a precios muy antiguos, que deja de informar. Los métodos admitidos son precio medio ponderado y FIFO.",
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
            { ref: "PGC, norma de registro y valoración 10.ª", nota: "el texto sobre existencias. Corto y directo; léelo antes que cualquier manual." },
            { ref: "Muñoz Merchante, Fundamentos de contabilidad", nota: "el capítulo de existencias con fichas de almacén resueltas por ambos métodos." },
            { ref: "Omeñaca, Contabilidad general", nota: "para consultar asientos concretos: devoluciones, rappels, envases con facultad de devolución." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 3", nota: "la variación de existencias como componente de la formación bruta de capital, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
