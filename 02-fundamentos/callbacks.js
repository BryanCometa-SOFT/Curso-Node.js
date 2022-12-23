//  setTimeout(() => {
//     console.log("Hola mundo");
//  }, 2000);

const getUsuarioById = (id,callback) => {
    const usuario = {
        id,
        nombre: "Bryan"
    }
    setTimeout(() => {
        callback(usuario)
    },  4000);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario);
});