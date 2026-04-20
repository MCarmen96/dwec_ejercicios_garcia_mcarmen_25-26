console.log("T04 - Cliente");

class Cliente{

    #dni;
    #nombreCompleto;
    #direccion;
    #listaPedidos;

    constructor(dni,nombre,dirrecion){
        this.dni=dni;
        this.nombreCompleto=nombre;
        this.direccion=dirrecion;
        this.#listaPedidos=[];
    }

    get dni(){return this.#dni}
    set dni(newDni){
        
        if(!Util.validarCadenaNoVacia(newDni)){
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
    set direccion(newDirrecion){
        if(!Util.validarDireccion(newDirrecion)){
            throw new Error("La nueva dirrecion no es valida");
        }
        this.#direccion=newDirrecion;
    }

    get listaPedidos(){return this.#listaPedidos;}

    mostrarDatosCliente(){
        return `·Datos cliente:${this.nombreCompleto},${this.dni},${this.direccion}\nPedidosCliente:${this.listaPedidos.length>0 ? $this.listaPedidos.map(pedido=>pedido) : 'No tienes pedidos'} `;
    }

    mostrarDatosPedidoCliente(){
        let cadenaPedidos="";
        if(this.listaPedidos.length>0){
                this.listaPedidos.forEach((pedido,index)=>{
                cadenaPedidos+=`${index++} ${pedido.mostrarDatosPedido()}`;
            })
        }else{
            cadenaPedidos="No hay pedidos";
        }
    
        return cadenaPedidos;
    }

    mostrarDatosPedidoAbiertoCliente(){
        let cadenaPedidos="";
        if(this.listaPedidos.length>0){
                this.listaPedidos.forEach((pedido,index)=>{
                    if(pedido.abierto){
                        cadenaPedidos+=`${index++} ${pedido.mostrarDatosPedido()}`;
                    }
            });
            if(cadenaPedidos===""){
                cadenaPedidos="No hay pedidos abiertos";
            }
        }else{
            cadenaPedidos="No hay pedidos";
        }
    
        return cadenaPedidos;
    }

    insertarPedidoCliente(pedido){

        if(!(pedido instanceof Pedido)){
            throw new Error("El argumento no es una instancia de Pedido");
            
        }
        this.listaPedidos.push(pedido);
    }


}