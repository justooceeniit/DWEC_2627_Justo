/*
  Tarea 7 · DWEC · Justo Cenit Ruiz
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  const baseConDescuento = base * (1 - descuento / 100);
  const total = baseConDescuento * (1 + iva / 100);
  console.log(`calcularPrecio: base=${base}, iva=${iva}%, desc=${descuento}% -> ${total}`);
  return total;
}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const inputBase = document.querySelector("#base");
  const selectIva = document.querySelector("#iva");
  const inputDescuento = document.querySelector("#descuento");
  const error = document.querySelector("#error1");

  const textoBase = inputBase.value.trim();
  const textoDescuento = inputDescuento.value.trim();

  const base = Number(textoBase);
  const iva = Number(selectIva.value);

  if (textoBase === "" || Number.isNaN(base) || base < 0){
    error.textContent = "Introduce un precio base valido y mayor o igual q 0";
    error.classList.remove("d-none");
    console.warn("mostrarPrecio: base no valida");
    return;
  }

  let final = 0;
  let descuentoAplicado = 0;

  if (textoDescuento === ""){
    final = calcularPrecio(base, iva);
    descuentoAplicado = 0;
  }else{
    const descuento = Number(textoDescuento);
    if (Number.isNaN(descuento) || descuento < 0 || descuento > 100){
      error.textContent = "el descuento tiene que ser un porcentaje entre 0 y 100";
      error.classList.remove("d-none");
      console.warn("mostrarPrecio: descuento fuera de rango");
      return;
    }
    final = calcularPrecio(base, iva, descuento);
    descuentoAplicado = descuento;
  }
  error.classList.add("d-none");

  const lineas = [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuentoAplicado} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(final)}`
  ];

  pintarLista("#salida1", lineas);
  console.log("mostrarPrecio: desglose bien pintado", lineas);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
  const mensaje = document.querySelector("#mensaje2");

  if (antigua === undefined) {
    mensaje.textContent = "No se ha encontrado ninguna película anterior a 1990.";
    pintarLista("#salida2", []);
    console.log("Ejercicio 2: find -> no encontrada (undefined)");
  } else {
    mensaje.textContent = "Primera película anterior a 1990 encontrada.";
    pintarLista("#salida2", [comoTexto(antigua)]);
    console.log("Ejercicio 2: find ->", antigua);
  }
}

// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  const nuevoArray = [];
  for (const elemento of lista) {
    nuevoArray.push(operacion(elemento));
  }
  return nuevoArray;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  const conMap = numeros.map((n) => n * 2);
  mostrar3("dobles", resultado, conMap);
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  const conMap = numeros.map((n) => n ** 2);
  mostrar3("cuadrados", resultado, conMap);
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  const conMap = numeros.map(Math.abs);
  mostrar3("absolutos", resultado, conMap);
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {
  let cuenta = 0;
  return function () {
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

// Dos alumnos de partida: uno de cada clase con dos notas cada uno
const alumno1 = new Alumno("Lucía Martín", "2.º DAW");
alumno1.anadirNota(8);
alumno1.anadirNota(8);
alumnos.push(alumno1);

const alumno2 = new AlumnoFCT("Marcos Ruiz", "2.º DAW", "TecnoSur");
alumno2.anadirNota(7.5);
alumno2.anadirNota(7);
alumnos.push(alumno2);

// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const inputNombre = document.querySelector("#nombre5");
  const selectCurso = document.querySelector("#curso5");
  const inputEmpresa = document.querySelector("#empresa5");
  const inputNotas = document.querySelector("#notas5");
  const error = document.querySelector("#error5");

  const nombre = inputNombre.value.trim();
  const curso = selectCurso.value;
  const empresa = inputEmpresa.value.trim();
  const textoNotas = inputNotas.value.trim();

  if (nombre === "") {
    error.textContent = "El nombre del alumno no puede estar vacío.";
    error.classList.remove("d-none");
    console.warn("crearAlumno: nombre vacío");
    return;
  }

  let notasValidas = [];
  if (textoNotas !== "") {
    const listaNotas = textoNotas.split(",").map((t) => Number(t.trim()));
    const algunaInvalida = listaNotas.some((n) => Number.isNaN(n) || n < 0 || n > 10);

    if (algunaInvalida) {
      error.textContent = "Las notas deben ser números válidos entre 0 y 10 separados por comas.";
      error.classList.remove("d-none");
      console.warn("crearAlumno: notas no válidas detectadas con some");
      return;
    }
    notasValidas = listaNotas;
  }

  error.classList.add("d-none");

  const nuevoAlumno = empresa === ""
    ? new Alumno(nombre, curso)
    : new AlumnoFCT(nombre, curso, empresa);

  notasValidas.forEach((nota) => nuevoAlumno.anadirNota(nota));

  alumnos.push(nuevoAlumno);
  console.log("crearAlumno: nuevo alumno registrado ->", nuevoAlumno);

  // Vaciar campos del formulario
  inputNombre.value = "";
  inputEmpresa.value = "";
  inputNotas.value = "";

  pintarAlumnos();
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const milisegundosPorDia = 1000 * 60 * 60 * 24;
  const diferenciaDias = Math.round((fecha - hoy) / milisegundosPorDia);

  return diferenciaDias;
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const dias = diasHasta(fecha);

  const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const nombreFecha = fecha.toLocaleDateString("es-ES", opciones);

  if (dias > 0) {
    salida.textContent = dias === 1
      ? `Falta 1 día: será ${nombreFecha}.`
      : `Faltan ${dias} días: será ${nombreFecha}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: es ${nombreFecha}.`;
  } else {
    const pasados = Math.abs(dias);
    salida.textContent = pasados === 1
      ? `Fue hace 1 día: fue ${nombreFecha}.`
      : `Fue hace ${pasados} días: fue ${nombreFecha}.`;
  }

  console.log(`Ejercicio 6: fecha calculada (${valor}) -> ${salida.textContent}`);
}

function iniciales(nombreCompleto) {
  return nombreCompleto
    .trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0].toUpperCase())
    .join("");
}

function crearUsuario(nombreCompleto) {
  const inis = iniciales(nombreCompleto).toLowerCase();
  const azar = Math.floor(Math.random() * 1000);
  const numeroTresCifras = String(azar).padStart(3, "0");
  return `${inis}${numeroTresCifras}`;
}

function mostrarIniciales() {
  const input = document.querySelector("#nombre6");
  const salida = document.querySelector("#salida6b");
  const texto = input.value.trim();

  if (texto === "") {
    salida.textContent = "Escribe un nombre completo.";
    console.warn("mostrarIniciales: nombre vacío");
    return;
  }

  const ini = iniciales(texto);
  const usr = crearUsuario(texto);

  salida.textContent = `Iniciales: ${ini} · usuario: ${usr}`;
  console.log(`Ejercicio 6: iniciales="${ini}", usuario="${usr}"`);
}