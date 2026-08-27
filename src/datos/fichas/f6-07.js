/* Ficha 6.07 — Analisis de rentabilidad y descomposicion DuPont.
   Continua el caso Distribuciones Arlanza de 6.06. */

export default {
  codigo: "6.07",
  titulo: "Análisis de rentabilidad y descomposición DuPont",
  nivel: 2,
  bloque: "Contabilidad de gestión y análisis",
  tiempo: "4 h",
  nucleo:
    "El mismo ROE puede proceder de vender caro, de vender mucho o de endeudarse. DuPont separa las tres fuentes y convierte un número opaco en un diagnóstico, porque cada una de ellas se gestiona de forma distinta y comporta un riesgo distinto.",
  requiere: "6.06 Análisis patrimonial · 5.09 Impuesto sobre beneficios",
  abre: "7.06 Estructura de capital · 8.04 Análisis fundamental",
  secciones: [
    {
      titulo: "Desarrollo",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Hay dos rentabilidades y confundirlas es el error de partida más común. La **rentabilidad económica** o ROA mide lo que rinde el activo con independencia de cómo esté financiado: su numerador es el resultado **antes de intereses e impuestos**, precisamente para no contaminar la medida con la estructura financiera. La **rentabilidad financiera** o ROE mide lo que rinde el dinero de los socios: su numerador es el resultado neto y su denominador, el patrimonio neto.",
            "La relación entre ambas es la clave de todo el análisis. Si el activo rinde más de lo que cuesta la deuda, endeudarse **eleva** la rentabilidad del accionista; si rinde menos, la hunde. Ese es el **efecto apalancamiento financiero**, y actúa como un multiplicador simétrico: amplifica el resultado en las dos direcciones. Una empresa muy endeudada con buen ROA parece extraordinaria; la misma empresa con un ROA que cae por debajo del coste de la deuda se desmorona con una velocidad desproporcionada.",
            "La **descomposición DuPont** ordena esa lógica en tres factores. El **margen** dice cuánto queda de cada euro vendido; la **rotación**, cuántos euros de venta genera cada euro de activo; el **multiplicador de apalancamiento**, cuántos euros de activo sostiene cada euro de fondos propios. Su producto es el ROE, exactamente, y la identidad se comprueba en un segundo porque los denominadores y numeradores se cancelan.",
            "Lo que hace útil la descomposición no es la identidad sino que **cada factor corresponde a una decisión empresarial distinta**. El margen lo determinan el poder de fijación de precios y la estructura de costes; la rotación, la eficiencia en el uso de los activos y el modelo de negocio; el multiplicador, la política financiera. Dos empresas con el mismo ROE del 12 % pueden ser una joyería —margen alto, rotación baja— y un supermercado —margen bajísimo, rotación altísima—, y no tienen ningún problema en común.",
            "Una cautela sobre el denominador. El ROE tiene una debilidad estructural: **mejora al reducir el patrimonio neto**. Una empresa que recompra acciones o reparte un dividendo extraordinario eleva su ROE sin haber mejorado nada de su negocio. Y una empresa con pérdidas acumuladas que casi han consumido el neto puede exhibir un ROE espectacular sobre una base residual. Por eso el ROE nunca se lee solo: se lee junto al ROA, que es inmune a esa manipulación.",
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
            { nom: "Rentabilidad económica (ROA)", sub: "Antes de intereses: independiente de la financiación.", cols: ["$\\mathrm{ROA} = \\dfrac{\\mathrm{BAII}}{\\text{Activo total}}$"] },
            { nom: "Rentabilidad financiera (ROE)", sub: "Después de intereses e impuestos.", cols: ["$\\mathrm{ROE} = \\dfrac{\\text{Resultado neto}}{\\text{Patrimonio neto}}$"] },
            { nom: "Descomposición del ROA", sub: "Dos factores: cuánto se gana y cuánto se mueve.", cols: ["$\\mathrm{ROA} = \\dfrac{\\mathrm{BAII}}{\\text{Ventas}} \\times \\dfrac{\\text{Ventas}}{\\text{Activo}}$"] },
            { nom: "DuPont de tres factores", sub: "La identidad central.", cols: ["ROE = Margen neto × Rotación × Multiplicador"] },
            { nom: "Multiplicador de apalancamiento", sub: "Cuánto activo sostiene cada euro propio.", cols: ["$M = \\dfrac{\\text{Activo total}}{\\text{Patrimonio neto}}$"] },
            { nom: "Efecto apalancamiento", sub: "La expresión que explica el porqué.", cols: ["$\\mathrm{ROE} = [\\mathrm{ROA}' + (\\mathrm{ROA}' - i)\\,D/\\mathrm{PN}](1-t)$"] },
          ],
          nota: "En la última expresión, **ROA'** se calcula sobre el capital empleado —patrimonio neto más deuda con coste— e **i** es el coste medio de esa deuda, no de todo el pasivo: los proveedores no devengan intereses explícitos y meterlos en el cálculo distorsiona el resultado.",
        },
      ],
    },
    {
      titulo: "Ejemplo numérico: Arlanza, dos años",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Retomamos la empresa de la ficha 6.06. En el año N: ventas 1.200.000 €, BAII 76.000 €, resultado neto 48.000 €, activo 900.000 €, patrimonio neto 408.000 €, deuda con coste 272.000 €, gastos financieros 12.000 €. En N−1: ventas 1.000.000 €, resultado neto 60.000 €, activo 820.000 €, patrimonio neto 390.000 €.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Indicador", "Año N", "Año N−1", "Variación"],
          filas: [
            ["Margen neto (Resultado / Ventas)", "4,00 %", "6,00 %", "−2,00 p.p."],
            ["Rotación (Ventas / Activo)", "1,33", "1,22", "+0,11"],
            ["Multiplicador (Activo / PN)", "2,21", "2,10", "+0,11"],
            { celdas: ["ROE = producto de los tres", "11,76 %", "15,38 %", "−3,62 p.p."], clase: "total" },
            ["ROA (BAII / Activo)", "8,44 %", "11,22 %", "−2,78 p.p."],
          ],
          nota: "Diagnóstico inmediato: **toda la caída del ROE viene del margen**. La rotación ha mejorado —la empresa exprime algo mejor su activo— y el apalancamiento ha subido ligeramente, y ambas cosas han amortiguado la caída en lugar de causarla. Si solo se mirara el ROE, se sabría que empeora; con DuPont se sabe dónde mirar: precios, coste de ventas o estructura de gastos.",
        },
        {
          tipo: "parrafos",
          items: [
            "Comprobemos la identidad del año N: 4,00 % × 1,33 × 2,21 = **11,76 %**, que es 48.000 / 408.000. Los factores no son estimaciones: la descomposición es exacta por construcción, porque ventas y activo aparecen una vez en el numerador y otra en el denominador.",
          ],
        },
        {
          tipo: "tabla",
          cabecera: ["Efecto apalancamiento (año N)", "Cálculo", "Resultado"],
          filas: [
            ["Capital empleado", "408.000 + 272.000", "680.000 €"],
            ["ROA sobre capital empleado", "76.000 / 680.000", "11,18 %"],
            ["Coste medio de la deuda con coste", "12.000 / 272.000", "4,41 %"],
            ["Diferencial", "11,18 % − 4,41 %", "6,77 %"],
            ["Ratio de endeudamiento D/PN", "272.000 / 408.000", "0,667"],
            ["Rentabilidad antes de impuestos", "11,18 % + 6,77 % × 0,667", "15,69 %"],
            { celdas: ["ROE después de impuestos", "15,69 % × (1 − 0,25)", "11,77 %"], clase: "total" },
          ],
          nota: "Coincide con el 11,76 % obtenido por DuPont, salvo redondeo. La lectura es que el apalancamiento **aporta 4,5 puntos** de rentabilidad antes de impuestos. Pero si el ROA cayera del 11,18 % al 4 %, el diferencial se volvería negativo y el mismo endeudamiento restaría en lugar de sumar. Ese es el riesgo que el ROE por sí solo nunca muestra.",
        },
      ],
    },
    {
      titulo: "Caso práctico: tres modelos de negocio, un mismo ROE",
      contenido: [
        {
          tipo: "parrafos",
          items: [
            "Tres empresas presentan un ROE del 12 %. La primera es una **joyería**: margen neto del 15 %, rotación de 0,5 y multiplicador de 1,6. La segunda es un **supermercado**: margen del 1,5 %, rotación de 3,2 y multiplicador de 2,5. La tercera es una **inmobiliaria patrimonialista**: margen del 30 %, rotación de 0,1 y multiplicador de 4,0.",
            "Ninguna tiene nada que aprender de las otras. La joyería no puede aumentar su rotación sin dejar de ser una joyería; el supermercado no puede subir el margen sin perder el volumen que sostiene su modelo; la inmobiliaria vive de un apalancamiento que sería temerario en los otros dos negocios. **Comparar ROE entre sectores no dice nada; comparar sus componentes sí.**",
            "El ejercicio útil es preguntarse, para cada empresa, **qué palanca está tocando y cuál tiene margen**. Un supermercado que mejora su ROE subiendo el multiplicador está aumentando su riesgo, no su eficiencia. Una joyería que lo mejora subiendo la rotación ha hecho algo real con su gestión de inventario. La cifra final es idéntica y el juicio, opuesto.",
            "Hay además una tercera pregunta que DuPont no responde y conviene tener presente: **si el ROE supera al coste de los fondos propios**. Un 12 % es excelente si los accionistas exigen un 8 % y destructivo si exigen un 15 %. Esa comparación es el objeto de la ficha 7.05, y sin ella la rentabilidad se juzga en el vacío.",
            "**Un último aviso sobre el denominador.** Una empresa que recompra el 30 % de sus acciones ve dispararse su multiplicador y su ROE sin haber vendido un euro más. Antes de celebrar una mejora de ROE, conviene mirar si el patrimonio neto ha crecido o ha menguado.",
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
            { t: "Calcular el ROA con el resultado neto", d: "El numerador debe ser el BAII. Usar el resultado después de intereses contamina la rentabilidad del activo con la estructura financiera y hace imposible aislar el efecto apalancamiento, que es justo el objetivo de distinguir ROA y ROE." },
            { t: "Celebrar un ROE creciente sin mirar sus componentes", d: "Puede venir de un margen mejor, de más rotación, de más deuda o de un patrimonio neto que se ha reducido por recompras o pérdidas acumuladas. Solo las dos primeras son mejoras del negocio; las otras dos son cambios de riesgo o de base de cálculo." },
            { t: "Comparar ROE entre sectores distintos", d: "Los tres factores tienen rangos característicos por modelo de negocio. Un margen del 2 % es catastrófico en software y normal en distribución alimentaria. La comparación válida es contra el mismo sector y contra la propia serie histórica." },
            { t: "Incluir los proveedores en el coste de la deuda", d: "El crédito comercial no devenga interés explícito, así que dividir los gastos financieros entre todo el pasivo da un coste artificialmente bajo y exagera el diferencial de apalancamiento. El denominador correcto es la deuda con coste financiero." },
            { t: "Olvidar la simetría del apalancamiento", d: "El multiplicador amplifica en ambas direcciones. Una estructura que produce un ROE del 20 % con un ROA del 10 % produce un ROE muy negativo cuando el ROA cae al 2 %. Es la misma propiedad, no dos comportamientos distintos." },
            { t: "Usar saldos de cierre en lugar de medios", d: "Si el patrimonio neto o el activo han variado mucho durante el año —por una ampliación de capital, por ejemplo—, el ratio calculado sobre el saldo final no refleja la base que realmente estuvo trabajando. Los saldos medios corrigen buena parte del sesgo." },
            { t: "Confundir rentabilidad con creación de valor", d: "Un ROE positivo no significa que la empresa cree valor: solo lo hace si supera al coste de los fondos propios. Es la diferencia entre ganar dinero y ganar más de lo que exige quien lo puso." },
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
            "Los conceptos de rentabilidad tienen análogos sectoriales en el SEC 2010, con denominadores distintos pero la misma lógica.",
          ],
          lista: [
            "El **excedente bruto de explotación (B.2)** es el equivalente agregado del BAII: un saldo antes de intereses e impuestos, disponible para remunerar al capital.",
            "La **tasa de margen** de las sociedades no financieras, definida como excedente sobre valor añadido bruto, es el análogo directo del margen de la descomposición DuPont.",
            "La **tasa de inversión** —formación bruta de capital sobre valor añadido— y la relación entre producción y stock de capital cumplen el papel de la rotación.",
            "El **ratio de endeudamiento** de las sociedades no financieras, sobre PIB o sobre excedente, es el multiplicador visto a escala macroeconómica, y su evolución explica buena parte de la intensidad de las recesiones.",
            "La **renta de la propiedad pagada (D.4)** es el equivalente de los gastos financieros, y la comparación entre el excedente y esa renta reproduce el diferencial del efecto apalancamiento a nivel de sector.",
          ],
          cierre:
            "El paralelismo tiene un límite útil de recordar: en cuentas nacionales el denominador natural es el valor añadido o el PIB, no el activo, porque el stock de capital de un sector se estima y el activo de una empresa se lee en su balance. Los niveles no son comparables; las tendencias sí.",
        },
      ],
    },
    {
      titulo: "Compruébate",
      contenido: [
        {
          tipo: "preguntas",
          items: [
            { q: "Margen 5 %, rotación 1,5, multiplicador 2,0. ¿ROE?", a: "15 %. El producto de los tres factores es exacto por construcción, no una aproximación: ventas y activo se cancelan entre numeradores y denominadores." },
            { q: "El ROE sube del 10 % al 14 % y el ROA baja del 9 % al 8 %. ¿Qué ha pasado?", a: "La empresa se ha endeudado más. El activo rinde menos pero el apalancamiento amplifica lo que queda para el accionista. Es una mejora de rentabilidad acompañada de un aumento de riesgo, no una mejora del negocio." },
            { q: "El ROA sobre capital empleado es del 6 % y la deuda cuesta el 8 %. ¿Conviene endeudarse más?", a: "No. El diferencial es negativo: cada euro adicional de deuda resta rentabilidad al accionista. El apalancamiento solo suma cuando el activo rinde por encima del coste de la financiación." },
            { q: "Una empresa recompra el 25 % de sus acciones. ¿Qué le pasa al ROE?", a: "Sube, porque el denominador se reduce. Pero no ha mejorado nada del negocio: el ROA es el mismo. Es el caso típico en que el ROE informa mal si se lee aislado." },
            { q: "¿Cuál es el análogo del margen DuPont en las cuentas nacionales?", a: "La tasa de margen de las sociedades no financieras: excedente bruto de explotación sobre valor añadido bruto. Mide la misma idea —qué proporción de lo generado queda para el capital— a escala sectorial." },
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
            { ref: "Amat, Análisis de estados financieros", nota: "la descomposición DuPont con casos españoles y valores de referencia sectoriales." },
            { ref: "Berk y DeMarzo, Finanzas corporativas", nota: "el efecto apalancamiento desarrollado con rigor, y su conexión con la estructura de capital del bloque 7." },
            { ref: "Penman, Financial Statement Analysis and Security Valuation", nota: "la descomposición avanzada, separando actividad operativa de financiera. Exigente pero es la referencia." },
            { ref: "Central de Balances del Banco de España", nota: "ROA, ROE y sus componentes por sector y tamaño de empresa. Los datos con los que comparar." },
          ],
        },
      ],
    },
  ],
};
