# Grado autodidacta — Economía, Finanzas, Contabilidad y Empresa

Aplicación local con el plan de 100 temas y las fichas de estudio. El progreso se
guarda en el navegador; no hay servidor ni cuenta de usuario.

## Puesta en marcha

Necesitas Node.js 18 o superior. Comprueba si ya lo tienes:

    node -v

Si no aparece una versión, instálalo desde nodejs.org o, en Mac con Homebrew:

    brew install node

Después, desde la carpeta del proyecto:

    npm install      # solo la primera vez
    npm run dev      # arranca el servidor de desarrollo

Abre la dirección que aparece en la terminal, normalmente http://localhost:5173

Para dejar de usarlo: Ctrl+C en la terminal.

## Estructura

    src/
      App.jsx                 enrutado (#/ plan, #/ficha/5.02 una ficha)
      estilos.css             sistema visual único
      almacen.js              guardado del progreso en localStorage
      datos/
        temario.js            los 100 temas: bloques, niveles, ideas y fuentes
        fichas/
          index.js            registro de fichas escritas
          f5-01.js            ficha en formato de datos
          f5-02.js            ficha en formato de datos
          PLANTILLA.js        copia esto para empezar una ficha nueva
      componentes/
        Plan.jsx              matriz 10x10, listado y panel lateral
        Ficha.jsx             armazón de una ficha
        secciones.jsx         los tipos de bloque y el simulador de diario

## Añadir una ficha

1. Copia `src/datos/fichas/PLANTILLA.js` con el nombre del tema, por ejemplo `f7-03.js`.
2. Rellena los campos. El código debe coincidir con el del temario (`7.03`).
3. Impórtala en `src/datos/fichas/index.js` y añádela a la lista.

La ficha aparecerá automáticamente en el plan con la etiqueta «Ficha» y será
navegable. No hay que tocar ningún componente.

### Tipos de bloque disponibles

| tipo        | para qué sirve                                            |
|-------------|-----------------------------------------------------------|
| `parrafos`  | texto corrido; admite `**negrita**` y `*cursiva*`          |
| `rejilla`   | tabla de definiciones o formulario (`modo: "dos"`)         |
| `pasos`     | secuencia numerada                                        |
| `tabla`     | tabla numérica; una fila puede llevar `clase: "total"`     |
| `diario`    | simulador interactivo de asientos contables               |
| `acordeon`  | errores típicos desplegables                              |
| `destacado` | recuadro (puente con contabilidad nacional, avisos)       |
| `preguntas` | autoevaluación con respuesta oculta                        |
| `fuentes`   | bibliografía comentada                                     |

## Progreso

Se guarda en `localStorage` bajo la clave `grado-autodidacta:v1`. El botón
«Exportar progreso» descarga un JSON, útil para llevarlo a otro ordenador o para
hacer copia antes de vaciar el navegador.

## Publicarlo como página estática

    npm run build

Genera `dist/`. Las rutas son relativas, así que puedes abrir `dist/index.html`
directamente o subir la carpeta a cualquier alojamiento estático.
