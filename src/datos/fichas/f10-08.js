/* Ficha 10.08 — Índices encadenados, precios del año anterior y volumen. */

export default {
  codigo: "10.08",
  titulo: "Índices encadenados, precios del año anterior y volumen",
  nivel: 4,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "Separar cuánto ha crecido una economía de cuánto han subido sus precios exige elegir unas ponderaciones, y ninguna elección es neutral. El encadenamiento actualiza las ponderaciones cada año y a cambio destruye la aditividad: los componentes dejan de sumar el total, y esa incomodidad es el precio de una medición mejor.",
  requiere: "10.07 Producción, VAB y PIB · 1.07 Números índice y precios · 3.02 Inflación y precios",
  abre: "10.09 Coste laboral unitario · 10.10 Cuentas trimestrales · 4.10 Desestacionalización",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cuando el PIB nominal de un país crece un 6 %, la pregunta relevante es cuánto de eso es **más producción** y cuánto **precios más altos**. Separar ambas cosas es el problema del **volumen**, y no tiene una solución única: exige valorar la producción de dos años distintos con un mismo conjunto de precios, y **la elección de esos precios cambia el resultado**. No es un defecto de la técnica: es el problema del índice de la ficha 1.07 aplicado a la macroeconomía entera.",
            "**El método tradicional era la base fija.** Se elegía un año, se valoraban todos los años posteriores con sus precios y se obtenía una serie de volumen aditiva y cómoda: los componentes sumaban el total. El problema es que **los precios relativos cambian**, y a menudo mucho. Valorar en 2024 con precios del año 2000 significa dar a un ordenador el precio que tenía entonces, cuando era diez veces más caro en términos relativos. Como las cantidades de los bienes que se abaratan crecen más deprisa —eso es precisamente la sustitución—, valorarlas con precios antiguos y altos **sobrestima sistemáticamente el crecimiento**, y el sesgo se agrava cuanto más lejos queda el año base.",
            "**La solución adoptada por el SEC 2010 es el encadenamiento.** Cada año se valora **a precios del año inmediatamente anterior**, se calcula la tasa de variación de ese par de años, y las tasas se enlazan multiplicándolas para formar una serie continua. Así **las ponderaciones nunca tienen más de un año de antigüedad**, y el sesgo de sustitución prácticamente desaparece. Es lo que hay detrás de la expresión «precios del año anterior» que aparece en todas las publicaciones del INE y de Eurostat, y desde 2005 es obligatorio en la Unión Europea.",
            "**El precio de esa mejora es la pérdida de aditividad, y conviene entender por qué es inevitable.** Cada componente se encadena con **sus propias ponderaciones**, que evolucionan de forma distinta, de modo que la suma de los componentes encadenados **no coincide con el agregado encadenado**. La discrepancia crece con la distancia al año de referencia y con la magnitud de los cambios en precios relativos. No es un error de los datos ni una limitación informática: es una consecuencia matemática del método, y los institutos publican la diferencia como **discrepancia** en lugar de disimularla.",
            "**De ahí salen dos reglas prácticas que se incumplen constantemente.** La primera: **no se pueden sumar volúmenes encadenados**. Sumar el consumo y la inversión en volumen encadenado no da el PIB en volumen encadenado. La segunda: **no se pueden calcular contribuciones al crecimiento dividiendo niveles encadenados**. Existe una fórmula específica para ello, que pondera la tasa de cada componente por su **peso en valor corriente del periodo anterior**, y es la única correcta. Los institutos publican las contribuciones ya calculadas precisamente para evitar que el usuario las improvise.",
            "**El deflactor implícito del PIB es el subproducto de todo esto**, y merece situarse frente al IPC de la ficha 3.02. Se obtiene dividiendo el PIB nominal entre el PIB en volumen, y por tanto **su cesta cambia cada periodo**: es un índice de tipo Paasche, mientras que el IPC es de tipo Laspeyres con cesta fija revisada periódicamente. Además cubren cosas distintas: el deflactor incluye toda la producción interior —inversión, gasto público, exportaciones— y **excluye las importaciones**, mientras que el IPC cubre el consumo de los hogares, importado incluido. Por eso pueden divergir mucho, y en un choque energético divergen de forma espectacular.",
            "**Un último concepto que la crisis energética puso de moda con razón.** El **PIB en volumen mide producción**, no capacidad de compra. Si los precios de importación suben más que los de exportación, un país produce lo mismo y **puede comprar menos con ello**: ha sufrido una pérdida en la relación real de intercambio. La contabilidad nacional lo recoge en la **renta interior bruta real**, que ajusta el volumen por esa relación y que en episodios de encarecimiento energético cae bastante más que el PIB. Es un indicador que responde mejor a la pregunta que la gente hace, y casi nunca se cita.",
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
            { nom: "Volumen a base fija", sub: "Aditivo y con sesgo creciente.", cols: ["$V_t = \\sum_i q_{it}\\,p_{i0}$"] },
            { nom: "Tasa a precios del año anterior", sub: "El eslabón del encadenamiento.", cols: ["$\\tau_t = \\dfrac{\\sum_i q_{it}\\,p_{i,t-1}}{\\sum_i q_{i,t-1}\\,p_{i,t-1}}$"] },
            { nom: "Índice encadenado", sub: "Ponderaciones nunca mayores de un año.", cols: ["$I_t = I_{t-1}\\,\\tau_t$"] },
            { nom: "Sesgo de sustitución", sub: "Por qué la base fija sobrestima.", cols: ["las cantidades crecen donde los precios caen"] },
            { nom: "No aditividad", sub: "Consecuencia matemática, no error.", cols: ["$\\sum$ componentes encadenados $\\neq$ agregado encadenado"] },
            { nom: "Contribución al crecimiento", sub: "La única forma correcta de calcularla.", cols: ["$c_{it} = w_{i,t-1} \\times$ tasa de volumen de $i$"] },
            { nom: "Deflactor implícito", sub: "Tipo Paasche: la cesta cambia cada periodo.", cols: ["$D = \\dfrac{\\text{PIB nominal}}{\\text{PIB en volumen}}$"] },
            { nom: "Deflactor frente a IPC", sub: "Coberturas distintas: pueden divergir mucho.", cols: ["D excluye importaciones; el IPC las incluye"] },
            { nom: "Relación real de intercambio", sub: "Producir lo mismo y poder comprar menos.", cols: ["Renta interior bruta real = PIB volumen + efecto RRI"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos métodos, dos crecimientos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía con dos bienes durante seis años. El **bien A** crece un 10 % anual en cantidad y su precio sube un 10 % anual: es la parte tradicional de la economía. El **bien B** crece un 25 % anual y su precio **cae un 5 % anual**: es el producto tecnológico típico, cada vez más barato y cada vez más consumido. Es exactamente la configuración que hace divergir los métodos.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Año", y: "Índice" },
          dominio: { x: [0, 5], y: [95, 240] },
          marcasX: [0, 1, 2, 3, 4, 5],
          marcasY: [100, 140, 180, 220],
          series: [
            {
              nombre: "Base fija",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [5, 233.11],
              puntos: [[0, 100], [1, 117.5], [2, 138.63], [3, 164.21], [4, 195.28], [5, 233.11]],
            },
            {
              nombre: "Encadenado",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [5, 222.63],
              puntos: [[0, 100], [1, 117.5], [2, 137.98], [3, 161.93], [4, 189.93], [5, 222.63]],
            },
          ],
          nota: "Las dos series parten del mismo punto y del mismo primer año —en el segundo año coinciden por construcción, porque el año base y el anterior son el mismo— y **se separan progresivamente**. Al cabo de cinco años la base fija da 233,1 y el encadenamiento 222,6: una diferencia de **10,5 puntos, el 4,7 %**. La base fija **sobrestima**, y siempre en esa dirección, porque valora con precios antiguos las cantidades del bien que se abarataba y cuyo consumo por eso creció. Prolongando la serie, la brecha sigue creciendo: **cuanto más viejo es el año base, peor mide**. Ese es el argumento que llevó a hacer obligatorio el encadenamiento en la Unión Europea.",
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Volumen del bien A", "Volumen del bien B", "Suma de componentes", "Total encadenado", "Discrepancia"],
          filas: [
            ["0", "1.000,0", "1.000,0", "2.000,0", "2.000,0", "0,0"],
            ["1", "1.100,0", "1.250,0", "2.350,0", "2.350,0", "0,0"],
            ["2", "1.210,0", "1.562,5", "2.772,5", "2.759,6", "12,9"],
            ["3", "1.331,0", "1.953,1", "3.284,1", "3.238,6", "45,5"],
            ["4", "1.464,1", "2.441,4", "3.905,5", "3.798,6", "106,9"],
            { celdas: ["5", "1.610,5", "3.051,8", "4.662,3", "4.452,6", "209,6"], clase: "total" },
          ],
          nota: "Aquí está la no aditividad con números. Los componentes suman **4.662,3** y el total encadenado es **4.452,6**: faltan **209,6**, un 4,7 % del agregado. Nadie ha calculado nada mal. La discrepancia aparece porque **cada serie se encadena con sus propias ponderaciones**, y crece con la distancia al año de referencia. La consecuencia práctica es tajante: quien sume componentes en volumen encadenado obtendrá un número que no existe en ninguna publicación, y quien calcule contribuciones al crecimiento dividiendo estos niveles se equivocará de forma creciente. Para eso hay una fórmula específica que pondera cada tasa por su **peso en valor corriente del año anterior**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el reverso, para no llevarse una idea equivocada.** El encadenamiento no es perfecto: tiene su propio problema, llamado **deriva de cadena**, que aparece cuando precios y cantidades oscilan arriba y abajo en lugar de moverse de forma tendencial. En ese caso el enlace de tasas puede acumular un error que no se anula al volver la serie a su punto de partida, y el efecto es más grave con datos de frecuencia alta, razón por la cual el encadenamiento se hace habitualmente con enlaces anuales y no trimestrales. **Ningún método de índice es correcto en abstracto**: el índice ideal de Fisher que la ficha 1.07 presentaba tiene mejores propiedades teóricas y es más costoso de construir, y el encadenamiento con enlace anual es el compromiso que las oficinas estadísticas han considerado razonable.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el choque energético y el indicador que faltaba",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El encarecimiento energético que siguió a 2021 produjo una situación que puso a prueba los conceptos de esta ficha: los agregados oficiales describían una economía que crecía mientras la percepción generalizada era de empobrecimiento. Ambas cosas eran ciertas, y la reconciliación está en las distinciones de arriba.",
            "**El primer desajuste fue entre el deflactor del PIB y el IPC.** El IPC subía mucho más porque incluye la energía importada, que se había disparado; el deflactor del PIB **excluye las importaciones por construcción**, porque mide precios de la producción interior. Un país importador neto de energía ve por tanto un IPC muy por encima de su deflactor, y quien comparaba ambos indicadores esperando que coincidieran concluía que alguno estaba manipulado. Los dos eran correctos y medían cosas distintas, exactamente como los tres salarios de la ficha 4.02.",
            "**El segundo fue entre producir y poder comprar.** El PIB en volumen mide producción, y la producción se mantenía. Pero el país tenía que entregar muchas más exportaciones para pagar la misma energía importada: una **pérdida en la relación real de intercambio**. La magnitud que capta ese efecto es la **renta interior bruta real**, que ajusta el volumen por esa relación, y que en esos trimestres cayó bastante más que el PIB. Es el indicador que responde a la pregunta que la gente hacía, y prácticamente no se citó en el debate público.",
            "**El tercero fue el reparto entre salarios y márgenes.** El deflactor del PIB puede descomponerse en remuneración por unidad producida, excedente por unidad producida e impuestos netos, y esa descomposición permite ver **qué parte del aumento de precios internos absorbió cada factor**. Es una de las pocas herramientas cuantitativas serias disponibles en la discusión sobre si un episodio inflacionista está impulsado por costes laborales o por márgenes empresariales, y sale directamente de las cuentas nacionales.",
            "**El cuarto fue el efecto de las ponderaciones en el propio IPC.** Al cambiar los patrones de consumo durante la pandemia y el choque energético, las cestas de gasto se desactualizaron con inusitada rapidez, y las revisiones de ponderaciones produjeron saltos en la serie. Es la misma familia de problemas que resuelve el encadenamiento en el PIB, aplicada a un índice de precios que se revisa con menos frecuencia, y la razón de que Eurostat acelerase la actualización de ponderaciones en esos años.",
            "**La lección transferible.** Cuando un dato agregado contradice de forma persistente la percepción generalizada, la explicación casi nunca es que el dato esté manipulado, y casi siempre que **mide algo distinto de lo que la gente cree que mide**. La respuesta útil no es desconfiar del indicador ni defenderlo, sino **buscar el indicador que responde a la pregunta**: aquí, renta real en lugar de producto en volumen, y deflactor del consumo de los hogares en lugar de deflactor del PIB.",
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
            { t: "Sumar componentes en volumen encadenado", d: "No suman el agregado, y la discrepancia crece con la distancia al año de referencia: en el ejemplo, 209,6 sobre 4.452,6 al quinto año. Cada serie se encadena con sus propias ponderaciones. Quien suma obtiene un número que no aparece en ninguna publicación oficial, y no porque los datos estén mal." },
            { t: "Calcular contribuciones al crecimiento dividiendo niveles encadenados", d: "Es incorrecto por la misma razón. La fórmula válida pondera la tasa de volumen de cada componente por su peso en valor corriente del periodo anterior. Los institutos publican las contribuciones ya calculadas precisamente para que el usuario no las improvise." },
            { t: "Usar una base fija antigua para medir crecimiento", d: "Sobrestima sistemáticamente, porque valora con precios antiguos y altos las cantidades de los bienes que se han abaratado y cuyo consumo por eso ha crecido. El sesgo se agrava con la distancia al año base: en el ejemplo, un 4,7 % en solo cinco años, y creciendo." },
            { t: "Esperar que el deflactor del PIB y el IPC coincidan", d: "Cubren cosas distintas y tienen fórmulas distintas. El deflactor incluye toda la producción interior y excluye las importaciones; el IPC cubre el consumo de los hogares, importado incluido. En un choque energético divergen mucho, y ninguno de los dos está manipulado por ello." },
            { t: "Interpretar el PIB en volumen como capacidad de compra", d: "Mide producción. Si los precios de importación suben más que los de exportación, un país produce lo mismo y puede comprar menos: ha perdido relación real de intercambio. La renta interior bruta real capta ese efecto y responde mejor a la pregunta que la gente hace, aunque casi nunca se cite." },
            { t: "Creer que el encadenamiento no tiene inconvenientes", d: "Tiene la deriva de cadena: cuando precios y cantidades oscilan en lugar de moverse tendencialmente, el enlace de tasas puede acumular un error que no se anula. Es más grave con frecuencias altas, y por eso el enlace se hace anual. Ningún método de índice es correcto en abstracto." },
            { t: "Tomar el nivel de una serie encadenada como una cantidad real", d: "Los niveles encadenados están expresados en unidades convencionales referidas a un año de referencia, y ese año se puede cambiar sin alterar las tasas. Lo que tiene significado económico son las variaciones, no los niveles, y compararlos entre series distintas no informa de nada." },
            { t: "Comparar tasas de crecimiento calculadas con métodos distintos", d: "Una serie a base fija y otra encadenada no son comparables, y la diferencia crece con el tiempo. Al usar series históricas largas o comparaciones internacionales conviene comprobar qué método aplica cada fuente y desde qué año, porque el cambio a encadenamiento se produjo en momentos distintos." },
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
            "Esta ficha describe una convención del sistema con efectos prácticos en casi todo lo que se publica, y conviene saber dónde aparecen.",
          ],
          lista: [
            "El INE publica las series **en índices de volumen encadenados con año de referencia** y advierte expresamente de la falta de aditividad en sus notas metodológicas. Esa advertencia está en todas las publicaciones y es la más ignorada del sistema estadístico español.",
            "Las **contribuciones al crecimiento** de cada componente de la demanda se difunden ya calculadas con la fórmula correcta, precisamente para evitar el error de derivarlas de los niveles. Es la cifra que hay que usar al analizar de dónde viene el crecimiento de un trimestre.",
            "El **deflactor implícito del PIB** de la ficha 3.02 es el cociente entre las versiones nominal y en volumen de esta ficha, y su descomposición en remuneración, excedente e impuestos por unidad producida es la herramienta cuantitativa para discutir si la inflación viene de costes laborales o de márgenes.",
            "La **desestacionalización** de la ficha 4.10 añade una segunda fuente de no aditividad, esta vez porque cada componente tiene su propio patrón estacional. Un usuario que sume componentes desestacionalizados **y** encadenados acumula las dos discrepancias a la vez.",
            "Y las **cuentas trimestrales** de la ficha 10.10 encadenan con enlaces anuales aunque publiquen datos trimestrales, precisamente para evitar la deriva de cadena. La conciliación entre lo trimestral y lo anual es una de las fuentes habituales de revisión.",
          ],
          cierre:
            "El hábito operativo es sencillo y evita casi todos los errores: **usar tasas y contribuciones publicadas, nunca niveles encadenados manipulados a mano**. Los niveles de una serie encadenada están en unidades convencionales; lo que tiene contenido económico son sus variaciones.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la base fija da 233,1 y el encadenamiento 222,6?", a: "Porque la base fija valora con precios del año cero unas cantidades que han crecido sobre todo en el bien que se abarataba. Al darle a ese bien su precio antiguo y alto, sobrestima su contribución. El encadenamiento usa siempre precios del año anterior, con lo que las ponderaciones nunca envejecen y el sesgo de sustitución desaparece." },
            { q: "Los componentes suman 4.662,3 y el total encadenado es 4.452,6. ¿Qué está mal?", a: "Nada. Cada serie se encadena con sus propias ponderaciones, que evolucionan de forma distinta, así que la suma de los componentes encadenados no coincide con el agregado encadenado. Es una consecuencia matemática del método y los institutos publican la discrepancia en lugar de disimularla." },
            { q: "¿Cómo se calculan entonces las contribuciones al crecimiento?", a: "Ponderando la tasa de volumen de cada componente por su peso en valor corriente del periodo anterior, no dividiendo niveles encadenados. Los institutos las publican ya calculadas justamente porque la derivación intuitiva es incorrecta y el error crece con la distancia al año de referencia." },
            { q: "¿Por qué el IPC y el deflactor del PIB divergieron tanto en el choque energético?", a: "Porque el IPC incluye la energía importada, que se disparó, y el deflactor del PIB excluye las importaciones por construcción, al medir precios de la producción interior. Un país importador neto de energía ve necesariamente un IPC muy por encima de su deflactor, sin que ninguno de los dos esté mal calculado." },
            { q: "Una economía produce lo mismo y la gente puede comprar menos. ¿Qué indicador lo mide?", a: "La renta interior bruta real, que ajusta el PIB en volumen por la variación de la relación real de intercambio. Si los precios de importación suben más que los de exportación hay que entregar más producción propia por la misma cantidad importada. El PIB en volumen mide producción, no capacidad de compra." },
            { q: "¿Tiene algún inconveniente el encadenamiento?", a: "La deriva de cadena: cuando precios y cantidades oscilan arriba y abajo en lugar de moverse tendencialmente, el enlace de tasas puede acumular un error que no se anula al regresar al punto de partida. Es más grave con frecuencias altas, y por eso los enlaces se hacen anuales incluso en las cuentas trimestrales." },
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
              q: "Se suman los componentes del PIB en volumen encadenado y no cuadra con el agregado. ¿Hay un error?",
              opciones: [
                "No: las series encadenadas no son aditivas, y la discrepancia crece con la distancia al año de referencia",
                "Sí: los componentes deben sumar el total en cualquier valoración",
                "Sí: falta incluir la variación de existencias",
                "No, pero la discrepancia debería ser siempre inferior al 0,1 %",
              ],
              correcta: 0,
              porque: [
                "En el ejemplo de la ficha son 209,6 sobre 4.452,6 al quinto año. No es un fallo del dato: es una propiedad del método, y por eso el INE publica la discrepancia.",
                "La aditividad se pierde justamente al encadenar: cada serie se encadena con sus propias ponderaciones.",
                "La variación de existencias está incluida; el desajuste persistiría igualmente.",
                "No hay tal cota: la discrepancia crece cuanto más se aleja uno del año de referencia.",
              ],
            },
            {
              q: "¿Cómo se calculan las contribuciones al crecimiento de cada componente?",
              opciones: [
                "Ponderando la tasa de volumen de cada componente por su peso en valor corriente del periodo anterior",
                "Restando al crecimiento del total el de los demás componentes",
                "Repartiendo el crecimiento del agregado en proporción al tamaño de cada componente",
                "Dividiendo la variación del nivel encadenado del componente entre el nivel encadenado del total",
              ],
              correcta: 0,
              porque: [
                "Es la fórmula válida, y la que hace que las contribuciones sumen el crecimiento del agregado.",
                "Obtener una contribución por diferencia arrastra a esa partida todos los errores de las demás.",
                "Repartir en proporción al tamaño ignora que cada componente ha crecido a un ritmo distinto.",
                "Es incorrecto por la misma razón que no se pueden sumar los niveles encadenados: las ponderaciones de cada serie son distintas.",
              ],
            },
            {
              q: "Una serie de PIB en volumen usa una base fija de hace veinte años. ¿Qué efecto tiene?",
              opciones: [
                "No tiene efecto sobre las tasas, solo sobre los niveles",
                "Subestima el crecimiento, porque no recoge productos nuevos",
                "Es más precisa, porque las ponderaciones no cambian y la serie es homogénea",
                "Sobrestima sistemáticamente: valora con precios antiguos y altos las cantidades de los bienes que se han abaratado y cuyo consumo por eso ha crecido",
              ],
              correcta: 3,
              porque: [
                "Afecta de lleno a las tasas, que es justamente lo que se quiere medir.",
                "Los productos nuevos son un problema añadido, y el sesgo principal va en la dirección contraria.",
                "La homogeneidad es aparente: unas ponderaciones que ya no describen la economía no la miden mejor por ser constantes.",
                "El caso de manual es la informática: precios que se desploman y cantidades que se disparan, valoradas a los precios altos del año base.",
              ],
            },
            {
              q: "El deflactor del PIB sube un 3 % y el IPC un 4 %. ¿Es un error de alguna de las dos estadísticas?",
              opciones: [
                "Sí, si la diferencia supera el punto porcentual",
                "No: cubren cosas distintas —el deflactor toda la producción interior sin importaciones; el IPC el consumo de los hogares, importaciones incluidas— y tienen fórmulas distintas",
                "Sí: ambos miden la inflación y deberían coincidir",
                "No, pero solo pueden diferir si ha habido cambios de imposición indirecta",
              ],
              correcta: 1,
              porque: [
                "No hay ningún umbral: las diferencias pueden ser grandes y perfectamente explicables.",
                "Un encarecimiento del petróleo importado empuja el IPC y no el deflactor, porque el petróleo no se produce aquí. Esperar coincidencia es no haber leído qué cubre cada uno.",
                "Miden inflaciones distintas: no hay ninguna razón para que coincidan.",
                "La imposición indirecta es una de las causas posibles, y ni mucho menos la única.",
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
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre volumen y precios explica el encadenamiento y la no aditividad con ejemplos numéricos como el de esta ficha." },
            { ref: "INE, notas metodológicas sobre índices de volumen encadenados", nota: "la advertencia oficial sobre aditividad y el procedimiento exacto de cálculo de contribuciones." },
            { ref: "Eurostat, Handbook on Price and Volume Measures in National Accounts", nota: "el manual de referencia europeo, incluidos los casos difíciles: servicios públicos, seguros, software." },
            { ref: "Diewert, trabajos sobre teoría de números índice", nota: "por qué el índice de Fisher tiene mejores propiedades axiomáticas y qué se pierde al no usarlo; la base teórica de todo esto." },
            { ref: "Banco de España, análisis de la descomposición del deflactor del PIB", nota: "la aplicación al debate sobre salarios y márgenes durante el episodio inflacionista reciente." },
          ],
        },
      ],
    },
  ],
};
