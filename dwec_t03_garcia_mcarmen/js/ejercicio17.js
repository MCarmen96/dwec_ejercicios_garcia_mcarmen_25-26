console.log("T03 - Ejercicio 15");
/*
    * Crea un script que pida al usuario dos fechas e indique los meses que hay entre ambas fechas.
    * El script debe determinar qué fecha es la mayor.

*/

alert("--INTRODUCE FECHAS--");
let fecha1=new Date(prompt("Año: "),prompt("Mes: "),prompt("Dia: "))
let fecha2=new Date(prompt("Año: "),prompt("Mes: "),prompt("Dia: "))
let intervalo;

if(fecha1.getMonth()<fecha2.getMonth()){

    intervalo=fecha2.getMonth()-fecha1.getMonth();

    console.log(`Hay ${intervalo} meses entre una fecha y otra`);

}else{
    intervalo=fecha1.getMonth()-fecha2.getMonth();
    console.log(`Hay ${intervalo} meses entre una fecha y otra`);
}

if(fecha1>fecha2){
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
}else{
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
}









