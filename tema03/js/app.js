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
  const c4= Number(""); //espero 0
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

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]

  // TODO: cinco expresiones más que mezclen tipos (al menos dos inventadas por ti), cada una con su «espero …».

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero [tu predicción]
  console.log('5 === "5" →', 5 === "5");   // espero [tu predicción]

  // TODO: haz lo mismo con 0 y false, y con null y undefined.
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "[Tu nombre]";
  // TODO: ciclo, curso y una afición, también con const.

  // Un dato que cambia, con let
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}.`;
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.

  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola.
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.

  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
}
