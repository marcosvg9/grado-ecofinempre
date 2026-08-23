/* Ficha 5.03 — El PGC español: estructura y marco conceptual. */

export default {
  codigo: "5.03",
  titulo: "El PGC español: estructura y marco conceptual",
  nivel: 1,
  bloque: "Contabilidad financiera",
  tiempo: "3 h",
  nucleo:
    "El Plan General de Contabilidad no es un catálogo de asientos: es una norma jurídica con una jerarquía interna. Primero fija por qué se contabiliza (marco conceptual), luego cómo se valora cada partida, y solo al final propone unos códigos de cuenta que ni siquiera son obligatorios.",
  requiere: "5.02 Partida doble y ciclo contable",
  abre: "5.04 Principios y criterios de valoración · 5.10 Cuentas anuales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El PGC vigente se aprobó por el **Real Decreto 1514/2007** y se reformó en profundidad por el **RD 1/2021**, que alineó el tratamiento de los instrumentos financieros y del reconocimiento de ingresos con las NIIF adoptadas por la Unión Europea. Existe además un **PGC de Pymes** (RD 1515/2007), más corto, al que pueden acogerse las empresas que no superen ciertos límites de activo, cifra de negocios y plantilla.",
            "La estructura en cinco partes es lo primero que conviene interiorizar, porque determina qué es obligatorio y qué no. **Las tres primeras partes obligan; las dos últimas orientan.** Esto sorprende a casi todo el mundo: los números de cuenta que uno memoriza con esfuerzo —el 572, el 400— no son de aplicación obligatoria. Lo que obliga es el criterio de registro y valoración que hay detrás.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Parte del PGC", "Qué contiene", "Carácter"],
          filas: [
            { nom: "1. Marco conceptual", sub: "Imagen fiel, principios, elementos, criterios de valoración", cols: ["El porqué", "Obligatoria"] },
            { nom: "2. Normas de registro y valoración", sub: "Veintitrés normas: existencias, inmovilizado, instrumentos financieros, ingresos…", cols: ["El cómo", "Obligatoria"] },
            { nom: "3. Cuentas anuales", sub: "Normas de elaboración y modelos oficiales", cols: ["La salida", "Obligatoria"] },
            { nom: "4. Cuadro de cuentas", sub: "Nueve grupos con su codificación decimal", cols: ["La nomenclatura", "No obligatoria"] },
            { nom: "5. Definiciones y relaciones contables", sub: "Qué recoge cada cuenta y por qué lado se mueve", cols: ["El manual de uso", "No obligatoria"] },
          ],
          nota: "Las partes 4 y 5 no obligan **en cuanto a numeración y denominación**, pero sí vinculan en aquello que contengan criterios de registro o valoración. La libertad es de forma, no de fondo.",
        },
      ],
    },
    {
      titulo: "El marco conceptual por dentro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Son unas quince páginas y son las más rentables del texto. Todo lo demás se deduce de aquí, y cuando una norma concreta guarda silencio sobre un caso, es a este apartado al que hay que volver. Su hilo conductor es la **imagen fiel**: las cuentas anuales deben mostrar el patrimonio, la situación financiera y los resultados de la empresa, y si aplicar una norma impidiera ese objetivo, hay que apartarse de ella y explicarlo en la memoria.",
          ],
        },
        {
          tipo: "pasos",
          items: [
            ["Cuentas anuales e imagen fiel", "El objetivo del sistema. Todo lo demás son medios para llegar aquí."],
            ["Requisitos de la información", "Relevante y fiable; además comparable y clara. Son exigencias sobre la información, no sobre los hechos."],
            ["Principios contables", "Seis: empresa en funcionamiento, devengo, uniformidad, prudencia, no compensación e importancia relativa."],
            ["Elementos de las cuentas anuales", "Definiciones de activo, pasivo, patrimonio neto, ingreso y gasto. Más restrictivas de lo que parece."],
            ["Criterios de registro o reconocimiento", "Cuándo entra un elemento en las cuentas: cuando sea probable el flujo y su valor pueda estimarse con fiabilidad."],
            ["Criterios de valoración", "Por cuánto entra y por cuánto permanece. Diez definiciones que se usan en toda la parte segunda."],
            ["Principios y normas generalmente aceptados", "La jerarquía de fuentes cuando el PGC no resuelve el caso."],
          ],
        },
      ],
    },
    {
      titulo: "Cómo se lee un código de cuenta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La codificación es decimal y jerárquica: cada dígito que se añade a la derecha desciende un nivel de detalle. No hay que memorizarla, hay que saber navegarla.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Nivel", "Código", "Denominación"],
          filas: [
            ["Grupo", "5", "Cuentas financieras"],
            ["Subgrupo", "57", "Tesorería"],
            ["Cuenta", "572", "Bancos e instituciones de crédito c/c vista, euros"],
            ["Subcuenta (libre)", "5720001", "Banco X, cuenta operativa"],
          ],
          nota: "Del cuarto dígito en adelante la empresa decide. Ahí es donde se adapta el plan a la realidad de cada negocio.",
        },
        {
          tipo: "tabla",
          cabecera: ["Grupo", "Contenido", "Destino al cierre"],
          filas: [
            ["1 · Financiación básica", "Patrimonio neto y deuda a largo plazo", "Balance"],
            ["2 · Activo no corriente", "Inmovilizado material, intangible e inversiones a largo", "Balance"],
            ["3 · Existencias", "Mercaderías, materias primas, productos en curso", "Balance"],
            ["4 · Acreedores y deudores comerciales", "Clientes, proveedores, Hacienda, Seguridad Social", "Balance"],
            ["5 · Cuentas financieras", "Tesorería e inversiones a corto plazo", "Balance"],
            ["6 · Compras y gastos", "Consumos, personal, servicios, amortizaciones", "Pérdidas y ganancias"],
            ["7 · Ventas e ingresos", "Ventas, prestaciones de servicios, ingresos financieros", "Pérdidas y ganancias"],
            ["8 · Gastos imputados al patrimonio neto", "Partidas que no pasan por resultados", "Estado de cambios en el PN"],
            ["9 · Ingresos imputados al patrimonio neto", "Partidas que no pasan por resultados", "Estado de cambios en el PN"],
          ],
          nota: "La frontera decisiva está entre el 5 y el 6: **los grupos 1 a 5 sobreviven al cierre y los grupos 6 y 7 mueren cada 31 de diciembre**, cancelados contra el resultado. Por eso el balance acumula historia y la cuenta de resultados solo cuenta un año.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué hacer cuando el PGC calla",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Aparece una operación que ninguna de las normas de registro y valoración contempla: un contrato de permuta con condiciones atípicas, un instrumento híbrido, una subvención con cláusulas poco habituales. No es una situación rara; el plan no puede prever todo.",
            "La secuencia correcta es descendente. Primero, la **analogía**: buscar la norma que regule un hecho de naturaleza semejante. Después, el **marco conceptual**: aplicar las definiciones de activo, pasivo, ingreso y gasto y los criterios de reconocimiento directamente. Después, las **resoluciones y consultas del ICAC**, que tienen valor interpretativo y resuelven muchísimos casos concretos. Y en último término, las NIIF-UE como referencia doctrinal, porque el PGC deriva de ellas.",
            "Lo que **no** es una respuesta válida es elegir el tratamiento que deje mejor el resultado. Y lo que casi nunca es una buena idea es inventarse una cuenta nueva antes de haber recorrido esa escalera: la mayoría de las veces la operación sí encaja en algo previsto, solo que con otro nombre.",
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
            { t: "Estudiar el cuadro de cuentas antes que el marco conceptual", d: "Es el orden inverso al útil. El cuadro de cuentas es la parte menos vinculante y la más fácil de consultar; el marco conceptual es la parte obligatoria y la que permite resolver casos nuevos. Memorizar códigos sin entender los criterios produce contables que saben dónde apuntar pero no qué." },
            { t: "Creer que los números de cuenta son obligatorios", d: "No lo son. Una empresa puede usar su propia codificación siempre que respete los criterios de registro y valoración y presente los modelos oficiales de cuentas anuales. En la práctica casi todo el mundo sigue el cuadro del PGC porque facilita la comunicación, pero es una convención, no una imposición." },
            { t: "Confundir el PGC con la normativa fiscal", d: "Son dos cuerpos normativos distintos con finalidades distintas. El resultado contable es el punto de partida de la base imponible del Impuesto sobre Sociedades, pero se corrige con ajustes extracontables. Una amortización puede ser correcta contablemente y no deducible fiscalmente." },
            { t: "Aplicar el PGC de Pymes por tamaño percibido", d: "Los límites son cuantitativos y deben cumplirse durante dos ejercicios consecutivos. No basta con «ser pequeña». Y algunas operaciones (instrumentos financieros complejos, por ejemplo) obligan a acudir al plan general aunque se cumplan los límites." },
            { t: "Olvidar que la memoria es una cuenta anual más", d: "No es un anexo opcional. Forma parte de las cuentas anuales con el mismo rango que el balance, y es donde se explican las políticas contables elegidas, los cambios de criterio y las cifras que el resto de estados no puede mostrar." },
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
            "El paralelismo estructural entre el PGC y el SEC 2010 es casi punto por punto, y verlo ahorra mucho tiempo de aprendizaje.",
          ],
          lista: [
            "El **marco conceptual** del PGC cumple la función del capítulo 1 del SEC 2010: definiciones, unidades, criterios de registro y momento de imputación.",
            "Las **normas de registro y valoración** equivalen a los capítulos por tipo de transacción y de activo del SEC.",
            "El **cuadro de cuentas** tiene su análogo en las clasificaciones del SEC: sectores institucionales (S.11 a S.15), operaciones (P, D, B, F) e instrumentos financieros (AF).",
            "Los **modelos de cuentas anuales** se corresponden con la secuencia de cuentas y los cuadros de síntesis que se publican.",
          ],
          cierre:
            "Diferencia de fondo: el PGC es una norma jurídica de obligado cumplimiento para cada empresa, con sanción por incumplimiento, mientras que el SEC es un reglamento que obliga al instituto de estadística, no a los agentes cuya actividad describe.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuáles de las cinco partes del PGC son de aplicación obligatoria?", a: "Las tres primeras: marco conceptual, normas de registro y valoración, y cuentas anuales. El cuadro de cuentas y las definiciones y relaciones contables no obligan en cuanto a numeración y denominación, aunque sí vinculan en lo que contengan de criterio valorativo." },
            { q: "Una empresa cambia el nombre de la cuenta 572 por «Caja bancaria». ¿Incumple el PGC?", a: "No, siempre que el criterio de registro y valoración sea el correcto y las cuentas anuales se presenten según los modelos oficiales. La parte cuarta no obliga en denominación." },
            { q: "¿Por qué los grupos 6 y 7 no aparecen en el balance?", a: "Porque se cancelan al cierre contra el resultado del ejercicio, que sí figura en el patrimonio neto. Son cuentas de flujo, no de stock: miden lo ocurrido en un período, no lo que hay en una fecha." },
            { q: "Aparece una operación que ninguna norma de registro y valoración regula. ¿Qué haces?", a: "Analogía con la norma más próxima, después aplicación directa del marco conceptual, después resoluciones y consultas del ICAC, y en último término las NIIF-UE como referencia. Nunca elegir el criterio por su efecto en el resultado." },
            { q: "¿Qué introdujo el RD 1/2021 respecto del texto de 2007?", a: "Alineó con las NIIF-UE el tratamiento de los instrumentos financieros y el reconocimiento de ingresos por ventas y prestación de servicios, reescribiendo sustancialmente esas normas de registro y valoración." },
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
            { ref: "RD 1514/2007, texto consolidado en el BOE", nota: "la fuente. Lee entera la primera parte y hojea el cuadro de cuentas sin intentar memorizarlo." },
            { ref: "RD 1/2021, de 12 de enero", nota: "la reforma que actualizó instrumentos financieros e ingresos. Conviene saber qué cambió si consultas manuales anteriores a esa fecha." },
            { ref: "Consultas del ICAC (BOICAC)", nota: "buscador público. Es la jurisprudencia práctica del plan y resuelve el 90 % de los casos raros." },
            { ref: "Muñoz Merchante, Fundamentos de contabilidad", nota: "para el recorrido guiado por la estructura del plan con ejemplos." },
          ],
        },
      ],
    },
  ],
};
