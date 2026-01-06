console.log("T04 - Ejercicio 0X");

class cliente{

    #dni;
    #nombreCompleto;
    #direccion;
    #listaPedidos;

    constructor(dni,nombre,direccion){
        this.dni=dni;
        this.nombreCompleto=nombre;
        this.direccion=direccion;
        this.listaPedidos=[];
    }

    get dni(){return this.#dni}
    set dni(newDni){
        let patron=/^\d{8}[A-Z]$/;
        if(!patron.test(newDni)){
            throw new Error ("El nuevo dni no es valido");
        }
        this.#dni=newDni;
    }

    get nombreCompleto(){return this.#nombreCompleto}
    set nombreCompleto(newNombre){
        if(!Util.validarNombrePersona(newNombre)){
            throw new Error("El nuevo nombre no es valido");
        }
        this.#nombreCompleto=newNombre;
    }

    get direccion(){return this.#direccion}
    set direccion(newDireccion){
        if(!Util.validarDireccion(newDireccion)){
            throw new Error("La nueva dirrecion no es valida");
        }
        this.#direccion=newDireccion;
    }

    get listaPedidos(){return this.#listaPedidos;}
    set listaPedidos(newPedidos){
        if(Array.isArray(newPedidos)){
            this.#listaPedidos=newPedidos;
        }
    }
    mostrarDatosClientes(){
        return `·Datos cliente:${this.nombreCompleto},${this.dni},${this.direccion}\nPedidosCliente:${this.listaPedidos.map(pedido=>pedido.abierto===true)}`
    }

    insertarPedidoCliente(pedido){

        if(!(pedido instanceof Pedido)){
            throw new Error("El argumento no es uan instancia de Pedido");
            
        }
        this.listaPedidos.push(pedido)
    }


}