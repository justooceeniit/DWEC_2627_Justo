// Funcion 1: Saludar
function mostrarSaludo() {
    alert("Hola , soy Justo y esta es mi practica de DWEC.");
    console.log("consola: Se ha pulsado el botón de Saludar.");
}

// funciuon 2: Simular un error (solo visible en la consola F12)
function simularError() {
    console.error("Error simulado de prueba: Fallo crítico en la simulación bancaria del cliente.");
}

// funcionm3: Comprobar el navegador (userAgent)
function comprobarNavegador() {
    let agente = navigator.userAgent;
    alert("UserAgent del navegador:\n" + agente);
    console.log("UserAgent obtenido: ", agente);
}