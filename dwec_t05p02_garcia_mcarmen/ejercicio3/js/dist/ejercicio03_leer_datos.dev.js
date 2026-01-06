"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("T04 - Ejercicio 0X");

var LeerDatos =
/*#__PURE__*/
function () {
  function LeerDatos() {
    _classCallCheck(this, LeerDatos);
  }

  _createClass(LeerDatos, [{
    key: "leer",
    value: function leer(mensaje) {
      throw new Error("Metodo no implementado");
    }
  }, {
    key: "leerEntero",
    value: function leerEntero(mensaje) {
      throw new Error("Metodo no implementado");
    }
  }, {
    key: "leerEnteroHasta",
    value: function leerEnteroHasta(mensaje) {
      throw new Error("Metodo no implementado");
    }
  }, {
    key: "leerReal",
    value: function leerReal(mensaje) {
      throw new Error("Metodo no implementado");
    }
  }]);

  return LeerDatos;
}();

var LeerDatosForm =
/*#__PURE__*/
function (_LeerDatos) {
  _inherits(LeerDatosForm, _LeerDatos);

  function LeerDatosForm() {
    _classCallCheck(this, LeerDatosForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeerDatosForm).apply(this, arguments));
  }

  _createClass(LeerDatosForm, [{
    key: "leer",
    // La base: Lee el valor de cualquier input
    value: function leer(id) {
      var elemento = document.getElementById(id);

      if (!elemento) {
        console.error("Ojo: No existe ning\xFAn input con el id: ".concat(id));
        return "";
      }

      return elemento.value.trim();
    } // Para números (Edad, Unidades, etc.)

  }, {
    key: "leerEntero",
    value: function leerEntero(id) {
      var valor = this.leer(id);
      var entero = parseInt(valor);

      if (isNaN(entero)) {
        throw new Error("Debe ser un número entero");
      }

      return entero;
    } // Para precios o pesos (usando el Util que ya tienes)

  }, {
    key: "leerReal",
    value: function leerReal(id) {
      var valor = this.leer(id);
      var real = parseFloat(valor);

      if (isNaN(real)) {
        throw new Error("Debe ser un número real");
      }

      return real;
    } // Para nombres, apellidos, títulos (con longitud mínima)

  }, {
    key: "leerCadena",
    value: function leerCadena(id) {
      var longitud = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var valor = this.leer(id);

      if (valor.length < longitud) {
        throw new Error("M\xEDnimo ".concat(longitud, " caracteres"));
      }

      return valor;
    } // ¡Esta es vital para el DNI e ISBN!

  }, {
    key: "leerCadenaPatron",
    value: function leerCadenaPatron(id, patron, mensajeError) {
      var valor = this.leer(id);

      if (!patron.test(valor)) {
        throw new Error(mensajeError || "El formato no es correcto");
      }

      return valor;
    } // Para los select (como el género literario o tipo de envío)

  }, {
    key: "leerDesplegable",
    value: function leerDesplegable(id) {
      var valor = this.leer(id);

      if (valor === "" || valor === "0") {
        // Suponiendo que '0' es la opción por defecto
        throw new Error("Debes seleccionar una opción");
      }

      return valor;
    }
  }]);

  return LeerDatosForm;
}(LeerDatos);