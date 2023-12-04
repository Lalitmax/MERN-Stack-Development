// print 0 to 9

for(let i=0; i<=9; i++){ // only access in block of loop
   console.log(i+" ");
}

// console.log("Values of i"+i);


// if i use var --> then access int out of block

for(var j=0; j<=9; j++){
   console.log(j+" ");
}
console.log("values of j "+j);