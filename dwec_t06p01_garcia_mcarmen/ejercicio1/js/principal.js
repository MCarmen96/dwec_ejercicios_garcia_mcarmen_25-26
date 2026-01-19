console.log("T0X - Ejercicio 0X");
document.addEventListener("DOMContentLoaded", async () => {
    let datos = await cargarDatos();

    let inputTexto = document.getElementById("buscador");

    inputTexto.addEventListener('input', function () {

        buscadorPersonaje(datos);

    })

    cargarTarjetasPersonajes(datos);

    let buttonFavorites=document.getElementById("btn-favorite");
    if(buttonFavorites){
        buttonFavorites.addEventListener('click', function(){
        añadirPersonajeFavorito();
    })
    }

    let modal=document.getElementById("aviso-cookies");

    if(!sessionStorage.getItem("cookies-confirm")){
        
        modal.hidden=false;
    }

    let cookiesButton=document.getElementById("btn-aceptar");

    cookiesButton.addEventListener("click",()=>{
        sessionStorage.setItem("cookies-confirm","true");
        modal.hidden=true;
    })

   
    console.log("COOKIES....",sessionStorage.getItem("cookies-confirm"));
})

 


async function cargarDatos() {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters')
        const datos = await response.json();
        console.log("holaa", datos)
        return datos;

    } catch (error) {
        console.error("Error en la peticion: ", error);
    }
}

function buscadorPersonaje(datos) {
    const pError = document.getElementById("mensaje-vacio");
    const contenedor = document.getElementById("contendor-personajes");
    let inputBuscar = document.getElementById("buscador").value.trim();

    // 1. Si el campo está vacío
    if (inputBuscar === "") {
        pError.classList.remove('d-none');
        pError.classList.add('alert', 'alert-danger', 'text-danger'); 
        pError.innerHTML = `<strong>Error:</strong> El campo de búsqueda está vacío.`;
        contenedor.innerHTML = ""; 
        return; 
    }


    pError.classList.add('d-none');
    pError.classList.remove('alert', 'alert-danger');

    let personajeEncontrado = datos.filter(personaje =>
        personaje.name.toLowerCase().includes(inputBuscar.toLowerCase())
    );

   
    if (personajeEncontrado.length === 0) {
        pError.classList.remove('d-none');
        pError.innerHTML = `No se han encontrado personajes que coincidan con "${inputBuscar}".`;
        contenedor.innerHTML = "";
    } else {
        pintarTablaPersonaje(personajeEncontrado);
    }
}



function pintarTablaPersonaje(personajes) {
    let contenedorTabla = document.getElementById("contendor-personajes");
    contenedorTabla.innerHTML = ""; 

  
    const tabla = document.createElement("table");
    tabla.className = "table table-striped"; 
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Specie</th>
                <th>House</th>
                <th>Patronus</th>
                <th>Alive</th>
                <th>Favorite</th>
            </tr>
        </thead>
    `;

    const bodyTable = document.createElement("tbody");


    personajes.forEach(element => {
        const fila = document.createElement("tr");

    
        const celdaName = document.createElement("td");
        celdaName.textContent = element.name;

        const celdaSpecie = document.createElement("td");
        celdaSpecie.textContent = element.species;

        const celdaHouse = document.createElement("td");
        celdaHouse.textContent = element.house || "N/A"; // si no tiene casa

        const celdaPatronus = document.createElement("td");
        celdaPatronus.textContent = element.patronus || "None";

        const celdaAlive = document.createElement("td");
        celdaAlive.textContent = element.alive ? "Yes" : "No";

        const celdaFavorite = document.createElement("td");
        celdaFavorite.innerHTML = `<button type="button" class="btn btn-outline-danger" id="#btn-favorite">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16" data-id=${element.id}>
                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"></path>
                </svg>
              </button>`;
        
        fila.appendChild(celdaName);
        fila.appendChild(celdaSpecie);
        fila.appendChild(celdaHouse);
        fila.appendChild(celdaPatronus);
        fila.appendChild(celdaAlive);
        fila.appendChild(celdaFavorite);
        
        bodyTable.appendChild(fila);
    });


    tabla.appendChild(bodyTable);
    contenedorTabla.appendChild(tabla);
}
function obtenerOchoPorCasa(datos) {
    const casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    let seleccionados = [];

    casas.forEach(casa => {

        let personajesDeLaCasa = datos.filter(p => p.house === casa);

        
        personajesDeLaCasa.sort(() => 0.5 - Math.random());

        
        seleccionados.push(...personajesDeLaCasa.slice(0, 2));
    });

    return seleccionados;
}

function cargarTarjetasPersonajes(datos) {

    const contenedor = document.getElementById("card-personajes"); 


    contenedor.innerHTML = `
        <div class="text-center my-5" id="spinner">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>Cargando personajes...</p>
        </div>`;

    // Simulamos la espera de 2 segundos
    setTimeout(() => {
        const ochoElegidos = obtenerOchoPorCasa(datos);
        contenedor.innerHTML = '<div class="row row-cols-1 row-cols-md-4 g-4" id="grid-cards"></div>';
        const grid = document.getElementById("grid-cards");

        ochoElegidos.forEach(p => {
            grid.innerHTML += `
                <div class="col">
                    <div class="card h-100 shadow">
                        <img src="${p.image || 'https://via.placeholder.com/200x300?text=No+Photo'}" class="card-img-top" alt="${p.name}" style="height: 300px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${p.name}</h5>
                            <p class="card-text">
                                <strong>Casa:</strong> ${p.house}<br>
                                <strong>Patronus:</strong> ${p.patronus || 'Desconocido'}<br>
                                <strong>Especie:</strong> ${p.species}<br>
                                <strong>Nacimiento:</strong> ${p.yearOfBirth || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>`;
        });
    }, 2000);
}

function añadirPersonajeFavorito(){
    let contendorPrincipal=document.getElementById("contenedor-mensaje");
    mensajeTemp.className = "alert alert-info mt-3"; // Clase de Bootstrap para que se vea bonito
    mensajeTemp.textContent = "Los favoritos se implementarán más adelante.";

    // 2. Limpiamos el contenedor y añadimos el mensaje
    contenedorPrincipal.innerHTML = ""; 
    contenedorPrincipal.appendChild(mensajeTemp);
}


