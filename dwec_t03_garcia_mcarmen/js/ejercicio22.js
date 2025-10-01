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

function validarDNIyCIF(cadena){

    let isValid=false;

    if(pattDni.test(cadena)){
        isValid=true;
    }else if(pattCif.test(cadena)){
        isValid=true;
    }

    return isValid;
    
}
let cadena="71368712B";



function validarDni(cadena){
    let numeros=cadena.substring(0,8);
    let suma=0;

    let isValid=false;

    for (let i = 0; i< numeros.length; i++) {
        suma+=Number(numeros[i]);
    }

    let posLetra=suma%23;

    if(posLetra>23){

        console.log("--EL DNI ESTA MAL ALGO NO CUADRA--");

    }else{
        isValid=true;
        let letrasDni=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    let letraValida=letrasDni[posLetra-1];
    }

}





console.log(letraValida);
console.log(letrasDni.length)



console.log(posLetra)

console.log("tiene que salir 35 "+suma)

console.log(numeros);


