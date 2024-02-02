let currentPokemon;
let firstPokemon = 1;
let lastPokemon = 30;
let allPokemons = [];
let searchPokemon = [];
let shinyImg = [];
let normalImg = [];
let singleBaseStats = [];

async function loadPokemon() {
    for (let i = firstPokemon; i <= lastPokemon; i++) {

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
        document.getElementById(`pokeimg${j}`).src = allPokemons[j]['sprites']['other']['official-artwork']['front_default'];
        document.getElementById(`pokeNumber${j}`).innerHTML = '# ' + allPokemons[j]['id'];
        document.getElementById(`type${j}`).innerHTML = allPokemons[j]['types'][0]['type']['name'].charAt(0).toUpperCase() + allPokemons[j]['types'][0]['type']['name'].slice(1);
        if (allPokemons[j]['types'].length === 2) {
            document.getElementById(`types${j}`).innerHTML += /*html*/ `<p class="type" id="type2_${j}"></p>`;
            document.getElementById(`type2_${j}`).innerHTML = allPokemons[j]['types'][1]['type']['name'].charAt(0).toUpperCase() + allPokemons[j]['types'][1]['type']['name'].slice(1);

        }
        typeColors(j);

    }
    closeLoadingScreen();
}


function singlePokemon(j) {
    const selectedPokemon = allPokemons[j];
    const fullScreenContainer = document.getElementById('single-card');
    let singlePokemonCard = document.getElementById('single-card');
    fullScreenContainer.classList.remove("d-none");
    singlePokemonCard.innerHTML = createsingleCard(j);
    renderSinglePokemon(j);
    renderInfoAbout(j);
}

function renderSinglePokemon(j) {
    if (searchPokemon.length === 0) {
        document.getElementById(`singlePokeName`).innerHTML = allPokemons[j]['name'].charAt(0).toUpperCase() + allPokemons[j]['name'].slice(1);
        document.getElementById(`singlePokeimg`).src = allPokemons[j]['sprites']['other']['official-artwork']['front_default'];
        document.getElementById(`singlePokeNumber`).innerHTML = '# ' + allPokemons[j]['id'];

        document.getElementById(`singleType`).innerHTML = allPokemons[j]['types'][0]['type']['name'].charAt(0).toUpperCase() + allPokemons[j]['types'][0]['type']['name'].slice(1);
        singleTypeColors(j, 'singlePokedex', 'singleType');

        if (allPokemons[j]['types'].length === 2) {
            document.getElementById(`singleTypes`).innerHTML += /*html*/ `<p class="singleType" id="singleType2"></p>`;
            document.getElementById(`singleType2`).innerHTML = allPokemons[j]['types'][1]['type']['name'].charAt(0).toUpperCase() + allPokemons[j]['types'][1]['type']['name'].slice(1);
            singleTypeColors(j, 'singlePokedex', 'singleType2');
        }

        let frontShinyPath = allPokemons[j]['sprites']['other']['official-artwork']['front_shiny'];
        shinyImg.push(frontShinyPath);

        let frontNormalPath = allPokemons[j]['sprites']['other']['official-artwork']['front_default'];
        normalImg.push(frontNormalPath);

        let baseStats = allPokemons[j]['stats'];
        singleBaseStats.push(baseStats);
    } else {
        document.getElementById(`singlePokeName`).innerHTML = searchPokemon[j]['name'].charAt(0).toUpperCase() + searchPokemon[j]['name'].slice(1);
        document.getElementById(`singlePokeimg`).src = searchPokemon[j]['sprites']['other']['official-artwork']['front_default'];
        document.getElementById(`singlePokeNumber`).innerHTML = '# ' + searchPokemon[j]['id'];

        document.getElementById(`singleType`).innerHTML = searchPokemon[j]['types'][0]['type']['name'].charAt(0).toUpperCase() + searchPokemon[j]['types'][0]['type']['name'].slice(1);
        singleTypeColors(j, 'singlePokedex', 'singleType');

        if (searchPokemon[j]['types'].length === 2) {
            document.getElementById(`singleTypes`).innerHTML += /*html*/ `<p class="singleType" id="singleType2"></p>`;
            document.getElementById(`singleType2`).innerHTML = searchPokemon[j]['types'][1]['type']['name'].charAt(0).toUpperCase() + searchPokemon[j]['types'][1]['type']['name'].slice(1);
            singleTypeColors(j, 'singlePokedex', 'singleType2');
        }

        let frontShinyPath = searchPokemon[j]['sprites']['other']['official-artwork']['front_shiny'];
        shinyImg.push(frontShinyPath);

        let frontNormalPath = searchPokemon[j]['sprites']['other']['official-artwork']['front_default'];
        normalImg.push(frontNormalPath);

        let baseStats = searchPokemon[j]['stats'];
        singleBaseStats.push(baseStats);
    }

}

