// Escribir un programa que introduzca el número de
//un mes (1 a 12) y el año y visualice el número de
//días de ese mes.

const prompt = require('prompt-sync')({ sigint: true });

// pido al usuario el mes y el año
let mes = parseInt(prompt("Ingresa el número del mes (1-12): "));
let anio = parseInt(prompt("Ingresa el año: "));

// función para determinar si es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0));
}

// reviso cuantos dias tiene el mes
if (mes === 2) {
    // febrero
    if (esBisiesto(anio)) {
        console.log("El mes tiene 29 días (año bisiesto)");
    } else {
        console.log("El mes tiene 28 días");
    }
} else if ([4, 6, 9, 11].includes(mes)) {
    // abril, junio, septiembre, noviembre
    console.log("El mes tiene 30 días");
} else if (mes >= 1 && mes <= 12) {
    // resto de los meses
    console.log("El mes tiene 31 días");
} else {
    // mes inválido
    console.log("Mes inválido");
}

/*
if([1,2,3,4,5,6].includes(mes)) {
    console.log("pertenece al primer semestre");
}
else if([7,8,9,10,11,12].includes(mes)){
    console.log("pertenece al segundo semestre");
}
else{
    console.log("mes invalido");
}
*/

