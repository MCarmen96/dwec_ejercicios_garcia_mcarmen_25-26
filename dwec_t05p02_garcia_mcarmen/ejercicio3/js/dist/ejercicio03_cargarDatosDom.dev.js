"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var tienda = Tienda.getInstancia("carmen");
  tienda.cargarDatosPrueba();
  var tablaHtml = document.getElementById("table-libros");
  var tbody = tienda.mostrarCatalogoLibros();
  tablaHtml.appendChild(tbody);
  var butonModal = document.querySelectorAll(".btn-detalle");
  butonModal.forEach(function (buton) {
    buton.addEventListener("click", function () {
      var isbn = this.dataset.isbn;
      var libro = tienda.libros.listaLibros.find(function (lib) {
        return lib.isbn == isbn;
      });
      cargarModalLibro(libro);
    });
  });
});

function cargarModalLibro(libro) {}