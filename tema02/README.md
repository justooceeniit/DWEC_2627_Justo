# Práctica Tema 2: navegadores, motores y primera pagina interactiva

Práctica realizada para la asignatura de Desarrollo Web en Entornos Cliente (DWEC)
--

## Estructura del proyecto
El proyecto esta organizado dentro de la carpeta `tema02/` de la siguiente forma:
- `index.html`: Contiene la parte teórica, la tabla comparativa de navegadores, el análisis, el ejemplo de compatibilidad y la reflexión[cite: 4].
- `interaccion.html`: Contiene la parte interactiva con los tres botones y los componentes de Bootstrap[cite: 4, 5].
- `js/app.js`: Archivo externo de JavaScript que maneja toda la lógica de los botones, alertas y trazas en la consola.
- `capturas/`: Carpeta con las evidencias visuales de la práctica.
- `README.md`: Explicacion de estructura , que hace

--

## Que hace cada cosa
Tomando como ejemplo el botón 1. Saludar de la Parte B, el funcionamiento se divide en tres capas:
1. HTML (`interaccion.html`) Define la estructura estática del botón mediante una etiqueta semántica `<button>` y le asigna el evento `onclick="mostrarSaludo()"`.
2. CSS / Bootstrap: da los estilos visuales (`btn btn-outline-primary btn-lg`), encargándose de los colores, los bordes redondeados, el espaciado y la adaptación responsiva de la interfaz.
3. JavaScript (`js/app.js`) Es la capa de comportamiento. Al hacer clic, la función ejecuta un `alert()` para mostrar la ventana emergente al usuario y un `console.log()` para dejar constancia técnica en la consola

--

## Análisis del `navigator.userAgent`
Al probar el botón de «¿Qué navegador soy?», el valor devuelto por `navigator.userAgent` incluye cadenas clásicas de compatibilidad histórica:
- `Mozilla/5.0`: Se mantiene al principio por motivos históricos de compatibilidad con antiguos navegadores de Netscape, aunque hoy en día casi todos los navegadores modernos lo incluyan por defecto.
- `AppleWebKit / Safari`: Aparece incluso en navegadores basados en Chromium (como Chrome o Edge) porque Blink heredó parte de su arquitectura base de WebKit en sus orígenes.
- `Chrome / Edge`: Es la firma real que identifica el motor y la versión exacta del navegador actual que está ejecutando el script.

---

## Fuentes consultadas
- Apuntes de la asignatura de DWEC .
- Can I use (para la consulta de soporte de propiedades CSS como subgrid): [https://caniuse.com/css-subgrid].
- Documentación oficial de Bootstrap 5.3: [https://getbootstrap.com/].
- Gemini (clases bootstrap/entendimiento de las mismas, )
---

##  Uso de Inteligencia Artificial
Para la realización de esta tarea he utilizado Gemini como asistente de apoyo técnico para estructurar el código base de Bootstrap, resolver alguna duda y revisar la redacción del README para que quede lo mejor posible. 