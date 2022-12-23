//Función de convecional

// function sumar(n1,n2 = 10){
//     return n1+n2;
// }

//Función de flecha

// const sumar = (a, b = 10) => {
//     return a + b;
// }

//Nota: cuando la función tiene solo una linea no es necesario el return ni las llaves.

const sumar = (a, b = 10) => a + b;

const resta = (a, b) => a - b;

const multi = (a, b) => a * b;

const div = (a, b) => a / b;


console.log(sumar(1,5));
console.log(resta(1,5));
console.log(multi(1,5));
console.log(div(15,5));