let tienda;//global

document.addEventListener("DOMContentLoaded",()=>{
    tienda=Tienda.getInstancia("carmen");
    tienda.cargarDatosPrueba();

    pintarTabla(tienda.libros.listaLibros);

    activarBuscador();


});

function cargarModalLibro(libro){

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
        boton.addEventListener("click", function() {
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

