/* Ficha 6.04 — Punto muerto y apalancamiento operativo. */

export default {
  codigo: "6.04",
  titulo: "Punto muerto y apalancamiento operativo",
  nivel: 2,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "3 h",
  nucleo:
    "Cuanto mayor es el peso de los costes fijos, más ventas hacen falta para empezar a ganar dinero y más amplifica el beneficio cualquier variación de esas ventas. Riesgo y potencial son la misma propiedad de la estructura de costes vista en dos direcciones.",
  requiere: "6.01 Coste completo y variable",
  abre: "7.06 Estructura de capital · 9.04 Estrategias competitivas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **punto muerto** o umbral de rentabilidad es el volumen de actividad en el que los ingresos igualan a los costes totales y el resultado de explotación es cero. Su lógica es directa: cada unidad vendida aporta un margen de contribución, y hacen falta tantas unidades como para que la suma de esos márgenes cubra los costes fijos.",
            "Lo que hace útil el concepto no es el número en sí, sino lo que revela sobre la **estructura de costes**. Dos empresas con las mismas ventas y el mismo beneficio pueden tener puntos muertos completamente distintos: una con costes mayoritariamente variables opera cerca de su umbral y su resultado se mueve poco; otra con costes mayoritariamente fijos necesita mucho volumen para llegar, pero a partir de ahí cada venta adicional cae casi entera al resultado.",
            "Esa amplificación se mide con el **grado de apalancamiento operativo**: el cociente entre la variación porcentual del resultado de explotación y la variación porcentual de las ventas. Un apalancamiento de 5 significa que una subida de ventas del 10 % produce una subida del beneficio del 50 %. Y también, inevitablemente, que una caída del 10 % lo hunde un 50 %. **No es una virtud ni un defecto: es una exposición**, y su signo depende de en qué fase del ciclo se encuentre la empresa.",
            "El apalancamiento operativo no es constante: **crece cuanto más cerca se está del punto muerto**. Una empresa que apenas cubre sus costes fijos tiene un apalancamiento enorme, porque su beneficio, muy pequeño, se multiplica o desaparece con cualquier movimiento. A medida que las ventas se alejan del umbral, el apalancamiento tiende a uno.",
            "Todo el análisis descansa en un supuesto que conviene tener presente: que los costes se dividen limpiamente en fijos y variables y que el precio no cambia con el volumen. En la realidad hay **costes semifijos** que escalan a saltos —una segunda línea de producción, un turno adicional—, y vender más suele exigir bajar precios. El punto muerto es una herramienta de rango corto, válida en el entorno de la actividad actual, no una función que pueda extrapolarse al infinito.",
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
            { nom: "Punto muerto en unidades", sub: "Cuántas unidades cubren los costes fijos.", cols: ["$Q^* = \\dfrac{\\mathrm{CF}}{p - cv}$"] },
            { nom: "Punto muerto en euros", sub: "Útil cuando hay varios productos.", cols: ["V* = CF / ratio de margen de contribución"] },
            { nom: "Ratio de margen de contribución", sub: "Qué proporción de cada euro vendido queda tras el coste variable.", cols: ["$\\mathrm{rmc} = \\dfrac{p - cv}{p}$"] },
            { nom: "Margen de seguridad", sub: "Cuánto pueden caer las ventas antes de entrar en pérdidas.", cols: ["MS = (Ventas − V*) / Ventas"] },
            { nom: "Grado de apalancamiento operativo", sub: "Dos expresiones equivalentes.", cols: ["$\\mathrm{GAO} = \\dfrac{\\mathrm{MC}}{\\mathrm{BAII}} = \\dfrac{\\%\\,\\Delta\\mathrm{BAII}}{\\%\\,\\Delta\\text{Ventas}}$"] },
            { nom: "Volumen para un beneficio objetivo", sub: "El punto muerto es el caso particular con B = 0.", cols: ["$Q = \\dfrac{\\mathrm{CF} + B_{\\text{objetivo}}}{p - cv}$"] },
          ],
          nota: "La relación **GAO = MC / BAII** es la más práctica: se calcula directamente de la cuenta de resultados por márgenes, sin necesidad de simular variaciones.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la fábrica de la ficha 6.01: precio 25 €, coste variable unitario 12 €, costes fijos totales 85.000 € (60.000 de producción y 25.000 de estructura). Ventas actuales: 8.000 unidades.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Resultado"],
          filas: [
            ["Margen de contribución unitario", "25 − 12", "13 €"],
            ["Ratio de margen de contribución", "13 / 25", "52 %"],
            ["Punto muerto en unidades", "85.000 / 13", "6.539 unidades"],
            ["Punto muerto en euros", "85.000 / 0,52", "163.462 €"],
            ["Margen de seguridad", "(200.000 − 163.462) / 200.000", "18,3 %"],
            ["Margen de contribución total", "8.000 × 13", "104.000 €"],
            ["Resultado de explotación", "104.000 − 85.000", "19.000 €"],
            { celdas: ["Grado de apalancamiento operativo", "104.000 / 19.000", "5,47"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "Un apalancamiento de 5,47 predice que un aumento de ventas del 10 % elevará el resultado un 54,7 %. Comprobémoslo: con 8.800 unidades el margen de contribución es de 114.400 € y el resultado, de 29.400 €. La variación es (29.400 − 19.000) / 19.000 = **54,7 %**. Exacto.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Unidades", y: "Euros" },
          dominio: { x: [0, 10000], y: [0, 260000] },
          marcasX: [0, 2000, 4000, 6000, 8000, 10000],
          marcasY: [0, 85000, 163462, 250000],
          areas: [
            { puntos: [[6538, 163450], [10000, 250000], [10000, 205000]], color: "acento" },
            { puntos: [[0, 85000], [6538, 163450], [0, 0]], color: "alerta" },
          ],
          series: [
            {
              nombre: "Ingresos",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [10000, 250000],
              puntos: [[0, 0], [10000, 250000]],
            },
            {
              nombre: "Costes totales",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [10000, 228000],
              puntos: [[0, 85000], [10000, 205000]],
            },
            {
              nombre: "Costes fijos",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 1.6,
              etiquetaEn: [10000, 85000],
              puntos: [[0, 85000], [10000, 85000]],
            },
          ],
          puntos: [
            { x: 6538, y: 163450, etiqueta: "punto muerto", guias: true },
            { x: 8000, y: 200000, etiqueta: "ventas actuales", guias: false },
          ],
          nota: "El **ángulo** que forman las dos rectas es el margen de contribución de 13 € por unidad, y lo que hace peligrosa a esta empresa es que sea un ángulo **estrecho respecto a la altura del arranque**: los 85.000 € de costes fijos obligan a vender 6.539 unidades solo para llegar al cruce. Entre el punto muerto y las ventas actuales media apenas un **18,3 %**, y ese es el margen de seguridad. La razón del apalancamiento de 5,47 se ve directamente: como los costes apenas responden al volumen, **casi todo lo que se mueve en la recta de ingresos cae íntegro al resultado**, en los dos sentidos. Desplazarse a la izquierda del cruce entra en la zona naranja tan deprisa como se sale hacia la verde.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Unidades", "Resultado", "Variación"],
          filas: [
            ["Caída del 20 %", "6.400", "−1.800 €", "−109 %"],
            ["Caída del 10 %", "7.200", "8.600 €", "−54,7 %"],
            ["Situación actual", "8.000", "19.000 €", "—"],
            ["Subida del 10 %", "8.800", "29.400 €", "+54,7 %"],
            ["Subida del 20 %", "9.600", "39.800 €", "+109 %"],
          ],
          nota: "Con un margen de seguridad del 18,3 %, una caída de ventas del 20 % basta para entrar en pérdidas. La simetría del apalancamiento es completa: multiplica igual hacia arriba que hacia abajo.",
        },
      ],
    },
    {
      titulo: "Caso práctico: dos empresas con el mismo beneficio",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos empresas facturan 200.000 € y ganan 19.000 € de resultado de explotación. La primera es la fábrica del ejemplo: costes fijos de 85.000 € y margen de contribución del 52 %. La segunda subcontrata casi toda su producción: costes fijos de 20.000 € y margen de contribución del 19,5 %, es decir 39.000 € de margen sobre las mismas ventas.",
            "Sus cuentas de resultados terminan igual y sus riesgos son opuestos. El punto muerto de la segunda está en 102.564 € —un margen de seguridad del 49 %— y su apalancamiento operativo es de 39.000 / 19.000 = **2,05**, frente al 5,47 de la primera.",
            "En una recesión que recorte las ventas un 25 %, la primera pierde 7.000 € y la segunda gana 9.250 €. En una expansión que las aumente un 25 %, la primera gana 45.000 € y la segunda 28.750 €. **La estructura de costes es una apuesta implícita sobre la estabilidad de la demanda**, y se toma años antes de que el ciclo revele si fue acertada.",
            "Esto explica patrones sectoriales que de otro modo parecen arbitrarios: las aerolíneas, los hoteles, las acereras y las empresas de software tienen apalancamientos operativos muy altos y resultados violentamente cíclicos; las consultoras, las distribuidoras y las empresas que subcontratan producción los tienen bajos y resultados planos. Y explica también por qué la decisión de fabricar o comprar no es solo una cuestión de coste unitario: es una decisión sobre cuánto riesgo cíclico se quiere asumir.",
            "**Conexión con el bloque 7:** el apalancamiento financiero de 7.06 hace exactamente lo mismo con los intereses de la deuda. Una empresa con apalancamiento operativo alto **y** financiero alto multiplica dos veces la misma variación de ventas, y ahí es donde se concentran las quiebras de las recesiones.",
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
            { t: "Calcular el punto muerto con el margen bruto", d: "Hay que usar el margen de **contribución**, que descuenta solo costes variables. El margen bruto incluye costes fijos de producción imputados a las unidades vendidas, con lo que la fórmula descuenta dos veces parte de los fijos y da un punto muerto artificialmente bajo." },
            { t: "Tratar el apalancamiento operativo como una constante de la empresa", d: "Depende del nivel de actividad y crece al acercarse al punto muerto. Un GAO calculado en un año de ventas altas no sirve para predecir el comportamiento en un año malo: precisamente cuando las ventas caen, el apalancamiento aumenta." },
            { t: "Extrapolar el modelo fuera del rango relevante", d: "Los costes fijos lo son dentro de un intervalo de capacidad. Duplicar las ventas suele exigir una segunda línea, otro turno o más nave, y entonces los «fijos» dan un salto. El punto muerto es válido en el entorno de la actividad actual." },
            { t: "Suponer precio constante al aumentar el volumen", d: "Vender un 30 % más casi siempre exige descuentos, entrar en canales menos rentables o clientes peores. Si el precio cae, el margen de contribución unitario cae con él y el modelo lineal sobreestima el beneficio adicional." },
            { t: "Aplicar el punto muerto unitario en empresas multiproducto", d: "Con varios productos de márgenes distintos, el punto muerto en unidades no tiene sentido: depende de la mezcla. Hay que trabajar en euros con el ratio de margen de contribución medio ponderado, y recalcularlo si la mezcla cambia." },
            { t: "Interpretar un apalancamiento alto como signo de calidad", d: "Un GAO elevado no indica una empresa mejor ni peor: indica exposición al ciclo. En expansión parece brillante y en recesión parece pésima siendo la misma empresa con la misma estructura." },
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
            "El apalancamiento operativo tiene una manifestación agregada que se observa con claridad en las cuentas nacionales.",
          ],
          lista: [
            "La **remuneración de asalariados (D.1)** se comporta a corto plazo como un coste mayoritariamente fijo: el empleo y los salarios se ajustan con retardo y con fricciones respecto de la actividad.",
            "El **excedente bruto de explotación (B.2)** es el saldo residual, y por tanto absorbe la mayor parte del ajuste cíclico. Su volatilidad es sistemáticamente superior a la del valor añadido bruto.",
            "De ahí una regularidad empírica bien documentada: la **participación de las rentas del trabajo en el VAB es contracíclica**. Sube en las recesiones, no porque los salarios crezcan, sino porque el excedente cae más deprisa que el valor añadido.",
            "En economías con mayor rigidez del empleo el efecto es más pronunciado; donde el ajuste se hace vía cantidades y con rapidez, el excedente queda más protegido y la participación salarial se mueve menos.",
          ],
          cierre:
            "Es literalmente el mismo mecanismo de la fórmula GAO = MC / BAII, con la remuneración de asalariados en el papel de los costes fijos y el excedente en el del beneficio. Ver la analogía ayuda a leer la descomposición del VAB por rentas como algo más que una identidad contable.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Precio 40 €, coste variable 25 €, costes fijos 120.000 €. ¿Punto muerto?", a: "8.000 unidades. El margen de contribución unitario es de 15 € y 120.000 / 15 = 8.000. En euros: 320.000 €, o bien 120.000 / 0,375." },
            { q: "El margen de contribución total es 90.000 € y el resultado de explotación 15.000 €. ¿Cuánto sube el beneficio si las ventas crecen un 8 %?", a: "Un 48 %. El GAO es 90.000 / 15.000 = 6, y 6 × 8 % = 48 %. El beneficio pasaría de 15.000 € a 22.200 €." },
            { q: "¿Qué le ocurre al apalancamiento operativo cuando las ventas se acercan al punto muerto?", a: "Aumenta, y tiende a infinito justo en el umbral, porque el denominador —el resultado— tiende a cero. Es la razón de que las empresas en dificultades presenten oscilaciones de beneficio desproporcionadas." },
            { q: "Una empresa decide subcontratar su producción. ¿Qué le pasa a su punto muerto y a su riesgo?", a: "Ambos bajan: convierte costes fijos en variables, reduce el margen de contribución unitario pero también los costes fijos que hay que cubrir. Gana estabilidad frente al ciclo y renuncia a parte del beneficio en las fases buenas." },
            { q: "¿Por qué la participación salarial en el VAB sube en las recesiones?", a: "Porque la remuneración de asalariados se ajusta con retardo y actúa como coste cuasi fijo, mientras que el excedente de explotación es el residuo que absorbe la caída. Es apalancamiento operativo a escala agregada." },
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
              q: "¿Con qué margen se calcula el punto muerto?",
              opciones: [
                "Con el margen bruto, que es el que figura en la cuenta de resultados",
                "Con el margen de contribución, que descuenta solo los costes variables",
                "Con el margen neto, ya descontados todos los gastos",
                "Con cualquiera de los tres, según la información disponible",
              ],
              correcta: 1,
              porque: [
                "El margen bruto ya lleva incorporados costes fijos de producción imputados a las unidades vendidas, así que los descontaría dos veces.",
                "El punto muerto pregunta cuántas unidades hacen falta para cubrir los fijos, y para eso el numerador tiene que estar limpio de fijos.",
                "El margen neto descuenta todo, incluidos los fijos que precisamente se quieren cubrir: el cálculo no tendría sentido.",
                "No son intercambiables: solo uno separa correctamente lo que varía de lo que no.",
              ],
            },
            {
              q: "El grado de apalancamiento operativo de una empresa se calculó en un año de ventas altas. ¿Sirve para predecir el comportamiento en un año flojo?",
              opciones: [
                "Sí: el GAO es una característica estructural de la empresa",
                "No: depende del nivel de actividad y crece al acercarse al punto muerto",
                "Sí, corrigiéndolo por la inflación del período",
                "No, salvo que la estructura de costes fijos no haya cambiado",
              ],
              correcta: 1,
              porque: [
                "La estructura de costes sí es estructural; el GAO no, porque es un cociente que depende de dónde estén las ventas respecto del punto muerto.",
                "Cerca del punto muerto el beneficio es pequeño y cualquier variación de ventas lo mueve en porcentajes enormes: el mismo negocio tiene un GAO distinto cada año.",
                "La inflación no interviene en el cálculo. Lo que varía es el volumen respecto del umbral de rentabilidad.",
                "Aunque los costes fijos sean idénticos, el GAO cambia solo con el nivel de ventas. Esa es justamente la trampa.",
              ],
            },
            {
              q: "Una empresa multiproducto quiere su punto muerto. ¿Cómo debe calcularlo?",
              opciones: [
                "En unidades, sumando las de todos los productos",
                "En euros de venta, con el ratio de margen de contribución medio ponderado por la mezcla",
                "Producto a producto, repartiendo los fijos por partes iguales",
                "En unidades del producto más vendido, tomándolo como referencia",
              ],
              correcta: 1,
              porque: [
                "Una unidad de un producto y una de otro no cubren lo mismo: sumarlas es sumar magnitudes distintas.",
                "Y con una advertencia incorporada: el resultado vale para esa mezcla. Si cambia el peso de cada producto, cambia el punto muerto sin que se haya movido ningún coste.",
                "El reparto por partes iguales es arbitrario y hace depender el punto muerto de cuántos productos haya en el catálogo.",
                "Tomar un producto como referencia supone implícitamente que la mezcla no varía, y además ignora los márgenes del resto.",
              ],
            },
            {
              q: "Un apalancamiento operativo alto, ¿qué indica sobre la empresa?",
              opciones: [
                "Que está bien gestionada: aprovecha mejor cada euro de venta adicional",
                "Que está expuesta al ciclo: amplifica tanto las subidas como las caídas de ventas",
                "Que tiene poca deuda, ya que el apalancamiento operativo y el financiero son excluyentes",
                "Que su punto muerto es bajo",
              ],
              correcta: 1,
              porque: [
                "En expansión parece brillante, sí. Pero es la misma empresa que en recesión parecerá pésima: la cifra no mide calidad de gestión.",
                "Es una medida de sensibilidad, no de mérito. La lectura correcta es «cuánto se mueve mi beneficio si las ventas se mueven un 1 %».",
                "Son cosas distintas y acumulables: el operativo viene de los costes fijos y el financiero de los intereses. Una empresa puede tener los dos altos.",
                "Al contrario: un GAO alto viene de un peso elevado de costes fijos, que empuja el punto muerto hacia arriba, no hacia abajo.",
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
            { ref: "Horngren, Contabilidad de costos", nota: "el capítulo de análisis coste-volumen-beneficio, con el tratamiento multiproducto y los supuestos del modelo." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "la conexión entre apalancamiento operativo y financiero, y su efecto conjunto sobre el riesgo del accionista." },
            { ref: "Faus, Finanzas operativas", nota: "enfoque práctico sobre estructura de costes y su relación con las necesidades de financiación." },
          ],
        },
      ],
    },
  ],
};
