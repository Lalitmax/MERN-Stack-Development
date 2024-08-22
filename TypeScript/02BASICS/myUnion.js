"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var lalit = { name: "Lalit", id: 343 };
lalit = { username: "lalitmax", id: 1234 };
// function getDbId(id: number | string){
//     console.log(`DB is is ${id}`);
// }
getDbId(3);
getDbId("4");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id = id + 2;
    }
}
var data = ["lalit", true, 3];
console.log(data);
var seatAllotment;
seatAllotment = "aisle";
