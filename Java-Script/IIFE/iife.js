function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            console.log('data',id)
            resolve('success')
            
        }, 2000);
    })
}

(async function(){  // IIFE -    immediately invoked function expression
    await getData(1);
    await getData(2);
})();
 