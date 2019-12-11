# Personal Portfolio

I created a personal portfolio for my DGM 1600 class

## Description

I created a Starwars Page and a Pokemon Card Page and here are some examples of the code that I used.

## Css Example - styles/pokemon.css
```
     .card {
    height: 100%;
    transition: transform 2s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative; 
    line-height: 6px;
    text-align: center;
    font-size: 2rem; 
    background: rgb(35, 104, 168);
    width: 180px;
    border-style: solid;
    border-color: rgb(255, 232, 23);
    border-width: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

```
## Basic Java Script Example - js/pokemon.js - I created variables!!!
```
   let Characters = people.filter(CharacterPeople =>["gender"] == "gender")
console.log (Characters)

let Male = people.filter(MalePeople => MalePeople["gender"] == "male")
console.log (Male)

let Female = people.filter(FemalePeople => FemalePeople["gender"] == "female")
console.log (Female)

let na = people.filter(naPeople => naPeople["gender"] == "n/a","none")
console.log (na)

```

## Basic Data Structures Example - js/pokemon.js - I was able to slice the beginning of an array off and replace it with an Upper Case letter. 
```
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`

```
## Object Oriented Programming Example - js/pokemon.js - Used constructor to build out pokemon card. 
```
  class Pokemon {
    constructor(id, name, stats) {
        this.id = id
        this.name = name
        this.base_stat = stats
        
    }
}

```
## ES6 Example - js/starwars.js - I used arrow functions to make the buttons work.  
```
   let CharBtn = document.getElementById("gender").addEventListener('click', () => {
    cardMaker (Characters)
})

let maleBtn = document.getElementById("male").addEventListener('click', () => {
    cardMaker(Male)
})

let femaleBtn = document.getElementById("female").addEventListener('click', () => {
    cardMaker(Female)
})

```

