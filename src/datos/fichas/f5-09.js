/* Ficha 5.09 — Impuesto sobre beneficios y diferencias temporarias. */

export default {
  codigo: "5.09",
  titulo: "Impuesto sobre beneficios y diferencias temporarias",
  nivel: 3,
  bloque: "Contabilidad financiera",
  tiempo: "5 h",
  nucleo:
    "El resultado contable y la base imponible casi nunca coinciden. Las diferencias que acabarán revirtiendo generan activos y pasivos por impuesto diferido; las que no revertirán nunca alteran directamente el gasto por impuesto. Distinguir unas de otras es toda la norma.",
  requiere: "5.04 Criterios de valoración · 5.06 Amortización y deterioro",
  abre: "5.10 Cuentas anuales · 6.07 Análisis de rentabilidad",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La contabilidad y la norma fiscal miden el beneficio con criterios distintos porque persiguen fines distintos: una busca la imagen fiel, la otra la recaudación y el incentivo de determinadas conductas. El punto de partida del cálculo del impuesto es el **resultado contable antes de impuestos**, al que se aplican **ajustes extracontables** hasta llegar a la base imponible. Esos ajustes no se anotan en la contabilidad: viven en la declaración.",
            "Los ajustes son de dos clases y la distinción lo decide todo. Las **diferencias permanentes** nunca se dan la vuelta: una multa no deducible lo será siempre, y un ingreso exento no tributará nunca. Afectan a la cuota del año y desaparecen del mapa. Las **diferencias temporarias** son desfases de imputación temporal: la norma fiscal admite el gasto o el ingreso en un ejercicio distinto al contable, pero al final del recorrido ambos sistemas habrán reconocido lo mismo. Esos desfases se reconocen en balance.",
            "El PGC aborda el problema por el **método del balance**: una diferencia temporaria es la discrepancia entre el valor contable de un activo o pasivo y su **base fiscal**, entendida como el importe atribuido a ese elemento a efectos del impuesto. Si esa discrepancia dará lugar a mayores pagos futuros, hay un **pasivo por impuesto diferido**; si dará lugar a menores pagos futuros, hay un **activo por impuesto diferido**. Es un cambio de enfoque respecto del plan anterior, que razonaba sobre la cuenta de resultados, y en la práctica llega al mismo sitio en los casos habituales.",
            "La **prudencia gobierna el reconocimiento de los activos** por impuesto diferido. Solo se reconocen si es probable que la empresa disponga de ganancias fiscales futuras suficientes para aplicarlos. Un crédito por bases imponibles negativas es un activo real —vale dinero— pero solo para quien vaya a tener beneficios contra los que compensarlo. Una empresa en pérdidas crónicas no puede activarlo, y esa imposibilidad agrava su resultado justo cuando peor está.",
            "En España el **tipo general del Impuesto sobre Sociedades es del 25 %**, con tipos reducidos para entidades de menor dimensión que han ido modificándose en los últimos ejercicios. Los ejemplos de esta ficha usan el 25 % por comodidad; comprueba siempre el tipo vigente y aplicable a la entidad concreta.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Tipo de ajuste", "¿Revierte?", "Efecto contable"],
          filas: [
            { nom: "Diferencia permanente", sub: "Multas, sanciones, liberalidades, rentas exentas", cols: ["Nunca", "Altera el gasto por impuesto del ejercicio"] },
            { nom: "Diferencia temporaria imponible", sub: "El gasto fiscal se anticipa al contable, o el ingreso se difiere", cols: ["Sí, pagando más después", "Pasivo por impuesto diferido (479)"] },
            { nom: "Diferencia temporaria deducible", sub: "El gasto contable se anticipa al fiscal", cols: ["Sí, pagando menos después", "Activo por impuesto diferido (474)"] },
            { nom: "Bases imponibles negativas", sub: "Pérdidas fiscales compensables en ejercicios futuros", cols: ["Sí, si hay beneficios", "Activo solo si es probable recuperarlo"] },
            { nom: "Deducciones pendientes", sub: "Por I+D, doble imposición, donativos", cols: ["Sí, si hay cuota", "Activo solo si es probable aplicarlas"] },
          ],
          nota: "Regla mnemotécnica: si el fisco te deja pagar menos **hoy**, te lo cobrará mañana y tienes un **pasivo**. Si te obliga a pagar más hoy, te lo devolverá mañana y tienes un **activo**.",
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
            { nom: "Base imponible", sub: "Punto de partida contable, ajustes extracontables después.", cols: ["BI = RCAI ± permanentes ± temporarias − BINs compensadas"] },
            { nom: "Impuesto corriente", sub: "Lo que efectivamente se declara y se paga.", cols: ["IC = BI × tipo impositivo − deducciones"] },
            { nom: "Diferencia temporaria", sub: "Método del balance.", cols: ["DT = Valor contable − Base fiscal"] },
            { nom: "Impuesto diferido", sub: "Se reconoce sobre la diferencia temporaria.", cols: ["ID = DT × tipo impositivo esperado en la reversión"] },
            { nom: "Gasto por impuesto", sub: "Lo que aparece en la cuenta de resultados.", cols: ["Gasto = IC + ΔPasivos diferidos − ΔActivos diferidos"] },
            { nom: "Comprobación", sub: "Solo las diferencias permanentes separan una cifra de la otra.", cols: ["Gasto = (RCAI ± permanentes) × tipo"] },
          ],
          nota: "La última línea es la mejor verificación disponible: si el gasto por impuesto calculado por la vía larga no coincide con esa expresión, hay un error de clasificación entre permanente y temporaria.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: de resultado contable a gasto por impuesto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad presenta un resultado contable antes de impuestos de **200.000 €**. Durante el ejercicio ha pagado una multa administrativa de 10.000 €, no deducible. Ha dotado un deterioro de 40.000 € que la norma fiscal no admite hasta que la pérdida se materialice. Y ha aplicado libertad de amortización, de modo que la amortización fiscal supera a la contable en 25.000 €. Tipo impositivo: 25 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Ajuste", "Importe"],
          filas: [
            ["Resultado contable antes de impuestos", "—", "200.000 €"],
            ["Multa no deducible", "permanente, positiva", "+10.000 €"],
            ["Deterioro no deducible este año", "temporaria deducible", "+40.000 €"],
            ["Exceso de amortización fiscal", "temporaria imponible", "−25.000 €"],
            { celdas: ["Base imponible", "—", "225.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Impuesto corriente", "225.000 × 25 %", "56.250 €"],
            ["Activo por impuesto diferido", "40.000 × 25 %", "10.000 €"],
            ["Pasivo por impuesto diferido", "25.000 × 25 %", "6.250 €"],
            { celdas: ["Gasto por impuesto", "56.250 − 10.000 + 6.250", "52.500 €"], clase: "total" },
          ],
          nota: "Comprobación por la vía corta: **(200.000 + 10.000) × 25 % = 52.500 €**. Solo la multa, que es permanente, separa el gasto contable del que resultaría de gravar el resultado contable. Las dos temporarias se anulan íntegramente en el gasto y se quedan en el balance esperando su reversión.",
        },
        {
          tipo: "parrafos",
          items: [
            "El resultado del ejercicio es, por tanto, 200.000 − 52.500 = **147.500 €**, mientras que el desembolso frente a Hacienda de este año asciende a 56.250 €. La diferencia de 3.750 € es un pago anticipado neto que revertirá en ejercicios futuros: los 10.000 € de activo diferido se recuperarán cuando el deterioro sea fiscalmente deducible, y los 6.250 € de pasivo diferido se pagarán cuando la amortización contable supere a la fiscal en los años finales del activo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el crédito fiscal que no se puede activar",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa acumula tres ejercicios consecutivos de pérdidas y tiene bases imponibles negativas por 4 millones de euros. Al tipo del 25 %, ese derecho a compensar vale un millón de euros de menores impuestos futuros. La tentación de reconocerlo como activo es evidente: mejoraría el resultado del ejercicio en un millón y reforzaría un patrimonio neto probablemente deteriorado.",
            "El PGC lo impide salvo que sea **probable disponer de ganancias fiscales futuras** que permitan aplicarlo. Y ahí está la trampa lógica: la empresa que más necesita ese activo es precisamente la que menos puede justificarlo. Tres años de pérdidas son, en sí mismos, evidencia en contra de la probabilidad de beneficios futuros. Activarlo exigiría un plan de negocio creíble, aprobado, con hipótesis contrastables y horizonte razonable.",
            "El efecto agregado es lo que en análisis se conoce como **doble golpe**: en el año en que una empresa entra en pérdidas serias, no solo pierde dinero sino que además puede verse obligada a dar de baja activos por impuesto diferido reconocidos en años anteriores, porque las expectativas que los sostenían han desaparecido. Las dos cosas juntas hunden el resultado muy por debajo de la pérdida operativa real.",
            "**Qué mirar al analizar unas cuentas:** el peso de los activos por impuesto diferido sobre el patrimonio neto, y la explicación en memoria de las hipótesis que sostienen su recuperabilidad. Un activo fiscal grande apoyado en proyecciones optimistas es una de las partidas más frágiles de un balance, y no tiene valor de liquidación alguno.",
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
            { t: "Confundir el gasto por impuesto con la cuota a pagar", d: "Son cifras distintas y casi nunca coinciden. El gasto por impuesto es la cifra contable, que incorpora los impuestos diferidos; la cuota es lo que se declara y se ingresa. La diferencia entre ambas es exactamente el movimiento neto de activos y pasivos por impuesto diferido." },
            { t: "Tratar como permanente lo que es temporario", d: "Es el error con más consecuencias. Un deterioro no deducible este año probablemente sí lo será cuando la pérdida se materialice, luego es temporario y genera activo diferido. Clasificarlo como permanente hace desaparecer un activo real del balance y distorsiona el gasto del ejercicio." },
            { t: "Activar créditos fiscales sin justificar la recuperabilidad", d: "El reconocimiento exige probabilidad de ganancias fiscales futuras suficientes. Sin un plan de negocio que lo sostenga, activar bases imponibles negativas es inflar el patrimonio neto con un activo que quizá nunca valga nada." },
            { t: "Usar el tipo impositivo actual cuando se conoce uno futuro", d: "Los impuestos diferidos se valoran al tipo que se espera aplicable en el momento de la reversión, según la normativa aprobada. Si hay una reforma fiscal ya publicada que cambia el tipo, hay que reestimar los saldos diferidos y llevar el efecto a resultados." },
            { t: "Compensar activos y pasivos por impuesto diferido sin derecho a hacerlo", d: "El principio de no compensación también rige aquí. Solo procede netear cuando existe derecho legal de compensación frente a la misma administración tributaria y la empresa tiene intención de liquidar por el neto." },
            { t: "Olvidar la conciliación de la memoria", d: "La memoria exige explicar la relación entre el gasto por impuesto y el resultado contable multiplicado por el tipo. Esa conciliación es, para quien analiza, la mejor radiografía disponible de la calidad fiscal del resultado, y suele revelar partidas que no aparecen en ningún otro sitio." },
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
            "Los impuestos sobre la renta son en el SEC 2010 una operación de distribución, y su tratamiento es notablemente más simple que en el PGC.",
          ],
          lista: [
            "Se registran como **impuestos corrientes sobre la renta, el patrimonio, etc. (D.51)**, dentro de la cuenta de distribución secundaria de la renta. Son un empleo de la unidad que los paga y un recurso de las administraciones públicas.",
            "**No existen los impuestos diferidos.** No hay activos ni pasivos por impuesto diferido en el balance de ningún sector: se registra el impuesto devengado frente a la administración, no la discrepancia entre criterios contables y fiscales.",
            "El **momento de registro** es el del devengo, con un matiz importante: se excluye la parte de los impuestos liquidados cuyo cobro se considera improbable, para no inflar el ingreso público con derechos incobrables.",
            "Los **ajustes por cambio de criterio** entre lo declarado y lo efectivamente recaudado se resuelven con el llamado método de caja ajustada o con coeficientes de recaudación, según la figura tributaria.",
            "La **presión fiscal** que se calcula a partir de estos datos es, por tanto, un cociente entre impuestos devengados y PIB, no entre gastos contables por impuesto y beneficios empresariales. Son magnitudes que no se pueden mezclar.",
          ],
          cierre:
            "La razón de la simplicidad es la misma de siempre: al SEC le interesa el flujo real entre sectores, no la imputación temporal interna de cada empresa. El impuesto diferido es un artefacto del principio de correlación de ingresos y gastos, que en cuentas nacionales no opera de la misma manera.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Resultado contable 100.000 €, una multa no deducible de 20.000 € y ninguna diferencia temporaria. Tipo 25 %. ¿Gasto por impuesto?", a: "30.000 €. La base imponible es 120.000 € y el impuesto corriente 30.000 €. Como no hay temporarias, gasto y cuota coinciden. Comprobación: (100.000 + 20.000) × 25 % = 30.000 €." },
            { q: "La amortización fiscal supera a la contable en 30.000 €. ¿Activo o pasivo por impuesto diferido?", a: "Pasivo. La empresa paga menos hoy porque se deduce más de lo que contabiliza, y en los años finales del activo ocurrirá lo contrario. Regla: si pagas menos hoy, debes; luego pasivo." },
            { q: "¿Por qué una empresa en pérdidas crónicas no puede reconocer el crédito por sus bases imponibles negativas?", a: "Porque el reconocimiento exige que sea probable disponer de ganancias fiscales futuras contra las que compensarlo, y un historial de pérdidas es evidencia en contra de esa probabilidad. Es la paradoja del sistema: el activo lo puede reconocer quien menos lo necesita." },
            { q: "Se aprueba una reforma que baja el tipo del 25 % al 22 % a partir del año siguiente. ¿Qué hay que hacer con los saldos diferidos?", a: "Reestimarlos al tipo que se espera aplicable en la reversión y llevar el efecto del ajuste a la cuenta de resultados del ejercicio en que se aprueba la norma. Los activos diferidos valdrán menos y los pasivos también." },
            { q: "¿Aparecen los impuestos diferidos en las cuentas nacionales?", a: "No. El SEC registra el impuesto devengado frente a las administraciones públicas como operación de distribución D.51, sin reconocer activos ni pasivos derivados de desfases entre criterio contable y criterio fiscal." },
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
            { ref: "PGC, norma de registro y valoración 13.ª", nota: "impuestos sobre beneficios. Define el método del balance y el concepto de base fiscal." },
            { ref: "Resolución del ICAC de 9 de febrero de 2016", nota: "desarrolla con detalle el registro del impuesto sobre beneficios y resuelve la mayoría de los casos prácticos." },
            { ref: "Ley 27/2014 del Impuesto sobre Sociedades", nota: "para el origen de los ajustes: qué es deducible, qué no y con qué límites temporales se compensan las bases negativas." },
            { ref: "Archel Domench et al., Estados contables", nota: "la lectura analítica de la conciliación fiscal de la memoria, que es donde esta ficha se vuelve útil en la práctica." },
          ],
        },
      ],
    },
  ],
};
