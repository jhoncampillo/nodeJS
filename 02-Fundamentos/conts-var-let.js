var nombre = "Wolverin";
//varibles de ambito global

if (true) {
  //ambito diferente
  let nombre = "Magneto";
  console.log(nombre);
}
console.log(nombre);
