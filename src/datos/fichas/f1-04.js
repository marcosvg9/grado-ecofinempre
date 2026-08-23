/* Ficha 1.04 — Excedente, eficiencia y analisis de bienestar. */

export default {
  codigo: "1.04",
  titulo: "Excedente, eficiencia y análisis de bienestar",
  nivel: 2,
  bloque: "Fundamentos y método económico",
  tiempo: "4 h",
  nucleo:
    "Medir la ganancia del intercambio como área permite comparar políticas alternativas. Lo que no permite es elegir entre ellas sin añadir un juicio de valor, porque un área mayor puede repartirse de infinitas maneras y la eficiencia no dice nada sobre cuál.",
  requiere: "1.02 Oferta y demanda · 1.03 Elasticidades",
  abre: "2.07 Monopolio · 2.10 Fallos de mercado · 10.05 Imposición óptima",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La curva de demanda admite una segunda lectura, más potente que la primera. Leída de izquierda a derecha dice qué cantidad se compra a cada precio; leída de arriba abajo dice **cuánto está dispuesto a pagar el comprador por cada unidad sucesiva**. Con esa lectura, la diferencia entre lo que alguien habría pagado y lo que efectivamente paga es su ganancia del intercambio, y sumada sobre todos los compradores da el **excedente del consumidor**: el área comprendida entre la curva de demanda y el precio.",
            "El lado vendedor es simétrico. La curva de oferta indica, unidad a unidad, **el precio mínimo al que alguien está dispuesto a vender**, que refleja su coste. La diferencia entre lo que cobra y ese mínimo es el **excedente del productor**, el área entre el precio y la curva de oferta. Conviene retener que ese excedente no es el beneficio contable: incluye la cobertura de los costes fijos, y por eso la ficha 2.05 insistía en que un beneficio económico nulo es compatible con un excedente del productor grande.",
            "La suma de ambos es el **excedente total**, y mide la ganancia que el intercambio genera respecto a un mundo sin él. Su propiedad clave es que **se maximiza exactamente en el equilibrio competitivo**. La razón es transparente si se piensa unidad a unidad: mientras la disposición a pagar supere al coste, producir esa unidad añade excedente; cuando el coste supera a la disposición a pagar, la resta. El equilibrio se sitúa justo donde ambas se igualan, así que se realizan **todas las transacciones que generan valor y ninguna que lo destruya**. Ese resultado, generalizado a todos los mercados a la vez, es el **primer teorema del bienestar**, y es la formulación precisa de la vieja intuición de la mano invisible.",
            "Ahora bien, hay que ser muy cuidadoso con lo que ese teorema dice y con lo que no. Dice que el equilibrio competitivo es **eficiente en el sentido de Pareto**: no existe ninguna reasignación que mejore a alguien sin empeorar a nadie. **No dice que sea justo, ni deseable, ni el mejor de los posibles.** Una asignación en la que una persona lo tiene todo y el resto nada puede ser perfectamente eficiente, porque quitarle algo la empeoraría. La eficiencia es una condición **mínima**: descarta desperdicios, no ordena resultados.",
            "Ese límite obliga a introducir un segundo criterio, porque casi ninguna política real mejora a todos. El criterio de **Kaldor-Hicks** relaja la exigencia: una medida se considera una mejora si **los ganadores podrían compensar a los perdedores y aún salir ganando**, es decir, si el excedente total aumenta. Es el criterio que subyace a todo análisis coste-beneficio y tiene una debilidad que conviene decir en voz alta: **la compensación solo tiene que ser posible, no efectiva**. Cuando no se realiza —y no suele realizarse—, hay perdedores reales de una medida declarada eficiente, y ese hueco entre lo posible y lo hecho explica buena parte de la distancia entre el análisis económico y la política.",
            "Con esas cautelas, el instrumental es extraordinariamente útil, porque convierte discusiones vagas en magnitudes comparables. Permite descomponer el efecto de cualquier intervención en tres partes que **no deben confundirse jamás**: cuánto se **transfiere** de unos a otros, cuánto **recauda** el Estado, y cuánto **se pierde sin que lo gane nadie**. Solo la tercera es un argumento de eficiencia. Las dos primeras son argumentos distributivos, perfectamente legítimos, pero que exigen un criterio adicional sobre quién importa cuánto. Distinguir esas tres cajas es, probablemente, la destreza más transferible de todo el bloque.",
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
            { nom: "Excedente del consumidor", sub: "Lo que habría pagado menos lo que paga.", cols: ["EC = ∫ (P_demanda − P*) dQ"] },
            { nom: "Excedente del productor", sub: "Lo que cobra menos lo mínimo que aceptaría.", cols: ["EP = ∫ (P* − P_oferta) dQ"] },
            { nom: "Con curvas lineales", sub: "Basta el área de un triángulo.", cols: ["EC = ½ · (P_máx − P*) · Q*"] },
            { nom: "Excedente total", sub: "Se maximiza en el equilibrio competitivo.", cols: ["ET = EC + EP (+ recaudación)"] },
            { nom: "Eficiencia de Pareto", sub: "Criterio mínimo: no descarta ninguna desigualdad.", cols: ["No cabe mejorar a nadie sin empeorar a otro"] },
            { nom: "Criterio de Kaldor-Hicks", sub: "La compensación ha de ser posible, no efectiva.", cols: ["ΔET > 0 ⟹ mejora potencial"] },
            { nom: "Primer teorema del bienestar", sub: "Exige competencia, información y ausencia de externalidades.", cols: ["Equilibrio competitivo ⟹ óptimo de Pareto"] },
            { nom: "Segundo teorema del bienestar", sub: "Separa eficiencia de distribución: la base de la política redistributiva.", cols: ["Redistribuir dotaciones + mercado ⟹ cualquier óptimo"] },
            { nom: "Pérdida irrecuperable", sub: "El único componente que es argumento de eficiencia.", cols: ["PIM = ET_competitivo − ET_con la medida"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: las tres cajas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Mismo mercado de las dos fichas anteriores: **Q_d = 100 − 2P** y **Q_s = −20 + 3P**, con equilibrio en P = 24 y Q = 52. La demanda corta el eje de precios en 50 —nadie pagaría más— y la oferta en 6,67, que es el coste de la primera unidad.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 100], y: [0, 55] },
          marcasX: [0, 20, 52, 80],
          marcasY: [0, 10, 24, 40, 50],
          areas: [
            { puntos: [[0, 50], [52, 24], [0, 24]], color: "n3", etiqueta: "Consumidor 676" },
            { puntos: [[0, 24], [52, 24], [0, 6.7]], color: "acento", etiqueta: "Productor 451" },
          ],
          series: [
            { nombre: "Demanda", color: "tinta", puntos: [[0, 50], [100, 0]] },
            { nombre: "Oferta", color: "acento", puntos: [[0, 6.7], [100, 40]] },
          ],
          puntos: [{ x: 52, y: 24, etiqueta: "Equilibrio" }],
          nota: "Los dos triángulos son la ganancia del intercambio. El superior mide **676** y corresponde a compradores que habrían pagado hasta 50 y solo pagan 24; el inferior mide **451** y corresponde a vendedores que habrían aceptado desde 6,67 y cobran 24. Su suma, **1.127**, es el mayor valor alcanzable en este mercado: cualquier cantidad distinta de 52 lo reduce.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Comparemos ahora tres situaciones**: el mercado libre, el impuesto de 5 por unidad de la ficha anterior y un tope de precios de 20. En los tres casos descomponemos el resultado en las tres cajas que conviene no mezclar.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Mercado libre", "Impuesto de 5", "Tope de 20"],
          filas: [
            ["Cantidad intercambiada", "52", "46", "40"],
            ["Excedente del consumidor", "676,0", "529,0", "800,0"],
            ["Excedente del productor", "450,7", "352,7", "266,7"],
            ["Recaudación del Estado", "0", "230,0", "0"],
            ["Excedente total", "1.126,7", "1.111,7", "1.066,7"],
            { celdas: ["Pérdida de eficiencia", "0", "15,0", "60,0"], clase: "total" },
          ],
          nota: "Tres lecturas, y las tres importan. **El impuesto** cuesta 15 de eficiencia, pero mueve 230 al Estado: el excedente privado cae 245 y de esa cantidad **solo 15 desaparecen**. **El tope de precios** es más caro en eficiencia —60— pese a no recaudar nada, y sin embargo **el consumidor sale mejor parado que en cualquier otro escenario**, con 800. Ahí está el nudo de la ficha: la medida menos eficiente es la que más beneficia al grupo que pretendía proteger, y ninguna cifra decide por sí sola cuál es preferible.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El detalle que suele pasarse por alto en la tercera columna.** El cálculo del excedente del consumidor bajo el tope, 800, supone que las 40 unidades disponibles acaban en manos de **quienes más las valoran**. Ese supuesto es generoso: si el racionamiento es por cola, por sorteo o por contacto, algunas unidades irán a compradores que las valoran menos que otros excluidos, y el excedente real será **menor que 800**. Además, las colas y las esperas consumen tiempo que también tiene valor. **La cifra de 800 es por tanto un techo, no una estimación**, y la pérdida de eficiencia de 60 es un suelo. Explicitar ese supuesto es exactamente el tipo de honestidad que el análisis de bienestar exige y que su apariencia de precisión numérica tiende a ocultar.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la compensación que nunca llega",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Casi todos los manuales presentan la apertura comercial como el ejemplo canónico de política eficiente: el excedente total aumenta, luego es una mejora según Kaldor-Hicks. La afirmación es correcta y a la vez es una explicación muy incompleta de lo que ocurre, y entender por qué es una de las lecciones más útiles de este bloque.",
            "**El cálculo estándar es sólido.** Abrir un sector a la competencia exterior baja el precio interno, con lo que los consumidores ganan mucho —un área grande, repartida entre millones de personas— y los productores nacionales pierden —un área menor, concentrada en pocas empresas y sus trabajadores—. Como la ganancia supera a la pérdida, el excedente total crece y el criterio dice que hay mejora potencial. Hasta aquí, la ficha 1.01 ya lo había anticipado con la ventaja comparativa.",
            "**Lo que el criterio esconde es la palabra «potencial».** Kaldor-Hicks exige que los ganadores **puedan** compensar a los perdedores, no que lo hagan. Y en la práctica la compensación rara vez se articula: no hay un mecanismo automático que traslade parte de la ganancia difusa del consumidor al trabajador de una comarca cuyo sector desaparece. El resultado es que **la mejora agregada convive con pérdidas concretas, localizadas y persistentes**, y quien las sufre tiene razones perfectamente válidas para oponerse a una medida que el análisis califica de eficiente.",
            "**A eso se añade una asimetría política que la economía tiende a subestimar.** Las ganancias son pequeñas por persona y muy repartidas; las pérdidas son grandes por persona y muy concentradas. Los perdedores tienen incentivo a organizarse y los ganadores no llegan a percibir su ganancia. Esa asimetría no es un fallo del análisis de bienestar, pero explica por qué las medidas eficientes encuentran tanta resistencia y por qué **el diseño de la compensación es parte de la política, no un añadido opcional**.",
            "**Y hay un supuesto técnico que conviene hacer explícito.** Sumar excedentes de personas distintas equivale a asignar a cada euro el mismo peso con independencia de quién lo reciba. Es una decisión, no un dato: implica tratar como equivalentes un euro para quien tiene mucho y un euro para quien no tiene nada. Toda la aritmética de la sección anterior descansa en ese supuesto, y ponderar de otro modo —lo que hacen las funciones de bienestar social— puede invertir la conclusión. La ficha 1.10 se ocupa precisamente de dónde acaba la técnica y empieza el juicio.",
            "**La conclusión que se traslada a cualquier otra política.** Un análisis de bienestar bien hecho no termina con el número agregado: termina diciendo **cuánto gana quién, cuánto pierde quién y cuánto se pierde sin que lo gane nadie**. Presentar solo la primera cifra es técnicamente correcto e informativamente pobre, y es la causa más frecuente de que un argumento económico impecable resulte políticamente inservible.",
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
            { t: "Confundir eficiencia con justicia", d: "Una asignación en la que uno lo tiene todo puede ser eficiente en el sentido de Pareto, porque no cabe mejorar a nadie sin empeorar a otro. La eficiencia descarta desperdicios; no ordena repartos. Todo criterio distributivo hay que añadirlo desde fuera." },
            { t: "Sumar transferencia y pérdida de eficiencia", d: "Son cosas distintas. En el ejemplo del impuesto, el excedente privado cae 245 pero solo 15 desaparecen: 230 están en la caja del Estado. Mezclarlas infla el coste de cualquier intervención y es el error de cuantificación más común." },
            { t: "Tomar el excedente del productor por beneficio contable", d: "El excedente del productor es el área entre el precio y la curva de oferta, e incluye lo que cubre los costes fijos. Una empresa con beneficio económico nulo tiene excedente del productor positivo; son magnitudes distintas y no coinciden." },
            { t: "Creer que el primer teorema del bienestar defiende cualquier mercado", d: "Exige competencia, información completa, ausencia de externalidades y bienes públicos. Cuando esos supuestos fallan —la ficha 2.10— el teorema no se aplica, y su invocación genérica es un uso indebido de un resultado muy condicionado." },
            { t: "Aplicar Kaldor-Hicks como si la compensación se produjera", d: "El criterio solo exige que sea posible. Si no se articula, hay perdedores reales de una medida declarada eficiente, y su oposición no es irracional. Confundir mejora potencial con mejora efectiva es lo que separa un buen informe de uno que nadie puede usar." },
            { t: "Olvidar el supuesto de racionamiento eficiente bajo un tope de precios", d: "El cálculo estándar supone que el bien acaba en manos de quien más lo valora. Con colas, sorteos o contactos ese supuesto falla, el excedente real es menor y la pérdida de eficiencia mayor. La cifra publicada suele ser un techo optimista." },
            { t: "Sumar excedentes sin advertir que se está ponderando", d: "Agregar euros de personas distintas equivale a darles a todos el mismo peso, lo que es un juicio de valor disfrazado de aritmética. Es un supuesto defendible y muy usado, pero debe declararse, porque ponderar de otro modo puede cambiar la conclusión." },
            { t: "Pensar que el segundo teorema resuelve el problema distributivo", d: "Dice que cualquier reparto eficiente puede alcanzarse redistribuyendo dotaciones y dejando después funcionar al mercado. Pero esa redistribución exige impuestos que distorsionan, así que en la práctica la separación limpia entre eficiencia y distribución no está disponible." },
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
            "El excedente de esta ficha y el excedente de las cuentas nacionales comparten nombre y no son lo mismo, lo que causa una confusión sorprendentemente extendida.",
          ],
          lista: [
            "El **excedente bruto de explotación** (B.2g) del SEC 2010 es un saldo contable: valor añadido menos remuneración de asalariados menos otros impuestos netos sobre la producción. **No es el excedente del productor de esta ficha**, que es un área bajo una curva de oferta no observable. Coinciden en el nombre y en poco más.",
            "El **excedente del consumidor no aparece en ninguna cuenta**, y no puede aparecer: mide lo que la gente habría estado dispuesta a pagar, que no es una transacción. Por eso ninguna mejora de bienestar derivada de precios más bajos o productos nuevos se refleja como tal en el PIB.",
            "Ese hueco tiene una consecuencia concreta y bien conocida: **los índices de precios no capturan bien las mejoras de calidad ni la aparición de bienes nuevos**, que son precisamente ganancias de excedente del consumidor. Es uno de los sesgos que discute la ficha 1.07 y una de las críticas persistentes a la medición de la inflación.",
            "La **recaudación** sí está perfectamente registrada, en los impuestos sobre los productos (D.21) y en las cuentas de las administraciones públicas. De las tres cajas de esta ficha, es la única que las cuentas nacionales miden directamente.",
            "Y la **pérdida irrecuperable de eficiencia** es invisible por construcción, igual que en la ficha 2.07: mide transacciones que no llegaron a producirse, y las cuentas registran las que sí. Estimarla exige un modelo con elasticidades, no un dato.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: cuando alguien pide que el PIB refleje el bienestar, conviene recordar que el bienestar vive en buena parte en un área que ninguna transacción revela.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el equilibrio competitivo maximiza el excedente total?", a: "Porque se realizan todas las transacciones en las que la disposición a pagar supera al coste y ninguna en la que ocurra lo contrario. El equilibrio está justo donde ambas se igualan, así que cualquier cantidad distinta —mayor o menor— reduce el excedente." },
            { q: "Un impuesto reduce el excedente privado en 245 y recauda 230. ¿Cuánto cuesta en eficiencia?", a: "Quince. Los 230 no se pierden: cambian de manos hacia el Estado. Solo los 15 restantes corresponden a transacciones mutuamente beneficiosas que dejan de producirse, y son el único componente que constituye un argumento de eficiencia." },
            { q: "¿Puede una asignación eficiente ser profundamente desigual?", a: "Sí, y es el punto que más se malinterpreta. La eficiencia de Pareto solo exige que no quepa mejorar a nadie sin empeorar a otro, condición que cumple perfectamente una situación en la que una persona lo tiene todo. La eficiencia es un mínimo, no un criterio de justicia." },
            { q: "¿Qué le falta al criterio de Kaldor-Hicks?", a: "Que la compensación se realice. Solo exige que los ganadores puedan compensar a los perdedores, y en la práctica el mecanismo rara vez existe. Por eso una medida puede ser eficiente y dejar perdedores reales, cuya oposición no tiene nada de irracional." },
            { q: "En el ejemplo, el tope de precios es la medida menos eficiente y la que más favorece al consumidor. ¿Cómo se decide?", a: "No se decide con estas cifras. La eficiencia dice que se pierden 60 y la distribución dice que el consumidor pasa de 676 a 800. Elegir entre ambas exige un juicio sobre cuánto pesa cada grupo, que es externo al análisis. Lo que sí aporta el análisis es cuantificar exactamente el intercambio." },
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
            { ref: "Varian, Microeconomía intermedia", nota: "los capítulos de excedente del consumidor y bienestar, con el tratamiento cuidadoso de cuándo el área bajo la demanda mide realmente bienestar." },
            { ref: "Stiglitz, La economía del sector público", nota: "los dos teoremas del bienestar y sus condiciones, y la discusión sobre eficiencia frente a equidad." },
            { ref: "Okun, Igualdad y eficiencia: la gran disyuntiva", nota: "la metáfora del cubo agujereado; corto, clásico y directamente sobre el conflicto que esta ficha deja abierto." },
            { ref: "Boardman y otros, Cost-Benefit Analysis", nota: "cómo se hace en la práctica un análisis de bienestar aplicado, con las decisiones metodológicas explícitas." },
          ],
        },
      ],
    },
  ],
};
