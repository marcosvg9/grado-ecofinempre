/* Ficha 7.05 — Coste de capital y WACC.
   Responde la pregunta dejada abierta en 6.07 sobre Arlanza. */

export default {
  codigo: "7.05",
  titulo: "Coste de capital y WACC",
  nivel: 3,
  bloque: "Finanzas corporativas",
  tiempo: "6 h",
  nucleo:
    "La tasa de descuento debe reflejar el riesgo de los flujos que se descuentan, no el de la empresa que los genera ni el de la deuda que los financia. El WACC es la media ponderada de lo que exigen accionistas y acreedores, y es la vara con la que se mide si una rentabilidad crea o destruye valor.",
  requiere: "7.04 Flujos de caja libres · 6.07 Rentabilidad · 8.06 CAPM y beta",
  abre: "7.06 Estructura de capital · 7.09 Valoración de empresas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Todo el dinero que emplea una empresa tiene un coste, incluido el que aportaron los socios. Ese es el punto de partida y el que más resistencia genera: los fondos propios parecen gratis porque no devengan intereses contractuales, pero quien los aportó podría haberlos invertido en otro sitio con riesgo similar. **El coste de los fondos propios es un coste de oportunidad**, y no aparece en ninguna cuenta de resultados. Esa invisibilidad contable es la razón de que muchas empresas rentables destruyan valor sin saberlo.",
            "El **coste de los fondos propios** se estima habitualmente con el CAPM: el tipo sin riesgo más la beta del negocio multiplicada por la prima de riesgo del mercado. La beta mide la sensibilidad del activo a los movimientos del mercado, es decir, el riesgo que no se puede diversificar. Es una estimación con mucha incertidumbre —la prima de riesgo se discute desde hace décadas y la beta depende del período y de la frecuencia con que se calcule— y conviene tratarla como un rango, no como un número.",
            "El **coste de la deuda** es más observable: el tipo al que la empresa se financia hoy, no el histórico de su deuda antigua. Y va **después de impuestos**, porque los intereses son deducibles y ese ahorro fiscal es real. Un tipo del 5 % con un impuesto del 25 % supone un coste efectivo del 3,75 %. Ese escudo fiscal es la razón principal por la que la deuda abarata el coste de capital, hasta cierto punto.",
            "El **WACC** pondera ambos costes por su peso en la estructura financiera, y aquí hay dos exigencias que se incumplen a menudo. Las ponderaciones deben ser **a valor de mercado**, no contable, porque lo que se pondera es cuánto capital hay realmente en juego. Y en el denominador solo entra la **deuda con coste financiero**: los proveedores no exigen interés explícito y su efecto ya está recogido en los flujos, dentro de las necesidades operativas de fondos.",
            "La advertencia más importante de la ficha: **el WACC de la empresa solo sirve para proyectos con el riesgo de la empresa**. Descontar al WACC corporativo un proyecto sistemáticamente más arriesgado lo sobrevalora, y uno más seguro lo infravalora. Una empresa que aplica su tasa única a todo acaba aceptando los proyectos malos y arriesgados y rechazando los buenos y seguros, con un sesgo acumulado que puede transformar su perfil de riesgo sin que nadie lo haya decidido. La solución práctica es estimar betas por comparables del sector del proyecto, desapalancarlas y reapalancarlas con la estructura financiera objetivo.",
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
            { nom: "Coste de los fondos propios (CAPM)", sub: "Solo se remunera el riesgo no diversificable.", cols: ["Ke = Rf + $\\beta$ × (Rm − Rf)"] },
            { nom: "Coste de la deuda después de impuestos", sub: "El escudo fiscal abarata la financiación ajena.", cols: ["$K_d^{\\text{neto}} = K_d(1-t)$"] },
            { nom: "Coste medio ponderado del capital", sub: "Ponderaciones a valor de mercado.", cols: ["$\\mathrm{WACC} = \\dfrac{E}{D+E}K_e + \\dfrac{D}{D+E}K_d(1-t)$"] },
            { nom: "Desapalancar la beta (Hamada)", sub: "Para aislar el riesgo del negocio del financiero.", cols: ["$\\beta_U = \\dfrac{\\beta_L}{1 + (1-t)\\,D/E}$"] },
            { nom: "Reapalancar la beta", sub: "Con la estructura financiera objetivo del proyecto.", cols: ["$\\beta_L = \\beta_U\\,[1 + (1-t)\\,D/E]$"] },
            { nom: "Rentabilidad sobre el capital invertido", sub: "Se compara con el WACC, no con el tipo de la deuda.", cols: ["ROIC = NOPAT / (Fondos propios + Deuda con coste)"] },
            { nom: "Valor económico añadido", sub: "El valor creado en euros de un ejercicio.", cols: ["$\\mathrm{EVA} = (\\mathrm{ROIC} - \\mathrm{WACC}) \\times$ Capital invertido"] },
          ],
          nota: "El **ROIC** se calcula sobre el capital invertido, no sobre el activo total: excluye la financiación espontánea de proveedores, cuyo coste ya está dentro de los flujos operativos.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: el WACC de Arlanza",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Volvemos por última vez a la empresa de las fichas 6.06 a 6.08 y 7.04. Datos conocidos: patrimonio neto 408.000 €, deuda con coste 272.000 €, gastos financieros 12.000 €, BAII 76.000 €, NOPAT 57.000 €, tipo impositivo 25 %. Parámetros de mercado: tipo sin riesgo **3 %**, prima de riesgo **6 %**, beta estimada por comparables del sector de distribución **1,1**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Componente", "Cálculo", "Resultado"],
          filas: [
            ["Coste de los fondos propios", "3 % + 1,1 × 6 %", "9,60 %"],
            ["Coste de la deuda antes de impuestos", "12.000 / 272.000", "4,41 %"],
            ["Coste de la deuda después de impuestos", "4,41 % × 0,75", "3,31 %"],
            ["Peso de los fondos propios", "408.000 / 680.000", "60 %"],
            ["Peso de la deuda", "272.000 / 680.000", "40 %"],
            { celdas: ["WACC", "0,60 × 9,60 % + 0,40 × 3,31 %", "7,08 %"], clase: "total" },
          ],
          nota: "Las ponderaciones se han calculado sobre valores contables porque Arlanza no cotiza. En una empresa cotizada habría que usar la capitalización bursátil, que puede diferir mucho del patrimonio neto contable y cambiar el WACC de forma apreciable.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la pregunta que quedó abierta en la ficha 6.07.** Allí calculamos que Arlanza tenía un ROE del 11,76 % y dejamos dicho que ese dato no se podía juzgar sin conocer el coste de los fondos propios. Ya lo tenemos: **9,60 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Comparación", "Rentabilidad", "Coste exigido", "Diferencial"],
          filas: [
            ["Perspectiva del accionista", "ROE 11,76 %", "Ke 9,60 %", "+2,16 p.p."],
            ["Perspectiva del conjunto", "ROIC 8,38 %", "WACC 7,08 %", "+1,30 p.p."],
            ["Capital invertido", "—", "—", "680.000 €"],
            { celdas: ["Valor económico añadido (EVA)", "(8,38 % − 7,08 %) × 680.000", "$\\approx 8.850$ €"], clase: "total" },
          ],
          nota: "**Respuesta: Arlanza crea valor, pero poco.** Unos 8.850 € sobre 680.000 € de capital invertido. Es un margen estrecho: bastaría que la beta fuese 1,46 en lugar de 1,1 para que el coste de los fondos propios subiera al 11,76 % y el diferencial desapareciera. Dicho de otro modo, la creación de valor de Arlanza cabe dentro del error de estimación de su propio coste de capital.",
        },
        {
          tipo: "parrafos",
          items: [
            "El retrato completo de la empresa, tras cinco fichas, es este: **crea algo de valor contable y consume caja**. Su ROIC supera al WACC en 1,3 puntos, pero su flujo de caja libre fue de −23.000 € y reparte dividendos financiándose con deuda. Ninguna de las dos cosas contradice a la otra: **crear valor y generar caja son cosas distintas**, y una empresa en crecimiento suele hacer lo primero mientras no hace lo segundo. La pregunta que decide su futuro es si la inversión de 72.000 € tenía VAN positivo, y esa es la pregunta de la ficha 7.03 aplicada a un caso real.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: una tasa para cada riesgo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un grupo con un WACC del 7 % evalúa dos proyectos. El primero es una ampliación de su negocio principal, estable y conocido. El segundo es entrar en un país emergente con una tecnología que nunca ha operado. Ambos se descuentan al 7 % porque es «la tasa de la empresa».",
            "El resultado previsible es un sesgo sistemático. El proyecto arriesgado, cuyo riesgo real justificaría una tasa del 13 %, sale sobrevalorado y probablemente se aprueba. El proyecto seguro, que a su riesgo real del 5 % tendría un VAN mayor, compite en desventaja. Repetido durante años, el proceso **desplaza silenciosamente el perfil de riesgo del grupo** hacia lo arriesgado, sin que ningún consejo haya tomado esa decisión.",
            "**El procedimiento correcto** para un proyecto de riesgo distinto: identificar empresas cotizadas comparables del sector del proyecto; tomar sus betas apalancadas; **desapalancarlas** con su propia estructura financiera y su tipo impositivo, para aislar el riesgo del negocio; promediarlas; **reapalancar** con la estructura financiera objetivo del proyecto; y calcular con esa beta el coste de los fondos propios y el WACC específicos.",
            "**Los ajustes adicionales habituales** y sus riesgos. Para países emergentes se añade una prima de riesgo país, normalmente el diferencial de la deuda soberana, aunque hay debate sobre si debe aplicarse íntegra o ponderada por la exposición real del negocio. Para empresas pequeñas se añade a veces una prima por tamaño, cuya justificación empírica es discutida. Y algunas empresas suman primas por iliquidez o por incertidumbre tecnológica. **Cada prima añadida es una decisión con juicio**, y conviene documentarlas: es fácil acumular ajustes hasta que la tasa produzca el resultado que se buscaba.",
            "**Una cautela final sobre la precisión.** Un WACC estimado con una prima de riesgo entre el 5 % y el 7 % y una beta entre 0,9 y 1,3 no es un número: es un rango que puede ir del 6 % al 9 %. Presentar un VAN calculado con un WACC del 7,08 % y dos decimales transmite una exactitud que no existe. Lo honesto es calcular el VAN para el rango entero y comprobar si la decisión cambia dentro de él. Si no cambia, la imprecisión no importa; si cambia, el proyecto está en la frontera y conviene decirlo.",
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
            { t: "Creer que los fondos propios no tienen coste", d: "No devengan intereses contractuales y por eso no aparecen en la cuenta de resultados, pero tienen coste de oportunidad. Es el error conceptual del que derivan casi todos los demás y la razón de que existan empresas contablemente rentables que destruyen valor año tras año." },
            { t: "Usar el WACC corporativo para cualquier proyecto", d: "La tasa debe reflejar el riesgo del proyecto, no el de la empresa. Aplicar una tasa única sesga las decisiones hacia lo arriesgado de forma acumulativa y silenciosa." },
            { t: "Ponderar con valores contables en empresas cotizadas", d: "Lo que se pondera es el capital realmente en juego, que es su valor de mercado. En una empresa cuya capitalización triplica su patrimonio neto contable, usar valores contables infravalora el peso de los fondos propios y por tanto el WACC." },
            { t: "Incluir los proveedores en la deuda", d: "El crédito comercial no devenga interés explícito y su efecto ya está recogido en los flujos, dentro de las necesidades operativas de fondos. Meterlo en el denominador del WACC lo cuenta dos veces y rebaja artificialmente la tasa." },
            { t: "Usar el coste histórico de la deuda", d: "Lo relevante es a qué tipo se financiaría la empresa hoy, no lo que paga por deuda contratada hace años en otro entorno de tipos. El coste de capital es una magnitud prospectiva." },
            { t: "Olvidar desapalancar y reapalancar la beta", d: "La beta observada de una comparable incorpora su estructura financiera. Usarla directamente mezcla el riesgo del negocio de esa empresa con su nivel de endeudamiento, que puede no tener nada que ver con el del proyecto." },
            { t: "Contar dos veces el escudo fiscal", d: "Si el ahorro fiscal de la deuda ya está en el WACC —a través del coste de la deuda después de impuestos—, no debe además incorporarse a los flujos. Es el error simétrico al de restar intereses del flujo de caja libre." },
            { t: "Presentar el WACC con dos decimales", d: "La prima de riesgo y la beta se estiman con márgenes amplios. Un WACC es un rango, y la práctica honesta es comprobar si la decisión resiste dentro de ese rango en lugar de defender un número concreto." },
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
            "El coste de capital no existe como magnitud en el SEC 2010, y la razón es instructiva: las cuentas nacionales miden rendimientos realizados, no rendimientos exigidos.",
          ],
          lista: [
            "El **excedente neto de explotación** es la retribución efectiva del capital una vez descontado el consumo de capital fijo. Es un dato observado, no una expectativa.",
            "La **tasa de rendimiento del capital** —excedente neto sobre stock neto de capital— es el análogo macroeconómico del ROIC, y su comparación con los tipos de interés de mercado reproduce a escala agregada la comparación entre ROIC y WACC.",
            "El SEC sí utiliza un coste de capital implícito en un caso concreto: la **producción de no mercado** se valora por la suma de costes, incluido el consumo de capital fijo, pero **sin excedente neto**. Se asume por convención que la administración no obtiene rendimiento del capital, lo cual es una decisión de método con efectos sobre el nivel del PIB.",
            "Y aparece de nuevo en los **alquileres imputados de la vivienda en propiedad**, donde se estima el servicio que el propietario se presta a sí mismo, un cálculo conceptualmente próximo a remunerar un capital invertido.",
          ],
          cierre:
            "La distinción entre rendimiento exigido y rendimiento realizado es la clave. Una economía puede tener una tasa de rendimiento del capital observada del 6 % mientras los inversores exigen un 9 %, y esa brecha se manifiesta como caída de la inversión, no como una cifra que aparezca en ninguna cuenta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Rf 3 %, prima de riesgo 5,5 %, beta 1,4. ¿Coste de los fondos propios?", a: "3 % + 1,4 × 5,5 % = 10,7 %. Con una beta superior a 1 el negocio amplifica los movimientos del mercado y sus accionistas exigen más que la media." },
            { q: "Ke 11 %, Kd 6 %, tipo 25 %, estructura 70 % propios y 30 % deuda. ¿WACC?", a: "0,70 × 11 % + 0,30 × 6 % × 0,75 = 7,70 % + 1,35 % = 9,05 %." },
            { q: "El ROE de Arlanza es 11,76 % y su Ke es 9,60 %. ¿Crea o destruye valor?", a: "Crea, por 2,16 puntos. Pero el margen es estrecho: con una beta de 1,46 en lugar de 1,1 el Ke igualaría al ROE y la creación de valor desaparecería. La conclusión cabe dentro del error de estimación." },
            { q: "¿Por qué el coste de la deuda va después de impuestos y el de los fondos propios no?", a: "Porque los intereses son deducibles y generan un ahorro fiscal real. Los dividendos se pagan con beneficio ya gravado, así que no hay escudo fiscal que descontar del coste de los fondos propios." },
            { q: "Un proyecto es más arriesgado que la empresa. ¿Qué pasa si se descuenta al WACC corporativo?", a: "Sale sobrevalorado y se aprueba con demasiada facilidad. Repetido sistemáticamente, desplaza el perfil de riesgo de la empresa hacia lo arriesgado sin que nadie haya tomado esa decisión de forma explícita." },
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
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "el desarrollo más ordenado del WACC, del desapalancamiento de betas y del coste de capital por proyecto." },
            { ref: "Damodaran, Valuation y su base de datos pública", nota: "betas sectoriales, primas de riesgo por país y primas de mercado actualizadas anualmente. Es la fuente práctica de referencia." },
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "la discusión sobre los límites del CAPM y sobre qué hacer cuando la beta no es estimable." },
            { ref: "Fernández, Pablo — trabajos sobre prima de riesgo de mercado", nota: "encuestas anuales sobre la prima utilizada en España y crítica a la falsa precisión en su estimación." },
          ],
        },
      ],
    },
  ],
};
