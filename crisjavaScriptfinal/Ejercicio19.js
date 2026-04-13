/*
Escribir y ejecutar un programa que simule un
calculador simple. Lee dos enteros y un carácter.
Si el carácter es un +, se visualiza la suma; si es
un –, se visualiza la diferencia; si es un *, se
visualiza el producto; si es un /, se visualiza el
cociente; y si es un % se imprime el resto.
*/
const prompt = require('prompt-sync')();

// pido  al usuario ingresar los dos numeros
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));

// seleccione
//  operacion, sin Number() porque es un simbolo
let operacion = prompt("Ingresa la operación (+, -, *, /, %): ");

// segun el simbolo hago la operacion
if (operacion === '+') {
    console.log("Resultado: " + (num1 + num2));
} else if (operacion === '-') {
    console.log("Resultado: " + (num1 - num2));
} else if (operacion === '*') {
    console.log("Resultado: " + (num1 * num2));
} else if (operacion === '/') {
    // verifico que no divida entre 0
    if (num2 === 0) {
        console.log("No se puede dividir entre 0");
    } else {
        console.log("Resultado: " + (num1 / num2));
    }
} else if (operacion === '%') {
    // el % da el residuo de la division
    console.log("Resultado: " + (num1 % num2));
} else {
    // simbolo que no existe
    console.log("Operación inválida");
}