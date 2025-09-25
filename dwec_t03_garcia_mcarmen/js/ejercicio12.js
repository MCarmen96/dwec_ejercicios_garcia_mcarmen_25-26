console.log("T03 - Ejercicio 12");
/*
    *Elabora un script que simule el sorteo del cupón diario de la once sin número de serie. 
    *El número premiado se obtiene de cinco bombos: unidades, decenas, centenas, unidades de millar y decenas de millar. 
    *Cada bombo dará un número entero entre 0 y 9. Haz uso del método "random()" del objeto Math.
    *Define la función: "generar_numeros_entre_0_9()" que no recibe nada y devuelve un número entre 0 y 9.
*/

console.log("--Iniciando sorteo........--");
let arrayNumero=[];

function generar_numeros_entre_0_9(){

    let bomNumeros=Math.floor(Math.random()*10);
    console.log(" ** GENERANDO NUMEROS DEL SORTEO ** ");
    return bomNumeros;

}

let unidades=generar_numeros_entre_0_9();
let decenas=generar_numeros_entre_0_9();
let centenas=generar_numeros_entre_0_9();
let unidMillar=generar_numeros_entre_0_9();
let deceMillar=generar_numeros_entre_0_9();

console.log("El resultado del sorteo es: "+unidades+decenas+centenas+unidMillar+deceMillar);






