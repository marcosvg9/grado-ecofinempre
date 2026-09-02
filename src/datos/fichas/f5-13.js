/* Ficha 5.13 — Patrimonio neto y operaciones de capital. */

export default {
  codigo: "5.13",
  titulo: "Patrimonio neto y operaciones de capital",
  nivel: 2,
  bloque: "Contabilidad financiera",
  tiempo: "3 h",
  nucleo:
    "Ampliar, reducir y recomprar capital no pasa nunca por la cuenta de resultados: son operaciones con el socio, no con el mercado. Si pasaran, una empresa podría fabricar beneficios comprando y vendiendo sus propias acciones, y el resultado del ejercicio dejaría de medir lo único que debe medir.",
  requiere: "5.10 Cuentas anuales · 5.12 Subvenciones y donaciones",
  abre: "5.14 Cuentas a cobrar y a pagar · 7.06 Estructura de capital · 7.07 Política de dividendos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El **patrimonio neto** no es una cuenta sino un residuo: **activo menos pasivo**, la parte del activo financiada por quien no es acreedor. El PGC lo divide en tres bloques que conviene distinguir porque tienen naturaleza distinta. Los **fondos propios**: capital, prima de emisión, reservas, resultados y acciones propias. Los **ajustes por cambios de valor**, grupo 133, donde esperan las plusvalías latentes que aún no han pasado por resultados. Y las **subvenciones, donaciones y legados** de la ficha 5.12, en el grupo 13.",
            "La regla que estructura toda esta ficha es una sola y conviene enunciarla antes que nada: **las operaciones con los socios en su condición de tales no generan ingresos ni gastos**. Emitir acciones, devolver aportaciones, comprar acciones propias, repartir dividendos: nada de eso toca la cuenta de pérdidas y ganancias. La razón no es formal sino de fondo. **El resultado del ejercicio debe medir lo que la empresa gana operando con terceros**, y si las transacciones con sus dueños entraran ahí, dejaría de medirlo.",
            "La **ampliación de capital** puede hacerse de tres maneras. **A la par**, emitiendo al valor nominal. **Con prima de emisión**, cobrando por encima del nominal: el exceso va a la cuenta **110, prima de emisión**, que es una reserva de libre disposición y **nunca un ingreso**. Y **con cargo a reservas**, la llamada ampliación liberada, en la que no entra dinero: simplemente se traspasa un importe de reservas a capital, y el patrimonio neto total no varía en absoluto.",
            "**La prima de emisión existe por una razón que merece entenderse.** Si una sociedad con reservas acumuladas emitiera acciones nuevas al nominal, los nuevos socios adquirirían por 10 € una participación en un patrimonio que vale mucho más por acción, diluyendo a los antiguos. La prima corrige eso cobrando la diferencia. Y cuando la ampliación se hace por debajo del valor real de la acción, el mecanismo compensatorio es el **derecho de suscripción preferente**: los socios antiguos reciben un derecho negociable cuyo valor equivale exactamente a lo que pierden por la dilución.",
            "La **reducción de capital** responde a finalidades opuestas y conviene no mezclarlas. **Por pérdidas**, para restablecer el equilibrio entre capital y patrimonio: no sale dinero, solo se reconoce contablemente lo que ya había ocurrido. **Por devolución de aportaciones**, que sí supone salida de fondos hacia los socios. **Por constitución o incremento de reservas**, un movimiento interno. Y **por amortización de acciones propias**, que reduce el número de títulos en circulación.",
            "Un caso singular es la **operación acordeón**: reducir el capital a cero o por debajo del mínimo legal para absorber pérdidas y **simultáneamente** ampliarlo. Es la vía típica de recapitalización de una sociedad en desequilibrio, y su simultaneidad es un requisito legal, no una elección: reducir sin ampliar dejaría a la sociedad sin capital y en causa de disolución.",
            "**La autocartera es donde el principio de esta ficha se ve con más claridad.** Las acciones propias **no son un activo**: figuran en las cuentas 108 y 109 **minorando el patrimonio neto**. Y el resultado de comprarlas y venderlas **va a reservas, nunca a la cuenta de resultados**. La lógica es inapelable: si comprar acciones propias baratas y venderlas caras produjera beneficio contable, cualquier sociedad podría **fabricar resultados operando consigo misma**, sin haber vendido un solo producto ni prestado un solo servicio.",
            "Conviene cerrar con dos apuntes prácticos. El primero: **el reparto de dividendos no es un gasto**, es una **distribución de resultados** que se aprueba en junta y se registra contra reservas o contra el resultado del ejercicio, nunca en el grupo 6. El segundo: existe una **cuenta 557, dividendo activo a cuenta**, para los repartos anticipados antes del cierre, que figura **minorando el patrimonio neto** hasta que la junta apruebe la distribución definitiva. En ambos casos la coherencia es la misma: **lo que va al socio sale del patrimonio, no del resultado**.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Operación", "Qué le pasa al patrimonio neto", "¿Toca resultados?"],
          filas: [
            { nom: "Ampliación a la par", sub: "Emisión al valor nominal.", cols: ["Aumenta por el importe emitido", "No: aportación del socio"] },
            { nom: "Ampliación con prima", sub: "El exceso va a la cuenta 110.", cols: ["Aumenta por nominal más prima", "No: la prima es reserva, no ingreso"] },
            { nom: "Ampliación liberada", sub: "Con cargo a reservas.", cols: ["No varía: solo cambia de sitio", "No: es un movimiento interno"] },
            { nom: "Reducción por pérdidas", sub: "Restablece el equilibrio.", cols: ["No varía: reconoce lo ya ocurrido", "No: la pérdida ya pasó por resultados"] },
            { nom: "Reducción con devolución", sub: "Sale dinero hacia los socios.", cols: ["Disminuye por el importe devuelto", "No: es una devolución de aportaciones"] },
            { nom: "Compra y venta de autocartera", sub: "Cuentas 108 y 109.", cols: ["Minora mientras se posee; el margen va a reservas", "No: operar consigo misma no genera beneficio"] },
          ],
          nota: "La columna de la derecha no tiene ni una sola excepción, y esa uniformidad es la ficha entera: **ninguna operación con el socio en su condición de tal pasa por la cuenta de resultados**, porque el resultado mide lo que se gana operando con terceros.",
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
            { nom: "Patrimonio neto", sub: "Un residuo, no una cuenta.", cols: ["$PN = A - P$"] },
            { nom: "Valor teórico de la acción", sub: "Antes de la ampliación.", cols: ["$v_0 = \\dfrac{PN_0}{N_0}$"] },
            { nom: "Valor teórico tras la ampliación", sub: "Con $n$ acciones nuevas al precio $e$.", cols: ["$v_1 = \\dfrac{PN_0 + n\\,e}{N_0 + n}$"] },
            { nom: "Valor del derecho de suscripción", sub: "Exactamente lo que se pierde por dilución.", cols: ["$d = v_0 - v_1$"] },
            { nom: "Compensación exacta", sub: "Lo que gana el nuevo socio es lo que paga en derechos.", cols: ["$\\dfrac{N_0}{n}\\,d = v_1 - e$"] },
            { nom: "Prima de emisión", sub: "Va a la cuenta 110, no a resultados.", cols: ["$\\text{Prima} = n\\,(e - VN)$"] },
          ],
          nota: "La quinta línea es la que demuestra que el derecho de suscripción **no es un regalo sino una compensación exacta**: quien entra pagando el precio de emisión más los derechos necesarios paga justo el valor teórico, y quien no acude vende sus derechos y recupera lo que la dilución le quita.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: la ampliación y el valor del derecho",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad tiene **40.000 acciones** y un patrimonio neto de **600.000 €**. Acuerda una ampliación **de una acción nueva por cada cuatro antiguas**, emitiendo **10.000 acciones** a **10 €** cada una, que es su valor nominal.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Resultado"],
          filas: [
            ["Valor teórico antes", "600.000 / 40.000", "15,00 €"],
            ["Fondos que entran", "10.000 × 10", "100.000 €"],
            ["Patrimonio neto después", "600.000 + 100.000", "700.000 €"],
            ["Valor teórico después", "700.000 / 50.000", "14,00 €"],
            { celdas: ["Valor del derecho de suscripción", "15,00 − 14,00", "1,00 €"], clase: "total" },
            ["Lo que gana quien suscribe", "14,00 − 10,00", "4,00 €"],
            { celdas: ["Lo que le cuestan los derechos", "4 derechos × 1,00 €", "4,00 €"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Las dos últimas filas se compensan al céntimo, y esa coincidencia no es casual: es aritmética.** Quien quiera suscribir una acción nueva necesita cuatro derechos, que le cuestan 4,00 €, más los 10,00 € del precio de emisión: en total 14,00 €, exactamente el valor teórico de la acción tras la ampliación. **No hay ninguna ganga**, y quien creyera estar comprando a 10 € algo que vale 14 € habría olvidado el precio de los derechos.",
            "**Y el accionista antiguo que no acude tampoco pierde nada, si vende sus derechos.** Sus acciones valen 1,00 € menos cada una, pero por cada una recibe un derecho que vale exactamente 1,00 €. La dilución se compensa. **El que sí pierde es quien no acude y deja caducar sus derechos sin venderlos**, que es el error práctico más frecuente en las ampliaciones de sociedades cotizadas y una de las pocas maneras de perder dinero sin hacer nada.",
            "**Sobre la contabilización, obsérvese lo que no ocurre.** Entran 100.000 € y el patrimonio neto aumenta en 100.000 €, pero **el resultado del ejercicio no se mueve ni un euro**. Si la emisión hubiera sido con prima —pongamos a 16 €—, habrían entrado 160.000 €, de los cuales 100.000 € irían a capital y 60.000 € a la cuenta 110, prima de emisión. **Tampoco entonces habría ingreso alguno**: la prima es una reserva, no un beneficio, porque el dinero viene del socio y no del mercado.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la empresa que quiso fabricar beneficios con su autocartera",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una sociedad cotizada compra acciones propias por **50.000 €** cuando el mercado está deprimido y las vende meses después por **70.000 €**. El director financiero propone reconocer **20.000 € de beneficio** en la cuenta de resultados: la operación ha sido real, el dinero ha entrado y la plusvalía es evidente. **El auditor lo rechaza: esos 20.000 € van a reservas.**",
            "**La razón es la que sostiene toda la ficha, y basta llevar el razonamiento contrario al extremo para verla.** Si operar con acciones propias generara resultado contable, una sociedad podría **mejorar su cuenta de pérdidas y ganancias sin vender un solo producto**, simplemente comprando y vendiendo sus propios títulos. Y como el precio de esos títulos depende en buena parte del propio resultado publicado, se cerraría un círculo en el que el beneficio se alimenta a sí mismo. El resultado dejaría de medir la capacidad de la empresa de generar valor operando con terceros, que es lo único que se le pide medir.",
            "**Por eso las acciones propias tampoco son un activo.** Un activo es un recurso del que se esperan beneficios futuros, y una acción propia no lo es: es, en términos económicos, **capital que la sociedad ha devuelto a sus accionistas**. Figuran en las cuentas 108 y 109 **minorando el patrimonio neto**, exactamente igual que si el capital se hubiera reducido. La operación completa —comprar por 50.000 y vender por 70.000— es una salida de patrimonio seguida de una entrada mayor, y la diferencia se queda donde debe: en reservas.",
            "**El efecto sobre el balance es idéntico al que el director financiero buscaba: el patrimonio neto crece 20.000 €.** Lo que no crece es el resultado del ejercicio. Y esa distinción, que puede parecer estética, tiene consecuencias muy concretas: el beneficio por acción, el resultado sobre el que se calcula el dividendo, la retribución variable ligada a resultados y los ratios que miran los analistas. **La norma no impide la operación ni oculta su efecto: impide que se cuente como lo que no es.**",
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
            { t: "Llevar a resultados el margen de la autocartera", d: "Va a reservas. Si operar con acciones propias generara beneficio contable, una sociedad podría fabricar resultados sin vender nada, y el resultado dejaría de medir lo que gana operando con terceros." },
            { t: "Registrar las acciones propias como activo", d: "Minoran el patrimonio neto en las cuentas 108 y 109. No son un recurso del que esperar beneficios futuros: son capital que la sociedad ha devuelto a sus accionistas." },
            { t: "Tratar la prima de emisión como un ingreso", d: "Es una reserva de libre disposición, cuenta 110. El dinero viene del socio y no del mercado, así que no puede ser un beneficio: existe precisamente para que los nuevos socios no diluyan a los antiguos al entrar." },
            { t: "Creer que una ampliación liberada enriquece al accionista", d: "No entra dinero: se traspasa un importe de reservas a capital y el patrimonio neto total no varía. El accionista tiene más acciones, cada una de menor valor teórico, y lo mismo que antes." },
            { t: "Dejar caducar los derechos de suscripción sin venderlos", d: "Es de las pocas maneras de perder dinero sin hacer nada. La dilución baja el valor de cada acción antigua, y el derecho que la compensa vale exactamente esa diferencia: no acudir y no vender es regalar esa cuantía." },
            { t: "Considerar el dividendo un gasto del ejercicio", d: "Es una distribución de resultados aprobada en junta, no un gasto del grupo 6. Y el dividendo a cuenta figura en la cuenta 557 minorando el patrimonio neto hasta que se apruebe la distribución definitiva." },
            { t: "Confundir reducción por pérdidas con reducción con devolución", d: "En la primera no sale dinero: se reconoce contablemente un desequilibrio que ya existía. En la segunda salen fondos hacia los socios y el patrimonio neto disminuye efectivamente. Persiguen finalidades opuestas." },
          ],
        },
      ],
    },
    {
      titulo: "Puente con la contabilidad nacional",
      contenido: [
        {
          tipo: "destacado",
          titulo: "F.5 y por qué una ampliación de capital no reduce el déficit público",
          texto:
            "El SEC aplica al Estado la misma lógica que el PGC aplica a la empresa, y de ahí sale una de las reglas fiscales más consecuentes. Las emisiones y adquisiciones de participaciones en el capital son **F.5, operaciones financieras**, y por definición **no afectan a la capacidad o necesidad de financiación B.9**: cambian la composición del balance, no la riqueza. Por eso, cuando el Estado aporta capital a una empresa pública, esa operación va al **capítulo 8** del presupuesto y **no computa como déficit**, tal como explica la ficha 18.03. Pero aquí aparece el matiz decisivo, y es el mismo que separa una aportación de una donación en el PGC: la operación solo es financiera **si el Estado actúa como un inversor que espera una rentabilidad razonable**. Si aporta capital a una empresa sin expectativa realista de recuperarlo —para cubrir pérdidas recurrentes—, Eurostat la **reclasifica como transferencia de capital D.9** y **sí computa en el déficit**. La prueba del inversor privado es exactamente la pregunta contable de esta ficha: **¿esto es una operación con el propietario o es un gasto disfrazado?**",
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
              q: "Una sociedad con 40.000 acciones y 600.000 € de patrimonio neto amplía 10.000 acciones a 10 €. ¿Cuánto vale el derecho de suscripción?",
              a: "1,00 €. El valor teórico pasa de 15,00 € (600.000/40.000) a 14,00 € (700.000/50.000). Quien suscribe gana 4,00 € por acción, y necesita cuatro derechos que le cuestan exactamente 4,00 €: la compensación es exacta y no hay ninguna ganga.",
            },
            {
              q: "Una empresa compra acciones propias por 50.000 € y las vende por 70.000 €. ¿Dónde van los 20.000 €?",
              a: "A reservas, nunca a la cuenta de resultados. Si operar con acciones propias generara beneficio contable, una sociedad podría mejorar su cuenta de resultados sin vender un solo producto. El patrimonio neto sí crece 20.000 €; el resultado del ejercicio, no.",
            },
            {
              q: "¿Por qué existe la prima de emisión?",
              a: "Porque si una sociedad con reservas acumuladas emitiera al nominal, los nuevos socios adquirirían por poco una participación en un patrimonio que vale mucho más por acción, diluyendo a los antiguos. La prima cobra esa diferencia y va a la cuenta 110 como reserva, nunca como ingreso.",
            },
            {
              q: "¿Qué diferencia hay entre una reducción de capital por pérdidas y una con devolución de aportaciones?",
              a: "En la reducción por pérdidas no sale dinero: se reconoce contablemente un desequilibrio que ya se había producido y que ya pasó por resultados. En la reducción con devolución salen fondos hacia los socios y el patrimonio neto disminuye efectivamente. Persiguen finalidades opuestas.",
            },
            {
              q: "¿Cuándo una aportación de capital del Estado a una empresa pública computa como déficit?",
              a: "Cuando no hay expectativa realista de recuperarla, por ejemplo si cubre pérdidas recurrentes. Entonces Eurostat la reclasifica de operación financiera F.5 a transferencia de capital D.9 y sí computa. La prueba del inversor privado es la misma pregunta contable de esta ficha: si es una operación con el propietario o un gasto disfrazado.",
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
              q: "Una sociedad vende acciones propias con un margen de 20.000 €. ¿Dónde se registra?",
              opciones: [
                "En reservas: operar con acciones propias no genera resultado",
                "Como menor gasto financiero del ejercicio en que se produce",
                "Como resultado extraordinario, por su carácter no recurrente",
                "Como ingreso financiero del ejercicio, al proceder de instrumentos de patrimonio",],
              correcta: 0,
              porque: [
                "De lo contrario una sociedad podría fabricar beneficios operando consigo misma, sin vender nada a terceros.",
                "No hay gasto financiero que minorar: la operación no pasa por la cuenta de resultados en ningún concepto.",
                "El PGC no usa esa categoría, y el carácter no recurrente no cambiaría la naturaleza de la operación.",
                "Los instrumentos de patrimonio propios no son un activo financiero de la sociedad que los emite.",],
            },
            {
              q: "Valor teórico antes de una ampliación: 15 €. Después: 14 €. La proporción es de una nueva por cada cuatro antiguas y se emite a 10 €. ¿Qué gana quien suscribe?",
              opciones: [
                "4,00 € por acción, ya que compra a 10 € algo que vale 14 €",
                "Nada: gana 4,00 € y paga 4,00 € por los cuatro derechos necesarios",
                "5,00 € por acción, la diferencia entre el precio de emisión y el valor teórico previo",
                "1,00 € por acción, el valor del derecho de suscripción",],
              correcta: 1,
              porque: [
                "Ese cálculo olvida que para suscribir hace falta comprar derechos, que tienen precio.",
                "Paga 10 € más 4 € de derechos: exactamente los 14 € que vale la acción tras la ampliación.",
                "El valor teórico previo no es el precio de referencia: la acción ya no vale 15 € tras la ampliación.",
                "1,00 € es el valor de un derecho, no la ganancia de quien suscribe una acción nueva.",],
            },
            {
              q: "¿Qué efecto tiene sobre el patrimonio neto una ampliación de capital liberada con cargo a reservas?",
              opciones: [
                "No lo modifica: solo traspasa un importe de reservas a capital",
                "Lo aumenta por el valor teórico de las nuevas acciones",
                "Lo aumenta por el valor nominal de las acciones emitidas",
                "Lo reduce, porque las reservas dejan de estar disponibles",],
              correcta: 0,
              porque: [
                "El accionista acaba con más acciones, cada una de menor valor teórico, y lo mismo que antes.",
                "El valor teórico de cada acción baja al haber más títulos sobre el mismo patrimonio.",
                "No entra dinero de nadie: nada se añade al patrimonio, solo cambia de partida dentro de él.",
                "La disponibilidad de las reservas cambia, pero el importe total del patrimonio neto no.",],
            },
            {
              q: "¿Cómo se registra el reparto de un dividendo?",
              opciones: [
                "Como distribución de resultados aprobada en junta, sin pasar por resultados",
                "Como menor ingreso del ejercicio en que se acuerda",
                "Como gasto del grupo 6, al suponer una salida de recursos",
                "Como gasto financiero, por retribuir a los aportantes de fondos",],
              correcta: 0,
              porque: [
                "Y el dividendo a cuenta figura en la cuenta 557, minorando el patrimonio neto hasta la aprobación definitiva.",
                "No existe tal minoración de ingresos: la distribución no altera el resultado que se distribuye.",
                "La salida de recursos no lo convierte en gasto: lo que va al socio sale del patrimonio, no del resultado.",
                "Los gastos financieros retribuyen a los acreedores; el socio no es acreedor sino propietario.",],
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
            { t: "PGC, grupo 1 y norma de registro y valoración 9.ª, apartado sobre instrumentos de patrimonio propios", d: "Las cuentas del patrimonio neto y la regla de que las operaciones con instrumentos propios no generan resultado. Es breve y contundente." },
            { t: "Texto refundido de la Ley de Sociedades de Capital", d: "Aumento y reducción de capital, derecho de suscripción preferente, autocartera y operación acordeón. La contabilidad sigue aquí a la norma mercantil, así que conviene leerlas juntas." },
            { t: "Resolución del ICAC sobre el tratamiento contable del impuesto y de las operaciones con socios", d: "Precisa los casos límite: aportaciones no dinerarias, condonaciones de créditos entre socio y sociedad y operaciones entre empresas del grupo, donde la frontera con el resultado es más fina." },
            { t: "Eurostat, Manual on Government Deficit and Debt, prueba del inversor privado", d: "El criterio con el que se decide si una aportación de capital público es operación financiera o transferencia. Es la misma pregunta de esta ficha aplicada al sector público, y enlaza con la ficha 18.03." },
          ],
        },
      ],
    },
  ],
};
