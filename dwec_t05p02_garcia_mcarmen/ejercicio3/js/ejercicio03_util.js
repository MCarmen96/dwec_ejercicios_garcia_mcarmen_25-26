console.log("T04 - Ejercicio 0X");

class Util{


    static validarEntero(valor){
        let isValid=false;
        if(valor!=""||Number.isInteger(valor)){
            isValid=true;
        }
        return isValid;
    }

    static validarReal(valor){
        let isValid=false;
        if(valor!=""||!isNaN(valor)){
            isValid=true;
        }
        return isValid;
    }
    //modificar funcion 1 tiene que comprobar que es un formato de fecha correctp
    static validarCadenaFecha(valor){

        let validFormat=false;
        let day;
        let month;
        let year;
        let partesFecha;

        if(valor.includes("-")){
            partesFecha=valor.split("-");
            validFormat=true;
        }else{
            validFormat=false;
        }

        if(partesFecha.length==3){
            validFormat=true;
        }

        if(partesFecha[2].length===4){
            day=Number(partesFecha[0]);
            month=Number(partesFecha[1]);
            year=Number(partesFecha[2]);
        }else if(partesFecha[0].length===4){
            year=Number(partesFecha[0]);
            month=Number(partesFecha[1]);
            year=Number(partesFecha[2]);
        }else{
            validFormat=false;
        }

        if(!Number.isInteger(day)||!Number.isInteger(month)||!Number.isInteger(year)){
            validFormat=false;
        }

        let fecha=new Date(year,month-1,day);

        if(fecha.getFullYear()===year&&fecha.getMonth()===month-1&&fecha.getDate()===day){
            validFormat=false;
        }

        return validFormat;

    }

    static validarFecha(valor) {
        return validarCadenaFecha(valor);
    }

    static crearFecha(fecha){

        const partesFecha=fecha.split("-");
        let day;
        let month;
        let year;

        if(partesFecha[2].length===4){
            day=Number(partesFecha[0]);
            month=Number(partesFecha[1]);
            year=Number(partesFecha[2]);
        }else if(partesFecha[0].length===4){
            year=Number(partesFecha[0]);
            month=Number(partesFecha[1]);
            year=Number(partesFecha[2]);
        }
        let fecha1=new Date(year,month-1,day);

        return fecha1;
    }

    static validarTitulo(titulo){
        let isValid=false;

        if(typeof titulo==="string" && titulo.length>=1){
            isValid=true;
        }
        return isValid;
    }

    static validarNombrePersona(nombre){
        let patronNombre=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
        let isValid=false;
        if(patronNombre.test(nombre)&& nombre.length>=3){
            isValid=true;
        }
        return isValid;
    }

    static validarDireccion(direccion){
        let isValid=false;
        let patronDireccion=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s]+$/;

        if(patronDireccion.test(direccion)&&direccion.length>=3){
            isValid=true;
        }

        return isValid;
    }

    static validarPrecio(precio){
        let isValid=false;
        let comprobacion=validarReal(precio);
        if(comprobacion&&precio>0){
            isValid=true;
        }
        return isValid;
    }

    static validarTamanoArchivo(tamanoArchivo){

        let isValid=false;
        if(tamanoArchivo>0){
            isValid=true;
        }
        return isValid;
    }

    static validarPeso(peso){
        let isValid=false;
        if(peso>0){
            isValid=true;
        }
        return isValid;
    }

    static validarStock(stock){
        let isValid=false;
        if(stock>0){
            isValid=true;
        }
        return isValid;
    }

    static validarDimensiones(dimensiones){
        let isValid=false;
        let patronDimensiones=/^\d+x\d+x\d+$/;
        if(patronDimensiones.test(dimensiones)){
            isValid=true;
        }
        return isValid;
    }

    static esMesPromocion(fecha,array_meses_promocion){

        let isDate=validarFecha(fecha);
        let date;
        let isMonth=false;

        if(isDate){
            date=crearFecha(fecha);
            let month=date.getMonth();
            if(array_meses_promocion.includes(month)){
                isMonth=true;
            }
        }
        return isMonth;

    }

    static validarFormato(formatoLeido,setFormatosValidos){
        let isFormat=false;
        if(setFormatosValidos.has(formatoLeido)){
            isFormat=true;
        }
        return isFormat;
    }

    static validarGenero(generoLeido,setGenerosLeidos){

        return setGenerosLeidos.has(generoLeido);

    }

    static validarPeso(peso){
        let isValid=false;
        if(validarReal(peso)&&peso>0){
            isValid=true;
        }
        return isValid;
    }

    static validarDiasEnvio(dias){
        let isValid=false;
        if(validarEntero(dias)&&dias>=1&&dias<=31){
            isValid=true;
        }
        return isValid;
    }
    
}