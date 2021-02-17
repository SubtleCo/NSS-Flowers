export const Flower = (flower) => {
    return `
    <article class="flower">
        <h2 class="flower--name">${flower.commonName}</h2>
        <p class="flower--color">${flower.color}</p>
    </article>`
}