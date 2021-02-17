import { Retailer } from "./Retailer.js"
import { getRetailers, useRetailers } from "./RetailerProvider.js"

const retailersContainer = document.querySelector('.container__retailers')
const eventHub = document.querySelector('#container')

export const RetailerList = () => {
    getRetailers().then ( () => {
        const allRetailers = useRetailers()
        const retailersHTML = allRetailers.map( retailer => {
            return Retailer(retailer)
        }).join("")
        render(retailersHTML)
    })
}

const render = item => {
    retailersContainer.innerHTML = item
}