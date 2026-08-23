/* Ficha 3.06 — Oferta y demanda agregadas. */

export default {
  codigo: "3.06",
  titulo: "Oferta y demanda agregadas",
  nivel: 2,
  bloque: "Macroeconomía",
  tiempo: "4 h",
  nucleo:
    "Por qué el corto y el largo plazo dan respuestas opuestas al mismo estímulo. La clave está en un solo supuesto: si los precios y salarios esperados están dados o ya se han ajustado, y todo lo demás se deduce de ahí.",
  requiere: "3.04 Modelo keynesiano · 3.05 Modelo IS-LM · 3.03 Curva de Phillips",
  abre: "3.08 Política monetaria · 3.09 Crecimiento · 3.02 Inflación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los dos modelos anteriores tenían los precios fijos, lo que los limitaba a una economía con capacidad ociosa. El marco de **oferta y demanda agregadas** levanta ese supuesto y permite determinar a la vez **el nivel de producción y el nivel de precios**. Conviene advertir de entrada que, pese al parecido gráfico, **no es la oferta y la demanda de la ficha 1.02 en grande**: allí el eje vertical era el precio de un bien en relación con los demás; aquí es el nivel general de precios, y las razones de las pendientes son completamente distintas.",
            "La **demanda agregada** relaciona el nivel de precios con la cantidad demandada del conjunto de la producción, y tiene pendiente negativa por tres mecanismos que conviene distinguir del efecto sustitución microeconómico. El **efecto saldos reales**: un nivel de precios menor aumenta el valor real del dinero que la gente tiene, y con más riqueza real se gasta más. El **efecto tipo de interés**: menos precios significan menos demanda de dinero, tipos más bajos y por tanto más inversión, que es literalmente la LM de la ficha 3.05 desplazándose. Y el **efecto comercio exterior**: precios internos menores abaratan la producción nacional frente a la extranjera. Se desplaza con todo lo que desplazaba la IS o la LM: política fiscal, política monetaria, confianza, demanda exterior.",
            "La **oferta agregada de corto plazo** tiene pendiente positiva porque **algunos precios y salarios están fijados por contrato o por expectativas formadas antes**. Si el nivel general sube más de lo esperado, los precios de venta de las empresas suben mientras sus costes salariales todavía no, los márgenes se ensanchan y conviene producir más. Nótese que este mecanismo es el mismo de la curva de Phillips de la ficha 3.03, mirado desde otro ángulo: **lo que estimula la producción es la sorpresa, no el nivel de precios en sí**.",
            "La **oferta agregada de largo plazo** es **vertical** en el producto potencial, y esa es la afirmación central del modelo. A largo plazo todos los contratos se renegocian y las expectativas se ajustan, de modo que los márgenes vuelven a su nivel normal y la producción regresa a la que permiten los recursos y la tecnología disponibles. **El nivel de precios no determina cuánto puede producir un país**: eso lo deciden el capital, el trabajo y la productividad de la ficha 3.09. El producto potencial es el análogo agregado de la frontera de posibilidades de la ficha 1.01, y la distancia con el observado es la brecha de producción de la ficha 3.01.",
            "Con ese aparato, un **choque de demanda** se lee así: a corto plazo aumenta producción y precios, situando la economía por encima de su potencial; pero esa situación tensiona el mercado de trabajo, los salarios esperados se revisan al alza, la oferta de corto plazo se desplaza hacia arriba y la economía **vuelve al potencial con un nivel de precios permanentemente más alto**. El efecto sobre la producción es transitorio y el efecto sobre los precios es permanente. Es exactamente el recorrido A-B-C de la ficha 3.03, dibujado en otro plano.",
            "Un **choque de oferta** negativo es cualitativamente distinto y mucho peor. Un encarecimiento de la energía o de los insumos importados desplaza la oferta de corto plazo hacia arriba: **suben los precios y baja la producción a la vez**. Eso es la estanflación, y su gravedad está en que **la política de demanda no puede corregir las dos cosas**: expandir sostiene el empleo pero agrava la inflación, contraer contiene la inflación pero profundiza la caída. No hay error de gestión que explique ese dilema; hay una economía que se ha empobrecido y una decisión sobre cómo repartir la pérdida y con qué velocidad, que es exactamente el conflicto distributivo de la ficha 3.02.",
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
            { nom: "Demanda agregada", sub: "Su pendiente no es la de una demanda ordinaria.", cols: ["Y^d = f(P), decreciente"] },
            { nom: "Efecto saldos reales", sub: "Menos precios, más riqueza real, más gasto.", cols: ["↓P ⟹ ↑M/P ⟹ ↑C"] },
            { nom: "Efecto tipo de interés", sub: "Es la LM de la ficha 3.05 operando.", cols: ["↓P ⟹ ↓i ⟹ ↑I"] },
            { nom: "Efecto comercio exterior", sub: "Precios relativos frente al exterior.", cols: ["↓P ⟹ ↑X − M"] },
            { nom: "Oferta agregada a corto plazo", sub: "Depende de la sorpresa, no del nivel.", cols: ["Y = Y* + α(P − P^e)"] },
            { nom: "Oferta agregada a largo plazo", sub: "El nivel de precios no fija la capacidad.", cols: ["Y = Y*, vertical"] },
            { nom: "Producto potencial", sub: "El análogo agregado de la frontera de la ficha 1.01.", cols: ["Y* = F(K, L, A)"] },
            { nom: "Brecha de producción", sub: "Positiva por encima del potencial.", cols: ["(Y − Y*) / Y*"] },
            { nom: "Choque de demanda", sub: "Producción transitoria, precios permanentes.", cols: ["Corto: ↑Y ↑P · Largo: Y* con P mayor"] },
            { nom: "Choque de oferta negativo", sub: "El dilema sin salida buena.", cols: ["↑P y ↓Y simultáneamente"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos choques, dos historias",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea una economía con demanda agregada **Y = 3.000 − 10·P**, oferta de corto plazo **Y = 1.000 + 10·P** y producto potencial de **2.000**. El equilibrio inicial está en **P = 100 e Y = 2.000**, es decir, justo en el potencial y con la brecha cerrada.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Producción", y: "Nivel de precios" },
          dominio: { x: [1650, 2400], y: [70, 150] },
          marcasX: [1800, 2000, 2150, 2300],
          marcasY: [70, 100, 115, 130],
          series: [
            { nombre: "OA largo plazo", color: "tinta", puntos: [[2000, 72], [2000, 148]], etiquetaEn: [2000, 148] },
            { nombre: "OA corto plazo", color: "acento", puntos: [[1750, 75], [2250, 125]], etiquetaEn: [2200, 122] },
            { nombre: "OA tras el ajuste", color: "alerta", trazo: "discontinuo", puntos: [[1800, 110], [2150, 145]], etiquetaEn: [2090, 143] },
            { nombre: "DA inicial", color: "tinta2", puntos: [[1700, 130], [2350, 65]], etiquetaEn: [1730, 132] },
            { nombre: "DA tras el impulso", color: "n3", trazo: "discontinuo", puntos: [[1900, 140], [2400, 90]], etiquetaEn: [2250, 105] },
          ],
          puntos: [
            { x: 2000, y: 100, etiqueta: "A", guias: false },
            { x: 2150, y: 115, etiqueta: "B", guias: false },
            { x: 2000, y: 130, etiqueta: "C", guias: false },
          ],
          nota: "El recorrido **A → B → C** es el resultado central del modelo. Un impulso de demanda lleva primero a **B**: más producción (2.150) y más precios (115), con la economía por encima de su potencial. Pero esa situación tensiona el mercado de trabajo, los salarios esperados se revisan y la oferta de corto plazo se desplaza hacia arriba hasta **C**, donde la producción ha vuelto a 2.000 y los precios se han quedado en 130. **La ganancia de producción era prestada; la subida de precios se queda.**",
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Producción", "Nivel de precios", "Brecha", "Lectura"],
          filas: [
            ["Punto de partida", "2.000", "100", "0 %", "Economía en su potencial"],
            ["Choque de demanda, corto plazo", "2.150", "115", "+7,5 %", "Expansión con recalentamiento"],
            ["Choque de demanda, largo plazo", "2.000", "130", "0 %", "Solo quedan los precios"],
            { celdas: ["Choque de oferta negativo", "1.850", "115", "−7,5 %", "Estanflación: peor en ambas"], clase: "total" },
          ],
          nota: "Compárense las filas segunda y cuarta: **el mismo nivel de precios, 115, con producciones que difieren en 300 unidades**. Ante un dato de inflación idéntico, la política correcta es opuesta según de dónde venga el impulso, y distinguirlo en tiempo real es uno de los problemas más difíciles del análisis de coyuntura. La pista principal es lo que hace la producción: **si sube con los precios, el choque es de demanda; si cae, es de oferta**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Por qué el choque de oferta no tiene respuesta buena.** Desde la cuarta fila, expandir la demanda devolvería la producción hacia 2.000 pero llevaría los precios muy por encima de 115; contraerla contendría los precios a costa de agravar la caída. **Ninguna política de demanda puede devolver simultáneamente producción y precios a su punto de partida**, porque el choque no ha desplazado la demanda: ha empeorado las condiciones de producción. La economía es genuinamente más pobre, y lo único que se decide es **quién soporta esa pérdida y en cuánto tiempo**.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el dilema del banco central ante un choque energético",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un encarecimiento súbito y grande de la energía importada es el ejemplo puro de choque de oferta, y sitúa a un banco central con objetivo de inflación ante una decisión sin opción cómoda. Vale la pena recorrerla porque muestra el modelo funcionando en una situación real y reciente.",
            "**Lo primero es reconocer que el país se ha empobrecido, y que eso no lo arregla nadie.** Si la energía se compra fuera, pagar más por ella significa entregar más producto propio a cambio de la misma cantidad de producto ajeno: es el deterioro de la relación real de intercambio de la ficha 3.02. **Esa pérdida es real y no admite compensación interna**, solo reparto. Cualquier política que prometa evitarla, en lugar de distribuirla, está prometiendo algo imposible.",
            "**La decisión del banco central se plantea entre dos errores.** Si mira solo la inflación general y endurece con fuerza, agrava una contracción que ya estaba en marcha por el propio choque. Si la ignora por considerarla transitoria y externa, arriesga que el aumento de precios se traslade a salarios y a los precios de otros bienes, y que **lo transitorio se vuelva persistente**. La primera opción convierte un choque en recesión; la segunda, en inflación instalada.",
            "**El criterio que se ha ido consolidando es mirar la subyacente y las expectativas.** Un choque de oferta genuinamente puntual eleva la general y deja la subyacente relativamente quieta; si la subyacente empieza a subir con retraso —como en el gráfico de la ficha 3.02— es señal de que se están produciendo efectos de segunda vuelta y de que el proceso ha dejado de ser externo. Y el indicador decisivo son las **expectativas de inflación a medio plazo**: mientras permanezcan ancladas, hay margen para acomodar; si se desanclan, la curva de Phillips de la ficha 3.03 se desplaza y **recuperarlas cuesta paro**.",
            "**La política fiscal afronta un dilema paralelo y a menudo lo resuelve mal.** Compensar a los hogares por la subida de precios es defendible desde el punto de vista distributivo, pero si se hace de forma **generalizada y bajando el precio final de la energía**, se sostiene la demanda del bien cuyo encarecimiento era precisamente la señal de que hay que consumir menos. Las medidas dirigidas por renta, que mantienen la señal de precio y compensan la renta, son superiores en términos de eficiencia; ese es el argumento de la ficha 2.10 aplicado aquí. La diferencia entre ambos diseños es exactamente la diferencia entre corregir el reparto y anular el incentivo.",
            "**Y la lección de método.** El mismo dato de inflación exige respuestas opuestas según de dónde venga, y el modelo no dice de dónde viene: **da la pregunta correcta, no la respuesta**. Distinguir un choque de demanda de uno de oferta en tiempo real, con datos provisionales y revisables como los de la ficha 10.10, es probablemente la tarea más difícil de un banco central, y explica por qué sus decisiones se discuten tanto incluso entre quienes comparten el marco teórico.",
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
            { t: "Leer la demanda agregada como una demanda de mercado ampliada", d: "La demanda de la ficha 1.02 cae porque el bien se encarece frente a otros. La agregada cae por saldos reales, tipo de interés y comercio exterior, mecanismos completamente distintos. El parecido gráfico es engañoso y produce razonamientos incorrectos por analogía." },
            { t: "Creer que el nivel de precios determina cuánto puede producir un país", d: "A largo plazo la oferta agregada es vertical: la capacidad la fijan el capital, el trabajo y la productividad. El nivel de precios solo afecta a la producción mientras haya contratos y expectativas sin ajustar, es decir, a corto plazo." },
            { t: "Suponer que un impulso de demanda eleva la producción de forma permanente", d: "Lo hace mientras dura la sorpresa. Al revisarse salarios y expectativas, la oferta de corto plazo se desplaza y la economía vuelve al potencial con más precios. La ganancia de producción es prestada y la subida de precios se queda." },
            { t: "Tratar un choque de oferta con política de demanda", d: "Expandir sostiene el empleo y agrava la inflación; contraer hace lo contrario. Ninguna política de demanda devuelve producción y precios a la vez a su punto de partida, porque el choque ha empeorado las condiciones de producción, no la demanda." },
            { t: "Diagnosticar el origen del choque mirando solo la inflación", d: "Un mismo nivel de precios es compatible con una expansión y con una estanflación. La pista es la producción: si sube junto a los precios, el impulso es de demanda; si cae, es de oferta. Sin esa segunda variable el diagnóstico es imposible." },
            { t: "Tomar el producto potencial por un dato observado", d: "Se estima, con métodos que difieren en varios puntos, y se revisa a posteriori. Como la brecha de producción se usa en reglas fiscales y en decisiones monetarias, esa incertidumbre no es académica: se traslada a la política." },
            { t: "Confundir un cambio de precios relativos con inflación", d: "Que la energía se encarezca frente al resto es una señal que induce a consumir menos de ella. Anular esa señal con topes generalizados mantiene la demanda del bien escaso; compensar la renta sin tocar el precio conserva el incentivo y protege igual." },
            { t: "Olvidar que los precios esperados pueden desanclarse", d: "Mientras las expectativas de medio plazo sigan ancladas, un choque externo puede acomodarse. Si se desanclan, la curva de corto plazo se desplaza sola y volver a anclarlas exige mantener el paro por encima de su tasa natural, con el coste de la ficha 3.03." },
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
            "Este modelo tiene dos variables y las cuentas nacionales publican exactamente esas dos, lo que lo hace inusualmente fácil de conectar con los datos.",
          ],
          lista: [
            "La producción del modelo es el **PIB en volumen** y el nivel de precios es el **deflactor del PIB**. Publicar ambos por separado, como hace la Contabilidad Nacional trimestral, permite situar cada trimestre en el plano de esta ficha y ver si el movimiento fue de demanda o de oferta.",
            "El **producto potencial** no lo estima el INE sino organismos como la Comisión Europea, el FMI o el Banco de España, con métodos distintos —función de producción, filtros estadísticos— y resultados que pueden diferir varios puntos. La ficha 10.10 muestra cuánto se revisan a posteriori.",
            "Las **contribuciones al crecimiento** por componentes del gasto permiten identificar de dónde vino un impulso: si el crecimiento lo explican consumo y gasto público, el desplazamiento es de demanda; si aparece una caída generalizada con precios al alza, apunta a oferta.",
            "La **relación real de intercambio** —deflactor de exportaciones frente al de importaciones— es la magnitud que mide directamente el empobrecimiento por un choque energético del caso práctico, y es la que separa el PIB de la renta realmente disponible para gastar dentro del país.",
            "Y la **renta nacional bruta disponible** de la ficha 3.01 es, en ese contexto, mejor indicador que el PIB: un país puede mantener su producción y ver caer lo que puede gastar, porque una parte mayor de lo producido se destina a pagar importaciones más caras.",
          ],
          cierre:
            "El punto que más rendimiento da es el último: ante un choque de precios importados, el PIB puede engañar. La magnitud que recoge el empobrecimiento es la renta disponible, y suele citarse mucho menos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la oferta agregada de largo plazo es vertical?", a: "Porque a largo plazo todos los contratos se renegocian y las expectativas se ajustan, de modo que los márgenes vuelven a su nivel normal. La capacidad productiva la determinan el capital, el trabajo y la productividad, no el nivel de precios, que solo influye mientras hay elementos sin ajustar." },
            { q: "Un impulso de demanda lleva la producción de 2.000 a 2.150. ¿Qué queda a largo plazo?", a: "Solo el nivel de precios más alto: 130 frente a 100. La producción vuelve a 2.000 porque la economía estaba ya en su potencial, y la tensión resultante hace que se revisen salarios y expectativas, desplazando la oferta de corto plazo hasta cerrar la brecha." },
            { q: "Los precios suben a 115. ¿Fue un choque de demanda o de oferta?", a: "No puede saberse con ese dato. En el ejemplo, un choque de demanda lleva a 115 con una producción de 2.150 y uno de oferta lleva al mismo 115 con 1.850. La variable que los distingue es la producción: sube en el primer caso y cae en el segundo." },
            { q: "¿Por qué la política de demanda no resuelve un choque de oferta?", a: "Porque el choque empeora las condiciones de producción, no la demanda. Expandir devuelve producción a costa de más inflación y contraer contiene precios a costa de más caída. La economía se ha empobrecido realmente, y lo único que se decide es cómo y en cuánto tiempo se reparte esa pérdida." },
            { q: "¿Por qué un tope generalizado al precio de la energía es peor que una ayuda por renta?", a: "Porque anula la señal de precio que induce a consumir menos del bien que se ha vuelto escaso, sosteniendo su demanda. Una transferencia dirigida compensa la pérdida de renta sin tocar el precio relativo, protegiendo a quien lo necesita y conservando el incentivo al ahorro energético." },
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
            { ref: "Mankiw, Macroeconomía", nota: "el tratamiento más claro del modelo de oferta y demanda agregadas y de los tres efectos que explican la pendiente de la DA." },
            { ref: "Blanchard, Macroeconomía", nota: "el puente entre IS-LM y OA-DA, y la conexión formal con la curva de Phillips de la ficha 3.03." },
            { ref: "Blanchard y Galí, «The Macroeconomic Effects of Oil Price Shocks»", nota: "por qué los choques energéticos tuvieron efectos menores en las últimas décadas que en los setenta." },
            { ref: "Banco de España, Informe Anual", nota: "el análisis aplicado de los choques recientes sobre la economía española, con la descomposición entre demanda y oferta." },
          ],
        },
      ],
    },
  ],
};
