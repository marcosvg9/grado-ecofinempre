/* Ficha 12.10 — El resto del mundo (S.2) y el puente con la balanza de pagos. */

export default {
  codigo: "12.10",
  titulo: "El resto del mundo (S.2) y el puente con la balanza de pagos",
  nivel: 4,
  bloque: "Cuentas de los sectores institucionales",
  tiempo: "5 h",
  nucleo:
    "El resto del mundo no es un sector: es la pieza que cierra el sistema, y sus cuentas se llevan desde su punto de vista. Todo aparece con el signo cambiado, y quien se despiste con el signo se despista con el análisis entero.",
  requiere: "12.09 Cuentas de acumulación · 3.10 Economía abierta · 12.01 Sectorización",
  abre: "10.10 Cuentas trimestrales y revisiones · 11.07 Cadenas de valor · 3.10 Trilema",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **resto del mundo (S.2)** ocupa un lugar peculiar en el sistema, y conviene enunciar la paradoja desde el principio. **No es un sector institucional** en el sentido de los otros cinco: aquellos se obtienen desagregando la economía nacional en grupos de unidades residentes con comportamientos parecidos, mientras que el S.2 agrupa unidades no residentes de naturaleza completamente heterogénea y no forma parte de la economía nacional. Y sin embargo **se le asigna una secuencia de cuentas propia**, porque es la única forma de tener un marco cerrado donde registrar todas las operaciones que los residentes hacen con el exterior.",
            "**Además, el S.2 no recoge toda la actividad de los no residentes, solo la que tiene contrapartida en la economía nacional.** Lo que una empresa mexicana venda a un cliente mexicano no está en las cuentas del resto del mundo de España; lo que le venda a un residente español, sí. Es un sector definido por la **relación**, no por la unidad, y eso lo distingue de todo lo demás del sistema.",
            "**La regla que gobierna estas cuentas es la del espejo, y hay que interiorizarla antes de mirar una sola cifra.** Las cuentas del S.2 se elaboran **desde el punto de vista del resto del mundo**: un recurso para el resto del mundo es un empleo para la economía nacional, y viceversa. De ahí que **una exportación española sea un empleo del S.2** —bienes que la unidad no residente adquiere— y una importación española, un recurso suyo. La consecuencia práctica es que todos los saldos aparecen con el signo cambiado: un **B.11 negativo para el S.2 significa superávit comercial para España**. Equivocarse aquí no produce un error pequeño: invierte el diagnóstico.",
            "**Las operaciones que registra son de tres familias.** Los **bienes (P.61 y P.71)**, cuyo criterio de registro es el **cambio de propiedad económica** y no el movimiento físico; los **servicios (P.62 y P.72)**, que incluyen viajes, transporte, financieros, propiedad intelectual y empresariales; y las **operaciones de distribución D.1 a D.9**, desde la remuneración de trabajadores transfronterizos hasta las transferencias de capital de los fondos europeos.",
            "**Que el criterio sea el cambio de propiedad y no el paso por la aduana produce dos casos que conviene conocer.** En el **merchanting**, una empresa residente compra mercancía en un país y la revende a otro sin que pase por el territorio nacional: hay cambio de propiedad y no hay movimiento físico, así que **sí se registra**. En los **bienes enviados para transformación**, unas piezas salen del país, se ensamblan fuera y vuelven sin dejar de pertenecer al propietario original: hay movimiento físico y no hay cambio de propiedad, así que **no se registra** como importación ni exportación. Por eso las estadísticas de aduanas necesitan cuatro ajustes para convertirse en cuentas nacionales: restar lo que cruza sin cambiar de dueño, sumar lo que cambia de dueño sin cruzar, añadir el comercio no declarado y pasar de valoración **CIF a FOB** uniforme.",
            "**La secuencia del S.2 es más corta que la de los sectores residentes, y su lógica es la misma comprimida.** La cuenta **V.I** registra el intercambio de bienes y servicios y deja el saldo **B.11**. La **V.II** añade rentas primarias y transferencias corrientes y deja el **B.12**, el saldo de operaciones corrientes, que hace el trabajo que en los sectores residentes se reparte entre varias cuentas y equivale a su ahorro. La **V.III.1.1** incorpora las transferencias de capital y deja el **B.10.1**. Y la **V.III.1.2** resta las adquisiciones de activos no producidos y deja el **B.9**, la capacidad o necesidad de financiación.",
            "**Y aquí está el puente que da título a la ficha.** La misma realidad la compilan dos marcos hermanos: el **SEC 2010**, con su lenguaje de recursos, empleos y saldos, y el **Manual de Balanza de Pagos** del Fondo Monetario Internacional, con su lenguaje de ingresos, pagos y balanzas. Están armonizados y **los grandes saldos coinciden**: el B.9 del S.2 equivale al saldo conjunto de la cuenta corriente y la cuenta de capital de la balanza de pagos. Cambia la disposición de la información y cambian los códigos, no la realidad medida. En España el instituto de estadística compila las cuentas nacionales y el banco central la balanza de pagos, y su coherencia es una de las comprobaciones de calidad del sistema.",
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
            { nom: "Naturaleza del S.2", sub: "Un artefacto que cierra el sistema.", cols: ["no es un sector; agrupa operaciones, no unidades"] },
            { nom: "Regla del espejo", sub: "El error de signo invierte el diagnóstico.", cols: ["recurso del S.2 = empleo de la economía nacional"] },
            { nom: "Cuenta V.I", sub: "Intercambio de bienes y servicios.", cols: ["B.11 = P.7 − P.6 (óptica S.2)"] },
            { nom: "Cuenta V.II", sub: "Equivale al ahorro de un sector residente.", cols: ["B.12 = B.11 + rentas y transferencias corrientes"] },
            { nom: "Cuenta V.III.1.1", sub: "Entran las transferencias de capital.", cols: ["B.10.1 = B.12 + D.9"] },
            { nom: "Cuenta V.III.1.2", sub: "El saldo que cierra lo no financiero.", cols: ["B.9 = B.10.1 − NP"] },
            { nom: "Criterio de registro de bienes", sub: "Merchanting sí; transformación no.", cols: ["cambio de propiedad, no movimiento físico"] },
            { nom: "De aduanas a cuentas", sub: "Cuatro ajustes obligatorios.", cols: ["propiedad · merchanting · ilegal · CIF a FOB"] },
            { nom: "Puente con la balanza de pagos", sub: "Misma realidad, dos lenguajes.", cols: ["B.9 = cuenta corriente + cuenta de capital"] },
          ],
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la secuencia completa con datos de España",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Recorremos las cuatro cuentas del sector resto del mundo con las cifras españolas de **2024** que publica el instituto de estadística, en millones de euros. Recuérdese durante todo el ejercicio que **están en óptica del S.2**: lo que para el resto del mundo es negativo, para España es positivo.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Cuenta", "Operación", "Importe", "Saldo"],
          filas: [
            ["V.I", "Exportaciones de bienes (P.61) 387.683 + de servicios (P.62) 203.110", "590.793", "—"],
            ["V.I", "Importaciones de bienes (P.71) 421.541 + de servicios (P.72) 102.904", "524.445", "B.11 = −66.348"],
            ["V.II", "Rentas de la propiedad: paga España 127.451, cobra 115.064", "neto −12.387", "—"],
            ["V.II", "Otras transferencias corrientes: paga 32.968, cobra 19.194", "neto −13.774", "B.12 = −50.649"],
            ["V.III.1.1", "Transferencias de capital: cobra el S.2 877, paga 16.904", "neto +16.027 para España", "B.10.1 = −66.676"],
            { celdas: ["V.III.1.2", "Adquisiciones netas de activos no producidos (NP)", "2.036", "B.9 = −68.712"], clase: "total" },
          ],
          nota: "Las tres comprobaciones contables cuadran exactamente: **524.445 − 590.793 = −66.348**; **−50.649 + 877 − 16.904 = −66.676**; y **−66.676 − 2.036 = −68.712**. Traducido a la óptica española: **superávit comercial de 66.348**, superávit corriente de **50.649** y capacidad de financiación de **68.712 millones**, en torno al 4,3 % del PIB. **España prestó al exterior, no se endeudó con él.** *(Cifras del INE para 2024 según el curso de cuentas nacionales.)*",
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "Saldo", y: "Miles de M€" },
          dominio: { x: [0, 4], y: [0, 78] },
          marcasX: [],
          marcasY: [0, 20, 40, 60],
          areas: [
            { puntos: [[0.15, 0], [0.15, 66.3], [0.85, 66.3], [0.85, 0]], color: "n2" },
            { puntos: [[1.15, 0], [1.15, 50.6], [1.85, 50.6], [1.85, 0]], color: "alerta" },
            { puntos: [[2.15, 0], [2.15, 66.7], [2.85, 66.7], [2.85, 0]], color: "n2" },
            { puntos: [[3.15, 0], [3.15, 68.7], [3.85, 68.7], [3.85, 0]], color: "acento" },
          ],
          notas: [
            { x: 0.5, y: 70, texto: "66,3", ancla: "middle" },
            { x: 1.5, y: 54, texto: "50,6", ancla: "middle" },
            { x: 2.5, y: 70, texto: "66,7", ancla: "middle" },
            { x: 3.5, y: 72.5, texto: "68,7", ancla: "middle" },
            { x: 0.5, y: -6, texto: "B.11 comercial", ancla: "middle" },
            { x: 1.5, y: -6, texto: "B.12 corriente", ancla: "middle" },
            { x: 2.5, y: -6, texto: "B.10.1", ancla: "middle" },
            { x: 3.5, y: -6, texto: "B.9 financiación", ancla: "middle" },
          ],
          nota: "El recorrido de los cuatro saldos, ya en **óptica española**, cuenta la historia entera del sector exterior. El superávit comercial de **66,3** se reduce a **50,6** al pasar por las rentas y las transferencias corrientes: España paga más intereses y dividendos al exterior de los que cobra —posición deudora acumulada— y aporta a los recursos propios de la Unión más de lo que recibe por esa vía. Después **vuelve a subir hasta 66,7** al entrar las **transferencias de capital**, que son los fondos europeos de inversión con **16.027 millones netos a favor**. Y termina en **68,7** tras los activos no producidos. Es decir: **lo que las rentas se llevan, los fondos europeos lo devuelven**, y el país acaba prestando al exterior más de lo que su saldo comercial sugería.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora el puente con la balanza de pagos, que es la misma realidad en otro idioma.** El saldo **B.9** del sector resto del mundo equivale, con el signo cambiado, al **saldo conjunto de la cuenta corriente y la cuenta de capital** de la balanza de pagos. No es una aproximación: los dos marcos están armonizados y sus grandes saldos coinciden por construcción. Lo que cambia es la disposición:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["SEC 2010", "Manual de Balanza de Pagos", "Equivalencia"],
          filas: [
            ["Cuenta V.I — bienes y servicios (B.11)", "Balanza de bienes y servicios", "Directa"],
            ["Cuenta V.II — rentas y transferencias (B.12)", "Cuenta corriente completa", "B.12 ≈ saldo por cuenta corriente"],
            ["Cuenta V.III.1.1 — transferencias de capital", "Cuenta de capital", "D.9 ≈ cuenta de capital"],
            { celdas: ["B.9 capacidad de financiación", "Cuenta corriente + cuenta de capital", "Coinciden con signo invertido"], clase: "total" },
            ["Compila el instituto de estadística", "Compila el banco central", "Su coherencia es una prueba de calidad"],
          ],
          nota: "La última fila es la que conviene retener por su valor práctico. **Dos organismos distintos miden la misma realidad con marcos distintos**, y que sus saldos coincidan no está garantizado de antemano: es el resultado de un trabajo de conciliación. Cuando no coinciden, la diferencia señala un problema de fuentes que hay que investigar. Es el mismo principio que la discrepancia entre la cuenta de capital y la financiera de la ficha 12.09: **el sistema incorpora comprobaciones cruzadas, y sus descuadres son información sobre su propia calidad**, no defectos que haya que ocultar.",
        },
      ],
    },
    {
      titulo: "Caso práctico: leer el sector exterior español sin equivocarse de signo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cerramos el bloque con la lectura de un sector exterior real, porque reúne todo lo aprendido y porque es donde más fácil resulta equivocarse.",
            "**Lo primero es siempre comprobar la óptica.** Una tabla del sector resto del mundo con la capacidad de financiación en negativo puede alarmar a quien no sepa que significa exactamente lo contrario: que **el país presta al exterior**. Las publicaciones lo advierten, y aun así el error se comete constantemente. La regla mnemotécnica es sencilla: **si al S.2 le va mal, al país le va bien**.",
            "**Lo segundo es no quedarse en el saldo comercial.** El recorrido de los cuatro saldos españoles muestra por qué: entre el superávit de bienes y servicios y la capacidad de financiación final median dos correcciones grandes de signo contrario. Las **rentas de la propiedad** restan, porque un país con posición deudora externa acumulada paga más de lo que cobra; y las **transferencias de capital** suman, porque los fondos europeos son cuantiosos. Quedarse en cualquiera de los saldos intermedios da una imagen incompleta.",
            "**Lo tercero es entender la composición del superávit español, porque no es homogénea.** El saldo de bienes distintos del turismo suele ser deficitario —España importa energía y bienes de equipo— mientras que los **servicios** aportan un superávit muy grande, sostenido por el turismo y, cada vez más, por servicios empresariales y financieros. Es la estructura productiva de la ficha 10.01 apareciendo en las cuentas exteriores: **la especialización determina la forma del saldo**, no solo su tamaño.",
            "**Lo cuarto es distinguir el flujo del stock.** Una capacidad de financiación positiva significa que el país presta ese año, y eso reduce su posición deudora acumulada, pero **no la elimina**: la posición de inversión internacional es un stock construido por décadas de saldos. Un país puede tener superávit corriente durante años y seguir teniendo una posición deudora neta grande, con los pagos de rentas que eso implica y que se ven en el B.12. Es la distinción entre flujo y saldo vivo que la ficha 10.06 pedía no confundir, aplicada al exterior.",
            "**Y lo quinto es recordar de dónde salen los datos.** Las aduanas para los bienes, con los cuatro ajustes de esta ficha; las encuestas de comercio internacional de servicios y las de gasto turístico para los servicios; el banco central para las rentas de la propiedad; y las cuentas públicas para los flujos con la Unión Europea. **Cada componente tiene su fuente, su calendario y su margen de revisión**, y las revisiones del sector exterior no son pequeñas, con todo lo que la ficha 10.10 advertía sobre los datos en tiempo real.",
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
            { t: "Equivocarse con el signo de los saldos del S.2", d: "Las cuentas se llevan desde el punto de vista del resto del mundo, así que un B.11 negativo para el S.2 es superávit comercial para el país y una capacidad de financiación negativa del S.2 significa que el país presta al exterior. No es un error pequeño: invierte el diagnóstico entero." },
            { t: "Tratar el S.2 como un sector institucional más", d: "No lo es: agrupa unidades no residentes de naturaleza heterogénea, no forma parte de la economía nacional y solo recoge las operaciones que tienen contrapartida en ella. Es un artefacto contable necesario para que el sistema cierre, no un grupo de unidades con comportamiento común." },
            { t: "Registrar los bienes por su paso por la aduana", d: "El criterio es el cambio de propiedad económica. El merchanting se registra aunque la mercancía no pise el país, y los bienes enviados a transformar y devueltos no se registran aunque crucen la frontera dos veces. De ahí que las estadísticas aduaneras necesiten cuatro ajustes para convertirse en cuentas nacionales." },
            { t: "Comparar exportaciones e importaciones sin igualar la valoración", d: "Las estadísticas de comercio suelen valorar las exportaciones FOB y las importaciones CIF, incluyendo en estas últimas fletes y seguros. El SEC exige valoración FOB uniforme, así que hay que restar esos costes de transporte y seguro. Sin ese ajuste el saldo comercial está sesgado." },
            { t: "Quedarse en el saldo comercial al juzgar el sector exterior", d: "Entre el saldo de bienes y servicios y la capacidad de financiación median las rentas de la propiedad, que restan en un país con posición deudora, y las transferencias de capital, que suman cuando hay fondos europeos. En el caso español ambas son grandes y de signo contrario." },
            { t: "Confundir el saldo anual con la posición acumulada", d: "Una capacidad de financiación positiva reduce la posición deudora externa pero no la elimina: la posición de inversión internacional es un stock construido por décadas. Un país puede tener superávit durante años y seguir pagando muchas rentas al exterior por su deuda acumulada." },
            { t: "Suponer que las cuentas nacionales y la balanza de pagos son fuentes independientes que casualmente coinciden", d: "Están armonizadas por diseño y sus grandes saldos deben coincidir, pero las compilan organismos distintos con fuentes parcialmente distintas. Su coherencia es el resultado de un trabajo de conciliación, y cuando no coinciden la diferencia señala un problema de fuentes que hay que investigar." },
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
            "Esta ficha cierra el bloque y el plan, y su puente recoge los hilos de todo lo anterior.",
          ],
          lista: [
            "El **B.9 del resto del mundo** es, con el signo cambiado, la suma de las capacidades y necesidades de financiación de todos los sectores residentes de la ficha 12.09. Esa identidad es la que cierra el sistema y la que convierte el análisis sectorial en una herramienta de diagnóstico.",
            "El **puente con la balanza de pagos** es el mismo que la ficha 3.10 usaba para el trilema y que la ficha 10.06 comprobaba numéricamente: la necesidad de financiación de aquella economía de −30 coincidía con el saldo de su balanza de pagos porque son la misma magnitud vista desde dos sistemas contables.",
            "Las **exportaciones e importaciones** de esta cuenta son el componente exterior del PIB por el enfoque de la demanda de la ficha 10.07, y la advertencia sobre valor bruto frente a valor añadido de la ficha 11.07 se aplica entera: lo que cruza la frontera no es lo que un país aporta.",
            "Las **rentas de la propiedad con el exterior** son lo que separa el PIB de la renta nacional bruta en la ficha 12.04, y en el caso español son de una magnitud que empequeñece a las transferencias corrientes.",
            "Y las **revisiones** de este sector son de las mayores del sistema, porque dependen de encuestas de servicios y de fuentes fiscales que se cierran tarde. La ficha 10.10 explica por qué el primer dato y el definitivo pueden contar historias distintas, y el sector exterior es donde más se nota.",
          ],
          cierre:
            "Con esto se cierran doce bloques. La idea que conviene llevarse de todo el sistema es la que este sector encarna mejor que ninguno: **la contabilidad nacional no describe la economía, la ordena**. Cada cifra es el resultado de una definición, una valoración y un criterio de registro, y quien conoce esas tres cosas puede leer los datos; quien no, solo puede citarlos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "El B.9 del sector resto del mundo es −68.712. ¿Qué significa para España?", a: "Que España tuvo una capacidad de financiación de +68.712 millones, en torno al 4,3 % del PIB: prestó al exterior en lugar de endeudarse con él. Las cuentas del S.2 se llevan desde el punto de vista del resto del mundo, así que todos los saldos aparecen con el signo cambiado. Si al S.2 le va mal, al país le va bien." },
            { q: "¿Por qué el saldo corriente español es menor que el comercial?", a: "Porque entre uno y otro entran las rentas de la propiedad y las transferencias corrientes, y ambas restan: España paga más intereses y dividendos al exterior de los que cobra, por su posición deudora acumulada, y aporta más a los recursos propios de la UE de lo que recibe por esa vía. El saldo pasa de 66.348 a 50.649." },
            { q: "Y sin embargo la capacidad de financiación vuelve a subir hasta 68.712. ¿Cómo?", a: "Por las transferencias de capital, que aportan 16.027 millones netos a favor de España: son fundamentalmente fondos europeos de inversión. Entran en la cuenta V.III.1.1, después del saldo corriente, y por eso no aumentan la renta disponible del país pero sí su capacidad de financiación, como explicaba la ficha 12.07." },
            { q: "Una empresa española compra mercancía en Asia y la revende en América sin que pase por España. ¿Se registra?", a: "Sí. El criterio es el cambio de propiedad económica, no el movimiento físico: la empresa adquiere la propiedad del bien y luego la traspasa, así que ambas operaciones se registran en las cuentas del resto del mundo. Es el merchanting, y es uno de los cuatro ajustes que separan las estadísticas de aduanas de las cuentas nacionales." },
            { q: "Unas piezas salen a Marruecos, se ensamblan y vuelven. ¿Es importación y exportación?", a: "No. Nunca dejan de pertenecer al propietario español, así que no hay cambio de propiedad económica pese a que crucen la frontera dos veces. Lo que sí se registra es el servicio de transformación prestado por el no residente. Es el caso inverso al merchanting." },
            { q: "¿Qué relación hay entre el B.9 del S.2 y la balanza de pagos?", a: "Equivale, con el signo cambiado, al saldo conjunto de la cuenta corriente y la cuenta de capital de la balanza de pagos. Los dos marcos están armonizados y sus grandes saldos coinciden por diseño, aunque los compilen organismos distintos con lenguajes distintos: recursos y empleos en el SEC, ingresos y pagos en el manual del FMI." },
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
            { ref: "SEC 2010, capítulo 18 — Cuentas del resto del mundo", nota: "la secuencia completa del S.2, la regla del espejo y el criterio de cambio de propiedad; el texto normativo de esta ficha." },
            { ref: "FMI, Manual de Balanza de Pagos y Posición de Inversión Internacional (MBP6)", nota: "el marco hermano; conviene leer sus tablas de equivalencia con el SEC para ver el puente en detalle." },
            { ref: "Banco de España, Balanza de Pagos y Posición de Inversión Internacional", nota: "la compilación española y la distinción entre el flujo anual y el stock acumulado." },
            { ref: "INE, Cuentas no financieras de los sectores institucionales — sector resto del mundo", nota: "las series españolas del S.2 con las que se ha construido el ejemplo de esta ficha." },
            { ref: "Eurostat, Balance of Payments and International Trade in Services methodology", nota: "los cuatro ajustes de aduanas a cuentas nacionales y el tratamiento del merchanting y la transformación." },
          ],
        },
      ],
    },
  ],
};
