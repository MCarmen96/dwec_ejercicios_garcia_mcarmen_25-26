console.log("T04 - AUTOR");

class Autor {

    #id;
    #nombre;
    #libros;

    static ultimoIdAsignado = 0;

    constructor(nombre) {
        this.nombre = nombre;
        this.#id = Autor.obtenerSiguienteId();
        this.#libros = [];
    }
    // obtenerSiguienteId(): Incrementa el último ID en 1 y devuelve su valor. Se invoca desde el constructor de la Clase Autor.
    static obtenerSiguienteId() {
        Autor.ultimoIdAsignado++;
        return Autor.ultimoIdAsignado;
    }
    // PREGUNTAR ALBERTO HACE FALTA??? HABER SI PARA OBETENR EL VALOR o no por que es interno depende de loq ue se quiera
    get id() {
        return this.#id;
    }


    get libros() {//hago setter de libros????
        return this.#libros;
    }

    set libros(newLibros) {
        let ok = true;
        if (newLibros instanceof Array) {
            newLibros.forEach(libro => {
                if (libro instanceof Libro) {
                    ok = false;
                }
            });
            if (ok) {
                this.#libros = newLibros;
            }
        }
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        if (!Util.validarNombrePersona(newNombre)) {
            throw new Error("Nombre no valido");
        }
        this.#nombre = newNombre;
    }


    //mostrarDatosAutor(): Devuelve una cadena con toda la información de un autor. No recibe nada. Debe usar template strings.
    mostrarDatosAutor() {

        return `Autor:\n-${this.nombre}, \nId: ${this.id}\n ·Libros:(${this.libros.map(libro=>libro.titulo)})`;
        //
    }
    //insertarLibro(libro): añade un libro a la lista de libro ya escritos por este autor. 
    // Solo se pueden añadir libros previamente existentes en el sistema. Devuelve el número de libros escritos hasta ese momento (incluido el nuevo libro).
    insertarLibro(libro) {//* pendiente por probar
        //PREGUNTAR A ALBERTO 
        if (libro instanceof Libro) {
            this.libros.push(libro);
        }
        let cantidadLibrosAutor = this.libros.length;// este es el getter
        return cantidadLibrosAutor;
    }
    //tieneLibros(): devuelve true / false si ha escrito libros.
    tieneLibros() {
        let tieneLibros = false;
        if (this.libros.length > 0) {
            tieneLibros = true;
        }
        return tieneLibros;
    }

}