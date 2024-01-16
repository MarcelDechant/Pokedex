function createCard() {
    document.getElementById('allPokemons').innerHTML += ` 
    <div class="pokecard">
        <div id="pokedex">
            <div class="poke-num-name">
                <h2 id="pokeNumber">#</h2>
                <h1 id="pokeName">Name</h1>
            </div>
            <div class="typeAndImage">
                <div id="type"></div>
                <img id="pokeimg">
                <img class="PokeballTranzparent" src="img/Pokeball-tranzparent.png" alt="">
            </div>
        </div>
    </div>`
}