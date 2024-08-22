let score: number | string = 33;

score = 44;
score ="55"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id:number;
}

let lalit: User | Admin = {name:"Lalit", id:343}

lalit = {username:"lalitmax", id:1234}

// function getDbId(id: number | string){
//     console.log(`DB is is ${id}`);
// }

getDbId(3);
getDbId("4")


function getDbId(id: number | string){
    if(typeof id==='string'){
        id.toLowerCase()
    }else{
        id= id+2;
    }
}

const data:( string | boolean | number) [] = ["lalit",true,3]
console.log(data)

let seatAllotment: "aisle"| "middle"| "window"
seatAllotment="aisle"
// seatAllotment="crew" //not allowed
export {}