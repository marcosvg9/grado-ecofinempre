/* Ficha 3.03 — Mercado de trabajo: paro, actividad y curva de Phillips. */

export default {
  codigo: "3.03",
  titulo: "Mercado de trabajo: paro, actividad y curva de Phillips",
  nivel: 2,
  bloque: "Macroeconomía",
  tiempo: "4 h",
  nucleo:
    "La relación paro-inflación existe a corto plazo y se desvanece cuando las expectativas se ajustan. Ese desvanecimiento no es un detalle técnico: es la razón por la que ningún gobierno puede comprar empleo permanente a cambio de inflación, y por la que la política monetaria acabó organizándose en torno a las expectativas.",
  requiere: "3.02 Inflación · 2.09 Mercados de factores",
  abre: "3.06 Oferta y demanda agregadas · 3.08 Política monetaria · 10.02 Mercado de trabajo español",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de cualquier teoría hay que fijar las definiciones, porque casi todos los malentendidos públicos sobre el paro son de contabilidad. La población de 16 años o más se divide en **activos** e **inactivos**; los activos, en **ocupados** y **parados**. Para la Encuesta de Población Activa, que sigue los criterios de la OIT, **estar parado exige tres condiciones simultáneas**: no haber trabajado ni una hora en la semana de referencia, estar disponible para trabajar y **haber buscado empleo activamente**. Quien deja de buscar sale de la población activa y **deja de contar como parado**, aunque siga queriendo trabajar. De ahí que la tasa de paro pueda bajar sin que nadie encuentre empleo, y que haya que mirar siempre la tasa de empleo junto a ella.",
            "Con esas definiciones se construyen tres tasas que responden a preguntas distintas. La **tasa de paro** divide parados entre activos y mide la presión sobre quien busca. La **tasa de actividad** divide activos entre población de 16 y más, y mide cuánta gente participa. La **tasa de empleo** divide ocupados entre esa misma población y es la más robusta de las tres, porque **no depende de la frontera entre parado e inactivo**, que es justamente la más porosa. Una lectura seria del mercado de trabajo usa las tres, y añade el horizonte de la búsqueda, la duración del paro y las horas efectivamente trabajadas.",
            "El paro se descompone en tres tipos que exigen respuestas distintas. El **friccional** procede del tiempo que lleva emparejar trabajador y puesto, existe siempre y no es indeseable: es el resultado de las fricciones de búsqueda de la ficha 2.09. El **estructural** procede de un desajuste persistente entre lo que se ofrece y lo que se demanda —cualificación, sector, territorio— o de instituciones que mantienen el salario por encima del que vaciaría el mercado. Y el **cíclico** procede de una demanda agregada insuficiente. La suma de los dos primeros define la **tasa natural** o **NAIRU**: aquella compatible con una inflación estable. Solo el paro cíclico responde a la política de demanda; el estructural exige reformas de otro orden, y **confundirlos lleva a aplicar el instrumento equivocado durante años**.",
            "Sobre esa base se entiende la **curva de Phillips**. Su versión original, de 1958, era una regularidad empírica: en los datos aparecía una relación inversa entre paro e inflación salarial. Interpretada como un menú de opciones estables, sugería que un gobierno podía elegir permanentemente **menos paro a cambio de más inflación**. Durante los años sesenta esa lectura fue el fundamento de la política macroeconómica en medio mundo.",
            "Friedman y Phelps mostraron **antes de que ocurriera** por qué esa lectura era insostenible, y ese acierto previo es lo que le dio autoridad, como recordaba la ficha 1.09. Su argumento es de una limpieza notable: lo que importa para las decisiones de empresas y trabajadores es el salario **real**, no el nominal. Una inflación por encima de lo esperado reduce el salario real y estimula el empleo **solo mientras dure la sorpresa**. En cuanto las expectativas incorporan la nueva inflación, el salario real vuelve a su nivel, el paro regresa a su tasa natural y **lo único que queda es más inflación**. La curva pasa así a incluir las expectativas, y la de largo plazo es **vertical** en la tasa natural.",
            "La consecuencia práctica es dura y quedó confirmada por la estanflación de los setenta: **mantener el paro por debajo de su tasa natural no produce inflación alta, produce inflación creciente**. Y el proceso funciona igual en sentido contrario: desinflar exige mantener el paro **por encima** de la tasa natural durante un tiempo, con un coste en empleo que se mide con la **tasa de sacrificio**. De ahí que la credibilidad del banco central sea tan valiosa: si el anuncio de una política antiinflacionista se cree, las expectativas caen sin necesidad de tanta recesión. Y de ahí también la **histéresis**, la posibilidad de que un paro cíclico prolongado eleve la propia tasa natural al deteriorarse la empleabilidad de los parados de larga duración, borrando la frontera limpia entre cíclico y estructural.",
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
            { nom: "Población activa", sub: "Criterio OIT, no administrativo.", cols: ["Activos = Ocupados + Parados"] },
            { nom: "Tasa de paro", sub: "Depende de quién se cuenta como activo.", cols: ["u = Parados / Activos"] },
            { nom: "Tasa de actividad", sub: "Cuánta gente participa.", cols: ["Activos / Población de 16 y más"] },
            { nom: "Tasa de empleo", sub: "La más robusta: no depende de la frontera parado-inactivo.", cols: ["Ocupados / Población de 16 y más"] },
            { nom: "Tasa natural o NAIRU", sub: "Friccional más estructural.", cols: ["$u_n$: la compatible con inflación estable"] },
            { nom: "Curva de Phillips con expectativas", sub: "La sorpresa es lo que mueve el paro.", cols: ["$\\pi = \\pi^e - \\alpha(u - u_n)$"] },
            { nom: "Expectativas adaptativas", sub: "Producen inflación acelerada, no solo alta.", cols: ["$\\pi^e_t = \\pi_{t-1}$"] },
            { nom: "Curva de largo plazo", sub: "No hay menú permanente que elegir.", cols: ["$\\pi = \\pi^e \\Rightarrow u = u_n$, vertical"] },
            { nom: "Tasa de sacrificio", sub: "Lo que cuesta desinflar en empleo.", cols: ["Puntos de paro-año por punto de inflación"] },
            { nom: "Histéresis", sub: "Borra la frontera entre cíclico y estructural.", cols: ["$u$ alto persistente $\\Rightarrow$ ↑ $u_n$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: definiciones y aceleración",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía tiene **40.000** personas de 16 años o más. De ellas, **20.500 están ocupadas** y **2.500 buscan empleo activamente**; el resto son inactivas. Con esos datos salen las tres tasas.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Activos", "Parados", "Tasa de paro", "Tasa de empleo"],
          filas: [
            ["Punto de partida", "23.000", "2.500", "10,87 %", "51,25 %"],
            { celdas: ["500 parados dejan de buscar", "22.500", "2.000", "8,89 %", "51,25 %"], clase: "total" },
          ],
          nota: "**La tasa de paro cae casi dos puntos sin que nadie haya encontrado trabajo.** Los 500 que dejaron de buscar salen de la población activa y desaparecen del numerador y del denominador a la vez. La tasa de empleo, en cambio, **no se mueve en absoluto**, porque su denominador es la población total y esta no ha cambiado. Ahí está el motivo de mirar siempre las dos: el efecto desánimo mejora una y deja intacta la otra, y el efecto contrario —gente que vuelve a buscar cuando mejora el ciclo— puede hacer que la tasa de paro suba mientras se está creando empleo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Ahora la aceleración.** Sea una economía con tasa natural del **8 %** y una curva $\\pi = \\pi^e - 0{,}5(u - u_n)$, con expectativas que simplemente repiten la inflación del año anterior. El gobierno decide mantener el paro en el **5 %**, tres puntos por debajo de la natural, y sostenerlo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Periodo", "Paro", "Inflación esperada", "Inflación resultante"],
          filas: [
            ["1", "5 %", "2,0 %", "3,5 %"],
            ["2", "5 %", "3,5 %", "5,0 %"],
            ["3", "5 %", "5,0 %", "6,5 %"],
            { celdas: ["4", "5 %", "6,5 %", "8,0 %"], clase: "total" },
          ],
          nota: "El paro se mantiene en el 5 % **y la inflación no se estabiliza en ningún nivel: crece 1,5 puntos cada periodo, indefinidamente**. Ese es el resultado que la lectura ingenua de Phillips no contemplaba y que los años setenta confirmaron. La política no compra un punto de paro a cambio de un nivel de inflación: lo compra a cambio de **una aceleración permanente**, que es un precio de naturaleza completamente distinta. Y el mecanismo funciona igual al revés: para desinflar desde el 8 %, mantener el paro en el 11 % durante un periodo devuelve la inflación al 6,5 %.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Tasa de paro %", y: "Inflación %" },
          dominio: { x: [2, 14], y: [0, 9] },
          marcasX: [2, 5, 8, 11, 14],
          marcasY: [0, 2, 4, 6, 8],
          series: [
            { nombre: "Largo plazo", color: "tinta", puntos: [[8, 0], [8, 8.6]], etiquetaEn: [8, 8.6] },
            { nombre: "Corto plazo, πe = 2", color: "acento", trazo: "discontinuo", puntos: [[3, 4.5], [13, -0.5]], etiquetaEn: [3.4, 4.6] },
            { nombre: "Corto plazo, πe = 5", color: "alerta", trazo: "discontinuo", puntos: [[3, 7.5], [13, 2.5]], etiquetaEn: [3.4, 7.6] },
          ],
          puntos: [
            { x: 8, y: 2, etiqueta: "A", guias: false },
            { x: 5, y: 3.5, etiqueta: "B", guias: false },
            { x: 8, y: 5, etiqueta: "C", guias: false },
            { x: 5, y: 6.5, etiqueta: "D", guias: false },
          ],
          nota: "El recorrido lo explica todo. Desde **A**, con paro natural e inflación del 2 %, expandir la demanda lleva a **B**: menos paro a costa de más inflación, exactamente el menú que prometía la curva original. Pero las expectativas se ajustan, la curva de corto plazo se desplaza hacia arriba y la economía acaba en **C**: **el mismo paro que al principio y tres puntos más de inflación**. Insistir lleva a **D**, y desde ahí a otra curva más alta. La línea vertical es el único lugar donde la economía puede quedarse quieta, y por eso la disyuntiva de largo plazo no existe.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el paro español no baja de dos dígitos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La economía española ha convivido durante décadas con tasas de paro muy superiores a las de sus vecinos incluso en la cima de sus expansiones, y con oscilaciones cíclicas de amplitud excepcional. Es el caso ideal para ver por qué la distinción entre paro cíclico y estructural, que en el aula parece nítida, en la práctica no lo es.",
            "**Lo primero que hay que aceptar es que buena parte no es cíclico.** Si en el punto más alto del ciclo, con la economía creciendo con fuerza, el paro no baja de un umbral elevado, ese suelo no puede explicarse por demanda insuficiente. Estimar cuál es exactamente ese suelo es difícil —la NAIRU no se observa, se estima con incertidumbre considerable, como el producto potencial de la ficha 3.01— pero su existencia es difícil de discutir. **Y si es estructural, la política de demanda no lo resuelve**, por mucho que se insista.",
            "**Los mecanismos candidatos son varios y no excluyentes.** La **dualidad** contractual de la ficha 2.09 concentra todo el ajuste en un colectivo, lo que amplifica enormemente la destrucción de empleo en las recesiones y desincentiva la inversión en formación específica. La **composición sectorial**, con peso elevado de actividades muy estacionales y sensibles al ciclo, añade volatilidad. El **desajuste de cualificaciones y territorial** dificulta el emparejamiento, y la baja movilidad geográfica —muy ligada al régimen de tenencia de la vivienda— lo agrava. Y la **negociación colectiva** determina cómo se reparte el ajuste entre salarios y empleo: cuanto menos se ajustan los salarios, más se ajusta el empleo.",
            "**La histéresis lo complica todo.** Un paro cíclico prolongado no se limita a esperar la recuperación: deteriora la empleabilidad de quienes lo sufren, porque las cualificaciones se deprecian, las redes profesionales se pierden y el propio historial de desempleo actúa como señal negativa para los empleadores, en el sentido de la ficha 2.09. El resultado es que **una parte del paro cíclico se convierte en estructural con el tiempo**, elevando la propia NAIRU. La consecuencia de política es importante: la lentitud en responder a una recesión no solo tiene un coste transitorio, **puede tener uno permanente**.",
            "**Y de ahí una implicación que ordena el debate.** Si hay histéresis, la distinción tajante entre «esto es cíclico, actúe la política de demanda» y «esto es estructural, hagan reformas» deja de sostenerse: **la velocidad de la respuesta cíclica afecta al componente estructural**. Ambas familias de medidas dejan de ser alternativas y pasan a ser complementarias, con una prioridad temporal clara: cuanto antes se cierre la brecha cíclica, menos estructura habrá que reformar después.",
            "**Lo que este caso enseña sobre el uso de los modelos.** La curva de Phillips con expectativas explica muy bien por qué no se puede sostener el paro por debajo de su tasa natural. Lo que no explica es **de qué depende esa tasa natural**, que es precisamente la pregunta relevante para España. Para eso hacen falta los modelos de búsqueda y las instituciones laborales de la ficha 2.09 y los datos de la 10.02. Es un ejemplo perfecto de la tesis de la ficha 1.08: **el modelo correcto es el que responde a la pregunta que se está haciendo**, y aquí la pregunta ha cambiado.",
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
            { t: "Interpretar una caída de la tasa de paro como creación de empleo", d: "Puede deberse al efecto desánimo: quien deja de buscar sale de la población activa y desaparece del cálculo. En el ejemplo, la tasa baja de 10,87 % a 8,89 % sin que nadie encuentre trabajo. Por eso hay que mirar la tasa de empleo, cuyo denominador no depende de esa frontera." },
            { t: "Confundir el paro registrado con el paro EPA", d: "El registrado cuenta demandantes inscritos en las oficinas y depende de incentivos administrativos a inscribirse; el de la EPA aplica los criterios OIT mediante encuesta. Miden cosas distintas y sus niveles y perfiles difieren, así que no son intercambiables." },
            { t: "Creer que la curva de Phillips ofrece un menú estable", d: "Solo lo ofrece mientras las expectativas no se ajusten. Cuando lo hacen, la curva de corto plazo se desplaza y la economía vuelve a la tasa natural con más inflación. La de largo plazo es vertical, y por eso la disyuntiva permanente no existe." },
            { t: "Suponer que sostener el paro bajo produce inflación alta pero estable", d: "Produce inflación creciente. En el ejemplo, mantener el paro tres puntos por debajo de la natural añade 1,5 puntos de inflación cada periodo, indefinidamente. El precio no es un nivel, es una aceleración." },
            { t: "Tratar la tasa natural como un dato observable", d: "No se observa: se estima, con incertidumbre considerable y con métodos que dan resultados distintos. Además puede moverse con las instituciones y con la propia historia del paro, de modo que no es ni siquiera un parámetro fijo." },
            { t: "Aplicar política de demanda al paro estructural", d: "El paro friccional y el estructural no responden a la demanda agregada; expandirla solo genera inflación. Distinguir qué parte es cíclica es difícil en tiempo real, y equivocarse en el diagnóstico lleva a mantener durante años el instrumento equivocado." },
            { t: "Olvidar la histéresis al separar cíclico de estructural", d: "Un paro cíclico prolongado deteriora la empleabilidad y puede elevar la propia tasa natural. Eso significa que la frontera entre ambos no es fija y que la lentitud en responder a una recesión puede tener consecuencias permanentes, no solo transitorias." },
            { t: "Ignorar el coste de desinflar", d: "El mecanismo funciona simétricamente: reducir la inflación exige mantener el paro por encima de la tasa natural durante un tiempo. La tasa de sacrificio mide ese coste, y la credibilidad del banco central es valiosa precisamente porque lo reduce." },
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
            "El empleo se mide con varias fuentes que no coinciden, y saber qué mide cada una evita discusiones sobre datos que no son comparables.",
          ],
          lista: [
            "La **EPA** es una encuesta trimestral a hogares que aplica los criterios de la OIT y permite comparar internacionalmente. La **afiliación a la Seguridad Social** es un registro administrativo que cuenta relaciones laborales, no personas: quien tiene dos empleos cuenta dos veces. Y la **Contabilidad Nacional** estima los **puestos de trabajo equivalentes a tiempo completo**, que es la magnitud coherente con el PIB.",
            "Esa tercera es la que hay que usar para calcular **productividad**, porque su denominador es homogéneo con el numerador. Dividir el PIB por ocupados de la EPA mezcla dos marcos estadísticos distintos, y la diferencia no es despreciable cuando cambia la composición entre tiempo completo y parcial.",
            "Las **horas efectivamente trabajadas** son la medida más fina del insumo laboral y la que revela ajustes que el número de ocupados oculta: reducciones de jornada, expedientes temporales de empleo, horas extraordinarias. Un mercado puede ajustar mucho por horas y poco por empleo, o al revés, y eso cambia por completo la lectura del ciclo.",
            "La **NAIRU** y el **producto potencial** se estiman conjuntamente en los modelos de organismos internacionales y de la Comisión Europea, y sus estimaciones **se revisan sustancialmente a posteriori**. Como se emplean en reglas fiscales, la ficha 10.10 muestra por qué eso es un problema práctico y no solo metodológico.",
            "Y la **remuneración de asalariados** (D.1) de la ficha 2.09 combinada con las horas da el **coste laboral unitario** de la ficha 10.09, que es el puente entre este mercado y la competitividad exterior de la ficha 3.10.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: casi todas las series de productividad que circulan mezclan fuentes, y esa mezcla explica una parte de las discrepancias que se atribuyen a la economía real.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "500 parados dejan de buscar empleo. ¿Qué pasa con la tasa de paro y con la de empleo?", a: "La tasa de paro cae —en el ejemplo, del 10,87 % al 8,89 %— porque esas personas salen de la población activa. La tasa de empleo no se mueve, porque su denominador es la población de 16 y más, que no ha cambiado. Es el efecto desánimo, y por eso hay que mirar ambas." },
            { q: "¿Por qué la curva de Phillips de largo plazo es vertical?", a: "Porque lo que estimula el empleo es la inflación no esperada, que reduce el salario real. Cuando las expectativas incorporan la nueva inflación, el salario real se restablece y el paro vuelve a su tasa natural. A largo plazo, cualquier nivel de inflación es compatible con esa misma tasa de paro." },
            { q: "Un gobierno mantiene el paro tres puntos por debajo de la tasa natural. ¿Qué inflación resulta?", a: "No una inflación alta y estable, sino creciente. Con la curva del ejemplo, la inflación aumenta 1,5 puntos cada periodo indefinidamente, porque las expectativas persiguen a la inflación realizada y la sorpresa hay que renovarla cada vez." },
            { q: "¿Qué es la histéresis y por qué complica el diagnóstico?", a: "Es que un paro cíclico prolongado eleve la propia tasa natural, al depreciarse las cualificaciones y actuar el historial de desempleo como señal negativa. Complica el diagnóstico porque borra la frontera entre cíclico y estructural, y hace que la lentitud en responder a una recesión tenga efectos permanentes." },
            { q: "¿Por qué no debe dividirse el PIB entre los ocupados de la EPA para medir productividad?", a: "Porque mezcla dos marcos estadísticos. El PIB procede de la Contabilidad Nacional, que estima puestos equivalentes a tiempo completo y horas trabajadas; la EPA cuenta personas ocupadas por encuesta. Lo coherente es dividir el PIB entre las horas o los puestos equivalentes de la propia Contabilidad Nacional." },
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
              q: "La tasa de paro baja del 10,87 % al 8,89 % sin que se haya creado un solo empleo. ¿Cómo es posible?",
              opciones: [
                "Es imposible: la tasa solo baja si aumenta la ocupación",
                "Por el efecto desánimo: quien deja de buscar sale de la población activa y desaparece del denominador",
                "Porque han bajado los salarios y eso reduce el paro medido",
                "Porque el paro registrado y el de la EPA se han acercado",
              ],
              correcta: 1,
              porque: [
                "La tasa es un cociente y puede bajar por el numerador o por el denominador. Suponer que solo se mueve por creación de empleo es leer mal la definición.",
                "La tasa se calcula sobre los activos, y quien abandona la búsqueda deja de contar como parado y también como activo. Por eso conviene mirar la tasa de empleo junto a la de paro.",
                "Los salarios no entran en el cálculo de la tasa de paro, que es puramente un recuento de personas.",
                "Son dos estadísticas independientes con metodologías distintas; que converjan no altera el cálculo de ninguna de las dos.",
              ],
            },
            {
              q: "Un gobierno mantiene el paro tres puntos por debajo de la tasa natural durante años. ¿Qué ocurre con la inflación?",
              opciones: [
                "Se instala en un nivel más alto pero estable",
                "Crece indefinidamente: cada periodo añade 1,5 puntos más",
                "Sube al principio y vuelve sola a su nivel anterior",
                "No cambia si el banco central mantiene su objetivo",
              ],
              correcta: 1,
              porque: [
                "Sería estable si las expectativas no se ajustaran. Como sí lo hacen —repiten la inflación del año anterior—, la curva de corto plazo se desplaza hacia arriba cada periodo.",
                "Con $\\pi = \\pi^e - 0{,}5(u - u_n)$ y expectativas adaptativas, sostener la brecha suma el mismo incremento una y otra vez. No hay menú estable entre paro e inflación.",
                "Volvería sola si el gobierno dejara que el paro regresara a su tasa natural. Mantenerlo por debajo es precisamente lo que impide ese retorno.",
                "El objetivo declarado no basta: si la política efectiva sostiene el paro bajo, las expectativas siguen a la inflación observada, no al anuncio.",
              ],
            },
            {
              q: "¿Es la tasa natural de paro un dato que pueda consultarse?",
              opciones: [
                "Sí: la publican los institutos estadísticos",
                "No: se estima con incertidumbre considerable y métodos que dan resultados distintos",
                "Sí, y es estable en el tiempo para cada país",
                "No, pero puede deducirse del paro observado en los años de expansión",
              ],
              correcta: 1,
              porque: [
                "No es una magnitud observable como la ocupación o los precios: es un concepto teórico que hay que inferir de los datos.",
                "Y además puede moverse con las instituciones laborales y con la productividad, así que una estimación de hace diez años no sirve hoy sin revisarla.",
                "Ni es estable ni es observable. La histéresis implica que un paro cíclico prolongado puede elevarla.",
                "El paro de los años buenos mezcla componente cíclico y estructural, así que tomarlo como referencia arrastra el ciclo dentro de la estimación.",
              ],
            },
            {
              q: "¿Por qué se dice que la frontera entre paro cíclico y estructural no es fija?",
              opciones: [
                "Porque depende de qué definición estadística se adopte",
                "Por la histéresis: un paro cíclico prolongado deteriora la empleabilidad y puede elevar la propia tasa natural",
                "Porque el paro friccional se cuenta unas veces en un grupo y otras en otro",
                "Porque los datos se revisan con frecuencia",
              ],
              correcta: 1,
              porque: [
                "La definición influye en la medición, pero el fenómeno es real e independiente de cómo se cuente: la duración del paro cambia lo que una persona puede hacer.",
                "Y de ahí una consecuencia de política importante: dejar que el paro cíclico se prolongue no es neutral, porque lo vuelve estructural y ya no responde a la demanda.",
                "El paro friccional es una categoría estable dentro del estructural; no es donde está la ambigüedad.",
                "Las revisiones estadísticas afectan a las cifras, no a que una categoría pueda convertirse en la otra.",
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
            { ref: "Blanchard, Macroeconomía", nota: "los capítulos del mercado de trabajo y de la curva de Phillips, con la derivación completa del papel de las expectativas." },
            { ref: "Friedman, «The Role of Monetary Policy»", nota: "la conferencia de 1968 que anticipó la estanflación; se lee en una hora y cambió la macroeconomía." },
            { ref: "Blanchard y Summers, «Hysteresis and the European Unemployment Problem»", nota: "el trabajo que introdujo la histéresis para explicar el paro europeo persistente." },
            { ref: "INE, metodología de la EPA · Banco de España, informes del mercado laboral", nota: "las definiciones exactas y los datos españoles; imprescindibles antes de discutir el caso práctico." },
          ],
        },
      ],
    },
  ],
};
