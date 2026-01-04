class Tienda {
    // ===== Propiedad estática =====
    static instancia = null;
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
        this.#nombre =nombreTienda;
        this.#clientes= new Clientes();
        this.#libros= new Libros();
        this.#autores=new Autores();

    }

    get nombre() { return this.#nombre; }
    set nombre(nombre) { this.#nombre = nombre; }

    get libros() { return this.#libros; }
    set libros(libros) { this.#libros = libros; }

    //get lector() { return this.#lector; }
    //set lector(lector) { this.#lector = lector; }

    get autores() { return this.#autores; }
    set autores(autores) { this.#autores = autores; }

    //get tiposEnvio() { return this.#tiposEnvio; }
    //set tiposEnvio(tiposEnvio) { this.#tiposEnvio = tiposEnvio; }

    get clientes() { return this.#clientes; }
    set clientes(clientes) { this.#clientes = clientes; }

    //get pedidos() { return this.#pedidos; }
    //set pedidos(pedidos) { this.#pedidos = pedidos; }
        
        

    cargarDatosPrueba(){
        
        const autoresPrueba=[new Autor('Nisu'),new Autor('NisuDos')]
        
        this.autores.insertarAutores(autoresPrueba);

        const arrayLibros = [
                            new LibroPapel(1111, "Los diarios de la boticaria",[this.autores.listadoAutores[0]], "Novela", 15.99,10,'10x10x5',200),
                            new Ebook(2222, "Kimetsu no yaiba",[this.autores.listadoAutores[1]],"Fantasia",10.99,12,"pdf")];
        
        this.libros.insertarLibros(arrayLibros);
        
        autoresPrueba[0].insertarLibro(arrayLibros[0]);
        autoresPrueba[1].insertarLibro(arrayLibros[1]);

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
            <button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#modalLibro">
                Ver detalles
            </button>
            
            `;
            tableBody.appendChild(tr);

        });

        return tableBody;
    }

}

