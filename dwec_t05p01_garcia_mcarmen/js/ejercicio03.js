console.log("T0X - Ejercicio 0X");

let imagen=document.getElementById("imagen");
let logs=document.getElementById("logEventos");
let accion=document.getElementById("accion");
document.addEventListener("DOMContentLoaded",()=>{

    imagen.addEventListener("click",function(){
        click();
    });
    imagen.addEventListener("dblclick",function(){
        dblclick();
    })
    imagen.addEventListener("mousedown",function(){
        mouseDown();
    })

    imagen.addEventListener("mousemove",function(){
        mouseMove();
    })
    imagen.addEventListener("mouseover",function(){
        mouseOver();
    })
    
    imagen.addEventListener("mouseout",function(){
        mouseOut();
    })
    imagen.addEventListener("mouseup",function(){
        mouseUp();
    })
    
})

function click(){
    accion.textContent="Se ha hecho click en la imagen";
    registroLogs();
}
function dblclick(){
    accion.textContent="Se ha hecho dobleclick en la imagen";
    registroLogs();
}
function mouseDown(){
    accion.textContent="El mouse se ha movido abajo";
    registroLogs();
}
function mouseMove(){
    accion.textContent="El mouse se mueve";
    registroLogs();
}

function mouseOver(){
    accion.textContent="El mouse por encima";
    registroLogs();
}
function mouseOut(){
    accion.textContent="El mouse sale del area de la imagen";
    registroLogs();
}

function mouseUp(){
    accion.textContent="El mouse va hacia arriba";
    registroLogs();
}

function registroLogs(){
    if(logs.childElementCount>=20){
        logs.removeChild(logs.lastElementChild);
    }
    logs.innerHTML=`<li class="list-group-item">${accion.textContent}</li>`+logs.innerHTML;
}

