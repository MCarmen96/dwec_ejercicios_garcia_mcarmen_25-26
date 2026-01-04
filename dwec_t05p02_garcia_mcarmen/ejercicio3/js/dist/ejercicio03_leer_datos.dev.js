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

var LeerDatosFrom =
/*#__PURE__*/
function (_LeerDatos) {
  _inherits(LeerDatosFrom, _LeerDatos);

  function LeerDatosFrom() {
    _classCallCheck(this, LeerDatosFrom);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeerDatosFrom).apply(this, arguments));
  }

  _createClass(LeerDatosFrom, [{
    key: "leer",
    value: function leer(mensaje) {
      return prompt(mensaje);
    }
  }, {
    key: "leerEntero",
    value: function leerEntero(mensaje) {
      var entero = Number(prompt(mensaje));

      if (!Util.validarEntero(entero)) {
        throw new Error("El valor introducido no es un numero");
      }

      return entero;
    }
  }, {
    key: "leerEnteroHasta",
    value: function leerEnteroHasta(mensaje) {
      var entero;

      do {
        entero = leerEntero(mensaje);
      } while (isNaN(entero));

      return entero;
    }
  }, {
    key: "leerReal",
    value: function leerReal(mensaje) {
      var leerReal = Number(prompt(mensaje));

      if (!Util.validarReal(leerReal)) {
        throw new Error("El valor introducido no es un numero real");
      }

      return leerReal;
    }
  }, {
    key: "leerEnteroEntre",
    value: function leerEnteroEntre(mensaje, min, max) {
      var entero = leerEntero(mensaje);

      if (!entero >= min && !entero <= max) {
        throw new Error("El valor introducido no esta entre los valores".concat(min, " y ").concat(max));
      }

      return entero;
    }
  }, {
    key: "leerEnteroEntreHasta",
    value: function leerEnteroEntreHasta(mensaje, min, max) {
      var entero;

      do {
        entero = leerEnteroEntre(mensaje);
      } while (isNaN(entero));
    }
  }, {
    key: "leerCadena",
    value: function leerCadena(mensaje) {
      var leer = prompt(mensaje);

      if (leer = "" || leer.length < 1) {
        throw new Error("La cadan esta vacia y no tiene mas de un caracter");
      }

      return leer;
    }
  }, {
    key: "leerCadena",
    value: function leerCadena(mensaje, longitud) {
      var leerDato = prompt(mensaje);

      if (leerDato = "" || leerDato.length < longitud) {
        throw new Error("La cadena esta vacia o tiene la longitud minima indicada");
      }

      return leerDato;
    }
  }, {
    key: "leerCadenaPatron",
    value: function leerCadenaPatron(mensaje, longitud, patron) {
      var leerDato = prompt(mensaje);

      if (leerDato == "" || leerDato.length < longitud || !patron.test(leerDato)) {
        throw new Error("La cadena esta vacia o no tiene la longitud minima indicada o no cumple con el patron");
      }

      return leerDato;
    }
  }, {
    key: "leerCadenaHasta",
    value: function leerCadenaHasta(mensaje) {
      var leerDato;
      /*do{
        }while();*/
    }
  }]);

  return LeerDatosFrom;
}(LeerDatos);