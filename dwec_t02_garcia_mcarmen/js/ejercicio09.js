console.log("T0X - Ejercicio 0X");
let input;

function multiploDeDos(num) {
    let siMultiplo = false;
    let multiploDos = num % 2 == 0;
    if (multiploDos) {
        siMultiplo = true;
        console.log("--ES MULTIPLO DE 2--");
    } else {
        console.log("NO ES MULTIPLO DE 2");
    }
    return siMultiplo;
}
function multiploDeTres(num) {
    let siMultiplo = false;
    let multiploTres = num % 3 == 0;
    if (multiploTres) {
        siMultiplo = true;
        console.log("--ES MULTIPLO DE 3--");
    } else {
        console.log("NO ES MULTIPLO DE 3");
    }
    return siMultiplo;
}
function multiploDeCinco(num) {
    let siMultiplo = false;
    let multiploCinco = num % 5 == 0;
    if (multiploCinco) {
        siMultiplo = true;
        console.log("--ES MULTIPLO DE 5--");
    } else {
        console.log("NO ES MULTIPLO DE 5");
    }
    return siMultiplo;
}

function mostrarMenu(numero) {
    do {
        let menu = prompt("MENU\n---\n 1.1. Calcular si es múltiplo de 2. \n 2. Calcular si es múltiplo de 3. \n 3. Calcular si es múltiplo de 5.\n 4. Calcular si es múltiplo de 2, 3, y 5.\n 0. Salir");
        let opcion = Number(menu);

        if (Number.isInteger(opcion)) {
            console.log("NUMERO VALIDO");
        } else {
            console.log("NUMERO NO VALIDO");
        }

        switch (opcion) {
            case 1:
                multiploDeDos(numero);
                break;
            case 2:
                multiploDeTres(numero);
                break;
            case 3:
                multiploDeCinco(numero);
                break;
            case 4:
                multiploDeDos(input);
                multiploDeTres(input);
                multiploDeCinco(input);
                break;
            case 0:
                console.log("SALIENDO......");
            break;
            default:
                console.log("OPCION NO VALIDA");
        }

    } while (isNaN(opcion)||opcion !== 0);


}

do {
    input = prompt("Introduce un nuemro entero: ");

    if (!isNaN(input)) {
        input = Number(input);
        console.log("Es un numero");
        mostrarMenu(input);
    } else {
        console.log("no es numero, vuelve a intentarlo");
    }

} while (isNaN(input));