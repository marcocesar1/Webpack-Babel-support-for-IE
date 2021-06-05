
export default function ( { username, name, email } ) {
    return `
        <div class='card'>
            <p>${username}</p>
            <p>${name}</p>
            <p>${email}</p>
        </div>
    `;
}