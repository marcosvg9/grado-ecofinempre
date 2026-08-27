/* Ficha 6.10 — Consolidacion de estados financieros y grupos. */

export default {
  codigo: "6.10",
  titulo: "Consolidación de estados financieros y grupos",
  nivel: 4,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "6 h",
  nucleo:
    "Consolidar es presentar a un conjunto de sociedades jurídicamente distintas como si fueran una sola entidad económica. Todo el método se reduce a dos operaciones: eliminar lo que el grupo se hace a sí mismo y separar la parte que no le pertenece.",
  requiere: "5.10 Cuentas anuales · 5.06 Fondo de comercio · 6.06 Análisis patrimonial",
  abre: "7.10 Fusiones y adquisiciones · 8.04 Análisis fundamental",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Cuando una sociedad controla a otras, sus cuentas individuales dejan de ser informativas. En el balance de la matriz solo aparece una partida —«participaciones en empresas del grupo»— que no dice nada de los activos, las deudas ni los riesgos que hay detrás. Las **cuentas consolidadas** existen para corregir eso: presentan al conjunto como si fuera una única empresa, que es como funciona en la realidad económica aunque no en la jurídica.",
            "La obligación de consolidar nace del **control**, no de la propiedad. El artículo 42 del Código de Comercio lo define por la mayoría de los derechos de voto, la facultad de nombrar o destituir a la mayoría del órgano de administración, o acuerdos que otorguen ese poder. Se puede controlar con menos del 50 % del capital, y se puede tener más del 50 % sin controlar. La primera consecuencia práctica es que el perímetro de consolidación es una decisión con juicio, y por tanto un lugar donde mirar.",
            "El grado de vinculación determina el método. Con **control** se aplica la **integración global**: se suman todos los activos, pasivos, ingresos y gastos de la dependiente, línea a línea, y después se reconoce la parte que no pertenece al grupo. Con **influencia significativa** —presunta a partir del 20 % de los derechos de voto— se aplica la **puesta en equivalencia**: no se suma nada, solo se ajusta el valor de la participación por la parte proporcional del resultado y del patrimonio de la asociada. Con **control conjunto**, la normativa española admite integración proporcional o puesta en equivalencia, mientras que las NIIF eliminaron la primera opción para negocios conjuntos.",
            "El método de integración global tiene cinco pasos y conviene tenerlos en orden. **Homogeneizar**: alinear criterios contables, fechas de cierre y monedas. **Agregar**: sumar todas las partidas. **Eliminar inversión-fondos propios**: la participación de la matriz desaparece contra los fondos propios de la dependiente, y la diferencia positiva es el **fondo de comercio de consolidación**. **Eliminar operaciones internas**: ventas, créditos, deudas y, sobre todo, resultados no realizados frente a terceros. **Reconocer socios externos**: la parte del patrimonio y del resultado que corresponde a los accionistas minoritarios de las dependientes.",
            "El paso que más se subestima es la eliminación de **resultados internos no realizados**. Si la matriz vende mercancía a una filial con beneficio y la filial no la ha revendido fuera del grupo, ese beneficio no existe desde el punto de vista del conjunto: el grupo se lo ha ganado a sí mismo. Debe eliminarse hasta que la mercancía salga a un tercero. Sin esta eliminación, un grupo podría inflar su resultado consolidado simplemente moviendo existencias entre sus propias sociedades.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Vinculación", "Criterio", "Método"],
          filas: [
            { nom: "Dependiente", sub: "Control: mayoría de votos o poder de nombrar el consejo", cols: ["Control", "Integración global"] },
            { nom: "Multigrupo", sub: "Gestión conjunta con otro socio ajeno al grupo", cols: ["Control conjunto", "Proporcional o equivalencia"] },
            { nom: "Asociada", sub: "Presunción a partir del 20 % de derechos de voto", cols: ["Influencia significativa", "Puesta en equivalencia"] },
            { nom: "Participación financiera", sub: "Sin influencia significativa", cols: ["Ninguna", "Como instrumento financiero (NRV 9)"] },
          ],
          nota: "Los porcentajes son presunciones, no reglas automáticas: admiten prueba en contrario en ambas direcciones. El perímetro se justifica en la memoria consolidada, y las entradas y salidas de sociedades del perímetro son una de las razones más frecuentes de que dos ejercicios consolidados no sean comparables.",
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
            { nom: "Fondo de comercio de consolidación", sub: "Lo pagado por encima del valor razonable de lo adquirido.", cols: ["FC = Coste de la participación − % × PN de la dependiente a valor razonable"] },
            { nom: "Socios externos", sub: "La parte del patrimonio que no pertenece al grupo.", cols: ["SE = (1 − %) × PN de la dependiente a valor razonable"] },
            { nom: "Resultado atribuido a la dominante", sub: "El que figura como resultado del grupo.", cols: ["$R_{\\text{dominante}} = R_{\\text{consolidado}} - R$ atribuido a socios externos"] },
            { nom: "Resultado interno a eliminar", sub: "Solo la parte que sigue dentro del grupo.", cols: ["RI = Margen de la operación interna × % no vendido a terceros"] },
            { nom: "Puesta en equivalencia", sub: "No se agrega nada: se ajusta la participación.", cols: ["Valor = Coste + % × (Resultados acumulados − Dividendos)"] },
          ],
          nota: "Recuerda de la ficha 5.06: el fondo de comercio se amortiza en diez años salvo prueba en contrario **y además** se somete a test de deterioro, cuyo efecto es irreversible.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: una adquisición del 80 %",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La sociedad **M** adquiere el **80 %** de **F** por 400.000 €. En la fecha de adquisición, el patrimonio neto de F ajustado a valor razonable asciende a 450.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Cálculo", "Importe"],
          filas: [
            ["Coste de la participación", "—", "400.000 €"],
            ["Patrimonio neto de F a valor razonable", "—", "450.000 €"],
            ["Parte adquirida por M", "80 % × 450.000", "360.000 €"],
            { celdas: ["Fondo de comercio de consolidación", "400.000 − 360.000", "40.000 €"], clase: "total" },
            { celdas: ["Socios externos", "20 % × 450.000", "90.000 €"], clase: "total" },
          ],
          nota: "En el balance consolidado desaparece la partida «participación en F» de 400.000 € y aparecen, en su lugar, **todos** los activos y pasivos de F, más un fondo de comercio de 40.000 € en el activo y 90.000 € de socios externos dentro del patrimonio neto.",
        },
        {
          tipo: "parrafos",
          items: [
            "**Operación interna.** Durante el ejercicio, M ha vendido a F mercancías por 100.000 € que le costaron 70.000 €, con un margen de 30.000 €. Al cierre, F ha revendido a terceros el 60 % de esa mercancía y conserva el 40 % en su almacén.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Eliminación de la operación interna", "Cálculo", "Importe"],
          filas: [
            ["Venta interna a eliminar de la cifra de negocios", "—", "100.000 €"],
            ["Compra interna a eliminar del coste de ventas", "—", "100.000 €"],
            ["Margen total de la operación", "100.000 − 70.000", "30.000 €"],
            ["Porcentaje aún en el grupo", "—", "40 %"],
            { celdas: ["Resultado no realizado a eliminar", "30.000 × 40 %", "12.000 €"], clase: "total" },
            ["Existencias de F a reducir en el consolidado", "misma cuantía", "12.000 €"],
          ],
          nota: "Dos efectos distintos. La eliminación de los **100.000 €** de venta y compra no cambia el resultado —se anulan entre sí— pero reduce la cifra de negocios consolidada: el grupo no ha vendido eso a nadie. La eliminación de los **12.000 €** sí reduce el resultado y el valor del almacén, porque es beneficio que el grupo se ha reconocido a sí mismo.",
        },
        {
          tipo: "parrafos",
          items: [
            "Si el grupo no eliminara la venta interna, su cifra de negocios estaría inflada en 100.000 €, con efectos directos sobre la rotación del análisis DuPont y sobre cualquier múltiplo basado en ventas. Y si no eliminara los 12.000 €, estaría declarando un beneficio que no ha salido del perímetro. Las dos eliminaciones responden a la misma idea: **una entidad no puede venderse ni ganar dinero a sí misma**.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: leer un grupo sin dejarse engañar por el perímetro",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un grupo cotizado presenta un crecimiento de ventas del 35 % y de resultado del 40 %. La lectura inmediata es excelente. Pero en la memoria consolidada figura que durante el ejercicio incorporó al perímetro dos sociedades adquiridas en marzo, cuyas ventas representan 28 puntos de ese 35 %.",
            "El **crecimiento orgánico** —el del negocio que ya existía— fue del 7 %, no del 35 %. Y como las adquiridas solo consolidan desde marzo, el año siguiente aportarán doce meses en lugar de diez, lo que producirá un crecimiento adicional puramente aritmético que tampoco será orgánico. Distinguir ambas cosas es el primer ajuste que hay que hacer al analizar cualquier grupo activo en adquisiciones.",
            "**Las tres preguntas de perímetro.** Primera: ¿qué sociedades han entrado y salido, y desde qué fecha consolidan? Segunda: ¿hay sociedades participadas al 45 % o 50 % que quedan fuera del perímetro de integración global y cuya deuda, por tanto, no figura en el balance consolidado? Tercera: ¿ha cambiado el método aplicado a alguna participada, por ejemplo de equivalencia a integración global? Un cambio de método puede duplicar el activo consolidado sin que se haya comprado nada.",
            "**Por qué esto importa más de lo que parece.** La deuda de una asociada puesta en equivalencia no aparece en el pasivo consolidado: solo se refleja el valor neto de la participación. Un grupo puede así mantener un endeudamiento aparente moderado mientras la deuda real del conjunto de negocios que gestiona es muy superior. Es una estructura legítima y frecuente en infraestructuras, energía y promoción inmobiliaria, y solo se detecta leyendo el detalle de participadas de la memoria.",
            "**Conexión con el bloque 7:** el fondo de comercio de consolidación es el rastro contable de lo que se pagó de más en cada adquisición. Analizarlo en serie —cuánto se ha acumulado, cuánto se ha deteriorado— es la mejor evidencia disponible sobre si la estrategia de compras del grupo ha creado o destruido valor, que es la pregunta de la ficha 7.10.",
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
            { t: "Confundir porcentaje de participación con control", d: "La obligación de consolidar nace del control efectivo. Se puede controlar con el 40 % si el resto del capital está disperso o hay pactos parasociales, y se puede tener el 55 % sin controlar si un acuerdo lo impide. El porcentaje es una presunción que admite prueba en contrario." },
            { t: "Olvidar eliminar los resultados internos no realizados", d: "Es la eliminación que más se descuida y la única de las básicas que altera el resultado. Sin ella, un grupo puede inflar su beneficio moviendo existencias entre sus propias sociedades, sin haber vendido nada a un tercero." },
            { t: "Tratar a los socios externos como pasivo", d: "Forman parte del patrimonio neto consolidado, en una línea separada. Son propietarios de una parte del grupo, no acreedores. Colocarlos en el pasivo distorsiona el endeudamiento y todos los ratios que dependen del neto." },
            { t: "Comparar ejercicios con perímetros distintos", d: "Una incorporación a mitad de año hace que el crecimiento consolidado mezcle negocio orgánico con negocio comprado, y encima con un número de meses distinto en cada ejercicio. El análisis exige separar ambos efectos, y la memoria da los datos para hacerlo." },
            { t: "Ignorar la deuda de las asociadas", d: "En puesta en equivalencia solo se refleja el valor neto de la participación: los activos y las deudas de la asociada no aparecen. Un grupo puede presentar un endeudamiento moderado mientras gestiona negocios muy apalancados fuera del perímetro de integración global." },
            { t: "Analizar las cuentas individuales de la matriz", d: "Son informativas para cuestiones societarias —reparto de dividendos, capital— pero no describen el negocio. Toda la actividad económica está en las consolidadas; en las individuales solo hay una línea de participaciones." },
            { t: "Dar por hecho que el fondo de comercio es un activo real", d: "Representa lo pagado por encima del valor razonable de lo identificable. No tiene valor de realización independiente y su recuperación depende de que las sinergias esperadas se materialicen. Cuando pesa más que el patrimonio neto, un deterioro severo puede dejar el neto en negativo." },
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
            "El SEC 2010 trata a los grupos de forma opuesta al PGC, y entender por qué aclara bastante sobre el propósito de cada sistema.",
          ],
          lista: [
            "**El grupo empresarial no existe como unidad institucional.** Cada sociedad residente es una unidad separada y se sectoriza por su propia actividad. Una matriz industrial con una filial financiera aparece repartida entre dos sectores distintos.",
            "La razón es que el SEC organiza la economía por **residencia y por comportamiento económico**, no por propiedad. Un grupo con filiales en varios países no puede ser una unidad, porque cada filial pertenece a la economía en la que reside.",
            "Aun así, la **consolidación existe en el SEC**, pero como una decisión de presentación dentro de cada sector: las operaciones entre unidades del mismo sector pueden mostrarse consolidadas o no. La deuda pública según el Protocolo de Déficit Excesivo se presenta **consolidada** dentro de las administraciones públicas, eliminando exactamente igual que en un grupo la deuda que unas administraciones tienen con otras.",
            "El concepto de **operación interna eliminable** es por tanto el mismo: lo que una unidad se debe a sí misma, o al conjunto del que forma parte, no es deuda del conjunto.",
            "Las **sociedades instrumentales sin actividad sustantiva** son el punto de fricción común. En cuentas nacionales pueden reclasificarse dentro del sector de su controlador si no tienen autonomía de decisión; en contabilidad empresarial, la discusión equivalente es si entran o no en el perímetro. Ambos sistemas persiguen lo mismo: que la forma jurídica no oculte la realidad económica.",
          ],
          cierre:
            "La diferencia es de finalidad. El PGC quiere describir una **entidad económica** aunque esté fragmentada jurídicamente; el SEC quiere describir una **economía nacional** aunque sus unidades pertenezcan a grupos extranjeros. Ninguno de los dos criterios es más correcto: responden a preguntas distintas.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "M compra el 70 % de F por 350.000 €. El PN de F a valor razonable es de 400.000 €. ¿Fondo de comercio y socios externos?", a: "Fondo de comercio: 350.000 − 0,70 × 400.000 = 70.000 €. Socios externos: 0,30 × 400.000 = 120.000 €, dentro del patrimonio neto consolidado." },
            { q: "La matriz vende a una filial por 200.000 € con un margen de 50.000 €, y la filial ha revendido fuera el 80 %. ¿Cuánto se elimina del resultado?", a: "10.000 €: el 20 % de los 50.000 € de margen que sigue dentro del grupo. Además se eliminan los 200.000 € de venta y de compra, que no alteran el resultado pero sí la cifra de negocios consolidada." },
            { q: "¿Por qué se elimina la venta interna aunque no afecte al resultado?", a: "Porque infla la cifra de negocios del grupo con operaciones que no han salido del perímetro. Afecta a la rotación, a los múltiplos sobre ventas y a cualquier comparación sectorial, aunque el resultado no varíe." },
            { q: "Un grupo tiene una participada al 50 % muy endeudada, puesta en equivalencia. ¿Aparece esa deuda en el balance consolidado?", a: "No. Solo figura el valor neto de la participación. El endeudamiento del grupo parece menor de lo que es en términos de los negocios que gestiona, y solo se detecta en el detalle de participadas de la memoria." },
            { q: "¿Por qué el SEC 2010 no consolida los grupos empresariales?", a: "Porque organiza la economía por residencia y comportamiento económico, no por propiedad. Cada sociedad residente es una unidad institucional propia. Sí consolida, en cambio, dentro de un sector: la deuda pública PDE se presenta neta de las deudas entre administraciones." },
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
              q: "¿Qué determina la obligación de consolidar?",
              opciones: [
                "Superar el 50 % del capital de otra sociedad",
                "El control efectivo, que puede existir con el 40 % si el resto está disperso o hay pactos parasociales",
                "Que las sociedades operen en el mismo sector",
                "Que la matriz y la filial compartan domicilio fiscal",
              ],
              correcta: 1,
              porque: [
                "El porcentaje es un indicio, no el criterio: la mayoría del capital suele dar control, pero ni es imprescindible ni siempre lo garantiza.",
                "Y a la inversa: se puede tener más de la mitad sin controlar, si existen restricciones estatutarias o derechos de veto de terceros.",
                "El sector es irrelevante: se consolida por control, aunque las actividades no tengan nada que ver.",
                "El domicilio fiscal no interviene; de hecho, se consolidan filiales extranjeras.",
              ],
            },
            {
              q: "De las eliminaciones básicas de consolidación, ¿cuál es la que altera el resultado del grupo?",
              opciones: [
                "La eliminación de saldos recíprocos entre sociedades del grupo",
                "La eliminación de los resultados internos no realizados",
                "La eliminación de la inversión-fondos propios",
                "Ninguna: las eliminaciones nunca tocan el resultado",
              ],
              correcta: 1,
              porque: [
                "Los saldos recíprocos afectan al balance —desaparecen un crédito y una deuda por el mismo importe— pero no al resultado.",
                "Es la que más se descuida. Sin ella, un grupo puede inflar su beneficio moviendo existencias entre sociedades sin haber vendido nada fuera.",
                "Elimina la participación contra los fondos propios de la filial y hace aflorar el fondo de comercio; es una operación de balance.",
                "Esta sí lo toca, y por eso importa: el beneficio del grupo es solo el realizado frente a terceros.",
              ],
            },
            {
              q: "¿Dónde figuran los socios externos en el balance consolidado?",
              opciones: [
                "En el pasivo no corriente, como deuda a largo plazo con terceros",
                "En el patrimonio neto, en una línea separada: son propietarios de una parte del grupo, no acreedores",
                "En el activo, como menor valor de la participación",
                "Fuera del balance, solo mencionados en la memoria",
              ],
              correcta: 1,
              porque: [
                "No son acreedores: no tienen derecho a cobrar un importe cierto, sino participación en el neto de la filial.",
                "Colocarlos en el pasivo distorsiona el endeudamiento del grupo y todos los ratios que se construyen sobre él.",
                "La participación se elimina en la consolidación; los externos aparecen en el neto, no minorando un activo.",
                "Figuran en el propio balance, en el patrimonio neto, con la denominación de participaciones no dominantes.",
              ],
            },
            {
              q: "Un grupo tiene una asociada muy endeudada, integrada por puesta en equivalencia. ¿Qué muestran las cuentas consolidadas?",
              opciones: [
                "Los activos y deudas de la asociada, en proporción al porcentaje de participación",
                "Solo el valor neto de la participación: los activos y las deudas de la asociada no aparecen",
                "Los activos y deudas de la asociada al 100 %, con socios externos por el resto",
                "Nada de la asociada, que queda fuera del perímetro",
              ],
              correcta: 1,
              porque: [
                "Ese es el método de integración proporcional, que no es el que se aplica a las asociadas.",
                "Por eso un grupo puede presentar un endeudamiento aparente muy inferior al real: la deuda vive en asociadas que solo figuran por una cifra neta.",
                "La integración global al 100 % con socios externos se reserva a las sociedades dependientes, es decir, a las controladas.",
                "Sí entra en el perímetro, pero por el método de puesta en equivalencia, no ignorada.",
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
            { ref: "Normas para la Formulación de Cuentas Anuales Consolidadas (RD 1159/2010)", nota: "la norma española. Define perímetro, métodos y eliminaciones." },
            { ref: "Código de Comercio, artículo 42", nota: "la definición legal de grupo y de control. Es el punto de partida de todo lo demás." },
            { ref: "NIIF 10, 11 y 12", nota: "el marco internacional, aplicable a los grupos cotizados. Difiere del español en el tratamiento de los negocios conjuntos." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulos 2 y 20", nota: "unidades institucionales, sectorización y consolidación dentro del sector público." },
          ],
        },
      ],
    },
  ],
};
