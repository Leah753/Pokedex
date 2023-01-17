import data from './a1-json/pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



 let html = "";
 let total_spawns = 0;
 let total_spawn_chance = 0;
 for (let i = 0; i < data.pokemon.length; i++) {
    //adds up avg_spawns for all pokemon
    total_spawns += data.pokemon[i].avg_spawns;
    //adds up spawn_chance for all pokemon
    total_spawn_chance += data.pokemon[i].spawn_chance;
 }
//calculates average spawns for all pokemon
let average_spawns_all = total_spawns / (data.pokemon.length);
//calculates average spawn chance for all pokemon
let average_spawn_chance = total_spawn_chance / (data.pokemon.length);

html += `<h2>Statistics:</h2>
<p><strong>Average spawns all pokemon:</strong> ${average_spawns_all}</p>
<p><strong>Average spawns chance all pokemon:</strong> ${average_spawn_chance}</p>
`


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
    //loop through weaknesses array for current pokemon and add weaknesses for pokemon
    for (let i = 0; i < data.pokemon[current_pokemon].weaknesses.length; i++) {
         html += `
         <li>${data.pokemon[current_pokemon].weaknesses[i]}</li>
         `
    };

html += `
      
    </ul>
    <p><strong>Height:</strong> ${data.pokemon[i].height}</p>
    <p><strong>Weight:</strong> ${data.pokemon[i].weight}</p>
    <p><strong>Candy:</strong> ${data.pokemon[i].candy}</p>
    <p><strong>Candy count:</strong> ${data.pokemon[i].candy_count}</p>
    <p><strong>Egg hatch distance:</strong> ${data.pokemon[i].egg}</p>
    <p><strong>Spawn chance:</strong> ${data.pokemon[i].spawn_chance}</p>
    <p><strong>Average spawn:</strong> ${data.pokemon[i].avg_spawns}</p>
    <p><strong>Spawn time:</strong> ${data.pokemon[i].spawn_time}</p>
    <p><strong>Multipliers:</strong> ${data.pokemon[i].multipliers}</p>


    <h2>Evolution line</h2>
    <h3>Previous Evolutions:</h3>
    `
    //check if there are NOT previous evolutions for pokemon
    if (data.pokemon[i].prev_evolution === undefined){
        html +=`
        <p>None</p>
        `
    }
    //check if there are previous evolutions for pokemon
    if (data.pokemon[i].prev_evolution !== undefined){
        html +=`
        <ul>
        `
        //loops through prev_evolutions and prints them out
        for (let i = 0; i < data.pokemon[current_pokemon].prev_evolution.length; i++) {
            html +=`
             <li>${data.pokemon[current_pokemon].prev_evolution[i].num} - ${data.pokemon[current_pokemon].prev_evolution[i].name}</li>`
        }
        html +=`
        </ul>
        `
    }

    html +=`
        <h3>Next Evolutions</h3>
        `
    //check if there are NOT net evolutions for pokemon
    if (data.pokemon[i].next_evolution === undefined){
        html +=`
        <p>None</p>`
    }

    //check if there are next evolutions for pokemon
    if (data.pokemon[i].next_evolution !== undefined){
        html +=`
        <ul>
        `
        //loops through next_evolutions and prints them out
        for (let i = 0; i < data.pokemon[current_pokemon].next_evolution.length; i++){
            html +=`
            <li>${data.pokemon[current_pokemon].next_evolution[i].num} - ${data.pokemon[current_pokemon].next_evolution[i].name}</li>`
        }
        html +=`
        </ul>
        `
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
