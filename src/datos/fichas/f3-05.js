/* Ficha 3.05 — Modelo IS-LM y politica de demanda. */

export default {
  codigo: "3.05",
  titulo: "Modelo IS-LM y política de demanda",
  nivel: 2,
  bloque: "Macroeconomía",
  tiempo: "4 h",
  nucleo:
    "El andamiaje mínimo para pensar a la vez en producto y tipo de interés. Su aportación no es predecir con precisión, sino impedir el error de razonar sobre uno de los dos mercados olvidando que el otro reacciona.",
  requiere: "3.04 Modelo keynesiano · 3.07 Dinero y bancos",
  abre: "3.06 Oferta y demanda agregadas · 3.08 Política monetaria · 3.10 Economía abierta",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El modelo de la ficha anterior tenía un hueco evidente: la inversión era autónoma, es decir, no dependía de nada. Pero la inversión es una decisión que se toma comparando la rentabilidad esperada con el coste de financiarse, así que **depende del tipo de interés**. En cuanto se admite eso, el nivel de renta deja de determinarse solo en el mercado de bienes: depende del tipo de interés, que se determina en otro sitio. El modelo IS-LM, formulado por Hicks a partir de Keynes, es la forma mínima de tratar **ambos mercados a la vez**.",
            "La curva **IS** recoge las combinaciones de renta y tipo de interés que equilibran el **mercado de bienes**. Tiene pendiente negativa por una razón encadenada: un tipo más bajo abarata financiarse, estimula la inversión, y ese impulso se amplifica por el multiplicador de la ficha 3.04 hasta una renta de equilibrio mayor. Dos propiedades importan. **Se desplaza** con cualquier cambio del gasto autónomo: política fiscal, confianza empresarial, demanda exterior. Y **su pendiente** depende del multiplicador y de la sensibilidad de la inversión al tipo: cuanto más reaccione la inversión, más plana será.",
            "La curva **LM** recoge las combinaciones que equilibran el **mercado de dinero**. La demanda de dinero crece con la renta —más transacciones exigen más liquidez— y cae con el tipo de interés, que es el coste de oportunidad de tener saldos ociosos en lugar de activos rentables. Si la oferta monetaria está dada, una renta mayor eleva la demanda de dinero y, con oferta fija, **eleva el tipo de interés**: de ahí su pendiente positiva. Se desplaza cuando cambia la oferta monetaria real, ya sea por decisión del banco central o por variación del nivel de precios.",
            "El **equilibrio** es el cruce, y su interés está en la **estática comparativa**. Una **expansión fiscal** desplaza la IS a la derecha: sube la renta y sube el tipo de interés. Y esa subida del tipo reduce la inversión privada, de modo que **la renta crece menos de lo que predeciría el multiplicador simple**. Esa diferencia es el **desplazamiento de la inversión privada**, y es la primera lección del modelo: **el multiplicador de la ficha anterior es un techo, no una predicción**. Una **expansión monetaria** desplaza la LM a la derecha: sube la renta y **baja** el tipo. Ambas políticas elevan el producto, pero mueven el tipo de interés en direcciones opuestas, y por tanto tienen **efectos distintos sobre la composición** del gasto: la fiscal desplaza gasto privado por público, la monetaria estimula la inversión.",
            "De ahí sale la idea de **combinación de políticas**. Si se quiere expandir la demanda sin sacrificar inversión privada, puede acompañarse el impulso fiscal con uno monetario que impida subir el tipo. Y a la inversa, una consolidación fiscal acompañada de relajación monetaria amortigua su efecto contractivo. **Las dos políticas no son sustitutivas ni redundantes: eligen qué composición del gasto acompaña a un nivel de producción dado**, y esa es una decisión con consecuencias de largo plazo, porque la inversión de hoy es el capital de mañana de la ficha 3.09.",
            "Los **casos extremos** son los que más enseñan. Si la demanda de dinero se vuelve infinitamente sensible al tipo de interés —la **trampa de liquidez**, con la LM horizontal— la política monetaria no puede bajar más el tipo y **pierde su capacidad de estimular**, mientras que la fiscal actúa con toda su fuerza porque no hay desplazamiento. En el extremo opuesto, con LM vertical, ocurre lo contrario. Y hay que decir con claridad qué falta en este modelo: **los precios están fijos**, así que describe una economía con capacidad ociosa; no hay expectativas explícitas ni restricción presupuestaria intertemporal; y la crítica de Lucas de la ficha 1.09 le reprocha con razón que sus parámetros podrían cambiar precisamente cuando cambia la política. Se sigue enseñando porque **ordena el razonamiento como ningún otro esquema de tamaño comparable**, no porque sea la frontera de la disciplina.",
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
            { nom: "Función de inversión", sub: "El paso que faltaba en la ficha 3.04.", cols: ["I = I₀ − b · i"] },
            { nom: "Curva IS", sub: "Equilibrio del mercado de bienes.", cols: ["Y = k · (C₀ + I₀ + G − b·i)"] },
            { nom: "Pendiente de la IS", sub: "Más plana si la inversión reacciona mucho.", cols: ["Negativa; depende de k y de b"] },
            { nom: "Demanda de dinero", sub: "Motivo transacción y motivo especulación.", cols: ["L = k₁·Y − k₂·i"] },
            { nom: "Curva LM", sub: "Equilibrio del mercado de dinero.", cols: ["M/P = k₁·Y − k₂·i"] },
            { nom: "Desplazamiento de la IS", sub: "Política fiscal y gasto autónomo.", cols: ["ΔY = k · ΔG , a tipo constante"] },
            { nom: "Desplazamiento de la LM", sub: "Política monetaria o cambio de precios.", cols: ["Δ(M/P) desplaza a la derecha"] },
            { nom: "Efecto desplazamiento", sub: "Lo que el multiplicador simple ignora.", cols: ["Crowding out = k·ΔG − ΔY efectivo"] },
            { nom: "Trampa de liquidez", sub: "La monetaria pierde tracción; la fiscal la gana.", cols: ["LM horizontal ⟹ ΔY = k · ΔG"] },
            { nom: "Combinación de políticas", sub: "Elige la composición del gasto, no solo su nivel.", cols: ["Fiscal + monetaria ⟹ ΔY sin Δi"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: fiscal, monetaria y desplazamiento",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seguimos con la economía de la ficha anterior —**C = 100 + 0,8·Y_d**, impuesto del 25 %, **G = 300**— pero ahora la inversión responde al tipo: **I = 320 − 20·i**. De ahí sale la curva **IS: Y = 1.800 − 50·i**. La demanda de dinero es **M/P = 0,5·Y − 50·i**, y con una oferta monetaria real de **750** resulta la curva **LM: Y = 1.500 + 100·i**. El cruce está en **i = 2 % y Y = 1.700**.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Renta", y: "Tipo de interés %" },
          dominio: { x: [1400, 2050], y: [0, 6] },
          marcasX: [1500, 1700, 1800, 1950],
          marcasY: [0, 1, 2, 3, 4, 5],
          series: [
            { nombre: "IS", color: "acento", puntos: [[1500, 6], [1800, 0]], etiquetaEn: [1520, 5.6] },
            { nombre: "IS con ΔG = 60", color: "alerta", trazo: "discontinuo", puntos: [[1650, 6], [1950, 0]], etiquetaEn: [1700, 5.6] },
            { nombre: "LM", color: "tinta", puntos: [[1500, 0], [2050, 5.5]], etiquetaEn: [1990, 5.4] },
          ],
          puntos: [
            { x: 1700, y: 2, etiqueta: "E" },
            { x: 1800, y: 3, etiqueta: "E'" },
          ],
          nota: "El impulso fiscal desplaza la IS a la derecha **150 unidades** —que es el multiplicador de 2,5 aplicado a los 60— pero el equilibrio solo se mueve **100**, de 1.700 a 1.800. La diferencia son **50 unidades de desplazamiento de la inversión privada**, provocadas por la subida del tipo del 2 % al 3 % que la LM impone. Geométricamente: **la IS se mueve horizontalmente 150 y el cruce avanza solo hasta donde lo permite la pendiente de la LM**. Cuanto más empinada sea esa LM, menos llega el impulso fiscal.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Tipo de interés", "Renta", "Efecto sobre la inversión"],
          filas: [
            ["Situación inicial", "2,0 %", "1.700", "I = 280"],
            ["Expansión fiscal: ΔG = 60", "3,0 %", "1.800", "I = 260 (cae 20)"],
            ["Expansión monetaria: Δ(M/P) = 75", "1,0 %", "1.750", "I = 300 (sube 20)"],
            { celdas: ["Multiplicador simple, sin mercado de dinero", "2,0 % fijo", "1.850", "I = 280 (sin cambio)"], clase: "total" },
          ],
          nota: "Las tres primeras filas elevan la renta y **hacen cosas opuestas con la inversión**: la fiscal la reduce en 20, la monetaria la aumenta en 20. Producir lo mismo con más inversión o con más gasto público no es indiferente, porque **la inversión de hoy es la capacidad productiva de mañana**. La última fila es la predicción del modelo de la ficha 3.04, que ignora el mercado de dinero: **1.850 frente a 1.800 reales**. Ese exceso de 50 es exactamente lo que el multiplicador simple sobrestima por no dejar reaccionar al tipo de interés.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y la combinación que resuelve el conflicto.** Si se quisiera llegar a 1.800 sin subir el tipo, bastaría acompañar el impulso fiscal con una expansión monetaria que desplace la LM lo justo para que el cruce se produzca de nuevo al 2 %. La renta sería la misma y la inversión no habría caído. **Ese es el argumento técnico a favor de coordinar ambas políticas**, y también el motivo por el que una consolidación fiscal duele mucho más cuando el banco central no tiene margen para acompañarla, que es el caso del siguiente apartado.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cuando los tipos no pueden bajar más",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Durante buena parte de los últimos quince años, las principales economías avanzadas han operado con tipos de interés en el entorno de cero o por debajo. Esa situación, que en los manuales aparecía como una curiosidad teórica llamada trampa de liquidez, se convirtió en el escenario habitual, y el modelo IS-LM sirve para entender por qué lo cambia todo.",
            "**Lo que ocurre es que la LM se vuelve prácticamente horizontal.** Cuando el tipo de interés se acerca a su límite inferior, los agentes son indiferentes entre mantener dinero y mantener deuda a corto plazo, porque ninguna de las dos rinde nada. Inyectar más dinero ya no baja el tipo: **se absorbe sin efecto**, y la política monetaria convencional pierde su instrumento principal. Es exactamente lo que se observó tras 2008 y de nuevo en 2020: aumentos enormes de la base monetaria con un impacto mucho menor sobre la actividad del que el multiplicador monetario de la ficha 3.07 sugeriría.",
            "**La contrapartida es que la política fiscal recupera toda su potencia.** Si la LM es horizontal, un desplazamiento de la IS **no eleva el tipo de interés**, así que no hay desplazamiento de inversión privada y la renta crece por el multiplicador completo de la ficha 3.04. En términos del ejemplo numérico: la expansión fiscal llevaría a 1.850 en lugar de a 1.800. Esta es la razón técnica —no ideológica— por la que el consenso sobre el papel de la política fiscal cambió tras 2008, y por la que los multiplicadores estimados en ese periodo resultaron mayores de lo previsto, como documentaba el caso práctico de la ficha anterior.",
            "**Los bancos centrales respondieron creando instrumentos nuevos**, precisamente porque el convencional había dejado de funcionar. La **orientación sobre la evolución futura de los tipos** actúa sobre las expectativas, con el objetivo de reducir los tipos a largo plazo aunque el de corto esté anclado. Las **compras masivas de activos** buscan actuar directamente sobre los tipos a largo y sobre las primas de riesgo. Y los **tipos negativos** intentaron perforar el suelo. Todos son intentos de mover algo cuando el tipo de intervención ya no puede moverse, y su eficacia sigue siendo objeto de discusión empírica.",
            "**El modelo también explica un peligro simétrico: la deflación.** Con precios cayendo, la oferta monetaria **real** aumenta sola, lo que en principio desplazaría la LM a la derecha. Pero la deflación eleva a la vez el tipo de interés **real** —que es el relevante para invertir— y aumenta el peso real de las deudas, contrayendo la demanda. Ese segundo canal puede dominar al primero, y de ahí que la deflación sea más temida que una inflación moderada y que los objetivos de inflación se fijen en positivo y no en cero, como anticipaba la ficha 3.02.",
            "**Y la moraleja sobre el propio modelo.** El IS-LM no predice bien magnitudes ni incorpora expectativas, y su versión de manual está muy por detrás de la macroeconomía actual. Lo que hace, y hace muy bien, es **impedir un error concreto**: pensar que un impulso fiscal se traslada íntegro a la renta, o que la política monetaria funciona igual en cualquier circunstancia. Ese es el uso legítimo de un esquema de este tamaño, y explica por qué sigue abriendo todos los cursos de macroeconomía cincuenta años después de haber sido superado.",
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
            { t: "Aplicar el multiplicador simple ignorando el tipo de interés", d: "El multiplicador de la ficha 3.04 mide el desplazamiento horizontal de la IS, no el cambio de la renta de equilibrio. En el ejemplo, la IS se mueve 150 y la renta solo 100: los otros 50 son inversión privada desplazada por la subida del tipo." },
            { t: "Confundir el desplazamiento de una curva con un movimiento a lo largo de ella", d: "La política fiscal desplaza la IS; la subida del tipo que provoca es un movimiento a lo largo de la LM. Es la misma distinción de la ficha 1.02, y en un modelo con dos curvas los errores se multiplican." },
            { t: "Creer que fiscal y monetaria son intercambiables", d: "Ambas elevan la renta, pero mueven el tipo en direcciones opuestas y por tanto eligen composiciones distintas del gasto: la fiscal desplaza inversión privada, la monetaria la estimula. Producir lo mismo con más o menos inversión tiene consecuencias sobre el crecimiento futuro." },
            { t: "Suponer que la política monetaria siempre funciona igual", d: "Con el tipo en su límite inferior la LM es casi horizontal y las inyecciones de liquidez apenas mueven la renta. La eficacia de cada instrumento depende del régimen en que se esté, y por eso el modelo se usa para comparar escenarios, no para dar una respuesta única." },
            { t: "Olvidar que la LM está en términos reales", d: "Lo que desplaza la curva es la oferta monetaria dividida por el nivel de precios. Una emisión que acabe elevando los precios en la misma proporción no desplaza nada, y ese es precisamente el puente hacia la ficha 3.06." },
            { t: "Usar el modelo con la economía en pleno empleo", d: "Los precios son fijos por construcción, así que todo el ajuste es de cantidad. Sin capacidad ociosa el marco pertinente es el de oferta y demanda agregadas, donde el impulso se traduce en precios y no en producción." },
            { t: "Interpretar el efecto desplazamiento como una crítica al gasto público", d: "Es un resultado del modelo, no un juicio: mide cuánto se reduce el efecto expansivo, y varía entre cero —con LM horizontal— y el total —con LM vertical—. Su magnitud es empírica y depende del régimen, no una constante." },
            { t: "Tomar el IS-LM por el estado actual de la macroeconomía", d: "Sus parámetros no derivan de decisiones individuales explícitas y podrían cambiar al cambiar la política, que es la crítica de Lucas. Se conserva por su valor organizativo, no porque sea el marco con el que se investiga hoy." },
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
            "El IS-LM une el mercado de bienes con el financiero, y esa unión es exactamente la que las cuentas nacionales articulan entre la cuenta de capital y la financiera.",
          ],
          lista: [
            "La curva IS es, en el fondo, la condición **ahorro igual a inversión** de la ficha 1.06. En las cuentas, esa relación aparece como el saldo de la **cuenta de capital**: la capacidad o necesidad de financiación (B.9) de cada sector, que la **cuenta financiera** explica detallando con qué instrumentos se financia.",
            "La **inversión** del modelo es la formación bruta de capital fijo (P.51g) más la variación de existencias (P.52). Esta última es pequeña en niveles y muy volátil, y en las recesiones explica una parte apreciable de la caída del PIB, algo que el modelo agregado no distingue.",
            "La **oferta monetaria** no está en las cuentas nacionales sino en las **estadísticas monetarias y financieras** del banco central, con los agregados M1, M2 y M3 que define la ficha 3.07. Son marcos estadísticos distintos que se cruzan en las cuentas financieras.",
            "El **tipo de interés** relevante para la inversión no es el de intervención sino el que efectivamente pagan empresas y hogares, que incorpora primas de riesgo y márgenes bancarios. La distancia entre uno y otro es lo que la ficha 3.08 llama transmisión, y se mide con las estadísticas de tipos de las nuevas operaciones de crédito.",
            "Y el **saldo estructural** de las administraciones públicas es el indicador con el que se mide el impulso fiscal en la práctica, separando lo que se debe a decisiones discrecionales de lo que se debe al ciclo. Depende de la brecha de producción estimada, con la incertidumbre que señalaba la ficha 3.01.",
          ],
          cierre:
            "El punto que más rendimiento da es el cuarto: el modelo tiene un solo tipo de interés y la realidad tiene una constelación de ellos. Buena parte de lo que falla en la transmisión de la política monetaria ocurre en esa distancia.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la curva IS tiene pendiente negativa?", a: "Porque un tipo de interés menor abarata la financiación, estimula la inversión y ese impulso se amplifica por el multiplicador hasta una renta de equilibrio mayor. Cada punto de la curva es una combinación de renta y tipo que equilibra el mercado de bienes." },
            { q: "El gasto público sube 60 con un multiplicador de 2,5, y la renta solo sube 100. ¿Qué ha pasado?", a: "La IS se ha desplazado 150, pero la mayor renta eleva la demanda de dinero y, con oferta fija, el tipo sube del 2 % al 3 %. Esa subida reduce la inversión privada en 20 y frena la expansión: 50 unidades de renta se pierden por desplazamiento de la inversión." },
            { q: "Fiscal y monetaria elevan ambas la renta. ¿Da igual cuál se use?", a: "No. La fiscal sube el tipo de interés y reduce la inversión privada; la monetaria lo baja y la estimula. Producen el mismo producto con composiciones distintas del gasto, y como la inversión de hoy es la capacidad productiva de mañana, la elección tiene consecuencias de largo plazo." },
            { q: "¿Qué ocurre con la política monetaria en una trampa de liquidez?", a: "Pierde tracción: con la LM prácticamente horizontal, inyectar dinero no baja más el tipo y apenas mueve la renta. La contrapartida es que la política fiscal actúa con todo su multiplicador, porque no se produce desplazamiento de inversión privada." },
            { q: "¿Por qué la deflación puede ser contractiva pese a aumentar la oferta monetaria real?", a: "Porque eleva el tipo de interés real, que es el relevante para invertir, y aumenta el peso real de las deudas existentes, deprimiendo el gasto de los endeudados. Ese canal puede dominar al efecto expansivo de mayor liquidez real, y por eso los objetivos de inflación se fijan en positivo." },
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
            { ref: "Blanchard, Macroeconomía", nota: "los capítulos de mercados financieros e IS-LM; la exposición estándar y la más clara." },
            { ref: "Hicks, «Mr. Keynes and the Classics»", nota: "el artículo de 1937 que inventó el diagrama; sorprende comprobar cuántas cautelas incluía su autor." },
            { ref: "Krugman, «It's Baaack: Japan's Slump and the Return of the Liquidity Trap»", nota: "la reactivación del análisis de la trampa de liquidez; el fundamento del caso práctico." },
            { ref: "Banco Central Europeo, publicaciones sobre instrumentos no convencionales", nota: "qué se hizo cuando el tipo de intervención dejó de servir y con qué resultados medidos." },
          ],
        },
      ],
    },
  ],
};
