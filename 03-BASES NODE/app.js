//COMANDOS PARA EJECUTAR LAS BANDERAS
//node app.js -b 12 -h 20 -l

// import { writeFile } from "fs";
// import { Buffer } from "buffer";
const { crearArchivo } = require("./helpers/multiplicar");
//const { boolean } = require("yargs");
const argv = require("./config/yargs");

//manejo los argumentos  b y l para listar y la base

//en este momento recibe todo tipo en caracteres numbre, string
//const { requiresArg, number } = require("yargs");
//Importo el archivo- y desesttructuro por que es un objeto

console.clear();
//const base = 11;

//Mando la Base desde consola
//>node app.js --base=10

//Muestra las Rutas de instalacion y ejecucion del node
//****************ESTO NO SE RECOMIENDA**********
// console.log(process.argv);
// console.log(argv.b); //node app.js --base=5
// console.log(argv.l);
// console.log(argv.h);
//'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\Jhon\\Desktop\\Node\\03-BASES NODE\\app.js'
// '--base=5'
//con este comando manda la base node app.js --base=10
//{ _: [], base: 10, '$0': 'app.js' }

//console.log("base: yargs", argv.b);
//base: yargs 10

//TAMBBIEN PUEDE MANEJAR BANDERAS PERSOONALIZADAS
//node app.js --base 5 --listar
//{ _: [], base: 5, listar: true, '$0': 'app.js' }
//base: yargs 5

// const [, , arg3 = "base=5"] = process.argv;
// //desestructuro el arg3
// const [, base] = arg3.split("=");
//console.log(base);
//5
//****************************************//

//mando los argumentos a la funcion asyncrona
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

//let mul = 5;
//let salida = "";

// const multiplica = (mul) => {
//   for (let i = 1; i <= 10; i++) {
//     let resultado = mul * i;
//     console.log(`${mul} * ${i} = ${resultado}`);
//   }
// };

// console.log(multiplica(mul));

// const base = 8;

//Gravo el archivo

// fs.writeFile(`tabla ${base}.txt`, salida, (err) => {
//   if (err) throw err;

//   console.log(`Tablas del ${base} Crada`);
// });
