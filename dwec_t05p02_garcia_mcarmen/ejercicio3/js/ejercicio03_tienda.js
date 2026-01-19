class Tienda {
  
    static instancia = null;
    #nombre;
    #libros;
    #autores;
    #tiposEnvios;
    #clientes;
    #pedidos;
    #lectorDatosForm;

    
    static getInstancia(nombreTienda) {
        if (Tienda.instancia === null) {
            Tienda.instancia = new Tienda(nombreTienda);
        }
        return Tienda.instancia;
    }

    constructor(nombreTienda) {
        if (Tienda.instancia !== null) {
            throw new Error("[Tienda] Use Tienda.getInstancia() en lugar de new Tienda()");
        }


        this.#nombre = nombreTienda;
        //this.lectorDatosForm= new LeerDatosFrom();
        this.#clientes = new Clientes();
        this.#libros = new Libros();
        this.#autores = new Autores();
        this.#pedidos = new Pedidos();
        this.#tiposEnvios = new TiposEnvios();

    }

    get nombre() { return this.#nombre; }
    set nombre(nombre) { this.#nombre = nombre; }

    get libros() { return this.#libros; }
    set libros(libros) { this.#libros = libros; }

    get lector() { return this.#lectorDatosForm; }
    set lector(lector) { this.#lectorDatosForm = lector; }

    get autores() { return this.#autores; }
    set autores(autores) { this.#autores = autores; }

    get tiposEnvio() { return this.#tiposEnvios; }
    set tiposEnvio(tiposEnvio) { this.#tiposEnvios = tiposEnvio; }

    get clientes() { return this.#clientes; }
    set clientes(clientes) { this.#clientes = clientes; }

    get pedidos() { return this.#pedidos; }
    set pedidos(pedidos) { this.#pedidos = pedidos; }



    cargarDatosPrueba() {

        const autoresPrueba = [new Autor('Natsu Hyuga'), new Autor('Koyoharu Gotouge'), new Autor('Jay Kristoff'), new Autor('Brandon Sanderson'), new Autor('Tatsuya Endo')]

        this.autores.insertarAutores(autoresPrueba);

        const arrayLibros = [
            new LibroPapel(9784072981986, "Los diarios de la boticaria", [this.autores.listadoAutores[0]], "Novela", 15.99, 10, '10x10x5', 500),
            new Ebook(2784072981986, "Kimetsu no yaiba", [this.autores.listadoAutores[1]], "Fantasia", 10.99, 12, "pdf"),
            new LibroPapel(3784072981986, "Spy family", [this.autores.listadoAutores[4]], "Ciencia Ficcion", 8.99, 10, '10x10x5', 120),
            new LibroPapel(4784072981986, "El imperio de los condenados", [this.autores.listadoAutores[2]], "Fantasia", 25.99, 10, '10x10x5', 200),
            new Ebook(5784072981986, "Nacidos de la bruma", [this.autores.listadoAutores[3],this.autores.listadoAutores[1]], "Ciencia Ficcion", 22.99, 12, "epub")

        ];

        this.libros.insertarLibros(arrayLibros);

        autoresPrueba[0].insertarLibro(arrayLibros[0]);
        autoresPrueba[1].insertarLibro(arrayLibros[1]);
        autoresPrueba[2].insertarLibro(arrayLibros[2]);
        autoresPrueba[3].insertarLibro(arrayLibros[3]);


        const c1 = new Cliente("12345678A", "Carmen", "AvMadrid");
        const c2 = new Cliente("87654321B", "Alberto", "AvAlamos");
        this.clientes.insertarClientes([c1, c2]);


        const p1 = new Pedido(c1);
        const p2 = new Pedido(c2);

        p1.insertarLibros(this.libros.listaLibros[0], 1);
        p2.insertarLibros(this.libros.listaLibros[1], 2);

        this.pedidos.insertarPedidos([p1, p2]);

    }

    // pagina 1 catalogo
    obtenerLibrosOrdenados(lista) {
        return lista.toSorted((a, b) => a.titulo.localeCompare(b.titulo));
    }
    
    mostrarCatalogoLibros(lista) {

        const librosOrdenados = lista.toSorted((a, b) => {
            return a.titulo.localeCompare(b.titulo);
        });

        let tableBody = document.createElement('tbody');
        librosOrdenados.forEach(libro => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${libro.isbn}</td>
                <td>${libro.titulo}</td>
                <td>${libro.autores.map(aut => aut.nombre)}</td>
                <td>${libro.genero}</td>
                <td>${libro.precio}</td>
                <td>${(libro instanceof Ebook) ? "Ebook" : "Libro en Papel"}</td>
                <td>${libro.stock ?? "Ilimitado"}</td>
                <td> 
                    <button class="btn btn-sm btn-info btn-detalle" data-bs-toggle="modal" data-isbn="${libro.isbn}" data-bs-target="#modalLibro">
                        Ver detalles
                    </button>
                </td>
            
            `;
            tableBody.appendChild(tr);

        });

        return tableBody;
    }



    obtenerFilaCliente(cliente) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${cliente.dni}</td>
        <td>${cliente.nombreCompleto}</td>
        <td>${cliente.direccion}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-primary btn-ver-pedidos" data-dni="${cliente.dni}">
                <i class="bi bi-eye"></i> Ver Pedidos
            </button>
            <button class="btn btn-sm btn-danger btn-borrar-cliente" data-dni="${cliente.dni}">
                <i class="bi bi-trash"></i> Borrar
            </button>
        </td>
    `;
        return tr;
    }

    obtenerAutoresOrdenados(lista){
        return lista.toSorted((a, b) => a.nombre.localeCompare(b.nombre));
    }
}

