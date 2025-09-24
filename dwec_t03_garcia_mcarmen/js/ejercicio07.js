console.log("T03 - Ejercicio 07");
/*
    
Un usuario puede darte una hora usando los siguientes formatos: "HH:MM", "HH-MM" o "HH.MM".
Determina qué separador ha usado el usuario y crea un objeto Date con la hora introducida por el usuario.
Después verifica si la hora es válida.

*/

let userInput=prompt("Introduce una hora en algun formato de estos: HH:MM, HH-MM o HH.MM ");

let separador="";

if(userInput.includes(":")){
    
    separador=":";

}else if(userInput.includes("-")){

    separador="-";

}else if(userInput.includes(".")){

    separador=".";

}else{
    console.log("--FORMATO DE HORA NO VALIDA--");
}

let horaArray=userInput.split(separador);

let fecha=new Date(userInput);

let hora=fecha.getHours();
let minutos=fecha.getMinutes();

if(hora<0 || hora>23){

    console.log("HORA NO VALIDA");

}else if(minutos<0||minutos>59){

    console.log("MINUTOS NO VALIDOS")
    
}else { 
    console.log("La hora es válida"); 
}


