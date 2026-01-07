let tienda;//global

document.addEventListener("DOMContentLoaded", () => {
    tienda = Tienda.getInstancia("carmen");
    tienda.cargarDatosPrueba();



    if (document.getElementById("table-libros")) {
        pintarTabla(tienda.libros.listaLibros);
        activarBuscador();
    }

    if (document.getElementById("tabla-clientes")) {
        actualizarVistaClientes();
        configurarFormularioClientes();
    }

    if (document.getElementById("formLibro")) {
        configurarEventosFormulario();
        cargarGenerosDesdeSet();
        actualizarSelectAutores();

    }


});

function cargarModalLibro(libro) {

    document.getElementById("detalle-isbn").textContent = libro.isbn;
    document.getElementById("detalle-titulo").textContent = libro.titulo;
    document.getElementById("detalle-autor").textContent =
        libro.autores.map(a => a.nombre).join(", ");
    document.getElementById("detalle-genero").textContent = libro.genero;
    document.getElementById("detalle-precio").textContent = libro.precio + " €";
    document.getElementById("detalle-tipo").textContent =
        libro instanceof Ebook ? "Ebook" : "Libro en papel";
    document.getElementById("detalle-stock").textContent =
        libro.stock ?? "Ilimitado";

}

function activarBotonesDetalle() {
    const botonesDetalle = document.querySelectorAll(".btn-detalle");

    botonesDetalle.forEach(boton => {
        boton.addEventListener("click", function () {
            // 1. Obtenemos el ISBN del atributo data que pusimos en el HTML
            const isbn = this.dataset.isbn;

            // 2. REUTILIZAMOS tu gestor: usamos el método que ya programamos en la clase Libros
            const libro = tienda.libros.buscarLibroPorIsbn(parseInt(isbn));

            // 3. Si lo encuentra, cargamos los datos en el Modal
            if (libro) {
                cargarModalLibro(libro);
            } else {
                console.error("No se encontró el libro con ISBN: " + isbn);
            }
        });
    });
}

// JS PRINCIPAL
function pintarTabla(libros) {
    const tabla = document.getElementById("table-libros");
    // si no existe la tabla de libros no estoy en la primera pagina y me salgo de la funcion pra quie no explote
    if (!tabla) return;
    let tbody = tabla.querySelector("tbody");

    if (!tbody) {
        tbody = document.createElement("tbody");
        tabla.appendChild(tbody);
    }
    tbody.innerHTML = ""; // Limpiamos rápido

    const librosOrdenados = tienda.obtenerLibrosOrdenados(libros);

    librosOrdenados.forEach(libro => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${libro.isbn}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autores.map(a => a.nombre).join(", ")}</td>
            <td>${libro.genero}</td>
            <td>${libro.precio} €</td>
            <td>${(libro instanceof Ebook) ? '<span class="badge bg-primary">Ebook</span>' : '<span class="badge bg-success">Papel</span>'}</td>
            <td>${libro.stock ?? "∞"}</td>
            <td class="text-center"> 
                <button class="btn btn-sm btn-info btn-detalle" data-isbn="${libro.isbn}" data-bs-toggle="modal" data-bs-target="#modalLibro">
                    <i class="bi bi-eye"></i> Ver detalles
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    activarBotonesDetalle();
}

function activarBuscador() {
    const inputBuscar = document.getElementById("buscador");
    // igual que antes si el elemento no esta es que no estoy en esa pagina y salgo de la funcion
    if (!inputBuscar) return;
    const mensajeVacio = document.getElementById("mensaje-vacio");

    inputBuscar.addEventListener("input", () => {
        const texto = inputBuscar.value.trim();

        // REUTILIZAMOS la lógica del Gestor de Libros que definimos antes
        const librosFiltrados = tienda.libros.listaLibros.filter(libro =>
            libro.titulo.toLowerCase().includes(texto.toLowerCase()) ||
            libro.genero.toLowerCase().includes(texto.toLowerCase()) ||
            libro.autores.some(a => a.nombre.toLowerCase().includes(texto.toLowerCase()))
        );

        mensajeVacio.classList.toggle("d-none", librosFiltrados.length > 0);
        pintarTabla(librosFiltrados);
    });
}

