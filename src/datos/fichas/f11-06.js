/* Ficha 11.06 — Petróleo, estanflación y el giro de los ochenta. */

export default {
  codigo: "11.06",
  titulo: "Petróleo, estanflación y el giro de los ochenta",
  nivel: 3,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Un choque de oferta produce a la vez más inflación y más paro, algo que el marco keynesiano de posguerra no podía explicar ni combatir. La estanflación no derrotó a una política económica: derrotó a una teoría, y la que ocupó su lugar sigue siendo el marco de los bancos centrales.",
  requiere: "11.05 Bretton Woods · 3.03 Desempleo e inflación · 3.06 Oferta y demanda agregadas",
  abre: "11.08 Crisis financieras · 3.08 Política monetaria · 11.09 España",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "En 1973 los países exportadores de petróleo cuadruplicaron el precio del crudo, y en 1979 volvió a multiplicarse casi por tres. Para economías que habían construido su industria, su transporte y su urbanismo sobre la hipótesis de energía barata, aquello no fue un encarecimiento más: fue **un desplazamiento de la curva de oferta agregada** con consecuencias que el instrumental de la época no sabía manejar.",
            "**La novedad analítica fue que subieron a la vez la inflación y el paro.** El marco keynesiano de posguerra pensaba en términos de demanda: si sobraba demanda había inflación, si faltaba había paro, y la política económica consistía en administrar el acelerador. La **curva de Phillips** de la ficha 3.03 recogía esa idea como una relación estable entre ambas variables, y llegó a usarse como un menú de opciones sobre el que un gobierno elegía punto. La estanflación mostró que ese menú no existía: **un choque de oferta empeora las dos cosas simultáneamente**, y ninguna dosis de demanda arregla ambas.",
            "**La explicación teórica llegó antes que el episodio, y eso reforzó su autoridad.** Friedman y Phelps habían argumentado a finales de los sesenta que la relación entre paro e inflación depende de **las expectativas**: si los trabajadores esperan un 2 % de inflación y hay un 4 %, sus salarios reales caen sin que lo hayan aceptado y el empleo sube temporalmente. Pero en cuanto ajustan sus expectativas, exigen más salario y el empleo vuelve a su nivel anterior con una inflación más alta. La conclusión es demoledora: **a largo plazo no hay disyuntiva**, solo existe la tasa natural, y comprar empleo con inflación funciona una vez y deja el problema para después.",
            "**De ahí sale un mecanismo que explica los años setenta enteros.** Si las expectativas se forman mirando la inflación pasada, cada intento de estimular la economía eleva la inflación, esa inflación se incorpora a las expectativas del año siguiente, y hace falta más inflación todavía para conseguir el mismo efecto. Es la **espiral acelerativa**, y su versión práctica fueron las cláusulas de revisión salarial automática y la indiciación generalizada de contratos, que convirtieron cualquier choque puntual en inflación persistente. La ficha 3.03 desarrolla la aritmética.",
            "**El giro de política llegó con Volcker en 1979 y fue deliberadamente brutal.** La Reserva Federal elevó los tipos de interés a niveles sin precedentes —por encima del 19 % en 1981— con el objetivo explícito de romper las expectativas, aun sabiendo que provocaría una recesión severa. La provocó: el paro estadounidense superó el 10 %, la industria pesada del medio oeste quedó devastada y hubo una crisis de deuda en América Latina alimentada por los tipos en dólares. Pero **la inflación se rompió**, y la credibilidad ganada entonces es la que sostiene el marco monetario actual.",
            "**El coste de esa operación tiene nombre y se mide: el ratio de sacrificio.** Es cuántos puntos de producto hay que perder, acumulados, por cada punto de inflación que se reduce. Las estimaciones para la desinflación de Volcker se sitúan en torno a **1,5 y 2**, lo que significa que bajar la inflación diez puntos costó entre quince y veinte puntos de producto acumulado. Ese número es el argumento central a favor de que un banco central mantenga la credibilidad: **si nadie duda de que actuará, las expectativas no se desanclan y no hay que pagar el ratio de sacrificio**.",
            "**Y de aquí sale el marco institucional que rige hoy.** Bancos centrales independientes del gobierno, con mandato de estabilidad de precios y objetivo explícito, porque un político con elecciones cada cuatro años tiene siempre la tentación de estimular ahora y pagar después. Es el problema de la **inconsistencia temporal** de Kydland y Prescott. Conviene, eso sí, no leer el episodio como una simple victoria: el giro de los ochenta trajo también desregulación financiera, debilitamiento sindical y un aumento de la desigualdad, y separar lo que fue necesario para domar la inflación de lo que fue una agenda política distinta es una discusión que sigue abierta.",
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
            { nom: "Choque de oferta", sub: "Empeora producto y precios a la vez.", cols: ["↓OA ⟹ ↑P y ↓Y simultáneamente"] },
            { nom: "Phillips con expectativas", sub: "El menú de opciones no existe.", cols: ["π = πᵉ − a·(u − uₙ)"] },
            { nom: "Tasa natural", sub: "A largo plazo el paro no depende de la inflación.", cols: ["π = πᵉ ⟹ u = uₙ"] },
            { nom: "Expectativas adaptativas", sub: "De ahí la espiral acelerativa.", cols: ["πᵉₜ = πₜ₋₁"] },
            { nom: "Indiciación", sub: "Convierte un choque puntual en persistente.", cols: ["salarios ligados a la inflación pasada"] },
            { nom: "Ratio de sacrificio", sub: "El precio de desinflar sin credibilidad.", cols: ["puntos de producto perdidos ÷ puntos de inflación reducidos"] },
            { nom: "Inconsistencia temporal", sub: "Por qué el banco central se hace independiente.", cols: ["lo óptimo hoy deja de serlo mañana"] },
            { nom: "Regla de Taylor", sub: "Con inflación al 13,5 % pedía tipos superiores al 20 %.", cols: ["i = r* + π + 0,5(π − π*) + 0,5·brecha"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: por qué desinflar sale tan caro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, la magnitud del choque.** El precio del crudo pasó de unos 3 dólares por barril a unos 12 entre 1973 y 1974, y de ahí a unos 35 hacia 1980. Son multiplicaciones por **cuatro** y por **casi tres** en apenas seis años, sobre un insumo que entra en el coste de prácticamente todo lo que se produce y se transporta.",
            "**Segundo, lo que exigía combatirlo.** Aplicando la regla de Taylor de la ficha 3.08 a una inflación del 13,5 % con objetivo del 2 % y sin brecha de producción, el tipo de interés recomendado sale por encima del **21 %**. No es una exageración retórica: es lo que hacía falta para que el tipo **real** fuera claramente positivo, y explica por qué Volcker llevó el tipo nominal por encima del 19 % y por qué la recesión resultante fue tan profunda.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Paro %", y: "Inflación %" },
          dominio: { x: [3, 11], y: [0, 15] },
          marcasX: [4, 6, 8, 10],
          marcasY: [0, 4, 8, 12],
          series: [
            {
              nombre: "Phillips estable",
              color: "tinta2",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [3.4, 8.5],
              puntos: [[3.5, 8], [4, 6.5], [5, 4.5], [6, 3], [7, 2], [8, 1.3]],
            },
            {
              nombre: "1965-73",
              color: "acento",
              grosor: 2.4,
              etiquetaEn: [4.2, 6.5],
              puntos: [[4.5, 1.7], [3.8, 3], [3.6, 4.3], [4.9, 5.9], [5.9, 4.3], [5.6, 3.3], [4.9, 6.2], [5.6, 11]],
            },
            {
              nombre: "1974-82",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [10.5, 6],
              puntos: [[5.6, 11], [8.5, 9.1], [7.7, 5.8], [7.1, 6.5], [6.1, 7.6], [5.8, 11.3], [7.2, 13.5], [7.6, 10.3], [9.7, 6.2], [10.5, 3.2]],
            },
          ],
          puntos: [
            { x: 7.2, y: 13.5, etiqueta: "1980", guias: false },
            { x: 10.5, y: 3.2, etiqueta: "1982", guias: false },
          ],
          nota: "Las series son estilizadas y lo que importa es la **forma**. Hasta principios de los setenta las observaciones se acomodan razonablemente a una curva descendente, y de ahí que se creyera en un menú estable: más inflación a cambio de menos paro. Después, la nube **se desplaza hacia arriba y hacia la derecha**: paro alto **con** inflación alta, la combinación que el marco anterior declaraba imposible. Y el tramo final es la desinflación de Volcker, un recorrido hacia abajo pagado con un paro superior al 10 %. Lo que el gráfico enseña es que **no hay una curva, hay una familia de curvas**, y cada una corresponde a un nivel de expectativas de inflación distinto.",
        },
        {
          tipo: "tabla",
          cabecera: ["Ratio de sacrificio", "Desinflar 10 puntos cuesta", "Equivale a"],
          filas: [
            ["1,5", "15 pp de producto acumulado", "5 años de crecimiento potencial"],
            { celdas: ["2,0 — estimación habitual para Volcker", "20 pp de producto acumulado", "6,7 años de crecimiento potencial"], clase: "total" },
            ["3,0", "30 pp de producto acumulado", "10 años de crecimiento potencial"],
          ],
          nota: "Con un crecimiento potencial del 3 % anual, perder veinte puntos de producto acumulado equivale a **borrar casi siete años de crecimiento**. Esa cifra es el argumento central a favor de la independencia de los bancos centrales, y conviene entender por qué: el ratio de sacrificio **no es una constante de la naturaleza**, sino que depende de cuánto tarden las expectativas en ajustarse. Si nadie duda de que el banco central actuará, las expectativas bajan casi de inmediato y la desinflación sale barata; si la credibilidad hay que ganársela peleando, se paga entera. **La credibilidad no es un adorno reputacional: es la diferencia entre pagar veinte puntos de producto o casi ninguno.**",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué el choque energético de 2022 no repitió los setenta",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El encarecimiento energético que siguió a 2021 fue, en magnitud, comparable a los choques de los setenta, y sin embargo no produjo una estanflación de una década. Comparar ambos episodios es la mejor forma de comprobar si lo que aprendimos era cierto.",
            "**La diferencia decisiva fue el anclaje de expectativas.** En los setenta, la inflación pasada determinaba las expectativas y estas se trasladaban a los salarios, de modo que un choque puntual se convertía en inflación permanente. En 2022, pese a registros de inflación que no se veían en cuarenta años, **las expectativas a medio plazo apenas se movieron**: los mercados y los hogares siguieron esperando que la inflación volviera al objetivo. Ese anclaje es el capital acumulado desde Volcker, y es lo que permitió que el choque se absorbiera sin espiral.",
            "**La segunda diferencia fue la indiciación.** En los setenta buena parte de los convenios incorporaba cláusulas de revisión automática ligadas al índice de precios, lo que garantizaba matemáticamente que cualquier subida de precios se convirtiera en subida de salarios y de nuevo en precios. Esas cláusulas se han ido reduciendo, y su ausencia rompe el mecanismo de realimentación. En España la discusión sobre el pacto de rentas de aquellos años fue exactamente sobre esto: **quién absorbe la pérdida de renta real que un choque de oferta impone al conjunto del país**, porque alguien tiene que hacerlo.",
            "**La tercera es la intensidad energética.** Las economías avanzadas consumen hoy bastante menos energía por unidad de producto que en 1973, en parte por eficiencia y en parte por el desplazamiento hacia los servicios. El mismo encarecimiento del crudo golpea por tanto menos fuerte, aunque sigue golpeando y de forma muy desigual entre sectores y entre hogares, según el peso de la energía en su presupuesto.",
            "**Y la cuarta, que se aprendió por la vía dolorosa, es la rapidez de la respuesta.** Los bancos centrales de los setenta tardaron años en reaccionar y en algún momento incluso relajaron la política monetaria mientras la inflación subía. En 2022 la reacción también llegó tarde —los primeros diagnósticos hablaron de un fenómeno transitorio— pero fue mucho más rápida y contundente que entonces, con subidas de tipos concentradas en meses.",
            "**Lo que no está resuelto, y conviene decirlo.** Sigue sin haber una respuesta buena a un choque de oferta puro: **subir tipos no produce ni un barril más de petróleo**, y lo único que hace la política monetaria es evitar que el choque se convierta en inflación persistente, a costa de demanda. La pérdida de renta real que impone el encarecimiento de un insumo importado es inevitable — la renta interior bruta real de la ficha 10.08 la mide — y la única discusión posible es **cómo se reparte**. Eso es política distributiva en el sentido de la ficha 1.10, no un problema técnico con solución óptima.",
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
            { t: "Leer la curva de Phillips como un menú estable de opciones", d: "La relación se desplaza cuando cambian las expectativas de inflación: no hay una curva sino una familia de curvas. Creer que un gobierno podía elegir permanentemente un punto con menos paro a cambio de más inflación fue el error teórico que los años setenta destruyeron." },
            { t: "Tratar la estanflación como un fallo de gestión", d: "Un choque de oferta empeora producción y precios a la vez, y ninguna política de demanda arregla ambas cosas: estimular alimenta la inflación y contraer agrava el paro. El problema no era que se administrara mal el acelerador, sino que el marco solo tenía acelerador." },
            { t: "Creer que se puede comprar empleo con inflación de forma permanente", d: "Funciona mientras las expectativas van por detrás de los hechos. En cuanto se ajustan, el empleo vuelve a su nivel anterior con una inflación más alta, y hace falta más inflación todavía para repetir el efecto. Esa es la espiral acelerativa, y explica los años setenta enteros." },
            { t: "Tomar el ratio de sacrificio como una constante", d: "Depende de la velocidad con que se ajusten las expectativas. Si el banco central es creíble, bajan casi de inmediato y desinflar sale barato; si la credibilidad hay que ganarla peleando, se pagan quince o veinte puntos de producto. La credibilidad es exactamente esa diferencia." },
            { t: "Ignorar la indiciación al comparar episodios inflacionistas", d: "Las cláusulas de revisión salarial automática convierten matemáticamente cualquier choque puntual en inflación persistente. Su presencia en los setenta y su práctica ausencia hoy explican buena parte de la diferencia entre ambos episodios, más que ninguna virtud de los gestores actuales." },
            { t: "Esperar que la política monetaria resuelva un choque de oferta", d: "Subir tipos no produce ni un barril más de petróleo. Lo único que puede hacer es impedir que el encarecimiento se traslade a las expectativas y se vuelva permanente, y lo hace a costa de demanda. La pérdida de renta real que impone un insumo importado más caro es inevitable." },
            { t: "Leer el giro de los ochenta como una victoria técnica sin más", d: "Domar la inflación exigía credibilidad monetaria, y eso se consiguió. Pero el paquete incluyó también desregulación financiera, debilitamiento sindical y un aumento de la desigualdad, y separar lo que era necesario para la desinflación de lo que era una agenda política distinta sigue siendo objeto de discusión legítima." },
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
            "Este episodio obligó a afinar varias mediciones que hasta entonces se daban por buenas, y de ahí salen indicadores que hoy son rutina.",
          ],
          lista: [
            "La distinción entre **IPC general y subyacente** se generaliza precisamente ahora. Excluir energía y alimentos no elaborados permite ver si un choque se está trasladando al resto de los precios o se queda contenido, que es exactamente la pregunta que decide si hay que actuar. La ficha 3.02 desarrolla la distinción.",
            "El **deflactor del PIB frente al IPC** cobra sentido práctico en un choque energético: el deflactor excluye las importaciones y el IPC no, de modo que un país importador de energía ve divergir ambos con fuerza. La ficha 10.08 explica por qué, y por qué ninguno de los dos está manipulado cuando eso ocurre.",
            "La **relación real de intercambio** y la **renta interior bruta real** son las magnitudes que miden lo que un país pierde cuando lo que importa se encarece más que lo que exporta. Producir lo mismo y poder comprar menos es exactamente lo que ocurrió en 1974, y el PIB en volumen no lo capta por diseño.",
            "El **producto potencial** y la **NAIRU** se vuelven variables centrales de la política económica en este periodo, porque distinguir un choque temporal de un deterioro permanente de la capacidad productiva decide si hay que estimular o no. Son estimaciones con la incertidumbre que la ficha 10.10 documenta, y en los setenta se revisaron a la baja muy tarde.",
            "Y la **descomposición del deflactor** en remuneración por unidad producida, excedente e impuestos permite ver quién absorbe la pérdida de renta real de un choque de oferta. Es la herramienta cuantitativa de la discusión sobre pacto de rentas, y sale directamente de la cuenta de explotación de la ficha 10.06.",
          ],
          cierre:
            "El hilo es el mismo que en las fichas anteriores: **cada crisis deja un indicador nuevo**. La Depresión dejó la contabilidad nacional, Bretton Woods su armonización internacional, y la estanflación la batería de medidas que hoy permiten distinguir un choque puntual de una inflación instalada.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué la estanflación era imposible en el marco keynesiano de posguerra?", a: "Porque ese marco razonaba en términos de demanda: sobra demanda y hay inflación, falta y hay paro. Un choque de oferta desplaza la curva de oferta agregada y empeora ambas cosas a la vez, de modo que ninguna dosis de demanda las arregla: estimular alimenta la inflación y contraer agrava el paro." },
            { q: "¿Qué añade la formulación de Friedman y Phelps a la curva de Phillips?", a: "Las expectativas. Si los trabajadores esperan un 2 % y hay un 4 %, sus salarios reales caen sin haberlo aceptado y el empleo sube temporalmente; en cuanto ajustan expectativas, exigen más salario y el empleo vuelve a la tasa natural con inflación más alta. A largo plazo no hay disyuntiva, y comprar empleo con inflación funciona una vez." },
            { q: "¿Qué es el ratio de sacrificio y por qué justifica la independencia del banco central?", a: "Los puntos de producto que hay que perder, acumulados, por cada punto de inflación reducido. En la desinflación de Volcker se estima en torno a 1,5-2, es decir, entre quince y veinte puntos de producto por bajar diez de inflación. Pero depende de la velocidad de ajuste de las expectativas: con credibilidad, desinflar sale casi gratis, y esa diferencia es lo que se protege haciendo independiente al banco central." },
            { q: "Con inflación del 13,5 % y objetivo del 2 %, ¿qué tipo pedía la regla de Taylor?", a: "Más del 21 %. No es una exageración retórica: era lo necesario para que el tipo real fuera claramente positivo, y explica que Volcker llevara el tipo nominal por encima del 19 % en 1981 y que la recesión resultante fuera tan profunda, con paro superior al 10 % y una crisis de deuda en América Latina alimentada por los tipos en dólares." },
            { q: "¿Por qué el choque energético de 2022 no produjo una estanflación de una década?", a: "Sobre todo porque las expectativas a medio plazo permanecieron ancladas, que es el capital acumulado desde Volcker. A eso se suma la práctica desaparición de las cláusulas de revisión salarial automática, que en los setenta convertían matemáticamente cualquier choque en inflación persistente, y una intensidad energética mucho menor." },
            { q: "¿Puede la política monetaria resolver un choque de oferta?", a: "No. Subir tipos no produce ni un barril más de petróleo. Lo único que puede hacer es impedir que el encarecimiento se traslade a las expectativas y se vuelva permanente, y lo hace a costa de demanda. La pérdida de renta real que impone un insumo importado más caro es inevitable, y la única discusión posible es cómo se reparte." },
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
            { ref: "Blanchard, Macroeconomía", nota: "el tratamiento de la curva de Phillips con expectativas y del ratio de sacrificio, con los datos del episodio." },
            { ref: "Friedman, «The Role of Monetary Policy», 1968", nota: "la conferencia que predijo la estanflación antes de que ocurriera; corta y decisiva para la historia de la disciplina." },
            { ref: "Kydland y Prescott, «Rules Rather than Discretion», 1977", nota: "la inconsistencia temporal, que es el argumento teórico de la independencia de los bancos centrales." },
            { ref: "Blinder, «The Anatomy of Double-Digit Inflation in the 1970s»", nota: "una reconstrucción cuidadosa de qué parte fue petróleo, qué parte alimentos y qué parte política monetaria." },
            { ref: "Blyth, Austeridad: historia de una idea peligrosa", nota: "la lectura de economía política del giro de los ochenta, útil como contrapeso al relato puramente técnico." },
          ],
        },
      ],
    },
  ],
};
