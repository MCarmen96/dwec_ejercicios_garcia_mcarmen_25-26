console.log("T03 - Ejercicio 20");

/*
    Desarrolla un script que determine si el precio de venta de un artículo dado por un usuario es válido. 
    El precio no puede tener más de 6 dígitos en la parte entera y sólo podrá tener dos decimales. 
    Los decimales podrán estar indicados por “.” ó “,”. 
    Deberás hacer uso del objeto RegExp y crear una función que se denomine "validarMiReal()" que reciba la cadena introducida por el usuario y devuelva un booleano.

    Si el precio es válido, el número se convertirá en un real válido para JS. 
    Para ello, define la función convertirMiReal() que recibe un precio válido y devuelve un Number. 
    Por tanto, si el precio válido es 123,34; se convertirá en 123.34
    La expresión regular debes crear usando el método: 

*/

let precio=prompt("Introduce el precio de venta de un articulo: ");

let regla=/^\d{1,6}(?:[.,]\d{1,2})?$/;

let patron=new RegExp(regla)

function convertirMiReal(precio){

    let convert=Number(precio);
    return convert;
}

function validarMiReal(precio){

    let comprobacion=patron.test(precio);

    if(comprobacion==true){
        console.log("el precio introdcucido cumple los requisitos!! "+precio);
        convertirMiReal(precio)
    }else{

        console.log("el precio introducido no cumple con la regla");
    }
}

validarMiReal(precio);


