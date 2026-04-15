console.log("T04 - Ejercicio 0X");

class Tienda{

    #libros;
    #autores;
    #tiposEnvio;
    #clientes;
    #pedidos;
    #nombreTienda;
    #lector;

    static IVA;

    constructor(nombre){
        this.nombreTienda=nombre;
    }
    get nombreTienda(){return this.#nombreTienda}
    set nombreTienda(newNombre){
        if(newNombre===""||newNombre.lenght<=0){
            throw new Error("El nombre de la tienda no es valido");
        }
    }

    cargarDatosPrueba(){

        let libro1=new Libro(111,"los diarios de la boticaria","nisu","Fantasia",20,15);
        const libros=new Libros(libro1);

        let autor1=new Autor("Carmen");
        let autores=new Autores(autor1);

        libros.existeLibroPorIsbn(111);
        libro1.mostrarDatosLibro();

    }
}