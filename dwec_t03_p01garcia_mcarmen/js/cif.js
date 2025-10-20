let cifLeroyMerlin="B84818442";
let isValidLetra=false;
let digitos=Number(cifLeroyMerlin.substring(1,8));

let digiControl=cifLeroyMerlin.slice(-1);
console.log(digiControl)
console.log(typeof(digitos))

if(cifLeroyMerlin[0]=="A"||cifLeroyMerlin[0]=="B"){
    isValidLetra=true;
}else{

    console.log("--EMPEZAMOS MAL QUE LA LETRA INICIAL NO COINCIDE CON LOS TIPOS DE ENTIDADES--")
}

let sumPar=0;
let sumImpar=0;
// PARA CALCULAR EL DIGITO DE CONTROL 
for (let i = 0; i < digitos.length; i++) {

    if(i%2==0){
        //sumo los pares
        sumPar+=digitos[i];

    }else{

        let multi=digitos[i]*2;

        if(multi>=10){

            let cadenaCifras=multi.toString();

            let digi1=cadenaCifras[0];
            let digi2=cadenaCifras[1];
            let sumaDigi=Number(digi1)+Number(digi2);
            sumImpar+=sumaDigi;

        }else{
            //si es una cifra lo sumo directamente
            sumImpar+=digitos[i];

        }
    }
    
}

let sumaTotal=sumImpar+sumPar;

let resto=sumaTotal%10;
let codeControl=10-resto;

if(codeControl===10){
    codeControl=0;
}

