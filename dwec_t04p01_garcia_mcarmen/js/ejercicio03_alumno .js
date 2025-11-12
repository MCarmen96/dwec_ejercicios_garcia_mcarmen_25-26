console.log("T04p01 - Ejercicio 01");

/*
    * hosting: la fucion normal lo tiene, quiere decir que el interprete la puede encontrar en cualquier parte del codigo
    * this en el hosting 

*/
// TODO FUNCION CONSTRUCTORA 
function Alumno(nombre){

    this._nombre=nombre;
    this._notas=[];
    
    // funcion mostrar info alumno

}

// * DEFINIR LOS GETTERS Y LOS SETTERS MEJOR FUERA


Object.defineProperty(Alumno.prototype,"getYsetnombre",{
    get:function(){
        return this._nombre;
    },
    set:function(value){
        this._nombre=value.trim();
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