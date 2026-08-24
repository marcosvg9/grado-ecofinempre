/* Ficha 8.02 — Renta fija: precio, TIR, duracion y convexidad. */

export default {
  codigo: "8.02",
  titulo: "Renta fija: precio, TIR, duración y convexidad",
  nivel: 3,
  bloque: "Mercados financieros e inversión",
  tiempo: "5 h",
  nucleo:
    "El precio de un bono es el valor actual de sus flujos, así que se mueve en sentido contrario a los tipos de interés. La duración mide esa sensibilidad y es, literalmente, la primera derivada disfrazada de plazo; la convexidad es la segunda y corrige el error de la primera.",
  requiere: "7.01 Valor temporal del dinero · 7.02 Rentas",
  abre: "8.03 Curva de tipos · 8.10 Gestión de riesgos",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Un bono es un contrato que promete una sucesión conocida de pagos: cupones periódicos y devolución del nominal al vencimiento. Su precio no es más que el valor actual de esa sucesión, descontada al tipo que el mercado exige hoy para ese riesgo y ese plazo. De ahí se deduce inmediatamente la propiedad central de la renta fija: **si los tipos suben, el precio baja**, porque los flujos prometidos son fijos y se descuentan más fuerte.",
            "El nombre «renta fija» induce a error. Lo fijo son los flujos, no el valor. Un bono mantenido hasta vencimiento da exactamente lo prometido si el emisor paga, pero durante su vida su precio de mercado fluctúa, a veces con violencia. Quien necesite vender antes está expuesto a **riesgo de tipo de interés**, y quien mantenga hasta el final sigue expuesto a **riesgo de crédito** y a **riesgo de reinversión** de los cupones.",
            "La **TIR del bono** —o rentabilidad al vencimiento— es la tasa que iguala el valor actual de los flujos al precio de mercado. Es la medida universal de rendimiento en renta fija y lleva dos supuestos incorporados que conviene no olvidar: que el bono se mantiene hasta vencimiento y que **los cupones se reinvierten a esa misma TIR**. Ninguno de los dos suele cumplirse, y por eso la rentabilidad realmente obtenida difiere de la TIR anunciada en el momento de la compra.",
            "La **duración de Macaulay** es la media de los plazos de los flujos, ponderada por su valor actual. Se expresa en años y tiene una interpretación elegante: es el momento en el que el efecto precio y el efecto reinversión de un movimiento de tipos se compensan exactamente. Pero su uso práctico es otro: dividida por uno más la TIR da la **duración modificada**, que mide directamente el porcentaje que varía el precio ante un cambio de un punto en los tipos. En términos analíticos es la elasticidad del precio respecto al tipo, con signo cambiado.",
            "La duración es una **aproximación lineal** a una relación que no lo es, y por eso falla en los dos sentidos de la misma manera: **subestima la subida del precio cuando los tipos bajan y sobreestima la caída cuando suben**. La **convexidad** recoge la curvatura. Su efecto es siempre favorable para el tenedor de un bono ordinario, y por eso, entre dos bonos de igual duración, el más convexo es preferible: gana más cuando los tipos bajan y pierde menos cuando suben.",
          ],
        },
        {
          tipo: "rejilla",
          cabecera: ["Factor", "Efecto sobre la duración", "Intuición"],
          filas: [
            { nom: "Mayor plazo a vencimiento", sub: "Más tiempo hasta recuperar el capital", cols: ["Aumenta", "Los flujos lejanos pesan más"] },
            { nom: "Mayor cupón", sub: "Se recupera antes parte del valor", cols: ["Reduce", "El peso se adelanta en el tiempo"] },
            { nom: "Mayor TIR de mercado", sub: "Descuento más fuerte de los flujos lejanos", cols: ["Reduce", "Los plazos largos pierden peso relativo"] },
            { nom: "Bono cupón cero", sub: "Un único flujo al vencimiento", cols: ["Duración = plazo", "Es el caso límite"] },
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
            { nom: "Precio de un bono", sub: "Valor actual de cupones y nominal.", cols: ["P = Σ C/(1+y)ᵗ + N/(1+y)ⁿ"] },
            { nom: "Duración de Macaulay", sub: "Media de plazos ponderada por valor actual.", cols: ["D = Σ [t × VA(FCₜ)] / P"] },
            { nom: "Duración modificada", sub: "La sensibilidad porcentual del precio.", cols: ["D* = D / (1 + y)"] },
            { nom: "Variación aproximada del precio", sub: "Aproximación de primer orden.", cols: ["ΔP/P ≈ −D* × Δy"] },
            { nom: "Convexidad", sub: "La curvatura, siempre positiva en bonos ordinarios.", cols: ["C = Σ [t(t+1) × VA(FCₜ)] / [P × (1+y)²]"] },
            { nom: "Variación con corrección de convexidad", sub: "Aproximación de segundo orden.", cols: ["ΔP/P ≈ −D* × Δy + ½ × C × (Δy)²"] },
            { nom: "Duración de una cartera", sub: "Media ponderada por valor de mercado.", cols: ["D*_cartera = Σ wᵢ × D*ᵢ"] },
          ],
          nota: "La última línea es la que hace operativo todo lo demás: la duración es **aditiva**, de modo que se puede gestionar la sensibilidad de una cartera entera con un solo número y ajustarla comprando o vendiendo plazos.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: un bono a cinco años",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Bono de nominal **1.000 €**, cupón anual del **4 %** y vencimiento a **5 años**. El mercado exige una TIR del **5 %** para ese riesgo y plazo. Como el cupón es inferior a la TIR, el bono cotizará **bajo par**.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Año", "Flujo", "Valor actual al 5 %", "Peso", "t × VA"],
          filas: [
            ["1", "40 €", "38,10 €", "3,98 %", "38,10"],
            ["2", "40 €", "36,28 €", "3,79 %", "72,56"],
            ["3", "40 €", "34,55 €", "3,61 %", "103,66"],
            ["4", "40 €", "32,91 €", "3,44 %", "131,64"],
            ["5", "1.040 €", "814,87 €", "85,17 %", "4.074,33"],
            { celdas: ["Total", "1.200 €", "956,70 €", "100 %", "4.420,28"], clase: "total" },
          ],
          nota: "El **85 % del valor** del bono está en el último flujo. Esa concentración es la razón de que la duración se acerque tanto al plazo en bonos de cupón bajo, y de que los bonos cupón cero sean los más sensibles de todos.",
        },
        {
          tipo: "tabla",
          cabecera: ["Medida", "Cálculo", "Resultado"],
          filas: [
            ["Precio", "suma de valores actuales", "956,70 €"],
            ["Duración de Macaulay", "4.420,28 / 956,70", "4,62 años"],
            ["Duración modificada", "4,62 / 1,05", "4,40"],
            { celdas: ["Convexidad", "25.812,7 / (956,70 × 1,05²)", "24,47"], clase: "total" },
          ],
        },
        {
          tipo: "parrafos",
          items: [
            "**Y ahora la prueba.** Si la TIR de mercado sube un punto, del 5 % al 6 %, ¿cuánto cae el precio? Comparemos la aproximación por duración, la corregida por convexidad y el precio exacto.",
          ],
        },
        {
          tipo: "grafico",
          alto: 380,
          ejes: { x: "TIR exigida", y: "Precio" },
          dominio: { x: [0.01, 0.09], y: [780, 1160] },
          marcasX: [0.01, 0.03, 0.05, 0.07, 0.09],
          marcasY: [800, 900, 1000, 1100],
          series: [
            {
              nombre: "Precio real",
              color: "acento",
              grosor: 2.6,
              etiquetaEn: [0.09, 824],
              puntos: [[0.01, 1145.6], [0.02, 1094.27], [0.03, 1045.8], [0.04, 1000], [0.05, 956.71], [0.06, 915.75], [0.07, 876.99], [0.08, 840.29], [0.09, 805.52]],
            },
            {
              nombre: "Según la duración",
              color: "alerta",
              trazo: "discontinuo",
              grosor: 2,
              etiquetaEn: [0.09, 782],
              puntos: [[0.01, 1125.08], [0.03, 1040.89], [0.05, 956.7], [0.07, 872.51], [0.09, 788.32]],
            },
          ],
          puntos: [
            { x: 0.05, y: 956.71, etiqueta: "hoy", guias: false },
          ],
          nota: "La recta discontinua es **la duración**, que no es más que la tangente a la curva en el punto de partida. Cerca de ese punto ambas coinciden y la aproximación es excelente; al alejarse, la recta se separa **siempre por debajo**. Eso es la **convexidad**, y tiene una consecuencia que favorece al tenedor del bono: cuando los tipos suben, el precio cae **menos** de lo que predice la duración, y cuando bajan, sube **más**. En el ejemplo, con un punto de movimiento el error es de apenas 1,15 €. Pero como el término de convexidad crece con el **cuadrado** de la variación, con movimientos de tres o cuatro puntos —los de 2022— el error de usar solo la duración deja de ser un decimal y pasa a ser una parte apreciable de la cartera.",
        },
        {
          tipo: "tabla",
          cabecera: ["Escenario", "Solo duración", "Con convexidad", "Precio exacto"],
          filas: [
            ["TIR sube al 6 %", "914,60 €", "915,77 €", "915,75 €"],
            ["TIR baja al 4 %", "998,80 €", "999,97 €", "1.000,00 €"],
            { celdas: ["Error de la duración sola", "−1,15 €", "+0,02 €", "—"], clase: "total" },
          ],
          nota: "La corrección de convexidad —**½ × 24,47 × 0,01² = 0,122 %** del precio— reduce el error de más de un euro a dos céntimos. Y fíjate en la asimetría: usar solo duración **exagera la pérdida** cuando los tipos suben y **subestima la ganancia** cuando bajan. En ambos casos el error va en contra del tenedor, que es lo que significa que la convexidad sea favorable.",
        },
        {
          tipo: "parrafos",
          items: [
            "Con movimientos de tipos pequeños, la duración basta. Con movimientos de dos o tres puntos —como los de 2022— el término de convexidad deja de ser un refinamiento y pasa a ser imprescindible, porque crece con el **cuadrado** de la variación.",
          ],
        },
      ],
    },
    {
      titulo: "Caso práctico: la subida de tipos de 2022",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Entre 2021 y 2022, los tipos de interés pasaron en la zona euro de terreno negativo a niveles no vistos en una década, y en Estados Unidos el movimiento fue de magnitud comparable. Para quien tuviera renta fija en cartera, la aritmética de esta ficha se convirtió en pérdidas contantes.",
            "Un bono a diez años con cupón bajo tiene una duración modificada en torno a 8 o 9. Una subida de tipos de tres puntos implica una caída de precio del **25 % o más**, corrección de convexidad incluida. Y eso en un activo que la mayoría de los ahorradores consideran conservador. Los fondos de renta fija a largo plazo registraron en 2022 pérdidas superiores a las de muchos fondos de renta variable, lo que sorprendió a partícipes que habían elegido esos productos precisamente por prudencia.",
            "**La clave que se pasó por alto** es que «renta fija» describe la naturaleza de los flujos, no la estabilidad del valor. Un bono a diez años es un producto de riesgo alto para quien pueda necesitar el dinero antes; es de riesgo bajo para quien tenga exactamente ese horizonte. La duración no es solo una medida de sensibilidad: **es la variable que hay que casar con el horizonte del inversor**. Esa idea —igualar la duración de la cartera al plazo del compromiso— es la base de la inmunización que emplean aseguradoras y fondos de pensiones.",
            "El episodio de **Silicon Valley Bank** en marzo de 2023, mencionado en la ficha anterior, es el mismo mecanismo aplicado a un balance bancario. La entidad tenía una cartera de bonos comprados con tipos mínimos, clasificados a vencimiento y por tanto sin reflejar pérdidas en resultados. Cuando tuvo que venderlos para atender retiradas de depósitos, esas pérdidas latentes se materializaron de golpe y consumieron el capital. **La contabilidad ocultaba una exposición que la duración habría revelado**, y ese es un puente directo con la ficha 5.07: la clasificación de la cartera decide si los cambios de valor se ven o no.",
            "**Qué mirar en una cartera de renta fija:** la duración modificada agregada, que resume la exposición en un número; su relación con el horizonte real de las necesidades de liquidez; y la calidad crediticia, que es un riesgo distinto y aditivo al de tipos.",
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
            { t: "Creer que la renta fija no tiene riesgo", d: "Los flujos son fijos, el valor no. Un bono a largo plazo puede perder un 25 % en un año de subida de tipos. El riesgo de tipo de interés es real y proporcional a la duración; a él se añaden el riesgo de crédito del emisor y el de reinversión de los cupones." },
            { t: "Interpretar la duración como el plazo hasta el vencimiento", d: "Solo coinciden en un bono cupón cero. Con cupones, la duración es siempre menor que el plazo, porque parte del valor se recupera antes. Un bono a diez años con cupón alto puede tener una duración de siete." },
            { t: "Usar solo la duración con movimientos grandes de tipos", d: "Es una aproximación lineal y el error crece con el cuadrado de la variación. Con medio punto es despreciable; con tres puntos, como en 2022, la corrección por convexidad cambia el resultado de forma apreciable." },
            { t: "Dar por buena la TIR como rentabilidad garantizada", d: "Supone mantener hasta vencimiento y reinvertir todos los cupones a esa misma tasa. Si los tipos caen, los cupones se reinvierten peor y la rentabilidad final es inferior a la TIR anunciada. Solo en un cupón cero mantenido a vencimiento la TIR se realiza exactamente." },
            { t: "Comparar TIR de bonos con distinto riesgo de crédito", d: "Una TIR más alta puede reflejar mayor riesgo de impago, no mejor oportunidad. La comparación exige separar el tipo sin riesgo del diferencial de crédito, y ese diferencial es la compensación por una pérdida esperada que a veces se materializa." },
            { t: "Ignorar la relación entre duración y horizonte", d: "El riesgo real depende de cuándo se necesita el dinero. Un bono a diez años es arriesgado para quien puede necesitar liquidez a dos años y prudente para quien tiene un compromiso a diez. Casar duración y horizonte es la idea que sostiene la inmunización de carteras." },
            { t: "Olvidar que la convexidad tiene precio", d: "Entre dos bonos de igual duración, el más convexo es preferible y por eso cotiza con una TIR ligeramente inferior. La convexidad no es un regalo: el mercado la cobra." },
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
            "Aquí hay una discrepancia de valoración muy concreta que conviene tener presente al manejar cifras de deuda pública.",
          ],
          lista: [
            "En las **cuentas financieras** del SEC 2010, los valores representativos de deuda (AF.3) se valoran a **precio de mercado**, como cualquier otro activo financiero. Sus oscilaciones de precio generan revalorizaciones que se registran fuera de las transacciones.",
            "Pero la **deuda pública según el Protocolo de Déficit Excesivo** se define a **valor nominal** y consolidada dentro de las administraciones públicas. Es una definición distinta, creada con fines de vigilancia fiscal.",
            "La consecuencia es directa: **la subida de tipos de 2022 redujo el valor de mercado de la deuda pública en circulación sin reducir en un solo euro la deuda PDE**. Quien mezcle ambas cifras obtendrá conclusiones incorrectas sobre la evolución del endeudamiento.",
            "Los **intereses (D.41)** se registran por devengo y, en el caso de la deuda emitida bajo o sobre par, se distribuyen a lo largo de la vida del título con una lógica emparentada con el coste amortizado de la ficha 5.07.",
            "La **vida media** de la deuda soberana es el equivalente práctico de la duración en la gestión del Tesoro: determina la velocidad a la que una subida de tipos se traslada a la carga financiera efectiva. Con vida media larga, el impacto sobre el gasto por intereses se produce con años de retardo.",
          ],
          cierre:
            "Esa última idea es probablemente la más útil: el mercado revaloriza la deuda instantáneamente, pero el presupuesto solo nota la subida a medida que vence y se refinancia. Son dos relojes distintos midiendo el mismo fenómeno.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Un bono tiene duración modificada de 6,5 y los tipos suben 0,5 puntos. ¿Cuánto cae el precio?", a: "Aproximadamente un 3,25 %, algo menos si se corrige por convexidad. Con movimientos pequeños la aproximación lineal es suficiente." },
            { q: "¿Por qué un bono con cupón alto tiene menor duración que otro con cupón bajo e igual plazo?", a: "Porque recupera antes una parte mayor de su valor. El peso de los flujos se adelanta en el tiempo y la media ponderada de plazos baja, con lo que el precio es menos sensible a los tipos." },
            { q: "¿En qué sentido falla la aproximación por duración?", a: "Sobreestima la caída del precio cuando los tipos suben y subestima la subida cuando bajan. El error va siempre a favor del tenedor: eso es lo que significa que la convexidad sea positiva." },
            { q: "Un bono comprado con TIR del 4 % se mantiene a vencimiento y los tipos bajan al 1 %. ¿Se obtiene el 4 %?", a: "No: menos. Los cupones se reinvierten al 1 % en lugar de al 4 %, y la TIR suponía reinversión a la propia tasa. Solo un cupón cero mantenido a vencimiento realiza exactamente su TIR." },
            { q: "¿Por qué la subida de tipos de 2022 no redujo la deuda pública española?", a: "Porque la deuda PDE se mide a valor nominal, no de mercado. El valor de mercado de los títulos en circulación sí cayó, y eso aparece en las cuentas financieras como revalorización negativa, pero no en la cifra de deuda que se vigila fiscalmente." },
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
            { ref: "Fabozzi, Bond Markets, Analysis and Strategies", nota: "la referencia. Duración, convexidad, inmunización y estrategias de cartera con todo el detalle técnico." },
            { ref: "Bodie, Kane y Marcus, Investments", nota: "el capítulo de renta fija, más breve y con mejor intuición para una primera lectura." },
            { ref: "Tesoro Público, informes de la deuda del Estado", nota: "vida media, coste medio y perfil de vencimientos de la deuda española." },
            { ref: "Reglamento (UE) 549/2013, SEC 2010, capítulo 7, y Manual del déficit y la deuda de Eurostat", nota: "la diferencia entre valoración a mercado en cuentas financieras y a nominal en la deuda PDE." },
          ],
        },
      ],
    },
  ],
};
