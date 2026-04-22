console.log("T04 - PEDIDOS");

class Pedidos {
    #listadoPedidos;

    constructor() {
        this.#listadoPedidos = [];
        // Aquí se podría usar el setter (this.listadoPedidos = []).
        // También se puede asignar directamente al atributo privado porque
        // ya sabemos que es un array vacío
        // válido y no es necesario realizar ninguna validación.
    }

    get listadoPedidos() {
        return this.#listadoPedidos;
    }

    set listadoPedidos(nuevoListadoPedidos) {
        if (!(nuevoListadoPedidos instanceof Array)) {
            throw new Error("listadoPedidos debe ser un array.");
        }

        nuevoListadoPedidos.forEach((pedido) => {
            if (!(pedido instanceof Pedido)) {
                throw new Error("Todos los elementos del array deben ser objetos de tipo Pedido.");
            }
        });

        this.#listadoPedidos = nuevoListadoPedidos;
    }

    insertarPedidos(pedidos) {
        let totalInsertados = 0;

        if (pedidos instanceof Array) {
            pedidos.forEach((pedido) => {
                if (pedido instanceof Pedido) {
                    this.listadoPedidos.push(pedido);
                    totalInsertados++;
                }
            });
        }

        return totalInsertados;
    }
    insertarUnPedido(pedido) {
        let insertado = 0;

        if (pedido instanceof Pedido) {
            this.listadoPedidos.push(pedido);
            insertado = 1;
        }

        return insertado;
    }

    mostrarDatosPedidos() {
        let cadenaPedidos = "";

        if (this.listadoPedidos.length > 0) {
            this.listadoPedidos.forEach((pedido, index) => {
                cadenaPedidos += `${index + 1} ${pedido.mostrarDatosPedido()}\n`;
            });
        } else {
            cadenaPedidos = "No hay pedidos";
        }

        return cadenaPedidos;
    }

    mostrarDatosPedidosAbiertos() {
        let cadenaPedidos = "Pedidos Abiertos\n============\n";

        if (this.listadoPedidos.length > 0) {
            this.listadoPedidos.forEach((pedido, index) => {
                if (pedido.abierto) {
                    cadenaPedidos += `${index + 1} ${pedido.mostrarDatosPedido()}\n`;
                }
            });

            if (cadenaPedidos === "") {
                cadenaPedidos = "No hay pedidos abiertos";
            }
        } else {
            cadenaPedidos = "No hay pedidos";
        }

        return cadenaPedidos;
    }
}

class PedidosTienda extends Pedidos {
    constructor() {
        super(listadoPedidos);
    }
    //existePedidoPorID(idAbuscar): devuelve true o false si ya existe el pedido.
    existePedidoPorID(idAbuscar) {
        return this.listadoPedidos.some(pedido => pedido.id === idAbuscar);
    }
    //buscarPedidoPorId (idAbuscar): devuelve un objeto pedido por id. Si no encuentra ningún pedido con ese id, devuelve null.
    buscarPedidoPorId(idAbuscar) {
        let pedidoEncontrado = this.listadoPedidos.find(pedido => {
            return pedido.id === idAbuscar;
        })
        return pedidoEncontrado;
    }
    //cerrarPedidoPorId (idAbuscar): cierra un pedido por id. Devuelve true / false si lo ha podido cerrar o no.
    cerrarPedidoPorId(idAbuscar) {
        let pedidoEncontrado = this.buscarPedidoPorId(idAbuscar);
        if (pedidoEncontrado) {
            pedidoEncontrado.abierto = false;
            return true;
        }
        return false;
    }
    //borrarPedidos (pedidosAborrar): devuelve true / false si puede o no borrar todos los pedidos que recibe en un array. Usa splice().
    borrarPedidos(pedidosAborrar) {
        let borro=true;
        if (pedidosAborrar instanceof Array) {
            for (const pedido of pedidosAborrar) {
                if (pedido instanceof Pedido) {
                    const encontrado = this.buscarPedidoPorId(pedido.id);//verifico que esta en mi lista
                    if (encontrado) {//si esta
                        let posicion = this.listadoPedidos.indexOf(encontrado);// cojo su posicion
                        this.listadoPedidos.splice(encontrado, 1);
                    }else{
                        borro=false;
                    }
                }else{
                    borro=false;
                }
            }
        } else {
            borro=false;
        }
    }
}
