console.log("T04 - Comentario");


// Funcion constructora
function Comentario(cliente,libro,texto,fecha){
    this.cliente=cliente;
    this.libro=libro;
    this.texto=texto;
    this.fecha=fecha;
};

Object.defineProperty(Comentario.prototype,"cliente",{

    get:function(){
        return this._cliente;
    },

    set:function(newCLiente){

        if(!(newCLiente instanceof Cliente)){
            throw new Error("Cliente no es instancia de cliente");
        }
        this._cliente=newCLiente;
    }
});

Object.defineProperty(Comentario.prototype,"libro",{

    get:function(){
        return this._libro;
    },

    set:function(newLibro){
        if(newLibro instanceof Libro){
            this._libro=newLibro;
        }   
    }
});

Object.defineProperty(Comentario.prototype,"texto",{

    get:function(){
        return this._texto;
    },

    set:function(newTexto){
        if(newTexto!=""){
            this._texto=newTexto;
        }   
    }
});


Object.defineProperty(Comentario.prototype,"fecha",{

    get:function(){
        return this._fecha;
    },

    set:function(newFecha){
        if(newFecha instanceof Date){
            this._fecha=newFecha;
        }   
    }
});



// obtenerDatosComentario-> (obtiene los datos de un comentario)
//obtenerComentarioPorCliente
// obtenerComentarios

Comentario.prototype.obtenerDatosComentario=function(){
    return "Datos comentario: "+this.cliente.nombreCompleto+" "+this.libro.titulo+"\""+ this.texto+"\""+" Fecha: "+this.fecha;
}


