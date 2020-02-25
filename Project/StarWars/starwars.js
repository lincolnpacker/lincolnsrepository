import{films} from '../StarWars/Data/people.js'
import {people} from '../StarWars/Data/films.js'



const greetingDiv = document.querySelector('.greeting')

const castList = document.createElement("ul")

const listItem1 = document.createElement.("li")
listItem1.textContent= people[0]
greetingDiv.textContent = 'I just inserted text into a DOM element using my mad JavaScript SKills!!'
