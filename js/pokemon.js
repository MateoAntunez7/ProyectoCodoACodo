function pokemonAleatorio() {

    let id = Math.floor(Math.random() * (1009 - 1 + 1)) + 1;

    const urlApi = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return urlApi;

}

let urlPokemonAleatorio = pokemonAleatorio();

function datos(nombre, tipo) {

    let revelarNombre = document.querySelector("#esX")
    revelarNombre.innerHTML = `Es ${nombre}.`

    let revelarTipo = document.querySelector("#tipo")
    revelarTipo.innerHTML = `${tipo}'s type.`
    
}

async function obtenerPokemon(urlPokemonAleatorio) {

    try {
        const respuesta = await fetch(urlPokemonAleatorio);
        const pokemonJson = await respuesta.json();
        console.log(pokemonJson);

        imagen = pokemonJson.sprites.front_default;
        tipo = pokemonJson.types[0].type.name;
        nombre = pokemonJson.name;

        let otra = document.querySelector("#jugarOtra")
        otra.style.display = "none";

        let pokemonFoto = document.querySelector("#foto");
        pokemonFoto.src = imagen;
        pokemonFoto.style.filter = "brightness(0%) saturate(0%)";
        pokemonFoto.style.width = "15rem";
        

        const botonEnviar = document.querySelector("#botonEnviar");
        botonEnviar.addEventListener("click", function () {
        const ingreso = document.querySelector("#ingreso").value;

        let formulario = document.querySelector("#app")
        formulario.style.display = "none";

        if ((ingreso.toLowerCase() !== "" && ingreso.toLowerCase() !== nombre.toLowerCase()) || ingreso === "") {
            let pokemonFoto = document.querySelector("#foto");
            pokemonFoto.style.filter = "none";
            let ganador = document.querySelector("#gemu");
            ganador.innerHTML = `¡Mejor suerte la próxima!`;
            datos(nombre, tipo);
            let otra2 = document.querySelector("#jugarOtra")
            otra2.style.display = "flex";

        } else if (ingreso.toLowerCase() === nombre.toLowerCase()) {
            let pokemonFoto = document.querySelector("#foto");
            pokemonFoto.style.filter = "none";
            let ganador = document.querySelector("#gemu");
            ganador.innerHTML = `¡Ganaste!`;
            datos(nombre, tipo);
            let otra2 = document.querySelector("#jugarOtra")
            otra2.style.display = "flex";
        }  
        });

    } catch (error) {
        console.log("Hubo un error", error);
    }
}

obtenerPokemon(urlPokemonAleatorio);

const jugarOtraBtn = document.querySelector("#jugarOtra");
jugarOtraBtn.addEventListener("click", function() {
    location.reload();
    let ingreso = document.querySelector("#ingreso")
    ingreso.value = ""
});
