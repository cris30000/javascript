/*
Se trata de escribir un programa que clasifique
enteros leídos del teclado de acuerdo a los
siguientes puntos: 1. Si es 30 o mayor, o negativo,
visualizar un mensaje en ese sentido; en caso
contrario, si es un nuevo primo, potencia de 2, o un
número compuesto, visualizar el mensaje
correspondiente; si son cero o 1, visualizar 'cero' o
'unidad'.
*/
const prompt = require('prompt-sync')();

//ingrese  el numero
let num = Number(prompt("Ingresa un número entero: "));

//  revisamos si es mayor a 30 o negativo
if (num >= 30 || num < 0) {
    // el || significa O, con una condicion que se cumpla es suficiente
    console.log("El número es 30 o mayor, o es negativo");
} else if (num === 0) {
    console.log("Cero");
} else if (num === 1) {
    console.log("Unidad");
} else {
    // reviso si es primo
    let esPrimo = true;
    for (let i = 2; i < num; i++) {
        // si encuentro un divisor ya no es primo
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // reviso si es potencia de 2
    let esPotenciaDe2 = (num & (num - 1)) === 0;

    if (esPrimo) {
        console.log("El número es PRIMO");
    } else if (esPotenciaDe2) {
        console.log("El número es POTENCIA DE 2");
    } else {
        // si no es primo ni potencia de 2 es compuesto
        console.log("El número es COMPUESTO");
    }
}