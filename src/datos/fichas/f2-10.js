/* Ficha 2.10 — Fallos de mercado: externalidades, bienes publicos, informacion. */

export default {
  codigo: "2.10",
  titulo: "Fallos de mercado: externalidades, bienes públicos, información",
  nivel: 3,
  bloque: "Microeconomía",
  tiempo: "5 h",
  nucleo:
    "Selección adversa y riesgo moral explican por qué muchos mercados no existen. Un fallo de mercado no es que el resultado no guste: es que existe un intercambio que mejoraría a todos y no llega a producirse, y cada tipo de fallo señala exactamente qué supuesto de la ficha 2.06 se ha roto.",
  requiere: "2.06 Competencia perfecta · 2.07 Monopolio · 1.04 Excedente y bienestar",
  abre: "10.04 Estado de bienestar · 10.05 Imposición óptima · 8.01 Bancos e intermediación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Conviene empezar por lo que **no** es un fallo de mercado, porque el término se usa con enorme laxitud. No lo es que el resultado sea desigual: el equilibrio competitivo de la ficha 2.06 era eficiente y podía ser tremendamente desigual a la vez. No lo es que un precio suba. **Un fallo de mercado es una situación en la que existe un intercambio que mejoraría a alguien sin empeorar a nadie y el mercado, por sí solo, no lo realiza.** Con esa definición estricta, los casos se ordenan según qué supuesto del modelo competitivo se rompe: el poder de mercado de la ficha 2.07 rompe que la empresa sea precio-aceptante; las externalidades rompen que el precio recoja todos los costes y beneficios; los bienes públicos rompen la exclusión; y la información asimétrica rompe que ambas partes sepan qué están intercambiando.",
            "Una **externalidad** existe cuando una acción afecta al bienestar de un tercero sin que ese efecto pase por un precio. El caso negativo clásico es la contaminación: quien produce soporta su coste privado, pero la sociedad soporta además un daño que no aparece en la contabilidad de nadie. Como la decisión se toma comparando el beneficio con el **coste privado** y no con el social, **se produce más de lo eficiente**. Con externalidades positivas —vacunarse, formarse, investigar— pasa lo simétrico: quien decide no captura todo el beneficio que genera, y por eso se produce menos de lo eficiente. Nótese que el óptimo **no es cero contaminación**: es el punto donde el daño marginal iguala al beneficio marginal de la actividad, y eliminar la actividad por completo suele ser tan ineficiente como no regularla.",
            "Las soluciones se ordenan solas. El **impuesto pigouviano** consiste en cobrar por unidad exactamente el daño marginal, con lo que el coste privado pasa a coincidir con el social y el mercado alcanza el óptimo por sí mismo. Los **permisos negociables** fijan la cantidad total y dejan que el precio lo determine el mercado: son equivalentes al impuesto bajo certeza, y la elección entre uno y otro depende de si interesa controlar la cantidad o el precio. Y el **teorema de Coase** aporta la observación más profunda: si los derechos están bien definidos y negociar no cuesta nada, las partes alcanzan el óptimo por acuerdo privado **con independencia de a quién se le asignen los derechos**, que solo afecta al reparto. Su valor práctico es indicar dónde mirar: cuando el acuerdo privado no ocurre, el problema son los **costes de transacción** —muchas partes, difíciles de identificar, imposibles de coordinar—, y esa es exactamente la situación de casi cualquier externalidad ambiental relevante.",
            "Un **bien público puro** tiene dos propiedades a la vez: **no rivalidad** —que yo lo consuma no reduce lo disponible para ti— y **no exclusión** —no puede impedirse su uso a quien no paga—. La defensa nacional, un faro, la investigación básica. La primera propiedad implica que la demanda agregada se obtiene sumando **verticalmente** las disposiciones a pagar, y no horizontalmente como en un bien privado: todos consumen la misma cantidad y lo que se suma es cuánto vale para cada uno. La segunda implica que **nadie tiene incentivo a revelar lo que vale para él**, porque puede disfrutarlo igual sin pagar. Ese es el problema del **parásito**, y su consecuencia es que la provisión voluntaria queda muy por debajo del óptimo o directamente no se produce. Los **recursos comunes** son el caso cruzado —rivales pero no excluibles— y su fallo es el opuesto, la sobreexplotación de la tragedia de los comunes, sobre la que Ostrom mostró que existen soluciones comunitarias intermedias entre el mercado y el Estado.",
            "La **información asimétrica** es el fallo más interesante porque no distorsiona el mercado: **lo destruye**. En la **selección adversa** la asimetría existe antes de contratar: el vendedor conoce la calidad y el comprador no. Como el comprador solo puede pagar el valor medio, el vendedor de calidad alta se retira, la calidad media del resto baja, el precio ofrecido baja también, y el proceso se realimenta hasta que **solo se intercambia lo peor o no se intercambia nada**. Es el argumento de Akerlof, y su conclusión es la del núcleo de la ficha: hay mercados que sencillamente **no existen** por este motivo, y su ausencia no se observa mirando precios. Las respuestas son la **señalización** —la parte informada emite una señal costosa que solo le compensa si dice la verdad: garantía, reputación, titulación— y el **filtrado**, donde la parte desinformada diseña un menú de contratos que induce a revelar el tipo.",
            "En el **riesgo moral** la asimetría aparece después de contratar: una parte toma acciones que la otra no observa y que alteran el resultado. El asegurado con cobertura total tiene menos incentivo a prevenir; el directivo con el capital de otros no soporta las consecuencias de sus decisiones —es el problema de agencia de la ficha 9.01—; el banco con depósitos garantizados puede asumir más riesgo del que asumiría con su dinero, que es el argumento central de la regulación bancaria de la ficha 8.01. La solución nunca es eliminar el problema, porque exigiría observar lo inobservable: consiste en **diseñar el contrato para que las dos partes compartan el resultado** —franquicias, copagos, retribución variable, capital propio comprometido—, aceptando a cambio un reparto de riesgo peor. Ese intercambio entre **incentivos y aseguramiento** es irreducible, y es la razón de que ningún seguro cubra el cien por cien.",
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
            { nom: "Coste marginal social", sub: "El privado más el daño que soportan terceros.", cols: ["CMgS = CMgP + daño marginal externo"] },
            { nom: "Óptimo con externalidad", sub: "No implica actividad cero.", cols: ["Beneficio marginal = CMgS"] },
            { nom: "Impuesto pigouviano", sub: "Internaliza el daño en la decisión privada.", cols: ["t = daño marginal en el óptimo"] },
            { nom: "Teorema de Coase", sub: "La asignación de derechos afecta al reparto, no a la eficiencia.", cols: ["Costes de transacción nulos $\\Rightarrow$ acuerdo eficiente"] },
            { nom: "Bien privado: demanda agregada", sub: "Cada uno consume una cantidad distinta al mismo precio.", cols: ["Suma horizontal: $Q = \\sum_i q_i(p)$"] },
            { nom: "Bien público: demanda agregada", sub: "Todos consumen lo mismo; se suma cuánto vale.", cols: ["Suma vertical: $P(Q) = \\sum_i p_i(Q)$"] },
            { nom: "Condición de Samuelson", sub: "La regla de provisión eficiente de un bien público.", cols: ["$\\sum_i \\mathrm{RMS}_i = \\mathrm{CMg}$ de provisión"] },
            { nom: "Selección adversa", sub: "Si se cumple, el tipo alto se retira del mercado.", cols: ["Valor medio ofrecido < valor de reserva del tipo alto"] },
            { nom: "Franquicia que restaura el incentivo", sub: "El asegurado debe soportar la mejora que aporta prevenir.", cols: ["$(p_{\\text{alta}} - p_{\\text{baja}})\\,F \\geq$ coste de prevenir"] },
            { nom: "Intercambio de la agencia", sub: "Más incentivo implica siempre más riesgo soportado.", cols: ["Incentivos ⟷ aseguramiento"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: los tres fallos, con cifras",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Primero, una externalidad negativa.** Volvemos al mercado de las fichas anteriores: demanda **P = 100 − Q** y coste marginal privado **20**. Supongamos ahora que cada unidad producida genera un daño a terceros de **20**, de modo que el coste marginal social es **40**. El mercado competitivo no ve ese daño y produce 80 unidades; el óptimo social son 60.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 100], y: [0, 100] },
          marcasX: [0, 20, 40, 60, 80, 100],
          marcasY: [0, 20, 40, 60, 80, 100],
          areas: [
            { puntos: [[60, 40], [80, 40], [80, 20]], color: "alerta" },
          ],
          series: [
            {
              nombre: "Demanda",
              color: "tinta2",
              grosor: 2.2,
              etiquetaEn: [88, 12],
              puntos: [[0, 100], [100, 0]],
            },
            {
              nombre: "Coste social",
              color: "alerta",
              grosor: 2.2,
              etiquetaEn: [100, 40],
              puntos: [[0, 40], [100, 40]],
            },
            {
              nombre: "Coste privado",
              color: "acento",
              grosor: 2.2,
              etiquetaEn: [100, 20],
              puntos: [[0, 20], [100, 20]],
            },
          ],
          puntos: [
            { x: 60, y: 40, etiqueta: "óptimo social", guias: true },
            { x: 80, y: 20, etiqueta: "mercado", guias: true },
          ],
          nota: "La distancia vertical entre las dos rectas horizontales es el **daño externo de 20** que el productor no paga y que por tanto no aparece en ninguna decisión privada. El mercado se equilibra donde la demanda corta al coste **privado**, en 80 unidades; el óptimo está donde corta al coste **social**, en 60. El triángulo sombreado son las veinte unidades que se producen pese a **costar socialmente más de lo que valen para quien las compra**, y su superficie es la pérdida de eficiencia de 200. Lo que hace el impuesto pigouviano de 20 es exactamente **elevar la recta que la empresa ve hasta la que la sociedad soporta**, con lo que el equilibrio privado pasa a coincidir con el social. El triángulo desaparece, y de paso se recaudan 1.200.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Mercado sin corregir", "Óptimo social", "Con impuesto de 20"],
          filas: [
            ["Precio pagado por el comprador", "20", "40", "40"],
            ["Cantidad", "80", "60", "60"],
            ["Daño externo total", "1.600", "1.200", "1.200"],
            ["Recaudación", "0", "—", "1.200"],
            { celdas: ["Pérdida de eficiencia", "200", "0", "0"], clase: "total" },
          ],
          nota: "Dos observaciones. La primera: el óptimo **no es dejar de producir**, sino producir 60 en vez de 80; las unidades hasta la sexagésima valen para el comprador más de lo que cuestan socialmente. La segunda: la pérdida de eficiencia es de **200**, mucho menor que el daño total de 1.600, porque la mayor parte de ese daño corresponde a producción que sigue siendo eficiente realizar. Confundir el daño con la pérdida de eficiencia es el error habitual al cuantificar el coste de una externalidad. El impuesto de 20 por unidad hace que el productor decida como si el daño fuera suyo, y el mercado alcanza el óptimo **sin que el regulador tenga que saber nada sobre los costes de la empresa**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Segundo, un bien público.** Tres vecinos comparten un camino y valoran su iluminación según **p = 30 − Q** cada uno, donde Q son los puntos de luz. Instalar cada punto cuesta **60**. Como el alumbrado no es rival, lo que hay que sumar es la disposición a pagar de los tres para cada cantidad: **90 − 3Q**. Igualando al coste marginal, el óptimo es **Q = 10**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Puntos instalados", "Valor social generado", "Coste", "Excedente neto"],
          filas: [
            ["Provisión voluntaria individual", "0", "0", "0", "0"],
            { celdas: ["Provisión eficiente (Samuelson)", "10", "750", "600", "150"], clase: "total" },
          ],
          nota: "Ningún vecino instala nada por su cuenta, y no por falta de civismo: para cada uno individualmente, el primer punto de luz vale 30 y cuesta 60. **Actúa racionalmente al no instalarlo.** Solo sumando las tres valoraciones —20 cada uno en el óptimo, 60 en total, exactamente el coste marginal— aparece la justificación. Y ahí surge el problema del parásito: si el reparto depende de lo que cada uno declare valorar, **todos tienen incentivo a declarar menos**, porque disfrutarán la luz igual. Por eso los bienes públicos se financian con impuestos y no con suscripción voluntaria: no es una preferencia ideológica, es la única forma de que se provean.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Tercero, la selección adversa.** Un mercado de coches de segunda mano con dos calidades, mitad y mitad. Un coche bueno vale **10.000** para su dueño y **12.000** para un comprador; uno malo, **4.000** y **6.000**. Con información completa **ambos se intercambiarían**, generando 2.000 de ganancia en cada operación. Pero el comprador no distingue la calidad.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Situación", "Precio máximo ofrecido", "Quién vende", "Ganancia del intercambio"],
          filas: [
            ["Información completa", "12.000 / 6.000", "Buenos y malos", "2.000 por coche"],
            ["Asimetría, primera ronda", "9.000", "Solo los malos", "El bueno se retira"],
            { celdas: ["Asimetría, tras ajustar", "6.000", "Solo los malos", "El mercado de coches buenos no existe"], clase: "total" },
          ],
          nota: "El comprador que no distingue calidades ofrece a lo sumo el valor esperado, **9.000**. A ese precio el dueño de un coche bueno, que lo valora en 10.000, **no vende**. El comprador lo anticipa, deduce que lo que queda en el mercado son coches malos y baja su oferta a 6.000. El resultado es que **el mercado de coches buenos desaparece**, y con él una ganancia de 2.000 por operación que era real. Nadie se ha comportado de forma irracional y nadie tiene poder de mercado: la asimetría de información basta para destruir un mercado entero. Por eso existen las garantías, las certificaciones independientes y la reputación del vendedor: **son tecnologías para crear la información que el mercado necesita para existir**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y el riesgo moral, en una línea de cálculo.** Un hogar afronta una pérdida posible de 5.000 con probabilidad del 10 %, reducible al 5 % con una precaución que cuesta 200. Sin seguro, prevenir sale a cuenta: 450 frente a 500. Con **cobertura total**, la precaución sigue costando 200 y ya no le ahorra nada, así que no la toma y la siniestralidad se dobla. Para que vuelva a interesarle prevenir, la **franquicia** debe cumplir que el ahorro esperado supere su coste: $0{,}05 F \\geq 200$, es decir $F \\geq 4.000$. Una franquicia de 2.000 no basta. Y ahí está el intercambio irreducible: la franquicia que restaura el incentivo es también la que deja al asegurado soportando un riesgo considerable. **No existe un contrato que asegure del todo y a la vez incentive del todo.**",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué no hay seguro privado de desempleo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Existen seguros privados para el coche, la casa, la salud, la vida e incluso para acontecimientos muy improbables. No existe, en cambio, un mercado privado de seguro contra la pérdida del empleo, pese a que es uno de los riesgos que más preocupa a la gente y por el que estaría dispuesta a pagar. Esa ausencia es el mejor ejemplo posible del núcleo de esta ficha: **el fallo no se manifiesta como un precio malo, sino como un mercado que no está**.",
            "**El primer obstáculo es la selección adversa.** Quien mejor conoce la probabilidad de perder su empleo es el propio trabajador: sabe si su empresa va mal, si su puesto es prescindible, si su sector se está contrayendo. Una aseguradora solo puede fijar una prima basada en características observables. A esa prima media, quien tiene el puesto seguro la considera cara y no contrata; quien lo tiene en el aire la considera barata y contrata. La cartera se llena de riesgos altos, la prima sube, y se repite el bucle exacto del ejemplo de los coches **hasta que el producto deja de ser viable**.",
            "**El segundo es el riesgo moral, y actúa en dos momentos.** Un trabajador asegurado tiene menos incentivo a esforzarse por conservar el empleo, y sobre todo tiene menos incentivo a aceptar rápidamente una oferta nueva. Ninguna de esas dos conductas es observable ni verificable por un asegurador privado, así que no puede escribirse en el contrato. Y el problema se agrava porque la pérdida de empleo **puede provocarse de común acuerdo** entre empresa y trabajador, lo que en el vocabulario del seguro equivale a poder causar el siniestro.",
            "**El tercero es que el riesgo está correlacionado, y esto es decisivo.** Un seguro funciona repartiendo un riesgo independiente entre muchos: no arden todas las casas el mismo día. El desempleo hace exactamente lo contrario: en una recesión **lo pierden muchos a la vez**, justo cuando la aseguradora tiene peores resultados en el resto de su negocio y peor acceso a financiación. La diversificación, que es el mecanismo básico del seguro y de la ficha 8.05, no funciona con un riesgo macroeconómico.",
            "**De ahí que este riesgo lo cubra el Estado, y las razones son técnicas antes que ideológicas.** La afiliación obligatoria elimina la selección adversa de raíz, porque nadie puede autoexcluirse. La capacidad de endeudarse permite pagar prestaciones en recesión y recuperar el equilibrio en expansión, que es justo lo que un asegurador privado no puede hacer. Y frente al riesgo moral se emplean exactamente los instrumentos de la ficha: **cobertura parcial** —una tasa de reposición inferior al cien por cien, que es una franquicia—, **duración limitada**, que concentra el incentivo a buscar, y **condicionalidad** en forma de obligación de búsqueda activa, que es un intento de verificar lo inobservable.",
            "**Y el intercambio permanece, no se resuelve.** Cada parámetro del sistema —cuánto se cubre, durante cuánto tiempo, con qué exigencias— es una posición concreta sobre la línea que separa asegurar mejor de incentivar mejor. No existe un ajuste que domine a los demás, y por eso el diseño de las prestaciones por desempleo es una discusión permanente en cualquier país. La ficha 10.04 examina cómo está calibrado el caso español.",
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
            { t: "Llamar fallo de mercado a cualquier resultado que no guste", d: "Un fallo de mercado es que no se realice un intercambio mutuamente beneficioso. Que el resultado sea desigual no lo es: el equilibrio competitivo de la ficha 2.06 era eficiente y podía ser muy desigual. Confundir eficiencia con equidad hace que la palabra pierda todo poder de diagnóstico." },
            { t: "Creer que el óptimo con externalidad negativa es eliminar la actividad", d: "El óptimo iguala el beneficio marginal al coste marginal social, no lleva la cantidad a cero. En el ejemplo, la producción eficiente cae de 80 a 60, no a nada. Prohibir suele ser tan ineficiente como no regular." },
            { t: "Confundir el daño externo total con la pérdida de eficiencia", d: "En el ejemplo el daño es 1.600 y la pérdida de eficiencia 200. La mayor parte del daño corresponde a producción que sigue siendo eficiente realizar, porque el comprador la valora por encima del coste social. Solo el exceso sobre el óptimo es ineficiencia." },
            { t: "Sumar horizontalmente las demandas de un bien público", d: "Como todos consumen la misma cantidad, lo que se suma es la disposición a pagar de cada uno por esa cantidad: la suma es vertical. La suma horizontal es la de los bienes privados de la ficha 2.02, y aplicarla aquí infraestima el óptimo de forma grosera." },
            { t: "Tratar el problema del parásito como un problema moral", d: "En el ejemplo del alumbrado, ningún vecino instala nada porque para cada uno individualmente el punto de luz vale 30 y cuesta 60. Es una conducta plenamente racional. La provisión pública no corrige un defecto de carácter, corrige una estructura de incentivos." },
            { t: "Confundir selección adversa con riesgo moral", d: "La selección adversa es información oculta antes de contratar: no sé con quién estoy contratando. El riesgo moral es acción oculta después: no observo lo que hace la otra parte. Los remedios son distintos —señalización y filtrado en el primer caso, contratos con riesgo compartido en el segundo— y confundirlos lleva a aplicar la solución equivocada." },
            { t: "Suponer que si un mercado no existe es porque no hay demanda", d: "Puede no existir precisamente porque la asimetría de información lo impide, como en el seguro de desempleo o en el mercado de coches buenos del ejemplo. La ausencia de un mercado es un dato tan informativo como su precio, y mucho más difícil de observar." },
            { t: "Invocar el teorema de Coase para concluir que no hace falta regular", d: "El teorema exige derechos bien definidos y costes de transacción nulos. Su utilidad práctica es la contraria a la que suele dársele: indica que cuando hay muchas partes difusas —que es el caso de casi toda externalidad ambiental— el acuerdo privado no se producirá, y por eso hay que intervenir." },
            { t: "Dar por hecho que identificar un fallo justifica la intervención", d: "La intervención tiene sus propios costes e imperfecciones: información limitada del regulador, captura, distorsiones de los impuestos que la financian. La comparación relevante es entre un mercado imperfecto y una intervención imperfecta, no entre el mercado real y un ideal." },
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
            "Los tres fallos de esta ficha tienen un tratamiento contable muy desigual, y conocerlo evita pedirle a las cuentas nacionales respuestas que no pueden dar.",
          ],
          lista: [
            "Las **externalidades no se registran**. El PIB mide transacciones, y el daño ambiental no es una transacción: no se descuenta del valor de la producción que lo genera. Es la crítica más antigua y más sólida al agregado, y no es un error de medición sino una consecuencia directa de qué se ha decidido medir.",
            "La respuesta estadística son las **cuentas satélite medioambientales** del marco SEEA, que el INE elabora para España: cuentas de emisiones a la atmósfera, de flujos de materiales, de impuestos ambientales y de gasto en protección del medio ambiente. Son coherentes con las cuentas nacionales pero **se presentan aparte**, precisamente porque valorar el daño exige supuestos que el núcleo del sistema no quiere incorporar.",
            "Los **impuestos pigouvianos** sí aparecen, como impuestos sobre los productos (D.214) cuando gravan el consumo de un bien concreto. Contablemente son indistinguibles de cualquier impuesto indirecto recaudatorio: **la finalidad correctora no deja rastro en la clasificación**, y la etiqueta de impuesto ambiental es una clasificación posterior por objeto imponible, no una categoría del SEC.",
            "Los **bienes públicos** encajan en la distinción entre consumo individual (P.31) y **consumo colectivo** (P.32): defensa, justicia, orden público, administración general. Al ser producción no de mercado se valora por **suma de costes**, con la convención vista en la ficha 2.05 de no incluir excedente neto de explotación. Es la traducción contable directa de que estos servicios no tienen precio de mercado que los valore.",
            "Y los **seguros sociales** —desempleo, pensiones, sanidad— son la respuesta institucional al fallo de información del caso práctico, y en las cuentas aparecen como cotizaciones sociales (D.61) y prestaciones (D.62). Son **transferencias, no producción**: no entran en el PIB, aunque su magnitud sea enorme. Confundir gasto en prestaciones con gasto que genera producción es un error frecuente al leer el peso del sector público.",
          ],
          cierre:
            "El punto que más rendimiento da es el primero: cuando alguien reprocha al PIB que no mide el bienestar, la respuesta correcta no es defenderlo ni sustituirlo, sino recordar que mide producción de mercado y que para lo demás existen cuentas satélite que ya están calculadas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Una actividad genera un daño externo de 20 por unidad. ¿Cuál es la producción eficiente?", a: "Aquella en la que el beneficio marginal iguala al coste marginal social, es decir, al privado más los 20 de daño. En el ejemplo pasa de 80 a 60 unidades, no a cero. Las unidades hasta la sexagésima siguen valiendo para el comprador más de lo que cuestan socialmente." },
            { q: "¿Por qué la demanda de un bien público se suma verticalmente?", a: "Porque al no ser rival todos consumen la misma cantidad, así que lo que hay que agregar es cuánto vale esa cantidad para cada uno. En un bien privado todos pagan el mismo precio y consumen cantidades distintas, y por eso allí la suma es horizontal." },
            { q: "Tres vecinos valoran cada punto de luz en 20 y cada punto cuesta 60. ¿Se instalará?", a: "No de forma voluntaria, y sin que nadie se comporte de manera irracional: para cada uno por separado, 20 es menos que 60. Socialmente sí conviene, porque la suma de las tres valoraciones iguala exactamente el coste. El problema del parásito impide además que declaren su valoración verdadera, y de ahí la financiación por impuestos." },
            { q: "¿Por qué desaparece el mercado de coches buenos con información asimétrica?", a: "Porque el comprador solo puede ofrecer el valor esperado, 9.000, que está por debajo de los 10.000 en que el dueño de un coche bueno lo valora. Este se retira, el comprador lo anticipa y rebaja su oferta a 6.000. Se pierde una ganancia real de 2.000 por operación sin que nadie actúe de forma irracional." },
            { q: "¿Por qué ninguna franquicia resuelve del todo el riesgo moral?", a: "Porque la franquicia que devuelve el incentivo a prevenir es también la que deja al asegurado soportando riesgo. En el ejemplo hace falta una franquicia de 4.000 sobre una pérdida de 5.000. Incentivos y aseguramiento se mueven en direcciones opuestas, y ese intercambio es irreducible mientras la conducta no sea observable." },
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
              q: "¿Qué es exactamente un fallo de mercado?",
              opciones: [
                "Que el precio se aleje del coste de producción",
                "Que el Estado tenga que intervenir para corregir el reparto",
                "Que exista un intercambio mutuamente beneficioso que no llega a realizarse",
                "Un resultado socialmente indeseable o injusto",
              ],
              correcta: 2,
              porque: [
                "El precio se aleja del coste marginal en el monopolio, que sí es un fallo, pero también en muchos casos que no lo son. La distancia al coste no es el criterio.",
                "La intervención es una posible respuesta, no la definición. Y hay fallos de mercado para los que la mejor respuesta es no intervenir.",
                "Es la definición operativa, y su virtud es que se puede comprobar: hay que señalar qué intercambio no ocurre y por qué. Sin eso, la etiqueta no dice nada.",
                "Que el resultado sea desigual no lo convierte en un fallo: el equilibrio competitivo puede ser eficientísimo y desigualísimo a la vez. Mezclarlo con el reparto vuelve el concepto inservible.",
              ],
            },
            {
              q: "Una fábrica genera una externalidad negativa. ¿Cuál es la producción eficiente?",
              opciones: [
                "Cero: la actividad debe eliminarse",
                "Aquella donde el beneficio marginal iguala al coste marginal social, que sigue siendo positiva",
                "La que iguale el daño total al beneficio total",
                "La misma que sin externalidad, corrigiendo después con indemnizaciones",
              ],
              correcta: 1,
              porque: [
                "El óptimo casi nunca es cero. En el ejemplo la producción eficiente cae de 80 a 60 unidades: se reduce, no se suprime.",
                "El daño se internaliza sumándolo al coste privado. La actividad sigue mereciendo la pena mientras lo que aporta supere lo que cuesta a la sociedad entera.",
                "Igualar totales en vez de marginales es el error de fondo: la decisión se toma en el margen, unidad a unidad.",
                "Indemnizar después redistribuye el daño pero no corrige el incentivo: la fábrica seguiría produciendo la cantidad que le conviene a ella.",
              ],
            },
            {
              q: "El daño externo de una actividad asciende a 1.600 y su pérdida de eficiencia a 200. ¿Por qué difieren tanto?",
              opciones: [
                "Porque la mayor parte del daño corresponde a producción que sigue siendo eficiente hacer",
                "Porque el daño se mide en términos brutos y la pérdida en netos",
                "Porque parte del daño es difícil de valorar",
                "Porque la pérdida de eficiencia solo cuenta el daño no compensado",
              ],
              correcta: 0,
              porque: [
                "Solo las 20 unidades que sobran generan daño sin beneficio compensatorio. Las 60 restantes causan daño y aportan más de lo que cuestan: eliminarlas empeoraría el resultado.",
                "Ambas magnitudes se miden de forma homogénea. La diferencia es conceptual, no de convención contable.",
                "La dificultad de valoración afectaría a la cifra del daño, no a la relación entre ambas magnitudes.",
                "La pérdida de eficiencia no depende de que haya compensación: mide intercambios que no deberían ocurrir y ocurren.",
              ],
            },
            {
              q: "¿En qué se diferencian selección adversa y riesgo moral?",
              opciones: [
                "La selección adversa afecta al vendedor y el riesgo moral al comprador",
                "La selección adversa se corrige con franquicias y el riesgo moral con señales",
                "La selección adversa es información oculta antes de contratar; el riesgo moral, acción oculta después",
                "En nada relevante: ambas son asimetrías de información",
              ],
              correcta: 2,
              porque: [
                "Cualquiera de las dos partes puede ser la informada en uno u otro caso: la asignación por rol no funciona.",
                "Es la correspondencia invertida: las franquicias atacan el riesgo moral y las señales, la selección adversa.",
                "No sé con quién estoy contratando frente a no observo lo que hace una vez contratado. La primera se combate con señales y filtros; la segunda, con franquicias e incentivos.",
                "Son asimetrías distintas y piden remedios distintos, así que confundirlas lleva a aplicar la solución equivocada.",
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
            { ref: "Stiglitz, La economía del sector público", nota: "el recorrido completo por los fallos de mercado y las razones y límites de la intervención pública; el manual de referencia de esta ficha." },
            { ref: "Akerlof, «The Market for Lemons»", nota: "quince páginas que fundaron la economía de la información; se lee de una sentada y contiene el argumento del ejemplo de los coches." },
            { ref: "Ostrom, El gobierno de los bienes comunes", nota: "la evidencia de que los recursos comunes admiten soluciones comunitarias estables, entre el mercado y el Estado." },
            { ref: "INE, cuentas satélite medioambientales y marco SEEA", nota: "cómo se mide en la práctica lo que el PIB deja fuera; enlaza con las fichas 10.06 y 10.07." },
          ],
        },
      ],
    },
  ],
};
