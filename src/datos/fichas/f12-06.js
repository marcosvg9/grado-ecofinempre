/* Ficha 12.06 — Distribución secundaria: impuestos, cotizaciones y prestaciones. */

export default {
  codigo: "12.06",
  titulo: "Distribución secundaria: impuestos, cotizaciones y prestaciones",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "Esta es la cuenta donde vive toda la redistribución. Comparar lo que un sector percibe por producir con lo que le queda para gastar mide exactamente cuánto redistribuye un Estado, y es la única forma limpia de evaluar un sistema fiscal y de prestaciones a la vez.",
  requiere: "12.04 Rentas de la propiedad · 10.03 Sistema fiscal · 10.04 Gasto público y pensiones",
  abre: "12.07 Otras transferencias corrientes · 12.08 Consumo final · 10.04 Pensiones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La **cuenta de distribución secundaria de la renta** parte del saldo de rentas primarias y le aplica todo lo que el Estado quita y da: impuestos directos, cotizaciones y prestaciones. Su saldo es la **renta disponible bruta (B.6)**, que es lo que cada sector puede realmente destinar a consumir o ahorrar. La diferencia entre entrar y salir de esta cuenta **es la redistribución**, medida en euros y sin necesidad de ningún supuesto adicional.",
            "**Los impuestos corrientes sobre la renta y el patrimonio (D.5)** son los directos: el impuesto sobre la renta de las personas físicas, el impuesto de sociedades, los impuestos recurrentes sobre el patrimonio y sobre vehículos. Conviene fijarse en dos exclusiones. **No están aquí los impuestos sobre productos ni sobre la producción**, que salieron en las fichas 12.02 y 12.03 porque afectan al precio y al coste antes de que haya renta que gravar. Y **no están los impuestos sobre el capital** —sucesiones y donaciones—, que por gravar patrimonios transmitidos van a la cuenta de capital de la ficha 12.09.",
            "**Las cotizaciones sociales (D.61) tienen un recorrido en dos etapas que es lo que peor se entiende del sistema.** Primero aparecieron en la cuenta de explotación como parte de la remuneración de asalariados: para el empleador son coste laboral. Después reaparecen aquí, pagadas por los hogares. El sistema hace pasar la cotización empresarial **por las manos del trabajador**: se la atribuye como renta primaria y acto seguido se la quita como cotización. No es un rodeo caprichoso, es la traducción contable de la incidencia económica de la ficha 10.03: **quien soporta la cotización es el trabajador**, aunque la ingrese la empresa.",
            "**El desglose de las cotizaciones sigue esa lógica.** Están las **efectivas a cargo de los empleadores (D.611)**, las **imputadas a cargo de los empleadores (D.612)** —la contrapartida de las prestaciones que la empresa paga directamente, sin sistema de por medio—, las **efectivas a cargo de los hogares (D.613)**, que incluyen tanto las de los asalariados como las de los autónomos, y los **complementos (D.614)**, que recogen las rentas que generan las reservas de los sistemas y que la ficha 12.04 registraba como D.44 antes de reinyectarlas aquí.",
            "**Las prestaciones sociales de esta cuenta son solo las que se pagan en dinero (D.62)**, y esa restricción es importante. Se dividen en **prestaciones de la seguridad social en efectivo (D.621)** —pensiones contributivas, desempleo, incapacidad—, **prestaciones de otros sistemas de seguros sociales (D.622)** —planes de empresa y las prestaciones directas del empleador— y **prestaciones de asistencia social en efectivo (D.623)**, no vinculadas a cotización previa. **Lo que se entrega en especie no está aquí**: la sanidad y la educación públicas van por otra vía, la de las transferencias sociales en especie de la ficha 12.08, y esa separación es deliberada.",
            "**El saldo, la renta disponible, tiene una peculiaridad por sectores que conviene anticipar.** Para los hogares y las administraciones públicas es una magnitud llena de contenido. Para las **sociedades** es casi todo su ahorro, porque una sociedad no consume: no tiene gasto en consumo final, así que su renta disponible pasa entera a la cuenta siguiente. De ahí sale otra pregunta clásica del bloque: **el ahorro de una sociedad coincide con su renta disponible**, salvo el pequeño ajuste por variación de derechos por pensiones que verá la ficha 12.08.",
            "**Y hay una advertencia sobre lo que esta cuenta mide y lo que no.** Comparar la renta primaria con la disponible da **la redistribución monetaria**, que es mucho, pero deja fuera dos cosas grandes. Una es la redistribución en especie, que en un Estado de bienestar desarrollado es de magnitud comparable a la monetaria. La otra es la redistribución que opera a través de los **impuestos indirectos**, que ya actuó antes en la secuencia. Un análisis de progresividad que se quede en esta cuenta está mirando una parte importante del cuadro y no el cuadro entero.",
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
            { nom: "Cuenta de distribución secundaria", sub: "Aquí vive la redistribución monetaria.", cols: ["B.6 = B.5 + transferencias corrientes a cobrar − a pagar"] },
            { nom: "Impuestos corrientes", sub: "Los directos; no los de productos ni los de capital.", cols: ["D.5 = D.51 renta + D.59 otros"] },
            { nom: "Cotizaciones sociales", sub: "Cuatro componentes, dos etapas.", cols: ["D.61 = D.611 + D.612 + D.613 + D.614"] },
            { nom: "Recorrido de la cotización empresarial", sub: "Coste del empleador, renta y gasto del hogar.", cols: ["D.12 → renta primaria del hogar → D.611"] },
            { nom: "Prestaciones en efectivo", sub: "Solo dinero; lo demás va por D.63.", cols: ["D.62 = D.621 + D.622 + D.623"] },
            { nom: "Renta disponible", sub: "Lo que queda para consumir o ahorrar.", cols: ["B.6 — el saldo de la cuenta"] },
            { nom: "Caso de las sociedades", sub: "No consumen: su renta disponible es su ahorro.", cols: ["B.6 $\\approx$ B.8 en S.11 y S.12"] },
            { nom: "Medida de la redistribución", sub: "Solo la monetaria: falta la de especie.", cols: ["B.6 − B.5 por sector"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: quién cede y quién recibe",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seguimos con la economía de las fichas anteriores, cuya renta nacional bruta era **980**. Ese total se reparte entre los sectores como saldo de rentas primarias, y la cuenta de distribución secundaria lo redistribuye hasta la renta disponible.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Sector", y: "Importe" },
          dominio: { x: [0, 3], y: [0, 780] },
          marcasX: [],
          marcasY: [0, 200, 400, 600],
          areas: [
            { puntos: [[0.12, 0], [0.12, 700], [0.46, 700], [0.46, 0]], color: "n2" },
            { puntos: [[0.54, 0], [0.54, 625], [0.88, 625], [0.88, 0]], color: "alerta" },
            { puntos: [[1.12, 0], [1.12, 150], [1.46, 150], [1.46, 0]], color: "n2" },
            { puntos: [[1.54, 0], [1.54, 125], [1.88, 125], [1.88, 0]], color: "alerta" },
            { puntos: [[2.12, 0], [2.12, 130], [2.46, 130], [2.46, 0]], color: "n2" },
            { puntos: [[2.54, 0], [2.54, 235], [2.88, 235], [2.88, 0]], color: "acento" },
          ],
          notas: [
            { x: 0.29, y: 730, texto: "700", ancla: "middle" },
            { x: 0.71, y: 655, texto: "625", ancla: "middle" },
            { x: 1.29, y: 180, texto: "150", ancla: "middle" },
            { x: 1.71, y: 155, texto: "125", ancla: "middle" },
            { x: 2.29, y: 160, texto: "130", ancla: "middle" },
            { x: 2.71, y: 265, texto: "235", ancla: "middle" },
            { x: 0.5, y: -55, texto: "Hogares", ancla: "middle" },
            { x: 1.5, y: -55, texto: "Sociedades", ancla: "middle" },
            { x: 2.5, y: -55, texto: "AA. PP.", ancla: "middle" },
          ],
          nota: "En cada par, la barra oscura es la **renta primaria** —lo que el sector percibe por producir y por poseer activos— y la clara es la **renta disponible**, lo que le queda tras impuestos, cotizaciones y prestaciones. Los hogares ceden **75** y las sociedades **25**; las administraciones, que apenas generan renta primaria, **casi duplican la suya, de 130 a 235**. Ese es el retrato completo de la redistribución monetaria de esta economía, y se obtiene sin ningún supuesto: es la diferencia entre dos saldos de la secuencia. Lo que el gráfico **no** muestra es la vuelta de esos recursos a los hogares en forma de sanidad y educación, que va por otra cuenta y es de magnitud comparable.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Hogares", "Sociedades", "AA. PP."],
          filas: [
            ["Saldo de rentas primarias", "B.5", "700", "150", "130"],
            ["− Impuestos corrientes", "D.5", "−120", "−25", "+145"],
            ["− Cotizaciones sociales", "D.61", "−110", "—", "+110"],
            ["+ Prestaciones en efectivo", "D.62", "+160", "—", "−160"],
            ["$\\pm$ Transferencias con el exterior", "D.7", "−5", "—", "+10"],
            { celdas: ["= Renta disponible bruta", "B.6", "625", "125", "235"], clase: "total" },
          ],
          nota: "Compruébese que **la suma cuadra con la secuencia del bloque 10**: 625 + 125 + 235 = **985**, que es exactamente la renta nacional disponible que aparecía en la ficha 10.06. Y compruébese de dónde salen esos 5 de diferencia respecto a la renta nacional bruta de 980: **de las transferencias corrientes con el exterior**, que aquí son −5 de remesas que los hogares envían fuera y +10 que reciben las administraciones. Ese es el único componente que no se anula al agregar, porque los impuestos y las prestaciones son operaciones **entre residentes**: lo que un sector paga, otro lo cobra.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la lectura que hace útil esta cuenta.** Los hogares se quedan con el **89,3 %** de su renta primaria y las administraciones con el **180,8 %** de la suya. Ese segundo número no es un error: un Estado genera muy poca renta primaria —su producción es de no mercado y su excedente neto es cero, como demostró la ficha 12.02— y **casi toda su renta procede de esta cuenta**. La contabilidad nacional deja así al desnudo algo que la teoría afirma: **el sector público no es un productor, es un redistribuidor**, y su capacidad de gasto depende íntegramente de operaciones sin contrapartida.",
            "**Los datos españoles refuerzan el punto.** Según el curso de cuentas nacionales del INE, los **hogares pagan el 76,9 %** de los impuestos corrientes de la economía y las **sociedades el 18,8 %**. La cifra descoloca a quien espera que el impuesto de sociedades pese más, y tiene dos explicaciones: el impuesto sobre la renta de las personas físicas es la figura recaudatoria mayor entre los directos, y buena parte de lo que las sociedades no pagan aquí lo pagan sus accionistas al recibir dividendos. **Es la incidencia de la ficha 10.03 apareciendo en las cuentas**: una sociedad no soporta nada, lo soportan personas.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: medir cuánto redistribuye un Estado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta de cuánto redistribuye un sistema fiscal se responde habitualmente con cifras de presión fiscal o con tipos marginales, y ninguna de las dos la contesta. Esta cuenta ofrece la respuesta correcta, y merece ver cómo se construye y qué le falta.",
            "**La medida limpia es comparar la desigualdad antes y después de esta cuenta.** Se calcula la distribución de la **renta primaria** entre los hogares —lo que perciben por trabajar y por poseer— y la de la **renta disponible** —lo que les queda tras impuestos directos, cotizaciones y prestaciones en efectivo—. La diferencia entre ambos índices de desigualdad es el **efecto redistributivo del sistema**, y tiene la virtud enorme de evaluar impuestos y prestaciones **a la vez**, que es como funcionan en la realidad.",
            "**Y el resultado sorprende a quien espera que lo decisivo sea la progresividad de los impuestos.** En la mayoría de países desarrollados, **la mayor parte del efecto redistributivo procede de las prestaciones y no de los impuestos**. La razón es de magnitud: las pensiones y el desempleo mueven mucho más dinero hacia la parte baja de la distribución de lo que la progresividad del impuesto sobre la renta quita en la parte alta. Un sistema con impuestos poco progresivos y prestaciones generosas redistribuye más que uno con impuestos muy progresivos y prestaciones raquíticas.",
            "**Lo que esta medida deja fuera es tan importante como lo que incluye, y son tres cosas.** La primera es la **redistribución en especie**: sanidad, educación y servicios sociales, que van por la cuenta de la ficha 12.08 y cuyo efecto sobre la desigualdad es de magnitud comparable al de las prestaciones en efectivo. La segunda son los **impuestos indirectos**, que actuaron antes en la secuencia y cuyo efecto es regresivo sobre la renta anual, como mostró la ficha 10.03. La tercera es que la **renta primaria ya está condicionada por las instituciones**: el salario mínimo, la negociación colectiva o la regulación del mercado laboral configuran la distribución antes de que llegue ningún impuesto, y eso no aparece como redistribución.",
            "**Esa tercera omisión es la más interesante conceptualmente.** Un país puede alcanzar baja desigualdad final por dos caminos muy distintos: redistribuyendo mucho sobre una distribución primaria muy desigual, o redistribuyendo poco sobre una distribución primaria ya comprimida. Las cifras de efecto redistributivo dirán que el primero redistribuye más, y sin embargo **el resultado puede ser el mismo**. Comparar sistemas solo por su efecto redistributivo medido premia al que tiene el problema mayor.",
            "**La conclusión práctica al leer cualquier estudio sobre redistribución.** Preguntar qué concepto de renta se usa como punto de partida, si incluye o no las transferencias en especie, si considera los impuestos indirectos y qué hace con las pensiones —tratarlas como redistribución o como renta diferida cambia radicalmente el resultado—. Y recordar que las cuentas nacionales dan los **agregados sectoriales** con precisión y no dicen nada sobre el reparto **entre hogares**, para lo cual hacen falta las encuestas y las cuentas distributivas que la ficha 4.02 mencionaba.",
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
            { t: "Buscar el IVA en la cuenta de distribución secundaria", d: "Aquí solo entran los impuestos corrientes sobre la renta y el patrimonio. Los impuestos sobre productos actuaron antes, al valorar la producción a precios básicos, y los impuestos sobre el capital —sucesiones y donaciones— van después, en la cuenta de capital. Cada figura fiscal entra por su puerta." },
            { t: "Creer que la cotización empresarial no pasa por el hogar", d: "El sistema se la atribuye primero al trabajador como parte de su remuneración y renta primaria, y se la quita después como cotización en esta cuenta. Es la traducción contable de la incidencia: quien soporta la cotización es el trabajador, aunque la ingrese la empresa." },
            { t: "Meter la sanidad y la educación públicas en D.62", d: "Las prestaciones de esta cuenta son solo las que se pagan en dinero. Lo que se entrega en especie va por las transferencias sociales en especie (D.63) de la ficha 12.08, y esa separación es deliberada: permite distinguir la renta que el hogar puede gastar como quiera de los servicios que recibe ya decididos." },
            { t: "Medir la redistribución solo con esta cuenta", d: "Da la redistribución monetaria, que es mucho, y deja fuera la que opera en especie —de magnitud comparable— y la de los impuestos indirectos, que actuó antes en la secuencia y es regresiva sobre la renta anual. Un análisis de progresividad que se quede aquí ve una parte importante del cuadro, no el cuadro." },
            { t: "Suponer que la progresividad de los impuestos explica la redistribución", d: "En la mayoría de países desarrollados el grueso del efecto redistributivo viene de las prestaciones, no de los impuestos, por pura magnitud: las pensiones y el desempleo mueven más dinero hacia abajo de lo que la progresividad quita arriba. Un sistema con impuestos poco progresivos y prestaciones generosas redistribuye más que el caso contrario." },
            { t: "Extrañarse de que los hogares paguen el 77 % de los impuestos corrientes", d: "El impuesto sobre la renta de las personas físicas es la figura mayor entre los directos, y buena parte de lo que las sociedades no pagan aquí lo pagan sus accionistas al recibir dividendos. Es la incidencia asomando en las cuentas: una sociedad no soporta nada, lo soportan personas." },
            { t: "Olvidar que impuestos y prestaciones se anulan al agregar", d: "Son operaciones entre residentes: lo que un sector paga, otro lo cobra. Por eso la renta nacional disponible solo difiere de la renta nacional bruta en las transferencias corrientes con el exterior. Toda la redistribución interna es invisible en el agregado y solo se ve al mirar por sectores." },
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
            "Esta es la cuenta que conecta el bloque con casi todo lo estudiado sobre el sector público.",
          ],
          lista: [
            "Los **impuestos corrientes y las cotizaciones** de esta cuenta son el grueso de los ingresos públicos que la ficha 10.03 analizaba por figuras. Comparar su recaudación con la base potencial da los tipos implícitos que aquella ficha recomendaba usar en lugar de los nominales.",
            "Las **prestaciones sociales en efectivo** son la partida mayor del gasto público y el objeto de la ficha 10.04. Las pensiones contributivas son transferencias corrientes, no consumo público, y por eso no forman parte del PIB por el lado del gasto aunque financien consumo cuando el hogar las gasta.",
            "La **renta disponible de los hogares** es el denominador de la tasa de ahorro de la ficha 12.08 y una de las series coyunturales más seguidas, porque anticipa el consumo. Su descomposición entre renta salarial, rentas de la propiedad y prestaciones netas es la herramienta habitual para explicar por qué el consumo se mueve.",
            "Las **cuentas distributivas de los hogares** que el sistema estadístico ha ido desarrollando reparten estos agregados sectoriales entre grupos de renta, y son la respuesta institucional a que un agregado no tiene forma, como advertía la ficha 4.02.",
            "Y la **renta disponible de las administraciones públicas** es la magnitud desde la que se llega a su ahorro y, restando la inversión, a su capacidad o necesidad de financiación: el déficit público de la ficha 12.09. Todo el debate fiscal empieza en esta cuenta.",
          ],
          cierre:
            "Lo que conviene retener es que **esta cuenta no produce nada: solo mueve renta entre sectores**. Y que su saldo, la renta disponible, es el concepto correcto para casi todo lo que interesa preguntar sobre capacidad de gasto, tanto de las familias como del Estado.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la cotización empresarial aparece dos veces en el sistema?", a: "Porque el sistema la hace pasar por el trabajador. Primero es coste laboral del empleador dentro de la remuneración de asalariados; después se atribuye al hogar como renta primaria y acto seguido se le quita como cotización en esta cuenta. Es la traducción contable de la incidencia: quien la soporta es el trabajador, aunque la ingrese la empresa." },
            { q: "Los hogares tienen 700 de renta primaria y 625 de disponible. ¿Qué significa esa diferencia?", a: "Que ceden 75 netos al sistema de impuestos, cotizaciones y prestaciones: pagan 120 de impuestos directos y 110 de cotizaciones, reciben 160 de prestaciones en efectivo y envían 5 al exterior en remesas. Es la redistribución monetaria medida en euros, sin ningún supuesto adicional." },
            { q: "Las administraciones pasan de 130 a 235. ¿Cómo puede casi duplicarse una renta?", a: "Porque un Estado genera muy poca renta primaria: su producción es de no mercado y su excedente neto es cero por construcción. Casi toda su capacidad de gasto procede de esta cuenta, de operaciones sin contrapartida. Las cuentas muestran así que el sector público no es un productor sino un redistribuidor." },
            { q: "¿Por qué la renta nacional disponible solo difiere de la bruta en 5?", a: "Porque impuestos, cotizaciones y prestaciones son operaciones entre residentes: lo que un sector paga, otro lo cobra, y se anulan al agregar. Lo único que no se anula son las transferencias corrientes con el exterior, aquí −5 de remesas de los hogares y +10 que reciben las administraciones. Toda la redistribución interna es invisible en el agregado." },
            { q: "¿Está la sanidad pública en las prestaciones sociales de esta cuenta?", a: "No. D.62 recoge solo las prestaciones pagadas en dinero: pensiones, desempleo, incapacidad, asistencia social en efectivo. Lo que se entrega en especie va por las transferencias sociales en especie (D.63), en la cuenta de la ficha 12.08, y esa separación permite distinguir la renta que el hogar gasta como quiera de los servicios que recibe ya decididos." },
            { q: "¿Qué le falta a esta cuenta para medir toda la redistribución?", a: "Tres cosas: la redistribución en especie, de magnitud comparable a la monetaria; los impuestos indirectos, que actuaron antes en la secuencia y son regresivos sobre la renta anual; y el hecho de que la propia renta primaria ya está condicionada por instituciones como el salario mínimo o la negociación colectiva, que comprimen la distribución antes de que llegue ningún impuesto." },
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
              q: "¿Aparece el IVA en la cuenta de distribución secundaria?",
              opciones: [
                "Sí, en la parte no deducible por las empresas",
                "Sí: es el principal impuesto corriente que pagan los hogares",
                "Solo el IVA soportado por las administraciones públicas",
                "No: aquí solo entran los impuestos corrientes sobre la renta y el patrimonio; el IVA actuó antes, al valorar la producción",
              ],
              correcta: 3,
              porque: [
                "La deducibilidad afecta a quién soporta el impuesto, no a en qué cuenta se registra.",
                "Los hogares lo pagan al consumir, y esa operación no se registra en esta cuenta.",
                "El sector que lo pague no cambia la cuenta en que el impuesto opera.",
                "Los impuestos sobre productos se descontaron al pasar de precios de adquisición a precios básicos. Buscarlos aquí es buscarlos dos cuentas más tarde de donde actúan.",
              ],
            },
            {
              q: "¿De dónde viene la mayor parte del efecto redistributivo en los países desarrollados?",
              opciones: [
                "De la progresividad del impuesto sobre la renta",
                "De los impuestos sobre el patrimonio y las sucesiones",
                "De la imposición indirecta con tipos reducidos",
                "De las prestaciones, por pura magnitud: las pensiones y el desempleo mueven mucho más dinero hacia abajo del que mueven los impuestos",
              ],
              correcta: 3,
              porque: [
                "La progresividad importa y su efecto es menor de lo que sugiere el debate público, que gira casi por completo en torno a ella.",
                "Patrimonio y sucesiones recaudan importes pequeños en comparación.",
                "Los tipos reducidos benefician más en euros a quien más consume, así que no son un buen instrumento redistributivo.",
                "El grueso está en el gasto, no en el ingreso. Discutir solo la escala del impuesto es discutir la parte pequeña del mecanismo.",
              ],
            },
            {
              q: "Los hogares pagan alrededor del 77 % de los impuestos corrientes. ¿Es una anomalía del sistema español?",
              opciones: [
                "No, pero el porcentaje es muy inferior en el resto de la Unión Europea",
                "No: el impuesto sobre la renta de las personas físicas es la figura mayor entre los directos, y lo que las sociedades no pagan aquí lo pagan sus accionistas",
                "Sí, y se corrige al incluir las cotizaciones sociales",
                "Sí: refleja la baja tributación efectiva de las grandes empresas",
              ],
              correcta: 1,
              porque: [
                "El patrón es común en los países desarrollados, no una singularidad española.",
                "El reparto entre sectores no mide quién soporta la carga: la renta societaria acaba llegando a hogares, que tributan por ella.",
                "Las cotizaciones son otra partida de la misma cuenta y no cambian el porqué del reparto de los impuestos corrientes.",
                "La tributación efectiva de las sociedades es un debate real y distinto de por qué esta cifra es alta.",
              ],
            },
            {
              q: "En las sociedades, la renta disponible coincide casi exactamente con su ahorro. ¿Por qué?",
              opciones: [
                "Porque su consumo intermedio ya se descontó en la cuenta de producción",
                "Porque están obligadas a reinvertir sus beneficios",
                "Porque no tienen consumo final: todo lo que les queda tras las transferencias corrientes es, por definición, ahorro",
                "Porque los dividendos se registran en otra cuenta posterior",
              ],
              correcta: 2,
              porque: [
                "El consumo intermedio se descontó antes, y esa no es la razón por la que estos dos saldos coinciden.",
                "No hay tal obligación: pueden repartir cuanto quieran, y eso ya está descontado antes de llegar a este saldo.",
                "El consumo final es un concepto que solo se aplica a hogares, administraciones e instituciones sin fines de lucro. Sin él, renta disponible y ahorro son la misma cifra.",
                "Los dividendos se registran en la cuenta de rentas de la propiedad, que es anterior, y por eso ya no están.",
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
            { ref: "SEC 2010, capítulo 4 — operaciones D.5, D.6 y D.7", nota: "las definiciones de impuestos corrientes, cotizaciones y prestaciones con todos sus desgloses." },
            { ref: "Eurostat, Manual on sources and methods for social protection", nota: "cómo se delimitan y clasifican las prestaciones sociales; útil para entender el desglose de D.62." },
            { ref: "OCDE, Income Distribution Database — metodología", nota: "cómo se mide el efecto redistributivo comparando renta primaria y disponible, y qué queda fuera." },
            { ref: "AIReF y Banco de España, estudios sobre incidencia del sistema fiscal español", nota: "aplicación a datos españoles, con la separación entre efecto de impuestos y de prestaciones." },
            { ref: "INE, Curso de Cuentas Nacionales — cuenta de distribución secundaria", nota: "los pesos reales de cada sector en impuestos corrientes y prestaciones en España." },
          ],
        },
      ],
    },
  ],
};
