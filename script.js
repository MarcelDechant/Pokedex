let currentPokemon;
let firstPokemon = 0;
let lastPokemon = 15;




// const typeColors = {
//     grass: "bgGreen",
//     fire: "bgRed",
//     water: "bgBlue",
//     bug: "bgLiteGreen",
//     normal: "bgGray",
//     poison: "bgPurple",
//     flying: "bgLitePurple",
//     electric: "bgYellow",
//     ground: "bgOrange",
//   };



async function loadPokemon() {
    // let url = 'https://pokeapi.co/api/v2/pokemon/charizard';
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    // let url = 'https://pokeapi.co/api/v2/pokemon/charmeleon';


    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loaded pokemon', currentPokemon);
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokeName').innerHTML = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
    document.getElementById('pokeimg').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('pokeNumber').innerHTML += currentPokemon['id'];
    document.getElementById('type').innerHTML = currentPokemon['types']['0']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['0']['type']['name'].slice(1);;
}
