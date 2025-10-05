console.log("T02 - Ejercicio 02");

let num=parseInt(prompt("Dime un numero: "));


if(isNaN(num)){

    console.log("EL VALOR INTRODUCIDO NO ES UN NUMERO")

}else if(Number.isInteger(num)){
    
    console.log("EL VALOR  ES NUMERO")

    if(num%2==0){
        console.log("ES MULTIPLO DE 2"+num)
        alert("ES MULTIPLO DE 2")

    }else if(num%5==0){
        console.log("ES MULTIPLO DE 5"+num)
        alert("ES MULTIPLO DE 5")

    }else if(num%2==0&&num%5==0){
        alert("EL NUMERO "+num+" ES MULTIPLO DE 5 Y DE 2")

    }else{

        console.log("EL NUMERO NO ES MULTIPLO DE NINGUNO DE LOS NUMEROS")
        alert("EL NUMERO NO ES MULTIPLO DE NINGUNO DE LOS NUMEROS")
    }
}else{
    console.log("VALOR INTRODUCIDO NO VALIDO");
}





