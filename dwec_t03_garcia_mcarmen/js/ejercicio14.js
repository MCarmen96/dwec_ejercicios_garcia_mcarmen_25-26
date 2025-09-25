console.log("T03 - Ejercicio 13");
/*
    * Crea un script que pida al usuario la fecha de su nacimiento (para saber su cumpleaños) y le indique su edad actual.
*/

let fechaNacimiento = prompt("Introduce la fecha de tu nacimiento en estos formatos estos DD-MM-YYYY, DD/MM/YYYY o DD MM YYYY: ")

let separar = "";

if (fechaNacimiento.includes("-")) {

    separar = "-";

} else if (fechaNacimiento.includes("/")) {

    separar = "/";

} else if (fechaNacimiento.includes(" ")) {
    separar = " ";
} else {
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

let fechaCumple=new Date(day,month,year);






