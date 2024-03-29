const fs = require('fs')

let t1 = performance.now();

console.log('1. before hello word')
let txt = fs.readFileSync('demo.txt','utf-8')

console.log(txt)



// fs.readFile('demo.txt','utf-8', (err,txt)=>{
//     console.log(txt)
// })

let t2 = performance.now();
console.log('2. after hello word')

console.log(t2-t1)

