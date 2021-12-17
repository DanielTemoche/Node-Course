//Creamos el objeto spiderman 
const spiderman = {
  nombre: "Peter",
  apellido: " Parker",
  poder: " Poderes aragnidos",
  edad:20,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder} ${this.edad}`;
  },
};

console.log(spiderman.getNombre());

// Destructuracion(Extraccion) // no se puede modificar
const { nombre = "Heinze", apellido, poder, edad = 30} = spiderman;
console.log(nombre, apellido, poder, edad);

// Funcion de destructuracion
function imprimirHeroe(Heroe) {
  const { nombre = "Daniel", apellido, poder } = Heroe;
  console.log(nombre, apellido, poder);
}
imprimirHeroe(spiderman);

//Funcion destructuracion como parametros
function imprimeHeroe({ nombre, apellido, poder }) {
  nombre = "Daniel";
  console.log(nombre, apellido, poder);
}
imprimeHeroe(spiderman);

//*Destructuracion de arreglos */

const heroes = ["Deadpopl", "SpiderMan", "IronMan"];

const [, , h3] = heroes;
const [h1] = heroes
console.log(h1);
console.log(h3);

// -------------------------------------------------------------

console.log('******* EJEMPLO CREADO ***************\n');

//Crearemos un objeto 

const Got = {
  name: 'Game of thrones',
  precuela: 'House of the dragon',
  temporadas: 8,
  calificacion: 5,
  listar(){
    return `${this.name} ${this.precuela} ${this.temporadas} ${this.calificacion} `
  } 
}

console.log(Got.listar());

//Destructuracion objeto
const { name, precuela, temporadas, calificacion} = Got;
console.log( name, precuela, temporadas, calificacion);

//Ejemplo con un arreglo

const laptops = ['HP', 'Dell', 'Lenovo' , 'MSI' ]

const [,,,a1] = laptops
console.log(a1)