function renderInfoAbout(j) {
    document.getElementById(`height`).innerHTML = allPokemons[j]['height'];
    document.getElementById(`weight`).innerHTML = allPokemons[j]['weight'];
    document.getElementById(`abiOne`).innerHTML = allPokemons[j]['abilities'][0]['ability']['name'];
    document.getElementById(`abiTwo`).innerHTML = allPokemons[j]['abilities'][1]['ability']['name'];

}

function imgChange() {
    let pokemonImg = document.getElementById(`singlePokeimg`);
    let currentSrc = pokemonImg.src;

    if (normalImg.includes(currentSrc)) {
        pokemonImg.src = shinyImg[0];
    } else if (shinyImg.includes(currentSrc)) {
        pokemonImg.src = normalImg[0];
    }
}


function closeCard() {
    document.getElementById('single-card').classList.add("d-none");
    normalImg.splice(0)
    shinyImg.splice(0)
    singleBaseStats.splice(0)
}

function closeLoadingScreen() {
    let loadingScreen = document.getElementById("loding-screen");
    loadingScreen.classList.add("d-none");
}

function openLoadingScreen() {
    let loadingScreen = document.getElementById("loding-screen");
    loadingScreen.classList.remove("d-none");
}

async function loadMorePokemon() {
    openLoadingScreen();
    firstPokemon += lastPokemon;
    let numberOfPokemonToLoad = 30;
    lastPokemon = numberOfPokemonToLoad;

    await pokemonFetchLoadMore(numberOfPokemonToLoad);

}

async function pokemonFetchLoadMore(numberOfPokemonToLoad) {
    for (let i = firstPokemon; i < numberOfPokemonToLoad + firstPokemon; i++) {
        let singleUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let singleResponse = await fetch(singleUrl);
        let singleResponseAsJson = await singleResponse.json();
        allPokemons.push(singleResponseAsJson);

        console.log('Loaded pokemon', currentPokemon);
    }
    document.getElementById("allPokemons").innerHTML = "";
    renderPokemonInfo();
}


function searchNumber() {
    let searchTermNumber = document.getElementById("searchNumber").value
    let loadMoreField = document.getElementById("load-more-field")
    document.getElementById("allPokemons").innerHTML = "";
    searchPokemon = allPokemons.filter((pokemon) => pokemon.id === parseInt(searchTermNumber));
    searchSinglePokemonNumber();
    loadMoreField.classList.add("d-none")
    if (searchTermNumber === "") {
        loadMoreField.classList.remove("d-none")
        renderPokemonInfo();
    }
}
function searchName() {
    let searchTermName = document.getElementById("searchName").value
    let loadMoreField = document.getElementById("load-more-field")
    document.getElementById("allPokemons").innerHTML = "";
    searchPokemon = allPokemons.filter((pokemon) => pokemon.name.startsWith(searchTermName));
    searchSinglePokemonNumber();
    loadMoreField.classList.add("d-none")
    if (searchTermName === "") {
        searchPokemon = [];
        document.getElementById("allPokemons").innerHTML = "";
        renderPokemonInfo();
        loadMoreField.classList.remove("d-none")
    }
}

function searchSinglePokemonNumber() {
    for (let j = 0; j < searchPokemon.length; j++) {
        createCard(j)

        document.getElementById(`pokeName${j}`).innerHTML = searchPokemon[j]['name'].charAt(0).toUpperCase() + searchPokemon[j]['name'].slice(1);
        document.getElementById(`pokeimg${j}`).src = searchPokemon[j]['sprites']['other']['official-artwork']['front_default'];
        document.getElementById(`pokeNumber${j}`).innerHTML = '# ' + searchPokemon[j]['id'];
        document.getElementById(`type${j}`).innerHTML = searchPokemon[j]['types'][0]['type']['name'].charAt(0).toUpperCase() + searchPokemon[j]['types'][0]['type']['name'].slice(1);
        if (searchPokemon[j]['types'].length === 2) {
            document.getElementById(`types${j}`).innerHTML += /*html*/ `<p class="type" id="type2_${j}"></p>`;
            document.getElementById(`type2_${j}`).innerHTML = searchPokemon[j]['types'][1]['type']['name'].charAt(0).toUpperCase() + searchPokemon[j]['types'][1]['type']['name'].slice(1);

        }
        typeColors(j);

    }
    closeLoadingScreen();
}