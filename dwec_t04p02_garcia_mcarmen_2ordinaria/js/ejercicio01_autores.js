console.log("T04 - AUTORES");

class Autores{

    #listadoAutores;

    constructor(){
        this.#listadoAutores=[];
    }

    get listadoAutores(){
        return this.#listadoAutores
    }

    //HACER SET
    //existeAutorPorNombre(nombreAbuscar): devuelve true o false si ya existe el autor.
    existeAutorPorNombre(nombreAbuscar){
        console.log(nombreAbuscar);
        let existe=this.listadoAutores.some(autor=>autor.nombre==nombreAbuscar);// si no vas a devolver nada sin llaves si vas a devolver con llaves
        if(existe){
            console.log("encontrado: "+existe);
        }
        return existe;
    }
    //insertarAutores(autores): recibe un array de autores y los inserta en la lista de autores. Verifica antes de insertar que el nombre completo no exista. Devuelve el número de autores insertados.
    insertarAutores(autores){
        let autoresInsertados=0;
        if(autores instanceof Array){
            autores.forEach(autor => {
                if( autor instanceof Autor && !this.existeAutorPorNombre(autor.nombre)){
                    this.listadoAutores.push(autor);
                    autoresInsertados++;
            }
        });
        }
       
        return autoresInsertados;
    }
    //buscarAutoresPorId (idAbuscar): devuelve un objeto autor por id. Si no lo encuentra devuelve null.
    buscarAutoresPorId(idAbuscar){
        let autorEncontrado=this.listadoAutores.find(autor=>{
            return autor.id===idAbuscar;
        });

        return autorEncontrado;
    }
    //buscarAutoresPorNombre (nombreAbuscar): devuelve un objeto autor por nombre. Si no lo encuentra devuelve null.
    buscarAutoresPorNombre(nombreAbuscar){
        
        let autorEncontrado=this.listadoAutores.find(autor=>{
            return autor.nombre==nombreAbuscar;
        });

        return autorEncontrado;
    }
    //obtenerCadenaAutoresMenu(): 
    //*Devuelve una cadena con el listado numerado de los autores en orden alfabético y entre paréntesis el número de libros escritos.
    obtenerCadenaAutoresMenu(){
        let cadenaAutores="";
        if(this.hayAutores()){
                this.listadoAutores.sort((a,b)=>{
                return a.nombre.localeCompare(b.nombre);
            });
            //con el map me genero un array con los libros de cada autor
            this.listadoAutores.forEach((autor,index)=>{
                cadenaAutores+=`${(index+1)}.${autor.nombre}. ·Libros=>${(autor.libros.length)}\n`;
            });
        }else{
            cadenaAutores="No hay autores";
        }
        
        return cadenaAutores;
    }

    hayAutores(){
        return this.listadoAutores.length>0;
    }

}