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
        super();
    }

    existePedidoPorID(idAbuscar) {}

    buscarPedidoPorId(idAbuscar) {}

    cerrarPedidoPorId(idAbuscar) {}

    borrarPedidos(pedidosAborrar) {}
}
