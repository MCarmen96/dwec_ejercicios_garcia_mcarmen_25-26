console.log("T04 - Tipo envio");

class TipoEnvio{
    #nombre;//NO PUEDE HABER 2 IGUALES
    #diasMaxEntrega;
    #pesoMax;
    #precioSinIVA;

    constructor(nombre,dias,peso,precio){
        this.nombre=nombre;
        this.diasMaxEntrega=dias;
        this.pesoMax=peso;
        this.precioSinIVA=precio;// el precio del envio
    }

    get nombre(){return this.#nombre};
    set nombre(newNombre){
        if(!Util.validarCadenaNoVacia(newNombre)){
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

    get precioSinIVA(){return this.#precioSinIVA};
    set precioSinIVA(newPrecio){
        if(!Util.validarPrecio(newPrecio)){
            throw new Error("El precio nuevo no es valido");
        }
        this.#precioSinIVA=newPrecio;
    }

    mostrarDatosTipoEnvio(){
        return `-DatosEnvio\nNombre:${this.nombre}\nDias maximo:${this.diasMaxEntrega}\nPesoMax:${this.pesoMax}\nPrecioSinIva:${this.precioSinIVA}`;
    }
}