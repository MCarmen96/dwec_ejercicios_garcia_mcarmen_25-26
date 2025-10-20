console.log("T03 - Ejercicio 08");
/*
    
¿Para qué sirve el método match(), el método search() y el método includes() del objeto String? 
Haz un ejemplo donde demuestres su uso.
https://www.w3schools.com/js/js_string_search.asp 

*/

// * MATCH
/*
    The match() method matches a string against a regular expression **

    The match() method returns an array with the matches.

    The match() method returns null if no match is found.
*/

let tex="El dulce gatito parece una bola de piel bonito gatito,duerme gatito bien, bien bien "

let search=tex.match("gatito");//devuele un array

if(search!=null){
    console.log(`LA PALABRA ${search} esta en la frase`)
}else{
    console.log("La palabra no aparece en la frase");
}

// * SEARCH -> hace distincion entre mayus y minus

/*
    Description
    The search() method matches a string against a regular expression **

    The search() method returns the index (position) of the first match.

    The search() method returns -1 if no match is found.

    The search() method is case sensitive.
*/
let position=tex.search("gatito");//devuelve la posicion de la palabra la primera vez que la encuentre

console.log("Posicion: "+position)

// * INCLUDES 

/*
    Description

        The includes() method returns true if a string contains a specified string.

        Otherwise it returns false.

        The includes() method is case sensitive.

    --Syntax
        string.includes(searchvalue, start)
    --Parameters
        searchvalue	Required. The string to search for.

    start	Optional. The position to start from.Default value is 0.


*/
let inclu=tex.includes("bien");

console.log("tiene la palabra a buscar??? "+inclu)