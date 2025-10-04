console.log("T03 - Ejercicio 01");
let myArray = [54, 2, 3, 12, 32, 16, 7, 76];
let opcion;
console.log(myArray);
do {

    if (myArray.length > 0) {

        opcion = Number(prompt("--QUE QUIERES HACER??--\n 1.Borrar inicio\n 2.Borrar ultimo\n 3.Borrar ambos \n 4.Volver a un estado anterior \n 5.NO hacer nada"));
        let inicio;
        let final;
        let opcionElegida;

        if (opcion == 1) {
            opcionElegida=1;
            if (myArray.length > 0) {
                console.log("ANTES DE BORRAR: "+myArray);
                console.log("Borrando el primer item....")
                inicio = myArray[0];
                myArray.shift();//quita el primero
                console.log("DESPUES DE BORRAR: "+myArray);
            } else {
                console.log("No puedes eliminar mas elementos del array");
            }

        } 
        else if (opcion == 2) {
            opcionElegida=2;
            if (myArray.length > 0) {
                console.log("ANTES DE BORRAR: "+myArray);
                console.log("Borrando el ultimo item....")
                final = myArray.length-1;
                myArray.pop();//quita el ultimo
                console.log("DESPUES DE BORRAR: "+myArray);
            } else {
                console.log("No puedes eliminar mas elementos del array");
            }

        } 
        else if (opcion == 3) {
            opcionElegida=3;
            if (myArray.length > 2) {

                console.log("ANTES DE BORRAR: "+myArray);
                console.log("Borrando el primero y ultimo item....")
                inicio = myArray[0];
                myArray.shift();
                final = myArray.length-1;
                myArray.pop();//quita el ultimo
                console.log("DESPUES DE BORRAR: "+myArray);
            } else {
                console.log("No puedes eliminar mas elementos del array");
            }


        } 
        else if (opcion == 4){

            if(opcionElegida==1){
                console.log("VOLVIENDO AL ESTADO ANTERIOR");
                myArray.unshift(inicio);
                console.log("array restaurado...."+myArray);
            } else if(opcionElegida==2){
                console.log("VOLVIENDO AL ESTADO ANTERIOR");
                myArray.push(final);
                console.log("array restaurado...."+myArray);
            } else if(opcionElegida==3){
                console.log("VOLVIENDO AL ESTADO ANTERIOR");
                myArray.unshift(inicio);
                myArray.push(final);
                console.log("array restaurado...."+myArray);
            }

        } 
        else if (opcion == 5) {
            console.log("SALIENDO.............");
        }
        else {
            console.log("no valida");
        }

    } else {
        console.log("--EL ARRAY ESTA VACIO--");
        opcion=5;
    }



} while (opcion!==5)
