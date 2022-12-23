const empleados = [
    { 
        id: 1,
        nombre: "Bryan"
    },
    { 
        id: 2,
        nombre: "Zully"
    },
    { 
        id: 3,
        nombre: "Yineth"
    },
];

const salarios = [
    { 
        id: 1,
        salario: 2500000
    },
    { 
        id: 2,
        salario: 1300000
    },
];

const id = 3;

const getEmployee = (id) => {
    const employe = empleados.find((e) => e.id === id)?.nombre;

    return new Promise( (resolve, reject) => {
        if(employe){
            resolve(employe);
        }else{
            reject(`El empleado con id ${id} no existe`);
        }
    });
}

const getSalary = () => {
    const salary = salarios.find((e) => e.id === id)?.salario;

    return new Promise( (resolve,reject) => {
        if(salary){
            resolve("El salario del usuario es " +  salary);
        }else{
            reject("El salario no fue encontrado");
        }
    });
}

let nombre;

getEmployee(id)
    .then( empleyee => {
        nombre = empleyee;
        return getSalary(id);
    })
    .then( salary => console.log(`El empleado ${nombre} tiene un salario de ${salary}`))
    .catch(error => console.log(error));

// getEmployee(id)
//     .then( employee => console.log(employee))
//     .catch( error => console.log(error));

// getSalary(id)
//     .then( (employee) => console.log(employee))
//     .catch( (error) => console.log(error))
