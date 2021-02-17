export const Retailer = (retailer, distributor, nurseries, flowers) => {
    const nurseriesHTML = nurseries.map( n => n.name ).join(" & ")
    const flowersHTML = flowers.map( f => `<li class="retailer--flower">${f.commonName}</li>` ).join("")
    return `
    <article class="retailer">
        <h3 class="retailer--name">${retailer.name}</h2>
        <p class="retailer--address">${retailer.address}</p>
        <p class="retailer--city">${retailer.city}</p>
        <p class="retailer--state">${retailer.state}</p>
        <h5 class="retailer--distributor">Distributed by ${distributor.name}</h5>
        <h5 class="retailer--nurseries">Flowers grown by ${nurseriesHTML}</h5>
        <ul class="retailer--flowers">Available flowers:</ul>
        ${flowersHTML}
    </article>`
}