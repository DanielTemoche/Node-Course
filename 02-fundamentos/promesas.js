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


const getEmpleado = (id)=>{
    return new Promise((resolve, reject) =>{
        const empleado = empleados.find(e => e.id === id )?.nombre;
        empleado 
            ?resolve(empleado)        
            :reject(`No existe empleado con id ${id}`)
        
    })
           
}

const getSalario = (id)=>{
    return new Promise((resolve, reject) =>{
        const salario = salarios.find(e => e.id === id )?.salario;
        salario 
            ?resolve(salario)        
            :reject(`No existe salario para el usuario con el id  ${id}`)
        
    })
           
}


const id = 5;

let nombre;

getEmpleado(id)
    .then(empleado =>{
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado: ',
          nombre, 'tiene un salario de', salario, 'dolares'))
    .catch(err=>console.log(err))



// -------- Forma no estandar

// getEmpleado(id)
// .then(empleado => {
//     getSalario(id)
//     .then(salario => {console.log('El empleado: ',
//      empleado, 'tiene un salario de', salario, 'dolares')
//     })
//     .catch(err => console.log(err))    
// })
// .catch(err => console.log(err))

