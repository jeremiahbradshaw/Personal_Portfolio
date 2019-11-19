import { people } from '/assets/people.js'
const peopledata = people

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector("main")

function sortAssets(){
    alert(1)
    }


const button = document.querySelector('button');
const allDivs = mainArea.querySelectorAll('div')
button.onclick = sortAssets
mainArea.appendChild(button)     
   
peopledata.forEach((person) => { 
    let personDiv = document.createElement ('div')
    let name = document.createElement ('h3')
    let gender = document.createElement('p')
    let pic = document.createElement ('img')
    
    

    
    
    
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

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

