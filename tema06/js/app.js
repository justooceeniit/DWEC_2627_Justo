/*
  Tarea 6 · DWEC · Justo Cenit Ruiz
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre : "Justo",
  apellidos : "Cenit Ruiz",
  edad: 20,
  curso : "2º DAW",
  presentarse: function(){
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso;

  }

};

function verFicha() {

  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  const claves = ["nombre", "apellidos", "edad", "curso"];

  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    ul.append(li);
  });

  const p = document.createElement("p");
  p.textContent = estudiante.presentarse();

  salida.append(ul, p);

  console.log(estudiante);
}

function cumplirAnios() {
  estudiante.edad += 1;
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
  //Fíjate en lo que sale ahora en el curso y explícalo en el README.
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0){
    avisar2("La lista de colores ya esta vacia");
    return;
  }
  const colorSacado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none"); //oculta aviso si lo hay
  mostrarColores();
  console.log("Ejercicio 2 (Quitar ultimo). Ha salido el color " + colorSacado);
}

function quitarPrimero() {
  if (colores.length === 0){
    avisar2("La lista de colores ya esta vacia");
    return;
  }
  const colorSacado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2 (quitar primero): ha salido el color " + colorSacado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Mostrando " + productos.length + " productos en total";
  console.log("Ejercicio 3:Mostrar todos los productos");
}

function ordenarPorPrecio() {
  const copiaProductos = [...productos];

  copiaProductos.sort(function(a,b){
    return a.precio - b.precio;
  });

  pintarProductos(copiaProductos);
  const mensaje= document.querySelector("#mensaje3");
  mensaje.textContent = "Productos ordenados de mas barato a mas caro";
  console.log("Ejercicio 3: Productos ordenados por precio (copia)");
}

function filtrarCaros() {
  const productosCaros = productos.filter(function(producto){
    return producto.precio > 50;
  });

  pintarProductos(productosCaros);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Hay " + productosCaros.length + " productos de más de 50€";
  console.log("Ejercicio 3: Productos filtrados (>50€)");
}


function buscarProducto() {
  const inputBuscar = document.querySelector("#buscarProducto");
  const textoBuscado = inputBuscar.value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (textoBuscado === ""){
    mensaje.textContent = "Escribe algo para buscar";
    return;
  }

  const productoEncontrado = productos.find(function(producto){
    return producto.nombre.toLowerCase().includes(textoBuscado);
  });

  if (productoEncontrado === undefined){
    mensaje.textContent = "No se han encontrado productos con " + textoBuscado;
    pintarProductos([]);
    console.log("Ejercicio 3: Busqueda sin resultado");
  }else{
    mensaje.textContent = "Mostrando resultado para " + textoBuscado;
    pintarProductos([productoEncontrado]);
    console.log("Ejercicio 3: Producto encontrado :", productoEncontrado.nombre);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Justo Cenit Ruiz",
  notas: [],
  anadirNota: function(nota){
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10){
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function(){
    if (this.notas.length === 0){
      return 0;
    }
    const suma = this.notas.reduce(function(acumulador, notaActual){
      return acumulador + notaActual;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedorNotas = document.querySelector("#notas");
  contenedorNotas.textContent = "";

  alumno.notas.forEach(function(nota){
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1"); //me-1 para dar margen entre las notas
    
    if (nota >= 5){
      badge.classList.add("text-bg-success");
    }else{
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedorNotas.append(badge);
  });

  const pMedia = document.querySelector("#media");
  if (alumno.notas.length === 0){
    pMedia.textContent = "Todavia no hay notas";
  }else{
    pMedia.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }

  console.log("Ejercicio 4: Notas pintadas ->", comoTexto(alumno.notas), "Media" , alumno.media());
}

function anadirNota() {
  const inputNota = document.querySelector("#nota");
  const valorInput = inputNota.value.trim();
  const parrafoError = document.querySelector("#error4");

  if (valorInput === ""){
    parrafoError.textContent = "La casilla esta vacia. Escribe un numero";
    parrafoError.classList.remove("d-none");
    return;
  }

  const notaConvertida = Number(valorInput);

  if (alumno.anadirNota(notaConvertida) === false){
    parrafoError.textContent = "Nota no valida. debe ser un numero entre 0 y 10";
    parrafoError.classList.remove("d-none");
  }else{
    parrafoError.classList.add("d-none");
    inputNota.value = "";
    mostrarNotas();
  }
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  console.log("Ejercicio 4: notas borradas");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
