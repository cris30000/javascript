/*
Un ángulo se considera agudo si es menor de 90
grados, obtuso si es mayor de 90 grados y recto
si es igual a 90 grados. Utilizando esta
información, escribir un algoritmo que acepte un
ángulo en grados y visualice el tipo de ángulo
correspondiente a los grados introducidos.
*/
const prompt = require('prompt-sync')();

// pido el angulo
let angulo = Number(prompt("Ingresa el ángulo en grados: "));

// comparo con 90 grados
if (angulo < 90) {
    console.log("El ángulo es AGUDO");
} else if (angulo === 90) {
    // exactamente 90 es recto
    console.log("El ángulo es RECTO");
} else {
    // mayor de 90 es obtuso
    console.log("El ángulo es OBTUSO");
}