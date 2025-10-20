console.log("T03 - Ejercicio 06");
/*

  Un usuario puede darte una fecha usando los siguientes formatos: "DD-MM-YYYY", "DD/MM/YYYY" o "DD MM YYYY". 
  Determina qué separador ha usado el usuario y crea un objeto Date con la fecha introducida por el usuario. 
  Después verifica si la fecha es válida.

  No puedes usar patrones.


*/

let fechaUser=prompt("Introduce la fecha en algun formato de estos DD-MM-YYYY, DD/MM/YYYY o DD MM YYYY");

let separar="";

//detector de formato de fecha
if (fechaUser.includes("-")) {
  separar= "-";
} else if (fechaUser.includes("/")) {
  separar = "/";
} else if (fechaUser.includes(" ")) {
  separar = " ";
} else {
  console.log("--FORMATO DE FECHA NO VÁLIDO--");
}
let day;
let month;
let year;

if(separar!==""){
  let fechaArray=fechaUser.split(separar);
  day=fechaArray[0];
  month=fechaArray[1]-1;
  year=fechaArray[2];
}

if(year<0){
  
  console.log("--AÑO INVALIDO--");

}else if(month<1||month>12){

  console.log("--MES INVALIDO--");

}else if(day<1||day>31){

  console.log("--DIA NO VALIDO--")

}else{

  console.log("La fecha es válida");


}
