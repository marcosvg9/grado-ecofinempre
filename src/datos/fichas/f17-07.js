/* Ficha 17.07 — Impuesto sobre la Renta de no Residentes. */

export default {
  codigo: "17.07",
  titulo: "Impuesto sobre la Renta de no Residentes",
  nivel: 3,
  bloque: "Fiscalidad española",
  tiempo: "5 h",
  nucleo:
    "La residencia decide si un Estado grava tu renta mundial o solo lo que obtienes dentro de sus fronteras, y es una condición de todo o nada que no se parte por meses. Los convenios no eliminan la doble imposición: reparten la potestad y ponen un techo, y todo lo que se retiene por encima de ese techo se pierde si no se reclama donde se retuvo.",
  requiere: "17.02 IRPF I · 17.04 Impuesto sobre Sociedades",
  abre: "17.10 Armonización fiscal en la UE",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo sistema fiscal tiene que responder a una pregunta previa a cualquier otra: **¿sobre qué renta manda este Estado?** Las dos respuestas posibles se combinan en casi todos los países. El **criterio de residencia** somete al residente por su **renta mundial**, la obtenga donde la obtenga. El **criterio de la fuente** somete al no residente solo por lo que obtiene **en el territorio**. El IRPF aplica el primero, el Impuesto sobre la Renta de no Residentes aplica el segundo, y entre los dos cubren a cualquier persona que tenga algo que ver con España.",
            "Como todos los países hacen lo mismo, la **doble imposición internacional está garantizada de origen**: la misma renta es mundial para el país de residencia y de fuente para el país donde se genera. No es un fallo, es la consecuencia aritmética de que dos soberanías apliquen a la vez criterios distintos. Todo el derecho fiscal internacional es el intento de resolver ese solapamiento, y sus dos herramientas son los **convenios de doble imposición** y los **métodos unilaterales de corrección**.",
            "**Ser residente en España** se determina por tres vías alternativas, y basta una. La **permanencia** de más de 183 días en el año natural, computando las **ausencias esporádicas** salvo que se acredite residencia fiscal en otro país con un certificado de sus autoridades. El **núcleo principal de intereses económicos**, directa o indirectamente. Y una **presunción** que admite prueba en contrario: que residan habitualmente en España el cónyuge no separado y los hijos menores dependientes. Además, quien traslade su residencia a un **territorio calificado como paraíso fiscal** sigue tributando como residente el año del cambio y los cuatro siguientes.",
            "Dos precisiones que se pasan por alto y son decisivas. La primera: **la residencia no se parte**. El período impositivo es el año natural y se es residente o no residente **todo el año**, sin prorrateo, salvo el caso de fallecimiento. Quien se traslada en septiembre no es medio residente: es residente por el año entero, o no lo es en absoluto. La segunda: **la nacionalidad no interviene**. Un español puede ser no residente y un extranjero puede ser residente desde su primer año.",
            "Determinado que alguien es no residente, el IRNR se bifurca en dos regímenes tan distintos que casi son dos impuestos. Con **establecimiento permanente** —una sede de dirección, una sucursal, una obra de duración superior a doce meses, un agente dependiente con poderes— se tributa **por la renta neta**, con las reglas del Impuesto sobre Sociedades: ingresos menos gastos, al tipo general. Sin establecimiento permanente se tributa **operación por operación, sobre el importe íntegro y sin deducir gastos**, mediante retención practicada por el pagador español.",
            "**La diferencia entre ambos regímenes es enorme**, y por eso el concepto de establecimiento permanente es el campo de batalla clásico de la fiscalidad internacional: define la frontera entre tributar sobre el margen y tributar sobre la facturación. Los residentes en la Unión Europea y el Espacio Económico Europeo tienen aquí un régimen intermedio impuesto por la jurisprudencia del Tribunal de Justicia: pueden **deducir los gastos directamente relacionados** y aplican un tipo inferior, porque tratarlos peor que a un residente vulneraría las libertades del mercado interior.",
            "Los **convenios de doble imposición** —España tiene cerca de un centenar, casi todos siguiendo el modelo de la OCDE— hacen dos cosas y **ninguna de ellas es crear impuestos**. Primero, **reparten la potestad**: hay rentas que solo puede gravar el Estado de residencia y otras que pueden gravar los dos. Segundo, cuando ambos pueden, **limitan el tipo que puede aplicar el Estado de la fuente**: típicamente un 5 % o un 15 % en dividendos, un 10 % en intereses, cero o poco en cánones. Un convenio nunca hace que se pague más de lo que dice la ley interna; solo puede rebajar.",
            "Queda entonces la corrección del residuo, que corresponde al **Estado de residencia** y admite dos métodos. La **exención** deja fuera la renta ya gravada en el extranjero. La **imputación** —el sistema español— incluye la renta mundial, calcula la cuota y después deduce el impuesto pagado fuera, pero **con un límite: nunca más de lo que esa renta habría pagado en España**. Ese límite es la clave práctica de la ficha, porque significa que **el exceso de retención extranjera no lo devuelve España**: solo puede reclamarse al país que lo retuvo, con su procedimiento, sus plazos y su idioma.",
            "Por último, España mantiene un **régimen especial para trabajadores desplazados**, el llamado régimen de impatriados, que permite a quien adquiere la residencia por un traslado laboral **tributar por el IRNR durante varios años** —es decir, solo por la renta española y a un tipo fijo— pese a ser residente. Es un incentivo deliberado para atraer talento y capital, y también un buen ejemplo de que la frontera residencia-fuente es menos una realidad natural que una decisión de política fiscal.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Situación", "Qué se grava", "Cómo"],
          filas: [
            { nom: "Residente", sub: "183 días, intereses económicos o presunción familiar.", cols: ["Renta mundial", "IRPF, con deducción por doble imposición limitada"] },
            { nom: "No residente con EP", sub: "Sucursal, obra larga, agente dependiente.", cols: ["Renta del establecimiento", "Renta neta, reglas del Impuesto sobre Sociedades"] },
            { nom: "No residente sin EP", sub: "El régimen general del IRNR.", cols: ["Cada renta obtenida en España", "Importe íntegro, sin gastos, por retención"] },
            { nom: "No residente UE o EEE", sub: "Impuesto por el Tribunal de Justicia.", cols: ["Igual que el anterior", "Con gastos directos deducibles y tipo menor"] },
            { nom: "Impatriado", sub: "Residente que opta por el régimen especial.", cols: ["Solo la renta española", "Tributa por el IRNR pese a ser residente"] },
          ],
          nota: "La tercera y la cuarta fila describen la misma renta con dos cargas muy distintas, y esa diferencia no la decidió el legislador español sino **la jurisprudencia europea**: tratar peor a un no residente comunitario que a un residente restringe las libertades del mercado interior.",
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
            { nom: "Impuesto en la fuente", sub: "Con el tope que fije el convenio.", cols: ["$T_f = \\min(t_f,\\ t_{convenio}) \\cdot R$"] },
            { nom: "Cuota teórica en residencia", sub: "Lo que esa renta pagaría en España.", cols: ["$T_e = t_e \\cdot R$"] },
            { nom: "Deducción por doble imposición", sub: "El menor de los dos: es un tope, no un reembolso.", cols: ["$D = \\min(T_f,\\ T_e)$"] },
            { nom: "Carga total soportada", sub: "El máximo de los dos tipos, no la suma.", cols: ["$T = T_f + \\max(0,\\ T_e - T_f)$"] },
            { nom: "Exceso no recuperable en España", sub: "Solo se reclama en el país de la fuente.", cols: ["$E = \\max(0,\\ T_f - T_e)$"] },
            { nom: "No residente sin EP", sub: "Sobre el íntegro, sin restar costes.", cols: ["$T = t \\cdot I$, frente a $t \\cdot (I - G)$ con EP"] },
          ],
          nota: "La cuarta línea es el resultado que conviene interiorizar: con el método de imputación, **la carga total es el mayor de los dos tipos, no su suma**. Y la quinta es su reverso incómodo: si la fuente retuvo por encima del tipo de residencia, ese exceso queda huérfano.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el convenio no devuelve nada por sí solo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un residente en España cobra **10.000 € de dividendos** de una sociedad extranjera. En España esa renta va a la base del ahorro y tributaría al **19 %**. El convenio limita la retención en origen al **15 %**. Comparamos lo que ocurre si el pagador aplica el convenio y lo que ocurre si retiene el tipo interno del **30 %** porque no se le presentó a tiempo el certificado de residencia fiscal.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Con el convenio (15 %)", "Sin acreditarlo (30 %)"],
          filas: [
            ["Retención en el país de la fuente", "1.500 €", "3.000 €"],
            ["Cuota teórica española (19 %)", "1.900 €", "1.900 €"],
            ["Deducción por doble imposición", "1.500 €", "1.900 €"],
            ["Cuota a ingresar en España", "400 €", "0 €"],
            { celdas: ["Carga total soportada", "1.900 € (19 %)", "3.000 € (30 %)"], clase: "total" },
            ["Exceso no recuperable en España", "0 €", "1.100 €"],
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**En la columna de la izquierda el sistema funciona exactamente como está diseñado**: la carga total es el 19 %, que es el tipo español, repartido entre 1.500 € que se queda el país de la fuente y 400 € que se queda España. La doble imposición ha desaparecido por completo, y ni un euro se ha pagado dos veces.",
            "En la columna de la derecha no ha cambiado ninguna norma: **ha cambiado un papel**. La deducción se topa en los 1.900 € que esa renta pagaría en España, así que la cuota española cae a cero, pero eso no compensa nada: la carga total sube al 30 % y **hay 1.100 € que ni se deducen aquí ni se devuelven solos allí**. Recuperarlos exige iniciar un procedimiento de devolución **ante la Administración del otro país**, con sus formularios, su plazo de prescripción y, muy a menudo, un intermediario que cobra por hacerlo.",
            "**La lección práctica no es fiscal sino administrativa**: el valor de un convenio se materializa mediante un **certificado de residencia fiscal** entregado al pagador **antes** de que retenga. Después es igual de válido y muchísimo más caro de hacer valer. Es un caso ejemplar del principio general de la ficha 17.04: en fiscalidad casi nada se pierde por falta de derecho y casi todo se pierde por falta de prueba a tiempo.",
            "**El segundo cálculo de la ficha compara los dos regímenes del no residente.** Una empresa extranjera factura 100.000 € en España con 70.000 € de gastos. **Sin establecimiento permanente**, tributa sobre el íntegro al 24 %: **24.000 €**, que son cuatro quintas partes de su beneficio real de 30.000 €. **Con establecimiento permanente**, tributa sobre los 30.000 € de renta neta al 25 %: **7.500 €**. Una carga **3,2 veces menor** por la misma actividad. Ahí está la razón de que el concepto de establecimiento permanente genere más litigios que casi ningún otro del sistema.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el traslado de septiembre",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un ingeniero acepta un puesto en Dubái y se muda el **15 de septiembre**. Vende su coche, alquila su piso de Madrid y se da de baja en el padrón. En junio del año siguiente presenta declaración solo por lo cobrado hasta septiembre, convencido de que el resto ya no es asunto de España. Dos años después recibe una comprobación por **la renta de todo el año, incluida la percibida en los Emiratos**.",
            "**Ha permanecido en España 258 días**, muy por encima de los 183, y la residencia no se prorratea: se es residente el año entero o no se es. Su primer año «fuera» es, a efectos fiscales, un año español completo. Y el efecto se agrava porque su nueva retribución no sufrió retención española, de modo que la regularización llega íntegra y con intereses.",
            "**El segundo error es más sutil y más común.** Da por hecho que a partir del año siguiente ya es no residente por vivir fuera. Pero el cómputo de días incluye las **ausencias esporádicas** salvo que acredite residencia fiscal en otro Estado **mediante certificado de sus autoridades**, y en jurisdicciones sin impuesto sobre la renta ese certificado puede ser difícil o imposible de obtener, precisamente porque allí nadie le considera contribuyente de nada. Si además conserva en España su vivienda, sus cuentas y su familia, la Administración puede sostener que mantiene aquí el **núcleo principal de intereses económicos**, que es una vía autónoma y no exige contar días.",
            "**Y hay un tercer nivel**, el que decide los casos reales: si los dos Estados le consideran residente, se acude a las **reglas de desempate del convenio** —vivienda permanente disponible, centro de intereses vitales, morada habitual, nacionalidad y, en último término, acuerdo amistoso entre las Administraciones—, aplicadas en ese orden y no en bloque. Pero eso solo funciona **si hay convenio**. La conclusión práctica es que un traslado internacional se planifica mirando el calendario, la fecha del certificado y el texto del convenio, y que **irse en enero y en septiembre no son la misma operación**.",
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
            { t: "Creer que la residencia se prorratea por meses", d: "El período impositivo es el año natural y no se fracciona salvo por fallecimiento. Quien se traslada a mitad de año es residente por el año entero si supera los 183 días, y tributa aquí también por lo ganado después de irse." },
            { t: "Confundir nacionalidad con residencia fiscal", d: "Son cosas independientes. Un español puede ser no residente desde el primer día y un extranjero puede ser residente en su primer año. Solo Estados Unidos y algún país más gravan por nacionalidad, y España no es uno de ellos." },
            { t: "Suponer que el convenio se aplica solo por existir", d: "Se aplica si se acredita la residencia fiscal ante el pagador antes de la retención, con certificado de las autoridades del otro Estado. Sin ese papel el pagador aplica su tipo interno, y recuperar el exceso exige un procedimiento en el país de la fuente." },
            { t: "Creer que España devuelve lo retenido de más en el extranjero", d: "La deducción por doble imposición se topa en lo que esa renta habría pagado en España. En el ejemplo, 1.100 € quedan fuera de la deducción y solo se recuperan reclamándolos allí donde se retuvieron." },
            { t: "Pensar que un convenio puede aumentar la tributación", d: "Los convenios reparten potestad y ponen techos: nunca crean un gravamen que la ley interna no prevea ni elevan el que prevé. Si el resultado del convenio es peor que el de la ley interna, se aplica la ley interna." },
            { t: "Dar por bueno que un certificado de empadronamiento acredita la residencia fiscal", d: "No la acredita ni en un sentido ni en el otro. Lo que cuenta es el certificado de residencia fiscal emitido por la Administración tributaria del Estado correspondiente, y a efectos de convenio debe decir expresamente que lo es a efectos del convenio." },
            { t: "Tratar igual al no residente comunitario y al de un tercer país", d: "El residente en la Unión Europea o el Espacio Económico Europeo puede deducir gastos directamente relacionados y aplica un tipo menor. No es una concesión graciable: viene impuesto por la jurisprudencia del Tribunal de Justicia sobre libertades fundamentales." },
            { t: "Ignorar la cuarentena de los paraísos fiscales", d: "Quien traslada su residencia a un territorio así calificado sigue tributando como residente en España el año del cambio y los cuatro siguientes. Es una regla antielusión que convierte el traslado en una decisión de cinco años, no de uno." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "La residencia es exactamente la línea que separa el PIB de la RNB",
          texto:
            "El criterio de residencia no es una peculiaridad tributaria: es **el mismo criterio con el que se construye la contabilidad nacional**. El **PIB** mide lo producido **dentro del territorio**, lo produzca quien lo produzca; la **Renta Nacional Bruta** mide lo que perciben **las unidades residentes**, lo perciban donde lo perciban. La diferencia entre ambos son los **flujos de rentas primarias con el resto del mundo** —D.1 de trabajadores transfronterizos, D.4 de intereses y dividendos—, que es precisamente la materia que grava el IRNR. Por eso Irlanda tiene un PIB muy superior a su RNB, con beneficios de multinacionales que se producen allí pero se atribuyen a residentes de otros países. Y por eso la definición de unidad residente del SEC, en la ficha 10.06, y la definición fiscal de residencia responden a la misma pregunta: **a qué economía pertenece esta renta**. No coinciden en el detalle, y conviene no mezclarlas al comparar cifras, pero comparten el problema.",
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
              q: "Un residente cobra 10.000 € de dividendos extranjeros con retención en origen del 15 %, y en España tributarían al 19 %. ¿Cuánto paga aquí y cuál es su carga total?",
              a: "Paga 400 € en España y soporta 1.900 € en total, el 19 %. La deducción es el menor entre lo pagado fuera (1.500) y la cuota teórica española (1.900): 1.500. La carga total con el método de imputación es el mayor de los dos tipos, no su suma.",
            },
            {
              q: "En ese mismo caso, si el país de la fuente retiene el 30 % por no habérsele acreditado la residencia, ¿qué ocurre?",
              a: "Retiene 3.000 €, la deducción se topa en 1.900 €, la cuota española queda en cero y la carga total sube al 30 %. Hay 1.100 € que España no deduce y que solo se recuperan iniciando una devolución ante la Administración del país de la fuente.",
            },
            {
              q: "Alguien se traslada al extranjero el 15 de septiembre. ¿Cómo tributa ese año?",
              a: "Como residente por el año completo, incluida la renta obtenida después del traslado, porque ha permanecido 258 días y la residencia no se prorratea. Solo se fracciona el período impositivo en caso de fallecimiento.",
            },
            {
              q: "Una empresa extranjera factura 100.000 € en España con 70.000 € de gastos. ¿Cuánto tributa con y sin establecimiento permanente?",
              a: "Sin EP, el 24 % sobre el importe íntegro: 24.000 €, sin deducir gastos. Con EP, el 25 % sobre la renta neta de 30.000 €: 7.500 €. La carga es 3,2 veces mayor sin establecimiento, y por eso ese concepto concentra tantos litigios.",
            },
            {
              q: "¿Por qué el PIB de Irlanda supera tanto a su Renta Nacional Bruta?",
              a: "Porque el PIB mide la producción dentro del territorio y la RNB la renta de las unidades residentes. Los beneficios de multinacionales producidos en Irlanda se atribuyen a residentes de otros países y salen como rentas primarias, que es la misma materia que grava el IRNR.",
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
              q: "Una persona permanece 258 días en España y se traslada al extranjero el 15 de septiembre. ¿Cómo tributa ese año?",
              opciones: [
                "Como residente hasta septiembre y como no residente el resto del año",
                "Como no residente, porque al 31 de diciembre ya vivía fuera",
                "Como residente por el año completo, incluida la renta obtenida tras el traslado",
                "A su elección, comunicando la fecha de traslado a la Administración",],
              correcta: 2,
              porque: [
                "El período impositivo no se fracciona: solo se parte en caso de fallecimiento.",
                "La residencia no se determina por la situación a fin de año sino por los días y los demás criterios del período.",
                "Supera los 183 días, y la residencia es una condición de todo o nada para el año natural entero.",
                "No hay opción: los criterios de residencia son reglas imperativas, no una elección del contribuyente.",],
            },
            {
              q: "Un dividendo extranjero de 10.000 € sufre una retención del 30 % en origen y tributaría al 19 % en España. ¿Qué pasa con la diferencia?",
              opciones: [
                "España deduce los 3.000 € íntegros y devuelve el exceso sobre la cuota",
                "El convenio obliga automáticamente al país de la fuente a devolverlo",
                "Se compensa con otras rentas del ahorro de los cuatro ejercicios siguientes",
                "La deducción se topa en 1.900 € y los 1.100 € restantes solo se reclaman en el país de la fuente",],
              correcta: 3,
              porque: [
                "La deducción nunca excede de lo que esa renta habría pagado en España: ese es el límite del método de imputación.",
                "El convenio fija el techo, pero la devolución de lo retenido de más exige un procedimiento a instancia del interesado.",
                "El exceso de impuesto extranjero no genera un crédito compensable en ejercicios posteriores.",
                "Por eso el certificado de residencia debe entregarse al pagador antes de la retención, y no después.",],
            },
            {
              q: "¿Cuál es la diferencia esencial entre tributar con y sin establecimiento permanente?",
              opciones: [
                "Con establecimiento se tributa en el país de residencia y sin él en el de la fuente",
                "Con establecimiento solo tributan las rentas empresariales y sin él únicamente las del capital",
                "Con establecimiento se tributa por la renta neta; sin él, sobre el importe íntegro y sin deducir gastos",
                "Sin establecimiento el tipo es siempre superior al general de Sociedades",],
              correcta: 2,
              porque: [
                "En ambos casos tributa el Estado de la fuente; lo que cambia es la base sobre la que lo hace.",
                "Ambos regímenes alcanzan a rentas de distinta naturaleza; el criterio que los separa es la existencia de una base fija de negocio.",
                "En el ejemplo, 7.500 € frente a 24.000 € por la misma actividad: de ahí que el concepto genere tantos litigios.",
                "El tipo sin establecimiento es cercano al general, y para residentes en la Unión es incluso menor: el problema es la base, no el tipo.",],
            },
            {
              q: "¿Qué hace exactamente un convenio de doble imposición?",
              opciones: [
                "Crea un impuesto común aplicable en los dos Estados firmantes",
                "Exime de tributación en el Estado de la fuente a todos los no residentes",
                "Obliga a repartir la recaudación entre las dos Administraciones al 50 %",
                "Reparte la potestad de gravar y limita el tipo que puede aplicar el Estado de la fuente",],
              correcta: 3,
              porque: [
                "Un convenio nunca crea gravámenes: solo puede rebajar o excluir los que ya prevé cada ley interna.",
                "Hay rentas que el Estado de la fuente sigue pudiendo gravar; lo que el convenio hace es ponerles un techo.",
                "No hay reparto de recaudación entre Administraciones: cada una cobra lo que le corresponde según el reparto de potestad.",
                "Y si el resultado del convenio fuera peor que el de la ley interna, se aplicaría la ley interna.",],
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
            { t: "RDLeg 5/2004, texto refundido de la Ley del IRNR", d: "Rentas obtenidas en territorio español en el artículo 13, establecimiento permanente en el 16 y tributación sin establecimiento en los artículos 24 a 33, incluido el régimen especial de residentes en la Unión Europea." },
            { t: "Ley 35/2006 del IRPF, artículos 9 y 10", d: "Los criterios de residencia en dos artículos muy breves que conviene leer literalmente: los 183 días con ausencias esporádicas, el núcleo de intereses económicos y la presunción familiar." },
            { t: "Modelo de Convenio Tributario de la OCDE y sus Comentarios", d: "Casi todos los convenios españoles siguen su articulado. Los Comentarios al artículo 4 sobre las reglas de desempate de residencia y al artículo 5 sobre establecimiento permanente son la fuente que de verdad decide los casos." },
            { t: "Agencia Tributaria, formularios 210 y certificados de residencia", d: "La parte procedimental, que es donde se pierde el dinero: qué modelo se presenta, con qué plazo y qué documentación acredita la residencia a efectos de convenio." },
          ],
        },
      ],
    },
  ],
};
