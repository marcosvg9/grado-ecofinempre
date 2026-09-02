/* Ficha 17.08 — Impuestos Especiales y fiscalidad ambiental. */

export default {
  codigo: "17.08",
  titulo: "Impuestos Especiales y fiscalidad ambiental",
  nivel: 2,
  bloque: "Fiscalidad española",
  tiempo: "4 h",
  nucleo:
    "Estos impuestos no existen para recaudar sino para corregir: se ponen sobre consumos cuyo precio no refleja el daño que causan. De ahí su paradoja fundacional, que hay que tener siempre delante: si el impuesto cumple su función, la base desaparece, y donde más recauda es justamente donde menos está cambiando la conducta.",
  requiere: "17.05 IVA I · 10.05 Imposición óptima",
  abre: "17.09 Imposición autonómica y local · 18.04 Reglas fiscales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los **Impuestos Especiales** gravan consumos concretos —alcohol, hidrocarburos, tabaco, electricidad, carbón— además del IVA que ya soportan. Que un mismo consumo pague dos impuestos indirectos no es una duplicidad por descuido: **responden a lógicas distintas**. El IVA es general y neutral por diseño, y grava todo el consumo por igual precisamente para no distorsionar las elecciones. El Impuesto Especial es **selectivo y quiere distorsionar**: se pone donde el precio de mercado no refleja el coste real que ese consumo impone a terceros.",
            "Esa es la lógica **pigouviana** que la ficha 10.05 desarrolla en abstracto. Cuando una actividad genera una **externalidad negativa** —contaminación, congestión, coste sanitario—, quien la realiza decide mirando su coste privado, que es inferior al coste social. Un impuesto igual al **daño marginal externo** cierra la brecha y hace que el consumidor internalice lo que provoca. Su virtud teórica es notable: a diferencia de casi cualquier otro impuesto, uno pigouviano bien calibrado **mejora la eficiencia en lugar de reducirla**, porque corrige un precio que estaba mal, no uno que estaba bien.",
            "Su rasgo técnico definitorio es que son **específicos y no ad valorem**: se calculan sobre una **magnitud física** —litros de alcohol puro, mil litros de carburante, kilovatios hora, cigarrillos— y no sobre el precio. Eso los hace estables frente a las oscilaciones del mercado, que es lo que se busca en un impuesto correctivo: el daño de quemar un litro de gasóleo no depende de lo que cueste el barril. Pero tiene una contrapartida silenciosa: **la inflación los erosiona**. Un tipo fijo pierde peso relativo cada año, así que **no actualizarlos es bajarlos sin votar ninguna rebaja**, y ese es uno de los mecanismos de política fiscal más discretos que existen.",
            "Son además **monofásicos**: se devengan una sola vez en la cadena, normalmente **a la salida de fábrica o del depósito fiscal**. Hasta ese momento los productos circulan en **régimen suspensivo**, un sistema de establecimientos autorizados, documentos de circulación y garantías que permite que la mercancía se mueva y se almacene sin haber pagado todavía. La ventaja es que solo se controla a un número reducido de operadores en lugar de a millones de consumidores; la contrapartida es que el fraude se concentra ahí, y por eso el régimen es administrativamente pesado.",
            "Junto a los de fabricación existen otros dos clásicos: el **Impuesto Especial sobre Determinados Medios de Transporte**, la llamada matriculación, cuya escala se articula por emisiones de CO₂, y el **impuesto sobre las primas de seguros**. Y en la última década ha crecido una **fiscalidad ambiental** más reciente: gases fluorados, envases de plástico no reutilizables, depósito de residuos en vertedero e incineración, y varias figuras autonómicas sobre emisiones y agua. Su recaudación es modesta; su función declarada es cambiar comportamientos.",
            "Junto a los impuestos hay otro instrumento que conviene no confundir con ellos: **los mercados de permisos de emisión**, como el régimen europeo de comercio de derechos. El impuesto fija el **precio** de contaminar y deja que el mercado determine la cantidad; el mercado de permisos fija la **cantidad** y deja que el precio se forme. Bajo certidumbre son equivalentes; bajo incertidumbre no, y elegir uno u otro depende de si preocupa más acertar con el coste o con el resultado ambiental. Y aunque un permiso subastado se parezca mucho a un impuesto, **jurídicamente no lo es**, y por eso su ingreso no aparece en las mismas rúbricas.",
            "La discusión sobre estos impuestos tropieza siempre con la misma objeción y conviene tenerla resuelta: **son regresivos**. El gasto en carburante, electricidad o tabaco representa una fracción mayor de la renta de los hogares pobres que de la de los ricos, así que un tipo uniforme les pesa más. La respuesta habitual entre los economistas públicos no es renunciar al impuesto —que sigue siendo la forma eficiente de fijar el precio del daño— sino **compensar por el lado del gasto o de las transferencias**, separando el instrumento que corrige del instrumento que redistribuye. Es una aplicación directa del principio de 17.01: dónde se coloca la corrección decide a quién beneficia.",
            "Y queda la tensión de fondo, que es la más interesante y la que da sentido a toda la ficha: **la finalidad correctora y la recaudatoria se contradicen**. Un impuesto ambiental que funcione hace desaparecer su propia base. La transición eléctrica del transporte va a vaciar la recaudación por hidrocarburos, que hoy es de las mayores partidas indirectas del sistema, y ese hueco es **estructural y previsible**, no cíclico. Diseñar hoy con qué se sustituye —tarificación por uso de las infraestructuras, imposición sobre la electricidad, gravámenes por congestión— es uno de los debates abiertos de la hacienda pública española.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Rasgo", "Impuestos Especiales", "IVA"],
          filas: [
            { nom: "Alcance", sub: "Qué consumos alcanza.", cols: ["Selectivo: alcohol, tabaco, energía", "General: todo el consumo"] },
            { nom: "Finalidad", sub: "Para qué existe.", cols: ["Corregir una externalidad o desincentivar", "Recaudar sin distorsionar"] },
            { nom: "Base", sub: "Sobre qué se calcula.", cols: ["Magnitud física: litros, kWh, unidades", "Valor: precio de la operación"] },
            { nom: "Fases", sub: "Cuántas veces se paga.", cols: ["Monofásico: salida de fábrica o depósito", "Plurifásico, con deducción en cadena"] },
            { nom: "Efecto de la inflación", sub: "Qué pasa si nadie toca la norma.", cols: ["Se erosiona: no actualizar es rebajar", "Neutral: la base sube con los precios"] },
            { nom: "Relación entre ambos", sub: "No son alternativos.", cols: ["Entra en la base imponible del IVA", "Se calcula sobre un precio que ya lo incluye"] },
          ],
          nota: "La última fila enlaza con la ficha 17.05 y produce el efecto compuesto que casi nadie calcula bien: **el IVA se aplica sobre un precio que ya lleva dentro el Impuesto Especial**, de modo que la carga total no es la suma de los dos tipos.",
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
            { nom: "Impuesto específico", sub: "Sobre cantidad física, no sobre precio.", cols: ["$T = \\tau \\cdot q$"] },
            { nom: "Carga relativa y erosión", sub: "Cae sola cuando suben los precios.", cols: ["$\\dfrac{\\tau}{p}$ decrece si $p$ crece y $\\tau$ no"] },
            { nom: "Precio final con ambos impuestos", sub: "El IVA se aplica sobre el especial.", cols: ["$P = (p + \\tau)(1 + t_{IVA})$"] },
            { nom: "Tipo pigouviano óptimo", sub: "Igual al daño marginal externo.", cols: ["$\\tau^{*} = \\mathrm{DME}(q^{*})$"] },
            { nom: "Respuesta del consumo", sub: "Con elasticidad precio de la demanda.", cols: ["$\\%\\Delta q = \\varepsilon \\cdot \\%\\Delta p$"] },
            { nom: "Efecto sobre la recaudación", sub: "Sube salvo que la demanda sea muy elástica.", cols: ["$\\%\\Delta T \\approx \\%\\Delta \\tau + \\varepsilon\\,\\%\\Delta p$"] },
          ],
          nota: "Las dos últimas líneas contienen la paradoja entera. **La misma subida del tipo recauda más cuanto menos corrige**, porque una demanda rígida apenas reduce la cantidad. Recaudar mucho con un impuesto correctivo es una señal de que no está corrigiendo.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la misma subida, dos resultados opuestos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un producto cuesta **1,50 €** antes de impuestos, soporta un Impuesto Especial de **0,50 € por unidad** y un IVA del **21 %**. Primero descomponemos su precio; después subimos el tipo especial a **0,60 €** y observamos qué ocurre con dos demandas de elasticidad muy distinta, partiendo de un consumo de 100 unidades.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Descomposición del precio", "Cálculo", "Importe"],
          filas: [
            ["Precio antes de impuestos", "Lo que se lleva el productor", "1,50 €"],
            ["Impuesto Especial", "Tipo específico por unidad", "0,50 €"],
            ["Base imponible del IVA", "1,50 + 0,50", "2,00 €"],
            ["IVA", "2,00 × 21 %", "0,42 €"],
            { celdas: ["Precio de venta al público", "2,00 + 0,42", "2,42 €"], clase: "total" },
            ["Carga fiscal total", "0,50 + 0,42", "0,92 €"],
            { celdas: ["Peso de los impuestos", "0,92 / 2,42", "38,0 % del PVP"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Sube el tipo a 0,60 € (+5 % de precio)", "Demanda rígida (ε = −0,4)", "Demanda elástica (ε = −4)"],
          filas: [
            ["Variación del consumo", "−2 %", "−20 %"],
            ["Unidades vendidas", "98", "80"],
            ["Recaudación antes", "50,00 €", "50,00 €"],
            ["Recaudación después", "58,80 €", "48,00 €"],
            { celdas: ["Variación de la recaudación", "+17,6 %", "−4,0 %"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Los dos casos son el mismo impuesto y dan resultados opuestos**, y lo hacen por la única variable que no aparece en la norma: la elasticidad de la demanda. Con demanda rígida —la del tabaco, la del carburante para ir a trabajar— el impuesto **recauda un 17,6 % más y apenas reduce el consumo un 2 %**. Con demanda elástica **recauda menos y reduce el consumo una quinta parte**. Un ministro de Hacienda prefiere el primero; un ministro de Sanidad o de Transición Ecológica, el segundo. Es el mismo instrumento.",
            "De ahí la conclusión que hay que llevarse: **una recaudación alta y estable en un impuesto correctivo es una mala noticia para su finalidad declarada**. Significa que la gente sigue consumiendo lo mismo y simplemente paga más. Y de ahí también que estos impuestos generen una **dependencia presupuestaria perversa**: financian gasto permanente con una base que, si la política ambiental funciona, está condenada a encogerse.",
            "**Sobre la descomposición del precio**, obsérvese que los impuestos son el **38,0 % del PVP**, pero **el 61,3 % del precio limpio** de 1,50 €. Las dos cifras son correctas y se usan indistintamente en el debate público para decir cosas muy distintas. Y nótese el efecto compuesto: **de los 0,42 € de IVA, 0,105 € se calculan sobre el Impuesto Especial**, porque este forma parte de la base del IVA según la regla de la ficha 17.05. La carga conjunta no es 21 % más el tipo especial: es más.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el impuesto que se erosiona sin que nadie lo rebaje",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un tipo específico de **0,50 € por unidad** sobre un producto que costaba **2,00 €** representaba el **25 % del precio**. Diez años después, con una inflación acumulada del 20 %, el producto cuesta **2,40 €** y el tipo sigue siendo 0,50 €: ahora es el **20,8 %**. Nadie ha aprobado una rebaja, nadie la ha debatido en el Parlamento y ningún titular la ha recogido, pero **la carga relativa ha caído más de cuatro puntos**.",
            "**Este es el mecanismo de política fiscal más silencioso que existe, y opera en las dos direcciones.** En los impuestos específicos, la inactividad legislativa equivale a una rebaja continua. En los progresivos sobre la renta ocurre lo contrario: si la tarifa no se deflacta, la inflación empuja a los contribuyentes hacia tramos superiores y la carga sube sin que nadie vote una subida. Es la **progresividad en frío** que aparece en la ficha 17.03. En ambos casos, **no hacer nada es una decisión**, y no la decisión neutra que aparenta.",
            "**La consecuencia práctica para el impuesto correctivo es grave**, porque desconecta el tipo de aquello que justifica su existencia. Si el gravamen se puso para igualar el daño marginal externo, y ese daño se mide en euros que también se inflacionan, un tipo nominal congelado **deja de corregir en la proporción que se decidió**. El impuesto sigue existiendo y recaudando, pero ya no hace lo que decía hacer. Por eso muchos países indexan automáticamente estos tipos, y por eso las Directivas europeas fijan **mínimos** que actúan como suelo cuando la erosión avanza demasiado.",
            "**Y hay un efecto político que explica por qué persiste.** Actualizar un tipo específico exige una norma visible, atribuible y publicable en titulares; dejar que la inflación lo rebaje no exige nada y no se lo apunta nadie. Como el resultado es una rebaja, el incentivo para no actuar es fuerte y sostenido. Quien analice una serie de recaudación de Impuestos Especiales sin mirar la evolución del tipo real **confundirá una decisión con una tendencia**, que es exactamente el error que esta ficha quiere impedir.",
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
            { t: "Creer que recaudar mucho prueba que el impuesto funciona", d: "Es más bien la señal contraria. Un impuesto correctivo recauda mucho cuando la demanda es rígida, es decir, cuando la conducta no cambia. Si cumpliera su función, la base se estrecharía y la recaudación caería." },
            { t: "Pensar que el Impuesto Especial y el IVA se duplican por error", d: "Responden a lógicas distintas: el IVA es general y busca no distorsionar, el especial es selectivo y busca distorsionar. Y no se suman: el especial entra en la base del IVA, de modo que la carga conjunta es superior a la suma de los dos tipos." },
            { t: "Suponer que un tipo específico se actualiza solo", d: "No se actualiza salvo que una norma lo diga. Con inflación, un tipo fijo pierde peso relativo cada año: en el ejemplo, del 25 % al 20,8 % del precio. No actualizarlo es rebajarlo sin votar ninguna rebaja." },
            { t: "Rechazar el impuesto porque es regresivo", d: "Lo es, y el dato es correcto. Pero el argumento estándar de la hacienda pública es separar instrumentos: corregir la externalidad con el impuesto y compensar la regresividad con transferencias o gasto, en lugar de renunciar a fijar el precio del daño." },
            { t: "Confundir un impuesto con un mercado de permisos", d: "El impuesto fija el precio de contaminar y el mercado determina la cantidad; el sistema de permisos fija la cantidad y el precio se forma en el mercado. Bajo incertidumbre no son equivalentes, y jurídicamente un derecho subastado no es un tributo." },
            { t: "Olvidar el régimen suspensivo al analizar el devengo", d: "Los productos circulan entre fábricas y depósitos fiscales sin haber pagado, y el impuesto se devenga a la salida del último. Quien sitúe el devengo en la venta al consumidor no entenderá ni el calendario de la recaudación ni dónde se concentra el fraude." },
            { t: "Presupuestar como permanente una recaudación condenada a encogerse", d: "Si la política ambiental funciona, la base desaparece. La recaudación por hidrocarburos se enfrenta a un hueco estructural con la electrificación del transporte, y ese hueco es previsible, no cíclico: financiar gasto permanente con él es un problema diferido." },
            { t: "Creer que la finalidad extrafiscal exime de los principios tributarios", d: "Un impuesto ambiental sigue sujeto a la capacidad económica, la legalidad y la no confiscatoriedad del artículo 31 de la Constitución. Varias figuras autonómicas han sido anuladas precisamente por ser recaudatorias bajo una envoltura ambiental." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "D.214 y por qué los impuestos ambientales se miden en porcentaje del PIB",
          texto:
            "En el SEC estos tributos son **D.214, otros impuestos sobre los productos**, dentro de la rúbrica D.2 que estudia la ficha 13.05, y por tanto forman parte de los impuestos que separan los **precios básicos** de los **precios de mercado**. Eurostat elabora además unas **cuentas de impuestos ambientales** que clasifican por base imponible —energía, transporte, contaminación y recursos— en lugar de por el nombre que cada país le haya puesto a la figura, y ese detalle metodológico es el que hace comparable el dato: **una tasa autonómica sobre emisiones y un impuesto estatal sobre hidrocarburos van al mismo cajón**. El indicador habitual, impuestos ambientales sobre PIB, tiene sin embargo una trampa que esta ficha permite ver: **puede caer porque el impuesto ha funcionado y la base se ha reducido, o porque el tipo se ha erosionado con la inflación**, y las dos causas apuntan en direcciones opuestas. Sin mirar el tipo real y la cantidad física gravada, la ratio sola no distingue el éxito ambiental del abandono fiscal.",
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
              q: "Un producto cuesta 1,50 € antes de impuestos, soporta 0,50 € de Impuesto Especial y un IVA del 21 %. ¿Cuál es el PVP y qué peso tienen los impuestos?",
              a: "El PVP es 2,42 €: la base del IVA son 2,00 € y la cuota 0,42 €. La carga fiscal es 0,92 €, el 38,0 % del PVP y el 61,3 % del precio limpio. Además, 0,105 € de ese IVA se calculan sobre el propio Impuesto Especial, porque este forma parte de su base.",
            },
            {
              q: "El tipo sube de 0,50 a 0,60 € y el precio un 5 %. ¿Qué recaudación resulta con elasticidad −0,4 y con −4?",
              a: "Con −0,4 el consumo cae un 2 %, quedan 98 unidades y la recaudación sube a 58,80 €, un 17,6 % más. Con −4 el consumo cae un 20 %, quedan 80 unidades y la recaudación baja a 48,00 €, un 4 % menos. El mismo impuesto recauda más cuanto menos corrige.",
            },
            {
              q: "¿Por qué se dice que no actualizar un tipo específico equivale a rebajarlo?",
              a: "Porque se calcula sobre una magnitud física y no sobre el precio: con inflación, el mismo tipo nominal representa cada año una fracción menor del precio. En el ejemplo, un tipo de 0,50 € pasa del 25 % al 20,8 % del precio cuando este sube de 2,00 a 2,40 €, sin que nadie apruebe rebaja alguna.",
            },
            {
              q: "¿Qué diferencia hay entre un impuesto ambiental y un mercado de permisos de emisión?",
              a: "El impuesto fija el precio de contaminar y deja que el mercado determine la cantidad; el sistema de permisos fija la cantidad y deja que el precio se forme. Bajo certidumbre son equivalentes; bajo incertidumbre no, y la elección depende de si importa más acertar con el coste o con el resultado ambiental.",
            },
            {
              q: "Los impuestos ambientales sobre PIB caen en un país. ¿Qué puede significar?",
              a: "Dos cosas opuestas: que el impuesto ha funcionado y la base gravada se ha reducido, o que el tipo específico se ha erosionado con la inflación sin actualizarse. La ratio por sí sola no las distingue: hay que mirar el tipo real y la cantidad física gravada.",
            },
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
              q: "Un impuesto especial sobre el tabaco recauda cada año más. ¿Qué indica eso sobre su finalidad correctora?",
              opciones: [
                "Que está funcionando, porque más recaudación implica más consumidores alcanzados",
                "Nada: recaudación y corrección son magnitudes independientes entre sí",
                "Que el tipo está por debajo del daño marginal externo y debe reducirse",
                "Que la demanda es rígida y el consumo apenas cambia: recauda mucho porque corrige poco",],
              correcta: 3,
              porque: [
                "Más recaudación no significa más gente alcanzada, sino la misma gente pagando más por el mismo consumo.",
                "Están ligadas justamente por la elasticidad: la recaudación crece cuanto menos responde la cantidad.",
                "Que el tipo sea insuficiente llevaría a subirlo, no a reducirlo, y en todo caso no se deduce de la recaudación.",
                "Si el impuesto cumpliera su función, la base se estrecharía y la recaudación tendería a caer.",],
            },
            {
              q: "Un tipo específico de 0,50 € grava un producto que pasa de 2,00 a 2,40 € por inflación. ¿Qué ha ocurrido con la carga?",
              opciones: [
                "Ha caído del 25 % al 20,8 % del precio sin que nadie aprobara una rebaja",
                "Ha subido, porque el impuesto acompaña al precio",
                "No ha cambiado, porque el tipo sigue siendo el mismo",
                "Ha caído solo si la ley preveía una cláusula de actualización automática",],
              correcta: 0,
              porque: [
                "La inactividad legislativa opera aquí como una rebaja continua, y por eso muchos países indexan estos tipos.",
                "El tipo específico no acompaña al precio: esa es precisamente la diferencia con uno ad valorem.",
                "El tipo nominal es el mismo, pero la carga relevante es la relativa al precio, y esa sí ha cambiado.",
                "Es al revés: si hubiera cláusula de actualización, la carga se habría mantenido en vez de caer.",],
            },
            {
              q: "¿Qué relación hay entre el Impuesto Especial y el IVA sobre un mismo producto?",
              opciones: [
                "El Impuesto Especial forma parte de la base imponible del IVA, así que la carga conjunta supera la suma de tipos",
                "Se aplican sobre la misma base y sus tipos simplemente se suman",
                "Son alternativos: si se aplica uno no se aplica el otro",
                "El IVA se aplica primero y el Impuesto Especial sobre el resultado",],
              correcta: 0,
              porque: [
                "En el ejemplo, 0,105 € de los 0,42 € de IVA se calculan sobre el propio Impuesto Especial.",
                "No comparten base: la del IVA incluye al Impuesto Especial, de modo que sumar los tipos subestima la carga.",
                "Se acumulan sobre el mismo consumo porque responden a finalidades distintas: recaudar sin distorsionar y distorsionar a propósito.",
                "El orden es el contrario, y por eso aparece el efecto compuesto que hace que los tipos no sean aditivos.",],
            },
            {
              q: "¿Cuál es el argumento habitual de la hacienda pública ante la regresividad de estos impuestos?",
              opciones: [
                "Negarla: al gravar consumos concretos afectan sobre todo a las rentas altas",
                "Eliminar el impuesto y sustituirlo por regulación directa de las cantidades",
                "Mantener el impuesto, que fija el precio del daño, y compensar por el lado del gasto o las transferencias",
                "Aplicar tipos reducidos a los hogares de renta baja para neutralizarla",],
              correcta: 2,
              porque: [
                "La regresividad es real: estos consumos pesan más en la renta de los hogares pobres.",
                "La regulación por cantidades es otra herramienta con sus propios costes, no la respuesta estándar a la regresividad.",
                "Es la separación de instrumentos: uno corrige la externalidad y otro redistribuye, sin pedirle a ninguno que haga las dos cosas.",
                "Un tipo diferenciado por renta destruiría la señal de precio, que es justamente lo que hace útil al impuesto.",],
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
            { t: "Ley 38/1992 de Impuestos Especiales", d: "El régimen suspensivo y los establecimientos autorizados en los artículos 4 a 19, que es la parte que explica dónde se devenga y por qué el control se concentra en pocos operadores. Los impuestos de fabricación, en los títulos siguientes." },
            { t: "Directiva 2003/96/CE y Directiva 2020/262", d: "Los niveles mínimos de imposición sobre la energía y el régimen general de los Impuestos Especiales armonizados. Los mínimos europeos son el suelo que frena la erosión inflacionaria de los tipos nacionales." },
            { t: "Eurostat, Environmental tax statistics", d: "Clasifica por base imponible —energía, transporte, contaminación, recursos— y no por el nombre de cada figura, que es lo que hace comparables los datos entre países. La fuente del indicador que la ficha aprende a leer con cautela." },
            { t: "Airef y Comisión de expertos para la reforma fiscal, informes sobre fiscalidad medioambiental", d: "Cuantifican la brecha española respecto de la media europea y estiman el hueco recaudatorio que abre la electrificación del transporte, con las alternativas de tarificación por uso que se están discutiendo." },
          ],
        },
      ],
    },
  ],
};
