console.log("T02 - Ejercicio 03");
let pregunta;
do {

    let yearUser = Number(prompt("Introduce un año: "));

    if (!isNaN(yearUser) && Number.isInteger(yearUser)) {
        
        let dateNow = new Date();
        let yearNow = dateNow.getFullYear();

        if (yearUser >= 0 && yearUser <= yearNow) {

            if (yearUser % 400 === 0) {

                console.log("El año introducido es bisiesto " + yearUser);
                alert("EL AÑO ES BISIESTO->" + yearUser)

            } else if (yearUser % 100 === 0) {

                console.log("es divisible entre 100 pero no entre 400 asique no es bisiesto")
                alert("EL AÑO  NO ES BISIESTO X QUE NO ES DIVISIBLE POR 400 PERO SI POR 100->" + yearUser)

            } else if (yearUser % 4 === 0) {

                console.log("es bisiesto por que es divisible entre 4")
                alert("EL AÑO ES BISIESTO X QUE ES DIVISBLE ENTRE 4->" + yearUser)

            } else {

                console.log("-NO ES BISIESTO-");
                alert("EL AÑO INTRODUCIDO " + yearUser + " NO ES BISIESTO")
            }

        } else {
            alert("El año introducido no esta entre los valores indicados 0 " + yearNow)
        }
    }else{
        alert("el valor introducido no es valido!!!!!");
    }



    pregunta = confirm("Quieres comprobar otro año???")
}while (pregunta == true);
