/* Ficha 15.05 — Descomposición: X-11 frente a SEATS. */

export default {
  codigo: "15.05",
  titulo: "Descomposición: X-11 frente a SEATS",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "5 h",
  nucleo:
    "Dos filosofías para el mismo problema: promedios móviles elegidos por décadas de práctica, o una descomposición derivada del modelo ARIMA estimado. Coinciden casi siempre y se separan justo cuando la serie es difícil, que es cuando la respuesta importa.",
  requiere: "15.02 Pre-ajuste RegARIMA · 15.04 Valores atípicos · 4.09 Series temporales",
  abre: "15.06 JDemetra+ · 15.07 Diagnósticos de calidad · 15.11 Agregación directa e indirecta",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Terminado el pre-ajuste, la serie está limpia de calendario y de atípicos, y extendida con predicciones. Toca separarla en tendencia-ciclo, estacionalidad e irregular. Hay dos familias de métodos para hacerlo y su diferencia es de principio, no de detalle: una decide **cómo filtrar** y la otra decide **qué modelo genera los datos** y deduce el filtro de ahí.",
            "La familia **X-11** es la de los promedios móviles, nacida en los años cincuenta en la Oficina del Censo estadounidense y refinada durante décadas. Su procedimiento es un algoritmo iterativo: estima una tendencia con una media móvil, obtiene los cocientes, promedia por periodo para sacar la estacionalidad, la retira, vuelve a estimar la tendencia sobre la serie ya desestacionalizada, y repite. Los filtros concretos —cuáles y de qué longitud— no salen de un modelo sino de la **experiencia acumulada** sobre miles de series reales, y se eligen automáticamente según la relación entre la variabilidad irregular y la estacional.",
            "Dos piezas merecen atención. Para la tendencia se usa el **filtro de Henderson**, diseñado para ser lo más suave posible conservando los movimientos polinómicos de hasta tercer grado. Tiene una propiedad que sorprende la primera vez: **algunos de sus pesos son negativos**, lo que permite que el resultado se salga del rango de los datos que promedia, y es lo que le da su capacidad de seguir los giros sin achatarlos. Para la estacionalidad se usan filtros llamados 3×3, 3×5 o 3×9 según cuántos años pesen en la estimación de cada factor: cuanto más largo, más estable y más lento en reaccionar a un cambio del patrón estacional.",
            "La familia **SEATS** parte del otro extremo. Como el pre-ajuste ya ha estimado un modelo ARIMA para la serie, ese modelo contiene toda la información sobre su dinámica; SEATS lo factoriza en componentes, asignando a cada uno la parte del proceso que le corresponde. La descomposición no es única —hay infinitas formas de repartir la varianza— y se resuelve con el criterio de **descomposición canónica**: asignar al irregular toda la varianza posible, dejando la tendencia y la estacionalidad lo más limpias que se pueda. Los filtros resultantes no se eligen de un catálogo: **se derivan del modelo estimado para esa serie concreta**.",
            "La comparación honesta es la siguiente. SEATS tiene coherencia teórica —el filtro se adapta a la serie y se puede calcular la incertidumbre de cada componente— y a cambio hereda toda la fragilidad del modelo: si el ARIMA está mal especificado, la descomposición es mala, y además hay modelos que sencillamente **no admiten descomposición admisible**, casos en que el programa tiene que modificarlos. X-11 es robusto, funciona con series que ningún modelo ajusta bien, y a cambio sus filtros son fijos y no dan medida alguna de incertidumbre.",
            "En la práctica producen resultados muy parecidos en la mayoría de las series. Las diferencias aparecen donde uno esperaría: en los **extremos de la serie**, en presencia de **cambios de patrón estacional**, y en series **cortas o muy irregulares**. Es decir, justo en los casos difíciles. Por eso los institutos europeos suelen usar TRAMO-SEATS y los norteamericanos X-13, sin que nadie haya demostrado la superioridad de ninguno, y por eso la herramienta de la ficha 15.06 implementa las dos y permite compararlas sobre la misma serie.",
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
            { nom: "X-11", sub: "Filtros elegidos empíricamente.", cols: ["Algoritmo iterativo de promedios móviles"] },
            { nom: "SEATS", sub: "Filtros derivados del modelo.", cols: ["Factorización del ARIMA estimado en el pre-ajuste"] },
            { nom: "Filtro de Henderson", sub: "El de tendencia en X-11.", cols: ["Máxima suavidad conservando polinomios de grado 3"] },
            { nom: "Pesos negativos", sub: "Rasgo del Henderson, no defecto.", cols: ["Permiten salirse del rango y seguir los giros"] },
            { nom: "Filtros estacionales", sub: "Cuántos años pesan en cada factor.", cols: ["3×3 reacciona rápido · 3×9 es estable y lento"] },
            { nom: "Descomposición canónica", sub: "Cómo resuelve SEATS la indeterminación.", cols: ["Toda la varianza posible al irregular"] },
            { nom: "Modelo no admisible", sub: "El punto débil de SEATS.", cols: ["Algunos ARIMA no admiten descomposición: hay que sustituirlos"] },
            { nom: "Dónde difieren", sub: "No en la media, sino en lo difícil.", cols: ["Extremos · cambios de patrón · series cortas"] },
            { nom: "Ventaja de SEATS", sub: "Lo que X-11 no puede dar.", cols: ["Errores estándar de cada componente estimado"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: los pesos que hay detrás de la tendencia",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El filtro de Henderson de 13 términos es el que X-11 emplea con más frecuencia en series trimestrales y mensuales de variabilidad media. Sus pesos son públicos y fijos, y mirarlos explica bastante sobre por qué una tendencia estimada se comporta como lo hace.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Distancia al centro", y: "Peso" },
          dominio: { x: [-6, 6], y: [-0.05, 0.29] },
          marcasX: [-6, -3, 0, 3, 6],
          marcasY: [0, 0.1, 0.2],
          series: [
            {
              nombre: "Filtro de Henderson (13)",
              color: "acento",
              etiquetaEn: [-5.7, 0.27],
              puntos: [[-6, -0.01935], [-5, -0.02786], [-4, 0], [-3, 0.06549], [-2, 0.14736], [-1, 0.21434], [0, 0.24006], [1, 0.21434], [2, 0.14736], [3, 0.06549], [4, 0], [5, -0.02786], [6, -0.01935]],
            },
            {
              nombre: "Media móvil simple (13)",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [2.9, 0.13],
              puntos: [[-6, 0.07692], [6, 0.07692]],
            },
          ],
          nota: "La media móvil simple reparte el mismo peso entre las trece observaciones. El Henderson concentra el peso en el centro —el punto central pesa **0,240**, más de tres veces— y **da peso negativo a los cuatro extremos**. Esos pesos negativos son los que permiten que la tendencia estimada se salga del rango de los datos promediados, y por tanto que siga un giro sin achatarlo. Una media simple, al no poder hacerlo, redondea los máximos y los mínimos.",
        },
        {
          tipo: "tabla",
          cabecera: ["Propiedad", "Media móvil simple", "Henderson de 13"],
          filas: [
            ["Peso del punto central", "0,0769", "0,2401"],
            ["Pesos negativos", "ninguno", "cuatro"],
            ["Suma de pesos", "1", "1"],
            ["Conserva rectas", "sí", "sí"],
            { celdas: ["Conserva cúbicas", "no", "sí"], clase: "total" },
          ],
          nota: "Que **conserve polinomios de tercer grado** es la propiedad de diseño del Henderson: aplicado a una serie que siga exactamente una cúbica, devuelve la cúbica sin deformarla. Comprobado numéricamente sobre un polinomio cúbico, la diferencia entre el valor real y el filtrado es de **3,5 · 10⁻⁵**, atribuible al redondeo de los pesos publicados, que por eso suman 1,00002 y no exactamente 1.",
        },
        {
          tipo: "parrafos",
          items: [
            "Los filtros estacionales siguen la misma lógica de composición. Un filtro **3×3** es una media móvil de tres términos aplicada dos veces, lo que da los pesos 0,111 · 0,222 · 0,333 · 0,222 · 0,111 sobre cinco años del mismo trimestre. Un **3×5** extiende a siete años con pesos 0,067 · 0,133 · 0,200 · 0,200 · 0,200 · 0,133 · 0,067. Ambos suman uno.",
            "La elección entre ellos es un compromiso explícito. El **3×3 pesa cinco años** y reacciona deprisa a un cambio del patrón estacional, a costa de recoger también el ruido. El **3×9 pesa once años** y da factores muy estables, a costa de tardar en reconocer que la estacionalidad ha cambiado de verdad. X-11 elige automáticamente comparando la variabilidad del irregular con la del estacional —la llamada razón I/S—, pero la elección se puede fijar a mano, y en series con estacionalidad cambiante conviene revisarla.",
            "SEATS no tiene este catálogo. Su filtro sale de la factorización del ARIMA, así que **su longitud efectiva depende de los parámetros estimados**: un modelo con Θ próximo a uno produce un filtro estacional muy estable, y uno con Θ pequeño, un filtro que se adapta rápido. La decisión sigue existiendo, pero se ha trasladado del catálogo de filtros a la especificación del modelo, que es lo que se decidió en la ficha 15.02.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: la misma serie, dos series ajustadas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un instituto que quiera decidir entre ambos métodos no puede resolverlo con un argumento teórico, porque los dos son defendibles. Lo que se hace en la práctica es ajustar la misma serie por los dos caminos y comparar tres cosas: dónde difieren los resultados, cuál pasa mejor los diagnósticos, y cuál produce menos revisiones.",
            "**Dónde difieren.** En el cuerpo de la serie, casi nada: las diferencias suelen quedar por debajo de la precisión con que se publica el dato. En los **últimos trimestres** la separación crece, porque X-11 aplica filtros asimétricos apoyados en las predicciones mientras SEATS deriva el filtro del modelo, y ambos extrapolan de forma distinta. Como el último dato es el que se comenta, esa es precisamente la zona donde la elección importa.",
            "**Qué diagnósticos pasa mejor.** Los contrastes de la ficha 15.07 —estacionalidad residual, estabilidad de los factores, autocorrelación del irregular— se aplican a ambos resultados. Es frecuente que uno de los dos falle algún contraste en series concretas, y ese es el criterio más objetivo disponible. No hay un ganador sistemático: depende de la serie.",
            "**Cuántas revisiones genera.** Se simula el proceso histórico: se recalcula el ajuste como si solo se dispusiera de los datos hasta cada fecha pasada, y se mide cuánto cambiaron después los valores publicados. El método que produzca revisiones menores es preferible en igualdad de condiciones, porque la estabilidad tiene valor propio para el usuario, como argumenta la ficha 15.08.",
            "Un criterio adicional que suele pesar más de lo que se admite: **la capacidad de explicar el resultado**. SEATS permite decir «el filtro es este porque el modelo estimado es aquel» y acompañar cada componente de su error estándar. X-11 permite decir «se ha aplicado el filtro 3×5 y el Henderson de 13», que es reproducible pero no justificable desde ningún principio. Para una estadística oficial sujeta a escrutinio, poder documentar la cadena de decisiones tiene valor institucional, y esa es parte de la razón por la que el sistema estadístico europeo se inclinó por TRAMO-SEATS sin declararlo superior.",
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
            { t: "Creer que uno de los dos métodos es el correcto", d: "Ninguno ha demostrado superioridad general. SEATS tiene coherencia teórica y da errores estándar; X-11 es robusto y funciona donde ningún modelo ajusta. Producen resultados parecidos en la mayoría de series y difieren en los casos difíciles, que es donde ninguno tiene una respuesta obviamente mejor." },
            { t: "Alarmarse por los pesos negativos del Henderson", d: "Son de diseño, no un defecto. Permiten que la tendencia estimada se salga del rango de los datos promediados, y eso es lo que le da capacidad de seguir un giro sin achatarlo. Una media móvil con todos los pesos positivos redondea máximos y mínimos por construcción." },
            { t: "Dejar siempre la elección automática del filtro estacional", d: "X-11 elige entre 3×3, 3×5 y 3×9 comparando la variabilidad del irregular con la del estacional. Es razonable por defecto, pero en series con estacionalidad cambiante un filtro largo tarda años en reconocer el cambio, y conviene revisar la elección en lugar de aceptarla sin mirar." },
            { t: "Suponer que SEATS es objetivo porque parte de un modelo", d: "La descomposición de un ARIMA en componentes no es única: hay infinitas formas de repartir la varianza. SEATS resuelve la indeterminación con el criterio canónico, que es una convención razonable pero una convención. La subjetividad no desaparece, se traslada." },
            { t: "Ignorar que hay modelos sin descomposición admisible", d: "No todo ARIMA se puede factorizar en componentes con varianzas no negativas. Cuando ocurre, el programa sustituye el modelo por uno próximo que sí lo admita, y esa sustitución es silenciosa. Conviene comprobar en la salida si el modelo usado para descomponer es el que se estimó." },
            { t: "Comparar series ajustadas por métodos distintos", d: "Las diferencias entre X-11 y SEATS se concentran en los extremos de la serie, que es lo que se comenta. Comparar el crecimiento del último trimestre de dos países que usan métodos distintos introduce diferencias de método donde se leen diferencias de economía." },
            { t: "Pedir a la descomposición que separe tendencia de ciclo", d: "Ambos métodos producen un componente conjunto de tendencia-ciclo. Separarlos exige supuestos adicionales y bastante más discutibles, y no forma parte del ajuste estacional. Llamar «tendencia» al componente y leerlo como crecimiento potencial es un error frecuente." },
            { t: "Evaluar el resultado por su aspecto en el gráfico", d: "Los filtros suavizan por construcción, así que cualquier ajuste, bueno o malo, produce una serie de aspecto creíble. Por eso existen los contrastes de la ficha siguiente: la suavidad no es evidencia de calidad, es una consecuencia del método." },
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
            "La elección de método deja de ser una preferencia técnica cuando el resultado tiene que encajar en un sistema de identidades contables.",
          ],
          lista: [
            "Ni X-11 ni SEATS son **operaciones lineales**, así que la serie ajustada de un agregado no coincide con la suma de las series ajustadas de sus componentes. Como el SEC exige que el PIB por el gasto sea la suma de sus partidas, según la identidad que recorre la ficha 13.02, la descomposición rompe una identidad contable por su propia naturaleza. Es lo que obliga a elegir entre agregación directa e indirecta en la ficha 15.11.",
            "Los **filtros estacionales largos** presuponen que el patrón intraanual es estable durante una década. En ramas sujetas a cambios estructurales —el comercio con la expansión del canal digital, el turismo con la desestacionalización de los destinos— ese supuesto falla, y un 3×9 tarda años en registrarlo. La elección de filtro es, en ese sentido, una hipótesis sobre la economía y no solo un parámetro.",
            "El requisito de **reproducibilidad** pesa en estadística oficial más que en investigación. Una serie publicada debe poder recalcularse años después con la misma especificación y obtener el mismo resultado, lo que favorece procedimientos documentables y estables frente a los que se readaptan en cada publicación. Es el mismo criterio que sostiene la congelación de la especificación en la ficha 15.02.",
            "La ventaja de SEATS de proporcionar **errores estándar de los componentes** conecta con una carencia estructural del sistema de cuentas: los agregados del SEC se publican sin medida de incertidumbre, como advertía la ficha 10.10. Disponer del error estándar del componente estacional permitiría al menos acotar una de las fuentes, aunque en la práctica casi nunca se publica.",
            "Por último, la relación con los **volúmenes encadenados** de la ficha 10.08. El ajuste estacional se aplica a series en volumen, que ya son no aditivas por el encadenamiento. Se acumulan así dos fuentes independientes de discrepancia entre el agregado y la suma de las partes, y separarlas al diagnosticar por qué un cuadro no cuadra requiere calcular ambas por separado.",
          ],
          cierre:
            "La consecuencia práctica: la elección entre X-11 y SEATS no se decide solo por criterios estadísticos. Reproducibilidad, documentabilidad y coherencia con el resto del sistema pesan tanto como el ajuste a los datos.",
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
              q: "¿Cuál es la diferencia de principio entre X-11 y SEATS?",
              a: "X-11 decide cómo filtrar: aplica un algoritmo iterativo de promedios móviles cuyos filtros se eligieron por experiencia acumulada sobre miles de series. SEATS decide qué modelo genera los datos —el ARIMA estimado en el pre-ajuste— y deriva los filtros de su factorización. Uno parte del procedimiento y el otro del modelo.",
            },
            {
              q: "¿Por qué el filtro de Henderson tiene pesos negativos?",
              a: "Para poder salirse del rango de los datos que promedia. Un filtro con todos los pesos positivos produce siempre un valor intermedio entre los datos, así que redondea máximos y mínimos. Los pesos negativos en las colas permiten que la tendencia estimada siga un giro sin achatarlo, y son lo que hace al Henderson conservar polinomios de hasta tercer grado.",
            },
            {
              q: "¿Qué se está eligiendo al optar entre un filtro estacional 3×3 y uno 3×9?",
              a: "El compromiso entre rapidez de reacción y estabilidad. El 3×3 pesa cinco años del mismo periodo y reconoce deprisa un cambio del patrón estacional, a costa de recoger ruido. El 3×9 pesa once años y da factores muy estables, a costa de tardar años en registrar un cambio real. Es una hipótesis sobre si la estacionalidad de esa serie es estable o está cambiando.",
            },
            {
              q: "SEATS parte de un modelo estimado. ¿Significa eso que su descomposición es objetiva?",
              a: "No. La factorización de un ARIMA en componentes no es única: hay infinitas formas de repartir la varianza entre tendencia, estacionalidad e irregular. SEATS resuelve la indeterminación con el criterio de descomposición canónica, que asigna al irregular toda la varianza posible. Es una convención razonable, pero una convención: la subjetividad se traslada, no desaparece.",
            },
            {
              q: "¿Dónde difieren más las series ajustadas por uno y otro método, y por qué importa?",
              a: "En los extremos de la serie, en presencia de cambios del patrón estacional y en series cortas o muy irregulares. Importa porque el extremo es justamente el dato de coyuntura que se comenta y sobre el que se decide. También implica que comparar el crecimiento del último trimestre entre países que usan métodos distintos introduce diferencias de método donde se leen diferencias de economía.",
            },
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
            { ref: "Ladiray y Quenneville, Seasonal Adjustment with the X-11 Method", nota: "el recorrido detallado del algoritmo, los filtros y su justificación empírica; la referencia para entender qué hace X-11 paso a paso." },
            { ref: "Gómez y Maravall, Programs TRAMO and SEATS: Instructions for the User", nota: "la exposición del enfoque basado en modelos, la descomposición canónica y el tratamiento de los modelos no admisibles, por sus autores." },
            { ref: "Henderson, «Note on Graduation by Adjusted Average»", nota: "el trabajo de 1916 del que sale el filtro, escrito en el contexto actuarial en el que se planteó originalmente el problema de suavizar sin deformar." },
            { ref: "Manual de referencia de JDemetra+, comparación de algoritmos", nota: "cómo ajustar la misma serie por ambos métodos en la herramienta y qué salidas comparar para decidir." },
          ],
        },
      ],
    },
  ],
};
