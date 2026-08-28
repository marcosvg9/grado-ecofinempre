/* Ficha 13.01 — La gramática del sistema: cómo se lee cualquier código del SEC. */

export default {
  codigo: "13.01",
  titulo: "La gramática del sistema: cómo se lee cualquier código del SEC",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "3 h",
  nucleo:
    "El SEC no es una lista de miles de partidas que haya que memorizar: es un lenguaje con siete letras y dos reglas. Quien entiende la gramática puede leer un código que no ha visto nunca y saber en qué cuenta vive, quién lo paga, quién lo cobra y qué saldo mueve.",
  requiere: "12.01 Unidades institucionales y sectorización · 10.06 SEC 2010: sectores y secuencia",
  abre: "13.02 Operaciones de bienes y servicios · 13.04 La remuneración de asalariados · 13.10 Balances y revalorizaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El bloque 12 recorrió las cuentas de arriba abajo. Este bloque hace lo contrario: abre cada operación por dentro.** Y antes de abrir nada conviene entender que los códigos del SEC no son etiquetas arbitrarias, sino un sistema con una gramática regular. La letra dice de qué familia es la operación, el primer dígito dice de qué tipo dentro de la familia, y los dígitos siguientes van estrechando. Sabiendo eso, un código nuevo se lee solo.",
            "**Las siete letras son estas.** La **P** son las operaciones de **productos**: bienes y servicios que alguien produce, compra, consume, invierte o intercambia con el exterior. La **D** son las operaciones de **distribución**: flujos de renta que se reparten sin que haya un bien o un servicio de por medio —salarios, impuestos, intereses, prestaciones, transferencias—. La **F** son las operaciones **financieras**: quién adquiere qué activo financiero y quién contrae qué pasivo. La **B** son los **saldos contables**, que no son operaciones sino resultados: lo que queda tras cerrar una cuenta. La **K** son las **otras variaciones de los activos**, cosas que cambian el patrimonio sin que nadie haya hecho una operación: el desgaste, la revalorización, una catástrofe. Y **AN** y **AF** no son flujos en absoluto, sino **saldos de activos**: lo que se tiene en un momento dado, no producidos y producidos en el caso de AN, financieros en el de AF.",
            "**La primera regla es la partida doble, y es la que hace que el sistema cuadre.** Toda operación tiene dos lados, y por tanto aparece **siempre dos veces** en el sistema completo: como **empleo** para quien la paga y como **recurso** para quien la cobra. El salario de 500 que en la ficha 12.03 restaba en la cuenta de explotación de las sociedades es exactamente el mismo 500 que suma en la cuenta de asignación de la renta primaria de los hogares. No es una duplicación: es el mismo flujo mirado desde los dos extremos. Por eso, al agregar todos los sectores residentes, **cualquier operación puramente interna se anula**, y solo sobrevive lo que cruza la frontera con el resto del mundo.",
            "**La segunda regla es que los saldos encadenan.** Un saldo **B** no se calcula por separado: es lo que queda al cerrar una cuenta, y se convierte automáticamente en la primera partida de la cuenta siguiente. Por eso la columna de saldos de la ficha 10.06 se lee de arriba abajo como una historia —1.000 → 450 → 980 → 985 → 150 → −30— y por eso ningún saldo flota por su cuenta. Cambiar la clasificación de una operación no altera solamente esa operación: mueve todos los saldos que hay por debajo.",
            "**Hay además un sufijo que conviene tener siempre presente, porque se olvida y produce errores grandes: la g y la n.** Una magnitud **bruta (g, de gross)** incluye el consumo de capital fijo; una **neta (n)** lo ha restado. B.1g es el valor añadido bruto y B.1n el neto; B.8g el ahorro bruto y B.8n el neto. La diferencia entre ambos no es cosmética: es lo que hay que gastar solo para que el capital existente no se deteriore, y en una economía madura son varios puntos del PIB. La ficha 13.10 lo mide.",
            "**Una última pieza de la gramática, y la más fácil de pasar por alto: no todo lo que cambia el patrimonio es una operación.** Las operaciones (P, D, F) son acuerdos entre dos unidades. Las **K** no lo son: nadie acuerda que una máquina se desgaste, que un piso suba de precio o que un incendio destruya una nave. El sistema las registra en cuentas aparte precisamente para que no se confundan con la actividad económica. Que esa separación exista es la razón de que **una subida general del precio de la vivienda no aparezca en el PIB de nadie**, por mucho que enriquezca a los propietarios.",
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
            { nom: "Operaciones de productos", sub: "Hay un bien o un servicio de por medio.", cols: ["P.1 a P.7"] },
            { nom: "Operaciones de distribución", sub: "Se reparte renta, sin bien ni servicio.", cols: ["D.1 a D.9"] },
            { nom: "Operaciones financieras", sub: "Activos y pasivos financieros.", cols: ["F.1 a F.8"] },
            { nom: "Saldos contables", sub: "No son operaciones: son resultados.", cols: ["B.1 a B.12, B.90"] },
            { nom: "Otras variaciones de activos", sub: "Cambian el patrimonio sin operación.", cols: ["K.1 a K.7"] },
            { nom: "Saldos de activos", sub: "Lo que se tiene, no lo que fluye.", cols: ["AN no financieros · AF financieros"] },
            { nom: "Regla de la partida doble", sub: "Toda operación se registra dos veces.", cols: ["empleo de uno = recurso de otro"] },
            { nom: "Consecuencia de esa regla", sub: "Lo interno se anula al agregar.", cols: ["solo sobrevive lo que cruza la frontera"] },
            { nom: "Regla del encadenamiento", sub: "Ningún saldo se calcula aparte.", cols: ["saldo de una cuenta = entrada de la siguiente"] },
            { nom: "Sufijos g y n", sub: "La diferencia son varios puntos del PIB.", cols: ["g incluye K.1 · n lo ha restado"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo euro visto dos veces",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La mejor forma de fijar la partida doble es seguir una sola operación por el sistema. Tomamos la **remuneración de asalariados de 500** de la economía de la ficha 12.03 y miramos dónde aparece.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Sector", "Cuenta", "Lado", "Efecto sobre su saldo"],
          filas: [
            ["S.11 Sociedades", "Explotación", "Empleo: paga 500", "Reduce su B.2g en 500"],
            ["S.14 Hogares", "Asignación de renta primaria", "Recurso: cobra 500", "Aumenta su B.5g en 500"],
            ["Economía nacional", "Agregado de ambas", "Empleo + recurso = 0", "No cambia la renta nacional"],
            { celdas: ["Si el empleador fuese no residente", "Cuenta del S.2", "Solo el recurso es residente", "Sí cambia la renta nacional"], clase: "total" },
          ],
          nota: "Las tres primeras filas son la partida doble en estado puro: **el mismo 500 resta en un sitio y suma en otro, y al agregar desaparece**. La cuarta es la excepción que da sentido a todo el sistema: cuando una de las dos patas está fuera de la frontera, la operación **no** se anula, y por eso la renta nacional se separa del producto interior. Esa es exactamente la diferencia de 20 entre el PIB de 1.000 y la RNB de 980 de la ficha 10.06.",
        },
        {
          tipo: "grafico",
          alto: 400,
          ejes: { x: "", y: "" },
          dominio: { x: [0, 10], y: [0, 6.4] },
          marcasX: [],
          marcasY: [],
          areas: [
            { puntos: [[0.2, 4.5], [0.2, 5.6], [3.0, 5.6], [3.0, 4.5]], color: "acento" },
            { puntos: [[3.4, 4.5], [3.4, 5.6], [6.2, 5.6], [6.2, 4.5]], color: "acento" },
            { puntos: [[6.6, 4.5], [6.6, 5.6], [9.4, 5.6], [9.4, 4.5]], color: "acento" },
            { puntos: [[0.2, 2.6], [0.2, 3.7], [4.6, 3.7], [4.6, 2.6]], color: "n2" },
            { puntos: [[5.0, 2.6], [5.0, 3.7], [9.4, 3.7], [9.4, 2.6]], color: "n3" },
            { puntos: [[0.2, 0.7], [0.2, 1.8], [9.4, 1.8], [9.4, 0.7]], color: "n1" },
          ],
          notas: [
            { x: 0.2, y: 6.1, texto: "OPERACIONES — acuerdos entre dos unidades, con partida doble", ancla: "start" },
            { x: 1.6, y: 5.25, texto: "P · productos", ancla: "middle" },
            { x: 1.6, y: 4.8, texto: "hay un bien o servicio", ancla: "middle" },
            { x: 4.8, y: 5.25, texto: "D · distribución", ancla: "middle" },
            { x: 4.8, y: 4.8, texto: "se reparte renta", ancla: "middle" },
            { x: 8.0, y: 5.25, texto: "F · financieras", ancla: "middle" },
            { x: 8.0, y: 4.8, texto: "activos y pasivos", ancla: "middle" },
            { x: 0.2, y: 4.2, texto: "NO SON OPERACIONES — nadie las acuerda, y por eso viven aparte", ancla: "start" },
            { x: 2.4, y: 3.35, texto: "K · otras variaciones", ancla: "middle" },
            { x: 2.4, y: 2.9, texto: "desgaste, revalorización, catástrofe", ancla: "middle" },
            { x: 7.2, y: 3.35, texto: "AN y AF · activos", ancla: "middle" },
            { x: 7.2, y: 2.9, texto: "lo que se tiene, no lo que fluye", ancla: "middle" },
            { x: 0.2, y: 2.3, texto: "NO SON NADA DE LO ANTERIOR — son resultados", ancla: "start" },
            { x: 4.8, y: 1.45, texto: "B · saldos contables", ancla: "middle" },
            { x: 4.8, y: 1.0, texto: "lo que queda al cerrar una cuenta, y entrada de la siguiente", ancla: "middle" },
            { x: 0.2, y: 0.25, texto: "La letra sitúa la familia; el dígito estrecha. D.42 tiene que ser una renta de la propiedad.", ancla: "start" },
          ],
          nota: "El mapa entero del sistema en una imagen. La fila de arriba son las **operaciones**, que tienen dos lados y por tanto se registran dos veces; la del medio, lo que **no es una operación** —cambios que nadie ha acordado y saldos de lo que se posee—; y la de abajo, los **saldos contables**, que no se pagan ni se cobran y que existen solo como resultado de cerrar una cuenta. Casi todos los errores de lectura de cuentas nacionales consisten en confundir una fila con otra: buscar la contrapartida de un saldo, meter una revalorización entre las operaciones o tratar un activo como si fuera un flujo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la lectura al revés: dado un código que no se ha visto nunca, deducir dónde vive.** Cuatro ejemplos que se resuelven solo con la gramática, sin consultar el reglamento:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Código", "Qué dice la letra", "Qué dice el dígito", "Dónde vive"],
          filas: [
            ["D.42", "Distribución: se reparte renta", "D.4 rentas de la propiedad; el 2, dividendos", "Cuenta de asignación de la renta primaria"],
            ["P.52", "Productos: hay bienes de por medio", "P.5 formación de capital; el 2, existencias", "Cuenta de capital"],
            ["K.7", "No es operación: nadie la acuerda", "Revalorización por cambio de precios", "Cuenta de revalorización"],
            ["F.4", "Financiera: activo frente a pasivo", "Préstamos", "Cuenta financiera"],
            { celdas: ["AN.211", "Saldo de activo, no financiero", "AN.2 no producido; recursos naturales; tierras", "Balance, no una cuenta de flujos"], clase: "total" },
          ],
          nota: "Obsérvese que **ninguna de las cinco ha requerido saber el contenido concreto**: la letra sitúa la familia y el dígito estrecha. Es la razón por la que merece la pena aprender la gramática antes que el vocabulario. Las nueve fichas siguientes recorren el vocabulario familia por familia, pero quien tenga interiorizada esta tabla podrá orientarse en cualquier cuadro del INE o de Eurostat aunque se encuentre un código nuevo.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué reclasificar una partida mueve el PIB",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La consecuencia más práctica de la gramática es esta: **el mismo desembolso puede caber en más de una familia, y dónde se coloque cambia agregados que se citan a diario**. No es una sutileza de estadístico, y hay un caso reciente que lo demuestra.",
            "**Considérese lo que gasta una empresa en investigación y desarrollo.** Antes del SEC 2010, ese gasto se trataba como **consumo intermedio (P.2)**: un insumo que se consume en el proceso productivo, igual que la electricidad. Desde el SEC 2010 se trata como **formación bruta de capital fijo (P.51g)**: un activo, porque el conocimiento generado se usa repetidamente durante varios años. El desembolso es exactamente el mismo. La reclasificación no cambió ni un euro de lo que gastan las empresas.",
            "**Y sin embargo cambió el PIB de todos los países que la aplicaron, al alza.** La razón está en la gramática: el valor añadido es producción menos consumos intermedios, así que **sacar una partida del P.2 la suma directamente al valor añadido**. La I+D dejó de restarse y pasó a contarse como inversión, que es un componente de la demanda final. Fue el mayor de los cambios metodológicos que introdujo el SEC 2010, y obligó a revisar hacia arriba las series históricas de toda la Unión Europea.",
            "**El encadenamiento hizo el resto.** Como los saldos se enlazan, el efecto no se quedó en el PIB: al subir el valor añadido subió el excedente de explotación, al subir el excedente subió el ahorro, y al subir el ahorro cambió la capacidad de financiación. Además, como el nuevo activo se deprecia, apareció **consumo de capital fijo (K.1) donde antes no había ninguno**, de modo que el efecto sobre las magnitudes netas fue menor que sobre las brutas. Una sola reclasificación recorrió el sistema entero.",
            "**Hubo un segundo cambio del mismo tipo y menos comentado: los sistemas de armamento.** Un carro de combate o una fragata se trataban antes como consumo intermedio de las administraciones públicas —se consideraban destruidos en el acto de defender— y desde el SEC 2010 son **activos fijos (AN.114)**, porque prestan servicio durante décadas. El resultado es que el gasto militar en equipos pasó a ser inversión pública, con el mismo efecto al alza sobre el PIB y sobre la formación bruta de capital.",
            "**La lección que conviene llevarse a las nueve fichas siguientes.** Cuando este bloque discuta si un desembolso es P.2, D.11 o P.51g, no estará discutiendo una etiqueta: estará decidiendo el valor añadido, el ahorro y la capacidad de financiación de quien lo hace. Por eso el SEC dedica capítulos enteros a fronteras que a primera vista parecen menores, y por eso vale la pena entenderlas una por una.",
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
            { t: "Tratar los saldos B como si fueran operaciones", d: "No lo son: son lo que queda al cerrar una cuenta. Nadie paga ni cobra un B.2g. Confundirlos lleva a buscar su contrapartida en otro sector, que no existe, y a intentar sumarlos como si fueran flujos independientes." },
            { t: "Creer que la partida doble duplica la economía", d: "El mismo flujo se registra como empleo de quien paga y recurso de quien cobra. No son dos operaciones sino una vista desde los dos extremos, y por eso se anula al agregar sectores residentes. Lo que no se anula es lo que cruza la frontera, y ahí está la diferencia entre PIB y renta nacional." },
            { t: "Mezclar magnitudes brutas y netas en la misma comparación", d: "La g incluye el consumo de capital fijo y la n lo ha restado, y en una economía madura la diferencia son varios puntos del PIB. Comparar el ahorro bruto de un año con el neto de otro, o la inversión bruta de un país con la neta de otro, produce conclusiones al revés." },
            { t: "Meter las variaciones K entre las operaciones", d: "Una operación es un acuerdo entre dos unidades; el desgaste de una máquina, la subida del precio de un piso o un incendio no lo son. El sistema las separa en cuentas propias precisamente para que no se cuelen en la actividad económica, y por eso una revalorización inmobiliaria general no aparece en el PIB de nadie." },
            { t: "Suponer que reclasificar una partida no mueve nada", d: "Mueve todo lo que hay por debajo, porque los saldos encadenan. Capitalizar la I+D no cambió ni un euro de lo que gastan las empresas y sin embargo elevó el PIB, el excedente, el ahorro y el consumo de capital fijo de toda la Unión Europea." },
            { t: "Buscar el significado de un código en la memoria en lugar de en la gramática", d: "La letra sitúa la familia y el dígito estrecha. D.42 tiene que ser una renta de la propiedad viva en la cuenta de asignación de renta primaria, y AN.211 tiene que ser un activo no producido que vive en el balance. Aprender la regla ahorra memorizar el catálogo." },
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
            "Esta ficha es el índice del bloque: cada familia de códigos se abre en una ficha propia.",
          ],
          lista: [
            "Las operaciones de **productos (P)** se recorren en las fichas 13.02 —el equilibrio entre oferta y empleos—, 13.03 —el consumo intermedio— y 13.08 —la formación de capital—.",
            "Las operaciones de **distribución (D)** ocupan cuatro fichas: la 13.04 para la remuneración de asalariados, la 13.05 para los impuestos sobre la producción, la 13.06 para los impuestos sobre la renta y la 13.07 para cotizaciones y prestaciones.",
            "Los **activos (AN y AF)** y las **otras variaciones (K)** se ven en las fichas 13.09, sobre los no producidos, y 13.10, sobre los balances y las revalorizaciones.",
            "Las operaciones **financieras (F)** son el único grupo que este bloque solo esboza, en la ficha 13.10: su desarrollo completo pertenece a las cuentas financieras del Banco de España, que la ficha 12.04 ya usó como fuente.",
            "Y toda la secuencia de **saldos (B)** está en la ficha 10.06 y en las diez del bloque 12, que este bloque no repite sino que abre.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el SEC es un lenguaje antes que un catálogo**. Siete letras, la partida doble y el encadenamiento de saldos explican la estructura entera; el resto es vocabulario, y el vocabulario se aprende mucho más rápido cuando ya se tiene la gramática.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué distingue una operación P de una operación D?", a: "Que en la P hay un bien o un servicio de por medio y en la D no. La D reparte renta sin contrapartida real: salarios, impuestos, intereses, prestaciones, transferencias. Comprar acero es P.2; pagar el IBI del local es D.29, aunque ambos salgan de la misma cuenta corriente." },
            { q: "¿Por qué la remuneración de asalariados no cambia la renta nacional aunque sea enorme?", a: "Porque es empleo de las sociedades y recurso de los hogares por el mismo importe, así que se anula al agregar los sectores residentes. Solo altera la renta nacional la parte cuyo pagador o cobrador está fuera de la frontera, y esa es precisamente la diferencia entre el PIB y la renta nacional bruta." },
            { q: "¿Qué diferencia hay entre B.8g y B.8n, y por qué importa?", a: "La g incluye el consumo de capital fijo y la n lo ha restado, es decir, lo que hay que reponer solo para que el capital existente no se deteriore. En una economía madura son varios puntos del PIB, de modo que comparar una magnitud bruta con una neta puede invertir el signo de la conclusión." },
            { q: "¿Por qué las variaciones K no se registran como operaciones?", a: "Porque una operación es un acuerdo entre dos unidades, y nadie acuerda que una máquina se desgaste, que un piso suba de precio o que arda una nave. El sistema las aísla en cuentas propias para que no se confundan con actividad económica, y por eso una revalorización inmobiliaria general no entra en el PIB." },
            { q: "Capitalizar la I+D no cambió ni un euro del gasto de las empresas. ¿Por qué subió el PIB?", a: "Porque el valor añadido es producción menos consumos intermedios, y la reclasificación sacó la I+D del P.2 para llevarla a P.51g. Lo que antes restaba dejó de restar y además pasó a contar como inversión, componente de la demanda final. Y como los saldos encadenan, el efecto siguió hacia el excedente, el ahorro y la capacidad de financiación." },
            { q: "Sin consultar el reglamento, ¿dónde vive el código P.52?", a: "La P dice que hay bienes de por medio; el 5 dice que es formación de capital; el 2 dice que son existencias. Luego es la variación de existencias y vive en la cuenta de capital. La gramática basta: la letra sitúa la familia y el dígito estrecha." },
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
              q: "¿Puede buscarse la contrapartida de un B.2g en otro sector?",
              opciones: [
                "Sí: toda anotación del sistema tiene contrapartida por partida doble",
                "No: los saldos B no son operaciones, son lo que queda al cerrar una cuenta",
                "No, salvo en las cuentas del resto del mundo",
                "Sí, en el sector que recibe el excedente",
              ],
              correcta: 1,
              porque: [
                "La partida doble se aplica a las operaciones, y un saldo no lo es.",
                "Nadie paga ni cobra un B.2g. Buscar su contrapartida lleva a un callejón sin salida y suele ser el primer síntoma de no haber entendido la gramática del sistema.",
                "Tampoco allí: los saldos del S.2 son igualmente saldos.",
                "El excedente no se transfiere a nadie: es la diferencia que resulta de restar unas partidas a otras.",
              ],
            },
            {
              q: "Un banco concede un préstamo y después cobra los intereses. ¿A qué familias de códigos pertenece cada cosa?",
              opciones: [
                "El préstamo es D y los intereses F",
                "Ambas a la familia D, porque las dos distribuyen renta",
                "El préstamo es F (operación financiera) y los intereses D (operación de distribución)",
                "Ambas a la familia F, por tratarse de operaciones bancarias",
              ],
              correcta: 2,
              porque: [
                "Es exactamente el cruce contrario al correcto.",
                "El préstamo no distribuye renta: cambia la composición del balance de las dos partes.",
                "Conceder un préstamo intercambia un activo financiero por dinero y no reparte renta; cobrar intereses sí reparte renta y no crea ningún activo nuevo.",
                "Que las realice un banco no las mete en la misma familia: lo que decide es la naturaleza de la operación.",
              ],
            },
            {
              q: "Sin consultar el reglamento, ¿qué se puede deducir del código D.42?",
              opciones: [
                "Que es una renta de la propiedad, y por tanto vive en la cuenta de asignación de renta primaria",
                "Que es un activo no financiero, por el 4 inicial",
                "Que es un saldo contable de la cuarta cuenta de la secuencia",
                "Que es un impuesto, porque la familia D agrupa la imposición",
              ],
              correcta: 0,
              porque: [
                "La letra sitúa la familia y el dígito estrecha: D.4 son rentas de la propiedad, así que D.42 tiene que ser una de ellas. La gramática ahorra memorizar miles de partidas.",
                "Los activos no financieros llevan el prefijo AN, no D.",
                "Los saldos llevan la letra B.",
                "La D agrupa las operaciones de distribución, de las que los impuestos son solo una parte.",
              ],
            },
            {
              q: "¿Qué relación hay entre el saldo de una cuenta y la cuenta siguiente?",
              opciones: [
                "El saldo de una cuenta debe coincidir con el de la siguiente",
                "El saldo de una cuenta es la primera entrada de la siguiente, y por eso cualquier reclasificación arrastra todo lo que hay por debajo",
                "Las cuentas se encadenan solo dentro de cada sector, no en el agregado",
                "Ninguna: cada cuenta se calcula de forma independiente y luego se concilian",
              ],
              correcta: 1,
              porque: [
                "No coinciden: el saldo entra en la siguiente cuenta y allí se le suman y restan otras partidas.",
                "Por eso el sistema es una cadena y no una lista: mover una partida arriba mueve todos los saldos posteriores.",
                "El encadenamiento opera igual en el agregado nacional.",
                "Se calculan encadenadas por construcción, no de forma independiente.",
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
            { ref: "SEC 2010, capítulo 1 — características generales y principios contables", nota: "la partida doble, el encadenamiento de saldos y la distinción entre operaciones y otras variaciones." },
            { ref: "SEC 2010, anexo 7.1 — clasificación de activos", nota: "el catálogo completo de AN y AF, que conviene tener a mano al leer las fichas 13.08 a 13.10." },
            { ref: "Eurostat, cambios del SEC 2010 frente al SEC 95", nota: "la lista de reclasificaciones y su efecto sobre el nivel del PIB; el caso de la I+D y el de los sistemas de armamento." },
            { ref: "Lequiller y Blades, Understanding National Accounts, capítulo 1", nota: "la mejor introducción no reglamentaria a por qué el sistema está montado así." },
            { ref: "INE, Contabilidad Nacional Anual de España — cuadros por operación", nota: "para practicar la lectura de códigos sobre datos reales y comprobar la gramática." },
          ],
        },
      ],
    },
  ],
};
