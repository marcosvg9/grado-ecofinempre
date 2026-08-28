/* Ficha 16.10 — Herramientas, diagnóstico y práctica. */

export default {
  codigo: "16.10",
  titulo: "Herramientas, diagnóstico y práctica",
  nivel: 3,
  bloque: "Series temporales jerárquicas",
  tiempo: "4 h",
  nucleo:
    "Qué comprobar antes de reconciliar, qué esperar de la mejora y cómo detectar que la estructura declarada no es la real. La reconciliación siempre produce cifras coherentes y de aspecto razonable, así que el diagnóstico no es opcional: es lo único que avisa.",
  requiere: "16.08 Evaluación de previsiones · 16.05 Estimación de la matriz de covarianzas · 16.07 Reconciliación probabilística",
  abre: "15.09 Benchmarking y conciliación · 10.10 Cuentas trimestrales · 4.09 Series temporales",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Esta ficha cierra el bloque con lo que no cabe en los artículos: qué hacer antes de reconciliar, qué mirar después y qué esperar de todo ello. El aviso central es el mismo que recorre el bloque anterior a propósito del ajuste estacional: **la reconciliación siempre produce un resultado plausible**. Las cifras cuadran, tienen el orden de magnitud correcto y su gráfico es tranquilizador. Nada en el resultado avisa de que la estructura declarada estuviera equivocada o de que los modelos base fueran incompatibles.",
            "La primera comprobación es la más elemental y la que más se salta: **verificar que la estructura declarada se cumple en los datos históricos**. Antes de imponer que las hojas sumen la rama, conviene comprobar que efectivamente la sumaban en el pasado. Es sorprendente la frecuencia con que no ocurre, por definiciones que no encajan del todo, por partidas que se contabilizan en dos sitios o por series que se han enlazado con criterios distintos. **Si la estructura no cuadra sobre los datos observados, reconciliar impone una restricción falsa.**",
            "La segunda es que las magnitudes sean **aditivas**. Las tasas de variación no lo son, los índices encadenados no lo son y los ratios tampoco. Reconciliar sobre ellos impone identidades que las magnitudes no cumplen ni siquiera en los datos. Hay que trabajar sobre niveles aditivos —valores nominales, o volúmenes a precios de un año base— y derivar después lo que se publique. Es la advertencia de la ficha 16.02 y es la causa más común de resultados absurdos.",
            "El diagnóstico posterior más útil es mirar **cuánto se ha movido cada serie en relación con su propia escala**. Un ajuste pequeño en términos absolutos puede ser enorme para una serie pequeña, y ese desequilibrio es informativo: señala dónde el sistema ha decidido que estaba el error. Si una serie recibe un ajuste que supera su variabilidad típica, la conclusión razonable no es que la reconciliación haya afinado esa previsión, sino que **algo no encaja entre su modelo y el resto**.",
            "Sobre las expectativas conviene ser franco. Las ganancias documentadas de la reconciliación óptima frente a los métodos clásicos son **reales y modestas**: unos pocos puntos porcentuales de reducción de error, no transformaciones. Quien espere que reconciliar arregle previsiones mediocres se llevará una decepción; quien busque coherencia gratis con una mejora marginal encontrará exactamente eso. La ficha 16.04 explicaba por qué: la ganancia procede de eliminar la componente incoherente del error, y esa componente es pequeña cuando los modelos base son razonables.",
            "En cuanto a herramientas, el ecosistema está maduro en **R**, donde existen implementaciones que cubren jerarquías transversales, agrupadas y temporales, con las distintas aproximaciones a la matriz de covarianzas y con reconciliación probabilística por simulación. En **Python** las opciones son menos completas pero suficientes para los casos habituales. Lo importante no es la herramienta sino que permita **especificar la matriz de sumas explícitamente**, porque en cuanto la estructura no es un árbol limpio, las interfaces que solo aceptan jerarquías anidadas dejan de servir.",
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
            { nom: "Comprobación previa 1", sub: "La que más se salta.", cols: ["¿La estructura declarada se cumple en los datos históricos?"] },
            { nom: "Comprobación previa 2", sub: "La causa más común de absurdos.", cols: ["¿Las magnitudes son aditivas? Tasas e índices no lo son"] },
            { nom: "Comprobación previa 3", sub: "Antes de elegir método.", cols: ["¿Dónde está la información: arriba, abajo o repartida?"] },
            { nom: "Diagnóstico 1", sub: "La magnitud global.", cols: ["Norma del ajuste frente al nivel de la serie"] },
            { nom: "Diagnóstico 2", sub: "El más informativo.", cols: ["Ajuste de cada serie relativo a su propia escala"] },
            { nom: "Señal de alarma", sub: "Cuándo desconfiar.", cols: ["Un ajuste mayor que la variabilidad típica de la serie"] },
            { nom: "Referencia obligada", sub: "Contra qué comparar siempre.", cols: ["La proyección ortogonal, que no supone nada"] },
            { nom: "Expectativa realista", sub: "Qué se gana.", cols: ["Coherencia garantizada y mejora de unos pocos puntos"] },
            { nom: "Requisito de la herramienta", sub: "Lo único que importa.", cols: ["Permitir especificar la matriz de sumas explícitamente"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: leer el diagnóstico de la reconciliación",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Sobre la reconciliación por proyección ortogonal de la ficha 16.04, el diagnóstico consiste en mirar el ajuste de cada serie **dividido por su propio nivel**, no en términos absolutos. En absolutos, turismo recibe el mayor ajuste y energía uno intermedio; en relativos el orden cambia por completo.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Serie de la jerarquía", y: "Ajuste como % del nivel" },
          dominio: { x: [1, 7], y: [0, 3.15] },
          marcasX: [1, 2, 3, 4, 5, 6, 7],
          marcasY: [0, 1, 2, 3],
          series: [
            {
              nombre: "Ajuste relativo de la reconciliación",
              color: "acento",
              etiquetaEn: [2.4, 2.9],
              puntos: [[1, 0.49], [2, 1.33], [3, 0.12], [4, 0.37], [5, 0.49], [6, 1.0], [7, 2.49]],
            },
            {
              nombre: "Crecimiento trimestral típico",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [2.4, 2.35],
              puntos: [[1, 0.5], [7, 0.5]],
            },
          ],
          nota: "**Energía recibe un ajuste del 2,49 % de su nivel**, cinco veces el crecimiento trimestral típico de la serie. Eso no es una reconciliación afinando una previsión: es una alarma. Significa que el modelo de energía dice algo muy distinto de lo que dicen sus vecinos, y antes de publicar conviene mirar por qué. Industria, en cambio, apenas se mueve un 0,12 %: su previsión era compatible con el resto.",
        },
        {
          tipo: "tabla",
          cabecera: ["Serie", "Nivel", "Ajuste absoluto", "Ajuste relativo", "Frente al crecimiento típico"],
          filas: [
            ["Industria", "76,0", "−0,095", "0,12 %", "×0,24"],
            ["Hostelería", "32,0", "+0,119", "0,37 %", "×0,74"],
            ["Total", "132,0", "+0,643", "0,49 %", "×0,97"],
            ["Transporte", "24,5", "+0,119", "0,49 %", "×0,97"],
            ["Manufactura", "55,0", "−0,548", "1,00 %", "×2,00"],
            ["Turismo", "57,5", "−0,762", "1,33 %", "×2,65"],
            { celdas: ["Energía", "22,0", "−0,548", "2,49 %", "×4,98"], clase: "total" },
          ],
          nota: "Ordenadas por ajuste relativo, la lectura cambia respecto al orden por ajuste absoluto. **Manufactura y energía reciben el mismo ajuste absoluto —0,548— y muy distinto relativo**, porque sus niveles difieren. La proyección reparte por igual dentro de cada nodo, sin saber que para una serie eso es el doble de su crecimiento típico y para la otra, cinco veces.",
        },
        {
          tipo: "parrafos",
          items: [
            "Ese hecho merece una nota, porque es una limitación real de la proyección ortogonal. Al no ponderar, **reparte el ajuste por igual entre hermanas con independencia de su tamaño**, lo que en términos relativos castiga desproporcionadamente a la serie pequeña. Es exactamente el problema que la ponderación de la ficha 16.05 resuelve: con una matriz que reconozca que energía tiene menor varianza absoluta, el ajuste se desplazaría hacia manufactura.",
            "La norma global del ajuste es de **1,278**, un 0,97 % del nivel del total, y el ajuste relativo medio es del **0,9 %**. Esas son cifras razonables: el mismo orden de magnitud que la variabilidad trimestral de las series, sin llegar a superarla. Si la norma hubiera salido, por ejemplo, del 5 %, la conclusión no sería que la reconciliación había trabajado mucho sino que **los modelos base eran mutuamente incompatibles** y había que revisarlos antes de proyectar nada.",
            "La regla práctica que resume el diagnóstico es sencilla de enunciar: **si el ajuste que recibe una serie es del orden de su ruido, la reconciliación está retocando; si es del orden de su señal, está reescribiendo**. Lo primero es lo que se busca. Lo segundo es una advertencia que conviene atender antes de publicar, y no un resultado que aceptar porque las cifras cuadren.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: la lista de comprobación completa",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Recogido todo el bloque, este es el orden en que conviene abordar un problema de previsión jerárquica. Cada paso responde a un fallo concreto que se ha visto en las fichas anteriores.",
            "**Uno: verificar la estructura sobre datos históricos.** Comprobar, periodo a periodo, que las hojas suman su rama y las ramas el total. Si no cuadra, hay un problema de definiciones —partidas contadas dos veces, series enlazadas con criterios distintos, cobertura desigual— que ninguna reconciliación arregla y que además invalidaría la restricción impuesta.",
            "**Dos: comprobar la aditividad.** Trabajar sobre niveles, nunca sobre tasas ni sobre índices encadenados. Si lo que se publica son tasas, se reconcilian los niveles y las tasas se derivan del resultado.",
            "**Tres: modelizar cada serie por separado y con criterio.** La reconciliación combina previsiones; si las previsiones base son malas, el resultado será coherente y malo. Conviene además que las especificaciones sean apropiadas a cada nivel: la serie anual de una jerarquía temporal no lleva estacionalidad, y las hojas muy ruidosas quizá no merezcan un modelo elaborado.",
            "**Cuatro: reconciliar empezando por lo simple.** Proyección ortogonal primero, como referencia que no supone nada. Después las variantes ponderadas, exigiendo a cada una que demuestre mejora en una evaluación fuera de muestra con origen móvil y medida en todos los niveles. **Cinco: diagnosticar.** Mirar la norma del ajuste y el ajuste relativo serie a serie, y tratar cualquier desplazamiento mayor que la variabilidad típica como una alarma que hay que explicar. Y **seis: decidir con el coste delante**, porque una mejora del dos por ciento que exige vigilar una matriz de covarianzas cada trimestre puede no compensar frente a un bottom-up que funciona solo.",
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
            { t: "No verificar la estructura sobre datos históricos", d: "Antes de imponer que las hojas sumen la rama hay que comprobar que lo hacían en el pasado. Con definiciones que no encajan, partidas contadas dos veces o series enlazadas con criterios distintos, la estructura declarada es falsa y la reconciliación impone una restricción que los datos nunca cumplieron." },
            { t: "Reconciliar tasas o índices encadenados", d: "No son aditivos, así que la matriz de sumas describe identidades que las magnitudes no cumplen ni en los datos observados. Es la causa más común de resultados absurdos. Hay que reconciliar sobre niveles aditivos y derivar después lo que se publique." },
            { t: "Leer el diagnóstico en términos absolutos", d: "Manufactura y energía reciben el mismo ajuste absoluto de 0,548 y muy distinto relativo, porque sus niveles difieren. Un ajuste pequeño en absoluto puede ser enorme para una serie pequeña, y ese desequilibrio es justamente lo que hay que detectar." },
            { t: "Aceptar un ajuste mayor que la variabilidad de la serie", d: "Si una serie se desplaza más de lo que suele moverse, la reconciliación no está afinando su previsión: está reescribiéndola porque el resto del sistema dice otra cosa. Es una alarma que hay que explicar antes de publicar, no un resultado que aceptar porque las cifras cuadren." },
            { t: "Esperar transformaciones", d: "Las ganancias documentadas frente a los métodos clásicos son reales y modestas: unos pocos puntos porcentuales. Reconciliar no arregla previsiones mediocres; da coherencia garantizada y una mejora marginal, que es exactamente lo que la teoría predice." },
            { t: "Empezar por el método más sofisticado", d: "La proyección ortogonal no supone nada y es la referencia obligada. Cualquier variante ponderada tiene que demostrar mejora fuera de muestra, con origen móvil y medida en todos los niveles, antes de adoptarla. Sin esa disciplina se acaba manteniendo complejidad que no aporta." },
            { t: "Elegir herramienta por su interfaz de jerarquías", d: "Las interfaces que solo aceptan árboles anidados dejan de servir en cuanto la estructura tiene criterios cruzados, que es lo habitual en cuanto hay más de una clasificación. Lo único que importa es que permita especificar la matriz de sumas explícitamente." },
            { t: "Ignorar el coste de mantenimiento", d: "Una reconciliación óptima con matriz estimada exige vigilancia continua: la matriz se degrada, los modelos base cambian y hay que reevaluar. Un bottom-up funciona solo. Frente a una mejora del dos por ciento, esa diferencia de mantenimiento puede inclinar la decisión con toda razón." },
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
            "Las comprobaciones de esta ficha tienen equivalentes reconocibles en la práctica de la estadística oficial, donde algunas llevan décadas siendo rutina y otras no.",
          ],
          lista: [
            "La verificación de que **la estructura cuadra sobre datos históricos** es en cuentas nacionales el control de coherencia interna que precede a cualquier publicación. Es rutina bien establecida, y su equivalente en previsión se salta con mucha más frecuencia de la que debería, probablemente porque en previsión nadie está obligado a transmitir un cuadro auditable.",
            "La advertencia sobre **aditividad** es especialmente pertinente aquí. Los volúmenes encadenados de la ficha 10.08 no suman, y el sistema convive con esa no aditividad publicando discrepancias explícitas. Quien trabaje con series de contabilidad nacional debe reconciliar sobre nominales o sobre volúmenes a precios de un año base, nunca sobre encadenados.",
            "El **diagnóstico por ajuste relativo** tiene un análogo en el análisis de revisiones: mirar cuánto se movió cada partida en relación con su propio tamaño, y no en euros. Una revisión de mil millones es trivial en el consumo final y enorme en la variación de existencias, y los informes de revisión que no escalan producen la misma distorsión que la ficha 16.08 describía para la evaluación.",
            "La regla de que **un ajuste mayor que la variabilidad de la serie es una alarma** se corresponde con la práctica de investigar las partidas que absorben discrepancias grandes al cuadrar las cuentas. La ficha 16.09 señalaba que colocar siempre el residuo en la misma partida equivale a declararla inútil; el diagnóstico relativo es la forma de detectar cuándo eso está ocurriendo.",
            "Por último, la **expectativa realista**. En estadística oficial la reconciliación no es opcional —el programa de transmisión exige cuadros coherentes—, así que la pregunta no es si compensa sino con qué criterio se hace. La aportación de este bloque, como decía la ficha anterior, es hacer ese criterio explícito y auditable, no prometer una mejora que en agregados bien estimados sería en todo caso pequeña.",
          ],
          cierre:
            "La consecuencia práctica: reconciliar es barato y siempre produce cifras presentables. Por eso el trabajo real está antes —verificar la estructura— y después —diagnosticar el ajuste—, no en el cálculo.",
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
              q: "¿Cuál es la primera comprobación antes de reconciliar y por qué se salta tanto?",
              a: "Verificar que la estructura declarada se cumple en los datos históricos: que las hojas sumaban su rama y las ramas el total, periodo a periodo. Se salta porque parece obvio, y con frecuencia no se cumple por definiciones que no encajan, partidas contadas dos veces o series enlazadas con criterios distintos. Si la estructura no cuadra sobre lo observado, reconciliar impone una restricción falsa.",
            },
            {
              q: "Manufactura y energía reciben el mismo ajuste absoluto. ¿Por qué no es lo mismo?",
              a: "Porque sus niveles difieren: 55 frente a 22. El mismo ajuste de 0,548 supone un 1,00 % para manufactura y un 2,49 % para energía. La proyección ortogonal reparte por igual dentro de cada nodo sin saber que para una serie eso es el doble de su crecimiento típico y para la otra, cinco veces. Es la limitación que la ponderación corrige.",
            },
            {
              q: "Una serie recibe un ajuste del 2,49 % cuando su crecimiento trimestral típico es del 0,5 %. ¿Qué conclusión se saca?",
              a: "Que es una alarma, no un afinamiento. Significa que el modelo de esa serie dice algo muy distinto de lo que dicen sus vecinos, y conviene mirar por qué antes de publicar. La regla práctica: si el ajuste es del orden del ruido de la serie, la reconciliación está retocando; si es del orden de su señal, está reescribiendo.",
            },
            {
              q: "¿Qué mejora cabe esperar de la reconciliación óptima frente a los métodos clásicos?",
              a: "Unos pocos puntos porcentuales de reducción de error: real y modesta, no una transformación. La razón es que la ganancia procede de eliminar la componente incoherente del error, y esa componente es pequeña cuando los modelos base son razonables. Lo que sí se obtiene con seguridad es coherencia garantizada.",
            },
            {
              q: "¿Qué requisito debe cumplir la herramienta que se elija?",
              a: "Permitir especificar la matriz de sumas explícitamente. Las interfaces que solo aceptan jerarquías anidadas dejan de servir en cuanto la estructura tiene criterios cruzados, que es lo habitual con más de una clasificación. El ecosistema de R está maduro y cubre jerarquías transversales, agrupadas y temporales con reconciliación probabilística; en Python las opciones son menos completas.",
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
              q: "¿Cuál es la primera comprobación antes de reconciliar una jerarquía?",
              opciones: [
                "Elegir el método de reconciliación",
                "Estimar la matriz de covarianzas de los errores",
                "Verificar sobre los datos históricos que la estructura declarada se cumple de verdad",
                "Comprobar que todas las series tienen la misma longitud",
              ],
              correcta: 2,
              porque: [
                "El método es la última decisión, no la primera.",
                "La matriz viene después: primero hay que saber si la estructura que se va a imponer describe los datos.",
                "Con definiciones que no encajan, partidas contadas dos veces o cambios de perímetro, las hojas no sumaban la rama ni siquiera en el pasado, y se salta con mucha frecuencia.",
                "La longitud es un requisito operativo menor comparado con que la estructura sea real.",
              ],
            },
            {
              q: "Manufactura y energía reciben el mismo ajuste absoluto de 0,548 al reconciliar. ¿Significa lo mismo para ambas?",
              opciones: [
                "No: el ajuste debería haber sido proporcional al nivel de cada serie",
                "Sí: el ajuste absoluto es la medida natural del movimiento aplicado",
                "Sí, si ambas pertenecen a la misma rama",
                "No: sus niveles difieren, así que el mismo ajuste absoluto es un porcentaje muy distinto en cada una",
              ],
              correcta: 3,
              porque: [
                "La proyección reparte según la métrica elegida; el punto no es que el reparto esté mal, sino cómo hay que leerlo.",
                "Leer el diagnóstico en términos absolutos oculta que un ajuste pequeño en absoluto puede ser enorme para una serie pequeña.",
                "Pertenecer a la misma rama no iguala sus niveles.",
                "El diagnóstico útil compara el ajuste de cada serie con su propia escala y con su variabilidad típica.",
              ],
            },
            {
              q: "Una serie recibe un ajuste del 2,49 % cuando su crecimiento trimestral típico es del 0,5 %. ¿Qué indica?",
              opciones: [
                "Que el método elegido es demasiado conservador",
                "Que la reconciliación está afinando bien esa previsión",
                "Que la serie es especialmente volátil",
                "Que la reconciliación no está afinando la previsión: la está reescribiendo porque el resto de la jerarquía se lo exige",
              ],
              correcta: 3,
              porque: [
                "Un método conservador movería menos, no más.",
                "Afinar sería moverla dentro de su variabilidad habitual, no cinco veces por encima de ella.",
                "La volatilidad de la serie es justamente el término de comparación que hace saltar la alarma.",
                "Es la señal de alarma del diagnóstico: conviene mirar si la previsión base de esa serie es mala, o si lo que falla es la estructura o alguna otra rama.",
              ],
            },
            {
              q: "Se va a elegir herramienta para reconciliar. ¿Qué requisito debe cumplir?",
              opciones: [
                "Estimar automáticamente la matriz de covarianzas",
                "Permitir especificar la matriz de sumas explícitamente, y no solo árboles anidados",
                "Incluir todos los métodos de reconciliación publicados",
                "Ofrecer una interfaz gráfica para dibujar la jerarquía",
              ],
              correcta: 1,
              porque: [
                "La estimación automática de la matriz es una comodidad que conviene poder revisar, no un requisito.",
                "Las interfaces que solo aceptan árboles dejan de servir en cuanto la estructura tiene criterios cruzados, que es lo habitual en cuanto hay territorio y producto a la vez.",
                "Bastan unos pocos métodos bien implementados: la variedad no es el criterio.",
                "Dibujar la jerarquía es cómodo y es precisamente lo que limita a los árboles.",
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
            { ref: "Hyndman y Athanasopoulos, Forecasting: Principles and Practice, capítulo de series jerárquicas", nota: "la referencia práctica del bloque, con código reproducible para todas las variantes y las comprobaciones de estructura." },
            { ref: "Documentación de los paquetes de R para previsión jerárquica", nota: "las implementaciones que cubren jerarquías transversales, agrupadas y temporales, con las aproximaciones a la matriz de covarianzas y la reconciliación por simulación." },
            { ref: "Athanasopoulos y otros, «Hierarchical Forecasting»", nota: "la revisión que sitúa las ganancias esperables en contexto y advierte contra expectativas desmedidas." },
            { ref: "Eurostat, Handbook on Quarterly National Accounts", nota: "los controles de coherencia que preceden a la publicación en estadística oficial, buen modelo para la lista de comprobación previa." },
          ],
        },
      ],
    },
  ],
};
