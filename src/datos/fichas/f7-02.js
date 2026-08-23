/* Ficha 7.02 — Rentas, prestamos y cuadros de amortizacion. */

export default {
  codigo: "7.02",
  titulo: "Rentas, préstamos y cuadros de amortización",
  nivel: 1,
  bloque: "Finanzas corporativas",
  tiempo: "4 h",
  nucleo:
    "Una renta es una sucesión de flujos periódicos, y su valor actual se calcula con una fórmula cerrada en lugar de descontar término a término. De ahí salen la cuota de un préstamo, el precio de un bono y la fórmula de valoración de empresas por descuento de flujos perpetuos.",
  requiere: "7.01 Valor temporal del dinero",
  abre: "7.09 Valoración de empresas · 8.02 Renta fija · 8.04 Renta variable",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Descontar veinte flujos uno a uno es tedioso y, si los flujos son iguales y equidistantes, innecesario. La suma de una progresión geométrica tiene forma cerrada, y de ahí salen las fórmulas de **valor actual de una renta**. La estructura es siempre la misma: un flujo constante multiplicado por un factor que depende solo del tipo de interés y del número de períodos.",
            "El caso límite más útil es la **renta perpetua**, cuyo valor actual es simplemente el flujo dividido entre el tipo. Sorprende que una sucesión infinita de pagos tenga valor finito, pero es consecuencia directa del descuento: los flujos lejanos aportan cantidades cada vez menores y la serie converge. Su versión con crecimiento constante —flujo dividido entre el tipo menos la tasa de crecimiento— es la **fórmula de Gordon**, que reaparecerá en la valoración de acciones y en el valor terminal de cualquier descuento de flujos. Aprenderla aquí ahorra trabajo en tres fichas posteriores.",
            "Un **préstamo** no es más que una renta vista desde el otro lado: el prestamista entrega hoy un capital y recibe a cambio una sucesión de pagos cuyo valor actual, descontado al tipo pactado, iguala exactamente a ese capital. Esa igualdad es la ecuación que define la cuota, y de ella se deduce todo lo demás.",
            "Los **sistemas de amortización** se diferencian en cómo reparten el pago entre intereses y devolución de principal. El **francés** fija una cuota constante, lo que implica que al principio casi todo son intereses y al final casi todo es amortización. El **italiano** amortiza una cantidad constante de principal, con lo que la cuota total decrece. El **americano** paga solo intereses durante toda la vida y devuelve el principal íntegro al vencimiento, que es la estructura de los bonos.",
            "La propiedad del sistema francés que más consecuencias prácticas tiene es la **concentración de intereses al principio**. En un préstamo a veinte años, transcurrida la mitad del plazo sigue pendiente más de la mitad del capital. No es una trampa del banco: es aritmética inevitable de una cuota constante, porque al principio la deuda viva es grande y genera muchos intereses. Pero explica por qué amortizar anticipadamente en los primeros años ahorra mucho más que hacerlo en los últimos.",
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
            { nom: "Valor actual de una renta pospagable", sub: "n flujos iguales de importe C.", cols: ["VA = C × [1 − (1 + i)⁻ⁿ] / i"] },
            { nom: "Valor final de una renta", sub: "El capital acumulado al final del plazo.", cols: ["VF = C × [(1 + i)ⁿ − 1] / i"] },
            { nom: "Renta perpetua", sub: "El caso límite cuando n tiende a infinito.", cols: ["VA = C / i"] },
            { nom: "Renta perpetua creciente (Gordon)", sub: "Solo válida si g < i.", cols: ["VA = C₁ / (i − g)"] },
            { nom: "Cuota del sistema francés", sub: "Se despeja de la ecuación de equivalencia.", cols: ["a = P × i / [1 − (1 + i)⁻ⁿ]"] },
            { nom: "Capital pendiente tras k períodos", sub: "Valor actual de las cuotas que faltan.", cols: ["Pₖ = a × [1 − (1 + i)^−(n−k)] / i"] },
            { nom: "Cuota del sistema italiano", sub: "Amortización constante, cuota decreciente.", cols: ["aₖ = P/n + Pₖ₋₁ × i"] },
          ],
          nota: "La condición **g < i** en la fórmula de Gordon no es un tecnicismo: si el flujo creciera indefinidamente por encima del tipo de descuento, el valor actual sería infinito. Es la restricción que impide poner tasas de crecimiento perpetuo optimistas en un valor terminal.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un préstamo a veinte años",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Préstamo de **200.000 €** a **20 años** al **3 %** anual, sistema francés con pagos anuales.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Resultado"],
          filas: [
            ["Cuota anual", "200.000 × 0,03 / [1 − 1,03⁻²⁰]", "13.443,20 €"],
            ["Total pagado en 20 años", "13.443,20 × 20", "268.864 €"],
            { celdas: ["Intereses totales", "268.864 − 200.000", "68.864 €"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Cuota", "Intereses", "Amortización", "Pendiente"],
          filas: [
            ["1", "13.443,20 €", "6.000,00 €", "7.443,20 €", "192.556,80 €"],
            ["2", "13.443,20 €", "5.776,70 €", "7.666,50 €", "184.890,30 €"],
            ["3", "13.443,20 €", "5.546,71 €", "7.896,49 €", "176.993,81 €"],
            ["10", "13.443,20 €", "3.914,08 €", "9.529,12 €", "120.939,42 €"],
            ["15", "13.443,20 €", "2.686,50 €", "10.756,70 €", "78.793,33 €"],
            { celdas: ["20", "13.443,20 €", "391,55 €", "13.051,65 €", "0,00 €"], clase: "total" },
          ],
          nota: "En el primer año, el **45 % de la cuota** son intereses; en el último, menos del 3 %. Y transcurrida la mitad del plazo sigue pendiente el **57 % del capital** (114.673 € al cerrar el año 10). La cuota es constante, el reparto no.",
        },
        {
          tipo: "tabla",
          cabecera: ["Comparación de sistemas", "Francés", "Italiano", "Americano"],
          filas: [
            ["Primera cuota", "13.443 €", "16.000 €", "6.000 €"],
            ["Última cuota", "13.443 €", "10.300 €", "206.000 €"],
            ["Intereses totales", "68.864 €", "63.000 €", "120.000 €"],
            ["Pendiente al año 10", "114.673 €", "100.000 €", "200.000 €"],
          ],
          nota: "El italiano paga **5.864 € menos de intereses** porque amortiza más deprisa, a costa de cuotas iniciales un 19 % más altas. El americano es con diferencia el más caro en intereses porque no reduce el principal hasta el final. Ningún sistema es mejor: responden a perfiles de tesorería distintos.",
        },
      ],
    },
    {
      titulo: "Caso práctico: amortización anticipada de una hipoteca",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre el préstamo del ejemplo, se dispone de 20.000 € y se plantea amortizar anticipadamente. Hay dos preguntas y conviene no mezclarlas: **cuándo** hacerlo y **cómo** aplicarlo.",
            "**Cuándo.** Amortizar 20.000 € al final del primer año ahorra los intereses que ese capital habría generado durante diecinueve años. Hacerlo en el año quince ahorra los de cinco. El ahorro no es proporcional al plazo restante sino que crece con él de forma compuesta, y por eso la diferencia entre amortizar pronto y tarde es de un orden de magnitud, no de un porcentaje. La aritmética del sistema francés no penaliza al deudor: simplemente refleja que al principio se debe más.",
            "**Cómo.** Reducir plazo manteniendo la cuota ahorra bastante más intereses que reducir cuota manteniendo el plazo, porque acorta el período durante el cual se devengan. Reducir cuota, en cambio, libera tesorería mensual. La primera opción maximiza el ahorro financiero; la segunda, la flexibilidad. La elección depende de si el problema es el coste o la holgura de caja, y esa es una pregunta personal, no técnica.",
            "**La comparación que de verdad decide.** Antes de amortizar hay que comparar el tipo del préstamo con la rentabilidad alternativa de ese dinero, **después de impuestos y ajustada por riesgo**. Amortizar una hipoteca al 3 % equivale a una inversión segura al 3 % libre de impuestos, lo cual no es despreciable. Si la alternativa es un depósito al 2 %, amortizar gana; si es una cartera diversificada con expectativa del 6 % y se tiene horizonte y tolerancia al riesgo, la comparación deja de ser evidente. Y si existe deuda de consumo al 15 %, cancelarla primero es la única respuesta razonable.",
            "**Un último factor que no es financiero:** amortizar reduce el riesgo. La rentabilidad esperada de una cartera es una expectativa; el ahorro de intereses es un hecho. Para muchas personas ese cambio de perfil de riesgo vale más que un par de puntos de rentabilidad esperada, y esa preferencia es perfectamente legítima.",
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
            { t: "Comparar préstamos por el total de cuotas pagadas", d: "Es sumar flujos en fechas distintas, el error de la ficha 7.01. Un préstamo a treinta años tiene un total de cuotas mayor y puede ser más barato en valor actual. La comparación válida es la del tipo efectivo, incluidos todos los gastos y comisiones." },
            { t: "Creer que el sistema francés cobra intereses por adelantado", d: "No los cobra por adelantado: los cobra sobre el capital vivo, que al principio es casi todo. La proporción de intereses en la primera cuota es alta porque la deuda es alta, no porque el sistema esté sesgado. Con amortización constante ocurriría lo mismo en importes absolutos." },
            { t: "Aplicar la fórmula de Gordon con g mayor o igual que i", d: "Da un valor negativo o infinito, es decir, un sinsentido. Una tasa de crecimiento perpetuo superior al tipo de descuento implicaría que el flujo acaba superando a toda la economía. En valoración, g debe mantenerse por debajo del crecimiento nominal de largo plazo de la economía." },
            { t: "Olvidar comisiones y gastos al calcular el coste real", d: "Comisión de apertura, tasación, seguros vinculados y gastos de formalización elevan el tipo efectivo por encima del nominal. Es exactamente el mecanismo del coste amortizado de la ficha 5.07, visto desde el lado del deudor." },
            { t: "Confundir renta pospagable con prepagable", d: "Si los pagos se producen al principio de cada período y no al final, el valor actual es mayor en un factor (1 + i). Los alquileres suelen ser prepagables y los préstamos, pospagables. Aplicar la fórmula equivocada introduce un error sistemático." },
            { t: "Ignorar el efecto de la inflación en préstamos largos", d: "Una cuota nominal constante durante veinte años representa un esfuerzo real decreciente si hay inflación. En términos de poder adquisitivo, la carga del préstamo se aligera con el tiempo, y ese efecto puede ser tan relevante como el propio tipo de interés." },
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
            "El tratamiento de los intereses en el SEC 2010 incorpora un ajuste que no tiene equivalente en la contabilidad de empresa y que conviene conocer.",
          ],
          lista: [
            "Los **intereses (D.41)** se registran por **devengo**, no por pago. Los intereses acumulados y no pagados incrementan el instrumento financiero correspondiente, igual que en el coste amortizado de la ficha 5.07.",
            "El pago de un préstamo se descompone: la parte de **amortización de principal** es una operación financiera (F.4) que no afecta a la renta ni al déficit; solo la parte de **intereses** es una operación de distribución.",
            "El ajuste característico es el de los **SIFMI**, los servicios de intermediación financiera medidos indirectamente. El tipo que el banco cobra al prestatario incluye dos componentes: el interés puro, referenciado a un tipo de mercado, y una **remuneración implícita por el servicio de intermediación**. El SEC obliga a separarlos: la parte de servicio se registra como producción del sector financiero y como consumo intermedio o final del prestatario.",
            "La consecuencia es que los intereses que una empresa registra como gasto financiero en su cuenta de resultados **no coinciden** con los intereses D.41 de las cuentas nacionales: parte de ese importe se reclasifica como compra de un servicio.",
          ],
          cierre:
            "Es una de las divergencias menos intuitivas entre ambos sistemas y una de las que más explican por qué el excedente de explotación de un sector no se obtiene sumando resultados de explotación contables.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuál es el valor actual de 5.000 € anuales durante 12 años al 4 %?", a: "5.000 × [1 − 1,04⁻¹²] / 0,04 = 46.925 €. El total nominal cobrado sería 60.000 €; la diferencia es el efecto del descuento." },
            { q: "Un activo rinde 3.000 € anuales a perpetuidad y la tasa exigida es del 6 %. ¿Cuánto vale?", a: "50.000 €, es decir 3.000 / 0,06. Si además el flujo creciera un 2 % anual, valdría 3.000 / (0,06 − 0,02) = 75.000 €." },
            { q: "En un préstamo francés a 20 años, ¿qué proporción del capital queda pendiente a mitad de plazo?", a: "Más de la mitad: en el ejemplo, un 57 %. Es consecuencia de que la cuota constante dedica al principio la mayor parte a intereses, porque el capital vivo es grande." },
            { q: "¿Por qué el sistema italiano paga menos intereses totales que el francés?", a: "Porque amortiza principal más deprisa, y el capital vivo sobre el que se calculan los intereses se reduce antes. El precio es una cuota inicial más alta." },
            { q: "¿Coinciden los gastos financieros de una empresa con los intereses D.41 de las cuentas nacionales?", a: "No. El SEC separa del tipo cobrado por el banco una componente de servicio de intermediación (SIFMI), que se reclasifica como compra de un servicio y no como interés. La cifra contable y la estadística difieren por ese ajuste." },
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
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "rentas, perpetuidades y la fórmula de Gordon, presentadas ya orientadas a valoración." },
            { ref: "Manuales de matemática financiera de grados españoles", nota: "para los cuadros de amortización de los tres sistemas, con la mecánica completa." },
            { ref: "Banco de España, portal del cliente bancario", nota: "explicaciones sobre TAE, amortización anticipada y comparación de ofertas hipotecarias." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 4", nota: "operaciones de distribución e intereses, incluido el tratamiento de los SIFMI." },
          ],
        },
      ],
    },
  ],
};
