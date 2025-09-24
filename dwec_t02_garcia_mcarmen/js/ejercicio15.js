console.log("T02 - Ejercicio 15");
/*
    * Desarrolla una aplicación que permita calcular los salarios mensuales de los trabajadores de una empresa a partir de los siguientes datos:
    a.Número de horas trabajadas.
    Comprueba que el número de horas trabajadas es un entero mayor que 0. En caso contrario saltaremos al siguiente trabajador.
    b.Turno realizado: Mañanas (m o M), Tardes (t o T) o Noches (n o N).
    Comprueba que el turno sea correcto. En caso contrario saltaremos al siguiente trabajador.
    Para el cálculo del salario bruto se tendrá en cuenta que el turno de mañana se paga a 45,00 €/hora, el de tarde se paga a 47,00 €/hora y el turno de noche se paga 50,00 €/hora.
    
    Para el cálculo del salario neto se realizan se realizan determinados descuentos destinados al pago de impuestos de la siguiente forma:
    
    -    	Si el salario bruto es menor de 600,00 € el descuento es del 8,00%.
    -    	Si el salario bruto está entre 600,00 € y 1000,00 € el descuento es del 10,00%.
    -    	Si el salario bruto es mayor de 1000,00 € el descuento es del 12,00%.
    
    Se desea calcular el salario neto de cada trabajador. Para ello la aplicación irá pidiendo uno a uno los trabajadores hasta que el usuario indique lo contrario. Para cada trabajador se mostrará su salario neto.
    
    Antes de finalizar la aplicación mostrará el importe total de salarios abonados.

    El script se escribirá usando tantas funciones como sea posible con el fin de poder reutilizar la máxima cantidad de código en un futuro.
    
    Todos los resultados se mostrarán con 2 decimales usando toFixed


*/



let horasArray=[];
let turnoArray=[];
let input=true;
do{
    regsitrarEmpleados();
    input=confirm("Quieres añadir empleados : ");
    

}while(!input===true)


function regsitrarEmpleados(){
    
    
    let turno=prompt("Introduce el turno del trabajador: ");
    if(turno=="m"||turno=="M"){
        
        let horas=Number.prompt("Introduce las horas: ");

        if(horas>0){

            turnoArray.push(turno);

            horasArray.push(horas);

            calcularSalario(horas);

        }else{
            console.error("el numero de horas esta mal seguimo...")
        }

        

    }
    else{
        console.error("el turno esta mal, seguirmos.")
    }
}

function calcularSalario(horas){


}




