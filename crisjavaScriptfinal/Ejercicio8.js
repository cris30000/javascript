/*
Construir un algoritmo que escriba los nombres
de los días de la semana, en función de la
entrada correspondiente a la variable DIA.
*/
const prompt = require('prompt-sync')();

// ingrese el numero el numero del dia
let dia = Number(prompt("Ingresa el número del día (1-7): "));

// segun el numero muestro el nombre del dia
if (dia === 1) {
    console.log("Lunes");
} else if (dia === 2) {
    console.log("Martes");
} else if (dia === 3) {
    console.log("Miércoles");
} else if (dia === 4) {
    console.log("Jueves");
} else if (dia === 5) {
    console.log("Viernes");
} else if (dia === 6) {
    console.log("Sábado");
} else if (dia === 7) {
    console.log("Domingo");
} else {
    // si el numero no esta entre 1 y 7 es invalido
    console.log("Número inválido, ingresa un número del 1 al 7");
}