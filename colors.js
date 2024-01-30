function setElementColorsBasedOnType(j, containerElement, typeElement, type2Element) {
    const typeColorClasses = {
        'fire': ['bgColorFire1', 'bgColorFire2'],
        'grass': ['bgColorGrass1', 'bgColorGrass2'],
        'water': ['bgColorWater1', 'bgColorWater2'],
        'bug': ['bgColorBug1', 'bgColorBug2'],
        'normal': ['bgColorNormal1', 'bgColorNormal2'],
        'electric': ['bgColorElectric1', 'bgColorElectric2'],
        'poison': ['bgColorPoison1', 'bgColorPoison2'],
        'ground': ['bgColorGround1', 'bgColorGround2'],
        'dragon': ['bgColorDragon1', 'bgColorDragon2'],
        'ice': ['bgColorIce1', 'bgColorIce2'],
        'rock': ['bgColorRock1', 'bgColorRock2'],
        'steel': ['bgColorSteel1', 'bgColorSteel2'],
        'flying':['bgColorFlying1','bgColorFlying2']
    };

    for (let i = 0; i < allPokemons[j]['types'].length; i++) {
        const pokemonType = allPokemons[j]['types'][i]['type']['name'];
        if (typeColorClasses[pokemonType]) {
            const [class1, class2] = typeColorClasses[pokemonType];
            if (i === 0) {
                containerElement.classList.add(class1);
                typeElement.classList.add(class2);
            } else if (i === 1 && type2Element) {
                type2Element.classList.add(class1, class2);
            }
        }
    }
}

function typeColors(j) {
    const pokedexElement = document.getElementById(`pokedex${j}`);
    const typeElement = document.getElementById(`type${j}`);
    const type2Element = document.getElementById(`type2_${j}`);
    setElementColorsBasedOnType(j, pokedexElement, typeElement, type2Element);
}

function singleTypeColors(j) {
    const singlePokedexElement = document.getElementById(`singlePokedex`);
    const singleTypeElement = document.getElementById(`singleType`);
    const singleType2Element = document.getElementById(`singleType2`);
    setElementColorsBasedOnType(j, singlePokedexElement, singleTypeElement, singleType2Element);
}