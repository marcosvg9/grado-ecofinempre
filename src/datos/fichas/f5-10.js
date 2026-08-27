/* Ficha 5.10 — Cuentas anuales: balance, PyG, ECPN, EFE y memoria. */

export default {
  codigo: "5.10",
  titulo: "Cuentas anuales: balance, PyG, ECPN, EFE y memoria",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "4 h",
  nucleo:
    "Cinco documentos que forman una unidad y se leen juntos. El balance da el stock, la cuenta de resultados el flujo del período, el estado de flujos de efectivo la caja, el ECPN lo que no pasó por resultados y la memoria las decisiones que hicieron posibles las otras cuatro cifras.",
  requiere: "5.02 Partida doble · 5.06 Amortización · 5.09 Impuesto sobre beneficios",
  abre: "6.06 Análisis patrimonial · 6.07 Rentabilidad · 6.08 Flujos de efectivo",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las cuentas anuales son el producto final del ciclo contable y forman **una unidad**: el PGC lo dice expresamente y no es una fórmula retórica. Ningún documento se interpreta aisladamente, y las cifras de uno se explican con frecuencia en otro. El beneficio de la cuenta de resultados aparece en el patrimonio neto del balance; la variación de tesorería del estado de flujos cuadra con la diferencia de saldos de las cuentas 57; los ajustes de valoración del ECPN son los que no pasaron por la cuenta de resultados.",
            "Existen tres formatos. El **modelo normal**, el **abreviado** —para quienes no superen ciertos límites de activo, cifra de negocios y plantilla durante dos ejercicios consecutivos— y el del **PGC de Pymes**. La diferencia relevante no es solo de detalle: quienes pueden formular balance abreviado no están obligados a presentar **estado de flujos de efectivo**, y el PGC de Pymes prescinde además del **ECPN**. En la práctica esto significa que de la mayoría de las sociedades españolas no hay estado de flujos publicado, y que hay que reconstruirlo a partir de los balances de dos ejercicios si se quiere analizar su caja.",
            "La **cuenta de pérdidas y ganancias** española tiene formato vertical y en cascada, con saldos intermedios etiquetados: resultado de explotación, resultado financiero, resultado antes de impuestos y resultado del ejercicio. Esa estructura no es decorativa: separa lo que la empresa gana con su negocio de lo que gana o pierde por su forma de financiarse, y esa separación es la base de casi todo el análisis del bloque 6.",
            "El **estado de cambios en el patrimonio neto** tiene dos partes. La primera, el estado de ingresos y gastos reconocidos, recoge el resultado del ejercicio más las partidas que fueron directamente a patrimonio neto sin pasar por resultados —los grupos 8 y 9 del cuadro de cuentas—. La segunda muestra todos los movimientos del neto, incluidos los que no son ni ingresos ni gastos: ampliaciones de capital, distribución de dividendos, operaciones con acciones propias.",
            "El **estado de flujos de efectivo** ordena los movimientos de caja en tres secciones: explotación, inversión y financiación. El modelo español calcula el flujo de explotación por el **método indirecto**, partiendo del resultado antes de impuestos y deshaciendo todo lo que no fue caja. Ese punto de partida es útil porque muestra exactamente dónde se separan beneficio y tesorería.",
            "La **memoria** completa, amplía y comenta el contenido de los otros documentos. No es un anexo: es una cuenta anual con el mismo rango. Contiene las políticas contables aplicadas, los criterios de valoración elegidos, los cambios de criterio, la conciliación fiscal, el detalle de provisiones y contingencias, y los hechos posteriores al cierre. Para quien analiza, suele ser el documento con más información por página.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Documento", "Qué mide", "Obligatorio en"],
          filas: [
            { nom: "Balance", sub: "Stock: patrimonio en una fecha", cols: ["Situación patrimonial", "Los tres modelos"] },
            { nom: "Cuenta de pérdidas y ganancias", sub: "Flujo: resultado del período", cols: ["Rendimiento devengado", "Los tres modelos"] },
            { nom: "ECPN", sub: "Movimientos del patrimonio neto", cols: ["Lo que no pasó por resultados", "Normal y abreviado"] },
            { nom: "Estado de flujos de efectivo", sub: "Flujo: movimientos de tesorería", cols: ["Caja generada y aplicada", "Solo modelo normal"] },
            { nom: "Memoria", sub: "Políticas, detalles y hechos posteriores", cols: ["El porqué de las cifras", "Los tres modelos"] },
          ],
          nota: "Que el estado de flujos no sea obligatorio para la mayoría de las sociedades españolas es, con diferencia, la limitación práctica más seria al analizar cuentas depositadas en el Registro Mercantil.",
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
            { nom: "Articulación balance-resultados", sub: "El vínculo entre los dos documentos principales.", cols: ["$\\mathrm{PN}_{\\text{final}} = \\mathrm{PN}_{\\text{inicial}} + \\text{Resultado} + \\text{Aportaciones} - \\text{Distribuciones} \\pm \\text{Ajustes}$"] },
            { nom: "Cascada de la cuenta de resultados", sub: "Cada saldo intermedio responde a una pregunta distinta.", cols: ["Explotación → Financiero → Antes de impuestos → Del ejercicio"] },
            { nom: "Resultado global", sub: "La primera parte del ECPN.", cols: ["Ingresos y gastos reconocidos = Resultado + Partidas directas a PN"] },
            { nom: "Flujo de explotación (indirecto)", sub: "Del devengo a la caja.", cols: ["$\\mathrm{FEE} = \\mathrm{RCAI} + \\text{Ajustes sin caja} \\pm \\Delta\\text{Capital corriente} \\pm \\text{Otros flujos}$"] },
            { nom: "Cuadre del estado de flujos", sub: "La comprobación obligatoria.", cols: ["$\\Delta\\text{Tesorería} = \\text{FE explotación} + \\text{FE inversión} + \\text{FE financiación}$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: del beneficio a la caja",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa cierra con un resultado del ejercicio de 120.000 €. Su tesorería solo ha aumentado en 35.000 €. El estado de flujos explica dónde está la diferencia, y la explicación es más interesante que las dos cifras por separado.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Flujos de explotación", "Importe"],
          filas: [
            ["Resultado del ejercicio", "120.000 €"],
            ["Amortización del inmovilizado", "+80.000 €"],
            ["Deterioros y variación de provisiones", "+15.000 €"],
            ["Ingresos financieros", "−5.000 €"],
            ["Gastos financieros", "+12.000 €"],
            ["Gasto por impuesto", "+40.000 €"],
            { celdas: ["Resultado ajustado", "262.000 €"], clase: "total" },
            ["Aumento de existencias", "−30.000 €"],
            ["Aumento de deudores comerciales", "−45.000 €"],
            ["Aumento de acreedores comerciales", "+20.000 €"],
            ["Intereses pagados", "−12.000 €"],
            ["Intereses cobrados", "+5.000 €"],
            ["Impuesto sobre beneficios pagado", "−35.000 €"],
            { celdas: ["Flujos de efectivo de las actividades de explotación", "165.000 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Inversión y financiación", "Importe"],
          filas: [
            ["Pagos por adquisición de inmovilizado", "−200.000 €"],
            ["Cobros por desinversiones", "+10.000 €"],
            { celdas: ["Flujos de las actividades de inversión", "−190.000 €"], clase: "total" },
            ["Emisión de deuda a largo plazo", "+100.000 €"],
            ["Dividendos pagados", "−40.000 €"],
            { celdas: ["Flujos de las actividades de financiación", "+60.000 €"], clase: "total" },
            { celdas: ["Aumento neto de efectivo: 165.000 − 190.000 + 60.000", "35.000 €"], clase: "total" },
          ],
          nota: "Lectura: la empresa genera **165.000 €** de caja con su negocio, invierte 190.000 € y cubre el déficit con deuda nueva. Es un perfil de crecimiento financiado, sostenible mientras la explotación siga generando. Si el flujo de explotación fuera negativo y la deuda creciera igual, el diagnóstico sería el opuesto con un beneficio idéntico.",
        },
        {
          tipo: "parrafos",
          items: [
            "Fíjate en los dos bloques de ajustes. El primero elimina del resultado todo lo que **nunca fue caja**: amortizaciones, deterioros, provisiones. El segundo corrige por lo que **fue caja en otro momento**: el crecimiento de existencias y de saldos de clientes consume 75.000 € que la cuenta de resultados ya había reconocido como margen. Ese segundo bloque es el que mata empresas rentables, y es exactamente el fenómeno descrito en el caso práctico de la ficha 5.02.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: en qué orden leer unas cuentas anuales",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La secuencia intuitiva —balance, resultados y a otra cosa— es la menos informativa. El orden que emplea quien analiza cuentas profesionalmente es casi el inverso, y responde a una lógica: primero averiguar si las cifras son fiables, después qué dicen.",
            "**Uno: el informe de auditoría**, si lo hay. Una salvedad, una limitación al alcance o un párrafo de énfasis sobre empresa en funcionamiento cambian por completo el valor de todo lo demás. Leer el balance antes de saber si el auditor tiene reparos es perder el tiempo.",
            "**Dos: la memoria**, empezando por las políticas contables y los criterios de valoración. Aquí se descubre si la empresa cambió de método, cómo estima las vidas útiles, qué hipótesis sostienen sus activos por impuesto diferido y qué litigios tiene abiertos. También los hechos posteriores al cierre, que a veces son la información más relevante del documento entero.",
            "**Tres: el estado de flujos de efectivo**, si existe. Es el documento más difícil de manipular porque la caja se mueve o no se mueve. Un beneficio creciente con flujo de explotación estancado durante varios ejercicios es la señal de alerta más fiable que existe en análisis contable.",
            "**Cuatro: la cuenta de resultados**, leída en cascada y en serie temporal, no en un solo año. Interesa la evolución del margen de explotación y su relación con la de las ventas, no la cifra final.",
            "**Cinco: el balance**, que a estas alturas ya se lee con contexto: se sabe qué criterios lo sostienen, cuánta caja produce la actividad y cómo evoluciona el resultado. Y el ECPN al lado, para ver si el patrimonio neto se movió por resultados o por otras vías.",
            "Este orden tiene además una ventaja práctica: si el paso uno o el dos revelan un problema serio, el análisis puede detenerse ahí.",
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
            { t: "Tratar la memoria como un anexo prescindible", d: "Es una cuenta anual con el mismo rango que el balance. Contiene las políticas contables, los cambios de criterio, las contingencias, la conciliación fiscal y los hechos posteriores. Analizar sin leerla es analizar cifras sin saber cómo se han construido." },
            { t: "Confundir resultado con caja generada", d: "El resultado se calcula por devengo e incluye amortizaciones, deterioros y provisiones que no son caja, y excluye movimientos de circulante que sí lo son. Son dos magnitudes distintas y el estado de flujos existe precisamente para conciliarlas." },
            { t: "Leer el resultado del ejercicio sin la cascada", d: "Un resultado final positivo puede esconder una explotación en pérdidas compensada por una venta de inmovilizado o por un ingreso financiero extraordinario. La cascada separa lo recurrente de lo que no lo es, y esa distinción es el núcleo del análisis." },
            { t: "Ignorar el ECPN", d: "Las partidas que van directamente a patrimonio neto —determinados ajustes de valoración, subvenciones, coberturas— no aparecen en la cuenta de resultados pero sí modifican la riqueza de los socios. Una empresa puede tener beneficio y ver caer su patrimonio neto." },
            { t: "Comparar cuentas de modelos distintos sin ajustar", d: "El modelo abreviado agrupa partidas que en el normal están desglosadas. Comparar ratios calculados sobre uno y otro sin homogeneizar produce diferencias que no reflejan nada real del negocio." },
            { t: "Analizar un solo ejercicio", d: "Las cuentas anuales incluyen obligatoriamente las cifras comparativas del ejercicio anterior, y ese es el mínimo. Con tres o cuatro años se ven tendencias; con uno solo se ve una fotografía que puede ser atípica en cualquier dirección." },
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
            "La correspondencia entre las cinco cuentas anuales y la secuencia de cuentas del SEC 2010 es sorprendentemente ordenada, y verla completa cierra el bloque.",
          ],
          lista: [
            "El **balance** se corresponde con las cuentas de patrimonio (balances de apertura y cierre) del sector institucional.",
            "La **cuenta de pérdidas y ganancias** se reparte entre la cuenta de producción y la de explotación: el valor añadido bruto y el excedente bruto de explotación son los saldos análogos al margen y al resultado de explotación.",
            "El **estado de flujos de efectivo** encuentra su análogo en la cuenta financiera, que registra las variaciones de activos y pasivos financieros, y en la capacidad o necesidad de financiación (B.9) como saldo que enlaza las cuentas no financieras con las financieras.",
            "El **ECPN** se corresponde con las cuentas de revalorización y de otras variaciones del volumen de activos: exactamente el mismo papel de recoger lo que cambia el patrimonio sin pasar por el resultado del período.",
            "La **memoria** tiene su equivalente en los metadatos, notas metodológicas y cuadros complementarios que acompañan a la publicación estadística.",
          ],
          cierre:
            "La diferencia estructural es el encadenamiento: en el SEC el saldo de cada cuenta es la primera partida de la siguiente, de modo que la secuencia es lineal e ininterrumpida. En el PGC los cinco documentos se articulan entre sí pero no forman una cadena única, y por eso hace falta el estado de flujos como puente explícito entre el devengo y la caja.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué documentos puede omitir una sociedad que formula cuentas abreviadas?", a: "El estado de flujos de efectivo. En el PGC de Pymes se prescinde además del ECPN. Balance, cuenta de resultados y memoria son obligatorios siempre." },
            { q: "El resultado es 120.000 € y la amortización 80.000 €. ¿Puede el flujo de explotación ser inferior a 120.000 €?", a: "Sí, perfectamente. Si el circulante crece —más existencias, más saldo de clientes— puede consumir más caja de la que aportan los ajustes sin salida de efectivo. Un crecimiento rápido produce justo ese patrón." },
            { q: "Una empresa tiene beneficio y su patrimonio neto disminuye. ¿Cómo es posible?", a: "Por movimientos que no pasan por la cuenta de resultados: reparto de dividendos superior al beneficio, ajustes de valoración negativos directos a patrimonio neto, adquisición de acciones propias. El ECPN es el documento que lo explica." },
            { q: "¿Por qué el estado de flujos es más difícil de manipular que la cuenta de resultados?", a: "Porque la caja se mueve o no se mueve, sin margen de estimación. El resultado depende de vidas útiles, deterioros, provisiones y criterios de reconocimiento; el saldo bancario, no. Por eso la divergencia sostenida entre beneficio y flujo operativo es la señal de alerta más fiable." },
            { q: "¿Cuál es el análogo del ECPN en contabilidad nacional?", a: "Las cuentas de revalorización y de otras variaciones del volumen de activos, que recogen precisamente lo que altera el patrimonio de un sector sin ser una transacción del período." },
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
              q: "¿Qué rango tiene la memoria dentro de las cuentas anuales?",
              opciones: [
                "Es un anexo explicativo de carácter voluntario",
                "Es una cuenta anual con el mismo rango que el balance",
                "Es obligatoria solo para empresas auditadas",
                "Es un documento de gestión, no contable",
              ],
              correcta: 1,
              porque: [
                "Tratarla como prescindible deja fuera la mitad de la información: contiene las políticas contables, los cambios de criterio, las contingencias y la conciliación fiscal.",
                "Sin ella no se sabe con qué criterios se han elaborado las cifras, así que el balance por sí solo no es interpretable.",
                "Es obligatoria para todas las que formulan cuentas anuales, auditadas o no.",
                "Es una cuenta anual, con la misma exigencia formal que el resto.",
              ],
            },
            {
              q: "Una empresa presenta beneficio y a la vez consume caja. ¿Es contradictorio?",
              opciones: [
                "Sí: si gana dinero, tiene que entrar dinero",
                "No: el resultado se calcula por devengo y el flujo de efectivo mide cobros y pagos",
                "Sí, salvo que haya repartido dividendos",
                "No, pero indica que la contabilidad está mal llevada",
              ],
              correcta: 1,
              porque: [
                "Ganar y cobrar son cosas distintas: una empresa que crece rápido factura mucho, cobra tarde y paga a sus proveedores antes.",
                "El resultado incluye amortizaciones, deterioros y provisiones que no son caja, y excluye movimientos de circulante que sí lo son. Por eso hacen falta los dos estados.",
                "El dividendo es una salida de caja, pero la divergencia existe también sin repartir nada.",
                "Es la situación normal de muchas empresas sanas, y no indica ningún error.",
              ],
            },
            {
              q: "El resultado del ejercicio es positivo. ¿Basta ese dato?",
              opciones: [
                "Sí: es la cifra que resume el desempeño",
                "No: puede esconder una explotación en pérdidas compensada por una venta de inmovilizado",
                "Sí, si además el flujo de explotación es positivo",
                "No, pero solo importa si la empresa cotiza",
              ],
              correcta: 1,
              porque: [
                "Es una cifra final que agrega cosas de naturaleza muy distinta y con muy distinta capacidad de repetirse.",
                "Por eso la cuenta de resultados se lee en cascada: resultado de explotación, financiero y antes de impuestos. Lo recurrente y lo extraordinario no valen igual.",
                "El flujo de explotación positivo es una buena señal adicional, pero no sustituye a leer la composición del resultado.",
                "La cotización no cambia nada: la cascada informa igual en cualquier empresa.",
              ],
            },
            {
              q: "¿Para qué sirve el estado de cambios en el patrimonio neto?",
              opciones: [
                "Para detallar el reparto del dividendo",
                "Para recoger los ingresos y gastos que van directamente a patrimonio neto sin pasar por la cuenta de resultados",
                "Para conciliar el resultado contable con la base imponible",
                "Para desglosar las reservas por su origen legal",
              ],
              correcta: 1,
              porque: [
                "El reparto es una de las partidas que muestra, pero no su razón de ser.",
                "Determinados ajustes de valoración, subvenciones y coberturas no aparecen en la cuenta de resultados. Sin el ECPN se pierde una parte del rendimiento del ejercicio.",
                "Esa conciliación está en la memoria, no en el ECPN.",
                "El desglose de reservas figura en el balance y en la memoria.",
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
            { ref: "PGC, tercera parte: cuentas anuales", nota: "normas de elaboración y modelos oficiales. Ten el modelo normal delante mientras trabajas cualquier ejemplo." },
            { ref: "Archel Domench et al., Estados contables: elaboración, análisis e interpretación", nota: "el manual de referencia. Cubre esta ficha y da entrada directa a todo el bloque 6." },
            { ref: "Amat, Análisis de estados financieros", nota: "más práctico y directo, útil para el orden de lectura y los indicadores iniciales." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 8 y 9", nota: "la secuencia de cuentas y los cuadros de síntesis, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
