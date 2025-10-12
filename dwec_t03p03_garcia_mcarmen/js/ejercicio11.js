console.log("T03 P03 - Ejercicio 11");

let nombreJ1;
const jugadasJ1=[];


let nombreJ2;
const jugadasJ2=[];
//lo usamos como regla
const jugadasValidas= new Set(["piedra","papel","tijera","lagarto","spock"]);

let jugadores=new Map();

do{
    
    nombreJ1=prompt("Introduce tu nombre: ");
    let jugada;
    for (let index = 1; index <5; index++) {

        do{
            jugada=prompt(`Introduce tus jugadas ${index}\n1.piedra\n2.papel\n3.tijera\n4.lagarto\n5.spock\nEscribe la jugada ${index} que quieras,puedes introducir tantos numeros como el nombre completo de la jugada:`);
            
            switch(jugada){
                case "1": jugada="piedra"; jugadasJ1.push(jugada); break;

            }
            

        }while();
        
    }
    
}while(jugadores.has(nombreJ1));

do{
    
    nombreJ2=prompt("Introduce tu nombre: ");
    for (let index = 1; index <5; index++) {
        let jugada=prompt(`Introduce tus jugada ${index}\n1.piedra\n2.papel\n3.tijera\n4.lagarto\n5.spock\nEscribe la jugada ${index} que quieras,puedes introducir tantos numeros como el nombre completo de la jugada: `);
        jugadasJ2.push(jugada);
    }
    
}while(jugadores.has(nombreJ2));



