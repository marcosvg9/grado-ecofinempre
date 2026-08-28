/* Ficha 11.07 — La segunda globalización, China y las cadenas de valor. */

export default {
  codigo: "11.07",
  titulo: "La segunda globalización, China y las cadenas de valor",
  nivel: 3,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Cuando el coste de coordinar a distancia se hundió, dejaron de comerciarse productos para comerciarse tareas. Eso multiplicó la ganancia del intercambio y concentró las pérdidas en lugares y oficios muy concretos, con consecuencias políticas que tardaron veinte años en aparecer.",
  requiere: "11.02 La primera globalización · 2.11 Ventaja comparativa · 11.06 El giro de los ochenta",
  abre: "11.10 Divergencia y convergencia · 10.01 Estructura productiva española · 10.09 Competitividad",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La segunda globalización tiene una fecha aproximada de arranque —los años ochenta y noventa— y una causa técnica distinta de la primera. Si aquella la hizo posible el hundimiento del **coste de transportar mercancías**, esta la hizo posible el hundimiento del **coste de coordinar a distancia**: telecomunicaciones baratas, informática, contenedores estandarizados y logística fiable. La consecuencia es un cambio de naturaleza que Baldwin resume bien: **antes se comerciaban productos, ahora se comercian tareas**.",
            "**El cambio de unidad importa mucho más de lo que parece.** En el mundo de la ficha 11.02, un país decidía si producir tela o vino y exportaba el producto terminado. En el mundo actual, la fabricación de un aparato se descompone en decenas de fases que pueden localizarse en países distintos según dónde salga más barata cada una. La ventaja comparativa de la ficha 1.01 sigue operando, pero **ya no se aplica a productos sino a fragmentos del proceso**, y eso multiplica las combinaciones posibles y la ganancia potencial del intercambio.",
            "**El acontecimiento cuantitativamente mayor fue la incorporación de China.** Las reformas iniciadas en 1978 y, sobre todo, la entrada en la Organización Mundial del Comercio en 2001 añadieron al mercado laboral mundial cientos de millones de trabajadores con salarios una fracción de los occidentales. Fue el mayor cambio en la relación entre trabajo y capital disponible a escala global de la historia moderna, y produjo lo que la teoría predice: **abarató los bienes intensivos en trabajo poco cualificado y presionó a la baja los salarios de quienes competían directamente con ellos**.",
            "**La ganancia agregada es real y la pérdida está muy concentrada**, exactamente el patrón del grano americano de la ficha 11.02. El consumidor de un país rico gana de forma difusa —cosas más baratas, un poco cada mes, sin percibirlo— mientras que el trabajador de una comarca industrial especializada pierde de forma concentrada: su fábrica cierra, su cualificación deja de valer, el valor de su vivienda cae y su comarca entera se deteriora. Los estudios sobre el llamado **choque de China** documentaron que esos efectos locales fueron mucho más persistentes de lo que la teoría del comercio suponía: no hubo reasignación rápida a otros sectores, hubo desempleo prolongado y salida de población joven.",
            "**Y aquí está la diferencia decisiva con 1880: la válvula de escape está cerrada.** Los perdedores de la primera globalización emigraron por decenas de millones, lo que alivió la presión y contribuyó a igualar salarios entre continentes. Hoy la movilidad internacional es reducida y la interna dentro de los países ricos también ha caído. **Los perdedores se quedan donde están**, y eso convierte un problema económico en un problema político con geografía, que es el origen de buena parte de la reacción proteccionista y del voto contra el statu quo de la última década.",
            "**Un matiz que suele perderse: no todo lo que se atribuye al comercio es comercio.** La automatización destruyó empleo industrial en paralelo y en algunos análisis explica una parte mayor que las importaciones. Distinguir ambos efectos es difícil porque coinciden en el tiempo, en los mismos sectores y en las mismas comarcas, y porque el comercio induce automatización. La consecuencia práctica es incómoda para todos: **cerrar la frontera no devuelve los empleos**, porque una parte importante no se fue a ningún sitio, sino que dejó de existir.",
            "**El movimiento reciente es de repliegue parcial, y conviene describirlo con cuidado.** Guerra comercial, pandemia y tensiones geopolíticas han empujado hacia la diversificación de proveedores y el acercamiento de la producción a mercados aliados. Pero **el comercio mundial no se ha hundido**: lo que cambia es su composición y su geografía, con más peso de la seguridad de suministro y menos del coste puro. La ficha 11.02 dejó una advertencia que aquí conviene repetir: la globalización no es una tendencia inevitable, y ya se deshizo una vez.",
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
            { nom: "Primer desagrupamiento", sub: "Cae el coste de mover mercancías.", cols: ["se separan producción y consumo"] },
            { nom: "Segundo desagrupamiento", sub: "Cae el coste de coordinar a distancia.", cols: ["se separan las fases de un mismo proceso"] },
            { nom: "Unidad de comercio", sub: "El cambio conceptual de la ficha.", cols: ["ya no productos, sino tareas"] },
            { nom: "Comercio bruto frente a valor añadido", sub: "El bruto cuenta varias veces lo mismo.", cols: ["exportación bruta $\\neq$ valor añadido nacional exportado"] },
            { nom: "Curva de la sonrisa", sub: "El valor está en los extremos, no en el centro.", cols: ["diseño y marca alto · ensamblaje bajo"] },
            { nom: "Ganancia difusa, pérdida concentrada", sub: "Explica la asimetría política.", cols: ["muchos ganan poco · pocos pierden mucho"] },
            { nom: "Teorema de Stolper-Samuelson", sub: "El comercio redistribuye entre factores.", cols: ["gana el factor abundante, pierde el escaso"] },
            { nom: "Ajuste local", sub: "Lo que la teoría suponía rápido y no lo fue.", cols: ["reasignación lenta, con geografía"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: qué exporta realmente el país que ensambla",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un aparato electrónico se vende al público en **500 dólares**. Se ensambla en un país asiático a partir de componentes fabricados en varios otros. El desglose del valor es aproximadamente este, y es el tipo de descomposición que hicieron célebres los estudios sobre el reparto de valor en la electrónica de consumo.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Fase", y: "Dólares" },
          dominio: { x: [0, 5], y: [0, 340] },
          marcasX: [],
          marcasY: [0, 100, 200, 300],
          areas: [
            { puntos: [[0.15, 0], [0.15, 120], [0.85, 120], [0.85, 0]], color: "n3" },
            { puntos: [[1.15, 0], [1.15, 180], [1.85, 180], [1.85, 0]], color: "n2" },
            { puntos: [[2.15, 0], [2.15, 8], [2.85, 8], [2.85, 0]], color: "alerta" },
            { puntos: [[3.15, 0], [3.15, 192], [3.85, 192], [3.85, 0]], color: "n2" },
            { puntos: [[4.15, 0], [4.15, 0], [4.85, 0], [4.85, 0]], color: "n1" },
          ],
          notas: [
            { x: 0.5, y: 133, texto: "120 $", ancla: "middle" },
            { x: 1.5, y: 193, texto: "180 $", ancla: "middle" },
            { x: 2.5, y: 21, texto: "8 $", ancla: "middle" },
            { x: 3.5, y: 205, texto: "192 $", ancla: "middle" },
            { x: 0.5, y: -22, texto: "Diseño", ancla: "middle" },
            { x: 1.5, y: -22, texto: "Componentes", ancla: "middle" },
            { x: 2.5, y: -22, texto: "Ensamblaje", ancla: "middle" },
            { x: 3.5, y: -22, texto: "Marca y venta", ancla: "middle" },
          ],
          nota: "Esta es la **curva de la sonrisa**: el valor se concentra en los extremos —diseño e ingeniería al principio, marca y distribución al final— y se hunde en el centro, que es el ensamblaje. El país que **monta** el aparato se queda con **8 dólares de 500**, el **1,6 %**. Y sin embargo, cuando ese aparato cruza su aduana, la estadística de comercio le imputa el valor bruto de la exportación, **188 dólares**, porque los componentes importados van dentro. La aportación real de ese país queda así **sobreestimada veinticuatro veces**. Ahí está el motivo de que los déficits comerciales bilaterales medidos en bruto sean tan engañosos, y de que existan las medidas de comercio en valor añadido.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe", "% del precio final"],
          filas: [
            ["Diseño, ingeniería y propiedad intelectual", "120 $", "24 %"],
            ["Componentes fabricados en terceros países", "180 $", "36 %"],
            ["Ensamblaje final", "8 $", "1,6 %"],
            ["Marca, distribución y minorista", "192 $", "38,4 %"],
            { celdas: ["Precio al público", "500 $", "100 %"], clase: "total" },
            ["Lo que registra la aduana del país ensamblador", "188 $", "37,6 %"],
          ],
          nota: "Las dos últimas filas son el problema estadístico entero. El país ensamblador **aporta 8 y exporta 188**, porque la aduana mide lo que cruza la frontera y no lo que se ha añadido dentro. Cuando ese aparato entra en otro país, contabiliza 188 dólares de déficit bilateral frente al ensamblador, cuando en realidad la mayor parte de ese valor procede de terceros. **Un arancel sobre el producto final grava a todos los eslabones de la cadena, no solo al último**, incluidas empresas del propio país que lo impone. Es la razón técnica por la que las guerras comerciales de cadenas fragmentadas hacen daño a quien las inicia.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora el reparto de las ganancias y las pérdidas, que es donde está la política.** Supongamos que la deslocalización de una fábrica abarata un producto un **10 %** para un millón de consumidores que gastan 200 € al año en él, y destruye **mil empleos** en una comarca. La ganancia agregada es de **veinte millones de euros al año**, veinte euros por consumidor: una cantidad que nadie percibe ni agradece. La pérdida es de mil personas que pierden su medio de vida, en un lugar concreto, todas a la vez y de forma visible.",
            "**Las dos cifras pueden ser compatibles con que la operación sea eficiente y con que sea políticamente insostenible.** El criterio de la ficha 1.04 diría que hay ganancia neta si los veinte millones superan la pérdida de los mil trabajadores, y probablemente la superen. Pero **la compensación que ese criterio presupone no ocurre casi nunca**: los veinte euros se quedan en el bolsillo de cada consumidor y nadie organiza la transferencia. Por eso la ficha 1.04 insistía en que la eficiencia potencial no es lo mismo que la mejora efectiva, y por eso el argumento de que «el comercio beneficia a todos» es, tal como suele enunciarse, sencillamente falso.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: qué se aprendió del choque de China",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Durante décadas la profesión sostuvo que la apertura comercial producía ganancias netas y que los perdedores se reasignaban a otros sectores en un plazo razonable. La investigación empírica sobre el efecto de las importaciones chinas en las comarcas industriales obligó a matizar la segunda mitad de esa frase, y merece verse porque es un buen ejemplo de teoría corregida por datos.",
            "**El diseño empírico fue el que hizo el hallazgo creíble.** El problema es que las importaciones y el empleo se determinan a la vez: una comarca en declive importa más porque produce menos. La estrategia consistió en usar el crecimiento de las exportaciones chinas **hacia otros países ricos** como instrumento de las importaciones estadounidenses, con el argumento de que ese crecimiento refleja la oferta china y no la demanda local. Es exactamente la lógica de la ficha 4.07, con su restricción de exclusión discutible y discutida.",
            "**El resultado fue que el ajuste no ocurrió como se suponía.** En las comarcas más expuestas, el empleo industrial cayó y **no se recuperó por otras vías**: el desempleo subió y se mantuvo, la participación laboral bajó, los salarios de los que conservaban empleo se estancaron y aumentaron las prestaciones por incapacidad. La movilidad geográfica, que la teoría suponía el mecanismo de ajuste, fue mucho menor de lo esperado. Diez años después, las comarcas afectadas seguían peor.",
            "**Eso no invalida la teoría del comercio, y conviene ser preciso.** La ganancia agregada existía y era medible; lo que falló fue el supuesto sobre la **velocidad y el coste del ajuste**, que los modelos trataban como fricción menor. Y falló también el supuesto implícito de que la compensación a los perdedores ocurriría: los programas de asistencia al ajuste comercial existían y eran pequeños, mal dirigidos y poco usados.",
            "**Las respuestas de política que se derivan no son simétricas.** El proteccionismo posterior tropieza con la aritmética del ejemplo de arriba: **un arancel sobre un producto ensamblado grava a toda la cadena**, incluidas las empresas del propio país que aportan diseño y componentes, y no devuelve los empleos porque una parte se perdió por automatización. Las alternativas —formación, apoyo a la movilidad, inversión en las comarcas afectadas, seguros salariales— son menos vistosas, más lentas y exigen dinero público sostenido, que es precisamente lo que no se puso.",
            "**La lección metodológica es la que más vale.** Una predicción teórica correcta sobre agregados —hay ganancia neta— puede convivir con un fracaso completo en el terreno donde la gente vive, si el mecanismo de ajuste que la teoría supone no funciona. Y cuando eso ocurre de forma persistente, **la reacción política acaba destruyendo el régimen que producía la ganancia**, que es exactamente lo que Polanyi describió para la primera globalización y lo que la ficha 11.02 dejó anotado.",
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
            { t: "Decir que el comercio beneficia a todos", d: "Produce ganancia agregada y pérdidas concentradas. El criterio de la ficha 1.04 exige que los ganadores puedan compensar a los perdedores, y esa compensación casi nunca se organiza: los veinte euros anuales de ahorro se quedan en el bolsillo de cada consumidor mientras mil personas pierden su medio de vida. Tal como suele enunciarse, la frase es falsa." },
            { t: "Leer los déficits bilaterales medidos en bruto", d: "La aduana registra el valor de lo que cruza la frontera, no lo que se ha añadido dentro. Un aparato de 500 dólares con 8 de ensamblaje local se anota como 188 de exportación, sobreestimando la aportación del país ensamblador veinticuatro veces. Los saldos bilaterales en bruto no miden lo que la gente cree que miden." },
            { t: "Suponer que un arancel golpea solo al país señalado", d: "En una cadena fragmentada, el producto final incorpora valor de muchos orígenes, incluido el país que impone el arancel. Gravar el producto ensamblado grava a todos los eslabones, y una parte del daño recae sobre empresas propias que aportan diseño, componentes o distribución." },
            { t: "Creer que cerrar la frontera devuelve los empleos", d: "Una parte importante del empleo industrial perdido no se fue a ningún sitio: dejó de existir por automatización. Distinguir ambos efectos es difícil porque coinciden en el tiempo y en las mismas comarcas, pero la consecuencia práctica es clara y desagradable para las dos posiciones del debate." },
            { t: "Dar por bueno el supuesto de reasignación rápida", d: "La evidencia sobre las comarcas expuestas a las importaciones chinas muestra desempleo persistente, caída de la participación laboral y salarios estancados una década después. La movilidad geográfica que la teoría suponía como mecanismo de ajuste fue mucho menor de lo esperado." },
            { t: "Comparar esta globalización con la de 1880 sin mirar la migración", d: "Los perdedores de la primera emigraron por decenas de millones y eso alivió la presión y ayudó a igualar salarios entre continentes. Hoy esa válvula está cerrada y los perdedores permanecen donde están, lo que convierte un problema económico en un problema político con geografía." },
            { t: "Confundir repliegue con fin de la globalización", d: "El comercio mundial no se ha hundido: cambia su composición y su geografía, con más peso de la seguridad de suministro y menos del coste puro. Aunque conviene recordar que la globalización no es una tendencia inevitable de la historia y que ya se deshizo por completo una vez." },
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
            "La fragmentación de la producción rompió varias medidas estadísticas que funcionaban bien cuando se comerciaban productos terminados, y obligó a construir otras nuevas.",
          ],
          lista: [
            "Las **estadísticas de comercio en valor añadido** —las bases TiVA de la OCDE y la OMC— nacen para resolver exactamente el problema del ejemplo: reparten el valor de una exportación entre los países que realmente lo generaron. Se construyen con tablas input-output internacionales enlazadas, es decir, con el modelo de Leontief de la ficha 4.01 aplicado a varios países a la vez.",
            "El indicador de **apertura comercial** de la ficha 11.02 queda distorsionado al alza por la fragmentación: un componente que cruza cinco fronteras antes de acabar en un producto se cuenta cinco veces en las exportaciones mundiales y una sola en el PIB. Comparar la apertura de 2020 con la de 1913 sin corregir eso exagera la diferencia.",
            "Los **precios de transferencia** entre filiales de una misma multinacional determinan en qué país se registra el valor añadido, y son en buena medida una decisión fiscal. Eso significa que una parte del PIB de algunas economías responde a ingeniería contable, con casos documentados de revisiones enormes del PIB de un país por reubicación de activos intangibles.",
            "La **propiedad intelectual** es el activo más difícil de localizar del sistema de cuentas, y en la curva de la sonrisa es donde está buena parte del valor. Su tratamiento en el SEC 2010 —como activo producido que se amortiza— tiene consecuencias grandes sobre dónde se contabiliza la producción y sobre las cifras de inversión.",
            "Y las **cadenas de valor** hacen que un choque en un solo eslabón se propague a todo el sistema, algo que las tablas input-output permiten cuantificar. Los cuellos de botella de 2021 fueron el ejemplo práctico: un solo componente escaso paralizó sectores enteros en países que no lo fabricaban.",
          ],
          cierre:
            "El aviso general es que **las estadísticas de comercio se diseñaron para un mundo de productos terminados** y describen mal uno de tareas. Cualquier afirmación sobre saldos bilaterales, dependencia o aportación de un país a una cadena debería hacerse en valor añadido, y casi nunca se hace.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué cambió entre la primera y la segunda globalización?", a: "La unidad de lo que se comercia. En la primera cayó el coste de mover mercancías y se separaron producción y consumo: se comerciaban productos terminados. En la segunda cayó el coste de coordinar a distancia y se separaron las fases de un mismo proceso: se comercian tareas. La ventaja comparativa sigue operando, pero sobre fragmentos del proceso en lugar de sobre productos." },
            { q: "Un aparato de 500 $ se ensambla con 8 $ de valor añadido local. ¿Qué registra la aduana?", a: "188 dólares, porque mide el valor de lo que cruza la frontera e incluye los componentes importados que van dentro. La aportación real del país ensamblador queda sobreestimada veinticuatro veces. De ahí que los déficits bilaterales medidos en bruto sean tan engañosos y que existan las medidas de comercio en valor añadido." },
            { q: "¿Por qué un arancel sobre un producto ensamblado hace daño a quien lo impone?", a: "Porque en una cadena fragmentada el producto final incorpora valor de muchos orígenes, incluidas empresas del propio país que aportan diseño, componentes o distribución. Gravar el producto final grava a todos los eslabones, no solo al último, y parte del coste recae sobre la economía que establece el arancel." },
            { q: "¿Es cierto que el comercio beneficia a todos?", a: "No tal como suele enunciarse. Produce ganancia agregada —difusa, unos veinte euros al año por consumidor en el ejemplo— y pérdidas concentradas: mil personas que pierden su medio de vida en un lugar concreto. Hay ganancia neta potencial, pero la compensación que ese criterio presupone casi nunca se organiza." },
            { q: "¿Qué corrigió la evidencia sobre el choque de China?", a: "El supuesto sobre la velocidad y el coste del ajuste. En las comarcas más expuestas el empleo industrial cayó y no se recuperó por otras vías: desempleo persistente, caída de la participación laboral y salarios estancados una década después. La ganancia agregada existía; lo que falló fue el mecanismo de reasignación que los modelos trataban como fricción menor." },
            { q: "¿Por qué la reacción política es distinta a la de 1880?", a: "Porque la válvula de escape está cerrada. Los perdedores de la primera globalización emigraron por decenas de millones, lo que alivió la presión y ayudó a converger salarios entre continentes. Hoy la movilidad internacional e incluso la interna son bajas, y los perdedores permanecen donde están, lo que da al problema una geografía y una expresión electoral." },
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
              q: "Un teléfono se importa por 500 dólares y solo 8 corresponden al ensamblaje realizado en el país exportador. ¿Cómo lo registra la aduana?",
              opciones: [
                "Por los 8 dólares de valor añadido local",
                "Por el valor de los componentes, excluyendo el margen comercial",
                "Por los 500 dólares completos, aunque casi todo ese valor se generó en otros países",
                "Depende del acuerdo comercial aplicable",
              ],
              correcta: 2,
              porque: [
                "El valor añadido es lo que interesa económicamente y no es lo que registra la estadística de aduanas.",
                "El margen comercial no es lo que distorsiona la cifra: es la totalidad de los componentes importados y reexportados.",
                "La aduana anota el valor de lo que cruza la frontera, así que los déficits bilaterales medidos en bruto atribuyen a un país un valor que en su mayoría se generó en otros.",
                "El acuerdo comercial afecta a los aranceles, no a cómo se contabiliza el valor del flujo.",
              ],
            },
            {
              q: "Se impone un arancel a un producto ensamblado en un país concreto. ¿A quién golpea?",
              opciones: [
                "A los consumidores del país importador únicamente",
                "Solo al país señalado, que es quien lo exporta",
                "Al país señalado y a sus proveedores directos",
                "También al país que impone el arancel, porque el producto final incorpora valor de muchos orígenes, incluido el suyo",
              ],
              correcta: 3,
              porque: [
                "Los consumidores lo soportan en buena medida, y no son los únicos afectados.",
                "En una cadena fragmentada, quien ensambla aporta a menudo la parte más pequeña del valor.",
                "La cadena es más larga que un escalón: incluye proveedores de proveedores repartidos por medio mundo.",
                "Gravar el producto ensamblado grava también los componentes propios que viajaron hasta allí. El arancel se cobra sobre el valor total, no sobre la parte extranjera.",
              ],
            },
            {
              q: "¿Devolvería cerrar la frontera los empleos industriales perdidos?",
              opciones: [
                "Sí: son empleos que se trasladaron a otros países",
                "Sí, aunque con un retraso de varios años",
                "No: una parte importante no se fue a ningún sitio, dejó de existir por automatización",
                "No, porque los trabajadores desplazados ya se han reciclado",
              ],
              correcta: 2,
              porque: [
                "Parte se trasladó y parte simplemente desapareció, y las dos causas actuaron a la vez.",
                "El retraso no cambia que los puestos automatizados no vuelven al cerrar una frontera.",
                "Distinguir ambos efectos es difícil porque ocurrieron simultáneamente y en los mismos sectores, y esa dificultad es la que alimenta el debate político.",
                "La evidencia sobre las comarcas expuestas muestra lo contrario: desempleo persistente y participación laboral en caída.",
              ],
            },
            {
              q: "¿Qué diferencia clave hay entre esta globalización y la de 1880 en cuanto a sus perdedores?",
              opciones: [
                "Que entonces los perdedores estaban en la industria y ahora en la agricultura",
                "Que entonces los perdedores emigraron por decenas de millones, y hoy esa válvula está cerrada",
                "Que entonces existían políticas de compensación y hoy no",
                "Que entonces las pérdidas eran menores en magnitud",
              ],
              correcta: 1,
              porque: [
                "En la primera los golpeados fueron sobre todo agricultores europeos frente al grano americano.",
                "Cincuenta y cinco millones de europeos emigraron entre 1850 y 1914: eso alivió la presión sobre los perdedores y ayudó a igualar salarios entre continentes.",
                "Las políticas de compensación son un desarrollo posterior: entonces prácticamente no existían.",
                "Las pérdidas de entonces fueron enormes; lo que difiere es la salida disponible.",
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
            { ref: "Baldwin, La gran convergencia", nota: "los dos desagrupamientos y el paso de comerciar productos a comerciar tareas; el marco conceptual de esta ficha." },
            { ref: "Autor, Dorn y Hanson, «The China Syndrome», 2013", nota: "el estudio que documentó la persistencia del ajuste local; conviene leer también sus críticas metodológicas." },
            { ref: "OCDE-OMC, base de datos TiVA", nota: "el comercio medido en valor añadido; comparar un saldo bilateral bruto con el mismo en valor añadido es muy instructivo." },
            { ref: "Rodrik, La paradoja de la globalización", nota: "el trilema político: democracia, soberanía nacional e hiperglobalización, de los que solo caben dos." },
            { ref: "Levinson, The Box", nota: "cómo el contenedor cambió la economía mundial; el mejor recordatorio de que la logística es una fuerza histórica." },
          ],
        },
      ],
    },
  ],
};
