/* Ficha 12.02 — La cuenta de producción: P.1, P.2 y el valor añadido. */

export default {
  codigo: "12.02",
  titulo: "La cuenta de producción: P.1, P.2 y el valor añadido",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "La producción tiene tres formas —de mercado, para uso propio y de no mercado— y la tercera se valora por sus costes porque no tiene precio. De esa convención se sigue que el excedente neto de una administración pública es cero por construcción, y con él su productividad medida.",
  requiere: "12.01 Unidades institucionales y sectorización · 10.07 Producción, VAB y PIB",
  abre: "12.03 La cuenta de explotación · 12.05 SIFMI y seguros · 12.08 Consumo final",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La cuenta de producción es la primera de la secuencia y la más sencilla: tiene un recurso, la **producción (P.1)**, un empleo, los **consumos intermedios (P.2)**, y un saldo, el **valor añadido bruto (B.1g)**. Lo interesante no es la mecánica sino qué se mete dentro de cada partida, porque ahí es donde el sistema toma decisiones que después arrastra hasta el final.",
            "**La producción se desglosa en tres tipos y conviene aprenderse los códigos.** La **producción de mercado (P.11)** es la que se vende a precios económicamente significativos. La **producción para uso final propio (P.12)** es lo que la unidad produce y conserva: el software que una empresa desarrolla para sí misma, la I+D que realiza un hospital público, o —el caso mayor de todos— **los servicios de alquiler que un propietario se presta a sí mismo al ocupar su vivienda**. Y la **producción de no mercado (P.13)** es la que se suministra gratis o a precios no significativos, y se subdivide en **pagos parciales (P.131)** —tasas universitarias, entradas de museo— y **el resto, entregado gratuitamente (P.132)**.",
            "**Las dos valoraciones no coinciden, y esto se equivoca constantemente.** La producción se valora a **precios básicos**, es decir, lo que efectivamente recibe el productor: excluye los impuestos sobre productos e incluye las subvenciones sobre productos. Los consumos intermedios se valoran a **precios de adquisición**, lo que efectivamente paga el comprador. Por eso el valor añadido de una rama no incluye los impuestos netos sobre productos, y por eso la ficha 10.07 tenía que sumarlos aparte para llegar del VAB al PIB a precios de mercado.",
            "**Ahora la decisión que da carácter a toda la ficha: cómo se valora lo que no tiene precio.** Un productor de no mercado no puede valorar su producción por lo que vende, porque no vende o vende por debajo del coste. El SEC resuelve por convenio: **la producción de no mercado se mide como la suma de sus costes de producción** —remuneración de asalariados, consumos intermedios, otros impuestos netos sobre la producción y **consumo de capital fijo**—. Es una convención necesaria y con una consecuencia aritmética inmediata que conviene deducir despacio, porque es la pregunta de examen clásica del bloque.",
            "**Si la producción es igual a la suma de esos costes, el excedente neto de explotación es exactamente cero.** El razonamiento cabe en dos líneas: el valor añadido es la producción menos los consumos intermedios, y de él se restan la remuneración y los impuestos netos para obtener el excedente bruto; lo que queda es, por construcción, el consumo de capital fijo. Y como el excedente **neto** es el bruto menos el consumo de capital fijo, el resultado es **cero**. No es un dato empírico sobre la eficiencia del sector público: es una identidad que el método impone.",
            "**De ahí se sigue algo que la ficha 10.07 anticipaba y que aquí queda demostrado: la productividad medida del sector público es casi constante por construcción.** Si el producto se define como el coste de los insumos, la relación entre ambos apenas puede variar. Una subida salarial en la administración eleva mecánicamente el PIB medido sin que se produzca más. Cualquier discusión sobre eficiencia del sector público que se apoye en su productividad medida está usando una cifra que no puede decir lo que se le pide, y hay que ir a indicadores de resultado —listas de espera, resultados educativos— que están fuera del sistema de cuentas.",
            "**Dos partidas más que hay que tener en el radar.** La primera son los **alquileres imputados**, que en el sector hogares generan una producción enorme sin transacción alguna: el SEC obliga a valorar el servicio que el propietario se presta a sí mismo porque, de no hacerlo, dos países idénticos con distinta tasa de propiedad tendrían PIB distintos. La segunda son los **SIFMI**, los servicios de intermediación financiera medidos indirectamente, que se imputan como consumo intermedio de los sectores que se financian y como consumo final de los hogares, y que la ficha 12.05 desarrolla entera.",
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
            { nom: "Cuenta de producción", sub: "Un recurso, un empleo, un saldo.", cols: ["B.1g = P.1 − P.2"] },
            { nom: "Desglose de la producción", sub: "Los tres tipos del SEC.", cols: ["P.1 = P.11 + P.12 + P.13"] },
            { nom: "Producción de no mercado", sub: "Pagos parciales y entrega gratuita.", cols: ["P.13 = P.131 + P.132"] },
            { nom: "Valoración", sub: "No coinciden, y de ahí la cuña.", cols: ["P.1 a precios básicos · P.2 a precios de adquisición"] },
            { nom: "Del VAB al PIB", sub: "Los impuestos sobre productos van aparte.", cols: ["PIB pm $= \\sum$ VAB pb $+$ D.21 $-$ D.31"] },
            { nom: "No mercado: suma de costes", sub: "La convención que define el bloque.", cols: ["P.1 = D.1 + P.2 + (D.29 − D.39) + P.51c"] },
            { nom: "Consecuencia inmediata", sub: "Identidad, no resultado empírico.", cols: ["excedente neto de explotación = 0"] },
            { nom: "Excedente bruto del no mercado", sub: "Coincide con la amortización.", cols: ["B.2g = P.51c"] },
            { nom: "Alquiler imputado", sub: "Producción sin transacción, en S.14.", cols: ["P.12 — servicios de vivienda en propiedad"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la producción que no se vende",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, un productor de no mercado.** Un organismo público tiene una remuneración de asalariados de **100**, consumos intermedios de **60**, otros impuestos netos sobre la producción de **5** y un consumo de capital fijo estimado en **20**. No vende nada. ¿Cuál es su producción?",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Importe"],
          filas: [
            ["Remuneración de asalariados", "D.1", "100"],
            ["Consumos intermedios", "P.2", "60"],
            ["Otros impuestos netos sobre la producción", "D.29 − D.39", "5"],
            ["Consumo de capital fijo", "P.51c", "20"],
            ["Producción, por suma de costes", "P.1", "185"],
            ["Valor añadido bruto = P.1 − P.2", "B.1g", "125"],
            ["Excedente bruto de explotación = B.1g − D.1 − impuestos", "B.2g", "20"],
            { celdas: ["Excedente NETO de explotación = B.2g − P.51c", "B.2n", "0"], clase: "total" },
          ],
          nota: "Léase la tabla de abajo arriba y se entiende la trampa. El excedente **bruto** vale 20, que es **exactamente el consumo de capital fijo**, y por tanto el excedente **neto** es cero. No podía ser otra cosa: si la producción se define como la suma de los costes y luego se van restando esos mismos costes uno a uno, lo último que queda tiene que ser la única partida que no se restó antes. **Es una identidad del método, no un hallazgo sobre el sector público.** Y de ahí la advertencia: la productividad medida de una administración es casi constante por construcción, y usarla para juzgar su eficiencia es usar una cifra que no puede responder a esa pregunta.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, el reparto de la producción entre sectores.** El curso de cuentas nacionales del INE ofrece los pesos medios de cada sector en la economía española, y su lectura conjunta es más instructiva de lo que parece.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Magnitud", y: "% del total" },
          dominio: { x: [0, 3], y: [0, 95] },
          marcasX: [],
          marcasY: [0, 25, 50, 75],
          areas: [
            { puntos: [[0.12, 0], [0.12, 70], [0.48, 70], [0.48, 0]], color: "n2" },
            { puntos: [[0.52, 0], [0.52, 15.9], [0.88, 15.9], [0.88, 0]], color: "n1" },
            { puntos: [[1.12, 0], [1.12, 83], [1.48, 83], [1.48, 0]], color: "n2" },
            { puntos: [[1.52, 0], [1.52, 8], [1.88, 8], [1.88, 0]], color: "n1" },
            { puntos: [[2.12, 0], [2.12, 56.3], [2.48, 56.3], [2.48, 0]], color: "n2" },
            { puntos: [[2.52, 0], [2.52, 24.2], [2.88, 24.2], [2.88, 0]], color: "n1" },
          ],
          notas: [
            { x: 0.3, y: 75, texto: "70,0", ancla: "middle" },
            { x: 0.7, y: 21, texto: "15,9", ancla: "middle" },
            { x: 1.3, y: 88, texto: "83,0", ancla: "middle" },
            { x: 1.7, y: 13, texto: "8,0", ancla: "middle" },
            { x: 2.3, y: 61, texto: "56,3", ancla: "middle" },
            { x: 2.7, y: 29, texto: "24,2", ancla: "middle" },
            { x: 0.5, y: -8, texto: "Producción", ancla: "middle" },
            { x: 1.5, y: -8, texto: "Consumos interm.", ancla: "middle" },
            { x: 2.5, y: -8, texto: "Valor añadido", ancla: "middle" },
          ],
          nota: "En cada par, la barra oscura es **S.11, sociedades no financieras**, y la clara es **S.14, hogares**. Léase de izquierda a derecha y se ve el mecanismo del valor añadido en acción. Las sociedades hacen el **70 %** de la producción pero consumen el **83 %** de los consumos intermedios, así que su participación en el valor añadido **cae al 56 %**. Los hogares hacen solo el 15,9 % de la producción y apenas el 8 % de los consumos intermedios, con lo que su peso en el valor añadido **sube al 24,2 %**. La explicación es que buena parte de la producción de los hogares —**los alquileres imputados de la vivienda en propiedad**— prácticamente no consume insumos: es valor añadido casi puro. *(Pesos medios para España según el curso de cuentas nacionales del INE.)*",
        },
        {
          tipo: "tabla",
          cabecera: ["Tipo de producción", "Código", "Ejemplo"],
          filas: [
            ["De mercado", "P.11", "Un coche vendido; una consulta privada; la venta de publicaciones de un organismo"],
            ["Para uso final propio", "P.12", "Software desarrollado internamente; I+D de un hospital público; alquiler imputado"],
            ["No de mercado con pago parcial", "P.131", "Tasas universitarias; entrada a un museo público"],
            { celdas: ["No de mercado entregada gratuitamente", "P.132", "Defensa, justicia, seguridad, sanidad pública gratuita"], clase: "total" },
          ],
          nota: "El caso más voluminoso de **P.12** es el que menos parece producción: los **servicios de alquiler que un propietario se presta al ocupar su propia vivienda**. No hay transacción, no hay factura y no hay dinero cambiando de manos, y sin embargo se estima y se suma al PIB. La razón es de comparabilidad: si no se imputara, dos países idénticos con distinta tasa de propiedad tendrían PIB distintos por una diferencia puramente institucional. En España pesa varios puntos del PIB, y explica buena parte del 24,2 % de valor añadido de los hogares del gráfico anterior.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué la producción pública se mide así y qué se pierde",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Medir por costes una tercera parte larga del gasto de una economía avanzada es una decisión enorme, y merece examinarse: por qué se hace, qué se pierde y qué se ha intentado en su lugar.",
            "**El motivo es que no hay alternativa observable.** Un servicio que se entrega gratuitamente no revela ningún precio, y sin precio no hay forma directa de valorar la producción. Las alternativas imaginables son peores: valorar por lo que costaría en el mercado privado exige que exista un equivalente privado —no lo hay para la defensa o la justicia— y valorar por la disposición a pagar exige preguntarle a la gente cuánto vale para ella algo que recibe gratis, con el problema de revelación de preferencias de la ficha 10.05.",
            "**Lo que se pierde es la calidad y, con ella, toda la variación de eficiencia.** Si un hospital atiende a los mismos pacientes con los mismos medios pero con mejores resultados clínicos, el sistema de cuentas **no registra ningún aumento de producción**. Si contrata a más personal sin mejorar el servicio, registra un aumento. La convención es ciega al resultado y sensible solo al insumo, que es exactamente lo contrario de lo que interesaría medir.",
            "**Ha habido un intento serio de corregirlo y conviene conocerlo.** El enfoque de **producción por resultados** —output methods— mide la producción no de mercado por indicadores de actividad ajustados por calidad: número de altas hospitalarias ponderadas por complejidad, alumnos escolarizados ponderados por resultados, delitos resueltos. Eurostat lo recomienda para sanidad y educación, y varios países lo aplican. Sus problemas son reales: elegir los indicadores es una decisión discutible, ajustar por calidad exige juicios de valor, y la comparabilidad internacional se resiente cuando cada país elige un método distinto.",
            "**Hay además una consecuencia menos obvia que afecta a las comparaciones entre países.** Como la producción pública se valora por costes y el mayor de esos costes son los salarios, **un país con salarios públicos bajos tiene, en igualdad de servicio prestado, un PIB menor**. Al comparar el tamaño de las economías o el peso del sector público, esa convención introduce un sesgo sistemático que rara vez se menciona. Es un caso más del aviso de la ficha 10.07 sobre comparar niveles entre países.",
            "**Qué hacer con todo esto en la práctica.** Usar la producción pública medida para lo que sirve —contabilizar el tamaño del sector, cuadrar el sistema, deflactar— y no para lo que no puede hacer, que es medir su eficiencia. Cuando la pregunta sea si un servicio público funciona bien, ir a **indicadores de resultado que viven fuera del sistema de cuentas**: listas de espera, resultados educativos comparables, tiempos de resolución judicial. Y desconfiar de cualquier titular que compare la productividad del sector público con la del privado, porque una de las dos cifras está construida de forma que no puede moverse.",
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
            { t: "Leer el excedente neto nulo de las administraciones como un dato económico", d: "Es una identidad del método: si la producción se define como la suma de los costes y luego se restan esos mismos costes uno a uno, lo que queda al final es cero por construcción. No dice nada sobre la eficiencia del sector público, y usarlo así es interpretar una convención contable como un hallazgo." },
            { t: "Valorar producción y consumos intermedios con el mismo criterio", d: "La producción va a precios básicos —lo que recibe el productor, sin impuestos sobre productos— y los consumos intermedios a precios de adquisición —lo que paga el comprador—. Por eso el valor añadido no incluye los impuestos netos sobre productos y hay que sumarlos aparte para llegar del VAB al PIB a precios de mercado." },
            { t: "Juzgar la eficiencia del sector público por su productividad medida", d: "Si el producto se define como el coste de los insumos, la relación entre ambos apenas puede variar: es constante por construcción. Un hospital que mejora sus resultados clínicos con los mismos medios no registra ningún aumento de producción, y uno que contrata más personal sin mejorar sí lo registra." },
            { t: "Olvidar los alquileres imputados al interpretar la producción de los hogares", d: "Es la mayor partida de producción para uso final propio y explica buena parte del 24,2 % de valor añadido del sector hogares. No hay transacción ni factura, y se imputa por comparabilidad: sin ella, dos países idénticos con distinta tasa de propiedad tendrían PIB distintos." },
            { t: "Confundir producción con valor añadido al comparar sectores", d: "Las sociedades hacen el 70 % de la producción y solo el 56 % del valor añadido, porque consumen el 83 % de los consumos intermedios. Los hogares recorren el camino contrario. El peso de un sector cambia radicalmente según qué magnitud se mire, y el ranking por facturación y por valor añadido no se parecen." },
            { t: "Suponer que producción de no mercado significa gratuita", d: "Incluye los pagos parciales (P.131): tasas universitarias, entradas de museo. Lo que la define no es que no se cobre, sino que lo que se cobra no es un precio económicamente significativo, con el criterio cuantitativo de la regla del 50 % de la ficha 12.01." },
            { t: "Comparar el peso del sector público entre países sin considerar los salarios", d: "Como su producción se valora por costes y el mayor coste son los salarios, un país con salarios públicos bajos tiene, prestando el mismo servicio, un PIB menor y un sector público aparentemente más pequeño. Es un sesgo sistemático que rara vez se menciona en las comparaciones internacionales." },
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
            "Esta cuenta es el primer eslabón de la secuencia, y lo que decida aquí condiciona todas las cuentas posteriores.",
          ],
          lista: [
            "El **valor añadido** que sale de aquí es la entrada de la cuenta de explotación de la ficha 12.03, donde se reparte entre remuneración, impuestos y excedente. Y la suma de los valores añadidos de todos los sectores, más los impuestos netos sobre productos, es el **PIB por el enfoque de la producción** de la ficha 10.07.",
            "El **consumo de capital fijo** que aparece dentro de la producción de no mercado se estima por el **método del inventario permanente**: se acumula la formación bruta de capital de años anteriores, se le aplica una vida útil por tipo de activo y se calcula qué parte se ha consumido. Es una estimación con supuestos discutibles y es la razón principal de que casi nadie use magnitudes netas, como advertía la ficha 10.07.",
            "Los **SIFMI** entran aquí como consumo intermedio de los sectores que se financian, lo que reduce su valor añadido, y como consumo final de los hogares. Ese ajuste recorre después toda la secuencia y es el objeto de la ficha 12.05.",
            "La distinción entre **producción de mercado y de no mercado** determina la sectorización de la ficha 12.01 y, por esa vía, el perímetro de la deuda pública. Es el mismo criterio operando en dos sitios: aquí para valorar y allí para clasificar.",
            "Y el paso de **precios básicos a precios de mercado** es la bisagra con el sistema fiscal: los impuestos sobre productos de la ficha 10.03 son exactamente esa diferencia, y su tratamiento explica por qué el IVA no aparece en el valor añadido de ninguna rama pese a llamarse impuesto sobre el valor añadido.",
          ],
          cierre:
            "La idea que conviene fijar es que **el valor añadido no es un dato observado sino un residuo**: lo que queda de restar unos consumos valorados de una forma a una producción valorada de otra. Cada convención de valoración se propaga a todo lo que viene después.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un organismo público tiene RA 100, CI 60, impuestos netos 5 y CCF 20. ¿Cuál es su producción y su excedente neto?", a: "La producción es la suma de costes, 185, y el excedente neto es cero. El valor añadido es 185 − 60 = 125; restando remuneración e impuestos queda un excedente bruto de 20, que coincide exactamente con el consumo de capital fijo, así que el neto se anula. Es una identidad del método, no un dato sobre eficiencia." },
            { q: "¿Por qué el valor añadido no incluye los impuestos sobre productos?", a: "Porque la producción se valora a precios básicos, que es lo que efectivamente recibe el productor, mientras que los consumos intermedios van a precios de adquisición. Los impuestos netos sobre productos quedan fuera del valor añadido de todas las ramas y hay que sumarlos aparte para llegar del VAB al PIB a precios de mercado." },
            { q: "Las sociedades hacen el 70 % de la producción y el 56 % del valor añadido. ¿Cómo se explica?", a: "Porque consumen el 83 % de los consumos intermedios de la economía. El valor añadido es producción menos consumos intermedios, así que un sector muy intensivo en insumos pierde peso al pasar de una magnitud a otra. Los hogares hacen el camino inverso, del 15,9 % al 24,2 %, porque los alquileres imputados apenas consumen insumos." },
            { q: "¿Por qué se imputa un alquiler a quien vive en su propia vivienda?", a: "Por comparabilidad. Si no se imputara, dos países idénticos con distinta tasa de propiedad tendrían PIB distintos por una diferencia puramente institucional: donde se alquila habría producción registrada y donde se es propietario, no. Es producción para uso final propio (P.12) y en España pesa varios puntos del PIB." },
            { q: "¿Sirve la productividad medida del sector público para juzgar su eficiencia?", a: "No. Si el producto se define como el coste de los insumos, la relación entre ambos apenas puede variar. Un hospital que mejora sus resultados clínicos con los mismos medios no registra más producción, y uno que contrata sin mejorar sí. Para juzgar eficiencia hay que ir a indicadores de resultado que viven fuera del sistema de cuentas." },
            { q: "¿Es gratuita toda la producción de no mercado?", a: "No. Incluye los pagos parciales (P.131), como las tasas universitarias o la entrada a un museo público. Lo que la define no es que no se cobre nada, sino que lo cobrado no es un precio económicamente significativo, con el criterio cuantitativo de la regla del 50 %." },
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
            { ref: "SEC 2010, capítulo 3 — Reglamento (UE) 549/2013", nota: "las definiciones de P.1, P.2 y sus desgloses, y las reglas de valoración; el texto normativo de esta ficha." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre producción explica por qué se eligió medir por costes lo que no tiene precio." },
            { ref: "Eurostat, Handbook on Prices and Volume Measures — output methods", nota: "el enfoque de medir la producción pública por resultados ajustados por calidad, y sus dificultades." },
            { ref: "Atkinson Review, Measurement of Government Output and Productivity", nota: "la revisión británica que abrió el debate sobre medir el sector público por resultados; sigue siendo la mejor discusión del problema." },
            { ref: "INE, Curso de Cuentas Nacionales — cuenta de producción por sectores", nota: "los pesos reales de cada sector en la economía española y las fuentes con que se estiman." },
          ],
        },
      ],
    },
  ],
};
