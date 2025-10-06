console.log("T03 P03 - Ejercicio 02");

function pedirDatos() {
    let inputUser;
    let numerosUser;
    const arrayNumeros = [];


    do {
        inputUser = Number(prompt("¿Cuantos numeros quieres introducir? "));

    } while (isNaN(inputUser) || inputUser <=0);

        for (let index = 0; index < inputUser; index++) {

            numerosUser = Number(prompt(`Introduce el numero ${index + 1}`));
            arrayNumeros.push(numerosUser);
        }

    return arrayNumeros;

}

function calcularMedia(array) {
    let sumatorio = 0;
    for (let index = 0; index < array.length; index++) {

        sumatorio += array[index];
    }

    let media = sumatorio / array.length;

    return media;

}

function cacularSuperioresMedia(array, media) {
    const superioresMedia = [];
    for (let index = 0; index < array.length; index++) {

        if (array[index] > media) {
            superioresMedia.push(array[index]);
        }

    }
    return superioresMedia;
}

function ordenarArray(array, orden) {

    let valorActual;
    let posAnterior;
    const arrayOrdenado = [...array];
    if (orden === "asc" || orden === "ascendente") {

        for (let index = 1; index < array.length; index++) {

            valorActual = array[index];
            posAnterior = index - 1;

            while (posAnterior >= 0 && array[posAnterior] > valorActual) {
                arrayOrdenado[posAnterior + 1] = array[posAnterior];
                posAnterior = posAnterior - 1;

            }
            arrayOrdenado[posAnterior + 1] = valorActual;
        }
        console.log("El array ordenado de forma ascendente es: "+arrayOrdenado);

    } else if (orden === "desc" || orden === "descendente") {

        for (let index = 1; index < array.length; index++) {

            valorActual = array[index];
            posAnterior = index - 1;

            while (posAnterior >= 0 && array[posAnterior] < valorActual) {

                arrayOrdenado[posAnterior + 1] = array[posAnterior];
                posAnterior = posAnterior - 1;

            }
            arrayOrdenado[posAnterior + 1] = valorActual;
        }
        console.log("El array ordenado de forma descendente es: "+arrayOrdenado);

    }else{
        console.log("Parametro no valido ");
    }

    return arrayOrdenado;
}


const array=pedirDatos();
const arOrd=ordenarArray(array, "asc");
