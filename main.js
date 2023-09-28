// Calcular costo total de servicios seleccionados por el usuario.
function getProductQuestionByIndex(index) {
    switch (index) {
        case 0:
            return "Desea una limpieza facial cuesta $1.000 (S/N)";
        case 1:
            return "Desea un masaje relajante cuesta $2.000 (S/N)";
        case 2:
            return "Desea una sesion de regalo de depilacion laser cuesta $2.500 (S/N)";
        case 3:
            return "Desea una seccion de radiofrecuencia facial cuesta $3.000 (S/N)";

    }
}

function getProductValueByIndex(index) {
    switch (index) {
        case 0:
            return 1000;
        case 1:
            return 2000;
        case 2:
            return 2500;
        case 3:
            return 3000;
    }
}

//MAIN
let nombre = prompt("Ingrese su nombre");
alert(`Hola ${nombre} Bienvenido a Alma Estetica `);

let valorTotal = 0;

for (let indexQuestion = 0; indexQuestion < 4; indexQuestion++) {
    let messageQuestionIndex = getProductQuestionByIndex(indexQuestion);
    let yesOrNo = prompt(messageQuestionIndex);

    if (yesOrNo.toLowerCase() === "s") {
        let valor = getProductValueByIndex(indexQuestion)
        valorTotal = valorTotal + valor;
    }
}

alert(`El valor total es ${valorTotal}`);



