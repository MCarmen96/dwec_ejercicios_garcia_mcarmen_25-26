document.addEventListener("DOMContentLoaded",()=>{
    const tienda=Tienda.getInstancia("carmen");
    tienda.cargarDatosPrueba();

    let tablaHtml=document.getElementById("table-libros");
    const tbody = tienda.mostrarCatalogoLibros();
    tablaHtml.appendChild(tbody);

});

