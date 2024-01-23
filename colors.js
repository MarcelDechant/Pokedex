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