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

  const leerDato=new LeerDatosPrompt();
  const pattern=/a/;
  //let entero=leerDato.leerEntero("Dame un entero");
  //let enteroHasta=leerDato.leerEnteroHasta("Dame un numero");
  //let real=leerDato.leerReal("dame un numero real");
  //let real=leerDato.leerRealHasta("dame un numero real");
  //let rango=leerDato.leerEnteroEntreHasta("dame un numero",0,Infinity);
  //let cadena=leerDato.leerCadena1("escribe una cadena de texto");
  //let cadenaLongitud=leerDato.leerCadena3("escribe una cadena de texto",3,pattern);
  //let cadenaHasta=leerDato.leerCadena1Hasta("escribe una cadena de texto");
  let cadenaHastaLongitud=leerDato.leerCadena3Hasta("escribe una cadena de texto",3,pattern);


}