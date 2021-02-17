let retailersCollection = []

export const useRetailers = () => [...retailersCollection]

export const getRetailers = () => {
    return fetch(`http://localhost:8088/retailers`)
        .then( res => res.json() )
        .then( parsedRes => retailersCollection = parsedRes)
}