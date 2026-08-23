/* Ficha 8.05 — Riesgo, rentabilidad y diversificacion (Markowitz). */

export default {
  codigo: "8.05",
  titulo: "Riesgo, rentabilidad y diversificación",
  nivel: 3,
  bloque: "Mercados financieros e inversión",
  tiempo: "5 h",
  nucleo:
    "El riesgo de un activo dentro de una cartera no es su volatilidad individual sino su covarianza con el resto. De ahí se deduce que combinar activos imperfectamente correlacionados reduce el riesgo sin sacrificar rentabilidad, y que una parte del riesgo desaparece gratis mientras otra es irreducible.",
  requiere: "4.02 Estadística descriptiva · 8.04 Renta variable",
  abre: "8.06 CAPM y beta · 8.10 Gestión de riesgos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Markowitz formalizó en 1952 una intuición antigua —no poner todos los huevos en la misma cesta— y al hacerlo cambió la pregunta. Antes, seleccionar inversiones consistía en elegir los mejores activos uno a uno. Después, consiste en elegir la mejor **combinación**, porque las propiedades de una cartera no son la suma de las propiedades de sus componentes.",
            "La rentabilidad esperada sí es aditiva: la de una cartera es la media ponderada de las de sus activos. El riesgo, medido como varianza, **no lo es**. Depende también de cómo se mueven los activos entre sí, es decir, de sus covarianzas. Y como las covarianzas son menores que las varianzas siempre que la correlación sea inferior a uno, la volatilidad de una cartera es menor que la media ponderada de las volatilidades individuales.",
            "De ahí la afirmación central de la ficha: **lo que un activo aporta al riesgo de una cartera no es su varianza, sino su covarianza con lo que ya se tiene**. Un activo muy volátil pero que se mueve al revés que el resto reduce el riesgo total. Un activo poco volátil pero perfectamente correlacionado con la cartera no aporta ninguna diversificación. Esa idea es el puente hacia el CAPM de la ficha siguiente, donde se convierte en la beta.",
            "El resultado gráfico es la **frontera eficiente**: el conjunto de carteras que ofrecen la máxima rentabilidad para cada nivel de riesgo. Cualquier cartera por debajo de ella es subóptima, porque existe otra con igual riesgo y más rentabilidad. Un caso notable es la **cartera de mínima varianza**, que en muchas combinaciones tiene menos riesgo **y** más rentabilidad que el activo más conservador tomado por separado.",
            "La diversificación tiene un límite y conviene conocerlo. Al añadir activos, el peso de las varianzas individuales se diluye a razón de uno partido por el número de activos, pero el peso de las covarianzas no desaparece. En el límite, **la varianza de una cartera muy diversificada tiende a la covarianza media entre sus componentes**. Eso separa el riesgo en dos partes: el **específico o diversificable**, que se elimina gratis, y el **sistemático o de mercado**, que permanece por muchos activos que se añadan. Solo el segundo puede aspirar a ser remunerado, porque el primero se puede eliminar sin coste y nadie paga por asumir un riesgo evitable.",
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
            { nom: "Rentabilidad esperada de la cartera", sub: "Sí es aditiva.", cols: ["E(Rp) = Σ wᵢ × E(Rᵢ)"] },
            { nom: "Varianza de la cartera", sub: "No es aditiva: entran las covarianzas.", cols: ["σp² = Σ Σ wᵢ wⱼ σᵢⱼ"] },
            { nom: "Caso de dos activos", sub: "La expresión que conviene saber de memoria.", cols: ["σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂"] },
            { nom: "Covarianza y correlación", sub: "La correlación es la covarianza normalizada.", cols: ["σᵢⱼ = ρᵢⱼ × σᵢ × σⱼ"] },
            { nom: "Cartera de mínima varianza (dos activos)", sub: "Se obtiene derivando e igualando a cero.", cols: ["w₁ = (σ₂² − ρσ₁σ₂) / (σ₁² + σ₂² − 2ρσ₁σ₂)"] },
            { nom: "Límite de la diversificación", sub: "Con n activos de igual peso.", cols: ["σp² = σ²media/n + (1 − 1/n) × covmedia"] },
            { nom: "Ratio de Sharpe", sub: "Rentabilidad por unidad de riesgo total.", cols: ["S = (E(Rp) − Rf) / σp"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos activos y una sorpresa",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Activo **A**: rentabilidad esperada del 8 % y volatilidad del 15 %. Activo **B**: rentabilidad esperada del 12 % y volatilidad del 25 %. Correlación entre ambos: **0,2**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Volatilidad", y: "Rentabilidad" },
          dominio: { x: [0, 27], y: [7.5, 12.5] },
          marcasX: [0, 5, 10, 15, 20, 25],
          marcasY: [8, 9, 10, 11, 12],
          series: [
            {
              nombre: "ρ = +1",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 1.8,
              etiquetaEn: [15, 8],
              puntos: [[15, 8], [20, 10], [25, 12]],
            },
            {
              nombre: "ρ = +0,2",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [25, 12],
              puntos: [[15, 8], [14.55, 8.2], [14.21, 8.4], [13.99, 8.6], [13.89, 8.8], [13.92, 9], [14.07, 9.2], [14.34, 9.4], [14.73, 9.6], [15.22, 9.8], [15.81, 10], [16.48, 10.2], [17.23, 10.4], [18.05, 10.6], [18.92, 10.8], [19.84, 11], [20.81, 11.2], [21.81, 11.4], [22.85, 11.6], [23.91, 11.8], [25, 12]],
            },
            {
              nombre: "ρ = −1",
              color: "alerta",
              trazo: "punteado",
              grosor: 1.8,
              etiquetaEn: [3, 11.6],
              puntos: [[15, 8], [9, 8.6], [5, 9], [0, 9.5], [5, 10], [11, 10.6], [17, 11.2], [25, 12]],
            },
          ],
          puntos: [
            { x: 13.89, y: 8.86, etiqueta: "mínima varianza", guias: false },
            { x: 15, y: 8, etiqueta: "solo A", guias: false },
            { x: 25, y: 12, etiqueta: "solo B", guias: false },
          ],
          nota: "Las tres líneas unen exactamente los mismos dos activos, y lo único que cambia entre ellas es **la correlación**. Con ρ = +1 la combinación es una recta: mezclar no aporta nada, porque los dos activos son el mismo riesgo con distinta etiqueta. Con ρ = +0,2 la línea **se comba hacia la izquierda**, y ese abombamiento es literalmente la diversificación: hay carteras con **menos riesgo que el activo menos volátil de los dos** y más rentabilidad que él. La de mínima varianza tiene un 78,6 % en A, rinde un 8,86 % y su volatilidad es del 13,89 %, por debajo del 15 % de A en solitario. Con ρ = −1 el pliegue llega hasta el eje: existe una mezcla con **riesgo cero** que rinde un 9,5 %. La lección es que **el riesgo de una cartera no es el promedio de los riesgos que contiene**, y toda la gestión de carteras vive en esa diferencia.",
        },
        {
          tipo: "tabla",
          cabecera: ["Cartera", "Peso en A", "Rentabilidad", "Volatilidad"],
          filas: [
            ["Solo A", "100 %", "8,00 %", "15,00 %"],
            ["Mínima varianza", "78,6 %", "8,86 %", "13,89 %"],
            ["Mitad y mitad", "50 %", "10,00 %", "15,81 %"],
            ["Solo B", "0 %", "12,00 %", "25,00 %"],
          ],
          nota: "Fíjate en la segunda fila. La cartera de mínima varianza tiene **más rentabilidad que A** (8,86 % frente a 8 %) y **menos riesgo que A** (13,89 % frente a 15 %). Invertir todo en el activo conservador es una decisión dominada: existe una combinación mejor en ambas dimensiones a la vez. Ese resultado, que no es intuitivo, es la razón de que la diversificación se describa como el único almuerzo gratis de las finanzas.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El papel de la correlación.** Manteniendo la cartera mitad y mitad y variando solo la correlación entre ambos activos:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Correlación", "Volatilidad de la cartera", "Comentario"],
          filas: [
            ["ρ = +1", "20,00 %", "Media ponderada: no hay diversificación"],
            ["ρ = +0,2", "15,81 %", "El caso del ejemplo"],
            ["ρ = 0", "14,58 %", "Activos independientes"],
            { celdas: ["ρ = −1", "5,00 %", "Cobertura casi perfecta"], clase: "total" },
          ],
          nota: "Con correlación perfecta positiva, la volatilidad es exactamente la media ponderada y la diversificación no aporta nada. **Cualquier correlación inferior a uno genera beneficio**, y el beneficio crece a medida que la correlación baja. Con correlación perfecta negativa se podría construir una cartera de riesgo nulo, algo que no existe en la práctica pero que marca el límite teórico.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El límite del número de activos.** Supongamos activos con volatilidad individual del 30 % y correlación media del 0,3 entre ellos. La varianza de una cartera equiponderada tiende a la covarianza media, que es 0,3 × 0,30² = 0,027, es decir una volatilidad de **16,4 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Número de activos", "Volatilidad de la cartera", "Riesgo eliminado"],
          filas: [
            ["1", "30,0 %", "0 %"],
            ["5", "19,7 %", "76 %"],
            ["10", "18,1 %", "88 %"],
            ["20", "17,2 %", "94 %"],
            ["50", "16,7 %", "98 %"],
            { celdas: ["Infinitos", "16,4 %", "100 % del diversificable"], clase: "total" },
          ],
          nota: "Con **veinte activos** ya se ha eliminado el 94 % del riesgo diversificable. Pasar de veinte a cincuenta apenas aporta, y de cincuenta a infinitos, nada apreciable. El 16,4 % que queda es **riesgo sistemático** y no se elimina con más activos: es el que el mercado remunera y el que la ficha 8.06 traduce en beta.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la diversificación que falla cuando más falta hace",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo el aparato de esta ficha descansa en un parámetro estimado a partir de datos históricos: la matriz de correlaciones. Y ese parámetro tiene una propiedad incómoda documentada una y otra vez: **las correlaciones aumentan en las crisis**. Justo cuando la diversificación debería proteger, deja de hacerlo.",
            "El mecanismo tiene varias causas. Las ventas forzadas por necesidad de liquidez o por llamadas de margen afectan a todo lo vendible, con independencia de sus fundamentales. La aversión al riesgo se mueve en bloque y desplaza capital de todos los activos de riesgo a la vez. Y la percepción de un choque común domina sobre las diferencias entre sectores y geografías. En marzo de 2020, activos que llevaban años comportándose de forma independiente cayeron simultáneamente durante varias semanas.",
            "**Consecuencia práctica primera:** las correlaciones estimadas en períodos tranquilos subestiman el riesgo de cola. Una cartera optimizada con datos de los últimos cinco años de calma puede resultar mucho menos diversificada de lo que su matriz sugiere. Por eso la gestión de riesgos de la ficha 8.10 recurre a pruebas de tensión con correlaciones elevadas artificialmente, en lugar de fiarse de las históricas.",
            "**Consecuencia práctica segunda:** la optimización de Markowitz es extremadamente sensible a los datos de entrada. Pequeños cambios en las rentabilidades esperadas producen carteras óptimas radicalmente distintas y a menudo concentradas de forma poco razonable. La respuesta habitual en la práctica es imponer restricciones —límites máximos por activo, prohibición de posiciones cortas— o recurrir a métodos que reduzcan la dependencia de estimar rentabilidades esperadas, que es el parámetro más ruidoso de todos.",
            "**Y una advertencia sobre qué diversifica de verdad.** Tener treinta valores de un mismo mercado y sector diversifica mucho menos que tener quince repartidos entre geografías y clases de activo distintas. El número de posiciones no mide la diversificación; la mide la estructura de correlaciones. El **sesgo doméstico** —la tendencia de los inversores de todos los países a sobreponderar activos de su propio mercado muy por encima de lo que su peso mundial justificaría— es probablemente el incumplimiento más extendido y mejor documentado de las recomendaciones de esta ficha.",
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
            { t: "Evaluar un activo por su volatilidad individual", d: "Dentro de una cartera, lo relevante es su covarianza con el resto. Un activo muy volátil pero poco correlacionado puede **reducir** el riesgo total. Juzgar cada posición aisladamente lleva a rechazar precisamente los activos que mejor diversifican." },
            { t: "Confundir número de posiciones con diversificación", d: "Treinta valores del mismo mercado y sector están altamente correlacionados y diversifican poco. Lo que importa es la estructura de correlaciones, no el recuento. Quince posiciones bien repartidas entre geografías y clases de activo protegen más." },
            { t: "Creer que la diversificación elimina todo el riesgo", d: "Elimina el específico y deja intacto el sistemático. En el ejemplo, la volatilidad no baja de 16,4 % por muchos activos que se añadan. Esa parte irreducible es la única que el mercado remunera." },
            { t: "Usar correlaciones históricas de períodos tranquilos", d: "Las correlaciones aumentan en las crisis, justo cuando se necesita la protección. Una cartera optimizada con datos de calma está menos diversificada de lo que su matriz sugiere en el escenario que importa." },
            { t: "Optimizar sin restricciones", d: "El método es extremadamente sensible a las rentabilidades esperadas, que son el parámetro peor estimado. Pequeños cambios producen carteras óptimas muy distintas y concentradas. En la práctica se imponen límites por posición para contener ese ruido." },
            { t: "Ignorar el sesgo doméstico", d: "Los inversores de todos los países sobreponderan masivamente su propio mercado. Es el incumplimiento más extendido de la teoría de carteras y renuncia a una parte sustancial del beneficio de diversificar, sin compensación." },
            { t: "Tratar la volatilidad como sinónimo de riesgo", d: "La varianza penaliza igual las desviaciones al alza y a la baja, y supone que la distribución de rentabilidades está bien descrita por media y varianza. Las rentabilidades reales tienen colas más gruesas y asimetría, y por eso existen medidas alternativas como la semivarianza o las de la ficha 8.10." },
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
            "La composición de la cartera de los hogares es observable en las cuentas financieras, y permite contrastar la teoría con el comportamiento real.",
          ],
          lista: [
            "Los **balances financieros por sectores** detallan cómo distribuyen los hogares su riqueza entre efectivo y depósitos (AF.2), valores de deuda (AF.3), acciones y participaciones (AF.5) y seguros y pensiones (AF.6).",
            "La comparación internacional de esa distribución muestra diferencias estructurales muy marcadas: los hogares españoles concentran históricamente una proporción mayor en depósitos y en vivienda que los de otras economías avanzadas, donde el peso de fondos de inversión y planes de pensiones es superior.",
            "El **sesgo doméstico** se mide directamente contrastando el peso de los activos emitidos por residentes en la cartera de los hogares con el peso del mercado nacional en la capitalización mundial. La brecha es amplia en prácticamente todos los países.",
            "La **posición de inversión internacional** ofrece la versión agregada del mismo fenómeno: qué parte de la riqueza financiera de un país está colocada fuera y qué parte de sus pasivos está en manos de no residentes.",
            "Y desde la crisis de 2008, el análisis de **riesgo sistémico** aplica una lógica emparentada con la de esta ficha: lo que importa no es la fragilidad de cada entidad aislada, sino la correlación entre sus exposiciones. Un sistema de entidades individualmente prudentes pero idénticamente expuestas no está diversificado en absoluto." ,
          ],
          cierre:
            "Esa última idea es la que más viaja fuera del ámbito de la inversión: la covarianza importa más que la varianza individual, tanto en una cartera de acciones como en un sistema bancario.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Dos activos con volatilidad del 20 % cada uno y correlación 0,5, al 50 %. ¿Volatilidad de la cartera?", a: "σ² = 0,25×0,04 + 0,25×0,04 + 2×0,25×0,5×0,04 = 0,03. σ = 17,3 %, por debajo del 20 % de cada uno por separado." },
            { q: "¿Por qué un activo muy volátil puede reducir el riesgo de una cartera?", a: "Porque lo que aporta al riesgo total es su covarianza con el resto, no su varianza. Si se mueve en sentido contrario a la cartera existente, compensa oscilaciones y reduce la volatilidad conjunta pese a ser individualmente volátil." },
            { q: "¿Cuántos activos hacen falta para diversificar?", a: "Con unos veinte se elimina en torno al 94 % del riesgo diversificable, y a partir de ahí el beneficio marginal es pequeño. Pero el número importa menos que la estructura: veinte valores del mismo sector diversifican mucho menos que quince repartidos entre mercados." },
            { q: "¿Qué parte del riesgo remunera el mercado?", a: "Solo la sistemática. El riesgo específico se elimina sin coste diversificando, y nadie paga prima por asumir un riesgo evitable. Esa distinción es la base del CAPM de la ficha siguiente." },
            { q: "¿Por qué falla la diversificación en las crisis?", a: "Porque las correlaciones aumentan: las ventas forzadas, los movimientos de aversión al riesgo y la percepción de un choque común hacen que activos habitualmente independientes caigan a la vez. Las correlaciones estimadas en calma subestiman el riesgo de cola." },
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
            { ref: "Bodie, Kane y Marcus, Investments", nota: "el desarrollo estándar de la teoría de carteras, con la frontera eficiente y el paso al CAPM." },
            { ref: "Elton y Gruber, Modern Portfolio Theory and Investment Analysis", nota: "más técnico, con el tratamiento completo de la optimización y sus problemas de estimación." },
            { ref: "Ang, Asset Management", nota: "enfoque moderno y crítico, con el tratamiento de los factores y de la inestabilidad de las correlaciones." },
            { ref: "Banco de España, Cuentas Financieras de la Economía Española", nota: "la composición de la cartera de los hogares españoles, para contrastar la teoría con el comportamiento observado." },
          ],
        },
      ],
    },
  ],
};
