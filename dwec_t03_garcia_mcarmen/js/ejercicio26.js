console.log("T03 - Ejercicio 20");

/*
    Elabora un script que pida al usuario una cadena y dos letras.
    Después reemplazará una letra por otra. 
    Si la primera letra no existe se indicará un error. 
    Debes resolverlo usando el método replace() del objeto String usando expresiones regulares. 
    No debe distinguir entre mayúsculas y minúsculas. Controla esto desde la expresión regular.

    * El dulce gatito parece una bola de piel bonito gatito,duerme gatito bien, bien bien
*/

let text=prompt("Introduce una frase: ");

let letra=prompt("Introduce 2 letras: ");

let limpiar=letra.replace(/\s/g, ''); //quito los espacios interiores si ha puesto

let primeraLetra=limpiar[0];
let segundaLetra=limpiar[1];

let expresion=new RegExp(text,"i");

if(!text.match(primeraLetra)){
    
    console.log("La primera letra no esta error!!");

}else{

    let result=text.replace(primeraLetra,segundaLetra);
    console.log("el resultado del cambio es: "+result)
}
