let nurseryDistributorProvidersCollection = []

export const useNurseryDistributors = () => [...nurseryDistributorProvidersCollection]

export const getNurseryDistributors = () => {
    return fetch(`http://localhost:8088/nurseryDistributors`)
        .then( res => res.json())
        .then( pRes => nurseryDistributorProvidersCollection = pRes)
}