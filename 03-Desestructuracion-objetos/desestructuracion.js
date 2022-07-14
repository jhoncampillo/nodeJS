const dealpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracipon",
  edad: 50,
  getNombre() {
    return `${this.apellido} ${this.nombre} ${this.poder} `;
  },
};

console.log(dealpool);
console.log(dealpool.getNombre());

//desestructuro
const { nombre, apellido, poder, edad = 50 } = dealpool;

console.log(nombre);
console.log(apellido);
console.log(edad);

//puedo desestructurar en el argumento

//function imprimeHeroe(heroe) {
function imprimeHeroe({ nombre, apellido, poder, edad = 12 }) {
  //const { nombre, apellido, poder, edad = 50 } = heroe;
  console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(dealpool);

//DESESTRUCTURAR ARRAY
const heroes = ["Superman", "Batman", "Acuaman"];
const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];

console.log(h1);
console.log(h2);
console.log(h3);

//desestructuro
const [h8, h9, h7] = heroes;

const h4 = [, , h7];

console.log(h4);
