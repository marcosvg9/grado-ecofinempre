/* Ficha 8.09 — Derivados II: opciones y Black-Scholes. */

export default {
  codigo: "8.09",
  titulo: "Derivados II: opciones y Black-Scholes",
  nivel: 4,
  bloque: "Mercados financieros e inversión",
  tiempo: "6 h",
  nucleo:
    "Una opción se valora sin necesidad de saber si el subyacente subirá o bajará, porque su pago se puede replicar exactamente con una cartera de subyacente y deuda. El precio es el coste de esa réplica, y de ahí sale que la rentabilidad esperada del activo no aparezca en la fórmula.",
  requiere: "8.08 Futuros y forwards · 8.05 Riesgo y volatilidad",
  abre: "8.10 Gestión de riesgos · 7.10 Fusiones y adquisiciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una **opción de compra** da derecho, no obligación, a comprar un activo a un precio fijado. Una **opción de venta** da el derecho a venderlo. Esa asimetría entre derecho y obligación es lo que las distingue de los futuros y lo que hace que tengan precio: quien la compra paga una prima por poder elegir después, y quien la vende cobra esa prima a cambio de quedar sujeto a la decisión ajena.",
            "El valor de una opción se descompone en dos partes. El **valor intrínseco** es lo que se obtendría ejerciéndola ahora, nunca negativo porque nadie ejerce en su contra. El **valor temporal** es lo que se paga por la posibilidad de que la situación mejore antes del vencimiento, y depende sobre todo de cuánto tiempo queda y de cuánto se mueve el subyacente. Una opción muy fuera de dinero tiene valor intrínseco cero y aun así cotiza a un precio positivo.",
            "El resultado central de la teoría, y el que le valió el Nobel a Merton y Scholes, es que **el pago de una opción se puede replicar** con una cartera de subyacente y deuda que se reajusta continuamente. Si esa réplica existe, el precio de la opción tiene que ser el coste de construirla, porque en caso contrario habría arbitraje. Y de ese argumento sale una consecuencia contraria a la intuición: **la rentabilidad esperada del subyacente no aparece en la fórmula**. Dos inversores con opiniones opuestas sobre si la acción subirá deben coincidir en el precio de la opción.",
            "Lo que sí aparece es la **volatilidad**, y es el único parámetro no observable de la fórmula. De ahí que en la práctica se invierta el uso del modelo: en lugar de introducir una volatilidad para obtener un precio, se toma el precio de mercado y se despeja la **volatilidad implícita**. Black-Scholes funciona así menos como modelo de valoración y más como **lenguaje común de cotización**, igual que la TIR en renta fija.",
            "El modelo descansa en supuestos que no se cumplen: volatilidad constante, rentabilidades con distribución lognormal, negociación continua sin costes y ausencia de saltos. La prueba más visible de que fallan es la **sonrisa de volatilidad**: si el modelo fuera correcto, todas las opciones sobre el mismo subyacente y vencimiento tendrían la misma volatilidad implícita, y en la práctica las de precio de ejercicio bajo cotizan con volatilidad implícita mayor. El mercado está cobrando más por la protección frente a caídas de lo que un modelo de distribución normal justificaría, porque sabe que las caídas bruscas son más frecuentes de lo que esa distribución predice.",
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
            { nom: "Pago de una opción de compra", sub: "Al vencimiento, nunca negativo.", cols: ["$\\max(S_T - K,\\ 0)$"] },
            { nom: "Pago de una opción de venta", sub: "Simétrico.", cols: ["$\\max(K - S_T,\\ 0)$"] },
            { nom: "Paridad put-call", sub: "Relación de arbitraje entre ambas y el subyacente.", cols: ["$C - P = S - K e^{-rT}$"] },
            { nom: "Fórmula de Black-Scholes", sub: "Para una opción de compra europea sin dividendos.", cols: ["$C = S\\,N(d_1) - K e^{-rT} N(d_2)$"] },
            { nom: "Parámetros $d_1$ y $d_2$", sub: "No aparece la rentabilidad esperada del subyacente.", cols: ["$d_1 = \\dfrac{\\ln(S/K) + (r + \\sigma^2/2)T}{\\sigma\\sqrt T}$ · $d_2 = d_1 - \\sigma\\sqrt T$"] },
            { nom: "Delta", sub: "Cuántas unidades de subyacente replican la opción.", cols: ["$\\Delta = N(d_1)$ para la compra"] },
            { nom: "Vega", sub: "Sensibilidad a la volatilidad, siempre positiva.", cols: ["$\\dfrac{\\partial C}{\\partial \\sigma} > 0$ para compras y ventas"] },
          ],
          nota: "La **paridad put-call** no depende de ningún modelo: se deduce solo de ausencia de arbitraje. Por eso es la primera comprobación de cualquier precio de opciones, y basta con valorar una de las dos para obtener la otra.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una opción a un año",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Acción a **100 €**, precio de ejercicio **100 €**, tipo sin riesgo **4 %**, volatilidad **25 %**, vencimiento **un año**, sin dividendos.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Cálculo", "Resultado"],
          filas: [
            ["$d_1$", "[0 + (0,04 + 0,03125)] / 0,25", "0,285"],
            ["$d_2$", "0,285 − 0,25", "0,035"],
            ["$N(d_1)$", "función de distribución normal", "0,6122"],
            ["$N(d_2)$", "—", "0,5140"],
            ["Valor actual del ejercicio", "$100 \\times e^{-0{,}04}$", "96,08 €"],
            { celdas: ["Precio de la opción de compra", "100 × 0,6122 − 96,08 × 0,5140", "11,84 €"], clase: "total" },
            ["Precio de la opción de venta (paridad)", "11,84 − 100 + 96,08", "7,92 €"],
            ["Delta de la compra", "$N(d_1)$", "0,612"],
          ],
          nota: "La opción está **en dinero** —el precio de ejercicio iguala al de la acción— así que su valor intrínseco es cero y los 11,84 € son **íntegramente valor temporal**. La delta de 0,612 indica que replicar la opción exige mantener 0,612 acciones financiadas con deuda, y que un movimiento de un euro en la acción mueve la opción unos 61 céntimos.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El efecto de la volatilidad**, que es el parámetro que decide todo. Manteniendo el resto igual:",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Precio acción", y: "Valor opción" },
          dominio: { x: [60, 140], y: [0, 46] },
          marcasX: [60, 80, 100, 120, 140],
          marcasY: [0, 10, 20, 30, 40],
          series: [
            {
              nombre: "Valor hoy",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [140, 44.75],
              puntos: [[60, 0.22], [70, 1], [80, 2.95], [85, 4.52], [90, 6.53], [95, 8.97], [100, 11.84], [105, 15.08], [110, 18.67], [115, 22.54], [120, 26.66], [130, 35.45], [140, 44.75]],
            },
            {
              nombre: "Al vencimiento",
              color: "alerta",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [138, 34],
              puntos: [[60, 0], [100, 0], [140, 40]],
            },
          ],
          puntos: [
            { x: 100, y: 11.84, etiqueta: "hoy: 11,84 €", guias: false },
          ],
          nota: "La línea quebrada es el **valor intrínseco**: lo que valdría la opción si venciera ahora mismo, cero por debajo de 100 y la diferencia por encima. La curva suave es lo que **vale hoy**, con un año por delante. La distancia vertical entre ambas es el **valor temporal**, y su forma explica casi todo lo que hay que saber sobre opciones. Es máxima justo en el precio de ejercicio, donde la incertidumbre sobre si acabará dentro o fuera del dinero es mayor —**11,84 € de puro valor temporal**— y se desvanece en los dos extremos, donde el desenlace ya está prácticamente decidido. Obsérvese además que la curva **nunca baja de cero** por muy lejos que caiga la acción: esa asimetría entre pérdida limitada y ganancia abierta es la razón de que **más volatilidad siempre encarezca la opción**, como muestra la tabla siguiente.",
        },
        {
          tipo: "tabla",
          cabecera: ["Volatilidad", "Opción de compra", "Opción de venta", "Variación"],
          filas: [
            ["15 %", "8,60 €", "4,68 €", "−27 %"],
            ["25 %", "11,84 €", "7,92 €", "referencia"],
            ["35 %", "15,67 €", "11,75 €", "+32 %"],
            { celdas: ["45 %", "19,55 €", "15,63 €", "+65 %"], clase: "total" },
          ],
          nota: "Subir la volatilidad de un 25 % a un 35 % encarece la opción un **32 %**, y encarece igual la de compra y la de venta. Eso desconcierta al principio y tiene sentido: **más volatilidad significa más probabilidad de movimientos grandes en ambas direcciones**, y como la pérdida del comprador está limitada a la prima, solo se beneficia del lado favorable. La asimetría del pago convierte la incertidumbre en valor.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Comprobación de la paridad.** Comprar la opción de compra y vender la de venta cuesta 11,84 − 7,92 = **3,92 €**, y equivale a tener la acción financiada: 100 − 96,08 = **3,92 €**. Coinciden por construcción. Si en el mercado no coincidieran, existiría un arbitraje sin riesgo, y esa comprobación se puede hacer sin creer en Black-Scholes ni en ningún otro modelo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la volatilidad implícita como precio del miedo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En la práctica nadie usa Black-Scholes para decidir cuánto vale una opción. Se observa el precio al que cotiza y se despeja qué volatilidad lo haría consistente con el modelo. Esa **volatilidad implícita** es lo que realmente se negocia, y se ha convertido en un indicador por derecho propio: los índices de volatilidad que publican los mercados —el más conocido sobre el índice estadounidense— son medias de volatilidades implícitas y se citan como termómetro de la tensión financiera.",
            "**La sonrisa de volatilidad** es la anomalía que revela los límites del modelo. Si los supuestos se cumplieran, todas las opciones sobre el mismo subyacente y vencimiento arrojarían la misma volatilidad implícita. Lo observado es distinto: las opciones con precio de ejercicio bajo —las que protegen de caídas— cotizan con volatilidad implícita sistemáticamente superior. En renta variable la curva no es simétrica sino descendente, y por eso se habla de sesgo más que de sonrisa.",
            "**Qué significa.** El mercado cobra más por la protección frente a caídas de lo que una distribución lognormal justificaría, porque las caídas bruscas y correlacionadas son más frecuentes de lo que ese supuesto predice. Es la misma observación de la ficha 8.05 sobre correlaciones que se disparan en las crisis, vista desde el precio de los seguros. **El fenómeno se documentó de forma generalizada a partir del desplome bursátil de 1987**, que fue un movimiento de una magnitud a la que el modelo asignaba una probabilidad prácticamente nula.",
            "**La consecuencia práctica** es doble. Primero, que usar una única volatilidad para valorar una cartera de opciones con distintos precios de ejercicio introduce errores sistemáticos. Segundo, y más importante, que **la protección frente a caídas es cara precisamente porque es valiosa**: comprar opciones de venta como seguro de cartera funciona, y su coste sostenido a lo largo de los años suele superar al de las pérdidas que evita, salvo que se acierte con el momento.",
            "**Y una advertencia sobre vender opciones.** Vender opciones de venta cubiertas produce ingresos regulares y pequeños durante largos períodos, con pérdidas ocasionales y muy grandes. El perfil de resultados parece excelente en cualquier ventana temporal que no incluya una crisis, y es exactamente el patrón que hace que los sistemas de medición de riesgo basados en datos históricos —los de la ficha siguiente— subestimen la exposición.",
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
            { t: "Buscar la rentabilidad esperada del subyacente en la fórmula", d: "No aparece, y no es un olvido. El argumento de réplica hace que el precio dependa solo de lo que cuesta construir la cartera equivalente. Dos inversores con expectativas opuestas sobre la acción deben coincidir en el precio de la opción." },
            { t: "Creer que más volatilidad perjudica al comprador de opciones", d: "Beneficia tanto al comprador de compras como al de ventas. La pérdida está limitada a la prima y la ganancia no, así que más dispersión de resultados aumenta el valor esperado del pago. La asimetría convierte incertidumbre en valor." },
            { t: "Usar una única volatilidad para toda la cartera", d: "La sonrisa —o el sesgo— implica volatilidades implícitas distintas según el precio de ejercicio. Aplicar una sola introduce errores sistemáticos, y en particular infravalora las opciones de protección frente a caídas." },
            { t: "Confiar en la delta sin considerar la gamma", d: "La delta cambia cuando se mueve el subyacente, y esa variación la mide la gamma. Una cobertura ajustada por delta se desajusta con cada movimiento, y en movimientos bruscos el desajuste puede ser mayor que la protección que ofrecía." },
            { t: "Vender opciones sin dimensionar la pérdida máxima", d: "El vendedor cobra una prima limitada y asume un riesgo que puede ser muy grande, ilimitado en el caso de una opción de compra descubierta. El perfil produce beneficios pequeños y regulares hasta que produce una pérdida que borra años de ingresos." },
            { t: "Aplicar Black-Scholes a opciones americanas sin ajuste", d: "La fórmula vale para opciones europeas. Con posibilidad de ejercicio anticipado, y especialmente con dividendos de por medio, hacen falta métodos numéricos como los árboles binomiales." },
            { t: "Tratar la volatilidad implícita como una previsión", d: "Incorpora la expectativa de volatilidad futura **más** una prima de riesgo. Históricamente la volatilidad implícita ha superado a la realizada de forma sistemática, lo que significa que vender esa protección ha sido rentable en promedio, con el perfil de riesgo descrito arriba." },
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
            "El SEC 2010 dedica una categoría propia a un tipo concreto de opción, y su tratamiento resulta instructivo.",
          ],
          lista: [
            "La categoría AF.7 se subdivide en **derivados financieros (AF.71)** y **opciones de compra de acciones de los asalariados (AF.72)**. Que estas últimas tengan epígrafe propio indica la importancia que se les concede como forma de remuneración.",
            "El tratamiento es explícito: las opciones concedidas a empleados se registran como **remuneración de asalariados (D.11)**, valoradas a valor razonable en el momento de la concesión y, si es posible, distribuidas a lo largo del período en que se prestan los servicios.",
            "Esto tiene una consecuencia relevante para la medición: **la retribución en opciones es coste laboral y forma parte del valor añadido distribuido al trabajo**, aunque no suponga salida de caja para la empresa. Si no se registrara, el excedente de explotación de los sectores intensivos en este tipo de retribución aparecería inflado.",
            "La valoración exige un modelo, y en la práctica se recurre a Black-Scholes o a variantes suyas. Es uno de los pocos lugares donde una fórmula de valoración de derivados entra directamente en la construcción de un agregado macroeconómico.",
            "Los **derivados en general (AF.71)** no generan renta de la propiedad, como se vio en la ficha anterior: sus liquidaciones son operaciones financieras y sus cambios de valor, revalorizaciones.",
          ],
          cierre:
            "El contraste es ilustrativo: una opción concedida a un empleado es coste laboral y afecta al reparto del valor añadido; la misma opción negociada en el mercado es un instrumento financiero cuyos movimientos no tocan la renta. La diferencia la marca la función económica, no el instrumento.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Una acción cotiza a 45 € y una opción de compra con ejercicio 40 € vale 7 €. ¿Cuánto es valor temporal?", a: "El valor intrínseco es 5 € y el temporal, 2 €. Ese exceso es lo que se paga por la posibilidad de que la acción siga subiendo antes del vencimiento." },
            { q: "¿Por qué no aparece la rentabilidad esperada del subyacente en Black-Scholes?", a: "Porque el pago de la opción se replica con una cartera de subyacente y deuda, y el precio debe ser el coste de esa réplica. Si dependiera de las expectativas, existiría arbitraje entre inversores con opiniones distintas." },
            { q: "Sube la volatilidad. ¿Qué le pasa a la opción de venta?", a: "Se encarece, igual que la de compra. Más dispersión aumenta el valor esperado del pago porque la pérdida del comprador está limitada a la prima y la ganancia no lo está." },
            { q: "C = 8 €, S = 100 €, K = 95 €, valor actual del ejercicio 92 €. ¿Cuánto vale la opción de venta?", a: "Por paridad: $P = C - S + K e^{-rT} = 8 - 100 + 92 = 0$ €. Un resultado nulo indica que los datos son inconsistentes o que la opción de venta está en el límite; la paridad es una relación de arbitraje que no depende de ningún modelo." },
            { q: "¿Cómo registra el SEC 2010 las opciones concedidas a empleados?", a: "Como remuneración de asalariados D.11, valoradas a valor razonable en la concesión. Son coste laboral y forman parte del valor añadido distribuido al trabajo, aunque no supongan salida de caja para la empresa." },
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
              q: "¿Dónde aparece la rentabilidad esperada del subyacente en la fórmula de Black-Scholes?",
              opciones: [
                "En la deriva del proceso del subyacente",
                "En ningún sitio, y no es un olvido: el argumento de réplica hace que el precio dependa solo de lo que cuesta construir la cartera equivalente",
                "Está implícita en el tipo sin riesgo",
                "Aparece solo en las opciones de venta",
              ],
              correcta: 1,
              porque: [
                "La deriva real desaparece del resultado precisamente porque la réplica la neutraliza.",
                "Dos inversores con expectativas opuestas sobre la acción deben coincidir en el precio de la opción, porque ambos pueden replicarla al mismo coste.",
                "El tipo sin riesgo es el coste de financiar la cartera réplica, no la rentabilidad esperada del activo disfrazada.",
                "La fórmula de la opción de venta se obtiene por paridad y tampoco la contiene.",
              ],
            },
            {
              q: "Sube la volatilidad esperada del subyacente. ¿A quién beneficia?",
              opciones: [
                "Al comprador de opciones de compra y perjudica al de opciones de venta",
                "Al vendedor de opciones, que cobra más prima",
                "Al comprador de opciones, tanto de compra como de venta",
                "A nadie: la volatilidad no afecta al precio de la opción",
              ],
              correcta: 2,
              porque: [
                "Beneficia a los compradores de ambos tipos: el efecto no depende de la dirección esperada.",
                "El vendedor cobra más prima porque el riesgo que asume es mayor; no sale ganando por ello.",
                "La pérdida del comprador está limitada a la prima y la ganancia no, así que más dispersión de resultados aumenta el valor de la opción.",
                "Es uno de los parámetros que más pesan: de hecho es el único que no se observa directamente y hay que estimar.",
              ],
            },
            {
              q: "Una cartera está cubierta por delta. ¿Queda protegida frente a un movimiento brusco del subyacente?",
              opciones: [
                "Sí: la delta mide exactamente la sensibilidad al subyacente",
                "No: la delta cambia al moverse el subyacente, y esa variación —la gamma— desajusta la cobertura",
                "Sí, si se recalcula la delta al cierre de cada sesión",
                "No, porque la delta solo cubre movimientos a la baja",
              ],
              correcta: 1,
              porque: [
                "La mide en un punto: es una derivada, y vale para movimientos pequeños alrededor del nivel actual.",
                "En movimientos grandes el desajuste es rápido y sustancial, que es cuando más falta hacía la cobertura.",
                "El ajuste diario ayuda con derivas lentas y no salva un salto brusco, que ocurre entre ajustes.",
                "La delta es simétrica; el problema es su variación, no la dirección del movimiento.",
              ],
            },
            {
              q: "La volatilidad implícita de las opciones sobre un índice está en el 22 %. ¿Es la previsión del mercado sobre la volatilidad futura?",
              opciones: [
                "Sí: por eso se la llama la previsión implícita del mercado",
                "No: es la volatilidad histórica del último año",
                "Sí, siempre que se tome la de las opciones a dinero",
                "No: incorpora la expectativa más una prima de riesgo, y ha superado sistemáticamente a la volatilidad realizada",
              ],
              correcta: 3,
              porque: [
                "El nombre es engañoso: lo implícito es lo que hace cuadrar el precio, y en ese precio hay más cosas que una previsión.",
                "La implícita se extrae de los precios de las opciones, mirando hacia adelante; la histórica se calcula sobre el pasado.",
                "Tomar las opciones a dinero reduce el efecto de la sonrisa, pero no elimina la prima de riesgo.",
                "Quien vende volatilidad exige ser compensado por asumirla, y esa compensación es la brecha persistente entre implícita y realizada.",
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
            { ref: "Hull, Introducción a los mercados de futuros y opciones", nota: "la referencia. Los capítulos sobre propiedades de las opciones, Black-Scholes y las griegas están construidos para leerse en orden." },
            { ref: "Natenberg, Option Volatility and Pricing", nota: "el enfoque práctico desde la mesa de negociación, con el tratamiento de la sonrisa y de la volatilidad implícita." },
            { ref: "Taleb, Dynamic Hedging", nota: "exigente, y la mejor exposición de por qué los supuestos del modelo fallan justo cuando más importa." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 4 y 5", nota: "remuneración de asalariados y clasificación AF.71 y AF.72, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
