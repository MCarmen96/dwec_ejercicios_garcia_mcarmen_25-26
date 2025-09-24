console.log("T03 - Ejercicio 03");
/*

Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena. 
Después mostrará cada una de las palabras que constituyen la  cadena. 
Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador.

*/

let userWord=prompt("Introduce una frase: ");

let palabras=userWord.split(" ");

console.log("Palabras:");
palabras.forEach((palabra, i) => {
  console.log(`${i + 1}: ${palabra}`);
});
