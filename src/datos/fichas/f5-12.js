/* Ficha 5.12 — Subvenciones, donaciones y legados. Inversiones inmobiliarias. */

export default {
  codigo: "5.12",
  titulo: "Subvenciones, donaciones y legados. Inversiones inmobiliarias",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "3 h",
  nucleo:
    "Una subvención no es un ingreso del año en que llega: se imputa al ritmo del gasto que financia, y hasta entonces vive en el patrimonio neto. Ese diferimiento no es un tecnicismo contable, es la aplicación del principio de correlación, y sin él bastaría cobrar una ayuda para convertir un mal ejercicio en uno excelente.",
  requiere: "5.06 Inmovilizado material · 5.09 Impuesto sobre beneficios",
  abre: "5.13 Patrimonio neto y operaciones de capital",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta que resuelve la norma de registro y valoración 18.ª es **cuándo una subvención se convierte en ingreso**, y la respuesta descarta la intuición más inmediata. No es cuando se concede, ni cuando se cobra: **es cuando se produce el gasto que la subvención financia**. Hasta ese momento el importe recibido permanece en el **patrimonio neto**, esperando. Es el principio de correlación entre ingresos y gastos aplicado sin concesiones.",
            "El primer paso es distinguir si la subvención es **reintegrable** o **no reintegrable**. Mientras existan condiciones pendientes de cumplir cuyo incumplimiento obligue a devolverla, la subvención es un **pasivo**: la empresa ha recibido dinero que puede tener que devolver, y eso es una deuda, no patrimonio. Solo cuando se cumplen las condiciones y el acuerdo de concesión es firme pasa a **patrimonio neto**, mediante la cuenta **130, subvenciones oficiales de capital**, dentro del grupo 1.",
            "**Desde el patrimonio neto se imputa a resultados con un criterio que depende de lo que financie.** Si financia un **activo amortizable**, se imputa **en proporción a su amortización**, mediante la cuenta **746, subvenciones de capital traspasadas al resultado del ejercicio**. Si financia **gastos concretos**, se imputa cuando se devenguen esos gastos. Si financia un **activo no amortizable** —un terreno—, se imputa cuando se enajene o se deteriore. Y si se concede sin finalidad específica, se imputa íntegra en el ejercicio en que se reconoce.",
            "**Hay un detalle que descoloca a casi todo el mundo la primera vez: la subvención se registra en patrimonio neto neta del efecto impositivo.** Como su imputación futura a resultados generará un ingreso que tributará, en el momento de reconocerla ya se registra el impuesto asociado como **pasivo por diferencia temporaria imponible**, cuenta 479. Una subvención de 100.000 € con un tipo del 25 % entra como **75.000 € en patrimonio neto y 25.000 € en la 479**. Es coherente con la norma 13.ª que estudia la ficha 5.09: lo que va a tributar después, se provisiona ahora.",
            "**Las donaciones y legados siguen exactamente el mismo régimen**, con una salvedad importante: las recibidas **de los socios o propietarios** no son ingreso en ningún momento. Son **aportaciones a los fondos propios**, porque no proceden de un tercero sino de quien ya es dueño de la empresa. Es la misma lógica que la ficha 5.13 aplica a las operaciones de capital: **lo que viene del socio nunca pasa por la cuenta de resultados**, porque no es una transacción con el mercado sino con el propietario.",
            "La segunda mitad de la ficha corresponde a las **inversiones inmobiliarias**, subgrupo 22, y su interés está en el criterio que las define. **No es la naturaleza del inmueble sino su destino**: son inversiones inmobiliarias los terrenos y construcciones que se poseen para obtener **rentas, plusvalías o ambas**, y no para uso en la producción, para fines administrativos ni para venderlos en el curso ordinario del negocio. **El mismo edificio es inmovilizado material si albergas tus oficinas, existencia si eres promotor e inversión inmobiliaria si lo alquilas a terceros.**",
            "**Que la clasificación dependa del destino obliga a reclasificar cuando el destino cambia**, y a hacerlo sin alterar el valor: el traspaso entre inmovilizado material e inversiones inmobiliarias se realiza por el valor contable, sin generar resultado. La razón es sencilla: **la empresa no ha vendido nada, solo ha cambiado de idea sobre el uso**, y una decisión interna no puede producir beneficios.",
            "Conviene señalar una **divergencia con la normativa internacional** que es de las más citadas. La NIC 40 permite valorar las inversiones inmobiliarias a **valor razonable**, con los cambios de valor llevados directamente a resultados. El **PGC no lo permite**: las valora con los mismos criterios que el inmovilizado material, es decir, a **coste histórico** menos amortización y deterioro. La diferencia es enorme en un grupo inmobiliario, y es la razón de que las cuentas individuales bajo PGC y las consolidadas bajo NIIF de una misma empresa puedan contar historias muy distintas. Es la tensión entre coste histórico y valor razonable de la ficha 5.04, aplicada al caso donde más dinero hay en juego.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Situación", "Dónde se registra", "Cuándo llega a resultados"],
          filas: [
            { nom: "Subvención reintegrable", sub: "Con condiciones pendientes.", cols: ["Pasivo: es una deuda", "Nunca, mientras siga siendo reintegrable"] },
            { nom: "Subvención de capital no reintegrable", sub: "Cuenta 130, neta de efecto fiscal.", cols: ["Patrimonio neto", "Al ritmo de la amortización del activo (cuenta 746)"] },
            { nom: "Subvención de explotación", sub: "Financia gastos concretos.", cols: ["Ingreso del grupo 74", "Cuando se devengan los gastos que financia"] },
            { nom: "Subvención sobre activo no amortizable", sub: "Un terreno.", cols: ["Patrimonio neto", "Al enajenarlo o deteriorarlo"] },
            { nom: "Donación de un socio", sub: "No viene de un tercero.", cols: ["Fondos propios, aportación", "Nunca: no es ingreso"] },
            { nom: "Inversión inmobiliaria", sub: "Inmueble para rentas o plusvalías.", cols: ["Subgrupo 22, a coste histórico", "Por la renta obtenida y al enajenarlo"] },
          ],
          nota: "La quinta fila es la que conviene retener por su lógica: **el socio no puede generar ingresos a la empresa regalándole dinero**, porque ya es su dueño. Es la misma frontera que separa las operaciones de capital de las de explotación en la ficha 5.13.",
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
            { nom: "Reconocimiento inicial", sub: "Neta del efecto impositivo.", cols: ["$PN = S\\,(1 - t)$; pasivo 479 $= S\\,t$"] },
            { nom: "Imputación anual a resultados", sub: "Al ritmo de la amortización.", cols: ["$I_a = \\dfrac{S}{n}$ si la amortización es lineal"] },
            { nom: "Proporcionalidad general", sub: "Vale para cualquier método.", cols: ["$I_a = S \\cdot \\dfrac{\\text{amortización del año}}{\\text{valor amortizable}}$"] },
            { nom: "Efecto neto en resultados", sub: "El activo pesa más que la ayuda.", cols: ["$\\Delta R = \\dfrac{S}{n} - \\dfrac{A}{n}$"] },
            { nom: "Saldo pendiente en patrimonio neto", sub: "Va desapareciendo con los años.", cols: ["$PN_k = S\\,(1-t)\\left(1 - \\dfrac{k}{n}\\right)$"] },
            { nom: "Criterio de clasificación de un inmueble", sub: "Decide el destino, no la naturaleza.", cols: ["Uso propio $\\to$ 21; renta o plusvalía $\\to$ 22; venta ordinaria $\\to$ 3"] },
          ],
          nota: "La cuarta línea es la que evita el malentendido más caro: **una subvención reduce el gasto neto del activo, pero no lo elimina**. Mientras la ayuda cubra solo una parte del coste, cada año del período de amortización sigue habiendo un gasto neto en la cuenta de resultados.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una subvención repartida en diez años",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa recibe una **subvención no reintegrable de 100.000 €** para adquirir una máquina de **250.000 €**, amortizable linealmente en **10 años**. El tipo impositivo es del **25 %**. Seguimos el recorrido completo del importe.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Momento", "Concepto", "Importe"],
          filas: [
            ["Al reconocerla", "A patrimonio neto, cuenta 130 (neta de impuesto)", "75.000 €"],
            ["Al reconocerla", "A pasivo por diferencia temporaria, cuenta 479", "25.000 €"],
            ["Cada año", "Amortización de la máquina (cuenta 681)", "−25.000 €"],
            ["Cada año", "Imputación de la subvención (cuenta 746)", "+10.000 €"],
            { celdas: ["Efecto neto anual en resultados", "10.000 − 25.000", "−15.000 €"], clase: "total" },
            { celdas: ["Al cabo de 10 años", "Saldo pendiente en patrimonio neto", "0 €"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**El año en que llegan los 100.000 € el resultado no mejora en 100.000 €: mejora en 10.000 €**, que es la parte correlacionada con la amortización de ese ejercicio. Los otros 90.000 € siguen en el patrimonio neto, visibles en el balance y en el estado de cambios en el patrimonio neto, esperando su turno. Quien busque la subvención en la cuenta de pérdidas y ganancias del año del cobro encontrará una décima parte y concluirá que falta dinero.",
            "**El efecto neto anual es de −15.000 €, y ese número es el que de verdad describe la operación.** La empresa compró un activo de 250.000 € del que otro pagó 100.000 €: su coste real es 150.000 €, repartido en diez años a razón de 15.000 € anuales. La contabilidad lo refleja exactamente, solo que por separado: el gasto completo en la 681 y la ayuda en la 746. **Una subvención abarata el activo; no lo regala.**",
            "**Sobre el efecto impositivo**, los 25.000 € de la cuenta 479 no son un impuesto que se pague ahora sino el reconocimiento de que **los 100.000 € tributarán a medida que se imputen**. Cada año, junto con los 10.000 € de ingreso, se cancelan 2.500 € de ese pasivo. Es la misma mecánica de las diferencias temporarias de la ficha 5.09 y de los ajustes del Impuesto sobre Sociedades de la ficha 17.04: **lo que va a tributar después se reconoce ahora, para que el patrimonio neto no muestre un importe que la empresa nunca llegará a conservar**.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el ejercicio que la subvención no salvó",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa cierra un ejercicio malo, con pérdidas antes de impuestos de 60.000 €. En diciembre le conceden y abonan una **subvención de 100.000 €** para financiar una nave que amortizará en veinte años. El gerente comunica al consejo que el año **se cierra con beneficio de 40.000 €**. Cuando llegan las cuentas formuladas, el resultado sigue siendo una pérdida de **55.000 €**.",
            "**No ha habido ningún error ni ninguna maniobra: la subvención se imputa al ritmo de la amortización de la nave.** En veinte años, eso son 5.000 € anuales, y como la nave apenas ha entrado en funcionamiento, la imputación del ejercicio es esa o incluso menor. Los 95.000 € restantes están en el patrimonio neto, no en la cuenta de resultados. **El patrimonio de la empresa sí ha mejorado en 100.000 €; su resultado, en 5.000 €.**",
            "**El caso ilustra por qué la norma es así y no de otro modo.** Si una subvención se imputara íntegra al recibirla, bastaría con concentrar ayudas en un ejercicio para transformar la imagen de una empresa sin que su capacidad de generar beneficios hubiera cambiado en nada. El resultado dejaría de medir **desempeño recurrente** y pasaría a depender del calendario administrativo de quien concede las ayudas. El diferimiento protege exactamente eso: **que el resultado del ejercicio siga significando algo**.",
            "**Y explica una regla de lectura de cuentas anuales que conviene incorporar.** Una empresa muy subvencionada puede tener un patrimonio neto sólido y una cuenta de resultados mediocre, y las dos cosas son ciertas a la vez. Para juzgarla hay que mirar el **estado de cambios en el patrimonio neto**, donde las subvenciones pendientes aparecen con su saldo y su ritmo de imputación, y la **memoria**, que detalla las condiciones cuyo incumplimiento las volvería reintegrables. **Quedarse en la cuenta de pérdidas y ganancias es perderse la mitad de la historia**, y en estos casos la mitad más importante.",
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
            { t: "Imputar la subvención íntegra al ejercicio en que se cobra", d: "Se imputa al ritmo del gasto que financia: si es un activo amortizable, en proporción a su amortización. Con 100.000 € para una máquina de diez años, el resultado del primer año mejora en 10.000 € y no en 100.000 €." },
            { t: "Registrar como patrimonio neto una subvención aún reintegrable", d: "Mientras existan condiciones pendientes cuyo incumplimiento obligue a devolverla, es un pasivo. Solo pasa a patrimonio neto cuando el acuerdo es firme y las condiciones se han cumplido." },
            { t: "Olvidar el efecto impositivo al reconocerla", d: "Se registra neta de impuesto: con un tipo del 25 %, una subvención de 100.000 € entra como 75.000 € en patrimonio neto y 25.000 € en la cuenta 479. Ignorarlo infla el patrimonio neto en un importe que la empresa nunca conservará." },
            { t: "Tratar como ingreso una donación recibida de un socio", d: "No lo es: es una aportación a los fondos propios. Lo que viene de quien ya es dueño de la empresa no pasa por la cuenta de resultados, igual que ocurre con las operaciones de capital de la ficha 5.13." },
            { t: "Clasificar un inmueble por su naturaleza y no por su destino", d: "El mismo edificio es inmovilizado material si alberga tus oficinas, existencia si eres promotor e inversión inmobiliaria si lo alquilas a terceros. Y si el destino cambia, se reclasifica por el valor contable, sin generar resultado." },
            { t: "Valorar inversiones inmobiliarias a valor razonable bajo PGC", d: "Lo permite la NIC 40, no el Plan General de Contabilidad, que las valora con los criterios del inmovilizado material: coste menos amortización y deterioro. La diferencia explica que las cuentas individuales y las consolidadas de un grupo inmobiliario cuenten historias distintas." },
            { t: "Concluir que una subvención hace gratuito el activo", d: "Lo abarata. Con 100.000 € de ayuda para un activo de 250.000 €, el coste real es 150.000 € y el efecto neto anual en resultados sigue siendo negativo, de 15.000 € durante los diez años de amortización." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "D.3 y D.92: dos subvenciones que el SEC no confunde",
          texto:
            "La contabilidad nacional hace la misma distinción que el PGC y con la misma finalidad, aunque con otro vocabulario. Las **subvenciones a la explotación** son **D.3**, transferencias corrientes que forman parte de la rúbrica que estudia la ficha 13.05: **se restan** de los impuestos sobre la producción para pasar de precios de mercado a **precios básicos**, y por tanto afectan al valor añadido medido. Las **subvenciones de capital** son **D.92**, transferencias de capital, y **no afectan al valor añadido ni a la formación bruta de capital fijo**: el SEC registra la inversión por su importe total y la ayuda aparte, como transferencia. Es exactamente el criterio del PGC, que activa la máquina por 250.000 € y lleva la subvención al patrimonio neto en lugar de restarla del activo. La coincidencia no es casual: ambos sistemas quieren que **el activo se vea por lo que vale y la ayuda por lo que es**, porque netear una contra otra ocultaría a la vez cuánto se invirtió y cuánto se subvencionó.",
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
              q: "Subvención de 100.000 € para una máquina de 250.000 € amortizable en 10 años, con tipo del 25 %. ¿Cómo se reconoce y qué efecto anual tiene?",
              a: "Entra como 75.000 € en patrimonio neto (cuenta 130) y 25.000 € en la cuenta 479 por el efecto impositivo. Cada año se imputan 10.000 € a resultados por la 746 y se amortizan 25.000 €, con un efecto neto de −15.000 €. La ayuda abarata el activo, no lo regala.",
            },
            {
              q: "¿Por qué la norma difiere la imputación de las subvenciones en lugar de reconocerlas al cobrarlas?",
              a: "Por el principio de correlación entre ingresos y gastos. Si se imputaran íntegras, bastaría concentrar ayudas en un ejercicio para transformar la imagen de una empresa sin que hubiera cambiado su capacidad de generar beneficios: el resultado dependería del calendario administrativo de quien concede.",
            },
            {
              q: "¿Cuándo una subvención es pasivo y cuándo patrimonio neto?",
              a: "Es pasivo mientras existan condiciones pendientes cuyo incumplimiento obligue a devolverla, porque entonces es una deuda. Pasa a patrimonio neto cuando el acuerdo de concesión es firme y las condiciones se han cumplido, registrada neta del efecto impositivo.",
            },
            {
              q: "¿Qué determina que un edificio sea inmovilizado material, existencia o inversión inmobiliaria?",
              a: "Su destino, no su naturaleza. Es inmovilizado material si se usa en la producción o para fines administrativos, existencia si se destina a la venta en el curso ordinario del negocio, e inversión inmobiliaria si se posee para obtener rentas o plusvalías. Si el destino cambia, se reclasifica por el valor contable, sin generar resultado.",
            },
            {
              q: "¿Por qué el SEC registra la inversión por su importe total y la subvención de capital aparte?",
              a: "Por la misma razón que el PGC activa la máquina por 250.000 € y lleva la ayuda al patrimonio neto: netear una contra otra ocultaría a la vez cuánto se invirtió y cuánto se subvencionó. Las de capital son D.92 y no afectan a la FBCF; las de explotación son D.3 y sí afectan al paso de precios de mercado a precios básicos.",
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
              q: "Una empresa cobra en diciembre 100.000 € de subvención para una nave amortizable en veinte años. ¿Cómo afecta al resultado del ejercicio?",
              opciones: [
                "Lo mejora en 75.000 €, una vez descontado el efecto impositivo",
                "No lo afecta en absoluto hasta que la nave se venda",
                "Lo mejora en 100.000 €, porque el cobro se ha producido",
                "Lo mejora en unos 5.000 €: se imputa al ritmo de la amortización de la nave",],
              correcta: 3,
              porque: [
                "Los 75.000 € netos son lo que entra en patrimonio neto, no lo que se imputa a resultados el primer año.",
                "La imputación al enajenar es la regla de los activos no amortizables, como los terrenos.",
                "El cobro no determina la imputación: lo hace el gasto que la subvención financia.",
                "El resto permanece en patrimonio neto, visible en el balance pero no en la cuenta de resultados.",],
            },
            {
              q: "Una subvención de 100.000 € se reconoce con un tipo impositivo del 25 %. ¿Cómo se registra inicialmente?",
              opciones: [
                "100.000 € como ingreso diferido en el pasivo corriente",
                "100.000 € en patrimonio neto, y el impuesto se reconocerá al imputarla",
                "75.000 € en patrimonio neto y 25.000 € como gasto por impuesto del ejercicio",
                "75.000 € en patrimonio neto y 25.000 € en la cuenta 479, pasivo por diferencia temporaria",],
              correcta: 3,
              porque: [
                "Solo sería pasivo si fuera reintegrable; siendo firme y sin condiciones pendientes, va a patrimonio neto.",
                "Registrar el bruto inflaría el patrimonio neto en un importe que la empresa nunca conservará.",
                "No es gasto del ejercicio: es un pasivo que se irá cancelando a medida que la subvención se impute.",
                "Es la mecánica de las diferencias temporarias: lo que va a tributar después se reconoce ahora.",],
            },
            {
              q: "Una empresa alquila a terceros un edificio que antes usaba como oficinas. ¿Qué procede?",
              opciones: [
                "Reclasificarlo a inversiones inmobiliarias por su valor razonable, reconociendo la diferencia",
                "Reclasificarlo a existencias, al haber cambiado su afectación",
                "Mantenerlo en inmovilizado material, porque la naturaleza del bien no ha cambiado",
                "Reclasificarlo a inversiones inmobiliarias por su valor contable, sin generar resultado",],
              correcta: 3,
              porque: [
                "El PGC valora las inversiones inmobiliarias a coste, no a valor razonable: eso lo permite la NIC 40.",
                "Serían existencias si se destinaran a la venta en el curso ordinario del negocio, que no es el caso.",
                "La clasificación depende del destino y no de la naturaleza, y el destino ha cambiado.",
                "La empresa no ha vendido nada: una decisión interna sobre el uso no puede producir beneficios.",],
            },
            {
              q: "Un socio dona 50.000 € a su sociedad. ¿Cómo se registra?",
              opciones: [
                "Como aportación a los fondos propios, sin pasar nunca por resultados",
                "Como subvención en patrimonio neto, imputable a resultados con el tiempo",
                "Como pasivo, hasta que se acuerde su devolución o capitalización",
                "Como ingreso del ejercicio en el grupo 74",],
              correcta: 0,
              porque: [
                "Es la misma frontera que separa las operaciones de capital de las de explotación en la ficha 5.13.",
                "El régimen de subvenciones se aplica a las recibidas de terceros, no a las de los propios socios.",
                "No hay obligación de devolución: una donación firme del socio no es una deuda.",
                "No procede de un tercero: quien ya es dueño de la empresa no puede generarle ingresos regalándole dinero.",],
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
            { t: "PGC, normas de registro y valoración 14.ª y 18.ª", d: "Subvenciones, donaciones y legados recibidos, con el criterio de imputación según lo que financien y la regla de las recibidas de socios. La 4.ª y el subgrupo 22 para inversiones inmobiliarias." },
            { t: "NIC 40, Inversiones inmobiliarias", d: "El modelo de valor razonable que el PGC no admite. Compararla con la norma española es la mejor manera de ver qué está en juego en la elección entre coste histórico y valor razonable de la ficha 5.04." },
            { t: "Consultas del ICAC sobre subvenciones", d: "Resuelven los casos límite que la norma general no cubre: subvenciones con varias finalidades, cambios de condiciones y reintegros parciales. Es donde se ve la doctrina en funcionamiento." },
            { t: "Eurostat, Manual on Government Deficit and Debt, capítulo de transferencias de capital", d: "El criterio con el que se distingue una subvención de capital de una aportación patrimonial o de un préstamo. Enlaza directamente con el tratamiento del capítulo 8 en la ficha 18.03." },
          ],
        },
      ],
    },
  ],
};
