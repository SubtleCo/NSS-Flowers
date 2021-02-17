import { Retailer } from "./Retailer.js"
import { getRetailers, useRetailers } from "./RetailerProvider.js"
import { getDistributors, useDistributors } from '../distributors/DistributorProvider.js'

const retailersContainer = document.querySelector('.container__retailers')
const eventHub = document.querySelector('#container')

export const RetailerList = () => {
    getRetailers()
    .then(getDistributors)
    .then ( () => {
        const allRetailers = useRetailers()
        const allDistributors = useDistributors()
        const retailersHTML = allRetailers.map( retailer => {
            const distributor = allDistributors.find(dist => dist.id === retailer.distributorId)
            return Retailer(retailer, distributor)
        }).join("")
        render(retailersHTML)
    })
}

const render = item => {
    retailersContainer.innerHTML = item
}

