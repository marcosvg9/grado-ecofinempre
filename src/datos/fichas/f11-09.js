/* Ficha 11.09 — España: del atraso al desarrollismo y la integración europea. */

export default {
  codigo: "11.09",
  titulo: "España: del atraso al desarrollismo y la integración europea",
  nivel: 2,
  bloque: "Historia económica",
  tiempo: "5 h",
  nucleo:
    "Un siglo largo de divergencia, quince años de convergencia acelerada al abrirse la economía, y después un país que se acerca a Europa a trompicones. La historia económica española es, en buena medida, la historia de cuándo decidió dejar de estar cerrada.",
  requiere: "11.05 Bretton Woods · 11.06 El giro de los ochenta · 10.01 Estructura productiva española",
  abre: "10.01 Estructura productiva · 10.02 Mercado de trabajo · 11.10 Divergencia y convergencia",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La pregunta clásica de la historiografía económica española es **por qué España no se industrializó al ritmo de sus vecinos** en el siglo XIX. Las respuestas apuntan a un conjunto de factores que se refuerzan: un mercado interior fragmentado por una orografía difícil y unas comunicaciones caras, una agricultura de baja productividad que no liberaba mano de obra ni generaba demanda, la pérdida temprana del imperio americano, una inestabilidad política crónica y un Estado con escasa capacidad recaudatoria. El resultado es un siglo en el que la brecha con Europa occidental **se ensancha en lugar de cerrarse**.",
            "**El siglo XX empieza peor.** La neutralidad en la Primera Guerra Mundial trajo un auge exportador breve; la Guerra Civil, una destrucción enorme; y la posguerra, la decisión que más caro salió: **la autarquía**. Entre 1939 y 1959 el régimen intentó la sustitución de importaciones con control estatal de precios, cambios y comercio exterior, mediante un intervencionismo que generó racionamiento, mercado negro y una industria protegida sin competencia ni escala. La renta por habitante de 1935 no se recuperó hasta bien entrados los años cincuenta. **Es el mayor coste económico documentado de una decisión de política en la historia española contemporánea.**",
            "**El giro de 1959 es la bisagra de todo el relato.** El Plan de Estabilización, negociado con el Fondo Monetario Internacional y la OCDE ante una situación de reservas prácticamente agotadas, devaluó la peseta, liberalizó parcialmente el comercio exterior y la inversión extranjera y ordenó las cuentas públicas. Tuvo un coste inmediato en forma de recesión, y a partir de ahí España creció a tasas que solo Japón superaba en el mundo. **La lección no es que el ajuste fuera indoloro, sino que el coste de permanecer cerrado era mucho mayor de lo que parecía desde dentro.**",
            "**El desarrollismo de los sesenta descansó en tres pilares que conviene nombrar**, porque los tres eran externos y ninguno permanente. El **turismo** aportó las divisas que financiaban las importaciones de bienes de equipo. Las **remesas** de los emigrantes que se fueron a Alemania, Francia y Suiza —cerca de dos millones de personas— hicieron lo propio y aliviaron la presión sobre el mercado de trabajo. Y la **inversión extranjera** trajo tecnología y capital. A eso se sumó un factor interno de enorme potencia: el **trasvase de trabajadores de la agricultura a la industria y los servicios**, que eleva la productividad agregada sin que mejore nada dentro de cada sector.",
            "**La crisis de los setenta golpeó a España peor y más tarde que a nadie**, y la razón es política. El choque del petróleo coincidió con el final del franquismo y la transición, y ningún gobierno en construcción podía imponer el ajuste que la situación exigía: se trasladó la subida del crudo a los precios internos y se sostuvo el empleo con endeudamiento. La inflación llegó a niveles muy altos y el paro se disparó. Los **Pactos de la Moncloa de 1977** son el reconocimiento de que el ajuste era inevitable y de que solo un acuerdo amplio podía repartir su coste: es el ejemplo español del pacto de rentas que la ficha 11.06 planteaba en abstracto.",
            "**La adhesión a la Comunidad Europea en 1986 fue el segundo gran movimiento de apertura**, y actuó por tres vías. Abrió el mercado y expuso a la industria a la competencia, lo que forzó una reconversión dura en siderurgia, naval y minería. Trajo **fondos estructurales** que financiaron una transformación de infraestructuras sin precedentes. Y aportó lo que suele llamarse **ancla institucional**: la disciplina de unas reglas externas que ningún gobierno podía relajar unilateralmente, primero para el mercado único y después para el euro.",
            "**Y de ahí al presente, con dos episodios que el bloque 10 estudia con detalle.** El largo ciclo expansivo desde mediados de los noventa hasta 2007 fue real en creación de empleo y muy sesgado hacia la construcción, con un crecimiento del crédito que encaja punto por punto en el patrón de la ficha 11.08. La crisis posterior fue más profunda y más larga que la europea, con la amplificación que produce la combinación de estructura productiva cíclica y dualidad laboral de la ficha 10.02, y el ajuste tuvo que hacerse sin tipo de cambio, es decir, por la vía de la devaluación interna de la ficha 10.09.",
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
            { nom: "Convergencia relativa", sub: "La forma de medir el acercamiento.", cols: ["renta española ÷ renta de Europa occidental"] },
            { nom: "Diferencial de crecimiento", sub: "Lo que mueve el ratio.", cols: ["ratio_t = ratio_0 · [(1+g_ESP) ÷ (1+g_EUR)]^t"] },
            { nom: "Efecto del trasvase sectorial", sub: "Sube la media sin mejorar nada dentro.", cols: ["Δπ = Σ πᵢ · Δwᵢ"] },
            { nom: "Restricción exterior", sub: "El límite real del desarrollismo.", cols: ["importar bienes de equipo exige divisas"] },
            { nom: "Fuentes de divisas", sub: "Las tres patas del modelo de los sesenta.", cols: ["turismo + remesas + inversión extranjera"] },
            { nom: "Ancla institucional", sub: "Reglas externas que nadie puede relajar solo.", cols: ["adhesión ⟹ compromiso creíble"] },
            { nom: "Ajuste sin tipo de cambio", sub: "Lo que quedó tras entrar en el euro.", cols: ["devaluación interna (ficha 10.09)"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: siglo y medio de acercarse y alejarse",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La forma más clara de contar esta historia es con **un solo indicador**: la renta por habitante española expresada como porcentaje de la de Europa occidental. Las cifras que siguen son aproximadas y proceden de reconstrucciones con las cautelas de la ficha 11.01, pero **la forma de la curva es robusta** y es lo que importa.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Año", y: "% de Europa" },
          dominio: { x: [1950, 2020], y: [35, 100] },
          marcasX: [1950, 1960, 1975, 1985, 2000, 2020],
          marcasY: [40, 60, 80, 100],
          series: [
            {
              nombre: "España",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [2020, 89],
              puntos: [[1950, 43], [1955, 48], [1959, 52], [1965, 66], [1970, 73], [1975, 79], [1980, 74], [1985, 70], [1990, 76], [1995, 78], [2000, 84], [2007, 93], [2010, 89], [2013, 86], [2019, 89], [2020, 89]],
            },
            {
              nombre: "Europa",
              color: "tinta",
              trazo: "discontinuo",
              grosor: 1.6,
              etiquetaEn: [2020, 100],
              puntos: [[1950, 100], [2020, 100]],
            },
          ],
          puntos: [
            { x: 1959, y: 52, etiqueta: "Plan de Estabilización", guias: false },
            { x: 1975, y: 79, etiqueta: "1975", guias: false },
            { x: 1986, y: 71, etiqueta: "CEE", guias: false },
            { x: 2007, y: 93, etiqueta: "2007", guias: false },
          ],
          nota: "La curva tiene **cuatro tramos y ninguno es casual**. De 1950 a 1959, estancamiento en torno a la mitad del nivel europeo: es el coste de la autarquía. De 1959 a 1975, el ascenso más rápido de toda la serie, de **52 % a 79 %**, que es el desarrollismo. De 1975 a 1985 una **caída de nueve puntos**: la crisis del petróleo, la transición política y un ajuste que se aplazó. Y de 1986 en adelante, una recuperación con dos escalones y dos retrocesos, el último tras 2008. Obsérvese lo que enseña el conjunto: **los dos tramos de convergencia siguen a los dos momentos de apertura**, 1959 y 1986, y los dos retrocesos coinciden con crisis afrontadas sin margen de maniobra.",
        },
        {
          tipo: "tabla",
          cabecera: ["Periodo", "Posición inicial", "Posición final", "Diferencial anual sobre Europa"],
          filas: [
            ["1960-1975 — desarrollismo", "57 %", "79 %", "+2,20 pp"],
            ["1975-1985 — crisis y transición", "79 %", "70 %", "−1,20 pp"],
            ["1985-2007 — integración europea", "70 %", "93 %", "+1,30 pp"],
            { celdas: ["2007-2013 — crisis financiera", "93 %", "86 %", "−1,30 pp"], clase: "total" },
          ],
          nota: "La primera fila da la medida del desarrollismo: **2,2 puntos anuales por encima de Europa durante quince años**. Si Europa occidental crecía al 4 % —su ritmo de la edad de oro según la ficha 11.05—, España crecía al **6,3 %**. Y las filas segunda y cuarta enseñan algo que se olvida: **la convergencia no es un derecho adquirido**. Diez años pueden borrar la mitad de lo ganado en quince, y eso ocurrió dos veces en el mismo medio siglo. La comparación entre la segunda y la tercera fila también es instructiva: el retroceso de la crisis del petróleo fue más rápido de lo que costó recuperarlo.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora de dónde salió buena parte de aquel crecimiento del desarrollismo**, porque no fue todo mejora de eficiencia. En 1960 la agricultura ocupaba alrededor del **40 %** de los trabajadores españoles; hacia 1990 no llegaba al **8 %**. Trasladar personas de un sector de baja productividad a otro de productividad mucho mayor eleva la media agregada **sin que mejore nada dentro de ninguno de los dos**.",
            "**La aritmética es la de la ficha 10.01, con el signo favorable.** Si la productividad agrícola es 40 y la del resto 140, mover diez puntos porcentuales del empleo del campo a la industria eleva la productividad media de **100 a 110**, un **10 %** de golpe. España repitió esa operación varias veces a lo largo de tres décadas, y ahí está una parte importante del milagro. La consecuencia es la que conviene retener: **ese motor se agota cuando el campo se vacía**, y a partir de entonces crecer exige mejorar dentro de cada sector, que es mucho más difícil. Es la misma advertencia que la ficha 11.05 hacía para toda Europa, y explica buena parte del problema de productividad que diagnostica la ficha 10.01.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: 1959 y 1986, dos aperturas y una lección",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Los dos episodios de convergencia española siguen a los dos momentos en que el país decidió abrirse. Compararlos permite ver qué tienen en común y en qué se diferencian, y extraer algo más útil que la consigna de que abrirse es bueno.",
            "**El Plan de Estabilización de 1959 fue un ajuste de urgencia.** España había agotado sus reservas de divisas y no podía pagar sus importaciones: no era una elección estratégica sino una situación sin salida. Se devaluó la peseta, se liberalizaron parcialmente el comercio y la inversión extranjera, se contuvo el gasto público y se unificó el tipo de cambio. El coste inmediato fue una **recesión con caída del consumo y aumento del paro** que empujó a mucha gente a emigrar. El resultado a medio plazo fue quince años de crecimiento sin precedentes.",
            "**La adhesión de 1986 fue una decisión política de largo plazo con un componente económico.** No había urgencia de balanza de pagos: había una voluntad de anclar el país a un marco institucional europeo tras la dictadura. El coste también fue real —la reconversión industrial de siderurgia, naval y minería destruyó empleo concentrado en comarcas concretas, con el patrón de perdedores geográficamente localizados de la ficha 11.07— y el beneficio llegó por tres vías: mercado, fondos estructurales y disciplina institucional.",
            "**Lo que ambos comparten es el mecanismo.** Abrirse expone a la competencia, obliga a reasignar recursos desde actividades protegidas e improductivas hacia otras que pueden competir, y esa reasignación es la fuente del crecimiento. Es exactamente el término «entre sectores» de la descomposición de la ficha 10.01. Y en ambos casos **el coste llegó primero y concentrado, y el beneficio después y difuso**, que es la estructura temporal que hace estas decisiones políticamente tan difíciles.",
            "**Lo que los diferencia es la existencia de una red de compensación.** En 1959 no había ninguna: el ajuste lo pagaron los que perdieron su empleo y los que emigraron, sin prestaciones ni recolocación. En 1986 sí hubo fondos de reconversión, prejubilaciones y ayudas regionales — insuficientes según casi todos los análisis, pero existentes. Y la diferencia importa porque, como argumentaba la ficha 11.07, **una apertura sin compensación es eficiente y políticamente frágil**, y su reversión acaba costando más de lo que se ahorró.",
            "**La lección que dejan los dos episodios juntos.** Que el coste de estar cerrado se acumula sin que se note desde dentro, porque no hay término de comparación; y que se paga de golpe cuando la restricción exterior aprieta. Que abrirse funciona, pero funciona **con un coste real, concentrado y anterior al beneficio**. Y que la parte del proceso que España hizo peor las dos veces no fue la apertura sino **el acompañamiento**: la reconversión sin política industrial que reconstruyera el tejido de las comarcas afectadas dejó cicatrices que siguen visibles en el mapa económico del país.",
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
            { t: "Atribuir el desarrollismo a la planificación del régimen", d: "Los Planes de Desarrollo llegaron después del giro de 1959 y su eficacia es muy discutida. Lo que desató el crecimiento fue la apertura al exterior —divisas del turismo, remesas de emigrantes e inversión extranjera— y el trasvase de trabajadores del campo a la industria, no la planificación indicativa." },
            { t: "Confundir crecimiento con mejora de eficiencia", d: "Buena parte del avance de los sesenta vino de mover gente de un sector de productividad 40 a otro de 140, lo que eleva la media un 10 % sin que mejore nada dentro de ninguno. Ese motor se agota cuando el campo se vacía, y a partir de ahí crecer exige mejorar dentro de cada sector, que es mucho más difícil." },
            { t: "Presentar la autarquía como una opción defendible en su contexto", d: "La renta por habitante de 1935 no se recuperó hasta bien entrados los años cincuenta, y España pasó dos décadas estancada en torno a la mitad del nivel europeo mientras sus vecinos crecían. Es el mayor coste documentado de una decisión de política económica en la historia española contemporánea." },
            { t: "Dar la convergencia por irreversible", d: "España perdió nueve puntos de posición relativa entre 1975 y 1985 y siete entre 2007 y 2013. En ambos casos, una década borró buena parte de lo ganado en quince o veinte años. Acercarse a Europa no es un derecho adquirido ni un proceso automático." },
            { t: "Explicar la crisis española de los setenta solo por el petróleo", d: "El choque fue común a toda Europa y España lo sufrió peor porque coincidió con el final del franquismo y la transición: ningún gobierno en construcción podía imponer un ajuste. Se trasladó el encarecimiento a los precios internos y se sostuvo el empleo con deuda, y por eso los Pactos de la Moncloa llegan en 1977 y no en 1974." },
            { t: "Juzgar la reconversión industrial solo por el empleo destruido", d: "La comparación relevante no es con la situación previa sino con lo que habría ocurrido manteniendo sectores que no podían competir en un mercado abierto. Dicho esto, la crítica seria no es a la reconversión sino a su acompañamiento: sin política industrial que reconstruyera el tejido, las comarcas afectadas quedaron con cicatrices permanentes." },
            { t: "Tratar 1959 y 1986 como el mismo tipo de decisión", d: "El Plan de Estabilización fue un ajuste de urgencia con las reservas agotadas y sin ninguna red de compensación. La adhesión fue una decisión política de largo plazo, con fondos estructurales y ayudas de reconversión. Comparten mecanismo económico y difieren en margen de elección y en acompañamiento." },
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
            "La historia estadística española acompaña a la económica, y saber cuándo empieza cada serie evita comparaciones imposibles.",
          ],
          lista: [
            "Las **series históricas del PIB español** anteriores a los años cincuenta son reconstrucciones académicas, no estadística oficial. La contabilidad nacional española propiamente dicha arranca a mediados del siglo XX y se sistematiza después, con lo que cualquier comparación que cruce esa frontera mezcla naturalezas distintas, con el aviso de la ficha 11.01.",
            "Las **fuentes del desarrollismo** son especialmente reveladoras de qué importaba entonces: turismo, remesas de emigrantes e inversión extranjera se vigilaban con detalle porque eran las divisas que permitían importar bienes de equipo. Son partidas de la balanza de pagos de la ficha 3.10 elevadas a variable central de la política económica.",
            "La **adhesión a la Comunidad Europea** obligó a adoptar el sistema estadístico comunitario, precedente del SEC 2010 de la ficha 10.06, y por tanto a hacer las cuentas españolas comparables con las del resto. Buena parte de la homogeneidad que hoy damos por supuesta es consecuencia directa de 1986.",
            "El **peso de la construcción** en el ciclo previo a 2008 se lee directamente en el VAB por ramas y en la formación bruta de capital fijo, y las series muestran una proporción muy superior a la de los países del entorno. Es el dato que la ficha 10.01 usa para hablar de asignación del capital y la ficha 11.08, de auge de crédito.",
            "Y las **revisiones de las series españolas** han sido considerables, en parte por incorporación de la economía no observada y en parte por cambios metodológicos sucesivos. Comparar hoy la cifra de 1995 con la que se publicó entonces es un buen ejercicio para interiorizar el problema de los datos en tiempo real de la ficha 10.10.",
          ],
          cierre:
            "El punto práctico es que **la calidad de los datos españoles mejora justo cuando mejora la economía**, y por la misma razón: apertura, integración institucional y exigencias externas. Eso significa que los periodos peor medidos son precisamente los que más se discuten, y conviene tenerlo presente al leer cualquier cifra anterior a los años sesenta.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Qué desató el crecimiento del desarrollismo?", a: "La apertura de 1959, no la planificación. El Plan de Estabilización devaluó la peseta, liberalizó parcialmente comercio e inversión extranjera y ordenó las cuentas, ante unas reservas prácticamente agotadas. A partir de ahí, las divisas del turismo, las remesas de casi dos millones de emigrantes y la inversión extranjera financiaron las importaciones de bienes de equipo." },
            { q: "¿Cuánto creció España respecto a Europa entre 1960 y 1975?", a: "Pasó del 57 % al 79 % del nivel europeo, un diferencial de 2,2 puntos anuales. Si Europa occidental crecía al 4 % en su edad de oro, España lo hacía al 6,3 %. Es el tramo de convergencia más rápido de toda la serie española." },
            { q: "¿Por qué una parte de ese crecimiento no fue mejora de eficiencia?", a: "Porque vino del trasvase de trabajadores del campo a la industria y los servicios: la agricultura pasó de ocupar el 40 % del empleo en 1960 a menos del 8 % en 1990. Mover diez puntos de empleo de un sector de productividad 40 a otro de 140 eleva la media agregada un 10 % sin que mejore nada dentro de ninguno de los dos." },
            { q: "¿Por qué España sufrió peor la crisis de los setenta?", a: "Porque el choque del petróleo coincidió con el final del franquismo y la transición, y ningún gobierno en construcción podía imponer el ajuste que la situación exigía. Se trasladó el encarecimiento a los precios internos y se sostuvo el empleo con endeudamiento, hasta que los Pactos de la Moncloa de 1977 repartieron el coste mediante un acuerdo amplio." },
            { q: "¿Qué aportó la adhesión de 1986 además de mercado?", a: "Fondos estructurales que financiaron una transformación de infraestructuras sin precedentes, y sobre todo un ancla institucional: la disciplina de reglas externas que ningún gobierno podía relajar unilateralmente. El coste fue una reconversión dura en siderurgia, naval y minería, concentrada en comarcas concretas." },
            { q: "¿Es irreversible la convergencia con Europa?", a: "No. España perdió nueve puntos de posición relativa entre 1975 y 1985 y siete entre 2007 y 2013. En ambos casos una década borró buena parte de lo ganado en quince o veinte años, y en ambos el retroceso coincidió con una crisis afrontada sin margen de maniobra." },
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
            { ref: "Carreras y Tafunell, Historia económica de la España contemporánea", nota: "el manual de referencia; cubre desde el siglo XIX hasta hoy con las series cuantitativas detrás." },
            { ref: "Prados de la Escosura, Spanish Economic Growth, 1850-2015", nota: "la reconstrucción cuantitativa más cuidadosa de la serie española; imprescindible para saber qué se puede afirmar y qué no." },
            { ref: "Myro y García Delgado, Lecciones de Economía Española", nota: "el enlace con el bloque 10: estructura productiva y política económica reciente." },
            { ref: "Fuentes Quintana, «El Plan de Estabilización, veinticinco años después»", nota: "escrito por uno de sus protagonistas; explica la situación de partida y por qué no había alternativa." },
            { ref: "Tortella, El desarrollo de la España contemporánea", nota: "la interpretación del atraso decimonónico y de sus causas; buen contrapunto a las lecturas más institucionalistas." },
          ],
        },
      ],
    },
  ],
};
