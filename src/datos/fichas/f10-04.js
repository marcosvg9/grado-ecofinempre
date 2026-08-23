/* Ficha 10.04 — Gasto público, Estado de bienestar y pensiones. */

export default {
  codigo: "10.04",
  titulo: "Gasto público, Estado de bienestar y pensiones",
  nivel: 3,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "El sistema de reparto descansa en una identidad contable con tres términos: el tipo de cotización, la relación entre cotizantes y pensionistas, y la pensión relativa al salario. Si la demografía cambia el segundo, alguno de los otros dos tiene que moverse. No hay reforma que esquive esa aritmética, solo distintas formas de repartir su coste.",
  requiere: "10.03 Sistema fiscal español · 10.02 Mercado de trabajo español · 1.10 Economía normativa",
  abre: "10.05 Imposición óptima · 10.06 SEC 2010 · 3.07 Deuda y sostenibilidad",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El gasto público español se concentra en unas pocas partidas de tamaño muy desigual: **pensiones**, **sanidad**, **educación**, **prestaciones por desempleo** e **intereses de la deuda** suman la mayor parte del total. Cualquier discusión sobre reducir el gasto que no toque ese bloque está discutiendo sobre márgenes. Y dentro de él, las pensiones son la partida mayor y la que crece de forma más previsible, porque su evolución depende sobre todo de una variable que se conoce con décadas de antelación: **la pirámide de población**.",
            "**Hay dos formas de organizar un sistema de pensiones y conviene no idealizar ninguna.** En el **reparto**, las cotizaciones de quienes trabajan hoy pagan las pensiones de hoy: no hay fondo acumulado, hay un compromiso intergeneracional. En la **capitalización**, cada persona acumula un fondo que se invierte y del que vivirá. El reparto es vulnerable a la demografía; la capitalización, a los mercados financieros y a la inflación, y no elimina el problema de fondo, porque **lo que consumen los jubilados de un año lo produce necesariamente quien trabaja ese año**. Un fondo permite comprar esa producción con mejor posición negociadora, no crearla. La transición entre sistemas tiene además un coste enorme e inevitable: una generación tendría que pagar dos veces.",
            "**La aritmética del reparto cabe en una identidad, y es lo más útil de esta ficha.** El gasto es la pensión media por el número de pensiones; el ingreso es el tipo de cotización por el salario medio por el número de cotizantes. Igualando ambos y reordenando: **la pensión relativa al salario es igual al tipo de cotización multiplicado por el número de cotizantes por pensión**. Los tres términos están atados. Si el envejecimiento reduce el tercero, **hay que subir el tipo, bajar la pensión relativa o encontrar ingresos fuera del sistema**. No existe una cuarta opción, y toda reforma es una elección entre esas tres, explícita o disimulada.",
            "**El envejecimiento español tiene dos causas que actúan a la vez y en la misma dirección.** La **baja natalidad** sostenida durante décadas estrecha la base de la pirámide, y el **aumento de la esperanza de vida** alarga el periodo de cobro. A eso se suma la llegada a la jubilación de las cohortes numerosas nacidas entre los años sesenta y setenta, que es un fenómeno transitorio pero de gran magnitud y de calendario perfectamente conocido. Nada de esto es una previsión incierta: **son personas que ya han nacido**, y ese es el rasgo que distingue este problema de casi cualquier otro de política económica.",
            "**Las palancas disponibles son pocas y todas incómodas.** Subir el **tipo de cotización** aumenta la cuña fiscal de la ficha 10.03 y grava únicamente el trabajo formal. Reducir la **tasa de sustitución** recorta la renta de los jubilados, y hacerlo por la vía indirecta —cambiando el periodo de cálculo o la fórmula de revalorización— es menos visible pero igual de efectivo. Retrasar la **edad de jubilación** actúa sobre el numerador y el denominador a la vez, y por eso es la palanca más potente, aunque su efecto real depende de que exista empleo para los mayores. Y **elevar el empleo o la productividad** relaja la restricción sin recortar a nadie, que es la única salida agradable y también la más lenta y la menos controlable.",
            "**La financiación con impuestos generales es la vía por la que se ha tendido a resolver el problema en la práctica**, y merece un juicio matizado. Transferir gasto del sistema contributivo a los Presupuestos Generales no crea recursos: **traslada el coste de las cotizaciones a otras figuras** y, por tanto, de los trabajadores formales al conjunto de contribuyentes. Tiene un argumento sólido a favor —hay prestaciones no contributivas y gastos de gestión que no responden a lógica contributiva— y un riesgo evidente: **hace desaparecer la restricción de la vista** sin haberla resuelto, y convierte el déficit de pensiones en déficit público sin más.",
            "**El resto del Estado de bienestar tiene su propia dinámica y no debe olvidarse.** La **sanidad** crece por encima del PIB por envejecimiento y por coste tecnológico, y es donde el efecto Baumol de la ficha 10.01 pega con más fuerza: es un servicio intensivo en trabajo donde la productividad mejora despacio pero los salarios siguen a los del resto de la economía. La **educación** es la partida con mayor rendimiento a largo plazo y la más fácil de recortar sin coste político inmediato, una combinación peligrosa. Y las **prestaciones por desempleo** son el estabilizador automático más potente, con la particularidad española de que la dualidad de la ficha 10.02 hace que su gasto oscile enormemente con el ciclo.",
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
            { nom: "Equilibrio del reparto", sub: "Gasto igual a ingreso, sin fondo acumulado.", cols: ["P̄ · N = t · S̄ · C"] },
            { nom: "Identidad fundamental", sub: "Tres términos atados: mueve uno y mueves otro.", cols: ["P̄ ÷ S̄ = t · (C ÷ N)"] },
            { nom: "Tasa de sustitución", sub: "Pensión media sobre salario medio.", cols: ["TS = P̄ ÷ S̄"] },
            { nom: "Ratio de dependencia del sistema", sub: "Cotizantes por pensión, no jóvenes por mayores.", cols: ["C ÷ N"] },
            { nom: "Tipo necesario", sub: "Si se quiere mantener TS con menos cotizantes.", cols: ["t = TS ÷ (C ÷ N)"] },
            { nom: "Las tres palancas", sub: "No hay una cuarta dentro del sistema.", cols: ["subir t · bajar TS · elevar C/N"] },
            { nom: "Retraso de la edad", sub: "Actúa sobre numerador y denominador a la vez.", cols: ["↑C y ↓N simultáneamente"] },
            { nom: "Restricción real", sub: "Lo que se consume hoy se produce hoy.", cols: ["ningún sistema la elimina"] },
            { nom: "Coste de transición", sub: "Por qué casi nadie cambia de sistema.", cols: ["una generación pagaría dos veces"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la identidad que no se puede esquivar",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un sistema de reparto con un tipo de cotización del **28,3 %** dedicado a pensiones. La identidad dice que la pensión media relativa al salario medio es ese tipo multiplicado por el número de cotizantes que sostiene cada pensión. Veamos qué ocurre cuando la demografía mueve ese segundo factor.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Cotizantes", y: "Sustitución" },
          dominio: { x: [1, 2.5], y: [20, 115] },
          marcasX: [1, 1.5, 2, 2.5],
          marcasY: [20, 40, 60, 80, 100],
          series: [
            {
              nombre: "Tipo 28,3 %",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [2.5, 70.8],
              puntos: [[1, 28.3], [1.2, 34], [1.4, 39.6], [1.6, 45.3], [1.8, 50.9], [2, 56.6], [2.2, 62.3], [2.4, 67.9], [2.5, 70.8]],
            },
            {
              nombre: "Tipo 43,3 %",
              color: "alerta",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [2.4, 103.9],
              puntos: [[1, 43.3], [1.2, 52], [1.4, 60.6], [1.6, 69.3], [1.8, 77.9], [2, 86.6], [2.2, 95.3], [2.4, 103.9]],
            },
            {
              nombre: "Objetivo 65 %",
              color: "tinta2",
              trazo: "punteado",
              grosor: 1.4,
              etiquetaEn: [1, 65],
              puntos: [[1, 65], [2.5, 65]],
            },
          ],
          puntos: [
            { x: 2.3, y: 65.1, etiqueta: "hoy", guias: false },
            { x: 1.5, y: 42.4, etiqueta: "mañana, mismo tipo", guias: false },
            { x: 1.5, y: 65, etiqueta: "mañana, tipo 43,3 %", guias: false },
          ],
          nota: "El gráfico es la identidad dibujada, y no contiene ningún supuesto de comportamiento: **es aritmética contable**. Con 2,3 cotizantes por pensión, un tipo del 28,3 % sostiene una tasa de sustitución del 65 %. Si el ratio cae a 1,5 y **no se toca nada más**, la tasa de sustitución cae al 42,4 %: es lo que ocurre por defecto, sin que nadie decida recortar. Mantener el 65 % con 1,5 cotizantes exige un tipo del **43,3 %**, quince puntos más de cuña fiscal sobre el trabajo. La línea punteada y las dos curvas delimitan todas las combinaciones posibles: **cualquier reforma es un punto de este gráfico**, y lo único que se elige es cuál.",
        },
        {
          tipo: "tabla",
          cabecera: ["Cotizantes por pensión", "Tasa de sustitución con tipo del 28,3 %", "Tipo necesario para sostener el 65 %"],
          filas: [
            ["2,3 — situación de partida", "65,1 %", "28,3 %"],
            ["2,0", "56,6 %", "32,5 %"],
            ["1,5", "42,4 %", "43,3 %"],
            { celdas: ["1,3", "36,8 %", "50,0 %"], clase: "total" },
          ],
          nota: "Léase la tabla como un menú de decisiones, porque eso es. La columna central describe **lo que pasa si no se hace nada**: la pensión relativa se ajusta sola, y el recorte llega igualmente aunque nadie lo anuncie. La columna derecha describe **lo que cuesta evitarlo por la vía de las cotizaciones**. Y hay una tercera vía que no aparece: **elevar el ratio de cotizantes**, mediante más empleo, más inmigración en edad de trabajar o una edad de jubilación más alta. Solo esa tercera permite mejorar sin que alguien pague, y actúa despacio.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El retraso de la edad de jubilación merece verse aparte porque es la palanca más potente**, y la razón es aritmética: mueve los dos términos del cociente a la vez. Quien trabaja dos años más deja de estar en el denominador durante esos dos años **y** está en el numerador cotizando. Si el ratio de partida es 1,5, un desplazamiento que convierta a un 10 % de los pensionistas en cotizantes lo eleva hasta 1,78, con un efecto sobre la tasa de sustitución sostenible de 7,9 puntos. Su límite es empírico y no aritmético: **depende de que exista demanda de trabajo para los mayores de sesenta**, algo que en España no se puede dar por hecho, y de que la salud lo permita, lo que introduce un problema distributivo porque la esperanza de vida en buena salud es muy desigual por ocupación.",
            "**Y una advertencia final sobre el ratio correcto.** El indicador que suele citarse es la **tasa de dependencia demográfica** —mayores de 65 sobre población de 16 a 64—, pero el que aparece en la identidad es **cotizantes por pensión**, que es otra cosa. Un país puede envejecer y mantener su ratio si eleva la tasa de empleo, si incorpora inmigración en edad de trabajar o si retrasa la jubilación efectiva. Confundir ambos indicadores lleva a conclusiones fatalistas: **la demografía determina el primero, pero el segundo depende también del mercado de trabajo**, y esa es la conexión con la ficha 10.02.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cómo se reparte el coste en cada reforma",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las reformas de pensiones españolas de las últimas décadas parecen técnicamente muy distintas entre sí, y desde la identidad de esta ficha se ven como lo que son: **elecciones sobre qué término mover y a quién cargarle el ajuste**. Repasarlas con ese criterio ordena un debate especialmente confuso.",
            "**Ampliar el periodo de cómputo** de la pensión —calcularla sobre más años de carrera en lugar de sobre los últimos— reduce la tasa de sustitución sin tocar ningún tipo ni ninguna edad. Como los salarios suelen ser más bajos al principio de la carrera, incluir más años rebaja la base reguladora. Es un recorte real presentado como un ajuste técnico, y su efecto es **muy desigual**: perjudica a quien tuvo carreras ascendentes y a quien sufrió interrupciones, es decir, con la dualidad de la ficha 10.02, a los más jóvenes y a las mujeres.",
            "**Cambiar la fórmula de revalorización** actúa sobre la tasa de sustitución de forma lenta y acumulativa. Revalorizar por debajo de la inflación reduce el poder adquisitivo de la pensión un poco cada año, y en veinte años el efecto compuesto es enorme; indexar al IPC lo garantiza y traslada todo el riesgo de inflación al sistema. Es la decisión que más determina el gasto a largo plazo y la que menos atención recibe cuando se toma, porque **su efecto en el primer año es siempre pequeño**.",
            "**El factor de sostenibilidad** vinculado a la esperanza de vida automatiza el ajuste: si vivimos más, la pensión inicial se reduce para que el importe total cobrado a lo largo de la jubilación se mantenga. Su virtud es que **saca la decisión del calendario político**; su problema es distributivo, porque la esperanza de vida es muy desigual por ocupación y nivel de renta, de modo que un ajuste uniforme recorta proporcionalmente más a quien menos años va a cobrar.",
            "**Subir las bases máximas de cotización** eleva ingresos hoy y compromete pensiones mayores mañana, con lo que su efecto neto depende del vínculo entre lo cotizado y lo percibido: si se rompe ese vínculo —se cotiza más sin derecho proporcional— es una subida de impuestos sobre las rentas altas del trabajo llamada cotización. Es un ejemplo perfecto de la ficha 10.03: **la denominación legal y la naturaleza económica no coinciden**.",
            "**Cómo evaluar cualquier propuesta futura, en tres preguntas.** Primera: ¿qué término de la identidad mueve —tipo, tasa de sustitución o ratio de cotizantes—? Toda propuesta mueve alguno, y si parece que no mueve ninguno es que traslada el coste fuera del sistema. Segunda: ¿quién soporta el ajuste, los jubilados actuales, los futuros o los trabajadores en activo? Tercera: ¿el efecto es inmediato o se acumula despacio? Las reformas políticamente viables casi siempre son las de efecto lento, lo que explica que se apruebe una cada década y que el problema siga ahí. **La identidad no se puede negociar; el reparto de su coste, sí, y en eso consiste exactamente la discusión.**",
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
            { t: "Creer que la capitalización resuelve el problema demográfico", d: "Lo que consumen los jubilados de un año lo produce quien trabaja ese año, sea cual sea el sistema. Un fondo permite comprar esa producción con mejor posición negociadora, no crearla. La capitalización cambia la naturaleza del riesgo —de demográfico a financiero— y añade un coste de transición en el que una generación pagaría dos veces." },
            { t: "Usar la tasa de dependencia demográfica en lugar del ratio de cotizantes", d: "La identidad contiene cotizantes por pensión, no mayores sobre población en edad de trabajar. Un país puede envejecer y mantener el ratio elevando la tasa de empleo, incorporando inmigración en edad de trabajar o retrasando la jubilación efectiva. Confundirlos lleva a conclusiones fatalistas que la aritmética no respalda." },
            { t: "Presentar la financiación con impuestos generales como una solución", d: "No crea recursos: traslada el coste de las cotizaciones a otras figuras, y por tanto de los trabajadores formales al conjunto de contribuyentes. Tiene un argumento legítimo para prestaciones no contributivas, pero usada de forma general hace desaparecer la restricción de la vista sin haberla resuelto." },
            { t: "Pensar que no hacer nada evita el recorte", d: "Si el ratio de cotizantes cae y el tipo no se mueve, la tasa de sustitución se ajusta sola: del 65 % al 42,4 % en el ejemplo. El recorte llega igualmente, solo que sin haberse decidido ni discutido, y recae íntegramente sobre los pensionistas futuros." },
            { t: "Tratar la ampliación del periodo de cómputo como un ajuste técnico", d: "Es un recorte de la tasa de sustitución con otro nombre, y además desigual: perjudica más a quien tuvo carreras ascendentes o interrumpidas. Con la dualidad del mercado laboral español, eso significa a los más jóvenes y a las mujeres de forma desproporcionada." },
            { t: "Ignorar el efecto acumulativo de la fórmula de revalorización", d: "Es la decisión que más determina el gasto a largo plazo y la que menos atención recibe, porque su efecto en el primer año siempre parece pequeño. Una diferencia de un punto anual durante veinte años cambia el poder adquisitivo de la pensión en más de un 18 %." },
            { t: "Suponer que retrasar la edad legal retrasa la jubilación efectiva", d: "La aritmética de la palanca es potente, pero su efecto real depende de que exista demanda de trabajo para los mayores de sesenta y de que la salud lo permita. Sin empleo para ese grupo, retrasar la edad legal traslada gente al desempleo o a la incapacidad, no a la cotización." },
            { t: "Discutir el recorte del gasto público sin tocar las partidas grandes", d: "Pensiones, sanidad, educación, desempleo e intereses son la mayor parte del total. Cualquier propuesta de contención que se limite a partidas menores está discutiendo sobre márgenes, por muy visible que sea el gasto que señala." },
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
            "El sistema de cuentas registra las pensiones de una forma concreta que condiciona todo lo que se puede decir sobre ellas.",
          ],
          lista: [
            "Las **pensiones contributivas son transferencias corrientes**, no consumo público: aparecen en la cuenta de distribución secundaria de la renta de la ficha 10.06, redistribuyendo renta entre sectores. No forman parte del PIB por el lado del gasto, aunque financien consumo cuando el hogar las gasta. Confundirlo lleva a sumar dos veces.",
            "Las **cotizaciones sociales** entran como parte de la remuneración de asalariados en la cuenta de explotación, coherentemente con el análisis de incidencia de la ficha 10.03. El sistema de cuentas trata así lo que la ley llama cotización empresarial: como coste laboral, no como impuesto separado.",
            "El SEC 2010 **no registra como pasivo el compromiso futuro de pensiones** de un sistema de reparto, porque no constituye una obligación exigible en el sentido contable. Ese compromiso se estima aparte, en cuentas suplementarias, y su magnitud es de un orden que **no aparece en ninguna cifra de deuda pública**. Es la razón de que la deuda registrada y la sostenibilidad a largo plazo de la ficha 3.07 sean discusiones distintas.",
            "El **gasto sanitario y educativo sí es consumo público**, y en él la remuneración de asalariados pesa muchísimo, lo que hace que su coste crezca con los salarios de toda la economía aunque su productividad medida apenas mejore. Es el efecto Baumol de la ficha 10.01 con consecuencias presupuestarias directas.",
            "Y las **prestaciones por desempleo** son el estabilizador automático más visible en las cuentas: su fuerte oscilación cíclica es lo que hace que el saldo público español se mueva tanto con el ciclo, y la razón de que distinguir el saldo estructural del observado —con toda la incertidumbre de la ficha 10.10— sea tan decisivo en el marco fiscal europeo.",
          ],
          cierre:
            "El punto que conviene retener es que **la contabilidad nacional mide flujos anuales, no compromisos**. El problema de las pensiones no está en el déficit de un año, que es pequeño frente al agregado, sino en una senda futura que el sistema de cuentas no registra por diseño. Discutir la sostenibilidad mirando solo el saldo del ejercicio es mirar la variable equivocada.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El ratio de cotizantes por pensión cae de 2,3 a 1,5 y no se toca nada. ¿Qué pasa?", a: "La tasa de sustitución cae del 65 % al 42,4 %, porque la identidad la determina como el producto del tipo por el ratio. El recorte llega igualmente, sin que nadie lo haya decidido ni anunciado, y recae íntegramente sobre los pensionistas futuros. No hacer nada es también una elección sobre quién paga." },
            { q: "¿Cuánto tendría que subir el tipo de cotización para sostener el 65 % con 1,5 cotizantes?", a: "Hasta el 43,3 %, quince puntos más. Sobre una cuña fiscal que ya era del 38,8 % en el ejemplo de la ficha 10.03, eso significa gravar el trabajo formal de manera muy sustancial, con los efectos sobre empleo y economía sumergida que cabe esperar. Es una opción disponible, no una imposible, y su coste es identificable." },
            { q: "¿Por qué retrasar la edad de jubilación es la palanca más potente?", a: "Porque mueve numerador y denominador a la vez: quien trabaja dos años más deja de estar entre los pensionistas y pasa a estar entre los cotizantes. Su límite no es aritmético sino empírico: exige que haya demanda de trabajo para los mayores y que la salud lo permita, y la esperanza de vida en buena salud es muy desigual por ocupación." },
            { q: "¿Resuelve algo pasar de reparto a capitalización?", a: "Cambia la naturaleza del riesgo, de demográfico a financiero, pero no la restricción real: lo que consumen los jubilados de un año lo produce quien trabaja ese año. Además la transición tiene un coste enorme, porque una generación tendría que pagar las pensiones de sus mayores y a la vez acumular su propio fondo." },
            { q: "¿Es lo mismo la tasa de dependencia demográfica que el ratio de cotizantes por pensión?", a: "No, y la diferencia es la que separa el fatalismo del análisis. La demografía determina cuántos mayores hay por persona en edad de trabajar, pero el ratio de la identidad depende además de la tasa de empleo, de la inmigración en edad de trabajar y de la edad efectiva de jubilación. Sobre esos tres se puede actuar." },
            { q: "¿Por qué la deuda pública registrada no refleja el problema de las pensiones?", a: "Porque el SEC 2010 no registra como pasivo el compromiso futuro de un sistema de reparto: no es una obligación exigible en sentido contable. Se estima en cuentas suplementarias y su magnitud no aparece en ninguna cifra de deuda. Por eso la sostenibilidad a largo plazo y el saldo del ejercicio son discusiones distintas." },
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
            { ref: "Stiglitz y Rosengard, La economía del sector público", nota: "el marco general de gasto público y seguridad social, con el análisis de reparto frente a capitalización." },
            { ref: "AIReF, Opinión sobre la sostenibilidad del sistema de pensiones", nota: "proyecciones independientes con metodología explícita; la mejor fuente para ver la identidad aplicada a datos españoles reales." },
            { ref: "Comisión Europea, Ageing Report", nota: "las proyecciones de gasto en pensiones, sanidad y dependencia para todos los Estados miembros bajo supuestos comunes." },
            { ref: "Barr y Diamond, Reforming Pensions: Principles and Policy Choices", nota: "por qué el debate reparto contra capitalización está mal planteado; el mejor tratamiento conceptual disponible." },
            { ref: "Seguridad Social, Informe Económico-Financiero", nota: "las cifras de cotizantes, pensiones y tipos con las que se puede comprobar la identidad de esta ficha directamente." },
          ],
        },
      ],
    },
  ],
};
