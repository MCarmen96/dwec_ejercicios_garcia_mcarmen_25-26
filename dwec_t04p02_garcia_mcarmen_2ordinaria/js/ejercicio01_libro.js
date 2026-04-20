console.log("T04 - LIBRO");

class Libro {

    #isbn;
    #titulo;
    #autores;
    #genero;
    #precio;
    #precioOriginal;

    static GENEROS_LITERARIOS = new Set([
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

    constructor(isbn, titulo, autores, genero, precio) {
        this.#isbn = isbn;
        this.titulo = titulo;
        this.autores = autores;
        this.genero = genero;
        this.precio = precio;
    }

    get isbn() {
        return this.#isbn;
    }

    get titulo() {
        return this.#titulo;
    }
    set titulo(newTitulo) {
        if (!Util.validarTitulo(newTitulo)) {
            throw new Error("El valor de titulo no cumple los requisitos");
        }
        this.#titulo = newTitulo;
    }

    get autores() {
        return this.#autores;
    }
    set autores(newAutores) {
        if (!Array.isArray(newAutores)) {
            throw new Error("[ErrorLibro]El nuevo autor no es un array");
        } else if (newAutores.length === 0) {
            throw new Error("El libro debe tener al menos un autor.");
        } else if (!newAutores.every(autor => autor instanceof Autor)) {
            throw new Error("Todos los elemento que tiene que ser la clase autor");
        }

        this.#autores = newAutores;
    }

    get genero() {
        return this.#genero;
    }
    set genero(newGenero) {

        if (!Util.validarGenero(newGenero, Libro.GENEROS_LITERARIOS)) {
            throw new Error("El genero no esta permitido");
        }
        this.#genero = newGenero;
    }

    get precio() {
        return this.#precio;
    }
    set precio(newPrecio) {

        if (!Util.validarPrecio(newPrecio)) {
            throw new Error("El precio no es un valor valido");
        }
        this.#precio = newPrecio;
        this.#precioOriginal = newPrecio;
    }

    modificarLibro(mapaInfo) {
        throw new Error("Metodo no implementado ModificarLibro");
    }

    mostrarDatosLibro() {
        // autor es un array tengo que acceder a el como un array 
        return `·Titulo: ${this.titulo}\n·Autor: ${this.autores.map(autor => autor.nombre)}\n·Genero: ${this.genero}\n·Precio: ${this.precio}\n·Isbn:${this.isbn}`;
        //return `Autor:\n-${this.nombre}, \nId: ${this.id}\n ·Libros:(${this.libros.map(libro=>libro.titulo)})`;
    }

    deshacerDescuentoLibro() {

        if (this.#precioOriginal != this.precio) {
            //tengo que hacer e get y el set de precio Original
            this.precio = this.#precioOriginal;
        }
    }

    aplicarDescuentoLibro(descuento) {
        if (!Util.validarReal(descuento)) {
            throw new Error("el descuento no es valido");

        } else if (!Util.validarRango(descuento, 0, 100)) {
            throw new Error("el descuento no es valido por rango");
        }
        if (this.#precioOriginal != this.precio) {
            this.deshacerDescuentoLibro();
        }
        let auxPrecio = this.#precioOriginal;
        this.precio = this.precio - (this.precio * (descuento / 100));
        this.#precioOriginal = auxPrecio;
    }

}

class Ebook extends Libro {


    #tamanoArchivo;
    #formato;

    static FORMATOS = new Set([
        "pdf",
        "epub",
        "mobi"
    ]);


    constructor(isbn, titulo, autor, genero, precio, tamanoArchivo, formato) {
        super(isbn, titulo, autor, genero, precio)
        this.tamanoArchivo = tamanoArchivo;
        this.formato = formato;
    }

    get tamanoArchivo() {
        return this.#tamanoArchivo;
    }

    set tamanoArchivo(newTamano) {

        if (!Util.validarTamanoArchivo(newTamano)) {
            throw new Error("El tamaño del archivo no es valido");
        }
        this.#tamanoArchivo = newTamano;
    }

    get formato() {
        return this.#formato;
    }

    set formato(newFormato) {

        if (!Util.validarFormato(newFormato, Ebook.FORMATOS)) {
            throw new Error("El formato no es valido");
        }

        this.#formato = newFormato;
    }

    descargar() {
        return "Descargando....";
    }

    convertirFormato(newFormato) {
        this.formato = newFormato;
    }

    mostrarDatosLibro() {
        //modificar como mostrar el autor es un array
        return `${super.mostrarDatosLibro()},\n·Tamaño Archivo: ${this.tamanoArchivo}\n·Formato:${this.formato}`;
    }

    comprobarDisponibilidad() {
        return true;
    }

    modificarLibro(mapainfo) {
        let modificado = false;
        if (mapainfo.has("isbn")) {
            throw new Error("El isbn no se puede cambiar");
        }
        for (const [clave, valor] of mapainfo) {
            switch (clave.toLowerCase()) {
                case "titulo":
                    this.titulo = valor;
                    modificado = true;
                    break;
                case "autor" || "autores":
                    this.autores = valor;
                    modificado = true;
                    break;
                case "genero":
                    this.genero = valor;
                    modificado = true;
                    break;
                case "precio":
                    this.precio = valor;
                    modificado = true;
                    break;
                case "tamaño":
                    this.tamanoArchivo = valor;
                    modificado = true;
                    break;
                case "formato":
                    this.formato = valor;
                    modificado = true;
                    break;
            }

        }

        return modificado;

    }
}

class LibroPapel extends Libro {
    #peso;
    #dimensiones;
    #stock;

    static MINIMOSTOCK = 5;

    constructor(isbn, titulo, autor, genero, precio, peso, dimensiones, stock) {
        super(isbn, titulo, autor, genero, precio);
        this.peso = peso;
        this.dimensiones = dimensiones;
        this.stock = stock;
    }

    get peso() {
        return this.#peso;
    }
    set peso(newPeso) {

        if (!Util.validarPeso(newPeso)) {
            throw new Error("Peso no valido");
        }
        this.#peso = newPeso;
    }

    get dimensiones() {
        return this.#dimensiones;
    }
    set dimensiones(newDimensiones) {

        if (!Util.validarDimensiones(newDimensiones)) {
            throw new Error("Peso no valido");
        }
        this.#dimensiones = newDimensiones;
    }

    get stock() {
        return this.#stock;
    }
    set stock(newStock) {

        if (!Util.validarEntero(newStock)) {
            throw new Error("Numero de stoCk no valido");
        }
        this.#stock = newStock;
    }

    embalar() {
        return "Embalando.......";
    }
    reducirStock() {
        if(this.stock>0){
            this.stock = this.stock - 1;
        }
    }
    ampliarStock(numUnidades) {

        if (Util.validarEntero(numUnidades)) {
            this.stock = this.stock + numUnidades;
        }

    }
    avisoStockMinimo() {
        return this.stock < LibroPapel.MINIMOSTOCK;
    }
    mostrarDatosLibro() {
        return `${super.mostrarDatosLibro()}, \n·Peso Libro: ${this.peso}\n·Dimensiones:${this.dimensiones}\n·Stock:${this.stock}`;
    }

    comprobarDisponibilidad() {
        return this.stock > 0;
    }

    modificarLibro(mapainfo) {
        if (mapainfo.has("isbn")) {
            throw new Error("El isbn no se puede cambiar");
        }
        let modificado=false;
        for (const [clave, valor] of mapainfo) {
            switch (clave.toLowerCase()) {
                case "titulo":
                    this.titulo = valor;
                    modificado=true;
                    break;
                case "autor" || "autores":
                    this.autores = valor;
                    modificado=true;
                    break;
                case "genero":
                    this.genero = valor;
                    modificado=true;
                    break;
                case "precio":
                    this.precio = valor;
                    modificado=true;
                    break;
                case "peso":
                    this.peso = valor;
                    modificado=true;
                    break;
                case "dimensiones":
                    this.dimensiones = valor;
                    modificado=true;
                    break;
                case "stock":
                    this.stock = valor;
                    modificado=true;
                    break;
            }
        }
        return modificado;

    }
}

