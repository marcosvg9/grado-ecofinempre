/* Ficha 12.08 — Consumo final: gasto, consumo efectivo y transferencias en especie. */

export default {
  codigo: "12.08",
  titulo: "Consumo final: gasto, consumo efectivo y transferencias en especie",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "Quien paga un servicio y quien lo consume no son siempre el mismo. La sanidad pública la paga el Estado y la disfrutan los hogares, y el sistema registra las dos cosas: por eso hay dos medidas de consumo y dos de renta, y confundirlas cambia por completo el retrato de un país.",
  requiere: "12.06 Distribución secundaria · 12.07 Otras transferencias corrientes",
  abre: "12.09 Cuentas de acumulación · 10.04 Gasto público y pensiones · 3.04 Modelo keynesiano",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La **cuenta de utilización de la renta** cierra la parte corriente del sistema: toma la renta disponible y la reparte entre lo que se gasta y lo que se guarda. Su saldo es el **ahorro (B.8)**, y de ahí arranca la cuenta de capital de la ficha siguiente. La mecánica es trivial y el contenido conceptual no lo es, porque el sistema tiene **dos formas de medir el consumo** y hay que saber cuál responde a cada pregunta.",
            "**Empecemos por quién consume, porque la lista es más corta de lo que parece.** Solo tres sectores tienen **gasto en consumo final (P.3)**: los hogares, las administraciones públicas y las instituciones sin fines de lucro al servicio de los hogares. **Las sociedades no consumen**, ni las financieras ni las no financieras: todo lo que compran es consumo intermedio o formación de capital. De ahí se sigue la respuesta a otra pregunta clásica del bloque: como una sociedad no tiene P.3, **su ahorro coincide con su renta disponible**, salvo un ajuste que veremos enseguida.",
            "**Ahora la distinción que da carácter a la ficha.** El **gasto en consumo final (P.3)** mide **quién paga**. El **consumo final efectivo (P.4)** mide **quién consume**. Coinciden para los bienes que un hogar compra en una tienda, y se separan en todo lo que las administraciones y las instituciones sin ánimo de lucro entregan a las familias sin cobrarlo: una operación quirúrgica, una plaza escolar, una receta financiada. Ahí **paga el Estado y consume el hogar**, y el sistema quiere poder decir las dos cosas.",
            "**El puente entre ambas medidas son las transferencias sociales en especie (D.63)**, y tienen dos variantes que conviene distinguir. La **D.631** son servicios que la propia administración **produce** y entrega: la enseñanza en un colegio público, la atención en un hospital público. La **D.632** son bienes y servicios que la administración **compra en el mercado** y entrega sin transformar: los medicamentos financiados que se recogen en una farmacia privada, las prótesis, el transporte concertado. En ambos casos el hogar recibe algo que no ha pagado.",
            "**Con esa pieza, las identidades del sistema se cierran de forma muy limpia.** Para los hogares, el consumo efectivo es su gasto **más** lo que reciben en especie. Para las administraciones y las instituciones sin ánimo de lucro, su consumo efectivo es su gasto **menos** lo que entregan. Y como lo que unos entregan es exactamente lo que otros reciben, **el consumo final efectivo total de una economía coincide con su gasto en consumo final total**: solo cambia el reparto entre sectores. La misma operación existe en el lado de la renta: sumando las transferencias en especie a la renta disponible se obtiene la **renta disponible ajustada (B.7)**, que es la magnitud comparable con el consumo efectivo.",
            "**Dentro del gasto público hay además otra división, esta vez por naturaleza del servicio.** El consumo **individual (P.31)** puede atribuirse a personas concretas —sanidad, educación, cultura, servicios sociales— y es exactamente lo que se transfiere en especie. El **colectivo (P.32)** se presta simultáneamente a todos y no puede repartirse: defensa, seguridad, justicia, administración general. La consecuencia es nítida: **el consumo final efectivo de las administraciones públicas es únicamente su consumo colectivo**, porque todo lo individual acaba en manos de los hogares. Las instituciones sin fines de lucro no tienen consumo colectivo: **todo lo suyo es individual y se transfiere**, con lo que su consumo efectivo es cero.",
            "**Queda un detalle que descoloca a todo el mundo la primera vez: el ajuste por variación de derechos por pensiones (D.8).** Cuando un hogar cotiza a un plan de pensiones privado, el sistema ya le ha quitado esa cotización en la cuenta anterior, pero económicamente el hogar no ha perdido nada: ha adquirido un derecho. El D.8 devuelve ese importe en la cuenta de utilización de la renta, para que el ahorro del hogar refleje que sigue teniendo el dinero. Por eso **la tasa de ahorro de los hogares se calcula dividiendo el ahorro entre el consumo más ese ajuste**, y no simplemente entre la renta disponible.",
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
            { nom: "Cuenta de utilización de la renta", sub: "Cierra la parte corriente del sistema.", cols: ["B.8 = B.6 − P.3 + D.8"] },
            { nom: "Quién tiene consumo final", sub: "Las sociedades no consumen.", cols: ["solo S.13, S.14 y S.15"] },
            { nom: "Ahorro de las sociedades", sub: "De ahí la pregunta clásica.", cols: ["B.8 = B.6 (salvo el ajuste D.8)"] },
            { nom: "Gasto frente a consumo efectivo", sub: "Quién paga frente a quién consume.", cols: ["P.3 paga · P.4 consume"] },
            { nom: "Transferencias sociales en especie", sub: "Producidas o compradas en el mercado.", cols: ["D.63 = D.631 + D.632"] },
            { nom: "Consumo efectivo de los hogares", sub: "Su gasto más lo que reciben.", cols: ["P.4 hogares = P.3 hogares + D.63"] },
            { nom: "Identidad agregada", sub: "Solo cambia el reparto entre sectores.", cols: ["P.3 total = P.4 total"] },
            { nom: "Renta disponible ajustada", sub: "La comparable con el consumo efectivo.", cols: ["B.7 = B.6 + D.63"] },
            { nom: "Consumo efectivo de las AA. PP.", sub: "Lo individual se transfiere entero.", cols: ["P.4 = P.32, solo el colectivo"] },
            { nom: "Tasa de ahorro de los hogares", sub: "El denominador incorpora el ajuste.", cols: ["B.8 ÷ (P.3 + D.8)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos formas de contar lo mismo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seguimos con la economía de las fichas anteriores. Los hogares tienen una renta disponible de **625** y gastan **560**; las administraciones tienen **235** y gastan **215**, de los cuales **95** son servicios individuales que entregan a las familias —sanidad, educación, farmacia—.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Óptica", y: "Importe" },
          dominio: { x: [0, 2], y: [0, 780] },
          marcasX: [],
          marcasY: [0, 200, 400, 600],
          areas: [
            { puntos: [[0.2, 0], [0.2, 560], [0.8, 560], [0.8, 0]], color: "n2" },
            { puntos: [[0.2, 560], [0.2, 655], [0.8, 655], [0.8, 560]], color: "n4" },
            { puntos: [[0.2, 655], [0.2, 775], [0.8, 775], [0.8, 655]], color: "n3" },
            { puntos: [[1.2, 0], [1.2, 560], [1.8, 560], [1.8, 0]], color: "n2" },
            { puntos: [[1.2, 560], [1.2, 655], [1.8, 655], [1.8, 560]], color: "n4" },
            { puntos: [[1.2, 655], [1.2, 775], [1.8, 775], [1.8, 655]], color: "n3" },
          ],
          notas: [
            { x: 0.5, y: 275, texto: "560", ancla: "middle" },
            { x: 0.5, y: 235, texto: "hogares P.3", ancla: "middle" },
            { x: 0.5, y: 600, texto: "95 individual", ancla: "middle" },
            { x: 0.5, y: 710, texto: "120 colectivo", ancla: "middle" },
            { x: 1.5, y: 275, texto: "560", ancla: "middle" },
            { x: 1.5, y: 600, texto: "+95 en especie", ancla: "middle" },
            { x: 1.5, y: 710, texto: "120 AA. PP.", ancla: "middle" },
            { x: 0.5, y: -55, texto: "Gasto: quién paga", ancla: "middle" },
            { x: 1.5, y: -55, texto: "Efectivo: quién consume", ancla: "middle" },
          ],
          nota: "Las dos columnas suman **775** y describen exactamente lo mismo repartido de otra forma. En la óptica del **gasto**, las administraciones aparecen consumiendo 215: los 95 individuales y los 120 colectivos. En la óptica del **consumo efectivo**, esos 95 pasan a los hogares —que consumen 655 en lugar de 560— y a las administraciones les quedan solo los 120 colectivos, lo único que no puede atribuirse a nadie en particular. **El total no cambia porque nada se ha creado ni destruido**: es la misma sanidad y la misma educación, contadas una vez por quien las paga y otra por quien las recibe.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Hogares", "AA. PP.", "Total"],
          filas: [
            ["Renta disponible bruta", "B.6", "625", "235", "—"],
            ["Gasto en consumo final", "P.3", "560", "215", "775"],
            ["Transferencias sociales en especie", "D.63", "+95", "−95", "0"],
            ["Consumo final efectivo", "P.4", "655", "120", "775"],
            ["Renta disponible ajustada", "B.7", "720", "140", "—"],
            { celdas: ["Ahorro bruto (con D.8 = 5 en hogares)", "B.8", "60", "20", "—"], clase: "total" },
          ],
          nota: "Compruébense las tres identidades. **P.3 total = P.4 total = 775**: el consumo efectivo agregado no puede diferir del gasto agregado. **B.7 = B.6 + D.63** en cada sector: los hogares pasan de 625 a 720 y las administraciones de 235 a 140. Y el **ahorro es el mismo se mire por donde se mire**: 625 − 560 − 5 da 60, y también 720 − 655 − 5 da 60. Esa es la propiedad decisiva del diseño: **las dos ópticas dan el mismo ahorro**, así que no hay ambigüedad sobre la capacidad de financiación. Solo cambia el retrato de quién consume y de cuánta renta se le atribuye.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora por qué esto importa al comparar países.** Dos economías idénticas, una con sanidad y educación públicas y otra donde las familias las pagan de su bolsillo, tendrán **gastos en consumo final de los hogares muy distintos** y **consumos efectivos prácticamente iguales**. Si se compara el consumo privado sin más, la primera parecerá tener familias que consumen mucho menos, cuando en realidad consumen lo mismo por otra vía. **El consumo efectivo y la renta disponible ajustada son las magnitudes comparables entre países con Estados de bienestar de tamaño distinto**, y casi nadie las usa.",
            "**La tasa de ahorro de los hogares merece un apunte final**, porque se cita constantemente y su fórmula sorprende. Con un ahorro de **60**, un consumo de **560** y un ajuste por derechos de pensiones de **5**, la tasa es 60 dividido entre 565, es decir, **10,62 %**. El denominador no es la renta disponible sino el consumo más el ajuste, y la razón es la coherencia: el D.8 devuelve al hogar unas cotizaciones a planes privados que la cuenta anterior le había quitado y que económicamente no ha perdido, porque a cambio tiene un derecho. Sin ese ajuste, la tasa de ahorro subestimaría lo que las familias realmente están apartando.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el consumo de las cuentas no coincide con el de las encuestas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un hecho que descoloca a quien trabaja con datos por primera vez: el consumo de los hogares que publican las cuentas nacionales y el que declaran las familias en las encuestas de presupuestos no coinciden, y la diferencia no es pequeña. Las razones son todas conocidas y todas instructivas.",
            "**La primera es que las cuentas incluyen consumos que ningún hogar reconocería.** Los **alquileres imputados** de la ficha 12.02 aparecen como gasto de quien vive en su propia vivienda, y ningún encuestado los declara porque no los paga. El **SIFMI** de la ficha 12.05 aparece como consumo de servicios financieros por tener una cuenta corriente. Y los **seguros** se registran por el margen de la compañía, no por la prima pagada. Entre las tres, la diferencia ya es considerable.",
            "**La segunda es que las encuestas subdeclaran sistemáticamente**, y en particular en alcohol, tabaco, juego y consumo en el exterior. Es un fenómeno documentado en todos los países y en todas las épocas, y las cuentas nacionales corrigen esos consumos con fuentes de oferta —producción más importaciones menos exportaciones— en lugar de fiarse de lo declarado.",
            "**La tercera es de cobertura poblacional.** Las cuentas incluyen a las personas que viven en instituciones —residencias, hospitales de larga estancia, centros penitenciarios— que las encuestas de hogares no visitan, y el consumo de los **turistas** se trata de forma distinta: el gasto de los extranjeros en el país no es consumo de los hogares residentes, y el de los residentes fuera sí lo es.",
            "**Y la cuarta es de criterio contable.** Las cuentas registran en **devengo** y las encuestas, en la práctica, en caja. La compra a plazos, la vivienda —que como verá la ficha 12.09 no es consumo sino inversión— y los bienes duraderos se tratan con criterios distintos en cada fuente.",
            "**La conclusión no es que una fuente sea mejor que la otra, sino que responden a preguntas distintas.** Las cuentas nacionales dan el **agregado coherente con el resto del sistema**, y son la fuente correcta para el análisis macroeconómico y para calcular la tasa de ahorro. Las encuestas dan la **distribución entre hogares**, que las cuentas no pueden ofrecer, y son la fuente correcta para estudiar desigualdad, pobreza y estructura de gasto por tipo de familia. Mezclar el numerador de una con el denominador de la otra es el error que la ficha 10.02 señalaba para el empleo, aplicado aquí al consumo.",
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
            { t: "Suponer que las sociedades tienen gasto en consumo final", d: "No lo tienen: todo lo que compran es consumo intermedio o formación de capital. Solo consumen los hogares, las administraciones públicas y las instituciones sin fines de lucro. De ahí que el ahorro de una sociedad coincida con su renta disponible salvo el ajuste por derechos de pensiones." },
            { t: "Confundir gasto en consumo final con consumo final efectivo", d: "El primero mide quién paga y el segundo quién consume. Se separan en todo lo que las administraciones entregan a las familias sin cobrarlo: ahí paga el Estado y consume el hogar. Para el agregado de la economía coinciden, porque lo que unos entregan es lo que otros reciben." },
            { t: "Comparar el consumo privado entre países con Estados de bienestar distintos", d: "Un país con sanidad y educación públicas tendrá un gasto en consumo de los hogares mucho menor que otro donde las familias las pagan, con un consumo efectivo casi idéntico. Las magnitudes comparables son el consumo final efectivo y la renta disponible ajustada, y casi nadie las usa." },
            { t: "Creer que las administraciones tienen consumo efectivo individual", d: "No: todo su consumo individual —sanidad, educación, cultura, servicios sociales— se transfiere a los hogares en especie, y lo único que les queda como consumo efectivo es el colectivo, lo que se presta simultáneamente a todos y no puede atribuirse a nadie. En las instituciones sin fines de lucro el consumo efectivo es directamente cero." },
            { t: "Calcular la tasa de ahorro dividiendo por la renta disponible", d: "El denominador correcto es el consumo más el ajuste por variación de derechos por pensiones. Ese ajuste devuelve al hogar unas cotizaciones a planes privados que la cuenta anterior le quitó y que económicamente no ha perdido, porque a cambio tiene un derecho. Sin él, la tasa subestima lo que las familias apartan." },
            { t: "Esperar que el consumo de las cuentas coincida con el de las encuestas", d: "No puede coincidir: las cuentas incluyen alquileres imputados, SIFMI y seguros medidos por margen, corrigen la subdeclaración con fuentes de oferta, cubren a la población institucional y registran en devengo. Las encuestas dan la distribución entre hogares, que las cuentas no pueden ofrecer. Responden a preguntas distintas." },
            { t: "Olvidar que las dos ópticas dan el mismo ahorro", d: "Se puede calcular como renta disponible menos gasto o como renta disponible ajustada menos consumo efectivo, y el resultado es idéntico. Esa propiedad es lo que hace legítimo el doble registro: cambia el retrato de quién consume, no la capacidad de financiación de nadie." },
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
            "Esta cuenta produce dos de los agregados más citados del análisis coyuntural y una de las identidades más útiles del sistema.",
          ],
          lista: [
            "El **gasto en consumo final** de los tres sectores que consumen es el componente mayor del PIB por el enfoque de la demanda de la ficha 10.07. La suma del consumo de hogares y del de administraciones era exactamente el consumo final de aquella ficha, y ahora se sabe cómo se reparte por dentro.",
            "El **ahorro** que sale de aquí es la entrada de la cuenta de capital de la ficha 12.09, y de él sale la capacidad o necesidad de financiación de cada sector. La cadena que la ficha 10.06 recorría por saldos pasa exactamente por este punto.",
            "La **tasa de ahorro de los hogares** es uno de los indicadores coyunturales más seguidos porque anticipa el consumo, y su fórmula con el ajuste por derechos de pensiones explica por qué las cifras publicadas no cuadran con el cálculo intuitivo.",
            "El **consumo colectivo** de las administraciones es lo que queda como consumo efectivo público, y su distinción del individual es la que permite comparar el tamaño real del Estado de bienestar entre países con formas de provisión distintas.",
            "Y las **transferencias sociales en especie** son la pieza que faltaba para medir la redistribución completa que la ficha 12.06 dejaba a medias: la redistribución monetaria se ve en la renta disponible, y la de especie solo aparece al pasar a la renta disponible ajustada.",
          ],
          cierre:
            "El punto general es que **el sistema mide dos veces la misma realidad cuando quien paga y quien disfruta no coinciden**, y ofrece las dos cifras. Elegir cuál usar no es un detalle: cambia el retrato de un país, y usar la equivocada al comparar economías con Estados de bienestar distintos produce conclusiones sencillamente falsas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el ahorro de una sociedad coincide con su renta disponible?", a: "Porque las sociedades no tienen gasto en consumo final: todo lo que compran es consumo intermedio o formación de capital. Solo consumen los hogares, las administraciones públicas y las instituciones sin fines de lucro. La única diferencia es el ajuste por variación de derechos por pensiones, que en sociedades es muy pequeño." },
            { q: "Los hogares gastan 560 y las administraciones 215, de los cuales 95 son individuales. ¿Cuál es el consumo efectivo de cada uno?", a: "Los hogares consumen 655 —sus 560 más los 95 que reciben en especie— y las administraciones, 120, que es solo su consumo colectivo. El total sigue siendo 775 en las dos ópticas, porque nada se ha creado ni destruido: es la misma sanidad y la misma educación contadas por quien las paga y por quien las recibe." },
            { q: "¿Puede el consumo efectivo total diferir del gasto total de una economía?", a: "No. Lo que unos sectores entregan en especie es exactamente lo que otros reciben, así que las transferencias sociales en especie suman cero al agregar. Solo cambia el reparto entre sectores, y por eso P.3 total y P.4 total son siempre iguales." },
            { q: "¿Por qué no se puede comparar el consumo privado entre países sin más?", a: "Porque un país con sanidad y educación públicas mostrará un gasto de los hogares mucho menor que otro donde las familias las pagan de su bolsillo, aunque su consumo efectivo sea casi idéntico. Las magnitudes comparables entre países con Estados de bienestar de tamaño distinto son el consumo final efectivo y la renta disponible ajustada." },
            { q: "¿Por qué la tasa de ahorro se divide por el consumo más el ajuste D.8?", a: "Porque ese ajuste devuelve al hogar las cotizaciones a planes de pensiones privados que la cuenta anterior le había quitado y que económicamente no ha perdido, ya que a cambio tiene un derecho. Con 60 de ahorro, 560 de consumo y 5 de ajuste, la tasa es 60 entre 565, es decir, 10,62 %." },
            { q: "¿Por qué el consumo de las cuentas nacionales supera al declarado en las encuestas?", a: "Por cuatro razones: las cuentas incluyen alquileres imputados, SIFMI y seguros medidos por margen, que nadie declara; corrigen la subdeclaración de alcohol, tabaco y juego con fuentes de oferta; cubren a la población que vive en instituciones; y registran en devengo. Las dos fuentes responden a preguntas distintas y ninguna es mejor." },
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
            { ref: "SEC 2010, capítulo 3 — gasto en consumo final y consumo final efectivo", nota: "las definiciones de P.3 y P.4 y la distinción entre consumo individual y colectivo." },
            { ref: "SEC 2010, capítulo 4 — transferencias sociales en especie (D.63)", nota: "el puente entre ambas medidas, con la distinción entre producidas y adquiridas en el mercado." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre consumo explica bien por qué se necesitan dos medidas y cuándo usar cada una." },
            { ref: "INE, Encuesta de Presupuestos Familiares — metodología", nota: "para entender por qué su consumo difiere del de las cuentas y qué pregunta responde cada fuente." },
            { ref: "INE, Curso de Cuentas Nacionales — cuenta de utilización de la renta", nota: "las identidades del consumo efectivo y la fórmula de la tasa de ahorro de los hogares con el ajuste D.8." },
          ],
        },
      ],
    },
  ],
};
