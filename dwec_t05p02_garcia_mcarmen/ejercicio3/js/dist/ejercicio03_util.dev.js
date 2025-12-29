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
      var isValid = false;

      if (valor != "" || Number.isInteger(valor)) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarReal",
    value: function validarReal(valor) {
      var isValid = false;

      if (valor != "" || !isNaN(valor)) {
        isValid = true;
      }

      return isValid;
    } //modificar funcion 1 tiene que comprobar que es un formato de fecha correctp

  }, {
    key: "validarCadenaFecha",
    value: function validarCadenaFecha(valor) {
      var validFormat = false;
      var day;
      var month;
      var year;
      var partesFecha;

      if (valor.includes("-")) {
        partesFecha = valor.split("-");
        validFormat = true;
      } else {
        validFormat = false;
      }

      if (partesFecha.length == 3) {
        validFormat = true;
      }

      if (partesFecha[2].length === 4) {
        day = Number(partesFecha[0]);
        month = Number(partesFecha[1]);
        year = Number(partesFecha[2]);
      } else if (partesFecha[0].length === 4) {
        year = Number(partesFecha[0]);
        month = Number(partesFecha[1]);
        year = Number(partesFecha[2]);
      } else {
        validFormat = false;
      }

      if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
        validFormat = false;
      }

      var fecha = new Date(year, month - 1, day);

      if (fecha.getFullYear() === year && fecha.getMonth() === month - 1 && fecha.getDate() === day) {
        validFormat = false;
      }

      return validFormat;
    }
  }, {
    key: "validarFecha",
    value: function validarFecha(valor) {
      return validarCadenaFecha(valor);
    }
  }, {
    key: "crearFecha",
    value: function crearFecha(fecha) {
      var partesFecha = fecha.split("-");
      var day;
      var month;
      var year;

      if (partesFecha[2].length === 4) {
        day = Number(partesFecha[0]);
        month = Number(partesFecha[1]);
        year = Number(partesFecha[2]);
      } else if (partesFecha[0].length === 4) {
        year = Number(partesFecha[0]);
        month = Number(partesFecha[1]);
        year = Number(partesFecha[2]);
      }

      var fecha1 = new Date(year, month - 1, day);
      return fecha1;
    }
  }, {
    key: "validarTitulo",
    value: function validarTitulo(titulo) {
      var isValid = false;

      if (typeof titulo === "string" && titulo.length >= 1) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarNombrePersona",
    value: function validarNombrePersona(nombre) {
      var patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
      var isValid = false;

      if (patronNombre.test(nombre) && nombre.length >= 3) {
        isValid = true;
      }

      return isValid;
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
      var isValid = false;
      var comprobacion = validarReal(precio);

      if (comprobacion && precio > 0) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarTamanoArchivo",
    value: function validarTamanoArchivo(tamanoArchivo) {
      var isValid = false;

      if (tamanoArchivo > 0) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarPeso",
    value: function validarPeso(peso) {
      var isValid = false;

      if (peso > 0) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarStock",
    value: function validarStock(stock) {
      var isValid = false;

      if (stock > 0) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarDimensiones",
    value: function validarDimensiones(dimensiones) {
      var isValid = false;
      var patronDimensiones = /^\d+x\d+x\d+$/;

      if (patronDimensiones.test(dimensiones)) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "esMesPromocion",
    value: function esMesPromocion(fecha, array_meses_promocion) {
      var isDate = validarFecha(fecha);
      var date;
      var isMonth = false;

      if (isDate) {
        date = crearFecha(fecha);
        var month = date.getMonth();

        if (array_meses_promocion.includes(month)) {
          isMonth = true;
        }
      }

      return isMonth;
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
    key: "validarGenero",
    value: function validarGenero(generoLeido, setGenerosLeidos) {
      return setGenerosLeidos.has(generoLeido);
    }
  }, {
    key: "validarPeso",
    value: function validarPeso(peso) {
      var isValid = false;

      if (validarReal(peso) && peso > 0) {
        isValid = true;
      }

      return isValid;
    }
  }, {
    key: "validarDiasEnvio",
    value: function validarDiasEnvio(dias) {
      var isValid = false;

      if (validarEntero(dias) && dias >= 1 && dias <= 31) {
        isValid = true;
      }

      return isValid;
    }
  }]);

  return Util;
}();