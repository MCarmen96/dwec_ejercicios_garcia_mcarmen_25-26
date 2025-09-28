console.log("T03 - Ejercicio 20");

/*

    Busca en internet dos expresiones regulares. 
    Una que permita validar un DNI y otra que permita validar un CIF. 
    Crea script que pida al usuario una cadena y determine si es DNI o CIF válido. 
    Es necesario que definas una función que se denomine "validarDNIyCIF()" que reciba una cadena y devuelva un booleano.

*/

let user=prompt("Introduce un DNI o un CIF: ");

let pattDni=/^([XYZ]|\d)\d{7}[A-Z]$/;
let pattCif=/^[A-HNPQRSUVW]\d{7}[0-9A-J]$/i;

function validarDNIyCIF(){}
