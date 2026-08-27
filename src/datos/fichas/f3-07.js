/* Ficha 3.07 — Dinero, bancos y creacion de liquidez. */

export default {
  codigo: "3.07",
  titulo: "Dinero, bancos y creación de liquidez",
  nivel: 2,
  bloque: "Macroeconomía",
  tiempo: "4 h",
  nucleo:
    "El dinero bancario nace del crédito. El multiplicador monetario es una simplificación con fecha de caducidad: describe una relación contable entre agregados, no el mecanismo por el que se crea el dinero, y confundir ambas cosas llevó a predicciones espectacularmente erróneas tras 2008.",
  requiere: "3.05 Modelo IS-LM · 3.02 Inflación",
  abre: "3.08 Política monetaria · 8.01 Bancos e intermediación · 3.10 Economía abierta",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El dinero se define por lo que hace, no por lo que es. Cumple tres funciones: **medio de pago** aceptado con generalidad, **unidad de cuenta** en la que se expresan precios y deudas, y **depósito de valor** que permite trasladar poder de compra al futuro. La tercera la cumplen también otros activos, a menudo mejor; lo que distingue al dinero es la primera, y de ahí que el rasgo decisivo sea la **liquidez**: la capacidad de convertirse en medio de pago sin pérdida de valor ni demora. Por eso no hay una frontera nítida entre lo que es dinero y lo que no, sino una **gradación**, que es lo que recogen los agregados **M1, M2 y M3**.",
            "La pieza que suele sorprender es que **la mayor parte del dinero de una economía moderna no la emite el banco central: la crean los bancos comerciales al conceder crédito**. Cuando un banco presta, no entrega monedas de una caja fuerte: anota simultáneamente un préstamo en su activo y un depósito en su pasivo. Ese depósito **es dinero nuevo**, sirve para pagar y no existía un segundo antes. La imagen del banco como intermediario que recoge ahorro y lo presta describe mal el mecanismo: **el préstamo crea el depósito**, no al revés. El banco central controla la **base monetaria** —efectivo y reservas—, que es una magnitud mucho menor.",
            "El **multiplicador monetario** es la forma tradicional de relacionar ambas cosas. Si los bancos mantienen una fracción de los depósitos como reservas y el público mantiene una proporción de su dinero en efectivo, la cantidad de dinero acaba siendo un múltiplo de la base. La fórmula es correcta **como identidad contable ex post**, y conviene aprenderla porque ordena las relaciones entre agregados. Lo que no debe hacerse es leerla como un **mecanismo causal**, en el que el banco central inyectaría reservas y los bancos las multiplicarían mecánicamente prestando.",
            "La razón es que **la limitación efectiva al crédito bancario casi nunca son las reservas**. Un banco que ve una oportunidad de préstamo rentable la concede y consigue después las reservas necesarias en el mercado interbancario o del propio banco central, que las suministra para mantener su tipo de interés objetivo. Lo que realmente limita el crédito es **la demanda solvente de préstamos, el capital regulatorio del banco y su percepción del riesgo**. De ahí que el banco central controle el precio del dinero —el tipo de interés— con mucha más eficacia que su cantidad, y que la política monetaria se formule en tipos y no en agregados.",
            "La comprobación empírica llegó de la forma más contundente posible. Tras 2008, los bancos centrales multiplicaron la base monetaria mediante compras masivas de activos, y quienes leían el multiplicador como mecanismo predijeron una explosión del dinero y de los precios. **No ocurrió**: las reservas se acumularon en el banco central sin transformarse en crédito, porque no había demanda solvente ni apetito de riesgo, y el multiplicador observado se desplomó. No es que la fórmula fallara: es que **nunca fue una relación estable**, sino el cociente entre dos magnitudes que se mueven por motivos distintos.",
            "Con esa cautela, la relación entre dinero y precios sigue siendo importante a largo plazo. La **teoría cuantitativa** parte de una identidad —el gasto total es el dinero multiplicado por su velocidad de circulación— y se convierte en teoría al suponer que la velocidad es estable y la producción viene dada por el lado de la oferta. Bajo esos supuestos, **el crecimiento del dinero por encima del de la producción se traduce en inflación**. Es una descripción razonable de los episodios de inflación muy alta y sostenida, donde siempre hay financiación monetaria detrás; y es una guía pobre a corto plazo, porque **la velocidad no es estable en absoluto**, lo que explica por qué los bancos centrales abandonaron los objetivos de agregados monetarios.",
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
            { nom: "Base monetaria", sub: "Lo único que el banco central controla directamente.", cols: ["B = Efectivo en circulación + Reservas"] },
            { nom: "Oferta monetaria", sub: "Mucho mayor que la base.", cols: ["M = Efectivo + Depósitos"] },
            { nom: "Agregados", sub: "Gradación por liquidez, no categorías estancas.", cols: ["M1 ⊂ M2 ⊂ M3"] },
            { nom: "Coeficiente de reservas", sub: "Regulatorio y voluntario.", cols: ["$r = \\dfrac{\\text{Reservas}}{\\text{Depósitos}}$"] },
            { nom: "Preferencia por el efectivo", sub: "Conducta del público, no decisión bancaria.", cols: ["$c = \\dfrac{\\text{Efectivo}}{\\text{Depósitos}}$"] },
            { nom: "Multiplicador monetario", sub: "Identidad contable, no mecanismo.", cols: ["$m = \\dfrac{1+c}{c+r}$"] },
            { nom: "Creación de dinero por crédito", sub: "El préstamo crea el depósito.", cols: ["Activo: préstamo · Pasivo: depósito"] },
            { nom: "Ecuación cuantitativa", sub: "Identidad; teoría al fijar V e Y.", cols: ["$M \\cdot V = P \\cdot Y$"] },
            { nom: "En tasas de variación", sub: "Válida a largo plazo y con V estable.", cols: ["$g_M + g_V = \\pi + g_Y$"] },
            { nom: "Velocidad de circulación", sub: "El supuesto que falla a corto plazo.", cols: ["$V = \\dfrac{PY}{M}$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la base, el multiplicador y su desplome",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea una economía en la que los bancos mantienen un **coeficiente de reservas del 10 %** y el público conserva en efectivo el equivalente al **20 % de sus depósitos**. El multiplicador es (1 + 0,2) / (0,2 + 0,1) = **4**. Con una base monetaria de **100**, la cantidad de dinero resultante es **400**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Base monetaria", "Emitida por el banco central", "100,0"],
            ["Efectivo en manos del público", "M × c / (1 + c)", "66,7"],
            ["Reservas bancarias", "Depósitos × r", "33,3"],
            ["Depósitos", "M / (1 + c)", "333,3"],
            { celdas: ["Oferta monetaria total", "Efectivo + Depósitos", "400,0"], clase: "total" },
          ],
          nota: "Compruébese que la base cuadra: 66,7 de efectivo más 33,3 de reservas suman exactamente 100. Y obsérvese la magnitud relevante: **de los 400 de dinero en circulación, 333,3 son depósitos creados por los bancos al prestar**, y solo 66,7 son billetes emitidos por el banco central. La inmensa mayoría del dinero de una economía moderna **es un apunte en el pasivo de un banco comercial**.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Periodo", y: "Índice, inicio = 100" },
          dominio: { x: [1, 12], y: [80, 420] },
          marcasX: [1, 4, 7, 10, 12],
          marcasY: [100, 200, 300, 400],
          series: [
            {
              nombre: "Base monetaria",
              color: "alerta",
              etiquetaEn: [8.5, 355],
              puntos: [[1, 100], [2, 105], [3, 140], [4, 200], [5, 260], [6, 300], [7, 320], [8, 340], [9, 360], [10, 380], [11, 390], [12, 395]],
            },
            {
              nombre: "Oferta monetaria (M3)",
              color: "acento",
              etiquetaEn: [8.5, 135],
              puntos: [[1, 100], [2, 103], [3, 108], [4, 112], [5, 116], [6, 120], [7, 125], [8, 130], [9, 136], [10, 142], [11, 148], [12, 153]],
            },
          ],
          nota: "Perfil estilizado de lo ocurrido tras las compras masivas de activos. **La base monetaria casi se cuadruplica y la cantidad de dinero crece poco más de un 50 %.** El multiplicador implícito, que era 4 al principio, cae por debajo de 1,6: no porque la fórmula esté mal, sino porque **nunca describió un mecanismo**. Las reservas creadas se quedaron depositadas en el banco central en lugar de convertirse en crédito, porque lo que faltaba no eran reservas sino demanda solvente y disposición a asumir riesgo. Quien leyó el multiplicador como una ley predijo una inflación que no llegó.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Base", "Multiplicador", "Oferta monetaria"],
          filas: [
            ["Situación normal", "100", "4,00", "400"],
            ["Los bancos elevan reservas al 30 %", "100", "2,40", "240"],
            ["El público retira efectivo: c = 0,5", "100", "2,50", "250"],
            { celdas: ["Base ×4 con reservas al 50 %", "400", "1,71", "686"], clase: "total" },
          ],
          nota: "Las tres primeras filas muestran que **el multiplicador depende de conductas que el banco central no controla**: la prudencia de los bancos y la preferencia del público por el efectivo. Las dos se disparan justamente en las crisis, que es cuando el banco central querría que el crédito fluyera. La última fila resume el episodio anterior: **cuadruplicar la base con un multiplicador hundido da mucho menos dinero del que la aritmética ingenua sugiere**.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué pasa exactamente cuando un banco concede un préstamo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La descripción habitual del negocio bancario —captar depósitos y prestarlos— es tan intuitiva como engañosa, y sustituirla por la correcta cambia bastantes conclusiones de política. Vale la pena seguir la operación apunte a apunte.",
            "**El momento de la concesión.** Un banco aprueba un préstamo de 100.000 a un cliente. En ese instante anota en su **activo** un derecho de cobro por 100.000 y en su **pasivo** un depósito a favor del cliente por el mismo importe. No ha salido dinero de ninguna parte, no ha necesitado que nadie depositara antes: **el balance del banco se ha expandido por los dos lados a la vez**, y en la economía hay 100.000 euros más de dinero que hace un minuto. Es la contabilidad por partida doble de la ficha 5.01 aplicada a la creación monetaria.",
            "**Qué limita entonces al banco.** Si no son los depósitos previos, algo tiene que impedir que preste sin límite, y son tres cosas. El **capital regulatorio**: cada préstamo consume recursos propios en función de su riesgo, y el banco no puede crecer más allá de lo que su capital permite, que es el argumento de la ficha 8.01. La **liquidez**: cuando el cliente gasta ese depósito, el dinero se va probablemente a otro banco, y el primero debe liquidar la diferencia con reservas, que consigue en el interbancario o del banco central. Y la **rentabilidad ajustada al riesgo**: presta si espera cobrar. Ninguna de las tres es la existencia previa de un ahorro.",
            "**Por qué esto cambia la lectura de la política monetaria.** Si las reservas no son la restricción operativa, inyectarlas no obliga a nadie a prestar. El banco central influye sobre el crédito **por el precio**: fijando el tipo al que los bancos se financian, altera la rentabilidad de los préstamos y con ella su volumen. De ahí que las decisiones se anuncien como niveles de tipos y no como cantidades de dinero, y de ahí que cuando el tipo llega a su límite inferior haya que inventar otros instrumentos, como veía la ficha 3.05.",
            "**Y por qué esto no significa que el crédito sea ilimitado.** Es un malentendido frecuente en sentido contrario. Que el dinero se cree contablemente no implica que se pueda crear sin consecuencias: un crédito excesivo produce inflación, burbujas de precios de activos y, cuando los préstamos no se devuelven, **destrucción de dinero y crisis bancarias**. El proceso también funciona a la inversa: cuando un préstamo se amortiza, el depósito correspondiente desaparece y **el dinero se destruye**. Una economía en la que se amortiza más crédito del que se concede ve contraerse su masa monetaria sin que nadie lo haya decidido, que es una de las dinámicas más peligrosas de una recesión de balances.",
            "**La conclusión.** El banco no es un almacén de dinero ajeno sino un creador de medios de pago sujeto a restricciones de capital, liquidez y riesgo. Esa descripción, que hoy suscriben explícitamente los propios bancos centrales en sus publicaciones divulgativas, explica mejor tanto la expansión del crédito en los años de bonanza como su parálisis posterior, y hace comprensible por qué inundar de reservas el sistema no bastó para reactivarlo.",
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
            { t: "Creer que los bancos prestan el dinero que les han depositado", d: "El préstamo crea el depósito: el banco anota simultáneamente un activo y un pasivo, y el dinero aparece en ese momento. Lo que limita su capacidad de prestar es el capital regulatorio, la liquidez y el riesgo, no un ahorro previo que tuviera almacenado." },
            { t: "Leer el multiplicador monetario como un mecanismo", d: "Es una identidad contable ex post entre dos agregados. No describe una secuencia en la que el banco central inyecta reservas y los bancos las multiplican. Tras 2008 la base se multiplicó y la oferta monetaria apenas se movió, precisamente porque no era un mecanismo." },
            { t: "Confundir base monetaria con oferta monetaria", d: "La base es efectivo más reservas y la controla el banco central; la oferta monetaria incluye los depósitos creados por la banca y es varias veces mayor. En el ejemplo, 100 de base frente a 400 de dinero, de los cuales 333 son depósitos bancarios." },
            { t: "Predecir inflación automáticamente tras una expansión de la base", d: "Solo la habría si esa base se convirtiera en crédito y en gasto. Si las reservas se quedan depositadas en el banco central porque no hay demanda solvente, no hay presión sobre los precios. La relación entre dinero y precios es de largo plazo y exige que la velocidad sea estable." },
            { t: "Suponer que la velocidad de circulación es constante", d: "Es el supuesto que convierte una identidad en teoría, y no se cumple a corto plazo: la velocidad cae en las crisis y se recupera después. Por eso los bancos centrales abandonaron los objetivos de agregados monetarios y pasaron a fijar tipos." },
            { t: "Deducir que el crédito puede crecer sin límite", d: "Que el dinero se cree contablemente no lo hace inocuo. Un crédito excesivo alimenta inflación y burbujas, y su impago destruye dinero y provoca crisis bancarias. Las restricciones son reales, solo que no son las que la imagen del intermediario sugiere." },
            { t: "Olvidar que amortizar un préstamo destruye dinero", d: "El proceso es simétrico: al devolver el crédito desaparece el depósito correspondiente. Una economía que amortiza más de lo que toma prestado ve contraerse su masa monetaria sin que nadie lo decida, lo que agrava las recesiones de balances." },
            { t: "Tratar los agregados como categorías estancas", d: "M1, M2 y M3 son una gradación por liquidez, no cajas separadas. Dónde se ponga la frontera de lo que cuenta como dinero es una convención estadística, y por eso la pregunta «cuánto dinero hay» admite varias respuestas correctas a la vez." },
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
            "El dinero no aparece en las cuentas no financieras, pero sí ocupa un lugar preciso en las financieras, y esa separación explica bastantes confusiones.",
          ],
          lista: [
            "Los agregados monetarios no son parte de la contabilidad nacional sino de las **estadísticas monetarias y financieras** del banco central. El **M3** de la zona euro incluye efectivo, depósitos a la vista, depósitos a plazo hasta dos años y algunos instrumentos negociables, y su definición es una convención estadística revisable.",
            "En las **cuentas financieras** del SEC, el dinero aparece como instrumento: efectivo y depósitos (F.2) en el activo de quien lo tiene y en el pasivo de las instituciones financieras (S.12). Que un depósito sea a la vez activo de uno y pasivo de otro es exactamente lo que muestra el caso práctico.",
            "El **crédito no es producción**: conceder un préstamo no genera PIB. Lo que genera valor añadido es el **servicio de intermediación**, medido en el SEC mediante los servicios de intermediación financiera medidos indirectamente (SIFMI), calculados a partir del diferencial entre tipos de activo y de pasivo. Es una de las estimaciones más discutidas del sistema.",
            "La **posición financiera neta** de cada sector —activos financieros menos pasivos— es donde se ve la acumulación de deuda que el crédito genera, y es la magnitud que hizo falta vigilar tras 2008. Se relaciona con los saldos sectoriales de la ficha 1.06.",
            "Y el **señoreaje** —el rendimiento que obtiene el emisor por poner dinero en circulación— se registra en las cuentas del banco central y acaba transferido al Estado, que es la contrapartida contable del impuesto inflacionario de la ficha 3.02.",
          ],
          cierre:
            "El punto que más rendimiento da es el tercero: prestar no produce nada en términos de PIB, y sin embargo el sector financiero aporta valor añadido. Entender que ese valor es el servicio y no el importe del préstamo evita confusiones muy extendidas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Con un coeficiente de reservas del 10 % y c = 0,2, ¿cuánto dinero soporta una base de 100?", a: "400. El multiplicador es (1 + 0,2) / (0,2 + 0,1) = 4. De ese total, 66,7 son efectivo en manos del público y 333,3 son depósitos bancarios; las reservas de 33,3 más el efectivo suman exactamente la base de 100." },
            { q: "¿Qué apuntes hace un banco al conceder un préstamo de 100.000?", a: "Un activo por el derecho de cobro y un pasivo por el depósito a favor del cliente, ambos de 100.000. El balance se expande por los dos lados y aparece dinero nuevo en la economía. No ha necesitado que nadie depositara previamente: el préstamo crea el depósito." },
            { q: "La base monetaria se multiplica por cuatro y la oferta monetaria sube un 50 %. ¿Falla el multiplicador?", a: "No falla: nunca fue un mecanismo, sino un cociente entre dos magnitudes que se mueven por motivos distintos. Las reservas creadas se quedaron en el banco central porque lo que faltaba no eran reservas sino demanda solvente de crédito y disposición a asumir riesgo." },
            { q: "Si no son las reservas, ¿qué limita el crédito bancario?", a: "El capital regulatorio, que cada préstamo consume en función de su riesgo; la liquidez necesaria para liquidar los pagos cuando el depósito se gasta; y la rentabilidad ajustada al riesgo, es decir, la expectativa de cobrar. Ninguna de las tres es un ahorro previamente captado." },
            { q: "¿Por qué la ecuación cuantitativa no sirve para predecir la inflación a corto plazo?", a: "Porque es una identidad que solo se convierte en teoría si la velocidad de circulación es estable, y no lo es: cae en las crisis y se recupera después. A largo plazo y en episodios de inflación muy alta la relación entre dinero y precios sí es sólida." },
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
              q: "¿De dónde sale el dinero que un banco presta?",
              opciones: [
                "De los depósitos que le han confiado sus clientes",
                "El préstamo crea el depósito: el banco anota a la vez un activo y un pasivo",
                "De las reservas que le entrega el banco central",
                "Del capital aportado por sus accionistas",
              ],
              correcta: 1,
              porque: [
                "Es la imagen del banco como intermediario que guarda y presta lo ajeno, y no describe lo que ocurre en el balance cuando se concede un crédito.",
                "El dinero aparece en ese momento. Lo que limita la capacidad de prestar no es el ahorro previo sino el capital regulatorio, la liquidez y, sobre todo, que haya demanda solvente.",
                "Las reservas permiten liquidar pagos entre bancos, pero el banco central las suministra para sostener el tipo, no como materia prima del crédito.",
                "El capital absorbe pérdidas y limita cuánto se puede prestar, pero no es el origen contable del depósito creado.",
              ],
            },
            {
              q: "¿Qué es el multiplicador monetario?",
              opciones: [
                "El mecanismo por el que el banco central inyecta reservas y los bancos las multiplican",
                "Una identidad contable ex post entre dos agregados, no una secuencia causal",
                "El límite legal de crédito que puede conceder un banco",
                "La relación entre el tipo de intervención y el tipo del crédito",
              ],
              correcta: 1,
              porque: [
                "Esa lectura secuencial es la que enseñan muchos manuales y la que induce a esperar inflación en cuanto crece la base monetaria.",
                "$m = (1+c)/(c+r)$ relaciona base y oferta monetaria después de que todo haya ocurrido. Tratarla como un mecanismo lleva a predicciones que no se cumplen.",
                "Los límites al crédito los fijan el capital regulatorio y la liquidez, no esta expresión.",
                "Esa es la transmisión de tipos, que es otro asunto distinto de la relación entre agregados.",
              ],
            },
            {
              q: "El banco central multiplica por cinco la base monetaria y la inflación no se mueve. ¿Cómo se explica?",
              opciones: [
                "Con retardo: la inflación llegará más tarde",
                "Si las reservas se quedan depositadas en el banco central por falta de demanda solvente, no hay crédito nuevo ni gasto nuevo",
                "Porque la velocidad de circulación es constante y compensa",
                "Porque la base monetaria no forma parte de la oferta monetaria",
              ],
              correcta: 1,
              porque: [
                "El retardo existe, pero no explica una ausencia de efecto sostenida durante años, que es lo observado tras 2008.",
                "La base solo se convierte en dinero cuando alimenta crédito. Si se queda parada en el balance del banco central, no llega a la economía real.",
                "Es al contrario: la velocidad no es constante y precisamente cae en las crisis, lo que amortigua el efecto de la expansión.",
                "La base sí forma parte de la oferta monetaria —el efectivo lo está— pero eso no es lo que explica la ausencia de inflación.",
              ],
            },
            {
              q: "Los hogares amortizan más préstamos de los que suscriben. ¿Qué le pasa a la cantidad de dinero?",
              opciones: [
                "No cambia: el dinero devuelto vuelve a prestarse",
                "Se contrae: al devolver el crédito desaparece el depósito correspondiente",
                "Aumenta, porque los bancos disponen de más fondos",
                "Depende de lo que haga el banco central con la base monetaria",
              ],
              correcta: 1,
              porque: [
                "Volvería a prestarse si el banco fuera un intermediario de fondos ajenos. Pero la amortización cancela a la vez el activo y el pasivo.",
                "El proceso es simétrico al de creación: si el crédito crea depósitos, devolverlo los destruye. Una economía desapalancándose ve contraerse su masa monetaria.",
                "El banco no gana fondos: su balance encoge por los dos lados a la vez.",
                "El banco central puede compensarlo, pero el efecto directo de la amortización es contractivo con independencia de lo que haga.",
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
            { ref: "Mishkin, Moneda, banca y mercados financieros", nota: "el manual de referencia: funciones del dinero, creación de depósitos y multiplicador con todas sus cautelas." },
            { ref: "McLeay, Radia y Thomas, «Money Creation in the Modern Economy»", nota: "el artículo del Banco de Inglaterra que fundamenta el caso práctico; corto, oficial y sin ambigüedades." },
            { ref: "Banco de España, publicaciones divulgativas sobre el dinero", nota: "la explicación del sistema de pagos y de los agregados en el marco del Eurosistema." },
            { ref: "Friedman y Schwartz, A Monetary History of the United States", nota: "el clásico sobre la relación entre dinero y ciclo; discutido y todavía imprescindible." },
          ],
        },
      ],
    },
  ],
};
