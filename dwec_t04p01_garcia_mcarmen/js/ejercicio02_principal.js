console.log("T04p01 - Ejercicio 01");

function funcionPrueba1(){

    const alumno1=new Alumno("71368712B","carmen","1996-10-27",7,6,7,"m");
    const alumno2= new Alumno("71268312A","Alberto","1993-10-27",8,6,5,"h")
    let datosAlum1=JSON.stringify(alumno1);
    let datosAlum2=JSON.stringify(alumno2);

    console.log(datosAlum1);
    console.log(datosAlum2);

    const alumnos=[alumno1,alumno2];

    const aula1=new Aula();



    let comparacion=alumno1.comparar(alumno2);


    
    let nota=alumno1.cambiarNotas(2,5,3);
    console.log(comparacion);
    console.log(datosAlum1);
}

//console.log(funcionPrueba1());

function funcionPrueba2(){

    let maxAlu;
    do{
        maxAlu=parseInt(prompt("Introduce el numero maximo de alumnos: "));

        if(maxAlu<=0){
            console.log("El numero debe ser mayor que 0");
        }
    }while(isNaN(maxAlu)|| maxAlu<=0)

    const aula1= new Aula(maxAlu,1,"DAW",2);

    let datos=aula1.pedirDatos()
    aula1.insertarAlumnos(datos);

}
debugger
console.log(funcionPrueba2());