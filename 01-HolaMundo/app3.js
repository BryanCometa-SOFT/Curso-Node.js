console.log("Inicio"); //1

setTimeout(() => {
    console.log("Primer timeout"); // 5
}, 3000);

setTimeout(() => {
    console.log("segundo timeout"); //3
}, 0);

setTimeout(() => {
    console.log("tercero timeout"); //4
}, 0);

console.log("Fin del programa"); //2