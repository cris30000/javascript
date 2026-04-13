/*
Determinar el precio del billete de ida y vuelta en
avión, conociendo la distancia a recorrer y
sabiendo que si el número de días de estancia es
superior a 7 y la distancia superior a 800 km el
billete tiene una reducción del 30 por 100. El
precio por km es de 2,5 euros.
*/
const prompt = require('prompt-sync')();

// ingreso la distancia y los dias de estancia
let distancia = Number(prompt("Ingresa la distancia en km: "));
let dias = Number(prompt("Ingresa los días de estancia: "));

// el precio por km es 2.5 segun el ejercicio
let precioPorKm = 2.5;

// multiplico por 2 porque es ida y vuelta
let precioTotal = distancia * 2 * precioPorKm;

// si los dias son mas de 7 Y la distancia mas de 800 hay descuento
if (dias > 7 && distancia > 800) {
    // calculo el 30% de descuento
    let descuento = precioTotal * 0.30;
    // resto el descuento al precio
    precioTotal = precioTotal - descuento;
    console.log("Tiene descuento del 30%");
}

// muestro el precio final
console.log("El precio del billete de ida y vuelta es: " + precioTotal + " euros");