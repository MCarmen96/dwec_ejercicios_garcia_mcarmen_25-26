console.log("T03 P03 - Ejercicio 10");

const datosEquipos = [
                        ["Equipo","pts","pj","pg","pe","pp"],
                        ["Levante",40, 14, 13, 1, 0], 
                        ["Malaga",37, 14, 12, 1, 1], 
                        ["Eibar",34, 14, 11, 1, 2], 
                        ["Cordoba",27, 14, 8, 3, 3] ];
let opcion;


function equipoLider(matriz) {

    let puntosMaximo=0;
    let lider;

    for (let i = 1; i < matriz.length; i++) {

        if(matriz[i][1]>puntosMaximo){
            puntosMaximo=matriz[i][1];
            lider=matriz[i][0];
        }
    }
    return lider;

}

function equipoConMasPartidosPerdidos(matriz){

    let partidosPerdidos=matriz[1][5];
    let NombreEquipo=matriz[1][0];
    
    for (let index =1; index < matriz.length; index++) {
        
        if(matriz[index][5]>partidosPerdidos){
            NombreEquipo=matriz[index][0];
        }
    }

    return NombreEquipo;

}

function equipoConMasPartidosGanados(matriz){
    let partidosGanados=matriz[1][3];
    let NombreEquipo=matriz[1][0];

    for (let index = 0; index < matriz.length; index++) {
        
        if(matriz[index][3]>partidosGanados){
            NombreEquipo=matriz[index][0];
        }
    }

    return NombreEquipo;
}

function mostrarClasificacion(matriz){
    
    console.log("--CLASIFICACION--");
    console.table(matriz);

}

function añadirEquipo(){
    let nombre=prompt("Nombre del equipo: ");
    let partidosGanados=Number(prompt("Partidos ganados: "));
    let partidosPerdidos=Number(prompt("Partidos perdidos: "));
    let partidosEmpatados=Number(prompt("Partidos empanados: "));

    let partidosJugados=partidosGanados+partidosEmpatados+partidosPerdidos;
    let puntos=0;

    if(partidosGanados>0){
        puntos+=3;
    }else{
        
    }


    
}


console.table(datosEquipos);

do {

    opcion = Number(prompt("--MENU--\n 1.Equipo lider clasifiacion\n 2.Equipo con mas partidos perdidos\n 3.Equipo con mas partidos ganados\n 4.Dime todo\n 0.Salir"));

    switch (opcion) {
        case 1:
            
            console.log("Equipo lider: " + equipoLider(datosEquipos));
            break;
        case 2:
            console.log("Equipo con mas partidos perdidos: "+equipoConMasPartidosPerdidos(datosEquipos));
            break;
        case 3:
            console.log("Equipo con mas partidos ganados: "+equipoConMasPartidosGanados(datosEquipos));
            break;
        case 4:
            console.log("Lider: "+equipoLider(datosEquipos)+"\n Equipo con mas partidos ganados: "+equipoConMasPartidosGanados(datosEquipos)+"\n quipo con mas partidos perdidos: "+equipoConMasPartidosPerdidos(datosEquipos));
            break;
        case 5:
            console.log("Clasificacion: "+mostrarClasificacion(datosEquipos));
            break;
        default:
            console.log("No valida");
    }


} while (opcion<0||opcion>5);


