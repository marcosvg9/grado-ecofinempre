/* Ficha 10.07 — Producción, VAB y PIB: los tres enfoques de cálculo. */

export default {
  codigo: "10.07",
  titulo: "Producción, VAB y PIB: los tres enfoques de cálculo",
  nivel: 3,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "El PIB se calcula por tres caminos independientes —lo que se produce, lo que se gasta y lo que se cobra— y deben dar el mismo número. Que coincidan no es un hallazgo empírico sino una identidad impuesta, y la discrepancia estadística que aparece antes de forzarla es una de las pocas medidas honestas del error de las cuentas.",
  requiere: "10.06 SEC 2010 · 3.01 Producto y renta nacional",
  abre: "10.08 Índices encadenados · 10.09 Coste laboral unitario · 10.10 Cuentas trimestrales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El producto interior bruto mide **el valor de los bienes y servicios finales producidos por unidades residentes en un periodo**, y cada palabra de esa definición hace un trabajo. **Finales**, para no contar dos veces lo que se usa como insumo. **Producidos**, no vendidos, de ahí que la variación de existencias forme parte del cálculo. **Por unidades residentes**, criterio de territorio y no de nacionalidad, lo que separa el PIB de la renta nacional. Y **en un periodo**, porque es un flujo y no un patrimonio.",
            "**El enfoque de la producción** suma el valor añadido de todas las ramas: producción menos consumos intermedios, rama por rama. La razón de restar los consumos intermedios es evitar la doble contabilización, y **de ahí sale un resultado que sorprende a mucha gente: el PIB es mucho menor que la facturación total de la economía**. En el ejemplo que sigue, una producción de 1.900 genera un PIB de 1.000. Este enfoque tiene además una particularidad de valoración: el VAB se mide a **precios básicos**, sin los impuestos sobre productos, así que para llegar al PIB a precios de mercado hay que sumarlos aparte.",
            "**El enfoque del gasto** suma los usos finales: consumo de los hogares, consumo público, formación bruta de capital y exportaciones, restando las importaciones. Conviene entender bien esa resta, porque se malinterpreta constantemente: **las importaciones se restan porque ya están incluidas dentro de los otros componentes**, no porque perjudiquen. Si un hogar compra un televisor importado, ese gasto está en el consumo y no corresponde a producción interior, de modo que restarlo lo corrige. De ahí que afirmar que importar reduce el PIB sea confundir una corrección contable con un efecto económico.",
            "**El enfoque de las rentas** suma lo que cobran los factores: remuneración de asalariados, excedente bruto de explotación y renta mixta de los autónomos, más los impuestos netos sobre la producción y las importaciones. Su virtud es que muestra **cómo se reparte lo producido**, y de él sale la participación de las rentas del trabajo en el PIB. Su dificultad práctica es la **renta mixta**: lo que gana un autónomo remunera a la vez su trabajo y su capital, y separarlos exige una imputación convencional que altera la participación salarial en varios puntos.",
            "**Que los tres enfoques coincidan es una identidad contable, no un resultado.** Todo lo producido se vende o se acumula como existencias, y todo lo vendido genera una renta para alguien: producción, gasto y renta son tres formas de mirar el mismo flujo. Pero los tres se estiman con **fuentes distintas y errores independientes** —encuestas industriales, comercio exterior, registros fiscales, cuentas de empresas—, así que en bruto **nunca coinciden**. La diferencia es la **discrepancia estadística**, y los institutos la resuelven conciliando y ajustando, no ignorándola. Su magnitud, cuando se publica, es la medida más honesta del error de las cuentas que existe.",
            "**Hay una lista de fronteras convencionales que conviene conocer**, porque explican la mayoría de las críticas al indicador. Los **servicios de la vivienda en propiedad** se imputan como si el propietario se alquilara a sí mismo, y pesan varios puntos del PIB. El **trabajo doméstico no remunerado** queda fuera pese a consumir muchísimo tiempo. La **producción no observada**, incluida la ilegal, se estima e incorpora porque así lo exige el SEC 2010. Y los **servicios públicos** se valoran por sus costes al carecer de precio de mercado, con la consecuencia de que su productividad medida es casi constante por construcción.",
            "**Y de ahí las limitaciones que hay que tener presentes al usarlo.** El PIB no descuenta la **depreciación** —para eso está el producto neto, que casi nadie usa— ni el **agotamiento de recursos naturales** ni el daño ambiental. No mide **distribución**, siendo un total. No mide **bienestar**, y su creador lo advirtió expresamente al presentarlo. Nada de esto lo invalida: **es un indicador de actividad económica y en eso es extraordinariamente bueno**. Los problemas surgen cuando se le pide que sea un indicador de progreso, que es una pregunta distinta y que la ficha 1.10 sitúa en su terreno.",
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
            { nom: "Enfoque de la producción", sub: "Suma de valores añadidos, sin doble cómputo.", cols: ["$\\mathrm{PIB} = \\sum_i \\mathrm{VAB}_i + \\text{impuestos netos sobre productos}$"] },
            { nom: "Enfoque del gasto", sub: "Se restan las importaciones porque ya están dentro.", cols: ["PIB = C + G + FBC + X − M"] },
            { nom: "Enfoque de las rentas", sub: "Muestra el reparto de lo producido.", cols: ["PIB = RA + EBE + renta mixta + impuestos netos"] },
            { nom: "Valor añadido", sub: "El concepto que evita contar dos veces.", cols: ["VAB = Producción − Consumos intermedios"] },
            { nom: "Precios básicos y de mercado", sub: "La diferencia son los impuestos sobre productos.", cols: ["PIB pm = VAB pb + impuestos netos sobre productos"] },
            { nom: "Discrepancia estadística", sub: "La medida honesta del error de estimación.", cols: ["diferencia entre enfoques antes de conciliar"] },
            { nom: "Del PIB a la renta nacional", sub: "Territorio frente a nacionalidad.", cols: ["RNB = PIB + rentas primarias netas del exterior"] },
            { nom: "Del bruto al neto", sub: "El neto es conceptualmente superior y casi no se usa.", cols: ["PIN = PIB − consumo de capital fijo"] },
            { nom: "Fronteras de producción", sub: "Convenciones, no olvidos.", cols: ["alquileres imputados sí · trabajo doméstico no"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: tres caminos, un solo número",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La misma economía de la ficha 10.06, calculada ahora por los tres caminos. Cada uno usa información completamente distinta: el primero, encuestas a empresas por ramas; el segundo, estadísticas de consumo, inversión y comercio exterior; el tercero, registros de nóminas y cuentas de resultados.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Enfoque", y: "Importe" },
          dominio: { x: [0, 3], y: [-450, 1450] },
          marcasX: [],
          marcasY: [-400, 0, 400, 800, 1200],
          areas: [
            { puntos: [[0.15, 0], [0.15, 950], [0.85, 950], [0.85, 0]], color: "n2" },
            { puntos: [[0.15, 950], [0.15, 1000], [0.85, 1000], [0.85, 950]], color: "alerta" },
            { puntos: [[1.15, 0], [1.15, 620], [1.85, 620], [1.85, 0]], color: "n1" },
            { puntos: [[1.15, 620], [1.15, 835], [1.85, 835], [1.85, 620]], color: "n2" },
            { puntos: [[1.15, 835], [1.15, 1015], [1.85, 1015], [1.85, 835]], color: "n3" },
            { puntos: [[1.15, 1015], [1.15, 1365], [1.85, 1365], [1.85, 1015]], color: "n4" },
            { puntos: [[1.15, 0], [1.15, -365], [1.85, -365], [1.85, 0]], color: "alerta" },
            { puntos: [[2.15, 0], [2.15, 500], [2.85, 500], [2.85, 0]], color: "n1" },
            { puntos: [[2.15, 500], [2.15, 950], [2.85, 950], [2.85, 500]], color: "n3" },
            { puntos: [[2.15, 950], [2.15, 1000], [2.85, 1000], [2.85, 950]], color: "alerta" },
          ],
          series: [
            { nombre: "PIB = 1.000", color: "acento", trazo: "discontinuo", grosor: 1.8, etiquetaEn: [3, 1000], puntos: [[0, 1000], [3, 1000]] },
            { nombre: "", color: "tinta", grosor: 1.4, puntos: [[0, 0], [3, 0]] },
          ],
          notas: [
            { x: 0.5, y: -70, texto: "Producción", ancla: "middle" },
            { x: 1.5, y: -430, texto: "Gasto", ancla: "middle" },
            { x: 2.5, y: -70, texto: "Rentas", ancla: "middle" },
            { x: 0.5, y: 460, texto: "VAB 950", ancla: "middle" },
            { x: 1.5, y: 290, texto: "C 620", ancla: "middle" },
            { x: 1.5, y: 715, texto: "G 215", ancla: "middle" },
            { x: 1.5, y: 910, texto: "FBC 180", ancla: "middle" },
            { x: 1.5, y: 1180, texto: "X 350", ancla: "middle" },
            { x: 1.5, y: -200, texto: "M 365", ancla: "middle" },
            { x: 2.5, y: 230, texto: "RA 500", ancla: "middle" },
            { x: 2.5, y: 715, texto: "EBE 450", ancla: "middle" },
          ],
          nota: "Las tres columnas llegan a la **misma línea de 1.000** por caminos que no comparten ni una sola fuente estadística. La segunda merece atención: los usos finales suman **1.365** y las importaciones se restan **por debajo del eje**, hasta dejar el neto en 1.000. Ese dibujo aclara por qué se restan: **no es que importar destruya producción, es que las importaciones ya están contadas arriba**, dentro del consumo, la inversión y hasta de las propias exportaciones. Los pequeños tramos naranjas de la primera y la tercera columna son los **impuestos netos sobre productos**, los 50 que separan la valoración a precios básicos de la valoración a precios de mercado.",
        },
        {
          tipo: "tabla",
          cabecera: ["Enfoque", "Componentes", "Total"],
          filas: [
            ["Producción", "Agricultura 30 + Industria 160 + Construcción 60 + Servicios 700 = 950, más impuestos netos sobre productos 50", "1.000"],
            ["Gasto", "Consumo de los hogares 620 + Consumo público 215 + Formación bruta de capital 180 + Exportaciones 350 − Importaciones 365", "1.000"],
            { celdas: ["Rentas", "Remuneración de asalariados 500 + Excedente bruto de explotación 450 + Impuestos netos sobre producción e importaciones 50", "1.000"], clase: "total" },
          ],
          nota: "Tres comprobaciones que conviene hacer sobre esta tabla. Primera: **620 + 215 = 835**, que es exactamente el consumo final de la cuenta de utilización de la renta de la ficha 10.06. Segunda: la **formación bruta de capital de 180** es la misma que aparecía en la cuenta de capital, y con un ahorro de 150 producía la necesidad de financiación de −30. Tercera: **RA 500 y EBE 450** son los saldos de la cuenta de explotación. Nada de esto es casual: **es el mismo sistema visto por tres lados**, y la coherencia entre fichas es la prueba de que se ha entendido.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y una observación que suele pasar desapercibida.** El saldo exterior de bienes y servicios es **X − M = −15**, mientras que la necesidad de financiación del país era **−30**. No hay contradicción: la diferencia son las **rentas de la propiedad netas** de −20 y las **transferencias corrientes netas** de +5 que la ficha 10.06 añadía al pasar del PIB a la renta nacional y de ahí a la disponible. En números: −15 − 20 + 5 = **−30**. Es la distinción entre **balanza comercial y capacidad de financiación**, que en un país con posición deudora externa importante puede ser grande: se puede tener superávit comercial y seguir necesitando financiación exterior si los intereses pagados al resto del mundo lo superan.",
            "**Por último, la magnitud que da la medida de la doble contabilización.** La producción total de esta economía es **1.900** y su PIB es **1.000**: los consumos intermedios son 900, casi la mitad. Ahí está la respuesta a un error habitual, el de sumar la facturación de los sectores para estimar su peso económico. **La facturación de una economía casi duplica su PIB**, y la proporción varía enormemente entre ramas: la industria tiene consumos intermedios altísimos y muchos servicios apenas los tienen, de modo que **el ranking de sectores por facturación y por valor añadido no se parecen**.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: cómo se estima el PIB de verdad",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Conviene desmontar una imagen implícita: nadie mide el PIB. **Se estima**, combinando decenas de fuentes de calidad desigual mediante un proceso de conciliación que dura años y que explica casi todo lo que después irrita de las revisiones.",
            "**Las fuentes son heterogéneas y llegan en momentos distintos.** Encuestas industriales y de servicios, declaraciones de IVA y de retenciones, cuentas anuales depositadas en el registro mercantil, estadísticas aduaneras de comercio exterior, ejecución presupuestaria de las administraciones, encuestas de presupuestos familiares, datos de afiliación. Ninguna cubre toda la economía, todas tienen su propio error y su propio calendario, y **algunas tardan más de un año en estar disponibles**. La estimación de un trimestre se hace, por tanto, con una fracción de la información que existirá al final.",
            "**El proceso de conciliación es donde se resuelve la discrepancia.** El marco input-output de la ficha 4.01 se emplea como **estructura de cuadre**: para cada producto debe cumplirse que oferta más importaciones igual a consumos intermedios más demanda final. Ese sistema de ecuaciones no cuadra con los datos brutos, y el trabajo consiste en asignar los ajustes a las estimaciones menos fiables. La discrepancia no desaparece porque se descubra su origen: **se reparte según un criterio de calidad de las fuentes**, que es una decisión metodológica documentada pero no evidente.",
            "**Los benchmarks periódicos son la operación más consecuente.** Cada pocos años se revisa la metodología entera incorporando nuevas fuentes, nuevas clasificaciones y nuevos criterios del SEC, y se recalcula toda la serie histórica. El resultado puede cambiar el nivel del PIB en un porcentaje apreciable —la incorporación obligatoria de la economía ilegal en 2014 elevó el PIB de varios países europeos— **sin que la economía real haya variado en absoluto**. Como el PIB es el denominador de las ratios de deuda y déficit, esas revisiones alteran cifras con consecuencias legales sin que nadie haya hecho nada.",
            "**El caso español tiene un elemento propio de dificultad**, y viene de la ficha 10.01: una estructura de microempresas hace que buena parte de la actividad se estime a partir de registros fiscales y de imputaciones en lugar de encuestas directas. A eso se suma la **economía no observada**, que el SEC obliga a estimar e incorporar, y cuya magnitud se calcula con métodos indirectos que dan resultados que varían por un factor de dos. Nada de esto invalida las cuentas: **significa que su margen de error es mayor de lo que su presentación sin intervalos sugiere**, exactamente el aviso de la ficha 4.03.",
            "**Qué hacer con todo esto al usar el dato.** No comentar variaciones de una décima, que están dentro del ruido de estimación. Recordar que los datos recientes se revisarán y los antiguos ya han sido revisados, de modo que la serie de hoy no es la que se publicó entonces —el problema de la ficha 10.10—. Comparar niveles de PIB entre países con cautela, porque las convenciones de imputación y la cobertura de la economía no observada difieren. Y usar el PIB para lo que sirve: **medir actividad económica, que es mucho, y no bienestar, que es otra cosa**.",
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
            { t: "Creer que importar reduce el PIB", d: "Las importaciones se restan porque ya están incluidas dentro del consumo, la inversión y las exportaciones, no porque destruyan producción. Es una corrección contable para no contar como producción interior algo producido fuera. Un país puede aumentar sus importaciones y su PIB simultáneamente sin ninguna contradicción." },
            { t: "Sumar la facturación de los sectores para medir su peso", d: "La facturación incluye consumos intermedios y por tanto cuenta muchas veces el mismo valor. En el ejemplo, una producción de 1.900 genera un PIB de 1.000. Como la proporción de consumos intermedios varía mucho entre ramas, el ranking sectorial por facturación y por valor añadido no se parecen." },
            { t: "Interpretar la coincidencia de los tres enfoques como una comprobación", d: "Es una identidad contable impuesta en la conciliación, no un hallazgo. Los tres se estiman con fuentes independientes y en bruto nunca coinciden; la diferencia es la discrepancia estadística, y se reparte según la fiabilidad de cada fuente. Que el dato publicado cuadre no prueba que sea exacto." },
            { t: "Confundir saldo comercial con capacidad de financiación", d: "En el ejemplo, X − M vale −15 y la necesidad de financiación −30: la diferencia son las rentas de la propiedad y las transferencias con el exterior. Un país con posición deudora puede tener superávit comercial y seguir necesitando financiación exterior si los intereses pagados fuera lo superan." },
            { t: "Comparar el PIB entre países sin considerar las convenciones", d: "Los alquileres imputados pesan más donde hay más propiedad; la cobertura de la economía no observada varía; y los servicios públicos se valoran por costes, lo que penaliza a los países con salarios públicos bajos. Las comparaciones de nivel exigen paridad de poder adquisitivo y, aun así, prudencia." },
            { t: "Olvidar que el PIB es bruto", d: "No descuenta el consumo de capital fijo, así que una economía que solo repone su capital depreciado aparece produciendo. El producto neto es conceptualmente superior y casi nadie lo usa, porque estimar la depreciación exige supuestos discutibles sobre vidas útiles." },
            { t: "Pedirle al PIB que mida bienestar", d: "No descuenta daño ambiental ni agotamiento de recursos, no mide distribución al ser un total y deja fuera el trabajo doméstico no remunerado. Su creador lo advirtió al presentarlo. Es un indicador excelente de actividad económica, y confundir actividad con progreso es un error del usuario, no del indicador." },
            { t: "Tratar una revisión metodológica como un cambio real", d: "Los benchmarks periódicos recalculan toda la serie con nuevas fuentes y criterios, y pueden mover el nivel del PIB un porcentaje apreciable sin que la economía haya variado. Como el PIB es el denominador de las ratios de deuda y déficit, esas revisiones cambian cifras con consecuencias legales sin que nadie haya actuado." },
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
            "Esta ficha describe el corazón del sistema; el puente señala hacia dónde sigue la cadena y qué fichas dependen de lo aquí establecido.",
          ],
          lista: [
            "El **marco input-output** de la ficha 4.01 no es solo una herramienta analítica: es el **instrumento de conciliación** con el que se resuelve la discrepancia entre enfoques. Que oferta más importaciones iguale a consumos intermedios más demanda final producto por producto es la restricción que fuerza el cuadre.",
            "El paso de **precios corrientes a volumen** es el objeto de la ficha 10.08, y ahí es donde el PIB se convierte en la magnitud que realmente interesa: la que separa lo que ha crecido de lo que solo ha subido de precio. El deflactor implícito del PIB de la ficha 3.02 sale precisamente del cociente entre ambas versiones.",
            "La **remuneración de asalariados** y el **empleo** de estas cuentas son el numerador y el denominador del coste laboral unitario de la ficha 10.09. Usar el empleo de la EPA con el VAB de las cuentas produce cifras que no significan nada, y es un error frecuente en comparaciones internacionales.",
            "Las **cuentas trimestrales** de la ficha 10.10 replican esta estructura con menos información y la concilian después con la anual. Sus revisiones se entienden mirando qué enfoque se estima directamente en cada momento y cuál se deriva por diferencia.",
            "Y la **renta nacional bruta** de la ficha 10.06 es el puente entre el criterio de territorio del PIB y el de nacionalidad: en un país con inversión extranjera importante o con emigración significativa, la diferencia entre ambos no es un matiz sino una magnitud grande.",
          ],
          cierre:
            "La conclusión que conviene fijar es que **el PIB es una estimación conciliada, no una medición**. Que cuadre por tres caminos es una virtud del diseño del sistema, no una prueba de exactitud, y comportarse como si fuera una lectura de instrumento es el origen de casi todos los malentendidos sobre las revisiones.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué se restan las importaciones en el enfoque del gasto?", a: "Porque ya están contadas dentro del consumo, la inversión y las exportaciones, y no corresponden a producción interior. Restarlas es una corrección contable, no la constatación de un perjuicio. En el ejemplo los usos finales suman 1.365 y la resta de 365 deja el PIB en 1.000." },
            { q: "La producción es 1.900 y el PIB 1.000. ¿Dónde están los otros 900?", a: "Son consumos intermedios: bienes y servicios que se emplean para producir otros y cuyo valor ya está incorporado en el producto final. Restarlos evita contar varias veces el mismo valor. De ahí que sumar la facturación de los sectores sobreestime enormemente el tamaño de una economía." },
            { q: "¿Qué prueba que los tres enfoques den 1.000?", a: "Nada sobre la exactitud del dato: la coincidencia es una identidad impuesta en el proceso de conciliación. Los tres se estiman con fuentes independientes y en bruto nunca cuadran; la diferencia es la discrepancia estadística y se reparte según la fiabilidad de cada fuente, usando el marco input-output como estructura de cuadre." },
            { q: "El saldo comercial es −15 y la necesidad de financiación −30. ¿Es un error?", a: "No. La diferencia son las rentas de la propiedad netas de −20 y las transferencias corrientes netas de +5: −15 − 20 + 5 = −30. Un país con posición deudora externa puede tener superávit comercial y seguir necesitando financiación exterior si los intereses que paga fuera lo superan." },
            { q: "¿Por qué una revisión metodológica puede cambiar el nivel del PIB sin que pase nada real?", a: "Porque los benchmarks periódicos recalculan la serie con nuevas fuentes, clasificaciones y criterios del SEC. La incorporación obligatoria de la economía ilegal en 2014 elevó el PIB de varios países. Como el PIB es el denominador de las ratios de deuda y déficit, esas revisiones alteran cifras con consecuencias legales sin que nadie haya actuado." },
            { q: "¿Por qué la productividad del sector público es casi constante por construcción?", a: "Porque sus servicios carecen de precio de mercado y se valoran por sus costes de producción, principalmente salarios. Si el output se define como el coste del input, la relación entre ambos apenas puede variar. Es una convención necesaria y muy consecuente para cualquier análisis de eficiencia del sector público." },
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
              q: "En la identidad del gasto, las importaciones se restan. ¿Significa que importar reduce el PIB?",
              opciones: [
                "No: se restan porque ya están incluidas dentro del consumo, la inversión y las exportaciones",
                "No: se restan por convención estadística, sin contenido económico",
                "Sí, pero solo si se trata de bienes finales",
                "Sí: cada euro importado es un euro que no se produce dentro",
              ],
              correcta: 0,
              porque: [
                "Es una corrección para no contar como producción interior algo producido fuera. La resta deshace una suma anterior, no penaliza nada.",
                "Sí tiene contenido: evita atribuir a la producción nacional un valor generado en el extranjero.",
                "El mecanismo es el mismo con bienes intermedios, que entran en el consumo intermedio de las empresas.",
                "Un país puede importar mucho y producir mucho: son cosas independientes.",
              ],
            },
            {
              q: "Para medir el peso de un sector en la economía, ¿sirve sumar la facturación de sus empresas?",
              opciones: [
                "Sí, si se excluye a las empresas con menos de diez empleados",
                "Sí: la facturación es la medida natural del tamaño de un sector",
                "No: incluye consumos intermedios y cuenta muchas veces el mismo valor; hay que usar el valor añadido",
                "Sí, siempre que se descuente el IVA repercutido",
              ],
              correcta: 2,
              porque: [
                "El tamaño de las empresas no tiene nada que ver con la duplicación del valor intermedio.",
                "Es la medida natural del tamaño de una empresa y no del de un sector, porque al sumar se duplica lo que unas se compran a otras.",
                "En el ejemplo de la ficha, una producción de 1.900 genera un PIB de 1.000: la diferencia son consumos intermedios contados repetidamente.",
                "El IVA es un ajuste menor y no resuelve el problema de fondo, que es contar varias veces el mismo valor.",
              ],
            },
            {
              q: "Los tres enfoques de cálculo del PIB dan exactamente la misma cifra. ¿Qué prueba eso?",
              opciones: [
                "Que la economía sumergida es de tamaño despreciable",
                "Que las estimaciones son de alta calidad",
                "Nada por sí solo: la coincidencia es una identidad contable impuesta en la conciliación, no un hallazgo",
                "Que las fuentes estadísticas están bien integradas",
              ],
              correcta: 2,
              porque: [
                "La economía no observada se estima e imputa, y su tamaño no se deduce de que los tres enfoques cuadren.",
                "La calidad se juzga por las fuentes y los métodos, no por una coincidencia que se impone al final del proceso.",
                "Se estiman con fuentes independientes y la diferencia se reparte con criterios explícitos. Leer la coincidencia como comprobación es tomar el resultado del procedimiento por una validación externa.",
                "La integración ayuda, y aun con fuentes excelentes los tres enfoques en bruto no coinciden nunca.",
              ],
            },
            {
              q: "¿Por qué se dice que el PIB es bruto?",
              opciones: [
                "Porque se calcula antes de impuestos",
                "Porque no descuenta el consumo de capital fijo: una economía que solo repone su capital depreciado aparece produciendo",
                "Porque se mide a precios de mercado y no a precios básicos",
                "Porque incluye la producción de las administraciones públicas",
              ],
              correcta: 1,
              porque: [
                "El PIB a precios de mercado incorpora los impuestos sobre productos: lo de «bruto» no se refiere a eso.",
                "El producto neto es conceptualmente superior como medida de lo que un país puede consumir sin empobrecerse, y se usa menos porque la depreciación es difícil de estimar.",
                "La distinción entre precios de mercado y básicos es otra, y también existe para el producto neto.",
                "La producción pública forma parte del PIB y no es lo que explica el adjetivo.",
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
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre los tres enfoques y su conciliación es la mejor exposición disponible del contenido de esta ficha." },
            { ref: "INE, metodología de la Contabilidad Nacional Anual de España", nota: "qué fuentes se usan para cada componente y cómo se concilian; conviene ver el detalle real antes de opinar sobre revisiones." },
            { ref: "Coyle, GDP: A Brief but Affectionate History", nota: "de dónde viene el indicador, qué decidió incluir y excluir y por qué; corto y excelente para entender las fronteras convencionales." },
            { ref: "Kuznets, informe al Congreso de Estados Unidos, 1934", nota: "la advertencia original de que el bienestar de una nación difícilmente puede inferirse de este indicador, hecha por quien lo construyó." },
            { ref: "Eurostat, Manual on Measuring Non-Observed Economy", nota: "cómo se estima lo que por definición no se observa; instructivo sobre el margen real de incertidumbre de las cuentas." },
          ],
        },
      ],
    },
  ],
};
