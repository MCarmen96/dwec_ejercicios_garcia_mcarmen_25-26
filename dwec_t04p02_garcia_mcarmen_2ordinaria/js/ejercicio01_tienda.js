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
        this.#libros = new Libros();//gestor de libros que tiene el listado de libros
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
        /*let libro1 = new Libro(111, "los diarios de la boticaria", "nisu", "Fantasia", 20, 15);
        const libros = new Libros(libro1);

        

        libros.existeLibroPorIsbn(111);
        libro1.mostrarDatosLibro(); */

        const autor1 = new Autor("Carmen");
        const autor2 = new Autor("Jay Kristof");
        const autor3 = new Autor("Brandon Sanderson");
        const ebook1 = new Ebook(222, "El imperio de los condenados", [autor1, autor2], "Terror", 20, 20, "pdf");
        const libroPapel = new LibroPapel(111, "Los diarios de la boticaria", [autor1], "Novela", 12.99, 12, "20x15x3", 0);
        this.#libros.insertarLibros([libroPapel, ebook1]);
        this.#autores.insertarAutores([autor1, autor2, autor3]);

    }
    iniciar() {
        let opcion = -1;

        do {
            console.log(this.mostrarMenu());
            opcion = this.pedirOpcionMenu();
            if (opcion >= 1 && opcion <= 11) {
                this.gestionarOpcionMenu(opcion);
            } else {
                console.log("Opcion no valida");
                opcion = -1;
            }
        }
        while (opcion === -1 || opcion != 11);
    }
    //mostrarMenu(): Devuelve una cadena con las opciones del menú.
    mostrarMenu() {
        let menu = "1.Mostrar catalogo libros disponibles\n2.Insertar libros o modificar\n3.Actualizar stock\n4.Ver stock bajo minimo\n5.Insertar nuevo cliente\n6.Mostrar pedidos(abiertos) clientes\n7.Borrar cliente por dni\n8.Hacer pedido\n9.Mostrar pedido por ID\n10.Mostrar estadisticas\n11.Salir";
        return menu;
    }
    //pedirOpcionMenu(): Muestra el menú usando mostrarMenu() y devuelve la opción del menú pedida al usuario.
    pedirOpcionMenu() {
        let opcionUsuario = this.#lector.leerEnteroHasta("Dame una opcion: ");
        return opcionUsuario;
    }

    //gestionarOpcionesMenu(opcionMarcada): En función de la opción marcada, realiza una tarea u otra. No devuelve nada. 
    gestionarOpcionMenu(opcionMarcada) {
        switch (opcionMarcada) {
            case 1:
                try {
                    this.mostrarCatalogoLibrosDisponibles();

                } catch (Error) {
                    console.error("Error en la opcion 1: " + error)
                }
                break;
            case 2:
                try {
                    this.pedirYcrearLibro();
                } catch (Error) {
                    console.error("Error en la opcion 2: " + error)
                }
                break;
            default:
                console.log("error inesperado")
        }
    }

    pedirYcrearLibro() {
        let isbn = this.#lector.leerCadena1("Introduce el isbn del libro");
        let encontrado = this.#libros.buscarLibroPorIsbn(isbn);
        if (encontrado === null) {
            console.log("Se va a crear el libro");

            let titulo = this.#lector.leerCadena1Hasta("Introduce el titulo del libro");
            let otroAutor = false;
            const autoresSelecionados = [];
            do {

                console.log(this.#autores.obtenerCadenaAutoresMenu());
                console.log("0.Crear un nuevo autor");
                let opcionAutor = -1;
                do {
                    opcionAutor = this.#lector.leerEntero("Elige un autor");
                } while (opcionAutor > this.#autores.listadoAutores.length && opcionAutor < 0);

                let autorSelect;
                if (opcionAutor === 0) {
                    autorSelect = this.crearAutor();
                } else {
                    autorSelect = this.#autores.listadoAutores[opcionAutor - 1];
                }
                autoresSelecionados.push(autorSelect);
                let respuesta = this.#lector.leerCadena1("Quieres añadir otro autor");
                if (respuesta.toLocaleLowerCase() === "si") {
                    otroAutor = true;
                } else if (respuesta.toLocaleLowerCase() === "no") {
                    otroAutor = false;
                }
            } while (otroAutor);

            let opcionGenero;
            do {
                console.log(Libro.GENEROS_LITERARIOS);
                opcionGenero = this.#lector.leerCadena1("Escribe el genero del libro")
            } while (!Libro.GENEROS_LITERARIOS.has(opcionGenero));
            console.log("GENERO SELECIONADO:" + opcionGenero);// ir informando de los datos que va selecionando al usuario

            let precio = this.#lector.leerRealHasta("Introduce el precio del libro: ");
            let opcionTipoLibro;
            do {
                console.log("1.Ebook\n2.Libro Papel");
                opcionTipoLibro = this.#lector.leerEntero("Elige tipo");
            } while (opcionTipoLibro < 0 || opcionTipoLibro > 2);

            if (opcionTipoLibro === 1) {
                let tamanoEbook = -1;
                console.log("Has elegido Ebook");
                do {
                    tamanoEbook = this.#lector.leerReal("Introduce el tamaño del ebook");
                } while (!Util.validarTamanoArchivo(tamanoEbook));
                let formato = "";
                do {
                    console.log(Ebook.FORMATOS);
                    formato = this.#lector.leerCadena1("Elige el formato:")
                } while (!Util.validarFormato(formato, Ebook.FORMATOS));

                let ebook = new Ebook(isbn, titulo, autoresSelecionados, opcionGenero, precio, tamanoEbook, formato);
                // insertar en 
                this.#libros.insertarLibros([ebook]);// mirar que no falle por si un caso 
            } else {
                console.log("Has elegido Libro papel");
                let peso;
                do {
                    peso = this.#lector.leerReal("Introduce el peso del libro");
                } while (!Util.validarPeso(peso));
                let dimensiones;
                do {
                    dimensiones = this.#lector.leerCadena1("Introduce las dimensiones del libro:")
                } while (!Util.validarDimensiones(dimensiones));
                let stock;
                do {
                    stock = this.#lector.leerEntero("Introduce el stock del libro:");
                } while (!Util.validarStock(stock));

                let libroPapel = new LibroPapel(isbn, titulo, autoresSelecionados, opcionGenero, precio, peso, dimensiones, stock);
                this.#libros.insertarLibros([libroPapel]);
            }


        } else {
            console.log("Se va amodificar el libro");
            this.modificarLibro(encontrado);
        }

    }
    crearAutor() {
        let autorCreado = null;
        try {
            let nombre = this.#lector.leerCadena1Hasta("Introduce el nombre del autor:");
            autorCreado = new Autor(nombre);
        } catch (Error) {
            console.error("Error al crear el autor: " + Error);
        }

        return autorCreado;
    }
    modificarLibro(libro) {

        let titulo;
        let autoresSelecionados = [];
        let genero;
        let precio;
        let peso;
        let formato;
        let peso;
        let dimensiones;
        let stock;
        // no has controlado las excepciones ocn try 
        if (libro instanceof Ebook) {
            const ebookMap = new Map();
            console.log("Se va a modificar el Ebook: " + libro.titulo);
            let campoElegido = -1;
            do {
                console.log("Que campos quieres modificar elige por numero segun el campo: ");
                console.log("1.Titulo\n2.Autores\n3.Genero\n4.precio\n5.Tamaño Ebook\n6.Formato\n7.Salir");
                campoElegido = this.#lector.leerEntero("Introduce la opcion: ");

                switch (campoElegido) {
                    case 1:
                        let titulo = this.#lector.leerCadena1Hasta("Introduce el nuevo titulo: ");
                        ebookMap.set("titulo", titulo);
                        break;
                    case 2:
                        let opcion;
                        let autorSelect;
                        do {
                            console.log(this.#autores.obtenerCadenaAutoresMenu() + "\n 0.Salir");
                            opcion = this.#lector.leerCadena1("Introduce los autores: ");
                        } while (opcion != 0 || opcion > this.#autores.length);

                        if (opcion === 0) {
                            autoresSelecionados = libro.autores;
                        } else {
                            autorSelect = this.#autores.listadoAutores[opcionAutor - 1];
                            autoresSelecionados.push(autorSelect);
                        }
                        ebookMap.set("autores",autoresSelecionados);
                        break;
                    case 3:
                        do {
                            console.log(Libro.GENEROS_LITERARIOS);
                            genero = this.#lector.leerCadena1("Escribe el genero del libro");
                        } while (!Libro.GENEROS_LITERARIOS.has(genero) || genero != "");
                        ebookMap.set("genero",genero);
                        break;
                    case 4:
                        precio = this.#lector.leerRealHasta("Introduce el precio del libro: ");
                        ebookMap.set("precio",precio);
                        break;
                    case 5:
                        do {
                            peso = this.#lector.leerReal("Introduce el tamaño del ebook");
                        } while (!Util.validarTamanoArchivo(peso));
                        ebookMap.set("peso",peso);
                        break;
                    case 6:
                        do {
                            console.log(Ebook.FORMATOS);
                            formato = this.#lector.leerCadena1("Elige el formato:")
                        } while (!Util.validarFormato(formato, Ebook.FORMATOS));
                        ebookMap.set("formato",formato);
                        break;
                    case 7:
                        console.log("SALIENDO...");
                        break;
                    default:
                        console.log("Opcion no valida..");
                }

                libro.modificarLibro(ebookMap);
            } while (campoElegido < 1 || campoElegido > 7);
        } else if (libro instanceof LibroPapel) {
            const libroMap = new Map();
            console.log("Se va a modificar el Ebook: " + libro.titulo);
            let campoElegido = -1;
            do {
                console.log("Que campos quieres modificar elige por numero segun el campo: ");
                console.log("1.Titulo\n2.Autores\n3.Genero\n4.precio\n5.Peso\n6.Dimensiones\n7.Stock");
                campoElegido = this.#lector.leerEntero("Introduce la opcion: ");

                switch (campoElegido) {
                    case 1:
                        let titulo = this.#lector.leerCadena1Hasta("Introduce el nuevo titulo: ");
                        libroMap.set("titulo", titulo);
                        break;
                    case 2:
                        let opcion;
                        let autorSelect;
                        do {
                            console.log(this.#autores.obtenerCadenaAutoresMenu() + "\n 0.Salir");
                            opcion = this.#lector.leerCadena1("Introduce los autores: ");
                        } while (opcion != 0 || opcion > this.#autores.length);

                        if (opcion === 0) {
                            autoresSelecionados = libro.autores;
                        } else {
                            autorSelect = this.#autores.listadoAutores[opcionAutor - 1];
                            autoresSelecionados.push(autorSelect);
                        }
                        libroMap.set("autores",autoresSelecionados);
                        break;
                    case 3:
                        do {
                            console.log(Libro.GENEROS_LITERARIOS);
                            genero = this.#lector.leerCadena1("Escribe el genero del libro");
                        } while (!Libro.GENEROS_LITERARIOS.has(genero) || genero != "");
                        libroMap.set("genero",genero);
    
                        break;
                    case 4:
                        precio = this.#lector.leerRealHasta("Introduce el precio del libro: ");
                        libroMap.set("precio",precio);
                        break;
                    case 5:
                        do {
                            peso = this.#lector.leerReal("Introduce el peso del libro");
                        } while (!Util.validarPeso(peso));
                        libroMap.set("peso",peso);
                        break;
                    case 6:
                        do {
                            dimensiones = this.#lector.leerCadena1("Introduce las dimensiones del libro:")
                        } while (!Util.validarDimensiones(dimensiones));
                        libroMap.set("dimensiones",dimensiones);
                        break;
                    case 7:
                        do {
                            stock = this.#lector.leerEntero("Introduce el stock del libro:");
                        } while (!Util.validarStock(stock));
                        libroMap.set("stock",stock);
                        break;
                    default:
                        console.log("Opcion no valida..");
                }
                libro.modificarLibro(libroMap);
            } while (campoElegido < 1 || campoElegido > 8);

        }

    }
    pedirYcrearVariosLibros() { }

    pedirYcrearCliente() { }

    pedirYcrearVariosClientes() { }

    //mostrarCatálogoLibrosDisponibles(): muestra todos los libros disponibles para comprar, separando los ebooks de los libros en papel.
    mostrarCatalogoLibrosDisponibles() {
        console.log(this.#libros.obtenerCadenaLibrosMenu());
    }

    actualizarStockLibros() { }

    notificacionesStockLibrosMinimo() { }

    mostrarPedidosAbiertoCliente() { }

    borrarCliente() { }

    hacerPedidoPorCliente() { }

    mostrarPedidoPorID() { }

    mostrarEstadisticas() { }
}
