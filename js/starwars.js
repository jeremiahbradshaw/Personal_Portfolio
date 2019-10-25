import { people } from '/assets/people.js'




let mainHeader = document.querySelector('header')
let mainArea = document.querySelector("main")

const peopledata = people
const button = document.querySelector('button');
const allDivs = mainArea.querySelectorAll('div')
     

    let maleButton = document.createElement ('button')
     maleButton.textContent = "Male Characters"
     maleButton.addEventListener('click', () => {
     femaleCharacters.forEach(elt => {
     let matchedDiv = allDivs.filter(element => {
         return element.firstChild.textContent === elt.name
     })
     matchedDiv[0].setAttribute("style","display: none;")
     })
    })

     let femaleButton = document.createElement ('button')
     femaleButton.textContent = "Female Characters"
     femaleButton.addEventListener('click', event => {
     maleCharacters.forEach(elt => {
     let matchedDiv = allDivs.filter(element =>{
     return element.firstChild.textContent === elt.name
     })
     matchedDiv[0].setAttribute("style","display: none;")
     })
    })

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)

peopledata.forEach((person) => { 
    let personDiv = document.createElement ('div')
    let name = document.createElement ('h3')
    let gender = document.createElement('p')
    let pic = document.createElement ('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    //pic.setAttribute('class','picDivs')

    let charNum = getCharNumber(person.url)

name.textContent = person.name
gender.textContent = person.gender
pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`


  
 

   
mainArea.appendChild(personDiv)  
})

function getCharNumber(charURL){
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }

}

   // let maleButton = document.createElement ('button')
   // maleButton.textContent = 'maleCharacters'
    //let femaleButton = document.createElement ('button')
    //femaleButton.textContent = 'femaleCharacters'


const maleCharacters = people.filter(person => person.gender === "male")

const femaleCharacters = people.filter(person => person.gender === "female")

console.log(maleCharacters)
console.log(femaleCharacters)

