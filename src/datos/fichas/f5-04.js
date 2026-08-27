/* Ficha 5.04 — Principios contables y criterios de valoración. */

export default {
  codigo: "5.04",
  titulo: "Principios contables y criterios de valoración",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "4 h",
  nucleo:
    "Seis principios deciden cuándo se reconoce un hecho y diez criterios deciden por cuánto. La mayor parte de las discusiones contables serias no son sobre asientos: son sobre qué criterio de valoración aplica y qué principio prevalece cuando dos apuntan en direcciones opuestas.",
  requiere: "5.03 Estructura del PGC",
  abre: "5.05 Existencias · 5.06 Inmovilizado · 5.07 Instrumentos financieros",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los principios contables no son consejos: son norma de obligado cumplimiento recogida en el marco conceptual del PGC. Están redactados como reglas de conducta ante la incertidumbre, que es el problema central de la contabilidad. Si todos los hechos económicos fueran ciertos y estuvieran cerrados, no harían falta.",
            "El de **empresa en funcionamiento** es el supuesto de base y condiciona a todos los demás: se asume que la actividad continuará en un futuro previsible, y por eso los activos se valoran por su utilidad en el negocio y no por lo que darían en una liquidación. Cuando ese supuesto se rompe —y la dirección debe evaluarlo cada año— hay que cambiar el criterio de valoración entero, no solo añadir una nota.",
            "El de **devengo** es el que más cuesta interiorizar y el que más consecuencias tiene, porque separa la contabilidad de la tesorería. El de **prudencia** introduce una asimetría deliberada: las pérdidas se reconocen en cuanto son conocidas y las ganancias solo cuando se realizan. El de **no compensación** prohíbe netear partidas de activo con pasivo o de ingreso con gasto, aunque el neto sea informativo. El de **uniformidad** obliga a mantener el criterio elegido en el tiempo. Y el de **importancia relativa** permite apartarse de todos ellos cuando la diferencia sea irrelevante, lo cual es a la vez una válvula de sensatez y la puerta por la que se cuelan bastantes abusos.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Principio", "Qué obliga", "Dónde muerde"],
          filas: [
            { nom: "Empresa en funcionamiento", sub: "La actividad continúa en un futuro previsible", cols: ["Valorar por uso, no por liquidación", "Empresas en crisis"] },
            { nom: "Devengo", sub: "Imputar por corriente real, no por corriente monetaria", cols: ["Separar ingreso de cobro", "Ventas y compras a plazo"] },
            { nom: "Uniformidad", sub: "Mantener el criterio adoptado entre ejercicios", cols: ["No cambiar de método a conveniencia", "Comparabilidad temporal"] },
            { nom: "Prudencia", sub: "Reconocer pérdidas conocidas, no ganancias no realizadas", cols: ["Asimetría deliberada", "Deterioros y provisiones"] },
            { nom: "No compensación", sub: "No netear activo con pasivo ni ingreso con gasto", cols: ["Presentar en bruto", "Clientes y proveedores del mismo grupo"] },
            { nom: "Importancia relativa", sub: "Se admite la no aplicación estricta si el efecto es irrelevante", cols: ["Válvula de sensatez", "Partidas menores"] },
          ],
          nota: "Ninguno tiene rango superior a los demás en el texto vigente. Cuando entran en conflicto, prevalece el que mejor conduzca a la imagen fiel, y la elección debe justificarse en la memoria.",
        },
      ],
    },
    {
      titulo: "Los criterios de valoración",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El marco conceptual define diez. Los seis que siguen son los que aparecen una y otra vez en el resto del plan; conviene tenerlos con su definición exacta, porque las normas de registro y valoración los invocan por su nombre sin volver a explicarlos.",
          ],
        },
        {
          tipo: "rejilla",
          modo: "dos",
          filas: [
            { nom: "Coste histórico", sub: "Precio de adquisición o coste de producción. Es el criterio por defecto.", cols: ["Lo que costó, más los gastos hasta ponerlo en uso"] },
            { nom: "Valor razonable", sub: "Referencia a mercado activo; si no lo hay, técnicas de valoración.", cols: ["Importe por el que se intercambiaría entre partes informadas"] },
            { nom: "Valor neto realizable", sub: "Propio de las existencias.", cols: ["Precio estimado de venta − costes de terminación y venta"] },
            { nom: "Valor en uso", sub: "Requiere estimar flujos y elegir una tasa de descuento.", cols: ["Valor actual de los flujos futuros esperados del activo"] },
            { nom: "Coste amortizado", sub: "Propio de los instrumentos financieros.", cols: ["Valoración inicial $\\pm$ amortización del tipo de interés efectivo $-$ deterioro"] },
            { nom: "Valor contable", sub: "No es un criterio de medición, es el saldo resultante.", cols: ["Importe neto por el que el elemento figura en el balance"] },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "La articulación entre criterios es lo que hay que dominar. Un mismo elemento entra por **coste histórico**, permanece por coste histórico menos amortización y menos deterioro, y para saber si hay deterioro se compara ese valor contable con el **importe recuperable**, que a su vez es el mayor entre el valor razonable menos costes de venta y el valor en uso. Cinco criterios encadenados para responder a una sola pregunta: ¿vale todavía lo que dice el balance?",
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: seis valores para la misma máquina",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una máquina comprada hace tres años por 40.000 €, con 15.000 € de amortización acumulada. Al cierre, el mercado de segunda mano la sitúa en 30.000 €, venderla costaría 2.000 € en desmontaje y transporte, y los flujos que se espera obtener de ella descontados suman 22.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Criterio", "Importe", "Para qué se usa aquí"],
          filas: [
            ["Coste histórico", "40.000 €", "Valoración inicial, permanece en el activo bruto"],
            ["Amortización acumulada", "−15.000 €", "Consumo imputado en tres ejercicios"],
            ["Valor contable", "25.000 €", "Lo que hoy figura en balance"],
            ["Valor razonable", "30.000 €", "Referencia de mercado, antes de costes"],
            ["Valor razonable − costes de venta", "28.000 €", "Primera rama del importe recuperable"],
            ["Valor en uso", "22.000 €", "Segunda rama del importe recuperable"],
            { celdas: ["Importe recuperable = máx(28.000; 22.000)", "28.000 €", "El mayor de las dos ramas"], clase: "total" },
          ],
          nota: "Como el importe recuperable (28.000 €) supera al valor contable (25.000 €), **no hay deterioro**. Y la plusvalía latente de 3.000 € tampoco se registra: el principio de prudencia impide reconocer una ganancia no realizada.",
        },
        {
          tipo: "parrafos",
          items: [
            "Invierte ahora un solo dato: supón que el valor en uso fuera 22.000 € y el valor razonable menos costes de venta, 20.000 €. El importe recuperable pasaría a 22.000 €, por debajo del valor contable, y habría que dotar un deterioro de **3.000 €**. La misma máquina, los mismos tres años, y un resultado 3.000 € menor. Ahí se ve por qué la elección de la tasa de descuento en el valor en uso es materia de auditoría y no un detalle técnico.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: prudencia contra valor razonable",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa tiene una cartera de acciones cotizadas que ha subido un 40 % en el ejercicio y un solar cuyo valor de mercado también ha subido, en proporción parecida. Registra la plusvalía de las acciones y no la del solar. ¿Incoherencia?",
            "No: son dos regímenes distintos. Los instrumentos financieros mantenidos para negociar se valoran a **valor razonable con cambios en resultados**, porque existe un mercado activo que da un precio objetivo y verificable a diario. El inmovilizado material se mantiene a **coste histórico** amortizado, porque su valor de mercado exigiría una tasación —discutible, cara y manipulable— y porque la empresa no lo tiene para vender.",
            "El criterio de fondo no es «prudencia siempre», sino **fiabilidad de la medición**. Donde hay un precio observable y el activo se tiene para realizar, se admite reconocer la ganancia. Donde el valor depende de una estimación propia, la prudencia se impone. Toda la evolución del PGC desde 2007, y en particular la reforma de 2021, se puede leer como un desplazamiento cuidadoso de la frontera entre esos dos territorios.",
            "**Consecuencia práctica al leer unas cuentas:** antes de comparar el patrimonio neto de dos empresas, mira qué proporción de su activo está a valor razonable y qué proporción a coste histórico. Dos balances con la misma cifra pueden estar midiendo cosas muy distintas.",
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
            { t: "Entender la prudencia como «poner siempre la cifra más baja»", d: "La prudencia no autoriza a infravalorar sistemáticamente. Crear reservas ocultas dotando deterioros excesivos es tan incorrecto como inflar el activo, y además vulnera la imagen fiel. El principio obliga a reconocer las pérdidas conocidas, no a inventarse pérdidas probables." },
            { t: "Confundir valor razonable con valor de tasación", d: "El valor razonable exige, por este orden, precio cotizado en mercado activo, transacciones recientes comparables y, en último lugar, técnicas de valoración. Una tasación es una estimación aceptable solo cuando no hay nada mejor, y el PGC obliga a explicar la jerarquía empleada." },
            { t: "Compensar saldos del mismo tercero", d: "Si una empresa es a la vez cliente y proveedor, los saldos figuran en bruto a uno y otro lado del balance, salvo que exista un derecho legal de compensación y la intención de liquidar por el neto. Netear por comodidad reduce artificialmente el tamaño del balance y distorsiona los ratios de rotación." },
            { t: "Cambiar de criterio y llamarlo «mejora»", d: "El principio de uniformidad no impide cambiar de criterio, pero exige que haya una razón, que el cambio se aplique con efecto retroactivo cuando proceda y que se cuantifique su impacto en la memoria. Los cambios de criterio sin justificación explícita son una de las señales de alerta clásicas en el análisis de estados financieros." },
            { t: "Usar la importancia relativa como excusa general", d: "Es un principio para partidas cuya omisión o inexactitud no altera la decisión de un usuario informado. No cubre errores sistemáticos, ni partidas pequeñas que en conjunto suman, ni incumplimientos que benefician siempre en la misma dirección." },
            { t: "Aplicar el valor en uso sin justificar la tasa de descuento", d: "El valor en uso es el criterio más manipulable de todos porque un punto de tasa de descuento cambia el resultado del test de deterioro. Debe reflejar el riesgo específico del activo y ser coherente con la usada en otras estimaciones de la empresa." },
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
            "Aquí las dos contabilidades divergen de verdad, y merece la pena tener clara la razón: persiguen objetivos distintos.",
          ],
          lista: [
            "El SEC 2010 valora **a precios corrientes de mercado**, no a coste histórico. No hay valoración por lo que costó: hay valoración por lo que vale ahora.",
            "**No existe el principio de prudencia.** Las revalorizaciones se registran, con signo positivo o negativo, en la cuenta de revalorización. Una plusvalía latente que la empresa no puede reconocer sí aparece en las cuentas de patrimonio del sector.",
            "El **devengo** sí es común a ambos sistemas, y es de hecho uno de los pilares del SEC: las operaciones se registran cuando se crea, transforma o extingue el valor económico, no cuando se paga.",
            "El equivalente de la amortización, el **consumo de capital fijo**, se calcula a precios de reposición corrientes con vidas útiles estadísticas, no con las tablas contables ni fiscales de cada empresa.",
          ],
          cierre:
            "La razón de la divergencia es la finalidad. El PGC protege a acreedores e inversores frente a un patrimonio inflado, y por eso es asimétrico. El SEC mide agregados macroeconómicos comparables entre países y períodos, y una asimetría sistemática los sesgaría.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El valor contable de un activo es 50.000 €, su valor razonable menos costes de venta 47.000 € y su valor en uso 52.000 €. ¿Hay deterioro?", a: "No. El importe recuperable es el mayor de los dos, 52.000 €, y supera al valor contable. Que una de las dos ramas quede por debajo no basta: la empresa siempre puede optar por la alternativa que más le recupere." },
            { q: "¿Por qué se puede reconocer la plusvalía de unas acciones cotizadas y no la de un edificio?", a: "Porque el criterio de fondo es la fiabilidad de la medición. Hay un precio observable y objetivo para las acciones mantenidas para negociar; el valor del edificio dependería de una estimación propia, y ahí la prudencia se impone." },
            { q: "Una empresa deja de aplicar el supuesto de empresa en funcionamiento. ¿Qué cambia?", a: "El criterio de valoración entero. Los activos dejan de valorarse por su utilidad en el negocio y pasan a valorarse por su importe de realización o liquidación, y las deudas por el importe al que se espera cancelarlas. Es un cambio de régimen, no un ajuste." },
            { q: "¿Puede la importancia relativa justificar no dotar un deterioro de 200 € en una empresa con 30 millones de activo?", a: "Sí, si la omisión no altera la decisión de un usuario informado de las cuentas. Lo que no puede es amparar la omisión sistemática de deterioros pequeños que en conjunto sean significativos, ni un sesgo que siempre favorezca al resultado." },
            { q: "Nombra el criterio: precio estimado de venta menos los costes necesarios para terminar y vender.", a: "Valor neto realizable. Es el criterio propio de las existencias, y compararlo con el precio de adquisición o coste de producción es lo que determina si hay que dotar deterioro." },
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
              q: "¿Qué significa el principio de prudencia?",
              opciones: [
                "Elegir siempre la cifra más baja del activo y la más alta del pasivo",
                "Reconocer las pérdidas conocidas aunque no se hayan materializado, sin autorizar a infravalorar sistemáticamente",
                "Dotar provisiones por cualquier riesgo imaginable",
                "Aplazar el reconocimiento de ingresos hasta el cobro",
              ],
              correcta: 1,
              porque: [
                "Infravalorar de forma sistemática crea reservas ocultas, y eso es tan incorrecto como inflar el activo: distorsiona igual, solo que en la otra dirección.",
                "La asimetría es deliberada —los riesgos se reconocen antes que las ganancias— pero está acotada: no es una licencia para reducir el resultado a voluntad.",
                "Los riesgos remotos no se provisionan; hacerlo sería precisamente la infravaloración sistemática que la prudencia no ampara.",
                "Eso contradiría el devengo, que es otro principio y no queda derogado por la prudencia.",
              ],
            },
            {
              q: "¿Qué es el valor razonable de un activo?",
              opciones: [
                "El valor de tasación que emita un experto independiente",
                "El precio cotizado en mercado activo y, en su defecto, transacciones comparables y solo al final técnicas de valoración",
                "El coste de adquisición actualizado por la inflación",
                "El importe que la empresa espera obtener al venderlo algún día",
              ],
              correcta: 1,
              porque: [
                "La tasación es una técnica de valoración, que es el último recurso de la jerarquía y no el primero.",
                "El orden importa mucho: cuanto más se baja en la jerarquía, más discrecional es la cifra y más explicación exige la memoria.",
                "La actualización por inflación es otra convención distinta y no está entre los criterios del PGC.",
                "Una expectativa propia no es un valor razonable: hace falta la referencia de un mercado o de transacciones reales.",
              ],
            },
            {
              q: "Una empresa es a la vez cliente y proveedor de otra. ¿Puede presentar el saldo neto?",
              opciones: [
                "Sí: refleja mejor la posición real entre ambas",
                "No: figuran en bruto a uno y otro lado del balance, salvo derecho legal de compensación",
                "Sí, si ambos saldos vencen en el mismo plazo",
                "Sí, si la diferencia es pequeña",
              ],
              correcta: 1,
              porque: [
                "Compensar oculta el tamaño real del crédito concedido y de la deuda asumida, que son informaciones distintas para quien lee las cuentas.",
                "El principio de no compensación protege esa información. Solo cede cuando existe un derecho legal exigible a liquidar por el neto.",
                "La coincidencia de vencimientos no crea por sí sola el derecho de compensación.",
                "La importancia relativa no ampara ocultar la estructura de una relación comercial.",
              ],
            },
            {
              q: "Un test de deterioro se resuelve con el valor en uso. ¿Qué exige especial cuidado?",
              opciones: [
                "Estimar bien la vida útil restante del activo",
                "Justificar la tasa de descuento: un punto de diferencia cambia el resultado del test",
                "Usar el mismo criterio que el ejercicio anterior",
                "Contar con una tasación externa",
              ],
              correcta: 1,
              porque: [
                "La vida útil influye, pero el valor en uso es sobre todo sensible al descuento de los flujos futuros.",
                "Es el criterio más manipulable de todos: debe reflejar el riesgo específico del activo y no la conveniencia del resultado, y la memoria tiene que explicarlo.",
                "La uniformidad es exigible, pero por sí sola no impide que una tasa mal elegida se repita cada año.",
                "Una tasación externa serviría para el valor razonable menos costes de venta, que es el otro término de la comparación.",
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
            { ref: "RD 1514/2007, PGC, primera parte, apartados 3 y 6", nota: "los principios y los criterios de valoración con su redacción literal. Son pocas páginas y conviene leerlas en el original, no en un resumen." },
            { ref: "Wanden-Berghe, Contabilidad financiera", nota: "buen desarrollo de la articulación entre criterios, con el test de deterioro trabajado paso a paso." },
            { ref: "Consultas del ICAC sobre valor razonable y deterioro", nota: "los casos límite, que es donde de verdad se aprende a distinguir un criterio de otro." },
            { ref: "Amat, Contabilidad creativa", nota: "el reverso: cómo se abusa de la importancia relativa, del cambio de criterio y de la estimación del valor en uso." },
          ],
        },
      ],
    },
  ],
};
