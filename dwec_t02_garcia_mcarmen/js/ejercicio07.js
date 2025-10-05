console.log("T02 - Ejercicio 07");

let input1;
let input2;

do{
    input1=prompt("Introduce un numero");
    input2=prompt("Introduce un numero");

    if((input1 !== "s" && input1 !== "S")&& isNaN(Number(input1))){
        console.log("El primer valro introducido no es valido");
    }
    if ((input2 !== "s" && input2 !== "S") && isNaN(Number(input2))) {
        console.log("El segundo valor no es un número válido");
    }

} while ((input1!==input1)&&(input1!=0)&&(input2!=0)&&(input1!=="s"&&input1!=="S")&&(input2!=="s"&&input2!=="S"));