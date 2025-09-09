// Task 3: addUser(first_name, last_name, email)
export function addUser(firstName, lastName, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email
        }),
    })
    .then(response => response.json())
    .then(data => console.log('Usuario creado:', data))
    .catch(error => console.error('Error:', error));
}
