/* Ficha 9.06 — Direccion de personas: motivacion, liderazgo y compensacion. */

export default {
  codigo: "9.06",
  titulo: "Dirección de personas: motivación, liderazgo y compensación",
  nivel: 2,
  bloque: "Dirección de empresas",
  tiempo: "4 h",
  nucleo:
    "Todo sistema de incentivos produce el comportamiento que mide, no el que pretende. De ahí que el problema central de la dirección de personas no sea motivar más, sino diseñar sistemas cuyos efectos medidos coincidan con lo que de verdad se quiere conseguir.",
  requiere: "9.05 Diseño organizativo · 9.01 Problema de agencia",
  abre: "6.05 Control por desviaciones · 9.09 Operaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La dirección de personas parte de un hecho que la economía tardó en incorporar: el esfuerzo no es observable. Se puede medir la presencia, la producción o el resultado, pero no el esfuerzo, y por eso toda relación laboral es un contrato incompleto sobre el que se construyen mecanismos de motivación y control. Es el problema de agencia de la ficha 9.01 aplicado a cada puesto.",
            "Las teorías clásicas de la motivación —la jerarquía de necesidades, la distinción entre factores higiénicos y motivadores— ofrecen intuición y poca capacidad predictiva. Más útil resulta la distinción entre **motivación extrínseca**, que responde a recompensas externas, e **intrínseca**, que nace del interés por la tarea. Su interacción es el hallazgo relevante: en tareas rutinarias y medibles el incentivo económico funciona bien; en tareas creativas o de calidad difícil de observar puede **desplazar** a la motivación intrínseca y empeorar el resultado.",
            "El diseño de la **compensación** se reduce a tres decisiones. El **nivel**, es decir, cuánto se paga en relación con el mercado, que determina la capacidad de atraer y retener. La **estructura**, o cómo se reparte entre fijo y variable, que determina el riesgo que soporta el empleado. Y la **base del variable**, que es donde se concentran casi todos los errores.",
            "El principio que gobierna esa tercera decisión se enuncia en una línea: **lo que se mide es lo que se obtiene**. Un comercial retribuido por facturación venderá con descuentos que destruyen margen; retribuido por margen, evitará clientes de volumen; retribuido por unidades, colocará producto en el canal aunque no se venda al cliente final. Ninguno de esos comportamientos es deshonesto: todos son respuestas racionales al indicador elegido.",
            "El problema se agrava cuando el puesto tiene **varias dimensiones y solo una es medible**. Retribuir la cantidad producida sin poder medir bien la calidad desplaza esfuerzo de la segunda a la primera. La respuesta habitual —añadir más indicadores— tiene su propio límite: un variable repartido entre ocho objetivos deja de orientar el comportamiento porque ninguno pesa lo suficiente. En puestos con muchas dimensiones no observables, a menudo **la mejor estructura es un fijo alto con evaluación cualitativa**, precisamente porque no distorsiona.",
            "El **liderazgo** aporta lo que los sistemas formales no alcanzan. Donde el contrato no llega —iniciativa, cooperación entre áreas, comportamiento ante lo imprevisto— la conducta depende de expectativas informales, del ejemplo y de la percepción de justicia. Esa percepción es más determinante de lo que parece: la evidencia sobre equidad interna muestra que la comparación con los compañeros afecta a la satisfacción y al esfuerzo tanto o más que el nivel absoluto de retribución.",
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
            { nom: "Tasa de rotación", sub: "El indicador básico de retención.", cols: ["r = Salidas del período / Plantilla media"] },
            { nom: "Coste de una salida", sub: "Muy superior al coste de selección.", cols: ["C = Selección + Formación + Productividad perdida durante la curva de aprendizaje"] },
            { nom: "Coste total de la rotación", sub: "Rara vez se calcula y suele sorprender.", cols: ["CT = r × Plantilla × C"] },
            { nom: "Coste laboral total", sub: "El salario bruto no es el coste.", cols: ["CL = Salario bruto + Cotizaciones a cargo de la empresa + Otros"] },
            { nom: "Peso del variable", sub: "Determina el riesgo trasladado al empleado.", cols: ["v = Retribución variable / Retribución total"] },
            { nom: "Coste laboral unitario", sub: "El puente con el análisis macroeconómico.", cols: ["CLU = Coste laboral por empleado / Productividad por empleado"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: lo que cuesta la rotación",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa de **200 empleados** con un salario medio de **35.000 €** tiene una rotación voluntaria del **20 %** anual. El coste estimado de reemplazar a una persona equivale a unos **nueve meses de salario**, sumando selección, formación y el tiempo que la persona nueva tarda en alcanzar el rendimiento de la anterior.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Salidas anuales", "200 × 20 %", "40 personas"],
            ["Coste unitario de reemplazo", "35.000 × 0,75", "26.250 €"],
            { celdas: ["Coste anual de la rotación", "40 × 26.250", "1.050.000 €"], clase: "total" },
            ["Sobre la masa salarial total", "1.050.000 / 7.000.000", "15,0 %"],
          ],
          nota: "Un millón de euros al año que **no aparece en ninguna línea de la cuenta de resultados**: está repartido entre gastos de selección, formación, horas extra de quienes cubren la vacante y ventas o producción que no se hicieron. Por eso la rotación se tolera durante años en empresas que vigilan con lupa partidas mucho menores.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Rotación", "Coste anual", "Ahorro"],
          filas: [
            ["Situación actual", "20 %", "1.050.000 €", "—"],
            ["Mejora moderada", "15 %", "787.500 €", "262.500 €"],
            { celdas: ["Mejora significativa", "12 %", "630.000 €", "420.000 €"], clase: "total" },
          ],
          nota: "Bajar la rotación del 20 % al 12 % libera **420.000 €**, el equivalente a subir un 6 % los salarios de toda la plantilla. Ese cálculo es el que convierte una discusión sobre política retributiva en una decisión de inversión con retorno estimable, y es exactamente el argumento que hay que llevar a un comité de dirección.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y una advertencia sobre el diagnóstico.** No toda la rotación es mala ni evitable: una cierta renovación aporta ideas nuevas y permite ajustar la plantilla. Lo que informa no es la tasa global sino su **composición**: quién se va. Si se marchan sistemáticamente los de mejor desempeño y se quedan los demás, la empresa tiene un problema grave aunque su tasa parezca normal. Ese análisis exige cruzar salidas con evaluaciones, y casi ninguna empresa lo hace.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el incentivo que produjo lo contrario",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa industrial decide impulsar las ventas y establece un variable del 20 % de la retribución de su red comercial ligado a **volumen facturado**. El objetivo es claro y el indicador, indiscutible. Al año siguiente la facturación crece un 18 % y el resultado de explotación cae.",
            "**Qué ocurrió, punto por punto.** Los comerciales concedieron descuentos que la empresa nunca habría autorizado si los hubiera evaluado uno a uno, porque el descuento no les costaba nada y el volumen adicional sí les pagaba. Priorizaron clientes grandes y de bajo margen sobre los pequeños y rentables. Cerraron pedidos a final de trimestre con condiciones de pago extendidas, lo que disparó el saldo de clientes y las necesidades operativas de fondos de la ficha 7.08. Y descuidaron el servicio posventa, que no se medía.",
            "**Ningún comercial hizo nada incorrecto.** Todos maximizaron el indicador por el que se les evaluaba, que es exactamente lo que un sistema de incentivos les pide. El error fue del diseño: se eligió la variable fácil de medir en lugar de la que representaba el objetivo real.",
            "**El rediseño razonable** no consiste en volver al fijo. Sustituir facturación por **margen de contribución** alinea el interés del comercial con el de la empresa en la dimensión de precio. Añadir un componente ligado al **cobro efectivo** y no solo a la venta corrige el efecto sobre el circulante. Y establecer un umbral de calidad de servicio como **condición de acceso** al variable, en lugar de como objetivo adicional que se diluye, protege la dimensión no medible.",
            "**El límite de todo esto.** Cuantos más indicadores se añaden, menos orienta cada uno. Un variable repartido entre seis objetivos con pesos del 15 % deja de dirigir el comportamiento y pasa a ser una nómina complicada. La regla práctica es **dos o tres indicadores como máximo, y las dimensiones no medibles como condición de acceso, no como objetivo ponderado**.",
            "**Y una comprobación previa a cualquier variable:** preguntarse qué haría alguien que quisiera maximizar el indicador sin importarle nada más. Si esa respuesta incluye comportamientos que perjudican a la empresa, el indicador está mal elegido, por muy fácil de medir que resulte.",
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
            { t: "Elegir el indicador por facilidad de medición", d: "La facturación se mide sin discusión y el margen exige un sistema de costes decente, así que se retribuye la facturación. Es la razón más frecuente de que un incentivo produzca lo contrario de lo que pretendía. La comprobación previa es preguntarse qué haría alguien decidido a maximizar solo ese indicador." },
            { t: "Repartir el variable entre demasiados objetivos", d: "Con seis objetivos al 15 %, ninguno pesa lo suficiente para cambiar el comportamiento y el sistema pasa a ser una nómina complicada. Dos o tres indicadores orientan; seis, no." },
            { t: "Aplicar incentivos económicos a tareas creativas", d: "En tareas rutinarias y medibles funcionan bien. En tareas de calidad difícil de observar pueden desplazar la motivación intrínseca y empeorar el resultado. La estructura adecuada en esos puestos suele ser fijo alto y evaluación cualitativa." },
            { t: "Ignorar las dimensiones no medibles del puesto", d: "Si solo se retribuye lo medible, el esfuerzo se desplaza hacia ello y las demás dimensiones se deterioran. La solución no es medirlo todo, sino usar las dimensiones no medibles como condición de acceso al variable." },
            { t: "Confundir salario con coste laboral", d: "El coste para la empresa incluye las cotizaciones sociales a su cargo, que en España elevan sustancialmente el salario bruto. Comparar ofertas o calcular el coste de una contratación sobre el bruto subestima la cifra de forma sistemática." },
            { t: "Tolerar la rotación sin cuantificarla", d: "Su coste está repartido entre partidas que no lo identifican como tal, así que no aparece en ninguna línea. Calcularlo convierte una discusión sobre condiciones laborales en una decisión de inversión con retorno estimable." },
            { t: "Mirar la tasa de rotación y no su composición", d: "Una rotación del 15 % concentrada en el mejor desempeño es mucho peor que una del 25 % distribuida uniformemente. Lo relevante es quién se va, y eso exige cruzar salidas con evaluaciones." },
            { t: "Descuidar la equidad interna", d: "La comparación con los compañeros afecta a la satisfacción y al esfuerzo tanto o más que el nivel absoluto. Una subida individual bien justificada puede deteriorar el clima de todo un equipo si no se explica." },
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
            "La retribución del trabajo es una de las magnitudes centrales del SEC 2010 y su definición es más amplia que la de salario.",
          ],
          lista: [
            "La **remuneración de asalariados (D.1)** se descompone en **sueldos y salarios (D.11)** y **cotizaciones sociales a cargo de los empleadores (D.12)**, y estas últimas se subdividen en efectivas (D.121) e imputadas (D.122), que recogen prestaciones que el empleador satisface directamente sin fondo constituido.",
            "Esa es exactamente la distinción entre salario y coste laboral de la sección anterior, formalizada. **El coste que soporta la empresa es D.1, no D.11**, y confundirlos al comparar países con estructuras de cotización distintas produce conclusiones erróneas.",
            "El **coste laboral unitario** relaciona la remuneración por asalariado con la productividad. Es el indicador que conecta esta ficha con el análisis de competitividad: los salarios pueden crecer sin deteriorar la competitividad siempre que la productividad los acompañe.",
            "La **participación de las rentas del trabajo** en el valor añadido —D.1 sobre VAB— es el reparto entre trabajo y capital a escala agregada, y su comportamiento contracíclico es el fenómeno descrito en la ficha 6.04: el excedente absorbe el ajuste porque el coste laboral se comporta a corto plazo como cuasi fijo.",
            "Y la **rotación**, que en esta ficha es un coste de empresa, se observa agregada en las estadísticas de flujos laborales: altas y bajas de afiliación, que en España son de una magnitud muy superior a la de la mayoría de las economías europeas por el peso de la contratación temporal.",
          ],
          cierre:
            "Este es probablemente el puente más directo de todo el material para quien trabaja con las cuentas de empleo y rentas: lo que aquí es una decisión de política retributiva de una empresa, agregado es D.1 y su relación con la productividad.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Plantilla de 150, rotación del 18 %, salario medio 30.000 € y coste de reemplazo de 9 meses. ¿Coste anual?", a: "27 salidas × 22.500 € = 607.500 € anuales, un 13,5 % de la masa salarial. Y no aparece como tal en ninguna línea de la cuenta de resultados." },
            { q: "¿Por qué retribuir por facturación puede reducir el beneficio?", a: "Porque el comercial concede descuentos que no le cuestan nada, prioriza volumen sobre margen y extiende plazos de cobro. Todo ello maximiza el indicador y deteriora el resultado y el circulante. El indicador correcto sería el margen de contribución." },
            { q: "¿Cuántos indicadores debe tener un variable?", a: "Dos o tres. Con más, ninguno pesa lo suficiente para orientar el comportamiento. Las dimensiones difíciles de medir se protegen mejor como condición de acceso al variable que como objetivo ponderado que se diluye." },
            { q: "¿Cuándo conviene un fijo alto sin apenas variable?", a: "En puestos con muchas dimensiones relevantes y difíciles de observar, donde cualquier indicador medible desplazaría el esfuerzo hacia él. También en tareas creativas, donde el incentivo económico puede reducir la motivación intrínseca." },
            { q: "¿Qué diferencia hay entre D.11 y D.1 en el SEC 2010?", a: "D.11 son los sueldos y salarios brutos; D.1 añade las cotizaciones sociales a cargo del empleador, efectivas e imputadas. El coste laboral que soporta la empresa es D.1, y comparar países usando solo D.11 distorsiona el análisis." },
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
            { ref: "Bonache y Cabrera, Dirección de personas", nota: "el manual español de referencia, con buen tratamiento del diseño de sistemas retributivos." },
            { ref: "Milgrom y Roberts, Economía, organización y gestión de la empresa", nota: "el enfoque económico del diseño de incentivos, incluido el problema de las tareas múltiples. Exigente y muy sólido." },
            { ref: "Gneezy y Rustichini, trabajos sobre incentivos y desplazamiento de la motivación", nota: "la evidencia experimental sobre cuándo pagar más empeora el resultado." },
            { ref: "INE, Encuesta Trimestral de Coste Laboral y cuentas de remuneración de asalariados", nota: "la medición del coste laboral en España y su descomposición, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
