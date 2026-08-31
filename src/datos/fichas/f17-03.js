/* Ficha 17.03 — IRPF II: base liquidable, cuota y gestión. */

export default {
  codigo: "17.03",
  titulo: "IRPF II: base liquidable, cuota y gestión",
  nivel: 3,
  bloque: "Fiscalidad española",
  tiempo: "5 h",
  nucleo:
    "El mínimo personal y familiar no resta de la base: se grava aparte a la misma escala y el resultado se descuenta de la cuota. Ese rodeo, que parece un tecnicismo, es lo que hace que el mínimo valga lo mismo para todos en vez de valer más cuanto más se gana.",
  requiere: "17.02 IRPF I · 17.01 El tributo",
  abre: "17.07 No residentes · 10.11 Distribución de la renta",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "De la base imponible a la **base liquidable** se llega restando las reducciones, que como vimos operan solo sobre la general: previsión social y pensiones compensatorias. La base liquidable del ahorro coincide prácticamente con la imponible. A partir de ahí el impuesto se bifurca: **la base liquidable general va a la escala progresiva y la del ahorro a su propia tarifa**, mucho más plana y con muchos menos tramos.",
            "**El mínimo personal y familiar es la pieza que más se explica mal de todo el impuesto.** Cuantifica la parte de renta destinada a satisfacer las necesidades básicas del contribuyente y de quienes dependen de él: un importe por contribuyente, incrementado por edad, más los mínimos por descendientes, por ascendientes y por discapacidad. Hasta aquí no hay sorpresa. La sorpresa es **cómo opera**: no se resta de la base imponible.",
            "El mecanismo es un rodeo deliberado. Se aplica la escala a la base liquidable general **completa**, obteniendo una primera cuota. Después se aplica **la misma escala** al importe del mínimo personal y familiar, obteniendo una segunda cuota. Y la cuota íntegra es la **diferencia** entre ambas. El efecto es que el mínimo se descuenta valorado **a los tipos de los primeros tramos**, no al tipo marginal del contribuyente. Todo el mundo se ahorra la misma cantidad por el mismo mínimo, gane lo que gane.",
            "Si el mínimo se restara de la base —como parece natural y como hacía la normativa anterior— su valor sería el mínimo multiplicado por el **tipo marginal**, y por tanto ahorraría mucho más a las rentas altas. El rodeo actual convierte un beneficio que sería regresivo en uno de cuantía igual para todos. **Es la ilustración más limpia del principio de la ficha 17.01**: dónde se coloca un beneficio fiscal decide a quién beneficia, y ese es un debate distributivo disfrazado de detalle técnico.",
            "La escala general está **partida en dos mitades**: una **estatal** y otra **autonómica**, y las comunidades tienen competencia para fijar la suya. De ahí que la cuota de dos contribuyentes idénticos difiera según dónde residan, y de ahí también que la comparación de tipos entre comunidades sea un asunto político recurrente. La base del ahorro tiene también su parte estatal y autonómica, pero con una tarifa común mucho más homogénea.",
            "De la cuota íntegra a la **cuota líquida** se llega restando las **deducciones**. Las estatales incluyen las de donativos, las de inversión en empresas de nueva creación, las de maternidad y familia numerosa —que además son cobrables por anticipado— y el régimen transitorio de la deducción por vivienda habitual, cerrado a adquisiciones anteriores a 2013. Y sobre ellas se superponen las **deducciones autonómicas**, muy numerosas y muy dispares, que son la vía por la que cada comunidad hace política propia dentro del impuesto.",
            "Finalmente, de la cuota líquida a la **cuota diferencial** se descuentan las **retenciones y los pagos a cuenta** ya soportados durante el año. El sistema de retenciones cumple tres funciones: adelanta la recaudación al Tesoro, reparte el esfuerzo del contribuyente a lo largo del año y proporciona a la Administración una información masiva de terceros que es la base del borrador. Una retención excesiva no es un impuesto mayor sino un préstamo sin interés al Estado que se devuelve al declarar; una insuficiente, un pago aplazado.",
            "En **gestión**, la obligación de declarar tiene umbrales que dependen del número de pagadores y del tipo de renta, con la particularidad de que **un segundo pagador rebaja mucho el umbral**: quien ha cambiado de empleo o ha cobrado una prestación puede quedar obligado con una renta modesta, porque cada pagador retuvo sin conocer lo que pagaba el otro. La Administración pone a disposición un **borrador** con los datos que ya tiene, y conviene tratarlo como un punto de partida: contiene lo que terceros han informado, no lo que solo el contribuyente sabe.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Fase", "Operación", "Consecuencia"],
          filas: [
            { nom: "Base liquidable", sub: "Reducciones sobre la base general.", cols: ["BI − previsión social − pensiones compensatorias", "Su valor depende del tipo marginal"] },
            { nom: "Cuota íntegra", sub: "El rodeo del mínimo personal y familiar.", cols: ["Escala(BL) − Escala(mínimo)", "El mínimo vale igual para todos"] },
            { nom: "Cuota líquida", sub: "Deducciones estatales y autonómicas.", cols: ["CI − deducciones", "Su valor no depende de la renta"] },
            { nom: "Cuota diferencial", sub: "Lo ya ingresado durante el año.", cols: ["CL − retenciones − pagos a cuenta", "A ingresar o a devolver"] },
            { nom: "Resultado", sub: "Devolver no es ganar.", cols: ["Ingreso o devolución", "Una devolución alta solo dice que se retuvo de más"] },
          ],
          nota: "La última fila corrige un malentendido muy extendido: **que salga a devolver no significa que se pague menos impuesto**. El impuesto es la cuota líquida; la diferencial solo dice si lo adelantado durante el año fue mucho o poco.",
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
            { nom: "Cuota íntegra general", sub: "El mínimo se grava a la misma escala y se resta.", cols: ["$\\mathrm{CI} = T(\\mathrm{BLG}) - T(\\mathrm{MPF})$"] },
            { nom: "Ahorro que produce el mínimo", sub: "No depende del tipo marginal del contribuyente.", cols: ["Ahorro $= T(\\mathrm{MPF})$"] },
            { nom: "Si el mínimo restara de la base", sub: "La alternativa que la ley descartó.", cols: ["$\\mathrm{CI}' = T(\\mathrm{BLG} - \\mathrm{MPF})$"] },
            { nom: "Diferencia entre ambos métodos", sub: "Positiva siempre que haya progresividad.", cols: ["$\\mathrm{CI} - \\mathrm{CI}' \\geq 0$"] },
            { nom: "Cuota líquida", sub: "Deducciones estatales más autonómicas.", cols: ["CL = CI − deducciones"] },
            { nom: "Cuota diferencial", sub: "Puede ser negativa: entonces se devuelve.", cols: ["CD = CL − retenciones − pagos a cuenta"] },
          ],
          nota: "La cuarta línea es el resultado que hay que retener: con una tarifa progresiva, el método del mínimo **siempre** recauda igual o más que restarlo de la base, y la diferencia crece con la renta. Es un mecanismo de progresividad escondido en un tecnicismo de cálculo.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el rodeo del mínimo personal",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Base liquidable general de **30.000 €** y mínimo personal y familiar de **5.550 €**. Escala simplificada: 19 % hasta 12.450 €, 24 % hasta 20.200 €, 30 % hasta 35.200 €. Calculamos la cuota por el método legal y por el que parecería natural.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Método legal", "Cálculo", "Importe"],
          filas: [
            ["Escala sobre la base liquidable", "12.450×19 % + 7.750×24 % + 9.800×30 %", "7.165,50 €"],
            ["Escala sobre el mínimo", "5.550 × 19 %", "1.054,50 €"],
            { celdas: ["Cuota íntegra", "7.165,50 − 1.054,50", "6.111,00 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Si el mínimo restara de la base", "Cálculo", "Importe"],
          filas: [
            ["Base tras restar el mínimo", "30.000 − 5.550", "24.450 €"],
            ["Escala sobre esa base", "12.450×19 % + 7.750×24 % + 4.250×30 %", "5.500,50 €"],
            { celdas: ["Diferencia con el método legal", "6.111,00 − 5.500,50", "610,50 € más de impuesto"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Los 610,50 € de diferencia son la progresividad del mecanismo.** Con el método legal, este contribuyente se ahorra por su mínimo exactamente **1.054,50 €**, que es lo que se ahorra cualquier otro con el mismo mínimo, gane 20.000 € o 200.000 €. Si el mínimo restara de la base, se habría ahorrado 5.550 × 30 % = **1.665 €**, y alguien en el tramo del 47 % se habría ahorrado 2.608,50 €.",
            "Dicho de otro modo: **el mínimo personal está construido como una deducción disfrazada de reducción**. Se calcula sobre la base, como una reducción, y se descuenta de la cuota, como una deducción, tomando de cada figura lo que interesaba. Quien no repare en el rodeo calculará mal la cuota y, sobre todo, sacará conclusiones equivocadas sobre a quién beneficia el mínimo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el segundo pagador",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una persona trabaja de enero a junio en una empresa que le paga 11.000 € y de julio a diciembre en otra que le paga 10.000 €. Total: 21.000 €, una renta modesta. Al llegar la campaña descubre que **está obligada a declarar y que le sale a ingresar**, cuando compañeros suyos con el mismo sueldo anual y un solo pagador ni siquiera declaran.",
            "El mecanismo es aritmético y no tiene nada de sancionador. **Cada pagador retuvo como si fuera el único.** El primero calculó la retención de quien va a ganar 11.000 € en el año, una renta que apenas supera el mínimo y a la que corresponde una retención muy baja o nula. El segundo hizo lo propio con 10.000 €. Ninguno de los dos retuvo lo que corresponde a 21.000 €, porque ninguno sabía de la existencia del otro.",
            "La ley responde a eso **rebajando drásticamente el umbral de la obligación de declarar cuando hay más de un pagador** y el segundo y siguientes superan una cantidad pequeña. No se trata de que estas personas paguen más impuesto: pagan exactamente el que les corresponde por 21.000 €. Lo que ocurre es que **no lo adelantaron durante el año**, y la regularización llega toda junta en junio.",
            "**La lección práctica** es que quien cambia de empleo, cobra una prestación por desempleo o percibe un atraso de un ejercicio anterior debería revisar su retención y, si procede, pedir a su pagador que la eleve voluntariamente. Y la lección conceptual es la del apartado anterior: **retener no es tributar**. La retención es un pago a cuenta, y su única función es repartir en el tiempo una deuda que se determina al final.",
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
            { t: "Restar el mínimo personal de la base imponible", d: "No se resta: se grava aparte a la misma escala y se descuenta de la cuota. Hacerlo del otro modo subestima la cuota —en el ejemplo, en 610,50 €— y además lleva a creer que el mínimo beneficia más a quien más gana, que es justo lo contrario de lo que la ley persigue." },
            { t: "Interpretar una devolución como pagar menos impuesto", d: "El impuesto es la cuota líquida. La diferencial solo compara esa cuota con lo ya adelantado. Una devolución grande significa que se retuvo de más y que se ha prestado dinero al Estado sin interés durante meses." },
            { t: "Dar por bueno el borrador sin revisarlo", d: "El borrador contiene lo que terceros han informado a la Administración. No conoce las deducciones autonómicas a las que se tiene derecho, ni ciertas circunstancias familiares, ni gastos que solo el contribuyente puede acreditar. Es un punto de partida, no una liquidación." },
            { t: "Olvidar las deducciones autonómicas", d: "Son numerosas, muy dispares entre comunidades y cambian con frecuencia. Al depender de la residencia, dos contribuyentes idénticos pueden tener cuotas líquidas distintas, y esa parte no viene rellena en el borrador." },
            { t: "No prever el efecto del segundo pagador", d: "Cada pagador retiene como si fuera el único, así que la suma de retenciones queda por debajo de la cuota que corresponde al total. No se paga más impuesto: se paga de golpe lo que no se adelantó." },
            { t: "Comparar tipos entre comunidades usando solo la escala estatal", d: "La escala general está partida en mitad estatal y mitad autonómica, y las comunidades fijan la suya. Comparar solo una mitad no dice nada sobre la carga efectiva en cada territorio." },
            { t: "Suponer que la deducción por vivienda sigue abierta", d: "El régimen transitorio solo alcanza a adquisiciones anteriores a 2013. Es una de las deducciones que más se sigue mencionando y hace más de una década que no admite nuevas incorporaciones." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Devengo frente a caja, otra vez",
          texto:
            "Las retenciones ilustran a la perfección la distinción de la ficha 13.06 entre el déficit en contabilidad nacional y el saldo de caja del Estado. El SEC registra el IRPF en **devengo**: la obligación pertenece al ejercicio en que se obtuvo la renta. La caja del Tesoro, en cambio, recibe las retenciones mes a mes durante ese año y la regularización en junio del siguiente. Con un impuesto que se retiene continuamente y se liquida después, **la diferencia entre ambas mediciones es estructural y de miles de millones**, y no señala ningún error de nadie. Es la razón de que las cifras de recaudación que publica la Agencia Tributaria y las que aparecen en las cuentas nacionales no coincidan nunca.",
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
              q: "Base liquidable general 30.000 € y mínimo personal 5.550 €, con escala del 19 / 24 / 30 %. ¿Cuál es la cuota íntegra?",
              a: "6.111,00 €. La escala sobre 30.000 da 7.165,50 y la escala sobre 5.550 da 1.054,50; la cuota es la diferencia. Si el mínimo se hubiera restado de la base, la cuota habría sido 5.500,50, es decir, 610,50 € menos.",
            },
            {
              q: "¿Por qué la ley grava el mínimo personal aparte en vez de restarlo de la base?",
              a: "Porque así el mínimo se descuenta valorado a los tipos de los primeros tramos y produce el mismo ahorro para todos —1.054,50 € en el ejemplo—. Restado de la base valdría el mínimo por el tipo marginal, y ahorraría 1.665 € a quien esté en el 30 % y más de 2.600 € a quien esté en el 47 %.",
            },
            {
              q: "A un contribuyente le sale a devolver 900 €. ¿Ha pagado menos impuesto que otro al que le sale a ingresar?",
              a: "No se puede saber. El impuesto es la cuota líquida; la cuota diferencial solo compara esa cuota con lo ya retenido. Una devolución alta indica que se retuvo por encima de lo debido y que se prestó ese dinero al Estado sin interés.",
            },
            {
              q: "Alguien cobra 11.000 € de un empleador y 10.000 € de otro. ¿Por qué le sale a ingresar?",
              a: "Porque cada pagador retuvo como si fuera el único, aplicando el tipo que corresponde a 11.000 y a 10.000 € respectivamente, no a 21.000 €. La suma de retenciones queda por debajo de la cuota del total y la diferencia se regulariza al declarar. No paga más impuesto: lo paga más tarde y de una vez.",
            },
            {
              q: "¿Por qué dos contribuyentes con la misma renta pueden tener cuotas distintas?",
              a: "Porque la escala general se compone de una parte estatal y otra autonómica que cada comunidad fija, y porque las deducciones autonómicas son numerosas y muy dispares. La residencia, y no solo la renta, determina la cuota.",
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
              q: "¿Cómo opera el mínimo personal y familiar en el IRPF?",
              opciones: [
                "Se resta de la base imponible general antes de aplicar la escala",
                "Se grava a la misma escala y el resultado se descuenta de la cuota íntegra",
                "Se descuenta de la cuota líquida como una deducción más",
                "Reduce proporcionalmente la cuota según el tipo medio del contribuyente",
              ],
              correcta: 1,
              porque: [
                "Es lo que parece natural, lo que hacía la normativa anterior y lo que da una cuota menor: en el ejemplo, 610,50 € menos.",
                "Ese rodeo hace que el mínimo valga lo mismo para todos —los tipos de los primeros tramos— en vez de valer el tipo marginal de cada uno.",
                "No es una deducción en cuota al uso: se calcula aplicándole la escala, que es lo que lo distingue.",
                "No hay ninguna proporción sobre el tipo medio: se aplica la tarifa completa al importe del mínimo.",
              ],
            },
            {
              q: "A un contribuyente le devuelven 1.200 € y a otro le sale a ingresar 300 €. ¿Quién ha soportado más impuesto?",
              opciones: [
                "El segundo, porque termina pagando en lugar de cobrar",
                "El primero, porque adelantó más dinero durante el año",
                "No se puede saber: el impuesto es la cuota líquida, no la diferencial",
                "Los dos igual, si tienen la misma base imponible",
              ],
              correcta: 2,
              porque: [
                "Que salga a ingresar solo dice que se retuvo poco durante el año, no que se tribute más.",
                "Adelantar más dinero es lo que provoca la devolución, y no es lo mismo que soportar más impuesto.",
                "La diferencial compara la cuota con lo ya retenido. Para saber quién soporta más carga hay que mirar la cuota líquida de cada uno.",
                "Podrían tener la misma base y distinta cuota, por residir en comunidades con escalas o deducciones diferentes.",
              ],
            },
            {
              q: "Un trabajador cambia de empresa a mitad de año, con 11.000 € de un pagador y 10.000 € de otro. ¿Qué ocurre?",
              opciones: [
                "Que tributa a un tipo superior por tener dos pagadores",
                "Que cada pagador retuvo como si fuera el único, así que faltará retención y la regularización llega al declarar",
                "Que puede repartir la renta entre los dos pagadores y aplicar dos veces el mínimo",
                "Que queda exento de declarar por no superar los 22.000 € con un solo pagador",
              ],
              correcta: 1,
              porque: [
                "El tipo depende de la renta total, no del número de pagadores: paga lo mismo que quien gane 21.000 € con un pagador único.",
                "Por eso la ley rebaja mucho el umbral de la obligación de declarar cuando hay más de un pagador: para que esa diferencia aflore.",
                "El mínimo personal es único por contribuyente y no se multiplica por el número de pagadores.",
                "El umbral de 22.000 € rige para un solo pagador; con varios, el aplicable es muy inferior.",
              ],
            },
            {
              q: "¿Qué conviene revisar siempre en el borrador de la declaración?",
              opciones: [
                "Nada: la Administración dispone de todos los datos necesarios",
                "Solo los rendimientos del trabajo, que son los que más varían",
                "Las retenciones, que suelen venir mal calculadas",
                "Las deducciones autonómicas y las circunstancias personales, que la Administración no siempre conoce",
              ],
              correcta: 3,
              porque: [
                "El borrador contiene lo que terceros han informado, y hay datos que solo el contribuyente conoce.",
                "Los rendimientos del trabajo son precisamente lo mejor informado, porque llegan de los pagadores.",
                "Las retenciones vienen de las declaraciones informativas de los pagadores y rara vez son el problema.",
                "Son numerosas, cambian con frecuencia y dependen de la residencia y de circunstancias familiares que no siempre constan en los ficheros de la Administración.",
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
            { t: "Ley 35/2006 del IRPF, títulos V a XI", d: "El mínimo personal y familiar en los artículos 56 a 61 y su forma de aplicación en los artículos 63 y 64, que son los que describen el rodeo del cálculo. La gestión, en el título XI." },
            { t: "Agencia Tributaria, Manual práctico de Renta", d: "Contiene la escala vigente, los umbrales de la obligación de declarar y el detalle de las deducciones autonómicas comunidad por comunidad, que es la parte que más cambia cada año." },
            { t: "Instituto de Estudios Fiscales, estudios sobre progresividad del IRPF", d: "Mediciones de tipo medio efectivo por tramos de renta y del efecto redistributivo del impuesto, que enlazan directamente con la ficha 10.11." },
            { t: "Airef, informes sobre beneficios fiscales", d: "Evalúan cuánto cuestan las deducciones y reducciones del impuesto y a quién benefician. Es la comprobación empírica del argumento de esta ficha sobre dónde colocar un beneficio fiscal." },
          ],
        },
      ],
    },
  ],
};
