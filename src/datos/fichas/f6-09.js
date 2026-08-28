/* Ficha 6.09 — Calidad del resultado y contabilidad creativa. */

export default {
  codigo: "6.09",
  titulo: "Calidad del resultado y contabilidad creativa",
  nivel: 4,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "5 h",
  nucleo:
    "Casi toda la manipulación contable relevante se hace dentro de la norma, aprovechando el margen de estimación que la propia norma concede. Como la caja acaba imponiéndose, la señal de alerta más fiable no es una partida concreta sino la divergencia sostenida entre el beneficio declarado y el flujo de explotación.",
  requiere: "6.08 Flujos de efectivo · 5.06 Amortización · 5.08 Provisiones",
  abre: "8.04 Análisis fundamental · 7.09 Valoración de empresas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Conviene empezar por una distinción que se pierde en el lenguaje corriente. El **fraude contable** consiste en registrar hechos falsos o en ocultar hechos reales, y es delito. La **contabilidad creativa** consiste en explotar el margen de discrecionalidad que la propia normativa concede, y es legal. Cada estimación de vida útil, cada juicio sobre la probabilidad de un litigio, cada test de deterioro con su tasa de descuento son decisiones que la norma delega en la empresa, y todas ellas admiten un rango razonable. Situarse sistemáticamente en un extremo del rango no incumple nada y altera el resultado de forma sustancial.",
            "La **calidad del resultado** mide hasta qué punto el beneficio declarado es sostenible y está respaldado por caja. Un beneficio de alta calidad procede de la actividad recurrente, se convierte en tesorería con regularidad y no depende de estimaciones agresivas. Uno de baja calidad procede de partidas no recurrentes, se acumula en activos circulantes que crecen sin freno o se apoya en cambios de criterio contable.",
            "El concepto técnico que lo articula son los **devengos** o *accruals*: la diferencia entre el resultado y el flujo de explotación. Recogen todo lo que la contabilidad reconoce y la caja todavía no. Un cierto nivel de devengos es normal y necesario —para eso existe el principio de devengo—, pero **devengos elevados y persistentes en la misma dirección** indican que el beneficio se está construyendo sobre reconocimientos que la tesorería no confirma.",
            "La restricción que hace útil todo el análisis es que **la manipulación contable no crea valor, lo desplaza en el tiempo**. Adelantar un ingreso implica que ese ingreso faltará el año siguiente. Diferir un gasto implica que llegará después, y con frecuencia con intereses. Ninguna de estas técnicas es sostenible indefinidamente, y por eso los casos de manipulación acaban resolviéndose siempre en un ejercicio de ajuste brutal.",
            "El repertorio de técnicas es limitado y muy reconocible, lo que ayuda: alisar el resultado mediante provisiones que se dotan en años buenos y se revierten en malos; la limpieza de cajón, que consiste en concentrar todas las malas noticias en un ejercicio ya perdido —típicamente el primero de una nueva dirección—; capitalizar gastos que deberían ser del período; cambiar estimaciones de vidas útiles o valores residuales; forzar el canal, enviando a los distribuidores más producto del que pueden vender; y reconocer ingresos antes de que la prestación se haya completado.",
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
            { nom: "Devengos totales", sub: "Lo que el resultado reconoce y la caja no confirma.", cols: ["Devengos = Resultado neto − Flujo de explotación"] },
            { nom: "Ratio de devengos", sub: "Escalado por tamaño para poder comparar.", cols: ["RD = Devengos / Activo total medio"] },
            { nom: "Calidad del beneficio", sub: "Sostenidamente por debajo de 1 es señal de alerta.", cols: ["Q = Flujo de explotación / Resultado neto"] },
            { nom: "Crecimiento relativo de clientes", sub: "Compara la evolución del saldo con la de la actividad.", cols: ["$g = \\%\\,\\Delta\\text{Clientes} - \\%\\,\\Delta\\text{Ventas}$"] },
            { nom: "Crecimiento relativo de existencias", sub: "Mismo razonamiento sobre el almacén.", cols: ["$h = \\%\\,\\Delta\\text{Existencias} - \\%\\,\\Delta\\text{Coste de ventas}$"] },
            { nom: "Efecto de un cambio de vida útil", sub: "Cuánto mueve el resultado una sola estimación.", cols: ["$\\Delta\\text{Resultado} = \\text{Base amortizable} \\left(\\dfrac{1}{n_0} - \\dfrac{1}{n_1}\\right)(1-t)$"] },
          ],
          nota: "Ninguno de estos indicadores prueba nada por sí solo. Son **detectores de anomalía** que indican dónde mirar en la memoria, no veredictos. Una empresa que crece deprisa tendrá devengos altos por razones perfectamente legítimas.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuatro años de divergencia",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa presenta beneficios crecientes durante cuatro ejercicios consecutivos. Vista solo por la cuenta de resultados, es una historia de éxito: el beneficio crece un 73 % en cuatro años. Miles de euros:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Ventas", "Resultado", "Flujo explotación", "Q", "Días de cobro"],
          filas: [
            ["1", "800", "30", "45", "1,50", "60"],
            ["2", "900", "38", "42", "1,11", "66"],
            ["3", "1.000", "45", "35", "0,78", "73"],
            ["4", "1.100", "52", "22", "0,42", "88"],
            { celdas: ["Variación 1→4", "+37 %", "+73 %", "−51 %", "—", "+47 %"], clase: "total" },
          ],
          nota: "El beneficio sube un 73 % mientras el flujo de explotación cae un 51 %. Los días de cobro pasan de 60 a 88 con ventas que solo crecen un 37 %. El indicador Q cruza el 1 en el año 3 y se hunde en el 4. **Nada de esto exige acceso privilegiado a la empresa**: son cinco columnas construidas con las cuentas anuales publicadas.",
        },
        {
          tipo: "parrafos",
          items: [
            "Las hipótesis compatibles con este patrón son pocas. Puede que la empresa haya relajado su política de crédito para vender más, en cuyo caso el margen adicional es real pero el riesgo de impago ha crecido y no se está provisionando. Puede que esté reconociendo ingresos antes de tiempo. Puede que esté forzando el canal. O puede que sus clientes estén en dificultades y no paguen. Ninguna de las cuatro es buena, y todas se comprueban en la memoria y en la evolución del deterioro de créditos comerciales.",
            "Lo que hace fiable esta señal es que **es difícil de sostener**. El año 5, o la empresa cobra —y el flujo se recupera con un salto—, o tiene que dotar deterioros que se comerán varios años de beneficio de golpe.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: un cambio de estimación en la memoria",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Volvamos a Arlanza, la empresa de las tres fichas anteriores. Amortiza 52.000 € anuales sobre una base amortizable de unos 416.000 € y una vida útil media de 8 años. Su resultado antes de impuestos es de 64.000 €.",
            "Supongamos que la dirección revisa sus estimaciones y concluye que la vida útil real de sus instalaciones es de **12 años**, no de 8. Es un cambio de estimación contable perfectamente admisible: se aplica de forma prospectiva y basta con explicarlo en la memoria. La nueva amortización sería de 416.000 / 12 = **34.667 €**, es decir 17.333 € menos.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Vida útil 8 años", "Vida útil 12 años"],
          filas: [
            ["Amortización anual", "52.000 €", "34.667 €"],
            ["Resultado antes de impuestos", "64.000 €", "81.333 €"],
            ["Impuesto al 25 %", "−16.000 €", "−20.333 €"],
            { celdas: ["Resultado del ejercicio", "48.000 €", "61.000 €"], clase: "total" },
            ["Variación del resultado", "—", "+27 %"],
            ["Flujo de explotación", "40.000 €", "40.000 €"],
            { celdas: ["Calidad del beneficio (Q)", "0,83", "0,66"], clase: "total" },
          ],
          nota: "El beneficio sube un 27 % **sin que ocurra absolutamente nada en el negocio**. La caja no se mueve un céntimo: de hecho la empresa pagaría 4.333 € más de impuestos, así que su tesorería empeoraría. Y el indicador de calidad del beneficio se deteriora, que es precisamente lo que delata la operación.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Qué hace legítimo o ilegítimo este cambio.** Legítimo: que las instalaciones estén durando efectivamente más de lo previsto, que haya un informe técnico que lo respalde y que el criterio se mantenga en el futuro aunque deje de convenir. Ilegítimo: que el cambio coincida con un año de resultados flojos, que se aplique justo antes de una operación de financiación o de venta, y que la memoria lo mencione sin cuantificar su efecto.",
            "**El rastro que deja.** Un cambio de estimación obliga a informar en memoria de su naturaleza y de su impacto cuantificado. Ese párrafo es exactamente lo que hay que buscar, y su ausencia o su vaguedad es en sí misma una señal. En serie temporal, además, la ratio de amortización sobre inmovilizado bruto muestra un escalón difícil de justificar por otra vía.",
            "**Regla práctica:** cuando una empresa mejora su resultado sin que mejore su flujo de explotación, la explicación está casi siempre en un cambio de estimación, en una capitalización o en una reversión de provisiones. Los tres se documentan en la memoria, y por eso la memoria es el primer documento a leer y no el último.",
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
            { t: "Confundir contabilidad creativa con fraude", d: "La primera opera dentro de la norma explotando el margen de estimación que la norma concede; el segundo registra hechos falsos. Tratar todo como fraude lleva a acusaciones insostenibles; tratar todo como legítimo, a ignorar señales claras. El análisis se mueve en el terreno intermedio: legalidad con sesgo." },
            { t: "Tomar un indicador aislado como prueba", d: "Devengos altos son normales en empresas que crecen deprisa. Un año de Q inferior a 1 puede deberse a un cobro que cruzó el cierre. Lo que informa es el **patrón sostenido** y la coincidencia de varias señales, no un dato suelto." },
            { t: "Analizar sin leer la memoria", d: "Los cambios de criterio y de estimación son de declaración obligatoria y están cuantificados. Buena parte de lo que el análisis cuantitativo detecta como anomalía está explicado, con más o menos detalle, en un párrafo de la memoria." },
            { t: "Olvidar que la manipulación se revierte", d: "Adelantar ingresos deja un agujero el año siguiente; diferir gastos los concentra después. Por eso los casos acaban en un ejercicio de ajuste desproporcionado. Un beneficio que crece de forma sospechosamente suave durante años es más inquietante que uno volátil." },
            { t: "Pensar que un informe de auditoría limpio descarta el problema", d: "El auditor verifica el cumplimiento del marco normativo, y la contabilidad creativa por definición lo cumple. Una opinión sin salvedades no certifica que las estimaciones sean prudentes, solo que caen dentro de lo admisible." },
            { t: "Aplicar los indicadores sin ajustar por sector y fase", d: "Una empresa en fase de expansión, una constructora con obra plurianual o un negocio muy estacional presentan devengos altos por razones estructurales. Comparar contra el sector y contra la propia serie histórica es imprescindible." },
            { t: "Buscar solo manipulación al alza", d: "Reducir el beneficio también interesa: para pagar menos impuestos, para negociar con la plantilla, para preparar una exclusión de cotización o para crear reservas que revertir más adelante. La limpieza de cajón del primer año de una nueva dirección es el caso más documentado." },
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
            "Las cuentas nacionales son mucho menos vulnerables a este problema, y por razones que merece la pena entender.",
          ],
          lista: [
            "El **consumo de capital fijo** no se toma de las amortizaciones declaradas por las empresas: se estima con el método del inventario permanente, a precios de reposición y con vidas útiles estadísticas. Un cambio de estimación como el del caso práctico **no afectaría al PIB**.",
            "El **contraste oferta-demanda** actúa como control cruzado sistemático: cada producto debe cuadrar por ambos lados, y cada transacción tiene contrapartida en otro sector. Una cifra inflada por una unidad debe encontrar eco en otra parte del sistema o aparece como discrepancia.",
            "Las **fuentes son múltiples e independientes**: registros administrativos, encuestas, declaraciones fiscales, afiliación a la Seguridad Social. Ningún agente controla todas ellas.",
            "Existe, con todo, un problema análogo en el ámbito público: la **contabilidad creativa fiscal**, con operaciones diseñadas para no computar en déficit o deuda. Eurostat y las oficinas estadísticas dedican esfuerzo continuo a clasificar correctamente asociaciones público-privadas, entes instrumentales y ventas de activos con recompra, precisamente porque el incentivo a sortear las reglas existe.",
          ],
          cierre:
            "La lección transferible es de método: **la robustez viene de la redundancia**. Las cuentas nacionales resisten mejor la manipulación porque cada cifra se comprueba contra otra fuente. Un análisis de empresa que solo mira la cuenta de resultados carece de esa redundancia; añadir el estado de flujos y la memoria la recupera en parte.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El resultado crece un 70 % en cuatro años y el flujo de explotación cae un 50 %. ¿Qué hipótesis manejas?", a: "Relajación de la política de crédito, reconocimiento anticipado de ingresos, forzado del canal o clientes que no pagan. Todas se comprueban en la evolución de los días de cobro y del deterioro de créditos comerciales, y en la memoria." },
            { q: "¿Por qué un beneficio anormalmente estable durante años puede ser sospechoso?", a: "Porque los negocios reales son volátiles. Una suavidad excesiva sugiere alisado mediante provisiones que se dotan en años buenos y se revierten en malos. La volatilidad, por sí sola, no es señal de mala calidad contable." },
            { q: "Base amortizable 400.000 €, vida útil de 10 a 15 años, tipo 25 %. ¿Efecto en el resultado?", a: "La amortización pasa de 40.000 € a 26.667 €: 13.333 € menos de gasto, que tras impuestos son 10.000 € más de resultado. Sin que cambie nada en el negocio ni en la caja." },
            { q: "El auditor emite opinión sin salvedades. ¿Descarta eso la contabilidad creativa?", a: "No. El auditor verifica el cumplimiento del marco normativo, y la contabilidad creativa opera dentro de él. La opinión limpia significa que las estimaciones son admisibles, no que sean prudentes." },
            { q: "¿Por qué las cuentas nacionales resisten mejor este tipo de manipulación?", a: "Por redundancia: fuentes múltiples e independientes, contraste oferta-demanda y contrapartida obligatoria entre sectores. Además, magnitudes clave como el consumo de capital fijo se estiman externamente y no dependen de lo que declare cada empresa." },
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
              q: "¿En qué se diferencia la contabilidad creativa del fraude contable?",
              opciones: [
                "En la intención: la creativa es involuntaria y el fraude deliberado",
                "En la cuantía: se llama fraude cuando supera el umbral de materialidad",
                "En nada de fondo: ambas falsean la imagen de la empresa",
                "La creativa opera dentro de la norma explotando el margen de estimación que esta concede; el fraude registra hechos falsos",
              ],
              correcta: 3,
              porque: [
                "La contabilidad creativa es perfectamente deliberada. Lo que la distingue es que se mantiene dentro del marco normativo.",
                "La materialidad afecta a la relevancia del dato, no a si los hechos registrados son ciertos.",
                "El efecto sobre la imagen puede parecerse, pero tratar todo como fraude lleva a acusaciones que no se sostienen y a no reconocer el problema real.",
                "Por eso la creativa es más difícil de detectar y más frecuente: no hay norma que romper, solo estimaciones que estirar hasta el borde de lo defendible.",
              ],
            },
            {
              q: "Una empresa presenta devengos altos en el ejercicio. ¿Es prueba de manipulación?",
              opciones: [
                "No, porque los devengos no guardan relación con la calidad del resultado",
                "No: son normales en empresas que crecen deprisa; lo que informa es el patrón sostenido, no un dato aislado",
                "Sí, si además el auditor ha emitido salvedades",
                "Sí: los devengos altos son el indicador más fiable de manipulación",
              ],
              correcta: 1,
              porque: [
                "Sí la guardan, y mucha: por eso son un indicador útil. Lo que no son es una prueba por sí solos.",
                "Y hay que ajustar además por sector y fase: una constructora con obra plurianual o un negocio estacional presentan devengos altos por razones estructurales.",
                "Las salvedades son relevantes, pero eso convierte al indicador en una pieza de un conjunto, que es justamente lo que se defiende aquí.",
                "Ningún indicador aislado prueba nada: un año con ratio de caja sobre beneficio por debajo de 1 puede deberse a un cobro que cruzó el cierre.",
              ],
            },
            {
              q: "El informe de auditoría es limpio, sin salvedades. ¿Descarta la contabilidad creativa?",
              opciones: [
                "No: el auditor verifica el cumplimiento del marco normativo, y la contabilidad creativa por definición lo cumple",
                "Sí, si el auditor es una de las grandes firmas",
                "Sí: es la función del auditor detectar precisamente eso",
                "No, porque el auditor no revisa las estimaciones contables",
              ],
              correcta: 0,
              porque: [
                "Una opinión sin salvedades no certifica que las estimaciones sean prudentes, solo que están dentro de lo aceptable. El margen entre «prudente» y «aceptable» es donde ocurre todo.",
                "El tamaño de la firma no cambia el objeto de la auditoría, que es el cumplimiento del marco.",
                "El auditor detecta incumplimientos y errores materiales, no estimaciones agresivas que sigan siendo defendibles.",
                "Sí las revisa, y valora si son razonables; el problema es que «razonable» admite un rango amplio.",
              ],
            },
            {
              q: "¿Puede haber interés en manipular el resultado a la baja?",
              opciones: [
                "Sí, pero solo mediante fraude, no con contabilidad creativa",
                "No, salvo en empresas públicas",
                "No: manipular a la baja perjudica a la propia empresa",
                "Sí: para pagar menos impuestos, negociar con la plantilla, preparar una exclusión de cotización o crear reservas latentes",
              ],
              correcta: 3,
              porque: [
                "Los mismos márgenes de estimación sirven en ambas direcciones: dotar deterioros generosos o alargar provisiones no exige salirse de la norma.",
                "El incentivo fiscal o negociador existe en cualquier empresa, pública o privada.",
                "Buscar solo manipulación al alza deja fuera la mitad de los casos, y suele ser la mitad que pasa desapercibida.",
                "Un resultado deprimido hoy también prepara un resultado holgado mañana, porque la manipulación siempre se revierte: lo diferido acaba apareciendo.",
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
            { ref: "Amat, Contabilidad creativa", nota: "el texto de referencia en español, con el catálogo de técnicas y casos documentados." },
            { ref: "Schilit, Financial Shenanigans", nota: "el equivalente anglosajón, organizado por tipo de manipulación y con casos célebres analizados sobre cuentas reales." },
            { ref: "Penman, Financial Statement Analysis and Security Valuation", nota: "el tratamiento riguroso de la calidad del resultado y del análisis de devengos." },
            { ref: "Manual sobre el déficit y la deuda públicos de Eurostat", nota: "para el paralelo del sector público: qué operaciones se han diseñado para eludir las reglas y cómo se clasifican." },
          ],
        },
      ],
    },
  ],
};
