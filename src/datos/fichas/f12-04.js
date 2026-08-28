/* Ficha 12.04 — Rentas de la propiedad y el saldo de rentas primarias. */

export default {
  codigo: "12.04",
  titulo: "Rentas de la propiedad y el saldo de rentas primarias",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "Aquí la renta deja de seguir a quien la produjo y pasa a quien tiene derecho sobre ella. Intereses, dividendos y beneficios reinvertidos cruzan sectores y fronteras, y su suma sectorial es exactamente la renta nacional bruta.",
  requiere: "12.03 La cuenta de explotación · 10.07 Producción, VAB y PIB",
  abre: "12.05 SIFMI y seguros · 12.06 Distribución secundaria · 12.10 El resto del mundo",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La **cuenta de asignación de la renta primaria** hace un giro que conviene señalar porque cambia el punto de vista de todo el sistema. Hasta aquí las unidades aparecían como **productoras**: generaban valor añadido y lo repartían entre los factores que emplearon. A partir de ahora aparecen como **perceptoras**: reciben rentas por ser propietarias de activos, con independencia de dónde se haya producido el valor. Esa distinción entre producir y percibir es la que separa el PIB de la renta nacional.",
            "**Las rentas de la propiedad (D.4) son la contrapartida por ceder un activo financiero o un recurso natural a otro**, y el SEC las desglosa en cinco familias que merece la pena conocer una a una. Los **intereses (D.41)** remuneran depósitos, préstamos y valores de renta fija. Las **rentas distribuidas de las sociedades (D.42)** incluyen los **dividendos (D.421)** y las **rentas retiradas de las cuasisociedades (D.422)**, que es lo que el propietario de una sucursal extranjera saca del negocio. Los **beneficios reinvertidos de la inversión extranjera directa (D.43)** son la partida más contraintuitiva y la explicaremos aparte. Las **rentas de la inversión atribuidas (D.44)** son las que generan las reservas de seguros, los fondos de pensiones y los fondos de inversión, y que el sistema atribuye a los asegurados y partícipes aunque no las cobren. Y las **rentas de la tierra (D.45)** remuneran el uso de recursos naturales.",
            "**Los beneficios reinvertidos merecen un párrafo propio porque no se pagan y aun así se registran.** Si una empresa española tiene una filial en México que gana 100 y reparte 40 en dividendos, los otros 60 se quedan en México. El SEC hace una doble ficción: **imputa que la filial los distribuye a la matriz** —y por tanto son renta primaria española— **y que la matriz los reinvierte inmediatamente** en la filial, apareciendo como una inversión en la cuenta financiera. El motivo es económico y sólido: **la decisión de no repartir es de la matriz**, y si no se imputara, un grupo podría reducir a voluntad la renta nacional de su país sin más que dejar de repartir dividendos.",
            "**El saldo de esta cuenta es el saldo de rentas primarias (B.5)**, y su agregado tiene un nombre que ya conocemos. Sumando el saldo de rentas primarias de todos los sectores residentes se obtiene exactamente **la renta nacional bruta**, la RNB de la ficha 10.06. Dicho de otro modo: la renta nacional no es un agregado independiente, es **la suma de los saldos de una cuenta sectorial**, y esa es una de esas relaciones que ordena el sistema entero en cuanto se ve.",
            "**Y de aquí sale la trampa clásica del bloque, que conviene resolver despacio.** ¿Es el saldo de rentas primarias de un sector siempre mayor que su valor añadido? **No.** Lo será para un sector que cobre más rentas de las que paga —los hogares, típicamente, porque son propietarios últimos de casi todo—, pero **será menor para un sector endeudado que pague más intereses de los que cobra**, que es la situación normal de las sociedades no financieras. Un sector puede generar mucho valor añadido y quedarse con poca renta primaria si buena parte se le va en intereses y dividendos hacia otros.",
            "**Hay dos ajustes que atraviesan esta cuenta y conviene anunciarlos.** El primero son los **SIFMI**: los intereses que aquí se registran **no son los efectivamente pagados**, sino los efectivamente pagados corregidos del margen que cobra el intermediario, y la ficha 12.05 explica el mecanismo entero. El segundo es que las **rentas de inversión atribuidas a los asegurados (D.44)** se registran como si la aseguradora las pagara a sus clientes, aunque el cliente no vea ese dinero: es la contrapartida de que las reservas técnicas se consideran propiedad del asegurado y no de la compañía.",
            "**Un apunte sobre las fuentes, porque explica la desigual calidad de estas cifras.** Los intereses se estiman a partir de las cuentas de las instituciones financieras y de los balances financieros que compila el banco central; los dividendos, en buena parte por diferencia entre lo que se sabe que reciben unos sectores y el total; las rentas de inversión atribuidas, con las cuentas técnicas de las aseguradoras y los fondos. Y las **rentas de la tierra** se estiman con muy poca información directa, lo que las convierte en la partida más frágil de la cuenta.",
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
            { nom: "Cambio de perspectiva", sub: "De productor a perceptor de renta.", cols: ["quién genera $\\neq$ quién percibe"] },
            { nom: "Saldo de rentas primarias", sub: "El saldo de esta cuenta.", cols: ["B.5 = B.2/B.3 + D.1r + D.4r − D.4p"] },
            { nom: "Renta nacional bruta", sub: "No es un agregado aparte: es una suma sectorial.", cols: ["RNB $= \\sum$ B.5g de los sectores residentes"] },
            { nom: "Intereses", sub: "Ajustados por SIFMI, no los efectivos.", cols: ["D.41"] },
            { nom: "Rentas distribuidas", sub: "Dividendos y retiradas de cuasisociedades.", cols: ["D.42 = D.421 + D.422"] },
            { nom: "Beneficios reinvertidos", sub: "Se imputan aunque no se paguen.", cols: ["D.43 — inversión extranjera directa"] },
            { nom: "Rentas de inversión atribuidas", sub: "Las reservas son del asegurado, no de la compañía.", cols: ["D.44 — seguros, pensiones, fondos"] },
            { nom: "Rentas de la tierra", sub: "La partida con peores fuentes.", cols: ["D.45 — recursos naturales"] },
            { nom: "La trampa", sub: "Depende de si el sector es acreedor o deudor.", cols: ["B.5 puede ser mayor o menor que el VAB"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: del PIB a la renta nacional",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La economía de la ficha 10.06 tenía un PIB de **1.000** y una renta nacional bruta de **980**, con unas rentas de la propiedad netas de **−20** frente al exterior. Abrimos ahora ese −20 y vemos de qué está hecho.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Operación", "Código", "A cobrar", "A pagar", "Neto"],
          filas: [
            ["Intereses", "D.41", "34", "58", "−24"],
            ["Dividendos", "D.421", "26", "31", "−5"],
            ["Rentas retiradas de cuasisociedades", "D.422", "4", "3", "+1"],
            ["Beneficios reinvertidos de la IED", "D.43", "19", "11", "+8"],
            ["Rentas de inversión atribuidas", "D.44", "3", "3", "0"],
            ["Rentas de la tierra", "D.45", "1", "1", "0"],
            { celdas: ["Total rentas de la propiedad", "D.4", "87", "107", "−20"], clase: "total" },
            ["PIB → Renta nacional bruta", "B.5g", "1.000", "—", "980"],
          ],
          nota: "Los **−24 de intereses** son la firma de una economía con posición deudora frente al exterior: se paga más por lo que se debe que lo que se cobra por lo que se presta. Los **+8 de beneficios reinvertidos** son la partida que nadie ve, porque no hay ningún flujo de dinero: son beneficios que las filiales exteriores de empresas residentes han decidido no repartir, y que el sistema imputa igualmente como renta nacional. Y el resultado es el que ya conocíamos: **el PIB mide lo producido en el territorio, 1.000, y la renta nacional lo que se quedan los residentes, 980**. La diferencia es esa renta que se va fuera.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la trampa.** Dos sectores de la misma economía, con el mismo valor añadido de 100. El primero está endeudado; el segundo es el propietario último de los activos del país.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Sector", y: "Importe" },
          dominio: { x: [0, 2], y: [0, 145] },
          marcasX: [],
          marcasY: [0, 50, 100, 140],
          areas: [
            { puntos: [[0.12, 0], [0.12, 100], [0.46, 100], [0.46, 0]], color: "n2" },
            { puntos: [[0.54, 0], [0.54, 72], [0.88, 72], [0.88, 0]], color: "alerta" },
            { puntos: [[1.12, 0], [1.12, 100], [1.46, 100], [1.46, 0]], color: "n2" },
            { puntos: [[1.54, 0], [1.54, 132], [1.88, 132], [1.88, 0]], color: "acento" },
          ],
          notas: [
            { x: 0.29, y: 106, texto: "VAB 100", ancla: "middle" },
            { x: 0.71, y: 78, texto: "B.5 = 72", ancla: "middle" },
            { x: 1.29, y: 106, texto: "VAB 100", ancla: "middle" },
            { x: 1.71, y: 138, texto: "B.5 = 132", ancla: "middle" },
            { x: 0.5, y: -18, texto: "Sociedades endeudadas", ancla: "middle" },
            { x: 1.5, y: -18, texto: "Hogares acreedores", ancla: "middle" },
          ],
          nota: "Los dos sectores generan **el mismo valor añadido** y se quedan con rentas primarias muy distintas. Las sociedades pagan intereses por su deuda y dividendos a sus accionistas, así que su saldo de rentas primarias **cae por debajo** de su valor añadido. Los hogares reciben esos intereses y esos dividendos —son, en última instancia, los propietarios de todo— así que el suyo **sube por encima**. De ahí la respuesta a la pregunta clásica: **el saldo de rentas primarias no es siempre mayor que el valor añadido**; depende de si el sector es acreedor o deudor neto. Y de ahí también que los datos del INE muestren a los hogares pagando más intereses de los que cobran mientras las sociedades cobran más dividendos de los que pagan: cada sector tiene su propio patrón.",
        },
        {
          tipo: "tabla",
          cabecera: ["Flujo", "S.11 sociedades", "S.14 hogares"],
          filas: [
            ["Intereses recibidos", "19,8 %", "9,6 %"],
            ["Intereses pagados", "6,2 %", "16,3 %"],
            { celdas: ["Dividendos cobrados", "40,7 %", "24,1 %"], clase: "total" },
          ],
          nota: "Porcentajes sobre el total de cada flujo en la economía española, según el curso de cuentas nacionales del INE. La lectura es la que cabía esperar: **los hogares pagan más intereses de los que cobran** —el peso de las hipotecas—, mientras que **las sociedades cobran casi el doble de intereses de los que pagan**, lo que refleja tanto su tesorería como los préstamos dentro de los grupos empresariales. Y la fila de dividendos recuerda algo del bloque anterior: buena parte de los dividendos que pagan unas sociedades los cobran otras sociedades, no las familias, porque las cadenas de participación empresarial son largas.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el PIB y la renta nacional se separan",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En la mayoría de los países la diferencia entre el PIB y la renta nacional bruta es pequeña y nadie le presta atención. En algunos es enorme, y entender por qué enseña más sobre esta cuenta que cualquier definición.",
            "**El mecanismo es siempre el mismo: rentas de la propiedad que cruzan la frontera.** Un país donde una parte grande del capital productivo es propiedad de no residentes genera mucho valor añadido en su territorio y ve salir buena parte en dividendos, intereses y beneficios reinvertidos. Su **PIB es alto y su renta nacional, bastante menor**. Es la situación de las economías con mucha inversión extranjera directa acumulada.",
            "**El caso contrario también existe y produce cifras espectaculares.** Un país que aloja sedes de multinacionales, filiales financieras o activos intangibles registrados por motivos fiscales puede ver su PIB inflado por producción que se le atribuye contablemente sin corresponder a actividad real en su territorio, y a la vez tener una renta nacional muy distinta según a quién pertenezcan esos beneficios. Las revisiones de PIB de dos cifras que se han visto en algún país europeo por reubicación de activos intangibles son de esta naturaleza, y la ficha 11.07 lo mencionaba a propósito de los precios de transferencia.",
            "**Para España el efecto es moderado y sistemáticamente negativo**, y su composición es instructiva. Se pagan al exterior más intereses de los que se cobran —posición deudora externa acumulada— y más dividendos de los que se reciben, y en sentido contrario juegan los beneficios reinvertidos de las filiales exteriores de empresas españolas, que han crecido con la internacionalización. El resultado neto es que **la renta nacional bruta queda algo por debajo del PIB**, con una brecha que se mueve con los tipos de interés y con los beneficios de las multinacionales.",
            "**La consecuencia práctica es cuál de los dos indicadores usar.** Para medir **actividad económica en un territorio** —empleo, capacidad productiva, recaudación potencial— el PIB es el indicador correcto. Para medir **cuánta renta se quedan los residentes** —bienestar material, capacidad de consumo y ahorro del país— lo correcto es la renta nacional. La costumbre de usar el PIB para todo es un atajo que en la mayoría de países no hace daño y en algunos produce afirmaciones sencillamente falsas.",
            "**Y un matiz final que conviene tener presente.** Ni siquiera la renta nacional bruta mide lo que se puede gastar, porque todavía faltan las transferencias corrientes de la ficha 12.07 para llegar a la **renta disponible**. La secuencia entera —PIB, renta nacional, renta disponible— existe precisamente porque cada paso responde a una pregunta distinta, y confundir los tres es el error que la ficha 10.06 pedía evitar leyendo los agregados como eslabones de una cadena y no como cifras sueltas.",
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
            { t: "Creer que el saldo de rentas primarias supera siempre al valor añadido", d: "Depende de si el sector es acreedor o deudor neto. Un sector endeudado que paga más intereses y dividendos de los que cobra tiene un saldo de rentas primarias inferior a su valor añadido, que es la situación normal de las sociedades no financieras. Es la pregunta trampa clásica del bloque." },
            { t: "Buscar la renta nacional como un agregado independiente", d: "Es la suma de los saldos de rentas primarias de todos los sectores residentes. No se calcula aparte: emerge de sumar el saldo de una cuenta sectorial. Verlo así ordena el sistema, porque convierte un agregado aparentemente arbitrario en el resultado de una cuenta." },
            { t: "Ignorar los beneficios reinvertidos porque no se pagan", d: "El SEC imputa que la filial los distribuye a la matriz y que esta los reinvierte de inmediato. Si no lo hiciera, un grupo podría reducir a voluntad la renta nacional de su país sin más que dejar de repartir dividendos. La decisión de no repartir es de la matriz, y por eso la renta se le atribuye." },
            { t: "Tomar los intereses de esta cuenta como los efectivamente pagados", d: "Están ajustados por SIFMI: se les ha quitado el margen que cobra el intermediario financiero, que se registra como producción de servicios y no como renta. Los intereses del banco y los intereses del SEC no coinciden, y la ficha 12.05 explica el mecanismo completo." },
            { t: "Usar el PIB para hablar de la renta de los residentes", d: "El PIB mide producción en el territorio y la renta nacional mide lo que se quedan los residentes. En países con mucho capital extranjero o con sedes de multinacionales la diferencia es grande, y usar uno por otro produce afirmaciones falsas sobre el bienestar material del país." },
            { t: "Suponer que las rentas atribuidas a los asegurados se cobran", d: "D.44 registra las rentas que generan las reservas de seguros y fondos como si la entidad las pagara a sus clientes, porque esas reservas se consideran propiedad del asegurado y no de la compañía. El cliente no ve ese dinero, y aun así es renta primaria suya." },
            { t: "Fiarse igual de todas las partidas de la cuenta", d: "Los intereses se estiman con los balances financieros del banco central y son relativamente sólidos; los dividendos, en buena parte por diferencia; y las rentas de la tierra apenas cuentan con información directa. La fiabilidad dentro de una misma cuenta es muy desigual y rara vez se advierte." },
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
            "Esta cuenta es la bisagra entre el territorio y la nacionalidad, y de ella salen varios agregados centrales.",
          ],
          lista: [
            "El paso del **PIB a la renta nacional bruta** ocurre exactamente aquí, y es la distinción entre el criterio de territorio y el de residencia que la ficha 12.01 estableció. Sumar los saldos de rentas primarias de todos los sectores da la RNB de la ficha 10.06.",
            "Las **rentas de la propiedad con el exterior** son la partida principal de la cuenta de rentas primarias del sector resto del mundo de la ficha 12.10, y en el caso español son de una magnitud que empequeñece a las transferencias. Explican buena parte de por qué el saldo de operaciones corrientes es menor que el saldo comercial.",
            "Los **intereses de esta cuenta** son la base del análisis de la carga financiera de la deuda pública de la ficha 3.11 y de la sostenibilidad. El diferencial entre el tipo de interés y el crecimiento que determina la dinámica de la deuda se alimenta de aquí.",
            "Las **cuentas financieras** del banco central son la contrapartida de esta cuenta: los intereses de D.41 se generan sobre los saldos de préstamos y depósitos que aquellas registran, y su coherencia mutua es una de las comprobaciones de calidad del sistema.",
            "Y los **beneficios reinvertidos** tienen contrapartida obligatoria en la cuenta financiera como inversión extranjera directa, de modo que un flujo imputado que no mueve dinero genera dos apuntes que deben cuadrar. Es un buen ejemplo de cómo el sistema se cierra sobre sí mismo.",
          ],
          cierre:
            "El punto que conviene retener es que **esta cuenta no crea renta: la traslada**. Todo lo que aparece aquí se generó en la cuenta de explotación de alguien, y lo único que se decide es a qué sector y a qué país se atribuye. Las discusiones sobre dónde tributan los beneficios de las multinacionales son, contablemente, discusiones sobre esta cuenta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Es el saldo de rentas primarias de un sector siempre superior a su valor añadido?", a: "No. Lo será si el sector cobra más rentas de las que paga, como suele ocurrir con los hogares, propietarios últimos de casi todo. Será inferior si el sector está endeudado y paga más intereses y dividendos de los que recibe, que es la situación normal de las sociedades no financieras. Depende de la posición acreedora o deudora, no del tamaño del sector." },
            { q: "¿Cómo se obtiene la renta nacional bruta?", a: "Sumando los saldos de rentas primarias de todos los sectores institucionales residentes. No es un agregado que se calcule aparte: emerge de sumar el saldo de una cuenta sectorial, y verlo así convierte una cifra aparentemente arbitraria en el resultado natural de la secuencia." },
            { q: "Una filial mexicana gana 100 y reparte 40. ¿Qué pasa con los otros 60?", a: "Se imputan como renta primaria del país de la matriz, mediante una doble ficción: se supone que la filial los distribuye y que la matriz los reinvierte de inmediato, apareciendo como inversión en la cuenta financiera. El motivo es que la decisión de no repartir es de la matriz; sin la imputación, un grupo podría reducir a voluntad la renta nacional de su país." },
            { q: "El PIB es 1.000 y la renta nacional 980. ¿De dónde salen los 20?", a: "De rentas de la propiedad netas hacia el exterior. En el desglose son sobre todo intereses, con −24 netos por una posición deudora externa, y dividendos, con −5, compensados en parte por +8 de beneficios reinvertidos de filiales exteriores de empresas residentes. El PIB mide lo producido en el territorio y la renta nacional lo que se quedan los residentes." },
            { q: "¿Son los intereses de D.41 los que cobra el banco?", a: "No: están ajustados por SIFMI, es decir, se les ha descontado el margen que el intermediario cobra por su servicio, que el sistema registra como producción y no como renta. Los intereses del extracto bancario y los del SEC no coinciden, y el mecanismo completo es el objeto de la ficha 12.05." },
            { q: "¿Qué registra D.44 y por qué es contraintuitivo?", a: "Las rentas que generan las reservas de seguros, fondos de pensiones y fondos de inversión, registradas como si la entidad las pagara a sus asegurados y partícipes. Es contraintuitivo porque el cliente no ve ese dinero, y se hace así porque el SEC considera que esas reservas son propiedad del asegurado y no de la compañía." },
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
              q: "Una filial retiene sus beneficios y no reparte dividendo a su matriz extranjera. ¿Cómo lo registra el SEC?",
              opciones: [
                "Imputa que la filial los distribuye a la matriz y que esta los reinvierte de inmediato",
                "Como un aumento de las reservas de la filial, sin efecto en la renta nacional",
                "Como una transferencia de capital al final del ejercicio",
                "No lo registra: sin pago no hay operación",
              ],
              correcta: 0,
              porque: [
                "Es una imputación en dos pasos que deja la renta atribuida a quien tiene derecho a ella y el dinero donde está.",
                "Las reservas aumentan, y la renta ya se ha generado y pertenece económicamente al propietario extranjero.",
                "No es capital: es renta de la propiedad del ejercicio.",
                "Si no se registrara, un grupo podría reducir a voluntad la renta nacional de un país sencillamente no repartiendo dividendos.",
              ],
            },
            {
              q: "Los intereses de esta cuenta no coinciden con los que aparecen en los contratos. ¿Por qué?",
              opciones: [
                "Porque se expresan en términos reales, descontada la inflación",
                "Porque se netean los cobrados contra los pagados",
                "Porque están ajustados por SIFMI: se les ha quitado el margen del intermediario financiero, que es producción de servicios y no renta",
                "Porque se registran en devengo y no en caja",
              ],
              correcta: 2,
              porque: [
                "Las cuentas nacionales no deflactan los intereses en esta cuenta.",
                "Se registran por separado los cobrados y los pagados; el neteo no es la razón de la discrepancia.",
                "El banco cobra al prestatario más de lo que paga al depositante, y esa diferencia retribuye un servicio. El SEC la saca de aquí y la lleva a producción.",
                "El devengo afecta al momento de registro, no a la cuantía del interés.",
              ],
            },
            {
              q: "Un país acoge muchas filiales de multinacionales extranjeras. ¿Qué agregado describe mejor la renta de sus residentes?",
              opciones: [
                "El valor añadido bruto a precios básicos",
                "El PIB, que mide toda la actividad económica del país",
                "La renta nacional, porque el PIB mide producción en el territorio y parte de esa renta sale hacia los propietarios extranjeros",
                "El PIB per cápita, que corrige por población",
              ],
              correcta: 2,
              porque: [
                "El valor añadido a precios básicos es una variante del PIB y tiene el mismo problema.",
                "El PIB mide dónde se produce, no quién se queda el resultado. En estos países la brecha entre ambas cosas es enorme.",
                "Irlanda es el caso extremo: su PIB y su renta nacional cuentan historias muy distintas sobre lo que reciben sus residentes.",
                "Corregir por población no corrige la salida de rentas hacia el exterior.",
              ],
            },
            {
              q: "¿Son igual de fiables todas las partidas de la cuenta de rentas de la propiedad?",
              opciones: [
                "No: las más fiables son los dividendos, por estar auditados en las cuentas anuales",
                "Sí: todas proceden de registros administrativos",
                "No: los intereses se estiman con los balances financieros del banco central y son sólidos; los dividendos, en buena parte por diferencia",
                "Sí, salvo en los años de cambio metodológico",
              ],
              correcta: 2,
              porque: [
                "Los dividendos se obtienen en buena parte por diferencia, que es precisamente lo que los hace menos sólidos.",
                "Las cuentas nacionales combinan registros, encuestas y estimaciones residuales, y no todo tiene la misma calidad.",
                "Conviene saber qué partida soporta cuánto peso analítico: no todas están estimadas con la misma solidez.",
                "Los cambios metodológicos afectan a toda la serie; la desigual fiabilidad entre partidas es permanente.",
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
            { ref: "SEC 2010, capítulo 4 — operación D.4", nota: "el desglose completo de las rentas de la propiedad con sus subcategorías y sus reglas de registro." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre renta nacional explica bien la diferencia entre territorio y residencia y los casos extremos." },
            { ref: "Banco de España, Cuentas Financieras de la Economía Española", nota: "la contrapartida de esta cuenta: los saldos sobre los que se generan intereses y dividendos." },
            { ref: "FMI, Manual de Balanza de Pagos (MBP6), capítulo sobre renta primaria", nota: "el tratamiento de los beneficios reinvertidos de la inversión extranjera directa, con ejemplos." },
            { ref: "INE, Curso de Cuentas Nacionales — cuenta de asignación de la renta primaria", nota: "las fuentes con que se estima cada partida en España y cuáles son las más frágiles." },
          ],
        },
      ],
    },
  ],
};
