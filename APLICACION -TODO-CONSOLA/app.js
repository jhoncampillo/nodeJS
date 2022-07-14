require("colors");
const { Tarea } = require("./models/tarea");
//Modelado Manual``12~!@#$$
// const { mostrarMenu, pausa } = require("./helpers/mensajes");
// console.clear();
// const main = async () => {
//   console.log("Hola Mundo ToDo");

//   //Creo variable para leer la opcion que seleccione el usuario
//   let opt = "";

//   do {
//     //esperate hasta que tengamos una resolcuin de mostrar menu
//     opt = await mostrarMenu();
//     console.log("JJ", { opt });
//     if (opt !== "0") await pausa();
//   } while (opt !== "0");

//   // pausa();
// };

//MOELADO CON enquired

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/Tareas");

const main = async () => {
  console.clear();

  //Creo variable para leer la opcion que seleccione el usuario
  let opt = "";
  ///creo instancia para almacenar tareas
  //las tareas simpre mantienen fuera del cilo do while
  const tareas = new Tareas();
  // console.log(tareas.);

  do {
    //   //esperate hasta que tengamos una resolcuin de mostrar
    //menu por que es una promesa- imprime Menu
    opt = await inquirerMenu();
    // console.log("JJ", { opt });
    // if (opt !== "0") await pausa();
    //queda esperando en enter
    //creo una Tarea
    //llamo el listado - creo un nueva  estancia de tarea

    //tareas._listado[tarea.id] = tarea;
    // console.log(tareas);
    //para que se ejecute la pausa y deje ver el menu

    //creo un swich para
    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion:");
        //llamo el metod crerTarea creado en Tareas
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;

      case "3":
        break;
      default:
        break;
    }

    await pausa();
  } while (opt !== "0");
  //await para que espere
};

main();
