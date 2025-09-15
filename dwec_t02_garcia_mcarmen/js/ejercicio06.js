console.log("T02 - Ejercicio 06");
/*
    Desarrolla un script que pida dos números enteros y los multiplique usando sumas sucesivas.
    Se tiene que comprobar si el usuario ha introducido o no números válidos. En el caso de que alguno de los números no sea válido, se le volverá a pedir el número hasta que lo introduzca correctamente.
    Se pueden multiplicar números negativo.s

*/

let resultado=0;
let factor=0;
let multiplicador=0;

do{

    factor=parseInt(prompt("Introduce un numero: "));
    multiplicador=parseInt(prompt("Introduce otro numero: "));

    if(!isNaN(factor)){
        

    for (let index = 0; index < factor; index++) {
        resultado+=multiplicador;
    }

        alert("Resultado es : "+resultado)

    }else{
        alert("El numero introducido no es valido")
    }

}while(isNaN(factor)&&isNaN(multiplicador))





