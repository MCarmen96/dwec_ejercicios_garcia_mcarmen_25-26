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

class LeerDatosPrompt extends LeerDatos{

    leer(mensaje){ return prompt(mensaje);}

    leerEntero(mensaje){
        const entero=Number(prompt(mensaje));
        if(!Util.validarEntero(entero)){
            throw new Error("El valor introducido no es un numero");
        }
        return entero;
    }

    leerEnteroHasta(mensaje){

        let entero;
        do{
            entero=leerEntero(mensaje)

        }while(isNaN(entero));

        return entero;
    }

    leerReal(mensaje){

        let leerReal=Number(prompt(mensaje));
        if(!Util.validarReal(leerReal)){
            throw new Error("El valor introducido no es un numero real");
        }
        return leerReal;
    }

    leerEnteroEntre(mensaje,min,max){

        let entero=leerEntero(mensaje);

        if(!entero>=min&&!entero<=max){
            throw new Error(`El valor introducido no esta entre los valores${min} y ${max}`);
        }

        return entero;
    }

    leerEnteroEntreHasta(mensaje,min,max){

        let entero;
        do{
            entero=leerEnteroEntre(mensaje);
        }while(isNaN(entero))
    }

    leerCadena(mensaje){

        let leer=prompt(mensaje);

        if(leer=""||leer.length<1){
            throw new Error("La cadan esta vacia y no tiene mas de un caracter");
        }
        return leer;
    }

    leerCadena(mensaje,longitud){

        let leerDato=prompt(mensaje);
        if(leerDato=""||leerDato.length<longitud){
            throw new Error("La cadena esta vacia o tiene la longitud minima indicada");
        }
        return leerDato;
    }

    leerCadenaPatron(mensaje,longitud,patron){
        let leerDato=prompt(mensaje);
        if(leerDato==""||leerDato.length<longitud||!patron.test(leerDato)){
            throw new Error("La cadena esta vacia o no tiene la longitud minima indicada o no cumple con el patron");
        }
        return leerDato;
    }

    leerCadenaHasta(mensaje){
        let leerDato;
        /*do{

        }while();*/
    }

}


