console.log("T03 - Ejercicio 01");
/*
    Investiga los métodos toFixed() y toPrecision() del objeto Number. 
    ¿Qué diferencia hay entre ellos? Úsalos en un ejemplo con diferentes parámetros de entrada.
*/

// The toFixed() method converts a number to a string.
let numero=parseFloat(prompt("Introduce un numero decimal: "));

let convert=numero.toFixed();

alert("Numero : "+convert)

//The toPrecision() method formats a number to a specified length

let x=parseFloat(prompt("introduce otro numero decimal: "));

let numberLeng=x.toPrecision(5);

alert("nuemro con una longitud indicada "+numberLeng);



