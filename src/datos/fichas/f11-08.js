/* Ficha 11.08 — Crisis financieras: el patrón que se repite. */

export default {
  codigo: "11.08",
  titulo: "Crisis financieras: el patrón que se repite",
  nivel: 3,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Auge del crédito, una garantía que se revaloriza sola, apalancamiento creciente y una sorpresa. El guion es el mismo desde hace siglos, y lo único que cambia entre episodios es el activo de moda y el argumento por el que esta vez sería distinto.",
  requiere: "11.04 La Gran Depresión · 8.01 Sistema financiero · 3.07 Deuda y sostenibilidad",
  abre: "11.09 España · 8.10 Gestión de riesgos · 10.06 SEC 2010",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las crisis financieras son lo bastante frecuentes y lo bastante parecidas entre sí como para hablar de un patrón. Reinhart y Rogoff recorrieron ocho siglos de datos y encontraron la misma secuencia una y otra vez, con la particularidad de que **en cada episodio los contemporáneos creyeron que el suyo era distinto**, y siempre por una razón plausible: una tecnología nueva, un marco regulatorio mejor, una política monetaria más sabia o unos mercados más profundos.",
            "**La fase de auge tiene un motor identificable: una garantía que se revaloriza.** Cuando el precio de un activo que sirve de aval —vivienda, tierra, acciones— sube, el prestatario puede pedir más contra el mismo bien, y ese crédito adicional financia más compras del mismo activo, que sube más. Es un bucle que se alimenta solo y que **durante años produce datos excelentes**: crecimiento, empleo, recaudación y beneficios bancarios. Nada en las cifras corrientes avisa de que la solvencia del sistema se está deteriorando, porque la solvencia depende de un precio que sigue subiendo.",
            "**El apalancamiento es lo que convierte una corrección en un colapso**, y su aritmética es implacable. Un banco financia sus activos con una fracción muy pequeña de capital propio; el resto es deuda. Si el capital es el 3 % del activo, basta con que el valor de los activos caiga un 3 % para **borrar todo el capital**. Y el mecanismo es simétrico en el auge: con ese apalancamiento, una subida del 1 % de los activos multiplica por treinta y tres la rentabilidad sobre recursos propios, lo que explica por qué la presión competitiva empuja a todos los bancos hacia el mismo sitio.",
            "**La liquidez es el segundo mecanismo y actúa más deprisa que la solvencia.** Un banco solvente pero con activos a largo plazo financiados a corto puede quebrar si sus acreedores dejan de renovar a la vez. Es la transformación de plazos, la función esencial de la banca y también su fragilidad congénita. Y no requiere ningún error: **el equilibrio en el que todos retiran es tan racional individualmente como aquel en que nadie lo hace**, y por eso existen el seguro de depósitos y el prestamista de última instancia, que son los dispositivos que eliminan el equilibrio malo.",
            "**En la fase de caída aparece el desapalancamiento colectivo, que es donde la lógica individual se vuelve contra el conjunto.** Cada entidad hace lo sensato —vender activos para reducir deuda— y el resultado agregado es que los precios caen, lo que reduce más el capital de todos y obliga a vender más. La deflación por deuda de la ficha 11.04 aplicada a balances financieros. **Cuanto más racionalmente actúa cada uno, peor va el conjunto**, y ninguna entidad puede parar unilateralmente.",
            "**Las consecuencias documentadas de una crisis financiera son peores que las de una recesión ordinaria y conviene tenerlas presentes.** Las caídas son más profundas y, sobre todo, mucho más largas: el empleo tarda años en recuperarse y a menudo el producto no regresa nunca a su tendencia anterior. La deuda pública crece de forma considerable, y lo interesante es que **la mayor parte no viene del rescate bancario sino de la caída de la recaudación y del aumento del gasto** que produce la recesión. Esa distinción se ignora sistemáticamente en el debate público.",
            "**Y hay un problema de incentivos que ninguna reforma ha resuelto del todo.** Si el Estado rescata, evita el colapso pero enseña que las pérdidas se socializan, lo que anima a asumir más riesgo la próxima vez: es el riesgo moral de la ficha 2.10 a escala sistémica. Si no rescata, la caída puede llevarse por delante el sistema de pagos y el crédito de toda la economía, castigando a quien no participó en nada. **No hay una opción buena en el momento de la crisis**; solo hay decisiones anteriores —capital suficiente, supervisión, límites al apalancamiento— que hacen menos probable llegar a ese punto.",
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
            { nom: "Apalancamiento", sub: "Cuántas veces el activo supera al capital.", cols: ["L = Activo ÷ Capital"] },
            { nom: "Umbral de insolvencia", sub: "Una caída igual al ratio de capital lo borra.", cols: ["ΔActivo ÷ Activo = −Capital ÷ Activo ⟹ capital = 0"] },
            { nom: "Amplificación", sub: "Vale en los dos sentidos, y por eso atrae.", cols: ["Δ% capital = L · Δ% activo"] },
            { nom: "Bucle de la garantía", sub: "El motor del auge.", cols: ["↑precio ⟹ ↑crédito ⟹ ↑demanda ⟹ ↑precio"] },
            { nom: "Transformación de plazos", sub: "La fragilidad es congénita, no un error.", cols: ["activos a largo financiados a corto"] },
            { nom: "Equilibrios múltiples", sub: "Retirar es racional si los demás retiran.", cols: ["pánico y no pánico son ambos equilibrios"] },
            { nom: "Desapalancamiento colectivo", sub: "Lo sensato para uno, ruinoso para todos.", cols: ["ventas forzadas ⟹ ↓precios ⟹ ↓capital ⟹ más ventas"] },
            { nom: "Origen de la deuda pública", sub: "El rescate suele ser la parte menor.", cols: ["↓recaudación + ↑gasto > coste del rescate"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la aritmética del apalancamiento",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un banco tiene **100** de activos financiados con **3** de capital propio y **97** de deuda. Es un apalancamiento de **33 veces**, que no es una cifra inventada: era el orden de magnitud de varias entidades de inversión en 2007. Veamos qué significa en los dos sentidos.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Caída activos %", y: "Capital %" },
          dominio: { x: [0, 16], y: [-120, 110] },
          marcasX: [0, 3, 8, 12, 16],
          marcasY: [-100, -50, 0, 50, 100],
          series: [
            {
              nombre: "Capital 3 %",
              color: "alerta",
              grosor: 2.6,
              etiquetaEn: [4.5, -55],
              puntos: [[0, 100], [1, 66.7], [2, 33.3], [3, 0], [4, -33.3], [5, -66.7], [6, -100]],
            },
            {
              nombre: "Capital 8 %",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [16, -100],
              puntos: [[0, 100], [2, 75], [4, 50], [6, 25], [8, 0], [10, -25], [12, -50], [14, -75], [16, -100]],
            },
            {
              nombre: "Capital 15 %",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2.2,
              etiquetaEn: [16, 6.7],
              puntos: [[0, 100], [4, 73.3], [8, 46.7], [12, 20], [15, 0], [16, -6.7]],
            },
            { nombre: "", color: "tinta", grosor: 1.2, puntos: [[0, 0], [16, 0]] },
          ],
          puntos: [
            { x: 3, y: 0, etiqueta: "quiebra", guias: false },
            { x: 8, y: 0, guias: false },
            { x: 15, y: 0, guias: false },
          ],
          nota: "Las tres rectas miden **qué queda del capital** cuando caen los activos. Con un 3 % de capital, una caída del **3 %** en el valor de los activos lo borra por completo: el banco es insolvente ante lo que en cualquier otro contexto sería una corrección menor. Con el 8 % de Basilea II hace falta una caída del 8 %, y con un 15 % conservador, del 15 %. La pendiente de cada recta es el apalancamiento, y **funciona igual hacia arriba**: eso es lo que hace tan atractivo operar con poco capital, y lo que empuja competitivamente a todo el sector hacia el mismo extremo. Ahí está el argumento de fondo de la regulación: **el nivel de capital que maximiza la rentabilidad privada no es el que hace seguro al sistema**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Capital sobre activos", "Apalancamiento", "Caída que borra el capital", "Efecto de una caída del 1 %"],
          filas: [
            ["3 % — banca de inversión de 2007", "×33,3", "3 %", "El capital cae un 33 %"],
            ["8 % — requisito de Basilea II", "×12,5", "8 %", "El capital cae un 12,5 %"],
            { celdas: ["15 % — estructura conservadora", "×6,7", "15 %", "El capital cae un 6,7 %"], clase: "total" },
          ],
          nota: "La última columna explica por qué el apalancamiento es adictivo: **una variación del 1 % en los activos mueve el capital un 33 %** en el primer caso. En años buenos eso produce rentabilidades sobre recursos propios espectaculares, y la entidad que se mantenga prudente parecerá mediocre frente a sus competidoras durante años seguidos. La prudencia tiene un coste visible e inmediato y un beneficio invisible y remoto, que es la razón por la que rara vez sobrevive a la presión competitiva sin una norma que la imponga a todos a la vez.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora el bucle de la garantía, que es lo que infla la burbuja.** Una vivienda vale 200.000 € y se financia con un préstamo del 80 %, es decir, 160.000. Si el precio sube un 25 % hasta 250.000, el mismo inmueble admite ahora un préstamo de 200.000: **han aparecido 40.000 € de capacidad de endeudamiento sin que nadie haya ahorrado nada**. Ese crédito nuevo financia más compras, que empujan el precio otra vez, y el ciclo se repite. El proceso es indistinguible de una mejora genuina mientras dura, porque todos los indicadores corrientes —empleo, recaudación, morosidad— salen bien.",
            "**La reversión es simétrica y más rápida.** Si el precio cae de 250.000 a 200.000, el préstamo de 200.000 iguala al valor del inmueble y la garantía deja de cubrir. Quien necesite refinanciar no puede, quien tenga que vender lo hace por debajo, y esas ventas empujan el precio más abajo. **Lo que en el auge creaba solvencia de la nada, en la caída la destruye del mismo modo**, y ahí es donde el desapalancamiento colectivo entra en escena: cada uno vende para protegerse y el conjunto se hunde más deprisa.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: las señales que se ignoraron y por qué",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Lo llamativo de las crisis financieras no es que sean impredecibles, sino que **los indicadores que las anuncian son conocidos, públicos y estaban parpadeando**. Merece la pena repasar cuáles son y por qué se ignoran, porque el mecanismo por el que se ignoran es más interesante que los indicadores mismos.",
            "**El indicador con mejor historial es la brecha del crédito sobre el PIB**, es decir, cuánto se desvía la relación entre crédito y producto de su tendencia de largo plazo. Un crecimiento del crédito muy por encima del producto durante varios años es la señal de alarma más fiable que se conoce, y precedió a la práctica totalidad de las crisis bancarias documentadas. A ella se suman el precio real de la vivienda, el déficit exterior y la proporción de financiación mayorista a corto plazo en los balances bancarios.",
            "**La primera razón por la que se ignoran es que los datos corrientes contradicen la alarma.** Durante el auge, el crecimiento es alto, el paro baja, la recaudación se dispara, los bancos declaran beneficios récord y la morosidad está en mínimos —lógicamente: nadie impaga cuando puede refinanciar contra una garantía que sube—. Un supervisor que exija frenar en ese momento tiene delante una batería de indicadores excelentes y una teoría abstracta a favor, y enfrente a todo el sector, al gobierno y a la opinión pública.",
            "**La segunda es la asimetría de incentivos, que es demoledora.** Si se actúa a tiempo, la crisis no ocurre y nadie puede demostrar que iba a ocurrir: el supervisor solo cosecha el coste político de haber frenado una expansión. Si no se actúa, el desastre llega pero con retraso, cuando ya hay otros responsables y la culpa se reparte. **El coste de acertar es cierto e inmediato; el de equivocarse, incierto y diferido.** Cualquier persona racional en ese puesto tiende a esperar.",
            "**La tercera es que siempre hay un argumento serio por el que esta vez es distinto.** En los años dos mil fue la titulización: repartir el riesgo entre muchos inversores lo hacía más seguro, lo cual era cierto para cada cartera individual y falso para el sistema, porque la correlación entre impagos crecía justo cuando importaba. Ese argumento lo defendía gente competente con modelos razonables. **No hace falta estupidez ni mala fe para que el sistema falle**, y suponer que sí la hace falta es la mejor garantía de repetirlo.",
            "**La respuesta regulatoria posterior fue precisamente a estos tres problemas.** Colchones de capital **anticíclicos** que se acumulan en el auge de forma automática, para que la decisión no dependa del criterio de alguien en el peor momento. Ratios de apalancamiento que no dependen de la ponderación por riesgo de los propios modelos del banco. Pruebas de resistencia públicas. Y órganos macroprudenciales con mandato explícito de mirar el sistema y no cada entidad. Queda por ver si sobreviven al próximo auge, porque **la presión para relajar la regulación es máxima justo cuando la memoria del último desastre se ha desvanecido y los datos corrientes vuelven a ser magníficos**.",
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
            { t: "Creer que las crisis financieras son impredecibles", d: "Los indicadores que las anuncian son conocidos y públicos: brecha del crédito sobre PIB, precio real de la vivienda, déficit exterior y peso de la financiación mayorista a corto. Lo difícil no es verlas venir, sino actuar cuando todos los datos corrientes son excelentes y frenar tiene un coste político inmediato." },
            { t: "Juzgar la solidez de un banco por su morosidad en el auge", d: "Nadie impaga mientras puede refinanciar contra una garantía que se revaloriza. La morosidad baja del auge no mide solvencia, mide que el precio del activo sigue subiendo. Es un indicador retrasado que se vuelve informativo justo cuando ya no sirve para prevenir nada." },
            { t: "Tratar el apalancamiento como una decisión sensata de cada entidad", d: "Con un 3 % de capital, una subida del 1 % en los activos eleva la rentabilidad sobre recursos propios un 33 %, y la entidad prudente parece mediocre durante años. El nivel de capital que maximiza la rentabilidad privada no es el que hace seguro al sistema, y por eso la prudencia no sobrevive sin una norma que la imponga a todos a la vez." },
            { t: "Confundir un problema de liquidez con uno de solvencia", d: "Un banco solvente con activos a largo financiados a corto puede quebrar si sus acreedores dejan de renovar simultáneamente, sin que haya cometido ningún error. Retirar es racional si los demás retiran: hay dos equilibrios, y el seguro de depósitos y el prestamista de última instancia existen para eliminar el malo." },
            { t: "Atribuir el aumento de la deuda pública al rescate bancario", d: "La mayor parte procede de la caída de la recaudación y del aumento del gasto que produce la recesión, no del coste directo del rescate. La distinción se ignora sistemáticamente en el debate público, y cambia por completo el diagnóstico de qué hay que corregir." },
            { t: "Suponer que hace falta estupidez o mala fe", d: "El argumento de que la titulización repartía el riesgo y lo hacía más seguro era cierto para cada cartera individual y lo defendía gente competente con modelos razonables. Falló porque la correlación entre impagos crecía justo cuando importaba. Buscar culpables individuales impide ver el fallo sistémico y garantiza repetirlo." },
            { t: "Creer que la regulación posterior resuelve el problema de forma definitiva", d: "Los colchones anticíclicos y las ratios de apalancamiento atacan bien los mecanismos conocidos, pero la presión para relajarlos es máxima justo cuando la memoria del último desastre se desvanece y los datos corrientes vuelven a ser magníficos. La regulación financiera es una tarea recurrente, no un problema que se cierra." },
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
            "Las crisis financieras son el fenómeno que peor capta el sistema de cuentas, y entender por qué es una lección sobre sus límites.",
          ],
          lista: [
            "Las **cuentas financieras** de la ficha 10.06 son el lugar donde se ve venir el problema: registran el saldo vivo de activos y pasivos de cada sector y por tanto el crecimiento del endeudamiento de hogares y empresas. Son el instrumento adecuado y se publican con retraso y sin apenas atención pública, mientras el PIB trimestral acapara los titulares.",
            "El **PIB no registra las revalorizaciones de activos**, y eso es correcto por diseño: que suba el precio de la vivienda existente no es producción. Pero significa que **un auge de balances puede ser invisible en las cuentas corrientes** hasta que estalla. Los indicadores de flujo van bien mientras el problema se acumula en los stocks.",
            "Los **balances por sectores** —el activo y el pasivo, no solo los flujos del año— son la parte del sistema que permite ver acumulación de riesgo, y son también la más incompleta y la de publicación más tardía en casi todos los países. Es exactamente la información que haría falta antes, disponible después.",
            "El **rescate bancario** tiene un tratamiento contable que sorprende: una inyección de capital que se espera recuperar es una operación financiera y no computa como gasto ni aumenta el déficit; solo lo hace cuando se reconoce la pérdida. De ahí que el impacto de un rescate sobre el déficit aparezca años más tarde, en la revisión de la ficha 10.10, y que las cifras iniciales sean sistemáticamente optimistas.",
            "Y las **garantías públicas al sistema financiero** son pasivos contingentes que no computan como deuda salvo que se ejecuten, con el problema de perímetro que la ficha 10.06 describía. Un Estado puede tener un riesgo enorme comprometido y una cifra de deuda tranquilizadora.",
          ],
          cierre:
            "La conclusión es que **el sistema de cuentas mide muy bien los flujos y bastante peor los stocks**, y las crisis financieras se gestan en los stocks. Vigilar una economía solo con el PIB y el déficit es mirar exactamente donde el problema no está hasta que ya es tarde.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un banco tiene 3 de capital y 100 de activos. ¿Qué caída lo deja insolvente?", a: "Una del 3 %, porque el capital es exactamente esa fracción del activo. Es un apalancamiento de 33 veces, el orden de magnitud de varias entidades de inversión en 2007, y significa que una corrección que en cualquier otro contexto sería menor borra todos los recursos propios. Con un 8 % de capital haría falta una caída del 8 %." },
            { q: "¿Por qué la presión competitiva empuja a todos los bancos hacia el mismo apalancamiento?", a: "Porque la amplificación funciona en los dos sentidos: con un 3 % de capital, una subida del 1 % de los activos eleva la rentabilidad sobre recursos propios un 33 %. La entidad prudente parece mediocre durante años seguidos. La prudencia tiene coste inmediato y beneficio remoto, y por eso no sobrevive sin una norma que la imponga a todos a la vez." },
            { q: "¿Cómo crea solvencia de la nada una garantía que se revaloriza?", a: "Una vivienda de 200.000 € financiada al 80 % admite 160.000 de préstamo; si sube a 250.000, admite 200.000. Han aparecido 40.000 € de capacidad de endeudamiento sin que nadie haya ahorrado nada, y ese crédito financia más compras que empujan el precio otra vez. En la caída el mecanismo funciona igual de rápido en sentido contrario." },
            { q: "¿Por qué la morosidad baja no es señal de solidez durante un auge?", a: "Porque nadie impaga mientras puede refinanciar contra una garantía que se revaloriza. La morosidad mide que el precio del activo sigue subiendo, no la calidad del crédito concedido, y se vuelve informativa justo cuando ya no sirve para prevenir nada." },
            { q: "¿De dónde viene la mayor parte del aumento de la deuda pública tras una crisis financiera?", a: "De la caída de la recaudación y del aumento del gasto que produce la recesión, no del coste directo del rescate bancario. Es una distinción que el debate público ignora sistemáticamente y que cambia por completo el diagnóstico sobre qué hay que corregir después." },
            { q: "¿Por qué el sistema de cuentas nacionales ve mal las crisis financieras?", a: "Porque mide muy bien los flujos y bastante peor los stocks, y las crisis se gestan en los stocks. El PIB no registra revalorizaciones de activos, lo cual es correcto por diseño, así que un auge de balances puede ser invisible en las cuentas corrientes hasta que estalla. Las cuentas financieras sí lo verían, y se publican tarde y sin atención." },
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
            { ref: "Reinhart y Rogoff, Esta vez es distinto", nota: "ocho siglos de crisis financieras y el patrón común; conviene leerlo sabiendo las críticas metodológicas a su capítulo sobre deuda y crecimiento." },
            { ref: "Kindleberger y Aliber, Manías, pánicos y cracs", nota: "la anatomía clásica de una burbuja, con el marco de Minsky y ejemplos desde los tulipanes." },
            { ref: "Minsky, Stabilizing an Unstable Economy", nota: "por qué la estabilidad prolongada genera las condiciones de la inestabilidad; la hipótesis que mejor describe el auge." },
            { ref: "Schularick y Taylor, «Credit Booms Gone Bust», 2012", nota: "la evidencia cuantitativa de que la brecha del crédito es el mejor predictor disponible de crisis bancarias." },
            { ref: "Diamond y Dybvig, «Bank Runs, Deposit Insurance and Liquidity», 1983", nota: "el modelo de los equilibrios múltiples: por qué un banco sano puede caer y por qué existe el seguro de depósitos." },
          ],
        },
      ],
    },
  ],
};
