/* Ficha 8.04 — Renta variable: valoracion y analisis fundamental. */

export default {
  codigo: "8.04",
  titulo: "Renta variable: valoración y análisis fundamental",
  nivel: 2,
  bloque: "Mercados financieros e inversión",
  tiempo: "5 h",
  nucleo:
    "Una acción vale el valor actual de lo que devolverá a su propietario. Los múltiplos son atajos a ese cálculo, y descomponerlos revela que un PER solo es alto o bajo en relación con el crecimiento, el riesgo y la rentabilidad del capital de la empresa concreta.",
  requiere: "7.09 Valoración de empresas · 7.07 Política de dividendos · 7.02 Rentas",
  abre: "8.06 CAPM y beta · 8.07 Eficiencia de mercados",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La acción es un derecho residual: su titular cobra después de todos los demás y sin importe garantizado. Eso hace que su valoración sea a la vez conceptualmente simple —el valor actual de los flujos que recibirá el accionista— y prácticamente difícil, porque esos flujos no están contratados y dependen del futuro entero del negocio.",
            "El modelo básico es el **descuento de dividendos**. Si los dividendos crecen a una tasa constante, la fórmula de Gordon de la ficha 7.02 da el precio directamente. Su aparente simplicidad esconde una exigencia fuerte: requiere que la tasa de crecimiento sea sostenible indefinidamente y menor que la rentabilidad exigida. Para empresas jóvenes o cíclicas hay que recurrir a modelos multietapa, con una fase de crecimiento alto y una fase estacionaria.",
            "El crecimiento no es un parámetro libre. La ficha 7.07 estableció que una empresa solo puede crecer sin financiación externa a la tasa **ROE por la fracción de beneficio retenida**. Ese vínculo tiene una consecuencia poco intuitiva: **retener más beneficio solo crea valor si el ROE supera la rentabilidad exigida**. Si el ROE es inferior al coste de los fondos propios, reinvertir destruye valor y sería mejor repartir todo.",
            "Los **múltiplos** son atajos que evitan proyectar flujos. El PER es el más conocido y el peor interpretado, porque no significa nada aislado. Descomponerlo lo aclara todo: partiendo de Gordon y dividiendo por el beneficio, el PER resulta ser el reparto dividido por la diferencia entre rentabilidad exigida y crecimiento. **Un PER alto puede reflejar crecimiento elevado, riesgo bajo o simplemente sobrevaloración**, y solo el análisis dice cuál de las tres.",
            "El **precio sobre valor contable** admite una descomposición aún más útil: es la diferencia entre ROE y crecimiento dividida entre la diferencia entre rentabilidad exigida y crecimiento. De ahí sale una regla limpia: **una empresa cotiza por encima de su valor contable si y solo si su ROE supera a su coste de fondos propios**. Es la traducción bursátil de la conclusión de la ficha 7.05 sobre creación de valor, y explica por qué los bancos europeos cotizaron durante años por debajo de su valor en libros.",
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
            { nom: "Descuento de dividendos (Gordon)", sub: "Exige g menor que k y sostenible.", cols: ["$P_0 = \\dfrac{D_1}{k - g}$"] },
            { nom: "Crecimiento sostenible", sub: "El vínculo con la política de dividendos.", cols: ["$g = \\mathrm{ROE}\\,(1-p)$"] },
            { nom: "PER descompuesto", sub: "Explica de qué depende el múltiplo.", cols: ["$\\mathrm{PER} = \\dfrac{p}{k-g}$"] },
            { nom: "Precio sobre valor contable", sub: "La regla de creación de valor en versión bursátil.", cols: ["$P/\\mathrm{VC} = \\dfrac{\\mathrm{ROE} - g}{k - g}$"] },
            { nom: "Rentabilidad total esperada", sub: "Dividendo más revalorización.", cols: ["$k = \\dfrac{D_1}{P_0} + g$"] },
            { nom: "PEG", sub: "Ajuste rudimentario del PER por crecimiento.", cols: ["$\\mathrm{PEG} = \\dfrac{\\mathrm{PER}}{g \\text{ en \\%}}$"] },
          ],
          nota: "De la cuarta línea se deduce directamente que **P/VC > 1 si y solo si ROE > k**. Es una de las relaciones más útiles del análisis fundamental y permite leer una cotización por debajo del valor contable como un juicio del mercado sobre la rentabilidad del capital, no necesariamente como una ganga.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: de los fundamentales al múltiplo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa espera un **beneficio por acción de 2 €** el próximo ejercicio, reparte el **50 %** en dividendos, obtiene un **ROE del 12 %** y sus accionistas exigen un **9 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Magnitud", "Cálculo", "Resultado"],
          filas: [
            ["Crecimiento sostenible", "12 % × (1 − 0,50)", "6,00 %"],
            ["Dividendo esperado", "2 × 0,50", "1,00 €"],
            ["Precio por Gordon", "1,00 / (0,09 − 0,06)", "33,33 €"],
            ["PER implícito", "33,33 / 2", "16,7x"],
            ["Valor contable por acción", "2 / 0,12", "16,67 €"],
            { celdas: ["Precio sobre valor contable", "33,33 / 16,67", "2,0x"], clase: "total" },
            ["Comprobación con la fórmula", "(0,12 − 0,06) / (0,09 − 0,06)", "2,0x"],
          ],
          nota: "Las dos vías coinciden, como debe ser: la descomposición no es una aproximación sino una identidad algebraica. Y el P/VC de 2,0x tiene una lectura directa: la empresa vale el doble de sus libros porque **su ROE del 12 % supera en tres puntos al 9 % que exigen sus accionistas**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la sensibilidad**, que es donde estas fórmulas muestran su fragilidad. El denominador es una diferencia entre dos números parecidos, de modo que pequeños cambios lo mueven mucho.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Precio según k y g", "g = 5 %", "g = 6 %", "g = 7 %"],
          filas: [
            ["k = 8 %", "33,33 €", "50,00 €", "100,00 €"],
            ["k = 9 %", "25,00 €", "33,33 €", "50,00 €"],
            ["k = 10 %", "20,00 €", "25,00 €", "33,33 €"],
            { celdas: ["PER implícito", "10,0x – 16,7x", "12,5x – 25,0x", "16,7x – 50,0x"], clase: "total" },
          ],
          nota: "Con el dividendo fijo en 1 €, el precio va de **20 € a 100 €** moviendo dos parámetros un punto en cada dirección. Un factor de cinco. Esto no invalida el modelo: enseña que **Gordon sirve para entender de qué depende el valor, no para calcularlo con precisión**. Cuando el denominador se acerca a cero, el resultado deja de tener sentido económico.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Un contraste ilustrativo.** Supongamos ahora la misma empresa con un ROE del **7 %**, por debajo del 9 % exigido, manteniendo el reparto del 50 %. Entonces g = 3,5 %, el valor contable por acción es 2/0,07 = 28,57 € y el precio por Gordon es 1/(0,09−0,035) = 18,18 €. El P/VC cae a **0,64x**: la empresa cotiza a dos tercios de sus libros. Y la fórmula lo confirma: (0,07−0,035)/(0,09−0,035) = 0,64. **Cuando el capital rinde menos de lo exigido, reinvertirlo destruye valor y el mercado lo descuenta del precio.**",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la trampa del PER bajo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una acción cotiza a 8 veces beneficios cuando su sector lo hace a 15. La tentación de concluir que está barata es inmediata, y con frecuencia equivocada. La descomposición del PER dice que el múltiplo depende del reparto, del riesgo y del crecimiento, así que un PER bajo puede responder a tres causas muy distintas.",
            "**Puede que el mercado espere menos crecimiento**, con razón. Un negocio en declive estructural merece un múltiplo bajo, y comprarlo por el múltiplo es comprar un beneficio que se va a encoger. **Puede que el riesgo sea mayor**, por apalancamiento, concentración de clientes o exposición regulatoria, y entonces la k que aplica el mercado es superior y el múltiplo bajo es correcto. **O puede que el beneficio del denominador sea atípico**, inflado por una plusvalía puntual o por estar en el pico de un ciclo, lo que hace que el PER parezca bajo justo cuando la acción está cara.",
            "Este último caso es especialmente traicionero en **empresas cíclicas**. Una acerera en el máximo del ciclo presenta beneficios récord y un PER aparentemente bajo; en el mínimo, beneficios negativos y un PER sin sentido. El indicador funciona **al revés** de lo que sugiere la intuición, y por eso en sectores cíclicos se recurre a beneficios normalizados de un ciclo completo o a múltiplos sobre magnitudes menos volátiles.",
            "**La comprobación cruzada más útil es el P/VC junto al ROE.** Una empresa con PER bajo, P/VC de 0,6x y ROE del 5 % no está barata: el mercado está diciendo que su capital rinde menos de lo que cuesta, y tiene razón salvo que se espere una mejora. Una empresa con PER bajo, P/VC de 0,6x y ROE del 14 % sí es una anomalía que merece investigación, porque esas dos cifras son inconsistentes entre sí.",
            "**El caso de los bancos europeos** durante la década posterior a 2008 es el ejemplo de manual. Cotizaron de forma persistente por debajo de su valor contable, y muchos análisis lo presentaron como infravaloración sistemática. La descomposición ofrecía otra lectura: con tipos de interés en mínimos, márgenes comprimidos y requisitos de capital crecientes, su ROE se situaba por debajo del coste de los fondos propios. **Un P/VC inferior a uno no era una anomalía, era la aritmética funcionando.**",
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
            { t: "Comparar PER entre sectores", d: "El múltiplo depende del crecimiento, del riesgo y de la política de reparto, que difieren estructuralmente entre sectores. Una utility y una tecnológica no admiten el mismo PER, y la diferencia no indica que una esté barata." },
            { t: "Usar el PER en empresas cíclicas sin normalizar", d: "En el pico del ciclo el beneficio es máximo y el PER parece bajo justo cuando la acción está cara; en el valle ocurre lo contrario. El indicador funciona invertido. Hay que trabajar con beneficios medios de un ciclo completo." },
            { t: "Aplicar Gordon con g cercana a k", d: "El denominador tiende a cero y el precio se dispara sin sentido económico. Si un modelo exige una g muy próxima a la rentabilidad exigida para justificar el precio, el modelo está diciendo que el precio no se justifica." },
            { t: "Suponer que retener beneficio siempre crea valor", d: "Solo lo crea si el ROE supera al coste de los fondos propios. Con ROE inferior, cada euro retenido vale menos de un euro y la empresa debería repartir. Es la traducción bursátil de la conclusión de la ficha 7.05." },
            { t: "Leer un P/VC inferior a uno como infravaloración", d: "Suele indicar que el mercado espera un ROE por debajo del coste de los fondos propios. La relación P/VC = (ROE − g)/(k − g) lo hace explícito. Solo hay anomalía si el ROE observado es alto y el P/VC bajo a la vez." },
            { t: "Confiar en el PEG como criterio", d: "Es un ajuste rudimentario que ignora el riesgo y la política de reparto, y depende por completo de qué crecimiento se ponga en el denominador. Sirve como filtro rápido, no como criterio de valoración." },
            { t: "Olvidar que el beneficio contable es una estimación", d: "Todo lo visto en la ficha 6.09 sobre calidad del resultado se aplica aquí: un PER se calcula sobre un beneficio que depende de vidas útiles, deterioros y provisiones. Un múltiplo bajo sobre un beneficio de baja calidad no es una oportunidad." },
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
            "Las cotizaciones bursátiles entran en las cuentas nacionales por una vía que conviene entender para no confundir riqueza con ahorro.",
          ],
          lista: [
            "Las **acciones cotizadas (AF.511)** se valoran a precio de mercado en los balances financieros de cada sector. Su revalorización aumenta la riqueza financiera de los hogares sin que se haya producido ninguna transacción.",
            "Ese aumento **no es ahorro ni renta**: se registra en la **cuenta de revalorización**, fuera de las operaciones. Es una de las distinciones que más se confunden en el debate público, donde una subida de la bolsa se presenta a veces como enriquecimiento equivalente a una mejora de la renta.",
            "La consecuencia es que la **riqueza financiera de los hogares** es mucho más volátil que su renta disponible, y su evolución trimestral está dominada por efectos de valoración más que por flujos de ahorro.",
            "Existe además un **efecto riqueza** sobre el consumo: variaciones del valor de los activos alteran las decisiones de gasto de los hogares aunque su renta no cambie. Es un canal reconocido en el análisis macroeconómico y una de las razones por las que las cuentas de patrimonio importan para entender el consumo.",
            "Y como se vio en la ficha 7.09, cuando las participaciones **no cotizan** hay que estimar su valor, habitualmente aplicando múltiplos de cotizadas comparables. La técnica de esta ficha se convierte allí en método estadístico.",
          ],
          cierre:
            "La distinción entre transacción y revalorización es el punto clave: comprar acciones es una operación financiera, que suban de precio no lo es. Ambas cambian la riqueza y solo la primera pasa por la cuenta financiera.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Dividendo esperado 1,50 €, rentabilidad exigida 10 %, crecimiento 4 %. ¿Precio?", a: "1,50 / (0,10 − 0,04) = 25 €. Si el beneficio por acción fuera de 3 €, el PER implícito sería 8,3x y el reparto del 50 %." },
            { q: "ROE 15 %, reparto 40 %. ¿Cuál es el crecimiento sostenible?", a: "15 % × 0,60 = 9 %. Es lo que la empresa puede crecer reinvirtiendo sin ampliar capital ni aumentar el apalancamiento." },
            { q: "¿Cuándo cotiza una empresa por encima de su valor contable?", a: "Cuando su ROE supera al coste de los fondos propios. Se deduce de P/VC = (ROE − g)/(k − g): si ROE > k, el cociente es mayor que uno. Es la versión bursátil de la creación de valor." },
            { q: "Una acerera cotiza a PER 6 en el pico del ciclo. ¿Está barata?", a: "Probablemente no. En el máximo del ciclo el beneficio es extraordinario y el PER parece bajo justo cuando el precio incorpora un beneficio insostenible. En cíclicas el PER funciona invertido y hay que normalizar el beneficio." },
            { q: "La bolsa sube un 20 % y la riqueza de los hogares crece. ¿Es ahorro?", a: "No. Es una revalorización, que en el SEC 2010 se registra fuera de las operaciones, en la cuenta de revalorización. El ahorro es renta no consumida; que suban los precios de los activos ya poseídos es otra cosa." },
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
            { ref: "Damodaran, Valuation", nota: "los capítulos de modelos de descuento de dividendos y de múltiplos, con la descomposición de cada uno en sus determinantes." },
            { ref: "Penman, Financial Statement Analysis and Security Valuation", nota: "la conexión rigurosa entre contabilidad y valoración, incluido el modelo de resultado residual y la relación P/VC-ROE." },
            { ref: "Bodie, Kane y Marcus, Investments", nota: "el capítulo de análisis de renta variable, más breve y con la conexión hacia la teoría de carteras." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 6 y 7", nota: "otras variaciones de activos y balances financieros, para la distinción entre transacción y revalorización." },
          ],
        },
      ],
    },
  ],
};
