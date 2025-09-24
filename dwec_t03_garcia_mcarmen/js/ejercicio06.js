console.log("T03 - Ejercicio 06");
/*

  Un usuario puede darte una fecha usando los siguientes formatos: "DD-MM-YYYY", "DD/MM/YYYY" o "DD MM YYYY". 
  Determina qué separador ha usado el usuario y crea un objeto Date con la fecha introducida por el usuario. 
  Después verifica si la fecha es válida.

  No puedes usar patrones.


*/

let fechaUser=prompt("Introduce la fecha en algun formato de estos DD-MM-YYYY, DD/MM/YYYY o DD MM YYYY");

let separar="-";

if(fechaUser.includes("/")){

  separar="/";

}else if(fechaUser.includes(" ")){

  separar=" ";

}else if(!fechaUser.includes(" ") && !fechaUser.includes("-") && !fechaUser.includes("/")){

  console.log("--FORMATO DE FECHA NO VALIDO--")
  
}