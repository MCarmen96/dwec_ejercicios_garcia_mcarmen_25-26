console.log("T04 - Ejercicio 0X");

class tiposEnvios{
    #tiposEnvios;

    constructor(){
        this.tiposEnvios=[];
    }

    get tiposEnvios(){return this.#tiposEnvios}

    existeTipoPorNombre(nombreAbuscar){
        return this.tiposEnvios.some(envio=>{envio.nombre===nombreAbuscar});
    }
    insertarTipos(tiposEnvios){
        
    }
}
