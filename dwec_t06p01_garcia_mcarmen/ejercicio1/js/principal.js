console.log("T0X - Ejercicio 0X");
document.addEventListener("DOMContentLoaded", async () => {
    let datos = await cargarDatos();

    let buttonBuscar = document.getElementById("btnBuscar");

    buttonBuscar.addEventListener('click', function () {

        buscadorPersonaje(datos);

    })

    cargarTarjetasPersonajes(datos);
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
    const contentError=document.createElement("div");

    let inputBuscar = document.getElementById("buscador").value;
    if (inputBuscar === "") {
        
        const p=document.getElementById("mensaje-vacio");
        contentError.classList.add('alert alert-danger');
        contentError.setAttribute("role","alert");
        p.innerHTML=`<h1>Error campo vacio</h1>`;
        contentError.appendChild(p)
    } else {
        // * me deveulve el array con el obejto encontrado
        let personajeEncontrado = datos.filter(personaje =>
            personaje.name.toLowerCase().includes(inputBuscar.toLowerCase())
        );

        pintarTablaPersonaje(personajeEncontrado);
    }


}

function pintarTablaPersonaje(personajes) {
    let contenedorTabla = document.getElementById("contendor-personajes");
    contenedorTabla.innerHTML = ""; // Limpiamos

    // 1. Creamos la estructura base
    const tabla = document.createElement("table");
    tabla.className = "table table-striped"; // Si usas Bootstrap
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

    // 2. Recorremos el array de objetos (personajes)
    personajes.forEach(element => {
        const fila = document.createElement("tr");

        // Creamos y rellenamos cada celda dentro del bucle
        const celdaName = document.createElement("td");
        celdaName.textContent = element.name;

        const celdaSpecie = document.createElement("td");
        celdaSpecie.textContent = element.species;

        const celdaHouse = document.createElement("td");
        celdaHouse.textContent = element.house || "N/A"; // Por si no tiene casa

        const celdaPatronus = document.createElement("td");
        celdaPatronus.textContent = element.patronus || "None";

        const celdaAlive = document.createElement("td");
        celdaAlive.textContent = element.alive ? "Yes" : "No";

        const celdaFavorite = document.createElement("td");
        celdaFavorite.innerHTML = `<button type="button" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"></path>
                </svg>
              </button>`;
        // Metemos las celdas en la fila
        fila.appendChild(celdaName);
        fila.appendChild(celdaSpecie);
        fila.appendChild(celdaHouse);
        fila.appendChild(celdaPatronus);
        fila.appendChild(celdaAlive);
        fila.appendChild(celdaFavorite);
        // METEMOS LA FILA EN EL BODY (dentro del bucle)
        bodyTable.appendChild(fila);
    });

    // 3. Ensamblamos todo el rompecabezas
    tabla.appendChild(bodyTable);
    contenedorTabla.appendChild(tabla);
}

function cargarTarjetasPersonajes(datos) {

    const objetosMezclados = datos.sort(function () { return 0.5 - Math.random() });

    //const ochoPersonajes=objetosMezclados.sclice(0,8);


}


