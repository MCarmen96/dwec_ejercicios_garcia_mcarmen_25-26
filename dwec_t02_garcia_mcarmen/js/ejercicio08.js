console.log("T02 - Ejercicio 08");
let num1;
let num2;
let cadena;
let valido=false;

do{

    num1=prompt("Introduce un numero:");
    num2=prompt("Introduce un segundo numero: ");
    cadena=num1+","+num2;
    valido=comprobarNumeroCalcularMenor(cadena);
    
}while(!valido);



function calcularMenor(num1,num2){
    console.trace();
    let mayor;
    let menor;
    let numerosEntre=[];

    if(num1<num2){
        mayor=num2;
        menor=num1;
    }else{
        mayor=num1;
        menor=num2;
    }

    for (let index =menor; index < mayor; index++) {
        
        numerosEntre.push(i);
    }
    console.table(numerosEntre);

    if(numerosEntre.length===0){
        console.log(`No hay numero entre ${num1} y ${num2}`);
    }else {
        console.log(
            `Hay ${numerosEntre.length} números entre ${menor} y ${mayor}.`);
    }
}

function comprobarEnteroCalcularMenor(num1,num2){
    let isInt=false;
    console.trace();

    if(Number.isInteger(num1)&&Number.isInteger(num2)){
        isInt=true;
        calcularMenor(num1,num2);
    }else{
        console.log("No son numeros enteros.....")
    }

    return isInt;
}

function comprobarNumeroCalcularMenor(cadena){
    let bandera=false;
    let num1;
    let num2;
    let separar=cadena.split(",");

    num1=separar[0];
    num2=separar[1];
    num1=Number(num1);
    num2=Number(num2);
    if(!isNaN(num1)&&!isNaN(num2)){
        bandera=true;
        console.log("Son numeros");
        comprobarEnteroCalcularMenor(num1,num2);
    }else{
        console.log("alguno de los dos no es un numero...");
    }
    console.trace();
    return bandera;

}

