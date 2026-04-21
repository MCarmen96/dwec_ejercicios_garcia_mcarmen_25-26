console.log("T04 - TIENDA");

class Tienda {
    #libros;
    #autores;
    #tiposEnvios;
    #clientes;
    #pedidosTienda;
    #nombreTienda;
    #lector;

    // ===== ATRIBUTOS ESTÁTICOS =====
    static instancia = null;
    static IVA = 4;
    static mesesPromocion = new Set([11, 12]);

    // ===== MÉTODO SINGLETON =====
    static getInstancia(nombre) {
        if (Tienda.instancia === null) {
            Tienda.instancia = new Tienda(nombre);
        }

        return Tienda.instancia;
    }

    constructor(nombre) {
        if (Tienda.instancia !== null) {
            throw new Error("Use Tienda.getInstancia()");
        }

        this.nombreTienda = nombre;

        this.#libros = new Libros();
        this.#autores = new Autores();
        this.#tiposEnvios = new TiposEnvios();
        this.#clientes = new Clientes();
        this.#pedidosTienda = new PedidosTienda();

        this.#lector = new LeerDatosPrompt();
    }

    get nombreTienda() {
        return this.#nombreTienda;
    }
    set nombreTienda(newNombre) {
        if (!Util.validarCadenaNoVacia(newNombre)) {
            throw new Error("El nombre de la tienda no es válido.");
        }

        this.#nombreTienda = newNombre;
    }

    cargarDatosPrueba() {
        /*         let libro1 = new Libro(111, "los diarios de la boticaria", "nisu", "Fantasia", 20, 15);
        const libros = new Libros(libro1);

        let autor1 = new Autor("Carmen");
        let autores = new Autores(autor1);

        libros.existeLibroPorIsbn(111);
        libro1.mostrarDatosLibro(); */
    }
    iniciar() {}

    mostrarMenu() {}

    pedirOpcionMenu() {}

    pedirYcrearLibro() {}

    pedirYcrearVariosLibros() {}

    pedirYcrearCliente() {}

    pedirYcrearVariosClientes() {}

    mostrarCatalogoLibrosDisponibles() {}

    actualizarStockLibros() {}

    notificacionesStockLibrosMinimo() {}

    mostrarPedidosAbiertoCliente() {}

    borrarCliente() {}

    hacerPedidoPorCliente() {}

    mostrarPedidoPorID() {}

    mostrarEstadisticas() {}
}
