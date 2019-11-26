import { people } from '/assets/people.js'
const peopledata = people

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector("#starwars")

let Characters = people.filter(CharacterPeople =>["gender"] == "gender")
console.log (Characters)

let Male = people.filter(MalePeople => MalePeople["gender"] == "male")
console.log (Male)

let Female = people.filter(FemalePeople => FemalePeople["gender"] == "female")
console.log (Female)

let na = people.filter(naPeople => naPeople["gender"] == "n/a","none")
console.log (na)

let CharBtn = document.getElementById("gender").addEventListener('click', () => {
    cardMaker (Characters)
})

let maleBtn = document.getElementById("male").addEventListener('click', () => {
    cardMaker(Male)
})

let femaleBtn = document.getElementById("female").addEventListener('click', () => {
    cardMaker(Female)
})

let naBtn = document.getElementById("n/a","hermaphrodite", "none").addEventListener('click', () => {
    cardMaker(na)
})

const allDivs = mainArea.querySelectorAll('div')
 
function cardMaker(arr){
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
        arr.forEach((person) => { 
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

        }   

     
    
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

const naCharacters = people.filter(person => person.gender === "n/a")

const maleCharacters = people.filter(person => person.gender === "male")

const femaleCharacters = people.filter(person => person.gender === "female")



