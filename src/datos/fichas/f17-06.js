/* Ficha 17.06 — IVA II: deducción, prorrata y regímenes especiales. */

export default {
  codigo: "17.06",
  titulo: "IVA II: deducción, prorrata y regímenes especiales",
  nivel: 3,
  bloque: "Fiscalidad española",
  tiempo: "5 h",
  nucleo:
    "El derecho a deducir es lo único que hace neutral al IVA. Cuando una exención lo suprime, el impuesto soportado deja de ser un crédito frente a Hacienda y se convierte en coste que se incrusta en el precio: la exención encarece el producto en lugar de abaratarlo.",
  requiere: "17.05 IVA I · 5.11 Contabilidad del IVA",
  abre: "17.10 Armonización fiscal en la UE · 18.06 Financiación autonómica",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El IVA se llama impuesto sobre el **valor añadido** porque cada empresario ingresa el tipo aplicado a la diferencia entre sus ventas y sus compras, y eso solo funciona si puede **deducir** lo soportado. La deducción no es un beneficio fiscal ni una concesión: es el mecanismo constitutivo del impuesto. Sin ella, el IVA sería un impuesto en cascada que gravaría más cuantos más eslabones tuviera la cadena de producción, penalizando la especialización y premiando la integración vertical, que es exactamente el defecto del antiguo impuesto sobre el tráfico de empresas al que el IVA vino a sustituir.",
            "Para deducir hacen falta tres cosas a la vez, y fallar en cualquiera de ellas cierra el derecho. **Condición subjetiva**: ser empresario o profesional y haber iniciado la actividad. **Condición objetiva**: que los bienes y servicios se afecten a la actividad y que la ley no excluya expresamente esa clase de gasto. **Condición formal**: estar en posesión de la factura completa, con todos sus requisitos. La tercera es la que más deducciones hace perder, porque un tique no es una factura y una factura sin NIF del destinatario no da derecho a nada, por evidente que sea que el gasto es real.",
            "**La gran fractura del impuesto está en las exenciones**, y hay que distinguir dos clases que la ley llama igual y que funcionan al revés. Las **exenciones plenas** —exportaciones, entregas intracomunitarias, operaciones asimiladas— no repercuten IVA **pero conservan el derecho a deducir el soportado**. Equivalen a un tipo cero, y su efecto es que el producto sale del país completamente limpio de impuesto español, que es lo que exige el principio de **gravamen en destino**.",
            "Las **exenciones limitadas** —sanidad, educación, operaciones financieras y de seguro, arrendamiento de vivienda— no repercuten IVA **y tampoco permiten deducir**. Aquí es donde se produce el efecto que da título a la ficha: **el IVA soportado por un dentista, un colegio o un banco no es recuperable, así que se convierte en un coste más** que acaba trasladado al precio de sus servicios. El consumidor no ve IVA en la factura, pero paga un precio que lo lleva escondido. **Una exención limitada no elimina el impuesto: lo oculta y, al romper la cadena de deducción, puede incluso encarecer el producto respecto de gravarlo al tipo normal.**",
            "Cuando una empresa realiza a la vez operaciones con derecho a deducir y operaciones exentas sin derecho aparece la **prorrata**. La **prorrata general** calcula un porcentaje único —operaciones con derecho sobre el total— y lo aplica a todo el IVA soportado, sin mirar en qué se empleó cada compra. Es simple y, precisamente por serlo, imprecisa. La **prorrata especial** deduce al 100 % el soportado en bienes y servicios usados solo en operaciones con derecho, al 0 % el usado solo en exentas, y aplica el porcentaje general únicamente a los **bienes comunes**. Es más exacta y más laboriosa.",
            "La relación entre ambas no es de libre elección. La especial es **opcional**, pero pasa a ser **obligatoria cuando el importe deducible por la prorrata general excede en más de un diez por ciento al que resultaría de la especial**. La lógica de la regla es transparente: la general solo se tolera mientras sea una aproximación razonable, y en cuanto la simplificación empieza a favorecer sistemáticamente al contribuyente, la ley retira el atajo. Conviene además recordar que la prorrata del año se aplica **provisionalmente con el porcentaje del año anterior** y se **regulariza en la última declaración** con el definitivo.",
            "Los **bienes de inversión** tienen una regla propia, y su razón de ser es que duran más de un ejercicio. Deducir según la prorrata del año de compra sería arbitrario si el año siguiente la actividad cambia de mezcla. Por eso la deducción se **regulariza durante cuatro años más** —nueve más en el caso de terrenos y edificaciones—, ajustando cada año la fracción correspondiente si la prorrata definitiva difiere en más de diez puntos de la del año de adquisición. Es el reconocimiento de que un activo duradero no pertenece a un solo ejercicio, la misma idea que sostiene la amortización contable.",
            "Por último, los **regímenes especiales** existen porque el régimen general impone una carga administrativa que no todos pueden asumir. El **recargo de equivalencia** libera al comerciante minorista de liquidar: su proveedor le repercute IVA más un recargo, y con eso queda saldada su relación con el impuesto. El **régimen simplificado** determina la cuota por módulos. El de **agricultura, ganadería y pesca** compensa a tanto alzado el IVA soportado. El de **criterio de caja** desplaza el devengo al cobro y, simétricamente, la deducción al pago. Y el de **bienes usados** grava solo el margen, para evitar que un bien que ya pagó IVA al ser nuevo vuelva a pagarlo entero en cada reventa.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Figura", "¿Repercute?", "¿Deduce el soportado?"],
          filas: [
            { nom: "Operación gravada", sub: "El caso general.", cols: ["Sí", "Sí: el impuesto es neutral para la empresa"] },
            { nom: "Exención plena", sub: "Exportaciones y entregas intracomunitarias.", cols: ["No", "Sí: el bien sale limpio de impuesto"] },
            { nom: "Exención limitada", sub: "Sanidad, educación, financieras, vivienda.", cols: ["No", "No: el soportado se convierte en coste"] },
            { nom: "Operación no sujeta", sub: "Fuera del ámbito del impuesto.", cols: ["No", "Depende de la actividad a la que se afecte"] },
            { nom: "Recargo de equivalencia", sub: "Comercio minorista.", cols: ["Sí, pero no liquida", "No: lo soportado con recargo cierra la cuenta"] },
          ],
          nota: "La tercera fila es la única en la que el IVA **deja de ser neutral** y se comporta como un coste. Todo el resto de la ficha son consecuencias de esa fila: la prorrata sirve para medirla y la regularización de bienes de inversión, para repartirla bien en el tiempo.",
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
            { nom: "Prorrata general", sub: "Un porcentaje único sobre todo lo soportado.", cols: ["$p = \\dfrac{V_{con\\ derecho}}{V_{total}}$"] },
            { nom: "Deducción por prorrata general", sub: "No mira el destino de cada compra.", cols: ["$D_g = p \\cdot \\mathrm{IVA}_{sop}$"] },
            { nom: "Deducción por prorrata especial", sub: "Separa exclusivos y comunes.", cols: ["$D_e = S_{100} + p \\cdot S_{com}$"] },
            { nom: "Cuándo es obligatoria la especial", sub: "El atajo se retira si favorece demasiado.", cols: ["$D_g > 1{,}1 \\cdot D_e$"] },
            { nom: "IVA no deducible", sub: "Mayor valor del bien o gasto del ejercicio.", cols: ["$\\mathrm{Coste} = (1-p)\\,\\mathrm{IVA}_{sop}$"] },
            { nom: "Regularización de bienes de inversión", sub: "Cinco años, o diez en inmuebles.", cols: ["$R = \\dfrac{\\mathrm{IVA}_{sop}\\,(p_0 - p_t)}{5}$"] },
          ],
          nota: "La cuarta línea se lee al revés de como parece: la prorrata especial se impone **cuando la general deduce de más**, no cuando deduce de menos. Si la general perjudica al contribuyente, este puede optar por la especial, pero nadie le obliga.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: cuándo la prorrata especial deja de ser opcional",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una entidad realiza **800.000 €** de operaciones con derecho a deducir y **200.000 €** exentas sin derecho. Su prorrata general es, por tanto, del **80 %**. Ha soportado **100.000 €** de IVA, repartidos así: **40.000 €** en bienes usados solo en las operaciones con derecho, **40.000 €** en bienes usados solo en las exentas y **20.000 €** en bienes comunes.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Método", "Cálculo", "IVA deducible"],
          filas: [
            ["Prorrata general", "100.000 × 80 %", "80.000 €"],
            ["Especial: bienes con derecho", "40.000 × 100 %", "40.000 €"],
            ["Especial: bienes exentos", "40.000 × 0 %", "0 €"],
            ["Especial: bienes comunes", "20.000 × 80 %", "16.000 €"],
            { celdas: ["Total por prorrata especial", "40.000 + 0 + 16.000", "56.000 €"], clase: "total" },
            ["Umbral legal", "56.000 × 1,10", "61.600 €"],
            { celdas: ["¿Obligatoria la especial?", "80.000 > 61.600", "Sí"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**La general permitiría deducir 24.000 € más que la especial**, y esos 24.000 € no responden a ninguna realidad económica: proceden de aplicar un 80 % al IVA de unos bienes que se emplearon íntegramente en operaciones exentas. La prorrata general no es incorrecta en abstracto —es una aproximación—, pero aquí la aproximación se ha alejado tanto de los hechos que la ley retira el atajo. **El umbral del 10 % es la frontera entre simplificar y sobrededucir.**",
            "Obsérvese qué pasa con los **44.000 € de IVA que no se deducen** por la vía especial. No desaparecen: se incorporan como **mayor valor de los bienes adquiridos** o como gasto del ejercicio, según su naturaleza, y desde ahí se trasladan al precio de los servicios exentos. El cliente de esa entidad recibe una factura sin IVA y paga, dentro del precio, un impuesto que no ve. **Ese es el sentido exacto de la afirmación de que una exención limitada no elimina el impuesto sino que lo oculta.**",
            "**Un último apunte de calendario.** Si los 20.000 € de bienes comunes correspondieran a maquinaria, la deducción de 16.000 € sería provisional. Con un IVA soportado de 21.000 € en un bien de inversión y una prorrata que pasara del 80 % al 60 % al año siguiente, la regularización anual sería (21.000 × 0,80 − 21.000 × 0,60) / 5 = **840 € a devolver** cada uno de los años restantes. Un salto de veinte puntos en la mezcla de actividad no se corrige de golpe: se reparte a lo largo de la vida fiscal del activo.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la clínica dental y el escáner que nadie deduce",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una clínica dental compra un escáner por 100.000 € más 21.000 € de IVA. Su actividad principal —asistencia sanitaria a personas físicas— está **exenta con exención limitada**, así que **no puede deducir ni un euro de esos 21.000 €**. El equipo le ha costado realmente 121.000 €, y sobre esa cifra calculará su amortización, su rentabilidad y el precio de los tratamientos. Una empresa industrial que hubiera comprado el mismo aparato para una actividad gravada lo tendría en balance por 100.000 €.",
            "**La consecuencia inmediata es que el IVA encarece la sanidad privada en lugar de dejarla al margen**, que es lo contrario de lo que la exención parece prometer. Y la consecuencia menos evidente es que **la exención distorsiona decisiones**: como el IVA soportado en compras es irrecuperable pero el coste de los salarios no lleva IVA, la clínica tiene un incentivo fiscal a **sustituir compras externas por trabajo propio**. Internalizar un servicio que compraba fuera le ahorra un 21 % de impuesto que no podría deducir. Es una distorsión real, medida en la literatura sobre la exención financiera, y no un efecto marginal.",
            "**Si la clínica añade una actividad gravada** —tratamientos estéticos no exentos, venta de productos de higiene bucal—, entra en prorrata. Y si el escáner se usa para ambas, deja de ser un bien exclusivo y pasa a ser común: podrá deducir el porcentaje que resulte, con regularización durante los cuatro años siguientes si la mezcla varía en más de diez puntos. Aquí es donde la planificación deja de ser teórica: **el momento de la compra respecto del inicio de la actividad gravada cambia la prorrata de referencia y, con ella, miles de euros de deducción.**",
            "**La moraleja de política fiscal es la que conviene retener.** Se suele decir que la sanidad, la educación o los seguros «no llevan IVA», y de ahí se salta a que están fiscalmente favorecidos. La exención limitada no los libera del impuesto: **traslada la carga desde el valor añadido del propio sector hacia sus consumos intermedios**, la vuelve invisible y la hace depender de la intensidad en compras de cada operador. Gravar esos servicios a un tipo reducido con derecho pleno a deducir sería, en muchos casos, más barato para el consumidor final que la exención actual. Es un resultado contraintuitivo y bien establecido.",
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
            { t: "Creer que estar exento es siempre mejor", d: "Con una exención limitada no se repercute IVA pero tampoco se deduce, así que todo el soportado se convierte en coste y se traslada al precio. En muchos sectores, tributar a tipo reducido con derecho a deducir abarata más al consumidor final que la exención." },
            { t: "Confundir exención plena con exención limitada", d: "Las dos se llaman exención y funcionan al revés en lo único que importa. La plena —exportaciones, entregas intracomunitarias— conserva el derecho a deducir y equivale a un tipo cero. La limitada lo suprime y rompe la cadena." },
            { t: "Aplicar la prorrata general cuando la especial es obligatoria", d: "Lo es en cuanto la general permite deducir más de un 10 % por encima de la especial. En el ejemplo, 80.000 frente a 56.000: la general sobrededuce 24.000 € y la ley retira el atajo. La regla mira solo en ese sentido, no en el contrario." },
            { t: "Olvidar la regularización de los bienes de inversión", d: "La deducción del año de compra es provisional durante cuatro años más, o nueve en terrenos y edificaciones. Si la prorrata definitiva se aparta más de diez puntos, hay que ajustar la fracción anual, a favor o en contra." },
            { t: "Deducir sin factura completa", d: "El tique no da derecho a deducir, y una factura sin NIF del destinatario o sin desglose de la cuota tampoco. La condición formal es autónoma: la realidad del gasto no la suple, y es la causa más frecuente de deducciones denegadas en comprobación." },
            { t: "Deducir el 100 % de un vehículo de uso mixto", d: "La ley presume una afectación del 50 % en los turismos, y elevarla exige prueba. Alegar que se usa siempre para trabajar no basta: hay que acreditarlo, y la carga recae sobre quien deduce." },
            { t: "Deducir atenciones a clientes o gastos de representación", d: "Están expresamente excluidos, igual que joyas y espectáculos, aunque sean gastos reales de la actividad y deducibles en el Impuesto sobre Sociedades. Que un gasto sea deducible en un impuesto no dice nada sobre el otro." },
            { t: "Dar la prorrata del año por definitiva desde enero", d: "Durante el ejercicio se aplica provisionalmente el porcentaje del año anterior, y en la última declaración se regulariza con el definitivo. Presupuestar con el provisional produce sorpresas en la liquidación del cuarto trimestre." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "Por qué el SEC registra el IVA no deducible en el consumo intermedio",
          texto:
            "La contabilidad nacional recoge esta ficha con una precisión que conviene mirar. El IVA deducible **no se registra** como coste del productor: no lo es, porque lo recupera. Pero el **IVA no deducible sí forma parte del valor de los consumos intermedios y de la formación bruta de capital fijo** de quien lo soporta. Por eso, en la formación de capital de la ficha 13.08, los 21.000 € del escáner de la clínica dental **están dentro de su FBCF**, y los de una industria manufacturera no. Esto tiene una consecuencia práctica al comparar sectores: **la inversión de los sectores exentos aparece inflada en las estadísticas** respecto de la de los sectores gravados, para el mismo equipo físico. La diferencia no es un artefacto contable menor: es la medida exacta de lo que la exención limitada cuesta a esos sectores, y es la razón de que la magnitud macroeconómica que se compara entre países sea el gasto en volumen y no en valor.",
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
              q: "Operaciones con derecho 800.000 € y exentas 200.000 €, con 100.000 € de IVA soportado del que 40.000 € son exclusivos de las operaciones con derecho, 40.000 € de las exentas y 20.000 € comunes. ¿Qué prorrata procede?",
              a: "La especial, obligatoriamente. La general deduciría 80.000 € y la especial 40.000 + 0 + 16.000 = 56.000 €. Como 80.000 supera 56.000 × 1,10 = 61.600, la general sobrededuce más del 10 % y la ley impone la especial.",
            },
            {
              q: "¿Por qué una exención limitada puede encarecer un servicio en lugar de abaratarlo?",
              a: "Porque suprime el derecho a deducir: todo el IVA soportado en compras e inversiones se convierte en coste y se traslada al precio, sin aparecer en la factura. En sectores intensivos en compras, tributar a tipo reducido con derecho pleno a deducir resultaría más barato para el consumidor final.",
            },
            {
              q: "Un bien de inversión con 21.000 € de IVA soportado se dedujo al 80 %. Al año siguiente la prorrata definitiva baja al 60 %. ¿Qué procede?",
              a: "Regularizar, porque la variación supera diez puntos. El ajuste anual es (21.000 × 0,80 − 21.000 × 0,60) / 5 = 840 € a devolver en cada uno de los años del periodo de regularización, que es de cinco años en general y de diez en terrenos y edificaciones.",
            },
            {
              q: "¿Qué distingue a una exención plena de una limitada?",
              a: "El derecho a deducir. La plena —exportaciones, entregas intracomunitarias— no repercute pero conserva la deducción, de modo que el bien sale limpio de impuesto y equivale a un tipo cero. La limitada no repercute y tampoco deduce, con lo que rompe la cadena y convierte el soportado en coste.",
            },
            {
              q: "¿Por qué el escáner de una clínica dental aparece en las estadísticas por 121.000 € y el de una industria por 100.000 €?",
              a: "Porque el SEC incluye el IVA no deducible en el valor de la formación bruta de capital fijo de quien lo soporta, y la clínica no puede deducirlo por realizar operaciones exentas sin derecho. Es la razón de que la inversión de los sectores exentos aparezca inflada frente a la de los gravados para el mismo equipo físico.",
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
              q: "¿Qué caracteriza a una exención limitada frente a una plena?",
              opciones: [
                "Que solo se aplica a una parte del importe de la operación",
                "Que suprime el derecho a deducir el IVA soportado, convirtiéndolo en coste",
                "Que exige repercutir el impuesto a un tipo reducido en lugar de al general",
                "Que obliga a solicitar autorización previa a la Administración",],
              correcta: 1,
              porque: [
                "No es una cuestión de importe: la exención alcanza a toda la operación en ambos casos.",
                "Por eso el impuesto acaba escondido en el precio de la sanidad, la educación o los seguros.",
                "No se repercute nada: si se repercutiera a tipo reducido, la operación estaría gravada y conservaría la deducción.",
                "Las exenciones operan por ley cuando concurren sus requisitos, sin autorización previa.",],
            },
            {
              q: "La prorrata general permite deducir 80.000 € y la especial 56.000 €. ¿Qué debe hacer el sujeto pasivo?",
              opciones: [
                "Aplicar la especial, porque la general excede en más de un 10 % a la especial",
                "Aplicar la general, que es el régimen por defecto salvo renuncia expresa",
                "Elegir libremente, ya que ambas son métodos legalmente admitidos",
                "Aplicar la media de las dos, que es el criterio que fija la ley",],
              correcta: 0,
              porque: [
                "El umbral es 56.000 × 1,10 = 61.600, y 80.000 lo supera: la ley retira el atajo cuando sobrededuce.",
                "Es el régimen por defecto, pero deja de serlo justamente en el supuesto que describe el enunciado.",
                "La opción existe solo mientras la general no sobrededuzca por encima del umbral del 10 %.",
                "No hay ninguna media: se aplica un método o el otro, según la regla del 10 %.",],
            },
            {
              q: "Un bien de inversión se dedujo con una prorrata del 80 % y al año siguiente la definitiva es del 60 %. ¿Qué ocurre?",
              opciones: [
                "Nada: la deducción del año de compra es definitiva",
                "Se regulariza una fracción anual durante el periodo de cinco años, o diez en inmuebles",
                "Se recalcula íntegramente la deducción y se devuelve la diferencia de una sola vez",
                "Se pierde el derecho a deducir por haber cambiado la afectación del bien",],
              correcta: 1,
              porque: [
                "Solo lo es si la prorrata definitiva no se aparta más de diez puntos de la del año de adquisición.",
                "Un activo duradero no pertenece a un solo ejercicio, y la regularización reparte la corrección a lo largo de su vida fiscal.",
                "El ajuste de golpe procede en supuestos de transmisión del bien, no en la variación ordinaria de la prorrata.",
                "El derecho no se pierde: se ajusta al uso real, y el ajuste puede ser a favor o en contra.",],
            },
            {
              q: "Un autónomo tiene tiques de gasoil, una comida con un cliente y un turismo que dice usar solo para trabajar. ¿Qué puede deducir?",
              opciones: [
                "Nada con tiques, nada de la atención al cliente, y el vehículo al 50 % salvo prueba en contrario",
                "Todo, porque los tres son gastos reales de la actividad",
                "Los tiques y el vehículo al 100 %, pero no la comida con el cliente",
                "Nada de lo tres, por tratarse de gastos personales",],
              correcta: 0,
              porque: [
                "Las tres reglas actúan por vías distintas: forma, exclusión expresa y presunción de afectación con carga de la prueba.",
                "La realidad del gasto no suple la condición formal ni las exclusiones expresas de la ley.",
                "El tique no da derecho a deducir y el turismo tiene una presunción legal de afectación del 50 %.",
                "El gasoil y el vehículo sí son de la actividad: el problema es formal y de grado de afectación, no de naturaleza.",],
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
            { t: "Ley 37/1992 del IVA, títulos VIII y IX", d: "Requisitos de la deducción en los artículos 92 a 100, prorrata en los 102 a 106 y regularización de bienes de inversión en los 107 a 110. Los regímenes especiales, en el título IX." },
            { t: "PGC, grupo 47 y cuenta 472", d: "El otro lado del mismo problema: cómo se contabiliza el IVA soportado no deducible como mayor valor del bien o como gasto. Es el contenido de la ficha 5.11 y lo que hace que el escáner figure en balance por 121.000 €." },
            { t: "Ebrill, Keen, Bodin y Summers, The Modern VAT", d: "El estudio de referencia del FMI sobre el diseño del impuesto. El capítulo sobre exenciones desarrolla con datos por qué una exención limitada puede resultar más cara para el consumidor que un tipo reducido." },
            { t: "Comisión Europea, VAT Gap Report", d: "Mide anualmente la diferencia entre la recaudación teórica y la real de cada Estado miembro. Descompone cuánto se debe a fraude, a insolvencias y a errores de liquidación, buena parte de ellos en la deducción." },
          ],
        },
      ],
    },
  ],
};
