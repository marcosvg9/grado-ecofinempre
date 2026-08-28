/* Ficha 2.09 — Mercados de factores y determinacion de salarios. */

export default {
  codigo: "2.09",
  titulo: "Mercados de factores y determinación de salarios",
  nivel: 3,
  bloque: "Microeconomía",
  tiempo: "4 h",
  nucleo:
    "El salario igual a la productividad marginal es la predicción de un modelo con supuestos muy exigentes, y casi ninguno se cumple. Entender qué supuesto falla en cada caso —poder de compra del empleador, información, fricciones de búsqueda— es lo que convierte la teoría en algo utilizable.",
  requiere: "2.04 Tecnología y producción · 2.06 Competencia perfecta",
  abre: "10.02 Mercado de trabajo español · 9.06 Personas e incentivos · 3.03 Paro y curva de Phillips",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La demanda de trabajo es una **demanda derivada**: nadie contrata por contratar, sino porque el trabajo produce algo que se vende. De ahí sale su expresión exacta: contratar una hora más aporta a la empresa el producto que esa hora genera multiplicado por el precio al que se vende, es decir, el **valor del producto marginal**, y conviene contratar mientras eso supere al salario. En competencia perfecta en ambos mercados, la condición de óptimo es $w = P \\cdot \\mathrm{PMg}_L$. Como la productividad marginal es decreciente, la curva de demanda de trabajo tiene pendiente negativa, y como el precio del producto entra multiplicando, **la demanda de trabajo se desploma cuando cae la demanda del bien**, aunque la productividad no haya cambiado un ápice.",
            "La **oferta de trabajo** es un problema de elección entre consumo y ocio, y tiene una peculiaridad que conviene ver. Una subida del salario encarece el ocio y empuja a trabajar más —efecto sustitución— pero también hace más rica a la persona, y con más renta se desea más ocio —efecto renta—. Son los dos efectos de la ficha 2.03 aplicados aquí, y como **apuntan en direcciones opuestas**, la oferta individual de trabajo puede volverse hacia atrás a salarios altos. A escala agregada, además, buena parte del ajuste no ocurre en las horas de cada uno sino en **cuánta gente participa**, que es un margen distinto y mucho más sensible en algunos colectivos.",
            "Con esos dos lados, el modelo competitivo predice un salario igual al valor del producto marginal, y de ahí se derivan afirmaciones muy conocidas: que cada factor recibe lo que aporta, que un salario mínimo por encima del equilibrio destruye empleo, que las diferencias salariales reflejan diferencias de productividad. **Todas esas afirmaciones son correctas dentro del modelo**, y el resto de la ficha consiste en examinar qué pasa cuando sus supuestos no se cumplen, que es lo habitual.",
            "El primer supuesto que cae es el de que el empleador es precio-aceptante. En un **monopsonio** —un único comprador de trabajo, o más realistamente un empleador con poder de fijación de salarios por aislamiento geográfico, especialización o costes de movilidad— la empresa afronta una oferta de trabajo creciente: para contratar a uno más tiene que subir el salario, **y subírselo también a todos los que ya tenía**. El coste marginal de contratar excede por tanto al salario, exactamente igual que el ingreso marginal del monopolista quedaba por debajo del precio. El resultado es que **se emplea menos y se paga menos que en competencia**, y el salario queda por debajo del valor del producto marginal. De ahí sale la predicción más contraintuitiva de la ficha: en un mercado monopsonista, **un salario mínimo bien calibrado puede aumentar simultáneamente el salario y el empleo**. No es una anomalía empírica: es lo que el modelo predice.",
            "El segundo supuesto que cae es el de trabajo homogéneo. La teoría del **capital humano** trata la educación y la experiencia como una inversión: se renuncia a renta hoy y se paga un coste directo a cambio de una prima salarial durante el resto de la vida laboral, de modo que la decisión se evalúa como cualquier proyecto de la ficha 7.03. Existe una explicación rival importante: la **señalización**. Si la formación no aumentara la productividad en absoluto pero fuera más barata de obtener para quien ya es productivo, seguiría siendo racional cursarla y seguiría estando asociada a salarios altos. Ambas explicaciones predicen la misma correlación entre estudios y salario, y **separarlas empíricamente es difícil**; la respuesta razonable es que las dos operan y su peso varía por titulación.",
            "Y queda todo lo que el modelo competitivo deja fuera y explica la mayor parte de la dispersión salarial observada. Las **fricciones de búsqueda y emparejamiento**: encontrar trabajador y trabajo lleva tiempo y recursos, lo que genera paro incluso en equilibrio y crea una renta a repartir entre las partes, repartida según su poder de negociación. Los **salarios de eficiencia**: pagar por encima del mercado puede ser rentable si reduce la rotación, atrae mejores candidatos o aumenta el esfuerzo, y en ese caso el salario alto es causa de la productividad y no su consecuencia. Las **diferencias compensatorias**, que retribuyen condiciones penosas o riesgo. La **negociación colectiva**, que fija el salario mediante un reparto negociado del excedente. Y la **discriminación**, que produce diferencias no explicadas por productividad. La conclusión práctica es que **observar que dos personas cobran distinto no permite inferir que produzcan distinto**, y que la mayor parte del trabajo empírico en economía laboral consiste precisamente en separar estas causas.",
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
            { nom: "Valor del producto marginal", sub: "Lo que aporta a la empresa una unidad más de trabajo.", cols: ["$\\mathrm{VPMg}_L = P \\cdot \\mathrm{PMg}_L$"] },
            { nom: "Óptimo en competencia", sub: "Vale para cualquier factor, no solo el trabajo.", cols: ["$w = \\mathrm{VPMg}_L$ · $r = \\mathrm{VPMg}_K$"] },
            { nom: "Elasticidad de la demanda de trabajo", sub: "Mayor cuanto más sustituible sea el factor.", cols: ["Depende de $\\sigma$ y de la elasticidad de la demanda del bien"] },
            { nom: "Coste marginal del trabajo en monopsonio", sub: "Subir el salario afecta a toda la plantilla.", cols: ["$\\mathrm{CMg}_L = w + L\\,\\dfrac{dw}{dL} > w$"] },
            { nom: "Óptimo del monopsonista", sub: "Emplea menos y paga menos que en competencia.", cols: ["$\\mathrm{VPMg}_L = \\mathrm{CMg}_L$, con $w < \\mathrm{VPMg}_L$"] },
            { nom: "Tasa de explotación de Pigou", sub: "Mide la brecha en términos relativos.", cols: ["$E = \\dfrac{\\mathrm{VPMg}_L - w}{\\mathrm{VPMg}_L}$"] },
            { nom: "Inversión en capital humano", sub: "Se evalúa como cualquier proyecto de inversión.", cols: ["$\\mathrm{VAN} = \\sum_t \\dfrac{\\text{prima}_t}{(1+r)^t} - \\text{coste directo} - \\text{renta perdida}$"] },
            { nom: "Ecuación de salarios de Mincer", sub: "La especificación empírica estándar.", cols: ["$\\ln w = \\alpha + \\beta\\,\\text{estudios} + \\gamma\\,\\text{exp} + \\delta\\,\\text{exp}^2 + u$"] },
            { nom: "Excedente del emparejamiento", sub: "Las fricciones crean una renta que hay que repartir.", cols: ["S = VPMg − valor de la mejor alternativa"] },
            { nom: "Reparto negociado", sub: "$\\beta$ es el poder de negociación del trabajador.", cols: ["w = alternativa + $\\beta$ · S"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: monopsonio y salario mínimo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa tiene un valor del producto marginal del trabajo **VPMg = 100 − 4L** y es el único empleador relevante de su comarca, de modo que afronta toda la oferta de trabajo local, **w = 10 + 0,5L**. Si el mercado fuera competitivo, el salario se fijaría donde la oferta cruza al valor del producto marginal: **L = 20 y w = 20**.",
            "Pero la empresa no toma el salario como dado. Sabe que contratar a uno más la obliga a subir el salario a **toda la plantilla**, así que su coste marginal de contratar no es w sino **10 + L**. Igualándolo al valor del producto marginal obtiene **L = 18** y paga **w = 19**, mientras que el trabajador número 18 le aporta **28**.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Trabajadores", y: "Euros" },
          dominio: { x: [0, 26], y: [0, 45] },
          marcasX: [0, 5, 10, 15, 20, 25],
          marcasY: [0, 10, 20, 30, 40],
          series: [
            {
              nombre: "Coste marginal",
              color: "alerta",
              grosor: 2.2,
              etiquetaEn: [26, 36],
              puntos: [[0, 10], [26, 36]],
            },
            {
              nombre: "Oferta de trabajo",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [26, 23],
              puntos: [[0, 10], [26, 23]],
            },
            {
              nombre: "VPMg",
              color: "tinta2",
              grosor: 2.2,
              etiquetaEn: [24, 4],
              puntos: [[0, 100], [24, 4]],
            },
          ],
          puntos: [
            { x: 18, y: 28, etiqueta: "VPMg del último", guias: false },
            { x: 18, y: 19, etiqueta: "monopsonio: paga 19", guias: true },
            { x: 20, y: 20, etiqueta: "competencia", guias: false },
          ],
          nota: "La clave está en que **la curva de coste marginal va por encima de la de oferta**, y no un poco: contratar a uno más obliga a subir el salario **a toda la plantilla**, así que el coste real del último trabajador duplica la pendiente. El monopsonista iguala ese coste marginal al valor del producto y se detiene en **18 trabajadores**, pero paga lo que dice la curva de oferta para ese nivel: **19 €**. Ahí está la brecha vertical de 9 € entre lo que aporta el último trabajador —28— y lo que cobra. La consecuencia contraintuitiva se lee directamente: **un salario mínimo entre 20 y 28 aumenta a la vez el empleo y el salario**, porque elimina el incentivo a restringir la contratación. Por encima de 28 vuelve a destruir empleo. **El signo del efecto depende de dónde caiga el mínimo**, y por eso la teoría sola no lo decide.",
        },
        {
          tipo: "tabla",
          cabecera: ["Régimen", "Salario", "Empleo", "VPMg del último", "Brecha"],
          filas: [
            ["Mercado competitivo", "20,00", "20,0", "20,00", "0,00"],
            ["Monopsonio sin regular", "19,00", "18,0", "28,00", "9,00"],
            { celdas: ["Salario mínimo de 20", "20,00", "20,0", "20,00", "0,00"], clase: "total" },
            ["Salario mínimo de 25", "25,00", "18,8", "25,00", "0,00"],
            ["Salario mínimo de 28", "28,00", "18,0", "28,00", "0,00"],
            ["Salario mínimo de 30", "30,00", "17,5", "30,00", "0,00"],
          ],
          nota: "La fila destacada es la que rompe la intuición del modelo competitivo: un salario mínimo de 20 **sube el salario y a la vez aumenta el empleo** de 18 a 20 trabajadores. La razón es que al fijar el salario por ley se elimina el motivo que tenía la empresa para restringir la contratación —ya no le encarece la plantilla entera—, y vuelve a contratar hasta que el valor del producto marginal iguala al salario. Nótese también que **hasta 28 el empleo no baja del nivel de monopsonio**, y que solo a partir de ahí el salario mínimo destruye empleo respecto de la situación de partida. La relación entre salario mínimo y empleo no es monótona: depende de dónde se sitúe respecto al salario competitivo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Cómo se usa esto en la práctica.** El ejemplo no demuestra que subir el salario mínimo siempre cree empleo: demuestra que **el signo del efecto depende de la estructura del mercado**, y que por tanto no puede deducirse de la teoría sin más. En un mercado competitivo el efecto es negativo; en uno monopsonista puede ser positivo hasta cierto umbral y negativo después. Por eso la literatura empírica se centra en medir cuánto poder de fijación de salarios tienen realmente los empleadores, y por eso los resultados varían según el país, el sector y el nivel del que se parta.",
            "**Y el segundo ejemplo, la educación como inversión.** Una persona que gana 20.000 al año se plantea un curso adicional que cuesta 3.000 de matrícula y le obliga a dejar de trabajar un año. Se estima que le reportará una prima salarial del 8 % durante los 40 años de vida laboral restantes.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Coste directo", "Matrícula", "3.000"],
            ["Coste de oportunidad", "Salario del año no trabajado", "20.000"],
            ["Inversión total", "Suma de ambos", "23.000"],
            ["Prima salarial anual", "8 % sobre 20.000", "1.600"],
            { celdas: ["Rentabilidad de la inversión", "TIR a 40 años", "6,37 %"], clase: "total" },
          ],
          nota: "El **coste de oportunidad es casi siete veces el coste directo**, y es el que casi nunca se cuenta al hablar del precio de estudiar. La decisión se toma comparando ese 6,37 % con el coste de los fondos y con el riesgo: es rentable frente a una alternativa segura al 3 %, discutible frente a una del 6 % con menos incertidumbre. Y conviene retener que **la prima estimada es una media**: la dispersión por titulación es enorme, y aplicar el promedio a un caso concreto es el error habitual.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la dualidad del mercado de trabajo español",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Si hay un rasgo que ha definido el mercado de trabajo español durante décadas es la **dualidad**: dos colectivos con protección muy distinta haciendo a menudo el mismo trabajo. Analizarla obliga a usar casi todo lo de esta ficha y muestra por qué el modelo competitivo, por sí solo, no llega.",
            "**El punto de partida es que el coste de despido es un coste del puesto, no del trabajador.** Cuando la diferencia de indemnización entre dos tipos de contrato es grande, la empresa afronta costes muy distintos por dos personas igual de productivas. En el modelo competitivo puro eso debería compensarse con salarios: quien tiene menos protección debería cobrar más, como diferencia compensatoria. **Ese ajuste no se observa**, y lo que se observa es lo contrario: menos protección y además menor salario. La explicación tiene que venir del poder de negociación, no de la productividad.",
            "**El mecanismo es el reparto del excedente del emparejamiento.** El trabajador indefinido tiene una alternativa mejor —conserva su puesto y una indemnización si lo despiden— y por tanto negocia desde una posición fuerte. El temporal tiene una alternativa peor y capta una fracción menor del mismo excedente. Con la fórmula de la ficha, el mismo valor del producto marginal genera dos salarios distintos porque **cambia el punto de referencia, no la productividad**.",
            "**Las consecuencias se encadenan.** El puesto temporal, al ser corto, hace que ni la empresa ni el trabajador tengan incentivo a invertir en formación específica: la inversión de la sección anterior no se recupera si la relación acaba en meses. Eso deprime la productividad del propio puesto, lo que a su vez justifica mantenerlo precario. Es un equilibrio que se refuerza solo, y es probablemente el ejemplo más claro de que **una institución del mercado laboral puede acabar generando la baja productividad que dice constatar**.",
            "**Y añade un efecto sobre el ciclo.** Si el ajuste ante una caída de la demanda recae casi por completo sobre un colectivo, el empleo se vuelve muy sensible al ciclo: se destruye con enorme rapidez en las recesiones y se recupera con contratos otra vez temporales. Ese es uno de los motivos por los que el paro español ha oscilado históricamente con una amplitud muy superior a la de sus vecinos, un fenómeno que la ficha 10.02 documenta con datos.",
            "**Qué hay que mirar para evaluar una reforma**, y aquí conviene ser honesto sobre los límites del análisis. Reducir la brecha entre tipos de contrato ataca el mecanismo descrito, y la reforma laboral de 2021 redujo de forma marcada la temporalidad medida. Pero **la temporalidad medida y la rotación efectiva no son lo mismo**: la pregunta relevante es si las relaciones laborales duran más, no solo cómo se etiqueta el contrato. Es una cuestión empírica que exige seguir los datos de afiliación durante varios años y a lo largo de un ciclo completo, no una que se cierre con teoría.",
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
            { t: "Leer «el salario iguala a la productividad marginal» como una ley", d: "Es la predicción de un modelo con competencia perfecta en el mercado de trabajo y en el de producto, información completa y movilidad sin coste. Cuando esos supuestos fallan —y suelen fallar— el salario se separa del valor del producto marginal de forma sistemática, no aleatoria." },
            { t: "Confundir productividad marginal con productividad media", d: "La demanda de trabajo depende de la marginal: lo que aporta el siguiente trabajador. La productividad media, producción dividida por empleo, es la que suele publicarse y puede moverse en dirección contraria. Un sector con productividad media alta puede tener productividad marginal baja." },
            { t: "Deducir que todo salario mínimo destruye empleo", d: "Es correcto en un mercado competitivo y falso en uno monopsonista por debajo de cierto umbral, donde aumenta salario y empleo a la vez. El signo del efecto es una cuestión empírica sobre la estructura del mercado, no una deducción teórica." },
            { t: "Atribuir toda la brecha salarial a diferencias de productividad", d: "Puede deberse también a poder de negociación, fricciones de búsqueda, salarios de eficiencia, diferencias compensatorias o discriminación. Separar esas causas es el objeto de buena parte de la economía laboral aplicada, y ninguna se identifica solo comparando salarios." },
            { t: "Olvidar el coste de oportunidad al evaluar los estudios", d: "En el ejemplo, la renta no percibida durante el año de estudio es casi siete veces la matrícula. Ignorarla infla enormemente la rentabilidad aparente de cualquier formación y es el error más frecuente al comparar titulaciones por su precio." },
            { t: "Dar por hecho que la educación causa el salario alto", d: "La teoría de la señalización predice la misma correlación sin que la formación aumente la productividad, siempre que sea más barata de obtener para quien ya es más productivo. Ambos mecanismos operan y su peso relativo varía por titulación; la correlación por sí sola no distingue entre ellos." },
            { t: "Tratar el paro como prueba de que el mercado no se vacía", d: "En los modelos de búsqueda y emparejamiento existe paro en equilibrio, porque encontrar el puesto adecuado lleva tiempo y recursos. Un cierto nivel de desempleo es compatible con un mercado que funciona, y distinguirlo del paro por rigideces es lo que hace la ficha 3.03." },
            { t: "Suponer que el monopsonio requiere un único empleador", d: "Basta con que el trabajador afronte costes de cambiar: distancia, especialización, conciliación, información imperfecta sobre otras ofertas. Cualquiera de ellos aplana las alternativas y da a la empresa poder de fijación de salarios, aunque haya muchos empleadores en el mismo mercado." },
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
            "El reparto entre trabajo y capital de esta ficha es exactamente lo que registra la cuenta de generación de renta, con una salvedad de medición importante.",
          ],
          lista: [
            "La **remuneración de asalariados** (D.1) del SEC 2010 incluye sueldos y salarios brutos (D.11) y las **cotizaciones sociales a cargo del empleador** (D.12). Es coste laboral total, no lo que recibe el trabajador: comparar D.1 con el salario percibido lleva a conclusiones erróneas sobre cuánto cuesta el trabajo.",
            "La **participación de las rentas del trabajo** se obtiene dividiendo D.1 entre el valor añadido bruto. Su descenso en varias economías avanzadas es un hecho documentado, y las explicaciones compiten: cambio tecnológico sesgado, globalización, composición sectorial y aumento del poder de mercado de la ficha 2.08. El debate no está cerrado.",
            "La **renta mixta** (B.3) es el problema de medición serio. Recoge la renta de los autónomos y **mezcla retribución del trabajo y del capital sin criterio observable para separarlas**. En una economía con mucho trabajo por cuenta propia, como la española, la participación medida del trabajo depende del supuesto de imputación que se adopte, y distintos supuestos dan cifras apreciablemente distintas.",
            "El **coste laboral unitario** —remuneración por unidad de producto— es el puente con la ficha 10.09: relaciona el salario de esta ficha con la productividad, y es la magnitud que se usa para juzgar competitividad. Sube cuando los salarios crecen por encima de la productividad, no cuando crecen los salarios.",
            "Y las fuentes se dividen el trabajo: la **EPA** mide empleo y paro por encuesta según los criterios de la OIT, la **afiliación a la Seguridad Social** cuenta relaciones laborales registradas, y la **Encuesta de Coste Laboral** aporta el coste por hora. Miden cosas distintas y no tienen por qué coincidir; la ficha 10.02 se ocupa de cómo se concilian.",
          ],
          cierre:
            "El punto que más rendimiento da es el de la renta mixta: cualquier afirmación tajante sobre el reparto entre trabajo y capital en España arrastra un supuesto de imputación que rara vez se explicita, y que puede mover el resultado varios puntos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el coste marginal de contratar en un monopsonio es mayor que el salario?", a: "Porque para atraer a un trabajador más hay que subir el salario, y hacerlo obliga a subírselo también a todos los que ya estaban. El coste marginal es el nuevo salario más el incremento pagado a la plantilla existente. Es la imagen especular del ingreso marginal del monopolista, que quedaba por debajo del precio por el mismo motivo." },
            { q: "Con VPMg = 100 − 4L y oferta w = 10 + 0,5L, ¿por qué un salario mínimo de 20 aumenta el empleo?", a: "Porque elimina el motivo que tenía la empresa para restringir la contratación. Con el salario fijado por ley, contratar a uno más ya no encarece la plantilla entera, así que el coste marginal pasa a ser 20 y la empresa contrata hasta que el valor del producto marginal lo iguala: L = 20, frente a los 18 del monopsonio. Sube salario y empleo a la vez." },
            { q: "Un año de estudio cuesta 3.000 de matrícula y 20.000 de salario no percibido. ¿Cuál es la magnitud relevante?", a: "Los 23.000 de inversión total. El coste de oportunidad es casi siete veces el directo, y omitirlo es el error más común al comparar la rentabilidad de distintas formaciones. Con una prima de 1.600 anuales durante 40 años, la rentabilidad es del 6,37 %." },
            { q: "Dos personas hacen el mismo trabajo y cobran distinto. ¿Producen distinto?", a: "No se puede deducir. La diferencia puede venir del poder de negociación derivado de tener alternativas distintas, de fricciones de búsqueda, de diferencias compensatorias por condiciones, de salarios de eficiencia o de discriminación. La igualdad entre salario y productividad marginal solo se sostiene bajo supuestos que aquí no se cumplen." },
            { q: "¿Por qué la renta mixta complica medir el reparto entre trabajo y capital?", a: "Porque agrupa en una sola partida la retribución del trabajo y del capital de los autónomos, sin criterio observable para separarlas. En economías con mucho empleo por cuenta propia, la participación medida de las rentas del trabajo depende del supuesto de imputación que se use, y ese supuesto rara vez se explicita al citar la cifra." },
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
              q: "¿Destruye empleo un salario mínimo?",
              opciones: [
                "Depende de la estructura del mercado: en monopsonio y por debajo de cierto umbral aumenta salario y empleo a la vez",
                "No: la evidencia empírica lo ha descartado",
                "Sí siempre: encarece el factor y reduce su demanda",
                "Solo si supera el salario medio del sector",
              ],
              correcta: 0,
              porque: [
                "Un monopsonista contrata por debajo del valor del producto marginal para no tener que subir el salario a toda la plantilla. Un mínimo bien situado rompe esa restricción y le hace contratar más.",
                "La evidencia no ha descartado nada de forma general: encuentra efectos que varían con el nivel del mínimo y con el mercado concreto, que es justo lo que predice la teoría.",
                "Es correcto en un mercado competitivo, y por eso la respuesta parece obvia. Pero el signo del efecto es una cuestión empírica que depende de qué supuesto se cumple.",
                "El salario medio no es la referencia relevante. Lo que importa es dónde queda el mínimo respecto al valor del producto marginal y al salario que el monopsonista pagaría.",
              ],
            },
            {
              q: "Estudiar un año cuesta 4.000 € de matrícula y supone dejar de ingresar 27.000 € de salario. ¿Qué error se comete al evaluar la inversión solo con la matrícula?",
              opciones: [
                "Se ignora la inflación del período",
                "Se ignora el coste de oportunidad, que aquí es casi siete veces mayor, e infla enormemente la rentabilidad aparente",
                "Se ignora que el título tiene valor de reventa",
                "Ninguno: la matrícula es el desembolso real",
              ],
              correcta: 1,
              porque: [
                "La inflación se corrige deflactando y afecta a todos los términos por igual: no es lo que falta aquí.",
                "El coste total del año es 31.000 y no 4.000. Ignorar los 27.000 hace parecer rentabilísima cualquier formación, y es el error más frecuente de los cálculos divulgativos sobre estudios.",
                "Un título no se revende. Lo que falta es la renta que se deja de ganar mientras se estudia.",
                "El desembolso es solo una parte del coste. La renta no percibida es un coste tan real como la factura, aunque no aparezca en ningún recibo.",
              ],
            },
            {
              q: "Los titulados universitarios ganan más. ¿Prueba eso que la universidad aumenta la productividad?",
              opciones: [
                "Sí, siempre que se controle por el sector de actividad",
                "No: la teoría de la señalización predice la misma correlación sin que la formación añada nada",
                "No, porque la correlación desaparece al controlar por la renta familiar",
                "Sí: es una correlación robusta y persistente",
              ],
              correcta: 1,
              porque: [
                "Controlar por sector no separa señalización de productividad: el mecanismo de la señal opera dentro de cada sector.",
                "Basta con que el título sea más barato de obtener para quien ya es más productivo: entonces sirve para separar candidatos aunque no enseñe nada. Distinguir ambas hipótesis exige diseños específicos, no más datos observacionales.",
                "La renta familiar es otra variable de confusión que conviene controlar, pero la correlación no desaparece y el problema de identificación sigue en pie.",
                "La robustez de la correlación no distingue entre las dos explicaciones, porque ambas la predicen igual de bien.",
              ],
            },
            {
              q: "¿Hace falta un único empleador para que haya monopsonio?",
              opciones: [
                "No: basta con que el trabajador afronte costes de cambiar, como distancia, especialización o conciliación",
                "Sí, esa es la definición",
                "No, pero sí que haya menos de tres empleadores en la zona",
                "Sí, salvo que exista un convenio colectivo que fije el salario",
              ],
              correcta: 0,
              porque: [
                "Cualquiera de esas fricciones hace que subir el salario sea necesario para atraer a un trabajador más, que es exactamente lo que genera la cuña entre salario y valor del producto marginal.",
                "La definición literal es el caso extremo. Lo que produce poder de monopsonio es que la oferta de trabajo que afronta la empresa tenga pendiente positiva, y eso ocurre mucho antes.",
                "No hay un umbral de empresas. Con muchas empresas pero trabajadores poco móviles puede haber poder de monopsonio considerable.",
                "Un convenio fija el salario y limita el margen del empleador, que es más bien lo contrario del monopsonio.",
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
            { ref: "Borjas, Economía laboral", nota: "el manual de referencia: demanda derivada, oferta, capital humano y monopsonio con tratamiento empírico desde el primer capítulo." },
            { ref: "Manning, Monopsony in Motion", nota: "el argumento completo de por qué el poder de fijación de salarios es la norma y no la excepción, y qué implica para el salario mínimo." },
            { ref: "Cahuc y Zylberberg, Labor Economics", nota: "el tratamiento formal de los modelos de búsqueda y emparejamiento que aquí solo se enuncian." },
            { ref: "Banco de España e INE, informes sobre el mercado de trabajo español", nota: "los datos de dualidad, temporalidad y coste laboral con los que contrastar el caso práctico; enlaza con la ficha 10.02." },
          ],
        },
      ],
    },
  ],
};
