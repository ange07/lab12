// Task 2: listUsers()
export async function listUsers() {
    try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        console.log(users);
        
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}
