console.log("T04 - Ejercicio 0X");

class cliente{

    #dni;
    #nombreCompleto;
    #dirrecion;
    #listaPedidos;

    constructor(dni,nombre,dirrecion){
        this.dni=dni;
        this.nombreCompleto=nombre;
        this.dirrecion=dirrecion;
        this.listaPedidos=[];
    }

    get dni(){return this.#dni}
    set dni(newDni){
        let patron=/^\d{8}[A-Z]$/;
        if(!patron.test(newDni)){
            throw new Error ("El nuevo dni no es valido");
        }
    }

    get nombreCompleto(){return this.#nombreCompleto}
    set nombreCompleto(newNombre){
        if(!Util.validarNombrePersona(newNombre)){
            throw new Error("El nuevo nombre no es valido");
        }
        this.#nombreCompleto=newNombre;
    }

    get dirrecion(){return this.#dirrecion}
    set dirrecion(newDirrecion){
        if(!Util.validarDireccion(newDirrecion)){
            throw new Error("La nueva dirrecion no es valida");
        }
        this.#dirrecion=newDirrecion;
    }

    get listaPedidos(){return this.#listaPedidos;}

    mostrarDatosClientes(){
        return `·Datos cliente:${this.nombreCompleto},${this.dni},${this.dirrecion}\nPedidosCliente:${this.listaPedidos.map(pedido=>pedido.abierto===true)}`
    }

    insertarPedidoCliente(pedido){

        if(!(pedido instanceof Pedido)){
            throw new Error("El argumento no es uan instancia de Pedido");
            
        }

        this.listaPedidos.push(pedido)

    }


}