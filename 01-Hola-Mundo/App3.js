console.log("Inicio de programa");

setTimeout(() => {
  console.log("Primer Time Out");
}, 3000);

setTimeout(() => {
  console.log("Segundo Time Out");
}, 0.1);

setTimeout(() => {
  console.log("Tercer Time Out");
}, 0);

console.log("Fin de programa");

//toda son intrucciones no bloqueantes
// los collback se ejecutan en uan pila de ejecucion

//1. Crea eel proceso main y lo pone en la pila call stack

//ejemplo 2. carga el main y carga la funcion- carga la variable y ejecuta la funcion

//ejemplo 3. carga el main - carla la prime linea de codigo*no es tarea asincrona)- carga los settimeout y los manda  las node Api-
//carga el ultimo log como no es asincrono lo ejecuta - seguido monta los settime en la cola de call backs

//nodemon =
