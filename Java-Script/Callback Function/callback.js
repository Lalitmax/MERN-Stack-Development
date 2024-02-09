
function sum(a,b){
    console.log(a+b)

}

function calculator(a,b,funcName){
    funcName(a,b);
}

calculator(5,6,sum)