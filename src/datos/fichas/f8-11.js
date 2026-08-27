/* Ficha 8.11 — Fondos de inversión e inversión colectiva. */

export default {
  codigo: "8.11",
  titulo: "Fondos de inversión e inversión colectiva",
  nivel: 2,
  bloque: "Mercados financieros e inversión",
  tiempo: "4 h",
  nucleo:
    "El fondo es el vehículo por el que la mayoría accede a los mercados, y su variable decisiva no es la rentabilidad que promete sino la comisión que cobra. La rentabilidad es incierta; la comisión es segura, se cobra sobre el patrimonio y no sobre la ganancia, y se acumula durante décadas.",
  requiere: "8.01 Sistema financiero · 8.05 Riesgo y diversificación · 7.01 Valor temporal del dinero",
  abre: "8.07 Eficiencia de mercados · 8.10 Gestión de riesgos · 10.04 Gasto público y pensiones",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un fondo de inversión es un **patrimonio sin personalidad jurídica** formado por las aportaciones de muchos ahorradores, gestionado por una sociedad gestora y custodiado por una entidad depositaria distinta de ella. Esa separación entre gestión y custodia no es un tecnicismo: es la garantía de que los activos no están en el balance de la gestora y de que su quiebra no arrastra el dinero de los partícipes. Es la diferencia estructural entre un fondo y un depósito bancario, que sí es un pasivo del banco.",
            "La unidad de cuenta es la **participación**, y su precio es el **valor liquidativo**: el patrimonio del fondo dividido entre el número de participaciones en circulación. Se calcula normalmente cada día con los precios de cierre de los activos. La consecuencia importante es que **suscribir o reembolsar no altera el valor liquidativo**: entra dinero y se crean participaciones nuevas en la misma proporción, de modo que quien ya estaba dentro no se diluye ni se beneficia. El fondo respira sin que su precio unitario dependa de ese flujo, a diferencia de una acción, cuyo precio sí responde a la presión de compra.",
            "La ventaja que justifica el vehículo es doble. Permite **diversificación a un coste accesible**: con una aportación pequeña se accede a una cartera de cientos de emisiones que sería imposible replicar comprando títulos sueltos, lo que materializa la reducción de riesgo no sistemático de la ficha 8.05. Y delega la gestión operativa —custodia, cobro de cupones, reinversión, información fiscal— en una estructura profesional. A cambio, el partícipe paga comisiones y renuncia al control sobre las decisiones concretas de cartera.",
            "Ahí aparece la variable que domina el resultado a largo plazo. La **comisión de gestión** se cobra como porcentaje anual del patrimonio, no de la ganancia: se paga igual en los años buenos que en los malos, y se detrae del valor liquidativo antes de publicarlo, de modo que el partícipe nunca la ve como un cargo. Junto a la de depositaría y a los gastos corrientes forma el coste total, y ese coste **se compone durante décadas exactamente igual que la rentabilidad**, pero en contra. El ejemplo numérico muestra que una diferencia de comisión que parece trivial se lleva casi un tercio del capital final.",
            "La gran división del sector es entre **gestión activa** —seleccionar valores intentando batir a un índice de referencia— y **gestión indexada o pasiva**, que se limita a replicar ese índice al menor coste posible. La primera cobra bastante más porque promete más. La evidencia acumulada es contundente y va en el sentido que anticipa la ficha 8.07: en horizontes largos, la mayoría de los fondos activos no supera a su índice después de comisiones, y los que lo consiguen en un periodo rara vez repiten en el siguiente. No es que los gestores sean incompetentes: es que compiten entre sí, en conjunto son el mercado, y por tanto **su rentabilidad agregada antes de costes solo puede ser la del mercado**, de la que hay que restar unos costes mayores.",
            "Conviene distinguir el fondo tradicional del **ETF**, que replica un índice pero cotiza en bolsa como una acción: se compra y vende a lo largo de la sesión al precio de mercado, no al valor liquidativo de cierre, y lleva comisiones de intermediación por cada operación. En España, además, existe una asimetría fiscal relevante: el **traspaso** entre fondos de inversión no tributa —la plusvalía se difiere hasta el reembolso definitivo—, mientras que vender un ETF y comprar otro sí es una transmisión que tributa. Esa diferencia no es una anécdota: es diferimiento fiscal, y el diferimiento es, en términos de la ficha 7.01, valor.",
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
            { nom: "Valor liquidativo", sub: "El precio de una participación.", cols: ["$\\mathrm{VL} = \\dfrac{\\text{patrimonio del fondo}}{\\text{participaciones en circulación}}$"] },
            { nom: "Neutralidad de los flujos", sub: "Por qué el partícipe antiguo no se diluye.", cols: ["Suscribir crea participaciones al VL vigente: el VL no cambia"] },
            { nom: "Gestora y depositaria", sub: "La separación que protege el patrimonio.", cols: ["El activo no está en el balance de la gestora"] },
            { nom: "Comisión de gestión", sub: "Sobre patrimonio, no sobre ganancia.", cols: ["Se detrae del VL: nunca aparece como cargo al partícipe"] },
            { nom: "Rentabilidad neta", sub: "Lo único que llega al bolsillo.", cols: ["Rentabilidad bruta − gastos corrientes totales"] },
            { nom: "Capital final", sub: "La comisión se compone igual que la rentabilidad.", cols: ["$C(1 + r - c)^n$"] },
            { nom: "Gestión activa frente a indexada", sub: "El argumento agregado, no el individual.", cols: ["Los activos en conjunto son el mercado, con más costes"] },
            { nom: "Traspaso", sub: "Particularidad fiscal española.", cols: ["Entre fondos no tributa: la plusvalía se difiere al reembolso"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: lo que se lleva la comisión",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Antes de las comisiones, la mecánica. Un fondo con un patrimonio de **48.600.000 €** y **3.240.000 participaciones** tiene un valor liquidativo de **15,00 €**. Si entran 1.500.000 € de suscripciones, se emiten 100.000 participaciones nuevas y el patrimonio pasa a 50.100.000 € repartido entre 3.340.000 participaciones: el valor liquidativo sigue siendo **15,00 €**. El dinero nuevo no diluye ni beneficia a nadie.",
            "Ahora el coste. Se invierten **10.000 €** durante **30 años** en una cartera que rinde un **7 % bruto anual**. Lo único que cambia entre las tres columnas es la comisión.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Comisión anual", "Rentabilidad neta", "Capital a 30 años", "Diferencia"],
          filas: [
            ["Sin comisión (referencia teórica)", "0,00 %", "7,00 %", "76.123 €", "—"],
            ["Fondo indexado", "0,30 %", "6,70 %", "69.973 €", "−6.150 €"],
            { celdas: ["Fondo de gestión activa", "1,80 %", "5,20 %", "45.759 €", "−30.364 €"], clase: "total" },
          ],
          nota: "El punto y medio de comisión que separa las dos últimas filas cuesta **24.215 €**, es decir, el indexado termina con un **52,9 % más** de capital. Dicho de la forma más incómoda: la comisión activa se ha llevado el **31,8 %** de todo lo que la inversión habría generado sin coste alguno. Y esto suponiendo que **ambos fondos obtengan la misma rentabilidad bruta**; si el activo no bate al índice antes de comisiones, la brecha es mayor.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Años", y: "Capital €" },
          dominio: { x: [0, 30], y: [0, 80000] },
          marcasX: [0, 6, 12, 18, 24, 30],
          marcasY: [0, 20000, 40000, 60000, 80000],
          series: [
            {
              nombre: "Sin comisión",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [2, 73000],
              puntos: [[0, 10000], [3, 12250], [6, 15007], [9, 18385], [12, 22522], [15, 27590], [18, 33799], [21, 41406], [24, 50724], [27, 62139], [30, 76123]],
            },
            {
              nombre: "Indexado, 0,30 %",
              color: "acento",
              etiquetaEn: [2, 63000],
              puntos: [[0, 10000], [3, 12148], [6, 14757], [9, 17926], [12, 21776], [15, 26452], [18, 32134], [21, 39035], [24, 47418], [27, 57602], [30, 69973]],
            },
            {
              nombre: "Gestión activa, 1,80 %",
              color: "alerta",
              etiquetaEn: [2, 53000],
              puntos: [[0, 10000], [3, 11643], [6, 13555], [9, 15781], [12, 18373], [15, 21391], [18, 24905], [21, 28995], [24, 33758], [27, 39303], [30, 45759]],
            },
          ],
          nota: "Durante los primeros años las tres líneas parecen la misma, y esa es exactamente la trampa: **la comisión no duele cuando se contrata, duele cuando ya no se puede deshacer**. La separación crece porque el coste se compone. A los diez años la diferencia entre indexado y activo ronda los 3.000 €; a los treinta supera los 24.000, más del doble de la inversión inicial.",
        },
        {
          tipo: "parrafos",
          items: [
            "Merece la pena ver el mismo número desde el lado del gestor. Una comisión del 1,80 % sobre un patrimonio medio de 500 millones son **9 millones de euros al año** de ingresos ciertos, cobrados suba o baje el mercado. Ese es el modelo de negocio, y explica por qué el esfuerzo comercial del sector se dirige a captar patrimonio antes que a mejorar el resultado: el ingreso depende del primero y solo indirectamente del segundo.",
            "Un matiz honesto para no convertir esto en una consigna. La comisión baja es una ventaja **cierta**, no una garantía de mejor resultado: un fondo indexado replica su índice también cuando cae, y elegir el índice equivocado o el momento equivocado sigue siendo posible. Lo que la evidencia sostiene no es que lo barato rinda más, sino que **el coste es la única variable de la que se conoce el signo por adelantado**. Todo lo demás —qué gestor acertará, qué mercado subirá— es incierto; la comisión, no.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: por qué la gestión activa pierde de media",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El argumento decisivo no es empírico sino aritmético, y se debe a Sharpe. Divídase a todos los que poseen un mercado en dos grupos: los indexados, que replican el índice, y los activos, que hacen cualquier otra cosa. Los indexados obtienen, por construcción, la rentabilidad del índice menos sus costes. Como **entre los dos grupos poseen la totalidad del mercado**, y los indexados obtienen la rentabilidad del mercado, el conjunto de los activos también tiene que obtener exactamente la rentabilidad del mercado antes de costes. No hay otra posibilidad: es contabilidad, no una hipótesis sobre el comportamiento.",
            "De ahí se sigue que, **después de costes, el inversor activo medio obtiene menos que el indexado medio**, y la diferencia es precisamente la diferencia de costes. Esto no depende de que los mercados sean eficientes, ni de que los gestores sean buenos o malos, ni del periodo que se mire. Es cierto en cualquier mercado, eficiente o no. Lo único que el argumento permite es que **algunos** activos ganen, necesariamente a costa de otros activos: la gestión activa es, en agregado, un juego de suma cero antes de costes y de suma negativa después.",
            "La evidencia empírica confirma esa predicción con una regularidad notable. Los estudios que comparan fondos activos con su índice de referencia a horizontes de diez o quince años encuentran que **la mayoría queda por debajo**, y la proporción crece con el plazo. Más revelador todavía es el examen de la **persistencia**: entre los fondos que superan a su índice en un periodo, la fracción que vuelve a hacerlo en el siguiente se parece mucho a lo que produciría el azar. Si el buen resultado fuera habilidad, debería repetirse; si es suerte, no. Los datos se parecen más a lo segundo.",
            "Hay dos sesgos que hacen que las cifras publicadas del sector sean todavía mejores de lo que la realidad justifica. El **sesgo de supervivencia**: los fondos que van mal se cierran o se fusionan con otros, y desaparecen de las series históricas, de modo que la rentabilidad media de los fondos «existentes hoy» es superior a la que obtuvo realmente un inversor de hace veinte años. Y el sesgo de la **rentabilidad del partícipe frente a la del fondo**: como el dinero entra después de las subidas y sale después de las caídas, la rentabilidad que obtiene el partícipe medio es sistemáticamente inferior a la que publica el fondo. La ficha 8.07 explica por qué ese comportamiento es tan persistente.",
            "Nada de esto convierte la gestión activa en un fraude. Tiene sentido en mercados poco cubiertos donde la información es escasa y el índice mal construido, y alguien tiene que hacer el trabajo de fijar precios: si todo el mundo indexara, no habría quien incorporase información nueva y el propio índice dejaría de ser fiable. La conclusión razonable es más modesta que el eslogan: **la gestión activa es un servicio caro cuyo valor esperado, para el partícipe medio y en mercados líquidos, es negativo por la magnitud de su coste**.",
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
            { t: "Elegir fondo por la rentabilidad de los últimos años", d: "Es el criterio más usado y el peor. La rentabilidad pasada tiene escasa capacidad predictiva —la persistencia de los buenos resultados se parece al azar—, mientras que la comisión predice con fiabilidad el diferencial futuro respecto al índice. Se está eligiendo por la variable incierta e ignorando la única segura." },
            { t: "Creer que la comisión se cobra sobre la ganancia", d: "Se cobra sobre el patrimonio, todos los años, gane o pierda el fondo. En un año de caída del 10 % con comisión del 1,8 %, el partícipe pierde el 10 % y además paga la comisión. Que se detraiga del valor liquidativo antes de publicarlo hace que nunca se vea como un cargo, y eso explica que se le preste tan poca atención." },
            { t: "Pensar que una comisión del 1 % o 2 % es pequeña", d: "Lo parece frente a una rentabilidad del 7 %, pero hay que compararla con lo que se lleva del resultado acumulado, no con la rentabilidad anual. En treinta años, 1,5 puntos de diferencia se llevan casi un tercio del capital final. El error es aplicar intuición lineal a un proceso multiplicativo." },
            { t: "Confundir el fondo con un depósito", d: "El depósito es un pasivo del banco, con remuneración pactada y cubierto por el fondo de garantía. El fondo es un patrimonio separado cuyo valor fluctúa con los activos que contiene y que no garantiza nada. La separación entre gestora y depositaria protege frente a la quiebra de la gestora, no frente a la caída de los mercados." },
            { t: "Creer que las suscripciones de otros diluyen al partícipe", d: "No lo hacen: entra dinero y se emiten participaciones nuevas al valor liquidativo vigente, de modo que el VL no varía. Es una diferencia esencial con las acciones, cuyo precio sí responde a la presión compradora. El partícipe solo se ve afectado por lo que hagan los activos de la cartera." },
            { t: "Tratar un ETF y un fondo indexado como equivalentes", d: "Replican lo mismo, pero el ETF cotiza en sesión, se compra al precio de mercado con comisiones de intermediación y horquilla, y en España su venta tributa. El fondo se suscribe al valor liquidativo de cierre y admite traspaso sin tributación. Para quien va a rebalancear su cartera durante décadas, esa asimetría fiscal pesa más que unas décimas de coste anual." },
            { t: "Comparar rentabilidades de fondos ignorando el sesgo de supervivencia", d: "Las medias del sector se calculan sobre los fondos que siguen existiendo. Los que fueron mal se cerraron o se fusionaron y salieron de la serie. La rentabilidad media histórica que se publica es, por eso, mejor que la que obtuvo cualquier inversor real que hubiera elegido al azar hace veinte años." },
            { t: "Suponer que el índice es una decisión neutral", d: "Indexarse no elimina las decisiones, las traslada: qué índice, con qué ponderación, en qué divisa y con qué exposición geográfica. Un índice ponderado por capitalización concentra el peso en lo que más ha subido, que es una apuesta implícita. Lo pasivo es la gestión dentro del índice, no la elección del índice." },
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
            "Los fondos son unidades institucionales con sector propio, y el sistema resuelve con una imputación el problema de que sus rentas no se cobren.",
          ],
          lista: [
            "Los fondos de inversión son **instituciones financieras** dentro de S.12, con dos subsectores propios: los **fondos del mercado monetario (S.123)** y los **fondos de inversión no monetarios (S.124)**. Son unidades institucionales de pleno derecho aunque carezcan de personalidad jurídica, porque tienen un conjunto completo de cuentas y autonomía de decisión —ejercida por la gestora—, según los criterios de sectorización de la ficha 12.01.",
            "Las **participaciones** que posee el partícipe son un activo financiero con código propio, **AF.52**, distinto de las acciones (AF.511) y de los valores de deuda (AF.3) que cataloga la ficha 13.10. Quien tiene participaciones no posee directamente los activos subyacentes: posee un derecho sobre el patrimonio del fondo.",
            "Aquí aparece la imputación característica. El fondo cobra intereses y dividendos de su cartera y normalmente **no los distribuye**: los reinvierte y el valor liquidativo sube. El SEC no acepta que esa renta desaparezca, así que la atribuye a los partícipes como si la hubieran cobrado, mediante las **rentas de inversión atribuidas a los partícipes en fondos de inversión (D.443)**, dentro de las rentas de la propiedad de la ficha 12.04. Acto seguido registra una reinversión por el mismo importe. La renta figura en el hogar aunque no haya llegado a su cuenta corriente.",
            "Es exactamente el mismo mecanismo que el sistema aplica a los seguros y a los fondos de pensiones en la ficha 12.05, y responde a la misma lógica: el sistema atribuye la renta a quien soporta el riesgo económico, no a quien la custodia. Sin esa imputación, el ahorro de los hogares aparecería artificialmente bajo y el de las instituciones financieras artificialmente alto.",
            "Una advertencia sobre las **comisiones**: son producción de servicios de la gestora, no una transferencia. Forman parte de la producción del sector financiero (P.1) y del consumo intermedio o final de quien las paga, y por tanto **cuentan en el PIB**. Un sistema de gestión más caro produce, en contabilidad nacional, más PIB. Es un buen recordatorio de que el PIB mide actividad y no bienestar, en la línea de lo que advertía la ficha 3.01.",
          ],
          cierre:
            "La consecuencia práctica: la renta que genera un fondo acumulativo ya está atribuida al hogar en las cuentas nacionales aunque el partícipe no vea un euro hasta que reembolse. La contabilidad nacional y la fiscal miden aquí cosas distintas, y ninguna de las dos está equivocada.",
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
              q: "Un fondo tiene 48.600.000 € de patrimonio y 3.240.000 participaciones. Entran 1.500.000 € de suscripciones. ¿Cuál es el valor liquidativo antes y después?",
              a: "15,00 € en los dos momentos. Antes: $48.600.000 / 3.240.000 = 15{,}00$. La suscripción emite $1.500.000 / 15 = 100.000$ participaciones nuevas, así que el patrimonio pasa a 50.100.000 € y las participaciones a 3.340.000, cuyo cociente vuelve a ser 15,00. Las entradas y salidas de dinero no mueven el valor liquidativo: solo lo mueven los activos de la cartera.",
            },
            {
              q: "Con 10.000 € al 7 % bruto durante 30 años, ¿cuánto cuesta pasar de una comisión del 0,30 % a una del 1,80 %?",
              a: "24.215 €. El indexado termina en $10.000 \\times 1{,}067^{30} = 69.973$ € y el activo en $10.000 \\times 1{,}052^{30} = 45.759$ €. El fondo barato acaba con un 52,9 % más de capital. Visto sobre la referencia sin comisiones (76.123 €), el punto y medio de diferencia se lleva el 31,8 % del resultado.",
            },
            {
              q: "¿Por qué el conjunto de los gestores activos no puede batir al mercado?",
              a: "Porque entre indexados y activos poseen todo el mercado. Los indexados obtienen la rentabilidad del índice por construcción, así que los activos, como grupo, tienen que obtener también la del mercado antes de costes: es una identidad contable, no una hipótesis. Como sus costes son mayores, después de costes el activo medio queda por debajo del indexado medio. Algunos ganan, necesariamente a costa de otros activos.",
            },
            {
              q: "La rentabilidad media histórica de los fondos de una categoría parece buena. ¿Qué precaución hay que tomar?",
              a: "El sesgo de supervivencia. Esa media se calcula sobre los fondos que todavía existen; los que fueron mal se cerraron o se fusionaron y salieron de la serie. La rentabilidad publicada es por tanto mejor que la que habría obtenido alguien que eligiera al azar hace veinte años. A ello se suma que el partícipe medio obtiene menos que el fondo, porque entra tras las subidas y sale tras las caídas.",
            },
            {
              q: "Un fondo acumula sus dividendos sin repartirlos. ¿Aparece esa renta en las cuentas nacionales del hogar partícipe?",
              a: "Sí. El SEC la imputa como rentas de inversión atribuidas a los partícipes en fondos de inversión (D.443) y registra simultáneamente una reinversión por el mismo importe. La renta figura en el hogar aunque no la haya cobrado, porque el sistema la atribuye a quien soporta el riesgo económico. Es el mismo tratamiento que reciben los seguros y los fondos de pensiones.",
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
            { ref: "Bogle, El pequeño libro para invertir con sentido común", nota: "el alegato del fundador de Vanguard sobre el coste como determinante del resultado; repetitivo a propósito, porque el mensaje es uno solo y cuesta interiorizarlo." },
            { ref: "Sharpe, «The Arithmetic of Active Management»", nota: "dos páginas que demuestran que el activo medio debe perder contra el indexado medio, sin suponer eficiencia de los mercados; el argumento más sólido del tema." },
            { ref: "CNMV, guías del inversor sobre instituciones de inversión colectiva", nota: "el marco legal español, la separación entre gestora y depositaria, y qué información está obligada a publicar cada fondo." },
            { ref: "Informes SPIVA de comparación de fondos activos con sus índices", nota: "los datos periódicos sobre qué porcentaje de fondos bate a su referencia por horizonte y categoría, con corrección del sesgo de supervivencia." },
          ],
        },
      ],
    },
  ],
};
