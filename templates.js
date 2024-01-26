function createCard(j) {
    document.getElementById('allPokemons').innerHTML +=/*html*/ ` 
    <div onclick="singlePokemon(${j})" class="pokecard">
        <div class="pokedex" id="pokedex${j}">
            <div class="poke-num-name">
                <h2 class="nMargin" id="pokeNumber${j}">#</h2>
                <h1 class="nMargin" id="pokeName${j}">Name</h1>
            </div>
            <div class="typeAndImage">
                <p class="type" id="type${j}"></p>
                <img class="pokeimg" id="pokeimg${j}">
                <img class="PokeballTranzparent" src="img/Pokeball-tranzparent.png" alt="">
            </div>
        </div>
    </div>`
}

function createsingleCard(){
    return /*html*/ `
        <div class="singlePokecard">
            <div class="singlePokedex" id="singlePokedex">
                <div class="poke-num-name">
                    <h2 class="nMargin" id="singlePokeNumber">#</h2>
                    <h1 class="nMargin" id="singlePokeName">Name</h1>
                </div>
                <div class="singleTypeAndImage">
                    <p class="singleType" id="singleType"></p>
                    <img class="singlePokeimg" id="singlePokeimg">
                    <img class="PokeballTranzparent" src="img/Pokeball-tranzparent.png" alt="">
                </div>
            </div>
            <div class="pokeInfo">
                <div class="infoMenue">
                    <div>About</div>
                    <div>Base Stats</div>
                    <div>Evolution</div>
                    <div>Moves</div>
                </div>
                <div class="data" id="data"></div>
            </div>
        </div>
    `;
}