/* Ficha 8.01 — Sistema financiero: intermediarios, mercados e instrumentos. */

export default {
  codigo: "8.01",
  titulo: "Sistema financiero: intermediarios, mercados e instrumentos",
  nivel: 1,
  bloque: "Mercados financieros e inversión",
  tiempo: "3 h",
  nucleo:
    "El sistema financiero existe para poner en contacto a quien tiene ahorro con quien tiene proyectos, y en el camino transforma plazos, tamaños y riesgos. Esa transformación es lo que lo hace útil y también lo que lo hace intrínsecamente frágil.",
  requiere: "3.07 Dinero y bancos · 7.01 Valor temporal del dinero",
  abre: "8.02 Renta fija · 8.11 Fondos de inversión · 8.10 Gestión de riesgos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los agentes con capacidad de financiación —típicamente los hogares— y los que la necesitan —empresas y administraciones— rara vez coinciden en lo que quieren. El ahorrador prefiere disponibilidad inmediata, importes pequeños y riesgo bajo; el inversor necesita compromisos largos, importes grandes y acepta riesgo. El sistema financiero salva esa distancia mediante tres transformaciones: **de plazos**, convirtiendo depósitos a la vista en préstamos a veinticinco años; **de tamaño**, agregando muchos ahorros pequeños en una financiación grande; y **de riesgo**, diversificando y absorbiendo pérdidas con capital propio.",
            "Hay dos vías para hacerlo. La **intermediación bancaria** interpone un balance: el banco emite un pasivo a favor del ahorrador y adquiere un activo frente al prestatario, asumiendo él la diferencia de plazo y de riesgo. La **financiación de mercado** conecta directamente a ambas partes: la empresa emite bonos o acciones que el ahorrador compra, y quien asume el riesgo es el inversor final. Los intermediarios siguen presentes en esta segunda vía, pero como gestores y colocadores, no como contrapartida.",
            "El peso relativo de ambas define el carácter de un sistema financiero, y ahí España se parece más a la Europa continental que al mundo anglosajón: es un sistema **bancarizado**, donde el crédito bancario domina la financiación empresarial y el mercado de capitales tiene un papel menor, especialmente para las empresas medianas. Eso tiene consecuencias macroeconómicas: una crisis bancaria interrumpe la financiación de toda la economía real de forma mucho más brusca que en un sistema donde las empresas pueden acudir al mercado de bonos.",
            "Los **mercados** se clasifican por tres criterios que conviene no mezclar. Por el momento de la emisión: **primario**, donde el emisor capta dinero nuevo, y **secundario**, donde los inversores intercambian títulos ya emitidos sin que llegue nada al emisor. Por el plazo: **monetario**, hasta un año, y **de capitales**, a más largo plazo. Y por su organización: **mercados regulados**, con cámara de contrapartida y reglas de negociación, frente a los **OTC**, bilaterales y a medida.",
            "La **supervisión** en España se reparte entre tres instituciones con lógicas distintas. El **Banco de España** supervisa la solvencia de las entidades de crédito, integrado desde 2014 en el Mecanismo Único de Supervisión del BCE, que asume directamente las entidades significativas. La **CNMV** vigila los mercados de valores, la transparencia de los emisores y la conducta con los inversores. Y la **Dirección General de Seguros y Fondos de Pensiones** se ocupa de seguros y previsión social complementaria. A escala europea se añaden las autoridades sectoriales EBA, ESMA y EIOPA.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Tipo de instrumento", "Quién asume el riesgo de crédito", "Ejemplo"],
          filas: [
            { nom: "Depósito", sub: "Pasivo bancario, con garantía hasta 100.000 € por titular", cols: ["El banco, y en última instancia el fondo de garantía", "Cuenta corriente, plazo fijo"] },
            { nom: "Préstamo", sub: "Activo bancario sin mercado secundario", cols: ["El banco", "Hipoteca, póliza de crédito"] },
            { nom: "Renta fija", sub: "Deuda negociable con flujos contractuales", cols: ["El inversor", "Bono del Estado, pagaré de empresa"] },
            { nom: "Renta variable", sub: "Derecho residual sobre el patrimonio", cols: ["El inversor, en último lugar del orden de prelación", "Acción cotizada"] },
            { nom: "Derivado", sub: "Contrato cuyo valor deriva de un subyacente", cols: ["La contraparte, mitigado por cámara y garantías", "Futuro, opción, permuta"] },
            { nom: "Institución de inversión colectiva", sub: "Vehículo que agrupa ahorro y lo gestiona", cols: ["El partícipe, sobre la cartera subyacente", "Fondo de inversión, fondo de pensiones"] },
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
            { nom: "Margen de intereses", sub: "El resultado básico de la intermediación.", cols: ["MI = Ingresos financieros − Costes financieros"] },
            { nom: "Margen de intermediación relativo", sub: "Sobre activos totales medios.", cols: ["m = MI / Activo total medio"] },
            { nom: "Ratio de capital", sub: "Se calcula sobre activos ponderados por riesgo, no sobre el activo total.", cols: ["CET1 = Capital de nivel 1 ordinario / APR"] },
            { nom: "Apalancamiento", sub: "El complemento no ponderado, para evitar arbitraje de ponderaciones.", cols: ["L = Activo total / Capital de nivel 1"] },
            { nom: "Ratio de cobertura de liquidez", sub: "Activos líquidos frente a salidas en 30 días de tensión.", cols: ["LCR = Activos líquidos de alta calidad / Salidas netas a 30 días"] },
            { nom: "Ratio de morosidad", sub: "La medida básica de calidad del activo.", cols: ["Mora = Créditos dudosos / Créditos totales"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el balance de un banco",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Balance muy simplificado de una entidad, en millones de euros. Los tipos son medios anuales.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Activo", "Importe", "Tipo medio", "Ingreso"],
          filas: [
            ["Crédito a la clientela", "900", "3,5 %", "31,5"],
            ["Deuda pública y tesorería", "100", "3,5 %", "3,5"],
            { celdas: ["Total activo", "1.000", "—", "35,0"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Pasivo y patrimonio", "Importe", "Coste medio", "Gasto"],
          filas: [
            ["Depósitos de la clientela", "850", "0,5 %", "4,25"],
            ["Deuda emitida en mercado", "70", "2,5 %", "1,75"],
            ["Capital", "80", "—", "—"],
            { celdas: ["Total", "1.000", "—", "6,0"], clase: "total" },
            { celdas: ["Margen de intereses", "—", "—", "29,0"], clase: "total" },
          ],
          nota: "El margen relativo sobre activos es del **2,9 %**. Con él la entidad debe cubrir gastos de personal y estructura, dotaciones por insolvencias y el impuesto, y aún remunerar a un capital de 80 millones. Ese margen tan estrecho sobre un balance tan grande es la característica definitoria del negocio bancario.",
        },
        {
          tipo: "tabla",
          cabecera: ["Indicador de solidez", "Cálculo", "Resultado"],
          filas: [
            ["Apalancamiento", "1.000 / 80", "12,5 veces"],
            ["Capital sobre activo total", "80 / 1.000", "8,0 %"],
            ["Capital sobre activos ponderados (APR 600)", "80 / 600", "13,3 %"],
            { celdas: ["Pérdida en el crédito que consume todo el capital", "80 / 900", "8,9 %"], clase: "total" },
          ],
          nota: "Ahí está la aritmética que explica la fragilidad bancaria: **una morosidad con pérdida efectiva del 8,9 % de la cartera crediticia borra el capital entero**. Un banco es una empresa con apalancamiento de doce veces, y lo que en otra industria sería un mal año aquí es una resolución. Por eso el sector está regulado en su nivel de capital y no solo en su conducta.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la fragilidad que nace de la propia función",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El banco del ejemplo tiene 850 millones de depósitos exigibles de forma inmediata y 900 millones de crédito que tardará años en cobrar. Esa descompensación no es un defecto de gestión: **es exactamente el servicio que presta**. Transformar plazos es lo que permite que existan hipotecas a veinticinco años financiadas con ahorro disponible a la vista.",
            "El problema es que la solvencia y la liquidez son cosas distintas y una entidad perfectamente solvente puede caer por falta de liquidez. Si una parte de los depositantes reclama su dinero a la vez, el banco no puede convertir su cartera crediticia en efectivo con la rapidez necesaria. Y como cada depositante sabe que solo cobran los primeros, retirar el dinero es racional individualmente aunque el pánico sea colectivamente destructivo. **La retirada masiva es un equilibrio que se autoalimenta**, no un juicio informado sobre la solvencia.",
            "De ahí las tres capas de protección construidas a lo largo del siglo XX y reforzadas tras 2008. El **fondo de garantía de depósitos**, que cubre hasta 100.000 € por titular y entidad, elimina el incentivo a correr para la inmensa mayoría de los depositantes minoristas. El **prestamista de última instancia**, que presta contra colateral a entidades solventes con problemas transitorios de liquidez. Y la **regulación prudencial**, que exige capital mínimo y, desde Basilea III, ratios específicos de liquidez a corto y de financiación estable a largo.",
            "El caso de **Silicon Valley Bank en marzo de 2023** ilustra las tres capas fallando a la vez de forma instructiva. La entidad tenía una cartera enorme de bonos comprados cuando los tipos eran mínimos, cuyo valor de mercado se había desplomado con la subida de tipos de 2022 —el mecanismo de la ficha 8.02—. Sus depósitos estaban muy concentrados en empresas tecnológicas con saldos muy superiores al límite garantizado, es decir, depositantes con incentivo pleno a retirar. Y la retirada se produjo con una velocidad sin precedentes porque las transferencias son instantáneas y la coordinación entre depositantes se produjo por mensajería y redes sociales en cuestión de horas.",
            "**La lección transferible** no es sobre bancos concretos sino sobre la estructura: el riesgo de liquidez no es un residuo del riesgo de crédito, es una categoría propia, y depende tanto de la composición del pasivo como de la calidad del activo. Un banco con activos impecables puede caer si su financiación es concentrada, no garantizada y volátil.",
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
            { t: "Confundir solvencia con liquidez", d: "La solvencia es tener activos por encima de las deudas; la liquidez, poder atender los pagos cuando vencen. Son problemas distintos y una entidad solvente puede caer por iliquidez. Toda la regulación posterior a 2008 añadió requisitos de liquidez precisamente porque el capital no bastaba." },
            { t: "Creer que el mercado secundario financia al emisor", d: "Cuando se compran acciones en bolsa, el dinero va al vendedor anterior, no a la empresa. Solo el mercado primario capta financiación nueva. El secundario es indispensable, pero porque da liquidez y precio, no porque aporte recursos al emisor." },
            { t: "Leer el ratio de capital sobre el activo total", d: "Los ratios regulatorios se calculan sobre activos ponderados por riesgo, donde la deuda pública pondera poco y el crédito al consumo mucho. Un CET1 del 13 % puede corresponder a un 8 % sobre activo total. Por eso Basilea III añadió el ratio de apalancamiento sin ponderar." },
            { t: "Suponer que todo depósito está garantizado", d: "La cobertura es de 100.000 € por titular y entidad. Los saldos por encima de ese límite son acreedores ordinarios y tienen incentivo pleno a retirar ante cualquier duda. La concentración de depósitos no garantizados es un indicador de fragilidad." },
            { t: "Identificar sistema financiero con banca", d: "Las instituciones de inversión colectiva, los fondos de pensiones, las aseguradoras y la intermediación no bancaria mueven volúmenes comparables y están sujetos a reglas distintas. Buena parte del riesgo se ha desplazado hacia ese ámbito desde 2008." },
            { t: "Ignorar que la estructura financiera condiciona el ciclo", d: "En un sistema bancarizado como el español, una restricción del crédito bancario corta la financiación de casi toda la economía real. Donde las empresas pueden emitir bonos, el canal alternativo amortigua el golpe. No es un detalle institucional: cambia la profundidad de las recesiones." },
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
            "El SEC 2010 dedica al sistema financiero un sector institucional entero, con una subdivisión bastante más fina de lo que sugiere el lenguaje corriente.",
          ],
          lista: [
            "El sector **S.12, instituciones financieras**, se subdivide en banco central (S.121), entidades de depósito (S.122), fondos del mercado monetario (S.123), fondos de inversión no monetarios (S.124), otros intermediarios financieros (S.125), auxiliares financieros (S.126), instituciones financieras de ámbito limitado (S.127), seguros (S.128) y fondos de pensiones (S.129).",
            "Esa granularidad permite medir el desplazamiento del riesgo desde la banca hacia la **intermediación financiera no bancaria**, que es una de las transformaciones estructurales de la última década y que las cuentas financieras trimestrales muestran con claridad.",
            "Las **cuentas financieras por sectores** son el mapa completo de quién financia a quién: qué instrumentos usa cada sector para colocar su ahorro y para captar recursos. Es la versión agregada de la primera sección de esta ficha.",
            "El grado de **bancarización** se mide directamente comparando el peso de los préstamos (AF.4) frente al de los valores representativos de deuda (AF.3) en el pasivo de las sociedades no financieras. La diferencia entre España y Estados Unidos es evidente en esos datos.",
            "Las **sociedades instrumentales** sin autonomía de decisión pueden reclasificarse en el sector de su controlador, criterio análogo al del perímetro de consolidación de la ficha 6.10.",
          ],
          cierre:
            "Para quien trabaja con cuentas trimestrales, esta ficha es sobre todo el contenido económico detrás de S.12 y de la cuenta financiera: qué hacen realmente esas unidades y por qué su clasificación importa.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué tres transformaciones realiza un intermediario financiero?", a: "De plazos, convirtiendo pasivos a corto en activos a largo; de tamaño, agregando ahorros pequeños en financiaciones grandes; y de riesgo, diversificando y absorbiendo pérdidas con capital propio." },
            { q: "Un banco tiene 1.000 de activo y 80 de capital. ¿Qué pérdida lo deja sin capital?", a: "80, es decir un 8 % del activo total. Si toda la pérdida viniera de una cartera crediticia de 900, bastaría una pérdida efectiva del 8,9 % de esa cartera. El apalancamiento de 12,5 veces es lo que hace tan estrecho el margen de error." },
            { q: "¿Aporta dinero a la empresa comprar sus acciones en bolsa?", a: "No. En el mercado secundario el dinero va al vendedor anterior. Solo el mercado primario capta financiación nueva para el emisor. El secundario aporta liquidez y precio, que es lo que hace posible el primario." },
            { q: "¿Por qué una entidad solvente puede quebrar?", a: "Por falta de liquidez. Sus activos valen más que sus deudas pero no puede convertirlos en efectivo con la rapidez que exige una retirada masiva. Y como solo cobran los primeros, retirar es racional individualmente, lo que hace que el pánico se autoalimente." },
            { q: "¿En qué subsector del SEC 2010 está un fondo de inversión no monetario?", a: "S.124. La subdivisión de S.12 en nueve subsectores permite seguir el desplazamiento de la intermediación desde la banca de depósitos hacia otros vehículos, una transformación estructural de la última década." },
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
              q: "Un inversor compra acciones de Telefónica en bolsa por 10.000 €. ¿Cuánto dinero recibe la empresa?",
              opciones: [
                "10.000 €, menos las comisiones del intermediario",
                "Nada: el dinero va al vendedor anterior, no a la empresa",
                "La parte proporcional a su autocartera",
                "10.000 €, contabilizados como ampliación de capital",
              ],
              correcta: 1,
              porque: [
                "Las comisiones se las lleva el intermediario, pero el resto tampoco llega a la empresa: va a quien vendió las acciones.",
                "Solo el mercado primario capta financiación nueva. El secundario es indispensable —sin él nadie acudiría al primario— pero no aporta un euro al emisor.",
                "La autocartera son acciones que la propia empresa posee; comprar en bolsa a otro accionista no la afecta.",
                "Una ampliación de capital es una emisión nueva, es decir, mercado primario. Comprar acciones ya existentes no lo es.",
              ],
            },
            {
              q: "Una entidad tiene activos muy por encima de sus deudas pero no puede atender los pagos de mañana. ¿Qué problema tiene?",
              opciones: [
                "De solvencia, porque no puede hacer frente a sus obligaciones",
                "De rentabilidad, porque sus activos no generan lo suficiente",
                "De liquidez: es solvente, pero sus activos no se convierten en dinero al ritmo que exigen los vencimientos",
                "De ambos: la iliquidez implica insolvencia",
              ],
              correcta: 2,
              porque: [
                "La solvencia es tener activos por encima de las deudas, y eso lo cumple. El impago inminente no la contradice.",
                "La rentabilidad es otra dimensión: una entidad muy rentable puede quedarse sin caja igualmente.",
                "Son problemas distintos, y confundirlos es el error de fondo de esta ficha. Una entidad solvente puede caer por iliquidez si nadie le presta a tiempo.",
                "No implica insolvencia, aunque puede provocarla: si hay que malvender activos para pagar, la pérdida sí puede acabar comiéndose el patrimonio.",
              ],
            },
            {
              q: "Un banco publica un CET1 del 13 %. ¿Sobre qué está calculado ese porcentaje?",
              opciones: [
                "Sobre los activos ponderados por riesgo, no sobre el activo total",
                "Sobre el activo total del balance",
                "Sobre los depósitos de la clientela",
                "Sobre el volumen de crédito concedido",
              ],
              correcta: 0,
              porque: [
                "La deuda pública pondera poco y el crédito al consumo mucho, así que un 13 % de CET1 puede corresponder a un porcentaje mucho menor sobre el activo total.",
                "Leerlo sobre el activo total sobrestima notablemente el colchón real de capital de la entidad.",
                "Los depósitos son financiación, no la base del ratio: el denominador mide riesgo de los activos.",
                "El crédito es una parte de los activos ponderados, no el denominador completo.",
              ],
            },
            {
              q: "Un particular tiene 250.000 € en una cuenta de un banco que quiebra. ¿Qué está garantizado?",
              opciones: [
                "El importe íntegro, por tratarse de un depósito a la vista",
                "El 75 %, según el orden de prelación de acreedores",
                "Nada: la garantía cubre solo depósitos a plazo",
                "100.000 €; el resto queda como acreedor ordinario en el concurso",
              ],
              correcta: 3,
              porque: [
                "La garantía tiene un tope y no depende de que el depósito sea a la vista o a plazo.",
                "No hay ningún porcentaje: la cobertura es un importe fijo por titular y entidad.",
                "Los depósitos a la vista están cubiertos igual que los de plazo, hasta el mismo límite.",
                "Son 100.000 € por titular y entidad. Por eso los saldos grandes tienen incentivo pleno a salir al primer rumor, que es lo que convierte una duda en una retirada masiva.",
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
            { ref: "Mishkin, Moneda, banca y mercados financieros", nota: "el manual de referencia. Cubre la función del sistema, la regulación y las crisis bancarias con muy buena intuición." },
            { ref: "Banco de España, Informe de Estabilidad Financiera", nota: "semestral y gratuito. La radiografía del sistema español con datos actualizados." },
            { ref: "CNMV, informes anuales sobre los mercados de valores", nota: "para la parte de mercados, emisores y conducta." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 2", nota: "la definición y subdivisión del sector S.12, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
