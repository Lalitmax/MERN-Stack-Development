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
    private _courseCount=1;
    readonly city: string = "samastiur"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {

    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNumber){
        if(courseNumber<=1){
            throw new Error("Course cout shoulb be more than 1")
        }
        this._courseCount=courseNumber;
    }
}


const lalit = new User("lalit@gmail.com", "lalit")

// lalit.city = "samastipur"