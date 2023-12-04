let n1=6;
let n2 = 6;
// == -> only check value not data type
// === -> both check datatype and value
console.log(n1===n2);  

n1 = "6";
console.log(n1==n2);
// same contraint use in (not eqial !=)
console.log(n1!=n2);
console.log(n1!==n2);

// if else condition

let age=12;

if(age>=18){
   console.log("Can vote");
}else{
   console.log("Can't vote");
}

// if else if consditon

if(age>=18){
   console.log("Can vote");
}else if(age>10){
   console.log("can play crivket");
}else{
   console.log("can't vote");
}

/* truthy and falsy values */

let truthyValue = "lalit"; // 1 , 2 more
let falsyValue = 0; // "" ,false ,"",null more

/* ternary operator */

var ans  = 5<6 ? 5:6;

console.log(ans);


/* && and or || operator */

if(3<5 && 6===6){ // &&
   console.log(true);
}

if(3<5 || 6===7){ // ||
   console.log("true");
}



/* for input use : prompt("GUESS a number") */

let guessNum = prompt("Guess a number");

console.log(typeof guessNum);

let winingNum = 34;

let guessN  = +prompt("Guess your number");

if(winingNum==guessN){
   console.log("Your guess is right!!");

}else{
   console.log("Your guess is wrong!!!");
}





