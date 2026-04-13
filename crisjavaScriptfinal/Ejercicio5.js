//5.	Diseñar un programa en el que a partir de una fecha introducida por teclado con el formato DIA,MES,AÑO se obtenga la fecha del día siguiente

const prompt= require("prompt-sync")();
let numdia= parseInt(prompt("Ingrese el dia :"));
let nummes= parseInt(prompt("Ingrese el mes :"));
let numanio= parseInt(prompt("Ingrese el año :"));
// funcion para saber si es bisiesto el año
function aniobisiesto (anio){
return(anio % 4 == 0 && anio %100 !=0) || (anio % 400 == 0);}
// ahora  asignamos los dias que tiene cada mes en un array 
let numerodias_mes=[31,28,31,30,31,30,31,31,30,31,30,31];

//ahora verificamos si el mes es febrero y si es un año bisiesto 
if (nummes==2 && aniobisiesto(numanio)){
    numerodias_mes[1]=29;
}
//ahora verifico si es el ultimo dia del mes

if (numdia < numerodias_mes[nummes-1]){
    //entoces incremente el dia
    numdia++    
}
else{
   numdia=1;// aqui reinicio el dia
    // si el numero de meses en menor a 12 entoces incremente el mes 
if (nummes<12){
    nummes++
}

// sino el nummes pasaria al siguiente año
else {nummes=1;
    numanio++
}
}

console.log(`La fecha del día siguiente es: ${numdia}/${nummes}/${numanio}`);





