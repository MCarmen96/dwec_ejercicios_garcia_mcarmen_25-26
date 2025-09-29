console.log("T03 - Ejercicio 20");

/*
    Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena. 
    Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador. 
    Usa expresiones regulares.

    * El dulce gatito parece una bola de piel bonito gatito,duerme gatito bien, bien bien
*/


let inputUser=prompt("introduce una cadena de texto: ");

let regla=/\S+/;

let expres=new RegExp(regla);

let comprobacion=inputUser.match(expres);

let longitud=comprobacion.length();

console.log("cantidad palabras "+longitud)

