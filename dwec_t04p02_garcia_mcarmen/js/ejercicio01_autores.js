console.log("T04 - Ejercicio 0X");

class Autores{

    listadoAutores;

    constructor(){
        this.listadoAutores=[];
    }
    //existeAutorPorNombre(nombreAbuscar): devuelve true o false si ya existe el autor.
    existeAutorPorNombre(nombreAbuscar){
        return this.listadoAutores.some(autor=>{autor.nombre===nombreAbuscar});
    }
    //insertarAutores(autores): recibe un array de autores y los inserta en la lista de autores. Verifica antes de insertar que el nombre completo no exista. Devuelve el número de autores insertados.
    insertarAutores(autores){
        let autoresInsertados=0;
        autores.forEach(autor => {
            if(!this.existeAutorPorNombre(autor.nombre)){
                autoresInsertados++;
                this.listadoAutores.push(autor);
            }
        });
        return autoresInsertados;
    }
    //buscarAutoresPorId (idAbuscar): devuelve un objeto autor por id. Si no lo encuentra devuelve null.
    buscarAutoresPorId(idAbuscar){
        let autorEncontrado=this.listadoAutores.find(autor=>{
            return autor.id===idAbuscar;
        });
    }
    //buscarAutoresPorNombre (nombreAbuscar): devuelve un objeto autor por nombre. Si no lo encuentra devuelve null.
    buscarAutoresPorNombre(nombreAbuscar){
        let autorEncontrado=this.listadoAutores.find(autor=>{
            return autor.nombre===nombreAbuscar;
        });
    }

    obtenerCadenaAutoresMenu(){
        let cadenaAutores;
        let numero=0;
        const ordenadoAlfabeAutores=this.listadoAutores.toSorted((a,b)=>{
            return a.nombre.localCompare(b.nombre);
        });

        ordenadoAlfabeAutores.forEach(autor=>{
            cadenaAutores+=``;
        })
    }

}