console.log("T03 - Ejercicio 02");
/*
¿Qué diferencia hay entre el método slice(), el método substr() y el método substring(). 
Haz un ejemplo donde se aprecie la diferencia entre dichos métodos.
*/


//The slice() method returns selected elements in a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

let objetos=["lapiz", "mesa", "portatil", "mierda", "appel", "vetealcarajo"];

console.log(objetos.slice(2));

let palab="Miercoles";
let result=palab.substr(2,5);
console.log("substring: "+result);

let pal2="subnormal";
let response=pal2.substring(3);
console.log("substring:: "+response)
