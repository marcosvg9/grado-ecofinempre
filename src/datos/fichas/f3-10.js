/* Ficha 3.10 — Economia abierta: tipo de cambio, balanza de pagos, Mundell-Fleming. */

export default {
  codigo: "3.10",
  titulo: "Economía abierta: tipo de cambio, balanza de pagos, Mundell-Fleming",
  nivel: 3,
  bloque: "Macroeconomía",
  tiempo: "5 h",
  nucleo:
    "No puedes tener a la vez tipo fijo, libre movilidad de capital y política monetaria propia. Elegir dos de las tres no es una limitación técnica que pueda sortearse con ingenio: es una restricción lógica, y toda la historia monetaria del último siglo consiste en países cambiando de vértice.",
  requiere: "3.08 Política monetaria · 3.05 Modelo IS-LM · 1.06 Flujo circular",
  abre: "8.03 Curva de tipos · 10.01 Estructura productiva · 10.09 Competitividad",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La **balanza de pagos** registra todas las operaciones entre residentes y no residentes, y su estructura es contable antes que económica. La **cuenta corriente** recoge bienes, servicios, rentas primarias —remuneraciones e intereses y dividendos— y rentas secundarias, entre ellas las remesas. La **cuenta de capital** recoge transferencias de capital, en el caso español principalmente fondos europeos de esa naturaleza. Y la **cuenta financiera** registra la variación de activos y pasivos frente al exterior. Por construcción, **la suma de las tres, con los errores y omisiones, es cero**: si un país compra al exterior más de lo que vende, necesariamente está vendiendo activos o endeudándose por la diferencia.",
            "De ahí sale una identidad que conviene tener siempre presente: en su versión simplificada, **la cuenta corriente es la diferencia entre el ahorro nacional y la inversión**. Un déficit corriente no es un problema de competitividad exportadora sin más: es una economía que **invierte más de lo que ahorra** y financia la diferencia con el resto del mundo. Esa lectura cambia el diagnóstico por completo, porque un déficit puede reflejar una economía atractiva que recibe inversión productiva o una que consume por encima de sus posibilidades, y la aritmética no distingue entre ambas.",
            "El **tipo de cambio** es el precio de una moneda en términos de otra, y hay que separar dos conceptos. El **nominal** es el que se cotiza. El **real** corrige por los precios relativos y es el que mide competitividad: un país puede tener su moneda estable y perder competitividad si sus precios crecen más que los de sus socios. La expresión útil es que el tipo de cambio real depende del nominal y del cociente entre precios exteriores e interiores; en una unión monetaria, donde el nominal frente a los socios está fijado para siempre, **toda la variación de competitividad tiene que pasar por los precios y los costes**, que es exactamente el argumento del coste laboral unitario de la ficha 10.09.",
            "Dos relaciones organizan su comportamiento. La **paridad de poder adquisitivo** sostiene que a largo plazo el tipo de cambio tiende a igualar el poder de compra de las monedas, de modo que un país con más inflación ve depreciarse la suya. Funciona razonablemente a plazos largos y **muy mal a corto**, entre otras razones porque muchos bienes y casi todos los servicios no son comerciables. La **paridad descubierta de tipos de interés** sostiene que un tipo de interés mayor en una moneda debe compensarse con una depreciación esperada de esa moneda, o los inversores se moverían en masa; también se cumple mal en los datos, y su fallo sistemático es uno de los rompecabezas persistentes de la disciplina.",
            "El modelo **Mundell-Fleming** es el IS-LM de la ficha 3.05 abierto al exterior, y su interés está en que **el régimen cambiario invierte la eficacia de las políticas**. Con **tipo flexible y libre movilidad de capital**, una expansión fiscal presiona los tipos al alza, atrae capital, aprecia la moneda y hunde las exportaciones netas: el efecto expansivo se neutraliza casi por completo. En cambio la política monetaria es potentísima, porque la depreciación que provoca refuerza su efecto. Con **tipo fijo**, ocurre lo contrario: la política monetaria se agota —el banco central debe usar sus reservas para sostener la paridad, deshaciendo lo que hizo— y la fiscal actúa con toda su fuerza porque el tipo de cambio no puede apreciarse.",
            "Ese resultado se generaliza en el **triángulo imposible**, que es lo que hay que retener de la ficha. Ningún país puede tener simultáneamente **tipo de cambio fijo, libre movilidad de capital y política monetaria autónoma**. Si fija el tipo y permite el libre movimiento de capitales, su tipo de interés queda determinado por el exterior. Si quiere autonomía monetaria con tipo fijo, tiene que restringir los movimientos de capital. Y si quiere autonomía con libre movilidad, debe dejar flotar la moneda. **No es un dilema práctico sino una imposibilidad lógica**, y explica la historia monetaria del último siglo como una sucesión de países desplazándose de un vértice a otro.",
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
            { nom: "Identidad de la balanza de pagos", sub: "Cierta por construcción.", cols: ["CC + CK − CF + Errores = 0"] },
            { nom: "Cuenta corriente y ahorro", sub: "Versión simplificada, sin cuenta de capital.", cols: ["CC = S − I"] },
            { nom: "Con desglose sectorial", sub: "Enlaza con los saldos de la ficha 1.06.", cols: ["$\\mathrm{CC} = (S_{\\text{priv}} - I) + (T - G)$"] },
            { nom: "Tipo de cambio real", sub: "Lo que mide competitividad.", cols: ["$q = \\dfrac{e P^*}{P}$"] },
            { nom: "En variaciones", sub: "Aproximación válida con tasas pequeñas.", cols: ["$\\Delta q \\approx \\Delta e + \\pi^* - \\pi$"] },
            { nom: "Paridad de poder adquisitivo", sub: "Razonable a largo plazo, mala a corto.", cols: ["$\\Delta e \\approx \\pi - \\pi^*$"] },
            { nom: "Paridad descubierta de tipos", sub: "Su incumplimiento es un rompecabezas abierto.", cols: ["i = i* + depreciación esperada"] },
            { nom: "Posición de inversión internacional", sub: "El fondo que acumulan los flujos corrientes.", cols: ["PII = Activos − Pasivos frente al exterior"] },
            { nom: "Condición de Marshall-Lerner", sub: "Por qué una devaluación puede no funcionar al principio.", cols: ["$|\\varepsilon_X| + |\\varepsilon_M| > 1$"] },
            { nom: "Triángulo imposible", sub: "Restricción lógica, no dificultad práctica.", cols: ["Tipo fijo · movilidad · autonomía: elegir dos"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la balanza, la competitividad y el triángulo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía presenta las siguientes cuentas frente al exterior. Conviene leerlas de arriba abajo, porque cada bloque explica el siguiente.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Partida", "Saldo", "Lectura"],
          filas: [
            ["Bienes", "−45", "Importa mucho más de lo que exporta"],
            ["Servicios", "+25", "Compensa parcialmente, típico de un país turístico"],
            ["Rentas primarias", "−8", "Paga más intereses y dividendos de los que cobra"],
            ["Rentas secundarias", "−2", "Remesas y transferencias netas"],
            ["Cuenta corriente", "−30", "Invierte 30 más de lo que ahorra"],
            ["Cuenta de capital", "+5", "Transferencias de capital recibidas"],
            { celdas: ["Necesidad de financiación", "−25", "Debe captar 25 del exterior"], clase: "total" },
          ],
          nota: "La última fila **no es una opción, es una consecuencia**: si el país gasta 25 más de lo que ingresa frente al exterior, alguien de fuera tiene que estar prestándoselo o comprándole activos. Y con un ahorro nacional de 220 y una inversión de 250, la identidad **S − I = −30** se cumple exactamente. Ese es el punto de la ficha: un déficit corriente **es** un exceso de inversión sobre ahorro, y preguntarse si está causado por «falta de competitividad» o por «exceso de gasto» es preguntarse por dos formas de describir la misma aritmética.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La competitividad, con números.** Supongamos que los precios internos suben un **10 %**, los de los socios comerciales un **2 %**, y la moneda **se aprecia un 5 %** en términos nominales. La apreciación real es del **13,2 %**: los productos nacionales se han encarecido esa cantidad frente a los extranjeros. Nótese que **dos tercios de esa pérdida vienen de los precios internos y solo un tercio del tipo de cambio**. En una unión monetaria, donde el nominal está fijado, la única vía sería la primera.",
          ],
        },
        {
          tipo: "grafico",
          alto: 330,
          ejes: {},
          dominio: { x: [0, 100], y: [0, 100] },
          marcasX: [],
          marcasY: [],
          series: [
            { color: "tinta", grosor: 2, puntos: [[50, 84], [12, 20], [88, 20], [50, 84]] },
            { color: "acento", grosor: 5, puntos: [[31, 52], [50, 84]] },
            { color: "alerta", grosor: 5, puntos: [[50, 20], [88, 20]] },
            { color: "n3", grosor: 5, puntos: [[69, 52], [88, 20]] },
          ],
          notas: [
            { x: 50, y: 93, texto: "Política monetaria propia" },
            { x: 14, y: 11, texto: "Tipo de cambio fijo" },
            { x: 86, y: 11, texto: "Libre movilidad de capital" },
            { x: 50, y: 58, texto: "Solo se pueden tener" },
            { x: 50, y: 50, texto: "dos de los tres vértices" },
          ],
          nota: "Cada **lado** del triángulo es un régimen posible, y consiste en renunciar al vértice opuesto. El lado izquierdo une tipo fijo con autonomía monetaria y exige **controles de capital**: fue el sistema de Bretton Woods. El lado inferior une tipo fijo con libre movilidad y exige renunciar a la política monetaria propia: es una **unión monetaria** o un patrón oro. El lado derecho une autonomía con libre movilidad y exige **dejar flotar la moneda**: es el régimen de la mayoría de las economías avanzadas fuera del euro. **No hay ningún punto interior**: intentar los tres a la vez termina siempre en una crisis cambiaria.",
        },
        {
          tipo: "tabla",
          cabecera: ["Régimen", "Política fiscal expansiva", "Política monetaria expansiva"],
          filas: [
            ["Tipo flexible, libre movilidad", "Poco eficaz: aprecia y hunde las exportaciones", "Muy eficaz: deprecia y las impulsa"],
            { celdas: ["Tipo fijo, libre movilidad", "Muy eficaz: no hay apreciación que la frene", "Ineficaz: se agota defendiendo la paridad"], clase: "total" },
          ],
          nota: "**La misma política produce resultados opuestos según el régimen cambiario**, y ese es el resultado de Mundell-Fleming. El mecanismo es el mismo en los cuatro casos: un impulso mueve el tipo de interés, el tipo de interés mueve los flujos de capital, y estos mueven el tipo de cambio —si puede moverse— o las reservas —si no puede—. Un país que ingresa en una unión monetaria pasa de la primera fila a la segunda, y con ello **cambia por completo qué instrumento le sirve**: es la asimetría que discutía el caso práctico de la ficha 3.08.",
        },
      ],
    },
    {
      titulo: "Caso práctico: ajustar sin tipo de cambio",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un país con déficit corriente elevado y moneda propia dispone de un mecanismo de ajuste relativamente rápido: la depreciación. Dentro de una unión monetaria ese instrumento no existe, y entender qué lo sustituye explica buena parte de lo ocurrido en la periferia europea durante la última década y media.",
            "**El punto de partida es que la depreciación no es magia, sino un cambio de precios relativos.** Abarata lo nacional frente a lo extranjero, estimula exportaciones, encarece importaciones y corrige el saldo. Tiene dos costes conocidos: encarece de golpe todo lo importado —con el impacto sobre la inflación de la ficha 3.02— y **eleva el peso real de la deuda denominada en moneda extranjera**, lo que en algunos episodios ha convertido el remedio en el detonante de una crisis financiera.",
            "**Sin tipo de cambio nominal, el ajuste tiene que hacerse por precios y costes internos**, lo que se conoce como devaluación interna. El objetivo es el mismo —bajar el tipo de cambio real— pero la vía es contener salarios y márgenes hasta que los costes crezcan por debajo de los de los socios. Y aquí está la diferencia decisiva: **una depreciación nominal es instantánea y simétrica; una devaluación interna es lenta y muy asimétrica**, porque los precios y sobre todo los salarios son rígidos a la baja. El ajuste acaba recayendo en buena medida sobre el empleo, con el mecanismo de la ficha 3.03 y el riesgo de histéresis que allí se describía.",
            "**Hay un canal adicional que suele pasarse por alto: la mejora del saldo corriente puede deberse al colapso de las importaciones y no al empuje de las exportaciones.** Una recesión reduce la renta y con ella las compras al exterior, de modo que la cuenta corriente mejora sin que la competitividad haya cambiado nada. Distinguir un ajuste **cíclico** de uno **estructural** exige mirar si las exportaciones ganan cuota de mercado o si simplemente cayeron las importaciones, y esa distinción decide si la mejora sobrevivirá a la recuperación.",
            "**A eso se añade la condición de Marshall-Lerner y la curva en jota.** Para que un abaratamiento mejore el saldo, la respuesta de las cantidades debe ser suficientemente elástica; y como las elasticidades son bajas a corto plazo —el argumento de la ficha 1.03— el saldo suele **empeorar antes de mejorar**: se pagan más caras las importaciones ya contratadas mientras las exportaciones todavía no han reaccionado. Ese perfil temporal en forma de jota es una de las razones por las que los ajustes cambiarios se juzgan mal en su primer año.",
            "**La conclusión que ordena el debate.** Renunciar al tipo de cambio no elimina la necesidad de ajustar: **cambia el instrumento por uno más lento y más costoso en empleo**. Eso no significa que la unión monetaria sea un error —tiene beneficios de estabilidad, integración y eliminación de riesgo cambiario que no son menores— sino que exige mecanismos sustitutivos: flexibilidad de precios y salarios, movilidad de factores, capacidad fiscal de amortiguación e integración financiera. Son exactamente los criterios de las **áreas monetarias óptimas** que formuló el propio Mundell, y evaluar una unión consiste en preguntarse cuántos cumple.",
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
            { t: "Leer un déficit corriente como un fracaso exportador", d: "Es, por identidad, un exceso de inversión sobre ahorro. Puede reflejar una economía atractiva que recibe inversión productiva o una que consume por encima de sus posibilidades. La aritmética no distingue entre ambas, y el diagnóstico exige mirar en qué se está invirtiendo." },
            { t: "Confundir tipo de cambio nominal y real", d: "El nominal es el que se cotiza; el real corrige por precios relativos y es el que mide competitividad. Un país con moneda estable puede perder competitividad si sus precios crecen más que los de sus socios, y en una unión monetaria esa es la única vía posible." },
            { t: "Creer que la identidad de la balanza de pagos es una condición de equilibrio", d: "Se cumple siempre por construcción contable: lo que no se paga con exportaciones se paga vendiendo activos o endeudándose. Que la balanza cuadre no dice nada sobre si la situación es sostenible, que es una pregunta completamente distinta." },
            { t: "Suponer que una devaluación mejora el saldo de inmediato", d: "Las elasticidades son bajas a corto plazo, así que el saldo suele empeorar antes de mejorar: es la curva en jota. Y para que mejore siquiera a medio plazo debe cumplirse la condición de Marshall-Lerner sobre la suma de elasticidades." },
            { t: "Interpretar cualquier mejora del saldo corriente como ganancia de competitividad", d: "Una recesión reduce las importaciones y mejora el saldo sin que nada haya cambiado en la capacidad exportadora. Hay que comprobar si las exportaciones ganan cuota de mercado; de lo contrario, la mejora se revertirá con la recuperación." },
            { t: "Pensar que el triángulo imposible admite soluciones intermedias ingeniosas", d: "Es una restricción lógica, no una dificultad práctica. Con tipo fijo y libre movilidad, el tipo de interés lo determina el exterior; querer fijarlo a la vez internamente es querer dos valores distintos para la misma variable, y el intento acaba siempre en crisis cambiaria." },
            { t: "Aplicar la paridad de poder adquisitivo al corto plazo", d: "Funciona razonablemente a plazos largos y muy mal a corto, entre otras razones porque muchos bienes y casi todos los servicios no son comerciables. Usarla para predecir el tipo de cambio del próximo trimestre es un mal uso de una relación de equilibrio a largo plazo." },
            { t: "Olvidar que la eficacia de las políticas depende del régimen cambiario", d: "Con tipo flexible la política fiscal se neutraliza vía apreciación y la monetaria se amplifica; con tipo fijo ocurre lo contrario. Aplicar recetas de un régimen en otro es uno de los errores más frecuentes al discutir política macroeconómica en una unión monetaria." },
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
            "La balanza de pagos y las cuentas nacionales son dos sistemas distintos que describen la misma realidad y están conciliados por construcción.",
          ],
          lista: [
            "La **balanza de pagos** la elabora el Banco de España según el manual **BPM6** del FMI, plenamente compatible con el SEC 2010. La **cuenta del resto del mundo** (S.2) del sistema de cuentas nacionales contiene la misma información con signo invertido: lo que para el exterior es un ingreso, para el país es un pago.",
            "La **necesidad o capacidad de financiación de la nación** (B.9) es el mismo saldo que la suma de cuenta corriente y de capital de la balanza de pagos. Es también el saldo agregado de los tres sectores internos de la ficha 1.06, lo que cierra el círculo entre ambos marcos.",
            "La **posición de inversión internacional** es el **fondo** que corresponde a esos flujos: el saldo acumulado de activos y pasivos frente al exterior. Es la distinción flujo-fondo de la ficha 3.01, y una posición deudora elevada es lo que hace que un país sea vulnerable aunque su déficit corriente anual sea moderado.",
            "Las **rentas primarias** de la balanza son los intereses y dividendos que explican la diferencia entre PIB y renta nacional bruta de la ficha 3.01. Un país con posición deudora grande paga rentas cuantiosas y su renta nacional queda sistemáticamente por debajo de su producto.",
            "Y los **deflactores de exportaciones e importaciones** dan la relación real de intercambio de la ficha 3.06, que separa lo que un país produce de lo que realmente puede gastar. Junto con el coste laboral unitario de la ficha 10.09, son los indicadores estándar de competitividad.",
          ],
          cierre:
            "El punto que más rendimiento da es el tercero: el debate público mira el déficit anual y la vulnerabilidad vive en el saldo acumulado. Un país puede corregir su flujo y seguir teniendo un fondo que lo hace dependiente de refinanciarse cada año.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un país tiene un déficit corriente de 30. ¿Qué está ocurriendo con su ahorro?", a: "Que es 30 inferior a su inversión: la identidad CC = S − I lo impone. El país invierte más de lo que ahorra y financia la diferencia captando recursos del exterior, ya sea endeudándose o vendiendo activos. Que eso sea preocupante o no depende de en qué se invierta." },
            { q: "Los precios internos suben un 10 %, los exteriores un 2 % y la moneda se aprecia un 5 %. ¿Qué pasa con la competitividad?", a: "Se pierde un 13,2 % en términos de tipo de cambio real. Dos tercios de esa pérdida vienen de la inflación interna y solo un tercio de la apreciación nominal. En una unión monetaria, donde el tipo nominal está fijado, toda la corrección tendría que venir por precios y costes." },
            { q: "¿Por qué no pueden tenerse a la vez tipo fijo, libre movilidad de capital y política monetaria propia?", a: "Porque con tipo fijo y capital libre, cualquier diferencia entre el tipo interno y el externo provoca flujos que obligan al banco central a intervenir hasta igualarlos. El tipo de interés queda determinado desde fuera. Pretender fijarlo también internamente es querer dos valores para la misma variable." },
            { q: "¿Por qué una expansión fiscal es poco eficaz con tipo de cambio flexible?", a: "Porque presiona al alza el tipo de interés, atrae capital, aprecia la moneda y reduce las exportaciones netas, lo que neutraliza buena parte del impulso. Con tipo fijo no puede haber apreciación, así que ese contrapeso desaparece y la política fiscal actúa con toda su fuerza." },
            { q: "El saldo corriente mejora durante una recesión. ¿Ha ganado competitividad el país?", a: "No necesariamente. La caída de la renta reduce las importaciones y mejora el saldo sin que la capacidad exportadora haya cambiado. Para saber si el ajuste es estructural hay que comprobar si las exportaciones ganan cuota de mercado; si no, la mejora se revertirá al recuperarse la demanda interna." },
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
              q: "Un país tiene déficit por cuenta corriente. ¿Qué significa eso necesariamente?",
              opciones: [
                "Que su moneda está sobrevalorada",
                "Que su inversión supera a su ahorro: es una identidad, y su lectura depende de la causa",
                "Que sus exportaciones son poco competitivas",
                "Que está perdiendo reservas",
              ],
              correcta: 1,
              porque: [
                "La sobrevaloración es una causa posible entre varias, no el significado del saldo.",
                "$\\mathrm{CC} = S - I$. Un déficit puede reflejar una economía atractiva que recibe inversión productiva o una que consume por encima de sus posibilidades, y distinguirlo exige mirar en qué se invierte.",
                "Puede haber déficit con exportaciones florecientes si la inversión crece más deprisa. El saldo no mide capacidad exportadora por sí solo.",
                "Con tipo flexible no se pierden reservas: el ajuste va por el tipo de cambio. Y con entradas de capital el déficit se financia sin tocarlas.",
              ],
            },
            {
              q: "Un país devalúa su moneda y en los meses siguientes su saldo comercial empeora. ¿Qué ha pasado?",
              opciones: [
                "La devaluación ha fallado",
                "Se ha medido el saldo en moneda extranjera en vez de nacional",
                "Es la curva en jota: las elasticidades son bajas a corto plazo y el efecto precio domina al de cantidad",
                "Los socios comerciales han devaluado también",
              ],
              correcta: 2,
              porque: [
                "Concluir el fracaso a los pocos meses es leer el tramo descendente de una trayectoria que se espera que suba después.",
                "La unidad de medida cambia las cifras, no el perfil temporal en forma de jota.",
                "Al principio las importaciones cuestan más y su volumen apenas cae, así que la factura sube. Solo cuando las cantidades reaccionan mejora el saldo, y para que llegue a mejorar hace falta la condición de Marshall-Lerner.",
                "Una devaluación competitiva de los socios anularía el efecto, pero eso sería otro escenario y no explica el patrón temporal característico.",
              ],
            },
            {
              q: "¿Puede un país tener tipo de cambio fijo, libre movilidad de capital y política monetaria propia?",
              opciones: [
                "Sí, si su banco central tiene reservas suficientes",
                "Sí, mientras la inflación sea baja",
                "Sí, con controles parciales bien diseñados",
                "No: es una restricción lógica y solo caben dos de las tres",
              ],
              correcta: 3,
              porque: [
                "Las reservas permiten aguantar más tiempo, no escapar de la restricción: la presión reaparece en cuanto se agotan.",
                "La inflación baja facilita mantener el tipo fijo, pero no libera de la disyuntiva.",
                "Los controles parciales son precisamente renunciar a la libre movilidad: eligen dos de las tres, no las tres.",
                "Con tipo fijo y capital libre, el tipo de interés lo determina el exterior por arbitraje. Querer fijarlo a la vez es querer dos valores distintos para la misma variable.",
              ],
            },
            {
              q: "Con tipo de cambio flexible y capital móvil, ¿qué le ocurre a una expansión fiscal?",
              opciones: [
                "Funciona igual que en economía cerrada",
                "Depende del signo del saldo por cuenta corriente",
                "Se amplifica, porque la moneda se deprecia y las exportaciones crecen",
                "Se neutraliza en buena parte: el tipo sube, entra capital, la moneda se aprecia y las exportaciones caen",
              ],
              correcta: 3,
              porque: [
                "En economía cerrada no hay canal cambiario, que es precisamente el que aquí neutraliza el efecto.",
                "El saldo de partida no cambia el mecanismo, que opera a través del tipo de interés y del tipo de cambio.",
                "La moneda se aprecia, no se deprecia: el mayor tipo de interés atrae capital extranjero.",
                "Es el resultado de Mundell-Fleming, y su reverso es que la política monetaria se amplifica en ese mismo régimen. Aplicar recetas de un régimen en el otro invierte las conclusiones.",
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
            { ref: "Krugman y Obstfeld, Economía internacional", nota: "el manual de referencia: balanza de pagos, tipos de cambio y Mundell-Fleming con todo el detalle." },
            { ref: "Mundell, «A Theory of Optimum Currency Areas»", nota: "el artículo de 1961 con los criterios que sirven para evaluar cualquier unión monetaria, incluida la actual." },
            { ref: "Banco de España, balanza de pagos y posición de inversión internacional", nota: "los datos españoles y su metodología; especialmente útil la distinción entre flujo y posición acumulada." },
            { ref: "Obstfeld y Rogoff, «The Six Major Puzzles in International Macroeconomics»", nota: "por qué las paridades teóricas se cumplen tan mal en los datos; honesto sobre lo que no se sabe." },
          ],
        },
      ],
    },
  ],
};
