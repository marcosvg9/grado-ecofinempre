/* Ficha 10.03 — Sistema fiscal español: figuras impositivas y suficiencia. */

export default {
  codigo: "10.03",
  titulo: "Sistema fiscal español: figuras impositivas y suficiencia",
  nivel: 3,
  bloque: "Economía española y contabilidad nacional",
  tiempo: "4 h",
  nucleo:
    "Quién ingresa un impuesto en Hacienda y quién soporta su coste son cosas distintas, y la ley solo determina lo primero. La incidencia efectiva la deciden las elasticidades, y de ahí que la discusión sobre a quién grava cada figura casi nunca coincida con lo que dice el boletín oficial.",
  requiere: "1.03 Intervención en los mercados · 1.04 Eficiencia y excedente · 4.02 Estadística descriptiva",
  abre: "10.04 Gasto público y pensiones · 10.05 Imposición óptima · 10.02 Mercado de trabajo español",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El sistema fiscal español descansa sobre cuatro pilares que aportan la inmensa mayoría de la recaudación: las **cotizaciones sociales**, el **IRPF**, el **IVA** y el **impuesto sobre sociedades**, por ese orden aproximado de importancia. Los demás tributos —impuestos especiales, patrimonio, sucesiones, transmisiones, figuras autonómicas y locales— son relevantes por sus efectos y por el conflicto político que generan, pero **su peso recaudatorio conjunto es modesto**. Esa asimetría entre atención pública y capacidad recaudatoria es el primer dato que conviene interiorizar: se discute intensamente sobre figuras que aportan poco y poco sobre las que sostienen el Estado.",
            "**El concepto central de la ficha es la incidencia**, y viene directamente de la ficha 1.03. La ley designa quién debe ingresar el dinero —la **incidencia legal**— pero el reparto real de la carga depende de cómo reaccionen los precios, es decir, de las **elasticidades relativas** de oferta y demanda. La regla es que **soporta el impuesto quien menos puede escapar**. Un impuesto sobre un bien de demanda muy rígida lo paga el consumidor aunque lo ingrese el vendedor; un impuesto sobre un factor con oferta muy rígida lo paga ese factor aunque lo ingrese otro. Y esto no es un matiz teórico: es lo que decide quién pierde renta.",
            "**El caso más importante es el de las cotizaciones sociales**, porque es donde el malentendido tiene más consecuencias. Se dividen en una parte «a cargo del trabajador» y otra «a cargo de la empresa», y esa nomenclatura sugiere un reparto que la economía no respeta. Como la oferta de trabajo es bastante inelástica y la demanda bastante más elástica, **la evidencia empírica apunta a que la mayor parte de ambas la soporta el trabajador vía menores salarios brutos**. Es decir: la separación contable es real y el reparto económico es otro. De ahí que la magnitud relevante no sea el salario bruto sino la **cuña fiscal**, la distancia entre lo que cuesta un trabajador a la empresa y lo que llega a su bolsillo.",
            "**El IRPF es la figura más progresiva y también la más compleja.** Su progresividad no viene solo de la escala de tipos, sino de los **mínimos personales y familiares**, que dejan exenta una parte de la base. Conviene distinguir tres tipos que suelen confundirse: el **marginal**, que se aplica al último euro y determina los incentivos; el **medio efectivo**, que es lo que se paga sobre el total y determina la carga; y el **nominal máximo**, que es el que aparece en los titulares y casi nadie paga. Además, el IRPF español separa la **base general** —trabajo y actividades económicas, con escala progresiva— de la **base del ahorro** —rendimientos del capital, con una escala más baja—, una dualidad que se justifica por la movilidad del capital y que tiene consecuencias distributivas evidentes.",
            "**El IVA es la figura más discutida en términos distributivos y la más malinterpretada.** Sobre la renta anual es **regresivo**, porque los hogares de renta baja consumen una proporción mayor de lo que ingresan. Sobre el **consumo** es estrictamente proporcional dentro de cada tipo. Y sobre la **renta a lo largo de toda la vida** es aproximadamente proporcional, ya que todo lo ahorrado acaba gastándose o legándose. Las tres afirmaciones son correctas y se refieren a bases distintas, exactamente como los tres salarios de la ficha 4.02. La consecuencia práctica más útil es que **los tipos reducidos son un instrumento redistributivo malísimo**: benefician en términos absolutos más a quien más gasta, y hay formas mucho más precisas de ayudar a quien lo necesita.",
            "**Del impuesto sobre sociedades hay que retener que una sociedad no soporta nada**, porque no es una persona: la carga acaba recayendo sobre accionistas, trabajadores o clientes en proporciones que dependen de la movilidad del capital y de la competencia del sector. En una economía abierta con capital muy móvil, una parte apreciable se traslada a los salarios. Y la brecha entre el tipo nominal y el **tipo efectivo** —resultado de deducciones, bases negativas de ejercicios anteriores y del régimen de consolidación de grupos— es tan grande que **comparar tipos nominales entre países no informa de casi nada**.",
            "**La suficiencia es el problema de fondo del sistema español**, y se enuncia con dos hechos. La presión fiscal, medida como ingresos sobre PIB, se sitúa varios puntos por debajo de la media de la zona euro, mientras que el gasto público se acerca más a esa media: la diferencia es el déficit estructural. Y las causas de esa brecha recaudatoria son objeto de discusión: **economía sumergida**, un diseño con muchos beneficios fiscales que estrechan las bases, tipos reducidos de IVA amplios, y una estructura productiva de empresas pequeñas donde el cumplimiento es más difícil de verificar. Que la solución esté en subir tipos o en ampliar bases es una discusión de diseño, y la ficha 10.05 aporta el criterio de eficiencia para abordarla.",
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
            { nom: "Incidencia legal", sub: "Lo único que decide la ley.", cols: ["quién ingresa el tributo"] },
            { nom: "Incidencia económica", sub: "Soporta la carga quien menos puede escapar.", cols: ["$\\dfrac{\\text{carga sobre demanda}}{\\text{carga sobre oferta}} = \\dfrac{\\varepsilon_s}{\\varepsilon_d}$"] },
            { nom: "Cuña fiscal", sub: "La distancia entre coste y salario neto.", cols: ["$\\dfrac{\\text{coste empresarial} - \\text{salario neto}}{\\text{coste empresarial}}$"] },
            { nom: "Tipo marginal", sub: "Gobierna los incentivos.", cols: ["impuesto sobre el último euro"] },
            { nom: "Tipo medio efectivo", sub: "Gobierna la carga real.", cols: ["$\\dfrac{\\text{cuota}}{\\text{base}}$"] },
            { nom: "Progresividad", sub: "El tipo medio crece con la base.", cols: ["$\\dfrac{d(\\text{tipo medio})}{d(\\text{base})} > 0$"] },
            { nom: "IVA sobre renta", sub: "Regresivo sobre renta anual.", cols: ["$\\dfrac{\\text{cuota}}{\\text{renta}}$ decrece al subir la renta"] },
            { nom: "IVA sobre consumo", sub: "Proporcional dentro de cada tipo.", cols: ["$\\dfrac{\\text{cuota}}{\\text{consumo}}$ constante"] },
            { nom: "Presión fiscal", sub: "Mide ingresos, no esfuerzo ni tipos.", cols: ["$\\dfrac{\\text{Ingresos públicos}}{\\mathrm{PIB}}$"] },
            { nom: "Esfuerzo fiscal", sub: "Corrige por el nivel de renta del país.", cols: ["$\\dfrac{\\text{presión fiscal}}{\\text{PIB per cápita relativo}}$"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la cuña fiscal y quién paga el IVA",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, la cuña.** Un trabajador cuesta a su empresa **40.000 € al año**. Seguimos el dinero hasta su cuenta corriente con una cotización empresarial del 30 %, una del trabajador del 6,35 % y un tipo medio efectivo de IRPF del 15 %.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe", "Acumulado que se queda el sector público"],
          filas: [
            ["Coste total para la empresa", "40.000,00 €", "—"],
            ["− Cotización empresarial (30 %)", "9.230,77 €", "9.230,77 €"],
            ["= Salario bruto", "30.769,23 €", "—"],
            ["− Cotización del trabajador (6,35 %)", "1.953,85 €", "11.184,62 €"],
            ["= Base del IRPF", "28.815,38 €", "—"],
            ["− IRPF (tipo medio efectivo 15 %)", "4.322,31 €", "15.506,92 €"],
            { celdas: ["= Salario neto", "24.493,08 €", "Cuña: 38,8 %"], clase: "total" },
          ],
          nota: "De cada 100 € que la empresa dedica a este puesto, **el trabajador recibe 61,2** y 38,8 van al sector público. El reparto interno de esa cuña es revelador: las cotizaciones aportan el **72,1 %** y el IRPF solo el **27,9 %**, pese a que el debate público sobre la carga fiscal del trabajo gira casi por completo en torno al segundo. Y obsérvese el orden de las restas: la cotización empresarial se calcula **sobre el salario bruto**, así que el bruto no es 40.000 menos 30 %, sino 40.000 dividido por 1,30. Ese detalle aritmético se equivoca constantemente.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, el IVA.** Cuatro hogares con rentas muy distintas y con la propensión al consumo decreciente que documenta cualquier encuesta de presupuestos familiares: el más pobre gasta todo lo que ingresa y el más rico, la mitad. Todos pagan el mismo tipo del 21 %.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Renta anual", y: "% pagado" },
          dominio: { x: [0, 130], y: [0, 20] },
          marcasX: [0, 30, 60, 90, 120],
          marcasY: [0, 5, 10, 15, 20],
          series: [
            {
              nombre: "Sobre consumo",
              color: "acento",
              trazo: "discontinuo",
              grosor: 1.8,
              etiquetaEn: [130, 17.36],
              puntos: [[0, 17.36], [130, 17.36]],
            },
            {
              nombre: "Sobre renta",
              color: "alerta",
              grosor: 2.4,
              etiquetaEn: [130, 8.68],
              puntos: [[15, 17.36], [22, 16.2], [30, 14.75], [40, 13.2], [50, 12.1], [60, 11.28], [80, 10.1], [100, 9.3], [120, 8.68]],
            },
          ],
          puntos: [
            { x: 15, y: 17.36, guias: false },
            { x: 30, y: 14.75, guias: false },
            { x: 60, y: 11.28, guias: false },
            { x: 120, y: 8.68, guias: false },
          ],
          nota: "Las dos líneas describen **el mismo impuesto y los mismos hogares**. Sobre el consumo, todos pagan exactamente **17,36 %** —el 21 % expresado sobre el precio con impuesto incluido—: el IVA es rigurosamente proporcional. Sobre la renta anual, el porcentaje cae del 17,4 % al 8,7 % según sube la renta: el IVA es claramente regresivo. **Ninguna de las dos afirmaciones es falsa**, y la discusión pública consiste en buena medida en que cada parte elige su denominador. Falta el tercer punto de vista: sobre la renta de toda la vida el impuesto es aproximadamente proporcional, porque lo ahorrado se acaba gastando.",
        },
        {
          tipo: "tabla",
          cabecera: ["Renta anual", "Consume", "IVA pagado", "% de la renta", "% del consumo"],
          filas: [
            ["15.000 €", "100 %", "2.603 €", "17,36 %", "17,36 %"],
            ["30.000 €", "85 %", "4.426 €", "14,75 %", "17,36 %"],
            ["60.000 €", "65 %", "6.769 €", "11,28 %", "17,36 %"],
            { celdas: ["120.000 €", "50 %", "10.413 €", "8,68 %", "17,36 %"], clase: "total" },
          ],
          nota: "Obsérvese la columna de importes absolutos: el hogar de 120.000 € paga **cuatro veces más IVA** que el de 15.000 €. Ahí está el argumento decisivo contra los tipos reducidos como herramienta redistributiva: **bajar el IVA de un producto regala más dinero, en euros, a quien más lo consume**, que suele ser quien más renta tiene. Si el objetivo es proteger a los hogares vulnerables, una transferencia directa entrega el mismo alivio con una fracción del coste recaudatorio, y sin distorsionar precios relativos. Es un caso de manual de instrumento mal emparejado con el objetivo.",
        },
      ],
    },
    {
      titulo: "Caso práctico: la brecha recaudatoria española",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "España recauda, en proporción a su PIB, varios puntos menos que la media de la zona euro, y gasta bastante más cerca de esa media. Esa brecha es el origen aritmético del déficit estructural, y las explicaciones que se ofrecen son incompatibles entre sí, de modo que vale la pena examinarlas.",
            "**La primera es que los tipos son bajos**, y es la que menos se sostiene. Los tipos nominales españoles de IRPF, IVA y sociedades están en el rango europeo y en algunos tramos por encima. La brecha no está en los tipos: está en las **bases** sobre las que se aplican. Confundir ambas cosas explica que suban los tipos sin que la recaudación se mueva proporcionalmente, un resultado que sorprende cada vez.",
            "**La segunda son los beneficios fiscales**, y es más sólida. Deducciones, exenciones, regímenes especiales y tipos reducidos estrechan las bases de todas las figuras. El caso más cuantificado es el del **IVA**: el porcentaje del consumo que tributa al tipo reducido o superreducido es en España mayor que en la media europea, y el llamado tipo implícito —recaudación dividida entre consumo total— queda muy por debajo del nominal. Cada beneficio fiscal tiene su justificación y su grupo defensor; sumados, son la mayor parte de la brecha.",
            "**La tercera es la economía sumergida**, cuya magnitud se estima con métodos indirectos y muy discutidos, con resultados que varían por un factor de dos según el método. Está relacionada con la estructura empresarial de la ficha 10.01: **el cumplimiento es más fácil de verificar en empresas grandes**, donde hay contabilidad formal, muchos empleados y trazabilidad de pagos. Un país con más empleo en microempresas tiene, en igualdad de todo lo demás, una base imponible efectiva menor.",
            "**La cuarta es la composición del sistema.** España se apoya relativamente más en cotizaciones sociales y menos en imposición indirecta que la media europea. Como las cotizaciones gravan exclusivamente el trabajo formal, **el sistema concentra la carga sobre una base estrecha y muy visible**, y deja fuera consumo y patrimonio en mayor medida que sus vecinos. La ficha 10.05 explica por qué eso también es problemático desde el punto de vista de la eficiencia, y no solo de la suficiencia.",
            "**Cómo se ordena todo esto para una discusión seria.** Los datos que hay que pedir son el **tipo implícito** de cada figura —recaudación sobre base potencial— antes que el nominal; la cuantificación de los beneficios fiscales, que Hacienda publica anualmente; y la comparación con países de nivel de renta similar, no con la media europea sin ajustar, porque la presión fiscal crece con la renta y comparar España con Dinamarca sin corregir por eso es la versión fiscal del error de composición de la ficha 4.02. Con esos tres elementos, la discusión sobre si hay que subir tipos o ampliar bases deja de ser una consigna y se convierte en una pregunta contestable.",
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
            { t: "Confundir quién ingresa el impuesto con quién lo soporta", d: "La ley fija la incidencia legal; el reparto real lo deciden las elasticidades, y soporta la carga quien menos puede escapar. Es la razón de que la cotización llamada empresarial recaiga en buena parte sobre el salario del trabajador, y de que un impuesto sobre sociedades acabe parcialmente en salarios y precios." },
            { t: "Calcular el salario bruto restando el 30 % al coste empresarial", d: "La cotización se calcula sobre el bruto, no sobre el coste total, así que el bruto es el coste dividido por 1,30 y no el coste menos su 30 %. En el ejemplo, 30.769 € y no 28.000 €. Es un error aritmético frecuente que altera todo el cálculo de la cuña." },
            { t: "Discutir la carga fiscal del trabajo hablando solo del IRPF", d: "En el ejemplo, las cotizaciones aportan el 72 % de la cuña y el IRPF apenas el 28 %. El debate público invierte esas proporciones, en parte porque la cotización empresarial no aparece en la nómina del trabajador y por tanto es invisible para quien la soporta." },
            { t: "Decir que el IVA es regresivo sin especificar la base", d: "Es regresivo sobre la renta anual, proporcional sobre el consumo y aproximadamente proporcional sobre la renta de toda la vida. Las tres afirmaciones son correctas y se refieren a denominadores distintos. Elegir uno sin decirlo es la técnica retórica habitual en esta discusión." },
            { t: "Usar tipos reducidos de IVA como instrumento redistributivo", d: "Benefician más en euros a quien más consume, que suele ser quien más renta tiene: en el ejemplo, el hogar de 120.000 € paga cuatro veces más IVA que el de 15.000 €. Una transferencia directa entrega el mismo alivio al hogar vulnerable con una fracción del coste recaudatorio y sin distorsionar precios relativos." },
            { t: "Comparar tipos nominales entre países", d: "La recaudación depende del tipo y de la base, y las bases difieren enormemente por deducciones, exenciones y regímenes especiales. El indicador comparable es el tipo implícito, que divide recaudación entre base potencial. En el impuesto sobre sociedades la brecha entre nominal y efectivo es especialmente grande." },
            { t: "Confundir tipo marginal, tipo medio y tipo nominal máximo", d: "El marginal se aplica al último euro y gobierna los incentivos; el medio efectivo mide la carga real; el nominal máximo es el del titular y casi nadie lo paga sobre el total de su renta. Mezclarlos permite afirmar simultáneamente que un país tiene impuestos altísimos y recauda poco, que es lo que suele ocurrir." },
            { t: "Interpretar la presión fiscal como una medida de esfuerzo", d: "Es simplemente ingresos sobre PIB, y crece de forma natural con el nivel de renta del país. Comparar España con países mucho más ricos sin corregir por eso no informa sobre si el sistema recauda poco: para eso hacen falta medidas de esfuerzo fiscal o comparaciones con economías de renta similar." },
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
            "Los impuestos aparecen en varios lugares del sistema de cuentas, y saber en cuál está cada uno evita errores de interpretación muy comunes.",
          ],
          lista: [
            "Los **impuestos sobre productos** —IVA e impuestos especiales— son la diferencia entre valorar la producción a **precios básicos** y a **precios de mercado**. Por eso el PIB a precios de mercado supera al valor añadido a precios básicos, y por eso la ficha 10.07 los suma explícitamente al pasar de uno a otro. Es la cuña de la ficha 1.03 incorporada al sistema contable.",
            "Las **cotizaciones sociales** forman parte de la **remuneración de asalariados** en la cuenta de explotación, incluidas las llamadas a cargo de la empresa. Es decir, la contabilidad nacional las trata como parte del coste del trabajo y no como un impuesto separado, lo cual es coherente con el análisis de incidencia de esta ficha.",
            "Los **impuestos corrientes sobre la renta y el patrimonio** aparecen en la **cuenta de distribución secundaria de la renta** —ficha 10.06—, que es donde se pasa de la renta primaria a la renta disponible. Ahí es donde la contabilidad nacional registra la redistribución, y donde se ve el efecto conjunto de impuestos directos y prestaciones.",
            "La **presión fiscal** que se cita en los debates es el cociente entre los ingresos públicos del SEC y el PIB, y su comparabilidad internacional depende de convenciones: cómo se traten las cotizaciones a sistemas obligatorios privados, o si las prestaciones se pagan brutas y luego se gravan, altera el numerador varios puntos sin que cambie nada real.",
            "Y la **economía no observada** se estima e incorpora al PIB según obliga el SEC 2010, lo que produce una consecuencia que sorprende: **incluirla eleva el denominador de la presión fiscal y por tanto la reduce**, aunque no genere recaudación. Parte de la brecha de presión fiscal española frente a sus vecinos es atribuible a ese efecto.",
          ],
          cierre:
            "El aviso central es que **los impuestos no están en un único sitio de las cuentas**: unos ajustan la valoración de la producción, otros son coste laboral y otros son redistribución. Cualquier afirmación sobre la carga fiscal debe especificar de qué punto de la secuencia sale la cifra, o no significa nada preciso.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un trabajador cuesta 40.000 € y cobra 24.493 € netos. ¿Quién se queda la diferencia y en qué proporción?", a: "El sector público se queda 15.507 €, el 38,8 % del coste. Las cotizaciones aportan el 72,1 % de esa cuña —9.231 € de la empresa y 1.954 € del trabajador— y el IRPF solo el 27,9 %. El debate público sobre la fiscalidad del trabajo invierte esas proporciones, en buena medida porque la cotización empresarial no figura en la nómina." },
            { q: "¿Por qué el salario bruto es 30.769 € y no 28.000 €?", a: "Porque la cotización empresarial del 30 % se calcula sobre el salario bruto, no sobre el coste total. Hay que dividir 40.000 entre 1,30, no restarle su 30 %. Es un error aritmético habitual que desplaza toda la cuña varios puntos." },
            { q: "¿Es el IVA regresivo?", a: "Depende del denominador, y las tres respuestas son correctas. Sobre la renta anual sí, porque los hogares de renta baja consumen una proporción mayor de lo que ingresan: del 17,4 % al 8,7 % en el ejemplo. Sobre el consumo es exactamente proporcional, un 17,36 % para todos. Y sobre la renta de toda la vida es aproximadamente proporcional, porque lo ahorrado se acaba gastando." },
            { q: "¿Por qué bajar el IVA de un producto básico es mal instrumento redistributivo?", a: "Porque el alivio en euros es proporcional al gasto, y quien más gasta suele ser quien más renta tiene: en el ejemplo, el hogar de 120.000 € paga cuatro veces más IVA que el de 15.000 €. Una transferencia directa da el mismo alivio al hogar vulnerable con una fracción del coste recaudatorio y sin distorsionar precios relativos." },
            { q: "España recauda menos que la media europea con tipos parecidos. ¿Cómo se explica?", a: "Por las bases, no por los tipos. Beneficios fiscales amplios, una proporción alta del consumo tributando a tipos reducidos, economía sumergida y una estructura de microempresas donde el cumplimiento es más difícil de verificar. El indicador que revela esto es el tipo implícito —recaudación entre base potencial— y no el tipo nominal." },
            { q: "¿Quién soporta el impuesto sobre sociedades?", a: "Personas, en todo caso: una sociedad no puede soportar nada. La carga se reparte entre accionistas, trabajadores y clientes según la movilidad del capital y la competencia del sector, y en una economía abierta una parte apreciable se traslada a los salarios. El reparto concreto es una pregunta empírica difícil, no una cuestión de diseño legal." },
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
            { ref: "Albi, Paredes y Rodríguez, Sistema fiscal español", nota: "el manual estándar; la parte de incidencia y la descripción de cada figura son la referencia para esta ficha." },
            { ref: "Agencia Tributaria, Informe Anual de Recaudación Tributaria", nota: "la fuente primaria de qué recauda cada figura y de los tipos efectivos; conviene mirarla antes de aceptar cualquier afirmación sobre recaudación." },
            { ref: "Ministerio de Hacienda, Memoria de Beneficios Fiscales", nota: "la cuantificación oficial de lo que cuestan deducciones, exenciones y tipos reducidos; el documento que mejor explica la brecha de bases." },
            { ref: "Mirrlees Review, Tax by Design", nota: "el análisis más completo sobre cómo debería diseñarse un sistema fiscal; el capítulo sobre IVA y redistribución es el mejor argumento contra los tipos reducidos." },
            { ref: "AIReF, informes sobre el gasto público y los beneficios fiscales", nota: "evaluaciones independientes con metodología explícita, útiles para ver qué se puede y qué no se puede afirmar con los datos disponibles." },
          ],
        },
      ],
    },
  ],
};
