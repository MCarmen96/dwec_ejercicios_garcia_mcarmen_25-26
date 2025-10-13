console.log("T03 P03 - Ejercicio 12");

const categorias = [];
const estados = new Set(["toDo", "done"]);
let nombreCategoria;


function mostrarMenu1(matriz) {

    let opcionMenu = Number(prompt("MENU 1\n====\n1.Listar categorias\n2.Añadir nueva categoria\n3.Borrar categoria\n4.Salir"));

    switch (opcionMenu) {
        case 1:
            //listarCategorias();
            break;
        case 2:
            //añadirNueveCategoria();
            break;
        case 3:
            //eliminarCategoria();
            break;
        case 4:
            console.log("saliendo de menu edicion categorias......");
            break;
        default:
            console.log("opcion no valida......");
    }
}

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

            if(nombreTarea&&nombreTarea.toLocaleLowerCase!=="n"&&nombreTarea.toLocaleLowerCase()!=="no"){
                console.log(`Tarea ${nombreTarea} añadida a ${categoria}`);
            }

        } while (nombreTarea&&nombreTarea.toLocaleLowerCase() !== "n" && nombreTarea.toLocaleLowerCase() !== "no");

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

function añadirNueveCategoria(matriz) {
    let nombreCategoria;

    do{
        
    }while();
}

// * 1 pedir categorias
do {
    nombreCategoria = prompt("Introduce el nombre de la nueva categoria: ");
    const categoriaArray = [nombreCategoria];
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
    //añadirNueveCategoria();
} else {
    console.log("no quiere añadir otra categoria");
}

if (categorias.length >= 1) {
    //mostrarMenu1();
}