console.log("T02 - Ejercicio 14");
/*
    Determinar si un número entero positivo dado leído desde el teclado es abundante o no. 
    Un número abundante es un número natural cuyos divisores (todos los divisores excepto el propio número) sumen más que dicho número.
    Ejemplo: 24 < 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36.
    Se tiene que comprobar si el usuario ha introducido un número entero mayor que 0. 
    En el caso contrario, se le volverá a pedir el número hasta que lo introduzca correctamente.
*/

let inputUser;

do{
    
    inputUser=Number(prompt("Introduce un numero: "));
    

}while(inputUser>0)

