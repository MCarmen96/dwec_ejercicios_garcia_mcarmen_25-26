console.log("T03 - Ejercicio 20");

/*
Desarrolla un script que determine si el formato usado en una fecha dada por el usuario es válido o no. 
Los formatos de fechas válidos son DD-MM-YYYY, DD-MM-YY, DD/MM/YYYY y DD/MM/YY. 
Deberás hacer uso del objeto ExpReg y crear una función que se denomine "validarFormatoFecha()" que reciba la cadena introducida por el usuario y devuelva un booleano. 
Después tienes que crear un objeto de tipo Date y determinar si la fecha es correcta.

*/

let userInput = prompt("Introudce una fecha en elos siguinetes formatos DD-MM-YYYY, DD-MM-YY, DD/MM/YYYY y DD/MM/YY: ");

let regla = /^\d{2}([-/\s])\d{2}\1\d{4}$/;

let patron = new RegExp(regla);

function validadrFormatoFecha(fecha) {
    let isValid = false;
    if (patron.test(fecha)) {
        isValid = true;
    }
    return isValid;
}

function fechaCorrecta(validadrFormatoFecha, fecha) {

    if (validadrFormatoFecha == true) {
        
        let separar = "";

        //detector de formato de fecha
        if (fecha.includes("-")) {
            separar = "-";
        } else if (fecha.includes("/")) {
            separar = "/";
        } else if (fecha.includes(" ")) {
            separar = " ";
        } else {
            console.log("--FORMATO DE FECHA NO VÁLIDO--");
        }
        let day;
        let month;
        let year;

        if (separar !== "") {
            let fechaArray = fecha.split(separar);
            day = fechaArray[0];
            month = fechaArray[1] - 1;
            year = fechaArray[2];
        }

        let objFecha=new Date(year,month,day);

    }
}
