const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (numero, listar, final)=>{

    try {
       
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= final; i++) {
                salida += `${numero} ${'x'.green} ${i} ${`=`.green} ${i*numero}\n`; 
                consola += `${numero} x ${i} = ${i*numero}\n`;   
        }

        if (listar == true) {
            console.log('==================================='.green);
            console.log(`               Tabla del `, `${numero}`.magenta);
            console.log('==================================='.green);
            console.log(salida);
        }
    
        
        fs.writeFileSync(`salida/tabla-${numero}.txt`, consola)
        
        return `Tabla-${numero}.txt`.green;

    } catch (error) {
        throw err;
    }
} 

module.exports = {
    crearArchivo,
}