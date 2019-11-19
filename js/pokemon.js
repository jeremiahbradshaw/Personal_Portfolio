async function getAPIData(url){
    try { 
    const response = await fetch(url)
    const data = await response.json()
    return data 
    } catch (error) { 
      console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
console.log(theData)
 for (const pokemon of data.results) {
     getAPIData(pokemon.url)
     .then(pokedata => {
         console.log(pokedata)
     })
 }
      

})
let mainArea = document.querySelector('main')

    function populateDOM(single_pokemon) {
    pokeArray.forEach (pokemon => {
    console.log(pokemon)
    let pokeDiv = document.createElement('div')
    let name = document.createElement ('h3')
    let pic = document.createElemnt ('img')
    
    let pokeNum = getPokeNumber(single_pokemon.url)
   
    name.textContent = single_pokemon.name
    
    pic.src = `../images/${single_pokemon.id}.png`

    pokeDiv.appendChild (name)
    pokeDiv.appendChild(pic)

    mainArea.appendChild(pokeDiv)


    }
   )}

   function getPokeNumber(id)
{ if (id < 10) return `00${id}`
 if (id > 9 && id < 100){ 
    return `0${id}`
} else return id 
}