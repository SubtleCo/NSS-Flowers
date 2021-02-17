export const Retailer = (retailer) => {
    return `
    <article class="retailer">
        <h3 class="retailer--name">${retailer.name}</h2>
        <p class="retailer--address">${retailer.address}</p>
        <p class="retailer--city">${retailer.city}</p>
        <p class="retailer--state">${retailer.state}</p>
    </article>`
}