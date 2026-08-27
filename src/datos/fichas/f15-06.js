/* Ficha 15.06 — JDemetra+: herramienta, especificaciones y flujo de trabajo. */

export default {
  codigo: "15.06",
  titulo: "JDemetra+: herramienta, especificaciones y flujo de trabajo",
  nivel: 3,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "4 h",
  nucleo:
    "La herramienta recomendada por Eurostat para el sistema estadístico europeo. Su valor no está en calcular más rápido sino en que cada especificación es una decisión documentada: entender qué delega cada una es entender qué se está dejando en manos del programa.",
  requiere: "15.05 X-11 frente a SEATS · 15.02 Pre-ajuste RegARIMA · 15.03 Efectos de calendario",
  abre: "15.07 Diagnósticos de calidad · 15.08 Política de revisiones · 15.09 Benchmarking",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**JDemetra+** es software libre para ajuste estacional desarrollado por el Banco Nacional de Bélgica en colaboración con el Bundesbank y Eurostat, y es la herramienta que el sistema estadístico europeo recomienda para producir series ajustadas. Su existencia responde a un problema institucional antes que técnico: si cada instituto usa su propio programa y sus propias opciones, las series nacionales dejan de ser comparables por razones de método, y ese es precisamente el problema que la ficha 15.01 describía al explicar por qué dos institutos pueden publicar cifras distintas.",
            "Su rasgo de diseño más útil es que **implementa las dos familias de la ficha 15.05 dentro del mismo marco**: TRAMO-SEATS y X-13ARIMA-SEATS. La misma serie se puede ajustar por ambos caminos, con los mismos regresores de calendario y los mismos atípicos, y comparar los resultados sin cambiar de programa ni de formato de datos. Eso convierte la comparación de métodos, que antes era un ejercicio incómodo, en una operación rutinaria.",
            "El trabajo se organiza en **espacios de trabajo** que agrupan tres cosas: las series, las **especificaciones** que se les aplican y los **calendarios** nacionales. Dentro de un espacio de trabajo, un *SAProcessing* es un conjunto de series que se procesan juntas con la misma configuración, que es como trabaja un instituto: no se ajusta una serie, se ajustan cientos a la vez y se revisan las que fallan algún diagnóstico. Esa estructura es la que hace posible el trabajo en producción.",
            "Las **especificaciones** son el concepto central y merecen entenderse bien. Son plantillas predefinidas, nombradas RSA0 a RSA5, que forman una escalera de automatización creciente. En el escalón más bajo el programa no decide casi nada: aplica el modelo aerolínea de la ficha 15.02 sin buscar atípicos ni corregir calendario. Cada escalón siguiente **delega una decisión más**: primero la transformación logarítmica y la detección de atípicos, después los regresores de calendario, después la identificación automática del modelo ARIMA, y en el último escalón la especificación detallada de días de la semana. Los contenidos exactos difieren ligeramente entre la rama TRAMO-SEATS y la rama X-13, pero la lógica de la escalera es la misma.",
            "La tentación evidente es usar siempre el escalón más alto, y es un error. **Cada decisión delegada consume grados de libertad y añade una fuente de inestabilidad**: si el programa reidentifica el modelo o reclasifica un atípico con cada publicación, la serie se revisa por motivos que no tienen que ver con la economía, como advertía la ficha 15.04. La práctica recomendada es explorar con una especificación automática, examinar lo que ha decidido, y después **fijar esas decisiones en una especificación propia** que se congela durante el año.",
            "Para producción existe el **cruncher**, una utilidad de línea de comandos que ejecuta un espacio de trabajo entero sin abrir la interfaz gráfica y vuelca los resultados y los diagnósticos. Es lo que permite integrar el ajuste en una cadena automatizada que se lanza cada mes. Y existe integración con **R**, que ha desplazado buena parte del trabajo exploratorio y de la producción de informes a los flujos habituales de análisis, sin renunciar a que el cálculo lo haga el mismo motor que usa el instituto.",
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
            { nom: "Qué es", sub: "Software libre, no un producto comercial.", cols: ["Desarrollado por el Banco Nacional de Bélgica con Bundesbank y Eurostat"] },
            { nom: "Por qué existe", sub: "El motivo es institucional.", cols: ["Un método común hace comparables las series nacionales"] },
            { nom: "Los dos motores", sub: "En un mismo marco.", cols: ["TRAMO-SEATS y X-13ARIMA-SEATS sobre los mismos datos"] },
            { nom: "Espacio de trabajo", sub: "La unidad organizativa.", cols: ["Series + especificaciones + calendarios"] },
            { nom: "SAProcessing", sub: "Cómo se trabaja en producción.", cols: ["Cientos de series con una configuración común"] },
            { nom: "Escalera RSA0–RSA5", sub: "Automatización creciente.", cols: ["Cada escalón delega una decisión más al programa"] },
            { nom: "Calendarios", sub: "Definibles por país y por rama.", cols: ["Festivos nacionales, autonómicos y calendarios propios"] },
            { nom: "Cruncher", sub: "Para la cadena de producción.", cols: ["Ejecuta el espacio de trabajo sin interfaz gráfica"] },
            { nom: "Práctica recomendada", sub: "Explorar, fijar, congelar.", cols: ["Automático para explorar · especificación propia para publicar"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: qué cuesta cada escalón de la escalera",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Subir un escalón de automatización no es gratis: cada decisión delegada se traduce en parámetros que hay que estimar, y los parámetros se pagan con observaciones. Combinando esto con el recuento de la ficha 15.02 —una serie trimestral pierde cinco observaciones por las diferencias— se ve enseguida qué especificaciones son viables con qué longitud de serie.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Especificación", "Qué decide el programa", "Parámetros típicos"],
          filas: [
            ["RSA0", "Nada: aerolínea fijo, sin atípicos ni calendario", "2"],
            ["RSA1", "Transformación y atípicos", "4"],
            ["RSA2", "Lo anterior más calendario y Semana Santa", "6"],
            ["RSA3", "Identificación automática del modelo y atípicos", "5"],
            ["RSA4", "Lo anterior más calendario y Semana Santa", "7"],
            { celdas: ["RSA5", "Lo anterior con días de la semana detallados", "12"], clase: "total" },
          ],
          nota: "Los recuentos son **típicos, no exactos**: dependen de cuántos atípicos detecte el programa y de qué modelo identifique. RSA3 tiene menos parámetros que RSA2 porque no corrige calendario, aunque esté más arriba en la escalera: la numeración no es una escala de complejidad sino de qué se delega.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Especificación (RSA)", y: "Parámetros / observaciones" },
          dominio: { x: [0, 5], y: [0, 18] },
          marcasX: [0, 1, 2, 3, 4, 5],
          marcasY: [0, 5, 10, 15],
          series: [
            {
              nombre: "Observaciones con 5 años",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [2.9, 15.9],
              puntos: [[0, 15], [5, 15]],
            },
            {
              nombre: "Parámetros estimados",
              color: "acento",
              etiquetaEn: [0.15, 13.0],
              puntos: [[0, 2], [1, 4], [2, 6], [3, 5], [4, 7], [5, 12]],
            },
            {
              nombre: "Observaciones con 3 años",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [0.15, 8.3],
              puntos: [[0, 7], [5, 7]],
            },
          ],
          nota: "Con **tres años de datos trimestrales quedan siete observaciones efectivas**, y la línea de parámetros las alcanza ya en RSA4 y las supera claramente en RSA5. Es decir: en una serie corta, la especificación más automática estima más parámetros que datos tiene. Con cinco años hay quince observaciones y RSA5 deja tres grados de libertad, que sigue siendo poco. **La escalera de automatización solo es utilizable de arriba abajo si la serie es larga.**",
        },
        {
          tipo: "parrafos",
          items: [
            "El error que este gráfico previene es muy común: abrir la herramienta, elegir la especificación más completa porque suena a más rigurosa, y publicar. En una serie mensual larga —diez años son 120 observaciones, 107 efectivas— RSA5 es perfectamente razonable. En una serie trimestral de cinco años es una temeridad, y el programa no lo impedirá: producirá una salida de aspecto impecable.",
            "Conviene añadir un matiz sobre los **calendarios**, porque es donde la herramienta aporta algo que no se ve en la escalera. Permite definir calendarios nacionales con sus festivos, incluidos los de ámbito regional, y asignar calendarios distintos a series distintas. Para España eso importa: los festivos autonómicos hacen que el número de días hábiles difiera entre comunidades, y una serie regional ajustada con el calendario nacional arrastra un residuo sistemático. Es la aplicación práctica de lo que la ficha 15.03 planteaba en abstracto.",
            "Y una advertencia sobre la **reproducibilidad**, que en estadística oficial no es un detalle. Un ajuste hecho con especificación automática no es reproducible en sentido estricto: al ejecutarlo dentro de un año, con más datos, el programa puede elegir otro modelo y otros atípicos, y devolver otra serie. Un ajuste con especificación fija sí lo es. Por eso el flujo recomendado termina siempre en una **especificación propia guardada en el espacio de trabajo**, que es el objeto que se archiva y se documenta, no la serie resultante.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: montar el ajuste de una estadística nueva",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Supóngase que hay que empezar a publicar ajustada una estadística trimestral que hasta ahora solo salía en bruto. El recorrido con la herramienta ilustra el flujo completo del bloque, y el orden de los pasos no es negociable.",
            "**Primero, comprobar que hay estacionalidad.** No todas las series la tienen, y ajustar una serie sin patrón estacional identificable introduce ruido y puede crear estacionalidad espuria, como advertía la ficha 15.01. La herramienta incluye contrastes específicos para esto, y si el resultado es negativo la decisión correcta es publicar la serie sin ajustar y documentarlo.",
            "**Segundo, explorar con una especificación automática.** Se aplica RSA4 o RSA5 según la longitud, y se examina qué ha decidido el programa: qué transformación ha elegido, qué modelo ARIMA ha identificado, qué atípicos ha detectado y de qué tipo, si el calendario resulta significativo. Este paso es de diagnóstico, no de producción: sirve para saber cómo es la serie.",
            "**Tercero, revisar con criterio.** Aquí es donde entra el conocimiento del fenómeno que la ficha 15.04 reclamaba. ¿Ese escalón que ha detectado corresponde a un cambio real o a un cambio de perímetro estadístico? ¿Tiene sentido que esta rama responda a la Semana Santa? ¿El modelo identificado es estable o cambia si se quita el último año? Las decisiones que sobrevivan a ese examen se fijan; las dudosas se resuelven con la opción más conservadora.",
            "**Cuarto, congelar y documentar.** Las decisiones se guardan en una especificación propia dentro del espacio de trabajo, que pasa a ser el objeto de referencia. A partir de ahí, cada trimestre se reejecuta con esa especificación fija —normalmente con el cruncher, dentro de la cadena automatizada—, se revisan los diagnósticos de la ficha 15.07, y **solo una vez al año se reconsidera la especificación completa**. Esa cadencia es la política de revisiones de la ficha 15.08, y es lo que hace que la serie publicada sea estable y explicable.",
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
            { t: "Elegir la especificación más automática por defecto", d: "Cada decisión delegada consume grados de libertad y añade inestabilidad. En una serie trimestral de tres años, RSA5 estima más parámetros que observaciones efectivas quedan, y el programa no avisará: producirá una salida de aspecto impecable. La especificación debe elegirse en función de la longitud y del comportamiento de la serie." },
            { t: "Publicar con especificación automática", d: "Un ajuste automático no es reproducible: al reejecutarlo con más datos, el programa puede identificar otro modelo y otros atípicos y devolver otra serie. Lo que se archiva y documenta debe ser una especificación fija, no el resultado, y esa es la única forma de poder recalcular años después lo publicado hoy." },
            { t: "Ajustar sin comprobar antes que hay estacionalidad", d: "Aplicar el procedimiento a una serie sin patrón estacional identificable no la deja igual: introduce ruido y puede crear estacionalidad donde no la había. El primer paso del flujo es siempre un contraste de presencia, y si sale negativo la serie se publica sin ajustar." },
            { t: "Aceptar los atípicos detectados sin examinarlos", d: "La detección automática propone tipos, y al final de la serie impulso y escalón son casi indistinguibles. Revisar manualmente los atípicos del último año es práctica habitual precisamente porque la automática cambia de opinión con cada dato nuevo, generando revisiones ajenas a la economía." },
            { t: "Usar el calendario nacional para series regionales", d: "Los festivos autonómicos hacen que el número de días hábiles difiera entre comunidades. Una serie regional ajustada con el calendario nacional arrastra un residuo sistemático que aparecerá como estacionalidad residual. La herramienta permite definir calendarios propios precisamente para esto." },
            { t: "Confundir la numeración de la escalera con complejidad creciente", d: "RSA3 tiene menos parámetros que RSA2 porque no corrige calendario, pese a estar más arriba. La numeración indica qué se delega, no cuánto se estima. Elegir por el número sin mirar qué contiene cada especificación lleva a decisiones arbitrarias." },
            { t: "Comparar resultados de las dos ramas sin igualar las opciones", d: "TRAMO-SEATS y X-13 pueden compararse dentro de la herramienta, pero solo tiene sentido si se les dan los mismos regresores de calendario y los mismos atípicos. Comparar dos ajustes que además difieren en el pre-ajuste no mide la diferencia entre métodos de descomposición." },
            { t: "Tratar la herramienta como una caja que resuelve el problema", d: "Calcula deprisa y documenta bien, pero todas las decisiones del bloque siguen siendo del analista: transformación, modelo, atípicos, calendario, filtros, agregación. Lo que aporta es hacerlas explícitas y archivables, no eliminarlas." },
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
            "La adopción de una herramienta común no es una cuestión informática: es lo que hace exigible la comparabilidad entre países que el sistema de cuentas presupone.",
          ],
          lista: [
            "Los reglamentos europeos obligan a transmitir las **cuentas trimestrales** ajustadas de estacionalidad y de efectos de calendario, con la periodicidad y el detalle que fija el programa de transmisión del SEC. La herramienta común y las directrices de la ficha 15.01 son el mecanismo que hace que esas obligaciones produzcan series realmente comparables y no solo formalmente homogéneas.",
            "El trabajo por **SAProcessing** refleja la estructura del sistema de cuentas: no se ajusta el PIB, se ajusta el cuadro completo de operaciones —consumo final (**P.3**), formación de capital (**P.5**), exportaciones e importaciones (**P.6** y **P.7**)— y por ramas de actividad. Son cientos de series que deben mantener las identidades contables de la ficha 13.02 entre sí, lo que enlaza directamente con el problema de agregación de la ficha 15.11.",
            "Los **calendarios definibles por serie** permiten algo que el sistema necesita: aplicar tratamientos distintos a ramas con sensibilidad distinta a los días hábiles. La industria y la construcción responden mucho; los servicios de no mercado, cuya producción se valora por suma de costes según la ficha 6.03, apenas. Un calendario único para todo el cuadro impondría un supuesto que las cuentas no sostienen.",
            "La **especificación congelada y archivada** es lo que permite cumplir el requisito de reproducibilidad de la estadística oficial. Cuando una revisión de las cuentas anuales obliga a rehacer el ajuste, disponer de la especificación exacta usada permite separar cuánto de la revisión viene del dato y cuánto del procedimiento, distinción que la ficha 10.10 señalaba como esencial para evaluar políticas con datos de tiempo real.",
            "Por último, una consecuencia práctica de que la herramienta sea **libre**: los usuarios externos pueden reproducir el ajuste del instituto con la misma especificación publicada. Eso convierte la metodología en verificable por terceros, que en estadística pública es una garantía distinta y más fuerte que la simple publicación de resultados.",
          ],
          cierre:
            "La consecuencia práctica: la herramienta no decide nada, pero obliga a que las decisiones queden escritas en un objeto que se puede archivar, transmitir y auditar. En estadística oficial eso vale más que la precisión del cálculo.",
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
              q: "¿Por qué el sistema estadístico europeo recomienda una herramienta común en lugar de dejar elegir a cada instituto?",
              a: "Porque si cada uno usa su programa y sus opciones, las series nacionales dejan de ser comparables por razones de método y no de economía. Las diferencias entre X-11 y SEATS se concentran en los extremos de la serie, que es justamente el dato de coyuntura que se compara entre países. La herramienta común, junto con las directrices, es lo que convierte una obligación formal de transmitir series ajustadas en comparabilidad real.",
            },
            {
              q: "¿Qué significa subir de RSA1 a RSA5 en la escalera de especificaciones?",
              a: "Delegar más decisiones al programa: primero la transformación y los atípicos, luego los regresores de calendario, luego la identificación automática del modelo ARIMA, y por último la especificación detallada de días de la semana. La numeración indica qué se delega, no complejidad creciente: RSA3 tiene menos parámetros que RSA2 porque no corrige calendario.",
            },
            {
              q: "Una serie trimestral de tres años se ajusta con RSA5. ¿Qué problema hay?",
              a: "Que quedan siete observaciones efectivas —doce menos las cinco que consumen las diferencias— y RSA5 estima del orden de doce parámetros. Se está estimando más parámetros que datos disponibles. El programa no lo impedirá y producirá una salida de aspecto impecable, pero el ajuste será inestable y cambiará mucho con cada trimestre nuevo.",
            },
            {
              q: "¿Por qué no debe publicarse un ajuste hecho con especificación automática?",
              a: "Porque no es reproducible. Al reejecutarlo dentro de un año con más datos, el programa puede identificar otro modelo y detectar otros atípicos, devolviendo una serie distinta sin que ningún dato haya cambiado. El flujo correcto es explorar con una especificación automática, revisar lo que ha decidido, fijar esas decisiones en una especificación propia y archivarla.",
            },
            {
              q: "¿Qué aporta poder definir calendarios propios por serie?",
              a: "Permite tratar de forma distinta ramas con sensibilidad distinta a los días hábiles, y ajustar series regionales con sus festivos autonómicos. Un calendario nacional aplicado a una serie regional deja un residuo sistemático que aparece como estacionalidad residual en los diagnósticos, y un calendario único para todo el cuadro de cuentas impone que industria y servicios de no mercado respondan igual, que es falso.",
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
            { ref: "Manual de referencia de JDemetra+", nota: "la documentación oficial de la herramienta: especificaciones, diagnósticos y opciones de cada motor, con las equivalencias entre las dos ramas." },
            { ref: "Eurostat, ESS Guidelines on Seasonal Adjustment", nota: "las prácticas recomendadas que la herramienta implementa, y el marco institucional que explica por qué existe una herramienta común." },
            { ref: "Documentación de los paquetes de R para JDemetra+", nota: "cómo llevar el ajuste al flujo habitual de análisis manteniendo el mismo motor de cálculo que usa el instituto." },
            { ref: "INE, notas metodológicas de la Contabilidad Nacional Trimestral", nota: "las especificaciones concretas adoptadas para el caso español y su justificación serie a serie." },
          ],
        },
      ],
    },
  ],
};
