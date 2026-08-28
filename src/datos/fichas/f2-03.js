/* Ficha 2.03 — Efecto renta y efecto sustitucion (Slutsky). */

export default {
  codigo: "2.03",
  titulo: "Efecto renta y efecto sustitución (Slutsky)",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "Un cambio de precio hace dos cosas a la vez: altera los precios relativos y altera el poder adquisitivo. Separarlas explica por qué la demanda casi siempre cae cuando el precio sube, por qué existe una excepción teórica, y por qué los índices de precios de tipo Laspeyres sobreestiman la inflación.",
  requiere: "2.02 Elección del consumidor",
  abre: "1.07 Números índice · 1.04 Excedente y bienestar",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cuando sube el precio de un bien ocurren dos cosas simultáneas y de naturaleza distinta. La primera es que **ese bien se ha encarecido en relación con los demás**, lo que induce a sustituirlo por alternativas. La segunda es que **el consumidor es más pobre en términos reales**, porque su renta nominal compra menos que antes. La descomposición de Slutsky separa ambos efectos, y esa separación es la que da contenido a toda la teoría de la demanda.",
            "El **efecto sustitución** es la variación de consumo atribuible únicamente al cambio de precios relativos, manteniendo constante la capacidad de compra. Tiene una propiedad que es un teorema, no una observación empírica: **es siempre de signo contrario al del cambio de precio**. Si el bien se encarece, el efecto sustitución reduce su consumo, sin excepciones ni condiciones.",
            "El **efecto renta** es la variación atribuible al cambio de poder adquisitivo. Su signo depende de la naturaleza del bien: en un bien **normal**, ser más pobre reduce el consumo, de modo que refuerza al efecto sustitución; en un bien **inferior**, ser más pobre aumenta el consumo, de modo que lo contrarresta.",
            "De ahí se deduce el resultado central. Para un bien normal, ambos efectos apuntan en la misma dirección y la demanda tiene necesariamente pendiente negativa. Para un bien inferior, se oponen, y **si el efecto renta llegara a dominar al de sustitución, la demanda tendría pendiente positiva**: sería un bien **Giffen**. No es una anomalía lógica sino una posibilidad contemplada por la teoría, que exige que el bien sea inferior y que absorba una proporción muy grande del presupuesto.",
            "Hay **dos formas de mantener constante la capacidad de compra** y no dan el mismo resultado. La de **Slutsky** ajusta la renta para que el consumidor pueda seguir comprando exactamente la cesta original; es operativa porque solo requiere datos observables. La de **Hicks** ajusta la renta para mantener el mismo nivel de utilidad; es conceptualmente más limpia y exige conocer las preferencias. Ambas dan el mismo efecto total y reparten distinto entre sustitución y renta.",
            "La relación formal entre todo esto es la **ecuación de Slutsky**, que descompone la derivada de la demanda marshalliana en la derivada de la hicksiana —el efecto sustitución, siempre negativo— menos un término de renta ponderado por la cantidad consumida. Ese segundo término explica por qué el efecto renta pesa más cuanto mayor es la proporción del presupuesto dedicada al bien.",
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
            { nom: "Ecuación de Slutsky", sub: "El primer término es el efecto sustitución.", cols: ["$\\dfrac{\\partial x}{\\partial p} = \\dfrac{\\partial x^h}{\\partial p} - x\\,\\dfrac{\\partial x}{\\partial m}$"] },
            { nom: "Signo del efecto sustitución", sub: "Es un teorema, no una regularidad empírica.", cols: ["$\\dfrac{\\partial x^h}{\\partial p} \\leq 0$ siempre"] },
            { nom: "Compensación de Slutsky", sub: "Renta que permite comprar la cesta original.", cols: ["$m' = p' x_0$"] },
            { nom: "Compensación de Hicks", sub: "Renta que permite alcanzar la utilidad original.", cols: ["$m' = e(p', U_0)$"] },
            { nom: "En elasticidades", sub: "w es la proporción de gasto en el bien.", cols: ["$\\varepsilon = \\varepsilon^s - w\\,\\eta$"] },
            { nom: "Condición de bien Giffen", sub: "Inferior y con peso presupuestario alto.", cols: ["$\\eta < 0$ y $|w\\eta| > |\\varepsilon^s|$"] },
            { nom: "Función de gasto", sub: "Gasto mínimo para alcanzar U a los precios p.", cols: ["$e(p, U) = \\min\\{\\,p x : U(x) \\geq U\\,\\}$"] },
          ],
          nota: "El término de renta va ponderado por **x**, la cantidad consumida. Por eso un bien que absorbe una fracción minúscula del presupuesto tiene efecto renta despreciable aunque sea inferior, y por eso los candidatos a bien Giffen son alimentos básicos en poblaciones de renta muy baja.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: descomponer una subida de precio",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos el consumidor de la ficha 2.01: $U = x^{0{,}5} y^{0{,}5}$, renta $m = 120$, precios iniciales $p_x = 4$ y $p_y = 6$, con cesta óptima (15, 10) y utilidad 12,247. El precio de $x$ sube a **6**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Bien X", y: "Bien Y" },
          dominio: { x: [0, 32], y: [0, 28] },
          marcasX: [0, 10, 20, 30],
          marcasY: [0, 10, 20],
          series: [
            {
              nombre: "Compensada",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 1.8,
              etiquetaEn: [25, 0],
              puntos: [[0, 25], [25, 0]],
            },
            {
              nombre: "Inicial",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [30, 0],
              puntos: [[0, 20], [30, 0]],
            },
            {
              nombre: "Final",
              color: "alerta",
              grosor: 2.2,
              etiquetaEn: [20, 0],
              puntos: [[0, 20], [20, 0]],
            },
            {
              nombre: "U = 12,25",
              color: "acento",
              trazo: "punteado",
              grosor: 1.6,
              etiquetaEn: [30, 5],
              puntos: [[6, 25], [8, 18.75], [10, 15], [12, 12.5], [15, 10], [18, 8.33], [22, 6.82], [26, 5.77], [30, 5]],
            },
            {
              nombre: "U = 10",
              color: "alerta",
              trazo: "punteado",
              grosor: 1.6,
              etiquetaEn: [30, 3.33],
              puntos: [[5, 20], [7, 14.29], [10, 10], [12.5, 8], [16, 6.25], [20, 5], [25, 4], [30, 3.33]],
            },
          ],
          puntos: [
            { x: 15, y: 10, etiqueta: "A  inicial", guias: false },
            { x: 12.5, y: 12.5, etiqueta: "C  Slutsky", guias: false },
            { x: 12.247, y: 12.247, etiqueta: "D  Hicks", guias: false },
            { x: 10, y: 10, etiqueta: "B  final", guias: false },
          ],
          nota: "El recorrido **A → C → B** es la descomposición completa. La subida de $p_x$ de 4 a 6 gira la recta presupuestaria hacia dentro, de la curva azul a la naranja, y el consumidor pasa de A a B: **cinco unidades menos de X**. Para separar los dos motivos se traza la **recta compensada** —punteada, con la nueva pendiente pero con renta suficiente para volver a comprar la cesta original— y el punto C que elige sobre ella. De A a C hay **sustitución pura**: mismo poder adquisitivo, X relativamente más caro, y por eso 2,5 unidades menos. De C a B hay **efecto renta puro**: mismos precios y menos renta, y otras 2,5 menos. El punto **D es la versión de Hicks**, que compensa hasta la utilidad original en vez de hasta la cesta original, y por eso cae justo sobre la curva de indiferencia de partida. **C queda ligeramente por encima de esa curva**: la compensación de Slutsky es algo más generosa, y de ahí los 2,753 frente a 2,50 de las dos tablas.",
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "x", "y", "Utilidad"],
          filas: [
            ["Inicial ($p_x = 4$)", "15,00", "10,00", "12,247"],
            ["Final ($p_x = 6$)", "10,00", "10,00", "10,000"],
            { celdas: ["Efecto total sobre x", "−5,00", "—", "—"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Descomposición de Slutsky.** Se ajusta la renta para que el consumidor pueda comprar la cesta original (15, 10) a los precios nuevos: m′ = 6·15 + 6·10 = **150**. Con esa renta y los precios nuevos, la demanda Cobb-Douglas da x = 0,5·150/6 = **12,5**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Descomposición de Slutsky", "Cálculo", "Efecto sobre x"],
          filas: [
            ["Efecto sustitución", "12,50 − 15,00", "−2,50"],
            ["Efecto renta", "10,00 − 12,50", "−2,50"],
            { celdas: ["Efecto total", "10,00 − 15,00", "−5,00 ✓"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Descomposición de Hicks.** Ahora se ajusta la renta para mantener la utilidad original de 12,247. Para estas preferencias la función de gasto es $e(p,U) = 2U\\sqrt{p_x p_y} = 2 \\times 12{,}247 \\times 6 = 146{,}97$, y la demanda compensada resulta $x^h = U\\sqrt{p_y/p_x} = 12{,}247 \\times 1 = 12{,}247$.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Descomposición de Hicks", "Cálculo", "Efecto sobre x"],
          filas: [
            ["Efecto sustitución", "12,247 − 15,000", "−2,753"],
            ["Efecto renta", "10,000 − 12,247", "−2,247"],
            { celdas: ["Efecto total", "10,000 − 15,000", "−5,000 ✓"], clase: "total" },
          ],
          nota: "**El efecto total coincide y el reparto no.** Slutsky reparte 2,50 y 2,50; Hicks, 2,753 y 2,247. La diferencia se debe a que la compensación de Slutsky (150 €) es algo más generosa que la de Hicks (146,97 €): permitir comprar la cesta antigua deja al consumidor **algo mejor** que antes, porque puede reoptimizar. Esa diferencia es exactamente la que da lugar al sesgo de sustitución de los índices de precios.",
        },
        {
          tipo: "parrafos",
          items: [
            "Como x es un bien **normal** en estas preferencias, ambos efectos son negativos y se refuerzan: la demanda cae inequívocamente. Para que apareciera un bien Giffen haría falta que x fuera inferior y que su peso presupuestario fuera lo bastante grande para que el término de renta superase al de sustitución, algo que las preferencias Cobb-Douglas no pueden generar por construcción.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: bienes Giffen y el sesgo de los índices de precios",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Los bienes Giffen** fueron durante un siglo una curiosidad de manual sin evidencia sólida. La intuición del mecanismo es clara: un hogar muy pobre que dedica la mayor parte de su presupuesto a un alimento básico barato y completa su dieta con alimentos más caros. Si el básico se encarece, el hogar se empobrece tanto que **debe renunciar al alimento caro y compensar comprando más del básico**, pese a que este haya subido.",
            "La condición no es que el bien sea barato, sino que sea **inferior y con peso presupuestario muy alto**. Ambas cosas rara vez coinciden en economías desarrolladas: los bienes inferiores suelen ocupar una fracción pequeña del gasto, y entonces el término de renta de la ecuación de Slutsky es despreciable. Los estudios que han encontrado el fenómeno lo han hecho en poblaciones de renta muy baja con dietas basadas en un cereal, mediante experimentos con subsidios de precio.",
            "**El sesgo de sustitución en los índices de precios** es la aplicación con consecuencias prácticas de esta ficha, y la que probablemente más te interese. Un índice de **Laspeyres** compara el coste de la cesta del período base a precios nuevos y a precios antiguos. Al fijar las cantidades del período base, **impide por construcción que el consumidor sustituya** hacia los bienes que se han abaratado en términos relativos.",
            "Pero eso es exactamente lo que hace un consumidor real: cuando un bien se encarece, reduce su consumo y aumenta el de otros. El coste de mantener el mismo nivel de bienestar es, por tanto, **menor** que el de comprar la cesta antigua. En consecuencia, **el índice de Laspeyres sobreestima el aumento del coste de la vida**, y la magnitud del sesgo es precisamente la del efecto sustitución de esta ficha.",
            "El razonamiento simétrico se aplica al índice de **Paasche**, que usa las cantidades del período corriente: al fijar la cesta después de que la sustitución ya se haya producido, **subestima** el aumento del coste de la vida. El verdadero índice del coste de la vida queda acotado entre ambos, y el índice de **Fisher** —media geométrica de los dos— se sitúa en medio y tiene mejores propiedades teóricas, lo que le vale el nombre de índice ideal.",
            "**El encadenamiento** es la respuesta práctica al problema: actualizar las ponderaciones con frecuencia reduce el sesgo, porque impide que la cesta se aleje mucho de la real. El precio que se paga es la **pérdida de aditividad** de los agregados en volumen, que es el problema de la ficha 10.08. Como tantas veces, no existe solución sin coste: solo elección informada entre dos inconvenientes.",
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
            { t: "Confundir bien inferior con bien Giffen", d: "Todos los Giffen son inferiores; casi ningún inferior es Giffen. Hace falta además que el bien absorba una proporción muy grande del presupuesto para que el término de renta domine al de sustitución en la ecuación de Slutsky." },
            { t: "Suponer que el efecto sustitución puede ser positivo", d: "Es negativo siempre, por teorema, no por evidencia. Si un cálculo da un efecto sustitución positivo, hay un error. Lo que puede ser positivo es el efecto renta, y solo en bienes inferiores." },
            { t: "Mezclar las compensaciones de Slutsky y de Hicks", d: "Dan el mismo efecto total y reparten distinto. Hay que elegir una y aplicarla de forma consistente. Slutsky es operativa con datos observables; Hicks es la correcta para análisis de bienestar y exige conocer las preferencias." },
            { t: "Olvidar el peso presupuestario en el efecto renta", d: "El término de renta va ponderado por la cantidad consumida. Un bien que supone el 0,5 % del gasto tiene efecto renta irrelevante aunque su elasticidad renta sea muy negativa. La magnitud importa tanto como el signo." },
            { t: "Creer que el sesgo de sustitución es un defecto corregible del IPC", d: "Es consecuencia inevitable de fijar ponderaciones. Se atenúa encadenando y actualizando la cesta, pero no desaparece, y la solución tiene su propio coste en pérdida de aditividad." },
            { t: "Aplicar la descomposición a preferencias que no la admiten", d: "Con complementarios perfectos el efecto sustitución es nulo por construcción, y todo el cambio es efecto renta. Conviene comprobar qué estructura de preferencias se está usando antes de interpretar el reparto." },
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
            "Esta ficha es el fundamento microeconómico de la teoría de los números índice, y por tanto de buena parte del trabajo estadístico sobre precios y volúmenes.",
          ],
          lista: [
            "El **índice de Laspeyres** fija las cantidades del período base y, al impedir la sustitución, **sobreestima** el aumento del coste de la vida. El de **Paasche** fija las del corriente y lo **subestima**. El verdadero índice del coste de la vida queda entre ambos.",
            "El **índice de Fisher**, media geométrica de los dos, es el que mejor aproxima el ideal teórico, y satisface la propiedad de reversión temporal y factorial. Es la fórmula recomendada en varios manuales internacionales.",
            "El **encadenamiento** reduce el sesgo actualizando las ponderaciones cada período. A cambio se pierde la **aditividad** de los agregados en volumen: las componentes encadenadas ya no suman el total, y hay que trabajar con contribuciones al crecimiento en lugar de con niveles agregados.",
            "El mismo problema aparece en la **deflactación** de las cuentas nacionales: separar valor en precio y volumen exige elegir una fórmula, y cada elección incorpora un supuesto implícito sobre el comportamiento de sustitución de los agentes.",
            "Y en la comparación **entre países**, las paridades de poder adquisitivo se enfrentan exactamente al mismo problema con una dificultad añadida: las cestas de consumo difieren estructuralmente, de modo que la elección de ponderaciones puede cambiar la ordenación de países por renta real.",
          ],
          cierre:
            "Si trabajas con deflactores e índices encadenados, esta ficha explica de dónde viene el problema: no es una limitación técnica de la medición, es una consecuencia directa de que los consumidores sustituyen cuando cambian los precios relativos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Sube el precio de un bien normal. ¿En qué dirección van ambos efectos?", a: "Los dos reducen el consumo: el de sustitución porque el bien se ha encarecido en términos relativos, y el de renta porque el consumidor es más pobre y se trata de un bien normal. Por eso la demanda cae inequívocamente." },
            { q: "¿Qué condiciones exige un bien Giffen?", a: "Que sea inferior —efecto renta positivo ante una subida de precio— y que absorba una proporción suficientemente grande del presupuesto para que ese efecto domine al de sustitución. Ambas cosas rara vez coinciden." },
            { q: "Cesta inicial (20, 30) con precios (5, 4). El primer precio sube a 8. ¿Cuál es la compensación de Slutsky?", a: "La renta que permite comprar la cesta original a los precios nuevos: 8·20 + 4·30 = 280 €, frente a los 220 € iniciales. Es decir, 60 € de compensación." },
            { q: "¿Por qué el índice de Laspeyres sobreestima el coste de la vida?", a: "Porque fija las cantidades del período base e impide la sustitución hacia los bienes relativamente más baratos. El consumidor real sustituye, así que mantener su nivel de bienestar le cuesta menos que comprar la cesta antigua." },
            { q: "¿Qué se pierde al encadenar índices para reducir ese sesgo?", a: "La aditividad de los agregados en volumen: las componentes encadenadas ya no suman el total. Por eso se trabaja con contribuciones al crecimiento en lugar de con niveles agregados." },
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
              q: "Un cálculo de descomposición de Slutsky arroja un efecto sustitución positivo. ¿Qué significa?",
              opciones: [
                "Que la compensación se ha hecho a la manera de Hicks en vez de Slutsky",
                "Que el bien es Giffen",
                "Que el bien es inferior y el efecto renta domina",
                "Que hay un error: el efecto sustitución es negativo siempre, por teorema",
              ],
              correcta: 3,
              porque: [
                "Las dos compensaciones reparten distinto entre ambos efectos, pero ninguna puede volver positivo el de sustitución.",
                "Los bienes Giffen tienen efecto sustitución negativo como todos; lo que los define es un efecto renta positivo y lo bastante grande para vencerlo.",
                "Que domine el efecto renta cambia el signo del efecto *total*, no el del de sustitución, que sigue siendo negativo por separado.",
                "Es un resultado demostrado, no una regularidad empírica: manteniendo el poder adquisitivo, encarecer un bien nunca aumenta su demanda compensada. Un signo positivo delata un fallo de cálculo.",
              ],
            },
            {
              q: "¿Qué le falta a un bien inferior para ser Giffen?",
              opciones: [
                "Nada: todo bien inferior es Giffen",
                "Que no tenga sustitutivos cercanos",
                "Que su elasticidad-renta sea inferior a $-1$",
                "Que absorba una proporción muy grande del presupuesto, para que el efecto renta venza al de sustitución",
              ],
              correcta: 3,
              porque: [
                "Todos los Giffen son inferiores, pero casi ningún inferior es Giffen. La implicación va en un solo sentido.",
                "La falta de sustitutivos hace la demanda inelástica, que es otra cosa. Un bien sin sustitutivos puede tener pendiente negativa perfectamente.",
                "La magnitud de la elasticidad-renta ayuda, pero sin peso presupuestario grande sigue sin bastar: es el producto de ambas cosas lo que decide.",
                "El término de renta va ponderado por el peso del bien en el gasto. Un bien que supone el 0,5 % del presupuesto tiene efecto renta irrelevante por muy inferior que sea, y por eso los casos documentados son alimentos básicos de poblaciones muy pobres.",
              ],
            },
            {
              q: "¿Por qué el IPC tiene sesgo de sustitución?",
              opciones: [
                "Porque fijar ponderaciones ignora que la gente se desplaza hacia lo que se abarata",
                "Porque el INE tarda en actualizar la cesta y podría hacerlo antes",
                "Porque incluye bienes importados cuyo precio no controla",
                "Porque usa la fórmula de Paasche en vez de la de Laspeyres",
              ],
              correcta: 0,
              porque: [
                "Es consecuencia inevitable de la construcción tipo Laspeyres. Al mantener las cantidades del año base se sobrevalora lo que ha subido, porque la gente ya no compra tanto de eso.",
                "Encadenar y actualizar la cesta lo atenúa, pero no lo elimina: mientras haya un periodo con ponderaciones fijas, el sesgo aparece dentro de él.",
                "La composición de la cesta afecta a qué mide el índice, no a por qué se sesga al fijar ponderaciones.",
                "Es al revés: el IPC es un Laspeyres, y es Laspeyres quien tiende a sobrestimar. Paasche tiende a lo contrario.",
              ],
            },
            {
              q: "Con complementarios perfectos —café y azúcar en proporción fija—, sube el precio del café. ¿Cómo se reparte el efecto?",
              opciones: [
                "No cabe descomponer: la demanda no está definida",
                "Mitad sustitución, mitad renta",
                "Todo es efecto renta: el efecto sustitución es nulo por construcción",
                "Todo es efecto sustitución, porque el consumidor cambia de bien",
              ],
              correcta: 2,
              porque: [
                "La demanda está perfectamente definida; lo que ocurre es que uno de los dos efectos vale cero.",
                "El reparto a medias no tiene ninguna base: depende por completo de la estructura de preferencias, y aquí esa estructura es extrema.",
                "Si los bienes se consumen en proporción rígida, no hay sustitución posible por definición. Todo el cambio viene de que el consumidor es más pobre en términos reales.",
                "La sustitución es justo lo que estas preferencias impiden: cambiar de proporción destruiría la complementariedad.",
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
            { ref: "Varian, Microeconomía intermedia", nota: "el capítulo de la ecuación de Slutsky, con las dos compensaciones desarrolladas gráfica y algebraicamente." },
            { ref: "Jensen y Miller, trabajos sobre bienes Giffen en China", nota: "la evidencia empírica más sólida del fenómeno, obtenida mediante experimentos con subsidios de precio en poblaciones de renta baja." },
            { ref: "Manual del Índice de Precios de Consumo (OIT, FMI, OCDE, Eurostat)", nota: "la teoría de números índice con su fundamento microeconómico, incluido el índice del coste de la vida y el sesgo de sustitución." },
            { ref: "Diewert, trabajos sobre números índice superlativos", nota: "por qué Fisher y Törnqvist aproximan bien el índice teórico y qué propiedades los caracterizan." },
          ],
        },
      ],
    },
  ],
};
