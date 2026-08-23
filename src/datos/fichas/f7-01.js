/* Ficha 7.01 — Valor temporal del dinero: capitalizacion y descuento. */

export default {
  codigo: "7.01",
  titulo: "Valor temporal del dinero: capitalización y descuento",
  nivel: 1,
  bloque: "Finanzas corporativas",
  tiempo: "3 h",
  nucleo:
    "Un euro hoy vale más que un euro mañana, y toda la disciplina financiera se deduce de esa única frase. Descontar es traer al presente flujos que ocurren en momentos distintos para poder sumarlos, porque cantidades situadas en fechas diferentes no son magnitudes homogéneas.",
  requiere: "nada previo",
  abre: "7.02 Rentas y préstamos · 7.03 VAN y TIR · 8.02 Renta fija",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La afirmación de que un euro hoy vale más que un euro mañana suele justificarse por la inflación, y es una justificación incompleta. Sigue siendo cierta en una economía con inflación cero, por dos razones más fundamentales: el euro de hoy puede invertirse y producir rendimiento durante ese año, y el euro de mañana es incierto mientras que el de hoy está en la mano. **Preferencia temporal, coste de oportunidad y riesgo** son las tres causas; la inflación es solo un factor adicional que se superpone.",
            "La consecuencia operativa es que **cantidades situadas en fechas distintas no se pueden sumar**. Es un error de la misma naturaleza que sumar metros y kilogramos. Antes de operar hay que llevarlas todas a una misma fecha, normalmente el presente, mediante el factor de descuento. Casi todos los errores graves de análisis financiero que se ven en la práctica consisten en haber sumado flujos sin homogeneizar.",
            "El **régimen compuesto** es el que se usa siempre en finanzas: los intereses se incorporan al capital y generan a su vez intereses. El régimen simple, en el que los intereses no se capitalizan, aparece únicamente en operaciones a muy corto plazo y por convención comercial. La diferencia entre ambos es despreciable en un mes y enorme en veinte años, y esa asimetría es la que hace que la intuición lineal falle sistemáticamente en horizontes largos.",
            "La **frecuencia de capitalización** introduce una distinción que confunde a mucha gente. Un tipo nominal del 12 % capitalizable mensualmente no es un 12 % efectivo anual, sino un 12,68 %, porque cada mes los intereses del mes anterior empiezan a generar intereses. Por eso las ofertas financieras solo son comparables cuando se expresan en **tipo efectivo anual**, que es lo que en el ámbito bancario se llama TAE. Comparar tipos nominales con periodicidades distintas es comparar cosas distintas.",
            "Por último, la relación entre **tipo nominal y tipo real**. La aproximación popular —restar la inflación al tipo nominal— es aceptable con cifras pequeñas y engaña con cifras grandes. La relación exacta es multiplicativa, no aditiva: un 5 % nominal con un 3 % de inflación deja un 1,94 % real, no un 2 %. Con inflación del 20 % la diferencia deja de ser un matiz.",
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
            { nom: "Capitalización compuesta", sub: "Llevar un importe hacia el futuro.", cols: ["VF = VA × (1 + i)ⁿ"] },
            { nom: "Descuento", sub: "Traerlo al presente. Es la operación inversa.", cols: ["VA = VF / (1 + i)ⁿ"] },
            { nom: "Tipo efectivo desde el nominal", sub: "m = número de capitalizaciones al año.", cols: ["i = (1 + j/m)^m − 1"] },
            { nom: "Capitalización continua", sub: "El límite cuando m tiende a infinito.", cols: ["VF = VA × e^(i·n)"] },
            { nom: "Tipo real (ecuación de Fisher)", sub: "Exacta; restar la inflación es solo una aproximación.", cols: ["(1 + i) = (1 + r) × (1 + π)"] },
            { nom: "Tipo equivalente para otro plazo", sub: "Para pasar de anual a mensual, y viceversa.", cols: ["i_m = (1 + i)^(1/m) − 1"] },
            { nom: "Regla del 72", sub: "Aproximación mental para duplicar un capital.", cols: ["n ≈ 72 / (i en %)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Caso A. Capitalización y descuento.** Se invierten 10.000 € al 5 % anual durante diez años.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Resultado"],
          filas: [
            ["Valor final", "10.000 × 1,05¹⁰", "16.288,95 €"],
            ["Intereses generados", "16.288,95 − 10.000", "6.288,95 €"],
            ["Si fuera régimen simple", "10.000 × (1 + 0,05 × 10)", "15.000,00 €"],
            ["Efecto de la capitalización", "16.288,95 − 15.000", "1.288,95 €"],
            { celdas: ["Valor actual de 16.288,95 € dentro de 10 años", "16.288,95 / 1,05¹⁰", "10.000,00 €"], clase: "total" },
          ],
          nota: "El descuento deshace exactamente la capitalización: son la misma operación leída en direcciones opuestas. Y el efecto compuesto ya supone un **8,6 % adicional** sobre el capital inicial en solo diez años al 5 %.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Caso B. Frecuencia de capitalización.** Tres ofertas con el mismo tipo nominal del 12 %:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Frecuencia", "Cálculo", "Tipo efectivo anual"],
          filas: [
            ["Anual", "1,12 − 1", "12,000 %"],
            ["Trimestral", "(1 + 0,12/4)⁴ − 1", "12,551 %"],
            ["Mensual", "(1 + 0,12/12)¹² − 1", "12,683 %"],
            ["Diaria", "(1 + 0,12/365)³⁶⁵ − 1", "12,747 %"],
            { celdas: ["Continua", "e^0,12 − 1", "12,750 %"], clase: "total" },
          ],
          nota: "Tres cuartos de punto de diferencia entre la primera y la última, con el mismo tipo nominal anunciado. La capitalización continua es el límite matemático y apenas mejora la diaria: el efecto marginal de aumentar la frecuencia se agota deprisa.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Caso C. Tipo real.** Con un 5 % nominal y una inflación del 3 %, el tipo real exacto es 1,05 / 1,03 − 1 = **1,942 %**, no el 2 % de la resta directa. La diferencia parece trivial, pero a treinta años un capital de 100.000 € crece hasta 178.100 € al 1,942 % y hasta 181.140 € al 2 %: **más de 3.000 € de discrepancia** por un redondeo de seis milésimas.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el horizonte largo y la intuición lineal",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La intuición humana es lineal y el interés compuesto es exponencial, y de ese desajuste nacen decisiones malas en las dos direcciones. Se subestima de forma sistemática lo que crece un ahorro sostenido durante décadas, y se subestima igualmente lo que cuesta una deuda pequeña que no se cancela.",
            "Aportar 200 € mensuales durante cuarenta años supone desembolsar 96.000 €. Al 5 % anual, el capital acumulado supera los 300.000 €: **dos tercios del resultado final son intereses**, no aportaciones. Y la mayor parte de esos intereses se generan en los últimos diez años, cuando la base ya es grande. Esa concentración al final es la razón de que empezar pronto importe mucho más que aportar más, y de que la intuición falle: durante los primeros quince años el crecimiento parece decepcionantemente lineal.",
            "El mismo mecanismo opera en contra con las deudas revolventes. Un saldo de 3.000 € en una tarjeta al 20 % TAE, pagando solo el mínimo, tarda más de una década en cancelarse y el importe total pagado supera con holgura al doble del principal. La cifra sorprende porque la cuota mensual parece pequeña, y la cuota mensual es precisamente lo que oculta el efecto compuesto.",
            "**La regla mental útil:** el 72 dividido entre el tipo de interés da los años que tarda un capital en duplicarse. Al 6 %, doce años; al 12 %, seis. Sirve tanto para estimar lo que rendirá una inversión como para calibrar lo que crecerá una deuda, y se calcula sin calculadora en mitad de una conversación.",
            "**Y la advertencia obligatoria:** ninguna de estas cifras tiene sentido sin descontar la inflación. Un 5 % nominal durante cuarenta años con un 2 % de inflación deja un 2,94 % real, y ese es el número que mide el poder adquisitivo. Razonar en nominal a largo plazo produce una ilusión de riqueza que el horizonte se encarga de deshacer.",
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
            { t: "Sumar flujos situados en fechas distintas", d: "Es el error de fondo del que derivan casi todos los demás. Cantidades en momentos diferentes no son homogéneas y no admiten suma directa. Antes de operar hay que llevarlas todas a una misma fecha. Comparar el total de cuotas de dos préstamos de distinto plazo es una versión muy común de este error." },
            { t: "Comparar tipos nominales con periodicidades distintas", d: "Un 12 % capitalizable mensualmente rinde más que un 12 % anual. La comparación solo es válida en tipo efectivo anual. Es la razón de que la normativa obligue a publicar la TAE." },
            { t: "Restar la inflación al tipo nominal", d: "La relación de Fisher es multiplicativa. La aproximación aditiva es tolerable con cifras pequeñas y produce errores relevantes con inflación alta o con horizontes largos, donde la diferencia se compone año tras año." },
            { t: "Mezclar flujos nominales con tasas reales", d: "Si los flujos están estimados en euros corrientes, hay que descontarlos a tipo nominal; si están en euros constantes, a tipo real. Cruzar ambos criterios es un error frecuente en la evaluación de proyectos largos y puede invertir la decisión." },
            { t: "Usar régimen simple en operaciones largas", d: "El régimen simple solo tiene sentido por convención comercial en plazos inferiores al año. Aplicarlo a diez años infravalora el resultado en un porcentaje que crece con el plazo y con el tipo." },
            { t: "Descontar con una tasa que no refleja el riesgo", d: "La tasa de descuento no es un parámetro técnico neutro: incorpora el coste de oportunidad y la prima de riesgo del flujo concreto que se descuenta. Usar la misma para un bono del Estado y para un proyecto empresarial hace que la comparación no signifique nada. Esa elección es el objeto de la ficha 7.05." },
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
            "El descuento aparece en cuentas nacionales en varios puntos, y en uno de ellos es determinante para la interpretación de una cifra muy comentada.",
          ],
          lista: [
            "La **deflactación** que separa precio de volumen es la misma operación de homogeneización: llevar magnitudes de períodos distintos a una unidad común para poder compararlas o sumarlas.",
            "La **tabla suplementaria de derechos de pensión** que el SEC 2010 exige requiere calcular el valor actual actuarial de los compromisos de pensiones futuras. El resultado depende críticamente de la tasa de descuento elegida, hasta el punto de que una diferencia de un punto porcentual mueve la cifra en varios puntos de PIB.",
            "Las **provisiones descontadas** de la ficha 5.08 y su actualización financiera anual son la aplicación contable del mismo mecanismo, y su equivalente sectorial aparece en las cuentas de las administraciones públicas.",
            "Los **tipos de interés reales implícitos** se obtienen aplicando Fisher a los tipos nominales observados y a los deflactores, y son la magnitud relevante para analizar la carga real de la deuda pública.",
          ],
          cierre:
            "Conviene retener el punto sobre las pensiones: cuando se cita una cifra de compromisos de pensiones como porcentaje del PIB, lo primero que hay que preguntar es a qué tasa se ha descontado. Sin ese dato, la cifra no es interpretable.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuánto vale hoy un cobro de 50.000 € dentro de 8 años, al 6 %?", a: "50.000 / 1,06⁸ = 31.370 €. Menos de dos tercios del importe nominal, y solo por el paso del tiempo, sin considerar riesgo adicional." },
            { q: "Un depósito ofrece un 6 % nominal capitalizable trimestralmente. ¿Cuál es su TAE?", a: "(1 + 0,06/4)⁴ − 1 = 6,136 %. La diferencia respecto al 6 % es la que genera capitalizar cuatro veces al año en lugar de una." },
            { q: "Tipo nominal 8 %, inflación 5 %. ¿Tipo real?", a: "1,08 / 1,05 − 1 = 2,857 %, no el 3 % de la resta. Con inflación elevada la aproximación aditiva deja de ser aceptable." },
            { q: "¿En cuántos años se duplica un capital al 9 %?", a: "Unos ocho, por la regla del 72. El cálculo exacto da 8,04 años: ln(2)/ln(1,09). La aproximación es buena en el rango del 4 % al 12 %." },
            { q: "¿Por qué no se pueden sumar directamente las cuotas de dos préstamos de distinto plazo?", a: "Porque los pagos ocurren en fechas distintas y no son magnitudes homogéneas. Un préstamo a 30 años tiene un total de cuotas mayor y puede ser más barato en valor actual. La comparación exige descontar ambos flujos." },
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
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "los primeros capítulos. El tratamiento clásico del valor temporal, con la intuición bien construida antes de la fórmula." },
            { ref: "Manuales de matemática financiera", nota: "cualquiera de los usados en grados españoles sirve para la mecánica de tipos equivalentes y regímenes de capitalización." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 17", nota: "la tabla suplementaria de derechos de pensión y el papel de la tasa de descuento, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
