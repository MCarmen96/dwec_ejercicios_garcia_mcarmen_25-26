console.log("T02 - Ejercicio 01");

let sumatorio=0;
let media=0;

for (let index = 0; index < 3; index++) {

    let num=parseFloat(prompt("Introduce un numero:"))
    sumatorio+=num;
    console.log(num)

}

console.log("La suma de las notas es: ",sumatorio)
media=sumatorio/3;

console.log("La media es: ",media)


if (media<5) {
    console.log("SUSPENSO")
    alert("---HAS SUSPENDIDO---")
} else if(media>=5||media<=7){
    console.log("APROBADO")
    alert("---APROBADO---")

}else if(media>=7 || media ==8.5){
    console.log("NOTABLE")
    alert("---NOTABLE---")
}else if(media>=8.5||media==10){
    console.log("SOBRESALIENTE")
    alert("---SOBRESALIENTE---")
}

