// Calcular costo total de servicios seleccionados por el usuario.
function getProductQuestionByIndex(index) {
    switch (index) {
        case 0:
            return "Desea limpieza facial cuesta 100 (S/N)";
        case 1:
            return "Desea masaje relajante cuesta 200 (S/N)";
        case 2:
            return "Desea masaje relajante cuesta 250 (S/N)";
        case 3:
            return "Desea masaje relajante cuesta 250 (S/N)";

    }
}

function getProductValueByIndex(index) {
    switch (index) {
        case 0:
            return 100;
        case 1:
            return 200;
        case 2:
            return 250;
        case 3:
            return 350;
    }
}

//MAIN
let nombre = prompt("Ingrese su nombre");
alert(`Hola bienvenido ${nombre}`);

let valorTotal = 0;

for (let indexQuestion = 0; indexQuestion < 4; indexQuestion++) {
    let messageQuestionIndex = getProductQuestionByIndex(indexQuestion);
    let yesOrNo = prompt(messageQuestionIndex);

    if (yesOrNo === "S") {
        let valor = getProductValueByIndex(indexQuestion)
        valorTotal = valorTotal + valor;
    }
}

alert(`El valor total es ${valorTotal}`);



