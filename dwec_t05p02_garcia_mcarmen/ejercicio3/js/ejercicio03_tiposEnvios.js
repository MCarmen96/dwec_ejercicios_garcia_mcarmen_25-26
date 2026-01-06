console.log("T04 - Ejercicio 0X");

class TiposEnvios{
    #listadoTiposEnvios;

    constructor(){
        this.listadoTiposEnvios=[];
    }

    get listadoTiposEnvios(){return this.#listadoTiposEnvios}
    set listadoTiposEnvios(listadoTiposEnvios) { this.#listadoTiposEnvios = listadoTiposEnvios; }
    //existeTipoPorNombre(nombreAbuscar): devuelve true o false si ya existe el tipo de envío.
    existeTipoPorNombre(nombreAbuscar){
        return this.tiposEnvios.some(envio=>envio.nombre===nombreAbuscar);
    }

    //insertarTipos(tiposEnvios): recibe un array de tipos de envíos y los inserta en la lista.
    //Verifica antes de insertar que el nombre completo no exista. 
    //Devuelve el número de tipos insertados.
    insertarTipos(tiposEnvios){
        let tipos=0;
        tiposEnvios.forEach(tipo => {
            if(!this.existeTipoPorNombre(tipo)){
                tipos++;
                this.listadoTiposEnvios.push(tipo);
            }
        });
        return tipos;
    }
    //buscarTiposPorNombre (nombreAbuscar): devuelve un objeto tipo de envío por nombre. Si no encuentra ninguno devuelve null.
    buscarTiposPorNombre(nombreAbuscar){
        return this.listadoTiposEnvios.find(tipo => tipo.nombre === nombreAbuscar) || null;
    };

    //obtenerCadenaTiposMenu(): Devuelve una cadena con el listado numerado de los tipos de gastos en orden de precio mayor a menos y entre paréntesis el precio.
    obtenerCadenaTiposMenu(){
        let cadenaTiposEnvios = ""; // Inicializar siempre
        // CORREGIDO: Ordenar de mayor a menor precio y nombre de propiedad IVA
        const ordenadoPorPrecio = this.#listadoTiposEnvios.toSorted((a, b) => {
            return b.preciosSinIVA - a.preciosSinIVA;
        });

        ordenadoPorPrecio.forEach((tipo, index) => {
            cadenaTiposEnvios += `${index + 1}. ${tipo.nombre} (${tipo.preciosSinIVA}€)\n`;
        });
        
        return cadenaTiposEnvios;
    }
}
