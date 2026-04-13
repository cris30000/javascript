/*
Escribir un programa que introduzca el número de
un mes (1 a 12) y el año y visualice el número de
días de ese mes.

*/
const prompt = require('prompt-sync')();

// ingreso los dos numeros
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));


if (num1 < num2) {
    console.log("El número menor es: " + num1);
} else if (num2 < num1) {
    console.log("El número menor es: " + num2);
} else {
    // si es igual, no hay menor, son iguales
    console.log("Los dos números son iguales: " + num1);
}