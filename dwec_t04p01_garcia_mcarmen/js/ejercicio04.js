console.log("T0X - Ejercicio 04");
const personajes = [
    {
        nombre: "Spider-Man",
        nombreReal: "Peter Parker",
        profesionReal: "Fotógrafo",
        editorial: "Marvel",
        superpoder: "Agilidad sobrehumana, sentido arácnido, fuerza mejorada",
        debilidad: "Familia, responsabilidades",
        heroe: "héroe",
        edad: 28,
        numeroApariciones: 2500,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Batman",
        nombreReal: "Bruce Wayne",
        profesionReal: "Empresario",
        editorial: "DC",
        superpoder: "Inteligencia superior, combate cuerpo a cuerpo",
        debilidad: "Humanidad, miedo a perder seres queridos",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Iron Man",
        nombreReal: "Tony Stark",
        profesionReal: "Ingeniero, Empresario",
        editorial: "Marvel",
        superpoder: "Armadura tecnológica avanzada, inteligencia superior",
        debilidad: "Alcoholismo, ego",
        heroe: "héroe",
        edad: 40,
        numeroApariciones: 2200,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Joker",
        nombreReal: "Desconocido",
        profesionReal: "Criminal",
        editorial: "DC",
        superpoder: "Ingenio criminal, inmunidad a toxinas",
        debilidad: "Insanidad",
        heroe: "villano",
        edad: 45,
        numeroApariciones: 1000,
        equipo: "Injusticia",
        nacionalidad: "Desconocido",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Wonder Woman",
        nombreReal: "Diana Prince",
        profesionReal: "Embajadora, guerrera",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, habilidades de combate",
        debilidad: "Cuerdas mágicas",
        heroe: "héroe",
        edad: 3000,
        numeroApariciones: 1200,
        equipo: "Liga de la Justicia",
        nacionalidad: "Themyscirana",
        especie: "Amazona",
        universo: "Tierra-1"
    },
    {
        nombre: "Thor",
        nombreReal: "Thor Odinson",
        profesionReal: "Dios del Trueno",
        editorial: "Marvel",
        superpoder: "Control del trueno, vuelo, fuerza sobrehumana",
        debilidad: "Humildad (cuando sin Mjolnir)",
        heroe: "héroe",
        edad: 1500,
        numeroApariciones: 1500,
        equipo: "Los Vengadores",
        nacionalidad: "Asgardiano",
        especie: "Dios",
        universo: "Tierra-616"
    },
    {
        nombre: "Loki",
        nombreReal: "Loki Laufeyson",
        profesionReal: "Dios de las mentiras",
        editorial: "Marvel",
        superpoder: "Ilusionismo, cambio de forma, magia",
        debilidad: "Celos hacia Thor",
        heroe: "antiheroe",
        edad: 1000,
        numeroApariciones: 900,
        equipo: "",
        nacionalidad: "Asgardiano",
        especie: "Gigante de Hielo",
        universo: "Tierra-616"
    },
    {
        nombre: "Flash",
        nombreReal: "Barry Allen",
        profesionReal: "Forense",
        editorial: "DC",
        superpoder: "Súper velocidad, viaje en el tiempo",
        debilidad: "Demasiada velocidad puede destruir el tiempo",
        heroe: "héroe",
        edad: 30,
        numeroApariciones: 1500,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Thanos",
        nombreReal: "Thanos",
        profesionReal: "Tirano galáctico",
        editorial: "Marvel",
        superpoder: "Fuerza inmensa, inteligencia táctica, uso del Guantelete del Infinito",
        debilidad: "Arrogancia, obsesión con la muerte",
        heroe: "villano",
        edad: 1000,
        numeroApariciones: 500,
        equipo: "Orden Negra",
        nacionalidad: "Titán",
        especie: "Eterno-Deviant",
        universo: "Tierra-616"
    },
    {
        nombre: "Superman",
        nombreReal: "Clark Kent (Kal-El)",
        profesionReal: "Periodista",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, visión de rayos X, invulnerabilidad",
        debilidad: "Kryptonita",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Kryptoniano",
        especie: "Extraterrestre (Kryptoniano)",
        universo: "Tierra-1"
    }
];
//* S.Usa el método "sort" para ordenar los personajes por el número de apariciones, de mayor a menor. ¿Diferencia con toSorted() y toReversed()?

// TODO sort() -> Ordena por defecto por la posicion del caracter en la tabla unicode
//* Si se quiere ordenar por valor numerico se utiliza una funcion de comparacion en la cual se define el modo de ordenacion
// Logica de la funcion de comparacion El método sort() solo mira el signo del número que devuelves: // TODO  si es negativo a va antes b, si es positivo b antes que a y si es 0 son iguales
// * El metodo 'sort' modifica el array original mutacion del array
// TODO a sera el primer elemento a comparar y b el segundo elemento a comparar Devuelve el array ordenado

personajes.sort((personajeA,personajeB)=>{
    return personajeB.numeroApariciones - personajeA.numeroApariciones;
});

console.log("Array personajes ordenado con sort(): ",personajes);

// TODO toSorted() -> Ordena el array, pero no modifica el original.Devuelve una copia ordenada del array segun el metodo de ordenacion

const personajes2=personajes.toSorted((personajeA,personajeB)=>{
    return personajeA.numeroApariciones - personajeB.numeroApariciones;
});
console.log("Array personajes ordenado con toSorted de menor a mayor: ",personajes2);

// TODO toReversed() -> Invierte el orden de los elementos del array.Devuelve un nuevo array, y no recibe parametros 

const personajes3=personajes.toReversed();
console.log("Array invertido con toReversed(): ",personajes3)

//* T. Usa el método "sort" para ordenar los personajes por edad, de menor a mayor. ¿Diferencia con toSorted() y toReversed()?
//personajes.sort((a,b)=>{return a.edad-b.edad;});
//console.log("Personajes ordenados por edad: ",personajes)
// * U. Usa el método "toSorted" para ordenar los personajes alfabéticamente por nombre (de la A-Z). ¿Diferencia con sort() y reverse()?

// TODO  localCompare Compara dos cadenas de texto referenceStr.localeCompare(compareString, locales, options);
// locales es par indicar el idoma en el cual debe basarse el ordenamiento
// options ajusta el comportamiento exacto de ordenacion por ejemplo que ignore mayusculas y minusculas
const perosnajesAlfabe=personajes.toSorted((a,b)=>{
    return a.nombre.localeCompare(b.nombre);
});

console.log("Array ordenado alfabeticamente por nombre de A-Z: ",perosnajesAlfabe)

// * V. Usa el método "toSorted" para ordenar los personajes alfabéticamente por nombre real (de la Z-A). ¿Diferencia con sort() y reverse()?
// TODO La prinicpal diferencia es que no mutan el array original como sort y reverse que si lo hacen
const personajesAlfabe_Invert=personajes.toSorted((a,b)=>{
    return a.nombreReal.localeCompare(b.nombreReal);
});

console.log("Ordenados por nombre real invertido de Z-A: ",personajesAlfabe_Invert);