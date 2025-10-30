console.log("T0X - Ejercicio 0X");

function Aula(maxAulumnos, idAula, descripcionAula, curso) {

    this._maxAlumnos = maxAulumnos;
    this._idAula = idAula;
    this._descripcionAula = descripcionAula;
    this._curso = curso;
    this._alumnos = [];
    this._cantidadAlumnos;

    this.haySitioAlumnos = function () {

    }
}


Object.definePropperty(Aula.prototype, "getYsetmaxAlumnos", {
    get: function () {
        return this._maxAlumnos;
    },
    set: function (value) {
        this._maxAlumnos = value.trim();
    }
});
Object.definePropperty(Aula.prototype, "getYsetidAula", {

    get: function () {
        return this._idAula;
    },
    set: function (value) {
        this._idAula = value.trim();

    }
});
Object.definePropperty(Aula.prototype, "getYsetdescripcion", {

    get: function () {
        return this._descripcionAula;
    },
    set: function (value) {
        this._descripcionAula = value.trim();
    }
});
Object.definePropperty(Aula.prototype, "getYsetcurso", {

    get: function () {
        return this._curso;
    },
    set: function (value) {
        const validCurso = new Set([1, 2, 3, 4]);
        this._curso = value.trim();

        if (validCurso.has(value)) {
            this._curso = value;
        } else {
            this.curso = null;
        }

    }
});
Object.definePropperty(Aula.prototype, "getYsetalumnos", {
    
    get:function (){
        return this._alumnos;
    },
    set:function(value){

        let result=Array.isArray(value);

        if(result){
            this._alumnos=value;
        }else{
            this._alumnos=null;
        }
    }
});



Aula.prototype.haySitioAlumnos(){
    let haySitio;
    if (this._cantidadAlumnos<this.maxAlumnos) {
        haySitio = true;
    } else {
        haySitio = false;
    }
    return haySitio;
}
Aula.prototype.hayAlumnos(){ }

