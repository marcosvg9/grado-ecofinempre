/* Ficha 13.04 — La remuneración de asalariados (D.1) por dentro. */

export default {
  codigo: "13.04",
  titulo: "La remuneración de asalariados (D.1) por dentro",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "La remuneración de asalariados no es la nómina: es todo lo que le cuesta al empleador tener a alguien trabajando, incluidas cosas que el trabajador nunca ve y una partida que no corresponde a ningún pago real. Entender sus tres componentes explica por qué el coste laboral y el salario percibido divergen tanto.",
  requiere: "13.03 El consumo intermedio · 12.03 La cuenta de explotación",
  abre: "13.07 Cotizaciones y prestaciones sociales · 10.09 Coste laboral unitario",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El SEC define la remuneración de asalariados como la remuneración total, en efectivo o en especie, que un empleador paga a un asalariado por el trabajo realizado.** La palabra clave es **total**: no lo que el trabajador cobra, sino lo que el empleador desembolsa. Esa diferencia, que en España supera el treinta por ciento del salario bruto, es la razón de que casi todas las comparaciones internacionales de «salarios» estén midiendo cosas distintas.",
            "**El D.1 tiene dos componentes, y el segundo se subdivide.** Los **sueldos y salarios (D.11)** son lo que se paga directamente al trabajador, en efectivo o en especie. Las **cotizaciones sociales a cargo de los empleadores (D.12)** son lo que el empleador aporta a los sistemas de protección social por cuenta de ese trabajador, y se dividen en **efectivas (D.121)**, que se pagan realmente a alguien, e **imputadas (D.122)**, que no se pagan a nadie.",
            "**Dentro del D.11 hay una parte en efectivo, que no tiene misterio, y una parte en especie, que lo tiene todo.** Los **salarios en especie** son bienes y servicios que el empleador entrega al trabajador gratuitamente o por debajo de su coste, y que este puede usar en su vida privada. El catálogo del reglamento incluye el vehículo de uso privado, la vivienda cedida, las comidas y los vales de comida, el transporte al centro de trabajo, el seguro médico o de vida contratado por la empresa, las guarderías, los productos de la propia empresa entregados gratis y las **opciones sobre acciones**. También entran las **propinas**, que el trabajador cobra de un tercero y que el sistema atribuye igualmente a su remuneración.",
            "**La frontera de la especie es la misma de la ficha anterior vista desde el otro lado: ¿lo necesita el puesto o lo disfruta la persona?** Y hay un matiz que suele pasarse por alto: la especie se valora a **precios de adquisición** si el empleador la compró, y a **precios básicos** si la produjo él mismo. Una aerolínea que da billetes gratis a sus empleados no imputa el precio del billete, sino su coste de producción.",
            "**Las cotizaciones efectivas del empleador (D.121) llevan al rodeo más característico del sistema, y conviene entenderlo porque explica muchos malentendidos.** El SEC no las trata como un impuesto sobre la empresa, sino como **renta del trabajador**: la lógica es que son parte de lo que su trabajo genera y que sirven para adquirirle derechos de protección social. Así que el sistema hace un doble apunte. Primero la empresa las paga como parte del D.1, de modo que aumentan la **renta primaria del hogar**. Y después el hogar las paga a la Seguridad Social como **cotizaciones efectivas a cargo de los empleadores (D.611)**, reduciéndole la renta disponible. El dinero nunca pasa por el bolsillo del trabajador, pero contablemente da la vuelta entera.",
            "**Las cotizaciones imputadas (D.122) son la partida más extraña del sistema y la mejor prueba de su coherencia.** Corresponden a los empleadores que pagan prestaciones sociales **directamente**, sin haber constituido un fondo separado: el caso mayor en España son las **pensiones de los funcionarios de clases pasivas**, y también los complementos que algunas empresas pagan a sus jubilados sin plan de pensiones externo. No hay ningún flujo real, pero si no se imputaran, esos trabajadores parecerían no estar generando derechos de pensión y sus empleadores parecerían tener costes laborales artificialmente bajos. El sistema imputa una cotización de contrapartida exacta a las prestaciones directas pagadas, de modo que **D.122 iguala a D.622** por construcción, como verá la ficha 13.07.",
            "**Cierra la ficha una advertencia que el bloque 12 ya insinuó: el D.1 no cubre a todos los que trabajan.** Los autónomos no cobran remuneración de asalariados: su retribución está dentro de la **renta mixta (B.3)**, mezclada con el rendimiento de su capital y sin posibilidad de separarlas. Por eso la **participación salarial** —D.1 dividido entre el PIB— infravalora sistemáticamente el peso del trabajo, y por eso hay que corregirla imputando a cada autónomo la remuneración media de un asalariado. En una economía como la española, con mucho trabajo por cuenta propia, la corrección mueve el resultado varios puntos.",
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
            { nom: "Qué mide el D.1", sub: "No la nómina: el desembolso del empleador.", cols: ["D.1 = D.11 + D.121 + D.122"] },
            { nom: "Sueldos y salarios", sub: "Lo que va directo al trabajador.", cols: ["D.11 en efectivo + D.11 en especie"] },
            { nom: "Criterio de la especie", sub: "El mismo de la frontera con el P.2.", cols: ["lo disfruta la persona, no lo exige el puesto"] },
            { nom: "Valoración de la especie", sub: "Depende de quién la produce.", cols: ["comprada, a adquisición · propia, a básicos"] },
            { nom: "Cotizaciones efectivas", sub: "Se pagan realmente a un sistema.", cols: ["D.121, con vuelta como D.611"] },
            { nom: "El rodeo del sistema", sub: "El dinero no pasa por el trabajador.", cols: ["renta primaria del hogar, luego se la resta"] },
            { nom: "Cotizaciones imputadas", sub: "Ningún flujo real las respalda.", cols: ["D.122 = D.622 por construcción"] },
            { nom: "Su caso mayor en España", sub: "Régimen sin fondo constituido.", cols: ["pensiones de clases pasivas"] },
            { nom: "A quién no cubre el D.1", sub: "Trabajo y capital inseparables.", cols: ["autónomos → renta mixta B.3"] },
            { nom: "Consecuencia", sub: "Corregir imputando la remuneración media.", cols: ["D.1 / PIB infravalora el peso del trabajo"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: abrir los 500 de la economía de ejemplo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 12.03 dio la remuneración de asalariados de la economía de ejemplo como 500, repartidos en 385 de sueldos y salarios, 110 de cotizaciones efectivas y 5 de imputadas. Abrimos ahora esos tres bloques.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Componente", "Código", "Importe", "Contenido"],
          filas: [
            ["Sueldos y salarios en efectivo", "D.11", "368", "Nómina bruta, pagas extra, incentivos, propinas"],
            ["Vehículo de empresa de uso privado", "D.11 especie", "6", "Valor del uso privado, imputado anualmente"],
            ["Seguro médico y de vida colectivos", "D.11 especie", "4", "Pólizas contratadas por la empresa para el trabajador"],
            ["Comidas, vales y transporte", "D.11 especie", "4", "Comedor subvencionado, cheques, autobús de empresa"],
            ["Vivienda cedida y guarderías", "D.11 especie", "2", "Cesión como parte del paquete retributivo"],
            ["Opciones sobre acciones", "D.11 especie", "1", "Valoradas en el momento de la concesión"],
            ["Sueldos y salarios, total", "D.11", "385", "Efectivo 368 + especie 17"],
            ["Cotizaciones a la Seguridad Social", "D.121", "100", "Contingencias comunes, desempleo, formación"],
            ["Aportaciones a planes de empleo", "D.121", "10", "A fondos externos constituidos"],
            { celdas: ["Cotizaciones imputadas", "D.122", "5", "Pensiones directas sin fondo: contrapartida del D.622"], clase: "total" },
          ],
          nota: "Los **17 de retribución en especie** son un tres por ciento de la nómina y suelen quedar fuera de cualquier estadística salarial al uso, porque no aparecen como transferencia bancaria. Y los **5 de cotizaciones imputadas** no los paga nadie: son un apunte que existe únicamente para que las pensiones pagadas directamente por el empleador tengan una contrapartida y no aparezcan de la nada. Si se suprimieran ambos conceptos, el coste laboral de esta economía parecería 478 en lugar de 500, y su participación salarial caería más de dos puntos.",
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "", y: "" },
          dominio: { x: [0, 10], y: [0, 5.6] },
          marcasX: [],
          marcasY: [],
          areas: [
            { puntos: [[0.3, 4.2], [0.3, 5.0], [7.439, 5.0], [7.439, 4.2]], color: "n1" },
            { puntos: [[7.439, 4.2], [7.439, 5.0], [7.769, 5.0], [7.769, 4.2]], color: "n2" },
            { puntos: [[7.769, 4.2], [7.769, 5.0], [10, 5.0], [10, 4.2]], color: "n3" },
            { puntos: [[0.3, 2.2], [0.3, 3.0], [7.439, 3.0], [7.439, 2.2]], color: "n1" },
          ],
          notas: [
            { x: 0.3, y: 5.3, texto: "Lo que le cuesta al empleador: D.1 = 500", ancla: "start" },
            { x: 3.87, y: 4.55, texto: "D.11 efectivo 368", ancla: "middle" },
            { x: 8.88, y: 4.55, texto: "D.121 110", ancla: "middle" },
            { x: 7.60, y: 3.85, texto: "17", ancla: "middle" },
            { x: 7.60, y: 3.5, texto: "especie", ancla: "middle" },
            { x: 0.3, y: 3.3, texto: "Lo que el trabajador ve en su nómina bruta: 368", ancla: "start" },
            { x: 3.87, y: 2.55, texto: "D.11 efectivo 368", ancla: "middle" },
            { x: 0.3, y: 1.4, texto: "Los 132 de diferencia son reales y son suyos: 17 en especie", ancla: "start" },
            { x: 0.3, y: 1.0, texto: "que sí disfruta, 110 en cotizaciones que le dan derechos, y 5", ancla: "start" },
            { x: 0.3, y: 0.6, texto: "imputados que no paga nadie. Ninguno aparece en su banco.", ancla: "start" },
          ],
          nota: "La distancia entre las dos barras es **la cuña que separa el coste laboral del salario visible**, y son 132 sobre 500: un **26,4 % del coste total** que el trabajador no ve. No es dinero perdido —la especie la disfruta y las cotizaciones le compran derechos— pero explica por qué las discusiones sobre «lo que gana» un trabajador y «lo que cuesta» rara vez se refieren al mismo número. La ficha 13.07 completa el recorrido añadiendo las cotizaciones del propio trabajador y el impuesto sobre la renta.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué la participación salarial engaña en España",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La **participación salarial** —la parte del PIB que va al trabajo— es uno de los indicadores más citados en los debates sobre desigualdad y sobre reparto funcional de la renta. Y calculada directamente como D.1 dividido entre el PIB es sistemáticamente engañosa, por una razón puramente contable que esta ficha permite ver.",
            "**El problema es que el D.1 solo recoge el trabajo asalariado.** Un autónomo que regenta una tienda trabaja tantas horas como un empleado, pero su retribución no aparece en el D.1: aparece en la **renta mixta (B.3)**, que mezcla indistinguiblemente lo que gana por trabajar y lo que gana por haber puesto el local, las existencias y el capital. El SEC ni siquiera intenta separarlas, y por eso el saldo se llama «mixta».",
            "**La consecuencia es que la participación salarial mide, en realidad, la proporción de trabajo que está asalariado.** Un país donde una parte grande del empleo es por cuenta propia mostrará una participación salarial baja aunque el trabajo esté igual de bien remunerado que en el país vecino. Y un país que convierte autónomos en asalariados verá subir su participación salarial sin que haya cambiado el reparto real entre trabajo y capital.",
            "**La corrección estándar es imputar a cada trabajador por cuenta propia la remuneración media de un asalariado**, y añadir esa masa al D.1 antes de dividir. Es una convención discutible —un autónomo puede ganar más o menos que un asalariado medio— pero es transparente y hace comparables los países y los períodos. En economías con mucho trabajo por cuenta propia la corrección mueve el resultado varios puntos porcentuales, y España está entre ellas.",
            "**Hay un segundo ajuste, menos conocido y del mismo signo.** Como el denominador habitual es el PIB a precios de mercado, incluye los impuestos netos sobre los productos, que no son renta ni del trabajo ni del capital. Usar el **valor añadido bruto a precios básicos** como denominador elimina esa distorsión y da una participación algo mayor. Quien compare series de fuentes distintas debe comprobar cuál de los dos denominadores usa cada una, porque la diferencia es apreciable y perfectamente sistemática.",
            "**La moraleja excede este indicador.** Los agregados del SEC están definidos con precisión, pero esa precisión es sobre lo que el sistema mide, no sobre lo que el analista quiere medir. La participación salarial del SEC responde a la pregunta «cuánto del valor añadido se paga como remuneración de asalariados», que no es la pregunta «cuánto del valor añadido remunera al trabajo». Son preguntas distintas y las separa exactamente la renta mixta.",
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
            { t: "Identificar la remuneración de asalariados con la nómina", d: "El D.1 mide lo que desembolsa el empleador, no lo que percibe el trabajador. Incluye la retribución en especie y las cotizaciones patronales, que en España superan el treinta por ciento del salario bruto. Casi todas las comparaciones internacionales de «salarios» comparan magnitudes distintas por esta razón." },
            { t: "Tratar las cotizaciones patronales como un impuesto sobre la empresa", d: "El SEC las considera renta del trabajador: aumentan su renta primaria y después él mismo las paga a la Seguridad Social como D.611. El dinero no pasa por su bolsillo, pero contablemente da la vuelta entera, y por eso aparece dos veces en las cuentas de los hogares." },
            { t: "Buscar un flujo real detrás de las cotizaciones imputadas", d: "No lo hay. Son la contrapartida de prestaciones que el empleador paga directamente sin fondo constituido, como las pensiones de clases pasivas. Si no se imputaran, esos trabajadores parecerían no generar derechos y sus empleadores tendrían costes laborales artificialmente bajos." },
            { t: "Valorar la retribución en especie siempre a precio de mercado", d: "Se valora a precios de adquisición si el empleador la compró y a precios básicos si la produjo él mismo. Una aerolínea que da billetes a sus empleados imputa el coste de producción, no la tarifa. Ignorarlo sobreestima la remuneración de las empresas que retribuyen con producto propio." },
            { t: "Calcular la participación salarial como D.1 entre PIB sin corregir", d: "El D.1 excluye el trabajo de los autónomos, que está dentro de la renta mixta. Así medida, la participación salarial refleja qué proporción del empleo está asalariada más que cómo se reparte la renta entre trabajo y capital. La corrección habitual imputa a cada autónomo la remuneración media." },
            { t: "Mezclar denominadores al comparar series de participación salarial", d: "Unas fuentes dividen por el PIB a precios de mercado y otras por el valor añadido a precios básicos, que excluye los impuestos netos sobre productos. La diferencia es sistemática y apreciable, y basta para invertir el sentido de una comparación entre países." },
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
            "El D.1 es la operación de distribución más grande del sistema y conecta con medio plan.",
          ],
          lista: [
            "La ficha **12.03** lo restaba del valor añadido para obtener el excedente; aquí se ve de qué está hecho ese 500 y por qué 132 de él no aparecen en ninguna nómina.",
            "La ficha **13.07** cierra el circuito: las cotizaciones que aquí salen del empleador vuelven a salir del hogar como D.611, y las imputadas encuentran su contrapartida exacta en el D.622.",
            "La ficha **10.09**, sobre el coste laboral unitario, usa precisamente el D.1 y no la nómina: por eso el CLU puede subir aunque los salarios se congelen, si suben las cotizaciones.",
            "La ficha **12.01** aporta el matiz de residencia que decide si un pago es D.1 o transferencia: al trabajador transfronterizo se le paga remuneración de asalariados, y por eso afecta a la renta nacional; al emigrante de larga duración se le envían remesas, que son D.75.",
            "Y la ficha **13.03** resuelve desde el otro lado la misma frontera: lo que el puesto exige es consumo intermedio de la empresa y lo que la persona disfruta es salario en especie.",
          ],
          cierre:
            "La idea que conviene llevarse es que **entre lo que cuesta un trabajador y lo que ese trabajador ve hay una distancia grande, contable y perfectamente explicable**. Ninguno de los dos números es falso; simplemente responden a preguntas distintas, y confundirlos es el origen de buena parte de los desacuerdos sobre salarios y costes.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué mide exactamente la remuneración de asalariados?", a: "Todo lo que desembolsa el empleador por tener a alguien trabajando: sueldos y salarios en efectivo y en especie, más las cotizaciones sociales efectivas e imputadas a su cargo. No es la nómina del trabajador, y la diferencia en España supera el treinta por ciento del salario bruto." },
            { q: "¿Por qué las cotizaciones patronales aumentan la renta primaria del hogar?", a: "Porque el SEC las trata como renta del trabajador: son parte de lo que su trabajo genera y le compran derechos de protección social. El sistema hace un doble apunte: la empresa las paga dentro del D.1 y después el hogar las entrega a la Seguridad Social como D.611. El dinero no pasa por su bolsillo, pero da la vuelta contable entera." },
            { q: "¿Qué son las cotizaciones imputadas y por qué existen?", a: "Son la contrapartida de las prestaciones que un empleador paga directamente sin haber constituido un fondo, como las pensiones de clases pasivas. No hay ningún flujo real. Sin ellas, esos trabajadores parecerían no generar derechos de pensión y sus empleadores tendrían costes laborales artificialmente bajos. Por construcción, D.122 iguala a D.622." },
            { q: "Una aerolínea da billetes gratis a sus empleados. ¿Por cuánto se valora esa retribución?", a: "Por su coste de producción, no por la tarifa, porque la retribución en especie se valora a precios básicos cuando la produce el propio empleador y a precios de adquisición cuando la compra. Usar el precio de mercado sobreestimaría la remuneración de las empresas que retribuyen con producto propio." },
            { q: "¿Por qué la participación salarial infravalora el peso del trabajo?", a: "Porque el D.1 solo recoge el trabajo asalariado: la retribución del autónomo está dentro de la renta mixta, mezclada con el rendimiento de su capital. Así medida, la participación salarial refleja sobre todo qué proporción del empleo está asalariada. La corrección habitual imputa a cada autónomo la remuneración media de un asalariado." },
            { q: "En el ejemplo, ¿por qué el coste laboral es 500 y la nómina bruta 368?", a: "Los 132 de diferencia son 17 de retribución en especie que el trabajador sí disfruta, 110 de cotizaciones efectivas que le compran derechos y 5 de cotizaciones imputadas que no paga nadie. Es el 26,4 % del coste total, y ninguno de los tres conceptos aparece como ingreso en su cuenta bancaria." },
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
            { ref: "SEC 2010, capítulo 4 — remuneración de asalariados (D.1)", nota: "el catálogo completo de la retribución en especie y las reglas de valoración." },
            { ref: "SEC 2010, capítulo 17 — sistemas de pensiones", nota: "por qué existen las cotizaciones imputadas y cómo se calculan en los regímenes sin fondo." },
            { ref: "INE, Encuesta de Coste Laboral y Encuesta Anual de Estructura Salarial", nota: "las dos fuentes españolas que separan coste y salario; comparar sus definiciones es el mejor ejercicio de esta ficha." },
            { ref: "Eurostat, participación de las rentas del trabajo ajustada", nota: "la serie con la corrección por trabajo autónomo, y la metodología de la imputación." },
            { ref: "Banco de España, Boletín Económico — reparto funcional de la renta", nota: "análisis del caso español con las dos correcciones, la del autónomo y la del denominador." },
          ],
        },
      ],
    },
  ],
};
