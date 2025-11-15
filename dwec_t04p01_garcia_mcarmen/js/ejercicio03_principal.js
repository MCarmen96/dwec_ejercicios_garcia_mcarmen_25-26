console.log("T0X - Ejercicio 0X");



const aula1 = new Aula(40, "AU01", "DAW", 2);
const aula2 = new Aula(30, "AU02", "DAM", 2);
const aula3 = new Aula(40, "AU03", "REDES", 2);
const aula4 = new Aula(30, "AU04", "TELECOMUNICACIONES", 2);

const aulas=[aula1,aula2,aula3,aula4];

function funcionPrueba3() {
    let opcion;
    do {
        opcion=parseInt(prompt("Introduce el numero del aula al que quieres añadir alumnos\n 1.AU01\n 2.AU02 \n 3.AU03 \n 4.AU04 \n 5.Salir"));

        let aulaElegida=aulas[opcion-1];
        aulaElegida.matricularAlumnos();
        
    } while (opcion>=1&&opcion<=4)

}