function actualizarVistaClientes() {
    const tbody = document.querySelector("#tabla-clientes tbody");
    if (!tbody) return; // Guarda de seguridad por si no estamos en la página

    tbody.innerHTML = "";

    // REQUISITO: Orden inverso (el último es el primero)
    const clientesOrdenados = tienda.clientes.listadoClientes.toReversed();

    clientesOrdenados.forEach(cliente => {
        // Usamos el método que ya tienes en Tienda
        tbody.appendChild(tienda.obtenerFilaCliente(cliente));
    });

    // IMPORTANTE: Siempre activar eventos después de pintar
    activarEventosBotones();
}


function configurarFormularioClientes() {
    const form = document.getElementById("formCliente");
    const mensajeDni = document.getElementById("mensaje-dni");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        mensajeDni.classList.add("d-none");

        // 1. REQUISITO: Validación HTML5 (usando Bootstrap)
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        const dni = document.getElementById("dni").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const direccion = document.getElementById("direccion").value.trim();

        // 2. REQUISITO: Verificación JS de DNI ÚNICO
        if (tienda.clientes.existeClientePorDNI(dni)) {
            mensajeDni.classList.remove("d-none");
            // Quitamos la clase de validación para que el usuario vea el error específico del DNI
            document.getElementById("dni").classList.add("is-invalid");
            return;
        }

        // 3. Inserción y actualización automática de la tabla
        try {
            const nuevo = new Cliente(dni, nombre, direccion);
            tienda.clientes.insertarClientes([nuevo]);

            form.reset();
            form.classList.remove("was-validated");
            document.getElementById("dni").classList.remove("is-invalid");

            actualizarVistaClientes(); // Se actualiza la tabla al insertar
            alert("Cliente insertado con éxito");
        } catch (error) {
            alert(error.message);
        }
    });
}

/**
 * Asigna eventos a los botones de la tabla (Borrar y Ver Pedidos)
 */
function activarEventosBotones() {
    document.querySelectorAll(".btn-ver-pedidos").forEach(btn => {
        btn.onclick = function () {
            const dniBusqueda = this.dataset.dni; // El DNI que viene del botón
            const clienteEncontrado = tienda.clientes.buscarClientePorDNI(dniBusqueda);

            if (clienteEncontrado) {
                pintarCardsPedidos(clienteEncontrado);
            } else {
                console.error("No se encontró al cliente con DNI:", dniBusqueda);
                alert("Error: No se encuentra la información de este cliente.");
            }
        };
    });
}

/**
 * Muestra los pedidos del cliente seleccionado en el panel inferior
 */
function pintarCardsPedidos(cliente) {

    if (!cliente) {
        console.error("Error: Se ha intentado pintar pedidos de un cliente inexistente.");
        return;
    }

    const panel = document.getElementById("panel-pedidos");
    const contenedor = document.getElementById("gPedidos");

    panel.classList.remove("d-none"); // Quitamos el "oculto"
    contenedor.innerHTML = ""; // Limpiamos lo anterior

    if (cliente.listaPedidos.length === 0) {
        contenedor.innerHTML = "<p class='text-center'>Este cliente no tiene pedidos.</p>";
    } else {
        cliente.listaPedidos.forEach(pedido => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-3";
            card.innerHTML = `
                <div class="card shadow-sm h-100 border-primary">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Pedido #${pedido.id}</h5>
                        <p class="card-text">Total: <strong>${pedido.precioTotalConEnvioConIVA}€</strong></p>
                        <p class="small text-muted">Fecha: ${pedido.fecha.toLocaleDateString()}</p>
                    </div>
                </div>`;
            contenedor.appendChild(card);
        });
    }


}


// REQUISITO: Géneros desde JS (usando el SET de tu clase Util/Libro)
function cargarGenerosDesdeSet() {
    const selectGenero = document.getElementById("genero");
    if (!selectGenero) return;

    selectGenero.innerHTML = '<option value="">Seleccione un género...</option>';

    // ACCESO CORRECTO: Usamos el Set estático de la clase Libro
    Libro.GENEROS_LITERARIOS.forEach(genero => {
        const opt = document.createElement("option");
        opt.value = genero;
        opt.textContent = genero;
        selectGenero.appendChild(opt);
    });
}

