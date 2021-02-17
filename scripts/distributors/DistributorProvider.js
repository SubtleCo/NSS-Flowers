let distributorsCollection = [] 

export const useDistributors = () => [...distributorsCollection]

export const getDistributors = () => {
    return fetch(`http://localhost:8088/distributors`)
        .then( res => res.json() )
        .then( parsedRes => distributorsCollection = parsedRes)
}