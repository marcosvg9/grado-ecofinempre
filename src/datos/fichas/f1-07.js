/* Ficha 1.07 — Numeros indice, tasas de variacion y deflactacion. */

export default {
  codigo: "1.07",
  titulo: "Números índice, tasas de variación y deflactación",
  nivel: 1,
  bloque: "Fundamentos y método económico",
  tiempo: "3 h",
  nucleo:
    "Separar precio de volumen es la operación más repetida y peor entendida de la economía aplicada. Casi toda cifra económica que se cita en público es un índice, y casi ninguna se interpreta con las tres preguntas que exige: qué base, qué fórmula y qué periodo de comparación.",
  requiere: "1.02 Oferta y demanda",
  abre: "3.02 Inflación, IPC y deflactor · 10.08 Índices encadenados · 4.02 Estadística descriptiva",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **número índice** expresa el valor de una magnitud en relación con el de un periodo tomado como referencia, al que se asigna convencionalmente el valor 100. Su utilidad es doble: permite comparar cosas medidas en unidades distintas y permite agregar magnitudes heterogéneas —no se pueden sumar kilos de pan y litros de leche, pero sí sus variaciones ponderadas—. Su servidumbre es que **un índice no dice nada sobre niveles**: que un país tenga un IPC de 128 y otro de 112 no significa que allí la vida sea más cara, sino que **han subido más los precios desde su respectiva base**. Comparar índices con bases distintas es el error más elemental y también uno de los más repetidos.",
            "De un índice se derivan **tasas de variación**, y aquí hay que ser muy preciso con cuál se está usando. La **interanual** compara con el mismo periodo del año anterior y neutraliza la estacionalidad. La **intermensual o intertrimestral** compara con el periodo inmediatamente anterior y detecta antes los cambios de tendencia, a cambio de mucho ruido. La **media anual** compara la media de doce meses con la media de los doce anteriores, y es la que suele usarse para revalorizaciones. Y la **acumulada en el año** compara con diciembre del año previo. **Las cuatro pueden apuntar en direcciones distintas el mismo mes sin que ninguna sea incorrecta**, y buena parte de la confusión pública sobre la inflación consiste exactamente en eso.",
            "A ello se suma un fenómeno que conviene nombrar: el **efecto escalón** o efecto base. Una tasa interanual compara dos puntos, y puede moverse porque cambie el actual **o porque cambie aquel con el que se compara**. Si hace doce meses hubo un salto de precios puntual, la tasa interanual caerá al salir ese dato de la comparación aunque los precios de hoy no se hayan movido lo más mínimo. **La tasa baja sin que baje nada**, y anticipar esos escalones es rutina en cualquier análisis de coyuntura.",
            "La operación central de la ficha es la **deflactación**: convertir una magnitud nominal en real dividiéndola por un índice de precios. Es lo que separa **precio de volumen**, y sin ella ninguna comparación temporal significa nada. Una facturación que crece un 8 % con precios que suben un 10 % está vendiendo **menos**; un salario que sube todos los años puede estar perdiendo poder adquisitivo. La regla es simple —dividir por el índice y multiplicar por 100— y su dificultad real es elegir **qué deflactor** corresponde a cada magnitud: el IPC para el consumo de los hogares, un índice de precios industriales para la producción, el deflactor del PIB para los agregados.",
            "Que la elección del deflactor importe se entiende viendo cómo se construyen los índices. Un índice de **Laspeyres** valora la cesta con las **cantidades del periodo base**: responde a cuánto costaría hoy comprar lo que se compraba antes. Uno de **Paasche** usa las **cantidades actuales**. Y como los consumidores sustituyen lo que se encarece por lo que no —el efecto sustitución de la ficha 2.03—, **Laspeyres tiende a sobrestimar la inflación y Paasche a subestimarla**. El de **Fisher** es la media geométrica de ambos y corrige buena parte del sesgo. Esto no es un tecnicismo: **el IPC es esencialmente un Laspeyres y el deflactor del PIB es esencialmente un Paasche**, y de ahí que difieran de forma sistemática, como verá la ficha 3.02.",
            "Por último, dos propiedades que causan sorpresa cuando aparecen. Las tasas **no se suman: se encadenan**. Dos años al 3 % no dan un 6 % sino un 6,09 %, y con tasas grandes la diferencia deja de ser cosmética; además, una caída del 50 % seguida de una subida del 50 % **no devuelve al punto de partida**. Y los índices modernos, que actualizan sus ponderaciones cada año para no quedarse obsoletos, **pierden la aditividad**: la suma de los componentes en volumen encadenado ya no coincide exactamente con el total. Por eso el INE publica **contribuciones al crecimiento** en lugar de invitar a sumar, y por eso la ficha 10.08 dedica un tema entero a este asunto.",
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
            { nom: "Índice simple", sub: "La base vale 100 por convención.", cols: ["$I_t = \\dfrac{X_t}{X_0} \\times 100$"] },
            { nom: "Índice de Laspeyres", sub: "Cantidades del periodo base; sesgo al alza.", cols: ["$L = \\dfrac{\\sum p_t q_0}{\\sum p_0 q_0}$"] },
            { nom: "Índice de Paasche", sub: "Cantidades del periodo actual; sesgo a la baja.", cols: ["$P = \\dfrac{\\sum p_t q_t}{\\sum p_0 q_t}$"] },
            { nom: "Índice de Fisher", sub: "Media geométrica; corrige buena parte del sesgo.", cols: ["$F = \\sqrt{L \\times P}$"] },
            { nom: "Deflactación", sub: "Separa precio de volumen.", cols: ["Real = (Nominal / Índice) × 100"] },
            { nom: "Deflactor implícito", sub: "No se calcula: se deduce como cociente.", cols: ["Deflactor = (Nominal / Real) × 100"] },
            { nom: "Tasa de variación", sub: "Cociente menos uno, en porcentaje.", cols: ["$g = \\left(\\dfrac{X_t}{X_{t-1}} - 1\\right) \\times 100$"] },
            { nom: "Encadenamiento de tasas", sub: "Las tasas no se suman.", cols: ["$(1 + g_{\\text{total}}) = (1 + g_1)(1 + g_2)$"] },
            { nom: "Contribución al crecimiento", sub: "Sustituye a la suma cuando no hay aditividad.", cols: ["$c_i = \\text{peso}_i \\times g_i$"] },
            { nom: "Punto porcentual", sub: "Distingue la variación absoluta de la relativa.", cols: ["De 4 % a 5 %: +1 p.p. = +25 %"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la misma cesta, tres índices",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía consume solo dos bienes. En el año base se compran **100 panes a 1 €** y **50 litros de leche a 2 €**, con un gasto total de 200 €. Años después el pan cuesta **1,50 €** y la leche **2,20 €**, y las cantidades han pasado a **80 panes y 60 litros**: la gente ha sustituido parcialmente lo que más se ha encarecido.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Índice", "Cálculo", "Valor", "Qué mide"],
          filas: [
            ["Laspeyres", "(1,5×100 + 2,2×50) / 200", "130,0", "Coste hoy de la cesta de antes"],
            ["Paasche", "(1,5×80 + 2,2×60) / (1×80 + 2×60)", "126,0", "Coste de la cesta de hoy, ayer y hoy"],
            { celdas: ["Fisher", "$\\sqrt{130 \\times 126}$", "128,0", "Media geométrica de ambos"], clase: "total" },
          ],
          nota: "Los tres son correctos y difieren en **cuatro puntos**, que no es poco. Laspeyres da más porque valora una cesta con mucho pan, justo el bien que más se ha encarecido y del que la gente ha comprado menos: **ignora la sustitución y por eso sobrestima**. Paasche usa la cesta ya adaptada y subestima por el motivo simétrico. La diferencia entre 130 y 126 es exactamente la magnitud del **sesgo de sustitución**, y es la razón de que el IPC —un Laspeyres— y el deflactor del PIB —un Paasche— nunca coincidan.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la operación que más se usa: deflactar.** Un salario que ha pasado de 20.000 a 24.000 € ha subido un **20 % en términos nominales**. Con un índice de precios que ha pasado de 100 a 128, el salario real es 24.000 × 100 / 128 = **18.750 €**, es decir, un **6,25 % menos** que al principio.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Año", y: "Euros" },
          dominio: { x: [2015, 2024], y: [17000, 25000] },
          marcasX: [2015, 2018, 2021, 2024],
          marcasY: [17000, 19000, 21000, 23000, 25000],
          series: [
            {
              nombre: "Salario nominal",
              color: "tinta",
              etiquetaEn: [2022.5, 23200],
              puntos: [[2015, 20000], [2016, 20200], [2017, 20600], [2018, 21000], [2019, 21400], [2020, 21400], [2021, 21800], [2022, 22500], [2023, 23200], [2024, 24000]],
            },
            {
              nombre: "Salario real",
              color: "alerta",
              etiquetaEn: [2022.5, 19068],
              puntos: [[2015, 20000], [2016, 20000], [2017, 20000], [2018, 20000], [2019, 20189], [2020, 20189], [2021, 20000], [2022, 19068], [2023, 18710], [2024, 18750]],
            },
          ],
          nota: "Las dos líneas parten del mismo punto y cuentan historias opuestas. **La nominal sube todos los años sin excepción**, y es la que aparece en la nómina. La real se mantiene plana mientras los aumentos compensan los precios y **se hunde en cuanto la inflación se acelera**, pese a que el salario nominal siguió subiendo justo entonces. Quien discuta sobre la primera línea y quien discuta sobre la segunda no estarán en desacuerdo: estarán hablando de cosas distintas. Ejemplo construido para la ficha, no datos reales.",
        },
        {
          tipo: "tabla",
          cabecera: ["Operación", "Cálculo incorrecto", "Cálculo correcto", "Diferencia"],
          filas: [
            ["Dos años consecutivos al 3 %", "6,00 %", "6,09 %", "0,09 p.p."],
            ["Bajar 50 % y luego subir 50 %", "0 %", "−25 %", "25 p.p."],
            ["Pasar de un paro del 4 % al 5 %", "«sube un 1 %»", "+1 p.p. = +25 %", "—"],
            { celdas: ["Sumar componentes en volumen encadenado", "Total $= \\sum$ partes", "Usar contribuciones", "No aditivo"], clase: "total" },
          ],
          nota: "Las cuatro filas son errores que aparecen en prensa con regularidad. El tercero es especialmente traicionero: **un punto porcentual y un uno por ciento no son lo mismo**, y confundirlos permite presentar la misma variación como pequeña o enorme según convenga. El cuarto es el que más desconcierta a quien empieza: en los índices encadenados modernos, **las partes ya no suman el total**, y por eso las estadísticas oficiales publican contribuciones al crecimiento.",
        },
      ],
    },
    {
      titulo: "Caso práctico: leer una nota de prensa del IPC",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cada mes el INE publica el índice de precios de consumo y cada mes se interpreta mal en algún sitio. Recorrer la nota con las herramientas de la ficha convierte un dato confuso en varios datos claros.",
            "**El titular suele ser la tasa interanual**, que compara con el mismo mes del año anterior. Es la más citada porque neutraliza la estacionalidad —no compara enero con diciembre— pero tiene el inconveniente de arrastrar doce meses de historia: **una tasa interanual del 3 % no dice qué ha pasado este mes**, dice qué ha pasado en un año. Para lo primero está la variación mensual, mucho más volátil y por eso menos titulable.",
            "**El efecto escalón explica la mayoría de los movimientos sorprendentes.** Si hace un año hubo una subida fuerte y puntual de la energía, al cumplirse el aniversario ese dato sale de la comparación y la tasa interanual cae bruscamente **aunque los precios de hoy no se hayan movido**. Titular eso como una desaceleración de la inflación es técnicamente cierto y sustancialmente engañoso: no ha cambiado el presente, ha cambiado el pasado con el que se compara. Un analista competente anticipa esos escalones con meses de antelación, porque son aritmética conocida.",
            "**La inflación subyacente responde a otra pregunta.** Excluye energía y alimentos frescos, que son los componentes más volátiles y más ligados a factores externos, para aproximar la parte **persistente** del proceso. No es una inflación mejor ni más real —la energía se paga igual— sino una respuesta a una pregunta distinta: hacia dónde tiende el proceso, no cuánto ha subido la cesta. Que la general y la subyacente vayan en direcciones opuestas durante meses es normal y no indica que ninguna esté mal calculada.",
            "**Y hay tres detalles metodológicos que conviene conocer.** El primero: las **ponderaciones se actualizan anualmente** con la Encuesta de Presupuestos Familiares, así que la cesta de este año no es la del anterior. El segundo: existen **ajustes por calidad**, de modo que si un producto mejora y sube de precio, parte de la subida no se computa como inflación; es una de las decisiones metodológicas más discutidas y afecta sobre todo a la tecnología. El tercero: el IPC mide el **consumo de los hogares**, así que no incluye la compra de vivienda —tratada como inversión— sino los alquileres, lo que explica buena parte de la distancia entre la inflación medida y la inflación percibida por quien está comprando casa.",
            "**La conclusión práctica.** Ante cualquier cifra de inflación conviene preguntar tres cosas antes de opinar: **qué periodo compara, qué cesta usa y con qué base**. Sin esas tres respuestas, el número no significa lo suficiente como para sostener un argumento, y esa disciplina vale igual para cualquier otro índice económico.",
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
            { t: "Comparar índices con bases distintas", d: "Un índice mide variación desde su propia base, no nivel. Que un país tenga un IPC de 128 y otro de 112 no dice cuál es más caro: dice cuánto han subido los precios en cada uno desde su base respectiva. Para comparar niveles hacen falta paridades de poder adquisitivo." },
            { t: "Sumar tasas de variación", d: "Las tasas se encadenan multiplicando: dos años al 3 % dan 6,09 %, no 6 %. Con tasas grandes el error es sustancial, y una caída del 50 % seguida de una subida del 50 % deja un −25 %, no un 0 %." },
            { t: "Confundir puntos porcentuales con porcentajes", d: "Pasar de un paro del 4 % al 5 % es subir un punto porcentual, que equivale a un aumento del 25 %. Ambas cifras son correctas y describen lo mismo; usarlas indistintamente permite presentar la misma variación como trivial o como alarmante." },
            { t: "Comparar magnitudes nominales de años distintos", d: "Sin deflactar, cualquier serie temporal en euros corrientes mezcla precio y volumen. Una facturación que crece un 8 % con precios subiendo un 10 % está vendiendo menos, aunque la cifra en euros sea mayor." },
            { t: "Usar el deflactor equivocado", d: "Cada magnitud tiene el suyo: el IPC para el consumo de los hogares, los índices de precios industriales para la producción, el deflactor del PIB para los agregados. Deflactar la facturación de una empresa industrial con el IPC mezcla dos universos de precios distintos." },
            { t: "Suponer que todos los índices de precios miden lo mismo", d: "El IPC es un Laspeyres sobre la cesta de consumo e incluye importaciones; el deflactor del PIB es un Paasche sobre la producción interior e incluye exportaciones. Difieren de forma sistemática y por motivos conocidos, no por errores de cálculo." },
            { t: "Interpretar una caída de la tasa interanual como que bajan los precios", d: "Una tasa interanual menor significa que suben menos deprisa, no que bajen. Y puede caer simplemente porque sale de la comparación un dato alto de hace doce meses: es el efecto escalón, y no indica ningún cambio en el presente." },
            { t: "Sumar los componentes de un agregado en volumen encadenado", d: "Los índices encadenados actualizan ponderaciones cada año y pierden la aditividad: las partes no suman el total. Por eso las estadísticas oficiales publican contribuciones al crecimiento en lugar de niveles sumables, algo que desarrolla la ficha 10.08." },
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
            "Esta ficha es la caja de herramientas del bloque 10: prácticamente toda cifra macroeconómica publicada ha pasado por alguna de estas operaciones.",
          ],
          lista: [
            "El **deflactor del PIB** no se calcula directamente: se **deduce** como cociente entre el PIB nominal y el PIB real. Por eso se llama implícito, y por eso su cesta cambia cada periodo, lo que lo convierte en un índice de tipo Paasche con todas sus propiedades.",
            "Desde la adopción de los **índices encadenados**, las cuentas nacionales españolas valoran el volumen a **precios del año anterior** y encadenan, en lugar de mantener un año base fijo durante lustros. Se gana representatividad y **se pierde la aditividad**, que es precisamente el compromiso que discute la ficha 10.08.",
            "El **IPC armonizado (IPCA)** sigue una metodología común europea que permite comparar entre países y es el que utiliza el BCE para su objetivo de inflación. Difiere del IPC nacional en cobertura y tratamiento de algunas partidas, y confundir ambos al comparar España con la zona euro es un error frecuente.",
            "Las **paridades de poder adquisitivo** son el instrumento que sí permite comparar niveles entre países, no los índices de precios: convierten monedas usando una cesta común en lugar del tipo de cambio de mercado. Es lo que hay que usar para comparar PIB per cápita, y no el tipo de cambio.",
            "Y los **ajustes por calidad** —métodos hedónicos y otros— son la frontera metodológica más discutida: separar cuánto de una subida de precio es inflación y cuánto es un producto mejor tiene consecuencias directas sobre el crecimiento real medido, sobre todo en tecnología.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: el deflactor del PIB no es un dato recogido en ningún sitio, sino el residuo de dividir dos agregados. Saberlo evita buscarle una cesta que no tiene.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un salario pasa de 20.000 a 24.000 € y el índice de precios de 100 a 128. ¿Ha mejorado?", a: "No. En términos nominales sube un 20 %, pero el salario real es 24.000 × 100 / 128 = 18.750 €, un 6,25 % menos que al principio. La nómina crece y el poder adquisitivo cae: son dos afirmaciones compatibles y ambas ciertas." },
            { q: "¿Por qué Laspeyres tiende a sobrestimar la inflación?", a: "Porque valora la cesta con las cantidades del periodo base e ignora que los consumidores sustituyen lo que se encarece por alternativas más baratas. Al mantener fijas las cantidades antiguas, sobrepondera precisamente los bienes que más han subido y de los que menos se compra ya." },
            { q: "La tasa interanual de inflación cae del 5 % al 3 % sin que los precios se hayan movido este mes. ¿Cómo es posible?", a: "Por el efecto escalón. La tasa interanual compara con el dato de hace doce meses, y si aquel mes hubo una subida puntual, al salir de la comparación la tasa baja sola. No ha cambiado el presente: ha cambiado el punto de referencia." },
            { q: "Un índice sube un 3 % dos años seguidos. ¿Cuánto ha subido en total?", a: "Un 6,09 %, no un 6 %. Las tasas se encadenan multiplicando: 1,03 × 1,03 = 1,0609. Con tasas pequeñas la diferencia parece cosmética, pero se acumula, y con tasas grandes deja de serlo por completo." },
            { q: "¿Por qué no se pueden sumar los componentes de un PIB en volumen encadenado?", a: "Porque las ponderaciones se actualizan cada año, y eso destruye la aditividad: la suma de las partes deja de coincidir con el total. Es el precio de tener índices representativos, y por eso las estadísticas publican contribuciones al crecimiento en lugar de invitar a sumar." },
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
              q: "El IPC de un país vale 128 y el de otro 112. ¿Cuál es más caro?",
              opciones: [
                "El primero, porque su índice es más alto",
                "No se puede saber: un índice mide variación desde su propia base, no nivel",
                "El segundo, si su base es más reciente",
                "El primero, salvo que las cestas de consumo sean muy distintas",
              ],
              correcta: 1,
              porque: [
                "El nivel del índice solo dice cuánto han subido los precios desde la base de ese país, que puede ser un año distinto. No es una medida del nivel de precios.",
                "Para comparar niveles hacen falta paridades de poder adquisitivo, que es otra construcción distinta. Comparar índices con bases diferentes es como comparar dos cronómetros puestos en marcha en momentos distintos.",
                "La base afecta a la interpretación de cada índice por separado, pero conocerla no convierte dos índices en comparables en niveles: seguirían midiendo variación, no precio.",
                "La composición de la cesta es un problema añadido, pero aunque las cestas fueran idénticas el número seguiría sin medir nivel.",
              ],
            },
            {
              q: "Una acción cae un 50 % y al año siguiente sube un 50 %. ¿Cómo ha quedado?",
              opciones: [
                "Igual que al principio: las dos variaciones se cancelan",
                "Un 25 % por debajo, porque las tasas se encadenan multiplicando",
                "Un 25 % por encima, por el efecto de la base menor",
                "Depende del orden en que se produzcan las dos variaciones",
              ],
              correcta: 1,
              porque: [
                "Sumar tasas es el atajo que falla justo cuando son grandes. Aquí la suma daría cero y la realidad es una pérdida de la cuarta parte.",
                "$(1 - 0{,}5)(1 + 0{,}5) = 0{,}75$. La subida se aplica sobre una base ya reducida a la mitad, así que recupera menos de lo que se perdió.",
                "La base menor es justo lo que impide recuperar: la subida rinde menos en euros que la bajada, no más.",
                "El producto es conmutativo, así que el resultado final es el mismo en cualquier orden. Lo que cambia es el camino, no el destino.",
              ],
            },
            {
              q: "La tasa de paro pasa del 4 % al 5 %. ¿Cómo se describe correctamente esa variación?",
              opciones: [
                "Ha subido un 1 %",
                "Ha subido un punto porcentual, que equivale a un aumento del 25 %",
                "Ha subido un 20 %, que es la diferencia relativa sobre el 5 %",
                "Ha subido 100 puntos básicos, equivalentes a un 1 %",
              ],
              correcta: 1,
              porque: [
                "Es la confusión que permite presentar la misma variación como trivial o como alarmante según convenga. Un 1 % de 4 sería 0,04 puntos, no uno entero.",
                "Ambas cifras son correctas y describen lo mismo desde ángulos distintos: la diferencia absoluta en puntos y la variación relativa. Decir cuál se usa evita la ambigüedad.",
                "El aumento relativo se calcula sobre el valor de partida, que es 4, no sobre el de llegada. $1/4 = 25\\ \\%$.",
                "Cien puntos básicos sí son un punto porcentual, pero equipararlos a «un 1 %» reintroduce exactamente la ambigüedad que se trataba de evitar.",
              ],
            },
            {
              q: "Una empresa industrial quiere saber si su facturación ha crecido en términos reales. ¿Con qué la deflacta?",
              opciones: [
                "Con el IPC, que es el índice de precios de referencia",
                "Con un índice de precios industriales, el que corresponde a lo que ella produce",
                "Con el deflactor del PIB, que cubre toda la economía",
                "Con la inflación subyacente, que excluye los componentes volátiles",
              ],
              correcta: 1,
              porque: [
                "El IPC mide la cesta de consumo de los hogares e incluye importaciones y servicios que esta empresa ni vende ni compra. Deflactar con él mezcla dos poblaciones de precios distintas.",
                "Cada magnitud tiene su deflactor: el IPC para el consumo de los hogares, los índices industriales para la producción, el deflactor del PIB para los agregados. Usar el que corresponde a lo que se mide es toda la regla.",
                "El deflactor del PIB es un agregado de toda la producción interior. Sirve para magnitudes agregadas, no para la facturación de una empresa concreta.",
                "La subyacente es una variante del IPC pensada para leer la tendencia de la inflación al consumo. Sigue siendo el índice equivocado para una facturación industrial.",
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
            { ref: "INE, metodología del IPC", nota: "cómo se construye la cesta, cómo se actualizan las ponderaciones y qué ajustes de calidad se aplican; la fuente primaria y sorprendentemente legible." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre volumen y precio, con el mejor tratamiento divulgativo del encadenamiento y la no aditividad." },
            { ref: "Newbold, Estadística para administración y economía", nota: "los fundamentos de números índice desde la estadística, útil antes de entrar en el bloque 4." },
            { ref: "Boskin y otros, informe sobre el sesgo del IPC estadounidense", nota: "el trabajo que puso cifras al sesgo de sustitución y de calidad y cambió la práctica estadística internacional." },
          ],
        },
      ],
    },
  ],
};
