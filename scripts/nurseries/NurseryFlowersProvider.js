let nurseryFlowersCollection = []

export const useNurseryFlowers = () => [...nurseryFlowersCollection]

export const getNurseryFlowers = () => {
    return fetch(`http://localhost:8088/nurseryFlowers`)
        .then( res => res.json())
        .then( pRes => nurseryFlowersCollection = pRes)
}