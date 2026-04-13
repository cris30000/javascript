/*

Escribir un programa que seleccione la operación
aritmética a ejecutar entre dos números
dependiendo del valor de una variable
denominada seleccionOp.
*/
const prompt = require('prompt-sync')();

// pido   al usuario los numeros y la operacion
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let seleccionOp = Number(prompt("Selecciona operación (1=suma, 2=resta, 3=multiplicación, 4=división): "));

// segun la opcion hago la operacion
if (seleccionOp === 1) {
    console.log("Resultado: " + (num1 + num2));
} else if (seleccionOp === 2) {
    console.log("Resultado: " + (num1 - num2));
} else if (seleccionOp === 3) {
    console.log("Resultado: " + (num1 * num2));
} else if (seleccionOp === 4) {
    // verifico que no divida entre 0
    if (num2 === 0) {
        console.log("No se puede dividir entre 0");
    } else {
        console.log("Resultado: " + (num1 / num2));
    }
} else {
    // opcion que no existe
    console.log("Opción inválida");
}