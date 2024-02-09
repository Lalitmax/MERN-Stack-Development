// const promise = new Promise((resolve,reject)=>{
//     console.log('i am a promise')
//     // resolve('success')
//     // reject('Some Error')
// })

function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('data:',data);
            // resolve('success')
            reject('Error')
        }, 2000);
    })
}
 
let promise=getData(1)

promise.then(()=>{
    console.log("promise fullfiled")
})

promise.catch(()=>{
    console.log("Error")

})
 
 