console.log("T04 - PEDIDO");

// buscar en matrices bidimensionales

class Pedido {
    #id;
    #cliente;
    #librosPedido;
    #fecha;
    #tipoEnvioPedido;
    #precioTotalSinEnvioSinIVA;
    //#precioTotalConEnvioSinIVA; --> Cambio
    #descuento;
    #abierto;

    // Atributos calculados. Se resuelve con get.
    // #precioTotalConEnvioSinIVA
    // #precioTotalConEnvioConIVA
    // #precioTotalConEnvioConIVAConDescuento

    static ultimoIdAsignado = 0;

    constructor(cliente) {
        this.#id = Pedido.obtenerSiguienteId();
        this.cliente = cliente;
        this.librosPedido = new Map();// tambien podria asignarselo directamente a la propiedad privada
        //this.fecha = new Date(); No puedes usar el setter porque el setter espera una cadena fecha.
        this.#fecha = new Date();
        // También se puede asignar directamente al atributo privado porque
        // ya sabemos que es la fecha es nueva.
        this.tipoEnvioPedido = null;
        this.precioTotalSinEnvioSinIVA = 0;
        //this.precioTotalConEnvioSinIVA=0;
        this.descuento = 0;
        this.abierto = true;

        // Al crear el pedido, también se registra automáticamente en el cliente.
        this.cliente.insertarPedidoCliente(this);
    }

    //getter y setter de atributos almacenados
    get id() {
        return this.#id;
    }
    static obtenerSiguienteId() {
        Pedido.ultimoIdAsignado++;
        return Pedido.ultimoIdAsignado;
    }

    get cliente() {
        return this.#cliente;
    }
    set cliente(newCliente) {
        if (!(newCliente instanceof Cliente)) {
            throw new Error("El nuevo cliente no es una instancia de la calse Cliente");
        }
        this.#cliente = newCliente;
    }

    get librosPedido() {
        return this.#librosPedido;
    }
    set librosPedido(newLibrosPedido) {
        if (!(newLibrosPedido instanceof Map)) {
            throw new Error("librosPedido debe ser un Map");
        }
        this.#librosPedido = newLibrosPedido;
    }

    get fecha() {
        return this.#fecha;
    }
    /* set fecha(newFecha) {
        if (!Util.validarFecha(newFecha)) {
            throw new Error("Fecha invalida");
        }
        this.#fecha = newFecha;
    } */

    get tipoEnvioPedido() {
        return this.#tipoEnvioPedido;
    }
    set tipoEnvioPedido(tipoEnvio) {
        if (!(tipoEnvio instanceof TipoEnvio) && tipoEnvio !== null) {
            throw new Error("tipoEnvioPedido Inválido");
        }
        this.#tipoEnvioPedido = tipoEnvio;
    }
    get precioTotalSinEnvioSinIVA() {
        return this.#precioTotalSinEnvioSinIVA;
    }
    set precioTotalSinEnvioSinIVA(precio) {
        if (!Util.validarPrecio(precio)) {
            throw new Error("Precio no valido");
        }
        this.#precioTotalSinEnvioSinIVA = precio;
    }

    /*get precioTotalConEnvioSinIVA(){return this.#precioTotalConEnvioSinIVA}
    set precioTotalConEnvioSinIVA(precio){
        if(!Util.validarPrecio(precio)){
            throw new Error("Precio no valido");
        }
        this.#precioTotalConEnvioSinIVA=precio;
    }*/

    get descuento() {
        return this.#descuento;
    }
    set descuento(newDescuento) {
        if (!Util.validarPorcentaje(newDescuento)) {
            throw new Error("Descuento no valido");
        }
        this.#descuento = newDescuento;
    }

    get abierto() {
        return this.#abierto;
    }
    set abierto(valor) {
        if (typeof valor !== "boolean") {
            throw new Error("Abierto invalido");
        }
        this.#abierto = valor;
    }

    //Getters de los atributos calculados
    get precioTotalConEnvioSinIVA() {
        if (this.tipoEnvioPedido === null) {
            return this.precioTotalSinEnvioSinIVA;
        }

        return this.precioTotalSinEnvioSinIVA + this.tipoEnvioPedido.precioSinIVA;
    }

    get precioTotalConEnvioConIVA() {
        return this.calcularTotalConIVA();
    }

    get precioTotalConEnvioConIVAConDescuento() {
        return this.calcularTotalConIVAyConDescuento();
    }

