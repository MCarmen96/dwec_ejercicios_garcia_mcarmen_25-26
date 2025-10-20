console.log("T03 - Ejercicio 20");

/*
    Elabora un script que determine si un usuario ha introducido un número nacional fijo o móvil válido. 
    Suponer que los números fijos válidos empiezan por 8 o 9 y que constan de 9 dígitos. 
    Asimismo, un número móvil válido empieza por 6 o 7 y constan también de 9 dígitos. 
    Deberás hacer uso del objeto RegExp y crear una función que se denomine "validarTelefono()" que reciba la cadena introducida por el usuario y devuelva un booleano.

    Hecho esto, definirás una función que se llame validarPrefijoTeléfonoEsp() que permita validar si un teléfono introducido tiene el prefijo +34.
    Y para terminar harás una función llamada validarTelefonoConSin() que invoque a las dos funciones anteriores, según sea conveniente.
*/

let inputUser=prompt("Introduce un numero de telefono: ");




function validarTelefono(numero){

    let fijos=/^[89][1-9]\d{7}$/;
    let moviles=/^[67]\d{8}$/;
    let comprobacion=false;

    if(fijos.test(numero)){
        console.log("El telefono es valido y es un telefono fijo")
        comprobacion=true;
    }else if(moviles.test(numero)){

        console.log("El telefono es valido y es un telefono movil")
        comprobacion=true;

    }else{
        console.log("Telefono no valido");
        
    }
    return comprobacion;

}

function validarPrefijoTeléfonoEsp(numero){

    let fijoEspa=/^(?:\+34[\s\.]?)?[89][1-9]\d{7}$/;
    let movilEspa= /^(?:\+34[\s\.]?)?[67]\d{8}$/;

    let isValid=false;


    if(fijoEspa.test(numero)){
        isValid=true;
        console.log("el numero fijo es nacional");
    }else if(movilEspa.test(numero)){
        isValid=true;
        console.log("el numero movil es nacional");
    }else{
        console.log("el numero no es nacional");
    }

    return isValid;
}

function validarTelefonoConSin(){

}