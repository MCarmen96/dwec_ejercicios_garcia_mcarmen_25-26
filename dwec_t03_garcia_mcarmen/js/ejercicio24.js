console.log("T03 - Ejercicio 20");

/*
Desarrolla un script que pida al usuario una cadena de texto y una palabra.
El script deberá buscar la palabra en la cadena e indicar si está presente.
Si se encuentra, mostrará un mensaje con la posición en la que empieza la palabra. Si no está, el script ofrecerá la opción de realizar otra búsqueda (esto puede ser en bucle). 
El método search() se usará con una expresión regular para evitar distinguir entre mayúsculas y minúsculas

    * El dulce gatito parece una bola de piel bonito gatito,duerme gatito bien, bien bien
*/

let text=prompt("Introduce un texto: ");
let palabra=prompt("Introudce una palabra: ");

if(text.match(palabra,"i")){
    let position=text.search(palabra);
    console.log(`La palabra ${palabra} esta en la frase y esta en la posicion`+position);

}else{
    do{
        palabra=prompt("Introduce otra palabra a buscar: ");

    }while(text.match(palabra));
    
}