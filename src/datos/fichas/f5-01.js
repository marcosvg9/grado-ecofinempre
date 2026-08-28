/* Ficha 5.01 — Patrimonio, masas patrimoniales y ecuación fundamental. */

export default {
  codigo: "5.01",
  titulo: "Patrimonio, masas patrimoniales y ecuación fundamental",
  nivel: 1,
  bloque: "Contabilidad financiera",
  tiempo: "3 h",
  nucleo:
    "El patrimonio de una empresa admite dos lecturas simultáneas: qué bienes y derechos tiene, y de dónde ha salido el dinero para tenerlos. Ambas listas suman lo mismo por construcción, y esa igualdad es el punto de partida de toda la contabilidad.",
  requiere: "nada previo",
  abre: "5.02 Partida doble · 5.10 Cuentas anuales · 6.06 Análisis patrimonial",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un balance no es una fotografía de la empresa: es la **misma cantidad contada dos veces**. A la izquierda, la estructura económica: en qué está invertido el dinero. A la derecha, la estructura financiera: quién lo puso. Un edificio de 200.000 € aparece una sola vez en el activo, pero su financiación —préstamo, aportación de socios o beneficios retenidos— aparece enfrente. Por eso los dos lados suman igual siempre, sin necesidad de que nadie lo fuerce.",
            "El **activo** recoge bienes y derechos de los que se espera obtener beneficios futuros. El criterio de reconocimiento importa más de lo que parece: una marca comprada figura en el activo y una marca creada internamente no, aunque valgan lo mismo. La contabilidad prefiere omitir un valor real antes que registrar uno dudoso, y esa asimetría explica buena parte de las críticas que recibe.",
            "El **pasivo** son obligaciones presentes surgidas de sucesos pasados. El **patrimonio neto** es lo que queda: no se mide directamente, se obtiene por diferencia. Es un residuo, no una partida. Comprenderlo evita el error de pensar que el neto es «el dinero que tiene la empresa».",
            "Dentro de cada lado, las partidas se agrupan en **masas patrimoniales** ordenadas por un criterio temporal de doce meses: el activo por liquidez creciente (primero lo que tardará en convertirse en dinero), el pasivo por exigibilidad creciente (primero lo que se devuelve más tarde). Esa ordenación no es estética: es lo que permite comparar el activo corriente con el pasivo corriente y diagnosticar la solvencia a corto plazo.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Masa patrimonial", "Qué contiene", "Ejemplos"],
          filas: [
            { nom: "Activo no corriente", sub: "Permanece más de doce meses en la empresa", cols: ["Inversión duradera", "Terrenos, maquinaria, patentes"] },
            { nom: "Activo corriente", sub: "Se convertirá en dinero dentro del ciclo de explotación", cols: ["Liquidez próxima", "Existencias, clientes, bancos"] },
            { nom: "Patrimonio neto", sub: "Activo menos pasivo. Financiación propia, no exigible", cols: ["Sin vencimiento", "Capital, reservas, resultado"] },
            { nom: "Pasivo no corriente", sub: "Deuda exigible a más de doce meses", cols: ["Exigible a largo", "Préstamos a largo plazo"] },
            { nom: "Pasivo corriente", sub: "Deuda exigible dentro de los doce meses", cols: ["Exigible a corto", "Proveedores, deuda a corto"] },
          ],
          nota: "El corte de doce meses es una convención, pero es la convención sobre la que se construyen casi todos los ratios del bloque 6.",
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
            { nom: "Ecuación fundamental", sub: "La igualdad que no se puede romper.", cols: ["A = P + PN"] },
            { nom: "Patrimonio neto como residuo", sub: "Se obtiene por diferencia, nunca por medición directa.", cols: ["PN = A − P"] },
            { nom: "Fondo de maniobra", sub: "Parte del activo corriente financiada con recursos permanentes.", cols: ["FM = AC − PC"] },
            { nom: "Lectura equivalente del fondo de maniobra", sub: "Da el mismo número desde el otro lado del balance.", cols: ["FM = (PN + PNC) − ANC"] },
            { nom: "Ratio de endeudamiento", sub: "Cuánto del activo está financiado por terceros.", cols: ["$e = \\dfrac{P}{P + \\mathrm{PN}}$"] },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "Que las dos expresiones del fondo de maniobra coincidan no es casualidad ni un truco: se deduce en dos líneas de la ecuación fundamental. Merece la pena hacer la deducción a mano una vez, porque es el primer sitio donde se ve que el balance tiene estructura algebraica y no es una simple lista.",
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico",
      contenido: [
        { tipo: "parrafos", items: ["Balance de cierre de una pequeña industria. Antes de leer los totales, intenta clasificar tú cada partida."] },
        {
          tipo: "tabla",
          cabecera: ["Activo", "Importe"],
          filas: [
            ["Terrenos", "120.000 €"],
            ["Construcciones", "200.000 €"],
            ["Amortización acumulada", "−40.000 €"],
            { celdas: ["**Activo no corriente**", "**280.000 €**"], clase: "" },
            ["Existencias", "35.000 €"],
            ["Clientes", "48.000 €"],
            ["Bancos", "12.000 €"],
            { celdas: ["**Activo corriente**", "**95.000 €**"], clase: "" },
            { celdas: ["Total activo", "375.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Patrimonio neto y pasivo", "Importe"],
          filas: [
            ["Capital social", "150.000 €"],
            ["Reservas", "60.000 €"],
            ["Resultado del ejercicio", "15.000 €"],
            { celdas: ["**Patrimonio neto**", "**225.000 €**"], clase: "" },
            ["Deudas a largo plazo", "90.000 €"],
            ["Proveedores", "42.000 €"],
            ["Deudas a corto plazo", "18.000 €"],
            { celdas: ["**Pasivo**", "**150.000 €**"], clase: "" },
            { celdas: ["Total patrimonio neto y pasivo", "375.000 €"], clase: "total" },
          ],
          nota: "Fondo de maniobra = 95.000 − 60.000 = **35.000 €**. Por el otro lado: (225.000 + 90.000) − 280.000 = 35.000 €. Endeudamiento = 150.000 / 375.000 = **40 %**.",
        },
        {
          tipo: "parrafos",
          items: [
            "Un fondo de maniobra positivo de 35.000 € significa que la empresa financia una parte de su circulante con recursos que no le van a exigir el año que viene. Es una posición cómoda, aunque no siempre la óptima: en sectores que cobran al contado y pagan a plazo —supermercados, por ejemplo— el fondo de maniobra negativo es lo normal y lo sano.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: dos empresas con el mismo activo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos talleres tienen exactamente el mismo activo, 375.000 €. En el primero, el patrimonio neto es de 225.000 € y la deuda de 150.000 €. En el segundo, el neto es de 60.000 € y la deuda de 315.000 €. Producen lo mismo, facturan lo mismo y sus balances comparten la mitad izquierda entera.",
            "Si ambos ganan 30.000 €, la rentabilidad sobre el activo es idéntica: un 8 %. Pero sobre los fondos propios, el primero rinde un 13 % y el segundo un 50 %. El apalancamiento multiplica el rendimiento del propietario **y también su riesgo**: una caída del resultado que el primero absorbe sin despeinarse deja al segundo sin capacidad de atender la deuda.",
            "Es el primer contacto con una idea que reaparecerá en 6.07 (descomposición DuPont) y en 7.06 (estructura de capital): la estructura financiera no cambia lo que la empresa produce, cambia cómo se reparte y cuánto riesgo soporta cada quien.",
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
            { t: "Pensar que el patrimonio neto es dinero disponible", d: "El neto es un residuo algebraico, no un saldo bancario. Una empresa con 225.000 € de neto puede tener 12.000 € en el banco, como en el ejemplo. Confundirlos lleva a esperar dividendos que la empresa no puede pagar." },
            { t: "Creer que el balance mide el valor de la empresa", d: "El balance registra coste histórico corregido, no valor de mercado. Deja fuera la marca creada internamente, la cartera de clientes, el conocimiento del equipo. El valor contable y el valor de mercado de una empresa cotizada difieren rutinariamente en un factor de tres o más." },
            { t: "Colocar la amortización acumulada en el pasivo", d: "Es una cuenta correctora de activo: minora la partida a la que acompaña. Aparece a la izquierda con signo negativo, no a la derecha. El error es frecuente porque su saldo es acreedor." },
            { t: "Interpretar un fondo de maniobra negativo como una alarma", d: "Depende del ciclo de explotación. La distribución alimentaria opera con fondo de maniobra negativo de forma estructural y sana, porque cobra antes de pagar. La alarma es un fondo de maniobra que se deteriora en un sector donde no debería." },
            { t: "Tratar el resultado del ejercicio como si fuera pasivo", d: "Es patrimonio neto hasta que la junta decide distribuirlo. Solo el dividendo acordado y no pagado se convierte en deuda con los socios." },
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
            "El SEC 2010 tiene su propio balance, con la misma lógica y otro vocabulario.",
          ],
          lista: [
            "El equivalente del patrimonio neto es el **valor neto (B.90)**: activos no financieros más activos financieros menos pasivos, también obtenido por diferencia.",
            "La distinción entre corriente y no corriente desaparece; la clasificación relevante pasa a ser por **instrumento financiero** (AF.1 a AF.8) y por **sector institucional**.",
            "Las cuentas de patrimonio se enlazan con las de flujos mediante las cuentas de revalorización y de otras variaciones de volumen: el balance de cierre es el de apertura más las transacciones más las revalorizaciones.",
            "Esa conciliación entre stocks y flujos es precisamente lo que en contabilidad empresarial hace el estado de cambios en el patrimonio neto.",
          ],
          cierre:
            "Si vienes de las cuentas nacionales, esta ficha es en realidad un repaso con otro nombre. El esfuerzo está en el criterio de reconocimiento de activos, que es bastante más restrictivo en el PGC que en el SEC.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Una empresa pide un préstamo de 50.000 € y lo deja en el banco. ¿Qué le pasa a su patrimonio neto?", a: "Nada. Activo y pasivo crecen 50.000 € cada uno, y el neto, que es la diferencia, se mantiene. Endeudarse no empobrece ni enriquece por sí mismo." },
            { q: "¿Puede una empresa tener patrimonio neto negativo y seguir operando?", a: "Sí, aunque es una situación de desequilibrio: debe más de lo que tiene. La ley obliga a disolver o recapitalizar cuando el neto cae por debajo de la mitad del capital social, pero mientras haya tesorería la actividad puede continuar un tiempo." },
            { q: "El activo son 400.000 € y el ratio de endeudamiento es del 65 %. ¿Cuánto vale el patrimonio neto?", a: "El pasivo es 260.000 € y el neto 140.000 €. Comprueba que la ecuación cuadra antes de dar el número por bueno." },
            { q: "¿Por qué la marca «Coca-Cola» no figura en el balance de Coca-Cola?", a: "Porque fue creada internamente y el PGC no permite activar intangibles autogenerados de ese tipo. Si otra empresa la comprara, sí aparecería en el balance del comprador. Es la asimetría más citada como límite de la información contable." },
            { q: "Reordena mentalmente estas partidas: proveedores, terrenos, reservas, existencias, deuda a largo.", a: "Activo no corriente: terrenos. Activo corriente: existencias. Patrimonio neto: reservas. Pasivo no corriente: deuda a largo. Pasivo corriente: proveedores." },
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
              q: "Una empresa tiene 225.000 € de patrimonio neto. ¿Cuánto dinero puede repartir hoy?",
              opciones: [
                "Nada hasta que cierre el ejercicio",
                "Depende de la tesorería: el neto es un residuo algebraico, no un saldo bancario",
                "La mitad, por prudencia",
                "225.000 €, que es lo que pertenece a los socios",
              ],
              correcta: 1,
              porque: [
                "El cierre determina el resultado del ejercicio, pero también pueden repartirse reservas de años anteriores.",
                "En el ejemplo, esos 225.000 € de neto conviven con 12.000 € en el banco. Confundir ambas cosas produce decisiones de reparto imposibles de ejecutar.",
                "La mitad es una cifra arbitraria: lo que limita el reparto es la liquidez disponible y las restricciones legales, no una proporción.",
                "Pertenece a los socios en sentido patrimonial, pero está invertido en naves, existencias y créditos a clientes, no aguardando en una cuenta.",
              ],
            },
            {
              q: "¿Mide el balance el valor de la empresa?",
              opciones: [
                "No, pero se aproxima bastante en empresas industriales",
                "Sí: recoge todos sus activos y pasivos",
                "No: registra coste histórico corregido y deja fuera marca, cartera de clientes y conocimiento generados internamente",
                "Sí, si se aplica el valor razonable a todas las partidas",
              ],
              correcta: 2,
              porque: [
                "En industriales la brecha suele ser menor, pero el problema conceptual es el mismo.",
                "Recoge los que cumplen los criterios de reconocimiento, que dejan fuera precisamente los intangibles autogenerados.",
                "Por eso la diferencia entre valor contable y valor de mercado puede ser enorme, y por eso el fondo de comercio solo aflora cuando alguien compra la empresa.",
                "El valor razonable se aplica a algunas partidas, pero no hace aparecer los activos que nunca se reconocieron.",
              ],
            },
            {
              q: "¿Dónde se coloca la amortización acumulada en el balance?",
              opciones: [
                "Fuera del balance, en la memoria",
                "En el pasivo, porque representa una obligación futura de reposición",
                "En el activo con signo negativo: es una cuenta correctora que minora la partida a la que acompaña",
                "En el patrimonio neto, como reserva",
              ],
              correcta: 2,
              porque: [
                "Sí figura en el balance, y además la memoria detalla su movimiento.",
                "No hay ninguna obligación con nadie: la amortización no genera deuda ni exige desembolso.",
                "Aparece a la izquierda restando del inmovilizado, de modo que la diferencia es el valor neto contable. Colocarla a la derecha descuadra el balance y desdibuja qué queda por amortizar.",
                "Una reserva es un beneficio no repartido; la amortización es un reparto de coste.",
              ],
            },
            {
              q: "Una cadena de supermercados tiene fondo de maniobra negativo. ¿Es señal de alarma?",
              opciones: [
                "Sí: no puede atender sus deudas a corto plazo",
                "No necesariamente: en distribución alimentaria es estructural y sano, porque se cobra antes de pagar",
                "No, porque el fondo de maniobra no mide liquidez",
                "Sí, salvo que tenga líneas de crédito disponibles",
              ],
              correcta: 1,
              porque: [
                "Un fondo de maniobra negativo no impide atender pagos si el ciclo de caja es favorable: el dinero entra antes de que venzan las facturas.",
                "Cobra al contado y paga a proveedores a sesenta días, así que financia su actividad con dinero ajeno sin coste. Interpretar el signo sin mirar el ciclo lleva a diagnósticos falsos.",
                "Sí mide algo sobre liquidez estructural; lo que ocurre es que su lectura depende del sector.",
                "Las líneas de crédito son un colchón adicional, pero el fondo negativo es sano aquí por el ciclo, no por el respaldo bancario.",
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
            { ref: "Muñoz Merchante, Fundamentos de contabilidad", nota: "los primeros capítulos cubren esta ficha con ejercicios de clasificación, que es la mejor forma de fijarla." },
            { ref: "RD 1514/2007, PGC, tercera parte", nota: "los modelos oficiales de balance. Conviene tener el modelo normal delante mientras estudias las masas." },
            { ref: "Archel Domench et al., Estados contables", nota: "para ver desde el principio adónde lleva esto: la lectura crítica de un balance real." },
          ],
        },
      ],
    },
  ],
};
