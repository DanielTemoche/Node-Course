/*Que es un callback?
para mi una funcion dentro de una funcion :D

*/

// setTimeout(() => console.log("Hola mundo"), 13000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Summer",
  };
  
  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

getUsuarioById(1, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});

// ------------------------------ MI EJEMPLO

const getPais = (id,sendPais) =>{
  const Pais = {
    id,
    nombre: 'Peru'
  }

  setTimeout(() => sendPais(Pais), 2000);
}

getPais(2,(Pais)=>{
  console.log(Pais.id);
  console.log(Pais.nombre);
})