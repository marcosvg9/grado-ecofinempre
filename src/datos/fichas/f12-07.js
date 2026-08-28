/* Ficha 12.07 — Otras transferencias corrientes: qué hay dentro del D.7. */

export default {
  codigo: "12.07",
  titulo: "Otras transferencias corrientes: qué hay dentro del D.7",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "Una transferencia es un flujo sin contrapartida: alguien entrega algo y no recibe nada a cambio. Eso es lo único que une a las seis cosas muy distintas que el sistema mete en el mismo cajón, y dentro de ese cajón está la financiación autonómica entera.",
  requiere: "12.06 Distribución secundaria · 12.05 SIFMI y seguros",
  abre: "12.08 Consumo final · 12.09 Cuentas de acumulación · 12.10 El resto del mundo",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Antes de abrir el cajón hay que tener clara la definición, porque es la que decide qué entra y qué no.** Una **transferencia** es una operación en la que una unidad entrega un bien, un servicio o dinero a otra **sin recibir nada a cambio**. Esa ausencia de contrapartida es lo que la separa de una compraventa, y es un criterio operativo: si hay algo de vuelta, es intercambio y va a otra cuenta; si no lo hay, es transferencia. Un impuesto es una transferencia; comprar pan no lo es.",
            "**La segunda distinción es entre corriente y de capital, y no depende del importe.** Una transferencia es **de capital** cuando está vinculada a la adquisición o cesión de un activo —una subvención para comprar maquinaria, un impuesto sobre sucesiones— y **corriente** cuando financia gasto corriente. La diferencia importa porque las corrientes entran en esta cuenta y afectan a la renta disponible, mientras que las de capital van a la cuenta de la ficha 12.09 y **no afectan a la renta disponible ni al ahorro**. Regalar un millón para pagar nóminas y regalarlo para comprar un edificio se registran en cuentas distintas.",
            "**Hecho eso, el D.7 recoge todas las transferencias corrientes que no son impuestos, cotizaciones ni prestaciones sociales.** Es un residuo por construcción, y por eso mete dentro seis compartimentos que no se parecen en nada salvo en cumplir la definición. Vale la pena recorrerlos uno a uno, porque en al menos dos de ellos hay magnitudes enormes que casi nadie sabe dónde están.",
            "**El primer par son las operaciones de seguro no vida (D.71 y D.72), y su tratamiento es más elegante de lo que parece.** Las **primas netas (D.71)** son lo que pagan los asegurados una vez descontado el margen que se lleva la compañía por su servicio —ese margen es producción, y la ficha 12.05 explicó cómo se calcula—. Las **indemnizaciones (D.72)** son lo que las compañías pagan a los siniestrados. Registrarlo así revela lo que económicamente es un seguro: **un mecanismo por el que el colectivo de asegurados transfiere recursos a aquellos a los que les ha ocurrido algo**. La compañía es solo el intermediario que cobra por gestionarlo.",
            "**El segundo compartimento, D.73, es el más voluminoso de España y el que nadie asocia con esta cuenta: las transferencias corrientes entre administraciones públicas.** Aquí dentro está **el sistema de financiación autonómica completo**, y también las transferencias del Estado a la Seguridad Social y a las corporaciones locales. Son decenas de miles de millones que circulan entre subsectores del S.13, y que **se anulan íntegramente al consolidar el sector**: no aparecen en las cuentas de las administraciones públicas en su conjunto, solo al mirar por subsectores. Quien quiera estudiar la financiación territorial tiene que buscar exactamente aquí.",
            "**Los dos siguientes son menores en importe y significativos en contenido.** La **cooperación internacional corriente (D.74)** recoge la ayuda al desarrollo y las aportaciones a organismos internacionales. Y las **transferencias corrientes diversas (D.75)** son el cajón dentro del cajón: **las remesas de emigrantes**, las cuotas a asociaciones, las donaciones a instituciones sin fines de lucro, **los premios de juegos de azar** —el sistema los trata como una transferencia de los apostantes a los premiados, con el margen del operador como producción— y **las multas y sanciones**, que son una transferencia obligatoria sin contrapartida y por tanto no son un impuesto.",
            "**Y el sexto son los recursos propios de la Unión Europea (D.76)**, las aportaciones de los Estados miembros basadas en el IVA y en la renta nacional bruta. Es una partida que en el caso español es de miles de millones y que explica, junto a los intereses, buena parte de por qué el saldo de operaciones corrientes con el exterior es sensiblemente menor que el saldo comercial, como verá la ficha 12.10. Obsérvese además que **el dinero que vuelve de la Unión no vuelve por aquí**: los fondos estructurales y los de recuperación son mayoritariamente transferencias **de capital**, y aparecen en la cuenta siguiente.",
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
            { nom: "Definición de transferencia", sub: "El criterio que decide todo.", cols: ["entrega sin contrapartida"] },
            { nom: "Corriente frente a de capital", sub: "No depende del importe sino del destino.", cols: ["corriente financia gasto · de capital, un activo"] },
            { nom: "Consecuencia de esa distinción", sub: "Por eso una subvención de inversión no da renta.", cols: ["D.7 afecta a B.6 · D.9 no"] },
            { nom: "Primas netas de seguro no vida", sub: "Primas menos el margen de la compañía.", cols: ["D.71"] },
            { nom: "Indemnizaciones de seguro no vida", sub: "Del colectivo asegurado al siniestrado.", cols: ["D.72"] },
            { nom: "Entre administraciones públicas", sub: "Aquí está la financiación autonómica.", cols: ["D.73 — se anula al consolidar S.13"] },
            { nom: "Cooperación internacional", sub: "Ayuda al desarrollo y organismos.", cols: ["D.74"] },
            { nom: "Transferencias diversas", sub: "Remesas, cuotas, premios, multas.", cols: ["D.75"] },
            { nom: "Recursos propios de la UE", sub: "Basados en el IVA y en la RNB.", cols: ["D.76"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: abrir el cajón",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En la economía de las fichas anteriores, las transferencias corrientes con el exterior valían **+5 netos** y las internas se anulaban al agregar. Abrimos ahora todo el D.7 de esa economía, incluyendo los flujos internos que la agregación esconde.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Componente", y: "Importe" },
          dominio: { x: [0, 6], y: [0, 250] },
          marcasX: [],
          marcasY: [0, 50, 100, 150, 200],
          areas: [
            { puntos: [[0.15, 0], [0.15, 42], [0.85, 42], [0.85, 0]], color: "n1" },
            { puntos: [[1.15, 0], [1.15, 38], [1.85, 38], [1.85, 0]], color: "n1" },
            { puntos: [[2.15, 0], [2.15, 210], [2.85, 210], [2.85, 0]], color: "acento" },
            { puntos: [[3.15, 0], [3.15, 6], [3.85, 6], [3.85, 0]], color: "n3" },
            { puntos: [[4.15, 0], [4.15, 31], [4.85, 31], [4.85, 0]], color: "n3" },
            { puntos: [[5.15, 0], [5.15, 24], [5.85, 24], [5.85, 0]], color: "alerta" },
          ],
          notas: [
            { x: 0.5, y: 51, texto: "42", ancla: "middle" },
            { x: 1.5, y: 47, texto: "38", ancla: "middle" },
            { x: 2.5, y: 219, texto: "210", ancla: "middle" },
            { x: 3.5, y: 15, texto: "6", ancla: "middle" },
            { x: 4.5, y: 40, texto: "31", ancla: "middle" },
            { x: 5.5, y: 33, texto: "24", ancla: "middle" },
            { x: 0.5, y: -20, texto: "D.71", ancla: "middle" },
            { x: 1.5, y: -20, texto: "D.72", ancla: "middle" },
            { x: 2.5, y: -20, texto: "D.73", ancla: "middle" },
            { x: 3.5, y: -20, texto: "D.74", ancla: "middle" },
            { x: 4.5, y: -20, texto: "D.75", ancla: "middle" },
            { x: 5.5, y: -20, texto: "D.76", ancla: "middle" },
          ],
          nota: "La barra que domina el gráfico es **D.73, las transferencias entre administraciones públicas**, y es cinco veces mayor que todas las demás juntas. Ahí dentro está el sistema de financiación autonómica y las transferencias del Estado a la Seguridad Social. Y sin embargo **esos 210 no aparecen en ninguna cuenta agregada**: al consolidar el sector administraciones públicas se anulan por completo, porque lo que paga un subsector lo cobra otro. Es la partida más grande del cajón y la más invisible, y quien estudie financiación territorial tiene que ir a buscarla al desglose por subsectores.",
        },
        {
          tipo: "tabla",
          cabecera: ["Código", "Qué es", "Ejemplo concreto", "Importe"],
          filas: [
            ["D.71", "Primas netas de seguro no vida", "El seguro del coche y el del hogar, menos el margen de la aseguradora", "42"],
            ["D.72", "Indemnizaciones de seguro no vida", "Lo que cobra quien tuvo el siniestro", "38"],
            ["D.73", "Entre administraciones públicas", "Financiación autonómica; transferencias a la Seguridad Social", "210"],
            ["D.74", "Cooperación internacional corriente", "Ayuda al desarrollo; cuotas a organismos internacionales", "6"],
            ["D.75", "Transferencias corrientes diversas", "Remesas de emigrantes, cuotas a asociaciones, premios de juegos, multas", "31"],
            { celdas: ["D.76", "Recursos propios de la UE", "Aportaciones basadas en el IVA y en la renta nacional bruta", "24"], clase: "total" },
          ],
          nota: "Fíjese en el par **D.71 y D.72**: se cobran 42 en primas netas y se pagan 38 en indemnizaciones. Esa diferencia **no es el beneficio de las aseguradoras** —su margen ya salió antes, como producción de servicios en la ficha 12.05— sino el resultado de que en ese año hubo menos siniestros de los previstos. El seguro aparece así como lo que es: **una transferencia del colectivo de asegurados hacia aquellos a los que les ha ocurrido algo**, con la compañía cobrando aparte por organizarla.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la distinción que más se equivoca en la práctica: corriente o de capital.** No depende del importe ni de quién paga, sino de **para qué sirve el dinero**. Cuatro casos que parecen iguales y van a cuentas distintas:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Operación", "Código", "Cuenta", "¿Afecta a la renta disponible?"],
          filas: [
            ["Subvención a un ayuntamiento para pagar nóminas", "D.73", "Distribución secundaria", "Sí"],
            ["Subvención a un ayuntamiento para construir un polideportivo", "D.92", "Cuenta de capital", "No"],
            ["Remesa que un emigrante envía a su familia", "D.75", "Distribución secundaria", "Sí"],
            ["Herencia gravada por el impuesto de sucesiones", "D.91", "Cuenta de capital", "No"],
            { celdas: ["Fondos europeos de recuperación para inversión", "D.92", "Cuenta de capital", "No"], clase: "total" },
          ],
          nota: "La última fila es la que más sorprende y la que más importa en España: **los fondos europeos de inversión no aumentan la renta disponible del país**, porque son transferencias de capital. Aumentan el patrimonio neto y financian formación de capital, pero entran en la secuencia **después** del ahorro, no antes. Por eso un año con muchos fondos europeos puede mostrar una renta disponible normal y una capacidad de financiación muy mejorada: **el efecto aparece dos cuentas más abajo**, en la ficha 12.09. Confundir ambas categorías es el error que más deforma el análisis del sector público español reciente.",
        },
      ],
    },
    {
      titulo: "Caso práctico: dónde está la financiación autonómica en las cuentas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Que el sistema de financiación autonómica sea el mayor componente del D.7 español y a la vez invisible en las cuentas agregadas es una buena lección sobre cómo funciona el sistema y sobre por qué hay que saber en qué nivel de consolidación se está mirando.",
            "**El mecanismo es el siguiente.** Las comunidades autónomas prestan servicios que en España pesan mucho —sanidad y educación, sobre todo— y no recaudan directamente todo lo que gastan. La diferencia se cubre con recursos que el Estado recauda y transfiere, mediante un sistema de participación en impuestos y fondos de nivelación. En las cuentas, **esos flujos son transferencias corrientes entre administraciones públicas (D.73)** si financian gasto corriente, y transferencias de capital (D.92) si financian inversión.",
            "**Y aquí está la clave contable: se anulan al consolidar.** Las cuentas de las administraciones públicas se publican tanto por subsectores —Estado, comunidades autónomas, corporaciones locales, Seguridad Social— como para el conjunto del sector. En la versión consolidada, todo lo que el Estado paga a las comunidades y estas cobran del Estado **desaparece**, porque es un flujo interno. El déficit del conjunto no cambia un euro por mucho que se muevan las transferencias entre niveles: **solo cambia el reparto del déficit entre subsectores**.",
            "**Esa propiedad tiene una consecuencia política que conviene entender.** Cuando se discute si el déficit es del Estado o de las comunidades, se está discutiendo sobre un **reparto interno** que no altera la posición del país. Adelantar entregas a cuenta mejora el saldo autonómico y empeora el estatal en la misma cantidad. Es una discusión legítima sobre responsabilidad y sobre suficiencia de cada nivel, y **no es una discusión sobre la solvencia del conjunto**, aunque se presente a menudo como si lo fuera.",
            "**Hay además un detalle técnico que produce discrepancias reales entre lo que dice una comunidad y lo que dicen las cuentas.** El sistema de financiación funciona con **entregas a cuenta** durante el año y una **liquidación definitiva** dos años después. La contabilidad nacional registra en criterio de **devengo**: imputa a cada ejercicio los recursos que le corresponden, no los que se cobran ese año. Por eso el ingreso registrado en las cuentas de una comunidad puede diferir del ingresado en su tesorería, y por eso las liquidaciones tardías generan revisiones. Es el criterio de devengo de la ficha 10.06 con efectos muy visibles.",
            "**La lección general vale para todo el bloque.** Antes de leer cualquier cifra hay que saber **en qué nivel de consolidación está**: una operación que es enorme entre subsectores puede ser cero para el sector, y una que parece pequeña en el agregado puede ser decisiva para una unidad concreta. El sistema está diseñado para poder mirar a los dos niveles, y buena parte de los malentendidos vienen de mezclarlos.",
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
            { t: "Llamar transferencia a algo que tiene contrapartida", d: "Una transferencia es una entrega sin nada a cambio, y ese criterio decide todo lo demás. Si la unidad recibe un bien o un servicio a cambio, es intercambio y va a otra cuenta. Un impuesto es transferencia; una tasa que paga un servicio identificable, no necesariamente." },
            { t: "Distinguir corriente de capital por el importe", d: "No depende de cuánto sea sino de para qué sirva: si está vinculada a la adquisición de un activo es de capital, y si financia gasto corriente es corriente. Regalar un millón para nóminas y regalarlo para comprar un edificio son operaciones distintas y van a cuentas distintas." },
            { t: "Creer que los fondos europeos de inversión aumentan la renta disponible", d: "Son transferencias de capital, así que entran en la secuencia después del ahorro y no afectan ni a la renta disponible ni al ahorro. Mejoran la capacidad de financiación y el patrimonio neto, pero el efecto aparece dos cuentas más abajo. Es el error que más deforma el análisis reciente del sector público español." },
            { t: "Buscar la financiación autonómica en las cuentas consolidadas", d: "No está: se anula al consolidar, porque lo que paga el Estado lo cobran las comunidades. Solo aparece mirando el desglose por subsectores. Es la mayor partida del D.7 español y a la vez invisible en el agregado del sector administraciones públicas." },
            { t: "Interpretar un traspaso entre niveles de gobierno como un cambio de solvencia", d: "Mejora el saldo de un subsector y empeora el del otro en la misma cantidad; el déficit del conjunto no cambia un euro. Es una discusión legítima sobre suficiencia y responsabilidad de cada nivel, no sobre la posición fiscal del país, aunque se presente a menudo como si lo fuera." },
            { t: "Tomar la diferencia entre primas e indemnizaciones como beneficio asegurador", d: "El margen de la compañía ya salió antes, como producción de servicios medida indirectamente. Lo que queda en D.71 menos D.72 refleja que en ese ejercicio hubo más o menos siniestros de los previstos. El seguro aparece aquí como lo que es: una transferencia del colectivo asegurado a los siniestrados." },
            { t: "Clasificar las multas como impuestos", d: "Son transferencias corrientes diversas (D.75). Comparten con los impuestos ser obligatorias y sin contrapartida, pero no gravan renta, patrimonio, producción ni productos: sancionan una conducta. Meterlas en la recaudación tributaria deforma cualquier cálculo de presión fiscal." },
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
            "Este cajón conecta con varias fichas del plan de formas que no son evidentes hasta que se abre.",
          ],
          lista: [
            "El **D.76, los recursos propios de la Unión Europea**, es una de las razones de que el saldo de operaciones corrientes con el exterior sea sensiblemente menor que el saldo comercial, junto con los intereses de la ficha 12.04. La ficha 12.10 lo verá con los datos reales de España.",
            "El **D.73** es el objeto del análisis de la financiación territorial, y solo existe en las cuentas por subsectores. Su volumen y su invisibilidad simultáneas son un buen recordatorio de la advertencia de la ficha 10.06 sobre el perímetro de consolidación.",
            "Las **remesas dentro del D.75** son la contrapartida de la distinción de residencia de la ficha 12.01: lo que envía un emigrante de larga duración es transferencia corriente, mientras que lo que cobra un trabajador transfronterizo es remuneración de asalariados y afecta a la renta nacional en lugar de a la disponible.",
            "El **par D.71-D.72** es la otra cara de la producción de seguro de la ficha 12.05: allí se midió el margen como producción, y aquí se registra el flujo de recursos entre asegurados. Las dos fichas describen la misma operación desde lados distintos del sistema.",
            "Y la frontera entre **D.7 y D.9** es la que separa esta cuenta de la ficha 12.09, y decide si un flujo afecta a la renta disponible o solo al patrimonio neto. En un país que recibe fondos europeos de inversión de forma masiva, esa frontera determina qué agregados se mueven y cuáles no.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el D.7 no es una categoría económica sino un residuo contable**: lo que queda tras sacar impuestos, cotizaciones y prestaciones. Por eso hay que abrirlo siempre antes de interpretarlo, y por eso dentro caben desde el seguro del coche hasta la financiación de una comunidad autónoma.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué define a una transferencia y qué la separa de una compraventa?", a: "Que una unidad entrega un bien, un servicio o dinero sin recibir nada a cambio. Esa ausencia de contrapartida es el criterio operativo del sistema: si hay algo de vuelta es intercambio y va a otra cuenta; si no lo hay, es transferencia. Un impuesto lo es; comprar pan no." },
            { q: "¿Qué distingue una transferencia corriente de una de capital?", a: "El destino, no el importe. Es de capital cuando está vinculada a la adquisición o cesión de un activo, y corriente cuando financia gasto corriente. La consecuencia es grande: las corrientes afectan a la renta disponible y las de capital no, porque entran en la secuencia después del ahorro." },
            { q: "¿Aumentan los fondos europeos de recuperación la renta disponible de España?", a: "Los destinados a inversión, no: son transferencias de capital (D.92). Mejoran la capacidad de financiación y el patrimonio neto, pero el efecto aparece dos cuentas más abajo, en la cuenta de capital. Un año con muchos fondos puede mostrar renta disponible normal y capacidad de financiación muy mejorada." },
            { q: "¿Dónde está la financiación autonómica en las cuentas nacionales?", a: "En el D.73, transferencias corrientes entre administraciones públicas, cuando financia gasto corriente. Es la mayor partida del D.7 español y desaparece por completo al consolidar el sector, porque lo que paga el Estado lo cobran las comunidades. Solo aparece mirando el desglose por subsectores." },
            { q: "Si el Estado adelanta entregas a cuenta a las comunidades, ¿mejora el déficit público?", a: "No. Mejora el saldo de las comunidades y empeora el del Estado exactamente en la misma cantidad, y el déficit del conjunto no cambia un euro. Es un reparto interno del déficit entre subsectores, no un cambio en la posición fiscal del país, aunque se discuta a menudo como si lo fuera." },
            { q: "Se cobran 42 en primas netas y se pagan 38 en indemnizaciones. ¿Son 4 de beneficio asegurador?", a: "No. El margen de la compañía ya salió antes como producción de servicios medida indirectamente. Esos 4 reflejan que en ese ejercicio hubo menos siniestros de los previstos. El par D.71-D.72 muestra el seguro como lo que económicamente es: una transferencia del colectivo asegurado hacia aquellos a los que les ha ocurrido algo." },
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
              q: "¿Cómo clasifica el SEC las multas de tráfico?",
              opciones: [
                "Como impuestos corrientes, por ser obligatorias y sin contrapartida",
                "Como transferencias de capital, al no financiar gasto recurrente",
                "Como transferencias corrientes diversas (D.75)",
                "Como ventas de servicios de las administraciones públicas",
              ],
              correcta: 2,
              porque: [
                "Comparten con los impuestos ser obligatorias y no dar nada a cambio, y les falta lo esencial: no gravan renta, patrimonio, producción ni importaciones.",
                "Financian gasto corriente y no están vinculadas a la adquisición de ningún activo.",
                "Es el cajón de las transferencias corrientes que no encajan en ninguna de las categorías anteriores, y las sanciones van ahí.",
                "No hay servicio alguno que el sancionado reciba a cambio.",
              ],
            },
            {
              q: "¿Qué son los recursos propios de la Unión Europea (D.76)?",
              opciones: [
                "Las aportaciones que los Estados miembros hacen al presupuesto comunitario",
                "Los fondos que la UE transfiere a los Estados miembros",
                "Los ingresos que la UE obtiene de sus propias inversiones financieras",
                "El presupuesto que cada Estado destina a sus políticas europeas",
              ],
              correcta: 0,
              porque: [
                "Van desde los Estados hacia la UE, que a efectos del SEC es una unidad no residente, así que sí afectan a la renta nacional disponible.",
                "Las transferencias en sentido contrario existen y se registran en otras partidas.",
                "La UE no financia su presupuesto con rentas de inversiones propias de forma relevante.",
                "No es gasto nacional en políticas propias: es dinero que sale hacia el presupuesto común.",
              ],
            },
            {
              q: "Una administración concede una beca que cubre la matrícula universitaria y una subvención para que una empresa compre maquinaria. ¿Cómo se clasifican?",
              opciones: [
                "Ambas como transferencias de capital, por proceder del presupuesto de inversión",
                "La beca es corriente y la subvención de capital, porque la primera financia gasto y la segunda va ligada a la adquisición de un activo",
                "Ambas como transferencias corrientes, por ser ayudas públicas",
                "La beca es de capital, por invertir en formación, y la subvención corriente",
              ],
              correcta: 1,
              porque: [
                "La partida presupuestaria de origen no determina la clasificación en cuentas nacionales.",
                "Y la consecuencia importa: la corriente afecta a la renta disponible del receptor y la de capital no, porque entra en la secuencia después del ahorro.",
                "El carácter público de la ayuda no decide nada: lo que decide es para qué sirve.",
                "La formación es capital humano en sentido económico, y el SEC no la reconoce como activo: la beca financia gasto corriente.",
              ],
            },
            {
              q: "¿Cuál de estos flujos NO es una transferencia corriente del D.7?",
              opciones: [
                "La compra de material sanitario por parte de un hospital público",
                "Los traspasos de financiación del Estado a las comunidades autónomas",
                "La ayuda oficial al desarrollo que España entrega a otro país",
                "Las primas netas de seguro no vida que pagan los hogares",
              ],
              correcta: 0,
              porque: [
                "Aquí sí hay contrapartida: el hospital recibe unos bienes a cambio del dinero. Es una compraventa y por tanto consumo intermedio, no una transferencia.",
                "Son transferencias entre administraciones públicas, el D.73, que se anulan al consolidar el sector.",
                "Es cooperación internacional corriente, el D.74.",
                "Son el D.71, la primera de las categorías del bloque.",
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
            { ref: "SEC 2010, capítulo 4 — operación D.7", nota: "el desglose completo de las otras transferencias corrientes, con la definición de transferencia y la frontera con D.9." },
            { ref: "SEC 2010, capítulo 6 — transferencias de capital", nota: "el otro lado de la frontera; conviene leer ambos capítulos seguidos para fijar la distinción." },
            { ref: "IGAE, cuentas de las administraciones públicas por subsectores", nota: "donde sí aparece el D.73 español; la fuente para estudiar financiación territorial." },
            { ref: "Ministerio de Hacienda, liquidación del sistema de financiación autonómica", nota: "el mecanismo de entregas a cuenta y liquidación, y por qué el devengo lo desplaza dos años." },
            { ref: "INE, Curso de Cuentas Nacionales — estimación de transferencias corrientes", nota: "las fuentes concretas de cada componente: cuentas técnicas del seguro, operadores de juego, cuentas del resto del mundo." },
          ],
        },
      ],
    },
  ],
};
