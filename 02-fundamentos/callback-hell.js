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

const getEmployee = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if(!empleado) {
        callback(`El empleado con id ${id} no existe`);
    }else{
        callback(null,empleado);
    }    
}

const id = 2;

getEmployee(id, (error,employee) => {
    if(error){
        return console.log(`Error!! ${error}`);
    }
    console.log(employee);
});

const getSalary = (id, callback) => {
    const salary = salarios.find((e) => e.id === id)?.salario;
    if(!salary){
        callback(`El empleado con id ${id} no tiene ningun salario asignado`);
    }else{
        callback(null,salary)
    }
}

getSalary(id, (error, salary) => {
    if(error){
        return console.log(`Error!! ${error}`);
    }
    console.log(`El empleado tiene un salario de ${salary}`)
});