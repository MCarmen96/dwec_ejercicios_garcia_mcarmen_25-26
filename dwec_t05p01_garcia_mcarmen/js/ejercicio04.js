console.log("T0X - Ejercicio 0X");


document.addEventListener("DOMContentLoaded", () => {
   // el DOM ya está construido
    let addButton=document.getElementById('btnAgregar');
    // click es el evento la funcion es el manejador
    addButton.addEventListener('click',function(){
        addAlimento();
    })

    let deleteButton=document.getElementById('btnBorrar');

    deleteButton.addEventListener('click',function(){
        deleteAlimento();
    })

    let ordenarButton=document.getElementById('btnOrdenar');
    ordenarButton.addEventListener('click',function(){
        ordenarLista();
    })

});

function addAlimento(){

    let valueInput=document.getElementById('inputAlimento').value;
    let lista=document.getElementById('listaAlimentos');

    let li = document.createElement('li');
    li.textContent = valueInput;

    lista.appendChild(li);
}

function deleteAlimento(){

    let lista=document.getElementById('listaAlimentos');
    
    if(lista.lastElementChild){
        lista.removeChild(lista.lastElementChild);
    }

}

function ordenarLista(){
    let lista=document.getElementById('listaAlimentos');
    let itemsArray=Array.from(lista.children);

    let ordenados = itemsArray.toSorted((a, b) =>
        a.textContent.localeCompare(b.textContent)
    );
    lista.innerHTML = "";
    ordenados.forEach(li => lista.appendChild(li));
}

/*
    element.remove() → borra el nodo
    element.textContent = "" → vacía contenido
    removeChild() → borra un hijo concreto
*/

