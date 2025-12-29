"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var tienda = Tienda.getInstancia("carmen");
  tienda.cargarDatosPrueba();
  var tablaHtml = document.getElementById("table-libros");
  var tbody = tienda.mostrarCatalogoLibros();
  tablaHtml.appendChild(tbody);
});