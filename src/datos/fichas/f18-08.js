/* Ficha 18.08 — Control y fiscalización: IGAE, Tribunal de Cuentas y AIReF. */

export default {
  codigo: "18.08",
  titulo: "Control y fiscalización: IGAE, Tribunal de Cuentas y AIReF",
  nivel: 3,
  bloque: "Presupuesto y financiación pública",
  tiempo: "5 h",
  nucleo:
    "Tres controles que se distinguen por cuándo actúan, y ese cuándo lo decide todo: la IGAE puede impedir el acto antes de que se dicte, la AIReF puede cuestionar la previsión antes de que se vote, y el Tribunal de Cuentas llega años después, cuando ya no puede evitar nada y solo puede exigir responsabilidades.",
  requiere: "18.02 El ciclo de los PGE · 18.04 Reglas fiscales",
  abre: "18.06 Financiación autonómica",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un sistema de control presupuestario se ordena mejor por **el momento en que interviene** que por el organismo que lo ejerce, porque el momento determina lo que ese control puede llegar a conseguir. Hay controles **previos**, que pueden impedir; **concomitantes**, que acompañan la ejecución; y **posteriores**, que solo pueden constatar y depurar responsabilidades. España tiene los tres, y confundir lo que cabe esperar de cada uno es el origen de la mayoría de las críticas mal dirigidas.",
            "El **control interno** lo ejerce la **Intervención General de la Administración del Estado**, que forma parte del propio Ejecutivo pero actúa con **autonomía funcional** respecto del órgano gestor al que fiscaliza. Su instrumento más potente es la **función interventora**, que somete a examen previo los actos con contenido económico: se comprueba que existe crédito adecuado y suficiente, que el órgano es competente y que se cumplen los requisitos esenciales del gasto. **Es el único control que puede detener un gasto antes de que se comprometa.**",
            "Cuando la Intervención aprecia un defecto formula un **reparo**, y si es de los que la ley califica como suspensivos —falta de crédito, omisión de requisitos esenciales, incompetencia— **la tramitación se detiene**. El gestor puede aceptarlo y subsanar, o **discrepar**, y entonces la discrepancia la resuelve el superior jerárquico o, en los casos más graves, el **Consejo de Ministros**. El sistema permite, por tanto, gastar contra el criterio de la Intervención, pero **obliga a que alguien identificable asuma esa decisión por escrito**, que es exactamente lo que un buen control debe conseguir: no hacer imposible la decisión, sino hacerla atribuible.",
            "La IGAE ejerce además **control financiero permanente** y **auditoría pública**, de alcance más amplio y no limitado a la legalidad: eficacia, eficiencia y fiabilidad de la información. Y hay una figura que conviene conocer por su frecuencia: la **omisión de fiscalización**, es decir, el gasto realizado sin someterlo al control previo cuando era preceptivo. Su tratamiento —expediente de convalidación, reconocimiento extrajudicial de créditos— es el reverso de las «facturas en el cajón» de la ficha 18.02, y su volumen es un indicador directo de la salud de un sistema de gestión.",
            "El **control externo** corresponde al **Tribunal de Cuentas**, que es **el supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado**, depende directamente de las Cortes Generales y tiene una naturaleza **dual** que suele confundirse. Su **función fiscalizadora** produce informes y, sobre todo, la **Declaración sobre la Cuenta General del Estado**, que eleva al Parlamento. Su **función jurisdiccional** enjuicia la **responsabilidad contable** de quienes manejan fondos públicos y puede exigir el reintegro de los perjuicios causados, incluidos los intereses.",
            "**Esa segunda función es la que le da dientes y también la que marca su límite.** La responsabilidad contable exige un **menoscabo efectivo y cuantificable** en los caudales públicos, dolo o negligencia grave, e infracción de una norma. No alcanza, por tanto, a las decisiones simplemente desacertadas: **un gasto inútil pero legal y correctamente tramitado no genera responsabilidad contable**. Las comunidades autónomas cuentan además con sus propios **órganos de control externo**, que fiscalizan su sector público con la misma lógica.",
            "**El problema estructural del control externo es el calendario.** La Cuenta General se forma y rinde en el ejercicio siguiente al que se refiere, y la Declaración del Tribunal suele aprobarse **dos o tres años después del cierre**. Para entonces el dinero se gastó, el contrato se ejecutó y en muchos casos los responsables han cambiado. **Un control que llega tres años tarde no evita: documenta.** Es una función imprescindible —sin memoria no hay rendición de cuentas— pero no puede pedírsele que prevenga.",
            "De ese diagnóstico nace la tercera pieza, la más reciente. La **AIReF** no controla la ejecución sino **la premisa**: verifica las **previsiones macroeconómicas** que sustentan un presupuesto **antes de que se vote**, informa sobre las líneas fundamentales, sobre el cumplimiento de los objetivos y sobre la sostenibilidad de las finanzas públicas. Su fuerza no es coercitiva sino **reputacional**, articulada mediante el principio de **cumplir o explicar**: la administración puede apartarse de sus recomendaciones, pero debe motivarlo públicamente. Es el control que actúa en el único momento en que todavía se puede cambiar la decisión sin coste.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Órgano", "Cuándo actúa", "Qué puede lograr"],
          filas: [
            { nom: "AIReF", sub: "Independiente, ex ante.", cols: ["Antes de aprobarse el presupuesto", "Que la previsión sea creíble o que apartarse cueste explicarlo"] },
            { nom: "IGAE — función interventora", sub: "Interno, previo al acto.", cols: ["Antes de comprometer cada gasto", "Detener el acto o hacer atribuible la decisión de seguir"] },
            { nom: "IGAE — control financiero", sub: "Interno, concomitante.", cols: ["Durante la ejecución", "Detectar desviaciones a tiempo de corregirlas"] },
            { nom: "Tribunal de Cuentas — fiscalización", sub: "Externo, posterior.", cols: ["Dos o tres años tras el cierre", "Documentar y rendir cuentas ante las Cortes"] },
            { nom: "Tribunal de Cuentas — jurisdicción", sub: "Externo, posterior.", cols: ["Tras detectarse el menoscabo", "Exigir el reintegro de los fondos con intereses"] },
            { nom: "Órganos autonómicos de control externo", sub: "Externo, posterior.", cols: ["Sobre el sector público autonómico", "La misma función en su ámbito"] },
          ],
          nota: "Léase la columna central como una línea temporal: **solo las dos primeras filas actúan cuando todavía se puede evitar el daño**. Exigirle prevención al Tribunal de Cuentas es pedirle algo que su posición en el ciclo no le permite hacer.",
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
            { nom: "Requisitos del control previo", sub: "Los tres se comprueban a la vez.", cols: ["Crédito, competencia y requisitos esenciales: los tres a la vez"] },
            { nom: "Efecto del reparo suspensivo", sub: "La tramitación se detiene.", cols: ["Reparo $\\Rightarrow$ suspensión hasta subsanar o resolver"] },
            { nom: "Responsabilidad contable", sub: "Los tres elementos son necesarios.", cols: ["Menoscabo, dolo o culpa grave e infracción: los tres a la vez"] },
            { nom: "Desfase del control externo", sub: "Entre el hecho y su enjuiciamiento.", cols: ["$t_{informe} - t_{gasto} \\approx 3$ años"] },
            { nom: "Cumplir o explicar", sub: "El mecanismo de la AIReF.", cols: ["Apartarse $\\Rightarrow$ motivar públicamente"] },
            { nom: "Indicador de salud del sistema", sub: "Cuanto mayor, peor.", cols: ["$\\omega = \\dfrac{\\text{gasto sin fiscalización previa}}{\\text{gasto total}}$"] },
          ],
          nota: "La tercera línea explica por qué se archivan tantos expedientes que la opinión pública esperaba ver condenados: **falta cualquiera de los tres elementos y no hay responsabilidad contable**. Un gasto inútil pero legal, tramitado correctamente y sin menoscabo cuantificable queda fuera del alcance de esta jurisdicción.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la cronología de un mismo euro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seguimos un gasto del ejercicio **N** y anotamos en qué momento lo mira cada control. La tabla no lleva importes: lo que se mide aquí es **tiempo**, que es la variable que determina qué puede lograr cada uno.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Momento", "Quién actúa", "Qué puede hacer todavía"],
          filas: [
            ["Septiembre de N−1", "AIReF informa sobre líneas fundamentales", "Cuestionar la previsión antes de la votación"],
            ["Octubre-diciembre de N−1", "Cortes Generales", "Enmendar o rechazar el proyecto"],
            ["Durante N, antes de cada acto", "IGAE, función interventora", "Detener el gasto o forzar una discrepancia por escrito"],
            ["Durante N, mensualmente", "IGAE, ejecución y control financiero", "Detectar la desviación a tiempo de corregirla"],
            ["Antes del 31 de octubre de N+1", "IGAE forma y rinde la Cuenta General", "Documentar el ejercicio cerrado"],
            { celdas: ["N+2 o N+3", "Tribunal de Cuentas: Declaración sobre la Cuenta General", "Informar a las Cortes y, en su caso, exigir responsabilidad contable"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Entre el momento en que el gasto se compromete y aquel en que el control externo se pronuncia median dos o tres años.** El contrato se ejecutó, el dinero salió, la obra se entregó o no se entregó, y con frecuencia el responsable ya no ocupa el cargo. Esto no invalida al Tribunal de Cuentas: **la rendición de cuentas ante el Parlamento y la exigencia de reintegro siguen siendo imprescindibles**, y sin memoria institucional no hay incentivo a gestionar bien. Pero fija con precisión lo que cabe esperar de él.",
            "**Las dos primeras filas son las únicas que actúan cuando el daño todavía es evitable, y son las más recientes o las menos comentadas.** La AIReF, creada en 2013, ocupa el único hueco donde una objeción puede cambiar una decisión sin coste: **antes de la votación**. Y la función interventora, que es la más antigua de todas, es la única capaz de impedir un acto concreto. **El control eficaz es siempre el que llega temprano, y es también el que menos atención pública recibe**, precisamente porque cuando funciona no ocurre nada que contar.",
            "**Ese es el sesgo de percepción que la ficha quiere corregir.** Un sistema de control se juzga por los escándalos que aparecen, que son por definición los casos en que falló; nunca por los expedientes que un reparo detuvo, que no dejan rastro público. La medida razonable de su salud no son las condenas del Tribunal de Cuentas sino indicadores anteriores: **cuántos reparos se formulan, cuántos se resuelven por discrepancia, y sobre todo cuánto gasto se realiza omitiendo la fiscalización previa**, que es el que escapó al único control capaz de detenerlo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el reparo que se levanta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un órgano gestor tramita un contrato urgente. La Intervención formula un **reparo suspensivo**: no se acredita la existencia de crédito adecuado y se han omitido requisitos esenciales del expediente. El gestor sostiene que el servicio es imprescindible y no puede esperar. **Plantea discrepancia**, que se eleva y se resuelve **a favor del gestor**, y el gasto se ejecuta.",
            "**Mucha gente concluye que el control ha fracasado. Es exactamente lo contrario.** El sistema no está diseñado para hacer imposible el gasto discutido, sino para que **nadie pueda realizarlo sin dejar constancia de quién lo decidió y contra qué advertencia**. Antes del reparo, el gasto habría sido una decisión difusa; después, es una decisión firmada, motivada y trazable. **El control previo no busca sustituir el criterio del gestor: busca que el criterio tenga autor.**",
            "**Y esa constancia produce efectos reales más adelante.** Si el gasto acaba generando un menoscabo en los fondos públicos, el expediente de discrepancia es la prueba de que existía advertencia previa, lo que resulta decisivo para apreciar la **negligencia grave** que exige la responsabilidad contable. La IGAE debe además **informar anualmente de las resoluciones contrarias a sus reparos**, tanto al Consejo de Ministros como al Tribunal de Cuentas. El control previo y el posterior no son alternativos: **el primero produce el material con el que el segundo puede trabajar**.",
            "**El caso realmente preocupante es otro y no genera titulares**: el gasto que **ni siquiera se somete a fiscalización**. Cuando se contrata primero y se tramita después, no hay reparo que formular ni discrepancia que resolver, y el asunto acaba en un expediente de convalidación o en un reconocimiento extrajudicial de créditos, donde la decisión ya está tomada y solo cabe regularizarla. **La omisión de fiscalización elude el único control capaz de impedir algo**, y por eso su volumen dice más sobre la salud de una administración que el número de reparos, que al menos indica que el sistema está funcionando.",
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
            { t: "Esperar que el Tribunal de Cuentas prevenga el mal uso de fondos", d: "Su Declaración sobre la Cuenta General llega dos o tres años después del cierre. Documenta y exige responsabilidades, que es imprescindible, pero no puede evitar un gasto que ya se ejecutó. La prevención corresponde al control previo." },
            { t: "Creer que un reparo levantado significa que el control falló", d: "Significa lo contrario: el sistema no impide el gasto discutido, obliga a que alguien identificable lo decida por escrito y contra advertencia. Esa constancia es después decisiva para apreciar negligencia grave si hay menoscabo." },
            { t: "Confundir las dos funciones del Tribunal de Cuentas", d: "La fiscalizadora produce informes y la Declaración sobre la Cuenta General ante las Cortes; la jurisdiccional enjuicia la responsabilidad contable y puede exigir reintegros. Son procedimientos y efectos distintos." },
            { t: "Suponer que toda mala gestión genera responsabilidad contable", d: "Exige menoscabo efectivo y cuantificable, dolo o negligencia grave, e infracción de una norma. Un gasto inútil pero legal y correctamente tramitado queda fuera del alcance de esta jurisdicción, y de ahí muchos archivos que sorprenden." },
            { t: "Tratar a la IGAE como un órgano externo", d: "Es control interno: forma parte del Ejecutivo, aunque actúa con autonomía funcional respecto del gestor al que fiscaliza. El control externo es el del Tribunal de Cuentas y los órganos autonómicos equivalentes, que dependen de los parlamentos." },
            { t: "Pensar que la AIReF puede vetar un presupuesto", d: "Su fuerza es reputacional y opera por cumplir o explicar: la administración puede apartarse de sus valoraciones, pero debe motivarlo públicamente. Su valor está en actuar antes de la votación, no en poder impedirla." },
            { t: "Medir la salud del control por el número de escándalos", d: "Los casos conocidos son por definición aquellos en que el control falló; los expedientes que un reparo detuvo no dejan rastro público. Indicadores más informativos son el volumen de reparos, de discrepancias resueltas en contra y, sobre todo, de gasto sin fiscalización previa." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "El INE y Eurostat son también un control, aunque no lo parezca",
          texto:
            "A los tres controles de esta ficha conviene añadir uno que rara vez se presenta como tal: **la elaboración independiente de las cuentas nacionales**. Los objetivos de estabilidad se miden en términos del SEC, y quien decide qué entra en el perímetro **S.13** y cómo se registra cada operación no es el Gobierno sujeto a la regla sino el **INE**, bajo metodología de **Eurostat** y sujeto a sus visitas de diálogo y a sus reservas sobre la calidad de los datos. La ficha 18.04 lo explicaba desde el lado de la regla; visto desde aquí es un control adicional y particularmente eficaz, porque **opera sobre la definición de la magnitud y no sobre la conducta**. Si una empresa pública deficitaria se reclasifica dentro del sector, su déficit computa por más que su presupuesto dijera otra cosa; si un préstamo no es recuperable, se registra como transferencia. Es la razón de que la **independencia estadística** sea un asunto de disciplina fiscal y no solo de calidad técnica: **una regla medida por quien está sujeto a ella no es una regla**.",
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
              q: "¿Qué distingue a los tres controles por el momento en que actúan?",
              a: "La AIReF actúa antes de que el presupuesto se vote, verificando la previsión que lo sustenta. La IGAE actúa antes de cada acto de gasto, con la función interventora, y durante la ejecución. El Tribunal de Cuentas actúa dos o tres años después del cierre. Solo los dos primeros intervienen cuando el daño todavía es evitable.",
            },
            {
              q: "Una Intervención formula un reparo, el gestor discrepa y la discrepancia se resuelve a favor de este. ¿Ha fallado el control?",
              a: "No. El sistema no busca impedir el gasto discutido sino que quede constancia de quién lo decidió y contra qué advertencia. Esa constancia es después decisiva para apreciar la negligencia grave que exige la responsabilidad contable, y la IGAE debe informar anualmente de esas resoluciones al Consejo de Ministros y al Tribunal de Cuentas.",
            },
            {
              q: "¿Qué tres elementos exige la responsabilidad contable?",
              a: "Un menoscabo efectivo y cuantificable en los caudales públicos, dolo o negligencia grave, e infracción de una norma. Si falta cualquiera de los tres no hay responsabilidad, y por eso un gasto inútil pero legal y correctamente tramitado queda fuera del alcance de esta jurisdicción.",
            },
            {
              q: "¿Por qué la omisión de fiscalización previa es más preocupante que un reparo?",
              a: "Porque elude el único control capaz de impedir un gasto antes de comprometerlo. Cuando se contrata primero y se tramita después, no hay reparo que formular: el asunto acaba en convalidación o reconocimiento extrajudicial de créditos, con la decisión ya tomada. Un reparo, en cambio, indica que el sistema está funcionando.",
            },
            {
              q: "¿En qué sentido el INE ejerce una función de control fiscal?",
              a: "En que decide, bajo metodología de Eurostat, qué entidades entran en el sector Administraciones Públicas y cómo se registra cada operación, y los objetivos de estabilidad se miden sobre esas definiciones. Opera sobre la magnitud y no sobre la conducta, y por eso la independencia estadística es un asunto de disciplina fiscal.",
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
              q: "¿Cuál es el único control capaz de impedir que un gasto concreto llegue a comprometerse?",
              opciones: [
                "La fiscalización del Tribunal de Cuentas sobre la Cuenta General",
                "La función interventora de la IGAE, mediante el reparo suspensivo",
                "La auditoría pública posterior del órgano de control externo autonómico",
                "El informe de la AIReF sobre las líneas fundamentales del presupuesto",],
              correcta: 1,
              porque: [
                "Llega dos o tres años después del cierre: documenta y exige responsabilidades, pero no evita.",
                "Actúa antes del acto y detiene la tramitación hasta que se subsane o se resuelva la discrepancia.",
                "Es control externo y posterior: opera sobre ejercicios ya cerrados.",
                "Actúa antes de la votación del presupuesto, no sobre cada acto de gasto concreto.",],
            },
            {
              q: "Un gasto resulta inútil pero fue legal, correctamente tramitado y sin menoscabo cuantificable. ¿Genera responsabilidad contable?",
              opciones: [
                "Sí, porque el perjuicio para el interés público es evidente",
                "Sí, si el Tribunal de Cuentas lo recoge en su informe de fiscalización",
                "No: faltan el menoscabo cuantificable y la infracción de norma que la jurisdicción exige",
                "Solo si el gasto superó el crédito autorizado en el programa",],
              correcta: 2,
              porque: [
                "El desacierto en la decisión no basta: la responsabilidad contable no enjuicia la oportunidad del gasto.",
                "El informe de fiscalización y el procedimiento jurisdiccional son funciones distintas del mismo órgano.",
                "Los tres elementos son necesarios y aquí faltan dos, de ahí archivos que sorprenden a la opinión pública.",
                "Rebasar el crédito sería una infracción, pero el enunciado descarta que la haya habido.",],
            },
            {
              q: "¿Qué mecanismo articula la influencia de la AIReF?",
              opciones: [
                "La aprobación previa de las previsiones macroeconómicas del Gobierno",
                "El principio de cumplir o explicar: apartarse de sus valoraciones obliga a motivarlo públicamente",
                "La imposición de sanciones económicas a las administraciones incumplidoras",
                "La facultad de suspender la tramitación de un presupuesto que considere irreal",],
              correcta: 1,
              porque: [
                "Avala o cuestiona las previsiones, pero el Gobierno no necesita su aprobación para presentarlas.",
                "Actúa en el único momento en que una objeción puede cambiar la decisión sin coste: antes de la votación.",
                "Las medidas coercitivas del marco de estabilidad no las impone la AIReF.",
                "No tiene facultad de suspensión: su fuerza es reputacional, no coercitiva.",],
            },
            {
              q: "¿Qué indicador informa mejor sobre la salud de un sistema de control interno?",
              opciones: [
                "El número de informes de fiscalización publicados cada año",
                "El número de condenas dictadas por el Tribunal de Cuentas",
                "El importe total de las modificaciones de crédito aprobadas",
                "El volumen de gasto realizado omitiendo la fiscalización previa",],
              correcta: 3,
              porque: [
                "El volumen de informes mide actividad del órgano externo, no la eficacia del control preventivo.",
                "Las condenas llegan años después y recogen solo los casos en que el control ya había fallado.",
                "Las modificaciones informan sobre cómo se gobierna el presupuesto, que es otra cuestión distinta.",
                "Es gasto que eludió el único control capaz de detenerlo, y no deja rastro de reparo ni discrepancia.",],
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
            { t: "Ley 47/2003, General Presupuestaria, título VI", d: "El control interno: función interventora, reparos y su tramitación, control financiero permanente y auditoría pública. Los artículos sobre discrepancias son los que sostienen el caso práctico." },
            { t: "LO 2/1982 del Tribunal de Cuentas y Ley 7/1988 de su funcionamiento", d: "Las dos funciones, fiscalizadora y jurisdiccional, y los elementos de la responsabilidad contable. Conviene leer la definición de alcance y la de menoscabo, que son las que deciden los casos." },
            { t: "LO 6/2013 de creación de la AIReF", d: "Su ámbito, sus informes preceptivos y el principio de cumplir o explicar. Es un texto corto y muestra con claridad qué se esperaba de una institución fiscal independiente y qué instrumentos se le dieron." },
            { t: "IGAE, informe anual de resoluciones contrarias a reparos", d: "El material que produce el control previo y que después usa el externo. Es, además, la mejor serie disponible para medir con datos lo que la ficha sostiene sobre omisión de fiscalización." },
          ],
        },
      ],
    },
  ],
};
