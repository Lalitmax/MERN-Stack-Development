let users = [
   {userId:1,firstName:"Lalit", LastName:"Yadav"},
   {userId:2,firstName:"Rahul", LastName:"mm"},
   {userId:3,firstName:"Manish", LastName:"Yadav"},
]

console.log(users)

for(let user of users){
   console.log(user);
}



// nested Destructuring


let [{firstName} ,{LastName}] = users;
console.log(firstName,LastName)