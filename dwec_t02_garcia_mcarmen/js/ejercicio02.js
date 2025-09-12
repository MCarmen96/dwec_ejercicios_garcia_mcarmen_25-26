console.log("T02 - Ejercicio 02");

let num=prompt("Dime un numero: ");

let comprobacion=Number.isNaN(num);

if(comprobacion==false){
    console.log("EL VALOR INTRODUCIDO ES UN NUMERO")
}else{
    console.log("EL VALOR NO ES NUMERO")
}

if(num%2==0){
    console.log("ES MULTIPLO DE 2")
    alert("ES MULTIPLO DE 2")
}else if(num%5==0){
    console.log("ES MULTIPLO DE 5")
    alert("ES MULTIPLO DE 5")
}else{
    console.log("EL NUMERO NO ES MULTIPLO DE NINGUNO DE LOS NUMEROS")
    alert("EL NUMERO NO ES MULTIPLO DE NINGUNO DE LOS NUMEROS")
}



