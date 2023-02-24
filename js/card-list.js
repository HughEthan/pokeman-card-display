let firstCard = document.getElementById('first-card')
let isLoaded = false;
let pokemonCardsDiv = document.getElementById('pokeman-cards')
let table1 = document.getElementById('table-1')
let table2 = document.getElementById('table-2')
let table3 = document.getElementById('table-3')

let cards = [];
let apiCards = [];
let pokemanCard = {};

async function fetchPokemanCards() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/'

    try {
        isLoaded = true;
        const response = await fetch(apiURL);
        apiCards = await response.json();
        console.log(apiCards.results)
        cards = apiCards.results
        console.log(cards)
        isLoaded = true;
        displayPokemanCards();
        displayEachCard(cards);

    } catch (error) {
        alert(error);
        console.log("ERROR mannnnnnnnnn")
    }
}


function displayEachCard(a) {
    a.forEach( (pokeman) => {
        fetchEachCard(pokeman.url)
    })
}
async function fetchEachCard(url) {
    try {
        const response = await fetch(url);
        pokemanCard = await response.json();
        console.log(pokemanCard.id);
    } catch (error) {
        console.log("error")
    }
}


function setFirstCard() {
    firstCard.innerText = 'First card baby'
}

function displayPokemanCards() {

    cards.forEach( (card, index) => {
        const li = document.createElement('h1');
        li.innerText = card.name;
        li.setAttribute('class', 'cards')
    
        if (index % 3 ==0) {
        table1.appendChild(li)
        } else if (index % 2 == 0) {
            table2.appendChild(li)
        } else {
            table3.appendChild(li)
        }



    })
}

console.log(cards)

document.addEventListener('DOMContentLoaded', () => {
    fetchPokemanCards();
    if (isLoaded) {
        
        
    }
})
