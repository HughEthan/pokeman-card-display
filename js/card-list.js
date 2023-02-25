const table1 = document.getElementById('table-1')
const table2 = document.getElementById('table-2')
const table3 = document.getElementById('table-3')

async function fetchPokemonNames() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/'

    try {
        const response = await fetch(apiURL);
        let apiCards = await response.json();
        let pokemonCards = apiCards.results
        displayPokeman(pokemonCards)
    } catch (error) {
        alert(error);
        console.log("ERROR mannnnnnnnnn")
    }
  }

  function displayPokeman(a) {
    counter = 0;
    a.forEach( (value) => {
       getMoreCardDetails(value, counter)
       counter++;
    })
}

async function getMoreCardDetails(value, counter) {
    let card = {};
    try {
     const response = await fetch(value.url);
     card = await response.json();
     const li = document.createElement('div')
     console.log(card.sprites.back_default)
         const link = document.createElement('a')
         link.href = "pokemoncard.html"
         const header = document.createElement('h1')
         header.innerText = card.name
         const sprite = document.createElement('img')
         sprite.setAttribute('class', 'pokemon-sprite')
         sprite.src = card.sprites.back_default
         li.appendChild(sprite)
         li.setAttribute('class', 'pokemon-name')
         li.appendChild(header)
         li.appendChild(link)
         li.addEventListener('click', (event) => {
             console.log(event.target)
         })
         if (counter % 3 ==0 ) {
            table1.append(li)
         } else if (counter % 2 == 0) {
            table2.append(li)
         } else {
            table3.appendChild(li)
         }


 } catch (error) {
     alert(error);
     console.log("ERROR")
 }
}



fetchPokemonNames();

document.addEventListener('DOMContentLoaded', () => {
    
})
