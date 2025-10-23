console.log("T03 P03 - Ejercicio 12");

const categorias = [];
const estados = new Set(["toDo", "done"]);
const categoriasExistentes = new Set([]);


function añadirNuevaCategoria(matriz, categoriasExistentes) {
    let seguir = true;
    while (seguir) {
        let nombreCategoria = prompt("Introduce el nombre de la nueva categoría:");
        if (nombreCategoria && nombreCategoria.trim() !== "") {
            if (!categoriasExistentes.has(nombreCategoria)) {
                matriz.push([nombreCategoria]);
                categoriasExistentes.add(nombreCategoria);
                console.log("Categoría añadida: " + nombreCategoria);
            } else {
                console.log("Esa categoría ya existe.");
            }
        } else {
            console.log("Nombre inválido o cancelado.");
        }
        seguir = confirm("¿Quieres añadir otra categoría?");
    }
}


function añadirNuevaTarea(categoria) {
    let seguir = true;
    while (seguir) {
        let nombreTarea = prompt(`Introduce el nombre de la tarea para "${categoria[0]}":`);
        if (nombreTarea && nombreTarea.trim() !== "") {
            categoria.push([nombreTarea.trim(), "toDo"]);
            console.log("Tarea añadida: " + nombreTarea);
        } else {
            console.log("Nombre inválido o cancelado.");
        }
        seguir = confirm("¿Quieres añadir otra tarea?");
    }
}


function borrarTarea(categoria) {
    let tieneTareas = categoria.length > 1;
    if (tieneTareas) {
        let lista = "";
        for (let i = 1; i < categoria.length; i++) {
            lista += i + ". " + categoria[i][0] + " (" + categoria[i][1] + ")\n";
        }

        let borrar = prompt("Selecciona el número de tarea a borrar:\n" + lista);
        let num = Number(borrar);

        if (borrar && !isNaN(num) && num >= 1 && num < categoria.length) {
            let confirmacion = confirm("¿Seguro que quieres borrar \"" + categoria[num][0] + "\"?");
            if (confirmacion) {
                let nuevas = [];
                for (let j = 0; j < categoria.length; j++) {
                    if (j !== num) {
                        nuevas.push(categoria[j]);
                    }
                }
                while (categoria.length > 0) {
                    categoria.pop();
                }
                for (let k = 0; k < nuevas.length; k++) {
                    categoria.push(nuevas[k]);
                }
                console.log("Tarea borrada correctamente.");
            } else {
                console.log("Borrado cancelado.");
            }
        } else {
            console.log("Número no válido o cancelado.");
        }
    } else {
        console.log("No hay tareas para borrar.");
    }
}

function borrarCategoria(matriz) {
    let hayCategorias = matriz.length > 0;
    if (hayCategorias) {
        let lista = "";
        for (let i = 0; i < matriz.length; i++) {
            lista += (i + 1) + ". " + matriz[i][0] + "\n";
        }

        let opcion = prompt("Selecciona la categoría a borrar:\n" + lista);
        let num = Number(opcion);

        let dentroRango = !isNaN(num) && num >= 1 && num <= matriz.length;
        if (opcion && dentroRango) {
            let categoria = matriz[num - 1];
            let puedeBorrar = false;
            if (categoria.length === 1) {
                puedeBorrar = true;
            } else {
                let todasDone = true;
                for (let j = 1; j < categoria.length; j++) {
                    if (categoria[j][1] !== "done") {
                        todasDone = false;
                    }
                }
                if (todasDone) {
                    puedeBorrar = true;
                }
            }

            if (puedeBorrar) {
                let confirmar = confirm("¿Seguro que quieres borrar \"" + categoria[0] + "\"?");
                if (confirmar) {
                    let nuevas = [];
                    for (let z = 0; z < matriz.length; z++) {
                        if (z !== num - 1) {
                            nuevas.push(matriz[z]);
                        }
                    }
                    while (matriz.length > 0) {
                        matriz.pop();
                    }
                    for (let w = 0; w < nuevas.length; w++) {
                        matriz.push(nuevas[w]);
                    }
                    categoriasExistentes.delete(categoria[0]);
                    console.log("Categoría borrada correctamente.");
                } else {
                    console.log("Borrado cancelado.");
                }
            } else {
                console.log("No puedes borrar, hay tareas pendientes.");
            }
        } else {
            console.log("Operación cancelada o número no válido.");
        }
    } else {
        console.log("No hay categorías para borrar.");
    }
}


function buscarTareas(listaCategorias) {
    let texto = prompt("Introduce texto a buscar:");
    if (texto && texto.trim() !== "") {
        let buscar = texto.toLowerCase().trim();
        let encontradas = 0;
        console.log("\n--- Resultados para \"" + texto + "\" ---");
        for (let i = 0; i < listaCategorias.length; i++) {
            let categoria = listaCategorias[i];
            for (let j = 1; j < categoria.length; j++) {
                let nombreTarea = categoria[j][0].toLowerCase();
                if (nombreTarea.includes(buscar)) {
                    console.log("[" + categoria[j][1] + "] " + categoria[j][0] + " (Categoría: " + categoria[0] + ")");
                    encontradas = encontradas + 1;
                }
            }
        }
        if (encontradas === 0) {
            console.log("No se encontraron tareas que contengan \"" + texto + "\".");
        } else {
            console.log("Total encontradas: " + encontradas);
        }
    } else {
        console.log("Búsqueda cancelada o texto vacío.");
    }
}

