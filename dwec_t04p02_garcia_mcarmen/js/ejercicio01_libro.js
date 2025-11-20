console.log("T04 - Ejercicio 01");

class Libro{

    #isbn;
    #titulo;
    #autor;
    #genero;
    #precio;
    #precioOriginal=this.precio;

    static GENEROS_LITERARIOS=new Set([
        "Novela",
        "Poesia",
        "Ensayo",
        "Teatro",
        "Ciencia Ficcion",
        "Fantasia",
        "Historico",
        "Biografia",
        "Terror",
        "Infantil",
    ]);

    constructor(isbn,titulo,autor,genero,precio){
        this.isbn=isbn;
        this.titulo=titulo;
        this.genero=genero;
        this.precio=precio;
    }

    get isbn(){
        return this.#isbn;
    }
    set isbn(newIsbn){
        if (Util.validarEntero(newIsbn)){
            throw new Error("El tipo de valor no es valido para isbn");
        }
        this.#titulo=newIsbn;
    }

    get titulo(){
        return this.#titulo;
    }
    set titulo(newTitulo){
        if(!Util.validarTitulo(newTitulo)){
            throw new Error("El valor d etitulo no cumple los requisitos");
        }
        this.#titulo=newTitulo;
    }

    get autor(){
        return this.#autor;
    }
    set autor(newAutor){

        if(!Util.validarNombrePersona(newAutor)){
            throw new Error("El nombre no cumple los requisitos");
        }
        this.#autor=newAutor;
    }

    get genero(){
        return this.#genero;
    }
    set genero(newGenero){

        if(!Util.validarGenero(newGenero,Libro.GENEROS_LITERARIOS)){
            throw new Error("El genero no esta permitido");
        }
        this.#genero=newGenero;
    }

    get precio(){
        return this.#precio;
    }

    set precio(newPrecio){

        if(!Util.validarPrecio(newPrecio)){
            throw new Error("El precio no es un valor valido");
        }
        this.#precio=newPrecio;
    }

    mostrarDatoslibros(){
        return `·Titulo: ${this.#titulo}\n·Autor: ${this.#autor}\n·Genero: ${this.#genero}\n·Precio: ${this.#precio}\n·Isbn:${this.#isbn}`
    }

    deshacerDescuentoLibro(){

    }

    aplicarDescuentoLibro(descuento){

        if(this.#precioOriginal!=this.precio||descuento<=0||descuento>100){
            throw new Error("El precio ya tiene un descuento o el descuento no es valido");
            
        }
    }
}