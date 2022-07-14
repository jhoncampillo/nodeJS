//generar listados de tareas

const { Tarea } = require("./tarea");

/*
_listado:
{ uuidv4:48245633-2:{id:12, desc:assedas, completadoEN:922331}}
{ uuidv4:48245633-2:{id:12, desc:assedas, completadoEN:922331}}
{ uuidv4:48245633-2:{id:12, desc:assedas, completadoEN:922331}}

*/
//Creo la clase para las tareas - privada acumular tareas
//Maneja gran cantidad de tareas
class Tareas {
  //manejo un objeto vacio
  _listado = {};

  //para poder ver la lista de objetos com,o un array  em termonos de visualizacion
  // hagos uso de los getter y setters
  //creo una funcion y se vueve una propiedad de o metodo de tareas
  get listadoArr() {
    // la creo para ccrera el array
    const listado = [];
    //recorro las llavez del objeto con un objeto propio de Js
    //este objeto retorna un array con todos sus methodos
    //lo envi a la opcion 2 de case de app
    Object.keys(this._listado).forEach((key) => {
      console.log(key);

      //Ahora inserto las tareas al listado
      const tarea = this._listado[key];
      //adiciono al arry
      listado.push(tarea);
    });
    return listado;
  }

  //constructor para unicializar el _listado
  constructor() {
    this._listado = {};
  }
  //Creo el Metodo de crear
  //recibo la descripcion de la tared y le ponmfo vallor por defecto
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    //inserto la tarea en las Tareas
    this._listado[tarea.id] = tarea;
  }
}

//exporto la clase
module.exports = Tareas;
