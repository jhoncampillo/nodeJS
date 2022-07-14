const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Jhon",
  },
  {
    id: 3,
    nombre: "Juanda",
  },
  {
    id: 4,
    nombre: "Monica",
  },
  {
    id: 5,
    nombre: "Stiven",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
  {
    id: 3,
    salario: 1600,
  },
  {
    id: 4,
    salario: 1400,
  },
  {
    id: 5,
    salario: 1600,
  },
];

const getEmpleado = () => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado
      ? resolve(empleado)
      : reject(`no existe el empelado con el Id ${id}`);
  });
  //return promesa;
};

const getSalario = () => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((sal) => sal.id === id)?.salario;
    //ternario
    salario
      ? resolve(salario)
      : //tmeplate string ``
        reject(`Empleado con id ${id} No tiene salario`);
  });
};

//   if (empleado) {
//     callback(null, empleado);
//   } else {
//     callback(`Empleado con Id ${id} no existe`);
//   }
// };
const id = 10;
// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));

//Si empleado exixte trae salario - NO SE USA
//   .then((empleado) => {
//     getSalario(id)
//       .then((salario) => {
//         console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
//       })
//       //un catxh por cada then
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

//OTRA FORMA PROMESAS EN CADENA- ESTO TEMPLAZA LO ANTERIOr

let nombre;

getEmpleado(id)
  //llamo el callback - Si todo sale Bien
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado :", nombre, "Tiene un salrio de :", salario)
  )
  .catch((err) => console.log(err)); //Maneho del error
//rertornando el el getSalario y mandandop el Id no necesito llamar el .then - como solo  tengo 1 retur. simplifuici
