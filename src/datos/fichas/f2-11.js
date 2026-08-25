/* Ficha 2.11 — Ventaja comparativa y ganancias del comercio. */

export default {
  codigo: "2.11",
  titulo: "Ventaja comparativa y ganancias del comercio",
  nivel: 2,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "Dos países ganan intercambiando aunque uno sea más productivo en todo. Lo que ordena el comercio no es la productividad absoluta sino el coste de oportunidad, y por eso ningún país es «demasiado ineficiente para comerciar»: la ventaja comparativa es relativa por construcción y siempre existe.",
  requiere: "1.01 Coste de oportunidad · 1.02 Oferta y demanda · 1.04 Excedente y bienestar",
  abre: "2.12 Política comercial · 3.10 Economía abierta · 11.07 La segunda globalización",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El argumento de Ricardo es probablemente el resultado más contraintuitivo de la economía, y sigue siéndolo doscientos años después. Dice que **dos países se benefician de comerciar aunque uno sea más eficiente produciendo absolutamente todo**. La intuición corriente dice lo contrario: si mi vecino hace mejor que yo las dos cosas, no tengo nada que ofrecerle. El error está en comparar productividades entre países cuando lo que decide es el coste de oportunidad **dentro** de cada país.",
            "La distinción es la siguiente. Hay **ventaja absoluta** en un bien cuando se produce con menos recursos que el otro país. Hay **ventaja comparativa** cuando se produce renunciando a menos cantidad del otro bien. La primera compara entre países; la segunda, dentro de cada uno. Y son independientes: un país puede tener ventaja absoluta en los dos bienes, pero **es imposible que tenga ventaja comparativa en los dos**, porque si renunciar a poco de B para hacer A es su fuerza, entonces renunciar a mucho de A para hacer B es forzosamente su debilidad. Los costes de oportunidad son recíprocos, así que la ventaja comparativa siempre está repartida.",
            "De ahí sale la conclusión que importa: **todo país tiene ventaja comparativa en algo**, por pobre o improductivo que sea. No hay países «sin nada que aportar». Lo que la ventaja comparativa determina es *en qué* conviene especializarse, no *cuánto* se gana en total, que depende del nivel de productividad. Un país poco productivo se especializará correctamente y seguirá siendo pobre: el comercio mejora su posición respecto a no comerciar, no lo convierte en rico. Confundir esas dos cosas es la fuente de la mitad de los malentendidos del tema.",
            "El mecanismo de la ganancia es sencillo una vez visto. En autarquía, cada país solo puede consumir lo que produce, así que su conjunto de consumo coincide con su frontera de posibilidades de la ficha 1.01. Al abrirse al comercio, produce donde es relativamente bueno y **cambia** parte de esa producción por el otro bien a la relación de intercambio internacional. Si esa relación difiere de su coste de oportunidad interno, el país puede situarse **fuera de su propia frontera**: consumir combinaciones que le eran físicamente imposibles. No ha aumentado su capacidad productiva; ha sustituido una tecnología cara —producir el bien en el que es malo— por otra barata, que es producir el bien en el que es bueno y cambiarlo.",
            "La relación de intercambio, o **relación real de intercambio**, tiene que quedar entre los dos costes de oportunidad para que ambos ganen. Si coincide exactamente con el coste interno de un país, ese país es indiferente y toda la ganancia se la lleva el otro. Cuanto más se aleje la relación internacional del coste de oportunidad propio, mayor es la ganancia. Eso explica por qué los países pequeños suelen ganar proporcionalmente más al abrirse: el precio mundial apenas se mueve por su entrada, así que se enfrentan a una relación muy distinta de la suya, mientras que un país grande arrastra el precio mundial hacia su propio coste interno y captura menos.",
            "Ricardo explica el **patrón** del comercio con un único factor y diferencias de tecnología. El modelo de **Heckscher-Ohlin** añade la pregunta de *por qué* difieren los costes de oportunidad, y responde que por la dotación relativa de factores: un país abundante en trabajo tiene ventaja comparativa en bienes intensivos en trabajo. Esa versión tiene una consecuencia que Ricardo no ve y que domina el debate político: si el comercio se explica por los factores, entonces **cambia la retribución de los factores dentro de cada país**, y crea perdedores identificables. Es el resultado de Stolper-Samuelson, y el caso práctico lo recorre.",
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
            { nom: "Ventaja absoluta", sub: "Compara entre países. Puede acumularse.", cols: ["Producir un bien con menos recursos que el otro país"] },
            { nom: "Ventaja comparativa", sub: "Compara dentro de cada país. Nunca se acumula.", cols: ["Producir un bien renunciando a menos cantidad del otro"] },
            { nom: "Coste de oportunidad", sub: "La magnitud que ordena el comercio.", cols: ["CO de 1 software = horas por software ÷ horas por textil"] },
            { nom: "Reciprocidad", sub: "Por qué la ventaja comparativa siempre está repartida.", cols: ["Si CO(A) es bajo en un bien, es alto en el otro por construcción"] },
            { nom: "Relación real de intercambio", sub: "El precio internacional relativo.", cols: ["Unidades de textil que se obtienen por 1 de software"] },
            { nom: "Condición de ganancia mutua", sub: "Fuera de este rango, un país no comercia.", cols: ["CO del exportador < relación de intercambio < CO del importador"] },
            { nom: "Ganancia del comercio", sub: "El resultado gráfico central.", cols: ["Consumir fuera de la frontera de posibilidades propia"] },
            { nom: "Heckscher-Ohlin", sub: "De dónde salen las diferencias de coste.", cols: ["Ventaja comparativa en el bien intensivo en el factor abundante"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: el país más productivo también gana",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos países, dos bienes y un solo factor, el trabajo. **Norte dispone de 2.400 horas** y **Sur de 4.800** —es más grande y menos productivo, como suele ocurrir—. Lo esencial del ejemplo es que **Norte produce mejor los dos bienes**: necesita menos horas tanto para el software como para el textil. La intuición diría que no tiene nada que ganar comerciando con Sur.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "Horas por software", "Horas por textil", "Coste de oportunidad de 1 software", "Coste de oportunidad de 1 textil"],
          filas: [
            ["Norte", "2 h", "4 h", "0,5 textil", "2,0 software"],
            ["Sur", "8 h", "5 h", "1,6 textil", "0,625 software"],
            { celdas: ["Quién tiene la ventaja", "Norte (absoluta)", "Norte (absoluta)", "Norte: renuncia a menos", "Sur: renuncia a menos"], clase: "total" },
          ],
          nota: "Las dos primeras columnas dan **las dos ventajas absolutas a Norte**. Las dos últimas reparten la ventaja comparativa: Norte sacrifica solo 0,5 textil por cada software, frente a 1,6 de Sur; y Sur sacrifica 0,625 software por cada textil, frente a 2,0 de Norte. **Nadie puede ganar las dos últimas columnas a la vez**, porque son recíprocas: 0,5 y 2,0 son inversos, igual que 1,6 y 0,625.",
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Norte: software", "Norte: textil", "Sur: software", "Sur: textil", "Mundo: software", "Mundo: textil"],
          filas: [
            ["Autarquía (mitad de horas a cada bien)", "600", "300", "300", "480", "900", "780"],
            ["Especialización completa", "1.200", "0", "0", "960", "1.200", "960"],
            { celdas: ["Consumo tras cambiar 350 por 350", "850", "350", "350", "610", "1.200", "960"], clase: "total" },
          ],
          nota: "La especialización sube la producción mundial de **los dos bienes a la vez**: 300 software y 180 textil más, sin una hora de trabajo adicional. Y en la última fila **los cuatro números mejoran respecto a la autarquía**: Norte pasa de 600 a 850 software y de 300 a 350 textil; Sur, de 300 a 350 software y de 480 a 610 textil. Nadie ha cedido nada.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Software", y: "Textil" },
          dominio: { x: [0, 1250], y: [0, 1250] },
          marcasX: [0, 300, 600, 900, 1200],
          marcasY: [0, 300, 600, 900, 1200],
          series: [
            {
              nombre: "Lo que Norte puede consumir comerciando",
              color: "acento",
              etiquetaEn: [120, 1120],
              puntos: [[0, 1200], [1200, 0]],
            },
            {
              nombre: "Frontera de Norte",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [40, 320],
              puntos: [[0, 600], [1200, 0]],
            },
          ],
          puntos: [
            { x: 600, y: 300, etiqueta: "A  autarquía", guias: true },
            { x: 850, y: 350, etiqueta: "C  consumo con comercio", guias: true },
            { x: 1200, y: 0, etiqueta: "P", guias: false },
          ],
          nota: "**P** es la producción, toda ella software. El punto **C está fuera de la frontera discontinua**: Norte consume una combinación que le era físicamente imposible producir. No ha mejorado su tecnología ni ha trabajado más horas. Ha dejado de fabricar textil —donde renunciaba a 2 software por unidad— y lo compra a 1, que es la relación internacional. **La recta de comercio es más tendida que la frontera, y esa diferencia de pendiente es toda la ganancia.**",
        },
        {
          tipo: "parrafos",
          items: [
            "Conviene comprobar que la relación de intercambio elegida es admisible. Norte solo acepta vender software si recibe **más de 0,5 textil** por unidad, porque por menos le sale mejor fabricarlo él. Sur solo acepta comprarlo si paga **menos de 1,6 textil**, porque por más le conviene producirlo. La relación 1,0 cae dentro de ese rango y por eso los dos firman. Fuera de él, uno de los dos se levanta de la mesa: a 0,4 textil por software, Norte prefiere la autarquía; a 1,8, la prefiere Sur.",
            "Ese rango también dice **cómo se reparte la ganancia**, y no a partes iguales. Si la relación se acerca a 0,5, casi toda la ganancia va a Sur; si se acerca a 1,6, va a Norte. La relación real la fija la oferta y la demanda mundiales, y ahí el tamaño importa: un país pequeño que se abre encuentra un precio mundial que él no mueve, muy distinto de su coste interno, y captura una ganancia proporcionalmente grande. Un país grande arrastra el precio mundial hacia su propio coste de oportunidad y se queda con menos, aunque en volumen absoluto gane más.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: quién pierde dentro del país que gana",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo lo anterior habla de países como si fueran una sola persona. No lo son, y ahí empieza la parte difícil. El ejemplo suponía un único factor, el trabajo, homogéneo y capaz de moverse del textil al software sin coste. Con esa hipótesis, la ganancia del comercio se reparte automáticamente y no hay perdedores. **Basta con relajarla para que aparezcan.**",
            "El modelo de Heckscher-Ohlin trabaja con dos factores —digamos trabajo poco cualificado y capital— y llega al resultado de **Stolper-Samuelson**: el comercio aumenta la retribución real del factor **abundante** en cada país y reduce la del factor **escaso**. En una economía avanzada, abundante en capital y cualificación, abrirse al comercio con un país abundante en trabajo poco cualificado eleva el rendimiento del capital y **deprime el salario relativo de los trabajadores poco cualificados**. No es un efecto de transición: es el nuevo equilibrio. El país en conjunto gana, y una parte identificable de sus habitantes pierde de forma permanente.",
            "Que el país gane significa, con precisión, que **los ganadores podrían compensar a los perdedores y quedarse aún mejor**. Es el criterio de compensación potencial, y la palabra que hace el trabajo es *potencial*. La compensación tiene que organizarla alguien, y si no se organiza, el resultado agregado positivo convive con pérdidas reales y concentradas. Ese hueco entre la ganancia difusa y la pérdida concentrada explica la economía política del proteccionismo mejor que cualquier apelación a la irracionalidad: quien pierde lo sabe, se organiza y vota; quien gana veinte euros al año en ropa más barata ni se entera.",
            "La evidencia empírica de las dos últimas décadas ha dado la razón a esta lectura con más fuerza de la que se esperaba. Los estudios sobre el efecto de la apertura comercial en regiones concretas encontraron caídas de empleo y de salarios **persistentes durante más de una década** en las zonas expuestas, sin la reasignación rápida que los modelos suponían. El factor no se movía: ni entre sectores ni geográficamente. La ficha 11.07 recorre ese episodio, y la lección que deja no es que el comercio empobrezca —el agregado sigue siendo positivo—, sino que **la hipótesis de movilidad sin coste, que es lo que hace inocuo el ajuste en el modelo, es empíricamente falsa**.",
            "De ahí que la política comercial sensata no sea elegir entre abrirse o cerrarse, sino decidir qué hacer con el reparto. Un arancel protege a los perdedores destruyendo parte de la ganancia agregada, y encima protege al sector, no a las personas. Las alternativas —formación, movilidad, apoyo a la renta durante el ajuste— son más baratas en términos de eficiencia, pero exigen una capacidad administrativa que no siempre existe. La ficha 2.12 pone números a lo que cuesta la opción arancelaria.",
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
            { t: "Creer que hace falta ventaja absoluta para exportar", d: "Es el error original y el más persistente. La ventaja absoluta determina el nivel de vida; la comparativa determina el patrón de especialización. Un país menos productivo en todo sigue teniendo un bien en el que renuncia a menos, y ese es el que exporta. La ventaja comparativa no puede acumularse en un solo país porque los costes de oportunidad son recíprocos." },
            { t: "Comparar productividades entre países en lugar de dentro de cada uno", d: "Mirar «Norte tarda 2 h y Sur 8 h» compara entre países y solo informa de la ventaja absoluta. La pregunta correcta es interna: cuando Norte fabrica un software, ¿a cuánto textil renuncia? Esa comparación —0,5 frente a 1,6— es la que decide quién exporta qué." },
            { t: "Confundir ganar con el comercio con hacerse rico", d: "El comercio mejora la posición de un país respecto a la autarquía, no respecto a los demás. Un país poco productivo que se especializa correctamente consume más que encerrado y sigue siendo pobre, porque su nivel de vida lo fija su productividad absoluta. Esperar que la apertura por sí sola cierre la brecha de renta es pedirle algo que el modelo nunca prometió." },
            { t: "Tratar la relación de intercambio como un dato irrelevante", d: "No lo es: decide el reparto de la ganancia. Si coincide con el coste de oportunidad de un país, ese país es exactamente indiferente entre comerciar y no hacerlo, y toda la ganancia se la lleva el socio. Fuera del rango entre ambos costes, sencillamente no hay comercio voluntario." },
            { t: "Suponer que el país gana implica que todos ganan", d: "El agregado positivo significa que los ganadores podrían compensar a los perdedores, no que lo hagan. Con más de un factor, Stolper-Samuelson predice que el factor escaso pierde en términos reales de forma permanente. Ignorar ese reparto convierte cualquier discusión sobre comercio en un diálogo de sordos." },
            { t: "Dar por buena la movilidad instantánea de los factores", d: "El modelo supone que el trabajo se mueve del sector que se contrae al que se expande sin coste ni demora. La evidencia sobre choques comerciales concretos muestra ajustes que duran más de una década, con caídas persistentes de empleo y salario en las regiones expuestas. La hipótesis que hace indoloro el ajuste es justamente la que falla." },
            { t: "Pensar que la ventaja comparativa es fija", d: "No es un dato geológico. Depende de la tecnología, del capital humano y de la dotación de factores, y las tres cambian. Países que exportaban materias primas exportan hoy manufacturas y servicios. Eso también significa que la especialización presente no es un destino, y es el argumento serio —no el proteccionista— a favor de la política industrial." },
            { t: "Aplicar el razonamiento solo a bienes", d: "El argumento no distingue entre bienes y servicios, ni entre productos y tareas. La segunda globalización fragmentó la producción y llevó la ventaja comparativa al nivel de la tarea dentro de un mismo producto, que es lo que estudia la ficha 11.07. La lógica es idéntica; cambia la unidad a la que se aplica." },
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
            "El comercio entra en las cuentas por dos operaciones y deja un problema de medición que el sistema resuelve con una magnitud poco conocida y muy útil.",
          ],
          lista: [
            "Las **exportaciones (P.6)** y las **importaciones (P.7)** son operaciones de bienes y servicios como cualquier otra de la ficha 13.02. Entran en la ecuación de equilibrio por producto: las importaciones son recursos, junto a la producción, y las exportaciones son empleos, junto al consumo y la formación de capital.",
            "En el enfoque del gasto, el PIB incluye las exportaciones y **resta** las importaciones. Esa resta no significa que importar reduzca la riqueza: está ahí porque el consumo, la inversión y el gasto público ya contienen bienes importados, y hay que descontarlos para quedarse con lo producido dentro. Leer el saldo exterior como una puntuación de la que conviene salir ganando es el error que la ficha 3.10 desmonta.",
            "La relación real de intercambio tiene un efecto que **el PIB real no recoge**. El PIB en volumen mide cantidad producida: si mejoran los precios de exportación frente a los de importación, el país puede comprar más importaciones con las mismas exportaciones, y eso es una ganancia real que no aparece como más producción. El SEC lo resuelve con la **renta interior bruta real**, que añade al PIB en volumen las *ganancias o pérdidas de intercambio*. Es la magnitud correcta cuando se discute el efecto de un choque de precios de materias primas.",
            "Ese ajuste depende de cómo se deflacte, y por eso conecta con la ficha 10.08: con precios del año anterior encadenados, los índices de precios de exportación e importación se mueven de forma independiente y la ganancia de intercambio se calcula con ellos, no con el deflactor del PIB.",
            "El detalle de quién comercia con quién, y la conciliación con la **balanza de pagos**, viven en la cuenta del resto del mundo (**S.2**) de la ficha 12.10. Ahí se ve que las cifras de aduanas y las de contabilidad nacional no coinciden: el SEC registra por cambio de propiedad económica y no por paso de frontera, lo que separa ambas medidas en cuanto aparecen la maquila o las mercancías que no cruzan el país que las vende.",
          ],
          cierre:
            "La consecuencia práctica: para juzgar si un país ha ganado con el comercio, el PIB en volumen es la magnitud equivocada. Mide lo que se produce, no lo que se puede comprar con ello.",
        },
      ],
    },

    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            {
              q: "Norte necesita 2 h por software y 4 h por textil; Sur, 8 h y 5 h. ¿Quién exporta cada bien?",
              a: "Norte exporta software y Sur exporta textil. Norte tiene ventaja absoluta en los dos, pero eso no decide nada. El coste de oportunidad de un software es 2/4 = 0,5 textil en Norte y 8/5 = 1,6 en Sur: Norte renuncia a menos y se especializa en software. Recíprocamente, un textil cuesta 0,625 software en Sur frente a 2,0 en Norte.",
            },
            {
              q: "¿Puede un país tener ventaja comparativa en los dos bienes?",
              a: "No, nunca. Los costes de oportunidad son inversos entre sí: si producir A cuesta poco B, producir B cuesta mucho A por construcción aritmética. En el ejemplo, 0,5 y 2,0 son inversos, igual que 1,6 y 0,625. Por eso todo país, por improductivo que sea, tiene ventaja comparativa en algo, y por eso no existen países sin nada que exportar.",
            },
            {
              q: "¿Entre qué valores debe situarse la relación de intercambio para que los dos países comercien?",
              a: "Entre 0,5 y 1,6 textil por software. Norte no vende por debajo de 0,5 porque fabricarlo él le sale más barato; Sur no compra por encima de 1,6 por la razón simétrica. Dentro del rango ambos ganan, y la posición exacta reparte la ganancia: cerca de 0,5 se la lleva Sur, cerca de 1,6 se la lleva Norte.",
            },
            {
              q: "En el gráfico, el punto de consumo queda fuera de la frontera de posibilidades. ¿Ha aumentado la capacidad productiva del país?",
              a: "No. La frontera no se ha movido: Norte sigue pudiendo producir como mucho 1.200 software o 600 textil. Lo que ha cambiado es que ya no está obligado a consumir lo que produce. Al especializarse y cambiar en el mercado internacional a una relación distinta de su coste interno, accede a combinaciones de consumo que su tecnología no alcanza. El comercio funciona aquí como una tecnología indirecta para obtener textil.",
            },
            {
              q: "Si el país en conjunto gana, ¿por qué hay oposición política al comercio?",
              a: "Porque «el país gana» significa que los ganadores podrían compensar a los perdedores, no que lo hagan. Con dos factores, Stolper-Samuelson predice que el factor escaso —el trabajo poco cualificado en una economía avanzada— pierde retribución real de forma permanente. Además la ganancia es difusa y pequeña por persona, mientras que la pérdida es concentrada y grande, lo que hace que solo un lado tenga incentivos para organizarse.",
            },
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
            { ref: "Krugman y Obstfeld, Economía internacional: teoría y política, capítulos sobre Ricardo y Heckscher-Ohlin", nota: "el tratamiento estándar, con la derivación gráfica completa y la discusión de la relación real de intercambio; el punto de partida natural." },
            { ref: "Ricardo, Principios de economía política y tributación, capítulo VII", nota: "el original de 1817, con el ejemplo del paño y el vino entre Inglaterra y Portugal; sorprendentemente breve y legible para lo que ha dado de sí." },
            { ref: "Autor, Dorn y Hanson, «The China Shock»", nota: "la evidencia sobre ajustes locales largos y costosos tras un choque comercial; es lo que obligó a la profesión a tomarse en serio la hipótesis de movilidad de factores." },
            { ref: "Rodrik, Hablemos claro sobre el comercio mundial", nota: "el argumento de que la ganancia agregada convive con reparto regresivo, escrito por un economista que no discute el modelo sino sus condiciones de aplicación." },
          ],
        },
      ],
    },
  ],
};
