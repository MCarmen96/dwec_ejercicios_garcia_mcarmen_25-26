console.log("T04 - TIPOS ENVIOS");

class TiposEnvios{
    #tiposEnvios;

    constructor(){
        this.#tiposEnvios=[];
    }

    get tiposEnvios(){return this.#tiposEnvios}

    //existeTipoPorNombre(nombreAbuscar): devuelve true o false si ya existe el tipo de envío.
    existeTipoPorNombre(nombreAbuscar){
        return this.tiposEnvios.some(envio=>envio.nombre===nombreAbuscar);
    }
    //insertarTipos(tiposEnvios): recibe un array de tipos de envíos y los inserta en la lista.
    //Verifica antes de insertar que el nombre completo no exista. 
    //Devuelve el número de tipos insertados.
    insertarTipos(tiposEnvios){
        let countEnvios=0;
        if(tiposEnvios instanceof Array){
            tiposEnvios.forEach(tipo => {
            if(tipo instanceof TipoEnvio && !this.existeTipoPorNombre(tipo.nombre)){
                this.tiposEnvios.push(tipo);
                countEnvios++;
            }
        });
        }
        return countEnvios;
    }

    //buscarTiposPorNombre (nombreAbuscar): devuelve un objeto tipo de envío por nombre. Si no encuentra ninguno devuelve null.
    buscarTiposPorNombre(nombreAbuscar){
        let tipoEnvio=this.tiposEnvios.find(tipo=>{
            return tipo.nombre===nombreAbuscar;
        });
        return tipoEnvio;
    };

    //obtenerCadenaTiposMenu(): Devuelve una cadena con el listado numerado de los tipos de gastos en orden de precio mayor a menos y entre paréntesis el precio.
    obtenerCadenaTiposMenu(){
        let cadenaTiposEnvios="";
        const ordenadoPorPrecio=this.tiposEnvios.toSorted((a,b)=>{
            return a.precioSinIva-b.precioSinIva;
        });
        ordenadoPorPrecio.forEach((tipo,index)=>{
            return cadenaTiposEnvios+=`\n${(index+1)}.${tipo.nombre} PrecioSinIva:(${tipo.precioSinIVA})`;
        });

        return cadenaTiposEnvios;
    }
}
