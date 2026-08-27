/* Ficha 2.01 — Preferencias, utilidad y restriccion presupuestaria. */

export default {
  codigo: "2.01",
  titulo: "Preferencias, utilidad y restricción presupuestaria",
  nivel: 1,
  bloque: "Microeconomía",
  tiempo: "3 h",
  nucleo:
    "La utilidad no mide satisfacción: es una representación numérica de un orden de preferencias, única salvo transformación monótona creciente. Todo lo que la teoría del consumidor predice depende de ese orden y de la restricción presupuestaria, no de los números concretos que se le asignen.",
  requiere: "1.01 Escasez y coste de oportunidad",
  abre: "2.02 Elección del consumidor · 2.03 Slutsky",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La teoría del consumidor parte de una relación de preferencia sobre cestas de bienes y de unos axiomas que la hacen manejable. **Completitud**: dadas dos cestas, el consumidor sabe cuál prefiere o si le son indiferentes. **Transitividad**: si prefiere A a B y B a C, prefiere A a C. Añadiendo **continuidad**, se demuestra que la relación admite una representación mediante una función de utilidad. Ese es el resultado que legitima todo lo demás.",
            "El punto que conviene fijar desde el principio, y que evita casi todas las confusiones posteriores, es que **la utilidad es ordinal**. Si U representa unas preferencias y f es una transformación monótona creciente, entonces f∘U representa exactamente las mismas preferencias. Los números no tienen significado propio: solo importa el orden que inducen. Decir que una cesta da 100 «utilidades» y otra 50 no significa que la primera guste el doble; significa únicamente que se prefiere.",
            "Sobre esa base se añaden dos supuestos con contenido económico. La **monotonía** —más es mejor— implica que las curvas de indiferencia tienen pendiente negativa. La **convexidad** de las preferencias —las cestas equilibradas se prefieren a las extremas— implica que esas curvas son convexas hacia el origen, y es lo que garantiza que el óptimo sea interior y único en los casos habituales.",
            "La pendiente de una curva de indiferencia es la **relación marginal de sustitución**: cuántas unidades del segundo bien compensan exactamente la pérdida de una unidad del primero. Se obtiene diferenciando la utilidad a lo largo de la curva, y resulta ser el cociente de utilidades marginales. **Ese cociente sí es invariante ante transformaciones monótonas**, a diferencia de las utilidades marginales por separado, y por eso es la magnitud con contenido económico.",
            "La **restricción presupuestaria** es el otro elemento y es puramente contable: el gasto no puede superar a la renta. Con dos bienes define una recta cuya pendiente es el cociente de precios cambiado de signo. Ese cociente es un **precio relativo**, y es la información económicamente relevante: multiplicar todos los precios y la renta por la misma constante deja el conjunto presupuestario inalterado. La demanda es homogénea de grado cero en precios y renta, lo que equivale a decir que **el consumidor no sufre ilusión monetaria**.",
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
            { nom: "Función de utilidad", sub: "Representa un orden, no una magnitud cardinal.", cols: ["$U(x_1, x_2)$ tal que $A \\succeq B \\Leftrightarrow U(A) \\geq U(B)$"] },
            { nom: "Invarianza ordinal", sub: "f monótona creciente.", cols: ["U y f∘U representan las mismas preferencias"] },
            { nom: "Utilidad marginal", sub: "No es invariante: depende de la representación.", cols: ["$\\mathrm{UMg}_i = \\dfrac{\\partial U}{\\partial x_i}$"] },
            { nom: "Relación marginal de sustitución", sub: "Sí es invariante. Es la pendiente de la indiferencia.", cols: ["$\\mathrm{RMS} = -\\dfrac{dx_2}{dx_1} = \\dfrac{\\mathrm{UMg}_1}{\\mathrm{UMg}_2}$"] },
            { nom: "Restricción presupuestaria", sub: "Pendiente igual al precio relativo.", cols: ["$p_1 x_1 + p_2 x_2 = m$"] },
            { nom: "Homogeneidad de grado cero", sub: "Ausencia de ilusión monetaria.", cols: ["$x(\\lambda p, \\lambda m) = x(p, m)\\ \\forall \\lambda > 0$"] },
          ],
          nota: "Comprobación de la invarianza de la RMS: si $V = f(U)$, entonces $\\partial V/\\partial x_i = f'(U)\\,\\partial U/\\partial x_i$, y al calcular el cociente el factor $f'(U)$ **se cancela**. Es la razón formal de que la RMS tenga contenido económico y las utilidades marginales no.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: preferencias Cobb-Douglas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sea $U(x,y) = x^{0{,}5} y^{0{,}5}$, con precios $p_x = 4$, $p_y = 6$ y renta $m = 120$. La condición de tangencia iguala la relación marginal de sustitución al precio relativo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Paso", "Desarrollo", "Resultado"],
          filas: [
            ["Utilidades marginales", "$\\mathrm{UMg}_x = 0{,}5\\,x^{-0{,}5} y^{0{,}5}$ · $\\mathrm{UMg}_y = 0{,}5\\,x^{0{,}5} y^{-0{,}5}$", "—"],
            ["Relación marginal de sustitución", "$\\mathrm{UMg}_x / \\mathrm{UMg}_y$", "y / x"],
            ["Condición de tangencia", "$y/x = p_x/p_y = 4/6$", "y = (2/3)x"],
            ["Sustituir en el presupuesto", "4x + 6·(2/3)x = 120", "8x = 120"],
            { celdas: ["Cesta óptima", "—", "x = 15 ; y = 10"], clase: "total" },
            ["Utilidad alcanzada", "$\\sqrt{15 \\times 10}$", "12,247"],
            ["Comprobación del gasto", "4·15 + 6·10", "120 ✓"],
          ],
          nota: "Fíjate en el reparto: **60 € en x y 60 € en y**, exactamente la mitad de la renta en cada bien. Es una propiedad general de las preferencias Cobb-Douglas: los exponentes son directamente las **proporciones de gasto**, con independencia de los precios. De ahí que se usen tanto para calibrar modelos con datos de estructura de gasto.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Comprobación de la invarianza ordinal.** Tomemos la transformación monótona V = ln U = 0,5·ln x + 0,5·ln y. Las utilidades marginales son ahora 0,5/x y 0,5/y, completamente distintas de las anteriores. Pero su cociente es **y/x**, idéntico al de antes. La condición de tangencia no cambia y **la cesta óptima sigue siendo (15, 10)**.",
            "Este resultado tiene una consecuencia práctica que conviene retener: cualquier afirmación económica que dependa del **nivel** de la utilidad marginal carece de contenido, porque cambiaría al reescribir la función. Solo son legítimas las afirmaciones que dependen de cocientes de utilidades marginales o del orden de las cestas. Es el filtro que descarta buena parte de los usos populares del concepto de utilidad.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Familia de preferencias", "Función", "Comportamiento"],
          filas: [
            ["Cobb-Douglas", "$x^a y^b$", "Proporciones de gasto constantes"],
            ["Sustitutivos perfectos", "a·x + b·y", "RMS constante: solución de esquina salvo coincidencia"],
            ["Complementarios perfectos", "mín(a·x, b·y)", "Proporciones fijas: no hay sustitución"],
            { celdas: ["Cuasilineal", "v(x) + y", "Sin efecto renta sobre x"], clase: "total" },
          ],
          nota: "Las **cuasilineales** son la herramienta habitual cuando se quiere aislar el efecto sustitución del de renta, y aparecerán en el análisis de excedente de la ficha 1.04. Los **complementarios perfectos** son el caso en el que la RMS no está definida en el vértice, lo que obliga a resolver por la restricción de proporciones y no por tangencia.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué significa realmente maximizar utilidad",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La objeción más frecuente a este marco es que las personas no resuelven problemas de optimización al hacer la compra. La objeción es correcta y no afecta al modelo, y entender por qué aclara qué pretende y qué no pretende la teoría.",
            "**El modelo no describe un proceso mental, describe un patrón de elección.** Afirma que si las decisiones observadas son completas, transitivas y consistentes, entonces se pueden **representar como si** procedieran de maximizar una función. Es un teorema de representación, no una hipótesis psicológica. Un consumidor que decide por costumbre o por reglas simples puede generar exactamente el mismo patrón de elecciones que uno que optimiza.",
            "**Lo contrastable es el patrón, no el proceso.** La teoría de la preferencia revelada invierte el planteamiento: en lugar de suponer preferencias y deducir elecciones, parte de las elecciones observadas y comprueba si son compatibles con algún orden de preferencias. El axioma débil exige que si una cesta se eligió pudiendo comprar otra, la segunda no puede elegirse después en una situación en la que la primera también era asequible. **Eso sí se puede refutar con datos**, y es la vía por la que la teoría se somete a contraste.",
            "**Dónde falla efectivamente.** La evidencia experimental documenta violaciones sistemáticas: los efectos de contexto y de opciones señuelo rompen la independencia de alternativas irrelevantes; las preferencias temporales son inconsistentes; el punto de referencia altera la valoración. La economía del comportamiento de la ficha 8.07 se construye sobre esas violaciones, y no consiste en abandonar el marco sino en modificar supuestos concretos.",
            "**Y por qué sigue usándose.** Porque sus predicciones agregadas son razonablemente robustas: las demandas se inclinan a la baja, los consumidores sustituyen cuando los precios relativos cambian, y esos comportamientos se observan de forma consistente en datos reales. Para muchos usos —estimar elasticidades, evaluar el efecto de un impuesto, construir un índice de precios— el modelo funciona lo bastante bien, y esa es la única justificación que una herramienta necesita.",
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
            { t: "Interpretar la utilidad como magnitud cardinal", d: "Los números no miden satisfacción y no son comparables entre personas. Solo importa el orden que inducen. Cualquier conclusión que dependa del nivel de utilidad o de comparar utilidades entre individuos carece de fundamento en este marco." },
            { t: "Dar contenido económico a la utilidad marginal", d: "No es invariante ante transformaciones monótonas: cambia al reescribir la función que representa las mismas preferencias. Lo invariante es su cociente, la relación marginal de sustitución, y es ahí donde reside el contenido." },
            { t: "Confundir la RMS con el precio relativo", d: "La RMS es una característica de las preferencias y el precio relativo, del mercado. **Se igualan en el óptimo**, que es precisamente el resultado del problema, no un supuesto de partida." },
            { t: "Aplicar la condición de tangencia sin comprobar la solución", d: "Con sustitutivos perfectos, con complementarios perfectos o cuando la tangencia da valores negativos, el óptimo está en una esquina o en un vértice y la condición de tangencia no aplica. Hay que verificar que la solución sea admisible." },
            { t: "Olvidar la homogeneidad de grado cero", d: "Multiplicar precios y renta por la misma constante no altera el conjunto presupuestario ni la demanda. Es la ausencia de ilusión monetaria, y su incumplimiento en los datos es un resultado con contenido, no un detalle técnico." },
            { t: "Confundir el modelo con una descripción del proceso mental", d: "Es un teorema de representación: si las elecciones son consistentes, se pueden describir como si procedieran de una maximización. No afirma que nadie calcule nada. La crítica psicológica es correcta y no invalida el uso predictivo." },
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
            "La teoría del consumidor no es un adorno académico para la estadística de precios: es su fundamento conceptual.",
          ],
          lista: [
            "El objetivo teórico de un índice de precios de consumo es el **índice del coste de la vida**: el cociente entre el gasto mínimo necesario para alcanzar un nivel de utilidad dado con los precios nuevos y con los antiguos. Es directamente la función de gasto derivada del problema de esta ficha.",
            "Ese índice **no es observable**, porque exigiría conocer las preferencias. Los índices que se calculan —Laspeyres, Paasche, Fisher— son aproximaciones cuyas propiedades se estudian precisamente en relación con ese ideal teórico.",
            "La estructura de gasto que **pondera** el IPC procede de la Encuesta de Presupuestos Familiares y clasifica el consumo por finalidad según la **COICOP**. Esas ponderaciones son, en el lenguaje de esta ficha, las proporciones de gasto que en el caso Cobb-Douglas coinciden con los exponentes de la función de utilidad.",
            "La **homogeneidad de grado cero** tiene su reflejo directo en la construcción de índices: lo relevante son los precios relativos y el nivel general, y por eso un índice se normaliza a una base sin que ello altere la información que contiene.",
            "Y el **consumo final efectivo de los hogares** amplía el concepto de consumo incorporando las transferencias sociales en especie, reconociendo que el bienestar del hogar depende también de bienes que no compra directamente.",
          ],
          cierre:
            "El vínculo se cierra en la ficha 2.03, donde la posibilidad de sustituir entre bienes —el núcleo del problema del consumidor— resulta ser el origen del sesgo conocido de los índices de tipo Laspeyres.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "U = x·y y V = 3·ln(x·y) + 7. ¿Representan las mismas preferencias?", a: "Sí. V es una transformación monótona creciente de U, así que induce el mismo orden sobre las cestas y da lugar a las mismas elecciones óptimas." },
            { q: "$U = x^{0{,}3} y^{0{,}7}$, $m = 500$, $p_x = 5$, $p_y = 10$. ¿Cesta óptima?", a: "En Cobb-Douglas los exponentes son las proporciones de gasto: 150 € en x y 350 € en y. Por tanto x = 30 e y = 35." },
            { q: "¿Por qué la RMS tiene contenido económico y la utilidad marginal no?", a: "Porque al aplicar una transformación monótona V = f(U), ambas utilidades marginales se multiplican por f′(U), factor que se cancela en el cociente. La RMS es invariante; los niveles, no." },
            { q: "Todos los precios y la renta se duplican. ¿Qué le pasa a la demanda?", a: "Nada: la demanda es homogénea de grado cero. El conjunto presupuestario es idéntico, porque solo dependen de precios relativos y de renta real. Es la ausencia de ilusión monetaria." },
            { q: "¿Qué relación tiene esta ficha con el IPC?", a: "El objetivo teórico de un índice de precios de consumo es el índice del coste de la vida, definido a partir de la función de gasto del problema del consumidor. Y las ponderaciones del IPC son proporciones de gasto, que en Cobb-Douglas coinciden con los parámetros de la utilidad." },
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
              q: "Una función de utilidad asigna 10 a una cesta y 20 a otra. ¿Qué se puede afirmar?",
              opciones: [
                "Que la segunda cesta gusta el doble que la primera",
                "Solo que la segunda se prefiere a la primera",
                "Que la utilidad marginal entre ambas es de 10",
                "Que quien la consume duplica su bienestar al pasar de una a otra",
              ],
              correcta: 1,
              porque: [
                "Los números no miden satisfacción: representan un orden. Con $V = U^2$ los mismos gustos darían 100 y 400, y nadie diría que ahora gusta cuatro veces más.",
                "La utilidad es única salvo transformación monótona creciente, así que lo único invariante —y por tanto lo único con contenido— es qué va antes y qué va después.",
                "La utilidad marginal tampoco es invariante: cambia al reescribir la función que representa las mismas preferencias. Lo invariante es su cociente, la relación marginal de sustitución.",
                "El bienestar no es comparable ni siquiera dentro de la misma persona en esta escala, y mucho menos entre personas distintas.",
              ],
            },
            {
              q: "En el óptimo del consumidor la relación marginal de sustitución iguala al cociente de precios. ¿Qué es eso?",
              opciones: [
                "Un supuesto del modelo, necesario para que haya solución",
                "El resultado del problema: la RMS describe gustos y el precio relativo, el mercado",
                "Una identidad contable, cierta por construcción",
                "Una condición que solo se cumple con preferencias Cobb-Douglas",
              ],
              correcta: 1,
              porque: [
                "Si fuera un supuesto no habría nada que resolver. Es justo lo que se deduce de maximizar sujeto a la restricción.",
                "Son dos cosas de naturaleza distinta —una preferencia y un dato de mercado— y el óptimo es precisamente el punto donde el consumidor ha ajustado la primera hasta encontrarse con la segunda.",
                "No hay nada contable aquí: es una condición de primer orden que puede no cumplirse, por ejemplo en una solución de esquina.",
                "Vale para cualquier familia de preferencias convexas con solución interior. Las Cobb-Douglas son un caso, no la condición.",
              ],
            },
            {
              q: "Con $U(x,y) = x + 2y$, precios $p_x = 1$, $p_y = 3$ y renta 60, ¿qué se obtiene aplicando la condición de tangencia?",
              opciones: [
                "La cesta óptima directamente",
                "Nada útil: las curvas de indiferencia son rectas y el óptimo está en una esquina",
                "Una solución con cantidades negativas, que hay que redondear a cero",
                "Dos soluciones posibles, entre las que decide la renta",
              ],
              correcta: 1,
              porque: [
                "La tangencia presupone curvas de indiferencia convexas. Con sustitutivos perfectos no hay punto de tangencia interior que encontrar.",
                "La RMS es constante e igual a $1/2$ y el precio relativo es $1/3$. Como la RMS supera al precio relativo, se gasta todo en $x$: $x = 60$, $y = 0$, con utilidad 60.",
                "No aparecen cantidades negativas aquí; simplemente no hay tangencia. Redondear a cero sería tapar el síntoma sin entender el caso.",
                "La solución es única y está en la esquina. Lo que decide es la comparación entre RMS y precio relativo, no la renta.",
              ],
            },
            {
              q: "Se multiplican por dos todos los precios y también la renta. ¿Qué le pasa a la cesta elegida?",
              opciones: [
                "Se reduce a la mitad, porque todo cuesta el doble",
                "No cambia: el conjunto presupuestario es idéntico",
                "Aumenta, porque la renta nominal es mayor",
                "Depende de si las preferencias son homotéticas",
              ],
              correcta: 1,
              porque: [
                "La renta también se ha duplicado, así que el poder adquisitivo es el mismo. Fijarse solo en los precios es exactamente la ilusión monetaria.",
                "Es la homogeneidad de grado cero: $x(\\lambda p, \\lambda m) = x(p, m)$. La recta presupuestaria no se mueve ni un milímetro, luego el óptimo tampoco.",
                "La renta nominal sube y la real queda igual. Solo la segunda entra en el problema del consumidor.",
                "La homogeneidad vale para cualquier preferencia racional, homotética o no. Lo homotético afecta a cómo cambia la cesta con la renta real, que aquí no cambia.",
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
            { ref: "Varian, Microeconomía intermedia", nota: "los primeros capítulos. Con tu formación matemática, la versión con cálculo va más directa al grano." },
            { ref: "Mas-Colell, Whinston y Green, Microeconomic Theory", nota: "el tratamiento riguroso de los axiomas, el teorema de representación y la preferencia revelada. Es el nivel de posgrado." },
            { ref: "Nicholson y Snyder, Teoría microeconómica", nota: "punto intermedio entre ambos, con más desarrollo formal que Varian y menos aparato que Mas-Colell." },
            { ref: "INE, metodología del IPC y Encuesta de Presupuestos Familiares", nota: "cómo se traduce todo esto en ponderaciones y en clasificación COICOP." },
          ],
        },
      ],
    },
  ],
};
