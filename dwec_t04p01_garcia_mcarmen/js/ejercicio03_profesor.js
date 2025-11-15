

const profesor1={
    _asignatura:[],
    _nombre:'Alberto',
    _email:'albert@gmail.com'
}
const profesor2={
    _asignatura:[],
    _nombre:'Carmen',
    _emailemail:'carmen@gmail.com'
}
const profesor3={
    _asignatura:[],
    _nombre:'Mikel',
    _email:'mikel@gmail.com'
}
const profesor4={
    _asignatura:[],
    _nombre:'Aitana',
    _email:'aitana@gmail.com'
}

function addGetter(obj){

    Object.defineProperty(obj,'nombre',{
        get:function(){
            return this._nombre;
        },
        set:function(value){
            this._nombre=value.trim();
        }
    });

    Object.defineProperty(obj,'email',{
        get:function(){
            return this.email;
        },
        set:function(value){
            this.email=value.trim();
        }
    });

    Object.defineProperty(obj,'asignatura',{
        get:function(){
            return this._asignatura;
        },
        set:function(value){
            this._asignatura=value.trim();
        }
    });
}

const profesores=[profesor1,profesor2,profesor3,profesor4];
profesores.forEach(addGetter);