console.log("T04 - Ejercicio 0X");

// buscar en matrices bidimensionales

class Pedido{

    #id;
    #cliente;
    #librosPedido;
    #fecha;
    #tipoEnvioPedido;
    #precioTotalSinEnvioSinIVA;
    #precioTotalConEnvioSinIVA;
    #precioTotalConEnvioConIVA;
    #descuento;
    #abierto;

    static ultimoIdAsignado=0;

    constructor(cliente){

        this.id=Pedido.obtenerSiguienteId();
        this.cliente=cliente;
        this.librosPedido=new Map();
        this.fecha=new Date();
        this.tipoEnvioPedido=null;
        this.precioTotalSinEnvioSinIVA=0;
        this.precioTotalConEnvioSinIVA=0;
        this.precioTotalConEnvioConIVA=0;
        this.#descuento=0;
        this.abierto=true;
        this.#cliente.insertarPedidoCliente(this);
    }

    static obtenerSiguienteId(){
        return ++Pedido.ultimoIdAsignado;
    }

    get id(){return this.#id}
    
    set id(newId){
        this.#id=newId;
    }

    get cliente(){return this.#cliente}
    set cliente(newCliente){
        if(!(newCliente instanceof Cliente)){
            throw new Error("El nuevo cliente no es una instancia de la calse Cliente");
        }
        this.#cliente=newCliente;
    }

    get librosPedido(){return this.#librosPedido}
    set librosPedido(newLibrosPedido){
        if(!(newLibrosPedido instanceof Map)){
            throw new Error("librosPedido debe ser un Map");
        }
        this.#librosPedido=newLibrosPedido;
    }

    get fecha(){return this.#fecha}
    set fecha(newFecha){
        if(!Util.validarFecha(newFecha)){
            throw new Error("Fecha invalida");
        }
        this.#fecha=newFecha;
    }

    get tipoEnvioPedido(){return this.#tipoEnvioPedido}
    set tipoEnvioPedido(tipoEnvio) {
        if (!(tipoEnvio instanceof TipoEnvio) && tipoEnvio !== null) {
            throw new Error("tipoEnvioPedido Inválido");
        }
        this.#tipoEnvioPedido = tipoEnvio;
    }
    get precioTotalSinEnvioSinIVA(){return this.#precioTotalSinEnvioSinIVA}
    set precioTotalSinEnvioSinIVA(precio){
        if(!Util.validarPrecio(precio)){
            throw new Error("Precio no valido");
        }
        this.#precioTotalSinEnvioSinIVA=precio;
    }

    get precioTotalConEnvioSinIVA(){return this.#precioTotalConEnvioSinIVA}
    set precioTotalConEnvioSinIVA(precio){
        if(!Util.validarPrecio(precio)){
            throw new Error("Precio no valido");
        }
        this.#precioTotalConEnvioSinIVA=precio;
    }
    get precioTotalConEnvioConIVA(){return this.#precioTotalConEnvioConIVA}
    set precioTotalConEnvioConIVA(precio){
        if(!Util.validarPrecio(precio)){
            throw new Error("Precio no valido");
        }
        this.#precioTotalSinEnvioSinIVA=precio;
    }
    get descuento(){return this.#descuento}
    set descuento(newDescuento){
        if(!Util.validarPrecio(newDescuento)){
            throw new Error("Descuento no valido");
        }
        this.#descuento=newDescuento;
    }

    get abierto(){return this.#abierto}
    set abierto(valor){
        if(typeof valor!=="boolean"){
            throw new Error("Abierto invalido");
        }
    }

    hayLibros(){
        return this.librosPedido.length>0;
    }

    mostrarDatosPedido(){

        let datos=`Pedido: ${this.id}\n`;

        this.librosPedido.forEach(libro => {
            if(libro instanceof Ebook){
                datos+=`${libro.nombre} Ebook\n`;
            }else if(libro instanceof LibroPapel){
                datos+=`${libro.nombre} Libro Papel\n`;
            }
            
        });

        datos+=`-Envio:${this.tipoEnvioPedido}\n`;
        datos+=`-Precio sin iva y sin envio:${this.precioTotalSinEnvioSinIVA}\n`;
        datos+=`-Precio con envio: ${this.precioTotalConEnvioSinIVA}`;
        datos+=`-Precio total:${this.precioTotalConEnvioConIVA}`;
    }

    insertarLibros(libro,unidades){

        if(!(libro instanceof Libro)){
            throw new Error("El libro no es una instancia de la clase Libro");
        }
        this.librosPedido.set(libro.isbn)
        if(!(libro instanceof Ebook)){
            this.librosPedido.set(libro,1);
        }else{
            this.librosPedido.set(libro,unidades);
        }

    }

    /*establecerTipoEnvio(){
        if()
    }

    calcularTotal(){
        this.librosPedido.get('');
    }*/

}