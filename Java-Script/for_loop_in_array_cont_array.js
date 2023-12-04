let arr = [5,4,3,2,1];

for(let i = 0; i<arr.length; i++){
   console.table(arr[i]);
}

// const array: 
// --> in this  array you can change but you can't change address that is diff

const num = [1,2,3,4,5];
console.log(num);
num.push(6);
console.log(num);

// if i push new array
num = ["lalit","rahul"];
console.log(num); // TypeError: Assignment to constant variable.



/* 
Note --> best prefer to use const don't use var and let for best practice
*/