document.addEventListener("DOMContentLoaded",()=>{
    const tienda=Tienda.getInstancia("carmen");
    tienda.cargarDatosPrueba();

    let tablaHtml=document.getElementById("table-libros");
    const tbody = tienda.mostrarCatalogoLibros();
    tablaHtml.appendChild(tbody);

    const butonModal=document.querySelectorAll(".btn-detalle");

    butonModal.forEach(buton=>{
        buton.addEventListener("click",function(){
            const isbn=this.dataset.isbn;
            const libro=tienda.libros.listaLibros.find(lib=>lib.isbn==isbn);
            cargarModalLibro(libro);
        })
    })


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

