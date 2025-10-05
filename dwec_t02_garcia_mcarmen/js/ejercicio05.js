console.log("T02 - Ejercicio 05");
/*
    Desarrolla un script que pida cinco números y muestre los que sean mayores que la media. Sin usar arrays. Suponemos que siempre se introducen números.
    El mensaje de salida será: "Los siguientes números introducidos son superiores a la media (VALORMEDIA): NUM1, NUMX…."

*/

let media=0;
let num1=Number(prompt("Introduce el numero 1: "))
let num2=Number(prompt("Introduce el numero 2: "))
let num3=Number(prompt("Introduce el numero 3: "))
let num4=Number(prompt("Introduce el numero 4: "))
let num5=Number(prompt("Introduce el numero 5: "))

media=(num1+num2+num3+num4+num5)/5;

let numerosSuperiores="";
if (num1>media){
    numerosSuperiores+=num1+",";
}

if(num2>media){
    numerosSuperiores+=num2+",";
}
if(num3>media){
    numerosSuperiores+=num3+",";
}
if(num4>media){
    numerosSuperiores+=num4+",";
}
if(num5>media){
    numerosSuperiores+=num5;
}

console.log("Los siguientes números introducidos son superiores a la media (" + media + "): " + numerosSuperiores);



