const argv = require('yargs')
                .option('b', {
                    alias: "base",
                    type: "number",
                    demandOption:true
                })
                .check( (argv, option) => {
                    if(isNaN(argv)){
                        throw("La base tiene que ser un  número");
                    }
                    return true;
                })
                .argv;

const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar.js')

console.clear();

console.log(process.argv);
console.log(argv);

console.log(`base: yard ${argv.base}`)

// const base = 10;
// const iteracion = 10;

crearArchivo(argv.b,iteracion).then(resp => {
    console.log(resp);
}).catch(error => {
    console.log(error);
});



