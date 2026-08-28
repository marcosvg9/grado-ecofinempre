/* Ficha 12.05 — SIFMI y seguros: la producción que no se observa. */

export default {
  codigo: "12.05",
  titulo: "SIFMI y seguros: la producción que no se observa",
  nivel: 4,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "5 h",
  nucleo:
    "Nadie factura el servicio de mantener un depósito ni el de suscribir una póliza: se cobran dentro del tipo de interés y dentro de la prima. El sistema los estima por márgenes, y ese ajuste recorre después todas las cuentas sin alterar el ahorro de nadie.",
  requiere: "12.04 Rentas de la propiedad · 8.01 Sistema financiero",
  abre: "12.06 Distribución secundaria · 12.08 Consumo final · 8.02 Renta fija",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un banco presta un servicio real: transforma plazos, evalúa riesgos, gestiona pagos y custodia dinero. El problema para el estadístico es que **buena parte de ese servicio no se factura**. El cliente no recibe ninguna nota que diga «servicio de intermediación: 40 euros»; lo paga escondido dentro del tipo de interés, cobrando poco por su depósito y pagando mucho por su préstamo. Si el sistema de cuentas registrara solo las comisiones explícitas, **la producción bancaria quedaría groseramente subestimada** y el valor añadido de todos los sectores que usan servicios financieros, sobrevalorado.",
            "**La solución del SEC se llama SIFMI —servicios de intermediación financiera medidos indirectamente— y su lógica es sencilla.** Se postula un **tipo de referencia** al que prestamista y prestatario estarían dispuestos a cerrar un trato sin intermediario de por medio; en la práctica se usa el tipo interbancario. La diferencia entre ese tipo y lo que el banco **paga** por los depósitos es lo que cobra al depositante; la diferencia entre lo que el banco **cobra** por los préstamos y el tipo de referencia es lo que cobra al prestatario. **La suma de esas dos tarifas implícitas es el SIFMI**, y se registra como producción del banco y como consumo de sus clientes.",
            "**Hay que fijar dos precisiones porque acotan mucho el concepto.** Primera: **solo generan SIFMI los préstamos y los depósitos**, no los bonos, ni las letras, ni las acciones, ni los derivados. Segunda: **solo lo producen las entidades que hacen banca tradicional** —el subsector de otras instituciones financieras monetarias y el de otros prestamistas—, no las aseguradoras ni los fondos. Fuera de ese perímetro, lo que cobra una entidad financiera son comisiones explícitas, que se registran como cualquier otro servicio.",
            "**El destino del SIFMI depende de quién lo consume y para qué**, y esta es la parte que más confunde. Si lo consume una empresa, o un hogar **en su condición de empresario o de propietario de vivienda**, es **consumo intermedio**: reduce el valor añadido de esa unidad. Si lo consume un hogar como consumidor —sus depósitos y sus créditos al consumo— es **gasto en consumo final**. De ahí una consecuencia que sorprende siempre: **tener una cuenta corriente genera consumo final de los hogares en la contabilidad nacional**, aunque nadie tenga la sensación de estar comprando nada.",
            "**Y ahora el punto que hace del SIFMI un ajuste elegante en lugar de una distorsión.** Al reconocer que parte de lo que parecía interés es en realidad pago por un servicio, el sistema tiene que **corregir también los intereses** en la cuenta de rentas de la propiedad de la ficha 12.04: los D.41 que se registran no son los efectivamente pagados sino los que se habrían pagado al tipo de referencia. Producción arriba, intereses corregidos abajo. El resultado es que **el ajuste no altera ni el ahorro ni la capacidad de financiación de ningún sector**: lo que se añade como consumo se resta como interés. Cambia el reparto entre producción y renta, no el saldo final.",
            "**El seguro tiene el mismo problema y otra solución.** Una aseguradora tampoco factura su servicio: cobra una prima que incluye a la vez el precio del servicio y la parte destinada a pagar indemnizaciones. El SEC mide la producción como **las primas devengadas más las rentas que generan las reservas —las primas complementarias— menos las indemnizaciones ajustadas**. Las indemnizaciones **no son consumo intermedio de la aseguradora**: se detraen de la producción, porque económicamente son dinero que vuelve al colectivo asegurado. Y se permite **suavizar las indemnizaciones excepcionales** de un año repartiéndolas en los siguientes, para que una catástrofe no produzca una producción negativa que no significaría nada.",
            "**El reaseguro añade una vuelta más y conviene conocerla.** Una aseguradora se cubre a su vez con una reaseguradora, y el SEC lo trata de forma asimétrica: las **primas de reaseguro que paga la aseguradora son consumo intermedio suyo**, mientras que los cobros y pagos del reaseguro se registran como **transferencias corrientes** en la cuenta de la ficha 12.07. Y una nota sobre el futuro: la revisión del sistema de cuentas prevista para los próximos años rebautiza el SIFMI como **IFSOLD** y cambia el tratamiento de la producción del banco central, además de abordar por primera vez criptoactivos y datos como activos.",
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
            { nom: "Tipo de referencia", sub: "El que acordarían sin intermediario.", cols: ["r* — en la práctica, el interbancario"] },
            { nom: "SIFMI de préstamos", sub: "Lo que paga el prestatario.", cols: ["$(r_{\\text{préstamo}} - r^*) \\times$ saldo de préstamos"] },
            { nom: "SIFMI de depósitos", sub: "Lo que paga el depositante.", cols: ["$(r^* - r_{\\text{depósito}}) \\times$ saldo de depósitos"] },
            { nom: "SIFMI total", sub: "La suma de las dos tarifas implícitas.", cols: ["SIFMI = SIFMI préstamos + SIFMI depósitos"] },
            { nom: "Perímetro", sub: "Ni bonos, ni acciones, ni derivados.", cols: ["solo préstamos y depósitos, solo banca"] },
            { nom: "Destino", sub: "Depende de en qué condición actúa el hogar.", cols: ["P.2 si es actividad productiva · P.3 si es consumo"] },
            { nom: "Ajuste en los intereses", sub: "Por eso no altera el ahorro.", cols: ["D.41 registrado = D.41 efectivo ∓ SIFMI"] },
            { nom: "Neutralidad del ajuste", sub: "Cambia el reparto, no el saldo.", cols: ["no afecta a B.8 ni a B.9"] },
            { nom: "Producción de seguro no vida", sub: "Las indemnizaciones se detraen, no son CI.", cols: ["primas + primas complementarias − indemnizaciones ajustadas"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: calcular el SIFMI de una economía",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía con tres sectores. Los saldos medios del periodo y los intereses observados son los siguientes, en millones. El sector S.12 mantiene además posiciones interbancarias consigo mismo por **1.000**, sobre las que se pagan **30** de intereses: de ahí sale el **tipo de referencia**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Posición", "Saldo medio", "Intereses", "Tipo", "Naturaleza"],
          filas: [
            ["Depósitos de S.11 en S.12", "500", "10", "2,0 %", "Depósito"],
            ["Préstamos de S.12 a S.11", "2.500", "150", "6,0 %", "Préstamo"],
            ["Interbancario dentro de S.12", "1.000", "30", "3,0 %", "Tipo de referencia"],
            ["Hipotecas de S.12 a hogares", "5.200", "208", "4,0 %", "Préstamo"],
            ["Crédito al consumo a hogares", "600", "30", "5,0 %", "Préstamo"],
            { celdas: ["Depósitos de hogares en S.12", "3.000", "60", "2,0 %", "Depósito"], clase: "total" },
          ],
          nota: "El **tipo de referencia es el 3 %**, el que se cobran los bancos entre sí, donde por definición no hay servicio de intermediación que prestar a un tercero. Todo lo que se aparte de ese 3 % —por arriba en los préstamos, por abajo en los depósitos— es precio del servicio. Obsérvese que las hipotecas se cobran al 4 % y el crédito al consumo al 5 %: **el margen es mayor donde el riesgo y el coste de gestión son mayores**, que es exactamente lo que la teoría espera.",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Posición", y: "SIFMI" },
          dominio: { x: [0, 5], y: [0, 88] },
          marcasX: [],
          marcasY: [0, 20, 40, 60, 80],
          areas: [
            { puntos: [[0.15, 0], [0.15, 5], [0.85, 5], [0.85, 0]], color: "n1" },
            { puntos: [[1.15, 0], [1.15, 75], [1.85, 75], [1.85, 0]], color: "n2" },
            { puntos: [[2.15, 0], [2.15, 52], [2.85, 52], [2.85, 0]], color: "n3" },
            { puntos: [[3.15, 0], [3.15, 12], [3.85, 12], [3.85, 0]], color: "alerta" },
            { puntos: [[4.15, 0], [4.15, 30], [4.85, 30], [4.85, 0]], color: "alerta" },
          ],
          notas: [
            { x: 0.5, y: 10, texto: "5", ancla: "middle" },
            { x: 1.5, y: 80, texto: "75", ancla: "middle" },
            { x: 2.5, y: 57, texto: "52", ancla: "middle" },
            { x: 3.5, y: 17, texto: "12", ancla: "middle" },
            { x: 4.5, y: 35, texto: "30", ancla: "middle" },
            { x: 0.5, y: -8, texto: "Depós. S.11", ancla: "middle" },
            { x: 1.5, y: -8, texto: "Prést. S.11", ancla: "middle" },
            { x: 2.5, y: -8, texto: "Hipotecas", ancla: "middle" },
            { x: 3.5, y: -8, texto: "Consumo", ancla: "middle" },
            { x: 4.5, y: -8, texto: "Depós. hog.", ancla: "middle" },
          ],
          nota: "El **SIFMI total de la economía es 174**: cinco más setenta y cinco de las sociedades, y cincuenta y dos más doce más treinta de los hogares. Cada barra es un margen multiplicado por un saldo. Las dos naranjas y la azul oscura son consumo de los hogares, **94 en total**, y ahí está el reparto que importa: los **52 de las hipotecas son consumo intermedio**, porque el hogar actúa como productor del servicio de alojamiento que se imputa a sí mismo, mientras que los **12 del crédito al consumo y los 30 de los depósitos son gasto en consumo final**. Es decir, **tener una cuenta corriente aparece en la contabilidad nacional como comprar un servicio**, y de hecho es el mayor de los tres.",
        },
        {
          tipo: "tabla",
          cabecera: ["Sector y destino", "SIFMI", "Dónde se registra"],
          filas: [
            ["Sociedades — depósitos y préstamos", "80", "Consumo intermedio (P.2)"],
            ["Hogares — hipotecas", "52", "Consumo intermedio (P.2)"],
            ["Hogares — crédito al consumo", "12", "Gasto en consumo final (P.3)"],
            ["Hogares — depósitos", "30", "Gasto en consumo final (P.3)"],
            { celdas: ["SIFMI total de la economía", "174", "Producción de S.12 (P.1)"], clase: "total" },
          ],
          nota: "Y ahora la comprobación que cierra el argumento. Esos 174 se **suman** a la producción del sector financiero y se **restan** de los intereses registrados en la cuenta de rentas de la propiedad: los hogares figurarán pagando menos intereses hipotecarios de los que realmente pagan, y cobrando más por sus depósitos de lo que realmente cobran. Producción arriba, renta abajo, **y el ahorro de cada sector queda exactamente igual que antes del ajuste**. Ese es el sello de un buen convenio contable: reasigna entre categorías sin inventar ni destruir capacidad de gasto de nadie.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué pasa con el SIFMI cuando suben los tipos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El episodio de subidas de tipos que siguió a 2022 puso a prueba esta construcción y produjo un fenómeno que descolocó a más de un analista: **el valor añadido del sector financiero se disparó en las cuentas nacionales**. Entender por qué es la mejor forma de comprobar que se ha entendido el mecanismo.",
            "**Lo primero que hay que ver es que el SIFMI depende de márgenes, no de niveles.** Si todos los tipos suben en la misma medida, los márgenes no cambian y el SIFMI tampoco. Lo que ocurrió fue distinto: **los tipos de los préstamos se ajustaron deprisa y los de los depósitos, muy despacio**. El margen se ensanchó por los dos lados a la vez —más por encima de la referencia en los préstamos, más por debajo en los depósitos— y el SIFMI creció con fuerza.",
            "**La consecuencia contable fue una producción financiera al alza.** Como el SIFMI es producción del sector financiero, su valor añadido subió. Y como es consumo intermedio de los demás sectores, el valor añadido de esos otros sectores bajó en la misma medida. **La economía en conjunto no produjo más por este concepto**: se reasignó valor añadido de unos sectores a otro. Quien leyó el dato como una explosión de actividad financiera estaba leyendo, en buena parte, un cambio de márgenes.",
            "**Para los hogares el efecto fue doble y de signo contrario.** Por el lado de los depósitos, el margen se ensanchó porque los bancos tardaron en remunerar el ahorro, y eso **aumentó su consumo final medido**. Por el lado de las hipotecas, el margen sobre la referencia se comportó de otra forma según cómo se moviera el tipo hipotecario frente al interbancario. El resultado es que una parte del consumo de los hogares registrado en aquellos trimestres era **consumo de servicios financieros implícitos**, no bienes que nadie llevara a casa.",
            "**Y aquí conviene volver a la propiedad que salva el conjunto.** Pese a todo ese movimiento, **la capacidad de financiación de los hogares no se vio afectada por el ajuste**, porque el mayor consumo de SIFMI se compensó exactamente con unos intereses registrados distintos de los efectivos. Lo que sí les afectó —y mucho— fue la subida real de sus cuotas hipotecarias, pero eso es un fenómeno económico, no un artefacto de la medición. **Distinguir una cosa de otra al leer las cuentas de aquellos trimestres es exactamente el tipo de lectura que este bloque enseña.**",
            "**La moraleja general vale para todo el sistema.** Cuando un agregado se mueve de forma llamativa, la primera pregunta no es qué ha pasado en la economía sino **qué convención de medición se ha activado**. El SIFMI es un convenio explícito, documentado y con una lógica defendible, y precisamente por eso produce movimientos que no significan lo que parecen a primera vista. Quien no sabe que existe interpreta mal el dato; quien sabe que existe lee la economía por debajo del convenio.",
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
            { t: "Confundir el SIFMI con los intereses", d: "El SIFMI es un margen —la diferencia entre el tipo aplicado y un tipo de referencia— y se registra como producción de servicios. Los intereses son rentas de la propiedad. Al reconocer el SIFMI, el sistema corrige los intereses registrados, que dejan de coincidir con los del extracto bancario." },
            { t: "Creer que el ajuste por SIFMI cambia el ahorro de los sectores", d: "No lo cambia. Lo que se añade como consumo se resta como interés, de modo que ni el ahorro ni la capacidad de financiación de ningún sector se ven afectados. El ajuste reasigna entre producción y renta sin crear ni destruir capacidad de gasto." },
            { t: "Suponer que todos los activos financieros generan SIFMI", d: "Solo lo generan los préstamos y los depósitos. Bonos, letras, acciones y derivados quedan fuera, y lo que las entidades cobran por operar con ellos son comisiones explícitas, que se registran como cualquier otro servicio." },
            { t: "Asignar todo el SIFMI de los hogares al consumo final", d: "Depende de en qué condición actúa el hogar. El SIFMI de las hipotecas es consumo intermedio, porque el hogar es productor del servicio de alojamiento que se imputa a sí mismo; el de los créditos al consumo y el de los depósitos es gasto en consumo final. En el ejemplo, 52 frente a 42." },
            { t: "Leer un aumento del valor añadido financiero como más actividad", d: "Si los tipos de los préstamos suben deprisa y los de los depósitos despacio, el margen se ensancha y el SIFMI crece sin que se preste un solo servicio más. El valor añadido del sector financiero sube y el de los demás baja en la misma medida: hay reasignación, no creación." },
            { t: "Tratar las indemnizaciones de seguro como consumo intermedio", d: "Se detraen de la producción, porque económicamente son dinero que vuelve al colectivo asegurado y no un insumo que la compañía compre. Además el SEC permite suavizar las indemnizaciones excepcionales entre varios ejercicios, para que una catástrofe no genere una producción negativa sin sentido económico." },
            { t: "Olvidar la asimetría del reaseguro", d: "Las primas de reaseguro que paga una aseguradora son consumo intermedio suyo, mientras que los cobros y pagos del reaseguro se registran como transferencias corrientes. Dos tratamientos distintos para las dos caras de la misma operación, y una fuente habitual de descuadres al analizar el sector." },
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
            "El SIFMI es probablemente la imputación más consecuente del sistema, y su rastro aparece en cinco cuentas distintas.",
          ],
          lista: [
            "En la **cuenta de producción** de la ficha 12.02 aparece como producción del sector financiero y como consumo intermedio de todos los demás, reduciendo su valor añadido. Es la razón de que el valor añadido de una empresa endeudada sea menor de lo que sus propias cuentas sugieren.",
            "En la **cuenta de rentas de la propiedad** de la ficha 12.04 obliga a registrar unos intereses distintos de los efectivos. Cualquier comparación entre los intereses de las cuentas nacionales y los de las estadísticas bancarias tiene que tener esto en cuenta, o no cuadrará nunca.",
            "En el **gasto en consumo final de los hogares** de la ficha 12.08 introduce una partida que ningún hogar reconocería como consumo. Es una de las razones por las que el consumo de las cuentas nacionales y el de las encuestas de presupuestos familiares no coinciden.",
            "En el **comercio exterior** de la ficha 12.10 hay importaciones y exportaciones de SIFMI, porque los bancos residentes prestan a no residentes y los residentes se financian fuera. Es una partida de servicios que no figura en ninguna aduana.",
            "Y su **fuente** es peculiar: en España lo calcula el banco central y se facilita al instituto de estadística, sin publicarse de forma separada; se puede deducir de las partidas promemoria de las cuentas de los sectores. Es una magnitud grande, estimada fuera del instituto y poco visible.",
          ],
          cierre:
            "Lo que este caso enseña sobre el sistema entero es que **hay producción sin factura**, y que reconocerla exige convenciones explícitas que después hay que arrastrar con coherencia por toda la secuencia. El SIFMI está bien diseñado precisamente porque su ajuste se compensa y no altera los saldos finales; no todas las imputaciones del sistema tienen esa propiedad.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué hace falta el SIFMI?", a: "Porque buena parte del servicio bancario no se factura: se cobra dentro del tipo de interés, pagando poco por los depósitos y cobrando mucho por los préstamos. Si solo se registraran las comisiones explícitas, la producción bancaria quedaría groseramente subestimada y el valor añadido de todos los sectores que usan servicios financieros, sobrevalorado." },
            { q: "Con un tipo de referencia del 3 %, hipotecas al 4 % sobre 5.200 y depósitos al 2 % sobre 3.000, ¿cuánto SIFMI generan los hogares por esas dos posiciones?", a: "Ochenta y dos. Las hipotecas dan (4 % − 3 %) × 5.200 = 52 y los depósitos (3 % − 2 %) × 3.000 = 30. Y se registran en sitios distintos: los 52 como consumo intermedio, porque el hogar produce el servicio de alojamiento que se imputa, y los 30 como gasto en consumo final." },
            { q: "¿Altera el ajuste por SIFMI el ahorro de los hogares?", a: "No. Lo que se añade como consumo de servicios financieros se resta de los intereses registrados en la cuenta de rentas de la propiedad, de modo que ni el ahorro ni la capacidad de financiación cambian. El ajuste reasigna entre producción y renta sin crear ni destruir capacidad de gasto." },
            { q: "Suben los tipos de los préstamos deprisa y los de los depósitos despacio. ¿Qué le pasa al valor añadido financiero?", a: "Sube, porque el margen se ensancha por los dos lados y el SIFMI crece sin que se preste un servicio más. Y el valor añadido de los demás sectores baja en la misma medida, porque para ellos es consumo intermedio. Hay reasignación entre sectores, no creación de actividad en el conjunto de la economía." },
            { q: "¿Cómo se mide la producción de una aseguradora?", a: "Como las primas devengadas más las rentas que generan las reservas —las primas complementarias— menos las indemnizaciones ajustadas. Las indemnizaciones no son consumo intermedio: se detraen de la producción, porque son dinero que vuelve al colectivo asegurado. Y se permite suavizar las excepcionales entre ejercicios para que una catástrofe no dé producción negativa." },
            { q: "¿Generan SIFMI las acciones y los bonos?", a: "No. Solo los préstamos y los depósitos, y solo en las entidades que hacen banca tradicional. Lo que se cobra por operar con valores son comisiones explícitas, que se registran como cualquier otro servicio porque sí están facturadas y no hay nada que estimar indirectamente." },
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
              q: "¿Qué diferencia hay entre el SIFMI y los intereses?",
              opciones: [
                "El SIFMI es la parte de los intereses que corresponde a la inflación",
                "El SIFMI son los intereses de los préstamos y los intereses propiamente dichos, los de los depósitos",
                "Ninguna: el SIFMI es el nombre técnico de los intereses bancarios",
                "El SIFMI es un margen —la diferencia entre el tipo aplicado y uno de referencia— y se registra como producción de servicios; los intereses son rentas de la propiedad",
              ],
              correcta: 3,
              porque: [
                "La inflación no interviene en el cálculo del SIFMI.",
                "Ambos lados generan SIFMI: el préstamo por lo que cobra de más y el depósito por lo que paga de menos respecto al tipo de referencia.",
                "Son dos cosas de naturaleza distinta que viajan juntas dentro del mismo tipo de interés, y el sistema las separa.",
                "Retribuyen cosas distintas: uno paga un servicio que el banco presta, el otro paga el uso del dinero. Por eso van a cuentas distintas.",
              ],
            },
            {
              q: "Un hogar paga una hipoteca sobre su vivienda habitual. ¿Cómo se registra el SIFMI asociado?",
              opciones: [
                "La mitad como consumo final y la mitad como consumo intermedio",
                "Como consumo final, porque el hogar es un consumidor",
                "Como consumo intermedio: el hogar es productor del servicio de alojamiento que se imputa a sí mismo",
                "No se registra: las hipotecas quedan fuera del perímetro del SIFMI",
              ],
              correcta: 2,
              porque: [
                "No hay reparto a partes iguales: la asignación depende del uso.",
                "Depende de en qué condición actúa el hogar, y aquí no actúa solo como consumidor.",
                "Es coherente con los alquileres imputados: si el hogar produce un servicio de alojamiento para sí mismo, el coste financiero de esa producción es un insumo.",
                "Las hipotecas son préstamos y están de lleno dentro del perímetro.",
              ],
            },
            {
              q: "¿Son las indemnizaciones que paga una aseguradora un consumo intermedio suyo?",
              opciones: [
                "Sí: son un coste necesario para prestar el servicio",
                "No: son transferencias de capital a los asegurados",
                "Sí, pero solo la parte que excede a las provisiones dotadas",
                "No: se detraen de la producción, porque económicamente son dinero que vuelve al colectivo asegurado",
              ],
              correcta: 3,
              porque: [
                "Es un desembolso necesario y no un insumo adquirido a otro productor, que es lo que define el consumo intermedio.",
                "Son transferencias corrientes, no de capital, y en todo caso lo relevante aquí es que minoran la producción.",
                "Las provisiones afectan al momento de registro, no a la naturaleza de la operación.",
                "La compañía no compra nada con ellas: reparte entre los siniestrados lo que ha recaudado del conjunto. Su servicio es organizar ese reparto, no el reparto mismo.",
              ],
            },
            {
              q: "Una aseguradora paga primas de reaseguro y cobra del reasegurador cuando hay siniestros. ¿Cómo se registra?",
              opciones: [
                "De forma asimétrica: las primas de reaseguro son consumo intermedio suyo, y los cobros y pagos del reaseguro, transferencias corrientes",
                "Todo como transferencias corrientes, primas incluidas",
                "Todo como consumo intermedio, cobros incluidos",
                "Se netean unos contra otros y solo se registra el saldo",
              ],
              correcta: 0,
              porque: [
                "Es una asimetría fácil de pasar por alto y que altera el valor añadido del sector si se registra mal.",
                "La prima de reaseguro sí compra un servicio a otro productor, así que es un insumo.",
                "Los cobros por siniestros no son la compra de ningún servicio.",
                "El SEC registra los flujos brutos: netear ocultaría el volumen real de la operación.",
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
            { ref: "SEC 2010, capítulo 14 — Servicios de intermediación financiera medidos indirectamente", nota: "el tratamiento normativo completo, con la definición del tipo de referencia y las reglas de asignación." },
            { ref: "SEC 2010, capítulo 16 — Seguros", nota: "la medición de la producción de seguro, el tratamiento de las indemnizaciones y el reaseguro." },
            { ref: "Naciones Unidas y BCE, Financial Production, Flows and Stocks in the System of National Accounts", nota: "el manual conjunto sobre producción financiera; el mejor desarrollo del problema conceptual." },
            { ref: "Banco de España, estadísticas de tipos de interés de préstamos y depósitos", nota: "las series con las que se calculan los márgenes en España; útiles para reproducir el ejercicio con datos reales." },
            { ref: "INE, Curso de Cuentas Nacionales — sesión sobre el sector S.12", nota: "el ejercicio de SIFMI que reproduce esta ficha, con la asignación por destino detallada." },
          ],
        },
      ],
    },
  ],
};
