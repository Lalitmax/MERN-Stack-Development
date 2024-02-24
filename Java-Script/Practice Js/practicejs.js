// console.log("one")
// console.log("two")



// function hello(){
//     console.log("Hello ")
// }
// setTimeout( hello, 4000);

// console.log("three")


// function sum(a,b){
//     console.log(a+b)
// }

// function calc(a,b,sumCallBack){
//     sumCallBack(a,b)
// }

// calc(5,6,sum)


// function getData(dataId, getDataCallBack) {

//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getDataCallBack) {
//             getDataCallBack()
//         }

//     }, 2000);
// }


// getData(4, () => {
//     getData(5,()=>{
//         getData(6)
//     })
// })


// function getData(dataId, getDataCallBack) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve('Success')
//             reject("reject")
//             if(getDataCallBack){
//                 getDataCallBack()
//             }

//         }, 2000);
//     })


// }

// let promise=getData(4)

// promise.then(()=>{
//     console.log('full filled')
// })

// promise.catch((e)=>{
//     console.log(e)
// })


// function asyncFunc(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1',dataId)
//             resolve('succes')

//         }, 2000)
//     })
// }



// asyncFunc(1).
//     then(() => {
//         return asyncFunc(2);

//     }).then(()=>{
//         return asyncFunc(3)
//     }).then(()=>{
//         return asyncFunc(4)
//     }).then((res)=>{
//         console.log(res)
//     })









function api(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data1',id)
            resolve('success')

        }, 2000);
    })
}


async function getData(){
   await api(1).then(res=>{
    console.log(res)
   })
   await api(2).then((res)=>{
    console.log(res)
   })

}

getData()
