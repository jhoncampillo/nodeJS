//MENuS DISENADOS CON inquirer - optimizan el Trabajo
const inquirer = require("inquirer");
const { validate } = require("uuid");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "!Que desea Hacer?",
    // choices: ["opt1", "opt2", "opt3"], las cambio por objeto para capturar el No.
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear Tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar Tarea`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar Tareas Completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar Tareas Pendiente`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar Tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar Tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir\n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  // console.clear();
  console.log("=========================".green);
  console.log("Selecciona una Opcion".white);
  console.log("=========================\n".green);

  //recibe un array definido con las preguntas
  // le mando la name:"opcion"  que es la que esta definida en el name de preguntas
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  ///defino la preguntas

  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"Enter".green} para continuar`,
    },
  ];
  console.log("\n"); /// salto de linea
  //Para hacer una pregunta que esta definida arriba
  await inquirer.prompt(question);
};

//Funcion para leer Input al ingresar una tarea

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      //funcion validate para obligar al digitar en el input
      validate(value) {
        if (value.length === 0) {
          return "Por favor Ingrese un Valor";
        }
        return true;
      },
    },
  ];
  //esta parte del inquirer regresa un objeto - desestructuro para obtener la desc
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
