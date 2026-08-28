/* Ficha 12.01 — Unidades institucionales, residencia y sectorización. */

export default {
  codigo: "12.01",
  titulo: "Unidades institucionales, residencia y sectorización",
  nivel: 3,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "4 h",
  nucleo:
    "Antes de registrar una sola operación hay que decidir quién es quién. Dos preguntas lo resuelven casi todo: si la unidad es residente, y si cubre con sus ventas al menos la mitad de sus costes. De la segunda depende que la deuda de una empresa pública sea deuda pública.",
  requiere: "10.06 SEC 2010: sectores y secuencia de cuentas",
  abre: "12.02 La cuenta de producción · 12.10 El resto del mundo · 10.06 SEC 2010",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El SEC 2010 empieza por donde hay que empezar: **definiendo la unidad que va a llevar cuentas**. Una **unidad institucional** es un centro de decisión económica que goza de **autonomía de decisión** en el ejercicio de su función principal y dispone de un **conjunto completo de cuentas**, o podría elaborarlo si se le exigiera. Las dos condiciones importan: sin autonomía no hay decisiones propias que registrar, y sin contabilidad no hay nada que consolidar.",
            "**Hay una excepción deliberada y conviene fijarla desde el principio: los hogares.** Un hogar no lleva contabilidad y aun así **se considera siempre unidad institucional**, porque el sistema no puede prescindir de él. El SEC lo resuelve declarando que los hogares gozan siempre de autonomía de decisión en su función principal aunque no dispongan de un conjunto completo de cuentas. Es una convención necesaria, y es la respuesta a una pregunta de examen clásica.",
            "**La otra figura que hay que conocer es la cuasisociedad.** Una entidad sin personalidad jurídica propia pero que lleva un conjunto completo de cuentas y se comporta con autonomía frente a su propietario **se trata como si fuera una sociedad**, y se separa contablemente de él. El caso típico es la sucursal de una empresa extranjera que opera de forma estable en el país. La consecuencia práctica es grande: **si un negocio se trata como cuasisociedad sale del sector hogares y entra en sociedades**, con lo que su renta deja de ser renta mixta y pasa a ser excedente de explotación y dividendos.",
            "**El primer criterio de clasificación es la residencia, y no es la nacionalidad.** Una unidad es residente cuando tiene su **centro de interés económico predominante** en el territorio económico del país, es decir, cuando desarrolla actividades económicas de forma duradera —el SEC toma como referencia un año— desde una ubicación dentro de él. De ahí se sigue algo que confunde a mucha gente: **la filial española de una empresa alemana es residente en España**, y una empresa de capital español que produce en Francia es no residente. El criterio es dónde se produce, no de quién es el capital.",
            "**El segundo criterio, y el más consecuente, distingue productores de mercado de productores de no mercado.** La producción es de **no mercado** cuando se suministra gratuitamente o a **precios económicamente no significativos**, entendiendo por significativos aquellos que influyen de verdad en la cantidad que el productor ofrece y en la que el comprador demanda. Como ese criterio es cualitativo y hay que aplicarlo a miles de entidades, el SEC añade una prueba cuantitativa: la **regla del 50 %**. Una unidad es productora de mercado si **cubre con sus ventas al menos la mitad de sus costes de producción, de forma continuada a lo largo de varios años**.",
            "**Esa regla decide fronteras con consecuencias de miles de millones.** Una entidad pública que no llega al 50 % se clasifica dentro de las **administraciones públicas**, y entonces su deuda es deuda pública a efectos del procedimiento de déficit excesivo. Si lo supera, es una **sociedad no financiera pública** y su deuda queda fuera. La exigencia de continuidad —varios años, no uno— está precisamente para evitar que una entidad entre y salga del perímetro según le vaya el ejercicio, y el criterio de **control** completa el cuadro: es la capacidad de definir la política general de la entidad, y determina si una sociedad de mercado es pública o privada.",
            "**Con esas dos preguntas resueltas, la sectorización es casi mecánica.** Producen bienes y servicios **no financieros** para el mercado: sociedades no financieras, **S.11**. Producen servicios **financieros** para el mercado: instituciones financieras, **S.12**. Son productores **públicos** de no mercado: administraciones públicas, **S.13**. Son individuos, consumidores y empresarios sin personalidad jurídica: hogares, **S.14**. Son productores **privados** de no mercado al servicio de los hogares: **S.15**. Y todo lo no residente que opere con residentes forma el **S.2**, que como verá la ficha 12.10 no es un sector propiamente dicho sino la pieza que cierra el sistema.",
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
            { nom: "Unidad institucional", sub: "Las dos condiciones, salvo los hogares.", cols: ["autonomía de decisión + conjunto completo de cuentas"] },
            { nom: "Excepción de los hogares", sub: "Convención necesaria del sistema.", cols: ["siempre unidad, aunque no lleven cuentas"] },
            { nom: "Cuasisociedad", sub: "Se separa contablemente de su propietario.", cols: ["sin personalidad jurídica, con cuentas completas y autonomía"] },
            { nom: "Residencia", sub: "Territorio, no nacionalidad.", cols: ["centro de interés económico predominante ($\\geq$ 1 año)"] },
            { nom: "Precio económicamente significativo", sub: "Criterio cualitativo del SEC.", cols: ["influye en la oferta y en la demanda"] },
            { nom: "Regla del 50 %", sub: "Prueba cuantitativa, con exigencia de continuidad.", cols: ["$\\dfrac{\\text{ventas}}{\\text{costes de producción}} \\geq 50\\ \\%$ varios años"] },
            { nom: "Control", sub: "Decide si una sociedad de mercado es pública.", cols: ["capacidad de definir la política general"] },
            { nom: "Los cinco sectores residentes", sub: "Más el S.2, que cierra el sistema.", cols: ["S.11 · S.12 · S.13 · S.14 · S.15"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: aplicar la regla del 50 %",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Seis entidades con sus ventas y sus costes de producción anuales, en millones. La pregunta en cada caso es la misma: **¿cubre con sus ventas al menos la mitad de sus costes?**",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Entidad", y: "Cobertura %" },
          dominio: { x: [0, 6], y: [0, 100] },
          marcasX: [],
          marcasY: [0, 25, 50, 75, 100],
          areas: [
            { puntos: [[0.15, 0], [0.15, 15], [0.85, 15], [0.85, 0]], color: "alerta" },
            { puntos: [[1.15, 0], [1.15, 6], [1.85, 6], [1.85, 0]], color: "n4" },
            { puntos: [[2.15, 0], [2.15, 30], [2.85, 30], [2.85, 0]], color: "alerta" },
            { puntos: [[3.15, 0], [3.15, 48], [3.85, 48], [3.85, 0]], color: "alerta" },
            { puntos: [[4.15, 0], [4.15, 65], [4.85, 65], [4.85, 0]], color: "n2" },
            { puntos: [[5.15, 0], [5.15, 92], [5.85, 92], [5.85, 0]], color: "n2" },
          ],
          series: [
            { nombre: "Umbral", color: "tinta", trazo: "discontinuo", grosor: 1.8, etiquetaEn: [6, 50], puntos: [[0, 50], [6, 50]] },
          ],
          notas: [
            { x: 0.5, y: 20, texto: "15", ancla: "middle" },
            { x: 1.5, y: 11, texto: "6", ancla: "middle" },
            { x: 2.5, y: 35, texto: "30", ancla: "middle" },
            { x: 3.5, y: 53, texto: "48", ancla: "middle" },
            { x: 4.5, y: 70, texto: "65", ancla: "middle" },
            { x: 5.5, y: 97, texto: "92", ancla: "middle" },
            { x: 0.5, y: -9, texto: "Universidad", ancla: "middle" },
            { x: 1.5, y: -9, texto: "ONG", ancla: "middle" },
            { x: 2.5, y: -9, texto: "Transporte", ancla: "middle" },
            { x: 3.5, y: -9, texto: "Ente 48 %", ancla: "middle" },
            { x: 4.5, y: -9, texto: "Puerto", ancla: "middle" },
            { x: 5.5, y: -9, texto: "Eléctrica", ancla: "middle" },
          ],
          nota: "La línea del **50 %** es la frontera del sistema entero. Por debajo, la entidad es **productora de no mercado** y va a S.13 si es pública o a S.15 si es privada al servicio de los hogares; por encima, es productora de mercado y va a S.11 o S.12. Fíjese en la cuarta barra: un ente que cubre el **48 %** queda dentro de las administraciones públicas y su deuda computa como deuda pública, mientras que otro idéntico al **52 %** quedaría fuera. Ese escalón sobre una realidad continua es un incentivo evidente, y explica que el SEC exija que la condición se cumpla **de forma continuada durante varios años** y no en un ejercicio suelto.",
        },
        {
          tipo: "tabla",
          cabecera: ["Entidad", "Ventas", "Costes", "Cobertura", "Sector"],
          filas: [
            ["Universidad pública", "90", "600", "15 %", "S.13 — no de mercado, pública"],
            ["Asociación de ayuda social", "30", "500", "6 %", "S.15 — no de mercado, privada"],
            ["Empresa pública de transporte urbano", "120", "400", "30 %", "S.13 — pese a facturar"],
            ["Ente público en el límite", "192", "400", "48 %", "S.13 — por dos puntos"],
            ["Autoridad portuaria", "260", "400", "65 %", "S.11 — sociedad no financiera pública"],
            { celdas: ["Eléctrica participada por el Estado", "920", "1.000", "92 %", "S.11 — pública pero de mercado"], clase: "total" },
          ],
          nota: "Obsérvese lo que **no** decide la clasificación. No la decide la propiedad: la eléctrica es pública y va a S.11, y la asociación es privada y va a S.15. No la decide facturar: la empresa de transporte cobra 120 millones en billetes y sigue siendo administración pública, porque el billete no cubre ni un tercio del coste y por tanto **no es un precio económicamente significativo**: no hay ánimo de ajustar la oferta para cubrir costes. Y no la decide la forma jurídica. Lo único que decide es **qué produce, para quién y a qué precio**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la residencia, que es el otro eje y funciona con una lógica distinta.** El criterio es el **centro de interés económico predominante**: dónde desarrolla la unidad su actividad de forma duradera. Aplicado a cuatro casos habituales:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Caso", "¿Residente en España?", "Por qué"],
          filas: [
            ["Filial española de una multinacional alemana", "Sí", "Produce de forma duradera en territorio español"],
            ["Sucursal en Londres de un banco español", "No — es S.2", "Su centro de interés está fuera"],
            ["Temporero extranjero que trabaja tres meses", "No — es S.2", "Sin permanencia; su salario es D.1 con el exterior"],
            { celdas: ["Español que trabaja diez años en Suiza", "No — es S.2", "Lo que envíe a su familia es transferencia corriente"], clase: "total" },
          ],
          nota: "Las dos últimas filas explican una distinción que la ficha 12.07 desarrollará y que se confunde constantemente. El **temporero** sigue siendo no residente, así que lo que cobra es **remuneración de asalariados con el exterior (D.1)** y afecta a la renta nacional. El **emigrante de larga duración** es residente en Suiza, y por tanto lo que manda a su familia no es salario sino **transferencia corriente (D.75)**, que entra en una cuenta distinta y más abajo en la secuencia. Dos flujos que a ojo parecen lo mismo y que el sistema registra en sitios diferentes, con efectos distintos sobre la renta nacional y sobre la renta disponible.",
        },
      ],
    },
    {
      titulo: "Caso práctico: cuando una reclasificación mueve la deuda pública",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La regla del 50 % parece un tecnicismo y decide si la deuda de decenas de entidades computa o no en la cifra que evalúa Bruselas. Vale la pena ver cómo funciona en la práctica y por qué genera tanto conflicto.",
            "**El procedimiento es el que sigue.** El instituto de estadística revisa periódicamente las cuentas de las entidades públicas y comprueba, para cada una, la relación entre ventas y costes de producción a lo largo de varios ejercicios. Si una entidad clasificada como sociedad de mercado deja de cubrir el 50 %, **se reclasifica dentro de las administraciones públicas**, y su deuda pasa a computar. Y lo hace **con efecto retroactivo**: se revisan también los años anteriores, de modo que la serie histórica de deuda pública cambia hacia atrás.",
            "**El detalle que provoca las discusiones es qué cuenta como venta.** Una transferencia del presupuesto público que financie la actividad de la entidad **no es una venta**: es una transferencia, y por tanto va al denominador de los costes pero no al numerador. Si un ente ingresa 300 de tarifas y 500 de aportación presupuestaria, su cobertura es 300 sobre el coste total, no 800. Ese tratamiento es lo que reclasifica a la mayoría de las entidades públicas que se reclasifican, y es también lo que hace inútil el intento de arreglar la ratio metiendo dinero público en la entidad.",
            "**El mismo criterio se aplica a las colaboraciones público-privadas**, con una lógica paralela. Una infraestructura construida por un socio privado queda fuera del balance público solo si el privado asume de verdad el riesgo de construcción y además el de demanda o el de disponibilidad. Si el contrato garantiza ingresos mínimos al concesionario, **el riesgo lo sigue soportando el Estado** y la operación se consolida. Varios países han visto reclasificar autopistas y hospitales años después de inaugurarlos.",
            "**Y de ahí sale un fenómeno que conviene reconocer: la ingeniería de perímetro.** Existe un incentivo permanente a diseñar entidades y contratos que queden justo al otro lado de la frontera, y existe también una autoridad estadística que revisa esas decisiones a posteriori. Eurostat publica un manual de casos precisamente porque la casuística es infinita y la interpretación, discutible. **La regla es clara y su aplicación no lo es**, y esa brecha es donde se juega buena parte del debate técnico sobre déficit y deuda.",
            "**La conclusión práctica para leer cualquier cifra.** Preguntar siempre cuál es el **perímetro de consolidación**, es decir, qué entidades están dentro de S.13 en esa publicación concreta. Recordar que las reclasificaciones son **retroactivas**, de modo que la cifra de deuda de hace cinco años no es la que se publicó entonces —el problema de los datos en tiempo real de la ficha 10.10—. Y desconfiar de operaciones cuyo principal atractivo sea que no computan: si mejoran la cifra sin mejorar la posición económica, el sistema acaba corrigiéndolas.",
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
            { t: "Clasificar por propiedad en lugar de por comportamiento", d: "Una eléctrica participada por el Estado que cubre el 92 % de sus costes con ventas es una sociedad no financiera (S.11); una asociación privada que se financia con donaciones es un productor de no mercado (S.15). Lo que decide es qué produce y a qué precio, no de quién es el capital." },
            { t: "Confundir residencia con nacionalidad", d: "La filial española de una multinacional alemana es residente en España y su producción entra en el PIB español; una empresa de capital español que produce en Francia no lo es. El criterio es el centro de interés económico predominante, es decir, dónde se desarrolla la actividad de forma duradera." },
            { t: "Contar las transferencias públicas como ventas al aplicar la regla del 50 %", d: "Una aportación presupuestaria no es una venta: va al denominador de los costes y no al numerador. Por eso inyectar dinero público en una entidad no mejora su ratio de cobertura, y por eso se reclasifican la mayoría de las entidades que acaban dentro del perímetro." },
            { t: "Aplicar la regla del 50 % a un solo ejercicio", d: "El SEC exige que la condición se cumpla de forma continuada durante varios años, precisamente para evitar que una entidad entre y salga del perímetro según le vaya el año. Un ejercicio malo no reclasifica, y un ejercicio bueno tampoco rescata." },
            { t: "Creer que facturar convierte a una entidad en productor de mercado", d: "Una empresa pública de transporte que ingresa 120 millones en billetes con 400 de costes sigue siendo administración pública, porque el billete no es un precio económicamente significativo: no refleja ánimo de cubrir costes ni condiciona la oferta. Vender no basta; hay que vender a precios que signifiquen algo." },
            { t: "Olvidar que los hogares son siempre unidad institucional", d: "No llevan un conjunto completo de cuentas y aun así lo son, porque el sistema no puede prescindir de ellos. El SEC lo resuelve declarando que gozan siempre de autonomía de decisión en su función principal. Es una convención deliberada y una pregunta de examen recurrente." },
            { t: "Meter en el sector hogares lo que es una cuasisociedad", d: "Un negocio sin personalidad jurídica pero con contabilidad completa y autonomía frente a su propietario se trata como sociedad y se separa de él. La consecuencia es que su renta deja de ser renta mixta del hogar y pasa a ser excedente de explotación y dividendos, que se registran en cuentas distintas." },
            { t: "Tratar el S.2 como un sector institucional más", d: "No lo es: agrupa unidades no residentes de naturaleza completamente heterogénea y no forma parte de la economía nacional. Se le asigna una secuencia de cuentas propia porque es el artefacto que cierra el sistema, no porque comparta un comportamiento común. La ficha 12.10 desarrolla la consecuencia de signo." },
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
            "Esta ficha es la puerta del bloque, así que el puente señala hacia dónde propaga cada decisión de sectorización.",
          ],
          lista: [
            "La clasificación determina **cómo se calcula la producción** de cada unidad. Un productor de mercado la valora por sus ventas; uno de no mercado, por la **suma de sus costes**, con la consecuencia sobre el excedente que estudia la ficha 12.02. Es la misma unidad y dos cifras de producción distintas según en qué sector caiga.",
            "La sectorización decide qué es **deuda pública** a efectos del protocolo de déficit excesivo, y por tanto qué cifra se compara con los umbrales europeos. La ficha 10.06 señalaba que las reclasificaciones son retroactivas y que el perímetro es una decisión técnica revisable.",
            "El criterio de **residencia** es lo que separa el PIB de la renta nacional bruta: el primero mide producción en el territorio y la segunda, renta de los residentes. La ficha 10.07 recorre esa distinción y la 12.04 la formaliza con el saldo de rentas primarias.",
            "La distinción entre **hogares y cuasisociedades** determina si la renta de un negocio es **renta mixta** —donde trabajo y capital van juntos— o excedente de explotación más dividendos. Eso afecta directamente a la participación salarial en el PIB que la ficha 10.02 discutía, y a las correcciones que se le aplican.",
            "Y las **fuentes** son distintas para cada sector: la IGAE elabora las cuentas de S.13, el Banco de España y la Dirección General de Seguros alimentan S.12, el DIRCE y la Agencia Tributaria sirven para delimitar S.15, y las encuestas estructurales y los registros de compraventa sostienen S.11 y S.14. Quién compila cada pieza explica su calendario y su margen de revisión.",
          ],
          cierre:
            "Lo que conviene retener es que **la sectorización no es un paso previo neutral**: es la decisión que determina cómo se mide todo lo demás. Dos entidades idénticas en un lado y otro de la frontera del 50 % generan cifras de producción, excedente y deuda completamente distintas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Es un hogar una unidad institucional si no lleva contabilidad?", a: "Sí. Es la excepción deliberada del sistema: el SEC declara que los hogares gozan siempre de autonomía de decisión en el ejercicio de su función principal y se consideran unidades institucionales aunque no dispongan de un conjunto completo de cuentas. Sin esa convención el sistema no podría registrar al consumidor." },
            { q: "Una empresa pública de transporte ingresa 120 en billetes y tiene 400 de costes. ¿A qué sector va?", a: "A las administraciones públicas, S.13. Cubre el 30 % de sus costes, por debajo del umbral del 50 %, de modo que el billete no es un precio económicamente significativo: no refleja ánimo de cubrir costes ni condiciona la oferta. Facturar no convierte a una entidad en productor de mercado." },
            { q: "¿Cuenta una aportación presupuestaria como venta al aplicar la regla del 50 %?", a: "No. Es una transferencia, así que entra en el denominador de los costes y no en el numerador de las ventas. Si un ente ingresa 300 de tarifas y 500 de aportación pública, su cobertura se mide sobre los 300. Por eso inyectar dinero público no mejora la ratio ni evita la reclasificación." },
            { q: "La filial española de una multinacional alemana, ¿es residente?", a: "Sí, porque su centro de interés económico predominante está en territorio español: produce allí de forma duradera. El criterio es dónde se desarrolla la actividad, no de quién es el capital. Por la misma razón, una sucursal en Londres de un banco español no es residente y sus operaciones van al S.2." },
            { q: "¿Por qué las remesas de un emigrante y el salario de un temporero se registran en cuentas distintas?", a: "Porque el temporero sigue siendo no residente y lo que cobra es remuneración de asalariados con el exterior (D.1), que afecta a la renta nacional. El emigrante de larga duración es residente en el país de destino, de modo que lo que envía a su familia es una transferencia corriente (D.75) y entra más abajo en la secuencia, afectando a la renta disponible y no a la nacional." },
            { q: "¿Qué es una cuasisociedad y por qué importa?", a: "Una entidad sin personalidad jurídica que lleva un conjunto completo de cuentas y actúa con autonomía frente a su propietario; se trata como una sociedad y se separa contablemente de él. Importa porque saca al negocio del sector hogares: su renta deja de ser renta mixta y pasa a registrarse como excedente de explotación y dividendos." },
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
              q: "Una eléctrica participada mayoritariamente por el Estado cubre el 92 % de sus costes con ventas. ¿En qué sector la clasifica el SEC?",
              opciones: [
                "Depende de si cotiza en bolsa",
                "En un sector mixto, en proporción a la participación pública",
                "En sociedades no financieras (S.11): el criterio es el comportamiento, no la propiedad",
                "En administraciones públicas (S.13), por ser de propiedad pública",
              ],
              correcta: 2,
              porque: [
                "La cotización no interviene en el criterio de sectorización.",
                "El SEC no reparte una unidad entre sectores: la asigna entera a uno.",
                "Lo que decide es si cubre con ventas al menos la mitad de sus costes de producción. Con el 92 %, es claramente productor de mercado.",
                "La propiedad no clasifica: una asociación privada financiada con subvenciones puede ser administración pública, y una empresa pública que vende a precios significativos no lo es.",
              ],
            },
            {
              q: "La filial española de una multinacional alemana produce en Valladolid. ¿Entra su producción en el PIB español?",
              opciones: [
                "Sí: es una unidad residente en España, y la residencia no es la nacionalidad del capital",
                "No: el beneficio revierte a la matriz alemana",
                "Solo si más de la mitad de su plantilla es española",
                "Sí, en la parte correspondiente al capital español",
              ],
              correcta: 0,
              porque: [
                "El criterio es el centro de interés económico predominante. A la inversa, una empresa de capital español que produce en Marruecos no aporta al PIB español.",
                "El destino del beneficio se registra después, como renta de la propiedad pagada al exterior; no afecta a dónde se produjo.",
                "La nacionalidad de la plantilla es irrelevante para la residencia de la unidad.",
                "El PIB no se reparte por origen del capital: se atribuye al territorio donde tiene lugar la producción.",
              ],
            },
            {
              q: "Al aplicar la regla del 50 %, ¿cómo se tratan las aportaciones presupuestarias que recibe una entidad?",
              opciones: [
                "Como ventas, ya que financian la actividad",
                "Se excluyen del cálculo por completo",
                "Como ventas, pero ponderadas al 50 %",
                "Van al denominador, con los costes: una transferencia pública no es una venta",
              ],
              correcta: 3,
              porque: [
                "Contarlas como ventas invertiría el sentido de la regla, que pretende distinguir a quien se financia vendiendo de quien se financia con presupuesto.",
                "No se excluyen: forman parte de los recursos con que se cubren los costes.",
                "No hay ninguna ponderación intermedia en la regla.",
                "Por eso inyectar dinero público en una entidad no mejora su ratio: lo empeora, y puede acabar sacándola del sector de sociedades y metiendo su deuda en la pública.",
              ],
            },
            {
              q: "Una empresa pública de transporte ingresa 120 millones en billetes y tiene 400 de costes. ¿Es productor de mercado?",
              opciones: [
                "Depende de si la tarifa la fija la empresa o el regulador",
                "No: cubre el 30 % de sus costes, así que sigue siendo administración pública",
                "Sí, si los billetes se venden a través de canales comerciales",
                "Sí: cobra por sus servicios, luego vende",
              ],
              correcta: 1,
              porque: [
                "Quién fija la tarifa es un indicio y no la prueba: la prueba es el porcentaje de costes cubierto de forma continuada.",
                "El billete no es un precio económicamente significativo cuando deja tres cuartas partes del coste sin cubrir. Su déficit y su deuda computan como públicos.",
                "El canal de venta no interviene en el criterio.",
                "Facturar no convierte a una entidad en productor de mercado: lo que importa es si el precio cubre razonablemente el coste.",
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
            { ref: "SEC 2010, capítulos 1 y 2 — Reglamento (UE) 549/2013", nota: "las definiciones de unidad institucional, residencia y sector; es el texto normativo y conviene consultarlo directamente." },
            { ref: "Eurostat, Manual on Government Deficit and Debt", nota: "la casuística real de la regla del 50 %, el control y las colaboraciones público-privadas; de aquí salen las reclasificaciones." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el capítulo sobre sectores explica por qué el sistema está construido así antes de explicar cómo se aplica." },
            { ref: "INE, Cuentas no financieras de los sectores institucionales — notas metodológicas", nota: "qué fuentes alimentan cada sector en España y con qué calendario; útil para entender las revisiones." },
            { ref: "INE, Curso de Cuentas Nacionales — sesiones sobre sectores institucionales", nota: "material del propio compilador, con los criterios de sectorización aplicados a entidades españolas concretas." },
          ],
        },
      ],
    },
  ],
};
