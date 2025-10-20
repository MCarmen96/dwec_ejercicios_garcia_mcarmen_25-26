console.log("T03 - Ejercicio 09");
/*
    Investiga sobre los métodos para redondear del objeto Math: "ceil()", "floor()" y "round()". 
    Haz un ejemplo donde los uses y se observe la diferencia entre cada uno de ellos.
*/

// * CEIL.()
/*
    Description
    The Math.ceil() method rounds a number rounded UP to the nearest integer.
*/

let numReal=33.76;
console.log("SIN CEIL: "+numReal)
console.log("Numero con ceil: "+Math.ceil(numReal));

// * FLOOR.()
/*
    Description
    The Math.floor() method rounds a number DOWN to the nearest integer.

*/

let num2=32.34;
console.log("SIN FLOOR: "+num2)
console.log("Numero con floor: "+Math.floor(num2));

// * ROUND.()
/*
    Description
    
    The Math.round() method rounds a number to the nearest integer.

    2.49 will be rounded down (2), and 2.5 will be rounded up (3).

*/
let num3=32.624;
console.log("SIN ROUND: "+num3)
console.log("Numero con round: "+Math.round(num3));