/* Ficha 2.12 — Política comercial: aranceles, cuotas y uniones aduaneras. */

export default {
  codigo: "2.12",
  titulo: "Política comercial: aranceles, cuotas y uniones aduaneras",
  nivel: 3,
  bloque: "Microeconomía",
  tiempo: "5 h",
  nucleo:
    "Un arancel reparte antes que proteger: el consumidor pierde más de lo que ganan el productor y el Estado juntos, y la diferencia no se la queda nadie. Esa pérdida sin destinatario es pequeña en el papel y enorme como argumento, porque es lo único que separa una transferencia de un despilfarro.",
  requiere: "2.11 Ventaja comparativa · 1.04 Excedente y bienestar · 1.03 Elasticidades",
  abre: "3.10 Economía abierta · 11.07 La segunda globalización · 10.03 Sistema fiscal español",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 2.11 mostró que el comercio genera una ganancia agregada y perdedores concentrados. La política comercial es lo que se hace con ese reparto, y el instrumento clásico es el **arancel**: un impuesto sobre el bien importado. Su análisis es la aplicación más limpia que existe del excedente del consumidor y del productor de la ficha 1.04, y conviene hacerla con cuidado porque el resultado es cuantitativo, no retórico.",
            "El punto de partida es un **país pequeño**, en el sentido preciso de que su demanda no mueve el precio mundial. Puede comprar toda la cantidad que quiera al precio internacional. Al imponer un arancel, el precio interno sube exactamente en la cuantía del arancel —el mundo no rebaja su precio para compensar—, y ese aumento se propaga a cuatro sitios a la vez: los consumidores pagan más y compran menos, los productores nacionales reciben más y producen más, el Estado recauda sobre lo que se sigue importando, y la importación se contrae.",
            "Sumando esos cuatro efectos aparece el resultado central: **la pérdida de los consumidores es mayor que la ganancia de los productores más la recaudación**. La diferencia no aparece en el bolsillo de nadie. Se llama **pérdida de eficiencia** y tiene dos componentes con significados distintos. Uno es la **distorsión de producción**: unidades que ahora se fabrican dentro a un coste superior al precio mundial, es decir, recursos empleados en hacer caro lo que se podía comprar barato. El otro es la **distorsión de consumo**: unidades que dejan de consumirse pese a valer para el comprador más que su coste real para la economía. El primero desperdicia recursos; el segundo destruye intercambios que convenían.",
            "Que la transferencia sea grande y la pérdida pequeña explica la política del asunto. En el ejemplo numérico, el arancel mueve 650 unidades de excedente de los consumidores y solo destruye 100. Los consumidores son muchos y pierden poco cada uno; los productores protegidos son pocos y ganan mucho. Con esos incentivos, la presión organizada va siempre en la misma dirección, y el argumento de eficiencia —que es correcto— pierde sistemáticamente frente al de reparto. Esa asimetría explica la persistencia del **proteccionismo** mejor que cualquier apelación a la irracionalidad de los votantes.",
            "El arancel no es el único instrumento y no todos son equivalentes. Una **cuota** que limite la importación a la misma cantidad produce idéntico precio interno, idéntica producción nacional e idéntica pérdida de eficiencia, con una diferencia decisiva: **el equivalente de la recaudación no va al Estado sino a quien tenga la licencia** de importación. Si las licencias se reparten administrativamente, esa renta se convierte en el objeto de una competencia por conseguirlas que consume recursos adicionales. Y si las licencias acaban en manos de exportadores extranjeros, la renta sale del país y la pérdida nacional se multiplica. Las **barreras no arancelarias** —normas técnicas, sanitarias, trámites aduaneros— actúan igual sin necesidad de anunciarse, y son hoy el grueso de la protección efectiva.",
            "Existe además una familia de instrumentos que el comercio internacional admite como **defensa** y que en la práctica son proteccionismo con procedimiento. Los derechos **antidumping** responden a la venta por debajo del precio del mercado de origen o del coste; los **antisubvención** compensan las ayudas públicas que recibe el exportador; y las **salvaguardias** permiten frenar temporalmente un aumento súbito de importaciones que dañe a la industria nacional. A diferencia del arancel general, se aplican a un producto y a un país concretos tras una investigación, lo que los hace mucho más manejables políticamente. Su análisis de bienestar es el del arancel, con la misma pérdida de eficiencia; lo que cambia es que la etiqueta de *práctica desleal* traslada la discusión del terreno económico al jurídico. Conviene ser preciso: el **dumping** puede ser una estrategia predatoria, pero también una discriminación de precios perfectamente racional entre mercados con elasticidades distintas, exactamente la de la ficha 2.07, y en ese caso el país importador se está defendiendo de un descuento.",
            "Hay dos matices que impiden convertir esto en una regla automática. El primero es que un **país grande** sí mueve el precio mundial: al importar menos, presiona el precio internacional a la baja, y esa mejora de su relación real de intercambio puede compensar la pérdida de eficiencia. Es el argumento del *arancel óptimo*, que es teóricamente sólido y prácticamente peligroso, porque lo que gana lo gana a costa del socio y suele invitar a la represalia. El segundo es el argumento de la **industria naciente**: proteger temporalmente un sector que aún no ha bajado por su curva de aprendizaje. Es válido en el papel y exige dos condiciones que rara vez se cumplen a la vez: que la ganancia futura supere el coste presente, y que la protección se retire de verdad.",
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
            { nom: "País pequeño", sub: "El supuesto que hace limpio el análisis.", cols: ["Su demanda no altera el precio mundial: lo toma dado"] },
            { nom: "Efecto del arancel en el precio", sub: "Traslación completa al consumidor.", cols: ["P interno = P mundial + arancel"] },
            { nom: "Los cuatro efectos", sub: "Todos salen del mismo aumento de precio.", cols: ["Consumo ↓ · Producción nacional ↑ · Recaudación · Importación ↓↓"] },
            { nom: "Pérdida de eficiencia", sub: "Lo que no recibe nadie.", cols: ["Pérdida del consumidor − ganancia del productor − recaudación"] },
            { nom: "Distorsión de producción", sub: "Recursos malgastados.", cols: ["½ · (aumento de la producción nacional) · arancel"] },
            { nom: "Distorsión de consumo", sub: "Intercambios destruidos.", cols: ["½ · (caída del consumo) · arancel"] },
            { nom: "Cuota equivalente", sub: "Mismo precio, distinto destinatario.", cols: ["La recaudación se convierte en renta del licenciatario"] },
            { nom: "Protección efectiva", sub: "Lo que de verdad protege al valor añadido.", cols: ["Variación del valor añadido nacional, no del precio final"] },
            { nom: "Unión aduanera", sub: "No es liberalizar: es discriminar.", cols: ["Creación de comercio (ganancia) · desviación (pérdida)"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: qué cuesta exactamente un arancel de 10",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un mercado nacional con demanda **Qd = 100 − P** y oferta **Qs = P − 20**. Sin comercio, el equilibrio está en **P = 60** con 40 unidades. El precio mundial es **30**, muy por debajo, así que al abrirse el país importa. Sobre esa situación se impone un arancel de **10**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["", "Precio interno", "Consumo", "Producción nacional", "Importaciones"],
          filas: [
            ["Autarquía", "60", "40", "40", "0"],
            ["Libre comercio", "30", "70", "10", "60"],
            { celdas: ["Con arancel de 10", "40", "60", "20", "40"], clase: "total" },
          ],
          nota: "El arancel de 10 sube el precio interno exactamente 10, porque el país es pequeño y el exportador no rebaja nada. La producción nacional se duplica —de 10 a 20— y ese es el efecto que se busca. Pero **las importaciones caen un tercio, de 60 a 40**, absorbiendo a la vez la caída del consumo y el aumento de la producción: el arancel muerde por los dos lados.",
        },
        {
          tipo: "grafico",
          ejes: { x: "Cantidad", y: "Precio" },
          dominio: { x: [0, 80], y: [0, 100] },
          marcasX: [0, 20, 40, 60, 80],
          marcasY: [0, 20, 40, 60, 80, 100],
          series: [
            { nombre: "Demanda", color: "acento", etiquetaEn: [10, 68], puntos: [[0, 100], [80, 20]] },
            { nombre: "Oferta nacional", color: "n2", etiquetaEn: [44, 92], puntos: [[0, 20], [80, 100]] },
            { nombre: "Con arancel", color: "alerta", trazo: "discontinuo", etiquetaEn: [30, 44], puntos: [[0, 40], [80, 40]] },
            { nombre: "Precio mundial", color: "tinta2", trazo: "discontinuo", etiquetaEn: [30, 24], puntos: [[0, 30], [80, 30]] },
          ],
          areas: [
            { puntos: [[10, 30], [20, 40], [10, 40]], color: "alerta", etiqueta: "50" },
            { puntos: [[60, 40], [70, 30], [70, 40]], color: "alerta", etiqueta: "50" },
          ],
          nota: "Los **dos triángulos sombreados son la pérdida de eficiencia**, 50 cada uno. El de la izquierda son las diez unidades que ahora se fabrican dentro costando más de 30, el precio al que el mundo las vendía. El de la derecha son las diez que dejan de consumirse aunque el comprador las valorara por encima de 30. Todo lo demás que hay entre las dos rectas de precio es **transferencia**: cambia de manos, pero no desaparece.",
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Importe", "Quién lo recibe"],
          filas: [
            ["Pérdida de excedente del consumidor", "−650", "—"],
            ["Ganancia de excedente del productor", "+150", "Productores nacionales"],
            ["Recaudación arancelaria", "+400", "Estado"],
            { celdas: ["Efecto neto sobre el país", "−100", "Nadie: se destruye"], clase: "total" },
          ],
          nota: "Las dos comprobaciones tienen que coincidir y coinciden: **650 − 150 − 400 = 100**, y por los triángulos, **50 de producción + 50 de consumo = 100**. Nótese la proporción, que es el dato político del tema: el arancel **transfiere 550 y destruye 100**. Quien defiende el arancel invoca los 150; quien lo critica, los 100; y los 650 los paga gente que no sabe que los paga.",
        },
      ],
    },

    {
      titulo: "Caso práctico: la protección que no se ve y la unión que desvía",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El arancel nominal engaña sobre cuánta protección concede realmente, y la magnitud del engaño sorprende. Considérese un coche que se vende por **20.000 €** y que incorpora **14.000 € de componentes importados**: el valor añadido nacional es de **6.000 €**. Se impone un arancel del **10 % sobre coches terminados** y ninguno sobre los componentes. El precio interno del coche pasa a 22.000 €, los componentes siguen costando 14.000, y el valor añadido nacional salta a **8.000 €**. La **protección efectiva** es del **33,3 %**, más de tres veces el arancel nominal.",
            "La razón es que el arancel protege el valor añadido, no el precio, y el valor añadido es una fracción pequeña del precio. Cuanto mayor sea el peso de los insumos importados, mayor es el apalancamiento. De ahí la **escalada arancelaria** característica de casi todos los sistemas: aranceles bajos o nulos sobre materias primas y componentes, altos sobre productos terminados. Parece una estructura moderada leída en la columna del arancel nominal y es fuertemente proteccionista leída en protección efectiva. Y tiene un efecto colateral serio sobre los países exportadores de materias primas: los penaliza justo cuando intentan subir un escalón y transformar en origen.",
            "El segundo caso es la **unión aduanera**, y su análisis desmiente la intuición de que cualquier liberalización mejora. Una unión no libera el comercio: **lo libera con unos socios y lo mantiene cerrado con el resto**, es decir, discrimina. Supóngase un arancel general del 20 %, un bien que la industria nacional produce por 130, el país A —el más eficiente del mundo— por 100 y el socio B por 110. Antes de la unión, A entra a 120 y B a 132, así que se importa de A pagando 120, de los cuales 20 son recaudación.",
            "Al formar la unión con B, el bien de B entra sin arancel a 110 mientras el de A sigue pagando y cuesta 120. Ahora se importa de **B, que es el productor menos eficiente**. El consumidor paga 110 en vez de 120 y ahorra 10; pero el Estado deja de ingresar los 20 que cobraba. El país pierde **10 por unidad**. Es la **desviación de comercio**: el origen se desplaza del productor eficiente al socio, y lo que parecía un ahorro para el comprador es en realidad un subsidio pagado con recaudación perdida.",
            "El mismo acuerdo produce el efecto contrario en otros bienes. Si en un producto la industria nacional cobra 100, B produce por 90 y A por 95, antes de la unión el arancel del 20 % dejaba a A en 114 y a B en 108, de modo que se producía dentro a 100 sin recaudar nada. Tras la unión, B entra a 90: se sustituye producción nacional cara por importación barata, el consumidor ahorra 10 y no hay recaudación que perder. Es la **creación de comercio**, y es ganancia limpia de 10 por unidad.",
            "La conclusión es que una unión aduanera **no es buena ni mala por definición**: su efecto neto es la suma de la creación y la desviación en todos los bienes, y depende de con quién se firme. Une a socios que ya eran tus proveedores naturales y crearás comercio; une a socios ineficientes protegidos por un arancel externo alto y desviarás. Es también la razón por la que los economistas suelen preferir la liberalización multilateral a la proliferación de acuerdos bilaterales: el segundo camino garantiza discriminación, y la discriminación es precisamente lo que produce la desviación.",
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
            { t: "Creer que el arancel lo paga el exportador extranjero", d: "En el caso de país pequeño lo paga íntegramente el comprador nacional: el precio interno sube exactamente la cuantía del arancel porque el vendedor extranjero no tiene motivo para rebajar, ya que puede colocar su producto en otros mercados al precio mundial. Solo un país grande, capaz de mover el precio internacional, traslada parte de la carga fuera." },
            { t: "Confundir transferencia con pérdida", d: "De los 650 que pierden los consumidores, 550 reaparecen como excedente del productor y recaudación: cambian de manos dentro del país. Solo 100 se destruyen. Tratar los 650 como coste social exagera el argumento y lo vuelve fácil de rebatir; el argumento correcto y sólido son los 100." },
            { t: "Pensar que un arancel y una cuota son intercambiables", d: "Producen el mismo precio, la misma producción nacional y la misma pérdida de eficiencia, pero el equivalente de la recaudación va al Estado con el arancel y al titular de la licencia con la cuota. Si las licencias se asignan a discreción, aparece una competencia por obtenerlas que consume recursos; y si acaban en manos extranjeras, esa renta sale del país." },
            { t: "Juzgar la protección por el arancel nominal", d: "El arancel protege el valor añadido, no el precio. Con insumos importados que pesan mucho en el coste, un arancel nominal del 10 % puede suponer una protección efectiva superior al 30 %. Un sistema con aranceles bajos sobre insumos y altos sobre productos terminados parece moderado y no lo es." },
            { t: "Suponer que toda liberalización mejora el bienestar", d: "Una unión aduanera libera con unos socios y discrimina contra el resto. Si el efecto dominante es la desviación —sustituir al proveedor más eficiente por el socio, perdiendo la recaudación que se cobraba—, el país empeora pese a haber bajado un arancel. Solo la creación de comercio es ganancia inequívoca." },
            { t: "Olvidar que la protección se concede a sectores, no a personas", d: "El arancel sostiene la renta de quien sigue en el sector protegido, no la de quien ya perdió el empleo, y beneficia igual al productor eficiente que al que no lo es. Si el objetivo declarado es amortiguar el ajuste de unos trabajadores concretos, hay instrumentos que lo hacen directamente y sin destruir excedente." },
            { t: "Aceptar el argumento de la industria naciente sin sus condiciones", d: "Es válido cuando existen economías de aprendizaje reales y la ganancia futura descontada supera el coste presente de la protección. Exige además poder retirarla, y ese es el punto que falla: la protección crea el interés organizado que después impide levantarla. Sin fecha de caducidad creíble, el argumento se convierte en una coartada permanente." },
            { t: "Ignorar las barreras no arancelarias", d: "Los aranceles medios han caído mucho, y de ahí se concluye a veces que la protección ha desaparecido. Normas técnicas, requisitos sanitarios, reglas de origen y trámites aduaneros pueden encarecer o impedir la importación con más eficacia que un arancel, y sin figurar en ninguna tarifa. Son hoy el grueso de la protección real." },
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
            "Los aranceles no son una anécdota fiscal en las cuentas: tienen código propio, destinatario y un efecto sobre el PIB que conviene no leer al revés.",
          ],
          lista: [
            "Los derechos de aduana son **impuestos sobre las importaciones**, una subclase de los impuestos sobre la producción y las importaciones (**D.2**) que analiza la ficha 13.05. Se registran en el momento del devengo y forman parte de la diferencia entre la valoración a precios básicos y a precios de adquisición que recorre la ficha 12.02.",
            "En la Unión Europea tienen una particularidad de sectorización: los derechos de aduana son **recurso propio tradicional del presupuesto comunitario**, de modo que su receptor final no es la administración pública nacional sino las **instituciones de la Unión Europea**, unidades del resto del mundo (**S.2**) según la ficha 12.10. El Estado recauda y retiene solo un porcentaje en concepto de gastos de recaudación. Por eso en las cuentas españolas la recaudación arancelaria no engrosa los ingresos de S.13 como lo haría el IVA.",
            "El efecto del arancel sobre el **PIB medido por el gasto** se presta a un malentendido. Al reducir las importaciones, que entran restando, parece que el arancel «aumenta el PIB». Pero la caída de importaciones va acompañada de menor consumo y de una producción nacional más cara: lo que sube es el componente nacional, no el bienestar. La pérdida de eficiencia de 100 del ejemplo **no aparece en ninguna partida del PIB**, porque el PIB mide producción, no excedente.",
            "Ese es un límite general del sistema que conviene tener presente: la contabilidad nacional registra flujos observables y no mide excedente del consumidor ni pérdidas de eficiencia. Un país puede empeorar en bienestar con un PIB que sube. Es la misma advertencia que la ficha 2.11 hacía con la relación real de intercambio, y la razón de que exista la renta interior bruta real.",
            "Las **subvenciones a la exportación** son la operación simétrica y llevan código propio, **D.3**, con signo contrario. Su análisis de bienestar es el del arancel invertido y da también pérdida neta para el país que subvenciona, lo que explica por qué se negocian internacionalmente con tanto empeño: el perjudicado es el competidor, no el consumidor local.",
          ],
          cierre:
            "La consecuencia práctica: el efecto de un arancel no se lee en el PIB ni en el saldo exterior. Se lee en excedentes, y esa es una contabilidad que las cuentas nacionales no llevan.",
        },
      ],
    },

    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            {
              q: "Con demanda Qd = 100 − P, oferta Qs = P − 20, precio mundial 30 y un arancel de 10: ¿cuánto se importa antes y después?",
              a: "Antes 60 unidades: a precio 30 se consumen 70 y se producen 10. Después 40: a precio 40 se consumen 60 y se producen 20. Las importaciones absorben los dos ajustes a la vez —el consumo cae 10 y la producción nacional sube 10—, y por eso caen 20, el doble que cada efecto por separado.",
            },
            {
              q: "Calcula la pérdida de eficiencia y comprueba el resultado por dos caminos.",
              a: "Es 100. Por excedentes: los consumidores pierden 650, los productores ganan 150 y el Estado recauda 400, así que 650 − 150 − 400 = 100. Por triángulos: la distorsión de producción es ½ · 10 · 10 = 50 y la de consumo ½ · 10 · 10 = 50. Ambos caminos deben coincidir siempre; si no lo hacen, hay un error en las áreas.",
            },
            {
              q: "Una cuota que limite las importaciones a 40 unidades, ¿produce el mismo resultado que el arancel?",
              a: "El mismo precio interno (40), la misma producción nacional (20) y la misma pérdida de eficiencia (100). Cambia el destinatario de los 400: con arancel los recauda el Estado; con cuota son renta de quien tiene la licencia de importación. Si las licencias se asignan discrecionalmente aparece además un gasto de recursos en obtenerlas, y si las obtienen exportadores extranjeros, los 400 salen del país y la pérdida nacional pasa de 100 a 500.",
            },
            {
              q: "Un coche vale 20.000 € con 14.000 € de componentes importados. Con un arancel del 10 % sobre coches y ninguno sobre componentes, ¿cuál es la protección efectiva?",
              a: "Del 33,3 %. El valor añadido nacional pasa de 6.000 € (20.000 − 14.000) a 8.000 € (22.000 − 14.000), es decir, sube 2.000 sobre 6.000. Un arancel nominal del 10 % concede una protección al valor añadido tres veces mayor, y el efecto crece cuanto más pesen los insumos importados.",
            },
            {
              q: "Con un arancel general del 20 %, un bien que cuesta 130 producirlo dentro, 100 en el país A y 110 en el socio B: ¿qué ocurre al formar una unión aduanera con B?",
              a: "Hay desviación de comercio y el país pierde 10 por unidad. Antes se importaba de A a 120 (100 + 20 de arancel), con 20 de recaudación. Tras la unión, B entra libre a 110 y desplaza a A, que sigue en 120. El consumidor ahorra 10 pero el Estado pierde los 20 que ingresaba: la diferencia es pérdida neta. El proveedor eficiente ha sido sustituido por el socio.",
            },
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
              q: "Un país pequeño impone un arancel del 20 %. ¿Quién lo paga?",
              opciones: [
                "El exportador extranjero, que baja su precio para no perder el mercado",
                "El comprador nacional: el precio interno sube exactamente la cuantía del arancel",
                "Se reparte entre ambos según sus elasticidades",
                "El importador nacional, que no puede trasladarlo al consumidor",
              ],
              correcta: 1,
              porque: [
                "Un país pequeño no mueve el precio mundial: el vendedor extranjero puede colocar su producto en cualquier otro sitio al mismo precio y no tiene razón para bajarlo.",
                "Precisamente porque la oferta exterior es perfectamente elástica, todo el arancel se traslada. Es el caso de manual y el que aplica a casi cualquier economía abierta pequeña.",
                "El reparto por elasticidades es la regla general, pero aquí una de las dos elasticidades es infinita y el resultado se vuelve de esquina.",
                "El importador es un intermediario: compite con otros importadores y traslada el coste al precio final.",
              ],
            },
            {
              q: "Un arancel hace perder 650 al consumidor. El productor gana 400 y el Estado recauda 150. ¿Cuál es el coste de eficiencia?",
              opciones: [
                "650, que es lo que pierde el consumidor",
                "100: la parte que no reaparece en manos de nadie",
                "550, que es lo que se transfiere",
                "250, la diferencia entre lo que pierde el consumidor y lo que gana el productor",
              ],
              correcta: 1,
              porque: [
                "De esos 650, la mayor parte cambia de manos dentro del país. Tratarlo todo como destrucción de valor infla el coste del arancel.",
                "$650 - 400 - 150 = 100$. Esos cien son producción nacional ineficiente y consumo que deja de producirse, y no aparecen como ganancia de nadie.",
                "La transferencia es justamente lo que no se pierde: son los 550 que van al productor y a la caja pública.",
                "Restar solo la ganancia del productor olvida la recaudación, que también es una transferencia y no una pérdida.",
              ],
            },
            {
              q: "¿En qué se diferencian un arancel y una cuota que produzcan el mismo precio interno?",
              opciones: [
                "En nada: son instrumentos equivalentes",
                "En quién se queda el equivalente de la recaudación: el Estado con el arancel, quien tenga la licencia con la cuota",
                "En que la cuota genera más pérdida de eficiencia",
                "En que el arancel protege más la producción nacional",
              ],
              correcta: 1,
              porque: [
                "Coinciden en precio, producción nacional y pérdida de eficiencia, y por eso parecen intercambiables. La diferencia está en el reparto, que no es poca cosa.",
                "Con la cuota esa renta va a quien obtiene el permiso de importación, que puede ser un importador nacional o incluso el exportador extranjero. Y eso convierte la asignación de licencias en un objeto de captura.",
                "La pérdida de eficiencia es la misma si el precio resultante es el mismo: viene de la producción ineficiente y del consumo perdido.",
                "La producción nacional también coincide: es la que responde al precio interno, sea cual sea el instrumento que lo haya elevado.",
              ],
            },
            {
              q: "Un producto tiene un arancel nominal del 10 % y sus insumos importados entran libres de derechos y suponen el 80 % del coste. ¿Qué protección real recibe?",
              opciones: [
                "Un 10 %, igual que el arancel nominal",
                "Mucho más: el arancel protege el valor añadido, que aquí es solo el 20 % del precio",
                "Un 8 %, ponderando por el peso de los insumos",
                "Ninguna, porque los insumos no están protegidos",
              ],
              correcta: 1,
              porque: [
                "El arancel nominal dice cuánto sube el precio del producto, no cuánto protege la actividad que se realiza dentro del país.",
                "Si el precio sube 10 y el valor añadido nacional era 20, la protección efectiva sobre ese valor añadido es del 50 %. Juzgar la protección por el arancel nominal la subestima sistemáticamente en las cadenas de valor largas.",
                "Ponderar a la baja invierte el efecto: cuanto más pesan los insumos libres, mayor es la protección efectiva, no menor.",
                "Que los insumos entren libres es precisamente lo que amplifica la protección del ensamblaje nacional.",
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
            { ref: "Krugman y Obstfeld, Economía internacional, capítulos sobre instrumentos de política comercial", nota: "el análisis gráfico completo del arancel, la cuota y sus equivalencias, con el tratamiento del país grande y el arancel óptimo." },
            { ref: "Viner, The Customs Union Issue", nota: "el origen de la distinción entre creación y desviación de comercio, que sigue siendo el marco con el que se evalúa cualquier acuerdo regional." },
            { ref: "Organización Mundial del Comercio, informes sobre el comercio mundial", nota: "datos de aranceles aplicados y consolidados por país y por producto, y el estado de las barreras no arancelarias; la fuente para poner cifras reales al modelo." },
            { ref: "Irwin, Free Trade under Fire", nota: "un repaso ordenado de los argumentos proteccionistas y de lo que dice la evidencia sobre cada uno, sin evitar los que tienen fundamento." },
          ],
        },
      ],
    },
  ],
};
