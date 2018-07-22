import fetch from 'cross-fetch'

const SERVER_URL = 'http://localhost:3001';

export const fetchInfoFromServer = route => {
    return new Promise((resolve, reject) => {
        fetch(`${SERVER_URL}${route}`)
            .then((response) => {
                resolve(response.json())
            })
    });
}