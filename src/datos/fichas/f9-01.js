/* Ficha 9.01 — La empresa: formas juridicas y gobierno corporativo. */

export default {
  codigo: "9.01",
  titulo: "La empresa: formas jurídicas y gobierno corporativo",
  nivel: 1,
  bloque: "Dirección de empresas",
  tiempo: "3 h",
  nucleo:
    "Elegir forma jurídica es decidir quién responde de las deudas, cómo tributan los beneficios y qué facilidad hay para incorporar socios. Y en cuanto la propiedad se separa de la gestión aparece el problema de agencia, que es el que todo el gobierno corporativo intenta contener.",
  requiere: "5.01 Patrimonio y ecuación fundamental",
  abre: "9.04 Estrategias corporativas · 7.06 Estructura de capital · 6.10 Grupos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La forma jurídica no es un trámite administrativo: determina tres cosas con consecuencias económicas directas. **Quién responde** de las deudas, y hasta dónde. **Cómo tributan** los beneficios, si por el impuesto sobre la renta del titular o por el de sociedades. Y **cómo se incorpora capital**, es decir, con qué facilidad puede entrar un socio nuevo o salir uno existente.",
            "El empresario **individual** responde con todo su patrimonio presente y futuro, y tributa por el impuesto sobre la renta según la escala progresiva. Es simple y barato de constituir, y expone la vivienda familiar a los riesgos del negocio. La **sociedad de responsabilidad limitada** interpone una persona jurídica: los socios responden solo hasta lo aportado, y la sociedad tributa por el impuesto sobre sociedades. La **sociedad anónima** añade una estructura pensada para muchos socios y capital negociable, con requisitos más exigentes.",
            "Un cambio reciente que conviene conocer: la **Ley 18/2022** rebajó el capital social mínimo de la sociedad limitada de 3.000 € a **un euro**, con dos cautelas mientras el capital no alcance los 3.000 €: destinar al menos el 20 % del beneficio a reserva legal hasta cubrir esa cifra, y responsabilidad solidaria de los socios hasta ese importe en caso de liquidación. Es decir, la protección del acreedor no desaparece, se difiere.",
            "En cuanto la propiedad y la gestión se separan aparece el **problema de agencia**. Quien dirige la empresa no es quien soporta las consecuencias patrimoniales de sus decisiones, y sus intereses no coinciden automáticamente con los del propietario: puede preferir crecer a ser rentable, evitar riesgos que al accionista diversificado le compensarían, o consumir recursos en beneficios personales. Nada de esto exige mala fe; basta con incentivos distintos.",
            "El **gobierno corporativo** es el conjunto de mecanismos que intenta alinear esos intereses. Internos: consejo de administración con consejeros independientes, comisiones de auditoría y de retribuciones, retribución variable ligada a resultados a largo plazo. Externos: auditoría, mercado de control corporativo, obligaciones de transparencia y la propia normativa. En España, los grupos cotizados están sujetos al código de buen gobierno de la CNMV, que funciona por el principio de **cumplir o explicar**: no obliga, pero exige justificar por qué no se sigue una recomendación.",
            "Conviene añadir un matiz que se pasa por alto: en el tejido empresarial español, **la mayoría de las empresas no tienen problema de agencia entre propiedad y gestión** porque coinciden en las mismas personas. Su problema de agencia es otro, entre socios mayoritarios y minoritarios, o entre familia y empresa en las sucesiones.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Forma", "Responsabilidad y capital", "Tributación"],
          filas: [
            { nom: "Empresario individual", sub: "Sin personalidad jurídica propia", cols: ["Ilimitada, sin capital mínimo", "IRPF, escala progresiva"] },
            { nom: "Sociedad limitada", sub: "La forma dominante en España", cols: ["Limitada a lo aportado, capital desde 1 €", "Impuesto sobre sociedades"] },
            { nom: "Sociedad anónima", sub: "Pensada para capital disperso", cols: ["Limitada, 60.000 € con 25 % desembolsado", "Impuesto sobre sociedades"] },
            { nom: "Cooperativa", sub: "Un socio, un voto, con matices", cols: ["Limitada, capital variable", "Tipo reducido si es fiscalmente protegida"] },
            { nom: "Sociedad civil y comunidad de bienes", sub: "Actividad conjunta sin sociedad mercantil", cols: ["Ilimitada de los socios", "Depende de si tiene objeto mercantil"] },
          ],
          nota: "Los tipos impositivos y los umbrales cambian con frecuencia. Esta tabla sirve para entender la lógica de la elección; **antes de aplicarla a un caso real hay que comprobar la normativa vigente**.",
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
            { nom: "Participación tras una ampliación", sub: "La dilución del socio que no acude.", cols: ["% final = % inicial × (Pre-money / Post-money)"] },
            { nom: "Valoración post-money", sub: "La referencia de cualquier ronda.", cols: ["Post = Pre + Importe invertido"] },
            { nom: "Porcentaje del nuevo inversor", sub: "Lo que compra su aportación.", cols: ["% nuevo = Inversión / Post-money"] },
            { nom: "Dilución acumulada", sub: "Tras varias rondas sucesivas.", cols: ["$\\%$ final $= \\prod_i \\dfrac{\\text{Pre}_i}{\\text{Post}_i}$"] },
            { nom: "Coste de agencia", sub: "La pérdida de valor por intereses no alineados.", cols: ["CA = V(gestión óptima) − V(gestión real) + coste de los mecanismos de control"] },
            { nom: "Umbrales de control", sub: "En la ley de sociedades de capital.", cols: ["Mayoría simple · 2/3 para acuerdos reforzados · 25 % para minoría cualificada"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dilución a través de tres rondas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un fundador posee el **100 %** de una sociedad limitada valorada en 2 millones de euros. Capta tres rondas sucesivas de financiación, cada una a una valoración previa mayor.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Ronda", "Inversión", "Valoración pre", "Valoración post", "% del fundador"],
          filas: [
            ["Inicio", "—", "—", "2.000.000 €", "100,0 %"],
            ["A", "500.000 €", "2.000.000 €", "2.500.000 €", "80,0 %"],
            ["B", "2.000.000 €", "8.000.000 €", "10.000.000 €", "64,0 %"],
            { celdas: ["C", "5.000.000 €", "20.000.000 €", "25.000.000 €", "51,2 %"], clase: "total" },
          ],
          nota: "Cada ronda diluye un 20 %, y el efecto es multiplicativo: 0,8 × 0,8 × 0,8 = 51,2 %. El fundador conserva por poco la mayoría, y una cuarta ronda en las mismas condiciones lo dejaría en el 41 %, por debajo del control.",
        },
        {
          tipo: "tabla",
          cabecera: ["Momento", "Participación", "Valor de su parte"],
          filas: [
            ["Antes de la ronda A", "100 %", "2.000.000 €"],
            ["Tras la ronda A", "80 %", "2.000.000 €"],
            ["Tras la ronda B", "64 %", "6.400.000 €"],
            { celdas: ["Tras la ronda C", "51,2 %", "12.800.000 €"], clase: "total" },
          ],
          nota: "**Diluirse no es empobrecerse.** El fundador pasa del 100 % al 51,2 % y su participación multiplica por seis su valor, porque el capital entrante financió un crecimiento que elevó la valoración. La dilución solo destruye valor si la ronda se hace a una valoración inferior a la que el negocio merece.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Lo que la tabla no muestra es el control**, que es donde se juega la partida real. Un fundador con el 51,2 % controla la junta ordinaria pero no alcanza los dos tercios que exigen los acuerdos reforzados. Y en la práctica, los pactos de socios de estas operaciones suelen otorgar a los inversores **derechos de veto** sobre decisiones concretas —endeudamiento, venta de la compañía, nombramientos, nuevas rondas— con independencia de su porcentaje. **El control efectivo lo define el pacto de socios, no el porcentaje de capital**, y es exactamente el mismo principio que rige la definición de grupo de la ficha 6.10.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cuando el problema de agencia es entre socios",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La literatura de gobierno corporativo se construyó pensando en la gran sociedad cotizada con accionariado disperso, donde ningún propietario tiene incentivo ni capacidad para vigilar al directivo. En el tejido empresarial español ese caso es minoritario, y el conflicto relevante suele ser otro.",
            "**El primer conflicto es entre mayoría y minoría.** Un socio con el 70 % controla la junta, nombra el consejo y decide el reparto de dividendos. Puede optar por no repartir nunca y retribuirse vía nómina, dejando al minoritario sin rendimiento alguno de una participación que además no puede vender porque no hay mercado. La ley ofrece alguna protección —el derecho de separación por falta de reparto de dividendos, con requisitos y con un historial de suspensiones— pero el desequilibrio de partida es grande.",
            "**El segundo es el de la empresa familiar en sucesión.** La segunda generación multiplica el número de socios sin multiplicar los puestos de gestión, y aparece la distinción entre socios que trabajan en la empresa y socios que solo esperan dividendos. Sus intereses divergen de forma estructural: unos prefieren reinvertir y crecer, otros repartir. Es un problema de agencia sin ningún directivo profesional de por medio.",
            "**Los instrumentos que funcionan** son en gran medida preventivos y se firman cuando todavía hay acuerdo. El **pacto de socios** regula qué decisiones exigen mayoría reforzada, cómo se valora una participación si alguien quiere salir, qué ocurre en caso de fallecimiento y qué política de dividendos se aplica. El **protocolo familiar** añade reglas sobre incorporación de familiares, retribuciones y órganos de gobierno separados de la gestión diaria.",
            "**Y una observación sobre incentivos.** El principio general de la ficha —todo sistema de incentivos produce el comportamiento que mide— se aplica también aquí. Una retribución variable ligada a resultados anuales empuja a decisiones de corto plazo; ligada a la cotización, a operaciones que la muevan; ligada al tamaño, a crecer sin rentabilidad, que es justo el sesgo hacia las adquisiciones descrito en la ficha 7.10.",
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
            { t: "Creer que la sociedad limitada protege siempre el patrimonio personal", d: "La responsabilidad limitada tiene excepciones importantes: avales personales exigidos por los bancos, deudas con la Seguridad Social y Hacienda en caso de responsabilidad del administrador, y responsabilidad por no promover la disolución cuando procede. En pymes, el aval personal del socio es la norma más que la excepción." },
            { t: "Elegir forma jurídica solo por fiscalidad", d: "El tipo del impuesto sobre sociedades frente a la escala del impuesto sobre la renta es un factor, no el único. Responsabilidad, capacidad de incorporar socios, imagen ante clientes y coste administrativo pesan tanto o más, y el óptimo fiscal cambia con el nivel de beneficio y con la normativa." },
            { t: "Confundir dilución con pérdida de valor", d: "Reducir el porcentaje sobre una empresa que vale mucho más puede multiplicar el valor de la participación. Lo que destruye valor es una ronda a valoración inferior a la que el negocio merece, no la dilución en sí." },
            { t: "Identificar control con porcentaje de capital", d: "Los pactos de socios otorgan derechos de veto que no dependen del porcentaje. Se puede tener el 51 % y no poder vender la empresa, o el 30 % y bloquear cualquier decisión relevante. El control efectivo lo define el pacto." },
            { t: "Aplicar el gobierno corporativo de cotizadas a una pyme", d: "Consejeros independientes y comisiones especializadas resuelven un problema —propiedad dispersa frente a gestión profesional— que la mayoría de las empresas españolas no tienen. Su conflicto es entre socios, y los instrumentos adecuados son el pacto de socios y el protocolo familiar." },
            { t: "Dejar el pacto de socios para cuando haga falta", d: "Se firma cuando todavía hay acuerdo, precisamente porque su función es resolver los desacuerdos futuros. Negociarlo en pleno conflicto es imposible, y su ausencia convierte cualquier desavenencia en un pleito." },
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
            "La forma jurídica determina en qué sector institucional se clasifica una empresa, y el criterio del SEC 2010 no coincide con la intuición.",
          ],
          lista: [
            "Una **unidad institucional** en el SEC es aquella que tiene autonomía de decisión y contabilidad completa. Ese es el criterio, no la personalidad jurídica.",
            "Consecuencia importante: un **empresario individual no es una sociedad no financiera (S.11)**. Su actividad se clasifica en el sector **hogares (S.14)**, porque no es posible separar su patrimonio personal del empresarial. El mismo negocio, constituido como sociedad limitada, pasa a S.11.",
            "Eso hace que el excedente de las empresas individuales aparezca en S.14 como **renta mixta (B.3)**, una categoría específica que recoge conjuntamente la retribución del trabajo del titular y la del capital invertido, precisamente porque no se pueden separar.",
            "El **paso de autónomo a sociedad** de un negocio que no cambia en absoluto produce, por tanto, un traslado de renta mixta de S.14 a excedente de explotación de S.11. Es un movimiento puramente jurídico con efecto estadístico.",
            "Y como se vio en la ficha 6.10, **el grupo empresarial no existe como unidad**: cada sociedad residente se sectoriza por su propia actividad, aunque una controle a la otra.",
          ],
          cierre:
            "Para quien trabaja con cuentas por sectores institucionales, esta ficha explica el contenido económico de decisiones que llegan como cambios de clasificación: por qué la renta mixta es una categoría aparte y por qué la frontera entre S.11 y S.14 depende de la forma jurídica.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un fundador con el 100 % capta una ronda de 1 M€ a valoración previa de 4 M€. ¿Qué porcentaje conserva?", a: "El 80 %. La valoración posterior es de 5 M€ y el inversor adquiere 1/5 del capital. Su participación vale ahora 4 M€, lo mismo que antes de la ronda." },
            { q: "Tres rondas que diluyen un 25 % cada una. ¿Qué queda del 100 % inicial?", a: "$0{,}75^3 = 42{,}2\\ \\%$. La dilución es multiplicativa, no aditiva: no se pierde el 75 % sino el 57,8 %." },
            { q: "¿Protege siempre la sociedad limitada el patrimonio personal del socio?", a: "No. Los avales personales exigidos por las entidades financieras, la responsabilidad del administrador frente a Hacienda y la Seguridad Social y la derivada de no promover la disolución son excepciones frecuentes, especialmente en empresas pequeñas." },
            { q: "¿Cuál es el problema de agencia típico de una pyme española?", a: "No el de propiedad dispersa frente a gestión profesional, porque suelen coincidir. Es el conflicto entre socio mayoritario y minoritario, o el de la empresa familiar en sucesión entre socios que trabajan y socios que solo esperan dividendos." },
            { q: "¿En qué sector del SEC 2010 se clasifica un autónomo?", a: "En hogares (S.14), no en sociedades no financieras, porque no puede separarse su patrimonio personal del empresarial. Su excedente se registra como renta mixta (B.3), que retribuye conjuntamente su trabajo y su capital." },
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
              q: "Un autónomo constituye una sociedad limitada. ¿Queda su patrimonio personal a salvo de las deudas del negocio?",
              opciones: [
                "Sí: esa es exactamente la función de la responsabilidad limitada",
                "Solo hasta el importe del capital social desembolsado",
                "No del todo: los avales personales que exige el banco, las deudas con Hacienda y la Seguridad Social en caso de responsabilidad del administrador y la actuación negligente abren brechas importantes",
                "Sí, salvo que la sociedad tenga menos de dos socios",
              ],
              correcta: 2,
              porque: [
                "Es su función y tiene excepciones que en la práctica se activan justo cuando el negocio va mal.",
                "El capital social es lo que responde de las deudas sociales, pero eso no impide que el socio responda por otras vías con su propio patrimonio.",
                "El aval personal es la más común de todas: el banco lo pide precisamente para neutralizar la responsabilidad limitada, y quien lo firma responde con todo.",
                "La sociedad unipersonal es perfectamente válida y no altera el régimen de responsabilidad.",
              ],
            },
            {
              q: "Una ronda de financiación reduce el porcentaje de los fundadores del 80 % al 55 %. ¿Han perdido valor?",
              opciones: [
                "Sí: su participación en la empresa es menor",
                "No necesariamente: un porcentaje menor sobre una empresa que vale mucho más puede valer bastante más que antes",
                "Sí, en proporción exacta a la dilución sufrida",
                "No: la dilución nunca afecta al valor de la participación",
              ],
              correcta: 1,
              porque: [
                "El porcentaje es menor y lo que importa es el producto del porcentaje por el valor, no cada factor por separado.",
                "Lo que destruye valor no es diluirse, sino hacerlo en una ronda a valoración inferior a la anterior. Confundir ambas cosas lleva a rechazar financiación que interesa.",
                "La proporción de la caída del porcentaje no dice nada mientras no se sepa cuánto ha subido la valoración.",
                "Sí puede afectarlo, y mucho, cuando la ronda se cierra por debajo de la valoración anterior.",
              ],
            },
            {
              q: "Un socio tiene el 51 % del capital. ¿Controla la empresa?",
              opciones: [
                "Sí: la mayoría del capital da la mayoría de los votos",
                "Sí, salvo en decisiones que exijan mayoría reforzada por ley",
                "No: el control depende del consejo de administración, no del capital",
                "No necesariamente: los pactos de socios otorgan derechos de veto que no dependen del porcentaje",
              ],
              correcta: 3,
              porque: [
                "Da la mayoría de los votos en junta, que es solo una parte de lo que decide quién manda.",
                "Las mayorías reforzadas legales existen, pero la restricción más habitual y más fuerte suele ser contractual.",
                "El consejo importa, y también lo determinan en buena medida los pactos entre socios.",
                "Se puede tener el 51 % y no poder vender la empresa, o el 30 % y bloquear cualquier operación relevante. El control se lee en el pacto, no en el porcentaje.",
              ],
            },
            {
              q: "¿Cuándo conviene firmar el pacto de socios?",
              opciones: [
                "Al principio, cuando todavía hay acuerdo, porque su función es resolver los desacuerdos futuros",
                "Cuando aparezca el primer desacuerdo serio entre los socios",
                "En la primera ronda de financiación externa, a exigencia del inversor",
                "Solo si hay más de tres socios",
              ],
              correcta: 0,
              porque: [
                "Negociarlo en pleno conflicto es imposible, y su ausencia convierte cualquier discrepancia en un bloqueo del que a menudo solo se sale vendiendo o cerrando.",
                "Es exactamente el momento en que ya no se puede pactar nada: cada cláusula se lee como un movimiento contra la otra parte.",
                "El inversor lo exigirá, sí, pero para entonces los fundadores llevan años sin reglas entre ellos.",
                "Con dos socios el riesgo de bloqueo es máximo, porque no hay tercero que desempate.",
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
            { ref: "Iborra, Dasí, Dolz y Ferrer, Fundamentos de dirección de empresas", nota: "el manual español estándar. Buen tratamiento de formas jurídicas y órganos de gobierno." },
            { ref: "Real Decreto Legislativo 1/2010, Ley de Sociedades de Capital", nota: "la norma. Mayorías, derechos de minoría y deberes de los administradores." },
            { ref: "CNMV, Código de buen gobierno de las sociedades cotizadas", nota: "las recomendaciones y el principio de cumplir o explicar. Breve y muy legible." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 2", nota: "unidades institucionales, sectorización y el tratamiento de las empresas individuales." },
          ],
        },
      ],
    },
  ],
};
