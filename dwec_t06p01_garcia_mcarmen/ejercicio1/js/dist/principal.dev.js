"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

console.log("T0X - Ejercicio 0X");
document.addEventListener("DOMContentLoaded", function _callee() {
  var datos, inputTexto;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cargarDatos());

        case 2:
          datos = _context.sent;
          inputTexto = document.getElementById("buscador");
          inputTexto.addEventListener('input', function () {
            buscadorPersonaje(datos);
          });
          cargarTarjetasPersonajes(datos);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});

function cargarDatos() {
  var response, datos;
  return regeneratorRuntime.async(function cargarDatos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch('https://hp-api.onrender.com/api/characters'));

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          datos = _context2.sent;
          console.log("holaa", datos);
          return _context2.abrupt("return", datos);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("Error en la peticion: ", _context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function buscadorPersonaje(datos) {
  var pError = document.getElementById("mensaje-vacio");
  var contenedor = document.getElementById("contendor-personajes");
  var inputBuscar = document.getElementById("buscador").value.trim(); // 1. Si el campo está vacío

  if (inputBuscar === "") {
    pError.classList.remove('d-none'); // Lo mostramos

    pError.classList.add('alert', 'alert-danger', 'text-danger'); // Le damos estilo de error

    pError.innerHTML = "<strong>Error:</strong> El campo de b\xFAsqueda est\xE1 vac\xEDo.";
    contenedor.innerHTML = ""; // Limpiamos la tabla

    return; // Salimos de la función
  } // 2. Si hay texto, ocultamos el error y buscamos


  pError.classList.add('d-none');
  pError.classList.remove('alert', 'alert-danger');
  var personajeEncontrado = datos.filter(function (personaje) {
    return personaje.name.toLowerCase().includes(inputBuscar.toLowerCase());
  }); // 3. Si no hay resultados tras filtrar

  if (personajeEncontrado.length === 0) {
    pError.classList.remove('d-none');
    pError.innerHTML = "No se han encontrado personajes que coincidan con \"".concat(inputBuscar, "\".");
    contenedor.innerHTML = "";
  } else {
    pintarTablaPersonaje(personajeEncontrado);
  }
}

function pintarTablaPersonaje(personajes) {
  var contenedorTabla = document.getElementById("contendor-personajes");
  contenedorTabla.innerHTML = ""; // Limpiamos
  // 1. Creamos la estructura base

  var tabla = document.createElement("table");
  tabla.className = "table table-striped"; // Si usas Bootstrap

  tabla.innerHTML = "\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Specie</th>\n                <th>House</th>\n                <th>Patronus</th>\n                <th>Alive</th>\n                <th>Favorite</th>\n            </tr>\n        </thead>\n    ";
  var bodyTable = document.createElement("tbody"); // 2. Recorremos el array de objetos (personajes)

  personajes.forEach(function (element) {
    var fila = document.createElement("tr"); // Creamos y rellenamos cada celda dentro del bucle

    var celdaName = document.createElement("td");
    celdaName.textContent = element.name;
    var celdaSpecie = document.createElement("td");
    celdaSpecie.textContent = element.species;
    var celdaHouse = document.createElement("td");
    celdaHouse.textContent = element.house || "N/A"; // Por si no tiene casa

    var celdaPatronus = document.createElement("td");
    celdaPatronus.textContent = element.patronus || "None";
    var celdaAlive = document.createElement("td");
    celdaAlive.textContent = element.alive ? "Yes" : "No";
    var celdaFavorite = document.createElement("td");
    celdaFavorite.innerHTML = "<button type=\"button\" class=\"btn btn-outline-danger\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bookmark-heart\" viewBox=\"0 0 16 16\">\n                <path fill-rule=\"evenodd\" d=\"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z\"></path>\n                <path d=\"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z\"></path>\n                </svg>\n              </button>"; // Metemos las celdas en la fila

    fila.appendChild(celdaName);
    fila.appendChild(celdaSpecie);
    fila.appendChild(celdaHouse);
    fila.appendChild(celdaPatronus);
    fila.appendChild(celdaAlive);
    fila.appendChild(celdaFavorite); // METEMOS LA FILA EN EL BODY (dentro del bucle)

    bodyTable.appendChild(fila);
  }); // 3. Ensamblamos todo el rompecabezas

  tabla.appendChild(bodyTable);
  contenedorTabla.appendChild(tabla);
}

function obtenerOchoPorCasa(datos) {
  var casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  var seleccionados = [];
  casas.forEach(function (casa) {
    // 1. Filtramos todos los personajes que pertenecen a esa casa
    var personajesDeLaCasa = datos.filter(function (p) {
      return p.house === casa;
    }); // 2. Los mezclamos aleatoriamente

    personajesDeLaCasa.sort(function () {
      return 0.5 - Math.random();
    }); // 3. Cogemos los 2 primeros y los metemos al saco

    seleccionados.push.apply(seleccionados, _toConsumableArray(personajesDeLaCasa.slice(0, 2)));
  });
  return seleccionados;
}

function cargarTarjetasPersonajes(datos) {
  var contenedor = document.getElementById("card-personajes"); // O el ID de tu sección de bienvenida
  // Mostramos un Spinner (puedes usar uno de Bootstrap)

  contenedor.innerHTML = "\n        <div class=\"text-center my-5\" id=\"spinner\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n                <span class=\"visually-hidden\">Loading...</span>\n            </div>\n            <p>Cargando personajes m\xE1gicos...</p>\n        </div>"; // Simulamos la espera de 2 segundos

  setTimeout(function () {
    var ochoElegidos = obtenerOchoPorCasa(datos);
    contenedor.innerHTML = '<div class="row row-cols-1 row-cols-md-4 g-4" id="grid-cards"></div>';
    var grid = document.getElementById("grid-cards");
    ochoElegidos.forEach(function (p) {
      grid.innerHTML += "\n                <div class=\"col\">\n                    <div class=\"card h-100 shadow\">\n                        <img src=\"".concat(p.image || 'https://via.placeholder.com/200x300?text=No+Photo', "\" class=\"card-img-top\" alt=\"").concat(p.name, "\" style=\"height: 300px; object-fit: cover;\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(p.name, "</h5>\n                            <p class=\"card-text\">\n                                <strong>Casa:</strong> ").concat(p.house, "<br>\n                                <strong>Patronus:</strong> ").concat(p.patronus || 'Desconocido', "<br>\n                                <strong>Especie:</strong> ").concat(p.species, "<br>\n                                <strong>Nacimiento:</strong> ").concat(p.yearOfBirth || 'N/A', "\n                            </p>\n                        </div>\n                    </div>\n                </div>");
    });
  }, 2000);
}