const number = [4,2,5,8,8,6,7];

function multiplyBy2(number, index,arr){
    console.log( number*2, index,arr);
     
}

// multiplyBy2(number,0); That is not right way

/* *************************For Each loop ***************************/


// number.forEach(multiplyBy2)

number.forEach((e)=>{
    console.log(e*2);
})


const users = [
    {firstName: "Lalit", age:20},
    {firstName: "Rahul", age:56}
]

users.forEach(function(user){
    console.log(user
        )
})

for(let user of users){
    console.log(user)
}

/* *******************Map Method ***************************/

