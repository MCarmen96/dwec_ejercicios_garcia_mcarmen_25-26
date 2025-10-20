console.log("T03 - Ejercicio 15");
/*
    * Repite el ejercicio verificando si la fecha es correcta sin usar expresiones regulares 
    * (la fecha solo será correcta con este formato: DD/MM/YYYY): 

*/

let fechaNacimiento = prompt("Introduce la fecha de tu nacimiento en estos formatos estos DD-MM-YYYY, DD/MM/YYYY o DD MM YYYY: ")

let separar = "";

if (fechaNacimiento.includes("/")) {

    separar = "/";
}else {
    console.log("--FORMATO DE FECHA INVALIDA--");
}


let day;
let month;
let year;

if (separar !== "") {

    let fechaArray = fechaUser.split(separar);
    day = fechaArray[0];
    month = fechaArray[1] - 1;
    year = fechaArray[2];
}

let fechaActual=new Date();

let fechaCumple=new Date(year,month,day);

let edad=fechaActual.getFullYear()-fechaActual.getFullYear();
let mesDate=fechaActual.getMonth()-fechaCumple.getMonth();

if (mesDate< 0 || (mesDate === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
}

if(edad>=18){
    console.log("ERES MAYOR DE EDAD !!");
}else{
    console.log("ERES MENOR DE EDAD....");
}







