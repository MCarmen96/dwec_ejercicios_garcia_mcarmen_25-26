console.log("T04 - Ejercicio 01");

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
        this.isbn = isbn;
        this.titulo = titulo;
        this.autores = autores;
        this.genero = genero;
        this.precio = precio;
        this.#precioOriginal = this.precio;
    }

    get isbn() {
        return this.#isbn;
    }
    set isbn(newIsbn) {
        this.#isbn = newIsbn;
    }


    get titulo() {
        return this.#titulo;
    }
    set titulo(newTitulo) {

        Util.validarTitulo(newTitulo);


        if (!Util.validarTitulo(newTitulo)) {
            throw new Error("El valor de titulo no cumple los requisitos");
        }

        this.#titulo = newTitulo;
    }

    get autores() {
        return this.#autores;
    }
    set autores(newAutor) {

        if (Array.isArray(newAutor)) {
            newAutor.forEach(autor => {
                // Validamos que cada elemento del array sea de la clase Autor
                if (!(autor instanceof Autor)) {
                    throw new Error("El parámetro enviado contiene elementos que no son Autores");
                }
            });
            this.#autores = newAutor;
        } else {
            throw new Error("El parámetro enviado NO es un array");
        }
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
    }

    mostrarDatosLibro() {
        // autor es un array tengo que acceder a el como un array 
        return `·Titulo: ${this.titulo}\n·Autor: ${this.autores}\n·Genero: ${this.genero}\n·Precio: ${this.precio}\n·Isbn:${this.isbn}`;
    }

    deshacerDescuentoLibro() {

        if (this.#precioOriginal != this.precio) {
            //tengo que hacer e get y el set de precio Original
            this.precio = this.#precioOriginal;
        }
    }

    aplicarDescuentoLibro(descuento) {
        if (descuento <= 0 || descuento > 100) {
            throw new Error("el descuento no es valido");

        }

        if (this.#precioOriginal != this.precio) {
            this.deshacerDescuentoLibro();
        }

        this.precio = this.precio - (this.precio * (descuento / 100));
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
        console.log("Descargando....");
    }

    convertirFormato(newFormato) {

        if (Util.validarFormato(newFormato, Ebook.FORMATOS)) {
            this.formato = newFormato;
        } else {
            throw new Error("El formato no es valido");
        }
    }

    mostrarDatosLibro() {
        //modificar como mostrar el autor es un array
        return `${super.mostrarDatosLibro()}, ·Tamaño Archivo: ${this.tamanoArchivo}\n ·Formato:${this.formato}`;
    }

    comprobarDisponibilidad() {
        return true;
    }

    modificarLibro(mapainfo) {

        for (const [clave, valor] of mapainfo) {
            if (clave === "isbn") {
                throw new Error("El isbn no se puede cambiar");
            }

            switch (clave.toLowerCase()) {
                case "titulo":
                    this.titulo = valor;
                    break;
                case "autor" || "autores":
                    this.autores = valor;
                    break;
                case "genero":
                    this.genero = valor;
                    break;
                case "precio":
                    this.precio = valor;
                    break;
                case "tamaño":
                    this.tamanoArchivo = valor;
                    break;
                case "formato":
                    this.formato = valor;
                    break;
            }
        }

    }
}

class LibroPapel extends Libro {
    #peso;
    #dimensiones;
    #stock;

    static minimoStock = 5;

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
            throw new Error("Numero de stcok no valido");
        }
        this.#stock = newStock;
    }

    embalar() {
        return "Embalando.......";
    }

    reducirStock() {

        this.stock -= 1;
    }

    ampliarStock(numUnidades) {

        if (Util.validarEntero(numUnidades)) {
            this.stock += numUnidades;
        }

    }

    avisoStockMinimo() {
        let noHayStock = false;
        if (this.stock < LibroPapel.minimoStock) {
            noHayStock = true;
        }

        return noHayStock;
    }

    mostrarDatosLibro() {
        //modificar como mostrar el autor es un array
        return `${super.mostrarDatosLibro()}, ·Peso Libro: ${this.peso}\n ·Dimensiones:${this.dimensiones}\n ·Stock:${this.stock}`;
    }

    comprobarDisponibilidad() {
        let hayStock = false;
        if (this.stock > 0) {
            hayStock = true;
        }

        return hayStock;
    }

    modificarLibro(mapainfo) {

        for (const [clave, valor] of mapainfo) {
            if (clave === "isbn") {
                throw new Error("El isbn no se puede cambiar");
            }

            switch (clave.toLowerCase()) {
                case "titulo":
                    this.titulo = valor;
                    break;
                case "autor" || "autores":
                    this.autores = valor;
                    break;
                case "genero":
                    this.genero = valor;
                    break;
                case "precio":
                    this.precio = valor;
                    break;
                case "peso":
                    this.peso = valor;
                    break;
                case "dimensiones":
                    this.dimensiones = valor;
                    break;
                case "stock":
                    this.stock = valor;
                    break;
            }
        }

    }
}

