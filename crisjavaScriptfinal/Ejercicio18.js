/* 
Escribir un programa que lea tres enteros y emita
un mensaje que indique si están o no en orden
numérico.
*/
const prompt = require('prompt-sync')();

// pido los tres numeros
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let num3 = Number(prompt("Ingresa el tercer número: "));

// reviso si estan en orden ascendente
// num1 debe ser menor o igual a num2 Y num2 menor o igual a num3
if (num1 <= num2 && num2 <= num3) {
    console.log("Los números SÍ están en orden numérico ascendente");
} else {
    // alguna condicion fallo, no estan en orden
    console.log("Los números NO están en orden numérico");
}