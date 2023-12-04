let Fname = "Lalitmax";

console.log(Fname[0]);

// find length
let lenFname = Fname.length;
console.log(Fname+"Len = "+lenFname);

// usefull method
/* 

trim()
toUpperCase()
toLowerCase()
slice()

*/
// trim()
let str = "   abcd";
console.log(str +str.length) // print eith spaces

str=str.trim(); // trip all spaces and give new string

console.log(str+str.length);




// toUpperCase()
console.log(str.toUpperCase());

// toLowerCase()
console.log(str.toLowerCase());




//slice()
let str2 = "lalitmax"
let newStr = str2.slice(5,9);// str2.slice(5)
console.log(newStr);



/* typeof operator */
console.log("* typeof operator");

let b = 4;
console.log(typeof b); // alos write typeof(b)
b="Lalitiya";
console.log(typeof(b));

/* consvrt number to string */

let c = 5;
c = c+""; // first method
console.log(typeof c);
let d = 6;
d = String(d); // second method
console.log(typeof(d));

/* convert string to number */

let f = "67";

f = +f; // first method
console.log(typeof f);
let g = "89";
g = Number(g);
console.log(typeof g);





/* String concatenation */

let string1 = "lalit";
let string2 = "max";

let fullString  = string1 +" "+string2;

console.log(fullString);


/* template string */


let age=20;
let fn  = "Lalit";

let aboutMe = `my name is ${fn} and my age is ${age}`;
console.log(aboutMe);
console.log(typeof aboutMe);




/* undefined and null */

let aa;
console.log(aa);

aa = 4;
console.log(typeof aa, aa);

// null
let mynull = null;
console.log(mynull);

console.log(typeof  mynull); // this is bug
console.log(typeof null);

/* BigInt -> you can perform all operation from bigint fromg bigint not int and bigint if you do then, will get error*/

let mn = 23433454343433246
console.log(Number.MAX_SAFE_INTEGER); //-> 9007199254740991
console.log(mn); // bound garbage

let newNum = BigInt(234334543434332465445); // slso write newNum = 234334543434332465445n
console.log(newNum);

















