console.log("T02 - Ejercicio 05");
/*
    Desarrolla un script que pida cinco números y muestre los que sean mayores que la media. Sin usar arrays. Suponemos que siempre se introducen números.
    El mensaje de salida será: "Los siguientes números introducidos son superiores a la media (VALORMEDIA): NUM1, NUMX…."

*/

let media=0;
let num1=parseFloat(prompt("Introduce el numero 1: "))
let num2=parseFloat(prompt("Introduce el numero 2: "))
let num3=parseFloat(prompt("Introduce el numero 3: "))
let num4=parseFloat(prompt("Introduce el numero 4: "))
let num5=parseFloat(prompt("Introduce el numero 5: "))

media=(num1+num2+num3+num4+num5)/5;


if (num1>media && num2>media && num3>media && num4>media && num5>media){

    alert("Los siguientes números introducidos son superiores a la media (VALORMEDIA): ");

}else{
    alert("NO HAS INTRODUCIDO NINGUN NUMERO QUE SUPERE A LA MEDIA")
}


