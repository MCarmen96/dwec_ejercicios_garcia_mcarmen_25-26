console.log("T03 - Ejercicio 01");


function oraculo() {
    let arg = 0;
    let comprobacionNumeros;
    let values;
    let numerosValidos = [];
    if (arguments.length > 0) {
        arg++;

        for (let index = 0; index < arguments.length; index++) {

            values = arguments[index];

            comprobacionNumeros = arguNumeros(values);

            if (comprobacionNumeros != undefined) {
                numerosValidos.push(comprobacionNumeros);
            }

        }
        // segunda parte del ejercicio
        let suma = 0;
        let long=numerosValidos.length;

        let media = function (array) {
            array.forEach(element => {
                suma += element;
            });
            let total=suma/long;
            return total;
        }
        media(numerosValidos);

        let maximo=(arrayNum)=> Math.max(...arrayNum);
        let minimo=(arrayNum)=>Math.min(...arrayNum);
        maximo(numerosValidos);
        minimo(numerosValidos);

        let desviacion=calcularDesviacion(numerosValidos,media);

        let mensaje=function(media){
            if(media<30){console.log("Tu destino es entrenar más duro. Tus estadísticas están por debajo del mínimo requerido.")}
            else if(media>=30||media<=60){console.log("Estás en el camino del héroe. El valor máximo alcanzado fue X y el mínimo Y.")}
            else{desviacion.forEach(item =>{ console.log("Eres un maestro legendario. Tus desviaciones son: [${item}]") }) };
        }


    } else {
        console.log("--NO HAS PASADO ARGUMENTOS--");
    }



}


function arguNumeros(value) {

    let pattNume = /^\d+$/;

    let arrayElemntsValidos = [];

    if (!isNaN(value)) {

        arrayElemntsValidos.push(value);


    } else if (pattNume.test(value)) {

        let convertNum = Number(value);

        arrayElemntsValidos.push(convertNum);

    } else {

        console.log("--ERROR CADENA DE CARACTERES--");

    }

    return arrayElemntsValidos;


}

function calcularDesviacion(array,media){
    let desviacion=[];

    for (let index = 0; index < array.length; index++) {
        
        desviacion.push(array[index]-media);
        
    }
    return desviacion;
}

(function(){
    oraculo(1,2,3);
    oraculo("2",2,"2");
})();
