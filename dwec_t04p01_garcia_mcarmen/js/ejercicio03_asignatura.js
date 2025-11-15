const asignatura={
    _descripcion:function(){return `${this.nombre} -curso ${this.curso} tipo ${this.tipo}`},
};


const asignatura1 = {
    _nombre: 'Matematicas',
    _tipo: 'obligatoria',
    _curso: 1,
    _alumnos: [],
}

const asignatura2 = {
    _nombre: 'Ingles',
    _tipo: 'obligatoria',
    _curso: 1,
    _alumnos: []
};

const asignatura3 = {
    _nombre: 'Filosofia',
    _tipo: 'obligatoria',
    _curso: 2,
    _alumnos: []
};

const asignatura4 = {
    _nombre: 'Matematicas discretas',
    _tipo: 'obligatoria',
    _curso: 2,
    _alumnos: []
};

const asignatura5 = {
    _nombre: 'Dibujo',
    _tipo: 'optativa',
    _curso: 1,
    _alumnos: []
}
const asignatura6 = {
    _nombre: 'Modelado 3D',
    _tipo: 'optativa',
    _curso: 2,
    _alumnos: []
}
const asignatura7 = {
    _nombre: 'Unreal Engine 5',
    _tipo: 'optativa',
    _curso: 2,
    _alumnos: []
}
const asignatura8 = {
    _nombre: 'Unity',
    _tipo: 'optativa',
    _curso: 1,
    _alumnos: []

}

function addData(obj) {

    Object.defineProperty(obj, 'nombre', {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value.trim();
        }
    });
    Object.defineProperty(obj, 'tipo', {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value.trim();
        }
    });
    Object.defineProperty(obj, 'curso', {
        get: function () {
            return this._curso;
        },
        set: function (value) {
            const valid_Curso = new Set([1, 2, 3, 4])

            if (valid_Curso.has(value)) {
                this._curso = value;
            } else {
                this._curso = null;
            }
        }
    });

    Object.defineProperty(obj, 'alumnos', {
        get: function () {
            return this._alumnos;
        }
    });
}
    




const asignaturas=[asignatura1, asignatura2, asignatura3, asignatura4, asignatura5, asignatura6, asignatura7, asignatura8];
asignaturas.forEach(addData);


