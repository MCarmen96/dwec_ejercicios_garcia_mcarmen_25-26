console.log("T03 P03 - Ejercicio 10");

const datosEquipos = [
    ["Equipo", "pts", "pj", "pg", "pe", "pp"],
    ["Levante", 40, 14, 13, 1, 0],
    ["Malaga", 37, 14, 12, 1, 1],
    ["Eibar", 34, 14, 11, 1, 2],
    ["Cordoba", 27, 14, 8, 3, 3]];

    let opcion;
function equipoLider(matriz) {

    let puntosMaximo = 0;
    let lider;

    for (let i = 1; i < matriz.length; i++) {

        if (matriz[i][1] > puntosMaximo) {
            puntosMaximo = matriz[i][1];
            lider = matriz[i][0];
        }
    }
    return lider;

}

function equipoConMasPartidosPerdidos(matriz) {

    let partidosPerdidos = matriz[1][5];
    let NombreEquipo = matriz[1][0];

    for (let index = 1; index < matriz.length; index++) {

        if (matriz[index][5] > partidosPerdidos) {
            NombreEquipo = matriz[index][0];
        }
    }

    return NombreEquipo;

}

function equipoConMasPartidosGanados(matriz) {
    let partidosGanados = matriz[1][3];
    let NombreEquipo = matriz[1][0];

    for (let index = 0; index < matriz.length; index++) {

        if (matriz[index][3] > partidosGanados) {
            NombreEquipo = matriz[index][0];
        }
    }

    return NombreEquipo;
}

function mostrarClasificacion(matriz) {

    console.log("--CLASIFICACION--");
    console.table(matriz);

}

function añadirEquipo(matriz) {

    let nombre;
    let partidosGanados;
    let partidosPerdidos;
    let partidosEmpatados;
    let partidosJugados;

    do {
        nombre = prompt("Nombre del equipo: ");
        partidosGanados = Number(prompt("Partidos ganados: "));
        partidosPerdidos = Number(prompt("Partidos perdidos: "));
        partidosEmpatados = Number(prompt("Partidos empatados: "));

        partidosJugados = partidosGanados + partidosEmpatados + partidosPerdidos;

    } while (partidosJugados > matriz[1][2] || nombre == "" || partidosGanados == "" || partidosPerdidos == "" || partidosEmpatados == "");

    let puntosTotales = 0;


    if (partidosGanados > 0) {
        puntosTotales += (3 * partidosGanados);
    }

    if (partidosEmpatados > 0) {
        puntosTotales += partidosEmpatados;
    }

    let nuevoEquipo = [nombre, puntosTotales, partidosJugados, partidosGanados, partidosPerdidos, partidosPerdidos];

    matriz.push(nuevoEquipo);

    console.log(`--CLASIFICACION CON NUEVO EQUIPO-> ${nombre}`);
    console.table(matriz);
    return matriz;
}

function ordenarClasificacion(matriz){

        matriz
    
}

function actualizarDatos(matriz) {

    let nombreEqp;
    let prtdGanados;
    let prtdPerdido;
    let prtdEmpatado;
    let prtJugados = 0;
    let puntosTotales=0;

    do {

        nombreEqp = prompt("Introduce el nombre del equipo:");

    } while (nombreEqp == "");

    for (let index = 1; index < matriz.length; index++) {

        if (nombreEqp == matriz[index][0]) {

            console.log("Equipo encontrado" + nombreEqp);
            prtdGanados = Number(prompt("Partidos ganados:"));
            prtdEmpatado = Number(prompt("Partidos emepatados:"));
            prtdPerdido = Number(prompt("Partidos empatados:"));

            prtJugados = prtdGanados + prtdEmpatado + prtdPerdido;

            if(prtdGanados>0){
                puntosTotales+=3*prtdGanados;
            }else{
                console.log("No ha ganado ningun partido");
            }

            if(prtdEmpatado>0){
                puntosTotales+=prtdEmpatado;
            }else{
                console.log("No ha empatado ningun partido");
            }


            matriz[index][1]+=puntosTotales;
            matriz[index][2]+=prtJugados;
            matriz[index][3]+=prtdGanados;
            matriz[index][4]+=prtdEmpatado;
            matriz[index][5]+=prtdPerdido;

            ordenarClasificacion(matriz);

        } else {
            console.log("El equipo introducido no esta en la clasificacion");
        }
    }

    return matriz;

}


console.table(datosEquipos);

do {

    opcion = Number(prompt("MENU\n1.Equipo lider\n2.Equipo partidos perdidos\n3.Equipos partidos ganados\n4.Mostrar clasificacion\n5.Añadir equipo\n6.Actualizar datos\n0.Salir"));

    switch (opcion) {
        case 1:

            console.log("Equipo lider: " + equipoLider(datosEquipos));
            break;
        case 2:
            console.log("Equipo con mas partidos perdidos: " + equipoConMasPartidosPerdidos(datosEquipos));
            break;
        case 3:
            console.log("Equipo con mas partidos ganados: " + equipoConMasPartidosGanados(datosEquipos));
            break;
        //case 4:
        //console.log("Lider: "+equipoLider(datosEquipos)+"\n Equipo con mas partidos ganados: "+equipoConMasPartidosGanados(datosEquipos)+"\n quipo con mas partidos perdidos: "+equipoConMasPartidosPerdidos(datosEquipos));
        //break;
        case 4:
            console.log("Clasificacion: " + mostrarClasificacion(datosEquipos));
            break;
        case 5:
            console.log(añadirEquipo(datosEquipos));
        case 6:
            console.log("Jornada actualizada: "+actualizarDatos(datosEquipos));
            break;
        case 7:
            console.log("sorted "+ordenarClasificacion(datosEquipos));
        default:
            console.log("No valida");
    }


} while (opcion < 0 || opcion > 5);


