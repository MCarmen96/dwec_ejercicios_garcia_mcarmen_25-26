console.log("T0X - Ejercicio 0X");


document.addEventListener("DOMContentLoaded", () => {
   // el DOM ya está construido
    let addButton=document.getElementById('btnAgregar');
    // click es el evento la funcion es el manejador
    addButton.addEventListener('click',function(){
        addAlimento();
    })

    let deleteButton=document.getElementById('btnBorrar');




});

function addAlimento(){

    let valueInput=document.getElementById('inputAlimento').value;
    let lista=document.getElementById('listaAlimentos');

    lista.textContent=valueInput;
}

function deleteAlimento(){

    let lista=document.getElementById('listaAlimentos');
    let borrarElement=lista.query


}

