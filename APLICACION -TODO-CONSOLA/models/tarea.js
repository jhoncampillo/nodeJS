//Installo Paquete npm uuid para id automaticos
const { v4: uuidv4 } = require("uuid");

//creo la clase con los parametros y el constructor para cada tarea
class Tarea {
  id = "";
  desc = "";
  completadoEn = null;
  //se va a ejecutar cunso creamos una nueva stancia de la clase
  constructor(desc) {
    this.desc = desc;
    this.id = uuidv4();
    this.completadoEn = null;
  }
}
//exporto la tarea no en llaves para no desetructurar
//sin llaves no funciona
module.exports = { Tarea };
