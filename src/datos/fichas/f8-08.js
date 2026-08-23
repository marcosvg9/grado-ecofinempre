/* Ficha 8.08 — Derivados I: futuros y forwards. */

export default {
  codigo: "8.08",
  titulo: "Derivados I: futuros y forwards",
  nivel: 4,
  bloque: "Mercados financieros e inversión",
  tiempo: "5 h",
  nucleo:
    "El precio de un futuro no depende de lo que el mercado espere que valga el subyacente, sino de que no exista arbitraje entre comprarlo hoy y financiarlo o comprarlo a plazo. Esa condición fija el precio y convierte al futuro en un instrumento de cobertura, no de predicción.",
  requiere: "7.01 Valor temporal del dinero · 8.01 Sistema financiero",
  abre: "8.09 Opciones · 8.10 Gestión de riesgos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **forward** es un contrato bilateral por el que dos partes acuerdan intercambiar un activo en una fecha futura a un precio fijado hoy. Es a medida, se negocia fuera de mercados organizados y, precisamente por eso, cada parte asume el **riesgo de que la otra no cumpla**. Un **futuro** es el mismo contrato estandarizado y negociado en un mercado organizado, con dos diferencias que lo cambian todo: se interpone una **cámara de contrapartida** que se convierte en contraparte de ambos lados, y las pérdidas y ganancias se **liquidan diariamente**.",
            "Esa liquidación diaria es el mecanismo que hace viable el sistema. Cada día se calcula la variación de valor de la posición y se abona o se carga en la cuenta de garantías. Si el saldo cae por debajo de un nivel de mantenimiento, se produce una **llamada de margen** y hay que reponer o la posición se cierra. El resultado es que la exposición al incumplimiento nunca se acumula: se salda cada jornada.",
            "El precio del futuro se determina por **arbitraje**, no por expectativas. Quien quiera tener el activo dentro de seis meses tiene dos rutas: comprarlo hoy y financiarlo, o comprar un futuro y conservar el dinero. Si las dos rutas no cuestan lo mismo, existe una operación con beneficio seguro y el mercado la elimina. De ahí sale la relación de **coste de acarreo**: el precio del futuro es el contado capitalizado al tipo de interés, más los costes de mantener el activo y menos las rentas que genere.",
            "Esa es la idea que más cuesta aceptar: **el futuro del petróleo a un año no dice lo que el mercado cree que valdrá el petróleo dentro de un año**. Dice cuánto cuesta comprarlo hoy, almacenarlo y financiarlo. Las expectativas influyen, sí, pero a través del precio de contado, no directamente del diferencial.",
            "La utilidad práctica es la **cobertura**. Un productor que venderá su cosecha dentro de seis meses puede fijar hoy el precio vendiendo futuros: lo que pierda en el mercado físico si el precio cae lo ganará en la posición de futuros. La cobertura no es gratis ni perfecta: elimina el riesgo de precio y a cambio renuncia a la subida, e introduce el **riesgo de base**, que es la posibilidad de que el precio del futuro y el del activo que realmente se posee no se muevan exactamente igual.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Rasgo", "Forward", "Futuro"],
          filas: [
            { nom: "Dónde se negocia", sub: "Determina la estandarización", cols: ["Bilateral, OTC", "Mercado organizado"] },
            { nom: "Condiciones", sub: "Importe, calidad, fecha", cols: ["A medida", "Estandarizadas"] },
            { nom: "Riesgo de contraparte", sub: "Quién responde del cumplimiento", cols: ["La otra parte", "La cámara de compensación"] },
            { nom: "Liquidación", sub: "Cuándo se realizan pérdidas y ganancias", cols: ["Al vencimiento", "Diaria, con garantías"] },
            { nom: "Cancelación anticipada", sub: "Facilidad para deshacer", cols: ["Requiere acuerdo o novación", "Operación de signo contrario"] },
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
            { nom: "Precio forward sin rentas", sub: "El caso más simple: solo financiación.", cols: ["F = S × (1 + r)ᵀ"] },
            { nom: "Con rentas conocidas", sub: "Los dividendos o cupones que se dejan de cobrar.", cols: ["F = [S − VA(rentas)] × (1 + r)ᵀ"] },
            { nom: "Con coste de almacenamiento", sub: "Materias primas físicas.", cols: ["F = [S + VA(almacenaje)] × (1 + r)ᵀ"] },
            { nom: "Base", sub: "Converge a cero en el vencimiento.", cols: ["Base = S − F"] },
            { nom: "Resultado de una cobertura", sub: "El riesgo de precio se sustituye por riesgo de base.", cols: ["Resultado = S_T − F₀ ± (Base final)"] },
            { nom: "Ratio de cobertura óptimo", sub: "Cuando el activo cubierto no coincide con el subyacente.", cols: ["h* = ρ × σ_S / σ_F"] },
            { nom: "Número de contratos", sub: "Redondeado al entero más próximo.", cols: ["N = h* × Q / tamaño del contrato"] },
          ],
          nota: "La **base converge a cero** en el vencimiento por pura ausencia de arbitraje: el día que el futuro vence, comprarlo equivale a comprar el activo. Esa convergencia es lo que hace funcionar la cobertura.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: precio y arbitraje",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una acción cotiza a **50 €**, el tipo sin riesgo es del **4 %** anual y se considera un futuro a **seis meses**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Cálculo", "Precio teórico"],
          filas: [
            ["Sin dividendos", "50 × 1,04^0,5", "50,99 €"],
            ["Con dividendo de 1 € a los 3 meses", "(50 − 1/1,04^0,25) × 1,04^0,5", "49,98 €"],
          ],
          nota: "El dividendo **rebaja** el precio del futuro porque quien compra a plazo no lo cobra. Si el reparto esperado supera al coste de financiación, el futuro cotiza por debajo del contado sin que eso signifique que el mercado espere una caída.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El arbitraje, paso a paso.** Supongamos que el futuro sin dividendos cotiza a **52 €** en lugar de a 50,99 €. La operación con beneficio seguro es:",
          ],
        },
        {
          tipo: "pasos",
          items: [
            ["Hoy: pedir prestados 50 €", "Al 4 % anual durante seis meses. Deberá devolverse 50,99 €."],
            ["Hoy: comprar la acción por 50 €", "Con el dinero prestado. Ninguna aportación propia."],
            ["Hoy: vender un futuro a 52 €", "Compromiso de entregar la acción dentro de seis meses a ese precio."],
            ["Dentro de seis meses: entregar la acción y cobrar 52 €", "El compromiso se cumple con la acción que ya se posee."],
            ["Devolver el préstamo: 50,99 €", "Queda un beneficio de 1,01 € sin haber puesto capital ni asumido riesgo."],
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "Como cualquiera puede hacerlo, la presión vendedora sobre el futuro y compradora sobre el contado devuelve el precio a la relación de arbitraje. **Ese es el mecanismo que fija el precio**, y por eso no hace falta ninguna opinión sobre el futuro de la acción para calcularlo.",
            "**Y ahora una cobertura con riesgo de base.** Una empresa necesita cubrir **10.000 toneladas** de una materia prima para la que no existe futuro específico, pero sí uno sobre un producto relacionado, con contratos de **50 toneladas**. La volatilidad del precio que la empresa soporta es del **12 %**, la del futuro del **10 %**, y la correlación entre ambos del **0,8**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Cálculo", "Resultado"],
          filas: [
            ["Ratio de cobertura óptimo", "0,8 × 0,12 / 0,10", "0,96"],
            ["Toneladas equivalentes a cubrir", "10.000 × 0,96", "9.600"],
            { celdas: ["Número de contratos", "9.600 / 50", "192 contratos"], clase: "total" },
            ["Reducción de la varianza", "ρ² = 0,8²", "64 %"],
          ],
          nota: "La cobertura **no elimina el riesgo, lo reduce**: con una correlación de 0,8 se elimina el 64 % de la varianza y queda un 36 % de riesgo de base irreducible. Cubrir 200 contratos en lugar de 192 —aplicando un ratio de uno— dejaría más riesgo, no menos.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la cobertura que consume caja",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa eléctrica vende su producción futura mediante futuros para asegurar el precio. Es una cobertura conceptualmente impecable: fija el ingreso y elimina la incertidumbre. Y sin embargo puede llevarla a una crisis de liquidez sin haber perdido un euro en términos económicos.",
            "El mecanismo es la **liquidación diaria**. Si el precio de la energía sube, la posición vendedora de futuros pierde valor y hay que aportar garantías **cada día y en efectivo**. La ganancia compensatoria —el hecho de que la electricidad que producirá se venderá más cara— llegará meses después. Hay un **desfase temporal entre la salida de caja y la entrada compensatoria**, y ese desfase puede ser de una magnitud enorme si el movimiento de precios es extremo.",
            "Eso es lo que ocurrió a numerosas empresas energéticas europeas durante la crisis de precios de 2022. Compañías solventes, con coberturas correctamente diseñadas, se enfrentaron a llamadas de margen de miles de millones que ninguna tesorería estaba dimensionada para atender. Varios gobiernos habilitaron líneas de liquidez específicas, no porque las empresas estuvieran perdiendo dinero, sino porque **el instrumento que las protegía del riesgo de precio les había creado un riesgo de liquidez**.",
            "**La lección general** es que cubrir un riesgo casi siempre significa transformarlo en otro. El futuro elimina la incertidumbre de precio y añade exposición a llamadas de margen. El forward evita la liquidación diaria y añade riesgo de contraparte. Y en ambos casos aparece el riesgo de base si el subyacente no coincide exactamente con lo que se posee.",
            "**Antes de contratar una cobertura conviene responder a tres preguntas.** Qué riesgo concreto se está cubriendo, y si es el que de verdad amenaza al negocio. Qué nuevo riesgo se está asumiendo a cambio. Y **cuánta liquidez exigiría el peor movimiento plausible del subyacente**, calculada explícitamente y no supuesta. La tercera es la que se omite y la que hunde empresas.",
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
            { t: "Leer el precio del futuro como previsión del mercado", d: "Se determina por arbitraje entre comprar hoy financiándose y comprar a plazo. Un futuro por debajo del contado puede reflejar simplemente que el activo paga rentas, no que se espere una caída de precio." },
            { t: "Olvidar las necesidades de liquidez de la liquidación diaria", d: "La cobertura puede ser correcta y aun así generar salidas de caja masivas antes de que llegue la compensación. Hay que cuantificar la garantía exigible en el peor escenario plausible antes de contratar." },
            { t: "Aplicar un ratio de cobertura de uno por defecto", d: "Cuando el subyacente del futuro no coincide con lo que se posee, el ratio óptimo es la correlación por el cociente de volatilidades. Cubrir uno a uno deja más riesgo, no menos." },
            { t: "Creer que una cobertura elimina el riesgo", d: "Elimina el riesgo de precio y deja el de base, que puede ser sustancial cuando el subyacente no es idéntico. Además transforma el riesgo en otro: de liquidez en los futuros, de contraparte en los forwards." },
            { t: "Cubrir y arrepentirse cuando el precio va a favor", d: "Una cobertura renuncia a la ganancia igual que evita la pérdida. Juzgarla a posteriori por si el precio subió o bajó es evaluar una decisión de gestión de riesgo con criterio especulativo, y suele acabar en el abandono de la cobertura justo antes de que hiciera falta." },
            { t: "Confundir cobertura con especulación", d: "La distinción es si existe una exposición previa que se compensa. Vender futuros sobre algo que no se produce ni se posee no es cobertura: es tomar una posición direccional, con un perfil de pérdidas potencialmente ilimitado." },
            { t: "Ignorar el riesgo de contraparte en los forwards", d: "Al no haber cámara ni liquidación diaria, la exposición se acumula durante toda la vida del contrato. En operaciones largas y de importe grande, la solvencia de la contraparte deja de ser un detalle." },
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
            "El SEC 2010 tiene reglas específicas sobre derivados que afectan directamente a la medición del déficit público.",
          ],
          lista: [
            "Los **derivados financieros (AF.71)** son activos y pasivos financieros por derecho propio, valorados a valor razonable en los balances financieros de cada sector.",
            "La regla clave: **los flujos de liquidación de un derivado son operaciones financieras, no rentas de la propiedad**. No son intereses ni ingresos, sino movimientos de la cuenta financiera.",
            "La consecuencia para las cuentas públicas es directa: si una administración contrata una permuta de tipos de interés, **los pagos y cobros de esa permuta no alteran su gasto por intereses D.41 ni, por tanto, su déficit**. Solo modifican su posición financiera neta.",
            "Esa regla se estableció precisamente porque las permutas se habían utilizado para reducir artificialmente el gasto por intereses declarado, cobrando por anticipado una prima a cambio de pagos futuros mayores. Es la misma lógica que la regla de los superdividendos de la ficha 7.07: impedir que una operación financiera se presente como renta.",
            "Los **márgenes de garantía** depositados se registran como depósitos o como otras cuentas pendientes según su carácter reembolsable, no como pago del derivado.",
          ],
          cierre:
            "Para quien trabaja con cuentas de las administraciones públicas, esta es una de las reglas de clasificación con más consecuencias prácticas, y el motivo por el que las operaciones con derivados de las administraciones se vigilan de forma específica.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Acción a 80 €, tipo del 5 %, futuro a un año, sin dividendos. ¿Precio teórico?", a: "80 × 1,05 = 84 €. Si cotizara a 86 €, se compraría la acción financiándose y se vendería el futuro, obteniendo 2 € seguros por acción." },
            { q: "¿Por qué un futuro puede cotizar por debajo del contado?", a: "Porque el activo paga rentas —dividendos o cupones— que quien compra a plazo no percibe. Si esas rentas superan al coste de financiación, el precio del futuro queda por debajo sin que el mercado espere ninguna caída." },
            { q: "Se cubren 20.000 unidades con una correlación de 0,7 y volatilidades del 15 % y del 12 %. ¿Ratio y cobertura?", a: "h = 0,7 × 0,15 / 0,12 = 0,875. Equivale a cubrir 17.500 unidades. Y solo se elimina el 49 % de la varianza, porque la reducción es ρ²." },
            { q: "¿Qué riesgo nuevo introduce cubrirse con futuros en lugar de forwards?", a: "El de liquidez: la liquidación diaria exige aportar garantías en efectivo cuando la posición va en contra, aunque la compensación económica llegue meses después. Es lo que afectó a las energéticas europeas en 2022." },
            { q: "Una administración pública contrata una permuta de tipos. ¿Afecta a su déficit?", a: "No. Los flujos de liquidación de derivados son operaciones financieras, no rentas de la propiedad, y por tanto no alteran el gasto por intereses D.41 ni el déficit. Solo cambian la posición financiera neta." },
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
            { ref: "Hull, Introducción a los mercados de futuros y opciones", nota: "la referencia indiscutible. Los capítulos de futuros y de estrategias de cobertura son especialmente claros." },
            { ref: "Bodie, Kane y Marcus, Investments", nota: "una exposición más breve, útil para la intuición antes de entrar en Hull." },
            { ref: "MEFF y documentación de las cámaras de contrapartida", nota: "el funcionamiento real de garantías, liquidación diaria y llamadas de margen." },
            { ref: "Manual sobre el déficit y la deuda públicos de Eurostat", nota: "el tratamiento de derivados y permutas en las cuentas de las administraciones públicas." },
          ],
        },
      ],
    },
  ],
};
