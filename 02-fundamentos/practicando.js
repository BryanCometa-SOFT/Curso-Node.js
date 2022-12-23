const lateMessage = (time = 1000, callback) => {
    characters = [
        {
            id: 1,
            name: "Gokú",
            power: "Kame hame ha",
        },
        {
            id: 2,
            name: "Vegeta",
            power: "big bang",
        },
    ]

    setTimeout(() => {
        callback(characters); 
    }, time);
    
}

lateMessage(2000, ([sayayin, ]) => {
    console.log(`El sayayin ${sayayin.name} tiene el poder de ${sayayin.power}`);
});

lateMessage(5000, ([,sayayin]) => {
    console.log(`El sayayin ${sayayin.name} tiene el poder de $${sayayin.power}`);
});
