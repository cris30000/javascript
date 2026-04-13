/*
Escribir un programa que acepte dos números reales de
un usuario y un código de selección. Si el código
introducido de selección es 1, entonces el programa
suma los dos números introducidos previamente y se
visualiza el resultado; si el código de selección es 2, los
números deben ser multiplicados y visualizado el
resultado; y si el código seleccionado es 3, el primer
número se debe dividir por el segundo número y
visualizarse el resultado.

*/

   

const prompt = require('prompt-sync')();

// Ingreso de los números y código
let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let codigo = parseInt(prompt("Ingresa código (1=suma, 2=multiplicación, 3=división, 4=resta, 5=módulo): "));

// Switch para operaciones
switch(codigo) {
    case 1:
        console.log("Suma: " + (num1 + num2));
        break;
    case 2:
        console.log("Multiplicación: " + (num1 * num2));
        break;
    case 3:
        if (num2 !== 0) {
            console.log("División: " + (num1 / num2));
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    case 4:
        console.log("Resta: " + (num1 - num2));
        break;
    case 5:
        if (num2 !== 0) {
            console.log("Módulo: " + (num1 % num2));
        } else {
            console.log("Error: No se puede calcular módulo con cero.");
        }
        break;
    default:
        console.log("Código de selección inválido. Debe ser 1, 2, 3, 4 o 5.");
}