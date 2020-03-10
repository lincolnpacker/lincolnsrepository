import {starships} from '../Data/starships'
import {getLastNumber, removeChildren} from '../scripts/utils'

const nav = document.querySelector('.nav')

const navlist = document.querySelector('.navlist')

const shipView = document.querySelector('.shipView')

const 

function populateNav(starships) {
    starships.forEach(starship => {
        //need to extract the number from the person.url Property
   
let anchorWrap = document.createElement("a")
anchorWrap.href = '#'
anchorWrap.addEventListener('click', event => {
    let shipName = event.target.textContent
    const foundShip = starsihps.find(ship=> ship.shipname === shipName)
})

function populateShipView(shipData){
    removeChildren(shipView)
    let shipNum=getLastNumber(shipData.url)
    let shipImage =document.createElement('img')

}



populateNav(starships)