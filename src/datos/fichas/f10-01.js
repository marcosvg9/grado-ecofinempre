/* Ficha 10.01 — Estructura productiva y especialización de la economía española. */

export default {
  codigo: "10.01",
  titulo: "Estructura productiva y especialización de la economía española",
  nivel: 2,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "La productividad agregada de un país no es la media de lo buenas que son sus empresas: es esa media ponderada por cuánta gente trabaja en cada una. España tiene empresas grandes tan productivas como las europeas y una proporción inusual de gente empleada en las pequeñas, y ahí está buena parte de la brecha.",
  requiere: "3.09 Crecimiento y productividad · 2.04 Tecnología y producción",
  abre: "10.02 Mercado de trabajo español · 10.07 Producción, VAB y PIB · 10.09 Coste laboral unitario",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La estructura productiva de un país es el reparto de su producción y su empleo entre ramas de actividad, y la de España tiene rasgos que explican una parte considerable de su comportamiento macroeconómico. Conviene empezar con las magnitudes de orden: **los servicios generan alrededor de tres cuartas partes del valor añadido**, la industria manufacturera se mueve en torno a la décima parte, la construcción ronda el 6 % y la agricultura no llega al 3 %. Ese perfil no es anómalo —todas las economías avanzadas se han terciarizado—, pero España lo alcanzó **con un peso industrial menor y una construcción mayor** que la media europea, y esa combinación tiene consecuencias.",
            "**Dentro de los servicios hay que distinguir dos mundos que casi nunca se separan.** Están los **servicios de mercado de alto valor añadido** —consultoría, informática, servicios financieros, ingeniería— que son intensivos en conocimiento, exportables y de productividad elevada y creciente. Y están los **servicios de bajo valor añadido** —hostelería, comercio minorista, servicios personales— intensivos en trabajo, difícilmente exportables y con productividad estancada por razones tecnológicas más que de gestión. España tiene un peso relativamente alto de los segundos, ligado a su especialización turística, y decir «España es una economía de servicios» sin esa distinción no informa de nada.",
            "**El turismo merece un párrafo propio porque es la especialización más característica.** Aporta alrededor de un 12 % del PIB contando efectos indirectos, es una fuente estructural de ingresos exteriores y ha sido el amortiguador de varias crisis. Su contrapartida es conocida: **empleo estacional, salarios bajos, productividad difícil de elevar** y una fuerte exposición a acontecimientos que el país no controla. Que sea una ventaja comparativa genuina en el sentido de la ficha 1.01 no significa que sea indiferente en qué se especialice una economía: **distintas especializaciones tienen distintas sendas de productividad**, y eso es un argumento de política industrial que la teoría del comercio clásica no captura.",
            "**El hecho estructural más importante, sin embargo, no es sectorial sino de tamaño.** España tiene una distribución empresarial marcadamente sesgada hacia lo pequeño: **más del 95 % de las empresas tienen menos de diez empleados**, y la proporción del empleo total que trabaja en empresas pequeñas es sensiblemente mayor que en Alemania o Francia. Y esto importa porque **la productividad crece con el tamaño de forma robusta**: las empresas grandes invierten más en capital y en tecnología, exportan más, formalizan mejor sus procesos, acceden a financiación más barata y absorben mejor las innovaciones ajenas. La productividad agregada se resiente aunque cada empresa individual sea tan buena como su homóloga europea.",
            "**Por qué las empresas españolas no crecen es la pregunta relevante, y hay varias respuestas parciales.** Existen **umbrales regulatorios** —obligaciones contables, laborales y fiscales que se activan al superar cierto número de empleados o cierta facturación— que crean un incentivo a quedarse justo por debajo, algo detectable estadísticamente como una acumulación anómala de empresas en el umbral y contrastable con la regresión discontinua de la ficha 4.07. Hay también fragmentación regulatoria entre comunidades autónomas, un mercado de capitales menos desarrollado y una estructura de propiedad familiar reacia a diluirse. Ninguna explica el fenómeno entera, y conviene desconfiar de quien afirme lo contrario.",
            "**La estructura productiva también determina cómo se comporta el país en el ciclo.** Un peso alto de construcción y turismo genera **empleo muy sensible a la coyuntura** y, combinado con la dualidad laboral de la ficha 10.02, produce la amplificación característica del paro español: las recesiones destruyen mucho más empleo que en otros países con caídas de producción similares. Y una especialización exportadora concentrada en bienes de gama media hace la competitividad más dependiente del coste que de la calidad, lo que traslada el ajuste a los salarios en lugar de a los márgenes, que es el asunto de la ficha 10.09.",
            "**Un último matiz que evita conclusiones fáciles.** El cambio estructural hacia los servicios reduce mecánicamente el crecimiento agregado de la productividad, porque desplaza empleo desde sectores con mejoras rápidas hacia otros con mejoras lentas. Es el **efecto Baumol**, y es aritmética, no ineficiencia: le ocurre a todas las economías avanzadas y explica una parte del estancamiento de la productividad que suele atribuirse por completo a fallos de gestión o de regulación. Distinguir la parte que es composición de la parte que es rendimiento dentro de cada sector es el primer paso serio de cualquier diagnóstico.",
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
            { nom: "Productividad agregada", sub: "Media ponderada por empleo, no por empresa.", cols: ["Π = Σ wᵢ · πᵢ, con wᵢ = participación en el empleo"] },
            { nom: "Descomposición del crecimiento", sub: "Separa el rendimiento del cambio estructural.", cols: ["ΔΠ = Σ wᵢ·Δπᵢ (dentro) + Σ πᵢ·Δwᵢ (entre)"] },
            { nom: "Efecto Baumol", sub: "Es aritmética de composición, no ineficiencia.", cols: ["Δwᵢ > 0 en sectores de Δπᵢ bajo ⟹ frena Π"] },
            { nom: "Prima de tamaño", sub: "Robusta en todos los países y sectores.", cols: ["π crece con el número de empleados"] },
            { nom: "Umbral regulatorio", sub: "Detectable como acumulación en el umbral.", cols: ["coste discreto al superar n empleados"] },
            { nom: "Ventaja comparativa", sub: "Explica el qué, no el con qué productividad.", cols: ["ficha 1.01: costes de oportunidad relativos"] },
            { nom: "Amplificación cíclica", sub: "Estructura sectorial más dualidad laboral.", cols: ["Δempleo ÷ ΔPIB elevado"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la aritmética de la brecha de productividad",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos países con **exactamente las mismas empresas**: la productividad por trabajador es idéntica en cada tramo de tamaño. Lo único que difiere es **cómo se reparte el empleo** entre esos tramos. El país A tiene el perfil español estilizado; el país B, el centroeuropeo.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Tamaño", y: "Productividad" },
          dominio: { x: [0, 4], y: [0, 220] },
          marcasX: [],
          marcasY: [0, 50, 100, 150, 200],
          areas: [
            { puntos: [[0.12, 0], [0.12, 100], [0.88, 100], [0.88, 0]], color: "n2" },
            { puntos: [[1.12, 0], [1.12, 130], [1.88, 130], [1.88, 0]], color: "n2" },
            { puntos: [[2.12, 0], [2.12, 160], [2.88, 160], [2.88, 0]], color: "n2" },
            { puntos: [[3.12, 0], [3.12, 200], [3.88, 200], [3.88, 0]], color: "n2" },
          ],
          series: [
            { nombre: "País A: 140", color: "alerta", trazo: "discontinuo", grosor: 1.8, etiquetaEn: [4, 140], puntos: [[0, 140], [4, 140]] },
            { nombre: "País B: 154", color: "acento", trazo: "discontinuo", grosor: 1.8, etiquetaEn: [4, 154.2], puntos: [[0, 154.2], [4, 154.2]] },
          ],
          notas: [
            { x: 0.5, y: -18, texto: "< 10", ancla: "middle" },
            { x: 1.5, y: -18, texto: "10-49", ancla: "middle" },
            { x: 2.5, y: -18, texto: "50-249", ancla: "middle" },
            { x: 3.5, y: -18, texto: "250 +", ancla: "middle" },
          ],
          nota: "Las cuatro barras son **idénticas en los dos países**: una empresa española grande es tan productiva como una alemana grande, y una pequeña como una pequeña. Las dos líneas horizontales son las productividades **agregadas**, y difieren en un 10 %. Toda esa diferencia procede de las ponderaciones, es decir, de **dónde trabaja la gente**. Es la razón de que la comparación empresa a empresa y la comparación macroeconómica den mensajes distintos, y de que ambas sean ciertas.",
        },
        {
          tipo: "tabla",
          cabecera: ["Tramo de empleo", "Productividad", "País A: empleo", "Aporta", "País B: empleo", "Aporta"],
          filas: [
            ["Menos de 10", "100", "40 %", "40,0", "25 %", "25,0"],
            ["De 10 a 49", "130", "20 %", "26,0", "20 %", "26,0"],
            ["De 50 a 249", "160", "15 %", "24,0", "17 %", "27,2"],
            ["250 o más", "200", "25 %", "50,0", "38 %", "76,0"],
            { celdas: ["Productividad agregada", "—", "100 %", "140,0", "100 %", "154,2"], clase: "total" },
          ],
          nota: "La brecha es del **10,1 %**, y se obtiene **sin que ninguna empresa sea peor que su homóloga**. El tramo decisivo es el último: en B trabaja en empresas grandes el 38 % del empleo frente al 25 % en A, y como esas empresas son el doble de productivas que las micro, la diferencia pesa mucho. La lectura de política es directa y poco cómoda: **medidas que mejoren la gestión de cada empresa no cierran esta brecha**; lo que la cierra es que las empresas productivas crezcan y absorban empleo, o que las improductivas salgan. Eso apunta a la regulación por umbrales, a la financiación y a la competencia, no a los programas de formación empresarial.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la otra mitad: el efecto Baumol, que va en dirección contraria.** Una economía con dos sectores, industria con productividad 120 que crece al 3 % anual, y servicios con productividad 90 que crece al 0,5 %. El empleo se desplaza un punto porcentual al año desde la industria hacia los servicios, que es el orden de magnitud real de la terciarización.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Productividad agregada", "Crecimiento anual"],
          filas: [
            ["Punto de partida (30 % industria)", "99,0", "—"],
            ["Diez años después (20 % industria)", "107,9", "0,87 %"],
            { celdas: ["Contrafactual: mismos pesos que al principio", "114,6", "1,47 %"], clase: "total" },
          ],
          nota: "Los dos sectores han mejorado exactamente igual en ambos escenarios. La diferencia —**0,61 puntos de crecimiento anual perdidos**— procede íntegramente de que el empleo se ha desplazado hacia el sector que mejora más despacio. Es **aritmética de composición, no ineficiencia**, y le ocurre a toda economía avanzada. La consecuencia metodológica es la que hay que retener: al diagnosticar el estancamiento de la productividad española hay que **separar lo que es composición de lo que es rendimiento dentro de cada sector**, porque las políticas que corrigen una cosa no sirven para la otra.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el diagnóstico de la productividad española",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El estancamiento de la productividad española es uno de los pocos diagnósticos en los que hay consenso amplio, y aun así se comenta habitualmente con explicaciones incompatibles entre sí. Recorrer las candidatas con la aritmética de esta ficha permite ordenarlas.",
            "**La primera candidata es la composición sectorial**, y aporta una parte real pero limitada. La terciarización y el peso del turismo penalizan el crecimiento agregado por el efecto Baumol, como muestra el ejemplo. Pero los ejercicios de descomposición que aplican la fórmula de arriba a datos reales encuentran que **la mayor parte del problema está dentro de los sectores, no entre ellos**: la productividad española es baja también comparada sector por sector con la de sus vecinos. La composición explica algo y no lo explica todo.",
            "**La segunda es el tamaño empresarial**, y es la que más pesa según casi todos los estudios. La brecha del ejemplo, del 10 %, es del orden de magnitud que encuentran los análisis con microdatos. Su virtud como explicación es que **se conecta con políticas concretas y comprobables**: los umbrales regulatorios se pueden identificar, la acumulación de empresas justo por debajo se puede medir, y el efecto de moverlos se puede evaluar con las técnicas de la ficha 4.07. Su límite es que el tamaño también es **consecuencia** de la productividad y no solo causa, con toda la endogeneidad que eso implica.",
            "**La tercera es la asignación del capital.** Durante la expansión previa a 2008, una fracción muy alta del crédito se dirigió a construcción y actividades inmobiliarias, sectores de productividad baja y decreciente. El resultado fue una economía que crecía mucho con productividad total de los factores prácticamente estancada, un fenómeno inusual que la contabilidad del crecimiento de la ficha 3.09 detecta como un residuo nulo o negativo pese a un fuerte crecimiento del producto. **No es que se invirtiera poco: es que se invirtió en lo que menos rendía a largo plazo**, y eso es un fallo de asignación, no de esfuerzo.",
            "**La cuarta es la calidad del empleo y de la formación.** El peso del empleo temporal —ficha 10.02— reduce los incentivos de la empresa a formar a quien va a marcharse en seis meses y los del trabajador a invertir en capital humano específico. A esto se suma un desajuste entre la formación adquirida y la demandada, con una distribución educativa muy polarizada entre titulados superiores y personas sin estudios postobligatorios, y una formación profesional históricamente pequeña en comparación con los países que sirven de referencia.",
            "**Cómo se ordenan las cuatro.** Ninguna es suficiente por sí sola, y las cuatro interactúan: la dualidad laboral facilita que sobrevivan empresas pequeñas de baja productividad, que a su vez forman poco, que a su vez usan más temporalidad. Lo que la aritmética de esta ficha aporta al debate es un criterio de **descarte**: cualquier explicación que no pase por la ponderación —por dónde trabaja la gente y con qué capital— no puede dar cuenta de una brecha agregada, por convincente que suene aplicada a una empresa concreta. Y cualquier política que mejore el interior de las empresas sin permitir que las buenas crezcan deja intacta la mitad del problema.",
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
            { t: "Confundir la productividad media de las empresas con la agregada", d: "La agregada es una media ponderada por empleo, no por número de empresas. Dos países con empresas idénticas tramo a tramo pueden diferir un 10 % en productividad agregada solo por dónde trabaja la gente. Por eso las comparaciones empresa a empresa y las macroeconómicas dan mensajes distintos y ambas son correctas." },
            { t: "Decir «España es una economía de servicios» sin distinguir cuáles", d: "Consultoría, informática e ingeniería son intensivas en conocimiento, exportables y de productividad creciente; hostelería y comercio minorista, no. Meterlas en la misma categoría impide ver lo único que importa del dato, que es la composición interna del sector." },
            { t: "Atribuir todo el estancamiento de la productividad a mala gestión", d: "El efecto Baumol descuenta mecánicamente crecimiento agregado al desplazarse el empleo hacia sectores de mejora lenta: en el ejemplo, 0,61 puntos anuales sin que nadie gestione peor. Hay que descomponer entre el efecto de composición y el rendimiento dentro de cada sector antes de sacar conclusiones." },
            { t: "Tratar el tamaño empresarial como causa exclusiva", d: "Las empresas grandes son más productivas y las productivas tienden a crecer: la relación va en ambos sentidos. Sin una estrategia de identificación, la correlación entre tamaño y productividad no autoriza a concluir que agrandar empresas eleve la productividad. Los umbrales regulatorios son útiles justo porque permiten esa identificación." },
            { t: "Creer que invertir mucho garantiza crecer en productividad", d: "España invirtió intensamente antes de 2008 con una productividad total de los factores estancada, porque el capital fue a construcción e inmobiliario. Lo que importa no es el volumen de inversión sino su asignación, y esa distinción es invisible en cualquier agregado de formación bruta de capital." },
            { t: "Leer el peso del turismo como un error de especialización", d: "Es una ventaja comparativa genuina y una fuente estable de ingresos exteriores. Lo que sí es cierto es que distintas especializaciones tienen distintas sendas de productividad, lo cual es un argumento sobre dinámica, no sobre si conviene o no explotar la ventaja que se tiene." },
            { t: "Comparar niveles de productividad entre países sin ajustar", d: "Los niveles dependen de la paridad de poder adquisitivo, de la composición sectorial, de cómo se mide el empleo —personas frente a horas— y de convenciones contables como los alquileres imputados. Las comparaciones fiables se hacen en variaciones y sobre sectores homogéneos, con la lógica de panel de la ficha 4.08." },
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
            "Todo lo dicho procede de operaciones concretas dentro del sistema de cuentas, y conviene saber cuáles para poder comprobarlo.",
          ],
          lista: [
            "El **valor añadido bruto por ramas de actividad** es la fuente directa de la estructura sectorial, y el **marco input-output** de la ficha 4.01 permite ver además la interdependencia: cuánto del turismo es realmente industria, transporte y agricultura arrastrados por la demanda final turística. Los porcentajes de peso sectorial cambian bastante según se midan de una forma o de otra.",
            "La **productividad por ocupado y por hora** se calcula dividiendo el VAB en volumen entre el empleo de las cuentas nacionales, que no coincide con el de la EPA ni con la afiliación. La medida por hora es preferible porque neutraliza la jornada parcial, y en España la diferencia entre ambas medidas no es despreciable. La ficha 10.02 explica de dónde viene cada cifra de empleo.",
            "La **cuenta satélite del turismo** es el instrumento oficial para medir un fenómeno que atraviesa muchas ramas y no constituye una por sí mismo. De ahí sale la cifra que se cita habitualmente, y su metodología —qué se imputa al turismo y qué no— determina el resultado más de lo que el debate público sugiere.",
            "La **contabilidad regional** ofrece el panel de comunidades autónomas con el que se estudian especialización y convergencia, con las advertencias sobre efectos fijos y errores agrupados de la ficha 4.08. Es donde mejor se ve que «la economía española» agrega realidades productivas muy distintas.",
            "Y los **alquileres imputados** de la vivienda en propiedad, que la ficha 1.01 mencionaba como el gran coste implícito registrado, engordan el sector servicios en varios puntos del PIB sin corresponder a ninguna transacción ni a ningún empleo. Al comparar el peso de los servicios entre países con distinta tasa de propiedad, esa convención importa.",
          ],
          cierre:
            "El aviso general es que **el peso de un sector no es un dato único, sino el resultado de decisiones de clasificación y de imputación**. Antes de construir un argumento sobre la especialización española conviene saber si la cifra utilizada incluye efectos indirectos, si mide empleo en personas o en horas y qué hace con los alquileres imputados.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Dos países tienen empresas igual de productivas tramo a tramo. ¿Cómo puede diferir su productividad agregada en un 10 %?", a: "Porque la agregada es una media ponderada por el empleo de cada tramo. Si en uno el 40 % del empleo está en microempresas de productividad 100 y en el otro solo el 25 %, con más gente en empresas grandes de productividad 200, el agregado pasa de 140 a 154. Ninguna empresa es mejor: cambia dónde trabaja la gente." },
            { q: "¿Qué política cierra esa brecha y cuál no?", a: "No la cierran las medidas que mejoran el interior de cada empresa, porque las empresas ya son igual de buenas. La cierran las que permiten que las productivas crezcan y absorban empleo, o que salgan las improductivas: umbrales regulatorios, acceso a financiación, competencia. El diagnóstico determina el instrumento." },
            { q: "La productividad agregada crece un 0,87 % anual en lugar del 1,47 %. ¿Quién lo ha hecho mal?", a: "Nadie: los dos sectores han mejorado exactamente igual en ambos escenarios. La diferencia procede de que el empleo se desplaza hacia el sector que mejora más despacio, que es el efecto Baumol. Es aritmética de composición, le ocurre a toda economía avanzada, y hay que descontarla antes de atribuir el estancamiento a fallos de gestión." },
            { q: "España invirtió mucho antes de 2008 y su productividad total de los factores no creció. ¿Es contradictorio?", a: "No. Lo que importa no es cuánto capital se acumula sino en qué se coloca. Una fracción muy alta del crédito se dirigió a construcción e inmobiliario, sectores de productividad baja y decreciente, así que la economía crecía por acumulación de factores y no por eficiencia. La contabilidad del crecimiento de la ficha 3.09 lo detecta como un residuo nulo pese a un fuerte crecimiento del producto." },
            { q: "¿Por qué el tamaño empresarial no puede tomarse como causa sin más?", a: "Porque las empresas productivas también tienden a crecer, de modo que la relación es bidireccional y la correlación no identifica el efecto. Es endogeneidad de manual, y por eso los umbrales regulatorios son útiles: generan variación en el tamaño por una razón ajena a la productividad, que es lo que la ficha 4.07 exige a un diseño." },
            { q: "¿Por qué el peso de los servicios en el PIB no es un dato inequívoco?", a: "Porque depende de decisiones de clasificación e imputación. Los alquileres imputados de la vivienda en propiedad añaden varios puntos al sector servicios sin transacción ni empleo asociados, y el marco input-output revela que parte de lo atribuido al turismo es en realidad industria, transporte y agricultura arrastrados por su demanda final." },
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
            { ref: "Myro y García Delgado, Lecciones de Economía Española", nota: "el manual de referencia; los capítulos de estructura productiva y especialización son el complemento natural de esta ficha." },
            { ref: "Banco de España, Informe Anual", nota: "el capítulo sobre productividad y tamaño empresarial se actualiza cada año con microdatos; la mejor fuente de cifras vigentes." },
            { ref: "INE, Contabilidad Nacional Anual y Directorio Central de Empresas", nota: "el VAB por ramas y la distribución real de empresas por tamaño; conviene mirar los datos antes de aceptar ningún porcentaje." },
            { ref: "Baumol, «Macroeconomics of Unbalanced Growth», 1967", nota: "el artículo original del efecto que lleva su nombre; corto y sorprendentemente actual." },
            { ref: "Garicano, Lelarge y Van Reenen, «Firm Size Distortions and the Productivity Distribution», 2016", nota: "cómo los umbrales regulatorios deforman la distribución de tamaños y cuánto cuesta en productividad agregada." },
          ],
        },
      ],
    },
  ],
};
