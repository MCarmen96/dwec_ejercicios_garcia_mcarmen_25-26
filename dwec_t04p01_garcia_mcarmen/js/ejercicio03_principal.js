console.log("T0X - Ejercicio 0X");

const aula1 = new Aula(40, "AU01", "DAW", 2);
const aula2 = new Aula(30, "AU02", "DAM", 2);
const aula3 = new Aula(40, "AU03", "REDES", 2);
const aula4 = new Aula(30, "AU04", "TELECOMUNICACIONES", 2);

function funcionPrueba3() {
    let aula
    do {
        aula = parseInt(prompt("Introuduce el numero del aula al que quieres añadir aulumnos\n 1.AU01\n 2.AU02 \n 3.AU03 \n 4.AU04 \n 5.Salir"));
        eleccionAula(aula);
    } while (aula>=1&&aula<=4)

}

function eleccionAula(aula) {
    let aulaElegida;
    switch (aula) {
        case 1:
            aulaElegida = aula1
            break;
        case 2:
            aulaElegida = aula2;
            break;

        case 3:
            aulaElegida = aula3;
            break;

        case 4:
            aulaElegida = aula4;
            break;
        default:
            console.log("opcion no valida");
    }

    insertarAlumno(aulaElegida);

}

function insertarAlumno(aula) {

    //let espacioEnAula=this.aula._maxAlumnos-this.aula._cantidadAlumnos;
    let cantidadAlumnos = prompt(`Cuantos alumnos quieres añadir al aula ${this.aula._idAula}`);

    if (cantidadAlumnos >) {
        console.log("No se pueden añadir mas alumnos del numero maximo permitido");
    } else {

        for (let index = 0; index < cantidadAlumnos; index++) {
            let nombre = prompt(`Introduce el nombre del alumno ${i + 1}:`);
            const nuevoAlumno = new Alumno(nombre);
            
            aula.insertarAlumno(nuevoAlumno);
            asignatura3.insertarAlumno(nuevoAlumno);
            asignatura4.insertarAlumno(nuevoAlumno);

            let optativa=prompt(`Asignaturas Optativas: \n 1.${asignatura8.nombre} \n 2.${asignatura7.nombre} \n 3.${asignatura6.nombre} \n4.${asignatura5.nombre}`);

        }

    }
}