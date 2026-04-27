console.log("T04 - LEERDATOS patrón 'Strategy' ");

class LeerDatos {


    leerEntero(mensaje_o_id) {
        throw new Error("Método no implementado");
    }

    leerEnteroHasta(mensaje_o_id) {
        throw new Error("Método no implementado");
    }

    leerReal(mensaje_o_id) {
        throw new Error("Método no implementado");
    }

    leerEnteroEntre(mensaje_o_id, min, max) {
        throw new Error("Método no implementado");
    }

    leerEnteroEntreHasta(mensaje_o_id, min, max) {
        throw new Error("Método no implementado");
    }

    leerCadena(mensaje_o_id, longitud, patron) {
        throw new Error("Método no implementado");
    }

    leerCadenaHasta(mensaje_o_id, longitud, patron) {
        throw new Error("Método no implementado");
    }


}

class LeerDatosPrompt extends LeerDatos {

    leerEntero(mensaje_o_id) {

        const posibleEntero = prompt(mensaje_o_id);
        if (posibleEntero === null) {
            throw new Error("[LeerDatosPrompt]->Entrada cancelada por el usuario.");
        }

        if (posibleEntero.trim() === "") {
            throw new Error("[LeerDatosPrompt]->El valor no puede estar vacío.");
        }

        if (!Util.validarEntero(Number(posibleEntero))) {
            throw new Error("[LeerDatosPrompt]->El valor introducido no es un numero");
        }

        return Number(posibleEntero);
    }

    leerEnteroHasta(mensaje_o_id) {

        let entero;
        let esValido = false;
        do {
            try {
                entero = this.leerEntero(mensaje_o_id);
                esValido = true;
            } catch (error) {
                console.log("Error leer entero hasta [LeerDatosPrompt]->" + error);
            }

        } while (!esValido);

        return entero;
    }

    leerReal(mensaje_o_id) {

        let posibleReal = prompt(mensaje_o_id);
        if (posibleReal === null) {
            throw new Error("[LeerDatosPrompt]->Entrada cancelada por el usuario.");
        }

        if (posibleReal.trim() === "") {
            throw new Error("[LeerDatosPrompt]->El valor no puede estar vacío.");
        }
        if (!Util.validarReal(Number(posibleReal))) {
            throw new Error(" [LeerDatosPrompt]->El valor introducido no es un numero real");
        }
        return Number(posibleReal);
    }

    leerRealHasta(mensaje_o_id) {

        let real;
        let esValido = false;
        do {
            try {
                real = this.leerReal(mensaje_o_id);
                esValido = true;
            } catch (error) {
                console.log("Error leer real hasta [LeerDatosPrompt]->" + error);
            }

        } while (!esValido);

        return real;
    }


    leerEnteroEntre(mensaje_o_id, min, max) {

        let entero = this.leerEntero(mensaje_o_id);

        if (!Util.validarRango(entero, min, max)) {
            throw new Error(`[LeerDatosPrompt]->El valor introducido no esta entre los valores: ${min} y ${max}`);
        }
        return entero;
    }

    leerEnteroEntreHasta(mensaje_o_id, min, max) {

        let entero;
        let isValid = false;
        do {
            try {
                entero = this.leerEnteroEntre(mensaje_o_id, min, max);
                isValid = true;
            } catch (error) {
                console.log("[LeerDatosPrompt]->Error leer entero hasta " + error);
            }

        } while (!isValid);
    }

    leerCadena1(mensaje_o_id) {

        let cadena = prompt(mensaje_o_id);

        if (cadena === null) {
            throw new Error("[LeerDatosPrompt]-> Entrada cancelada por el usuario.");
        }

        if (!Util.validarCadenaNoVacia(cadena)) {
            throw new Error("[LeerDatosPrompt]-> El valor introducido no tiene la longitud minima");
        }

        return cadena;
    }

    leerCadena2(mensaje_o_id, longitud) {

        let cadena = prompt(mensaje_o_id);

        if (cadena === null) {
            throw new Error("[LeerDatosPrompt]-> Entrada cancelada por el usuario.");
        }

        if (!Util.validarCadenaNoVacia(cadena)) {
            throw new Error("[LeerDatosPrompt]-> El valor introducido no tiene la longitud minima");
        }

        if (cadena.length < longitud) {
            throw new Error("[LeerDatosPrompt]->La cadena introducida no tiene la longitud minima de " + longitud);
        }

        return cadena;
    }

    leerCadena3(mensaje_o_id, longitud, cadenaPatron) {
        
        let cadena=this.leerCadena2(mensaje_o_id,longitud);

        if (!cadenaPatron.test(cadena)) {
            throw new Error("[LeerDatosPrompt]-> El valor introducido no cumple el patron: "+cadenaPatron);
        }

        return cadena;
    }

    leerCadena4(mensaje_o_id){
        let cadena = prompt(mensaje_o_id);

        if (cadena === null) {
            throw new Error("[LeerDatosPrompt]-> Entrada cancelada por el usuario.");
        }



        return cadena;
    }

    leerCadena1Hasta(mensaje_o_id) {
        let cadena;
        let isValid = false;
        do {
            try {
                cadena = this.leerCadena1(mensaje_o_id);
                isValid = true;

            } catch (error) {
                console.log("[LeerDatosPrompt]->Error leer cadena hasta " + error);
            }

        } while (!isValid);

        return cadena;
    }

    leerCadena2Hasta(mensaje_o_id, longitud) {

        let cadena;
        let isValid = false;
        do {
            try {
                cadena = this.leerCadena2(mensaje_o_id, longitud);
                isValid = true;

            } catch (error) {
                console.log("[LeerDatosPrompt]->Error leer cadena hasta con longitud " + error);
            }

        } while (!isValid);

        return cadena;
    }
    leerCadena3Hasta(mensaje_o_id, longitud, cadenaPatron) {
        let cadena;
        let isValid = false;
        do {
            try {
                cadena = this.leerCadena3(mensaje_o_id, longitud,cadenaPatron);
                isValid = true;

            } catch (error) {
                console.log("[LeerDatosPrompt]->Error leer cadena hasta con longitud y patron " + error);
            }

        } while (!isValid);

        return cadena;
    }

    leerCadena4Hasta(mensaje_o_id) {
        let cadena;
        let isValid = false;
        do {
            try {
                cadena = this.leerCadena4(mensaje_o_id);
                isValid = true;

            } catch (error) {
                console.log("[LeerDatosPrompt]->Error leer cadena hasta " + error);
            }

        } while (!isValid);

        return cadena;
    }
}


