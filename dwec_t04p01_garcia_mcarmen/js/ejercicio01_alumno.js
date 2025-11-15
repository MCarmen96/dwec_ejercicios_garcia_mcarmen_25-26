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
        let media=(this._notaTDos+this._notaTTres+this._notaTUno)/3;
        return media;
    }

    this._notaFinal=this.calcularNota();

    this.cambiarNotas=function(notaNueva1,notaNueva2,notaNueva3){

        this._notaTUno=notaNueva1;
        this._notaTDos=notaNueva2;
        this._notaTTres=notaNueva3;
        this._notaFinal=this.calcularNota();
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

    // funcion mostrar info alumno

}

// * DEFINIR LOS GETTERS Y LOS SETTERS MEJOR FUERA
Object.defineProperty(Alumno.prototype,"dni",{

    get:function(){
        return this._dni;
    },
    set:function(value){

        let regla=/^\d{8}[A-Z]$/;
        let patron=new RegExp(regla);

        if(patron.test(value)){
            this._dni=value;
        }else{
            this._dni=null;
        }

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
        this._edad=this.calcularEdad();
    }
});

Object.defineProperty(Alumno.prototype,"notaTUno",{

    get:function(){
        return this._notaTUno;
    },
    set:function(value){
        this._notaTUno=Number(value);
        this._notaFinal=this.calcularNota();
    }
});
Object.defineProperty(Alumno.prototype,"notaTDos",{

    get:function(){
        return this._notaTDos;
    },
    set:function(value){
        this._notaTDos=Number(value);
        this._notaFinal=this.calcularNota();
    }
});

Object.defineProperty(Alumno.prototype,"notaTTres",{

    get:function(){
        return this._notaTTres;
    },
    set:function(value){
        this._notaTTres=Number(value);
        this._notaFinal=this.calcularNota();
    }
});

Object.defineProperty(Alumno.prototype,"sexo",{
    get:function(){
        return this._sexo;
    },
    set: function(value){
        const validSex=new Set(["h","m","o"]);
        if(validSex.has(value)){
            this._sexo=value;
        }else{
            this._sexo=null;
        }
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

/*
*----METODOS DE OBJECTS---
    Nos permiten definir unas reglas d emodificaicon del objeto 
    Para que salga el error hay que usar 'use strict'
* Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

* Prevents adding object properties
Object.preventExtensions(object)

* Returns true if properties can be added to an object
Object.isExtensible(object)

* Prevents adding and deleting object properties
Object.seal(object)

* Returns true if object is sealed
Object.isSealed(object)

* Prevents any changes to an object
Object.freeze(object)

* Returns true if object is frozen
Object.isFrozen(object)

*/