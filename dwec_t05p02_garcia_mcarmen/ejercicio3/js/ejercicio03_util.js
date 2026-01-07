console.log("T04 - Ejercicio 0X");

class Util {
    static validarEntero(valor) {
        if (valor === "" || valor === null) return false;
        return Number.isInteger(Number(valor));
    }

    static validarReal(valor) {
        if (valor === null || valor === undefined || String(valor).trim() === "") return false;
        return Number.isFinite(Number(valor));
    }

    
    static validarFecha(valor) {
        if (!valor) return false;
        const fecha = new Date(valor);
        return !isNaN(fecha.getTime());
    }

    static crearFecha(valor) {
        return new Date(valor);
    }

    static validarTitulo(titulo) {
        return typeof titulo === "string" && titulo.length >= 1;
    }

    static validarNombrePersona(nombre) {
        let patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
        return patronNombre.test(nombre) && nombre.length >= 3;
    }

    static validarDireccion(direccion){
        let isValid=false;
        let patronDireccion=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s]+$/;

        if(patronDireccion.test(direccion)&&direccion.length>=3){
            isValid=true;
        }

        return isValid;
    }

    static validarPrecio(precio) {
        return this.validarReal(precio) && Number(precio) >= 0;
    }

    static validarTamanoArchivo(tamano) {
        return this.validarReal(tamano) && tamano > 0;
    }
    static validarFormato(formatoLeido,setFormatosValidos){
        let isFormat=false;
        if(setFormatosValidos.has(formatoLeido)){
            isFormat=true;
        }
        return isFormat;
    }

    static validarPeso(peso) {
        return this.validarReal(peso) && peso > 0;
    }

    static validarStock(stock) {
        return this.validarEntero(stock) && stock >= 0;
    }

    static validarDimensiones(dimensiones) {
        let patronDimensiones = /^\d+x\d+x\d+$/;
        return patronDimensiones.test(dimensiones);
    }

    static esMesPromocion(fechaStr, array_meses_promocion) {
        if (this.validarFecha(fechaStr)) {
            const date = this.crearFecha(fechaStr);
            return array_meses_promocion.includes(date.getMonth());
        }
        return false;
    }

    static validarGenero(generoLeido, setGenerosValidos) {
        return setGenerosValidos.has(generoLeido);
    }

    static validarDiasEnvio(dias) {
        return this.validarEntero(dias) && dias >= 1 && dias <= 31;
    }
}