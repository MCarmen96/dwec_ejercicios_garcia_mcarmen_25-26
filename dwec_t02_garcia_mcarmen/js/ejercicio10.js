console.log("T02 - Ejercicio 10");

/*
    Haz un script que pida un número entero al usuario y muestre por pantalla el factorial de dicho número.  
    El script definirá la función "factorial" que recibe un número entero y devuelve el factorial de dicho número. 
    La solución se deberá hacer de forma NO recursiva.

    Recuerda: El factorial de un número n es el producto de todos los números naturales desde 1 hasta n inclusive.
    Así, factorial de 5 (5!) es: 5! = 5 x 4 x 3 x 2 x 1 = 120.
    Contempla qué debe ocurrir si el número es 0 o 1 y qué debe ocurrir si el número es negativo.

*/

let inputUser;

do{

    inputUser=parseInt(prompt("Introduce un numero para saber su factorial: "));

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
    let num=inputUser;
    for (let index = 1; index < inputUser; index++) {
        
        num*=index;
    }

    return num;

}
