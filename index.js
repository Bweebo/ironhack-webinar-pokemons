let counter = 1;

function render() {
    const pokemonContainer = document.getElementById('pokemon');

    pokemonContainer.innerHTML = `<img class="pokemonImage" src="https://tinyurl.com/ironhack-pokemons/${counter}.svg" >`;
}

let previous = document.getElementById('previous');
previous.onclick = function() {
    if (counter > 1) {
        counter--;
        console.log(counter);
        render();
    }
    
}

let next = document.getElementById('next');
next.onclick = function() {
    if (counter < 650) {
    counter++;
    console.log(counter);
    render();
    }
    
}
render();