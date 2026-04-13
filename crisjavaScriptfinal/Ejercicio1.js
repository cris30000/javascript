
/*
Escribir un programa que lea dos números y
visualice el mayor.
*/
//let num1=8;
//let num2=12;

const prompt = require("prompt-sync")();

let num1= parseFloat(prompt("Ingrese  El primer número :"));
let num2= parseFloat(prompt("Ingrese  El segundo número :"));

if (num1>num2){
    console.log("El numero mayor es : " + num1)

}
else if(num2>num1){
    console.log("el numero mayor es: "+num2)
}