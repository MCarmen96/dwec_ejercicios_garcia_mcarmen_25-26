class Tienda {
    // ===== Propiedad estática =====
    static instancia = null;
    #nombre;
    #listaClientes;
    #libros;
    #listaPedidos;
    #tipoPedidos;
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
        this.listaClientes= new Clientes();
        this.libros= new Libros();
        //this.listaPedidos=new Pedidos();
    }

    get listaLibros(){ return this.#libros;}
    set listaLibros(value){
        if(!(value instanceof Libros)){
            throw new Error("Libros Invalido");
        }
        this.#libros=value;
    }

    get listaClientes(){ return this.#listaClientes;}
    set listaClientes(value){
        if(!(value instanceof Clientes)){
            throw new Error("Clientes invalido");
        }
        this.#listaClientes=value;
    }

    get listaPedidos(){ return this.#listaPedidos;}
    set listaPedidos(value){
        if(!(value instanceof Pedidos)){
            throw new Error("Pedidos invalido");
        }
        this.#listaPedidos=value;
    }
        
        



    cargarDatosPrueba(){

        const autorBoticaria=new Autor('Nisu');
        const autorKimetsu=new Autor('Nisu2');

        const libro1 = new LibroPapel(1111, "Los diarios de la boticaria",autorBoticaria, "Novela", 15.99,10,'10x10x5',200);
        const libro2 = new Ebook(2222, "Kimetsu no yaiba",autorKimetsu,"Fantasia",10.99,12,"pdf");
        const arrayLibros = [];
        
        arrayLibros.push(libro1);
        arrayLibros.push(libro2);
        autorBoticaria.insertarLibro(libro1);
        autorKimetsu.insertarLibro(libro2);

        const libros = new Libros();

        libros.insertarLibros(arrayLibros);

    }

    mostrarCatalogoLibros(){

        let tableBody=document.createElement('tbody');
        this.libros.listaLibros.forEach(libro => {
            let tr=document.createElement('tr');
            tr.innerHTML=`<td>${libro.isbn}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.genero}</td>
            <td>${libro.precio}</td>`;
            tableBody.appendChild(tr);

        });

        return tableBody;
    }

}

