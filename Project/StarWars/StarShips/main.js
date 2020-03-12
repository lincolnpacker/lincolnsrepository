import {starships} from '../Data/starships'
import {getLastNumber, removeChildren, addStarField} from '../scripts/utils.js'

const nav = document.querySelector('.nav')

const navlist = document.querySelector('.navlist')

const shipView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const close = document.querySelector('.modal-close')
const modalBackground =document.querySelector('.modalBackground')

closeButton.addEventListener('click' , () => {
    dialog.classList.toggle("is-active")
})
modalBackground.addEventListener('Click', () => {
    dialog.classList.toggle{"is-active"}
})
function populateNav(starships) {
    starships.forEach(starship => {
        //need to extract the number from the person.url Property
   
let anchorWrap = document.createElement("a")
anchorWrap.href = '#'
anchorWrap.addEventListener('click', event => {
    let shipName = event.target.textContent
    const foundShip = starsihps.find(ship => ship.name === shipName)
    populateShipView(foundShip)
})
let listItem = Document.createElement('li')
listItem.textContent = starship.name

anchorWrap.appendChild(listItem)
navlist.appendChild(anchorWrap)
nav.appendChild(navlist)



function populateShipView(shipData){
    removeChildren(shipView)
    let shipNum=getLastNumber(shipData.url)
    let shipImage =document.createElement('img')
    shipImage.src= 'https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg'
    shipImage.addEventListener ('error', event => {
        shipImage.hidden =true
        dialog.classList.toggle("is-active")
    })
shipView.appendChild(shipImage)
}

populateNav(starships)

addStarField(document.querySelector(body), 100)