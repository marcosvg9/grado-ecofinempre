/* Ficha 18.07 — Haciendas locales: recursos y suficiencia. */

export default {
  codigo: "18.07",
  titulo: "Haciendas locales: recursos y suficiencia",
  nivel: 2,
  bloque: "Presupuesto y financiación pública",
  tiempo: "4 h",
  nucleo:
    "El IBI sostiene a los ayuntamientos y es, a la vez, el impuesto peor recibido del sistema, no por su cuantía sino por su visibilidad: llega en un recibo, de una vez y con nombre propio. Esa asimetría entre lo que se paga y lo que se percibe —la ilusión fiscal— condiciona qué puede hacer una hacienda local mucho más que cualquier límite legal.",
  requiere: "17.09 Imposición autonómica y local · 18.05 Presupuestos autonómicos y locales",
  abre: "18.08 Control y fiscalización",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El artículo 142 de la Constitución garantiza a las haciendas locales **medios suficientes** para desempeñar sus funciones, y los nutre de **tributos propios** y de la **participación en los del Estado y de las comunidades**. Esa doble fuente define el problema entero: **los ayuntamientos tienen algún poder tributario pero no el suficiente para cubrir su gasto**, así que dependen de transferencias cuya cuantía no controlan, y a la vez soportan la impopularidad de los impuestos que sí controlan.",
            "Sus recursos se ordenan en cuatro bloques. Los **tributos propios**: los tres impuestos obligatorios —**IBI**, **IAE** e **impuesto sobre vehículos**—, los dos potestativos —**ICIO** y **plusvalía municipal**—, más tasas y contribuciones especiales, según el catálogo cerrado de la ficha 17.09. La **participación en los tributos del Estado**, que es la transferencia general. Los **ingresos patrimoniales y de derecho privado**. Y las **operaciones de crédito**, sujetas a límites de endeudamiento y a autorización cuando superan ciertos umbrales.",
            "**La participación en los tributos del Estado** funciona por dos vías que conviene distinguir. Los municipios grandes —capitales de provincia y los de más de 75.000 habitantes— participan por **cesión**: reciben un porcentaje de la recaudación territorializada de IRPF, IVA e Impuestos Especiales, más un fondo complementario. El resto participa por **variables**: población ponderada por tramos, esfuerzo fiscal e inverso de la capacidad tributaria. El segundo modelo tiene un componente de nivelación explícito; el primero vincula más el recurso a la actividad económica del municipio.",
            "**El IBI es la pieza central y merece entenderse como fenómeno político además de como tributo.** Grava la titularidad de bienes inmuebles sobre el **valor catastral**, que fija el Catastro estatal, y el ayuntamiento solo elige el tipo dentro de una horquilla. Es un impuesto sobre el patrimonio inmobiliario, con una base **inmóvil por definición** —el suelo no se deslocaliza—, lo que lo convierte en el tributo local ideal desde el punto de vista de la teoría de la imposición: **no distorsiona la localización de la actividad ni puede eludirse trasladando la base a otra jurisdicción**.",
            "**Y sin embargo es el impuesto peor recibido del sistema.** La razón no es su cuantía sino su **visibilidad**: llega en un recibo anual, con nombre propio, por un importe único, exigido por una administración cercana e identificable. La mayor parte de la carga fiscal de un hogar, en cambio, se soporta de forma **invisible**: el IRPF se retiene antes de cobrar la nómina, el IVA se paga fraccionado en cientos de compras y disuelto en el precio. Este fenómeno tiene nombre en la hacienda pública desde Puviani: **ilusión fiscal**, la divergencia sistemática entre la carga soportada y la percibida.",
            "**La consecuencia práctica es que la visibilidad de un impuesto determina su viabilidad política**, y eso condiciona el diseño de todo el sistema local. Un ayuntamiento que necesita más ingresos tiene, esencialmente, tres opciones: subir el tipo del IBI —muy visible y muy costosa políticamente—, aumentar tasas y precios públicos —menos visibles pero limitadas por el coste del servicio—, o **reclamar más transferencias**. La tercera es la única que no tiene coste electoral directo, y por eso es la que más se ejerce. La corresponsabilidad fiscal choca aquí con un incentivo muy fuerte en sentido contrario.",
            "A eso se añade el problema estructural más citado del municipalismo español: las **competencias impropias**. Los ayuntamientos vienen prestando servicios que no les corresponden legalmente —programas sociales, empleo, educación complementaria— porque son la administración más cercana y la que recibe la demanda ciudadana primero. La reforma de 2013 intentó acotarlas exigiendo informes de inexistencia de duplicidad y de sostenibilidad financiera, pero el fenómeno persiste, y significa que **una parte del gasto local no tiene financiación asignada porque formalmente no debería existir**.",
            "Cierra el cuadro un rasgo que conviene no perder de vista: **la enorme heterogeneidad del mapa local**. Hay más de ocho mil municipios, la mayoría de pequeño tamaño y sin capacidad técnica para gestionar un presupuesto complejo, y unos pocos que manejan cifras superiores a las de algunas comunidades. Las **diputaciones** existen precisamente para asistir a los primeros. Cualquier afirmación general sobre «los ayuntamientos» —su solvencia, su capacidad recaudatoria, su gasto por habitante— **describe realidades incomparables**, y el promedio suele ser el peor resumen posible de una distribución así.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Recurso", "Quién decide su cuantía", "Coste político de aumentarlo"],
          filas: [
            { nom: "IBI", sub: "Base catastral estatal, tipo municipal.", cols: ["El pleno elige el tipo; el Catastro, la base", "Máximo: recibo único, visible y atribuible"] },
            { nom: "Tasas y precios públicos", sub: "Limitados por el coste del servicio.", cols: ["El pleno, dentro del límite del coste", "Medio: afectan solo a quien usa el servicio"] },
            { nom: "ICIO y plusvalía", sub: "Potestativos y muy cíclicos.", cols: ["El pleno, dentro de horquillas", "Bajo, pero la base depende del ciclo inmobiliario"] },
            { nom: "Participación en tributos del Estado", sub: "Por cesión o por variables.", cols: ["El Estado, por ley", "Ninguno: no lo decide el ayuntamiento"] },
            { nom: "Operaciones de crédito", sub: "Con límites y autorización.", cols: ["El pleno, sujeto a límites de deuda", "Diferido: lo paga la corporación siguiente"] },
          ],
          nota: "La columna de la derecha explica el comportamiento observado mejor que la del medio: **los recursos que un ayuntamiento controla son los que más le cuesta usar, y el que no le cuesta nada no lo controla**. Ese es el nudo de la suficiencia financiera local.",
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
            { nom: "Cuota del IBI", sub: "El pleno solo mueve el tipo.", cols: ["$C = t \\cdot V_{cat}$"] },
            { nom: "Autonomía tributaria efectiva", sub: "Qué parte del ingreso decide el municipio.", cols: ["$\\beta = \\dfrac{I_{propios}}{I_{total}}$"] },
            { nom: "Carga percibida", sub: "Menor cuanto más fraccionado el pago.", cols: ["$P = \\sum_i v_i \\, T_i$, con $v_i$ la visibilidad"] },
            { nom: "Ilusión fiscal", sub: "La brecha entre soportado y percibido.", cols: ["$\\iota = \\dfrac{\\sum T_i - P}{\\sum T_i}$"] },
            { nom: "Límite de la tasa", sub: "No puede lucrar.", cols: ["$\\text{Tasa} \\leq \\text{coste del servicio}$"] },
            { nom: "Ahorro neto", sub: "Condición para poder endeudarse.", cols: ["$AN = I_{1..5} - G_{1..4} - \\text{anualidad teórica} > 0$"] },
          ],
          nota: "La tercera línea es la clave del comportamiento político: **con la misma carga total, un impuesto muy visible produce más rechazo que varios invisibles**. Por eso los sistemas fiscales tienden a apoyarse en figuras que se retienen o se disuelven en el precio, y por eso el impuesto teóricamente más eficiente resulta ser el más difícil de subir.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el impuesto más odiado no es el que más se paga",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un ayuntamiento de tamaño medio presenta la siguiente estructura de ingresos, en miles de euros, y un hogar tipo de ese municipio soporta las cargas que se indican después.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Recurso", "Importe", "Peso"],
          filas: [
            ["IBI", "18.000", "36 %"],
            ["Otros tributos propios (IAE, vehículos, ICIO, plusvalía)", "9.000", "18 %"],
            ["Tasas y precios públicos", "5.000", "10 %"],
            ["Participación en tributos del Estado", "15.000", "30 %"],
            ["Resto de ingresos", "3.000", "6 %"],
            { celdas: ["Total", "50.000", "Tributos propios y tasas: 64 %"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Carga del hogar", "Importe anual", "Cómo se paga"],
          filas: [
            ["IBI", "600 €", "Un recibo, una vez al año, con nombre propio"],
            ["IVA soportado", "1.800 €", "Fraccionado en cientos de compras, dentro del precio"],
            { celdas: ["Relación entre ambos", "El IVA triplica al IBI", "Y el IBI se percibe como el más gravoso"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El hogar paga tres veces más IVA que IBI y protesta por el IBI.** No es irracionalidad: es que la carga percibida depende de cómo se paga, no solo de cuánto. El IVA se disuelve en el precio de cada compra y nunca aparece como una decisión de nadie; el IBI llega en un sobre, con un importe único, con el nombre del ayuntamiento y en una fecha concreta. **La visibilidad convierte una carga menor en un agravio mayor.**",
            "**Para el ayuntamiento la consecuencia es directa.** El 64 % de sus ingresos son tributos propios y tasas, es decir, decisiones suyas con coste político; el 30 % es una transferencia que no decide y que no le cuesta nada reclamar. Ante una necesidad de ingresos adicionales, **la vía menos costosa es siempre pedir más participación**, aunque la vía técnicamente mejor sea el IBI, que es un impuesto sobre una base inmóvil que no distorsiona la localización de nada.",
            "**Este es uno de los pocos casos en que la teoría de la imposición y la práctica política apuntan en direcciones opuestas de forma tan limpia.** Todo lo que hace del IBI un buen impuesto local —base inmóvil, no eludible, vinculada al beneficio de los servicios municipales que capitaliza en el valor del suelo— **no le sirve de nada frente a lo único que decide su viabilidad: que se ve**. Y de ahí que las propuestas de reforma de la financiación local propongan a menudo reforzar figuras menos visibles antes que subir el tipo del impuesto que mejor funciona.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: las competencias impropias",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un ayuntamiento destina cada año una parte de su presupuesto a un programa de refuerzo escolar, a ayudas de emergencia social y a un servicio de orientación laboral. **Ninguna de esas tres materias es competencia municipal**: educación y servicios sociales son autonómicas y las políticas activas de empleo también. El ayuntamiento las presta porque **es la administración a la que la gente acude primero**, y porque no hacerlo tiene un coste inmediato y visible.",
            "**El problema no es que ese gasto sea inútil: es que no tiene financiación asignada.** El sistema de financiación local dimensiona los recursos en función de las competencias legalmente atribuidas, así que todo lo que se presta fuera de ese perímetro se paga detrayendo recursos de lo que sí es competencia propia. Es un gasto real, recurrente y sin ingreso correlativo, y explica buena parte de la tensión financiera de muchos consistorios que formalmente cumplen todas las reglas.",
            "**La reforma de 2013 intentó cerrarlo por la vía formal**, exigiendo para estas actuaciones informes previos de **inexistencia de duplicidad** y de **sostenibilidad financiera**. El efecto ha sido limitado, y la razón es instructiva: el requisito ataca el procedimiento y no el incentivo. Mientras la demanda ciudadana siga llegando al ayuntamiento y este siga siendo el que responde políticamente por no atenderla, **el gasto encontrará una vía**, con informe o mediante una subvención finalista negociada con otra administración.",
            "**La lección general es sobre el diseño de sistemas multinivel.** Cuando la **proximidad política** y la **atribución competencial** no coinciden, el nivel más cercano acaba asumiendo gasto que no le corresponde, y el sistema de financiación —que reparte según competencias formales— no lo reconoce. Las soluciones posibles son tres, todas costosas: **clarificar competencias** de verdad, **financiar lo que efectivamente se presta**, o **aceptar y regular** que el nivel local preste servicios ajenos con financiación específica. No decidir entre ellas es lo que produce la situación actual, que combina lo peor de las tres.",
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
            { t: "Medir la carga fiscal por lo que se percibe", d: "La visibilidad de un impuesto y su cuantía son independientes. En el ejemplo, el hogar paga tres veces más IVA que IBI y percibe el IBI como más gravoso, porque llega en un recibo único, atribuible y con fecha. Es la ilusión fiscal, y condiciona qué reformas son viables." },
            { t: "Creer que el ayuntamiento fija la base del IBI", d: "El valor catastral lo determina el Catastro, que es estatal; el pleno solo elige el tipo dentro de una horquilla. Por eso una revisión catastral puede disparar el recibo sin que la corporación haya aprobado nada, como muestra la ficha 17.09." },
            { t: "Suponer que todos los municipios participan igual en los tributos del Estado", d: "Los grandes participan por cesión de un porcentaje territorializado de IRPF, IVA e Impuestos Especiales; el resto, por variables de población, esfuerzo fiscal e inverso de la capacidad tributaria. Son dos modelos con lógicas distintas." },
            { t: "Tratar el gasto en competencias impropias como una irregularidad", d: "Es gasto real que responde a demanda real, prestado por el nivel al que la gente acude primero. El problema es que el sistema de financiación reparte según competencias formales y no lo reconoce, de modo que se paga detrayendo recursos de lo propio." },
            { t: "Generalizar sobre «los ayuntamientos»", d: "Hay más de ocho mil municipios, desde entidades sin capacidad técnica para formar un presupuesto hasta consistorios que manejan cifras superiores a las de alguna comunidad. El promedio es el peor resumen posible de una distribución tan desigual." },
            { t: "Fijar una tasa por encima del coste del servicio", d: "La tasa es un tributo y no puede lucrar: su importe está topado por el coste. Superarlo es causa habitual de anulación de ordenanzas fiscales, y la vía correcta sería un precio público, que exige que el servicio sea voluntario y concurrente." },
            { t: "Olvidar que el ICIO y la plusvalía son muy cíclicos", d: "Su base depende de la actividad inmobiliaria, así que se hunden justo cuando más se necesitan. Presupuestar gasto estable sobre ellos es el error que dejó a muchos consistorios sin margen tras 2008." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "El IBI es D.59 y no D.2, y esa diferencia cambia dónde aparece",
          texto:
            "En el SEC la clasificación de un tributo no depende de quién lo cobra sino de **sobre qué recae y quién lo soporta**, y el IBI es un buen caso para comprobarlo. Cuando lo paga un **hogar** por su vivienda, es **D.59, otros impuestos corrientes** sobre el patrimonio, dentro de la rúbrica D.5 de la ficha 13.06, y por tanto **no afecta al PIB a precios de mercado**. Cuando lo paga una **empresa** por un inmueble afecto a su actividad, es **D.29, otros impuestos sobre la producción**, dentro de D.2, y entra en la diferencia entre precios básicos y precios de mercado que estudia la ficha 13.05. **El mismo tributo, con la misma norma y el mismo tipo, se registra en dos rúbricas distintas según quién sea el titular del inmueble.** Es la aplicación más limpia del principio que la ficha 17.01 enuncia: el SEC clasifica por naturaleza económica y no por el nombre que le da el legislador nacional, y por eso comparar «impuestos sobre la propiedad» entre países exige mirar la clasificación funcional y no el rótulo de cada figura.",
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
              q: "Un hogar paga 600 € de IBI y 1.800 € de IVA al año, y percibe el IBI como el impuesto más gravoso. ¿Por qué?",
              a: "Por ilusión fiscal: la carga percibida depende de cómo se paga, no solo de cuánto. El IBI llega en un recibo único, atribuible y con fecha; el IVA se fracciona en cientos de compras y se disuelve en el precio. La visibilidad convierte una carga tres veces menor en un agravio mayor.",
            },
            {
              q: "¿Por qué el IBI es, en teoría, el impuesto local ideal?",
              a: "Porque grava una base inmóvil por definición: el suelo no se deslocaliza, así que el impuesto no distorsiona la localización de la actividad ni puede eludirse trasladando la base a otra jurisdicción. Además capitaliza en el valor del suelo el beneficio de los servicios municipales.",
            },
            {
              q: "Si el 64 % de los ingresos de un ayuntamiento son tributos propios y tasas y el 30 % una transferencia, ¿por qué tiende a reclamar más transferencia antes que subir el IBI?",
              a: "Porque los recursos que controla son los que tienen coste político y el que no controla no le cuesta nada reclamar. La corresponsabilidad fiscal choca con un incentivo muy fuerte en sentido contrario, y por eso la vía menos costosa acaba siendo la más ejercida.",
            },
            {
              q: "¿Qué son las competencias impropias y qué problema financiero generan?",
              a: "Servicios que los ayuntamientos prestan sin tenerlos legalmente atribuidos —refuerzo escolar, ayudas sociales, orientación laboral— porque son la administración a la que la gente acude primero. Generan gasto real y recurrente sin financiación asignada, porque el sistema reparte recursos según competencias formales.",
            },
            {
              q: "¿Por qué el IBI se clasifica en el SEC en dos rúbricas distintas?",
              a: "Porque el SEC clasifica por naturaleza económica y no por el nombre del tributo. Pagado por un hogar es D.59, otros impuestos corrientes, y no afecta al PIB a precios de mercado; pagado por una empresa sobre un inmueble afecto es D.29, impuesto sobre la producción, y sí entra en la diferencia entre precios básicos y de mercado.",
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
              q: "¿Qué explica que el IBI genere más rechazo que impuestos de mayor cuantía?",
              opciones: [
                "Que se exige aunque el inmueble no genere renta alguna",
                "Que su base la fija el Estado y no el ayuntamiento que lo cobra",
                "Su visibilidad: recibo único, importe atribuible y administración identificable",
                "Que su tipo es superior al de la mayoría de figuras del sistema",],
              correcta: 2,
              porque: [
                "Es cierto que grava titularidad y no renta, pero eso no es lo que explica la diferencia de percepción.",
                "El reparto de competencias sobre base y tipo genera confusión política, pero no es la causa del rechazo.",
                "Es la ilusión fiscal: la carga percibida depende de cómo se paga, no solo de cuánto.",
                "El tipo es bajo y la cuantía menor que la del IVA soportado por el mismo hogar.",],
            },
            {
              q: "¿Por qué la teoría de la imposición considera al IBI un buen impuesto local?",
              opciones: [
                "Porque su base es inmóvil y no puede deslocalizarse a otra jurisdicción",
                "Porque su recaudación es estable frente al ciclo inmobiliario",
                "Porque es progresivo respecto de la renta del contribuyente",
                "Porque su gestión corresponde íntegramente al municipio que lo cobra",],
              correcta: 0,
              porque: [
                "El suelo no se traslada, así que el impuesto no distorsiona la localización de la actividad ni se elude cambiando de municipio.",
                "Su recaudación sí es estable, pero eso lo comparte con otras figuras y no es el argumento decisivo.",
                "Grava titularidad de inmuebles, no renta, y su relación con la capacidad económica es indirecta.",
                "No es así: la base catastral la fija el Catastro estatal y el municipio solo elige el tipo.",],
            },
            {
              q: "Un ayuntamiento financia un programa de refuerzo escolar. ¿Cómo se califica ese gasto?",
              opciones: [
                "Como competencia impropia: gasto real sin financiación asignada en el sistema",
                "Como contribución especial, al beneficiar a un colectivo determinado",
                "Como gasto en competencia delegada, financiado por la comunidad autónoma",
                "Como gasto irregular, que la intervención debe reparar",],
              correcta: 0,
              porque: [
                "El sistema reparte recursos por competencias formales, así que este gasto se paga detrayendo de lo propio.",
                "La contribución especial financia obras que benefician a propietarios concretos, no un servicio de este tipo.",
                "La delegación exige un acuerdo formal con financiación; aquí el ayuntamiento actúa por proximidad, sin atribución.",
                "No es irregular en sí: la reforma de 2013 lo condicionó a informes previos, no lo prohibió.",],
            },
            {
              q: "¿Cómo participan en los tributos del Estado los municipios de menos de 75.000 habitantes que no son capital?",
              opciones: [
                "Mediante convenios bilaterales negociados con el Ministerio de Hacienda",
                "Por cesión de un porcentaje territorializado de IRPF, IVA e Impuestos Especiales",
                "Por variables: población ponderada, esfuerzo fiscal e inverso de la capacidad tributaria",
                "A través de las diputaciones provinciales, que reparten a su criterio",],
              correcta: 2,
              porque: [
                "No hay convenios bilaterales: el reparto está fijado por ley con fórmula objetiva.",
                "La cesión territorializada es el modelo de las capitales y de los municipios de más de 75.000 habitantes.",
                "Es el modelo con componente de nivelación explícito, frente al de cesión, que vincula el recurso a la actividad del municipio.",
                "Las diputaciones asisten técnicamente a los pequeños municipios, pero no reparten esta participación a su criterio.",],
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
            { t: "RDLeg 2/2004, texto refundido de la Ley de Haciendas Locales", d: "Los recursos de los municipios en el título II, el IBI en los artículos 60 a 77 y la participación en los tributos del Estado en los artículos 111 a 126, con los dos modelos de cesión y variables." },
            { t: "Ley 27/2013 de racionalización y sostenibilidad de la Administración Local", d: "La reforma que intentó acotar las competencias impropias mediante informes de duplicidad y sostenibilidad. Leerla junto a sus resultados es un buen ejercicio sobre los límites de atacar un incentivo por la vía del procedimiento." },
            { t: "Puviani, Teoría de la ilusión financiera", d: "El origen del concepto que explica el caso práctico: por qué los sistemas fiscales tienden a apoyarse en figuras que se retienen o se disuelven en el precio, y qué consecuencias tiene para la rendición de cuentas." },
            { t: "Ministerio de Hacienda, liquidación de presupuestos de entidades locales", d: "Datos por municipio de ingresos y gastos por capítulo. La fuente para comprobar la enorme heterogeneidad del mapa local y lo poco que informa el promedio." },
          ],
        },
      ],
    },
  ],
};
