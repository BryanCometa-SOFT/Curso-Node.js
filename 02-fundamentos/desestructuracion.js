const deadpool = {
    nombre : "Wade",
    apellido: "Winston",
    poder: "Regeneración",
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//const nombre    = "Wade";
//const apellido  = "Winston";
//const poder     = "Regeneración";

//desestructuración obj
const { nombre, apellido, poder, edad = 0 } = deadpool;
console.log(`${nombre} ${apellido} ${poder} ${edad}`)

//desestructuración function
function escribeHeroe({nombre, apellido, poder, edad = 0}){
    console.log(`Desustructuración con función ${nombre} ${apellido} ${poder} ${edad}`);
}
escribeHeroe(deadpool);

//desestructuración array
const personajes = ["Goku", "Vegeta", "Gohan"]

//const h1  = personajes[0];
//const h2  = personajes[1];
//const h3  = personajes[2];

//Nota: Si se quiere uno en concreto se dejan comas y vacios
//ejemplo :  const [  ,  , h3] = personajes;

const [ h1 , h2 , h3] = personajes;
console.log(`${h1} ${h2} ${h3}`)
