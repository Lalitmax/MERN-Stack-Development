/* Object --> Obejct have one key and valeus also say properties */


const person = {name:"Lalit kumar", city:"Samastipur", state:"Bihar"};
console.log(person);

// how to access oobject value
console.log(person.name);
console.log(person.city);
console.log(person.state);

// i can also add arr

console.log("----------------------------")
const name = {fName:"Lalit", LName:"Yadav",address:["samastipur","bihar","Bhorha"]};


console.log(name.fName);
console.log(name.LName);
console.log(name.address);

// how to add key value pair object

name.gender = "Male";
console.log(name);




let key = "values1 hi";

name[key] = "My aim";
console.log(name.key);

// Difference between dot and bracket notation


const key2 = "email";
let word ={
   A:"apple",
   b:"ball",
   c:"cat", d:"Dog",
   "city state" : "samastipur bihar"
}
word[key2] = "abc@gmail.com"
console.log(word)

// how to iterate object

// for in loop
console.log("// for in loop")

for(let i in word){
   console.log(i+" : " +word[i]);
}

console.log(Object.keys(word));
console.log(typeof Object.keys(word))

console.log(Array.isArray(Object.keys(word)))
// for of loop
console.log("For of loop")

for(let k of Object.keys(word)){
   console.log(word[k]);
}



// spread ope in object
console.log("// spread ope in object")
let obj1  ={
   k1 : "value1",
   k2 : "value2",
   k1 : "value3"

}

console.log(obj1) 
 
let newObj = {...obj1,k3:"values3"};
console.log(newObj);


// object destructuring

let a = obj1.k1;
let b = obj1.k2;
console.log(a,b);

// using destructuring

let {k1 , k2} = obj1;
console.log(k1,k2);

// we can store values in another let 
let {k1:v1, k2:v2} = obj1;
console.log(v1,v2);

