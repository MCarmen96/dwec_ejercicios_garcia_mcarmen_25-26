console.log("T04 - Ejercicio 0X");

class tiposEnvios{
    #tiposEnvios;

    constructor(){
        this.tiposEnvios=[];
    }

    get tiposEnvios(){return this.#tiposEnvios}

    //existeTipoPorNombre(nombreAbuscar): devuelve true o false si ya existe el tipo de envío.
    existeTipoPorNombre(nombreAbuscar){
        return this.tiposEnvios.some(envio=>{envio.nombre===nombreAbuscar});
    }

    //insertarTipos(tiposEnvios): recibe un array de tipos de envíos y los inserta en la lista.
    //Verifica antes de insertar que el nombre completo no exista. 
    //Devuelve el número de tipos insertados.
    insertarTipos(tiposEnvios){
        let tipos=0;
        tiposEnvios.forEach(tipo => {
            if(!this.existeTipoPorNombre(tipo)){
                tipos++;
                this.tiposEnvios.push(tipo);
            }
        });
        return tipos;
    }
    //buscarTiposPorNombre (nombreAbuscar): devuelve un objeto tipo de envío por nombre. Si no encuentra ninguno devuelve null.
    buscarTiposPorNombre(nombreAbuscar){
        let tipoEnvio=this.tiposEnvios.filter(tipo=>{
            return tipo.nombre===nombreAbuscar;
        })
    };

    //obtenerCadenaTiposMenu(): Devuelve una cadena con el listado numerado de los tipos de gastos en orden de precio mayor a menos y entre paréntesis el precio.
    obtenerCadenaTiposMenu(){
        let cadenaTiposEnvios;
        const ordenadoPorPrecio=this.tiposEnvios.toSorted((a,b)=>{
            return a.preciosSinIva-b.preciosSinIva;
        });
        ordenadoPorPrecio.forEach(tipo,index=>{
            cadenaTiposEnvios+=`${(index+1)} ${tipo.nombre} (${tipo.preciosSinIva})`;
        })
    }
}
