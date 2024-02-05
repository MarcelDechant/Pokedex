function createCard(j) {
    document.getElementById('allPokemons').innerHTML +=/*html*/ ` 
    <div onclick="singlePokemon(${j})" class="pokecard">
        <div class="pokedex" id="pokedex${j}">
            <div class="poke-num-name">
                <h2 class="nMargin" id="pokeNumber${j}">#</h2>
                <h1 class="nMargin" id="pokeName${j}">Name</h1>
            </div>
            <div class="typeAndImage">
                <div id="types${j}">
                <p class="type" id="type${j}"></p>
                </div>
                <img class="pokeimg" id="pokeimg${j}">
                <img class="PokeballTranzparent" src="img/Pokeball-tranzparent.png" alt="">
            </div>
        </div>
    </div>`;
}


function createsingleCard(j) {
    const singleCardHTML = /*html*/ `
        <div class="singlePokecard">
            <div class="singlePokedex" id="singlePokedex">
                <div class="poke-num-name">
                    <div class="num-close">
                        <h2 class="nMargin" id="singlePokeNumber">#</h2>
                        <div onclick="closeCard()" class="closeX">X</div>   
                    </div>
                    <h1 class="nMargin" id="singlePokeName">Name</h1>
                    
                </div>
                <div class="singleTypeAndImage">
                    <div onclick="previousPokemon(${j})" class="leftpart">
                        <img class="leftarrow" src="img/linker-pfeil.png" alt="">
                    </div>
                    <div id="singleTypes">
                        <p class="singleType" id="singleType"></p>
                    </div>
                    <img class="singlePokeimg" id="singlePokeimg">
                    <img class="PokeballTranzparent" src="img/Pokeball-tranzparent.png" alt="">
                    <div onclick="nextPokemon(${j})" class="rightpart">
                        <img class="rightarrow" src="img/rechter-pfeil.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pokeInfo">
                <div class="infoMenue">
                    <div onclick="createSingleAbout(${j})" class="cu-pointer">About</div>
                    <div onclick="createSingleChart()" class="cu-pointer">Base Stats</div>  
                </div>
                <div class="data" id="data">
                    <table>
                        <tr>
                            <td>Height:</td>
                            <td id="height">00</td>
                        </tr>
                        <tr>
                            <td>Weight:</td>
                            <td id="weight">00</td>
                        </tr>
                        <tr>
                            <td>Shiny:</td>
                            <td>
                                <img onclick="imgChange()" src="img/shining.png" alt="">
                            </td>
                        </tr>
                        <tr>
                            <td>Abilities:</td>
                            <td>
                                <p id="abiOne"></p>
                                <p id="abiTwo"></p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;

    return singleCardHTML;
}

function createSingleAbout(j) {
    singlePokemon(j)
}


function createSingleChart() {

    const labels = [
        'HP',
        'Attack',
        'Defense',
        'Sp.Atk',
        'Sp.Def',
        'Speed'
    ];
    let hp = singleBaseStats[0][0]['base_stat']
    let attack = singleBaseStats[0][1]['base_stat']
    let defense = singleBaseStats[0][2]['base_stat']
    let specialattack = singleBaseStats[0][3]['base_stat']
    let specialdefense = singleBaseStats[0][4]['base_stat']
    let speed = singleBaseStats[0][5]['base_stat']

    const data = {
        labels: labels,
        datasets: [{
            label: 'Stats',
            data: [hp, attack, defense, specialattack, specialdefense, speed],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            scale: {
                r: {
                    max: 120,
                    min: 0,
                    // ticks: {
                    //     stepSitze: 30
                    // },
                },
            },
            elements: {
                line: {
                    borderWidth: 1
                }
            }
        },
    };

    document.getElementById('data').innerHTML = `
            <div class="data" id="chartData">
                <canvas id="myRadarChart"></canvas>
            </div>
        `;

    const ctx = document.getElementById('myRadarChart').getContext('2d');
    new Chart(ctx, config);
}

