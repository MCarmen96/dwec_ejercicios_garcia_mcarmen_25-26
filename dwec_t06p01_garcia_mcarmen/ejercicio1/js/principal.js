console.log("T0X - Ejercicio 0X");
document.addEventListener("DOMContentLoaded",async()=>{
    let datos= await cargarDatos();
    
    let buttonBuscar=document.getElementById("btnBuscar");

    buttonBuscar.addEventListener('click',function(){
        
        buscadorPersonaje(datos);

    })
})


async function cargarDatos() {
    try{
        const response=await fetch('https://hp-api.onrender.com/api/characters')
        const datos=await response.json();
        console.log("holaa",datos)
        return datos;

    }catch(error){
        console.error("Error en la peticion: ", error);
    }
}

function buscadorPersonaje(datos){

    let inputBuscar=document.getElementById("buscador").value;
    // * me deveulve el array con el obejto encontrado
    let personajeEncontrado=datos.filter(personaje=>
        personaje.name.toLowerCase().includes(inputBuscar.toLowerCase)
    );
    
    pintarTablaPersonaje(personajeEncontrado);

}

function pintarTablaPersonaje(personaje){

    let contenedorTabla=document.getElementById("contendor-personajes");

    contenedorTabla.innerHTML="";

    contenedorTabla.innerHTML=
    `
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Specie</td>
                    <td>House</td>
                    <td>Patronous</td>
                    <td>Alive</td>
                </tr>
            </thead>
        </table>
    `;

    let bodyTable=document.createElement("tbody");
    
    let fila;
    let celdaName;
    let celdaSpecie;
    let celdaHouse;
    let celdaPatronous;
    let celdaAlive;

    personaje.forEach(element => {

        fila=document.createElement("tr");
        celdaName=document.createElement("td");
        celdaSpecie=document.createElement("td");
        celdaHouse=document.createElement("td");
        celdaPatronous=document.createElement("td");
        celdaAlive=document.createElement("td");

        celdaName.textContent=element.name;
        celdaSpecie.textContent=element.species;
        celdaHouse.textContent=element.house;
        celdaPatronous.textContent=element.patronus;
        celdaAlive.textContent=element.alive;

    });
    fila.appendChild(celdaName);
    fila.appendChild(celdaSpecie);
    fila.appendChild(celdaHouse);
    fila.appendChild(celdaPatronous);
    fila.appendChild(celdaAlive);
    bodyTable.appendChild(fila);
    contenedorTabla.innerHTML=bodyTable;
}
