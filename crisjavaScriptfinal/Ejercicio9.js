/*
Escribir un programa que solicite al usuario introducir
dos números. Si el primer número introducido es
mayor que el segundo número, el programa debe
imprimir el mensaje “El primer número es el mayor”, en
caso contrario el programa debe imprimir el mensaje
“El primer número es el más pequeño”. Considerar el
caso de que ambos números sean iguales e imprimir el
correspondiente mensaje.
*/
const prompt = require('prompt-sync')();

// pido al usuario  los dos numeros
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