type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number // optinal
}

let myUser: User = {
    _id: "123",
    name: "lalit",
    email: "lalit@gmail.com",
    isActive: true,

}


myUser.email = "rahul@gmail.com"
myUser.name = "Rahul"
// myUser._id = "234"

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails=cardNumber & cardDate & {
    cvv: number
}


export { }