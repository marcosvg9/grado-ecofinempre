/* Ficha 14.07 — Contratos mercantiles, garantías y el arrendamiento financiero. */

export default {
  codigo: "14.07",
  titulo: "Contratos mercantiles, garantías y el arrendamiento financiero",
  nivel: 3,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "El derecho civil pregunta quién es el dueño; la contabilidad y la estadística preguntan quién asume los riesgos y las ventajas. En un arrendamiento financiero esas dos preguntas tienen respuestas distintas, y ver cómo se separan es la mejor forma de entender qué significa realmente «propiedad económica».",
  requiere: "14.01 El empresario y el Registro Mercantil · 7.02 Rentas y préstamos",
  abre: "14.09 Insolvencia · 13.08 La formación de capital · 5.10 Cuentas anuales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Los contratos mercantiles no son una categoría cerrada sino los contratos ordinarios adaptados al tráfico de empresa**, y esa adaptación sigue siempre la misma dirección: **más rapidez, más certeza y menos protección del deudor**. La compraventa mercantil tiene plazos de denuncia de defectos mucho más cortos que la civil; la solidaridad de los codeudores se presume en lugar de tener que pactarse; y los usos del comercio de la ficha 14.01 completan lo que las partes no dijeron. Todo apunta a que la operación se cierre y no vuelva a discutirse.",
            "**Hay un grupo de contratos de colaboración que conviene distinguir porque se confunden a diario y su régimen es muy distinto.** En la **comisión** el comisionista actúa por cuenta del comitente en operaciones concretas. En la **agencia** el agente promueve de forma **estable** operaciones ajenas sin asumir el riesgo, y por eso la ley le concede protección: preaviso para terminar el contrato y, sobre todo, una **indemnización por clientela** cuando su actividad ha generado una cartera que el empresario seguirá aprovechando. En la **distribución** el distribuidor compra para revender **en nombre y por cuenta propios**, asumiendo el riesgo, y carece de un régimen legal específico. Y en la **franquicia** se cede además el uso de una marca y de un método de negocio a cambio de cánones.",
            "**La diferencia entre agencia y distribución es la que más litigios genera y el criterio es económico, no nominal.** Lo decisivo no es cómo se titule el contrato sino **quién asume el riesgo de la operación**: si el intermediario compra la mercancía y la revende por su cuenta, es distribuidor; si solo promueve ventas ajenas cobrando comisión, es agente, y entonces tiene derecho a indemnización por clientela aunque el contrato lo llame de otro modo. Es un primer aviso del criterio que domina toda la ficha: **la calificación sigue a la sustancia económica, no a la etiqueta**.",
            "**Las garantías son el otro gran instrumento del tráfico y se dividen en dos familias con lógicas opuestas.** Las **personales** añaden un patrimonio: la **fianza** y, sobre todo, el **aval a primer requerimiento**, que obliga a pagar sin poder discutir la relación subyacente y que es el que exigen los bancos. Las **reales** afectan un bien concreto: **hipoteca** sobre inmuebles, **prenda** sobre muebles, y la **reserva de dominio**, que permite al vendedor a plazos seguir siendo propietario hasta el último pago. La diferencia práctica es enorme: la garantía personal solo vale lo que valga el patrimonio del garante y compite con sus demás acreedores; la real otorga **preferencia de cobro** sobre un bien determinado, y en el concurso de la ficha 14.09 esa preferencia lo cambia todo.",
            "**Y llegamos al arrendamiento financiero, que es el mejor ejemplo posible de la disociación entre propiedad jurídica y económica.** Una entidad compra el bien que el usuario ha elegido y se lo cede en uso durante un plazo, a cambio de cuotas, con una **opción de compra** final por un valor pequeño. Jurídicamente el arrendador **es y sigue siendo el propietario** hasta que se ejercita la opción: puede recuperar el bien si no se paga, y en un concurso del usuario reclama la cosa como suya.",
            "**Y sin embargo el usuario soporta todo lo que económicamente define a un propietario.** Elige el bien, lo mantiene, asegura su pérdida, soporta la obsolescencia, no puede devolverlo sin coste y **ejercitará la opción con práctica certeza** porque su precio está muy por debajo del valor residual. Por eso la contabilidad decide lo contrario que el derecho: cuando de las condiciones se deduce que se transfieren sustancialmente los riesgos y beneficios de la propiedad, el **arrendatario activa el bien y reconoce una deuda** por el valor razonable, y desglosa cada cuota en amortización de deuda y gasto financiero.",
            "**La contabilidad nacional hace exactamente lo mismo y con la misma justificación.** El SEC distingue el **arrendamiento financiero** del **operativo**, y en el primero registra una **transferencia de propiedad económica**: el bien es formación bruta de capital fijo del arrendatario y se imputa un préstamo del arrendador por el mismo importe, que las cuotas van amortizando. Contabilidad de empresa y estadística coinciden porque comparten el criterio, y ambas se apartan del derecho porque persiguen otra cosa: no saber quién puede reivindicar la cosa, sino **quién está usando capital y quién lo está financiando**.",
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
            { nom: "Dirección de la especialidad mercantil", sub: "Todo apunta a cerrar la operación.", cols: ["más rapidez y certeza · menos tutela del deudor"] },
            { nom: "Agencia", sub: "Promueve sin asumir el riesgo.", cols: ["estable · con indemnización por clientela"] },
            { nom: "Distribución", sub: "Compra y revende por su cuenta.", cols: ["asume el riesgo · sin régimen legal propio"] },
            { nom: "El criterio que los separa", sub: "No el nombre del contrato.", cols: ["quién asume el riesgo de la operación"] },
            { nom: "Garantías personales", sub: "Añaden un patrimonio.", cols: ["fianza · aval a primer requerimiento"] },
            { nom: "Garantías reales", sub: "Afectan un bien concreto.", cols: ["hipoteca · prenda · reserva de dominio"] },
            { nom: "Por qué importa la diferencia", sub: "Decisivo en el concurso.", cols: ["la real da preferencia de cobro; la personal, no"] },
            { nom: "Leasing: propiedad jurídica", sub: "Hasta que se ejercita la opción.", cols: ["del arrendador"] },
            { nom: "Leasing: propiedad económica", sub: "Riesgos y beneficios sustanciales.", cols: ["del arrendatario"] },
            { nom: "A quién sigue cada disciplina", sub: "Y por eso divergen.", cols: ["derecho, la jurídica · contabilidad y SEC, la económica"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un leasing por dentro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa necesita una máquina cuyo valor razonable es de **100.000 €**. La financia mediante arrendamiento financiero a **cinco años**, con cuotas anuales de **22.000 €** y una opción de compra final de **5.000 €**, muy por debajo del valor que tendrá la máquina, de modo que no hay duda razonable de que se ejercitará.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe", "Comentario"],
          filas: [
            ["Valor razonable de la máquina", "100.000 €", "Lo que costaría comprarla al contado"],
            ["Cuotas: 5 × 22.000 €", "110.000 €", "Lo que se paga durante el contrato"],
            ["Opción de compra", "5.000 €", "Muy inferior al valor residual: se ejercitará"],
            ["Total desembolsado", "115.000 €", "Cuotas más opción"],
            ["Carga financiera", "15.000 €", "Diferencia entre lo pagado y el valor razonable"],
            { celdas: ["Tipo de interés implícito", "4,706 %", "El que iguala el valor actual de los pagos a los 100.000 €"], clase: "total" },
          ],
          nota: "Los 15.000 € de diferencia **no son un mayor coste de la máquina sino intereses**, y el tipo implícito del 4,706 % es la magnitud que permite comparar esta operación con un préstamo ordinario. Ese cálculo es el de la ficha 7.02 aplicado aquí: se busca el tipo que iguala el valor actual de las cinco cuotas más la opción a los 100.000 € de hoy. Sin ese cálculo, un leasing es incomparable con cualquier otra fuente de financiación, y esa opacidad es precisamente lo que la norma contable obliga a deshacer.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Año del contrato", y: "Euros" },
          dominio: { x: [0, 6], y: [0, 26000] },
          marcasX: [1, 2, 3, 4, 5],
          marcasY: [0, 5000, 10000, 15000, 20000, 22000],
          areas: [
            { puntos: [[0.6, 0], [0.6, 17294], [1.4, 17294], [1.4, 0]], color: "acento" },
            { puntos: [[0.6, 17294], [0.6, 22000], [1.4, 22000], [1.4, 17294]], color: "alerta" },
            { puntos: [[1.6, 0], [1.6, 18108], [2.4, 18108], [2.4, 0]], color: "acento" },
            { puntos: [[1.6, 18108], [1.6, 22000], [2.4, 22000], [2.4, 18108]], color: "alerta" },
            { puntos: [[2.6, 0], [2.6, 18960], [3.4, 18960], [3.4, 0]], color: "acento" },
            { puntos: [[2.6, 18960], [2.6, 22000], [3.4, 22000], [3.4, 18960]], color: "alerta" },
            { puntos: [[3.6, 0], [3.6, 19852], [4.4, 19852], [4.4, 0]], color: "acento" },
            { puntos: [[3.6, 19852], [3.6, 22000], [4.4, 22000], [4.4, 19852]], color: "alerta" },
            { puntos: [[4.6, 0], [4.6, 20787], [5.4, 20787], [5.4, 0]], color: "acento" },
            { puntos: [[4.6, 20787], [4.6, 22000], [5.4, 22000], [5.4, 20787]], color: "alerta" },
          ],
          notas: [
            { x: 1, y: 19300, texto: "4.706", ancla: "middle" },
            { x: 2, y: 19750, texto: "3.892", ancla: "middle" },
            { x: 3, y: 20200, texto: "3.040", ancla: "middle" },
            { x: 4, y: 20650, texto: "2.148", ancla: "middle" },
            { x: 5, y: 21150, texto: "1.213", ancla: "middle" },
            { x: 1, y: 8300, texto: "17.294", ancla: "middle" },
            { x: 5, y: 9800, texto: "20.787", ancla: "middle" },
            { x: 0.25, y: 24600, texto: "Cada cuota de 22.000 €: amortización abajo, interés arriba", ancla: "start" },
          ],
          nota: "La cuota es siempre la misma y **su composición cambia**: el interés cae de 4.706 € a 1.213 € y la amortización sube en la misma medida, exactamente igual que en el préstamo francés de la ficha 7.02. Sumados, los cinco intereses dan **14.999 €**, que son los 15.000 € de carga financiera; y la deuda que queda tras la quinta cuota es **4.999 €**, que es justo la opción de compra. Que las dos cifras cuadren al euro es la comprobación de que el tipo implícito del 4,706 % está bien calculado: **el leasing es un préstamo, y su cuadro de amortización lo demuestra**.",
        },
        {
          tipo: "tabla",
          cabecera: ["Pregunta", "Derecho civil y mercantil", "Contabilidad (PGC) y SEC 2010"],
          filas: [
            ["¿Quién es propietario de la máquina?", "El arrendador, hasta ejercitar la opción", "El arrendatario, desde el primer día"],
            ["¿Dónde aparece la máquina?", "En el patrimonio del arrendador", "En el activo del arrendatario, por 100.000 €"],
            ["¿Qué es la operación?", "Un arrendamiento con opción", "Una compra financiada con un préstamo"],
            ["¿Qué son las cuotas?", "Renta por el uso", "Amortización de deuda más gasto financiero"],
            ["¿Quién amortiza el bien?", "El arrendador", "El arrendatario, según su vida útil"],
            { celdas: ["¿Dónde entra en el PIB?", "—", "Formación bruta de capital fijo del arrendatario"], clase: "total" },
          ],
          nota: "Las dos columnas son coherentes cada una consigo misma y responden a preguntas distintas. **El derecho quiere saber quién puede reivindicar la cosa** si algo sale mal, y la respuesta es el arrendador: por eso en un concurso reclama la máquina como suya. **La contabilidad y la estadística quieren saber quién está usando capital productivo y quién lo financia**, y la respuesta es que lo usa el arrendatario y lo financia el arrendador. Confundir ambas lecturas produce dos errores simétricos: creer que el arrendatario puede vender la máquina, o creer que su balance no debe reflejarla.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La distinción con el arrendamiento operativo se apoya en el mismo criterio y no en el nombre del contrato.** Si el plazo es corto en relación con la vida útil del bien, no hay opción de compra ventajosa, el arrendador soporta el mantenimiento y la obsolescencia y el arrendatario puede devolverlo sin penalización sustancial, entonces **no se han transferido los riesgos y beneficios**: hay un alquiler ordinario, la cuota es gasto corriente y el bien sigue siendo capital del arrendador. La misma máquina, con condiciones distintas, cambia de balance.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el aval del socio vacía la responsabilidad limitada",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 14.03 concluía que la responsabilidad limitada protege bien frente al acreedor comercial y mal frente al banco. El instrumento que produce esa asimetría es un contrato de garantía, y merece verse en detalle porque revela cómo el derecho dispositivo se reasigna en función del poder de negociación.",
            "**El punto de partida es que la responsabilidad limitada no es un derecho irrenunciable del socio**, sino una regla sobre quién responde de las deudas **de la sociedad**. Nada impide que el socio contraiga una deuda **propia y distinta** consistente en garantizar aquella. Eso es exactamente un aval: un segundo contrato, entre el banco y la persona física, que la sociedad no cubre porque no es parte de él.",
            "**Y el resultado es que la protección se reparte según quién pudo exigir la garantía.** El banco tiene poder de negociación, información y una alternativa —no prestar—, así que exige el aval y neutraliza la limitación. El proveedor que sirve mercancía a treinta días no está en condiciones de pedir avales personales en cada pedido, y se queda con la protección legal, es decir, con nada si la sociedad está vacía. La consecuencia es que **el riesgo de insolvencia se concentra precisamente en los acreedores peor situados para soportarlo**.",
            "**Las garantías reales producen un efecto análogo dentro del concurso, y con más contundencia.** Un acreedor con hipoteca sobre un inmueble tiene **privilegio especial** sobre el valor de ese bien; los demás se reparten lo que quede. Como el ejemplo de la ficha 14.09 muestra con números, cuando las garantías reales cubren buena parte del activo los acreedores ordinarios recuperan cantidades simbólicas. La garantía no crea valor: **redistribuye la prelación**, y quien puede exigirla se coloca delante.",
            "**Hay una lectura económica de todo esto que conviene retener.** Las garantías existen porque reducen el problema de selección adversa: permiten prestar a quien no se conoce, y por eso amplían el crédito y bajan su precio. Sin ellas, mucha empresa pequeña simplemente no obtendría financiación. Pero al mismo tiempo **desplazan riesgo hacia los acreedores no garantizados**, que responden como cabe esperar: acortando plazos, subiendo precios o exigiendo pago anticipado. El coste no desaparece, cambia de sitio.",
            "**Y una consecuencia práctica para quien vaya a emprender.** La decisión relevante no es «sociedad limitada o autónomo», como sugería la ficha 14.02, sino **cuántas garantías personales se van a firmar**. Una sociedad limitada cuyo socio ha avalado la póliza de crédito, el leasing de los vehículos y el arrendamiento del local ha reconstruido, contrato a contrato, la responsabilidad ilimitada de la que quiso escapar. Contar los avales firmados dice mucho más sobre la exposición real de una persona que la forma jurídica que figura en el Registro.",
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
            { t: "Calificar un contrato de colaboración por su título", d: "Lo decisivo es quién asume el riesgo de la operación. Si el intermediario compra y revende por su cuenta es distribuidor; si solo promueve ventas ajenas cobrando comisión es agente, y tiene derecho a indemnización por clientela aunque el contrato se llame de distribución. La sustancia económica manda sobre la etiqueta." },
            { t: "Tratar las garantías personales y las reales como equivalentes", d: "La personal añade un patrimonio que compite con los demás acreedores de ese garante; la real otorga preferencia de cobro sobre un bien determinado. En un concurso esa diferencia lo decide casi todo: el acreedor con privilegio especial cobra del bien y los ordinarios se reparten lo que quede." },
            { t: "Creer que en un leasing la máquina no debe figurar en el balance del usuario", d: "Si se transfieren sustancialmente los riesgos y beneficios de la propiedad, el arrendatario activa el bien por su valor razonable y reconoce una deuda por el mismo importe. La contabilidad sigue la propiedad económica, no la jurídica, y el SEC hace exactamente lo mismo." },
            { t: "Suponer entonces que el arrendatario puede disponer del bien", d: "Es el error simétrico. Jurídicamente el propietario sigue siendo el arrendador hasta que se ejercita la opción: puede recuperar el bien si no se paga y en un concurso lo reclama como suyo. Que figure en el activo del usuario no le da facultades de dueño." },
            { t: "Comparar un leasing con un préstamo sin calcular el tipo implícito", d: "Los 15.000 € de diferencia entre lo pagado y el valor razonable no son mayor coste del bien sino intereses, y equivalen a un 4,706 % anual. Sin ese cálculo la operación es incomparable con cualquier otra fuente de financiación, y esa opacidad es lo que la norma contable obliga a deshacer." },
            { t: "Medir la exposición personal por la forma jurídica", d: "Una sociedad limitada cuyo socio ha avalado la póliza, el leasing y el arrendamiento ha reconstruido contrato a contrato la responsabilidad ilimitada. Contar los avales firmados informa mucho mejor del riesgo real de una persona que lo que figure en el Registro Mercantil." },
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
            "Esta ficha contiene el puente más limpio del bloque, porque el SEC utiliza literalmente el mismo criterio que la norma contable y ambos se apartan del derecho por la misma razón.",
          ],
          lista: [
            "El SEC registra el **arrendamiento financiero como una transferencia de propiedad económica**: el bien es **formación bruta de capital fijo del arrendatario** —la P.51g de la ficha 13.08— y se imputa un préstamo del arrendador que las cuotas van amortizando. El arrendamiento operativo, en cambio, es simple compra de un servicio.",
            "Ese criterio no es una excepción sino la regla general del sistema: la ficha **12.10** ya establecía que las importaciones y exportaciones de bienes se registran por **cambio de propiedad económica** y no por el movimiento físico ni por el título jurídico.",
            "La ficha **13.09** aporta el caso extremo del mismo principio: en la venta de licencias de espectro, lo que decidió la clasificación fue si se transfería el control efectivo del recurso, no cómo se titulase la operación.",
            "Las **garantías reales** explican una asimetría visible en las cuentas financieras: el crédito garantizado y el no garantizado tienen tasas de recuperación muy distintas, y eso condiciona el precio de cada instrumento en el sistema financiero de la ficha 8.01.",
            "Y la **indemnización por clientela** del agente es un buen ejercicio de clasificación: no retribuye un servicio prestado en el ejercicio sino la pérdida de un activo intangible construido a lo largo de la relación, lo que la aproxima al fondo de comercio de la ficha 13.09.",
          ],
          cierre:
            "La idea que conviene llevarse es que **derecho y contabilidad no se contradicen: responden a preguntas distintas**. Quien pregunta «¿de quién es?» necesita saber quién puede reivindicar la cosa; quien pregunta «¿quién produce con ella?» necesita saber quién soporta sus riesgos. El leasing es el sitio donde ambas respuestas se separan del todo, y por eso es el mejor ejercicio del bloque.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué separa un contrato de agencia de uno de distribución?", a: "Quién asume el riesgo de la operación, no el título del contrato. El agente promueve de forma estable operaciones ajenas cobrando comisión, y por eso la ley le concede preaviso e indemnización por clientela. El distribuidor compra para revender en nombre y por cuenta propios, asume el riesgo y carece de régimen legal específico." },
            { q: "¿Por qué en un concurso importa tanto si la garantía es personal o real?", a: "Porque la personal solo añade un patrimonio, que compite con los demás acreedores de ese garante, mientras que la real otorga preferencia de cobro sobre un bien determinado. El acreedor con privilegio especial cobra del bien afecto y los ordinarios se reparten lo que quede, que suele ser muy poco." },
            { q: "En un leasing, ¿quién es el propietario de la máquina?", a: "Depende de la pregunta. Jurídicamente el arrendador, hasta que se ejercita la opción: puede recuperarla si no se paga y la reclama en un concurso. Económicamente el arrendatario, que la elige, la mantiene, la asegura, soporta su obsolescencia y ejercitará la opción con práctica certeza. La contabilidad y el SEC siguen la segunda respuesta." },
            { q: "Máquina de 100.000 €, cinco cuotas de 22.000 € y opción de 5.000 €. ¿Qué son los 15.000 € de diferencia?", a: "Intereses, no mayor coste del bien. Equivalen a un tipo implícito del 4,706 % anual, que es el que iguala el valor actual de las cinco cuotas más la opción a los 100.000 € de hoy. Sin ese cálculo el leasing no es comparable con ninguna otra forma de financiación." },
            { q: "¿Cómo registra el SEC un arrendamiento financiero?", a: "Como una transferencia de propiedad económica: el bien es formación bruta de capital fijo del arrendatario y se imputa un préstamo del arrendador por el mismo importe, que las cuotas amortizan. Es el mismo criterio que aplica a las importaciones, registradas por cambio de propiedad económica y no por movimiento físico." },
            { q: "¿Por qué el aval del socio vacía la responsabilidad limitada?", a: "Porque es un contrato distinto entre el banco y la persona física, que la sociedad no cubre. La responsabilidad limitada regula quién responde de las deudas de la sociedad, no impide que el socio contraiga una deuda propia garantizándolas. Quien tiene poder de negociación exige el aval; quien no lo tiene se queda con la protección legal." },
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
              q: "Una empresa rescinde el contrato de su agente comercial, que durante años le ha creado una cartera de clientes. ¿Le debe algo por ello?",
              opciones: [
                "Sí, pero únicamente si la rescisión carece de causa",
                "Sí: la indemnización por clientela, propia del contrato de agencia",
                "Solo si el contrato la había pactado expresamente",
                "No: la rescisión con preaviso extingue la relación sin más consecuencias",
              ],
              correcta: 1,
              porque: [
                "Puede haber causa justificada y seguir debiéndose, porque lo que compensa es el valor aportado, no la forma de terminar.",
                "Es el rasgo característico de la agencia: el agente ha construido una clientela que sigue produciendo ingresos a quien le encargó promoverla.",
                "No hace falta pacto: es un efecto legal del tipo contractual, que además es de difícil renuncia anticipada.",
                "El preaviso evita el incumplimiento y no compensa el valor que queda en manos del principal.",
              ],
            },
            {
              q: "¿Qué diferencia hay entre una fianza y un aval a primer requerimiento?",
              opciones: [
                "La fianza es una garantía real y el aval una personal",
                "La fianza es siempre bancaria y el aval puede darlo un particular",
                "El aval a primer requerimiento solo cubre el principal, y la fianza también los intereses",
                "El aval a primer requerimiento obliga a pagar sin poder oponer las excepciones del contrato garantizado",
              ],
              correcta: 3,
              porque: [
                "Las dos son garantías personales: añaden un patrimonio, no un bien afecto.",
                "Ambas pueden prestarlas entidades o particulares.",
                "La extensión de la cobertura la fija el contrato en ambos casos.",
                "El fiador puede discutir si la deuda existe o si el acreedor cumplió; el avalista a primer requerimiento paga y discute después. La diferencia práctica es enorme para quien firma.",
              ],
            },
            {
              q: "Una empresa activa en su balance la máquina que tiene en leasing. ¿Puede venderla?",
              opciones: [
                "Sí, si ya ha pagado más de la mitad de las cuotas",
                "Sí, comunicándolo previamente al arrendador",
                "No: jurídicamente el propietario sigue siendo el arrendador hasta que se ejercita la opción de compra",
                "Sí: si figura en su balance, es suya a todos los efectos",
              ],
              correcta: 2,
              porque: [
                "El porcentaje pagado no transfiere la propiedad jurídica antes de ejercitar la opción.",
                "La comunicación no suple la falta de título: no se puede transmitir lo que no se tiene.",
                "Es el error simétrico al de no activar el bien: el arrendador puede recuperarlo si no se paga, y en un concurso separarlo de la masa.",
                "El balance refleja la propiedad económica —quién asume riesgos y ventajas—, y esa no es la que faculta para vender.",
              ],
            },
            {
              q: "¿En qué dirección se especializa el derecho mercantil respecto del civil en materia de contratos?",
              opciones: [
                "Hacia una mayor exigencia de forma escrita y solemne",
                "Hacia más protección del contratante débil, como en el derecho de consumo",
                "Hacia plazos de prescripción más largos, para dar seguridad",
                "Hacia más rapidez y certeza en el tráfico, y menos tutela del deudor",
              ],
              correcta: 3,
              porque: [
                "El derecho mercantil tiende a la libertad de forma precisamente para no entorpecer el tráfico.",
                "La protección del contratante débil es la lógica del derecho de consumo, que actúa en sentido contrario y sobre otro supuesto.",
                "Los plazos mercantiles suelen ser más breves, no más largos, por la misma razón de certeza.",
                "Presume profesionalidad en ambas partes: quien contrata en el tráfico de empresa sabe lo que hace, y por eso el sistema prima la agilidad.",
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
            { ref: "Código de Comercio, libro II — contratos mercantiles", nota: "compraventa, comisión, depósito y transporte; las especialidades frente al régimen civil." },
            { ref: "Ley 12/1992 del Contrato de Agencia", nota: "el régimen protector del agente y la indemnización por clientela, con la delimitación frente a la distribución." },
            { ref: "PGC, norma de registro y valoración 8ª — arrendamientos", nota: "los indicios que llevan a calificar un arrendamiento como financiero; conviene leerlos junto al ejemplo de esta ficha." },
            { ref: "SEC 2010, capítulo 15 — contratos, arrendamientos y licencias", nota: "el tratamiento estadístico del leasing y el concepto de propiedad económica." },
            { ref: "Jurisprudencia sobre calificación de contratos de distribución como agencia", nota: "muestra bien cómo los tribunales atienden al riesgo asumido por encima del nombre del contrato." },
          ],
        },
      ],
    },
  ],
};
