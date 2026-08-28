/* Ficha 3.01 — PIB, renta nacional y agregados macroeconomicos. */

export default {
  codigo: "3.01",
  titulo: "PIB, renta nacional y agregados macroeconómicos",
  nivel: 1,
  bloque: "Macroeconomía",
  tiempo: "3 h",
  nucleo:
    "Qué entra y qué queda fuera del PIB, y por qué la frontera es una convención discutible. No es un defecto que pueda corregirse: cualquier frontera dejaría algo fuera, y saber cuál se eligió es lo que permite usar la cifra sin que la cifra le use a uno.",
  requiere: "1.06 Flujo circular · 1.07 Números índice",
  abre: "3.02 Inflación · 3.06 Oferta y demanda agregadas · 10.07 Los tres enfoques",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **producto interior bruto** es el valor de los bienes y servicios **finales** producidos **dentro** de un territorio en un **periodo** determinado. Conviene desmenuzar esa definición porque cada palabra excluye algo. **Finales**: no se cuentan los consumos intermedios, por la razón de la ficha 1.06. **Producidos**: no se cuentan las transacciones que solo cambian de manos activos ya existentes —vender una casa usada o unas acciones no genera PIB, aunque sí lo genera la comisión del intermediario, que es un servicio nuevo—. **Dentro**: cuenta el territorio, no la nacionalidad. Y **en un periodo**: es un **flujo**, no un **fondo**, distinción que separa el PIB de la riqueza igual que la cuenta de resultados se separa del balance en la ficha 5.10.",
            "De ahí salen los parientes cercanos del PIB, que responden a preguntas distintas. La **renta nacional bruta** parte del PIB y le suma las rentas que los residentes obtienen fuera menos las que los no residentes obtienen dentro: pasa del criterio **territorial** al de **propiedad**. La diferencia puede ser enorme en economías con mucha inversión extranjera. La **renta nacional disponible** añade las transferencias corrientes netas del exterior. Y el prefijo **neto** frente a **bruto** siempre significa lo mismo: haber descontado el **consumo de capital fijo**, es decir, el desgaste del capital existente. Lo neto es conceptualmente superior —mide lo que se puede consumir sin empobrecerse— y se usa menos porque **la amortización se estima con convenciones**, no se observa.",
            "La distinción práctica más importante es entre **nominal y real**. El PIB nominal mezcla cantidad y precio, así que crece cuando se produce más y también cuando todo sube de precio. El **real** se obtiene deflactando con el aparato de la ficha 1.07, y es el único que responde a la pregunta de si se produce más. Su cociente define el **deflactor del PIB**, que como allí se vio no se calcula: se deduce. Cuando se dice que una economía creció un 2 %, **siempre** se está hablando del real, y confundirlo con el nominal es el error más elemental que se puede cometer con estas cifras.",
            "Para comparar entre países hacen falta dos ajustes más, y ninguno es opcional. El primero es dividir por la población: el **PIB per cápita** aproxima el nivel de vida medio, aunque siga siendo una media con todas las limitaciones de la ficha 1.05. El segundo es convertir monedas con **paridades de poder adquisitivo** en lugar de tipos de cambio de mercado, porque los precios de los bienes no comerciables difieren mucho entre países y el tipo de cambio no los recoge. Comparar PIB per cápita a tipo de cambio corriente **sobrestima sistemáticamente las diferencias** entre economías ricas y pobres.",
            "Y llega la parte incómoda, que conviene conocer bien porque es donde se concentra la crítica legítima. **Queda fuera del PIB** el trabajo doméstico y de cuidados no remunerado, pese a su enorme magnitud; queda fuera el ocio, de modo que dos economías con la misma producción y jornadas muy distintas parecen iguales; y quedan fuera los daños ambientales, que ni se descuentan ni aparecen, mientras que **el gasto en repararlos sí suma**. La **economía sumergida** sí se estima e incorpora, y desde 2014 también las actividades ilegales con contrapartida voluntaria, precisamente para que la comparación entre países no dependa de qué esté prohibido en cada uno.",
            "La conclusión razonable no es despreciar el agregado sino usarlo para lo que sirve. **El PIB mide producción de mercado, y lo hace bien.** No mide bienestar, ni sostenibilidad, ni distribución, y su creador lo advirtió desde el principio, como recordaba la ficha 1.09. Para lo demás existen cuentas satélite e indicadores complementarios que están calculados y publicados. El error no está en la cifra: está en pedirle que conteste preguntas para las que **ninguna frontera de producción podría servir**.",
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
            { nom: "PIB por el gasto", sub: "Definición, no teoría.", cols: ["PIB = C + I + G + (X − M)"] },
            { nom: "PIB por la producción", sub: "Suma de valores añadidos.", cols: ["$\\mathrm{PIB} = \\sum \\mathrm{VAB} + \\text{Impuestos netos sobre productos}$"] },
            { nom: "PIB por la renta", sub: "Cómo se reparte lo producido.", cols: ["PIB = D.1 + EBE + B.3 + Imp. netos"] },
            { nom: "Del PIB a la renta nacional bruta", sub: "De criterio territorial a criterio de propiedad.", cols: ["RNB = PIB + Rentas primarias netas del exterior"] },
            { nom: "Renta nacional disponible", sub: "Incorpora remesas y transferencias.", cols: ["RND = RNB + Transferencias corrientes netas"] },
            { nom: "Bruto frente a neto", sub: "Lo neto mide lo consumible sin empobrecerse.", cols: ["Neto = Bruto − Consumo de capital fijo"] },
            { nom: "PIB real", sub: "La única medida que responde a «se produce más».", cols: ["PIB real = PIB nominal / Deflactor × 100"] },
            { nom: "Deflactor implícito", sub: "Se deduce, no se recoge.", cols: ["Deflactor = (Nominal / Real) × 100"] },
            { nom: "Comparación entre países", sub: "El tipo de cambio de mercado no vale.", cols: ["PIB per cápita en PPA"] },
            { nom: "Brecha de producción", sub: "El potencial se estima, no se observa.", cols: ["Brecha = (Observado − Potencial) / Potencial"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: del PIB a la renta disponible",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía produce un **PIB de 1.000**. Buena parte de su capital productivo pertenece a no residentes, que se llevan rentas por 45; sus propios residentes obtienen 25 en el exterior. Recibe además remesas netas por 5 y su capital se deprecia en 150 al año.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Operación", "Importe"],
          filas: [
            ["Producto interior bruto", "Lo producido en el territorio", "1.000"],
            ["Rentas primarias netas del exterior", "25 recibidas − 45 pagadas", "−20"],
            ["Renta nacional bruta", "Lo que ganan los residentes", "980"],
            ["Transferencias corrientes netas", "Remesas y similares", "+5"],
            ["Renta nacional bruta disponible", "Lo que puede gastarse o ahorrarse", "985"],
            ["Consumo de capital fijo", "Desgaste del capital existente", "−150"],
            { celdas: ["Renta nacional neta disponible", "Lo consumible sin empobrecerse", "835"], clase: "total" },
          ],
          nota: "Las cuatro cifras responden a preguntas distintas y **ninguna sustituye a las otras**. Si interesa la actividad en el territorio —empleo, recaudación—, el dato es 1.000. Si interesa lo que ganan los residentes, es 980. Y si interesa cuánto puede consumir esta economía sin descapitalizarse, es **835**, un 16 % menos que el titular. La distancia entre la primera y la última fila es la razón por la que economías con mucha inversión extranjera pueden exhibir un PIB brillante y una renta disponible bastante más modesta.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Nominal, real y per cápita.** Al año siguiente el PIB nominal de esta economía sube a **1.060**, un 6 %. Pero el deflactor ha pasado de 100 a **103**, así que el PIB real es 1.060 / 1,03 = **1.029,1**: el crecimiento real es del **2,91 %**. Y como la población ha crecido de 100 a 101, el PIB real per cápita pasa de 10,00 a **10,19**, un **1,89 %**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Medida", "Año 1", "Año 2", "Variación"],
          filas: [
            ["PIB nominal", "1.000", "1.060,0", "+6,00 %"],
            ["Deflactor", "100", "103,0", "+3,00 %"],
            ["PIB real", "1.000", "1.029,1", "+2,91 %"],
            { celdas: ["PIB real per cápita", "10,00", "10,19", "+1,89 %"], clase: "total" },
          ],
          nota: "Tres cifras para el mismo año y las tres correctas: **6 %, 2,91 % y 1,89 %**. La distancia entre la primera y la tercera es lo que separa un titular de un análisis. Obsérvese también que 6 − 3 = 3 no es exactamente el 2,91 % verdadero: las tasas **no se restan, se encadenan**, según la ficha 1.07, y con tasas mayores la discrepancia deja de ser despreciable.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Año", y: "Índice" },
          dominio: { x: [1, 12], y: [95, 130] },
          marcasX: [1, 3, 5, 7, 9, 11],
          marcasY: [95, 105, 115, 125],
          series: [
            {
              nombre: "PIB potencial",
              color: "tinta2",
              trazo: "discontinuo",
              etiquetaEn: [9.5, 121],
              puntos: [[1, 100], [2, 102], [3, 104], [4, 106], [5, 108.1], [6, 110.3], [7, 112.5], [8, 114.7], [9, 117], [10, 119.4], [11, 121.7], [12, 124.2]],
            },
            {
              nombre: "PIB observado",
              color: "acento",
              etiquetaEn: [9.5, 111],
              puntos: [[1, 99], [2, 102], [3, 105], [4, 107], [5, 104], [6, 101], [7, 105], [8, 110], [9, 114], [10, 118], [11, 123], [12, 125]],
            },
          ],
          nota: "La línea discontinua es el **producto potencial**: lo que la economía podría producir con sus recursos plenamente empleados, en el sentido de la frontera de posibilidades de la ficha 1.01. La distancia entre ambas es la **brecha de producción**, positiva en los años 3-4 y muy negativa en los años 5-7. Conviene retener una cosa: **el potencial no se observa, se estima**, y métodos distintos dan resultados que pueden diferir en varios puntos. Se usa sin embargo para decidir política fiscal, con lo que la incertidumbre del modelo se traslada directamente a la norma.",
        },
      ],
    },
    {
      titulo: "Caso práctico: qué le pasa al PIB en una crisis sanitaria",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una crisis que obliga a cerrar actividades durante meses somete a las cuentas nacionales a una prueba de esfuerzo, y observarla enseña más sobre el agregado que cualquier explicación abstracta de su metodología.",
            "**El primer problema es medir servicios públicos que se prestan de otro modo.** La producción no de mercado se valora por **suma de costes**, según la convención de la ficha 2.05. Si un colegio deja de dar clases presenciales pero mantiene su plantilla, el coste sigue ahí, y con la convención estricta la producción no caería. Los organismos estadísticos europeos acordaron por ello medir estos servicios por **indicadores de actividad** —número de operaciones, alumnos atendidos— en lugar de por coste, precisamente porque la convención habitual daba un resultado que nadie consideraba defendible. **Una convención contable dejó de ser inocua en cuanto la realidad se movió lo suficiente.**",
            "**El segundo es que la caída no fue igual en todas partes, y la composición explica casi todo.** Una economía con mucho peso de hostelería, turismo, comercio presencial y actividades que requieren contacto sufre una contracción mayor que otra con más industria o más servicios teletrabajables, aunque la restricción sanitaria sea idéntica. No es una diferencia de gestión: es **estructura productiva**, que es exactamente el objeto de la ficha 10.01. Comparar caídas del PIB sin comparar composiciones sectoriales lleva a atribuir a la política lo que corresponde a la especialización.",
            "**El tercero es la diferencia entre flujo y fondo.** El PIB es un flujo: mide lo producido ese año. Una economía puede recuperar su nivel de PIB previo y no haber recuperado su situación anterior, porque durante la crisis se acumuló deuda, se destruyó capital organizativo, se interrumpieron trayectorias laborales y formativas. **Nada de eso está en el flujo**, y sin embargo condiciona el potencial futuro. Es la misma advertencia de la ficha 5.10 sobre leer una cuenta de resultados sin mirar el balance.",
            "**El cuarto es que las medidas de apoyo son transferencias, no producción.** Las prestaciones y ayudas mantienen la renta disponible de los hogares y por tanto sostienen el consumo, pero **no son PIB en sí mismas**: aparecen como transferencias (D.62) en las cuentas de las administraciones públicas. Confundir el importe de un programa de apoyo con su contribución al producto es un error que aparece con regularidad en el debate público.",
            "**Y la lección que queda.** El PIB midió lo que estaba diseñado para medir: producción de mercado. Lo que la crisis puso de manifiesto es cuántas de sus convenciones —valorar lo público a coste, ignorar el trabajo de cuidados que se multiplicó en los hogares, no registrar el capital humano interrumpido— **dejan de ser irrelevantes precisamente cuando más falta hace la cifra**. Esa es la mejor razón para conocerlas antes de citarla.",
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
            { t: "Comparar PIB nominal de años distintos", d: "Mezcla producción y precios. Un crecimiento nominal del 6 % con un deflactor del 3 % es un crecimiento real del 2,91 %, no del 6 %. Siempre que se habla de crecimiento económico se está hablando del real, salvo que se diga expresamente lo contrario." },
            { t: "Restar la inflación del crecimiento nominal", d: "Las tasas se encadenan, no se restan: 6 % nominal con 3 % de deflactor da 2,91 %, no 3 %. Con tasas pequeñas la aproximación pasa; con inflación alta el error se vuelve considerable." },
            { t: "Creer que vender una casa o unas acciones genera PIB", d: "Son transacciones de activos ya existentes, no producción nueva. Lo que sí genera PIB es el servicio de intermediación: la comisión del agente o del intermediario financiero, porque eso sí es un servicio producido en el periodo." },
            { t: "Confundir PIB con riqueza", d: "El PIB es un flujo anual y la riqueza es un fondo acumulado, igual que la cuenta de resultados y el balance de la ficha 5.10. Una economía puede recuperar su PIB previo con un patrimonio neto muy inferior al que tenía." },
            { t: "Comparar PIB per cápita entre países usando el tipo de cambio", d: "Los precios de los bienes no comerciables difieren mucho y el tipo de cambio no los recoge, así que las diferencias entre economías ricas y pobres quedan sistemáticamente sobrestimadas. La comparación válida usa paridades de poder adquisitivo." },
            { t: "Suponer que la economía sumergida queda fuera del PIB", d: "Se estima e incorpora, igual que desde 2014 se incorporan actividades ilegales con contrapartida voluntaria. La razón es de comparabilidad: si no, el PIB de un país dependería de qué actividades tenga prohibidas, lo que haría imposible compararlo con otro." },
            { t: "Interpretar el gasto en reparar un daño como creación de valor", d: "El daño no se descuenta del PIB y la reparación sí se suma, de modo que una catástrofe seguida de reconstrucción puede elevar el agregado. No es una paradoja ni un fallo de cálculo: es la consecuencia directa de medir producción de mercado y no patrimonio." },
            { t: "Tomar la brecha de producción como un dato observado", d: "El producto potencial es una estimación que depende del método, y distintos métodos difieren en varios puntos. Como se emplea en reglas fiscales, conviene saber que la incertidumbre metodológica acaba trasladándose a decisiones normativas concretas." },
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
            "Esta ficha es la puerta de entrada al bloque 10: todos sus conceptos tienen un código y una definición precisa en el SEC 2010.",
          ],
          lista: [
            "El PIB a precios de mercado (**B.1*g**) se obtiene por tres vías que deben cuadrar, según la ficha 1.06. En España, el INE publica la **Contabilidad Nacional Anual** y la **Trimestral**, y la ficha 10.10 se ocupa de sus revisiones y de la diferencia entre el dato que se conoció en su momento y el que hoy figura en la serie.",
            "El paso del PIB a la **renta nacional bruta** discurre por la cuenta de distribución primaria, con las rentas primarias del exterior (D.1, D.4). La **renta nacional bruta disponible** añade las transferencias corrientes (D.7). Cada fila del ejemplo numérico es literalmente un saldo de una cuenta del sistema.",
            "El **consumo de capital fijo** (P.51c) es la magnitud peor observada de todo el sistema: se calcula por el método del inventario permanente, con hipótesis sobre vidas útiles y patrones de depreciación. Por eso los agregados netos, conceptualmente superiores, se citan mucho menos que los brutos.",
            "La **frontera de producción** está definida expresamente en el SEC: incluye la producción para autoconsumo de bienes y el alquiler imputado de la vivienda en propiedad, y excluye los servicios domésticos producidos y consumidos por el propio hogar. Es una **decisión de sistema**, tomada por comparabilidad y viabilidad de medición, y sus efectos los discutía la ficha 1.10.",
            "Y las **cuentas satélite** —medioambientales, de salud, de turismo, de trabajo no remunerado— existen precisamente para las dimensiones que la frontera deja fuera. No compiten con el PIB: lo complementan con marcos coherentes con él.",
          ],
          cierre:
            "El punto que más rendimiento da es el cuarto: casi todas las críticas habituales al PIB son críticas a la frontera de producción, y esa frontera está escrita, razonada y publicada. Discutirla con el texto delante es mucho más productivo que discutirla de oídas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El PIB nominal crece un 6 % y el deflactor un 3 %. ¿Cuánto crece la economía?", a: "Un 2,91 %, no un 3 %. El PIB real es 1.060 / 1,03 = 1.029,1, y la variación se obtiene encadenando, no restando. Si además la población crece un 1 %, el PIB real per cápita sube solo un 1,89 %." },
            { q: "¿Qué diferencia al PIB de la renta nacional bruta?", a: "El criterio. El PIB cuenta lo producido dentro del territorio con independencia de quién sea el propietario; la RNB cuenta lo que ganan los residentes, dentro o fuera. La diferencia son las rentas primarias netas del exterior, y en economías con mucha inversión extranjera puede ser considerable." },
            { q: "¿Genera PIB la venta de una vivienda de segunda mano?", a: "La vivienda no, porque es un activo ya existente que solo cambia de manos. Sí lo genera el servicio de intermediación —la comisión de la agencia, la notaría, la gestoría— porque son servicios producidos en el periodo. El PIB mide producción, no transacciones." },
            { q: "¿Por qué no se comparan PIB per cápita usando el tipo de cambio de mercado?", a: "Porque los bienes y servicios no comerciables tienen precios muy distintos entre países y el tipo de cambio no los recoge. Usarlo sobrestima sistemáticamente las diferencias entre economías ricas y pobres. La comparación correcta emplea paridades de poder adquisitivo." },
            { q: "¿Por qué una catástrofe seguida de reconstrucción puede elevar el PIB?", a: "Porque el daño destruye patrimonio, que el PIB no mide, mientras que la reconstrucción es producción del periodo, que sí mide. No es un error de cálculo sino la consecuencia de que el PIB sea un flujo de producción de mercado y no una medida de riqueza ni de bienestar." },
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
              q: "Una economía crece un 6 % nominal con un deflactor del 3 %. ¿Cuánto ha crecido en términos reales?",
              opciones: [
                "Un 2,91 %: las tasas se encadenan, no se restan",
                "Un 6 %, porque el deflactor ya está incorporado",
                "Un 9 %, sumando ambos efectos",
                "Un 3 %, restando la inflación del crecimiento nominal",
              ],
              correcta: 0,
              porque: [
                "$1{,}06/1{,}03 - 1 = 2{,}91\\ \\%$. Es el mismo encadenamiento multiplicativo que rige cualquier composición de tasas.",
                "El crecimiento nominal mezcla producción y precios por construcción; deflactar es precisamente separarlos.",
                "Sumar va en la dirección contraria: la inflación se descuenta del crecimiento nominal, no se añade.",
                "La resta es una aproximación que pasa con tasas pequeñas y falla en cuanto crecen. Aquí el error es de nueve centésimas; con inflación de dos dígitos se vuelve sustancial.",
              ],
            },
            {
              q: "Un particular vende su vivienda por 300.000 €. ¿Cuánto suma eso al PIB?",
              opciones: [
                "Solo la comisión del agente y los servicios asociados: la casa ya existía",
                "300.000 €, que es el valor de la transacción",
                "Nada, porque las operaciones entre particulares no se registran",
                "El margen entre el precio de compra y el de venta",
              ],
              correcta: 0,
              porque: [
                "Lo que sí es producción del año es el servicio de intermediación: la comisión del agente, la notaría, la gestoría. Ocurre igual con la compraventa de acciones.",
                "El PIB mide producción nueva del período. Una casa construida hace veinte años ya se contabilizó entonces; volver a contarla sería doble cómputo.",
                "Sí se registran, y de hecho la parte que es producción —los servicios— entra en las cuentas.",
                "La plusvalía es una revalorización del activo, no producción. Va al balance, no a la cuenta de producción.",
              ],
            },
            {
              q: "Un terremoto destruye viviendas y la reconstrucción posterior eleva el PIB. ¿Es eso una paradoja de la contabilidad?",
              opciones: [
                "No: el PIB mide producción del período, y la pérdida de patrimonio va a los balances, no al flujo",
                "Sí: demuestra que el PIB está mal construido",
                "Sí, y por eso las catástrofes se descuentan del PIB",
                "No, porque la reconstrucción se financia con seguros y no computa",
              ],
              correcta: 0,
              porque: [
                "Es la misma distinción entre cuenta de resultados y balance: el flujo anual y el fondo acumulado son magnitudes distintas y ambas hacen falta.",
                "No es un defecto corregible sino una consecuencia de qué mide el agregado. Pedirle que recoja la destrucción de patrimonio es pedirle que sea otra cosa.",
                "No se descuentan: el sistema de cuentas registra la pérdida en la cuenta de otras variaciones de activos, que es donde corresponde.",
                "La financiación no cambia el registro: la actividad constructora es producción del año se pague como se pague.",
              ],
            },
            {
              q: "Un informe compara el PIB per cápita de España y de la India usando el tipo de cambio de mercado. ¿Qué problema tiene?",
              opciones: [
                "Que el PIB per cápita no es comparable entre países de distinto tamaño",
                "Ninguno: es la conversión estándar",
                "Que habría que usar el PIB nominal en vez del real",
                "Que los bienes no comerciables tienen precios muy distintos y el tipo de cambio no los recoge, exagerando la diferencia",
              ],
              correcta: 3,
              porque: [
                "El per cápita ya normaliza por población: el tamaño no es el problema.",
                "Es una conversión válida para flujos que efectivamente cruzan la frontera, no para comparar niveles de vida.",
                "Nominal o real es otra dimensión: el problema de la conversión persiste con cualquiera de los dos.",
                "Un corte de pelo o un alquiler cuestan mucho menos en la India y el tipo de cambio no lo refleja. Por eso se usan paridades de poder adquisitivo, que corrigen justo eso.",
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
            { ref: "Blanchard, Macroeconomía", nota: "el capítulo de agregados: definiciones limpias y las advertencias justas sobre qué mide y qué no." },
            { ref: "Coyle, El producto interior bruto: una historia breve", nota: "de dónde viene el agregado, qué decisiones lo formaron y qué debates arrastra; corto y excelente." },
            { ref: "Lequiller y Blades, Understanding National Accounts", nota: "el manual que traduce el SEC a lenguaje comprensible; la referencia constante del bloque 10." },
            { ref: "INE, Contabilidad Nacional de España", nota: "las series y su metodología; conviene leer una nota de prensa completa antes de citar cualquier cifra de crecimiento." },
          ],
        },
      ],
    },
  ],
};
