console.log("T04 - Ejercicio 0X");

class LeerDatos{

    leer(mensaje) {
        throw new Error("Metodo no implementado");
    }

    leerEntero(mensaje){
        throw new Error("Metodo no implementado");
    }
    leerEnteroHasta(mensaje){
        throw new Error("Metodo no implementado");
    }
    leerReal(mensaje){
        throw new Error("Metodo no implementado");
    }


}

class LeerDatosForm extends LeerDatos {
    leer(id) {
        const elemento = document.getElementById(id);
        return elemento ? elemento.value.trim() : "";
    }

    leerCadena(id, min = 1) {
        const valor = this.leer(id);
        if (valor.length < min) throw new Error(`Mínimo ${min} caracteres`);
        return valor;
    }

    leerEntero(id) {
        const valor = this.leer(id);
        if (!Util.validarEntero(valor)) throw new Error("Debe ser un número entero");
        return parseInt(valor);
    }

    leerPrecio(id) {
        const valor = this.leer(id);
        if (!Util.validarPrecio(valor)) throw new Error("Precio no válido");
        return parseFloat(valor);
    }

    leerDimensiones(id) {
        const valor = this.leer(id);
        if (!Util.validarDimensiones(valor)) throw new Error("Formato dimensiones: 00x00x00");
        return valor;
    }

    leerFecha(id) {
        const valor = this.leer(id);
        if (!Util.validarFecha(valor)) throw new Error("Fecha no válida");
        return valor;
    }
    
    // Método para capturar el valor de los Select (Género, etc.)
    leerDesplegable(id) {
        const valor = this.leer(id);
        if (valor === "" || valor === "0") throw new Error("Selecciona una opción");
        return valor;
    }
}




