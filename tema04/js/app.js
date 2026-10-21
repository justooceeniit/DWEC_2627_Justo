/*
  Tarea 4 · DWEC · Justo Cenit Ruiz
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos numeros antes de operar", "danger");
    console.warn("Restar: falta algun numero");
  } else{
    const resultado = n1- n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if(Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos numeros antes de operar" , "danger");
    console.warn("Multiplicar: falta algun numero");
  }else{
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos numeros antes de operar", "danger");
    console.warn("Dividir: falta algun numero");
  }else if (n2 ===0){
    mostrar("No se puede dividir entre 0" , "danger");
    console.warn("Dividir: division por 0 invalida");
  }else{
    const resultado= n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos numeros antes de operar" , "danger");
    console.warn("Potencia: falta algun numero");
  } else{
    const resultado= n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos numeros antes de operar" , "danger");
    console.warn("Modulo: falta algun numero");
  }else if (n2 === 0){
    mostrar("No se puede calcular el modulo con divisor 0" , "danger");
    console.warn("modulo: resto con cero invalido");
  }else{
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`modulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos numeros antes de comparar" , "danger");
    console.warn("Cual es mayor?: falta algun numero");
  }else if(n1> n2){
    mostrar(`El numero ${n1} es mayor que ${n2}`);
    console.log(`Cual es mayor?: ${n1} > ${n2}`);
  }else if (n2 > n1){
    mostrar(`El numero ${n2} es mayor que ${n1}`);
    console.log(`Cual es mayor? : ${n1} === ${n2}`);
  }else{
    mostrar(`Ambos numeros son iguales (${n1} === ${n2})`);
    console.log(`cual es mayor?: ${n1} === ${n2}`)
  }
}

function parOImpar() {
  const n1= leerNumero("numero1");

  if (Number.isNaN(n1)){
    mostrar("Escribe el numero 1 para comprobar si es par o impar" , "danger");
    console.warn(`par o impar?: falta el numero 1`);
  }else if (!Number.isInteger(n1)){
    mostrar(`El numero ${n1} tiene decimales: no es par ni impar` , `warning`);
    console.log(`Par o impar?: ${n1} tiene decimales`);
  }else{
    //seleccion con operador ternario
    const tipo = (n1 % 2 === 0) ? "par" : "impar";
    mostrar(`El numero ${n1} es ${tipo}`);
    console.log(`Par o impar?: ${n1} es ${tipo}`);
  }

}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar(`introduce un numero entero menor o igual a ${MAXIMO_REPETICIONES}`, "danger");
    console.warn("bucleFor: numero no valido");
    return;
  }

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  const sufijo = (contador === 1) ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${sufijo}`);
  console.log(`bucleFor completado: ${contador} vueltas`);



}

function bucleWhile() {
  const veces= leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES ){
    mostrar(`introduce un numero entero menor o igual a ${MAXIMO_REPETICIONES}`, "danger");
    console.warn("bucleWhile: numero no valido");
    return;
  }

  let contador = 0;
  let i = 1;
  while (i<= veces){
    anadirLinea(`while repeticion ${i} de ${veces}`);
    contador++;
    i++;
  }
  const sufijo = (contador === 1) ? "repeticion" : "repeticiones";
  anadirLinea(`Total: ${contador} ${sufijo}`);
  console.log(`bucleWhile completado: ${contador} vueltas`);
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar(`Introduce un numero entero menor o igual a ${MAXIMO_REPETICIONES}` , "danger");
    console.warn("bucleDoWhile: numero no valido");
    return;
  }
  let contador = 0;
  let i = 1;
  //do while ejecuta el bloque minimo una vez antes de comprobar condiciones
  do{
    anadirLinea(`do..while .  repeticion ${i} de ${veces}`);
    contador++;
    i++;
  }while (i <= veces);

  const sufijo = (contador === 1) ? "repeticion" : "repeticiones";
  anadirLinea(`Total: ${contador} ${sufijo}`);
  console.log(`bucleDoWhile completado : ${contador} vueltas`);
  
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar(`Introduce un número entero menor o igual a ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("badgesFor: número no valido");
    return;
  }


  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    const color = (i % 2 === 0) ? "primary" : "dark";
    anadirBadge(i, color);
    contador++;
  }

  const sufijo = (contador === 1) ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${sufijo}`);
  console.log(`badgesFor completado: ${contador} badges`);
}



function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar(`Introduce un numero entero menor o igual a ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("badgesWhile: número no válido");
    return;
  }

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    const color = (i % 2 === 0) ? "primary" : "success";
    anadirBadge(i, color);
    contador++;
    i++;
  }

  const sufijo = (contador === 1) ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${sufijo}`);
  console.log(`badgesWhile completado: ${contador} badges`);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar(`Introduce un número entero menor o igual a ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("badgesDoWhile: número no válido");
    return;
  }

  let contador = 0;
  let i = 1;
  do {
    const color = (i % 2 === 0) ? "dark" : "primary";
    anadirBadge(i, color);
    contador++;
    i++;
  } while (i <= veces);

  const sufijo = (contador === 1) ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${sufijo}`);
  console.log(`badgesDoWhile completado: ${contador} badges`);
}
