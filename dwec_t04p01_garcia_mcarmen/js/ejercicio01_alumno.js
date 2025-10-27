console.log("T04p01 - Ejercicio 01");

/*
    * hosting: la fucion normal lo tiene, quiere decir que el interprete la puede encontrar en cualquier parte del codigo
    * this en el hosting 

*/
// TODO FUNCION CONSTRUCTORA 
function Alumno(dni,nombre,fechaNaci,notaTUno,notaTDos,notaTTres,sexo){

    this._dni=dni;
    this._nombre=nombre;
    this._fechaNaci=fechaNaci;
    this._notaTUno=notaTUno;
    this._notaTDos=notaTDos;
    this._notaTTres=notaTTres;
    this._sexo=sexo;

    this.calcularEdad=function(){

        let dateAct=new Date();
        let yearAct=dateAct.getFullYear();
        let monthAct=dateAct.getMonth()+1;
        let dayAct=dateAct.getDay();

        let fecha=this._fechaNaci.split("-");
        let year=fecha[0];
        let month=fecha[1];
        let day=fecha[2];
        let edad=yearAct-year;

        if(monthAct < month|| (monthAct === month && dayAct < day)){
            
            edad--;
        }
        return edad;
    }

    this._edad=this.calcularEdad();

    this.calcularNota=function(){
        let media=(this.notaTDos+this.notaTTres+this.notaTUno)/3;
        return media;
    }

    this._notaFinal=this.calcularNota();

    this.cambiarNotas=function(notaNueva1,notaNueva2,notaNueva3){

        this._notaTUno=notaNueva1;
        this._notaTDos=notaNueva2;
        this._notaTTres=notaNueva3;

        this._notaFinal=this.calcularNotas();

    }
    

    this.comparar=function(otroAlumno){

        let value;
        if(this.notaFinal>otroAlumno.notaFinal){
            value=1;
        }else{
            value=-1;
        }

        return value;
    }
    
    this.estaAprobado=function(_notaFinal){

        let aprobado;
        if(_notaFinal>=5){
            aprobado=true;
        }else{
            aprobado=false;
        }
        return aprobado;
    };

}

// * DEFINIR LOS GETTERS Y LOS SETTERS MEJOR FUERA
Object.defineProperty(Alumno.prototype,"getYsetdni",{

    get:function(){
        return this._dni;
    },
    set:function(value){

        let patron='/^\d{8}[A-Z]$/';
        this._dni=value.trim();
    }

});

Object.defineProperty(Alumno.prototype,"getYsetnombre",{
    get:function(){
        return this._nombre;
    },
    set:function(value){
        this._nombre=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"getYsetfechaNaci",{
    get:function(){
        return this._fechaNaci;
    },
    set: function(value){
        this._fechaNaci=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"getYsetnotaTUno",{

    get:function(){
        return this._notaTUno;
    },
    set:function(value){
        this._notaTUno=value.trim();
    }
});
Object.defineProperty(Alumno.prototype,"getYsetnotaTDos",{

    get:function(){
        return this._notaTDos;
    },
    set:function(value){
        this._notaTDos=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"getYsetnotaTTres",{

    get:function(){
        return this._notaTTres;
    },
    set:function(value){
        this._notaTTres=value.trim();
    }
});

Object.defineProperty(Alumno.prototype,"getYsetsexo",{
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



Object.defineProperty(Alumno.prototype,"getYsetedad",{
    get:function(){
        return this._edad;
    }
});

Object.defineProperty(Alumno.prototype,"getYsetnotaFinal",{
    get:function(){
        return this._notaFinal;
    }
    
});

