/* Ficha 5.06 — Inmovilizado material e intangible: amortización y deterioro. */

export default {
  codigo: "5.06",
  titulo: "Inmovilizado material e intangible: amortización y deterioro",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "5 h",
  nucleo:
    "Un activo duradero se paga una vez y se consume durante años. La amortización reparte ese coste conocido a lo largo de su vida útil; el deterioro reconoce una pérdida de valor sobrevenida que la amortización no había previsto. Son dos mecanismos distintos que se confunden constantemente.",
  requiere: "5.04 Criterios de valoración",
  abre: "6.08 Estado de flujos de efectivo · 7.04 Flujos de caja libres · 7.05 Coste de capital",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El inmovilizado entra por su **precio de adquisición o coste de producción**, e incluye todo lo necesario para que el bien esté **en condiciones de funcionamiento**: transporte, instalación, montaje, honorarios de técnicos, pruebas. La frontera es funcional, no temporal: lo que se gasta después de que la máquina esté lista para producir ya es gasto del ejercicio, aunque se pague el mismo día.",
            "Hay dos incorporaciones al coste que sorprenden. La primera: los **costes estimados de desmantelamiento y rehabilitación del emplazamiento**, si existe la obligación de asumirlos, se capitalizan desde el principio y tienen como contrapartida una provisión. La segunda: los **gastos financieros devengados antes de la puesta en condiciones de funcionamiento** se capitalizan, pero solo en inmovilizados que necesiten más de un año para estar listos.",
            "La **amortización** es la imputación sistemática del valor amortizable a lo largo de la vida útil. Tres decisiones la determinan: la vida útil estimada, el valor residual esperado y el método de reparto. Las tres son estimaciones de la empresa, revisables si cambian las circunstancias, y las tres son terreno de discusión con el auditor. El método lineal domina en la práctica española, no porque sea mejor sino porque coincide con las tablas fiscales y evita ajustes extracontables.",
            "El **deterioro** es otra cosa. No es un reparto previsto sino el reconocimiento de que el activo ha perdido valor por encima de lo que la amortización contemplaba. Se comprueba cuando hay indicios y, obligatoriamente al cierre, para los intangibles con vida útil indefinida y el fondo de comercio. La prueba consiste en comparar el valor contable con el **importe recuperable**, y si el segundo es menor, dotar la diferencia.",
            "En los **intangibles** hay una peculiaridad histórica que conviene tener clara. Desde la reforma introducida por la Ley 22/2015 y desarrollada por el RD 602/2016, **todos los inmovilizados intangibles se amortizan**, incluidos los de vida útil indefinida. El **fondo de comercio** se amortiza linealmente en diez años salvo prueba en contrario, y además sigue sometido a test de deterioro anual. Antes de 2016 no se amortizaba, solo se sometía a deterioro; los manuales anteriores a esa fecha están desfasados en este punto.",
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
            { nom: "Base amortizable", sub: "Lo que realmente se va a consumir.", cols: ["Base = Coste − Valor residual"] },
            { nom: "Cuota lineal", sub: "El método más extendido en España.", cols: ["Cuota = Base / Vida útil"] },
            { nom: "Valor contable", sub: "Lo que figura en el balance en un momento dado.", cols: ["VC = Coste − Amortización acumulada − Deterioro acumulado"] },
            { nom: "Importe recuperable", sub: "La empresa siempre puede optar por lo que más le recupere.", cols: ["IR = máx(Valor razonable − costes de venta ; Valor en uso)"] },
            { nom: "Deterioro a dotar", sub: "Solo si el valor contable excede al recuperable.", cols: ["Deterioro = máx(0 ; VC − IR)"] },
            { nom: "Cuota tras deterioro", sub: "El deterioro obliga a recalcular la amortización futura.", cols: ["Nueva cuota = (VC posterior − Valor residual) / Vida útil restante"] },
          ],
          nota: "La última línea es la que casi todo el mundo olvida. Dotar deterioro no es un apunte aislado: cambia el plan de amortización de todos los ejercicios siguientes.",
        },
        {
          tipo: "parrafos",
          items: [
            "El deterioro del inmovilizado material e intangible **revierte** si las circunstancias que lo motivaron desaparecen, con el límite del valor contable que el activo habría tenido de no haberse deteriorado nunca. La única excepción, y es importante, es el **fondo de comercio: su deterioro nunca revierte**.",
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una máquina con sorpresa en el año 3",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Factura de la máquina 50.000 €, descuento comercial 2.000 €, transporte e instalación 4.000 €. Vida útil estimada 8 años, valor residual 4.000 €, método lineal.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe"],
          filas: [
            ["Precio facturado", "50.000 €"],
            ["Descuento comercial", "−2.000 €"],
            ["Transporte e instalación", "+4.000 €"],
            { celdas: ["Coste de adquisición", "52.000 €"], clase: "total" },
            ["Valor residual estimado", "−4.000 €"],
            { celdas: ["Base amortizable", "48.000 €"], clase: "total" },
            ["Cuota anual = 48.000 / 8", "6.000 €"],
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "Al cierre del **año 3** aparece un indicio de deterioro: un competidor lanza una tecnología que reduce la demanda del producto que fabrica esta máquina. Se estima que venderla daría 31.000 € con 2.000 € de costes de venta, y que los flujos futuros descontados que aún puede generar valen 31.500 €. El importe recuperable es el mayor de los dos: **31.500 €**. El valor contable en ese momento es 52.000 − 18.000 = **34.000 €**. Hay que dotar un deterioro de **2.500 €**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Dotación", "Amort. acumulada", "Deterioro", "Valor contable"],
          filas: [
            ["1", "6.000 €", "6.000 €", "—", "46.000 €"],
            ["2", "6.000 €", "12.000 €", "—", "40.000 €"],
            ["3", "6.000 €", "18.000 €", "2.500 €", "31.500 €"],
            ["4", "5.500 €", "23.500 €", "—", "26.000 €"],
            ["5", "5.500 €", "29.000 €", "—", "20.500 €"],
            ["6", "5.500 €", "34.500 €", "—", "15.000 €"],
            ["7", "5.500 €", "40.000 €", "—", "9.500 €"],
            { celdas: ["8", "5.500 €", "45.500 €", "—", "4.000 €"], clase: "total" },
          ],
          nota: "A partir del año 4 la cuota baja a **(31.500 − 4.000) / 5 = 5.500 €**, porque quedan cinco años de vida útil y una base amortizable menor. Y al terminar el año 8 el valor contable es exactamente el valor residual: la mecánica cierra sola si las estimaciones no vuelven a cambiar.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el fondo de comercio de una adquisición",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa compra otra por 12 millones de euros. El valor razonable de los activos identificables adquiridos menos los pasivos asumidos suma 9 millones. La diferencia, **3 millones de fondo de comercio**, representa lo que el comprador pagó por encima de la suma de las partes: cartera de clientes, reputación, sinergias esperadas, equipo humano.",
            "Ese fondo de comercio se amortiza en diez años —300.000 € anuales— y además se somete a test de deterioro cada cierre. Si al tercer año las sinergias no aparecen y el negocio adquirido rinde por debajo de lo previsto, el test puede exigir una dotación adicional de varios millones de golpe, y **esa dotación no revertirá nunca** aunque el negocio se recupere después.",
            "Por eso las grandes correcciones de valor del fondo de comercio son noticia: son el reconocimiento contable público de que una adquisición salió mal. Y por eso, al analizar una empresa muy adquisitiva, conviene mirar qué peso tiene el fondo de comercio sobre el activo total y sobre el patrimonio neto. Si el fondo de comercio supera al patrimonio neto, un deterioro severo puede dejar el neto en negativo sin que la empresa haya perdido un solo cliente.",
            "**Conexión con el bloque 7:** este es el mismo asunto que se estudia desde el otro lado en 7.10, fusiones y adquisiciones. Allí se pregunta cuánto pagar; aquí, qué hacer cuando lo pagado resultó excesivo.",
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
            { t: "Amortizar sobre el coste en lugar de sobre la base amortizable", d: "La base es el coste menos el valor residual. Si se amortiza el coste completo, al final de la vida útil el activo queda a cero cuando todavía tiene un valor de realización previsto, y la cuota anual ha sido sistemáticamente excesiva. El error es más frecuente de lo que parece porque muchas empresas fijan valor residual cero por comodidad." },
            { t: "No recalcular la cuota después de un deterioro", d: "Dotar deterioro reduce el valor contable, luego la base amortizable pendiente es menor y la cuota futura tiene que bajar. Seguir amortizando por la cuota antigua lleva el activo por debajo de su valor residual antes de tiempo." },
            { t: "Confundir amortización con provisión para reposición", d: "La amortización no aparta dinero para comprar la máquina nueva. Es un reparto contable de un desembolso pasado. Si la empresa quiere tener fondos para reponer, eso es una decisión financiera independiente." },
            { t: "Tratar la amortización como salida de caja", d: "No hay pago asociado. Por eso el estado de flujos de efectivo la suma de vuelta al resultado, y por eso el EBITDA la excluye. El error opuesto también existe: concluir que, como no es caja, «no importa». Importa: mide un consumo real de capacidad productiva." },
            { t: "Aplicar las tablas fiscales como si fueran las contables", d: "El PGC exige estimar la vida útil real del bien en la empresa. Las tablas de la Ley del Impuesto sobre Sociedades fijan los límites de deducibilidad. Coinciden a menudo, y por comodidad casi todo el mundo las hace coincidir, pero son cosas distintas y en activos atípicos divergen." },
            { t: "Capitalizar gastos posteriores a la puesta en marcha", d: "Solo se capitaliza lo que aumenta la capacidad, la productividad o alarga la vida útil. El mantenimiento ordinario, la reparación y la conservación son gasto del ejercicio. Capitalizar mantenimiento es una de las manipulaciones clásicas: mejora el resultado del año y difiere el gasto." },
            { t: "Creer que todo deterioro revierte", d: "El del inmovilizado material e intangible sí, con el límite del valor contable que habría tenido sin deterioro. El del **fondo de comercio, no**: es irreversible por norma expresa, precisamente para evitar que sirva de palanca para modular resultados entre ejercicios." },
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
            "El análogo de la amortización en el SEC 2010 es el **consumo de capital fijo (P.51c)**, y las diferencias de método son sustanciales.",
          ],
          lista: [
            "Se calcula **a precios de reposición corrientes**, no sobre el coste histórico. En un contexto inflacionista el consumo de capital fijo supera sistemáticamente a la suma de las amortizaciones contables de las empresas.",
            "Se estima con el **método del inventario permanente (PIM)**, acumulando series largas de formación bruta de capital y aplicando funciones de supervivencia y perfiles de retiro, no las vidas útiles declaradas por cada empresa.",
            "Las **vidas útiles** son parámetros estadísticos por tipo de activo y rama, armonizados para que las comparaciones internacionales tengan sentido.",
            "El **deterioro no existe** como categoría. Las pérdidas de valor imprevistas se recogen, según su causa, en la cuenta de revalorización o en otras variaciones del volumen de activos (K.7) — por ejemplo, obsolescencia anticipada o catástrofes.",
            "Consecuencia directa: la diferencia entre PIB y PIN, o entre excedente bruto y neto de explotación, depende de un cálculo estadístico, no de una agregación de amortizaciones contables.",
          ],
          cierre:
            "Este es probablemente el punto donde tu experiencia previa más te ayuda y más te puede despistar: el concepto es el mismo, el método de estimación no tiene nada que ver.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Coste 90.000 €, valor residual 10.000 €, vida útil 10 años, método lineal. ¿Cuota anual y valor contable al cabo de 4 años?", a: "Base amortizable 80.000 €, cuota 8.000 € anuales. A los cuatro años la amortización acumulada es 32.000 € y el valor contable 58.000 €." },
            { q: "Valor contable 60.000 €, valor razonable menos costes de venta 55.000 €, valor en uso 58.000 €. ¿Cuánto deterioro?", a: "2.000 €. El importe recuperable es el mayor de los dos, 58.000 €, y queda 2.000 € por debajo del valor contable. Tomar la rama más baja sería un error: la empresa siempre puede elegir la alternativa que más recupere." },
            { q: "Se sustituye el motor de una máquina, lo que alarga su vida útil tres años. ¿Gasto o mayor valor del activo?", a: "Mayor valor del activo, porque alarga la vida útil. Además hay que dar de baja el valor contable pendiente del elemento sustituido y revisar el plan de amortización. Si solo se hubiera reparado sin alargar la vida, sería gasto del ejercicio." },
            { q: "¿Por qué el deterioro del fondo de comercio no revierte y el de una máquina sí?", a: "Porque el fondo de comercio no es un activo identificable y su recuperación posterior sería indistinguible de un fondo de comercio generado internamente, que no puede activarse. Permitir la reversión abriría la puerta a modular resultados entre ejercicios." },
            { q: "Una empresa capitaliza el mantenimiento anual de sus instalaciones. ¿Qué efecto tiene en el año 1?", a: "Mejora el resultado, porque sustituye un gasto inmediato por una amortización repartida en varios años. También infla el activo y el patrimonio neto. Es una manipulación clásica y se detecta comparando la evolución de las adiciones de inmovilizado con la de la actividad." },
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
              q: "Una máquina cuesta 100.000 €, tiene valor residual de 10.000 € y vida útil de 10 años. ¿Cuál es la cuota anual?",
              opciones: [
                "10.000 €, amortizando el coste completo",
                "9.000 €: la base amortizable es el coste menos el valor residual",
                "11.000 €, incluyendo el valor residual como coste adicional",
                "Depende del método fiscal aplicable",
              ],
              correcta: 1,
              porque: [
                "Amortizar el coste completo deja el activo a cero al final de su vida útil cuando todavía vale 10.000 €, y genera un beneficio artificial al venderlo.",
                "$(100.000 - 10.000)/10 = 9.000$. La base amortizable es lo que la empresa espera consumir, no lo que pagó.",
                "El valor residual se resta, no se suma: es lo que se recuperará al final.",
                "Las tablas fiscales fijan límites de deducibilidad; el PGC exige estimar la vida útil real del bien en la empresa.",
              ],
            },
            {
              q: "Se dota un deterioro sobre un inmovilizado. ¿Qué hay que hacer con la amortización futura?",
              opciones: [
                "Nada: la cuota se calculó al dar de alta el activo",
                "Recalcularla: la base amortizable pendiente es menor y la cuota tiene que bajar",
                "Suspenderla hasta que revierta el deterioro",
                "Aumentarla, para reflejar el mayor desgaste",
              ],
              correcta: 1,
              porque: [
                "Seguir con la cuota antigua amortiza más de lo que queda por amortizar y lleva el valor contable por debajo de cero antes de tiempo.",
                "El deterioro ha reducido el valor contable, así que lo que resta por repartir entre los años pendientes es menor. Es un recálculo obligado, no opcional.",
                "El activo se sigue consumiendo aunque se haya deteriorado: suspender la amortización no tiene fundamento.",
                "El deterioro reduce el importe pendiente; aumentar la cuota lo agotaría antes todavía.",
              ],
            },
            {
              q: "Una empresa amortiza según las tablas de la Ley del Impuesto sobre Sociedades. ¿Es correcto?",
              opciones: [
                "Sí: son las tablas oficiales",
                "No necesariamente: el PGC exige estimar la vida útil real, y las tablas fijan límites de deducibilidad fiscal",
                "Sí, siempre que se aplique el coeficiente máximo",
                "No: las tablas fiscales están derogadas",
              ],
              correcta: 1,
              porque: [
                "Son oficiales a efectos fiscales, que es una finalidad distinta de la información contable.",
                "Si coinciden, perfecto y sin ajustes. Si no, hay que amortizar contablemente según la vida útil real y practicar los ajustes extracontables que correspondan.",
                "Usar el máximo optimiza el impuesto, no acerca la cifra a la realidad económica del bien.",
                "Siguen vigentes; el problema es confundir su finalidad con la contable.",
              ],
            },
            {
              q: "Se sustituye el motor de una máquina, lo que alarga su vida útil tres años. ¿Cómo se registra?",
              opciones: [
                "Como gasto de reparación del ejercicio",
                "Se capitaliza: aumenta la vida útil, y hay que dar de baja la parte sustituida",
                "Como provisión para grandes reparaciones",
                "Como gasto anticipado, repartido en tres años",
              ],
              correcta: 1,
              porque: [
                "El mantenimiento ordinario, la reparación y la conservación sí son gasto; esto no es ninguna de las tres cosas.",
                "Solo se capitaliza lo que aumenta capacidad, productividad o vida útil, y este caso lo hace. Dar de baja el componente antiguo evita duplicar valor en el activo.",
                "Las provisiones para grandes reparaciones tienen un tratamiento propio y anticipan un gasto futuro previsible, no registran una mejora ya realizada.",
                "Los gastos anticipados corresponden a servicios pagados por adelantado, que no es el caso.",
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
            { ref: "PGC, normas de registro y valoración 2.ª, 3.ª y 5.ª", nota: "inmovilizado material, normas particulares e inmovilizado intangible. Léelas seguidas: se remiten unas a otras." },
            { ref: "RD 602/2016 y Ley 22/2015", nota: "la reforma que impuso la amortización de todos los intangibles y del fondo de comercio en diez años. Imprescindible para no fiarse de manuales anteriores." },
            { ref: "Wanden-Berghe, Contabilidad financiera", nota: "el test de deterioro desarrollado con casos, incluida la reversión y sus límites." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre consumo de capital fijo y el método del inventario permanente, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
