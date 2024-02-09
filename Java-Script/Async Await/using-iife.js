 
// IIFE = Immediately Invoked Function Expression
// IIFE is a function that is called immediately as as it is defined
function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            // resolve('success')
            resolve(200)

        }, 2000);
    })
}
 

(async function(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)

})();


 