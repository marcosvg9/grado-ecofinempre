/* Ficha 3.02 — Inflacion, IPC y deflactor del PIB. */

export default {
  codigo: "3.02",
  titulo: "Inflación, IPC y deflactor del PIB",
  nivel: 1,
  bloque: "Macroeconomía",
  tiempo: "3 h",
  nucleo:
    "Dos medidas distintas de la misma idea que divergen sistemáticamente. Saber cuándo usar cada una exige entender que no miden la misma cesta: una sigue lo que compran los hogares, incluidas las importaciones, y la otra lo que produce el país, incluidas las exportaciones.",
  requiere: "1.07 Números índice · 3.01 PIB y agregados",
  abre: "3.03 Paro y curva de Phillips · 3.08 Política monetaria · 3.11 Deuda pública y sostenibilidad · 10.08 Índices encadenados",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "**Inflación** es el aumento sostenido y generalizado del nivel de precios. Las dos cualificaciones importan: que suba el precio de un producto no es inflación sino un **precio relativo** moviéndose, que es la señal con la que funciona el mercado de la ficha 1.02; y una subida puntual del nivel general tampoco lo es, porque lo que define el fenómeno es su **persistencia**. Confundir un cambio de precios relativos con inflación lleva a políticas que atacan el síntoma equivocado, y es probablemente el error más caro de todo este bloque.",
            "Hay dos medidas principales y **no miden lo mismo**. El **IPC** sigue el precio de una cesta representativa del consumo de los hogares, con ponderaciones fijadas por la Encuesta de Presupuestos Familiares y actualizadas cada año: es en esencia un índice de **Laspeyres**, con el sesgo al alza de la ficha 1.07. El **deflactor del PIB** compara el PIB nominal con el real y por tanto cubre **todo lo que produce el país**, con ponderaciones que cambian cada periodo: es en esencia un **Paasche**. De ahí dos diferencias sustantivas: el IPC **incluye los bienes importados y excluye las exportaciones**; el deflactor hace exactamente lo contrario. Y el IPC no recoge los precios de la inversión ni del consumo público, que sí entran en el deflactor.",
            "Esa divergencia no es un defecto: es información. Cuando el IPC sube mucho más que el deflactor, lo habitual es que el impulso venga de **fuera** —energía o alimentos importados que encarecen el consumo sin encarecer la producción nacional—; y ese diferencial mide, en la práctica, un **deterioro de la relación real de intercambio**, es decir, que el país necesita entregar más producto propio por cada unidad de producto ajeno. Cuando el deflactor sube más, el impulso suele ser interno. **Leer los dos índices a la vez dice más que leer cualquiera de ellos por separado.**",
            "Junto a la general se publica la **inflación subyacente**, que excluye energía y alimentos no elaborados. No es una inflación mejor ni más verdadera —la energía se paga igual— sino la respuesta a otra pregunta: **qué parte del proceso es persistente**, descontando los componentes más volátiles y más ligados a impulsos externos. Que la general y la subyacente vayan en direcciones opuestas durante meses es normal, y suele indicar que un choque externo se está trasladando —o dejando de trasladarse— al resto de los precios, lo que se conoce como **efectos de segunda vuelta**.",
            "Sobre las causas, conviene manejar tres mecanismos sin convertirlos en escuelas rivales. La inflación **de demanda** aparece cuando el gasto agregado supera la capacidad productiva, y es el desplazamiento de la demanda agregada de la ficha 3.06. La de **costes** viene de un encarecimiento de insumos o de un choque de oferta, y tiene la propiedad desagradable de subir precios **y** reducir producción a la vez. Y a largo plazo está el mecanismo **monetario**: sostener una inflación alta durante años requiere que la cantidad de dinero crezca por encima de la producción, algo que la ficha 3.07 formaliza. Los tres pueden operar simultáneamente, y separarlos es un problema empírico, no doctrinal.",
            "Por último, **por qué importa**. Una inflación moderada y previsible es poco costosa; el daño lo hacen la alta y sobre todo la **imprevisible**. Erosiona el valor real de los contratos fijados en términos nominales y **redistribuye entre deudores y acreedores** sin que nadie lo haya decidido; introduce ruido en el sistema de precios, que deja de distinguir con claridad un cambio relativo de uno general; consume recursos en protegerse de ella; y eleva de forma automática la presión fiscal cuando los tramos impositivos no se actualizan. Por eso los bancos centrales fijan objetivos de inflación **positivos pero bajos**: la deflación tiene problemas propios y peores, como muestra la ficha 3.08.",
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
            { nom: "Tasa de inflación", sub: "Variación del nivel general de precios.", cols: ["$\\pi = \\left(\\dfrac{P_t}{P_{t-1}} - 1\\right) \\times 100$"] },
            { nom: "IPC", sub: "Cesta de consumo de los hogares; tipo Laspeyres.", cols: ["Incluye importados, excluye exportaciones"] },
            { nom: "Deflactor del PIB", sub: "Toda la producción interior; tipo Paasche.", cols: ["Deflactor = (PIB nominal / PIB real) × 100"] },
            { nom: "Inflación subyacente", sub: "Aproxima la parte persistente.", cols: ["General sin energía ni alimentos frescos"] },
            { nom: "Ecuación de Fisher", sub: "La versión exacta, no la aproximada.", cols: ["(1 + i) = (1 + r)(1 + $\\pi$)"] },
            { nom: "Aproximación de Fisher", sub: "Válida solo con tasas pequeñas.", cols: ["$r \\approx i - \\pi$"] },
            { nom: "Teoría cuantitativa", sub: "Identidad; se vuelve teoría al fijar V y Y.", cols: ["$M \\cdot V = P \\cdot Y$"] },
            { nom: "Impuesto inflacionario", sub: "Lo paga quien mantiene saldos nominales.", cols: ["Base = saldos monetarios · tipo = $\\pi$"] },
            { nom: "Progresividad en frío", sub: "Sube el tipo medio sin subir la renta real.", cols: ["Tramos no deflactados $\\Rightarrow$ ↑ tipo efectivo"] },
            { nom: "Relación real de intercambio", sub: "El diferencial IPC-deflactor la aproxima.", cols: ["Precios de exportación / precios de importación"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: por qué divergen los dos índices",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía produce dos bienes, **A** y **B**, y además importa un tercero, **C**, que consume pero no fabrica. Los precios se mueven así: **A sube un 10 %**, **B un 2 %** y **C, importado, un 20 %**. Los hogares consumen 100 de A, 50 de B y 50 de C; la producción interior es de 150 de A y 100 de B, porque una parte se exporta.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Índice", "Qué incluye", "Cálculo", "Resultado"],
          filas: [
            ["IPC", "A, B y C consumidos por los hogares", "392 / 350", "+12,00 %"],
            { celdas: ["Deflactor del PIB", "A y B producidos en el país", "369 / 350", "+5,43 %"], clase: "total" },
          ],
          nota: "**Más del doble de diferencia, con los mismos precios y sin ningún error de cálculo.** La causa está en la segunda columna: el bien importado que más se ha encarecido pesa en el IPC y **no pesa en absoluto en el deflactor**, porque no se produce aquí. Cuando en un episodio real el IPC se dispara y el deflactor apenas se mueve, la lectura es exactamente esta: el impulso viene de fuera y el país está pagando más caras sus importaciones. Ese diferencial es, en la práctica, un empobrecimiento que ninguna política monetaria interna puede evitar, solo repartir.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Mes", y: "Tasa interanual %" },
          dominio: { x: [1, 24], y: [0, 12] },
          marcasX: [1, 6, 12, 18, 24],
          marcasY: [0, 2, 4, 6, 8, 10],
          series: [
            {
              nombre: "Inflación general",
              color: "alerta",
              etiquetaEn: [10.5, 10.4],
              puntos: [[1, 2], [2, 2.5], [3, 3.5], [4, 5], [5, 6.5], [6, 8], [7, 9.5], [8, 10.5], [9, 10.8], [10, 10.2], [11, 9], [12, 7.5], [13, 6.5], [14, 5.5], [15, 4.5], [16, 4], [17, 3.6], [18, 3.4], [19, 3.2], [20, 3.1], [21, 3], [22, 3], [23, 2.9], [24, 2.8]],
            },
            {
              nombre: "Inflación subyacente",
              color: "acento",
              etiquetaEn: [16, 6.6],
              puntos: [[1, 1.5], [2, 1.6], [3, 1.8], [4, 2.1], [5, 2.5], [6, 3], [7, 3.6], [8, 4.2], [9, 4.8], [10, 5.3], [11, 5.7], [12, 6], [13, 6.2], [14, 6.3], [15, 6.3], [16, 6.2], [17, 6], [18, 5.7], [19, 5.4], [20, 5.1], [21, 4.8], [22, 4.5], [23, 4.2], [24, 4]],
            },
            { nombre: "Objetivo", color: "tinta2", trazo: "punteado", puntos: [[1, 2], [24, 2]], etiquetaEn: [22, 1.2] },
          ],
          nota: "Perfil típico de un choque externo, construido para la ficha. La **general** sube antes, llega más alto y baja antes, arrastrada por la energía. La **subyacente** reacciona con retraso, alcanza su máximo cuando la general ya está cayendo y **desciende mucho más despacio**: son los efectos de segunda vuelta, el choque trasladándose al resto de precios y a los salarios. Hacia el mes 14 la general está en el 5,5 % y bajando mientras la subyacente está en el 6,3 % y aún subiendo. **Ambas son correctas y contestan preguntas distintas**, y un banco central mira sobre todo la segunda.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y la aritmética que conviene no equivocar.** Con un tipo de interés nominal del **5 %** y una inflación del **3 %**, el tipo real no es exactamente el 2 %: es **1,942 %**, porque la relación es multiplicativa. La aproximación sirve con tasas pequeñas y **deja de servir en cuanto la inflación se acelera**, que es justo cuando el cálculo importa.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: quién gana y quién pierde con la inflación",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La inflación no es un impuesto uniforme: es una **redistribución silenciosa** con ganadores y perdedores concretos que nadie ha elegido. Identificarlos es el ejercicio más útil que puede hacerse con esta ficha.",
            "**Los deudores a tipo fijo ganan, y bastante.** Quien tomó un préstamo de 100.000 al 3 % fijo esperando una inflación del 2 % contaba con pagar un 1 % real. Si la inflación acaba siendo del 6 %, el tipo real **ex post** es de **−2,83 %**: el acreedor está financiando al deudor. Y ese es exactamente el mecanismo que hace que la inflación reduzca el peso real de la deuda pública, motivo por el cual un Estado muy endeudado y con deuda a tipo fijo es un ganador estructural de la inflación no anticipada. **Lo decisivo es la palabra «no anticipada»**: si la inflación se espera, el tipo nominal ya la incorpora y la redistribución no se produce.",
            "**Los perdedores son quienes tienen posiciones nominales fijas y poco poder de negociación.** Ahorro en depósitos a tipos bajos, rentas contractuales no indexadas, y salarios sin cláusula de revisión. Y aquí aparece el conflicto distributivo característico de un choque de costes: si todos los grupos intentan mantener su renta real trasladando el encarecimiento —salarios que persiguen precios y precios que persiguen salarios— **el choque externo, que empobrece al país en conjunto, se convierte en inflación persistente**. Es la parte que muestra la línea subyacente del gráfico.",
            "**Hay un tercer ganador que rara vez se menciona: la hacienda pública**, y por dos vías. La primera es la **progresividad en frío**. Si los tramos del impuesto sobre la renta no se actualizan, un contribuyente cuyo salario sube exactamente lo mismo que los precios paga un tipo medio superior. Con una escala del 20 % hasta 20.000 y del 35 % después, alguien que pase de 30.000 a 31.500 con una inflación del 5 % ve subir su tipo medio del 25,00 % al **25,48 %** y **su renta neta real cae un 0,63 %** pese a no haber ganado ni un euro real. Ha habido una subida de impuestos que nadie ha votado.",
            "**La segunda vía es el impuesto inflacionario propiamente dicho**, que grava a quien mantiene saldos en efectivo o en cuentas no remuneradas: su valor real se erosiona a la tasa de inflación, y el beneficiario es el emisor. Es un impuesto especialmente regresivo, porque la proporción de patrimonio mantenida en forma líquida es mayor en los hogares de renta baja, que además tienen menos acceso a activos que protejan del alza de precios.",
            "**La conclusión que ordena el debate público.** Discutir si la inflación es buena o mala en abstracto no lleva a ninguna parte: **depende de qué lado del contrato se esté**. Lo que sí puede afirmarse con generalidad es que la inflación **imprevisible** es peor que la alta pero estable, porque impide protegerse; que la indexación generalizada protege a quien la tiene y **prolonga el proceso** para todos; y que un choque externo hace más pobre al país en conjunto, de modo que el conflicto redistributivo que desencadena **no puede tener ganadores netos internos**, solo un reparto de la pérdida.",
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
            { t: "Llamar inflación a la subida de un precio concreto", d: "Que suba un producto es un cambio de precios relativos, que es la señal con la que funciona el mercado. Inflación es la subida sostenida y generalizada del nivel de precios. Confundirlas lleva a responder con política monetaria a un problema de oferta sectorial." },
            { t: "Esperar que el IPC y el deflactor coincidan", d: "Miden cestas distintas: el IPC cubre el consumo de los hogares e incluye importaciones; el deflactor cubre la producción interior e incluye exportaciones. En el ejemplo dan 12 % y 5,43 % con los mismos precios. Su divergencia es información, no un error." },
            { t: "Creer que la inflación subyacente es la inflación «real»", d: "Excluye energía y alimentos frescos para aproximar la parte persistente, no porque esos precios no cuenten. La general mide lo que sube la cesta; la subyacente, hacia dónde tiende el proceso. Son preguntas distintas y ambas legítimas." },
            { t: "Restar la inflación del tipo nominal sin más", d: "La relación es multiplicativa: con un 5 % nominal y un 3 % de inflación, el tipo real es 1,942 %, no 2 %. La aproximación funciona con tasas pequeñas y falla justo cuando la inflación se acelera, que es cuando el cálculo importa." },
            { t: "Confundir una desaceleración con una bajada de precios", d: "Que la tasa de inflación caiga significa que los precios suben menos deprisa, no que bajen. Una caída del nivel de precios es deflación, un fenómeno distinto y con problemas propios más graves, como discute la ficha 3.08." },
            { t: "Suponer que la inflación perjudica a todos por igual", d: "Redistribuye. Beneficia a los deudores a tipo fijo, incluido el Estado, y perjudica a los acreedores y a quienes tienen rentas nominales no indexadas. Lo decisivo es si estaba anticipada: si lo estaba, los tipos nominales ya la incorporan y la redistribución no llega a producirse." },
            { t: "Ignorar la progresividad en frío", d: "Si los tramos del impuesto no se actualizan, una renta que sube igual que los precios paga un tipo medio superior y pierde poder adquisitivo neto. Es una subida de impuestos automática que no aparece en ninguna reforma y que solo se evita deflactando la escala." },
            { t: "Pensar que la indexación generalizada resuelve el problema", d: "Protege a quien la tiene y traslada la pérdida a quien no. Además realimenta el proceso: si todos los contratos siguen a los precios pasados, un choque puntual se convierte en inflación persistente. Es el mecanismo de segunda vuelta que se observa en la subyacente." },
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
            "El IPC no forma parte de las cuentas nacionales y el deflactor sí, y esa diferencia de origen explica casi todas sus discrepancias.",
          ],
          lista: [
            "El **IPC** es una estadística de precios independiente, elaborada por el INE con recogida directa en establecimientos y ponderaciones de la Encuesta de Presupuestos Familiares. El **deflactor del PIB** no se recoge: se deduce del cociente entre el agregado nominal y el real, como recordaba la ficha 1.07.",
            "El **IPCA** armonizado sigue metodología europea común y es el índice que utiliza el BCE para su objetivo. Difiere del IPC nacional en cobertura y en el tratamiento de algunas partidas, por lo que comparar el IPC español con el IPCA de la zona euro introduce un sesgo evitable.",
            "El **deflactor del consumo privado** que sale de las cuentas nacionales es un tercer índice, conceptualmente más cercano al IPC pero con cobertura y fórmula distintas. Que existan tres medidas del mismo fenómeno no es redundancia: cada una encaja en un marco contable diferente.",
            "La **relación real de intercambio** —precios de exportación frente a precios de importación— se obtiene de los deflactores de comercio exterior y es la magnitud que capta formalmente el fenómeno del ejemplo numérico: un país puede producir lo mismo y ser más pobre porque lo que compra fuera se ha encarecido más que lo que vende.",
            "Y el tratamiento de los **alquileres imputados** explica buena parte de la distancia entre inflación medida y percibida: el IPC recoge alquileres efectivos y no el precio de compra de vivienda, que se considera inversión. Quien está comprando casa afronta una subida que el índice, correctamente según su definición, no registra.",
          ],
          cierre:
            "El punto que más rendimiento da es el cuarto: cuando el IPC sube mucho más que el deflactor, la diferencia no es un error estadístico sino la medida de que el país está pagando más caro lo que importa. Es un empobrecimiento real, y ninguna política interna lo evita.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "¿Por qué el IPC puede subir un 12 % mientras el deflactor del PIB sube un 5 %?", a: "Porque miden cestas distintas. El IPC cubre lo que consumen los hogares, incluidos los bienes importados; el deflactor cubre lo que produce el país, incluidas las exportaciones y excluidas las importaciones. Si el encarecimiento viene de un bien importado, pesa en el primero y no en el segundo." },
            { q: "Tipo nominal del 5 % e inflación del 3 %. ¿Cuál es el tipo real?", a: "1,942 %. La relación de Fisher es multiplicativa: $(1+i) = (1+r)(1+\\pi)$, así que $r = 1{,}05/1{,}03 - 1$. La resta simple da 2 % y es una aproximación aceptable solo con tasas pequeñas; con inflación alta el error se vuelve relevante." },
            { q: "La inflación general baja y la subyacente sube. ¿Es contradictorio?", a: "No, y es un patrón habitual tras un choque externo. La general cae porque la energía deja de subir, mientras que la subyacente refleja el traslado del choque al resto de precios y salarios, que llega con retraso. Contestan preguntas distintas: cuánto ha subido la cesta y hacia dónde tiende el proceso." },
            { q: "¿Quién gana con una inflación superior a la esperada?", a: "Los deudores a tipo fijo, incluido el Estado: un préstamo al 3 % con inflación del 6 % tiene un tipo real de −2,83 %. Pierden los acreedores y quienes tienen rentas nominales no indexadas. Si la inflación estuviera anticipada, el tipo nominal ya la incorporaría y no habría redistribución." },
            { q: "¿Qué es la progresividad en frío?", a: "La subida automática del tipo efectivo cuando los tramos del impuesto no se actualizan con los precios. Alguien cuya renta sube igual que la inflación pasa a un tipo medio superior y pierde poder adquisitivo neto: en el ejemplo, un 0,63 % pese a no haber ganado nada real. Es una subida de impuestos que nadie ha aprobado." },
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
              q: "Sube un 30 % el precio del aceite de oliva. ¿Es eso inflación?",
              opciones: [
                "No, salvo que se traslade a otros productos",
                "Sí: los precios han subido",
                "No: es un cambio de precios relativos; inflación es la subida sostenida y generalizada del nivel de precios",
                "Sí, si el aceite pesa lo suficiente en la cesta del IPC",
              ],
              correcta: 2,
              porque: [
                "El traslado a otros precios sería un efecto de segunda ronda, que sí puede acabar en inflación. Pero eso es un proceso posterior, no la subida inicial.",
                "Que suba un producto es la señal con la que funciona el mercado: dice que escasea y llama a producir más. Llamarlo inflación confunde el mecanismo con la enfermedad.",
                "La distinción importa porque las respuestas de política son opuestas: contra un cambio de precios relativos no se hace política monetaria.",
                "Su peso determina cuánto contribuye a la tasa general, pero no convierte una subida aislada en un fenómeno generalizado.",
              ],
            },
            {
              q: "En un año el IPC sube un 3,2 % y el deflactor del PIB un 2,4 %. ¿Qué indica esa diferencia?",
              opciones: [
                "Que uno de los dos está mal calculado",
                "Que la inflación real está entre ambas cifras",
                "Que miden cestas distintas: el IPC incluye importaciones y el deflactor, exportaciones",
                "Que el IPC usa Paasche y el deflactor Laspeyres",
              ],
              correcta: 2,
              porque: [
                "Ambos están bien calculados y divergen de forma sistemática y por motivos conocidos. Buscar un error es buscar donde no hay nada.",
                "No hay una «inflación real» oculta: hay dos preguntas distintas con dos respuestas correctas cada una.",
                "El IPC cubre el consumo de los hogares e incluye lo importado; el deflactor cubre la producción interior e incluye lo exportado. Una subida del petróleo empuja al IPC y no al deflactor.",
                "Es al revés: el IPC es un Laspeyres de cesta fija y el deflactor un Paasche implícito.",
              ],
            },
            {
              q: "El tipo de interés nominal es del 5 % y la inflación del 3 %. ¿Cuál es el tipo real?",
              opciones: [
                "8 %, sumando ambos",
                "1,67 %, dividiendo el nominal entre la inflación",
                "2 %, restando la inflación",
                "1,942 %: la relación de Fisher es multiplicativa",
              ],
              correcta: 3,
              porque: [
                "Sumar invierte el sentido: la inflación erosiona el rendimiento nominal, no lo amplía.",
                "Dividir las tasas sin los unos no corresponde a ninguna relación: hay que dividir los factores $(1+i)$ y $(1+\\pi)$.",
                "La resta es la aproximación de Fisher y funciona con tasas pequeñas. Aquí el error es de seis centésimas; con inflación alta deja de ser aceptable.",
                "$(1+i) = (1+r)(1+\\pi)$, así que $r = 1{,}05/1{,}03 - 1 = 1{,}942\\ \\%$. Es el mismo encadenamiento que rige cualquier composición de tasas.",
              ],
            },
            {
              q: "Los tramos del IRPF no se actualizan y los salarios suben igual que los precios. ¿Qué ocurre?",
              opciones: [
                "El tipo medio sube y se pierde poder adquisitivo neto: es la progresividad en frío",
                "Nada: el poder adquisitivo se mantiene",
                "Sube la recaudación, pero el contribuyente queda igual",
                "Baja la recaudación, porque las rentas reales no crecen",
              ],
              correcta: 0,
              porque: [
                "Es una subida de impuestos que nadie ha aprobado y que ocurre por omisión. Actualizar los tramos con la inflación es lo que la evita.",
                "El salario bruto sí sigue a los precios, pero el neto no: al pasar a un tramo superior, el impuesto se lleva una proporción mayor de la misma renta real.",
                "El contribuyente no queda igual: paga un tipo medio mayor sobre la misma capacidad de compra.",
                "La recaudación sube, no baja: es exactamente el efecto que hace atractivo no actualizar los tramos.",
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
            { ref: "Blanchard, Macroeconomía", nota: "los capítulos de inflación y de la relación entre dinero, producción y precios; el marco de referencia de esta ficha." },
            { ref: "INE, metodología del IPC e IPCA", nota: "cesta, ponderaciones, ajustes de calidad y diferencias entre ambos índices; la fuente primaria." },
            { ref: "Banco de España, Boletín Económico", nota: "análisis periódicos de la descomposición de la inflación española y de los efectos de segunda vuelta." },
            { ref: "Mishkin, Moneda, banca y mercados financieros", nota: "los costes de la inflación y la ecuación de Fisher tratados con detalle; enlaza con las fichas 3.07 y 3.08." },
          ],
        },
      ],
    },
  ],
};
