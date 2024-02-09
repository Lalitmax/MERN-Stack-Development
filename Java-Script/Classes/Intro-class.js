class myClassm{
      age;
      name;
    SetAddress(name,age){
        this.name = name;
        this.age=age;
    }

    printAddress(){
        console.log(this.name)
        console.log(this.age)
    }


    
     
}

let obj1 = new myClassm;
obj1.SetAddress("Lalit",20);
obj1.printAddress()