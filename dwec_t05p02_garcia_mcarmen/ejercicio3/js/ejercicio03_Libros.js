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
        let librosCount=0;
        // por cada elemento de libros llamo a existeLibroPorIsbn() devuelve true si existe
        libros.forEach(libro => {
            if(!this.existeLibroPorIsbn(libro.isbn)){
                librosCount++;
                this.listaLibros.push(libro);
            }
        });
        return librosCount;
    }
    buscarLibroPorIsbn(isbnAbuscar){

        let libroEncontrado=this.listaLibros.find(libro=>{
            return libro.isbn===isbnAbuscar;
        });
        return libroEncontrado;
    }
    buscarLibroPorTitulo(tituloAbuscar){

        let librosPorTitulo=this.listaLibros.filter(libro=>{
            return libro.titulo===tituloAbuscar;
        });
        return librosPorTitulo;
    }

    modificarLibroPorIsbn(isbnAmodificar,mapaConInfo){
        let modifica=false;

        if(this.existeLibroPorIsbn(isbnAmodificar)){
            Libro.modificarLibro(mapaConInfo);
            modifica=true;
        }
        return modifica;
    }

    obtenerCadenaLibrosMenu(){
        let cadenaTituloLibros;
        let numero=0;
        const ordenadoAlfabPorTitulo=this.listaLibros.toSorted((a,b)=>{
            return a.titulo.localeCompare(b.titulo);
        });

        ordenadoAlfabPorTitulo.forEach(libro=>{
            if(libro instanceof Ebook){
                cadenaTituloLibros+=`${numero++}.${libro.titulo} (Ebook))\n`;
            }else if(libro instanceof LibroPapel){
                cadenaTituloLibros+=`${numero++}.${libro.titulo} (Libro en papel))\n`;
            }else{
                cadenaTituloLibros+=`${numero++}.${libro.titulo} (Desconocido))\n`;
            }
        });
        return cadenaTituloLibros;
    } 
    

}