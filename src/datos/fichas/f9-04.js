/* Ficha 9.04 — Estrategias competitivas y corporativas. */

export default {
  codigo: "9.04",
  titulo: "Estrategias competitivas y corporativas",
  nivel: 2,
  bloque: "Dirección de empresas",
  tiempo: "4 h",
  nucleo:
    "La estrategia competitiva decide cómo ganar dinero en un negocio: por coste o por diferenciación, y las dos exigen estructuras incompatibles. La estrategia corporativa decide en qué negocios estar, y solo crea valor si el conjunto vale más que las partes por separado.",
  requiere: "9.02 Análisis del entorno · 9.03 Recursos y capacidades",
  abre: "9.05 Diseño organizativo · 7.10 Fusiones y adquisiciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay dos preguntas distintas que se confunden bajo la misma palabra. La **estrategia competitiva** responde a cómo competir en un negocio concreto. La **estrategia corporativa** responde a en qué negocios estar y por qué juntos. Una empresa de un solo negocio solo necesita la primera; un grupo diversificado necesita ambas, y suele fallar en la segunda.",
            "Porter sostuvo que solo hay dos formas genéricas de obtener ventaja: ofrecer lo mismo **a menor coste** o algo **por lo que el cliente pague más**. La tercera vía —el enfoque— no es una fuente distinta de ventaja sino la decisión de aplicar alguna de las dos a un segmento estrecho. Y su afirmación más discutida es que **intentar ambas a la vez conduce a quedar atrapado en el medio**: ni el coste más bajo ni un producto por el que se pague prima, y por tanto ningún argumento para elegir la empresa.",
            "La razón por la que ambas rara vez conviven es que exigen **decisiones organizativas opuestas**. El liderazgo en costes pide estandarización, escala, control estricto del gasto, gama corta y procesos rígidos. La diferenciación pide variedad, capacidad de respuesta, inversión en diseño o en servicio y tolerancia a la ineficiencia. No es imposible combinarlas —hay empresas que lo consiguen— pero es la excepción y exige normalmente una innovación en el modelo de negocio que cambie la frontera coste-valor, no simplemente esforzarse en las dos direcciones.",
            "En el nivel **corporativo**, la primera decisión es el **ámbito**: hasta dónde llega la empresa por su cadena de valor y por sus mercados. La **integración vertical** incorpora eslabones anteriores o posteriores, y tiene sentido cuando el mercado intermedio funciona mal —pocos proveedores, activos muy específicos, riesgo de comportamiento oportunista— y no lo tiene cuando ese mercado es competitivo y eficiente. La **diversificación** entra en negocios nuevos, y su justificación es más exigente.",
            "**La prueba que toda diversificación debe pasar** es simple de enunciar y difícil de superar: el conjunto tiene que valer más que la suma de las partes. Eso exige algo que se comparta y que ninguno de los negocios pudiera obtener por separado: una capacidad transferible, una marca, un canal, una tecnología común. La diversificación **relacionada** puede cumplirlo; la **no relacionada** rara vez, y por eso los conglomerados suelen cotizar con descuento sobre la suma de sus partes. Diversificar para reducir riesgo no es un motivo válido, porque el accionista puede diversificar por su cuenta comprando acciones de ambos negocios, y mucho más barato que pagando una prima de control.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Estrategia competitiva", "Requiere", "Riesgo característico"],
          filas: [
            { nom: "Liderazgo en costes", sub: "Ofrecer lo mismo más barato", cols: ["Escala, estandarización, control del gasto", "Que un competidor logre menor coste, o que el cliente valore otra cosa"] },
            { nom: "Diferenciación", sub: "Que el cliente pague una prima", cols: ["Marca, diseño, servicio, innovación", "Que la prima no cubra el sobrecoste, o que se banalice"] },
            { nom: "Enfoque", sub: "Coste o diferenciación en un segmento estrecho", cols: ["Conocer muy bien a un cliente concreto", "Que el segmento desaparezca o atraiga a los grandes"] },
            { nom: "Atrapado en el medio", sub: "No es una estrategia: es su ausencia", cols: ["—", "Ni el coste más bajo ni razón para pagar más"] },
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
            { nom: "Beneficio de un negocio", sub: "Descompone la elección estratégica.", cols: ["B = (P − C) × Q"] },
            { nom: "Prueba de la diversificación", sub: "La condición que debe cumplirse.", cols: ["V(A + B) > V(A) + V(B)"] },
            { nom: "Descuento de conglomerado", sub: "Lo que se observa cuando no se cumple.", cols: ["$D = 1 - \\dfrac{\\text{Valor del grupo}}{\\sum \\text{Valor de las partes}}$"] },
            { nom: "Decisión de integrar verticalmente", sub: "Costes de transacción frente a costes de organización.", cols: ["Integrar si coste de mercado > coste interno de coordinar"] },
            { nom: "Prima que sostiene la diferenciación", sub: "Debe superar al sobrecoste que genera.", cols: ["$\\Delta P > \\Delta C$"] },
            { nom: "Rentabilidad de la estrategia", sub: "La comprobación final, común a todas.", cols: ["ROIC − WACC > 0 de forma sostenida"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: tres posiciones en el mismo mercado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un mercado de **1.000 unidades anuales**. Tres competidores con posiciones estratégicas distintas y la misma estructura de costes fijos de 2.000 € cada uno.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Empresa", "Precio", "Coste unitario", "Cuota", "Margen unitario"],
          filas: [
            ["Líder en costes", "100 €", "70 €", "30 %", "30 €"],
            ["Diferenciada", "150 €", "100 €", "10 %", "50 €"],
            ["Atrapada en el medio", "120 €", "95 €", "12 %", "25 €"],
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Empresa", "Unidades", "Margen de contribución", "Costes fijos", "Resultado"],
          filas: [
            ["Líder en costes", "300", "9.000 €", "−2.000 €", "7.000 €"],
            ["Diferenciada", "100", "5.000 €", "−2.000 €", "3.000 €"],
            { celdas: ["Atrapada en el medio", "120", "3.000 €", "−2.000 €", "1.000 €"], clase: "total" },
          ],
          nota: "La empresa atrapada en el medio tiene **más cuota que la diferenciada y menos margen que ambas**. Su precio no es lo bastante bajo para ganar volumen ni su producto lo bastante distinto para justificar una prima. Y fíjate en que su margen unitario del 21 % es el peor de los tres, pese a que su precio está en el medio: **el coste unitario no bajó al mismo ritmo que el precio**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Qué opciones tiene la empresa atrapada.** Bajar precio a 100 € sin reducir coste la lleva a 5 € de margen unitario, insuficiente. Subir a 150 € sin mejorar el producto la deja sin clientes. **Las dos salidas exigen inversión**: reestructurar para alcanzar los 70 € de coste, o invertir en producto y marca para justificar los 150 €. Y ambas cuestan dinero y tiempo, que es la razón por la que muchas empresas permanecen atrapadas durante años.",
            "**La diversificación, cuantificada.** Un grupo con dos negocios que valen 400 y 300 millones por separado cotiza a 630 millones. El **descuento de conglomerado es del 10 %**: el mercado está diciendo que la propiedad conjunta destruye 70 millones de valor, por costes de estructura corporativa, por asignación de capital menos disciplinada o simplemente por opacidad. Ese descuento es lo que justifica las escisiones, y su medición es la mejor prueba objetiva de si una estrategia corporativa está funcionando.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cuándo integrar verticalmente",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un fabricante compra un componente crítico a un único proveedor especializado y se plantea fabricarlo internamente. La pregunta no se resuelve comparando el precio de compra con el coste de fabricación, aunque sea lo primero que se hace.",
            "**El marco correcto es el de los costes de transacción.** Recurrir al mercado tiene un coste que no aparece en la factura: buscar proveedor, negociar, redactar y vigilar el contrato, y sobre todo asumir el riesgo de quedar cautivo. Organizar internamente también tiene coste: burocracia, pérdida del incentivo competitivo, gestión de una actividad que no es la propia. **Se integra cuando el primero supera al segundo**, no cuando el margen del proveedor parece apetecible.",
            "**Tres condiciones inclinan la balanza hacia integrar.** Cuando hay **activos específicos**, es decir, inversiones que solo valen para esa relación concreta y dejan a quien las hace expuesto a que la otra parte renegocie. Cuando el mercado tiene **pocos oferentes**, porque desaparece la disciplina competitiva. Y cuando la **incertidumbre** es alta y no se pueden escribir contratos que prevean las contingencias.",
            "**Y tres que empujan a no integrar.** Cuando el mercado del insumo es competitivo, porque entonces la disciplina del mercado es mejor que cualquier control interno. Cuando la escala eficiente del componente es muy superior al consumo propio, porque fabricar poco sale caro. Y cuando el ritmo tecnológico del componente es rápido, porque internalizarlo obliga a seguir invirtiendo en un terreno que no es el propio.",
            "**El error más común es integrar por el margen.** «El proveedor gana un 20 %, si lo fabricamos nos lo quedamos». Ese razonamiento ignora que ese margen retribuye una escala, un conocimiento y unos activos que el fabricante tendría que construir, y que probablemente conseguirá con un coste unitario superior. **Si el mercado es competitivo, el margen del proveedor es la retribución normal de su capital, no un botín disponible.**",
            "**Las formas intermedias** suelen ser mejores que la disyuntiva. Contratos a largo plazo, acuerdos de exclusividad recíproca, participaciones minoritarias cruzadas o desarrollo conjunto capturan buena parte de los beneficios de la integración sin asumir su rigidez ni su coste de capital.",
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
            { t: "Perseguir coste y diferenciación a la vez sin cambiar el modelo", d: "Exigen decisiones organizativas opuestas: estandarización frente a variedad, rigidez frente a flexibilidad. Combinarlas es posible solo mediante una innovación que desplace la frontera entre coste y valor, no esforzándose más en ambas direcciones simultáneamente." },
            { t: "Confundir precio bajo con liderazgo en costes", d: "El liderazgo en costes consiste en tener **la estructura de costes más baja**, lo que permite fijar precios bajos y seguir ganando. Bajar el precio sin haber bajado el coste no es una estrategia: es sacrificar margen y esperar volumen." },
            { t: "Diversificar para reducir riesgo", d: "El accionista puede diversificar por su cuenta comprando acciones de ambos negocios, sin pagar prima de control ni asumir costes de estructura. La diversificación corporativa solo se justifica si crea valor operativo que los negocios no obtendrían separados." },
            { t: "Integrar verticalmente por el margen del proveedor", d: "Si el mercado es competitivo, ese margen retribuye una escala, un conocimiento y unos activos que habría que replicar. El criterio correcto es comparar costes de transacción con costes de organización, no capturar un margen que probablemente no sea excedente." },
            { t: "Confundir crecer con crear valor", d: "Un negocio que crece con rentabilidad por debajo de su coste de capital destruye tanto más valor cuanto más crece. El crecimiento solo es deseable si el diferencial de la ficha 9.03 es positivo." },
            { t: "Tomar la cuota de mercado como objetivo", d: "La cuota es consecuencia de una posición competitiva, no un fin. Se puede comprar cuota bajando precios hasta destruir la rentabilidad del sector entero, y algunas guerras de precios han hecho exactamente eso." },
            { t: "Definir estrategia como una lista de objetivos", d: "Una estrategia es un conjunto de elecciones que implican renuncias: a qué clientes no servir, qué productos no ofrecer, qué mercados no atender. Un documento que no contenga ninguna renuncia explícita es un plan de deseos, no una estrategia." },
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
            "Las decisiones de ámbito empresarial —integrar, externalizar, diversificar— tienen efectos estadísticos que conviene conocer para no confundirlos con cambios reales.",
          ],
          lista: [
            "Cada unidad se clasifica por su **actividad principal**, según la CNAE. Una empresa diversificada se asigna a la rama que más valor añadido genera, lo que significa que **el resto de sus actividades se contabilizan en una rama que no les corresponde**.",
            "Para atenuarlo, el SEC introduce las **unidades de actividad económica local**, que permiten desagregar una empresa multiactividad en partes homogéneas. Su construcción exige información que no siempre está disponible.",
            "La **externalización** produce un efecto puramente contable de gran magnitud: cuando una empresa deja de realizar internamente una actividad y la compra fuera, su valor añadido se reduce y su consumo intermedio aumenta, mientras que aparece producción en otra rama. **El valor añadido total de la economía no cambia; su distribución por ramas, sí.**",
            "Ese fenómeno explica parte del crecimiento estadístico de los servicios a empresas en las economías avanzadas: no todo es terciarización real, hay un componente de reasignación entre ramas de actividades que antes se hacían dentro de la industria.",
            "La **integración vertical** produce el efecto inverso: aumenta el valor añadido de la empresa integradora y reduce la producción de la rama que antes le vendía.",
          ],
          cierre:
            "Para quien trabaja con series por ramas de actividad, esto es una fuente conocida de rupturas: un cambio en la organización de la producción puede mover el valor añadido de una rama sin que la actividad económica subyacente se haya alterado en absoluto.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué es difícil combinar liderazgo en costes y diferenciación?", a: "Porque exigen decisiones organizativas opuestas: estandarización y gama corta frente a variedad y capacidad de respuesta. Combinarlas requiere una innovación en el modelo de negocio que desplace la frontera coste-valor, no simplemente intentar ambas." },
            { q: "Dos negocios valen 400 y 300 M€ separados y el grupo cotiza a 630 M€. ¿Qué indica?", a: "Un descuento de conglomerado del 10 %: el mercado considera que la propiedad conjunta destruye 70 M€ de valor. Es el argumento cuantitativo para una escisión." },
            { q: "¿Cuándo tiene sentido integrar verticalmente?", a: "Cuando el coste de recurrir al mercado supera al de organizar internamente: activos específicos, pocos oferentes e incertidumbre alta. No cuando el margen del proveedor parece apetecible, porque en un mercado competitivo ese margen retribuye activos y escala que habría que replicar." },
            { q: "Una empresa vende a 120 € con coste de 95 € y un 12 % de cuota, entre un líder en costes y una diferenciada. ¿Diagnóstico?", a: "Atrapada en el medio: peor margen unitario que ambos y sin argumento para el cliente. Salir exige inversión, o para alcanzar la estructura de costes del líder o para justificar la prima de la diferenciada." },
            { q: "Una empresa externaliza su logística. ¿Qué le pasa a su valor añadido?", a: "Se reduce, porque lo que antes era coste de personal propio pasa a ser consumo intermedio. Aparece producción equivalente en la rama de transporte. El valor añadido total de la economía no cambia; su distribución por ramas, sí." },
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
            { ref: "Porter, Estrategia competitiva y Ventaja competitiva", nota: "las estrategias genéricas y la cadena de valor, en los textos originales." },
            { ref: "Grant, Dirección estratégica", nota: "el mejor tratamiento del nivel corporativo: ámbito, integración vertical y diversificación, con la evidencia empírica." },
            { ref: "Rumelt, Estrategia buena, estrategia mala", nota: "la crítica más útil a los planes que se llaman estrategia sin contener ninguna renuncia." },
            { ref: "INE, CNAE y metodología de las cuentas por ramas", nota: "clasificación por actividad principal y unidades de actividad económica local, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
