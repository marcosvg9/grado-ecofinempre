/* Ficha 9.03 — Recursos, capacidades y ventaja competitiva. */

export default {
  codigo: "9.03",
  titulo: "Recursos, capacidades y ventaja competitiva",
  nivel: 2,
  bloque: "Dirección de empresas",
  tiempo: "4 h",
  nucleo:
    "Las cinco fuerzas explican por qué unos sectores son más rentables que otros; los recursos explican por qué unas empresas lo son más que sus competidores del mismo sector. Y como la competencia erosiona cualquier ventaja, lo que crea valor no es tenerla sino que dure.",
  requiere: "9.02 Análisis del entorno · 7.05 Coste de capital",
  abre: "9.04 Estrategias competitivas · 9.10 Innovación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dentro de un mismo sector conviven empresas con rentabilidades muy distintas de forma persistente. Si la estructura del sector fuera lo único relevante, esas diferencias deberían desaparecer. La **visión basada en los recursos** propone la explicación contraria y complementaria: las empresas no son iguales, poseen dotaciones distintas de recursos y capacidades, y esa heterogeneidad es lo que explica la dispersión de resultados.",
            "Conviene distinguir dos niveles. Los **recursos** son activos que la empresa posee o controla: instalaciones, patentes, marca, tesorería, personas con determinada formación. Las **capacidades** son la habilidad de combinar esos recursos para hacer algo bien de forma repetida: desarrollar productos con rapidez, gestionar una cadena logística compleja, integrar adquisiciones. Los recursos se compran; las capacidades se construyen, y por eso son mucho más difíciles de imitar.",
            "No todo recurso genera ventaja. El marco **VRIO** filtra con cuatro preguntas encadenadas. ¿Es **valioso**, en el sentido de que permite explotar una oportunidad o neutralizar una amenaza? Si no, es irrelevante. ¿Es **raro**? Si lo tienen todos los competidores, es un requisito para operar, no una ventaja. ¿Es **inimitable** o difícil de sustituir? Si se puede copiar o comprar, la ventaja durará lo que tarde la competencia en hacerlo. Y ¿está la **organización** preparada para explotarlo? Muchas empresas poseen recursos valiosos que no aprovechan.",
            "La tercera pregunta es la decisiva y merece detalle. Los recursos son difíciles de imitar por razones identificables: **historia**, cuando el recurso se acumuló en condiciones irrepetibles; **ambigüedad causal**, cuando ni siquiera la propia empresa sabe con precisión por qué le funciona; **complejidad social**, cuando el recurso reside en relaciones entre personas más que en un activo concreto; y **economías de escala o de red** que hacen que el segundo entrante nunca alcance al primero.",
            "La consecuencia económica se conecta directamente con el bloque 7. Una ventaja competitiva significa obtener una rentabilidad sobre el capital invertido **superior al coste de ese capital**. La competencia trabaja constantemente para eliminar ese diferencial, y la evidencia empírica muestra que lo consigue: los diferenciales de rentabilidad tienden a converger hacia la media con el tiempo. **Lo que hay que valorar no es el diferencial actual sino su período de persistencia**, y ahí está la conexión con el valor terminal de la ficha 7.09.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Condición VRIO", "Si falla", "Resultado"],
          filas: [
            { nom: "Valioso", sub: "Permite aprovechar oportunidades o neutralizar amenazas", cols: ["No aporta nada", "Desventaja competitiva"] },
            { nom: "Raro", sub: "No lo poseen la mayoría de los competidores", cols: ["Lo tienen todos", "Paridad competitiva: requisito de entrada"] },
            { nom: "Inimitable", sub: "Costoso de copiar, comprar o sustituir", cols: ["Se copia pronto", "Ventaja temporal"] },
            { nom: "Organización", sub: "La empresa está preparada para explotarlo", cols: ["No se aprovecha", "Ventaja potencial no realizada"] },
          ],
          nota: "Las cuatro son **acumulativas**: solo el recurso que supera las cuatro condiciones sostiene una ventaja competitiva duradera. La mayoría de lo que las empresas identifican como fortalezas se queda en la segunda pregunta.",
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
            { nom: "Ventaja competitiva", sub: "Definición económica, no descriptiva.", cols: ["Diferencial = ROIC − WACC > 0"] },
            { nom: "Beneficio económico anual", sub: "El EVA de la ficha 7.05.", cols: ["BE = (ROIC − WACC) × Capital invertido"] },
            { nom: "Valor de la ventaja", sub: "Lo que vale que el diferencial persista n años.", cols: ["V = BE × [1 − (1 + WACC)⁻ⁿ] / WACC"] },
            { nom: "Erosión del diferencial", sub: "La competencia lo reduce a tasa constante.", cols: ["Diferencialₜ = Diferencial₀ × (1 − δ)ᵗ"] },
            { nom: "Período de ventaja competitiva", sub: "Lo que el mercado descuenta implícitamente.", cols: ["El n que hace que el valor calculado iguale al valor de mercado"] },
            { nom: "Rentabilidad sobre el capital invertido", sub: "Se compara siempre contra el WACC, no contra cero.", cols: ["ROIC = NOPAT / (Fondos propios + Deuda con coste)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuánto vale que la ventaja dure",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa con **100 millones** de capital invertido obtiene un **ROIC del 20 %** frente a un **WACC del 9 %**. Su diferencial es de **11 puntos**, es decir, 11 millones de beneficio económico al año.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Duración de la ventaja", "Cálculo", "Valor actual del diferencial"],
          filas: [
            ["3 años", "11 × 2,5313", "27,8 M€"],
            ["5 años", "11 × 3,8897", "42,8 M€"],
            ["10 años", "11 × 6,4177", "70,6 M€"],
            ["15 años", "11 × 8,0607", "88,7 M€"],
            { celdas: ["Perpetua", "11 / 0,09", "122,2 M€"], clase: "total" },
          ],
          nota: "Con el mismo ROIC y el mismo capital, el valor creado va de **28 a 122 millones** según cuánto dure la ventaja. La pregunta estratégica relevante no es «cuánto ganamos», sino **«cuántos años más podremos seguir ganándolo»**, y esa es una pregunta sobre recursos inimitables, no sobre el resultado del último ejercicio.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y con erosión gradual**, que es lo que realmente ocurre. Supongamos que la competencia reduce el diferencial un 20 % cada año en lugar de eliminarlo de golpe:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Diferencial", "Beneficio económico", "ROIC implícito"],
          filas: [
            ["1", "11,0 p.p.", "11,0 M€", "20,0 %"],
            ["3", "7,0 p.p.", "7,0 M€", "16,0 %"],
            ["5", "4,5 p.p.", "4,5 M€", "13,5 %"],
            ["8", "2,3 p.p.", "2,3 M€", "11,3 %"],
            { celdas: ["12", "0,9 p.p.", "0,9 M€", "9,9 %"], clase: "total" },
          ],
          nota: "Al cabo de doce años la empresa apenas cubre su coste de capital, sin haber cometido ningún error: **basta con que la competencia haga su trabajo**. El valor actual de toda la serie es de unos 42 millones, equivalente a mantener el diferencial íntegro durante cinco años. Ese es el orden de magnitud que la evidencia empírica sobre reversión de la rentabilidad respalda para una empresa media.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La lectura para la ficha 7.09** es directa. Cuando un descuento de flujos supone un crecimiento perpetuo con márgenes estables, está suponiendo implícitamente una ventaja competitiva que no se erosiona nunca. Es un supuesto extraordinariamente fuerte y casi siempre injustificado. Comprobar qué período de ventaja implica una valoración es una de las mejores pruebas de coherencia disponibles.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: aplicar VRIO sin engañarse",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El uso habitual del marco consiste en que un equipo directivo enumere sus fortalezas y concluya que todas son ventajas competitivas. El valor del VRIO está precisamente en lo contrario: **en descartar**. Cuatro ejemplos frecuentes y su diagnóstico honesto.",
            "**«Tenemos el mejor equipo del sector».** Valioso, sí. ¿Raro? Probablemente todos los competidores digan lo mismo. ¿Inimitable? Las personas se contratan, y si el valor reside en individuos concretos, el recurso puede irse por la puerta. Se convierte en ventaja sostenible solo si reside en la **capacidad organizativa** de formar y retener equipo, no en las personas que hoy lo componen.",
            "**«Tenemos la tecnología más avanzada».** Depende de si está protegida. Una patente con años de vigencia y difícil de rodear es un recurso raro e inimitable durante ese plazo. Un desarrollo propio sin protección tiene la vida útil que tarde un competidor con recursos en replicarlo, que en software suele ser corta. La ventaja aquí es casi siempre **temporal**, y lo sostenible es la capacidad de seguir innovando.",
            "**«Somos los que llevamos más años».** La antigüedad por sí sola no es nada. Lo que puede serlo es lo que se ha acumulado en ese tiempo y no se puede comprar: una base de datos de clientes irrepetible, una posición en las mejores ubicaciones, relaciones con proveedores construidas durante décadas, o una marca. La pregunta correcta es **qué habría que hacer hoy para replicarlo, y cuánto costaría**.",
            "**«Nuestros costes son los más bajos».** Aquí el diagnóstico depende del origen. Si viene de escala, es sostenible mientras se mantenga la escala y difícil de replicar para un competidor pequeño. Si viene de un proceso propio, dura lo que tarde en copiarse. Y si viene de pagar peor o de aplazar mantenimiento, no es una ventaja: es una deuda diferida.",
            "**La prueba de honestidad** que ordena todo esto es cuantitativa y está en la sección anterior: si la empresa tiene realmente una ventaja competitiva, su ROIC debería superar a su WACC de forma persistente. Si no lo hace, lo que se ha enumerado son fortalezas que no llegan a ventaja. **Y si lo hace, hay que preguntarse por qué, porque la respuesta indica cuánto durará.**",
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
            { t: "Confundir fortaleza con ventaja competitiva", d: "Una fortaleza es algo que se hace bien; una ventaja competitiva es algo que se hace mejor que los competidores, de forma difícil de imitar y que se traduce en rentabilidad superior al coste de capital. La mayoría de las fortalezas listadas en un análisis son requisitos para operar." },
            { t: "Confundir recursos con capacidades", d: "Los recursos se compran y por eso rara vez son fuente de ventaja duradera: si están en venta, los competidores también pueden adquirirlos. Las capacidades se construyen en el tiempo y residen en rutinas organizativas, lo que las hace mucho más difíciles de replicar." },
            { t: "Olvidar la cuarta condición del VRIO", d: "Poseer un recurso valioso, raro e inimitable no basta si la organización no está estructurada para explotarlo. Hay empresas con tecnología excepcional y estructura comercial incapaz de venderla, y el recurso no genera ningún valor." },
            { t: "Suponer que la ventaja es permanente", d: "La evidencia muestra reversión de la rentabilidad hacia la media. La pregunta no es si el diferencial desaparecerá, sino cuándo. Un descuento de flujos con márgenes estables a perpetuidad supone implícitamente una ventaja que no se erosiona nunca." },
            { t: "Tomar la rentabilidad alta como prueba de ventaja", d: "Puede reflejar un sector favorable —lo de la ficha 9.02—, un ciclo favorable o contabilidad agresiva. La ventaja competitiva se demuestra con rentabilidad superior **a la de los competidores del mismo sector** y sostenida en el tiempo." },
            { t: "Buscar la ventaja en lo visible", d: "Lo que se ve se copia. Los recursos más difíciles de imitar son precisamente los menos visibles: rutinas, relaciones, cultura, conocimiento tácito. Si un competidor puede identificar con precisión de dónde viene la ventaja, ya ha recorrido la mitad del camino para replicarla." },
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
            "El SEC 2010 introdujo un cambio importante en el tratamiento de los activos que sostienen las ventajas competitivas.",
          ],
          lista: [
            "El cambio más relevante respecto al sistema anterior fue **capitalizar la investigación y desarrollo**. La I+D dejó de ser consumo intermedio y pasa a ser formación de capital, dentro de los productos de propiedad intelectual (AN.117). Es inversión, no gasto corriente, y eleva el nivel del PIB.",
            "Junto a la I+D, esa categoría incluye la **prospección minera, el software y las bases de datos, y los originales de obras recreativas y literarias**. Son precisamente el tipo de recursos que el marco de esta ficha identifica como fuente de ventaja sostenible.",
            "Sigue habiendo, con todo, una frontera: el **capital organizativo** —rutinas, procesos, conocimiento tácito, cultura— no se reconoce como activo en cuentas nacionales, igual que el PGC no permite activar la marca generada internamente. La literatura sobre **intangibles no medidos** sostiene que esa omisión infravalora la inversión efectiva de las economías avanzadas de forma apreciable.",
            "El **fondo de comercio adquirido (AN.223)** sí se reconoce, pero solo cuando se materializa en una transacción. Es la misma asimetría de la ficha 5.01: la contabilidad prefiere omitir un valor real antes que registrar uno estimado.",
            "La consecuencia es que **las diferencias de productividad entre empresas y entre países se explican en parte por activos que ningún sistema contable mide**, y ese es uno de los argumentos habituales en el debate sobre la medición del crecimiento en economías intensivas en intangibles.",
          ],
          cierre:
            "El paralelismo con VRIO es directo: los recursos más difíciles de imitar son los menos visibles, y resulta que también son los que ni la contabilidad de empresa ni la nacional consiguen registrar.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un recurso es valioso y raro pero fácil de imitar. ¿Qué genera?", a: "Una ventaja competitiva temporal, que durará lo que tarden los competidores en replicarlo. No es despreciable, pero no debe valorarse como si fuera permanente." },
            { q: "Capital invertido 50 M€, ROIC 16 %, WACC 10 %. ¿Cuánto vale una ventaja de 8 años?", a: "El diferencial es de 6 puntos, es decir 3 M€ anuales. El valor actual a 10 % durante 8 años es 3 × 5,3349 = 16,0 M€." },
            { q: "¿Por qué las capacidades son mejor fuente de ventaja que los recursos?", a: "Porque los recursos se compran y los competidores también pueden adquirirlos. Las capacidades residen en rutinas organizativas construidas en el tiempo, con ambigüedad causal y complejidad social, lo que las hace mucho más costosas de replicar." },
            { q: "¿Cómo se comprueba objetivamente si una empresa tiene ventaja competitiva?", a: "Si su ROIC supera de forma persistente a su WACC y a la rentabilidad media de sus competidores del mismo sector. Una rentabilidad alta puntual puede deberse al sector, al ciclo o a la contabilidad." },
            { q: "¿Qué cambió el SEC 2010 respecto a la I+D?", a: "Pasó de tratarse como consumo intermedio a capitalizarse como formación de capital, dentro de los productos de propiedad intelectual. Es inversión y eleva el nivel del PIB. El capital organizativo, en cambio, sigue sin reconocerse." },
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
            { ref: "Grant, Dirección estratégica", nota: "el mejor tratamiento del enfoque de recursos y capacidades, con el marco VRIO aplicado a casos." },
            { ref: "Barney, trabajos sobre la visión basada en los recursos", nota: "el origen del marco y la discusión sobre las condiciones de inimitabilidad." },
            { ref: "Koller, Goedhart y Wessels, Valuation (McKinsey)", nota: "la evidencia empírica sobre persistencia y reversión del ROIC, que es lo que convierte esta ficha en cuantitativa." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 3 y anexo de activos", nota: "el tratamiento de los productos de propiedad intelectual y del fondo de comercio adquirido." },
          ],
        },
      ],
    },
  ],
};
