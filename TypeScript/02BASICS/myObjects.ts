const User = {
    name:"hitesh",
    email:"lalit@gmail.com",
    isActive:true
}

function createUser({name: string,isPad: boolean }){
}
// createUser(User)
createUser({name:"lalit",isPad: false})

function createCourse():{name: string,price: number}{
    return {name:'reactjs', price:399}
}

export {}