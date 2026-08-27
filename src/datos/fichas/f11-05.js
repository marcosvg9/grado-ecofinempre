/* Ficha 11.05 — Bretton Woods y la edad de oro, 1945-1973. */

export default {
  codigo: "11.05",
  titulo: "Bretton Woods y la edad de oro, 1945-1973",
  nivel: 2,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Tipos de cambio fijos pero ajustables, capitales controlados y política monetaria propia: durante veinticinco años el trilema pareció resuelto, y esos veinticinco años fueron los de mayor crecimiento de la historia. El sistema se rompió por una contradicción que se había señalado desde el principio.",
  requiere: "11.04 La Gran Depresión · 3.10 Economía abierta · 3.09 Crecimiento",
  abre: "11.06 Estanflación · 11.09 España · 3.08 Política monetaria",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El sistema acordado en Bretton Woods en 1944 se diseñó explícitamente para **no repetir el periodo de entreguerras**. Sus arquitectos tenían delante dos fracasos que evitar: la rigidez del patrón oro restaurado, que había impedido combatir la Depresión, y las **devaluaciones competitivas** y el proteccionismo de los años treinta, en los que cada país intentaba exportar su desempleo al vecino. El resultado fue un compromiso deliberado entre estabilidad y margen de maniobra.",
            "**El diseño tiene tres piezas y conviene verlas juntas.** Las monedas se fijaban al **dólar** y el dólar al **oro a 35 dólares la onza**, con lo que había tipos fijos pero **ajustables**: un país con un desequilibrio fundamental podía devaluar, con autorización del Fondo Monetario Internacional. Los **movimientos de capital estaban restringidos**, lo que era una novedad radical frente a 1913. Y se crearon instituciones para gestionar el sistema: el FMI para los desequilibrios de balanza de pagos y el Banco Mundial para la reconstrucción.",
            "**Esa combinación es una respuesta concreta al trilema de la ficha 3.10, y es la que explica todo lo demás.** Al restringir la movilidad de capitales se libera el vértice que el patrón oro había sacrificado: **se pueden tener tipos fijos y política monetaria propia a la vez**. Los gobiernos podían por tanto perseguir el pleno empleo sin que una salida de capitales les forzara la mano. La contrapartida —hoy poco intuitiva— era un mundo con controles de cambios, autorizaciones para invertir fuera y límites a lo que un turista podía sacar del país.",
            "**Los resultados fueron extraordinarios y conviene no atribuirlos solo al sistema monetario.** Europa occidental creció alrededor de un 4 % anual per cápita entre 1950 y 1973, Japón cerca del 8 %, y el desempleo se mantuvo en niveles que hoy parecen inverosímiles. Pero buena parte de ese crecimiento fue **convergencia**: reconstruir capital destruido, absorber la tecnología estadounidense acumulada durante décadas y trasladar mano de obra de la agricultura a la industria dan tasas altas que no pueden mantenerse indefinidamente. Es el mecanismo de convergencia condicional de la ficha 3.09, y explica por qué el crecimiento se desacelera al agotarse la brecha, no porque algo se rompiera.",
            "**El sistema tenía sin embargo una contradicción interna que se señaló muy pronto.** El **dilema de Triffin** dice lo siguiente: el mundo necesitaba dólares para comerciar y para acumular reservas, y la única forma de proporcionarlos era que Estados Unidos tuviera déficit exterior. Pero cuantos más dólares circulaban fuera frente a un stock de oro que crecía muy despacio, **menos creíble era la promesa de convertirlos a 35 dólares la onza**. La liquidez del sistema y su credibilidad eran objetivos incompatibles, y no había forma de tener las dos.",
            "**El desenlace siguió esa lógica.** Los gastos de la guerra de Vietnam y los programas sociales de los años sesenta aceleraron la emisión estadounidense, la inflación empezó a subir y varios países —Francia de forma notoria— comenzaron a pedir oro a cambio de sus dólares. En **agosto de 1971** Estados Unidos suspendió la convertibilidad, y tras un intento fallido de reajustar las paridades, en **1973** las principales monedas pasaron a flotar. El sistema no fue derrotado por una crisis externa: **murió de su propia contradicción**, tal como se había previsto.",
            "**Lo que vino después reorganizó el trilema otra vez.** Con tipos flotantes se puede tener movilidad de capitales y política monetaria propia, que es la combinación dominante desde entonces. La zona euro eligió lo contrario para sus miembros —tipo irrevocablemente fijo y capitales libres, luego sin política monetaria nacional—, que es la posición del patrón oro con otro nombre y con las consecuencias que estudia la ficha 10.09. Conviene retener que **ninguna de las tres combinaciones es superior en abstracto**: cada una sacrifica algo, y la historia del siglo XX es en buena medida la de países cambiando de vértice cuando el sacrificio se vuelve insoportable.",
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
            { nom: "Arquitectura del sistema", sub: "Doble anclaje: monedas al dólar, dólar al oro.", cols: ["moneda → dólar → oro a 35 $/onza"] },
            { nom: "Fijo pero ajustable", sub: "La diferencia clave con el patrón oro.", cols: ["devaluación permitida ante desequilibrio fundamental"] },
            { nom: "Solución del trilema", sub: "Se sacrifica la movilidad de capitales.", cols: ["tipo fijo $+$ política monetaria propia $\\Rightarrow$ control de capitales"] },
            { nom: "Dilema de Triffin", sub: "Liquidez y credibilidad son incompatibles.", cols: ["dar liquidez exige déficit; el déficit mina la convertibilidad"] },
            { nom: "Cobertura de la promesa", sub: "Se degrada sola si los dólares crecen.", cols: ["$\\dfrac{\\text{oro}}{\\text{dólares en manos extranjeras}}$ ↓"] },
            { nom: "Convergencia condicional", sub: "Por qué crecer es más fácil desde atrás.", cols: ["cuanto mayor la brecha con el líder, mayor g"] },
            { nom: "Aritmética del alcance", sub: "Cuánto tarda un país en acercarse.", cols: ["$\\text{ratio}_t = \\text{ratio}_0 \\left(\\dfrac{1+g}{1+g^*}\\right)^t$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: convergencia y la trampa de Triffin",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, por qué crecer al 4 % era posible.** Un país europeo parte de una renta por habitante equivalente al **40 %** de la estadounidense en 1950 y crece al **4 % anual**, mientras el líder crece al **2 %**. Como el que va detrás puede adoptar tecnología ya inventada en lugar de inventarla, su tasa es mayor mientras dure la brecha.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Años", y: "% del líder" },
          dominio: { x: [0, 40], y: [35, 100] },
          marcasX: [0, 10, 20, 23, 30, 40],
          marcasY: [40, 60, 80, 100],
          series: [
            {
              nombre: "Seguidor al 4 %",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [40, 87.4],
              puntos: [[0, 40], [5, 44.1], [10, 48.6], [15, 53.5], [20, 59], [23, 62.5], [25, 65.1], [30, 71.6], [35, 79], [40, 87.4]],
            },
            {
              nombre: "El líder",
              color: "tinta",
              trazo: "discontinuo",
              grosor: 1.6,
              etiquetaEn: [40, 100],
              puntos: [[0, 100], [40, 100]],
            },
          ],
          puntos: [
            { x: 23, y: 62.5, etiqueta: "1973", guias: true },
          ],
          nota: "En los veintitrés años que van de 1950 a 1973, dos puntos de crecimiento diferencial llevan al seguidor del **40 % al 62,5 %** del nivel del líder. Nadie ha hecho nada milagroso: **la diferencia entre 4 % y 2 % sostenida durante una generación es toda la explicación**. Y de ahí sale la advertencia de la ficha: buena parte de la edad de oro fue recuperar terreno, no una capacidad permanente de crecer al 4 %. Al estrecharse la brecha, el mecanismo se agota por sí solo, y una desaceleración posterior no requiere que nada se haya roto. Confundir convergencia con talento nacional es uno de los errores más repetidos al leer estas décadas — y al leer después el milagro asiático.",
        },
        {
          tipo: "tabla",
          cabecera: ["Crecimiento anual", "Años para duplicar la renta", "En 23 años la renta se multiplica por"],
          filas: [
            ["2 % — el líder", "35", "1,6"],
            ["4 % — Europa occidental", "17,7", "2,5"],
            { celdas: ["8 % — Japón", "9,0", "5,9"], clase: "total" },
          ],
          nota: "La última fila da la medida del caso japonés: **multiplicar por casi seis la renta por habitante en veintitrés años**, es decir, que un trabajador que empezó su carrera en 1950 la terminó en un país seis veces más rico. Ninguna sociedad había experimentado nada semejante, y explica tanto la transformación social del periodo como la dificultad de gestionarlo después: instituciones, expectativas salariales y sistemas de pensiones se diseñaron suponiendo que aquel ritmo era lo normal.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, la trampa de Triffin en aritmética.** Estados Unidos debía suministrar dólares al resto del mundo, y solo podía hacerlo teniendo déficit exterior. Supongamos que los dólares en manos extranjeras crecen a un ritmo modesto del **5 % anual** mientras el stock de oro permanece prácticamente constante. La promesa de convertir a 35 dólares la onza se va vaciando de contenido sola.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Años transcurridos", "Cobertura en oro de los dólares exteriores"],
          filas: [
            ["0", "100 %"],
            ["5", "78 %"],
            ["10", "61 %"],
            ["15", "48 %"],
            { celdas: ["20", "38 %"], clase: "total" },
          ],
          nota: "En veinte años la cobertura cae al **38 %** de la inicial **sin que nadie haga nada mal**: basta con que el sistema funcione según su diseño. Ahí está la contradicción que Triffin señaló ya en 1960: **si Estados Unidos deja de tener déficit, el mundo se queda sin liquidez; si lo mantiene, la convertibilidad deja de ser creíble**. No hay una política intermedia que resuelva ambas cosas, porque son incompatibles por construcción. Cuando la aritmética se volvió evidente y varios países empezaron a pedir oro, el desenlace de 1971 solo era cuestión de fecha.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué hizo posible la edad de oro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un cuarto de siglo con crecimiento alto, desempleo bajo, inflación moderada y desigualdad decreciente es una combinación que no se ha repetido, y explicar por qué ocurrió es una de las preguntas abiertas más interesantes de la historia económica reciente. Conviene ordenar los candidatos.",
            "**La convergencia tecnológica es el factor más sólido y el menos glamuroso.** Europa y Japón tenían una brecha enorme con Estados Unidos en métodos productivos, y cerrarla no exigía innovar sino **adoptar**: cadenas de montaje, gestión empresarial, química, electricidad industrial. Adoptar es mucho más rápido y más barato que inventar, y por eso el crecimiento del seguidor supera al del líder mientras dura la brecha. Este factor explica por sí solo una parte grande del diferencial, y también predice correctamente su agotamiento.",
            "**La reasignación sectorial aporta otra parte.** Trasladar trabajadores de una agricultura de baja productividad a una industria de productividad mucho mayor eleva el producto agregado sin que mejore nada dentro de cada sector: es el término «entre sectores» de la descomposición de la ficha 10.01, con el signo favorable en lugar del efecto Baumol. España es el caso extremo de ese fenómeno, y lo verá la ficha 11.09.",
            "**El marco institucional contribuyó de forma difícil de cuantificar.** Los controles de capital daban margen a la política monetaria nacional; el comercio se liberalizó gradualmente mediante rondas de negociación sin abrir de golpe; los sistemas de negociación colectiva repartieron las ganancias de productividad en salarios, sosteniendo la demanda; y el Estado de bienestar en construcción amortiguaba los riesgos individuales. La combinación de **apertura comercial con protección social** es lo que se ha llamado liberalismo integrado, y es el rasgo que más claramente distingue este periodo del siguiente.",
            "**Y hubo condiciones irrepetibles que conviene reconocer.** Energía barata: el petróleo costaba poco y de forma estable hasta 1973. Demografía favorable, con generaciones numerosas entrando en el mercado de trabajo y pocos jubilados que sostener — exactamente lo contrario de la aritmética de la ficha 10.04. Y una demanda embalsada tras quince años de depresión y guerra que garantizaba mercado a cualquier cosa que se produjera.",
            "**La conclusión, que es la que importa para leer el presente.** La edad de oro no fue el resultado de una política económica superior que después se abandonó por error, ni la prueba de que un modelo concreto funcione siempre. Fue la coincidencia de **convergencia, reasignación sectorial, energía barata, demografía y un marco institucional favorable**, y varios de esos factores eran por naturaleza transitorios. Quien la invoca como prueba de que basta con volver a aquellas políticas está olvidando que la mitad de sus causas ya no existen. Y quien la despacha como una anomalía olvida que el marco institucional sí fue una elección, y que las elecciones se pueden repetir.",
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
            { t: "Creer que Bretton Woods era un patrón oro", d: "Se le parecía en el anclaje último, pero tenía dos diferencias decisivas: las paridades eran ajustables ante un desequilibrio fundamental, y los movimientos de capital estaban restringidos. Eso último es lo que liberaba la política monetaria nacional, que es justo lo que el patrón oro impedía." },
            { t: "Atribuir el crecimiento de la edad de oro solo al sistema monetario", d: "Buena parte fue convergencia tecnológica y reasignación de trabajadores de la agricultura a la industria, más energía barata y demografía favorable. El marco monetario ayudó, pero un país que parte muy por detrás crece deprisa por razones que se agotan solas al estrecharse la brecha." },
            { t: "Interpretar la desaceleración posterior a 1973 como un fracaso", d: "Al reducirse la brecha con el líder, el mecanismo de convergencia se agota por construcción y las tasas caen sin que nada se haya roto. Distinguir la parte de la desaceleración que es agotamiento de la convergencia de la que sí requiere explicación es el primer paso de cualquier diagnóstico serio del periodo." },
            { t: "Pensar que el sistema cayó por una crisis externa", d: "Murió de una contradicción interna señalada por Triffin en 1960: dar liquidez al mundo exigía déficit estadounidense, y el déficit vaciaba de credibilidad la convertibilidad a 35 dólares la onza. No hay política intermedia que resuelva ambas cosas, porque son incompatibles por diseño." },
            { t: "Olvidar que los controles de capital eran la pieza central", d: "Sin ellos, tipo fijo y política monetaria propia son incompatibles, que es el trilema. Un mundo con autorizaciones para invertir fuera y límites a la divisa que podía sacar un turista resulta hoy inimaginable, y era la condición técnica de todo lo demás." },
            { t: "Invocar la edad de oro como receta de política", d: "Varias de sus causas eran irrepetibles: la brecha tecnológica que se cerró, el petróleo barato, la demografía favorable y la demanda embalsada tras quince años de depresión y guerra. Repetir las políticas sin las condiciones no reproduce los resultados." },
            { t: "Suponer que existe una solución óptima del trilema", d: "Cada vértice sacrifica algo: Bretton Woods la libertad de capitales, el patrón oro y el euro la política monetaria nacional, la flotación la estabilidad del tipo de cambio. La historia monetaria del siglo XX es la de países cambiando de vértice cuando el sacrificio se vuelve insoportable, no la de un régimen superior a los demás." },
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
            "Este periodo es el de la construcción del sistema estadístico internacional que hoy usamos, y buena parte de sus rasgos se explican por las necesidades de entonces.",
          ],
          lista: [
            "El primer **Sistema de Cuentas Nacionales** de Naciones Unidas se publica en 1953 y establece la armonización internacional que después heredarán el SNA de 1968 y 1993 y el **SEC 2010** de la ficha 10.06. La motivación fue práctica: el FMI necesitaba comparar balanzas de pagos y el Plan Marshall exigía repartir ayuda según necesidades medibles.",
            "La **balanza de pagos** adquiere su forma actual precisamente porque el sistema de Bretton Woods obligaba a vigilarla: un desequilibrio fundamental era la condición para autorizar una devaluación, y había que poder demostrarlo con cifras. La estructura de cuenta corriente, capital y financiera de la ficha 3.10 responde a esa exigencia institucional.",
            "Las **reservas internacionales** pasan a ser una partida vigilada y publicada, y su composición —oro frente a divisas— es exactamente el objeto del dilema de Triffin. Hoy figuran en las cuentas financieras del banco central con la lógica de sectores de la ficha 10.06.",
            "Las **comparaciones internacionales de renta** se sistematizan en este periodo con los primeros programas de paridad de poder adquisitivo, sin los cuales la afirmación «Europa está al 40 % del nivel estadounidense» no significaría nada. Es el problema que la ficha 10.07 señala para las comparaciones de nivel, abordado por primera vez de forma organizada.",
            "Y los **controles de capital** dejan una huella estadística curiosa: mientras existieron, las cuentas financieras eran mucho más fáciles de cuadrar, porque casi todos los flujos pasaban por canales autorizados y registrados. La discrepancia entre la cuenta de capital y la financiera que la ficha 10.06 mencionaba creció al liberalizarse los movimientos.",
          ],
          cierre:
            "El hilo con la ficha anterior es directo: si la Depresión creó la contabilidad nacional, **Bretton Woods la internacionalizó**. Que hoy se puedan comparar las cuentas de España y de Alemania es consecuencia de que en 1944 alguien necesitó comparar desequilibrios exteriores para decidir quién podía devaluar.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿En qué se diferenciaba Bretton Woods del patrón oro?", a: "En dos cosas decisivas. Las paridades eran ajustables ante un desequilibrio fundamental, con autorización del FMI, en lugar de irrevocables. Y los movimientos de capital estaban restringidos, lo que liberaba el vértice del trilema que el patrón oro sacrificaba: permitía tener tipo fijo y política monetaria propia al mismo tiempo." },
            { q: "Un país al 40 % del líder crece al 4 % y el líder al 2 %. ¿Dónde está tras 23 años?", a: "Al 62,5 % del nivel del líder. Dos puntos de crecimiento diferencial sostenidos durante una generación explican por sí solos el acercamiento de Europa occidental a Estados Unidos entre 1950 y 1973. No hace falta invocar nada milagroso: es aritmética de crecimiento compuesto." },
            { q: "¿Por qué la desaceleración posterior a 1973 no prueba que algo se rompiera?", a: "Porque buena parte del crecimiento anterior era convergencia: adoptar tecnología ya inventada y trasladar trabajadores de la agricultura a la industria. Ambos mecanismos se agotan solos al estrecharse la brecha y al vaciarse el campo. Una desaceleración es la predicción del propio modelo, no un síntoma de fracaso." },
            { q: "¿En qué consiste el dilema de Triffin?", a: "El mundo necesitaba dólares para comerciar y acumular reservas, y solo podía obtenerlos si Estados Unidos tenía déficit exterior. Pero cuantos más dólares circulaban frente a un stock de oro casi fijo, menos creíble era convertirlos a 35 dólares la onza. Con los dólares exteriores creciendo un 5 % anual, la cobertura cae al 38 % en veinte años sin que nadie haga nada mal." },
            { q: "¿Qué papel jugaban los controles de capital?", a: "Eran la pieza técnica que hacía posible el resto. Sin ellos, tipo fijo y política monetaria propia son incompatibles por el trilema. Con ellos, los gobiernos podían perseguir el pleno empleo sin que una salida de capitales les forzara la mano, a costa de un mundo con autorizaciones para invertir fuera y límites a la divisa de los viajeros." },
            { q: "¿Sirve la edad de oro como receta de política económica?", a: "Solo en parte. Varias de sus causas eran irrepetibles: la brecha tecnológica que se cerró, el trasvase de la agricultura a la industria, la energía barata, la demografía favorable y la demanda embalsada tras quince años de depresión y guerra. El marco institucional sí fue una elección, y esa parte es discutible; el resto no se puede convocar por decreto." },
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
            { ref: "Eichengreen, La globalización del capital", nota: "el capítulo de Bretton Woods: diseño, funcionamiento y ruptura, con el trilema como hilo conductor." },
            { ref: "Triffin, Gold and the Dollar Crisis, 1960", nota: "el libro que predijo el final del sistema once años antes de que ocurriera, y explicó exactamente por qué." },
            { ref: "Crafts y Toniolo, Economic Growth in Europe since 1945", nota: "la descomposición del crecimiento europeo entre convergencia, reasignación sectorial y mejora genuina." },
            { ref: "Ruggie, «International Regimes, Transactions, and Change», 1982", nota: "el concepto de liberalismo integrado: apertura exterior compatible con protección social interna." },
            { ref: "Marglin y Schor, The Golden Age of Capitalism", nota: "una lectura desde la economía política de por qué el acuerdo social del periodo funcionó y por qué se deshizo." },
          ],
        },
      ],
    },
  ],
};
