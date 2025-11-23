console.log("T04 - Ejercicio 0X");

class Libros{

    listaLibros;

    constructor(){
        this.listaLibros=[];
    }


    existeLibroPorIsbn(isbnAbuscar){

        return this.listaLibros.some(libro=>{libro.isbn===isbnAbuscar;})
    }

    insertarLibros(libros){

        // por cada elemento de libros llamo a existeLibroPorIsbn() devuelve true si existe
        
    }
}