    //MÉTODOS PRIVADOS:
    #calcularIVA(importe) {
        return (importe * Tienda.IVA) / 100;
    }

    //MÉTODOS PÚBLICOS:

    hayLibros() {
        return this.librosPedido.size > 0;
    }

    mostrarDatosPedido() {
        let datos = `Pedido: ${this.id} (${Util.formatearFecha(this.fecha)})\n`;
        datos += "======================\n";
        if (this.librosPedido.size > 0) {
            datos += "Libros del pedido: \n";
            this.librosPedido.forEach((unidades, libro) => {
                if (libro instanceof Ebook) {
                    datos += `${libro.titulo} [Ebook] Unidades: ${unidades}\n`;
                } else if (libro instanceof LibroPapel) {
                    datos += `${libro.titulo} [Libro Papel] Unidades: ${unidades}\n`;
                }
            });
        } else {
            datos += "Libros: no tiene libros.\n";
        }
        if (this.tipoEnvioPedido === null) {
            datos += "Envio: no tiene envio.\n";
        } else {
            datos += `- Envio: ${this.tipoEnvioPedido.nombre}\n`;
        }
        datos += "Precios:\n";
        datos += `- Precio sin iva y sin envio: ${this.precioTotalSinEnvioSinIVA}\n`;
        datos += `- Precio sin iva y con envio: ${this.precioTotalConEnvioSinIVA}\n`;
        datos += `- Precio total (con iva y con envio): ${this.precioTotalConEnvioConIVA}\n`;

        if (this.descuento > 0) {
            datos += `- Precio total (con IVA, con envio y con descuentos): ${this.precioTotalConEnvioConIVAConDescuento}\n`;
        } else {
            datos += `- Precio total (con IVA, con envio y con descuentos): No hay descuentos disponibles.\n`;
        }
        datos += "\n";
        return datos;
    }

    insertarLibro(libro, unidades) {
        if (!this.abierto) {
            throw new Error("El pedido está cerrado.");
        }
        if (!(libro instanceof Libro)) {
            throw new Error("El libro no es una instancia de la clase Libro");
        }
        if (!Util.validarUnidades(unidades) || unidades == 0) {
            throw new Error("Las unidades no son correctas");
        }

        if (libro instanceof Ebook) {
            if (!this.librosPedido.has(libro)) {// si esta en el mapa
                this.precioTotalSinEnvioSinIVA += libro.precio;
            }
            this.librosPedido.set(libro, 1);// el set del map busca la calve y si esta ya esa clave sobrescribe su valor 
        } else {
            let unidadesOriginal = 0;
            if (this.librosPedido.has(libro)) {
                unidadesOriginal = this.librosPedido.get(libro);// este get es el del mapa que me da el vlor de la clave
            }
            if (unidades > libro.stock + unidadesOriginal) {// comprueba la simulacion del stock con las unidades que ya habia pedidas para ver si puede efectuarse el pedido con las nuevas unidades pedidas
                throw new Error("No hay stock suficiente");// si no paramos no se pueden pedir
            }
            if (this.librosPedido.has(libro)) {// aqui cambiamos el stock al que teniamos antes
                libro.stock += unidadesOriginal;
                this.precioTotalSinEnvioSinIVA -= libro.precio * unidadesOriginal;// y lo restamos tambien del precio que habiamos sumado antes
            }
            // y aqui e es donde efectuamos el pedido con las unidades pedidas
            this.librosPedido.set(libro, unidades);
            libro.stock -= unidades;
            this.precioTotalSinEnvioSinIVA += libro.precio * unidades;
        }
        let totalUnidades = 0;
        this.librosPedido.forEach((uds) => {
            totalUnidades += uds;
        });

        return totalUnidades;
    }

    establecerTipoEnvio(tipoEnvio) {
        if (!this.abierto) {
            throw new Error("El pedido está cerrado.");
        }
        let isValid = false;
        let peso = 0;

        if (tipoEnvio instanceof TipoEnvio) {
            if (this.librosPedido.size > 0) {
                this.librosPedido.forEach((unidades, libro) => {
                    if (libro instanceof LibroPapel) {
                        peso += libro.peso * unidades;
                    }
                });
                if (peso > 0) {
                    //si no supera el peso max el tipo de envio
                    if (peso <= tipoEnvio.pesoMax) {
                        isValid = true;
                        // establezco el tipo de envio a mi pedido
                        this.tipoEnvioPedido = tipoEnvio;
                        //this.precioTotalConEnvioSinIVA = this.precioTotalSinEnvioSinIVA + tipoEnvio.precioSinIVA;
                    } else {
                        isValid = false; // si el peso de los libros supera el maximo de peso del envio
                    }
                } else {
                    isValid = false; // SI todos los libros del pedido son ebooks
                }
            } else {
                isValid = false; // SI no hay libros en lo pedido
            }
        } else {
            isValid = false; // SI LA INSTANCIO NO ES DE TIPO ENVIO
        }
        return isValid;
    }

    calcularTotalConIVA() {
        let total = 0;

        this.librosPedido.forEach((unidades, libro) => {
            total += libro.precio * unidades;
        });

        if (total === this.precioTotalSinEnvioSinIVA) {
            total = this.precioTotalSinEnvioSinIVA;

            if (this.tipoEnvioPedido !== null) {
                total += this.tipoEnvioPedido.precioSinIVA;
            }

            total = total + this.#calcularIVA(total);
        } else {
            throw new Error("Error inesperado en el total del precio");
        }

        return total;
    }

    aplicarDescuento(descuentoEnPorcentaje) {
        if (!this.abierto) {
            throw new Error("El pedido está cerrado.");
        }

        if (!Util.validarPorcentaje(descuentoEnPorcentaje)) {
            throw new Error("El descuento no es válido.");
        }

        this.descuento = descuentoEnPorcentaje;

        return this.calcularTotalConIVAyConDescuento();
    }
    calcularTotalConIVAyConDescuento() {
        let total = 0;

        this.librosPedido.forEach((unidades, libro) => {
            total += libro.precio * unidades;
        });

        if (total === this.precioTotalSinEnvioSinIVA) {
            total = this.precioTotalSinEnvioSinIVA;

            total = total - (total * this.descuento) / 100;

            if (this.tipoEnvioPedido !== null) {
                total += this.tipoEnvioPedido.precioSinIVA;
            }

            total = total + this.#calcularIVA(total);
        } else {
            throw new Error("Error inesperado en el total del precio");
        }

        return total;
    }
}
