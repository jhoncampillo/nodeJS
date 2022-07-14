//Call Back
// setTimeout(() => {
//   function saludar() {
//     console.log("Hola Mundo");
//   }
//   saludar();
// }, 1000);

// const getUsuarioById = () => {
//   const usuario = {
//     id: new Date().getMilliseconds(),
//     nombre: "Jhon Jairo",
//     Apellido,
//   };
//   //despues de 2 segundo imprimir la funcion

//   setTimeout(() => {
//     console.log(usuario);
//   }, 2000);
// };

// getUsuarioById((Apellido = "Campillo"));

// con CallBack
//llammo la funcion de callback
const getUsuarioById = (Apellido, CallBack) => {
  const usuario = {
    id: new Date().getMilliseconds(),
    nombre: "Jhon Jairo",
    Apellido,
  };
  //despues de 2 segundo imprimir la funcion

  setTimeout(() => {
    CallBack(usuario);
    //console.log(usuario);
  }, 2000);
};
//mando el usuario como parametro
getUsuarioById((Apellido = "Campillo Serrato "), (usuario) => {
  console.log("Quedo OK");
  console.log(usuario.nombre.toUpperCase());
  console.log(usuario.Apellido.toUpperCase());
});
