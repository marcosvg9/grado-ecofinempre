/* Ficha 13.07 — Cotizaciones y prestaciones sociales (D.6) por dentro. */

export default {
  codigo: "13.07",
  titulo: "Cotizaciones y prestaciones sociales (D.6) por dentro",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "El D.6 es la mayor operación de distribución del sistema español y la que peor se conoce, porque casi todo lo que contiene ocurre sin que el interesado vea el dinero. Recorrer una nómina entera con los códigos puestos explica de dónde salen los 15.405 euros que separan lo que cuesta un trabajador de lo que se lleva.",
  requiere: "13.04 La remuneración de asalariados · 12.06 Distribución secundaria",
  abre: "13.10 Balances y revalorizaciones · 10.04 Gasto público y pensiones",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El D.6 tiene dos mitades que van en direcciones opuestas: lo que los hogares aportan y lo que reciben.** Las **cotizaciones sociales (D.61)** son lo que se paga para adquirir derechos de protección; las **prestaciones sociales (D.62 y D.63)** son lo que se cobra al materializarse el riesgo cubierto. Las dos son transferencias, y su diferencia es el resultado neto de la protección social para cada sector.",
            "**Las cotizaciones se desglosan por quién las paga materialmente, no por quién las soporta.** Las **efectivas a cargo de los empleadores (D.611)** son la vuelta del rodeo que explicaba la ficha 13.04: la empresa las paga, el sistema se las atribuye al trabajador como renta primaria, y el trabajador las entrega aquí. Las **efectivas a cargo de los hogares (D.613)** son las que el trabajador ve descontadas en su nómina y las que pagan autónomos y personas en regímenes voluntarios. Y las **imputadas (D.612)** son la contrapartida sin flujo real de las prestaciones que un empleador paga directamente sin fondo constituido.",
            "**Las prestaciones se dividen según la forma en que se entregan, y esa división es más importante de lo que parece.** Las **prestaciones sociales distintas de las transferencias sociales en especie (D.62)** se pagan en dinero: el beneficiario recibe un importe y decide qué hacer con él. Las **transferencias sociales en especie (D.63)** se entregan como bienes y servicios: nadie recibe dinero, sino sanidad, educación o medicamentos. Y esta división decide dónde aparece cada cosa: **el D.62 aumenta la renta disponible del hogar y el D.63 no**, porque el D.63 aumenta su consumo efectivo y su renta disponible **ajustada**, que es otra magnitud. La ficha 12.08 lo desarrolló.",
            "**Dentro del D.62 hay tres cajones que conviene distinguir porque responden a lógicas distintas.** Las **prestaciones de seguridad social en efectivo (D.621)** son las contributivas: pensiones de jubilación, incapacidad y viudedad, prestación por desempleo, incapacidad temporal. Se han ganado cotizando, y su cuantía depende de lo cotizado. Las **prestaciones de otros sistemas de seguros sociales relacionados con el empleo (D.622)** son las que paga directamente el empleador o un plan de empresa, y es aquí donde encajan las pensiones de clases pasivas cuya cotización imputada vimos en la ficha 13.04: **D.622 iguala a D.122 por construcción**. Y las **prestaciones de asistencia social en efectivo (D.623)** son las que no exigen haber cotizado: el ingreso mínimo vital, las pensiones no contributivas, las ayudas por dependencia en su modalidad económica.",
            "**Esa última distinción —contributivo frente a asistencial— es la que más se pierde en el debate público y la que más importa para entender un sistema de protección.** Una prestación contributiva es un derecho adquirido mediante cotización previa; una asistencial es una transferencia que responde a una situación de necesidad, financiada con impuestos generales. Las dos son D.62 y las dos aumentan la renta disponible del hogar, pero su lógica, su financiación y su efecto redistributivo son completamente distintos.",
            "**El D.63, por su parte, se divide en dos según quién produce lo que se entrega.** Las **prestaciones sociales en especie producidas por las administraciones (D.631)** son la sanidad y la educación públicas: el Estado las produce y se las entrega al hogar. Las **adquiridas en el mercado (D.632)** son las que el Estado compra a un productor privado y transfiere: la receta farmacéutica dispensada en una oficina de farmacia, los conciertos educativos y sanitarios, las prótesis. En ambos casos el hogar recibe un servicio y no un ingreso, y en ambos su renta disponible no se mueve.",
            "**Queda una advertencia sobre la frontera, que la ficha 12.07 ya rozó.** No toda transferencia a un hogar es prestación social: solo lo son las que responden a **riesgos o necesidades socialmente reconocidos** —vejez, enfermedad, desempleo, dependencia, familia, vivienda, exclusión—. Una beca, una subvención cultural o una ayuda a la compra de un coche eléctrico no cubren ninguno de esos riesgos, y por tanto no son D.6 sino transferencias corrientes diversas o de capital según el caso. La lista de riesgos no es arbitraria: está fijada en el reglamento precisamente para que la frontera no dependa del criterio de cada país.",
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
            { nom: "Las dos mitades del D.6", sub: "Van en direcciones opuestas.", cols: ["D.61 se aporta · D.62 y D.63 se reciben"] },
            { nom: "Cotizaciones efectivas del empleador", sub: "La vuelta del rodeo del D.121.", cols: ["D.611"] },
            { nom: "Cotizaciones efectivas del hogar", sub: "Las que se ven en la nómina.", cols: ["D.613 — y las de los autónomos"] },
            { nom: "Cotizaciones imputadas", sub: "Sin flujo real detrás.", cols: ["D.612 = D.122 = D.622"] },
            { nom: "Prestaciones en efectivo", sub: "El hogar recibe dinero y decide.", cols: ["D.62 — sí aumenta la renta disponible"] },
            { nom: "Transferencias en especie", sub: "El hogar recibe servicios.", cols: ["D.63 — no aumenta la renta disponible"] },
            { nom: "Los tres cajones del D.62", sub: "Lógicas de financiación distintas.", cols: ["D.621 contributiva · D.622 empleador · D.623 asistencial"] },
            { nom: "Los dos del D.63", sub: "Según quién lo produce.", cols: ["D.631 producidas · D.632 compradas en el mercado"] },
            { nom: "Qué es prestación social", sub: "La lista está en el reglamento.", cols: ["cubre un riesgo socialmente reconocido"] },
            { nom: "Qué no lo es", sub: "No cubren riesgo alguno.", cols: ["becas y subvenciones → D.7 o D.9"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una nómina de principio a fin",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un trabajador con un salario bruto anual de 30.000 €. Seguimos el recorrido completo desde lo que desembolsa la empresa hasta lo que queda en la cuenta del hogar, con los tipos de cotización de orden de magnitud español: en torno al 30 % a cargo del empleador y al 6,35 % a cargo del trabajador.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Código", "Importe", "Cuenta en la que ocurre"],
          filas: [
            ["Salario bruto pactado", "D.11", "30.000 €", "Explotación de la empresa"],
            ["+ Cotización a cargo del empleador (30 %)", "D.121", "9.000 €", "Explotación de la empresa"],
            ["= Coste laboral total", "D.1", "39.000 €", "Es el recurso del hogar en renta primaria"],
            ["− Cotización del empleador, pagada por el hogar", "D.611", "9.000 €", "Distribución secundaria"],
            ["− Cotización a cargo del trabajador (6,35 %)", "D.613", "1.905 €", "Distribución secundaria"],
            ["− Impuesto sobre la renta retenido", "D.51", "4.500 €", "Distribución secundaria"],
            { celdas: ["= Renta disponible por esta vía", "B.6", "23.595 €", "Y es exactamente el líquido de su nómina"], clase: "total" },
          ],
          nota: "El resultado es la mejor prueba de que el rodeo del sistema no inventa nada: **la renta disponible calculada por el camino largo del SEC —39.000 menos las dos cotizaciones y el impuesto— coincide al euro con el líquido que aparece en la nómina**, que se obtiene por el camino corto de restar al bruto de 30.000 solo lo que el trabajador ve. Los 9.000 € de cotización patronal entran y salen sin dejar rastro en la renta disponible, y sin embargo el sistema los hace pasar por el hogar. La razón es que así queda registrado que **esos 9.000 € le compran derechos a él**, no a la empresa.",
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "", y: "Euros" },
          dominio: { x: [0, 4.2], y: [0, 42000] },
          marcasX: [],
          marcasY: [0, 10000, 20000, 30000, 39000],
          areas: [
            { puntos: [[0.4, 0], [0.4, 23595], [1.4, 23595], [1.4, 0]], color: "acento" },
            { puntos: [[0.4, 23595], [0.4, 28095], [1.4, 28095], [1.4, 23595]], color: "alerta" },
            { puntos: [[0.4, 28095], [0.4, 30000], [1.4, 30000], [1.4, 28095]], color: "n3" },
            { puntos: [[0.4, 30000], [0.4, 39000], [1.4, 39000], [1.4, 30000]], color: "n2" },
          ],
          notas: [
            { x: 0.9, y: 11500, texto: "23.595", ancla: "middle" },
            { x: 0.9, y: 25600, texto: "4.500", ancla: "middle" },
            { x: 0.9, y: 28900, texto: "1.905", ancla: "middle" },
            { x: 0.9, y: 34200, texto: "9.000", ancla: "middle" },
            { x: 1.55, y: 11500, texto: "Líquido que cobra · B.6", ancla: "start" },
            { x: 1.55, y: 25600, texto: "IRPF retenido · D.51", ancla: "start" },
            { x: 1.55, y: 28900, texto: "Cotización del trabajador · D.613", ancla: "start" },
            { x: 1.55, y: 34200, texto: "Cotización del empleador · D.611", ancla: "start" },
            { x: 1.55, y: 39900, texto: "Coste para la empresa: 39.000", ancla: "start" },
          ],
          nota: "La **cuña fiscal** es la suma de las tres franjas superiores: **15.405 € sobre un coste de 39.000, es decir el 39,5 %**, un valor muy próximo al que la OCDE calcula para un trabajador medio soltero en España. Lo que la barra hace visible es el reparto interno de esa cuña: **las cotizaciones sociales pesan 10.905 € y el impuesto sobre la renta solo 4.500 €**, más del doble las primeras. Y de esos 10.905, el trabajador solo ve descontados 1.905 en su nómina: los otros 9.000 nunca aparecen en ningún documento que él reciba.",
        },
      ],
    },
    {
      titulo: "Caso práctico: abrir la protección social de la economía de ejemplo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Las fichas 12.06 y 12.08 usaban unas cotizaciones y unas prestaciones agregadas. Abrirlas permite ver el tamaño relativo de cada mecanismo y, sobre todo, dónde acaba cada euro.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Componente", "Código", "Importe", "Contenido"],
          filas: [
            ["Cotizaciones efectivas a cargo de los empleadores", "D.611", "110", "El D.121 de la ficha 13.04, de vuelta"],
            ["Cotizaciones efectivas a cargo de los hogares", "D.613", "45", "Las de la nómina y las de los autónomos"],
            ["Cotizaciones imputadas", "D.612", "5", "Contrapartida exacta del D.622"],
            ["Total cotizaciones sociales", "D.61", "160", "Lo que los hogares aportan"],
            ["Prestaciones de seguridad social en efectivo", "D.621", "120", "Pensiones contributivas, desempleo, incapacidad temporal"],
            ["Prestaciones de otros sistemas ligados al empleo", "D.622", "5", "Pagadas directamente por el empleador, sin fondo"],
            ["Prestaciones de asistencia social en efectivo", "D.623", "15", "Ingreso mínimo vital, pensiones no contributivas"],
            ["Total prestaciones en efectivo", "D.62", "140", "Sí aumentan la renta disponible"],
            ["Transferencias en especie producidas", "D.631", "78", "Sanidad y educación públicas"],
            ["Transferencias en especie compradas en el mercado", "D.632", "17", "Recetas, conciertos educativos y sanitarios, prótesis"],
            { celdas: ["Total transferencias en especie", "D.63", "95", "No aumentan la renta disponible: sí el consumo efectivo"], clase: "total" },
          ],
          nota: "Los **95 del D.63** son exactamente los que la ficha 12.08 hacía viajar de las administraciones a los hogares para pasar del gasto en consumo final al consumo efectivo. Y hay dos lecturas que la tabla permite. **La primera**: los hogares aportan 160 en cotizaciones y reciben 140 en prestaciones en efectivo, de modo que el sistema contributivo es deficitario en 20 y el resto se financia con impuestos. **La segunda, más importante**: si solo se miran las prestaciones en efectivo se pierde de vista un bloque de 95 —dos tercios del D.62— que el hogar recibe sin que su renta se mueva un euro. Cualquier medida de generosidad de un Estado de bienestar que ignore el D.63 subestima enormemente lo que se transfiere.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y la comprobación de coherencia que cierra el bloque 12 y este.** Los 5 de cotizaciones imputadas (D.612), los 5 del D.622 y los 5 del D.122 de la ficha 13.04 **son el mismo número tres veces**, y tienen que serlo. El sistema imputa una cotización porque hay una prestación que alguien paga sin fondo; si los tres importes no coincidieran, aparecería una prestación surgida de la nada o una cotización sin destino. Es un ejemplo pequeño de la propiedad general que la ficha 13.01 enunciaba: en un sistema de partida doble, **las imputaciones tienen que cuadrar igual que los flujos reales**, y comprobarlo es la forma más rápida de detectar un error.",
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
            { t: "Creer que las transferencias en especie aumentan la renta disponible", d: "No lo hacen. El D.63 aumenta el consumo efectivo del hogar y su renta disponible ajustada, que son magnitudes distintas de la renta disponible. Por eso un país con mucha sanidad y educación públicas puede parecer menos generoso de lo que es si solo se miran las prestaciones en efectivo." },
            { t: "Confundir prestaciones contributivas y asistenciales", d: "Las contributivas (D.621) son derechos adquiridos cotizando y su cuantía depende de lo cotizado; las asistenciales (D.623) responden a una situación de necesidad y se financian con impuestos generales. Ambas son D.62 y ambas aumentan la renta disponible, pero su lógica y su efecto redistributivo son opuestos." },
            { t: "Considerar prestación social cualquier ayuda pública a un hogar", d: "Solo lo son las que cubren riesgos o necesidades socialmente reconocidos: vejez, enfermedad, desempleo, dependencia, familia, vivienda, exclusión. Una beca o una ayuda a la compra de un coche eléctrico no cubren ninguno, y van a transferencias corrientes diversas o de capital. La lista está fijada en el reglamento para que la frontera no dependa de cada país." },
            { t: "Buscar en la nómina el total de cotizaciones que se pagan por un trabajador", d: "Solo aparecen las suyas: 1.905 € de 10.905 en el ejemplo. Los 9.000 € de cotización patronal no figuran en ningún documento que el trabajador reciba, aunque el sistema se los atribuya como renta primaria porque le compran derechos a él." },
            { t: "Medir la presión fiscal sobre el trabajo mirando solo el impuesto sobre la renta", d: "En el ejemplo las cotizaciones pesan 10.905 € y el impuesto 4.500 €: más del doble las primeras. La cuña fiscal completa es del 39,5 % del coste laboral, y su componente principal no es el impuesto que se declara sino el que se descuenta antes." },
            { t: "Olvidar que las imputaciones también tienen que cuadrar", d: "Los 5 de cotización imputada, los 5 del D.612 y los 5 del D.622 son el mismo número tres veces, y tienen que serlo. Si no coincidieran, habría una prestación surgida de la nada o una cotización sin destino. En un sistema de partida doble las imputaciones no son cifras libres." },
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
            "El D.6 es la operación que más dinero mueve del sistema español y la que conecta con más fichas del plan.",
          ],
          lista: [
            "La ficha **13.04** abre la mitad de arriba: las cotizaciones que aquí entran como D.611 salieron de allí como D.121, y el rodeo entre ambas es lo que permite atribuir los derechos a quien los adquiere.",
            "La ficha **12.08** recibe los 95 del D.63: son los que convierten el gasto en consumo final en consumo efectivo y la renta disponible en renta disponible ajustada.",
            "La ficha **12.06** medía la redistribución como distancia entre renta primaria y disponible; esta ficha y la 13.06 dicen exactamente qué operaciones la producen y en qué proporción.",
            "La ficha **10.04**, sobre pensiones y Estado de bienestar, discute la sostenibilidad de lo que aquí se contabiliza: el saldo entre D.61 y D.621 es el punto de partida de esa discusión.",
            "Y la ficha **12.05** aporta el matiz de que los sistemas de pensiones con fondo constituido generan además operaciones financieras y una producción de servicios que no aparece en el D.6.",
          ],
          cierre:
            "La idea que conviene llevarse es que **la mayor parte de la protección social ocurre sin que el interesado vea el dinero**: 9.000 € de cotización que no figuran en su nómina y 95 de servicios que recibe sin ingreso alguno. Medir un Estado de bienestar por lo que se transfiere en efectivo deja fuera la mayor parte de lo que hace.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el D.62 aumenta la renta disponible y el D.63 no?", a: "Porque el D.62 se paga en dinero y el hogar decide qué hacer con él, mientras que el D.63 se entrega como bienes y servicios: sanidad, educación, medicamentos. El D.63 aumenta el consumo efectivo del hogar y su renta disponible ajustada, que son magnitudes distintas de la renta disponible." },
            { q: "¿Qué distingue una prestación contributiva de una asistencial?", a: "La contributiva (D.621) es un derecho adquirido mediante cotización previa y su cuantía depende de lo cotizado; la asistencial (D.623) responde a una situación de necesidad y se financia con impuestos generales. Las dos son D.62 y aumentan la renta disponible, pero su lógica y su efecto redistributivo son opuestos." },
            { q: "Un trabajador cuesta 39.000 € y su nómina bruta es 30.000 €. ¿Cuánto llega a su cuenta y por qué?", a: "23.595 €. Del coste total se restan los 9.000 € de cotización patronal (D.611), los 1.905 € de cotización propia (D.613) y los 4.500 € de retención (D.51). Y ese resultado coincide al euro con el líquido de la nómina, calculado restando al bruto solo lo que el trabajador ve." },
            { q: "¿Cuál es la cuña fiscal del ejemplo y cómo se reparte?", a: "15.405 € sobre 39.000, un 39,5 % del coste laboral. Su componente principal no es el impuesto sobre la renta, que son 4.500 €, sino las cotizaciones sociales, que son 10.905 €: más del doble. Y de esas cotizaciones el trabajador solo ve descontados 1.905 € en su nómina." },
            { q: "¿Por qué D.612, D.122 y D.622 son necesariamente el mismo número?", a: "Porque la cotización imputada existe únicamente como contrapartida de una prestación que un empleador paga directamente sin fondo constituido. Si no coincidieran, habría una prestación surgida de la nada o una cotización sin destino. En partida doble, las imputaciones tienen que cuadrar igual que los flujos reales." },
            { q: "¿Es una beca una prestación social?", a: "No. Solo lo son las transferencias que cubren riesgos o necesidades socialmente reconocidos —vejez, enfermedad, desempleo, dependencia, familia, vivienda, exclusión— y una beca no cubre ninguno. Va a transferencias corrientes diversas o de capital según el caso. La lista de riesgos está fijada en el reglamento para que la frontera no dependa del criterio de cada país." },
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
            { ref: "SEC 2010, capítulo 4 — cotizaciones y prestaciones sociales (D.61, D.62, D.63)", nota: "el desglose completo y la lista cerrada de riesgos que definen qué es una prestación social." },
            { ref: "SEC 2010, capítulo 17 — sistemas de pensiones y cuadro suplementario", nota: "el tratamiento de los regímenes con y sin fondo y el origen de las cotizaciones imputadas." },
            { ref: "Eurostat, sistema europeo de estadísticas integradas de protección social (SEEPROS)", nota: "la clasificación funcional del gasto en protección social, complementaria a la del SEC." },
            { ref: "OCDE, Taxing Wages", nota: "la cuña fiscal española calculada con la misma lógica de esta ficha, con desglose por tipo de hogar." },
            { ref: "Seguridad Social, informes económico-financieros", nota: "los tipos de cotización vigentes y el saldo entre cotizaciones y prestaciones contributivas." },
          ],
        },
      ],
    },
  ],
};
