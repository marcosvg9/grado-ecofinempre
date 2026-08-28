/* Ficha 13.03 — El consumo intermedio (P.2): la frontera con el salario y con la inversión. */

export default {
  codigo: "13.03",
  titulo: "El consumo intermedio (P.2): la frontera con el salario y con la inversión",
  nivel: 3,
  bloque: "Operaciones y activos del SEC 2010",
  tiempo: "4 h",
  nucleo:
    "Una empresa gasta cien y todo sale de la misma cuenta corriente, pero el sistema reparte esos cien entre cuatro cuentas distintas según qué se compre y para qué. Dónde caiga cada partida decide el valor añadido de la empresa, y por tanto su contribución al PIB.",
  requiere: "13.02 Operaciones de bienes y servicios · 12.02 La cuenta de producción",
  abre: "13.04 La remuneración de asalariados · 13.08 La formación de capital · 13.05 Impuestos sobre la producción",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**El consumo intermedio es el valor de los bienes y servicios que se consumen o se transforman en el proceso productivo.** La definición tiene dos palabras cargadas de trabajo. **Consumen o transforman**: el insumo desaparece como tal, ya sea porque se incorpora físicamente al producto —el acero en el coche— o porque se agota al usarse —la electricidad, la asesoría jurídica—. Y **en el proceso productivo**: lo que se compra para otra cosa no es consumo intermedio, aunque lo compre una empresa.",
            "**La frontera que más importa es con la formación de capital, y el criterio es el tiempo de servicio.** Un bien o servicio adquirido es consumo intermedio si se agota **dentro del período contable**, y es formación bruta de capital fijo si presta servicio **durante más de un año y de forma repetida**. La harina de una panadería se consume; el horno no. La regla parece obvia hasta que se aplica a cosas inmateriales, y ahí es donde el SEC 2010 cambió las respuestas: la investigación y el desarrollo, el software y las bases de datos, los originales de obras artísticas o los sistemas de armamento son ahora **activos**, porque el conocimiento y los equipos que contienen sirven durante años. Antes eran consumo intermedio, y la ficha 13.01 explicó lo que esa reclasificación hizo con el PIB europeo.",
            "**La segunda frontera es con la remuneración de asalariados, y su criterio es distinto: no el tiempo, sino a quién beneficia el gasto.** Si lo que la empresa paga sirve al trabajador **en su vida privada**, es salario en especie (D.11). Si es una **condición necesaria para hacer el trabajo**, es consumo intermedio de la empresa. El coche de empresa que el directivo usa los fines de semana es salario; el camión que conduce el repartidor es capital de la empresa. La comida del comedor subvencionado es salario; el café de la máquina de la sala de reuniones es consumo intermedio. La formación que el trabajador podría llevarse a otro empleo es una zona gris que el reglamento resuelve, en general, a favor del consumo intermedio: si la empresa la exige, la paga como insumo.",
            "**La tercera frontera es con los impuestos, y suele resolverse mal.** El IBI del local, el impuesto de actividades económicas o una tasa por licencia **no son consumo intermedio** aunque sean gastos corrientes obligatorios: son **otros impuestos sobre la producción (D.29)**, porque no compran ningún bien ni servicio identificable. La ficha 13.05 los desarrolla. En cambio, la tasa que se paga por un servicio concreto y proporcional al uso sí puede ser compra de un servicio, y esa distinción es de las que más discusión generan.",
            "**Hay tres partidas que casi todo el mundo coloca mal la primera vez, y merecen mención expresa.** Los **servicios de intermediación financiera medidos indirectamente (SIFMI)** son consumo intermedio de las empresas aunque nadie los facture: la ficha 12.05 explicó cómo se estiman. Las **primas netas de seguro no vida** también lo son, aunque el flujo bruto de primas incluya una parte que es transferencia. Y los **gastos de investigación y desarrollo comprados a terceros** son formación de capital desde el SEC 2010, igual que la I+D realizada por cuenta propia, aunque contablemente la empresa los registre como gasto del ejercicio.",
            "**Ese último punto lleva a la advertencia general de la ficha: la contabilidad nacional no es la contabilidad de la empresa.** Un plan general contable tiene sus propios criterios de activación, sus propias amortizaciones y sus propias reglas fiscales, y no coinciden con los del SEC. Lo que una empresa lleva a gasto del ejercicio puede ser inversión en cuentas nacionales, y al revés. Los institutos de estadística parten de las cuentas empresariales y las **reconvierten**; esa reconversión es buena parte del trabajo real de elaborar una contabilidad nacional, y explica por qué los datos tardan lo que tardan.",
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
            { nom: "Definición", sub: "Las dos palabras que hacen el trabajo.", cols: ["se consume o transforma en el proceso productivo"] },
            { nom: "Frontera con la inversión", sub: "El criterio es el tiempo de servicio.", cols: ["< 1 año → P.2 · > 1 año y repetido → P.51g"] },
            { nom: "Frontera con el salario", sub: "El criterio es a quién beneficia.", cols: ["al trabajador → D.11 · al puesto → P.2"] },
            { nom: "Frontera con los impuestos", sub: "No compran nada identificable.", cols: ["IBI del local, IAE, licencias → D.29"] },
            { nom: "Lo que el SEC 2010 sacó del P.2", sub: "El mayor cambio metodológico.", cols: ["I+D, software, originales, armamento → P.51g"] },
            { nom: "Partidas que se colocan mal", sub: "Sí son consumo intermedio.", cols: ["SIFMI · primas netas de seguro no vida"] },
            { nom: "Efecto sobre el valor añadido", sub: "Por eso la frontera importa.", cols: ["B.1g = P.1 − P.2"] },
            { nom: "Regla de oro", sub: "El origen del dato no es el criterio.", cols: ["la contabilidad de empresa no es la nacional"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cien euros de gasto, cuatro cuentas",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa industrial gasta 100 en un ejercicio. Todo sale de la misma cuenta corriente y todo aparece junto en su cuenta de pérdidas y ganancias. El sistema lo reparte así.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Partida", "Importe", "Código", "Por qué"],
          filas: [
            ["Materias primas y energía", "40", "P.2", "Se transforman o se agotan en el proceso"],
            ["Servicios profesionales y publicidad", "15", "P.2", "Servicios que se consumen en el ejercicio"],
            ["Alquiler de la nave (arrendamiento operativo)", "8", "P.2", "Compra del servicio de uso, no del activo"],
            ["Gastos de viaje y dietas del personal", "4", "P.2", "Los exige el puesto: no beneficia al trabajador"],
            ["Primas netas de seguro no vida", "3", "P.2", "Servicio de aseguramiento, neto del componente transferencia"],
            ["SIFMI imputados por su banco", "2", "P.2", "Servicio real aunque nadie lo facture"],
            ["Uniformes y equipos de protección", "1", "P.2", "Solo utilizables en el trabajo"],
            ["Formación del personal para el puesto", "2", "P.2", "Exigida por la empresa para producir"],
            ["Subtotal consumo intermedio", "75", "P.2", "Resta del valor añadido"],
            ["Coche de empresa de uso privado del director", "3", "D.11", "Beneficia al trabajador fuera del trabajo"],
            ["I+D realizada por cuenta propia", "12", "P.51g", "Activo AN.117: sirve durante años"],
            ["Licencia de software plurianual", "5", "P.51g", "Activo AN.117: uso repetido"],
            ["IBI del local", "3", "D.29", "Impuesto: no compra nada identificable"],
            { celdas: ["Cuadro comprado para el vestíbulo", "2", "P.53", "Objeto valioso: ni se consume ni se deprecia"], clase: "total" },
          ],
          nota: "De los 100 que la empresa gasta, **solo 75 reducen su valor añadido**. Los otros 25 son salario en especie, inversión, impuesto u objeto valioso, y ninguno de ellos resta del B.1g. Nótese lo desigual del reparto de las partidas más grandes: los 12 de I+D **suman 12 al valor añadido** frente a lo que ocurriría bajo el SEC 95, y los 3 del coche del director son renta del hogar que lo disfruta, no coste de producción en el sentido del P.2 —aunque sí sean coste laboral, y por tanto resten del excedente en la cuenta siguiente—.",
        },
        {
          tipo: "grafico",
          alto: 350,
          ejes: { x: "", y: "" },
          dominio: { x: [0, 10], y: [0, 3.2] },
          marcasX: [],
          marcasY: [],
          areas: [
            { puntos: [[0.2, 2.0], [0.2, 2.7], [7.7, 2.7], [7.7, 2.0]], color: "n1" },
            { puntos: [[0.2, 1.0], [0.2, 1.7], [7.5, 1.7], [7.5, 1.0]], color: "n1" },
            { puntos: [[7.5, 1.0], [7.5, 1.7], [8.7, 1.7], [8.7, 1.0]], color: "acento" },
          ],
          notas: [
            { x: 0.2, y: 2.95, texto: "Bajo el SEC 95: la I+D era consumo intermedio", ancla: "start" },
            { x: 3.9, y: 2.3, texto: "P.2 = 87", ancla: "middle" },
            { x: 8.0, y: 2.3, texto: "VAB menor", ancla: "start" },
            { x: 0.2, y: 1.95, texto: "Bajo el SEC 2010: la I+D es formación de capital", ancla: "start" },
            { x: 3.8, y: 1.3, texto: "P.2 = 75", ancla: "middle" },
            { x: 8.1, y: 1.3, texto: "+12", ancla: "start" },
            { x: 0.2, y: 0.45, texto: "El desembolso de la empresa es idéntico en los dos casos: 100.", ancla: "start" },
            { x: 0.2, y: 0.1, texto: "Lo único que cambia es dónde se coloca la I+D, y con ello el valor añadido.", ancla: "start" },
          ],
          nota: "Este es el mecanismo completo de la reclasificación que elevó el PIB europeo, reducido a una empresa. **El gasto no cambia; cambia la frontera.** Y como el valor añadido se define por resta, todo lo que sale del consumo intermedio entra automáticamente en el valor añadido. Hay una contrapartida que conviene no olvidar y que la ficha 13.10 desarrolla: el nuevo activo **se deprecia**, así que aparece consumo de capital fijo donde antes no había ninguno, y el efecto sobre las magnitudes netas es bastante menor que sobre las brutas.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el coche de empresa y el camión de reparto",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos vehículos comprados por la misma empresa el mismo día y por el mismo precio pueden acabar en cuentas completamente distintas. Seguir los dos casos fija la frontera entre consumo intermedio, inversión y salario mejor que cualquier definición.",
            "**El camión de reparto** lo compra la empresa, lo conduce un empleado en horario laboral y solo sirve para transportar mercancía. Es un **activo fijo (P.51g, AN.113)**: presta servicio durante años y de forma repetida. Su compra no reduce el valor añadido de la empresa —la inversión nunca lo hace— pero sí genera **consumo de capital fijo** cada año, que sí reduce el valor añadido neto. El combustible que consume es **consumo intermedio (P.2)**; el seguro obligatorio, también, en su parte de servicio.",
            "**El coche del director**, idéntico en precio, se le entrega para uso indistinto profesional y privado. Aquí el sistema hace algo que sorprende: la empresa sigue siendo la **propietaria del activo**, de modo que el vehículo es **formación de capital fijo de la empresa**, pero el servicio que el directivo obtiene de él en su vida privada es **remuneración en especie (D.11)**. Es decir, la empresa registra la inversión, y además imputa cada año un salario en especie por el valor del uso privado. Ese valor imputado aumenta la renta primaria del hogar y reduce el excedente de explotación de la empresa, sin que se mueva un euro de tesorería.",
            "**La consecuencia es la que interesa: dos operaciones idénticas en la contabilidad de la empresa producen efectos distintos en las cuentas nacionales.** El camión no aumenta la renta de ningún hogar; el coche del director sí. Y en un país donde la retribución en especie es una parte apreciable de la remuneración de los directivos, ignorar esa imputación subestima la renta de los hogares de rentas altas y sobreestima el excedente empresarial.",
            "**El mismo criterio resuelve la lista de casos que suele traer discusión.** El uniforme que solo puede llevarse en el trabajo es P.2; la ropa de calle que la empresa regala es D.11. La vivienda cedida al empleado desplazado por necesidad del servicio es P.2; la vivienda cedida como parte del paquete retributivo es D.11. El reconocimiento médico obligatorio es P.2; el seguro médico privado familiar es D.11. En todos ellos la pregunta es la misma: **¿lo necesita el puesto o lo disfruta la persona?**",
            "**Y conviene cerrar con la advertencia de la que parte el analista, no el estadístico.** Nada de esto se puede leer directamente de la contabilidad de una empresa, que agrupa por naturaleza del gasto y no por destino económico. Las cuentas nacionales reclasifican, y para hacerlo usan encuestas estructurales, declaraciones fiscales y estimaciones. Quien compare la cuenta de resultados de un sector con su valor añadido en las cuentas nacionales y espere coincidencia se llevará una sorpresa, y la sorpresa no será un error de nadie.",
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
            { t: "Tomar todo el gasto corriente de una empresa como consumo intermedio", d: "De los 100 del ejemplo solo 75 lo son. Los otros 25 son salario en especie, inversión, impuesto y objeto valioso, y ninguno reduce el valor añadido. La contabilidad de la empresa agrupa por naturaleza del gasto; las cuentas nacionales, por destino económico." },
            { t: "Seguir tratando la I+D y el software como consumo intermedio", d: "Desde el SEC 2010 son activos, porque el conocimiento sirve durante años. Fue el mayor cambio metodológico del reglamento y elevó el nivel del PIB de todos los países que lo aplicaron, sin que cambiara ni un euro del gasto de las empresas." },
            { t: "Confundir el criterio de la frontera con la inversión y el de la frontera con el salario", d: "Con la inversión el criterio es el tiempo: más de un año y uso repetido. Con el salario es a quién beneficia: al puesto o a la persona. Aplicar uno donde toca el otro lleva a clasificar el uniforme como retribución y el coche del director como insumo." },
            { t: "Meter el IBI del local en el consumo intermedio", d: "Es un impuesto sobre la producción (D.29), no la compra de un bien o un servicio identificable. Es un gasto corriente y obligatorio, pero eso no lo convierte en insumo: no hay contrapartida real. La misma lógica vale para el IAE y las licencias." },
            { t: "Olvidar el SIFMI porque no aparece en ninguna factura", d: "El servicio que presta un banco al mantener una cuenta o conceder un crédito es real y se cobra por diferencial de tipos en lugar de por comisión. El sistema lo estima e imputa, y es consumo intermedio de las empresas usuarias. No incluirlo infravalora el P.2 y sobreestima el valor añadido." },
            { t: "Esperar que las cuentas de una empresa cuadren con su valor añadido nacional", d: "Los criterios de activación, amortización y periodificación del plan contable no son los del SEC, y los institutos de estadística reconvierten los datos. Esa reconversión es buena parte del trabajo real de elaborar la contabilidad nacional y explica los plazos de publicación." },
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
            "El consumo intermedio es la partida más grande de la economía —900 sobre una producción de 1.900 en el ejemplo— y sin embargo es la que menos se cita.",
          ],
          lista: [
            "La ficha **13.02** la sitúa en la identidad de oferta y empleos: el P.2 es el destino que hay que restar para llegar del bruto de la producción al valor añadido.",
            "La ficha **12.02** medía el valor añadido por diferencia; aquí se ve que esa diferencia depende enteramente de dónde se trace la frontera del P.2.",
            "La ficha **12.05** explicaba cómo se estiman los SIFMI; esta ficha muestra dónde acaban: en el consumo intermedio de las empresas y en el consumo final de los hogares.",
            "La ficha **13.04** desarrolla la otra cara de la frontera del salario, y la **13.08** la de la inversión. Las tres juntas cubren el reparto completo del gasto de una empresa.",
            "Y la ficha **10.01**, sobre la estructura productiva española, se apoya en el consumo intermedio desglosado por producto y rama: es la materia prima de cualquier análisis de encadenamientos entre sectores.",
          ],
          cierre:
            "La idea que conviene llevarse es que **el valor añadido no se mide: se obtiene por resta**, y por eso cada decisión sobre qué entra en el consumo intermedio es una decisión sobre el PIB. No es una cuestión de etiquetas sino de dónde se pone la frontera entre lo que se consume produciendo y lo que se acumula para producir mañana.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué criterio separa el consumo intermedio de la formación de capital?", a: "El tiempo de servicio. Es consumo intermedio si se agota dentro del período contable, y formación bruta de capital fijo si presta servicio más de un año y de forma repetida. La harina de la panadería se consume; el horno, no." },
            { q: "¿Y qué criterio separa el consumo intermedio del salario en especie?", a: "A quién beneficia el gasto. Si lo exige el puesto, es consumo intermedio de la empresa; si lo disfruta el trabajador en su vida privada, es remuneración en especie. El uniforme es P.2; el coche de uso privado del directivo es D.11." },
            { q: "Una empresa gasta 100. ¿Por qué su valor añadido solo cae en 75?", a: "Porque los otros 25 no son consumos intermedios: 3 son salario en especie, 17 son formación de capital en I+D y software, 3 son un impuesto sobre la producción y 2 un objeto valioso. Ninguno de ellos resta del valor añadido, aunque los cuatro salgan de la misma cuenta corriente." },
            { q: "¿Por qué capitalizar la I+D elevó el PIB si el gasto de las empresas no cambió?", a: "Porque el valor añadido se obtiene restando el consumo intermedio de la producción, así que sacar la I+D del P.2 la suma directamente al valor añadido, y además la convierte en inversión, componente de la demanda final. La contrapartida es que el nuevo activo se deprecia, de modo que el efecto sobre las magnitudes netas es menor." },
            { q: "El IBI del local es un gasto corriente obligatorio. ¿Es consumo intermedio?", a: "No. Es un otro impuesto sobre la producción (D.29), porque no compra ningún bien ni servicio identificable. Ser obligatorio y corriente no basta: el consumo intermedio exige una contrapartida real. Lo mismo vale para el IAE y las licencias." },
            { q: "¿Por qué el coche del director aparece a la vez como inversión de la empresa y como salario del hogar?", a: "Porque la empresa sigue siendo la propietaria del activo, luego su compra es formación de capital fijo, pero el servicio que el directivo obtiene en su vida privada es remuneración en especie imputada cada año. Aumenta la renta primaria del hogar y reduce el excedente de la empresa sin que se mueva un euro de tesorería." },
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
              q: "El servicio que presta un banco al mantener una cuenta no aparece en ninguna factura. ¿Es consumo intermedio de la empresa cliente?",
              opciones: [
                "Solo si el banco lo desglosa en su información a clientes",
                "Sí: es el SIFMI, un servicio real que se cobra por diferencial de tipos en lugar de por comisión",
                "No: se registra como renta de la propiedad, junto con los intereses",
                "No: sin factura no hay operación que registrar",
              ],
              correcta: 1,
              porque: [
                "El desglose comercial no determina el registro en cuentas nacionales.",
                "El sistema lo estima y lo imputa, y si no se hiciera el valor añadido de la empresa aparecería inflado y el del banco desaparecería.",
                "Los intereses sí son renta de la propiedad; el margen del intermediario es producción de servicios y va aparte.",
                "La ausencia de factura no significa ausencia de servicio: significa que se cobra por otra vía.",
              ],
            },
            {
              q: "Una empresa gasta 40.000 € en ropa de trabajo obligatoria y 6.000 € en un plan de pensiones para su director. ¿Cómo se clasifica cada cosa?",
              opciones: [
                "Ambas como consumo intermedio, por ser gasto corriente de la empresa",
                "La ropa es consumo intermedio y el plan de pensiones remuneración de asalariados",
                "La ropa es formación de capital y el plan de pensiones consumo intermedio",
                "Ambas como remuneración de asalariados",
              ],
              correcta: 1,
              porque: [
                "El plan de pensiones beneficia a la persona, no al puesto, así que no es un insumo de la producción.",
                "El criterio de esta frontera es a quién beneficia: si al puesto es P.2, y si a la persona es D.1. La ropa de trabajo cumple una función productiva; el plan de pensiones retribuye a alguien.",
                "La ropa no dura más de un año en uso repetido de forma que justifique activarla, y el plan de pensiones no es un insumo.",
                "La ropa la exige el puesto: nadie se la llevaría a casa como retribución.",
              ],
            },
            {
              q: "¿Dónde van las primas netas de seguro no vida que paga una empresa?",
              opciones: [
                "A formación de capital, si cubren activos fijos",
                "A transferencias corrientes, en su totalidad",
                "A consumo intermedio, en su totalidad",
                "Se reparten: el margen del asegurador es consumo intermedio y el resto es transferencia corriente",
              ],
              correcta: 3,
              porque: [
                "El objeto asegurado no cambia la naturaleza de la prima.",
                "Tampoco es toda transferencia: la compañía presta un servicio real que hay que reconocer como producción.",
                "Solo una parte de la prima compra un servicio: el resto es dinero que vuelve al colectivo asegurado.",
                "Es una de las partidas que más se colocan mal, precisamente porque un único pago se reparte entre dos cuentas distintas.",
              ],
            },
            {
              q: "¿Coincide el valor añadido que calcula el INE para una empresa con el que sale de sus cuentas anuales?",
              opciones: [
                "No: los criterios de activación, amortización y periodificación del plan contable no son los del SEC, y el instituto reconvierte los datos",
                "Sí: ambas parten de la misma contabilidad",
                "No, pero la diferencia es siempre inferior al 1 %",
                "Sí, salvo diferencias por el tratamiento del IVA",
              ],
              correcta: 0,
              porque: [
                "Es la regla de oro del tema: la contabilidad de empresa no es la contabilidad nacional, y esperar que cuadren lleva a buscar errores donde solo hay criterios diferentes.",
                "Parten de la misma información y la reordenan con reglas distintas, que responden a preguntas distintas.",
                "No hay ninguna cota: en empresas con mucha I+D o mucho arrendamiento la diferencia puede ser grande.",
                "El IVA es una de las diferencias, y ni mucho menos la única.",
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
            { ref: "SEC 2010, capítulo 3 — consumo intermedio (P.2) y frontera con la formación de capital", nota: "las reglas completas, incluidos los casos límite de arrendamiento, formación y pequeñas herramientas." },
            { ref: "SEC 2010, capítulo 4 — remuneración en especie", nota: "el catálogo de retribuciones en especie y el criterio de a quién beneficia el gasto." },
            { ref: "Eurostat, manual sobre la medición de la I+D en las cuentas nacionales", nota: "cómo se capitaliza la I+D y cómo se estima su depreciación." },
            { ref: "INE, Encuesta industrial de empresas y Estadística estructural de empresas", nota: "las fuentes de las que sale realmente el consumo intermedio español y su desglose por producto." },
            { ref: "Lequiller y Blades, Understanding National Accounts, capítulo 3", nota: "la discusión sobre la frontera de producción y por qué se ha movido con el tiempo." },
          ],
        },
      ],
    },
  ],
};
