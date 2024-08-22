type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User {
    return { name: "Lalit", email: '', isActive:true}
}

createUser({ name: "Lalit", email: '', isActive:true})