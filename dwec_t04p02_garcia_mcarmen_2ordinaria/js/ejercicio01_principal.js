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
  
  const listadoAutores=new Autores();
  console.log("Insertar: "+listadoAutores.insertarAutores(autores));  
  console.log("Buscar por nombre:"+listadoAutores.buscarAutoresPorNombre("juan").nombre);

  if(listadoAutores.buscarAutoresPorId(11)==null){
    console.log("autor no encontrado!!");
  }
  console.log("Buscar por id:"+listadoAutores.buscarAutoresPorId(1).nombre); 
  console.log("Menu:\n"+listadoAutores.obtenerCadenaAutoresMenu());

  const libro=new Libro(11111,"Los diarios de la boticaria",[autor1,autor2],"Novela",100);
  libro.aplicarDescuentoLibro(10);
  libro.aplicarDescuentoLibro(20);
  
  console.log(ebook.mostrarDatosLibro());
  ebook.convertirFormato("epub");
  
  console.log(ebook.modificarLibro(modificacion));
  console.log(ebook.mostrarDatosLibro());
   console.log(libroPapel.stock);
  //libroPrueba.ampliarStock(5);
  console.log(libroPapel.stock);
  console.log(libroPapel.avisoStockMinimo());
  console.log(libroPapel.mostrarDatosLibro());
  console.log(libroPapel.comprobarDisponibilidad());
  const modificacion=new Map([
    ["titulo","Nunca noche"],
    ["autor",[autor1]],
    ["genero","Novela"],
    ["precio",15],
    ["peso",15]
  ]);
  libroPapel.modificarLibro(modificacion);
  console.log(libroPapel.mostrarDatosLibro());
  libroPapel.reducirStock()
  //console.log(libro.mostrarDatosLibro());
  //console.log(libroPrueba.getisbn());
  // 
   */
  

 /*  const autor1=new Autor("Jay Kristof");
  const autor2=new Autor("Carmen");
  const autores=[autor2,autor1];
  const libroPapel=new LibroPapel(11111,"Los diarios de la boticaria",[autor1],"Novela",12.99,12,"20x15x3",0);
  const ebook=new Ebook(2222,"El imperio de los condenados",[autor1,autor2],"Terror",12,102,"pdf");
  
  const libros=new Libros();
  const modificacion=new Map([
    ["titulo","Nunca noche"],
    ["autor",[autor1]],
    ["genero","Novela"],
    ["precio",15],
    ["peso",15]
  ]);

  console.log("Libros insertados="+libros.insertarLibros([libroPapel,ebook]));
  console.log("Datos libros insertados=\n"+libros.obtenerCadenaLibrosMenu());
  console.log("Existe libro isbn="+libros.existeLibroPorIsbn(2222));
  console.log("Buscar libro isbn="+libros.buscarLibroPorIsbn(2222).titulo);
  const librosEncontrados=libros.buscarLibroPorTitulo("El imperio de los condenados");
  console.log("Buscar libro por titulo="+librosEncontrados[0].titulo);
  console.log("Modificaion libro="+libros.modificarLibroPorIsbn(2222,modificacion));
  console.log(ebook.mostrarDatosLibro()); */


  /* const tipoEnvio=new TipoEnvio("urgente",5,10,5);
  const tipoEnvio2=new TipoEnvio("normal",2,12,5);
  console.log(tipoEnvio.mostrarDatosTipoEnvio());
  
  const envios=new TiposEnvios();

  
  console.log("Envios insertados: "+envios.insertarTipos([tipoEnvio,tipoEnvio2]));
  console.log("Existe por nombre: "+envios.existeTipoPorNombre("urgente"));
  console.log("Buscar por nombre: "+envios.buscarTiposPorNombre("normal").nombre);
  console.log("Datos envio: "+envios.obtenerCadenaTiposMenu()); */

  const cliente=new Cliente("111111111","Carmen","Av.Madrid-10");
  const cliente2=new Cliente("11dfd1111","Carmen","Av.Madrid-10");
  console.log(cliente.mostrarDatosCliente());
  console.log(cliente.mostrarDatosPedidoCliente());
  console.log(cliente.mostrarDatosPedidoAbiertoCliente());

  const listadoClientes=new Clientes();
  console.log("Cliente insertado: "+listadoClientes.insertarClientes([cliente,cliente2]));
  console.log("Cliente encontrado por dni: "+listadoClientes.buscarClientePorDNI("111111111").nombreCompleto);
  console.log("Cliente existe: "+listadoClientes.existeClientePorDNI("111111111"));
  console.log("Cliente borrado: "+listadoClientes.borrarClientePorDNI("111111111"));
  console.log(listadoClientes.obtenerCadenaClientesMenu());


  



}