// default parameter
// const sum =(a,b)=>{
//    if(typeof b === "undefined"){
//       b=2;
//    }

//    return a+b;
// }

// console.log(sum(1))


// new way
function sum(a,b=1){
   return a+b;
}
console.log(sum(3));


/* **********************rest parameter **************************/

function printAbc(a,b,...c){
   console.log(`a is =  ${a}`);
   console.log(`b is =  ${b}`);
   console.log(`c is =  ${c}`);
}

printAbc(1,2,3,4,5,6);