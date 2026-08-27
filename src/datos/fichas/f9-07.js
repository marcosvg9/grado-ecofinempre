/* Ficha 9.07 — Marketing estrategico: segmentacion y posicionamiento. */

export default {
  codigo: "9.07",
  titulo: "Marketing estratégico: segmentación y posicionamiento",
  nivel: 2,
  bloque: "Dirección de empresas",
  tiempo: "4 h",
  nucleo:
    "No se compite por todo el mercado: se elige a quién servir y con qué promesa. Segmentar bien exige que los grupos difieran en algo que cambie el comportamiento de compra, y que atenderlos por separado compense el coste de hacerlo.",
  requiere: "9.04 Estrategias competitivas · 9.03 Recursos y capacidades",
  abre: "9.08 Marketing mix · 9.10 Modelos de negocio",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "El marketing estratégico responde a tres preguntas encadenadas que se conocen por sus iniciales en inglés: **segmentar** el mercado en grupos con comportamiento distinto, **seleccionar** a cuáles dirigirse y **posicionarse** en la mente de esos clientes con una promesa diferenciada. La lógica es la misma de la ficha 9.04: una estrategia es un conjunto de renuncias, y aquí la renuncia es explícita, a qué clientes no servir.",
            "**Segmentar** no es clasificar por variables demográficas y confiar en que expliquen algo. Un segmento útil debe cumplir cuatro condiciones. Ser **internamente homogéneo y externamente distinto** en lo que afecta a la compra, no en lo que resulta fácil de medir. Ser **medible**, para poder estimar su tamaño. Ser **accesible**, es decir, alcanzable con algún canal a coste razonable. Y ser **suficientemente grande** para que atenderlo compense el coste de la diferenciación que exige.",
            "Las bases de segmentación más útiles casi nunca son las demográficas. La segmentación por **comportamiento** —frecuencia de uso, lealtad, momento de compra— y por **beneficio buscado** —qué problema quiere resolver el cliente— tienen mucha más capacidad explicativa que la edad o el código postal. Dos personas del mismo perfil demográfico pueden comprar por razones opuestas, y esa razón es lo que determina qué producto y qué mensaje funcionan.",
            "**Seleccionar** exige valorar cada segmento por su atractivo y por el encaje con las capacidades de la empresa. El atractivo se estima con el marco de la ficha 9.02 aplicado al segmento, no al sector entero: puede haber segmentos rentables dentro de sectores ruinosos y viceversa. El encaje remite a la ficha 9.03: servir bien a un segmento exige recursos concretos, y elegir uno para el que no se tienen es una decisión que se paga.",
            "**Posicionar** es decidir qué lugar quiere ocuparse en la mente del cliente frente a las alternativas. Un posicionamiento eficaz es **específico, creíble y sostenible**: dice una cosa, no cinco; la empresa puede respaldarla; y no es trivialmente replicable. La mayoría de los posicionamientos declarados fallan en la primera condición, porque intentan reclamar calidad, precio, servicio e innovación a la vez, con lo que no reclaman nada.",
            "La disciplina que ordena todo esto es económica: un segmento solo merece atención si **el valor que aportan sus clientes a lo largo de la relación supera con holgura lo que cuesta captarlos**. Esa comparación se puede calcular, y es lo que separa el marketing como disciplina de gestión del marketing como ejercicio de imaginación.",
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
            { nom: "Valor del ciclo de vida del cliente", sub: "Con retención constante y descuento.", cols: ["$\\mathrm{CLV} = \\dfrac{m\\,r}{1 + d - r}$"] },
            { nom: "Coste de adquisición", sub: "Todo el gasto comercial, no solo la publicidad.", cols: ["CAC = Gasto de captación / Clientes nuevos"] },
            { nom: "Regla de viabilidad", sub: "El umbral que se usa habitualmente.", cols: ["CLV / CAC > 3"] },
            { nom: "Plazo de recuperación del CAC", sub: "Determina la caja que consume crecer.", cols: ["Meses = CAC / margen mensual por cliente"] },
            { nom: "Vida media del cliente", sub: "Con tasa de abandono constante.", cols: ["Vida $= \\dfrac{1}{\\text{tasa de abandono}}$"] },
            { nom: "Potencial de un segmento", sub: "Antes de decidir si atenderlo.", cols: ["Potencial = Nº de clientes × CLV medio × cuota alcanzable"] },
          ],
          nota: "En la fórmula del CLV, **m** es el margen anual por cliente, **r** la tasa de retención anual y **d** la tasa de descuento. La expresión es una perpetuidad con abandono: la ficha 7.02 aplicada a una relación comercial.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: dos segmentos que parecen iguales",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa de servicios atiende a dos segmentos que generan el **mismo margen anual por cliente, 200 €**, y cuestan lo mismo captar, **150 €**. Difieren en una sola variable: la retención.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Concepto", "Segmento A", "Segmento B"],
          filas: [
            ["Margen anual por cliente", "200 €", "200 €"],
            ["Tasa de retención anual", "80 %", "60 %"],
            ["Vida media del cliente", "5,0 años", "2,5 años"],
            ["Tasa de descuento", "10 %", "10 %"],
            ["Valor del ciclo de vida", "533 €", "240 €"],
            ["Coste de adquisición", "150 €", "150 €"],
            { celdas: ["Ratio CLV / CAC", "3,6", "1,6"], clase: "total" },
          ],
          nota: "Con **idéntico margen anual e idéntico coste de captación**, un segmento vale más del doble que el otro. Una cuenta de resultados anual los presentaría como equivalentes: ambos aportan 200 € de margen por cliente. La diferencia solo aparece al mirar la relación completa, y es la razón de que la retención sea, en muchos negocios, una palanca más rentable que la captación.",
        },
        {
          tipo: "parrafos",
          items: [
            "**La implicación de gestión es concreta.** Con un ratio de 1,6, el segmento B apenas cubre el coste de captarlo tras descontar. Las opciones son tres: reducir su CAC con canales más baratos, subir su retención —y entonces su CLV se dispara, porque la relación es muy sensible— o dejar de invertir en captarlo y concentrar el presupuesto en A.",
            "**La sensibilidad a la retención** merece verse por separado, porque es el parámetro con más apalancamiento de todo el modelo:",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Retención anual", "Vida media", "CLV", "Ratio CLV/CAC"],
          filas: [
            ["50 %", "2,0 años", "167 €", "1,1"],
            ["60 %", "2,5 años", "240 €", "1,6"],
            ["70 %", "3,3 años", "350 €", "2,3"],
            ["80 %", "5,0 años", "533 €", "3,6"],
            { celdas: ["90 %", "10,0 años", "900 €", "6,0"], clase: "total" },
          ],
          nota: "Subir la retención del 60 % al 80 % **multiplica el CLV por 2,2** sin captar un solo cliente nuevo ni subir precios. Ese es el argumento cuantitativo para invertir en servicio, en producto y en experiencia de cliente, y es más sólido que cualquier apelación cualitativa a la fidelidad.",
        },
      ],
    },
    {
      titulo: "Caso práctico: segmentar por lo que importa, no por lo que se mide",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Una empresa de material de oficina segmenta su mercado por **tamaño de empresa cliente**: grandes, medianas y pequeñas. Es la variable que su sistema comercial registra desde siempre y sobre la que se organizan el equipo de ventas y el catálogo. El problema es que no explica el comportamiento de compra.",
            "Al analizar los datos aparece otra estructura. Hay clientes que compran por **precio**, comparan cada pedido y cambian de proveedor sin coste emocional alguno; los hay que compran por **conveniencia**, valoran plazo de entrega y facilidad de pedido y aceptan pagar más por ello; y los hay que compran por **relación**, mantienen un interlocutor y consolidan volumen con un solo proveedor a cambio de servicio. Esos tres grupos **atraviesan todos los tamaños**: hay grandes empresas que compran por precio y pequeñas que compran por relación.",
            "**Qué cambia al segmentar así.** Los clientes de precio deben atenderse con canal digital, catálogo corto y coste comercial mínimo; dedicarles visitas comerciales destruye margen. Los de conveniencia justifican inversión en logística y plazo, y pagan por ella. Los de relación justifican un comercial asignado, y son los que aportan mayor CLV porque su retención es alta. La empresa estaba dando el mismo trato a los tres, lo que significaba **sobreservir a los de precio y subservir a los de relación**.",
            "**La comprobación empírica** es la que valida la segmentación: si los grupos propuestos no muestran diferencias medibles en retención, en margen o en respuesta a las acciones comerciales, la segmentación es una descripción bonita sin consecuencias. La prueba consiste en calcular CLV y CAC por segmento y ver si difieren de forma significativa. Si no difieren, hay que buscar otra base.",
            "**Y el posicionamiento se sigue de la elección.** Si la empresa elige el segmento de relación, su promesa debe ser específica y creíble: un interlocutor único, plazos garantizados, gestión del stock del cliente. No puede ser simultáneamente la más barata, porque servir así cuesta dinero. **Elegir segmento es renunciar a otros**, y una empresa que dice servir bien a los tres suele no servir bien a ninguno, que es el «atrapado en el medio» de la ficha 9.04 visto desde el lado del cliente.",
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
            { t: "Segmentar por variables fáciles de medir", d: "Edad, tamaño o geografía se registran sin esfuerzo y a menudo no explican el comportamiento de compra. La segmentación útil se basa en el beneficio buscado o en el comportamiento observado, aunque cueste más obtenerla." },
            { t: "No validar la segmentación con datos", d: "Si los segmentos propuestos no muestran diferencias medibles en retención, margen o respuesta comercial, no son segmentos: son categorías descriptivas. La prueba es calcular CLV y CAC por grupo y comprobar que difieren." },
            { t: "Crear segmentos demasiado pequeños", d: "Atenderlos por separado exige producto, canal o comunicación diferenciados, y eso tiene coste. Un segmento solo compensa si su potencial supera el coste de la diferenciación que requiere." },
            { t: "Evaluar clientes por su margen anual", d: "Dos clientes con idéntico margen anual pueden valer el doble uno que otro según su retención. La cuenta de resultados anual los presenta como equivalentes; solo el valor del ciclo de vida revela la diferencia." },
            { t: "Invertir todo en captación y nada en retención", d: "Subir la retención del 60 % al 80 % multiplica el valor del cliente por 2,2 sin captar a nadie. En negocios con abandono alto, retener suele tener mucho mejor retorno que captar, y recibe una fracción del presupuesto." },
            { t: "Posicionarse reclamando varias cosas a la vez", d: "Calidad, precio, servicio e innovación simultáneamente no es un posicionamiento: es la ausencia de uno. Un posicionamiento eficaz dice una cosa, es creíble y no se replica con facilidad." },
            { t: "Confundir posicionamiento con comunicación", d: "El posicionamiento es la posición real que se ocupa frente a las alternativas, sostenida por lo que la empresa hace. La comunicación lo transmite, no lo crea. Anunciar un servicio excelente que no se presta acelera la pérdida del cliente." },
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
            "La segmentación del consumo tiene su equivalente estadístico en las clasificaciones y encuestas que alimentan las cuentas nacionales.",
          ],
          lista: [
            "El **gasto en consumo final de los hogares** se clasifica por finalidad según la **COICOP**, que agrupa el gasto en grandes funciones: alimentación, vivienda, transporte, ocio, sanidad. Es una segmentación por necesidad atendida, conceptualmente próxima a la segmentación por beneficio buscado.",
            "La **Encuesta de Presupuestos Familiares** proporciona la estructura de gasto por características del hogar —renta, tamaño, edad del sustentador, comunidad autónoma—, y es la fuente que permite estudiar cómo varía el consumo entre grupos de población.",
            "Esa misma estructura de gasto es la que **pondera el IPC**, de modo que la cesta de la compra que determina la inflación medida es una media ponderada de patrones de consumo muy distintos entre segmentos de población.",
            "De ahí surge el concepto de **inflación diferencial por grupos**: los hogares de renta baja destinan una proporción mayor a alimentación y energía, así que un episodio inflacionista concentrado en esas partidas les afecta más que lo que refleja el índice general.",
            "Y la **demografía empresarial** del DIRCE, junto con las estadísticas estructurales, permite estimar tamaños de segmento en mercados entre empresas, que es información difícil de obtener por otras vías.",
          ],
          cierre:
            "El paralelismo conceptual es claro: tanto el marketing como la estadística oficial parten de que un agregado esconde comportamientos heterogéneos, y ambos construyen clasificaciones para hacer visible esa heterogeneidad. La diferencia es que una elige a quién servir y la otra debe describirlos a todos.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Margen anual 300 €, retención 75 %, descuento 10 %. ¿CLV?", a: "300 × 0,75 / (1 + 0,10 − 0,75) = 225 / 0,35 = 643 €. Con un coste de adquisición de 200 €, el ratio sería de 3,2, dentro del umbral habitual de viabilidad." },
            { q: "¿Por qué dos clientes con el mismo margen anual pueden valer muy distinto?", a: "Porque su retención difiere. Con un 80 % de retención el cliente permanece cinco años de media y con un 60 %, dos años y medio. La cuenta de resultados anual los presenta como equivalentes." },
            { q: "¿Qué cuatro condiciones debe cumplir un segmento útil?", a: "Homogeneidad interna y diferencia externa en lo que afecta a la compra, medibilidad, accesibilidad por algún canal a coste razonable, y tamaño suficiente para compensar el coste de atenderlo de forma diferenciada." },
            { q: "¿Cómo se valida una segmentación?", a: "Comprobando que los grupos difieren de forma medible en retención, margen o respuesta a las acciones comerciales. Si no difieren, es una descripción sin consecuencias de gestión y hay que buscar otra base." },
            { q: "¿Por qué la inflación no afecta igual a todos los hogares?", a: "Porque el IPC pondera con la estructura media de gasto, y esa estructura varía mucho entre grupos. Los hogares de renta baja destinan más proporción a alimentación y energía, así que un episodio concentrado ahí les afecta por encima del índice general." },
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
            { ref: "Kotler y Keller, Dirección de marketing", nota: "el manual de referencia. Segmentación, selección y posicionamiento con el desarrollo completo." },
            { ref: "Ries y Trout, Posicionamiento", nota: "breve y con una tesis clara sobre por qué reclamar varias cosas a la vez equivale a no reclamar ninguna." },
            { ref: "Gupta y Lehmann, Managing Customers as Investments", nota: "el tratamiento riguroso del valor del ciclo de vida del cliente y su uso en decisiones de inversión comercial." },
            { ref: "INE, Encuesta de Presupuestos Familiares y metodología del IPC", nota: "estructura del gasto por tipo de hogar y su papel en la ponderación del índice de precios." },
          ],
        },
      ],
    },
  ],
};
