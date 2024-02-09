function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve('success');

        }, 2000);
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve('success')
            // reject('reject')
        }, 2000)
    })
}


asyncFunc1().then((success)=>{
    return asyncFunc2()
}).then((s)=>{
    return asyncFunc1();
}).then(()=>{
    return asyncFunc2()
})

 


 