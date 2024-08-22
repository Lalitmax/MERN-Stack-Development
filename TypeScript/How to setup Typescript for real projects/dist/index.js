"use strict";
// class User {
//     public email: string;
//     name: string;
//     city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "samastiur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course cout shoulb be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
const lalit = new User("lalit@gmail.com", "lalit");
// lalit.city = "samastipur"
