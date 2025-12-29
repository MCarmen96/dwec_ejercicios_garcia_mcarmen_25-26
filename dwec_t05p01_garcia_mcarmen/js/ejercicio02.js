console.log("T05 - Ejercicio 02");
document.addEventListener("DOMContentLoaded",()=>{

    const leer = document.getElementById("leer-mas");
    const ocultar = document.getElementById("ocultar");
    const content = document.getElementById("content-noticia");

    leer.addEventListener("click", (e) => {
        e.preventDefault();

        content.classList.remove("d-none");
        content.classList.add("d-block");

        leer.classList.add("d-none");
    });

    ocultar.addEventListener("click", (e) => {
        e.preventDefault();

        content.classList.remove("d-block");
        content.classList.add("d-none");

        leer.classList.remove("d-none");
    });
});

