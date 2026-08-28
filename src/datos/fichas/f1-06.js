/* Ficha 1.06 — Flujo circular de la renta y agentes economicos. */

export default {
  codigo: "1.06",
  titulo: "Flujo circular de la renta y agentes económicos",
  nivel: 1,
  bloque: "Fundamentos y método económico",
  tiempo: "3 h",
  nucleo:
    "Producción, renta y gasto son tres formas de mirar el mismo flujo. La identidad es contable, no empírica: se cumple por construcción, y confundir esa igualdad forzosa con una relación de causa a efecto es el origen de media docena de errores macroeconómicos muy populares.",
  requiere: "1.01 Escasez y coste de oportunidad",
  abre: "3.01 PIB y agregados · 3.04 Multiplicadores · 10.06 SEC 2010",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **flujo circular** es el esquema más simple posible de una economía y, pese a ello, contiene la estructura entera de la contabilidad nacional. En su versión mínima hay dos agentes: **hogares**, que poseen los factores productivos y consumen, y **empresas**, que producen. Entre ellos circulan dos flujos en sentidos opuestos. Uno es **real**: los hogares entregan trabajo y capital, y reciben bienes y servicios. El otro es **monetario**: las empresas pagan rentas por esos factores, y los hogares gastan esas rentas comprando la producción. Cada euro que sale por un lado entra por el otro, y de ahí el nombre.",
            "De esa circularidad se sigue la idea central: **el valor de lo producido, el de las rentas generadas y el del gasto realizado son necesariamente iguales**, porque son el mismo flujo medido en tres puntos distintos del circuito. No es una regularidad empírica que pudiera resultar falsa: es una **identidad contable**, cierta por construcción. Y por eso la contabilidad nacional puede calcular el PIB por tres caminos independientes y exigir que cuadren, lo que constituye su principal control de calidad.",
            "El **enfoque de la producción** suma el valor añadido de cada unidad productiva, es decir, su producción menos los bienes y servicios que ha comprado a otras para fabricarla. La razón de restar esos consumos intermedios es evitar la **doble contabilización**: si se sumara la facturación de todas las empresas, el trigo se contaría dentro de la harina y la harina dentro del pan. Sumando solo lo que cada una añade, el total coincide exactamente con el valor de los bienes finales, que es la magnitud que se quiere medir.",
            "El **enfoque de la renta** suma lo que se reparte entre quienes han participado: remuneración de los asalariados, excedente de explotación y renta mixta, más los impuestos netos sobre la producción. Y el **enfoque del gasto** suma quién se lleva la producción: consumo de los hogares, consumo público, inversión y exportaciones netas. De este último sale la identidad más citada de la macroeconomía, **Y = C + I + G + (X − M)**, que la ficha 3.04 convertirá en un modelo de comportamiento y que aquí, de momento, **solo es una definición**.",
            "El esquema mínimo se completa añadiendo tres cosas. Las **filtraciones** —ahorro, impuestos e importaciones— son renta que sale del circuito interno, y las **inyecciones** —inversión, gasto público y exportaciones— la reintroducen. El circuito se cierra con dos agentes más: el **sector público**, que recauda y gasta, y el **resto del mundo**, que compra y vende. Y aparece el **sistema financiero** como pieza imprescindible, porque es el que conecta el ahorro con la inversión: **sin alguien que canalice lo filtrado hacia lo inyectado, el circuito no se cerraría**. Ahí está el papel de los bancos de la ficha 8.01.",
            "Conviene terminar con la advertencia más importante y la que más veces hay que repetir: **una identidad no explica nada**. Que el ahorro iguale a la inversión en las cuentas de una economía cerrada no significa que ahorrar cause inversión, ni al revés; significa que las dos magnitudes se han definido de modo que su diferencia sea cero. Las identidades sirven para **organizar la información y detectar incoherencias**, no para establecer causalidad. Toda afirmación causal exige un modelo de comportamiento —qué decide cada agente y por qué— y contrastarlo con datos, que es de lo que se ocupa el bloque 4.",
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
            { nom: "Identidad fundamental", sub: "Tres medidas del mismo flujo.", cols: ["Producción = Renta = Gasto"] },
            { nom: "Valor añadido", sub: "Evita la doble contabilización.", cols: ["VAB = Producción − Consumos intermedios"] },
            { nom: "Del VAB al PIB", sub: "Los impuestos netos no son valor añadido de nadie.", cols: ["$\\mathrm{PIB} = \\sum \\mathrm{VAB} + \\text{Impuestos netos sobre productos}$"] },
            { nom: "Enfoque de la renta", sub: "Cómo se reparte lo producido.", cols: ["PIB = Remuneración + EBE + Renta mixta + Imp. netos"] },
            { nom: "Enfoque del gasto", sub: "Quién se lleva lo producido; es una definición.", cols: ["PIB = C + I + G + (X − M)"] },
            { nom: "Filtraciones", sub: "Renta que sale del circuito interno.", cols: ["S + T + M"] },
            { nom: "Inyecciones", sub: "Gasto que entra sin proceder de la renta corriente.", cols: ["I + G + X"] },
            { nom: "Equilibrio del circuito", sub: "Se cumple siempre, no es una condición.", cols: ["S + T + M = I + G + X"] },
            { nom: "Saldos sectoriales", sub: "La suma de los tres saldos es cero por construcción.", cols: ["(S − I) + (T − G) + (M − X) = 0"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la misma cifra por tres caminos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, por qué hay que restar los consumos intermedios.** Sigamos una cadena de tres eslabones. Un agricultor vende trigo por 100 sin comprar nada a nadie. Un molino compra ese trigo y vende harina por 180. Una panadería compra la harina y vende pan por 300.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Etapa", "Ventas", "Compras a otros", "Valor añadido"],
          filas: [
            ["Agricultor", "100", "0", "100"],
            ["Molino", "180", "100", "80"],
            ["Panadería", "300", "180", "120"],
            { celdas: ["Total", "580", "280", "300"], clase: "total" },
          ],
          nota: "Sumar la facturación daría **580**, contando el trigo tres veces y la harina dos. Sumando el valor añadido se obtienen **300**, que es exactamente el precio del único bien final producido: el pan. La coincidencia no es casual, es la razón de ser del concepto: **la suma de los valores añadidos de una cadena es siempre el valor de su producto final**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la economía completa.** Una economía ficticia se resume en las tres columnas siguientes. Están calculadas de forma independiente, con fuentes distintas, y deben cuadrar.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Producción", "", "Renta", "", "Gasto", ""],
          filas: [
            ["VAB agricultura", "200", "Remuneración de asalariados", "1.000", "Consumo de los hogares", "1.300"],
            ["VAB industria", "500", "Excedente y renta mixta", "800", "Consumo público", "400"],
            ["VAB servicios", "1.100", "Impuestos netos", "200", "Inversión", "400"],
            ["Impuestos netos", "200", "—", "—", "Exportaciones − Importaciones", "−100"],
            { celdas: ["PIB", "2.000", "PIB", "2.000", "PIB", "2.000"], clase: "total" },
          ],
          nota: "Las tres columnas dan **2.000** porque miden lo mismo en tres puntos del circuito: lo que se fabrica, lo que se cobra por fabricarlo y quién se lo lleva. En la práctica los tres cálculos usan fuentes distintas y **nunca coinciden exactamente**; la diferencia se llama discrepancia estadística y su tamaño es un indicador de la calidad de las cuentas. Nótese además que las exportaciones netas son negativas: esta economía **absorbe más de lo que produce**, y esa diferencia tiene que financiarse desde fuera.",
        },
        {
          tipo: "grafico",
          alto: 300,
          ejes: {},
          dominio: { x: [0, 100], y: [0, 100] },
          marcasX: [],
          marcasY: [],
          series: [
            { nombre: "", color: "tinta", puntos: [[6, 40], [34, 40], [34, 65], [6, 65], [6, 40]] },
            { nombre: "", color: "tinta", puntos: [[66, 40], [94, 40], [94, 65], [66, 65], [66, 40]] },
            { nombre: "", color: "acento", flecha: true, puntos: [[34, 61], [50, 76], [66, 61]] },
            { nombre: "", color: "tinta2", flecha: true, puntos: [[66, 52], [50, 60], [34, 52]] },
            { nombre: "", color: "tinta2", flecha: true, puntos: [[34, 44], [50, 36], [66, 44]] },
            { nombre: "", color: "acento", flecha: true, puntos: [[66, 35], [50, 20], [34, 35]] },
          ],
          notas: [
            { x: 20, y: 51, texto: "HOGARES" },
            { x: 80, y: 51, texto: "EMPRESAS" },
            { x: 50, y: 82, texto: "Gasto en bienes y servicios" },
            { x: 50, y: 64, texto: "Bienes y servicios" },
            { x: 50, y: 32, texto: "Trabajo y capital" },
            { x: 50, y: 14, texto: "Salarios, rentas y beneficios" },
          ],
          nota: "Los dos flujos **verdes son monetarios** y los dos grises, **reales**. Cada euro que las empresas pagan en rentas vuelve a ellas como gasto, y cada bien que producen se corresponde con un factor que han empleado. Medir el circuito en el flujo superior da el **gasto**; medirlo en el inferior da la **renta**; medir lo que ocurre dentro de las empresas da la **producción**. Tres cifras, un solo flujo: por eso la identidad no puede fallar.",
        },
      ],
    },
    {
      titulo: "Caso práctico: los saldos sectoriales, o por qué no todos pueden ahorrar a la vez",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay una aplicación del flujo circular que aparece constantemente en el debate público y que casi siempre se argumenta mal: la idea de que un país debe reducir su déficit público sin que nadie más cambie de conducta. El circuito impone una restricción que hace esa afirmación, tal como suele formularse, imposible.",
            "**El punto de partida es una identidad de la formalización**: la suma del saldo del sector privado, el del sector público y el del exterior es **necesariamente cero**. Si el sector privado gasta menos de lo que ingresa, alguien tiene que gastar más de lo que ingresa: o el Estado, o el resto del mundo. No es una teoría económica ni una preferencia política; es aritmética del circuito, tan inevitable como que la suma de los saldos de un balance cuadre.",
            "**La consecuencia práctica es incómoda.** Reducir el déficit público exige que mejore el saldo exterior o que empeore el del sector privado, es decir, que las familias y empresas ahorren menos o se endeuden más. Si el resto del mundo no absorbe esa diferencia —porque los socios comerciales están haciendo lo mismo, por ejemplo— **el ajuste tiene que recaer sobre el sector privado**. Cualquier plan que prometa a la vez menos déficit público, más ahorro privado y un saldo exterior constante está prometiendo algo que no puede ocurrir.",
            "**Aquí es donde hay que tener mucho cuidado, y es la lección de método de la ficha.** La identidad dice qué combinaciones son posibles; **no dice cómo se alcanzan ni qué pasa por el camino**. En particular, no dice que reducir el déficit público sea imposible ni indeseable: dice que su contrapartida existe y que conviene identificarla antes de dar el plan por bueno. El mecanismo por el que se produce el ajuste —vía renta, vía tipo de interés, vía tipo de cambio— es una cuestión de comportamiento y necesita el modelo de la ficha 3.04 o el de la 3.10.",
            "**El error simétrico también es frecuente.** Del hecho de que los saldos sumen cero algunos deducen que el déficit público es irrelevante o que siempre puede sostenerse. Tampoco se sigue: la identidad no dice nada sobre la **sostenibilidad** de cada saldo, que depende del tipo de interés, del crecimiento y de la disposición de alguien a financiarlo. Una identidad restringe el conjunto de resultados posibles; dentro de él, todo lo demás sigue siendo discutible.",
            "**Y esto es exactamente lo que la ficha quiere enseñar.** Una identidad contable es una herramienta de disciplina: obliga a que cualquier relato sobre la economía cuadre. Quien afirma que todos los sectores mejorarán su saldo a la vez está diciendo algo aritméticamente falso, y detectarlo no exige ningún modelo. Pero quien cree que la identidad ya contiene la explicación está cometiendo el error contrario, que es más sutil y bastante más común entre quienes acaban de descubrirla.",
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
            { t: "Tomar una identidad contable por una relación causal", d: "Que el ahorro iguale a la inversión no significa que uno cause el otro: significa que se han definido de modo que su diferencia sea nula. Las identidades organizan la información y detectan incoherencias; explicar exige un modelo de conducta y contrastarlo." },
            { t: "Sumar la facturación de todas las empresas para obtener el PIB", d: "Se contaría varias veces el mismo valor: el trigo dentro de la harina y la harina dentro del pan. Por eso se suma el valor añadido, y su total coincide exactamente con el valor de los bienes finales, que es lo que se quiere medir." },
            { t: "Confundir producción con producto final", d: "La producción total de una economía es muy superior a su PIB, porque incluye todo lo que unas empresas venden a otras. El PIB solo recoge el valor añadido, es decir, la parte que no ha sido comprada a un tercero." },
            { t: "Creer que Y = C + I + G + (X − M) es una teoría", d: "Es una definición del gasto, cierta por construcción. Se convierte en modelo solo cuando se especifica de qué depende cada componente: qué determina el consumo, qué la inversión. Ese paso lo da la ficha 3.04, y es el que introduce la posibilidad de estar equivocado." },
            { t: "Olvidar el papel del sistema financiero en el circuito", d: "El ahorro sale del flujo y la inversión entra en él; alguien tiene que conectar ambos. Si esa canalización falla —una crisis bancaria—, el circuito no se cierra aunque la identidad contable siga cumpliéndose ex post, porque el ajuste se produce vía caída de renta." },
            { t: "Pensar que todos los sectores pueden mejorar su saldo a la vez", d: "La suma de los saldos privado, público y exterior es cero por construcción. Si uno mejora, otro empeora. Cualquier plan que prometa lo contrario sin que cambie el saldo exterior es aritméticamente imposible, y detectarlo no requiere ningún modelo." },
            { t: "Deducir de la identidad de saldos que el déficit público es inocuo", d: "La identidad dice qué combinaciones son posibles, no cuáles son sostenibles. La sostenibilidad depende del tipo de interés, del crecimiento y de que alguien esté dispuesto a financiar el saldo, cuestiones todas ellas ajenas a la aritmética del circuito." },
            { t: "Suponer que las tres medidas del PIB coinciden en los datos reales", d: "Coinciden por definición, pero se calculan con fuentes distintas y en la práctica difieren. Esa discrepancia estadística se documenta y se concilia, y su tamaño es uno de los indicadores de calidad de un sistema de cuentas nacionales." },
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
            "Esta ficha es, literalmente, el esqueleto del SEC 2010: la contabilidad nacional no es más que el flujo circular llevado hasta el último detalle.",
          ],
          lista: [
            "El SEC organiza la economía en **cinco sectores institucionales**: sociedades no financieras (S.11), instituciones financieras (S.12), administraciones públicas (S.13), hogares (S.14) e instituciones sin fines de lucro al servicio de los hogares (S.15), más el resto del mundo (S.2). Los hogares y las empresas del esquema simple son solo los dos primeros bloques. La ficha 10.06 los desarrolla.",
            "El circuito se despliega en una **secuencia de cuentas** encadenadas: producción, generación de renta, distribución primaria, distribución secundaria, utilización de la renta y, finalmente, cuenta de capital y financiera. **El saldo de cada cuenta es el punto de partida de la siguiente**, de modo que el flujo circular se recorre paso a paso en lugar de en un solo salto.",
            "El saldo final del circuito es la **capacidad o necesidad de financiación** (B.9) de cada sector, que es exactamente el saldo sectorial del caso práctico. Que la suma de todos ellos sea cero no es un resultado: es una **restricción que el sistema impone**, y las discrepancias que aparecen se concilian explícitamente.",
            "La **tabla de origen y destino** es la versión detallada del ejemplo del trigo y el pan: obliga a que, para cada producto, la oferta total iguale al empleo total. Es la herramienta con la que se concilian los tres enfoques de cálculo del PIB, y la ficha 10.07 la trata.",
            "Y las **exportaciones netas negativas** del ejemplo se corresponden con una necesidad de financiación frente al exterior que aparece en la cuenta financiera como entrada neta de capital. La ficha 3.10 explica cómo se registra y qué implica.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: casi todo lo que parece una definición arbitraria del SEC deja de parecerlo en cuanto se localiza en qué punto del circuito está midiendo.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el PIB no es la suma de las ventas de todas las empresas?", a: "Porque se contaría varias veces el mismo valor: lo que una empresa vende a otra está incluido después en el producto de la segunda. Se suma el valor añadido —ventas menos compras a terceros— y el total coincide exactamente con el valor de los bienes finales." },
            { q: "Un agricultor vende trigo por 100, un molino harina por 180 y una panadería pan por 300. ¿Cuál es el PIB de esa cadena?", a: "300. Los valores añadidos son 100, 80 y 120, y suman el precio del único bien final. La facturación total, 580, contaría el trigo tres veces y la harina dos." },
            { q: "¿Qué significa que producción, renta y gasto sean iguales?", a: "Que son tres formas de medir el mismo flujo en tres puntos del circuito: lo que se fabrica, lo que se cobra por fabricarlo y quién se lo lleva. Es una identidad contable cierta por construcción, no una regularidad empírica que pudiera resultar falsa." },
            { q: "¿Puede una economía reducir su déficit público sin que ningún otro saldo se mueva?", a: "No. Los saldos privado, público y exterior suman cero por construcción, así que si el público mejora, o mejora el exterior o empeora el privado. La identidad no dice si es deseable ni cómo se logrará, pero sí que la contrapartida existe y conviene identificarla." },
            { q: "¿Por qué una identidad no sirve para explicar?", a: "Porque se cumple por definición y por tanto no puede ser falsada: no hay dato capaz de contradecirla. Sirve para organizar información y detectar afirmaciones incoherentes. Explicar exige un modelo que diga qué decide cada agente y por qué, y que pueda resultar equivocado al contrastarlo." },
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
              q: "En una economía cerrada sin sector público, el ahorro iguala a la inversión. ¿Qué se puede concluir de eso?",
              opciones: [
                "Que ahorrar más provoca más inversión",
                "Nada causal: es una identidad contable, cierta por construcción",
                "Que el sistema financiero funciona correctamente",
                "Que invertir más obliga a los hogares a ahorrar más",
              ],
              correcta: 1,
              porque: [
                "Es la lectura causal de una igualdad forzosa, y de ahí salen media docena de errores macroeconómicos populares. Ahorrar más puede reducir la renta y dejar la inversión igual o menor.",
                "Se han definido de modo que su diferencia sea nula, así que la igualdad no informa de ninguna dirección de influencia. Las identidades organizan la información y detectan incoherencias; explicar exige un modelo.",
                "La identidad se cumple ex post incluso en una crisis bancaria. Que se cumpla no dice nada sobre si la canalización del ahorro hacia la inversión funciona bien o mal.",
                "Es el mismo error con la flecha invertida. La identidad se cumple igual sea cual sea el mecanismo que la haga cumplirse, y por eso no puede señalar ninguno.",
              ],
            },
            {
              q: "¿Por qué el PIB no es la suma de la producción de todas las empresas?",
              opciones: [
                "Porque hay empresas que no declaran toda su producción",
                "Porque la producción se mide a precios de mercado y el PIB a precios básicos",
                "Porque las empresas públicas se contabilizan aparte",
                "Porque se contaría varias veces el mismo valor: el trigo dentro de la harina y la harina dentro del pan",
              ],
              correcta: 3,
              porque: [
                "La economía sumergida es un problema de medición distinto y afecta a cualquier agregado. Aunque todo se declarase, la suma de producciones seguiría sin ser el PIB.",
                "La diferencia entre precios de mercado y básicos existe y se corrige con los impuestos netos sobre productos, pero es un ajuste de valoración: no es lo que impide sumar producciones.",
                "Las empresas públicas están dentro del PIB como cualquier otro productor. Su tratamiento es una cuestión de sectorización, no de doble cómputo.",
                "Por eso se suma el valor añadido —producción menos consumos intermedios— y su total coincide exactamente con el valor de los bienes finales, que es lo que se quiere medir.",
              ],
            },
            {
              q: "Un plan promete reducir el déficit público sin que el sector privado ahorre menos ni cambie el saldo exterior. ¿Es posible?",
              opciones: [
                "Sí, si el crecimiento económico aumenta la recaudación",
                "Depende de si el déficit es estructural o cíclico",
                "No: la suma de los tres saldos es cero por construcción",
                "Sí, si el ajuste se hace por el lado del gasto y no de los ingresos",
              ],
              correcta: 2,
              porque: [
                "El crecimiento cambia el tamaño de todas las magnitudes, pero la identidad sigue cumpliéndose sobre las nuevas cifras. Si el saldo público mejora, alguno de los otros dos tiene que empeorar.",
                "La distinción estructural/cíclico sirve para juzgar la política, no para escapar de una identidad contable que se cumple sobre los saldos observados.",
                "$(S-I) + (T-G) + (M-X) = 0$. Si uno mejora, otro empeora; detectar la imposibilidad no requiere ningún modelo, solo aritmética.",
                "Por dónde se haga el ajuste cambia sus efectos y su reparto, pero no libera de la identidad: el saldo público es el saldo público venga de donde venga.",
              ],
            },
            {
              q: "El INE publica que las tres estimaciones del PIB —producción, renta y gasto— difieren entre sí. ¿Qué indica eso?",
              opciones: [
                "Que la identidad contable no se cumple en la práctica",
                "Que hay un error en alguna de las tres y hay que corregirlo",
                "Que se han usado deflactores distintos en cada enfoque",
                "Que coinciden por definición pero se calculan con fuentes distintas: la discrepancia se documenta y concilia",
              ],
              correcta: 3,
              porque: [
                "La identidad se cumple siempre en el marco contable. Lo que difiere son las tres *estimaciones* de una magnitud que por definición es única.",
                "No hay un error localizable: cada enfoque usa encuestas, registros y declaraciones diferentes, y todos tienen margen. La conciliación reparte la diferencia, no señala a un culpable.",
                "La discrepancia aparece igual en términos nominales, donde no hay deflactor ninguno. El problema es de fuentes, no de deflactación.",
                "El tamaño de esa discrepancia estadística es de hecho uno de los indicadores de calidad de un sistema de cuentas nacionales, y se publica precisamente para que pueda juzgarse.",
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
            { ref: "Blanchard, Macroeconomía", nota: "el primer capítulo de agregados y la identidad del gasto, con la advertencia explícita sobre identidades frente a relaciones de conducta." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el mejor puente entre el flujo circular de manual y el sistema real de cuentas; escrito para no especialistas." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 1 y 2", nota: "los sectores institucionales y la secuencia de cuentas; denso pero es la fuente normativa." },
            { ref: "INE, Contabilidad Nacional Anual de España", nota: "las tres estimaciones del PIB publicadas por separado, útiles para ver el tamaño real de la discrepancia estadística." },
          ],
        },
      ],
    },
  ],
};
