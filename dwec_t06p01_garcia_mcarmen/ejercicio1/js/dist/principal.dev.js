"use strict";

console.log("T0X - Ejercicio 0X");
document.addEventListener("DOMContentLoaded", function _callee() {
  var datos, buttonBuscar;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cargarDatos());

        case 2:
          datos = _context.sent;
          buttonBuscar = document.getElementById("btnBuscar");
          buttonBuscar.addEventListener('click', function () {
            buscadorPersonaje(datos);
          });

        case 5:
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
  var inputBuscar = document.getElementById("buscador").value; // * me deveulve el array con el obejto encontrado

  var personajeEncontrado = datos.filter(function (personaje) {
    return personaje.name.toLowerCase().includes(inputBuscar.toLowerCase);
  });
  pintarTablaPersonaje(personajeEncontrado);
}

function pintarTablaPersonaje(personaje) {
  var contenedorTabla = document.getElementById("contendor-personajes");
  contenedorTabla.innerHTML = "";
  contenedorTabla.innerHTML = "\n        <table>\n            <thead>\n                <tr>\n                    <td>Name</td>\n                    <td>Specie</td>\n                    <td>House</td>\n                    <td>Patronous</td>\n                    <td>Alive</td>\n                </tr>\n            </thead>\n        </table>\n    ";
  var bodyTable = document.createElement("tbody");
  var fila;
  var celdaName;
  var celdaSpecie;
  var celdaHouse;
  var celdaPatronous;
  var celdaAlive;
  personaje.forEach(function (element) {
    fila = document.createElement("tr");
    celdaName = document.createElement("td");
    celdaSpecie = document.createElement("td");
    celdaHouse = document.createElement("td");
    celdaPatronous = document.createElement("td");
    celdaAlive = document.createElement("td");
    celdaName.textContent = element.name;
    celdaSpecie.textContent = element.species;
    celdaHouse.textContent = element.house;
    celdaPatronous.textContent = element.patronus;
    celdaAlive.textContent = element.alive;
  });
  fila.appendChild(celdaName);
  fila.appendChild(celdaSpecie);
  fila.appendChild(celdaHouse);
  fila.appendChild(celdaPatronous);
  fila.appendChild(celdaAlive);
  bodyTable.appendChild(fila);
  contenedorTabla.innerHTML = bodyTable;
}