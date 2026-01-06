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
    
    // La base: Lee el valor de cualquier input
    leer(id) {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.error(`Ojo: No existe ningún input con el id: ${id}`);
            return "";
        }
        return elemento.value.trim();
    }

    // Para números (Edad, Unidades, etc.)
    leerEntero(id) {
        const valor = this.leer(id);
        const entero = parseInt(valor);
        if (isNaN(entero)) {
            throw new Error("Debe ser un número entero");
        }
        return entero;
    }

    // Para precios o pesos (usando el Util que ya tienes)
    leerReal(id) {
        const valor = this.leer(id);
        const real = parseFloat(valor);
        if (isNaN(real)) {
            throw new Error("Debe ser un número real");
        }
        return real;
    }

    // Para nombres, apellidos, títulos (con longitud mínima)
    leerCadena(id, longitud = 1) {
        const valor = this.leer(id);
        if (valor.length < longitud) {
            throw new Error(`Mínimo ${longitud} caracteres`);
        }
        return valor;
    }

    // ¡Esta es vital para el DNI e ISBN!
    leerCadenaPatron(id, patron, mensajeError) {
        const valor = this.leer(id);
        if (!patron.test(valor)) {
            throw new Error(mensajeError || "El formato no es correcto");
        }
        return valor;
    }

    // Para los select (como el género literario o tipo de envío)
    leerDesplegable(id) {
        const valor = this.leer(id);
        if (valor === "" || valor === "0") { // Suponiendo que '0' es la opción por defecto
            throw new Error("Debes seleccionar una opción");
        }
        return valor;
    }
}




