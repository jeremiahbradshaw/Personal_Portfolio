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
        console.log(data)
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokedata => {
                    // console.log(pokedata)
                    populateDOM(pokedata)
                })
        }

// let userInput = document.getElementById('input')

// const theData = getAPIData(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
//     .then(data => {
//         console.log(theData)
//         for (const pokemon of data.results) {
//             getAPIData(pokemon.url)
//                 .then(pokedata => {
//                     console.log(pokedata)
//                     populateDOM(pokedata)
//                 })
//         }


        document.querySelector('#pokeButton').addEventListener('click', () => {
            populateDOM()
        })


    })
    
    
    let mainArea = document.querySelector('main')

    function populateDOM(single_pokemon) {
    let pokeScene= document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    
    
    pokeCard.addEventListener( 'click', function() {
        pokeCard.classList.toggle('is-flipped');
        });
    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class','scene')
    pokeCard.setAttribute('class','card')
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    
    
    pokeDiv.setAttribute('class','charDivs')
    pic.setAttribute('class','picDivs')
    
    function fillCardFront(pokeFront, data){
        pokeFront.setAttribute('class', 'card__face card__face--front')
        let name = document.createElement('p')
        let pic = document.createElement('img')
        pic.setAttribute('class', 'picDivs')
        let pokeNum = getPokeNumber(data.id)
        pic.src = `../assets/images/${pokeNum}.png`
        pokeFront.appendChild(pic)
        // console.log(name)
        pokeFront.appendChild(name)
    }

    function fillCardBack(pokeBack, data){
        pokeBack.setAttribute('class', 'card_face card_face--')
        let pokeOrder = document.createElement('p')
        let pokeHP = document.createElement('h5')
        pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
        pokeHP.textContent = data.stats[5].base_stat
        pokeBack.appendChild(pokeOrder)
        console.log(pokeHP)
        pokeBack.appendChild(pokeHP)
    }


    let pokeDiv = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')
    let pokeNum = getPokeNumber(single_pokemon.url)
    name.textContent = single_pokemon.name
    let picNum = getPokeNumber(single_pokemon.id)
    // console.log(picNum)
    pokeDiv.appendChild(name)
    pokeDiv.appendChild(pic)
    mainArea.appendChild(pokeDiv)
    


    }


function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}


