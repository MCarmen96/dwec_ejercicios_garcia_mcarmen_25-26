console.log("T0X - Ejercicio 0X");

function Aula(maxAulumnos, idAula, descripcionAula, curso) {

    this._maxAlumnos = maxAulumnos;
    this._idAula = idAula;
    this._descripcionAula = descripcionAula;
    this._curso = curso;
    this._alumnos = [];
    this._cantidadAlumnos = 0;

    
}


Object.defineProperty(Aula.prototype, "getYsetmaxAlumnos", {
    get: function () {
        return this._maxAlumnos;
    },
    set: function (value) {
        this._maxAlumnos = value.trim();
    }
});
Object.defineProperty(Aula.prototype, "getYsetidAula", {

    get: function () {
        return this._idAula;
    },
    set: function (value) {
        this._idAula = value.trim();

    }
});
Object.defineProperty(Aula.prototype, "getYsetdescripcion", {

    get: function () {
        return this._descripcionAula;
    },
    set: function (value) {
        this._descripcionAula = value.trim();
    }
});
Object.defineProperty(Aula.prototype, "getYsetcurso", {

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
Object.defineProperty(Aula.prototype, "getYsetalumnos", {
    
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




Aula.prototype.haySitioAlumnos=function(){
    let haySitio=false;
    if (this._cantidadAlumnos<this.getYsetmaxAlumnos) {
        haySitio = true;
    }
    return haySitio;
}

Aula.prototype.hayAlumnos=function(){
    let hayAlumnos=false;
    if(this._cantidadAlumnos>0){
        hayAlumnos=true;
    }
    return hayAlumnos;
}

Aula.prototype.pedirDatosUnAlumno=function(){
    let nombre;
    let fechaNaci;
    let dni;
    let regla;
    let patron;
    let nota1;
    let nota2;
    let nota3;
    let sexo;
    do{
        nombre=prompt("Introduce el nombre del alumno: ");
        if(nombre==" "){
            console.log("El nombre no puede estar vacio es obligatorio");
        }
    }while(nombre==" ")
    
    do{
        fechaNaci=prompt("Introduce la fecha de nacimiento: ");
        if(fechaNaci==" "){
            console.log("La fecha de nacimiento no puede estar vacia");
        }
    }while(fechaNaci==" ")
    
    do{
        // esto ya lo hago en alumnos no hace falta ahcerlo aqui
        regla='/^\d{8}[A-Z]$/';
        patron=new RegExp(regla)
        dni=prompt("Introduce el dni del alumno: ");
        if(dni==" "&& !patron.test(dni)){
            console.log("El dni no puede estar vacio y no cumple el patron de un dni");
        }

    }while(dni==" " && !patron.test(dni))
    
    function pedirNota(trimestre) {
        let nota;
        do {
            nota = parseFloat(prompt(`Introduce la nota del trimestre ${trimestre} (0 a 10):`));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("La nota debe ser un número entre 0 y 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);
        return nota;
    }

    do{
        sexo=prompt("Introduce el sexo del alumno debe ser asi 'h','m','o' ");
        if(sexo==" "){
            console.log("El sexo no puede estar vacio");
        }
    }while(sexo==" ")
    
    nota1=pedirNota(1);
    nota2=pedirNota(2);
    nota3=pedirNota(3);


    let alumno=new Alumno(dni,nombre,fechaNaci,nota1,nota2,nota3,sexo);

    return alumno;
}

Aula.prototype.pedirDatos=function(){

    const alumnosTemp=[];
    let auxAlum;
    let numeroAlum=parseInt(prompt("-Cuantos alumnos quieres matricular"));

    let espacioEnAula=this._maxAlumnos-this._cantidadAlumnos;

    if(numeroAlum>espacioEnAula){
        console.log("No hay espacio para los alumnos en el aula")
    }else{

        for (let index = 0; index < numeroAlum; index++) {
            auxAlum=this.pedirDatosUnAlumno();
            alumnosTemp.push(auxAlum);
            console.log(`Alumno ${index+1} añadido`);
        }
        
    }
    return alumnosTemp;

}

Aula.prototype.insertarAlumnos=function(alumnosArray){

    for (let index = 0; index < alumnosArray.length; index++) {
        const element =alumnosArray[index];
        this._alumnos.push(element);
        console.log(`Alumno ${element}`);
    }
    this._cantidadAlumnos=this._alumnos.length;
    

}

Aula.prototype.obtenerSitiosAlumnos=function(){

    let plazasLibres=this._cantidadAlumnos-this._maxAlumnos;
    return plazasLibres;
}

Aula.prototype.mostrarDatos=function(){

    for (let index = 0; index < this._alumnos.length; index++) {
        
        console.log(this._alumnos[index]);
        
    }

}

Aula.prototype.mediasNota=function(){


}

