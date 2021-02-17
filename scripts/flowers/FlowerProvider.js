let flowersCollection = []

export const useFlowers = () => [...flowersCollection]

export const getFlowers = () => {
    return fetch(`http://localhost:8088/flowers`)
        .then( res => res.json() )
        .then( parsedRes => flowersCollection = parsedRes)
}