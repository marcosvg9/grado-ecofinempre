/* Ficha 1.05 — Pensamiento marginal e incentivos. */

export default {
  codigo: "1.05",
  titulo: "Pensamiento marginal e incentivos",
  nivel: 1,
  bloque: "Fundamentos y método económico",
  tiempo: "3 h",
  nucleo:
    "Las decisiones se toman en el margen, no sobre totales. Los promedios engañan porque mezclan lo que ya está decidido con lo que se está decidiendo, y casi todos los errores de gestión que parecen de cálculo son en realidad de haber usado una media donde hacía falta un marginal.",
  requiere: "1.01 Escasez y coste de oportunidad",
  abre: "2.02 Elección del consumidor · 2.05 Costes · 6.04 Punto muerto",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Casi ninguna decisión económica real es de todo o nada. No se decide si comer, sino si comer **un poco más**; no si producir, sino si producir **una unidad más**; no si estudiar, sino si dedicar **una hora más**. A esos incrementos pequeños se les llama **el margen**, y la afirmación central de la ficha es que **es ahí donde se decide**, con una regla de una sencillez casi decepcionante: hacer algo más mientras el beneficio de esa unidad adicional supere a su coste adicional, y parar cuando se igualen.",
            "El obstáculo para aplicarla no es su dificultad sino la costumbre de razonar con **promedios**. Un promedio mezcla lo que ya está decidido —los recursos comprometidos, los costes en los que ya se incurrió— con lo que se está decidiendo ahora, y por eso induce a error de forma sistemática. **El coste medio dice cuánto ha costado en conjunto lo hecho hasta ahora; el coste marginal dice cuánto costará lo siguiente.** Solo el segundo es relevante para decidir, y es la traducción operativa de la regla de la ficha 1.01 sobre contar únicamente lo que cambia con la decisión.",
            "Del lado del beneficio, la pieza que ordena el análisis es la **utilidad marginal decreciente**: cada unidad adicional de un bien aporta algo menos que la anterior. La primera copa de agua de quien tiene sed vale muchísimo; la décima, poco. Y de aquí sale la solución de una paradoja que desconcertó a los clásicos durante un siglo: **por qué el agua, imprescindible, vale menos que los diamantes, prescindibles**. La respuesta es que el precio no refleja la utilidad **total** de un bien sino la de **la última unidad disponible**, y como hay muchísima agua y pocos diamantes, la utilidad marginal del agua es baja pese a que su utilidad total sea inmensa. **El valor no está en la cosa, está en el margen.**",
            "La misma lógica gobierna la producción: la **productividad marginal** de un factor decrece cuando se añaden unidades manteniendo los demás fijos. Un segundo cocinero en una cocina pequeña aporta menos que el primero, y un décimo puede aportar cero o incluso estorbar. De ahí nacen las curvas de coste de la ficha 2.05 y, con ellas, la relación aritmética que allí se demostró: **el marginal arrastra a la media**. Si el siguiente valor está por debajo del promedio, el promedio baja; si está por encima, sube. No es una convención gráfica, es una propiedad de cualquier media.",
            "La segunda mitad de la ficha es el reverso natural: si la gente decide en el margen, **cambiar el coste o el beneficio marginal de una conducta cambia la conducta**. Eso es un **incentivo**, y su alcance es mucho mayor de lo que sugiere el uso coloquial de la palabra: no son solo premios y multas, sino todo aquello que altera el cálculo marginal de alguien —precios, impuestos, plazos, reputación, normas sociales, la facilidad o dificultad de hacer algo—. Buena parte de la economía aplicada consiste en detectar qué incentivo está realmente operando, que casi nunca es el que la norma dice que opera.",
            "Y de ahí el resultado que conviene llevarse: **la gente responde a los incentivos, incluidos los que nadie pretendía crear**. Un indicador que se convierte en objetivo deja de medir lo que medía, porque aparece el incentivo a mover el indicador en lugar de la realidad subyacente; es la **ley de Goodhart**. Una recompensa mal diseñada premia el atajo en vez del resultado. Y un incentivo monetario puede incluso **desplazar** a la motivación no monetaria que ya existía, sustituyendo una obligación moral por un precio. Nada de esto refuta la idea de que los incentivos funcionan: **la confirma con demasiada literalidad**, y por eso el diseño importa tanto.",
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
            { nom: "Magnitud marginal", sub: "El efecto de una unidad más; en continuo, una derivada.", cols: ["Mg(x) = ΔTotal / Δx"] },
            { nom: "Magnitud media", sub: "Reparte el total entre las unidades; mezcla pasado y presente.", cols: ["Me(x) = Total(x) / x"] },
            { nom: "Regla de decisión marginal", sub: "Vale para consumo, producción e inversión.", cols: ["Ampliar mientras BMg > CMg; parar en BMg = CMg"] },
            { nom: "Utilidad marginal decreciente", sub: "Resuelve la paradoja del valor.", cols: ["dU/dx > 0 , d²U/dx² < 0"] },
            { nom: "Regla de igualación", sub: "Cómo repartir un presupuesto entre varios usos.", cols: ["UMg_A / p_A = UMg_B / p_B"] },
            { nom: "Productividad marginal decreciente", sub: "Con los demás factores fijos.", cols: ["PMg_L = dQ/dL , decreciente"] },
            { nom: "Relación marginal-media", sub: "El marginal arrastra a la media.", cols: ["dMe/dx = (Mg − Me) / x"] },
            { nom: "Corolario", sub: "El marginal corta a la media en su extremo.", cols: ["Me es mínima ⟺ Mg = Me"] },
            { nom: "Ley de Goodhart", sub: "Por qué los indicadores se degradan al usarse como meta.", cols: ["Indicador ⟶ objetivo ⟹ deja de medir"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el asiento vacío",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un avión de **180 plazas** va a despegar en dos horas. Los costes del vuelo —tripulación, combustible base, tasas de aeropuerto, amortización— suman **18.000 €** y no cambian por llevar un pasajero más o menos. Cada pasajero adicional cuesta **12 €** entre catering, tasa por viajero y consumo asociado a su peso. Van vendidas 150 plazas y aparece alguien dispuesto a pagar **60 €**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Pasajeros", "Coste total", "Coste medio", "Coste marginal", "¿Vender a 60 €?"],
          filas: [
            ["100", "19.200", "192,0", "12", "Sí"],
            ["120", "19.440", "162,0", "12", "Sí"],
            ["150", "19.800", "132,0", "12", "Sí"],
            ["170", "20.040", "117,9", "12", "Sí"],
            { celdas: ["180", "20.160", "112,0", "12", "Avión lleno"], clase: "total" },
          ],
          nota: "La columna del coste medio invita a rechazar el billete: **60 € está muy por debajo de los 132 € que «cuesta» cada pasajero**. Y sería un error de 48 €. Ese coste medio incluye 18.000 € que se pagan igual vuele quien vuele; lo único que cambia por aceptar a esta persona son 12 €. **Aceptar aumenta el beneficio en 48 € exactos.** Toda la ficha cabe en la distancia entre las columnas tercera y cuarta.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Pasajeros", y: "Euros" },
          dominio: { x: [90, 190], y: [0, 200] },
          marcasX: [100, 120, 140, 160, 180],
          marcasY: [0, 12, 60, 100, 150, 200],
          series: [
            {
              nombre: "Coste medio",
              color: "tinta",
              puntos: [[100, 192], [110, 175.6], [120, 162], [130, 150.5], [140, 140.6], [150, 132], [160, 124.5], [170, 117.9], [180, 112]],
            },
            { nombre: "Precio ofrecido", color: "n3", trazo: "discontinuo", puntos: [[90, 60], [190, 60]] },
            { nombre: "Coste marginal", color: "acento", puntos: [[90, 12], [190, 12]] },
          ],
          nota: "La curva de coste medio cae sin parar porque reparte un coste fijo enorme entre más gente: es una **economía de escala** en estado puro, la misma que hacía natural el monopolio de la ficha 2.07. Pero para decidir no sirve. **La comparación pertinente es entre las dos rectas**: mientras el precio ofrecido (60) esté por encima del coste marginal (12), aceptar mejora el resultado, aunque el precio quede muy por debajo de la curva superior.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El límite de este razonamiento, que es donde se equivoca quien lo aprende a medias.** Si la compañía vendiera *todas* las plazas a 60 €, ingresaría 10.800 y perdería 9.360: el coste marginal justifica vender **el asiento que de otro modo iría vacío**, no fijar la política de precios. Es la misma distinción entre corto y largo plazo de la ficha 2.05: a corto, los 18.000 están comprometidos y solo cuentan los 12; a largo, no hay avión que se compre solo, y el precio medio tiene que cubrir el coste medio o la compañía desaparece. **El pensamiento marginal decide sobre el uso de una capacidad ya existente; no decide si conviene tener esa capacidad.**",
            "**Y la misma lógica en el consumo.** Alguien reparte 60 € entre dos bienes cuyas primeras unidades le aportan mucho y las siguientes cada vez menos. La regla de igualación dice que el reparto óptimo no es el que iguala el gasto ni el que iguala las cantidades, sino el que **iguala la utilidad marginal por euro gastado** en ambos. Si un euro más en el primer bien aporta más satisfacción que un euro más en el segundo, conviene trasladar gasto; y como la utilidad marginal decrece, ese traslado se detiene solo. La ficha 2.01 lo formaliza, pero la intuición ya está aquí completa.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cuando el incentivo produce lo contrario",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Si la gente decide en el margen, un incentivo mal calibrado no es un incentivo débil: es un incentivo eficaz apuntando al sitio equivocado. Los ejemplos son abundantes y todos comparten estructura.",
            "**El caso más citado es el de las guarderías que multaron los retrasos.** Ante padres que recogían tarde a sus hijos, varios centros introdujeron una pequeña sanción económica. Los retrasos **aumentaron**. La explicación tiene sentido en cuanto se piensa en el margen: antes de la multa, llegar tarde tenía un coste difuso pero real —incomodidad, sensación de estar abusando del personal—; después, ese coste quedó sustituido por un precio explícito y modesto, y llegar tarde pasó a ser **un servicio que se podía comprar**. El incentivo monetario no se sumó a la norma social: la **desplazó**. Y cuando la multa se retiró, los retrasos no volvieron al nivel anterior, porque la norma no se recupera con la misma facilidad con la que se destruye.",
            "**El segundo patrón es la ley de Goodhart aplicada a la gestión pública.** Si se evalúa un hospital por el tiempo medio de espera, aparece el incentivo a reordenar las listas antes que a atender más; si se evalúa a un centro educativo por la tasa de aprobados, aparece el incentivo a bajar la exigencia. En ambos casos **el indicador mejora y la realidad que pretendía medir no**, o incluso empeora. El fallo no está en medir —sin indicadores no hay gestión posible— sino en convertir un indicador único en el objetivo de quien es evaluado por él.",
            "**El tercero es el atajo premiado.** Una retribución variable ligada a ventas incentiva vender, incluido vender a quien no podrá pagar o vender producto que se devolverá; una ligada a beneficio trimestral incentiva recortar mantenimiento o formación, cuyos efectos aparecen más tarde. Es exactamente el problema de agencia de la ficha 9.01 y el riesgo moral de la 2.10: **quien diseña el incentivo no observa el esfuerzo, solo un resultado, y el incentivo actúa sobre lo observado**.",
            "**Qué tienen en común los tres, y qué se deduce para el diseño.** En los tres el incentivo funcionó perfectamente; lo que falló fue la correspondencia entre lo incentivado y lo deseado. De ahí tres reglas prácticas: usar **varios indicadores** en lugar de uno, porque manipular todos a la vez es más difícil; **medir resultados y no actividades** siempre que sea posible; y **preguntarse antes de implantar nada cuál es la forma más barata de mejorar el indicador sin mejorar la realidad**, porque esa es exactamente la que alguien encontrará.",
            "**Y una advertencia sobre el propio marco.** Que la gente responda a incentivos no significa que solo responda a incentivos monetarios, ni que toda conducta se explique así. El caso de las guarderías es interesante precisamente porque muestra el límite: había una motivación no económica operando, y el instrumento económico la destruyó. Un análisis que solo mira precios habría predicho lo contrario de lo que pasó.",
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
            { t: "Decidir con el coste medio en lugar del marginal", d: "El coste medio incluye costes ya comprometidos que no cambian con la decisión. En el ejemplo del avión, decidir con los 132 € de media en vez de con los 12 € de margen cuesta 48 € por cada asiento rechazado. Es el error de gestión más caro y más frecuente." },
            { t: "Aplicar el razonamiento marginal a decisiones de capacidad", d: "El coste marginal justifica usar bien una capacidad existente, no adquirirla. Vender todos los billetes al coste marginal arruina a la compañía. A corto plazo mandan los costes evitables; a largo, todos lo son, y el precio medio debe cubrir el coste medio." },
            { t: "Confundir utilidad total con utilidad marginal", d: "Es la paradoja del agua y los diamantes. El precio refleja el valor de la última unidad disponible, no la importancia del bien en conjunto. Que algo sea imprescindible no implica que su siguiente unidad valga mucho, y por eso lo abundante es barato aunque sea vital." },
            { t: "Creer que el marginal decreciente significa que el total cae", d: "Decreciente significa que cada unidad añade menos que la anterior, no que reste. Mientras la magnitud marginal sea positiva, el total sigue creciendo, solo que cada vez más despacio. Son dos afirmaciones distintas sobre dos derivadas distintas." },
            { t: "Pensar que los incentivos son solo dinero", d: "Cualquier cosa que altere el coste o el beneficio de una conducta en el margen es un incentivo: tiempo, trámites, reputación, normas sociales, comodidad. Muchas políticas eficaces no cambian precios, cambian la dificultad de hacer algo." },
            { t: "Suponer que un incentivo monetario se suma a la motivación existente", d: "Puede desplazarla. El caso de la multa por retraso muestra que poner precio a una conducta puede convertir una obligación moral en una transacción, y el efecto neto ser el contrario del buscado. Además, la norma social destruida no se restaura al retirar el incentivo." },
            { t: "Convertir un indicador en objetivo sin prever la respuesta", d: "Es la ley de Goodhart: en cuanto el indicador se usa para evaluar, aparece el incentivo a mover el indicador en lugar de la realidad. La defensa práctica es usar varios indicadores, medir resultados en vez de actividades y anticipar cuál es el atajo más barato." },
            { t: "Tratar la respuesta a un incentivo perverso como irracionalidad", d: "Quien reordena una lista de espera o vende a un cliente insolvente está respondiendo con precisión al incentivo que se le puso. El fallo es de diseño, no de conducta, y buscar culpables individuales impide corregir el sistema." },
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
            "Las cuentas nacionales están construidas casi enteramente con totales y promedios; las magnitudes marginales que gobiernan la conducta hay que estimarlas aparte.",
          ],
          lista: [
            "El **PIB per cápita** es la media por excelencia y arrastra todas las limitaciones de una media: no dice nada sobre la distribución ni sobre cómo se reparte el crecimiento. Es un promedio útil para comparar, e inútil para inferir la situación de nadie en concreto.",
            "La **propensión marginal al consumo** es el parámetro marginal más importante de la macroeconomía —de él depende el multiplicador de la ficha 3.04— y **no se lee en las cuentas**. Estas registran el consumo y la renta agregados, de donde sale la propensión **media**; la marginal exige estimación econométrica, y la diferencia entre ambas no es menor.",
            "En el **sistema fiscal**, la distinción reaparece con consecuencias directas: el **tipo medio** determina cuánto se paga y el **tipo marginal** determina el incentivo a ganar un euro más. Un IRPF progresivo tiene un tipo marginal muy superior al medio en los tramos altos, y las decisiones de oferta de trabajo responden al segundo. La ficha 10.03 lo desarrolla.",
            "El **consumo de capital fijo** (P.51c) es un promedio contable —una amortización calculada con vidas útiles convencionales— y no coincide con el desgaste marginal real de un activo concreto. Es una de las magnitudes más estimadas y menos observadas de todo el sistema.",
            "Y la **productividad** que publican las cuentas es siempre **media**: producción dividida por empleo u horas. La productividad marginal, que es la que determina la demanda de trabajo de la ficha 2.09, no es observable y puede moverse en dirección contraria a la media.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: casi todos los parámetros que gobiernan la conducta son marginales, y casi todos los datos publicados son medios. El puente entre unos y otros es siempre un modelo estimado, nunca una lectura directa.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El coste medio por pasajero es 132 € y alguien ofrece 60 €. ¿Se le vende el billete?", a: "Sí, si el avión va a despegar de todos modos y queda plaza. Lo relevante es el coste marginal de ese pasajero, 12 €, no el medio, que incluye 18.000 € comprometidos. Aceptar aumenta el beneficio en 48 €. Lo que no puede hacerse es fijar todos los precios así: eso no cubriría el coste del avión." },
            { q: "¿Por qué el agua vale menos que los diamantes siendo mucho más necesaria?", a: "Porque el precio refleja la utilidad de la última unidad disponible, no la del bien en conjunto. Hay tanta agua que su utilidad marginal es baja, mientras que su utilidad total es inmensa. El valor se determina en el margen, y ahí está la solución a la paradoja clásica." },
            { q: "Si la productividad marginal es decreciente, ¿la producción total disminuye?", a: "No. Decreciente significa que cada trabajador adicional aporta menos que el anterior, no que reste. Mientras el producto marginal sea positivo, el total sigue subiendo, cada vez más despacio. Solo cae si el marginal se vuelve negativo, algo posible por congestión pero infrecuente." },
            { q: "Se multa a los padres que recogen tarde a sus hijos y los retrasos aumentan. ¿Falla la teoría de los incentivos?", a: "No: la confirma demasiado bien. La multa sustituyó un coste moral difuso por un precio explícito y barato, convirtiendo el retraso en un servicio comprable. El incentivo funcionó, pero desplazó a la norma social que ya operaba. Es un fallo de diseño, no de la idea de que la gente responde a incentivos." },
            { q: "¿Por qué se degrada un indicador cuando se convierte en objetivo?", a: "Porque quien es evaluado por él tiene incentivo a mover el indicador, y casi siempre hay una forma de moverlo más barata que mejorar la realidad subyacente: reordenar listas, bajar la exigencia, reclasificar casos. Es la ley de Goodhart, y la defensa consiste en usar varios indicadores y anticipar cuál será el atajo." },
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
            { ref: "Mankiw, Principios de Economía", nota: "los diez principios y el tratamiento del pensamiento marginal; el punto de partida más limpio para esta ficha." },
            { ref: "Frank, El naturalista de la economía", nota: "decenas de casos cotidianos resueltos con razonamiento marginal; el mejor entrenamiento para aplicar la regla fuera del aula." },
            { ref: "Gneezy y Rustichini, «A Fine Is a Price»", nota: "el estudio original de las multas por retraso en las guarderías; ocho páginas que fundamentan el caso práctico." },
            { ref: "Kerr, «On the Folly of Rewarding A, While Hoping for B»", nota: "el clásico sobre incentivos mal diseñados en las organizaciones; enlaza con las fichas 9.01 y 9.06." },
          ],
        },
      ],
    },
  ],
};
