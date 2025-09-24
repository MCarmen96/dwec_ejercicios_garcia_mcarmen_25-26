console.log("T03 - Ejercicio 03");
/*

Elabora un script que lea una frase del usuario y una palabra. Después mostrará las veces que aparece dicha palabra en esa frase. 
Debes hacer uso de uno de los métodos del objeto String.
Si la palabra no existe se mostrará un error.

*/

let userWord=prompt("Introduce una frase: ");
let palaBuscar=prompt("introduce la palabra a buscar: ")

let palabras=userWord.split(" ");

let contador=0;

for (let index = 0; index < palabras.length; index++) {
  if(palabras[index]===palaBuscar){
    contador++;
  }
  
}

if(contador>0){

  console.log("la palabra ${palaBuscar} aparece "+contador)
}else{

  console.log("la palabra ${palaBuscar} no aparece ")
}
