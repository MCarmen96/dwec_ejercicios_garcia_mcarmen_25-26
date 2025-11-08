const asignatura1={
    _nombre:'Matematicas',
    tipo:'obligatoria',
    curso:1,
    alumnos:[]
};

const asignatura2={
    _nombre:'Ingles',
    tipo:'obligatoria',
    curso:1,
    alumnos:[]
};

const asignatura3={
    _nombre:'Filosofia',
    tipo:'obligatoria',
    curso:2,
    alumnos:[]
};

const asignatura4={
    _nombre:'Matematicas discretas',
    tipo:'obligatoria',
    curso:2,
    alumnos:[]
};

const asignatura5={
    _nombre:'Dibujo',
    tipo:'optativa',
    curso:1,
    alumnos:[]
}
const asignatura6={
    _nombre:'Modelado 3D',
    tipo:'optativa',
    curso:2,
    alumnos:[]
}
const asignatura7={
    _nombre:'Unreal Engine 5',
    tipo:'optativa',
    curso:2,
    alumnos:[]
}
const asignatura8={
    _nombre:'Unity',
    tipo:'optativa',
    curso:1,
    alumnos:[]
}

function addData(obj){

    Object.defineProperty(obj,'nombre',{
        get:function(){
            return this._nombre;
        },
        set:function(value){
            this._nombre=value.trim();
        }
    });
    Object.defineProperty(obj,'tipo',{
        get:function(){
            return this.tipo;
        },
        set:function(value){
            this.tipo=value.trim();
        }
    });
    Object.defineProperty(obj,'curso',{
        get:function(){
            return this._nombre;
        },
        set:function(value){
            const validCurso = new Set([1, 2, 3, 4])
            this._nombre=value.trim();

            if(validCurso.has(value)){
                this.curso=value;
            }else{
                this.curso=null;
            }
        }
    });
}

[asignatura1,asignatura2,asignatura3,asignatura4,asignatura5,asignatura6,asignatura7,asignatura8].forEach(addData);


