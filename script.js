let currentPokemon;
let firstPokemon = 1;
let lastPokemon = 800;
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
function typeColors(j){
    if (allPokemons[j]['types'][0]['type']['name']=== 'fire') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorFire1")
        document.getElementById(`type${j}`).classList.add("bgColorFire2")
    } if (allPokemons[j]['types'][0]['type']['name']=== 'grass') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorGrass1")
        document.getElementById(`type${j}`).classList.add("bgColorGrass2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'water') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorWater1")
        document.getElementById(`type${j}`).classList.add("bgColorWater2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'bug') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorBug1")
        document.getElementById(`type${j}`).classList.add("bgColorBug2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'normal') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorNormal1")
        document.getElementById(`type${j}`).classList.add("bgColorNormal2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'electric') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorElectric1")
        document.getElementById(`type${j}`).classList.add("bgColorElectric2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'poison') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorPoison1")
        document.getElementById(`type${j}`).classList.add("bgColorPoison2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'ground') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorGround1")
        document.getElementById(`type${j}`).classList.add("bgColorGround2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'dragon') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorDragon1")
        document.getElementById(`type${j}`).classList.add("bgColorDragon2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'ice') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorIce1")
        document.getElementById(`type${j}`).classList.add("bgColorIce2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'rock') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorRock1")
        document.getElementById(`type${j}`).classList.add("bgColorRock2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'steel') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorSteel1")
        document.getElementById(`type${j}`).classList.add("bgColorSteel2")
    }if (allPokemons[j]['types'][0]['type']['name']=== 'dragon') {
        document.getElementById(`pokedex${j}`).classList.add("bgColorDragon1")
        document.getElementById(`type${j}`).classList.add("bgColorDragon2")
    }
}