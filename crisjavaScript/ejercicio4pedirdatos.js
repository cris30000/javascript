const prompt = require("prompt-sync")();

let num= parseFloat(prompt("Ingrese el numero :"));

// realizo la condicion
if (num % 2===0) {
    console.log("El número es par: " + num);
} 
 else {
    console.log("el numero es impar");
}
