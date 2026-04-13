 
 // Ejercicio 2: Escribe un programa que solicite al usuario tres números y determine cuál es el mayor de los tres.
 const prompt = require("prompt-sync")();

let num1= parseFloat(prompt("Ingrese el numero 1:"));
let num2= parseFloat(prompt("Ingrese el numero 2:"));
let num3= parseFloat(prompt("Ingrese el numero 3:"));
// realizo la condicion mayor de los tres numeros


if (num1 > num2 && num1 > num3) {
    console.log("El número mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("El número mayor es: " + num2);
}
else {
    console.log("El número mayor es: " + num3);
}

/*
// ahora si es menor de los tres numeros
if (num1 < num2 && num1 < num3) {
    console.log("El número menor es: " + num1);
} else if (num2 < num1 && num2 < num3) {
    console.log("El número menor es: " + num2);
}
else {
    console.log("El número menor es: " + num3);
}
*/



