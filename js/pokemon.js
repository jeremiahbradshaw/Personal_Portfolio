class Pokemon{
constructor(id,name,stats){
    this.id = id
    this.name = name
    this.base_stat = stats
}}

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(data => {
        console.log(theData)
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokedata => {
                    console.log(pokedata)
                    populateDOM(pokedata)
                })
        }


        document.querySelector('#pokeButton').addEventListener('click', () => {
            populateDOM()
        })


    })
let mainArea = document.querySelector('main')

    function populateDOM(single_pokemon) {
    // let pokeCard = document.createElement('div')
    // let pokeFront = document.createElement('div')
    // let pokeBack = document.createElement('div')
    
    // fillCardFront(pokeFront, single_pokemon)
    // fillCardBack(pokeBack, single_pokemon)

    // pokeScene.setAttribute('class','scene')
    // pokeCard.setAttribute('class','card')
    // pokeCard.appendChild(pokeFront)
    // pokeCard.appendChild(pokeBack)
    // pokeScene.appendChild(pokeCard)
    
    // pokeDiv.setAttribute('class','charDivs')
    // pic.setAttribute('class','picDivs')

   

    let pokeDiv = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    let pokeNum = getPokeNumber(single_pokemon.url)

    name.textContent = single_pokemon.name

    let picNum = getPokeNumber(single_pokemon.id)

    pic.src = `../images/${picNum}.png`
    console.log(picNum)
     
    pokeDiv.appendChild(name)
    pokeDiv.appendChild(pic)
    mainArea.appendChild(pokeDiv)
    


}
//    )
// }

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});