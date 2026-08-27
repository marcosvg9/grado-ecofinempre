/* Ficha 1.02 — Oferta, demanda y equilibrio de mercado. */

export default {
  codigo: "1.02",
  titulo: "Oferta, demanda y equilibrio de mercado",
  nivel: 1,
  bloque: "Fundamentos y método económico",
  tiempo: "3 h",
  nucleo:
    "El precio no lo fija nadie: emerge del cruce de dos planes de conducta distintos. Y de esa idea se sigue algo que se olvida constantemente: cuando un precio cambia hay que averiguar cuál de las dos curvas se ha movido, porque las políticas que funcionan sobre una no funcionan sobre la otra.",
  requiere: "1.01 Escasez y coste de oportunidad",
  abre: "1.03 Elasticidades · 1.04 Excedente y bienestar · 2.06 Competencia perfecta",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **mercado** es cualquier mecanismo que pone en contacto a compradores y vendedores de un bien. El modelo de esta ficha describe el caso más simple —muchos compradores, muchos vendedores, producto homogéneo, nadie con capacidad de mover el precio por sí solo— que es el que la ficha 2.06 formalizará como competencia perfecta. Conviene saber desde el principio que **es un modelo, no una fotografía**: su utilidad no está en describir cualquier mercado real, sino en aislar el mecanismo por el que los precios se forman cuando nadie los decide.",
            "La **curva de demanda** relaciona el precio con la cantidad que los compradores quieren adquirir, **manteniendo todo lo demás constante**. Su pendiente es negativa por dos razones distintas que conviene no mezclar: al subir el precio, cada comprador sustituye ese bien por otros, y además hay compradores que directamente dejan de comprarlo. Esa cláusula de todo lo demás constante es la que separa los dos movimientos que más se confunden en toda la economía: un cambio del **precio del propio bien** produce un **movimiento a lo largo** de la curva; un cambio de cualquier otra cosa —renta, precio de los sustitutivos y complementarios, gustos, expectativas, número de compradores— **desplaza la curva entera**.",
            "La **curva de oferta** hace lo propio del lado vendedor y tiene pendiente positiva, porque un precio más alto hace rentable producir unidades que antes no lo eran. La ficha 2.06 demostrará que esa curva es exactamente el coste marginal de las empresas, pero de momento basta con la intuición. Sus **desplazamientos** provienen del precio de los factores, de la tecnología, de los impuestos y subvenciones, de las expectativas y del número de vendedores. Y aquí aparece la misma trampa: una subida del precio del petróleo desplaza la oferta de transporte; una subida del precio del transporte, no.",
            "El **equilibrio** es el precio al que ambos planes son compatibles: la cantidad que los compradores quieren comprar coincide con la que los vendedores quieren vender. Lo interesante no es el punto, sino **por qué el mercado tiende a él**. Si el precio está por encima, sobra producto y quien no vende tiene incentivo a rebajar; si está por debajo, falta y quien no consigue comprar tiene incentivo a ofrecer más. **Nadie tiene que conocer el equilibrio ni pretender alcanzarlo**: el precio se mueve porque a cada participante individual le conviene moverlo, y ese es el resultado que fascinó a los clásicos y que sigue siendo el argumento central del mecanismo de precios.",
            "El uso práctico del modelo es la **estática comparativa**: predecir qué pasa cuando algo cambia. La disciplina consiste en preguntarse tres cosas en orden. Primero, **cuál de las dos curvas se mueve** —o si se mueven las dos—. Segundo, **en qué dirección**. Y tercero, qué le ocurre entonces al precio y a la cantidad de equilibrio. Cuando se mueve una sola curva, precio y cantidad quedan determinados sin ambigüedad. Cuando se mueven las dos, **una de las dos variables queda indeterminada** y solo el tamaño relativo de los desplazamientos decide el resultado; reconocer esa indeterminación es más útil que forzar una respuesta.",
            "Y de ahí se sigue el análisis de los **controles de precios**. Un **precio máximo** por debajo del equilibrio genera **escasez**, porque aumenta la cantidad demandada y reduce la ofrecida; un **precio mínimo** por encima genera **excedente**. El punto que conviene retener es que el desabastecimiento no desaparece: **el racionamiento deja de hacerlo el precio y pasa a hacerlo otra cosa** —colas, listas de espera, contactos, calidad degradada o mercado informal—, y esos mecanismos ni son gratuitos ni tienen por qué favorecer a quien se pretendía proteger. La ficha 1.04 pondrá cifras a ese coste y la 2.10 discutirá cuándo intervenir tiene sentido pese a todo.",
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
            { nom: "Función de demanda", sub: "Todo lo demás constante.", cols: ["$Q_d = D(P;\\ \\text{renta, otros precios, gustos})$"] },
            { nom: "Función de oferta", sub: "Refleja el coste marginal de producir.", cols: ["$Q_s = S(P;\\ \\text{costes, tecnología, impuestos})$"] },
            { nom: "Condición de equilibrio", sub: "Los dos planes son compatibles.", cols: ["$Q_d(P^*) = Q_s(P^*)$"] },
            { nom: "Exceso de oferta", sub: "Presiona el precio a la baja.", cols: ["$P > P^* \\Rightarrow Q_s > Q_d$"] },
            { nom: "Exceso de demanda", sub: "Presiona el precio al alza.", cols: ["$P < P^* \\Rightarrow Q_d > Q_s$"] },
            { nom: "Movimiento a lo largo de la curva", sub: "Solo lo provoca el precio del propio bien.", cols: ["$\\Delta P \\Rightarrow \\Delta Q$ sobre la misma curva"] },
            { nom: "Desplazamiento de la curva", sub: "Lo provoca cualquier otra cosa.", cols: ["$\\Delta(\\text{otro factor}) \\Rightarrow$ nueva curva"] },
            { nom: "Precio máximo efectivo", sub: "Solo actúa si está por debajo del equilibrio.", cols: ["$\\bar P < P^* \\Rightarrow$ escasez $= Q_d - Q_s$"] },
            { nom: "Precio mínimo efectivo", sub: "El caso del salario mínimo en competencia.", cols: ["$\\underline{P} > P^* \\Rightarrow$ excedente $= Q_s - Q_d$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un mercado completo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Tomemos un mercado con demanda $Q_d = 100 - 2P$ y oferta $Q_s = -20 + 3P$. Igualando ambas, $100 - 2P = -20 + 3P$, se obtiene $P = 24$ y $Q = 52$. Es el único precio al que los dos planes encajan.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 110], y: [0, 55] },
          marcasX: [0, 20, 40, 52, 70, 100],
          marcasY: [0, 10, 20, 24, 30, 40, 50],
          series: [
            { nombre: "Demanda", color: "tinta", puntos: [[0, 50], [100, 0]] },
            { nombre: "Oferta", color: "acento", puntos: [[0, 6.7], [100, 40]] },
            { nombre: "Demanda tras el aumento", color: "n3", trazo: "discontinuo", puntos: [[0, 65], [110, 10]], etiquetaEn: [78, 26] },
          ],
          puntos: [
            { x: 52, y: 24, etiqueta: "E  inicial" },
            { x: 70, y: 30, etiqueta: "E'  tras el aumento" },
          ],
          nota: "El equilibrio inicial está en **52 unidades a un precio de 24**. Cuando la demanda aumenta —la curva discontinua, que corresponde a $Q_d = 130 - 2P$— el nuevo cruce se sitúa en **70 unidades a 30**. Obsérvese que la curva de oferta **no se ha movido**: lo que ha habido es un movimiento a lo largo de ella, de 52 a 70. Confundir ese desplazamiento con un cambio de la oferta es el error más frecuente de toda la ficha.",
        },
        {
          tipo: "tabla",
          cabecera: ["Precio", "Cantidad demandada", "Cantidad ofrecida", "Diferencia", "Presión sobre el precio"],
          filas: [
            ["10", "80", "10", "+70", "Al alza: falta producto"],
            ["20", "60", "40", "+20", "Al alza"],
            { celdas: ["24", "52", "52", "0", "Equilibrio"], clase: "total" },
            ["30", "40", "70", "−30", "A la baja: sobra producto"],
            ["40", "20", "100", "−80", "A la baja"],
          ],
          nota: "La última columna describe el **mecanismo**, que es lo que importa. A 20, hay veinte unidades de demanda insatisfecha y algunos compradores están dispuestos a pagar más: el precio sube. A 30, hay treinta unidades sin vender y algún vendedor prefiere rebajar antes que quedárselas: el precio baja. **Nadie calcula el equilibrio**; se llega a él porque en cualquier otro punto hay alguien con incentivo individual a moverse.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora un precio máximo.** Supongamos que la autoridad fija un tope de **20**, por debajo del equilibrio de 24, con la intención de abaratar el bien. A ese precio los compradores quieren **60** unidades y los vendedores solo ofrecen **40**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Sin control", "Con tope de 20"],
          filas: [
            ["Precio", "24", "20"],
            ["Cantidad demandada", "52", "60"],
            ["Cantidad ofrecida", "52", "40"],
            { celdas: ["Cantidad efectivamente intercambiada", "52", "40"], clase: "total" },
          ],
          nota: "Hay que fijarse en la última fila y no en la primera. El precio baja, sí, **pero se intercambian doce unidades menos**: quien logra comprar paga menos y quien no logra comprar paga infinito, porque no hay producto. Las veinte unidades de exceso de demanda se reparten por algún mecanismo que no es el precio, y ninguno de los candidatos —cola, sorteo, contacto, mercado informal— tiene por qué favorecer a quien más lo necesita. La ficha 1.04 calcula exactamente cuánto bienestar se pierde por el camino.",
        },
      ],
    },
    {
      titulo: "Caso práctico: los topes al alquiler",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El alquiler de vivienda es el mercado donde el análisis anterior se pone a prueba con más frecuencia y donde el debate público está más cargado. Vale la pena recorrerlo con cuidado, porque el modelo simple acierta en parte y también tiene límites que conviene admitir.",
            "**Lo que el modelo predice es inequívoco.** Un tope por debajo del precio de equilibrio aumenta la cantidad demandada, reduce la ofrecida y produce escasez. La reducción de oferta no ocurre de golpe: a corto plazo el número de viviendas está dado y la respuesta es pequeña, pero a medida que pasa el tiempo aparecen los márgenes de ajuste —retirar pisos del alquiler de larga duración, venderlos, dedicarlos a otros usos, no rehabilitar, no construir—. **La elasticidad de la oferta crece con el horizonte**, así que el efecto sobre la cantidad es leve al principio y creciente después. Esa asimetría temporal explica buena parte de la discrepancia entre evaluaciones.",
            "**El segundo efecto predicho es el racionamiento por vías distintas del precio**, y aquí el modelo es especialmente robusto. Con exceso de demanda, el propietario elige entre muchos candidatos y puede seleccionar por criterios que antes no aplicaba: nómina, avales, ausencia de hijos o de mascotas, contactos. **Quien peor situación tiene es quien peor sale de una selección no basada en el precio**, que es justo lo contrario de lo que la medida pretendía. A ello se suma el deterioro de la calidad, que es una forma de subir el precio real sin tocar el nominal.",
            "**Dónde el modelo simple se queda corto, y hay que decirlo.** El mercado de la vivienda no es competencia perfecta: el producto no es homogéneo —la localización lo es todo—, la información es imperfecta, hay costes de búsqueda y de mudanza elevados, y en algunos segmentos existe poder de mercado del lado arrendador. Eso significa que el precio observado no tiene por qué coincidir con el de equilibrio competitivo, y que un tope **puede** en principio actuar sobre una renta y no sobre el margen, igual que ocurría con el salario mínimo en monopsonio de la ficha 2.09. Es un argumento serio y no se resuelve dibujando dos rectas.",
            "**El diagnóstico que sí resiste** es que un precio alto sostenido es un síntoma, y que la pregunta pertinente es **cuál de las dos curvas está desplazada**. Si el problema es que la oferta no responde —por escasez de suelo, plazos de licencia, costes de construcción o restricciones regulatorias—, actuar sobre el precio no crea ni una vivienda y agrava la escasez. Si el problema fuera un poder de mercado localizado, la herramienta adecuada sería la de la ficha 2.07, no el tope general. **La política correcta depende del diagnóstico, y el diagnóstico es empírico.**",
            "**Y una lección de método que vale para todo el bloque.** El modelo de oferta y demanda no dice si una medida es buena; dice qué mecanismos pone en marcha y dónde hay que buscar sus efectos. Quien lo usa para cerrar el debate lo está usando mal, y quien lo descarta por simple se queda sin la única herramienta que anticipa el racionamiento oculto.",
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
            { t: "Confundir movimiento a lo largo de la curva con desplazamiento", d: "Solo el precio del propio bien produce un movimiento a lo largo; cualquier otro factor desplaza la curva entera. Decir que «sube el precio y por eso baja la demanda» es incorrecto: baja la cantidad demandada, y la demanda es la curva completa, que no se ha movido." },
            { t: "Decir que un precio alto se debe a la avaricia de los vendedores", d: "El precio de equilibrio no lo elige nadie: sale del cruce de dos planes. Si sube, o se ha desplazado la demanda o se ha contraído la oferta, y averiguar cuál de las dos es lo que permite predecir qué pasará después y qué política tendría efecto." },
            { t: "Suponer que un tope de precios abarata el bien para todos", d: "Lo abarata para quien consigue comprarlo y lo hace inaccesible para el resto, porque la cantidad intercambiada cae. En el ejemplo pasa de 52 a 40 unidades. El precio deja de racionar y raciona otra cosa, casi siempre de forma más regresiva." },
            { t: "Creer que la escasez desaparece si se prohíbe subir el precio", d: "La escasez es la diferencia entre lo que se quiere comprar y lo que hay. Prohibir el precio alto elimina la señal, no el desajuste: aparecen colas, listas de espera, peor calidad o mercado informal, que son formas de pagar más caro sin que figure en el precio." },
            { t: "Analizar dos desplazamientos simultáneos como si dieran un resultado único", d: "Si se mueven ambas curvas, una de las dos variables queda indeterminada y solo el tamaño relativo de los desplazamientos decide. Reconocer esa indeterminación es un resultado del análisis, no un fallo: forzar una respuesta es lo que sí es un error." },
            { t: "Olvidar el horizonte temporal al juzgar los efectos", d: "Las elasticidades crecen con el tiempo. Una medida cuyo efecto sobre la cantidad es despreciable el primer año puede tener uno grande a cinco, porque los márgenes de ajuste tardan en activarse. Evaluar solo el corto plazo sesga sistemáticamente el resultado." },
            { t: "Aplicar el modelo competitivo a mercados que claramente no lo son", d: "El modelo supone producto homogéneo, muchos agentes e información razonable. En vivienda, sanidad o mercados con marcas fuertes esos supuestos fallan, y las conclusiones deben matizarse con las fichas 2.07 y 2.10 en lugar de trasladarse sin más." },
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
            "El equilibrio de esta ficha es un concepto de mercado individual; las cuentas nacionales trabajan con agregados y no ven curvas, pero sí registran sus resultados.",
          ],
          lista: [
            "Las cuentas nacionales observan únicamente el **punto de equilibrio**: precio y cantidad efectivamente intercambiados. **Las curvas no son observables**, así que ningún dato agregado dice por sí solo si un precio subió por demanda o por oferta. Separar ambos efectos es un problema de identificación y es exactamente lo que se aborda en la ficha 4.07.",
            "El equilibrio entre oferta y demanda tiene un análogo contable exacto en la **tabla de origen y destino** del SEC 2010, que obliga a que para cada producto la oferta total —producción interior más importaciones— iguale al empleo total: consumos intermedios, consumo final, formación de capital y exportaciones. Es un **equilibrio contable, siempre cierto por construcción**, y no debe confundirse con el equilibrio de comportamiento de esta ficha.",
            "Los **precios administrados o regulados** que identifica el INE dentro del IPC son la huella estadística de los controles de precios de la última sección. Su seguimiento por separado permite ver cuánta inflación medida procede de decisiones administrativas y cuánta del mercado.",
            "Cuando un mercado se raciona por vías distintas del precio, **el índice de precios deja de medir lo que pretende**: si la calidad se degrada o aparecen listas de espera, el precio nominal se mantiene y el precio real efectivo sube. Los ajustes por calidad son uno de los problemas metodológicos más difíciles de los índices, y la ficha 1.07 los trata.",
            "Y el mercado del **alquiler** aparece en las cuentas de dos formas: el alquiler efectivamente pagado, y los **alquileres imputados** de la vivienda en propiedad, que se estiman a partir de los primeros. Un control sobre los alquileres observados contamina por tanto también la parte imputada, que en España es una magnitud considerable.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: cuando alguien afirma que un precio subió por especulación, por demanda o por costes, está haciendo una afirmación sobre curvas que ningún dato de precio y cantidad puede sostener por sí solo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Sube el precio del bien y se compra menos. ¿Ha bajado la demanda?", a: "No. Ha bajado la cantidad demandada, moviéndose a lo largo de la misma curva. La demanda es la relación completa entre precio y cantidad, y solo cambia si se mueve algo distinto del precio del propio bien: renta, gustos, precios de otros bienes o número de compradores." },
            { q: "Con $Q_d = 100 - 2P$ y $Q_s = -20 + 3P$, ¿cuál es el equilibrio y qué pasa a un precio de 30?", a: "El equilibrio es P = 24 y Q = 52. A un precio de 30 los compradores quieren 40 unidades y los vendedores ofrecen 70: sobran 30, algunos vendedores no colocan su producto y el precio tiende a bajar hasta 24." },
            { q: "Se encarece un insumo de producción. ¿Qué ocurre con precio y cantidad?", a: "Se desplaza la oferta hacia la izquierda, no la demanda. El precio de equilibrio sube y la cantidad baja. A lo largo de la curva de demanda hay un movimiento, pero la demanda como tal no se ha movido en absoluto." },
            { q: "Un tope de precios efectivo, ¿elimina la escasez?", a: "No: la crea o la agrava, porque aumenta la cantidad demandada y reduce la ofrecida. En el ejemplo, la cantidad intercambiada cae de 52 a 40 unidades. Lo que desaparece es el racionamiento por precio, sustituido por colas, selección de clientes, peor calidad o mercado informal." },
            { q: "Suben a la vez la demanda y la oferta. ¿Qué pasa con el precio?", a: "No se puede saber sin conocer la magnitud relativa de ambos desplazamientos. La cantidad aumenta con seguridad, pero el precio puede subir, bajar o quedarse igual. Reconocer esa indeterminación es la respuesta correcta, no un fallo del análisis." },
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
              q: "Sube el precio del café y se compra menos. ¿Qué ha ocurrido con la demanda?",
              opciones: [
                "Ha bajado la demanda",
                "Ha bajado la cantidad demandada, sobre la misma curva de demanda",
                "Se ha desplazado la curva de demanda hacia la izquierda",
                "Han bajado a la vez la demanda y la oferta",
              ],
              correcta: 1,
              porque: [
                "Es la formulación imprecisa que arrastra todo lo demás. La demanda es la curva entera —la relación entre precio y cantidad— y no se mueve porque cambie el precio del propio bien.",
                "Solo el precio del propio bien produce un movimiento a lo largo de la curva. La curva sigue exactamente donde estaba; lo que ha cambiado es el punto en el que nos situamos sobre ella.",
                "La curva se desplaza cuando cambia cualquier factor que no sea el precio del bien: la renta, los gustos, el precio de un sustitutivo. Aquí no ha cambiado ninguno de esos.",
                "No hay nada en el enunciado que indique un cambio en la oferta. Atribuir a las dos curvas lo que explica una sola impide predecir qué pasará después.",
              ],
            },
            {
              q: "Un ayuntamiento fija un alquiler máximo por debajo del precio de equilibrio. ¿Qué efecto tiene?",
              opciones: [
                "Abarata la vivienda para todos los que la buscan",
                "Abarata para quien consigue alquilar y deja fuera al resto, porque cae la cantidad intercambiada",
                "Elimina la escasez, que era lo que causaba el precio alto",
                "No tiene efecto mientras el tope siga por encima del coste del propietario",
              ],
              correcta: 1,
              porque: [
                "Solo la abarata para quien logra contrato. Al precio topado se quiere alquilar más de lo que se ofrece, así que alguien se queda fuera necesariamente: el conjunto de los que buscan no sale ganando en bloque.",
                "El precio deja de racionar y raciona otra cosa: colas, listas de espera, contactos, peor mantenimiento. Casi siempre de forma más arbitraria que el precio, y con menos viviendas alquiladas que antes.",
                "Al revés: la escasez es la diferencia entre lo que se quiere comprar y lo que hay, y prohibir el precio alto elimina la señal, no el desajuste. El exceso de demanda es justamente $Q_d - Q_s$ al precio topado.",
                "Un tope solo es efectivo si queda por debajo del equilibrio, y entonces sí tiene efecto. Por encima del equilibrio es el tope el que no hace nada, no al revés.",
              ],
            },
            {
              q: "Suben a la vez la demanda y la oferta de un bien. ¿Qué se puede afirmar del nuevo equilibrio?",
              opciones: [
                "Que suben el precio y la cantidad",
                "Que sube la cantidad, pero el precio depende de cuál de los dos desplazamientos sea mayor",
                "Que el precio no cambia porque los dos efectos se compensan",
                "Que sube el precio y la cantidad queda indeterminada",
              ],
              correcta: 1,
              porque: [
                "Más demanda empuja el precio hacia arriba y más oferta lo empuja hacia abajo. Quedarse con uno solo de los dos efectos es decidir el resultado por adelantado.",
                "Los dos desplazamientos actúan en el mismo sentido sobre la cantidad y en sentidos opuestos sobre el precio. La cantidad sube con seguridad; el precio solo se sabe si se conoce la magnitud relativa de cada movimiento.",
                "Se compensarían solo si los dos desplazamientos fueran de igual tamaño, que es un caso particular y no la regla. Suponerlo equivale a inventarse un dato.",
                "Es el diagnóstico invertido: lo indeterminado es el precio y lo seguro es la cantidad. Conviene fijarse en qué variable recibe los dos efectos en el mismo sentido.",
              ],
            },
            {
              q: "En un mercado con $Q_d = 100 - 2P$ y $Q_s = -20 + 3P$, ¿qué ocurre a un precio de 30?",
              opciones: [
                "Hay exceso de demanda y el precio tenderá a subir",
                "Hay exceso de oferta de 30 unidades y el precio tenderá a bajar",
                "El mercado está en equilibrio",
                "Hay exceso de oferta, pero el precio no puede bajar porque ya cubre costes",
              ],
              correcta: 1,
              porque: [
                "Es el diagnóstico contrario. A 30 se demandan 40 unidades y se ofrecen 70: sobra producto, no falta. El exceso de demanda aparece por debajo del equilibrio, no por encima.",
                "A ese precio $Q_d = 100 - 60 = 40$ y $Q_s = -20 + 90 = 70$, de modo que sobran 30 unidades. Con $P > P^*$ siempre hay exceso de oferta, y los vendedores que no colocan su producto presionan el precio a la baja.",
                "El equilibrio está en $P = 24$ y $Q = 52$, que es donde ambas expresiones coinciden. A 30 no se cruzan.",
                "Que un precio cubra costes no impide que baje: mientras sobre producto habrá vendedores dispuestos a rebajar antes que quedarse sin vender, y eso sigue hasta el equilibrio.",
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
            { ref: "Krugman y Wells, Introducción a la Economía", nota: "el tratamiento más claro de la distinción entre movimiento y desplazamiento, con abundante estática comparativa resuelta." },
            { ref: "Mankiw, Principios de Economía", nota: "los capítulos de oferta, demanda y controles de precios; la discusión de topes y suelos está especialmente bien planteada." },
            { ref: "Varian, Microeconomía intermedia", nota: "el paso siguiente: de dónde salen realmente ambas curvas, que es lo que hacen las fichas 2.02 y 2.06." },
            { ref: "Banco de España, informes sobre el mercado de la vivienda", nota: "datos y análisis con los que contrastar el caso práctico en lugar de discutirlo con intuiciones." },
          ],
        },
      ],
    },
  ],
};
