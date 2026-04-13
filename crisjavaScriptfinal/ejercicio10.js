/*
Realizar un algoritmo que averigüe si dados dos
números introducidos por teclado uno es divisor
del otro.

*/
const prompt = require('prompt-sync')();

// pido los dos numeros
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));

// comparo cual es mayor o menor
if (num1 > num2) {
    console.log("El primer número es el mayor");
} else if (num1 < num2) {
    console.log("El primer número es el más pequeño");
} else {
    // si no es mayor ni menor son iguales
    console.log("Los dos números son iguales");
}
