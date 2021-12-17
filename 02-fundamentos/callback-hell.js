const empleados = [
    {
        id: 1,
        nombre: 'Eren'
    },
    {
        id: 2,
        nombre: 'Pixis'
    },
    {
        id: 3,
        nombre: 'Bertold'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }    
];


const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id === id )?.nombre;
    if (empleado ) {
        callback(null, empleado);
    } else{
        callback(`Empleado con id ${id} no extiste`) ;
    }
    
}

const getSalario = (id, callback) =>{
    const salario = salarios.find(e=>e.id === id)?.salario;
    if (salario) {
        callback(null, salario)
    }else{
        callback(`No existe salario para el id  ${id}`);
    }
}
// ---------
const id = 3;

getEmpleado(id, (err, empleado)=>{
    if (err) {
        console.log('Error');
        return console.error(err);
    }
    getSalario(id, (err, salario)=>{
        if (err) {
            return console.log(err);
        }
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
    })
})


// getSalario(id, (err, salario)=>{

// })


















// -------------------------- Ejemplo

const personajes=[
    {
        id:1,
        nombre: 'Tywin',
    },
    {
        id:2,
        nombre: 'Robert',
    },
    {
        id:3,
        nombre: 'Eddard',
    }
]

const casas=[
    {
        id:1,
        casa: 'Lanister'
    },
    {
        id:2,
        casa: 'Baratheon'
    },
    {
        id:3,
        casa: 'Stark'
    }
]

const findPersonaje=(id, callback)=>{
    const personaje = personajes.find(e=>e.id ===id)
    if (personaje) {
        callback(null, personaje) ;
    }else {
        console.log('cagaste');
        
    }
    
}
findPersonaje(1, (err, personaje)=>{
    if (err) {
        return err
    } console.log(personaje);
});