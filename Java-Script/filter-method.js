const arr = [4,5,6,7,8];

const isEven = (number)=>{
      if (number%2===0){
        return number
      }
}

const even = arr.map(isEven);

console.log(even)