/* Ficha 15.09 — Benchmarking y conciliación: Denton y Cholette-Dagum. */

export default {
  codigo: "15.09",
  titulo: "Benchmarking y conciliación: Denton y Cholette-Dagum",
  nivel: 4,
  bloque: "Ajuste estacional y series oficiales",
  tiempo: "5 h",
  nucleo:
    "Cuadrar una serie trimestral con su total anual sin destrozar su perfil. Repartir la discrepancia a partes iguales parece lo natural y es lo peor: introduce escalones justo en el salto de año, que es donde nadie quiere un artefacto.",
  requiere: "15.08 Política de revisiones · 15.01 El flujo del ajuste estacional · 4.01 Álgebra y optimización",
  abre: "15.10 Desagregación temporal · 15.11 Agregación directa e indirecta · 10.10 Cuentas trimestrales",

  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El problema aparece en cuanto conviven dos estadísticas del mismo fenómeno con distinta periodicidad. Las **cuentas anuales** se elaboran con fuentes completas —declaraciones fiscales, encuestas estructurales, registros administrativos cerrados— y son el dato de referencia. Las **cuentas trimestrales** se construyen con indicadores de coyuntura, más rápidos y menos exhaustivos. Cuando se suman los cuatro trimestres de un año, el resultado no coincide con el dato anual. Y no puede haber dos cifras oficiales del mismo año.",
            "El **benchmarking** es el procedimiento que impone la coincidencia. Toma la serie de alta frecuencia como **indicador de perfil** —dice cómo se reparte la actividad dentro del año— y el dato de baja frecuencia como **referencia de nivel** —dice cuánto hubo en total—. La operación consiste en modificar la serie trimestral lo menos posible para que sume el total anual, y la clave está en qué significa *lo menos posible*.",
            "La respuesta ingenua es repartir la discrepancia a partes iguales entre los cuatro trimestres. Es tentadora, es trivial de calcular y **es la peor opción disponible**. Si un año necesita repartir 0,03 y el siguiente 0,15, cada trimestre del primero recibe 0,0075 y cada uno del segundo 0,0375: la corrección da un salto entre el cuarto trimestre de un año y el primero del siguiente. Ese salto no existe en la economía, lo ha creado el reparto, y aparece exactamente en el punto de la serie que más se mira, que es el enlace entre ejercicios.",
            "**Denton** planteó el problema como lo que es: una optimización. En lugar de minimizar la magnitud de la corrección, minimiza la **suavidad de sus cambios**, es decir, la suma de los cuadrados de las diferencias sucesivas de la corrección, sujeto a que cada año sume lo que debe. El resultado es una corrección que evoluciona gradualmente y **no tiene escalones en los saltos de año**. Hay dos variantes: la aditiva, que suaviza las diferencias de la corrección, y la proporcional, que suaviza las de la corrección relativa; la proporcional es preferible cuando la serie tiene tendencia acusada, porque reparte proporcionalmente al nivel.",
            "**Cholette y Dagum** generalizaron el planteamiento en dos direcciones útiles. Primera: admitir que el **indicador tenga sesgo** además de ruido, y estimarlo en lugar de suponer que solo hay que corregir el nivel. Segunda: admitir que la **referencia anual también tenga error**, lo que permite un benchmarking no vinculante en el que la serie trimestral no está obligada a sumar exactamente el total, sino a acercarse ponderando la fiabilidad de cada fuente. En cuentas nacionales suele usarse la versión vinculante, porque el dato anual es autoridad, pero la generalización importa cuando ambas fuentes son comparables.",
            "Conviene entender que el benchmarking **es una revisión más**, y de naturaleza distinta a las de la ficha 15.08. Cuando llega un dato anual nuevo, cambian trimestres ya publicados aunque su dato bruto y su ajuste no se hayan tocado: ha cambiado el ancla. Es una revisión contable, no estadística, y al documentar el origen de los movimientos de una serie conviene contabilizarla por separado.",
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
            { nom: "El problema", sub: "Dos estadísticas del mismo año.", cols: ["La suma de los trimestres no coincide con el dato anual"] },
            { nom: "Reparto de papeles", sub: "Cada fuente aporta lo suyo.", cols: ["Indicador: el perfil · referencia: el nivel"] },
            { nom: "Restricción", sub: "Lo que hay que cumplir.", cols: ["$\\sum$ de los trimestres del año $=$ total anual"] },
            { nom: "Reparto ingenuo", sub: "Lo que no hay que hacer.", cols: ["Discrepancia $/\\,4$: crea escalones en el salto de año"] },
            { nom: "Denton aditivo", sub: "Suaviza los cambios de la corrección.", cols: ["$\\min \\sum_t (d_t - d_{t-1})^2$ sujeto a la restricción anual"] },
            { nom: "Denton proporcional", sub: "Preferible con tendencia acusada.", cols: ["Suaviza las diferencias de la corrección relativa"] },
            { nom: "Cholette-Dagum", sub: "La generalización.", cols: ["Admite sesgo del indicador y error en la referencia"] },
            { nom: "Vinculante o no", sub: "Cuánta autoridad tiene el dato anual.", cols: ["Vinculante: cuadra exacto · no vinculante: pondera fiabilidad"] },
            { nom: "Naturaleza contable", sub: "Qué tipo de revisión produce.", cols: ["Cambia el ancla, no el dato ni el ajuste"] },
          ],
        },
      ],
    },

    {
      titulo: "Ejemplo numérico: repartir 0,03, 0,09 y 0,15",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "La ficha 15.01 dejó un cabo suelto: la serie ajustada suma **399,97**, **408,90** y **419,85** en los tres años, frente a los totales de la serie bruta, que son **400,0**, **409,0** y **420,0**. Hay que repartir **0,03**, **0,09** y **0,15**. Las cantidades son pequeñas a propósito: lo que se compara no es la magnitud del ajuste sino **dónde se coloca**.",
          ],
        },
        {
          tipo: "grafico",
          ejes: { x: "Trimestre", y: "Corrección aplicada" },
          dominio: { x: [1, 12], y: [0, 0.052] },
          marcasX: [1, 4, 8, 12],
          marcasY: [0, 0.01, 0.02, 0.03, 0.04],
          series: [
            {
              nombre: "Denton",
              color: "acento",
              etiquetaEn: [1.3, 0.047],
              puntos: [[1, 0.0047], [2, 0.0058], [3, 0.0081], [4, 0.0114], [5, 0.0158], [6, 0.0203], [7, 0.0247], [8, 0.0292], [9, 0.0336], [10, 0.0369], [11, 0.0392], [12, 0.0403]],
            },
            {
              nombre: "Reparto a partes iguales",
              color: "alerta",
              trazo: "discontinuo",
              etiquetaEn: [1.3, 0.0395],
              puntos: [[1, 0.0075], [2, 0.0075], [3, 0.0075], [4, 0.0075], [5, 0.0225], [6, 0.0225], [7, 0.0225], [8, 0.0225], [9, 0.0375], [10, 0.0375], [11, 0.0375], [12, 0.0375]],
            },
          ],
          nota: "El reparto a partes iguales es una **escalera**: constante dentro de cada año y con dos saltos verticales, entre los trimestres 4 y 5 y entre el 8 y el 9. Justo en los enlaces de ejercicio. La corrección de Denton **crece de forma continua**, de 0,0047 a 0,0403, sin un solo escalón. Ambas cumplen la restricción anual con idéntica exactitud: la diferencia está enteramente en el perfil.",
        },
        {
          tipo: "tabla",
          cabecera: ["Enlace de año", "Tasa en la serie ajustada", "Tras Denton", "Tras reparto igual", "Distorsión Denton", "Distorsión reparto"],
          filas: [
            ["2023 T4 → 2024 T1", "0,506 %", "0,510 %", "0,521 %", "0,004 pp", "0,015 pp"],
            { celdas: ["2024 T4 → 2025 T1", "0,629 %", "0,633 %", "0,643 %", "0,004 pp", "0,014 pp"], clase: "total" },
          ],
          nota: "Aquí se ve el precio del atajo. En los dos enlaces de año, el reparto a partes iguales distorsiona la tasa intertrimestral **entre tres y cuatro veces más** que Denton. Y no es un efecto que se diluya: aparece siempre en el mismo sitio, año tras año, de modo que una serie conciliada con reparto ingenuo tiene un **sesgo sistemático en el primer trimestre** de cada ejercicio.",
        },
        {
          tipo: "parrafos",
          items: [
            "Merece la pena ver por qué Denton produce esa curva. El problema es **minimizar la suma de los cuadrados de las diferencias sucesivas de la corrección**, sujeto a que las correcciones de cada año sumen la discrepancia correspondiente. Es un problema cuadrático con restricciones lineales, y su solución se obtiene resolviendo un sistema de ecuaciones que combina la condición de suavidad con los multiplicadores de las tres restricciones. No hay nada iterativo ni aproximado: es álgebra lineal directa, del tipo que trata la ficha 4.01.",
            "Un detalle técnico que sorprende al implementarlo. La función objetivo tiene un **núcleo no trivial**: sumar una constante a todas las correcciones no cambia la suma de sus diferencias. Eso hace que la matriz del sistema sea singular por sí sola, y solo las restricciones anuales la vuelven resoluble. En la práctica conviene añadir una regularización mínima para que el sistema sea numéricamente estable, y comprobar después que las sumas anuales cuadran exactamente, que es la verificación que no se puede saltar.",
            "Sobre la elección entre variante aditiva y proporcional: la aditiva reparte la misma cantidad absoluta con independencia del nivel, así que en una serie con tendencia fuerte pesa relativamente más al principio, cuando los valores son bajos. La **proporcional** reparte proporcionalmente al nivel de la serie y es la recomendada para magnitudes económicas que crecen. En el ejemplo la diferencia es imperceptible porque la serie apenas crece un 5 % en tres años; en una serie nominal con inflación acumulada, no lo sería.",
          ],
        },
      ],
    },

    {
      titulo: "Caso práctico: cuando el indicador y la referencia discrepan mucho",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El benchmarking se plantea como una operación mecánica, y lo es mientras la discrepancia sea pequeña. El caso interesante es el contrario: cuando la suma de los trimestres se aparta mucho del dato anual, la operación deja de ser inocua y **la pregunta correcta ya no es cómo repartir sino por qué discrepan tanto**.",
            "Una discrepancia grande y **estable en el tiempo** —el indicador siempre queda un 3 % por debajo— apunta a un problema de cobertura: el indicador mide una parte del fenómeno, no todo. Ahí el benchmarking funciona bien, porque lo que hace es precisamente reescalar el perfil al nivel correcto, y la generalización de Cholette-Dagum permite además estimar ese sesgo explícitamente en lugar de absorberlo en la corrección.",
            "Una discrepancia grande y **errática** es otra cosa. Significa que el indicador no está capturando bien el perfil intraanual, y entonces el benchmarking lo que hace es **imponer un perfil sobre otro** hasta que la suma cuadre. El resultado cumple la restricción y no significa nada: se está publicando un perfil trimestral que no procede de ninguna observación. La respuesta correcta no es un método de conciliación mejor sino **cambiar el indicador**, y así lo recogen las recomendaciones metodológicas.",
            "Existe un síntoma útil para distinguir ambos casos. Si se calcula la corrección de Denton y su magnitud es del orden de la variabilidad trimestral de la propia serie, el indicador está siendo sobrescrito. Si es un orden de magnitud menor, como en el ejemplo —correcciones de cuatro centésimas sobre variaciones trimestrales de medio punto—, la conciliación está haciendo lo que debe: retocar sin reescribir.",
            "Hay por último un caso que aparece con regularidad en cuentas nacionales y que conviene reconocer: la discrepancia **concentrada en un año concreto**. Suele deberse a un cambio metodológico en la estadística anual, a una revisión de referencia o a un cambio de perímetro. Ahí el benchmarking repartiría por toda la serie un desajuste que tiene una fecha y una causa conocidas, y lo correcto es tratarlo como lo que es —un escalón documentado, en el sentido de la ficha 15.04— antes de conciliar, no después.",
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
            { t: "Repartir la discrepancia a partes iguales", d: "Parece lo natural y es lo peor: la corrección queda constante dentro de cada año y salta entre ejercicios, creando un escalón artificial justo en el enlace de año. En el ejemplo distorsiona la tasa del primer trimestre entre tres y cuatro veces más que Denton, y lo hace sistemáticamente, año tras año." },
            { t: "Usar la variante aditiva en series con tendencia fuerte", d: "La aditiva reparte la misma cantidad absoluta con independencia del nivel, así que pesa relativamente más donde la serie vale menos. En magnitudes nominales que crecen con la inflación eso deforma el perfil, y la variante proporcional, que reparte según el nivel, es la recomendada." },
            { t: "Conciliar sin mirar la magnitud de la corrección", d: "Si la corrección es del orden de la variabilidad trimestral de la serie, el benchmarking está sobrescribiendo el perfil del indicador en lugar de retocarlo. El resultado cumple la restricción y no informa de nada. La comprobación es comparar la corrección con la variación trimestral típica." },
            { t: "Aplicar benchmarking a una discrepancia con causa conocida", d: "Cuando el desajuste se concentra en un año por un cambio metodológico o de perímetro, repartirlo por toda la serie disuelve un problema que tiene fecha y explicación. Lo correcto es tratarlo antes como un escalón documentado y conciliar después." },
            { t: "Olvidar que el benchmarking es una revisión", d: "Al llegar un dato anual nuevo cambian trimestres ya publicados aunque su dato bruto y su ajuste no se hayan tocado: ha cambiado el ancla. Es una revisión de naturaleza contable, distinta de las estadísticas de la ficha anterior, y conviene contabilizarla por separado al explicar los movimientos de la serie." },
            { t: "Suponer que la referencia anual es infalible", d: "El planteamiento vinculante da autoridad total al dato anual, lo que es razonable en cuentas nacionales pero no siempre. La generalización de Cholette-Dagum admite error en la referencia y pondera la fiabilidad de ambas fuentes, y es lo apropiado cuando anual y trimestral tienen calidad comparable." },
            { t: "Verificar el resultado por su aspecto", d: "Una serie conciliada tiene siempre buen aspecto, porque el procedimiento suaviza. La verificación imprescindible es aritmética: comprobar que las sumas anuales coinciden exactamente con las referencias, cifra a cifra, y no fiarse de que el gráfico parezca correcto." },
            { t: "Conciliar cada serie por separado en un cuadro contable", d: "Aplicar Denton a cada partida del PIB de forma independiente hace que cada una cuadre con su total anual, pero no garantiza que la identidad entre partidas se mantenga trimestre a trimestre. La conciliación de un cuadro contable es un problema de más dimensiones que la de una serie aislada." },
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
            "El benchmarking no es una técnica auxiliar de las cuentas trimestrales: es lo que hace posible que existan sin contradecir a las anuales.",
          ],
          lista: [
            "El principio de **prelación** es explícito en los manuales: las cuentas anuales son la referencia porque se elaboran con fuentes exhaustivas, y las trimestrales deben sumarlas. No es una convención arbitraria sino un reconocimiento de que las fuentes de coyuntura de la ficha 10.10 son más rápidas y menos completas. El benchmarking formaliza esa prelación.",
            "La conciliación en cuentas nacionales tiene **dos dimensiones a la vez**, y esta ficha solo trata una. La temporal —que los trimestres sumen el año— es la que resuelve Denton. La **contable** —que el PIB siga siendo la suma de sus componentes en cada trimestre, según la identidad de la ficha 13.02— es un problema distinto y simultáneo. Resolverlas por separado no garantiza que ambas se cumplan, y el planteamiento completo es un problema de conciliación multidimensional.",
            "Cuando se trabaja con **volúmenes encadenados** aparece una dificultad de fondo. Los índices encadenados de la ficha 10.08 **no son aditivos**: la suma de los componentes en volumen no da el agregado en volumen, ni siquiera antes de conciliar. Imponer coherencia sobre magnitudes que son intrínsecamente no aditivas obliga a decidir dónde se coloca la discrepancia, y la práctica habitual es conciliar sobre valores nominales y derivar después los volúmenes.",
            "El benchmarking es también la operación que cierra la **desagregación temporal** de la ficha 15.10. Ahí no se concilia una serie observada con un total, sino que se construye la serie trimestral desde cero a partir del total anual y de un indicador; la restricción de suma es la misma y el instrumental, también. Denton aparece en ambos problemas porque en el fondo son el mismo con distinto punto de partida.",
            "Por último, una consecuencia sobre las **revisiones de referencia**. Cuando una revisión de referencia cambia los datos anuales de varias décadas, el benchmarking propaga ese cambio a todos los trimestres correspondientes. Una revisión que el usuario percibe como un cambio de nivel del PIB de un año concreto se traduce, por esta vía, en una modificación de toda la serie trimestral histórica.",
          ],
          cierre:
            "La consecuencia práctica: la coherencia entre frecuencias no sale gratis ni sale sola. Es una operación con criterio propio, y elegir mal el criterio deja huella justo en los enlaces de año.",
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
              q: "¿Por qué no se reparte la discrepancia anual a partes iguales entre los cuatro trimestres?",
              a: "Porque la corrección queda constante dentro de cada año y salta entre ejercicios, creando un escalón artificial en el enlace de año. En el ejemplo, con discrepancias de 0,03, 0,09 y 0,15, la corrección pasa de 0,0075 a 0,0225 de un trimestre al siguiente. Eso distorsiona la tasa del primer trimestre entre tres y cuatro veces más que Denton, y de forma sistemática.",
            },
            {
              q: "¿Qué minimiza exactamente el método de Denton?",
              a: "No la magnitud de la corrección, sino la suma de los cuadrados de las diferencias sucesivas de la corrección, sujeto a que las correcciones de cada año sumen la discrepancia correspondiente. Es decir, busca que la corrección evolucione lo más suavemente posible, lo que elimina los escalones en los saltos de año. Es un problema cuadrático con restricciones lineales que se resuelve con álgebra directa.",
            },
            {
              q: "¿Cuándo conviene la variante proporcional en lugar de la aditiva?",
              a: "Cuando la serie tiene tendencia acusada. La aditiva reparte la misma cantidad absoluta con independencia del nivel, así que pesa relativamente más donde la serie vale menos, deformando el perfil. La proporcional reparte según el nivel y es la recomendada para magnitudes económicas que crecen, especialmente en series nominales con inflación acumulada.",
            },
            {
              q: "La corrección de Denton resulta ser del mismo orden que la variación trimestral de la serie. ¿Qué indica?",
              a: "Que el benchmarking está sobrescribiendo el perfil del indicador en lugar de retocarlo. El resultado cumplirá la restricción anual y no significará nada, porque el perfil publicado no procede ya de ninguna observación. La respuesta correcta no es un método de conciliación mejor sino cambiar el indicador. En el ejemplo la corrección es un orden de magnitud menor que la variación, que es como debe ser.",
            },
            {
              q: "¿Por qué conciliar cada partida del PIB por separado no basta en contabilidad nacional?",
              a: "Porque hay dos restricciones simultáneas y esa solo resuelve una. Aplicar Denton a cada partida hace que cada una sume su total anual, pero no garantiza que el PIB siga siendo la suma de sus componentes en cada trimestre. La conciliación temporal y la contable forman un problema multidimensional, y resolverlas por separado no asegura que ambas se cumplan.",
            },
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
            { ref: "Denton, «Adjustment of Monthly or Quarterly Series to Annual Totals»", nota: "el planteamiento original de 1971 como problema de minimización cuadrática con restricciones; breve y sorprendentemente legible." },
            { ref: "Dagum y Cholette, Benchmarking, Temporal Distribution and Reconciliation Methods for Time Series", nota: "el tratamiento sistemático del problema, con la generalización que admite sesgo del indicador y error en la referencia." },
            { ref: "Fondo Monetario Internacional, Quarterly National Accounts Manual", nota: "cómo se aplica todo esto en la producción de cuentas trimestrales, con las recomendaciones sobre qué hacer cuando la discrepancia es grande." },
            { ref: "Eurostat, Handbook on Quarterly National Accounts", nota: "el marco europeo, incluida la interacción entre conciliación temporal, coherencia contable y volúmenes encadenados." },
          ],
        },
      ],
    },
  ],
};
