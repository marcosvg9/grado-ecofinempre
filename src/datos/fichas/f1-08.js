/* Ficha 1.08 — Modelos economicos: supuestos, causalidad y falsacion. */

export default {
  codigo: "1.08",
  titulo: "Modelos económicos: supuestos, causalidad y falsación",
  nivel: 2,
  bloque: "Fundamentos y método económico",
  tiempo: "4 h",
  nucleo:
    "Un modelo no se juzga por realista, sino por si sus predicciones sobreviven al contraste. Y como ningún modelo vale para todo, la destreza del economista no está en dominar el modelo correcto sino en saber cuál aplica a la situación que tiene delante.",
  requiere: "1.02 Oferta y demanda · 1.05 Pensamiento marginal",
  abre: "1.10 Normativa frente a positiva · 4.05 Regresión · 4.07 Variables instrumentales",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **modelo** es una representación deliberadamente simplificada de una parte de la realidad, construida para aislar un mecanismo. La analogía habitual es el mapa: un mapa a escala uno a uno sería inútil, y lo que lo hace valioso es exactamente **lo que deja fuera**. De ahí la primera consecuencia, que es contraintuitiva para quien llega de otras disciplinas: **criticar un modelo por poco realista no es, por sí solo, una crítica**. Todos lo son. La pregunta pertinente es si las simplificaciones que hace **afectan al mecanismo que pretende explicar**, y esa es una pregunta concreta, no un reproche genérico.",
            "Sobre el papel de los supuestos hay dos posiciones que conviene conocer. La tradición asociada a Friedman sostiene que **los supuestos no tienen que ser realistas: lo que se juzga son las predicciones**; un modelo cuyos supuestos son falsos pero que predice bien es un buen modelo. La posición de Rodrik matiza de forma útil: los supuestos importan porque **determinan el ámbito de validez**, es decir, a qué situaciones se aplica el modelo. Y de ahí su tesis central, la más provechosa para estudiar: **no existe el modelo económico correcto, existe una colección de modelos**, cada uno válido en unas circunstancias, y la competencia profesional consiste en **elegir bien**. Un economista que solo tiene un modelo lo aplicará también donde no vale.",
            "Todo modelo lleva incorporada la cláusula **ceteris paribus**, «lo demás constante», que es lo que permite aislar un efecto. Su función es la misma que la del laboratorio en las ciencias experimentales, con una diferencia decisiva: en economía **casi nunca se puede mantener lo demás constante de verdad**. Los datos vienen de un mundo donde todo se mueve a la vez, y por eso el problema central de la economía empírica no es calcular, sino **identificar**: separar el efecto que interesa de todo lo que ocurría simultáneamente. Ese es el objeto del bloque 4.",
            "El obstáculo principal tiene nombre: **correlación no es causalidad**, y las razones por las que dos cosas pueden moverse juntas sin que una cause la otra son cuatro y conviene tenerlas en la cabeza. Puede haber una **variable omitida** que cause ambas —el caso más común—. Puede haber **causalidad inversa**, con el efecto y la causa intercambiados. Puede haber **sesgo de selección**, si la muestra observada no es comparable a la que no se observa. Y puede ser **casualidad**, sobre todo cuando se buscan muchas relaciones a la vez. Ninguna de las cuatro se detecta mirando el coeficiente: **se descartan con el diseño, no con la estadística**.",
            "Sobre la **falsación** conviene ser igual de preciso. El criterio de Popper —una teoría es científica si puede ser refutada por la observación— es una guía excelente y una descripción imperfecta de cómo funciona cualquier ciencia. El motivo es el problema de Duhem-Quine: **nunca se contrasta una hipótesis aislada**, sino un conjunto formado por la teoría, los supuestos auxiliares, los datos y el método. Cuando la predicción falla, se sabe que algo del conjunto está mal, pero no qué. Por eso ninguna teoría muere de un solo contraste fallido, y por eso la sospecha razonable no es que un modelo sobreviva, sino que sobreviva **a base de añadirle excepciones** cada vez que falla.",
            "Con todo lo anterior, el criterio práctico para juzgar un modelo se reduce a cuatro preguntas. **Qué mecanismo aísla**, y si ese mecanismo es reconocible en el caso concreto. **Qué supuestos delimitan su validez**, y si se cumplen aquí. **Qué predice que podría no ocurrir**, porque un modelo compatible con cualquier resultado no informa de nada. Y **qué evidencia lo ha sometido a prueba**, distinguiendo la que se usó para construirlo de la que llegó después. Un modelo que responde bien a las cuatro es utilizable aunque sus supuestos suenen absurdos; uno que no responde a la tercera no es un modelo, es una narración.",
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
            { nom: "Modelo", sub: "Su valor está en lo que omite.", cols: ["Simplificación que aísla un mecanismo"] },
            { nom: "Ceteris paribus", sub: "Sustituye al laboratorio, y de forma imperfecta.", cols: ["Aislar un efecto manteniendo lo demás fijo"] },
            { nom: "Variable omitida", sub: "La causa común que explica ambas cosas.", cols: ["Z → X y Z → Y produce corr(X,Y) ≠ 0"] },
            { nom: "Causalidad inversa", sub: "El efecto tomado por causa.", cols: ["Y → X en lugar de X → Y"] },
            { nom: "Sesgo de selección", sub: "La muestra observada no representa a la población.", cols: ["Observar solo casos no aleatorios"] },
            { nom: "Sesgo de supervivencia", sub: "Estudiar solo a los que quedan.", cols: ["Los fracasos no están en la muestra"] },
            { nom: "Contrafactual", sub: "El objeto que ningún dato contiene.", cols: ["Qué habría pasado sin la intervención"] },
            { nom: "Falsabilidad", sub: "Un modelo compatible con todo no informa de nada.", cols: ["Debe existir un resultado que lo refute"] },
            { nom: "Problema de Duhem-Quine", sub: "Por eso una teoría no muere de un solo contraste.", cols: ["Se contrasta la teoría más sus auxiliares"] },
            { nom: "Criterio práctico", sub: "Las cuatro preguntas ante cualquier modelo.", cols: ["Mecanismo · validez · predicción · contraste"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuando los datos dicen lo contrario de lo que parecen",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos hospitales atienden mil pacientes cada uno de la misma dolencia. Los datos agregados son inequívocos: en el hospital **A sobrevive el 81 %** y en el **B, el 95,1 %**. Cualquiera diría que B es mejor. Veamos qué ocurre al separar a los pacientes según la gravedad con la que ingresaron.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Grupo", "Hospital A", "Supervivencia A", "Hospital B", "Supervivencia B"],
          filas: [
            ["Pacientes leves", "99 de 100", "99,0 %", "873 de 900", "97,0 %"],
            ["Pacientes graves", "711 de 900", "79,0 %", "78 de 100", "78,0 %"],
            { celdas: ["Total", "810 de 1.000", "81,0 %", "951 de 1.000", "95,1 %"], clase: "total" },
          ],
          nota: "**El hospital A es mejor con los leves y mejor con los graves, y aun así peor en el total.** No hay ningún error de cálculo: es la paradoja de Simpson. La explicación está en la composición, no en la calidad: A recibe el 90 % de los casos graves —probablemente porque es el centro de referencia— y B, el 90 % de los leves. La gravedad es una **variable omitida** que afecta a la vez a dónde va el paciente y a su probabilidad de sobrevivir. Quien compare hospitales por su tasa bruta llegará exactamente a la conclusión contraria a la verdadera.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Variable observada", y: "Resultado" },
          dominio: { x: [0, 10], y: [0, 9] },
          marcasX: [0, 2, 4, 6, 8, 10],
          marcasY: [0, 2, 4, 6, 8],
          series: [
            { nombre: "Grupo A", color: "acento", puntos: [[1, 5], [2, 5.7], [3, 6.4], [4, 7.1]] },
            { nombre: "Grupo B", color: "n3", puntos: [[6, 2], [7, 2.7], [8, 3.4], [9, 4.1]] },
            { nombre: "Tendencia conjunta", color: "alerta", trazo: "discontinuo", puntos: [[1, 6.6], [9, 2.6]] },
          ],
          nota: "La misma paradoja en forma de gráfico, y quizá más clara. **Dentro de cada grupo la relación es positiva**; al juntar los datos sin distinguir grupos, la recta que resulta tiene pendiente **negativa**. La causa es que el grupo B tiene valores altos de la variable observada y resultados bajos por motivos que nada tienen que ver con ella. Una regresión sin controlar por grupo estimaría con toda precisión un efecto con el signo cambiado, y el error no se detecta mirando el coeficiente ni su significación.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Las cuatro trampas, en la misma tabla.** Conviene tener presentes los cuatro motivos por los que dos series pueden moverse juntas sin relación causal, porque en la práctica se presentan disfrazados de evidencia.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Trampa", "Ejemplo", "Qué la delata"],
          filas: [
            ["Variable omitida", "Más policías donde más delitos", "Una tercera causa común: el tamaño de la ciudad"],
            ["Causalidad inversa", "Las empresas rentables invierten más en formación", "Puede ser que formar rentabilice, o que sobre dinero"],
            ["Sesgo de selección", "Quien va a un programa de empleo encuentra trabajo antes", "Se apunta quien ya estaba más motivado"],
            ["Sesgo de supervivencia", "Las empresas longevas comparten cierta estrategia", "Las que la aplicaron y quebraron no están en la muestra"],
            { celdas: ["Casualidad", "Dos series que coinciden veinte años", "Con muchas búsquedas, algo coincide siempre"], clase: "total" },
          ],
          nota: "Ninguna de las cinco se descarta mirando la magnitud del coeficiente ni su significación estadística: **un dato espurio puede ser grandísimo y estar medido con enorme precisión**. Se descartan con el **diseño** —qué se compara con qué— y esa es la razón de ser de las técnicas de la ficha 4.07.",
        },
      ],
    },
    {
      titulo: "Caso práctico: cómo saber si un programa funciona",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una administración pone en marcha un programa de formación para desempleados y quiere saber si sirve. Es el problema empírico más común de la economía aplicada, y recorrerlo muestra por qué la respuesta obvia es siempre la equivocada.",
            "**La primera tentación es comparar antes y después.** Si el 40 % de los participantes tenía empleo al año siguiente frente al 25 % antes de empezar, parece que funciona. El problema es que entre ambos momentos ha pasado un año entero en el que ha cambiado también la economía. Si el ciclo mejoró, el 40 % puede ser incluso **peor** de lo que habría ocurrido sin programa. La comparación antes-después confunde el efecto del programa con el de todo lo demás.",
            "**La segunda tentación es comparar participantes con no participantes**, y es peor, porque introduce sesgo de selección. Quien se apunta a un programa voluntario no es igual que quien no se apunta: suele estar más motivado, tener más información y afrontar mejores perspectivas. Si luego encuentra empleo antes, no se sabe cuánto se debe al curso y cuánto a que **ya era distinto antes de empezar**. Y el sesgo puede ir en ambas direcciones: si el programa se dirige a los casos más difíciles, la comparación lo perjudicará.",
            "**Lo que se busca es un contrafactual: qué habría pasado con esas mismas personas sin el programa.** Ese objeto no existe en ningún dato, porque nadie es observable en dos estados a la vez. Toda la econometría de evaluación consiste en **construir una aproximación creíble** a ese contrafactual, y las estrategias son conocidas: asignación **aleatoria**, que hace ambos grupos comparables por construcción; **diferencias en diferencias**, que compara la evolución de un grupo tratado con la de otro no tratado; **discontinuidades**, cuando un umbral administrativo separa a personas casi idénticas; o un **instrumento** que afecte a la participación sin afectar al resultado por otra vía. La ficha 4.07 las desarrolla.",
            "**Y hay una pregunta previa que decide todo lo demás: qué se mide.** Si el indicador es la inserción de los participantes, puede mejorar sin que aumente el empleo total, porque el programa quizá solo reordena la cola: **coloca antes a quien lo hizo, a costa de quien no**. Esos efectos de desplazamiento son invisibles en la evaluación individual y pueden anular el efecto agregado. Es la ley de Goodhart de la ficha 1.05, aplicada a la evaluación.",
            "**La conclusión, que es la de la ficha entera.** La afirmación «el programa funciona» solo significa algo si va acompañada de tres precisiones: **comparado con qué, medido cómo y para quién**. Un modelo o una evaluación que no las explicite no está siendo riguroso ni prudente: está siendo inutilizable, porque no hay forma de saber en qué condiciones su conclusión seguiría siendo cierta.",
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
            { t: "Descartar un modelo por poco realista", d: "Todos los modelos son irreales por construcción; su valor está en lo que omiten. La crítica pertinente no es que simplifique, sino que la simplificación afecte al mecanismo que pretende explicar en el caso concreto de que se trate." },
            { t: "Buscar el modelo correcto en lugar del aplicable", d: "No existe un modelo válido para todo. Cada uno lo es en unas circunstancias definidas por sus supuestos, y la destreza consiste en elegir. Quien maneja un solo modelo acabará aplicándolo también donde sus supuestos no se cumplen." },
            { t: "Tomar una correlación por una relación causal", d: "Puede deberse a una variable omitida, a causalidad inversa, a sesgo de selección o a casualidad. Ninguna de esas posibilidades se descarta mirando el tamaño del coeficiente: se descartan con el diseño de la comparación." },
            { t: "Confiar en la significación estadística como prueba de causalidad", d: "Una relación espuria puede estimarse con enorme precisión y ser muy significativa. La significación dice que el patrón difícilmente es fruto del azar muestral; no dice nada sobre por qué existe ese patrón." },
            { t: "Evaluar un programa comparando antes y después", d: "Entre ambos momentos cambia también todo lo demás, así que la comparación mezcla el efecto del programa con el del ciclo. Hace falta un grupo de comparación creíble, no un antes." },
            { t: "Olvidar el sesgo de supervivencia", d: "Estudiar solo a los que siguen ahí produce conclusiones sistemáticamente sesgadas: los rasgos comunes de las empresas longevas pueden estar también en las que quebraron, que no aparecen en la muestra. Los ausentes contienen la mitad de la información." },
            { t: "Salvar un modelo añadiendo excepciones cada vez que falla", d: "Un modelo compatible con cualquier resultado no predice nada y por tanto no informa. La señal de alarma no es que una teoría sobreviva a los contrastes, sino que sobreviva a base de ampliar la lista de casos especiales." },
            { t: "Pedir a los datos que hablen solos", d: "Sin una pregunta y un diseño previos, buscar relaciones en un conjunto grande de variables garantiza encontrar coincidencias significativas por puro azar. Los datos no distinguen entre hallazgo y casualidad; el diseño sí." },
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
            "Las cuentas nacionales son un buen recordatorio de que medir bien y explicar son dos actividades distintas, y de que la primera también descansa en modelos.",
          ],
          lista: [
            "Las cuentas nacionales son un **marco contable, no un modelo de comportamiento**: sus identidades se cumplen por construcción y no pueden ser falsadas. Esa es a la vez su fortaleza —disciplinan cualquier relato— y su límite: no explican nada, como insistía la ficha 1.06.",
            "Pero **medir también exige modelizar**, y conviene no idealizar el dato. La economía sumergida se estima, el consumo de capital fijo se calcula con vidas útiles convencionales, los alquileres imputados se imputan y la producción no de mercado se valora a coste. Buena parte del PIB **no se observa: se construye con supuestos explícitos** que están documentados y son revisables.",
            "De ahí las **revisiones**. Que una cifra de crecimiento cambie meses después no es un fallo: es el resultado de incorporar información que no estaba disponible en la primera estimación. La ficha 10.10 se ocupa de los datos en tiempo real, y de por qué analizar el pasado con los datos revisados es más fácil que haber acertado en su momento.",
            "El **producto potencial** y la **brecha de producción** no se observan en absoluto: son estimaciones dependientes del método, y distintos métodos dan resultados que pueden diferir en varios puntos. Se usan sin embargo para decisiones de política fiscal, lo que hace que la incertidumbre del modelo se traslade directamente a la norma.",
            "Y la **desestacionalización** de la ficha 4.10 es otro modelo incorporado a la estadística: descomponer una serie en tendencia, estacionalidad e irregular exige supuestos que no son neutrales y que pueden alterar el perfil de un ciclo.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: los datos macroeconómicos no son observaciones puras frente a las que contrastar teorías, sino construcciones que ya incorporan supuestos. Saberlo no obliga a desconfiar de ellos, sino a leer su metodología.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Es una crítica válida decir que un modelo es poco realista?", a: "Por sí sola, no: todos los modelos lo son y ahí está su utilidad. La crítica válida es específica: señalar qué supuesto concreto no se cumple en el caso analizado y por qué eso altera el mecanismo que el modelo pretende describir." },
            { q: "El hospital A es mejor con leves y con graves, y peor en total. ¿Cómo puede ser?", a: "Es la paradoja de Simpson. A atiende el 90 % de los casos graves y B el 90 % de los leves, así que la composición de pacientes domina la comparación agregada. La gravedad es una variable omitida que afecta tanto al hospital de destino como a la supervivencia." },
            { q: "Un estudio encuentra una correlación fuerte y muy significativa. ¿Prueba causalidad?", a: "No. La significación indica que el patrón difícilmente se debe al azar muestral, no por qué existe. Puede haber una variable omitida, causalidad inversa o sesgo de selección, y ninguna de esas se descarta con estadística: se descarta con el diseño de la comparación." },
            { q: "¿Por qué no basta comparar participantes y no participantes de un programa voluntario?", a: "Porque quien se apunta no es comparable con quien no lo hace: suele diferir en motivación, información y perspectivas. La diferencia observada mezcla el efecto del programa con el de esas características previas, y el sesgo puede ir en cualquiera de los dos sentidos." },
            { q: "¿Por qué una teoría no se abandona tras un único contraste fallido?", a: "Por el problema de Duhem-Quine: nunca se contrasta una hipótesis aislada, sino junto con supuestos auxiliares, datos y método. Un fallo indica que algo del conjunto está mal, no qué. Lo sospechoso no es sobrevivir a un contraste, sino sobrevivir añadiendo excepciones cada vez." },
          ],
        },
      ],
    },
    {
      titulo: "Para profundizar",
      contenido: [
        {
          tipo: "fuentes",
          items: [
            { ref: "Rodrik, Las leyes de la economía", nota: "la tesis de los muchos modelos y del criterio de selección; el libro que mejor articula lo que esta ficha resume." },
            { ref: "Friedman, «La metodología de la economía positiva»", nota: "el ensayo de 1953 sobre el papel de los supuestos; discutible y discutido, pero imprescindible para entender el debate." },
            { ref: "Angrist y Pischke, Mostly Harmless Econometrics", nota: "el capítulo introductorio sobre contrafactuales y diseño de la identificación; el puente natural hacia la ficha 4.07." },
            { ref: "Popper, La lógica de la investigación científica", nota: "el criterio de falsabilidad en su formulación original, útil para ver hasta dónde llega y dónde encuentra sus límites." },
          ],
        },
      ],
    },
  ],
};
