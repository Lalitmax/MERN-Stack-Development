// async function hello(){
//     console.log("HEllo Lalit")
// }

// console.log(hello())


// ************************************************************asynk await for api********************************

function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            // resolve('success')
            resolve(200)

        }, 2000);
    })
}

 
async  function gettingData(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    

}
gettingData()


 