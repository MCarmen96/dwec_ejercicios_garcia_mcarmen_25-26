console.log("T04 - Ejercicio 0X");

class tipoEnvio{
    #nombre;//NO PUEDE HABER 2 IGUALES
    #diasMaxEntrega;
    #pesoMax;
    #preciosSinIVA;

    constructor(nombre,dias,peso,precio){
        this.nombre=nombre;
        this.diasMaxEntrega=dias;
        this.pesoMax=peso;
        this.preciosSinIVA=precio
    }

    get nombre(){return this.#nombre};
    set nombre(newNombre){
        if(newNombre===""){
            throw new Error("El nombre no puede estar vacio");
        }
        this.#nombre=newNombre;
    }
    get diasMaxEntrega(){return this.#diasMaxEntrega};
    set diasMaxEntrega(newDias){
        if(!Util.validarDiasEnvio(newDias)){
            throw new Error("Dias no validos");
        }
        this.#diasMaxEntrega=newDias;
    }

    get pesoMax(){return this.#pesoMax};
    set pesoMax(newPeso){
        if(!Util.validarPeso(newPeso)){
            throw new Error("El peso no es valido");
        }
        this.#pesoMax=newPeso;
    }

    get preciosSinIVA(){return this.#preciosSinIVA};
    set preciosSinIVA(newPrecio){
        if(!Util.validarPrecio(newPrecio)){
            throw new Error("El precio nuevo no es valido");
        }
        this.#preciosSinIVA=newPrecio;
    }

    mostrarDatosTipoEnvio(){
        return `${this.nombre}\n ${this.diasMaxEntrega}\n ${this.pesoMax}\n ${this.preciosSinIVA}`;
    }
}