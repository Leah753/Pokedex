import data from './a1-json/pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



 let html = "";
for (let i = 0; i < data.pokemon.length; i++) {
    let current_pokemon = i;
    // html += `<p>${data[i].name}: ${data[i].value}</p>`;
    html += `
    <div class="pokemon-card">
    <h1>${data.pokemon[i].num}</h1>
    <h1>${data.pokemon[i].name}</h1> 
    <img src="${data.pokemon[i].img}">
    <h2>Type:</h2>
    <ul>
      <li>${data.pokemon[i].type[0]}</li>

      `
      //check if pokemon has a second type
    if (data.pokemon[i].type[1] !== undefined){
        html += `
        <li>${data.pokemon[i].type[1]}</li>
        `
    }

    html += `
    </ul>
    <h2>Weaknesses:</h2>
    <ul>
    `
    for (let i = 0; i < data.pokemon[current_pokemon].weaknesses.length; i++) {
         html += `
         <li>${data.pokemon[current_pokemon].weaknesses[i]}</li>
         `
    };

html += `
      
    </ul>
    <p>Height: ${data.pokemon[i].height}</p>
    <p>Weight: ${data.pokemon[i].weight}</p>
    <p>Candy :${data.pokemon[i].candy}</p>
    <p>Candy count: ${data.pokemon[i].candy_count}</p>
    <p>Egg hatch distance: ${data.pokemon[i].egg}</p>
    <p>Spawn chance: ${data.pokemon[i].spawn_chance}</p>
    <p>Average spawn: ${data.pokemon[i].avg_spawns}</p>
    <p>Spawn time: ${data.pokemon[i].spawn_time}/p>
    <p>Multipliers: ${data.pokemon[i].multipliers}</p>


    <h2>Evolution line</h2>
    `
    
    if (data.pokemon[i].prev_evolution !== undefined){
        html +=`
        <p>Previous Evolution: ${data.pokemon[i].prev_evolution[0].num} - ${data.pokemon[i].prev_evolution[0].name}</p>`
    }
    
    if (data.pokemon[i].next_evolution !== undefined){
        html +=`
        <p>Next Evolution: ${data.pokemon[i].next_evolution[0].num} - ${data.pokemon[i].next_evolution[0].name}</p>`
    }

    html +=`
    </div>
    `
    
}
output.innerHTML = html;


//TODO aka algorithm :
//create html that you want to use for how the data will be displayed. Im thinking cards
//put html into for loop and replace hard coded data with info for each pokemon
//
