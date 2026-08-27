/* Ficha 2.06 — Competencia perfecta y equilibrio de la industria. */

export default {
  codigo: "2.06",
  titulo: "Competencia perfecta y equilibrio de la industria",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "Precio igual a coste marginal es el resultado, no el supuesto: sale de que cada empresa maximiza beneficio tomando el precio como dado. Y el beneficio económico nulo del largo plazo no lo impone nadie, lo impone la entrada libre.",
  requiere: "2.05 Costes · 2.02 Derivación de la demanda",
  abre: "2.07 Monopolio · 2.08 Oligopolio · 1.04 Excedente y bienestar",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La competencia perfecta descansa en cuatro supuestos: producto homogéneo, muchos compradores y vendedores, información completa sobre precios y **entrada y salida libres**. De ellos se deriva la propiedad que define el modelo: cada empresa es **precio-aceptante**. Conviene entender bien qué significa. No es que la empresa sea pequeña y le dé igual el precio: es que la **demanda residual que afronta es horizontal**, porque si subiera su precio un céntimo vendería cero —el producto es idéntico y el comprador se va al vecino— y bajarlo no tiene sentido porque puede colocar toda su producción al precio vigente.",
            "De ahí sale la primera consecuencia. Si la demanda de la empresa es horizontal al precio de mercado, cada unidad adicional aporta exactamente ese precio, de modo que **el ingreso marginal coincide con el precio**. Y como el beneficio se maximiza donde el ingreso marginal iguala al coste marginal, la condición de la empresa competitiva es **P = CMg**. Esto no se supone en ninguna parte: se deduce. Es la diferencia con el monopolio de la ficha siguiente, donde el ingreso marginal está por debajo del precio y la igualdad se rompe.",
            "La **curva de oferta de la empresa** es entonces su curva de coste marginal, pero solo en el tramo creciente y solo por encima del mínimo del coste variable medio: por debajo de ese punto la respuesta óptima es no producir, según la condición de cierre de la ficha 2.05. La **oferta de la industria a corto plazo** se obtiene sumando **horizontalmente** —cantidades, no precios— las ofertas de un número de empresas que está fijo, y su cruce con la demanda de mercado determina el precio.",
            "El **largo plazo** cambia el problema, porque el número de empresas deja de estar dado. Si al precio vigente hay beneficio económico positivo, entran empresas; la oferta se desplaza a la derecha y el precio cae. Si hay pérdidas, salen; la oferta se contrae y el precio sube. El proceso solo se detiene cuando el beneficio económico es nulo, y eso ocurre exactamente cuando el precio iguala al **mínimo del coste medio**. Como además sigue cumpliéndose P = CMg, en el largo plazo se satisface la doble condición **P = CMg = mín CMe**, y de ella se sigue un resultado notable: **cada empresa acaba produciendo a su escala eficiente**, aquella en la que el coste medio es el más bajo posible. Nadie lo ha planificado.",
            "Eso permite dibujar la **curva de oferta de la industria a largo plazo**, y su forma sorprende la primera vez. Si los precios de los factores no cambian al crecer el sector —lo que se llama una **industria de costes constantes**—, la curva es **horizontal** al nivel del mínimo coste medio. Un aumento permanente de la demanda no altera el precio de largo plazo: altera el **número de empresas**. Toda la subida de precio es un fenómeno transitorio de corto plazo que la entrada deshace. Si en cambio la expansión del sector encarece algún factor específico, la industria es de **costes crecientes** y la curva de largo plazo tiene pendiente positiva, aunque siempre más plana que la de corto plazo.",
            "Y queda el juicio de valor. En el equilibrio competitivo el precio iguala al coste marginal, lo que significa que **se produce toda unidad que un comprador valora por encima de lo que cuesta fabricarla, y ninguna más**: el excedente total es máximo, en el sentido de la ficha 1.04. Es un resultado potente y por eso el modelo se usa como vara de medir. Pero conviene retener sus dos límites. El primero: **eficiencia no es equidad**, porque el reparto del excedente depende de la distribución inicial y el modelo no dice nada de eso. El segundo, más incómodo: en competencia perfecta **nadie tiene incentivo ni margen para innovar**, porque el beneficio extraordinario es cero por construcción y la información es completa. La innovación de la ficha 9.10 necesita precisamente las imperfecciones que este modelo elimina.",
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
            { nom: "Demanda que afronta la empresa", sub: "Horizontal: elasticidad infinita al precio de mercado.", cols: ["P = P* para cualquier q"] },
            { nom: "Ingreso marginal", sub: "Solo en competencia coincide con el precio.", cols: ["$\\mathrm{IMg} = \\dfrac{d(Pq)}{dq} = P$"] },
            { nom: "Condición de óptimo de la empresa", sub: "Con el coste marginal en su tramo creciente.", cols: ["P = CMg(q)"] },
            { nom: "Curva de oferta de la empresa", sub: "El coste marginal truncado por la condición de cierre.", cols: ["$q(P)$ tal que $P = \\mathrm{CMg}$, si $P \\geq \\min \\mathrm{CVMe}$"] },
            { nom: "Oferta de la industria a corto plazo", sub: "Suma horizontal con n dado.", cols: ["$Q(P) = n\\,q(P)$"] },
            { nom: "Beneficio económico", sub: "Distancia vertical entre precio y coste medio.", cols: ["$B = (P - \\mathrm{CMe})\\,q$"] },
            { nom: "Equilibrio de largo plazo", sub: "La entrada libre lo impone; nadie lo decide.", cols: ["P = CMg = mín CMe"] },
            { nom: "Escala eficiente", sub: "Se deduce de la línea anterior.", cols: ["q* donde CMg(q*) = CMe(q*)"] },
            { nom: "Número de empresas a largo plazo", sub: "El ajuste se produce aquí, no en el precio.", cols: ["$n^* = \\dfrac{Q_{\\text{demandada}}(P^*)}{q^*}$"] },
            { nom: "Oferta de largo plazo, costes constantes", sub: "La demanda fija cuántas empresas caben, no a qué precio.", cols: ["Horizontal en P* = mín CMe"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: del corto al largo plazo en una industria",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la función de costes de la ficha anterior, $\\mathrm{CT}(q) = 100 + 2q + 0{,}05q^2$, y suponemos que todas las empresas del sector son idénticas. De ahí, $\\mathrm{CMg} = 2 + 0{,}1q$, y despejando se obtiene la oferta individual: $q = 10(P - 2)$. El coste medio alcanza su mínimo de **6,47** en $q = 44{,}72$, como se calculó en la ficha 2.05.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Precio", "Cantidad ofrecida", "Coste medio", "Ingreso", "Coste total", "Beneficio"],
          filas: [
            ["4,00", "20,0", "8,00", "80,0", "160,0", "−80,0"],
            ["5,00", "30,0", "6,83", "150,0", "205,0", "−55,0"],
            { celdas: ["6,47", "44,7", "6,47", "289,4", "289,4", "0,0"], clase: "total" },
            ["6,60", "46,0", "6,47", "303,6", "297,8", "5,8"],
            ["8,00", "60,0", "6,67", "480,0", "400,0", "80,0"],
          ],
          nota: "La fila destacada es la única en la que **el precio toca el mínimo del coste medio**. Por encima hay beneficio económico y por tanto entrarán empresas; por debajo hay pérdidas y saldrán. Nótese que la empresa no elige el precio: elige la cantidad **dado** el precio, y el beneficio es lo que resulta.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la industria.** Partimos de **80 empresas** y una demanda de mercado **Q = 5.000 − 200P**. La oferta agregada es 80 · 10 · (P − 2) = 800P − 1.600, y el equilibrio se obtiene igualándola a la demanda. Después dejamos actuar a la entrada libre, y finalmente aplicamos un **aumento permanente de la demanda a Q = 6.000 − 200P** para ver qué se ajusta y qué no.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [3200, 5200], y: [5, 9.5] },
          marcasX: [3200, 3800, 4400, 5000],
          marcasY: [5, 6, 7, 8, 9],
          series: [
            {
              nombre: "Oferta (82)",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [5200, 8.34],
              puntos: [[3200, 5.9], [3698, 6.51], [4502, 7.49], [5200, 8.34]],
            },
            {
              nombre: "Demanda",
              color: "tinta2",
              grosor: 2,
              etiquetaEn: [3300, 8.6],
              puntos: [[3200, 9], [3698, 6.51], [4000, 5]],
            },
            {
              nombre: "Demanda mayor",
              color: "alerta",
              grosor: 2,
              etiquetaEn: [4250, 8.9],
              puntos: [[4200, 9], [4502, 7.49], [5000, 5]],
            },
            {
              nombre: "Oferta a largo plazo",
              color: "tinta",
              trazo: "discontinuo",
              grosor: 1.6,
              etiquetaEn: [5200, 6.47],
              puntos: [[3200, 6.47], [5200, 6.47]],
            },
          ],
          puntos: [
            { x: 3698, y: 6.51, etiqueta: "2", guias: false },
            { x: 4502, y: 7.49, etiqueta: "3  el pico", guias: false },
            { x: 4704, y: 6.48, etiqueta: "4", guias: false },
          ],
          nota: "El recorrido **2 → 3 → 4** es la historia entera. Con 82 empresas el mercado está casi en equilibrio de largo plazo, sobre la línea discontinua del coste medio mínimo. Cuando la demanda se desplaza y **el número de empresas todavía no ha podido cambiar**, el precio se dispara por la oferta rígida de corto plazo hasta 7,49, y el beneficio por empresa se multiplica por treinta. Después entran veintitrés empresas nuevas, la oferta se aplana y el precio vuelve a **6,48, prácticamente el mismo de partida**. Obsérvese lo que dice la línea discontinua: a largo plazo, con costes constantes y entrada libre, **el precio no depende de la demanda**; la demanda solo decide cuántas empresas hay. Y obsérvese lo que un observador vería en el punto 3: márgenes enormes que parecen poder de mercado y son escasez transitoria de capacidad.",
        },
        {
          tipo: "tabla",
          cabecera: ["Fase", "Empresas", "Precio", "Cantidad total", "Por empresa", "Beneficio unitario"],
          filas: [
            ["1. Punto de partida (corto plazo)", "80", "6,60", "3.680", "46,0", "5,8"],
            ["2. Después de la entrada (largo plazo)", "82", "6,51", "3.698", "45,1", "1,7"],
            ["3. Sube la demanda (corto plazo)", "82", "7,49", "4.502", "54,9", "50,7"],
            { celdas: ["4. Después de la entrada (largo plazo)", "105", "6,48", "4.704", "44,8", "0,4"], clase: "total" },
          ],
          nota: "Compárense las fases **2 y 4**: la cantidad intercambiada ha crecido un 27 % y el precio ha vuelto prácticamente al mismo sitio, 6,51 frente a 6,48. Lo que ha cambiado es el **número de empresas**, de 82 a 105. Ese es el sentido exacto de que la oferta de largo plazo sea horizontal en una industria de costes constantes: **la demanda determina el tamaño del sector, no su precio**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Los beneficios no son exactamente cero, y la razón es interesante.** El número de empresas es un entero. Con 82 empresas queda un beneficio de 1,7 por empresa, pero si entrara la número 83 el precio caería a 6,47 y **todas pasarían a perder**. La entrada se detiene ahí. El beneficio económico nulo del modelo es por tanto un límite al que la entrada libre aproxima, no una igualdad que se cumpla al céntimo; en sectores donde la escala mínima eficiente es grande respecto al mercado, ese margen residual puede ser considerable.",
            "**Y conviene fijarse en la fase 3**, la más instructiva. Al subir la demanda con el número de empresas todavía fijo, el precio salta a 7,49 y el beneficio por empresa se multiplica por treinta, de 1,7 a 50,7. Un observador que mirase el sector en ese momento concluiría que hay poder de mercado y beneficios abusivos. No los hay: es **la retribución transitoria de la escasez de capacidad**, y es exactamente la señal que provoca la entrada que la elimina. Confundir esa renta transitoria con un beneficio de monopolio es uno de los errores de diagnóstico más frecuentes en el análisis sectorial.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el mercado mayorista de electricidad",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Pocos mercados reales se parecen tanto al modelo de esta ficha como el mercado mayorista eléctrico, y ninguno genera tanto malentendido público. Merece la pena recorrerlo con las herramientas que acabamos de montar.",
            "**El producto es genuinamente homogéneo.** Un megavatio-hora es indistinguible de otro, no admite marca ni diferenciación, y el comprador es indiferente a quién lo generó. Ese supuesto, que en casi cualquier otro sector es una idealización, aquí se cumple casi literalmente.",
            "**La casación es marginalista por diseño.** Las ofertas de venta se ordenan de menor a mayor precio y se van aceptando hasta cubrir la demanda prevista; **la última oferta aceptada fija el precio que cobran todas**. Como a cada tecnología le conviene ofertar en torno a su coste variable —por debajo perdería dinero produciendo, por encima se arriesga a no ser despachada—, el resultado es que el precio tiende a igualar el **coste marginal de la última tecnología necesaria**. Es la condición P = CMg de esta ficha, implementada como regla de subasta.",
            "**De ahí nacen las rentas infra-marginales**, y aquí está el nudo del debate. Una tecnología con coste variable muy bajo cobra el mismo precio que la marginal, y la diferencia es grande. Suele describirse como beneficio caído del cielo, pero el análisis de la ficha obliga a matizar: ese diferencial **retribuye unos costes fijos de inversión enormes** que no aparecen en el coste variable. La pregunta económicamente pertinente no es si el precio supera el coste variable —debe superarlo, o no se recuperaría ninguna inversión—, sino si el ingreso a lo largo de la vida del activo supera el **coste medio total**, que es la condición de largo plazo de esta ficha. Y esa es una pregunta empírica que se responde tecnología por tecnología, no una que se conteste mirando el precio de un día.",
            "**Dónde el modelo deja de servir.** La entrada libre existe, pero tarda años y llega a saltos grandes: una central no se construye en cantidades infinitesimales, así que el ajuste al equilibrio de largo plazo es lento y oscilante en lugar de suave. La demanda es muy poco elástica a corto plazo, lo que amplifica cualquier estrechez de capacidad hasta convertirla en un salto de precio como el de la fase 3 del ejemplo. Y el almacenamiento es limitado, de modo que cada hora es en la práctica un mercado distinto que no puede arbitrarse con el siguiente.",
            "**La lección que traslada a cualquier otro sector** es la de la fase 3, y es general: un margen alto observado en un momento dado admite dos lecturas incompatibles —poder de mercado o escasez transitoria de capacidad—, y **distinguirlas exige mirar si la entrada es libre y cuánto tarda**, no mirar el margen. Es la pregunta que abre la ficha 2.07 sobre el monopolio y la 9.02 sobre estructura competitiva.",
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
            { t: "Creer que la competencia perfecta exige empresas pequeñas", d: "Lo que exige es que la demanda residual de cada empresa sea horizontal y que la entrada sea libre. Un mercado con pocas empresas grandes pero entrada realmente libre puede comportarse de forma más competitiva que uno atomizado con barreras de entrada. El tamaño es un indicio, no la condición." },
            { t: "Tomar P = CMg como un supuesto del modelo", d: "Es una conclusión. Se deduce de que la empresa maximiza beneficio y de que su ingreso marginal es el precio, lo cual a su vez se deduce de la demanda horizontal. En monopolio el ingreso marginal está por debajo del precio y la igualdad desaparece." },
            { t: "Usar toda la curva de coste marginal como curva de oferta", d: "Solo es oferta el tramo creciente que está por encima del mínimo del coste variable medio. Por debajo de ese precio la cantidad ofrecida es cero, no la que iguala el coste marginal. La curva de oferta tiene un salto, no es continua." },
            { t: "Sumar las curvas de oferta verticalmente", d: "Se suman las cantidades a cada precio, es decir horizontalmente. La suma vertical corresponde a la demanda agregada de un bien público, que es un problema distinto de la ficha 2.10." },
            { t: "Confundir beneficio económico nulo con no ganar dinero", d: "Significa que se obtiene exactamente la retribución normal del capital, porque su coste de oportunidad ya está dentro de la función de costes. Es el equivalente microeconómico de ROIC igual a WACC de la ficha 7.05. Una empresa con beneficio económico nulo es perfectamente viable." },
            { t: "Creer que un aumento permanente de demanda sube el precio de forma permanente", d: "En una industria de costes constantes no: sube el precio a corto plazo, la entrada lo devuelve al mínimo del coste medio y lo que queda alterado es el número de empresas. Solo si la expansión encarece algún factor específico —industria de costes crecientes— queda un precio de largo plazo más alto." },
            { t: "Interpretar un margen alto como prueba de poder de mercado", d: "Puede serlo, o puede ser la renta transitoria de la escasez de capacidad, que es la señal que provoca la entrada. La fase 3 del ejemplo numérico muestra beneficios treinta veces mayores en un mercado perfectamente competitivo. Lo que distingue ambos casos es si la entrada es libre y cuánto tarda." },
            { t: "Pensar que la empresa fija el precio que cubre sus costes", d: "En este modelo la empresa no fija ningún precio: lo toma del mercado y solo decide cantidad. Que sus costes se cubran o no es el resultado, y es precisamente ese resultado el que dispara la entrada o la salida." },
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
            "El equilibrio competitivo de esta ficha deja huellas concretas en las cuentas nacionales, y también un desmentido empírico que conviene conocer.",
          ],
          lista: [
            "El **excedente bruto de explotación** (B.2g) del SEC 2010 **no es el beneficio económico** de esta ficha. Incluye el consumo de capital fijo y la retribución normal del capital, de modo que una economía entera de empresas con beneficio económico nulo tendría un excedente de explotación agregado perfectamente positivo y elevado. Confundir ambos conceptos lleva a leer mal cualquier estadística de márgenes.",
            "La producción se valora a **precios básicos**, es decir, sin los impuestos sobre los productos y con las subvenciones incluidas. La diferencia con los precios de adquisición que paga el comprador son los impuestos netos y los **márgenes de comercio y transporte**, que en contabilidad nacional se tratan como producción de la rama distribuidora, no como sobreprecio del fabricante.",
            "La **dispersión persistente de rentabilidad entre empresas de un mismo sector** es uno de los hechos mejor documentados por la estadística estructural —la Central de Balances del Banco de España y la estadística estructural de empresas del INE lo muestran año tras año—. En competencia perfecta con producto homogéneo y entrada libre, esa dispersión debería desvanecerse. Que no lo haga es la evidencia más clara de que el modelo es un **banco de pruebas y no una descripción**.",
            "El **deflactor implícito** de cada rama recoge la evolución de sus precios, y su comparación con la del coste laboral unitario de la ficha 10.09 es la forma habitual de aproximar por dónde se está repartiendo el excedente entre trabajo y capital.",
            "La composición sectorial que resulta de todo esto es el objeto de la ficha 10.01: **cuántas empresas caben en cada rama y de qué tamaño** es, en el modelo, la variable de ajuste de largo plazo que hemos calculado en el ejemplo.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: si se lee el excedente de explotación como si fuera beneficio extraordinario, cualquier economía desarrollada parece un conjunto de monopolios. No es que el dato esté mal, es que mide otra cosa.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el ingreso marginal de la empresa competitiva es igual al precio?", a: "Porque la demanda que afronta es horizontal: puede vender cualquier cantidad al precio de mercado sin moverlo. El ingreso total es P·q con P constante, y su derivada respecto de q es P. En monopolio, vender más exige bajar el precio de todas las unidades y por eso el ingreso marginal cae por debajo del precio." },
            { q: "Con $\\mathrm{CT}(q) = 100 + 2q + 0{,}05q^2$, ¿cuál es el precio de equilibrio a largo plazo y cuánto produce cada empresa?", a: "El precio es el mínimo del coste medio, 6,47, y cada empresa produce 44,72, que es donde el coste marginal y el medio se cortan. La demanda no interviene en estos dos números: solo determina cuántas empresas caben." },
            { q: "La demanda de un sector competitivo aumenta de forma permanente. ¿Qué pasa con el precio a largo plazo?", a: "Si es una industria de costes constantes, vuelve exactamente al mínimo del coste medio. La subida inicial es transitoria y la entrada de nuevas empresas la deshace. Lo que queda modificado de forma permanente es el número de empresas del sector." },
            { q: "Una empresa del sector gana un 40 % sobre ventas. ¿Es señal de poder de mercado?", a: "No basta con el margen para saberlo. Puede ser la renta transitoria de una escasez de capacidad, que en el modelo competitivo aparece siempre que la demanda se mueve antes que la entrada. Lo que distingue ambos casos es si la entrada es libre y cuánto tarda en materializarse." },
            { q: "¿Por qué la dispersión de rentabilidad entre empresas del mismo sector contradice el modelo?", a: "Porque con producto homogéneo, información completa y entrada libre todas las empresas deberían converger a la misma tecnología eficiente y al mismo beneficio económico nulo. La dispersión persistente que muestran la Central de Balances y la estadística estructural indica heterogeneidad real de productividad y barreras a la imitación, que son justamente lo que el modelo supone ausente." },
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
              q: "¿Qué exige realmente la competencia perfecta?",
              opciones: [
                "Que las empresas sean pequeñas y numerosas",
                "Que la demanda residual de cada empresa sea horizontal y que la entrada sea libre",
                "Que ninguna empresa supere el 10 % de cuota de mercado",
                "Que el producto sea homogéneo y el precio esté regulado",
              ],
              correcta: 1,
              porque: [
                "El tamaño es un síntoma habitual, no el requisito. Un mercado con pocas empresas grandes pero entrada realmente libre puede comportarse de forma competitiva.",
                "De la demanda horizontal se sigue que el ingreso marginal es el precio, y de la entrada libre que el beneficio económico tiende a cero. Todo el modelo descansa en esas dos cosas.",
                "Cualquier umbral concreto es arbitrario. La concentración informa, pero no es lo que define el comportamiento competitivo.",
                "La homogeneidad ayuda a que la demanda sea horizontal, pero la regulación del precio es justo lo contrario de competencia: aquí el precio sale del mercado.",
              ],
            },
            {
              q: "¿Qué parte de la curva de coste marginal es la curva de oferta de la empresa?",
              opciones: [
                "Toda ella",
                "Solo el tramo creciente por encima del mínimo del coste variable medio",
                "Solo el tramo por encima del mínimo del coste medio total",
                "El tramo decreciente, donde aún hay economías de escala",
              ],
              correcta: 1,
              porque: [
                "Por debajo del mínimo del coste variable medio la cantidad ofrecida es cero, no la que iguala precio y coste marginal: producir empeoraría la pérdida.",
                "El tramo decreciente no puede ser óptimo, y por debajo del CVMe conviene parar. Lo que queda es exactamente la curva de oferta a corto plazo.",
                "Ese es el criterio de permanencia a largo plazo. A corto, con los costes fijos ya comprometidos, el umbral es más bajo.",
                "En el tramo decreciente del coste marginal la condición de segundo orden falla: ahí producir más siempre mejora.",
              ],
            },
            {
              q: "Sube permanentemente la demanda en una industria de costes constantes. ¿Qué queda alterado a largo plazo?",
              opciones: [
                "El precio, que se instala en un nivel superior",
                "El número de empresas: el precio vuelve al mínimo del coste medio",
                "El tamaño de cada empresa, que produce más",
                "Nada: la industria vuelve exactamente a la situación anterior",
              ],
              correcta: 1,
              porque: [
                "El precio sube a corto plazo y aparecen beneficios, pero eso atrae entrada y la entrada devuelve el precio a su nivel. Solo permanecería con costes crecientes.",
                "Cada empresa vuelve a producir en el mínimo de su coste medio, que es el mismo de antes. Lo único que ha cambiado es cuántas empresas hay.",
                "El tamaño óptimo lo fija la forma de la curva de costes, que no ha cambiado. La empresa vuelve a $q^*$.",
                "Sí cambia algo: la cantidad total intercambiada es mayor, repartida entre más empresas del mismo tamaño.",
              ],
            },
            {
              q: "Una empresa presenta un margen sobre costes muy alto. ¿Prueba eso poder de mercado?",
              opciones: [
                "Sí: en competencia el margen tiende a cero",
                "No necesariamente: puede ser la renta transitoria de una escasez de capacidad, que es justo la señal que atrae la entrada",
                "Sí, si se mantiene más de un ejercicio",
                "No, porque el margen contable nunca refleja el poder de mercado",
              ],
              correcta: 1,
              porque: [
                "El margen tiende a cero en el equilibrio de largo plazo, no en cada momento. El camino hasta ahí pasa precisamente por márgenes altos.",
                "Un beneficio extraordinario es el mecanismo del modelo, no su anomalía: sin él nadie entraría y la oferta no se ajustaría. Lo que delata poder de mercado es que persista pese a haber entrada posible.",
                "La duración es un indicio útil, pero un ejercicio no basta y el criterio real es si la entrada está impedida por algo.",
                "El margen sí informa —el índice de Lerner se construye con él— pero requiere interpretarlo junto a las condiciones de entrada.",
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
            { ref: "Varian, Microeconomía intermedia", nota: "los capítulos de oferta de la empresa y equilibrio de la industria, con la construcción de la oferta de largo plazo paso a paso." },
            { ref: "Nicholson y Snyder, Teoría microeconómica", nota: "el tratamiento formal del equilibrio competitivo y la distinción entre industrias de costes constantes y crecientes." },
            { ref: "Tirole, La teoría de la organización industrial", nota: "por qué el modelo competitivo es el punto de partida y qué hay que quitarle para llegar a los casos realistas de las fichas 2.07 y 2.08." },
            { ref: "OMIE y CNMC, informes del mercado mayorista de electricidad", nota: "la mecánica real de la casación marginalista y los datos para juzgar el caso práctico con cifras en vez de con intuiciones." },
          ],
        },
      ],
    },
  ],
};
