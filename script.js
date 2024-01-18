let currentPokemon;
let firstPokemon = 1;
let lastPokemon = 15;
let allPokemons = [];



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
    }
}
