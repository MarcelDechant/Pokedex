function typeColors(j){
    const pokedexElement = document.getElementById(`pokedex${j}`);
    const typeElement = document.getElementById(`type${j}`);

    if (allPokemons[j]['types'][0]['type']['name']=== 'fire') {
        pokedexElement.classList.add("bgColorFire1")
        typeElement.classList.add("bgColorFire2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'grass') {
        pokedexElement.classList.add("bgColorGrass1")
        typeElement.classList.add("bgColorGrass2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'water') {
        pokedexElement.classList.add("bgColorWater1")
        typeElement.classList.add("bgColorWater2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'bug') {
        pokedexElement.classList.add("bgColorBug1")
        typeElement.classList.add("bgColorBug2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'normal') {
        pokedexElement.classList.add("bgColorNormal1")
        typeElement.classList.add("bgColorNormal2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'electric') {
        pokedexElement.classList.add("bgColorElectric1")
        typeElement.classList.add("bgColorElectric2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'poison') {
        pokedexElement.classList.add("bgColorPoison1")
        typeElement.classList.add("bgColorPoison2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'ground') {
        pokedexElement.classList.add("bgColorGround1")
        typeElement.classList.add("bgColorGround2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'dragon') {
        pokedexElement.classList.add("bgColorDragon1")
        typeElement.classList.add("bgColorDragon2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'ice') {
        pokedexElement.classList.add("bgColorIce1")
        typeElement.classList.add("bgColorIce2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'rock') {
        pokedexElement.classList.add("bgColorRock1")
        typeElement.classList.add("bgColorRock2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'steel') {
        pokedexElement.classList.add("bgColorSteel1")
        typeElement.classList.add("bgColorSteel2")
    } else if (allPokemons[j]['types'][0]['type']['name']=== 'dragon') {
        pokedexElement.classList.add("bgColorDragon1")
        typeElement.classList.add("bgColorDragon2")
    }
}

function singleTypeColors(j) {
    const singlePokedexElement = document.getElementById(`singlePokedex`);
    const singleTypeElement = document.getElementById(`singleType`);

    if (allPokemons[j]['types'][0]['type']['name'] === 'fire') {
        singlePokedexElement.classList.add("bgColorFire1");
        singleTypeElement.classList.add("bgColorFire2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'grass') {
        singlePokedexElement.classList.add("bgColorGrass1");
        singleTypeElement.classList.add("bgColorGrass2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'water') {
        singlePokedexElement.classList.add("bgColorWater1");
        singleTypeElement.classList.add("bgColorWater2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'bug') {
        singlePokedexElement.classList.add("bgColorBug1");
        singleTypeElement.classList.add("bgColorBug2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'normal') {
        singlePokedexElement.classList.add("bgColorNormal1");
        singleTypeElement.classList.add("bgColorNormal2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'electric') {
        singlePokedexElement.classList.add("bgColorElectric1");
        singleTypeElement.classList.add("bgColorElectric2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'poison') {
        singlePokedexElement.classList.add("bgColorPoison1");
        singleTypeElement.classList.add("bgColorPoison2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'ground') {
        singlePokedexElement.classList.add("bgColorGround1");
        singleTypeElement.classList.add("bgColorGround2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'dragon') {
        singlePokedexElement.classList.add("bgColorDragon1");
        singleTypeElement.classList.add("bgColorDragon2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'ice') {
        singlePokedexElement.classList.add("bgColorIce1");
        singleTypeElement.classList.add("bgColorIce2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'rock') {
        singlePokedexElement.classList.add("bgColorRock1");
        singleTypeElement.classList.add("bgColorRock2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'steel') {
        singlePokedexElement.classList.add("bgColorSteel1");
        singleTypeElement.classList.add("bgColorSteel2");
    } else if (allPokemons[j]['types'][0]['type']['name'] === 'dragon') {
        singlePokedexElement.classList.add("bgColorDragon1");
        singleTypeElement.classList.add("bgColorDragon2");
    }
}