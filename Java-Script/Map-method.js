const numbers = [1,2,3,4,5];

const square = function(number){
    return number*number;
}

// const nums = numbers.map(square);




const nums = numbers.map((e)=>{
    return e*2;
})



console.log(nums)