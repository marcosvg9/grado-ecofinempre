/* Ficha 14.06 — Cuentas anuales: formulación, aprobación, depósito y auditoría. */

export default {
  codigo: "14.06",
  titulo: "Cuentas anuales: formulación, aprobación, depósito y auditoría",
  nivel: 2,
  bloque: "Derecho de la empresa",
  tiempo: "4 h",
  nucleo:
    "Depositar las cuentas no es un trámite administrativo: es lo que convierte una contabilidad privada en información pública y oponible. Y esa obligación, pensada para proteger a los acreedores, acabó siendo la fuente primaria con la que se mide el sector empresarial de un país entero.",
  requiere: "5.10 Cuentas anuales · 14.04 Junta y administración",
  abre: "14.09 Insolvencia · 12.02 La cuenta de producción · 6.10 Consolidación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Las cuentas anuales recorren cuatro fases, cada una con su órgano, su plazo y su consecuencia**, y confundirlas es el origen de casi todos los problemas prácticos de esta materia. Se **formulan** por los administradores, se **auditan** cuando procede, se **aprueban** por la junta general y se **depositan** en el Registro Mercantil. Ninguna de las cuatro sustituye a las otras.",
            "**La formulación corresponde a los administradores y tiene un plazo de tres meses desde el cierre del ejercicio.** Es un acto de responsabilidad personal: los administradores **firman** las cuentas y con ello afirman que expresan la imagen fiel del patrimonio, de la situación financiera y de los resultados. Comprende el balance, la cuenta de pérdidas y ganancias, el estado de cambios en el patrimonio neto, el estado de flujos de efectivo y la memoria, con las salvedades de las modalidades abreviadas que la ficha 5.10 detalla. Junto a ellas se formula, cuando procede, el informe de gestión y la propuesta de aplicación del resultado.",
            "**La aprobación corresponde a la junta general y debe producirse dentro de los seis primeros meses del ejercicio siguiente.** Hasta que la junta aprueba, las cuentas son un proyecto. Y la junta aprueba o no aprueba: **no puede modificarlas**, porque la formulación no es competencia suya. Si no está de acuerdo, lo que procede es rechazarlas y que los administradores formulen otras, con las consecuencias de gobierno que eso arrastra. En el mismo acto se decide la aplicación del resultado, que es donde se acuerda el dividendo con los límites de la ficha 14.03.",
            "**El depósito se presenta en el Registro Mercantil dentro del mes siguiente a la aprobación, y es el acto que hace pública la información.** Aquí está la clave conceptual de la ficha: una sociedad de capital, a cambio de que sus socios no respondan de las deudas, **acepta abrir sus cuentas al público**. Es un intercambio explícito —opacidad por responsabilidad— y explica por qué el empresario individual, que responde con todo, no está obligado a depositar nada.",
            "**No depositar tiene dos consecuencias y la primera es más disuasoria que la segunda.** El **cierre registral**: transcurrido un año desde el cierre del ejercicio sin depósito, no se inscribe prácticamente ningún documento de la sociedad, lo que en la práctica la paraliza —no puede cambiar de administrador, ni ampliar capital, ni cambiar domicilio—. Y las **sanciones económicas**, que se gradúan según el tamaño de la sociedad y que en los últimos años se han impuesto con mucha mayor frecuencia que antes.",
            "**La auditoría es una fase distinta y no todas las sociedades la necesitan.** Es obligatoria, en términos generales, cuando durante **dos ejercicios consecutivos** se superan **dos de estos tres límites**: total de activo, cifra anual de negocios y número medio de empleados. Los umbrales concretos **han cambiado y volverán a cambiar** —la normativa europea los revisó al alza recientemente para corregir el efecto de la inflación— así que el mecanismo es lo que hay que retener y las cifras hay que consultarlas. Junto a ese supuesto general hay otros: sociedades cotizadas, entidades de crédito y de seguros, las que reciben subvenciones o contratan con el sector público por encima de ciertos importes, y siempre que lo solicite una minoría del cinco por ciento del capital.",
            "**Conviene decir con precisión qué hace un auditor y qué no**, porque es de las cosas peor entendidas de la contabilidad. El auditor **no elabora las cuentas** —lo hacen los administradores— **ni certifica que la empresa vaya bien** ni detecta necesariamente el fraude. Emite una opinión técnica e independiente sobre si las cuentas expresan la imagen fiel conforme al marco normativo aplicable. Una opinión favorable sobre una empresa que quiebra al año siguiente no es un fallo del auditor si las cuentas reflejaban fielmente la situación: **la auditoría verifica la fidelidad del retrato, no la salud del retratado**.",
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
            { nom: "Las cuatro fases", sub: "Cada una con órgano y plazo propios.", cols: ["formular · auditar · aprobar · depositar"] },
            { nom: "Formulación", sub: "Acto de responsabilidad personal.", cols: ["administradores · 3 meses desde el cierre"] },
            { nom: "Aprobación", sub: "Hasta entonces son un proyecto.", cols: ["junta · dentro de los 6 primeros meses"] },
            { nom: "Límite de la junta", sub: "La formulación no es competencia suya.", cols: ["aprueba o rechaza, no modifica"] },
            { nom: "Depósito", sub: "El acto que hace pública la información.", cols: ["Registro Mercantil · 1 mes desde la aprobación"] },
            { nom: "El intercambio de fondo", sub: "Por eso el autónomo no deposita.", cols: ["responsabilidad limitada a cambio de transparencia"] },
            { nom: "Sanción principal", sub: "Más disuasoria que la multa.", cols: ["cierre registral al año sin depósito"] },
            { nom: "Regla de la auditoría", sub: "Los umbrales cambian; el mecanismo no.", cols: ["2 de 3 límites · durante 2 ejercicios seguidos"] },
            { nom: "Los tres límites", sub: "Consultar siempre las cifras vigentes.", cols: ["activo · cifra de negocios · empleados"] },
            { nom: "Qué opina el auditor", sub: "Y qué no dice en absoluto.", cols: ["imagen fiel, no solvencia ni buena gestión"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuándo nace la obligación de auditar",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El mecanismo de los dos ejercicios consecutivos confunde a mucha empresa en crecimiento, porque la obligación no nace el año en que se cruzan los umbrales sino el siguiente. Lo vemos con una sociedad que crece, usando como referencia los límites clásicos —**2.850.000 € de activo, 5.700.000 € de cifra de negocios y 50 empleados**—, que **hay que comprobar porque se han revisado al alza**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Ejercicio", "Activo", "Cifra de negocios", "Empleados", "Límites superados", "¿Obligada a auditar?"],
          filas: [
            ["X−2", "3.100.000 €", "5.200.000 €", "42", "1 de 3", "No"],
            ["X−1", "3.400.000 €", "6.100.000 €", "47", "2 de 3", "No: es el primer año con dos"],
            ["X", "3.600.000 €", "6.400.000 €", "52", "3 de 3", "Sí: segundo ejercicio consecutivo con dos o más"],
            { celdas: ["X+1", "3.300.000 €", "5.400.000 €", "48", "1 de 3", "Deja de estarlo si se repite otro ejercicio"], clase: "total" },
          ],
          nota: "Tres cosas que la tabla enseña. **La primera**: en X−2 la sociedad ya supera el umbral de activo y no pasa nada, porque hace falta superar dos de los tres. **La segunda**: en X−1 supera dos, y tampoco nace la obligación todavía, porque el requisito es de **dos ejercicios consecutivos**. **La tercera y más importante en la práctica**: la obligación de auditar el ejercicio X se conoce **antes de que X termine**, de modo que hay tiempo de contratar auditor; pero quien no lleve la cuenta se encuentra en junio con unas cuentas que no puede aprobar. La simetría también funciona al salir: se deja de estar obligado cuando se dejan de superar dos límites durante dos ejercicios seguidos.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Ejercicio", y: "Millones de €" },
          dominio: { x: [-2.6, 1.6], y: [0, 7.4] },
          marcasX: [-2, -1, 0, 1],
          marcasY: [2.85, 5.7],
          series: [
            { nombre: "Cifra de negocios", color: "acento", etiquetaEn: [0.15, 6.75],
              puntos: [[-2, 5.2], [-1, 6.1], [0, 6.4], [1, 5.4]] },
            { nombre: "Activo total", color: "n3", etiquetaEn: [0.15, 3.15],
              puntos: [[-2, 3.1], [-1, 3.4], [0, 3.6], [1, 3.3]] },
          ],
          notas: [
            { x: -2.5, y: 5.95, texto: "umbral de cifra de negocios: 5,70", ancla: "start" },
            { x: -2.5, y: 2.45, texto: "umbral de activo: 2,85", ancla: "start" },
            { x: -2, y: 1.35, texto: "1 de 3", ancla: "middle" },
            { x: -1, y: 1.35, texto: "2 de 3", ancla: "middle" },
            { x: 0, y: 1.35, texto: "3 de 3", ancla: "middle" },
            { x: 1, y: 1.35, texto: "1 de 3", ancla: "middle" },
            { x: 0, y: 0.65, texto: "AUDITA", ancla: "middle" },
            { x: -2.5, y: 0.15, texto: "El tercer límite, la plantilla, pasa de 42 a 52 empleados en el mismo período.", ancla: "start" },
          ],
          nota: "Las dos líneas cruzan sus umbrales en momentos distintos y por eso hay que contar límites, no magnitudes. La sociedad supera el de activo desde el primer ejercicio y **no pasa nada**, porque hacen falta dos de los tres. Supera dos en X−1 y **tampoco nace la obligación**, porque hace falta que se repita. Solo en **X**, segundo ejercicio consecutivo con dos o más, queda obligada a auditar. Los umbrales dibujados son los clásicos y **se han revisado al alza**: lo que hay que retener es el mecanismo, no las cifras.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El segundo cálculo mide el coste de no depositar**, que suele subestimarse porque se piensa solo en la multa. Una sociedad mediana que lleva dos ejercicios sin depositar:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Consecuencia", "Alcance", "Efecto práctico"],
          filas: [
            ["Cierre registral", "Al año del cierre del ejercicio no depositado", "No se inscribe casi nada: ni cese ni nombramiento de administrador"],
            ["Bloqueo de operaciones societarias", "Mientras dure el cierre", "No puede ampliar capital, cambiar domicilio ni modificar estatutos"],
            ["Efecto sobre la financiación", "Inmediato", "Ningún banco ni gran cliente contrata sin cuentas depositadas"],
            ["Sanción económica", "Graduada por tamaño y por ejercicios incumplidos", "Puede acumularse por cada ejercicio no depositado"],
            { celdas: ["Prueba en un eventual concurso", "Ficha 14.09", "La falta de contabilidad regular agrava la calificación del concurso"], clase: "total" },
          ],
          nota: "La fila que más pesa en la práctica no es la sanción sino la **tercera**: una sociedad sin cuentas depositadas queda fuera del crédito bancario, de los concursos públicos y de la mayoría de los procesos de homologación de proveedores. El mercado impone la transparencia con más eficacia que el Registro, y por una razón que enlaza con la ficha 14.01: **quien no publica información obliga a su contraparte a asumir un riesgo que no puede medir, y esa contraparte responde subiendo el precio o retirándose**. Y la última fila anticipa algo serio: si la sociedad acaba en concurso, no llevar contabilidad regular puede convertirlo en culpable, con responsabilidad personal de los administradores.",
        },
      ],
    },
    {
      titulo: "Caso práctico: de un deber registral al PIB de un sector",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La obligación de depositar cuentas se creó para proteger a los acreedores de sociedades cuyos socios no responden. Su consecuencia más importante hoy, sin embargo, es otra que nadie buscó: **es la infraestructura estadística sobre la que se mide el sector empresarial español**.",
            "**El razonamiento es directo.** Cada año, cientos de miles de sociedades depositan un balance, una cuenta de resultados y una memoria elaborados con un mismo plan contable. Eso produce, sin coste adicional para el sistema estadístico, un **censo casi completo de la actividad empresarial formal**, normalizado y comparable. Ninguna encuesta podría conseguir algo parecido: sería carísima, tendría no respuesta y perdería a las empresas pequeñas.",
            "**De ahí salen dos productos que este plan ya ha usado.** La **Central de Balances del Banco de España**, que explota las cuentas depositadas y las integra con su propia encuesta para producir agregados sectoriales de rentabilidad, endeudamiento y estructura financiera. Y la estimación del **sector sociedades no financieras (S.11)** en la contabilidad nacional: los excedentes de explotación, los consumos intermedios y la formación de capital que las fichas 12.02, 12.03 y 13.08 manejaban como dato salen, en última instancia, de cuentas que alguien tuvo que depositar porque una ley mercantil se lo exigía.",
            "**Esa dependencia tiene consecuencias que conviene ver.** Primero, la **calidad estadística depende del cumplimiento**: una tasa de depósito baja o tardía degrada directamente las estimaciones, y por eso el endurecimiento sancionador tiene efectos que exceden lo jurídico. Segundo, **cualquier reforma del régimen contable cambia la serie**: modificar los umbrales de las modalidades abreviadas altera qué información se publica y obliga a reconstruir agregados. Y tercero, lo que **no se deposita no se mide**: la actividad de los empresarios individuales, que no depositan nada, hay que estimarla por otras vías, y de ahí buena parte de la incertidumbre sobre la renta mixta de la ficha 12.03.",
            "**Y una observación sobre el auditor que enlaza con el bloque 12.** La auditoría no forma parte de la cadena estadística, pero la sostiene por debajo: sin una verificación independiente, la información depositada valdría lo que valga la palabra de quien la firma. El sistema entero descansa en una cadena de responsabilidades —administrador que formula y firma, auditor que opina, junta que aprueba, Registro que publica— y **cada eslabón existe porque alguien tiene incentivos para desviarse en ese punto concreto**.",
            "**La lección de método cierra el bloque por donde lo abrió la ficha 14.01.** Detrás de casi todo dato económico hay una obligación jurídica que lo hizo existir. Quien analiza series sin saber qué norma las genera se expone a interpretar como cambio económico lo que fue un cambio normativo, y ese error es más frecuente de lo que parece: buena parte de los saltos inexplicables en series empresariales largas coincide con reformas contables o registrales.",
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
            { t: "Creer que la junta puede corregir las cuentas que no le gustan", d: "No puede: la formulación es competencia de los administradores y la junta solo aprueba o rechaza. Si no está conforme, lo que procede es no aprobarlas y que se formulen otras, con las consecuencias de gobierno que eso arrastra. Modificarlas en la propia junta sería invadir una competencia ajena." },
            { t: "Confundir aprobar con depositar", d: "Son actos distintos, de órganos distintos y con plazos distintos: la junta aprueba dentro de los seis primeros meses y el depósito se presenta en el mes siguiente a la aprobación. Aprobar sin depositar deja a la sociedad expuesta al cierre registral igualmente." },
            { t: "Pensar que la obligación de auditar nace el año en que se cruzan los umbrales", d: "Nace al segundo ejercicio consecutivo superando dos de los tres límites. Por eso una empresa en crecimiento que supera dos límites por primera vez todavía no está obligada, y por eso la simetría funciona igual al salir: hacen falta otros dos ejercicios por debajo." },
            { t: "Usar umbrales de auditoría de memoria", d: "Han cambiado y volverán a cambiar: la normativa europea los revisó al alza para corregir el efecto de la inflación. Lo que hay que retener es el mecanismo —dos de tres, durante dos ejercicios consecutivos— y consultar siempre las cifras vigentes en el texto en vigor." },
            { t: "Interpretar una opinión favorable de auditoría como certificado de solvencia", d: "El auditor opina sobre si las cuentas expresan la imagen fiel conforme al marco aplicable. No elabora las cuentas, no certifica que la empresa vaya bien y no garantiza que no haya fraude. Verifica la fidelidad del retrato, no la salud del retratado." },
            { t: "Ver el depósito como un trámite sin consecuencias económicas", d: "Una sociedad sin cuentas depositadas queda fuera del crédito bancario, de los concursos públicos y de casi toda homologación de proveedores, además del cierre registral y las sanciones. Y si acaba en concurso, no llevar contabilidad regular puede agravar la calificación con responsabilidad personal de los administradores." },
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
            "Esta es la ficha del bloque que más directamente sostiene al resto del plan: sin ella, buena parte de los datos de los bloques 10, 12 y 13 no existiría.",
          ],
          lista: [
            "Las **cuentas depositadas** son la materia prima de la **Central de Balances del Banco de España** y de la estimación del sector sociedades no financieras en la contabilidad nacional. Los excedentes de explotación de la ficha 12.03 y la formación de capital de la 13.08 llegan, por esta vía, desde una obligación registral.",
            "La ficha **5.10** describe el documento y esta describe su ciclo de vida. Son complementarias: allí está qué contiene un balance, aquí quién lo firma, quién lo aprueba, quién lo publica y qué pasa si nadie lo hace.",
            "El **plan contable único** es lo que hace agregable esa información. Sin normalización habría cientos de miles de documentos incomparables, y la contabilidad nacional no podría construirse de abajo arriba como se construye.",
            "Lo que **no se deposita no se mide**: los empresarios individuales no depositan nada, y por eso su renta mixta —la magnitud de la ficha 12.03 que impide medir bien la participación salarial— hay que estimarla por vías indirectas, con la incertidumbre que eso arrastra.",
            "Y conviene retener la advertencia de método: **una reforma contable o registral cambia la serie estadística sin que haya cambiado la economía**. Muchos saltos inexplicables en series empresariales largas coinciden con cambios normativos, y la ficha 10.10 sobre revisiones ofrece el marco para no confundirlos con hechos.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el depósito de cuentas es el precio de la responsabilidad limitada**: quien pide que sus deudas no le alcancen acepta a cambio que sus números sean públicos. Ese intercambio, pensado para proteger a un acreedor concreto, terminó construyendo el aparato con el que un país entero se mide a sí mismo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cuáles son las cuatro fases de las cuentas anuales y quién interviene en cada una?", a: "Formulación por los administradores, en tres meses desde el cierre; auditoría por auditor independiente cuando procede; aprobación por la junta general, dentro de los seis primeros meses; y depósito en el Registro Mercantil, en el mes siguiente a la aprobación. Ninguna sustituye a las otras." },
            { q: "¿Puede la junta modificar las cuentas formuladas?", a: "No. La formulación es competencia de los administradores y la junta solo puede aprobarlas o rechazarlas. Si no está de acuerdo, lo que procede es no aprobarlas y que se formulen otras, con las consecuencias de gobierno que eso implica." },
            { q: "¿Por qué el empresario individual no está obligado a depositar cuentas y la sociedad sí?", a: "Porque el depósito es el precio de la responsabilidad limitada: quien pide que sus deudas no alcancen a su patrimonio acepta a cambio que sus números sean públicos. El empresario individual responde con todo lo que tiene, así que el acreedor no necesita esa información para saber contra qué puede ir." },
            { q: "Una empresa supera dos de los tres límites por primera vez. ¿Debe auditarse ese ejercicio?", a: "No. Hace falta superar dos de los tres durante dos ejercicios consecutivos, así que la obligación nace al segundo. La simetría funciona igual al salir: se deja de estar obligado tras dos ejercicios seguidos por debajo. Y los umbrales concretos han cambiado y hay que consultarlos." },
            { q: "¿Qué dice y qué no dice una opinión de auditoría favorable?", a: "Dice que, en opinión del auditor, las cuentas expresan la imagen fiel conforme al marco normativo aplicable. No dice que la empresa sea solvente, ni que esté bien gestionada, ni garantiza que no haya fraude. Verifica la fidelidad del retrato, no la salud del retratado." },
            { q: "¿Qué relación hay entre el depósito de cuentas y el PIB del sector sociedades?", a: "Directa: las cuentas depositadas por cientos de miles de sociedades, normalizadas por un mismo plan contable, son la materia prima de la Central de Balances y de la estimación del sector sociedades no financieras en contabilidad nacional. Una obligación pensada para proteger acreedores acabó siendo infraestructura estadística." },
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
              q: "La junta aprueba las cuentas anuales en junio. ¿Queda cumplida la obligación?",
              opciones: [
                "Sí, si la sociedad no está obligada a auditarse",
                "Sí: la aprobación es el acto que cierra el ciclo",
                "No: falta además la formulación, que se hace después de aprobar",
                "No: aprobar y depositar son actos distintos, de órganos distintos y con plazos distintos; queda un mes para el depósito",
              ],
              correcta: 3,
              porque: [
                "La auditoría condiciona el contenido de lo que se deposita, no si hay que depositar.",
                "La aprobación es interna; lo que convierte la contabilidad privada en información pública y oponible es el depósito.",
                "La formulación es lo primero, no lo último: la hacen los administradores dentro de los tres meses siguientes al cierre.",
                "La junta aprueba dentro de los seis primeros meses y el depósito se presenta en el Registro Mercantil en el mes siguiente a la aprobación.",
              ],
            },
            {
              q: "Una sociedad lleva más de un año sin depositar sus cuentas. ¿Qué le ocurre?",
              opciones: [
                "Se disuelve de pleno derecho",
                "Una multa proporcional a su cifra de negocios, sin más efectos",
                "Nada mientras no reciba un requerimiento del Registro",
                "Se le cierra la hoja registral, y además queda fuera del crédito bancario, de los concursos públicos y de casi toda homologación de proveedores",
              ],
              correcta: 3,
              porque: [
                "No hay disolución automática: la sociedad sigue existiendo, paralizada registralmente.",
                "La sanción económica existe y no es lo que más duele: lo grave es quedarse fuera del tráfico.",
                "El cierre registral opera por el transcurso del plazo, sin requerimiento previo.",
                "El cierre impide inscribir casi cualquier acto —nombramientos, poderes, modificaciones— y la ausencia de cuentas públicas cierra por sí sola muchas puertas comerciales.",
              ],
            },
            {
              q: "¿Quién formula las cuentas anuales y en qué plazo?",
              opciones: [
                "El asesor contable, sin plazo legal específico",
                "El auditor, antes de emitir su informe",
                "Los administradores, dentro de los tres meses siguientes al cierre del ejercicio",
                "La junta general, dentro de los seis primeros meses",
              ],
              correcta: 2,
              porque: [
                "El asesor puede prepararlas materialmente, y quien las formula y responde es el administrador.",
                "El auditor opina sobre unas cuentas ya formuladas: no puede elaborar lo que después ha de revisar.",
                "Es competencia indelegable suya, y de ahí que respondan de su contenido: el plazo empieza a correr con el cierre del ejercicio, no con la convocatoria de la junta.",
                "La junta aprueba o rechaza en ese plazo; formular es un acto anterior y de otro órgano.",
              ],
            },
            {
              q: "Los umbrales que obligan a auditar han cambiado varias veces. ¿Qué conviene retener?",
              opciones: [
                "Que solo se aplican a las sociedades anónimas",
                "Las cifras vigentes, que llevan estables más de una década",
                "Que la obligación depende únicamente de la cifra de negocios",
                "El mecanismo: superar dos de los tres límites —activo, cifra de negocios y empleados— durante dos ejercicios consecutivos",
              ],
              correcta: 3,
              porque: [
                "Se aplican a las sociedades de capital en general, no solo a las anónimas.",
                "Han cambiado y volverán a cambiar: la normativa europea los revisó al alza para corregir el efecto de la inflación.",
                "Son tres magnitudes y basta con superar dos de ellas: fiarlo todo a una sola lleva a conclusiones equivocadas.",
                "Las cifras hay que consultarlas; la estructura de la regla es lo que permite saber qué comprobar y en qué años.",
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
            { ref: "Ley de Sociedades de Capital, título VII", nota: "formulación, aprobación, depósito y régimen sancionador; el ciclo completo en pocos artículos." },
            { ref: "Ley 22/2015 de Auditoría de Cuentas y su Reglamento", nota: "supuestos de auditoría obligatoria, independencia del auditor y contenido del informe." },
            { ref: "BOE, texto en vigor de los umbrales de auditoría y de cuentas abreviadas", nota: "imprescindible: las cifras se han revisado al alza y volverán a hacerlo." },
            { ref: "Banco de España, Central de Balances", nota: "el mayor uso analítico de las cuentas depositadas; su metodología explica bien la cadena que va del Registro al agregado." },
            { ref: "ICAC, consultas y resoluciones", nota: "la doctrina administrativa que resuelve las dudas prácticas de formulación y depósito." },
          ],
        },
      ],
    },
  ],
};
