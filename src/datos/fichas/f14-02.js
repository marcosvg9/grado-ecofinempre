/* Ficha 14.02 — Formas jurídicas: autónomo, sociedad limitada, anónima y cooperativa. */

export default {
  codigo: "14.02",
  titulo: "Formas jurídicas: autónomo, sociedad limitada, anónima y cooperativa",
  nivel: 2,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "La pregunta «¿me hago autónomo o monto una sociedad?» casi siempre se plantea como una pregunta fiscal, y casi nunca lo es. Con beneficios medios las dos vías pagan prácticamente lo mismo; lo que de verdad separa a una de otra es de qué responde el titular y qué puede hacer con el dinero que no retira.",
  requiere: "14.01 El empresario y el Registro Mercantil · 5.09 Impuesto sobre beneficios",
  abre: "14.03 Capital social y responsabilidad limitada · 14.04 Junta y administración · 12.01 Sectorización",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**La elección real no es entre cuatro formas sino entre dos lógicas.** O el titular **es** la empresa —empresario individual, y entonces no hay separación entre su patrimonio y el del negocio— o el titular **participa en** una persona jurídica distinta de él, que tiene su propio patrimonio, su propia contabilidad y su propia responsabilidad. Todo lo demás son variantes dentro de la segunda lógica.",
            "**El empresario individual, el autónomo, responde de las deudas del negocio con todo su patrimonio presente y futuro.** Es la regla general de responsabilidad patrimonial universal del derecho civil, sin matices: si el negocio debe 200.000 € y no puede pagarlos, los acreedores pueden ir contra la vivienda, los ahorros y el salario del titular. A cambio, la fórmula es barata, inmediata y sin obligaciones registrales ni de depósito. Existe una figura intermedia, el **emprendedor de responsabilidad limitada**, que permite proteger la vivienda habitual bajo ciertos límites y con inscripción registral, pero su uso en la práctica ha sido escaso.",
            "**La sociedad de responsabilidad limitada es, con enorme diferencia, la forma dominante en España**, y su diseño está pensado para empresas con pocos socios que se conocen. Sus rasgos definitorios son tres. El capital está dividido en **participaciones**, que **no son valores negociables** y cuya transmisión a extraños está restringida por ley salvo que los estatutos digan otra cosa. El capital debe estar **íntegramente desembolsado** desde la constitución. Y el socio **no responde de las deudas sociales**: arriesga lo aportado y nada más.",
            "**Su capital mínimo era de 3.000 € y la Ley 18/2022 lo rebajó a un euro**, con dos cautelas que conviene conocer porque son la prueba de que el capital cumple una función. Mientras el capital sea inferior a 3.000 €, la sociedad debe destinar **al menos el 20 % del beneficio a reserva legal** hasta que capital y reservas sumen esa cifra; y si se liquida sin patrimonio bastante, **los socios responden solidariamente de la diferencia hasta 3.000 €**. Es decir: el legislador quitó la barrera de entrada pero mantuvo el colchón, trasladándolo del momento inicial a los años siguientes.",
            "**La sociedad anónima está pensada para lo contrario: muchos socios que no se conocen y que entran y salen.** Su capital se divide en **acciones**, que sí son valores negociables y libremente transmisibles por regla general. Exige un capital mínimo de **60.000 €**, del que basta desembolsar el 25 % en la constitución, y somete las aportaciones no dinerarias a **informe de experto independiente**, cautela que la limitada no impone. Es la forma obligada para cotizar en bolsa y la habitual en banca, seguros y grandes grupos; para una empresa pequeña es casi siempre una elección equivocada, porque impone costes de gobierno que no aportan nada cuando hay tres socios.",
            "**La cooperativa responde a una lógica distinta de las tres anteriores y por eso se confunde a menudo.** No es una sociedad de capital sino una sociedad de personas: el socio lo es por **participar en la actividad** —trabajando, consumiendo, comercializando— y no por haber puesto dinero. De ahí sus dos rasgos característicos: el voto es **por persona y no por capital**, y el excedente se reparte en proporción a la actividad cooperativizada, no a la aportación. Tiene capital variable, régimen fiscal propio y competencia legislativa autonómica, de modo que hay tantas leyes de cooperativas como comunidades con ley propia más la estatal.",
            "**Y ahora la advertencia que este plan puede hacer mejor que un manual de derecho: la forma jurídica no decide el sector institucional.** La ficha 12.01 estableció que el SEC clasifica por el criterio del **50 % de cobertura de costes con ventas** y por el control, no por la etiqueta jurídica. Un autónomo con negocio va a **hogares (S.14)** y su beneficio es renta mixta; una sociedad limitada normal va a **sociedades no financieras (S.11)**; pero una fundación que se financia con donaciones va a **instituciones sin fines de lucro (S.15)** y esa misma fundación, si cobra precios que cubren sus costes, va a **S.11**. Y una sociedad mercantil pública que no cubre costes con ventas va a **administraciones públicas (S.13)** por mucho que sea una sociedad anónima. Confundir ambas clasificaciones es un error frecuente y de consecuencias grandes en el análisis del sector público.",
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
            { nom: "La elección de fondo", sub: "Todo lo demás son variantes.", cols: ["ser la empresa · o participar en otra persona"] },
            { nom: "Empresario individual", sub: "Sin separación patrimonial.", cols: ["responde con todo su patrimonio"] },
            { nom: "Sociedad limitada", sub: "Pocos socios que se conocen.", cols: ["participaciones · no negociables · capital desembolsado"] },
            { nom: "Su capital mínimo", sub: "Rebajado, con colchón diferido.", cols: ["1 € · reserva del 20 % hasta 3.000"] },
            { nom: "Sociedad anónima", sub: "Muchos socios que entran y salen.", cols: ["acciones · negociables · 60.000 €, 25 % desembolsado"] },
            { nom: "Cautela propia de la anónima", sub: "La limitada no la exige.", cols: ["informe de experto en aportaciones no dinerarias"] },
            { nom: "Cooperativa", sub: "Sociedad de personas, no de capital.", cols: ["socio por actividad · un socio, un voto"] },
            { nom: "Reparto del excedente", sub: "Su rasgo económico distintivo.", cols: ["según actividad, no según aportación"] },
            { nom: "Lo que decide de verdad", sub: "No el tipo impositivo.", cols: ["responsabilidad y diferimiento"] },
            { nom: "Forma jurídica y sector SEC", sub: "Dos clasificaciones distintas.", cols: ["el SEC clasifica por ventas y control"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: autónomo o sociedad, con las cuentas hechas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Comparamos las dos vías con el mismo beneficio antes de retribuir al titular, suponiendo un socio único que además trabaja en el negocio. En la sociedad se le asigna el sueldo que minimiza la factura conjunta —deducible en el impuesto sobre sociedades y gravado en su renta— y el resto se reparte como dividendo. Las escalas son las vigentes al escribir esta ficha y **hay que comprobarlas**: lo que importa aquí es la forma de la comparación, no el euro exacto.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Beneficio antes de retribuir", "Autónomo: neto", "Carga", "Sociedad: neto", "Carga", "Gana"],
          filas: [
            ["25.000 €", "17.874 €", "28,5 %", "17.849 €", "28,6 %", "Autónomo, por 25 €"],
            ["40.000 €", "28.003 €", "30,0 %", "28.001 €", "30,0 %", "Empate: 2 € de diferencia"],
            ["60.000 €", "40.189 €", "33,0 %", "40.188 €", "33,0 %", "Empate"],
            ["90.000 €", "56.560 €", "37,2 %", "57.889 €", "35,7 %", "Sociedad, por 1.329 €"],
            { celdas: ["140.000 €", "82.839 €", "40,8 %", "86.899 €", "37,9 %", "Sociedad, por 4.060 €"], clase: "total" },
          ],
          nota: "El resultado es el que casi nadie espera: **hasta unos 68.500 € de beneficio la diferencia es despreciable**, y en el tramo de 40.000 € son **dos euros sobre veintiocho mil**. La razón es estructural: el autónomo paga una escala progresiva y la sociedad un tipo fijo seguido de un segundo gravamen sobre el dividendo, y ambos caminos se cruzan justo donde el tipo marginal del trabajo alcanza a la suma de sociedades más ahorro. Quien elija forma jurídica por motivos fiscales en ese tramo está optimizando algo que no existe.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Beneficio antes de retribuir (miles de €)", y: "Carga total" },
          dominio: { x: [20, 145], y: [0.24, 0.44] },
          marcasX: [25, 40, 60, 90, 140],
          marcasY: [0.26, 0.30, 0.34, 0.38, 0.42],
          series: [
            { nombre: "Autónomo", color: "acento", etiquetaEn: [112, 0.408],
              puntos: [[25, 0.285], [40, 0.300], [60, 0.330], [90, 0.372], [140, 0.408]] },
            { nombre: "Sociedad", color: "n3", etiquetaEn: [112, 0.362],
              puntos: [[25, 0.286], [40, 0.300], [60, 0.330], [90, 0.357], [140, 0.379]] },
          ],
          notas: [
            { x: 68.5, y: 0.262, texto: "cruce ≈ 68.500 €", ancla: "middle" },
            { x: 30, y: 0.425, texto: "Hasta el cruce, las dos curvas son la misma", ancla: "start" },
          ],
          nota: "Las dos curvas son **indistinguibles hasta unos 68.500 €** y se separan despacio a partir de ahí. Ni siquiera con 140.000 € de beneficio la ventaja de la sociedad llega a tres puntos de carga. Conviene retener la conclusión con precisión: **la forma jurídica no es una herramienta de ahorro fiscal en el rango en el que está la inmensa mayoría de los negocios españoles**. Lo que sí cambia radicalmente, y el gráfico no puede mostrar, es de qué responde el titular si el negocio va mal.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora el escenario que sí produce diferencias grandes, que es el que casi nunca se calcula.** Supóngase que el titular no necesita todo el beneficio: retira 30.000 € para vivir y deja el resto dentro para financiar crecimiento. El autónomo **no puede hacer eso**: su rendimiento tributa entero en su renta lo haya sacado o no, porque no hay ninguna persona distinta de él donde dejarlo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Beneficio", "Autónomo: neto total", "Sociedad: en el bolsillo", "Sociedad: retenido", "Sociedad: total", "Diferencia"],
          filas: [
            ["60.000 €", "40.189 €", "30.033 €", "12.412 €", "42.445 €", "+2.256 €"],
            ["90.000 €", "56.560 €", "30.033 €", "34.450 €", "64.483 €", "+7.923 €"],
            { celdas: ["140.000 €", "82.839 €", "30.033 €", "71.240 €", "101.273 €", "+18.434 €"], clase: "total" },
          ],
          nota: "Aquí la sociedad gana siempre y por mucho, y **el motivo no es el tipo sino el diferimiento**: lo que no se reparte tributa una sola vez, al 23 %, y el segundo gravamen se pospone hasta que el dinero salga —quizá años después, quizá nunca si se reinvierte—. Con 140.000 € de beneficio la diferencia es de **18.434 €**, cuatro veces mayor que la del escenario anterior. La conclusión práctica es limpia: **la sociedad no es más barata, es más paciente**. Quien vive de todo lo que gana no obtiene ventaja fiscal; quien reinvierte, sí.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué la limitada arrasó y la anónima se quedó arriba",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En España se constituyen cada año decenas de miles de sociedades limitadas y unos pocos cientos de anónimas. Esa proporción tan extrema no es casual, y entenderla enseña para qué sirve realmente cada forma.",
            "**La anónima está diseñada para un problema que la mayoría de las empresas no tiene: reunir capital de mucha gente que no se conoce.** Todos sus rasgos apuntan ahí. Las acciones son libremente transmisibles porque un inversor que no puede salir no entra. El capital mínimo es alto y la valoración de las aportaciones no dinerarias exige experto independiente porque los socios no pueden vigilarse entre sí. Y el régimen de junta y de información es más rígido porque hay accionistas que no participan en la gestión y necesitan protección.",
            "**Cada una de esas garantías es un coste, y solo compensa si el problema existe.** Para una empresa con tres socios que trabajan juntos, la libre transmisibilidad es un inconveniente —no quieren un desconocido dentro—, el experto independiente es una factura sin función, y la rigidez de la junta es papeleo. La limitada ofrece exactamente lo contrario: transmisión restringida por defecto, sin experto, con reglas de gobierno flexibles que los estatutos pueden moldear.",
            "**El resultado es un caso claro de institución que se adapta a la demanda.** La limitada española se ha ido haciendo más barata y más rápida durante treinta años —constitución telemática, estatutos tipo, plazos abreviados y finalmente capital de un euro— porque el legislador identificó que la barrera relevante no era la responsabilidad sino el coste de entrada. Y la anónima ha quedado reservada a su función original: sociedades cotizadas, entidades financieras y grandes grupos.",
            "**Hay una lectura que conviene extraer, porque reaparece en las fichas 14.05 y 14.09.** Las normas de derecho societario son en su mayoría **protección de terceros disfrazada de organización interna**. El capital mínimo, la valoración por experto, la reserva legal, el depósito de cuentas o el deber de disolver por pérdidas no están ahí para ordenar la relación entre socios: están para que quien contrate con la sociedad tenga algo enfrente. Cuando una regla societaria parezca arbitraria, la pregunta útil es siempre la misma: **¿a qué acreedor está protegiendo?**",
            "**Y una advertencia final sobre la cooperativa, que suele quedar fuera de estas comparaciones.** Su lógica —un socio, un voto, y excedente según actividad— la hace estructuralmente distinta y no simplemente una alternativa fiscal. Resuelve bien problemas que las sociedades de capital resuelven mal, como alinear a quienes aportan trabajo o producto con la marcha del negocio, y resuelve peor uno que aquellas resuelven bien: atraer capital de quien no va a participar en la actividad. No es una forma menor, es una forma para otro problema.",
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
            { t: "Elegir forma jurídica por motivos fiscales con beneficios medios", d: "Con 40.000 € de beneficio la diferencia entre autónomo y sociedad es de dos euros sobre veintiocho mil. Las curvas de carga son indistinguibles hasta unos 68.500 €. Lo que sí cambia radicalmente es de qué responde el titular, y eso no aparece en ninguna simulación fiscal." },
            { t: "Ignorar el diferimiento al comparar", d: "Es la única ventaja fiscal grande de la sociedad y casi nadie la calcula. Lo no repartido tributa una sola vez y el segundo gravamen se pospone hasta que el dinero salga. Con 140.000 € de beneficio y 30.000 € retirados la ventaja es de 18.434 €, cuatro veces la del escenario en que se retira todo." },
            { t: "Creer que un capital de un euro elimina el colchón", d: "Lo traslada en el tiempo. Mientras el capital sea inferior a 3.000 €, hay que dotar al menos el 20 % del beneficio a reserva legal hasta alcanzarlos, y en liquidación los socios responden solidariamente de la diferencia hasta esa cifra. La barrera de entrada desapareció; la garantía, no." },
            { t: "Montar una sociedad anónima siendo una empresa pequeña", d: "Sus rasgos resuelven un problema que una empresa de tres socios no tiene: reunir capital de desconocidos. La libre transmisibilidad es un inconveniente, el informe de experto una factura sin función y la rigidez de la junta puro papeleo. Cada garantía es un coste y solo compensa si el problema existe." },
            { t: "Ver la cooperativa como una sociedad con ventajas fiscales", d: "Es una sociedad de personas, no de capital: se es socio por participar en la actividad, se vota por cabeza y el excedente se reparte según actividad y no según aportación. Resuelve bien la alineación de quien aporta trabajo o producto, y mal la captación de capital pasivo. Es una forma para otro problema." },
            { t: "Deducir el sector institucional de la forma jurídica", d: "El SEC clasifica por el criterio del 50 % de cobertura de costes con ventas y por el control, no por la etiqueta. Una fundación puede ser S.15 o S.11 según cobre o no precios que cubran sus costes, y una sociedad mercantil pública que no los cubre va a administraciones públicas por mucho que sea una anónima." },
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
            "La forma jurídica y la clasificación estadística son dos mapas del mismo territorio que no se superponen, y saber en cuál se está mirando evita errores caros.",
          ],
          lista: [
            "La ficha **12.01** fija el criterio del SEC: sector por cobertura de costes con ventas y por control, nunca por etiqueta jurídica. Esta ficha aporta las etiquetas para comprobar que efectivamente no coinciden.",
            "El **autónomo va a hogares (S.14)** y su retribución es renta mixta, la magnitud que la ficha 12.03 y la 13.04 usaban para explicar por qué la participación salarial infravalora el peso del trabajo. La forma jurídica del empresario individual es la causa de que exista esa magnitud.",
            "Las **sociedades mercantiles públicas que no cubren costes con ventas** se clasifican en administraciones públicas, y por eso su deuda cuenta como deuda pública. Es una de las reclasificaciones que más han movido cifras en España, y depende de un criterio económico y no de su condición de sociedad anónima.",
            "El **capital social** de esta ficha es un pasivo del emisor y un activo del socio: son las **participaciones en el capital (AF.5)** de la clasificación de la ficha 13.10, y su valoración a precios de mercado explica que el patrimonio neto de las sociedades pueda moverse sin que nadie ahorre.",
            "Y la ficha **5.09**, sobre el impuesto de beneficios, aporta el otro lado del ejemplo numérico: los tipos y las diferencias temporarias que aquí se han usado como dato son allí el objeto de estudio.",
          ],
          cierre:
            "La idea que conviene llevarse es que **la elección de forma jurídica es una decisión sobre riesgo y sobre horizonte, no sobre impuestos**. Quien responde con todo su patrimonio y consume lo que gana no obtiene nada incorporándose; quien tiene algo que perder o algo que reinvertir, sí. Y en ningún caso esa elección determina cómo lo va a clasificar el sistema estadístico.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Con 40.000 € de beneficio, ¿cuánto se ahorra montando una sociedad?", a: "Dos euros. Las curvas de carga del autónomo y de la sociedad son prácticamente idénticas hasta unos 68.500 € de beneficio, porque una paga escala progresiva y la otra tipo fijo más gravamen del dividendo, y ambos caminos se cruzan justo donde el marginal del trabajo alcanza a esa suma." },
            { q: "¿Cuál es entonces la ventaja fiscal real de la sociedad?", a: "El diferimiento. Lo que no se reparte tributa una sola vez, al tipo de sociedades, y el segundo gravamen se pospone hasta que el dinero salga. Con 140.000 € de beneficio y 30.000 € retirados la ventaja llega a 18.434 €. El autónomo no puede diferir nada: su rendimiento tributa entero lo saque o no." },
            { q: "¿Qué queda del capital mínimo de la limitada tras rebajarlo a un euro?", a: "El colchón, trasladado en el tiempo. Mientras el capital sea inferior a 3.000 €, hay que destinar al menos el 20 % del beneficio a reserva legal hasta alcanzar esa cifra entre capital y reservas, y si se liquida sin patrimonio bastante los socios responden solidariamente de la diferencia hasta 3.000 €." },
            { q: "¿Por qué la anónima exige informe de experto para las aportaciones no dinerarias y la limitada no?", a: "Porque está diseñada para socios que no se conocen y no pueden vigilarse entre sí: si alguien aporta una máquina sobrevalorada, el capital queda vacío y los demás no tienen forma de saberlo. En una limitada con tres socios que trabajan juntos esa garantía es una factura sin función." },
            { q: "¿Qué hace distinta a una cooperativa de una sociedad de capital?", a: "Que es una sociedad de personas: se es socio por participar en la actividad y no por aportar dinero, se vota por cabeza y no por capital, y el excedente se reparte en proporción a la actividad cooperativizada. Alinea bien a quien aporta trabajo o producto, y capta mal capital de quien no participa." },
            { q: "Una sociedad anónima de titularidad pública que no cubre costes con sus ventas, ¿en qué sector del SEC está?", a: "En administraciones públicas (S.13), no en sociedades no financieras. El SEC clasifica por el criterio del 50 % de cobertura de costes con ventas y por el control, no por la forma jurídica, y por eso su deuda computa como deuda pública pese a ser una sociedad mercantil." },
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
              q: "Un autónomo contrae deudas con proveedores de su negocio. ¿Con qué responde?",
              opciones: [
                "Hasta el límite del capital que declaró al darse de alta",
                "Con su patrimonio personal solo si actuó con negligencia",
                "Con todo su patrimonio, presente y futuro, incluida su vivienda",
                "Solo con los bienes afectos a la actividad",
              ],
              correcta: 2,
              porque: [
                "El empresario individual no tiene capital declarado que limite nada.",
                "La negligencia agrava la responsabilidad de un administrador social; el autónomo responde con todo desde el primer día.",
                "Es la diferencia de fondo con la sociedad, y pesa mucho más que cualquier cálculo fiscal. La elección real es entre ser la empresa o participar en otra persona distinta de uno.",
                "No existe separación entre patrimonio empresarial y personal: el empresario individual es la empresa.",
              ],
            },
            {
              q: "¿Qué diferencia hay entre las participaciones de una limitada y las acciones de una anónima?",
              opciones: [
                "Las participaciones exigen escritura pública y las acciones no",
                "Las participaciones dan derecho a voto y las acciones solo a dividendo",
                "Las participaciones no son libremente transmisibles y las acciones sí",
                "Ninguna sustancial: son dos nombres para la parte alícuota del capital",
              ],
              correcta: 2,
              porque: [
                "La transmisión de participaciones sí exige documento público, y esa formalidad es consecuencia de lo anterior, no la diferencia de fondo.",
                "Ambas dan voto salvo que se emitan clases especiales, y eso es posible en los dos tipos.",
                "La limitada es una sociedad cerrada: la ley presume que a los socios les importa con quién comparten empresa. La anónima nació para reunir capital de desconocidos.",
                "La diferencia es central y explica para qué sirve cada tipo social.",
              ],
            },
            {
              q: "¿Cuánto capital hay que desembolsar para constituir una sociedad anónima?",
              opciones: [
                "3.000 €, igual que la limitada antes de la reforma",
                "15.000 €: el 25 % del capital mínimo de 60.000 €",
                "Un euro, como en la limitada",
                "Los 60.000 € íntegros en el momento de la constitución",
              ],
              correcta: 1,
              porque: [
                "Los 3.000 € eran el mínimo de la limitada, que además ya no rige.",
                "Suscribir y desembolsar son cosas distintas: el socio se compromete por el total y aporta de entrada una parte.",
                "El capital de un euro es una posibilidad de la limitada; la anónima conserva su mínimo elevado.",
                "La ley exige suscribir todo el capital y desembolsar al menos la cuarta parte; el resto queda como dividendos pasivos exigibles.",
              ],
            },
            {
              q: "¿Cómo se reparte el excedente en una cooperativa?",
              opciones: [
                "Según la actividad que cada socio haya realizado con la cooperativa",
                "A partes iguales entre todos los socios",
                "Se reinvierte íntegramente: las cooperativas no reparten",
                "En proporción al capital aportado, como en cualquier sociedad",
              ],
              correcta: 0,
              porque: [
                "Se es socio por participar en la actividad, no por poner dinero, y el reparto sigue esa misma lógica. Verla como una sociedad con ventajas fiscales pierde de vista lo esencial.",
                "El reparto igualitario correspondería al voto —un socio, un voto—, no al excedente.",
                "Sí reparten, y lo hacen con un criterio distinto del de las sociedades de capital.",
                "Ese es el criterio de las sociedades de capital, y la cooperativa es una sociedad de personas.",
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
            { ref: "Ley de Sociedades de Capital (RDL 1/2010), títulos I a III", nota: "el régimen común y las diferencias entre limitada y anónima; el texto consolidado del BOE es la única versión fiable." },
            { ref: "Ley 18/2022, de creación y crecimiento de empresas", nota: "la rebaja del capital mínimo y las dos cautelas que la acompañan; conviene leer la exposición de motivos." },
            { ref: "Ley 27/1999 de Cooperativas y la ley autonómica que corresponda", nota: "la competencia está repartida, y las diferencias entre leyes autonómicas no son menores." },
            { ref: "Agencia Tributaria, manuales de IRPF y de Sociedades", nota: "para rehacer el ejemplo numérico con los tipos y escalas vigentes, que cambian casi todos los años." },
            { ref: "INE, Directorio Central de Empresas (DIRCE)", nota: "el reparto real de formas jurídicas en España; permite comprobar el predominio de la limitada con datos." },
          ],
        },
      ],
    },
  ],
};
