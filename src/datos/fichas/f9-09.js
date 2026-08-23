/* Ficha 9.09 — Operaciones y cadena de suministro. */

export default {
  codigo: "9.09",
  titulo: "Operaciones y cadena de suministro",
  nivel: 3,
  bloque: "Dirección de empresas",
  tiempo: "5 h",
  nucleo:
    "Capacidad, inventario y variabilidad forman un triángulo: reducir uno obliga a aumentar otro. De ahí que no exista una operación óptima en abstracto, solo la combinación coherente con lo que la estrategia promete al cliente.",
  requiere: "9.04 Estrategias competitivas · 6.02 Sistemas de costes",
  abre: "7.08 Gestión del circulante · 9.10 Innovación",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La dirección de operaciones tiene un resultado central que se enuncia como un triángulo de compromisos. Para atender una demanda variable con un nivel de servicio dado hacen falta tres cosas en alguna combinación: **capacidad** por encima de la media, **inventario** que absorba las puntas, o **tiempo de espera** que el cliente acepte. Reducir cualquiera de ellas obliga a aumentar otra. **No hay una configuración óptima universal**, hay la que corresponde a lo que la empresa ha prometido en la ficha 9.07.",
            "La **variabilidad** es el enemigo común y viene de dos fuentes: la demanda, que fluctúa, y el propio proceso, que no produce siempre igual. Su efecto es poco intuitivo: en un sistema con variabilidad, los tiempos de espera crecen de forma **no lineal** conforme la utilización se acerca al cien por cien. Una planta al 95 % de utilización tiene esperas mucho más que proporcionales a una al 85 %, y ese es el motivo por el que buscar la utilización máxima suele empeorar el servicio.",
            "La **teoría de restricciones** aporta la otra idea estructural: en toda cadena hay un **cuello de botella** que determina la capacidad del conjunto, y mejorar cualquier otro punto no aumenta la producción, solo acumula existencias delante del cuello. La consecuencia práctica contradice la intuición: **la eficiencia local puede destruir la eficiencia global**. Mantener ocupadas todas las máquinas produce inventario en curso, no producto terminado.",
            "En **inventarios** conviven dos lógicas. La del **lote económico** minimiza la suma de coste de pedido y coste de posesión, y da la raíz cuadrada como respuesta: duplicar la demanda solo aumenta el lote óptimo un 41 %. Y la del **stock de seguridad**, que no responde al coste de pedir sino a la incertidumbre: cuánto hay que tener de más para no romper el servicio ante una demanda o un plazo peores de lo esperado.",
            "La relación entre nivel de servicio y stock de seguridad es la que más sorprende. Pasar del 95 % al 99 % de servicio no cuesta un 4 % más de inventario: **cuesta en torno a un 50 % más**, porque el stock de seguridad depende del valor de la distribución normal asociado al nivel elegido, y ese valor crece con rapidez en la cola. Fijar un nivel de servicio del 99,9 % «porque suena bien» tiene un coste que casi nunca se calcula.",
            "En la **cadena de suministro** aparece un fenómeno propio: el **efecto látigo**. Pequeñas variaciones de la demanda final se amplifican conforme se remonta la cadena, porque cada eslabón ajusta su pedido incorporando su propia previsión y su propio stock de seguridad. Es un problema de información, no de gestión, y se corrige compartiendo datos de demanda real en lugar de pedidos.",
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
            { nom: "Ley de Little", sub: "Relación universal entre inventario, flujo y tiempo.", cols: ["Inventario = Tasa de flujo × Tiempo de ciclo"] },
            { nom: "Lote económico", sub: "Minimiza coste de pedido más coste de posesión.", cols: ["Q* = √(2 × D × S / H)"] },
            { nom: "Coste total del lote óptimo", sub: "Ambos costes se igualan en el óptimo.", cols: ["CT = √(2 × D × S × H)"] },
            { nom: "Stock de seguridad", sub: "Depende del nivel de servicio y de la incertidumbre.", cols: ["SS = z × σ_demanda × √(plazo de entrega)"] },
            { nom: "Punto de pedido", sub: "Cuándo lanzar la orden.", cols: ["PP = Demanda media × Plazo + SS"] },
            { nom: "Rotación de inventario", sub: "El puente con la ficha 6.06.", cols: ["Rotación = Coste de ventas / Inventario medio"] },
            { nom: "Capacidad del sistema", sub: "La restricción manda.", cols: ["Capacidad = capacidad del cuello de botella"] },
          ],
          nota: "La **ley de Little** se cumple siempre, sin supuestos sobre distribuciones. Es la relación más útil de toda la ficha porque permite deducir cualquiera de las tres magnitudes conociendo las otras dos, y aplicarla a inventarios, a pedidos en curso o a expedientes en tramitación.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: lote, servicio y ley de Little",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Caso A. Lote económico.** Un artículo tiene una demanda anual de **10.000 unidades**, cada pedido cuesta **100 €** en gestión y transporte, y mantener una unidad en almacén un año cuesta **5 €**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Resultado"],
          filas: [
            ["Lote económico", "√(2 × 10.000 × 100 / 5)", "632 unidades"],
            ["Número de pedidos al año", "10.000 / 632", "15,8"],
            ["Inventario medio", "632 / 2", "316 unidades"],
            ["Coste anual de pedido", "15,8 × 100", "1.581 €"],
            ["Coste anual de posesión", "316 × 5", "1.581 €"],
            { celdas: ["Coste total", "√(2 × 10.000 × 100 × 5)", "3.162 €"], clase: "total" },
          ],
          nota: "En el óptimo ambos costes **se igualan**, y esa es la comprobación del cálculo. Además la función es muy plana en el entorno del óptimo: pedir 500 o 750 unidades en lugar de 632 eleva el coste total menos de un 3 %. **Afinar el lote hasta la unidad no compensa**; equivocarse en un factor de dos, sí.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Caso B. El precio del nivel de servicio.** La demanda semanal media es de 200 unidades con una desviación típica de 50, y el plazo de entrega es de 4 semanas.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Nivel de servicio", "Valor z", "Stock de seguridad", "Frente al 95 %"],
          filas: [
            ["90 %", "1,28", "128 uds", "−22 %"],
            ["95 %", "1,64", "164 uds", "referencia"],
            ["98 %", "2,05", "205 uds", "+25 %"],
            ["99 %", "2,33", "233 uds", "+42 %"],
            { celdas: ["99,9 %", "3,09", "309 uds", "+88 %"], clase: "total" },
          ],
          nota: "Pasar del 95 % al 99,9 % de nivel de servicio **casi duplica el stock de seguridad** para mejorar la cobertura en menos de cinco puntos. Es la aplicación al inventario de lo visto en la ficha 8.10 sobre colas de distribución: protegerse de lo poco probable es caro y el coste crece muy deprisa.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Caso C. Ley de Little.** Un taller procesa **8 pedidos al día** y tiene en cualquier momento **40 pedidos en curso**. El tiempo medio que un pedido pasa en el sistema es 40 / 8 = **5 días**. Si el objetivo comercial es entregar en 3 días, hay dos vías y solo dos: **reducir el trabajo en curso a 24 pedidos** o **aumentar la capacidad de proceso a 13,3 pedidos diarios**. La ley no admite una tercera opción, y por eso es tan útil para cerrar discusiones sobre plazos de entrega.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: el efecto látigo y la eficiencia local",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una demanda final que oscila un 5 % produce, tres eslabones más arriba de la cadena, oscilaciones de pedidos del 30 % o más. No hace falta ningún error de gestión: basta con que cada eslabón vea únicamente los pedidos de su cliente inmediato y no la demanda real del consumidor final.",
            "**Cómo se genera.** El minorista observa una subida del 5 %, interpreta que la demanda ha crecido y pide un 10 % más para reponer también su stock de seguridad, que debe crecer con el nivel de demanda. El mayorista recibe ese +10 %, aplica el mismo razonamiento y pide un 20 %. El fabricante ve un +20 % y amplía capacidad. Cuando la demanda final vuelve a su nivel, toda la cadena queda con exceso de inventario y de capacidad, y el ciclo se invierte con la misma amplificación.",
            "**Las causas están identificadas** y todas son racionales individualmente: procesar la demanda observada como si fuera señal permanente, pedir por lotes en lugar de en continuo, promociones que concentran compras artificialmente, y racionamiento en épocas de escasez, que induce a pedir de más para asegurar asignación.",
            "**Las soluciones son de información, no de gestión.** Compartir la demanda real del punto de venta con toda la cadena, reducir el tamaño de lote, estabilizar los precios en lugar de promocionar en oleadas, y sustituir el pedido del cliente por reposición gestionada por el proveedor con datos de consumo. Todo ello reduce la amplificación sin que ningún eslabón tenga que gestionar mejor.",
            "**Y el error simétrico dentro de la fábrica** es perseguir la eficiencia local. Mantener ocupadas todas las máquinas maximiza el indicador de utilización de cada una y produce montañas de trabajo en curso delante del cuello de botella, que es el único punto cuya capacidad determina la salida real. Ese inventario consume caja —las necesidades operativas de fondos de la ficha 7.08— y alarga el tiempo de ciclo por la ley de Little, empeorando el servicio.",
            "**La regla que se sigue de todo esto:** subordinar todas las decisiones al ritmo del cuello de botella, proteger ese punto con un pequeño inventario que evite que se detenga, y no medir la eficiencia de los recursos que no son restricción. Es contraintuitivo y funciona, y es también la razón por la que los sistemas de costes que imputan por horas máquina —la ficha 6.03— empujan exactamente en la dirección contraria.",
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
            { t: "Buscar la utilización máxima de la capacidad", d: "Con variabilidad, los tiempos de espera crecen de forma no lineal al acercarse al 100 % de utilización. Una planta al 95 % ofrece un servicio mucho peor que una al 85 %, y la diferencia se agrava justo cuando la demanda sube." },
            { t: "Optimizar recursos que no son cuello de botella", d: "Mejorar un punto que no es la restricción no aumenta la producción del sistema: acumula inventario en curso. Solo la capacidad del cuello determina la salida, y toda mejora fuera de él es esfuerzo desperdiciado o peor." },
            { t: "Fijar niveles de servicio sin calcular su coste", d: "Pasar del 95 % al 99,9 % casi duplica el stock de seguridad. Cada punto adicional en la cola cuesta mucho más que el anterior, y elegir el nivel «porque suena bien» compromete un inventario que nadie ha presupuestado." },
            { t: "Afinar el lote económico hasta la unidad", d: "La función de coste es muy plana en el entorno del óptimo: pedir un 20 % más o menos apenas cambia el resultado. Lo que importa es no equivocarse en un orden de magnitud, no la precisión decimal." },
            { t: "Interpretar cada variación de demanda como una señal", d: "Reaccionar a la fluctuación aleatoria genera el efecto látigo. Distinguir señal de ruido antes de ajustar pedidos y capacidad es la principal defensa, y exige mirar la serie, no el último dato." },
            { t: "Gestionar la cadena mirando solo al eslabón contiguo", d: "Sin visibilidad de la demanda final, cada eslabón amplifica la señal del anterior. La solución no es gestionar mejor cada eslabón sino compartir información de consumo real a lo largo de la cadena." },
            { t: "Olvidar que el inventario es caja inmovilizada", d: "Cada unidad en almacén es dinero que financia el ciclo de explotación y no está disponible para otra cosa. La discusión sobre niveles de inventario es una discusión financiera, y conecta directamente con las necesidades operativas de fondos." },
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
            "Las cadenas de suministro internacionales han obligado a las cuentas nacionales a desarrollar instrumentos específicos de medición.",
          ],
          lista: [
            "Cuando la producción se fragmenta entre países, las **estadísticas de comercio en términos brutos dejan de ser informativas**: un producto que cruza varias fronteras en fases sucesivas se contabiliza íntegro cada vez, con lo que el comercio total se infla respecto al valor realmente creado.",
            "La respuesta son las **tablas input-output internacionales** y las estadísticas de **comercio en valor añadido**, que estiman qué parte del valor de una exportación se generó realmente en el país exportador y qué parte procede de insumos importados.",
            "El resultado cambia el diagnóstico: el contenido de valor añadido doméstico de las exportaciones varía mucho entre países y sectores, y los saldos bilaterales medidos en valor añadido difieren sustancialmente de los medidos en términos brutos.",
            "El **efecto látigo** tiene su reflejo agregado en la **variación de existencias (P.52)**, cuya contribución al crecimiento trimestral es notoriamente volátil y a menudo actúa como amplificador del ciclo: se acumula al final de las expansiones y se libera con brusquedad en las recesiones.",
            "Y los episodios de **disrupción de suministro** posteriores a 2020 dejaron rastro en las cuentas trimestrales por esa vía, con contribuciones anómalas de existencias que reflejaban tanto acumulación preventiva como imposibilidad de producir por falta de insumos.",
          ],
          cierre:
            "Para quien trabaja con cuentas trimestrales, la conexión práctica es que la partida más difícil de interpretar del lado de la demanda —la variación de existencias— es el reflejo agregado de decisiones de operaciones tomadas empresa a empresa por las razones descritas en esta ficha.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Demanda anual 5.000 uds, coste de pedido 80 €, coste de posesión 4 €/ud/año. ¿Lote económico?", a: "√(2 × 5.000 × 80 / 4) = √200.000 = 447 unidades, con unos 11 pedidos al año. En el óptimo, coste de pedido y de posesión se igualan en unos 894 € cada uno." },
            { q: "Un taller tiene 60 expedientes en curso y resuelve 12 al día. ¿Tiempo medio de tramitación?", a: "Cinco días, por la ley de Little. Para bajarlo a tres hay que reducir el trabajo en curso a 36 o aumentar la capacidad a 20 diarios. No hay tercera vía." },
            { q: "¿Por qué mejorar una máquina que no es cuello de botella no aumenta la producción?", a: "Porque la capacidad del sistema la fija la restricción. Producir más antes del cuello solo acumula inventario en curso, que consume caja y alarga el tiempo de ciclo sin aumentar la salida." },
            { q: "¿Cuánto cuesta pasar de un 95 % a un 99 % de nivel de servicio?", a: "Un 42 % más de stock de seguridad, porque el multiplicador z pasa de 1,64 a 2,33. El coste de protegerse crece muy deprisa en la cola de la distribución." },
            { q: "¿Por qué el comercio medido en términos brutos exagera el intercambio real?", a: "Porque un producto fragmentado entre países se contabiliza íntegro cada vez que cruza una frontera. Las tablas input-output internacionales y el comercio en valor añadido corrigen esa duplicación." },
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
            { ref: "Heizer y Render, Dirección de la producción y de operaciones", nota: "el manual estándar: capacidad, inventarios, calidad y cadena de suministro." },
            { ref: "Goldratt, La meta", nota: "la teoría de restricciones en formato de novela. Poco convencional y sigue siendo la mejor introducción al concepto de cuello de botella." },
            { ref: "Cachon y Terwiesch, Matching Supply with Demand", nota: "el tratamiento cuantitativo riguroso de variabilidad, colas y niveles de servicio." },
            { ref: "OCDE-OMC, estadísticas de comercio en valor añadido (TiVA)", nota: "la medición del valor añadido doméstico en las exportaciones, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
