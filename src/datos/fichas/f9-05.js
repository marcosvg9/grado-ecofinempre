/* Ficha 9.05 — Diseno organizativo y estructuras. */

export default {
  codigo: "9.05",
  titulo: "Diseño organizativo y estructuras",
  nivel: 2,
  bloque: "Dirección de empresas",
  tiempo: "4 h",
  nucleo:
    "Toda organización se enfrenta al mismo problema: dividir el trabajo para especializarse y después coordinarlo. Cada estructura resuelve ese dilema de una forma distinta, y la elección debe seguir a la estrategia, porque cuando no lo hace la estrategia no se ejecuta.",
  requiere: "9.04 Estrategias competitivas",
  abre: "9.06 Dirección de personas · 6.05 Control por desviaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Diseñar una organización consiste en resolver dos problemas simultáneos y en tensión. La **división del trabajo** permite especializarse y ganar eficiencia, pero fragmenta la tarea. La **coordinación** vuelve a unir esas piezas, y cuesta dinero y tiempo. Cuanto más se divide, más hay que coordinar: toda estructura es un punto de equilibrio entre ambas fuerzas.",
            "Mintzberg identificó los mecanismos por los que se coordina, ordenados de menos a más formales. La **adaptación mutua**, es decir, la comunicación informal directa, que funciona en equipos pequeños y vuelve a ser el mecanismo dominante en los muy complejos. La **supervisión directa**, cuando alguien da instrucciones y controla. Y la **normalización**, que puede ser de procesos —se prescribe cómo hacer el trabajo—, de resultados —se fija el objetivo y se deja libertad de método— o de habilidades, cuando se contrata a alguien formado de tal modo que ya sabe qué hacer sin que nadie se lo diga.",
            "De esas combinaciones salen las estructuras básicas. La **funcional** agrupa por especialidad —producción, ventas, finanzas— y maximiza la eficiencia técnica a costa de dificultar la coordinación entre funciones y de que nadie tenga responsabilidad completa sobre un producto o un cliente. La **divisional** agrupa por producto, mercado o geografía, con unidades que tienen cuenta de resultados propia; gana capacidad de respuesta y duplica funciones. La **matricial** superpone ambas, y su coste conocido es que cada persona responde ante dos jefes con prioridades que no siempre coinciden.",
            "Dos variables cuantifican buena parte del diseño. El **ámbito de control** es el número de subordinados que dependen de un mismo responsable, y determina cuántos niveles jerárquicos hacen falta para una plantilla dada. El grado de **centralización** indica dónde se toman las decisiones. Ampliar el ámbito de control aplana la organización, abarata la estructura y obliga a delegar, porque un jefe con quince personas no puede supervisar en detalle.",
            "**La estructura sigue a la estrategia**, en la formulación de Chandler, y cuando no lo hace la estrategia no se ejecuta. Una empresa que decide diferenciarse por servicio al cliente y mantiene una estructura funcional con decisiones centralizadas está pidiendo capacidad de respuesta a una organización diseñada para lo contrario. Y el reverso también ocurre: estructuras que quedaron de una estrategia anterior condicionan las decisiones futuras, porque la organización tiende a proponer lo que sabe ejecutar.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Estructura", "Agrupa por", "Coste característico"],
          filas: [
            { nom: "Simple", sub: "Empresario y colaboradores directos", cols: ["Nada: supervisión directa", "No escala más allá de cierto tamaño"] },
            { nom: "Funcional", sub: "Un negocio, entorno estable", cols: ["Especialidad técnica", "Coordinación entre funciones, nadie responde del conjunto"] },
            { nom: "Divisional", sub: "Varios productos o mercados", cols: ["Producto, cliente o geografía", "Duplicación de funciones, competencia interna por recursos"] },
            { nom: "Matricial", sub: "Proyectos complejos, doble prioridad", cols: ["Función y proyecto a la vez", "Doble dependencia, conflicto y lentitud en decidir"] },
            { nom: "Por procesos o equipos", sub: "Entornos cambiantes", cols: ["Flujo de trabajo completo", "Exige personas polivalentes y mucha confianza"] },
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
            { nom: "Niveles jerárquicos necesarios", sub: "Para una plantilla dada y un ámbito de control s.", cols: ["Niveles ≈ log_s(N)"] },
            { nom: "Posiciones de mando", sub: "Suma de la pirámide por encima de la base.", cols: ["M ≈ N / (s − 1)"] },
            { nom: "Canales de comunicación en un equipo", sub: "Crece con el cuadrado del tamaño.", cols: ["C = n × (n − 1) / 2"] },
            { nom: "Coste de coordinación", sub: "Por qué los equipos grandes se ralentizan.", cols: ["Crece más que proporcionalmente con n"] },
            { nom: "Grado de centralización", sub: "Medida operativa habitual.", cols: ["Proporción de decisiones que requieren aprobación superior"] },
            { nom: "Ratio de estructura", sub: "Indicador de peso de la organización indirecta.", cols: ["Personal indirecto / personal total"] },
          ],
          nota: "La fórmula de los **canales de comunicación** explica un fenómeno muy conocido: un equipo de 5 personas tiene 10 canales; uno de 12, sesenta y seis. Multiplicar por 2,4 el tamaño multiplica por 6,6 la complejidad de coordinarlo.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el coste de la jerarquía",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa con **5.000 empleados de base** compara dos diseños: uno con ámbito de control estrecho, de **5 personas por responsable**, y otro amplio, de **10**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Nivel", "Ámbito de 5", "Ámbito de 10"],
          filas: [
            ["Base", "5.000", "5.000"],
            ["Mandos de primer nivel", "1.000", "500"],
            ["Segundo nivel", "200", "50"],
            ["Tercer nivel", "40", "5"],
            ["Cuarto nivel", "8", "1 (dirección)"],
            ["Quinto nivel", "2", "—"],
            ["Dirección", "1", "—"],
            { celdas: ["Total posiciones de mando", "1.251", "556"], clase: "total" },
          ],
          nota: "Duplicar el ámbito de control **reduce las posiciones de mando en un 56 %** y baja de siete niveles a cinco. Con un coste medio de 60.000 € por mando, la diferencia son unos **41,7 millones de euros anuales** de estructura. Es la aritmética que hay detrás de casi todos los proyectos de aplanamiento organizativo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el efecto sobre la velocidad de decisión.** Con siete niveles, una propuesta que nace en la base y necesita aprobación de la dirección atraviesa seis escalones. Si cada uno consume una media de cinco días —revisar, consultar, decidir—, el ciclo completo es de **treinta días laborables**, seis semanas. Con cinco niveles baja a veinte días. La diferencia no es administrativa: en un entorno competitivo, decidir un mes más tarde puede equivaler a no decidir.",
            "**Pero el ámbito amplio tiene su precio.** Un responsable con diez subordinados no puede supervisar en detalle, así que la organización tiene que sustituir la supervisión directa por otro mecanismo de coordinación: normalización de resultados —fijar objetivos y medir— o de habilidades —contratar personas que no necesiten instrucciones—. **Aplanar sin cambiar el mecanismo de coordinación produce descontrol, no agilidad.** Ese es el error más frecuente de los proyectos de reducción de niveles.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Tamaño del equipo", "Canales de comunicación", "Incremento"],
          filas: [
            ["4 personas", "6", "—"],
            ["6 personas", "15", "×2,5"],
            ["9 personas", "36", "×6,0"],
            { celdas: ["12 personas", "66", "×11,0"], clase: "total" },
          ],
          nota: "Triplicar el tamaño de un equipo multiplica por once los canales que hay que mantener. Es la razón por la que los equipos de trabajo efectivos rara vez superan las ocho o nueve personas, y por la que añadir gente a un proyecto retrasado suele retrasarlo más.",
        },
      ],
    },
    {
      titulo: "Caso práctico: cuando la estructura bloquea la estrategia",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa industrial decide pasar de vender producto a vender **soluciones completas**: producto más instalación, mantenimiento y servicio continuado. Es una estrategia de diferenciación razonable, aprobada por el consejo y comunicada a toda la organización. Dos años después no ha ocurrido nada.",
            "**La estructura sigue siendo funcional.** Producción responde de coste unitario y ocupación de planta; comercial, de unidades vendidas; posventa, de coste del servicio. **Nadie responde del cliente completo**, ni de la rentabilidad de la solución integral, que es precisamente lo que la estrategia pretendía vender. Cada área optimiza su indicador y el conjunto no se mueve.",
            "**Los incentivos refuerzan lo anterior.** El variable de comercial depende de volumen facturado, así que vender un contrato de servicio a cinco años —que factura poco el primer año— es peor para el comercial que vender una máquina, aunque sea mejor para la empresa. **El sistema de incentivos produce el comportamiento que mide**, como en la ficha 6.05, y aquí mide exactamente lo contrario de lo que la estrategia necesita.",
            "**Y el sistema de información no ayuda.** La contabilidad analítica está organizada por producto y por centro de coste, no por cliente ni por contrato. Nadie puede decir si una solución integral es rentable, porque las cifras no se agregan de esa manera. Es el problema de la ficha 6.02 aplicado al diseño organizativo: el sistema de costes debe copiar la estructura de lo que se quiere gestionar.",
            "**Lo que haría falta**, en orden. Crear una unidad con responsabilidad completa sobre el cliente y cuenta de resultados propia, aunque duplique alguna función. Rediseñar el variable para que retribuya el valor del contrato completo y no la facturación del primer año. Y reorganizar la analítica por cliente y contrato para poder medir si funciona.",
            "**La lección general** es que anunciar una estrategia no la implanta. Una organización ejecuta lo que su estructura, sus incentivos y sus sistemas de medición le permiten ejecutar, y esos tres elementos suelen estar diseñados para la estrategia anterior. Cambiar la estrategia sin cambiarlos produce el resultado más común de la dirección estratégica: **presentaciones nuevas y comportamientos idénticos**.",
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
            { t: "Cambiar la estrategia sin cambiar la estructura", d: "La organización ejecuta lo que su estructura, sus incentivos y sus sistemas de medición le permiten. Anunciar una estrategia nueva sobre una organización diseñada para la anterior produce presentaciones nuevas y comportamientos idénticos." },
            { t: "Aplanar sin sustituir el mecanismo de coordinación", d: "Ampliar el ámbito de control hace imposible la supervisión directa, así que hay que reemplazarla por normalización de resultados o de habilidades. Reducir niveles sin ese cambio no produce agilidad, produce descontrol." },
            { t: "Adoptar la estructura matricial por moda", d: "Resuelve un problema real —doble prioridad simultánea entre función y proyecto— a un coste alto: doble dependencia, conflictos de prioridad y lentitud en decidir. Sin ese problema, sus costes no compensan." },
            { t: "Reorganizar sin tocar los incentivos", d: "Un organigrama nuevo con el mismo sistema de retribución variable produce el mismo comportamiento. Los incentivos suelen ser más determinantes que las líneas del organigrama, y se revisan mucho menos." },
            { t: "Crear divisiones sin darles responsabilidad real", d: "Una división sin capacidad de decidir sobre precios, inversión o personal tiene los costes de la estructura divisional —duplicación de funciones— y ninguno de sus beneficios. Es de las reorganizaciones más caras y más frecuentes." },
            { t: "Ignorar la organización informal", d: "Las relaciones reales por las que circula la información rara vez coinciden con el organigrama. Una reorganización que rompe redes informales eficaces puede empeorar el funcionamiento aunque el diseño formal sea mejor sobre el papel." },
            { t: "Añadir personas a un equipo lento", d: "Los canales de comunicación crecen con el cuadrado del tamaño. Pasar de seis a doce personas multiplica por más de cuatro el esfuerzo de coordinación, y en proyectos ya retrasados el efecto neto suele ser un retraso mayor." },
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
            "El tamaño y la estructura organizativa de las empresas de un país son un objeto directo de medición estadística, y en España un asunto de política económica.",
          ],
          lista: [
            "El **Directorio Central de Empresas (DIRCE)** que elabora el INE registra el tejido empresarial español por tamaño, actividad y forma jurídica. Es la fuente básica para conocer la distribución por tamaño.",
            "Esa distribución muestra un tejido con **predominio muy marcado de empresas muy pequeñas** y un peso de las medianas y grandes inferior al de otras economías europeas comparables. Buena parte del debate sobre la productividad española gira en torno a ese hecho.",
            "El vínculo con la productividad es doble: las empresas mayores acceden a economías de escala y a inversión en tecnología, y además la estructura organizativa que exige un tamaño mayor —normalización, delegación, sistemas de medición— es en sí misma una fuente de eficiencia. Es el **capital organizativo** que la ficha 9.03 señalaba como no medido.",
            "Las **unidades de actividad económica local** del SEC son, en el fondo, una traducción estadística del problema de diseño organizativo: cómo descomponer una empresa en partes homogéneas cuando internamente está organizada de otra manera.",
            "Y la distinción entre **personal directo e indirecto** que esta ficha cuantifica aparece en las estadísticas estructurales de empresa como composición del empleo por ocupación, que alimenta la descomposición del valor añadido por rentas.",
          ],
          cierre:
            "El puente más útil es el del tamaño empresarial: lo que en esta ficha es una decisión de diseño de una empresa concreta, agregado se convierte en una característica estructural de la economía española con efectos medibles sobre la productividad.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "5.000 empleados de base y ámbito de control de 10. ¿Cuántos niveles de mando hacen falta?", a: "Unos cuatro: 500, 50, 5 y dirección. Con ámbito de 5 harían falta seis niveles y más del doble de posiciones de mando." },
            { q: "¿Por qué un equipo de 12 personas coordina peor que dos de 6?", a: "Porque los canales de comunicación crecen con el cuadrado del tamaño: 66 en un equipo de 12 frente a 15 en cada uno de 6. La coordinación interna de dos equipos pequeños más su interfaz suele ser menos costosa que la de uno grande." },
            { q: "¿Qué hay que cambiar al ampliar el ámbito de control?", a: "El mecanismo de coordinación. Con muchos subordinados la supervisión directa es imposible, así que hay que sustituirla por normalización de resultados —objetivos medibles— o de habilidades —personas que no necesiten instrucciones—." },
            { q: "Una empresa anuncia una estrategia de servicio al cliente y no pasa nada. ¿Dónde mirar?", a: "A la estructura, a los incentivos y al sistema de información. Si nadie responde del cliente completo, si el variable retribuye volumen facturado y si la analítica está organizada por producto, la organización no puede ejecutar esa estrategia aunque quiera." },
            { q: "¿Por qué importa el tamaño empresarial en el debate sobre la productividad española?", a: "Porque el tejido español está muy sesgado hacia empresas muy pequeñas, que acceden peor a economías de escala, a inversión tecnológica y a las estructuras organizativas —normalización, delegación, medición— que son en sí mismas fuente de eficiencia." },
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
            { ref: "Mintzberg, La estructuración de las organizaciones", nota: "la referencia. Mecanismos de coordinación y configuraciones estructurales, con una lógica que se sostiene décadas después." },
            { ref: "Galbraith, Designing Organizations", nota: "el modelo estrella, que integra estructura, procesos, incentivos y personas. Muy útil para el caso práctico de esta ficha." },
            { ref: "Iborra et al., Fundamentos de dirección de empresas", nota: "el tratamiento en manual español, con la relación entre estrategia y estructura." },
            { ref: "INE, DIRCE y estadísticas estructurales de empresas", nota: "la distribución del tejido empresarial español por tamaño y su relación con la productividad." },
          ],
        },
      ],
    },
  ],
};
