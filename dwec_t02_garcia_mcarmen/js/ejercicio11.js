console.log("T02 - Ejercicio 10");

/*
    Realizar un programa en javascript que calcule el factorial impar de un número entero. 
    El factorial impar de un número n es el producto de todos los números naturales impares desde el 1 hasta n o n-1,
    dependiendo de si n es par o impar.  Ejemplo:
    5! = 5 x 3 x 1 = 15
    10! = 9 x 7 x 5 x 3 x 1 = 945
    La solución se deberá hacer de forma recursiva.
*/

let inputUser;

do{



    inputUser=parseInt(prompt("Introduce un numero para calcular su factorial impar: "));

    if(Number.isNaN(inputUser)){

    alert("debes introducir un valor numerico");

    }else if(inputUser===1 || inputUser===0){

        alert("El factorial de "+inputUser+" es 1");

    }else if(inputUser<0){

        alert("No se puede hacer el factorial de numeros negativos(que yo sepa...)");

    }else{
        
        alert("El factorial del numero "+inputUser+" es "+factorial(inputUser));

    }

}while(Number.isNaN(inputUser));


function factorial(inputUser){

    let solución=0;

    if(inputUser%2==0){

        let numFact=inputUser-1;

        return factorial(numFact)

    }else{

        if(numFact<1){
            
            solución=numFact*(numFact-2);
            factorial(numFact)
        }

        
    }

    return solución;

}