function obtenerResumenGlobal(listaCategorias) {
    console.log("\nResumen global:");
    console.log("=================");
    let hayCategorias = listaCategorias.length > 0;
    if (hayCategorias) {
        for (let i = 0; i < listaCategorias.length; i++) {
            let categoria = listaCategorias[i];
            let total = categoria.length - 1;
            let hechas = 0;
            for (let j = 1; j < categoria.length; j++) {
                if (categoria[j][1] === "done") {
                    hechas = hechas + 1;
                }
            }
            console.log(categoria[0] + " → " + total + " tareas (" + hechas + " done)");
        }
    } else {
        console.log("No hay categorías.");
    }
}

function menu3(categoria, matriz) {
    let salir = false;
    while (salir === false) {
        let texto = "";
        for (let i = 1; i < categoria.length; i++) {
            texto += i + ". " + categoria[i][0] + " (" + categoria[i][1] + ")\n";
        }
        if (categoria.length === 1) {
            texto = "No hay tareas todavía.\n";
        }

        let tareasCount = categoria.length - 1;
        let opcion = prompt(
            "Menú 3. Categoría " + categoria[0] + "\n=====\n" +
            texto +
            (tareasCount + 1) + ". Añadir nueva tarea\n" +
            (tareasCount + 2) + ". Borrar tarea\n" +
            (tareasCount + 3) + ". Atrás\n\n" +
            "Introduce número(s) para marcar como done, separados por comas (ej: 1,3)"
        );

        let entradaValida = opcion && opcion.trim() !== "";
        if (entradaValida) {
            let entrada = opcion.replace(/\s+/g, "");
            let partes = entrada.split(",");
            let indices = [];
            for (let i = 0; i < partes.length; i++) {
                let n = Number(partes[i]);
                if (!isNaN(n)) {
                    indices.push(n);
                }
            }

            if (indices.length > 0) {
                for (let i = 0; i < indices.length; i++) {
                    let n = indices[i];
                    if (n >= 1 && n <= tareasCount) {
                        if (categoria[n][1] === "done") {
                            console.log("La tarea \"" + categoria[n][0] + "\" ya estaba completada.");
                        } else {
                            categoria[n][1] = "done";
                            console.log("Tarea \"" + categoria[n][0] + "\" marcada como done.");
                        }
                    }
                }
            } else {
                let num = Number(entrada);
                if (!isNaN(num)) {
                    if (num === tareasCount + 1) {
                        añadirNuevaTarea(categoria);
                    } else if (num === tareasCount + 2) {
                        borrarTarea(categoria);
                    } else if (num === tareasCount + 3) {
                        salir = true;
                    } else {
                        console.log("Opción no válida.");
                    }
                } else {
                    console.log("Entrada no válida.");
                }
            }
        } else {
            salir = true;
        }
    }
}


function menu2(matriz) {
    let salir = false;
    while (salir === false) {
        let texto = "";
        for (let i = 0; i < matriz.length; i++) {
            texto += (i + 1) + ". " + matriz[i][0] + "\n";
        }

        let opcion = prompt(
            "Menú 2\n======\n" +
            texto +
            (matriz.length + 1) + ". Buscar tareas\n" +
            (matriz.length + 2) + ". Resumen global\n" +
            (matriz.length + 3) + ". Atrás"
        );

        let entradaValida = opcion && opcion.trim() !== "";
        if (entradaValida) {
            let num = Number(opcion);
            if (!isNaN(num)) {
                if (num >= 1 && num <= matriz.length) {
                    menu3(matriz[num - 1], matriz);
                }
                if (num === matriz.length + 1) {
                    buscarTareas(matriz);
                }
                if (num === matriz.length + 2) {
                    obtenerResumenGlobal(matriz);
                }
                if (num === matriz.length + 3) {
                    salir = true;
                }
            } else {
                console.log("Opción no válida.");
            }
        } else {
            salir = true;
        }
    }
}


function menuPrincipal(matriz) {
    let salir = false;
    while (salir === false) {
        let opcion = prompt("Menú 1\n======\n1. Listar categorías\n2. Añadir nueva categoría\n3. Borrar categoría\n4. Salir");
        let num = Number(opcion);
        if (opcion && !isNaN(num)) {
            if (num === 1) {
                menu2(matriz);
            }
            if (num === 2) {
                añadirNuevaCategoria(matriz, categoriasExistentes);
            }
            if (num === 3) {
                borrarCategoria(matriz);
            }
            if (num === 4) {
                salir = true;
                console.log("Saliendo del programa...");
            }
        } else {
            console.log("Opción no válida o cancelada.");
        }
    }
}


if (categorias.length === 0) {
    let nombre = prompt("Introduce el nombre de la primera categoría:");
    let nombreValido = nombre && nombre.trim() !== "";
    if (nombreValido) {
        categorias.push([nombre.trim()]);
        categoriasExistentes.add(nombre.trim());
        let pregunta = confirm("¿Quieres añadir tareas a esta categoría?");
        if (pregunta) {
            añadirNuevaTarea(categorias[0]);
        }
    } else {
        console.log("No se creó la categoría inicial.");
    }
}

menuPrincipal(categorias);
