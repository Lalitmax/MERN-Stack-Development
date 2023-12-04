const arr = [1,2,3,4,5];

// aim : sum of all the numbers in array

const sum = arr.reduce((accumulator,currentValue)=>{

    return accumulator+currentValue;
})

console.log(sum)

// accumulator, currentValue,  return
//     1             2           3
//     3             3           6
//     6             4           10
//     10            5           15


// Real life Example

const userCart  = [
    {productId: 1, productName : "Mobile", price:15000},
    {productId: 2, productName : "laptop", price:42000},
    {productId: 3, productName : "tv", price:19000},
]

const totalAmount = userCart.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price;
},0)


console.log(totalAmount)