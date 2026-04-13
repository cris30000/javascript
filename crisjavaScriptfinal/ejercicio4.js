/*
Escribir un programa para deducir si una variable es par.

*/

const prompt = require("prompt-sync")();

let num= parseInt(prompt("Ingrese el numero :"));

// realizo la condicion
if (num % 2===0) {
    console.log("El número es par: " + num);
} 
 else {
    console.log("el numero es impar");
}

if(num>0){
    console.log("El numero es positivo: " + num);
}
else if(num<0){
    console.log("El numero es negativo: " + num);
}
else{
    console.log("El numero es cero: " + num);
}

if(num % 3 === 0){
    console.log("El numero es multiplo de 3: " + num);
}

