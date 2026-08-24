/* Ficha 14.05 — Deberes y responsabilidad de los administradores. */

export default {
  codigo: "14.05",
  titulo: "Deberes y responsabilidad de los administradores",
  nivel: 3,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "Equivocarse administrando no genera responsabilidad: el ordenamiento protege expresamente las decisiones empresariales desafortunadas. Lo que sí la genera, y con una dureza que sorprende, es seguir contratando cuando las pérdidas ya se han comido la mitad del capital y no haber convocado la junta.",
  requiere: "14.04 Junta y administración · 14.03 Capital social y responsabilidad limitada",
  abre: "14.09 Insolvencia · 5.01 Patrimonio y ecuación fundamental",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Los administradores tienen dos deberes generales y no son intercambiables.** El **deber de diligencia** exige desempeñar el cargo con la dedicación adecuada y con la diligencia de un ordenado empresario, lo que incluye informarse antes de decidir y exigir la información necesaria. El **deber de lealtad** exige actuar en interés de la sociedad, de buena fe y **anteponiéndolo al propio**. El primero admite modulación por los estatutos; el segundo, en su núcleo, **es imperativo y no puede dispensarse**, y su infracción arrastra consecuencias más severas.",
            "**La pieza que más sorprende a quien viene de la economía es la protección de la discrecionalidad empresarial.** La ley establece que, en las decisiones estratégicas y de negocio sujetas a discrecionalidad, el estándar de diligencia se entiende cumplido cuando el administrador actuó **de buena fe, sin interés personal, con información suficiente y conforme a un procedimiento de decisión adecuado**. Es decir: **si el proceso fue correcto, el resultado no importa**. Una inversión que sale mal no genera responsabilidad; una inversión decidida sin analizarla, sí. La regla es sensata: si cada pérdida fuera imputable, nadie administraría, o solo se tomarían decisiones triviales.",
            "**El deber de lealtad se concreta en obligaciones muy operativas.** No usar el nombre ni los activos sociales para fines privados; no aprovecharse de oportunidades de negocio de la sociedad; no obtener ventajas de terceros asociadas al cargo; no competir con la sociedad; y **abstenerse en las decisiones en que se tenga conflicto de interés**, directo o por persona vinculada. Cuando se infringe, la sociedad puede reclamar no solo el daño sufrido sino también **la devolución del enriquecimiento obtenido**, que a menudo es mayor.",
            "**Las acciones para exigir responsabilidad por daño son dos y se confunden constantemente.** La **acción social** repara el daño causado **al patrimonio de la sociedad**, la ejercita la sociedad previo acuerdo de la junta —y, subsidiariamente, la minoría o los acreedores— y lo que se recupera entra en la caja social. La **acción individual** repara el daño causado **directamente al patrimonio de un socio o de un tercero**, y lo que se recupera lo cobra el perjudicado. La distinción es práctica: un acreedor impagado no sufre normalmente un daño directo sino el reflejo de que la sociedad esté vacía, y por eso su vía natural no es la individual.",
            "**Y aquí aparece la institución central de la ficha, la que de verdad se aplica todos los días en España: la responsabilidad por deudas del artículo 367.** Su mecanismo no exige probar daño, ni culpa, ni relación de causalidad. Basta con que concurra una **causa legal de disolución** —señaladamente, que las pérdidas dejen el patrimonio neto por debajo de la mitad del capital social—, que el administrador **no convoque la junta en el plazo de dos meses** para que acuerde la disolución o remueva la causa, y entonces responde **solidariamente de las obligaciones sociales posteriores** al acaecimiento de la causa.",
            "**Conviene subrayar lo severo del diseño.** No responde de todas las deudas, sino de las **posteriores**, lo que revela con precisión qué se está castigando: **no el fracaso, sino haber seguido contratando con quien ya no podía pagar**. El acreedor anterior asumió un riesgo que existía; el posterior contrató con una sociedad que debería haberse detenido. Y responde **solidariamente**, de modo que el acreedor puede dirigirse contra el administrador sin necesidad de ir antes contra la sociedad. En la práctica es la vía más eficaz que tiene un acreedor español, muy por delante de la acción individual.",
            "**Cierra el cuadro una advertencia sobre quién es administrador a estos efectos.** Lo es el nombrado e inscrito, pero también el **administrador de hecho**: quien ejerce efectivamente las funciones sin título, o con título caducado, o quien imparte las instrucciones que los administrados se limitan a ejecutar. La figura existe precisamente para impedir la maniobra evidente —poner de administrador a un testaferro y gobernar desde detrás— y los tribunales la aplican atendiendo a la realidad de quien decide, no al Registro.",
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
            { nom: "Los dos deberes generales", sub: "No son intercambiables.", cols: ["diligencia modulable · lealtad imperativa"] },
            { nom: "Protección de la discrecionalidad", sub: "Si el proceso fue correcto, el resultado no importa.", cols: ["buena fe · sin interés personal · informado · procedimiento"] },
            { nom: "Concreciones de la lealtad", sub: "Todas muy operativas.", cols: ["no competir · no aprovechar oportunidades · abstenerse"] },
            { nom: "Consecuencia de infringirla", sub: "Suele ser mayor que el daño.", cols: ["daño + devolución del enriquecimiento"] },
            { nom: "Acción social", sub: "Lo recuperado va a la caja social.", cols: ["repara el daño a la sociedad"] },
            { nom: "Acción individual", sub: "Lo cobra el perjudicado.", cols: ["repara el daño directo a socio o tercero"] },
            { nom: "Causa de disolución clave", sub: "La que activa el artículo 367.", cols: ["patrimonio neto < mitad del capital social"] },
            { nom: "El plazo", sub: "Y no admite mucha interpretación.", cols: ["dos meses para convocar junta"] },
            { nom: "Alcance de la responsabilidad por deudas", sub: "Lo que revela qué se castiga.", cols: ["solidaria, solo por las obligaciones POSTERIORES"] },
            { nom: "Administrador de hecho", sub: "Cierra la maniobra del testaferro.", cols: ["quien decide, aunque no figure"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la responsabilidad por deudas, paso a paso",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad limitada tiene **50.000 € de capital social**. Al cerrar el ejercicio, las pérdidas acumuladas dejan su patrimonio neto en **22.000 €**. Su administrador no convoca junta y sigue operando catorce meses más, hasta que la sociedad deja de pagar.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Dato", "Consecuencia"],
          filas: [
            ["Capital social", "50.000 €", "La mitad son 25.000 €"],
            ["Patrimonio neto tras las pérdidas", "22.000 €", "Por debajo de la mitad: hay causa de disolución"],
            ["Plazo para convocar junta", "2 meses", "Para disolver o remover la causa"],
            ["Lo que hace el administrador", "Nada", "Se activa la responsabilidad por deudas"],
            ["Deudas anteriores a la causa", "180.000 €", "NO responde: el acreedor asumió un riesgo existente"],
            { celdas: ["Deudas nacidas después", "95.000 €", "Responde solidariamente con su patrimonio personal"], clase: "total" },
          ],
          nota: "El administrador responde personalmente de **95.000 €** y no de los 180.000 anteriores, y esa separación es la clave del sistema. **No se le está castigando por haber perdido dinero** —eso es un riesgo empresarial legítimo, protegido además por la regla de discrecionalidad— **sino por haber seguido contratando después de que la ley le obligara a detenerse**. Obsérvese además que no hace falta probar culpa, ni daño, ni causalidad: basta la causa de disolución, el silencio y la fecha de nacimiento de cada deuda.",
        },
        {
          tipo: "grafico",
          alto: 370,
          ejes: { x: "Meses desde el cierre del ejercicio", y: "Deuda acumulada (miles de €)" },
          dominio: { x: [-6, 15], y: [0, 300] },
          marcasX: [-6, -3, 0, 2, 6, 10, 14],
          marcasY: [0, 60, 120, 180, 240],
          series: [
            { nombre: "Deuda de la sociedad", color: "acento", etiquetaEn: [4, 250],
              puntos: [[-6, 120], [-3, 155], [0, 180], [2, 196], [6, 228], [10, 255], [14, 275]] },
          ],
          notas: [
            { x: 0, y: 292, texto: "Aparece la causa de disolución", ancla: "middle" },
            { x: 2.4, y: 262, texto: "Vence el plazo de dos meses", ancla: "start" },
            { x: -5.6, y: 62, texto: "180.000 € anteriores: NO responde", ancla: "start" },
            { x: 3.2, y: 108, texto: "95.000 € posteriores: responde con su patrimonio", ancla: "start" },
          ],
          nota: "La línea es la misma deuda creciendo sin sobresaltos, y sin embargo **el momento en que cada euro nació decide quién lo paga**. Todo lo contraído antes del punto cero queda en la sociedad; todo lo posterior alcanza al administrador. Por eso la fecha de nacimiento de cada obligación se convierte en el objeto real del litigio, y por eso conviene documentar con precisión cuándo se detectó la causa: en la práctica, la discusión no versa sobre si hubo pérdidas, sino sobre **cuándo** el administrador debió saberlo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y la parte constructiva, que es la que interesa a quien administra: la causa se puede remover, y hay varias formas de hacerlo.** Todas consisten en devolver el patrimonio neto por encima de la mitad del capital, y cada una tiene un coste distinto:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Vía", "Qué hace", "Efecto sobre el patrimonio neto"],
          filas: [
            ["Aumento de capital con aportaciones", "Los socios ponen dinero nuevo", "Sube capital y sube neto: hay que subir más de lo que se necesita"],
            ["Reducción de capital", "Se rebaja la cifra estatutaria", "El neto no cambia, pero baja el listón a superar"],
            ["Aportaciones de socios a fondo perdido", "Entrega sin recibir participaciones", "Sube el neto sin tocar el capital: la vía más limpia"],
            ["Préstamo participativo de los socios", "Deuda que la ley asimila a patrimonio a estos efectos", "Sube el neto computable sin aportar capital"],
            { celdas: ["Conversión de deuda en capital", "El acreedor pasa a ser socio", "Baja el pasivo y sube el neto a la vez"], clase: "total" },
          ],
          nota: "La tercera y la cuarta filas son las que más se usan en la práctica y las que menos se conocen. Una **aportación de socios a fondo perdido** aumenta el patrimonio neto sin aumentar el capital, de modo que resuelve el problema sin subir a la vez el listón que hay que superar; y el **préstamo participativo** consigue el mismo efecto sin que el socio pierda su condición de acreedor. Conviene retener el contraste con la primera fila: **ampliar capital para salir de la causa de disolución es la vía más intuitiva y también la más cara**, porque cada euro de capital nuevo eleva en cincuenta céntimos el umbral que hay que alcanzar.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué la regla de discrecionalidad protege al que decide",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos administradores toman decisiones que acaban en pérdidas millonarias. Uno responde y el otro no, y la diferencia no está en el resultado sino en cómo se decidió. El contraste explica mejor que ninguna definición qué protege exactamente la regla de discrecionalidad empresarial.",
            "**El primer administrador estudia entrar en un mercado exterior.** Encarga un informe de mercado, lo somete al consejo, discute los riesgos en una sesión documentada en acta, contrata asesoramiento local y aprueba una inversión escalonada con hitos de salida. Dos años después, un cambio regulatorio en aquel país destruye el negocio y la sociedad pierde cuatro millones. **No responde**: actuó de buena fe, sin interés personal, con información suficiente y siguiendo un procedimiento adecuado. El resultado fue malo y la decisión no lo fue.",
            "**El segundo compra una empresa a un precio que fija él mismo**, sin valoración externa, sin someterlo al consejo, con un informe interno redactado después de la operación, y resulta que el vendedor es una sociedad participada por su cónyuge. La compra genera una pérdida de un millón. **Responde**, y por dos vías a la vez: por diligencia, porque no hubo procedimiento ni información; y por lealtad, porque había un conflicto de interés no declarado y no se abstuvo. Además de indemnizar el daño, deberá **devolver el enriquecimiento obtenido**.",
            "**La comparación permite formular la regla en términos utilizables.** Lo que se enjuicia es el **proceso de decisión**, no el acierto. Y como el proceso se enjuicia después y con el resultado a la vista, la única defensa efectiva es **haberlo documentado antes**: informes previos, actas que recojan la deliberación, asesoramiento externo cuando la materia lo requiere, y constancia de las abstenciones. Un administrador diligente genera papel no por burocracia sino porque el papel es la prueba de su diligencia.",
            "**Hay un límite importante que conviene no perder de vista: la protección solo cubre las decisiones estratégicas y de negocio sujetas a discrecionalidad.** No ampara el incumplimiento de deberes concretos impuestos por la ley. No convocar la junta ante una causa de disolución, no formular las cuentas, no depositarlas o no solicitar el concurso a tiempo **no son decisiones empresariales discrecionales**, sino obligaciones. Ahí no hay margen de apreciación que proteger, y por eso la responsabilidad del artículo 367 opera de forma casi automática.",
            "**La lección de fondo enlaza con la ficha 14.04.** El ordenamiento quiere administradores que asuman riesgos, porque sin riesgo no hay empresa, y por eso los inmuniza frente al fracaso honesto. A cambio les exige lo único que sí está bajo su control: informarse, seguir un procedimiento, apartarse cuando tienen interés y **parar cuando la ley dice que hay que parar**. Es un reparto de riesgo razonable, y explica por qué las dos cosas que más responsabilidad generan en España no son inversiones fallidas sino omisiones formales.",
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
            { t: "Creer que una decisión ruinosa genera responsabilidad por sí sola", d: "No la genera. En las decisiones estratégicas sujetas a discrecionalidad, el estándar se cumple si se actuó de buena fe, sin interés personal, con información suficiente y con un procedimiento adecuado. Se enjuicia el proceso, no el acierto: si cada pérdida fuera imputable, nadie administraría." },
            { t: "Confundir la acción social con la individual", d: "La social repara el daño al patrimonio de la sociedad y lo recuperado entra en la caja social; la individual repara el daño directo a un socio o tercero y lo cobra el perjudicado. Un acreedor impagado no suele sufrir daño directo sino el reflejo de que la sociedad esté vacía, y su vía natural es otra." },
            { t: "Ignorar el plazo de dos meses", d: "Cuando las pérdidas dejan el patrimonio neto por debajo de la mitad del capital hay causa de disolución, y el administrador tiene dos meses para convocar junta. Si no lo hace responde solidariamente de las deudas posteriores, sin necesidad de probar daño, culpa ni causalidad." },
            { t: "Pensar que se responde de todas las deudas", d: "Solo de las nacidas después de la causa de disolución. Esa delimitación revela qué se castiga: no el fracaso, sino haber seguido contratando con quien ya no podía pagar. El acreedor anterior asumió un riesgo que existía; el posterior, no." },
            { t: "Ampliar capital como primera vía para remover la causa", d: "Es la más intuitiva y la más cara, porque cada euro de capital nuevo eleva en cincuenta céntimos el umbral que hay que superar. Una aportación de socios a fondo perdido sube el neto sin tocar el capital, y un préstamo participativo lo consigue sin que el socio deje de ser acreedor." },
            { t: "Suponer que la protección de la discrecionalidad cubre las omisiones formales", d: "No las cubre. Solo ampara decisiones estratégicas y de negocio sujetas a apreciación. No convocar la junta, no formular o no depositar las cuentas o no pedir el concurso a tiempo son obligaciones, no decisiones: ahí no hay discrecionalidad que proteger." },
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
            "Esta ficha es la que más depende de la contabilidad de todo el bloque: su institución central se activa mirando una cifra del balance.",
          ],
          lista: [
            "La **causa de disolución por pérdidas** se mide sobre el **patrimonio neto** de la ficha 5.01. Un concepto contable dispara una consecuencia jurídica personal, y por eso la calidad de la contabilidad no es un asunto interno: determina cuándo empieza a correr un plazo de dos meses.",
            "Las **vías para remover la causa** son operaciones contables con efectos jurídicos: la aportación a fondo perdido y el préstamo participativo mueven el neto sin tocar el capital, y son un buen ejercicio sobre la ecuación fundamental y sobre el estado de cambios en el patrimonio neto de la ficha 5.10.",
            "La responsabilidad del artículo 367 es, en términos del SEC, un mecanismo que traslada un pasivo del sector **sociedades (S.11)** al sector **hogares (S.14)**: la deuda sigue existiendo, pero pasa a responder de ella una persona física. Es una de las razones por las que el endeudamiento de los hogares y el de las empresas no son compartimentos estancos.",
            "La ficha **13.10** aporta el contexto: dos unidades con el mismo patrimonio neto pueden estar en situaciones opuestas según su apalancamiento. Lo que el derecho vigila con el umbral de la mitad del capital es exactamente esa erosión del neto que el balance registra.",
            "Y la ficha **14.09** recoge lo que ocurre cuando remover la causa ya no es posible: la responsabilidad por deudas y el deber de solicitar el concurso son dos obligaciones distintas con plazos distintos, y confundirlas es uno de los errores más caros que se cometen en la práctica.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el derecho español no castiga perder dinero: castiga no pararse a tiempo**. La regla de discrecionalidad inmuniza el fracaso honesto y el artículo 367 sanciona la inercia, y entre ambas dibujan con bastante precisión qué se espera de quien administra: que arriesgue informado y que reconozca cuándo debe detenerse.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Genera responsabilidad una inversión que sale mal?", a: "No, si estaba sujeta a discrecionalidad y se decidió de buena fe, sin interés personal, con información suficiente y con un procedimiento adecuado. Se enjuicia el proceso y no el acierto. Lo que sí genera responsabilidad es decidir sin analizar, o decidir teniendo un interés personal no declarado." },
            { q: "¿Qué diferencia hay entre el deber de diligencia y el de lealtad?", a: "La diligencia exige dedicación e información suficiente y admite modulación estatutaria. La lealtad exige anteponer el interés social al propio y en su núcleo es imperativa e indispensable. Además, su infracción permite reclamar no solo el daño sino la devolución del enriquecimiento obtenido." },
            { q: "Capital 50.000 €, patrimonio neto 22.000 €. ¿Qué debe hacer el administrador y en cuánto tiempo?", a: "Convocar la junta general en el plazo de dos meses para que acuerde la disolución o remueva la causa, porque el neto ha caído por debajo de la mitad del capital. Si no lo hace, responde solidariamente de las obligaciones sociales posteriores a la aparición de la causa." },
            { q: "¿De qué deudas responde exactamente y qué revela esa delimitación?", a: "Solo de las nacidas después de la causa de disolución: 95.000 € en el ejemplo, no los 180.000 anteriores. Revela que no se castiga el fracaso sino haber seguido contratando con quien ya no podía pagar: el acreedor anterior asumió un riesgo que existía, el posterior contrató con una sociedad que debía haberse detenido." },
            { q: "¿Por qué ampliar capital es la peor forma de salir de la causa de disolución?", a: "Porque cada euro de capital nuevo eleva en cincuenta céntimos el umbral que hay que superar, así que hay que aportar más de lo que falta. Una aportación de socios a fondo perdido sube el patrimonio neto sin tocar el capital, y un préstamo participativo lo consigue sin que el socio pierda su condición de acreedor." },
            { q: "¿Quién es administrador a efectos de responsabilidad?", a: "El nombrado e inscrito y también el administrador de hecho: quien ejerce las funciones sin título, con título caducado, o quien imparte las instrucciones que los administradores formales se limitan a ejecutar. La figura existe para impedir gobernar detrás de un testaferro, y los tribunales atienden a quién decide, no al Registro." },
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
            { ref: "Ley de Sociedades de Capital, arts. 225 a 241", nota: "deberes, protección de la discrecionalidad, régimen de la lealtad y las dos acciones de responsabilidad." },
            { ref: "Ley de Sociedades de Capital, arts. 363 a 367", nota: "causas de disolución y responsabilidad por deudas; el artículo 367 merece leerse palabra por palabra." },
            { ref: "Jurisprudencia del Tribunal Supremo sobre el art. 367", nota: "la discusión real casi siempre versa sobre la fecha de nacimiento de cada obligación; las sentencias lo muestran bien." },
            { ref: "Paz-Ares, La responsabilidad de los administradores como instrumento de gobierno corporativo", nota: "por qué el sistema está calibrado así y qué se pierde si se calibra de otro modo." },
            { ref: "Registro de Economistas Forenses (REFOR), guías sobre causa de disolución", nota: "el enfoque práctico: cómo se documenta la detección de la causa y cómo se remueve." },
          ],
        },
      ],
    },
  ],
};
