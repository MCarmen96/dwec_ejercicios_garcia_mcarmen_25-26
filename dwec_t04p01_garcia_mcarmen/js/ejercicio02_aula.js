console.log("T0X - Ejercicio 0X");

function Aula(maxAulumnos, idAula, descripcionAula, curso) {

    this._maxAlumnos = maxAulumnos;
    this._idAula = idAula;
    this._descripcionAula = descripcionAula;
    this._curso = curso;
    this._alumnos = [];
    this._cantidadAlumnos = 0; 
}


Object.defineProperty(Aula.prototype, "maxAlumnos", {
    get: function () {
        return this._maxAlumnos;
    },
    set: function (value) {
        value=Number(value);
        if(isNaN(value)||value<=0){
            console.warn("Maxalumnos debe ser un numero positivo");
        }else{
            this._maxAlumnos=value;
        }
    }
});
Object.defineProperty(Aula.prototype, "idAula", {

    get: function () {
        return this._idAula;
    },
    set: function (value) {
        this._idAula = value.trim();

    }
});
Object.defineProperty(Aula.prototype, "descripcion", {

    get: function () {
        return this._descripcionAula;
    },
    set: function (value) {
        this._descripcionAula = value.trim();
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

Object.defineProperty(Aula.prototype, "alumnos", {
    
    get:function (){
        return this._alumnos;
    },
    set:function(value){

        let result=Array.isArray(value);

        if(result){
            this._alumnos=value;
        }else{
            this._alumnos=[];
        }
    }
});

Object.defineProperty(Aula.prototype,"cantidadAlumnos",{
    get:function(){
        return this._cantidadAlumnos;
    },
    set:function(value){
        value=Number(value);
        if(isNaN(value)){
            console.log("El valor introducido no es numerico");
        }else{
            this._cantidadAlumnos=value;
        }
    }
})




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
    
        dni=prompt("Introduce el dni del alumno: ");
        if(dni==" "){
            console.log("El dni es obligatorio");
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

    let plazasLibres=this._maxAlumnos-this._cantidadAlumnos;
    return plazasLibres;
}

Aula.prototype.mostrarDatos=function(){

    for (let index = 0; index < this._alumnos.length; index++) {
        
        console.log(this._alumnos[index]);
        
    }

}

Aula.prototype.mediasNota=function(){
    let suma=0;

    for (let index = 0; index < this._alumnos.length; index++) {
        
        suma+=(this._alumnos[index].notaFinal);
    }

    let media=suma/this._alumnos.length;

    return media;
}

Aula.prototype.mejorNota=function(){
    let mejorNota=0;
    let nombreAlum;
    for (let index = 0; index < this._alumnos.length; index++) {
        
        if(this._alumnos[index].notaFinal>=mejorNota){
            mejorNota=this._alumnos[index].notaFinal;
            nombreAlum=this.alumnos[index].nombre;
        }
        
    }

    return nombreAlum;
}

Aula.prototype.porcentajeSuspenso=function(){
    
    let cantidadSuspensos=0;
    for (let index = 0; index < this._alumnos.length; index++) {
        
        if(this._alumnos[index].notaFinal<5){

            cantidadSuspensos++;
        }
        
    }

    let procentaje=(cantidadSuspensos/this._alumnos.length)*100+"%";

    return procentaje;
}

Aula.prototype.mostrarSuspensosAprobados=function(){

    let cantidadSuspensos=0;
    let cantidadAporbados=0;
    for (let index = 0; index < this._alumnos.length; index++) {
        
        if(this._alumnos[index].notaFinal<5){

            cantidadSuspensos++;
        }else{
            cantidadAporbados++;
        }
        
    }
    let procentajeSuspensos=(cantidadSuspensos/this._alumnos.length)*100+"%";

    let procentajeAprobados=(cantidadAporbados/this._alumnos.length)*100+"%";

    let cadenaProcentajes="Aprobados: "+procentajeAprobados + " y "+" Suspensos: " + procentajeSuspensos;

    return cadenaProcentajes;
}

