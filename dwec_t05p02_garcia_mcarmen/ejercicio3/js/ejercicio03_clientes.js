console.log("T04 - Ejercicio 0X");

class Clientes{

    #listadoClientes;

    constructor(){
        this.listadoClientes=[];
    }

    get listadoClientes(){return this.#listadoClientes;}
    set listadoClientes(newlistClientes){
        if(newlistClientes.isArray){
            this.#listadoClientes=newlistClientes;
        }
    }
    existeClientePorDNI(dniAbuscar){
        return this.listadoClientes.some(cliente=>cliente.dni===dniAbuscar);
    }

    insertarClientes(clientes){
        let clientesCount=0;
        clientes.forEach(cliente=> {
            if(!this.existeClientePorDNI(cliente.dni)){
                clientesCount++;
                this.listadoClientes.push(cliente);
            }
        });
        return clientesCount;
    }

    buscarClientePorDNI(dniAbuscar){
        let clienteEncontrado=this.listadoClientes.find(cliente=>{
            return cliente.dni===dniAbuscar;
        })
    }

    borrarClientePorDNI(dniAborrar){
        let puedoBorrar=false;
        let clienteEncontrado=this.buscarClientePorDNI(dniAborrar);

        if(clienteEncontrado===undefined){
            throw new Error("El cliente no exite");
        }
        puedoBorrar=true;
        return puedoBorrar;
    }
    
}