console.log("T02 - Ejercicio 04");
/*
    Realizar un programa que determine si el número introducido por el usuario es primo o no.
    Antes de calcular, comprobar que el usuario introduce realmente un número (Number.isInteger).
*/

let input=parseInt(prompt("Introduce un numero"));

if (Number.isInteger(input)){

    for (let index = 2; index <input ; index++) {
        
        if(input%index!=0){
            
            
        }else{

        }
    }

}else{
    alert("El valor introducido no es un numero")
}