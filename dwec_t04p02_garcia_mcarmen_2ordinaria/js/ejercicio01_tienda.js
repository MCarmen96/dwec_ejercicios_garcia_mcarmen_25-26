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
        const ebook1 = new Ebook(222, "El imperio de los condenados", [autor1, autor2], "Terror", 20.00, 20.00, "pdf");
        const libroPapel = new LibroPapel(111, "Los diarios de la boticaria", [autor1], "Novela", 30.00, 1.00, "20x15x3", 30);
        const libroPapel2= new LibroPapel(333, "Nunca Noche", [autor2], "Novela", 30.00, 1.00, "20x15x3", 2);
        const libroPapel3= new LibroPapel(444, "Solo levaling", [autor2], "Novela", 30.00, 1.00, "20x15x3", 0);
        this.#libros.insertarLibros([libroPapel, ebook1,libroPapel2,libroPapel3]);
        this.#autores.insertarAutores([autor1, autor2, autor3]);

        const tipoEnvio = new TipoEnvio("urgente", 1, 10, 1);
        const tipoEnvio2 = new TipoEnvio("normal", 2, 20, 2);

        const cliente = new Cliente("111", "Hugo", "Av.Madrid-10");
        const cliente2 = new Cliente("11dfd1111", "Carmen", "Av.Madrid-10");
        this.#tiposEnvios.insertarTipos([tipoEnvio, tipoEnvio2]);
        this.#clientes.insertarClientes([cliente, cliente2]);
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
                    console.log("Has elegido:1.Mostrar catalogo libros disponibles");
                    this.mostrarCatalogoLibrosDisponibles();

                } catch (Error) {
                    console.error("Error en la opcion 1: " + error);
                }
                break;
            case 2:
                try {
                    console.log("Has elegido:2.Insertar libros o modificar");
                    this.pedirYcrearLibro();
                } catch (Error) {
                    console.error("Error en la opcion 2: " + error);
                }
                break;
            case 3:
                try {
                    console.log("Has elegido:3.Actualizar stock");
                    this.actualizarStockLibros();
                } catch (Error) {
                    console.error("Error en la opcion 3: " + error);
                }
                break;
            case 4:
                try {
                    console.log("Has elegido:4.Ver stock bajo minimo");
                    this.notificacionesStockLibrosMinimo();
                } catch (Error) {
                    console.error("Error en la opcion 4: " + error);
                }
                break;
            case 8:
                try {
                    console.log("Has elegido:8.Hacer pedido");
                    this.hacerPedidoPorCliente();
                } catch (Error) {
                    console.error("Error en la opcion 8: " + error);
                }
            default:
                console.log("error inesperado");
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
                        ebookMap.set("autores", autoresSelecionados);
                        break;
                    case 3:
                        do {
                            console.log(Libro.GENEROS_LITERARIOS);
                            genero = this.#lector.leerCadena1("Escribe el genero del libro");
                        } while (!Libro.GENEROS_LITERARIOS.has(genero) || genero != "");
                        ebookMap.set("genero", genero);
                        break;
                    case 4:
                        precio = this.#lector.leerRealHasta("Introduce el precio del libro: ");
                        ebookMap.set("precio", precio);
                        break;
                    case 5:
                        do {
                            peso = this.#lector.leerReal("Introduce el tamaño del ebook");
                        } while (!Util.validarTamanoArchivo(peso));
                        ebookMap.set("peso", peso);
                        break;
                    case 6:
                        do {
                            console.log(Ebook.FORMATOS);
                            formato = this.#lector.leerCadena1("Elige el formato:")
                        } while (!Util.validarFormato(formato, Ebook.FORMATOS));
                        ebookMap.set("formato", formato);
                        break;
                    case 7:
                        console.log("SALIENDO...");
                        break;
                    default:
                        console.log("Opcion no valida..");
                }
                if (libro.modificarLibro(ebookMap)) {
                    console.log("Campo modificado correctamente");
                } else {
                    console.log("Error campo no modificado");
                }

            } while (campoElegido != 7);

        } else if (libro instanceof LibroPapel) {
            const libroMap = new Map();
            console.log("Se va a modificar el Ebook: " + libro.titulo);
            let campoElegido = -1;
            do {
                console.log("Que campos quieres modificar elige por numero segun el campo: ");
                console.log("1.Titulo\n2.Autores\n3.Genero\n4.precio\n5.Peso\n6.Dimensiones\n7.Stock\n8.Salir");
                campoElegido = this.#lector.leerEntero("Introduce la opcion: ");

                switch (campoElegido) {
                    case 1:
                        console.log("Has elegido modificar titulo");
                        let titulo = this.#lector.leerCadena1Hasta("Introduce el nuevo titulo: ");
                        libroMap.set("titulo", titulo);
                        break;
                    case 2:
                        console.log("Has elegido modificar autores");
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
                        libroMap.set("autores", autoresSelecionados);
                        break;
                    case 3:
                        console.log("Has elegido modificar genero");
                        do {
                            console.log(Libro.GENEROS_LITERARIOS);
                            genero = this.#lector.leerCadena1("Escribe el genero del libro");
                        } while (!Libro.GENEROS_LITERARIOS.has(genero) || genero != "");
                        libroMap.set("genero", genero);

                        break;
                    case 4:
                        precio = this.#lector.leerRealHasta("Introduce el precio del libro: ");
                        libroMap.set("precio", precio);
                        break;
                    case 5:
                        do {
                            peso = this.#lector.leerReal("Introduce el peso del libro");
                        } while (!Util.validarPeso(peso));
                        libroMap.set("peso", peso);
                        break;
                    case 6:
                        do {
                            dimensiones = this.#lector.leerCadena1("Introduce las dimensiones del libro:")
                        } while (!Util.validarDimensiones(dimensiones));
                        libroMap.set("dimensiones", dimensiones);
                        break;
                    case 7:
                        do {
                            stock = this.#lector.leerEntero("Introduce el stock del libro:");
                        } while (!Util.validarStock(stock));
                        libroMap.set("stock", stock);
                        break;
                    case 8:
                        console.log("SALIENDO...");
                        break;
                    default:
                        console.log("Opcion no valida..");
                }

                if (libro.modificarLibro(libroMap)) {
                    console.log("Campo modificado correctamente");
                    console.log(libro.mostrarDatosLibro());
                } else {
                    console.log("Error campo no modificado");
                }

            } while (campoElegido != 8);

        }

    }
    pedirYcrearVariosLibros() { }

    pedirYcrearCliente() { }

    pedirYcrearVariosClientes() { }

    //mostrarCatálogoLibrosDisponibles(): muestra todos los libros disponibles para comprar, separando los ebooks de los libros en papel.
    mostrarCatalogoLibrosDisponibles() {
        console.log(this.#libros.obtenerCadenaLibrosMenu());
    }

    actualizarStockLibros() {

        let libroActualizar;
        let unidadesNuevas;
        let opcion;
        do {
            try {
                do {
                    console.log("Libros de la tienda:\n" + this.#libros.obtenerCadenaLibrosMenu() + "\n0.Salir");
                    opcion = this.#lector.leerEntero("Introduce el numero del libro a modificar su stock");

                } while (opcion > this.#libros.listaLibros.length);

            } catch (Error) {
                console.error("Error al mostrar los libros y pedir eliger libro " + error);
            }

            libroActualizar = this.#libros.listaLibros[opcion - 1];
            if (libroActualizar instanceof LibroPapel) {
                console.log("Has elegido: " + libroActualizar.titulo + "\nStock actual:" + libroActualizar.stock);
                try {
                    console.log("Introduce las unidades a incrementar el stock del libro ");
                    unidadesNuevas = this.#lector.leerEnteroHasta("Introduce las unidades a incrementar el stock del libro");

                } catch (Error) {
                    console.error("Error pedir la unidades a incrementar " + error);
                }
                libroActualizar.ampliarStock(unidadesNuevas);
                console.log("Has incrementado en " + unidadesNuevas + " el stock del libro: " + libroActualizar.titulo);
                console.log("Stock despues del incremento:" + libroActualizar.stock);
            } else {
                console.log("Un lirbo ebook no tiene stock con lo cual no se puede actualizar");
            }

        } while (opcion != 0);

    }

    notificacionesStockLibrosMinimo() {
        let bajoMinimo= "Libros Bajo Minimo\n";
        let sinStock="Libros sin Stock\n"

        this.#libros.listaLibros.forEach(libro => {
            if (libro instanceof LibroPapel) {
                if (libro.avisoStockMinimo()) {
                    bajoMinimo+= libro.titulo+"\n";
                } else{
                    if(!libro.comprobarDisponibilidad()){
                        sinStock+=libro.titulo+"\n";
                    }else{
                        sinStock+="NO hay libros sin stock"
                    }
                }
            }
        });

        console.log(bajoMinimo+"\n"+sinStock);
    }

    mostrarPedidosAbiertoCliente() { }

    borrarCliente() { }

    hacerPedidoPorCliente() {
        let dniCliente;
        let existeDni = false;
        do {
            dniCliente = this.#lector.leerCadena1("Introduce el dni del cliente para realizar el pedido:");
            existeDni = this.#clientes.existeClientePorDNI(dniCliente);
            if (!existeDni) {
                console.log("EL dni no existe ");
            }
        } while (!existeDni);
        let clienteEncontrado = this.#clientes.buscarClientePorDNI(dniCliente);
        const pedidoActual = new Pedido(clienteEncontrado);

        console.log("Cliente encontrado: " + clienteEncontrado.nombreCompleto);
        let opcion;
        let alMenosUnPapel = false;
        let libroElegido = false;
        do {
            console.log("Libros de la tienda:")
            console.log(this.#libros.obtenerCadenaLibrosMenu() + "\n0.Salir");
            opcion = this.#lector.leerEntero("Introduce el valor del libro a elegir:");

            if (opcion != 0) {
                let libro = this.#libros.listaLibros[opcion - 1];
                console.log("Libro elegido: " + libro.titulo);

                if (libro instanceof Ebook) {
                    libroElegido = true;
                    pedidoActual.insertarLibro(libro, 1);// del ebook solo se puede adquirir 1 und

                } else if (libro.stock > 0) {// ! AQUI DEBERIA USAR EL METODO DE DISPONIBILIDAD DE LIBROPAPEL NO HACERLO A MANO ¡¡CORREGIR!!
                    libroElegido = true;
                    console.log("Stock del libro: " + libro.titulo + " Stock->" + (libro.stock));
                    let unidades;

                    do {
                        unidades = this.#lector.leerEntero("Introduce las unidades del libro a adquirir");
                        if (unidades < libro.stock && unidades != 0) {
                            pedidoActual.insertarLibro(libro, unidades);
                            alMenosUnPapel = true;
                        } else {
                            console.log("No hay unidades suficientes");
                        }
                    } while (unidades == 0 || unidades > libro.stock);

                }
            }
        } while (!libroElegido);

        let tipoEnvioSelecionado;
        let tipoEnvio;
        if (alMenosUnPapel) {
            do {
                console.log("Tipos de envios actuales: ");
                console.log(this.#tiposEnvios.obtenerCadenaTiposMenu());
                tipoEnvioSelecionado = this.#lector.leerEntero("Elige el tipo de envio: ");

            } while (tipoEnvioSelecionado == 0 || tipoEnvioSelecionado > this.#tiposEnvios.length);
            tipoEnvio = this.#tiposEnvios.tiposEnvios[tipoEnvioSelecionado - 1];
            pedidoActual.establecerTipoEnvio(tipoEnvio);
        }

        console.log("Datos del pedido: " + pedidoActual.mostrarDatosPedido());
        this.#pedidosTienda.insertarUnPedido(pedidoActual);
    }

    mostrarPedidoPorID() { }

    mostrarEstadisticas() { }
}
