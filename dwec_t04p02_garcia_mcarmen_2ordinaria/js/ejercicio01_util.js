console.log("T04-Util");

class Util {
    static validarEntero(valor) {
        let isValid = false;
        if (Number.isInteger(valor)) {
            isValid = true;
        }
        return isValid;
    }

    static validarReal(valor) {
        let isValid = false;
        if (typeof valor === "number" && !Number.isNaN(valor)) {
            isValid = true;
        }
        return isValid;
    }

    static validarDiasEnvio(dias) {
        let isValid = false;
        if (this.validarEntero(dias)) {
            return this.validarRango(dias, 1, 31);
        }
        return isValid;
    }

    static validarPorcentaje(numPorcentaje) {
        let isValid = false;
        if (this.validarReal(numPorcentaje)) {
            return this.validarRango(numPorcentaje, 0, 100);
        }
        return isValid;
    }

    static validarRango(number, min, max) {
        let isValid = false;
        if (number >= min && number <= max) {
            isValid = true;
        }
        return isValid;
    }

    static validarCadenaNoVacia(cadena) {
        if (typeof cadena !== "string") return false;
        return cadena.trim().length >= 1;
    }

    //modificar funcion 1 tiene que comprobar que es un formato de fecha correctp
    static validarCadenaFecha(fecha) {
        let validFormat = false;
        let partesFecha;

        if (fecha.includes("-")) {
            partesFecha = fecha.split("-");
            validFormat = true;
        } else {
            validFormat = false;
        }

        if (partesFecha.length == 3) {
            validFormat = true;
        }

        return validFormat;
    }

    static validarFecha(fecha) {
        let isValid = false;
        isValid = this.validarCadenaFecha(fecha);
        let day;
        let month;
        let year;
        let partesFecha;
        if (isValid) {
            partesFecha = fecha.split("-");
            if (partesFecha[2].length === 4) {
                day = Number(partesFecha[0]);
                month = Number(partesFecha[1]);
                year = Number(partesFecha[2]);
            } else if (partesFecha[0].length === 4) {
                year = Number(partesFecha[0]);
                month = Number(partesFecha[1]);
                day = Number(partesFecha[2]);
            }

            if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
                isValid = false;
            } else {
                let fechaAcomprobar = new Date(year, month - 1, day);

                if (
                    fechaAcomprobar.getFullYear() !== year ||
                    fechaAcomprobar.getMonth() !== month - 1 ||
                    fechaAcomprobar.getDate() !== day
                ) {
                    isValid = false;
                }
            }
        }
        return isValid;
    }

    static crearFechaDesdeCadena(cadenaFecha) {
        const partesFecha = cadenaFecha.split("-");
        let day;
        let month;
        let year;

        if (this.validarFecha(cadenaFecha)) {
            if (partesFecha[2].length === 4) {
                day = Number(partesFecha[0]);
                month = Number(partesFecha[1]);
                year = Number(partesFecha[2]);
            } else if (partesFecha[0].length === 4) {
                year = Number(partesFecha[0]);
                month = Number(partesFecha[1]);
                day = Number(partesFecha[2]);
            }
            return new Date(year, month - 1, day);
        }
        return null;
    }

    static formatearFecha(objFecha) {
        if (!(objFecha instanceof Date) || isNaN(objFecha)) {
            throw new Error("La fecha no es válida.");
        }

        let dia = String(objFecha.getDate()).padStart(2, "0");
        let mes = String(objFecha.getMonth() + 1).padStart(2, "0");
        let anio = objFecha.getFullYear();

        return `${dia}-${mes}-${anio}`;
    }

    static validarTitulo(titulo) {
        return this.validarCadenaNoVacia(titulo);
    }

    static validarNombrePersona(nombre) {
        let isValid = false;
        if (this.validarCadenaNoVacia(nombre)) {
            const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
            if (nombre.length >= 3 && patronNombre.test(nombre)) {
                isValid = true;
            }
        }

        return isValid;
    }

    static validarDireccion(direccion) {
        let isValid = false;
        if (this.validarCadenaNoVacia(direccion)) {
            if (direccion.length >= 3) {
                isValid = true;
            }
        }
        return isValid;
    }
    static validarDimensiones(dimensiones) {
        let isValid = false;

        if (this.validarCadenaNoVacia(dimensiones)) {
            let patronDimensiones = /^\d+x\d+x\d+$/;
            if (patronDimensiones.test(dimensiones)) {
                isValid = true;
            }
        }

        return isValid;
    }

    static validarPrecio(precio) {
        let isValid = false;

        if (this.validarReal(Number(precio))) {
            precio = Number(precio);

            if (precio >= 0) {
                isValid = true;
            }
        }

        return isValid;
    }

    static validarTamanoArchivo(tamanoArchivo) {
        let isValid = false;

        if (this.validarReal(Number(tamanoArchivo))) {
            tamanoArchivo = Number(tamanoArchivo);

            if (tamanoArchivo >= 0) {
                isValid = true;
            }
        }

        return isValid;
    }

    static validarPeso(peso) {
        let isValid = false;

        if (this.validarReal(Number(peso))) {
            peso = Number(peso);

            if (this.validarRango(peso, 0, Infinity)) {
                isValid = true;
            }
        }
        return isValid;
    }

    static validarStock(stock) {
        let isValid = false;
        if (this.validarEntero(Number(stock))) {
            stock = Number(stock);

            if (this.validarRango(stock, 0, Infinity)) {
                isValid = true;
            }
        }
        return isValid;
    }

    static validarUnidades(unidades) {
        return Util.validarStock(unidades);
    }

    static esMesPromocion(fecha, array_meses_promocion) {
        let isMonth = false;
        const fechaNueva = this.crearFechaDesdeCadena(fecha);
        if (fechaNueva != null) {
            let month = fechaNueva.getMonth();
            return array_meses_promocion.includes(month);
        }
        return isMonth;
    }

    static validarFormato(formatoLeido, setFormatosValidos) {
        let isFormat = false;
        if (this.validarCadenaNoVacia(formatoLeido)) {
            return setFormatosValidos.has(formatoLeido);
        }

        return isFormat;
    }

    static validarGenero(generoLeido, setGenerosLeidos) {
        let isFormat = false;
        if (this.validarCadenaNoVacia(generoLeido)) {
            return setGenerosLeidos.has(generoLeido);
        }
        return isFormat;
    }
}
