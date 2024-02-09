// javascript object notation

const detailsOfUser = {
    name: "Lalit",
    age: 20,
    city:"Samastipur",
    pincode:848208,
    country:"India"
}

console.log(typeof detailsOfUser)
console.log( detailsOfUser)
let str = JSON.stringify(detailsOfUser)
console.log(typeof str)
console.log(str)
let jsonFIle = JSON.parse(str)
console.log(typeof jsonFIle)
console.log(jsonFIle)