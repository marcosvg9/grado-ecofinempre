/* Ficha 14.10 — Competencia, propiedad industrial y protección de datos. */

export default {
  codigo: "14.10",
  titulo: "Competencia, propiedad industrial y protección de datos",
  nivel: 3,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "El ordenamiento persigue el poder de mercado y a la vez lo concede: sanciona los cárteles y otorga monopolios de veinte años a quien inventa. No es una contradicción sino un cálculo, y entender qué se compra con cada monopolio concedido explica media estrategia empresarial.",
  requiere: "2.07 Monopolio y regulación · 9.02 Análisis del entorno",
  abre: "13.09 Activos no producidos · 9.07 Marketing estratégico",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El derecho de la competencia parte de que el poder de mercado destruye valor**, por las razones que la ficha 2.07 desarrollaba: precio por encima del coste marginal, cantidad restringida y pérdida de eficiencia. Y prohíbe tres cosas. Las **conductas colusorias**: acuerdos o prácticas concertadas que impidan, restrinjan o falseen la competencia, con el cártel de precios o de reparto de mercados como caso más grave. El **abuso de posición dominante**: no ser dominante, que es lícito, sino explotar esa posición imponiendo precios abusivos, negándose a suministrar o vendiendo por debajo de coste para expulsar rivales. Y el **falseamiento de la competencia por actos desleales** que afecten al interés público.",
            "**Conviene subrayar el matiz de la segunda prohibición porque se malinterpreta constantemente: tener una cuota altísima no es ilegal.** Se puede llegar a dominante compitiendo mejor, y el ordenamiento no lo reprocha. Lo que se sanciona es el **abuso**, y por eso a la empresa dominante se le exige una conducta más estricta que a las demás: prácticas perfectamente lícitas en un mercado competido —descuentos por fidelidad, ventas vinculadas— pueden ser abusivas cuando las hace quien no tiene contrapeso.",
            "**El control de concentraciones opera con otra lógica: es preventivo.** No sanciona una conducta pasada sino que examina una operación antes de que se ejecute, para evitar que cree una estructura de mercado que después habría que vigilar. En España la notificación es obligatoria cuando se supera **cualquiera** de dos umbrales alternativos: una **cuota conjunta igual o superior al 30 %** en un mercado, o un **volumen de negocios conjunto en España superior a 240 millones de euros con al menos dos partícipes que facturen individualmente más de 60 millones**. Basta con uno de los dos, y las cifras hay que comprobarlas porque se revisan.",
            "**El régimen sancionador es de los más severos del ordenamiento y su diseño responde a un cálculo de disuasión.** Las multas por infracciones muy graves pueden alcanzar el **10 % del volumen de negocios total mundial** del infractor, no del mercado afectado ni del negocio español. La razón es simple: un cártel que dura años y que eleva los precios un quince por ciento genera beneficios que una multa proporcionada al daño no llegaría a disuadir, sobre todo teniendo en cuenta que muchos cárteles no se detectan. Se complementa con el **programa de clemencia**, que exime de multa a quien delata primero el cártel y aporta pruebas: convierte un acuerdo secreto en un dilema del prisionero permanente, y es hoy la principal fuente de detección.",
            "**La propiedad industrial hace lo contrario que el derecho de la competencia y por la misma razón de fondo: promover la eficiencia dinámica.** Una **patente** confiere un monopolio de explotación de **veinte años improrrogables**, a cambio de que la invención se publique íntegramente. El trato es explícito: **exclusiva temporal a cambio de divulgación**. Sin patente, quien inventa guarda el secreto y el conocimiento no circula; con patente, cualquiera puede leer cómo funciona y construir sobre ello, aunque no explotarlo hasta que expire. La sociedad acepta veinte años de precio de monopolio para comprar dos cosas: el incentivo a investigar y la publicación del resultado.",
            "**La marca funciona con una lógica completamente distinta, y contrastarlas es el ejercicio más útil de esta ficha.** Una marca es un signo que distingue productos de una empresa de los de otra, y dura **diez años renovables indefinidamente**. No caduca nunca mientras se use y se renueve. La razón de esa asimetría es que **la marca no monopoliza una idea sino que identifica un origen**: no impide a nadie fabricar el mismo producto, solo impide hacerlo pasar por el de otro. Lejos de restringir la competencia, la hace posible, porque sin marcas el consumidor no podría distinguir calidades ni castigar a quien le defraudó. Entre ambas quedan el **diseño industrial**, que protege la apariencia por plazos intermedios, y el **secreto empresarial**, que dura lo que dure el secreto y no exige registro ni divulgación.",
            "**Cierra el bloque la protección de datos, que se ha convertido en una restricción operativa de primer orden para cualquier empresa.** El Reglamento europeo parte de que tratar datos personales requiere una **base de legitimación** —consentimiento, ejecución de un contrato, obligación legal, interés legítimo y alguna más— y de un conjunto de principios: limitación de finalidad, minimización, exactitud, limitación del plazo de conservación y responsabilidad proactiva. Este último invierte la carga: **no basta con cumplir, hay que poder demostrar que se cumple**, y de ahí las obligaciones de registro de actividades de tratamiento, evaluaciones de impacto, delegado de protección de datos en determinados casos y notificación de brechas de seguridad en plazos muy breves. El régimen sancionador llega a **20 millones de euros o el 4 % de la facturación mundial**, la que sea mayor: la misma técnica disuasoria del derecho de la competencia aplicada a otra materia.",
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
            { nom: "Las tres prohibiciones", sub: "El núcleo del derecho de la competencia.", cols: ["colusión · abuso de dominio · falseamiento desleal"] },
            { nom: "Lo que NO se prohíbe", sub: "Se puede llegar arriba compitiendo.", cols: ["ser dominante · solo se sanciona abusar"] },
            { nom: "Control de concentraciones", sub: "Preventivo, no sancionador.", cols: ["examina la operación antes de ejecutarla"] },
            { nom: "Umbrales alternativos", sub: "Basta con superar uno.", cols: ["cuota ≥ 30 % · o 240 M€ con dos de 60 M€"] },
            { nom: "Multa máxima por cártel", sub: "Sobre el negocio mundial, no el afectado.", cols: ["10 % del volumen de negocios total"] },
            { nom: "Programa de clemencia", sub: "Un dilema del prisionero permanente.", cols: ["exime a quien delata primero con pruebas"] },
            { nom: "Patente", sub: "Exclusiva a cambio de divulgación.", cols: ["20 años improrrogables"] },
            { nom: "Marca", sub: "Identifica origen, no monopoliza idea.", cols: ["10 años renovables sin límite"] },
            { nom: "Secreto empresarial", sub: "Sin registro y sin divulgar.", cols: ["dura lo que dure el secreto"] },
            { nom: "Principio que invierte la carga", sub: "El eje del régimen de datos.", cols: ["responsabilidad proactiva: demostrar el cumplimiento"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: umbrales, multas y plazos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Tres operaciones de concentración con datos distintos. La notificación es obligatoria si se supera **cualquiera** de los dos umbrales, y comprobarlo requiere mirar los dos por separado.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Caso", "Facturación en España", "Cuota conjunta", "¿Umbral de volumen?", "¿Umbral de cuota?", "¿Notificable?"],
          filas: [
            ["A", "300 M€ y 45 M€", "18 %", "No: B no llega a 60 M€", "No: 18 % < 30 %", "No"],
            ["B", "300 M€ y 70 M€", "18 %", "Sí: 370 M€ y ambos > 60 M€", "No", "Sí"],
            { celdas: ["C", "120 M€ y 40 M€", "34 %", "No: B no llega a 60 M€", "Sí: 34 % ≥ 30 %", "Sí"], clase: "total" },
          ],
          nota: "Los tres casos muestran que **los umbrales son alternativos y capturan cosas distintas**. El de volumen atrapa operaciones grandes en términos absolutos aunque no concentren un mercado concreto —caso B, con solo un 18 % de cuota—. El de cuota atrapa operaciones pequeñas en euros que sí concentran un mercado, que es exactamente el caso C: 160 millones conjuntos y un tercio del mercado. Sin el segundo umbral se escaparían las concentraciones en mercados locales o de nicho, que son justo donde el poder de mercado hace más daño al consumidor.",
        },
        {
          tipo: "grafico",
          alto: 370,
          ejes: { x: "Años desde el registro", y: "" },
          dominio: { x: [0, 42], y: [0, 5.2] },
          marcasX: [0, 10, 20, 25, 30, 40],
          marcasY: [],
          areas: [
            { puntos: [[0, 3.7], [0, 4.4], [20, 4.4], [20, 3.7]], color: "acento" },
            { puntos: [[0, 2.3], [0, 3.0], [25, 3.0], [25, 2.3]], color: "n3" },
            { puntos: [[0, 0.9], [0, 1.6], [10, 1.6], [10, 0.9]], color: "n2" },
            { puntos: [[10, 0.9], [10, 1.6], [20, 1.6], [20, 0.9]], color: "n2" },
            { puntos: [[20, 0.9], [20, 1.6], [30, 1.6], [30, 0.9]], color: "n2" },
            { puntos: [[30, 0.9], [30, 1.6], [40, 1.6], [40, 0.9]], color: "n2" },
          ],
          notas: [
            { x: 0.6, y: 4.7, texto: "PATENTE · 20 años improrrogables, a cambio de publicar la invención", ancla: "start" },
            { x: 21, y: 4.0, texto: "cae al dominio público", ancla: "start" },
            { x: 0.6, y: 3.3, texto: "DISEÑO INDUSTRIAL · renovable hasta un máximo", ancla: "start" },
            { x: 26, y: 2.6, texto: "expira", ancla: "start" },
            { x: 0.6, y: 1.9, texto: "MARCA · 10 años renovables indefinidamente", ancla: "start" },
            { x: 10.4, y: 1.2, texto: "renueva", ancla: "start" },
            { x: 20.4, y: 1.2, texto: "renueva", ancla: "start" },
            { x: 30.4, y: 1.2, texto: "renueva", ancla: "start" },
            { x: 0.6, y: 0.35, texto: "El secreto empresarial no aparece: no se registra y dura lo que dure.", ancla: "start" },
          ],
          nota: "La asimetría entre las dos barras superiores es **el hecho más consecuente de toda la propiedad industrial**. Una patente termina siempre: llega un día en que cualquiera puede fabricar el medicamento, y el precio se desploma. Una marca no termina nunca mientras se use y se renueve. De ahí una estrategia perfectamente reconocible: **construir marca mientras dura la patente**, para que cuando la exclusiva legal expire quede una preferencia del consumidor que ninguna norma va a caducar. El monopolio jurídico es temporal; el reconocimiento que se construye a su amparo, no.",
        },
        {
          tipo: "tabla",
          cabecera: ["Infracción", "Techo de la sanción", "Sobre qué base", "Lógica"],
          filas: [
            ["Cártel de precios o reparto de mercados", "10 % del volumen de negocios", "Total mundial del infractor", "Un cártel que dura años renta más que una multa proporcionada al daño"],
            ["Abuso de posición dominante", "10 % del volumen de negocios", "Total mundial", "Mismo razonamiento"],
            ["Ejecutar una concentración sin notificar", "Sanción específica y posible deshacer la operación", "—", "El control es preventivo: ejecutarla lo vacía de sentido"],
            { celdas: ["Infracción grave de protección de datos", "20 M€ o el 4 % de la facturación", "Mundial, la mayor de las dos", "Misma técnica disuasoria en otra materia"], clase: "total" },
          ],
          nota: "El patrón es común a las cuatro filas y conviene nombrarlo: **cuando la probabilidad de detección es baja, la sanción tiene que ser desproporcionada respecto del daño para que disuada**. Una empresa que factura 800 millones se expone a 80 millones de multa por un cártel, con independencia de cuánto ganara con él. Y el complemento necesario es elevar esa probabilidad de detección, que es lo que hace el programa de clemencia: al eximir a quien delata primero, convierte cada cártel en una carrera por confesar y hace que ningún partícipe pueda fiarse de los demás.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el ordenamiento concede los monopolios que persigue",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Es una aparente contradicción que merece resolverse despacio, porque explica una tensión real de la política económica: el mismo ordenamiento que multa con el diez por ciento de la facturación a quien pacta precios concede monopolios de veinte años a quien inventa. No es incoherencia: son dos respuestas a dos problemas distintos.",
            "**El derecho de la competencia protege la eficiencia estática**, es decir, que los recursos existentes se asignen bien hoy. En ese plano el monopolio es puro coste: precio por encima del marginal, cantidad restringida y transferencia del consumidor al productor. La ficha 2.07 lo medía con precisión.",
            "**La propiedad industrial protege la eficiencia dinámica**, es decir, que haya recursos nuevos mañana. Y aquí el razonamiento se invierte. El conocimiento tiene coste de producción alto y coste de reproducción casi nulo, de modo que en competencia perfecta **nadie invertiría en investigar**: el primer imitador vendería al coste marginal y el inventor no recuperaría lo gastado. La exclusiva temporal es el mecanismo que permite recuperar la inversión, y lo que la sociedad paga por ella es un período de precios de monopolio.",
            "**La patente compra además una segunda cosa que suele olvidarse: la divulgación.** La alternativa al sistema de patentes no es el conocimiento libre, es el **secreto**. Sin patente, quien descubre algo lo guarda, la técnica no se publica, nadie puede construir sobre ella y el conocimiento muere con la empresa. El sistema de patentes obliga a publicar la invención completa a cambio de la exclusiva, de modo que **durante los veinte años el conocimiento circula aunque la explotación no**, y después queda libre. Ese es el trato.",
            "**El equilibrio es delicado y la propia tensión aparece en los casos difíciles.** Los medicamentos son el ejemplo clásico: sin patente no habría investigación farmacéutica; con patente, hay tratamientos que no llegan a quien no puede pagarlos. De ahí las válvulas que el sistema incorpora —licencias obligatorias en situaciones de emergencia, plazos que no se prorrogan, exclusión de patentabilidad de lo que no sea invención— y de ahí que el debate sobre la duración óptima siga abierto. **Veinte años es una convención, no un resultado calculado.**",
            "**Y la marca demuestra que no todos los derechos exclusivos restringen la competencia.** Una marca no impide fabricar nada: impide hacer pasar el producto propio por el ajeno. Sin marcas, el consumidor no podría distinguir a quien cuida la calidad de quien no lo hace, y desaparecería el incentivo a cuidarla: sería un mercado de limones. **La marca perpetua es procompetitiva precisamente porque no monopoliza una idea sino que identifica un origen**, y por eso el ordenamiento puede concederla sin plazo mientras se use.",
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
            { t: "Creer que tener una cuota muy alta es ilegal", d: "No lo es: se puede llegar a dominante compitiendo mejor y el ordenamiento no lo reprocha. Lo prohibido es abusar de esa posición. Lo que sí ocurre es que a la empresa dominante se le exige una conducta más estricta, y prácticas lícitas en un mercado competido pueden ser abusivas cuando las hace quien no tiene contrapeso." },
            { t: "Comprobar solo uno de los umbrales de concentración", d: "Son alternativos y basta superar uno. El de volumen atrapa operaciones grandes en euros aunque no concentren un mercado; el de cuota atrapa operaciones pequeñas que sí lo concentran, que son las de mercados locales o de nicho, donde el poder de mercado más daña al consumidor." },
            { t: "Calcular la multa sobre el mercado afectado", d: "El techo del 10 % se aplica sobre el volumen de negocios total del infractor, no sobre el del mercado afectado ni sobre el negocio español. Es deliberado: cuando la probabilidad de detección es baja, la sanción tiene que ser desproporcionada respecto del daño para que disuada." },
            { t: "Suponer que una marca protege la idea y no solo el signo", d: "Una marca identifica el origen de un producto: no impide a nadie fabricar lo mismo, solo hacerlo pasar por el de otro. Por eso puede durar indefinidamente sin restringir la competencia, mientras que la patente, que sí monopoliza una técnica, tiene que expirar." },
            { t: "Pensar que la alternativa a la patente es el conocimiento libre", d: "La alternativa es el secreto. Sin patente, quien descubre algo lo guarda, no se publica nada y el conocimiento muere con la empresa. La patente compra dos cosas a la vez: el incentivo a investigar y la divulgación completa de la invención, que queda libre al expirar." },
            { t: "Tratar la protección de datos como un trámite de consentimientos", d: "El eje del régimen es la responsabilidad proactiva: no basta con cumplir, hay que poder demostrarlo, y de ahí el registro de actividades, las evaluaciones de impacto y la notificación de brechas en plazos muy breves. Además, el consentimiento es solo una de varias bases de legitimación, y a menudo no la más adecuada." },
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
            "Los derechos que esta ficha describe son activos, y el SEC los clasifica de una manera que refleja exactamente la asimetría jurídica entre patente y marca.",
          ],
          lista: [
            "Una **patente y el resultado de la investigación que la sustenta** son un activo producido: **productos de la propiedad intelectual (AN.117)** de la ficha 13.08. Se capitalizan y **se amortizan**, porque su vida útil es finita, y esa capitalización fue el mayor cambio metodológico del SEC 2010.",
            "Una **marca comprada** encaja en cambio entre los activos **no producidos** de la ficha 13.09: es un sobreprecio pagado por una posición en el mercado, próximo al fondo de comercio (AN.23), y no se amortiza del mismo modo porque no se agota con el uso. La asimetría contable reproduce la jurídica.",
            "Y hay un contraste que conviene retener: **una marca creada internamente no aparece en ningún balance**, mientras que la misma marca comprada sí. Es una de las mayores discrepancias entre el valor contable y el valor económico de una empresa, y explica buena parte de la diferencia entre capitalización bursátil y patrimonio neto en sectores de consumo.",
            "La ficha **2.07** aporta la medición del coste del monopolio que esta ficha da por conocida, y la ficha **9.02** el uso estratégico: las barreras de entrada del análisis de cinco fuerzas son, en buena medida, derechos de propiedad industrial y economías de escala protegidas.",
            "Y las **sanciones** de competencia y de protección de datos son, en el SEC, **transferencias corrientes diversas (D.75)** de la ficha 12.07: no son impuestos, porque no gravan renta, patrimonio, producción ni productos, sino que sancionan una conducta. Incluirlas en la presión fiscal deforma cualquier comparación.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el ordenamiento no está a favor ni en contra del poder de mercado: lo administra**. Lo persigue cuando nace de un acuerdo o de un abuso, y lo concede temporalmente cuando es el precio de que alguien invente algo. Distinguir ambos casos exige preguntarse siempre lo mismo: qué está comprando la sociedad a cambio del monopolio que tolera.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Es ilegal tener una posición dominante?", a: "No. Se puede llegar a dominante compitiendo mejor y el ordenamiento no lo reprocha; lo prohibido es abusar de esa posición. Lo que sí ocurre es que a la empresa dominante se le exige una conducta más estricta: prácticas lícitas en un mercado competido pueden ser abusivas cuando las hace quien no tiene contrapeso." },
            { q: "Dos empresas facturan 120 y 40 millones en España y tendrían un 34 % de cuota conjunta. ¿Hay que notificar la operación?", a: "Sí, por el umbral de cuota. No se cumple el de volumen, porque una de ellas no llega a 60 millones, pero los umbrales son alternativos y basta superar uno. El de cuota existe precisamente para capturar operaciones pequeñas en euros que sí concentran un mercado local o de nicho." },
            { q: "¿Por qué la multa por cártel se calcula sobre el volumen de negocios mundial?", a: "Porque cuando la probabilidad de detección es baja, la sanción tiene que ser desproporcionada respecto del daño para disuadir. Un cártel que dura años y eleva los precios genera beneficios que una multa proporcionada no compensaría. El complemento es el programa de clemencia, que eleva la probabilidad de detección." },
            { q: "¿Qué compra la sociedad a cambio del monopolio de una patente?", a: "Dos cosas: el incentivo a investigar, sin el cual nadie invertiría porque el primer imitador vendería al coste marginal; y la divulgación íntegra de la invención, que se publica desde el principio y queda libre a los veinte años. La alternativa a la patente no es el conocimiento libre, es el secreto." },
            { q: "¿Por qué una marca puede durar indefinidamente y una patente no?", a: "Porque la marca no monopoliza una idea sino que identifica un origen: no impide fabricar lo mismo, solo hacerlo pasar por el producto de otro. Lejos de restringir la competencia, la hace posible, porque sin marcas el consumidor no podría distinguir calidades ni castigar a quien le defraudó." },
            { q: "¿Cómo clasifica el SEC una patente y cómo una marca comprada?", a: "La patente y la investigación que la sustenta son un activo producido: productos de propiedad intelectual (AN.117), que se capitalizan y se amortizan porque su vida útil es finita. Una marca comprada encaja entre los activos no producidos, próxima al fondo de comercio, y no se agota con el uso. Y una marca creada internamente no aparece en ningún balance." },
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
            { ref: "Ley 15/2007 de Defensa de la Competencia", nota: "conductas prohibidas, control de concentraciones y régimen sancionador; comprobar los umbrales vigentes." },
            { ref: "CNMC, resoluciones sancionadoras y guías", nota: "los expedientes reales son la mejor forma de ver cómo se prueba un cártel y cómo funciona la clemencia." },
            { ref: "Ley 24/2015 de Patentes y Ley 17/2001 de Marcas", nota: "los dos regímenes cuya asimetría organiza esta ficha; conviene leer los artículos sobre duración uno tras otro." },
            { ref: "Reglamento (UE) 2016/679 (RGPD) y LO 3/2018", nota: "principios, bases de legitimación y régimen sancionador; los artículos 5 y 6 del reglamento son el núcleo." },
            { ref: "Tirole, The Theory of Industrial Organization", nota: "el marco económico que justifica tanto la persecución del poder de mercado como su concesión temporal." },
          ],
        },
      ],
    },
  ],
};
