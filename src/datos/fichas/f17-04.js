/* Ficha 17.04 — Impuesto sobre Sociedades. */

export default {
  codigo: "17.04",
  titulo: "Impuesto sobre Sociedades",
  nivel: 3,
  bloque: "Fiscalidad española",
  tiempo: "5 h",
  nucleo:
    "El impuesto no parte de la nada: parte del resultado contable y lo corrige con ajustes extracontables. Solo los ajustes permanentes cambian lo que la empresa paga en total; los temporarios y las pérdidas compensadas solo cambian cuándo lo paga, y por eso viven en el impuesto diferido y no en el gasto.",
  requiere: "17.01 El tributo · 5.09 Impuesto sobre beneficios · 5.10 Cuentas anuales",
  abre: "17.07 No residentes · 17.10 Armonización fiscal en la UE",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El Impuesto sobre Sociedades grava la renta de las personas jurídicas, y su rasgo definitorio es que **no define la renta por su cuenta**: la toma del resultado contable determinado según el Código de Comercio y el Plan General de Contabilidad. La base imponible es ese resultado **corregido por los ajustes que la propia ley fiscal establece**. Dicho en la fórmula que conviene memorizar: la contabilidad manda salvo que la norma tributaria diga expresamente lo contrario.",
            "Esa remisión es una decisión de política legislativa con consecuencias grandes. Ahorra al legislador fiscal tener que redefinir qué es un ingreso, cuándo se devenga o cómo se amortiza un activo, porque todo eso ya está resuelto en el PGC. A cambio, ata la recaudación a un cuerpo de normas —las contables— que se elaboran con otra finalidad: informar a socios y acreedores, no repartir la carga tributaria. Cuando ambas finalidades chocan, aparece un **ajuste extracontable**.",
            "Los ajustes son de dos clases y **distinguirlas es lo único verdaderamente importante de esta ficha**. Una **diferencia permanente** es un ingreso o un gasto que la contabilidad reconoce y la fiscalidad no admitirá nunca, o al revés: una multa, un donativo no deducible, la retribución de fondos propios. Nace y muere en el mismo ejercicio, y **cambia el impuesto total que la empresa pagará a lo largo de su vida**.",
            "Una **diferencia temporaria** es un desacuerdo sobre el **momento**, no sobre el importe: el gasto o el ingreso acabará computando en ambos mundos, pero en ejercicios distintos. El deterioro de un crédito que la contabilidad reconoce hoy y la fiscalidad admitirá cuando se cumplan sus plazos; la libertad de amortización que permite deducir hoy lo que la contabilidad repartirá en diez años. Aquí no cambia el impuesto total: **cambia el calendario**, y esa diferencia de calendario es lo que la norma 13.ª del PGC obliga a reconocer como activo o pasivo por impuesto diferido.",
            "De la base imponible previa se descuentan las **bases imponibles negativas** de ejercicios anteriores. En España son compensables **sin límite temporal**, pero con un límite cuantitativo anual expresado en porcentaje de la base previa, más un mínimo absoluto que protege a las empresas pequeñas. El límite no elimina el derecho: lo racionaliza en el tiempo, evitando que una empresa que vuelve a ganar dinero tarde años en tributar. Como su uso solo altera el momento, la BIN se comporta exactamente igual que una diferencia temporaria.",
            "Sobre la base imponible se aplica el **tipo de gravamen** —general del 25 %, reducido para entidades de nueva creación en sus primeros ejercicios con beneficio, y varios tipos especiales— y se obtiene la **cuota íntegra**. De ella se restan primero las **bonificaciones y las deducciones por doble imposición**, que corrigen que una misma renta ya haya tributado antes, y después las **deducciones por incentivos**: investigación y desarrollo, innovación tecnológica, producciones cinematográficas, creación de empleo para personas con discapacidad. El resultado es la **cuota líquida**.",
            "Por último se descuentan **retenciones y pagos fraccionados** —tres al año, en abril, octubre y diciembre— para llegar a la **cuota diferencial**, que se ingresa o se devuelve. El esquema es, punto por punto, el mismo que el del IRPF de la ficha 17.03: base, cuota íntegra, cuota líquida, cuota diferencial. Cambia lo que se grava y quién lo declara, no la arquitectura.",
            "**Una advertencia sobre el «tipo efectivo»**, que es la cifra que más circula y peor se define. Puede calcularse sobre la base imponible, sobre el resultado contable antes de impuestos usando la cuota líquida, o sobre ese mismo resultado usando el gasto contable total por impuesto. Los tres números son legítimos y **los tres son distintos**, porque las diferencias temporarias separan lo que se paga de lo que se contabiliza. Discutir sobre cuánto tributan las empresas sin decir cuál de los tres se está usando es discutir sin decir de qué.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Concepto", "Qué lo provoca", "Qué cambia"],
          filas: [
            { nom: "Diferencia permanente", sub: "Multas, donativos no deducibles, gastos sin justificar.", cols: ["La ley niega el gasto para siempre", "El impuesto total de la vida de la empresa"] },
            { nom: "Diferencia temporaria", sub: "Deterioros, provisiones, libertad de amortización.", cols: ["Contabilidad y fiscalidad discrepan en el momento", "Solo el calendario: genera impuesto diferido"] },
            { nom: "Base imponible negativa", sub: "Pérdidas de ejercicios anteriores.", cols: ["Compensable sin límite temporal, con tope anual", "Solo el calendario, como una temporaria"] },
            { nom: "Deducción por doble imposición", sub: "Dividendos y plusvalías de participadas.", cols: ["La renta ya tributó en otra sociedad o país", "Evita gravar dos veces lo mismo"] },
            { nom: "Deducción por incentivos", sub: "I+D+i, cine, empleo de personas con discapacidad.", cols: ["Persigue un fin extrafiscal", "El impuesto total, como una permanente"] },
          ],
          nota: "Léase la columna de la derecha como el resumen de la ficha: **solo lo que cambia el impuesto total afecta al gasto contable**. Todo lo que solo cambia el calendario se aparca en las cuentas 474 y 479 y se deshace con los años.",
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
            { nom: "Base imponible previa", sub: "El resultado contable corregido.", cols: ["$\\mathrm{BI}_p = \\mathrm{RAI} \\pm \\text{permanentes} \\pm \\text{temporarias}$"] },
            { nom: "Base imponible", sub: "Tras compensar pérdidas anteriores.", cols: ["$\\mathrm{BI} = \\mathrm{BI}_p - \\mathrm{BIN}$"] },
            { nom: "Cuota líquida", sub: "Lo que efectivamente se liquida.", cols: ["$\\mathrm{CL} = t \\cdot \\mathrm{BI} - \\text{deducciones}$"] },
            { nom: "Gasto contable por impuesto", sub: "Corriente más diferido.", cols: ["Gasto $=$ corriente $+$ diferido"] },
            { nom: "El resultado que hay que retener", sub: "Las temporarias y las BIN se cancelan entre corriente y diferido.", cols: ["Gasto $= t\\,(\\mathrm{RAI} \\pm \\text{permanentes}) - \\text{deducciones}$"] },
            { nom: "Tipo efectivo contable", sub: "Distinto del que resulta de la cuota líquida.", cols: ["$t_e = \\dfrac{\\text{Gasto}}{\\mathrm{RAI}}$"] },
          ],
          nota: "La quinta línea es la que da sentido a todo lo demás y conviene comprobarla en el ejemplo: **el gasto por impuesto no depende de las diferencias temporarias ni de las bases negativas compensadas**. Si al calcularlo aparecen, es que se ha contabilizado mal el impuesto diferido.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: liquidación completa y tipo efectivo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad presenta un **resultado antes de impuestos de 200.000 €**. Ha contabilizado una **multa de tráfico de 8.000 €** y un **deterioro de créditos de 12.000 €** que la fiscalidad todavía no admite, y ha aplicado **libertad de amortización por 20.000 €** por encima de la amortización contable. Arrastra **30.000 € de bases negativas**, tiene derecho a **5.000 € de deducción por I+D** y ha ingresado **40.000 €** en pagos fraccionados. Tipo: 25 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Liquidación", "Cálculo", "Importe"],
          filas: [
            ["Resultado antes de impuestos", "Según la cuenta de pérdidas y ganancias", "200.000 €"],
            ["(+) Multa no deducible", "Diferencia permanente positiva", "8.000 €"],
            ["(+) Deterioro no admitido aún", "Diferencia temporaria positiva", "12.000 €"],
            ["(−) Exceso de amortización fiscal", "Diferencia temporaria negativa", "−20.000 €"],
            ["Base imponible previa", "200.000 + 8.000 + 12.000 − 20.000", "200.000 €"],
            ["(−) Bases imponibles negativas", "Compensación de pérdidas anteriores", "−30.000 €"],
            ["Base imponible", "", "170.000 €"],
            ["Cuota íntegra", "170.000 × 25 %", "42.500 €"],
            ["(−) Deducción por I+D", "Incentivo, no doble imposición", "−5.000 €"],
            ["Cuota líquida", "", "37.500 €"],
            ["(−) Pagos fraccionados", "Abril, octubre y diciembre", "−40.000 €"],
            { celdas: ["Cuota diferencial", "37.500 − 40.000", "−2.500 € a devolver"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "Ahora el **gasto contable por impuesto**, que es otra cosa. El impuesto **corriente** son los 37.500 € de cuota líquida. El **diferido** recoge las tres partidas que solo afectan al calendario: el deterioro genera un activo de 12.000 × 25 % = **3.000 €** que reduce el gasto; la libertad de amortización genera un pasivo de 20.000 × 25 % = **5.000 €** que lo aumenta; y el uso de la base negativa consume un activo ya reconocido por 30.000 × 25 % = **7.500 €**, que también lo aumenta. Diferido neto: −3.000 + 5.000 + 7.500 = **9.500 €**.",
            "Gasto total por impuesto: 37.500 + 9.500 = **47.000 €**. Y aquí está la comprobación que valida toda la contabilización: ese mismo número sale directamente de la quinta línea de la formalización, **(200.000 + 8.000) × 25 % − 5.000 = 47.000 €**. Las temporarias y la base negativa han desaparecido por completo del cálculo. Solo han sobrevivido la multa, que es permanente, y la deducción por I+D.",
            "Los dos «tipos efectivos» de esta sociedad son, por tanto, **18,75 %** si se divide la cuota líquida entre el resultado (37.500 / 200.000) y **23,50 %** si se divide el gasto contable (47.000 / 200.000). Ninguno de los dos es el 25 % nominal, y ninguno de los dos está mal calculado: **miden cosas distintas**. El primero dice cuánto sale del banco este año; el segundo, cuánto le cuesta a la empresa el beneficio de este año. Casi todos los titulares sobre lo poco que tributan las grandes empresas se apoyan en el primero sin decirlo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la empresa que renunció a un incentivo por no entenderlo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una pyme industrial invierte 200.000 € en un proyecto de desarrollo de producto que cumple los requisitos de la deducción por I+D. Su asesor le informa de que puede deducir una parte relevante de la cuota. La empresa, sin embargo, **viene de dos años de pérdidas** y su cuota íntegra de este ejercicio, tras compensar las bases negativas, es de apenas 6.000 €. El gerente concluye que «la deducción no sirve para nada» y **decide no documentar el proyecto** para ahorrarse el coste del informe motivado.",
            "El error es de calendario, exactamente el mismo tipo de error que la ficha viene señalando. **Las deducciones por incentivos no se pierden si no hay cuota: se arrastran a ejercicios futuros**, con plazos largos —dieciocho años en el caso de I+D+i—, y algunas admiten además la **monetización**, es decir, cobrarlas de la Administración con un descuento aunque no haya cuota que minorar. Al no documentar el proyecto, la empresa no ha renunciado a una deducción de este año: ha renunciado a un crédito fiscal que habría podido aplicar cuando volviera a ganar dinero.",
            "**El coste de la decisión es cuantificable.** Si la deducción hubiera ascendido a 50.000 €, la empresa aplica 6.000 € ahora y conserva 44.000 € que valen, con el tiempo, casi su importe nominal. Al no acreditarlos, ese activo simplemente no llega a existir. Y como los requisitos formales —informe motivado, memoria técnica, contabilidad separada del proyecto— hay que cumplirlos **en el ejercicio en que se incurre en el gasto**, la decisión es irreversible: dentro de tres años, cuando haya cuota, ya no habrá nada que aplicar.",
            "La moraleja general excede al I+D. **En el Impuesto sobre Sociedades casi nada se pierde por falta de cuota y casi todo se pierde por falta de prueba.** Las bases negativas se compensan sin límite temporal, las deducciones se arrastran años, los activos por impuesto diferido esperan. Lo que no espera es la documentación: la carga de acreditar el derecho recae sobre quien lo invoca, y se acredita con los papeles del año en que nació.",
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
            { t: "Confundir diferencia permanente con temporaria", d: "Es el error que arrastra a todos los demás. La permanente cambia el impuesto total y va contra el gasto del ejercicio; la temporaria solo cambia el momento y genera un activo o un pasivo por impuesto diferido. Tratar una temporaria como permanente hace que el gasto por impuesto deje de cuadrar con el tipo aplicado al resultado ajustado." },
            { t: "Creer que el gasto por impuesto es la cuota a pagar", d: "Solo coinciden si no hay diferencias temporarias ni bases negativas compensadas. En el ejemplo, la cuota líquida es 37.500 € y el gasto 47.000 €. Confundirlos lleva a leer mal la cuenta de resultados y a calcular tipos efectivos que no dicen lo que se cree." },
            { t: "Dar por perdida una deducción porque no hay cuota", d: "Las deducciones por incentivos se arrastran a ejercicios futuros con plazos largos, y algunas se pueden monetizar. Lo que sí se pierde de forma irreversible es el derecho que no se documentó en el ejercicio en que nació el gasto." },
            { t: "Suponer que las bases negativas caducan", d: "En España son compensables sin límite temporal desde 2015. Lo que existe es un límite cuantitativo por ejercicio, expresado en porcentaje de la base previa, con un mínimo absoluto que deja fuera del límite a las empresas pequeñas. Es un tope de ritmo, no un plazo de caducidad." },
            { t: "Tratar la deducción por doble imposición como un incentivo", d: "No lo es. Corrige que una renta ya haya tributado en otra sociedad o en otro país, y su finalidad es evitar un exceso de gravamen, no promover una conducta. Meterlas en el mismo saco distorsiona cualquier medición de «beneficios fiscales»." },
            { t: "Aplicar el 25 % a todo sin mirar el tipo que corresponde", d: "Hay tipo reducido para entidades de nueva creación en los dos primeros ejercicios con base positiva, y tipos especiales para cooperativas, entidades sin fines lucrativos, sicav y otras figuras. Y el tipo, además, es de los parámetros que más se retocan de una ley de presupuestos a otra." },
            { t: "Olvidar que los pagos fraccionados se calculan de dos maneras", d: "Sobre la cuota del último ejercicio declarado o sobre la base del propio ejercicio en curso, y para las empresas de cierto tamaño la segunda es obligatoria y con un mínimo sobre el resultado contable. Una empresa que pasa de pérdidas a beneficios puede encontrarse pagando fraccionados muy superiores a lo que anticipaba." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "D.51 y por qué la recaudación de Sociedades es tan volátil",
          texto:
            "En el SEC el Impuesto sobre Sociedades es **D.51, impuesto corriente sobre la renta**, dentro de la misma rúbrica que el IRPF, y el excedente de explotación que grava es el **B.2 de las sociedades no financieras** de la ficha 10.06. Esa correspondencia explica el comportamiento que más desconcierta en las series de recaudación: **Sociedades cae mucho más que el PIB en las recesiones y se recupera más tarde**. La razón es doble y ambas mitades están en esta ficha. Primero, la base es el beneficio, que es un residuo entre ingresos y costes y por tanto amplifica cualquier oscilación de la actividad. Y segundo, las **bases imponibles negativas** acumuladas en la crisis se compensan durante la expansión siguiente, de modo que la recaudación sigue deprimida años después de que los beneficios se hayan recuperado. Al comparar recaudación con PIB conviene recordar que se está dividiendo una magnitud con memoria por otra que no la tiene.",
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
              q: "Resultado antes de impuestos 200.000 €, multa 8.000 €, deterioro no admitido 12.000 €, exceso de amortización fiscal 20.000 €, bases negativas 30.000 €, deducción I+D 5.000 €. ¿Cuál es la cuota líquida?",
              a: "37.500 €. La base previa es 200.000 + 8.000 + 12.000 − 20.000 = 200.000; menos 30.000 de bases negativas da 170.000; al 25 % son 42.500 de cuota íntegra, y restando la deducción de 5.000 quedan 37.500 €.",
            },
            {
              q: "En ese mismo caso, ¿cuál es el gasto contable por impuesto y por qué no coincide con la cuota?",
              a: "47.000 €. Al corriente de 37.500 se suma un diferido neto de 9.500 (−3.000 del activo por el deterioro, +5.000 del pasivo por la amortización, +7.500 por el consumo del activo de la base negativa). Se comprueba directamente: (200.000 + 8.000) × 25 % − 5.000 = 47.000. No coincide con la cuota porque las temporarias y la base negativa desplazan pago en el tiempo sin alterar el coste del ejercicio.",
            },
            {
              q: "¿Por qué una diferencia temporaria no afecta al gasto por impuesto y una permanente sí?",
              a: "Porque la temporaria acabará computando también en el mundo fiscal, solo que en otro ejercicio: el impuesto corriente y el diferido se mueven en sentidos contrarios y se cancelan. La permanente nunca computará, así que altera el impuesto total que la empresa pagará a lo largo de su vida y aparece íntegra en el gasto.",
            },
            {
              q: "Una empresa en pérdidas genera derecho a una deducción por I+D de 50.000 € y solo tiene 6.000 € de cuota. ¿Qué debe hacer?",
              a: "Acreditar y documentar la deducción completa. Aplicará 6.000 € este año y arrastrará el resto a ejercicios futuros —hasta dieciocho años en I+D+i—, con la posibilidad adicional de monetizar parte. Lo que no puede recuperarse después es el requisito formal: la documentación debe existir en el ejercicio del gasto.",
            },
            {
              q: "¿Por qué la recaudación por Sociedades cae más que el PIB en las crisis y tarda más en recuperarse?",
              a: "Porque su base es el beneficio, que al ser un residuo entre ingresos y costes amplifica las oscilaciones de la actividad, y porque las bases negativas acumuladas durante la recesión se compensan después, manteniendo la recaudación deprimida cuando los beneficios ya se han recuperado.",
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
              q: "¿De qué magnitud parte la base imponible del Impuesto sobre Sociedades?",
              opciones: [
                "De una definición autónoma de renta contenida en la ley fiscal",
                "Del resultado contable, corregido por los ajustes que la ley establece",
                "De los ingresos de explotación del ejercicio",
                "Del excedente bruto de explotación de la contabilidad nacional",],
              correcta: 1,
              porque: [
                "La ley fiscal renuncia deliberadamente a definir la renta y se remite al Código de Comercio y al PGC.",
                "Esa remisión es el rasgo definitorio del impuesto: la contabilidad manda salvo que la norma fiscal diga lo contrario.",
                "Los ingresos son solo una parte del resultado; el impuesto grava el beneficio, no la cifra de negocios.",
                "El B.2 del SEC es una magnitud macroeconómica agregada, no la base de la liquidación de una sociedad.",],
            },
            {
              q: "Una sociedad contabiliza un deterioro de créditos que la fiscalidad aún no admite. ¿Qué efecto tiene?",
              opciones: [
                "No tiene ningún efecto fiscal hasta que el crédito se declare incobrable",
                "Genera una diferencia temporaria y un activo por impuesto diferido",
                "Reduce directamente la cuota líquida del ejercicio",
                "Genera una diferencia permanente que aumenta el gasto por impuesto",],
              correcta: 1,
              porque: [
                "Sí lo tiene ya: el ajuste positivo se practica en este ejercicio, y es justamente lo que origina la diferencia temporaria.",
                "El gasto acabará siendo deducible más adelante, así que solo cambia el momento y se reconoce el activo por la cuota que se anticipa.",
                "La aumenta, no la reduce: el ajuste es positivo, porque el gasto contabilizado todavía no es deducible.",
                "Sería permanente si la ley no fuera a admitirlo nunca; aquí lo admitirá cuando se cumplan sus plazos.",],
            },
            {
              q: "Resultado antes de impuestos 200.000 €, una multa de 8.000 € y una deducción por I+D de 5.000 €, al 25 %. ¿Cuál es el gasto contable por impuesto?",
              opciones: [
                "47.000 €, el 25 % del resultado más la permanente, menos la deducción",
                "37.500 €, la cuota líquida del ejercicio",
                "50.000 €, el 25 % del resultado contable",
                "45.000 €, el 25 % del resultado menos la deducción",],
              correcta: 0,
              porque: [
                "Las temporarias y las bases negativas se cancelan entre corriente y diferido; solo sobreviven la permanente y la deducción.",
                "Esa es la cuota que se ingresa, no el gasto: difieren en todo lo que solo cambia el calendario.",
                "Ignora tanto la multa, que sí altera el impuesto total, como la deducción.",
                "Recoge la deducción pero olvida que la multa no es deducible y eleva la base de forma definitiva.",],
            },
            {
              q: "Una empresa con pérdidas acumuladas genera una deducción por I+D muy superior a su cuota. ¿Qué ocurre con el exceso?",
              opciones: [
                "Solo puede aplicarse si la empresa vuelve a beneficios en los dos ejercicios siguientes",
                "Se pierde, porque las deducciones solo operan sobre la cuota del ejercicio",
                "Se arrastra a ejercicios futuros durante plazos largos, y en algunos casos puede monetizarse",
                "Se convierte automáticamente en una base imponible negativa adicional",],
              correcta: 2,
              porque: [
                "El plazo de arrastre es de años, no de dos ejercicios; ese límite corto no existe en esta deducción.",
                "Lo que se pierde de forma irreversible no es la deducción sino la documentación no elaborada a tiempo.",
                "En I+D+i el plazo llega a dieciocho años, y existe además la opción de cobrarla con descuento sin cuota que minorar.",
                "Son figuras distintas: la BIN opera sobre la base y la deducción sobre la cuota, y no se transforman una en otra.",],
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
            { t: "Ley 27/2014 del Impuesto sobre Sociedades", d: "El artículo 10.3 contiene en una sola frase la remisión al resultado contable de la que depende toda la ficha. Los gastos no deducibles, en el artículo 15; la compensación de bases negativas, en el 26; las deducciones por incentivos, en los artículos 35 y siguientes." },
            { t: "PGC, norma de registro y valoración 13.ª", d: "El otro lado del mismo problema, visto desde la contabilidad: cuándo se reconoce un activo o un pasivo por impuesto diferido y con qué tipo se valora. Es la norma que estudia la ficha 5.09 y la que hace cuadrar el ejemplo numérico." },
            { t: "Agencia Tributaria, estadísticas de cuentas anuales consolidadas", d: "Publica los tipos efectivos calculados sobre base imponible y sobre resultado contable por separado. Es la manera más rápida de ver que la diferencia entre los dos no es un matiz." },
            { t: "OCDE, Corporate Tax Statistics", d: "Compara tipos nominales y efectivos entre países con una metodología homogénea. Es el punto de partida natural hacia la competencia fiscal y el tipo mínimo global que trata la ficha 17.10." },
          ],
        },
      ],
    },
  ],
};
