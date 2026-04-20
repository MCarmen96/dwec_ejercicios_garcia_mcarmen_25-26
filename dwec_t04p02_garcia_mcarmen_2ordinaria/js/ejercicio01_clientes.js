console.log("T04 - Clientes");

class Clientes{

    #listadoClientes;

    constructor(){
        this.#listadoClientes=[];
    }

    get listadoClientes(){return this.#listadoClientes;}
    //existeClientePorDNI(dniAbuscar): devuelve true o false si ya existe el cliente.
    existeClientePorDNI(dniAbuscar){
        return this.listadoClientes.some(cliente=>cliente.dni===dniAbuscar);
    }
    //insertarClientes(clientes): recibe un array de clientes y los inserta en la lista de clientes. 
    //Verifica antes de insertar que el dni no exista. Devuelve el número de clientes insertados.
    insertarClientes(clientes){
        let clientesCount=0;
        if(clientes instanceof Array){
            clientes.forEach(cliente=> {
                if(cliente instanceof Cliente && !this.existeClientePorDNI(cliente.dni)){
                    this.listadoClientes.push(cliente);
                    clientesCount++;
                }
            });
        }
        return clientesCount;
    }

    buscarClientePorDNI(dniAbuscar){
        let clienteEncontrado=this.listadoClientes.find(cliente=>{
            return cliente.dni===dniAbuscar;
        });
        if(!clienteEncontrado){
            clienteEncontrado="Cliente no encontrado"
        }
        return clienteEncontrado;
    }

    borrarClientePorDNI(dniAborrar){
        let puedoBorrar=false;
        let encontrado=this.buscarClientePorDNI(dniAborrar);
        if(encontrado){
            let position=this.listadoClientes.indexOf(encontrado);
            this.listadoClientes.splice(encontrado,1);
            puedoBorrar=true;
        }
        return puedoBorrar;
    }

    // entre () numero pedido
    obtenerCadenaClientesMenu(){
        let cadenaClientes="";
        
        const clientesOrdenados=this.listadoClientes.toSorted((a,b)=>{
            return a.nombreCompleto.localeCompare(b.nombreCompleto);
        });

        clientesOrdenados.forEach((cliente,index)=>{
            index=1;
            cadenaClientes+=`${index++}.${cliente.nombreCompleto} Pedidos(${cliente.listaPedidos.length})`;
        })
        return cadenaClientes;
    }
    
}