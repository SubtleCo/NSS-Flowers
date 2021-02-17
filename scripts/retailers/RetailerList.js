import { Retailer } from "./Retailer.js"
import { getRetailers, useRetailers } from "./RetailerProvider.js"
import { getDistributors, useDistributors } from '../distributors/DistributorProvider.js'
import { getNurseryDistributors, useNurseryDistributors } from "../nurseries/NurseryDistributorProvider.js"
import { getNurseries, useNurseries } from "../nurseries/NurseryProvider.js"
import { getFlowers, useFlowers } from "../flowers/FlowerProvider.js"
import { getNurseryFlowers, useNurseryFlowers } from "../nurseries/NurseryFlowersProvider.js"

const retailersContainer = document.querySelector('.container__retailers')
const eventHub = document.querySelector('#container')

export const RetailerList = () => {
    getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getFlowers)
    .then(getNurseryDistributors)
    .then(getNurseryFlowers)
    .then ( () => {
        const allRetailers = useRetailers()
        const allDistributors = useDistributors()
        const allNurseries = useNurseries()
        const allFlowers = useFlowers()
        const allNurseryDistributors = useNurseryDistributors()
        const allNurseryFlowers = useNurseryFlowers()

        const retailersHTML = allRetailers.map( retailer => {
            const distributor = allDistributors.find(dist => dist.id === retailer.distributorId)

            const retailerNurseryRelationships = allNurseryDistributors.filter( nD => nD.distributorId === distributor.id)

            const nurseries = retailerNurseryRelationships.map( rNR => {
                return allNurseries.find(nursery => rNR.nurseryId === nursery.id)
            })

            const nurseryFlowersForRetailer = nurseries.map(rN => {
                const nurseryFlowers = allNurseryFlowers.filter(nF => nF.nurseryId === rN.id)
                return nurseryFlowers
            }).flat()
            

            // currently allows for duplicates
            const flowers = nurseryFlowersForRetailer.map( nFFR => {
                return allFlowers.find(flower => flower.id === nFFR.flowerId)
            })

            return Retailer(retailer, distributor, nurseries, flowers)

        }).join("")
        render(retailersHTML)
    })
}

const render = item => {
    retailersContainer.innerHTML = item
}

