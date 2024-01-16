let currentPokemon;
let firstPokemon = 1;
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
    for (let i = firstPokemon; i < lastPokemon; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        // let url = 'https://pokeapi.co/api/v2/pokemon/charmeleon';
        // let url = 'https://pokeapi.co/api/v2/pokemon/charizard';

        let response = await fetch(url);
        currentPokemon = await response.json();

        console.log('Loaded pokemon', currentPokemon);

        createCard();

    }
    renderPokemonInfo();
}


function renderPokemonInfo() {
    document.getElementById('pokeName').innerHTML = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
    document.getElementById('pokeimg').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('pokeNumber').innerHTML += currentPokemon['id'];
    document.getElementById('type').innerHTML = currentPokemon['types']['0']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['0']['type']['name'].slice(1);;
}
