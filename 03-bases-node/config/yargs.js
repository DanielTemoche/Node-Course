const { describe } = require('yargs')

const argv = require('yargs')
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    boolean: true,
                    // demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                    
                })
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                    
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    // demandOption: true,
                    default:12,
                    describe: 'Describe hasta que numero deseas multiplicar'
                    
                })

                .check((argv, option)=>{
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .argv

module.exports = argv