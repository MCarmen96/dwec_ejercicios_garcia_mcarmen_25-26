class Pedidos {
    #listadoPedidos;

    constructor() {
        this.#listadoPedidos = [];
    }

    get listadoPedidos() {
        return this.#listadoPedidos;
    }

    existePedidoPorID(idAbuscar) {
        const hayPedido = this.listadoPedidos.some((pedido) => pedido.id == idAbuscar);
        return hayPedido;
    }

    insertarPedidos(pedidos) {
        let contador = 0;
        for (const pedido of pedidos) {
            if (!this.existePedidoPorID(pedido)) {
                contador++;
                this.listadoPedidos.push(pedido);
            }
        }
        return contador;
    }

    buscarPedidoPorId(idAbuscar) {
        const miPedido = this.listadoPedidos.find((pedido) => pedido.id == idAbuscar);
        if (miPedido == undefined) {
            return null;
        } else {
            return miPedido;
        }
    }

    cerrarPedidoPorId(idAbuscar) {
        const miPedido = this.listadoPedidos.find((pedido) => pedido.id == idAbuscar); // Corregido ==
        if (miPedido) {
            miPedido.abierto = false;
            return true;
        }
        return false;
    }

    borrarPedidos(pedidosAborrar) {

        let todosBorrados = true;
        for (const idABorrar of pedidosAborrar) {
            const indice = this.listadoPedidos.findIndex(pedido => pedido.id === idABorrar);
            if (indice !== -1) {
                this.listadoPedidos.splice(indice, 1);
            } else {
                todosBorrados = false;
            }
        }
        return todosBorrados;
    }


}