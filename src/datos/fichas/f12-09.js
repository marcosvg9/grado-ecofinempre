/* Ficha 12.09 — Cuentas de acumulación: capital, transferencias y capacidad de financiación. */

export default {
  codigo: "12.09",
  titulo: "Cuentas de acumulación: capital, transferencias y capacidad de financiación",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "Comprar una vivienda no es consumir sino invertir, y por eso no reduce el ahorro de quien la compra. De esa clasificación y de las transferencias de capital sale el saldo que cierra el sistema: quién presta y quién pide prestado, y por qué los sectores suman siempre el saldo exterior.",
  requiere: "12.08 Consumo final · 10.06 SEC 2010 · 12.07 Otras transferencias corrientes",
  abre: "12.10 El resto del mundo · 3.07 Deuda y sostenibilidad · 10.04 Gasto público",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Con el ahorro en la mano, el sistema entra en las **cuentas de acumulación**, que registran ya no flujos de renta sino **variaciones de activos y pasivos**. La primera de ellas, la cuenta de capital, se divide en dos partes que responden a dos preguntas distintas: **de dónde salen los recursos** para acumular patrimonio, y **en qué se materializan**. Su saldo final es la **capacidad o necesidad de financiación (B.9)**, la magnitud que cierra toda la parte no financiera del sistema.",
            "**La primera parte suma al ahorro las transferencias de capital (D.9)**, que son transferencias vinculadas a la adquisición o cesión de un activo. Hay tres: los **impuestos sobre el capital (D.91)** —sucesiones y donaciones, que gravan patrimonios transmitidos y por eso no están en la cuenta de la ficha 12.06—, las **ayudas a la inversión (D.92)** —subvenciones para comprar bienes de equipo, ayudas a la vivienda y **la mayor parte de los fondos europeos de inversión**— y las **otras transferencias de capital (D.99)**, donde entran las asunciones de deuda y algunos ajustes de recaudación. El saldo tras esta primera parte es la **variación del patrimonio neto debida al ahorro y a las transferencias de capital (B.10.1)**.",
            "**La segunda parte resta lo que se ha adquirido.** La **formación bruta de capital (P.5)** se desglosa en **formación bruta de capital fijo (P.51g)** —construcción, maquinaria, equipos de transporte, recursos biológicos cultivados y **productos de la propiedad intelectual** como investigación, desarrollo y software—, **variación de existencias (P.52)** y **objetos valiosos (P.53)**. A eso se añaden las **adquisiciones menos cesiones de activos no producidos (NP)**: terrenos, recursos naturales, contratos, licencias y activos de comercialización, que no se producen pero se compran y se venden. Y se resta el **consumo de capital fijo (P.51c)** si se quiere razonar en términos netos.",
            "**Aquí está la clasificación que produce la pregunta más contraintuitiva del bloque: la vivienda.** En contabilidad nacional **una vivienda no es un bien de consumo duradero, es un activo fijo**, y comprarla es formación bruta de capital fijo. La consecuencia es que **comprar una vivienda no reduce el ahorro del hogar**: reduce su capacidad de financiación, que es otra cosa. El hogar ahorra igual y dedica ese ahorro —y a menudo más, endeudándose— a adquirir un activo. Si la vivienda se tratara como consumo, la tasa de ahorro de los hogares caería en picado en cada auge inmobiliario, y eso no describiría bien lo que ocurre.",
            "**Y la coherencia del sistema es total en este punto.** Como la vivienda es un activo fijo, quien la ocupa **produce** un servicio de alojamiento —el alquiler imputado de la ficha 12.02—, **consume** ese servicio, y ese servicio tiene su **consumo de capital fijo** correspondiente. Las tres piezas encajan porque parten de la misma decisión de clasificación. Si se cambiara una, habría que cambiar las otras dos.",
            "**El saldo final, la capacidad o necesidad de financiación, es el corazón del análisis macroeconómico por sectores.** Es positivo cuando un sector ahorra más de lo que invierte y por tanto **presta al resto**, y negativo cuando le ocurre lo contrario. Y tiene la propiedad que la ficha 10.06 destacaba: **la suma de las capacidades y necesidades de todos los sectores residentes es exactamente el saldo frente al resto del mundo**. No es una teoría: es una identidad contable, y sirve para desactivar cualquier propuesta que pida simultáneamente menos déficit público, más ahorro familiar, la misma inversión empresarial y un saldo exterior sin cambios.",
            "**Un último apunte sobre la relación con el déficit público, porque no siempre coinciden.** La capacidad o necesidad de financiación de las administraciones públicas **es, en general, la cifra de déficit** que se notifica en el procedimiento de déficit excesivo europeo, pero no necesariamente en todos los periodos: existen ajustes puntuales por operaciones concretas. Y la **cuenta financiera**, que registra en qué instrumentos se materializa ese saldo, debería dar el mismo B.9 por una vía independiente; la diferencia entre ambas estimaciones se publica como **ajuste**, y es uno de los pocos indicadores honestos de la calidad del sistema.",
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
            { nom: "Primera parte de la cuenta de capital", sub: "De dónde salen los recursos.", cols: ["B.10.1 = B.8 + D.9 a cobrar − D.9 a pagar"] },
            { nom: "Transferencias de capital", sub: "Vinculadas a la adquisición de activos.", cols: ["D.9 = D.91 + D.92 + D.99"] },
            { nom: "Segunda parte", sub: "En qué se materializan.", cols: ["B.9 = B.10.1 − P.5 − NP"] },
            { nom: "Formación bruta de capital", sub: "Fijo, existencias y objetos valiosos.", cols: ["P.5 = P.51g + P.52 + P.53"] },
            { nom: "Activos no producidos", sub: "Terrenos, licencias, contratos.", cols: ["NP — se compran pero no se producen"] },
            { nom: "La vivienda", sub: "Activo fijo, no bien de consumo duradero.", cols: ["comprarla es P.51g, no P.3"] },
            { nom: "Consecuencia", sub: "Reduce la capacidad de financiación, no el ahorro.", cols: ["afecta a B.9, no a B.8"] },
            { nom: "Identidad sectorial", sub: "Aritmética, no teoría.", cols: ["Σ B.9 sectores residentes = saldo con el S.2"] },
            { nom: "Doble estimación", sub: "Su diferencia mide la calidad del sistema.", cols: ["B.9 no financiero ≈ B.9F financiero"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: del ahorro a quién presta a quién",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cerramos la economía de las fichas anteriores. Los hogares ahorraban **60**, las administraciones **20**, y añadimos unas sociedades con **70** de ahorro. Ahora entran las transferencias de capital y la inversión.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Hogares", "Sociedades", "AA. PP."],
          filas: [
            ["Ahorro bruto", "B.8", "60", "70", "20"],
            ["± Transferencias de capital netas", "D.9", "+20", "+10", "−30"],
            ["= Variación del patrimonio neto", "B.10.1", "80", "80", "−10"],
            ["− Formación bruta de capital", "P.5", "40", "60", "80"],
            { celdas: ["= Capacidad (+) / necesidad (−) de financiación", "B.9", "+40", "+20", "−90"], clase: "total" },
          ],
          nota: "Los **+20 de transferencias de capital** que reciben los hogares son ayudas a la vivienda; los **+10** de las sociedades, subvenciones a la inversión; y los **−30** de las administraciones son lo que pagan por ambas. Obsérvese la fila de la inversión: las administraciones invierten **80**, mucho más que su ahorro de 20, y de ahí que su necesidad de financiación de **90** no coincida con su desahorro. Es la distinción que la ficha 10.06 señalaba y que da sentido al debate sobre excluir la inversión pública del cómputo del déficit: **una parte del déficit financia gasto que se consume y otra construye activos que quedan**.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Sectores", y: "Saldo" },
          dominio: { x: [0, 4], y: [-100, 55] },
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
            { x: 0.5, y: -9, texto: "Hogares", ancla: "middle" },
            { x: 1.5, y: -9, texto: "Sociedades", ancla: "middle" },
            { x: 2.5, y: 8, texto: "AA. PP.", ancla: "middle" },
            { x: 3.5, y: 8, texto: "TOTAL", ancla: "middle" },
          ],
          nota: "Las tres primeras barras son los sectores residentes y la cuarta es su **suma**, que coincide necesariamente con el saldo frente al resto del mundo: el país necesita **30** del exterior. Y ahí está el uso práctico de la identidad. Si el sector público redujera su necesidad de financiación en 30 **sin que nadie más cambiara de conducta**, el país dejaría de endeudarse fuera. Pero exigir a la vez menos déficit público, más ahorro de las familias, la misma inversión empresarial y un saldo exterior sin cambios es pedir algo **aritméticamente imposible**, y esa combinación se pide constantemente. La identidad no impide ninguna política: obliga a decir qué otro sector compensa.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la pregunta que descoloca a todo el mundo.** Un hogar con una renta disponible de 40.000 € consume 30.000 € y compra una vivienda de 200.000 €, financiada con 160.000 € de hipoteca y 40.000 € de fondos propios. ¿Cuánto ahorra?",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Importe"],
          filas: [
            ["Renta disponible bruta", "B.6", "40.000 €"],
            ["− Gasto en consumo final", "P.3", "30.000 €"],
            ["= Ahorro bruto", "B.8", "10.000 €"],
            ["− Formación bruta de capital fijo (la vivienda)", "P.51g", "200.000 €"],
            { celdas: ["= Necesidad de financiación", "B.9", "−190.000 €"], clase: "total" },
          ],
          nota: "**El hogar ahorra 10.000 €.** La compra de la vivienda no toca el ahorro porque **no es consumo, es inversión**: el hogar no ha gastado su renta, ha adquirido un activo. Lo que sí ha hecho es incurrir en una **necesidad de financiación de 190.000 €**, que cubre con la hipoteca y con activos financieros previos. La distinción es exactamente la de las dos cuentas: el ahorro dice cuánta renta no se consumió, y la capacidad de financiación dice si hubo que pedir prestado. Si el sistema tratara la vivienda como consumo duradero, este hogar tendría un ahorro de **−190.000 €**, y la tasa de ahorro nacional se desplomaría en cada auge inmobiliario sin que nadie estuviera consumiendo más.",
        },
      ],
    },
    {
      titulo: "Caso práctico: leer los saldos sectoriales de una economía",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los saldos sectoriales son probablemente la herramienta de diagnóstico macroeconómico con mejor relación entre sencillez y potencia, y sin embargo casi no se usan fuera de los informes técnicos. Vale la pena ver cómo se leen.",
            "**El punto de partida es que la identidad no admite excepciones.** Si un país tiene déficit exterior, alguno de sus sectores está gastando por encima de sus ingresos, y viceversa. Eso convierte la pregunta «¿es preocupante el déficit exterior?» en otra mucho más informativa: **¿qué sector lo está generando?** Un déficit exterior causado por inversión empresarial elevada no significa lo mismo que uno causado por desahorro público o por hogares endeudándose para comprar vivienda.",
            "**La secuencia española de las últimas dos décadas es el ejemplo canónico.** Durante el auge previo a 2008, hogares y sociedades tenían necesidad de financiación simultánea —construían y compraban— y el sector público estaba en superávit; el resultado era un déficit exterior muy elevado financiado con entradas de capital. Tras la crisis, hogares y empresas pasaron bruscamente a superávit para reducir deuda, el sector público absorbió el golpe con un déficit enorme, y el saldo exterior giró hasta el superávit. **Los sectores privados y el público se movieron en direcciones opuestas**, y esa es exactamente la función estabilizadora que el sector público cumple en una recesión de balances.",
            "**De ahí sale una lectura que cambia el sentido de muchos debates.** Cuando el sector privado se está desapalancando en bloque, **exigir simultáneamente que el sector público reduzca su déficit es exigir que el saldo exterior mejore aún más**, es decir, que el ajuste lo absorba la demanda externa. Si los socios comerciales hacen lo mismo a la vez, eso no puede ocurrir para todos. No es un argumento a favor de ningún nivel de déficit: es la constatación de que **los cuatro saldos no se pueden fijar por separado**.",
            "**Hay además un uso preventivo que la ficha 11.08 anticipaba.** Un sector privado con necesidad de financiación creciente y sostenida durante años es una de las señales de alarma más fiables que existen, porque significa endeudamiento acumulándose. En el auge nadie lo mira, porque el PIB crece y la recaudación también, y las cuentas financieras que lo mostrarían se publican tarde y sin atención pública. **Los saldos sectoriales son el sitio donde la acumulación de riesgo es visible antes de que estalle**, y son públicos.",
            "**La conclusión práctica al leer cualquier país.** Mirar los cuatro saldos juntos y no uno solo. Preguntar quién financia a quién y con qué instrumentos, para lo cual hacen falta las cuentas financieras. Desconfiar de las propuestas que fijan más de tres saldos a la vez. Y recordar que la identidad **no dice qué es deseable**: dice qué combinaciones son posibles, que es una información distinta y previa a cualquier discusión sobre política económica.",
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
            { t: "Creer que comprar una vivienda reduce el ahorro del hogar", d: "No lo reduce: la vivienda es un activo fijo y comprarla es formación bruta de capital fijo, no consumo. Lo que reduce es la capacidad de financiación. En el ejemplo, el hogar ahorra 10.000 € y necesita financiación por 190.000 €. Si se tratara como consumo, la tasa de ahorro nacional se desplomaría en cada auge inmobiliario." },
            { t: "Confundir el ahorro con la capacidad de financiación", d: "El ahorro dice cuánta renta no se consumió; la capacidad de financiación dice si, tras invertir, hubo que pedir prestado. Un sector puede tener ahorro positivo y necesidad de financiación grande si invierte mucho, que es la situación normal de las administraciones públicas con inversión elevada." },
            { t: "Buscar las transferencias de capital en la cuenta de distribución secundaria", d: "Van aquí, y por eso no afectan a la renta disponible ni al ahorro. Es la distinción de la ficha 12.07: lo que financia gasto corriente es D.7 y lo que financia la adquisición de un activo es D.9. Los fondos europeos de inversión y el impuesto de sucesiones están en esta cuenta." },
            { t: "Identificar el déficit público con el desahorro público", d: "En el ejemplo, las administraciones desahorran 20 en positivo y tienen una necesidad de financiación de 90, y la diferencia son los 80 de inversión y los 30 de transferencias de capital pagadas. Distinguirlos es lo que da sentido al debate sobre excluir la inversión del cómputo del déficit." },
            { t: "Pedir que varios saldos sectoriales mejoren a la vez", d: "La suma de las capacidades y necesidades de todos los sectores es el saldo exterior por identidad contable. Si se fijan tres, el cuarto queda determinado. Exigir simultáneamente menos déficit público, más ahorro familiar, la misma inversión empresarial y un saldo exterior sin cambios es aritméticamente imposible." },
            { t: "Leer un déficit exterior sin preguntar qué sector lo genera", d: "No significa lo mismo un déficit causado por inversión empresarial elevada que uno causado por desahorro público o por hogares endeudándose para comprar vivienda. La identidad convierte una pregunta poco informativa en otra mucho mejor: qué sector está gastando por encima de sus ingresos y por qué." },
            { t: "Ignorar el ajuste entre la cuenta de capital y la financiera", d: "Ambas estiman la misma capacidad de financiación por vías independientes y en la práctica no coinciden. Esa discrepancia se publica y es uno de los pocos indicadores honestos de la calidad de la estimación que ofrece el sistema, y prácticamente nadie la mira." },
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
            "Esta cuenta produce el saldo que cierra la parte no financiera del sistema y conecta con casi todo el análisis macroeconómico.",
          ],
          lista: [
            "La **formación bruta de capital** de esta cuenta es el componente de inversión del PIB por el enfoque de la demanda de la ficha 10.07. Que incluya los productos de la propiedad intelectual —investigación, desarrollo y software— es una decisión del SEC 2010 con efectos apreciables sobre el nivel del PIB.",
            "La **capacidad o necesidad de financiación de las administraciones públicas** es, en general, la cifra de déficit del procedimiento de déficit excesivo, aunque no necesariamente en todos los periodos. Es la magnitud que se compara con los umbrales europeos y la que la ficha 3.07 usa en la dinámica de la deuda.",
            "La **identidad de saldos sectoriales** es la traducción contable de la identidad ahorro-inversión de la ficha 3.01, y la herramienta de diagnóstico que la ficha 10.06 presentaba. Su virtud es que no depende de ningún supuesto de comportamiento.",
            "El **consumo de capital fijo** se estima por el método del inventario permanente, acumulando la inversión de años anteriores con una vida útil por tipo de activo. Es lo que separa las magnitudes brutas de las netas, y su fragilidad explica que casi todo el análisis se haga en bruto pese a que el neto sea conceptualmente superior.",
            "Y las **cuentas financieras** son el paso siguiente: registran en qué instrumentos —depósitos, valores, préstamos, participaciones— se materializa la capacidad de financiación de cada sector, y son donde se ve quién financia a quién. Su discrepancia con esta cuenta se publica como ajuste.",
          ],
          cierre:
            "El punto que cierra el bloque es que **B.9 es el saldo donde todo el sistema converge**. Cada decisión de clasificación de las ocho fichas anteriores —qué es producción, qué es consumo, qué es transferencia corriente y qué de capital— acaba afectando a este número, y por eso entender la anatomía de las cuentas es entender de dónde sale la cifra que evalúa Bruselas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un hogar con 40.000 € de renta consume 30.000 y compra una vivienda de 200.000. ¿Cuánto ahorra?", a: "Diez mil euros. La vivienda es un activo fijo y comprarla es formación bruta de capital, no consumo, así que no toca el ahorro. Lo que genera es una necesidad de financiación de 190.000 €, que cubre con hipoteca y activos previos. El ahorro dice cuánta renta no se consumió; la capacidad de financiación, si hubo que pedir prestado." },
            { q: "¿Por qué la necesidad de financiación de las administraciones es 90 si solo desahorran 20?", a: "Porque invierten 80 y pagan 30 de transferencias de capital a otros sectores. El desahorro corriente y la necesidad total de financiación son cosas distintas, y su diferencia es la inversión pública. Esa distinción es la que da sentido al debate sobre excluir la inversión del cómputo del déficit." },
            { q: "¿Dónde están los fondos europeos de inversión y el impuesto de sucesiones?", a: "En esta cuenta, como transferencias de capital: ayudas a la inversión (D.92) e impuestos sobre el capital (D.91). Por eso no afectan a la renta disponible ni al ahorro, sino que entran después, entre el ahorro y la capacidad de financiación. Financian la adquisición de activos, no gasto corriente." },
            { q: "¿Qué dice la identidad de saldos sectoriales y para qué sirve?", a: "Que la suma de las capacidades y necesidades de financiación de todos los sectores residentes es exactamente el saldo frente al resto del mundo. Sirve para desactivar propuestas imposibles: no se puede pedir a la vez menos déficit público, más ahorro familiar, la misma inversión empresarial y un saldo exterior sin cambios. Si se fijan tres saldos, el cuarto queda determinado." },
            { q: "¿Por qué es más informativo preguntar qué sector genera un déficit exterior que si el déficit es alto?", a: "Porque no significa lo mismo un déficit causado por inversión empresarial elevada que uno causado por desahorro público o por hogares endeudándose para comprar vivienda. La identidad traslada la pregunta desde el agregado, que dice poco, hasta el sector que está gastando por encima de sus ingresos, que dice mucho." },
            { q: "¿Qué es el ajuste entre la cuenta de capital y la financiera?", a: "La discrepancia entre dos estimaciones independientes de la misma magnitud, la capacidad de financiación: una obtenida por el lado no financiero y otra por el lado de los instrumentos. En teoría deberían coincidir y en la práctica no lo hacen. Se publica, y es uno de los pocos indicadores honestos de la calidad del sistema." },
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
            { ref: "SEC 2010, capítulo 6 — cuenta de capital y transferencias de capital", nota: "las definiciones de P.5, NP y D.9, y la frontera con las transferencias corrientes." },
            { ref: "SEC 2010, capítulo 8 — la secuencia de cuentas y sus saldos", nota: "cómo encajan las cuentas de acumulación en el conjunto y qué significa cada saldo." },
            { ref: "Eurostat, Manual on Government Deficit and Debt", nota: "la relación entre la capacidad de financiación del SEC y la cifra notificada en el procedimiento de déficit excesivo." },
            { ref: "Banco de España, Cuentas Financieras de la Economía Española", nota: "el paso siguiente: en qué instrumentos se materializa la capacidad de financiación de cada sector." },
            { ref: "INE, Curso de Cuentas Nacionales — cuentas de acumulación", nota: "el tratamiento de la vivienda, la estimación de la FBKF por sectores y las fuentes empleadas." },
          ],
        },
      ],
    },
  ],
};
