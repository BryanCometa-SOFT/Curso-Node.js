const fs = require('fs');

const crearArchivo = async (base = 1 ,iteracion = 1) => {
    try {
        if( typeof base != 'number' || typeof iteracion != 'number'){
            throw("Error! Los valores deben ser númericos");
        }
    
        if( base <= 0 || iteracion <= 0 ){
            throw("Error! Los valores dados deben ser mayores ha 0");
        }

        console.log("============================");
        console.log(`    tabla del :${base}`);
        console.log("============================");
    
        let salida = "";
        for (let i = 1; i <= iteracion; i++) {
            salida += `${base} x ${i} = ${i * base} \n`;
        }
    
        fs.writeFileSync('tablas.txt', salida);
    
        console.log(salida);
    
        return(`fue creada la tabla del ${base} `);
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}

