console.log("T04 - Ejercicio 0X");

class Autores{

    #listadoAutores;//tienes que ser privada'????

    constructor(){
        this.listadoAutores=[];
    }

    get listadoAutores(){return this.#listadoAutores}
    set listadoAutores(listadoAutores) { this.#listadoAutores = listadoAutores; }
    //existeAutorPorNombre(nombreAbuscar): devuelve true o false si ya existe el autor.
    existeAutorPorNombre(nombreAbuscar){

        return this.listadoAutores.some(autor=>autor.nombre===nombreAbuscar);
    }
    //insertarAutores(autores): recibe un array de autores y los inserta en la lista de autores. Verifica antes de insertar que el nombre completo no exista. Devuelve el número de autores insertados.
    insertarAutores(autores){
        let autoresInsertados=0;
        autores.forEach(autor => {
            if(!this.existeAutorPorNombre(autor.nombre)){
                this.listadoAutores.push(autor);
                autoresInsertados++;
            }
        });
        return autoresInsertados;
    }
    //buscarAutoresPorId (idAbuscar): devuelve un objeto autor por id. Si no lo encuentra devuelve null.
    buscarAutoresPorId(idAbuscar){
        return this.listadoAutores.find(autor => autor.id === idAbuscar) || null;
    }
    //buscarAutoresPorNombre (nombreAbuscar): devuelve un objeto autor por nombre. Si no lo encuentra devuelve null.
    buscarAutoresPorNombre(nombreAbuscar){
        return this.#listadoAutores.find(autor => autor.nombre === nombreAbuscar) || null;
    }
    //obtenerCadenaAutoresMenu(): 
    //Devuelve una cadena con el listado numerado de los autores en orden alfabético y entre paréntesis el número de libros escritos.
    obtenerCadenaAutoresMenu(){
        let cadenaAutores = ""; 
        const ordenado = this.#listadoAutores.toSorted((a, b) => a.nombre.localeCompare(b.nombre));
        ordenado.forEach((autor, index) => {
            
            cadenaAutores += `${index + 1}. ${autor.nombre} (${autor.libros.length} libros)\n`;
        });
        return cadenaAutores;
    }

}