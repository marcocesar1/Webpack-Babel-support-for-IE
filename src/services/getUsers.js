import { fetch } from 'whatwg-fetch'

export default function(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    });
}