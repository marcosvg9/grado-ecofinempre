/* Ficha 6.02 — Sistemas de costes por órdenes y por procesos. */

export default {
  codigo: "6.02",
  titulo: "Sistemas de costes por órdenes y por procesos",
  nivel: 2,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "4 h",
  nucleo:
    "La estructura del sistema de costes debe copiar la estructura física de la producción. Si el producto es identificable y singular, se acumula coste por orden; si el flujo es continuo y homogéneo, se calcula un coste medio por unidad equivalente. Elegir mal el sistema produce cifras que no significan nada.",
  requiere: "6.01 Coste completo y variable",
  abre: "6.03 Costes ABC · 6.05 Control por desviaciones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un astillero y una cementera tienen el mismo problema contable —repartir costes entre unidades de producto— y necesitan sistemas opuestos. En el astillero cada barco es distinto, tarda meses y consume recursos identificables: tiene sentido abrir una **hoja de coste por orden** y acumular en ella todo lo que se le imputa. En la cementera el producto sale por una cinta, todas las toneladas son iguales y preguntar cuánto costó una tonelada concreta no significa nada: lo que procede es dividir el coste total del período entre las toneladas producidas.",
            "El **coste por órdenes de fabricación** funciona por acumulación. Cada pedido, obra o lote recibe un número, y los materiales, la mano de obra y los indirectos aplicados se van cargando a él. El coste se conoce al terminar la orden. Es el sistema natural de la construcción, los astilleros, la imprenta, la ingeniería a medida y, con matices, los servicios profesionales facturados por proyecto.",
            "El **coste por procesos** funciona por promedios. Se calcula el coste de cada fase productiva durante un período y se divide entre la producción de esa fase. El producto va pasando de un proceso al siguiente arrastrando el coste acumulado. Es el sistema del refino, la química, la alimentación en línea, el papel y el cemento.",
            "La complicación característica del coste por procesos es la **producción en curso**: al cierre del período siempre hay unidades a medio terminar. Dividir el coste total entre las unidades acabadas sobrecarga a estas últimas; ignorar las incompletas deja coste sin asignar. La solución son las **unidades equivalentes**: dos mil unidades al cincuenta por ciento de avance equivalen a mil unidades terminadas a efectos de reparto de coste.",
            "Y hay un matiz que se olvida a menudo: **los materiales y los costes de conversión rara vez avanzan al mismo ritmo**. En muchos procesos los materiales se incorporan íntegramente al inicio, de modo que una unidad recién entrada ya tiene el cien por cien de material y el cero por ciento de conversión. Por eso el cálculo de unidades equivalentes se hace por separado para cada categoría de coste.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Rasgo", "Por órdenes", "Por procesos"],
          filas: [
            { nom: "Objeto de coste", sub: "A qué se acumula", cols: ["El pedido o lote", "El proceso o fase"] },
            { nom: "Homogeneidad del producto", sub: "Condición de aplicación", cols: ["Baja: cada orden difiere", "Alta: unidades intercambiables"] },
            { nom: "Momento de cálculo", sub: "Cuándo se conoce el coste", cols: ["Al terminar la orden", "Al cierre de cada período"] },
            { nom: "Problema característico", sub: "Dónde está la dificultad técnica", cols: ["Imputar los indirectos", "Valorar la producción en curso"] },
            { nom: "Sectores típicos", sub: "Dónde se encuentra", cols: ["Construcción, astilleros, consultoría", "Química, cemento, refino, alimentación"] },
          ],
          nota: "Muchas empresas reales usan **sistemas híbridos**: procesos homogéneos para las fases comunes y acumulación por lote para las fases de personalización. Es lo habitual en automoción y en electrodomésticos.",
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
            { nom: "Coste de una orden", sub: "Acumulación directa más indirectos aplicados.", cols: ["C_orden = MP + MOD + (tasa aplicación × base de la orden)"] },
            { nom: "Tasa de aplicación de indirectos", sub: "Se fija a priori con datos presupuestados.", cols: ["t = Indirectos presupuestados / Base presupuestada"] },
            { nom: "Sobre o infraaplicación", sub: "Se regulariza al cierre.", cols: ["Desviación = Indirectos aplicados − Indirectos reales"] },
            { nom: "Unidades equivalentes", sub: "Se calculan por separado para materiales y conversión.", cols: ["UE = Terminadas + (En curso × % de avance)"] },
            { nom: "Coste unitario por proceso", sub: "El promedio del período.", cols: ["cu = Coste del período / Unidades equivalentes"] },
            { nom: "Reparto del coste", sub: "La comprobación obligatoria: debe agotar el coste.", cols: ["Coste total = Terminadas × cu + En curso × cu × % avance"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: unidades equivalentes",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un proceso arranca el período sin existencias iniciales. Se terminan **8.000 unidades** y quedan **2.000 en curso**, con los materiales incorporados al cien por cien y un avance del **50 %** en los costes de conversión. Los costes del período son 50.000 € de materiales y 45.000 € de conversión.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Materiales", "Conversión"],
          filas: [
            ["Unidades terminadas", "8.000", "8.000"],
            ["Producción en curso equivalente", "2.000 × 100 % = 2.000", "2.000 × 50 % = 1.000"],
            { celdas: ["Unidades equivalentes", "10.000", "9.000"], clase: "total" },
            ["Coste del período", "50.000 €", "45.000 €"],
            { celdas: ["Coste unitario equivalente", "5,00 €", "5,00 €"], clase: "total" },
          ],
          nota: "Que ambos costes unitarios coincidan en 5 € es una coincidencia de este ejemplo, elegida para que los números se sigan sin esfuerzo. Lo habitual es que difieran.",
        },
        {
          tipo: "tabla",
          cabecera: ["Reparto del coste", "Cálculo", "Importe"],
          filas: [
            ["Unidades terminadas", "8.000 × (5 + 5)", "80.000 €"],
            ["En curso: materiales", "2.000 × 5", "10.000 €"],
            ["En curso: conversión", "1.000 × 5", "5.000 €"],
            { celdas: ["Total repartido", "—", "95.000 €"], clase: "total" },
            { celdas: ["Coste incurrido en el período", "50.000 + 45.000", "95.000 €"], clase: "total" },
          ],
          nota: "El reparto **agota exactamente** el coste incurrido. Esa comprobación es obligatoria: si sobra o falta, hay un error en las unidades equivalentes o en el porcentaje de avance.",
        },
        {
          tipo: "parrafos",
          items: [
            "Mira lo que habría pasado con el atajo de dividir 95.000 € entre las 8.000 unidades terminadas: 11,88 € por unidad en lugar de 10 €, un **19 % de sobrecoste** imputado a las unidades acabadas, y una producción en curso valorada a cero en el balance. Si además esa cifra se usa para fijar precios, el error se traslada a la política comercial.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el taller que creía tener márgenes homogéneos",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un taller de carpintería a medida factura unos dos millones de euros al año en encargos muy distintos: desde cocinas estándar hasta restauraciones singulares. Su contabilidad de costes calcula un coste medio por hora de taller y lo aplica a todos los trabajos. El margen global es del 12 % y la dirección lo considera aceptable y homogéneo.",
            "Al implantar un sistema por órdenes descubren que las cocinas estándar dejan un 28 % y las restauraciones singulares pierden dinero: consumen horas de los operarios más caros, generan mucho retrabajo y absorben desproporcionadamente la atención del jefe de taller. El 12 % medio era la mezcla de dos negocios distintos, uno rentable y otro no.",
            "La lección no es que hubiera que dejar las restauraciones —quizá aportan prestigio, o clientes que después encargan cocinas—, sino que **la decisión no se estaba tomando**, porque el sistema de costes no permitía verla. Un coste medio en una producción heterogénea no es un dato aproximado: es un dato falso, porque promedia cosas que no son promediables.",
            "**El criterio general:** cuanto mayor sea la variabilidad entre unidades de producto, más se pierde al promediar. El coste por procesos es legítimo precisamente porque en su terreno la variabilidad es nula y el promedio no oculta nada.",
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
            { t: "Aplicar coste por procesos a producción heterogénea", d: "Un coste medio entre unidades que consumen recursos muy distintos no aproxima nada: subvenciona sistemáticamente a las caras a costa de las baratas. La homogeneidad no es un detalle del método, es su condición de aplicación." },
            { t: "Calcular unidades equivalentes con un único porcentaje de avance", d: "Materiales y conversión avanzan a ritmos distintos en casi todos los procesos. Usar un solo porcentaje para ambos produce un reparto que no agota el coste, y esa descuadre es la señal de que algo está mal planteado." },
            { t: "Ignorar la producción en curso", d: "Repartir todo el coste entre las unidades terminadas las encarece artificialmente y deja el balance sin valorar un activo que existe. En procesos largos la producción en curso puede ser una partida muy significativa." },
            { t: "No regularizar la sobre o infraaplicación de indirectos", d: "La tasa de aplicación se fija con datos presupuestados y casi nunca coincide con la realidad. La diferencia debe regularizarse al cierre, imputándola al coste de las ventas o repartiéndola si es significativa. Dejarla acumulada distorsiona el margen." },
            { t: "Confundir orden de fabricación con pedido de cliente", d: "Una orden puede cubrir varios pedidos, y un pedido grande puede dividirse en varias órdenes. El objeto de coste lo define la homogeneidad del proceso productivo, no la organización comercial." },
            { t: "Elegir el sistema por tamaño de empresa", d: "No es una cuestión de sofisticación ni de recursos. Una cementera pequeña necesita coste por procesos y un astillero grande necesita coste por órdenes. Lo determina la naturaleza física de la producción." },
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
            "El concepto de producción en curso también existe en el SEC 2010, y con un tratamiento que resuelve un problema real de medición.",
          ],
          lista: [
            "Los **trabajos en curso** forman parte de las existencias y, por tanto, de la variación de existencias (P.52). Lo empezado y no terminado es producción del período.",
            "El caso más visible es la **construcción de obras de larga duración** y la construcción naval: sin este criterio, un barco que tarda tres años en construirse no generaría producción hasta su entrega, y el PIB de los tres años estaría mal repartido.",
            "En la producción de servicios de larga duración el SEC aplica un criterio de **grado de avance** conceptualmente idéntico al de las unidades equivalentes: se reconoce la parte proporcional ejecutada.",
            "Los **cultivos en crecimiento y el ganado en engorde** reciben el mismo tratamiento: son producción en curso, y por eso la producción agraria de un trimestre no coincide con lo cosechado en él.",
          ],
          cierre:
            "La coincidencia conceptual es notable: en ambos sistemas el problema es el mismo —imputar coste o producción a un período cuando el objeto todavía no está terminado— y la solución es la misma, medir el avance.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "6.000 unidades terminadas y 4.000 en curso al 25 % de conversión, con materiales al 100 %. ¿Unidades equivalentes de cada categoría?", a: "Materiales: 6.000 + 4.000 = 10.000. Conversión: 6.000 + 1.000 = 7.000. Se calculan por separado porque los dos costes no avanzan al mismo ritmo." },
            { q: "¿Qué sistema usarías en una consultora que factura por proyecto?", a: "Por órdenes. Cada proyecto es identificable, consume recursos distintos y su coste se conoce al terminarlo. Promediar el coste entre proyectos de naturaleza diversa ocultaría qué encargos son rentables." },
            { q: "Los indirectos aplicados fueron 180.000 € y los reales 195.000 €. ¿Qué ha ocurrido y qué se hace?", a: "Infraaplicación de 15.000 €: la tasa presupuestada se quedó corta. Hay que regularizar al cierre, imputando la diferencia al coste de las ventas o repartiéndola entre existencias y ventas si el importe es significativo." },
            { q: "¿Por qué el reparto del coste debe agotar exactamente el coste incurrido?", a: "Porque el sistema solo reparte, no crea ni destruye coste. Si sobra o falta, hay un error en las unidades equivalentes, en el porcentaje de avance o en la imputación. Es la comprobación equivalente al cuadre del asiento." },
            { q: "¿Cómo trata el SEC 2010 un barco que lleva dos años en construcción?", a: "Como trabajo en curso: la parte ejecutada cada año es producción de ese año y entra en la variación de existencias. Si se esperara a la entrega, el PIB de los años de construcción estaría infravalorado y el de la entrega, inflado." },
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
            { ref: "Horngren, Contabilidad de costos", nota: "los capítulos de job costing y process costing, con el reparto de unidades equivalentes por los métodos de media ponderada y FIFO." },
            { ref: "Blanco Ibarra, Contabilidad de costes y analítica de gestión", nota: "terminología y casos en el contexto español." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 3", nota: "producción, trabajos en curso y momento de registro." },
          ],
        },
      ],
    },
  ],
};
