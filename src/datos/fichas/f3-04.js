/* Ficha 3.04 — Modelo keynesiano de renta y multiplicadores. */

export default {
  codigo: "3.04",
  titulo: "Modelo keynesiano de renta y multiplicadores",
  nivel: 2,
  bloque: "Macroeconomía",
  tiempo: "4 h",
  nucleo:
    "Una perturbación del gasto se amplifica en la renta. El tamaño del multiplicador es empírico, no teórico: depende de cuánto se filtra por ahorro, impuestos e importaciones, y de si hay capacidad ociosa, y por eso el mismo modelo justifica respuestas opuestas en momentos distintos.",
  requiere: "1.06 Flujo circular · 3.01 PIB y agregados",
  abre: "3.05 Modelo IS-LM · 3.06 Oferta y demanda agregadas · 10.04 Gasto público",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La identidad **Y = C + I + G + (X − M)** de la ficha 1.06 es una definición y no explica nada. Se convierte en modelo cuando se dice **de qué depende cada componente**, y ese es todo el contenido del modelo keynesiano simple. Su supuesto clave, que conviene tener presente porque delimita su validez, es que **hay capacidad productiva ociosa**: si la demanda aumenta, las empresas responden produciendo más y no subiendo precios. Es un supuesto razonable en una recesión y falso en una economía en pleno empleo, y de ahí que este modelo describa el corto plazo con paro y no el largo plazo de la ficha 3.09.",
            "La pieza central es la **función de consumo**: el gasto de los hogares depende de su renta disponible, con una parte autónoma y una parte proporcional. La constante de proporcionalidad es la **propensión marginal a consumir**, que responde a cuánto se gasta de cada euro adicional. Está entre cero y uno, y lo que no se consume se ahorra, de modo que **la propensión marginal a ahorrar es su complemento**. Nótese que es una magnitud **marginal**, con la advertencia de la ficha 1.05: no coincide con la media, y solo la marginal gobierna la respuesta a un cambio de renta.",
            "De ahí sale el **multiplicador**, que es el resultado del modelo. Si el gasto público aumenta, alguien recibe esa renta y gasta una parte; quien la recibe gasta a su vez una parte de ella, y así sucesivamente. La suma de esa cadena decreciente no es infinita sino un múltiplo finito del impulso inicial, y **ese múltiplo es mayor cuanto menos se filtre en cada vuelta**. Las filtraciones son tres: lo que se ahorra, lo que se va en impuestos y lo que se gasta en productos importados, que genera renta fuera. Por eso una economía muy abierta tiene multiplicadores pequeños y una cerrada, grandes.",
            "El modelo produce además dos resultados que conviene conocer. El primero es que **el multiplicador del gasto público es mayor que el de una bajada de impuestos** del mismo importe: el gasto entra íntegro en la demanda, mientras que de la rebaja fiscal una parte se ahorra en la primera vuelta. De ahí que un mismo esfuerzo presupuestario tenga efectos distintos según cómo se instrumente. El segundo es el **multiplicador del presupuesto equilibrado**: subir gasto e impuestos en la misma cuantía **no deja la renta igual, la aumenta**, precisamente porque los dos multiplicadores no son simétricos.",
            "Y el resultado que más desconcierta es la **paradoja del ahorro**. Si todos los hogares deciden ahorrar una proporción mayor de su renta, el consumo cae, la renta cae y el ahorro total puede acabar siendo **igual o incluso menor** que antes. Es un caso de manual de **falacia de composición**: lo que es prudente para un hogar aislado no lo es para todos a la vez, porque el gasto de uno es la renta de otro. La paradoja opera con capacidad ociosa; con pleno empleo, más ahorro se traduce en más inversión y el resultado se invierte, que es exactamente lo que dirá la ficha 3.09.",
            "Conviene cerrar con las limitaciones, porque son grandes y el modelo se usa muy por encima de su ámbito. **No hay precios**: se supone que todo el ajuste es de cantidad, lo que exige capacidad ociosa. **No hay tipo de interés**: la inversión es autónoma, y en cuanto se permite que reaccione aparece el desplazamiento de la inversión privada que introduce la ficha 3.05. **No hay expectativas**: los agentes responden mecánicamente a la renta corriente, cuando la teoría del consumo posterior insiste en que responden a la renta permanente. Y **no hay restricción presupuestaria intertemporal**: el gasto público no se financia con nada. Cada una de esas ausencias reduce el multiplicador real por debajo del que da la fórmula.",
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
            { nom: "Función de consumo", sub: "c es la propensión marginal, no la media.", cols: ["$C = C_0 + c\\,Y_d$"] },
            { nom: "Renta disponible", sub: "Con impuesto proporcional a la renta.", cols: ["$Y_d = Y - T = Y(1-t)$"] },
            { nom: "Demanda agregada planeada", sub: "Todo el gasto previsto al nivel de renta Y.", cols: ["DA = C + I + G + X − M"] },
            { nom: "Condición de equilibrio", sub: "Producción igual a demanda planeada.", cols: ["Y = DA"] },
            { nom: "Multiplicador simple", sub: "Sin impuestos ni sector exterior.", cols: ["$k = \\dfrac{1}{1-c}$"] },
            { nom: "Multiplicador con impuestos", sub: "El impuesto proporcional lo reduce.", cols: ["$k = \\dfrac{1}{1 - c(1-t)}$"] },
            { nom: "Multiplicador en economía abierta", sub: "Las importaciones filtran renta al exterior.", cols: ["$k = \\dfrac{1}{1 - c(1-t) + m}$"] },
            { nom: "Multiplicador de los impuestos", sub: "Menor en valor absoluto y de signo contrario.", cols: ["$k_T = \\dfrac{-c}{1 - c(1-t)}$"] },
            { nom: "Presupuesto equilibrado", sub: "Subir gasto e impuestos por igual no es neutral.", cols: ["$\\Delta Y = (k + k_T)\\,\\Delta G > 0$"] },
            { nom: "Paradoja del ahorro", sub: "Falacia de composición, válida con capacidad ociosa.", cols: ["↑ propensión a ahorrar $\\Rightarrow$ ↓ $Y$, $S$ igual o menor"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la cadena del multiplicador",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una economía se describe con $C = 100 + 0{,}8\\,Y_d$, un impuesto proporcional del **25 %**, inversión autónoma de **200** y gasto público de **300**. Sustituyendo, la demanda agregada es $600 + 0{,}6\\,Y$, y la condición de equilibrio $Y = \\mathrm{DA}$ da $Y = 1.500$. El multiplicador es $1/(1 - 0{,}6) = 2{,}5$.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Renta", y: "Demanda agregada" },
          dominio: { x: [0, 2200], y: [0, 2200] },
          marcasX: [0, 500, 1000, 1500, 1750, 2000],
          marcasY: [0, 500, 1000, 1500, 2000],
          series: [
            { nombre: "Y = DA", color: "tinta2", trazo: "punteado", puntos: [[0, 0], [2100, 2100]], etiquetaEn: [900, 700] },
            { nombre: "DA inicial", color: "acento", puntos: [[0, 600], [2200, 1920]] },
            { nombre: "DA con ΔG = 100", color: "alerta", trazo: "discontinuo", puntos: [[0, 700], [2200, 2020]] },
          ],
          puntos: [
            { x: 1500, y: 1500, etiqueta: "Y = 1.500" },
            { x: 1750, y: 1750, etiqueta: "Y = 1.750" },
          ],
          nota: "La recta punteada es el lugar donde producción y demanda coinciden; el equilibrio está donde la corta la demanda planeada. **Un impulso vertical de 100 desplaza el equilibrio horizontalmente 250**, y esa desproporción entre lo que se empuja y lo que se mueve es el multiplicador dibujado. Su origen geométrico es la pendiente de la recta de demanda, 0,6: cuanto más inclinada —menos filtraciones— más lejos se desplaza el cruce.",
        },
        {
          tipo: "tabla",
          cabecera: ["Vuelta", "Gasto adicional", "Renta disponible generada", "Consumo inducido"],
          filas: [
            ["1", "100,0", "75,0", "60,0"],
            ["2", "60,0", "45,0", "36,0"],
            ["3", "36,0", "27,0", "21,6"],
            ["4", "21,6", "16,2", "13,0"],
            ["Resto de vueltas", "32,4", "—", "—"],
            { celdas: ["Total", "250,0", "—", "—"], clase: "total" },
          ],
          nota: "El proceso paso a paso. Los 100 iniciales generan 75 de renta disponible tras el impuesto del 25 %, de los que se consumen 60; esos 60 vuelven a ser renta de alguien, y así sucesivamente. **La serie converge a 250 porque cada vuelta es el 60 % de la anterior**, y la suma de esa progresión es 100 / (1 − 0,6). Nótese que las filtraciones —25 de impuestos y 15 de ahorro en la primera vuelta— son las que impiden que el proceso sea explosivo.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Multiplicador", "Efecto de un impulso de 100"],
          filas: [
            ["Sin impuestos ni sector exterior", "5,00", "+500"],
            ["Con impuesto proporcional del 25 %", "2,50", "+250"],
            ["Añadiendo importaciones (m = 0,2)", "1,67", "+167"],
            ["Bajada de impuestos de 100 en vez de gasto", "−2,00", "+200"],
            { celdas: ["Presupuesto equilibrado: +100 gasto y +100 impuestos", "0,50", "+50"], clase: "total" },
          ],
          nota: "La misma economía y **cinco multiplicadores distintos entre 0,5 y 5**. Ahí está el mensaje de la ficha: la fórmula no da un número, da una familia de números que depende de la estructura de filtraciones y del instrumento elegido. La cuarta fila explica por qué el gasto es más potente que la rebaja fiscal: de los 100 devueltos a los hogares, **20 se ahorran antes de empezar el proceso**. Y la última muestra que un presupuesto equilibrado no es neutral, aunque su efecto sea modesto.",
        },
      ],
    },
    {
      titulo: "Caso práctico: cuánto vale realmente el multiplicador",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El tamaño del multiplicador dejó de ser una cuestión académica en 2010, cuando varios países europeos emprendieron a la vez ajustes presupuestarios severos. Las previsiones de crecimiento que acompañaron a esos planes incorporaban un supuesto sobre el multiplicador, y ese supuesto resultó ser el parámetro más consecuente de toda la operación.",
            "**El punto de partida es que el multiplicador no es una constante.** La fórmula ya lo anticipa —depende de las filtraciones— pero la evidencia posterior fue más lejos: **depende también del estado de la economía**. Con capacidad ociosa abundante, paro elevado y tipos de interés en su límite inferior, el multiplicador es sustancialmente mayor que en una expansión. La razón es la del supuesto inicial de esta ficha: si hay recursos parados, un aumento de demanda se traduce en producción; si no los hay, en precios.",
            "**El mecanismo del tipo de interés refuerza esa dependencia.** En condiciones normales, un impulso fiscal presiona los tipos al alza y desplaza inversión privada, reduciendo el efecto neto: es el desplazamiento que formaliza la ficha 3.05. Pero si el banco central mantiene los tipos en su suelo, ese contrapeso desaparece y **el multiplicador se acerca al de la fórmula simple**. Simétricamente, un ajuste fiscal en esas condiciones no se ve compensado por una bajada de tipos, porque no hay margen para bajarlos.",
            "**A eso se añadió un factor que la fórmula de una economía aislada no puede recoger: la simultaneidad.** Cuando varios socios comerciales ajustan a la vez, las importaciones que en el modelo abierto filtran renta hacia fuera **dejan de ser una fuga inocua**, porque el país receptor también se está contrayendo y compra menos. El multiplicador conjunto de un ajuste coordinado es mayor que el que cada país calcularía por separado, y ninguno lo tiene en cuenta al hacer sus cuentas.",
            "**La consecuencia fue medible y quedó documentada.** Los errores de previsión de crecimiento durante aquel periodo estuvieron sistemáticamente correlacionados con la magnitud del ajuste emprendido: cuanto mayor el ajuste, mayor el error a la baja. El propio Fondo Monetario Internacional publicó ese análisis y reconoció que los multiplicadores empleados habían sido demasiado pequeños para las circunstancias. Es uno de los casos mejor documentados de **un parámetro mal calibrado con consecuencias de política de primer orden**.",
            "**Lo que no se sigue de todo esto, y conviene decirlo.** No se sigue que el ajuste fiscal sea siempre contraproducente ni que el multiplicador sea siempre alto: eso sería el error simétrico. Se sigue que **el mismo modelo recomienda cosas distintas según el estado de la economía**, y que presentar el multiplicador como una constante universal —sea alta o baja— es un uso incorrecto de la herramienta. Es exactamente la tesis de la ficha 1.08 sobre elegir el modelo aplicable, con una factura muy grande asociada a haberla ignorado.",
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
            { t: "Aplicar el modelo con la economía en pleno empleo", d: "Todo el modelo supone capacidad ociosa: la respuesta a más demanda es más producción, no más precios. Sin recursos parados, un impulso de demanda se traduce en inflación, y el marco relevante pasa a ser el de la ficha 3.06." },
            { t: "Usar la propensión media a consumir en lugar de la marginal", d: "El multiplicador depende de cuánto se gasta del euro adicional, no de la proporción del total. Son magnitudes distintas y pueden diferir bastante, con la advertencia general de la ficha 1.05 sobre medias y márgenes." },
            { t: "Citar un valor único del multiplicador", d: "En el mismo ejemplo aparecen cinco valores entre 0,5 y 5 según haya impuestos, importaciones o se use gasto en lugar de rebaja fiscal. Y varía además con el estado del ciclo. Un número sin sus supuestos no informa de nada." },
            { t: "Suponer que gasto público y rebaja de impuestos son equivalentes", d: "El gasto entra íntegro en la demanda; de la rebaja fiscal se ahorra una parte antes de empezar la cadena. Por eso su multiplicador es menor en valor absoluto, y un mismo esfuerzo presupuestario rinde distinto según cómo se instrumente." },
            { t: "Creer que un presupuesto equilibrado es neutral sobre la renta", d: "Subir gasto e impuestos en la misma cuantía aumenta la renta, porque los dos multiplicadores no son simétricos. El efecto es modesto —0,5 en el ejemplo— pero no es cero, y la intuición contraria es muy común." },
            { t: "Tomar la paradoja del ahorro por una ley general", d: "Opera con capacidad ociosa, donde el gasto de uno es la renta de otro. Con pleno empleo, más ahorro financia más inversión y eleva el crecimiento a largo plazo, que es justo lo contrario. El resultado depende por completo del régimen en que se esté." },
            { t: "Olvidar que la inversión reacciona al tipo de interés", d: "En este modelo es autónoma por simplificación. Al permitir que responda, un impulso fiscal presiona los tipos y desplaza inversión privada, reduciendo el multiplicador. Ese es precisamente el paso que da la ficha 3.05." },
            { t: "Ignorar que el gasto público hay que financiarlo", d: "El modelo no incluye restricción presupuestaria intertemporal ni deuda. Si los agentes anticipan impuestos futuros o si el coste de financiación sube, el efecto real es menor que el de la fórmula. La ficha 10.04 se ocupa de esa dimensión." },
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
            "El modelo se construye sobre los mismos componentes que publica la contabilidad nacional, pero sus parámetros no se leen en ella: se estiman.",
          ],
          lista: [
            "Los componentes del gasto tienen código propio en el SEC: **consumo final de los hogares** (P.31), **consumo final de las administraciones públicas** (P.3), **formación bruta de capital fijo** (P.51g) y **exportaciones e importaciones** (P.6 y P.7). El modelo no inventa magnitudes: reordena las que ya existen.",
            "La **propensión marginal a consumir no aparece en ninguna cuenta**. Las cuentas dan consumo y renta disponible agregados, de donde sale la propensión **media**; la marginal requiere estimación econométrica y varía entre hogares, sobre todo según su acceso al crédito.",
            "La **tasa de ahorro de los hogares** se obtiene como saldo de la cuenta de utilización de la renta disponible (B.8g sobre renta disponible) y es la magnitud que se dispara en las recesiones, dando lugar al fenómeno que describe la paradoja del ahorro.",
            "El **saldo público** (B.9 de S.13) y su descomposición entre componente cíclico y **estructural** es donde entra el producto potencial de la ficha 3.01: el ajuste fiscal se mide en términos del saldo estructural, cuya estimación depende de una brecha de producción que no se observa.",
            "Y las **contribuciones al crecimiento** que publica el INE descomponen la variación del PIB por componentes del gasto, con la advertencia de la ficha 1.07: en volumen encadenado no son sumandos exactos, sino contribuciones calculadas.",
          ],
          cierre:
            "El punto que más rendimiento da es el segundo: el parámetro que gobierna todo el modelo es el único que las cuentas no contienen. Cualquier cifra de multiplicador viene de una estimación con supuestos, y conviene preguntar cuáles.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Con c = 0,8 y un impuesto proporcional del 25 %, ¿cuánto vale el multiplicador?", a: "2,5. La propensión efectiva a consumir sobre la renta total es 0,8 × 0,75 = 0,6, y el multiplicador es 1 / (1 − 0,6). Un aumento del gasto público de 100 eleva la renta de equilibrio en 250, de 1.500 a 1.750." },
            { q: "¿Por qué el multiplicador de una rebaja de impuestos es menor que el del gasto?", a: "Porque el gasto público entra íntegro en la demanda agregada, mientras que de la rebaja fiscal los hogares ahorran una parte antes de que empiece la cadena. Con c = 0,8, de cada 100 devueltos solo 80 se gastan en la primera vuelta." },
            { q: "Subir gasto e impuestos en 100 cada uno, ¿deja la renta igual?", a: "No: la aumenta en 50 en el ejemplo. Los multiplicadores del gasto y de los impuestos no son simétricos, así que un presupuesto equilibrado tiene efecto expansivo, aunque modesto. Es un resultado contraintuitivo y bastante robusto dentro del modelo." },
            { q: "¿Por qué una economía muy abierta tiene multiplicadores pequeños?", a: "Porque parte del gasto adicional se dirige a productos importados y genera renta fuera del país, filtrándose del circuito. En el ejemplo, añadir una propensión a importar de 0,2 reduce el multiplicador de 2,5 a 1,67." },
            { q: "¿Por qué el multiplicador es mayor en una recesión profunda?", a: "Porque hay capacidad ociosa, así que la demanda adicional se traduce en producción y no en precios; y porque si el tipo de interés está en su límite inferior no se produce el desplazamiento de inversión privada que normalmente lo amortigua. El mismo modelo da respuestas distintas según el estado de la economía." },
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
              q: "¿Qué supuesto hace falta para que el multiplicador keynesiano funcione como describe el modelo?",
              opciones: [
                "Que el banco central mantenga el tipo de interés fijo",
                "Que haya capacidad ociosa: la respuesta a más demanda es más producción y no más precios",
                "Que la economía sea cerrada",
                "Que el gobierno financie el gasto con deuda y no con impuestos",
              ],
              correcta: 1,
              porque: [
                "El tipo de interés fijo afecta al tamaño del efecto —es el caso del IS-LM de la ficha siguiente— pero no es el supuesto que sostiene el mecanismo básico.",
                "Sin recursos parados, un impulso de demanda se traduce en inflación y no en renta. Todo el modelo descansa en que hay factores sin emplear dispuestos a ponerse a producir.",
                "La apertura reduce el multiplicador por la filtración de importaciones, pero el mecanismo sigue existiendo en una economía abierta.",
                "La financiación cambia el tamaño del efecto, no su existencia: hasta un presupuesto equilibrado tiene multiplicador positivo.",
              ],
            },
            {
              q: "En una economía con $C = 100 + 0{,}8\\,Y_d$ y un impuesto proporcional del 25 %, ¿cuánto vale el multiplicador?",
              opciones: [
                "5, que es $1/(1-0{,}8)$",
                "2,5: el impuesto filtra parte de cada euro antes de que se gaste",
                "1,25, porque el impuesto se lleva la mayor parte",
                "0,8, que es la propensión marginal a consumir",
              ],
              correcta: 1,
              porque: [
                "Ese sería el multiplicador sin impuestos. Al ignorar la filtración fiscal se duplica el efecto estimado.",
                "$k = 1/[1 - c(1-t)] = 1/[1 - 0{,}8 \\times 0{,}75] = 1/0{,}4 = 2{,}5$. Cada euro de renta adicional deja el 25 % en Hacienda antes de llegar al consumo.",
                "El impuesto reduce el multiplicador a la mitad, no a la cuarta parte. Conviene hacer la cuenta antes que estimar a ojo.",
                "La propensión marginal a consumir es un ingrediente del multiplicador, no el multiplicador.",
              ],
            },
            {
              q: "Un gobierno puede gastar 100 o rebajar impuestos en 100. ¿Producen el mismo efecto sobre la renta?",
              opciones: [
                "Sí: los 100 llegan igual a la economía",
                "No: el gasto entra íntegro en la demanda, mientras que de la rebaja se ahorra una parte antes de empezar la cadena",
                "No: la rebaja fiscal tiene mayor efecto porque los hogares deciden mejor",
                "Sí, salvo que el gasto sea en inversión",
              ],
              correcta: 1,
              porque: [
                "Los 100 llegan, pero por caminos distintos. El gasto público es demanda directa; la rebaja pasa antes por la decisión de consumir o ahorrar del hogar.",
                "Por eso $|k_T| < k$: la primera ronda de la rebaja solo aporta $c \\times 100$ y no 100. Es un resultado del mecanismo, no una preferencia por una política u otra.",
                "Quién decide mejor es una cuestión distinta y ajena al modelo. Aquí solo se compara el tamaño del impulso inicial.",
                "El tipo de gasto no cambia el argumento: cualquier gasto público entra entero, sea corriente o de inversión.",
              ],
            },
            {
              q: "¿Es la paradoja del ahorro una ley general de la economía?",
              opciones: [
                "Sí: ahorrar más siempre reduce la renta agregada",
                "No: opera con capacidad ociosa; con pleno empleo, más ahorro financia más inversión",
                "Sí, aunque su efecto es pequeño",
                "No: es un resultado que la evidencia ha refutado",
              ],
              correcta: 1,
              porque: [
                "Generalizarla la convierte en un argumento contra el ahorro en cualquier circunstancia, que es justo lo que el modelo no dice.",
                "Con recursos parados, el gasto de uno es la renta de otro y ahorrar más deprime ambos. En pleno empleo el mecanismo se invierte y el ahorro eleva el crecimiento a largo plazo.",
                "El efecto puede ser considerable en una recesión profunda. Lo que falla no es la magnitud sino la pretensión de universalidad.",
                "No está refutada: está acotada. Se cumple en las condiciones que el modelo describe y no fuera de ellas.",
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
            { ref: "Blanchard, Macroeconomía", nota: "el capítulo del mercado de bienes: la derivación del multiplicador con todas sus filtraciones." },
            { ref: "Keynes, Teoría general, capítulo 10", nota: "el multiplicador en su formulación original; más matizado que la versión de manual que se le atribuye." },
            { ref: "Blanchard y Leigh, «Growth Forecast Errors and Fiscal Multipliers»", nota: "el análisis que documentó la infraestimación de los multiplicadores durante los ajustes europeos; el fundamento del caso práctico." },
            { ref: "Ramey, «Can Government Purchases Stimulate the Economy?»", nota: "una revisión honesta de la evidencia empírica sobre el tamaño real de los multiplicadores y su dispersión." },
          ],
        },
      ],
    },
  ],
};
