/* Ficha 8.06 — CAPM, beta y modelos multifactor.
   Revisa y corrige la estimacion de beta usada en 7.05 para Arlanza. */

export default {
  codigo: "8.06",
  titulo: "CAPM, beta y modelos multifactor",
  nivel: 3,
  bloque: "Mercados financieros e inversión",
  tiempo: "5 h",
  nucleo:
    "Si el riesgo específico se elimina diversificando, solo puede remunerarse el que no se puede diversificar. El CAPM convierte esa idea en una relación lineal entre rentabilidad exigida y beta, y su valor está más en la intuición que ofrece que en su capacidad de ajustar los datos.",
  requiere: "8.05 Diversificación · 7.05 Coste de capital",
  abre: "8.07 Eficiencia de mercados · 8.10 Gestión de riesgos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha anterior terminó con una conclusión que exige consecuencias: el riesgo específico se elimina sin coste diversificando, así que nadie debería pagar prima por asumirlo. Si eso es cierto, la rentabilidad esperada de un activo solo puede depender de su **contribución al riesgo de una cartera bien diversificada**, no de su volatilidad individual.",
            "El razonamiento se completa añadiendo un activo sin riesgo a la frontera eficiente de Markowitz. Al hacerlo, todas las carteras óptimas resultan ser combinaciones del activo sin riesgo y de una **única cartera de activos con riesgo**, la misma para todos los inversores. Ese es el **teorema de separación**: la decisión de qué comprar se separa de la de cuánto riesgo asumir. Y si todos los inversores mantienen la misma cartera de riesgo, en equilibrio esa cartera tiene que ser el **mercado** entero.",
            "De ahí sale la **beta** como medida natural de riesgo: la covarianza de un activo con el mercado, dividida por la varianza del mercado. Interpretada como pendiente, dice cuánto se mueve el activo cuando el mercado se mueve un uno por ciento. Una beta de 1,4 amplifica en ambas direcciones; una de 0,6 amortigua. Y la relación del **CAPM** es tan simple que se escribe en una línea: la rentabilidad exigida es el tipo sin riesgo más la beta multiplicada por la prima de riesgo del mercado.",
            "La beta se estima en la práctica por **regresión** de las rentabilidades del activo sobre las del mercado. Esa regresión ofrece un subproducto valioso: el **R²** indica qué proporción de la varianza del activo es sistemática y qué proporción es específica y diversificable. Para una acción individual el R² típico ronda el 20 % o el 30 %, lo que significa que la mayor parte de su volatilidad desaparece al meterla en una cartera.",
            "**Las críticas son serias y conviene conocerlas.** Roll señaló que la cartera de mercado verdadera —que incluiría inmuebles, capital humano y activos no cotizados— es inobservable, de modo que cualquier contraste del modelo es en realidad un contraste conjunto del CAPM y del índice usado como aproximación. Empíricamente, la relación entre beta y rentabilidad es **más plana** de lo que el modelo predice, y aparecen regularidades que la beta no explica: las empresas pequeñas y las de valor contable alto respecto al precio han rendido históricamente más de lo que su beta justificaría. **Fama y French** propusieron añadir factores de tamaño y de valor, y después otros de rentabilidad e inversión; Carhart añadió el momento. Esos modelos ajustan mejor los datos a costa de perder el fundamento teórico limpio del CAPM, y sigue abierto si los factores compensan riesgos reales o recogen anomalías de comportamiento.",
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
            { nom: "Beta de un activo", sub: "Contribución al riesgo de la cartera de mercado.", cols: ["β = cov(Rᵢ, Rm) / var(Rm)"] },
            { nom: "Relación del CAPM", sub: "La línea del mercado de títulos.", cols: ["E(Rᵢ) = Rf + βᵢ × [E(Rm) − Rf]"] },
            { nom: "Descomposición de la varianza", sub: "Sistemática más específica.", cols: ["σᵢ² = βᵢ² σm² + σε²"] },
            { nom: "Proporción sistemática", sub: "Es el R² de la regresión.", cols: ["R² = βᵢ² σm² / σᵢ²"] },
            { nom: "Beta de una cartera", sub: "Aditiva, como la duración de la ficha 8.02.", cols: ["βp = Σ wᵢ βᵢ"] },
            { nom: "Desapalancar la beta (Hamada)", sub: "Aísla el riesgo del negocio del financiero.", cols: ["βU = βL / [1 + (1 − t) × D/E]"] },
            { nom: "Alfa de Jensen", sub: "Rendimiento no explicado por el riesgo asumido.", cols: ["α = R̄ᵢ − [Rf + β(R̄m − Rf)]"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: descomponer el riesgo de una acción",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una acción tiene una volatilidad anual del **25 %**. El mercado, del **15 %**. La covarianza entre ambos es de **0,0264**. Tipo sin riesgo del **3 %** y prima de riesgo del mercado del **6 %**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Beta", y: "Rentabilidad" },
          dominio: { x: [0, 2], y: [0, 16] },
          marcasX: [0, 0.5, 1, 1.5, 2],
          marcasY: [0, 3, 6, 9, 12, 15],
          series: [
            {
              nombre: "Línea del mercado",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [2, 15],
              puntos: [[0, 3], [2, 15]],
            },
          ],
          puntos: [
            { x: 0, y: 3, etiqueta: "sin riesgo  3 %", guias: false },
            { x: 1, y: 9, etiqueta: "mercado  9 %", guias: true },
            { x: 1.173, y: 10.04, etiqueta: "la acción  10,04 %", guias: false },
            { x: 1.473, y: 11.84, etiqueta: "Arlanza  11,84 %", guias: false },
          ],
          nota: "La recta contiene la afirmación central del modelo: **la rentabilidad exigida depende únicamente de la beta**, y la volatilidad total del activo no aparece por ninguna parte. La acción del ejemplo tiene un 25 % de volatilidad frente al 15 % del mercado, casi el doble, y sin embargo solo se le exige un 10,04 % frente al 9 %: la diferencia es que **la mitad de su riesgo es específico y por tanto diversificable**, y el mercado no paga por soportar lo que se puede eliminar gratis. La pendiente de la recta es la prima de riesgo del mercado, 6 puntos, que es el precio de una unidad de riesgo sistemático. Y ahí está el uso práctico: **un activo por encima de la recta está barato y uno por debajo, caro**, siempre que se acepte que la beta lo resume todo, cosa que la propia ficha discute a continuación.",
        },
        {
          tipo: "tabla",
          cabecera: ["Magnitud", "Cálculo", "Resultado"],
          filas: [
            ["Beta", "0,0264 / 0,15²", "1,173"],
            ["Varianza total del activo", "0,25²", "0,0625"],
            ["Varianza sistemática", "1,173² × 0,0225", "0,0310"],
            ["Varianza específica", "0,0625 − 0,0310", "0,0315"],
            ["Proporción sistemática (R²)", "0,0310 / 0,0625", "49,5 %"],
            { celdas: ["Rentabilidad exigida", "3 % + 1,173 × 6 %", "10,04 %"], clase: "total" },
          ],
          nota: "La mitad de la varianza de esta acción **desaparece** al integrarla en una cartera diversificada. Solo la otra mitad se remunera. Por eso comparar la volatilidad individual de dos activos no dice nada sobre cuál exigirá más rentabilidad: lo que importa es la parte sistemática.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora una corrección sobre Arlanza.** En la ficha 7.05 usamos una beta de 1,1 «estimada por comparables», sin desarrollar el cálculo. Hagámoslo bien. Supongamos una empresa cotizada de distribución con beta observada de **1,35** y una relación deuda sobre fondos propios de **0,5**. Arlanza tiene una relación de 272.000 / 408.000 = **0,667**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Cálculo", "Resultado"],
          filas: [
            ["Beta apalancada de la comparable", "observada", "1,350"],
            ["Desapalancar con su D/E de 0,5", "1,35 / [1 + 0,75 × 0,5]", "0,982"],
            ["Reapalancar con el D/E de Arlanza", "0,982 × [1 + 0,75 × 0,667]", "1,473"],
            ["Coste de fondos propios", "3 % + 1,473 × 6 %", "11,84 %"],
            ["ROE de Arlanza (ficha 6.07)", "—", "11,76 %"],
            { celdas: ["Diferencial", "11,76 % − 11,84 %", "−0,08 p.p."], clase: "total" },
          ],
          nota: "**La conclusión de la ficha 7.05 no sobrevive.** Con una beta correctamente desapalancada y reapalancada, el coste de los fondos propios sube del 9,60 % al 11,84 % y el diferencial pasa de +2,16 puntos a **−0,08**. Recalculando el WACC —0,6 × 11,84 % + 0,4 × 3,31 %— sale un **8,43 %** frente a un ROIC del 8,38 %: el valor económico añadido es de unos **−340 €**, es decir, prácticamente cero.",
        },
        {
          tipo: "parrafos",
          items: [
            "Esto no es una contradicción del material anterior, es exactamente lo que la ficha 7.05 anticipaba al señalar que con una beta de 1,46 el diferencial desaparecería. **La estimación cuidadosa aterriza justo en ese umbral.** El diagnóstico correcto de Arlanza es que no crea ni destruye valor: opera a su coste de capital. Y la lección metodológica pesa más que la cifra: cuando una conclusión depende de un parámetro estimado con un margen de más de tres décimas, la conclusión hay que presentarla como lo que es, un rango que cruza el cero.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la beta es un número, no una propiedad",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El ejercicio anterior deja una pregunta incómoda: si el coste de capital de una empresa depende de forma tan directa de la beta, ¿qué fiabilidad tiene la beta? Bastante menos de la que su uso cotidiano sugiere.",
            "**Depende del período de estimación.** Dos años de datos diarios y cinco de datos mensuales sobre la misma acción pueden dar betas que difieran en varias décimas. No hay una respuesta correcta: períodos cortos captan mejor la situación actual y son más ruidosos; períodos largos son más estables y pueden reflejar un negocio que ya no existe.",
            "**Depende de la frecuencia.** Las betas diarias están contaminadas por efectos de negociación no sincronizada, especialmente en valores poco líquidos, y tienden a sesgarse a la baja. Las mensuales reducen ese problema y a cambio ofrecen muchas menos observaciones.",
            "**Depende del índice de referencia.** Una beta contra el índice nacional y otra contra un índice mundial no miden lo mismo, y para una empresa con ventas globales la segunda es conceptualmente más correcta y muy poco habitual en la práctica española.",
            "**Y depende de si se ajusta.** Las betas tienden estadísticamente a revertir hacia uno con el tiempo, y por eso muchos proveedores publican **betas ajustadas** mediante una ponderación entre la beta estimada y la unidad. Es una corrección razonable y también una decisión arbitraria más.",
            "**Para empresas no cotizadas** —el caso de Arlanza y de la inmensa mayoría de las empresas españolas— no hay beta observable en absoluto. Hay que construirla con comparables, y ahí se acumulan tres decisiones: qué comparables elegir, con qué estructura financiera desapalancarlas y qué estructura objetivo usar al reapalancar.",
            "**La conclusión práctica** no es que el CAPM sea inútil, sino cómo usarlo: estimar un **rango** de betas con varios métodos y comparables, calcular el coste de capital para todo el rango, y comprobar si la decisión cambia dentro de él. Si no cambia, la imprecisión es irrelevante. Si cambia —como en Arlanza—, hay que decirlo en lugar de elegir el extremo que convenga.",
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
            { t: "Usar la volatilidad total como medida de riesgo remunerado", d: "Solo la parte sistemática se remunera; la específica se elimina diversificando y nadie paga prima por asumir un riesgo evitable. En el ejemplo, la mitad de la varianza de la acción desaparece dentro de una cartera." },
            { t: "Tratar la beta como una característica objetiva de la empresa", d: "Es un parámetro estimado que depende del período, de la frecuencia, del índice y de si se ajusta. Dos estimaciones defendibles pueden diferir en varias décimas, y esas décimas mueven el coste de capital más de un punto." },
            { t: "Usar la beta apalancada de una comparable sin ajustar", d: "Incorpora la estructura financiera de esa empresa, que puede no tener nada que ver con la del proyecto o la empresa que se analiza. Hay que desapalancar y reapalancar, como en el ejemplo de Arlanza." },
            { t: "Interpretar un alfa positivo como habilidad", d: "Puede reflejar exposición a factores que el modelo de un solo índice no recoge: tamaño, valor, momento, calidad. Buena parte de lo que durante décadas se atribuyó a habilidad resultó ser exposición sistemática a factores identificables después." },
            { t: "Aplicar el CAPM a activos muy alejados de la cartera de mercado", d: "El modelo supone inversores diversificados. Para un empresario cuyo patrimonio está concentrado en su propia empresa, el riesgo relevante no es solo el sistemático, y el coste de capital que aplica es superior al que da el CAPM." },
            { t: "Confundir prima de riesgo histórica con esperada", d: "La media histórica es una estimación con un error estándar enorme: incluso con un siglo de datos, el intervalo de confianza de la prima abarca varios puntos. Las encuestas a profesionales y los modelos implícitos suelen dar cifras distintas entre sí." },
            { t: "Añadir factores hasta que el modelo ajuste", d: "La literatura ha propuesto centenares de factores y buena parte no sobrevive fuera de la muestra en que se descubrieron. Un factor sin explicación económica de por qué debería compensarse es un patrón encontrado en los datos, no un riesgo." },
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
            "Hay una tensión conocida entre la prima de riesgo que exigen los mercados y el rendimiento del capital que miden las cuentas nacionales.",
          ],
          lista: [
            "Las cuentas nacionales miden el **rendimiento efectivo del capital** a través del excedente neto de explotación sobre el stock neto de capital. Es un rendimiento realizado y observado, no exigido.",
            "Las primas de riesgo históricas de los mercados de acciones han sido durante largos períodos **superiores** a lo que ese rendimiento del capital físico y los modelos de consumo permitirían justificar. Es el llamado enigma de la prima de riesgo, planteado por Mehra y Prescott.",
            "Parte de la explicación es de medición: el rendimiento bursátil incorpora revalorizaciones que dependen de cambios en las tasas de descuento, mientras que el excedente de explotación mide el flujo generado por el capital productivo. **Son magnitudes que no se pueden comparar sin ajustes.**",
            "Además, el capital que miden las cuentas nacionales incluye activos de sectores enteros que no cotizan —vivienda, administraciones públicas, empresas familiares— con perfiles de rentabilidad muy distintos a los del índice bursátil.",
            "Es también la crítica de Roll vista desde el otro lado: la **cartera de mercado verdadera** se parecería mucho más al stock de capital que miden las cuentas nacionales que a un índice bursátil, y ese stock incluye capital humano, vivienda y activos no negociados.",
          ],
          cierre:
            "La lectura útil es que el índice bursátil es una muestra sesgada del capital de una economía, y que la prima de riesgo estimada sobre él no describe el rendimiento del capital en general. Conviene tenerlo presente al usar una prima de mercado para descontar los flujos de una empresa no cotizada.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Tipo sin riesgo 3 %, prima de mercado 5,5 %, beta 0,8. ¿Rentabilidad exigida?", a: "3 % + 0,8 × 5,5 % = 7,4 %. Con beta inferior a uno el activo amortigua los movimientos del mercado y sus accionistas exigen menos que la media." },
            { q: "Una acción tiene volatilidad del 40 % y un R² del 20 %. ¿Cuánto de su riesgo se remunera?", a: "Solo el 20 % de su varianza es sistemática; el 80 % restante desaparece al diversificar. Su volatilidad individual, muy alta, dice poco sobre la rentabilidad que exigirá el mercado." },
            { q: "Una comparable tiene beta 1,2 con D/E de 0,4 y el tipo impositivo es del 25 %. ¿Beta desapalancada?", a: "1,2 / [1 + 0,75 × 0,4] = 1,2 / 1,3 = 0,923. Es el riesgo del negocio sin el efecto de su endeudamiento, y es lo que hay que reapalancar con la estructura objetivo." },
            { q: "¿Por qué cambió la conclusión sobre Arlanza en esta ficha?", a: "Porque la beta de 1,1 usada en 7.05 era una simplificación. Al desapalancar y reapalancar correctamente sale 1,47, con lo que el coste de fondos propios sube al 11,84 % y el diferencial frente al ROE del 11,76 % desaparece. La empresa opera exactamente a su coste de capital." },
            { q: "¿Qué señala la crítica de Roll?", a: "Que la cartera de mercado verdadera es inobservable, porque incluiría inmuebles, capital humano y activos no cotizados. Todo contraste del CAPM es en realidad un contraste conjunto del modelo y del índice usado como aproximación." },
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
            { ref: "Bodie, Kane y Marcus, Investments", nota: "el CAPM, la línea del mercado de títulos y los modelos multifactor con el desarrollo estándar." },
            { ref: "Damodaran, base de datos pública de betas sectoriales", nota: "betas apalancadas y desapalancadas por sector y país, actualizadas cada año. Es la fuente práctica para el caso no cotizado." },
            { ref: "Fama y French, trabajos sobre los factores de tamaño y valor", nota: "el origen de los modelos multifactor y la discusión sobre si los factores compensan riesgo o recogen anomalías." },
            { ref: "Ang, Asset Management", nota: "la revisión crítica moderna de la inversión por factores, con las cautelas sobre su replicabilidad fuera de muestra." },
          ],
        },
      ],
    },
  ],
};
