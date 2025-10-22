console.log("T03 P03 - Ejercicio 12");

const categorias = [];
const estados = new Set(["toDo", "done"]);
const categoriasExistentes = new Set([]);
let nombreCategoria;

function añadirNuevaTarea(categoria) {
    let nombreTarea;
    let seguir=true;

    do{
        nombreTarea=prompt(`Introduce el nombre de la tarea para la categoria "${categoria[0]}" n/no para salir`);

        if(nombreTarea&&nombreTarea.trim()!==""){
            categoria.push([nombreTarea,"toDo"])
        }else{
            console.log("entrada no valida");
        }

        seguir=confirm("Quieres añadir una nueva tarea a esta categoria??");
    }while(seguir);
}

function añadirNuevaCategoria(matriz, categoriasExistentes) {
    let nombreCategoria;
    let seguir=true;

    do {
        nombreCategoria = prompt("Introduce el nombre de la nueva categoria: ");

        if (categoriasExistentes.has(nombreCategoria)) {
            console.log(`La categoria ${nombreCategoria} ya existe vuelve a introducir otro nombre`);

        } else {
            matriz.push([nombreCategoria]);
            console.log(`Nueva categoria añadida ${nombreCategoria}`);
        }

        seguir=confirm("Quieres añadir otra categoria???");

    } while (seguir);

}

function menu2(matriz) { 
    let lista = "";
    for (let i = 0; i < matriz.length; i++) {
        //monto una lista numerada de las categorias que hay en la matriz
        lista += `${i + 1}. ${matriz[i][0]}\n`;
    }

    let opcion =Number(prompt(`Menu 2\n======\n${lista}${matriz.length + 1}. Atrás`));

    if (opcion >= 1 && opcion <= matriz.length) {
        // categoría seleccionada
        let categoriaSeleccionada = matriz[opcion - 1];
        console.log(`Has seleccionado la categoría: ${categoriaSeleccionada[0]}`);
        menu3(categoriaSeleccionada, matriz);
    } else if (opcion === matriz.length + 1) {
        //volver a al menu 1
        menuPrincipal(matriz);
    } else {
        console.log("Opción no válida");
        //vuelvo a mostrar el menu si la opcion no es valida
        menu2(matriz);
    }
}
function menu3(categoria, matriz) {

    let nombreCategoria = categoria[0];
    let tareas = categoria.slice(1); // guardo los arrays que hay en la categoria
    let listaTareas;

    if (tareas.length === 0) {
        listaTareas = "No hay tareas todavía.\n";
    } else {
        for (let i = 0; i < tareas.length; i++) {
            listaTareas += `${i + 1}. ${tareas[i][0]} (${tareas[i][1]})\n`;
        }
    }

    let opcion = Number(prompt(
        `Menu 3. Categoría ${nombreCategoria}\n======\n${listaTareas}\n ${tareas.length + 1}. Añadir nueva tarea\n${tareas.length + 2}. Borrar tarea\n${tareas.length + 3}. Atrás`
    ));

    if(opcion>=1&&opcion<=tareas.length){
        
        let index=opcion;
        if(categoria[index][1]==="done"){
            console.log(`Tarea ${categoria[index][0]} ya esta completada`);
        }else{
            categoria[index][1]="done";
            console.log(`Tarea ${categoria[index][0]} marcada como done`);
        }

        //vuelvo a mostrar el menu
        menu3(categoria,matriz);

    }

    switch (opcion) {
        case (tareas.length + 1):
            añadirNuevaTarea(nombreCategoria);
            menu3(categoria, matriz);
            break;

        case (tareas.length + 2):
            borrarTarea(categoria);
            menu3(categoria, matriz);
            break;
        case (tareas.length + 3):
            menu2(matriz);
            break;
        default:
            console.log("Opción no válida");
            menu3(categoria, matriz);
    }
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




function menuPrincipal(matriz) {

    let opcionMenu = Number(prompt("MENU 1\n====\n1.Listar categorias\n2.Añadir nueva categoria\n3.Borrar categoria\n4.Salir"));

    switch (opcionMenu) {
        case 1:
            menu2(categorias);
            break;
        case 2:
            añadirNuevaCategoria(matriz, categoriasExistentes);
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
    menuPrincipal(categorias);
}