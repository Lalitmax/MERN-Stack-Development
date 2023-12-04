
let arr1 = [1,2,3,4,5];

// using slice method
let arr2= arr1.slice(0);
console.log("arr2 = "+arr2);

// concate method
let arr3 = [].concat(arr1);
console.log("arr3  = "+arr3);

// spread method
let arr4 = [...arr1];
console.log("arr4 = "+arr4);


//str to arrray using spread
let newArr= [..."abcdef"]
console.log(newArr)