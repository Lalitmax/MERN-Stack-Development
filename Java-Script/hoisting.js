// hoisting -> if your call first and create function after then also  execute 
// only function isEven(), not in function expression and arrow func


isEven(5)
function isEven(num){
   console.log(num%2==0);
}