/* Ficha 5.08 — Provisiones, contingencias y periodificación. */

export default {
  codigo: "5.08",
  titulo: "Provisiones, contingencias y periodificación",
  nivel: 3,
  bloque: "Contabilidad financiera",
  tiempo: "4 h",
  nucleo:
    "Reconocer hoy una obligación cuyo importe o cuyo vencimiento son inciertos es el punto donde la contabilidad depende más del juicio. Tres condiciones separan una provisión de una simple nota en la memoria, y una sola de ellas —la probabilidad— decide de qué lado cae el caso.",
  requiere: "5.04 Principios y criterios de valoración",
  abre: "5.09 Impuesto sobre beneficios · 6.09 Calidad del resultado",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una **provisión** es un pasivo indeterminado en cuanto a su importe o a la fecha en que se cancelará. No es un fondo de reserva ni un ahorro: es una deuda real cuya cuantía exacta todavía no se conoce. El PGC la reconoce cuando concurren tres condiciones a la vez: existe una **obligación presente** derivada de un suceso pasado, es **probable** que haya que desprenderse de recursos para liquidarla, y su importe puede **estimarse con fiabilidad**.",
            "La obligación no tiene por qué ser legal ni contractual. También cuenta la **obligación tácita o implícita**: una empresa que durante años ha aceptado devoluciones más allá de lo que exige la ley ha creado una expectativa válida en sus clientes, y esa expectativa genera obligación aunque ningún contrato la recoja. Este es el punto que más cuesta aceptar a quien viene de una lógica jurídica estricta.",
            "Si falla alguna de las tres condiciones, no hay provisión sino **pasivo contingente**: no se reconoce en el balance y se informa de él en la memoria. La asimetría con los **activos contingentes** es deliberada y muy característica: un derecho probable pero no cierto **nunca** se reconoce, y solo se menciona en la memoria si su entrada es probable. Ganar un pleito no se anota hasta que es prácticamente seguro; perderlo se anota en cuanto es más probable que no.",
            "Las provisiones se valoran por el **valor actual de la mejor estimación posible** del importe necesario para cancelar la obligación. Cuando el vencimiento es lejano, ese descuento importa mucho, y obliga a un ajuste anual: cada ejercicio la provisión crece por el mero paso del tiempo, y ese incremento se registra como **gasto financiero**, no como mayor gasto de explotación. Es un detalle que cambia la lectura del resultado de explotación y que se olvida con frecuencia.",
            "La **periodificación** es un problema emparentado pero mucho más simple y mecánico. Cuando un pago o un cobro cubre un período que no coincide con el ejercicio, hay que separar la parte que corresponde a cada uno. Las cuentas de gastos e ingresos anticipados son el instrumento; el principio de devengo, la razón.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Situación", "¿Se reconoce en balance?", "¿Se informa en memoria?"],
          filas: [
            { nom: "Obligación presente, probable y estimable", sub: "Se cumplen las tres condiciones", cols: ["Sí, provisión", "Sí"] },
            { nom: "Obligación presente pero no probable", sub: "Menos del 50 % de probabilidad de salida", cols: ["No, pasivo contingente", "Sí"] },
            { nom: "Obligación presente no estimable con fiabilidad", sub: "Caso muy excepcional", cols: ["No, pasivo contingente", "Sí"] },
            { nom: "Obligación posible, pendiente de un suceso futuro", sub: "Depende de algo que no controla la empresa", cols: ["No, pasivo contingente", "Sí"] },
            { nom: "Derecho probable pero no cierto", sub: "Activo contingente", cols: ["No, nunca", "Solo si la entrada es probable"] },
            { nom: "Derecho prácticamente cierto", sub: "Deja de ser contingente", cols: ["Sí, como activo", "Sí"] },
          ],
          nota: "«Probable» se interpreta como **más probable que lo contrario**, es decir, por encima del 50 %. No es un umbral escrito con precisión en la norma, pero es el criterio universalmente aceptado y el que aplican los auditores.",
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
            { nom: "Valoración de la provisión", sub: "Mejor estimación, descontada si el efecto del tiempo es significativo.", cols: ["$P_0 = \\dfrac{E[\\text{coste}]}{(1+i)^n}$"] },
            { nom: "Actualización financiera anual", sub: "Va a gasto financiero, no a explotación.", cols: ["$\\Delta_t = P_{t-1}\\,i$"] },
            { nom: "Gasto anticipado", sub: "Parte de un pago que corresponde al ejercicio siguiente.", cols: ["GA = Pago × (días posteriores al cierre / días cubiertos)"] },
            { nom: "Ingreso anticipado", sub: "Cobro que remunera un servicio aún no prestado.", cols: ["IA = Cobro × (días posteriores al cierre / días cubiertos)"] },
            { nom: "Provisión por contrato oneroso", sub: "Cuando cumplir el contrato cuesta más que incumplirlo.", cols: ["P = mín(coste de cumplir ; indemnización por incumplir)"] },
          ],
          nota: "Cuando la estimación es un rango de valores igualmente probables, se toma el **punto medio**. Cuando hay una población grande de casos similares —garantías de venta, por ejemplo— se usa el valor esperado ponderado por probabilidades.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos casos de manual",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Caso A. Periodificación.** El 1 de octubre se paga una póliza de seguro de 12.000 € que cubre los doce meses siguientes. El ejercicio cierra el 31 de diciembre.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Pago realizado", "—", "12.000 €"],
            ["Meses consumidos en el ejercicio", "octubre a diciembre", "3 de 12"],
            ["Gasto del ejercicio", "12.000 × 3/12", "3.000 €"],
            { celdas: ["Gasto anticipado (activo)", "12.000 × 9/12", "9.000 €"], clase: "total" },
          ],
          nota: "Los 9.000 € figuran en el activo corriente como derecho a recibir un servicio ya pagado. No es un gasto diferido por conveniencia: es que el servicio todavía no se ha prestado.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Caso B. Provisión por desmantelamiento.** Una empresa instala una planta con la obligación legal de restaurar el terreno al cabo de diez años. El coste estimado de la restauración es de **200.000 €** y la tasa de descuento adecuada al riesgo es del **4 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Momento", "Cálculo", "Importe"],
          filas: [
            ["Valor actual de la obligación", "$200.000 / 1{,}04^{10}$", "135.113 €"],
            ["Se capitaliza en el inmovilizado", "mayor valor de la planta", "135.113 €"],
            ["Provisión reconocida en el pasivo", "misma cuantía", "135.113 €"],
            ["Actualización financiera del año 1", "135.113 × 4 %", "5.405 €"],
            ["Provisión al cierre del año 1", "135.113 + 5.405", "140.518 €"],
            { celdas: ["Provisión al cabo de 10 años", "por acumulación", "200.000 €"], clase: "total" },
          ],
          nota: "Dos efectos distintos en la cuenta de resultados cada año: la **amortización** de los 135.113 € capitalizados, que es gasto de explotación, y la **actualización** de la provisión, que es gasto financiero. Confundirlos deforma el resultado de explotación y el EBITDA.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el litigio de 500.000 euros",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un cliente reclama judicialmente 500.000 € por un defecto de suministro. Los abogados de la empresa estiman en un **60 %** la probabilidad de una condena, y cifran el importe más probable en 300.000 € una vez descontadas las pretensiones que consideran inasumibles.",
            "Hay obligación presente derivada de un suceso pasado —el suministro defectuoso—, la salida de recursos es probable y el importe es estimable. Se dota una **provisión de 300.000 €** con cargo a resultados, y se informa en la memoria del rango completo de la reclamación y de las hipótesis empleadas.",
            "Cambia ahora un solo dato: los abogados estiman la probabilidad de condena en un **35 %**. No hay provisión. El pasivo pasa a ser contingente y solo se describe en la memoria. El balance no se mueve y el resultado del ejercicio es 300.000 € mayor, con los mismos hechos y la misma demanda sobre la mesa.",
            "Ese salto discreto en torno al 50 % es la debilidad estructural del sistema y la razón de que las provisiones sean el terreno favorito de la contabilidad creativa. La defensa habitual es doble: exigir la opinión escrita de asesores externos y vigilar el **patrón temporal** de las dotaciones. Una empresa que dota provisiones cuantiosas en un año malo —cuando el resultado ya está perdido— y las revierte en años buenos está alisando su beneficio, y el rastro queda en el movimiento de las cuentas de provisiones año a año, aunque cada dotación aislada parezca defendible.",
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
            { t: "Confundir provisión con deterioro", d: "El deterioro corrige a la baja el valor de un activo y figura minorándolo en el propio activo. La provisión es un pasivo, y va al lado derecho del balance. El lenguaje coloquial —«provisionar un cliente moroso»— alimenta la confusión: eso es un deterioro de créditos comerciales, no una provisión." },
            { t: "Dotar provisiones para gastos futuros previstos", d: "Un plan de renovación de flota o una campaña de marketing del año que viene no generan obligación presente: la empresa puede decidir no hacerlos. Sin obligación presente derivada de un suceso pasado no hay provisión, por muy seguro que parezca el desembolso." },
            { t: "Llevar la actualización financiera a gastos de explotación", d: "El incremento anual de la provisión por el paso del tiempo es un gasto financiero. Registrarlo en explotación empeora artificialmente el resultado operativo y el EBITDA, y distorsiona cualquier comparación sectorial." },
            { t: "Reconocer activos contingentes", d: "Un pleito que se está ganando, una subvención solicitada, una indemnización reclamada: nada de eso entra en el balance hasta que la entrada de recursos es prácticamente cierta. La asimetría respecto de los pasivos es intencionada y responde al principio de prudencia." },
            { t: "Usar provisiones para alisar el resultado", d: "Dotar en exceso en años buenos para revertir en años malos —o al revés, la llamada «limpieza de cajón» en el primer año de una nueva dirección— es una manipulación clásica. Cada dotación puede parecer razonable; el patrón plurianual la delata." },
            { t: "Periodificar por criterio de facturación en lugar de por servicio prestado", d: "Que la factura cubra el año natural no significa que el servicio se preste uniformemente. En contratos con prestación irregular hay que repartir según el grado de avance real, no por días de calendario." },
            { t: "Olvidar revisar las provisiones al cierre siguiente", d: "No son un apunte que se hace y se olvida. Cada cierre hay que reestimarlas, ajustarlas al alza o a la baja y revertir las que dejen de tener sentido. Una provisión antigua que nunca se mueve suele ser una provisión mal planteada." },
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
            "Este es uno de los puntos donde el SEC 2010 es mucho más restrictivo que el PGC, y la razón es estructural.",
          ],
          lista: [
            "En cuentas nacionales un pasivo exige una **contrapartida identificable**: alguien tiene que tener el activo correspondiente. Una provisión genérica por riesgos no cumple esa condición y, por tanto, **no es un pasivo del SEC**.",
            "Las **provisiones por pensiones** de los sistemas de empleo sí se registran, como derechos de pensión (AF.63), porque hay beneficiarios concretos con un derecho reconocido frente a la unidad.",
            "Las **garantías** se tratan de forma asimétrica según su tipo: las garantías normalizadas, emitidas en gran número y con siniestralidad estadísticamente estimable, se registran como pasivo (AF.66); las garantías puntuales no, y quedan como pasivos contingentes fuera de balance.",
            "Los **pasivos contingentes de las administraciones públicas** —avales, garantías puntuales, litigios— se publican en información complementaria precisamente porque no entran en la deuda, aunque afecten a la evaluación de su sostenibilidad.",
            "La periodificación, en cambio, es común: el registro por devengo del SEC produce exactamente los mismos ajustes de imputación temporal que las cuentas 480 y 485 del PGC.",
          ],
          cierre:
            "La consecuencia práctica es que el patrimonio neto contable de una empresa y su valor neto en cuentas nacionales pueden diferir de forma sistemática por el simple hecho de que las provisiones genéricas existen en uno y no en el otro.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué tres condiciones deben concurrir para reconocer una provisión?", a: "Obligación presente derivada de un suceso pasado, probabilidad de salida de recursos y estimación fiable del importe. Si falla cualquiera de ellas, hay pasivo contingente y solo información en memoria." },
            { q: "Una empresa quiere dotar una provisión para renovar su flota dentro de tres años. ¿Procede?", a: "No. No existe obligación presente derivada de un suceso pasado: la empresa puede decidir no renovar. Sin obligación no hay pasivo, por muy planificado que esté el desembolso." },
            { q: "La provisión por desmantelamiento crece 5.405 € el primer año. ¿Dónde va ese gasto?", a: "A gastos financieros. Es la actualización del valor actual por el mero paso del tiempo, no un mayor coste de la obligación. Llevarlo a explotación deforma el EBITDA." },
            { q: "Se gana un pleito en primera instancia por 400.000 €, pero la sentencia está recurrida. ¿Se reconoce el ingreso?", a: "No. Es un activo contingente y no se reconoce hasta que la entrada de recursos sea prácticamente cierta. Como mucho se informa en memoria si es probable. La asimetría con los pasivos es deliberada." },
            { q: "¿Por qué una provisión genérica por riesgos no es un pasivo en contabilidad nacional?", a: "Porque el SEC exige que todo pasivo tenga un acreedor identificable que registre el activo correspondiente. Sin contrapartida concreta no hay instrumento financiero, y la provisión queda fuera del balance del sector." },
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
            { ref: "PGC, norma de registro y valoración 15.ª", nota: "provisiones y contingencias. Es corta y define con precisión las tres condiciones." },
            { ref: "PGC, normas de registro y valoración sobre imputación temporal", nota: "para la parte de periodificación, junto con las definiciones de las cuentas 480, 485, 567 y 568." },
            { ref: "Amat, Contabilidad creativa", nota: "el capítulo sobre provisiones como instrumento de alisado del resultado. Útil para saber qué patrón buscar." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 5 y 20", nota: "instrumentos financieros y sector de las administraciones públicas, incluidos garantías y pasivos contingentes." },
          ],
        },
      ],
    },
  ],
};
