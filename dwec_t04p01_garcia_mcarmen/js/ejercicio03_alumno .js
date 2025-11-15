console.log("T04p01 - Ejercicio 01");

/*
    * hosting: la fucion normal lo tiene, quiere decir que el interprete la puede encontrar en cualquier parte del codigo
    * this en el hosting 

*/
// TODO FUNCION CONSTRUCTORA 
function Alumno(dni,nombre,curso){

    this._dni=dni;
    this._nombre=nombre;
    this._notas=[];
    this._curso=curso;

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
Object.defineProperty(Alumno.prototype,"notaFinal",{
    get:function(){
        return this._notaFinal;
    }
    
});

Object.defineProperty(Aula.prototype, "curso", {

    get: function () {
        return this._curso;
    },
    set: function (value) {
        value=Number(value);
        const validCurso = new Set([1, 2, 3, 4]);

        if (validCurso.has(value)) {
            this._curso = value;
        } else {
            this._curso = null;
        }

    }
});

