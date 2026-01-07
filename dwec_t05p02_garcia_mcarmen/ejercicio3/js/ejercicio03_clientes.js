console.log("T04 - Ejercicio 0X");

class Clientes{

    #listadoClientes;

    constructor(){
        this.listadoClientes=[];
    }

    get listadoClientes(){return this.#listadoClientes;}
    set listadoClientes(newlistClientes){
        if(Array.isArray(newlistClientes)){
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
                this.listadoClientes.push(cliente);
                clientesCount++;
            }
        });
        return clientesCount;
    }

    buscarClientePorDNI(dniAbuscar){
        return this.listadoClientes.find(cliente => 
        String(cliente.dni).trim() === String(dniAbuscar).trim()
    );
    }

    borrarClientePorDNI(dniAborrar){
        if (!this.existeClientePorDNI(dniAborrar)) {
            throw new Error("El cliente no existe");
        }
        this.listadoClientes.filter(c => c.dni !== dniAborrar);
        return true;
    }
    
}