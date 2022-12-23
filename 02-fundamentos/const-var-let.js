let nombre = 'Goku';
const nombre2 = 'Pepe';

if( true ){
    //Reasignar variable del scope
    //Nota se puede hacer con let  y const
    let nombre = "Vegeta";
    const nombre2 = 'Pepito';
    console.log("Dentro del if " + nombre);
    console.log("Dentro del if " + nombre2);
}

console.log(nombre2);

