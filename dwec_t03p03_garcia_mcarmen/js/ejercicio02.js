console.log("T03 P03 - Ejercicio 02");

function pedirDatos() {
    let inputUser;
    let numerosUser;
    let arrayNumeros=[];


    do {
        inputUser = Number(prompt("¿Cuantos numeros quieres introducir? "));
        

        for (let index = 0; index < inputUser; index++) {

            numerosUser=Number(prompt(`Introduce el numero ${index+1}`));
            arrayNumeros.push(numerosUser);
        }

    } while (inputUser != 0 || !isNaN(inputUser));

    return arrayNumeros;

}

function calcularMedia(array){
    let sumatorio=0;
    for (let index = 0; index < array.length; index++) {

        sumatorio+=array[index];
    }

    let media=sumatorio/array.length;

    return media;

}

function cacularSuperioresMedia(array,media){
    let superioresMedia=[];
    for (let index = 0; index < array.length; index++) {
        
        if(array[index]>media){
            superioresMedia.push(array[index]);
        }
        
    }
    return superioresMedia;
}

function ordenarArray(array,orden){
    

    if(orden==="asc"||orden==="ascendente"){

        for (let index = 0; index < array.length; index++) {
            
            
        }
    }
}

