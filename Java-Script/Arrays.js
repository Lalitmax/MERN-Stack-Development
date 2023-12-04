// this array is reference type

let fruits =["Apple", "mango","Grapes"];
console.log(fruits);

// you can store mixed value like int, float, str

let mixed = [1,2,4.5,"Lalit"];
console.log(mixed);

// type of array what
console.log(typeof mixed); //object
console.log(typeof fruits);//object


// how to check that is array or not
console.log(Array.isArray(fruits));  // true means that is array

let obj = {};
console.log(Array.isArray(obj)); // false that is not array, is obj





// indexing on for loop
for(let i=0; i<fruits.length; i++){
   console.log(fruits[i]);
}


// Array Destrcturing

console.log("-------------------Array Destrcturing----------------");
let [frute1,frute2] = fruits;

console.log(frute1);
console.log(frute2);


// you can skip value

console.log("you can skip value");
let [v1, , v2] = fruits;
console.log(v1)
console.log(v2)