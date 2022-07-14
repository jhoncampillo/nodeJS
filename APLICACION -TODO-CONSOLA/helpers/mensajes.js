const { rejects } = require("assert");
const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
  //Pra poder crear un clico de menu infinito  retorno uso promesa pero no async
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("=====================".green);
    console.log("Selecciona una Opcion".green);
    console.log("=====================".green);

    //Creo el menu

    console.log(`${"1.".green} Crear Tarea`);
    console.log(`${"2.".green} Listar Tarea`);
    console.log(`${"3.".green} Listar Tareas Completadas`);
    console.log(`${"4.".green} Listar Tareas Pendiente`);
    console.log(`${"5.".green} Completar Tarea(s)`);
    console.log(`${"6.".green} Borrar Tarea`);
    console.log(`${"0.".green} Salir \n`);

    //Prepara la interface que le voy a presentar al usuario
    // paquete  readline por defecto en node manaja input - output
    const readline = require("readline").createInterface({
      //recibe un imput y un output
      input: process.stdin,
      output: process.stdout,
    });
    //hago la pregunta al usuario con el .question - se ejecuta con un callback
    readline.question("Selecione una Opcion:", (opt) => {
      // console.log({ opt });
      readline.close(); //para que no se quede esperando inf del usuario
      //cierro el readline para que njo quede esperando al usuario
      //mando la opcion selecionada al resolve de la promesa
      resolve(opt);
    });
  });
};

//creo una funcion que pause o que  relea el menu si se oescoge una opcion errada
//ESTAS DOS PROMESASON ENVIADAS AL app.js a un ciclo do while
const pausa = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    //hago la pregunta al usuario
    readline.question(
      `\nPresione  ${"Enter".green} para continuar\n`,
      (opt) => {
        //cierro el readline para que njo quede esperando al usuario
        readline.close();
        //leo el resolve de la promesa
        resolve();
      }
    );
  });
};

//se exporta como un objeto por que puede tener muchas funciones adentro
module.exports = {
  mostrarMenu,
  pausa,
};
