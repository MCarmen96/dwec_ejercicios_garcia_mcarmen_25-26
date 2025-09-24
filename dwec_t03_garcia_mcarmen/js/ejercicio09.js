console.log("T03 - Ejercicio 09");
/*
    
    Haz un script que pida al usuario cuántos números quiere introducir, 
    después los introducirá en un array y finalmente mostrará el menor y el mayor.
    Para mostrar el menor y el mayor deberás hacer uso de los métodos "max()" y "min()" del objeto Math.

*/

let cantidadNum=Number(prompt("Introduce la cantidad denumeros que quieres introducir: "));

let numeros=[];

for (let index = 0; index < cantidadNum; index++) {
    
    let num=Number(prompt("Introduce el nuemro "+[index+1]+": "));

    if (isNaN(num)) {
        console.error("¡ERROR! El valor introducido no es un número.");
    }
    numeros.push(num)

}

let peque=Math.min(...numeros);
let mayor=Math.max(...numeros);

console.log("EL MAS PEQUEÑO ES "+peque);

console.log("EL MAS GRNADE ES "+mayor);
