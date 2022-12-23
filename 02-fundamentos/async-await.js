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

const id = 5;

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

const getInformationUser = async () =>{
    try {
        const nombre = await getEmployee(id);
        const salary = await getSalary(id);

        return `El empleado ${nombre} tiene un salario de ${salary}`;

    } catch (error) {
        throw error;
    }    
}

getInformationUser()
    .then(resp => {
        console.log("Todo bien");
        console.log(resp);

    }).catch(error => {
        console.log("Todo mal");
        console.log(error);
        
    });