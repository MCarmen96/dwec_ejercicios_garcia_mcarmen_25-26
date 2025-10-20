console.log("T03 P03 - Ejercicio 12");

const categorias = [];
const estados = new Set(["toDo", "done"]);
const categoriasExistentes = new Set([]);
let nombreCategoria;
function añadirNuevaTarea(matriz, categoria, estados) {

    let estadoTarea;
    let nombreTarea;
    let encontradaCategoria = false;
    let añadirTarea = false;
    let filaCategoria;
    let tareaCompleta = [];

    for (let fila = 0; fila < matriz.length; fila++) {

        if (matriz[fila][0] === categoria) {
            encontradaCategoria = true;
            filaCategoria = fila;
        }
    }

    if (encontradaCategoria) {
        do {
            nombreTarea = prompt(`Nombre de la tarea a añadir a la categoria ${categoria} si no quieres añadir mas tareas n/no: `);

            if (nombreTarea && nombreTarea.toLocaleLowerCase !== "n" && nombreTarea.toLocaleLowerCase() !== "no") {
                console.log(`Tarea ${nombreTarea} añadida a ${categoria}`);
            }

        } while (nombreTarea && nombreTarea.toLocaleLowerCase() !== "n" && nombreTarea.toLocaleLowerCase() !== "no");

        do {
            estadoTarea = prompt("El estado de la tarea puede ser \"toDo\" o \"done\": ");
        } while (!estados.has(estadoTarea));

    } else {
        console.log("La categoria no se ha encotrado.....");
    }

    tareaCompleta = [nombreTarea, estadoTarea];
    console.log(`Añadiendo tarea ${nombreTarea} con estado ${estadoTarea} a la categoria ${categoria}`);
    matriz[filaCategoria].push(tareaCompleta);

    return matriz;
}

function añadirNueveCategoria(matriz, categoriasExistentes) {
    let nombreCategoria;
    let seguir = false;

    do {
        nombreCategoria = prompt("Introduce el nombre de la nueva categoria si no quieres añadir mas no/NO: ");

        if (nombreCategoria.toLowerCase() == "n" || nombreCategoria == "no") {
            console.log("no quiere añadir mas catgorias");
        } else if (categoriasExistentes.has(nombreCategoria)) {
            console.log(`La categoria ${nombreCategoria} ya existe vuelve a introducir otro nombre`);

        } else {
            matriz.push([nombreCategoria]);
            console.log(`Nueva categoria añadida ${nombreCategoria}`);
        }

    } while (nombreCategoria.toLowerCase() !== "n" && nombreCategoria.toLowerCase() != "no");

}

function menuCategorias(matriz) {
    let lista = "";
    for (let i = 0; i < matriz.length; i++) {
        lista += `${i + 1}. ${matriz[i][0]}\n`;
    }

    let opcion = prompt(`Menu 2\n======\n${lista}${matriz.length + 1}. Atrás`);

    opcion = Number(opcion);

    if (opcion >= 1 && opcion <= matriz.length) {
        // categoría seleccionada
        let categoriaSeleccionada = matriz[opcion - 1];
        console.log(`Has seleccionado la categoría: ${categoriaSeleccionada[0]}`);
        menuTareasCategoria(categoriaSeleccionada, matriz);
    } else if (opcion === matriz.length + 1) {
        //volver a al menu 1
        mostrarMenu1(matriz);
    } else {
        console.log("Opción no válida");
        menuCategorias(matriz);
    }
}

function mostrarMenu1(matriz) {

    let opcionMenu = Number(prompt("MENU 1\n====\n1.Listar categorias\n2.Añadir nueva categoria\n3.Borrar categoria\n4.Salir"));

    switch (opcionMenu) {
        case 1:
            menuCategorias(categorias);
            break;
        case 2:
            añadirNueveCategoria(matriz, categoriasExistentes);
            break;
        case 3:
            eliminarCategoria(categorias);
            break;
        case 4:
            console.log("saliendo de menu edicion categorias......");
            break;
        default:
            console.log("opcion no valida......");
    }
}

