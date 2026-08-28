/* Ficha 10.06 — SEC 2010: sectores institucionales y secuencia de cuentas. */

export default {
  codigo: "10.06",
  titulo: "SEC 2010: sectores institucionales y secuencia de cuentas",
  nivel: 3,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "La contabilidad nacional no es una lista de cifras sino una cadena: el saldo de cada cuenta es la primera partida de la siguiente. Entender ese encadenamiento convierte un conjunto de agregados sueltos en un relato completo de qué produce una economía, cómo lo reparte, cuánto ahorra y quién acaba financiando a quién.",
  requiere: "3.01 Producto y renta nacional · 10.03 Sistema fiscal español",
  abre: "10.07 Producción, VAB y PIB · 10.08 Índices encadenados · 10.10 Cuentas trimestrales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **SEC 2010** es el reglamento europeo que fija cómo se elaboran las cuentas nacionales de todos los Estados miembros. Su carácter obligatorio no es un detalle burocrático: significa que las cifras de déficit, deuda y PIB con las que se aplican las reglas fiscales europeas están definidas por una norma jurídica común, y que **discrepancias metodológicas se convierten en discrepancias de miles de millones**. Buena parte de las discusiones sobre si una operación computa o no en el déficit son, literalmente, discusiones sobre la interpretación de este reglamento.",
            "**La primera decisión estructural del sistema es cómo se agrupa a los agentes.** El SEC clasifica a todas las unidades residentes en cinco **sectores institucionales**: sociedades no financieras, instituciones financieras, administraciones públicas, hogares —incluidos los empresarios individuales— e instituciones sin fines de lucro al servicio de los hogares. A ellos se añade el **resto del mundo**, que no es un sector residente sino la contrapartida de todas las operaciones con el exterior. El criterio de clasificación **no es la actividad sino la naturaleza de la unidad**: quién toma las decisiones y de dónde salen sus recursos.",
            "**Ese criterio tiene consecuencias muy concretas y muy discutidas.** Una empresa pública se clasifica dentro de las administraciones si **no cubre con sus ventas al menos la mitad de sus costes de producción**; si los cubre, es una sociedad no financiera. La diferencia decide si su deuda computa como deuda pública, y ha sido el origen de sonoras reclasificaciones a posteriori en varios países. La misma lógica se aplica a colaboraciones público-privadas: **quién asume el riesgo determina en qué balance figura la infraestructura**, y la respuesta correcta a menudo llega años después de haberla construido.",
            "**La segunda decisión estructural es la secuencia de cuentas**, que es la aportación conceptual más valiosa del sistema. No se trata de una lista de agregados sino de una **cadena de cuentas encadenadas por sus saldos**: cada cuenta tiene recursos y empleos, su diferencia es un saldo contable, y **ese saldo abre la cuenta siguiente**. La secuencia responde a cinco preguntas en orden: qué se produce, cómo se reparte esa renta entre los factores, cómo la modifican las rentas de la propiedad, cómo la modifican impuestos y transferencias, y qué se hace con la renta disponible resultante.",
            "**Vale la pena nombrar los saldos porque son los agregados que todo el mundo cita sin saber de dónde salen.** De la cuenta de producción sale el **valor añadido**. De la de explotación, el **excedente bruto de explotación**, que remunera al capital. De la de asignación de renta primaria, la **renta nacional bruta**. De la de distribución secundaria, la **renta disponible**. De la de utilización de la renta, el **ahorro**. Y de la cuenta de capital, la **capacidad o necesidad de financiación**, que es el saldo que dice si un sector presta o toma prestado del resto.",
            "**El resultado más potente de todo el sistema es que las capacidades y necesidades de financiación de todos los sectores suman el saldo con el exterior.** Si los hogares ahorran mucho, las empresas invierten poco y las administraciones tienen déficit, la suma determina si el país presta o pide prestado al resto del mundo. **Es una identidad contable, no una teoría**, y por eso es tan útil para desactivar afirmaciones ligeras: no se puede pedir simultáneamente que el sector público reduzca su déficit, que las familias ahorren más, que las empresas inviertan lo mismo y que el saldo exterior no cambie. **Los cuatro deseos son aritméticamente incompatibles.**",
            "**Dos advertencias sobre el uso.** La primera: las cuentas registran **flujos** en las cuentas corrientes y de capital, y **saldos vivos** en los balances financieros, y confundirlos es la fuente del clásico error de mezclar déficit con deuda. La segunda: las **cuentas financieras** cierran el sistema mostrando en qué instrumentos se materializa la capacidad de financiación, y su discrepancia con la cuenta de capital —que en teoría debería ser cero— es un indicador honesto de la calidad de la estimación, publicado como **ajuste** y sistemáticamente ignorado en los comentarios.",
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
            { nom: "Cuenta de producción", sub: "Saldo: valor añadido bruto.", cols: ["VAB = Producción − Consumos intermedios"] },
            { nom: "Cuenta de explotación", sub: "Saldo: excedente bruto de explotación.", cols: ["EBE = VAB − Remuneración − Impuestos netos producción"] },
            { nom: "Renta primaria", sub: "Saldo: renta nacional bruta.", cols: ["RNB = PIB + rentas primarias netas del exterior"] },
            { nom: "Distribución secundaria", sub: "Saldo: renta disponible. Aquí está la redistribución.", cols: ["RND = RNB + transferencias corrientes netas"] },
            { nom: "Utilización de la renta", sub: "Saldo: ahorro.", cols: ["S = RND − Consumo final"] },
            { nom: "Cuenta de capital", sub: "Saldo: capacidad o necesidad de financiación.", cols: ["CF = S + transferencias de capital − FBC"] },
            { nom: "Identidad de saldos sectoriales", sub: "Aritmética, no teoría.", cols: ["CF hogares + empresas + AAPP = saldo exterior"] },
            { nom: "Criterio de sectorización", sub: "Decide qué es deuda pública y qué no.", cols: ["productor de mercado si ventas $\\geq 50\\ \\%$ de los costes"] },
            { nom: "Flujo frente a saldo vivo", sub: "El error clásico: déficit no es deuda.", cols: ["déficit = flujo anual · deuda = saldo acumulado"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la cadena completa de una economía",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Recorremos la secuencia entera para la economía de la ficha 3.01, con las mismas cifras, de modo que se vea de dónde salían aquellos agregados. Todo está en la misma unidad y **cada fila empieza donde terminó la anterior**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Cuenta", "Recursos y empleos", "Saldo"],
          filas: [
            ["Producción", "Producción 1.900 − Consumos intermedios 900", "VAB = 1.000"],
            ["Explotación", "VAB 1.000 − Remuneración de asalariados 500 − Impuestos netos sobre la producción 50", "EBE = 450"],
            ["Renta primaria", "PIB 1.000 + rentas de la propiedad netas −20", "RNB = 980"],
            ["Distribución secundaria", "RNB 980 + transferencias corrientes netas +5", "RND = 985"],
            ["Utilización de la renta", "RND 985 − Consumo final 835", "Ahorro = 150"],
            { celdas: ["Capital", "Ahorro 150 + transferencias de capital 0 − Formación bruta de capital 180", "Necesidad de financiación = −30"], clase: "total" },
            ["Financiera", "Adquisición neta de activos − pasivos netos contraídos", "−30, por construcción"],
          ],
          nota: "Léase la columna de saldos de arriba abajo: **1.000 → 450 · 980 → 985 → 150 → −30**. Cada uno es la primera partida de la cuenta siguiente, y ninguno flota por su cuenta. Obsérvese además el cierre: esa **necesidad de financiación de −30** es exactamente el saldo de la balanza de pagos calculado en la ficha 3.10, donde salía de sumar −45 de bienes y servicios, +25 de rentas, −8 y −2 de transferencias. **No es una coincidencia sino la misma identidad vista desde dos sistemas contables distintos**, y comprobarlo es la mejor forma de convencerse de que el sistema cuadra.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora el resultado más útil de toda la ficha: los saldos sectoriales.** La misma economía, desagregada en sus tres grandes sectores residentes. Cada uno tiene su propia secuencia de cuentas y su propio saldo final.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Sectores", y: "Saldo" },
          dominio: { x: [0, 4], y: [-100, 60] },
          marcasX: [],
          marcasY: [-100, -50, 0, 50],
          areas: [
            { puntos: [[0.15, 0], [0.15, 40], [0.85, 40], [0.85, 0]], color: "acento" },
            { puntos: [[1.15, 0], [1.15, 20], [1.85, 20], [1.85, 0]], color: "acento" },
            { puntos: [[2.15, 0], [2.15, -90], [2.85, -90], [2.85, 0]], color: "alerta" },
            { puntos: [[3.15, 0], [3.15, -30], [3.85, -30], [3.85, 0]], color: "n4" },
          ],
          series: [
            { nombre: "", color: "tinta", grosor: 1.4, puntos: [[0, 0], [4, 0]] },
          ],
          notas: [
            { x: 0.5, y: 47, texto: "+40", ancla: "middle" },
            { x: 1.5, y: 27, texto: "+20", ancla: "middle" },
            { x: 2.5, y: -97, texto: "−90", ancla: "middle" },
            { x: 3.5, y: -37, texto: "−30", ancla: "middle" },
            { x: 0.5, y: -8, texto: "Hogares", ancla: "middle" },
            { x: 1.5, y: -8, texto: "Empresas", ancla: "middle" },
            { x: 2.5, y: 8, texto: "AA. PP.", ancla: "middle" },
            { x: 3.5, y: 8, texto: "TOTAL", ancla: "middle" },
          ],
          nota: "Las tres primeras barras son las capacidades y necesidades de financiación de los sectores residentes; la cuarta es su **suma**, y coincide necesariamente con el saldo frente al resto del mundo. Los hogares prestan 40, las empresas prestan 20, las administraciones toman prestados 90, y el país en conjunto necesita **30 del exterior**. Aquí está el uso práctico: **si el sector público redujera su déficit en 30 sin que nadie más cambiara de conducta, el país dejaría de endeudarse fuera**. Pero exigir simultáneamente menos déficit público, más ahorro de las familias, la misma inversión empresarial y un saldo exterior sin cambios es pedir algo **aritméticamente imposible**, y esa combinación se pide constantemente.",
        },
        {
          tipo: "tabla",
          cabecera: ["Sector", "Ahorro", "Inversión", "Capacidad o necesidad"],
          filas: [
            ["Hogares", "120", "80", "+40"],
            ["Sociedades", "90", "70", "+20"],
            ["Administraciones públicas", "−60", "30", "−90"],
            { celdas: ["Total economía nacional", "150", "180", "−30"], clase: "total" },
          ],
          nota: "La columna de ahorro de las administraciones es negativa porque **su consumo e intereses superan a sus ingresos corrientes**, lo que se llama desahorro público. Nótese que su necesidad de financiación de 90 no coincide con su desahorro de 60: la diferencia son los 30 de inversión pública. Es la razón de que **déficit público e inversión pública sean cosas distintas**, y de que la discusión europea sobre excluir la inversión del cómputo del déficit —la llamada regla de oro— tenga una base contable identificable en esta tabla y no sea un artificio.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué computa como deuda pública y por qué se discute",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta de si una operación entra o no en el déficit público parece un tecnicismo contable y decide miles de millones y, en ocasiones, la política económica de un país. El SEC 2010 fija las reglas, pero su aplicación exige juicios que Eurostat arbitra, a veces años después.",
            "**El primer campo de batalla es la sectorización de las empresas públicas.** Una entidad controlada por el Estado que cubre con sus ventas al menos la mitad de sus costes de producción es un **productor de mercado** y se clasifica fuera de las administraciones; si no llega a ese umbral, se clasifica dentro y **su deuda pasa a ser deuda pública**. Ese umbral del 50 % es una frontera nítida sobre una realidad continua, y por tanto un incentivo evidente: mantener las ventas justo por encima cambia la clasificación de toda la entidad. Es el mismo fenómeno de umbral que la ficha 10.01 describía para las empresas privadas y que la regresión discontinua de la ficha 4.07 sabe detectar.",
            "**El segundo son las colaboraciones público-privadas.** Una infraestructura construida por un socio privado computa fuera del balance público solo si **el privado asume de verdad el riesgo de construcción y, además, el de demanda o el de disponibilidad**. Cuando el contrato garantiza ingresos mínimos al concesionario, el riesgo real lo sigue asumiendo el Estado y la operación debe consolidarse. Varios países han visto reclasificar autopistas y hospitales años después de inaugurarlos, con el consiguiente salto de la deuda registrada sin que hubiera ocurrido nada nuevo.",
            "**El tercero es el criterio de devengo frente al de caja.** El SEC registra las operaciones **cuando se genera la obligación económica, no cuando se paga**. Un impago a proveedores no reduce el déficit del ejercicio, solo lo convierte en deuda comercial, y por eso los planes de pago a proveedores no empeoran el déficit cuando se ejecutan: el gasto ya estaba contabilizado. Es una de las virtudes del sistema y una de las cosas que peor se explica públicamente.",
            "**El cuarto es la deuda de la ficha 3.11 frente a los compromisos que no se registran.** La deuda pública según el protocolo de déficit excesivo tiene una definición precisa —valores, préstamos y efectivo, a valor nominal y consolidada— que **deja fuera pasivos económicamente reales**: los compromisos futuros de pensiones de la ficha 10.04, las garantías concedidas y los avales que solo computan si se ejecutan. Un país puede reducir su deuda registrada trasladando compromisos a categorías no computables sin haber mejorado su posición.",
            "**La conclusión práctica para leer cualquier cifra de déficit o deuda.** Preguntar si es en términos SEC o de caja, porque no coinciden. Comprobar el perímetro de consolidación, es decir, qué entidades están dentro. Recordar que las reclasificaciones son retroactivas, de modo que las series se revisan hacia atrás y **el dato de hace cinco años puede no ser el que se publicó entonces**, que es el problema de los datos en tiempo real de la ficha 10.10. Y desconfiar de operaciones cuyo principal atractivo es que no computan: **si una operación mejora la cifra sin mejorar la posición económica, el sistema acaba corrigiéndola**, normalmente cuando ya nadie puede deshacerla.",
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
            { t: "Leer los agregados como cifras sueltas", d: "El valor añadido, el excedente de explotación, la renta nacional, la renta disponible, el ahorro y la capacidad de financiación son saldos encadenados: cada uno abre la cuenta siguiente. Citar uno sin saber de dónde viene ni a dónde va impide detectar incoherencias que el encadenamiento hace evidentes." },
            { t: "Pedir a la vez menos déficit público, más ahorro familiar y el mismo saldo exterior", d: "Los saldos sectoriales suman el saldo frente al resto del mundo por identidad contable. Si tres de los cuatro términos se fijan, el cuarto queda determinado. No es una posición teórica discutible: es aritmética, y se incumple constantemente en el debate público." },
            { t: "Confundir déficit con deuda", d: "El déficit es un flujo del ejercicio y la deuda un saldo vivo acumulado. Las cuentas corriente y de capital registran flujos; los balances financieros, saldos. Es el error más elemental y el más repetido, y basta con mirar en qué cuenta aparece cada magnitud para no cometerlo." },
            { t: "Identificar déficit público con inversión pública", d: "En el ejemplo, las administraciones tienen un desahorro de 60 y una necesidad de financiación de 90: la diferencia son 30 de inversión. Distinguirlos es lo que da sentido al debate sobre excluir la inversión del cómputo del déficit, y mezclarlos lo hace ininteligible." },
            { t: "Clasificar los sectores por su actividad", d: "El criterio del SEC es la naturaleza de la unidad y el origen de sus recursos, no lo que hace. Una empresa pública que no cubre la mitad de sus costes con ventas es administración pública a efectos contables, aunque produzca y venda. De esa regla dependen reclasificaciones de miles de millones." },
            { t: "Creer que impagar a proveedores reduce el déficit", d: "El SEC registra en devengo: la obligación se contabiliza cuando se genera, no cuando se paga. Retrasar el pago convierte gasto en deuda comercial sin alterar el déficit del ejercicio, y por eso los planes de pago a proveedores no lo empeoran al ejecutarse." },
            { t: "Tomar la deuda registrada como la posición completa del Estado", d: "La definición del protocolo de déficit excesivo deja fuera compromisos económicamente reales: pensiones futuras, garantías y avales no ejecutados. Un país puede reducir la cifra publicada trasladando compromisos a categorías no computables sin haber mejorado nada." },
            { t: "Ignorar el ajuste entre la cuenta de capital y la financiera", d: "En teoría ambas dan la misma capacidad de financiación, y en la práctica difieren. Esa discrepancia se publica y es un indicador honesto de la calidad de la estimación, con la misma función que las revisiones de la ficha 10.10. Nadie la cita, y es de lo más informativo que hay en las cuentas." },
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
            "Esta ficha es la contabilidad nacional misma, así que el puente apunta a cómo el sistema se conecta con el resto del plan.",
          ],
          lista: [
            "La **identidad de saldos sectoriales** es la traducción contable de la identidad ahorro-inversión de la ficha 3.01, y desactiva buena parte de las afirmaciones ligeras sobre política económica. Cuando alguien propone reducir el déficit público sin decir qué sector va a compensar, está proponiendo algo cuyo resultado depende enteramente de esa compensación.",
            "La **cuenta de distribución secundaria** es donde vive toda la redistribución: impuestos directos, cotizaciones y prestaciones de las fichas 10.03 y 10.04. Comparar la desigualdad de la renta primaria con la de la renta disponible mide exactamente cuánto redistribuye un sistema fiscal y de prestaciones, y es la forma correcta de evaluarlo.",
            "Los **impuestos sobre productos** son la bisagra entre precios básicos y precios de mercado, y por tanto entre esta ficha y la 10.07, donde se explica cómo cuadran los tres enfoques de cálculo del PIB con esa partida en medio.",
            "Las **cuentas trimestrales** de la ficha 10.10 son una versión abreviada de esta secuencia, estimada con menos información y conciliada después con la anual. Sus revisiones se entienden mucho mejor sabiendo qué eslabones de la cadena se estiman y cuáles se derivan por diferencia.",
            "Y las **cuentas financieras** cierran el sistema al mostrar en qué instrumentos —depósitos, valores, préstamos, participaciones— se materializa la capacidad de financiación de cada sector. Es donde el análisis macroeconómico se conecta con el sistema financiero del bloque 7, y donde se ve quién financia realmente a quién.",
          ],
          cierre:
            "El hábito que conviene adquirir es leer cualquier cifra macroeconómica preguntándose **en qué cuenta está y cuál es su saldo**. Con eso, agregados que parecían arbitrarios se convierten en eslabones de una cadena, y las incoherencias de muchos argumentos económicos se vuelven visibles sin necesidad de ningún modelo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la necesidad de financiación de −30 coincide con el saldo de la balanza de pagos?", a: "Porque son la misma magnitud vista desde dos sistemas contables. La cuenta de capital la obtiene como ahorro más transferencias de capital menos inversión; la balanza de pagos, sumando bienes y servicios, rentas y transferencias con el exterior. Que ambas den −30 no es coincidencia: es la identidad que garantiza que el sistema cuadre." },
            { q: "¿Se puede reducir el déficit público sin que cambie nada más?", a: "No, si por «nada más» se entiende también el saldo exterior. Los saldos sectoriales suman por identidad el saldo frente al resto del mundo, así que reducir el déficit público en 30 exige que algún otro sector ahorre menos, invierta más, o que el país deje de endeudarse fuera. Los cuatro deseos simultáneos son aritméticamente incompatibles." },
            { q: "Las administraciones desahorran 60 y necesitan financiación por 90. ¿De dónde salen los 30 restantes?", a: "De la inversión pública, que figura en la cuenta de capital y no en la de utilización de la renta. Distinguir el desahorro corriente de la necesidad total de financiación es lo que da sentido al debate sobre excluir la inversión del cómputo del déficit, porque separa gasto que se consume de gasto que crea activos." },
            { q: "¿Cuándo la deuda de una empresa pública pasa a ser deuda pública?", a: "Cuando la entidad no cubre con sus ventas al menos la mitad de sus costes de producción, en cuyo caso el SEC la clasifica dentro de las administraciones públicas. El criterio es la naturaleza de la unidad, no su actividad, y ese umbral del 50 % ha originado reclasificaciones retroactivas de miles de millones en varios países." },
            { q: "Un gobierno retrasa el pago a proveedores. ¿Mejora su déficit?", a: "No. El SEC registra en devengo, es decir, cuando nace la obligación económica y no cuando se paga. El gasto ya está contabilizado, y retrasar el pago solo lo convierte en deuda comercial. Por eso los planes de pago a proveedores no empeoran el déficit al ejecutarse, aunque sí aumenten la deuda registrada." },
            { q: "¿Qué es el ajuste entre la cuenta de capital y la cuenta financiera?", a: "La discrepancia entre dos estimaciones de la misma magnitud, la capacidad de financiación, obtenidas por vías independientes. En teoría debería ser cero y en la práctica no lo es. Se publica, y es uno de los pocos indicadores honestos de la calidad de la estimación que ofrece el sistema, con la misma función que las revisiones." },
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
              q: "Alguien pide a la vez menos déficit público, más ahorro de las familias y el mismo saldo exterior. ¿Es posible?",
              opciones: [
                "Sí, si las empresas mantienen su posición financiera",
                "No: los saldos sectoriales suman el saldo frente al resto del mundo por identidad contable, así que fijar tres determina el cuarto",
                "No, salvo que aumente la inversión pública",
                "Sí, siempre que el crecimiento del PIB lo permita",
              ],
              correcta: 1,
              porque: [
                "Si las empresas mantienen su posición, precisamente entonces el sistema queda sobredeterminado y la petición es imposible.",
                "No es una cuestión de voluntad política ni de coyuntura: es aritmética de las cuentas nacionales. Alguien tiene que acabar endeudándose.",
                "La inversión pública forma parte del saldo de las administraciones y no libera la restricción.",
                "El crecimiento cambia el nivel de las magnitudes, no la identidad que las liga.",
              ],
            },
            {
              q: "Las administraciones tienen un desahorro de 60 y una necesidad de financiación de 90. ¿A qué corresponde la diferencia?",
              opciones: [
                "A transferencias de capital recibidas de la Unión Europea",
                "A los intereses de la deuda pendientes de pago",
                "A la inversión pública: 30",
                "A un ajuste estadístico entre la cuenta de capital y la financiera",
              ],
              correcta: 2,
              porque: [
                "Las transferencias de capital reducirían la necesidad de financiación, no la aumentarían.",
                "Los intereses son gasto corriente y ya están dentro del desahorro.",
                "El desahorro es el saldo de la cuenta corriente y la necesidad de financiación incorpora además la cuenta de capital, donde está la inversión. Distinguirlos es lo que permite discutir si el déficit financia gasto corriente o formación de capital.",
                "El ajuste entre ambas cuentas existe y es de otra naturaleza: aquí la diferencia tiene un contenido económico identificable.",
              ],
            },
            {
              q: "Una administración retrasa el pago a sus proveedores hasta el ejercicio siguiente. ¿Reduce el déficit del año?",
              opciones: [
                "Sí, si el retraso se documenta con la conformidad del proveedor",
                "No: el SEC registra en devengo, así que la obligación se contabiliza cuando se genera",
                "Sí: no ha salido dinero de la caja",
                "Solo en la contabilidad presupuestaria, no en la nacional",
              ],
              correcta: 1,
              porque: [
                "La conformidad del proveedor no cambia cuándo se generó la obligación.",
                "Retrasar el pago convierte gasto en deuda comercial sin alterar el déficit registrado: cambia la forma de la deuda, no su existencia.",
                "La caja no es el criterio del SEC, precisamente para que este tipo de maniobra no altere la cifra.",
                "En contabilidad presupuestaria de caja podría aparecer el efecto, y la cifra que se compara en Europa es la nacional.",
              ],
            },
            {
              q: "¿Cómo clasifica el SEC a una empresa pública que no cubre la mitad de sus costes con ventas?",
              opciones: [
                "Depende del porcentaje de capital en manos públicas",
                "Como sociedad no financiera, por su actividad productiva",
                "Como institución sin fines de lucro al servicio de los hogares",
                "Dentro del sector administraciones públicas",
              ],
              correcta: 3,
              porque: [
                "La propiedad importa para el control, pero la frontera la marca el criterio del 50 % de cobertura con ventas.",
                "El criterio del SEC no es lo que la unidad hace, sino su naturaleza y el origen de sus recursos.",
                "Ese sector agrupa a entidades sin ánimo de lucro que sirven a los hogares, no a empresas públicas.",
                "Si no cubre con ventas al menos la mitad de sus costes, no es productor de mercado, y su déficit y su deuda computan como públicos.",
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
            { ref: "Reglamento (UE) 549/2013, SEC 2010", nota: "el texto legal; denso, pero los capítulos de sectores institucionales y de secuencia de cuentas se consultan bien por partes." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "la mejor introducción disponible: explica por qué el sistema está construido así antes de explicar cómo funciona." },
            { ref: "INE, Contabilidad Nacional Anual de España, cuentas por sectores", nota: "los saldos sectoriales reales españoles; comprobar que suman el saldo exterior es el mejor ejercicio para fijar esta ficha." },
            { ref: "Eurostat, Manual on Government Deficit and Debt", nota: "el manual de casos concretos: empresas públicas, colaboraciones público-privadas, avales; de aquí salen las decisiones de sectorización." },
            { ref: "Banco de España, Cuentas Financieras de la Economía Española", nota: "el otro extremo de la cadena: en qué instrumentos se materializa la financiación entre sectores." },
          ],
        },
      ],
    },
  ],
};
