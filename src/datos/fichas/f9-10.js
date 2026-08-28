/* Ficha 9.10 — Innovacion, emprendimiento y modelos de negocio. */

export default {
  codigo: "9.10",
  titulo: "Innovación, emprendimiento y modelos de negocio",
  nivel: 3,
  bloque: "Dirección de empresas",
  tiempo: "5 h",
  nucleo:
    "Un modelo de negocio describe cómo se crea valor, cómo se entrega y cómo se captura. Las tres partes o ninguna: hay innovaciones que crean muchísimo valor y no capturan nada, y esa es la diferencia entre transformar un sector y quebrar intentándolo.",
  requiere: "9.03 Recursos y capacidades · 9.07 Segmentación",
  abre: "7.09 Valoración de empresas · 9.04 Estrategias corporativas",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un **modelo de negocio** responde a tres preguntas que hay que contestar juntas. Cómo se **crea** valor: qué problema se resuelve y para quién. Cómo se **entrega**: con qué recursos, actividades, socios y canales. Y cómo se **captura**: de dónde salen los ingresos y qué estructura de costes hay detrás. La tercera es la que más se descuida y la que decide si el negocio existe: hay innovaciones que generaron enormes beneficios para los usuarios y ninguno para quien las desarrolló.",
            "La **innovación** se clasifica por objeto —de producto, de proceso, de modelo de negocio, organizativa— y por intensidad. La **incremental** mejora lo existente y suele beneficiar a las empresas establecidas, que tienen escala y clientes para amortizarla. La **radical** cambia la base tecnológica. Y la **disruptiva**, en el sentido preciso de Christensen, no es simplemente una innovación grande: es una que empieza sirviendo peor a los clientes principales del sector —a menudo desde un segmento marginal o de bajo coste— y mejora hasta desplazar a los establecidos, que la ignoran porque atenderla parece una mala decisión hasta que es tarde.",
            "Ese es el punto que hace interesante el concepto: **las empresas establecidas no ignoran la disrupción por torpeza, sino por hacer bien lo que se les pide**. Escuchan a sus mejores clientes, que no quieren el producto inferior; asignan capital a las oportunidades de mayor margen; y la nueva propuesta no supera ningún filtro de inversión razonable en sus primeros años. Es un fallo estructural, no de gestión.",
            "La **apropiación** del valor es una cuestión aparte de la creación. Depende de la protección —patentes, secreto, marca—, de los **activos complementarios** necesarios para explotar la innovación —fabricación, distribución, servicio— y de la velocidad de imitación. Cuando la protección es débil y los activos complementarios están en manos de otros, quien innova crea el mercado y otro lo captura. Es una historia repetida en tecnología.",
            "En **emprendimiento**, el marco dominante desde hace años es iterativo: en lugar de planificar en detalle un negocio incierto, formular hipótesis, construir lo mínimo necesario para contrastarlas, medir y decidir si perseverar o cambiar de rumbo. Su valor está en reconocer que **el mayor riesgo de un proyecto nuevo no es de ejecución sino de demanda**: construir bien algo que nadie quiere es el modo de fracaso más común.",
            "Y toda esa discusión aterriza en unas cuantas cifras. Un modelo de negocio es viable si el **valor que aporta un cliente supera con holgura lo que cuesta captarlo**, y si el plazo en que se recupera ese coste es compatible con la caja disponible. Sin esas dos condiciones, crecer acelera la quiebra en lugar de evitarla.",
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
            { nom: "Contribución mensual por cliente", sub: "Ingreso recurrente por el margen bruto.", cols: ["c = ARPU × margen bruto"] },
            { nom: "Vida media del cliente", sub: "Con tasa de abandono mensual constante.", cols: ["Vida $= \\dfrac{1}{\\text{tasa de abandono}}$"] },
            { nom: "Valor del cliente", sub: "Versión simplificada sin descuento.", cols: ["$\\mathrm{LTV} = \\dfrac{c}{\\text{tasa de abandono}}$"] },
            { nom: "Ratio de viabilidad", sub: "Umbral habitual en modelos de suscripción.", cols: ["LTV / CAC > 3"] },
            { nom: "Recuperación del coste de captación", sub: "Determina la caja que consume crecer.", cols: ["Meses = CAC / c"] },
            { nom: "Caja consumida por el crecimiento", sub: "Por qué crecer deprisa exige financiación.", cols: ["Consumo = Clientes nuevos × CAC − Contribución de la base"] },
            { nom: "Curva de difusión", sub: "La adopción sigue una S, no una recta.", cols: ["Innovadores → primeros adoptantes → mayorías → rezagados"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la economía de una suscripción",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un servicio por suscripción cobra **40 € al mes** por cliente, con un **margen bruto del 70 %**. Captar un cliente cuesta **300 €** entre publicidad, comercial y promociones de entrada. La tasa de abandono mensual es del **3 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Resultado"],
          filas: [
            ["Contribución mensual por cliente", "40 × 70 %", "28 €"],
            ["Vida media del cliente", "1 / 0,03", "33,3 meses"],
            ["Valor del cliente", "28 × 33,3", "933 €"],
            ["Coste de adquisición", "—", "300 €"],
            { celdas: ["Ratio LTV / CAC", "933 / 300", "3,1"], clase: "total" },
            ["Meses hasta recuperar el CAC", "300 / 28", "10,7 meses"],
          ],
          nota: "El ratio de 3,1 supera el umbral habitual, así que el modelo es viable **en el largo plazo**. Pero tarda casi once meses en recuperar lo invertido en cada cliente, y eso significa que **crecer consume caja de forma proporcional al ritmo de crecimiento**. Captar mil clientes al mes son 300.000 € de salida inmediata frente a 28.000 € de contribución mensual.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la sensibilidad al abandono**, que es el parámetro que decide todo en estos modelos y el que peor se estima al principio:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Abandono mensual", "Vida media", "Valor del cliente", "Ratio LTV/CAC"],
          filas: [
            ["2 %", "50,0 meses", "1.400 €", "4,7"],
            ["3 %", "33,3 meses", "933 €", "3,1"],
            ["5 %", "20,0 meses", "560 €", "1,9"],
            { celdas: ["8 %", "12,5 meses", "350 €", "1,2"], clase: "total" },
          ],
          nota: "Con un **8 % de abandono mensual** —que equivale a perder a la mitad de los clientes cada nueve meses— el modelo deja de funcionar: apenas se recupera el coste de captación y no queda nada para cubrir estructura. Y fíjate en que ni el precio ni el coste de captación han cambiado. **La retención no es un indicador de satisfacción, es la variable que determina si el negocio existe.**",
        },
        {
          tipo: "parrafos",
          items: [
            "**La trampa del crecimiento.** Una empresa con estos números y abandono del 5 % puede crecer un 100 % al año, exhibir métricas espectaculares de clientes nuevos y estar destruyendo valor en cada captación. Como el coste se paga hoy y el retorno llega en veinte meses, la cuenta de resultados no lo revela hasta mucho después. **Es exactamente el fenómeno de la ficha 6.08 —beneficio que no llega a caja— aplicado a un modelo de suscripción**, y por eso en estos negocios se vigilan las métricas por cohorte de captación y no los agregados.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: crear valor sin capturarlo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La historia de la tecnología está llena de empresas que inventaron algo transformador y no ganaron dinero con ello, mientras otras que llegaron después capturaron el mercado. No es mala suerte: es un problema estructural con causas identificables.",
            "**La apropiación depende de tres factores.** El **régimen de protección**: si la innovación se puede patentar de forma efectiva, mantener en secreto o proteger con una marca, el innovador tiene tiempo. Si se puede observar y replicar, no lo tiene. Los **activos complementarios**: casi ninguna innovación se explota sola, hace falta fabricación, distribución, servicio, marca. Y la **velocidad**: cuánto tarda un competidor con esos activos en llegar.",
            "**La combinación decide el desenlace.** Con protección fuerte, el innovador puede licenciar y cobrar sin tener nada más. Con protección débil y activos complementarios genéricos —que se pueden comprar en el mercado—, la carrera la gana quien se mueva más rápido. Y con protección débil y activos complementarios **especializados y controlados por otros**, el innovador pierde casi siempre: crea el mercado y lo capitaliza quien controla la distribución o la fabricación.",
            "**La implicación práctica para quien innova** es que la pregunta relevante no es solo si la idea funciona, sino **quién se quedará el valor si funciona**. Y de ahí salen decisiones concretas: invertir en proteger antes de divulgar, asegurar acceso a los activos complementarios críticos mediante alianzas o integración, o aceptar que el papel será el de licenciante y estructurar el negocio en consecuencia.",
            "**El reverso, para la empresa establecida**, es el dilema de la disrupción. Cuando aparece una propuesta inferior en las dimensiones que valoran sus mejores clientes pero superior en alguna otra —precio, simplicidad, accesibilidad—, todos los filtros internos la rechazan con buenas razones: margen menor, mercado más pequeño, clientes principales que no la quieren. **Escuchar al cliente y asignar capital al mayor retorno son buenas prácticas que, en este caso concreto, conducen al desastre.**",
            "**Lo que funciona** según la evidencia disponible es separar organizativamente la nueva propuesta, con sus propios objetivos, métricas y estructura de costes, en lugar de someterla a los criterios del negocio principal. Es la aplicación de la ficha 9.05: una estructura diseñada para un modelo de negocio no puede ejecutar otro distinto, por mucho que se le pida.",
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
            { t: "Diseñar el modelo sin la parte de captura de valor", d: "Crear y entregar valor no basta: hay que capturar una parte. Muchos proyectos describen con detalle el problema que resuelven y despachan en una línea de dónde saldrá el dinero, que es la pregunta que decide si el negocio existe." },
            { t: "Confundir innovación grande con disrupción", d: "La disrupción en sentido preciso empieza sirviendo peor a los clientes principales, a menudo desde un segmento marginal, y mejora hasta desplazarlos. Una innovación radical que entra por arriba del mercado es otra cosa, y las empresas establecidas suelen responder bien a ella." },
            { t: "Suponer que innovar garantiza capturar el valor", d: "Depende de la protección y del control de los activos complementarios. Con protección débil y distribución en manos ajenas, el innovador crea el mercado y otro lo capitaliza. Hay que analizarlo antes de invertir, no después." },
            { t: "Crecer sin comprobar la economía por cliente", d: "Si el valor del cliente no supera con holgura el coste de captarlo, crecer acelera la destrucción de valor y lo hace de forma invisible durante meses, porque el coste se paga hoy y el retorno llega mucho después." },
            { t: "Ignorar el plazo de recuperación del coste de captación", d: "Un ratio LTV/CAC excelente con recuperación a treinta meses exige una financiación que muchos proyectos no tienen. La viabilidad a largo plazo y la supervivencia a corto son condiciones distintas y hay que cumplir ambas." },
            { t: "Mirar métricas agregadas en lugar de cohortes", d: "El crecimiento de la base de clientes puede ocultar que cada cohorte se comporta peor que la anterior. Analizar por cohorte de captación revela deterioros que los agregados enmascaran durante mucho tiempo." },
            { t: "Someter un negocio nuevo a los criterios del principal", d: "Los filtros de margen, tamaño de mercado y retorno del negocio establecido rechazan sistemáticamente las oportunidades emergentes. Si se quiere explorar un modelo distinto, hay que separarlo organizativamente y darle sus propias métricas." },
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
            "Los modelos de negocio digitales han generado uno de los debates de medición más vivos de la contabilidad nacional contemporánea.",
          ],
          lista: [
            "Un servicio digital gratuito financiado con publicidad **no genera consumo final de los hogares** en el SEC 2010: el hogar no paga nada. Lo que se registra es la producción de servicios publicitarios, vendidos a las empresas y contabilizados como **consumo intermedio** de estas.",
            "La consecuencia es que el valor que el usuario obtiene del servicio no aparece en el PIB, y ese es uno de los argumentos centrales del debate sobre si las cuentas nacionales **infravaloran el bienestar** generado por la economía digital.",
            "La **demografía empresarial** que publica el INE a partir del DIRCE —altas, bajas y supervivencia de empresas— es la contrapartida estadística del emprendimiento. Las tasas de supervivencia a cinco años ofrecen la medida agregada de lo que esta ficha describe empresa a empresa.",
            "La **I+D capitalizada** como producto de propiedad intelectual, ya mencionada en la ficha 9.03, es el reconocimiento de que la innovación es inversión. Pero solo captura el gasto formalmente identificado como I+D, no el conjunto de la actividad innovadora.",
            "Y sigue fuera de la frontera de la producción una parte del **capital organizativo y de la innovación en modelos de negocio**: no hay forma de registrarla como activo, aunque explique diferencias de productividad entre empresas que hacen exactamente lo mismo con la misma tecnología.",
          ],
          cierre:
            "El debate de fondo es antiguo y sigue abierto: el PIB mide producción valorada a precios de mercado, y hay creación de valor que no pasa por ningún mercado. Reconocer esa limitación es distinto de concluir que la medida es inútil, y ambas conclusiones se confunden con frecuencia en el debate público.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "ARPU 60 €, margen bruto 60 %, abandono mensual 4 %, CAC 500 €. ¿Es viable?", a: "Contribución mensual 36 €, vida media 25 meses, LTV 900 €. El ratio LTV/CAC es 1,8, por debajo del umbral habitual de 3. Además tarda 14 meses en recuperar el coste de captación. El modelo no funciona sin mejorar retención o abaratar la captación." },
            { q: "¿Por qué la retención es la variable crítica en un modelo de suscripción?", a: "Porque el valor del cliente es inversamente proporcional a la tasa de abandono. Pasar del 3 % al 8 % mensual reduce el LTV de 933 € a 350 € sin que cambien ni el precio ni el coste de captación." },
            { q: "¿Qué distingue a una innovación disruptiva de una simplemente radical?", a: "Que empieza sirviendo peor a los clientes principales del sector, a menudo desde un segmento marginal o de bajo coste, y mejora hasta desplazar a los establecidos. Estos la ignoran porque atenderla no supera ningún filtro de inversión razonable en sus primeros años." },
            { q: "¿De qué depende que quien innova capture el valor que crea?", a: "Del régimen de protección de la innovación, del control de los activos complementarios necesarios para explotarla y de la velocidad de imitación. Con protección débil y distribución en manos ajenas, el innovador crea el mercado y otro lo capitaliza." },
            { q: "¿Aparece en el PIB el valor de un servicio digital gratuito?", a: "No como consumo de los hogares, porque no pagan nada. Se registra la producción de servicios publicitarios como consumo intermedio de las empresas. El valor percibido por el usuario queda fuera, y es uno de los argumentos del debate sobre la medición de la economía digital." },
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
              q: "Un proyecto describe con detalle el problema que resuelve y cómo lo entrega, pero despacha en una línea de dónde saldrá el dinero. ¿Qué le falta?",
              opciones: [
                "La captura de valor: crear y entregar no basta si no se retiene una parte",
                "Un análisis de la competencia",
                "Una previsión de tesorería a tres años",
                "La definición del público objetivo",
              ],
              correcta: 0,
              porque: [
                "Un modelo de negocio son las tres partes o ninguna: hay innovaciones que crean muchísimo valor y no capturan casi nada.",
                "El análisis competitivo es útil, pero el hueco señalado en el enunciado es otro.",
                "La previsión es una consecuencia del modelo, no la pieza que falta en su diseño.",
                "El enunciado ya supone identificado a quién sirve: lo que no dice es cómo cobra.",
              ],
            },
            {
              q: "¿Qué caracteriza a una innovación disruptiva en sentido preciso?",
              opciones: [
                "Que introduce un cambio tecnológico radical",
                "Que desplaza al líder del mercado en pocos años",
                "Que empieza sirviendo peor a los clientes principales, a menudo desde un segmento marginal, y mejora hasta desplazarlos",
                "Que se apoya en un modelo de negocio digital",
              ],
              correcta: 2,
              porque: [
                "Una innovación puede ser radical y no disruptiva: muchas mejoran el producto para los clientes que ya lo compran.",
                "El desplazamiento es el resultado, no el rasgo que define el mecanismo.",
                "Por eso el líder la ignora racionalmente al principio: sus mejores clientes no la quieren, y cuando la quieren ya es tarde.",
                "Lo digital es un contexto frecuente, no parte de la definición.",
              ],
            },
            {
              q: "Una empresa innovadora crea un mercado nuevo y acaba capturando una parte mínima del valor. ¿Por qué puede ocurrir?",
              opciones: [
                "Porque no reinvirtió lo suficiente en I+D",
                "Porque entró demasiado pronto, antes de que hubiera demanda",
                "Porque no registró una marca reconocible",
                "Por protección débil de la innovación y control ajeno de los activos complementarios, como la distribución",
              ],
              correcta: 3,
              porque: [
                "Más I+D genera más innovación, no más capacidad de retener su valor.",
                "El momento de entrada influye, pero el reparto del valor lo decide quién controla lo que hace falta para llegar al cliente.",
                "La marca ayuda, y es solo uno de los activos complementarios en juego.",
                "Con protección débil y distribución en manos ajenas, el innovador crea el mercado y se lo queda otro. Es un resultado frecuente y previsible.",
              ],
            },
            {
              q: "El número total de clientes crece mes a mes. ¿Basta para concluir que el negocio va bien?",
              opciones: [
                "Sí: el crecimiento de la base es el indicador principal",
                "No: hay que mirar por cohortes, porque el agregado puede ocultar que cada cohorte se comporta peor que la anterior",
                "Sí, si además crece la facturación",
                "No, salvo que el coste de captación se mantenga estable",
              ],
              correcta: 1,
              porque: [
                "La cifra agregada crece mientras entren clientes nuevos, incluso si cada nueva remesa retiene peor y gasta menos.",
                "El análisis por cohorte de captación revela deterioros que las métricas agregadas tardan meses en enseñar, cuando ya son caros de corregir.",
                "La facturación agregada tiene el mismo problema: la sostienen los clientes antiguos mientras los nuevos empeoran.",
                "El coste de captación es una pieza, y sin cohortes no se ve si lo que se compra con él vale cada vez menos.",
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
            { ref: "Osterwalder y Pigneur, Generación de modelos de negocio", nota: "el lienzo de modelo de negocio. Visual y muy usado; su valor está en obligar a explicitar la captura de valor." },
            { ref: "Christensen, El dilema del innovador", nota: "la formulación original de la disrupción, más precisa y más limitada de lo que sugiere el uso popular del término." },
            { ref: "Teece, trabajos sobre apropiación del valor de la innovación", nota: "el marco de régimen de protección y activos complementarios, que explica por qué innovar y ganar dinero son cosas distintas." },
            { ref: "INE, demografía empresarial y estadísticas de I+D", nota: "creación, supervivencia y actividad innovadora de las empresas españolas, para la sección del puente." },
          ],
        },
      ],
    },
  ],
};
