console.log("T04 - LIBROS ");

class Libros{

    #listaLibros;

    constructor(){
        this.#listaLibros=[];
    }

    get listaLibros(){
        return this.#listaLibros;
    }
    //existeLibroPorIsbn(isbnAbuscar): devuelve true o false si ya existe el isbn que se recibe como argumento en la lista de libros.
    existeLibroPorIsbn(isbnAbuscar){
        return this.listaLibros.some(libro=>libro.isbn===isbnAbuscar);//recuerda si no haces un return en la funcion flecha va sin llaves
    }
    //InsertarLibros(libros): recibe un array de libros y los inserta en la lista de libros. Verifica antes de insertar que el isbn no exista. Devuelve el número de libros insertados.
    insertarLibros(libros){
        let librosCount=0;
        if(libros instanceof Array){
                libros.forEach(libro => {
                if((libro instanceof LibroPapel || libro instanceof Ebook) && !this.existeLibroPorIsbn(libro.isbn)){
                    this.listaLibros.push(libro);
                    librosCount++;
                }else{
                    console.log("Fallo al añadir libro=> "+libro.titulo)
                }
            });
        }else{
            console.log("Los libros no son un array")
        }
        
        // por cada elemento de libros llamo a existeLibroPorIsbn() devuelve true si existe
        return librosCount;
    }
    //buscarLibroPorIsbn(isbnAbuscar): devuelve un objeto libro por isbn. Si no lo encuentra devuelve null.
    buscarLibroPorIsbn(isbnAbuscar){
        
        let libroEncontrado=this.listaLibros.find(libro=>{
            return libro.isbn==isbnAbuscar;// aqui como si estpy haciendoe el return en la funcion flecha si lleva las llaves
        });
        if(libroEncontrado===undefined){
            libroEncontrado=null;
        }
        return libroEncontrado;
    }
    //buscarLibroPorTitulo(tituloAbuscar): devuelve un array de objetos libro por título. Si no encuentra ninguna coincidencia devuelve el array vacío.
    buscarLibroPorTitulo(tituloAbuscar){
        const librosEncontrados=[];
        let librosPorTitulo=this.listaLibros.filter(libro=>{
            if(libro.titulo.toLowerCase()===tituloAbuscar.toLowerCase()){
                librosEncontrados.push(libro);
            }
        });
        return librosEncontrados;
    }
    /* 
    modificarLibroPorIsbn(isbnAmodificar, mapaConInfo): modifica un objeto libro por isbn con los datos recibidos en el mapa. 
    El mapa será creado por la Tienda a la vez que va pidiendo al usuario los datos a modificar.
    Si se realiza alguna modificación se devuelve true. 
    Si no se realiza ninguna modificación devuelve false. */
    modificarLibroPorIsbn(isbnAmodificar,mapaConInfo){
        let modifica=false;
        const libroEncontrado=this.buscarLibroPorIsbn(isbnAmodificar);
        if(libroEncontrado!=null){
            libroEncontrado.modificarLibro(mapaConInfo);
            modifica=true;
        }else{
            console.log("Libro no encontrado");
        }
        return modifica;
    }

    obtenerCadenaLibrosMenu(){
        let cadenaTituloLibros="";
        let numero=1;
        if(this.listaLibros.length>=0){
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
        }else{
            cadenaTituloLibros="No hay libros en el catalogo de la tienda";
        }
        
        return cadenaTituloLibros;
    } 
    

}