/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  //2. segundo parrafo con querySelector y clase .segundo
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  //3. tercer parrafo con querySelectorAll y su posición en la lista
  const parrafos = document.querySelectorAll("#contenido p");
  parrafos[2].classList.add("text-danger");

  console.log("Ejercicio 1: Cambios aplicados a los 3 parrafos con los 3 selectores distintos");

}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenedor = document.querySelector("#contenido");
  const numeroNuevo = contenedor.children.length + 1;

  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = `Parrafo nuevo ${numeroNuevo}`;

  contenedor.append(nuevoParrafo);

  //si el aviso de q no quedaban parrafos es visible se oculta
  const aviso = document.querySelector("#aviso2");
  aviso.classList.add("d-none");

  console.log(`Ejercicio 2: Añadido "Parrafo nuevo ${numeroNuevo}" al contenedor`);
}

function eliminarUltimo() {
  const contenedor = document.querySelector("#contenido");
  const ultimoParrafo = contenedor.lastElementChild;
  const aviso = document.querySelector("#aviso2");

  if (ultimoParrafo === null){
    aviso.classList.remove("d-none");
    console.warn("Ejercicio 2: No quedan parrafos por eliminar");
  }else{
    ultimoParrafo.remove();
    console.log("Ejercicio 2: Ultimo parrafo eliminado");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function (){
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log(`Ejercicio 3: Resaltado activado en ${parrafos.length} parrafos`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const input = document.querySelector("#nuevoTexto");
  const texto = input.value.trim();
  const error = document.querySelector("#error4");
  const primerParrafo = document.querySelector("#contenido p");

  if (texto === ""){
    error.classList.remove("d-none");
    console.warn("Ejercicio 4 (textContent): El campo esta vacio");
  }else{
    error.classList.add("d-none");
    if (primerParrafo !== null){
      primerParrafo.textContent = texto;
    }
    console.log(`Ejercicio 4: Primer parrafo actualizado con textContent -> "${texto}"`);
  }
}

function cambiarConHtml() {
  const input = document.querySelector("#nuevoTexto");
  const texto = input.value.trim();
  const error = document.querySelector("#error4");
  const primerParrafo = document.querySelector("#contenido p");

  if (texto === ""){
    error.classList.remove("d-none");
    console.warn("Ejercicio 4 (innerHTML): El campo esta vacio");
  }else{
    error.classList.add("d-none");
    if (primerParrafo !== null){
      primerParrafo.innerHTML = texto;
    }
    console.log(`Ejercicio 4: Primer parrafo actualizado con innerHTML -> "${texto}"`);
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const input = document.querySelector("#tareaInput");
  const texto = input.value.trim();
  const error = document.querySelector("#error5");
  const lista = document.querySelector("listaTareas");
  const total = document.querySelector("#totalTareas");

  if (texto === ""){
    error.textContent = "Escribe una tarea antes de añadirla";
    error.classList.remove("d-none");
    console.warn("Ejercicio 5: intento de añadir tarea vacia");
    return;
    }

    //ocultar mensaje de error previo si lo hay
    error.classList.add("d-none");

    //crear elementos del li
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "me-2");

    const span = document.createElement("span");
    span.textContent = texto;

    li.append(checkbox, span);
    lista.append(li);

    //vaciar la casilla y actualiza contador
    input.value = "";
    total.textContent = lista.children.length;

    console.log(`Ejercicio 5: tarea añadida -> "${texto}". Total tareas: ${lista.children.length}`);
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");
  const lista = document.querySelector("#listaTareas");
  const total = document.querySelector("#totalTareas");

  if (marcadas.length === 0){
    error.textContent = "No hay tareas completadas para borrar";
    error.classList.remove("d-none");
    console.warn("Ejercicio 5: No hay tareas por borrar");
  }else{
    error.classList.add("d-none");
    for (const casilla of marcadas){
      casilla.parentElement.remove();
    }
    total.textContent = lista.children.length;
    console.log(`Ejercicio 5: se han borrado ${marcadas.length} tareas completadas. Quedan ${lista.children.length}`);
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
