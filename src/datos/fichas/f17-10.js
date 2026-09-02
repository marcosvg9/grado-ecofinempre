/* Ficha 17.10 — Armonización fiscal en la Unión Europea. */

export default {
  codigo: "17.10",
  titulo: "Armonización fiscal en la Unión Europea",
  nivel: 3,
  bloque: "Fiscalidad española",
  tiempo: "5 h",
  nucleo:
    "La imposición indirecta está armonizada y la directa casi nada, y esa asimetría no responde a razones técnicas sino a una regla de procedimiento: la fiscalidad exige unanimidad en el Consejo. El IVA se armonizó porque sin ello no había mercado interior; Sociedades no, porque para algunos Estados la competencia fiscal es el modelo de país.",
  requiere: "17.04 Impuesto sobre Sociedades · 17.06 IVA II · 17.07 No residentes",
  abre: "18.04 Reglas fiscales · 18.06 Financiación autonómica",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La Unión Europea no tiene poder tributario propio: **no puede crear impuestos**. Lo que puede hacer es obligar a los Estados a aproximar sus legislaciones, y solo en la medida en que sea **necesario para el funcionamiento del mercado interior**. Los artículos 113 y 115 del Tratado le dan esa competencia con una condición que lo explica todo: **la unanimidad en el Consejo**. Cualquier Estado miembro puede vetar cualquier norma fiscal europea, y varios lo han hecho durante décadas.",
            "De ahí sale la asimetría que da título a la ficha. **La imposición indirecta está profundamente armonizada** —IVA, Impuestos Especiales, unión aduanera— y **la directa apenas**. La razón no es que una sea más importante que la otra, sino que la primera **obstruía físicamente el mercado interior** y la segunda no. Con impuestos indirectos distintos y en cascada hacían falta **ajustes fiscales en frontera**: había que calcular cuánto impuesto llevaba dentro cada producto para desgravarlo al exportar y compensarlo al importar. Sin un impuesto común y deducible en cadena, suprimir las aduanas era imposible.",
            "Esa es la razón profunda de que Europa eligiera el **IVA** y no un impuesto sobre las ventas: **su mecanismo de deducción hace visible en cada factura cuánto impuesto se ha pagado**, lo que permite exportar a tipo cero con exactitud. La ficha 17.06 lo dice desde el lado del contribuyente; aquí se ve desde el lado institucional. La Directiva 2006/112 fija hoy el hecho imponible, las exenciones, las reglas de localización y unos **tipos mínimos** —15 % el general, 5 % los reducidos—, pero **no los tipos concretos**, que cada Estado elige por encima de ese suelo.",
            "Conviene subrayar un detalle que casi nadie recuerda: **el régimen del IVA intracomunitario sigue siendo formalmente transitorio**. Se adoptó en 1993, al suprimirse las fronteras fiscales, como solución provisional en espera de un régimen definitivo basado en la tributación en origen que nunca llegó a acordarse. Treinta años después el «transitorio» sigue vigente, con parches sucesivos —la ventanilla única, las reglas de comercio electrónico— y con un coste conocido: es el **régimen que hace posible el fraude carrusel**, que consiste en aprovechar que la entrega intracomunitaria va exenta y el adquirente se autorrepercute.",
            "En **imposición directa** el panorama es el contrario y el instrumento principal no ha sido la armonización sino **el Derecho de la competencia y la jurisprudencia**. Las **ayudas de Estado** del artículo 107 han permitido a la Comisión atacar acuerdos fiscales concedidos a empresas concretas, con casos que han marcado la última década. Y el **Tribunal de Justicia** ha ido derribando normas nacionales que trataban peor las situaciones transfronterizas: de ahí, como vimos en la ficha 17.07, el régimen especial de los no residentes comunitarios.",
            "Sí existen directivas puntuales en imposición directa, y todas comparten una lógica: **eliminar obstáculos, no fijar tipos**. La directiva **matriz-filial** evita que los dividendos entre sociedades del grupo tributen dos veces; la de **intereses y cánones** suprime las retenciones entre empresas asociadas; las de **fusiones** permiten reorganizar grupos sin coste fiscal inmediato. Después llegó la respuesta a la elusión: las directivas **ATAD**, que imponen normas mínimas antiabuso —limitación de intereses, transparencia fiscal internacional, imposición de salida, mecanismos híbridos—, y la serie de directivas **DAC** de intercambio automático de información, que es probablemente el cambio más profundo de las dos últimas décadas.",
            "El movimiento más reciente viene de fuera: el **proyecto BEPS de la OCDE** y su **Pilar Dos**, transpuesto en la Unión por la Directiva 2022/2523, que establece un **tipo mínimo efectivo del 15 %** para grandes grupos multinacionales. Su mecanismo es lo interesante: si una filial tributa por debajo de ese mínimo en su jurisdicción, **otro Estado —el de la matriz— cobra la diferencia** mediante un impuesto complementario. El efecto sobre los incentivos es una inversión completa: **bajar el tipo por debajo del 15 % deja de atraer nada**, porque el ahorro no se lo queda la empresa sino otro fisco.",
            "Queda por último un malentendido frecuente sobre el presupuesto europeo. La Unión se financia con **recursos propios**: los derechos de aduana, un recurso calculado sobre una **base de IVA armonizada**, otro sobre los envases de plástico no reciclados y, como partida de cierre, uno proporcional a la **Renta Nacional Bruta** de cada Estado. Pero ninguno de ellos es un impuesto europeo: **los recauda cada Estado y los transfiere**. Que exista un «recurso IVA» no significa que Bruselas cobre IVA a nadie, y la base sobre la que se calcula es una construcción estadística, no la recaudación real.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Ámbito", "Grado de armonización", "Instrumento"],
          filas: [
            { nom: "Aduanas", sub: "Unión aduanera plena.", cols: ["Total: arancel común", "Reglamento, sin margen nacional"] },
            { nom: "IVA", sub: "Base común, tipos nacionales.", cols: ["Alta: hecho imponible, exenciones, mínimos", "Directiva 2006/112, régimen aún transitorio"] },
            { nom: "Impuestos Especiales", sub: "Energía, alcohol y tabaco.", cols: ["Media: estructura y tipos mínimos", "Directivas específicas, con suelos"] },
            { nom: "Sociedades", sub: "Sin base ni tipo comunes.", cols: ["Baja: solo normas antiabuso y antiobstáculo", "ATAD, matriz-filial, ayudas de Estado"] },
            { nom: "IRPF", sub: "Competencia nacional.", cols: ["Nula, salvo no discriminación", "Jurisprudencia del Tribunal de Justicia"] },
            { nom: "Tipo mínimo global", sub: "El cambio más reciente.", cols: ["15 % efectivo para grandes grupos", "Directiva 2022/2523, origen OCDE"] },
          ],
          nota: "Léase la columna central de arriba abajo: **la armonización decrece exactamente en la medida en que el impuesto deja de estorbar al mercado interior**. No es una escala de importancia, es una escala de necesidad funcional filtrada por la regla de unanimidad.",
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
            { nom: "Tipo efectivo de una filial", sub: "Impuesto pagado sobre beneficio cualificado.", cols: ["$t_e = \\dfrac{T_{local}}{B}$"] },
            { nom: "Impuesto complementario", sub: "Lo recauda otro Estado, no el de la filial.", cols: ["$TU = \\max(0,\\ 0{,}15 - t_e)\\cdot B$"] },
            { nom: "Carga total del grupo", sub: "El mínimo se alcanza siempre.", cols: ["$T = \\max(t_e,\\ 0{,}15)\\cdot B$"] },
            { nom: "Inversión del incentivo", sub: "Bajar del 15 % no ahorra nada al grupo.", cols: ["$\\dfrac{\\partial T}{\\partial t_e} = 0$ para $t_e < 0{,}15$"] },
            { nom: "Suelo del IVA europeo", sub: "La directiva fija mínimos, no tipos.", cols: ["$t_{general} \\geq 15\\,\\%$, $t_{reducido} \\geq 5\\,\\%$"] },
            { nom: "Recurso propio por RNB", sub: "Partida de cierre del presupuesto de la Unión.", cols: ["$A_i = c \\cdot \\mathrm{RNB}_i$"] },
          ],
          nota: "La cuarta línea es el corazón de Pilar Dos y merece leerse despacio: **por debajo del 15 %, la carga total del grupo no depende del tipo local**. Rebajarlo transfiere recaudación a otro fisco sin beneficiar a nadie, y ese es justamente el objetivo del diseño.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cómo el tipo mínimo global invierte el incentivo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un grupo multinacional con matriz en España tiene una filial que obtiene **10.000.000 € de beneficio** en una jurisdicción donde soporta un **tipo efectivo del 6 %**. Aplicamos la regla de inclusión de rentas de Pilar Dos y comparamos con lo que ocurriría si esa jurisdicción elevara su tipo al 15 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Jurisdicción al 6 %", "Jurisdicción al 15 %"],
          filas: [
            ["Beneficio de la filial", "10.000.000 €", "10.000.000 €"],
            ["Impuesto en la jurisdicción de la filial", "600.000 €", "1.500.000 €"],
            ["Impuesto complementario a recaudar por la matriz", "900.000 €", "0 €"],
            { celdas: ["Carga total del grupo", "1.500.000 €", "1.500.000 €"], clase: "total" },
            { celdas: ["Quién se lleva la diferencia", "600.000 la filial, 900.000 España", "1.500.000 la jurisdicción de la filial"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**La fila decisiva es la penúltima: el grupo paga 1.500.000 € en los dos escenarios.** Su factura fiscal es idéntica tanto si la jurisdicción cobra el 6 % como si cobra el 15 %. Lo único que cambia es **quién cobra**. Y eso invierte por completo el incentivo que sostenía la competencia fiscal a la baja: **un tipo del 6 % ya no atrae nada**, porque el ahorro no se lo queda la empresa que se instala, sino la Hacienda del país de la matriz.",
            "La consecuencia estratégica es contraintuitiva y está siendo visible desde 2024: **a la jurisdicción de baja tributación le conviene subir su tipo al 15 %**. Si no lo hace, regala 900.000 € a otro fisco sin obtener a cambio ninguna ventaja competitiva, porque la empresa paga lo mismo en cualquier caso. Varios territorios que durante décadas defendieron tipos muy bajos han introducido impuestos complementarios nacionales precisamente para quedarse ellos ese importe.",
            "**Dos advertencias sobre el ejemplo, porque simplifica.** La primera: Pilar Dos calcula el tipo efectivo con reglas propias sobre un beneficio contable ajustado, no sobre la base imponible local, y aplica una **exclusión de rentas vinculada a sustancia** —una fracción de nóminas y de activos materiales— que reduce el importe sujeto al complemento. Un grupo con fábricas y plantilla real en el territorio paga menos complemento que uno que solo tiene una sociedad tenedora. La segunda: **el mínimo no elimina la competencia fiscal, la desplaza**. Los incentivos migran hacia lo que las reglas tratan mejor: subvenciones directas, créditos fiscales cualificados y ayudas a la inversión. El terreno de juego cambia; el partido continúa.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué se armonizó el IVA y no Sociedades",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta parece de historia y es de mecánica institucional. En 1967, cuando la Comunidad decidió que todos sus miembros adoptaran el IVA, no lo hizo por un ideal de convergencia fiscal: lo hizo **porque no había alternativa técnica**. Los impuestos en cascada entonces vigentes acumulaban gravamen en cada eslabón, de modo que **el impuesto contenido en un producto dependía de cuántas veces se hubiera vendido antes**. Para exportar sin exportar impuesto había que estimarlo, y esa estimación era necesariamente arbitraria: cada Estado la inflaba a conveniencia y el resultado era un arancel encubierto.",
            "**El IVA resolvió el problema por su mecanismo, no por su tipo.** Como cada empresario deduce lo soportado, la cadena deja un rastro exacto: en cualquier punto se sabe cuánto impuesto lleva dentro un producto. Eso permite exportar a tipo cero con precisión y gravar en destino sin discriminar. Por eso la armonización europea del IVA es profunda en **estructura** —qué se grava, qué está exento, dónde se localiza— y superficial en **tipos**, donde solo hay mínimos: los tipos distintos no impiden el funcionamiento del mercado interior, y las reglas de localización se encargan de que la competencia por tipos no arrastre el comercio.",
            "**Con Sociedades no concurre ninguna de esas dos condiciones.** Un tipo bajo del impuesto sobre beneficios no obstruye la circulación de mercancías: la facilita, desde el punto de vista de quien se instala allí. Y sobre todo, para varios Estados miembros pequeños la fiscalidad ventajosa **no es un detalle de su sistema tributario sino su modelo de desarrollo económico**. Cualquier propuesta de base común consolidada —y ha habido varias, desde la CCCTB hasta BEFIT— **exige unanimidad**, y quien más pierde con ella tiene derecho de veto. La armonización directa no se ha frenado por dificultad técnica sino por aritmética política.",
            "**La lección general es la que conviene extraer.** La integración fiscal europea no ha avanzado donde era más deseable sino **donde era imprescindible y donde nadie tenía un interés lo bastante fuerte para vetarla**. Y cuando el bloqueo interno se hizo permanente, el impulso llegó **desde fuera**: el tipo mínimo global no nació en Bruselas sino en la OCDE, y la Unión lo transpuso después. Es un dato que dice bastante sobre cómo se mueve hoy la fiscalidad internacional: **las reglas se acuerdan en foros amplios y se implementan en bloques regionales**, no al revés.",
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
            { t: "Creer que la Unión Europea fija los tipos del IVA", d: "Fija mínimos —15 % el general, 5 % los reducidos— y armoniza la estructura: hecho imponible, exenciones y localización. El tipo concreto lo elige cada Estado por encima de ese suelo, y por eso varían tanto entre países." },
            { t: "Confundir armonización con unificación", d: "Armonizar es aproximar legislaciones nacionales en lo necesario para el mercado interior. No hay un impuesto europeo ni una Administración tributaria europea: cada Estado mantiene su ley, su tipo y su recaudación." },
            { t: "Suponer que existe un impuesto europeo sobre sociedades", d: "No existe, y los intentos de crear una base común han fracasado por la regla de unanimidad. Lo que hay son directivas antiobstáculo y antiabuso —matriz-filial, intereses y cánones, ATAD— que no fijan ni base ni tipo." },
            { t: "Pensar que el recurso propio del IVA es un impuesto que cobra Bruselas", d: "Se calcula aplicando un porcentaje a una base de IVA armonizada que es una construcción estadística, y lo transfiere cada Estado desde su propia recaudación. La Unión no cobra IVA a ningún contribuyente." },
            { t: "Creer que el tipo mínimo global acaba con la competencia fiscal", d: "La desplaza. Deja de ser rentable bajar el tipo nominal por debajo del 15 %, pero los incentivos migran hacia subvenciones directas, créditos fiscales cualificados y ayudas a la inversión, que las reglas tratan de otro modo." },
            { t: "Olvidar la exclusión por sustancia al aplicar Pilar Dos", d: "El complemento no se calcula sobre todo el beneficio: se excluye una fracción vinculada a nóminas y activos materiales. Un grupo con actividad real en el territorio soporta menos complemento que una sociedad meramente tenedora, y esa diferencia es deliberada." },
            { t: "Dar por definitivo el régimen del IVA intracomunitario", d: "Sigue siendo formalmente transitorio desde 1993, a la espera de un régimen definitivo que nunca se acordó. De su diseño —entrega exenta y autorrepercusión en destino— nace la posibilidad del fraude carrusel." },
            { t: "Tratar las decisiones sobre ayudas de Estado como armonización fiscal", d: "No lo son: operan por la vía del Derecho de la competencia y atacan ventajas selectivas concedidas a empresas concretas, no el nivel general de imposición de un país. Un tipo bajo aplicable a todos no es una ayuda de Estado." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "El recurso RNB y por qué el presupuesto europeo se calcula sobre una magnitud del SEC",
          texto:
            "El presupuesto de la Unión cierra con un recurso proporcional a la **Renta Nacional Bruta** de cada Estado, y esa elección conecta directamente con las fichas 10.06 y 10.07. Se usa la **RNB y no el PIB** por la razón exacta que explica la ficha 17.07: el PIB mide lo producido en el territorio y la RNB lo que perciben las unidades residentes, y para repartir una contribución entre países lo relevante es la **capacidad de los residentes**, no la producción que ocurre dentro por cuenta de terceros. Un país con mucha producción atribuible a no residentes —el caso irlandés— contribuiría de más si se usara el PIB. Esto tiene una consecuencia poco conocida y muy real: **una revisión metodológica del SEC cambia la factura que cada Estado paga a Bruselas**, sin que haya cambiado nada en su economía. Ocurrió con el paso al SEC 2010, cuando la capitalización del I+D y la inclusión de actividades ilegales elevaron la RNB de varios países y con ella su aportación. La contabilidad nacional no es aquí una descripción neutral de la realidad: **es la regla de reparto de un presupuesto de cientos de miles de millones**, y por eso Eurostat la audita.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            {
              q: "Una filial obtiene 10.000.000 € de beneficio con un tipo efectivo del 6 %. ¿Cuánto paga el grupo con Pilar Dos y quién lo cobra?",
              a: "Paga 1.500.000 € en total: 600.000 € en la jurisdicción de la filial y 900.000 € de impuesto complementario que recauda el Estado de la matriz. Si esa jurisdicción subiera su tipo al 15 %, el grupo pagaría exactamente lo mismo y ella se quedaría los 1.500.000 € íntegros.",
            },
            {
              q: "¿Por qué el tipo mínimo global invierte el incentivo a la competencia fiscal?",
              a: "Porque por debajo del 15 % la carga total del grupo no depende del tipo local: bajarlo no ahorra nada a la empresa, solo transfiere recaudación a otro fisco. A la jurisdicción de baja tributación le conviene entonces subir al 15 % para quedarse ella ese importe, y varias han introducido impuestos complementarios nacionales por eso.",
            },
            {
              q: "¿Por qué se armonizó el IVA en Europa y no el Impuesto sobre Sociedades?",
              a: "Porque los impuestos indirectos en cascada obligaban a ajustes en frontera imposibles de calcular con exactitud, así que sin un impuesto común y deducible no había mercado interior. Sociedades no obstruye la circulación, y para varios Estados la fiscalidad ventajosa es su modelo económico: con la regla de unanimidad, quien más pierde puede vetar.",
            },
            {
              q: "¿Qué armoniza exactamente la Directiva del IVA y qué deja a cada Estado?",
              a: "Armoniza la estructura —hecho imponible, exenciones, reglas de localización— y fija tipos mínimos del 15 % general y 5 % reducido. Los tipos concretos por encima de ese suelo los elige cada Estado, y por eso varían tanto dentro de la Unión.",
            },
            {
              q: "¿Por qué el presupuesto europeo usa la Renta Nacional Bruta y no el PIB como regla de reparto?",
              a: "Porque el PIB mide la producción dentro del territorio y la RNB la renta de las unidades residentes, que es lo relevante para medir capacidad contributiva. Con el PIB, un país con mucha producción atribuible a no residentes contribuiría de más. La contrapartida es que una revisión metodológica del SEC cambia lo que cada Estado aporta.",
            },
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
              q: "¿Por qué la imposición indirecta está mucho más armonizada que la directa en la Unión Europea?",
              opciones: [
                "Porque las directivas fiscales indirectas se aprueban por mayoría cualificada y las directas por unanimidad",
                "Porque los impuestos directos son competencia exclusiva de los Estados según el Tratado",
                "Porque los impuestos indirectos obstruían el mercado interior y los directos no, y toda norma fiscal exige unanimidad",
                "Porque recauda más y por tanto interesa más a la Comisión",],
              correcta: 2,
              porque: [
                "Toda la fiscalidad exige unanimidad: no hay dos procedimientos distintos según el tipo de impuesto.",
                "No son competencia exclusiva: existen directivas de imposición directa, aunque solo antiobstáculo y antiabuso.",
                "Sin un impuesto común y deducible en cadena no se podían suprimir los ajustes fiscales en frontera.",
                "El criterio del Tratado es la necesidad para el mercado interior, no el volumen de recaudación.",],
            },
            {
              q: "Una filial con 10.000.000 € de beneficio tributa al 6 % en su jurisdicción. Con Pilar Dos, ¿qué ocurre?",
              opciones: [
                "Se le aplica una sanción equivalente a la diferencia de tipos",
                "La filial debe rectificar su declaración local y pagar allí el 15 %",
                "El Estado de la matriz cobra 900.000 € de impuesto complementario y el grupo paga 1.500.000 € en total",
                "El grupo queda exento del complemento si la jurisdicción no ha firmado el acuerdo",],
              correcta: 2,
              porque: [
                "No es una sanción sino un impuesto complementario: la conducta no es ilícita, simplemente se recauda la diferencia.",
                "La regla no obliga a la jurisdicción de la filial a nada: actúa sobre la matriz, aunque el territorio puede optar por cobrarlo él.",
                "Y la clave es que el grupo pagaría lo mismo si la jurisdicción cobrara el 15 %: solo cambia quién recauda.",
                "El mecanismo funciona precisamente cuando la jurisdicción de la filial no grava lo suficiente, con independencia de lo que haya firmado.",],
            },
            {
              q: "¿Qué es el «recurso propio del IVA» del presupuesto de la Unión?",
              opciones: [
                "Un porcentaje de la recaudación real de IVA que cada Estado ingresa directamente en la Unión",
                "Un porcentaje aplicado a una base de IVA armonizada estadísticamente, que transfiere cada Estado",
                "El importe del fraude de IVA que la Comisión reclama a los Estados",
                "Un IVA europeo que Bruselas cobra a las empresas transfronterizas",],
              correcta: 1,
              porque: [
                "No se calcula sobre la recaudación real sino sobre una base armonizada construida a efectos estadísticos.",
                "Y por eso su cuantía depende de una metodología, no de lo que cada Hacienda haya ingresado ese año.",
                "La brecha del IVA se mide y se publica, pero no constituye ningún recurso propio ni se reclama así.",
                "La Unión no tiene poder tributario ni Administración recaudatoria: no cobra impuestos a ningún contribuyente.",],
            },
            {
              q: "¿Qué efecto tiene el tipo mínimo global sobre la competencia fiscal entre Estados?",
              opciones: [
                "La intensifica, al fijar un suelo que los países tratan de esquivar bajando otros impuestos",
                "La elimina, porque todos los países pasan a aplicar el mismo tipo efectivo",
                "No la afecta, porque los grupos siguen pudiendo localizar beneficios donde quieran",
                "La desplaza hacia subvenciones, créditos fiscales cualificados y ayudas a la inversión",],
              correcta: 3,
              porque: [
                "El efecto documentado es el contrario en el tipo nominal: varios territorios lo han subido al 15 % para quedarse el complemento.",
                "Fija un suelo del 15 % para grandes grupos, no un tipo único: por encima sigue habiendo diferencias y otros contribuyentes quedan fuera.",
                "Sí la afecta: localizar beneficios en una jurisdicción por debajo del 15 % deja de producir ahorro alguno al grupo.",
                "El terreno de juego cambia porque las reglas tratan esos instrumentos de otro modo que una rebaja de tipo.",],
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
            { t: "Tratado de Funcionamiento de la UE, artículos 110 a 115", d: "La base competencial entera cabe en seis artículos: la prohibición de tributos discriminatorios sobre productos de otros Estados, la armonización de la imposición indirecta y la regla de unanimidad que lo condiciona todo." },
            { t: "Directiva 2006/112/CE del Consejo", d: "El texto del que deriva la Ley 37/1992 española. Comparar ambos artículo por artículo es la mejor manera de ver qué margen tiene realmente el legislador nacional en el IVA." },
            { t: "Directiva 2022/2523 y el Marco Inclusivo de la OCDE sobre BEPS", d: "La transposición europea del tipo mínimo global y los documentos originales del Pilar Dos, incluidas las reglas de cálculo del tipo efectivo y la exclusión de rentas vinculada a sustancia que el ejemplo simplifica." },
            { t: "Comisión Europea, Taxation Trends in the European Union", d: "Compara estructura impositiva, tipos legales y tipos efectivos entre Estados miembros con metodología homogénea. Es la fuente para ver de un vistazo cuánta divergencia sobrevive a la armonización." },
          ],
        },
      ],
    },
  ],
};
