console.log("T05 - Ejercicio 01");

document.addEventListener("DOMContentLoaded",()=>{
    
    let rojo=document.getElementById("rojo");
    let azul=document.getElementById("azul");
    let verde=document.getElementById("verde");

    rojo.addEventListener("click",function(){
        cambiarColor("bg-danger");
    });
    azul.addEventListener("click",function(){
        cambiarColor("bg-primary");
    });
    verde.addEventListener("click",function(){
        cambiarColor("bg-success");
    });

});

function cambiarColor(clase){

    let main=document.getElementById("main");
    main.classList.remove("bg-danger", "bg-primary", "bg-success");
    main.classList.add(clase);

}