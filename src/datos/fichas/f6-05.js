/* Ficha 6.05 — Presupuestación y control por desviaciones. */

export default {
  codigo: "6.05",
  titulo: "Presupuestación y control por desviaciones",
  nivel: 3,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "5 h",
  nucleo:
    "Una desviación global no informa de nada hasta que se descompone en efecto precio y efecto cantidad. Esa descomposición es lo que permite atribuir responsabilidad, y es también la que revela que muchas desviaciones favorables son la causa de otras desfavorables.",
  requiere: "6.02 Sistemas de costes",
  abre: "9.05 Diseño organizativo · 6.07 Análisis de rentabilidad",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Presupuestar es fijar un patrón de comparación antes de que ocurran los hechos. Sin ese patrón, el coste real no se puede juzgar: gastar 30.720 € en materiales no es bueno ni malo hasta que se sabe cuánto debería haberse gastado para el nivel de producción alcanzado.",
            "La primera distinción importante es entre presupuesto **rígido** y **flexible**. El rígido se fija para un nivel de actividad concreto y queda obsoleto en cuanto la producción real difiere. El flexible se recalcula al volumen realmente alcanzado, y es el único que permite comparaciones honestas: si se produjo más de lo previsto, es lógico que se consumieran más materiales, y computar esa diferencia como despilfarro no tiene sentido.",
            "Con el presupuesto flexible ya se puede calcular la **desviación total**, la diferencia entre el coste real y el coste estándar de la producción real. Pero esa cifra agregada no dice qué ha pasado. Puede deberse a que se pagó un precio distinto del previsto, a que se consumió una cantidad distinta de la prevista, o a ambas cosas en direcciones opuestas.",
            "La **descomposición en precio y cantidad** resuelve el problema. La desviación de precio valora la diferencia de precios a la cantidad realmente consumida; la de cantidad valora la diferencia de consumos al precio estándar. La elección de a qué precio y a qué cantidad se valora cada componente no es arbitraria: responde a quién controla cada variable. El departamento de compras controla el precio, pero no cuánto se consume; producción controla el consumo, pero no a qué precio se compró. Valorar la desviación de cantidad al precio estándar aísla a producción de un encarecimiento del mercado del que no es responsable.",
            "El mismo esquema se aplica a la mano de obra —desviación en tarifa y en eficiencia— y, con más complicación, a los costes indirectos, donde aparece además una **desviación en volumen**: los costes fijos se aplican mediante una tasa calculada sobre una actividad presupuestada, y si la actividad real difiere, se aplican de más o de menos. Esa desviación no mide eficiencia alguna, solo mide utilización de la capacidad.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Desviación", "Qué mide", "Quién suele responder"],
          filas: [
            { nom: "Precio de materiales", sub: "(precio real − precio estándar) × cantidad real", cols: ["Condiciones de compra", "Compras"] },
            { nom: "Cantidad de materiales", sub: "(cantidad real − cantidad estándar) × precio estándar", cols: ["Rendimiento y mermas", "Producción"] },
            { nom: "Tarifa de mano de obra", sub: "(tarifa real − tarifa estándar) × horas reales", cols: ["Política salarial y categorías", "Recursos humanos"] },
            { nom: "Eficiencia de mano de obra", sub: "(horas reales − horas estándar) × tarifa estándar", cols: ["Productividad del trabajo", "Producción"] },
            { nom: "Presupuesto de indirectos", sub: "Indirectos reales − indirectos presupuestados flexibles", cols: ["Control del gasto", "Cada responsable de centro"] },
            { nom: "Volumen de indirectos", sub: "Diferencia por actividad real distinta de la presupuestada", cols: ["Utilización de capacidad", "Dirección, no producción"] },
          ],
          nota: "Convenio de signo: una desviación es **desfavorable** cuando el coste real supera al estándar, y favorable en caso contrario. «Favorable» no significa «buena»: significa solo que se gastó menos de lo previsto.",
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
            { nom: "Coste estándar de la producción real", sub: "El patrón de comparación correcto.", cols: ["CE = Q producida × consumo estándar × precio estándar"] },
            { nom: "Desviación total", sub: "Se descompone en las dos siguientes.", cols: ["DT = Coste real − CE"] },
            { nom: "Desviación en precio", sub: "Valorada a la cantidad real.", cols: ["$D_p = (p_r - p_e)\\,Q_r$"] },
            { nom: "Desviación en cantidad", sub: "Valorada al precio estándar.", cols: ["$D_c = (Q_r - Q_e)\\,p_e$"] },
            { nom: "Comprobación", sub: "La suma debe cerrar exactamente.", cols: ["$D_p + D_c = \\mathrm{DT}$"] },
            { nom: "Desviación en volumen de indirectos", sub: "Mide capacidad ociosa, no eficiencia.", cols: ["Dv = (Actividad presupuestada − Actividad real) × tasa fija"] },
          ],
          nota: "La asimetría de la valoración —el precio a cantidades reales, la cantidad a precios estándar— deja fuera un término cruzado, (pr − pe) × (Qr − Qe), que en el modelo de dos desviaciones queda absorbido dentro de la desviación de precio. Algunos textos lo aíslan como tercera desviación mixta.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: materiales",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El estándar establece **3 kg de materia prima a 5 €/kg** por cada unidad de producto. En el período se han fabricado **2.000 unidades**, consumiendo **6.400 kg** comprados a **4,80 €/kg**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Consumo estándar de la producción real", "2.000 × 3 kg", "6.000 kg"],
            ["Coste estándar de la producción real", "6.000 × 5 €", "30.000 €"],
            ["Coste real", "6.400 × 4,80 €", "30.720 €"],
            { celdas: ["Desviación total", "30.720 − 30.000", "720 € desfavorable"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Descomposición", "Cálculo", "Importe"],
          filas: [
            ["Desviación en precio", "(4,80 − 5,00) × 6.400", "−1.280 € favorable"],
            ["Desviación en cantidad", "(6.400 − 6.000) × 5,00", "+2.000 € desfavorable"],
            { celdas: ["Suma", "−1.280 + 2.000", "720 € desfavorable"], clase: "total" },
          ],
          nota: "La cifra global de 720 € escondía dos hechos de signo contrario y magnitud muy superior: se compró un 4 % más barato y se consumió un 6,7 % de más. Informar solo del agregado habría ocultado ambos.",
        },
        {
          tipo: "parrafos",
          items: [
            "Conviene ver el orden de magnitud: la desviación total es el 2,4 % del coste estándar, mientras que las dos componentes son el 4,3 % y el 6,7 %. **La compensación entre desviaciones es el principal enemigo del control por agregados**, y es la razón de que el desglose no sea un refinamiento técnico sino el núcleo del método.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la desviación favorable que costó dinero",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En el ejemplo anterior, el jefe de compras presenta su desviación favorable de 1.280 € como un logro del ejercicio. El jefe de producción explica su desviación desfavorable de 2.000 € señalando que el material recibido tenía una calidad inferior y generó mermas superiores a las normales. Ambos tienen razón en su cifra, y el resultado conjunto es una pérdida de 720 €.",
            "Este patrón —desviación favorable de precio acompañada de desfavorable de cantidad— es tan frecuente que funciona como diagnóstico automático. Aparece siempre que se optimiza una variable ignorando sus efectos sobre otra: comprar más barato a costa de la calidad, contratar categorías más bajas a costa de la productividad, alargar los plazos de pago a costa de las condiciones comerciales.",
            "El origen del problema no es contable sino organizativo: **cada responsable optimiza el indicador por el que se le evalúa**. Si el jefe de compras cobra por ahorro en precio, comprará barato aunque la fábrica lo pague después. La contabilidad de gestión revela el conflicto, pero no lo resuelve; resolverlo exige rediseñar los incentivos, por ejemplo evaluando a compras por coste total entregado, incluidas las mermas atribuibles a la calidad del suministro.",
            "**Dos cautelas al usar el sistema.** La primera: un estándar mal fijado convierte todo el ejercicio en ruido. Si el consumo estándar de 3 kg era irreal, las desviaciones de cantidad medirán el error del estándar, no la gestión. Los estándares hay que revisarlos periódicamente, y su antigüedad es el primer dato a comprobar. La segunda: el control por desviaciones mira siempre hacia atrás y hacia dentro. Puede certificar que una fábrica cumple sus estándares con precisión mientras el producto pierde cuota porque el mercado se ha movido. Es un instrumento de eficiencia, no de estrategia.",
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
            { t: "Comparar contra el presupuesto rígido", d: "Si la producción real difiere de la presupuestada, la comparación con el presupuesto original mezcla el efecto del volumen con el de la eficiencia. Hay que flexibilizar el presupuesto al nivel de actividad realmente alcanzado antes de calcular ninguna desviación." },
            { t: "Analizar solo la desviación total", d: "Las componentes se compensan y suelen ser de magnitud muy superior al agregado. Una desviación total próxima a cero puede esconder un ahorro grande en precio y un despilfarro grande en consumo." },
            { t: "Valorar la desviación de cantidad al precio real", d: "Contaminaría la responsabilidad de producción con las condiciones de compra, sobre las que no decide. Se valora al precio estándar precisamente para aislar cada responsabilidad." },
            { t: "Leer «favorable» como «bueno»", d: "Es una etiqueta aritmética. Una desviación favorable en mantenimiento puede significar que no se hizo el mantenimiento previsto, y una favorable en formación, que no se formó a nadie. El ahorro respecto del estándar no es un logro en sí mismo." },
            { t: "Trabajar con estándares desactualizados", d: "Un estándar fijado hace cinco años produce desviaciones que miden el desfase del estándar, no la gestión del período. La primera pregunta ante cualquier desviación persistente y del mismo signo es cuándo se revisó el estándar por última vez." },
            { t: "Atribuir la desviación en volumen a producción", d: "Mide utilización de la capacidad, y el nivel de actividad lo determina la demanda y las decisiones comerciales, no el taller. Imputársela a producción penaliza a quien no controla la variable." },
            { t: "Usar el sistema como instrumento sancionador", d: "Cuando las desviaciones se emplean para buscar culpables, los responsables aprenden a negociar estándares holgados y a maquillar imputaciones. El sistema deja de informar y empieza a producir el resultado que se espera de él." },
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
            "La descomposición en efecto precio y efecto cantidad es exactamente el problema de los números índice, y las dos disciplinas resuelven la misma disyuntiva con la misma lógica.",
          ],
          lista: [
            "Valorar la desviación de **cantidad a precios estándar** es la lógica de un índice de volumen de tipo **Laspeyres**: se mide el cambio real manteniendo fijos los precios del período base.",
            "Valorar la desviación de **precio a cantidades reales** es la lógica de un índice de precios de tipo **Paasche**: se mide el cambio de precios con las ponderaciones del período corriente.",
            "Y el **término cruzado** que el modelo de dos desviaciones absorbe en la de precio es el mismo residuo que aparece en la descomposición de una variación de valor en variación de precio por variación de cantidad. En cuentas nacionales, el residuo es lo que impide que un índice de precios y uno de volumen multipliquen exactamente el índice de valor salvo con fórmulas concretas.",
            "El **encadenamiento** de índices resuelve el problema de los estándares desactualizados por la misma vía: actualizar las ponderaciones cada período en lugar de arrastrar una base antigua. La contabilidad de gestión hace lo propio revisando estándares.",
            "Y la **pérdida de aditividad** de los índices encadenados tiene su reflejo en que las desviaciones parciales no siempre suman la total cuando se introducen desgloses adicionales.",
          ],
          cierre:
            "Si vienes de trabajar con volumen y precio en cuentas trimestrales, esta ficha no te enseña un concepto nuevo: te lo muestra aplicado a una fábrica y con otro vocabulario. La intuición sobre la elección de ponderaciones es transferible en ambas direcciones.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Estándar: 2 h a 20 €/h por unidad. Se producen 500 unidades con 1.050 horas a 19 €/h. ¿Desviaciones?", a: "Coste estándar: 500 × 2 × 20 = 20.000 €. Coste real: 1.050 × 19 = 19.950 €. Total: 50 € favorable. Tarifa: (19 − 20) × 1.050 = 1.050 € favorable. Eficiencia: (1.050 − 1.000) × 20 = 1.000 € desfavorable. Suma: 50 € favorable." },
            { q: "¿Por qué la desviación de cantidad se valora al precio estándar y no al real?", a: "Para aislar la responsabilidad. El consumo lo controla producción; el precio, compras. Valorarlo al precio real contaminaría la evaluación de producción con una variable que no gestiona." },
            { q: "La desviación total es de 100 € desfavorable y parece irrelevante. ¿Basta con ese dato?", a: "No. Las componentes pueden ser de magnitud muy superior y de signo opuesto, compensándose. Un ahorro de 5.000 € en precio con un despilfarro de 5.100 € en consumo produce esa misma cifra global." },
            { q: "¿Qué sugiere una desviación favorable de precio junto a una desfavorable de cantidad?", a: "Que se compró más barato a costa de la calidad, y que el material peor generó mermas o retrabajo. Es el patrón clásico de optimización local de una variable con efectos negativos sobre otra." },
            { q: "¿Con qué fórmula de número índice se corresponde valorar el efecto cantidad a precios estándar?", a: "Con un índice de volumen de Laspeyres: mide la variación real manteniendo fijos los precios de la base. La desviación de precio a cantidades reales se corresponde con un índice de precios de Paasche." },
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
            { ref: "Horngren, Contabilidad de costos", nota: "los capítulos de presupuesto flexible y análisis de desviaciones, incluidos los modelos de tres y cuatro desviaciones para indirectos." },
            { ref: "Blanco Ibarra, Contabilidad de costes y analítica de gestión", nota: "terminología española y casos resueltos de costes estándar." },
            { ref: "Kaplan y Norton, El cuadro de mando integral", nota: "la crítica al control basado solo en desviaciones de coste y la propuesta de indicadores no financieros." },
            { ref: "Manual de números índice del INE o del FMI", nota: "para la sección del puente: Laspeyres, Paasche, Fisher y el problema del término cruzado." },
          ],
        },
      ],
    },
  ],
};
