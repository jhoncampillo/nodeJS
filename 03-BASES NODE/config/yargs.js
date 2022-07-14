//IMPORTO YARGS - PARA LEER LAS BANDERAS QUE SE VAN A UTILIZAR EN EL PROGRAMA
//LIBRERIA DE OPCIONES DE LA APALICACION
//MANEJA LAS BANDERAS  : EJEMPLO :  PHP --V
//MANEJA TAMBIEN EL :  node app --help
// node app --version
//Configuro el yargs
const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de Multiplicar",
  })
  //Valido si "b" no es un numero
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base Tiene que ser un Numero";
    }
    //si no hay error retorno "true"
    return true;
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Bandera que imprime o no la tabla en consola",
  })
  .options("h", {
    alias: "hasta",
    type: "numbre",
    demandOption: true,
    default: 10,
    describe: "Hasta que tablas",
  }).argv;
//siempre al argv es de yargs por eso lo exporto
module.exports = argv;
