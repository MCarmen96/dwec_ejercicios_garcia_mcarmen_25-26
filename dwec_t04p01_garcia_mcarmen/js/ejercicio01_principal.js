console.log("T04p01 - Ejercicio 01");

function Alumno(dni,nombre,fechaNaci,notaTUno,notaTDos,notaTTres,sexo){

    this.dni=dni;
    this.nombre=nombre;
    this.fechaNaci=fechaNaci;
    this.notaTUno=notaTUno;
    this.notaTDos=notaTDos;
    this.notaTTres=notaTTres;
    this.sexo=sexo;
    this.edad=function(fechaNaci){

    }
    this.notaFinal=function(notaTUno,notaTDos,notaTTres){
        let media=(notaTDos+notaTTres+notaTUno)/3;
        return media;
    }
}

Object.defineProperty(Alumno.prototype,"dni",{

    get:function(){
        return this._dni;
    },
    set:function(value){
        let patron='/^\d{8}[A-Z]$/';

        this._dni=value.trim();

    }

});

Object.defineProperty(Alumno.prototype,"nombre",{
    get:function(){
        return this._nombre;
    },
    set:function(value){
        this._nombre=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"fechaNaci",{
    get:function(){
        return this._fechaNaci;
    },
    set: function(value){
        this._fechaNaci=value.trim();
    }
});
Object.defineProperty(Alumno.prototype,"notaTUno",{

    get:function(){
        return this._notaTUno;
    },
    set:function(value){
        this._notaTUno=value.trim();
    }
});
Object.defineProperty(Alumno.prototype,"notaTDos",{

    get:function(){
        return this._notaTDos;
    },
    set:function(value){
        this._notaTDos=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"notaTTres",{

    get:function(){
        return this._notaTTres;
    },
    set:function(value){
        this._notaTTres=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"sexo",{
    get:function(){
        return this._sexo;
    },
    set: function(value){
        let validSex=new Set(["h","m","o"]);
        if(validSex.has(value)){
            // con el this lo que hacia es que lo asigno directamente a la propiedad
            this._sex=value;
        }else{
            this._sex=null;
        }
    }
})

Object.defineProperty(Alumno.prototype,"fechaNaci",{

    get:function(){
        return this._fechaNaci;
    },
    set:function(value){
        this._fechaNaci=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"edad",{
    get:function(){
        return this._edad;
    }
});

Object.defineProperty(Alumno.prototype,"notaFinal",{
    get:function(){
        return this._notaFinal;
    }
});