console.log("T04 - Ejercicio 0X");

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
        const entero = Number(prompt(mensaje_o_id));

        let texto = prompt(mensaje_o_id);
        if (texto === null) {
            throw new Error("[LeerDatosPrompt] Entrada cancelada por el usuario.");
        }

        if (!Util.validarEntero(entero)) {
            throw new Error("El valor introducido no es un numero");
        }
        return entero;
    }

    leerEnteroHasta(mensaje_o_id) {

        let entero;
        do {
            entero = leerEntero(mensaje_o_id)

        } while (isNaN(entero));

        return entero;
    }

    leerReal(mensaje_o_id) {

        let leerReal = Number(prompt(mensaje_o_id));
        if (!Util.validarReal(leerReal)) {
            throw new Error("El valor introducido no es un numero real");
        }
        return leerReal;
    }

    leerEnteroEntre(mensaje_o_id, min, max) {

        let entero = leerEntero(mensaje_o_id);

        if (!entero >= min && !entero <= max) {
            throw new Error(`El valor introducido no esta entre los valores${min} y ${max}`);
        }
        return entero;
    }

    leerEnteroEntreHasta(mensaje_o_id, min, max) {

        let entero;
        do {
            entero = leerEnteroEntre(mensaje_o_id);
        } while (isNaN(entero))
    }

    leerCadena1(mensaje_o_id) {

        let leer = prompt(mensaje_o_id);

        if (leer == "" || leer.length <= 1 || leer === " " || leer === null || leer === undefined) {
            throw new Error("La cadena esta vacia y no tiene mas de un caracter");
        }
        return leer;
    }

    leerCadena2(mensaje_o_id, longitud) {

        let leerDato = prompt(mensaje_o_id);
        if (leerDato = "" || leerDato.length < longitud) {
            throw new Error("La cadena esta vacia o tiene la longitud minima indicada");
        }
        return leerDato;
    }

    leerCadena3(mensaje_o_id, longitud, cadenaPatron) {
        let leerDato = trim(prompt(mensaje_o_id));
        if (leerDato == "" || leerDato.length < longitud || !cadenaPatron.test(leerDato)) {
            throw new Error("La cadena esta vacia o no tiene la longitud minima indicada o no cumple con el patron");
        }
        return leerDato;
    }

    leerCadena1Hasta(mensaje_o_id) {
        let leerDato;
        do {
            leerDato = this.leerCadena(mensaje_o_id);
        } while (leerDato === null);

        return leerDato;
    }

    leerCadena2Hasta(mensaje_o_id, longitud) {

        let datos = trim(prompt(mensaje_o_id));

        if (datos.length < longitud || datos === null || datos === "") {
            throw new Error("La cadena introducida no cumple con los requsitos");
        }

        return datos;
    }
    leerCadena3Hasta(mensaje_o_id, longitud, cadenaPatron) {

        let datos = trim(prompt(mensaje_o_id));

        if (datos.length < longitud || datos === null || datos === "" || !cadenaPatron.test(datos)) {
            throw new Error("La cadena introducida no cumple con los requsitos");
        }

        return datos;
    }

}


