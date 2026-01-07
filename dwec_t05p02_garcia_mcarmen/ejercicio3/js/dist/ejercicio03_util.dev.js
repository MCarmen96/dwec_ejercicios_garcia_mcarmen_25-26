"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("T04 - Ejercicio 0X");

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "validarEntero",
    value: function validarEntero(valor) {
      if (valor === "" || valor === null) return false;
      return Number.isInteger(Number(valor));
    }
  }, {
    key: "validarReal",
    value: function validarReal(valor) {
      if (valor === null || valor === undefined || String(valor).trim() === "") return false;
      return Number.isFinite(Number(valor));
    }
  }, {
    key: "validarFecha",
    value: function validarFecha(valor) {
      if (!valor) return false;
      var fecha = new Date(valor);
      return !isNaN(fecha.getTime());
    }
  }, {
    key: "crearFecha",
    value: function crearFecha(valor) {
      return new Date(valor);
    }
  }, {
    key: "validarTitulo",
    value: function validarTitulo(titulo) {
      return typeof titulo === "string" && titulo.length >= 1;
    }
  }, {
    key: "validarNombrePersona",
    value: function validarNombrePersona(nombre) {
      var patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
      return patronNombre.test(nombre) && nombre.length >= 3;
    }
  }, {
    key: "validarDireccion",
    value: function validarDireccion(direccion) {
      var isValid = false;
      var patronDireccion = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s]+$/;

      if (patronDireccion.test(direccion) && direccion.length >= 3) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarPrecio",
    value: function validarPrecio(precio) {
      return this.validarReal(precio) && Number(precio) >= 0;
    }
  }, {
    key: "validarTamanoArchivo",
    value: function validarTamanoArchivo(tamano) {
      return this.validarReal(tamano) && tamano > 0;
    }
  }, {
    key: "validarFormato",
    value: function validarFormato(formatoLeido, setFormatosValidos) {
      var isFormat = false;

      if (setFormatosValidos.has(formatoLeido)) {
        isFormat = true;
      }

      return isFormat;
    }
  }, {
    key: "validarPeso",
    value: function validarPeso(peso) {
      return this.validarReal(peso) && peso > 0;
    }
  }, {
    key: "validarStock",
    value: function validarStock(stock) {
      return this.validarEntero(stock) && stock >= 0;
    }
  }, {
    key: "validarDimensiones",
    value: function validarDimensiones(dimensiones) {
      var patronDimensiones = /^\d+x\d+x\d+$/;
      return patronDimensiones.test(dimensiones);
    }
  }, {
    key: "esMesPromocion",
    value: function esMesPromocion(fechaStr, array_meses_promocion) {
      if (this.validarFecha(fechaStr)) {
        var date = this.crearFecha(fechaStr);
        return array_meses_promocion.includes(date.getMonth());
      }

      return false;
    }
  }, {
    key: "validarGenero",
    value: function validarGenero(generoLeido, setGenerosValidos) {
      return setGenerosValidos.has(generoLeido);
    }
  }, {
    key: "validarDiasEnvio",
    value: function validarDiasEnvio(dias) {
      return this.validarEntero(dias) && dias >= 1 && dias <= 31;
    }
  }]);

  return Util;
}();