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

//Creo una funcion - async tranforma la funcion en una promesa- Transforma mi fuuncion enuna funcion asyncrona

const getInfousuario = async () => {
  try {
    //return "Hola Mundo";
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del Empleado ${empleado} es de ${salario}`;
  } catch (error) {
    //return error;
    //remplazo el return por el throw para llamar el reject dela fucion asyncrona
    throw error;
  }
};
//llamo la funcion
const id = 5;
getInfousuario(id)
  .then((msg) => {
    console.log("Todo Bien");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Todo Mal");
    console.log(err);
  });
