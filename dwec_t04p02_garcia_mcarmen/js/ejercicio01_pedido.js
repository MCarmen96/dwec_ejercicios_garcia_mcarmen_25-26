console.log("T04 - Ejercicio 0X");


class Pedido{

    #id;
    #cliente;
    #librosPedido;
    #fecha;
    #tipoEnvioPedido;
    #precioTotalSinEnvioSinIVA;
    #precioTotalConEnvioSinIVA;
    #precioTotalConEnvioIVA;
    #descuento;
    #abierto;

    static ultimoIdAsignado=0;

    constructor(cliente){

        this.#id=obtenerSiguienteId();
        this.cliente=cliente;
        this.librosPedido=new Map([]);
        this.tipoEnvioPedido=null;
        this.precioTotalSinEnvioSinIVA=0;
        this.precioTotalConEnvioSinIVA=0;
        this.precioTotalConEnvioConIVA=0;
        this.#descuento=0;
        this.abierto=true;
        this.#cliente.insertarPedidoCliente(this);
    }

    static obtenerSiguienteId(){
        Pedido.ultimoIdAsignado++;
        return Pedido.ultimoIdAsignado;
    }

    get cliente(){return this.#cliente}
    set cliente(newCliente){
        if(newCliente instanceof Cliente){
            
        }
    }


}