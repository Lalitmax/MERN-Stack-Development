class toyotaCar{
    constructor(brand){
        console.log("Constrcutor called",brand)
    }
    
    stop(){
        console.log("stop")
    }

    start(){
        console.log("start")
    }
}

let fortuner = new toyotaCar("fortuner");
let maxy = new toyotaCar("Maxy");

console.log(fortuner)