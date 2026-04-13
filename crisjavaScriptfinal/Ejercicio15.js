/*
Determinar si el carácter asociado a un código
introducido por teclado corresponde a un carácter
alfabético, dígito, de puntuación o especial.

*/
const prompt = require('prompt-sync')();

// ingresa  el caracter, sin Number() porque es una letra o simbolo
let caracter = prompt("Ingresa un carácter: ");

// reviso que tipo de caracter es
if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {
    // esta entre a-z o A-Z, es una letra
    console.log("Es un carácter ALFABÉTICO");
} else if (caracter >= '0' && caracter <= '9') {
    // esta entre 0 y 9, es un digito
    console.log("Es un DÍGITO");
} else if (caracter === '.' || caracter === ',' || caracter === ';' || caracter === ':' || caracter === '!' || caracter === '?') {
    // es un signo de puntuacion
    console.log("Es un carácter de PUNTUACIÓN");
} else {
    // todo lo demas es especial
    console.log("Es un carácter ESPECIAL");
}