function addTwoo(num:number): number{
    
    return num+2;
}

function getUpper(val:string){
    return val.toLowerCase()
}

function signUpUser(name:string,email:string,password:string,isPad:boolean): boolean{
    return true

}

let loginUser = (name:string,emaol:string,isPad:boolean=false):boolean=>{
    return true

}
addTwoo(5)
getUpper('abc')
signUpUser("Lalit","ab@gmail.com","124",true)
loginUser('lalit',"l@gmail.com")




const heros = ["thor","spiderman","ironman"]
heros.map((hero:string): string=>{
    return `hero is ${hero}`
})

function consoleError(errMsg: string):void{
    console.log(errMsg)

}

function handleError(errMsg: string): void{
    throw new Error(errMsg)
}

export {}