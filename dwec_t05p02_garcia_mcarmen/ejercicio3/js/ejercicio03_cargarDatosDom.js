let tienda;//global
let clienteActual = null;
let carritoTemporal = [];
let envioSeleccionado = null;
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

    if(document.getElementById("accordionPedidos")){
        inicializarSeccionCliente();
        inicializarSeccionLibrosYPago();
        configurarBotonEnvio();
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
//pagina 4
function inicializarSeccionCliente() {
    const btnBuscar = document.getElementById("btnBuscarCliente");
    const btnCambiar = document.getElementById("btnDesmarcarCliente");
    const inputDni = document.getElementById("dniBusqueda");
    
    // Referencias a los contenedores que queremos bloquear
    const fieldsetLibros = document.getElementById("fieldsetLibros");
    const fieldsetEnvio = document.getElementById("fieldsetEnvio");
    
    // Referencias a los botones del acordeón para impedir que se abran
    const btnAcordeonLibros = document.querySelector('[data-bs-target="#collapseTwo"]');
    const btnAcordeonEnvio = document.querySelector('[data-bs-target="#collapseThree"]');

    // ESTADO INICIAL: Bloqueamos la apertura de los acordeones 2 y 3
    btnAcordeonLibros.setAttribute("disabled", "true");
    btnAcordeonEnvio.setAttribute("disabled", "true");

    btnBuscar.onclick = () => {
        const dni = inputDni.value.trim();
        const cliente = tienda.clientes.buscarClientePorDNI(dni);

        if (cliente) {
            clienteActual = cliente;
            console.log("¿Es instancia de Cliente?:", cliente instanceof Cliente); 
            console.log("Prototipo del objeto:", Object.getPrototypeOf(cliente));
            if (!(cliente instanceof Cliente)) {
                console.error("ALERTA: El objeto encontrado no es una instancia real de Cliente.");
            }
            // 1. Bloquear interfaz de búsqueda
            inputDni.readOnly = true;
            btnBuscar.classList.add("d-none");
            btnCambiar.classList.remove("d-none");

            // 2. HABILITAR acordeones (permitir que se abran)
            btnAcordeonLibros.removeAttribute("disabled");
            btnAcordeonEnvio.removeAttribute("disabled");

            // 3. HABILITAR campos internos
            fieldsetLibros.disabled = false;
            fieldsetEnvio.disabled = false;

            alert("Cliente verificado. Ya puede añadir libros al pedido.");
        } else {
            alert("Error: No se encontró ningún cliente con ese DNI.");
        }
    };

    btnCambiar.onclick = () => {
        // RESET TOTAL: Volvemos al estado bloqueado
        clienteActual = null;
        inputDni.readOnly = false;
        inputDni.value = "";
        btnBuscar.classList.remove("d-none");
        btnCambiar.classList.add("d-none");

        // Bloquear apertura y campos de nuevo
        btnAcordeonLibros.setAttribute("disabled", "true");
        btnAcordeonEnvio.setAttribute("disabled", "true");
        fieldsetLibros.disabled = true;
        fieldsetEnvio.disabled = true;
        
        // Opcional: Cerrar los acordeones si estaban abiertos
        const collapseLibros = bootstrap.Collapse.getInstance(document.getElementById('collapseTwo'));
        if (collapseLibros) collapseLibros.hide();
        
        limpiarCarrito();
    };
}

function inicializarSeccionLibrosYPago() {
    const btnAdd = document.getElementById("btnAddLibro");
    const btnPagar = document.getElementById("btnPagarPedido");

    btnAdd.onclick = () => {
        const isbn = document.getElementById("isbnBusqueda").value.trim();
        const isbnNumerico = Number(isbn); // Conversión necesaria
        const unidades = parseInt(document.getElementById("unidadesLibro").value) || 1;
        
        const libro = tienda.libros.buscarLibroPorIsbn(isbnNumerico);

        if (libro) {
            carritoTemporal.push({ libro, unidades });
            actualizarOpcionesEnvio();
            actualizarResumen(); // Llama a tu función de resumen
            btnPagar.disabled = false;
            alert("Libro añadido: " + libro.titulo);
        } else {
            alert("Error: El ISBN no existe.");
        }
    };

    // CONEXIÓN CLAVE: En lugar de definir la lógica aquí, llamamos a la función de abajo
    btnPagar.onclick = finalizarPedido; 
}

function actualizarOpcionesEnvio() {
    const selectEnvio = document.getElementById("selectEnvio");
    // Comprobamos si hay libros de papel en el carrito
    const tienePapel = carritoTemporal.some(item => item.libro instanceof LibroPapel);
    const soloEbooks = carritoTemporal.every(item => item.libro instanceof Ebook);

    // Limpiamos y rellenamos según contenido
    selectEnvio.innerHTML = '<option value="" selected disabled>Seleccione modalidad...</option>';
    
    if (soloEbooks) {
        selectEnvio.innerHTML += '<option value="digital">Entrega Digital (0.00€)</option>';
    } else {
        selectEnvio.innerHTML += '<option value="estandar">Estandar (48h) - 5.00€</option>';
        selectEnvio.innerHTML += '<option value="urgente">Urgente (24h) - 9.95€</option>';
    }
}


function finalizarPedido() {
    // 1. Validaciones previas
    if (!clienteActual) {
        alert("Debe seleccionar un cliente primero.");
        return;
    }
    if (carritoTemporal.length === 0) {
        alert("El carrito está vacío. Añada al menos un libro.");
        return;
    }

    const selectEnvio = document.getElementById("selectEnvio");
    if (!selectEnvio.value) {
        alert("Por favor, seleccione una modalidad de envío.");
        return;
    }

    try {
        // 2. CREACIÓN DEL PEDIDO
        // Pasamos 'clienteActual' (la instancia encontrada por DNI)
        const nuevoPedido = new Pedido(
            clienteActual, 
            carritoTemporal, 
            selectEnvio.value
        );
        console.log(selectEnvio.value)
        // 3. ASOCIACIÓN
        // Usamos el método de tu clase Cliente para guardar el pedido
        clienteActual.insertarPedidoCliente(nuevoPedido);
        
        // 4. FEEDBACK Y LIMPIEZA
        alert(`¡Pedido #${nuevoPedido.id} realizado con éxito!\nTotal: ${nuevoPedido.precioTotalConEnvioConIVA}€`);
        
        // Reiniciamos la página para limpiar el formulario y estados
        location.reload();

    } catch (error) {
        console.error("Error al procesar pedido:", error);
        alert("No se pudo completar el pedido: " + error.message);
    }
}
function limpiarCarrito() {
    // 1. Vaciamos el array temporal
    carritoTemporal = []; 
    
    // 2. Limpiamos los inputs de los acordeones
    document.getElementById("isbnBusqueda").value = "";
    document.getElementById("unidadesLibro").value = "1";
    document.getElementById("selectEnvio").value = "";
    
    // 3. Actualizamos la vista para que el resumen diga "No hay artículos"
    actualizarResumen();
}
function configurarBotonEnvio() {
    const btnAplicar = document.getElementById("btnAplicarEnvio");
    const selectEnvio = document.getElementById("selectEnvio");

    btnAplicar.onclick = () => {
        const valor = selectEnvio.value;
        
        if (!valor) {
            alert("Selecciona una opción de envío");
            return;
        }

        // Guardamos el valor globalmente
        envioSeleccionado = valor;
        
        // RE-PINTAMOS el resumen para que aparezca la línea nueva
        actualizarResumen(); 
        alert("Envío aplicado: " + valor);
    };
}

function actualizarResumen() {
    const contenedor = document.getElementById("resumen-compra");
    const totalBadge = document.getElementById("total-preview");
    
    if (carritoTemporal.length === 0) {
        contenedor.innerHTML = "<p class='text-muted text-center'>No hay artículos.</p>";
        totalBadge.textContent = "0.00€";
        return;
    }

    let html = '<ul class="list-group list-group-flush">';
    let totalAcumulado = 0;
    
    // 1. Líneas de libros
    carritoTemporal.forEach((item) => {
        const subtotal = item.libro.precio * item.unidades;
        totalAcumulado += subtotal;
        html += `<li class="list-group-item d-flex justify-content-between">
                    ${item.libro.titulo} (x${item.unidades})
                    <span>${subtotal.toFixed(2)}€</span>
                 </li>`;
    });

    // 2. Línea de ENVÍO (Solo si el usuario ya pulsó el botón "Aplicar")
    if (envioSeleccionado) {
        let costeEnvio = 0;
        if (envioSeleccionado === "estandar") costeEnvio = 5.00;
        if (envioSeleccionado === "urgente") costeEnvio = 9.95;
        // Digital es 0
        
        totalAcumulado += costeEnvio;
        html += `<li class="list-group-item d-flex justify-content-between bg-light fw-bold text-primary">
                    Envío (${envioSeleccionado})
                    <span>${costeEnvio.toFixed(2)}€</span>
                 </li>`;
    }
    
    html += "</ul>";
    contenedor.innerHTML = html;
    totalBadge.textContent = totalAcumulado.toFixed(2) + "€";
}


