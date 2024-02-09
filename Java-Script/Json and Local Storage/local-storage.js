const detailsOfUser = {
    name: "Lalit",
    age: 20,
    city:"Samastipur",
    pincode:848208,
    country:"India"
}

 
// localStorage.setItem("Name","Lalit")
// console.log(localStorage.getItem('Name'))

// localStorage.removeItem('Name')
// localStorage.clear()

localStorage.setItem('detailsOfUser',JSON.stringify(detailsOfUser))

let detailsOfUser2 = JSON.parse(localStorage.getItem('detailsOfUser'));
console.log(detailsOfUser2)

// to clear all
// localStorage.clear()

// to delete on by one
localStorage.removeItem('detailsOfUser')