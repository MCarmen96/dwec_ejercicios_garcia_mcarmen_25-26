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

function pintarTabla(libros){
    const tabla = document.getElementById("table-libros");
    tabla.querySelector("tbody")?.remove();

    const tbody = tienda.mostrarCatalogoLibros(libros);
    tabla.appendChild(tbody);

    activarBotonesDetalle();
}

function activarBotonesDetalle(){
    const butonModal=document.querySelectorAll(".btn-detalle");

    butonModal.forEach(buton=>{
        buton.addEventListener("click",function(){
            const isbn=this.dataset.isbn;
            const libro=tienda.libros.listaLibros.find(lib=>lib.isbn==isbn);
            cargarModalLibro(libro);
        })
    })
}

function activarBuscador(){

    const inputBuscar=document.getElementById("buscador");
    const mensajeVacio=document.getElementById("mensaje-vacio");

    inputBuscar.addEventListener("input",()=>{
        const texto=inputBuscar.value.toLocaleLowerCase();

        const librosFiltrados=tienda.libros.listaLibros.filter(libro=>

            libro.titulo.toLowerCase().includes(texto) || libro.genero.toLowerCase().includes(texto) ||
            libro.autores.some(a =>
                a.nombre.toLowerCase().includes(texto)
            )
        );
        if (librosFiltrados.length === 0) {
            mensajeVacio.classList.remove("d-none");
        } else {
            mensajeVacio.classList.add("d-none");
        }
        pintarTabla(librosFiltrados);
    });
}

