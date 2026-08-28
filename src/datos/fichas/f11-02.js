/* Ficha 11.02 — La primera globalización y el patrón oro, 1870-1914. */

export default {
  codigo: "11.02",
  titulo: "La primera globalización y el patrón oro, 1870-1914",
  nivel: 2,
  bloque: "Historia económica",
  tiempo: "4 h",
  nucleo:
    "Entre 1870 y 1914 mercancías, capitales y personas se movieron con una libertad que no se ha vuelto a alcanzar, sostenida por una regla monetaria que ataba las manos de todos los gobiernos. Funcionó mientras nadie tuvo que rendir cuentas ante un electorado.",
  requiere: "11.01 De la economía orgánica a la industrial · 3.10 Economía abierta",
  abre: "11.03 Guerras e hiperinflaciones · 11.07 La segunda globalización · 3.10 Trilema",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El medio siglo anterior a 1914 fue el periodo más globalizado de la historia hasta bien entrado el siglo XX, y en algunas dimensiones **sigue sin haberse igualado**. Los aranceles eran bajos, el capital cruzaba fronteras sin autorización ni registro, y sobre todo **las personas se movían sin pasaporte**: entre 1850 y 1914 unos cincuenta y cinco millones de europeos emigraron a América, Australia y el norte de África, una proporción de la población de origen que ninguna migración posterior ha repetido.",
            "**Lo que hizo posible esa integración fue una combinación de tecnología y de regla monetaria.** La tecnología fue el ferrocarril, el barco de vapor de casco metálico, el canal de Suez y el telégrafo, que hundieron los costes de transporte e información. La regla fue el **patrón oro**: cada moneda se definía como una cantidad fija de oro, con lo que los tipos de cambio quedaban fijados entre sí y cualquiera podía convertir billetes en metal. Era, en el lenguaje de la ficha 3.10, la solución del trilema que sacrifica la **autonomía monetaria** para conservar tipo fijo y libertad de capitales.",
            "**El mecanismo de ajuste tiene un nombre clásico y una lógica sencilla.** El **flujo de metálico y precios** de Hume dice que un país con déficit exterior pierde oro, su masa monetaria se contrae, sus precios bajan, sus exportaciones se abaratan y el déficit se corrige solo. En el país con superávit ocurre lo contrario. Es un mecanismo automático, sin decisiones de nadie, y esa es exactamente su virtud y su defecto: **funciona sin política y también a pesar de la política**.",
            "**Lo que el modelo clásico oculta es que el ajuste no era simétrico ni indoloro.** El país deficitario estaba obligado a ajustar —o se quedaba sin oro— mientras que el superavitario podía esterilizar la entrada de metal y no hacer nada. La carga del ajuste recaía por completo en el lado débil, y como los precios y salarios nominales no caen con facilidad, **el ajuste acababa produciéndose por la vía de la producción y el empleo**. Es exactamente el mismo problema que la ficha 10.09 describe para la devaluación interna dentro del euro, con un siglo de diferencia.",
            "**La pieza que explica por qué aquello aguantó no es económica sino política.** El compromiso con la convertibilidad era creíble porque **nadie exigía cuentas a los bancos centrales por el desempleo**. El sufragio era censitario o restringido, los sindicatos eran débiles y no existían ni el seguro de paro ni la idea de que un gobierno fuera responsable del ciclo. Cuando el ajuste dolía, dolía a quien no votaba. En cuanto se extendió el sufragio y aparecieron partidos obreros con representación parlamentaria, sostener la convertibilidad a costa del empleo dejó de ser políticamente posible, y ese es el motivo profundo de que el patrón oro no sobreviviera al periodo de entreguerras.",
            "**La integración de mercados tuvo efectos distributivos enormes y perfectamente predichos por la teoría.** La llegada masiva de grano barato de América y Rusia hundió los precios agrícolas europeos y arruinó a los terratenientes del continente, que respondieron con aranceles a partir de 1879 —Alemania, Francia, España— mientras Gran Bretaña mantenía el libre comercio. En el Nuevo Mundo ocurrió lo contrario: la tierra se revalorizó y los salarios reales de la emigración europea presionaron a la baja. **La primera globalización produjo convergencia de salarios entre continentes y conflicto distributivo dentro de cada país**, que es la pauta que reaparecerá en la ficha 11.07.",
            "**Y conviene cerrar con lo que se rompió.** La guerra de 1914 interrumpió la convertibilidad de golpe, y el intento de restaurar el patrón oro en los años veinte —con paridades mal elegidas, deudas de guerra y reparaciones sobre la mesa— acabó amplificando la Gran Depresión, como verá la ficha 11.04. La lección que la historiografía extrae de esos cincuenta años es incómoda: **un régimen internacional muy eficiente puede ser políticamente insostenible**, y su eficiencia no lo salva.",
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
            { nom: "Definición de la paridad", sub: "De ahí salen los tipos de cambio fijos.", cols: ["1 unidad monetaria = x gramos de oro"] },
            { nom: "Tipo de cambio implícito", sub: "Fijo mientras se mantenga la convertibilidad.", cols: ["$e = \\dfrac{\\text{contenido de oro de A}}{\\text{contenido de oro de B}}$"] },
            { nom: "Flujo de metálico y precios", sub: "El ajuste automático de Hume.", cols: ["déficit $\\Rightarrow$ ↓oro $\\Rightarrow$ ↓$M \\Rightarrow$ ↓$P \\Rightarrow$ ↑exportaciones"] },
            { nom: "Teoría cuantitativa", sub: "La correa de transmisión del mecanismo.", cols: ["$M \\cdot V = P \\cdot Y$"] },
            { nom: "Trilema, versión decimonónica", sub: "Se renuncia a la política monetaria.", cols: ["tipo fijo $+$ capital libre $\\Rightarrow$ sin autonomía monetaria"] },
            { nom: "Asimetría del ajuste", sub: "Solo el deficitario está obligado.", cols: ["el superavitario puede esterilizar la entrada de oro"] },
            { nom: "Puntos del oro", sub: "Banda estrecha por el coste de enviar metal.", cols: ["el tipo fluctúa dentro del coste de transporte del oro"] },
            { nom: "Condición política", sub: "La razón de que fuera creíble.", cols: ["nadie responde ante el electorado por el paro"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cómo se cerraba un déficit sin que nadie decidiera nada",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Dos países bajo patrón oro. En el primero, la masa monetaria es **100** unidades de oro, la velocidad de circulación **5** y la producción real **250**, de modo que el nivel de precios es $100 \\times 5 / 250 = 2{,}00$. El segundo parte de la misma situación. Ahora el primero incurre en un déficit exterior de **10**, que se liquida enviando oro al segundo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "País deficitario", "País superavitario"],
          filas: [
            ["Masa monetaria inicial", "100", "100"],
            ["Nivel de precios inicial", "2,00", "2,00"],
            ["Movimiento de oro", "−10", "+10"],
            ["Masa monetaria resultante", "90", "110"],
            ["Nivel de precios resultante", "1,80", "2,20"],
            { celdas: ["Variación", "−10 %", "+10 %"], clase: "total" },
            ["Precios relativos", "El deficitario se abarata un 18,2 % frente al superavitario", "—"],
          ],
          nota: "Nadie ha tomado ninguna decisión: **el ajuste lo hace la aritmética de la teoría cuantitativa**. El deficitario ve caer sus precios, sus productos se vuelven competitivos y el déficit se cierra; el superavitario ve subir los suyos y pierde ventaja. Obsérvese que el efecto útil no es el 10 % de cada lado sino el **18,2 % de precio relativo**, porque los dos países se mueven en direcciones opuestas y las variaciones se acumulan. Ese es el motivo de que el sistema fuera tan potente en teoría, y también la razón de su fragilidad práctica: **exige que los precios caigan de verdad**.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y aquí está el problema que el modelo no cuenta.** Bajar el nivel de precios un 10 % significa bajar salarios nominales, alquileres y contratos ya firmados. Los precios de las materias primas ceden deprisa; los salarios, no. Si el salario nominal no cae, lo que cae es **el empleo**, y el ajuste se produce por vía de recesión en lugar de por vía de precios. La ficha 3.06 llama a eso rigidez nominal a la baja, y explica por qué el mecanismo de Hume era mucho más limpio en los libros que en la vida de la gente.",
            "**A eso se suma la asimetría.** El país que pierde oro está obligado a ajustar, porque las reservas se agotan y la convertibilidad se vuelve incumplible. El que gana oro puede **esterilizarlo** —comprar el metal y vender deuda para que la masa monetaria no aumente— y así conservar su ventaja competitiva sin coste. En la práctica, varios grandes acreedores hicieron precisamente eso. La consecuencia es que **toda la carga del ajuste internacional recaía sobre las economías débiles**, con el efecto sobre empleo que cabe suponer.",
          ],
        },
        {
          tipo: "grafico",
          alto: 360,
          ejes: { x: "Año", y: "Apertura %" },
          dominio: { x: [1870, 2020], y: [0, 65] },
          marcasX: [1870, 1913, 1950, 1980, 2020],
          marcasY: [0, 20, 40, 60],
          series: [
            {
              nombre: "Comercio sobre PIB",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [2020, 56],
              puntos: [[1870, 10], [1890, 14], [1913, 20], [1929, 16], [1938, 9], [1945, 7], [1960, 12], [1973, 22], [1980, 30], [1990, 32], [2000, 44], [2008, 58], [2015, 55], [2020, 56]],
            },
            {
              nombre: "Nivel de 1913",
              color: "alerta",
              trazo: "discontinuo",
              grosor: 1.6,
              etiquetaEn: [1980, 20],
              puntos: [[1870, 20], [2020, 20]],
            },
          ],
          puntos: [
            { x: 1913, y: 20, etiqueta: "1913", guias: false },
            { x: 1945, y: 7, etiqueta: "1945", guias: false },
          ],
          nota: "La curva es estilizada y su forma es la que importa: la apertura comercial alcanzada en **1913 no se recupera hasta los años setenta**, es decir, el mundo tardó unos sesenta años en volver a estar tan integrado como estaba antes de la Primera Guerra Mundial. Entre medias, dos guerras, el proteccionismo de los años treinta y los controles de capitales de Bretton Woods. La lección de la ficha es exactamente esa: **la globalización no es una tendencia inevitable de la historia**, es un régimen político que se puede construir y también deshacer, y ya se deshizo una vez.",
        },
      ],
    },
    {
      titulo: "Caso práctico: el grano americano y el nacimiento del proteccionismo moderno",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El episodio que mejor muestra cómo la integración de mercados produce ganadores y perdedores dentro de cada país es la invasión de grano barato en la Europa de los años setenta y ochenta del siglo XIX. Merece seguirlo porque es el patrón que se repetirá, con otros productos, un siglo después.",
            "**El choque fue tecnológico antes que comercial.** El ferrocarril transcontinental y el barco de vapor hundieron el coste de traer trigo desde las llanuras americanas y rusas hasta los puertos europeos. Un producto que era prácticamente intransportable pasó a costar poco moverlo, y el precio del trigo en Europa se desplomó. Nadie había firmado ningún tratado: **la protección natural que daba la distancia simplemente desapareció**.",
            "**Los efectos distributivos fueron los que la teoría predice.** El consumidor urbano ganó pan barato. El terrateniente europeo perdió renta de la tierra, porque el valor del suelo depende del precio del producto que rinde. Y el jornalero agrícola perdió empleo o emigró. En el lenguaje de la ficha 1.01, la ganancia agregada del comercio fue real **y estuvo repartida de forma muy desigual**, con un grupo concentrado y bien organizado —los propietarios— sufriendo la pérdida.",
            "**La respuesta política fue arancelaria y llegó deprisa.** Alemania en 1879, con la célebre coalición del centeno y el hierro que unió a los terratenientes del este con la industria pesada; Francia poco después; España, Italia y buena parte del continente en la misma década. Gran Bretaña fue la gran excepción y mantuvo el libre comercio, y no por virtud sino por aritmética política: **su población agraria era ya minoritaria y su electorado, urbano**. Dinamarca eligió una tercera vía, no protegerse sino reconvertirse hacia lácteos y carne, con un tejido cooperativo que financió la transformación.",
            "**El paralelo contemporáneo es directo y conviene no forzarlo.** La entrada de China en el comercio mundial produjo el mismo patrón —ganancia agregada, pérdidas concentradas en regiones y sectores concretos, respuesta política proteccionista con retraso— y es el objeto de la ficha 11.07. La diferencia importante es que en 1880 **la válvula de escape era la emigración**, y millones de europeos la usaron; hoy esa válvula está cerrada y los perdedores permanecen donde están, lo que cambia por completo la dinámica política.",
            "**Lo que este caso enseña sobre política comercial.** Que la resistencia al comercio no es irracional ni ignorante: responde a pérdidas reales de gente concreta. Que la ganancia agregada no compensa automáticamente a nadie, y que los mecanismos de compensación de la ficha 1.04 rara vez se ponen en marcha. Y que la elección entre proteger o reconvertir —Alemania frente a Dinamarca— tuvo consecuencias de muy largo plazo sobre la estructura productiva de ambos países.",
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
            { t: "Creer que la globalización es una tendencia irreversible de la historia", d: "La apertura comercial de 1913 no se recuperó hasta los años setenta: el mundo pasó sesenta años desintegrándose. La globalización es un régimen político sostenido por decisiones, no una fuerza natural, y ya se deshizo una vez por completo." },
            { t: "Idealizar el patrón oro por su estabilidad de precios", d: "Los precios eran estables a largo plazo y muy volátiles a corto, con deflaciones prolongadas y crisis bancarias frecuentes. Y la estabilidad se compraba renunciando a cualquier política monetaria frente a las recesiones, con el coste recayendo sobre el empleo de quien no votaba." },
            { t: "Dar por bueno el mecanismo de Hume sin la rigidez de precios", d: "Ajustar por precios exige que salarios y contratos nominales caigan de verdad. Como no caen con facilidad, el ajuste se produce por la vía de la producción y el empleo. Es el mismo problema que la devaluación interna dentro del euro, con un siglo de diferencia." },
            { t: "Presentar el ajuste como simétrico", d: "El país que pierde oro está obligado a ajustar porque agota reservas; el que lo gana puede esterilizar la entrada y no hacer nada. En la práctica varios grandes acreedores lo hicieron, y toda la carga del ajuste internacional recayó sobre las economías débiles." },
            { t: "Explicar el fin del patrón oro solo por la guerra", d: "La guerra lo interrumpió, pero lo que impidió restaurarlo fue político: sufragio ampliado, sindicatos fuertes y gobiernos a los que ya se responsabilizaba del desempleo. Un régimen que exige deflación no sobrevive cuando quienes sufren la deflación votan." },
            { t: "Tratar la resistencia al libre comercio como irracionalidad", d: "El terrateniente arruinado por el grano americano perdía renta real, y el jornalero, el empleo. La ganancia agregada del comercio es cierta y no compensa automáticamente a nadie. Los aranceles de 1879 responden a pérdidas concretas de grupos concentrados y bien organizados." },
            { t: "Olvidar la emigración al comparar con la globalización actual", d: "Cincuenta y cinco millones de europeos emigraron entre 1850 y 1914, y esa válvula alivió la presión sobre los perdedores del comercio y contribuyó a la convergencia salarial entre continentes. Hoy esa válvula está cerrada, y por eso la dinámica política del ajuste comercial es distinta." },
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
            "Este periodo es también el de nacimiento de la estadística económica internacional, y varias convenciones que usamos hoy vienen de entonces.",
          ],
          lista: [
            "Las **estadísticas de comercio exterior** son las series económicas continuas más antiguas que existen, porque los aranceles obligaban a registrar cada mercancía en aduana. Es el mismo registro que hoy alimenta el componente X − M del enfoque del gasto de la ficha 10.07, y por eso es la parte de las cuentas nacionales con mejor historia documental.",
            "La **balanza de pagos** se sistematiza en este periodo para vigilar precisamente lo que el patrón oro obligaba a vigilar: si entraba o salía oro. Su estructura de cuenta corriente, cuenta de capital y cuenta financiera —la de la ficha 3.10— nace de esa necesidad práctica y no de un diseño teórico previo.",
            "El indicador de **apertura comercial**, la suma de exportaciones e importaciones sobre el PIB, es el que sostiene el gráfico de esta ficha, y tiene un defecto que conviene conocer: cuenta el valor bruto de lo que cruza la frontera, de modo que un componente que entra y sale varias veces se cuenta cada vez. Eso infla la apertura contemporánea frente a la de 1913, cuando se comerciaban productos terminados. La ficha 11.07 explica por qué existen las medidas en **valor añadido**.",
            "Las **reservas de oro y divisas** son un activo de la cuenta financiera, y su variación es el saldo que cerraba el sistema. Hoy figuran en las cuentas financieras del banco central, con la lógica de sectores institucionales de la ficha 10.06, pero el concepto es el mismo que se anotaba en el siglo XIX.",
            "Y las **series de precios** de este periodo son la base de casi toda la historia económica cuantitativa: sin índices de precios no hay salarios reales, y sin salarios reales no hay forma de decir si la gente vivía mejor. Su construcción tiene los problemas de cesta y ponderación de la ficha 1.07, agravados por la escasez de fuentes.",
          ],
          cierre:
            "El punto general es que **la estadística económica nace para vigilar un régimen monetario**, no para medir el bienestar. Buena parte de lo que hoy publican los institutos existe porque alguien necesitó saber si entraba o salía oro, y esa genealogía explica qué se mide bien —el comercio, los precios— y qué se sigue midiendo mal.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Cómo cerraba un déficit exterior el patrón oro sin que ningún gobierno decidiera nada?", a: "Por el flujo de metálico y precios: el deficitario pierde oro, su masa monetaria cae de 100 a 90 y sus precios bajan un 10 %; el superavitario recibe el oro y los suyos suben otro tanto. El deficitario se abarata un 18,2 % en términos relativos y el desequilibrio se corrige. El mecanismo es aritmética de la teoría cuantitativa, no política." },
            { q: "¿Qué supuesto del mecanismo falla en la práctica?", a: "Que los precios bajen de verdad. Bajar el nivel de precios un 10 % exige bajar salarios nominales y contratos ya firmados, y esos no caen con facilidad. Cuando el salario nominal resiste, lo que se ajusta es el empleo, de modo que el mecanismo funciona por la vía de la recesión y no por la de los precios." },
            { q: "¿Por qué el ajuste era asimétrico?", a: "Porque el país que pierde oro está obligado a ajustar —las reservas se agotan y la convertibilidad deja de ser cumplible— mientras que el que lo gana puede esterilizar la entrada comprando el metal y vendiendo deuda, conservando su ventaja sin coste. Toda la carga del ajuste internacional recaía así sobre las economías débiles." },
            { q: "¿Por qué el patrón oro era creíble entonces y no después?", a: "Porque nadie exigía cuentas a los bancos centrales por el desempleo: el sufragio era restringido, los sindicatos débiles y no existía la idea de que un gobierno respondiera del ciclo. Cuando el ajuste dolía, dolía a quien no votaba. Con sufragio ampliado y partidos obreros en el parlamento, sostener la convertibilidad a costa del empleo dejó de ser posible." },
            { q: "¿Por qué Gran Bretaña no puso aranceles al grano americano y Alemania sí?", a: "Por aritmética política, no por virtud: la población agraria británica era ya minoritaria y su electorado, urbano y beneficiado por el pan barato. En Alemania la coalición de terratenientes del este e industria pesada tenía peso suficiente para imponer la protección en 1879. Dinamarca eligió una tercera vía, reconvertirse hacia lácteos y carne en lugar de protegerse." },
            { q: "¿Qué diferencia hay entre aquella globalización y la actual respecto a los perdedores?", a: "La emigración. Entre 1850 y 1914 unos cincuenta y cinco millones de europeos se marcharon, lo que alivió la presión sobre los perdedores del comercio y contribuyó a la convergencia salarial entre continentes. Hoy esa válvula está cerrada y los perdedores permanecen donde están, lo que cambia por completo la dinámica política del ajuste." },
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
              q: "¿Es la globalización una tendencia irreversible de la historia?",
              opciones: [
                "Sí: el comercio mundial ha crecido de forma sostenida desde el siglo XIX",
                "No, pero los retrocesos nunca han durado más de una década",
                "No: la apertura comercial de 1913 no se recuperó hasta los años setenta, tras sesenta años de desintegración",
                "Sí, salvo interrupciones breves durante las guerras",
              ],
              correcta: 2,
              porque: [
                "El crecimiento sostenido describe algunos tramos y no el conjunto del periodo.",
                "El retroceso de entreguerras y posguerra duró seis décadas.",
                "Es un régimen político sostenido por decisiones, no una ley natural. Se puede desmontar, y se desmontó durante dos generaciones.",
                "Sesenta años no son una interrupción breve: son la vida laboral entera de dos generaciones.",
              ],
            },
            {
              q: "El patrón oro se asocia a la estabilidad de precios. ¿Qué matiza esa idea?",
              opciones: [
                "Que la estabilidad se medía con índices poco fiables",
                "Que los precios estables se lograron solo después de 1890",
                "Que los precios eran estables a largo plazo y muy volátiles a corto, con deflaciones prolongadas y crisis bancarias frecuentes",
                "Que la estabilidad de precios era un objetivo declarado y nunca conseguido",
              ],
              correcta: 2,
              porque: [
                "Los índices tienen limitaciones y no son lo que desmiente la imagen idealizada.",
                "La volatilidad de corto plazo acompañó a todo el periodo.",
                "Y esa estabilidad de largo plazo se compraba renunciando a la política monetaria: el tipo de cambio mandaba sobre el empleo.",
                "Sí se consiguió a largo plazo. Lo que se pasa por alto es a qué precio y con qué volatilidad por el camino.",
              ],
            },
            {
              q: "El mecanismo de Hume predice que un país con déficit exterior pierde oro, sus precios bajan y recupera competitividad. ¿Qué falla?",
              opciones: [
                "Que ajustar por precios exige que salarios y contratos nominales caigan de verdad, y como no caen el ajuste se produce vía producción y empleo",
                "Que la cantidad de oro no determina el nivel de precios",
                "Que el comercio no responde a los precios relativos",
                "Que los flujos de oro eran demasiado pequeños para mover nada",
              ],
              correcta: 0,
              porque: [
                "Es el mismo problema que reaparece en cualquier devaluación interna: sin rigidez nominal el ajuste sería indoloro, y con ella lo paga el empleo.",
                "La relación entre oro y precios es el supuesto del mecanismo y no es lo que se rompe.",
                "El comercio sí responde a los precios relativos; el problema es cómo se llega a ese cambio de precios.",
                "Los flujos eran suficientes; el obstáculo estaba en la rigidez de precios y salarios.",
              ],
            },
            {
              q: "¿Era simétrico el ajuste bajo el patrón oro entre países con déficit y con superávit?",
              opciones: [
                "No: los países con superávit ajustaban más rápido por presión inflacionista",
                "Sí: ambos tenían el mismo incentivo a restablecer el equilibrio",
                "Sí, porque las reglas del sistema obligaban a ambos por igual",
                "No: el que pierde oro está obligado a ajustar porque agota reservas; el que lo gana puede esterilizar la entrada y no hacer nada",
              ],
              correcta: 3,
              porque: [
                "La presión inflacionista podía neutralizarse esterilizando, y es lo que se hizo.",
                "El incentivo no es el mismo: quedarse sin reservas es una urgencia, acumularlas no lo es.",
                "Las reglas no obligaban al acreedor, que es precisamente el hueco del sistema.",
                "En la práctica varios grandes acreedores esterilizaron durante años, y todo el peso del ajuste recayó sobre los deficitarios. Es la asimetría que reaparece en cualquier unión monetaria.",
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
            { ref: "O'Rourke y Williamson, Globalization and History", nota: "el estudio cuantitativo de referencia sobre la convergencia de precios y salarios en el Atlántico; de aquí sale el caso del grano." },
            { ref: "Eichengreen, La globalización del capital", nota: "la historia del sistema monetario internacional; el capítulo del patrón oro explica la condición política de su credibilidad." },
            { ref: "Polanyi, La gran transformación", nota: "la lectura contraria: por qué un mercado desincrustado de la sociedad genera la reacción política que acaba destruyéndolo." },
            { ref: "Findlay y O'Rourke, Power and Plenty", nota: "mil años de comercio mundial y su relación con el poder militar; sitúa el episodio en una perspectiva mucho más larga." },
            { ref: "Bordo y Rockoff, «The Gold Standard as a Good Housekeeping Seal of Approval», 1996", nota: "por qué adherirse al patrón oro abarataba el crédito exterior; el mecanismo reputacional que sostenía el sistema." },
          ],
        },
      ],
    },
  ],
};
