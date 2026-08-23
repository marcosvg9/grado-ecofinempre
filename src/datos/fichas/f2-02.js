/* Ficha 2.02 — Eleccion del consumidor y derivacion de la demanda. */

export default {
  codigo: "2.02",
  titulo: "Elección del consumidor y derivación de la demanda",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "La curva de demanda no es un supuesto: es el rastro que deja el consumidor óptimo cuando se varía el precio y se resuelve el problema una y otra vez. De ahí que sus propiedades se deduzcan de las preferencias en lugar de postularse.",
  requiere: "2.01 Preferencias y restricción presupuestaria",
  abre: "2.03 Slutsky · 2.06 Competencia perfecta · 9.08 Política de precios",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El problema del consumidor consiste en maximizar la utilidad sujeta a la restricción presupuestaria. Con preferencias convexas y solución interior, la condición de primer orden iguala la relación marginal de sustitución al cociente de precios, lo que admite una lectura muy intuitiva: **en el óptimo, la utilidad marginal por euro gastado es la misma en todos los bienes**. Si no lo fuera, trasladar un euro del bien con menor rendimiento marginal al de mayor rendimiento aumentaría la utilidad, luego no se estaría en el óptimo.",
            "Resolver ese problema para cada vector de precios y cada nivel de renta da las **funciones de demanda marshallianas**. La curva de demanda de un bien no es más que la proyección de esa función manteniendo constantes el resto de precios y la renta. **No se postula que tenga pendiente negativa**: se deduce, y con una excepción teórica que se estudiará en la ficha siguiente.",
            "Variar el precio y unir los puntos óptimos genera la **curva precio-consumo**, de la que se lee directamente la demanda. Variar la renta genera la **curva renta-consumo**, cuya proyección es la **curva de Engel**. La forma de esta última clasifica los bienes: si el consumo crece con la renta el bien es **normal**, y si decrece es **inferior**. Dentro de los normales, si la proporción de gasto aumenta con la renta se habla de bien de lujo, y si disminuye, de bien de primera necesidad.",
            "Las **elasticidades** son la forma operativa de expresar todo esto porque son adimensionales y por tanto comparables entre bienes y entre países. La elasticidad precio mide la sensibilidad de la cantidad al precio propio; la cruzada, al precio de otro bien, y su signo distingue sustitutivos de complementarios; la renta, la sensibilidad a la renta, y su valor clasifica el bien.",
            "Hay dos resultados de coherencia que conviene conocer porque acotan lo que un sistema de demandas puede hacer. La **agregación de Engel** dice que la media ponderada de las elasticidades renta, con las proporciones de gasto como pesos, es igual a uno: si un bien tiene elasticidad renta mayor que uno, otro debe tenerla menor. Y la **homogeneidad** implica que las elasticidades precio propia, cruzadas y renta de un bien suman cero. Ambos resultados sirven de contraste: un conjunto de elasticidades estimadas que los incumpla contiene un error.",
            "Conviene además distinguir dos objetos que se confunden. La demanda **marshalliana** mantiene la renta constante; la **hicksiana o compensada** mantiene la utilidad constante, compensando al consumidor por el cambio de precio. La segunda no es observable y es la que aparece en el análisis de bienestar y en la teoría de los índices de precios.",
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
            { nom: "Problema del consumidor", sub: "Con solución interior y preferencias convexas.", cols: ["máx U(x₁,x₂) s.a. p₁x₁ + p₂x₂ = m"] },
            { nom: "Condición de primer orden", sub: "Utilidad marginal por euro igualada.", cols: ["UMg₁ / p₁ = UMg₂ / p₂ = λ"] },
            { nom: "Demanda marshalliana", sub: "Renta constante. Es la observable.", cols: ["xᵢ = xᵢ(p₁, p₂, m)"] },
            { nom: "Demanda hicksiana", sub: "Utilidad constante. No observable.", cols: ["xᵢʰ = xᵢʰ(p₁, p₂, U)"] },
            { nom: "Elasticidad precio", sub: "Adimensional, negativa salvo caso Giffen.", cols: ["ε = (∂x/∂p) × (p/x)"] },
            { nom: "Elasticidad renta", sub: "Clasifica el bien.", cols: ["η = (∂x/∂m) × (m/x)"] },
            { nom: "Agregación de Engel", sub: "Restricción de coherencia sobre las elasticidades renta.", cols: ["Σ wᵢ · ηᵢ = 1"] },
            { nom: "Homogeneidad", sub: "Restricción derivada del grado cero.", cols: ["εᵢᵢ + Σ εᵢⱼ + ηᵢ = 0"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: derivar la demanda",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea **U(x, y) = x^0,4 · y^0,6** con renta **m = 200**. Las proporciones de gasto son 0,4 y 0,6, de modo que las demandas son x = 0,4·m/pₓ e y = 0,6·m/p_y. Con esa renta, **x = 80/pₓ**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 45], y: [0, 18] },
          marcasX: [0, 10, 20, 30, 40],
          marcasY: [0, 4, 8, 12, 16],
          areas: [
            { puntos: [[0, 0], [0, 4], [20, 4], [20, 0]], color: "n2" },
            { puntos: [[0, 0], [0, 2], [40, 2], [40, 0]], color: "n4" },
          ],
          series: [
            {
              nombre: "Demanda",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [40, 2],
              puntos: [[5, 16], [6, 13.33], [8, 10], [10, 8], [13, 6.15], [16, 5], [20, 4], [25, 3.2], [30, 2.67], [35, 2.29], [40, 2]],
            },
          ],
          puntos: [
            { x: 5, y: 16, guias: false },
            { x: 10, y: 8, guias: false },
            { x: 16, y: 5, guias: false },
            { x: 20, y: 4, etiqueta: "pₓ = 4", guias: false },
            { x: 40, y: 2, etiqueta: "pₓ = 2", guias: false },
          ],
          nota: "La curva se ha **derivado**, no dibujado: cada punto es la cantidad que el consumidor elige al resolver su problema con un precio distinto, y unirlos es la demanda. Su forma —una hipérbola— es la firma de la Cobb-Douglas, y los **dos rectángulos sombreados lo demuestran**: uno mide 20 × 4 y el otro 40 × 2, y ambos valen exactamente **80 €**. El gasto en X no cambia aunque el precio se divida por dos, porque la cantidad se duplica en la misma proporción. Eso es **elasticidad precio igual a −1** vista geométricamente, y explica por qué la proporción del presupuesto dedicada a cada bien permanece fija en el 40 % y el 60 % de la tabla.",
        },
        {
          tipo: "tabla",
          cabecera: ["Precio pₓ", "Cantidad x", "Gasto en x", "Proporción del presupuesto"],
          filas: [
            ["2 €", "40,0", "80 €", "40 %"],
            ["4 €", "20,0", "80 €", "40 %"],
            ["5 €", "16,0", "80 €", "40 %"],
            ["8 €", "10,0", "80 €", "40 %"],
            { celdas: ["16 €", "5,0", "80 €", "40 %"], clase: "total" },
          ],
          nota: "La demanda es una **hipérbola**: x·pₓ es constante e igual a 80. Eso significa elasticidad precio exactamente **−1** en todo el recorrido, propiedad característica de las Cobb-Douglas. El gasto en el bien no varía con su precio, algo que rara vez se cumple en datos reales y que conviene recordar como limitación de esta familia de preferencias.",
        },
        {
          tipo: "tabla",
          cabecera: ["Elasticidad", "Valor en Cobb-Douglas", "Comprobación"],
          filas: [
            ["Precio propia de x", "−1", "x = 80/pₓ ⟹ ε = −1"],
            ["Cruzada respecto a p_y", "0", "x no depende de p_y"],
            ["Renta", "+1", "x proporcional a m"],
            { celdas: ["Suma (homogeneidad)", "−1 + 0 + 1 = 0", "se cumple ✓"], clase: "total" },
            ["Agregación de Engel", "0,4·1 + 0,6·1 = 1", "se cumple ✓"],
          ],
          nota: "Las dos restricciones de coherencia se verifican. Son útiles como **contraste de errores** al estimar sistemas de demanda con datos reales: si las elasticidades estimadas no suman lo que deben, hay un problema de especificación o de datos.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Un caso con solución de esquina.** Sea ahora **U(x, y) = x + 2y** —sustitutivos perfectos—, con pₓ = 1, p_y = 3 y m = 60. La relación marginal de sustitución es constante e igual a 1/2, mientras que el precio relativo es pₓ/p_y = 1/3. Como **la RMS supera al precio relativo**, el consumidor gasta todo en x: x = 60, y = 0, con utilidad 60. La alternativa de gastarlo todo en y daría y = 20 y utilidad 40. La condición de tangencia no aplica aquí, porque las curvas de indiferencia son rectas y no hay punto de tangencia interior.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la ley de Engel y el problema de la agregación",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La regularidad empírica más antigua y robusta de la economía aplicada la formuló Ernst Engel a mediados del siglo XIX: **la proporción del gasto familiar destinada a alimentación disminuye al aumentar la renta**. Se ha verificado en prácticamente todos los países y períodos, y llegó a usarse como indicador indirecto del nivel de vida.",
            "En el lenguaje de esta ficha, la ley dice que la alimentación tiene **elasticidad renta positiva pero inferior a uno**: se consume más en términos absolutos y menos en proporción. Por la agregación de Engel, si algunos bienes tienen elasticidad renta menor que uno, otros deben tenerla mayor: vivienda, ocio, educación, servicios. **Esa aritmética es el motor del cambio estructural** de las economías, la razón de que el peso del sector primario caiga y el de los servicios crezca a medida que aumenta la renta.",
            "Y aquí conviene señalar un problema serio que la teoría arrastra. Todo lo anterior se ha deducido para **un** consumidor. Pasar de ahí a una demanda de mercado exige sumar demandas individuales, y esa suma no hereda automáticamente las propiedades de sus componentes. Los resultados de Sonnenschein, Mantel y Debreu establecen que **la demanda agregada apenas conserva estructura**: casi cualquier función continua que satisfaga la ley de Walras puede ser una demanda agregada de una economía con consumidores perfectamente racionales.",
            "**La implicación es incómoda.** El «consumidor representativo» que se usa habitualmente en macroeconomía no está garantizado por la teoría microeconómica: solo existe bajo condiciones bastante restrictivas sobre las preferencias, como que todos los individuos tengan curvas de Engel lineales y paralelas. Fuera de esas condiciones, la distribución de la renta entre hogares afecta a la demanda agregada, y no solo su total.",
            "**Consecuencia práctica para el trabajo con datos.** Una elasticidad renta estimada sobre datos agregados mezcla el comportamiento individual con los efectos de composición y de distribución. Si la renta crece concentrada en los hogares de renta alta, la demanda agregada se desplaza de forma distinta a si el crecimiento es uniforme, aunque el total sea el mismo. **Los microdatos de la Encuesta de Presupuestos Familiares permiten separar ambos efectos; los agregados, no.**",
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
            { t: "Postular que la demanda tiene pendiente negativa", d: "Es un resultado que se deduce, no un supuesto, y admite una excepción teórica: los bienes Giffen de la ficha 2.03. Presentarlo como axioma oculta precisamente el mecanismo que lo genera." },
            { t: "Aplicar la condición de tangencia sin verificar la solución", d: "Con sustitutivos perfectos, complementarios perfectos o cuando la tangencia arroja cantidades negativas, el óptimo está en una esquina. Hay que comprobar que la solución sea admisible antes de darla por buena." },
            { t: "Confundir elasticidad con pendiente", d: "La pendiente depende de las unidades de medida y la elasticidad no. Una demanda puede tener pendiente constante y elasticidad variable a lo largo de su recorrido: en una demanda lineal, la elasticidad va de cero a infinito." },
            { t: "Generalizar propiedades de las Cobb-Douglas", d: "Su elasticidad precio es siempre −1 y sus proporciones de gasto son constantes. Son propiedades de esa familia concreta, no de la teoría, y rara vez se observan en datos reales. Usarlas por comodidad está bien; confundirlas con resultados generales, no." },
            { t: "Ignorar las restricciones de coherencia", d: "La agregación de Engel y la homogeneidad acotan qué conjuntos de elasticidades son posibles. Un sistema estimado que las incumpla contiene un error de especificación o de datos, y comprobarlo es gratuito." },
            { t: "Confundir demanda marshalliana y hicksiana", d: "La primera mantiene la renta constante y es la observable; la segunda mantiene la utilidad constante y es la relevante para el análisis de bienestar y para la teoría de índices de precios. No coinciden salvo en bienes sin efecto renta." },
            { t: "Suponer un consumidor representativo sin más", d: "La agregación de demandas individuales no preserva la estructura del problema individual. La existencia de un consumidor representativo exige condiciones restrictivas sobre las preferencias, y fuera de ellas la distribución de la renta importa." },
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
            "Las elasticidades y las curvas de Engel son insumos directos del análisis del consumo en cuentas nacionales.",
          ],
          lista: [
            "El **gasto en consumo final de los hogares (P.31)** se desglosa por finalidad según la COICOP, y la evolución de la estructura de ese gasto a lo largo del tiempo es la ley de Engel observada a escala agregada.",
            "El **cambio estructural** —caída del peso de la agricultura, expansión de los servicios— se explica en parte por la aritmética de las elasticidades renta, aunque también intervienen los precios relativos y la evolución de la productividad por ramas.",
            "Los **microdatos de la Encuesta de Presupuestos Familiares** permiten estimar curvas de Engel por tipo de hogar y separar el comportamiento individual de los efectos de composición, algo imposible con datos agregados.",
            "En las **proyecciones de consumo** y en los modelos de análisis de políticas, las elasticidades renta y precio son parámetros que hay que calibrar, y las restricciones de coherencia de esta ficha son la primera comprobación de que la calibración es admisible.",
            "Y el **problema de agregación** tiene una traducción directa: cuando la renta crece de forma desigual, la composición del consumo agregado cambia de manera distinta a cuando crece uniformemente. Eso afecta a la proyección de la demanda y a la interpretación de la propensión marginal al consumo agregada.",
          ],
          cierre:
            "La conclusión útil es que un agregado de consumo esconde comportamientos heterogéneos, y que hay preguntas —el efecto de una política redistributiva sobre la demanda, por ejemplo— que no se pueden responder sin microdatos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "U = x^0,25·y^0,75, m = 400, pₓ = 5. ¿Cuánto x se demanda?", a: "El 25 % de la renta va a x, es decir 100 €, de modo que x = 20. Y esa demanda es independiente de p_y, propiedad característica de las Cobb-Douglas." },
            { q: "¿Por qué la elasticidad precio de una Cobb-Douglas es siempre −1?", a: "Porque el gasto en el bien es una proporción fija de la renta, así que x·p es constante. Un aumento porcentual del precio implica una caída porcentual idéntica de la cantidad." },
            { q: "Un bien tiene elasticidad renta de 1,8. ¿Qué implica para los demás?", a: "Que al menos otro debe tener elasticidad renta inferior a uno, por la agregación de Engel: la media ponderada por proporciones de gasto es exactamente uno. No todos los bienes pueden ser de lujo." },
            { q: "¿Qué diferencia hay entre demanda marshalliana e hicksiana?", a: "La marshalliana mantiene constante la renta monetaria y es la observable; la hicksiana mantiene constante la utilidad, compensando el cambio de precio. La segunda es la relevante para bienestar y para la teoría de índices." },
            { q: "¿Por qué no está garantizada la existencia de un consumidor representativo?", a: "Porque la agregación de demandas individuales no preserva la estructura del problema individual. Solo bajo condiciones restrictivas —curvas de Engel lineales y paralelas, por ejemplo— la demanda agregada se comporta como la de un único consumidor." },
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
            { ref: "Varian, Microeconomía intermedia", nota: "los capítulos de demanda, con la derivación gráfica y algebraica de las curvas precio-consumo y renta-consumo." },
            { ref: "Deaton y Muellbauer, Economics and Consumer Behavior", nota: "la referencia sobre sistemas de demanda y su estimación empírica, incluidas las restricciones de coherencia." },
            { ref: "Mas-Colell, Whinston y Green, Microeconomic Theory", nota: "el tratamiento riguroso de dualidad, demanda hicksiana y el problema de la agregación." },
            { ref: "INE, Encuesta de Presupuestos Familiares (microdatos)", nota: "la fuente para estimar curvas de Engel reales por tipo de hogar en España." },
          ],
        },
      ],
    },
  ],
};
