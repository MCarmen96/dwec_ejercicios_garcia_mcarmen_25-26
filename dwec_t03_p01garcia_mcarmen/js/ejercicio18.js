console.log("T03 - Ejercicio 15");
/*
    * Crea un script que pida al usuario la fecha de su nacimiento (para saber su cumpleaños). 
    * El script mostrará si hoy es su cumpleaños y su edad. Si hoy no es su cumpleaños mostrará los días que quedan para su próximo cumpleaños.
    *Hay que verificar previamente si la fecha es correcta sin usar expresiones regulares (la fecha solo será correcta con este formato: DD/MM/YYYY).
*/

let cumple = prompt("Introduce la fecha de tu cumpleaños en este formato DD/MM/YYYY : ");
let separar = "";
if (cumple.includes("/")) {
    separar = "/";
    console.log("FECHA VALIDA");
} else {
    console.log("LA FECHA NO ES VALIDA");
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



let fechaCumple=new Date(year,month,day);

let fechaActual=new Date();

if(fechaCumple.getDay()===fechaActual.getDay() && fechaActual.getMonth()===fechaCumple.getMonth()){

    console.log("HOY ES TU CUMPLEAÑOS!");
    console.log(" ");

}


