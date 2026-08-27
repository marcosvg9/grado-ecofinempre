/* Ficha 15.04 — Valores atípicos: escalón, impulso y cambio transitorio. */

export default {
  codigo: "15.04",
  titulo: "Valores atípicos: escalón, impulso y cambio transitorio",
  nivel: 3,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "Clasificar un dato raro como impulso o como escalón decide si la serie olvida el episodio al mes siguiente o lo recuerda para siempre. El contraste estadístico rara vez resuelve la duda, así que es una decisión de juicio con consecuencias permanentes sobre el dato publicado.",
  requiere: "15.02 Pre-ajuste RegARIMA · 15.03 Efectos de calendario · 4.06 Diagnóstico de la regresión",
  abre: "15.05 X-11 frente a SEATS · 15.07 Diagnósticos de calidad · 15.08 Política de revisiones",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **valor atípico** es una observación que el modelo no explica: se aparta de lo que cabría esperar dada la dinámica estimada. En el ajuste estacional importan por una razón muy concreta. Los filtros de la etapa de descomposición son promedios, y un promedio es sensible a los valores extremos; si un dato anómalo entra sin tratar en el cálculo de los factores estacionales, **contamina el factor de ese trimestre para todos los años**. Una huelga en un mayo concreto acabaría convertida en una característica permanente de todos los mayos.",
            "Por eso el pre-ajuste de la ficha 15.02 los detecta y los retira antes de descomponer. Pero retirarlos exige antes clasificarlos, y ahí está la dificultad del tema: **no todos los atípicos son iguales, y el tipo que se elija cambia la serie publicada de forma permanente**. Los tres tipos habituales son el impulso, el escalón y el cambio transitorio, y se distinguen por cuánto dura su efecto.",
            "El **impulso** —outlier aditivo, AO— afecta a una sola observación y desaparece. Es la huelga de un día, el error de registro, la entrega excepcional que se contabilizó en un mes y no en otro. La serie vuelve inmediatamente a donde estaba. El **escalón** —level shift, LS— desplaza el nivel de la serie de forma permanente: el cierre definitivo de una planta, un cambio de perímetro estadístico, una reforma que altera la base. Después del escalón la serie continúa, pero en otro nivel. El **cambio transitorio** —TC— es el intermedio: un salto que se absorbe gradualmente, con un decaimiento geométrico gobernado por un parámetro que por convención vale 0,7.",
            "La clasificación es donde el procedimiento deja de ser mecánico. Los programas detectan atípicos automáticamente comparando el estadístico t de cada candidato con un umbral crítico, y proponen un tipo. Pero **al final de la serie la distinción entre impulso y escalón es estadísticamente casi imposible**: cuando solo hay una observación después del episodio, un impulso y un escalón son indistinguibles en los datos, y solo el conocimiento del fenómeno permite decidir. Un analista que sepa que la fábrica ha cerrado definitivamente pondrá un escalón; otro que no lo sepa pondrá un impulso, y ambos ajustes pasarán todos los contrastes.",
            "Las consecuencias de equivocarse son asimétricas y conviene tenerlas claras. **Poner un impulso donde había un escalón** deja que el cambio de nivel se filtre a la tendencia poco a poco: la serie ajustada mostrará una caída suave y prolongada que no ocurrió así. **Poner un escalón donde había un impulso** hace que la serie olvide un episodio que sí era transitorio, y crea un desnivel artificial que arrastrará para siempre. Ninguno de los dos errores se detecta a simple vista en el gráfico final, y ese es el problema.",
            "Hay un criterio de prudencia ampliamente aceptado: **los escalones al final de la serie se tratan con especial cautela**, porque son los que peor se identifican y los que más daño hacen si se equivocan. Muchos institutos revisan manualmente los atípicos del último año y los fijan con criterio experto en lugar de dejarlos a la detección automática, precisamente porque la automática cambia de opinión con cada dato nuevo y eso genera revisiones que no vienen de la economía. La ficha 15.08 desarrolla esa tensión.",
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
            { nom: "Impulso (AO)", sub: "Afecta a un solo periodo.", cols: ["Perfil 1, 0, 0, 0, … · huelga de un día, error de registro"] },
            { nom: "Escalón (LS)", sub: "Desplaza el nivel para siempre.", cols: ["Perfil 1, 1, 1, 1, … · cierre de planta, cambio de perímetro"] },
            { nom: "Cambio transitorio (TC)", sub: "Se absorbe gradualmente.", cols: ["Perfil 1, α, α², α³, … con α = 0,7 por convención"] },
            { nom: "Atípico estacional (SO)", sub: "Menos frecuente, más traicionero.", cols: ["Cambia el patrón estacional de un periodo concreto"] },
            { nom: "Vida del cambio transitorio", sub: "Cuánto tarda en desvanecerse.", cols: ["Bajo el 10 % del impacto inicial en t+7"] },
            { nom: "Efecto acumulado del TC", sub: "Suma geométrica.", cols: ["1 / (1 − α) = 3,33 veces el impacto inicial"] },
            { nom: "Detección automática", sub: "Cómo los propone el programa.", cols: ["Estadístico t frente a un valor crítico según longitud de serie"] },
            { nom: "Zona de indistinción", sub: "Dónde falla el contraste.", cols: ["Al final de la serie, AO y LS no se distinguen"] },
            { nom: "Por qué importa retirarlos", sub: "El daño concreto que evitan.", cols: ["Un atípico sin tratar contamina el factor estacional de todos los años"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: el mismo dato raro, tres lecturas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Supóngase que en el tercer periodo de una serie aparece una observación diez puntos por encima de lo que el modelo esperaba. El programa detecta el atípico, pero la magnitud no dice de qué tipo es: lo que distingue a los tres es **qué ocurre después**, y eso hay que decidirlo.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Periodos desde el episodio", y: "Efecto" },
          dominio: { x: [0, 10], y: [-0.15, 1.4] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [0, 0.5, 1],
          series: [
            {
              nombre: "Escalón (LS)",
              color: "alerta",
              etiquetaEn: [4.0, 1.18],
              puntos: [[0, 0], [1, 0], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1]],
            },
            {
              nombre: "Cambio transitorio (TC)",
              color: "acento",
              etiquetaEn: [4.0, 0.72],
              puntos: [[0, 0], [1, 0], [2, 1], [3, 0.7], [4, 0.49], [5, 0.343], [6, 0.24], [7, 0.168], [8, 0.118], [9, 0.082], [10, 0.058]],
            },
            {
              nombre: "Impulso (AO)",
              color: "n2",
              trazo: "discontinuo",
              etiquetaEn: [7.4, 0.42],
              puntos: [[0, 0], [1, 0], [2, 1], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0]],
            },
          ],
          nota: "**Las tres curvas son idénticas hasta el periodo 2 y a partir de ahí no vuelven a parecerse.** Ese es exactamente el problema: si el episodio ocurre en el último dato disponible, las tres son compatibles con lo observado y el contraste estadístico no puede elegir. La decisión la toma quien conoce el fenómeno, no el programa.",
        },
        {
          tipo: "tabla",
          cabecera: ["Periodo", "Impulso (AO)", "Cambio transitorio (TC)", "Escalón (LS)"],
          filas: [
            ["t (el episodio)", "1,000", "1,000", "1,000"],
            ["t + 1", "0", "0,700", "1,000"],
            ["t + 3", "0", "0,343", "1,000"],
            ["t + 7", "0", "0,082", "1,000"],
            { celdas: ["Efecto acumulado", "1,00", "3,33", "infinito"], clase: "total" },
          ],
          nota: "El cambio transitorio cae por debajo del **10 % de su impacto inicial en t+7**, y su efecto acumulado es la suma geométrica 1 / (1 − 0,7) = **3,33 veces** el impacto del primer periodo. El escalón, en cambio, no se agota nunca: acumula indefinidamente. Elegir entre uno y otro no es afinar un decimal, es decidir si el episodio suma tres veces su impacto o infinitas.",
        },
        {
          tipo: "parrafos",
          items: [
            "Traducido a la serie del bloque, con un nivel en torno a 100 y un crecimiento subyacente del 0,5 % trimestral, un atípico de diez puntos equivale a **veinte trimestres de crecimiento**. Si se clasifica como escalón, la serie ajustada arrastrará esos diez puntos para siempre y todas las comparaciones posteriores partirán de un nivel distinto. Si se clasifica como impulso, la serie ajustada actuará como si el episodio no hubiera existido.",
            "Y aquí está el detalle que más cuesta aceptar: **el dato bruto no cambia en ningún caso**. Lo publicado como serie bruta es lo que se midió, con su atípico incluido. Lo que cambia es la serie ajustada, que es la que se comenta y sobre la que se decide. Dos versiones de la misma economía, ambas oficiales, ambas correctas dentro de su supuesto.",
            "Un caso real recurrente ilustra la asimetría. Ante una interrupción abrupta de la actividad —una catástrofe, un confinamiento—, la clasificación correcta suele ser una combinación: un **escalón** en el momento de la caída y otro en sentido contrario cuando se recupera, o un **cambio transitorio** si la recuperación es gradual. Tratarlo como impulso único sería negar que hubo varios periodos afectados; tratarlo como escalón permanente sería negar que hubo recuperación. La práctica en esos episodios fue precisamente combinar tipos, y las series de esos años llevan varios regresores de atípicos documentados.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué el atípico del último trimestre cambia de tipo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un instituto publica la serie ajustada de un trimestre con un descenso pronunciado que el programa clasifica automáticamente como **impulso**. Tres meses después, con un dato más, la detección automática lo reclasifica como **escalón**. La serie ajustada del trimestre anterior cambia, y con ella el crecimiento publicado. Nadie ha corregido ningún dato bruto.",
            "El mecanismo es exactamente el descrito: con una sola observación posterior al episodio, un impulso y un escalón producen predicciones casi idénticas y el contraste elige casi al azar entre ambos. Con dos o tres observaciones posteriores, la evidencia se acumula y el contraste se decide con firmeza. **La reclasificación no es un error del programa, es información nueva haciendo su trabajo.** Pero para el usuario de la serie es indistinguible de una revisión de datos.",
            "Esto plantea un dilema real de política estadística. Dejar la detección automática libre en el último año produce el mejor ajuste posible en cada momento, pero genera revisiones frecuentes que confunden. Fijar los atípicos manualmente y congelarlos hasta la revisión anual produce series más estables a costa de mantener durante meses una clasificación que se sabe subóptima. **La mayoría de los institutos elige lo segundo**, y la razón es que la estabilidad tiene valor por sí misma para quien usa la serie: una cifra que no cambia vale más que una ligeramente mejor que cambia cada trimestre.",
            "Hay un criterio práctico bastante robusto para el analista que no puede esperar. Ante un atípico reciente, conviene preguntarse por el **fenómeno económico** en lugar de por el estadístico: ¿hay una razón para pensar que el nivel de actividad ha cambiado de forma permanente? Un cierre definitivo, una reforma legal, un cambio en la cobertura de la estadística son argumentos para el escalón. Una huelga, un temporal, una entrega excepcional son argumentos para el impulso. **El conocimiento del sector resuelve en segundos lo que el contraste tarda dos años en decidir.**",
            "Merece la pena señalar el caso más traicionero, que es el **atípico estacional**. Cuando lo que cambia no es el nivel sino el propio patrón intraanual —una campaña comercial que se adelanta un mes de forma permanente, un cambio en el calendario escolar—, tratarlo como escalón o como impulso no arregla nada, porque el problema está en el componente estacional y no en el nivel. Los diagnósticos de la ficha 15.07 lo detectan como estacionalidad residual, y la solución pasa por un regresor específico o, si el cambio es estructural, por acortar la ventana de estimación de los factores.",
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
            { t: "Dejar un atípico sin tratar", d: "Si entra sin corregir en el cálculo de los factores estacionales, contamina el factor de ese periodo para todos los años, porque el factor se obtiene promediando el mismo trimestre a lo largo de la serie. Una huelga en un mayo concreto acaba convertida en una característica permanente de todos los mayos." },
            { t: "Aceptar sin revisar la clasificación automática del último año", d: "Al final de la serie, impulso y escalón son estadísticamente casi indistinguibles porque hay muy pocas observaciones posteriores. El programa elegirá uno y cambiará de opinión cuando llegue el dato siguiente, generando revisiones que el usuario no puede distinguir de correcciones de datos." },
            { t: "Confundir eliminar el atípico con corregir el dato bruto", d: "El dato bruto publicado no cambia: es lo que se midió, con el episodio incluido. Lo que se modifica es la serie ajustada, que es sobre la que se comenta y se decide. Ambas versiones son oficiales y ambas son correctas dentro de su supuesto." },
            { t: "Poner un escalón donde había un impulso", d: "Hace que la serie ajustada olvide un episodio que sí era transitorio y crea un desnivel artificial que se arrastra indefinidamente. Como el escalón acumula sin límite frente al 3,33 del cambio transitorio, el error no se diluye con el tiempo: crece." },
            { t: "Poner un impulso donde había un escalón", d: "El cambio de nivel real se filtra poco a poco hacia la tendencia, y la serie ajustada muestra un descenso suave y prolongado que no ocurrió así. Es el error más difícil de detectar a posteriori, porque el resultado tiene buen aspecto en el gráfico." },
            { t: "Tratar una interrupción prolongada como un único impulso", d: "Cuando el episodio afecta a varios periodos —una catástrofe, un confinamiento— la clasificación correcta suele combinar tipos: escalón de caída y escalón de recuperación, o cambio transitorio si la vuelta es gradual. Forzar un impulso único niega que hubo varios periodos afectados." },
            { t: "Olvidar el atípico estacional", d: "Cuando lo que cambia es el patrón intraanual y no el nivel, ni el impulso ni el escalón arreglan nada, porque el problema está en el componente estacional. Se manifiesta como estacionalidad residual en los diagnósticos y exige un regresor específico o acortar la ventana de estimación de los factores." },
            { t: "Bajar el umbral de detección para capturar más atípicos", d: "Un umbral laxo detecta atípicos donde solo hay ruido, y cada uno consume un grado de libertad y retira variabilidad legítima de la serie. El resultado es una serie ajustada excesivamente suave que ha absorbido como anomalías movimientos económicos reales." },
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
            "En contabilidad nacional muchos atípicos no son anomalías de la economía sino consecuencias de decisiones del propio sistema estadístico, y esa distinción cambia cómo deben tratarse.",
          ],
          lista: [
            "Los **cambios de perímetro** producen escalones legítimos que no reflejan actividad. Cuando una unidad se reclasifica entre sectores institucionales según los criterios de la ficha 12.01 —una empresa pública que pasa a computar dentro de las administraciones públicas (**S.13**)—, el agregado da un salto que es puramente contable. Debe tratarse como escalón, y además documentarse, porque el usuario que compare con series antiguas no lo verá.",
            "El sistema tiene una categoría propia para esto en los balances: las **otras variaciones del volumen de activos (B.10.2)** de la ficha 13.10 recogen precisamente apariciones, desapariciones y reclasificaciones que no son operaciones económicas. Un atípico de tipo escalón en una serie de stocks suele tener su contrapartida ahí, y comprobarlo es una buena forma de distinguir el cambio real del contable.",
            "Los **cambios de base y de clasificación** son la otra fuente sistemática. Al pasar de una base a otra, o al cambiar la clasificación de actividades, la serie salta por construcción. Lo correcto no es tratarlo como atípico sino **enlazar las series**, porque un escalón dejaría el salto dentro de la serie ajustada como si fuera economía. La ficha 10.08 trata ese enlace con detalle.",
            "Un matiz sobre los **saldos**. Un atípico de diez puntos en una serie de producción es un 10 % si el nivel es 100. En un saldo próximo a cero —la capacidad o necesidad de financiación (**B.9**) de la ficha 12.09— los diez puntos pueden ser un cambio de signo. Los contrastes de atípicos, que trabajan con desviaciones tipificadas, se comportan mal en series que cruzan el cero, y ese es un motivo adicional por el que los saldos son difíciles de ajustar.",
            "Por último, la coherencia con la revisión anual. Cuando las cuentas anuales definitivas revisan un dato bruto, el atípico estimado sobre el dato antiguo puede dejar de estar justificado. **Los atípicos hay que reestimarlos con la serie revisada**, y no arrastrarlos, porque un regresor que corregía una anomalía que ya no existe retira variabilidad legítima.",
          ],
          cierre:
            "La consecuencia práctica: antes de clasificar un atípico conviene preguntarse si lo produjo la economía o el sistema estadístico. Si fue el sistema, muchas veces la respuesta correcta no es un regresor sino un enlace de series.",
        },
      ],
    },

    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            {
              q: "¿Por qué un atípico sin tratar es especialmente dañino en el ajuste estacional?",
              a: "Porque los factores estacionales se estiman promediando cada periodo a lo largo de los años, y un promedio es sensible a los valores extremos. Un dato anómalo de un mayo concreto contamina el factor de mayo para todos los años de la serie, convirtiendo un episodio irrepetible en una característica permanente del calendario.",
            },
            {
              q: "Un cambio transitorio con α = 0,7 tiene un impacto inicial de 10. ¿Cuánto queda en t+3 y cuál es su efecto acumulado?",
              a: "En t+3 queda 10 · 0,7³ = 3,43, es decir un 34,3 % del impacto inicial; cae por debajo del 10 % en t+7. El efecto acumulado es la suma geométrica 1/(1 − 0,7) = 3,33 veces el impacto inicial, o sea 33,3. El escalón, en cambio, acumula sin límite: por eso elegir entre ambos no es afinar un decimal.",
            },
            {
              q: "¿Por qué es tan difícil distinguir un impulso de un escalón al final de la serie?",
              a: "Porque lo que los distingue es qué ocurre después del episodio, y al final de la serie hay muy pocas observaciones posteriores. Con una sola, ambos producen predicciones casi idénticas y el contraste elige casi al azar. Con dos o tres, la evidencia se acumula y el contraste se decide, lo que provoca reclasificaciones que el usuario percibe como revisiones.",
            },
            {
              q: "Una empresa pública se reclasifica dentro del sector administraciones públicas y el agregado salta. ¿Es un atípico?",
              a: "Es un escalón, pero de origen contable y no económico: no ha cambiado la actividad, ha cambiado la sectorización. Debe tratarse como escalón y documentarse, porque quien compare con series antiguas no lo verá. Si el salto procede de un cambio de base o de clasificación, lo correcto no es un regresor sino enlazar las series.",
            },
            {
              q: "¿Qué riesgo tiene bajar el umbral de detección para capturar más atípicos?",
              a: "Que se detecten atípicos donde solo hay ruido. Cada uno consume un grado de libertad y retira variabilidad de la serie, así que el resultado es una serie ajustada demasiado suave que ha absorbido como anomalías movimientos económicos reales. La suavidad no es señal de calidad: los filtros suavizan por construcción y el resultado siempre parece creíble.",
            },
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
            { ref: "Chen y Liu, «Joint Estimation of Model Parameters and Outlier Effects in Time Series»", nota: "el procedimiento de detección iterativa de atípicos que implementan casi todos los programas actuales, con la tipología completa." },
            { ref: "Gómez y Maravall, Programs TRAMO and SEATS: Instructions for the User", nota: "el tratamiento concreto de los tipos de atípico en el pre-ajuste y los criterios de umbral según la longitud de la serie." },
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment, capítulo de atípicos", nota: "las recomendaciones sobre revisión manual del último año, documentación de los regresores y tratamiento de episodios prolongados." },
            { ref: "Notas metodológicas de los institutos sobre el tratamiento estadístico de la pandemia", nota: "el ejemplo mejor documentado de combinación de tipos de atípico ante una interrupción prolongada, con las decisiones justificadas serie a serie." },
          ],
        },
      ],
    },
  ],
};
