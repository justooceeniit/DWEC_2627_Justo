/*
  Tarea 3 · DWEC · Justo Cenit Ruiz
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);

  const nombre = "Justo"; //String
console.log("nombre =",nombre, "→", typeof nombre);

  const falso= false; //boolean
  console.log("falso =",falso ,"→", typeof falso );

  const nulo= null; //null
  console.log("nulo =" , nulo ,"→", typeof nulo);

  let variableLet; //undefined
  console.log("variableLet =", variableLet, "→", typeof variableLet);

  const numeroGrande= 10n; //bigint
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  //dar valor a let y volver a mostrar tipo
  variableLet= 50;
  console.log("variableLet (nueva)=", variableLet, "→", typeof variableLet);


}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  //string (123)
  const c1 =String(123); //espero "123"
  console.log('String(123) →',c1 , typeof c1);

  //number ("123")
  const c2= Number("123"); //espero 123
  console.log('Number("123")→', c2, typeof c2);

  //number ("12abc")
  const c3= Number("12abc"); //espero 12 ya que al no ser parseado abc va a dar nan
  console.log('Number("12abc") →',c3, typeof c3);

  //number ("")
  const c4= Number(""); //espero NaN
  console.log('Number("") → ', c4, typeof c4);

  //number (true)
  const c5= Number(true); // espero 1 ya que si es false es 0, si es true es 1
  console.log('Number(true) →',c5, typeof c5);

  //boolean (0)
  const c6 =Boolean(0); //espero false
  console.log('Boolean(0) →', c6, typeof c6);

  //boolean("texto")
  const c7 = Boolean("texto"); //espero true
  console.log('Boolean("texto") →',c7, typeof c7);
  
  //boolean ("")
  const c8= Boolean(""); //espero falso
  console.log('Boolean("") →',c8, typeof c8);
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // 1) expresion mezclando tipos
  console.log('"5" - 2 →', "5" - 2);   // espero 3 (la resta lo convierte a num)
  console.log('"5" + 2 →', "5" + 2);   // espero "52" (la suma concatena strings)
  console.log('"5" * "2" →', "5" * "2");   // espero 10 (la multiplicación lo convierte a num)
  console.log('"10" / 2 →', "10" / 2);   // espero 5 (la división lo convierte a num)
  console.log('"hola" - 2 →', "hola" - 2);   // espero NaN (la resta no puede convertir "hola" a número)
  console.log('true + 3 →', true + 3);   // espero 4 (la suma convierte true a 1)


  //comparaciones con == y ==
  //pareja ejemplo 5 y "5"
  console.log('5 == "5" →', 5 == "5");     // espero true(coersion de tipos)
  console.log('5 === "5" →', 5 === "5");   // espero false(tipo distinto)
  //pareja 0 y false
  console.log('0 == false →', 0 == false); // espero true(false convierte a 0)
  console.log('0 === false →', 0 === false); // espero false(tipo distinto)
  //pareja null y undefined
  console.log('null == undefined →', null == undefined); // espero true(igualdad especial)
  console.log('null === undefined →', null === undefined); // espero false(tipos distintos)
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "Justo Cenit Ruiz";
  const ciclo = "Desarrollo de Aplicaciones Web(DAW)";
  const curso = "2º";
  const aficion = "Impresion 3D";

  // Un dato que cambia, con let
  let horasEstudiadas= 10;
  horasEstudiadas += 5; //cambio el dato sumando 5

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}, estudio ${ciclo} y estoy en ${curso}. Me gusta la ${aficion} y he estudiado ${horasEstudiadas} horas esta semana.`;
  //Muestra con alert() y en consola
  alert(ficha);
  console.log("Ficha con backticks:", ficha);
  //misma ficha concatenando con +  
  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + " y estoy en " + curso + ". Me gusta la " + aficion + " y he estudiado " + horasEstudiadas + " horas esta semana.";
  console.log("Ficha con concatenación:", fichaConMas);

  //comparamos las 2 con === 
  const sonIguales = ficha === fichaConMas;
  console.log("¿Son iguales las dos fichas?", sonIguales);
}
