let nurseryCollection = []

export const useNurseries = () => [...nurseryCollection]

export const getNurseries = () => {
    return fetch(`http://localhost:8088/nursieries`)
        .then( res => res.json())
        .then( pRes => nurseryCollection = pRes)
}