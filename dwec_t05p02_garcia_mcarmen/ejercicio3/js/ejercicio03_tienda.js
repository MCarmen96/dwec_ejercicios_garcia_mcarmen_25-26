class Tienda {
    // ===== Propiedad estática =====
    //static instancia = null;
    #nombre;
    #libros;
    #autores;
    #tiposEnvios;
    #clientes;
    #pedidos;
    #leerDatosForm;

    // ===== Método estático Singleton =====
    static getInstancia(nombreTienda) {
        if (Tienda.instancia === null) {
            Tienda.instancia = new Tienda(nombreTienda);
        }
        return Tienda.instancia;
    }
    // ===== Constructor =====
    constructor(nombreTienda) {
        // Evitar instanciación directa
        if (Tienda.instancia !== null) {
            throw new Error("[Tienda] Use Tienda.getInstancia() en lugar de new Tienda()");
        }

        
        this.nombre =nombreTienda;
        //this.lectorDatosForm= new LeerDatosFrom();
        this.clientes= new Clientes();
        this.libros= new Libros();
        this.autores=new Autores();
        //.pedidos=new Pedidos();
        this.tiposEnvios=new tiposEnvios();

    }

    //get nombre() { return this.#nombre; }
    //set nombre(nombre) { this.#nombre = nombre; }

    //get libros() { return this.#libros; }
    //set libros(libros) { this.#libros = libros; }

    //get lector() { return this.#lector; }
    //set lector(lector) { this.#lector = lector; }

    //get autores() { return this.#autores; }
    //set autores(autores) { this.#autores = autores; }

    //get tiposEnvio() { return this.#tiposEnvio; }
    //set tiposEnvio(tiposEnvio) { this.#tiposEnvio = tiposEnvio; }

    //get clientes() { return this.#clientes; }
    //set clientes(clientes) { this.#clientes = clientes; }

    //get pedidos() { return this.#pedidos; }
    //set pedidos(pedidos) { this.#pedidos = pedidos; }
        
        

    cargarDatosPrueba(){
        
        const autoresPrueba=[new Autor('Nisu'),new Autor('NisuDos'),new Autor('Jay Kristof'),new Autor('Brandon Sanderson')]
        
        this.autores.insertarAutores(autoresPrueba);

        const arrayLibros = [
                            new LibroPapel(1111, "Los diarios de la boticaria",[this.autores.listadoAutores[0]], "Novela", 15.99,10,'10x10x5',200),
                            new Ebook(2222, "Kimetsu no yaiba",[this.autores.listadoAutores[1]],"Fantasia",10.99,12,"pdf"),
                            new LibroPapel(3333, "Spy family",[this.autores.listadoAutores[0]], "Ciencia Ficcion", 8.99,10,'10x10x5',120),
                            new LibroPapel(4444,"El imperio de los condenados",[this.autores.listadoAutores[2]],"Fantasia",25.99,10,'10x10x5',200),
                            new Ebook(5555, "Nacidos de la bruma",[this.autores.listadoAutores[3]],"Ciencia Ficcion",22.99,12,"epub")
                        
                        ];
        
        this.libros.insertarLibros(arrayLibros);
        
        autoresPrueba[0].insertarLibro(arrayLibros[0]);
        autoresPrueba[1].insertarLibro(arrayLibros[1]);
        autoresPrueba[2].insertarLibro(arrayLibros[2]);
        autoresPrueba[3].insertarLibro(arrayLibros[3]);

    }

    mostrarCatalogoLibros(){

        let tableBody=document.createElement('tbody');
        this.libros.listaLibros.forEach(libro => {
            let tr=document.createElement('tr');
            tr.innerHTML=`<td>${libro.isbn}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autores.map(aut=>aut.nombre)}</td>
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

}
Tienda.instancia = null;
