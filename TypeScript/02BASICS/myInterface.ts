interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: ()=>string,
    startTrail(): string,
    getCoupon(couponName: string): number
}

interface User { // reopening interface | inheritance
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
const lalit: Admin = {
    dbId: 22, email: "lalitmax@gmail.com", userId: 123,
    githubToken: 'xy23xy',
    role: "admin",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "lalit1123") => {
        return 10
    }
}

lalit.email = "max@gmail.com"
export { }