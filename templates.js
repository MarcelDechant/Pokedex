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
                    <div class="cu-pointer">About</div>
                    <div class="cu-pointer">Base Stats</div>  
                </div>
                <div class="data" id="data">
                    <div class="flexCenter">
                        <p>Height:</p> <p id="height">00</p>
                    </div>
                    <div class="flexCenter">
                        <p>Weight:</p> <p id="weight">00</p>
                    </div>
                    <div class="flexCenter">
                        <p>Shiny:</p> <img onclick="imgChange()" src="img/shining.png" alt="">

                    </div>
                    <div class="flexCenter">
                        <p>Abilitis:</p>
                        <div> <p id="abiOne"></p><p id="abiTwo"></p></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}