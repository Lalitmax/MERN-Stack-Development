class Parent{
    constructor(){
        this.species  = "homo sapiens"
    }
    
    hello(){
        console.log("HEllo");
        
    }
}

class child extends Parent{

    hello(){ // mmethod overriding
        console.log("child hello");
    }
    printName(){
        console.log("Lalit Max");
    }
}


let obj  = new child();
obj.hello()