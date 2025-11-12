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

    get: function () {
        return this._alumnos;
    },
    set: function (value) {

        let result = Array.isArray(value);

        if (result) {
            this._alumnos = value;
        } else {
            this._alumnos = null;
        }
    }
});

Aula.prototype.haySitioAlumnos = function () {
    let haySitio = false;
    if (this._cantidadAlumnos < this.getYsetmaxAlumnos) {
        haySitio = true;
    }
    return haySitio;
}

Aula.prototype.hayAlumnos = function () {
    let hayAlumnos = false;
    if (this._cantidadAlumnos > 0) {
        hayAlumnos = true;
    }
    return hayAlumnos;
}

Aula.prototype.pedirDatosUnAlumno = function () {
    let nombre;

    do {
        nombre = prompt("Introduce el nombre del alumno: ");
        if (nombre == " ") {
            console.log("El nombre no puede estar vacio es obligatorio");
        }
    } while (nombre == " ")


    let alumno = new Alumno(nombre);

    return alumno;
}

Aula.prototype.pedirDatos = function () {

    const alumnosTemp = [];
    let auxAlum;
    let numeroAlum = parseInt(prompt("-Cuantos alumnos quieres matricular"));

    let espacioEnAula = this._maxAlumnos - this._cantidadAlumnos;

    if (numeroAlum > espacioEnAula) {
        console.log("No hay espacio para los alumnos en el aula")
    } else {

        for (let index = 0; index < numeroAlum; index++) {
            auxAlum = this.pedirDatosUnAlumno();
            alumnosTemp.push(auxAlum);
            console.log(`Alumno ${index + 1} añadido`);
        }

    }
    return alumnosTemp;

}

Aula.prototype.insertarAlumnos = function (alumno) {

    this._alumnos.push(alumno);

}


Aula.prototype.insertarAlumnos = function (numeroAlumnos) {


    if (numeroAlumnos > this._maxAlumnos) {


    } else {

        for (let index = 0; index <numeroAlumnos; index++) {
            let nombre = prompt(`Introduce el nombre del alumno ${i + 1}:`);
            const nuevoAlumno = new Alumno(nombre);
            
        }

    }



}
Aula.prototype.obtenerSitiosAlumnos = function () {

    let plazasLibres = this._cantidadAlumnos - this._maxAlumnos;
    return plazasLibres;
}

Aula.prototype.mostrarDatos = function () {

    for (let index = 0; index < this._alumnos.length; index++) {

        console.log(this._alumnos[index]);

    }

}










