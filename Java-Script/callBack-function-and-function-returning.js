 function printName(){
   console.log("LAlit Max");
}

function helloName(a){
   // console.log(a)
   printName()  
}

helloName(printName) // pass function as argument

/* **************** function returning **********************/

function helloWorld(){
   function printHelloWorld(){
      console.log("Hello world2");
   }
   return printHelloWorld;
}
let ans = helloWorld();
// console.log(ans)
ans()