console.log("T04 -PRINCIPAL");
document.addEventListener('DOMContentLoaded', () => {

  const boton = document.getElementById('btn-comprar');
  boton.addEventListener('click',() => {
    main();  
  });
});


function main (){
      // Punto de entrada del sistema  
  try {
    // Lógica principal: crear libros, clientes, ventas, etc 
    // a través de Tienda.
    // Invocar métodos que pueden lanzar errores.
    pruebas();
  } catch (error) {
    console.log("Error en la ejecución:", error.message);
  }

}

function pruebas(){
/* 
  const leerDato=new LeerDatosPrompt();
  const pattern=/a/;
  //let entero=leerDato.leerEntero("Dame un entero");
  //let enteroHasta=leerDato.leerEnteroHasta("Dame un numero");
  //let real=leerDato.leerReal("dame un numero real");
  //let real=leerDato.leerRealHasta("dame un numero real");
  //let rango=leerDato.leerEnteroEntreHasta("dame un numero",0,Infinity);
  //let cadena=leerDato.leerCadena1("escribe una cadena de texto");
  //let cadenaLongitud=leerDato.leerCadena3("escribe una cadena de texto",3,pattern);
  //let cadenaHasta=leerDato.leerCadena2Hasta("escribe una cadena de texto",3);
  //let cadenaHastaLongitud=leerDato.leerCadena3Hasta("escribe una cadena de texto",3,pattern);

  let fecha=Util.crearFechaDesdeCadena("02-02-2020");
  
  console.log(fecha); */
  
  /* c
  console.log(autor1.nombre);// !aqui estoy accediendo al getter
  console.log(autor1.mostrarDatosAutor());
  ;
  console.log(autor1.tieneLibros());
  
  const libroPrueba=new LibroPapel(11111,"Los diarios de la boticaria",autor1,"novela",12.99,12,"20x15x3",102);
  //console.log(libroPrueba.getisbn()); */


  const listadoAutores=new Autores();
 
  const autor1=new Autor("carmen");
  const autor2=new Autor("juan");
  const autores=[autor2,autor1];
  console.log("Insertar: "+listadoAutores.insertarAutores(autores));  
  console.log("Buscar por nombre:"+listadoAutores.buscarAutoresPorNombre("juan").nombre);

  if(listadoAutores.buscarAutoresPorId(11)==null){
    console.log("autor no encontrado!!");
  }
  console.log("Buscar por id:"+listadoAutores.buscarAutoresPorId(1).nombre); 
  console.log("Menu:\n"+listadoAutores.obtenerCadenaAutoresMenu());
}