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

const id = 10;

const getSalario = (id, callback) => {
  const salarioEm = salarios.find((sal) => sal.id === id)?.salario; //? -- null check operator si el retorno no es undefine o null
  if (salarioEm) {
    //return salario;
    callback(null, salarioEm);
  } else {
    callback(`El salario del Empleado ${id} no existe`);
  }
};

//mando el err el cual se llama en el callback cono null
getSalario(id, (err, salarioEm) => {
  if (err) {
    console.log("ERROR");
    return console.log(err);
  }
  console.log(salarioEm);
});

//////////////////////////////////////
const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado); //null es false en JS
    //return empleado;
  } else {
    callback(`Empleado con ${id} no existe`);
  }
};
//mando el err el cual se llama en el callback cono null
getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR");
    return console.log(err);
  }

  console.log(empleado);
});

//////
function crearCita(cita, callback) {
  var miCita = "Como yo siempre digo, " + cita;
  callback(miCita); // 2
}

function logCita(cita) {
  console.log("Jhon", cita);
}

crearCita("come tus vegetales!", logCita); // 1
