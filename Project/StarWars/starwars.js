import{people} from '../StarWars/Data/people.js'
import {films} from '../StarWars/Data/films.js'
import {starships} from '../StarWars/Data/starships.js'

const greetingDiv = document.querySelector('.greeting')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const otherCharacters = people.filter(person => {
    if(peroson.gender === hermaphrodite ||
        person.gender ==="n/a")
        {
        return person
    }
})




maleButton.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "male"))
})

femaleButton.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "female"))
})

otherButton.addEventListener('click', event => {
    populateDOM(otherCharacters)
})

function getCharNumber(url) {
let end = url.lastIndexOf('/')
letstart= end - 2
console.log(`start is: ${url.charAt(start)} and end is: ${url.charAt(end)}`)
console.log(url.slice(start,end))
if(url.charAt(start) === '/') {
    start++
}
}

//getCharNumber("https://swapi.co/api/people/1/")


function populate DOM(maleCharacters) {
    maleCharacters.forEach(person =>
        //need to extract the number from the person.url Property
    letcharNum = getCharNumber(person.url)
let anchorWrap = document.createElement("a")
anchorWrap.href = '#'

let imageItem = document.createElement("img")
imageItem.src = 'https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'

imageItem.addEventListener('error', (event) => {
    //console.log(${event.type}: loadingimage\n')
    //console.log(event)
    imageItem.hidden=true
    //
    //
});

//add some way to handle user clicks on the image

imageItem.addEventListener("click", (event) => {
    console.log(event)
})
anchorWrap.appendChild(imageItem)
greetingDiv.appendChild(anchorWrap)
counter++
})
maleButton.addEventListener("click"= , (event) => {
    console.log(event)
})

anchorWrap.appendChild(imageItem)greetingDiv.appendChild(anchorWrap)
counter++
})
//May need to remove all counter++