const profesor1={
    asigantura:[],
    nombre:'Alberto',
    email:'albert@gmail.com'
}
const profesor2={
    asigantura:[],
    nombre:'Carmen',
    email:'carmen@gmail.com'
}
const profesor3={
    asigantura:[],
    nombre:'Mikel',
    email:'mikel@gmail.com'
}
const profesor4={
    asigantura:[],
    nombre:'Aitana',
    email:'aitana@gmail.com'
}

function addGetter(obj){

    Object.defineProperty(obj,'nombre',{
        get:function(){
            return this.nombre;
        },
        set:function(value){
            this.nombre=value.trim();
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
            return this.asigantura;
        },
        set:function(value){
            this.asigantura=value.trim();
        }
    });
}

[profesor1,profesor2,profesor3,profesor4].forEach(addGetter)