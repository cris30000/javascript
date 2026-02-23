// ejercico 6 de pesos Se desea realizar una estadística de los pesos de los alumnos de un colegio de acuerdo a la siguiente tabla: 
// Alumnos de menos de 40kg Alumnos entre 40kg y 50 kg Alumnos de mas de 50kg y menos de 60kg Alumnos de mas o igual a 60kg

let menos40=0;
let entre40y50=0;
let entre50y60=0;
let masde60=0;
// ahora pedimo a cuantos estudiantes se les va a realizar la estadistica
const prompt = require("prompt-sync")();
let numestudiantes= parseInt(prompt("Por favor Ingrese el numero de estudiantes  :"));
// recorremos el for 
for (let i=1; i<=numestudiantes;i++){
    let peso=parseFloat(prompt(`Por favor Ingrese el peso del estudiantes ${i} :`));
    // y ahora ejecuto un if condicional para verificar los rangos
    // en primer lugar si el peso es menor que 40 incremento
    if(peso<40)
    {
        menos40++;
    }
    else if(peso>=40 && peso<=50){
        entre40y50++;
    }
    else if(peso>=50 && peso <60){
        entre50y60++
    }
    else
{
    masde60++;
}
    }
    // en consola seria los siguientes resultados

    console.log("** Resultados  estadiscticos")
    console.log(`Los estudiante con  peso menos de 40 kg son :${menos40}`);
    console.log(`Los estudiante con  PESO entre 40 y 50  kg son :${entre40y50}`);
    console.log(`Los estudiante con  PESO entre 50 y 60  kg son :${entre50y60}`);
    console.log(`Los estudiante con  PESO de mas de 60  kg son :${masde60}`);
    
       







