export const Retailer = (retailer, distributor) => {
    return `
    <article class="retailer">
        <h3 class="retailer--name">${retailer.name}</h2>
        <p class="retailer--address">${retailer.address}</p>
        <p class="retailer--city">${retailer.city}</p>
        <p class="retailer--state">${retailer.state}</p>
        <h5 class="retailer--distributor">Distributed by ${distributor.name}</h5>
    </article>`
}