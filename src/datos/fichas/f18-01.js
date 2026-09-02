/* Ficha 18.01 — El presupuesto público: concepto y principios. */

export default {
  codigo: "18.01",
  titulo: "El presupuesto público: concepto y principios",
  nivel: 1,
  bloque: "Presupuesto y financiación pública",
  tiempo: "4 h",
  nucleo:
    "Un presupuesto no es una previsión de lo que va a pasar: es una autorización de lo que puede hacerse. Y esa naturaleza solo alcanza a la mitad del documento, porque los créditos de gasto son un límite jurídico que no puede rebasarse y las cifras de ingreso son una simple estimación que no obliga a nadie.",
  requiere: "17.01 El tributo · 10.04 Gasto público y Estado de bienestar",
  abre: "18.02 El ciclo de los PGE · 18.03 Estructuras presupuestarias · 18.04 Reglas fiscales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El presupuesto nace históricamente como **un instrumento de control del Parlamento sobre el Ejecutivo**, no como una herramienta de gestión económica. Su antecedente es la exigencia medieval de que el rey obtuviera el consentimiento de los estamentos para recaudar, y de ahí procede el rasgo que define la institución hasta hoy: **es una autorización previa, no un pronóstico**. Quien lo lee como una predicción del año que viene está leyendo el documento equivocado.",
            "La Ley General Presupuestaria lo define como **la expresión cifrada, conjunta y sistemática de las obligaciones que como máximo puede reconocer** el sector público y **de los derechos que prevea liquidar** durante el ejercicio. Las dos mitades de esa frase no dicen lo mismo, y la diferencia entre ellas es lo primero que hay que interiorizar: **el gasto tiene carácter limitativo y vinculante; el ingreso es una mera estimación**.",
            "**La consecuencia práctica de esa asimetría es fuerte.** Gastar por encima del crédito autorizado no es un desvío contable sino un acto **nulo de pleno derecho**, con responsabilidad personal para quien lo autoriza; para gastar más hay que aprobar antes una **modificación de crédito** por el procedimiento que corresponda. En cambio, recaudar menos de lo previsto no infringe ninguna norma: la estimación de ingresos no autoriza nada ni obliga a nada. Un desvío del 10 % en cada lado del presupuesto tiene, jurídicamente, consecuencias opuestas.",
            "Sobre esa base se levantan los **principios presupuestarios**, que conviene entender como respuestas a un problema concreto y no como una lista. El de **competencia** reparte los papeles: el Gobierno elabora, las Cortes aprueban. El de **universalidad** exige recoger todos los ingresos y todos los gastos, y por sus importes íntegros, sin compensar unos con otros: un ingreso neteado es un ingreso que el Parlamento no ve. El de **unidad** quiere un documento único, para que nadie pueda esconder gasto en presupuestos paralelos.",
            "El principio de **especialidad** es el que da mordiente a todo lo anterior y tiene tres dimensiones. **Cualitativa**: el crédito se destina a la finalidad concreta para la que se aprobó y no a otra. **Cuantitativa**: no puede superarse su importe. **Temporal**: solo puede usarse dentro del ejercicio. Sin especialidad, la autorización parlamentaria sería una cifra global que el Ejecutivo repartiría a su gusto, y el control desaparecería sin necesidad de incumplir nada.",
            "El principio de **anualidad** fija el ejercicio en el año natural, y su tensión con la realidad es evidente: **muchas decisiones públicas duran más de doce meses**. Un hospital, una línea ferroviaria o un contrato plurianual no caben en un ejercicio. De ahí figuras como los **compromisos de gasto plurianuales**, que autorizan obligaciones de años futuros dentro de límites tasados. Y de ahí también la **prórroga automática**: si el 1 de enero no hay presupuesto aprobado, se prorroga el anterior, precisamente porque la Administración no puede quedarse sin autorización para pagar nóminas y pensiones.",
            "El principio de **no afectación** establece que los ingresos financian el gasto **en su conjunto**, sin que ninguno quede atado a una finalidad. Su razón es la flexibilidad y la igualdad entre políticas: si cada impuesto financiara un programa, el gasto en cada área dependería de la suerte recaudatoria de su impuesto y no de una decisión sobre prioridades. Tiene excepciones —cotizaciones sociales, algunos tributos ambientales—, y cada una de ellas es una decisión deliberada de sustraer un gasto a la discusión anual, lo que a veces se busca y a veces se sufre.",
            "A los principios clásicos, orientados al **control**, se han superpuesto otros de vocación **económica**: **estabilidad presupuestaria**, **sostenibilidad financiera**, **plurianualidad**, **transparencia** y **eficiencia en la asignación**. No sustituyen a los anteriores sino que conviven con ellos, y en ocasiones tiran en direcciones distintas: la especialidad cuantitativa protege el control parlamentario pero rigidiza la gestión, y la plurianualidad mejora la planificación a costa de comprometer decisiones de parlamentos futuros. **Casi todos los debates presupuestarios reales son un conflicto entre dos principios, no entre un principio y su incumplimiento.**",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Principio", "Qué exige", "Contra qué protege"],
          filas: [
            { nom: "Competencia", sub: "Cada fase, su titular.", cols: ["El Gobierno elabora y las Cortes aprueban", "Que el Ejecutivo se autorice a sí mismo"] },
            { nom: "Universalidad", sub: "Cifras íntegras, sin compensar.", cols: ["Todos los ingresos y gastos, por su importe bruto", "Que se oculte gasto netándolo con un ingreso"] },
            { nom: "Unidad", sub: "Un solo documento.", cols: ["Un presupuesto único para todo el sector público", "Los presupuestos paralelos y las cajas aparte"] },
            { nom: "Especialidad", sub: "Cualitativa, cuantitativa y temporal.", cols: ["Ese fin, ese importe, ese ejercicio", "Que la autorización se vuelva una cifra global"] },
            { nom: "Anualidad", sub: "Con prórroga si no hay acuerdo.", cols: ["El ejercicio coincide con el año natural", "Autorizaciones indefinidas sin revisión"] },
            { nom: "No afectación", sub: "Con excepciones tasadas.", cols: ["Los ingresos financian el gasto en conjunto", "Que el gasto dependa de la suerte de un impuesto"] },
          ],
          nota: "La cuarta fila es la que hace operativas a todas las demás: **sin especialidad, el resto de principios se cumplirían formalmente y no controlarían nada**. Por eso su vulneración es la que arrastra consecuencias jurídicas más severas.",
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
            { nom: "Límite del gasto", sub: "Es una prohibición, no un objetivo.", cols: ["$\\text{Obligaciones reconocidas} \\leq \\text{Créditos autorizados}$"] },
            { nom: "Estimación del ingreso", sub: "No hay desigualdad que cumplir.", cols: ["$\\text{Derechos liquidados} \\approx \\text{Previsión}$"] },
            { nom: "Crédito disponible", sub: "Lo que aún puede comprometerse.", cols: ["$C_d = C - A - M$"] },
            { nom: "Saldo presupuestario", sub: "Solo con las operaciones no financieras.", cols: ["$S = I_{1..7} - G_{1..7}$"] },
            { nom: "Equilibrio contable del documento", sub: "Siempre se cumple, por construcción.", cols: ["$I_{total} = G_{total}$"] },
            { nom: "Regla de la especialidad", sub: "Las tres dimensiones a la vez.", cols: ["Mismo fin, mismo importe y mismo ejercicio: las tres a la vez"] },
          ],
          nota: "Las líneas cuarta y quinta explican por qué **el presupuesto siempre cuadra y aun así hay déficit**: el equilibrio del documento se logra incluyendo la emisión de deuda como ingreso. El saldo que informa es el de las operaciones no financieras, no el total.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el mismo 10 % en cada lado del presupuesto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un organismo tiene un **crédito de 10.000.000 €** en un programa y una **previsión de ingresos de 12.000.000 €** por una tasa. Al cerrar el año ha comprometido gasto por **10.400.000 €** y ha recaudado **10.800.000 €**. Los dos desvíos son de magnitud parecida; sus consecuencias, no.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Lado del presupuesto", "Autorizado o previsto", "Realizado", "Consecuencia"],
          filas: [
            ["Gasto del programa", "10.000.000 €", "10.400.000 €", "Exceso de 400.000 €: acto nulo sin modificación previa"],
            ["Ingreso por la tasa", "12.000.000 €", "10.800.000 €", "Menor recaudación del 10 %: ninguna consecuencia jurídica"],
            { celdas: ["Naturaleza de la cifra", "Límite vinculante", "Mera estimación", "La asimetría es el núcleo de la ficha"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El exceso de gasto de 400.000 €, apenas un 4 %, es una infracción**: los créditos son limitativos, y reconocer obligaciones por encima de ellos genera un acto nulo de pleno derecho y responsabilidad de quien lo autoriza. La vía correcta no era gastar y explicarlo después, sino **tramitar antes una modificación de crédito**: un suplemento, una transferencia desde otro programa o una generación de crédito, cada una con su procedimiento y su órgano competente.",
            "**El defecto de ingreso de 1.200.000 €, un 10 %, no infringe nada.** Nadie ha incumplido una norma porque la tasa recaudara menos de lo estimado. Tiene efectos económicos evidentes —hay que financiar el hueco— pero no jurídicos, porque la cifra del estado de ingresos nunca fue una autorización ni una obligación de recaudar.",
            "**De aquí sale la lectura correcta de una ejecución presupuestaria**, que es lo que la ficha quiere dejar instalado. Cuando se compara lo presupuestado con lo ejecutado, **las dos columnas no significan lo mismo**: en el gasto, ejecutar el 98 % es cumplir; en el ingreso, recaudar el 98 % es simplemente haber estimado bien. Y un grado de ejecución del gasto muy inferior al 100 % no siempre es prudencia: puede ser incapacidad de gestión, sobre todo en los capítulos de inversión, donde los créditos no ejecutados se pierden al cerrar el ejercicio por el principio de especialidad temporal.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el presupuesto prorrogado",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un Gobierno no logra aprobar sus cuentas y el 1 de enero entra en vigor la **prórroga automática** del presupuesto anterior. La noticia se cuenta a menudo como una parálisis, y no lo es: **el Estado sigue funcionando, pagando nóminas, pensiones e intereses**. La prórroga existe precisamente para eso, porque dejar a la Administración sin autorización de gasto sería mucho peor que gobernar con las cuentas del año pasado.",
            "**Lo que la prórroga sí hace es congelar la estructura de las prioridades.** Se prorrogan los créditos iniciales del ejercicio anterior, no los finales tras las modificaciones, y quedan fuera los que financiaban actuaciones que ya terminaron. El resultado es un presupuesto que **refleja las decisiones políticas de hace dos años**: los programas nuevos no arrancan, los que iban a crecer no crecen y los que iban a extinguirse siguen dotados. La política presupuestaria no se detiene, se hereda.",
            "**Y desplaza poder del Parlamento al Gobierno**, que es la consecuencia menos comentada y la más importante. Con las cuentas prorrogadas, la adaptación a la realidad se hace por la vía de las **modificaciones de crédito**, que aprueba el propio Ejecutivo o su Ministerio de Hacienda según la cuantía. Es decir: la asignación real de recursos se decide mediante instrumentos administrativos en lugar de mediante una ley debatida y enmendada. **El principio de competencia se cumple formalmente y se vacía en la práctica.**",
            "**La lección que conviene extraer no es sobre coyuntura política sino sobre el diseño de la institución.** El presupuesto vale como control parlamentario en la medida en que se apruebe, se apruebe a tiempo y las modificaciones posteriores sean la excepción. Un sistema con prórrogas frecuentes y muchas modificaciones conserva la forma del control y pierde la sustancia, aunque cada acto por separado sea impecablemente legal. Por eso la magnitud y el número de modificaciones de crédito es uno de los indicadores que vigilan los órganos de control de la ficha 18.08.",
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
            { t: "Leer el presupuesto como una previsión económica", d: "Es una autorización de gasto y una estimación de ingreso. Que la recaudación se desvíe no incumple nada; que el gasto supere el crédito, sí. Quien lo lea como un pronóstico no entenderá por qué una mitad del documento obliga y la otra no." },
            { t: "Dar el mismo valor a las dos columnas de una ejecución", d: "En el gasto, el porcentaje ejecutado mide cumplimiento de un límite; en el ingreso, mide calidad de la estimación. Compararlos como si midieran lo mismo es el error de lectura más frecuente en los informes de ejecución." },
            { t: "Creer que el presupuesto cuadra porque no hay déficit", d: "Cuadra siempre, por construcción: el equilibrio se logra incluyendo la emisión de deuda entre los ingresos. El saldo que informa del déficit es el de las operaciones no financieras, que la ficha 18.03 desarrolla." },
            { t: "Confundir prórroga con parálisis", d: "El Estado sigue pagando nóminas, pensiones e intereses. Lo que se congela es la estructura de prioridades, que pasa a ser la de hace dos años, y lo que se desplaza es el poder de decidir, del Parlamento hacia el Ejecutivo por la vía de las modificaciones." },
            { t: "Suponer que un crédito no gastado se conserva para el año siguiente", d: "El principio de especialidad temporal lo impide con carácter general: los créditos no ejecutados se anulan al cierre. Existen figuras de incorporación de remanentes, pero son tasadas y no la regla, y por eso los capítulos de inversión sufren tanto el calendario." },
            { t: "Tomar la no afectación por una regla técnica menor", d: "Decide quién manda sobre cada euro. Afectar un ingreso a un gasto sustrae esa decisión a la discusión presupuestaria anual, lo que a veces se busca deliberadamente —las cotizaciones sociales— y a veces se padece." },
            { t: "Pensar que gastar de más se arregla justificándolo después", d: "El exceso sobre el crédito es nulo de pleno derecho y genera responsabilidad personal. La vía es tramitar antes la modificación de crédito que corresponda: suplemento, transferencia, generación o ampliación, cada una con su procedimiento." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Por qué el déficit presupuestario y el déficit del SEC nunca coinciden",
          texto:
            "El presupuesto se ejecuta en **criterio administrativo** y la contabilidad nacional mide en **devengo económico**, y de ahí sale una brecha permanente que conviene no confundir con un error. El presupuesto reconoce la obligación cuando se dicta el acto administrativo correspondiente; el SEC imputa la operación **al ejercicio en que se produce el hecho económico**, aunque el papel llegue después o nunca. Por eso la IGAE publica cada año un **ajuste de contabilidad nacional** que traduce un saldo en el otro, con partidas como la recaudación incierta, los intereses devengados y no pagados, las inversiones de las asociaciones público-privadas o la reclasificación de entes dentro del sector Administraciones Públicas. La ficha 13.06 explica la lógica del devengo; aquí interesa la consecuencia práctica: **el dato que se compromete ante Bruselas y el que aparece en la liquidación del presupuesto son magnitudes distintas y las dos son correctas**. Citar una cuando se discute la otra es el malentendido más común de todo el debate presupuestario español.",
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
              q: "Un programa con crédito de 10.000.000 € compromete 10.400.000 €, y una tasa prevista en 12.000.000 € recauda 10.800.000 €. ¿Qué consecuencias tiene cada desvío?",
              a: "El exceso de gasto de 400.000 € es un acto nulo de pleno derecho, con responsabilidad personal, salvo que se hubiera tramitado antes una modificación de crédito. El defecto de ingreso de 1.200.000 € no infringe nada: la previsión de ingresos es una estimación, no una autorización.",
            },
            {
              q: "¿Qué significa que los créditos de gasto sean limitativos y vinculantes?",
              a: "Que fijan un máximo que no puede rebasarse y un destino que no puede alterarse. Es el principio de especialidad en sus tres dimensiones: la finalidad concreta, el importe y el ejercicio. Sin él, la autorización parlamentaria sería una cifra global repartible a discreción del Ejecutivo.",
            },
            {
              q: "¿Por qué el presupuesto siempre cuadra y sin embargo hay déficit?",
              a: "Porque el equilibrio contable del documento se consigue incluyendo la emisión de deuda entre los ingresos. El saldo que informa del déficit es el de las operaciones no financieras, no la diferencia entre los totales de ingreso y gasto, que por construcción es cero.",
            },
            {
              q: "¿Qué cambia realmente cuando un presupuesto se prorroga?",
              a: "No se paraliza el Estado: se congela la estructura de prioridades del ejercicio anterior y se desplaza poder del Parlamento al Gobierno, porque la adaptación a la realidad se hace mediante modificaciones de crédito administrativas en lugar de mediante una ley debatida y enmendada.",
            },
            {
              q: "¿Por qué el déficit de la liquidación presupuestaria no coincide con el del SEC?",
              a: "Porque el presupuesto se ejecuta en criterio administrativo y la contabilidad nacional mide en devengo económico. La IGAE publica un ajuste que traduce un saldo en el otro, con partidas como los intereses devengados y no pagados o la reclasificación de entes. Las dos cifras son correctas y miden cosas distintas.",
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
              q: "¿Cuál es la diferencia esencial entre el estado de gastos y el de ingresos de un presupuesto?",
              opciones: [
                "El de gastos se ejecuta en devengo y el de ingresos en caja",
                "Ninguna: ambos son previsiones que se ajustan durante el ejercicio",
                "El de ingresos lo aprueba el Parlamento y el de gastos el Gobierno",
                "El de gastos es limitativo y vinculante; el de ingresos es una mera estimación",],
              correcta: 3,
              porque: [
                "El criterio de imputación no es lo que los distingue: la diferencia es la naturaleza jurídica de la cifra.",
                "Solo el estado de ingresos es una previsión; el de gastos es una autorización con efectos jurídicos.",
                "El Parlamento aprueba el presupuesto entero: la competencia no se reparte entre sus dos estados.",
                "Gastar por encima del crédito es nulo de pleno derecho; recaudar menos de lo previsto no infringe nada.",],
            },
            {
              q: "Un órgano necesita gastar más de lo autorizado en un programa. ¿Qué procede?",
              opciones: [
                "Gastar y justificar el exceso en la liquidación del ejercicio",
                "Tramitar previamente una modificación de crédito por el procedimiento que corresponda",
                "Trasladar el exceso al presupuesto del ejercicio siguiente",
                "Compensarlo con la mayor recaudación obtenida en otro concepto de ingreso",],
              correcta: 1,
              porque: [
                "El exceso sería nulo de pleno derecho, y justificarlo después no sana la nulidad ni evita la responsabilidad.",
                "Suplemento, transferencia, generación o ampliación, cada una con su órgano competente, y siempre antes de comprometer el gasto.",
                "La especialidad temporal lo impide: el crédito pertenece a su ejercicio y no se traslada por decisión del gestor.",
                "El principio de no afectación impide esa compensación: los ingresos financian el gasto en conjunto, no partida por partida.",],
            },
            {
              q: "¿Qué protege el principio de universalidad?",
              opciones: [
                "Que el presupuesto se apruebe antes del inicio del ejercicio",
                "Que ningún ingreso quede afectado a una finalidad concreta",
                "Que todos los ingresos y gastos figuren por su importe íntegro, sin compensarse entre sí",
                "Que exista un único documento presupuestario para todo el sector público",],
              correcta: 2,
              porque: [
                "Eso es una exigencia del ciclo presupuestario, no del principio de universalidad.",
                "Esa es la no afectación, que responde a un problema distinto: quién decide sobre cada euro.",
                "Un ingreso neteado contra un gasto es un gasto que el Parlamento no llega a ver ni a autorizar.",
                "Ese es el principio de unidad, que persigue evitar presupuestos paralelos.",],
            },
            {
              q: "Un ministerio ejecuta el 70 % de su crédito de inversión. ¿Qué puede concluirse?",
              opciones: [
                "Que ha incumplido el presupuesto, porque los créditos son vinculantes",
                "Que ha sido prudente y ha ahorrado un 30 % del gasto previsto",
                "Que el crédito restante se acumulará al del ejercicio siguiente",
                "Que puede haber ahorro o incapacidad de gestión, y el crédito no ejecutado se anula al cierre",],
              correcta: 3,
              porque: [
                "Los créditos limitan por arriba: no gastarlos no incumple nada, a diferencia de rebasarlos.",
                "Puede serlo, pero la baja ejecución en inversión suele responder a plazos de licitación y ejecución de obra, no a prudencia.",
                "La especialidad temporal lo impide con carácter general; la incorporación de remanentes es tasada y excepcional.",
                "El dato por sí solo no distingue las dos causas, y esa ambigüedad es justo lo que hay que tener presente al leerlo.",],
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
            { t: "Ley 47/2003, General Presupuestaria", d: "La definición del presupuesto en el artículo 32 y los principios en los artículos 26 a 31. Las modificaciones de crédito, en los artículos 50 a 60: leer sus procedimientos es la mejor manera de entender qué protege la especialidad." },
            { t: "Constitución Española, artículo 134", d: "Cuatro apartados que fijan competencia, plazo, prórroga automática y el límite a las enmiendas que aumenten gasto. Es el precepto que convierte los principios presupuestarios en reglas exigibles." },
            { t: "IGAE, Informe de ejecución y ajustes de contabilidad nacional", d: "Publica la conciliación entre el saldo presupuestario y el déficit en términos SEC, partida a partida. Es la fuente que hace tangible el puente de esta ficha." },
            { t: "Neumark y Musgrave sobre principios presupuestarios clásicos", d: "El origen doctrinal de la lista y, sobre todo, el problema que cada principio venía a resolver. Ayuda a leerlos como respuestas históricas y no como un catálogo que memorizar." },
          ],
        },
      ],
    },
  ],
};
