console.log("T04 - DISTRIBUIDOR");


// objeto literal
const distribuidorLeroy={
    _nombre:"Leroy Merlin",
    _provincia:"Ciudad Real",
    _diasServicio:6,

    // setters y getters
    get nombre(){
        return this._nombre;
    },
    set nombre(newNombre){
        this._nombre=newNombre;
    },
    get provincia(){
        return this._provincia;
    },
    set provincia(newProvincia){
        this._provincia=newProvincia;
    },
    get diasServicio(){
        return this._diasServicio;
    },
    set diasServicio(newDiasServicio){
        this._diasServicio=newDiasServicio;
    }
};

const distribuidorSkill={
    _nombre:"Skill",
    _provincia:"Asturias",
    _diasServicio:4,

    // setters y getters
    get nombre(){
        return this._nombre;
    },
    set nombre(newNombre){
        this._nombre=newNombre;
    },
    get provincia(){
        return this._provincia;
    },
    set provincia(newProvincia){
        this._provincia=newProvincia;
    },
    get diasServicio(){
        return this._diasServicio;
    },
    set diasServicio(newDiasServicio){
        this._diasServicio=newDiasServicio;
    }
};



