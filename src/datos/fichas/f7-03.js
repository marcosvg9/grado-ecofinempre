/* Ficha 7.03 — Criterios de inversion: VAN, TIR y sus trampas. */

export default {
  codigo: "7.03",
  titulo: "Criterios de inversión: VAN, TIR y sus trampas",
  nivel: 2,
  bloque: "Finanzas corporativas",
  tiempo: "5 h",
  nucleo:
    "El VAN mide cuánto valor crea un proyecto en euros de hoy y es el criterio correcto sin excepciones. La TIR es más intuitiva porque se expresa en porcentaje, y precisamente por eso falla al comparar proyectos de distinto tamaño, distinto perfil temporal o con flujos que cambian de signo más de una vez.",
  requiere: "7.01 Valor temporal del dinero · 7.02 Rentas",
  abre: "7.04 Flujos de caja libres · 7.05 Coste de capital",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **valor actual neto** responde a la única pregunta que importa en una decisión de inversión: ¿vale el proyecto más de lo que cuesta? Se descuentan todos los flujos futuros a la tasa que refleja su riesgo y se resta el desembolso inicial. Si el resultado es positivo, el proyecto crea valor por encima de lo que exigirían quienes aportan el dinero, y ese excedente pertenece a los accionistas.",
            "Sus propiedades son las que lo convierten en el criterio de referencia. Está expresado en **euros**, de modo que los VAN de proyectos distintos se pueden sumar. Incorpora explícitamente el **coste de oportunidad** a través de la tasa de descuento. Y respeta el objetivo de maximizar el valor de la empresa, que es lo que en última instancia se persigue.",
            "La **tasa interna de rentabilidad** es la tasa que anula el VAN, es decir, el rendimiento que el proyecto ofrece sobre el capital invertido. Su atractivo es evidente: un porcentaje se compara mentalmente con el coste de la financiación sin necesidad de explicar nada. Para un proyecto aislado con flujos convencionales —un desembolso seguido de entradas— aceptar si la TIR supera al coste de capital da el mismo veredicto que el VAN.",
            "Los problemas aparecen en cuanto se sale de ese caso. Al **comparar proyectos mutuamente excluyentes**, la TIR puede ordenar al revés que el VAN, porque un porcentaje alto sobre poco dinero puede crear menos valor que uno moderado sobre mucho. Con **flujos no convencionales**, que cambian de signo más de una vez, puede haber varias TIR matemáticamente válidas o ninguna. Y la TIR lleva implícito un supuesto incómodo: que los flujos intermedios se reinvierten a la propia TIR, lo cual es dudoso justamente en los proyectos muy rentables.",
            "Hay además dos situaciones que exigen criterios adicionales. Con **racionamiento de capital**, cuando el presupuesto no alcanza para todos los proyectos con VAN positivo, hay que ordenar por valor creado **por euro invertido**, lo que da el índice de rentabilidad. Y con **vidas útiles distintas**, comparar VAN directamente favorece al proyecto más largo, por lo que se recurre a la anualidad equivalente o a la cadena de reemplazo.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Situación", "¿Sirve la TIR?", "Qué usar"],
          filas: [
            { nom: "Proyecto aislado, flujos convencionales", sub: "Un desembolso y después entradas", cols: ["Sí, coincide con el VAN", "Cualquiera de los dos"] },
            { nom: "Proyectos excluyentes de distinto tamaño", sub: "Hay que elegir uno", cols: ["No, puede ordenar mal", "VAN"] },
            { nom: "Proyectos con distinto perfil temporal", sub: "Uno cobra pronto y otro tarde", cols: ["No, hay tasa de corte", "VAN a la tasa correcta"] },
            { nom: "Flujos que cambian de signo varias veces", sub: "Desmantelamientos, reinversiones", cols: ["No, TIR múltiple", "VAN o TIR modificada"] },
            { nom: "Presupuesto limitado", sub: "No caben todos los proyectos buenos", cols: ["No directamente", "Índice de rentabilidad"] },
            { nom: "Vidas útiles distintas", sub: "5 años frente a 10", cols: ["No", "Anualidad equivalente"] },
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
            { nom: "Valor actual neto", sub: "Aceptar si es positivo. Elegir el mayor si son excluyentes.", cols: ["$\\mathrm{VAN} = -I_0 + \\sum_t \\dfrac{FC_t}{(1+k)^t}$"] },
            { nom: "Tasa interna de rentabilidad", sub: "Se resuelve numéricamente: no hay fórmula cerrada.", cols: ["$\\mathrm{VAN}(\\mathrm{TIR}) = 0$"] },
            { nom: "Índice de rentabilidad", sub: "Valor creado por euro invertido.", cols: ["$\\mathrm{IR} = \\dfrac{\\text{VA de los flujos}}{I_0}$"] },
            { nom: "TIR modificada", sub: "Corrige el supuesto de reinversión.", cols: ["$\\mathrm{TIRM} = \\left(\\dfrac{\\text{VF de entradas a } k}{\\text{VA de salidas a } k}\\right)^{1/n} - 1$"] },
            { nom: "Anualidad equivalente", sub: "Para comparar proyectos de distinta duración.", cols: ["$\\mathrm{AE} = \\dfrac{\\mathrm{VAN} \\cdot i}{1 - (1+i)^{-n}}$"] },
            { nom: "Tasa de corte entre dos proyectos", sub: "El tipo al que ambos VAN coinciden.", cols: ["TIR de la corriente diferencial (B − A)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuando VAN y TIR discrepan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos proyectos excluyentes exigen el mismo desembolso de 100.000 € y devuelven cantidades parecidas, pero con perfiles temporales opuestos. **A** cobra pronto; **B**, tarde. El coste de capital es del **10 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Momento", "Proyecto A", "Proyecto B"],
          filas: [
            ["Año 0", "−100.000 €", "−100.000 €"],
            ["Año 1", "+60.000 €", "+20.000 €"],
            ["Año 2", "+50.000 €", "+40.000 €"],
            ["Año 3", "+40.000 €", "+100.000 €"],
            ["Total nominal cobrado", "150.000 €", "160.000 €"],
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Coste capital", y: "VAN (miles)" },
          dominio: { x: [0, 0.3], y: [-14, 62] },
          marcasX: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3],
          marcasY: [0, 20, 40, 60],
          series: [
            {
              nombre: "Proyecto A",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [0.3, -1.5],
              puntos: [[0, 50], [0.03, 41.99], [0.06, 34.69], [0.09, 28.02], [0.1061, 24.67], [0.13, 19.98], [0.16, 14.51], [0.19, 9.47], [0.2115, 6.16], [0.2535, 0], [0.28, -3.53], [0.3, -6.07]],
            },
            {
              nombre: "Proyecto B",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [0.3, -15.5],
              puntos: [[0, 60], [0.03, 48.64], [0.06, 38.43], [0.09, 29.23], [0.1061, 24.67], [0.13, 18.33], [0.16, 11.03], [0.19, 4.39], [0.2115, 0], [0.24, -5.41], [0.28, -12.28], [0.3, -14.8]],
            },
            {
              nombre: "",
              color: "tinta",
              grosor: 1.2,
              puntos: [[0, 0], [0.3, 0]],
            },
          ],
          puntos: [
            { x: 0.1061, y: 24.67, etiqueta: "corte 10,61 %", guias: false },
            { x: 0.2115, y: 0, etiqueta: "TIR B", guias: false },
            { x: 0.2535, y: 0, etiqueta: "TIR A", guias: false },
          ],
          nota: "Este gráfico resuelve la contradicción de un vistazo. **La TIR es solo el punto donde cada curva cruza el cero**, y como la de A está más a la derecha, A gana ese criterio siempre, sea cual sea el coste de capital. Pero lo que interesa es la **altura de la curva a la tasa relevante**, y ahí las dos se cruzan en el **10,61 %**: a la izquierda de ese punto B está por encima y a la derecha, A. Con un coste de capital del 10 % estamos justo a la izquierda, y por eso gana B. La razón geométrica es que **la curva de B es más inclinada** —sus flujos llegan tarde y por tanto el descuento los castiga más—, y una curva más inclinada acaba siempre por debajo si se descuenta lo suficiente.",
        },
        {
          tipo: "tabla",
          cabecera: ["Criterio", "Proyecto A", "Proyecto B", "¿Cuál gana?"],
          filas: [
            ["VAN al 10 %", "25.920 €", "26.371 €", "B, por poco"],
            ["TIR", "25,3 %", "21,1 %", "A, con claridad"],
            ["Índice de rentabilidad", "1,26", "1,26", "Empate"],
            { celdas: ["Tasa de corte", "—", "—", "10,61 %"], clase: "total" },
          ],
          nota: "**Contradicción directa**: la TIR prefiere A y el VAN prefiere B. La clave está en la tasa de corte del 10,61 %: por debajo de ella gana B, por encima gana A. Como el coste de capital real es del 10 %, estamos justo por debajo y B es la elección correcta. Si el coste de capital fuera del 12 %, la respuesta cambiaría.",
        },
        {
          tipo: "parrafos",
          items: [
            "El motivo de la discrepancia es el **supuesto de reinversión implícito**. La TIR asume que los 60.000 € que A devuelve el primer año se reinvierten al 25,3 % durante dos años más, lo cual solo es cierto si la empresa tiene otros proyectos igual de rentables esperando. El VAN asume que se reinvierten al coste de capital, un supuesto mucho más defendible. Cuando la empresa no tiene una cartera inagotable de proyectos excelentes, el VAN acierta y la TIR sobrevalora los proyectos de retorno temprano.",
            "**El caso de la TIR múltiple.** Considera un proyecto minero con flujos −100.000, +250.000 y −150.000, donde el último desembolso es el coste de restauración del terreno. Este proyecto tiene **dos TIR: 0 % y 50 %**, ambas matemáticamente correctas. La regla «aceptar si la TIR supera al coste de capital» es directamente inaplicable, y no hay forma de arreglarlo eligiendo una de las dos. El VAN, en cambio, da un número único para cada tasa de descuento y decide sin ambigüedad.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué la TIR sigue mandando en la práctica",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Pese a todo lo anterior, la TIR es el criterio dominante en capital riesgo, en infraestructuras y en buena parte de los comités de inversión. Merece la pena entender por qué, en lugar de despacharlo como un error colectivo.",
            "**Primero, no exige acordar una tasa de descuento.** El VAN obliga a fijar el coste de capital antes de calcular nada, y esa cifra es discutible y a menudo políticamente incómoda dentro de una organización. La TIR se calcula solo con los flujos y traslada la discusión al final: se presenta el porcentaje y cada cual lo compara con su propia referencia.",
            "**Segundo, es comparable entre operaciones de tamaño muy distinto.** Un fondo que evalúa participaciones de 2 millones y de 50 millones necesita una métrica escalable, y un VAN en euros no lo es. **Tercero, se comunica sin explicaciones**: decir que una operación rinde un 22 % anual no requiere formación financiera; decir que crea 4,3 millones de valor actual, sí.",
            "**Lo que hay que vigilar cuando se usa.** La TIR premia el retorno temprano, lo que empuja a estructurar operaciones con distribuciones rápidas aunque no maximicen valor: recapitalizaciones apalancadas, ventas parciales anticipadas. También es muy sensible al calendario: retrasar tres meses una entrada de caja mueve la TIR sensiblemente sin que el negocio haya cambiado. Y no dice nada sobre el **tamaño** del valor creado, que es lo que acaba importando al propietario del capital.",
            "**La práctica razonable** es calcular ambos y entender por qué difieren cuando difieren. Si coinciden en el orden, la discusión es estéril. Si discrepan, la discrepancia contiene información: casi siempre indica una diferencia de tamaño o de perfil temporal que conviene poner sobre la mesa explícitamente en lugar de dejar que la métrica elegida decida en silencio.",
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
            { t: "Elegir entre proyectos excluyentes por la TIR", d: "Un 40 % sobre 10.000 € crea 4.000 € de valor; un 15 % sobre 500.000 € crea 75.000 €. La TIR ignora la escala. Cuando hay que elegir uno y solo uno, el criterio es el VAN sin excepciones." },
            { t: "Aplicar la regla de la TIR a flujos no convencionales", d: "Si los flujos cambian de signo más de una vez puede haber varias TIR o ninguna. La regla «aceptar si supera al coste de capital» carece entonces de sentido. Hay que usar el VAN o, si se necesita un porcentaje, la TIR modificada." },
            { t: "Incluir los intereses en los flujos del proyecto", d: "El coste de la financiación ya está en la tasa de descuento. Restarlo también del flujo lo cuenta dos veces y hunde artificialmente el VAN. Los flujos del proyecto se estiman antes de intereses; la estructura financiera vive en el denominador." },
            { t: "Comparar VAN de proyectos con vidas distintas", d: "Un proyecto a diez años tiene más ocasiones de generar valor que uno a cinco. Comparar sus VAN directamente favorece al largo. Hay que igualar horizontes con la anualidad equivalente o repitiendo el proyecto corto." },
            { t: "Usar el plazo de recuperación como criterio principal", d: "Ignora todo lo que ocurre después de recuperar la inversión y, en su versión simple, no descuenta. Es útil como filtro de liquidez o de riesgo político, nunca como criterio de decisión: rechazaría sistemáticamente los proyectos de maduración lenta y alto valor." },
            { t: "Descontar todos los proyectos a la misma tasa", d: "La tasa debe reflejar el riesgo del proyecto, no el de la empresa que lo emprende. Una empresa estable que acomete un proyecto arriesgado y lo descuenta a su WACC habitual lo sobrevalorará sistemáticamente. Es el tema central de la ficha 7.05." },
            { t: "Mezclar flujos nominales con tasas reales", d: "Si los flujos incorporan inflación hay que descontarlos a tasa nominal, y si están en euros constantes, a tasa real. Cruzar ambos criterios en proyectos largos puede invertir la decisión." },
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
            "El análisis de inversiones tiene una versión pública en la que la lógica es idéntica y los parámetros son distintos.",
          ],
          lista: [
            "El **análisis coste-beneficio** de proyectos cofinanciados con fondos europeos aplica exactamente el VAN, con una **tasa social de descuento** fijada por la Comisión en lugar de un coste de capital de mercado.",
            "La diferencia sustantiva está en los flujos: se incorporan **externalidades** —emisiones evitadas, tiempo de viaje ahorrado, siniestralidad— valoradas con precios sombra, porque el objetivo no es el beneficio del promotor sino el bienestar social.",
            "La elección de la tasa social de descuento tiene consecuencias enormes en proyectos de horizonte muy largo. Con una tasa del 5 %, un beneficio dentro de cien años vale menos del 1 % de su importe; con una del 1,4 %, vale la cuarta parte. Ese es el núcleo del debate sobre la evaluación económica del cambio climático.",
            "En el SEC 2010, el resultado de estas decisiones aparece después como **formación bruta de capital fijo (P.51g)** de las administraciones públicas, sin que la contabilidad nacional registre nada sobre la calidad de la decisión que llevó a ella.",
          ],
          cierre:
            "El contraste es útil: la contabilidad nacional mide cuánto se invierte, no si convenía invertirlo. Son preguntas distintas y a menudo se confunden en el debate público sobre inversión pública.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un proyecto exige 50.000 € y genera 20.000 € anuales durante 4 años. Al 8 %, ¿cuál es su VAN?", a: "$20.000 \\times \\dfrac{1 - 1{,}08^{-4}}{0{,}08} = 66.243$ €. VAN $= 66.243 - 50.000 = 16.243$ €. Positivo: crea valor y debe aceptarse." },
            { q: "El proyecto X tiene TIR del 30 % y VAN de 12.000 €; el Y, TIR del 18 % y VAN de 40.000 €. Son excluyentes. ¿Cuál eliges?", a: "Y. El VAN mide el valor creado en euros y es el criterio correcto entre proyectos excluyentes. La TIR ignora la escala de la inversión." },
            { q: "¿Qué supuesto de reinversión lleva implícito cada criterio?", a: "La TIR supone que los flujos intermedios se reinvierten a la propia TIR; el VAN, que se reinvierten al coste de capital. El segundo supuesto es más realista, sobre todo en proyectos de TIR elevada." },
            { q: "Flujos: −100, +250, −150. ¿Cuál es la TIR?", a: "Hay dos: 0 % y 50 %, ambas anulan el VAN. Con flujos que cambian de signo más de una vez la TIR deja de ser única y la regla de decisión es inaplicable. Hay que usar el VAN." },
            { q: "¿Por qué no se restan los intereses de los flujos de un proyecto?", a: "Porque el coste de la financiación ya está incorporado en la tasa de descuento. Restarlo también del numerador lo contabilizaría dos veces. Los flujos son antes de intereses; la financiación vive en el denominador." },
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
              q: "Hay que elegir un proyecto y solo uno. El A tiene una TIR del 40 % sobre 10.000 € y el B del 15 % sobre 500.000 €. ¿Cuál se elige?",
              opciones: [
                "El A, porque su rentabilidad es mucho mayor",
                "El B: crea 75.000 € de valor frente a los 4.000 € del A, y en proyectos excluyentes manda el VAN",
                "El A, salvo que la empresa no pueda colocar los 490.000 € restantes",
                "Es indiferente: ambos superan cualquier coste de capital razonable",
              ],
              correcta: 1,
              porque: [
                "La TIR ignora la escala: es un porcentaje, y un porcentaje alto sobre poco dinero crea poco valor.",
                "El criterio correcto cuando hay que elegir uno y solo uno es siempre el VAN, porque mide creación de valor en euros y no en tanto por ciento.",
                "El destino del resto del dinero es una cuestión real, pero no rescata a la TIR como criterio de elección entre excluyentes.",
                "Superar el coste de capital basta para aceptar un proyecto aislado; no basta para ordenar dos que se excluyen.",
              ],
            },
            {
              q: "Los flujos de un proyecto cambian de signo más de una vez. ¿Puede aplicarse la regla «aceptar si la TIR supera al coste de capital»?",
              opciones: [
                "Sí: la TIR está definida para cualquier serie de flujos",
                "No: puede haber varias TIR o ninguna, y la regla pierde entonces todo sentido",
                "Sí, tomando la mayor de las TIR obtenidas",
                "No, salvo que el cambio de signo se produzca en el último período",
              ],
              correcta: 1,
              porque: [
                "La TIR es una raíz de un polinomio: con varios cambios de signo puede haber varias raíces reales, o ninguna.",
                "Hay que recurrir al VAN, que está bien definido para cualquier serie de flujos y no depende de cuántas veces cambien de signo.",
                "Quedarse con la mayor es arbitrario: ninguna de las raíces tiene mejor derecho que las otras a llamarse la rentabilidad del proyecto.",
                "El problema aparece con cualquier cambio de signo intermedio, incluido uno al final —un desmantelamiento costoso, por ejemplo.",
              ],
            },
            {
              q: "Se comparan dos proyectos por su VAN: uno dura diez años y otro cinco. ¿Es una comparación válida tal cual?",
              opciones: [
                "Sí: el VAN ya incorpora el momento de cada flujo",
                "No: el proyecto largo tiene más ocasiones de generar valor, y hay que igualar horizontes o usar la anualidad equivalente",
                "Sí, si ambos se descuentan a la misma tasa",
                "No, pero basta con dividir cada VAN entre los años de vida del proyecto",
              ],
              correcta: 1,
              porque: [
                "Incorpora el momento de cada flujo, pero no corrige que uno acumule el doble de períodos generando valor.",
                "La anualidad equivalente traduce cada VAN a un flujo anual constante, que sí es comparable porque se expresa en la misma unidad temporal.",
                "La misma tasa es necesaria pero no suficiente: el sesgo a favor del proyecto largo persiste.",
                "Dividir por los años no es lo mismo que anualizar: ignora el descuento y da una cifra que no corresponde a ningún flujo real.",
              ],
            },
            {
              q: "¿Qué papel debe tener el plazo de recuperación en la decisión de inversión?",
              opciones: [
                "Ser el criterio principal, por su sencillez y su prudencia",
                "Servir como filtro de liquidez o de riesgo político, nunca como criterio principal",
                "Sustituir al VAN cuando los flujos son difíciles de estimar",
                "Descartarse por completo: no aporta información útil",
              ],
              correcta: 1,
              porque: [
                "Ignora todo lo que ocurre después de recuperar la inversión y, en su versión simple, ni siquiera descuenta. Su sencillez es el problema, no la virtud.",
                "Como filtro es razonable: en un país con riesgo de expropiación, recuperar la inversión en tres años en lugar de doce cambia de verdad la exposición.",
                "Si los flujos son difíciles de estimar, el plazo de recuperación se calcula sobre esas mismas estimaciones dudosas y encima usa menos información.",
                "Sí aporta: responde a una pregunta legítima sobre exposición temporal. Lo que no puede es responder a la pregunta de si el proyecto crea valor.",
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
            { ref: "Brealey, Myers y Allen, Principios de finanzas corporativas", nota: "el capítulo sobre criterios de inversión, con el catálogo completo de trampas de la TIR." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "más ordenado en la exposición del racionamiento de capital y del índice de rentabilidad." },
            { ref: "Guide to Cost-Benefit Analysis of Investment Projects, Comisión Europea", nota: "la aplicación del VAN a proyectos públicos, con tasas sociales de descuento y precios sombra." },
          ],
        },
      ],
    },
  ],
};
