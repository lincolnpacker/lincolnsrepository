import{people} from '../Data/people.js'
import {getLastNumber, removeChildren} from '../scripts/utils.js'


const gallery = document.querySelector('.gallery')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const otherCharacters = people.filter(person => {
    if(person.gender === hermaphrodite ||
       person.gender ==="n/a")
        {
        return person
    }
})

maleButton.addEventListener("click", event => {
    populateDOM(people.filter(person => person.gender === "male"))
})

femaleButton.addEventListener("click", event => {
    populateDOM(people.filter(person => person.gender === "female"))
})

otherButton.addEventListener('click', event => {
    populateDOM(otherCharacters)
})


//url: "https://swapi.co/api/people/10/"


function populateDOM(characters) {
    removeChildren(gallery)
    characters.forEach(person => {
        //need to extract the number from the person.url Property
    let lastNum = getLastNumber(person.url)
    let charNum = document.createElement("a")
    anchorWrap.href = '#'

    let imageItem = document.createElement("img")
    imageItem.src = 'https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'

    imageItem.addEventListener('error', (event) => {
    //console.log(${event.type}: loadingimage\n')
    //console.log(event)
    imageItem.hidden=true
    //
})

//add some way to handle user clicks on the image

imageItem.addEventListener("click", (event) => {
    console.log(event)
})
anchorWrap.appendChild(imageItem)
gellery.appendChild(anchorWrap)
})


//May need to remove all counter++