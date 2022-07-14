//codigo para crear archivo
const fs = require("fs");
const color = require("colors");

//Com Promise
// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log("==============");
//     console.log(`=TABLA DEL :${base}  ==`);
//     console.log("==============");
//     let salida = "";

//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} * ${i} = ${base * i}\n`;
//     }
//     console.log(salida);
//     //Gravo el archiivo  con otra funcion
//     fs.writeFileSync(`tabla del ${base}.txt`, salida);
//     resolve(`Tablas del ${base} Crada`);
//   });
// };

// module.exports = {
//   // function: crearArchivo,
//   // cearArchivo: crearArchivo,
//   //como tiene el mismo nombre se deja solo uno
//   crearArchivo,
// };

//Con Async  - Trabaja sin await - no trabaja sin async
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    console.log("==========================".green);
    console.log(color.blue(`=TABLA DEL :${base} Hasta ${hasta}==`));
    console.log("===========================".blue);
    let salida = "";
    let consola = "";

    for (let x = base; x <= hasta; x++) {
      console.log(`====Tabla del ${base}====`);
      for (let i = 1; i <= 10; i++) {
        consola += `${base} ${"*".blue} ${i} = ${base * i}\n`;
        // salida += `${base} X ${i} = ${base * i}\n`;
      }

      base++;
    }

    //console.log(listar);
    listar
      ? console.log(color.blue(consola).underline.red)
      : //Gravo el archiivo  con otra funcion
        fs.writeFileSync(`./salida/tabla del ${base - 1}.txt`, salida);
    return `Tablas del ${base - 1} Creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  // function: crearArchivo,
  // cearArchivo: crearArchivo,
  //como tiene el mismo nombre se deja solo uno
  crearArchivo,
};
