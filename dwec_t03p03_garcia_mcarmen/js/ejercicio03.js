console.log("T03 P03 - Ejercicio 03");

const myArray=[3,5,1,6,8];

function cambioOrdenArrayManual(array){
    const myArrayOrdenado=[];
    
    for (let index =array.length-1; index >= 0; index--) {
        myArrayOrdenado.push(array[index]);
        
    }
    console.log(myArrayOrdenado);

}

cambioOrdenArrayManual(myArray);

const ordenado=myArray.sort(function(a,b){return a-b});

console.log("array con sort ordenado: "+ordenado);