function menuTareasCategoria(categoria, matriz) {
    let nombreCategoria = categoria[0];
    let tareas = categoria.slice(1); // me quedo con el array de las tareas de la categoria selecionada

    if (tareas.length === 0) {
        listaTareas = "No hay tareas todavía.\n";
    } else {
        for (let i = 0; i < tareas.length; i++) {
            listaTareas += `${i + 1}. ${tareas[i][0]} (${tareas[i][1]})\n`;
        }
    }

    let opcion = Number(prompt(
        `Menu 3. Categoría ${nombreCategoria}\n======\n${listaTareas}\n${tareas.length + 1}. Añadir nueva tarea\n${tareas.length + 2}. Marcar tareas como done\n${tareas.length + 3}. Borrar tarea\n${tareas.length + 4}. Atrás`
    ));

    switch (opcion) {
        case (tareas.length + 1):
            añadirNuevaTarea(matriz, nombreCategoria, estados);
            menuTareasCategoria(categoria, matriz);
            break;

        case (tareas.length + 2):
            marcarTareasDone(categoria);
            menuTareasCategoria(categoria, matriz);
            break;

        case (tareas.length + 3):
            borrarTarea(categoria);
            menuTareasCategoria(categoria, matriz);
            break;

        case (tareas.length + 4):
            menuCategorias(matriz);
            break;

        default:
            console.log("Opción no válida");
            menuTareasCategoria(categoria, matriz);
    }
}


function marcarTareasDone(categoria) {
    if (categoria.length <= 1) {
        console.log("No hay tareas en esta categoría.");
        return;
    }

    let tareas = categoria.slice(1);
    let lista = "";

    for (let i = 0; i < tareas.length; i++) {
        lista += `${i + 1}. ${tareas[i][0]} (${tareas[i][1]})\n`;
    }

    let seleccion = Number(prompt(
        `Selecciona el número de la tarea a marcar como done:\n${lista}`
    ));

    if (isNaN(seleccion) || seleccion < 1 || seleccion > tareas.length) {
        console.log("Número no válido.");
        return;
    }

    let tarea = tareas[seleccion - 1];

    if (tarea[1] === "done") {
        console.log(`La tarea "${tarea[0]}" ya está completada.`);
    } else {
        tarea[1] = "done";
        console.log(`Tarea "${tarea[0]}" marcada como done.`);
    }

    // Actualizar la categoría directamente (sin cosas raras)
    categoria[seleccion] = tarea;
}


function borrarTarea(categoria) {

    if (categoria.length <= 1) {
        console.log("No hay tareas en esta categoría.");
        return;
    }

    let tareas = categoria.slice(1);
    let lista = "";
    for (let i = 0; i < tareas.length; i++) {
        lista += `${i + 1}. ${tareas[i][0]} (${tareas[i][1]})\n`;
    }

    let borrar = Number(prompt(`Selecciona el número de tarea a borrar:\n${lista}`));

    if (borrar >= 1 && borrar <= tareas.length) {
        let confirmacion = prompt(`¿Seguro que quieres borrar "${tareas[borrar - 1][0]}"? (s/n)`);

        if (confirmacion.toLowerCase() === "s" || confirmacion.toLowerCase() === "si") {
            console.log(`Tarea "${tareas[borrar - 1][0]}" eliminada.`);
            tareas.splice(borrar - 1, 1);
        } else {
            console.log("Cancelado.");
        }

        categoria.splice(1, categoria.length - 1, ...tareas);
    } else {
        console.log("Número no válido.");
    }
}



// * 1 pedir categorias
do {
    nombreCategoria = prompt("Introduce el nombre de la nueva categoria: ");
    const categoriaArray = [nombreCategoria];
    //la añado al set para luego hacer las comprobaciones de si ya hay una categoria añadida con el mimso nombre
    categoriasExistentes.add(nombreCategoria);
    categorias.push(categoriaArray);

} while (categorias.length < 1 || nombreCategoria == "" || nombreCategoria == null)

// * 2 PREGUNTAR SI QUEIRES AÑADIR TAREA A ESA CATEGORIA

let pregunta1 = prompt(`Quieres añadir  tareas a la categoria ${nombreCategoria} S/N`);

if (pregunta1.toLocaleLowerCase() === "si" || pregunta1.toLocaleLowerCase() === "s") {

    añadirNuevaTarea(categorias, nombreCategoria, estados);

} else {
    console.log(`no quiere añadir tareas a la categoria ${nombreCategoria}`);
}

// * 3 PREGUNTAR SI QUEIRES AÑADIR OTRA  CATEGORIA

let pregunta2 = prompt(`Quieres añadir otra categoria S/N`);

if (pregunta2.toLocaleLowerCase() === "s" || pregunta2.toLocaleLowerCase() === "si") {
    añadirNueveCategoria(categorias, categoriasExistentes);
} else {
    console.log("no quiere añadir otra categoria");
}


if (categorias.length >= 1) {
    mostrarMenu1(categorias);
}