/* Ficha 12.03 — La cuenta de explotación: remuneración, impuestos y excedente. */

export default {
  codigo: "12.03",
  titulo: "La cuenta de explotación: remuneración, impuestos y excedente",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "El valor añadido se reparte entre quien pone el trabajo, quien pone el capital y el Estado. La partida que más se malinterpreta es la renta mixta del autónomo: dentro va su sueldo y su beneficio en el mismo número, y separarlos exige una imputación que mueve varios puntos la participación salarial del país.",
  requiere: "12.02 La cuenta de producción · 10.03 Sistema fiscal español",
  abre: "12.04 Rentas de la propiedad · 12.06 Distribución secundaria · 10.09 Coste laboral unitario",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La cuenta de explotación toma el valor añadido que dejó la cuenta anterior y lo reparte entre los factores que lo generaron. Su estructura es simple: del **valor añadido bruto** se restan la **remuneración de asalariados (D.1)** y los **otros impuestos netos sobre la producción (D.29 − D.39)**, y lo que queda es el **excedente bruto de explotación (B.2g)** o, en el caso de los hogares empresarios, la **renta mixta bruta (B.3g)**. Es la cuenta que da la participación del trabajo y del capital en el producto.",
            "**La remuneración de asalariados no es el salario, y esta es la primera confusión que hay que despejar.** El SEC define D.1 como **la remuneración total, en efectivo o en especie, que paga un empleador a un asalariado**, e incluye dos componentes. Los **sueldos y salarios (D.11)**, que es lo que figura en la nómina bruta. Y las **cotizaciones sociales a cargo de los empleadores (D.12)**, que el trabajador no ve. Por tanto **la remuneración de asalariados es el coste laboral completo**, y es coherente con el análisis de incidencia de la ficha 10.03: la contabilidad nacional trata la cotización llamada empresarial como lo que económicamente es, coste del trabajo, y no como un impuesto aparte.",
            "**Dentro de las cotizaciones del empleador hay dos tipos y la segunda desconcierta.** Las **efectivas (D.121)** son las que se pagan realmente a la Seguridad Social o a un fondo. Las **imputadas (D.122)** son la contrapartida contable de las prestaciones que el empleador paga directamente a sus trabajadores sin pasar por ningún sistema de seguros: una indemnización, un complemento por baja, una pensión pagada directamente por la empresa. Como el trabajador recibe una prestación, el sistema necesita que alguien haya cotizado por ella, así que **imputa una cotización de igual importe**. No hay ningún flujo de dinero: es un apunte que hace cuadrar la lógica del sistema.",
            "**Los impuestos de esta cuenta no son todos los impuestos, y el matiz importa.** Aquí solo entran los **otros impuestos sobre la producción (D.29)**, los que gravan la actividad con independencia de lo que se venda: el impuesto sobre bienes inmuebles de un local, el impuesto de actividades económicas, las tasas por licencias. Los impuestos **sobre productos (D.21)** —IVA, impuestos especiales— **no aparecen aquí**, porque se cargan sobre cada unidad vendida y ya quedaron fuera al valorar la producción a precios básicos, como explicaba la ficha 12.02. La contrapartida son las **otras subvenciones a la producción (D.39)**, entre las que están las ayudas de la política agraria común y las bonificaciones a la contratación.",
            "**El saldo de la cuenta tiene dos nombres, y ahí está el contenido conceptual de la ficha.** En una sociedad, lo que queda tras pagar el trabajo y los impuestos es el **excedente bruto de explotación**: remunera al capital, y está claro de quién es. En un hogar con un negocio sin personalidad jurídica —un autónomo— ese saldo **remunera a la vez el trabajo del titular y su capital**, y no hay forma de separarlos porque el titular no se paga un sueldo a sí mismo. El SEC lo reconoce llamándolo **renta mixta (B.3)** en lugar de excedente.",
            "**Y esa mezcla tiene una consecuencia macroeconómica de primer orden.** La **participación de las rentas del trabajo en el PIB** se calcula habitualmente como la remuneración de asalariados sobre el PIB, y esa cifra **infravalora sistemáticamente el peso del trabajo**, porque deja fuera todo el trabajo de los autónomos, que está escondido dentro de la renta mixta. La corrección habitual consiste en imputar a cada autónomo la remuneración media de un asalariado, y **cambia el resultado varios puntos**. En un país con la proporción de autónomos que tiene España, la diferencia entre la serie corregida y la sin corregir no es un matiz.",
            "**Un último detalle del sector hogares que es una pregunta de examen clásica.** Los hogares generan excedente **y** renta mixta, y no por la misma razón. La renta mixta viene de los autónomos. El excedente de explotación viene de una actividad distinta: **los servicios de alquiler que los propietarios se prestan al ocupar sus viviendas**, la producción imputada de la ficha 12.02. Ahí no hay trabajo del titular que remunerar, solo capital, así que es excedente puro y no renta mixta. Según los datos del curso del INE, esa partida ronda la quinta parte del saldo total del sector, y el resto es renta mixta de los autónomos.",
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
            { nom: "Cuenta de explotación", sub: "El reparto del valor añadido entre factores.", cols: ["B.2g = B.1g − D.1 − (D.29 − D.39)"] },
            { nom: "Remuneración de asalariados", sub: "Es el coste laboral completo, no la nómina.", cols: ["D.1 = D.11 + D.12"] },
            { nom: "Cotizaciones del empleador", sub: "Efectivas e imputadas.", cols: ["D.12 = D.121 + D.122"] },
            { nom: "Cotizaciones imputadas", sub: "Apunte sin flujo: cuadra las prestaciones directas.", cols: ["D.122 = contrapartida de prestaciones directas (D.622)"] },
            { nom: "Impuestos de esta cuenta", sub: "Los de productos ya salieron en la valoración.", cols: ["D.29 sobre la producción, no D.21 sobre productos"] },
            { nom: "Excedente de explotación", sub: "Remunera al capital.", cols: ["B.2 — sociedades y alquiler imputado de hogares"] },
            { nom: "Renta mixta", sub: "Trabajo y capital del titular, inseparables.", cols: ["B.3 — hogares con negocio propio"] },
            { nom: "Participación salarial", sub: "Infravalora el trabajo si no se corrige.", cols: ["D.1 / PIB, sin el trabajo de los autónomos"] },
            { nom: "Corrección habitual", sub: "Mueve el resultado varios puntos.", cols: ["imputar a cada autónomo la remuneración media"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: repartir el valor añadido",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la economía de la ficha 10.06, con un valor añadido de **1.000**, una remuneración de asalariados de **500** y unos impuestos netos sobre la producción de **50**, lo que dejaba un excedente de **450**. Ahora abrimos cada partida.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Importe", "Qué contiene"],
          filas: [
            ["Valor añadido bruto", "B.1g", "1.000", "Viene de la cuenta de producción"],
            ["− Sueldos y salarios", "D.11", "385", "La nómina bruta que ve el trabajador"],
            ["− Cotizaciones efectivas del empleador", "D.121", "110", "A la Seguridad Social y a fondos"],
            ["− Cotizaciones imputadas del empleador", "D.122", "5", "Contrapartida de prestaciones directas"],
            ["= Remuneración de asalariados", "D.1", "500", "El coste laboral completo"],
            ["− Otros impuestos sobre la producción", "D.29", "62", "IBI de locales, IAE, tasas"],
            ["+ Otras subvenciones a la producción", "D.39", "12", "PAC, bonificaciones a la contratación"],
            { celdas: ["= Excedente bruto de explotación y renta mixta", "B.2g + B.3g", "450", "Lo que remunera al capital y al autónomo"], clase: "total" },
          ],
          nota: "Dos lecturas que conviene hacer. La primera: de los 500 de coste laboral, **el trabajador solo ve 385 en su nómina**; los otros 115 son cotizaciones que no aparecen en ningún documento que él reciba, y de ahí que el debate público sobre la fiscalidad del trabajo se centre en el IRPF, como señalaba la ficha 10.03. La segunda: los impuestos de esta cuenta son **netos de subvenciones**, 62 menos 12, y son solo los que gravan la actividad; **el IVA no está aquí** porque ya quedó fuera al valorar la producción a precios básicos.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la renta mixta, que es donde el concepto se pone interesante.** Un fontanero autónomo factura **60.000 €** al año y tiene **22.000 €** de gastos entre materiales, vehículo y seguros. Su renta mixta bruta es de **38.000 €**. La pregunta es: ¿cuánto de eso es su sueldo y cuánto el rendimiento de su furgoneta y sus herramientas?",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Reparto", y: "Miles de €" },
          dominio: { x: [0, 2], y: [0, 42] },
          marcasX: [],
          marcasY: [0, 10, 20, 30, 40],
          areas: [
            { puntos: [[0.2, 0], [0.2, 38], [0.8, 38], [0.8, 0]], color: "n3" },
            { puntos: [[1.2, 0], [1.2, 26], [1.8, 26], [1.8, 0]], color: "n2" },
            { puntos: [[1.2, 26], [1.2, 38], [1.8, 38], [1.8, 26]], color: "alerta" },
          ],
          notas: [
            { x: 0.5, y: 19, texto: "38", ancla: "middle" },
            { x: 0.5, y: 15, texto: "renta mixta", ancla: "middle" },
            { x: 1.5, y: 13, texto: "26", ancla: "middle" },
            { x: 1.5, y: 9, texto: "trabajo imputado", ancla: "middle" },
            { x: 1.5, y: 31, texto: "12  capital", ancla: "middle" },
            { x: 0.5, y: -5, texto: "Como lo registra el SEC", ancla: "middle" },
            { x: 1.5, y: -5, texto: "Corrección habitual", ancla: "middle" },
          ],
          nota: "La barra de la izquierda es lo que registra el sistema: **un solo número, 38.000 €**, que el SEC llama renta mixta precisamente porque no se puede desglosar. La de la derecha es la corrección que se aplica en el análisis: imputar al autónomo la remuneración media de un asalariado —aquí 26.000 €— y tratar el resto como rendimiento del capital. **Toda la barra izquierda cuenta hoy como excedente en las estadísticas de reparto factorial**, de modo que la participación salarial publicada deja fuera esos 26.000 € de trabajo real. Multiplíquese por el número de autónomos de un país y se entiende por qué la corrección mueve varios puntos del PIB.",
        },
        {
          tipo: "tabla",
          cabecera: ["Magnitud", "S.11 sociedades", "S.14 hogares"],
          filas: [
            ["Remuneración de asalariados pagada", "64,7 %", "7,3 %"],
            ["Otros impuestos sobre la producción pagados", "47,7 %", "40,7 %"],
            ["Otras subvenciones a la producción recibidas", "60,7 %", "37,5 %"],
            { celdas: ["Excedente de explotación y renta mixta generados", "47,5 %", "42,5 %"], clase: "total" },
          ],
          nota: "Pesos medios en la economía española según el curso de cuentas nacionales del INE. La fila que sorprende es la última: **los hogares generan casi tanto excedente y renta mixta como todas las sociedades juntas**, un 42,5 % frente al 47,5 %. La explicación son las dos actividades del sector: los autónomos y, sobre todo, los alquileres imputados de la vivienda en propiedad. Y la segunda fila también dice algo: los hogares pagan el 40,7 % de los impuestos sobre la producción, básicamente **IBI de viviendas**, que en el sistema es un coste de producir el servicio de alojamiento que se imputan a sí mismos.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la participación salarial y por qué las series discrepan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La proporción del producto que va al trabajo es uno de los indicadores más citados en el debate sobre desigualdad, y también uno en el que series distintas dan cifras que difieren en varios puntos sobre los mismos datos. La causa está entera en esta cuenta.",
            "**La medida directa es la remuneración de asalariados dividida por el PIB**, y es la que publica cualquier base de datos sin advertencia. Su problema es estructural: **solo cuenta el trabajo asalariado**. Todo el trabajo de los autónomos está dentro de la renta mixta, que el sistema no desglosa, y por tanto se contabiliza implícitamente como si fuera rendimiento del capital. La medida sin corregir no mide la participación del trabajo: mide la participación del **trabajo asalariado**.",
            "**El sesgo no es constante en el tiempo, y ahí está lo grave.** Si la proporción de autónomos cambia —porque se asalariza una economía, o al revés porque se externaliza trabajo hacia figuras de falso autónomo— la serie sin corregir se mueve **sin que haya cambiado nada en el reparto real entre trabajo y capital**. Una reforma laboral que convierta asalariados en autónomos hace caer la participación salarial medida y subir el excedente, sin que un solo euro haya cambiado de destinatario. Es un efecto de composición idéntico al de la ficha 10.09.",
            "**La corrección estándar tiene tres variantes y ninguna es obviamente mejor.** Se puede imputar a cada autónomo **la remuneración media de un asalariado** de la economía, que es lo más común y probablemente sobreestima si los autónomos trabajan en sectores de menor productividad. Se puede imputar la remuneración media **de su misma rama de actividad**, que es más fino y exige datos que no siempre existen. O se puede suponer que **la renta mixta se reparte entre trabajo y capital en la misma proporción que en el resto de la economía**, que es elegante y circular. Las tres dan resultados distintos y las tres son defendibles.",
            "**A eso se suma una segunda discusión, sobre el denominador.** Usar el PIB incluye los impuestos netos sobre productos y el consumo de capital fijo, que no van ni al trabajo ni al capital. Muchos análisis prefieren dividir por el **valor añadido neto a coste de los factores**, que excluye ambos, y esa elección mueve el resultado varios puntos más. Y otra sobre si incluir o no el sector inmobiliario imputado, donde por construcción no hay trabajo y cuyo peso creciente arrastra la serie a la baja.",
            "**La conclusión operativa es la de siempre en este bloque.** Antes de citar una participación salarial hay que saber **si está corregida por renta mixta, con qué método, qué denominador usa y si incluye los alquileres imputados**. Sin esos cuatro datos, comparar la cifra de un país con la de otro o la de hoy con la de hace treinta años no informa de nada. Y la discrepancia entre series no es un fallo de las estadísticas: es la consecuencia visible de que **el sistema registra honestamente que hay una renta que no sabe repartir**.",
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
            { t: "Confundir la remuneración de asalariados con los salarios", d: "D.1 incluye las cotizaciones a cargo del empleador, así que es el coste laboral completo y no lo que percibe nadie. En el ejemplo, de 500 de remuneración el trabajador ve 385 en su nómina. Es coherente con el análisis de incidencia: el sistema trata la cotización empresarial como coste del trabajo, no como impuesto aparte." },
            { t: "Buscar el IVA en la cuenta de explotación", d: "Aquí solo entran los otros impuestos sobre la producción (D.29): IBI de locales, IAE, tasas. Los impuestos sobre productos ya quedaron fuera al valorar la producción a precios básicos, y reaparecen al pasar del VAB al PIB a precios de mercado." },
            { t: "Tratar la renta mixta como beneficio", d: "Dentro va el trabajo del titular y el rendimiento de su capital en el mismo número, y el SEC la llama mixta precisamente porque no puede separarlos. Contabilizarla íntegra como excedente es lo que hace que la participación salarial publicada infravalore el peso del trabajo." },
            { t: "Comparar participaciones salariales sin saber si están corregidas", d: "La medida directa solo cuenta el trabajo asalariado. Hay tres métodos habituales de corrección por renta mixta, dos denominadores posibles y la cuestión de si incluir los alquileres imputados. Sin esos datos, comparar entre países o entre décadas no significa nada." },
            { t: "Leer una caída de la participación salarial sin mirar la composición", d: "Si una reforma convierte asalariados en autónomos, la serie sin corregir cae y el excedente sube sin que un solo euro haya cambiado de destinatario. Es un efecto de composición, no un cambio en el reparto real entre trabajo y capital." },
            { t: "Suponer que las cotizaciones imputadas implican algún pago", d: "D.122 no mueve dinero: es la contrapartida contable de las prestaciones que un empleador paga directamente a sus trabajadores sin pasar por un sistema de seguros. Como el trabajador recibe una prestación, el sistema imputa una cotización del mismo importe para que la lógica cuadre." },
            { t: "Creer que todo el saldo de los hogares es renta mixta", d: "Los hogares generan también excedente de explotación puro, procedente de los servicios de alquiler que los propietarios se prestan al ocupar su vivienda: ahí no hay trabajo del titular que remunerar. Según los datos del INE ronda la quinta parte del saldo del sector, y el resto sí es renta mixta de los autónomos." },
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
            "Esta cuenta alimenta directamente varios de los indicadores más usados del análisis macroeconómico.",
          ],
          lista: [
            "La **remuneración por asalariado** que sale de aquí es el numerador del coste laboral unitario de la ficha 10.09, y su denominador es la productividad por ocupado de la ficha 12.02. Que el numerador incluya las cotizaciones del empleador es lo que hace del CLU una medida de coste y no de salario.",
            "El **excedente de explotación** es la base del análisis de márgenes empresariales, y su descomposición junto a la remuneración y los impuestos por unidad producida es la herramienta con la que se discute si un episodio inflacionista viene de costes laborales o de beneficios, como señalaba la ficha 10.08.",
            "Los **otros impuestos sobre la producción** son una figura distinta de los impuestos sobre productos de la ficha 10.03, y confundirlos deforma cualquier cálculo de presión fiscal por figuras. El IBI de una vivienda ocupada por su propietario es aquí un **coste de producción**, no un impuesto sobre el patrimonio del hogar.",
            "El **excedente y la renta mixta** son la entrada de la cuenta de asignación de la renta primaria de la ficha 12.04, donde se les suman y restan las rentas de la propiedad hasta llegar al saldo de rentas primarias.",
            "Y las **cotizaciones sociales** aparecen aquí como coste laboral y volverán a aparecer en la ficha 12.06 como recurso de las administraciones públicas, tras pasar por los hogares. Ese recorrido en dos etapas —primero coste del empleador, después recurso del hogar, después ingreso público— es una de las secuencias que peor se entienden del sistema.",
          ],
          cierre:
            "El aviso general es que **esta cuenta reparte, no crea**. Todo lo que aparece aquí ya estaba en el valor añadido, y lo único que hace la cuenta es decidir a quién se atribuye. Las discusiones sobre reparto factorial son, literalmente, discusiones sobre cómo se traza la raya dentro de esta cuenta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Una empresa paga 500 de remuneración de asalariados. ¿Cuánto ve el trabajador?", a: "Menos: en el ejemplo, 385 de sueldos y salarios (D.11). Los otros 115 son cotizaciones a cargo del empleador (D.12), efectivas o imputadas, que no figuran en ningún documento que el trabajador reciba. La remuneración de asalariados es el coste laboral completo, no la nómina." },
            { q: "¿Por qué el IVA no aparece en la cuenta de explotación?", a: "Porque es un impuesto sobre productos (D.21) y ya quedó fuera al valorar la producción a precios básicos en la cuenta anterior. Aquí solo entran los otros impuestos sobre la producción (D.29), los que gravan la actividad con independencia de lo que se venda: IBI de locales, IAE, tasas por licencias." },
            { q: "¿Qué es la renta mixta y por qué se llama así?", a: "El saldo de la cuenta de explotación en un hogar con negocio propio. Remunera a la vez el trabajo del titular y su capital, y no hay forma de separarlos porque el autónomo no se paga un sueldo a sí mismo. El SEC lo reconoce en el nombre: es mixta porque contiene dos rentas de naturaleza distinta que el sistema no puede desglosar." },
            { q: "¿Por qué la participación salarial publicada infravalora el peso del trabajo?", a: "Porque se calcula como remuneración de asalariados sobre PIB, y deja fuera todo el trabajo de los autónomos, escondido dentro de la renta mixta y contabilizado implícitamente como rendimiento del capital. Corregirlo imputando a cada autónomo la remuneración media de un asalariado mueve el resultado varios puntos." },
            { q: "Una reforma convierte asalariados en autónomos. ¿Qué le pasa a la participación salarial medida?", a: "Cae, y el excedente sube, sin que un solo euro haya cambiado de destinatario. Es un efecto de composición: el mismo trabajo pasa de contarse en D.1 a esconderse dentro de la renta mixta. Por eso el sesgo de la medida sin corregir no es constante en el tiempo y las comparaciones históricas exigen la corrección." },
            { q: "¿De dónde sale el excedente de explotación del sector hogares, si no es de los autónomos?", a: "De los servicios de alquiler que los propietarios se prestan al ocupar sus propias viviendas: la producción imputada de la ficha 12.02. Ahí no hay trabajo del titular que remunerar, solo capital, así que es excedente puro y no renta mixta. Ronda la quinta parte del saldo del sector según los datos del INE." },
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
              q: "Un autónomo obtiene 30.000 € de renta mixta. ¿Es su beneficio empresarial?",
              opciones: [
                "No: dentro va el trabajo del titular y el rendimiento de su capital en el mismo número, y el SEC no puede separarlos",
                "No: la renta mixta solo recoge la retribución de su trabajo",
                "Sí, una vez descontada su cotización de autónomo",
                "Sí: es lo que le queda tras pagar todos sus costes",
              ],
              correcta: 0,
              porque: [
                "Se llama mixta precisamente por eso. Contabilizarla entera como excedente atribuye al capital una renta que en gran medida es salarial.",
                "Tampoco es solo trabajo: hay capital invertido en el negocio que también se está retribuyendo.",
                "La cotización es un gasto más y no resuelve el problema conceptual de qué parte retribuye trabajo y qué parte capital.",
                "Le queda eso, y no todo ello retribuye al capital: buena parte paga su propio trabajo.",
              ],
            },
            {
              q: "Una reforma convierte a muchos asalariados en autónomos. ¿Qué le ocurre a la participación salarial sin corregir?",
              opciones: [
                "Cae solo si además bajan los salarios de los que siguen siendo asalariados",
                "Cae, y el excedente sube, sin que un solo euro haya cambiado de destinatario",
                "No varía: la renta total del trabajo es la misma",
                "Sube, porque los autónomos declaran rentas mayores",
              ],
              correcta: 1,
              porque: [
                "El efecto aparece aunque ningún salario se mueva.",
                "Es un efecto de composición puro, y por eso hay que mirar qué ha pasado con el empleo antes de interpretar una caída de la participación salarial como un cambio en el reparto.",
                "La renta del trabajo es la misma y deja de estar registrada como remuneración de asalariados: pasa a renta mixta.",
                "El nivel de las rentas declaradas no es lo que mueve el indicador: lo mueve el cambio de epígrafe.",
              ],
            },
            {
              q: "¿Qué son las cotizaciones sociales imputadas (D.122)?",
              opciones: [
                "Las cotizaciones que el Estado paga por sus funcionarios",
                "Las que el trabajador paga y el empleador ingresa en su nombre",
                "Las cotizaciones estimadas de la economía sumergida",
                "La contrapartida contable de prestaciones que un empleador paga directamente a sus trabajadores sin pasar por un sistema de seguridad social: no mueven dinero",
              ],
              correcta: 3,
              porque: [
                "Las de los funcionarios son efectivas cuando se ingresan en un régimen; lo imputado es otra cosa.",
                "Esas son cotizaciones efectivas a cargo del trabajador, y sí implican un pago real.",
                "La economía sumergida se estima por otras vías y no da lugar a esta partida.",
                "Se registra el flujo como si existiera para que la prestación tenga origen contable, pero no hay ningún ingreso ni pago detrás.",
              ],
            },
            {
              q: "¿Es todo el saldo de la cuenta de explotación de los hogares renta mixta?",
              opciones: [
                "No: hay también excedente de explotación puro, el de los servicios de alquiler que los propietarios se prestan al ocupar su vivienda",
                "No: incluye además la remuneración de asalariados que perciben sus miembros",
                "Sí: los hogares no tienen capital productivo",
                "Sí, salvo en los hogares con empleados domésticos",
              ],
              correcta: 0,
              porque: [
                "Ahí no hay ningún trabajo del titular que separar, así que es excedente sin más: son los alquileres imputados de la vivienda en propiedad.",
                "Los sueldos que perciben sus miembros los reciben de otros sectores; no forman parte del saldo de explotación del hogar como productor.",
                "Sí lo tienen, y muy voluminoso: la vivienda que ocupan.",
                "Los empleados domésticos generan remuneración de asalariados pagada por el hogar, no cambian la naturaleza del saldo.",
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
            { ref: "SEC 2010, capítulo 4 — operaciones D.1, D.2 y D.3", nota: "las definiciones de remuneración, impuestos y subvenciones sobre la producción con todos sus desgloses." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre distribución de la renta explica bien por qué existe la categoría de renta mixta." },
            { ref: "Gollin, «Getting Income Shares Right», 2002", nota: "el artículo que mostró cuánto cambia la participación salarial según cómo se trate la renta mixta; la referencia obligada del caso práctico." },
            { ref: "Banco de España, análisis del reparto factorial de la renta", nota: "aplicación a datos españoles, con las correcciones por autónomos explicitadas." },
            { ref: "INE, Curso de Cuentas Nacionales — cuenta de explotación por sectores", nota: "los pesos reales de cada sector en remuneración, impuestos y excedente en España." },
          ],
        },
      ],
    },
  ],
};
