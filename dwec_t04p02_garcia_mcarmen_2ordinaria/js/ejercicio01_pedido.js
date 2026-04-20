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
    #descuento;
    #abierto;

    static ultimoIdAsignado=0;
    
    constructor(cliente){

        this.#id=Pedido.obtenerSiguienteId();
        this.cliente=cliente;
        this.librosPedido=new Map();
        this.fecha=new Date();
        this.tipoEnvioPedido=null;
        this.precioTotalSinEnvioSinIVA=0;
        this.precioTotalConEnvioSinIVA=0;
        this.descuento=0;
        this.abierto=true;
    }

    get id(){return this.#id}
    static obtenerSiguienteId(){
        Pedido.ultimoIdAsignado++;
        return Pedido.ultimoIdAsignado;
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
        this.#abierto=valor;
    }

    hayLibros(){
        return this.librosPedido.size>0;
    }

    mostrarDatosPedido(){

        let datos=`Pedido: ${this.id}\n`;

        this.librosPedido.forEach((unidades,libro) => {
            if(libro instanceof Ebook){
                datos+=`${libro.nombre} Ebook Unidades${unidades}\n`;
            }else if(libro instanceof LibroPapel){
                datos+=`${libro.nombre} Libro Papel Unidades${unidades}\n`;
            }
            
        });
        if(this.tipoEnvioPedido===null){
            datos+="Envio: no tiene envio";
        }else{
            datos+=`-Envio:${this.tipoEnvioPedido.nombre}\n`;
        }
        
        datos+=`-Precio sin iva y sin envio:${this.precioTotalSinEnvioSinIVA}\n`;
        datos+=`-Precio sin iva y con envio: ${this.precioTotalConEnvioSinIVA}`;
        datos+=`-Precio total (con iva y con envio):${this.calcularTotalConIva()}`;

        return datos;
    }

    insertarLibros(libro,unidades){

        if(!(libro instanceof Libro)){
            throw new Error("El libro no es una instancia de la clase Libro");
        }
        if(!(libro instanceof Ebook)){
            this.librosPedido.set(libro,1);
            this.precioTotalSinEnvioSinIVA+=libro.precio;
        }else{
            this.librosPedido.set(libro,unidades);
            this.precioTotalSinEnvioSinIVA+=libro.precio*unidades;
        }
    }

    establecerTipoEnvio(tipoEnvio){
        let isValid=false;
        let peso=0;
        if(tipoEnvio instanceof TipoEnvio){
            if(this.librosPedido.size>0){
                this.librosPedido.forEach((valor,libro)=>{
                    if(libro instanceof LibroPapel){
                        peso+=libro.peso*valor;
                    }
                });
                if(peso>0){
                    if(peso<=tipoEnvio.pesoMax){
                        isValid=true;
                        this.tipoEnvioPedido=tipoEnvio;
                        this.precioTotalConEnvioSinIVA=this.precioTotalSinEnvioSinIVA+tipoEnvio.precioSinIVA;
                    }else{
                        isValid=false;// si el peso de los lirbos supera el maximo de peso del envio
                    }
                }else{
                    isValid=false;// SI todos los libros del pedido son ebooks
                }
            }else{
                isValid=false;// SI no hay libros en lo pedido
            }
        }else{
            isValid=false;// SI LA INSTANCIO NO ES DE TIPO ENVIO
        }
        return isValid;
    }


    calcularTotalConIva(iva){
        let total=0;
        this.librosPedido.forEach((unidades,libro) => {
            total+=libro.precio*unidades;
        });
        total+=this.tipoEnvio.precio;

        if(this.precioTotalConEnvioSinIVA==total){
            total=this.precioTotalConEnvioSinIVA+(this.precioTotalConEnvioSinIVA*iva);
        }else{
            throw new Error("Error inesperado en el total del precio");
        }
        return total;
    }

}