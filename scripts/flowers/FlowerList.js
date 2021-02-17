import { Flower } from "./Flower.js"
import { getFlowers, useFlowers } from "./FlowerProvider.js"

const flowersContainer = document.querySelector('.container--flowers')
const eventHub = document.querySelector('#container')

export const FlowerList = () => {
    getFlowers().then( () => {
        const allFlowers = useFlowers()
        const flowersHTML = allFlowers.map( flower => {
            return Flower(flower)
        }).join("")
        render(flowersHTML)
    })
}

const render = item => {
    flowersContainer.innerHTML = item
}