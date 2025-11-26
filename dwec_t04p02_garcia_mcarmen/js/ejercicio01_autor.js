console.log("T04 - Ejercicio 0X");

class Autor{
    #id;
    #nombre;
    #libros;

    static ultimoIdAsignado=0;

    constructor(nombre){
        this.nombre=nombre;
        this.#id=Autor.obtenerSiguienteId();
    }

    static obtenerSiguienteId(){
        let id=Autor.ultimoIdAsignado;
        id++;
        return id;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(newNombre){
        if(!Util.validarNombrePersona(newNombre)){
            throw new Error("Nombre no valido");
        }
        this.#nombre=newNombre;
    }

    mostrarDatosAutor(){
        //DEVUELVE UNA CADENA CON LOS DATOS DEL AUTOR
    }

    insertarLibro(libro){
        //PREGUNTAR A ALBERTO 
        if(libro instanceof Libro){
            this.#libros.push(libro);
        }
        let cantidadLibrosAutor=this.#libros.lenght;
        return cantidadLibrosAutor;
    }

    tieneLibros(){
        let tieneLibros=false;
        if(this.#libros.lenght>0){
            tieneLibros=true;
        }
        return tieneLibros;
    }
    
}