// the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
class Parent{
    constructor(name){
        console.log("Enter parent constructor")
        this.species  = "homo sapiens"
        this.name = name;
    }
    
    hello(){
        console.log("HEllo");
        
    }
}

class child extends Parent{
 
    constructor(name){
        console.log("Enter child constructor")
        super(name); // to invoke parent class constructor
      
        console.log("exit constructor")
    }

    meet(){
        super.hello()
        console.log("Hi")
    }
}


let obj  = new child("Lalit Max");
obj.meet()