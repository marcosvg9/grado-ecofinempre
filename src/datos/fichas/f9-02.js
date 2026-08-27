/* Ficha 9.02 — Analisis del entorno: PESTEL y cinco fuerzas. */

export default {
  codigo: "9.02",
  titulo: "Análisis del entorno: PESTEL y cinco fuerzas",
  nivel: 1,
  bloque: "Dirección de empresas",
  tiempo: "3 h",
  nucleo:
    "La rentabilidad media de un sector depende de su estructura, no del esfuerzo de sus empresas. Las cinco fuerzas identifican quién captura el valor que se genera en una cadena, y explican por qué hay sectores donde trabajar bien no basta para ganar dinero.",
  requiere: "2.06 Competencia perfecta · 2.07 Monopolio",
  abre: "9.03 Recursos y capacidades · 9.04 Estrategias competitivas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay sectores donde casi todas las empresas ganan dinero y sectores donde casi ninguna lo gana, de forma persistente durante décadas. Esa diferencia no se explica por la calidad de la gestión: se explica por la **estructura del sector**. El marco de Porter parte de esa observación y la convierte en un instrumento de diagnóstico.",
            "El **PESTEL** ordena el entorno general en seis dimensiones —político, económico, sociocultural, tecnológico, ecológico y legal— y su función es de checklist: obliga a mirar sistemáticamente factores que afectan a todas las empresas de un sector y que es fácil pasar por alto. No jerarquiza ni pondera, así que su utilidad depende por completo de que se identifique **cuáles de esos factores son relevantes** para el negocio concreto y con qué horizonte.",
            "Las **cinco fuerzas** analizan el entorno específico y son mucho más analíticas. La **rivalidad** entre competidores existentes; la **amenaza de entrada** de nuevos competidores; el **poder de negociación de los proveedores**; el de los **clientes**; y la amenaza de **productos sustitutivos**. Cada una de ellas es un canal por el que se escapa rentabilidad del sector, y su intensidad conjunta determina cuánta queda para las empresas que operan en él.",
            "La idea de fondo es que **el valor generado en una cadena se reparte, y la estructura decide cómo**. Una aerolínea opera en un sector con fabricantes concentrados de aviones, aeropuertos con poder local, sindicatos organizados, clientes que comparan precios en segundos y competencia intensa. Todo el valor que crea acaba capturado por otros. Una empresa que gestiona un aeropuerto en régimen de concesión está en el mismo sector aéreo y en una posición estructural opuesta.",
            "**Lo que el marco no captura** conviene decirlo desde el principio. Está pensado para sectores definidos y estables, y funciona peor cuando las fronteras se difuminan o cuando la competencia es entre ecosistemas en lugar de entre empresas. No recoge bien el papel de los complementadores —agentes que aumentan el valor del producto sin ser proveedores ni clientes—, ni la dinámica de plataformas con efectos de red, donde el ganador puede consolidar una posición que ninguna de las cinco fuerzas anticipaba.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Fuerza", "Aumenta cuando", "Indicador observable"],
          filas: [
            { nom: "Rivalidad interna", sub: "Competencia entre los que ya están", cols: ["Muchos competidores similares, crecimiento bajo, costes fijos altos", "Guerra de precios, márgenes decrecientes"] },
            { nom: "Amenaza de entrada", sub: "Presión de quien podría entrar", cols: ["Barreras bajas: poco capital, sin marca, sin regulación", "Entradas frecuentes, márgenes que no se sostienen"] },
            { nom: "Poder de proveedores", sub: "Capturan valor por la vía del coste", cols: ["Pocos, insustituibles, con marca propia", "Peso del insumo en el coste, imposibilidad de cambiar"] },
            { nom: "Poder de clientes", sub: "Capturan valor por la vía del precio", cols: ["Concentrados, informados, con bajo coste de cambio", "Concentración de ventas, presión sobre precios"] },
            { nom: "Sustitutivos", sub: "Ponen techo al precio del sector", cols: ["Alternativas que cubren la misma necesidad", "Elasticidad cruzada, cambios tecnológicos"] },
          ],
          nota: "Cada fuerza se evalúa preguntando **cuánta rentabilidad se escapa por ese canal**, no si existe. Todos los sectores tienen proveedores; la pregunta es si esos proveedores pueden apropiarse del margen.",
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
            { nom: "Índice de Herfindahl", sub: "La medida estándar de concentración.", cols: ["$\\mathrm{HHI} = \\sum (\\text{cuota de mercado en \\%})^2$"] },
            { nom: "Ratio de concentración", sub: "Más simple y menos informativo.", cols: ["CR4 = suma de las cuatro mayores cuotas"] },
            { nom: "Margen precio-coste (Lerner)", sub: "La medida directa de poder de mercado.", cols: ["L = (P − CMg) / P"] },
            { nom: "Dependencia de un cliente", sub: "Indicador operativo de poder de negociación.", cols: ["Concentración = ventas al mayor cliente / ventas totales"] },
            { nom: "Coste de cambio", sub: "La barrera que más protege en la práctica.", cols: ["CC = coste económico + tiempo + riesgo de cambiar de proveedor"] },
            { nom: "Rentabilidad estructural del sector", sub: "Lo que el marco pretende explicar.", cols: ["ROIC medio del sector − WACC medio"] },
          ],
          nota: "El **HHI** va de casi cero en un sector atomizado a 10.000 en un monopolio. Las autoridades de competencia suelen considerar poco concentrado por debajo de 1.500, moderadamente entre 1.500 y 2.500, y muy concentrado por encima.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: medir la concentración",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos sectores con la misma cifra de negocios total y estructuras opuestas.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Sector A: concentrado", "Cuota", "$\\text{Cuota}^2$"],
          filas: [
            ["Empresa 1", "30 %", "900"],
            ["Empresa 2", "25 %", "625"],
            ["Empresa 3", "20 %", "400"],
            ["Empresa 4", "15 %", "225"],
            ["Empresa 5", "10 %", "100"],
            { celdas: ["HHI", "CR4 = 90 %", "2.250"], clase: "total" },
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Sector B: fragmentado", "Cuota", "$\\text{Cuota}^2$"],
          filas: [
            ["20 empresas iguales", "5 % cada una", "25 cada una"],
            { celdas: ["HHI", "CR4 = 20 %", "500"], clase: "total" },
          ],
          nota: "El sector A está **moderadamente concentrado** y el B, muy fragmentado. La concentración no garantiza rentabilidad —cinco empresas pueden destruirse mutuamente en una guerra de precios— pero la fragmentación **sí dificulta** sostener márgenes, porque cualquier intento de subir precios encuentra veinte competidores dispuestos a no seguirlo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**El poder de los clientes, cuantificado.** Un fabricante factura 40 millones y su mayor cliente supone 14 de ellos, un **35 %**. Si ese cliente exige una rebaja del 5 % en el precio, el impacto directo sobre el margen es de 700.000 €. Con un margen de explotación previo del 6 % —2,4 millones— la rebaja se lleva casi el **30 % del beneficio operativo**.",
            "Y la pregunta relevante no es si aceptar la rebaja, sino **qué pasa si no se acepta**. Perder ese cliente supondría eliminar 14 millones de ventas sobre una estructura de costes fijos dimensionada para 40. Esa asimetría es exactamente lo que significa «poder de negociación del cliente», y se puede medir antes de que llegue la conversación.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Ventas", "Margen de explotación", "Variación"],
          filas: [
            ["Situación actual", "40,0 M€", "2,40 M€", "—"],
            ["Aceptar rebaja del 5 % al cliente principal", "39,3 M€", "1,70 M€", "−29 %"],
            { celdas: ["Perder el cliente principal", "26,0 M€", "−0,4 M€", "pérdidas"], clase: "total" },
          ],
          nota: "Suponiendo que los costes fijos no se ajustan de inmediato. **La empresa acepta la rebaja porque la alternativa es peor**, y esa es la definición operativa de no tener poder de negociación. El diagnóstico estratégico no es «negociar mejor», es reducir la concentración de clientes.",
        },
      ],
    },
    {
      titulo: "Caso práctico: por qué las aerolíneas no ganan dinero",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El transporte aéreo es el ejemplo canónico de sector estructuralmente poco rentable, y lo interesante es que lo es pese a ser un negocio enorme, tecnológicamente sofisticado y con demanda creciente durante décadas. Las cinco fuerzas explican por qué.",
            "**Rivalidad extrema.** Costes fijos muy altos —el avión vuela lleno o vacío con un coste casi idéntico— y un producto perecedero: el asiento no vendido de un vuelo que despega no se recupera. Esa combinación empuja a vender el último asiento a cualquier precio por encima del coste variable, que es casi cero. Es el apalancamiento operativo de la ficha 6.04 llevado al extremo.",
            "**Proveedores concentrados.** Dos fabricantes de aviones comerciales grandes, aeropuertos con posición dominante en su ubicación, sistemas de reserva, combustible sujeto al precio internacional, personal de vuelo sindicado. Casi ningún insumo relevante admite negociación real.",
            "**Clientes con poder pese a estar atomizados.** Los comparadores en línea convirtieron un mercado opaco en uno perfectamente transparente, con coste de cambio prácticamente nulo. Un pasajero que compra por precio no es fiel a nada.",
            "**Barreras de entrada moderadas.** Los aviones se arriendan, la financiación existe y la liberalización eliminó buena parte de las restricciones. Y hay una barrera de salida alta —los activos son específicos y las compañías se reestructuran en lugar de desaparecer—, lo que mantiene capacidad excedente en el sector.",
            "**Lo que sí funciona dentro del sector** confirma el diagnóstico. Las compañías rentables lo han sido por alterar alguna fuerza, no por gestionar mejor la misma posición: modelos de bajo coste con estructura radicalmente distinta, dominio de aeropuertos secundarios donde la fuerza del proveedor se invierte, programas de fidelización que crean coste de cambio. **La conclusión práctica del marco no es diagnosticar y resignarse, sino identificar qué fuerza concreta se puede modificar.**",
            "Y el reverso también instruye: los negocios adyacentes al transporte aéreo —gestión aeroportuaria, sistemas de reserva, arrendamiento de aeronaves, mantenimiento— han sido sistemáticamente más rentables que volar. **El valor de la cadena existe; simplemente no se queda en la aerolínea.**",
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
            { t: "Rellenar el PESTEL como un formulario", d: "Listar veinte factores sin ponderar ni identificar cuáles afectan de verdad al negocio produce un documento voluminoso y estéril. La utilidad está en seleccionar los tres o cuatro determinantes y estimar su efecto, no en la exhaustividad." },
            { t: "Definir mal el sector", d: "Todo el análisis depende de dónde se trace la frontera. Una empresa de café puede analizarse en el sector de la restauración, en el de bebidas o en el de experiencias de consumo, y las cinco fuerzas dan resultados distintos. Definir el sector demasiado estrecho oculta sustitutivos; demasiado ancho, diluye el diagnóstico." },
            { t: "Confundir concentración con rentabilidad", d: "Un sector concentrado puede ser ruinoso si las empresas compiten en precio con costes fijos altos. La concentración facilita la rentabilidad pero no la garantiza; lo que importa es la intensidad conjunta de las cinco fuerzas." },
            { t: "Analizar el sector y no la posición dentro de él", d: "Hay empresas muy rentables en sectores pésimos y viceversa. Las cinco fuerzas explican la media del sector; explicar la desviación respecto a esa media es el objeto de la ficha 9.03, sobre recursos y capacidades." },
            { t: "Tratar el análisis como una foto fija", d: "Las fuerzas cambian: una tecnología nueva crea sustitutivos, una regulación levanta o elimina barreras, un comprador se consolida. El valor del marco está en anticipar hacia dónde se mueve la estructura, no en describir la actual." },
            { t: "Olvidar a los complementadores", d: "Agentes que aumentan el valor del producto sin ser proveedores ni clientes —desarrolladores de aplicaciones para una plataforma, fabricantes de accesorios— pueden ser determinantes y el marco original no los recoge. En negocios de plataforma, esa omisión es grave." },
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
            "El reparto del valor a lo largo de una cadena, que es el objeto de las cinco fuerzas, se puede observar de forma agregada en las tablas input-output.",
          ],
          lista: [
            "Las **tablas de origen y destino** muestran qué compra cada rama a cada otra rama, es decir, la estructura completa de consumos intermedios de una economía. Es el mapa de las cadenas de valor a escala agregada.",
            "El **valor añadido bruto por rama** dividido entre su producción indica qué proporción del valor se queda en cada eslabón. Las ramas con VAB alto sobre producción retienen valor; las que compran mucho y añaden poco lo trasladan.",
            "La descomposición del VAB entre **remuneración de asalariados (D.1)** y **excedente bruto de explotación (B.2)** muestra el reparto entre trabajo y capital dentro de cada rama, y su comparación entre sectores refleja diferencias estructurales de poder de negociación.",
            "El **excedente sobre producción por rama** es la aproximación agregada más cercana a la rentabilidad estructural de un sector, y sus diferencias persistentes entre ramas son precisamente el fenómeno que el marco de Porter intenta explicar a nivel micro.",
            "Los indicadores de **concentración** por rama se elaboran a partir de directorios de empresas —en España, el DIRCE— y permiten contrastar la relación entre estructura de mercado y márgenes con datos reales.",
          ],
          cierre:
            "La conexión es más directa de lo que parece: las cinco fuerzas describen a nivel de empresa el mismo fenómeno que las tablas input-output miden a nivel de rama, que es dónde se queda el valor generado en una cadena productiva.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Cuatro empresas con cuotas del 40, 30, 20 y 10 %. ¿HHI?", a: "1.600 + 900 + 400 + 100 = 3.000. Es un sector muy concentrado según los umbrales habituales de las autoridades de competencia." },
            { q: "¿Por qué la fragmentación dificulta sostener márgenes?", a: "Porque cualquier intento de subir precios encuentra competidores dispuestos a no seguirlo y capturar la cuota. Con veinte empresas, la disciplina de precios es prácticamente imposible sin acuerdos, que además serían ilegales." },
            { q: "Un cliente supone el 35 % de las ventas y exige una rebaja del 5 %. ¿Por qué se acepta?", a: "Porque la alternativa —perderlo— dejaría 14 millones de ventas menos sobre una estructura de costes dimensionada para el volumen anterior, con pérdidas inmediatas. Esa asimetría es la definición operativa de poder de negociación del cliente." },
            { q: "¿Qué explican las cinco fuerzas y qué no?", a: "Explican la rentabilidad media de un sector. No explican por qué unas empresas del mismo sector son mucho más rentables que otras, que es el objeto del análisis de recursos y capacidades de la ficha 9.03." },
            { q: "¿Dónde se observa el reparto del valor de una cadena en contabilidad nacional?", a: "En las tablas de origen y destino, que muestran los consumos intermedios entre ramas, y en el valor añadido bruto sobre producción de cada rama, que indica qué proporción del valor retiene cada eslabón." },
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
            { ref: "Porter, Estrategia competitiva", nota: "el texto original de las cinco fuerzas. Sigue siendo la mejor exposición y es más matizado que sus resúmenes." },
            { ref: "Grant, Dirección estratégica", nota: "el manual que mejor integra análisis del entorno y de recursos, con casos y con la crítica al marco." },
            { ref: "Brandenburger y Nalebuff, Coopetencia", nota: "la incorporación de los complementadores como sexta fuerza, útil para negocios de plataforma." },
            { ref: "INE, Directorio Central de Empresas (DIRCE) y tablas input-output", nota: "los datos con los que medir concentración y reparto del valor por rama en España." },
          ],
        },
      ],
    },
  ],
};