// REQUISITO: Lista múltiple de autores ordenada alfabéticamente
function actualizarSelectAutores() {
    const selectAutores = document.getElementById("autoresSel");
    if (!selectAutores) return;

    selectAutores.innerHTML = "";
    // REUTILIZACIÓN: Usamos tu nueva función de la clase Tienda
    const autoresOrdenados = tienda.obtenerAutoresOrdenados(tienda.autores.listadoAutores);

    autoresOrdenados.forEach(autor => {
        const opt = document.createElement("option");
        opt.value = autor.nombre;
        opt.textContent = autor.nombre;
        selectAutores.appendChild(opt);
    });
}

function configurarEventosFormulario() {
    const form = document.getElementById("formLibro");

    // Control de visibilidad Ebook/Papel
    document.getElementById("tipoLibro").addEventListener("change", (e) => {
        document.getElementById("campo-papel").classList.toggle("d-none", e.target.value === "ebook");
        document.getElementById("campo-ebook").classList.toggle("d-none", e.target.value === "papel");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Limpiar mensajes de error previos
        document.getElementById("error-isbn").classList.add("d-none");
        document.getElementById("error-autor").classList.add("d-none");

        const isbn = document.getElementById("isbn").value.trim();
        const nombreNuevoAutor = document.getElementById("nuevoAutorNombre").value.trim();
        const tipo = document.getElementById("tipoLibro").value;

        // 1. REQUISITO: Validar ISBN único con tu gestor
        if (tienda.libros.existeLibroPorIsbn(isbn)) {
            document.getElementById("error-isbn").classList.remove("d-none");
            return;
        }

        // 2. REQUISITO: Validar Autor nuevo único
        if (nombreNuevoAutor && tienda.autores.existeAutorPorNombre(nombreNuevoAutor)) {
            document.getElementById("error-autor").classList.remove("d-none");
            return;
        }

        // 3. Validación HTML5 (Bootstrap)
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        try {
            let autorAsignado;

            // REQUISITO: Si hay autor nuevo, se crea y el libro solo tiene ese autor
            if (nombreNuevoAutor) {
                autorAsignado = new Autor(nombreNuevoAutor);
                tienda.autores.insertarAutores([autorAsignado]);
                autorAsignado = [autorAsignado];
            } else {
                // REQUISITO: Selección múltiple (convertimos nombres a objetos Autor)
                const seleccionados = Array.from(document.getElementById("autoresSel").selectedOptions);
                autorAsignado = seleccionados.map(opt => tienda.autores.buscarAutorPorNombre(opt.value));
            }

            // Crear el libro según el tipo (Herencia)
            const titulo = document.getElementById("titulo").value;
            const precio = parseFloat(document.getElementById("precio").value);
            const genero = document.getElementById("genero").value;

            let nuevoLibro;
            if (tipo === "papel") {
                const peso = document.getElementById("peso").value;
                const dimensiones = "20x15x3"; // Añade valores por defecto si faltan en el form
                const stock = 10;

                // ORDEN CORRECTO: isbn, titulo, autores, genero, precio, peso, dimensiones, stock
                nuevoLibro = new LibroPapel(isbn, titulo, autorAsignado, genero, precio, peso, dimensiones, stock);
                console.log(nuevoLibro)
            } else {
                const tamano = 500;
                const formato = "pdf";

                // ORDEN CORRECTO: isbn, titulo, autores, genero, precio, tamano, formato
                // Cambiado 'LibroEbook' por 'Ebook' que es el nombre de tu clase
                nuevoLibro = new Ebook(isbn, titulo, autorAsignado, genero, precio, tamano, formato);
                console.log(nuevoLibro)
            }

            // 4. Inserción final en la tienda
            tienda.libros.insertarLibros([nuevoLibro]);

            alert("Libro y autores guardados correctamente");
            form.reset();
            form.classList.remove("was-validated");
            actualizarSelectAutores(); // Refrescamos la lista por si hubo autor nuevo

        } catch (error) {
            // Aquí capturamos errores de validación de tus clases (ej. Precio no válido)
            alert("Error: " + error.message);
        }
    });
}




