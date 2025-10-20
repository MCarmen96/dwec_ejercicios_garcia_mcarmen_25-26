console.log("T03 - Ejercicio 20");

/*
Desarrolla un script que pida al usuario una cadena y una letra e indique cuántas veces aparece dicha letra en esa cadena. 
Si la letra no existe se indicará un error. 
Debes hacer uso del método match() del objeto String usando expresiones regulares.

    * El dulce gatito parece una bola de piel bonito gatito,duerme gatito bien, bien bien
*/

let text=prompt("Introduce un texto: ");
let letra=prompt("Introudce una palabra: ");

let regex = new RegExp(letra, 'gi');

if(text.match(regex)){

    let array=text.match(regex);
    let longitud=array.length;
    console.log(`La letra ${letra} ha aparecido ${longitud}`);

}else{
    console.log("ERROR LA LETRA NO ESTA");
}