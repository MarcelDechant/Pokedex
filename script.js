let currentPokemon;
let firstPokemon = 1;
let lastPokemon = 15;
let allPokemons = [];



async function loadPokemon() {
    for (let i = firstPokemon; i < lastPokemon; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        // let url = 'https://pokeapi.co/api/v2/pokemon/charmeleon';
        // let url = 'https://pokeapi.co/api/v2/pokemon/charizard';

        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        console.log('Loaded pokemon', currentPokemon);



    }
    renderPokemonInfo();
}


function renderPokemonInfo() {
    for (let j = 0; j < allPokemons.length; j++) {
        createCard(j);

        document.getElementById(`pokeName${j}`).innerHTML = allPokemons[j]['name'].charAt(0).toUpperCase() + allPokemons[j]['name'].slice(1);
        document.getElementById(`pokeimg${j}`).src = allPokemons[j]['sprites']['other']['dream_world']['front_default'];
        document.getElementById(`pokeNumber${j}`).innerHTML += allPokemons[j]['id'];
        document.getElementById(`type${j}`).innerHTML = allPokemons[j]['types'][0]['type']['name'].charAt(0).toUpperCase() + allPokemons[j]['types'][0]['type']['name'].slice(1);
        typeColors(j)
    }
}




function singlePokemon(j) {
    const selectedPokemon = allPokemons[j];
    const fullScreenContainer = document.getElementById('single-card');
    let singlePokemonCard = document.getElementById('single-card')
    fullScreenContainer.classList.remove("d-none");
    singlePokemonCard.innerHTML = createsingleCard();
    renderSinglePokemon(j);
}
function renderSinglePokemon(j){
    document.getElementById(`singlePokeName`).innerHTML = allPokemons[j]['name'].charAt(0).toUpperCase() + allPokemons[j]['name'].slice(1);
    document.getElementById(`singlePokeimg`).src = allPokemons[j]['sprites']['other']['dream_world']['front_default'];
    document.getElementById(`singlePokeNumber`).innerHTML += allPokemons[j]['id'];
    document.getElementById(`singleType`).innerHTML = allPokemons[j]['types'][0]['type']['name'].charAt(0).toUpperCase() + allPokemons[j]['types'][0]['type']['name'].slice(1);
    singleTypeColors(j)
}






function close() {
    document.getElementById('single-card').classList.add("d-none");
}